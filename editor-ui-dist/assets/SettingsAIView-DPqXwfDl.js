import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DKnT_8zF.js";
import { Ii as N8nHeading_default, Ri as N8nText_default, rt as Checkbox_default } from "./src-D-UaKLq6.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Nt as useTelemetry, Sr as useMessage, cn as useDocumentTitle, gr as useToast, hs as useSettingsStore } from "./users.store-DLa4KoOQ.js";
import { ys as MODAL_CONFIRM } from "./constants-DnWvXsAO.js";
import "./merge-BwFl-s2u.js";
import "./_baseOrderBy-Ct8os4Zc.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-nPI-lV8D.js";
import { t as useAssistantStore } from "./assistant.store-D-clIjwZ.js";
var SettingsAIView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsAIView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const settingsStore = useSettingsStore();
		const allowSendingSchema = ref(true);
		const isAssistantEnabled = computed(() => assistantStore.isAssistantEnabled);
		const isBuilderEnabled = computed(() => settingsStore.isAiBuilderEnabled);
		const isAskAiEnabled = computed(() => settingsStore.isAskAiEnabled);
		const allowSendingParameterValues = computed(() => settingsStore.isAiDataSharingEnabled);
		const aiSettingsDescription = computed(() => {
			if (isAssistantEnabled.value && isAskAiEnabled.value) return i18n.baseText("settings.ai.description.both");
			else if (isAssistantEnabled.value) return i18n.baseText("settings.ai.description.assistantOnly");
			else if (isAskAiEnabled.value) return i18n.baseText("settings.ai.description.askAiOnly");
			return i18n.baseText("settings.ai.description.both");
		});
		const confirmationMessage = computed(() => {
			if (isBuilderEnabled.value) return i18n.baseText("settings.ai.confirm.message.builderEnabled");
			return i18n.baseText("settings.ai.confirm.message.builderDisabled");
		});
		const onallowSendingParameterValuesChange = async (newValue) => {
			if (typeof newValue !== "boolean") return;
			if (!newValue) {
				if (await message.confirm(confirmationMessage.value, {
					title: i18n.baseText("settings.ai.confirm.title"),
					confirmButtonText: i18n.baseText("settings.ai.confirm.confirmButtonText"),
					cancelButtonText: i18n.baseText("generic.cancel")
				}) !== "confirm") return;
			}
			try {
				await settingsStore.updateAiDataSharingSettings(newValue);
				toast.showMessage({
					title: i18n.baseText("settings.ai.updated.success"),
					type: "success"
				});
				telemetry.track("User changed AI Usage settings", { allow_sending_parameter_values: newValue });
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.ai.updated.error"));
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.ai"));
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "ai"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, null, 512), [[_directive_n8n_html, aiSettingsDescription.value]])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [createVNode(unref(Checkbox_default), {
					modelValue: allowSendingSchema.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowSendingSchema.value = $event),
					disabled: true,
					label: unref(i18n).baseText("settings.ai.allowSendingSchema.label")
				}, null, 8, ["modelValue", "label"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.checkboxDescription),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingSchema.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [createVNode(unref(Checkbox_default), {
					"model-value": allowSendingParameterValues.value,
					label: unref(i18n).baseText("settings.ai.allowSendingParameterValues.label"),
					"onUpdate:modelValue": onallowSendingParameterValuesChange
				}, null, 8, ["model-value", "label"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.checkboxDescription),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.allowSendingParameterValues.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.privacyNote) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.ai.privacyNote.heading")), 1)]),
					_: 1
				}), withDirectives(createVNode(unref(N8nText_default), { color: "text-base" }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.ai.privacyNote.content", { interpolate: { docsLink: "https://docs.n8n.io/manage-cloud/ai-assistant" } })]])], 2)
			], 2);
		};
	}
});
var SettingsAIView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_5309p_125",
	header: "_header_5309p_131",
	content: "_content_5309p_137",
	checkboxContainer: "_checkboxContainer_5309p_143",
	checkboxDescription: "_checkboxDescription_5309p_154",
	notice: "_notice_5309p_157",
	privacyNote: "_privacyNote_5309p_162"
};
var SettingsAIView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsAIView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsAIView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsAIView_default as default };
