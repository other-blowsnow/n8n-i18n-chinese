import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, c as useCssModule, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n, ot as I18nT, s as useAsyncState } from "./core-C5WMGiem.js";
import { Di as N8nTooltip_default, Ft as N8nBadge_default, It as ElSwitch, Ji as N8nHeading_default, Xi as N8nText_default, s as AlertDialog_default } from "./src-CJGJHCUt.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Pn as useToast, t as useUsersStore } from "./users.store-BBlwYPqI.js";
import { Qc as EnterpriseEditionFeature } from "./constants-fJx0oi9Z.js";
import { t as useRootStore } from "./useRootStore-BEIaSKen.js";
import { H as getSecuritySettings, U as updateSecuritySettings, t as useSettingsStore } from "./settings.store-C7t3M9-w.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DNO8XBUP.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-BFVR5KKx.js";
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
		const { state } = useAsyncState(async () => {
			const settings = await getSecuritySettings(rootStore.restApiContext);
			return {
				personalSpacePublishing: settings.personalSpacePublishing,
				personalSpaceSharing: settings.personalSpaceSharing,
				publishedPersonalWorkflowsCount: settings.publishedPersonalWorkflowsCount,
				sharedPersonalWorkflowsCount: settings.sharedPersonalWorkflowsCount,
				sharedPersonalCredentialsCount: settings.sharedPersonalCredentialsCount
			};
		}, void 0);
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
						"data-test-id": "enable-force-mfa",
						"onUpdate:modelValue": onUpdateMfaEnforced
					}, null, 8, ["model-value"])]),
					_: 1
				}, 8, ["features"])], 2)], 2)], 2),
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
						"data-test-id": "security-personal-space-sharing-toggle"
					}, null, 8, ["modelValue"])) : createCommentVNode("", true)]),
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
						"data-test-id": "security-personal-space-publishing-toggle"
					}, null, 8, ["modelValue"])) : createCommentVNode("", true)]),
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
