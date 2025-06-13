import { H as useUIStore, a3 as useNpsSurveyStore, Q as useWorkflowsStore, a5 as useWorkflowHelpers, ai as useMessage, c as useI18n, dy as MODAL_CLOSE, S as PLACEHOLDER_EMPTY_WORKFLOW_ID, dz as MODAL_CANCEL, aj as MODAL_CONFIRM, V as VIEWS } from "./index-CkuwrFdE.js";
function useWorkflowSaving({ router }) {
  const uiStore = useUIStore();
  const npsSurveyStore = useNpsSurveyStore();
  const message = useMessage();
  const i18n = useI18n();
  const workflowsStore = useWorkflowsStore();
  const { saveCurrentWorkflow } = useWorkflowHelpers({ router });
  async function promptSaveUnsavedWorkflowChanges(next, {
    confirm = async () => true,
    cancel = async () => {
    }
  } = {}) {
    if (!uiStore.stateIsDirty || workflowsStore.workflow.isArchived) {
      next();
      return;
    }
    const response = await message.confirm(
      i18n.baseText("generic.unsavedWork.confirmMessage.message"),
      {
        title: i18n.baseText("generic.unsavedWork.confirmMessage.headline"),
        type: "warning",
        confirmButtonText: i18n.baseText("generic.unsavedWork.confirmMessage.confirmButtonText"),
        cancelButtonText: i18n.baseText("generic.unsavedWork.confirmMessage.cancelButtonText"),
        showClose: true
      }
    );
    switch (response) {
      case MODAL_CONFIRM:
        const saved = await saveCurrentWorkflow({}, false);
        if (saved) {
          await npsSurveyStore.fetchPromptsData();
          uiStore.stateIsDirty = false;
          const goToNext = await confirm();
          next(goToNext);
        } else {
          stayOnCurrentWorkflow(next);
        }
        return;
      case MODAL_CANCEL:
        await cancel();
        uiStore.stateIsDirty = false;
        next();
        return;
      case MODAL_CLOSE:
        if (workflowsStore.workflow.id !== PLACEHOLDER_EMPTY_WORKFLOW_ID) {
          stayOnCurrentWorkflow(next);
        }
        return;
    }
  }
  function stayOnCurrentWorkflow(next) {
    next(
      router.resolve({
        name: VIEWS.WORKFLOW,
        params: { name: workflowsStore.workflow.id }
      })
    );
  }
  return {
    promptSaveUnsavedWorkflowChanges
  };
}
export {
  useWorkflowSaving as u
};
