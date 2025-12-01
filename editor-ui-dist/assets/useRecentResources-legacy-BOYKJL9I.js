;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./truncate-legacy-BWv-BWgW.js", "./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./useCanvasOperations-legacy-nXNbEUno.js", "./NodeIcon-legacy-nNR3V-3Y.js"], function (_export, _context) {
    "use strict";

    var computed, useI18n, useLocalStorage, N8nIcon_default, useRouter, useWorkflowsStore, useNodeTypesStore, VIEWS, NEW_WORKFLOW_ID, PLACEHOLDER_EMPTY_WORKFLOW_ID, useCanvasOperations, NodeIcon_default, MAX_RECENT_ITEMS, MAX_RECENT_WORKFLOWS_TO_DISPLAY, RECENT_WORKFLOWS_STORAGE_KEY, RECENT_NODES_STORAGE_KEY;
    function useRecentResources() {
      const i18n = useI18n();
      const router = useRouter();
      const workflowsStore = useWorkflowsStore();
      const nodeTypesStore = useNodeTypesStore();
      const {
        setNodeActive
      } = useCanvasOperations();
      const recentWorkflows = useLocalStorage(RECENT_WORKFLOWS_STORAGE_KEY, []);
      const recentNodes = useLocalStorage(RECENT_NODES_STORAGE_KEY, {});
      function trackResourceOpened(to) {
        if (to.name === VIEWS.WORKFLOW && typeof to.params.name === "string") {
          const workflowId = to.params.name;
          if (workflowId && workflowId !== "new" && workflowId !== "__EMPTY__" && workflowId !== "new") {
            registerWorkflowOpen(workflowId);
            if (typeof to.params.nodeId === "string" && to.params.nodeId) registerNodeOpen(workflowId, to.params.nodeId);
          }
        }
      }
      function registerWorkflowOpen(workflowId) {
        const filtered = recentWorkflows.value.filter(w => w.id !== workflowId);
        recentWorkflows.value = [{
          id: workflowId,
          openedAt: Date.now()
        }, ...filtered].slice(0, MAX_RECENT_ITEMS);
      }
      function registerNodeOpen(workflowId, nodeId) {
        const filtered = (recentNodes.value[workflowId] ?? []).filter(n => n.nodeId !== nodeId);
        const updatedNodes = [{
          nodeId,
          openedAt: Date.now()
        }, ...filtered].slice(0, MAX_RECENT_ITEMS);
        recentNodes.value = {
          ...recentNodes.value,
          [workflowId]: updatedNodes
        };
      }
      const recentResourceCommands = computed(() => {
        const items = [];
        const currentRoute = router.currentRoute.value;
        const currentWorkflowId = currentRoute.name === VIEWS.WORKFLOW && typeof currentRoute.params.name === "string" ? currentRoute.params.name : null;
        if (currentWorkflowId && recentNodes.value[currentWorkflowId]) {
          const nodesForWorkflow = recentNodes.value[currentWorkflowId];
          for (const recentNode of nodesForWorkflow) {
            const node = workflowsStore.findNodeByPartialId(recentNode.nodeId);
            if (!node) continue;
            const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
            items.push({
              id: `recent-node-${currentWorkflowId}-${recentNode.nodeId}`,
              title: i18n.baseText("generic.openResource", {
                interpolate: {
                  resource: node.name
                }
              }),
              section: i18n.baseText("commandBar.sections.recent"),
              icon: {
                component: NodeIcon_default,
                props: {
                  nodeType,
                  size: 16
                }
              },
              handler: () => {
                const node$1 = workflowsStore.findNodeByPartialId(recentNode.nodeId);
                if (node$1) setNodeActive(node$1.id, "command_bar");
              }
            });
          }
        }
        if (recentWorkflows.value.length > 0) {
          let workflowsAdded = 0;
          for (const recentWorkflow of recentWorkflows.value) {
            if (workflowsAdded >= MAX_RECENT_WORKFLOWS_TO_DISPLAY) break;
            const workflow = workflowsStore.getWorkflowById(recentWorkflow.id);
            if (!workflow) continue;
            items.push({
              id: `recent-workflow-${recentWorkflow.id}`,
              title: i18n.baseText("generic.openResource", {
                interpolate: {
                  resource: workflow.name || i18n.baseText("commandBar.workflows.unnamed")
                }
              }),
              section: i18n.baseText("commandBar.sections.recent"),
              icon: {
                component: N8nIcon_default,
                props: {
                  icon: "arrow-right"
                }
              },
              handler: () => {
                const targetRoute = router.resolve({
                  name: VIEWS.WORKFLOW,
                  params: {
                    name: recentWorkflow.id
                  }
                });
                window.location.href = targetRoute.fullPath;
              }
            });
            workflowsAdded++;
          }
        }
        return items;
      });
      async function initialize() {
        const workflowsToFetch = recentWorkflows.value.slice(0, MAX_RECENT_WORKFLOWS_TO_DISPLAY);
        await Promise.all(workflowsToFetch.map(async recentWorkflow => {
          try {
            if (!workflowsStore.getWorkflowById(recentWorkflow.id)) await workflowsStore.fetchWorkflow(recentWorkflow.id);
          } catch {}
        }));
      }
      return {
        commands: recentResourceCommands,
        trackResourceOpened,
        initialize
      };
    }

    //#endregion
    _export("t", useRecentResources);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Yn;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00HJs) {
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useNodeTypesStore = _useTelemetryLegacy00HJs.rt;
      }, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
        NEW_WORKFLOW_ID = _constantsLegacy00RJs.o;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00RJs.s;
      }, function (_useCanvasOperationsLegacy01xJs) {
        useCanvasOperations = _useCanvasOperationsLegacy01xJs.t;
      }, function (_NodeIconLegacy01DJs) {
        NodeIcon_default = _NodeIconLegacy01DJs.t;
      }],
      execute: function () {
        //#region src/features/shared/commandBar/composables/useRecentResources.ts
        MAX_RECENT_ITEMS = 5;
        MAX_RECENT_WORKFLOWS_TO_DISPLAY = 3;
        RECENT_WORKFLOWS_STORAGE_KEY = "n8n-recent-workflows";
        RECENT_NODES_STORAGE_KEY = "n8n-recent-nodes";
      }
    };
  });
})();