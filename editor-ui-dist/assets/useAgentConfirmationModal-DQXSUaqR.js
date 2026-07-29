import { Bi as MODAL_CLOSE, Vi as MODAL_CONFIRM, _i as AGENT_CONFIRMATION_MODAL_KEY, zi as MODAL_CANCEL } from "./constants-BzyjfRY2.js";
import { f as useUIStore } from "./users.store-BjOQ_paL.js";
//#region src/features/agents/composables/useAgentConfirmationModal.ts
function useAgentConfirmationModal() {
	const uiStore = useUIStore();
	async function openAgentConfirmationModal(options) {
		return await new Promise((resolve) => {
			uiStore.openModalWithData({
				name: AGENT_CONFIRMATION_MODAL_KEY,
				data: {
					...options,
					onConfirm: () => {
						resolve(MODAL_CONFIRM);
					},
					onCancel: () => {
						resolve(MODAL_CANCEL);
					},
					onClose: () => {
						resolve(MODAL_CLOSE);
					}
				}
			});
		});
	}
	return { openAgentConfirmationModal };
}
//#endregion
export { useAgentConfirmationModal as t };
