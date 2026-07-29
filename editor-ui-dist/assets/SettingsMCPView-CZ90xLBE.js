import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, p as vShow, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Z as useI18n } from "./dist-EhQ9PC87.js";
import { A as N8nDataTableServer_default, C as DialogTitle_default, G as N8nTabs_default, I as N8nUserInfo_default, Ki as N8nBadge_default, Lt as N8nEmptyState_default, Nt as N8nInputLabel_default, P as N8nUserSelect_default, Rt as N8nHeading_default, S as Dialog_default, T as DialogDescription_default, Ut as N8nOption_default, Vt as N8nSelect_default, ao as N8nText_default, at as N8nNotice_default, b as AlertDialog_default, do as N8nButton_default, et as N8nRadioButtons_default, fo as N8nIcon_default, gt as N8nInfoTip_default, in as N8nActionToggle_default, lo as Input_default, nt as N8nPopover_default, oa as N8nTooltip_default, pt as N8nMarkdown_default, un as N8nLoading_default, w as DialogHeader_default, wt as N8nLink_default, x as DialogFooter_default } from "./src-BoCzurIh.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-HK97wLZ5.js";
import { nt as capitalCase } from "./workflowDocument.store-D_ncq8GX.js";
import { $o as MCP_CLIENT_CONNECTED_PERIODS, Mc as DEBOUNCE_TIME, Qi as WORKFLOW_DESCRIPTION_MODAL_KEY, Uc as require_debounce, Vc as getDebounceTime, es as MCP_CLIENT_TYPE_FILTERS, fs as getResourcePermissions, pi as VIEWS } from "./constants-BzyjfRY2.js";
import { f as useUIStore, l as useRBACStore, n as hasPermission, p as useTelemetry, t as useUsersStore } from "./users.store-BjOQ_paL.js";
import { t as router } from "./router-CmY0CAb0.js";
import { t as useDocumentTitle } from "./useDocumentTitle-CyUdysBY.js";
import { t as useClipboard } from "./useClipboard-DEML84ub.js";
import { i as groupScopes, n as classifyScope } from "./scopes.utils-BzBAYg8P.js";
import { t as TimeAgo_default } from "./TimeAgo-L-GrHB6F.js";
import { t as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY } from "./constants-BaS2AXfY.js";
import { n as MCP_CONNECT_WORKFLOWS_MODAL_KEY, o as MCP_SCOPE_RESOURCE_ICONS, r as MCP_DOCS_PAGE_URL } from "./mcp.constants-D-fL2-wC.js";
import { t as useMcp } from "./useMcp-BI911RY4.js";
import { a as scopeLabel, c as cursor_default, i as isFullAccessGrant, l as claude_default, n as EMPTY_OAUTH_CLIENT_FILTERS, o as vscode_default, r as getClientBrand, s as openai_default, t as useMCPStore } from "./mcp.store-BqawZj_M.js";
import { t as useExposeAllWorkflowsToMcpStore } from "./exposeAllWorkflowsToMcp.store-D9Q-GjHC.js";
import { t as McpAccessToggle_default } from "./McpAccessToggle-Cz0EgeNn.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-Declgk-Z.js";
import { t as WorkflowLocation_default } from "./WorkflowLocation-Bb6IjmK4.js";
//#region src/features/ai/mcpAccess/components/MCPEmptyState.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { key: 0 };
var _hoisted_2$3 = { key: 1 };
var _hoisted_3$1 = { key: 2 };
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
		},
		managedByEnv: {
			type: Boolean,
			default: false
		}
	},
	emits: ["turnOnMcp"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const buttonDisabled = computed(() => props.disabled || props.loading);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "mcp-empty-state-container"
			}, [createVNode(unref(N8nEmptyState_default), {
				icon: {
					type: "cards",
					center: "mcp",
					sides: [
						unref(claude_default),
						unref(cursor_default),
						unref(vscode_default),
						unref(openai_default)
					]
				},
				heading: unref(i18n).baseText("settings.mcp.actionBox.heading"),
				description: unref(i18n).baseText("settings.mcp.emptyState.description")
			}, {
				additionalContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					class: "mr-2xs n8n-button--highlight",
					href: unref(MCP_DOCS_PAGE_URL),
					target: "_blank",
					"data-test-id": "mcp-empty-state-learn-more"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nTooltip_default), { disabled: !buttonDisabled.value }, {
					content: withCtx(() => [props.loading ? (openBlock(), createElementBlock("span", _hoisted_1$7, toDisplayString(unref(i18n).baseText("generic.loading")) + "...", 1)) : props.managedByEnv ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(unref(i18n).baseText("settings.mcp.managedByEnv.tooltip")), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip")), 1))]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "solid",
						disabled: buttonDisabled.value,
						"data-test-id": "enable-mcp-access-button",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("turnOnMcp"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.actionBox.button.label")), 1)]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["disabled"])]),
				_: 1
			}, 8, [
				"icon",
				"heading",
				"description"
			])], 2);
		};
	}
});
var MCPEmptyState_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1fs2d_125" };
var MCPEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/header/connectPopover/ConnectionParameter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["for"];
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
			}, toDisplayString(props.label), 11, _hoisted_1$6), props.infoTip ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["info-tip"])
			}, [createVNode(unref(N8nInfoTip_default), {
				type: "tooltip",
				size: "small",
				enterable: false
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
			}, null, 8, ["loading", "class"])) : (openBlock(), createBlock(unref(Input_default), {
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
					variant: "subtle",
					iconOnly: "",
					icon: unref(copied) ? "check" : "copy",
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
//#endregion
//#region src/features/ai/mcpAccess/components/header/connectPopover/ConnectionParameter.vue?vue&type=style&index=0&lang.module.scss
var container$5 = "_container_heprf_125";
var label$1 = "_label_heprf_131";
var ConnectionParameter_vue_vue_type_style_index_0_lang_module_default = {
	container: container$5,
	"label-wrapper": "_label-wrapper_heprf_131",
	"info-tip": "_info-tip_heprf_136",
	label: label$1,
	"parameter-value": "_parameter-value_heprf_153",
	"parameter-value--loading": "_parameter-value--loading_heprf_164",
	"input-wrapper": "_input-wrapper_heprf_167",
	"parameter-skeleton": "_parameter-skeleton_heprf_193",
	"copy-button-wrapper": "_copy-button-wrapper_heprf_220",
	"copy-button": "_copy-button_heprf_220"
};
var ConnectionParameter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionParameter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionParameter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/header/connectPopover/MCPOAuthPopoverTab.vue?vue&type=script&setup=true&lang.ts
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
var MCPOAuthPopoverTab_vue_vue_type_style_index_0_lang_module_default = { container: "_container_x8qjm_125" };
var MCPOAuthPopoverTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPOAuthPopoverTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPOAuthPopoverTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/header/connectPopover/MCPAccessTokenPopoverTab.vue?vue&type=script&setup=true&lang.ts
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
      "type": "http",
      "url": "${props.serverUrl}",
      "headers": {
        "Authorization": "Bearer ${apiKeyText.value}"
      }
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
							variant: "subtle",
							iconOnly: "",
							icon: "refresh-cw",
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
							variant: "subtle",
							iconOnly: "",
							icon: unref(copied) ? "check" : "copy",
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
//#endregion
//#region src/features/ai/mcpAccess/components/header/connectPopover/MCPAccessTokenPopoverTab.vue?vue&type=style&index=0&lang.module.scss
var container$3 = "_container_1jg97_125";
var label = "_label_1jg97_157";
var MCPAccessTokenPopoverTab_vue_vue_type_style_index_0_lang_module_default = {
	container: container$3,
	"loading-container": "_loading-container_1jg97_130",
	"url-skeleton": "_url-skeleton_1jg97_136",
	"code-skeleton": "_code-skeleton_1jg97_141",
	"parameters-container": "_parameters-container_1jg97_146",
	"json-container": "_json-container_1jg97_152",
	label,
	"copy-json-button": "_copy-json-button_1jg97_175"
};
var MCPAccessTokenPopoverTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPAccessTokenPopoverTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPAccessTokenPopoverTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/header/connectPopover/McpConnectPopover.vue?vue&type=script&setup=true&lang.ts
var McpConnectPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpConnectPopover",
	props: { disabled: { type: Boolean } },
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const mcpStore = useMCPStore();
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
		const serverUrl = computed(() => mcpStore.serverUrl);
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nPopover_default), {
				id: "mcp-connect-popover",
				open: unref(mcpStore).connectPopoverOpen,
				"content-class": _ctx.$style.popper,
				"show-arrow": false,
				width: `${unref(460)}px`,
				"onUpdate:open": handlePopoverOpenChange
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "mcp-connect-popover-trigger-button",
					disabled: __props.disabled
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connectPopover.triggerLabel")), 1)]),
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
	popper: "_popper_7glv7_125",
	"popper-content": "_popper-content_7glv7_129"
};
var McpConnectPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpConnectPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpConnectPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/header/MCPHeaderActions.vue?vue&type=script&setup=true&lang.ts
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
		accessEnabled: { type: Boolean },
		managedByEnv: {
			type: Boolean,
			default: false
		}
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
				"model-value": __props.accessEnabled,
				disabled: props.toggleDisabled,
				loading: props.loading,
				"managed-by-env": props.managedByEnv,
				class: normalizeClass(_ctx.$style["mcp-access-toggle"]),
				onDisableMcpAccess: _cache[0] || (_cache[0] = ($event) => emit("disableMcpAccess"))
			}, null, 8, [
				"model-value",
				"disabled",
				"loading",
				"managed-by-env",
				"class"
			]), createVNode(McpConnectPopover_default, { disabled: !__props.accessEnabled }, null, 8, ["disabled"])], 2);
		};
	}
});
var MCPHeaderActions_vue_vue_type_style_index_0_lang_module_default = { container: "_container_gl7pe_125" };
var MCPHeaderActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPHeaderActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPHeaderActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/WorkflowsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { key: 0 };
var _hoisted_2$1 = ["onClick"];
var WorkflowsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowsTable",
	props: /* @__PURE__ */ mergeModels({
		workflows: {},
		totalCount: {},
		loading: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"removeMcpAccess",
		"bulkRemoveMcpAccess",
		"connectWorkflows",
		"updateDescription",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const tableOptions = useModel(__props, "tableOptions");
		const tablePage = computed({
			get: () => tableOptions.value.page,
			set: (page) => {
				tableOptions.value = {
					...tableOptions.value,
					page
				};
			}
		});
		const tableItemsPerPage = computed({
			get: () => tableOptions.value.itemsPerPage,
			set: (itemsPerPage) => {
				tableOptions.value = {
					...tableOptions.value,
					itemsPerPage
				};
			}
		});
		const tableSortBy = computed({
			get: () => tableOptions.value.sortBy,
			set: (sortBy) => {
				tableOptions.value = {
					...tableOptions.value,
					sortBy
				};
			}
		});
		const emit = __emit;
		const i18n = useI18n();
		const itemsLength = computed(() => props.totalCount ?? props.workflows.length);
		const selectedWorkflowIds = ref([]);
		watch(() => props.workflows, () => {
			selectedWorkflowIds.value = [];
		});
		const isRowSelectable = (workflow) => !!getResourcePermissions(workflow.scopes).workflow.update;
		const clearSelection = () => {
			selectedWorkflowIds.value = [];
		};
		const onBulkRemoveMcpAccess = () => {
			emit("bulkRemoveMcpAccess", selectedWorkflowIds.value);
		};
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
		const onConnectClick = () => {
			emit("connectWorkflows");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["mt-s mb-xl", _ctx.$style["table-container"]])
			}, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableSortBy.value,
				"onUpdate:sortBy": _cache[0] || (_cache[0] = ($event) => tableSortBy.value = $event),
				page: tablePage.value,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => tablePage.value = $event),
				"items-per-page": tableItemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => tableItemsPerPage.value = $event),
				selection: selectedWorkflowIds.value,
				"onUpdate:selection": _cache[3] || (_cache[3] = ($event) => selectedWorkflowIds.value = $event),
				class: normalizeClass(_ctx.$style["workflow-table"]),
				"data-test-id": "mcp-workflow-table",
				headers: tableHeaders.value,
				items: props.workflows,
				"items-length": itemsLength.value,
				"page-sizes": [
					10,
					25,
					50
				],
				"show-select": itemsLength.value > 0,
				"item-selectable": isRowSelectable,
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, createSlots({
				[`item.workflow`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["workflow-cell"]),
					"data-test-id": "mcp-workflow-cell"
				}, [createVNode(unref(N8nLink_default), {
					"data-test-id": "mcp-workflow-name-link",
					"new-window": true,
					to: unref(router).resolve({
						name: unref(VIEWS).WORKFLOW,
						params: { workflowId: item.id }
					}).fullPath,
					theme: "text",
					class: normalizeClass([_ctx.$style["table-link"], _ctx.$style.truncate])
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "mcp-workflow-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1032, ["to", "class"])], 2)]),
				[`item.location`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["location-cell"]),
					"data-test-id": "mcp-workflow-location-cell"
				}, [createVNode(WorkflowLocation_default, {
					"workflow-id": item.id,
					"home-project": item.homeProject,
					"parent-folder": item.parentFolder,
					"as-links": true
				}, null, 8, [
					"workflow-id",
					"home-project",
					"parent-folder"
				])], 2)]),
				[`item.description`]: withCtx(({ item }) => [createVNode(unref(N8nTooltip_default), {
					content: item.description ? unref(i18n).baseText("settings.mcp.workflows.table.column.description.editTooltip") : unref(i18n).baseText("settings.mcp.workflows.table.column.description.emptyTooltip"),
					"show-after": unref(100),
					"as-child": ""
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						"data-test-id": "mcp-workflow-description-cell",
						class: normalizeClass(_ctx.$style["description-cell"]),
						onClick: ($event) => emit("updateDescription", item)
					}, [item.description ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["description-text"]),
						"data-test-id": "mcp-workflow-description"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
						_: 2
					}, 1032, ["class"])) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style["empty-description"])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 14,
						color: "warning",
						class: "mr-2xs"
					}), createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-description-empty" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.column.description.emptyContent")), 1)]),
						_: 1
					})], 2))], 10, _hoisted_2$1)]),
					_: 2
				}, 1032, ["content", "show-after"])]),
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
			}, [itemsLength.value === 0 ? {
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
						variant: "solid",
						"data-test-id": "mcp-workflow-table-empty-state-button",
						label: unref(i18n).baseText("settings.mcp.connectWorkflows"),
						onClick: onConnectClick
					}, null, 8, ["label"])
				], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"selection",
				"class",
				"headers",
				"items",
				"items-length",
				"show-select"
			]), createVNode(SelectedItemsInfo_default, {
				class: normalizeClass(_ctx.$style["selection-bar"]),
				"selected-count": selectedWorkflowIds.value.length,
				onClearSelection: clearSelection
			}, {
				actions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "mcp-bulk-remove-access-button",
					label: unref(i18n).baseText("settings.mcp.workflows.table.action.removeMCPAccess"),
					onClick: onBulkRemoveMcpAccess
				}, null, 8, ["label"])]),
				_: 1
			}, 8, ["class", "selected-count"])], 2))]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/WorkflowsTable.vue?vue&type=style&index=0&lang.module.scss
