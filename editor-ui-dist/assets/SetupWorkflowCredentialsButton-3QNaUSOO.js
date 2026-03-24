import { $ as openBlock, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, gt as watch, q as onBeforeUnmount, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-D5rots3X.js";
import { Qi as N8nButton_default, gt as useRoute } from "./src-Bnic0IZ0.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Hr as usePostHog, Sn as useFocusPanelStore, ia as injectWorkflowDocumentStore, r as useUIStore, w as useNodeTypesStore } from "./users.store-CzbeKDa-.js";
import { pl as TEMPLATE_SETUP_EXPERIENCE, zs as SETUP_CREDENTIALS_MODAL_KEY } from "./constants-CvheVn3c.js";
import "./merge-BnWpgTIL.js";
import "./_baseOrderBy-B6NURhS_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BPQ7Jg24.js";
import { t as useSetupPanelStore } from "./setupPanel.store-CbAKGtR0.js";
import { n as doesNodeHaveAllCredentialsFilled } from "./nodeTransforms-CyCEXDjF.js";
import "./folders.store-CsKrzliH.js";
import { t as useReadyToRunStore } from "./readyToRun.store-DxSiI3rK.js";
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	setup(__props) {
		const readyToRunStore = useReadyToRunStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeTypesStore = useNodeTypesStore();
		const posthogStore = usePostHog();
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const route = useRoute();
		const isTemplateImportRoute = computed(() => {
			return route.query.templateId !== void 0;
		});
		const isTemplateSetupCompleted = computed(() => {
			return !!workflowDocumentStore?.value?.meta?.templateCredsSetupCompleted;
		});
		const allCredentialsFilled = computed(() => {
			if (isTemplateSetupCompleted.value) return true;
			const nodes = workflowDocumentStore?.value?.getNodes() ?? [];
			if (!nodes.length) return true;
			return nodes.every((node) => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
		});
		const isNewTemplatesSetupEnabled = computed(() => {
			return posthogStore.getVariant(TEMPLATE_SETUP_EXPERIENCE.name) === TEMPLATE_SETUP_EXPERIENCE.variant;
		});
		const isSetupPanelFeatureEnabled = computed(() => {
			return setupPanelStore.isFeatureEnabled;
		});
		const showButton = computed(() => {
			if (!!!workflowDocumentStore?.value?.meta?.templateId) return false;
			if (isSetupPanelFeatureEnabled.value) return (workflowDocumentStore?.value?.getNodes() ?? []).length > 0;
			if (isTemplateSetupCompleted.value) return false;
			return !allCredentialsFilled.value;
		});
		const isButtonDisabled = computed(() => {
			return isSetupPanelFeatureEnabled.value && focusPanelStore.focusPanelActive && focusPanelStore.selectedTab === "setup";
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowDocumentStore?.value?.addToMeta({ templateCredsSetupCompleted: true });
				unsubscribe();
			}
		});
		const openSetupPanel = () => {
			focusPanelStore.setSelectedTab("setup");
			focusPanelStore.openFocusPanel();
		};
		const openSetupModal = () => {
			uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
		};
		const handleTemplateSetup = () => {
			if (isSetupPanelFeatureEnabled.value) openSetupPanel();
			else openSetupModal();
		};
		onBeforeUnmount(() => {
			uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
		});
		onMounted(async () => {
			await nextTick();
			const templateId = workflowDocumentStore?.value?.meta?.templateId;
			const isReadyToRunWorkflow = readyToRunStore.isReadyToRunTemplateId(templateId);
			if (isNewTemplatesSetupEnabled.value && showButton.value && !isReadyToRunWorkflow && isTemplateImportRoute.value) handleTemplateSetup();
		});
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "subtle",
				label: unref(i18n).baseText("nodeView.setupTemplate"),
				disabled: isButtonDisabled.value,
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				onClick: _cache[0] || (_cache[0] = ($event) => handleTemplateSetup())
			}, null, 8, ["label", "disabled"])) : createCommentVNode("", true);
		};
	}
});
export { SetupWorkflowCredentialsButton_default as default };
