import { ed as WorkflowIdKey } from "./constants-BaNoJas_.js";
import { Mr as injectStrict } from "./workflowDocument.store-LDfI_CPs.js";
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { useInjectWorkflowId as t };
