import { a7 as defineStore, r as ref, bp as useTemplatesStore, ah as useNodeTypesStore, db as useCredentialsStore, at as useRootStore, a9 as useWorkflowsStore, x as computed, eM as useCredentialSetupState, bs as useExternalHooks, ap as useTelemetry, V as VIEWS, dy as tryToParseNumber, d as defineComponent, aa as useRoute, b as useRouter, af as watch, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, eN as AppsRequiringCredsNotice, l as unref, dK as N8nLoading, h as createElementBlock, F as Fragment, A as renderList, eO as SetupTemplateFormStep, i as createVNode, C as N8nLink, k as createTextVNode, t as toDisplayString, c as useI18n, a4 as N8nTooltip, q as N8nButton, m as N8nHeading, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { c as createWorkflowFromTemplate } from "./templateActions-BRX-GxUO.js";
import { T as TemplatesView } from "./TemplatesView-BiyV7YY-.js";
const useSetupTemplateStore = defineStore("setupTemplate", () => {
  const templateId = ref("");
  const isLoading = ref(true);
  const isSaving = ref(false);
  const templatesStore = useTemplatesStore();
  const nodeTypesStore = useNodeTypesStore();
  const credentialsStore = useCredentialsStore();
  const rootStore = useRootStore();
  const workflowsStore = useWorkflowsStore();
  const template = computed(() => {
    return templateId.value ? templatesStore.getFullTemplateById(templateId.value) : null;
  });
  const templateNodes = computed(() => {
    return template.value?.workflow.nodes ?? [];
  });
  const {
    appCredentials,
    credentialOverrides,
    credentialUsages,
    credentialsByKey,
    nodesRequiringCredentialsSorted,
    numFilledCredentials,
    selectedCredentialIdByKey,
    setSelectedCredentialId,
    unsetSelectedCredential
  } = useCredentialSetupState(templateNodes);
  const setTemplateId = (id) => {
    templateId.value = id;
  };
  const ignoredAutoFillCredentialTypes = /* @__PURE__ */ new Set([
    "httpBasicAuth",
    "httpCustomAuth",
    "httpDigestAuth",
    "httpHeaderAuth",
    "oAuth1Api",
    "oAuth2Api",
    "httpQueryAuth"
  ]);
  const setInitialCredentialSelection = () => {
    for (const credUsage of credentialUsages.value) {
      if (ignoredAutoFillCredentialTypes.has(credUsage.credentialType)) {
        continue;
      }
      const availableCreds = credentialsStore.getCredentialsByType(credUsage.credentialType);
      if (availableCreds.length === 1) {
        selectedCredentialIdByKey.value[credUsage.key] = availableCreds[0].id;
      }
    }
  };
  const loadTemplateIfNeeded = async () => {
    if (!!template.value || !templateId.value) {
      return;
    }
    await templatesStore.fetchTemplateById(templateId.value);
    setInitialCredentialSelection();
  };
  const init = async () => {
    isLoading.value = true;
    try {
      selectedCredentialIdByKey.value = {};
      await Promise.all([
        credentialsStore.fetchAllCredentials(),
        credentialsStore.fetchCredentialTypes(false),
        nodeTypesStore.loadNodeTypesIfNotLoaded(),
        loadTemplateIfNeeded()
      ]);
      setInitialCredentialSelection();
    } finally {
      isLoading.value = false;
    }
  };
  const skipSetup = async ({ router }) => {
    const externalHooks = useExternalHooks();
    const telemetry = useTelemetry();
    await externalHooks.run("templatesWorkflowView.openWorkflow", {
      source: "workflow",
      template_id: templateId.value,
      wf_template_repo_session_id: templatesStore.currentSessionId
    });
    telemetry.track("User closed cred setup", {
      completed: false,
      creds_filled: 0,
      creds_needed: credentialUsages.value.length,
      workflow_id: null
    });
    await router.replace({
      name: VIEWS.TEMPLATE_IMPORT,
      params: { id: templateId.value }
    });
  };
  const createWorkflow = async (opts) => {
    const { router } = opts;
    const telemetry = useTelemetry();
    if (!template.value) {
      return;
    }
    try {
      isSaving.value = true;
      const createdWorkflow = await createWorkflowFromTemplate({
        template: template.value,
        credentialOverrides: credentialOverrides.value,
        rootStore,
        workflowsStore,
        nodeTypeProvider: nodeTypesStore
      });
      telemetry.track("User closed cred setup", {
        completed: true,
        creds_filled: numFilledCredentials.value,
        creds_needed: credentialUsages.value.length,
        workflow_id: createdWorkflow.id
      });
      telemetry.track("User inserted workflow template", {
        source: "workflow",
        template_id: tryToParseNumber(templateId.value),
        wf_template_repo_session_id: templatesStore.currentSessionId
      });
      telemetry.track("User saved new workflow from template", {
        template_id: tryToParseNumber(templateId.value),
        workflow_id: createdWorkflow.id,
        wf_template_repo_session_id: templatesStore.currentSessionId
      });
      await router.replace({
        name: VIEWS.WORKFLOW,
        params: { name: createdWorkflow.id }
      });
    } finally {
      isSaving.value = false;
    }
  };
  return {
    credentialsByKey,
    isLoading,
    isSaving,
    appCredentials,
    nodesRequiringCredentialsSorted,
    template,
    credentialUsages,
    selectedCredentialIdByKey,
    credentialOverrides,
    numFilledCredentials,
    createWorkflow,
    skipSetup,
    init,
    loadTemplateIfNeeded,
    setInitialCredentialSelection,
    setTemplateId,
    setSelectedCredentialId,
    unsetSelectedCredential
  };
});
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SetupWorkflowFromTemplateView",
  setup(__props) {
    const setupTemplateStore = useSetupTemplateStore();
    const i18n = useI18n();
    const route = useRoute();
    const router = useRouter();
    const templateId = computed(
      () => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
    );
    const title = computed(() => setupTemplateStore.template?.name ?? "unknown");
    const isReady = computed(() => !setupTemplateStore.isLoading);
    const skipSetupUrl = computed(() => {
      const resolvedRoute = router.resolve({
        name: VIEWS.TEMPLATE_IMPORT,
        params: { id: templateId.value }
      });
      return resolvedRoute.fullPath;
    });
    watch(templateId, async (newTemplateId) => {
      setupTemplateStore.setTemplateId(newTemplateId);
      await setupTemplateStore.loadTemplateIfNeeded();
    });
    const onSkipSetup = async (event) => {
      event.preventDefault();
      await setupTemplateStore.skipSetup({
        router
      });
    };
    const skipIfTemplateHasNoCreds = async () => {
      const isTemplateLoaded = !!setupTemplateStore.template;
      if (!isTemplateLoaded) {
        return false;
      }
      if (setupTemplateStore.credentialUsages.length === 0) {
        await setupTemplateStore.skipSetup({
          router
        });
        return true;
      }
      return false;
    };
    setupTemplateStore.setTemplateId(templateId.value);
    onMounted(async () => {
      await setupTemplateStore.init();
      await skipIfTemplateHasNoCreds();
    });
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_button = N8nButton;
      const _component_n8n_tooltip = N8nTooltip;
      return openBlock(), createBlock(TemplatesView, { "go-back-enabled": true }, {
        header: withCtx(() => [
          isReady.value ? (openBlock(), createBlock(unref(N8nHeading), {
            key: 0,
            tag: "h1",
            size: "2xlarge"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.title", { interpolate: { name: title.value } })), 1)
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_n8n_loading, {
            key: 1,
            variant: "h1"
          }))
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.grid)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.notice),
              "data-test-id": "info-callout"
            }, [
              isReady.value ? (openBlock(), createBlock(AppsRequiringCredsNotice, {
                key: 0,
                "app-credentials": unref(setupTemplateStore).appCredentials
              }, null, 8, ["app-credentials"])) : (openBlock(), createBlock(_component_n8n_loading, {
                key: 1,
                variant: "p"
              }))
            ], 2),
            createBaseVNode("div", null, [
              isReady.value ? (openBlock(), createElementBlock("ol", {
                key: 0,
                class: normalizeClass(_ctx.$style.appCredentialsContainer)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(setupTemplateStore).credentialUsages, (credentials, index) => {
                  return openBlock(), createBlock(SetupTemplateFormStep, {
                    key: credentials.key,
                    class: normalizeClass(_ctx.$style.appCredential),
                    order: index + 1,
                    credentials,
                    "selected-credential-id": unref(setupTemplateStore).selectedCredentialIdByKey[credentials.key],
                    onCredentialSelected: _cache[0] || (_cache[0] = ($event) => unref(setupTemplateStore).setSelectedCredentialId(
                      $event.credentialUsageKey,
                      $event.credentialId
                    )),
                    onCredentialDeselected: _cache[1] || (_cache[1] = ($event) => unref(setupTemplateStore).unsetSelectedCredential($event.credentialUsageKey))
                  }, null, 8, ["class", "order", "credentials", "selected-credential-id"]);
                }), 128))
              ], 2)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.appCredentialsContainer)
              }, [
                createVNode(_component_n8n_loading, {
                  class: normalizeClass(_ctx.$style.appCredential),
                  variant: "p",
                  rows: 3
                }, null, 8, ["class"]),
                createVNode(_component_n8n_loading, {
                  class: normalizeClass(_ctx.$style.appCredential),
                  variant: "p",
                  rows: 3
                }, null, 8, ["class"])
              ], 2))
            ]),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.actions)
            }, [
              createVNode(unref(N8nLink), {
                href: skipSetupUrl.value,
                "new-window": false,
                onClick: _cache[2] || (_cache[2] = ($event) => onSkipSetup($event))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.skip")), 1)
                ]),
                _: 1
              }, 8, ["href"]),
              isReady.value ? (openBlock(), createBlock(_component_n8n_tooltip, {
                key: 0,
                content: unref(i18n).baseText("templateSetup.continue.button.fillRemaining"),
                disabled: unref(setupTemplateStore).numFilledCredentials > 0
              }, {
                default: withCtx(() => [
                  createVNode(_component_n8n_button, {
                    size: "large",
                    label: unref(i18n).baseText("templateSetup.continue.button"),
                    disabled: unref(setupTemplateStore).isSaving || unref(setupTemplateStore).numFilledCredentials === 0,
                    "data-test-id": "continue-button",
                    onClick: _cache[3] || (_cache[3] = ($event) => unref(setupTemplateStore).createWorkflow({ router: unref(router) }))
                  }, null, 8, ["label", "disabled"])
                ]),
                _: 1
              }, 8, ["content", "disabled"])) : (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(_component_n8n_loading, { variant: "button" })
              ]))
            ], 2)
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const grid = "_grid_sy73c_123";
const notice = "_notice_sy73c_131";
const appCredentialsContainer = "_appCredentialsContainer_sy73c_135";
const appCredential = "_appCredential_sy73c_135";
const actions = "_actions_sy73c_146";
const style0 = {
  grid,
  notice,
  appCredentialsContainer,
  appCredential,
  actions
};
const cssModules = {
  "$style": style0
};
const SetupWorkflowFromTemplateView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SetupWorkflowFromTemplateView as default
};
