import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-D8xRy2J0.js";
import { t as useToast } from "./useToast-DAdCVdhz.js";
import { il as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-BiYlbN9Z.js";
import { cn as useProjectsStore, vt as useCredentialsStore } from "./workflows.store-Cb_U1DcB.js";
import { t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-CUZkGc51.js";
//#region src/app/composables/useFreeAiCredits.ts
var showSuccessCallout = ref(false);
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
			showSuccessCallout.value = true;
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
		showSuccessCallout,
		claimCredits
	};
}
//#endregion
export { useFreeAiCredits as t };
