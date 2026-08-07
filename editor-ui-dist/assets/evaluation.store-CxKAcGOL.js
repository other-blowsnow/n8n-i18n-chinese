import { t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { a as require_toString } from "./get-BDIJP53P.js";
import { i as defineStore } from "./constants-XpttQcgc.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { Gt as require__createCompounder } from "./src-CwQD7B26.js";
import { Qn as request, Xn as makeRestApiRequest, t as useRootStore } from "./useRootStore-BGtY9ILv.js";
import { t as useSettingsStore } from "./settings.store-BlV3VFh0.js";
import "./settings.store-CYihJKMA.js";
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_baseSlice.js
var require__baseSlice = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.slice` without an iteratee call guard.
	*
	* @private
	* @param {Array} array The array to slice.
	* @param {number} [start=0] The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the slice of `array`.
	*/
	function baseSlice(array, start, end) {
		var index = -1, length = array.length;
		if (start < 0) start = -start > length ? 0 : length + start;
		end = end > length ? length : end;
		if (end < 0) end += length;
		length = start > end ? 0 : end - start >>> 0;
		start >>>= 0;
		var result = Array(length);
		while (++index < length) result[index] = array[index + start];
		return result;
	}
	module.exports = baseSlice;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_castSlice.js
var require__castSlice = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSlice = require__baseSlice();
	/**
	* Casts `array` to a slice if it's needed.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {number} start The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the cast slice.
	*/
	function castSlice(array, start, end) {
		var length = array.length;
		end = end === void 0 ? length : end;
		return !start && end >= length ? array : baseSlice(array, start, end);
	}
	module.exports = castSlice;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_hasUnicode.js
var require__hasUnicode = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
	/**
	* Checks if `string` contains Unicode symbols.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {boolean} Returns `true` if a symbol is found, else `false`.
	*/
	function hasUnicode(string) {
		return reHasUnicode.test(string);
	}
	module.exports = hasUnicode;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_asciiToArray.js
var require__asciiToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts an ASCII `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function asciiToArray(string) {
		return string.split("");
	}
	module.exports = asciiToArray;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_unicodeToArray.js
var require__unicodeToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to compose unicode character classes. */
	var rsAstralRange = "\\ud800-\\udfff", rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsVarRange = "\\ufe0e\\ufe0f";
	/** Used to compose unicode capture groups. */
	var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
		rsNonAstral,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
		rsNonAstral + rsCombo + "?",
		rsCombo,
		rsRegional,
		rsSurrPair,
		rsAstral
	].join("|") + ")";
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
	/**
	* Converts a Unicode `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function unicodeToArray(string) {
		return string.match(reUnicode) || [];
	}
	module.exports = unicodeToArray;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_stringToArray.js
var require__stringToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var asciiToArray = require__asciiToArray(), hasUnicode = require__hasUnicode(), unicodeToArray = require__unicodeToArray();
	/**
	* Converts `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function stringToArray(string) {
		return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
	}
	module.exports = stringToArray;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_createCaseFirst.js
var require__createCaseFirst = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castSlice = require__castSlice(), hasUnicode = require__hasUnicode(), stringToArray = require__stringToArray(), toString = require_toString();
	/**
	* Creates a function like `_.lowerFirst`.
	*
	* @private
	* @param {string} methodName The name of the `String` case method to use.
	* @returns {Function} Returns the new case function.
	*/
	function createCaseFirst(methodName) {
		return function(string) {
			string = toString(string);
			var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
			var chr = strSymbols ? strSymbols[0] : string.charAt(0);
			var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
			return chr[methodName]() + trailing;
		};
	}
	module.exports = createCaseFirst;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/upperFirst.js
