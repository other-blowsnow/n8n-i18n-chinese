import { C as computed, E as createCommentVNode, G as nextTick, Gt as unref, J as onBeforeUnmount, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B5pLjaIh.js";
import { Si as useRoute, Vi as N8nButton_default } from "./src-BIzQ9532.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Bt as injectWorkflowState, Ir as usePostHog, _n as useFocusPanelStore, r as useUIStore, s as useWorkflowsStore, w as useNodeTypesStore } from "./users.store-BBCNHvSo.js";
import { $c as TEMPLATE_SETUP_EXPERIENCE, ks as SETUP_CREDENTIALS_MODAL_KEY } from "./constants-C1mjwDyK.js";
import "./merge-Bf-2KzoL.js";
import "./_baseOrderBy-PADM6HdE.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CP9TQSjh.js";
import "./folders.store-B5UUkbFr.js";
import { n as doesNodeHaveAllCredentialsFilled } from "./nodeTransforms-C2soughD.js";
import { t as useSetupPanelStore } from "./setupPanel.store-Ba2DnF9D.js";
import { t as useReadyToRunStore } from "./readyToRun.store-B3ITNKa3.js";
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const readyToRunStore = useReadyToRunStore();
		const workflowState = injectWorkflowState();
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
			return !!workflowsStore.workflow?.meta?.templateCredsSetupCompleted;
		});
		const allCredentialsFilled = computed(() => {
			if (isTemplateSetupCompleted.value) return true;
			const nodes = workflowsStore.getNodes();
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
			if (!!!workflowsStore.workflow?.meta?.templateId) return false;
			if (isSetupPanelFeatureEnabled.value) return workflowsStore.getNodes().length > 0;
			if (isTemplateSetupCompleted.value) return false;
			return !allCredentialsFilled.value;
		});
		const isButtonDisabled = computed(() => {
			return isSetupPanelFeatureEnabled.value && focusPanelStore.focusPanelActive && focusPanelStore.selectedTab === "setup";
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowState.addToWorkflowMetadata({ templateCredsSetupCompleted: true });
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
			const templateId = workflowsStore.workflow?.meta?.templateId;
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
