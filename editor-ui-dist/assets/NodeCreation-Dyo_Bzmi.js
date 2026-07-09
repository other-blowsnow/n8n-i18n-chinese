const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-CwwdZ0UM.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/chunk-CC9Q-vWm.js","assets/src-CSWS3PCK.js","assets/get-CDrcd2Fp.js","assets/_MapCache-Cwo_kzI3.js","assets/vue.runtime.esm-bundler-Bs4WIMNP.js","assets/CalendarDate-DaCb8yxn.js","assets/core-CxAuVuwP.js","assets/sanitize-html-Z9mSNZC_.js","assets/__vite-browser-external-Byz2CIkm.js","assets/en-DjyScucC.js","assets/src-BtmEz3LD.css","assets/src-BuOkMaP4.js","assets/exports-BTPKQ5VG.js","assets/workflowDocument.store-CHzX8xP5.js","assets/constants-U-laJZAl.js","assets/merge-pQs2xbBu.js","assets/expression-runtime-stub-D02gUA55.js","assets/useRootStore-Bad1y11b.js","assets/settings.store-CgTGI66t.js","assets/_baseOrderBy-x9MNL6nO.js","assets/useDebounce-DkZtSUZe.js","assets/useDocumentTitle-DByx4tvl.js","assets/users.store-Bf6s0cNu.js","assets/workflowsList.store-DLn31s0i.js","assets/dateformat-9ZHpj92n.js","assets/canvas.eventBus-BdEt5mYf.js","assets/_virtual_node-popularity-data-BJUH8BN2.js","assets/useExternalHooks-C5YTWutq.js","assets/nodeIcon-DgHKBcMJ.js","assets/templates.store-HpNhMhh3.js","assets/cloudPlan.store-BypcSiXG.js","assets/utils-DqDwPTbw.js","assets/banners.store-DRNsl4Op.js","assets/banners-CXsyom4e.css","assets/NodeIcon-DyGxMNoH.js","assets/NodeIcon-D6NjxeP8.css","assets/useAiGateway-dMX2ajVS.js","assets/builder.store-mB0WXXKR.js","assets/useMessage-CEO7UJTt.js","assets/overlay-CIsVFY7v.js","assets/useToast-CNwmpHsw.js","assets/useStyles-CBXZLAO5.js","assets/FileSaver.min-vCTJCDj3.js","assets/dist-CFw5VhTU.js","assets/useCodeDiff-C5paD2dB.js","assets/event-bus-C_HI1u_B.js","assets/useNodeHelpers-C_icbFnN.js","assets/useLoadingService-CCC_-MSI.js","assets/usePrivateCredentials-BenZ-OWA.js","assets/focusPanel.store-DBxwV8df.js","assets/useCalloutHelpers-Dx9Kgov0.js","assets/usePinnedData-CP9PENge.js","assets/chatPanel.store-Cr__4fuB.js","assets/assistant.store-DApJrTzS.js","assets/CommunityNodeUpdateInfo-DQ24ywaM.js","assets/semver-BWY47Isi.js","assets/communityNodes.store-Bom3qvNj.js","assets/CommunityNodeUpdateInfo-BKXtPPI4.css","assets/useQuickConnect-Yt-j-Gsk.js","assets/useCredentialOAuth-CFBfbXVH.js","assets/ContactAdministratorToInstall-Bpzw5Ez4.js","assets/useCanvasOperations-BBdmNEZe.js","assets/core-DSzj01DV.js","assets/core-nTgY3UvQ.js","assets/xml-DSPlQU-O.js","assets/VueMarkdown-CgD06Fu-.js","assets/executions.store-D5wCuwhe.js","assets/setupPanel.store-D7nWL1qT.js","assets/templateTransforms-BkkzFLD-.js","assets/useCanvasOperations-BGIelHPw.css","assets/ContactAdministratorToInstall-JoRxYxA6.css","assets/useActions-CELBQau6.js","assets/shield-alt-C5D6AVbi.js","assets/NodeCreator-sYDcv9PQ.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BuOkMaP4.js";
import { Ja as N8nButton_default, Oi as AskAssistantIcon_default, V as N8nPopover_default, Wi as N8nIconButton_default, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { d as __vitePreload } from "./get-CDrcd2Fp.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _t as NODE_CREATOR_OPEN_SOURCES, lr as STICKY_NODE_TYPE } from "./constants-U-laJZAl.js";
import { Hr as getMidCanvasPosition, Pt as useWorkflowId } from "./workflowDocument.store-CHzX8xP5.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-Bf6s0cNu.js";
import { t as useFocusPanelStore } from "./focusPanel.store-DBxwV8df.js";
import { t as useAssistantStore } from "./assistant.store-DApJrTzS.js";
import { t as useChatPanelStore } from "./chatPanel.store-Cr__4fuB.js";
import { t as useSetupPanelStore } from "./setupPanel.store-D7nWL1qT.js";
import { t as useEditorContext } from "./useEditorContext-BYRUYy6c.js";
import { n as useInstanceAiEditorCapability } from "./useInstanceAiEditorCapability-CtUaHJbA.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-DblQYtgE.js";
import { n as useNodeCreatorShortcutCoachmark } from "./useNodeCreatorShortcutCoachmark-C39HZR2h.js";
import { t as useActions } from "./useActions-CELBQau6.js";
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-CwwdZ0UM.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
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
		const { aiAssistant, aiBuilder, instanceAi } = useEditorContext();
		const instanceAiCapability = useInstanceAiEditorCapability();
		async function onInstanceAiCanvasActionClick() {
			await instanceAiCapability.openWorkflow?.("canvas_action_button");
		}
		async function onAskAssistantButtonClick() {
			if (aiBuilder.value) await chatPanelStore.toggle({ mode: "builder" });
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
				unref(chatPanelStore).isEditableCanvasView && unref(instanceAi) && !!unref(instanceAiCapability).openWorkflow ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"icon-only": "",
					size: "large",
					"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
					class: normalizeClass({ [_ctx.$style.icon]: true }),
					"data-test-id": "instance-ai-canvas-action-button",
					onClick: onInstanceAiCanvasActionClick
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
					_: 1
				}, 8, ["aria-label", "class"])) : createCommentVNode("", true),
				unref(chatPanelStore).isEditableCanvasView && (unref(aiAssistant) || unref(aiBuilder)) && !unref(instanceAi) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
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
