import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, p as vShow, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { A as N8nNotice_default, Bn as N8nHeading_default, D as N8nPopoverReka_default, Et as ElSwitch, F as N8nMarkdown_default, Gn as N8nIcon_default, Hn as N8nText_default, R as N8nInfoTip_default, T as N8nRadioButtons_default, Un as N8nButton_default, at as N8nLoading_default, ht as N8nTooltip_default, it as N8nActionToggle_default, mt as N8nLink_default, u as N8nDataTableServer_default, wt as N8nActionBox_default, y as N8nTabs_default, yt as N8nInput_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BlCeUq7F.js";
import "./empty-BuGRxzl4.js";
import { Nn as useDocumentTitle, Wi as useUIStore, dr as useUsersStore, n as useToast, p as useTelemetry, v as useWorkflowsStore } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Vo as VIEWS, jo as getResourcePermissions, vs as WORKFLOW_DESCRIPTION_MODAL_KEY } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import { r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./npsSurvey.store-KZKvEKjG.js";
import "./cloudPlan.store-2sNk8KGc.js";
import "./templates.store-Bn6ky68e.js";
import "./focusPanel.store-B3Hj42tS.js";
import "./executions.store-C5l19MhO.js";
import "./usePinnedData-CWeGQujV.js";
import "./nodeCreator.store-DIZVn2cH.js";
import "./nodeIcon-7dyMxFgB.js";
import { t as useClipboard } from "./useClipboard-Dy2su5yb.js";
import "./useCanvasOperations-DMjr_djE.js";
import "./folders.store-BHgrqAL-.js";
import "./NodeIcon-BDiqVc0r.js";
import "./versions.store-D8eaWwWC.js";
import "./banners.store-C7cnSGkp.js";
import "./dataTable.store-DZQFcsqE.js";
import { t as TimeAgo_default } from "./TimeAgo-i8FaEReL.js";
import "./roles.store-DQrQRhlu.js";
import { t as router_default } from "./router-BLzL8zQb.js";
import "./sso.store-DziiWX1y.js";
import "./insights.store-4ZcvrzGW.js";
import "./insights.constants-B7y0cvTb.js";
import "./insights.utils-Cp5pMXsI.js";
import { i as MCP_ENDPOINT, n as MCP_CONNECT_POPOVER_WIDTH, r as MCP_DOCS_PAGE_URL, s as MCP_TOOLTIP_DELAY, t as LOADING_INDICATOR_TIMEOUT } from "./mcp.constants-svQUbNx5.js";
import "./constants-qk3hx0l8.js";
import "./useRecentResources-JcD1xHVW.js";
import { t as useMcp } from "./useMcp-jQkGTwm8.js";
import { t as useMCPStore } from "./mcp.store-D7jpRP6K.js";
var _hoisted_1$3 = { key: 0 };
var _hoisted_2$3 = { key: 1 };
var _hoisted_3$2 = ["href"];
var MCPEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPEmptyState",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["turnOnMcp"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-empty-state-container"
			}, [createVNode(unref(N8nActionBox_default), {
				icon: {
					type: "icon",
					value: "mcp"
				},
				heading: unref(i18n).baseText("settings.mcp.actionBox.heading"),
				description: unref(i18n).baseText("settings.mcp.description"),
				"button-text": unref(i18n).baseText("settings.mcp.actionBox.button.label"),
				"button-disabled": props.disabled || props.loading,
				"button-variant": "primary",
				"data-test-id": "enable-mcp-access-button",
				"onClick:button": _cache[0] || (_cache[0] = ($event) => emit("turnOnMcp"))
			}, {
				disabledButtonTooltip: withCtx(() => [props.loading ? (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(unref(i18n).baseText("generic.loading")) + "...", 1)) : props.disabled ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip")), 1)) : createCommentVNode("", true)]),
				additionalContent: withCtx(() => [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.emptyState.docs.part1")) + " ", 1), createBaseVNode("a", {
						href: unref(MCP_DOCS_PAGE_URL),
						class: normalizeClass(_ctx.$style["docs-link"]),
						target: "_blank",
						rel: "noopener noreferrer"
					}, toDisplayString(unref(i18n).baseText("generic.learnMore").toLowerCase()), 11, _hoisted_3$2)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"heading",
				"description",
				"button-text",
				"button-disabled"
			])], 2);
		};
	}
});
var MCPEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_bvbc2_123",
	"docs-link": "_docs-link_bvbc2_132"
};
var MCPEmptyState_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
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
	emits: ["disableMcpAccess"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const onUpdateMCPEnabled = () => {
			emit("disableMcpAccess");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["main-toggle-container"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["main-toggle-info"]) }, [createVNode(unref(N8nText_default), {
				bold: true,
				color: _ctx.modelValue ? `success` : `text-light`,
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.modelValue ? unref(i18n).baseText("settings.mcp.header.toggle.enabled") : unref(i18n).baseText("settings.mcp.header.toggle.disabled")), 1)]),
				_: 1
			}, 8, ["color"])], 2), createBaseVNode("div", {
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
	"main-toggle-container": "_main-toggle-container_13hh6_123",
	"main-toggle": "_main-toggle_13hh6_123"
};
var McpAccessToggle_default = /* @__PURE__ */ __plugin_vue_export_helper_default(McpAccessToggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpAccessToggle_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = ["for"];
var _hoisted_2$2 = ["id"];
var ConnectionParameter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionParameter",
	props: {
		id: {},
		label: {},
		value: {},
		valueLoading: {
			type: Boolean,
			default: false
		},
		infoTip: { default: void 0 },
		allowCopy: {
			type: Boolean,
			default: true
		}
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const { copy, copied, isSupported } = useClipboard();
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const handleCopy = async (value) => {
			await copy(value);
			emit("copy", value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["label-wrapper"]) }, [createBaseVNode("label", {
				class: normalizeClass(_ctx.$style.label),
				for: `connection-parameter-${props.id}`
			}, toDisplayString(props.label), 11, _hoisted_1$2), props.infoTip ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["info-tip"])
			}, [createVNode(unref(N8nInfoTip_default), {
				type: "tooltip",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.infoTip), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
				id: `connection-parameter-${props.id}`,
				class: normalizeClass({
					[_ctx.$style["parameter-value"]]: true,
					[_ctx.$style["parameter-value--loading"]]: props.valueLoading
				}),
				"data-test-id": "connection-parameter-value"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["input-wrapper"]) }, [props.valueLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				loading: props.valueLoading,
				variant: "h1",
				class: normalizeClass(_ctx.$style["parameter-skeleton"])
			}, null, 8, ["loading", "class"])) : (openBlock(), createBlock(unref(N8nInput_default), {
				key: 1,
				modelValue: props.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => props.value = $event),
				type: "text",
				readonly: true
			}, null, 8, ["modelValue"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["copy-button-wrapper"]) }, [renderSlot(_ctx.$slots, "customActions"), createVNode(unref(N8nTooltip_default), {
				disabled: !unref(isSupported),
				content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
				"show-after": unref(100),
				placement: "bottom"
			}, {
				default: withCtx(() => [props.allowCopy && unref(isSupported) ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "tertiary",
					icon: unref(copied) ? "check" : "copy",
					square: true,
					class: normalizeClass(_ctx.$style["copy-button"]),
					disabled: props.valueLoading,
					onClick: _cache[1] || (_cache[1] = ($event) => handleCopy(props.value))
				}, null, 8, [
					"icon",
					"class",
					"disabled"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"disabled",
				"content",
				"show-after"
			])], 2)], 10, _hoisted_2$2)], 2);
		};
	}
});
const container$4 = "_container_1p18l_123";
const label$1 = "_label_1p18l_129";
var ConnectionParameter_vue_vue_type_style_index_0_lang_module_default = {
	container: container$4,
	"label-wrapper": "_label-wrapper_1p18l_129",
	"info-tip": "_info-tip_1p18l_134",
	label: label$1,
	"parameter-value": "_parameter-value_1p18l_147",
	"parameter-value--loading": "_parameter-value--loading_1p18l_158",
	"input-wrapper": "_input-wrapper_1p18l_161",
	"parameter-skeleton": "_parameter-skeleton_1p18l_179",
	"copy-button-wrapper": "_copy-button-wrapper_1p18l_201",
	"copy-button": "_copy-button_1p18l_201"
};
var ConnectionParameter_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ConnectionParameter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionParameter_vue_vue_type_style_index_0_lang_module_default }]]);
var MCPOAuthPopoverTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPOAuthPopoverTab",
	props: { serverUrl: {} },
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const handleServerUrlCopy = (value) => {
			emit("copy", value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-oauth-popover-tab"
			}, [createVNode(ConnectionParameter_default, {
				id: "oauth-server-url",
				label: unref(i18n).baseText("settings.mcp.connectPopover.serverUrl"),
				value: props.serverUrl,
				onCopy: handleServerUrlCopy
			}, null, 8, ["label", "value"])], 2);
		};
	}
});
var MCPOAuthPopoverTab_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1y944_123" };
var MCPOAuthPopoverTab_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPOAuthPopoverTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOAuthPopoverTab_vue_vue_type_style_index_0_lang_module_default }]]);
var MCPAccessTokenPopoverTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPAccessTokenPopoverTab",
	props: { serverUrl: {} },
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const mcpStore = useMCPStore();
		const loadingApiKey = ref(true);
		const keyRotating = ref(false);
		const apiKey = computed(() => mcpStore.currentUserMCPKey);
		const { copy, copied, isSupported } = useClipboard();
		const connectionString = computed(() => {
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
			return apiKey.value?.apiKey?.includes("******") ?? false;
		});
		const connectionCode = computed(() => {
			return `\`\`\`json${connectionString.value}\`\`\``;
		});
		const apiKeyText = computed(() => {
			if (keyRotating.value) return `<${i18n.baseText("generic.loading")}...>`;
			return isKeyRedacted.value ? "<YOUR_ACCESS_TOKEN_HERE>" : apiKey.value?.apiKey;
		});
		const fetchApiKey = async () => {
			try {
				loadingApiKey.value = true;
				await mcpStore.getOrCreateApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.apiKey"));
			} finally {
				setTimeout(() => {
					loadingApiKey.value = false;
				}, 200);
			}
		};
		const rotateKey = async () => {
			try {
				keyRotating.value = true;
				await mcpStore.generateNewApiKey();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.rotating.apiKey"));
			} finally {
				setTimeout(() => {
					keyRotating.value = false;
				}, 200);
			}
		};
		const handleConnectionStringCopy = async () => {
			await copy(connectionString.value);
			emit("copy", "mcpJson", connectionString.value);
		};
		const handleUrlCopy = (url) => {
			emit("copy", "serverUrl", url);
		};
		const handleAccessTokenCopy = () => {
			if (apiKey.value?.apiKey) emit("copy", "accessToken", apiKey.value.apiKey);
		};
		onMounted(async () => {
			if (!apiKey.value) await fetchApiKey();
			else loadingApiKey.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-access-token-popover-tab"
			}, [createVNode(ConnectionParameter_default, {
				id: "oauth-server-url",
				label: unref(i18n).baseText("settings.mcp.connectPopover.serverUrl"),
				value: props.serverUrl,
				onCopy: handleUrlCopy
			}, null, 8, ["label", "value"]), loadingApiKey.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["loading-container"])
			}, [createVNode(unref(N8nLoading_default), {
				loading: loadingApiKey.value,
				variant: "h1",
				class: normalizeClass(_ctx.$style["url-skeleton"])
			}, null, 8, ["loading", "class"]), createVNode(unref(N8nLoading_default), {
				loading: loadingApiKey.value,
				variant: "button",
				class: normalizeClass(_ctx.$style["code-skeleton"])
			}, null, 8, ["loading", "class"])], 2)) : apiKey.value?.apiKey ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style["parameters-container"])
			}, [
				createVNode(ConnectionParameter_default, {
					id: "access-token",
					value: apiKey.value.apiKey,
					"value-loading": keyRotating.value,
					label: unref(i18n).baseText("settings.mcp.connectPopover.tab.accessToken"),
					"info-tip": unref(i18n).baseText("settings.mcp.instructions.apiKey.tip"),
					"allow-copy": !isKeyRedacted.value,
					onCopy: handleAccessTokenCopy
				}, {
					customActions: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("settings.mcp.instructions.rotateKey.tooltip"),
						"show-after": unref(100)
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "tertiary",
							icon: "refresh-cw",
							square: true,
							disabled: keyRotating.value,
							onClick: rotateKey
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "show-after"])]),
					_: 1
				}, 8, [
					"value",
					"value-loading",
					"label",
					"info-tip",
					"allow-copy"
				]),
				!isKeyRedacted.value ? (openBlock(), createBlock(unref(N8nNotice_default), { key: 0 }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.access.token.notice")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["json-container"]),
					"data-test-id": "mcp-access-token-json"
				}, [
					createBaseVNode("label", {
						class: normalizeClass(_ctx.$style.label),
						for: "mcp-json"
					}, toDisplayString(unref(i18n).baseText("settings.mcp.connectPopover.jsonConfig")), 3),
					createVNode(unref(N8nMarkdown_default), {
						id: "mcp-json",
						content: connectionCode.value
					}, null, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), {
						disabled: !unref(isSupported),
						content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
						"show-after": unref(100)
					}, {
						default: withCtx(() => [unref(isSupported) && !loadingApiKey.value && !keyRotating.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							type: "tertiary",
							icon: unref(copied) ? "check" : "copy",
							square: true,
							class: normalizeClass(_ctx.$style["copy-json-button"]),
							"data-test-id": "mcp-json-copy-button",
							onClick: handleConnectionStringCopy
						}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"disabled",
						"content",
						"show-after"
					])
				], 2)
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
const container$2 = "_container_1ymth_123";
const label = "_label_1ymth_155";
var MCPAccessTokenPopoverTab_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	"loading-container": "_loading-container_1ymth_128",
	"url-skeleton": "_url-skeleton_1ymth_134",
	"code-skeleton": "_code-skeleton_1ymth_139",
	"parameters-container": "_parameters-container_1ymth_144",
	"json-container": "_json-container_1ymth_150",
	label,
	"copy-json-button": "_copy-json-button_1ymth_173"
};
var MCPAccessTokenPopoverTab_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPAccessTokenPopoverTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPAccessTokenPopoverTab_vue_vue_type_style_index_0_lang_module_default }]]);
var McpConnectPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConnectPopover",
	props: { disabled: { type: Boolean } },
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		const mcpStore = useMCPStore();
		const props = __props;
		const TABS = {
			ACCESS_TOKEN: "accessToken",
			OAUTH: "oauth"
		};
		const tabItems = ref([{
			value: TABS.OAUTH,
			label: i18n.baseText("settings.mcp.connectPopover.tab.oauth")
		}, {
			value: TABS.ACCESS_TOKEN,
			label: i18n.baseText("settings.mcp.connectPopover.tab.accessToken")
		}]);
		const serverUrl = ref(`${rootStore.urlBaseEditor}${MCP_ENDPOINT}`);
		const activeTab = ref(tabItems.value[0].value);
		const handlePopoverOpenChange = (isOpen) => {
			if (isOpen) mcpStore.openConnectPopover();
			else {
				mcpStore.closeConnectPopover();
				mcpStore.resetCurrentUserMCPKey();
			}
		};
		const handleTabChange = (newTab) => {
			activeTab.value = newTab;
		};
		const handleAccessTokenTabCopy = (type) => {
			trackCopyEvent({
				item: {
					serverUrl: "server-url",
					accessToken: "access-token",
					mcpJson: "mcp-json"
				}[type],
				source: "token-tab"
			});
		};
		const trackCopyEvent = (payload) => {
			telemetry.track("User copied MCP connection parameter", {
				parameter: payload.item,
				source: payload.source
			});
		};
		watch(() => props.disabled, (newValue) => {
			if (!newValue) mcpStore.openConnectPopover();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nPopoverReka_default), {
				id: "mcp-connect-popover",
				open: unref(mcpStore).connectPopoverOpen,
				"popper-options": { strategy: "fixed" },
				"content-class": _ctx.$style.popper,
				"show-arrow": false,
				width: `${unref(460)}px`,
				"onUpdate:open": handlePopoverOpenChange
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					"data-test-id": "mcp-connect-popover-trigger-button",
					type: "tertiary",
					disabled: _ctx.disabled
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.connect")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["popper-content"]),
					"data-test-id": "mcp-connect-popover-content"
				}, [createBaseVNode("header", null, [createVNode(unref(N8nRadioButtons_default), {
					"data-test-id": "mcp-connect-popover-tabs",
					"model-value": activeTab.value,
					options: tabItems.value,
					"onUpdate:modelValue": handleTabChange
				}, null, 8, ["model-value", "options"])]), createBaseVNode("main", null, [activeTab.value === TABS.OAUTH ? (openBlock(), createBlock(MCPOAuthPopoverTab_default, {
					key: 0,
					"server-url": serverUrl.value,
					onCopy: _cache[0] || (_cache[0] = ($event) => trackCopyEvent({
						item: "server-url",
						source: "oauth-tab"
					}))
				}, null, 8, ["server-url"])) : activeTab.value === TABS.ACCESS_TOKEN ? (openBlock(), createBlock(MCPAccessTokenPopoverTab_default, {
					key: 1,
					"server-url": serverUrl.value,
					onCopy: handleAccessTokenTabCopy
				}, null, 8, ["server-url"])) : createCommentVNode("", true)])], 2)]),
				_: 1
			}, 8, [
				"open",
				"content-class",
				"width"
			])]);
		};
	}
});
var McpConnectPopover_vue_vue_type_style_index_0_lang_module_default = {
	popper: "_popper_1vjps_123",
	"popper-content": "_popper-content_1vjps_127"
};
var McpConnectPopover_default = /* @__PURE__ */ __plugin_vue_export_helper_default(McpConnectPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConnectPopover_vue_vue_type_style_index_0_lang_module_default }]]);
var MCPHeaderActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPHeaderActions",
	props: {
		toggleDisabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		accessEnabled: { type: Boolean }
	},
	emits: ["disableMcpAccess"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-header-actions"
			}, [createVNode(McpAccessToggle_default, {
				"model-value": _ctx.accessEnabled,
				disabled: props.toggleDisabled,
				loading: props.loading,
				class: normalizeClass(_ctx.$style["mcp-access-toggle"]),
				onDisableMcpAccess: _cache[0] || (_cache[0] = ($event) => emit("disableMcpAccess"))
			}, null, 8, [
				"model-value",
				"disabled",
				"loading",
				"class"
			]), createVNode(McpConnectPopover_default, { disabled: !_ctx.accessEnabled }, null, 8, ["disabled"])], 2);
		};
	}
});
var MCPHeaderActions_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1bb92_123" };
var MCPHeaderActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MCPHeaderActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPHeaderActions_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { key: 0 };
var _hoisted_2$1 = {
	key: 1,
	class: "mt-s mb-xl"
};
var _hoisted_3$1 = { key: 0 };
var _hoisted_4 = { key: 1 };
var _hoisted_5 = ["onClick"];
var _hoisted_6 = { key: 0 };
var _hoisted_7 = { key: 1 };
var WorkflowsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowsTable",
	props: {
		workflows: {},
		loading: { type: Boolean }
	},
	emits: ["removeMcpAccess", "updateDescription"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.mcp.workflows.table.column.name"),
				key: "workflow",
				width: 150,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.workflows.table.column.location"),
				key: "location",
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
		const getAvailableActions = (workflow) => {
			const permissions = getResourcePermissions(workflow.scopes);
			return [{
				label: i18n.baseText("settings.mcp.workflows.table.action.removeMCPAccess"),
				value: "removeFromMCP",
				disabled: !permissions.workflow.update
			}, {
				label: i18n.baseText("settings.mcp.workflows.table.action.updateDescription"),
				value: "updateDescription",
				disabled: !permissions.workflow.update
			}];
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
				case "updateDescription":
					emit("updateDescription", workflow);
					break;
				default: break;
			}
		};
		const navigateToWorkflowList = () => {
			router_default.push({ name: VIEWS.WORKFLOWS });
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style["workflow-table-container"]) }, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(N8nDataTableServer_default), {
				class: normalizeClass(_ctx.$style["workflow-table"]),
				"data-test-id": "mcp-workflow-table",
				headers: tableHeaders.value,
				items: props.workflows,
				"items-length": props.workflows.length
			}, createSlots({
				[`item.workflow`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["workflow-cell"]),
					"data-test-id": "mcp-workflow-cell"
				}, [createVNode(unref(N8nLink_default), {
					"data-test-id": "mcp-workflow-name-link",
					"new-window": true,
					to: unref(router_default).resolve({
						name: unref(VIEWS).WORKFLOW,
						params: { name: item.id }
					}).fullPath,
					theme: "text",
					class: normalizeClass(_ctx.$style["table-link"])
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-name" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1032, ["to", "class"])], 2)]),
				[`item.location`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["location-cell"]),
					"data-test-id": "mcp-workflow-location-cell"
				}, [
					item.homeProject ? (openBlock(), createElementBlock("span", _hoisted_3$1, [createVNode(unref(N8nLink_default), {
						"data-test-id": "mcp-workflow-project-link",
						to: unref(router_default).resolve({
							name: unref(VIEWS).PROJECTS_WORKFLOWS,
							params: { projectId: item.homeProject.id }
						}).fullPath,
						theme: "text",
						class: normalizeClass([_ctx.$style["table-link"], _ctx.$style["project-link"]]),
						"new-window": true
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-project-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(getProjectName(item)), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["to", "class"])])) : createCommentVNode("", true),
					item.parentFolder ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.separator),
						"data-test-id": "mcp-workflow-ellipsis-separator"
					}, "/", 2)) : createCommentVNode("", true),
					item.parentFolder?.parentFolderId ? (openBlock(), createElementBlock("span", {
						key: 2,
						class: normalizeClass(_ctx.$style["parent-folder"]),
						"data-test-id": "mcp-workflow-grandparent-folder"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.ellipsis) }, "...", 2), createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.separator),
						"data-test-id": "mcp-workflow-ellipsis-separator"
					}, "/", 2)], 2)) : createCommentVNode("", true),
					item.parentFolder ? (openBlock(), createElementBlock("span", {
						key: 3,
						class: normalizeClass(_ctx.$style["parent-folder"])
					}, [item.homeProject ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						"data-test-id": "mcp-workflow-folder-link",
						to: `/projects/${item.homeProject.id}/folders/${item.parentFolder.id}/workflows`,
						theme: "text",
						class: normalizeClass(_ctx.$style["table-link"]),
						"new-window": true
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-folder-name" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.parentFolder.name), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["to", "class"])) : (openBlock(), createElementBlock("span", _hoisted_4, [item.parentFolder ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "folder",
						size: 16,
						color: "text-light"
					})) : createCommentVNode("", true), createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-folder-name" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.parentFolder.name), 1)]),
						_: 2
					}, 1024)]))], 2)) : createCommentVNode("", true)
				], 2)]),
				[`item.description`]: withCtx(({ item }) => [createVNode(unref(N8nTooltip_default), {
					content: item.description || unref(i18n).baseText("settings.mcp.workflows.table.column.description.emptyTooltip"),
					"show-after": unref(100),
					"popper-class": _ctx.$style["description-popper"]
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						"data-test-id": "mcp-workflow-description-cell",
						class: normalizeClass(_ctx.$style["description-cell"]),
						onClick: ($event) => emit("updateDescription", item)
					}, [item.description ? (openBlock(), createElementBlock("span", _hoisted_6, [createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-description" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
						_: 2
					}, 1024)])) : (openBlock(), createElementBlock("span", _hoisted_7, [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 14,
						color: "warning",
						class: "mr-2xs"
					}), createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-description-empty" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.column.description.emptyContent")), 1)]),
						_: 1
					})]))], 10, _hoisted_5)]),
					_: 2
				}, 1032, [
					"content",
					"show-after",
					"popper-class"
				])]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nActionToggle_default), {
					class: normalizeClass(_ctx.$style["action-toggle"]),
					"data-test-id": "mcp-workflow-action-toggle",
					placement: "bottom",
					actions: getAvailableActions(item),
					theme: "dark",
					onAction: ($event) => onWorkflowAction($event, item)
				}, null, 8, [
					"class",
					"actions",
					"onAction"
				])]),
				_: 2
			}, [props.workflows.length === 0 ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["empty-state"]) }, [
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-workflow-table-empty-state",
						size: "large",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.empty.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-workflow-table-empty-state-description",
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.empty.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						"data-test-id": "mcp-workflow-table-empty-state-button",
						type: "primary",
						label: unref(i18n).baseText("settings.mcp.workflows.table.empty.button.label"),
						onClick: navigateToWorkflowList
					}, null, 8, ["label"])
				], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"class",
				"headers",
				"items",
				"items-length"
			])]))], 2);
		};
	}
});
const header$1 = "_header_1ubdk_127";
const separator = "_separator_1ubdk_151";
const ellipsis = "_ellipsis_1ubdk_152";
var WorkflowsTable_vue_vue_type_style_index_0_lang_module_default = {
	"workflow-table-container": "_workflow-table-container_1ubdk_123",
	header: header$1,
	"workflow-table": "_workflow-table_1ubdk_123",
	"empty-state": "_empty-state_1ubdk_137",
	"workflow-cell": "_workflow-cell_1ubdk_147",
	separator,
	ellipsis,
	"location-cell": "_location-cell_1ubdk_157",
	"description-cell": "_description-cell_1ubdk_173",
	"description-popper": "_description-popper_1ubdk_191",
	"table-link": "_table-link_1ubdk_195"
};
var WorkflowsTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowsTable_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { "data-test-id": "oauth-clients-table" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 1,
	class: "mt-s mb-xl"
};
var OAuthClientsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsTable",
	props: {
		clients: {},
		loading: { type: Boolean }
	},
	emits: ["revokeClient"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const mcpStore = useMCPStore();
		const props = __props;
		const emit = __emit;
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.clientName"),
				key: "name",
				width: 250,
				disableSort: true,
				value() {}
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
		const onTableAction = (action, item) => {
			if (action === "revokeClient") emit("revokeClient", item);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nDataTableServer_default), {
				"data-test-id": "oauth-clients-data-table",
				headers: tableHeaders.value,
				items: props.clients,
				"items-length": props.clients.length
			}, createSlots({
				[`item.name`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-name",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
					_: 2
				}, 1024)]),
				[`item.createdAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-created-at",
					color: "text-base"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, { date: String(item.createdAt) }, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nActionToggle_default), {
					"data-test-id": "mcp-oauth-client-action-toggle",
					placement: "bottom",
					actions: tableActions.value,
					theme: "dark",
					onAction: ($event) => onTableAction($event, item)
				}, null, 8, ["actions", "onAction"])]),
				_: 2
			}, [props.clients.length === 0 ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["empty-state"]) }, [
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-workflow-table-empty-state",
						size: "large",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oauth.table.empty.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-workflow-table-empty-state-description",
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oauth.table.empty.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						"data-test-id": "mcp-oauth-create-client-button",
						variant: "primary",
						onClick: _cache[0] || (_cache[0] = ($event) => unref(mcpStore).openConnectPopover())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oauth.table.empty.button")), 1)]),
						_: 1
					})
				], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"headers",
				"items",
				"items-length"
			])]))]);
		};
	}
});
var OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1awbw_123",
	"empty-state": "_empty-state_1awbw_129"
};
var OAuthClientsTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OAuthClientsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const uiStore = useUIStore();
		const mcpStatusLoading = ref(false);
		const selectedTab = ref("workflows");
		const tabs = ref([{
			label: i18n.baseText("settings.mcp.tabs.workflows"),
			value: "workflows"
		}, {
			label: i18n.baseText("settings.mcp.tabs.oauth"),
			value: "oauth"
		}]);
		const workflowsLoading = ref(false);
		const availableWorkflows = ref([]);
		const oAuthClientsLoading = ref(false);
		const connectedOAuthClients = ref([]);
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const isAdmin = computed(() => usersStore.isAdmin);
		const canToggleMCP = computed(() => isOwner.value || isAdmin.value);
		const onTabSelected = async (tab) => {
			selectedTab.value = tab;
			if (tab === "workflows" && availableWorkflows.value.length === 0) await fetchAvailableWorkflows();
			else if (tab === "oauth" && connectedOAuthClients.value.length === 0) await fetchoAuthCLients();
		};
		const onToggleMCPAccess = async (enabled) => {
			try {
				mcpStatusLoading.value = true;
				if (await mcpStore.setMcpAccessEnabled(enabled)) {
					await fetchAvailableWorkflows();
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
		const onUpdateDescription = (workflow) => {
			uiStore.openModalWithData({
				name: WORKFLOW_DESCRIPTION_MODAL_KEY,
				data: {
					workflowId: workflow.id,
					workflowDescription: workflow.description ?? "",
					onSave: (updatedDescription) => {
						const index = availableWorkflows.value.findIndex((w) => w.id === workflow.id);
						if (index !== -1) availableWorkflows.value[index] = {
							...availableWorkflows.value[index],
							description: updatedDescription ?? void 0
						};
					}
				}
			});
		};
		const onTableRefresh = async () => {
			if (selectedTab.value === "workflows") await fetchAvailableWorkflows();
			else if (selectedTab.value === "oauth") await fetchoAuthCLients();
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp"));
			if (!mcpStore.mcpAccessEnabled) return;
			await fetchAvailableWorkflows();
		});
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
		const onRefreshWorkflows = async () => {
			await fetchAvailableWorkflows();
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("header", {
					class: normalizeClass(_ctx.$style["main-header"]),
					"data-test-id": "mcp-settings-header"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headings) }, [createVNode(unref(N8nHeading_default), {
					size: "2xlarge",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp")), 1)]),
					_: 1
				}), withDirectives(createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "mcp-settings-description"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.description")) + ". ", 1)]),
					_: 1
				}), createVNode(unref(N8nLink_default), {
					href: unref(MCP_DOCS_PAGE_URL),
					target: "_blank",
					rel: "noopener noreferrer",
					size: "small",
					"data-test-id": "mcp-docs-link"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
					_: 1
				}, 8, ["href"])], 2), [[vShow, unref(mcpStore).mcpAccessEnabled]])], 2), createVNode(MCPHeaderActions_default, {
					"access-enabled": unref(mcpStore).mcpAccessEnabled,
					"toggle-disabled": !canToggleMCP.value,
					loading: mcpStatusLoading.value,
					onDisableMcpAccess: _cache[0] || (_cache[0] = ($event) => onToggleMCPAccess(!unref(mcpStore).mcpAccessEnabled))
				}, null, 8, [
					"access-enabled",
					"toggle-disabled",
					"loading"
				])], 2),
				!unref(mcpStore).mcpAccessEnabled ? (openBlock(), createBlock(MCPEmptyState_default, {
					key: 0,
					disabled: !canToggleMCP.value,
					loading: mcpStatusLoading.value,
					onTurnOnMcp: _cache[1] || (_cache[1] = ($event) => onToggleMCPAccess(true))
				}, null, 8, ["disabled", "loading"])) : createCommentVNode("", true),
				unref(mcpStore).mcpAccessEnabled ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-enabled-section"
				}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style["tabs-header"]) }, [createVNode(unref(N8nTabs_default), {
					"model-value": selectedTab.value,
					options: tabs.value,
					"onUpdate:modelValue": onTabSelected
				}, null, 8, ["model-value", "options"]), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.refresh.tooltip") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						"data-test-id": "mcp-workflows-refresh-button",
						size: "small",
						type: "tertiary",
						icon: "refresh-cw",
						square: true,
						onClick: onTableRefresh
					})]),
					_: 1
				}, 8, ["content"])], 2), createBaseVNode("main", null, [selectedTab.value === "workflows" ? (openBlock(), createBlock(WorkflowsTable_default, {
					key: 0,
					"data-test-id": "mcp-workflow-table",
					workflows: availableWorkflows.value,
					loading: workflowsLoading.value,
					onRemoveMcpAccess: onRemoveMCPAccess,
					onUpdateDescription,
					onRefresh: onRefreshWorkflows
				}, null, 8, ["workflows", "loading"])) : selectedTab.value === "oauth" ? (openBlock(), createBlock(OAuthClientsTable_default, {
					key: 1,
					"data-test-id": "mcp-oauth-clients-table",
					clients: connectedOAuthClients.value,
					loading: oAuthClientsLoading.value,
					onRevokeClient: revokeClientAccess,
					onRefresh: onTableRefresh
				}, null, 8, ["clients", "loading"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
const container = "_container_11gme_123";
const headings = "_headings_11gme_141";
const description = "_description_11gme_146";
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	"main-header": "_main-header_11gme_128",
	headings,
	description,
	"tabs-header": "_tabs-header_11gme_152"
};
var SettingsMCPView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsMCPView_default as default };
