;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./executions.store-legacy-BxTud2_e.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, onMounted, normalizeClass, watch, openBlock, createBaseVNode, useI18n, N8nSpinner_default, N8nLoading_default, __plugin_vue_export_helper_default, useProjectsStore, useToast, useExecutionsStore, __vite_style__, _hoisted_1, WorkflowPreview_vue_vue_type_script_setup_true_lang_default, container, workflow, show, openNDV, spinner, imageLoader, executionPreview, WorkflowPreview_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowPreview_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nSpinner_default = _srcLegacy007Js.Rn;
        N8nLoading_default = _srcLegacy007Js.et;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useProjectsStore = _useTelemetryLegacy00FJs.En;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_executionsStoreLegacy01dJs) {
        useExecutionsStore = _executionsStoreLegacy01dJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_5lcvo_123 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n._workflow_5lcvo_130 {\n  visibility: hidden;\n  height: 0;\n  width: 0;\n}\n._show_5lcvo_136 {\n  visibility: visible;\n  height: 100%;\n  width: 100%;\n}\n._openNDV_5lcvo_142 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: var(--workflow-preview-ndv--z);\n}\n._spinner_5lcvo_151 {\n  color: var(--color--primary);\n  position: absolute;\n  top: 50% !important;\n  transform: translateY(-50%);\n}\n._imageLoader_5lcvo_159 {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n._executionPreview_5lcvo_167 {\n  height: 100%;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/WorkflowPreview.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["src"];
        WorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowPreview",
          props: {
            loading: {
              type: Boolean,
              default: false
            },
            mode: {
              default: "workflow"
            },
            workflow: {
              default: void 0
            },
            executionId: {
              default: void 0
            },
            executionMode: {
              default: void 0
            },
            nodeId: {
              default: void 0
            },
            loaderType: {
              default: "image"
            },
            canOpenNDV: {
              type: Boolean,
              default: true
            },
            hideNodeIssues: {
              type: Boolean,
              default: false
            },
            focusOnLoad: {
              type: Boolean,
              default: true
            }
          },
          emits: ["close"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const toast = useToast();
            const executionsStore = useExecutionsStore();
            const projectsStore = useProjectsStore();
            const iframeRef = ref(null);
            const nodeViewDetailsOpened = ref(false);
            const ready = ref(false);
            const insideIframe = ref(false);
            const scrollX = ref(0);
            const scrollY = ref(0);
            const iframeSrc = computed(() => {
              return `${window.BASE_PATH ?? "/"}workflows/demo`;
            });
            const showPreview = computed(() => {
              return !props.loading && (props.mode === "workflow" && !!props.workflow || props.mode === "execution" && !!props.executionId) && ready.value;
            });
            const loadWorkflow = () => {
              try {
                if (!props.workflow) throw new Error(i18n.baseText("workflowPreview.showError.missingWorkflow"));
                if (!props.workflow.nodes || !Array.isArray(props.workflow.nodes)) throw new Error(i18n.baseText("workflowPreview.showError.arrayEmpty"));
                iframeRef.value?.contentWindow?.postMessage?.(JSON.stringify({
                  command: "openWorkflow",
                  workflow: props.workflow,
                  canOpenNDV: props.canOpenNDV,
                  hideNodeIssues: props.hideNodeIssues,
                  projectId: projectsStore.currentProjectId
                }), "*");
              } catch (error) {
                toast.showError(error, i18n.baseText("workflowPreview.showError.previewError.title"), i18n.baseText("workflowPreview.showError.previewError.message"));
              }
            };
            const loadExecution = () => {
              try {
                if (!props.executionId) throw new Error(i18n.baseText("workflowPreview.showError.missingExecution"));
                iframeRef.value?.contentWindow?.postMessage?.(JSON.stringify({
                  command: "openExecution",
                  executionId: props.executionId,
                  executionMode: props.executionMode ?? "",
                  nodeId: props.nodeId,
                  canOpenNDV: props.canOpenNDV,
                  projectId: projectsStore.currentProjectId
                }), "*");
                if (executionsStore.activeExecution) iframeRef.value?.contentWindow?.postMessage?.(JSON.stringify({
                  command: "setActiveExecution",
                  executionId: executionsStore.activeExecution.id
                }), "*");
              } catch (error) {
                toast.showError(error, i18n.baseText("workflowPreview.showError.previewError.title"), i18n.baseText("workflowPreview.executionMode.showError.previewError.message"));
              }
            };
            const onMouseEnter = () => {
              insideIframe.value = true;
              scrollX.value = window.scrollX;
              scrollY.value = window.scrollY;
            };
            const onMouseLeave = () => {
              insideIframe.value = false;
            };
            const receiveMessage = ({
              data
            }) => {
              if (!data?.includes?.("\"command\"")) return;
              try {
                const json = JSON.parse(data);
                if (json.command === "n8nReady") onReady();else if (json.command === "openNDV") onOpenNDV();else if (json.command === "closeNDV") onCloseNDV();else if (json.command === "error") onError();
              } catch (e) {
                console.error(e);
              }
            };
            const onReady = () => {
              ready.value = true;
              if (props.focusOnLoad) setTimeout(() => {
                iframeRef.value?.contentWindow?.focus();
              });
            };
            const onOpenNDV = () => {
              nodeViewDetailsOpened.value = true;
            };
            const onCloseNDV = () => {
              nodeViewDetailsOpened.value = false;
            };
            const onError = () => {
              emit("close");
            };
            const onDocumentScroll = () => {
              if (insideIframe.value) window.scrollTo(scrollX.value, scrollY.value);
            };
            onMounted(() => {
              window.addEventListener("message", receiveMessage);
              document.addEventListener("scroll", onDocumentScroll);
            });
            onBeforeUnmount(() => {
              window.removeEventListener("message", receiveMessage);
              document.removeEventListener("scroll", onDocumentScroll);
            });
            watch(() => showPreview.value, () => {
              if (showPreview.value) {
                if (props.mode === "workflow") loadWorkflow();else if (props.mode === "execution") loadExecution();
              }
            });
            watch(() => props.executionId, () => {
              if (props.mode === "execution" && props.executionId) loadExecution();
            });
            watch(() => props.workflow, () => {
              if (props.mode === "workflow" && props.workflow) loadWorkflow();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [_ctx.loaderType === "image" && !showPreview.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.imageLoader)
              }, [createVNode(unref(N8nLoading_default), {
                loading: !showPreview.value,
                rows: 1,
                variant: "image"
              }, null, 8, ["loading"])], 2)) : _ctx.loaderType === "spinner" && !showPreview.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.spinner)
              }, [createVNode(unref(N8nSpinner_default), {
                type: "dots"
              })], 2)) : createCommentVNode("", true), createBaseVNode("iframe", {
                ref_key: "iframeRef",
                ref: iframeRef,
                class: normalizeClass({
                  [_ctx.$style.workflow]: !nodeViewDetailsOpened.value,
                  [_ctx.$style.executionPreview]: _ctx.mode === "execution",
                  [_ctx.$style.openNDV]: nodeViewDetailsOpened.value,
                  [_ctx.$style.show]: showPreview.value
                }),
                src: iframeSrc.value,
                "data-test-id": "workflow-preview-iframe",
                onMouseenter: onMouseEnter,
                onMouseleave: onMouseLeave
              }, null, 42, _hoisted_1)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/WorkflowPreview.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_5lcvo_123";
        workflow = "_workflow_5lcvo_130";
        show = "_show_5lcvo_136";
        openNDV = "_openNDV_5lcvo_142";
        spinner = "_spinner_5lcvo_151";
        imageLoader = "_imageLoader_5lcvo_159";
        executionPreview = "_executionPreview_5lcvo_167";
        WorkflowPreview_vue_vue_type_style_index_0_lang_module_default = {
          container,
          workflow,
          show,
          openNDV,
          spinner,
          imageLoader,
          executionPreview
        }; //#endregion
        //#region src/app/components/WorkflowPreview.vue
        cssModules = {
          "$style": WorkflowPreview_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", WorkflowPreview_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();