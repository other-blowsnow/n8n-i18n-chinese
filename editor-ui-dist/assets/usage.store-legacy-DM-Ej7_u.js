;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, reactive, useSettingsStore, getLicense, useRootStore, renewLicense, registerCommunityEdition, requestLicenseTrial, activateLicenseKey, defineStore, DEFAULT_PLAN_NAME, DEFAULT_STATE, useUsageStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        getLicense = _useTelemetryLegacy00FJs.Jo;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        renewLicense = _useTelemetryLegacy00FJs.Xo;
        registerCommunityEdition = _useTelemetryLegacy00FJs.Yo;
        requestLicenseTrial = _useTelemetryLegacy00FJs.Zo;
        activateLicenseKey = _useTelemetryLegacy00FJs.qo;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }],
      execute: function () {
        //#region src/features/settings/usage/usage.store.ts
        DEFAULT_PLAN_NAME = "Community";
        DEFAULT_STATE = {
          loading: true,
          data: {
            usage: {
              activeWorkflowTriggers: {
                limit: -1,
                value: 0,
                warningThreshold: .8
              },
              workflowsHavingEvaluations: {
                value: 0,
                limit: 0
              }
            },
            license: {
              planId: "",
              planName: DEFAULT_PLAN_NAME
            }
          }
        };
        _export("t", useUsageStore = defineStore("usage", () => {
          const rootStore = useRootStore();
          const settingsStore = useSettingsStore();
          const state = reactive({
            ...DEFAULT_STATE
          });
          const planName = computed(() => state.data.license.planName || DEFAULT_PLAN_NAME);
          const planId = computed(() => state.data.license.planId);
          const activeWorkflowTriggersLimit = computed(() => state.data.usage.activeWorkflowTriggers.limit);
          const activeWorkflowTriggersCount = computed(() => state.data.usage.activeWorkflowTriggers.value);
          const workflowsWithEvaluationsLimit = computed(() => state.data.usage.workflowsHavingEvaluations.limit);
          const workflowsWithEvaluationsCount = computed(() => state.data.usage.workflowsHavingEvaluations.value);
          const executionPercentage = computed(() => activeWorkflowTriggersCount.value / activeWorkflowTriggersLimit.value * 100);
          const instanceId = computed(() => settingsStore.settings.instanceId);
          const managementToken = computed(() => state.data.managementToken);
          const appVersion = computed(() => settingsStore.settings.versionCli);
          const commonSubscriptionAppUrlQueryParams = computed(() => `instanceid=${instanceId.value}&version=${appVersion.value}`);
          const subscriptionAppUrl = computed(() => settingsStore.settings.license.environment === "production" ? "https://subscription.n8n.io" : "https://staging-subscription.n8n.io");
          const setLoading = loading => {
            state.loading = loading;
          };
          const setData = data => {
            state.data = data;
          };
          const getLicenseInfo = async () => {
            setData(await getLicense(rootStore.restApiContext));
          };
          const activateLicense = async (activationKey, eulaUri) => {
            setData(await activateLicenseKey(rootStore.restApiContext, {
              activationKey,
              eulaUri
            }));
            await settingsStore.getSettings();
            await settingsStore.getModuleSettings();
          };
          const refreshLicenseManagementToken = async () => {
            try {
              setData(await renewLicense(rootStore.restApiContext));
            } catch (error) {
              await getLicenseInfo();
            }
          };
          const requestEnterpriseLicenseTrial = async () => {
            await requestLicenseTrial(rootStore.restApiContext);
          };
          const registerCommunityEdition$1 = async email => await registerCommunityEdition(rootStore.restApiContext, {
            email
          });
          return {
            setLoading,
            getLicenseInfo,
            setData,
            activateLicense,
            refreshLicenseManagementToken,
            requestEnterpriseLicenseTrial,
            registerCommunityEdition: registerCommunityEdition$1,
            planName,
            planId,
            activeWorkflowTriggersLimit,
            activeWorkflowTriggersCount,
            workflowsWithEvaluationsLimit,
            workflowsWithEvaluationsCount,
            executionPercentage,
            instanceId,
            managementToken,
            appVersion,
            isCloseToLimit: computed(() => state.data.usage.activeWorkflowTriggers.limit < 0 ? false : activeWorkflowTriggersCount.value / activeWorkflowTriggersLimit.value >= state.data.usage.activeWorkflowTriggers.warningThreshold),
            viewPlansUrl: computed(() => `${subscriptionAppUrl.value}?${commonSubscriptionAppUrlQueryParams.value}`),
            managePlanUrl: computed(() => `${subscriptionAppUrl.value}/manage?token=${managementToken.value}&${commonSubscriptionAppUrlQueryParams.value}`),
            isLoading: computed(() => state.loading),
            telemetryPayload: computed(() => ({
              instance_id: instanceId.value,
              action: "view_plans",
              plan_name_current: planName.value,
              usage: activeWorkflowTriggersCount.value,
              quota: activeWorkflowTriggersLimit.value
            }))
          };
        })); //#endregion
      }
    };
  });
})();