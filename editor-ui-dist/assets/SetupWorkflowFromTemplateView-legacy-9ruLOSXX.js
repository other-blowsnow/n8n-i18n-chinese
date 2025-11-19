;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./nodeIcon-legacy-7NxDDHQi.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./nodeTransforms-legacy-B6vSYCn_.js", "./templateTransforms-legacy-fH0YEGiR.js", "./SetupTemplateFormStep-legacy-BiuiWPkJ.js", "./templateActions-legacy-DTPhBzWh.js", "./TemplatesView-legacy-CYw3qLVl.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, renderList, createTextVNode, createBaseVNode, useI18n, N8nButton_default, N8nHeading_default, N8nLoading_default, N8nLink_default, N8nTooltip_default, __plugin_vue_export_helper_default, useRouter, useRoute, tryToParseNumber, useCredentialsStore, useRootStore, useWorkflowsStore, useNodeTypesStore, useTelemetry, defineStore, VIEWS, useExternalHooks, useTemplatesStore, AppsRequiringCredsNotice_default, useCredentialSetupState, SetupTemplateFormStep_default, createWorkflowFromTemplate, TemplatesView_default, __vite_style__, useSetupTemplateStore, _hoisted_1, SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default, grid, notice, appCredentialsContainer, appCredential, actions, SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default, cssModules, SetupWorkflowFromTemplateView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        tryToParseNumber = _useTelemetryLegacy00FJs.Ci;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_nodeIconLegacy01lJs) {}, function (_NodeIconLegacy01vJs) {}, function (_nodeTransformsLegacy02nJs) {}, function (_templateTransformsLegacy03lJs) {}, function (_SetupTemplateFormStepLegacy03nJs) {
        AppsRequiringCredsNotice_default = _SetupTemplateFormStepLegacy03nJs.n;
        useCredentialSetupState = _SetupTemplateFormStepLegacy03nJs.r;
        SetupTemplateFormStep_default = _SetupTemplateFormStepLegacy03nJs.t;
      }, function (_templateActionsLegacy07dJs) {
        createWorkflowFromTemplate = _templateActionsLegacy07dJs.t;
      }, function (_TemplatesViewLegacy07fJs) {
        TemplatesView_default = _TemplatesViewLegacy07fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._grid_e7pvm_123 {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 768px;\n}\n._notice_e7pvm_131 {\n  margin-bottom: var(--spacing--2xl);\n}\n._appCredentialsContainer_e7pvm_135 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xl);\n}\n._appCredential_e7pvm_135:not(:last-of-type) {\n  padding-bottom: var(--spacing--2xl);\n  border-bottom: 1px solid var(--color--foreground--tint-1);\n}\n._actions_e7pvm_146 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: var(--spacing--3xl);\n  margin-bottom: var(--spacing--3xl);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/templates/setupTemplate.store.ts
        /**
        * Store for managing the state of the SetupWorkflowFromTemplateView
        */
        useSetupTemplateStore = defineStore("setupTemplate", () => {
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
          } = useCredentialSetupState(computed(() => {
            return template.value?.workflow.nodes ?? [];
          }));
          const setTemplateId = id => {
            templateId.value = id;
          };
          const ignoredAutoFillCredentialTypes = new Set(["httpBasicAuth", "httpCustomAuth", "httpDigestAuth", "httpHeaderAuth", "oAuth1Api", "oAuth2Api", "httpQueryAuth"]);
          /**
          * Selects initial credentials for the template. Credentials
          * need to be loaded before this.
          */
          const setInitialCredentialSelection = () => {
            for (const credUsage of credentialUsages.value) {
              if (ignoredAutoFillCredentialTypes.has(credUsage.credentialType)) continue;
              const availableCreds = credentialsStore.getCredentialsByType(credUsage.credentialType);
              if (availableCreds.length === 1) selectedCredentialIdByKey.value[credUsage.key] = availableCreds[0].id;
            }
          };
          /**
          * Loads the template if it hasn't been loaded yet.
          */
          const loadTemplateIfNeeded = async () => {
            if (!!template.value || !templateId.value) return;
            await templatesStore.fetchTemplateById(templateId.value);
            setInitialCredentialSelection();
          };
          /**
          * Initializes the store for a specific template.
          */
          const init = async () => {
            isLoading.value = true;
            try {
              selectedCredentialIdByKey.value = {};
              await Promise.all([credentialsStore.fetchAllCredentials(), credentialsStore.fetchCredentialTypes(false), nodeTypesStore.loadNodeTypesIfNotLoaded(), loadTemplateIfNeeded()]);
              setInitialCredentialSelection();
            } finally {
              isLoading.value = false;
            }
          };
          /**
          * Skips the setup and goes directly to the workflow view.
          */
          const skipSetup = async ({
            router
          }) => {
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
              params: {
                id: templateId.value
              }
            });
          };
          /**
          * Creates a workflow from the template and navigates to the workflow view.
          */
          const createWorkflow = async opts => {
            const {
              router
            } = opts;
            const telemetry = useTelemetry();
            if (!template.value) return;
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
                params: {
                  name: createdWorkflow.id
                }
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
        }); //#endregion
        //#region src/features/workflows/templates/views/SetupWorkflowFromTemplateView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 1
        };
        SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SetupWorkflowFromTemplateView",
          setup(__props) {
            const setupTemplateStore = useSetupTemplateStore();
            const i18n = useI18n();
            const route = useRoute();
            const router = useRouter();
            const templateId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
            const title = computed(() => setupTemplateStore.template?.name ?? "unknown");
            const isReady = computed(() => !setupTemplateStore.isLoading);
            const skipSetupUrl = computed(() => {
              return router.resolve({
                name: VIEWS.TEMPLATE_IMPORT,
                params: {
                  id: templateId.value
                }
              }).fullPath;
            });
            watch(templateId, async newTemplateId => {
              setupTemplateStore.setTemplateId(newTemplateId);
              await setupTemplateStore.loadTemplateIfNeeded();
            });
            const onSkipSetup = async event => {
              event.preventDefault();
              await setupTemplateStore.skipSetup({
                router
              });
            };
            const skipIfTemplateHasNoCreds = async () => {
              if (!!!setupTemplateStore.template) return false;
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
              return openBlock(), createBlock(TemplatesView_default, {
                "go-back-enabled": true
              }, {
                header: withCtx(() => [isReady.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
                  key: 0,
                  tag: "h1",
                  size: "2xlarge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.title", {
                    interpolate: {
                      name: title.value
                    }
                  })), 1)]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nLoading_default), {
                  key: 1,
                  variant: "h1"
                }))]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.grid)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.notice),
                  "data-test-id": "info-callout"
                }, [isReady.value ? (openBlock(), createBlock(AppsRequiringCredsNotice_default, {
                  key: 0,
                  "app-credentials": unref(setupTemplateStore).appCredentials
                }, null, 8, ["app-credentials"])) : (openBlock(), createBlock(unref(N8nLoading_default), {
                  key: 1,
                  variant: "p"
                }))], 2), createBaseVNode("div", null, [isReady.value ? (openBlock(), createElementBlock("ol", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.appCredentialsContainer)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(setupTemplateStore).credentialUsages, (credentials, index) => {
                  return openBlock(), createBlock(SetupTemplateFormStep_default, {
                    key: credentials.key,
                    class: normalizeClass(_ctx.$style.appCredential),
                    order: index + 1,
                    credentials,
                    "selected-credential-id": unref(setupTemplateStore).selectedCredentialIdByKey[credentials.key],
                    onCredentialSelected: _cache[0] || (_cache[0] = $event => unref(setupTemplateStore).setSelectedCredentialId($event.credentialUsageKey, $event.credentialId)),
                    onCredentialDeselected: _cache[1] || (_cache[1] = $event => unref(setupTemplateStore).unsetSelectedCredential($event.credentialUsageKey))
                  }, null, 8, ["class", "order", "credentials", "selected-credential-id"]);
                }), 128))], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.appCredentialsContainer)
                }, [createVNode(unref(N8nLoading_default), {
                  class: normalizeClass(_ctx.$style.appCredential),
                  variant: "p",
                  rows: 3
                }, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
                  class: normalizeClass(_ctx.$style.appCredential),
                  variant: "p",
                  rows: 3
                }, null, 8, ["class"])], 2))]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.actions)
                }, [createVNode(unref(N8nLink_default), {
                  href: skipSetupUrl.value,
                  "new-window": false,
                  onClick: _cache[2] || (_cache[2] = $event => onSkipSetup($event))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.skip")), 1)]),
                  _: 1
                }, 8, ["href"]), isReady.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 0,
                  content: unref(i18n).baseText("templateSetup.continue.button.fillRemaining"),
                  disabled: unref(setupTemplateStore).numFilledCredentials > 0
                }, {
                  default: withCtx(() => [createVNode(unref(N8nButton_default), {
                    size: "large",
                    label: unref(i18n).baseText("templateSetup.continue.button"),
                    disabled: unref(setupTemplateStore).isSaving || unref(setupTemplateStore).numFilledCredentials === 0,
                    "data-test-id": "continue-button",
                    onClick: _cache[3] || (_cache[3] = $event => unref(setupTemplateStore).createWorkflow({
                      router: unref(router)
                    }))
                  }, null, 8, ["label", "disabled"])]),
                  _: 1
                }, 8, ["content", "disabled"])) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
                  variant: "button"
                })]))], 2)], 2)]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/views/SetupWorkflowFromTemplateView.vue?vue&type=style&index=0&lang.module.scss
        grid = "_grid_e7pvm_123";
        notice = "_notice_e7pvm_131";
        appCredentialsContainer = "_appCredentialsContainer_e7pvm_135";
        appCredential = "_appCredential_e7pvm_135";
        actions = "_actions_e7pvm_146";
        SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default = {
          grid,
          notice,
          appCredentialsContainer,
          appCredential,
          actions
        }; //#endregion
        //#region src/features/workflows/templates/views/SetupWorkflowFromTemplateView.vue
        cssModules = {
          "$style": SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SetupWorkflowFromTemplateView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();