;
(function () {
  System.register(["./useTelemetry-legacy-z15msZ3G.js", "./constants-legacy-lM1Uv86G.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./nodeTransforms-legacy-kJD9EoUb.js", "./templateTransforms-legacy-kjzXGYFa.js"], function (_export, _context) {
    "use strict";

    var getNodesWithNormalizedPosition, tryToParseNumber, getNewWorkflow, VIEWS, assert, doesNodeHaveCredentialsToFill, replaceAllTemplateNodeCredentials;
    //#region src/features/workflows/templates/utils/templateActions.ts
    /**
    * Creates a new workflow from a template
    */
    async function createWorkflowFromTemplate(opts) {
      const {
        credentialOverrides,
        nodeTypeProvider,
        rootStore,
        template,
        workflowsStore
      } = opts;
      const workflowData = await getNewWorkflow(rootStore.restApiContext, {
        name: template.name
      });
      const nodes = getNodesWithNormalizedPosition(replaceAllTemplateNodeCredentials(nodeTypeProvider, template.workflow.nodes, credentialOverrides));
      const connections = template.workflow.connections;
      const workflowToCreate = {
        name: workflowData.name,
        nodes,
        connections,
        active: false,
        meta: {
          templateId: template.id.toString()
        }
      };
      return await workflowsStore.createNewWorkflow(workflowToCreate);
    }
    /**
    * Opens the template credential setup view
    */
    async function openTemplateCredentialSetup(opts) {
      const {
        router,
        templateId,
        inNewBrowserTab = false,
        telemetry,
        source
      } = opts;
      telemetry.track("User opened cred setup", {
        source
      });
      const routeLocation = {
        name: VIEWS.TEMPLATE_SETUP,
        params: {
          id: templateId
        }
      };
      if (inNewBrowserTab) {
        const route = router.resolve(routeLocation);
        window.open(route.href, "_blank");
      } else await router.push(routeLocation);
    }
    /**
    * Opens the given template's workflow on NodeView. Fires necessary
    * telemetry events.
    */
    async function openTemplateWorkflowOnNodeView(opts) {
      const {
        externalHooks,
        templateId,
        templatesStore,
        inNewBrowserTab,
        router
      } = opts;
      const routeLocation = {
        name: VIEWS.TEMPLATE_IMPORT,
        params: {
          id: templateId
        }
      };
      const telemetryPayload = {
        source: "workflow",
        template_id: tryToParseNumber(templateId),
        wf_template_repo_session_id: templatesStore.currentSessionId
      };
      await externalHooks.run("templatesWorkflowView.openWorkflow", telemetryPayload);
      if (inNewBrowserTab) {
        const route = router.resolve(routeLocation);
        window.open(route.href, "_blank");
      } else await router.push(routeLocation);
    }
    function hasTemplateCredentials(nodeTypeProvider, template) {
      return template.workflow.nodes.some(node => doesNodeHaveCredentialsToFill(nodeTypeProvider, node));
    }
    async function getFullTemplate(templatesStore, templateId) {
      const template = templatesStore.getFullTemplateById(templateId);
      if (template) return template;
      await templatesStore.fetchTemplateById(templateId);
      return templatesStore.getFullTemplateById(templateId);
    }
    /**
    * Uses the given template by opening the template workflow on NodeView
    * or the template credential setup view. Fires necessary telemetry events.
    */
    async function useTemplateWorkflow(opts) {
      const {
        nodeTypesStore,
        templateId,
        templatesStore
      } = opts;
      const [template] = await Promise.all([getFullTemplate(templatesStore, templateId), nodeTypesStore.loadNodeTypesIfNotLoaded()]);
      assert(template);
      if (hasTemplateCredentials(nodeTypesStore, template)) await openTemplateCredentialSetup(opts);else await openTemplateWorkflowOnNodeView(opts);
    }

    //#endregion
    _export({
      n: useTemplateWorkflow,
      t: createWorkflowFromTemplate
    });
    return {
      setters: [function (_useTelemetryLegacy00HJs) {
        getNodesWithNormalizedPosition = _useTelemetryLegacy00HJs.C;
        tryToParseNumber = _useTelemetryLegacy00HJs.Ci;
        getNewWorkflow = _useTelemetryLegacy00HJs.Po;
      }, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
      }, function (_baseOrderByLegacy00XJs) {
        assert = _baseOrderByLegacy00XJs.g;
      }, function (_nodeTransformsLegacy02BJs) {
        doesNodeHaveCredentialsToFill = _nodeTransformsLegacy02BJs.n;
      }, function (_templateTransformsLegacy03zJs) {
        replaceAllTemplateNodeCredentials = _templateTransformsLegacy03zJs.r;
      }],
      execute: function () {}
    };
  });
})();