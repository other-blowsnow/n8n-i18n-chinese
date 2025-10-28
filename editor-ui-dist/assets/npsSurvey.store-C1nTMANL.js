import { It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Js as useRootStore, Li as useUIStore, fc as assert, gc as defineStore, ms as updateNpsSurveyState, us as getPromptsData, zo as useSettingsStore } from "./useTelemetry-C3cN19b2.js";
import { Jr as NPS_SURVEY_MODAL_KEY, Mi as SIX_MONTHS_IN_MILLIS, Oi as SEVEN_DAYS_IN_MILLIS, Xi as THREE_DAYS_IN_MILLIS, ut as CONTACT_PROMPT_MODAL_KEY } from "./constants-CiCQTzlI.js";
const useNpsSurveyStore = defineStore("npsSurvey", () => {
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const settingsStore = useSettingsStore();
	const shouldShowNpsSurveyNext = ref(false);
	const currentSurveyState = ref();
	const currentUserId = ref();
	const promptsData = ref();
	function setupNpsSurveyOnLogin(userId, settings) {
		currentUserId.value = userId;
		if (settings) setShouldShowNpsSurvey(settings);
	}
	function setShouldShowNpsSurvey(settings) {
		if (!settingsStore.isTelemetryEnabled) {
			shouldShowNpsSurveyNext.value = false;
			return;
		}
		currentSurveyState.value = settings.npsSurvey;
		const userActivated = Boolean(settings.userActivated);
		const userActivatedAt = settings.userActivatedAt;
		const lastShownAt = currentSurveyState.value?.lastShownAt;
		if (!userActivated || !userActivatedAt) return;
		if (Date.now() - userActivatedAt < THREE_DAYS_IN_MILLIS) return;
		if (!currentSurveyState.value || !lastShownAt) {
			shouldShowNpsSurveyNext.value = true;
			return;
		}
		const timeSinceLastShown = Date.now() - lastShownAt;
		if ("responded" in currentSurveyState.value && timeSinceLastShown < SIX_MONTHS_IN_MILLIS) return;
		if ("waitingForResponse" in currentSurveyState.value && timeSinceLastShown < SEVEN_DAYS_IN_MILLIS) return;
		shouldShowNpsSurveyNext.value = true;
	}
	function resetNpsSurveyOnLogOut() {
		shouldShowNpsSurveyNext.value = false;
	}
	async function showNpsSurveyIfPossible() {
		if (!shouldShowNpsSurveyNext.value) return;
		uiStore.openModal(NPS_SURVEY_MODAL_KEY);
		shouldShowNpsSurveyNext.value = false;
		const updatedState = {
			waitingForResponse: true,
			lastShownAt: Date.now(),
			ignoredCount: currentSurveyState.value && "ignoredCount" in currentSurveyState.value ? currentSurveyState.value.ignoredCount : 0
		};
		await updateNpsSurveyState(rootStore.restApiContext, updatedState);
		currentSurveyState.value = updatedState;
	}
	async function respondNpsSurvey() {
		assert(currentSurveyState.value);
		const updatedState = {
			responded: true,
			lastShownAt: currentSurveyState.value.lastShownAt
		};
		await updateNpsSurveyState(rootStore.restApiContext, updatedState);
		currentSurveyState.value = updatedState;
	}
	async function ignoreNpsSurvey() {
		assert(currentSurveyState.value);
		const state = currentSurveyState.value;
		const ignoredCount = "ignoredCount" in state ? state.ignoredCount : 0;
		if (ignoredCount + 1 >= 3) {
			await respondNpsSurvey();
			return;
		}
		const updatedState = {
			waitingForResponse: true,
			lastShownAt: currentSurveyState.value.lastShownAt,
			ignoredCount: ignoredCount + 1
		};
		await updateNpsSurveyState(rootStore.restApiContext, updatedState);
		currentSurveyState.value = updatedState;
	}
	async function fetchPromptsData() {
		assert(currentUserId.value);
		if (!settingsStore.isTelemetryEnabled) return;
		try {
			promptsData.value = await getPromptsData(settingsStore.settings.instanceId, currentUserId.value);
		} catch (e) {
			console.error("Failed to fetch prompts data");
		}
		if (promptsData.value?.showContactPrompt) uiStore.openModal(CONTACT_PROMPT_MODAL_KEY);
		else await useNpsSurveyStore().showNpsSurveyIfPossible();
	}
	return {
		promptsData,
		resetNpsSurveyOnLogOut,
		showNpsSurveyIfPossible,
		ignoreNpsSurvey,
		respondNpsSurvey,
		setupNpsSurveyOnLogin,
		fetchPromptsData
	};
});
export { useNpsSurveyStore as t };
