const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-Cp9_fK_m.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-CrJGxD3z.js","assets/preload-helper-CR0ecmWK.js","assets/icon-Bx8huFc-.js","assets/vue.runtime.esm-bundler-DDuXT-9r.js","assets/chunk-6z4oVpB-.js","assets/truncate-DHb0OvjC.js","assets/_MapCache-It4eafc2.js","assets/sanitize-html-BuXr7o4T.js","assets/empty-BuGRxzl4.js","assets/path-browserify-DsmB_HMK.js","assets/en-BYTsM8fR.js","assets/src-C5a_PFvg.css","assets/nodeCreator.store-Cek02nGi.js","assets/constants-UStNMe6H.js","assets/merge-D5iNo-Qh.js","assets/useTelemetry-D6pZULgL.js","assets/dateformat-D7TIhVd4.js","assets/useDebounce-SobFYd6D.js","assets/useExternalHooks-D1vL2UOW.js","assets/templates.store-hnMt_Ueb.js","assets/cloudPlan.store-CNTnzOJi.js","assets/nodeIcon-BSEen2eK.js","assets/exports-RJH1xso1.js","assets/useToast-BabYcC1S.js","assets/useCanvasOperations-ClhrRy1V.js","assets/useClipboard-ZySm1Yx-.js","assets/usePinnedData-COBnoN5e.js","assets/folders.store-1odl9d9k.js","assets/executions.store-DPeyh0Du.js","assets/focusPanel.store-eGpnuamO.js","assets/semver-DZKtOoaA.js","assets/assistant.store-C5rKdXZT.js","assets/ItemsRenderer-DjvG5B73.js","assets/useActions-B8CHBN-s.js","assets/NodeIcon-C20yrHU8.js","assets/NodeIcon-C-Ise6x6.css","assets/ItemsRenderer-B89wKDHQ.css","assets/chatPanel.store-DIj63Ze1.js","assets/CommunityNodeUpdateInfo-Dyc1mJNV.js","assets/CommunityNodeUpdateInfo-kPDiipF5.css","assets/NodeCreator-C-oYFkbs.css"])))=>i.map(i=>d[i]);
import { D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-It4eafc2.js";
import { Ct as N8nIconButton_default, In as N8nButton_default, ht as N8nTooltip_default, st as AskAssistantIcon_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./overlay-DM1TXj1b.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-CpBf605K.js";
import { Li as useUIStore, t as useTelemetry, v as getMidCanvasPosition } from "./useTelemetry-D6pZULgL.js";
import "./useToast-BabYcC1S.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { Qa as NODE_CREATOR_OPEN_SOURCES, vr as DEFAULT_STICKY_HEIGHT, xn as STICKY_NODE_TYPE, yr as DEFAULT_STICKY_WIDTH } from "./constants-UStNMe6H.js";
import "./merge-D5iNo-Qh.js";
import { i as useBuilderStore, t as useAssistantStore } from "./assistant.store-C5rKdXZT.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-SobFYd6D.js";
import "./useExternalHooks-D1vL2UOW.js";
import { t as useChatPanelStore } from "./chatPanel.store-DIj63Ze1.js";
import "./npsSurvey.store-Cx1qroDi.js";
import "./cloudPlan.store-CNTnzOJi.js";
import "./templates.store-hnMt_Ueb.js";
import { t as useFocusPanelStore } from "./focusPanel.store-eGpnuamO.js";
import "./useWorkflowSaving-CgZ406mQ.js";
import "./retry-sDkwzrPY.js";
import "./executions.store-DPeyh0Du.js";
import "./useRunWorkflow-DQvZfZFg.js";
import "./usePinnedData-COBnoN5e.js";
import "./nodeCreator.store-Cek02nGi.js";
import "./nodeIcon-BSEen2eK.js";
import "./useClipboard-ZySm1Yx-.js";
import "./useCanvasOperations-ClhrRy1V.js";
import "./folders.store-1odl9d9k.js";
import "./NodeIcon-C20yrHU8.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Ch8pnQpv.js";
import "./versions.store-DrTKQrUg.js";
import "./usePageRedirectionHelper-DiFcELQQ.js";
import "./dataTable.store-C6_VT2on.js";
import "./useBugReporting-C-rMW-gO.js";
import "./uniqBy-DPcwMNW1.js";
import "./ProjectIcon-b_BDsXEn.js";
import "./CredentialIcon-DUOHN_vH.js";
import "./FileSaver.min-CR_3Le5x.js";
import "./sortByProperty-CUhVU03p.js";
import "./useRecentResources-Co7bIicj.js";
import { t as useActions } from "./useActions-B8CHBN-s.js";
import { t as useCommandBar } from "./useCommandBar-CJHvawQ3.js";
import "./useWorkflowActivate-CZ9zwhpt.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-Cp9_fK_m.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42])));
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
