const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-Bn_BlnT9.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/chunk-CC9Q-vWm.js","assets/src-DFOx8N22.js","assets/get-G8yCCFQ6.js","assets/_MapCache-SPaVAT41.js","assets/vue.runtime.esm-bundler-C6vn67cX.js","assets/CalendarDate-DaCb8yxn.js","assets/sanitize-html-D30YB-ex.js","assets/empty-CSot38mi.js","assets/en-hN6GCUz2.js","assets/src-BX0ydjDp.css","assets/src-DQKWamAF.js","assets/exports-CPk7_Qvp.js","assets/workflows.store-DyUv-2Dd.js","assets/core-nZc0i8VB.js","assets/constants-BMUE7W6Y.js","assets/merge-Dxq-OM4r.js","assets/expression-runtime-stub-9w2ZHVM3.js","assets/useRootStore-BOF8LYEF.js","assets/settings.store-D_uIyAbF.js","assets/_baseOrderBy-Bq0EI169.js","assets/useDebounce-g_bJ4r2W.js","assets/users.store-OUM63rct.js","assets/workflowsList.store-8HiamWjt.js","assets/dateformat-9ZHpj92n.js","assets/canvas.eventBus-7-c110vJ.js","assets/_virtual_node-popularity-data-DUP8Fmvb.js","assets/useExternalHooks-BwRpvViW.js","assets/nodeIcon-Deb0pOkS.js","assets/templates.store-BdFZFlXH.js","assets/cloudPlan.store-M3yGRLP8.js","assets/utils-COtHqUdh.js","assets/banners.store-Ch9Ahp7G.js","assets/banners-CXsyom4e.css","assets/NodeIcon-BwUEfEHF.js","assets/NodeIcon-D6NjxeP8.css","assets/useAiGateway-DQYdR7-k.js","assets/builder.store-B0pC9-hX.js","assets/useMessage-DH0rfBHu.js","assets/overlay-CoI5mGN1.js","assets/useToast-DacasnmQ.js","assets/useStyles-Ckgdblto.js","assets/FileSaver.min-CDRDQmqK.js","assets/dist-DHcbImTe.js","assets/useDocumentTitle-6ERdmOor.js","assets/useCodeDiff-C6EuGKGu.js","assets/event-bus-Bp9YvPxG.js","assets/focusPanel.store-CYIIW-FS.js","assets/useCalloutHelpers-h2VSWJPm.js","assets/usePinnedData-CtRN543V.js","assets/chatPanel.store-DFqCLJQe.js","assets/assistant.store-BXrrUA7-.js","assets/CommunityNodeUpdateInfo-CIbaJ9_k.js","assets/semver-C_lYYAx4.js","assets/communityNodes.store-CMWkKSQC.js","assets/CommunityNodeUpdateInfo-BKXtPPI4.css","assets/useQuickConnect-s9jLZMRW.js","assets/useCredentialOAuth-BCZXZlZZ.js","assets/ContactAdministratorToInstall-S5LnGHSx.js","assets/useCanvasOperations-BYVWREcI.js","assets/core-CaAD8sLr.js","assets/core-DW0KLzcX.js","assets/xml-BIRtwBD9.js","assets/VueMarkdown-BYGWCztI.js","assets/useWorkflowState-CIGpCkRl.js","assets/executions.store-BNyXyztn.js","assets/setupPanel.store-BXFF77p_.js","assets/templateTransforms-DtvGs9E2.js","assets/useCanvasOperations-BGIelHPw.css","assets/ContactAdministratorToInstall-JoRxYxA6.css","assets/useActions-BXpL5dKK.js","assets/shield-alt-J5nzuCWH.js","assets/NodeCreator-sYDcv9PQ.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, M as defineAsyncComponent, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, _ as Fragment, _n as normalizeClass, it as renderSlot, j as createVNode, v as Suspense, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { B as N8nPopover_default, Oa as N8nButton_default, Wi as N8nIconButton_default, ki as AskAssistantIcon_default, zi as N8nTooltip_default } from "./src-DFOx8N22.js";
import { d as __vitePreload } from "./get-G8yCCFQ6.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Sr as getMidCanvasPosition } from "./workflows.store-DyUv-2Dd.js";
import { mt as NODE_CREATOR_OPEN_SOURCES, or as STICKY_NODE_TYPE } from "./constants-BMUE7W6Y.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-OUM63rct.js";
import { o as useWorkflowId, t as useBuilderStore } from "./builder.store-B0pC9-hX.js";
import { t as useFocusPanelStore } from "./focusPanel.store-CYIIW-FS.js";
import { t as useAssistantStore } from "./assistant.store-BXrrUA7-.js";
import { t as useChatPanelStore } from "./chatPanel.store-DFqCLJQe.js";
import { t as useSetupPanelStore } from "./setupPanel.store-BXFF77p_.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-CbfStrtC.js";
import { n as useNodeCreatorShortcutCoachmark } from "./useNodeCreatorShortcutCoachmark-f2vACQSP.js";
import { t as useActions } from "./useActions-BXpL5dKK.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-Bn_BlnT9.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73])));
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