var header$1 = "_header_5oiwe_125";
var truncate = "_truncate_5oiwe_200";
var WorkflowsTable_vue_vue_type_style_index_0_lang_module_default = {
	header: header$1,
	"table-container": "_table-container_5oiwe_131",
	"selection-bar": "_selection-bar_5oiwe_131",
	"workflow-table": "_workflow-table_5oiwe_140",
	"empty-state": "_empty-state_5oiwe_150",
	"workflow-cell": "_workflow-cell_5oiwe_160",
	"location-cell": "_location-cell_5oiwe_167",
	"description-cell": "_description-cell_5oiwe_171",
	"description-text": "_description-text_5oiwe_182",
	"empty-description": "_empty-description_5oiwe_191",
	"table-link": "_table-link_5oiwe_196",
	truncate
};
var WorkflowsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var _hoisted_1$4 = ["data-test-id"];
var OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientDetailsModal",
	props: {
		client: {},
		open: { type: Boolean },
		scopeTools: {}
	},
	emits: ["update:open", "revoke"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const brand = computed(() => props.client ? getClientBrand(props.client.name) : null);
		const ownerLabel = computed(() => {
			const owner = props.client?.owner;
			if (!owner) return null;
			const name = [owner.firstName, owner.lastName].filter(Boolean).join(" ");
			return name ? `${name} (${owner.email})` : owner.email;
		});
		const subtitle = computed(() => {
			const type = brand.value?.type;
			if (!type) return i18n.baseText("settings.mcp.oAuthClients.details.subtitle");
			return i18n.baseText("settings.mcp.oAuthClients.details.subtitleWithType", { interpolate: { type: i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`) } });
		});
		const isFullAccess = computed(() => isFullAccessGrant(props.client?.scopes ?? []));
		function resourceLabel(resource) {
			const key = `settings.mcp.oAuthClients.resource.${resource}`;
			const label = i18n.baseText(key);
			return label === key ? capitalCase(resource) : label;
		}
		/** The granted scope tokens grouped by their resource prefix, in grant order. */
		const accessGroups = computed(() => {
			const granted = props.client?.scopes;
			if (!granted) return [];
			return groupScopes(granted, []).map((group) => ({
				resource: group.key,
				label: resourceLabel(group.key),
				icon: MCP_SCOPE_RESOURCE_ICONS[group.key] ?? "mcp",
				scopes: group.scopes.map((scope) => ({
					scope,
					access: classifyScope(scope),
					tools: props.scopeTools?.[scope] ?? []
				}))
			}));
		});
		function onRevoke() {
			if (!props.client) return;
			emit("revoke", props.client);
			emit("update:open", false);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "xlarge",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [__props.client ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-client-details-modal"
				}, [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["icon-chip"]) }, [brand.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(brand.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"]))], 2), createTextVNode(" " + toDisplayString(__props.client.name), 1)], 2)]),
							_: 1
						}), createVNode(unref(DialogDescription_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(subtitle.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [
						ownerLabel.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedBy")), 1)]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-by"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(ownerLabel.value), 1)]),
							_: 1
						})], 64)) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedOn")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-on"
						}, {
							default: withCtx(() => [createVNode(TimeAgo_default, {
								date: new Date(__props.client.grantedAt).toISOString(),
								capitalize: ""
							}, null, 8, ["date"])]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.access")), 1)]),
							_: 1
						}),
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.access),
							"data-test-id": "mcp-client-details-access"
						}, [isFullAccess.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							color: "text-dark",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.access.full")), 1)]),
							_: 1
						})) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(accessGroups.value, (group) => {
							return openBlock(), createElementBlock("div", {
								key: group.resource,
								class: normalizeClass(_ctx.$style["access-group"]),
								"data-test-id": `mcp-client-details-group-${group.resource}`
							}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["access-group-label"]) }, [createVNode(unref(N8nIcon_default), {
								icon: group.icon,
								size: "small",
								class: normalizeClass(_ctx.$style["access-group-icon"])
							}, null, 8, ["icon", "class"]), createVNode(unref(N8nText_default), {
								color: "text-dark",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
								_: 2
							}, 1024)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["scope-list"]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.scopes, (entry) => {
								return openBlock(), createElementBlock("div", {
									key: entry.scope,
									class: normalizeClass(_ctx.$style["scope-row"])
								}, [createVNode(unref(N8nTooltip_default), {
									disabled: entry.tools.length === 0,
									placement: "top",
									"show-after": 150,
									"content-class": _ctx.$style["tools-tooltip"]
								}, {
									content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["tools-popover"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["tools-popover-header"]) }, toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.enablesTools", {
										adjustToNumber: entry.tools.length,
										interpolate: { count: entry.tools.length }
									})), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(entry.tools, (tool) => {
										return openBlock(), createElementBlock("div", {
											key: tool,
											class: normalizeClass(_ctx.$style["tool-row"])
										}, [createVNode(unref(N8nIcon_default), {
											icon: "wrench",
											size: "xsmall",
											class: normalizeClass(_ctx.$style["tool-icon"])
										}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style["tool-name"]) }, toDisplayString(tool), 3)], 2);
									}), 128))], 2)]),
									default: withCtx(() => [createBaseVNode("span", {
										class: normalizeClass(_ctx.$style["scope-token"]),
										tabindex: "0"
									}, toDisplayString(entry.scope), 3)]),
									_: 2
								}, 1032, ["disabled", "content-class"]), createVNode(unref(N8nBadge_default), {
									theme: entry.access === "read" ? "default" : "danger",
									class: normalizeClass(_ctx.$style["access-badge"])
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.mcp.oAuthClients.details.badge.${entry.access}`)), 1)]),
									_: 2
								}, 1032, ["theme", "class"])], 2);
							}), 128))], 2)], 10, _hoisted_1$4);
						}), 128))], 2)
					], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							"data-test-id": "mcp-client-details-close",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "destructive",
							"data-test-id": "mcp-client-details-revoke",
							onClick: onRevoke
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_yngil_125";
var title = "_title_yngil_131";
var icon = "_icon_yngil_137";
var details = "_details_yngil_157";
var access$1 = "_access_yngil_167";
var OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	title,
	"icon-chip": "_icon-chip_yngil_137",
	icon,
	details,
	access: access$1,
	"access-group": "_access-group_yngil_174",
	"access-group-label": "_access-group-label_yngil_181",
	"access-group-icon": "_access-group-icon_yngil_190",
	"scope-list": "_scope-list_yngil_194",
	"scope-row": "_scope-row_yngil_202",
	"scope-token": "_scope-token_yngil_210",
	"access-badge": "_access-badge_yngil_222",
	"tools-tooltip": "_tools-tooltip_yngil_229",
	"tools-popover": "_tools-popover_yngil_234",
	"tools-popover-header": "_tools-popover-header_yngil_243",
	"tool-row": "_tool-row_yngil_252",
	"tool-icon": "_tool-icon_yngil_258",
	"tool-name": "_tool-name_yngil_262"
};
var OAuthClientDetailsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientOwnerCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { "data-test-id": "mcp-client-owner-cell" };
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientOwnerCell.vue
var OAuthClientOwnerCell_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientOwnerCell",
	props: {
		owner: {},
		isCurrentUser: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nUserInfo_default), {
				"first-name": __props.owner.firstName ?? "",
				"last-name": __props.owner.lastName ?? "",
				email: __props.owner.email,
				"is-current-user": __props.isCurrentUser
			}, null, 8, [
				"first-name",
				"last-name",
				"email",
				"is-current-user"
			])]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsFilters.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 1 };
