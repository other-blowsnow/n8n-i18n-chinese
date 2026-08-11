require('dotenv').config()
const fs = require('fs');
const lodash = require("lodash")
const pLimit = require('p-limit');

if (!process.env.OPENAI_API_KEY){
    console.error("请设置环境变量 OPENAI_API_KEY");
    process.exit(1);
}
if (!process.env.OPENAI_API_BASE){
    console.error("请设置环境变量 OPENAI_API_BASE");
    process.exit(1);
}

const targetLanguages = [
    {
        "name": "zh-CN",
        "label": "简体中文",
    }
]

function retry(fn, maxRetry = 5, interval = 1000) {
    return new Promise((resolve, reject) => {
        let retryCount = 0
        const retry = () => {
            fn()
                .then(resolve)
                .catch(err => {
                    if (retryCount >= maxRetry) {
                        reject(err)
                    } else {
                        retryCount++
                        setTimeout(retry, interval)
                    }
                })
        }
        retry()
    })
}

async function doTranslate(message, language) {
    const response = await retry(() => fetch(process.env.OPENAI_API_BASE + "/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(			{
            "model": process.env.OPENAI_MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": `
你是n8n项目的翻译助手，你的任务是将英文文本翻译成指定的语言。请将以下英文文本翻译成 ${language}
## 限制：
- 仅输出翻译后的内容
- 不要处理 {} 里面包裹的变量名称
`
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
        }),
    }));

    // 请求过多，等待重试
    if (response.status === 429){
        const body = await response.text();
        console.log('翻译请求过多，等待1s后重试...', response.status, response.statusText, body);
        return new Promise((resolve) => {
            return setTimeout(async () => {
                resolve(await doTranslate(message, language));
            }, 1000);
        });
    }

    if (response.status !== 200){
        throw new Error(`翻译请求失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.error){
        throw new Error("翻译失败: ", data.error.message);
    }

    const content =  data.choices[0].message.content

    // 删除思考 <think></think>
    return content.replace(/<think>[\s\S]*>?<\/think>/g, '').trim();
}

function putObjectValue(obj, key, value) {
    const keys = key.split('##');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!current[k]) {
            current[k] = {};
        }
        current = current[k];
    }

    current[keys[keys.length - 1]] = value;
}

async function translate(waitTranslateList, targetObject, targetLanguage) {
    let promises = [];
    let doNum = 0;
    let concurrentNum = parseInt(process.env.OPENAI_API_CONCURRENT || 2);

    console.log('concurrentNum', concurrentNum);

    const limit = pLimit(concurrentNum); // 限制同时执行 5 个任务

    for (let i = 0; i < waitTranslateList.length; i++) {
        let item = waitTranslateList[i];

        promises.push(limit(async () => {
            await doTranslate(item.message, targetLanguage).then(mesasge => {
                console.log("翻译 key", item.key, "为", targetLanguage, ":", item.message , ' => ', mesasge);
                putObjectValue(targetObject, item.key, mesasge)
            }).catch(e => {
                console.log("翻译失败", item.key, ":", e);
            }).finally(() => {
                doNum++;
                console.log("剩余翻译数量", waitTranslateList.length - doNum);
            });
        }))
    }

    await Promise.all(promises);
}

// 收集需要翻译的key和message
function collectMessages(oldSourceLanguages, newSourceLanguages, targetLanguages, parentKey = '', waitTranslateList=[]){
    for (const key in newSourceLanguages) {
        let currentKey = parentKey ? parentKey + "##" + key : key;
        if (newSourceLanguages[key] instanceof Object) {
            collectMessages(oldSourceLanguages[key]  || {}, newSourceLanguages[key], targetLanguages[key] || {}, currentKey, waitTranslateList);
        } else {
            if (targetLanguages[key] === undefined
                || oldSourceLanguages[key] === undefined
                || oldSourceLanguages[key] !== newSourceLanguages[key]) {
                waitTranslateList.push({
                    key: currentKey,
                    message: newSourceLanguages[key]
                })
            }
        }
    }
}


async function run(){
    const oldEnLanguages = require("./en.json");
    const newEnNodesLanguages = fs.existsSync("./en-nodes.json") ? require("./en-nodes.json") : {};
    const enJsonUrl = "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/frontend/%40n8n/i18n/src/locales/en.json";
    const parsedEnJsonUrl = new URL(enJsonUrl);
    if (parsedEnJsonUrl.hostname !== "raw.githubusercontent.com") {
        throw new Error(`Fetch URL not allowed: ${parsedEnJsonUrl.hostname}`);
    }
    let newEnLanguages = await fetch(enJsonUrl)
        .then(res => res.json())

    for (const targetLanguage of targetLanguages) {
        let targetLanguages = {};
        let fileName = `../languages/${targetLanguage.name}.json`;
        if (fs.existsSync(fileName)){
            targetLanguages = JSON.parse(fs.readFileSync(fileName, "utf8"))
        }else{
            console.warn(targetLanguage + "语言文件不存在，创建新文件: ", fileName);
        }
        const waitTranslateList = []

        newEnLanguages = lodash.merge({}, newEnLanguages, newEnNodesLanguages);
        collectMessages(oldEnLanguages, newEnLanguages , targetLanguages, "", waitTranslateList)
        await translate(waitTranslateList, targetLanguages, targetLanguage.label);
        // 最后使用 enLanguages的key  排序 targetLanguages key
        const sortedTargetLanguages = {};
        for (const key in newEnLanguages) {
            if (targetLanguages[key] !== undefined) {
                sortedTargetLanguages[key] = targetLanguages[key];
            }
        }
        // 将翻译后的语言写入文件
        fs.writeFileSync(fileName, JSON.stringify(sortedTargetLanguages, null, 4));
    }
    fs.writeFileSync("./en.json", JSON.stringify(newEnLanguages, null, 4));
}

run();
