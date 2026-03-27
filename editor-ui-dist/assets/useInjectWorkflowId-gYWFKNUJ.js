import { R as inject } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { zc as WorkflowIdKey } from "./constants-DgFYHRsp.js";
function injectStrict(key, fallback) {
	const resolved = inject(key, fallback);
	if (!resolved) throw new Error(`Could not resolve ${key.description}`);
	return resolved;
}
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
export { injectStrict as n, useInjectWorkflowId as t };
