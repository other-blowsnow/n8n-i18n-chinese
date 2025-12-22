const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-t5LI4zSx.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-mDpESGxG.js","assets/preload-helper-CR0ecmWK.js","assets/truncate-Coaec2ME.js","assets/_MapCache-tzoolLoE.js","assets/vue.runtime.esm-bundler-tP5dCd7J.js","assets/chunk-6z4oVpB-.js","assets/CalendarDate-B-JEhNYg.js","assets/sanitize-html-Cft-jOcY.js","assets/empty-BuGRxzl4.js","assets/path-browserify-BgjP7RyT.js","assets/en-b3uD8cvU.js","assets/src-DS0bffpn.css","assets/nodeCreator.store-C1tTndhO.js","assets/constants-BOySInFM.js","assets/merge-BmNjW__z.js","assets/builder.store-DDdZZYCH.js","assets/_baseOrderBy-DHySh4kW.js","assets/dateformat-hG8NERse.js","assets/useDebounce-CHAignUs.js","assets/nodeIcon-CSxDcD4K.js","assets/templates.store-jKrF77uK.js","assets/cloudPlan.store-Cp0miJM-.js","assets/exports-CdZcr9ah.js","assets/useCanvasOperations-C51F2x4u.js","assets/useClipboard-B7c9nS2X.js","assets/usePinnedData-BCl7QjkH.js","assets/focusPanel.store-W8rTp5U2.js","assets/folders.store-CGVwpMhe.js","assets/executions.store-CRc7BjSa.js","assets/semver-BEqm-ct7.js","assets/banners.store-JW1_i8XM.js","assets/banners-UK5wWFEI.css","assets/assistant.store-DFgjJohB.js","assets/NodeIcon-CNi0G4sa.js","assets/NodeIcon-eaW3atZy.css","assets/ItemsRenderer-tg-mrLJb.js","assets/useActions-CgZcBnFx.js","assets/ItemsRenderer-Cr6c6uYy.css","assets/chatPanel.store-DonFxG5E.js","assets/CommunityNodeUpdateInfo-BtA3CrEG.js","assets/CommunityNodeUpdateInfo-kPDiipF5.css","assets/NodeCreator-C-ckvxD7.css"])))=>i.map(i=>d[i]);
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-tzoolLoE.js";
import { Un as N8nButton_default, ft as AskAssistantIcon_default, ht as N8nTooltip_default, xt as N8nIconButton_default } from "./src-mDpESGxG.js";
import "./en-b3uD8cvU.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-Coaec2ME.js";
import "./overlay-Coh_7gIt.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-BQViLoAQ.js";
import { A as getMidCanvasPosition, Wi as useUIStore, p as useTelemetry, t as useBuilderStore } from "./builder.store-DDdZZYCH.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { G as DEFAULT_STICKY_HEIGHT, K as DEFAULT_STICKY_WIDTH, ur as STICKY_NODE_TYPE, wt as NODE_CREATOR_OPEN_SOURCES } from "./constants-BOySInFM.js";
import "./merge-BmNjW__z.js";
import "./_baseOrderBy-DHySh4kW.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CHAignUs.js";
import { t as useAssistantStore } from "./assistant.store-DFgjJohB.js";
import { t as useChatPanelStore } from "./chatPanel.store-DonFxG5E.js";
import "./npsSurvey.store-DxBWif3S.js";
import "./cloudPlan.store-Cp0miJM-.js";
import "./templates.store-jKrF77uK.js";
import { t as useFocusPanelStore } from "./focusPanel.store-W8rTp5U2.js";
import "./useWorkflowSaving-Vwcvu5Wh.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-CRc7BjSa.js";
import "./useRunWorkflow-DM_m90RC.js";
import "./usePinnedData-BCl7QjkH.js";
import "./nodeCreator.store-C1tTndhO.js";
import "./nodeIcon-CSxDcD4K.js";
import "./useClipboard-B7c9nS2X.js";
import "./useCanvasOperations-C51F2x4u.js";
import "./folders.store-CGVwpMhe.js";
import "./NodeIcon-CNi0G4sa.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-CscMWJL6.js";
import "./versions.store-DPemxyoX.js";
import "./usePageRedirectionHelper-DpFoEqTB.js";
import "./dataTable.store-BbIrvwkj.js";
import { t as useCommandBar } from "./useCommandBar-LATkHWX-.js";
import "./uniqBy-DLh34oRR.js";
import "./ProjectIcon-DCr3_3uP.js";
import "./CredentialIcon-BIHECBH5.js";
import "./FileSaver.min--9uV1QmK.js";
import "./sortByProperty-DAqnDMg7.js";
import "./constants-qk3hx0l8.js";
import "./useRecentResources-Bc_OybKe.js";
import { t as useActions } from "./useActions-CgZcBnFx.js";
import "./chat.store-BkHTMeKe.js";
import "./fileUtils-D3GQ2UWQ.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-t5LI4zSx.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])));
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
