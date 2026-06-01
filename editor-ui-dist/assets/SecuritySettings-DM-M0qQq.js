import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _ as Fragment, _n as normalizeClass, c as useCssModule, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { c as I18nT, s as useI18n } from "./src-BZxl6qSA.js";
import { It as ElSwitch, L as N8nNotice_default, Sa as N8nHeading_default, a as AlertDialog_default, ji as N8nTooltip_default, n as Select_default, vi as N8nBadge_default, wa as N8nText_default } from "./src-pyi3rpL8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { s as useAsyncState } from "./core-vNZq-xzE.js";
import { t as useUsersStore } from "./users.store-CyAaJx7n.js";
import { t as useToast } from "./useToast-D2mWSxil.js";
import { Ql as EnterpriseEditionFeature } from "./constants-Dxn6bmLi.js";
import { c as makeRestApiRequest, t as useRootStore } from "./useRootStore-DPt_yVCx.js";
import { U as getSecuritySettings, W as updateSecuritySettings, t as useSettingsStore } from "./settings.store-Bi6z3m7-.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BtBMIl5H.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-RkeO04PA.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-BZ7B9alN.js";
//#region ../@n8n/rest-api-client/dist/api/redaction-enforcement.mjs
/**
* Single seam for the instance-level data-redaction enforcement API.
*
* Both endpoints currently piggyback on `/rest/settings/security` because the
* backend wiring lands in a follow-up (see IAM-619). When that ticket decides
* on its final surface (extend `SecuritySettingsController` vs. a new
* `/redaction-enforcement` endpoint vs. public-API), update the two URL
* constants below — no component changes required.
*/
var GET_ENDPOINT = "/settings/security";
var UPDATE_ENDPOINT = "/settings/security";
async function getRedactionEnforcement(context) {
	const response = await makeRestApiRequest(context, "GET", GET_ENDPOINT);
	return {
		redactionEnforced: response.redactionEnforced ?? false,
		redactionScope: response.redactionScope ?? "non-manual"
	};
}
async function updateRedactionEnforcement(context, payload) {
	await makeRestApiRequest(context, "POST", UPDATE_ENDPOINT, payload);
}
//#endregion
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
//#region src/features/settings/security/SecuritySettings.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-3xl" };
var mfaTooltipKey = "settings.personal.mfa.enforce.unlicensed_tooltip";
var personalSpaceTooltipKey = "settings.security.personalSpace.unlicensed_tooltip";
var dataRedactionTooltipKey = "settings.security.dataRedaction.unlicensed_tooltip";
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
		const { isEnabled: isRedactionEnforcementFlagEnabled } = useRedactionEnforcementFeatureFlag();
		const showPublishingDialog = ref(false);
		const showSharingDialog = ref(false);
		const redactionScopeOptions = computed(() => [
			"manual-only",
			"non-manual",
			"all"
		].map((value) => ({
			value,
			label: i18n.baseText(`settings.security.dataRedaction.scope.option.${value}`)
		})));
		const isEnforceMFAEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.EnforceMFA]);
		const isPersonalSpacePolicyLicensed = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.PersonalSpacePolicy]);
		const isDataRedactionLicensed = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.DataRedaction]);
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
				sharedPersonalCredentialsCount: settings.sharedPersonalCredentialsCount,
				managedByEnv: settings.managedByEnv
			};
		}, void 0);
		const { state: redactionState } = useAsyncState(async () => isRedactionEnforcementFlagEnabled.value ? await getRedactionEnforcement(rootStore.restApiContext) : void 0, void 0);
		const isManagedByEnv = computed(() => state.value?.managedByEnv ?? false);
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
		async function updateRedactionEnforcement$1(payload) {
			const previous = redactionState.value ? {
				redactionEnforced: redactionState.value.redactionEnforced,
				redactionScope: redactionState.value.redactionScope
			} : void 0;
			try {
				await updateRedactionEnforcement(rootStore.restApiContext, payload);
				showToast({
					type: "success",
					title: payload.redactionEnforced !== void 0 ? payload.redactionEnforced ? i18n.baseText("settings.security.dataRedaction.enforce.success.enabled") : i18n.baseText("settings.security.dataRedaction.enforce.success.disabled") : i18n.baseText("settings.security.dataRedaction.scope.success"),
					message: ""
				});
			} catch (error) {
				if (redactionState.value && previous) redactionState.value = {
					...redactionState.value,
					...previous
				};
				showError(error, payload.redactionEnforced !== void 0 ? i18n.baseText("settings.security.dataRedaction.enforce.error") : i18n.baseText("settings.security.dataRedaction.scope.error"));
			}
		}
		const dataRedactionEnforced = computed({
			get: () => redactionState.value?.redactionEnforced ?? false,
			set: (value) => {
				if (redactionState.value) redactionState.value = {
					...redactionState.value,
					redactionEnforced: value
				};
				updateRedactionEnforcement$1({ redactionEnforced: value });
			}
		});
		const dataRedactionScope = computed(() => redactionState.value?.redactionScope ?? "non-manual");
		function onSelectRedactionScope(value) {
			if (!value || value === dataRedactionScope.value) return;
			const scope = value;
			if (redactionState.value) redactionState.value = {
				...redactionState.value,
				redactionScope: scope
			};
			updateRedactionEnforcement$1({ redactionScope: scope });
		}
		const affectedScopeText = computed(() => {
			if (!redactionState.value?.redactionEnforced) return i18n.baseText("settings.security.dataRedaction.affectedScope.none");
			const scope = redactionState.value.redactionScope;
			return i18n.baseText(`settings.security.dataRedaction.affectedScope.${scope}`);
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
				unref(isRedactionEnforcementFlagEnabled) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					class: "mb-l"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.title")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(unref($style).settingsSection) }, [
					createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.enforce.title")) + " ", 1), !isDataRedactionLicensed.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
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
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.enforce.message")), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).DataRedaction] }, {
						fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								keypath: dataRedactionTooltipKey,
								tag: "span",
								scope: "global"
							}, {
								action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.unlicensed_tooltip.link")), 1)]),
								_: 1
							})]),
							default: withCtx(() => [unref(redactionState) !== void 0 ? (openBlock(), createBlock(unref(ElSwitch), {
								key: 0,
								"model-value": dataRedactionEnforced.value,
								size: "large",
								disabled: true,
								"data-test-id": "enable-redaction-enforcement"
							}, null, 8, ["model-value"])) : createCommentVNode("", true)]),
							_: 1
						})]),
						default: withCtx(() => [unref(redactionState) !== void 0 ? (openBlock(), createBlock(unref(ElSwitch), {
							key: 0,
							modelValue: dataRedactionEnforced.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dataRedactionEnforced.value = $event),
							size: "large",
							disabled: isManagedByEnv.value,
							"data-test-id": "enable-redaction-enforcement"
						}, null, 8, ["modelValue", "disabled"])) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["features"])], 2)], 2),
					unref(redactionState) !== void 0 && dataRedactionEnforced.value && isDataRedactionLicensed.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref($style).settingsContainer),
						"data-test-id": "redaction-enforcement-scope-row"
					}, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.scope.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.dataRedaction.scope.description")), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(unref(Select_default), {
						"model-value": dataRedactionScope.value,
						items: redactionScopeOptions.value,
						size: "medium",
						disabled: isManagedByEnv.value,
						"data-test-id": "redaction-enforcement-scope-select",
						"onUpdate:modelValue": onSelectRedactionScope
					}, null, 8, [
						"model-value",
						"items",
						"disabled"
					])], 2)], 2)) : createCommentVNode("", true),
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
				], 2)], 64)) : createCommentVNode("", true),
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
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => personalSpaceSharing.value = $event),
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
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => personalSpacePublishing.value = $event),
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
					onCancel: _cache[3] || (_cache[3] = ($event) => showPublishingDialog.value = false),
					"onUpdate:open": _cache[4] || (_cache[4] = ($event) => showPublishingDialog.value = $event)
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
					onCancel: _cache[5] || (_cache[5] = ($event) => showSharingDialog.value = false),
					"onUpdate:open": _cache[6] || (_cache[6] = ($event) => showSharingDialog.value = $event)
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
