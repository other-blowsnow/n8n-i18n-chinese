import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-x10Anb9r.js";
import { pt as useCredentialsStore, rn as useTelemetry, t as useUsersStore, tn as useProjectsStore } from "./users.store-V46mYCxM.js";
import { t as useToast } from "./useToast-vrHmeB6l.js";
import { Nc as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-B2-iseoM.js";
import { t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
//#region src/app/composables/useFreeAiCredits.ts
function useFreeAiCredits() {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const claimingCredits = ref(false);
	const isAiCreditsEnabled = computed(() => settingsStore.isAiCreditsEnabled);
	const aiCreditsQuota = computed(() => settingsStore.aiCreditsQuota);
	const userHasOpenAiCredentialAlready = computed(() => credentialsStore.allCredentials.some((credential) => credential.type === OPEN_AI_API_CREDENTIAL_TYPE));
	const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
	const userCanClaimOpenAiCredits = computed(() => isAiCreditsEnabled.value && !settingsStore.isAiGatewayEnabled && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value);
	async function claimCredits(source) {
		if (!userCanClaimOpenAiCredits.value) return false;
		claimingCredits.value = true;
		try {
			await credentialsStore.claimFreeAiCredits(projectsStore.currentProject?.id);
			if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
			telemetry.track("User claimed OpenAI credits", { source });
			return true;
		} catch (e) {
			toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), { message: i18n.baseText("freeAi.credits.showError.claim.message") });
			return false;
		} finally {
			claimingCredits.value = false;
		}
	}
	return {
		isAiCreditsEnabled,
		aiCreditsQuota,
		userCanClaimOpenAiCredits,
		claimingCredits,
		claimCredits
	};
}
//#endregion
export { useFreeAiCredits as t };
