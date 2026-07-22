import { wn as useProjectsStore } from "./workflowDocument.store-W274j3PU.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-CEPWMKNd.js";
import { n as buildInstanceAiCredentialHandoffContext, r as buildInstanceAiCredentialQuestion, s as useInstanceAiHandoff } from "./useInstanceAiHandoff-B8qGu9d8.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiCredentialHelp.ts
/**
* Credential setup-help handler for surfaces with no workflow context — the
* credentials list and its new-credential dialog (where there's nothing to carry
* as an artifact). Opens Instance AI in a new tab asking about the credential
* alone and keeps the credential modal open. Returns a factory so the active
* project is resolved at click time; the factory returns undefined when Instance
* AI isn't available, which keeps the help button hidden.
*/
function useInstanceAiCredentialHelp() {
	const projectsStore = useProjectsStore();
	const instanceAiAvailable = useInstanceAiAvailable();
	const { startThread } = useInstanceAiHandoff();
	return () => {
		if (!instanceAiAvailable.value) return void 0;
		return async (credential) => {
			const projectId = projectsStore.currentProject?.id ?? projectsStore.personalProject?.id;
			if (!projectId) return false;
			await startThread(projectId, buildInstanceAiCredentialQuestion(credential), void 0, void 0, {
				newTab: true,
				context: buildInstanceAiCredentialHandoffContext(credential)
			});
			return false;
		};
	};
}
//#endregion
export { useInstanceAiCredentialHelp as t };
