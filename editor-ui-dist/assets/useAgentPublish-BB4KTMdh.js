import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { t as useToast } from "./useToast-CYomjipa.js";
import "./constants-BaNoJas_.js";
import { t as useRootStore } from "./useRootStore-DORNi26-.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-Bo0cd845.js";
import { M as unpublishAgent, O as publishAgent, k as revertAgentToPublished } from "./useAgentApi-DLft8ETL.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-ChLpt4OI.js";
import { t as buildAgentConfigFingerprint } from "./agentTelemetry.utils-CCINf46e.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-CUwzKPVE.js";
//#region src/features/agents/composables/useAgentPublish.ts
/**
* Shared publish/unpublish flow used by the builder header button and the list card.
* Owns the confirmation modal, toasts, error handling, and the `publishing` spinner
* state so both call sites stay thin and behave consistently.
*/
function useAgentPublish() {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showMessage, showError } = useToast();
	const agentTelemetry = useAgentTelemetry();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const publishing = ref(false);
	async function publish(projectId, agentId) {
		if (publishing.value) return null;
		publishing.value = true;
		try {
			const updated = await publishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			try {
				const fp = await buildAgentConfigFingerprint(updated.activeVersion?.schema ?? null, []);
				agentTelemetry.trackPublishedAgent({
					agentId,
					configVersion: fp.config_version
				});
			} catch {}
			showMessage({
				title: locale.baseText("agents.publish.toast.published"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.publish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function unpublish(projectId, agentId, agentName) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.unpublish.modal.title", { interpolate: { name: agentName ?? "" } }),
			description: locale.baseText("agents.unpublish.modal.description"),
			confirmButtonText: locale.baseText("agents.unpublish.modal.button.unpublish"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await unpublishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			agentTelemetry.trackUnpublishedAgent({ agentId });
			showMessage({
				title: locale.baseText("agents.publish.toast.unpublished"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.unpublish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function revertToPublished(projectId, agentId) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.revertToPublished.modal.title"),
			description: locale.baseText("agents.revertToPublished.modal.description"),
			confirmButtonText: locale.baseText("agents.revertToPublished.modal.button.revert"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await revertAgentToPublished(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.reverted"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.revert"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	return {
		publish,
		unpublish,
		revertToPublished,
		publishing
	};
}
//#endregion
export { useAgentPublish as t };
