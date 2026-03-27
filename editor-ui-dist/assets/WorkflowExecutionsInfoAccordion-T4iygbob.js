import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, Wt as unref, X as onMounted, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-65UNw25j.js";
import { Mi as N8nTooltip_default, _t as useRouter, gt as useRoute, lt as N8nLink_default, nt as N8nInfoAccordion_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { As as useSettingsStore, Mr as useNpsSurveyStore, ia as injectWorkflowDocumentStore, r as useUIStore, s as useWorkflowsStore, yn as useWorkflowSaving } from "./users.store-buY8IFeq.js";
import { ec as WORKFLOW_SETTINGS_MODAL_KEY } from "./constants-DgFYHRsp.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-gYWFKNUJ.js";
var _hoisted_1 = { class: "mt-2xs" };
var WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsInfoAccordion",
	props: { initiallyExpanded: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const workflowSaving = useWorkflowSaving({ router });
		const locale = useI18n();
		const workflowId = useInjectWorkflowId();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const npsSurveyStore = useNpsSurveyStore();
		const defaultValues = ref({
			saveFailedExecutions: "all",
			saveSuccessfulExecutions: "all",
			saveManualExecutions: false
		});
		const workflowSaveSettings = ref({
			saveFailedExecutions: false,
			saveSuccessfulExecutions: false,
			saveTestExecutions: false
		});
		const accordionItems = computed(() => [{
			id: "productionExecutions",
			label: locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutions"),
			icon: productionExecutionsIcon.value.icon,
			iconColor: productionExecutionsIcon.value.color,
			tooltip: productionExecutionsStatus.value === "unknown" ? locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip") : null
		}, {
			id: "manualExecutions",
			label: locale.baseText("executionsLandingPage.emptyState.accordion.testExecutions"),
			icon: workflowSaveSettings.value.saveTestExecutions ? "check" : "x",
			iconColor: workflowSaveSettings.value.saveTestExecutions ? "success" : "danger"
		}]);
		const shouldExpandAccordion = computed(() => {
			if (!props.initiallyExpanded) return false;
			return !workflowSaveSettings.value.saveFailedExecutions || !workflowSaveSettings.value.saveSuccessfulExecutions || !workflowSaveSettings.value.saveTestExecutions;
		});
		const productionExecutionsIcon = computed(() => {
			if (productionExecutionsStatus.value === "saving") return {
				icon: "check",
				color: "success"
			};
			else if (productionExecutionsStatus.value === "not-saving") return {
				icon: "x",
				color: "danger"
			};
			return {
				icon: "triangle-alert",
				color: "warning"
			};
		});
		const productionExecutionsStatus = computed(() => {
			if (workflowSaveSettings.value.saveSuccessfulExecutions === workflowSaveSettings.value.saveFailedExecutions) {
				if (workflowSaveSettings.value.saveSuccessfulExecutions) return "saving";
				return "not-saving";
			} else return "unknown";
		});
		const workflowSettings = computed(() => workflowDocumentStore?.value?.getSettingsSnapshot() ?? {});
		const accordionIcon = computed(() => {
			if (!workflowSaveSettings.value.saveTestExecutions || productionExecutionsStatus.value !== "saving") return {
				icon: "triangle-alert",
				color: "warning"
			};
		});
		watch(workflowSettings, (newSettings) => {
			updateSettings(newSettings);
		});
		onMounted(() => {
			defaultValues.value.saveFailedExecutions = settingsStore.saveDataErrorExecution;
			defaultValues.value.saveSuccessfulExecutions = settingsStore.saveDataSuccessExecution;
			defaultValues.value.saveManualExecutions = settingsStore.saveManualExecutions;
			updateSettings(workflowSettings.value);
		});
		function updateSettings(wfSettings) {
			workflowSaveSettings.value.saveFailedExecutions = wfSettings.saveDataErrorExecution === void 0 ? defaultValues.value.saveFailedExecutions === "all" : wfSettings.saveDataErrorExecution === "all";
			workflowSaveSettings.value.saveSuccessfulExecutions = wfSettings.saveDataSuccessExecution === void 0 ? defaultValues.value.saveSuccessfulExecutions === "all" : wfSettings.saveDataSuccessExecution === "all";
			workflowSaveSettings.value.saveTestExecutions = wfSettings.saveManualExecutions === void 0 ? defaultValues.value.saveManualExecutions : wfSettings.saveManualExecutions;
		}
		function onAccordionClick(event) {
			if (event.target instanceof HTMLAnchorElement) {
				event.preventDefault();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		}
		function onItemTooltipClick(item, event) {
			if (item === "productionExecutions" && event.target instanceof HTMLAnchorElement) {
				event.preventDefault();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		}
		function openWorkflowSettings() {
			uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
		}
		async function onSaveWorkflowClick() {
			let currentId = void 0;
			if (workflowId.value) currentId = workflowId.value;
			else if (route.params.name) {
				const routeName = route.params.name;
				currentId = Array.isArray(routeName) ? routeName[0] : routeName;
			}
			if (!currentId) return;
			if (await workflowSaving.saveCurrentWorkflow({ id: currentId })) await npsSurveyStore.showNpsSurveyIfPossible();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nInfoAccordion_default), {
				class: normalizeClass([_ctx.$style.accordion, "mt-2xl"]),
				title: unref(i18n).baseText("executionsLandingPage.emptyState.accordion.title"),
				items: accordionItems.value,
				"initially-expanded": shouldExpandAccordion.value,
				"header-icon": accordionIcon.value,
				"onClick:body": onAccordionClick,
				onTooltipClick: onItemTooltipClick
			}, {
				customContent: withCtx(() => [createBaseVNode("footer", _hoisted_1, [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer")) + " ", 1), createVNode(unref(N8nTooltip_default), { disabled: unref(workflowsStore).isWorkflowSaved[unref(workflowId)] }, {
					content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nLink_default), { onClick: withModifiers(onSaveWorkflowClick, ["prevent"]) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipLink")), 1)]),
						_: 1
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipText")), 1)])]),
					default: withCtx(() => [createVNode(unref(N8nLink_default), {
						class: normalizeClass({ [_ctx.$style.disabled]: !unref(workflowsStore).isWorkflowSaved[unref(workflowId)] }),
						size: "small",
						onClick: withModifiers(openWorkflowSettings, ["prevent"])
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.settingsLink")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"])])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"items",
				"initially-expanded",
				"header-icon"
			]);
		};
	}
});
var WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordion: "_accordion_clgee_125",
	disabled: "_disabled_clgee_153"
};
var WorkflowExecutionsInfoAccordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowExecutionsInfoAccordion_default as t };
