import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _ as Fragment, _n as normalizeClass, bt as withDirectives, gt as watch, j as createVNode, p as vShow, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n, st as useDebounceFn } from "./_MapCache-65UNw25j.js";
import { $i as N8nIcon_default, Fi as Input_default, Ii as N8nIconButton_default, Mi as N8nTooltip_default, Qi as N8nButton_default, Wt as ElSwitch, Yi as N8nHeading_default, Zi as N8nText_default, h as N8nInlineTextEdit_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-BHNvvSeY.js";
import { Tr as useToast, jr as useMessage, w as useNodeTypesStore, wr as hasRole } from "./users.store-buY8IFeq.js";
import "./ParameterInputList-B0ozRU8e.js";
import { Ps as MODAL_CONFIRM, Uo as v4_default, ci as CHAT_USER_BLOCKED_CHAT_HUB_TOOL_TYPES, gl as DEBOUNCE_TIME, ho as NodeConnectionTypes, si as ALWAYS_BLOCKED_CHAT_HUB_TOOL_TYPES, wl as getDebounceTime } from "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import { t as Modal_default } from "./Modal-Bi3rB-0H.js";
import "./useClipboard-DUb9bZTD.js";
import "./executions.store-CZ7IudtY.js";
import "./assistant.store-CWYwgkmr.js";
import "./chatPanel.store-DMGDdE_b.js";
import "./RunData-NQo5-mYA.js";
import "./NDVEmptyState-DZmU4yg5.js";
import "./externalSecrets.ee.store-llIAkYfQ.js";
import "./uniqBy-Dj098wSc.js";
import "./usePinnedData-C8gnvP4e.js";
import "./nodeIcon-CD_sOlVS.js";
import "./canvas.utils-DMO0Z6xe.js";
import { i as __virtual_node_popularity_data_default } from "./canvas.eventBus-C8w9bqJ2.js";
import "./useCanvasOperations-D5bkcPXX.js";
import "./setupPanel.store-CF2im1BD.js";
import "./nodeTransforms-DEpSiFLd.js";
import "./templateTransforms-B0pb7wSN.js";
import "./useQuickConnect-tQYKZnYl.js";
import "./CredentialIcon-BcmNkOZQ.js";
import "./useDynamicCredentials-BuIRciS5.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-DGhmGwc9.js";
import { t as NodeIcon_default } from "./NodeIcon-Bp2F1h7o.js";
import "./VirtualSchema-Bu4PUQZ1.js";
import "./useCalloutHelpers-B55p9wzV.js";
import "./useTelemetryContext-xzG23G1S.js";
import "./useRunWorkflow-_sIY4q0C.js";
import "./pushConnection.store-f62eviF-.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-DPXpfSOV.js";
import "./dateFormatter-HakUyV2l.js";
import "./useExecutionHelpers-CVHk79ok.js";
import "./vue-K5kPXnPp.js";
import { t as useChatStore } from "./chat.store-uXx5LGUR.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CCVaMGUC.js";
var ToolListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolListItem",
	props: {
		nodeType: {},
		configuredNode: {},
		enabled: { type: Boolean },
		mode: {}
	},
	emits: [
		"toggle",
		"configure",
		"remove",
		"add"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const description$1 = computed(() => {
			if (props.configuredNode && props.configuredNode.name !== props.nodeType.displayName) return props.nodeType.displayName;
			return props.nodeType.description;
		});
		const displayName = computed(() => {
			if (props.configuredNode) return props.configuredNode.name;
			return props.nodeType.displayName;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.item, { [_ctx.$style.configured]: __props.mode === "configured" }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 32
				}, null, 8, ["node-type"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.name),
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(displayName.value), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description$1.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.mode === "configured" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("chatHub.toolsManager.configure") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "settings",
							variant: "ghost",
							text: "",
							class: normalizeClass(_ctx.$style.actionButton),
							onClick: _cache[0] || (_cache[0] = ($event) => emit("configure"))
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("chatHub.toolsManager.remove") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "trash-2",
							variant: "ghost",
							text: "",
							class: normalizeClass(_ctx.$style.actionButton),
							onClick: _cache[1] || (_cache[1] = ($event) => emit("remove"))
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), { content: __props.enabled ? unref(i18n).baseText("chatHub.toolsManager.disableTool") : unref(i18n).baseText("chatHub.toolsManager.enableTool") }, {
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							"model-value": __props.enabled,
							class: normalizeClass(_ctx.$style.toggle),
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => emit("toggle", Boolean($event)))
						}, null, 8, ["model-value", "class"])]),
						_: 1
					}, 8, ["content"])
				], 64)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					size: "small",
					icon: "plus",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("add"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.add")), 1)]),
					_: 1
				}))], 2)
			], 2);
		};
	}
});
var ToolListItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_kwv06_125",
	configured: "_configured_kwv06_132",
	actionButton: "_actionButton_kwv06_132",
	iconWrapper: "_iconWrapper_kwv06_139",
	content: "_content_kwv06_147",
	name: "_name_kwv06_155",
	description: "_description_kwv06_162",
	actions: "_actions_kwv06_169",
	toggle: "_toggle_kwv06_176"
};
var ToolListItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolListItem_vue_vue_type_style_index_0_lang_module_default }]]);
var ToolsManagerModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsManagerModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const agentId = computed(() => props.data.customAgentId);
		const agentToolIds = computed(() => {
			if (!agentId.value) return null;
			return chatStore.customAgents[agentId.value]?.toolIds ?? [];
		});
		const modalTitle = computed(() => {
			const baseTitle = i18n.baseText("chatHub.toolsManager.title");
			if (!agentId.value) return baseTitle;
			const agentName = chatStore.customAgents[agentId.value]?.name;
			return agentName ? `${baseTitle} (${agentName})` : baseTitle;
		});
		function hasInputs(nodeType) {
			const { inputs } = nodeType;
			if (Array.isArray(inputs)) return inputs.length > 0;
			return true;
		}
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const chatStore = useChatStore();
		const toast = useToast();
		const message = useMessage();
		const nodePopularityMap = new Map(__virtual_node_popularity_data_default.map((node) => [node.id, node.popularity]));
		const searchQuery = ref("");
		const debouncedSearchQuery = ref("");
		const setDebouncedSearchQuery = useDebounceFn((value) => {
			debouncedSearchQuery.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		watch(searchQuery, (newValue) => {
			setDebouncedSearchQuery(newValue);
		});
		const currentView = ref("list");
		const settingsNode = ref(null);
		const settingsExistingToolNames = ref([]);
		const settingsOnConfirm = ref(null);
		const settingsContentRef = ref(null);
		const settingsNodeName = ref("");
		const settingsIsValid = ref(false);
		const tools = computed(() => chatStore.configuredTools);
		const excludedToolTypes = computed(() => {
			const blocked = [...ALWAYS_BLOCKED_CHAT_HUB_TOOL_TYPES];
			if (hasRole(["global:chatUser"])) blocked.push(...CHAT_USER_BLOCKED_CHAT_HUB_TOOL_TYPES);
			return blocked;
		});
		const availableToolTypes = computed(() => {
			return (nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? []).map((name$1) => nodeTypesStore.getNodeType(name$1)).filter((nodeType) => nodeType !== null && !excludedToolTypes.value.includes(nodeType.name) && !hasInputs(nodeType)).sort((a, b) => {
				const popA = nodePopularityMap.get(a.name) ?? 0;
				return (nodePopularityMap.get(b.name) ?? 0) - popA;
			});
		});
		const filteredConfiguredTools = computed(() => {
			if (!debouncedSearchQuery.value) return tools.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return tools.value.filter((tool) => {
				const def = tool.definition;
				const nodeType = nodeTypesStore.getNodeType(def.type, def.typeVersion);
				const nameMatch = def.name.toLowerCase().includes(query);
				const typeMatch = nodeType?.displayName.toLowerCase().includes(query);
				return nameMatch || typeMatch;
			});
		});
		const filteredAvailableTools = computed(() => {
			if (!debouncedSearchQuery.value) return availableToolTypes.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return availableToolTypes.value.filter((nodeType) => {
				const nameMatch = nodeType.displayName.toLowerCase().includes(query);
				const descMatch = nodeType.description?.toLowerCase().includes(query);
				return nameMatch || descMatch;
			});
		});
		function getNodeType(tool) {
			return nodeTypesStore.getNodeType(tool.definition.type, tool.definition.typeVersion);
		}
		function openSettings(node, existingNames, onConfirm) {
			settingsNode.value = node;
			settingsExistingToolNames.value = existingNames;
			settingsOnConfirm.value = onConfirm;
			settingsNodeName.value = node.name;
			settingsIsValid.value = false;
			currentView.value = "settings";
		}
		function handleConfigureTool(tool) {
			const otherToolNames = tools.value.filter((t) => t.definition.id !== tool.definition.id).map((t) => t.definition.name);
			openSettings({ ...tool.definition }, otherToolNames, async (configuredNode) => {
				try {
					await chatStore.updateConfiguredTool(tool.definition.id, configuredNode);
				} catch (error) {
					toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
				}
			});
		}
		async function handleRemoveTool(toolId) {
			if (await message.confirm(i18n.baseText("chatHub.toolsManager.confirmRemove.message"), i18n.baseText("chatHub.toolsManager.confirmRemove.title"), {
				confirmButtonText: i18n.baseText("chatHub.toolsManager.remove"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			try {
				await chatStore.removeConfiguredTool(toolId);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
			}
		}
		async function handleToggleTool(tool, enabled) {
			try {
				if (agentId.value) await chatStore.toggleCustomAgentTool(agentId.value, tool.definition.id);
				else await chatStore.toggleToolEnabled(tool.definition.id, enabled);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
			}
		}
		function handleAddTool(nodeType) {
			const typeVersion = typeof nodeType.version === "number" ? nodeType.version : nodeType.version.toSorted((a, b) => b - a)?.[0];
			if (!typeVersion) return;
			const newToolId = v4_default();
			const existingNames = tools.value.map((t) => t.definition.name);
			openSettings({
				type: nodeType.name,
				typeVersion,
				parameters: {},
				id: newToolId,
				name: nodeType.displayName,
				position: [0, 0]
			}, existingNames, async (configuredNode) => {
				try {
					await chatStore.addConfiguredTool(configuredNode);
				} catch (error) {
					toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
				}
			});
		}
		function handleBack() {
			currentView.value = "list";
			settingsNode.value = null;
			settingsExistingToolNames.value = [];
			settingsOnConfirm.value = null;
			settingsNodeName.value = "";
			settingsIsValid.value = false;
		}
		function handleSave() {
			const currentNode = settingsContentRef.value?.node;
			if (!currentNode || !settingsOnConfirm.value) return;
			settingsOnConfirm.value(currentNode);
			handleBack();
		}
		function handleSettingsChangeName(name$1) {
			settingsContentRef.value?.handleChangeName(name$1);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "780px",
				"show-close": currentView.value === "list",
				"custom-class": _ctx.$style.modal
			}, {
				header: withCtx(() => [currentView.value === "list" ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(modalTitle.value), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.settingsHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsHeaderLeft) }, [createVNode(unref(N8nIconButton_default), {
					icon: "arrow-left",
					text: "",
					size: "large",
					variant: "ghost",
					class: normalizeClass(_ctx.$style.backButton),
					onClick: handleBack
				}, null, 8, ["class"]), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": settingsNodeName.value,
					"max-width": 350,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleSettingsChangeName
				}, null, 8, ["model-value", "class"])], 2), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					disabled: !settingsIsValid.value,
					onClick: handleSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2))]),
				content: withCtx(() => [
					withDirectives(createVNode(unref(Input_default), {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						placeholder: unref(i18n).baseText("chatHub.toolsManager.searchPlaceholder"),
						clearable: "",
						class: normalizeClass(_ctx.$style.searchInput)
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"class"
					]), [[vShow, currentView.value === "list"]]),
					withDirectives(createBaseVNode("div", {
						"data-tools-manager-modal": "",
						class: normalizeClass(_ctx.$style.listWrapper)
					}, [
						filteredConfiguredTools.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.section)
						}, [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.configuredTools", { interpolate: { count: tools.value.length } })), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredConfiguredTools.value, (tool) => {
							return openBlock(), createBlock(ToolListItem_default, {
								key: tool.definition.id,
								"node-type": getNodeType(tool),
								"configured-node": tool.definition,
								enabled: agentToolIds.value ? agentToolIds.value.includes(tool.definition.id) : tool.enabled,
								mode: "configured",
								onConfigure: ($event) => handleConfigureTool(tool),
								onRemove: ($event) => handleRemoveTool(tool.definition.id),
								onToggle: ($event) => handleToggleTool(tool, $event)
							}, null, 8, [
								"node-type",
								"configured-node",
								"enabled",
								"onConfigure",
								"onRemove",
								"onToggle"
							]);
						}), 128))], 2)], 2)) : createCommentVNode("", true),
						filteredAvailableTools.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.section)
						}, [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.availableTools", { interpolate: { count: availableToolTypes.value.length } })), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableTools.value, (nodeType) => {
							return openBlock(), createBlock(ToolListItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								mode: "available",
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, ["node-type", "onAdd"]);
						}), 128))], 2)], 2)) : createCommentVNode("", true),
						filteredConfiguredTools.value.length === 0 && filteredAvailableTools.value.length === 0 ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.emptyState)
						}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.noResults")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true)
					], 2), [[vShow, currentView.value === "list"]]),
					currentView.value === "settings" && settingsNode.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.settingsWrapper)
					}, [createVNode(ToolSettingsContent_default, {
						ref_key: "settingsContentRef",
						ref: settingsContentRef,
						"initial-node": settingsNode.value,
						"existing-tool-names": settingsExistingToolNames.value,
						"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => settingsIsValid.value = $event),
						"onUpdate:nodeName": _cache[2] || (_cache[2] = ($event) => settingsNodeName.value = $event)
					}, null, 8, ["initial-node", "existing-tool-names"])], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, [
				"name",
				"show-close",
				"custom-class"
			]);
		};
	}
});
var ToolsManagerModal_vue_vue_type_style_index_0_lang_module_default = {
	modal: "_modal_1cu57_125",
	settingsHeader: "_settingsHeader_1cu57_129",
	settingsHeaderLeft: "_settingsHeaderLeft_1cu57_136",
	icon: "_icon_1cu57_144",
	title: "_title_1cu57_149",
	listWrapper: "_listWrapper_1cu57_158",
	settingsWrapper: "_settingsWrapper_1cu57_169",
	searchInput: "_searchInput_1cu57_178",
	section: "_section_1cu57_183",
	toolsList: "_toolsList_1cu57_189",
	emptyState: "_emptyState_1cu57_194"
};
var ToolsManagerModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolsManagerModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsManagerModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolsManagerModal_default as default };
