var ExpressionEvaluator = class {
	constructor(_config) {
		throw new Error("ExpressionEvaluator is not available in browser environments");
	}
};
var IsolatedVmBridge = class {
	constructor(_config) {
		throw new Error("IsolatedVmBridge is not available in browser environments");
	}
};
var MemoryLimitError = class extends Error {};
var TimeoutError = class extends Error {};
var SecurityViolationError = class extends Error {};
export { TimeoutError as a, SecurityViolationError as i, IsolatedVmBridge as n, MemoryLimitError as r, ExpressionEvaluator as t };
