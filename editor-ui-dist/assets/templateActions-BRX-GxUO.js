import { ey as assert, eP as doesNodeHaveCredentialsToFill, V as VIEWS, dy as tryToParseNumber, eQ as getNewWorkflow, eR as replaceAllTemplateNodeCredentials, dC as getNodesWithNormalizedPosition } from "./index-BsWH3eYA.js";
async function createWorkflowFromTemplate(opts) {
  const { credentialOverrides, nodeTypeProvider, rootStore, template, workflowsStore } = opts;
  const workflowData = await getNewWorkflow(rootStore.restApiContext, { name: template.name });
  const nodesWithCreds = replaceAllTemplateNodeCredentials(
    nodeTypeProvider,
    template.workflow.nodes,
    credentialOverrides
  );
  const nodes = getNodesWithNormalizedPosition(nodesWithCreds);
  const connections = template.workflow.connections;
  const workflowToCreate = {
    name: workflowData.name,
    nodes,
    connections,
    active: false,
    meta: {
      templateId: template.id.toString()
    }
    // Ignored: pinData, settings, tags, versionId
  };
  const createdWorkflow = await workflowsStore.createNewWorkflow(workflowToCreate);
  return createdWorkflow;
}
async function openTemplateCredentialSetup(opts) {
  const { router, templateId, inNewBrowserTab = false, telemetry, source } = opts;
  telemetry.track("User opened cred setup", { source });
  const routeLocation = {
    name: VIEWS.TEMPLATE_SETUP,
    params: { id: templateId }
  };
  if (inNewBrowserTab) {
    const route = router.resolve(routeLocation);
    window.open(route.href, "_blank");
  } else {
    await router.push(routeLocation);
  }
}
async function openTemplateWorkflowOnNodeView(opts) {
  const { externalHooks, templateId, templatesStore, inNewBrowserTab, router } = opts;
  const routeLocation = {
    name: VIEWS.TEMPLATE_IMPORT,
    params: { id: templateId }
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
  } else {
    await router.push(routeLocation);
  }
}
function hasTemplateCredentials(nodeTypeProvider, template) {
  return template.workflow.nodes.some(
    (node) => doesNodeHaveCredentialsToFill(nodeTypeProvider, node)
  );
}
async function getFullTemplate(templatesStore, templateId) {
  const template = templatesStore.getFullTemplateById(templateId);
  if (template) {
    return template;
  }
  await templatesStore.fetchTemplateById(templateId);
  return templatesStore.getFullTemplateById(templateId);
}
async function useTemplateWorkflow(opts) {
  const { nodeTypesStore, templateId, templatesStore } = opts;
  const [template] = await Promise.all([
    getFullTemplate(templatesStore, templateId),
    nodeTypesStore.loadNodeTypesIfNotLoaded()
  ]);
  assert(template);
  if (hasTemplateCredentials(nodeTypesStore, template)) {
    await openTemplateCredentialSetup(opts);
  } else {
    await openTemplateWorkflowOnNodeView(opts);
  }
}
export {
  createWorkflowFromTemplate as c,
  useTemplateWorkflow as u
};
