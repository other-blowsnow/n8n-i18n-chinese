import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, at as resolveComponent, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { c as I18nT, s as useI18n } from "./src-BxlYlwM1.js";
import { Ja as N8nButton_default, Ka as N8nCallout_default, Ti as N8nBadge_default, Ya as N8nIcon_default, ct as N8nLink_default, gt as useRouter, qa as N8nText_default } from "./src-BY3LHeey.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Y as useEvaluationStore, b as injectWorkflowDocumentStore, t as useWorkflowsStore, wn as useSourceControlStore } from "./workflows.store-BKCVa7q0.js";
import { t as useToast } from "./useToast-Bc9iIWVD.js";
import { h as EVALUATIONS_DOCS_URL, li as VIEWS } from "./constants-CLQJMg7Y.js";
import { s as useAsyncState } from "./core-CZJuH52F.js";
import { p as useTelemetry } from "./users.store-AINJEAwY.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-ZFOaDfHH.js";
import { t as useUsageStore } from "./usage.store-DEjemq_B.js";
import { t as useWorkflowEvaluationState } from "./useWorkflowEvaluationState-C9qhbfIY.js";
import { n as EvaluationsPaywall_default, r as useEvaluationsWizardSidepanelExperiment, t as useEvaluationsLicense } from "./useEvaluationsLicense-BI7PvSlb.js";
//#region src/features/ai/evaluation.ee/components/shared/StepIndicator.vue?vue&type=script&setup=true&lang.ts
var StepIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "StepIndicator",
	props: {
		stepNumber: {},
		isCompleted: { type: Boolean },
		isActive: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.stepIndicator,
				__props.isCompleted && _ctx.$style.completed,
				__props.isActive && _ctx.$style.active,
				!__props.isActive && !__props.isCompleted && _ctx.$style.inactive
			]) }, [__props.isCompleted ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "check",
				size: "xsmall"
			})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(__props.stepNumber), 1)], 64))], 2);
		};
	}
});
var StepIndicator_vue_vue_type_style_index_0_lang_module_default = {
	stepIndicator: "_stepIndicator_1oszv_125",
	active: "_active_1oszv_139",
	completed: "_completed_1oszv_143",
	inactive: "_inactive_1oszv_148"
};
var StepIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StepIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StepIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/StepHeader.vue?vue&type=script&setup=true&lang.ts
var StepHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "StepHeader",
	props: {
		stepNumber: {},
		title: {},
		isCompleted: { type: Boolean },
		isActive: { type: Boolean },
		isOptional: { type: Boolean }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const handleClick = (event) => {
			if (!event.target.closest("button") && !event.target.closest("a") && !event.target.closest("input") && !event.target.closest("select")) emit("click");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.stepHeader),
				onClick: handleClick
			}, [
				createVNode(StepIndicator_default, {
					"step-number": __props.stepNumber,
					"is-completed": __props.isCompleted,
					"is-active": __props.isActive
				}, null, 8, [
					"step-number",
					"is-completed",
					"is-active"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleSlot) }, [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(N8nText_default), {
					size: "medium",
					color: __props.isActive || __props.isCompleted ? "text-dark" : "text-light",
					tag: "span",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["color"])])], 2),
				__props.isOptional ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					style: {
						"background-color": "var(--color--background)",
						"border": "none"
					}
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.stepHeader.optional")), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var StepHeader_vue_vue_type_style_index_0_lang_module_default = { stepHeader: "_stepHeader_xciv4_125" };
var StepHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StepHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StepHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupWizard/SetupWizard.vue?vue&type=script&setup=true&lang.ts
var SetupWizard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWizard",
	emits: ["runTest"],
	setup(__props) {
		const router = useRouter();
		const locale = useI18n();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const usageStore = useUsageStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const hasRuns = computed(() => {
			return evaluationStore.testRunsByWorkflowId[workflowDocumentStore.value.workflowId]?.length > 0;
		});
		const evaluationsAvailable = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit === -1 || usageStore.workflowsWithEvaluationsCount < usageStore.workflowsWithEvaluationsLimit;
		});
		const evaluationsQuotaExceeded = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
		});
		const activeStepIndex = ref(0);
		const initializeActiveStep = () => {
			if (evaluationsQuotaExceeded.value) {
				activeStepIndex.value = 2;
				return;
			}
			if (evaluationState.evaluationTriggerExists.value && evaluationState.evaluationSetMetricsNodeExist.value) activeStepIndex.value = 3;
			else if (evaluationState.evaluationTriggerExists.value && evaluationState.evaluationSetOutputsNodeExist.value) activeStepIndex.value = 2;
			else if (evaluationState.evaluationTriggerExists.value) activeStepIndex.value = 1;
			else activeStepIndex.value = 0;
		};
		initializeActiveStep();
		const toggleStep = (index) => {
			activeStepIndex.value = index;
		};
		function navigateToWorkflow(action) {
			const routeWorkflowId = workflowDocumentStore.value.workflowId || "new";
			router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: routeWorkflowId },
				query: action ? { action } : void 0
			});
		}
		function onSeePlans() {
			pageRedirectionHelper.goToUpgrade("evaluations", "upgrade-evaluations");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "evaluation-setup-wizard"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.steps) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.step, _ctx.$style.completed]) }, [createVNode(StepHeader_default, {
					"step-number": 1,
					title: unref(locale).baseText("evaluations.setupWizard.step1.title"),
					"is-completed": unref(evaluationState).evaluationTriggerExists.value,
					"is-active": activeStepIndex.value === 0,
					onClick: _cache[0] || (_cache[0] = ($event) => toggleStep(0))
				}, null, 8, [
					"title",
					"is-completed",
					"is-active"
				]), activeStepIndex.value === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stepContent)
				}, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.bulletPoints) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item1")), 1)]),
					_: 1
				})]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item2")), 1)]),
					_: 1
				})])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButton) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					onClick: _cache[1] || (_cache[1] = ($event) => navigateToWorkflow("addEvaluationTrigger"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.button")), 1)]),
					_: 1
				})], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.step, activeStepIndex.value === 1 ? _ctx.$style.active : ""]) }, [createVNode(StepHeader_default, {
					"step-number": 2,
					title: unref(locale).baseText("evaluations.setupWizard.step2.title"),
					"is-completed": unref(evaluationState).evaluationSetOutputsNodeExist.value,
					"is-active": activeStepIndex.value === 1,
					onClick: _cache[2] || (_cache[2] = ($event) => toggleStep(1))
				}, null, 8, [
					"title",
					"is-completed",
					"is-active"
				]), activeStepIndex.value === 1 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stepContent)
				}, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.bulletPoints) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.item1")), 1)]),
					_: 1
				})])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButton) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					onClick: _cache[3] || (_cache[3] = ($event) => navigateToWorkflow("addEvaluationNode"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.button")), 1)]),
					_: 1
				})], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [createVNode(StepHeader_default, {
					"step-number": 3,
					title: unref(locale).baseText("evaluations.setupWizard.step3.title"),
					"is-completed": unref(evaluationState).evaluationSetMetricsNodeExist.value,
					"is-active": activeStepIndex.value === 2,
					"is-optional": true,
					onClick: _cache[4] || (_cache[4] = ($event) => toggleStep(2))
				}, null, 8, [
					"title",
					"is-completed",
					"is-active"
				]), activeStepIndex.value === 2 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stepContent)
				}, [
					!evaluationsQuotaExceeded.value ? (openBlock(), createElementBlock("ul", {
						key: 0,
						class: normalizeClass(_ctx.$style.bulletPoints)
					}, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item1")), 1)]),
						_: 1
					})]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item2")), 1)]),
						_: 1
					})])], 2)) : (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 1,
						theme: "warning",
						iconless: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.limitReached")), 1)]),
						_: 1
					})),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButton) }, [!evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						size: "small",
						onClick: _cache[5] || (_cache[5] = ($event) => navigateToWorkflow("addEvaluationNode"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.button")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						size: "small",
						onClick: onSeePlans
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.seePlans")), 1)]),
						_: 1
					})), createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						style: { "color": "var(--color--text--tint-1)" },
						onClick: _cache[6] || (_cache[6] = ($event) => toggleStep(3))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.skip")), 1)]),
						_: 1
					})], 2),
					unref(usageStore).workflowsWithEvaluationsLimit !== -1 && evaluationsAvailable.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.quotaNote)
					}, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "evaluations.setupWizard.step3.notice",
							scope: "global"
						}, {
							link: withCtx(() => [createBaseVNode("a", {
								style: {
									"text-decoration": "underline",
									"color": "inherit"
								},
								onClick: onSeePlans
							}, toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.notice.link")), 1)]),
							_: 1
						})]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [createVNode(StepHeader_default, {
					"step-number": 4,
					title: unref(locale).baseText("evaluations.setupWizard.step4.title"),
					"is-completed": false,
					"is-active": activeStepIndex.value === 3,
					onClick: _cache[9] || (_cache[9] = ($event) => toggleStep(3))
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.actionButton, _ctx.$style.actionButtonInline]) }, [unref(evaluationState).evaluationSetMetricsNodeExist.value && !evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						size: "medium",
						disabled: !unref(evaluationState).evaluationTriggerExists.value || !unref(evaluationState).evaluationSetOutputsNodeExist.value && !unref(evaluationState).evaluationSetMetricsNodeExist.value,
						onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("runTest"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.button")), 1)]),
						_: 1
					}, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "subtle",
						size: "medium",
						disabled: !unref(evaluationState).evaluationTriggerExists.value || !unref(evaluationState).evaluationSetOutputsNodeExist.value && !unref(evaluationState).evaluationSetMetricsNodeExist.value,
						onClick: _cache[8] || (_cache[8] = ($event) => navigateToWorkflow("executeEvaluation"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.altButton")), 1)]),
						_: 1
					}, 8, ["disabled"]))], 2)]),
					_: 1
				}, 8, ["title", "is-active"])], 2)
			], 2)], 2);
		};
	}
});
var SetupWizard_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1j428_125",
	steps: "_steps_1j428_129",
	step: "_step_1j428_129",
	stepContent: "_stepContent_1j428_139",
	slideDown: "_slideDown_1j428_1",
	bulletPoints: "_bulletPoints_1j428_144",
	actionButton: "_actionButton_1j428_151",
	actionButtonInline: "_actionButtonInline_1j428_160",
	quotaNote: "_quotaNote_1j428_164"
};
var SetupWizard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupWizard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupWizard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/EvaluationsEmptyState/EvaluationsEmptyState.vue?vue&type=script&setup=true&lang.ts
var EvaluationsEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsEmptyState",
	props: { disabled: { type: Boolean } },
	emits: ["getStarted"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const features = [
			{
				icon: "bug",
				titleKey: "evaluations.emptyState.catchIssues.title",
				descriptionKey: "evaluations.emptyState.catchIssues.description"
			},
			{
				icon: "blocks",
				titleKey: "evaluations.emptyState.buildConfidence.title",
				descriptionKey: "evaluations.emptyState.buildConfidence.description"
			},
			{
				icon: "gauge",
				titleKey: "evaluations.emptyState.measurePerformance.title",
				descriptionKey: "evaluations.emptyState.measurePerformance.description"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "evaluations-empty-state"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
					tag: "h2",
					size: "xlarge",
					color: "text-dark",
					bold: "",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.emptyState.title")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.emptyState.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.featuresCard) }, [(openBlock(), createElementBlock(Fragment, null, renderList(features, (feature) => {
					return createBaseVNode("div", {
						key: feature.titleKey,
						class: normalizeClass(_ctx.$style.feature)
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: feature.icon,
							size: 24,
							class: normalizeClass(_ctx.$style.featureIcon)
						}, null, 8, ["icon", "class"]),
						createVNode(unref(N8nText_default), {
							size: "medium",
							bold: "",
							color: "text-dark",
							class: normalizeClass(_ctx.$style.featureTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(feature.titleKey)), 1)]),
							_: 2
						}, 1032, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "medium",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(feature.descriptionKey)), 1)]),
							_: 2
						}, 1024)
					], 2);
				}), 64))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					type: "button",
					disabled: __props.disabled,
					"data-test-id": "evaluations-empty-state-get-started",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("getStarted"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.emptyState.getStarted")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			], 2);
		};
	}
});
var EvaluationsEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1qlio_125",
	header: "_header_1qlio_138",
	title: "_title_1qlio_146",
	description: "_description_1qlio_151",
	featuresCard: "_featuresCard_1qlio_156",
	feature: "_feature_1qlio_156",
	featureIcon: "_featureIcon_1qlio_182",
	featureTitle: "_featureTitle_1qlio_187",
	footer: "_footer_1qlio_191"
};
var EvaluationsEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EvaluationsEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/views/EvaluationsRootView.vue?vue&type=script&setup=true&lang.ts
var EvaluationsRootView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsRootView",
	props: { workflowId: {} },
	setup(__props) {
		const props = __props;
		const usageStore = useUsageStore();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const workflowsStore = useWorkflowsStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const locale = useI18n();
		const sourceControlStore = useSourceControlStore();
		const router = useRouter();
		const { isFeatureEnabled: isEvaluationsWizardSidepanelEnabled } = useEvaluationsWizardSidepanelExperiment();
		const { isLicensed } = useEvaluationsLicense();
		const isProtectedEnvironment = computed(() => {
			return sourceControlStore.preferences.branchReadOnly;
		});
		const workflowIsSaved = computed(() => workflowsStore.isWorkflowSaved[props.workflowId] === true);
		const runs = computed(() => {
			return Object.values(evaluationStore.testRunsById ?? {}).filter(({ workflowId }) => workflowId === props.workflowId);
		});
		const hasRuns = computed(() => {
			return runs.value.length > 0;
		});
		const showWizard = computed(() => !hasRuns.value);
		async function runTest() {
			if (!workflowIsSaved.value) return;
			try {
				await evaluationStore.startTestRun(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
				return;
			}
			try {
				await evaluationStore.fetchTestRuns(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		const evaluationsQuotaExceeded = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
		});
		function openWizardOnCanvas() {
			router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.workflowId },
				query: { action: "openEvaluationsWizard" }
			});
		}
		async function fetchTestRuns() {
			if (!workflowIsSaved.value) return;
			try {
				await evaluationStore.fetchTestRuns(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		const { isReady } = useAsyncState(async () => {
			try {
				await usageStore.getLicenseInfo();
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
			await fetchTestRuns();
		}, void 0);
		watch(workflowIsSaved, async (isSaved) => {
			if (isSaved) await fetchTestRuns();
		});
		watch(isReady, (ready) => {
			if (ready) if (showWizard.value) telemetry.track("User viewed tests tab", {
				workflow_id: props.workflowId,
				test_type: "evaluation",
				view: "setup",
				trigger_set_up: evaluationState.evaluationTriggerExists.value,
				output_set_up: evaluationState.evaluationSetOutputsNodeExist.value,
				metrics_set_up: evaluationState.evaluationSetMetricsNodeExist.value,
				quota_reached: evaluationsQuotaExceeded.value
			});
			else telemetry.track("User viewed tests tab", {
				workflow_id: props.workflowId,
				test_type: "evaluation",
				view: "overview",
				run_count: runs.value.length
			});
		}, { immediate: true });
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.evaluationsView) }, [unref(isReady) && showWizard.value && unref(isEvaluationsWizardSidepanelEnabled) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!unref(isLicensed) ? (openBlock(), createBlock(EvaluationsPaywall_default, { key: 0 })) : (openBlock(), createBlock(EvaluationsEmptyState_default, {
				key: 1,
				disabled: isProtectedEnvironment.value,
				onGetStarted: openWizardOnCanvas
			}, null, 8, ["disabled"]))], 64)) : unref(isReady) && showWizard.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.setupContent)
			}, [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
				size: "large",
				color: "text-dark",
				tag: "h3",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.title")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "small",
				color: "text-base",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.description")) + " ", 1), createVNode(unref(N8nLink_default), {
					size: "small",
					href: unref(EVALUATIONS_DOCS_URL)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.moreInfo")), 1)]),
					_: 1
				}, 8, ["href"])]),
				_: 1
			}, 8, ["class"])]), isProtectedEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				icon: "info"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.readOnlyNotice")), 1)]),
				_: 1
			})) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.config)
			}, [_cache[0] || (_cache[0] = createBaseVNode("iframe", {
				style: { "min-width": "500px" },
				width: "500",
				height: "280",
				src: "https://www.youtube.com/embed/5LlF196PKaE",
				title: "n8n Evaluation quickstart",
				frameborder: "0",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
				referrerpolicy: "strict-origin-when-cross-origin",
				allowfullscreen: ""
			}, null, -1)), unref(isLicensed) ? (openBlock(), createBlock(SetupWizard_default, {
				key: 0,
				onRunTest: runTest
			})) : (openBlock(), createBlock(EvaluationsPaywall_default, { key: 1 }))], 2))], 2)) : unref(isReady) ? (openBlock(), createBlock(_component_RouterView, { key: 2 })) : createCommentVNode("", true)], 2);
		};
	}
});
var EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default = {
	evaluationsView: "_evaluationsView_147cp_125",
	setupContent: "_setupContent_147cp_133",
	description: "_description_147cp_142",
	config: "_config_147cp_147",
	setupDescription: "_setupDescription_147cp_153"
};
var EvaluationsRootView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EvaluationsRootView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { EvaluationsRootView_default as default };
