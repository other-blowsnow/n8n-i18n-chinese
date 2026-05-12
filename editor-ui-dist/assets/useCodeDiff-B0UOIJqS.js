import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, I as h, N as defineComponent, Sn as toDisplayString, Wt as unref } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-p4E5FBDC.js";
import { Ct as createEventBus } from "./src-DJmr1lxY.js";
import { $t as createWorkflowDocumentId, Qt as useNDVStore, ft as replaceCode, nn as useWorkflowDocumentStore } from "./users.store-DId3pj1b.js";
import { t as useToast } from "./useToast-B3utwkNU.js";
import { Lr as EDITABLE_CANVAS_VIEWS, is as deepCopy, zr as VIEWS } from "./constants-DKn5DlOG.js";
import { T as defineStore, h as assert, t as useRootStore } from "./useRootStore-COhM0Nxr.js";
import { In as STORES } from "./settings.store-BY3m7mSb.js";
import { o as codeNodeEditorEventBus } from "./event-bus-BlV9dvab.js";
//#region src/features/ai/assistant/constants.ts
/**
* Views where the Assistant chat panel can be shown
*/
var ASSISTANT_ENABLED_VIEWS = [
	...EDITABLE_CANVAS_VIEWS,
	VIEWS.EXECUTION_PREVIEW,
	VIEWS.WORKFLOWS,
	VIEWS.CREDENTIALS,
	VIEWS.PROJECTS_CREDENTIALS,
	VIEWS.PROJECTS_WORKFLOWS,
	VIEWS.PROJECT_SETTINGS,
	VIEWS.TEMPLATE_SETUP
];
/**
* Views where the Builder chat panel can be shown
*/
var BUILDER_ENABLED_VIEWS = [...EDITABLE_CANVAS_VIEWS];
/**
* Shared reactive state for chat panel that can be imported without circular dependencies.
* This is a simple store that only holds state, no actions.
* Updated by chatPanel.store.ts, read by assistant/builder stores.
*/
var useChatPanelStateStore = defineStore(STORES.CHAT_PANEL_STATE, () => {
	return {
		isOpen: ref(false),
		width: ref(400),
		activeMode: ref("builder"),
		showCoachmark: ref(false),
		focusRequested: ref(0)
	};
});
//#endregion
//#region src/features/ndv/shared/ndv.eventBus.ts
var ndvEventBus = createEventBus();
//#endregion
//#region src/app/components/AiUpdatedCodeMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-action-parameter-node"];
//#endregion
//#region src/app/components/AiUpdatedCodeMessage.vue
var AiUpdatedCodeMessage_default = /* @__PURE__ */ defineComponent({
	__name: "AiUpdatedCodeMessage",
	props: { nodeName: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.codeUpdated.message.body1")) + " ", 1),
				createBaseVNode("a", {
					"data-action": "openNodeDetail",
					"data-action-parameter-node": __props.nodeName
				}, toDisplayString(__props.nodeName), 9, _hoisted_1),
				createTextVNode(" " + toDisplayString(unref(i18n).baseText("aiAssistant.codeUpdated.message.body2")), 1)
			]);
		};
	}
});
//#endregion
//#region src/features/ai/assistant/composables/useCodeDiff.ts
function useCodeDiff(options) {
	const rootStore = useRootStore();
	const ndvStore = useNDVStore();
	const locale = useI18n();
	const suggestions = ref({});
	function updateParameters(workflowId, nodeName, parameters) {
		if (ndvStore.activeNodeName === nodeName) Object.keys(parameters).forEach((key) => {
			const update = {
				node: nodeName,
				name: `parameters.${key}`,
				value: parameters[key]
			};
			ndvEventBus.emit("updateParameterValue", update);
		});
		else useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).setNodeParameters({
			name: nodeName,
			value: parameters
		}, true);
	}
	function getRelevantParameters(parameters, keysToKeep) {
		return keysToKeep.reduce((accu, key) => {
			accu[key] = deepCopy(parameters[key]);
			return accu;
		}, {});
	}
	function showCodeUpdateToastIfNeeded(errorNodeName) {
		if (errorNodeName !== ndvStore.activeNodeName) useToast().showMessage({
			type: "success",
			title: locale.baseText("aiAssistant.codeUpdated.message.title"),
			message: h(AiUpdatedCodeMessage_default, { nodeName: errorNodeName }),
			duration: 4e3
		});
	}
	async function applyCodeDiff(workflowId, index) {
		const codeDiffMessage = options.chatMessages.value[index];
		if (!codeDiffMessage || codeDiffMessage.type !== "code-diff") throw new Error("No code diff to apply");
		const codeDiff = codeDiffMessage;
		try {
			const nodeName = options.getTargetNodeName(codeDiff);
			const sessionId = options.getSessionId(codeDiff);
			assert(nodeName, "No target node for code diff");
			codeDiff.replacing = true;
			const suggestionId = codeDiff.suggestionId;
			const activeNode = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).getNodeByName(nodeName);
			assert(activeNode);
			const cached = suggestions.value[suggestionId];
			if (cached) updateParameters(workflowId, activeNode.name, cached.suggested);
			else {
				const { parameters: suggested } = await replaceCode(rootStore.restApiContext, {
					suggestionId: codeDiff.suggestionId,
					sessionId
				});
				suggestions.value[suggestionId] = {
					previous: getRelevantParameters(activeNode.parameters, Object.keys(suggested)),
					suggested
				};
				updateParameters(workflowId, activeNode.name, suggested);
			}
			codeDiff.replaced = true;
			codeNodeEditorEventBus.emit("codeDiffApplied");
			showCodeUpdateToastIfNeeded(activeNode.name);
		} catch (e) {
			console.error(e);
			codeDiff.error = true;
		}
		codeDiff.replacing = false;
	}
	async function undoCodeDiff(workflowId, index) {
		const codeDiffMessage = options.chatMessages.value[index];
		if (!codeDiffMessage || codeDiffMessage.type !== "code-diff") throw new Error("No code diff to apply");
		const codeDiff = codeDiffMessage;
		try {
			const nodeName = options.getTargetNodeName(codeDiff);
			assert(nodeName, "No target node for code diff");
			codeDiff.replacing = true;
			const suggestionId = codeDiff.suggestionId;
			const suggestion = suggestions.value[suggestionId];
			assert(suggestion);
			const activeNode = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).getNodeByName(nodeName);
			assert(activeNode);
			const suggested = suggestion.previous;
			updateParameters(workflowId, activeNode.name, suggested);
			codeDiff.replaced = false;
			codeNodeEditorEventBus.emit("codeDiffApplied");
			showCodeUpdateToastIfNeeded(activeNode.name);
		} catch (e) {
			console.error(e);
			codeDiff.error = true;
		}
		codeDiff.replacing = false;
	}
	return {
		suggestions,
		applyCodeDiff,
		undoCodeDiff
	};
}
//#endregion
export { BUILDER_ENABLED_VIEWS as a, ASSISTANT_ENABLED_VIEWS as i, ndvEventBus as n, useChatPanelStateStore as r, useCodeDiff as t };
