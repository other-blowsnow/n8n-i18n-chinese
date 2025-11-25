import { C as computed, E as createCommentVNode, Gt as unref, J as onBeforeUnmount, P as defineComponent, T as createBlock, _t as watch, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DxwXn8uM.js";
import { Rn as N8nButton_default } from "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./empty-BuGRxzl4.js";
import { Ni as useUIStore, o as useWorkflowsStore, rt as useNodeTypesStore } from "./useTelemetry-Ct6_U3iA.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { $o as SETUP_CREDENTIALS_MODAL_KEY } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import { t as doesNodeHaveAllCredentialsFilled } from "./nodeTransforms-yRGnin6y.js";
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const isTemplateSetupCompleted = computed(() => {
			return !!workflowsStore.workflow?.meta?.templateCredsSetupCompleted;
		});
		const allCredentialsFilled = computed(() => {
			if (isTemplateSetupCompleted.value) return true;
			const nodes = workflowsStore.getNodes();
			if (!nodes.length) return true;
			return nodes.every((node) => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
		});
		const showButton = computed(() => {
			if (!!!workflowsStore.workflow?.meta?.templateId || isTemplateSetupCompleted.value) return false;
			return !allCredentialsFilled.value;
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowsStore.addToWorkflowMetadata({ templateCredsSetupCompleted: true });
				unsubscribe();
			}
		});
		const handleClick = () => {
			uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
		};
		onBeforeUnmount(() => {
			uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
		});
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				label: unref(i18n).baseText("nodeView.setupTemplate"),
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				type: "secondary",
				onClick: _cache[0] || (_cache[0] = ($event) => handleClick())
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
export { SetupWorkflowCredentialsButton_default as default };
