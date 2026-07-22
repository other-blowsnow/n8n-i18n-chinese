import { dd as WorkflowIdKey } from "./constants-CSBjw1Ht.js";
import { Fr as injectStrict } from "./workflowDocument.store-W274j3PU.js";
//#region src/app/composables/useInjectWorkflowId.ts
function useInjectWorkflowId() {
	return injectStrict(WorkflowIdKey);
}
//#endregion
export { useInjectWorkflowId as t };
