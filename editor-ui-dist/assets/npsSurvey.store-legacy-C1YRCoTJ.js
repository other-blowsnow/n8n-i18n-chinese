;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var ref, useSettingsStore, useUIStore, useRootStore, assert, updateNpsSurveyState, getPromptsData, defineStore, NPS_SURVEY_MODAL_KEY, SIX_MONTHS_IN_MILLIS, THREE_DAYS_IN_MILLIS, CONTACT_PROMPT_MODAL_KEY, SEVEN_DAYS_IN_MILLIS, MAXIMUM_TIMES_TO_SHOW_SURVEY_IF_IGNORED, useNpsSurveyStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        assert = _useTelemetryLegacy00FJs._c;
        updateNpsSurveyState = _useTelemetryLegacy00FJs._s;
        getPromptsData = _useTelemetryLegacy00FJs.ps;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_constantsLegacy00NJs) {
        NPS_SURVEY_MODAL_KEY = _constantsLegacy00NJs.Io;
        SIX_MONTHS_IN_MILLIS = _constantsLegacy00NJs.Js;
        THREE_DAYS_IN_MILLIS = _constantsLegacy00NJs.Ys;
        CONTACT_PROMPT_MODAL_KEY = _constantsLegacy00NJs.bo;
        SEVEN_DAYS_IN_MILLIS = _constantsLegacy00NJs.qs;
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