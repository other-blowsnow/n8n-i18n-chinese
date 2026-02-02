import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bn as normalizeStyle, bt as withCtx, et as openBlock, h as withModifiers, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, gt as i18n } from "./_MapCache-8-eqnC2S.js";
import { B as N8nNotice_default, Bi as N8nButton_default, Ht as N8nTooltip_default, Kt as N8nInput_default, Li as N8nHeading_default, Lt as useRoute, Rt as useRouter, Tt as N8nBadge_default, Y as N8nInfoTip_default, at as Checkbox_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Fa as COMMUNITY_PLUS_ENROLLMENT_MODAL, Ft as telemetry, ar as hasPermission, cn as useDocumentTitle, hr as useToast, r as useUIStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { t as ElDialog } from "./dialog-CH3mk7zK.js";
import { Bo as getResourcePermissions } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useUsageStore } from "./usage.store-C3B1i0-9.js";
var _hoisted_1$1 = ["href"];
var EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EulaAcceptanceModal",
	props: {
		modelValue: { type: Boolean },
		eulaUrl: {}
	},
	emits: [
		"update:modelValue",
		"accept",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const accepted = ref(false);
		const isAcceptDisabled = computed(() => !accepted.value);
		const onCancel = () => {
			accepted.value = false;
			emit("cancel");
		};
		const onAccept = () => {
			emit("accept");
		};
		const onClose = () => {
			emit("update:modelValue", false);
			onCancel();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				"model-value": __props.modelValue,
				title: unref(i18n).baseText("settings.usageAndPlan.dialog.eula.title"),
				"before-close": onClose,
				width: "540px",
				"data-test-id": "eula-acceptance-modal"
			}, {
				default: withCtx(() => [createBaseVNode("div", null, [
					createVNode(unref(N8nText_default), {
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.auditNotice),
						color: "text-base",
						size: "medium",
						tag: "p"
					}, {
						default: withCtx(() => [createBaseVNode("em", null, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.audit.notice")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxWrapper) }, [createVNode(unref(Checkbox_default), {
						modelValue: accepted.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => accepted.value = $event),
						"data-test-id": "eula-checkbox"
					}, {
						label: withCtx(() => [createBaseVNode("span", null, [
							createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.checkbox.label")) + " " + toDisplayString(" ") + " ", 1),
							createBaseVNode("a", {
								href: __props.eulaUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								"data-test-id": "eula-link"
							}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.link.text")), 9, _hoisted_1$1),
							_cache[1] || (_cache[1] = createTextVNode(". ", -1))
						])]),
						_: 1
					}, 8, ["modelValue"])], 2)
				])]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					"data-test-id": "eula-cancel-button",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.button.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: isAcceptDisabled.value,
					"data-test-id": "eula-accept-button",
					onClick: onAccept
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.button.accept")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["model-value", "title"]);
		};
	}
});
var EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default = {
	auditNotice: "_auditNotice_hanyh_125",
	checkboxWrapper: "_checkboxWrapper_hanyh_129",
	footerActions: "_footerActions_hanyh_133"
};
var EulaAcceptanceModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { class: "settings-usage-and-plan" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { key: 1 };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = { key: 1 };
var _hoisted_7 = ["href"];
var _hoisted_8 = ["href"];
var SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsageAndPlan",
	setup(__props) {
		const usageStore = useUsageStore();
		const route = useRoute();
		const router = useRouter();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const queryParamCallback = ref(`callback=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`);
		const viewPlansUrl = computed(() => `${usageStore.viewPlansUrl}&${queryParamCallback.value}&source=usage_page`);
		const managePlanUrl = computed(() => `${usageStore.managePlanUrl}&${queryParamCallback.value}`);
		const activationKeyModal = ref(false);
		const activationKey = ref("");
		const activationKeyInput = ref(null);
		const eulaModal = ref(false);
		const eulaUrl = ref("");
		const canUserActivateLicense = computed(() => hasPermission(["rbac"], { rbac: { scope: "license:manage" } }));
		const badgedPlanName = computed(() => {
			const [badge, name] = usageStore.planName.split(" ");
			return {
				name,
				badge
			};
		});
		const isCommunity = computed(() => usageStore.planName.toLowerCase() === "community");
		const isCommunityEditionRegistered = computed(() => usageStore.planName.toLowerCase() === "registered community");
		const canUserRegisterCommunityPlus = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).community.register);
		const showActivationSuccess = (eulaAccepted = false) => {
			const message = eulaAccepted ? i18n.baseText("settings.usageAndPlan.license.activation.success.message.eula", { interpolate: { name: usageStore.planName } }) : i18n.baseText("settings.usageAndPlan.license.activation.success.message", { interpolate: {
				name: usageStore.planName,
				type: usageStore.planId ? i18n.baseText("settings.usageAndPlan.plan") : i18n.baseText("settings.usageAndPlan.edition")
			} });
			toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.usageAndPlan.license.activation.success.title"),
				message
			});
		};
		const showActivationError = (error) => {
			toast.showError(error, i18n.baseText("settings.usageAndPlan.license.activation.error.title"));
		};
		const isEulaError = (error) => {
			const e = error;
			return e.httpStatusCode === 400 && !!e.meta?.eulaUrl;
		};
		const onLicenseActivation = async (eulaUri) => {
			try {
				await usageStore.activateLicense(activationKey.value.trim(), eulaUri?.trim());
				activationKeyModal.value = false;
				eulaModal.value = false;
				activationKey.value = "";
				showActivationSuccess(!!eulaUri);
			} catch (error) {
				if (isEulaError(error)) {
					eulaUrl.value = error.meta.eulaUrl;
					eulaModal.value = true;
					activationKeyModal.value = false;
					return;
				}
				showActivationError(error);
			}
		};
		const onEulaAccept = async () => {
			try {
				await onLicenseActivation(eulaUrl.value);
			} catch (error) {
				eulaModal.value = false;
				showActivationError(error);
			}
		};
		const onEulaCancel = () => {
			eulaModal.value = false;
			eulaUrl.value = "";
			activationKey.value = "";
		};
		const onActivationCancel = () => {
			activationKeyModal.value = false;
			activationKey.value = "";
		};
		const onActivationModalClose = () => {
			if (!eulaModal.value) onActivationCancel();
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.usageAndPlan.title"));
			usageStore.setLoading(true);
			if (route.query.key) try {
				await usageStore.activateLicense(route.query.key);
				await router.replace({ query: {} });
				showActivationSuccess();
				usageStore.setLoading(false);
				return;
			} catch (error) {
				showActivationError(error);
			}
			try {
				if (!route.query.key && canUserActivateLicense.value) await usageStore.refreshLicenseManagementToken();
				else await usageStore.getLicenseInfo();
				usageStore.setLoading(false);
			} catch (error) {
				if (!error.name) error.name = i18n.baseText("settings.usageAndPlan.error");
				toast.showError(error, error.name, error.message);
			}
		});
		const sendUsageTelemetry = (action) => {
			const telemetryPayload = usageStore.telemetryPayload;
			telemetryPayload.action = action;
			telemetry.track("User clicked button on usage page", telemetryPayload);
		};
		const onAddActivationKey = () => {
			activationKeyModal.value = true;
			sendUsageTelemetry("add_activation_key");
		};
		const onViewPlans = () => {
			pageRedirectionHelper.goToUpgrade("usage_page", "open");
			sendUsageTelemetry("view_plans");
		};
		const onManagePlan = () => {
			sendUsageTelemetry("manage_plan");
		};
		const onDialogOpened = () => {
			activationKeyInput.value?.focus();
		};
		const openCommunityRegisterModal = () => {
			uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: { customHeading: void 0 }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "2xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.title")), 1)]),
				_: 1
			}), !unref(usageStore).isLoading ? (openBlock(), createElementBlock("div", _hoisted_2, [
				createVNode(unref(N8nHeading_default), {
					tag: "h3",
					class: normalizeClass(_ctx.$style.title),
					size: "large"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.usageAndPlan.description",
						tag: "span",
						scope: "global"
					}, {
						name: withCtx(() => [createTextVNode(toDisplayString(badgedPlanName.value.name ?? unref(usageStore).planName), 1)]),
						type: withCtx(() => [unref(usageStore).planId ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.plan")), 1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.edition")), 1))]),
						_: 1
					}), badgedPlanName.value.badge && badgedPlanName.value.name ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.titleTooltip)
					}, [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
						content: withCtx(() => [isCommunityEditionRegistered.value ? (openBlock(), createBlock(unref(I18nT), {
							key: 0,
							keypath: "settings.usageAndPlan.license.communityRegistered.tooltip",
							scope: "global"
						})) : createCommentVNode("", true)]),
						default: withCtx(() => [createVNode(unref(N8nBadge_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(badgedPlanName.value.badge), 1)]),
							_: 1
						})]),
						_: 1
					})], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"]),
				isCommunity.value && canUserRegisterCommunityPlus.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					class: "mt-0",
					theme: "warning"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.usageAndPlan.callOut",
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(unref(N8nButton_default), {
							class: "pl-0 pr-0",
							text: "",
							label: unref(i18n).baseText("settings.usageAndPlan.callOut.link"),
							onClick: openCommunityRegisterModal
						}, null, 8, ["label"])]),
						_: 1
					})]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.quota) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chart) }, [unref(usageStore).activeWorkflowTriggersLimit > 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.chartLine)
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.chartBar),
					style: normalizeStyle({ width: `${unref(usageStore).executionPercentage}%` })
				}, null, 6)], 2)) : createCommentVNode("", true), createVNode(unref(I18nT), {
					tag: "span",
					class: normalizeClass(_ctx.$style.count),
					keypath: "settings.usageAndPlan.activeWorkflows.count",
					scope: "global"
				}, {
					count: withCtx(() => [createTextVNode(toDisplayString(unref(usageStore).activeWorkflowTriggersCount), 1)]),
					limit: withCtx(() => [unref(usageStore).activeWorkflowTriggersLimit < 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.unlimited")), 1)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(usageStore).activeWorkflowTriggersLimit), 1))]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				createVNode(unref(N8nInfoTip_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.hint")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [canUserActivateLicense.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.buttonTertiary),
					type: "tertiary",
					size: "large",
					onClick: onAddActivationKey
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.activation")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), unref(usageStore).managementToken ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					size: "large",
					onClick: onManagePlan
				}, {
					default: withCtx(() => [createBaseVNode("a", {
						href: managePlanUrl.value,
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.manage")), 9, _hoisted_7)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					size: "large",
					onClick: withModifiers(onViewPlans, ["prevent"])
				}, {
					default: withCtx(() => [createBaseVNode("a", {
						href: viewPlansUrl.value,
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.plans")), 9, _hoisted_8)]),
					_: 1
				}))], 2),
				createVNode(unref(ElDialog), {
					modelValue: activationKeyModal.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => activationKeyModal.value = $event),
					width: "480px",
					top: "0",
					title: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.title"),
					"modal-class": _ctx.$style.center,
					onClosed: onActivationModalClose,
					onOpened: onDialogOpened
				}, {
					default: withCtx(() => [createVNode(unref(N8nInput_default), {
						ref_key: "activationKeyInput",
						ref: activationKeyInput,
						modelValue: activationKey.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activationKey.value = $event),
						placeholder: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.label")
					}, null, 8, ["modelValue", "placeholder"])]),
					footer: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "secondary",
						onClick: onActivationCancel
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.cancel")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						disabled: !activationKey.value,
						onClick: _cache[1] || (_cache[1] = () => onLicenseActivation())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.activate")), 1)]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, [
					"modelValue",
					"title",
					"modal-class"
				]),
				createVNode(EulaAcceptanceModal_default, {
					modelValue: eulaModal.value,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => eulaModal.value = $event),
					"eula-url": eulaUrl.value,
					onAccept: onEulaAccept,
					onCancel: onEulaCancel
				}, null, 8, ["modelValue", "eula-url"])
			])) : createCommentVNode("", true)]);
		};
	}
});
var SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default = {
	center: "_center_1kdrc_125",
	actionBox: "_actionBox_1kdrc_129",
	spacedFlex: "_spacedFlex_1kdrc_133",
	title: "_title_1kdrc_139",
	quota: "_quota_1kdrc_145",
	count: "_count_1kdrc_157",
	buttons: "_buttons_1kdrc_162",
	chart: "_chart_1kdrc_178",
	chartLine: "_chartLine_1kdrc_185",
	chartBar: "_chartBar_1kdrc_195",
	titleTooltip: "_titleTooltip_1kdrc_209"
};
var SettingsUsageAndPlan_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-3ff9ce54"]]);
export { SettingsUsageAndPlan_default as default };
