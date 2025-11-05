import { C as computed, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, u as vModelCheckbox, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-It4eafc2.js";
import { Fn as N8nText_default, G as N8nOption_default, In as N8nButton_default, Ln as N8nSpinner_default, Nn as N8nHeading_default, W as N8nSelect_default, bt as N8nInput_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./empty-BuGRxzl4.js";
import { Js as useRootStore, ds as getProvisioningConfig, fs as saveProvisioningConfig, gc as defineStore, kn as useDocumentTitle, zo as useSettingsStore } from "./useTelemetry-D6pZULgL.js";
import { t as useToast } from "./useToast-BabYcC1S.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { co as VIEWS } from "./constants-UStNMe6H.js";
import "./merge-D5iNo-Qh.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-SobFYd6D.js";
import "./useExternalHooks-D1vL2UOW.js";
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
var _hoisted_1 = { class: "pb-2xl" };
var _hoisted_2 = { key: 1 };
var SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsProvisioningView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		const provisioningStore = useProvisioningStore();
		const settingsStore = useSettingsStore();
		const router = useRouter();
		onMounted(async () => {
			if (!settingsStore.isEnterpriseFeatureEnabled.provisioning) {
				await router.push({ name: VIEWS.SETTINGS });
				return;
			}
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
		const form = reactive({
			scopesName: "",
			scopesInstanceRoleClaimName: "",
			scopesProjectsRolesClaimName: "",
			scopesProvisionInstanceRole: false,
			scopesProvisionProjectRoles: false,
			scopesProvisioningFrequency: "never"
		});
		const frequencyOptions = [
			{
				label: "Never",
				value: "never"
			},
			{
				label: "First Login",
				value: "first_login"
			},
			{
				label: "Every Login",
				value: "every_login"
			}
		];
		const isFormDirty = computed(() => {
			const cfg = provisioningStore.provisioningConfig;
			if (!cfg) return false;
			return [
				"scopesName",
				"scopesInstanceRoleClaimName",
				"scopesProjectsRolesClaimName",
				"scopesProvisionInstanceRole",
				"scopesProvisionProjectRoles",
				"scopesProvisioningFrequency"
			].some((key) => form[key] !== cfg[key]);
		});
		const loadFormData = () => {
			const cfg = provisioningStore.provisioningConfig;
			if (!cfg) return;
			Object.assign(form, {
				scopesName: cfg.scopesName || "",
				scopesInstanceRoleClaimName: cfg.scopesInstanceRoleClaimName || "",
				scopesProjectsRolesClaimName: cfg.scopesProjectsRolesClaimName || "",
				scopesProvisionInstanceRole: cfg.scopesProvisionInstanceRole ?? false,
				scopesProvisionProjectRoles: cfg.scopesProvisionProjectRoles ?? false,
				scopesProvisioningFrequency: cfg.scopesProvisioningFrequency || "never"
			});
		};
		const onSave = async () => {
			saving.value = true;
			try {
				await provisioningStore.saveProvisioningConfig({ ...form });
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
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
				}, [createVNode(unref(N8nSpinner_default), { size: "large" })], 2)) : (openBlock(), createElementBlock("div", _hoisted_2, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProvisionInstanceRole")), 1),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchContainer) }, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.switchLabel) }, [withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.scopesProvisionInstanceRole = $event),
							type: "checkbox",
							class: normalizeClass(_ctx.$style.checkbox)
						}, null, 2), [[vModelCheckbox, form.scopesProvisionInstanceRole]]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchText) }, toDisplayString(form.scopesProvisionInstanceRole ? unref(i18n).baseText("generic.yes") : unref(i18n).baseText("generic.no")), 3)], 2)], 2),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProvisionInstanceRole.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProvisionProjectRoles")), 1),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchContainer) }, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.switchLabel) }, [withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.scopesProvisionProjectRoles = $event),
							type: "checkbox",
							class: normalizeClass(_ctx.$style.checkbox)
						}, null, 2), [[vModelCheckbox, form.scopesProvisionProjectRoles]]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchText) }, toDisplayString(form.scopesProvisionProjectRoles ? unref(i18n).baseText("generic.yes") : unref(i18n).baseText("generic.no")), 3)], 2)], 2),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProvisionProjectRoles.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProvisioningFrequency")), 1),
						createVNode(unref(N8nSelect_default), {
							modelValue: form.scopesProvisioningFrequency,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.scopesProvisioningFrequency = $event),
							size: "large",
							placeholder: unref(i18n).baseText("settings.provisioning.scopesProvisioningFrequency.placeholder")
						}, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(frequencyOptions, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label
								}, null, 8, ["value", "label"]);
							}), 64))]),
							_: 1
						}, 8, ["modelValue", "placeholder"]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProvisioningFrequency.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName")), 1),
						createVNode(unref(N8nInput_default), {
							modelValue: form.scopesName,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.scopesName = $event),
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
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.scopesInstanceRoleClaimName = $event),
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
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.scopesProjectsRolesClaimName = $event),
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
					}, 8, ["disabled", "loading"])], 2)
				]))
			]);
		};
	}
});
var SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default = {
	heading: "_heading_1v2pr_123",
	loading: "_loading_1v2pr_127",
	buttons: "_buttons_1v2pr_134",
	group: "_group_1v2pr_143",
	switchContainer: "_switchContainer_1v2pr_159",
	switchLabel: "_switchLabel_1v2pr_163",
	checkbox: "_checkbox_1v2pr_169",
	switchText: "_switchText_1v2pr_174"
};
var SettingsProvisioningView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsProvisioningView_default as default };
