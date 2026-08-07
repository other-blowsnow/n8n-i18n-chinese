import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-AzCpuecL.js";
import { Ai as N8nText_default, Fi as N8nIconButton_default, Ii as N8nButton_default, Li as N8nIcon_default, Pi as Input_default, S as N8nInlineTextEdit_default, d as useMessage, in as ElSwitch, jr as N8nTooltip_default, jt as N8nHeading_default } from "./src-DidBXlm8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { B as useDebounceFn } from "./dist-CmlFwYoT.js";
import { t as useToast } from "./useToast-pZtUw1sf.js";
import { L as useNodeTypesStore, V as filterAndSearchNodes, X as isNodePreviewKey, et as removePreviewToken, mt as stripToolSuffix } from "./workflows.store-DDm0zgUM.js";
import { $i as v4, C as ALWAYS_BLOCKED_CHAT_HUB_TOOL_TYPES, ai as NodeConnectionTypes, w as CHAT_USER_BLOCKED_CHAT_HUB_TOOL_TYPES } from "./src-D4ZcEdLA.js";
import { t as useUsersStore } from "./users.store-BnmshxQB.js";
import "./constants-CJQKNI-b.js";
import { t as DEBOUNCE_TIME } from "./durations-CNO5pC2_.js";
import { t as getDebounceTime } from "./useDebounce-B7RJD4JN.js";
import { c as hasRole } from "./permissions-CTT33nwN.js";
import "./useMessage-BM1tQLP7.js";
import { t as Modal_default } from "./Modal-BV_PHJeH.js";
import { i as _virtual_node_popularity_data_default } from "./canvas.eventBus-rWJGCQaw.js";
import { t as useInstallNode } from "./useInstallNode-CFLYIjOd.js";
import { t as NodeIcon_default } from "./NodeIcon-DGmpoodn.js";
import { t as useChatStore } from "./chat.store-Eqrti3e_.js";
import { t as shield_alt_default } from "./shield-alt-CLyxPZyb.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-ZRsyvgSo.js";
//#region src/features/ai/chatHub/components/ToolListItem.vue?vue&type=script&setup=true&lang.ts
var ToolListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolListItem",
	props: {
		nodeType: {},
		configuredNode: {},
		enabled: { type: Boolean },
		mode: {},
		communityPreview: { type: Boolean },
		installing: { type: Boolean },
		installDisabled: { type: Boolean }
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
		const description = computed(() => {
			if (props.configuredNode && props.configuredNode.name !== props.nodeType.displayName) return props.nodeType.displayName;
			return props.nodeType.description;
		});
		const displayName = computed(() => {
			if (props.configuredNode) return props.configuredNode.name;
			return props.nodeType.displayName;
		});
		const actionLabel = computed(() => props.communityPreview ? i18n.baseText("communityNodeDetails.install") : i18n.baseText("chatHub.toolsManager.add"));
		const actionDisabled = computed(() => props.communityPreview && (props.installing || props.installDisabled));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.item, { [_ctx.$style.configured]: __props.mode === "configured" }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 32
				}, null, 8, ["node-type"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.nameRow) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.name),
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(displayName.value), 1)]),
					_: 1
				}, 8, ["class"]), __props.communityPreview ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.approved"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(shield_alt_default), {
						class: normalizeClass(_ctx.$style.verifiedIcon),
						"data-test-id": "chat-tool-verified-badge"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
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
				], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.communityPreview && __props.installDisabled && !__props.installing ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.contact.admin"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						icon: "plus",
						loading: __props.installing,
						disabled: true,
						"data-test-id": "chat-tool-install-button"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(actionLabel.value), 1)]),
						_: 1
					}, 8, ["loading"])])]),
					_: 1
				}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					size: "small",
					icon: "plus",
					loading: __props.installing,
					disabled: actionDisabled.value,
					"data-test-id": __props.communityPreview ? "chat-tool-install-button" : "chat-tool-add-button",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("add"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(actionLabel.value), 1)]),
					_: 1
				}, 8, [
					"loading",
					"disabled",
					"data-test-id"
				]))], 64))], 2)
			], 2);
		};
	}
});
var ToolListItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_cu54y_125",
	configured: "_configured_cu54y_132",
	actionButton: "_actionButton_cu54y_132",
	iconWrapper: "_iconWrapper_cu54y_139",
	content: "_content_cu54y_147",
	nameRow: "_nameRow_cu54y_155",
	verifiedIcon: "_verifiedIcon_cu54y_162",
	name: "_name_cu54y_155",
	description: "_description_cu54y_176",
	actions: "_actions_cu54y_183",
	toggle: "_toggle_cu54y_190"
};
var ToolListItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolListItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ToolsManagerModal.vue?vue&type=script&setup=true&lang.ts
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
		const usersStore = useUsersStore();
		const { installNode: installCommunityNode } = useInstallNode();
		const isAdminOrOwner = computed(() => usersStore.isAdminOrOwner);
		const nodePopularityMap = new Map(_virtual_node_popularity_data_default.map((node) => [node.id, node.popularity]));
		const searchQuery = ref("");
		const debouncedSearchQuery = ref("");
		const installingToolName = ref(null);
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
		function resolveToolNodeType(name) {
			return nodeTypesStore.getNodeType(name) ?? nodeTypesStore.communityNodeType(name)?.nodeDescription ?? null;
		}
		function isCommunityPreviewTool(nodeType) {
			if (!isNodePreviewKey(nodeType.name)) return false;
			const baseName = stripToolSuffix(nodeType.name);
			return !!nodeTypesStore.communityNodeType(baseName);
		}
		function communityPackageNameFor(nodeType) {
			const baseName = stripToolSuffix(nodeType.name);
			return nodeTypesStore.communityNodeType(baseName)?.packageName ?? removePreviewToken(nodeType.name.split(".")[0] ?? nodeType.name);
		}
		const availableToolTypes = computed(() => {
			return (nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? []).map((name) => resolveToolNodeType(name)).filter((nodeType) => nodeType !== null && !excludedToolTypes.value.includes(nodeType.name) && !hasInputs(nodeType)).sort((a, b) => {
				const popA = nodePopularityMap.get(a.name) ?? 0;
				return (nodePopularityMap.get(b.name) ?? 0) - popA;
			});
		});
		onMounted(() => {
			nodeTypesStore.fetchCommunityNodePreviews();
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
			const base = !debouncedSearchQuery.value ? availableToolTypes.value : availableToolTypes.value.filter((nodeType) => {
				const query = debouncedSearchQuery.value.toLowerCase();
				const nameMatch = nodeType.displayName.toLowerCase().includes(query);
				const descMatch = nodeType.description?.toLowerCase().includes(query);
				return nameMatch || descMatch;
			});
			if (!debouncedSearchQuery.value) return base;
			const communitySearchHits = filterAndSearchNodes(nodeTypesStore.communityNodesAndActions.mergedNodes, debouncedSearchQuery.value, {
				isAiSubcategory: true,
				aiConnectionType: NodeConnectionTypes.AiTool
			});
			const seen = new Set(base.map((nt) => nt.name));
			const previews = [];
			for (const hit of communitySearchHits) {
				if (hit.type !== "node") continue;
				const resolved = resolveToolNodeType(hit.key) ?? resolveToolNodeType(hit.properties.name);
				if (!resolved || seen.has(resolved.name) || excludedToolTypes.value.includes(resolved.name) || hasInputs(resolved)) continue;
				seen.add(resolved.name);
				previews.push(resolved);
			}
			return [...base, ...previews];
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
		function openSettingsFor(nodeType) {
			const typeVersion = typeof nodeType.version === "number" ? nodeType.version : nodeType.version.toSorted((a, b) => b - a)?.[0];
			if (!typeVersion) return;
			const newToolId = v4();
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
		async function handleAddTool(nodeType) {
			if (isCommunityPreviewTool(nodeType)) {
				const packageName = communityPackageNameFor(nodeType);
				const baseName = stripToolSuffix(nodeType.name);
				installingToolName.value = nodeType.name;
				try {
					if (!(await installCommunityNode({
						type: "verified",
						packageName,
						nodeType: baseName,
						telemetry: {
							source: "chat hub tools manager",
							hasQuickConnect: false
						}
					})).success) return;
					const installedName = removePreviewToken(nodeType.name);
					openSettingsFor(nodeTypesStore.getNodeType(installedName) ?? nodeType);
				} finally {
					installingToolName.value = null;
				}
				return;
			}
			openSettingsFor(nodeType);
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
		function handleSettingsChangeName(name) {
			settingsContentRef.value?.handleChangeName(name);
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
								"community-preview": isCommunityPreviewTool(nodeType),
								installing: installingToolName.value === nodeType.name,
								"install-disabled": !isAdminOrOwner.value,
								mode: "available",
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"community-preview",
								"installing",
								"install-disabled",
								"onAdd"
							]);
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
					}, [createVNode(NodeToolSettingsContent_default, {
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
var ToolsManagerModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolsManagerModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsManagerModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ToolsManagerModal_default as default };
