import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, T as createBlock, U as mergeModels, Z as onMounted, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, ft as useModel, j as createTextVNode, u as vModelCheckbox, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, Rn as N8nSpinner_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as ElDialog } from "./dialog-CzxM5dHR.js";
import { Go as getUsers, Qs as useRootStore, Tn as useDocumentTitle, hs as saveProvisioningConfig, ms as getProvisioningConfig, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
const useProvisioningStore = defineStore("provisioning", () => {
	const rootStore = useRootStore();
	const provisioningConfig = ref();
	const isProvisioningEnabled = computed(() => provisioningConfig.value?.scopesProvisionInstanceRole || provisioningConfig.value?.scopesProvisionProjectRoles || false);
	const getProvisioningConfig$1 = async () => {
		try {
			const config = await getProvisioningConfig(rootStore.restApiContext);
			provisioningConfig.value = config;
			return config;
		} catch (error) {
			console.error("Failed to fetch provisioning config:", error);
			throw error;
		}
	};
	const saveProvisioningConfig$1 = async (config) => {
		try {
			const updatedConfig = await saveProvisioningConfig(rootStore.restApiContext, config);
			provisioningConfig.value = updatedConfig;
			return updatedConfig;
		} catch (error) {
			console.error("Failed to save provisioning config:", error);
			throw error;
		}
	};
	return {
		provisioningConfig,
		isProvisioningEnabled,
		getProvisioningConfig: getProvisioningConfig$1,
		saveProvisioningConfig: saveProvisioningConfig$1
	};
});
function isAccessSettingsUserData(response) {
	if (!(typeof response === "object" && response !== null && "count" in response && "items" in response)) return false;
	if (!Array.isArray(response.items)) return false;
	const item = response.items.length ? response.items[0] : null;
	if (!item) return true;
	return Object.hasOwn(item, "id") && Object.hasOwn(item, "email") && Object.hasOwn(item, "role") && Object.hasOwn(item, "projectRelations");
}
function useAccessSettingsCsvExport() {
	const cachedUserData = ref();
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
		const getUsersResponse = await getUsers(rootStore.restApiContext, {
			take: -1,
			select: ["email", "role"],
			sortBy: ["email:desc"],
			expand: ["projectRelations"],
			skip: 0
		});
		if (isAccessSettingsUserData(getUsersResponse)) {
			cachedUserData.value = getUsersResponse;
			return cachedUserData.value;
		}
		return getUsersResponse;
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
				const projectRole = escapeCsvValue(project.role ?? "");
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
	};
	return {
		downloadProjectRolesCsv,
		downloadInstanceRolesCsv,
		hasDownloadedInstanceRoleCsv,
		hasDownloadedProjectRoleCsv,
		accessSettingsCsvExportOnModalClose
	};
}
var _hoisted_1$1 = { class: "mb-s" };
var _hoisted_2$1 = { class: "mb-s" };
var EnableJitProvisioningDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EnableJitProvisioningDialog",
	props: {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	},
	emits: /* @__PURE__ */ mergeModels(["confirmProvisioning", "cancel"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const visible = useModel(__props, "modelValue");
		const emit = __emit;
		const locale = useI18n();
		const downloadingInstanceRolesCsv = ref(false);
		const downloadingProjectRolesCsv = ref(false);
		const loadingActivatingJit = ref(false);
		const { hasDownloadedInstanceRoleCsv, hasDownloadedProjectRoleCsv, downloadProjectRolesCsv, downloadInstanceRolesCsv, accessSettingsCsvExportOnModalClose } = useAccessSettingsCsvExport();
		watch(visible, () => {
			loadingActivatingJit.value = false;
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
		const onConfirmActivatingProvisioning = () => {
			loadingActivatingJit.value = true;
			emit("confirmProvisioning");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
				title: unref(locale).baseText("settings.provisioningConfirmDialog.title"),
				width: "650"
			}, {
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					"native-type": "button",
					"data-test-id": "provisioning-cancel-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("cancel"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					"native-type": "button",
					disabled: loadingActivatingJit.value || !(unref(hasDownloadedInstanceRoleCsv) && unref(hasDownloadedProjectRoleCsv)),
					"data-test-id": "provisioning-confirm-button",
					onClick: onConfirmActivatingProvisioning
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_1$1, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.firstLine")), 1)]),
						_: 1
					})]),
					createBaseVNode("ul", { class: normalizeClass([_ctx.$style.list, "mb-s"]) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.list.one")), 1)]),
						_: 1
					})]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.list.two")), 1)]),
						_: 1
					})])], 2),
					createBaseVNode("div", _hoisted_2$1, [createVNode(unref(N8nText_default), { color: "text-base" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeRequiredSteps")), 1)]),
						_: 1
					})]),
					createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.buttonRow]) }, [createVNode(unref(N8nButton_default), {
						type: "secondary",
						"native-type": "button",
						"data-test-id": "provisioning-download-instance-roles-csv-button",
						disabled: downloadingInstanceRolesCsv.value,
						loading: downloadingInstanceRolesCsv.value,
						class: normalizeClass(_ctx.$style.button),
						onClick: onDownloadInstanceRolesCsv
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv")), 1)]),
						_: 1
					}, 8, [
						"disabled",
						"loading",
						"class"
					]), unref(hasDownloadedInstanceRoleCsv) ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "check",
						color: "success",
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["class"])) : createCommentVNode("", true)], 2),
					createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.buttonRow]) }, [createVNode(unref(N8nButton_default), {
						type: "secondary",
						"native-type": "button",
						"data-test-id": "provisioning-download-project-roles-csv-button",
						disabled: downloadingProjectRolesCsv.value,
						loading: downloadingProjectRolesCsv.value,
						class: normalizeClass(_ctx.$style.button),
						onClick: onDownloadProjectRolesCsv
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadProjectRolesCsv")), 1)]),
						_: 1
					}, 8, [
						"disabled",
						"loading",
						"class"
					]), unref(hasDownloadedProjectRoleCsv) ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "check",
						color: "success",
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["class"])) : createCommentVNode("", true)], 2)
				]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
});
var EnableJitProvisioningDialog_vue_vue_type_style_index_0_lang_module_default = {
	buttonRow: "_buttonRow_av0py_123",
	button: "_button_av0py_123",
	icon: "_icon_av0py_132",
	list: "_list_av0py_136"
};
var EnableJitProvisioningDialog_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EnableJitProvisioningDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EnableJitProvisioningDialog_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 1 };
var _hoisted_2 = { for: "provisioning-enabled" };
var SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsProvisioningView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		const provisioningStore = useProvisioningStore();
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.provisioning.title"));
			loading$1.value = true;
			try {
				await provisioningStore.getProvisioningConfig();
				loadFormData();
			} catch (error) {
				showError(error, i18n.baseText("settings.provisioning.loadError"));
			} finally {
				loading$1.value = false;
			}
		});
		const loading$1 = ref(false);
		const saving = ref(false);
		const confirmationDialogVisible = ref(false);
		const form = reactive({
			scopesName: "",
			scopesInstanceRoleClaimName: "",
			scopesProjectsRolesClaimName: "",
			provisioningEnabled: false
		});
		const isFormDirty = computed(() => {
			const config = provisioningStore.provisioningConfig;
			if (!config) return false;
			const configChanged = [
				"scopesName",
				"scopesInstanceRoleClaimName",
				"scopesProjectsRolesClaimName"
			].some((key) => form[key] !== config[key]);
			const provisioningEnabledChanged = form.provisioningEnabled !== (config.scopesProvisionInstanceRole && config.scopesProvisionProjectRoles);
			return configChanged || provisioningEnabledChanged;
		});
		const loadFormData = () => {
			const cfg = provisioningStore.provisioningConfig;
			if (!cfg) return;
			Object.assign(form, {
				scopesName: cfg.scopesName || "",
				scopesInstanceRoleClaimName: cfg.scopesInstanceRoleClaimName || "",
				scopesProjectsRolesClaimName: cfg.scopesProjectsRolesClaimName || ""
			});
			form.provisioningEnabled = cfg.scopesProvisionInstanceRole;
		};
		const saveFormValues = async () => {
			saving.value = true;
			try {
				const { provisioningEnabled,...dataToSave } = form;
				await provisioningStore.saveProvisioningConfig({
					...dataToSave,
					scopesProvisionInstanceRole: provisioningEnabled,
					scopesProvisionProjectRoles: provisioningEnabled
				});
				await provisioningStore.getProvisioningConfig();
				loadFormData();
				showMessage({
					title: i18n.baseText("settings.provisioning.saveSuccess"),
					message: i18n.baseText("settings.provisioning.saveSuccessMessage"),
					type: "success",
					duration: 3e3
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.provisioning.saveError"));
			} finally {
				saving.value = false;
			}
		};
		const onSave = async () => {
			if (form.provisioningEnabled) {
				confirmationDialogVisible.value = true;
				return;
			}
			await saveFormValues();
		};
		const onConfirmProvisioning = async () => {
			saving.value = true;
			await saveFormValues();
			confirmationDialogVisible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.title")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.description")), 1)]),
					_: 1
				}),
				loading$1.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nSpinner_default), { size: "large" })], 2)) : (openBlock(), createElementBlock("div", _hoisted_1, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle")), 1),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle.help")), 1),
						withDirectives(createBaseVNode("input", {
							id: "provisioning-enabled",
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.provisioningEnabled = $event),
							type: "checkbox",
							class: normalizeClass(_ctx.$style.checkbox)
						}, null, 2), [[vModelCheckbox, form.provisioningEnabled]])
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesName,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.scopesName = $event),
							type: "text",
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesName.placeholder")
						}, null, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesInstanceRoleClaimName,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.scopesInstanceRoleClaimName = $event),
							type: "text",
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.placeholder")
						}, null, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesProjectsRolesClaimName,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.scopesProjectsRolesClaimName = $event),
							type: "text",
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.placeholder")
						}, null, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [createVNode(unref(N8nButton_default), {
						disabled: !isFormDirty.value || saving.value,
						size: "large",
						loading: saving.value,
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.save")), 1)]),
						_: 1
					}, 8, ["disabled", "loading"])], 2),
					createVNode(EnableJitProvisioningDialog_default, {
						modelValue: confirmationDialogVisible.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => confirmationDialogVisible.value = $event),
						onConfirmProvisioning,
						onCancel: _cache[5] || (_cache[5] = ($event) => confirmationDialogVisible.value = false)
					}, null, 8, ["modelValue"])
				]))
			], 2);
		};
	}
});
var SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_b5ixa_123",
	heading: "_heading_b5ixa_128",
	loading: "_loading_b5ixa_132",
	buttons: "_buttons_b5ixa_139",
	group: "_group_b5ixa_148",
	frequencySelect: "_frequencySelect_b5ixa_164",
	checkbox: "_checkbox_b5ixa_169"
};
var SettingsProvisioningView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsProvisioningView_default as default };
