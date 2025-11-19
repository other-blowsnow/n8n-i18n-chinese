;
(function () {
  System.register(["./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var useTelemetry, WEBHOOK_NODE_TYPE;
    //#region src/features/ai/mcpAccess/composables/useMcp.ts
    function useMcp() {
      const telemetry = useTelemetry();
      /**
      * Checks if MCP access can be enabled for the given workflow.
      * A workflow is eligible if it is active and has at least one enabled webhook trigger.
      */
      const isEligibleForMcpAccess = workflow => {
        if (!workflow.active) return false;
        return workflow.nodes.some(node => node.type === "n8n-nodes-base.webhook" && node.disabled !== true);
      };
      const trackMcpAccessEnabledForWorkflow = workflowId => {
        telemetry.track("User gave MCP access to workflow", {
          workflow_id: workflowId
        });
      };
      const trackUserToggledMcpAccess = enabled => {
        telemetry.track("User toggled MCP access", {
          state: enabled
        });
      };
      return {
        isEligibleForMcpAccess,
        trackMcpAccessEnabledForWorkflow,
        trackUserToggledMcpAccess
      };
    }

    //#endregion
    _export("t", useMcp);
    return {
      setters: [function (_useTelemetryLegacy00FJs) {
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
      }],
      execute: function () {}
    };
  });
})();