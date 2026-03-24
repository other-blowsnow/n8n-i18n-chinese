import { $ as openBlock, A as createTextVNode, E as createElementBlock, Ft as ref, Ht as toValue, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, h as withModifiers, j as createVNode, pt as useTemplateRef, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-D5rots3X.js";
import { $i as N8nIcon_default, Ii as N8nIconButton_default, Mi as N8nTooltip_default, Qi as N8nButton_default, n as DropdownMenu_default } from "./src-Bnic0IZ0.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { r as useUIStore, w as useNodeTypesStore } from "./users.store-CzbeKDa-.js";
import { t as NodeIcon_default } from "./NodeIcon-C1S6log1.js";
import { _ as TOOLS_MANAGER_MODAL_KEY, v as TOOL_SETTINGS_MODAL_KEY } from "./constants-CsI9wULx.js";
import { t as useChatStore } from "./chat.store-B4SFIhDs.js";
function useFileDrop(canAcceptFiles, onFilesDropped, acceptedTypes) {
	const isDragging = ref(false);
	const isDraggingUnsupported = ref(false);
	function handleDragEnter(e) {
		if (!toValue(canAcceptFiles)) return;
		if (e.dataTransfer?.types.includes("Files")) {
			isDragging.value = true;
			const accepted = toValue(acceptedTypes);
			if (accepted && e.dataTransfer.items) {
				const fileItems = Array.from(e.dataTransfer.items).filter((i) => i.kind === "file");
				isDraggingUnsupported.value = fileItems.length > 0 && fileItems.every((i) => i.type !== "" && !accepted.includes(i.type));
			}
		}
	}
	function handleDragLeave(e) {
		if (!toValue(canAcceptFiles)) return;
		const target = e.currentTarget;
		const relatedTarget = e.relatedTarget;
		if (relatedTarget && target.contains(relatedTarget)) return;
		isDragging.value = false;
		isDraggingUnsupported.value = false;
	}
	function handleDragOver(e) {
		if (!toValue(canAcceptFiles)) return;
		e.preventDefault();
		e.stopPropagation();
	}
	function handleDrop(e) {
		e.preventDefault();
		e.stopPropagation();
		isDragging.value = false;
		isDraggingUnsupported.value = false;
		if (!toValue(canAcceptFiles)) return;
		const files = e.dataTransfer?.files;
		if (!files || files.length === 0) return;
		onFilesDropped(Array.from(files));
	}
	function handlePaste(e) {
		if (!toValue(canAcceptFiles)) return;
		const items = e.clipboardData?.items;
		if (!items) return;
		let hasFiles = false;
		const files = [];
		for (const item of Array.from(items)) if (item.kind === "file") {
			const file = item.getAsFile();
			if (file) {
				files.push(file);
				hasFiles = true;
			}
		}
		if (hasFiles) {
			e.preventDefault();
			onFilesDropped(files);
		}
	}
	return {
		isDragging,
		isDraggingUnsupported,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handlePaste
	};
}
var CREATE_NEW_TOOL_ID = "action::create-new";
var ToolsSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsSelector",
	props: {
		disabled: { type: Boolean },
		checkedToolIds: {},
		customAgentId: {},
		disabledTooltip: {}
	},
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const chatStore = useChatStore();
		const i18n = useI18n();
		const dropdownRef = useTemplateRef("dropdownMenu");
		const searchQuery = ref("");
		const checkedToolIdsSet = computed(() => new Set(props.checkedToolIds));
		const toolCount = computed(() => props.checkedToolIds.length);
		const displayToolNodeTypes = computed(() => {
			const maxIcons = toolCount.value > 3 ? 2 : 3;
			return chatStore.configuredTools.filter((t) => checkedToolIdsSet.value.has(t.definition.id)).slice(0, maxIcons).map((t) => nodeTypesStore.getNodeType(t.definition.type, t.definition.typeVersion)).filter(Boolean);
		});
		const remainingToolCount = computed(() => {
			if (toolCount.value > 3) return toolCount.value - 2;
			return 0;
		});
		const toolsLabel = computed(() => {
			if (toolCount.value === 1) {
				const toolId = props.checkedToolIds[0];
				const tool = chatStore.configuredTools.find((t) => t.definition.id === toolId);
				if (tool) return tool.definition.name;
			}
			if (toolCount.value > 1) return i18n.baseText("chatHub.tools.selector.label.count", { adjustToNumber: toolCount.value });
			return i18n.baseText("chatHub.tools.selector.label.default");
		});
		function openToolsManager() {
			dropdownRef.value?.close();
			uiStore.openModalWithData({
				name: TOOLS_MANAGER_MODAL_KEY,
				data: {
					tools: chatStore.configuredTools.filter((t) => checkedToolIdsSet.value.has(t.definition.id)).map((t) => t.definition),
					onConfirm: () => {},
					customAgentId: props.customAgentId
				}
			});
		}
		function openToolSettings(item) {
			dropdownRef.value?.close();
			const tool = item.data?.tool;
			if (!tool) return;
			const otherToolNames = chatStore.configuredTools.filter((t) => t.definition.id !== tool.id).map((t) => t.definition.name);
			uiStore.openModalWithData({
				name: TOOL_SETTINGS_MODAL_KEY,
				data: {
					node: { ...tool },
					existingToolNames: otherToolNames,
					onConfirm: async (configuredNode) => {
						await chatStore.updateConfiguredTool(tool.id, configuredNode);
					}
				}
			});
		}
		const menuItems = computed(() => {
			const query = searchQuery.value.toLowerCase();
			const toolItems = chatStore.configuredTools.filter((tool) => {
				if (!query) return true;
				const def = tool.definition;
				const nodeType = nodeTypesStore.getNodeType(def.type, def.typeVersion);
				const nameMatch = def.name.toLowerCase().includes(query);
				const typeMatch = nodeType?.displayName.toLowerCase().includes(query);
				return nameMatch || typeMatch;
			}).map((tool) => ({
				id: `tool::${tool.definition.id}`,
				label: tool.definition.name,
				checked: checkedToolIdsSet.value.has(tool.definition.id),
				data: {
					nodeType: nodeTypesStore.getNodeType(tool.definition.type, tool.definition.typeVersion),
					tool: tool.definition
				}
			}));
			toolItems.push({
				id: CREATE_NEW_TOOL_ID,
				label: i18n.baseText("chatHub.tools.selector.createNew"),
				icon: {
					type: "icon",
					value: "plus"
				},
				divided: true
			});
			return toolItems;
		});
		function handleSelect(id) {
			if (id === CREATE_NEW_TOOL_ID) {
				openToolsManager();
				return;
			}
			const [command, toolId] = id.split("::");
			if (command === "tool") emit("toggle", toolId);
		}
		function handleSearch(query) {
			searchQuery.value = query;
		}
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [unref(chatStore).configuredTools.length === 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: __props.disabledTooltip,
				disabled: !__props.disabledTooltip || !__props.disabled,
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"native-type": "button",
					class: normalizeClass(_ctx.$style.toolsButton),
					disabled: __props.disabled,
					icon: "plus",
					"data-test-id": "chat-tools-button",
					onClick: openToolsManager
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(toolsLabel.value), 1)]),
					_: 1
				}, 8, ["class", "disabled"])]),
				_: 1
			}, 8, ["content", "disabled"])) : (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 1,
				content: __props.disabledTooltip,
				disabled: !__props.disabledTooltip || !__props.disabled,
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					ref: "dropdownMenu",
					items: menuItems.value,
					placement: "top-start",
					"extra-popper-class": "tools-selector-dropdown",
					searchable: "",
					"search-placeholder": unref(i18n).baseText("chatHub.toolsManager.searchPlaceholder"),
					"empty-text": unref(i18n).baseText("chatHub.toolsManager.noResults"),
					onSelect: handleSelect,
					onSearch: handleSearch
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"native-type": "button",
						disabled: __props.disabled,
						icon: toolCount.value === 0 ? "plus" : void 0,
						"data-test-id": "chat-tools-button"
					}, {
						default: withCtx(() => [toolCount.value > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.iconStack)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayToolNodeTypes.value, (nodeType, i) => {
							return openBlock(), createBlock(NodeIcon_default, {
								key: `${nodeType?.name}-${i}`,
								style: normalizeStyle({ zIndex: i + 1 }),
								"node-type": nodeType,
								class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.iconOverlap]: i !== 0 }]),
								circle: true,
								size: 12
							}, null, 8, [
								"style",
								"node-type",
								"class"
							]);
						}), 128)), remainingToolCount.value > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass([
								_ctx.$style.icon,
								_ctx.$style.iconOverlap,
								_ctx.$style.countBadge
							])
						}, " +" + toDisplayString(remainingToolCount.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(toolsLabel.value), 1)]),
						_: 1
					}, 8, ["disabled", "icon"])]),
					"search-prefix": withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					"search-suffix": withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						size: "medium",
						text: "",
						class: normalizeClass(_ctx.$style.settingsButton),
						onClick: withModifiers(openToolsManager, ["stop"])
					}, null, 8, ["class"])]),
					"item-leading": withCtx(({ item }) => [item.data?.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						"node-type": item.data.nodeType,
						size: 16
					}, null, 8, ["node-type"])) : item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: item.icon.value,
						size: "large"
					}, null, 8, ["icon"])) : createCommentVNode("", true)]),
					"item-trailing": withCtx(({ item }) => [item.id !== CREATE_NEW_TOOL_ID ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						size: "medium",
						text: "",
						class: normalizeClass(_ctx.$style.itemSettingsButton),
						onClick: withModifiers(($event) => openToolSettings(item), ["stop"])
					}, null, 8, ["class", "onClick"]), !item.checked ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.checkPlaceholder)
					}, null, 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"items",
					"search-placeholder",
					"empty-text"
				])]),
				_: 1
			}, 8, ["content", "disabled"]))], 2);
		};
	}
});
var ToolsSelector_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_i8oeh_125",
	toolsButton: "_toolsButton_i8oeh_130",
	transparentBg: "_transparentBg_i8oeh_135",
	iconStack: "_iconStack_i8oeh_139",
	icon: "_icon_i8oeh_139",
	iconOverlap: "_iconOverlap_i8oeh_154",
	countBadge: "_countBadge_i8oeh_158",
	settingsButton: "_settingsButton_i8oeh_171",
	itemSettingsButton: "_itemSettingsButton_i8oeh_179",
	checkPlaceholder: "_checkPlaceholder_i8oeh_183"
};
var ToolsSelector_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolsSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsSelector_vue_vue_type_style_index_0_lang_module_default }]]);
export { useFileDrop as n, ToolsSelector_default as t };
