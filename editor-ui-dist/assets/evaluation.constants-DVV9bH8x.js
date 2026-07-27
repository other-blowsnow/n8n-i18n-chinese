//#region src/features/ai/evaluation.ee/evaluation.constants.ts
var LM_SUBNODE_TYPE_TO_CHATHUB_PROVIDER = {
	"@n8n/n8n-nodes-langchain.lmChatOpenAi": "openai",
	"@n8n/n8n-nodes-langchain.lmChatAnthropic": "anthropic",
	"@n8n/n8n-nodes-langchain.lmChatGoogleGemini": "google",
	"@n8n/n8n-nodes-langchain.lmChatAzureOpenAi": "azureOpenAi",
	"@n8n/n8n-nodes-langchain.lmChatAwsBedrock": "awsBedrock",
	"@n8n/n8n-nodes-langchain.lmChatOllama": "ollama",
	"@n8n/n8n-nodes-langchain.lmChatVercelAiGateway": "vercelAiGateway"
};
var AI_ROOT_NODE_TYPE_SET = new Set([
	"@n8n/n8n-nodes-langchain.agent",
	"@n8n/n8n-nodes-langchain.openAiAssistant",
	"@n8n/n8n-nodes-langchain.chainLlm",
	"@n8n/n8n-nodes-langchain.chainRetrievalQa",
	"@n8n/n8n-nodes-langchain.chainSummarization",
	"@n8n/n8n-nodes-langchain.informationExtractor",
	"@n8n/n8n-nodes-langchain.sentimentAnalysis",
	"@n8n/n8n-nodes-langchain.textClassifier",
	"@n8n/n8n-nodes-langchain.openAi",
	"@n8n/n8n-nodes-langchain.anthropic",
	"@n8n/n8n-nodes-langchain.googleGemini",
	"@n8n/n8n-nodes-langchain.ollama",
	"@n8n/n8n-nodes-langchain.alibabaCloud",
	"@n8n/n8n-nodes-langchain.miniMax",
	"@n8n/n8n-nodes-langchain.moonshot"
]);
function isAiRootNodeType(type) {
	return Boolean(type && AI_ROOT_NODE_TYPE_SET.has(type));
}
var LLM_JUDGE_METRIC_KEYS = new Set(["correctness", "helpfulness"]);
var BUILTIN_PRIMARY_CHECK_KEY = "correctness";
var BUILTIN_MORE_CHECK_KEYS = ["categorization", "toolsUsed"];
var DEFAULT_SELECTED_METRIC_KEYS = ["correctness"];
var CANNED_METRIC_EXPECTED_FIELDS = {
	correctness: {
		name: "expectedAnswer",
		labelKey: "evaluations.wizardSidepanel.step2.expectedAnswer"
	},
	stringSimilarity: {
		name: "expectedAnswer",
		labelKey: "evaluations.wizardSidepanel.step2.expectedAnswer"
	},
	categorization: {
		name: "expectedAnswer",
		labelKey: "evaluations.wizardSidepanel.step2.expectedAnswer"
	},
	toolsUsed: {
		name: "expectedTools",
		labelKey: "evaluations.wizardSidepanel.step2.expectedTools"
	}
};
function getExpectedFieldsForMetrics(selectedMetricKeys) {
	const seen = /* @__PURE__ */ new Set();
	const fields = [];
	for (const key of selectedMetricKeys) {
		const field = CANNED_METRIC_EXPECTED_FIELDS[key];
		if (!field || seen.has(field.name)) continue;
		seen.add(field.name);
		fields.push(field);
	}
	return fields;
}
var CANNED_METRICS = [
	{
		key: "correctness",
		labelKey: "evaluations.wizardSidepanel.metric.correctness.label",
		descriptionKey: "evaluations.wizardSidepanel.metric.correctness.description",
		category: "aiBased",
		icon: "badge-check",
		tileBg: "var(--color--green--tint-3, #e9f7ef)",
		tileFg: "var(--color--green--shade-1, #1a8d4a)"
	},
	{
		key: "helpfulness",
		labelKey: "evaluations.wizardSidepanel.metric.helpfulness.label",
		descriptionKey: "evaluations.wizardSidepanel.metric.helpfulness.description",
		category: "aiBased",
		icon: "thumbs-up",
		tileBg: "var(--color--blue--tint-3, #e6f1fb)",
		tileFg: "var(--color--blue--shade-1, #1a73e8)"
	},
	{
		key: "stringSimilarity",
		labelKey: "evaluations.wizardSidepanel.metric.stringSimilarity.label",
		descriptionKey: "evaluations.wizardSidepanel.metric.stringSimilarity.description",
		category: "stringSimilarity",
		icon: "case-upper",
		tileBg: "var(--color--purple--tint-3, #f0eafb)",
		tileFg: "var(--color--purple--shade-1, #6b3fc4)"
	},
	{
		key: "categorization",
		labelKey: "evaluations.wizardSidepanel.metric.categorization.label",
		descriptionKey: "evaluations.wizardSidepanel.metric.categorization.description",
		category: "categorization",
		icon: "tags",
		tileBg: "var(--color--yellow--tint-3, #fdf3df)",
		tileFg: "var(--color--yellow--shade-1, #c98a04)"
	},
	{
		key: "toolsUsed",
		labelKey: "evaluations.wizardSidepanel.metric.toolsUsed.label",
		descriptionKey: "evaluations.wizardSidepanel.metric.toolsUsed.description",
		category: "toolsUsed",
		icon: "wrench",
		tileBg: "var(--color--teal--tint-3, #e0f5f2)",
		tileFg: "var(--color--teal--shade-1, #128172)"
	}
];
var testCaseErrorDictionary = {
	MOCKED_NODE_NOT_FOUND: "evaluation.runDetail.error.mockedNodeMissing",
	FAILED_TO_EXECUTE_WORKFLOW: "evaluation.runDetail.error.executionFailed",
	INVALID_METRICS: "evaluation.runDetail.error.invalidMetrics",
	UNKNOWN_ERROR: "evaluation.runDetail.error.unknownError",
	NO_METRICS_COLLECTED: "evaluation.runDetail.error.noMetricsCollected"
};
var testRunErrorDictionary = {
	TEST_CASES_NOT_FOUND: "evaluation.listRuns.error.testCasesNotFound",
	INTERRUPTED: "evaluation.listRuns.error.executionInterrupted",
	UNKNOWN_ERROR: "evaluation.listRuns.error.unknownError",
	EVALUATION_TRIGGER_NOT_FOUND: "evaluation.listRuns.error.evaluationTriggerNotFound",
	EVALUATION_TRIGGER_NOT_CONFIGURED: "evaluation.listRuns.error.evaluationTriggerNotConfigured",
	EVALUATION_TRIGGER_DISABLED: "evaluation.listRuns.error.evaluationTriggerDisabled",
	EVALUATION_CONFIG_NOT_FOUND: "evaluation.listRuns.error.evaluationConfigNotFound",
	SET_OUTPUTS_NODE_NOT_CONFIGURED: "evaluation.listRuns.error.setOutputsNodeNotConfigured",
	SET_METRICS_NODE_NOT_FOUND: "evaluation.listRuns.error.setMetricsNodeNotFound",
	SET_METRICS_NODE_NOT_CONFIGURED: "evaluation.listRuns.error.setMetricsNodeNotConfigured",
	CANT_FETCH_TEST_CASES: "evaluation.listRuns.error.cantFetchTestCases",
	PARTIAL_CASES_FAILED: "evaluation.runDetail.error.partialCasesFailed"
};
var getErrorBaseKey = (errorCode) => {
	return testCaseErrorDictionary[errorCode] ?? testRunErrorDictionary[errorCode] ?? "";
};
var statusDictionary = {
	new: {
		icon: "status-new",
		color: "foreground-xdark"
	},
	running: {
		icon: "spinner",
		color: "secondary"
	},
	completed: {
		icon: "status-completed",
		color: "success"
	},
	error: {
		icon: "triangle-alert",
		color: "danger"
	},
	cancelled: {
		icon: "status-canceled",
		color: "foreground-xdark"
	},
	warning: {
		icon: "status-warning",
		color: "warning"
	},
	success: {
		icon: "status-completed",
		color: "success"
	}
};
//#endregion
export { DEFAULT_SELECTED_METRIC_KEYS as a, getErrorBaseKey as c, statusDictionary as d, CANNED_METRIC_EXPECTED_FIELDS as i, getExpectedFieldsForMetrics as l, BUILTIN_PRIMARY_CHECK_KEY as n, LLM_JUDGE_METRIC_KEYS as o, CANNED_METRICS as r, LM_SUBNODE_TYPE_TO_CHATHUB_PROVIDER as s, BUILTIN_MORE_CHECK_KEYS as t, isAiRootNodeType as u };
