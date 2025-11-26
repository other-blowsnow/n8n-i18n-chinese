;
(function () {
  System.register(["./useTelemetry-legacy-Ck7lGOrk.js", "./constants-legacy-D0ziSY9e.js"], function (_export, _context) {
    "use strict";

    var useTelemetry, WEBHOOK_NODE_TYPE, CHAT_TRIGGER_NODE_TYPE, FORM_TRIGGER_NODE_TYPE, SCHEDULE_TRIGGER_NODE_TYPE;
    //#region src/features/ai/mcpAccess/composables/useMcp.ts
    function useMcp() {
      const telemetry = useTelemetry();
      const mcpTriggerMap = {
        [SCHEDULE_TRIGGER_NODE_TYPE]: "Schedule Trigger",
        [WEBHOOK_NODE_TYPE]: "Webhook Trigger",
        [FORM_TRIGGER_NODE_TYPE]: "Form Trigger",
        [CHAT_TRIGGER_NODE_TYPE]: "Chat Trigger"
      };
      /**
      * Determines if MCP access can be toggled for a given workflow.
      * Workflow is eligible if it contains at least one of these (enabled) trigger nodes:
      * - Schedule trigger
      * - Webhook trigger
      * - Form trigger
      * - Chat trigger
      * @param workflow
      */
      const isEligibleForMcpAccess = workflow => {
        return workflow.nodes.some(node => Object.keys(mcpTriggerMap).includes(node.type) && node.disabled !== true);
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
        trackUserToggledMcpAccess,
        mcpTriggerMap
      };
    }

    //#endregion
    _export("t", useMcp);
    return {
      setters: [function (_useTelemetryLegacy00FJs) {
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        FORM_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.St;
        SCHEDULE_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.ln;
      }],
      execute: function () {}
    };
  });
})();