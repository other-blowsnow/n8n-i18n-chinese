import { C as computed, E as createCommentVNode, Gt as unref, J as onBeforeUnmount, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import { kn as N8nButton_default } from "./src-Ca6p-F4w.js";
import "./truncate-D24O8Gpt.js";
import { C as useNodeTypesStore, It as injectWorkflowState, r as useUIStore, s as useWorkflowsStore, wr as usePostHog } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { ls as SETUP_CREDENTIALS_MODAL_KEY, vc as TEMPLATE_SETUP_EXPERIENCE } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import "./folders.store-BnPPwuN5.js";
import { t as doesNodeHaveAllCredentialsFilled } from "./nodeTransforms-Ddhj8O6S.js";
import { t as useReadyToRunStore } from "./readyToRun.store-DIruJKvy.js";
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const readyToRunStore = useReadyToRunStore();
		const workflowState = injectWorkflowState();
		const nodeTypesStore = useNodeTypesStore();
		const posthogStore = usePostHog();
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
		const isNewTemplatesSetupEnabled = computed(() => {
			return posthogStore.getVariant(TEMPLATE_SETUP_EXPERIENCE.name) === TEMPLATE_SETUP_EXPERIENCE.variant;
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowState.addToWorkflowMetadata({ templateCredsSetupCompleted: true });
				unsubscribe();
			}
		});
		const openSetupModal = () => {
			uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
		};
		onBeforeUnmount(() => {
			uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
		});
		onMounted(() => {
			const templateId = workflowsStore.workflow?.meta?.templateId;
			const isReadyToRunWorkflow = readyToRunStore.isReadyToRunTemplateId(templateId);
			if (isNewTemplatesSetupEnabled.value && showButton.value && !isReadyToRunWorkflow) openSetupModal();
		});
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				label: unref(i18n).baseText("nodeView.setupTemplate"),
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				type: "secondary",
				onClick: _cache[0] || (_cache[0] = ($event) => openSetupModal())
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
export { SetupWorkflowCredentialsButton_default as default };
