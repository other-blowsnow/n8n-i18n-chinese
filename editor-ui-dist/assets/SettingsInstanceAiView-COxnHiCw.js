import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-x10Anb9r.js";
import { Ca as N8nText_default, Ft as ElSwitch, Pi as Input_default, Ta as N8nIcon_default, _t as N8nOption_default, gt as N8nSelect_default, q as N8nInputNumber_default, ut as N8nInputLabel_default, wa as N8nButton_default, xa as N8nHeading_default } from "./src-CSSRFm72.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Fa as CREDENTIAL_EDIT_MODAL_KEY, r as useUIStore } from "./users.store-V46mYCxM.js";
import { t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DTGPlvkt.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-D0qyz8UG.js";
//#region src/features/ai/instanceAi/components/settings/useSettingsField.ts
function useSettingsField() {
	const store = useInstanceAiSettingsStore();
	function getString(key) {
		const draftVal = store.draft[key];
		if (draftVal !== void 0) return String(draftVal);
		return store.settings?.[key] ?? "";
	}
	function getNumber(key) {
		const draftVal = store.draft[key];
		if (draftVal !== void 0) return Number(draftVal);
		return store.settings?.[key] ?? 0;
	}
	function getBool(key) {
		const draftVal = store.draft[key];
		if (draftVal !== void 0) return Boolean(draftVal);
		const fromSettings = store.settings?.[key];
		if (fromSettings !== void 0) return Boolean(fromSettings);
		if (key === "enabled") return true;
		return false;
	}
	function getPreferenceString(key) {
		const draftVal = store.preferencesDraft[key];
		if (draftVal !== void 0) return String(draftVal);
		return store.preferences?.[key] ?? "";
	}
	return {
		store,
		getString,
		getNumber,
		getBool,
		getPreferenceString
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/settings/ModelSection.vue?vue&type=script&setup=true&lang.ts
var ModelSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSection",
	setup(__props) {
		const i18n = useI18n();
		const { store, getPreferenceString } = useSettingsField();
		const selectedCredentialId = computed(() => {
			if (store.preferencesDraft.credentialId !== void 0) return store.preferencesDraft.credentialId ?? "";
			return store.preferences?.credentialId ?? "";
		});
		function handleCredentialChange(value) {
			store.setPreferenceField("credentialId", value ? String(value) : null);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.section.model")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.credential.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						"model-value": selectedCredentialId.value,
						size: "small",
						placeholder: unref(i18n).baseText("instanceAi.settings.credential.placeholder"),
						"onUpdate:modelValue": handleCredentialChange
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("instanceAi.settings.credential.none")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).credentials, (cred) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: cred.id,
								value: cred.id,
								label: `${cred.name} (${cred.provider})`
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value", "placeholder"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.modelName.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						"model-value": unref(getPreferenceString)("modelName"),
						size: "small",
						placeholder: unref(i18n).baseText("instanceAi.settings.modelName.placeholder"),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).setPreferenceField("modelName", $event))
					}, null, 8, ["model-value", "placeholder"])]),
					_: 1
				}, 8, ["label"])
			], 2);
		};
	}
});
var ModelSection_vue_vue_type_style_index_0_lang_module_default = { section: "_section_12yo8_125" };
var ModelSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ModelSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/settings/SandboxSection.vue?vue&type=script&setup=true&lang.ts
var CREATE_NEW = "__create__";
var SandboxSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SandboxSection",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const { store, getString, getNumber, getBool } = useSettingsField();
		const provider = computed(() => {
			return store.draft.sandboxProvider ?? store.settings?.sandboxProvider ?? "daytona";
		});
		const showDaytonaFields = computed(() => {
			return provider.value === "daytona";
		});
		const showN8nSandboxFields = computed(() => {
			return provider.value === "n8n-sandbox";
		});
		const showImageField = computed(() => {
			return provider.value === "daytona";
		});
		const daytonaCredentials = computed(() => store.serviceCredentials.filter((c) => c.type === "daytonaApi"));
		const n8nSandboxCredentials = computed(() => store.serviceCredentials.filter((c) => c.type === "httpHeaderAuth"));
		const selectedDaytonaCredentialId = computed(() => {
			if (store.draft.daytonaCredentialId !== void 0) return store.draft.daytonaCredentialId ?? "";
			return store.settings?.daytonaCredentialId ?? "";
		});
		const selectedN8nSandboxCredentialId = computed(() => {
			if (store.draft.n8nSandboxCredentialId !== void 0) return store.draft.n8nSandboxCredentialId ?? "";
			return store.settings?.n8nSandboxCredentialId ?? "";
		});
		let creatingCredential = false;
		let creatingCredentialType = null;
		function handleDaytonaCredentialChange(value) {
			if (value === CREATE_NEW) {
				creatingCredential = true;
				creatingCredentialType = "daytonaApi";
				uiStore.openNewCredential("daytonaApi");
				return;
			}
			store.setField("daytonaCredentialId", value ? String(value) : null);
		}
		function handleN8nSandboxCredentialChange(value) {
			if (value === CREATE_NEW) {
				creatingCredential = true;
				creatingCredentialType = "httpHeaderAuth";
				uiStore.openNewCredential("httpHeaderAuth");
				return;
			}
			store.setField("n8nSandboxCredentialId", value ? String(value) : null);
		}
		watch(() => uiStore.isModalActiveById[CREDENTIAL_EDIT_MODAL_KEY], async (isOpen, wasOpen) => {
			if (!wasOpen || isOpen) return;
			const previousIds = new Set(daytonaCredentials.value.map((c) => c.id));
			const previousSandboxIds = new Set(n8nSandboxCredentials.value.map((c) => c.id));
			await store.refreshCredentials();
			if (creatingCredential) {
				creatingCredential = false;
				if (creatingCredentialType === "daytonaApi") {
					const newCred = daytonaCredentials.value.find((c) => !previousIds.has(c.id));
					if (newCred) store.setField("daytonaCredentialId", newCred.id);
				}
				if (creatingCredentialType === "httpHeaderAuth") {
					const newCred = n8nSandboxCredentials.value.find((c) => !previousSandboxIds.has(c.id));
					if (newCred) store.setField("n8nSandboxCredentialId", newCred.id);
				}
				creatingCredentialType = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.section.sandbox")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.sandboxEnabled.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(getBool)("sandboxEnabled"),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).setField("sandboxEnabled", Boolean($event)))
				}, null, 8, ["model-value"])], 2),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.sandboxProvider.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						"model-value": provider.value,
						size: "small",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(store).setField("sandboxProvider", String($event)))
					}, {
						default: withCtx(() => [
							createVNode(unref(N8nOption_default), {
								value: "daytona",
								label: "Daytona"
							}),
							createVNode(unref(N8nOption_default), {
								value: "n8n-sandbox",
								label: "n8n Sandbox Service"
							}),
							createVNode(unref(N8nOption_default), {
								value: "local",
								label: "Local"
							})
						]),
						_: 1
					}, 8, ["model-value"])]),
					_: 1
				}, 8, ["label"]),
				showDaytonaFields.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
					key: 0,
					label: unref(i18n).baseText("instanceAi.settings.daytonaCredential.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						"model-value": selectedDaytonaCredentialId.value,
						size: "small",
						placeholder: unref(i18n).baseText("instanceAi.settings.credential.placeholder"),
						"onUpdate:modelValue": handleDaytonaCredentialChange
					}, {
						default: withCtx(() => [
							createVNode(unref(N8nOption_default), {
								value: "",
								label: unref(i18n).baseText("instanceAi.settings.credential.none")
							}, null, 8, ["label"]),
							(openBlock(true), createElementBlock(Fragment, null, renderList(daytonaCredentials.value, (cred) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: cred.id,
									value: cred.id,
									label: cred.name
								}, null, 8, ["value", "label"]);
							}), 128)),
							createVNode(unref(N8nOption_default), {
								value: CREATE_NEW,
								label: unref(i18n).baseText("instanceAi.settings.credential.createNew")
							}, null, 8, ["label"])
						]),
						_: 1
					}, 8, ["model-value", "placeholder"])]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				showN8nSandboxFields.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
					key: 1,
					label: unref(i18n).baseText("instanceAi.settings.n8nSandboxCredential.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nSelect_default), {
						"model-value": selectedN8nSandboxCredentialId.value,
						size: "small",
						placeholder: unref(i18n).baseText("instanceAi.settings.credential.placeholder"),
						"onUpdate:modelValue": handleN8nSandboxCredentialChange
					}, {
						default: withCtx(() => [
							createVNode(unref(N8nOption_default), {
								value: "",
								label: unref(i18n).baseText("instanceAi.settings.credential.none")
							}, null, 8, ["label"]),
							(openBlock(true), createElementBlock(Fragment, null, renderList(n8nSandboxCredentials.value, (cred) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: cred.id,
									value: cred.id,
									label: cred.name
								}, null, 8, ["value", "label"]);
							}), 128)),
							createVNode(unref(N8nOption_default), {
								value: CREATE_NEW,
								label: unref(i18n).baseText("instanceAi.settings.credential.createNew")
							}, null, 8, ["label"])
						]),
						_: 1
					}, 8, ["model-value", "placeholder"])]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				showImageField.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
					key: 2,
					label: unref(i18n).baseText("instanceAi.settings.sandboxImage.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						"model-value": unref(getString)("sandboxImage"),
						size: "small",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(store).setField("sandboxImage", $event))
					}, null, 8, ["model-value"])]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.sandboxTimeout.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nInputNumber_default), {
						class: normalizeClass(_ctx.$style.numberInput),
						"model-value": unref(getNumber)("sandboxTimeout") ?? 3e5,
						size: "small",
						min: 0,
						step: 1e4,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(store).setField("sandboxTimeout", $event ?? 3e5))
					}, null, 8, ["class", "model-value"])]),
					_: 1
				}, 8, ["label"])
			], 2);
		};
	}
});
var SandboxSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_y74pi_125",
	numberInput: "_numberInput_y74pi_131",
	switchRow: "_switchRow_y74pi_135",
	switchLabel: "_switchLabel_y74pi_142"
};
var SandboxSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SandboxSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SandboxSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/settings/MemorySection.vue?vue&type=script&setup=true&lang.ts
var MemorySection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MemorySection",
	setup(__props) {
		const i18n = useI18n();
		const { store, getString, getNumber } = useSettingsField();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.section.memory")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.lastMessages.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nInputNumber_default), {
						class: normalizeClass(_ctx.$style.numberInput),
						"model-value": unref(getNumber)("lastMessages") ?? 20,
						size: "small",
						min: 1,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).setField("lastMessages", $event ?? 20))
					}, null, 8, ["class", "model-value"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.embedderModel.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						"model-value": unref(getString)("embedderModel"),
						size: "small",
						placeholder: unref(i18n).baseText("instanceAi.settings.embedderModel.placeholder"),
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(store).setField("embedderModel", $event))
					}, null, 8, ["model-value", "placeholder"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.semanticRecallTopK.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nInputNumber_default), {
						class: normalizeClass(_ctx.$style.numberInput),
						"model-value": unref(getNumber)("semanticRecallTopK") ?? 5,
						size: "small",
						min: 0,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(store).setField("semanticRecallTopK", $event ?? 5))
					}, null, 8, ["class", "model-value"])]),
					_: 1
				}, 8, ["label"])
			], 2);
		};
	}
});
var MemorySection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_2pp96_125",
	numberInput: "_numberInput_2pp96_131"
};
var MemorySection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MemorySection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MemorySection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/settings/SearchSection.vue?vue&type=script&setup=true&lang.ts
var CREATE_BRAVE = "__create_brave__";
var CREATE_SEARXNG = "__create_searxng__";
var SearchSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SearchSection",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const { store } = useSettingsField();
		const searchCredentials = computed(() => store.serviceCredentials.filter((c) => c.type === "braveSearchApi" || c.type === "searXngApi"));
		const selectedSearchCredentialId = computed(() => {
			if (store.draft.searchCredentialId !== void 0) return store.draft.searchCredentialId ?? "";
			return store.settings?.searchCredentialId ?? "";
		});
		let creatingCredential = false;
		function handleSearchCredentialChange(value) {
			if (value === CREATE_BRAVE) {
				creatingCredential = true;
				uiStore.openNewCredential("braveSearchApi");
				return;
			}
			if (value === CREATE_SEARXNG) {
				creatingCredential = true;
				uiStore.openNewCredential("searXngApi");
				return;
			}
			store.setField("searchCredentialId", value ? String(value) : null);
		}
		watch(() => uiStore.isModalActiveById[CREDENTIAL_EDIT_MODAL_KEY], async (isOpen, wasOpen) => {
			if (!wasOpen || isOpen) return;
			const previousIds = new Set(searchCredentials.value.map((c) => c.id));
			await store.refreshCredentials();
			if (creatingCredential) {
				creatingCredential = false;
				const newCred = searchCredentials.value.find((c) => !previousIds.has(c.id));
				if (newCred) store.setField("searchCredentialId", newCred.id);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.section.search")), 1)]),
				_: 1
			}), createVNode(unref(N8nInputLabel_default), {
				label: unref(i18n).baseText("instanceAi.settings.searchCredential.label"),
				bold: false,
				size: "small"
			}, {
				default: withCtx(() => [createVNode(unref(N8nSelect_default), {
					"model-value": selectedSearchCredentialId.value,
					size: "small",
					placeholder: unref(i18n).baseText("instanceAi.settings.credential.placeholder"),
					"onUpdate:modelValue": handleSearchCredentialChange
				}, {
					default: withCtx(() => [
						createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("instanceAi.settings.credential.none")
						}, null, 8, ["label"]),
						(openBlock(true), createElementBlock(Fragment, null, renderList(searchCredentials.value, (cred) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: cred.id,
								value: cred.id,
								label: `${cred.name} (${cred.type === "braveSearchApi" ? "Brave" : "SearXNG"})`
							}, null, 8, ["value", "label"]);
						}), 128)),
						createVNode(unref(N8nOption_default), {
							value: CREATE_BRAVE,
							label: unref(i18n).baseText("instanceAi.settings.credential.createBrave")
						}, null, 8, ["label"]),
						createVNode(unref(N8nOption_default), {
							value: CREATE_SEARXNG,
							label: unref(i18n).baseText("instanceAi.settings.credential.createSearxng")
						}, null, 8, ["label"])
					]),
					_: 1
				}, 8, ["model-value", "placeholder"])]),
				_: 1
			}, 8, ["label"])], 2);
		};
	}
});
var SearchSection_vue_vue_type_style_index_0_lang_module_default = { section: "_section_12yo8_125" };
var SearchSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SearchSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SearchSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/settings/AdvancedSection.vue?vue&type=script&setup=true&lang.ts
var AdvancedSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AdvancedSection",
	setup(__props) {
		const i18n = useI18n();
		const { store, getString, getNumber, getBool } = useSettingsField();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.section.advanced")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.subAgentMaxSteps.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(N8nInputNumber_default), {
						class: normalizeClass(_ctx.$style.numberInput),
						"model-value": unref(getNumber)("subAgentMaxSteps") ?? 100,
						size: "small",
						min: 1,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).setField("subAgentMaxSteps", $event ?? 100))
					}, null, 8, ["class", "model-value"])]),
					_: 1
				}, 8, ["label"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.browserMcp.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(getBool)("browserMcp"),
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(store).setField("browserMcp", Boolean($event)))
				}, null, 8, ["model-value"])], 2),
				createVNode(unref(N8nInputLabel_default), {
					label: unref(i18n).baseText("instanceAi.settings.mcpServers.label"),
					bold: false,
					size: "small"
				}, {
					default: withCtx(() => [createVNode(unref(Input_default), {
						"model-value": unref(getString)("mcpServers"),
						size: "small",
						type: "textarea",
						rows: 3,
						placeholder: unref(i18n).baseText("instanceAi.settings.mcpServers.placeholder"),
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(store).setField("mcpServers", $event))
					}, null, 8, ["model-value", "placeholder"])]),
					_: 1
				}, 8, ["label"])
			], 2);
		};
	}
});
var AdvancedSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_y74pi_125",
	numberInput: "_numberInput_y74pi_131",
	switchRow: "_switchRow_y74pi_135",
	switchLabel: "_switchLabel_y74pi_142"
};
var AdvancedSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AdvancedSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AdvancedSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/views/SettingsInstanceAiView.vue?vue&type=script&setup=true&lang.ts
var SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceAiView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const settingsStore = useSettingsStore();
		const store = useInstanceAiSettingsStore();
		const isAdmin = computed(() => store.canManage);
		const permissionKeys = [
			{
				key: "createWorkflow",
				labelKey: "settings.n8nAgent.permissions.createWorkflow"
			},
			{
				key: "updateWorkflow",
				labelKey: "settings.n8nAgent.permissions.updateWorkflow"
			},
			{
				key: "runWorkflow",
				labelKey: "settings.n8nAgent.permissions.runWorkflow"
			},
			{
				key: "publishWorkflow",
				labelKey: "settings.n8nAgent.permissions.publishWorkflow"
			},
			{
				key: "deleteWorkflow",
				labelKey: "settings.n8nAgent.permissions.deleteWorkflow"
			},
			{
				key: "deleteCredential",
				labelKey: "settings.n8nAgent.permissions.deleteCredential"
			},
			{
				key: "createFolder",
				labelKey: "settings.n8nAgent.permissions.createFolder"
			},
			{
				key: "deleteFolder",
				labelKey: "settings.n8nAgent.permissions.deleteFolder"
			},
			{
				key: "moveWorkflowToFolder",
				labelKey: "settings.n8nAgent.permissions.moveWorkflowToFolder"
			},
			{
				key: "tagWorkflow",
				labelKey: "settings.n8nAgent.permissions.tagWorkflow"
			},
			{
				key: "createDataTable",
				labelKey: "settings.n8nAgent.permissions.createDataTable"
			},
			{
				key: "mutateDataTableSchema",
				labelKey: "settings.n8nAgent.permissions.mutateDataTableSchema"
			},
			{
				key: "mutateDataTableRows",
				labelKey: "settings.n8nAgent.permissions.mutateDataTableRows"
			},
			{
				key: "cleanupTestExecutions",
				labelKey: "settings.n8nAgent.permissions.cleanupTestExecutions"
			},
			{
				key: "readFilesystem",
				labelKey: "settings.n8nAgent.permissions.readFilesystem"
			},
			{
				key: "fetchUrl",
				labelKey: "settings.n8nAgent.permissions.fetchUrl"
			},
			{
				key: "webSearch",
				labelKey: "settings.n8nAgent.permissions.webSearch"
			},
			{
				key: "restoreWorkflowVersion",
				labelKey: "settings.n8nAgent.permissions.restoreWorkflowVersion"
			}
		];
		const isEnabled = computed(() => store.settings?.enabled ?? settingsStore.moduleSettings?.["instance-ai"]?.enabled ?? false);
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.n8nAgent"));
			store.fetch();
		});
		function handleEnabledToggle(value) {
			store.setField("enabled", Boolean(value));
			store.save();
		}
		function handleComputerUseToggle(value) {
			store.setField("localGatewayDisabled", !Boolean(value));
			store.save();
		}
		function handlePermissionChange(key, value) {
			store.setPermission(key, value);
			store.save();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "n8n-agent-settings"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				class: normalizeClass([_ctx.$style.pageTitle, "mb-2xs"]),
				size: "xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.description")), 1)]),
				_: 1
			})], 2), unref(store).isLoading ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loading)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				spin: ""
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				isAdmin.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.card)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBlock) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.enableSection) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.enable.label")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchDescription) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.enable.description")), 3), createVNode(unref(ElSwitch), {
					"model-value": isEnabled.value,
					disabled: unref(store).isSaving,
					"data-test-id": "n8n-agent-enable-toggle",
					"onUpdate:modelValue": handleEnabledToggle
				}, null, 8, ["model-value", "disabled"])], 2)], 2)], 2)], 2)) : createCommentVNode("", true),
				isEnabled.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					isAdmin.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.card)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRowLeft) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowLabel) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.computerUse.label")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowDescription) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.computerUse.description")), 3)], 2), createVNode(unref(ElSwitch), {
						"model-value": !(unref(store).settings?.localGatewayDisabled ?? false),
						disabled: unref(store).isSaving,
						"data-test-id": "n8n-agent-computer-use-toggle",
						"onUpdate:modelValue": handleComputerUseToggle
					}, null, 8, ["model-value", "disabled"])], 2)], 2)) : createCommentVNode("", true),
					isAdmin.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissionsHeader) }, [createVNode(unref(N8nHeading_default), {
						class: normalizeClass(_ctx.$style.sectionTitle),
						tag: "h3",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.permissions.title")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.permissions.description")), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [(openBlock(), createElementBlock(Fragment, null, renderList(permissionKeys, (perm, index) => {
						return createBaseVNode("div", {
							key: perm.key,
							class: normalizeClass([_ctx.$style.settingsRow, { [_ctx.$style.settingsRowBorder]: index < permissionKeys.length - 1 }])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRowLeft) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowLabel) }, toDisplayString(unref(i18n).baseText(perm.labelKey)), 3)], 2), createVNode(unref(N8nSelect_default), {
							class: normalizeClass(_ctx.$style.permissionSelect),
							"model-value": unref(store).getPermission(perm.key),
							size: "small",
							disabled: unref(store).isSaving,
							"data-test-id": `n8n-agent-permission-${perm.key}`,
							"onUpdate:modelValue": ($event) => handlePermissionChange(perm.key, $event)
						}, {
							default: withCtx(() => [
								createVNode(unref(N8nOption_default), {
									value: "require_approval",
									label: unref(i18n).baseText("settings.n8nAgent.permissions.needsApproval")
								}, null, 8, ["label"]),
								createVNode(unref(N8nOption_default), {
									value: "always_allow",
									label: unref(i18n).baseText("settings.n8nAgent.permissions.alwaysAllow")
								}, null, 8, ["label"]),
								createVNode(unref(N8nOption_default), {
									value: "blocked",
									label: unref(i18n).baseText("settings.n8nAgent.permissions.blocked")
								}, null, 8, ["label"])
							]),
							_: 1
						}, 8, [
							"class",
							"model-value",
							"disabled",
							"data-test-id",
							"onUpdate:modelValue"
						])], 2);
					}), 64))], 2)], 64)) : createCommentVNode("", true),
					!unref(store).isProxyEnabled && !unref(store).isCloudManaged ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.card)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBlock) }, [createVNode(ModelSection_default)], 2)], 2)) : createCommentVNode("", true),
					isAdmin.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
						!unref(store).isProxyEnabled && !unref(store).isCloudManaged ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.card)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBlock) }, [createVNode(SandboxSection_default)], 2)], 2)) : createCommentVNode("", true),
						!unref(store).isCloudManaged ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.card)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBlock) }, [createVNode(MemorySection_default)], 2)], 2)) : createCommentVNode("", true),
						!unref(store).isProxyEnabled ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.card)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBlock) }, [createVNode(SearchSection_default)], 2)], 2)) : createCommentVNode("", true),
						!unref(store).isCloudManaged ? (openBlock(), createElementBlock("div", {
							key: 3,
							class: normalizeClass(_ctx.$style.card)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionBlock) }, [createVNode(AdvancedSection_default)], 2)], 2)) : createCommentVNode("", true)
					], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				unref(store).isDirty ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.footer)
				}, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					label: unref(i18n).baseText("generic.cancel"),
					onClick: _cache[0] || (_cache[0] = ($event) => unref(store).reset())
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("settings.personal.save"),
					loading: unref(store).isSaving,
					onClick: _cache[1] || (_cache[1] = ($event) => unref(store).save())
				}, null, 8, ["label", "loading"])], 2)) : createCommentVNode("", true)
			], 64))], 2);
		};
	}
});
var SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1pj8j_125",
	pageTitle: "_pageTitle_1pj8j_134",
	header: "_header_1pj8j_140",
	loading: "_loading_1pj8j_146",
	card: "_card_1pj8j_154",
	sectionBlock: "_sectionBlock_1pj8j_160",
	settingsRow: "_settingsRow_1pj8j_165",
	settingsRowBorder: "_settingsRowBorder_1pj8j_175",
	settingsRowLeft: "_settingsRowLeft_1pj8j_188",
	settingsRowLabel: "_settingsRowLabel_1pj8j_194",
	settingsRowDescription: "_settingsRowDescription_1pj8j_201",
	sectionTitle: "_sectionTitle_1pj8j_206",
	permissionsHeader: "_permissionsHeader_1pj8j_212",
	permissionSelect: "_permissionSelect_1pj8j_219",
	enableSection: "_enableSection_1pj8j_224",
	switchRow: "_switchRow_1pj8j_230",
	switchDescription: "_switchDescription_1pj8j_237",
	footer: "_footer_1pj8j_242"
};
var SettingsInstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsInstanceAiView_default as default };
