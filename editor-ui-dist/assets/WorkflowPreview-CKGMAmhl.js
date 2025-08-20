import { d as defineComponent, a as useToast, a$ as useExecutionsStore, r as ref, x as computed, o as onMounted, P as onBeforeUnmount, af as watch, h as createElementBlock, g as openBlock, f as createCommentVNode, j as createBaseVNode, n as normalizeClass, i as createVNode, dK as N8nLoading, dJ as _sfc_main$1, c as useI18n, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _hoisted_1 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkflowPreview",
  props: {
    loading: { type: Boolean, default: false },
    mode: { default: "workflow" },
    workflow: { default: void 0 },
    executionId: { default: void 0 },
    executionMode: { default: void 0 },
    nodeId: { default: void 0 },
    loaderType: { default: "image" },
    canOpenNDV: { type: Boolean, default: true },
    hideNodeIssues: { type: Boolean, default: false },
    focusOnLoad: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const toast = useToast();
    const executionsStore = useExecutionsStore();
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
        if (!props.workflow) {
          throw new Error(i18n.baseText("workflowPreview.showError.missingWorkflow"));
        }
        if (!props.workflow.nodes || !Array.isArray(props.workflow.nodes)) {
          throw new Error(i18n.baseText("workflowPreview.showError.arrayEmpty"));
        }
        iframeRef.value?.contentWindow?.postMessage?.(
          JSON.stringify({
            command: "openWorkflow",
            workflow: props.workflow,
            canOpenNDV: props.canOpenNDV,
            hideNodeIssues: props.hideNodeIssues
          }),
          "*"
        );
      } catch (error) {
        toast.showError(
          error,
          i18n.baseText("workflowPreview.showError.previewError.title"),
          i18n.baseText("workflowPreview.showError.previewError.message")
        );
      }
    };
    const loadExecution = () => {
      try {
        if (!props.executionId) {
          throw new Error(i18n.baseText("workflowPreview.showError.missingExecution"));
        }
        iframeRef.value?.contentWindow?.postMessage?.(
          JSON.stringify({
            command: "openExecution",
            executionId: props.executionId,
            executionMode: props.executionMode ?? "",
            nodeId: props.nodeId,
            canOpenNDV: props.canOpenNDV
          }),
          "*"
        );
        if (executionsStore.activeExecution) {
          iframeRef.value?.contentWindow?.postMessage?.(
            JSON.stringify({
              command: "setActiveExecution",
              executionId: executionsStore.activeExecution.id
            }),
            "*"
          );
        }
      } catch (error) {
        toast.showError(
          error,
          i18n.baseText("workflowPreview.showError.previewError.title"),
          i18n.baseText("workflowPreview.executionMode.showError.previewError.message")
        );
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
    const receiveMessage = ({ data }) => {
      if (!data?.includes?.('"command"')) {
        return;
      }
      try {
        const json = JSON.parse(data);
        if (json.command === "n8nReady") {
          onReady();
        } else if (json.command === "openNDV") {
          onOpenNDV();
        } else if (json.command === "closeNDV") {
          onCloseNDV();
        } else if (json.command === "error") {
          onError();
        }
      } catch (e) {
        console.error(e);
      }
    };
    const onReady = () => {
      ready.value = true;
      if (props.focusOnLoad) {
        setTimeout(() => {
          iframeRef.value?.contentWindow?.focus();
        });
      }
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
      if (insideIframe.value) {
        window.scrollTo(scrollX.value, scrollY.value);
      }
    };
    onMounted(() => {
      window.addEventListener("message", receiveMessage);
      document.addEventListener("scroll", onDocumentScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("message", receiveMessage);
      document.removeEventListener("scroll", onDocumentScroll);
    });
    watch(
      () => showPreview.value,
      () => {
        if (showPreview.value) {
          if (props.mode === "workflow") {
            loadWorkflow();
          } else if (props.mode === "execution") {
            loadExecution();
          }
        }
      }
    );
    watch(
      () => props.executionId,
      () => {
        if (props.mode === "execution" && props.executionId) {
          loadExecution();
        }
      }
    );
    watch(
      () => props.workflow,
      () => {
        if (props.mode === "workflow" && props.workflow) {
          loadWorkflow();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_spinner = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        _ctx.loaderType === "image" && !showPreview.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.imageLoader)
        }, [
          createVNode(_component_n8n_loading, {
            loading: !showPreview.value,
            rows: 1,
            variant: "image"
          }, null, 8, ["loading"])
        ], 2)) : _ctx.loaderType === "spinner" && !showPreview.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.spinner)
        }, [
          createVNode(_component_n8n_spinner, { type: "dots" })
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("iframe", {
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
        }, null, 42, _hoisted_1)
      ], 2);
    };
  }
});
const container = "_container_idflw_123";
const workflow = "_workflow_idflw_130";
const show = "_show_idflw_136";
const openNDV = "_openNDV_idflw_142";
const spinner = "_spinner_idflw_151";
const imageLoader = "_imageLoader_idflw_159";
const executionPreview = "_executionPreview_idflw_167";
const style0 = {
  container,
  workflow,
  show,
  openNDV,
  spinner,
  imageLoader,
  executionPreview
};
const cssModules = {
  "$style": style0
};
const WorkflowPreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  WorkflowPreview as W
};
