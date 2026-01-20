import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { A as createStaticVNode, C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, Ht as toRefs, I as guardReactiveProps, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Pt as reactive, Q as onUnmounted, St as withMemo, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _t as watch, at as renderSlot, bn as normalizeStyle, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, k as createSlots, n as Transition, p as vShow, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n, g as onClickOutside, mt as i18n } from "./_MapCache-nsH9LP_7.js";
import { A as N8nNotice_default, Dn as N8nCallout_default, M as N8nNodeCreatorNode_default, On as N8nText_default, Ot as N8nIconButton_default, St as N8nTooltip_default, dt as N8nLoading_default, j as N8nNodeIcon_default, jn as N8nIcon_default, kn as N8nButton_default, xt as N8nLink_default, z as N8nInfoTip_default } from "./src-Ca6p-F4w.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import "./truncate-D24O8Gpt.js";
import { A as getHumanInTheLoopActions, C as useNodeTypesStore, E as filterAndSearchNodes, F as prepareCommunityNodeDetailsViewStack, I as removePreviewToken, Mt as useTelemetry, O as flattenCreateElements, On as getNewNodePosition, P as isNodePreviewKey, R as shouldShowCommunityNodeDetails, Sr as useExternalHooks, V as transformNodeType, _n as DEFAULT_NODE_SIZE, fa as COMMUNITY_NODES_INSTALLATION_DOCS_URL, j as getRootSearchCallouts, nt as useCredentialsStore, r as useUIStore, s as useWorkflowsStore, t as useUsersStore, w as useActionsGenerator } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { Bn as OPEN_AI_NODE_TYPE, Ea as isCommunityPackageName, Et as REQUEST_NODE_FORM_URL, F as CUSTOM_API_CALL_KEY, L as DRAG_EVENT_DATA_KEY, Tt as REGULAR_NODE_CREATOR_VIEW, Wt as CREDENTIAL_ONLY_NODE_PREFIX, _t as DEFAULT_SUBCATEGORY, bt as HITL_SUBCATEGORY, dt as AI_OTHERS_NODE_CREATOR_VIEW, hr as WEBHOOK_NODE_TYPE, kt as TRIGGER_NODE_CREATOR_VIEW, lt as AI_EVALUATION, pn as HTTP_REQUEST_NODE_TYPE, pt as AI_UNCATEGORIZED_CATEGORY, ut as AI_NODE_CREATOR_VIEW, zn as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import { t as useBannersStore } from "./banners.store-BpMsj7tE.js";
import "./dateformat-BeHi9sF4.js";
import { t as useDebounce } from "./useDebounce-DRet0zBh.js";
import "./executions.store-DSp00BkK.js";
import "./assistant.store-B3ZFF4Ef.js";
import { t as useChatPanelStore } from "./chatPanel.store-DnsqMUFN.js";
import { n as captureException } from "./exports-DwuuoPh-.js";
import "./semver-CzxhBea9.js";
import { n as useNodeType } from "./usePinnedData-4-JhUel-.js";
import { a as AIView, c as require_camelCase, i as AINodesView, n as useViewStacks, o as RegularView, r as useKeyboardNavigation, s as TriggerView, t as useNodeCreatorStore } from "./nodeCreator.store-Bf5ZJhZK.js";
import "./canvas.utils-B0dhpigY.js";
import { t as getNodeIconSource } from "./nodeIcon-CQGkjIor.js";
import "./useCanvasOperations-BUQ5rpp1.js";
import "./folders.store-BnPPwuN5.js";
import { a as useInstallNode, i as useInstalledCommunityPackage, n as CommunityNodeFooter_default, r as ContactAdministratorToInstall_default, t as CommunityNodeUpdateInfo_default } from "./CommunityNodeUpdateInfo-D9ijRLWZ.js";
import { t as NodeIcon_default } from "./NodeIcon-4gz_aHHs.js";
import { t as useCalloutHelpers } from "./useCalloutHelpers-Cx8j-9D9.js";
import { t as useActions } from "./useActions-B93hTQ-T.js";
import { t as SlideTransition_default } from "./SlideTransition-CWSKQ4XI.js";
var _hoisted_1$10 = ["placeholder", "value"];
var SearchBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SearchBar",
	props: {
		placeholder: { default: "" },
		modelValue: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const state = reactive({ inputRef: null });
		const externalHooks = useExternalHooks();
		function focus() {
			state.inputRef?.focus();
		}
		function onInput(event) {
			const input = event.target;
			emit("update:modelValue", input.value.trim());
		}
		function clear$1() {
			emit("update:modelValue", "");
		}
		onMounted(() => {
			externalHooks.run("nodeCreatorSearchBar.mount", { inputRef: state.inputRef });
			setTimeout(focus, 0);
		});
		onBeforeUnmount(() => {
			state.inputRef?.remove();
		});
		const { inputRef } = toRefs(state);
		__expose({ focus });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.searchContainer),
				"data-test-id": "search-bar"
			}, [
				createBaseVNode("div", { class: normalizeClass({
					[_ctx.$style.prefix]: true,
					[_ctx.$style.active]: __props.modelValue.length > 0
				}) }, [createVNode(unref(N8nIcon_default), {
					icon: "search",
					size: "small"
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("input", {
					ref_key: "inputRef",
					ref: inputRef,
					placeholder: __props.placeholder,
					value: __props.modelValue,
					class: normalizeClass(_ctx.$style.input),
					autofocus: "",
					"data-test-id": "node-creator-search-bar",
					tabindex: "0",
					onInput
				}, null, 42, _hoisted_1$10)], 2),
				__props.modelValue.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.suffix, _ctx.$style.clickable]),
					onClick: clear$1
				}, [createVNode(unref(N8nIcon_default), {
					size: "small",
					icon: "circle-x"
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SearchBar_vue_vue_type_style_index_0_lang_module_default = {
	searchContainer: "_searchContainer_1mhzr_123",
	prefix: "_prefix_1mhzr_139",
	active: "_active_1mhzr_144",
	text: "_text_1mhzr_148",
	suffix: "_suffix_1mhzr_164",
	clear: "_clear_1mhzr_170",
	clickable: "_clickable_1mhzr_183"
};
var SearchBar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SearchBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SearchBar_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$9 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
	}, null, -1)])]);
}
var verified_default = {
	name: "mdi-verified",
	render: render$1
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
		const i18n$1 = useI18n();
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
		const description$1 = computed(() => {
			if (isCommunityNodePreview.value) return props.nodeType.description;
			if (isSendAndWaitCategory.value) return "";
			if (props.subcategory === "*" && !props.nodeType.name.startsWith("n8n-creds-base")) return "";
			return i18n$1.headerText({
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
		const shortNodeType = computed(() => i18n$1.shortNodeType(props.nodeType.name) || "");
		const draggableStyle = computed(() => ({
			top: `${draggablePosition.value.y}px`,
			left: `${draggablePosition.value.x}px`
		}));
		const isCommunityNode = computed(() => isCommunityPackageName(props.nodeType.name));
		const isCommunityNodePreview = computed(() => isNodePreviewKey(props.nodeType.name));
		const displayName = computed(() => {
			const trimmedDisplayName = props.nodeType.displayName.trimEnd();
			return i18n$1.headerText({
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
			if (props.nodeType.tag) return props.nodeType.tag;
			if (description$1.value.toLowerCase().includes("deprecated")) return {
				text: i18n$1.baseText("nodeCreator.nodeItem.deprecated"),
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
				description: description$1.value,
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
					"node-type": __props.nodeType,
					"color-default": "var(--color--foreground--shade-2)"
				}, null, 8, ["class", "node-type"])]),
				dragContent: withCtx(() => [withDirectives(createBaseVNode("div", {
					ref_key: "draggableDataTransfer",
					ref: draggableDataTransfer$2,
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
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
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("generic.officialNode.tooltip", { interpolate: { author: author.value } })), 1)]),
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
					}, null, 2), [[_directive_n8n_html, unref(i18n$1).baseText("generic.communityNode.tooltip", { interpolate: {
						packageName: __props.nodeType.name.split(".")[0],
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
var import_camelCase$1 = /* @__PURE__ */ __toESM(require_camelCase(), 1);
var SubcategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SubcategoryItem",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n$1 = useI18n();
		const subcategoryName = computed(() => (0, import_camelCase$1.default)(props.item.subcategory || props.item.title));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.subCategory),
				title: unref(i18n$1).baseText(`nodeCreator.subcategoryNames.${subcategoryName.value}`),
				"is-trigger": false,
				description: unref(i18n$1).baseText(`nodeCreator.subcategoryDescriptions.${subcategoryName.value}`),
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), mergeProps({
					type: "icon",
					name: __props.item.icon,
					circle: false,
					"show-tooltip": false
				}, __props.item.iconProps), null, 16, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description"
			]);
		};
	}
});
var SubcategoryItem_vue_vue_type_style_index_0_lang_module_default = { subCategory: "_subCategory_162af_123" };
var SubcategoryItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SubcategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SubcategoryItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$8 = ["textContent"];
var LabelItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LabelItem",
	props: { item: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.label) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.name),
				textContent: toDisplayString(__props.item.key)
			}, null, 10, _hoisted_1$8)], 2);
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
		const isTriggerAction = (action$2) => action$2.name?.toLowerCase().includes("trigger") || action$2.name === "n8n-nodes-base.webhook";
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
				title: __props.action.displayName,
				"is-trigger": isTriggerAction(__props.action),
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
					"node-type": __props.nodeType,
					size: 40,
					shrink: false,
					onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["node-type"])], 6), [[vShow, unref(dragging)]])]),
				icon: withCtx(() => [createVNode(NodeIcon_default, { "node-type": __props.action }, null, 8, ["node-type"])]),
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
				title: __props.view.title,
				tag: __props.view.tag,
				"is-trigger": false,
				description: __props.view.description,
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: __props.view.icon,
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
var ViewItem_vue_vue_type_style_index_0_lang_module_default = { view: "_view_6bjau_123" };
var ViewItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ViewItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ViewItem_vue_vue_type_style_index_0_lang_module_default }]]);
var LinkItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LinkItem",
	props: { link: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.creatorLink),
				title: __props.link.title,
				"is-trigger": false,
				description: __props.link.description,
				tag: __props.link.tag,
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: __props.link.icon,
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
				default: withCtx(() => [createTextVNode(toDisplayString(__props.hint), 1)]),
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
		const i18n$1 = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.isPreview ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
				key: 0,
				hint: unref(i18n$1).baseText("communityNodeItem.node.hint")
			}, null, 8, ["hint"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.marginLeft)
			}, [createVNode(unref(N8nButton_default), {
				size: "medium",
				type: "secondary",
				icon: "plus",
				label: unref(i18n$1).baseText("communityNodeItem.label"),
				outline: ""
			}, null, 8, ["label"])], 2))]);
		};
	}
});
var CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default = { marginLeft: "_marginLeft_1q8y4_123" };
var CommunityNodeItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$7 = ["textContent"];
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
				[_ctx.$style.active]: __props.active
			}) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, [
				createBaseVNode("span", { textContent: toDisplayString(categoryName.value) }, null, 8, _hoisted_1$7),
				__props.isTrigger ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "bolt-filled",
					size: "xsmall",
					class: normalizeClass(_ctx.$style.triggerIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default")
			], 2), __props.expanded ? (openBlock(), createBlock(unref(N8nIcon_default), {
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
var _hoisted_1$6 = ["data-category-collapsed"];
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
		const i18n$1 = useI18n();
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
					name: __props.category,
					disabled: __props.disabled,
					active: activeItemId.value === __props.category,
					count: actionCount.value,
					expanded: expanded.value,
					"is-trigger": __props.isTriggerCategory,
					"data-keyboard-nav-type": "category",
					"data-keyboard-nav-id": __props.category,
					onClick: toggleExpanded
				}, {
					default: withCtx(() => [__props.mouseOverTooltip ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.mouseOverTooltip)
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "top",
						"popper-class": _ctx.$style.tooltipPopper
					}, {
						content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, __props.mouseOverTooltip]])]),
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
					hint: unref(i18n$1).baseText("communityNodeItem.actions.hint")
				}, null, 8, ["hint"])) : createCommentVNode("", true),
				expanded.value ? (openBlock(), createBlock(ItemsRenderer_default, mergeProps({ key: 2 }, _ctx.$attrs, {
					elements: __props.elements,
					"is-trigger": __props.isTriggerCategory,
					class: [{ [_ctx.$style.preview]: isPreview.value }]
				}), {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [])]),
					empty: withCtx(() => [renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps({ elements: __props.elements })))]),
					_: 3
				}, 16, [
					"elements",
					"is-trigger",
					"class"
				])) : createCommentVNode("", true)
			], 10, _hoisted_1$6);
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
					[_ctx.$style.compact]: __props.openTemplate.compact
				}),
				title: __props.openTemplate.title,
				description: __props.openTemplate.description,
				tag: __props.openTemplate.tag,
				"show-action-arrow": true,
				"is-trigger": false
			}, createSlots({ _: 2 }, [__props.openTemplate.icon ? {
				name: "icon",
				fn: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: __props.openTemplate.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				key: "0"
			} : void 0, __props.openTemplate.nodes ? {
				name: "extraDetails",
				fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.openTemplate.nodes, (node) => {
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
var _hoisted_1$5 = { key: 0 };
var _hoisted_2$3 = [
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
		const renderedItems$1 = ref([]);
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
				renderedItems$1.value = props.elements;
				return;
			}
			if (renderedItems$1.value.length < props.elements.length) {
				renderedItems$1.value.push(...props.elements.slice(renderedItems$1.value.length, renderedItems$1.value.length + LAZY_LOAD_ITEMS_PER_TICK));
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
			renderedItems$1.value = [];
		});
		watch(() => props.elements, () => {
			window.cancelAnimationFrame(renderAnimationRequest.value);
			renderedItems$1.value = [];
			renderItems();
		});
		return (_ctx, _cache) => {
			return __props.elements.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.itemsRenderer),
				name: "accordion",
				onBeforeEnter: beforeEnter,
				onEnter: enter,
				onBeforeLeave: beforeLeave,
				onLeave: leave
			}, [renderSlot(_ctx.$slots, "default"), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.elements, (item) => {
				return openBlock(), createElementBlock("div", { key: item.uuid }, [renderedItems$1.value.includes(item) ? (openBlock(), createElementBlock("div", _hoisted_1$5, [item.type === "section" ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
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
						clickable: !__props.disabled,
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
				], 10, _hoisted_2$3))])) : (openBlock(), createBlock(unref(N8nLoading_default), {
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
var OrderSwitcher_default = /* @__PURE__ */ defineComponent({
	__name: "OrderSwitcher",
	props: { rootView: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.rootView === unref("Regular") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [renderSlot(_ctx.$slots, "actions"), renderSlot(_ctx.$slots, "triggers")], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [renderSlot(_ctx.$slots, "triggers"), renderSlot(_ctx.$slots, "actions")], 64))]);
		};
	}
});
var _hoisted_1$4 = {
	viewBox: "0 0 512 512",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "m466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3M256.1 446.3l-.1-381l175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7"
	}, null, -1)])]);
}
var shield_alt_default = {
	name: "fa-solid-shield-alt",
	render
};
var _hoisted_1$3 = { key: 2 };
var _hoisted_2$2 = { key: 3 };
var CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeInfo",
	setup(__props) {
		const { activeViewStack } = useViewStacks();
		const { communityNodeDetails } = activeViewStack;
		const publisherName = ref(void 0);
		const downloads = ref(null);
		const verified = ref(false);
		const official$1 = ref(false);
		const { installedPackage, initInstalledPackage, isUpdateCheckAvailable } = useInstalledCommunityPackage(computed(() => communityNodeDetails?.packageName));
		const nodeTypesStore = useNodeTypesStore();
		const isOwner = computed(() => useUsersStore().isInstanceOwner);
		const formatNumber = (number) => {
			if (!number) return null;
			return new Intl.NumberFormat("en-US").format(number);
		};
		async function fetchPackageInfo(packageName) {
			const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(activeViewStack.communityNodeDetails?.key || "");
			let packageInfo = installedPackage.value;
			if (communityNodeDetails?.installed && !packageInfo) packageInfo = await initInstalledPackage();
			if (communityNodeAttributes) {
				publisherName.value = communityNodeAttributes.companyName ?? communityNodeAttributes.authorName;
				downloads.value = formatNumber(communityNodeAttributes.numberOfDownloads);
				official$1.value = communityNodeAttributes.isOfficialNode;
				if (!packageInfo) verified.value = true;
				else verified.value = (communityNodeAttributes.nodeVersions?.map((v) => v.npmVersion) ?? []).includes(packageInfo.installedVersion);
				return;
			}
			const url = `https://registry.npmjs.org/${packageName}`;
			try {
				const response = await fetch(url);
				if (!response.ok) {
					captureException(/* @__PURE__ */ new Error("Could not get metadata for package"), { extra: { packageName } });
					return;
				}
				publisherName.value = (await response.json()).maintainers?.[0]?.name;
				const downloadsUrl = `https://api.npmjs.org/downloads/range/2022-01-01:${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}/${packageName}`;
				const downloadsResponse = await fetch(downloadsUrl);
				if (!downloadsResponse.ok) {
					captureException(/* @__PURE__ */ new Error("Could not get downloads for package"), { extra: { packageName } });
					return;
				}
				const downloadsData = await downloadsResponse.json();
				if (!downloadsData.downloads?.length) return;
				downloads.value = formatNumber(downloadsData.downloads.reduce((sum, day) => sum + day.downloads, 0));
			} catch (error) {
				captureException(error, { extra: { packageName } });
			}
		}
		onMounted(async () => {
			if (communityNodeDetails?.packageName) await fetchPackageInfo(communityNodeDetails.packageName);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(communityNodeDetails)?.description), 1)]),
					_: 1
				}, 8, ["class"]),
				unref(isUpdateCheckAvailable) && unref(installedPackage)?.updateAvailable ? (openBlock(), createBlock(CommunityNodeUpdateInfo_default, {
					key: 0,
					"data-test-id": "update-available",
					"package-name": unref(communityNodeDetails)?.packageName,
					source: "node creator panel"
				}, null, 8, ["package-name"])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.separator)
				}, null, 2)),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [
					verified.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(official$1.value ? unref(i18n).baseText("communityNodeInfo.officialApproved") : unref(i18n).baseText("communityNodeInfo.approved")), 1)]),
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(shield_alt_default), { class: normalizeClass(_ctx.$style.tooltipIcon) }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "xsmall",
							bold: "",
							"data-test-id": "verified-tag"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.approved.label")), 1)]),
							_: 1
						})])]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified")), 1)]),
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.tooltipIcon),
							icon: "box"
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "xsmall",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified.label")), 1)]),
							_: 1
						})])]),
						_: 1
					})),
					downloads.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.tooltipIcon),
						icon: "hard-drive-download"
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "xsmall",
						bold: "",
						"data-test-id": "number-of-downloads"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.downloads", { interpolate: { downloads: downloads.value } })), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					publisherName.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.tooltipIcon),
						icon: "user"
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "xsmall",
						bold: "",
						"data-test-id": "publisher-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.publishedBy", { interpolate: { publisherName: publisherName.value } })), 1)]),
						_: 1
					})])) : createCommentVNode("", true)
				], 2),
				!isOwner.value && !unref(communityNodeDetails)?.installed ? (openBlock(), createBlock(ContactAdministratorToInstall_default, { key: 2 })) : createCommentVNode("", true)
			], 2);
		};
	}
});
var CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_169ak_123",
	nodeIcon: "_nodeIcon_169ak_132",
	description: "_description_169ak_137",
	separator: "_separator_169ak_141",
	info: "_info_169ak_147",
	tooltipIcon: "_tooltipIcon_169ak_162",
	contactOwnerHint: "_contactOwnerHint_169ak_168"
};
var CommunityNodeInfo_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default }]]);
var ActionsMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ActionsMode",
	emits: ["nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const telemetry = useTelemetry();
		const i18n$1 = useI18n();
		const { userActivated, isInstanceOwner } = useUsersStore();
		const { popViewStack, updateCurrentViewStack } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const { setAddedNodeActionParameters, getActionData, actionDataToNodeTypeSelectedPayload, getPlaceholderTriggerActions, parseCategoryActions, actionsCategoryLocales } = useActions();
		const nodeCreatorStore = useNodeCreatorStore();
		const { openSampleWorkflowTemplate } = useCalloutHelpers();
		const parsedTriggerActions = computed(() => parseActions(actions.value, actionsCategoryLocales.value.triggers, false));
		const parsedActionActions = computed(() => parseActions(actions.value, actionsCategoryLocales.value.actions, !search.value));
		const parsedTriggerActionsBaseline = computed(() => parseActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.triggers, false));
		const parsedActionActionsBaseline = computed(() => parseActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.actions, !search.value));
		const triggerCategoryName = computed(() => parsedTriggerActions.value.length || search.value ? actionsCategoryLocales.value.triggers : `${actionsCategoryLocales.value.triggers} (${placeholderTriggerActions.length})`);
		const actions = computed(() => {
			return (useViewStacks().activeViewStack.items || []).filter((p) => p.properties.actionKey !== CUSTOM_API_CALL_KEY);
		});
		const search = computed(() => useViewStacks().activeViewStack.search);
		const subcategory = computed(() => useViewStacks().activeViewStack.subcategory);
		const rootView = computed(() => useViewStacks().activeViewStack.rootView);
		const communityNodeDetails = computed(() => useViewStacks().activeViewStack?.communityNodeDetails);
		const placeholderTriggerActions = getPlaceholderTriggerActions(subcategory.value || "");
		const hasNoTriggerActions = computed(() => parseCategoryActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.triggers, !search.value).length === 0);
		const containsAPIAction = computed(() => {
			return (useViewStacks().activeViewStack.baselineItems || []).some((p) => {
				return (p.properties.actionKey ?? "") === CUSTOM_API_CALL_KEY;
			});
		});
		const isTriggerRootView = computed(() => rootView.value === TRIGGER_NODE_CREATOR_VIEW);
		const shouldShowTriggers = computed(() => {
			if (communityNodeDetails.value && !parsedTriggerActions.value.length) return !isNodePreviewKey(useViewStacks().activeViewStack?.items?.[0].key) && isTriggerRootView.value;
			return isTriggerRootView.value || parsedTriggerActionsBaseline.value.length !== 0;
		});
		registerKeyHook("ActionsKeyRight", {
			keyboardKeys: ["ArrowRight", "Enter"],
			condition: (type) => type === "action",
			handler: onKeySelect
		});
		registerKeyHook("ActionsKeyLeft", {
			keyboardKeys: ["ArrowLeft"],
			condition: (type) => type === "action",
			handler: arrowLeft
		});
		function parseActions(base, locale, withLabels = false) {
			return parseCategoryActions(base, locale, withLabels);
		}
		function arrowLeft() {
			popViewStack();
		}
		function onKeySelect(activeItemId) {
			const activeAction = [...actions.value, ...placeholderTriggerActions].find((a) => a.uuid === activeItemId);
			if (activeAction) onSelected(activeAction);
		}
		function onSelected(actionCreateElement) {
			if (actionCreateElement.type === "openTemplate") openSampleWorkflowTemplate(actionCreateElement.properties.templateId, { telemetry: {
				source: "nodeCreator",
				section: useViewStacks().activeViewStack.title
			} });
			if (actionCreateElement.type !== "action") return;
			const actionData = getActionData(actionCreateElement.properties);
			if (placeholderTriggerActions.some((p) => p.key === actionCreateElement.key) && isTriggerRootView.value) {
				const actionNode = actions.value[0]?.key;
				if (actionNode) emit("nodeTypeSelected", [{ type: actionData.key }, { type: actionNode }]);
			} else if (actionData?.key === "@n8n/n8n-nodes-langchain.openAi" && (actionData?.value)?.resource === "assistant" && (actionData?.value)?.operation === "message") emit("nodeTypeSelected", [{ type: OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE }]);
			else if (isNodePreviewKey(actionData?.key)) return;
			else emit("nodeTypeSelected", [actionDataToNodeTypeSelectedPayload(actionData)]);
			if (telemetry) setAddedNodeActionParameters(actionData, telemetry, rootView.value);
		}
		function trackActionsView() {
			const activeViewStack = useViewStacks().activeViewStack;
			const trigger_action_count = (activeViewStack.baselineItems || [])?.filter((action$2) => action$2.key.toLowerCase().includes("trigger")).length;
			const trackingPayload = {
				app_identifier: [...actions.value, ...placeholderTriggerActions][0].key,
				actions: (activeViewStack.baselineItems || [])?.map((action$2) => action$2.properties.displayName),
				regular_action_count: (activeViewStack.baselineItems || [])?.length - trigger_action_count,
				trigger_action_count
			};
			useExternalHooks().run("nodeCreateList.onViewActions", trackingPayload);
			nodeCreatorStore.onViewActions(trackingPayload);
		}
		function resetSearch$1() {
			updateCurrentViewStack({ search: "" });
		}
		function addHttpNode() {
			const updateData = {
				name: "",
				key: HTTP_REQUEST_NODE_TYPE,
				value: { authentication: "predefinedCredentialType" }
			};
			emit("nodeTypeSelected", [{ type: HTTP_REQUEST_NODE_TYPE }]);
			if (telemetry) setAddedNodeActionParameters(updateData);
			const app_identifier = actions.value[0]?.key;
			if (!app_identifier) return;
			useExternalHooks().run("nodeCreateList.onActionsCustmAPIClicked", { app_identifier });
			nodeCreatorStore.onActionsCustomAPIClicked({ app_identifier });
		}
		onMounted(() => {
			trackActionsView();
		});
		const callouts = computed(() => []);
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.container]: true,
				[_ctx.$style.containerPaddingBottom]: !communityNodeDetails.value
			}) }, [
				createVNode(ItemsRenderer_default, {
					elements: callouts.value,
					class: normalizeClass(_ctx.$style.items),
					onSelected
				}, null, 8, ["elements", "class"]),
				communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeInfo_default, { key: 0 })) : createCommentVNode("", true),
				rootView.value ? (openBlock(), createBlock(OrderSwitcher_default, {
					key: 1,
					"root-view": rootView.value
				}, createSlots({ _: 2 }, [shouldShowTriggers.value ? {
					name: "triggers",
					fn: withCtx(() => [withMemo([search.value], () => createVNode(CategorizedItemsRenderer_default, {
						elements: parsedTriggerActions.value,
						category: triggerCategoryName.value,
						"mouse-over-tooltip": unref(i18n$1).baseText("nodeCreator.actionsTooltip.triggersStartWorkflow"),
						"is-trigger-category": "",
						expanded: isTriggerRootView.value || parsedActionActions.value.length === 0,
						onSelected
					}, createSlots({ _: 2 }, [hasNoTriggerActions.value ? {
						name: "empty",
						fn: withCtx(() => [hasNoTriggerActions.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "info",
							iconless: "",
							slim: "",
							"data-test-id": "actions-panel-no-triggers-callout"
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCallout.noTriggerItems", { interpolate: { nodeName: subcategory.value ?? "" } })]])]),
							_: 1
						})) : createCommentVNode("", true), createVNode(ItemsRenderer_default, {
							elements: unref(placeholderTriggerActions),
							onSelected
						}, null, 8, ["elements"])]),
						key: "0"
					} : {
						name: "empty",
						fn: withCtx(() => [withDirectives(createBaseVNode("p", {
							class: normalizeClass(_ctx.$style.resetSearch),
							onClick: resetSearch$1
						}, null, 2), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCategory.noMatchingTriggers")]])]),
						key: "1"
					}]), 1032, [
						"elements",
						"category",
						"mouse-over-tooltip",
						"expanded"
					]), _cache, 0)]),
					key: "0"
				} : void 0, !isTriggerRootView.value || parsedActionActionsBaseline.value.length !== 0 ? {
					name: "actions",
					fn: withCtx(() => [withMemo([search.value], () => createVNode(CategorizedItemsRenderer_default, {
						elements: parsedActionActions.value,
						category: unref(actionsCategoryLocales).actions,
						"mouse-over-tooltip": unref(i18n$1).baseText("nodeCreator.actionsTooltip.actionsPerformStep"),
						expanded: !isTriggerRootView.value || parsedTriggerActions.value.length === 0,
						onSelected
					}, {
						empty: withCtx(() => [!search.value ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
							key: 0,
							theme: "info",
							type: "note",
							class: normalizeClass(_ctx.$style.actionsEmpty)
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCallout.noActionItems", { interpolate: { nodeName: subcategory.value ?? "" } })]])]),
							_: 1
						}, 8, ["class"])) : withDirectives((openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.resetSearch),
							"data-test-id": "actions-panel-no-matching-actions",
							onClick: resetSearch$1
						}, null, 2)), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCategory.noMatchingActions")]])]),
						default: withCtx(() => [!unref(userActivated) && isTriggerRootView.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "info",
							iconless: "",
							slim: "",
							"data-test-id": "actions-panel-activation-callout"
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsCallout.triggersStartWorkflow")]])]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"elements",
						"category",
						"mouse-over-tooltip",
						"expanded"
					]), _cache, 1)]),
					key: "1"
				} : void 0]), 1032, ["root-view"])) : createCommentVNode("", true),
				containsAPIAction.value && !communityNodeDetails.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.apiHint)
				}, [withDirectives(createBaseVNode("span", { onClick: withModifiers(addHttpNode, ["prevent"]) }, null, 512), [[_directive_n8n_html, unref(i18n$1).baseText("nodeCreator.actionsList.apiCall", { interpolate: { node: subcategory.value ?? "" } })]])], 2)) : createCommentVNode("", true),
				communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
					key: 3,
					class: normalizeClass(_ctx.$style.communityNodeFooter),
					"package-name": communityNodeDetails.value.packageName,
					"show-manage": communityNodeDetails.value.installed && unref(isInstanceOwner)
				}, null, 8, [
					"class",
					"package-name",
					"show-manage"
				])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ActionsMode_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_12w99_123",
	containerPaddingBottom: "_containerPaddingBottom_12w99_129",
	communityNodeFooter: "_communityNodeFooter_12w99_133",
	resetSearch: "_resetSearch_12w99_137",
	actionsEmpty: "_actionsEmpty_12w99_151",
	apiHint: "_apiHint_12w99_159"
};
var ActionsMode_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ActionsMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionsMode_vue_vue_type_style_index_0_lang_module_default }]]);
var _sfc_main = {};
var _hoisted_1$2 = {
	width: "75px",
	height: "75px",
	viewBox: "0 0 75 75",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createStaticVNode("<title>no-nodes-keyart</title><g id=\"Nodes-panel-prototype-V2.1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"nodes-panel-(component)\" transform=\"translate(-2085.000000, -352.000000)\"><g id=\"nodes_panel\" transform=\"translate(1880.000000, 151.000000)\"><g id=\"Panel\" transform=\"translate(50.000000, 0.000000)\"><g id=\"Group-3\" transform=\"translate(105.000000, 171.000000)\"><g id=\"no-nodes-keyart\" transform=\"translate(50.000000, 30.000000)\"><rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"75\" height=\"75\"></rect><g id=\"Group\" transform=\"translate(6.562500, 8.164062)\" fill=\"#C4C8D1\" fill-rule=\"nonzero\"><polygon id=\"Rectangle\" transform=\"translate(49.192016, 45.302553) rotate(-45.000000) translate(-49.192016, -45.302553) \" points=\"44.5045606 32.0526802 53.8794707 32.0526802 53.8794707 58.5524261 44.5045606 58.5524261\"></polygon><path id=\"Path\" d=\"M48.125,23.0859375 C54.15625,23.0859375 59.0625,18.1796875 59.0625,12.1484375 C59.0625,10.3359375 58.5625,8.6484375 57.78125,7.1484375 L49.34375,15.5859375 L44.6875,10.9296875 L53.125,2.4921875 C51.625,1.7109375 49.9375,1.2109375 48.125,1.2109375 C42.09375,1.2109375 37.1875,6.1171875 37.1875,12.1484375 C37.1875,13.4296875 37.4375,14.6484375 37.84375,15.7734375 L32.0625,21.5546875 L26.5,15.9921875 L28.71875,13.7734375 L24.3125,9.3671875 L30.9375,2.7421875 C27.28125,-0.9140625 21.34375,-0.9140625 17.6875,2.7421875 L6.625,13.8046875 L11.03125,18.2109375 L2.21875,18.2109375 L1.38777878e-15,20.4296875 L11.0625,31.4921875 L13.28125,29.2734375 L13.28125,20.4296875 L17.6875,24.8359375 L19.90625,22.6171875 L25.46875,28.1796875 L2.3125,51.3359375 L8.9375,57.9609375 L44.5,22.4296875 C45.625,22.8359375 46.84375,23.0859375 48.125,23.0859375 Z\"></path></g></g></g></g></g></g></g>", 2)])]);
}
var NoResultsIcon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
var _hoisted_1$1 = ["textContent"];
var _hoisted_2$1 = ["textContent"];
var NoResults_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NoResults",
	props: {
		showIcon: { type: Boolean },
		showRequest: { type: Boolean },
		rootView: {}
	},
	setup(__props) {
		const i18n$1 = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					[_ctx.$style.noResults]: true,
					[_ctx.$style.iconless]: !__props.showIcon
				}),
				"data-test-id": "node-creator-no-results"
			}, [
				__props.showIcon ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.icon)
				}, [createVNode(NoResultsIcon_default)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
					renderSlot(_ctx.$slots, "title"),
					createBaseVNode("p", { textContent: toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.weDidntMakeThatYet")) }, null, 8, _hoisted_1$1),
					__props.rootView === unref("Regular") || __props.rootView === unref("Trigger") ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.action)
					}, [
						createTextVNode(toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe")) + " ", 1),
						__props.rootView === unref("Regular") ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("addHttpNode"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.httpRequest")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						__props.rootView === unref("Trigger") ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 1,
							onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("addWebhookNode"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.webhook")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createTextVNode(" " + toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.node")), 1)
					], 2)) : createCommentVNode("", true)
				], 2),
				__props.showRequest ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.request)
				}, [createBaseVNode("p", { textContent: toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.wantUsToMakeItFaster")) }, null, 8, _hoisted_2$1), createBaseVNode("div", null, [createVNode(unref(N8nLink_default), { to: unref(REQUEST_NODE_FORM_URL) }, {
					default: withCtx(() => [
						createBaseVNode("span", null, toDisplayString(unref(i18n$1).baseText("nodeCreator.noResults.requestTheNode")), 1),
						_cache[2] || (_cache[2] = createTextVNode("\xA0 ", -1)),
						createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.external),
							icon: "external-link",
							title: unref(i18n$1).baseText("nodeCreator.noResults.requestTheNode")
						}, null, 8, ["class", "title"])])
					]),
					_: 1
				}, 8, ["to"])])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var NoResults_vue_vue_type_style_index_0_lang_module_default = {
	noResults: "_noResults_1w8hr_123",
	title: "_title_1w8hr_136",
	action: "_action_1w8hr_145",
	request: "_request_1w8hr_146",
	icon: "_icon_1w8hr_162",
	external: "_external_1w8hr_168"
};
var NoResults_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NoResults_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NoResults_vue_vue_type_style_index_0_lang_module_default }]]);
var import_camelCase = /* @__PURE__ */ __toESM(require_camelCase(), 1);
var NodesMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodesMode",
	emits: ["nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n$1 = useI18n();
		const { isRagStarterCalloutVisible, openSampleWorkflowTemplate } = useCalloutHelpers();
		const { mergedNodes, actions, onSubcategorySelected } = useNodeCreatorStore();
		const { pushViewStack, popViewStack, isAiSubcategoryView } = useViewStacks();
		const { setAddedNodeActionParameters, nodeCreateElementToNodeTypeSelectedPayload } = useActions();
		const { registerKeyHook } = useKeyboardNavigation();
		const activeViewStack = computed(() => useViewStacks().activeViewStack);
		const globalSearchItemsDiff = computed(() => useViewStacks().globalSearchItemsDiff);
		const communityNodesAndActions = computed(() => useNodeTypesStore().communityNodesAndActions);
		const moreFromCommunity = computed(() => {
			return filterAndSearchNodes(communityNodesAndActions.value.mergedNodes, activeViewStack.value.search ?? "", isAiSubcategoryView(activeViewStack.value));
		});
		const isSearchResultEmpty = computed(() => {
			return (activeViewStack.value.items || []).length === 0 && globalCallouts.value.length + globalSearchItemsDiff.value.length + moreFromCommunity.value.length === 0;
		});
		function getFilteredActions(node, actions$1) {
			const nodeActions = actions$1?.[node.key] || [];
			if (activeViewStack.value.subcategory === "Human in the Loop") return getHumanInTheLoopActions(nodeActions);
			if (activeViewStack.value.actionsFilter) return activeViewStack.value.actionsFilter(nodeActions);
			return nodeActions;
		}
		function onSelected(item) {
			if (item.type === "subcategory") {
				const subcategoryKey = (0, import_camelCase.default)(item.properties.title);
				const title$3 = i18n$1.baseText(`nodeCreator.subcategoryNames.${subcategoryKey}`);
				const infoKey = `nodeCreator.subcategoryInfos.${subcategoryKey}`;
				const info$2 = i18n$1.baseText(infoKey);
				const extendedInfo = info$2 !== infoKey ? { info: info$2 } : {};
				const nodeIcon$5 = item.properties.icon ? {
					type: "icon",
					name: item.properties.icon
				} : void 0;
				pushViewStack({
					subcategory: item.key,
					mode: "nodes",
					title: title$3,
					nodeIcon: nodeIcon$5,
					...extendedInfo,
					...item.properties.panelClass ? { panelClass: item.properties.panelClass } : {},
					rootView: activeViewStack.value.rootView,
					forceIncludeNodes: item.properties.forceIncludeNodes,
					baseFilter: baseSubcategoriesFilter,
					itemsMapper: subcategoriesMapper,
					sections: item.properties.sections
				});
				onSubcategorySelected({ subcategory: item.key });
			}
			if (item.type === "node") {
				let nodeActions = getFilteredActions(item, actions);
				if (shouldShowCommunityNodeDetails(isCommunityPackageName(item.key), activeViewStack.value)) {
					if (!nodeActions.length) nodeActions = getFilteredActions(item, communityNodesAndActions.value.actions);
					pushViewStack(prepareCommunityNodeDetailsViewStack(item, getNodeIconSource(item.properties), activeViewStack.value.rootView, nodeActions));
					return;
				}
				const payload = nodeCreateElementToNodeTypeSelectedPayload(item);
				if (nodeActions.length === 1) {
					emit("nodeTypeSelected", [payload]);
					setAddedNodeActionParameters({
						name: nodeActions[0].defaults.name ?? item.properties.displayName,
						key: item.key,
						value: nodeActions[0].values
					});
					return;
				}
				if (nodeActions.length === 0 || activeViewStack.value.hideActions) {
					emit("nodeTypeSelected", [payload]);
					return;
				}
				const transformedActions = nodeActions?.map((a) => transformNodeType(a, item.properties.displayName, "action"));
				pushViewStack({
					subcategory: item.properties.displayName,
					title: item.properties.displayName,
					nodeIcon: getNodeIconSource(item.properties),
					rootView: activeViewStack.value.rootView,
					hasSearch: true,
					mode: "actions",
					items: transformedActions
				});
			}
			if (item.type === "view") {
				const views = {
					[TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
					[REGULAR_NODE_CREATOR_VIEW]: RegularView,
					["AI"]: AIView,
					[AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView
				};
				const itemKey = item.key;
				const matchedView = views[itemKey];
				if (!matchedView) {
					console.warn(`No view found for ${itemKey}`);
					return;
				}
				const view$2 = matchedView(mergedNodes);
				pushViewStack({
					title: view$2.title,
					subtitle: view$2?.subtitle ?? "",
					info: view$2?.info ?? "",
					items: view$2.items,
					hasSearch: true,
					rootView: view$2.value,
					mode: "nodes",
					searchItems: mergedNodes
				});
			}
			if (item.type === "link") window.open(item.properties.url, "_blank");
			if (item.type === "openTemplate") openSampleWorkflowTemplate(item.properties.templateId, { telemetry: {
				source: "nodeCreator",
				section: activeViewStack.value.title
			} });
		}
		function subcategoriesMapper(item) {
			if (item.type !== "node") return item;
			const hasTriggerGroup = item.properties.group.includes("trigger");
			const hasActions = getFilteredActions(item, actions).length > 0;
			if (hasTriggerGroup && hasActions) {
				if (item.properties?.codex) item.properties.codex.alias = [...item.properties.codex?.alias || [], item.properties.displayName];
				item.properties.displayName = item.properties.displayName.replace(" Trigger", "");
			}
			return item;
		}
		function baseSubcategoriesFilter(item) {
			if (item.type === "section") return true;
			if (item.type !== "node") return false;
			const hasTriggerGroup = item.properties.group.includes("trigger");
			const hasActions = getFilteredActions(item, actions).length > 0;
			if (activeViewStack.value.rootView === "Trigger") return hasActions || hasTriggerGroup;
			return hasActions || !hasTriggerGroup;
		}
		const globalCallouts = computed(() => [...getRootSearchCallouts(activeViewStack.value.search ?? "", { isRagStarterCalloutVisible: isRagStarterCalloutVisible.value })]);
		function arrowLeft() {
			popViewStack();
		}
		function onKeySelect(activeItemId) {
			const item = flattenCreateElements([
				...globalCallouts.value ?? [],
				...activeViewStack.value.items ?? [],
				...globalSearchItemsDiff.value ?? [],
				...moreFromCommunity.value ?? []
			]).find((i) => i.uuid === activeItemId);
			if (!item) return;
			onSelected(item);
		}
		registerKeyHook("MainViewArrowRight", {
			keyboardKeys: ["ArrowRight", "Enter"],
			condition: (type) => [
				"subcategory",
				"node",
				"link",
				"view",
				"openTemplate"
			].includes(type),
			handler: onKeySelect
		});
		registerKeyHook("MainViewArrowLeft", {
			keyboardKeys: ["ArrowLeft"],
			condition: (type) => [
				"subcategory",
				"node",
				"link",
				"view",
				"openTemplate"
			].includes(type),
			handler: arrowLeft
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, [
				createVNode(ItemsRenderer_default, {
					elements: globalCallouts.value,
					class: normalizeClass(_ctx.$style.items),
					onSelected
				}, null, 8, ["elements", "class"]),
				withMemo([activeViewStack.value.search], () => createVNode(ItemsRenderer_default, {
					elements: activeViewStack.value.items,
					class: normalizeClass(_ctx.$style.items),
					onSelected
				}, createSlots({ _: 2 }, [isSearchResultEmpty.value ? {
					name: "empty",
					fn: withCtx(() => [createVNode(NoResults_default, {
						"root-view": activeViewStack.value.rootView,
						"show-icon": "",
						"show-request": "",
						onAddWebhookNode: _cache[0] || (_cache[0] = ($event) => emit("nodeTypeSelected", [{ type: unref("n8n-nodes-base.webhook") }])),
						onAddHttpNode: _cache[1] || (_cache[1] = ($event) => emit("nodeTypeSelected", [{ type: unref("n8n-nodes-base.httpRequest") }]))
					}, null, 8, ["root-view"])]),
					key: "0"
				} : void 0]), 1032, ["elements", "class"]), _cache, 2),
				globalSearchItemsDiff.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
					key: 0,
					elements: globalSearchItemsDiff.value,
					category: unref(i18n$1).baseText("nodeCreator.categoryNames.otherCategories"),
					expanded: true,
					onSelected
				}, null, 8, ["elements", "category"])) : createCommentVNode("", true),
				moreFromCommunity.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
					key: 1,
					elements: moreFromCommunity.value,
					category: unref(i18n$1).baseText("nodeCreator.categoryNames.moreFromCommunity"),
					expanded: true,
					onSelected
				}, null, 8, ["elements", "category"])) : createCommentVNode("", true)
			]);
		};
	}
});
var NodesMode_vue_vue_type_style_index_0_lang_module_default = { items: "_items_bf97l_123" };
var NodesMode_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodesMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodesMode_vue_vue_type_style_index_0_lang_module_default }]]);
var CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeDetails",
	setup(__props) {
		const { activeViewStack, pushViewStack, popViewStack, getAllNodeCreateElements, updateCurrentViewStack } = useViewStacks();
		const { communityNodeDetails } = activeViewStack;
		const nodeCreatorStore = useNodeCreatorStore();
		const { installNode, loading } = useInstallNode();
		const isOwner = computed(() => useUsersStore().isInstanceOwner);
		const updateViewStack = (key) => {
			const installedNodeKey = removePreviewToken(key);
			const installedNode = getAllNodeCreateElements().find((node) => node.key === installedNodeKey);
			if (installedNode) {
				const nodeActions = nodeCreatorStore.actions?.[installedNode.key] || [];
				popViewStack();
				updateCurrentViewStack({ searchItems: nodeCreatorStore.mergedNodes });
				pushViewStack(prepareCommunityNodeDetailsViewStack(installedNode, getNodeIconSource(installedNode.properties), activeViewStack.rootView, nodeActions), { transitionDirection: "none" });
			} else {
				const viewStack = { ...activeViewStack };
				viewStack.communityNodeDetails.installed = true;
				pushViewStack(activeViewStack, { resetStacks: true });
			}
		};
		const updateStoresAndViewStack = (key) => {
			updateViewStack(key);
			nodeCreatorStore.removeNodeFromMergedNodes(key);
		};
		const onInstall = async () => {
			if (isOwner.value && activeViewStack.communityNodeDetails && !communityNodeDetails?.installed) {
				const { key, packageName } = activeViewStack.communityNodeDetails;
				if ((await installNode({
					type: "verified",
					packageName,
					nodeType: key
				})).success) updateStoresAndViewStack(key);
			}
		};
		return (_ctx, _cache) => {
			return unref(communityNodeDetails) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
				unref(communityNodeDetails).nodeIcon ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.nodeIcon),
					"icon-source": unref(communityNodeDetails).nodeIcon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
				createBaseVNode("span", null, toDisplayString(unref(communityNodeDetails).title), 1),
				unref(communityNodeDetails).official ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 500
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", { interpolate: { author: unref(communityNodeDetails).companyName ?? unref(communityNodeDetails).title } })), 1)]),
					default: withCtx(() => [createVNode(unref(verified_default), { class: normalizeClass(_ctx.$style.officialIcon) }, null, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2), createBaseVNode("div", null, [unref(communityNodeDetails).installed ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.installed)
			}, [!unref(communityNodeDetails).official ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.installedIcon),
				icon: "box"
			}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeDetails.installed")), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true), isOwner.value && !unref(communityNodeDetails).installed ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				loading: unref(loading),
				disabled: unref(loading),
				label: unref(i18n).baseText("communityNodeDetails.install"),
				size: "small",
				"data-test-id": "install-community-node-button",
				onClick: onInstall
			}, null, 8, [
				"loading",
				"disabled",
				"label"
			])) : createCommentVNode("", true)])], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
var CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ibv8_123",
	header: "_header_1ibv8_131",
	title: "_title_1ibv8_138",
	nodeIcon: "_nodeIcon_1ibv8_146",
	installedIcon: "_installedIcon_1ibv8_151",
	officialIcon: "_officialIcon_1ibv8_157",
	installed: "_installed_1ibv8_151"
};
var CommunityNodeDetails_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default }]]);
var CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeDocsLink",
	props: { packageName: {} },
	setup(__props) {
		const props = __props;
		const openCommunityNodeDocsPage = () => {
			const newTab = window.open(`https://www.npmjs.com/package/${props.packageName}`, "_blank");
			if (newTab) newTab.opener = null;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nLink_default), {
				theme: "text",
				class: normalizeClass(_ctx.$style.container),
				title: unref(i18n).baseText("communityNodesDocsLink.link.title"),
				onClick: openCommunityNodeDocsPage
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					style: { "margin-right": "5px" }
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodesDocsLink.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), { icon: "external-link" })]),
				_: 1
			}, 8, ["class", "title"]);
		};
	}
});
var CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1ms6i_123" };
var CommunityNodeDocsLink_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["textContent"];
var _hoisted_2 = ["textContent"];
var NodesListPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodesListPanel",
	setup(__props) {
		const i18n$1 = useI18n();
		const { callDebounced } = useDebounce();
		const { mergedNodes } = useNodeCreatorStore();
		const { pushViewStack, popViewStack, updateCurrentViewStack } = useViewStacks();
		const { setActiveItemIndex, attachKeydownEvent, detachKeydownEvent } = useKeyboardNavigation();
		const nodeCreatorStore = useNodeCreatorStore();
		const { isInstanceOwner } = useUsersStore();
		const activeViewStack = computed(() => useViewStacks().activeViewStack);
		const communityNodeDetails = computed(() => activeViewStack.value.communityNodeDetails);
		const viewStacks = computed(() => useViewStacks().viewStacks);
		const isActionsMode = computed(() => useViewStacks().activeViewStackMode === "actions");
		const searchPlaceholder = computed(() => {
			let node = activeViewStack.value?.title;
			if (communityNodeDetails.value) node = communityNodeDetails.value.title;
			if (isActionsMode.value) return i18n$1.baseText("nodeCreator.actionsCategory.searchActions", { interpolate: { node } });
			return i18n$1.baseText("nodeCreator.searchBar.searchNodes");
		});
		const showSearchBar = computed(() => {
			if (activeViewStack.value.communityNodeDetails) return false;
			return activeViewStack.value.hasSearch;
		});
		const nodeCreatorView = computed(() => useNodeCreatorStore().selectedView);
		const isCommunityNodeActionsMode = computed(() => {
			return communityNodeDetails.value && isActionsMode.value && activeViewStack.value.subcategory;
		});
		function getDefaultActiveIndex(search = "") {
			if (activeViewStack.value.mode === "actions") return 1;
			else if (activeViewStack.value.sections) return search ? 0 : 1;
			return 0;
		}
		function onSearch(value) {
			if (activeViewStack.value.uuid) {
				updateCurrentViewStack({ search: value });
				setActiveItemIndex(getDefaultActiveIndex(value));
				if (value.length) callDebounced(nodeCreatorStore.onNodeFilterChanged, {
					trailing: true,
					debounceTime: 2e3
				}, {
					newValue: value,
					filteredNodes: activeViewStack.value.items ?? [],
					filterMode: activeViewStack.value.rootView ?? "Regular",
					subcategory: activeViewStack.value.subcategory,
					title: activeViewStack.value.title
				});
			}
		}
		function onTransitionEnd() {
			setActiveItemIndex(getDefaultActiveIndex());
		}
		onMounted(() => {
			attachKeydownEvent();
			setActiveItemIndex(getDefaultActiveIndex());
		});
		onUnmounted(() => {
			detachKeydownEvent();
		});
		watch(() => nodeCreatorView.value, (selectedView) => {
			const views = {
				[TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
				[REGULAR_NODE_CREATOR_VIEW]: RegularView,
				["AI"]: AIView,
				[AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView,
				[AI_UNCATEGORIZED_CATEGORY]: AINodesView,
				[AI_EVALUATION]: AINodesView
			};
			const itemKey = selectedView;
			const matchedView = views[itemKey];
			if (!matchedView) {
				console.warn(`No view found for ${itemKey}`);
				return;
			}
			const view$2 = matchedView(mergedNodes);
			pushViewStack({
				title: view$2.title,
				subtitle: view$2?.subtitle ?? "",
				items: view$2.items,
				info: view$2.info,
				hasSearch: true,
				mode: "nodes",
				rootView: selectedView,
				searchItems: mergedNodes
			});
		}, { immediate: true });
		function onBackButton() {
			popViewStack();
		}
		return (_ctx, _cache) => {
			return viewStacks.value.length > 0 ? (openBlock(), createBlock(Transition, {
				key: 0,
				name: `panel-slide-${activeViewStack.value.transitionDirection}`,
				onAfterLeave: onTransitionEnd
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock("aside", {
					key: `${activeViewStack.value.uuid}`,
					class: normalizeClass([_ctx.$style.nodesListPanel, activeViewStack.value.panelClass]),
					onKeydownCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [
					createBaseVNode("header", {
						class: normalizeClass({
							[_ctx.$style.header]: true,
							[_ctx.$style.hasBg]: !activeViewStack.value.subtitle,
							"nodes-list-panel-header": true
						}),
						"data-test-id": "nodes-list-header"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.top) }, [
						viewStacks.value.length > 1 && !activeViewStack.value.preventBack ? (openBlock(), createElementBlock("button", {
							key: 0,
							class: normalizeClass(_ctx.$style.backButton),
							onClick: onBackButton
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.backButtonIcon),
							icon: "arrow-left",
							size: 22
						}, null, 8, ["class"])], 2)) : createCommentVNode("", true),
						activeViewStack.value.nodeIcon ? (openBlock(), createBlock(NodeIcon_default, {
							key: 1,
							class: normalizeClass(_ctx.$style.nodeIcon),
							"icon-source": activeViewStack.value.nodeIcon,
							circle: false,
							"show-tooltip": false,
							size: 20
						}, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
						activeViewStack.value.title ? (openBlock(), createElementBlock("p", {
							key: 2,
							class: normalizeClass(_ctx.$style.title),
							textContent: toDisplayString(activeViewStack.value.title)
						}, null, 10, _hoisted_1)) : createCommentVNode("", true),
						communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDocsLink_default, {
							key: 3,
							"package-name": communityNodeDetails.value.packageName
						}, null, 8, ["package-name"])) : createCommentVNode("", true)
					], 2), activeViewStack.value.subtitle ? (openBlock(), createElementBlock("p", {
						key: 0,
						class: normalizeClass({
							[_ctx.$style.subtitle]: true,
							[_ctx.$style.offsetSubtitle]: viewStacks.value.length > 1
						}),
						textContent: toDisplayString(activeViewStack.value.subtitle)
					}, null, 10, _hoisted_2)) : createCommentVNode("", true)], 2),
					showSearchBar.value ? (openBlock(), createBlock(SearchBar_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.searchBar),
						placeholder: searchPlaceholder.value ? searchPlaceholder.value : unref(i18n$1).baseText("nodeCreator.searchBar.searchNodes"),
						"model-value": activeViewStack.value.search,
						"onUpdate:modelValue": onSearch
					}, null, 8, [
						"class",
						"placeholder",
						"model-value"
					])) : createCommentVNode("", true),
					communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDetails_default, { key: 1 })) : createCommentVNode("", true),
					communityNodeDetails.value && !isActionsMode.value ? (openBlock(), createBlock(CommunityNodeInfo_default, { key: 2 })) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.renderedItems) }, [activeViewStack.value.info && !activeViewStack.value.search ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.info),
						content: activeViewStack.value.info,
						theme: "warning"
					}, null, 8, ["class", "content"])) : createCommentVNode("", true), isActionsMode.value && activeViewStack.value.subcategory ? (openBlock(), createBlock(ActionsMode_default, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), null, 16)) : (openBlock(), createBlock(NodesMode_default, mergeProps({
						key: 2,
						"root-view": nodeCreatorView.value
					}, _ctx.$attrs), null, 16, ["root-view"]))], 2),
					communityNodeDetails.value && !isCommunityNodeActionsMode.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
						key: 3,
						"package-name": communityNodeDetails.value.packageName,
						"show-manage": communityNodeDetails.value.installed && unref(isInstanceOwner)
					}, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)
				], 34))]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var NodesListPanel_vue_vue_type_style_index_0_lang_module_default = {
	info: "_info_aetc2_145",
	backButton: "_backButton_aetc2_149",
	backButtonIcon: "_backButtonIcon_aetc2_156",
	nodeIcon: "_nodeIcon_aetc2_161",
	renderedItems: "_renderedItems_aetc2_167",
	searchBar: "_searchBar_aetc2_179",
	nodesListPanel: "_nodesListPanel_aetc2_183",
	footer: "_footer_aetc2_201",
	top: "_top_aetc2_212",
	header: "_header_aetc2_217",
	hasBg: "_hasBg_aetc2_223",
	title: "_title_aetc2_228",
	subtitle: "_subtitle_aetc2_239",
	offsetSubtitle: "_offsetSubtitle_aetc2_247"
};
var NodesListPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodesListPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodesListPanel_vue_vue_type_style_index_0_lang_module_default }]]);
var NodeCreator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreator",
	props: {
		active: { type: Boolean },
		onNodeTypeSelected: { type: Function }
	},
	emits: ["closeNodeCreator", "nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const OUTSIDE_CLICK_WHITELIST = [".el-overlay-dialog"];
		const props = __props;
		const { resetViewStacks } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const emit = __emit;
		const uiStore = useUIStore();
		const bannersStore = useBannersStore();
		const chatPanelStore = useChatPanelStore();
		const { setShowScrim, setActions, setMergeNodes } = useNodeCreatorStore();
		const { generateMergedNodesAndActions } = useActionsGenerator();
		const state = reactive({
			nodeCreator: null,
			mousedownInsideEvent: null
		});
		const showScrim = computed(() => useNodeCreatorStore().showScrim);
		const viewStacksLength = computed(() => useViewStacks().viewStacks.length);
		const nodeCreatorInlineStyle = computed(() => {
			const rightPosition = getRightOffset();
			return {
				top: `${bannersStore.bannersHeight + uiStore.headerHeight}px`,
				right: `${rightPosition}px`
			};
		});
		function getRightOffset() {
			if (chatPanelStore.isOpen) return chatPanelStore.width;
			return 0;
		}
		function onMouseUpOutside() {
			if (state.mousedownInsideEvent) {
				const clickEvent = new MouseEvent("click", {
					bubbles: true,
					cancelable: true
				});
				state.mousedownInsideEvent.target?.dispatchEvent(clickEvent);
				state.mousedownInsideEvent = null;
				unBindOnMouseUpOutside();
			}
		}
		function unBindOnMouseUpOutside() {
			document.removeEventListener("mouseup", onMouseUpOutside);
			document.removeEventListener("touchstart", onMouseUpOutside);
		}
		function onMouseUp() {
			state.mousedownInsideEvent = null;
			unBindOnMouseUpOutside();
		}
		function onMouseDown(event) {
			state.mousedownInsideEvent = event;
			document.addEventListener("mouseup", onMouseUpOutside);
			document.addEventListener("touchstart", onMouseUpOutside);
		}
		function onDragOver(event) {
			event.preventDefault();
		}
		function onDrop(event) {
			if (!event.dataTransfer) return;
			const dragData = event.dataTransfer.getData(DRAG_EVENT_DATA_KEY);
			const nodeCreatorBoundingRect = state.nodeCreator.getBoundingClientRect();
			if (dragData && event.pageX >= nodeCreatorBoundingRect.x && event.pageY >= nodeCreatorBoundingRect.y) event.stopPropagation();
		}
		watch(() => props.active, (isActive) => {
			if (!isActive) {
				setShowScrim(false);
				resetViewStacks();
			}
		});
		watch(viewStacksLength, (value) => {
			if (value === 0) {
				emit("closeNodeCreator");
				setShowScrim(false);
			}
		});
		registerKeyHook("NodeCreatorCloseEscape", {
			keyboardKeys: ["Escape"],
			handler: () => emit("closeNodeCreator")
		});
		registerKeyHook("NodeCreatorCloseTab", {
			keyboardKeys: ["Tab"],
			handler: () => emit("closeNodeCreator")
		});
		watch(() => ({
			httpOnlyCredentials: useCredentialsStore().httpOnlyCredentialTypes,
			nodeTypes: useNodeTypesStore().visibleNodeTypes
		}), ({ nodeTypes, httpOnlyCredentials }) => {
			const { actions, mergedNodes } = generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials);
			setActions(actions);
			setMergeNodes(mergedNodes);
		}, { immediate: true });
		const { nodeCreator: nodeCreator$1 } = toRefs(state);
		onBeforeUnmount(() => {
			unBindOnMouseUpOutside();
		});
		onClickOutside(nodeCreator$1, () => {
			emit("closeNodeCreator");
		}, { ignore: OUTSIDE_CLICK_WHITELIST });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("aside", { class: normalizeClass({
					[_ctx.$style.nodeCreatorScrim]: true,
					[_ctx.$style.active]: showScrim.value
				}) }, null, 2),
				__props.active ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.close),
					type: "secondary",
					icon: "x",
					"aria-label": "Close Node Creator",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("closeNodeCreator"))
				}, null, 8, ["class"])) : createCommentVNode("", true),
				createVNode(SlideTransition_default, null, {
					default: withCtx(() => [__props.active ? (openBlock(), createElementBlock("div", {
						key: 0,
						ref_key: "nodeCreator",
						ref: nodeCreator$1,
						class: normalizeClass({ [_ctx.$style.nodeCreator]: true }),
						style: normalizeStyle(nodeCreatorInlineStyle.value),
						"data-test-id": "node-creator",
						onDragover: onDragOver,
						onDrop,
						onMousedown: onMouseDown,
						onMouseup: onMouseUp
					}, [createVNode(NodesListPanel_default, { onNodeTypeSelected: __props.onNodeTypeSelected }, null, 8, ["onNodeTypeSelected"])], 38)) : createCommentVNode("", true)]),
					_: 1
				})
			]);
		};
	}
});
var NodeCreator_vue_vue_type_style_index_0_lang_module_default = {
	nodeCreator: "_nodeCreator_1htj5_127",
	nodeCreatorScrim: "_nodeCreatorScrim_1htj5_139",
	active: "_active_1htj5_151",
	close: "_close_1htj5_155"
};
var NodeCreator_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreator_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreator_default as default };
