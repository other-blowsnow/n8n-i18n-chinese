import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Z as onMounted, _t as watch, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Vi as N8nSpinner_default, xt as N8nLoading_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Vt as useProjectsStore, hr as useToast } from "./users.store-qBZsmf9-.js";
import { t as useExecutionsStore } from "./executions.store-nTCUYDJR.js";
var _hoisted_1 = ["src"];
var WorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreview",
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		mode: { default: "workflow" },
		workflow: { default: void 0 },
		executionId: { default: void 0 },
		executionMode: { default: void 0 },
		nodeId: { default: void 0 },
		loaderType: { default: "image" },
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
		},
		hideControls: {
			type: Boolean,
			default: false
		}
	},
	emits: ["close", "ready"],
	setup(__props, { emit: __emit }) {
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
			const basePath = `${window.BASE_PATH ?? "/"}workflows/demo`;
			if (props.hideControls) return `${basePath}?hideControls=true`;
			return basePath;
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
		const receiveMessage = ({ data }) => {
			if (!data?.includes?.("\"command\"")) return;
			try {
				const json = JSON.parse(data);
				if (json.command === "n8nReady") onReady();
				else if (json.command === "openNDV") onOpenNDV();
				else if (json.command === "closeNDV") onCloseNDV();
				else if (json.command === "error") onError();
			} catch (e) {
				console.error(e);
			}
		};
		const onReady = () => {
			ready.value = true;
			if (props.focusOnLoad) setTimeout(() => {
				iframeRef.value?.contentWindow?.focus();
			});
			emit("ready");
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
				if (props.mode === "workflow") loadWorkflow();
				else if (props.mode === "execution") loadExecution();
			}
		});
		watch(() => props.executionId, () => {
			if (props.mode === "execution" && props.executionId) loadExecution();
		});
		watch(() => props.workflow, () => {
			if (props.mode === "workflow" && props.workflow) loadWorkflow();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [__props.loaderType === "image" && !showPreview.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.imageLoader)
			}, [createVNode(unref(N8nLoading_default), {
				loading: !showPreview.value,
				rows: 1,
				variant: "image"
			}, null, 8, ["loading"])], 2)) : __props.loaderType === "spinner" && !showPreview.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.spinner)
			}, [createVNode(unref(N8nSpinner_default), { type: "dots" })], 2)) : createCommentVNode("", true), createBaseVNode("iframe", {
				ref_key: "iframeRef",
				ref: iframeRef,
				class: normalizeClass({
					[_ctx.$style.workflow]: !nodeViewDetailsOpened.value,
					[_ctx.$style.executionPreview]: __props.mode === "execution",
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
});
var WorkflowPreview_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ycaoi_125",
	workflow: "_workflow_ycaoi_132",
	show: "_show_ycaoi_138",
	openNDV: "_openNDV_ycaoi_144",
	spinner: "_spinner_ycaoi_153",
	imageLoader: "_imageLoader_ycaoi_161",
	executionPreview: "_executionPreview_ycaoi_169"
};
var WorkflowPreview_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreview_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowPreview_default as t };
