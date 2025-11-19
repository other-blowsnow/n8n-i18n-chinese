;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, useWorkflowsStore;
    //#region src/features/execution/executions/composables/useExecutionData.ts
    function useExecutionData({
      node
    }) {
      const workflowsStore = useWorkflowsStore();
      const workflowExecution = computed(() => {
        return workflowsStore.getWorkflowExecution;
      });
      const workflowRunData = computed(() => {
        if (workflowExecution.value === null) return null;
        const executionData = workflowExecution.value.data;
        if (!executionData?.resultData?.runData) return null;
        return executionData.resultData.runData;
      });
      return {
        workflowExecution,
        workflowRunData,
        hasNodeRun: computed(() => {
          if (workflowsStore.subWorkflowExecutionError) return true;
          return Boolean(node.value && workflowRunData.value && Object.prototype.hasOwnProperty.bind(workflowRunData.value)(node.value.name));
        })
      };
    }

    //#endregion
    _export("t", useExecutionData);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
      }, function (_useTelemetryLegacy00FJs) {
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }],
      execute: function () {}
    };
  });
})();