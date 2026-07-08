import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-Cx-W4qgg.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Tt as N8nOption_default, Wt as ElSwitch, Ya as N8nIcon_default, qa as N8nText_default, wt as N8nSelect_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useSettingsStore } from "./settings.store-fzkHYqQC.js";
import { t as useDocumentTitle } from "./useDocumentTitle-CSw5LcXz.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BQRQJUiK.js";
import { n as useInstanceAiBrowserUseExperiment, r as useInstanceAiMcpConnectionsExperiment, t as useInstanceAiComputerUseExperiment } from "./instanceAiComputerUse-DhoO21hT.js";
//#region src/features/ai/instanceAi/views/SettingsInstanceAiView.vue?vue&type=script&setup=true&lang.ts
var SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceAiView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const settingsStore = useSettingsStore();
		const store = useInstanceAiSettingsStore();
		const { isFeatureEnabled: isMcpConnectionsExperimentEnabled } = useInstanceAiMcpConnectionsExperiment();
		const { isFeatureEnabled: isBrowserUseEnabled } = useInstanceAiBrowserUseExperiment();
		const { isFeatureEnabled: isComputerUseExperimentEnabled } = useInstanceAiComputerUseExperiment();
		const isAdmin = computed(() => store.canManage);
		const PERMISSION_OPTIONS = [
			"require_approval",
			"always_allow",
			"blocked"
		];
		const MCP_TOOL_PERMISSION_OPTIONS = ["require_approval", "always_allow"];
		const PERMISSION_OPTION_LABEL = {
			require_approval: "settings.n8nAgent.permissions.needsApproval",
			always_allow: "settings.n8nAgent.permissions.alwaysAllow",
			blocked: "settings.n8nAgent.permissions.blocked"
		};
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
		const isMcpAccessEnabled = computed(() => store.settings?.mcpAccessEnabled ?? true);
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
		function handleBrowserUseToggle(value) {
			store.setField("browserUseEnabled", Boolean(value));
			store.save();
		}
		function handleMcpAccessToggle(value) {
			store.setField("mcpAccessEnabled", Boolean(value));
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
					isAdmin.value && unref(isComputerUseExperimentEnabled) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.card)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRowLeft) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowLabel) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.computerUse.label")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowDescription) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.computerUse.description")), 3)], 2), createVNode(unref(ElSwitch), {
						"model-value": !(unref(store).settings?.localGatewayDisabled ?? false),
						disabled: unref(store).isSaving,
						"data-test-id": "n8n-agent-computer-use-toggle",
						"onUpdate:modelValue": handleComputerUseToggle
					}, null, 8, ["model-value", "disabled"])], 2)], 2)) : createCommentVNode("", true),
					isAdmin.value && unref(isBrowserUseEnabled) ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.card)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRowLeft) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowLabel) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.browserUse.label")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowDescription) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.browserUse.description")), 3)], 2), createVNode(unref(ElSwitch), {
						"model-value": unref(store).settings?.browserUseEnabled ?? true,
						disabled: unref(store).isSaving,
						"data-test-id": "n8n-agent-browser-use-toggle",
						"onUpdate:modelValue": handleBrowserUseToggle
					}, null, 8, ["model-value", "disabled"])], 2)], 2)) : createCommentVNode("", true),
					isAdmin.value && unref(isMcpConnectionsExperimentEnabled) ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.card)
					}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.settingsRow, { [_ctx.$style.settingsRowBorder]: isMcpAccessEnabled.value }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRowLeft) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowLabel) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.mcpAccess.label")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowDescription) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.mcpAccess.description")), 3)], 2), createVNode(unref(ElSwitch), {
						"model-value": isMcpAccessEnabled.value,
						disabled: unref(store).isSaving,
						"data-test-id": "n8n-agent-mcp-access-toggle",
						"onUpdate:modelValue": handleMcpAccessToggle
					}, null, 8, ["model-value", "disabled"])], 2), isMcpAccessEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.settingsRow)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsRowLeft) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.settingsRowLabel) }, toDisplayString(unref(i18n).baseText("settings.n8nAgent.permissions.executeMcpTool")), 3)], 2), createVNode(unref(N8nSelect_default), {
						class: normalizeClass(_ctx.$style.permissionSelect),
						"model-value": unref(store).getPermission("executeMcpTool"),
						size: "small",
						disabled: unref(store).isSaving,
						"data-test-id": "n8n-agent-permission-executeMcpTool",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => handlePermissionChange("executeMcpTool", $event))
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(MCP_TOOL_PERMISSION_OPTIONS, (option) => {
							return createVNode(unref(N8nOption_default), {
								key: option,
								value: option,
								label: unref(i18n).baseText(PERMISSION_OPTION_LABEL[option])
							}, null, 8, ["value", "label"]);
						}), 64))]),
						_: 1
					}, 8, [
						"class",
						"model-value",
						"disabled"
					])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					isAdmin.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissionsHeader) }, [createVNode(unref(N8nHeading_default), {
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
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(PERMISSION_OPTIONS, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: option,
									value: option,
									label: unref(i18n).baseText(PERMISSION_OPTION_LABEL[option])
								}, null, 8, ["value", "label"]);
							}), 64))]),
							_: 1
						}, 8, [
							"class",
							"model-value",
							"disabled",
							"data-test-id",
							"onUpdate:modelValue"
						])], 2);
					}), 64))], 2)], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				unref(store).isDirty ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.footer)
				}, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					label: unref(i18n).baseText("generic.cancel"),
					onClick: _cache[1] || (_cache[1] = ($event) => unref(store).reset())
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("settings.personal.save"),
					loading: unref(store).isSaving,
					onClick: _cache[2] || (_cache[2] = ($event) => unref(store).save())
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
