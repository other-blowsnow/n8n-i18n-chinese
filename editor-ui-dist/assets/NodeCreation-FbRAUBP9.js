const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-FlKPMAOp.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-CUTxC6Rl.js","assets/preload-helper-CR0ecmWK.js","assets/truncate-OrFlV_nl.js","assets/_MapCache-CXkqqBNu.js","assets/vue.runtime.esm-bundler-tP5dCd7J.js","assets/chunk-6z4oVpB-.js","assets/CalendarDate-zWqgZMlk.js","assets/sanitize-html-Cc45ZKm8.js","assets/empty-BuGRxzl4.js","assets/path-browserify-BtCDmZ3_.js","assets/en-CF30SCh2.js","assets/src-CWWagUhy.css","assets/nodeCreator.store-Ci2K4r2I.js","assets/constants-eN0e8XyV.js","assets/merge-E8nEcjT4.js","assets/builder.store-6Ubaqfxq.js","assets/_baseOrderBy-Ca3_tgno.js","assets/dateformat-CM9k0--B.js","assets/useDebounce-zOuYGjD3.js","assets/nodeIcon-DsiEOlU0.js","assets/exports-hpMZaOPT.js","assets/useCanvasOperations-Drc8Q2xN.js","assets/useClipboard-D_i6_r95.js","assets/usePinnedData-Co00VkRJ.js","assets/folders.store-TAyuZlWC.js","assets/executions.store-B4S6yM7f.js","assets/semver-C9lxSTEL.js","assets/banners.store-DyZlLN6R.js","assets/banners-UK5wWFEI.css","assets/assistant.store-CL1xWHqK.js","assets/NodeIcon-c7CeRjf6.js","assets/NodeIcon-BDxr0f30.css","assets/ItemsRenderer-CooB4DGc.js","assets/useActions-CFhjUSX0.js","assets/ItemsRenderer-DkobJF9f.css","assets/chatPanel.store-CsUQ4Qg4.js","assets/CommunityNodeUpdateInfo-Cbu8QJCG.js","assets/CommunityNodeUpdateInfo-kPDiipF5.css","assets/NodeCreator-OSIpRI6S.css"])))=>i.map(i=>d[i]);
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CXkqqBNu.js";
import { Sn as N8nButton_default, ft as AskAssistantIcon_default, ht as N8nTooltip_default, xt as N8nIconButton_default } from "./src-CUTxC6Rl.js";
import "./en-CF30SCh2.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-OrFlV_nl.js";
import { K as getMidCanvasPosition, O as useTelemetry, oa as useUIStore, r as useFocusPanelStore, t as useBuilderStore } from "./builder.store-6Ubaqfxq.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import { St as NODE_CREATOR_OPEN_SOURCES, U as DEFAULT_STICKY_HEIGHT, W as DEFAULT_STICKY_WIDTH, sr as STICKY_NODE_TYPE } from "./constants-eN0e8XyV.js";
import "./merge-E8nEcjT4.js";
import "./_baseOrderBy-Ca3_tgno.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-zOuYGjD3.js";
import { t as useAssistantStore } from "./assistant.store-CL1xWHqK.js";
import { t as useChatPanelStore } from "./chatPanel.store-CsUQ4Qg4.js";
import "./retry-dP46utx2.js";
import "./executions.store-B4S6yM7f.js";
import "./useRunWorkflow-BdQy2BQc.js";
import "./usePinnedData-Co00VkRJ.js";
import "./nodeCreator.store-Ci2K4r2I.js";
import "./nodeIcon-DsiEOlU0.js";
import "./useClipboard-D_i6_r95.js";
import "./useCanvasOperations-Drc8Q2xN.js";
import "./folders.store-TAyuZlWC.js";
import "./NodeIcon-c7CeRjf6.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-DcmjNmbF.js";
import "./versions.store-v0vKVtHF.js";
import "./usePageRedirectionHelper-D9gUuGjS.js";
import "./dataTable.store-CHAY2GSA.js";
import { t as useCommandBar } from "./useCommandBar-B-RuutCn.js";
import "./uniqBy-BpU9WL3C.js";
import "./ProjectIcon-C-Lw5qEq.js";
import "./CredentialIcon-CfYpLjnN.js";
import "./sortByProperty-CV1aCzkS.js";
import "./constants-DLTaaipl.js";
import "./useRecentResources-CW6odWUn.js";
import { t as useActions } from "./useActions-CFhjUSX0.js";
import "./chat.store-Cx7PTORn.js";
import "./fileUtils-D_SiS8no.js";
var NodeCreation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreation",
	props: {
		nodeViewScale: {},
		createNodeActive: {
			type: Boolean,
			default: false
		},
		focusPanelActive: { type: Boolean }
	},
	emits: [
		"addNodes",
		"toggleNodeCreator",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-FlKPMAOp.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const { isEnabled: isCommandBarEnabled } = useCommandBar();
		const { getAddedNodesAndConnections } = useActions();
		function openNodeCreator() {
			emit("toggleNodeCreator", {
				source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
				createNodeActive: true
			});
		}
		function addStickyNote() {
			if (document.activeElement) document.activeElement.blur();
			const offset = [...uiStore.nodeViewOffsetPosition];
			const position = getMidCanvasPosition(props.nodeViewScale, offset);
			position[0] -= 240 / 2;
			position[1] -= 160 / 2;
			emit("addNodes", getAddedNodesAndConnections([{
				type: STICKY_NODE_TYPE,
				position
			}]));
		}
		function closeNodeCreator(hasAddedNodes = false) {
			if (props.createNodeActive) emit("toggleNodeCreator", {
				createNodeActive: false,
				hasAddedNodes
			});
			emit("close");
		}
		function nodeTypeSelected(value) {
			emit("addNodes", getAddedNodesAndConnections(value));
			closeNodeCreator(true);
		}
		function toggleFocusPanel() {
			focusPanelStore.toggleFocusPanel();
			telemetry.track(focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel", {
				source: "canvasButton",
				parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
			});
		}
		async function onAskAssistantButtonClick() {
			if (builderStore.isAIBuilderEnabled) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded
			});
		}
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [!_ctx.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openNodesPanel"),
					shortcut: { keys: ["Tab"] },
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "plus",
						type: "tertiary",
						"data-test-id": "node-creator-plus-button",
						onClick: openNodeCreator
					})]),
					_: 1
				}, 8, ["label"]),
				unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: 0,
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "search",
						type: "tertiary",
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						type: "tertiary",
						icon: "sticky-note",
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openFocusPanel"),
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						type: "tertiary",
						size: "large",
						icon: "panel-right",
						class: normalizeClass(_ctx.focusPanelActive ? _ctx.$style.activeButton : ""),
						active: _ctx.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["class", "active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "tertiary",
						size: "large",
						square: "",
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: _ctx.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_13o6j_123",
	icon: "_icon_13o6j_134",
	activeButton: "_activeButton_13o6j_143"
};
var NodeCreation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreation_default as default };
