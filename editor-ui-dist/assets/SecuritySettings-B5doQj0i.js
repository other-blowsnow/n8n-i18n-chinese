import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, c as useCssModule, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as I18nT, s as useI18n } from "./src-BuOkMaP4.js";
import { Ga as N8nHeading_default, Ti as N8nBadge_default, W as N8nNotice_default, Wt as ElSwitch, lt as N8nLink_default, qa as N8nText_default, s as Select_default, u as AlertDialog_default, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { s as useAsyncState } from "./core-CxAuVuwP.js";
import { t as useToast } from "./useToast-CNwmpHsw.js";
import { Ed as EnterpriseEditionFeature, _ as EXECUTION_DATA_REDACTION_ENFORCEMENT_DOCS_URL } from "./constants-U-laJZAl.js";
import { t as useRootStore } from "./useRootStore-Bad1y11b.js";
import { U as getSecuritySettings, W as updateSecuritySettings, t as useSettingsStore } from "./settings.store-CgTGI66t.js";
import { t as useUsersStore } from "./users.store-Bf6s0cNu.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-zojAKyiI.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-BarYnP2-.js";
import "./security-settings-F9yez7Vr.js";
//#region src/features/settings/security/DataRedactionSection.vue?vue&type=script&setup=true&lang.ts
var TOOLTIP_KEY = "settings.security.dataRedaction.unlicensed_tooltip";
var DataRedactionSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DataRedactionSection",
	props: {
		initialFloor: {},
		managedByEnv: { type: Boolean }
	},
	setup(__props) {
		const FLOOR_TO_LEGACY_KEY = {
			production: "non-manual",
			all: "all"
		};
		const props = __props;
		const $style = useCssModule();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const i18n = useI18n();
		const { showToast, showError } = useToast();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const floor = ref(props.initialFloor);
		const showEnableDialog = ref(false);
		const showDisableDialog = ref(false);
		const isSaving = ref(false);
		const isLicensed = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.DataRedaction]);
		const enforced = computed({
			get: () => floor.value !== "off",
			set: (value) => {
				if (value) {
					showEnableDialog.value = true;
					return;
				}
				showDisableDialog.value = true;
			}
		});
		const dropdownFloor = computed(() => floor.value === "off" ? "production" : floor.value);
		const floorOptions = computed(() => ["production", "all"].map((value) => ({
			value,
			label: i18n.baseText(`settings.security.dataRedaction.scope.option.${FLOOR_TO_LEGACY_KEY[value]}`)
		})));
		const affectedScopeText = computed(() => {
			if (floor.value === "off") return i18n.baseText("settings.security.dataRedaction.affectedScope.none");
			return i18n.baseText(`settings.security.dataRedaction.affectedScope.${FLOOR_TO_LEGACY_KEY[floor.value]}`);
		});
		async function persist(nextFloor, successKey, errorKey) {
			const previousFloor = floor.value;
			floor.value = nextFloor;
			isSaving.value = true;
			try {
				await updateSecuritySettings(rootStore.restApiContext, { redactionEnforcement: { floor: nextFloor } });
				showToast({
					type: "success",
					title: i18n.baseText(successKey),
					message: ""
				});
				return true;
			} catch (error) {
				floor.value = previousFloor;
				showError(error, i18n.baseText(errorKey));
				return false;
			} finally {
				isSaving.value = false;
			}
		}
		async function confirmEnable() {
			if (await persist("production", "settings.security.dataRedaction.enforce.success.enabled", "settings.security.dataRedaction.enforce.error")) showEnableDialog.value = false;
		}
		async function confirmDisable() {
			if (await persist("off", "settings.security.dataRedaction.enforce.success.disabled", "settings.security.dataRedaction.enforce.error")) showDisableDialog.value = false;
		}
		function onSelectFloor(value) {
			if (!value) return;
			const next = value;
			if (next === dropdownFloor.value) return;
			persist(next, "settings.security.dataRedaction.scope.success", "settings.security.dataRedaction.scope.error");
		}
		function goToUpgrade() {
			pageRedirectionHelper.goToUpgrade("data-redaction", "upgrade-data-redaction");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					class: "mb-l"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.title")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(unref($style).settingsSection) }, [
					createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.enforce.title")) + " ", 1), !isLicensed.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: "ml-4xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.enforce.message")) + " ", 1), createVNode(unref(N8nLink_default), {
							to: unref(EXECUTION_DATA_REDACTION_ENFORCEMENT_DOCS_URL),
							size: "small",
							"new-window": "",
							"data-test-id": "redaction-enforcement-docs-link"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
							_: 1
						}, 8, ["to"])]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).DataRedaction] }, {
						fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								keypath: TOOLTIP_KEY,
								tag: "span",
								scope: "global"
							}, {
								action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.unlicensed_tooltip.link")), 1)]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(ElSwitch), {
								"model-value": enforced.value,
								size: "large",
								disabled: true,
								"data-test-id": "enable-redaction-enforcement"
							}, null, 8, ["model-value"])]),
							_: 1
						})]),
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							modelValue: enforced.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => enforced.value = $event),
							size: "large",
							disabled: props.managedByEnv || isSaving.value,
							"data-test-id": "enable-redaction-enforcement"
						}, null, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["features"])], 2)], 2),
					!isLicensed.value || enforced.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref($style).settingsContainer),
						"data-test-id": "redaction-enforcement-scope-row"
					}, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.scope.title")) + " ", 1), !isLicensed.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							class: "ml-4xs"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.scope.description")), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).DataRedaction] }, {
						fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								keypath: TOOLTIP_KEY,
								tag: "span",
								scope: "global"
							}, {
								action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.unlicensed_tooltip.link")), 1)]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(Select_default), {
								"model-value": dropdownFloor.value,
								items: floorOptions.value,
								size: "medium",
								disabled: true,
								"data-test-id": "redaction-enforcement-scope-select"
							}, null, 8, ["model-value", "items"])]),
							_: 1
						})]),
						default: withCtx(() => [createVNode(unref(Select_default), {
							"model-value": dropdownFloor.value,
							items: floorOptions.value,
							size: "medium",
							disabled: props.managedByEnv || isSaving.value,
							"data-test-id": "redaction-enforcement-scope-select",
							"onUpdate:modelValue": onSelectFloor
						}, null, 8, [
							"model-value",
							"items",
							"disabled"
						])]),
						_: 1
					}, 8, ["features"])], 2)], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						class: normalizeClass(unref($style).settingsCountRow),
						"data-test-id": "redaction-enforcement-summary"
					}, [createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.affectedScope.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(affectedScopeText.value), 1)]),
						_: 1
					})], 2)
				], 2),
				createVNode(unref(AlertDialog_default), {
					open: showEnableDialog.value,
					title: unref(i18n).baseText("settings.security.dataRedaction.enforce.confirmEnable.headline"),
					description: unref(i18n).baseText("settings.security.dataRedaction.enforce.confirmEnable.message"),
					"action-label": unref(i18n).baseText("settings.security.dataRedaction.enforce.confirmEnable.action"),
					loading: isSaving.value,
					size: "medium",
					"data-test-id": "redaction-enforcement-enable-confirm",
					onAction: confirmEnable,
					onCancel: _cache[1] || (_cache[1] = ($event) => showEnableDialog.value = false),
					"onUpdate:open": _cache[2] || (_cache[2] = ($event) => showEnableDialog.value = $event)
				}, null, 8, [
					"open",
					"title",
					"description",
					"action-label",
					"loading"
				]),
				createVNode(unref(AlertDialog_default), {
					open: showDisableDialog.value,
					title: unref(i18n).baseText("settings.security.dataRedaction.enforce.confirmDisable.headline"),
					description: unref(i18n).baseText("settings.security.dataRedaction.enforce.confirmDisable.message"),
					"action-label": unref(i18n).baseText("settings.security.dataRedaction.enforce.confirmDisable.action"),
					loading: isSaving.value,
					size: "medium",
					"data-test-id": "redaction-enforcement-disable-confirm",
					onAction: confirmDisable,
					onCancel: _cache[3] || (_cache[3] = ($event) => showDisableDialog.value = false),
					"onUpdate:open": _cache[4] || (_cache[4] = ($event) => showDisableDialog.value = $event)
				}, null, 8, [
					"open",
					"title",
					"description",
					"action-label",
					"loading"
				])
			]);
		};
	}
});
var DataRedactionSection_vue_vue_type_style_index_0_lang_module_default = {
	settingsSection: "_settingsSection_10ip7_2",
	settingsContainer: "_settingsContainer_10ip7_8",
	settingsContainerInfo: "_settingsContainerInfo_10ip7_16",
	settingsContainerAction: "_settingsContainerAction_10ip7_27",
	settingsCountRow: "_settingsCountRow_10ip7_35"
};
var DataRedactionSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DataRedactionSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataRedactionSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/security/SecuritySettings.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-3xl" };
var mfaTooltipKey = "settings.personal.mfa.enforce.unlicensed_tooltip";
var personalSpaceTooltipKey = "settings.security.personalSpace.unlicensed_tooltip";
var SecuritySettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SecuritySettings",
	setup(__props) {
		const $style = useCssModule();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const { showToast, showError } = useToast();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const showPublishingDialog = ref(false);
		const showSharingDialog = ref(false);
		const isEnforceMFAEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.EnforceMFA]);
		const isPersonalSpacePolicyLicensed = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.PersonalSpacePolicy]);
		async function onUpdateMfaEnforced(value) {
			const boolValue = typeof value === "boolean" ? value : Boolean(value);
			try {
				await usersStore.updateEnforceMfa(boolValue);
				showToast({
					type: "success",
					title: boolValue ? i18n.baseText("settings.personal.mfa.enforce.enabled.title") : i18n.baseText("settings.personal.mfa.enforce.disabled.title"),
					message: boolValue ? i18n.baseText("settings.personal.mfa.enforce.enabled.message") : i18n.baseText("settings.personal.mfa.enforce.disabled.message")
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.personal.mfa.enforce.error"));
			}
		}
		function goToUpgrade() {
			pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-users");
		}
		const { state, isReady, error } = useAsyncState(async () => {
			const settings = await getSecuritySettings(rootStore.restApiContext);
			return {
				personalSpacePublishing: settings.personalSpacePublishing,
				personalSpaceSharing: settings.personalSpaceSharing,
				publishedPersonalWorkflowsCount: settings.publishedPersonalWorkflowsCount,
				sharedPersonalWorkflowsCount: settings.sharedPersonalWorkflowsCount,
				sharedPersonalCredentialsCount: settings.sharedPersonalCredentialsCount,
				managedByEnv: settings.managedByEnv,
				initialRedactionFloor: settings.redactionEnforcement?.floor ?? "off"
			};
		}, void 0);
		const isManagedByEnv = computed(() => state.value?.managedByEnv ?? false);
		const isSecuritySettingsSettled = computed(() => isReady.value || error.value !== void 0);
		async function updatePersonalSpaceSetting(key, value, toastNamespace) {
			try {
				await updateSecuritySettings(rootStore.restApiContext, { [key]: value });
				showToast({
					type: "success",
					title: value ? i18n.baseText(`settings.security.personalSpace.${toastNamespace}.success.enabled`) : i18n.baseText(`settings.security.personalSpace.${toastNamespace}.success.disabled`),
					message: ""
				});
			} catch (error) {
				if (state.value) state.value = {
					...state.value,
					[key]: !value
				};
				showError(error, i18n.baseText(`settings.security.personalSpace.${toastNamespace}.error`));
			}
		}
		const personalSpacePublishing = computed({
			get: () => state.value?.personalSpacePublishing ?? false,
			set: (value) => {
				if (!value) {
					showPublishingDialog.value = true;
					return;
				}
				if (state.value) state.value = {
					...state.value,
					personalSpacePublishing: value
				};
				updatePersonalSpaceSetting("personalSpacePublishing", value, "publishing");
			}
		});
		function confirmDisablePublishing() {
			showPublishingDialog.value = false;
			if (state.value) state.value = {
				...state.value,
				personalSpacePublishing: false
			};
			updatePersonalSpaceSetting("personalSpacePublishing", false, "publishing");
		}
		const personalSpaceSharing = computed({
			get: () => state.value?.personalSpaceSharing ?? false,
			set: (value) => {
				if (!value) {
					showSharingDialog.value = true;
					return;
				}
				if (state.value) state.value = {
					...state.value,
					personalSpaceSharing: value
				};
				updatePersonalSpaceSetting("personalSpaceSharing", value, "sharing");
			}
		});
		function confirmDisableSharing() {
			showSharingDialog.value = false;
			if (state.value) state.value = {
				...state.value,
				personalSpaceSharing: false
			};
			updatePersonalSpaceSetting("personalSpaceSharing", false, "sharing");
		}
		const sharingCountText = computed(() => {
			const workflows = state.value?.sharedPersonalWorkflowsCount ?? 0;
			const credentials = state.value?.sharedPersonalCredentialsCount ?? 0;
			return i18n.baseText("settings.security.personalSpace.sharing.existingCount.value", { interpolate: {
				workflowCount: String(workflows),
				credentialCount: String(credentials)
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(["mb-xl", unref($style).headerTitle]) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.description")), 1)]),
					_: 1
				})], 2),
				isManagedByEnv.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					class: "mb-l",
					content: unref(i18n).baseText("settings.security.managedByEnv"),
					"data-test-id": "security-managed-by-env-notice"
				}, null, 8, ["content"])) : createCommentVNode("", true),
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					class: "mb-l"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.title")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(unref($style).settingsSection) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.title")) + " ", 1), !isEnforceMFAEnabled.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: "ml-4xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.message")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).EnforceMFA] }, {
					fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
						content: withCtx(() => [createVNode(unref(I18nT), {
							keypath: mfaTooltipKey,
							tag: "span",
							scope: "global"
						}, {
							action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.unlicensed_tooltip.link")), 1)]),
							_: 1
						})]),
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							"model-value": unref(settingsStore).isMFAEnforced,
							size: "large",
							disabled: true
						}, null, 8, ["model-value"])]),
						_: 1
					})]),
					default: withCtx(() => [createVNode(unref(ElSwitch), {
						"model-value": unref(settingsStore).isMFAEnforced,
						size: "large",
						disabled: isManagedByEnv.value,
						"data-test-id": "enable-force-mfa",
						"onUpdate:modelValue": onUpdateMfaEnforced
					}, null, 8, ["model-value", "disabled"])]),
					_: 1
				}, 8, ["features"])], 2)], 2)], 2),
				isSecuritySettingsSettled.value ? (openBlock(), createBlock(DataRedactionSection_default, {
					key: 1,
					"initial-floor": unref(state)?.initialRedactionFloor ?? "off",
					"managed-by-env": isManagedByEnv.value
				}, null, 8, ["initial-floor", "managed-by-env"])) : createCommentVNode("", true),
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					class: "mb-l"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.title")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(unref($style).settingsSection) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.sharing.title")) + " ", 1), !isPersonalSpacePolicyLicensed.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: "ml-4xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.sharing.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).PersonalSpacePolicy] }, {
					fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
						content: withCtx(() => [createVNode(unref(I18nT), {
							keypath: personalSpaceTooltipKey,
							tag: "span",
							scope: "global"
						}, {
							action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.security.personalSpace.unlicensed_tooltip.link")), 1)]),
							_: 1
						})]),
						default: withCtx(() => [unref(state) !== void 0 ? (openBlock(), createBlock(unref(ElSwitch), {
							key: 0,
							"model-value": personalSpaceSharing.value,
							size: "large",
							disabled: true,
							"data-test-id": "security-personal-space-sharing-toggle"
						}, null, 8, ["model-value"])) : createCommentVNode("", true)]),
						_: 1
					})]),
					default: withCtx(() => [unref(state) !== void 0 ? (openBlock(), createBlock(unref(ElSwitch), {
						key: 0,
						modelValue: personalSpaceSharing.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => personalSpaceSharing.value = $event),
						size: "large",
						disabled: isManagedByEnv.value,
						"data-test-id": "security-personal-space-sharing-toggle"
					}, null, 8, ["modelValue", "disabled"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["features"])], 2)], 2), createBaseVNode("div", {
					class: normalizeClass(unref($style).settingsCountRow),
					"data-test-id": "security-sharing-count"
				}, [createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.sharing.existingCount.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sharingCountText.value), 1)]),
					_: 1
				})], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(unref($style).settingsSection) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.publishing.title")) + " ", 1), !isPersonalSpacePolicyLicensed.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: "ml-4xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.publishing.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).PersonalSpacePolicy] }, {
					fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
						content: withCtx(() => [createVNode(unref(I18nT), {
							keypath: personalSpaceTooltipKey,
							tag: "span",
							scope: "global"
						}, {
							action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.security.personalSpace.unlicensed_tooltip.link")), 1)]),
							_: 1
						})]),
						default: withCtx(() => [unref(state) !== void 0 ? (openBlock(), createBlock(unref(ElSwitch), {
							key: 0,
							"model-value": personalSpacePublishing.value,
							size: "large",
							disabled: true,
							"data-test-id": "security-personal-space-publishing-toggle"
						}, null, 8, ["model-value"])) : createCommentVNode("", true)]),
						_: 1
					})]),
					default: withCtx(() => [unref(state) !== void 0 ? (openBlock(), createBlock(unref(ElSwitch), {
						key: 0,
						modelValue: personalSpacePublishing.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => personalSpacePublishing.value = $event),
						size: "large",
						disabled: isManagedByEnv.value,
						"data-test-id": "security-personal-space-publishing-toggle"
					}, null, 8, ["modelValue", "disabled"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["features"])], 2)], 2), createBaseVNode("div", {
					class: normalizeClass(unref($style).settingsCountRow),
					"data-test-id": "security-publishing-count"
				}, [createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.publishing.existingCount.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.publishing.existingCount.value", { interpolate: { count: String(unref(state)?.publishedPersonalWorkflowsCount ?? 0) } })), 1)]),
					_: 1
				})], 2)], 2),
				createVNode(unref(AlertDialog_default), {
					open: showPublishingDialog.value,
					title: unref(i18n).baseText("settings.security.personalSpace.publishing.confirmMessage.disable.headline"),
					description: unref(i18n).baseText("settings.security.personalSpace.publishing.confirmMessage.disable.message"),
					onAction: confirmDisablePublishing,
					onCancel: _cache[2] || (_cache[2] = ($event) => showPublishingDialog.value = false),
					"onUpdate:open": _cache[3] || (_cache[3] = ($event) => showPublishingDialog.value = $event)
				}, null, 8, [
					"open",
					"title",
					"description"
				]),
				createVNode(unref(AlertDialog_default), {
					open: showSharingDialog.value,
					title: unref(i18n).baseText("settings.security.personalSpace.sharing.confirmMessage.disable.headline"),
					description: unref(i18n).baseText("settings.security.personalSpace.sharing.confirmMessage.disable.message"),
					size: "medium",
					onAction: confirmDisableSharing,
					onCancel: _cache[4] || (_cache[4] = ($event) => showSharingDialog.value = false),
					"onUpdate:open": _cache[5] || (_cache[5] = ($event) => showSharingDialog.value = $event)
				}, null, 8, [
					"open",
					"title",
					"description"
				])
			]);
		};
	}
});
var SecuritySettings_vue_vue_type_style_index_0_lang_module_default = {
	headerTitle: "_headerTitle_meo7b_2",
	settingsSection: "_settingsSection_meo7b_8",
	settingsContainer: "_settingsContainer_meo7b_14",
	settingsContainerInfo: "_settingsContainerInfo_meo7b_22",
	settingsContainerAction: "_settingsContainerAction_meo7b_33",
	settingsCountRow: "_settingsCountRow_meo7b_41"
};
var SecuritySettings_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SecuritySettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SecuritySettings_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SecuritySettings_default as default };
