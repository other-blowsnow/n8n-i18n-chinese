const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-lZ_F3ugR.js","assets/_plugin-vue_export-helper-DltO58Gh.js","assets/src-6rUDOvr2.js","assets/CalendarDate-DpJ94D5y.js","assets/_MapCache-D28pXLlm.js","assets/vue.runtime.esm-bundler-XtMkEjzB.js","assets/chunk-r2Y0G7H8.js","assets/sanitize-html-JHjOJhXQ.js","assets/en-BoKY3_VE.js","assets/src-q0lmo6wZ.css","assets/nodeCreator.store-Cx36G2NX.js","assets/constants-DM6W84kp.js","assets/merge-PRabpGkI.js","assets/users.store-B-dhu6_V.js","assets/_baseOrderBy-B5_tDn8L.js","assets/dateformat-Bc6vycUF.js","assets/useDebounce-Dey-FBeQ.js","assets/nodeIcon-DLD1xNLV.js","assets/canvas.utils-DQc-Akl3.js","assets/exports-DYzjmh6G.js","assets/useCanvasOperations-Eb4g1ICO.js","assets/core-VADtcMBO.js","assets/core-XmFv11t6.js","assets/xml-BMqNMrYo.js","assets/VueMarkdown-DuSTEpjj.js","assets/usePinnedData-qbl5COxT.js","assets/folders.store-BSLXys7n.js","assets/executions.store-BiWDbfM9.js","assets/useCanvasOperations-BGIelHPw.css","assets/semver-DqZ0UIWb.js","assets/banners.store-D-9vRy-J.js","assets/banners-CXsyom4e.css","assets/assistant.store-CuYXAOOZ.js","assets/NodeIcon-CIHbs5ma.js","assets/NodeIcon-DYIwbj2N.css","assets/SlideTransition-nPSGVK0N.js","assets/SlideTransition-LHRZQ5f_.css","assets/useCalloutHelpers-CF1m5qxd.js","assets/chatPanel.store-CHKHydEf.js","assets/useQuickConnect-BoaN3_fT.js","assets/QuickConnectBanner-B_uKzQL2.js","assets/QuickConnectBanner-CrGD09Mo.css","assets/useActions-D7mtlhVl.js","assets/NodeCreator-CEw58NWf.css"])))=>i.map(i=>d[i]);
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Hi as N8nButton_default, Ki as __vitePreload, Mi as N8nIconButton_default, Oi as N8nTooltip_default, pi as AskAssistantIcon_default } from "./src-6rUDOvr2.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Lt as useTelemetry, Pn as getMidCanvasPosition, gn as useFocusPanelStore, r as useUIStore, un as useBuilderStore } from "./users.store-B-dhu6_V.js";
import { Tt as NODE_CREATOR_OPEN_SOURCES, U as DEFAULT_STICKY_HEIGHT, W as DEFAULT_STICKY_WIDTH, hr as STICKY_NODE_TYPE } from "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
import { t as useAssistantStore } from "./assistant.store-CuYXAOOZ.js";
import { t as useChatPanelStore } from "./chatPanel.store-CHKHydEf.js";
import "./nodeIcon-DLD1xNLV.js";
import "./canvas.utils-DQc-Akl3.js";
import "./nodeCreator.store-Cx36G2NX.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-BGeays24.js";
import { t as useActions } from "./useActions-D7mtlhVl.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-lZ_F3ugR.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
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
			return openBlock(), createElementBlock(Fragment, null, [!__props.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openNodesPanel"),
					shortcut: { keys: ["Tab"] },
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "plus",
						"data-test-id": "node-creator-plus-button",
						onClick: openNodeCreator
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "search",
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
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
						variant: "subtle",
						size: "large",
						icon: "panel-right",
						active: __props.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						iconOnly: "",
						size: "large",
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
					active: __props.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_mt5fk_125",
	icon: "_icon_mt5fk_136"
};
var NodeCreation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreation_default as default };