var OAuthClientsFilters_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsFilters",
	props: {
		modelValue: {},
		owners: {},
		showOwnerFilter: { type: Boolean },
		currentUserId: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const CLIENT_TYPE_OPTIONS = MCP_CLIENT_TYPE_FILTERS;
		const CONNECTED_OPTIONS = MCP_CLIENT_CONNECTED_PERIODS;
		const connectedOptionLabels = {
			last7: i18n.baseText("settings.mcp.oAuthClients.filters.connected.lastXDays", { interpolate: { count: 7 } }),
			last30: i18n.baseText("settings.mcp.oAuthClients.filters.connected.lastXDays", { interpolate: { count: 30 } }),
			older: i18n.baseText("settings.mcp.oAuthClients.filters.connected.older")
		};
		const filtersLength = computed(() => {
			const { type, ownerId, connected } = props.modelValue;
			return [
				type,
				ownerId,
				connected
			].filter((value) => value !== null).length;
		});
		const hasFilters = computed(() => filtersLength.value > 0);
		function setKeyValue(key, value) {
			emit("update:modelValue", {
				...props.modelValue,
				[key]: value === "" ? null : value
			});
		}
		function resetFilters() {
			emit("update:modelValue", {
				...props.modelValue,
				type: null,
				ownerId: null,
				connected: null
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				width: "304px",
				"content-class": _ctx.$style["popover-content"],
				align: "end"
			}, {
				trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["trigger-wrapper"]) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					icon: "funnel",
					size: "medium",
					"icon-only": !hasFilters.value,
					active: hasFilters.value,
					"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
					"data-test-id": "mcp-clients-filters-trigger"
				}, {
					default: withCtx(() => [hasFilters.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["filter-button-count"]),
						"data-test-id": "mcp-clients-filters-count",
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), hasFilters.value ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 1)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"icon-only",
					"active",
					"aria-label"
				])], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "mcp-clients-filters-dropdown"
				}, [
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.clientType"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]),
					createVNode(unref(N8nSelect_default), {
						"model-value": __props.modelValue.type ?? "",
						size: "medium",
						"data-test-id": "mcp-clients-filter-type",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => setKeyValue("type", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.clientType.all")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CLIENT_TYPE_OPTIONS), (type) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: type,
								value: type,
								label: unref(i18n).baseText(`settings.mcp.oAuthClients.filters.clientType.${type}`)
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value"]),
					__props.showOwnerFilter ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connectedBy"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mt-s mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nUserSelect_default), {
						users: __props.owners ?? [],
						"model-value": __props.modelValue.ownerId ?? "",
						"current-user-id": __props.currentUserId,
						placeholder: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connectedBy.all"),
						size: "medium",
						clearable: "",
						"data-test-id": "mcp-clients-filter-owner",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => setKeyValue("ownerId", $event ?? ""))
					}, null, 8, [
						"users",
						"model-value",
						"current-user-id",
						"placeholder"
					])], 64)) : createCommentVNode("", true),
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connected"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mt-s mb-3xs"
					}, null, 8, ["label"]),
					createVNode(unref(N8nSelect_default), {
						"model-value": __props.modelValue.connected ?? "",
						size: "medium",
						"data-test-id": "mcp-clients-filter-connected",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => setKeyValue("connected", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connected.allTime")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CONNECTED_OPTIONS), (period) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: period,
								value: period,
								label: connectedOptionLabels[period]
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value"]),
					hasFilters.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
					}, [createVNode(unref(N8nLink_default), {
						"data-test-id": "mcp-clients-filters-reset",
						onClick: resetFilters
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["content-class"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsFilters.vue?vue&type=style&index=0&lang.module.scss
var OAuthClientsFilters_vue_vue_type_style_index_0_lang_module_default = {
	"popover-content": "_popover-content_61q8h_125",
	"trigger-wrapper": "_trigger-wrapper_61q8h_129",
	"filter-button-count": "_filter-button-count_61q8h_136",
	"filters-dropdown-footer": "_filters-dropdown-footer_61q8h_141"
};
var OAuthClientsFilters_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientsFilters_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsFilters_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "oauth-clients-table" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 1,
	class: "mt-s mb-xl"
};
var _hoisted_4 = { key: 1 };
var OAuthClientsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsTable",
	props: {
		clients: {},
		loading: { type: Boolean },
		scopeTools: {}
	},
	emits: [
		"revokeClient",
		"update:ownership",
		"update:filters",
		"update:options"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const mcpStore = useMCPStore();
		const rbacStore = useRBACStore();
		const usersStore = useUsersStore();
		const props = __props;
		const emit = __emit;
		const page = computed({
			get: () => mcpStore.oauthClientsPage,
			set: (value) => emit("update:options", {
				page: value,
				itemsPerPage: itemsPerPage.value
			})
		});
		const itemsPerPage = computed({
			get: () => mcpStore.oauthClientsPageSize,
			set: (value) => emit("update:options", {
				page: page.value,
				itemsPerPage: value
			})
		});
		const detailsClient = ref(null);
		const detailsOpen = ref(false);
		const canManageAllClients = computed(() => rbacStore.hasScope("mcp:manage"));
		const ownership = computed(() => mcpStore.oauthClientsOwnership);
		const tabOptions = computed(() => [{
			label: i18n.baseText("settings.mcp.oAuthClients.tabs.mine"),
			value: "mine",
			tag: String(mcpStore.oauthClientTotals.mine)
		}, {
			label: i18n.baseText("settings.mcp.oAuthClients.tabs.all"),
			value: "all",
			tag: String(mcpStore.oauthClientTotals.all ?? 0)
		}]);
		const filters = ref({ ...EMPTY_OAUTH_CLIENT_FILTERS });
		const searchQuery = ref("");
		const hasActiveFilters = computed(() => filters.value.search.trim() !== "" || filters.value.type !== null || filters.value.ownerId !== null || filters.value.connected !== null);
		function onFiltersChange(newFilters) {
			filters.value = newFilters;
			emit("update:filters", newFilters);
		}
		const applySearch = (0, import_debounce.default)((value) => {
			onFiltersChange({
				...filters.value,
				search: value
			});
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		function onSearchInput(value) {
			searchQuery.value = value;
			applySearch(value);
		}
		const ownerOptions = computed(() => mcpStore.oauthClientOwners.map((owner) => ({
			id: owner.id,
			firstName: owner.firstName,
			lastName: owner.lastName,
			email: owner.email,
			fullName: [owner.firstName, owner.lastName].filter(Boolean).join(" ") || void 0
		})));
		function onOwnershipChange(newOwnership) {
			if (newOwnership === ownership.value) return;
			applySearch.cancel();
			filters.value = { ...EMPTY_OAUTH_CLIENT_FILTERS };
			searchQuery.value = "";
			emit("update:ownership", newOwnership);
		}
		function rowId(row) {
			return `${row.id}:${row.owner?.id ?? "mine"}`;
		}
		const tableHeaders = computed(() => [
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.clientName"),
				key: "name",
				width: 220,
				disableSort: true,
				value() {}
			},
			...ownership.value === "all" ? [{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedBy"),
				key: "owner",
				width: 200,
				disableSort: true,
				value() {}
			}] : [],
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.access"),
				key: "scopes",
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedAt"),
				key: "grantedAt",
				width: 160,
				disableSort: true,
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 140,
				disableSort: true,
				value() {}
			}
		]);
		function accessSummary(client) {
			if (client.scopes.length === 0) return i18n.baseText("settings.mcp.oAuthClients.access.none");
			if (isFullAccessGrant(client.scopes)) return i18n.baseText("settings.mcp.oAuthClients.access.full");
			const visible = client.scopes.slice(0, 2).map((scope) => scopeLabel(i18n, scope)).join(", ");
			const remaining = client.scopes.length - 2;
			if (remaining <= 0) return visible;
			return `${visible} ${i18n.baseText("settings.mcp.oAuthClients.scope.more", { interpolate: { count: remaining } })}`;
		}
		function clientTypeLabel(client) {
			const type = getClientBrand(client.name).type;
			if (!type) return null;
			return i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`);
		}
		function openDetails(item) {
			detailsClient.value = item;
			detailsOpen.value = true;
		}
		function onRevoke(item) {
			emit("revokeClient", item);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [canManageAllClients.value ? (openBlock(), createBlock(unref(N8nTabs_default), {
				key: 0,
				"model-value": ownership.value,
				options: tabOptions.value,
				"data-test-id": "mcp-clients-tabs",
				"onUpdate:modelValue": onOwnershipChange
			}, null, 8, ["model-value", "options"])) : (openBlock(), createElementBlock("div", _hoisted_4)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [createVNode(unref(Input_default), {
				"model-value": searchQuery.value,
				placeholder: unref(i18n).baseText("settings.mcp.oAuthClients.search.placeholder"),
				class: normalizeClass(_ctx.$style.search),
				size: "medium",
				clearable: "",
				"data-test-id": "mcp-clients-search",
				"onUpdate:modelValue": onSearchInput
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"model-value",
				"placeholder",
				"class"
			]), createVNode(OAuthClientsFilters_default, {
				"model-value": filters.value,
				owners: ownerOptions.value,
				"show-owner-filter": ownership.value === "all",
				"current-user-id": unref(usersStore).currentUser?.id,
				"onUpdate:modelValue": onFiltersChange
			}, null, 8, [
				"model-value",
				"owners",
				"show-owner-filter",
				"current-user-id"
			])], 2)], 2), createVNode(unref(N8nDataTableServer_default), {
				page: page.value,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => page.value = $event),
				"items-per-page": itemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => itemsPerPage.value = $event),
				"data-test-id": "oauth-clients-data-table",
				headers: tableHeaders.value,
				items: props.clients,
				"items-length": unref(mcpStore).oauthClientsCount,
				"item-value": rowId,
				"onClick:row": _cache[3] || (_cache[3] = (_, { item }) => openDetails(item))
			}, createSlots({
				[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.client) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["client-icon-chip"]) }, [unref(getClientBrand)(item.name).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(getClientBrand)(item.name).icon), {
					key: 0,
					class: normalizeClass(_ctx.$style["client-icon"])
				}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "mcp",
					class: normalizeClass(_ctx.$style["client-icon"])
				}, null, 8, ["class"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["client-name"]) }, [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-name",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
					_: 2
				}, 1024), clientTypeLabel(item) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					"data-test-id": "mcp-client-type",
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(clientTypeLabel(item)), 1)]),
					_: 2
				}, 1024)) : createCommentVNode("", true)], 2)], 2)]),
				[`item.owner`]: withCtx(({ item }) => [item.owner ? (openBlock(), createBlock(OAuthClientOwnerCell_default, {
					key: 0,
					owner: item.owner,
					"is-current-user": item.owner.id === unref(usersStore).currentUser?.id
				}, null, 8, ["owner", "is-current-user"])) : createCommentVNode("", true)]),
				[`item.scopes`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-access",
					color: "text-light",
					class: normalizeClass(_ctx.$style.access)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(accessSummary(item)), 1)]),
					_: 2
				}, 1032, ["class"])]),
				[`item.grantedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-created-at",
					color: "text-base"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, {
						date: new Date(item.grantedAt).toISOString(),
						capitalize: ""
					}, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"data-test-id": "mcp-oauth-client-revoke-button",
					onClick: withModifiers(($event) => onRevoke(item), ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
					_: 1
				}, 8, ["onClick"])]),
				_: 2
			}, [unref(mcpStore).oauthClientsCount === 0 ? {
				name: "cover",
				fn: withCtx(() => [!hasActiveFilters.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style["empty-state"])
				}, [
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
						variant: "solid",
						"data-test-id": "mcp-oauth-create-client-button",
						onClick: _cache[0] || (_cache[0] = ($event) => unref(mcpStore).openConnectPopover())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oauth.table.empty.button")), 1)]),
						_: 1
					})
				], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style["empty-state"])
				}, [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-clients-no-results",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.search.noResults")), 1)]),
					_: 1
				})], 2))]),
				key: "0"
			} : void 0]), 1032, [
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length"
			])])), createVNode(OAuthClientDetailsModal_default, {
				open: detailsOpen.value,
				"onUpdate:open": _cache[4] || (_cache[4] = ($event) => detailsOpen.value = $event),
				client: detailsClient.value,
				"scope-tools": props.scopeTools,
				onRevoke
			}, null, 8, [
				"open",
				"client",
				"scope-tools"
			])]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsTable.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_ikqrt_125";
