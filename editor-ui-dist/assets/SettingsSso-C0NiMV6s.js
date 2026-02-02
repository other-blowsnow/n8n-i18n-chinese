import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, U as mergeModels, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, ft as useModel, h as withModifiers, it as renderList, j as createTextVNode, jt as isRef, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Hi as N8nIcon_default, I as N8nRadioButtons_default, Kt as N8nInput_default, Li as N8nHeading_default, Mi as N8nActionBox_default, Y as N8nInfoTip_default, at as Checkbox_default, dt as N8nOption_default, ht as N8nCard_default, ut as N8nSelect_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Nt as useTelemetry, cn as useDocumentTitle, fr as useRBACStore, hr as useToast, hs as getUsers, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { t as ElDialog } from "./dialog-CH3mk7zK.js";
import { hs as MODAL_CONFIRM } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import "./useClipboard-D9AU0bV9.js";
import { t as CopyInput_default } from "./CopyInput-BKp9uJIK.js";
import { r as captureMessage } from "./exports-C80N3gCI.js";
import { n as useSSOStore, t as SupportedProtocols } from "./sso.store-BdPWgyOO.js";
import { t as useUserRoleProvisioningStore } from "./userRoleProvisioning.store-DotpqtCK.js";
var _hoisted_1$3 = ["href"];
var UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserRoleProvisioningDropdown",
	props: /* @__PURE__ */ mergeModels({ authProtocol: {} }, {
		"modelValue": { default: "disabled" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const value = useModel(__props, "modelValue");
		const i18n = useI18n();
		const canManageUserProvisioning = useRBACStore().hasScope("provisioning:manage");
		const handleUserRoleProvisioningChange = (newValue) => {
			value.value = newValue;
		};
		const userRoleProvisioningDescriptions = [
			{
				label: i18n.baseText("settings.sso.settings.userRoleProvisioning.option.disabled.label"),
				value: "disabled"
			},
			{
				label: i18n.baseText("settings.sso.settings.userRoleProvisioning.option.instanceRole.label"),
				value: "instance_role"
			},
			{
				label: i18n.baseText("settings.sso.settings.userRoleProvisioning.option.instanceAndProjectRoles.label"),
				value: "instance_and_project_roles"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.group) }, [
				createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.userRoleProvisioning.label")), 1),
				createVNode(unref(N8nSelect_default), {
					"model-value": value.value,
					disabled: !unref(canManageUserProvisioning),
					"data-test-id": "oidc-user-role-provisioning",
					class: normalizeClass(_ctx.$style.userRoleProvisioningSelect),
					"onUpdate:modelValue": handleUserRoleProvisioningChange
				}, {
					default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(userRoleProvisioningDescriptions, (option) => {
						return createVNode(unref(N8nOption_default), {
							key: option.value,
							label: option.label,
							"data-test-id": "oidc-user-role-provisioning-option",
							value: option.value
						}, null, 8, ["label", "value"]);
					}), 64))]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"class"
				]),
				createBaseVNode("small", null, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.userRoleProvisioning.help")) + " ", 1), createBaseVNode("a", {
					href: `https://docs.n8n.io/user-management/${__props.authProtocol}/setup/`,
					target: "_blank"
				}, toDisplayString(unref(i18n).baseText("settings.sso.settings.userRoleProvisioning.help.linkText")), 9, _hoisted_1$3)])
			], 2);
		};
	}
});
var UserRoleProvisioningDropdown_vue_vue_type_style_index_0_lang_module_default = {
	group: "_group_o443m_125",
	userRoleProvisioningSelect: "_userRoleProvisioningSelect_o443m_141"
};
var UserRoleProvisioningDropdown_default = /* @__PURE__ */ __plugin_vue_export_helper_default(UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": UserRoleProvisioningDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
function useUserRoleProvisioningForm(protocol) {
	const provisioningStore = useUserRoleProvisioningStore();
	const telemetry = useTelemetry();
	const formValue = ref("disabled");
	const getUserRoleProvisioningValueFromConfig = (config) => {
		if (!config) return "disabled";
		if (config.scopesProvisionInstanceRole && config.scopesProvisionProjectRoles) return "instance_and_project_roles";
		else if (config.scopesProvisionInstanceRole) return "instance_role";
		else return "disabled";
	};
	const getProvisioningConfigFromFormValue = (formValue$1) => {
		if (formValue$1 === "instance_role") return {
			scopesProvisionInstanceRole: true,
			scopesProvisionProjectRoles: false
		};
		else if (formValue$1 === "instance_and_project_roles") return {
			scopesProvisionInstanceRole: true,
			scopesProvisionProjectRoles: true
		};
		else return {
			scopesProvisionInstanceRole: false,
			scopesProvisionProjectRoles: false
		};
	};
	const isUserRoleProvisioningChanged = computed(() => {
		return getUserRoleProvisioningValueFromConfig(provisioningStore.provisioningConfig) !== formValue.value;
	});
	const sendTrackingEventForUserProvisioning = (updatedSetting) => {
		telemetry.track("User updated provisioning settings", {
			instance_id: useRootStore().instanceId,
			authentication_method: protocol,
			updated_setting: updatedSetting
		});
	};
	const saveProvisioningConfig = async (isDisablingSso) => {
		const newSetting = isDisablingSso ? "disabled" : formValue.value;
		if (newSetting === getUserRoleProvisioningValueFromConfig(provisioningStore.provisioningConfig)) return;
		await provisioningStore.saveProvisioningConfig(getProvisioningConfigFromFormValue(newSetting));
		formValue.value = newSetting;
		sendTrackingEventForUserProvisioning(newSetting);
	};
	const shouldPromptUserToConfirmUserRoleProvisioningChange = ({ currentLoginEnabled, loginEnabledFormValue }) => {
		const isLoginEnabledChanged = currentLoginEnabled !== loginEnabledFormValue;
		const isEnablingSsoLogin = isLoginEnabledChanged && !currentLoginEnabled;
		const isDisablingSsoLogin = isLoginEnabledChanged && currentLoginEnabled;
		const isEnablingSsoAlongSideProvisioning = isEnablingSsoLogin && formValue.value !== "disabled";
		const isChangingProvisioningSettingWhileLoginWasAlreadyEnabled = isUserRoleProvisioningChanged.value && currentLoginEnabled && !isDisablingSsoLogin;
		return isEnablingSsoAlongSideProvisioning || isChangingProvisioningSettingWhileLoginWasAlreadyEnabled;
	};
	const initFormValue = () => {
		provisioningStore.getProvisioningConfig().then(() => {
			formValue.value = getUserRoleProvisioningValueFromConfig(provisioningStore.provisioningConfig);
		});
	};
	initFormValue();
	return {
		formValue,
		isUserRoleProvisioningChanged,
		saveProvisioningConfig,
		shouldPromptUserToConfirmUserRoleProvisioningChange
	};
}
async function fetchUsers(context) {
	const allUsers = [];
	const fieldsNeededForAccessSettingExport = {
		select: ["email", "role"],
		expand: ["projectRelations"]
	};
	const PAGE_SIZE = 50;
	let currentPage = 0;
	let totalCount = 0;
	let hasMorePages = true;
	while (hasMorePages) {
		const response = await getUsers(context, {
			...fieldsNeededForAccessSettingExport,
			sortBy: ["email:desc"],
			take: PAGE_SIZE,
			skip: currentPage * PAGE_SIZE
		});
		if (currentPage === 0) totalCount = response.count;
		allUsers.push(...response.items);
		hasMorePages = response.items.length === PAGE_SIZE && allUsers.length < totalCount;
		currentPage++;
	}
	return {
		count: totalCount,
		items: allUsers
	};
}
function useAccessSettingsCsvExport() {
	const cachedUserData = ref();
	const pendingUserDataRequest = ref();
	const rootStore = useRootStore();
	const formatDateForFilename = () => {
		const now = /* @__PURE__ */ new Date();
		return `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}_${now.getHours()}_${now.getMinutes()}`;
	};
	const escapeCsvValue = (value) => {
		if (value.includes(",") || value.includes("\"")) return `"${value.replace(/"/g, "\"\"")}"`;
		return value;
	};
	const downloadCsv = (csvContent, filename) => {
		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const tempElement = document.createElement("a");
		tempElement.setAttribute("href", url);
		tempElement.setAttribute("download", filename);
		tempElement.style.display = "none";
		document.body.appendChild(tempElement);
		tempElement.click();
		document.body.removeChild(tempElement);
		URL.revokeObjectURL(url);
	};
	const getUserData = async () => {
		if (cachedUserData.value) return cachedUserData.value;
		if (pendingUserDataRequest.value) return await pendingUserDataRequest.value;
		const userDataRequest = fetchUsers(rootStore.restApiContext).then((userData) => {
			cachedUserData.value = userData;
			pendingUserDataRequest.value = void 0;
			return userData;
		}).catch((error) => {
			pendingUserDataRequest.value = void 0;
			throw error;
		});
		pendingUserDataRequest.value = userDataRequest;
		return await userDataRequest;
	};
	const hasDownloadedProjectRoleCsv = ref(false);
	const downloadProjectRolesCsv = async () => {
		const userData = await getUserData();
		const csvRows = ["email,project_displayname,project_id,project_role"];
		for (const user of userData.items) {
			const email = escapeCsvValue(user.email ?? "");
			if (user.projectRelations && user.projectRelations.length > 0) for (const project of user.projectRelations) {
				const projectName = escapeCsvValue(project.name ?? "");
				const projectId = escapeCsvValue(project.id ?? "");
				const projectRole = escapeCsvValue(project.role.split(":")[1] ?? project.role);
				csvRows.push(`${email},${projectName},${projectId},${projectRole}`);
			}
		}
		downloadCsv(csvRows.join("\n"), `n8n_project_role_export_${formatDateForFilename()}.csv`);
		hasDownloadedProjectRoleCsv.value = true;
	};
	const hasDownloadedInstanceRoleCsv = ref(false);
	const downloadInstanceRolesCsv = async () => {
		const userData = await getUserData();
		const csvRows = ["email,instance_role"];
		for (const user of userData.items) {
			const email = escapeCsvValue(user.email ?? "");
			const instanceRole = escapeCsvValue(user.role ?? "");
			csvRows.push(`${email},${instanceRole}`);
		}
		downloadCsv(csvRows.join("\n"), `n8n_instance_role_export_${formatDateForFilename()}.csv`);
		hasDownloadedInstanceRoleCsv.value = true;
	};
	const accessSettingsCsvExportOnModalClose = () => {
		hasDownloadedInstanceRoleCsv.value = false;
		hasDownloadedProjectRoleCsv.value = false;
		cachedUserData.value = void 0;
		pendingUserDataRequest.value = void 0;
	};
	return {
		downloadProjectRolesCsv,
		downloadInstanceRolesCsv,
		hasDownloadedInstanceRoleCsv,
		hasDownloadedProjectRoleCsv,
		accessSettingsCsvExportOnModalClose
	};
}
var _hoisted_1$2 = { class: "mb-s" };
var _hoisted_2$2 = { class: "mb-s" };
var _hoisted_3$2 = ["href"];
var _hoisted_4$1 = { class: "mb-s" };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = { class: "mb-s" };
var _hoisted_7 = { class: "mb-s" };
var _hoisted_8 = ["href"];
var _hoisted_9 = { class: "mb-s" };
var ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConfirmProvisioningDialog",
	props: /* @__PURE__ */ mergeModels({
		newProvisioningSetting: {},
		authProtocol: {}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["confirmProvisioning", "cancel"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const visible = useModel(__props, "modelValue");
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const downloadingInstanceRolesCsv = ref(false);
		const downloadingProjectRolesCsv = ref(false);
		const loading = ref(false);
		const confirmationChecked = ref(false);
		const { hasDownloadedInstanceRoleCsv, hasDownloadedProjectRoleCsv, downloadProjectRolesCsv, downloadInstanceRolesCsv, accessSettingsCsvExportOnModalClose } = useAccessSettingsCsvExport();
		const isDisablingProvisioning = computed(() => props.newProvisioningSetting === "disabled");
		const messagingKey = computed(() => isDisablingProvisioning.value ? "disable" : "enable");
		const shouldShowProjectRolesCsv = computed(() => props.newProvisioningSetting === "instance_and_project_roles");
		watch(visible, () => {
			loading.value = false;
			confirmationChecked.value = false;
			accessSettingsCsvExportOnModalClose();
		});
		const onDownloadInstanceRolesCsv = async () => {
			downloadingInstanceRolesCsv.value = true;
			try {
				await downloadInstanceRolesCsv();
			} finally {
				downloadingInstanceRolesCsv.value = false;
			}
		};
		const onDownloadProjectRolesCsv = async () => {
			downloadingProjectRolesCsv.value = true;
			try {
				await downloadProjectRolesCsv();
			} finally {
				downloadingProjectRolesCsv.value = false;
			}
		};
		const onConfirmProvisioningSetting = () => {
			loading.value = true;
			emit("confirmProvisioning");
		};
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => visible.value = $event),
				title: unref(locale).baseText(`settings.provisioningConfirmDialog.${messagingKey.value}.title`),
				width: "650"
			}, {
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					"native-type": "button",
					"data-test-id": "provisioning-cancel-button",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("cancel"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					"native-type": "button",
					disabled: loading.value || !confirmationChecked.value || !isDisablingProvisioning.value && !unref(hasDownloadedInstanceRoleCsv) || shouldShowProjectRolesCsv.value && !unref(hasDownloadedProjectRoleCsv),
					"data-test-id": "provisioning-confirm-button",
					onClick: onConfirmProvisioningSetting
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`settings.provisioningConfirmDialog.button.${messagingKey.value}.confirm`)), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				default: withCtx(() => [!isDisablingProvisioning.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(__props.newProvisioningSetting === "instance_and_project_roles" ? "settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne.withProjectRoles" : "settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.descriptionTextPartTwo),
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partTwo")), 1)]),
						_: 1
					}, 8, ["class"])]),
					createBaseVNode("div", _hoisted_2$2, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createBaseVNode("a", {
							href: `https://docs.n8n.io/user-management/${__props.authProtocol}/setup/`,
							target: "_blank"
						}, toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.link.docs")), 9, _hoisted_3$2)]),
						_: 1
					})]),
					createBaseVNode("div", _hoisted_4$1, [withDirectives(createVNode(unref(N8nText_default), { color: "text-base" }, null, 512), [[_directive_n8n_html, unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.secondLine")]])]),
					createBaseVNode("ul", { class: normalizeClass([_ctx.$style.list, "mb-s"]) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv")), 1)]),
						_: 1
					}), !unref(hasDownloadedInstanceRoleCsv) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						type: "highlight",
						"native-type": "button",
						icon: "file-download",
						"data-test-id": "provisioning-download-instance-roles-csv-button",
						disabled: downloadingInstanceRolesCsv.value,
						loading: downloadingInstanceRolesCsv.value,
						class: normalizeClass(_ctx.$style.button),
						onClick: onDownloadInstanceRolesCsv
					}, null, 8, [
						"disabled",
						"loading",
						"class"
					])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "check",
						color: "success",
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["class"]))]), shouldShowProjectRolesCsv.value ? (openBlock(), createElementBlock("li", _hoisted_5, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadProjectRolesCsv")), 1)]),
						_: 1
					}), !unref(hasDownloadedProjectRoleCsv) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						type: "highlight",
						"native-type": "button",
						icon: "file-download",
						"data-test-id": "provisioning-download-project-roles-csv-button",
						disabled: downloadingProjectRolesCsv.value,
						loading: downloadingProjectRolesCsv.value,
						class: normalizeClass(_ctx.$style.button),
						onClick: onDownloadProjectRolesCsv
					}, null, 8, [
						"disabled",
						"loading",
						"class"
					])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "check",
						color: "success",
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["class"]))])) : createCommentVNode("", true)], 2)
				], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", _hoisted_6, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.disable.description")), 1)]),
					_: 1
				})]), createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createBaseVNode("a", {
						href: `https://docs.n8n.io/user-management/${__props.authProtocol}/setup/`,
						target: "_blank"
					}, toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.link.docs")), 9, _hoisted_8)]),
					_: 1
				})])], 64)), createBaseVNode("div", _hoisted_9, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
					default: withCtx(() => [createVNode(unref(Checkbox_default), {
						modelValue: confirmationChecked.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => confirmationChecked.value = $event),
						disabled: !isDisablingProvisioning.value && (!unref(hasDownloadedInstanceRoleCsv) || shouldShowProjectRolesCsv.value && !unref(hasDownloadedProjectRoleCsv)),
						"data-test-id": "provisioning-confirmation-checkbox"
					}, {
						label: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-base" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`settings.provisioningConfirmDialog.${messagingKey.value}.checkbox`)), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["modelValue", "disabled"])]),
					_: 1
				}, 8, ["class"])])]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
});
var ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default = {
	button: "_button_1bulq_126",
	card: "_card_1bulq_130",
	descriptionTextPartTwo: "_descriptionTextPartTwo_1bulq_134",
	icon: "_icon_1bulq_138",
	list: "_list_1bulq_143"
};
var ConfirmProvisioningDialog_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { class: "mt-2xs mb-s" };
var _hoisted_2$1 = { key: 0 };
var _hoisted_3$1 = { key: 1 };
var SamlSettingsForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SamlSettingsForm",
	setup(__props) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const message = useMessage();
		const savingForm = ref(false);
		const redirectUrl = ref();
		const samlLoginEnabled = ref(false);
		const IdentityProviderSettingsType = {
			URL: "url",
			XML: "xml"
		};
		const ipsOptions = ref([{
			label: i18n.baseText("settings.sso.settings.ips.options.url"),
			value: IdentityProviderSettingsType.URL
		}, {
			label: i18n.baseText("settings.sso.settings.ips.options.xml"),
			value: IdentityProviderSettingsType.XML
		}]);
		const ipsType = ref(IdentityProviderSettingsType.URL);
		const metadataUrl = ref();
		const metadata = ref();
		const entityId = ref();
		const showUserRoleProvisioningDialog = ref(false);
		const { formValue: userRoleProvisioning, isUserRoleProvisioningChanged, saveProvisioningConfig, shouldPromptUserToConfirmUserRoleProvisioningChange } = useUserRoleProvisioningForm(SupportedProtocols.SAML);
		async function loadSamlConfig() {
			if (!ssoStore.isEnterpriseSamlEnabled) return;
			try {
				await getSamlConfig();
			} catch (error) {
				toast.showError(error, "error");
			}
		}
		const getSamlConfig = async () => {
			const config = await ssoStore.getSamlConfig();
			entityId.value = config?.entityID;
			redirectUrl.value = config?.returnUrl;
			if (config?.metadataUrl) ipsType.value = IdentityProviderSettingsType.URL;
			else if (config?.metadata) ipsType.value = IdentityProviderSettingsType.XML;
			metadata.value = config?.metadata;
			metadataUrl.value = config?.metadataUrl;
			samlLoginEnabled.value = config.loginEnabled ?? false;
		};
		const isSaveEnabled = computed(() => {
			if (savingForm.value) return false;
			const isIdentityProviderChanged = () => {
				if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && metadataUrl.value !== ssoStore.samlConfig?.metadataUrl;
				else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && metadata.value !== ssoStore.samlConfig?.metadata;
				return false;
			};
			const isSamlLoginEnabledChanged = ssoStore.isSamlLoginEnabled !== samlLoginEnabled.value;
			return isUserRoleProvisioningChanged.value || isIdentityProviderChanged() || isSamlLoginEnabledChanged;
		});
		const isTestEnabled = computed(() => {
			if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value;
			else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value;
			return false;
		});
		const sendTrackingEvent = (config) => {
			if (!config) {
				captureMessage("Single Sign-On SAML: telemtetry data undefined on submit", { level: "error" });
				return;
			}
			const trackingMetadata = {
				instance_id: useRootStore().instanceId,
				authentication_method: SupportedProtocols.SAML,
				identity_provider: config.metadataUrl ? "metadata" : "xml",
				is_active: config.loginEnabled ?? false
			};
			telemetry.track("User updated single sign on settings", trackingMetadata);
		};
		const promptConfirmDisablingSamlLogin = async () => {
			return await message.confirm(i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.message", { interpolate: { protocol: "SAML" } }), i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.headline", { interpolate: { protocol: "SAML" } }), {
				cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
				confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
			});
		};
		const prompTestSamlConnectionBeforeActivating = async () => {
			const promptOpeningTestConnectionPage = await message.confirm(i18n.baseText("settings.sso.settings.save.testConnection.message"), i18n.baseText("settings.sso.settings.save.testConnection.title"), {
				confirmButtonText: i18n.baseText("settings.sso.settings.save.testConnection.test"),
				cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
			});
			if (promptOpeningTestConnectionPage === "confirm") {
				await onTest();
				return await message.confirm(i18n.baseText("settings.sso.settings.save.confirmTestConnection.message"), i18n.baseText("settings.sso.settings.save.confirmTestConnection.title"), {
					confirmButtonText: i18n.baseText("settings.sso.settings.save.confirmTestConnection.confirm"),
					cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
				});
			}
			return promptOpeningTestConnectionPage;
		};
		const onSave = async (provisioningChangesConfirmed = false) => {
			try {
				savingForm.value = true;
				validateSamlInput();
				const isDisablingSamlLogin = samlLoginEnabled.value !== ssoStore.isSamlLoginEnabled && ssoStore.isSamlLoginEnabled === true;
				if (isDisablingSamlLogin) {
					if (await promptConfirmDisablingSamlLogin() !== "confirm") return;
				}
				if (!provisioningChangesConfirmed && shouldPromptUserToConfirmUserRoleProvisioningChange({
					currentLoginEnabled: !!ssoStore.isSamlLoginEnabled,
					loginEnabledFormValue: samlLoginEnabled.value
				})) {
					showUserRoleProvisioningDialog.value = true;
					return;
				}
				showUserRoleProvisioningDialog.value = false;
				const metaDataConfig = ipsType.value === IdentityProviderSettingsType.URL ? { metadataUrl: metadataUrl.value } : { metadata: metadata.value };
				if (!ssoStore.isSamlLoginEnabled && samlLoginEnabled.value) {
					await ssoStore.saveSamlConfig(metaDataConfig);
					if (await prompTestSamlConnectionBeforeActivating() !== "confirm") return;
				}
				const configResponse = await ssoStore.saveSamlConfig({
					...metaDataConfig,
					loginEnabled: samlLoginEnabled.value
				});
				await saveProvisioningConfig(isDisablingSamlLogin);
				ssoStore.selectedAuthProtocol = SupportedProtocols.SAML;
				await getSamlConfig();
				sendTrackingEvent(configResponse);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error"));
				return;
			} finally {
				savingForm.value = false;
			}
		};
		const onTest = async () => {
			try {
				const url = await ssoStore.testSamlConfig();
				if (typeof window !== "undefined") window.open(url, "_blank");
			} catch (error) {
				toast.showError(error, "error");
			}
		};
		const validateSamlInput = () => {
			if (ipsType.value === IdentityProviderSettingsType.URL) try {
				const parsedUrl = new URL(metadataUrl.value);
				if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") throw new Error("The provided protocol is not supported");
			} catch (error) {
				throw new Error(i18n.baseText("settings.sso.settings.ips.url.invalid"));
			}
		};
		onMounted(async () => {
			await loadSamlConfig();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.label")), 1),
					createVNode(CopyInput_default, {
						value: redirectUrl.value,
						"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
						"toast-title": unref(i18n).baseText("settings.sso.settings.redirectUrl.copied")
					}, null, 8, [
						"value",
						"copy-button-text",
						"toast-title"
					]),
					createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.help")), 1)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.label")), 1),
					createVNode(CopyInput_default, {
						value: entityId.value,
						"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
						"toast-title": unref(i18n).baseText("settings.sso.settings.entityId.copied")
					}, null, 8, [
						"value",
						"copy-button-text",
						"toast-title"
					]),
					createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.help")), 1)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.label")), 1),
					createBaseVNode("div", _hoisted_1$1, [createVNode(unref(N8nRadioButtons_default), {
						modelValue: ipsType.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ipsType.value = $event),
						options: ipsOptions.value
					}, null, 8, ["modelValue", "options"])]),
					ipsType.value === IdentityProviderSettingsType.URL ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(N8nInput_default), {
						modelValue: metadataUrl.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => metadataUrl.value = $event),
						type: "text",
						name: "metadataUrl",
						size: "large",
						placeholder: unref(i18n).baseText("settings.sso.settings.ips.url.placeholder"),
						"data-test-id": "sso-provider-url"
					}, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.url.help")), 1)])) : createCommentVNode("", true),
					ipsType.value === IdentityProviderSettingsType.XML ? (openBlock(), createElementBlock("div", _hoisted_3$1, [createVNode(unref(N8nInput_default), {
						modelValue: metadata.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => metadata.value = $event),
						type: "textarea",
						name: "metadata",
						rows: 4,
						"data-test-id": "sso-provider-xml"
					}, null, 8, ["modelValue"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.xml.help")), 1)])) : createCommentVNode("", true),
					createVNode(UserRoleProvisioningDropdown_default, {
						modelValue: unref(userRoleProvisioning),
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(userRoleProvisioning) ? userRoleProvisioning.value = $event : null),
						"auth-protocol": "saml"
					}, null, 8, ["modelValue"]),
					createVNode(ConfirmProvisioningDialog_default, {
						modelValue: showUserRoleProvisioningDialog.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => showUserRoleProvisioningDialog.value = $event),
						"new-provisioning-setting": unref(userRoleProvisioning),
						"auth-protocol": "saml",
						onConfirmProvisioning: _cache[5] || (_cache[5] = ($event) => onSave(true)),
						onCancel: _cache[6] || (_cache[6] = ($event) => showUserRoleProvisioningDialog.value = false)
					}, null, 8, ["modelValue", "new-provisioning-setting"]),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.group, _ctx.$style.checkboxGroup]) }, [createVNode(unref(Checkbox_default), {
						modelValue: samlLoginEnabled.value,
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => samlLoginEnabled.value = $event),
						"data-test-id": "sso-toggle",
						label: unref(i18n).baseText("settings.sso.activated")
					}, null, 8, ["modelValue", "label"])], 2)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [createVNode(unref(N8nButton_default), {
					disabled: !isSaveEnabled.value,
					loading: savingForm.value,
					size: "large",
					"data-test-id": "sso-save",
					onClick: _cache[8] || (_cache[8] = ($event) => onSave(false))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"]), createVNode(unref(N8nButton_default), {
					disabled: !isTestEnabled.value,
					size: "large",
					type: "tertiary",
					"data-test-id": "sso-test",
					onClick: onTest
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			]);
		};
	}
});
const buttons = "_buttons_1blmf_134";
const group = "_group_1blmf_143";
const checkboxGroup = "_checkboxGroup_1blmf_159";
const actionBox$1 = "_actionBox_1blmf_163";
const footer = "_footer_1blmf_167";
var sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default = {
	"switch": "_switch_1blmf_128",
	buttons,
	group,
	checkboxGroup,
	actionBox: actionBox$1,
	footer
};
var SamlSettingsForm_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SamlSettingsForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default }]]);
var OidcSettingsForm_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "OidcSettingsForm",
	setup(__props) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const message = useMessage();
		const savingForm = ref(false);
		const discoveryEndpoint = ref("");
		const clientId = ref("");
		const clientSecret = ref("");
		const showUserRoleProvisioningDialog = ref(false);
		const { formValue: userRoleProvisioning, isUserRoleProvisioningChanged, saveProvisioningConfig, shouldPromptUserToConfirmUserRoleProvisioningChange } = useUserRoleProvisioningForm(SupportedProtocols.OIDC);
		const prompt = ref("select_account");
		const handlePromptChange = (value) => {
			prompt.value = value;
		};
		const promptDescriptions = [
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.login"),
				value: "login"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.none"),
				value: "none"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.consent"),
				value: "consent"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.select_account"),
				value: "select_account"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.create"),
				value: "create"
			}
		];
		const authenticationContextClassReference = ref("");
		const getOidcConfig = async () => {
			const config = await ssoStore.getOidcConfig();
			clientId.value = config.clientId;
			clientSecret.value = config.clientSecret;
			discoveryEndpoint.value = config.discoveryEndpoint;
			prompt.value = config.prompt ?? "select_account";
			authenticationContextClassReference.value = config.authenticationContextClassReference?.join(",") || "";
		};
		const loadOidcConfig = async () => {
			if (!ssoStore.isEnterpriseOidcEnabled) return;
			try {
				await getOidcConfig();
			} catch (error) {
				toast.showError(error, "error");
			}
		};
		const cannotSaveOidcSettings = computed(() => {
			const currentAcrString = authenticationContextClassReference.value.split(",").map((s) => s.trim()).filter(Boolean).join(",");
			const storedAcrString = ssoStore.oidcConfig?.authenticationContextClassReference?.join(",") || "";
			return ssoStore.oidcConfig?.clientId === clientId.value && ssoStore.oidcConfig?.clientSecret === clientSecret.value && ssoStore.oidcConfig?.discoveryEndpoint === discoveryEndpoint.value && ssoStore.oidcConfig?.loginEnabled === ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.prompt === prompt.value && !isUserRoleProvisioningChanged.value && storedAcrString === authenticationContextClassReference.value && currentAcrString === storedAcrString;
		});
		async function onOidcSettingsSave(provisioningChangesConfirmed = false) {
			if (!provisioningChangesConfirmed && shouldPromptUserToConfirmUserRoleProvisioningChange({
				currentLoginEnabled: !!ssoStore.oidcConfig?.loginEnabled,
				loginEnabledFormValue: ssoStore.isOidcLoginEnabled
			})) {
				showUserRoleProvisioningDialog.value = true;
				return;
			}
			const isDisablingOidcLogin = ssoStore.oidcConfig?.loginEnabled !== ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.loginEnabled === true;
			if (isDisablingOidcLogin) {
				if (await message.confirm(i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.message", { interpolate: { protocol: "OIDC" } }), i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.headline", { interpolate: { protocol: "OIDC" } }), {
					cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
					confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
				}) !== "confirm") return;
			}
			const acrArray = authenticationContextClassReference.value.split(",").map((s) => s.trim()).filter(Boolean);
			try {
				savingForm.value = true;
				const newConfig = await ssoStore.saveOidcConfig({
					clientId: clientId.value,
					clientSecret: clientSecret.value,
					discoveryEndpoint: discoveryEndpoint.value,
					prompt: prompt.value,
					loginEnabled: ssoStore.isOidcLoginEnabled,
					authenticationContextClassReference: acrArray
				});
				await saveProvisioningConfig(isDisablingOidcLogin);
				showUserRoleProvisioningDialog.value = false;
				ssoStore.selectedAuthProtocol = SupportedProtocols.OIDC;
				clientSecret.value = newConfig.clientSecret;
				sendTrackingEvent(newConfig);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
				return;
			} finally {
				savingForm.value = false;
				await getOidcConfig();
			}
		}
		function sendTrackingEvent(config) {
			const trackingMetadata = {
				instance_id: useRootStore().instanceId,
				authentication_method: SupportedProtocols.OIDC,
				discovery_endpoint: config.discoveryEndpoint,
				is_active: config.loginEnabled
			};
			telemetry.track("User updated single sign on settings", trackingMetadata);
		}
		onMounted(async () => {
			await loadOidcConfig();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					_cache[10] || (_cache[10] = createBaseVNode("label", null, "Redirect URL", -1)),
					createVNode(CopyInput_default, {
						value: unref(ssoStore).oidc.callbackUrl,
						"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
						"toast-title": "Redirect URL copied to clipboard"
					}, null, 8, ["value", "copy-button-text"]),
					_cache[11] || (_cache[11] = createBaseVNode("small", null, "Copy the Redirect URL to configure your OIDC provider ", -1))
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					_cache[12] || (_cache[12] = createBaseVNode("label", null, "Discovery Endpoint", -1)),
					createVNode(unref(N8nInput_default), {
						"model-value": discoveryEndpoint.value,
						type: "text",
						"data-test-id": "oidc-discovery-endpoint",
						placeholder: "https://accounts.google.com/.well-known/openid-configuration",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => discoveryEndpoint.value = v)
					}, null, 8, ["model-value"]),
					_cache[13] || (_cache[13] = createBaseVNode("small", null, "Paste here your discovery endpoint", -1))
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					_cache[14] || (_cache[14] = createBaseVNode("label", null, "Client ID", -1)),
					createVNode(unref(N8nInput_default), {
						"model-value": clientId.value,
						type: "text",
						"data-test-id": "oidc-client-id",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = (v) => clientId.value = v)
					}, null, 8, ["model-value"]),
					_cache[15] || (_cache[15] = createBaseVNode("small", null, "The client ID you received when registering your application with your provider", -1))
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					_cache[16] || (_cache[16] = createBaseVNode("label", null, "Client Secret", -1)),
					createVNode(unref(N8nInput_default), {
						"model-value": clientSecret.value,
						type: "password",
						"data-test-id": "oidc-client-secret",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = (v) => clientSecret.value = v)
					}, null, 8, ["model-value"]),
					_cache[17] || (_cache[17] = createBaseVNode("small", null, "The client Secret you received when registering your application with your provider", -1))
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					_cache[18] || (_cache[18] = createBaseVNode("label", null, "Prompt", -1)),
					createVNode(unref(N8nSelect_default), {
						"model-value": prompt.value,
						"data-test-id": "oidc-prompt",
						"onUpdate:modelValue": handlePromptChange
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(promptDescriptions, (option) => {
							return createVNode(unref(N8nOption_default), {
								key: option.value,
								label: option.label,
								"data-test-id": "oidc-prompt-filter-option",
								value: option.value
							}, null, 8, ["label", "value"]);
						}), 64))]),
						_: 1
					}, 8, ["model-value"]),
					_cache[19] || (_cache[19] = createBaseVNode("small", null, "The prompt parameter to use when authenticating with the OIDC provider", -1))
				], 2),
				createVNode(UserRoleProvisioningDropdown_default, {
					modelValue: unref(userRoleProvisioning),
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(userRoleProvisioning) ? userRoleProvisioning.value = $event : null),
					"auth-protocol": "oidc"
				}, null, 8, ["modelValue"]),
				createVNode(ConfirmProvisioningDialog_default, {
					modelValue: showUserRoleProvisioningDialog.value,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => showUserRoleProvisioningDialog.value = $event),
					"new-provisioning-setting": unref(userRoleProvisioning),
					"auth-protocol": "oidc",
					onConfirmProvisioning: _cache[5] || (_cache[5] = ($event) => onOidcSettingsSave(true)),
					onCancel: _cache[6] || (_cache[6] = ($event) => showUserRoleProvisioningDialog.value = false)
				}, null, 8, ["modelValue", "new-provisioning-setting"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					_cache[20] || (_cache[20] = createBaseVNode("label", null, "Authentication Context Class Reference", -1)),
					createVNode(unref(N8nInput_default), {
						"model-value": authenticationContextClassReference.value,
						type: "textarea",
						"data-test-id": "oidc-authentication-context-class-reference",
						placeholder: "mfa, phrh, pwd",
						"onUpdate:modelValue": _cache[7] || (_cache[7] = (v) => authenticationContextClassReference.value = v)
					}, null, 8, ["model-value"]),
					_cache[21] || (_cache[21] = createBaseVNode("small", null, "ACR values to include in the authorization request (acr_values parameter), separated by commas in order of preference.", -1))
				], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.group, _ctx.$style.checkboxGroup]) }, [createVNode(unref(Checkbox_default), {
					modelValue: unref(ssoStore).isOidcLoginEnabled,
					"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(ssoStore).isOidcLoginEnabled = $event),
					"data-test-id": "sso-oidc-toggle",
					label: unref(i18n).baseText("settings.sso.activated")
				}, null, 8, ["modelValue", "label"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [createVNode(unref(N8nButton_default), {
					"data-test-id": "sso-oidc-save",
					size: "large",
					loading: savingForm.value,
					disabled: savingForm.value || cannotSaveOidcSettings.value,
					onClick: _cache[9] || (_cache[9] = ($event) => onOidcSettingsSave(false))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])], 2)
			]);
		};
	}
}), [["__cssModules", { "$style": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default }]]);
var _hoisted_1 = { class: "pb-2xl" };
var _hoisted_2 = {
	href: "https://docs.n8n.io/user-management/saml/",
	target: "_blank"
};
var _hoisted_3 = {
	key: 1,
	"data-test-id": "sso-content-licensed"
};
var _hoisted_4 = {
	key: 2,
	"data-test-id": "sso-content-licensed"
};
var SettingsSso_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSso",
	setup(__props) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const options = computed(() => {
			return [{
				label: SupportedProtocols.SAML.toUpperCase(),
				value: SupportedProtocols.SAML
			}, {
				label: ssoStore.isEnterpriseOidcEnabled ? SupportedProtocols.OIDC.toUpperCase() : `${SupportedProtocols.OIDC.toUpperCase()} (${i18n.baseText("generic.upgradeToEnterprise")})`,
				value: SupportedProtocols.OIDC
			}];
		});
		const hasAnySsoEnabled = computed(() => ssoStore.isEnterpriseSamlEnabled || ssoStore.isEnterpriseOidcEnabled);
		const authProtocol = ref(SupportedProtocols.SAML);
		function onAuthProtocolUpdated(value) {
			authProtocol.value = value;
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("sso", "upgrade-sso");
		};
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.sso.title"));
			ssoStore.initializeSelectedProtocol();
			authProtocol.value = ssoStore.selectedAuthProtocol || SupportedProtocols.SAML;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nInfoTip_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.info")) + " ", 1), createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.sso.info.link")), 1)]),
					_: 1
				}),
				hasAnySsoEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "sso-auth-protocol-select",
					class: normalizeClass(_ctx.shared.group)
				}, [_cache[1] || (_cache[1] = createBaseVNode("label", null, "Select Authentication Protocol", -1)), createBaseVNode("div", null, [createVNode(unref(N8nSelect_default), {
					filterable: "",
					"model-value": authProtocol.value,
					placeholder: unref(i18n).baseText("parameterInput.select"),
					"onUpdate:modelValue": onAuthProtocolUpdated,
					onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, ({ label, value }) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: value,
							value,
							label,
							"data-test-id": "credential-select-option"
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, ["model-value", "placeholder"])])], 2)) : createCommentVNode("", true),
				unref(ssoStore).isEnterpriseSamlEnabled && authProtocol.value === unref(SupportedProtocols).SAML ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(SamlSettingsForm_default)])) : createCommentVNode("", true),
				unref(ssoStore).isEnterpriseOidcEnabled && authProtocol.value === unref(SupportedProtocols).OIDC ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(OidcSettingsForm_default)])) : createCommentVNode("", true),
				!hasAnySsoEnabled.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 3,
					"data-test-id": "sso-content-unlicensed",
					class: normalizeClass(_ctx.$style.actionBox),
					description: unref(i18n).baseText("settings.sso.actionBox.description"),
					"button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
					"onClick:button": goToUpgrade
				}, {
					heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
					_: 1
				}, 8, [
					"class",
					"description",
					"button-text"
				])) : createCommentVNode("", true)
			]);
		};
	}
});
var SettingsSso_vue_vue_type_style_index_1_lang_module_default = {
	heading: "_heading_bewbd_125",
	actionBox: "_actionBox_bewbd_129"
};
var SettingsSso_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsSso_vue_vue_type_script_setup_true_lang_default, [["__cssModules", {
	"shared": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default,
	"$style": SettingsSso_vue_vue_type_style_index_1_lang_module_default
}]]);
export { SettingsSso_default as default };
