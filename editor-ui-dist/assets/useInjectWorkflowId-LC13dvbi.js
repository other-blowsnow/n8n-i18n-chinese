import { Vu as WorkflowIdKey } from "./constants-BpExsFUJ.js";
import { jr as injectStrict } from "./workflowDocument.store-MeCEzXgr.js";
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { useInjectWorkflowId as t };
