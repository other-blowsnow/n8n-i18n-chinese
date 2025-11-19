import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, p as vShow, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, Dt as N8nActionBox_default, E as N8nNotice_default, F as N8nInfoAccordion_default, In as N8nText_default, Ln as N8nButton_default, P as N8nInfoTip_default, Pn as N8nHeading_default, et as N8nLoading_default, g as N8nTabs_default, j as N8nMarkdown_default, kt as ElSwitch, mt as N8nLink_default, s as N8nDataTableServer_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Qs as useRootStore, Tn as useDocumentTitle, er as useUsersStore, o as useWorkflowsStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./npsSurvey.store-Csg2H1Od.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./templates.store-CFt_GGxU.js";
import "./focusPanel.store-Ce3wvzmP.js";
import "./executions.store-a34D3haB.js";
import "./usePinnedData-CxyLm90h.js";
import "./nodeCreator.store-BXjpGwrk.js";
import "./nodeIcon-BWTKM7V3.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
import "./useCanvasOperations-CA0dp-vn.js";
import "./folders.store-Cwp_DTVT.js";
import "./NodeIcon-B-yC7jws.js";
import "./versions.store-DbkVHo9d.js";
import "./banners.store-kqUkumsc.js";
import "./dataTable.store-BCpzMJoX.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-BYB-pK6e.js";
import { t as TimeAgo_default } from "./TimeAgo-DCz5bgJ1.js";
import "./roles.store-Cht5fHcq.js";
import "./sso.store-lozzT1xX.js";
import { t as router_default } from "./router-CJvbG5CN.js";
import "./insights.store-DHwsBBEe.js";
import "./insights.constants-DK2g3nnD.js";
import "./insights.utils-yRgER63l.js";
import { n as MCP_DOCS_PAGE_URL, t as LOADING_INDICATOR_TIMEOUT } from "./mcp.constants-BCNosk1p.js";
import "./constants-9ReQTHaF.js";
import "./useRecentResources-BC0Esj6S.js";
import { t as useMcp } from "./useMcp-6e1cFvMd.js";
import { t as useMCPStore } from "./mcp.store-C6qtFq7B.js";
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
var _hoisted_1$2 = { "data-test-id": "oauth-clients-table" };
var _hoisted_2$1 = { key: 0 };
var _hoisted_3$1 = {
	key: 1,
	class: "mt-s mb-xl"
};
var OAuthClientsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsTable",
	props: {
		clients: {},
		loading: { type: Boolean }
	},
	emits: ["revokeClient", "refresh"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.clientName"),
				key: "name",
				width: 250,
				disableSort: true,
				value(client) {
					return client.name;
				}
			},
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedAt"),
				key: "createdAt",
				width: 250,
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
			label: i18n.baseText("settings.mcp.oAuthClients.table.action.revokeAccess"),
			value: "revokeClient"
		}]);
		const onTableAction = (action, item$2) => {
			if (action === "revokeClient") emit("revokeClient", item$2);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", _hoisted_3$1, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.header, "mb-s"]) }, [createVNode(unref(N8nHeading_default), {
				size: "medium",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.heading")) + " (" + toDisplayString(props.clients.length) + ") ", 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.refresh.tooltip") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					"data-test-id": "mcp-oauth-clients-refresh-button",
					size: "small",
					type: "tertiary",
					icon: "refresh-cw",
					square: true,
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresh"))
				})]),
				_: 1
			}, 8, ["content"])], 2), props.clients.length === 0 ? (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 0,
				"data-test-id": "empty-oauth-clients-list-box",
				heading: unref(i18n).baseText("settings.mcp.oAuthClients.table.empty.title")
			}, null, 8, ["heading"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
				key: 1,
				"data-test-id": "oauth-clients-data-table",
				headers: tableHeaders.value,
				items: props.clients,
				"items-length": props.clients.length
			}, {
				[`item.createdAt`]: withCtx(({ item: item$2 }) => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-client-created-at" }, {
					default: withCtx(() => [createVNode(TimeAgo_default, { date: String(item$2.createdAt) }, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item: item$2 }) => [createVNode(unref(N8nActionToggle_default), {
					"data-test-id": "mcp-oauth-client-action-toggle",
					placement: "bottom",
					actions: tableActions.value,
					theme: "dark",
					onAction: ($event) => onTableAction($event, item$2)
				}, null, 8, ["actions", "onAction"])]),
				_: 2
			}, 1032, [
				"headers",
				"items",
				"items-length"
			]))]))]);
		};
	}
});
var OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default = { header: "_header_yr8i2_123" };
var OAuthClientsTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OAuthClientsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default }]]);
var OAuthConnectionInstructions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthConnectionInstructions",
	props: {
		serverUrl: {},
		clients: {},
		clientsLoading: { type: Boolean }
	},
	emits: ["revokeClient", "refresh"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const onRefreshOAuthClients = () => {
			emit("refresh");
		};
		const onRevokeClientAccess = (client) => {
			emit("revokeClient", client);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("ol", { class: normalizeClass(_ctx.$style.instructions) }, [createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.enableAccess")), 3)], 2)]), createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.serverUrl")) + ": ", 3), createVNode(ConnectionParameter_default, { value: props.serverUrl }, null, 8, ["value"])], 2)])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["clients-table"]) }, [createVNode(OAuthClientsTable_default, {
				"data-test-id": "mcp-oauth-clients-table",
				clients: props.clients,
				loading: props.clientsLoading,
				onRevokeClient: onRevokeClientAccess,
				onRefresh: onRefreshOAuthClients
			}, null, 8, ["clients", "loading"])], 2)], 2);
		};
	}
});
var OAuthConnectionInstructions_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_k3h69_123",
	instructions: "_instructions_k3h69_129",
	item: "_item_k3h69_139",
	label: "_label_k3h69_149",
	url: "_url_k3h69_153",
	"copy-url-wrapper": "_copy-url-wrapper_k3h69_169",
	"copy-url-button": "_copy-url-button_k3h69_174",
	"clients-table": "_clients-table_k3h69_185"
};
var OAuthConnectionInstructions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OAuthConnectionInstructions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthConnectionInstructions_vue_vue_type_style_index_0_lang_module_default }]]);
var AccessTokenConnectionInstructions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AccessTokenConnectionInstructions",
	props: {
		serverUrl: {},
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
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway",
        "--streamableHttp",
        "${props.serverUrl}",
        "--header",
        "authorization:Bearer ${apiKeyText.value}"
      ]
    }
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
		const apiKeyText = computed(() => {
			if (props.loadingApiKey) return `<${i18n.baseText("generic.loading")}...>`;
			return isKeyRedacted.value ? "<YOUR_ACCESS_TOKEN_HERE>" : props.apiKey.apiKey;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["instructions-container"]) }, [createBaseVNode("ol", { class: normalizeClass(_ctx.$style.instructions) }, [
				createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.enableAccess")), 3)], 2)]),
				createBaseVNode("li", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.serverUrl")) + ": ", 3), createVNode(ConnectionParameter_default, { value: props.serverUrl }, null, 8, ["value"])], 2)]),
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
			}, null, 8, ["class", "content"])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.connectionString) }, [createVNode(unref(N8nInfoAccordion_default), { title: unref(i18n).baseText("settings.mcp.instructions.json") }, {
				customContent: withCtx(() => [createVNode(unref(N8nMarkdown_default), { content: connectionCode.value }, null, 8, ["content"]), createVNode(unref(N8nTooltip_default), {
					disabled: !unref(isSupported),
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
				}, 8, ["disabled", "content"])]),
				_: 1
			}, 8, ["title"])], 2)], 2);
		};
	}
});
const container$2 = "_container_1s5px_123";
const instructions = "_instructions_1s5px_129";
const item = "_item_1s5px_143";
const label = "_label_1s5px_153";
const url = "_url_1s5px_157";
const connectionString = "_connectionString_1s5px_189";
var AccessTokenConnectionInstructions_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	"instructions-container": "_instructions-container_1s5px_129",
	instructions,
	item,
	label,
	url,
	"copy-url-wrapper": "_copy-url-wrapper_1s5px_173",
	"copy-url-button": "_copy-url-button_1s5px_178",
	connectionString,
	"copy-json-button": "_copy-json-button_1s5px_201"
};
var AccessTokenConnectionInstructions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AccessTokenConnectionInstructions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AccessTokenConnectionInstructions_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["href"];
var MCP_ENDPOINT = "mcp-server/http";
var MCPConnectionInstructions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPConnectionInstructions",
	props: {
		baseUrl: {},
		apiKey: {},
		loadingApiKey: { type: Boolean },
		oAuthClients: {},
		loadingOAuthClients: { type: Boolean }
	},
	emits: [
		"rotateKey",
		"revokeClient",
		"refreshClientList"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const selectedTab = ref("oauth");
		const tabs = ref([{
			label: i18n.baseText("settings.mcp.instructions.tabs.oauth"),
			value: "oauth"
		}, {
			label: i18n.baseText("settings.mcp.instructions.tabs.apiKey"),
			value: "token"
		}]);
		const onTabSelected = (tab) => {
			selectedTab.value = tab;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nHeading_default), {
				size: "medium",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connection.info.heading")), 1)]),
				_: 1
			}), createBaseVNode("div", null, [
				createVNode(unref(N8nTabs_default), {
					"model-value": selectedTab.value,
					options: tabs.value,
					"onUpdate:modelValue": onTabSelected
				}, null, 8, ["model-value", "options"]),
				withDirectives(createVNode(OAuthConnectionInstructions_default, {
					"server-url": `${props.baseUrl}${MCP_ENDPOINT}`,
					clients: props.oAuthClients,
					"clients-loading": props.loadingOAuthClients,
					onRevokeClient: _cache[0] || (_cache[0] = ($event) => emit("revokeClient", $event)),
					onRefresh: _cache[1] || (_cache[1] = ($event) => emit("refreshClientList"))
				}, null, 8, [
					"server-url",
					"clients",
					"clients-loading"
				]), [[vShow, selectedTab.value === "oauth"]]),
				withDirectives(createVNode(AccessTokenConnectionInstructions_default, {
					"server-url": `${props.baseUrl}${MCP_ENDPOINT}`,
					"api-key": props.apiKey,
					"loading-api-key": props.loadingApiKey,
					onRotateKey: _cache[2] || (_cache[2] = ($event) => emit("rotateKey"))
				}, null, 8, [
					"server-url",
					"api-key",
					"loading-api-key"
				]), [[vShow, selectedTab.value === "token"]]),
				createVNode(unref(N8nText_default), {
					size: "small",
					"data-test-id": "mcp-connection-instructions-docs-text"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.instructions.docs.part1")) + " ", 1), createBaseVNode("a", {
						href: unref(MCP_DOCS_PAGE_URL),
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.docs.part2")), 9, _hoisted_1$1)]),
					_: 1
				})
			])], 2);
		};
	}
});
var MCPConnectionInstructions_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1n2r0_123" };
var MCPConnectionInstructions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPConnectionInstructions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectionInstructions_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 0 };
var _hoisted_2 = {
	key: 1,
	class: "mt-s mb-xl"
};
var _hoisted_3 = { key: 1 };
var _hoisted_4 = { key: 0 };
var WorkflowsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowsTable",
	props: {
		workflows: {},
		loading: { type: Boolean }
	},
	emits: ["removeMcpAccess", "refresh"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tableHeaders = ref([
			{
				title: i18n.baseText("generic.project"),
				key: "homeProject",
				width: 150,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.workflowsTable.workflow"),
				key: "workflow",
				width: 200,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("generic.description"),
				key: "description",
				width: 350,
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
		const onWorkflowAction = (action, workflow) => {
			switch (action) {
				case "removeFromMCP":
					emit("removeMcpAccess", workflow);
					break;
				default: break;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["workflow-table-container"]) }, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.header, "mb-s"]) }, [createVNode(unref(N8nHeading_default), {
				size: "medium",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.available.workflows.heading")) + " (" + toDisplayString(props.workflows.length) + ") ", 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.refresh.tooltip") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					"data-test-id": "mcp-workflows-refresh-button",
					size: "small",
					type: "tertiary",
					icon: "refresh-cw",
					square: true,
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresh"))
				})]),
				_: 1
			}, 8, ["content"])], 2), props.workflows.length === 0 ? (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 0,
				"data-test-id": "empty-workflow-list-box",
				heading: unref(i18n).baseText("settings.mcp.empty.title"),
				description: unref(i18n).baseText("settings.mcp.empty.description")
			}, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
				key: 1,
				class: normalizeClass(_ctx.$style["workflow-table"]),
				"data-test-id": "mcp-workflow-table",
				headers: tableHeaders.value,
				items: props.workflows,
				"items-length": props.workflows.length
			}, {
				[`item.workflow`]: withCtx(({ item: item$2 }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["workflow-cell"]),
					"data-test-id": "mcp-workflow-cell"
				}, [
					item$2.parentFolder?.parentFolderId ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style["parent-folder"]),
						"data-test-id": "mcp-workflow-grandparent-folder"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.ellipsis) }, "...", 2), createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.separator),
						"data-test-id": "mcp-workflow-ellipsis-separator"
					}, "/", 2)], 2)) : createCommentVNode("", true),
					item$2.parentFolder ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style["parent-folder"])
					}, [item$2.homeProject ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						"data-test-id": "mcp-workflow-folder-link",
						to: `/projects/${item$2.homeProject.id}/folders/${item$2.parentFolder.id}/workflows`,
						theme: "text",
						class: normalizeClass(_ctx.$style["table-link"]),
						"new-window": true
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-folder-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item$2.parentFolder.name), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["to", "class"])) : (openBlock(), createElementBlock("span", _hoisted_3, [item$2.parentFolder ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "folder",
						size: 16,
						color: "text-light"
					})) : createCommentVNode("", true), createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-folder-name" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(item$2.parentFolder.name), 1)]),
						_: 2
					}, 1024)]))], 2)) : createCommentVNode("", true),
					item$2.parentFolder ? (openBlock(), createElementBlock("span", {
						key: 2,
						class: normalizeClass(_ctx.$style["separator"]),
						"data-test-id": "mcp-workflow-folder-separator"
					}, "/", 2)) : createCommentVNode("", true),
					createVNode(unref(N8nLink_default), {
						"data-test-id": "mcp-workflow-name-link",
						"new-window": true,
						to: unref(router_default).resolve({
							name: unref(VIEWS).WORKFLOW,
							params: { name: item$2.id }
						}).fullPath,
						theme: "text",
						class: normalizeClass(_ctx.$style["table-link"])
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item$2.name), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["to", "class"])
				], 2)]),
				[`item.description`]: withCtx(({ item: item$2 }) => [createVNode(unref(N8nTooltip_default), {
					content: item$2.description,
					disabled: !item$2.description,
					"popper-class": _ctx.$style["description-popper"]
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["description-cell"]) }, [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-description" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(item$2.description || ""), 1)]),
						_: 2
					}, 1024)], 2)]),
					_: 2
				}, 1032, [
					"content",
					"disabled",
					"popper-class"
				])]),
				[`item.homeProject`]: withCtx(({ item: item$2 }) => [item$2.homeProject ? (openBlock(), createElementBlock("span", _hoisted_4, [createVNode(unref(N8nLink_default), {
					"data-test-id": "mcp-workflow-project-link",
					to: unref(router_default).resolve({
						name: unref(VIEWS).PROJECTS_WORKFLOWS,
						params: { projectId: item$2.homeProject.id }
					}).fullPath,
					theme: "text",
					class: normalizeClass([_ctx.$style["table-link"], _ctx.$style["project-link"]]),
					"new-window": true
				}, {
					default: withCtx(() => [
						item$2.homeProject ? (openBlock(), createBlock(ProjectIcon_default, {
							key: 0,
							icon: getProjectIcon(item$2),
							"border-less": true
						}, null, 8, ["icon"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-project-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(getProjectName(item$2)), 1)]),
							_: 2
						}, 1024),
						createVNode(unref(N8nIcon_default), {
							icon: "external-link",
							class: normalizeClass(_ctx.$style["link-icon"]),
							color: "text-light"
						}, null, 8, ["class"])
					]),
					_: 2
				}, 1032, ["to", "class"])])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					"data-test-id": "mcp-workflow-no-project"
				}, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("-")])),
					_: 1
				}))]),
				[`item.actions`]: withCtx(({ item: item$2 }) => [createVNode(unref(N8nActionToggle_default), {
					"data-test-id": "mcp-workflow-action-toggle",
					placement: "bottom",
					actions: tableActions.value,
					theme: "dark",
					onAction: ($event) => onWorkflowAction($event, item$2)
				}, null, 8, ["actions", "onAction"])]),
				_: 2
			}, 1032, [
				"class",
				"headers",
				"items",
				"items-length"
			]))]))], 2);
		};
	}
});
const header = "_header_1c109_127";
const separator = "_separator_1c109_143";
const ellipsis = "_ellipsis_1c109_144";
var WorkflowsTable_vue_vue_type_style_index_0_lang_module_default = {
	"workflow-table-container": "_workflow-table-container_1c109_123",
	header,
	"workflow-table": "_workflow-table_1c109_123",
	"workflow-cell": "_workflow-cell_1c109_137",
	"parent-folder": "_parent-folder_1c109_138",
	separator,
	ellipsis,
	"description-cell": "_description-cell_1c109_151",
	"description-popper": "_description-popper_1c109_160",
	"table-link": "_table-link_1c109_164",
	"link-icon": "_link-icon_1c109_172",
	"project-link": "_project-link_1c109_178"
};
var WorkflowsTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowsTable_vue_vue_type_style_index_0_lang_module_default }]]);
var McpAccessToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpAccessToggle",
	props: {
		modelValue: { type: Boolean },
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["toggleMcpAccess"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const onUpdateMCPEnabled = (value) => {
			emit("toggleMcpAccess", typeof value === "boolean" ? value : Boolean(value));
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["main-toggle-container"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["main-toggle-info"]) }, [createVNode(unref(N8nText_default), { bold: true }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.description")), 1)]),
				_: 1
			})], 2), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style["main-toggle"]),
				"data-test-id": "mcp-toggle-container"
			}, [createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip"),
				disabled: !props.disabled,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(ElSwitch), {
					size: "large",
					"data-test-id": "mcp-access-toggle",
					"model-value": props.modelValue,
					disabled: props.disabled,
					loading: props.loading,
					"onUpdate:modelValue": onUpdateMCPEnabled
				}, null, 8, [
					"model-value",
					"disabled",
					"loading"
				])]),
				_: 1
			}, 8, ["content", "disabled"])], 2)], 2);
		};
	}
});
var McpAccessToggle_vue_vue_type_style_index_0_lang_module_default = {
	"main-toggle-container": "_main-toggle-container_1jnoq_123",
	"main-toggle-info": "_main-toggle-info_1jnoq_133",
	"main-toggle": "_main-toggle_1jnoq_123"
};
var McpAccessToggle_default = /* @__PURE__ */ __plugin_vue_export_helper_default(McpAccessToggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAccessToggle_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const mcpStatusLoading = ref(false);
		const workflowsLoading = ref(false);
		const mcpKeyLoading = ref(false);
		const oAuthClientsLoading = ref(false);
		const availableWorkflows = ref([]);
		const apiKey = computed(() => mcpStore.currentUserMCPKey);
		const connectedOAuthClients = ref([]);
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const isAdmin = computed(() => usersStore.isAdmin);
		const canToggleMCP = computed(() => isOwner.value || isAdmin.value);
		const onToggleMCPAccess = async (enabled) => {
			try {
				mcpStatusLoading.value = true;
				if (await mcpStore.setMcpAccessEnabled(enabled)) {
					await fetchAvailableWorkflows();
					await fetchApiKey();
					await fetchoAuthCLients();
				} else workflowsLoading.value = false;
				mcp.trackUserToggledMcpAccess(enabled);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
			} finally {
				mcpStatusLoading.value = false;
				workflowsLoading.value = false;
			}
		};
		const onRemoveMCPAccess = async (workflow) => {
			try {
				await workflowsStore.updateWorkflowSetting(workflow.id, "availableInMCP", false);
				availableWorkflows.value = availableWorkflows.value.filter((w) => w.id !== workflow.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
			}
		};
		const fetchAvailableWorkflows = async () => {
			workflowsLoading.value = true;
			try {
				availableWorkflows.value = await mcpStore.fetchWorkflowsAvailableForMCP(1, 200);
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
			} finally {
				setTimeout(() => {
					workflowsLoading.value = false;
				}, 200);
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
		const fetchoAuthCLients = async () => {
			try {
				oAuthClientsLoading.value = true;
				connectedOAuthClients.value = await mcpStore.getAllOAuthClients();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const revokeClientAccess = async (client) => {
			try {
				await mcpStore.removeOAuthClient(client.id);
				connectedOAuthClients.value = connectedOAuthClients.value.filter((c) => c.id !== client.id);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.oAuthClients.revoke.success.title"),
					message: i18n.baseText("settings.mcp.oAuthClients.revoke.success.message", { interpolate: { name: client.name } })
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.oAuthClients.revoke.error"));
			}
		};
		const onRefreshOAuthClients = async () => {
			await fetchoAuthCLients();
		};
		const onRefreshWorkflows = async () => {
			await fetchAvailableWorkflows();
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp"));
			if (!mcpStore.mcpAccessEnabled) return;
			await fetchAvailableWorkflows();
			await fetchApiKey();
			await fetchoAuthCLients();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nHeading_default), {
					size: "2xlarge",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp")), 1)]),
					_: 1
				}),
				createVNode(McpAccessToggle_default, {
					"data-test-id": "mcp-toggle-section",
					"model-value": unref(mcpStore).mcpAccessEnabled,
					disabled: !canToggleMCP.value,
					loading: mcpStatusLoading.value,
					onToggleMcpAccess: onToggleMCPAccess
				}, null, 8, [
					"model-value",
					"disabled",
					"loading"
				]),
				unref(mcpStore).mcpAccessEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-enabled-section"
				}, [apiKey.value ? (openBlock(), createBlock(MCPConnectionInstructions_default, {
					key: 0,
					"loading-api-key": mcpKeyLoading.value,
					"base-url": unref(rootStore).urlBaseEditor,
					"api-key": apiKey.value,
					"o-auth-clients": connectedOAuthClients.value,
					"loading-o-auth-clients": oAuthClientsLoading.value,
					onRotateKey: rotateKey,
					onRevokeClient: revokeClientAccess,
					onRefreshClientList: onRefreshOAuthClients
				}, null, 8, [
					"loading-api-key",
					"base-url",
					"api-key",
					"o-auth-clients",
					"loading-o-auth-clients"
				])) : createCommentVNode("", true), createVNode(WorkflowsTable_default, {
					"data-test-id": "mcp-workflow-table",
					workflows: availableWorkflows.value,
					loading: workflowsLoading.value,
					onRemoveMcpAccess: onRemoveMCPAccess,
					onRefresh: onRefreshWorkflows
				}, null, 8, ["workflows", "loading"])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = { container: "_container_727ie_123" };
var SettingsMCPView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsMCPView_default as default };
