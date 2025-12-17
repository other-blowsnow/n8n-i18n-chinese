;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./useTelemetry-legacy-CqPMRSSw.js", "./constants-legacy-7i-p8Q83.js", "./_baseOrderBy-legacy-BktlFW96.js", "./insights.utils-legacy-YE5fp2p6.js"], function (_export, _context) {
    "use strict";

    var computed, useAsyncState, useSettingsStore, useUsersStore, getResourcePermissions, defineStore, useRootStore, makeRestApiRequest, transformInsightsSummary, fetchInsightsSummary, fetchInsightsByTime, fetchInsightsTimeSaved, fetchInsightsByWorkflow, useInsightsStore;
    //#region src/features/execution/insights/insights.api.ts
    function serializeInsightsFilter(filter) {
      if (!filter) return void 0;
      const {
        startDate,
        endDate,
        ...rest
      } = filter;
      const serialized = {
        ...rest
      };
      if (startDate) serialized.startDate = startDate.toISOString();
      if (endDate) serialized.endDate = endDate.toISOString();
      return serialized;
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
      }, function (_MapCacheLegacy005Js) {
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_constantsLegacy00TJs) {
        getResourcePermissions = _constantsLegacy00TJs.Oo;
      }, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
        makeRestApiRequest = _baseOrderByLegacy00ZJs.u;
      }, function (_insightsUtilsLegacy03hJs) {
        transformInsightsSummary = _insightsUtilsLegacy03hJs.s;
      }],
      execute: function () {
        fetchInsightsSummary = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/summary", serializeInsightsFilter(filter));
        fetchInsightsByTime = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time", serializeInsightsFilter(filter));
        fetchInsightsTimeSaved = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-time/time-saved", serializeInsightsFilter(filter));
        fetchInsightsByWorkflow = async (context, filter) => await makeRestApiRequest(context, "GET", "/insights/by-workflow", serializeInsightsFilter(filter)); //#endregion
        //#region src/features/execution/insights/insights.store.ts
        _export("t", useInsightsStore = defineStore("insights", () => {
          const rootStore = useRootStore();
          const usersStore = useUsersStore();
          const settingsStore = useSettingsStore();
          const globalInsightsPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).insights);
          const isInsightsEnabled = computed(() => settingsStore.isModuleActive("insights"));
          const isDashboardEnabled = computed(() => !!settingsStore.moduleSettings.insights?.dashboard);
          return {
            globalInsightsPermissions,
            isInsightsEnabled,
            isSummaryEnabled: computed(() => globalInsightsPermissions.value.list && isInsightsEnabled.value),
            isDashboardEnabled,
            weeklySummary: useAsyncState(async () => {
              return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext));
            }, [], {
              immediate: false,
              resetOnExecute: false
            }),
            summary: useAsyncState(async filter => {
              return transformInsightsSummary(await fetchInsightsSummary(rootStore.restApiContext, filter));
            }, [], {
              immediate: false,
              resetOnExecute: false
            }),
            charts: useAsyncState(async filter => {
              return await (isDashboardEnabled.value ? fetchInsightsByTime : fetchInsightsTimeSaved)(rootStore.restApiContext, filter);
            }, [], {
              immediate: false,
              resetOnExecute: false
            }),
            table: useAsyncState(async filter => {
              return await fetchInsightsByWorkflow(rootStore.restApiContext, filter);
            }, {
              count: 0,
              data: []
            }, {
              immediate: false,
              resetOnExecute: false
            }),
            dateRanges: computed(() => settingsStore.moduleSettings.insights?.dateRanges ?? [])
          };
        })); //#endregion
      }
    };
  });
})();