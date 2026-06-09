//#region src/features/ai/evaluation.ee/evaluation.constants.ts
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
export { statusDictionary as n, getErrorBaseKey as t };
