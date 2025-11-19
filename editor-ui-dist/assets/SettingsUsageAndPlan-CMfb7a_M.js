import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, bt as withCtx, et as openBlock, h as withModifiers, j as createTextVNode, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, pt as i18n } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, E as N8nNotice_default, In as N8nText_default, J as N8nCheckbox_default, Ln as N8nButton_default, P as N8nInfoTip_default, Pn as N8nHeading_default, it as N8nBadge_default, vt as N8nTooltip_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as ElDialog } from "./dialog-CzxM5dHR.js";
import { Gn as hasPermission, Ni as useUIStore, Tn as useDocumentTitle, er as useUsersStore, ko as COMMUNITY_PLUS_ENROLLMENT_MODAL, r as telemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { _r as getResourcePermissions } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { t as useUsageStore } from "./usage.store-vsKaiPgm.js";
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
				"model-value": _ctx.modelValue,
				title: unref(i18n).baseText("settings.usageAndPlan.dialog.eula.title"),
				"before-close": onClose,
				width: "540px",
				"data-test-id": "eula-acceptance-modal"
			}, {
				default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.description")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxWrapper) }, [createVNode(unref(N8nCheckbox_default), {
					modelValue: accepted.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => accepted.value = $event),
					"data-test-id": "eula-checkbox"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.checkbox.label")) + " " + toDisplayString(" ") + " ", 1), createBaseVNode("a", {
						href: _ctx.eulaUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						"data-test-id": "eula-link"
					}, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.link.text")), 9, _hoisted_1$1)])]),
					_: 1
				}, 8, ["modelValue"])], 2)])]),
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
	checkboxWrapper: "_checkboxWrapper_zk1u2_123",
	footerActions: "_footerActions_zk1u2_127"
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
		const showActivationSuccess = () => {
			toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.usageAndPlan.license.activation.success.title"),
				message: i18n.baseText("settings.usageAndPlan.license.activation.success.message", { interpolate: {
					name: usageStore.planName,
					type: usageStore.planId ? i18n.baseText("settings.usageAndPlan.plan") : i18n.baseText("settings.usageAndPlan.edition")
				} })
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
				showActivationSuccess();
			} catch (error) {
				if (isEulaError(error)) {
					activationKeyModal.value = false;
					eulaUrl.value = error.meta.eulaUrl;
					eulaModal.value = true;
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
		const onDialogClosed = () => {
			activationKey.value = "";
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
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => activationKeyModal.value = $event),
					width: "480px",
					top: "0",
					title: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.title"),
					"modal-class": _ctx.$style.center,
					onClosed: onDialogClosed,
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
						onClick: _cache[1] || (_cache[1] = ($event) => activationKeyModal.value = false)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.cancel")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						disabled: !activationKey.value,
						onClick: _cache[2] || (_cache[2] = () => onLicenseActivation())
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
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => eulaModal.value = $event),
					"eula-url": eulaUrl.value,
					onAccept: onEulaAccept,
					onCancel: onEulaCancel
				}, null, 8, ["modelValue", "eula-url"])
			])) : createCommentVNode("", true)]);
		};
	}
});
var SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default = {
	center: "_center_g33cs_123",
	actionBox: "_actionBox_g33cs_127",
	spacedFlex: "_spacedFlex_g33cs_131",
	title: "_title_g33cs_137",
	quota: "_quota_g33cs_143",
	count: "_count_g33cs_155",
	buttons: "_buttons_g33cs_160",
	chart: "_chart_g33cs_176",
	chartLine: "_chartLine_g33cs_183",
	chartBar: "_chartBar_g33cs_193",
	titleTooltip: "_titleTooltip_g33cs_207"
};
var SettingsUsageAndPlan_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-7dbdb19b"]]);
export { SettingsUsageAndPlan_default as default };
