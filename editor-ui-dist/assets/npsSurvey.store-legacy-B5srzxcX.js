;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./_baseOrderBy-legacy-DT_yzgQM.js"], function (_export, _context) {
    "use strict";

    var ref, useSettingsStore, useUIStore, getPromptsData, updateNpsSurveyState, SEVEN_DAYS_IN_MILLIS, THREE_DAYS_IN_MILLIS, SIX_MONTHS_IN_MILLIS, NPS_SURVEY_MODAL_KEY, CONTACT_PROMPT_MODAL_KEY, assert, defineStore, useRootStore, MAXIMUM_TIMES_TO_SHOW_SURVEY_IF_IGNORED, useNpsSurveyStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        getPromptsData = _useTelemetryLegacy00HJs.fs;
        updateNpsSurveyState = _useTelemetryLegacy00HJs.gs;
      }, function (_constantsLegacy00RJs) {
        SEVEN_DAYS_IN_MILLIS = _constantsLegacy00RJs.fc;
        THREE_DAYS_IN_MILLIS = _constantsLegacy00RJs.mc;
        SIX_MONTHS_IN_MILLIS = _constantsLegacy00RJs.pc;
        NPS_SURVEY_MODAL_KEY = _constantsLegacy00RJs.ts;
        CONTACT_PROMPT_MODAL_KEY = _constantsLegacy00RJs.zo;
      }, function (_baseOrderByLegacy00XJs) {
        assert = _baseOrderByLegacy00XJs.g;
        defineStore = _baseOrderByLegacy00XJs.k;
        useRootStore = _baseOrderByLegacy00XJs.r;
      }],
      execute: function () {
        //#region src/app/stores/npsSurvey.store.ts
        MAXIMUM_TIMES_TO_SHOW_SURVEY_IF_IGNORED = 3;
        _export("t", useNpsSurveyStore = defineStore("npsSurvey", () => {
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
            if (promptsData.value?.showContactPrompt) uiStore.openModal(CONTACT_PROMPT_MODAL_KEY);else await useNpsSurveyStore().showNpsSurveyIfPossible();
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
        })); //#endregion
      }
    };
  });
})();