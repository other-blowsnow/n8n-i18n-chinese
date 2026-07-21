import { dd as WorkflowIdKey } from "./constants-BG93cxLW.js";
import { Fr as injectStrict } from "./workflowDocument.store-CUnvofeB.js";
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { useInjectWorkflowId as t };
