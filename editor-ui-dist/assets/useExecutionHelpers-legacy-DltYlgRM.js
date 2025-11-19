;
(function () {
  System.register(["./_MapCache-legacy-CVC6fg6H.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./dateFormatter-legacy-wx3IBOwQ.js"], function (_export, _context) {
    "use strict";

    var useI18n, useRouter, useTelemetry, VIEWS, convertToDisplayDate;
    //#region src/features/execution/executions/composables/useExecutionHelpers.ts
    function useExecutionHelpers() {
      const i18n = useI18n();
      const router = useRouter();
      const telemetry = useTelemetry();
      function getUIDetails(execution) {
        const status = {
          name: "unknown",
          createdAt: execution.createdAt?.toString() ?? "",
          startTime: formatDate(execution.startedAt ?? execution.createdAt),
          label: "Status unknown",
          runningTime: "",
          showTimestamp: true,
          tags: execution.annotation?.tags ?? []
        };
        if (execution.status === "new") {
          status.name = "new";
          status.label = i18n.baseText("executionsList.new");
          status.showTimestamp = false;
        } else if (execution.status === "waiting") {
          status.name = "waiting";
          status.label = i18n.baseText("executionsList.waiting");
          status.showTimestamp = false;
        } else if (execution.status === "canceled") status.label = i18n.baseText("executionsList.canceled");else if (execution.status === "running") {
          status.name = "running";
          status.label = i18n.baseText("executionsList.running");
        } else if (execution.status === "success") {
          status.name = "success";
          status.label = i18n.baseText("executionsList.succeeded");
        } else if (execution.status === "error" || execution.status === "crashed") {
          status.name = "error";
          status.label = i18n.baseText("executionsList.error");
        }
        if (!execution.status) execution.status = "unknown";
        if (execution.startedAt && execution.stoppedAt) {
          const stoppedAt = execution.stoppedAt ? new Date(execution.stoppedAt).getTime() : Date.now();
          status.runningTime = i18n.displayTimer(stoppedAt - new Date(execution.startedAt).getTime(), true);
        }
        return status;
      }
      function formatDate(fullDate) {
        const {
          date,
          time
        } = convertToDisplayDate(fullDate);
        return i18n.baseText("executionsList.started", {
          interpolate: {
            time,
            date
          }
        });
      }
      function isExecutionRetriable(execution) {
        return ["crashed", "error"].includes(execution.status) && !execution.retrySuccessId;
      }
      function openExecutionInNewTab(executionId, workflowId) {
        const route = router.resolve({
          name: VIEWS.EXECUTION_PREVIEW,
          params: {
            name: workflowId,
            executionId
          }
        });
        window.open(route.href, "_blank");
      }
      function resolveRelatedExecutionUrl(metadata) {
        const info = metadata.parentExecution || metadata.subExecution;
        if (!info) return "";
        const {
          workflowId,
          executionId
        } = info;
        return router.resolve({
          name: VIEWS.EXECUTION_PREVIEW,
          params: {
            name: workflowId,
            executionId
          }
        }).fullPath;
      }
      function trackOpeningRelatedExecution(metadata, view) {
        if (!(metadata.parentExecution || metadata.subExecution)) return;
        telemetry.track(metadata.parentExecution ? "User clicked parent execution button" : "User clicked inspect sub-workflow", {
          view
        });
      }
      return {
        getUIDetails,
        formatDate,
        isExecutionRetriable,
        openExecutionInNewTab,
        trackOpeningRelatedExecution,
        resolveRelatedExecutionUrl
      };
    }

    //#endregion
    _export("t", useExecutionHelpers);
    return {
      setters: [function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00FJs) {
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_dateFormatterLegacy02zJs) {
        convertToDisplayDate = _dateFormatterLegacy02zJs.t;
      }],
      execute: function () {}
    };
  });
})();