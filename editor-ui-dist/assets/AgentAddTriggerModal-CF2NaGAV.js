import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, f as vModelText, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-BxlYlwM1.js";
import { Ct as N8nSelect_default, Ga as N8nHeading_default, Ja as N8nButton_default, Ka as N8nCallout_default, Ot as N8nCollapsiblePanel_default, Ui as Input_default, Ya as N8nIcon_default, qa as N8nText_default, wt as N8nOption_default } from "./src-BY3LHeey.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Cn as useProjectsStore, Nt as useCredentialsStore } from "./workflows.store-BKCVa7q0.js";
import { Cl as getResourcePermissions, Fi as MODAL_CONFIRM } from "./constants-CLQJMg7Y.js";
import { t as useRootStore } from "./useRootStore-BXKn7r8-.js";
import { f as useUIStore } from "./users.store-AINJEAwY.js";
import { t as Modal_default } from "./Modal-Ylm2K_Ju.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-NlHvli6z.js";
import { T as publishAgent, s as createSlackAgentApp, y as getSlackAgentAppManifest } from "./useAgentApi-C_WfBtvk.js";
import { n as useAgentIntegrationStatus, r as useAgentIntegrationsCatalog } from "./useAgentIntegrationStatus-Ug1D1UlN.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-BtvjMhHN.js";
//#endregion
//#region src/features/agents/components/AgentCredentialSelect.vue
var AgentCredentialSelect_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCredentialSelect",
	props: {
		modelValue: {},
		credentials: {},
		placeholder: {},
		dataTestId: {},
		credentialPermissions: {},
		loading: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: ["update:modelValue", "create"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const credentialOptions = computed(() => [...props.credentials].sort((a, b) => {
			const byName = a.name.localeCompare(b.name, void 0, { sensitivity: "base" });
			return byName === 0 ? a.id.localeCompare(b.id) : byName;
		}).map((credential) => ({
			id: credential.id,
			name: credential.name,
			typeDisplayName: credential.typeDisplayName,
			homeProject: credential.homeProject
		})));
		function onCredentialSelected(credentialId) {
			emit("update:modelValue", credentialId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CredentialsDropdown_default, {
				"credential-options": credentialOptions.value,
				"selected-credential-id": __props.modelValue ?? null,
				permissions: __props.credentialPermissions,
				placeholder: __props.placeholder,
				loading: __props.loading,
				disabled: __props.disabled,
				"data-test-id": __props.dataTestId,
				onCredentialSelected,
				onNewCredential: _cache[0] || (_cache[0] = ($event) => emit("create"))
			}, null, 8, [
				"credential-options",
				"selected-credential-id",
				"permissions",
				"placeholder",
				"loading",
				"disabled",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentIntegrationCredentialConnection.vue?vue&type=script&setup=true&lang.ts
var AgentIntegrationCredentialConnection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentIntegrationCredentialConnection",
	props: {
		integrationType: {},
		integrationLabel: {},
		modelValue: { default: void 0 },
		credentials: {},
		credentialPermissions: {},
		credentialsLoading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		connected: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		publishing: {
			type: Boolean,
			default: false
		},
		showConnectButton: {
			type: Boolean,
			default: false
		},
		showDisconnectButton: {
			type: Boolean,
			default: false
		},
		showEditButton: {
			type: Boolean,
			default: true
		},
		errorMessage: { default: "" },
		errorIsConflict: {
			type: Boolean,
			default: false
		},
		connectedDescription: { default: "" }
	},
	emits: [
		"update:modelValue",
		"create",
		"edit",
		"connect",
		"disconnect"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const canEdit = computed(() => props.showEditButton && !props.connected && !!props.modelValue);
		const connectDisabled = computed(() => !props.modelValue || props.loading || props.publishing || props.disabled);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.connectForm) }, [
				createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.integrationLabel) + " " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.credential")), 1)]),
					_: 1
				})], 2),
				__props.connectedDescription ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.connectedDescription),
					size: "small",
					"data-testid": `${__props.integrationType}-connected-description`
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.connectedDescription), 1)]),
					_: 1
				}, 8, ["class", "data-testid"])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.selectRow) }, [
					createVNode(AgentCredentialSelect_default, {
						"model-value": __props.modelValue,
						class: normalizeClass(_ctx.$style.select),
						placeholder: unref(i18n).baseText("agents.builder.addTrigger.selectCredential"),
						credentials: __props.credentials,
						"credential-permissions": __props.credentialPermissions,
						loading: __props.credentialsLoading,
						disabled: __props.disabled,
						"data-test-id": `${__props.integrationType}-credential-select`,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
						onCreate: _cache[1] || (_cache[1] = ($event) => emit("create"))
					}, null, 8, [
						"model-value",
						"class",
						"placeholder",
						"credentials",
						"credential-permissions",
						"loading",
						"disabled",
						"data-test-id"
					]),
					canEdit.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "outline",
						size: "small",
						icon: "pen",
						"aria-label": unref(i18n).baseText("agents.builder.addTrigger.editCredential"),
						"data-testid": `${__props.integrationType}-edit-credential`,
						onClick: _cache[2] || (_cache[2] = ($event) => emit("edit"))
					}, null, 8, ["aria-label", "data-testid"])) : createCommentVNode("", true),
					__props.showDisconnectButton ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "destructive",
						loading: __props.loading,
						size: "small",
						"data-testid": `${__props.integrationType}-disconnect-button`,
						onClick: _cache[3] || (_cache[3] = ($event) => emit("disconnect"))
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "unlink",
							size: "xsmall"
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.disconnect")), 1)]),
						_: 1
					}, 8, ["loading", "data-testid"])) : createCommentVNode("", true),
					__props.showConnectButton ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 2,
						variant: "solid",
						disabled: connectDisabled.value,
						loading: __props.loading || __props.publishing,
						size: "small",
						"data-testid": `${__props.integrationType}-connect-button`,
						onClick: _cache[4] || (_cache[4] = ($event) => emit("connect"))
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "plug",
							size: "xsmall"
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.connect")), 1)]),
						_: 1
					}, 8, [
						"disabled",
						"loading",
						"data-testid"
					])) : createCommentVNode("", true)
				], 2),
				__props.errorMessage ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.errorText),
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.errorMessage) + " ", 1), __props.modelValue && !__props.errorIsConflict ? (openBlock(), createElementBlock("a", {
						key: 0,
						class: normalizeClass(_ctx.$style.link),
						href: "#",
						onClick: _cache[5] || (_cache[5] = withModifiers(($event) => emit("edit"), ["prevent"]))
					}, toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.editCredential")), 3)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentIntegrationCredentialConnection_vue_vue_type_style_index_0_lang_module_default = {
	connectForm: "_connectForm_1wdtb_125",
	label: "_label_1wdtb_131",
	selectRow: "_selectRow_1wdtb_135",
	select: "_select_1wdtb_135",
	connectedDescription: "_connectedDescription_1wdtb_146",
	errorText: "_errorText_1wdtb_150",
	link: "_link_1wdtb_154"
};
var AgentIntegrationCredentialConnection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentIntegrationCredentialConnection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentIntegrationCredentialConnection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/utils/telegramAccessSettings.ts
var DEFAULT_TELEGRAM_PUBLIC_SETTINGS = {
	accessMode: "public",
	allowedUsers: []
};
/**
* Resolve the form's "saved" state for a Telegram integration. Returns the
* stored settings when present, the legacy public default for connected
* integrations missing settings, and `undefined` for unconnected setups so the
* form starts in private mode.
*/
function resolveSavedTelegramSettings(settings, connected) {
	if (!connected) return void 0;
	return settings ?? DEFAULT_TELEGRAM_PUBLIC_SETTINGS;
}
var VALID_TELEGRAM_ENTRY_RE = /^@?[a-zA-Z0-9_]+$/;
//#endregion
//#region src/features/agents/components/AgentTelegramAccessSettingsForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label", "onClick"];
var _hoisted_2$1 = ["disabled", "placeholder"];
var AgentTelegramAccessSettingsForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentTelegramAccessSettingsForm",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		savedSettings: { default: void 0 }
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const i18n = useI18n();
		const accessMode = ref(props.savedSettings?.accessMode ?? "private");
		const entries = ref(props.savedSettings?.allowedUsers.slice() ?? []);
		const inputText = ref("");
		const inputRef = ref();
		watch(() => props.savedSettings, (saved) => {
			if (!saved) return;
			accessMode.value = saved.accessMode;
			entries.value = saved.allowedUsers.slice();
			inputText.value = "";
		});
		function finalizeInput() {
			const raw = inputText.value.trim();
			if (!raw) return;
			const tokens = raw.split(/[\s,]+/).filter(Boolean);
			const unique = new Set(entries.value);
			for (const token of tokens) unique.add(token);
			entries.value = [...unique];
			inputText.value = "";
		}
		function removeEntry(index) {
			entries.value = entries.value.filter((_, i) => i !== index);
			nextTick(() => inputRef.value?.focus());
		}
		function onKeydown(e) {
			if (e.key === "," || e.key === " " || e.key === "Enter") {
				e.preventDefault();
				finalizeInput();
			}
			if (e.key === "Backspace" && inputText.value === "" && entries.value.length > 0) entries.value = entries.value.slice(0, -1);
		}
		function onPaste(e) {
			e.preventDefault();
			const pasted = e.clipboardData?.getData("text") ?? "";
			inputText.value += pasted;
			finalizeInput();
		}
		function onContainerClick() {
			inputRef.value?.focus();
		}
		const currentSettings = computed(() => ({
			accessMode: accessMode.value,
			allowedUsers: [...new Set(entries.value.filter(Boolean))]
		}));
		const invalidEntries = computed(() => entries.value.filter((entry) => !VALID_TELEGRAM_ENTRY_RE.test(entry)));
		const validationError = computed(() => {
			if (currentSettings.value.accessMode === "public") return null;
			if (invalidEntries.value.length > 0) return "invalid";
			if (entries.value.length === 0) return "required";
			return null;
		});
		const validationErrorText = computed(() => {
			if (validationError.value === "invalid") return i18n.baseText("agents.builder.addTrigger.telegram.validation.invalid");
			if (validationError.value === "required") return i18n.baseText("agents.builder.addTrigger.telegram.validation.required");
			return "";
		});
		__expose({
			currentSettings,
			validationError,
			isDirty: computed(() => {
				const saved = props.savedSettings ?? DEFAULT_TELEGRAM_PUBLIC_SETTINGS;
				const current = currentSettings.value;
				if (current.accessMode !== saved.accessMode) return true;
				if (current.allowedUsers.length !== saved.allowedUsers.length) return true;
				return current.allowedUsers.some((entry, i) => entry !== saved.allowedUsers[i]);
			})
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.form) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(N8nText_default), {
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.telegram.accessMode.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nSelect_default), {
				modelValue: accessMode.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => accessMode.value = $event),
				size: "medium",
				disabled: __props.disabled,
				"data-testid": "telegram-access-mode"
			}, {
				default: withCtx(() => [createVNode(unref(N8nOption_default), {
					value: "private",
					label: unref(i18n).baseText("agents.builder.addTrigger.telegram.accessMode.private")
				}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
					value: "public",
					label: unref(i18n).baseText("agents.builder.addTrigger.telegram.accessMode.public")
				}, null, 8, ["label"])]),
				_: 1
			}, 8, ["modelValue", "disabled"])], 2), accessMode.value === "private" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.field)
			}, [
				createVNode(unref(N8nText_default), {
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.telegram.users.label")), 1)]),
					_: 1
				}),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.tagInput, { [_ctx.$style.tagInputDisabled]: __props.disabled }]),
					"data-testid": "telegram-user-ids",
					onClick: onContainerClick
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(entries.value, (entry, idx) => {
					return openBlock(), createElementBlock("span", {
						key: entry + idx,
						class: normalizeClass([_ctx.$style.badge, { [_ctx.$style.badgeInvalid]: !unref(VALID_TELEGRAM_ENTRY_RE).test(entry) }])
					}, [createTextVNode(toDisplayString(entry) + " ", 1), !__props.disabled ? (openBlock(), createElementBlock("button", {
						key: 0,
						class: normalizeClass(_ctx.$style.badgeRemove),
						type: "button",
						"aria-label": "Remove " + entry,
						onClick: withModifiers(($event) => removeEntry(idx), ["stop"])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "x",
						size: "small"
					})], 10, _hoisted_1$1)) : createCommentVNode("", true)], 2);
				}), 128)), withDirectives(createBaseVNode("input", {
					ref_key: "inputRef",
					ref: inputRef,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputText.value = $event),
					class: normalizeClass(_ctx.$style.tagInputField),
					disabled: __props.disabled,
					placeholder: entries.value.length === 0 ? unref(i18n).baseText("agents.builder.addTrigger.telegram.users.placeholder") : "",
					onKeydown,
					onPaste,
					onBlur: finalizeInput
				}, null, 42, _hoisted_2$1), [[vModelText, inputText.value]])], 2),
				validationError.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.error),
					size: "small",
					"data-testid": "telegram-user-ids-error"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(validationErrorText.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2)) : (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.warning),
				theme: "warning",
				slim: "",
				"data-testid": "telegram-public-warning"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.telegram.public.warning")), 1)]),
				_: 1
			}, 8, ["class"]))], 2);
		};
	}
});
var AgentTelegramAccessSettingsForm_vue_vue_type_style_index_0_lang_module_default = {
	form: "_form_e515o_125",
	field: "_field_e515o_131",
	warning: "_warning_e515o_137",
	error: "_error_e515o_141",
	tagInput: "_tagInput_e515o_145",
	tagInputDisabled: "_tagInputDisabled_e515o_161",
	tagInputField: "_tagInputField_e515o_166",
	badge: "_badge_e515o_180",
	badgeInvalid: "_badgeInvalid_e515o_195",
	badgeRemove: "_badgeRemove_e515o_200"
};
var AgentTelegramAccessSettingsForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentTelegramAccessSettingsForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentTelegramAccessSettingsForm_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSlackSettingsForm.vue?vue&type=script&setup=true&lang.ts
var AgentSlackSettingsForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSlackSettingsForm",
	props: {
		agentName: {},
		projectId: {},
		agentId: {},
		connected: { type: Boolean },
		disabled: { type: Boolean },
		setupSlackApp: { type: Function }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const manifestCopied = ref(false);
		const appConfigurationToken = ref("");
		const setupLoading = ref(false);
		const setupError = ref(false);
		const manualConfigurationOpen = ref(false);
		const slackAppManifest = ref("");
		const manifestLoading = ref(false);
		const manifestError = ref(false);
		async function copyManifest() {
			if (!slackAppManifest.value) return;
			await navigator.clipboard.writeText(slackAppManifest.value);
			manifestCopied.value = true;
			setTimeout(() => {
				manifestCopied.value = false;
			}, 2e3);
		}
		async function loadSlackAppManifest() {
			manifestLoading.value = true;
			manifestError.value = false;
			try {
				const { manifest } = await getSlackAgentAppManifest(rootStore.restApiContext, props.projectId, props.agentId);
				slackAppManifest.value = JSON.stringify(manifest, null, 2);
			} catch {
				slackAppManifest.value = "";
				manifestError.value = true;
			} finally {
				manifestLoading.value = false;
			}
		}
		async function createSlackApp() {
			const token = appConfigurationToken.value.trim();
			if (!token || !props.setupSlackApp || props.disabled || props.connected) return;
			setupLoading.value = true;
			setupError.value = false;
			try {
				if (await props.setupSlackApp(token)) appConfigurationToken.value = "";
			} catch {
				setupError.value = true;
			} finally {
				setupLoading.value = false;
			}
		}
		watch(() => [
			props.projectId,
			props.agentId,
			props.connected
		], () => {
			if (!props.connected) loadSlackAppManifest();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.slackSettings) }, [!__props.connected ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.setupSection)
			}, [
				createVNode(unref(N8nText_default), {
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.setup.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.setupHint),
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.setup.hint")) + " ", 1), createBaseVNode("a", {
						href: "https://api.slack.com/apps",
						target: "_blank",
						rel: "noopener noreferrer",
						class: normalizeClass(_ctx.$style.docsLink),
						"data-testid": "slack-app-configuration-token-link"
					}, toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.setup.tokenLink")), 3)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.setupInputRow) }, [createVNode(unref(Input_default), {
					modelValue: appConfigurationToken.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appConfigurationToken.value = $event),
					class: normalizeClass(_ctx.$style.setupInput),
					type: "password",
					size: "medium",
					placeholder: unref(i18n).baseText("agents.builder.addTrigger.slack.setup.tokenPlaceholder"),
					"data-testid": "slack-app-configuration-token",
					disabled: __props.disabled || setupLoading.value,
					onKeydown: withKeys(withModifiers(createSlackApp, ["prevent"]), ["enter"])
				}, null, 8, [
					"modelValue",
					"class",
					"placeholder",
					"disabled",
					"onKeydown"
				]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					loading: setupLoading.value,
					disabled: !appConfigurationToken.value.trim() || __props.disabled || setupLoading.value || !__props.setupSlackApp,
					"data-testid": "slack-create-app",
					onClick: createSlackApp
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "plus",
						size: "xsmall"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.setup.button")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])], 2),
				setupError.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.setupError),
					size: "small",
					"data-testid": "slack-app-setup-error"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.setup.error")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), !__props.connected ? (openBlock(), createBlock(unref(N8nCollapsiblePanel_default), {
				key: 1,
				modelValue: manualConfigurationOpen.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => manualConfigurationOpen.value = $event),
				class: normalizeClass(_ctx.$style.manualPanel),
				title: unref(i18n).baseText("agents.builder.addTrigger.slack.manual.title"),
				"show-actions-on-hover": false,
				"disable-animation": true,
				"data-testid": "slack-manual-configuration"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.manualConfiguration) }, [
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.manualDescription),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manual.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.manifestSection) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manifestTitle")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.manifestHint),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manifestHint")) + " ", 1), createBaseVNode("a", {
								href: "https://docs.slack.dev/app-manifests/configuring-apps-with-app-manifests",
								target: "_blank",
								rel: "noopener noreferrer",
								class: normalizeClass(_ctx.$style.docsLink)
							}, toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.docsCalloutLink")), 3)]),
							_: 1
						}, 8, ["class"]),
						manifestLoading.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.manifestHint),
							size: "small",
							"data-testid": "slack-manifest-loading"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manifestLoading")), 1)]),
							_: 1
						}, 8, ["class"])) : manifestError.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							class: normalizeClass(_ctx.$style.setupError),
							size: "small",
							"data-testid": "slack-manifest-error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.slack.manifestError")), 1)]),
							_: 1
						}, 8, ["class"])) : (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.codeBlock)
						}, [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							class: normalizeClass(_ctx.$style.codeBlockCopy),
							disabled: !slackAppManifest.value,
							"data-testid": "slack-copy-manifest",
							onClick: copyManifest
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: manifestCopied.value ? "check" : "copy",
								size: "xsmall"
							}, null, 8, ["icon"])]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(manifestCopied.value ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy")), 1)]),
							_: 1
						}, 8, ["class", "disabled"]), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.manifestCode) }, toDisplayString(slackAppManifest.value), 3)], 2))
					], 2),
					renderSlot(_ctx.$slots, "manualConfiguration")
				], 2)]),
				_: 3
			}, 8, [
				"modelValue",
				"class",
				"title"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentSlackSettingsForm_vue_vue_type_style_index_0_lang_module_default = {
	slackSettings: "_slackSettings_xzt9l_125",
	setupSection: "_setupSection_xzt9l_131",
	manualConfiguration: "_manualConfiguration_xzt9l_138",
	manualPanel: "_manualPanel_xzt9l_145",
	manualDescription: "_manualDescription_xzt9l_149",
	manifestSection: "_manifestSection_xzt9l_153",
	setupHint: "_setupHint_xzt9l_159",
	setupInputRow: "_setupInputRow_xzt9l_163",
	setupInput: "_setupInput_xzt9l_163",
	setupError: "_setupError_xzt9l_175",
	docsCallout: "_docsCallout_xzt9l_179",
	docsLink: "_docsLink_xzt9l_183",
	manifestHint: "_manifestHint_xzt9l_188",
	codeBlock: "_codeBlock_xzt9l_192",
	codeBlockCopy: "_codeBlockCopy_xzt9l_201",
	manifestCode: "_manifestCode_xzt9l_208"
};
var AgentSlackSettingsForm_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSlackSettingsForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSlackSettingsForm_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentIntegrationSettingsForm.vue
var AgentIntegrationSettingsForm_default = /* @__PURE__ */ defineComponent({
	__name: "AgentIntegrationSettingsForm",
	props: {
		type: {},
		disabled: {
			type: Boolean,
			default: false
		},
		connected: {
			type: Boolean,
			default: false
		},
		savedSettings: { default: void 0 },
		agentName: { default: "" },
		projectId: { default: "" },
		agentId: { default: "" },
		setupSlackApp: {
			type: Function,
			default: void 0
		}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const telegramFormRef = ref();
		const telegramSavedSettings = computed(() => resolveSavedTelegramSettings(props.savedSettings, props.connected));
		const currentSettings = computed(() => telegramFormRef.value?.currentSettings);
		const validationError = computed(() => telegramFormRef.value?.validationError ?? null);
		const isDirty = computed(() => telegramFormRef.value?.isDirty ?? false);
		watch(() => props.type, () => {
			telegramFormRef.value = void 0;
		});
		__expose({
			currentSettings,
			validationError,
			isDirty
		});
		return (_ctx, _cache) => {
			return props.type === "telegram" ? (openBlock(), createBlock(AgentTelegramAccessSettingsForm_default, {
				key: 0,
				ref_key: "telegramFormRef",
				ref: telegramFormRef,
				disabled: __props.disabled,
				"saved-settings": telegramSavedSettings.value
			}, null, 8, ["disabled", "saved-settings"])) : props.type === "slack" ? (openBlock(), createBlock(AgentSlackSettingsForm_default, {
				key: 1,
				"agent-name": __props.agentName,
				"project-id": __props.projectId,
				"agent-id": __props.agentId,
				connected: __props.connected,
				disabled: __props.disabled,
				"setup-slack-app": __props.setupSlackApp
			}, {
				manualConfiguration: withCtx(() => [renderSlot(_ctx.$slots, "manualConfiguration")]),
				_: 3
			}, 8, [
				"agent-name",
				"project-id",
				"agent-id",
				"connected",
				"disabled",
				"setup-slack-app"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentAddTriggerModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["value"];
var _hoisted_2 = ["value"];
var LINEAR_APP_SETUP_URL = "https://linear.app/settings/api/applications/new";
var SLACK_APP_SETUP_POLL_INTERVAL_MS = 2e3;
var SLACK_APP_SETUP_TIMEOUT_MS = 120 * 1e3;
var AgentAddTriggerModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentAddTriggerModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		/**
		* Add trigger modal — a single dropdown picker (with icons) at the top, and
		* the selected trigger's configuration rendered inline below. One config is
		* visible at a time so the modal doesn't need to scroll.
		*/
		const props = __props;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const { catalog, ensureLoaded } = useAgentIntegrationsCatalog();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const publishedDuringSession = ref(false);
		const isPublishedLocal = computed(() => publishedDuringSession.value || props.data.isPublished);
		const integrations = ref([]);
		const selectedTriggerType = ref(props.data.initialTriggerType ?? "");
		const { statuses, connectedCredentials, integrationSettings, loadingMap, errorMessages, errorIsConflict, fetchStatus: fetchStatusShared, connect, disconnect, isConnected } = useAgentIntegrationStatus(props.data.projectId, props.data.agentId);
		const selectedCredentials = ref({});
		const credentialsByType = ref({});
		const credentialsLoading = ref(false);
		const publishing = ref(false);
		const settingsFormRef = ref();
		const credentialIdsBeforeNew = ref({});
		const pendingNewCredentialType = ref(null);
		const linearCopiedField = ref(null);
		const currentIntegration = computed(() => integrations.value.find((i) => i.type === selectedTriggerType.value) ?? null);
		const projectForPermissions = computed(() => {
			if (projectsStore.currentProject?.id === props.data.projectId) return projectsStore.currentProject;
			if (projectsStore.personalProject?.id === props.data.projectId) return projectsStore.personalProject;
			return projectsStore.myProjects.find((project) => project.id === props.data.projectId) ?? null;
		});
		const credentialPermissions = computed(() => {
			const permissions = getResourcePermissions(projectForPermissions.value?.scopes).credential;
			return {
				...permissions,
				create: !!permissions.create
			};
		});
		function toIconName(icon) {
			return icon;
		}
		const selectedIcon = computed(() => {
			if (!selectedTriggerType.value) return null;
			const icon = currentIntegration.value?.icon;
			return icon ? toIconName(icon) : null;
		});
		function isLoading(type) {
			return loadingMap.value[type] ?? false;
		}
		function hasError(type) {
			return (errorMessages.value[type] ?? "").length > 0;
		}
		const CONNECTED_TEXT_KEYS = {
			slack: "agents.builder.addTrigger.connectedText.slack",
			telegram: "agents.builder.addTrigger.connectedText.telegram",
			linear: "agents.builder.addTrigger.connectedText.linear"
		};
		function integrationConnectedText(type) {
			const key = CONNECTED_TEXT_KEYS[type];
			return key ? i18n.baseText(key) : "";
		}
		function webhookUrlFor(platform) {
			return `${rootStore.urlBaseWebhook.replace(/\/$/, "")}/rest/projects/${props.data.projectId}/agents/v2/${props.data.agentId}/webhooks/${platform}`;
		}
		function oauthCallbackUrl() {
			return rootStore.OAuthCallbackUrls?.oauth2 ?? "";
		}
		function linearUrlFor(field) {
			return field === "oauthCallback" ? oauthCallbackUrl() : webhookUrlFor("linear");
		}
		async function copyLinearUrl(field) {
			await navigator.clipboard.writeText(linearUrlFor(field));
			linearCopiedField.value = field;
			setTimeout(() => {
				if (linearCopiedField.value === field) linearCopiedField.value = null;
			}, 2e3);
		}
		function linearCopyLabel(field) {
			return linearCopiedField.value === field ? i18n.baseText("agents.builder.addTrigger.copied") : i18n.baseText("agents.builder.addTrigger.copy");
		}
		function computeConnectedTriggers() {
			return Object.keys(statuses.value).filter((t) => statuses.value[t] === "connected").sort();
		}
		function emitConnectedTriggers() {
			props.data.onConnectedTriggersChange(computeConnectedTriggers());
		}
		async function fetchStatus() {
			await fetchStatusShared(integrations.value.map((integration) => integration.type));
			emitConnectedTriggers();
		}
		async function fetchCredentials() {
			credentialsLoading.value = true;
			try {
				credentialsStore.setCredentials([]);
				const allCredentials = await credentialsStore.fetchAllCredentialsForWorkflow({ projectId: props.data.projectId });
				for (const integration of integrations.value) credentialsByType.value[integration.type] = allCredentials.filter((c) => integration.credentialTypes.includes(c.type)).map((c) => ({
					id: c.id,
					name: c.name,
					typeDisplayName: credentialsStore.getCredentialTypeByName(c.type)?.displayName,
					homeProject: c.homeProject
				}));
			} catch {
				for (const integration of integrations.value) credentialsByType.value[integration.type] = [];
			} finally {
				credentialsLoading.value = false;
			}
		}
		async function confirmPublishIfNeeded() {
			if (isPublishedLocal.value) return true;
			return await openAgentConfirmationModal({
				title: i18n.baseText("agents.builder.addTrigger.publishPrompt.title"),
				description: i18n.baseText("agents.builder.addTrigger.publishPrompt.description"),
				confirmButtonText: i18n.baseText("agents.builder.addTrigger.publishPrompt.confirm"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) === MODAL_CONFIRM;
		}
		async function ensurePublished() {
			if (isPublishedLocal.value) return true;
			if (!await confirmPublishIfNeeded()) return false;
			publishing.value = true;
			try {
				const updated = await publishAgent(rootStore.restApiContext, props.data.projectId, props.data.agentId);
				publishedDuringSession.value = true;
				props.data.onAgentPublished?.(updated);
				return true;
			} finally {
				publishing.value = false;
			}
		}
		async function onConnect(type) {
			const credId = selectedCredentials.value[type];
			if (!credId) return;
			if (settingsFormRef.value?.validationError) return;
			const settings = settingsFormRef.value?.currentSettings;
			const needsPublish = !isPublishedLocal.value;
			if (!await confirmPublishIfNeeded()) return;
			let connected = false;
			try {
				const result = await connect(type, credId, settings);
				connected = true;
				if (needsPublish && result.agent) {
					publishedDuringSession.value = true;
					props.data.onAgentPublished?.(result.agent);
				}
				const triggers = computeConnectedTriggers();
				props.data.onTriggerAdded({
					triggerType: type,
					triggers
				});
				emitConnectedTriggers();
			} catch {}
			if (connected) await props.data.onAgentChanged?.();
		}
		function openSlackAppAuthorizationPopup(installUrl) {
			const parsedUrl = new URL(installUrl);
			if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error("Invalid Slack installation URL");
			return window.open(parsedUrl.toString(), "Slack App Authorization", "scrollbars=no,resizable=yes,status=no,titlebar=no,location=no,toolbar=no,menubar=no,width=500,height=700,noopener");
		}
		async function waitForSlackAppSetupCompletion(popup) {
			return await new Promise((resolve) => {
				const oauthChannel = new BroadcastChannel("oauth-callback");
				let pollInFlight = false;
				let settled = false;
				const closePopup = () => {
					if (!popup) return;
					try {
						popup.close();
					} catch {}
				};
				const settle = (success) => {
					if (settled) return;
					settled = true;
					window.clearInterval(pollInterval);
					window.clearTimeout(timeout);
					oauthChannel.close();
					if (success) closePopup();
					resolve(success);
				};
				const pollStatus = async () => {
					if (pollInFlight || settled) return;
					pollInFlight = true;
					try {
						await fetchStatus();
						if (isConnected("slack")) settle(true);
					} finally {
						pollInFlight = false;
					}
				};
				const pollInterval = window.setInterval(() => void pollStatus(), SLACK_APP_SETUP_POLL_INTERVAL_MS);
				const timeout = window.setTimeout(() => settle(false), SLACK_APP_SETUP_TIMEOUT_MS);
				oauthChannel.addEventListener("message", (event) => {
					settle(event.data === "success");
				});
				pollStatus();
			});
		}
		async function onSetupSlackApp(appConfigurationToken) {
			if (!await ensurePublished()) return false;
			const { installUrl } = await createSlackAgentApp(rootStore.restApiContext, props.data.projectId, props.data.agentId, appConfigurationToken);
			if (!await waitForSlackAppSetupCompletion(openSlackAppAuthorizationPopup(installUrl))) throw new Error("Slack app installation was not completed");
			await Promise.all([fetchStatus(), fetchCredentials()]);
			props.data.onTriggerAdded({
				triggerType: "slack",
				triggers: computeConnectedTriggers()
			});
			await props.data.onAgentChanged?.();
			return true;
		}
		async function onDisconnect(type) {
			const credId = connectedCredentials.value[type] || selectedCredentials.value[type];
			if (!credId) return;
			await disconnect(type, credId);
			selectedCredentials.value[type] = "";
			emitConnectedTriggers();
			await props.data.onAgentChanged?.();
		}
		function onCreateCredential(integration) {
			const [primaryCredentialType] = integration.credentialTypes;
			if (!primaryCredentialType) return;
			const existing = credentialsByType.value[integration.type] ?? [];
			credentialIdsBeforeNew.value[integration.type] = new Set(existing.map((c) => c.id));
			pendingNewCredentialType.value = integration.type;
			uiStore.openNewCredential(primaryCredentialType, false, false, props.data.projectId, void 0, void 0, void 0, { hideAskAssistant: true });
		}
		function onEditCredential(type) {
			const credId = selectedCredentials.value[type];
			if (credId) uiStore.openExistingCredential(credId, { hideAskAssistant: true });
		}
		watch(computed(() => uiStore.isModalActiveById["editCredential"] ?? false), async (isOpen, wasOpen) => {
			if (!wasOpen || isOpen) return;
			const type = pendingNewCredentialType.value;
			pendingNewCredentialType.value = null;
			await fetchCredentials();
			if (!type) return;
			const before = credentialIdsBeforeNew.value[type];
			const after = credentialsByType.value[type] ?? [];
			const newCred = before ? after.find((c) => !before.has(c.id)) : void 0;
			if (newCred) selectedCredentials.value[type] = newCred.id;
			delete credentialIdsBeforeNew.value[type];
		});
		onMounted(async () => {
			for (const key of Object.keys(errorMessages.value)) {
				errorMessages.value[key] = "";
				errorIsConflict.value[key] = false;
			}
			integrations.value = await ensureLoaded(props.data.projectId).catch(() => catalog.value ?? []) ?? [];
			await Promise.all([fetchStatus(), fetchCredentials()]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "600px",
				"data-test-id": "agent-add-trigger-modal"
			}, createSlots({
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.modal.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.modalDescription),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.modal.description")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.pickerRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.picker.label")), 1)]),
						_: 1
					}), createVNode(unref(N8nSelect_default), {
						modelValue: selectedTriggerType.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTriggerType.value = $event),
						class: normalizeClass([_ctx.$style.triggerPicker, selectedIcon.value ? _ctx.$style.triggerPickerWithIcon : void 0]),
						placeholder: unref(i18n).baseText("agents.builder.addTrigger.picker.placeholder"),
						size: "medium",
						"data-testid": "agent-add-trigger-picker"
					}, createSlots({
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(integrations.value, (integration) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: integration.type,
								value: integration.type,
								label: integration.label
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionRow) }, [createVNode(unref(N8nIcon_default), {
									icon: toIconName(integration.icon),
									size: 16,
									class: normalizeClass(_ctx.$style.optionIcon)
								}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(integration.label), 3)], 2)]),
								_: 2
							}, 1032, ["value", "label"]);
						}), 128))]),
						_: 2
					}, [selectedIcon.value ? {
						name: "prefix",
						fn: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: selectedIcon.value,
							size: 16
						}, null, 8, ["icon"])]),
						key: "0"
					} : void 0]), 1032, [
						"modelValue",
						"class",
						"placeholder"
					])], 2),
					!selectedTriggerType.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.placeholderState)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.picker.empty")), 1)]),
						_: 1
					})], 2)) : currentIntegration.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.integrationConfig)
					}, [
						currentIntegration.value.type === "linear" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.linearSetup)
						}, [
							createVNode(unref(N8nText_default), {
								size: "small",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.linear.setup.title")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.linear.setup.description")) + " ", 1), createBaseVNode("a", {
									href: LINEAR_APP_SETUP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									class: normalizeClass(_ctx.$style.link),
									"data-testid": "linear-app-setup-link"
								}, toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.linear.setup.link")), 3)]),
								_: 1
							}),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.urlField) }, [createBaseVNode("label", {
								for: "linear-oauth-callback-url",
								class: normalizeClass(_ctx.$style.urlLabel)
							}, [createVNode(unref(N8nText_default), {
								size: "small",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.linear.oauthCallbackUrl.label")), 1)]),
								_: 1
							})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.urlRow) }, [createBaseVNode("input", {
								id: "linear-oauth-callback-url",
								value: oauthCallbackUrl(),
								readonly: "",
								class: normalizeClass(_ctx.$style.urlInput),
								"data-testid": "linear-oauth-callback-url",
								onFocus: _cache[1] || (_cache[1] = ($event) => $event.target.select())
							}, null, 42, _hoisted_1), createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "small",
								"data-testid": "linear-copy-oauth-callback-url",
								onClick: _cache[2] || (_cache[2] = ($event) => copyLinearUrl("oauthCallback"))
							}, {
								prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: linearCopiedField.value === "oauthCallback" ? "check" : "copy",
									size: "xsmall"
								}, null, 8, ["icon"])]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(linearCopyLabel("oauthCallback")), 1)]),
								_: 1
							})], 2)], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.urlField) }, [createBaseVNode("label", {
								for: "linear-webhook-url",
								class: normalizeClass(_ctx.$style.urlLabel)
							}, [createVNode(unref(N8nText_default), {
								size: "small",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.linear.webhookUrl.label")), 1)]),
								_: 1
							})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.urlRow) }, [createBaseVNode("input", {
								id: "linear-webhook-url",
								value: webhookUrlFor("linear"),
								readonly: "",
								class: normalizeClass(_ctx.$style.urlInput),
								"data-testid": "linear-webhook-url",
								onFocus: _cache[3] || (_cache[3] = ($event) => $event.target.select())
							}, null, 42, _hoisted_2), createVNode(unref(N8nButton_default), {
								variant: "outline",
								size: "small",
								"data-testid": "linear-copy-webhook-url",
								onClick: _cache[4] || (_cache[4] = ($event) => copyLinearUrl("webhook"))
							}, {
								prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: linearCopiedField.value === "webhook" ? "check" : "copy",
									size: "xsmall"
								}, null, 8, ["icon"])]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(linearCopyLabel("webhook")), 1)]),
								_: 1
							})], 2)], 2)
						], 2)) : createCommentVNode("", true),
						!unref(isConnected)(currentIntegration.value.type) && currentIntegration.value.type !== "slack" ? (openBlock(), createBlock(AgentIntegrationCredentialConnection_default, {
							key: 1,
							modelValue: selectedCredentials.value[currentIntegration.value.type],
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedCredentials.value[currentIntegration.value.type] = $event),
							"integration-type": currentIntegration.value.type,
							"integration-label": currentIntegration.value.label,
							credentials: credentialsByType.value[currentIntegration.value.type] ?? [],
							"credential-permissions": credentialPermissions.value,
							"credentials-loading": credentialsLoading.value,
							disabled: isLoading(currentIntegration.value.type),
							onCreate: _cache[6] || (_cache[6] = ($event) => onCreateCredential(currentIntegration.value)),
							onEdit: _cache[7] || (_cache[7] = ($event) => onEditCredential(currentIntegration.value.type))
						}, null, 8, [
							"modelValue",
							"integration-type",
							"integration-label",
							"credentials",
							"credential-permissions",
							"credentials-loading",
							"disabled"
						])) : unref(isConnected)(currentIntegration.value.type) && currentIntegration.value.type === "slack" ? (openBlock(), createBlock(AgentIntegrationCredentialConnection_default, {
							key: 2,
							"model-value": unref(connectedCredentials)[currentIntegration.value.type],
							"integration-type": currentIntegration.value.type,
							"integration-label": currentIntegration.value.label,
							credentials: credentialsByType.value[currentIntegration.value.type] ?? [],
							"credential-permissions": credentialPermissions.value,
							"credentials-loading": credentialsLoading.value,
							disabled: true,
							connected: true,
							"connected-description": integrationConnectedText(currentIntegration.value.type),
							"show-disconnect-button": true,
							loading: isLoading(currentIntegration.value.type),
							onCreate: _cache[8] || (_cache[8] = ($event) => onCreateCredential(currentIntegration.value)),
							onDisconnect: _cache[9] || (_cache[9] = ($event) => onDisconnect(currentIntegration.value.type))
						}, null, 8, [
							"model-value",
							"integration-type",
							"integration-label",
							"credentials",
							"credential-permissions",
							"credentials-loading",
							"connected-description",
							"loading"
						])) : unref(isConnected)(currentIntegration.value.type) && currentIntegration.value.type !== "slack" ? (openBlock(), createElementBlock("div", {
							key: 3,
							class: normalizeClass(_ctx.$style.connectedSection)
						}, [createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(integrationConnectedText(currentIntegration.value.type)), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true),
						currentIntegration.value.type !== "slack" || !unref(isConnected)(currentIntegration.value.type) ? (openBlock(), createBlock(AgentIntegrationSettingsForm_default, {
							key: 4,
							ref_key: "settingsFormRef",
							ref: settingsFormRef,
							type: currentIntegration.value.type,
							disabled: unref(isConnected)(currentIntegration.value.type) || isLoading(currentIntegration.value.type),
							connected: unref(isConnected)(currentIntegration.value.type),
							"saved-settings": unref(integrationSettings)[currentIntegration.value.type],
							"agent-name": __props.data.agentName,
							"project-id": __props.data.projectId,
							"agent-id": __props.data.agentId,
							"setup-slack-app": onSetupSlackApp
						}, createSlots({ _: 2 }, [currentIntegration.value.type === "slack" ? {
							name: "manualConfiguration",
							fn: withCtx(() => [createVNode(AgentIntegrationCredentialConnection_default, {
								"model-value": selectedCredentials.value[currentIntegration.value.type] || unref(connectedCredentials)[currentIntegration.value.type],
								"integration-type": currentIntegration.value.type,
								"integration-label": currentIntegration.value.label,
								credentials: credentialsByType.value[currentIntegration.value.type] ?? [],
								"credential-permissions": credentialPermissions.value,
								"credentials-loading": credentialsLoading.value,
								disabled: unref(isConnected)(currentIntegration.value.type) || isLoading(currentIntegration.value.type),
								connected: unref(isConnected)(currentIntegration.value.type),
								"show-connect-button": !unref(isConnected)(currentIntegration.value.type),
								"show-disconnect-button": unref(isConnected)(currentIntegration.value.type),
								loading: isLoading(currentIntegration.value.type),
								publishing: publishing.value,
								"error-message": !unref(isConnected)(currentIntegration.value.type) && hasError(currentIntegration.value.type) ? unref(errorMessages)[currentIntegration.value.type] : "",
								"error-is-conflict": unref(errorIsConflict)[currentIntegration.value.type],
								"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => selectedCredentials.value[currentIntegration.value.type] = $event),
								onCreate: _cache[11] || (_cache[11] = ($event) => onCreateCredential(currentIntegration.value)),
								onEdit: _cache[12] || (_cache[12] = ($event) => onEditCredential(currentIntegration.value.type)),
								onConnect: _cache[13] || (_cache[13] = ($event) => onConnect(currentIntegration.value.type)),
								onDisconnect: _cache[14] || (_cache[14] = ($event) => onDisconnect(currentIntegration.value.type))
							}, null, 8, [
								"model-value",
								"integration-type",
								"integration-label",
								"credentials",
								"credential-permissions",
								"credentials-loading",
								"disabled",
								"connected",
								"show-connect-button",
								"show-disconnect-button",
								"loading",
								"publishing",
								"error-message",
								"error-is-conflict"
							])]),
							key: "0"
						} : void 0]), 1032, [
							"type",
							"disabled",
							"connected",
							"saved-settings",
							"agent-name",
							"project-id",
							"agent-id"
						])) : createCommentVNode("", true),
						currentIntegration.value.type !== "slack" && !unref(isConnected)(currentIntegration.value.type) && hasError(currentIntegration.value.type) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 5,
							class: normalizeClass(_ctx.$style.errorText),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(errorMessages)[currentIntegration.value.type]) + " ", 1), selectedCredentials.value[currentIntegration.value.type] && !unref(errorIsConflict)[currentIntegration.value.type] ? (openBlock(), createElementBlock("a", {
								key: 0,
								class: normalizeClass(_ctx.$style.link),
								href: "#",
								onClick: _cache[15] || (_cache[15] = withModifiers(($event) => onEditCredential(currentIntegration.value.type), ["prevent"]))
							}, toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.editCredential")), 3)) : createCommentVNode("", true)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 2
			}, [currentIntegration.value && currentIntegration.value.type !== "slack" ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [!unref(isConnected)(currentIntegration.value.type) ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					disabled: !selectedCredentials.value[currentIntegration.value.type] || isLoading(currentIntegration.value.type) || !!settingsFormRef.value?.validationError,
					loading: isLoading(currentIntegration.value.type),
					size: "small",
					"data-testid": `${currentIntegration.value.type}-connect-button`,
					onClick: _cache[16] || (_cache[16] = ($event) => onConnect(currentIntegration.value.type))
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "plug",
						size: "xsmall"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.connect")), 1)]),
					_: 1
				}, 8, [
					"disabled",
					"loading",
					"data-testid"
				])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "destructive",
					loading: isLoading(currentIntegration.value.type),
					size: "small",
					"data-testid": `${currentIntegration.value.type}-disconnect-button`,
					onClick: _cache[17] || (_cache[17] = ($event) => onDisconnect(currentIntegration.value.type))
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "unlink",
						size: "xsmall"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.addTrigger.disconnect")), 1)]),
					_: 1
				}, 8, ["loading", "data-testid"]))], 2)], 2)]),
				key: "0"
			} : void 0]), 1032, ["name"]);
		};
	}
});
var AgentAddTriggerModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_1pru6_125",
	pickerRow: "_pickerRow_1pru6_132",
	triggerPicker: "_triggerPicker_1pru6_138",
	triggerPickerWithIcon: "_triggerPickerWithIcon_1pru6_144",
	optionRow: "_optionRow_1pru6_148",
	optionIcon: "_optionIcon_1pru6_156",
	optionLabel: "_optionLabel_1pru6_160",
	placeholderState: "_placeholderState_1pru6_167",
	integrationConfig: "_integrationConfig_1pru6_177",
	modalDescription: "_modalDescription_1pru6_183",
	footer: "_footer_1pru6_187",
	footerActions: "_footerActions_1pru6_193",
	connectedSection: "_connectedSection_1pru6_199",
	errorText: "_errorText_1pru6_205",
	link: "_link_1pru6_209",
	linearSetup: "_linearSetup_1pru6_216",
	urlField: "_urlField_1pru6_222",
	urlLabel: "_urlLabel_1pru6_228",
	urlRow: "_urlRow_1pru6_232",
	urlInput: "_urlInput_1pru6_238"
};
var AgentAddTriggerModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentAddTriggerModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentAddTriggerModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentAddTriggerModal_default as default };
