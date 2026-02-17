import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, bt as withCtx, c as useCssModule, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { x as useAsyncState, yt as useI18n } from "./_MapCache-DmEDgiBe.js";
import { Li as N8nHeading_default, Ot as ElSwitch, zi as N8nText_default } from "./src-CTpXJon-.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Bs as getSecuritySettings, Tr as useMessage, Vs as updateSecuritySettings, yr as useToast } from "./users.store-Cq1Mo6lE.js";
import { bs as MODAL_CONFIRM } from "./constants-DinfAOkS.js";
import "./merge-DYtQhreu.js";
import { r as useRootStore } from "./_baseOrderBy-vlX6A-VD.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BDNPykkK.js";
var SecuritySettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SecuritySettings",
	setup(__props) {
		const $style = useCssModule();
		const rootStore = useRootStore();
		const i18n = useI18n();
		const { showToast, showError } = useToast();
		const message = useMessage();
		const { state, isLoading } = useAsyncState(async () => {
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
			set: async (value) => {
				if (!value) {
					if (await message.confirm(i18n.baseText("settings.security.personalSpace.publishing.confirmMessage.disable.message"), i18n.baseText("settings.security.personalSpace.publishing.confirmMessage.disable.headline"), {
						cancelButtonText: i18n.baseText("generic.cancel"),
						confirmButtonText: i18n.baseText("generic.confirm")
					}) !== "confirm") return;
				}
				if (state.value) state.value = {
					...state.value,
					personalSpacePublishing: value
				};
				await updatePersonalSpaceSetting("personalSpacePublishing", value, "publishing");
			}
		});
		const personalSpaceSharing = computed({
			get: () => state.value?.personalSpaceSharing ?? false,
			set: async (value) => {
				if (!value) {
					if (await message.confirm(i18n.baseText("settings.security.personalSpace.sharing.confirmMessage.disable.message"), i18n.baseText("settings.security.personalSpace.sharing.confirmMessage.disable.headline"), {
						cancelButtonText: i18n.baseText("generic.cancel"),
						confirmButtonText: i18n.baseText("generic.confirm")
					}) !== "confirm") return;
				}
				if (state.value) state.value = {
					...state.value,
					personalSpaceSharing: value
				};
				await updatePersonalSpaceSetting("personalSpaceSharing", value, "sharing");
			}
		});
		const sharingCountText = computed(() => {
			const workflows = state.value?.sharedPersonalWorkflowsCount ?? 0;
			const credentials = state.value?.sharedPersonalCredentialsCount ?? 0;
			return i18n.baseText("settings.security.personalSpace.sharing.existingCount.value", { interpolate: {
				workflowCount: String(workflows),
				credentialCount: String(credentials)
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).container) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge",
					class: "mb-xl"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					class: "mb-l"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.title")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(unref($style).settingsSection) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.sharing.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.sharing.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(unref(ElSwitch), {
					modelValue: personalSpaceSharing.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => personalSpaceSharing.value = $event),
					loading: unref(isLoading),
					size: "large",
					"data-test-id": "security-personal-space-sharing-toggle"
				}, null, 8, ["modelValue", "loading"])], 2)], 2), createBaseVNode("div", {
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.publishing.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.security.personalSpace.publishing.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).settingsContainerAction) }, [createVNode(unref(ElSwitch), {
					modelValue: personalSpacePublishing.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => personalSpacePublishing.value = $event),
					loading: unref(isLoading),
					size: "large",
					"data-test-id": "security-personal-space-publishing-toggle"
				}, null, 8, ["modelValue", "loading"])], 2)], 2), createBaseVNode("div", {
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
				})], 2)], 2)
			], 2);
		};
	}
});
var SecuritySettings_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_zjcys_2",
	settingsSection: "_settingsSection_zjcys_6",
	settingsContainer: "_settingsContainer_zjcys_13",
	settingsContainerInfo: "_settingsContainerInfo_zjcys_21",
	settingsContainerAction: "_settingsContainerAction_zjcys_32",
	settingsCountRow: "_settingsCountRow_zjcys_40"
};
var SecuritySettings_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SecuritySettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SecuritySettings_vue_vue_type_style_index_0_lang_module_default }]]);
export { SecuritySettings_default as default };
