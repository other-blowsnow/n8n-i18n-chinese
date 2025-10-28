import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DZMn6F95.js";
import { $ as N8nActionToggle_default, A as N8nMarkdown_default, An as N8nHeading_default, F as N8nInfoAccordion_default, Fn as N8nIcon_default, Mn as N8nText_default, Nn as N8nButton_default, P as N8nInfoTip_default, St as N8nActionBox_default, T as N8nNotice_default, et as N8nLoading_default, ft as N8nTooltip_default, lt as N8nLink_default, o as N8nDataTableServer_default, wt as ElSwitch } from "./src-DuV1yrAd.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-OqsyiABz.js";
import "./icon-bSjxVZuQ.js";
import "./empty-BuGRxzl4.js";
import { Js as useRootStore, ir as useUsersStore, kn as useDocumentTitle, o as useWorkflowsStore } from "./useTelemetry-C3cN19b2.js";
import { t as useToast } from "./useToast-B-CMvNEW.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { oa as VIEWS } from "./constants-CiCQTzlI.js";
import "./merge-BF1fect_.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-Dm5wldKp.js";
import "./useExternalHooks-CFOQ8Nn2.js";
import "./npsSurvey.store-C1nTMANL.js";
import "./cloudPlan.store-CD7mCT0O.js";
import "./templates.store-CcFpD7-K.js";
import "./focusPanel.store-BADVh5Sc.js";
import "./executions.store-FIIAHm-v.js";
import "./usePinnedData-DhNnlolU.js";
import "./nodeCreator.store-lRJSp4Qr.js";
import "./nodeIcon-Dm5sZJfm.js";
import { t as useClipboard } from "./useClipboard-DF_RdI9U.js";
import "./useCanvasOperations-BKFIHZ3t.js";
import "./folders.store-oty9WxlX.js";
import "./NodeIcon-gge00gA3.js";
import "./versions.store-CiEGYguH.js";
import "./dataTable.store-JbrTjKUL.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-DGod3YNF.js";
import "./roles.store-0W4hnQDN.js";
import "./sso.store-DHfr1RaH.js";
import { t as router_default } from "./router-1XxszlHL.js";
import "./insights.store-DztKWt1N.js";
import "./insights.constants-BkI0n967.js";
import "./insights.utils-BTap7Bzt.js";
import { n as LOADING_INDICATOR_TIMEOUT, r as MCP_DOCS_PAGE_URL, t as useMcp } from "./useMcp-A-DqOshe.js";
import "./constants-BlMVf5I9.js";
import "./useRecentResources-CM3AgWaf.js";
import { t as useMCPStore } from "./mcp.store-BGwUjdky.js";
var ConnectionParameter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionParameter",
	props: {
		value: {},
		allowCopy: {
			type: Boolean,
			default: true
		},
		maxWidth: { default: void 0 }
	},
	setup(__props) {
		const { copy, copied, isSupported } = useClipboard();
		const i18n = useI18n();
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				style: normalizeStyle({ maxWidth: props.maxWidth ? props.maxWidth + "px" : "none" })
			}, [createBaseVNode("code", null, toDisplayString(props.value), 1), createBaseVNode("div", { class: normalizeClass(_ctx.$style["copy-button-wrapper"]) }, [renderSlot(_ctx.$slots, "customActions"), createVNode(unref(N8nTooltip_default), {
				disables: !unref(isSupported),
				content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
				placement: "right"
			}, {
				default: withCtx(() => [props.allowCopy && unref(isSupported) ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "tertiary",
					icon: unref(copied) ? "clipboard-check" : "clipboard",
					square: true,
					class: normalizeClass(_ctx.$style["copy-button"]),
					onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(props.value))
				}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["disables", "content"])], 2)], 6);
		};
	}
});
var ConnectionParameter_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_9i963_123",
	"copy-button-wrapper": "_copy-button-wrapper_9i963_157",
	"copy-button": "_copy-button_9i963_157"
};
var ConnectionParameter_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ConnectionParameter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionParameter_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["href"];
var MCP_ENDPOINT = "mcp-server/http";
var MCPConnectionInstructions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPConnectionInstructions",
	props: {
		baseUrl: {},
		apiKey: {},
		loadingApiKey: { type: Boolean }
	},
	emits: ["rotateKey"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { copy, copied, isSupported } = useClipboard();
		const i18n = useI18n();
		const connectionString$1 = computed(() => {
			return `
"mcpServers": {
  "n8n-mcp": {
    "command": "npx",
    "args": [
      "-y",
      "supergateway",
      "--streamableHttp",
      "${props.baseUrl}${MCP_ENDPOINT}",
      "--header",
      "authorization:Bearer ${apiKeyText.value}"
    ]
  }
}
`;
		});
		const isKeyRedacted = computed(() => {
			return props.apiKey.apiKey.includes("******");
		});
		const connectionCode = computed(() => {
			return `\`\`\`json${connectionString$1.value}\`\`\``;
		});
		const fullServerUrl = computed(() => {
			return props.baseUrl + MCP_ENDPOINT;
		});
		const apiKeyText = computed(() => {
			if (props.loadingApiKey) return `<${i18n.baseText("generic.loading")}...>`;
			return isKeyRedacted.value ? "<YOUR_ACCESS_TOKEN_HERE>" : props.apiKey.apiKey;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style["instructions-container"]) }, [createBaseVNode("ol", { class: normalizeClass(_ctx.$style.instructions) }, [
					createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.enableAccess")), 3)], 2)]),
					createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.serverUrl")) + ": ", 3), createVNode(ConnectionParameter_default, { value: fullServerUrl.value }, null, 8, ["value"])], 2)]),
					createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.apiKey.label")) + ": ", 3),
						props.loadingApiKey ? (openBlock(), createBlock(unref(N8nLoading_default), {
							key: 0,
							loading: props.loadingApiKey,
							class: normalizeClass(_ctx.$style["api-key-loader"])
						}, null, 8, ["loading", "class"])) : (openBlock(), createBlock(ConnectionParameter_default, {
							key: 1,
							value: props.apiKey.apiKey,
							"max-width": 400,
							"allow-copy": !isKeyRedacted.value
						}, {
							customActions: withCtx(() => [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.instructions.rotateKey.tooltip") }, {
								default: withCtx(() => [createVNode(unref(N8nButton_default), {
									type: "tertiary",
									icon: "refresh-cw",
									square: true,
									onClick: _cache[0] || (_cache[0] = ($event) => emit("rotateKey"))
								})]),
								_: 1
							}, 8, ["content"])]),
							_: 1
						}, 8, ["value", "allow-copy"])),
						!props.loadingApiKey ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
							key: 2,
							type: "tooltip",
							"tooltip-placement": "right"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.instructions.apiKey.tip")), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 2)])
				], 2), !isKeyRedacted.value && !props.loadingApiKey ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					theme: "warning",
					class: normalizeClass(_ctx.$style["copy-key-notice"]),
					content: unref(i18n).baseText("settings.mcp.newKey.notice")
				}, null, 8, ["class", "content"])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.connectionString) }, [createVNode(unref(N8nInfoAccordion_default), { title: unref(i18n).baseText("settings.mcp.instructions.json") }, {
					customContent: withCtx(() => [createVNode(unref(N8nMarkdown_default), { content: connectionCode.value }, null, 8, ["content"]), createVNode(unref(N8nTooltip_default), {
						disables: !unref(isSupported),
						content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy")
					}, {
						default: withCtx(() => [unref(isSupported) && !props.loadingApiKey ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							type: "tertiary",
							icon: unref(copied) ? "clipboard-check" : "clipboard",
							square: true,
							class: normalizeClass(_ctx.$style["copy-json-button"]),
							onClick: _cache[1] || (_cache[1] = ($event) => unref(copy)(connectionString$1.value))
						}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["disables", "content"])]),
					_: 1
				}, 8, ["title"])], 2),
				createVNode(unref(N8nText_default), {
					size: "small",
					class: "mt-m"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.instructions.docs.part1")) + " ", 1), createBaseVNode("a", {
						href: unref(MCP_DOCS_PAGE_URL),
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.docs.part2")), 9, _hoisted_1$1)]),
					_: 1
				})
			], 2);
		};
	}
});
const container$1 = "_container_fzkkx_123";
const instructions = "_instructions_fzkkx_128";
const item = "_item_fzkkx_142";
const label = "_label_fzkkx_152";
const url = "_url_fzkkx_156";
const connectionString = "_connectionString_fzkkx_188";
var MCPConnectionInstructions_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	"instructions-container": "_instructions-container_fzkkx_128",
	instructions,
	item,
	label,
	url,
	"copy-url-wrapper": "_copy-url-wrapper_fzkkx_172",
	"copy-url-button": "_copy-url-button_fzkkx_177",
	connectionString,
	"copy-json-button": "_copy-json-button_fzkkx_199"
};
var MCPConnectionInstructions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPConnectionInstructions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectionInstructions_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 0 };
var _hoisted_2 = {
	key: 1,
	class: "mt-s mb-xl"
};
var _hoisted_3 = { key: 1 };
var SettingsMCPView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const mcp = useMcp();
		const workflowsStore = useWorkflowsStore();
		const mcpStore = useMCPStore();
		const usersStore = useUsersStore();
		const rootStore = useRootStore();
		const workflowsLoading = ref(false);
		const mcpStatusLoading = ref(false);
		const mcpKeyLoading = ref(false);
		const availableWorkflows = ref([]);
		const tableHeaders = ref([
			{
				title: i18n.baseText("generic.name"),
				key: "name",
				width: 200,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("generic.folder"),
				key: "parentFolder",
				width: 200,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("generic.project"),
				key: "homeProject",
				width: 200,
				disableSort: true,
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 50,
				disableSort: true,
				value() {}
			}
		]);
		const tableActions = ref([{
			label: i18n.baseText("settings.mcp.workflows.table.action.removeMCPAccess"),
			value: "removeFromMCP"
		}]);
		const apiKey = computed(() => mcpStore.currentUserMCPKey);
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const isAdmin = computed(() => usersStore.isAdmin);
		const canToggleMCP = computed(() => isOwner.value || isAdmin.value);
		const getProjectIcon = (workflow) => {
			if (workflow.homeProject?.type === "personal") return {
				type: "icon",
				value: "user"
			};
			else if (workflow.homeProject?.name) return isIconOrEmoji(workflow.homeProject.icon) ? workflow.homeProject.icon : {
				type: "icon",
				value: "layers"
			};
			else return {
				type: "icon",
				value: "house"
			};
		};
		const getProjectName = (workflow) => {
			if (workflow.homeProject?.type === "personal") return i18n.baseText("projects.menu.personal");
			return workflow.homeProject?.name ?? "";
		};
		const fetchAvailableWorkflows = async () => {
			workflowsLoading.value = true;
			try {
				availableWorkflows.value = await mcpStore.fetchWorkflowsAvailableForMCP(1, 200);
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
			} finally {
				workflowsLoading.value = false;
			}
		};
		const onUpdateMCPEnabled = async (value) => {
			try {
				mcpStatusLoading.value = true;
				const boolValue = typeof value === "boolean" ? value : Boolean(value);
				if (await mcpStore.setMcpAccessEnabled(boolValue)) {
					await fetchAvailableWorkflows();
					await fetchApiKey();
				} else workflowsLoading.value = false;
				mcp.trackUserToggledMcpAccess(boolValue);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
			} finally {
				mcpStatusLoading.value = false;
				workflowsLoading.value = false;
			}
		};
		const onWorkflowAction = async (action, workflow) => {
			switch (action) {
				case "removeFromMCP":
					try {
						await workflowsStore.updateWorkflowSetting(workflow.id, "availableInMCP", false);
						availableWorkflows.value = availableWorkflows.value.filter((w) => w.id !== workflow.id);
					} catch (error) {
						toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
					}
					break;
				default: break;
			}
		};
		const fetchApiKey = async () => {
			try {
				mcpKeyLoading.value = true;
				await mcpStore.getOrCreateApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.apiKey"));
			} finally {
				setTimeout(() => {
					mcpKeyLoading.value = false;
				}, 200);
			}
		};
		const rotateKey = async () => {
			try {
				mcpKeyLoading.value = true;
				await mcpStore.generateNewApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.rotating.apiKey"));
			} finally {
				setTimeout(() => {
					mcpKeyLoading.value = false;
				}, 200);
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp"));
			if (!mcpStore.mcpAccessEnabled) return;
			await fetchAvailableWorkflows();
			await fetchApiKey();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingContainer) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainToggleContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainToggleInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.mainTooggle),
					"data-test-id": "mcp-toggle-container"
				}, [createVNode(unref(N8nTooltip_default), {
					content: unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip"),
					disabled: canToggleMCP.value,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(ElSwitch), {
						size: "large",
						"data-test-id": "mcp-access-toggle",
						"model-value": unref(mcpStore).mcpAccessEnabled,
						disabled: !canToggleMCP.value,
						loading: mcpStatusLoading.value,
						"onUpdate:modelValue": onUpdateMCPEnabled
					}, null, 8, [
						"model-value",
						"disabled",
						"loading"
					])]),
					_: 1
				}, 8, ["content", "disabled"])], 2)], 2),
				unref(mcpStore).mcpAccessEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-enabled-section"
				}, [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
					size: "medium",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connection.info.heading")), 1)]),
					_: 1
				}), apiKey.value ? (openBlock(), createBlock(MCPConnectionInstructions_default, {
					key: 0,
					"loading-api-key": mcpKeyLoading.value,
					"base-url": unref(rootStore).urlBaseEditor,
					"api-key": apiKey.value,
					onRotateKey: rotateKey
				}, null, 8, [
					"loading-api-key",
					"base-url",
					"api-key"
				])) : createCommentVNode("", true)]), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["workflow-list-container"]),
					"data-test-id": "mcp-workflow-list"
				}, [workflowsLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [workflowsLoading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					loading: workflowsLoading.value,
					variant: "h1",
					class: "mb-l"
				}, null, 8, ["loading"])) : createCommentVNode("", true), workflowsLoading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					loading: workflowsLoading.value,
					variant: "p",
					rows: 5,
					"shrink-last": false
				}, null, 8, ["loading"])) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.header, "mb-s"]) }, [createVNode(unref(N8nHeading_default), {
					size: "medium",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.available.workflows.heading")), 1)]),
					_: 1
				})], 2), availableWorkflows.value.length === 0 ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 0,
					"data-test-id": "empty-workflow-list-box",
					heading: unref(i18n).baseText("settings.mcp.empty.title"),
					description: unref(i18n).baseText("settings.mcp.empty.description")
				}, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
					key: 1,
					class: normalizeClass(_ctx.$style["workflow-table"]),
					"data-test-id": "mcp-workflow-table",
					headers: tableHeaders.value,
					items: availableWorkflows.value,
					"items-length": availableWorkflows.value.length
				}, {
					[`item.name`]: withCtx(({ item: item$1 }) => [createVNode(unref(N8nLink_default), {
						"new-window": true,
						to: unref(router_default).resolve({
							name: unref(VIEWS).WORKFLOW,
							params: { name: item$1.id }
						}).fullPath,
						theme: "text",
						class: normalizeClass(_ctx.$style["table-link"])
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item$1.name), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nIcon_default), {
							icon: "external-link",
							class: normalizeClass(_ctx.$style["link-icon"]),
							color: "text-light"
						}, null, 8, ["class"])]),
						_: 2
					}, 1032, ["to", "class"])]),
					[`item.parentFolder`]: withCtx(({ item: item$1 }) => [item$1.parentFolder ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style["folder-cell"])
					}, [item$1.homeProject ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						"data-test-id": "mcp-workflow-folder-link",
						to: `/projects/${item$1.homeProject.id}/folders/${item$1.parentFolder.id}/workflows`,
						theme: "text",
						class: normalizeClass(_ctx.$style["table-link"]),
						"new-window": true
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-folder-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item$1.parentFolder.name), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nIcon_default), {
							icon: "external-link",
							class: normalizeClass(_ctx.$style["link-icon"]),
							color: "text-light"
						}, null, 8, ["class"])]),
						_: 2
					}, 1032, ["to", "class"])) : (openBlock(), createElementBlock("span", _hoisted_3, [item$1.parentFolder ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "folder",
						size: 16,
						color: "text-light"
					})) : createCommentVNode("", true), createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-folder-name" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(item$1.parentFolder.name), 1)]),
						_: 2
					}, 1024)]))], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						"data-test-id": "mcp-workflow-no-folder"
					}, {
						default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("-")])),
						_: 1
					}))]),
					[`item.homeProject`]: withCtx(({ item: item$1 }) => [item$1.homeProject ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style["folder-cell"])
					}, [createVNode(unref(N8nLink_default), {
						"data-test-id": "mcp-workflow-project-link",
						to: unref(router_default).resolve({
							name: unref(VIEWS).PROJECTS_WORKFLOWS,
							params: { projectId: item$1.homeProject.id }
						}).fullPath,
						theme: "text",
						class: normalizeClass([_ctx.$style["table-link"], _ctx.$style["project-link"]]),
						"new-window": true
					}, {
						default: withCtx(() => [
							item$1.homeProject ? (openBlock(), createBlock(ProjectIcon_default, {
								key: 0,
								icon: getProjectIcon(item$1),
								"border-less": true
							}, null, 8, ["icon"])) : createCommentVNode("", true),
							createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-project-name" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(getProjectName(item$1)), 1)]),
								_: 2
							}, 1024),
							createVNode(unref(N8nIcon_default), {
								icon: "external-link",
								class: normalizeClass(_ctx.$style["link-icon"]),
								color: "text-light"
							}, null, 8, ["class"])
						]),
						_: 2
					}, 1032, ["to", "class"])], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						"data-test-id": "mcp-workflow-no-project"
					}, {
						default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("-")])),
						_: 1
					}))]),
					[`item.actions`]: withCtx(({ item: item$1 }) => [createVNode(unref(N8nActionToggle_default), {
						placement: "bottom",
						actions: tableActions.value,
						theme: "dark",
						onAction: ($event) => onWorkflowAction($event, item$1)
					}, null, 8, ["actions", "onAction"])]),
					_: 2
				}, 1032, [
					"class",
					"headers",
					"items",
					"items-length"
				]))]))], 2)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ofc3_123",
	headingContainer: "_headingContainer_1ofc3_132",
	mainToggleContainer: "_mainToggleContainer_1ofc3_136",
	mainToggleInfo: "_mainToggleInfo_1ofc3_146",
	mainTooggle: "_mainTooggle_1ofc3_153",
	header: "_header_1ofc3_160",
	"workflow-table": "_workflow-table_1ofc3_166",
	"table-link": "_table-link_1ofc3_170",
	"link-icon": "_link-icon_1ofc3_178",
	"project-link": "_project-link_1ofc3_184",
	"folder-cell": "_folder-cell_1ofc3_191"
};
var SettingsMCPView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsMCPView_default as default };
