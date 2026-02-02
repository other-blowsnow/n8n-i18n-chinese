import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Nt as useTelemetry, Vt as useProjectsStore, fs as useSettingsStore, hr as useToast, rt as useCredentialsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { bo as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-Cyrg9Nbl.js";
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
	const userCanClaimOpenAiCredits = computed(() => isAiCreditsEnabled.value && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value);
	async function claimCredits(source) {
		if (!userCanClaimOpenAiCredits.value) return false;
		claimingCredits.value = true;
		try {
			await credentialsStore.claimFreeAiCredits(projectsStore.currentProject?.id);
			if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
			telemetry.track("User claimed OpenAI credits", { source });
			return true;
		} catch (e) {
			toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), i18n.baseText("freeAi.credits.showError.claim.message"));
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
export { useFreeAiCredits as t };
