;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, ref, useSettingsStore, useProjectsStore, useRootStore, executionFilterToQueryFilter, getDefaultExecutionFilters, makeRestApiRequest, unflattenExecutionData, defineStore, useExecutionsStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        executionFilterToQueryFilter = _useTelemetryLegacy00FJs.Y;
        getDefaultExecutionFilters = _useTelemetryLegacy00FJs.Z;
        makeRestApiRequest = _useTelemetryLegacy00FJs.fc;
        unflattenExecutionData = _useTelemetryLegacy00FJs.tt;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }],
      execute: function () {
        //#region src/features/execution/executions/executions.store.ts
        _export("t", useExecutionsStore = defineStore("executions", () => {
          const rootStore = useRootStore();
          const projectsStore = useProjectsStore();
          const settingsStore = useSettingsStore();
          const loading = ref(false);
          const itemsPerPage = ref(10);
          const activeExecution = ref(null);
          const filters = ref(getDefaultExecutionFilters());
          const executionsFilters = computed(() => {
            const filter = executionFilterToQueryFilter(filters.value);
            if (projectsStore.currentProjectId) filter.projectId = projectsStore.currentProjectId;
            return filter;
          });
          const currentExecutionsFilters = computed(() => ({
            ...(filters.value.workflowId !== "all" ? {
              workflowId: filters.value.workflowId
            } : {})
          }));
          const autoRefresh = ref(true);
          const autoRefreshTimeout = ref(null);
          const autoRefreshDelay = ref(4 * 1e3);
          const executionsById = ref({});
          const executionsCount = ref(0);
          const executionsCountEstimated = ref(false);
          const concurrentExecutionsCount = ref(0);
          const executions = computed(() => {
            const data = Object.values(executionsById.value);
            data.sort((a, b) => {
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            });
            return data;
          });
          const executionsByWorkflowId = computed(() => executions.value.reduce((acc, execution) => {
            if (!acc[execution.workflowId]) acc[execution.workflowId] = [];
            acc[execution.workflowId].push(execution);
            return acc;
          }, {}));
          const currentExecutionsById = ref({});
          const startedAtSortFn = (a, b) => new Date(b.startedAt ?? b.createdAt).getTime() - new Date(a.startedAt ?? a.createdAt).getTime();
          /**
          * Prioritize `running` over `new` executions, then sort by start timestamp.
          */
          const statusThenStartedAtSortFn = (a, b) => {
            if (a.status && b.status) {
              const statusPriority = {
                running: 1,
                new: 2
              };
              const statusComparison = statusPriority[a.status] - statusPriority[b.status];
              if (statusComparison !== 0) return statusComparison;
            }
            return startedAtSortFn(a, b);
          };
          const sortFn = settingsStore.isConcurrencyEnabled ? statusThenStartedAtSortFn : startedAtSortFn;
          const currentExecutions = computed(() => {
            const data = Object.values(currentExecutionsById.value);
            data.sort(sortFn);
            return data;
          });
          const currentExecutionsByWorkflowId = computed(() => currentExecutions.value.reduce((acc, execution) => {
            if (!acc[execution.workflowId]) acc[execution.workflowId] = [];
            acc[execution.workflowId].push(execution);
            return acc;
          }, {}));
          const allExecutions = computed(() => [...currentExecutions.value, ...executions.value]);
          function addExecution(execution) {
            executionsById.value = {
              ...executionsById.value,
              [execution.id]: {
                ...execution,
                mode: execution.mode
              }
            };
          }
          function addCurrentExecution(execution) {
            currentExecutionsById.value[execution.id] = {
              ...execution,
              mode: execution.mode
            };
          }
          function removeExecution(id) {
            const {
              [id]: _,
              ...rest
            } = executionsById.value;
            executionsById.value = rest;
          }
          function setFilters(value) {
            filters.value = value;
          }
          async function initialize(workflowId) {
            if (workflowId) filters.value.workflowId = workflowId;
            await fetchExecutions();
            await startAutoRefreshInterval(workflowId);
          }
          async function fetchExecutions(filter = executionsFilters.value, lastId, firstId) {
            loading.value = true;
            try {
              const data = await makeRestApiRequest(rootStore.restApiContext, "GET", "/executions", {
                ...(filter ? {
                  filter
                } : {}),
                ...(firstId ? {
                  firstId
                } : {}),
                ...(lastId ? {
                  lastId
                } : {}),
                limit: itemsPerPage.value
              });
              currentExecutionsById.value = {};
              data.results.forEach(execution => {
                if (["new", "running"].includes(execution.status)) addCurrentExecution(execution);else addExecution(execution);
              });
              executionsCount.value = data.count;
              executionsCountEstimated.value = data.estimated;
              concurrentExecutionsCount.value = data.concurrentExecutionsCount;
              return data;
            } finally {
              loading.value = false;
            }
          }
          async function fetchExecution(id) {
            const response = await makeRestApiRequest(rootStore.restApiContext, "GET", `/executions/${id}`);
            return response ? unflattenExecutionData(response) : void 0;
          }
          async function loadAutoRefresh(workflowId) {
            const autoRefreshExecutionFilters = {
              ...executionsFilters.value,
              ...(workflowId ? {
                workflowId
              } : {})
            };
            autoRefreshTimeout.value = setTimeout(async () => {
              if (autoRefresh.value) {
                await fetchExecutions(autoRefreshExecutionFilters);
                startAutoRefreshInterval(workflowId);
              }
            }, autoRefreshDelay.value);
          }
          async function startAutoRefreshInterval(workflowId) {
            stopAutoRefreshInterval();
            await loadAutoRefresh(workflowId);
          }
          function stopAutoRefreshInterval() {
            if (autoRefreshTimeout.value) {
              clearTimeout(autoRefreshTimeout.value);
              autoRefreshTimeout.value = null;
            }
          }
          async function annotateExecution(id, data) {
            const updatedExecution = await makeRestApiRequest(rootStore.restApiContext, "PATCH", `/executions/${id}`, data);
            addExecution(updatedExecution);
            if (updatedExecution.id === activeExecution.value?.id) activeExecution.value = updatedExecution;
          }
          async function stopCurrentExecution(executionId) {
            return await makeRestApiRequest(rootStore.restApiContext, "POST", `/executions/${executionId}/stop`);
          }
          async function retryExecution(id, loadWorkflow) {
            return await makeRestApiRequest(rootStore.restApiContext, "POST", `/executions/${id}/retry`, loadWorkflow ? {
              loadWorkflow: true
            } : void 0);
          }
          async function deleteExecutions(sendData) {
            await makeRestApiRequest(rootStore.restApiContext, "POST", "/executions/delete", sendData);
            if (sendData.ids) sendData.ids.forEach(removeExecution);
            if (sendData.deleteBefore) {
              const deleteBefore = new Date(sendData.deleteBefore);
              allExecutions.value.forEach(execution => {
                if (new Date(execution.startedAt ?? execution.createdAt) < deleteBefore) removeExecution(execution.id);
              });
            }
          }
          function resetData() {
            executionsById.value = {};
            currentExecutionsById.value = {};
            executionsCount.value = 0;
            executionsCountEstimated.value = false;
            concurrentExecutionsCount.value = 0;
          }
          function reset() {
            itemsPerPage.value = 10;
            filters.value = getDefaultExecutionFilters();
            autoRefresh.value = true;
            resetData();
            stopAutoRefreshInterval();
          }
          return {
            loading,
            annotateExecution,
            executionsById,
            executions,
            executionsCount,
            executionsCountEstimated,
            concurrentExecutionsCount,
            executionsByWorkflowId,
            currentExecutions,
            currentExecutionsByWorkflowId,
            activeExecution,
            fetchExecutions,
            fetchExecution,
            autoRefresh,
            autoRefreshTimeout,
            startAutoRefreshInterval,
            stopAutoRefreshInterval,
            initialize,
            filters,
            setFilters,
            executionsFilters,
            currentExecutionsFilters,
            allExecutions,
            stopCurrentExecution,
            retryExecution,
            deleteExecutions,
            addExecution,
            resetData,
            reset,
            itemsPerPage
          };
        })); //#endregion
      }
    };
  });
})();