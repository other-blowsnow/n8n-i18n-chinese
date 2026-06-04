const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-BhfQYsVF.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/chunk-CC9Q-vWm.js","assets/src-D7XhL4SE.js","assets/get-Den8eczo.js","assets/_MapCache-Cl68hVFF.js","assets/vue.runtime.esm-bundler-Bw8GKr4Y.js","assets/CalendarDate-DaCb8yxn.js","assets/sanitize-html-CzDrBh1x.js","assets/empty-DIo9Sq4M.js","assets/en-U5f283_u.js","assets/src-D757_w1T.css","assets/src-rwoOesms.js","assets/exports-SFAo6MQY.js","assets/workflows.store-fKRofyHu.js","assets/core-CMxey_qZ.js","assets/constants-Brs44Mbc.js","assets/merge-ClIuBZpC.js","assets/expression-runtime-stub-D02gUA55.js","assets/useRootStore-NTSmdx9S.js","assets/settings.store-CrL-o4BC.js","assets/dateformat-9ZHpj92n.js","assets/_baseOrderBy-C4Rullvn.js","assets/useDebounce-BeI9fzpX.js","assets/users.store-ByD75lsx.js","assets/canvas.eventBus-CpYDIZQ3.js","assets/_virtual_node-popularity-data-Dzz04_Gm.js","assets/useExternalHooks-CtGrKAKc.js","assets/nodeIcon-C0E_jHF3.js","assets/templates.store-DMOs2Y7X.js","assets/cloudPlan.store-NHE3IH4w.js","assets/banners.store-B7RGCbou.js","assets/banners-CXsyom4e.css","assets/NodeIcon-DOKlGMRK.js","assets/NodeIcon-D6NjxeP8.css","assets/useAiGateway-0SrMClbJ.js","assets/builder.store-B8hcAQ92.js","assets/useMessage-CLbV4nbZ.js","assets/overlay-D8aP8u_8.js","assets/useToast-BFkWPPHz.js","assets/useStyles-Ckgdblto.js","assets/FileSaver.min--BtyQUOI.js","assets/dist-1UmUUMlk.js","assets/useDocumentTitle-BoZ4pEPK.js","assets/useCodeDiff-MGlB_L8r.js","assets/event-bus-C9EFPlnM.js","assets/focusPanel.store-Dsthgo9l.js","assets/useCalloutHelpers-CImQJ_zA.js","assets/usePinnedData-BGw7st7J.js","assets/chatPanel.store-BUOiVHNn.js","assets/assistant.store-VnqzDzrf.js","assets/useQuickConnect-IewBFg4u.js","assets/CommunityNodeUpdateInfo-DwKaSsfa.js","assets/semver-sRlh8pZV.js","assets/communityNodes.store-D4ssVJ_6.js","assets/CommunityNodeUpdateInfo-BKXtPPI4.css","assets/ContactAdministratorToInstall-02Hjo_u-.js","assets/useCanvasOperations-CntpC_YQ.js","assets/core-DSzj01DV.js","assets/core-nTgY3UvQ.js","assets/xml-DSPlQU-O.js","assets/VueMarkdown-BkxyUHjQ.js","assets/useWorkflowState-C2Tk35gp.js","assets/executions.store-DII5bLlT.js","assets/setupPanel.store-CNAhMYki.js","assets/templateTransforms-BWsJNAZW.js","assets/useCanvasOperations-BGIelHPw.css","assets/ContactAdministratorToInstall-JoRxYxA6.css","assets/useActions-By0yVK0x.js","assets/shield-alt-BmJ1MCiI.js","assets/NodeCreator-sYDcv9PQ.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, M as defineAsyncComponent, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, _ as Fragment, _n as normalizeClass, it as renderSlot, j as createVNode, v as Suspense, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-rwoOesms.js";
import { Ea as N8nButton_default, F as N8nPopover_default, Li as N8nIconButton_default, Mi as N8nTooltip_default, Si as AskAssistantIcon_default } from "./src-D7XhL4SE.js";
import { d as __vitePreload } from "./get-Den8eczo.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Tn as getMidCanvasPosition } from "./workflows.store-fKRofyHu.js";
import { mt as NODE_CREATOR_OPEN_SOURCES, or as STICKY_NODE_TYPE } from "./constants-Brs44Mbc.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-ByD75lsx.js";
import { t as useBuilderStore } from "./builder.store-B8hcAQ92.js";
import { t as useFocusPanelStore } from "./focusPanel.store-Dsthgo9l.js";
import { t as useAssistantStore } from "./assistant.store-VnqzDzrf.js";
import { t as useChatPanelStore } from "./chatPanel.store-BUOiVHNn.js";
import { t as useWorkflowId } from "./useWorkflowId-pDK_qu7t.js";
import { t as useSetupPanelStore } from "./setupPanel.store-CNAhMYki.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-BC0Syz-b.js";
import { n as useNodeCreatorShortcutCoachmark } from "./useNodeCreatorShortcutCoachmark-5D-j1dgJ.js";
import { t as useActions } from "./useActions-By0yVK0x.js";
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "node-creator-shortcut-coachmark__header" };
var _hoisted_2 = { class: "node-creator-shortcut-coachmark__title" };
var _hoisted_3 = { class: "node-creator-shortcut-coachmark__body" };
var _hoisted_4 = { class: "node-creator-shortcut-coachmark__footer" };
//#endregion
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue
var NodeCreatorShortcutCoachmark_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreatorShortcutCoachmark",
	props: { visible: { type: Boolean } },
	emits: ["dismiss"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: __props.visible,
				"show-arrow": true,
				"enable-scrolling": false,
				"suppress-auto-focus": true,
				side: "left",
				align: "center",
				"side-offset": 8,
				"z-index": 2200,
				"content-class": "node-creator-shortcut-coachmark"
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				content: withCtx(() => [
					createBaseVNode("div", _hoisted_1, [createBaseVNode("span", _hoisted_2, toDisplayString(unref(i18n).baseText("nodeCreator.shortcutCoachmark.title")), 1)]),
					createBaseVNode("p", _hoisted_3, toDisplayString(unref(i18n).baseText("nodeCreator.shortcutCoachmark.body")), 1),
					createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nButton_default), {
						size: "small",
						label: unref(i18n).baseText("nodeCreator.shortcutCoachmark.gotIt"),
						class: "node-creator-shortcut-coachmark__button",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("dismiss"))
					}, null, 8, ["label"])])
				]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/views/NodeCreation.vue?vue&type=script&setup=true&lang.ts
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-BhfQYsVF.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const workflowId = useWorkflowId();
		const { getAddedNodesAndConnections } = useActions();
		const { shouldShowCoachmark, onDismissCoachmark } = useNodeCreatorShortcutCoachmark();
		const sidePanelTooltip = computed(() => {
			if (setupPanelStore.isFeatureEnabled) return i18n.baseText("nodeView.openSidePanel");
			return i18n.baseText("nodeView.openFocusPanel");
		});
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
				has_existing_session: !assistantStore.isSessionEnded,
				workflowId: workflowId.value
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
				createVNode(NodeCreatorShortcutCoachmark_default, {
					visible: unref(shouldShowCoachmark),
					onDismiss: unref(onDismissCoachmark)
				}, {
					default: withCtx(() => [createVNode(KeyboardShortcutTooltip_default, {
						label: unref(i18n).baseText("nodeView.openNodesPanel"),
						shortcut: { keys: ["N"] },
						placement: "left"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "subtle",
							size: "large",
							icon: "plus",
							"aria-label": unref(i18n).baseText("nodeView.openNodesPanel"),
							"data-test-id": "node-creator-plus-button",
							onClick: openNodeCreator
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["label"])]),
					_: 1
				}, 8, ["visible", "onDismiss"]),
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
						"aria-label": unref(i18n).baseText("nodeView.openCommandBar"),
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					}, null, 8, ["aria-label"])]),
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
						"aria-label": unref(i18n).baseText("nodeView.addStickyHint"),
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: sidePanelTooltip.value,
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
						"aria-label": sidePanelTooltip.value,
						active: __props.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["aria-label", "active"])]),
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
						"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["aria-label", "class"])]),
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
var NodeCreation_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeCreation_default as default };