var require_upperFirst = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createCaseFirst()("toUpperCase");
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/startCase.js
var require_startCase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var createCompounder = require__createCompounder(), upperFirst = require_upperFirst();
	module.exports = createCompounder(function(result, word, index) {
		return result + (index ? " " : "") + upperFirst(word);
	});
}));
//#endregion
//#region src/features/ai/evaluation.ee/evaluation.api.ts
var getTestRunsEndpoint = (workflowId, runId) => `/workflows/${workflowId}/test-runs${runId ? `/${runId}` : ""}`;
var getTestRuns = async (context, workflowId) => {
	return await makeRestApiRequest(context, "GET", getTestRunsEndpoint(workflowId));
};
var getTestRun = async (context, params) => {
	return await makeRestApiRequest(context, "GET", getTestRunsEndpoint(params.workflowId, params.runId));
};
var startTestRun = async (context, workflowId, options) => {
	const body = {};
	if (options?.concurrency !== void 0) body.concurrency = options.concurrency;
	if (options?.evaluationConfigId !== void 0) body.evaluationConfigId = options.evaluationConfigId;
	if (options?.compileFromConfig !== void 0) body.compileFromConfig = options.compileFromConfig;
	if (options?.rowIndices !== void 0) body.rowIndices = options.rowIndices;
	return await request({
		method: "POST",
		baseURL: context.baseUrl,
		endpoint: `/workflows/${workflowId}/test-runs/new`,
		headers: { "push-ref": context.pushRef },
		data: Object.keys(body).length > 0 ? body : void 0
	});
};
var cancelTestRun = async (context, workflowId, testRunId) => {
	return await request({
		method: "POST",
		baseURL: context.baseUrl,
		endpoint: `/workflows/${workflowId}/test-runs/${testRunId}/cancel`,
		headers: { "push-ref": context.pushRef }
	});
};
var deleteTestRun = async (context, params) => {
	return await makeRestApiRequest(context, "DELETE", getTestRunsEndpoint(params.workflowId, params.runId));
};
var getRunExecutionsEndpoint = (workflowId, runId) => `/workflows/${workflowId}/test-runs/${runId}/test-cases`;
var getTestCaseExecutions = async (context, workflowId, runId) => {
	return await makeRestApiRequest(context, "GET", getRunExecutionsEndpoint(workflowId, runId));
};
var createEvaluationConfig = async (context, workflowId, payload) => {
	return await makeRestApiRequest(context, "POST", `/workflows/${workflowId}/evaluation-configs`, payload);
};
var listEvaluationConfigs = async (context, workflowId) => {
	return await makeRestApiRequest(context, "GET", `/workflows/${workflowId}/evaluation-configs`);
};
var updateEvaluationConfig = async (context, workflowId, configId, payload) => {
	return await makeRestApiRequest(context, "PUT", `/workflows/${workflowId}/evaluation-configs/${configId}`, payload);
};
var deleteEvaluationConfig = async (context, workflowId, configId) => {
	return await makeRestApiRequest(context, "DELETE", `/workflows/${workflowId}/evaluation-configs/${configId}`);
};
var getDatasetCandidate = async (context, workflowId, configId, executionId) => {
	return await makeRestApiRequest(context, "GET", `/workflows/${workflowId}/evaluation-configs/${configId}/dataset-candidate`, { executionId });
};
var addDatasetRow = async (context, workflowId, configId, payload) => {
	return await makeRestApiRequest(context, "POST", `/workflows/${workflowId}/evaluation-configs/${configId}/dataset-rows`, payload);
};
var cancelTestCase = async (context, workflowId, runId, caseId) => {
	return await makeRestApiRequest(context, "POST", `${getRunExecutionsEndpoint(workflowId, runId)}/${caseId}/cancel`);
};
//#endregion
//#region src/features/ai/evaluation.ee/evaluation.store.ts
var useEvaluationStore = defineStore(STORES.EVALUATION, () => {
	const loadingTestRuns = ref(false);
	const testRunsById = ref({});
	const testCaseExecutionsById = ref({});
	const pollingTimeouts = ref({});
	const evaluationConfigsByWorkflowId = ref({});
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const isEvaluationEnabled = computed(() => settingsStore.settings.evaluation?.quota !== 0);
	const isLoading = computed(() => loadingTestRuns.value);
	const testRunsByWorkflowId = computed(() => {
		return Object.values(testRunsById.value).reduce((acc, run) => {
			if (!acc[run.workflowId]) acc[run.workflowId] = [];
			acc[run.workflowId].push(run);
			return acc;
		}, {});
	});
	const fetchTestCaseExecutions = async (params) => {
		const testCaseExecutions = await getTestCaseExecutions(rootStore.restApiContext, params.workflowId, params.runId);
		testCaseExecutions.forEach((testCaseExecution) => {
			testCaseExecutionsById.value[testCaseExecution.id] = {
				...testCaseExecution,
				testRunId: params.runId
			};
		});
		return testCaseExecutions;
	};
	const fetchTestRuns = async (workflowId) => {
		loadingTestRuns.value = true;
		try {
			const runs = await getTestRuns(rootStore.restApiContext, workflowId);
			runs.forEach((run) => {
				testRunsById.value[run.id] = run;
				if (["running", "new"].includes(run.status)) startPollingTestRun(workflowId, run.id);
			});
			return runs;
		} finally {
			loadingTestRuns.value = false;
		}
	};
	const getTestRun$1 = async (params) => {
		const run = await getTestRun(rootStore.restApiContext, params);
		testRunsById.value[run.id] = run;
		return run;
	};
	const startTestRun$1 = async (workflowId, options) => {
		return await startTestRun(rootStore.restApiContext, workflowId, options);
	};
	const cancelTestRun$1 = async (workflowId, testRunId) => {
		return await cancelTestRun(rootStore.restApiContext, workflowId, testRunId);
	};
	const cancelTestCase$1 = async (params) => {
		const result = await cancelTestCase(rootStore.restApiContext, params.workflowId, params.runId, params.caseId);
		const cached = testCaseExecutionsById.value[params.caseId];
		if (cached) testCaseExecutionsById.value[params.caseId] = {
			...cached,
			status: "cancelled"
		};
		return result;
	};
	const deleteTestRun$1 = async (params) => {
		const result = await deleteTestRun(rootStore.restApiContext, params);
		if (result.success) {
			const { [params.runId]: deleted, ...rest } = testRunsById.value;
			testRunsById.value = rest;
		}
		return result;
	};
	const fetchEvaluationConfigs = async (workflowId) => {
		const configs = await listEvaluationConfigs(rootStore.restApiContext, workflowId);
		evaluationConfigsByWorkflowId.value[workflowId] = configs;
		return configs;
	};
	const getDatasetCandidate$1 = async (params) => {
		return await getDatasetCandidate(rootStore.restApiContext, params.workflowId, params.configId, params.executionId);
	};
	const addExecutionToDataset = async (params) => {
		return await addDatasetRow(rootStore.restApiContext, params.workflowId, params.configId, params.payload);
	};
	const startPollingTestRun = (workflowId, runId) => {
		const poll = async () => {
			try {
				const run = await getTestRun$1({
					workflowId,
					runId
				});
				if (["running", "new"].includes(run.status)) {
					await fetchTestCaseExecutions({
						workflowId,
						runId
					}).catch(() => {});
					pollingTimeouts.value[runId] = setTimeout(poll, 1e3);
				} else {
					await fetchTestCaseExecutions({
						workflowId,
						runId
					}).catch(() => {});
					delete pollingTimeouts.value[runId];
				}
			} catch (error) {
				pollingTimeouts.value[runId] = setTimeout(poll, 1e3);
			}
		};
		poll();
	};
	const cleanupPolling = () => {
		Object.values(pollingTimeouts.value).forEach((timeout) => {
			clearTimeout(timeout);
		});
		pollingTimeouts.value = {};
	};
	return {
		testRunsById,
		testCaseExecutionsById,
		evaluationConfigsByWorkflowId,
		isLoading,
		isEvaluationEnabled,
		testRunsByWorkflowId,
		fetchTestCaseExecutions,
		fetchTestRuns,
		getTestRun: getTestRun$1,
		startTestRun: startTestRun$1,
		cancelTestRun: cancelTestRun$1,
		cancelTestCase: cancelTestCase$1,
		deleteTestRun: deleteTestRun$1,
		fetchEvaluationConfigs,
		cleanupPolling,
		getDatasetCandidate: getDatasetCandidate$1,
		addExecutionToDataset
	};
}, {});
//#endregion
export { updateEvaluationConfig as a, require__baseSlice as c, listEvaluationConfigs as i, createEvaluationConfig as n, require_startCase as o, deleteEvaluationConfig as r, require_upperFirst as s, useEvaluationStore as t };
