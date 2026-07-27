//#region vite/expression-runtime-stub.ts
/**
* Browser stub for @n8n/expression-runtime.
* The real implementation uses isolated-vm (a Node.js-only native module).
* IS_FRONTEND guards in expression.ts prevent these from ever being instantiated.
*/
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
//#endregion
export { TimeoutError as a, SecurityViolationError as i, IsolatedVmBridge as n, MemoryLimitError as r, ExpressionEvaluator as t };
