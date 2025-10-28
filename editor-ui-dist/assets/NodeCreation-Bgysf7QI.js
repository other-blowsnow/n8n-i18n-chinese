const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-DsKP8Yw-.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-DuV1yrAd.js","assets/preload-helper-CR0ecmWK.js","assets/icon-bSjxVZuQ.js","assets/vue.runtime.esm-bundler-DDuXT-9r.js","assets/chunk-6z4oVpB-.js","assets/truncate-OqsyiABz.js","assets/_MapCache-DZMn6F95.js","assets/sanitize-html-BuXr7o4T.js","assets/empty-BuGRxzl4.js","assets/path-browserify-DsmB_HMK.js","assets/en-BYTsM8fR.js","assets/src-B3UiHJ-Q.css","assets/nodeCreator.store-lRJSp4Qr.js","assets/constants-CiCQTzlI.js","assets/merge-BF1fect_.js","assets/useTelemetry-C3cN19b2.js","assets/dateformat-D7TIhVd4.js","assets/useDebounce-Dm5wldKp.js","assets/useExternalHooks-CFOQ8Nn2.js","assets/templates.store-CcFpD7-K.js","assets/cloudPlan.store-CD7mCT0O.js","assets/nodeIcon-Dm5sZJfm.js","assets/exports-9spWG404.js","assets/useToast-B-CMvNEW.js","assets/useCanvasOperations-BKFIHZ3t.js","assets/useClipboard-DF_RdI9U.js","assets/usePinnedData-DhNnlolU.js","assets/folders.store-oty9WxlX.js","assets/executions.store-FIIAHm-v.js","assets/focusPanel.store-BADVh5Sc.js","assets/semver-CLhnz0Lx.js","assets/assistant.store-ivvDmlgb.js","assets/ItemsRenderer-AmEgkFay.js","assets/useActions-sGmttGuX.js","assets/NodeIcon-gge00gA3.js","assets/NodeIcon-C-Ise6x6.css","assets/ItemsRenderer-B89wKDHQ.css","assets/chatPanel.store-rZ0L8acY.js","assets/CommunityNodeUpdateInfo-CWpK342L.js","assets/CommunityNodeUpdateInfo-kPDiipF5.css","assets/NodeCreator-C-oYFkbs.css"])))=>i.map(i=>d[i]);
import { D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DZMn6F95.js";
import { Nn as N8nButton_default, bt as N8nIconButton_default, ft as N8nTooltip_default, st as AskAssistantIcon_default } from "./src-DuV1yrAd.js";
import "./en-BYTsM8fR.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-OqsyiABz.js";
import "./icon-bSjxVZuQ.js";
import "./overlay-DSEmbFQU.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-BUlTkhLg.js";
import { Li as useUIStore, t as useTelemetry, v as getMidCanvasPosition } from "./useTelemetry-C3cN19b2.js";
import "./useToast-B-CMvNEW.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Mt as DEFAULT_STICKY_HEIGHT, Nt as DEFAULT_STICKY_WIDTH, Ri as STICKY_NODE_TYPE, Rr as NODE_CREATOR_OPEN_SOURCES } from "./constants-CiCQTzlI.js";
import "./merge-BF1fect_.js";
import { i as useBuilderStore, t as useAssistantStore } from "./assistant.store-ivvDmlgb.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-Dm5wldKp.js";
import "./useExternalHooks-CFOQ8Nn2.js";
import { t as useChatPanelStore } from "./chatPanel.store-rZ0L8acY.js";
import "./npsSurvey.store-C1nTMANL.js";
import "./cloudPlan.store-CD7mCT0O.js";
import "./templates.store-CcFpD7-K.js";
import { t as useFocusPanelStore } from "./focusPanel.store-BADVh5Sc.js";
import "./useWorkflowSaving-UjOXroJ8.js";
import "./useRunWorkflow-ayk4R-2L.js";
import "./executions.store-FIIAHm-v.js";
import "./usePinnedData-DhNnlolU.js";
import "./nodeCreator.store-lRJSp4Qr.js";
import "./nodeIcon-Dm5sZJfm.js";
import "./useClipboard-DF_RdI9U.js";
import "./useCanvasOperations-BKFIHZ3t.js";
import "./folders.store-oty9WxlX.js";
import "./NodeIcon-gge00gA3.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Br3xYUe5.js";
import "./versions.store-CiEGYguH.js";
import "./usePageRedirectionHelper-DXylCC4_.js";
import "./dataTable.store-JbrTjKUL.js";
import "./useBugReporting-D-eRGSvR.js";
import "./uniqBy-B0930xzV.js";
import "./ProjectIcon-DGod3YNF.js";
import "./CredentialIcon-Cj-aUjvk.js";
import "./FileSaver.min-D8bnhVIu.js";
import "./sortByProperty-qz-1s69w.js";
import "./useRecentResources-CM3AgWaf.js";
import { t as useActions } from "./useActions-sGmttGuX.js";
import { t as useCommandBar } from "./useCommandBar--DQzjxvd.js";
import "./useWorkflowActivate-C2uePlQe.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-DsKP8Yw-.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42])));
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
