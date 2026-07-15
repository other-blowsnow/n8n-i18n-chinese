import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { xn as useProjectsStore } from "./workflowDocument.store-MSH-Zbjq.js";
import { t as useSettingsStore } from "./settings.store-BSo6Wkgz.js";
import { t as canMessageInstanceAi } from "./instanceAiPermissions-DhoEGqAX.js";
import { a as useInstanceAiHandoff, n as buildInstanceAiCredentialHandoffContext, r as buildInstanceAiCredentialQuestion } from "./useInstanceAiHandoff-DS-i3pEd.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiAvailability.ts
/**
* Whether Instance AI can be used right now: the module is active, an admin
* hasn't disabled it, and the current user has permission to message it. This
* is the canonical gate for Instance AI entry points (nav item, command bar,
* editor/credential hand-offs) — use it instead of re-deriving the three checks.
*/
function useInstanceAiAvailable() {
	const settingsStore = useSettingsStore();
	return computed(() => settingsStore.isModuleActive("instance-ai") && settingsStore.moduleSettings["instance-ai"]?.enabled !== false && canMessageInstanceAi());
}
//#endregion
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
