import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-BLjdI0_M.js";
import { Di as N8nTooltip_default, It as ElSwitch, Ji as N8nHeading_default, Mi as N8nIconButton_default, Qi as N8nIcon_default, Xi as N8nText_default, Zi as N8nButton_default, _t as N8nSelect_default, ji as Input_default, q as N8nInputNumber_default, ut as N8nInputLabel_default, vt as N8nOption_default } from "./src-BcKVP470.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Rt as useDocumentTitle, Xa as CREDENTIAL_EDIT_MODAL_KEY, r as useUIStore } from "./users.store--Hq-ujRu.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-Bcg2QZL0.js";
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
		return store.settings?.[key] ?? false;
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
//#region src/features/ai/instanceAi/components/settings/LocalGatewaySection.vue?vue&type=script&setup=true&lang.ts
var LocalGatewaySection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LocalGatewaySection",
	setup(__props) {
		const i18n = useI18n();
		const { store } = useSettingsField();
		const isLocalGatewayDisabled = computed(() => {
			if (store.preferencesDraft.localGatewayDisabled !== void 0) return store.preferencesDraft.localGatewayDisabled;
			return store.preferences?.localGatewayDisabled ?? false;
		});
		const copied = ref(false);
		const displayCommand = computed(() => store.setupCommand ?? "npx @n8n/fs-proxy");
		async function copyCommand() {
			if (!store.setupCommand) return;
			await navigator.clipboard.writeText(store.setupCommand);
			copied.value = true;
			setTimeout(() => {
				copied.value = false;
			}, 2e3);
		}
		const CATEGORY_META = {
			filesystem: {
				icon: "folder-open",
				labelKey: "instanceAi.filesystem.category.filesystem"
			},
			browser: {
				icon: "globe",
				labelKey: "instanceAi.filesystem.category.browser"
			},
			screenshot: {
				icon: "mouse-pointer",
				labelKey: "instanceAi.filesystem.category.computerUse"
			},
			"mouse-keyboard": {
				icon: "mouse-pointer",
				labelKey: "instanceAi.filesystem.category.computerUse"
			},
			shell: {
				icon: "terminal",
				labelKey: "instanceAi.filesystem.category.shell"
			}
		};
		const displayCategories = computed(() => {
			const seen = /* @__PURE__ */ new Set();
			const result = [];
			for (const cat of store.gatewayToolCategories) {
				const meta = CATEGORY_META[cat.name];
				if (!meta) continue;
				const labelKey = meta.labelKey;
				if (seen.has(labelKey)) {
					if (cat.enabled) {
						const existing = result.find((r) => r.label === i18n.baseText(labelKey));
						if (existing) existing.enabled = true;
					}
					continue;
				}
				seen.add(labelKey);
				let sublabel;
				if (cat.name === "filesystem" && cat.enabled) sublabel = cat.writeAccess ? i18n.baseText("instanceAi.filesystem.access.readWrite") : i18n.baseText("instanceAi.filesystem.access.read");
				result.push({
					key: cat.name,
					icon: meta.icon,
					label: i18n.baseText(labelKey),
					enabled: cat.enabled,
					sublabel
				});
			}
			return result.sort((a, b) => Number(b.enabled) - Number(a.enabled));
		});
		onMounted(() => {
			if (!store.isGatewayConnected) store.fetchSetupCommand();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.filesystem.label")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.filesystem.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": !isLocalGatewayDisabled.value,
					disabled: unref(store).isLocalGatewayDisabled,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).setPreferenceField("localGatewayDisabled", !$event))
				}, null, 8, ["model-value", "disabled"])], 2),
				!isLocalGatewayDisabled.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(store).isGatewayConnected ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.connectedBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusRow) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.dot, _ctx.$style.dotConnected]) }, null, 2), createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(store).gatewayHostIdentifier ?? unref(store).gatewayDirectory), 1)]),
						_: 1
					})], 2),
					unref(store).gatewayHostIdentifier && unref(store).gatewayDirectory ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.directoryRow)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(store).gatewayDirectory), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					displayCategories.value.length ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.toolCategories)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayCategories.value, (cat) => {
						return openBlock(), createElementBlock("span", {
							key: cat.key,
							class: normalizeClass([_ctx.$style.categoryPill, !cat.enabled && _ctx.$style.categoryPillDisabled])
						}, [
							createVNode(unref(N8nIcon_default), {
								icon: cat.icon,
								size: "xsmall"
							}, null, 8, ["icon"]),
							createTextVNode(" " + toDisplayString(cat.label) + " ", 1),
							cat.sublabel ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.categorySublabel)
							}, " (" + toDisplayString(cat.sublabel) + ") ", 3)) : createCommentVNode("", true)
						], 2);
					}), 128))], 2)) : createCommentVNode("", true)
				], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(store).isLocalGatewayEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.statusRow)
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.dot, _ctx.$style.dotLocal]) }, null, 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(store).localGatewayFallbackDirectory), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true), unref(store).isDaemonConnecting ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.connectingRow)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.spinner) }, null, 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.filesystem.connectWaiting")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.setupBlock)
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.filesystem.setupCommand")), 1)]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.commandBlock) }, [createBaseVNode("code", { class: normalizeClass(_ctx.$style.commandText) }, toDisplayString(displayCommand.value), 3), createVNode(unref(N8nTooltip_default), { content: copied.value ? unref(i18n).baseText("instanceAi.filesystem.copied") : "Copy" }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: copied.value ? "check" : "copy",
							variant: "ghost",
							size: "mini",
							onClick: copyCommand
						}, null, 8, ["icon"])]),
						_: 1
					}, 8, ["content"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.connectingRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.spinner) }, null, 2), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.filesystem.connectWaiting")), 1)]),
						_: 1
					})], 2)
				], 2))], 64))], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var LocalGatewaySection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_fyhln_125",
	switchRow: "_switchRow_fyhln_131",
	switchLabel: "_switchLabel_fyhln_138",
	connectedBlock: "_connectedBlock_fyhln_143",
	statusRow: "_statusRow_fyhln_152",
	directoryRow: "_directoryRow_fyhln_158",
	toolCategories: "_toolCategories_fyhln_162",
	categoryPill: "_categoryPill_fyhln_169",
	categoryPillDisabled: "_categoryPillDisabled_fyhln_181",
	categorySublabel: "_categorySublabel_fyhln_185",
	dot: "_dot_fyhln_189",
	dotConnected: "_dotConnected_fyhln_196",
	dotLocal: "_dotLocal_fyhln_200",
	connectingRow: "_connectingRow_fyhln_212",
	spinner: "_spinner_fyhln_218",
	spin: "_spin_fyhln_218",
	setupBlock: "_setupBlock_fyhln_232",
	commandBlock: "_commandBlock_fyhln_241",
	commandText: "_commandText_fyhln_251",
	pulse: "_pulse_fyhln_1"
};
var LocalGatewaySection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LocalGatewaySection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LocalGatewaySection_vue_vue_type_style_index_0_lang_module_default }]]);
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
//#region src/features/ai/instanceAi/components/settings/PermissionsSection.vue?vue&type=script&setup=true&lang.ts
var PermissionsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PermissionsSection",
	setup(__props) {
		const i18n = useI18n();
		const store = useInstanceAiSettingsStore();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.section.permissions")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissionDescription) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.description")), 3),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.createWorkflow.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("createWorkflow") === "always_allow",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).setPermission("createWorkflow", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.updateWorkflow.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("updateWorkflow") === "always_allow",
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(store).setPermission("updateWorkflow", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.runWorkflow.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("runWorkflow") === "always_allow",
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(store).setPermission("runWorkflow", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.publishWorkflow.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("publishWorkflow") === "always_allow",
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(store).setPermission("publishWorkflow", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.deleteWorkflow.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("deleteWorkflow") === "always_allow",
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(store).setPermission("deleteWorkflow", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.deleteCredential.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("deleteCredential") === "always_allow",
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(store).setPermission("deleteCredential", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.deleteDataTable.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("deleteDataTable") === "always_allow",
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(store).setPermission("deleteDataTable", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.switchRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switchLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.settings.permissions.fetchUrl.label")), 3), createVNode(unref(ElSwitch), {
					"model-value": unref(store).getPermission("fetchUrl") === "always_allow",
					"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(store).setPermission("fetchUrl", $event ? "always_allow" : "require_approval"))
				}, null, 8, ["model-value"])], 2)
			], 2);
		};
	}
});
var PermissionsSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_1ewft_125",
	permissionDescription: "_permissionDescription_1ewft_131",
	switchRow: "_switchRow_1ewft_137",
	switchLabel: "_switchLabel_1ewft_144"
};
var PermissionsSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PermissionsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PermissionsSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/views/SettingsInstanceAiView.vue?vue&type=script&setup=true&lang.ts
var SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceAiView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const store = useInstanceAiSettingsStore();
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.instanceAi"));
		});
		watch(() => store.settings, (val) => {
			if (!val) store.fetch();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-settings"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					size: "2xlarge",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.instanceAi")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.instanceAi.description")), 1)]),
					_: 1
				})], 2),
				unref(store).isLoading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					spin: ""
				})], 2)) : unref(store).settings ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.sections)
				}, [
					!unref(store).isProxyEnabled ? (openBlock(), createBlock(ModelSection_default, { key: 0 })) : createCommentVNode("", true),
					createVNode(MemorySection_default),
					createVNode(LocalGatewaySection_default),
					!unref(store).isProxyEnabled ? (openBlock(), createBlock(SandboxSection_default, { key: 1 })) : createCommentVNode("", true),
					!unref(store).isProxyEnabled ? (openBlock(), createBlock(SearchSection_default, { key: 2 })) : createCommentVNode("", true),
					createVNode(AdvancedSection_default),
					createVNode(PermissionsSection_default)
				], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					size: "large",
					disabled: !unref(store).isDirty || unref(store).isSaving,
					loading: unref(store).isSaving,
					onClick: _cache[0] || (_cache[0] = ($event) => unref(store).save())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.save")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"]), createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "large",
					disabled: !unref(store).isDirty || unref(store).isSaving,
					onClick: _cache[1] || (_cache[1] = ($event) => unref(store).reset())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.settings.reset")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			], 2);
		};
	}
});
var SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_2hcni_125",
	header: "_header_2hcni_130",
	loading: "_loading_2hcni_136",
	sections: "_sections_2hcni_144",
	footer: "_footer_2hcni_151"
};
var SettingsInstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsInstanceAiView_default as default };
