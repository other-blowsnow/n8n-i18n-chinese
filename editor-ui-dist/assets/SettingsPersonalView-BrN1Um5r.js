import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { E as N8nNotice_default, G as N8nOption_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, R as N8nFormInputs_default, St as N8nAvatar_default, W as N8nSelect_default, Y as N8nInputLabel_default, mt as N8nLink_default, vt as N8nTooltip_default, wt as createFormEventBus } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Bo as useSettingsStore, Ni as useUIStore, Tn as useDocumentTitle, er as useUsersStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Ao as MFA_SETUP_MODAL_KEY, Ro as PROMPT_MFA_CODE_MODAL_KEY, ar as ROLE, go as CHANGE_PASSWORD_MODAL_KEY, v as MFA_DOCS_URL, yo as CONFIRM_PASSWORD_MODAL_KEY } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Dw9c9iy4.js";
import { r as promptMfaCodeBus, t as confirmPasswordEventBus } from "./auth.eventBus-CzdCLlJU.js";
import { n as useSSOStore } from "./sso.store-lozzT1xX.js";
var _hoisted_1 = { class: "mb-s" };
var _hoisted_2 = { "data-test-id": "personal-data-form" };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { class: "mb-s" };
var _hoisted_5 = { class: "mb-s" };
var _hoisted_6 = {
	key: 0,
	"data-test-id": "mfa-section"
};
var _hoisted_7 = { class: "mb-xs" };
var _hoisted_8 = { class: "mb-s" };
var SettingsPersonalView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsPersonalView",
	setup(__props) {
		const i18n = useI18n();
		const { showToast, showError } = useToast();
		const documentTitle = useDocumentTitle();
		const hasAnyBasicInfoChanges = ref(false);
		const formInputs = ref(null);
		const formBus = createFormEventBus();
		const readyToSubmit = ref(false);
		const currentSelectedTheme = ref(useUIStore().theme);
		const themeOptions = ref([
			{
				name: "system",
				label: "settings.personal.theme.systemDefault"
			},
			{
				name: "light",
				label: "settings.personal.theme.light"
			},
			{
				name: "dark",
				label: "settings.personal.theme.dark"
			}
		]);
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const ssoStore = useSSOStore();
		const cloudPlanStore = useCloudPlanStore();
		const currentUser = computed(() => {
			return usersStore.currentUser;
		});
		const isExternalAuthEnabled = computed(() => {
			const isLdapEnabled = ssoStore.isEnterpriseLdapEnabled && currentUser.value?.signInType === "ldap";
			const isSamlEnabled = ssoStore.isSamlLoginEnabled && ssoStore.isDefaultAuthenticationSaml;
			const isOidcEnabled = ssoStore.isEnterpriseOidcEnabled && currentUser.value?.signInType === "oidc";
			return isLdapEnabled || isSamlEnabled || isOidcEnabled;
		});
		const isPersonalSecurityEnabled = computed(() => {
			return usersStore.isInstanceOwner || !isExternalAuthEnabled.value;
		});
		const mfaDisabled = computed(() => {
			return !usersStore.mfaEnabled;
		});
		const mfaEnforced = computed(() => {
			return settingsStore.isMFAEnforced;
		});
		const isMfaFeatureEnabled = computed(() => {
			return settingsStore.isMfaFeatureEnabled;
		});
		const hasAnyPersonalisationChanges = computed(() => {
			return currentSelectedTheme.value !== uiStore.theme;
		});
		const hasAnyChanges = computed(() => {
			return hasAnyBasicInfoChanges.value || hasAnyPersonalisationChanges.value;
		});
		const roles = computed(() => ({
			[ROLE.Default]: {
				name: i18n.baseText("auth.roles.default"),
				description: i18n.baseText("settings.personal.role.tooltip.default")
			},
			[ROLE.Member]: {
				name: i18n.baseText("auth.roles.member"),
				description: i18n.baseText("settings.personal.role.tooltip.member")
			},
			[ROLE.Admin]: {
				name: i18n.baseText("auth.roles.admin"),
				description: i18n.baseText("settings.personal.role.tooltip.admin")
			},
			[ROLE.Owner]: {
				name: i18n.baseText("auth.roles.owner"),
				description: i18n.baseText("settings.personal.role.tooltip.owner", { interpolate: { cloudAccess: cloudPlanStore.hasCloudPlan ? i18n.baseText("settings.personal.role.tooltip.cloud") : "" } })
			}
		}));
		const currentUserRole = computed(() => roles.value[usersStore.globalRoleName]);
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.personal.personalSettings"));
			formInputs.value = [
				{
					name: "firstName",
					initialValue: currentUser.value?.firstName,
					properties: {
						label: i18n.baseText("auth.firstName"),
						maxlength: 32,
						required: true,
						autocomplete: "given-name",
						capitalize: true,
						disabled: isExternalAuthEnabled.value
					}
				},
				{
					name: "lastName",
					initialValue: currentUser.value?.lastName,
					properties: {
						label: i18n.baseText("auth.lastName"),
						maxlength: 32,
						required: true,
						autocomplete: "family-name",
						capitalize: true,
						disabled: isExternalAuthEnabled.value
					}
				},
				{
					name: "email",
					initialValue: currentUser.value?.email,
					properties: {
						label: i18n.baseText("auth.email"),
						type: "email",
						required: true,
						validationRules: [{ name: "VALID_EMAIL" }],
						autocomplete: "email",
						capitalize: true,
						disabled: !isPersonalSecurityEnabled.value
					}
				}
			];
		});
		function onInput() {
			hasAnyBasicInfoChanges.value = true;
		}
		function onReadyToSubmit(ready) {
			readyToSubmit.value = ready;
		}
		async function saveUserSettings(params) {
			try {
				await updateUserBasicInfo(params);
				await updatePersonalisationSettings();
				showToast({
					title: i18n.baseText("settings.personal.personalSettingsUpdated"),
					message: "",
					type: "success"
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.personal.personalSettingsUpdatedError"));
			}
		}
		async function onSubmit(data) {
			const form = data;
			const emailChanged = usersStore.currentUser?.email !== form.email;
			if (usersStore.currentUser?.mfaEnabled && emailChanged) {
				uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
				promptMfaCodeBus.once("closed", async (payload) => {
					if (!payload) return;
					await saveUserSettings({
						...form,
						mfaCode: payload.mfaCode
					});
				});
			} else if (emailChanged) {
				uiStore.openModal(CONFIRM_PASSWORD_MODAL_KEY);
				confirmPasswordEventBus.once("close", async (payload) => {
					if (!payload) return;
					await saveUserSettings({
						...form,
						currentPassword: payload.currentPassword
					});
					uiStore.closeModal(CONFIRM_PASSWORD_MODAL_KEY);
				});
			} else await saveUserSettings(form);
		}
		async function updateUserBasicInfo(userBasicInfo) {
			if (!hasAnyBasicInfoChanges.value || !usersStore.currentUserId) return;
			await usersStore.updateUser({
				firstName: userBasicInfo.firstName,
				lastName: userBasicInfo.lastName,
				email: userBasicInfo.email,
				mfaCode: userBasicInfo.mfaCode,
				currentPassword: userBasicInfo.currentPassword
			});
			hasAnyBasicInfoChanges.value = false;
		}
		async function updatePersonalisationSettings() {
			if (!hasAnyPersonalisationChanges.value) return;
			uiStore.setTheme(currentSelectedTheme.value);
		}
		function onSaveClick() {
			formBus.emit("submit");
		}
		function openPasswordModal() {
			uiStore.openModal(CHANGE_PASSWORD_MODAL_KEY);
		}
		async function onMfaEnableClick() {
			if (!settingsStore.isCloudDeployment || !usersStore.isInstanceOwner) {
				uiStore.openModal(MFA_SETUP_MODAL_KEY);
				return;
			}
			try {
				await usersStore.canEnableMFA();
				uiStore.openModal(MFA_SETUP_MODAL_KEY);
			} catch (e) {
				showToast({
					title: i18n.baseText("settings.personal.mfa.toast.canEnableMfa.title"),
					message: e.message,
					type: "error"
				});
				await usersStore.sendConfirmationEmail();
			}
		}
		async function disableMfa(payload) {
			if (!payload) return;
			try {
				await usersStore.disableMfa(payload);
				showToast({
					title: i18n.baseText("settings.personal.mfa.toast.disabledMfa.title"),
					message: i18n.baseText("settings.personal.mfa.toast.disabledMfa.message"),
					type: "success",
					duration: 0
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.personal.mfa.toast.disabledMfa.error.message"));
			}
		}
		async function onMfaDisableClick() {
			uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
			promptMfaCodeBus.once("closed", disableMfa);
		}
		onBeforeUnmount(() => {
			promptMfaCodeBus.off("closed", disableMfa);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "personal-settings-container"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalSettings")), 1)]),
					_: 1
				}), currentUser.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.user)
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.username),
					"data-test-id": "current-user-name"
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentUser.value.fullName), 1)]),
					_: 1
				}), createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
					content: withCtx(() => [createTextVNode(toDisplayString(currentUserRole.value.description), 1)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.tooltip),
						color: "text-light",
						"data-test-id": "current-user-role"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentUserRole.value.name), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})], 2), createVNode(unref(N8nAvatar_default), {
					"first-name": currentUser.value.firstName,
					"last-name": currentUser.value.lastName,
					size: "large"
				}, null, 8, ["first-name", "last-name"])], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", null, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.basicInformation")), 1)]),
					_: 1
				})]), createBaseVNode("div", _hoisted_2, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
					key: 0,
					inputs: formInputs.value,
					"event-bus": unref(formBus),
					onUpdate: onInput,
					onReady: onReadyToSubmit,
					onSubmit
				}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)])]),
				isPersonalSecurityEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nHeading_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.security")), 1)]),
						_: 1
					})]),
					createBaseVNode("div", _hoisted_5, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("auth.password") }, {
						default: withCtx(() => [createVNode(unref(N8nLink_default), {
							"data-test-id": "change-password-link",
							onClick: openPasswordModal
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.changePassword")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["label"])]),
					isMfaFeatureEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
						createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("settings.personal.mfa.section.title") }, null, 8, ["label"]), createVNode(unref(N8nText_default), {
							bold: false,
							class: normalizeClass(_ctx.$style.infoText)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(mfaDisabled.value ? unref(i18n).baseText("settings.personal.mfa.button.disabled.infobox") : unref(i18n).baseText("settings.personal.mfa.button.enabled.infobox")) + " ", 1), createVNode(unref(N8nLink_default), {
								to: unref(MFA_DOCS_URL),
								size: "small",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
								_: 1
							}, 8, ["to"])]),
							_: 1
						}, 8, ["class"])]),
						mfaDisabled.value && mfaEnforced.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
							key: 0,
							content: unref(i18n).baseText("settings.personal.mfa.enforced")
						}, null, 8, ["content"])) : createCommentVNode("", true),
						mfaDisabled.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							class: normalizeClass(_ctx.$style.button),
							type: "tertiary",
							label: unref(i18n).baseText("settings.personal.mfa.button.enabled"),
							"data-test-id": "enable-mfa-button",
							onClick: onMfaEnableClick
						}, null, 8, ["class", "label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
							key: 2,
							class: normalizeClass(_ctx.$style.disableMfaButton),
							type: "tertiary",
							label: unref(i18n).baseText("settings.personal.mfa.button.disabled"),
							"data-test-id": "disable-mfa-button",
							onClick: onMfaDisableClick
						}, null, 8, ["class", "label"]))
					])) : createCommentVNode("", true)
				])) : createCommentVNode("", true),
				createBaseVNode("div", null, [createBaseVNode("div", _hoisted_8, [createVNode(unref(N8nHeading_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalisation")), 1)]),
					_: 1
				})]), createBaseVNode("div", null, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("settings.personal.theme") }, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						modelValue: currentSelectedTheme.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentSelectedTheme.value = $event),
						class: normalizeClass(_ctx.$style.themeSelect),
						"data-test-id": "theme-select",
						size: "small",
						filterable: ""
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(themeOptions.value, (item) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: item.name,
								label: unref(i18n).baseText(item.label),
								value: item.name
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "class"])]),
					_: 1
				}, 8, ["label"])])]),
				createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
					float: "right",
					label: unref(i18n).baseText("settings.personal.save"),
					size: "large",
					disabled: !hasAnyChanges.value || !readyToSubmit.value,
					"data-test-id": "save-settings-button",
					onClick: onSaveClick
				}, null, 8, ["label", "disabled"])])
			], 2);
		};
	}
});
var SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1qm18_123",
	header: "_header_1qm18_130",
	user: "_user_1qm18_139",
	username: "_username_1qm18_149",
	tooltip: "_tooltip_1qm18_162",
	disableMfaButton: "_disableMfaButton_1qm18_166",
	button: "_button_1qm18_170",
	infoText: "_infoText_1qm18_177",
	themeSelect: "_themeSelect_1qm18_182"
};
var SettingsPersonalView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsPersonalView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsPersonalView_default as default };