var toolbar = "_toolbar_ikqrt_131";
var filters = "_filters_ikqrt_139";
var search = "_search_ikqrt_145";
var client = "_client_ikqrt_149";
var access = "_access_ikqrt_176";
var OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default = {
	header,
	toolbar,
	filters,
	search,
	client,
	"client-icon-chip": "_client-icon-chip_ikqrt_155",
	"client-icon": "_client-icon_ikqrt_155",
	access,
	"client-name": "_client-name_ikqrt_182",
	"empty-state": "_empty-state_ikqrt_187"
};
var OAuthClientsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/RevokeOAuthClientConfirmModal.vue
var RevokeOAuthClientConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RevokeOAuthClientConfirmModal",
	props: {
		client: {},
		open: { type: Boolean },
		loading: { type: Boolean },
		revokingForOther: { type: Boolean }
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.client ? i18n.baseText("settings.mcp.oAuthClients.revoke.title", { interpolate: { name: props.client.name } }) : "");
		const description = computed(() => {
			if (!props.client) return "";
			if (props.revokingForOther) {
				const owner = props.client.owner;
				const ownerName = [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || "";
				return i18n.baseText("settings.mcp.oAuthClients.revoke.description.other", { interpolate: { ownerName } });
			}
			return i18n.baseText("settings.mcp.oAuthClients.revoke.description.own");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: description.value,
				"action-label": unref(i18n).baseText("settings.mcp.oAuthClients.revoke.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "destructive",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "mcp-client-revoke-confirm",
				onAction: _cache[0] || (_cache[0] = ($event) => emit("confirm")),
				onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel")),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, null, 8, [
				"open",
				"title",
				"description",
				"action-label",
				"cancel-label",
				"loading"
			]);
		};
	}
});
//#endregion
//#region src/experiments/exposeAllWorkflowsToMcp/composables/useExposeAllWorkflowsToMcpOffer.ts
function useExposeAllWorkflowsToMcpOffer() {
	const experimentStore = useExposeAllWorkflowsToMcpStore();
	const mcpStore = useMCPStore();
	const uiStore = useUIStore();
	/**
	* Opens the expose-all modal for enrolled users with at least one eligible
	* workflow. Failures of the eligibility probe are swallowed — the offer is
	* best-effort and must not disturb the flow that triggered it.
	* Returns whether the modal was opened, so callers can decide whether to
	* fall back to their own post-enable behavior instead.
	*/
	async function offerToExposeAllWorkflows(onExposed) {
		if (!experimentStore.isEnabled) return false;
		try {
			if ((await mcpStore.getMcpEligibleWorkflows({ take: 1 })).count === 0) return false;
		} catch {
			return false;
		}
		uiStore.openModalWithData({
			name: EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY,
			data: { onExposed }
		});
		return true;
	}
	return { offerToExposeAllWorkflows };
}
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "mcp-settings-description" };
var SettingsMCPView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const mcp = useMcp();
		const telemetry = useTelemetry();
		const mcpStore = useMCPStore();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const { offerToExposeAllWorkflows } = useExposeAllWorkflowsToMcpOffer();
		const mcpStatusLoading = ref(false);
		const selectedTab = ref("workflows");
		const canManageMcpInstance = computed(() => hasPermission(["rbac"], { rbac: { scope: "mcp:manage" } }));
		const tabs = computed(() => {
			const base = [{
				label: i18n.baseText("settings.mcp.tabs.workflows"),
				value: "workflows"
			}, {
				label: i18n.baseText("settings.mcp.tabs.oauth"),
				value: "oauth"
			}];
			if (canManageMcpInstance.value) base.push({
				label: i18n.baseText("settings.mcp.tabs.oauthSettings"),
				value: "settings"
			});
			return base;
		});
		const workflowsLoading = ref(false);
		const availableWorkflows = ref([]);
		const availableWorkflowsTotal = ref(0);
		const workflowsTableState = ref({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		});
		const workflowsTableItemsPerPage = ref(workflowsTableState.value.itemsPerPage);
		const oAuthClientsLoading = ref(false);
		const revokeClient = ref(null);
		const revoking = ref(false);
		const redirectUrisInput = ref("");
		const redirectUrisError = ref("");
		const redirectUrisLoading = ref(false);
		const canToggleMCP = computed(() => canManageMcpInstance.value && !mcpStore.mcpManagedByEnv);
		const canEditRedirectUris = computed(() => canManageMcpInstance.value);
		const canSeeInstanceStats = canManageMcpInstance;
		const showInstanceCapacityNotice = computed(() => canSeeInstanceStats.value && mcpStore.instanceClientStats?.atCapacity === true);
		const instanceCapacityNoticeContent = computed(() => {
			const stats = mcpStore.instanceClientStats;
			if (!stats) return "";
			return i18n.baseText("settings.mcp.instanceCapacity.warning", { interpolate: {
				count: String(stats.count),
				limit: String(stats.limit)
			} });
		});
		const showConnectWorkflowsButton = computed(() => {
			return selectedTab.value === "workflows" && availableWorkflowsTotal.value > 0;
		});
		const onTabSelected = async (tab) => {
			selectedTab.value = tab;
			if (tab === "workflows" && availableWorkflows.value.length === 0) await fetchAvailableWorkflows();
			else if (tab === "oauth" && mcpStore.oauthClients.length === 0) {
				await fetchoAuthCLients();
				telemetry.track("User clicked connected clients tab");
			} else if (tab === "settings" && mcpStore.allowedRedirectUris.length === 0) await loadRedirectUris();
		};
		const onToggleMCPAccess = async (enabled) => {
			try {
				mcpStatusLoading.value = true;
				const updated = await mcpStore.setMcpAccessEnabled(enabled);
				if (updated) {
					await fetchAvailableWorkflows();
					await fetchoAuthCLients();
				} else workflowsLoading.value = false;
				mcp.trackUserToggledMcpAccess(enabled);
				if (enabled && updated) offerToExposeAllWorkflows(refreshWorkflowsFromFirstPage).then((offered) => {
					if (!offered) mcpStore.openConnectPopover();
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
			} finally {
				mcpStatusLoading.value = false;
				workflowsLoading.value = false;
			}
		};
		const showMcpAccessUpdatedToast = (count, enabled) => {
			toast.showMessage({
				type: "success",
				title: i18n.baseText(enabled ? "settings.mcp.workflows.enableAccess.success.title" : "settings.mcp.workflows.removeAccess.success.title", {
					adjustToNumber: count,
					interpolate: { count: String(count) }
				})
			});
		};
		const onToggleWorkflowMCPAccess = async (workflowId, isEnabled) => {
			try {
				await mcpStore.toggleWorkflowMcpAccess(workflowId, isEnabled);
				if (isEnabled) await refreshWorkflowsFromFirstPage();
				else {
					showMcpAccessUpdatedToast(1, false);
					await fetchAvailableWorkflows();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
				throw error;
			}
		};
		const onBulkEnableWorkflowsMCPAccess = async (workflowIds) => {
			try {
				showMcpAccessUpdatedToast((await mcpStore.toggleWorkflowsMcpAccess({ workflowIds }, true)).updatedCount, true);
				await refreshWorkflowsFromFirstPage();
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
				throw error;
			}
		};
		const onBulkRemoveWorkflowsMCPAccess = async (workflowIds) => {
			try {
				showMcpAccessUpdatedToast((await mcpStore.toggleWorkflowsMcpAccess({ workflowIds }, false)).updatedCount, false);
				await fetchAvailableWorkflows();
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
		const fetchAvailableWorkflows = async () => {
			workflowsLoading.value = true;
			try {
				const response = await mcpStore.fetchWorkflowsAvailableForMCP(workflowsTableState.value.page + 1, workflowsTableState.value.itemsPerPage);
				if (response.data.length === 0 && response.count > 0 && workflowsTableState.value.page > 0) {
					const maxPage = Math.max(0, Math.ceil(response.count / workflowsTableState.value.itemsPerPage) - 1);
					workflowsTableState.value = {
						...workflowsTableState.value,
						page: maxPage
					};
					const clampedResponse = await mcpStore.fetchWorkflowsAvailableForMCP(workflowsTableState.value.page + 1, workflowsTableState.value.itemsPerPage);
					availableWorkflows.value = clampedResponse.data;
					availableWorkflowsTotal.value = clampedResponse.count;
					return;
				}
				availableWorkflows.value = response.data;
				availableWorkflowsTotal.value = response.count;
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
			} finally {
				setTimeout(() => {
					workflowsLoading.value = false;
				}, 200);
			}
		};
		const refreshWorkflowsFromFirstPage = async () => {
			workflowsTableState.value = {
				...workflowsTableState.value,
				page: 0
			};
			await fetchAvailableWorkflows();
		};
		const onRefreshWorkflows = async () => {
			await fetchAvailableWorkflows();
		};
		const onWorkflowsTableUpdate = async (options) => {
			const pageSizeChanged = options.itemsPerPage !== workflowsTableItemsPerPage.value;
			workflowsTableState.value = {
				...options,
				page: pageSizeChanged ? 0 : options.page
			};
			workflowsTableItemsPerPage.value = options.itemsPerPage;
			await fetchAvailableWorkflows();
		};
		const fetchoAuthCLients = async () => {
			try {
				oAuthClientsLoading.value = true;
				await mcpStore.getAllOAuthClients();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const onOwnershipChange = async (ownership) => {
			try {
				oAuthClientsLoading.value = true;
				await mcpStore.setOAuthClientsOwnership(ownership);
				if (ownership === "all") telemetry.track("User viewed all MCP clients");
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const withClientsErrorToast = async (fn) => {
			try {
				await fn();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		const onClientsFiltersChange = async (filters) => await withClientsErrorToast(() => mcpStore.setOAuthClientsFilters(filters));
		const onClientsOptionsChange = async (options) => await withClientsErrorToast(() => mcpStore.setOAuthClientsPagination(options.page, options.itemsPerPage));
		const onRevokeRequest = (client) => {
			revokeClient.value = client;
		};
		const onRevokeConfirm = async () => {
			const client = revokeClient.value;
			if (!client) return;
			try {
				revoking.value = true;
				await mcpStore.removeOAuthClient(client.id, client.owner?.id);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.oAuthClients.revoke.success.title"),
					message: i18n.baseText("settings.mcp.oAuthClients.revoke.success.message", { interpolate: { name: client.name } })
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.oAuthClients.revoke.error"));
			} finally {
				revoking.value = false;
				revokeClient.value = null;
			}
		};
		const openConnectWorkflowsModal = () => {
			uiStore.openModalWithData({
				name: MCP_CONNECT_WORKFLOWS_MODAL_KEY,
				data: { onEnableMcpAccess: onBulkEnableWorkflowsMCPAccess }
			});
			telemetry.track("User clicked connect workflows from mcp settings");
		};
		const loadRedirectUris = async () => {
			try {
				redirectUrisInput.value = (await mcpStore.fetchAllowedRedirectUris()).join(", ");
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.allowedRedirectUris.error.loading"));
			}
		};
		const validateRedirectUris = (urisString) => {
			const uris = urisString.split(",").map((uri) => uri.trim()).filter((uri) => uri.length > 0);
			if (uris.length === 0) return { valid: true };
			for (const uri of uris) try {
				const url = new URL(uri);
				if (url.protocol !== "http:" && url.protocol !== "https:") return {
					valid: false,
					error: i18n.baseText("settings.mcp.allowedRedirectUris.validation.invalidProtocol", { interpolate: { url: uri } })
				};
				if (!(url.hostname === "localhost" || url.hostname === "127.0.0.1") && url.protocol !== "https:") return {
					valid: false,
					error: i18n.baseText("settings.mcp.allowedRedirectUris.validation.httpsRequired", { interpolate: { url: uri } })
				};
			} catch (error) {
				return {
					valid: false,
					error: i18n.baseText("settings.mcp.allowedRedirectUris.validation.invalidUrl", { interpolate: { url: uri } })
				};
			}
			return { valid: true };
		};
		const saveRedirectUris = async () => {
			redirectUrisError.value = "";
			const validation = validateRedirectUris(redirectUrisInput.value);
			if (!validation.valid) {
				redirectUrisError.value = validation.error ?? "";
				return;
			}
			try {
				redirectUrisLoading.value = true;
				const uris = redirectUrisInput.value.split(",").map((uri) => uri.trim()).filter((uri) => uri.length > 0);
				await mcpStore.setAllowedRedirectUris(uris);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.allowedRedirectUris.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.allowedRedirectUris.error.saving"));
			} finally {
				redirectUrisLoading.value = false;
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp"));
			if (!mcpStore.mcpAccessEnabled) return;
			const fetches = [fetchAvailableWorkflows(), fetchoAuthCLients()];
			if (canManageMcpInstance.value) {
				fetches.push(loadRedirectUris());
				fetches.push(mcpStore.getInstanceClientStats());
			}
			await Promise.all(fetches);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("header", {
					class: normalizeClass(_ctx.$style["main-header"]),
					"data-test-id": "mcp-settings-header"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headings) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp")), 1)]),
					_: 1
				}), withDirectives(createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nText_default), {
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
				}, 8, ["href"])], 512), [[vShow, unref(mcpStore).mcpAccessEnabled]])], 2), createVNode(MCPHeaderActions_default, {
					"access-enabled": unref(mcpStore).mcpAccessEnabled,
					"toggle-disabled": !canToggleMCP.value,
					loading: mcpStatusLoading.value,
					"managed-by-env": unref(mcpStore).mcpManagedByEnv,
					onDisableMcpAccess: _cache[0] || (_cache[0] = ($event) => onToggleMCPAccess(!unref(mcpStore).mcpAccessEnabled))
				}, null, 8, [
					"access-enabled",
					"toggle-disabled",
					"loading",
					"managed-by-env"
				])], 2),
				!unref(mcpStore).mcpAccessEnabled ? (openBlock(), createBlock(MCPEmptyState_default, {
					key: 0,
					disabled: !canToggleMCP.value,
					loading: mcpStatusLoading.value,
					"managed-by-env": unref(mcpStore).mcpManagedByEnv,
					onTurnOnMcp: _cache[1] || (_cache[1] = ($event) => onToggleMCPAccess(true))
				}, null, 8, [
					"disabled",
					"loading",
					"managed-by-env"
				])) : createCommentVNode("", true),
				unref(mcpStore).mcpAccessEnabled ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-enabled-section"
				}, [
					showInstanceCapacityNotice.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						theme: "warning",
						"data-test-id": "mcp-instance-capacity-notice",
						content: instanceCapacityNoticeContent.value
					}, null, 8, ["content"])) : createCommentVNode("", true),
					createBaseVNode("header", { class: normalizeClass(_ctx.$style["tabs-header"]) }, [createVNode(unref(N8nTabs_default), {
						"model-value": selectedTab.value,
						options: tabs.value,
						"onUpdate:modelValue": onTabSelected
					}, null, 8, ["model-value", "options"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [showConnectWorkflowsButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "solid",
						label: unref(i18n).baseText("settings.mcp.connectWorkflows"),
						"data-test-id": "mcp-connect-workflows-header-button",
						size: "small",
						onClick: openConnectWorkflowsModal
					}, null, 8, ["label"])) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.refresh.tooltip") }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							iconOnly: "",
							"data-test-id": "mcp-workflows-refresh-button",
							size: "small",
							icon: "refresh-cw",
							onClick: onTableRefresh
						})]),
						_: 1
					}, 8, ["content"])], 2)], 2),
					createBaseVNode("main", null, [selectedTab.value === "workflows" ? (openBlock(), createBlock(WorkflowsTable_default, {
						key: 0,
						"table-options": workflowsTableState.value,
						"onUpdate:tableOptions": _cache[2] || (_cache[2] = ($event) => workflowsTableState.value = $event),
						"data-test-id": "mcp-workflow-table",
						workflows: availableWorkflows.value,
						"total-count": availableWorkflowsTotal.value,
						loading: workflowsLoading.value,
						onRemoveMcpAccess: _cache[3] || (_cache[3] = (workflow) => onToggleWorkflowMCPAccess(workflow.id, false)),
						onBulkRemoveMcpAccess: onBulkRemoveWorkflowsMCPAccess,
						onConnectWorkflows: openConnectWorkflowsModal,
						onUpdateDescription,
						"onUpdate:options": onWorkflowsTableUpdate,
						onRefresh: onRefreshWorkflows
					}, null, 8, [
						"table-options",
						"workflows",
						"total-count",
						"loading"
					])) : selectedTab.value === "oauth" ? (openBlock(), createBlock(OAuthClientsTable_default, {
						key: 1,
						"data-test-id": "mcp-oauth-clients-table",
						clients: unref(mcpStore).oauthClients,
						"scope-tools": unref(mcpStore).oauthClientScopeTools,
						loading: oAuthClientsLoading.value,
						onRevokeClient: onRevokeRequest,
						"onUpdate:ownership": onOwnershipChange,
						"onUpdate:filters": onClientsFiltersChange,
						"onUpdate:options": onClientsOptionsChange,
						onRefresh: onTableRefresh
					}, null, 8, [
						"clients",
						"scope-tools",
						"loading"
					])) : selectedTab.value === "settings" ? (openBlock(), createElementBlock("section", {
						key: 2,
						class: normalizeClass(_ctx.$style["oauth-settings-content"]),
						"data-test-id": "mcp-oauth-settings-tab"
					}, [
						createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("settings.mcp.allowedRedirectUris.label"),
							"tooltip-text": unref(i18n).baseText("settings.mcp.allowedRedirectUris.description"),
							"show-tooltip": true
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								modelValue: redirectUrisInput.value,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => redirectUrisInput.value = $event),
								type: "textarea",
								rows: 6,
								placeholder: unref(i18n).baseText("settings.mcp.allowedRedirectUris.placeholder"),
								disabled: !canEditRedirectUris.value,
								"data-test-id": "mcp-redirect-uris-input"
							}, null, 8, [
								"modelValue",
								"placeholder",
								"disabled"
							])]),
							_: 1
						}, 8, ["label", "tooltip-text"]),
						redirectUrisError.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style["error-message"])
						}, [createVNode(unref(N8nText_default), {
							color: "danger",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(redirectUrisError.value), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style["save-button-container"]) }, [createVNode(unref(N8nButton_default), {
							label: unref(i18n).baseText("settings.mcp.allowedRedirectUris.save"),
							loading: redirectUrisLoading.value,
							disabled: !canEditRedirectUris.value,
							size: "small",
							"data-test-id": "mcp-redirect-uris-save-button",
							onClick: saveRedirectUris
						}, null, 8, [
							"label",
							"loading",
							"disabled"
						])], 2)
					], 2)) : createCommentVNode("", true)])
				], 2)) : createCommentVNode("", true),
				createVNode(RevokeOAuthClientConfirmModal_default, {
					client: revokeClient.value,
					open: !!revokeClient.value,
					loading: revoking.value,
					"revoking-for-other": !!revokeClient.value?.owner && revokeClient.value.owner.id !== unref(usersStore).currentUser?.id,
					onConfirm: onRevokeConfirm,
					onCancel: _cache[5] || (_cache[5] = ($event) => revokeClient.value = null),
					"onUpdate:open": _cache[6] || (_cache[6] = ($event) => revokeClient.value = null)
				}, null, 8, [
					"client",
					"open",
					"loading",
					"revoking-for-other"
				])
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1323y_125";
var headings = "_headings_1323y_143";
var actions = "_actions_1323y_155";
var SettingsMCPView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	"main-header": "_main-header_1323y_130",
	headings,
	"tabs-header": "_tabs-header_1323y_149",
	actions,
	"oauth-settings-content": "_oauth-settings-content_1323y_160",
	"error-message": "_error-message_1323y_165",
	"save-button-container": "_save-button-container_1323y_169"
};
var SettingsMCPView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPView_default as default };
