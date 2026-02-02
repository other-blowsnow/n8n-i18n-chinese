import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, ot as resolveComponent, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, x as useAsyncState, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Lt as useRoute, Mi as N8nActionBox_default, Ri as N8nCallout_default, Rt as useRouter, Tt as N8nBadge_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { C as useNodeTypesStore, Fa as COMMUNITY_PLUS_ENROLLMENT_MODAL, Nt as useTelemetry, T as useEvaluationStore, br as useSourceControlStore, hr as useToast, r as useUIStore, s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS, g as EVALUATIONS_DOCS_URL } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import "./executions.store-nTCUYDJR.js";
import "./usePinnedData-B4FHq9FM.js";
import "./nodeIcon-p8UmtDus.js";
import "./canvas.utils-BvLPDYAs.js";
import "./nodeCreator.store-D-pWr7VG.js";
import { t as useCanvasOperations } from "./useCanvasOperations-01naG_2v.js";
import "./folders.store-B29vIVJe.js";
import { t as useUsageStore } from "./usage.store-C3B1i0-9.js";
var EvaluationsPaywall_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsPaywall",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const goToUpgrade = async () => {
			uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: { customHeading: void 0 }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nActionBox_default), {
				"data-test-id": "evaluations-unlicensed",
				heading: unref(i18n).baseText("evaluations.paywall.title"),
				description: unref(i18n).baseText("evaluations.paywall.description"),
				"button-text": unref(i18n).baseText("evaluations.paywall.cta"),
				onClick: goToUpgrade
			}, null, 8, [
				"heading",
				"description",
				"button-text"
			]);
		};
	}
});
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
var StepIndicator_default = /* @__PURE__ */ __plugin_vue_export_helper_default(StepIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StepIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
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
var StepHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(StepHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StepHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var SetupWizard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWizard",
	emits: ["runTest"],
	setup(__props) {
		const router = useRouter();
		const locale = useI18n();
		const workflowsStore = useWorkflowsStore();
		const evaluationStore = useEvaluationStore();
		const usageStore = useUsageStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const hasRuns = computed(() => {
			return evaluationStore.testRunsByWorkflowId[workflowsStore.workflow.id]?.length > 0;
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
			if (evaluationStore.evaluationTriggerExists && evaluationStore.evaluationSetMetricsNodeExist) activeStepIndex.value = 3;
			else if (evaluationStore.evaluationTriggerExists && evaluationStore.evaluationSetOutputsNodeExist) activeStepIndex.value = 2;
			else if (evaluationStore.evaluationTriggerExists) activeStepIndex.value = 1;
			else activeStepIndex.value = 0;
		};
		initializeActiveStep();
		const toggleStep = (index) => {
			activeStepIndex.value = index;
		};
		function navigateToWorkflow(action) {
			const routeWorkflowId = workflowsStore.workflow.id || "new";
			router.push({
				name: VIEWS.WORKFLOW,
				params: { name: routeWorkflowId },
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
					"is-completed": unref(evaluationStore).evaluationTriggerExists,
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
					size: "small",
					type: "secondary",
					onClick: _cache[1] || (_cache[1] = ($event) => navigateToWorkflow("addEvaluationTrigger"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.button")), 1)]),
					_: 1
				})], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.step, activeStepIndex.value === 1 ? _ctx.$style.active : ""]) }, [createVNode(StepHeader_default, {
					"step-number": 2,
					title: unref(locale).baseText("evaluations.setupWizard.step2.title"),
					"is-completed": unref(evaluationStore).evaluationSetOutputsNodeExist,
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
					size: "small",
					type: "secondary",
					onClick: _cache[3] || (_cache[3] = ($event) => navigateToWorkflow("addEvaluationNode"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.button")), 1)]),
					_: 1
				})], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [createVNode(StepHeader_default, {
					"step-number": 3,
					title: unref(locale).baseText("evaluations.setupWizard.step3.title"),
					"is-completed": unref(evaluationStore).evaluationSetMetricsNodeExist,
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
						size: "small",
						type: "secondary",
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
						size: "small",
						text: "",
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
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.actionButton, _ctx.$style.actionButtonInline]) }, [unref(evaluationStore).evaluationSetMetricsNodeExist && !evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						size: "medium",
						type: "secondary",
						disabled: !unref(evaluationStore).evaluationTriggerExists || !unref(evaluationStore).evaluationSetOutputsNodeExist && !unref(evaluationStore).evaluationSetMetricsNodeExist,
						onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("runTest"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.button")), 1)]),
						_: 1
					}, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						size: "medium",
						type: "secondary",
						disabled: !unref(evaluationStore).evaluationTriggerExists || !unref(evaluationStore).evaluationSetOutputsNodeExist && !unref(evaluationStore).evaluationSetMetricsNodeExist,
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
var SetupWizard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SetupWizard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupWizard_vue_vue_type_style_index_0_lang_module_default }]]);
var EvaluationsRootView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsRootView",
	props: { name: {} },
	setup(__props) {
		const props = __props;
		const workflowsStore = useWorkflowsStore();
		const usageStore = useUsageStore();
		const evaluationStore = useEvaluationStore();
		const nodeTypesStore = useNodeTypesStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const locale = useI18n();
		const route = useRoute();
		const sourceControlStore = useSourceControlStore();
		const { initializeWorkspace } = useCanvasOperations();
		const evaluationsLicensed = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit !== 0;
		});
		const isProtectedEnvironment = computed(() => {
			return sourceControlStore.preferences.branchReadOnly;
		});
		const runs = computed(() => {
			return Object.values(evaluationStore.testRunsById ?? {}).filter(({ workflowId }) => workflowId === props.name);
		});
		const hasRuns = computed(() => {
			return runs.value.length > 0;
		});
		const showWizard = computed(() => !hasRuns.value);
		const isNewWorkflowRoute = computed(() => {
			return route.query.new === "true";
		});
		async function runTest() {
			try {
				await evaluationStore.startTestRun(props.name);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
				return;
			}
			try {
				await evaluationStore.fetchTestRuns(props.name);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		const evaluationsQuotaExceeded = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
		});
		const { isReady } = useAsyncState(async () => {
			try {
				await usageStore.getLicenseInfo();
				await evaluationStore.fetchTestRuns(props.name);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
			const workflowId = props.name;
			const isAlreadyInitialized = workflowsStore.workflow.id === workflowId;
			if (isNewWorkflowRoute.value || isAlreadyInitialized) return;
			if (!workflowsStore.workflowsById[workflowId]) try {
				const data = await workflowsStore.fetchWorkflow(workflowId);
				if (nodeTypesStore.allNodeTypes.length === 0) await nodeTypesStore.getNodeTypes();
				await initializeWorkspace(data);
			} catch (error) {
				toast.showError(error, locale.baseText("nodeView.showError.openWorkflow.title"));
			}
		}, void 0);
		watch(isReady, (ready) => {
			if (ready) if (showWizard.value) telemetry.track("User viewed tests tab", {
				workflow_id: props.name,
				test_type: "evaluation",
				view: "setup",
				trigger_set_up: evaluationStore.evaluationTriggerExists,
				output_set_up: evaluationStore.evaluationSetOutputsNodeExist,
				metrics_set_up: evaluationStore.evaluationSetMetricsNodeExist,
				quota_reached: evaluationsQuotaExceeded.value
			});
			else telemetry.track("User viewed tests tab", {
				workflow_id: props.name,
				test_type: "evaluation",
				view: "overview",
				run_count: runs.value.length
			});
		}, { immediate: true });
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.evaluationsView) }, [unref(isReady) && showWizard.value ? (openBlock(), createElementBlock("div", {
				key: 0,
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
			}, null, -1)), evaluationsLicensed.value ? (openBlock(), createBlock(SetupWizard_default, {
				key: 0,
				onRunTest: runTest
			})) : (openBlock(), createBlock(EvaluationsPaywall_default, { key: 1 }))], 2))], 2)) : unref(isReady) ? (openBlock(), createBlock(_component_RouterView, { key: 1 })) : createCommentVNode("", true)], 2);
		};
	}
});
var EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default = {
	evaluationsView: "_evaluationsView_1ydf9_125",
	setupContent: "_setupContent_1ydf9_132",
	description: "_description_1ydf9_141",
	config: "_config_1ydf9_146",
	setupDescription: "_setupDescription_1ydf9_152"
};
var EvaluationsRootView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EvaluationsRootView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default }]]);
export { EvaluationsRootView_default as default };
