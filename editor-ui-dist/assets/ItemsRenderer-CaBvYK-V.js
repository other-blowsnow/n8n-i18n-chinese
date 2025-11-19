import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, Ht as toRefs, I as guardReactiveProps, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Q as onUnmounted, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, k as createSlots, n as Transition, p as vShow, st as resolveDirective, vn as normalizeProps, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { D as N8nNodeIcon_default, In as N8nText_default, Ln as N8nButton_default, O as N8nNodeCreatorNode_default, et as N8nLoading_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Ri as COMMUNITY_NODES_INSTALLATION_DOCS_URL, b as getNewNodePosition, bt as shouldShowCommunityNodeDetails, er as useUsersStore, gt as isNodePreviewKey, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, u as DEFAULT_NODE_SIZE, vt as removePreviewToken } from "./useTelemetry-C2EhNQhN.js";
import { $a as DEFAULT_SUBCATEGORY, On as WEBHOOK_NODE_TYPE, R as DRAG_EVENT_DATA_KEY, Ui as isCommunityPackageName, it as CREDENTIAL_ONLY_NODE_PREFIX, no as HITL_SUBCATEGORY } from "./constants-C_oOJnqT.js";
import { n as useNodeType } from "./usePinnedData-CxyLm90h.js";
import { d as useViewStacks, f as useKeyboardNavigation, t as useNodeCreatorStore, v as require_camelCase } from "./nodeCreator.store-BXjpGwrk.js";
import { t as NodeIcon_default } from "./NodeIcon-B-yC7jws.js";
import { t as useActions } from "./useActions-yIxD_z2G.js";
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createBlock(Transition, { name: "slide" }, {
		default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
		_: 3
	});
}
var SlideTransition_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c503546a"]]);
var _hoisted_1$4 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
	}, null, -1)]));
}
var verified_default = {
	name: "mdi-verified",
	render
};
var NodeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeItem",
	props: {
		nodeType: {},
		subcategory: { default: void 0 },
		active: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { actions } = useNodeCreatorStore();
		const { getAddedNodesAndConnections } = useActions();
		const { activeViewStack } = useViewStacks();
		const { isSubNodeType } = useNodeType({ nodeType: props.nodeType });
		const nodeTypesStore = useNodeTypesStore();
		const dragging = ref(false);
		const draggablePosition = ref({
			x: -100,
			y: -100
		});
		const draggableDataTransfer$2 = ref(null);
		const description = computed(() => {
			if (isCommunityNodePreview.value) return props.nodeType.description;
			if (isSendAndWaitCategory.value) return "";
			if (props.subcategory === "*" && !props.nodeType.name.startsWith("n8n-creds-base")) return "";
			return i18n.headerText({
				key: `headers.${shortNodeType.value}.description`,
				fallback: props.nodeType.description
			});
		});
		const showActionArrow = computed(() => {
			if (shouldShowCommunityNodeDetails(isCommunityNode.value, activeViewStack)) return true;
			return hasActions.value && !isSendAndWaitCategory.value;
		});
		const isSendAndWaitCategory = computed(() => activeViewStack.subcategory === HITL_SUBCATEGORY);
		const dataTestId = computed(() => hasActions.value ? "node-creator-action-item" : "node-creator-node-item");
		const hasActions = computed(() => {
			return nodeActions.value.length > 1 && !activeViewStack.hideActions;
		});
		const nodeActions = computed(() => {
			return actions[props.nodeType.name] || [];
		});
		const shortNodeType = computed(() => i18n.shortNodeType(props.nodeType.name) || "");
		const draggableStyle = computed(() => ({
			top: `${draggablePosition.value.y}px`,
			left: `${draggablePosition.value.x}px`
		}));
		const isCommunityNode = computed(() => isCommunityPackageName(props.nodeType.name));
		const isCommunityNodePreview = computed(() => isNodePreviewKey(props.nodeType.name));
		const displayName = computed(() => {
			const trimmedDisplayName = props.nodeType.displayName.trimEnd();
			return i18n.headerText({
				key: `headers.${shortNodeType.value}.displayName`,
				fallback: hasActions.value ? trimmedDisplayName.replace("Trigger", "") : trimmedDisplayName
			});
		});
		const isTrigger = computed(() => {
			return props.nodeType.group.includes("trigger") && !hasActions.value;
		});
		const communityNodeType = computed(() => {
			return nodeTypesStore.communityNodeType(removePreviewToken(props.nodeType.name));
		});
		const isOfficial = computed(() => {
			return communityNodeType.value?.isOfficialNode ?? false;
		});
		const author = computed(() => {
			return communityNodeType.value?.displayName ?? displayName.value;
		});
		const tag = computed(() => {
			if (props.nodeType.tag) return { text: props.nodeType.tag };
			if (description.value.toLowerCase().includes("deprecated")) return {
				text: i18n.baseText("nodeCreator.nodeItem.deprecated"),
				type: "info"
			};
		});
		function onDragStart(event) {
			if (event.dataTransfer) {
				event.dataTransfer.effectAllowed = "copy";
				event.dataTransfer.dropEffect = "copy";
				event.dataTransfer.setDragImage(draggableDataTransfer$2.value, 0, 0);
				event.dataTransfer.setData(DRAG_EVENT_DATA_KEY, JSON.stringify(getAddedNodesAndConnections([{ type: props.nodeType.name }])));
			}
			dragging.value = true;
		}
		function onDragEnd() {
			dragging.value = false;
			setTimeout(() => {
				draggablePosition.value = {
					x: -100,
					y: -100
				};
			}, 300);
		}
		function onCommunityNodeTooltipClick(event) {
			if (event.target.localName === "a") telemetry.track("user clicked cnr docs link", { source: "nodes panel node" });
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				draggable: !showActionArrow.value,
				class: normalizeClass(_ctx.$style.nodeItem),
				description: description.value,
				title: displayName.value,
				"show-action-arrow": showActionArrow.value,
				"is-trigger": isTrigger.value,
				"is-official": isOfficial.value,
				"data-test-id": dataTestId.value,
				tag: tag.value,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, createSlots({
				icon: withCtx(() => [unref(isSubNodeType) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subNodeBackground)
				}, null, 2)) : createCommentVNode("", true), createVNode(NodeIcon_default, {
					class: normalizeClass(_ctx.$style.nodeIcon),
					"node-type": _ctx.nodeType,
					"color-default": "var(--color--foreground--shade-2)"
				}, null, 8, ["class", "node-type"])]),
				dragContent: withCtx(() => [withDirectives(createBaseVNode("div", {
					ref_key: "draggableDataTransfer",
					ref: draggableDataTransfer$2,
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [createVNode(NodeIcon_default, {
					"node-type": _ctx.nodeType,
					size: 40,
					shrink: false,
					"color-default": "var(--color--foreground--shade-2)",
					onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["node-type"])], 6), [[vShow, dragging.value]])]),
				_: 2
			}, [isOfficial.value ? {
				name: "extraDetails",
				fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					"show-after": 500
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", { interpolate: { author: author.value } })), 1)]),
					default: withCtx(() => [createVNode(unref(verified_default), { class: normalizeClass([_ctx.$style.icon, _ctx.$style.official]) }, null, 8, ["class"])]),
					_: 1
				})]),
				key: "0"
			} : isCommunityNode.value && !isCommunityNodePreview.value && !unref(activeViewStack)?.communityNodeDetails ? {
				name: "extraDetails",
				fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					"show-after": 500
				}, {
					content: withCtx(() => [withDirectives(createBaseVNode("p", {
						class: normalizeClass(_ctx.$style.communityNodeIcon),
						onClick: onCommunityNodeTooltipClick
					}, null, 2), [[_directive_n8n_html, unref(i18n).baseText("generic.communityNode.tooltip", { interpolate: {
						packageName: _ctx.nodeType.name.split(".")[0],
						docURL: unref(COMMUNITY_NODES_INSTALLATION_DOCS_URL)
					} })]])]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.icon),
						icon: "box"
					}, null, 8, ["class"])]),
					_: 1
				})]),
				key: "1"
			} : void 0]), 1032, [
				"draggable",
				"class",
				"description",
				"title",
				"show-action-arrow",
				"is-trigger",
				"is-official",
				"data-test-id",
				"tag"
			]);
		};
	}
});
var NodeItem_vue_vue_type_style_index_0_lang_module_default = {
	nodeItem: "_nodeItem_4xp4b_123",
	nodeIcon: "_nodeIcon_4xp4b_131",
	subNodeBackground: "_subNodeBackground_4xp4b_135",
	communityNodeIcon: "_communityNodeIcon_4xp4b_145",
	draggable: "_draggable_4xp4b_149",
	draggableDataTransfer: "_draggableDataTransfer_4xp4b_163",
	icon: "_icon_4xp4b_168",
	official: "_official_4xp4b_173"
};
var NodeItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeItem_vue_vue_type_style_index_0_lang_module_default }]]);
var import_camelCase = /* @__PURE__ */ __toESM(require_camelCase());
var SubcategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SubcategoryItem",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const subcategoryName = computed(() => (0, import_camelCase.default)(props.item.subcategory || props.item.title));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.subCategory),
				title: unref(i18n).baseText(`nodeCreator.subcategoryNames.${subcategoryName.value}`),
				"is-trigger": false,
				description: unref(i18n).baseText(`nodeCreator.subcategoryDescriptions.${subcategoryName.value}`),
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), mergeProps({
					type: "icon",
					name: _ctx.item.icon,
					circle: false,
					"show-tooltip": false
				}, _ctx.item.iconProps), null, 16, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description"
			]);
		};
	}
});
var SubcategoryItem_vue_vue_type_style_index_0_lang_module_default = { subCategory: "_subCategory_1co34_123" };
var SubcategoryItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SubcategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SubcategoryItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$3 = ["textContent"];
var LabelItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LabelItem",
	props: { item: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.label) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.name),
				textContent: toDisplayString(_ctx.item.key)
			}, null, 10, _hoisted_1$3)], 2);
		};
	}
});
var LabelItem_vue_vue_type_style_index_0_lang_module_default = { label: "_label_crtw6_123" };
var LabelItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LabelItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LabelItem_vue_vue_type_style_index_0_lang_module_default }]]);
var ActionItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ActionItem",
	props: {
		nodeType: {},
		action: {}
	},
	setup(__props) {
		const props = __props;
		const telemetry = useTelemetry();
		const { getActionData, getAddedNodesAndConnections, setAddedNodeActionParameters } = useActions();
		const { activeViewStack } = useViewStacks();
		const state = reactive({
			dragging: false,
			draggablePosition: {
				x: -100,
				y: -100
			},
			storeWatcher: null,
			draggableDataTransfer: null
		});
		const draggableStyle = computed(() => ({
			top: `${state.draggablePosition.y}px`,
			left: `${state.draggablePosition.x}px`
		}));
		const actionData = computed(() => getActionData(props.action));
		const isTriggerAction = (action$1) => action$1.name?.toLowerCase().includes("trigger") || action$1.name === "n8n-nodes-base.webhook";
		function onDragStart(event) {
			document.body.addEventListener("dragover", onDragOver);
			const { pageX: x, pageY: y } = event;
			if (event.dataTransfer && actionData.value.key) {
				event.dataTransfer.effectAllowed = "copy";
				event.dataTransfer.dropEffect = "copy";
				event.dataTransfer.setDragImage(state.draggableDataTransfer, 0, 0);
				event.dataTransfer.setData(DRAG_EVENT_DATA_KEY, JSON.stringify(getAddedNodesAndConnections([{ type: actionData.value.key }])));
				if (telemetry) state.storeWatcher = setAddedNodeActionParameters(actionData.value, telemetry, activeViewStack.rootView);
				document.body.addEventListener("dragend", onDragEnd);
			}
			state.dragging = true;
			state.draggablePosition = {
				x,
				y
			};
		}
		function onDragOver(event) {
			if (!state.dragging || event.pageX === 0 && event.pageY === 0) return;
			const [x, y] = getNewNodePosition([], [event.pageX - DEFAULT_NODE_SIZE[0] / 2, event.pageY - DEFAULT_NODE_SIZE[1] / 2]);
			state.draggablePosition = {
				x,
				y
			};
		}
		function onDragEnd() {
			if (state.storeWatcher) state.storeWatcher();
			document.body.removeEventListener("dragend", onDragEnd);
			document.body.removeEventListener("dragover", onDragOver);
			state.dragging = false;
			setTimeout(() => {
				state.draggablePosition = {
					x: -100,
					y: -100
				};
			}, 300);
		}
		const { draggableDataTransfer: draggableDataTransfer$2, dragging } = toRefs(state);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				draggable: "",
				class: normalizeClass(_ctx.$style.action),
				title: _ctx.action.displayName,
				"is-trigger": isTriggerAction(_ctx.action),
				"data-keyboard-nav": "true",
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				dragContent: withCtx(() => [createBaseVNode("div", {
					ref_key: "draggableDataTransfer",
					ref: draggableDataTransfer$2,
					class: normalizeClass(_ctx.$style.draggableDataTransfer)
				}, null, 2), withDirectives(createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [createVNode(NodeIcon_default, {
					"node-type": _ctx.nodeType,
					size: 40,
					shrink: false,
					onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["node-type"])], 6), [[vShow, unref(dragging)]])]),
				icon: withCtx(() => [createVNode(NodeIcon_default, { "node-type": _ctx.action }, null, 8, ["node-type"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"is-trigger"
			]);
		};
	}
});
var ActionItem_vue_vue_type_style_index_0_lang_module_default = {
	action: "_action_26pq8_123",
	nodeIcon: "_nodeIcon_26pq8_135",
	draggable: "_draggable_26pq8_139",
	draggableDataTransfer: "_draggableDataTransfer_26pq8_153"
};
var ActionItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ActionItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionItem_vue_vue_type_style_index_0_lang_module_default }]]);
var ViewItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ViewItem",
	props: { view: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.view),
				title: _ctx.view.title,
				tag: _ctx.view.tag,
				"is-trigger": false,
				description: _ctx.view.description,
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: _ctx.view.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"tag",
				"description"
			]);
		};
	}
});
var ViewItem_vue_vue_type_style_index_0_lang_module_default = { view: "_view_5ke24_123" };
var ViewItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ViewItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ViewItem_vue_vue_type_style_index_0_lang_module_default }]]);
var LinkItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LinkItem",
	props: { link: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.creatorLink),
				title: _ctx.link.title,
				"is-trigger": false,
				description: _ctx.link.description,
				tag: _ctx.link.tag,
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: _ctx.link.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description",
				"tag"
			]);
		};
	}
});
var LinkItem_vue_vue_type_style_index_0_lang_module_default = { creatorLink: "_creatorLink_g3v4r_123" };
var LinkItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LinkItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LinkItem_vue_vue_type_style_index_0_lang_module_default }]]);
var CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeInstallHint",
	props: { hint: {} },
	setup(__props) {
		const isOwner = computed(() => useUsersStore().isInstanceOwner);
		return (_ctx, _cache) => {
			return isOwner.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createVNode(unref(N8nIcon_default), {
				color: "text-light",
				icon: "info",
				size: "large"
			}), createVNode(unref(N8nText_default), {
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.hint), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true);
		};
	}
});
var CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default = { container: "_container_ikrhv_123" };
var CommunityNodeInstallHint_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default }]]);
var CommunityNodeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeItem",
	props: { isPreview: { type: Boolean } },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [_ctx.isPreview ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
				key: 0,
				hint: unref(i18n).baseText("communityNodeItem.node.hint")
			}, null, 8, ["hint"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.marginLeft)
			}, [createVNode(unref(N8nButton_default), {
				size: "medium",
				type: "secondary",
				icon: "plus",
				label: unref(i18n).baseText("communityNodeItem.label"),
				outline: ""
			}, null, 8, ["label"])], 2))]);
		};
	}
});
var CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default = { marginLeft: "_marginLeft_1q8y4_123" };
var CommunityNodeItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = ["textContent"];
var CategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CategoryItem",
	props: {
		expanded: {
			type: Boolean,
			default: true
		},
		active: { type: Boolean },
		count: {},
		name: {},
		isTrigger: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const categoryName = computed(() => {
			const itemsCount = props.count || 0;
			return itemsCount > 0 ? `${props.name} (${itemsCount})` : props.name;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: _ctx.$style.categoryWrapper }, _ctx.$attrs, {
				"data-keyboard-nav": "true",
				"data-test-id": "node-creator-category-item"
			}), [createBaseVNode("div", { class: normalizeClass({
				[_ctx.$style.category]: true,
				[_ctx.$style.active]: _ctx.active
			}) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, [
				createBaseVNode("span", { textContent: toDisplayString(categoryName.value) }, null, 8, _hoisted_1$2),
				_ctx.isTrigger ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "bolt-filled",
					size: "xsmall",
					class: normalizeClass(_ctx.$style.triggerIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default")
			], 2), _ctx.expanded ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "chevron-down",
				color: "text-light",
				size: "large"
			})) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "chevron-up",
				color: "text-light",
				size: "large"
			}))], 2)], 16);
		};
	}
});
var CategoryItem_vue_vue_type_style_index_0_lang_module_default = {
	triggerIcon: "_triggerIcon_2nqmq_123",
	category: "_category_2nqmq_128",
	active: "_active_2nqmq_149",
	name: "_name_2nqmq_153"
};
var CategoryItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CategoryItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["data-category-collapsed"];
var CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CategorizedItemsRenderer",
	props: {
		elements: { default: () => [] },
		category: {},
		disabled: { type: Boolean },
		activeIndex: {},
		isTriggerCategory: { type: Boolean },
		mouseOverTooltip: {},
		expanded: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const { popViewStack, activeViewStack } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const { workflowId } = useWorkflowsStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const i18n = useI18n();
		const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
		const actionCount = computed(() => props.elements.filter(({ type }) => type === "action").length);
		const expanded = ref(props.expanded ?? false);
		const isPreview = computed(() => activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed);
		function toggleExpanded() {
			setExpanded(!expanded.value);
		}
		function setExpanded(isExpanded) {
			const prev = expanded.value;
			expanded.value = isExpanded;
			if (expanded.value && !prev) nodeCreatorStore.onCategoryExpanded({
				category_name: props.category,
				workflow_id: workflowId
			});
		}
		function arrowRight() {
			if (expanded.value) return;
			setExpanded(true);
		}
		function arrowLeft() {
			if (!expanded.value) {
				popViewStack();
				return;
			}
			setExpanded(false);
		}
		watch(() => props.elements, () => {
			setExpanded(true);
		});
		registerKeyHook(`CategoryRight_${props.category}`, {
			keyboardKeys: ["ArrowRight"],
			condition: (type, activeItemId$1) => type === "category" && props.category === activeItemId$1,
			handler: arrowRight
		});
		registerKeyHook(`CategoryToggle_${props.category}`, {
			keyboardKeys: ["Enter"],
			condition: (type, activeItemId$1) => type === "category" && props.category === activeItemId$1,
			handler: toggleExpanded
		});
		registerKeyHook(`CategoryLeft_${props.category}`, {
			keyboardKeys: ["ArrowLeft"],
			condition: (type, activeItemId$1) => type === "category" && props.category === activeItemId$1,
			handler: arrowLeft
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.categorizedItemsRenderer),
				"data-category-collapsed": !expanded.value
			}, [
				createVNode(CategoryItem_default, {
					class: normalizeClass(_ctx.$style.categoryItem),
					name: _ctx.category,
					disabled: _ctx.disabled,
					active: activeItemId.value === _ctx.category,
					count: actionCount.value,
					expanded: expanded.value,
					"is-trigger": _ctx.isTriggerCategory,
					"data-keyboard-nav-type": "category",
					"data-keyboard-nav-id": _ctx.category,
					onClick: toggleExpanded
				}, {
					default: withCtx(() => [_ctx.mouseOverTooltip ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.mouseOverTooltip)
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "top",
						"popper-class": _ctx.$style.tooltipPopper
					}, {
						content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, _ctx.mouseOverTooltip]])]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "circle-help",
							size: "small"
						})]),
						_: 1
					}, 8, ["popper-class"])], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"class",
					"name",
					"disabled",
					"active",
					"count",
					"expanded",
					"is-trigger",
					"data-keyboard-nav-id"
				]),
				expanded.value && actionCount.value > 0 && _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.contentSlot)
				}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true),
				isPreview.value && expanded.value ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
					key: 1,
					hint: unref(i18n).baseText("communityNodeItem.actions.hint")
				}, null, 8, ["hint"])) : createCommentVNode("", true),
				expanded.value ? (openBlock(), createBlock(ItemsRenderer_default, mergeProps({ key: 2 }, _ctx.$attrs, {
					elements: _ctx.elements,
					"is-trigger": _ctx.isTriggerCategory,
					class: [{ [_ctx.$style.preview]: isPreview.value }]
				}), {
					default: withCtx(() => _cache[0] || (_cache[0] = [])),
					empty: withCtx(() => [renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps({ elements: _ctx.elements })))]),
					_: 3
				}, 16, [
					"elements",
					"is-trigger",
					"class"
				])) : createCommentVNode("", true)
			], 10, _hoisted_1$1);
		};
	}
});
var CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default = {
	mouseOverTooltip: "_mouseOverTooltip_1c8sx_123",
	categorizedItemsRenderer: "_categorizedItemsRenderer_1c8sx_131",
	tooltipPopper: "_tooltipPopper_1c8sx_135",
	contentSlot: "_contentSlot_1c8sx_139",
	preview: "_preview_1c8sx_148"
};
var CategorizedItemsRenderer_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default }]]);
var OpenTemplateItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OpenTemplateItem",
	props: { openTemplate: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass({
					[_ctx.$style.creatorOpenTemplate]: true,
					[_ctx.$style.compact]: _ctx.openTemplate.compact
				}),
				title: _ctx.openTemplate.title,
				description: _ctx.openTemplate.description,
				tag: _ctx.openTemplate.tag,
				"show-action-arrow": true,
				"is-trigger": false
			}, createSlots({ _: 2 }, [_ctx.openTemplate.icon ? {
				name: "icon",
				fn: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: _ctx.openTemplate.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				key: "0"
			} : void 0, _ctx.openTemplate.nodes ? {
				name: "extraDetails",
				fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.openTemplate.nodes, (node) => {
					return openBlock(), createBlock(NodeIcon_default, {
						key: node.name,
						"node-type": node,
						size: 16,
						"show-tooltip": true
					}, null, 8, ["node-type"]);
				}), 128))]),
				key: "1"
			} : void 0]), 1032, [
				"class",
				"title",
				"description",
				"tag"
			]);
		};
	}
});
var OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default = {
	creatorOpenTemplate: "_creatorOpenTemplate_tyk6y_123",
	compact: "_compact_tyk6y_131"
};
var OpenTemplateItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OpenTemplateItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 0 };
var _hoisted_2 = [
	"data-keyboard-nav-type",
	"data-keyboard-nav-id",
	"onClick"
];
var LAZY_LOAD_THRESHOLD = 20;
var LAZY_LOAD_ITEMS_PER_TICK = 5;
var ItemsRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ItemsRenderer",
	props: {
		elements: { default: () => [] },
		activeIndex: {},
		disabled: { type: Boolean },
		lazyRender: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"selected",
		"dragstart",
		"dragend"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const renderedItems = ref([]);
		const renderAnimationRequest = ref(0);
		const { activeViewStack } = useViewStacks();
		const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
		const communityNode = computed(() => activeViewStack.mode === "community-node");
		const isPreview = computed(() => {
			return communityNode.value && !activeViewStack.communityNodeDetails?.installed;
		});
		const highlightActiveItem = computed(() => {
			if (activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed) return false;
			return true;
		});
		function renderItems() {
			if (props.elements.length <= LAZY_LOAD_THRESHOLD || !props.lazyRender) {
				renderedItems.value = props.elements;
				return;
			}
			if (renderedItems.value.length < props.elements.length) {
				renderedItems.value.push(...props.elements.slice(renderedItems.value.length, renderedItems.value.length + LAZY_LOAD_ITEMS_PER_TICK));
				renderAnimationRequest.value = window.requestAnimationFrame(renderItems);
			}
		}
		function wrappedEmit(event, element, $e) {
			if (props.disabled) return;
			switch (event) {
				case "dragstart": if ($e) {
					emit("dragstart", element, $e);
					break;
				}
				case "dragend": if ($e) {
					emit("dragend", element, $e);
					break;
				}
				case "selected":
					emit("selected", element, $e);
					break;
				default: emit(event, element, $e);
			}
		}
		function beforeEnter(el) {
			el.style.height = "0";
		}
		function enter(el) {
			el.style.height = `${el.scrollHeight}px`;
		}
		function beforeLeave(el) {
			el.style.height = `${el.scrollHeight}px`;
		}
		function leave(el) {
			el.style.height = "0";
		}
		onMounted(() => {
			renderItems();
		});
		onUnmounted(() => {
			window.cancelAnimationFrame(renderAnimationRequest.value);
			renderedItems.value = [];
		});
		watch(() => props.elements, () => {
			window.cancelAnimationFrame(renderAnimationRequest.value);
			renderedItems.value = [];
			renderItems();
		});
		return (_ctx, _cache) => {
			return _ctx.elements.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.itemsRenderer),
				name: "accordion",
				onBeforeEnter: beforeEnter,
				onEnter: enter,
				onBeforeLeave: beforeLeave,
				onLeave: leave
			}, [renderSlot(_ctx.$slots, "default"), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.elements, (item) => {
				return openBlock(), createElementBlock("div", { key: item.uuid }, [renderedItems.value.includes(item) ? (openBlock(), createElementBlock("div", _hoisted_1, [item.type === "section" ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
					key: 0,
					elements: item.children,
					expanded: "",
					category: item.title,
					onSelected: _cache[0] || (_cache[0] = (child) => wrappedEmit("selected", child))
				}, null, 8, ["elements", "category"])) : (openBlock(), createElementBlock("div", {
					key: 1,
					ref_for: true,
					ref: "iteratorItems",
					class: normalizeClass({
						clickable: !_ctx.disabled,
						[_ctx.$style.active]: activeItemId.value === item.uuid && highlightActiveItem.value,
						[_ctx.$style.iteratorItem]: !communityNode.value,
						[_ctx.$style[item.type]]: true,
						[_ctx.$style.preview]: isPreview.value,
						[_ctx.$style.borderless]: item.type === "view" && item.properties.borderless === true
					}),
					"data-test-id": "item-iterator-item",
					"data-keyboard-nav-type": item.type !== "label" ? item.type : void 0,
					"data-keyboard-nav-id": item.uuid,
					onClick: ($event) => wrappedEmit("selected", item)
				}, [
					item.type === "label" ? (openBlock(), createBlock(LabelItem_default, {
						key: 0,
						item
					}, null, 8, ["item"])) : createCommentVNode("", true),
					item.type === "subcategory" ? (openBlock(), createBlock(SubcategoryItem_default, {
						key: 1,
						item: item.properties
					}, null, 8, ["item"])) : createCommentVNode("", true),
					communityNode.value ? (openBlock(), createBlock(CommunityNodeItem_default, {
						key: 2,
						"is-preview": isPreview.value
					}, null, 8, ["is-preview"])) : createCommentVNode("", true),
					item.type === "node" && !communityNode.value ? (openBlock(), createBlock(NodeItem_default, {
						key: 3,
						"node-type": item.properties,
						active: true,
						subcategory: item.subcategory
					}, null, 8, ["node-type", "subcategory"])) : createCommentVNode("", true),
					item.type === "action" ? (openBlock(), createBlock(ActionItem_default, {
						key: 4,
						"node-type": item.properties,
						action: item.properties,
						active: true
					}, null, 8, ["node-type", "action"])) : item.type === "view" ? (openBlock(), createBlock(ViewItem_default, {
						key: 5,
						view: item.properties,
						class: normalizeClass(_ctx.$style.viewItem)
					}, null, 8, ["view", "class"])) : item.type === "link" ? (openBlock(), createBlock(LinkItem_default, {
						key: 6,
						link: item.properties,
						class: normalizeClass(_ctx.$style.linkItem)
					}, null, 8, ["link", "class"])) : item.type === "openTemplate" ? (openBlock(), createBlock(OpenTemplateItem_default, {
						key: 7,
						"open-template": item.properties,
						class: normalizeClass(_ctx.$style.linkItem)
					}, null, 8, ["open-template", "class"])) : createCommentVNode("", true)
				], 10, _hoisted_2))])) : (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					loading: true,
					rows: 1,
					variant: "p",
					class: normalizeClass(_ctx.$style.itemSkeleton)
				}, null, 8, ["class"]))]);
			}), 128))], 34)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [renderSlot(_ctx.$slots, "empty")], 2));
		};
	}
});
var ItemsRenderer_vue_vue_type_style_index_0_lang_module_default = {
	itemSkeleton: "_itemSkeleton_1ehs8_123",
	iteratorItem: "_iteratorItem_1ehs8_127",
	label: "_label_1ehs8_139",
	category: "_category_1ehs8_139",
	active: "_active_1ehs8_142",
	empty: "_empty_1ehs8_146",
	itemsRenderer: "_itemsRenderer_1ehs8_150",
	view: "_view_1ehs8_159",
	link: "_link_1ehs8_177",
	borderless: "_borderless_1ehs8_195",
	preview: "_preview_1ehs8_205"
};
var ItemsRenderer_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ItemsRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ItemsRenderer_vue_vue_type_style_index_0_lang_module_default }]]);
export { SlideTransition_default as i, CategorizedItemsRenderer_default as n, verified_default as r, ItemsRenderer_default as t };
