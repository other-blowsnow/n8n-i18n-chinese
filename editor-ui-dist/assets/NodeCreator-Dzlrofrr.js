import { d as defineComponent, h as createElementBlock, g as openBlock, K as mergeProps, j as createBaseVNode, Q as renderSlot, f as createCommentVNode, n as normalizeClass, e as createBlock, t as toDisplayString, l as unref, hJ as ElTag, w as withCtx, k as createTextVNode, N as N8nIcon, D as useI18n, i as createVNode, _ as _export_sfc, d8 as reactive, o as onMounted, bs as useExternalHooks, P as onBeforeUnmount, c7 as toRefs, da as useNodeCreatorStore, h0 as useActions, hK as useViewStacks, hk as useNodeType, ah as useNodeTypesStore, r as ref, x as computed, hL as DEFAULT_SUBCATEGORY, hM as CREDENTIAL_ONLY_NODE_PREFIX, c as useI18n$1, hN as shouldShowCommunityNodeDetails, hO as HITL_SUBCATEGORY, fi as isCommunityPackageName, hP as isNodePreviewKey, hQ as removePreviewToken, ci as resolveDirective, bu as createSlots, a4 as N8nTooltip, b4 as withDirectives, eq as COMMUNITY_NODES_INSTALLATION_DOCS_URL, b5 as vShow, U as normalizeStyle, c2 as NodeIcon, B as withModifiers, dH as DRAG_EVENT_DATA_KEY, ap as useTelemetry, hR as camelCase, hS as N8nNodeIcon, ho as WEBHOOK_NODE_TYPE, hT as getNewNodePosition, hU as DEFAULT_NODE_SIZE, u as useUsersStore, p as N8nText, q as N8nButton, hV as useKeyboardNavigation, a9 as useWorkflowsStore, af as watch, c8 as normalizeProps, c9 as guardReactiveProps, F as Fragment, A as renderList, cd as onUnmounted, dK as N8nLoading, hW as REGULAR_NODE_CREATOR_VIEW, ep as useCommunityNodesStore, hX as _sfc_main$o, e$ as i18n, hY as captureException, hZ as useCalloutHelpers, h_ as CUSTOM_API_CALL_KEY, h$ as TRIGGER_NODE_CREATOR_VIEW, i0 as OPEN_AI_NODE_TYPE, i1 as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, i2 as getActiveViewCallouts, i3 as withMemo, z as N8nCallout, cS as InfoTip, i4 as CommunityNodeFooter, i5 as HTTP_REQUEST_NODE_TYPE, fs as createStaticVNode, C as N8nLink, i6 as REQUEST_NODE_FORM_URL, i7 as filterAndSearchNodes, i8 as getRootSearchCallouts, i9 as PRE_BUILT_AGENTS_COLLECTION, ia as prepareCommunityNodeDetailsViewStack, hv as getNodeIconSource, ib as transformNodeType, ic as AINodesView, id as AIView, ie as RegularView, ig as TriggerView, ih as flattenCreateElements, ii as getHumanInTheLoopActions, ij as AI_OTHERS_NODE_CREATOR_VIEW, ik as AI_NODE_CREATOR_VIEW, a as useToast, db as useCredentialsStore, Y as useDebounce, e7 as N8nNotice, hq as Transition, il as AI_EVALUATION, im as AI_UNCATEGORIZED_CATEGORY, Z as useUIStore, fg as useAssistantStore, de as useBuilderStore, bt as onClickOutside, a5 as _sfc_main$p, io as SlideTransition, ip as useActionsGenerator } from "./index-BsWH3eYA.js";
const _hoisted_1$b = ["textContent"];
const _hoisted_2$4 = ["textContent"];
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "NodeCreatorNode",
  props: {
    active: { type: Boolean },
    isAi: { type: Boolean },
    isTrigger: { type: Boolean },
    description: {},
    tag: {},
    title: {},
    showActionArrow: { type: Boolean },
    isOfficial: { type: Boolean }
  },
  emits: ["tooltipClick"],
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: {
          [_ctx.$style.creatorNode]: true,
          [_ctx.$style.hasAction]: !_ctx.showActionArrow
        }
      }, _ctx.$attrs), [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.nodeIcon)
        }, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ], 2),
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.details)
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.name),
              "data-test-id": "node-creator-item-name",
              textContent: toDisplayString(_ctx.title)
            }, null, 10, _hoisted_1$b),
            _ctx.tag ? (openBlock(), createBlock(unref(ElTag), {
              key: 0,
              class: normalizeClass(_ctx.$style.tag),
              size: "small",
              round: "",
              type: _ctx.tag.type ?? "success"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tag.text), 1)
              ]),
              _: 1
            }, 8, ["class", "type"])) : createCommentVNode("", true),
            _ctx.isTrigger ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 1,
              icon: "bolt-filled",
              size: "xsmall",
              title: unref(t)("nodeCreator.nodeItem.triggerIconTitle"),
              class: normalizeClass(_ctx.$style.triggerIcon)
            }, null, 8, ["title", "class"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "extraDetails", {}, void 0, true)
          ], 2),
          _ctx.description ? (openBlock(), createElementBlock("p", {
            key: 0,
            "data-test-id": "node-creator-item-description",
            class: normalizeClass(_ctx.$style.description),
            textContent: toDisplayString(_ctx.description)
          }, null, 10, _hoisted_2$4)) : createCommentVNode("", true)
        ]),
        renderSlot(_ctx.$slots, "dragContent", {}, void 0, true),
        _ctx.showActionArrow ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: normalizeClass(_ctx.$style.panelIcon)
        }, [
          createVNode(unref(N8nIcon), {
            icon: "arrow-right",
            size: "large"
          })
        ], 2)) : createCommentVNode("", true)
      ], 16);
    };
  }
});
const creatorNode = "_creatorNode_190ig_123";
const hasAction = "_hasAction_190ig_130";
const panelIcon = "_panelIcon_190ig_134";
const tag = "_tag_190ig_138";
const tooltipIcon$1 = "_tooltipIcon_190ig_161";
const details = "_details_190ig_167";
const nodeIcon$5 = "_nodeIcon_190ig_173";
const name$1 = "_name_190ig_178";
const description$1 = "_description_190ig_184";
const aiIcon = "_aiIcon_190ig_192";
const triggerIcon$1 = "_triggerIcon_190ig_196";
const style0$l = {
  creatorNode,
  hasAction,
  panelIcon,
  tag,
  tooltipIcon: tooltipIcon$1,
  details,
  nodeIcon: nodeIcon$5,
  name: name$1,
  description: description$1,
  aiIcon,
  triggerIcon: triggerIcon$1
};
const cssModules$l = {
  "$style": style0$l
};
const NodeCreatorNode = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__cssModules", cssModules$l], ["__scopeId", "data-v-878aee66"]]);
const _hoisted_1$a = ["placeholder", "value"];
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "SearchBar",
  props: {
    placeholder: { default: "" },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const state = reactive({
      inputRef: null
    });
    const externalHooks = useExternalHooks();
    function focus() {
      state.inputRef?.focus();
    }
    function onInput(event) {
      const input = event.target;
      emit("update:modelValue", input.value.trim());
    }
    function clear2() {
      emit("update:modelValue", "");
    }
    onMounted(() => {
      void externalHooks.run("nodeCreatorSearchBar.mount", { inputRef: state.inputRef });
      setTimeout(focus, 0);
    });
    onBeforeUnmount(() => {
      state.inputRef?.remove();
    });
    const { inputRef } = toRefs(state);
    __expose({
      focus
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.searchContainer),
        "data-test-id": "search-bar"
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.prefix]: true, [_ctx.$style.active]: _ctx.modelValue.length > 0 })
        }, [
          createVNode(_component_n8n_icon, {
            icon: "search",
            size: "small"
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.text)
        }, [
          createBaseVNode("input", {
            ref_key: "inputRef",
            ref: inputRef,
            placeholder: _ctx.placeholder,
            value: _ctx.modelValue,
            class: normalizeClass(_ctx.$style.input),
            autofocus: "",
            "data-test-id": "node-creator-search-bar",
            tabindex: "0",
            onInput
          }, null, 42, _hoisted_1$a)
        ], 2),
        _ctx.modelValue.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([_ctx.$style.suffix, _ctx.$style.clickable]),
          onClick: clear2
        }, [
          createVNode(_component_n8n_icon, {
            size: "small",
            icon: "circle-x"
          })
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const searchContainer = "_searchContainer_w19t7_123";
const prefix = "_prefix_w19t7_139";
const active$3 = "_active_w19t7_144";
const text = "_text_w19t7_148";
const suffix = "_suffix_w19t7_164";
const clear = "_clear_w19t7_170";
const clickable = "_clickable_w19t7_183";
const style0$k = {
  searchContainer,
  prefix,
  active: active$3,
  text,
  suffix,
  clear,
  clickable
};
const cssModules$k = {
  "$style": style0$k
};
const SearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__cssModules", cssModules$k]]);
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68zm-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
    }, null, -1)
  ]));
}
const OfficialIcon = { name: "mdi-verified", render: render$1 };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "NodeItem",
  props: {
    nodeType: {},
    subcategory: { default: void 0 },
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const i18n2 = useI18n$1();
    const telemetry = useTelemetry();
    const { actions } = useNodeCreatorStore();
    const { getAddedNodesAndConnections } = useActions();
    const { activeViewStack } = useViewStacks();
    const { isSubNodeType } = useNodeType({
      nodeType: props.nodeType
    });
    const nodeTypesStore = useNodeTypesStore();
    const dragging = ref(false);
    const draggablePosition = ref({ x: -100, y: -100 });
    const draggableDataTransfer2 = ref(null);
    const description2 = computed(() => {
      if (isCommunityNodePreview.value) {
        return props.nodeType.description;
      }
      if (isSendAndWaitCategory.value) {
        return "";
      }
      if (props.subcategory === DEFAULT_SUBCATEGORY && !props.nodeType.name.startsWith(CREDENTIAL_ONLY_NODE_PREFIX)) {
        return "";
      }
      return i18n2.headerText({
        key: `headers.${shortNodeType.value}.description`,
        fallback: props.nodeType.description
      });
    });
    const showActionArrow = computed(() => {
      if (shouldShowCommunityNodeDetails(isCommunityNode.value, activeViewStack)) {
        return true;
      }
      return hasActions.value && !isSendAndWaitCategory.value;
    });
    const isSendAndWaitCategory = computed(() => activeViewStack.subcategory === HITL_SUBCATEGORY);
    const dataTestId = computed(
      () => hasActions.value ? "node-creator-action-item" : "node-creator-node-item"
    );
    const hasActions = computed(() => {
      return nodeActions.value.length > 1 && !activeViewStack.hideActions;
    });
    const nodeActions = computed(() => {
      return actions[props.nodeType.name] || [];
    });
    const shortNodeType = computed(() => i18n2.shortNodeType(props.nodeType.name) || "");
    const draggableStyle = computed(() => ({
      top: `${draggablePosition.value.y}px`,
      left: `${draggablePosition.value.x}px`
    }));
    const isCommunityNode = computed(() => isCommunityPackageName(props.nodeType.name));
    const isCommunityNodePreview = computed(() => isNodePreviewKey(props.nodeType.name));
    const displayName = computed(() => {
      const trimmedDisplayName = props.nodeType.displayName.trimEnd();
      return i18n2.headerText({
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
    const tag2 = computed(() => {
      if (props.nodeType.tag) {
        return { text: props.nodeType.tag };
      }
      if (description2.value.toLowerCase().includes("deprecated")) {
        return { text: i18n2.baseText("nodeCreator.nodeItem.deprecated"), type: "info" };
      }
      return void 0;
    });
    function onDragStart(event) {
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "copy";
        event.dataTransfer.dropEffect = "copy";
        event.dataTransfer.setDragImage(draggableDataTransfer2.value, 0, 0);
        event.dataTransfer.setData(
          DRAG_EVENT_DATA_KEY,
          JSON.stringify(getAddedNodesAndConnections([{ type: props.nodeType.name }]))
        );
      }
      dragging.value = true;
    }
    function onDragEnd() {
      dragging.value = false;
      setTimeout(() => {
        draggablePosition.value = { x: -100, y: -100 };
      }, 300);
    }
    function onCommunityNodeTooltipClick(event) {
      if (event.target.localName === "a") {
        telemetry.track("user clicked cnr docs link", { source: "nodes panel node" });
      }
    }
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_N8nNodeCreatorNode = NodeCreatorNode;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(_component_N8nNodeCreatorNode, {
        draggable: !showActionArrow.value,
        class: normalizeClass(_ctx.$style.nodeItem),
        description: description2.value,
        title: displayName.value,
        "show-action-arrow": showActionArrow.value,
        "is-trigger": isTrigger.value,
        "is-official": isOfficial.value,
        "data-test-id": dataTestId.value,
        tag: tag2.value,
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, createSlots({
        icon: withCtx(() => [
          unref(isSubNodeType) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.subNodeBackground)
          }, null, 2)) : createCommentVNode("", true),
          createVNode(NodeIcon, {
            class: normalizeClass(_ctx.$style.nodeIcon),
            "node-type": _ctx.nodeType
          }, null, 8, ["class", "node-type"])
        ]),
        dragContent: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            ref_key: "draggableDataTransfer",
            ref: draggableDataTransfer2,
            class: normalizeClass(_ctx.$style.draggable),
            style: normalizeStyle(draggableStyle.value)
          }, [
            createVNode(NodeIcon, {
              "node-type": _ctx.nodeType,
              size: 40,
              shrink: false,
              onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["node-type"])
          ], 6), [
            [vShow, dragging.value]
          ])
        ]),
        _: 2
      }, [
        isOfficial.value ? {
          name: "extraDetails",
          fn: withCtx(() => [
            createVNode(unref(N8nTooltip), {
              placement: "top",
              "show-after": 500
            }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n2).baseText("generic.officialNode.tooltip", { interpolate: { author: author.value } })), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(OfficialIcon), {
                  class: normalizeClass([_ctx.$style.icon, _ctx.$style.official])
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : isCommunityNode.value && !isCommunityNodePreview.value && !unref(activeViewStack)?.communityNodeDetails ? {
          name: "extraDetails",
          fn: withCtx(() => [
            createVNode(unref(N8nTooltip), {
              placement: "top",
              "show-after": 500
            }, {
              content: withCtx(() => [
                withDirectives(createBaseVNode("p", {
                  class: normalizeClass(_ctx.$style.communityNodeIcon),
                  onClick: onCommunityNodeTooltipClick
                }, null, 2), [
                  [
                    _directive_n8n_html,
                    unref(i18n2).baseText("generic.communityNode.tooltip", {
                      interpolate: {
                        packageName: _ctx.nodeType.name.split(".")[0],
                        docURL: unref(COMMUNITY_NODES_INSTALLATION_DOCS_URL)
                      }
                    })
                  ]
                ])
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_icon, {
                  size: "small",
                  class: normalizeClass(_ctx.$style.icon),
                  icon: "box"
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["draggable", "class", "description", "title", "show-action-arrow", "is-trigger", "is-official", "data-test-id", "tag"]);
    };
  }
});
const nodeItem = "_nodeItem_1h0xg_123";
const nodeIcon$4 = "_nodeIcon_1h0xg_132";
const subNodeBackground = "_subNodeBackground_1h0xg_136";
const communityNodeIcon = "_communityNodeIcon_1h0xg_146";
const draggable$1 = "_draggable_1h0xg_150";
const draggableDataTransfer$1 = "_draggableDataTransfer_1h0xg_164";
const icon$1 = "_icon_1h0xg_169";
const official = "_official_1h0xg_174";
const style0$j = {
  nodeItem,
  nodeIcon: nodeIcon$4,
  subNodeBackground,
  communityNodeIcon,
  draggable: draggable$1,
  draggableDataTransfer: draggableDataTransfer$1,
  icon: icon$1,
  official
};
const cssModules$j = {
  "$style": style0$j
};
const NodeItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__cssModules", cssModules$j]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SubcategoryItem",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const i18n2 = useI18n$1();
    const subcategoryName = computed(() => camelCase(props.item.subcategory || props.item.title));
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = N8nNodeIcon;
      const _component_n8n_node_creator_node = NodeCreatorNode;
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        class: normalizeClass(_ctx.$style.subCategory),
        title: unref(i18n2).baseText(`nodeCreator.subcategoryNames.${subcategoryName.value}`),
        "is-trigger": false,
        description: unref(i18n2).baseText(`nodeCreator.subcategoryDescriptions.${subcategoryName.value}`),
        "show-action-arrow": true
      }, {
        icon: withCtx(() => [
          createVNode(_component_n8n_node_icon, mergeProps({
            type: "icon",
            name: _ctx.item.icon,
            circle: false,
            "show-tooltip": false,
            "use-updated-icons": true
          }, _ctx.item.iconProps), null, 16, ["name"])
        ]),
        _: 1
      }, 8, ["class", "title", "description"]);
    };
  }
});
const subCategory = "_subCategory_1x5a1_123";
const style0$i = {
  subCategory
};
const cssModules$i = {
  "$style": style0$i
};
const SubcategoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__cssModules", cssModules$i]]);
const _hoisted_1$8 = ["textContent"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "LabelItem",
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.label)
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.$style.name),
          textContent: toDisplayString(_ctx.item.key)
        }, null, 10, _hoisted_1$8)
      ], 2);
    };
  }
});
const label$1 = "_label_p81gr_123";
const style0$h = {
  label: label$1
};
const cssModules$h = {
  "$style": style0$h
};
const LabelItem = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__cssModules", cssModules$h]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
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
    const isTriggerAction = (action2) => action2.name?.toLowerCase().includes("trigger") || action2.name === WEBHOOK_NODE_TYPE;
    function onDragStart(event) {
      document.body.addEventListener("dragover", onDragOver);
      const { pageX: x, pageY: y } = event;
      if (event.dataTransfer && actionData.value.key) {
        event.dataTransfer.effectAllowed = "copy";
        event.dataTransfer.dropEffect = "copy";
        event.dataTransfer.setDragImage(state.draggableDataTransfer, 0, 0);
        event.dataTransfer.setData(
          DRAG_EVENT_DATA_KEY,
          JSON.stringify(getAddedNodesAndConnections([{ type: actionData.value.key }]))
        );
        if (telemetry) {
          state.storeWatcher = setAddedNodeActionParameters(
            actionData.value,
            telemetry,
            activeViewStack.rootView
          );
        }
        document.body.addEventListener("dragend", onDragEnd);
      }
      state.dragging = true;
      state.draggablePosition = { x, y };
    }
    function onDragOver(event) {
      if (!state.dragging || event.pageX === 0 && event.pageY === 0) {
        return;
      }
      const [x, y] = getNewNodePosition(
        [],
        [event.pageX - DEFAULT_NODE_SIZE[0] / 2, event.pageY - DEFAULT_NODE_SIZE[1] / 2]
      );
      state.draggablePosition = { x, y };
    }
    function onDragEnd() {
      if (state.storeWatcher) state.storeWatcher();
      document.body.removeEventListener("dragend", onDragEnd);
      document.body.removeEventListener("dragover", onDragOver);
      state.dragging = false;
      setTimeout(() => {
        state.draggablePosition = { x: -100, y: -100 };
      }, 300);
    }
    const { draggableDataTransfer: draggableDataTransfer2, dragging } = toRefs(state);
    return (_ctx, _cache) => {
      const _component_n8n_node_creator_node = NodeCreatorNode;
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        draggable: "",
        class: normalizeClass(_ctx.$style.action),
        title: _ctx.action.displayName,
        "is-trigger": isTriggerAction(_ctx.action),
        "data-keyboard-nav": "true",
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, {
        dragContent: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "draggableDataTransfer",
            ref: draggableDataTransfer2,
            class: normalizeClass(_ctx.$style.draggableDataTransfer)
          }, null, 2),
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.draggable),
            style: normalizeStyle(draggableStyle.value)
          }, [
            createVNode(NodeIcon, {
              "node-type": _ctx.nodeType,
              size: 40,
              shrink: false,
              onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["node-type"])
          ], 6), [
            [vShow, unref(dragging)]
          ])
        ]),
        icon: withCtx(() => [
          createVNode(NodeIcon, { "node-type": _ctx.action }, null, 8, ["node-type"])
        ]),
        _: 1
      }, 8, ["class", "title", "is-trigger"]);
    };
  }
});
const action$1 = "_action_1owvg_123";
const nodeIcon$3 = "_nodeIcon_1owvg_135";
const draggable = "_draggable_1owvg_139";
const draggableDataTransfer = "_draggableDataTransfer_1owvg_153";
const style0$g = {
  action: action$1,
  nodeIcon: nodeIcon$3,
  draggable,
  draggableDataTransfer
};
const cssModules$g = {
  "$style": style0$g
};
const ActionItem = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__cssModules", cssModules$g]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ViewItem",
  props: {
    view: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = N8nNodeIcon;
      const _component_n8n_node_creator_node = NodeCreatorNode;
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        class: normalizeClass(_ctx.$style.view),
        title: _ctx.view.title,
        tag: _ctx.view.tag,
        "is-trigger": false,
        description: _ctx.view.description,
        "show-action-arrow": true
      }, {
        icon: withCtx(() => [
          createVNode(_component_n8n_node_icon, {
            type: "icon",
            name: _ctx.view.icon,
            circle: false,
            "show-tooltip": false,
            "use-updated-icons": true
          }, null, 8, ["name"])
        ]),
        _: 1
      }, 8, ["class", "title", "tag", "description"]);
    };
  }
});
const view$1 = "_view_17lj9_123";
const style0$f = {
  view: view$1
};
const cssModules$f = {
  "$style": style0$f
};
const ViewItem = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__cssModules", cssModules$f]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "LinkItem",
  props: {
    link: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = N8nNodeIcon;
      const _component_n8n_node_creator_node = NodeCreatorNode;
      return openBlock(), createBlock(_component_n8n_node_creator_node, {
        class: normalizeClass(_ctx.$style.creatorLink),
        title: _ctx.link.title,
        "is-trigger": false,
        description: _ctx.link.description,
        tag: _ctx.link.tag,
        "show-action-arrow": true
      }, {
        icon: withCtx(() => [
          createVNode(_component_n8n_node_icon, {
            type: "icon",
            name: _ctx.link.icon,
            circle: false,
            "show-tooltip": false,
            "use-updated-icons": true
          }, null, 8, ["name"])
        ]),
        _: 1
      }, 8, ["class", "title", "description", "tag"]);
    };
  }
});
const creatorLink = "_creatorLink_cptk0_123";
const style0$e = {
  creatorLink
};
const cssModules$e = {
  "$style": style0$e
};
const LinkItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__cssModules", cssModules$e]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "CommunityNodeInstallHint",
  props: {
    hint: {}
  },
  setup(__props) {
    const isOwner = computed(() => useUsersStore().isInstanceOwner);
    return (_ctx, _cache) => {
      return isOwner.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(N8nIcon), {
          color: "text-light",
          icon: "info",
          size: "large"
        }),
        createVNode(unref(N8nText), {
          color: "text-base",
          size: "medium"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.hint), 1)
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$4 = "_container_1dwo3_123";
const style0$d = {
  container: container$4
};
const cssModules$d = {
  "$style": style0$d
};
const CommunityNodeInstallHint = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__cssModules", cssModules$d]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CommunityNodeItem",
  props: {
    isPreview: { type: Boolean }
  },
  setup(__props) {
    const i18n2 = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _ctx.isPreview ? (openBlock(), createBlock(CommunityNodeInstallHint, {
          key: 0,
          hint: unref(i18n2).baseText("communityNodeItem.node.hint")
        }, null, 8, ["hint"])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.marginLeft)
        }, [
          createVNode(unref(N8nButton), {
            size: "medium",
            type: "secondary",
            icon: "plus",
            label: unref(i18n2).baseText("communityNodeItem.label"),
            outline: ""
          }, null, 8, ["label"])
        ], 2))
      ]);
    };
  }
});
const marginLeft = "_marginLeft_1vvtt_123";
const style0$c = {
  marginLeft
};
const cssModules$c = {
  "$style": style0$c
};
const CommunityNodeItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__cssModules", cssModules$c]]);
const _hoisted_1$7 = ["textContent"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CategoryItem",
  props: {
    expanded: { type: Boolean, default: true },
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
      const _component_n8n_icon = N8nIcon;
      return openBlock(), createElementBlock("div", mergeProps({
        class: _ctx.$style.categoryWrapper
      }, _ctx.$attrs, {
        "data-keyboard-nav": "true",
        "data-test-id": "node-creator-category-item"
      }), [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.category]: true, [_ctx.$style.active]: _ctx.active })
        }, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.name)
          }, [
            createBaseVNode("span", {
              textContent: toDisplayString(categoryName.value)
            }, null, 8, _hoisted_1$7),
            _ctx.isTrigger ? (openBlock(), createBlock(_component_n8n_icon, {
              key: 0,
              icon: "bolt-filled",
              size: "xsmall",
              class: normalizeClass(_ctx.$style.triggerIcon)
            }, null, 8, ["class"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default")
          ], 2),
          _ctx.expanded ? (openBlock(), createBlock(_component_n8n_icon, {
            key: 0,
            icon: "chevron-down",
            color: "text-light",
            size: "large"
          })) : (openBlock(), createBlock(_component_n8n_icon, {
            key: 1,
            icon: "chevron-up",
            color: "text-light",
            size: "large"
          }))
        ], 2)
      ], 16);
    };
  }
});
const triggerIcon = "_triggerIcon_1kyg0_123";
const category$1 = "_category_1kyg0_128";
const active$2 = "_active_1kyg0_149";
const name = "_name_1kyg0_153";
const style0$b = {
  triggerIcon,
  category: category$1,
  active: active$2,
  name
};
const cssModules$b = {
  "$style": style0$b
};
const CategoryItem = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__cssModules", cssModules$b]]);
const _hoisted_1$6 = ["data-category-collapsed"];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
    const i18n2 = useI18n$1();
    const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
    const actionCount = computed(() => props.elements.filter(({ type }) => type === "action").length);
    const expanded = ref(props.expanded ?? false);
    const isPreview = computed(
      () => activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed
    );
    function toggleExpanded() {
      setExpanded(!expanded.value);
    }
    function setExpanded(isExpanded) {
      const prev = expanded.value;
      expanded.value = isExpanded;
      if (expanded.value && !prev) {
        nodeCreatorStore.onCategoryExpanded({
          category_name: props.category,
          workflow_id: workflowId
        });
      }
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
    watch(
      () => props.elements,
      () => {
        setExpanded(true);
      }
    );
    registerKeyHook(`CategoryRight_${props.category}`, {
      keyboardKeys: ["ArrowRight"],
      condition: (type, activeItemId2) => type === "category" && props.category === activeItemId2,
      handler: arrowRight
    });
    registerKeyHook(`CategoryToggle_${props.category}`, {
      keyboardKeys: ["Enter"],
      condition: (type, activeItemId2) => type === "category" && props.category === activeItemId2,
      handler: toggleExpanded
    });
    registerKeyHook(`CategoryLeft_${props.category}`, {
      keyboardKeys: ["ArrowLeft"],
      condition: (type, activeItemId2) => type === "category" && props.category === activeItemId2,
      handler: arrowLeft
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_tooltip = N8nTooltip;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.categorizedItemsRenderer),
        "data-category-collapsed": !expanded.value
      }, [
        createVNode(CategoryItem, {
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
          default: withCtx(() => [
            _ctx.mouseOverTooltip ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.$style.mouseOverTooltip)
            }, [
              createVNode(_component_n8n_tooltip, {
                placement: "top",
                "popper-class": _ctx.$style.tooltipPopper
              }, {
                content: withCtx(() => [
                  withDirectives(createBaseVNode("div", null, null, 512), [
                    [_directive_n8n_html, _ctx.mouseOverTooltip]
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_n8n_icon, {
                    icon: "circle-help",
                    size: "small"
                  })
                ]),
                _: 1
              }, 8, ["popper-class"])
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class", "name", "disabled", "active", "count", "expanded", "is-trigger", "data-keyboard-nav-id"]),
        expanded.value && actionCount.value > 0 && _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.contentSlot)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("", true),
        isPreview.value && expanded.value ? (openBlock(), createBlock(CommunityNodeInstallHint, {
          key: 1,
          hint: unref(i18n2).baseText("communityNodeItem.actions.hint")
        }, null, 8, ["hint"])) : createCommentVNode("", true),
        expanded.value ? (openBlock(), createBlock(ItemsRenderer, mergeProps({ key: 2 }, _ctx.$attrs, {
          elements: _ctx.elements,
          "is-trigger": _ctx.isTriggerCategory,
          class: [{ [_ctx.$style.preview]: isPreview.value }]
        }), {
          default: withCtx(() => _cache[0] || (_cache[0] = [])),
          empty: withCtx(() => [
            renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps({ elements: _ctx.elements })))
          ]),
          _: 3
        }, 16, ["elements", "is-trigger", "class"])) : createCommentVNode("", true)
      ], 10, _hoisted_1$6);
    };
  }
});
const mouseOverTooltip = "_mouseOverTooltip_wk4vn_123";
const categorizedItemsRenderer = "_categorizedItemsRenderer_wk4vn_131";
const tooltipPopper = "_tooltipPopper_wk4vn_135";
const contentSlot = "_contentSlot_wk4vn_139";
const preview$1 = "_preview_wk4vn_148";
const style0$a = {
  mouseOverTooltip,
  categorizedItemsRenderer,
  tooltipPopper,
  contentSlot,
  preview: preview$1
};
const cssModules$a = {
  "$style": style0$a
};
const CategorizedItemsRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__cssModules", cssModules$a]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "OpenTemplateItem",
  props: {
    openTemplate: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_node_icon = N8nNodeIcon;
      const _component_NodeIcon = NodeIcon;
      const _component_N8nNodeCreatorNode = NodeCreatorNode;
      return openBlock(), createBlock(_component_N8nNodeCreatorNode, {
        class: normalizeClass({ [_ctx.$style.creatorOpenTemplate]: true, [_ctx.$style.compact]: _ctx.openTemplate.compact }),
        title: _ctx.openTemplate.title,
        description: _ctx.openTemplate.description,
        tag: _ctx.openTemplate.tag,
        "show-action-arrow": true,
        "is-trigger": false
      }, createSlots({ _: 2 }, [
        _ctx.openTemplate.icon ? {
          name: "icon",
          fn: withCtx(() => [
            createVNode(_component_n8n_node_icon, {
              type: "icon",
              name: _ctx.openTemplate.icon,
              circle: false,
              "show-tooltip": false,
              "use-updated-icons": true
            }, null, 8, ["name"])
          ]),
          key: "0"
        } : void 0,
        _ctx.openTemplate.nodes ? {
          name: "extraDetails",
          fn: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.openTemplate.nodes, (node) => {
              return openBlock(), createBlock(_component_NodeIcon, {
                key: node.name,
                "node-type": node,
                size: 16,
                "show-tooltip": true
              }, null, 8, ["node-type"]);
            }), 128))
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "title", "description", "tag"]);
    };
  }
});
const creatorOpenTemplate = "_creatorOpenTemplate_1lmxs_123";
const compact = "_compact_1lmxs_131";
const style0$9 = {
  creatorOpenTemplate,
  compact
};
const cssModules$9 = {
  "$style": style0$9
};
const OpenTemplateItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$9]]);
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$3 = ["data-keyboard-nav-type", "data-keyboard-nav-id", "onClick"];
const LAZY_LOAD_THRESHOLD = 20;
const LAZY_LOAD_ITEMS_PER_TICK = 5;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ItemsRenderer",
  props: {
    elements: { default: () => [] },
    activeIndex: {},
    disabled: { type: Boolean },
    lazyRender: { type: Boolean, default: true }
  },
  emits: ["selected", "dragstart", "dragend"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const renderedItems2 = ref([]);
    const renderAnimationRequest = ref(0);
    const { activeViewStack } = useViewStacks();
    const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
    const communityNode = computed(() => activeViewStack.mode === "community-node");
    const isPreview = computed(() => {
      return communityNode.value && !activeViewStack.communityNodeDetails?.installed;
    });
    const highlightActiveItem = computed(() => {
      if (activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed) {
        return false;
      }
      return true;
    });
    function renderItems() {
      if (props.elements.length <= LAZY_LOAD_THRESHOLD || !props.lazyRender) {
        renderedItems2.value = props.elements;
        return;
      }
      if (renderedItems2.value.length < props.elements.length) {
        renderedItems2.value.push(
          ...props.elements.slice(
            renderedItems2.value.length,
            renderedItems2.value.length + LAZY_LOAD_ITEMS_PER_TICK
          )
        );
        renderAnimationRequest.value = window.requestAnimationFrame(renderItems);
      }
    }
    function wrappedEmit(event, element, $e) {
      if (props.disabled) return;
      switch (event) {
        case "dragstart":
        case "dragend":
        case "selected":
          emit("selected", element, $e);
          break;
        default:
          emit(event, element, $e);
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
      renderedItems2.value = [];
    });
    watch(
      () => props.elements,
      () => {
        window.cancelAnimationFrame(renderAnimationRequest.value);
        renderedItems2.value = [];
        renderItems();
      }
    );
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      return _ctx.elements.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.itemsRenderer),
        name: "accordion",
        onBeforeEnter: beforeEnter,
        onEnter: enter,
        onBeforeLeave: beforeLeave,
        onLeave: leave
      }, [
        renderSlot(_ctx.$slots, "default"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.elements, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.uuid
          }, [
            renderedItems2.value.includes(item) ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
              item.type === "section" ? (openBlock(), createBlock(CategorizedItemsRenderer, {
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
                  // Borderless is only applied to views
                  [_ctx.$style.borderless]: item.type === "view" && item.properties.borderless === true
                }),
                "data-test-id": "item-iterator-item",
                "data-keyboard-nav-type": item.type !== "label" ? item.type : void 0,
                "data-keyboard-nav-id": item.uuid,
                onClick: ($event) => wrappedEmit("selected", item)
              }, [
                item.type === "label" ? (openBlock(), createBlock(LabelItem, {
                  key: 0,
                  item
                }, null, 8, ["item"])) : createCommentVNode("", true),
                item.type === "subcategory" ? (openBlock(), createBlock(SubcategoryItem, {
                  key: 1,
                  item: item.properties
                }, null, 8, ["item"])) : createCommentVNode("", true),
                communityNode.value ? (openBlock(), createBlock(CommunityNodeItem, {
                  key: 2,
                  "is-preview": isPreview.value
                }, null, 8, ["is-preview"])) : createCommentVNode("", true),
                item.type === "node" && !communityNode.value ? (openBlock(), createBlock(NodeItem, {
                  key: 3,
                  "node-type": item.properties,
                  active: true,
                  subcategory: item.subcategory
                }, null, 8, ["node-type", "subcategory"])) : createCommentVNode("", true),
                item.type === "action" ? (openBlock(), createBlock(ActionItem, {
                  key: 4,
                  "node-type": item.properties,
                  action: item.properties,
                  active: true
                }, null, 8, ["node-type", "action"])) : item.type === "view" ? (openBlock(), createBlock(ViewItem, {
                  key: 5,
                  view: item.properties,
                  class: normalizeClass(_ctx.$style.viewItem)
                }, null, 8, ["view", "class"])) : item.type === "link" ? (openBlock(), createBlock(LinkItem, {
                  key: 6,
                  link: item.properties,
                  class: normalizeClass(_ctx.$style.linkItem)
                }, null, 8, ["link", "class"])) : item.type === "openTemplate" ? (openBlock(), createBlock(OpenTemplateItem, {
                  key: 7,
                  "open-template": item.properties,
                  class: normalizeClass(_ctx.$style.linkItem)
                }, null, 8, ["open-template", "class"])) : createCommentVNode("", true)
              ], 10, _hoisted_2$3))
            ])) : (openBlock(), createBlock(_component_n8n_loading, {
              key: 1,
              loading: true,
              rows: 1,
              variant: "p",
              class: normalizeClass(_ctx.$style.itemSkeleton)
            }, null, 8, ["class"]))
          ]);
        }), 128))
      ], 34)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.empty)
      }, [
        renderSlot(_ctx.$slots, "empty")
      ], 2));
    };
  }
});
const itemSkeleton = "_itemSkeleton_1y85u_123";
const iteratorItem = "_iteratorItem_1y85u_127";
const label = "_label_1y85u_139";
const category = "_category_1y85u_139";
const active$1 = "_active_1y85u_142";
const empty = "_empty_1y85u_146";
const itemsRenderer = "_itemsRenderer_1y85u_150";
const view = "_view_1y85u_159";
const link = "_link_1y85u_177";
const borderless = "_borderless_1y85u_195";
const preview = "_preview_1y85u_205";
const style0$8 = {
  itemSkeleton,
  iteratorItem,
  label,
  category,
  active: active$1,
  empty,
  itemsRenderer,
  view,
  link,
  borderless,
  preview
};
const cssModules$8 = {
  "$style": style0$8
};
const ItemsRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$8]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "OrderSwitcher",
  props: {
    rootView: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          renderSlot(_ctx.$slots, "actions"),
          renderSlot(_ctx.$slots, "triggers")
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          renderSlot(_ctx.$slots, "triggers"),
          renderSlot(_ctx.$slots, "actions")
        ], 64))
      ]);
    };
  }
});
const _hoisted_1$4 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3M256.1 446.3l-.1-381l175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7"
    }, null, -1)
  ]));
}
const ShieldIcon = { name: "fa-solid-shield-alt", render };
const _hoisted_1$3 = { key: 2 };
const _hoisted_2$2 = { key: 3 };
const _hoisted_3 = { style: { "padding-bottom": "8px" } };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CommunityNodeInfo",
  setup(__props) {
    const { activeViewStack } = useViewStacks();
    const { communityNodeDetails } = activeViewStack;
    const publisherName = ref(void 0);
    const downloads = ref(null);
    const verified = ref(false);
    const official2 = ref(false);
    const installedPackage = ref(void 0);
    const communityNodesStore = useCommunityNodesStore();
    const nodeTypesStore = useNodeTypesStore();
    const isOwner = computed(() => useUsersStore().isInstanceOwner);
    const ownerEmailList = computed(
      () => useUsersStore().allUsers.filter((user) => user.role?.includes("owner")).map((user) => user.email)
    );
    const formatNumber = (number) => {
      if (!number) return null;
      return new Intl.NumberFormat("en-US").format(number);
    };
    async function fetchPackageInfo(packageName) {
      const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(
        activeViewStack.communityNodeDetails?.key || ""
      );
      if (communityNodeDetails?.installed) {
        installedPackage.value = await communityNodesStore.getInstalledPackage(
          communityNodeDetails.packageName
        );
      }
      if (communityNodeAttributes) {
        publisherName.value = communityNodeAttributes.companyName ?? communityNodeAttributes.authorName;
        downloads.value = formatNumber(communityNodeAttributes.numberOfDownloads);
        official2.value = communityNodeAttributes.isOfficialNode;
        if (!installedPackage.value) {
          verified.value = true;
        } else {
          const verifiedVersions = communityNodeAttributes.nodeVersions?.map((v) => v.npmVersion) ?? [];
          verified.value = verifiedVersions.includes(installedPackage.value.installedVersion);
        }
        return;
      }
      const url = `https://registry.npmjs.org/${packageName}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          captureException(new Error("Could not get metadata for package"), { extra: { packageName } });
          return;
        }
        const data = await response.json();
        const publisher = data.maintainers?.[0]?.name;
        publisherName.value = publisher;
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const downloadsUrl = `https://api.npmjs.org/downloads/range/2022-01-01:${today}/${packageName}`;
        const downloadsResponse = await fetch(downloadsUrl);
        if (!downloadsResponse.ok) {
          captureException(new Error("Could not get downloads for package"), {
            extra: { packageName }
          });
          return;
        }
        const downloadsData = await downloadsResponse.json();
        if (!downloadsData.downloads?.length) return;
        const total = downloadsData.downloads.reduce((sum, day) => sum + day.downloads, 0);
        downloads.value = formatNumber(total);
      } catch (error) {
        captureException(error, { extra: { packageName } });
      }
    }
    onMounted(async () => {
      if (communityNodeDetails?.packageName) {
        await fetchPackageInfo(communityNodeDetails.packageName);
      }
    });
    return (_ctx, _cache) => {
      const _component_CommunityNodeUpdateInfo = _sfc_main$o;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(N8nText), {
          class: normalizeClass(_ctx.$style.description),
          color: "text-base",
          size: "medium"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(communityNodeDetails)?.description), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        isOwner.value && installedPackage.value?.updateAvailable ? (openBlock(), createBlock(_component_CommunityNodeUpdateInfo, {
          key: 0,
          "data-test-id": "update-available"
        })) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.separator)
        }, null, 2)),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.info)
        }, [
          verified.value ? (openBlock(), createBlock(unref(N8nTooltip), {
            key: 0,
            placement: "top"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(official2.value ? unref(i18n).baseText("communityNodeInfo.officialApproved") : unref(i18n).baseText("communityNodeInfo.approved")), 1)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(ShieldIcon), {
                  class: normalizeClass(_ctx.$style.tooltipIcon)
                }, null, 8, ["class"]),
                createVNode(unref(N8nText), {
                  color: "text-light",
                  size: "xsmall",
                  bold: "",
                  "data-test-id": "verified-tag"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.approved.label")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })) : (openBlock(), createBlock(unref(N8nTooltip), {
            key: 1,
            placement: "top"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified")), 1)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(N8nIcon), {
                  class: normalizeClass(_ctx.$style.tooltipIcon),
                  icon: "box"
                }, null, 8, ["class"]),
                createVNode(unref(N8nText), {
                  color: "text-light",
                  size: "xsmall",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified.label")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })),
          downloads.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
            createVNode(unref(N8nIcon), {
              class: normalizeClass(_ctx.$style.tooltipIcon),
              icon: "hard-drive-download"
            }, null, 8, ["class"]),
            createVNode(unref(N8nText), {
              color: "text-light",
              size: "xsmall",
              bold: "",
              "data-test-id": "number-of-downloads"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.downloads", { interpolate: { downloads: downloads.value } })), 1)
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          publisherName.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            createVNode(unref(N8nIcon), {
              class: normalizeClass(_ctx.$style.tooltipIcon),
              icon: "user"
            }, null, 8, ["class"]),
            createVNode(unref(N8nText), {
              color: "text-light",
              size: "xsmall",
              bold: "",
              "data-test-id": "publisher-name"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.publishedBy", { interpolate: { publisherName: publisherName.value } })), 1)
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ], 2),
        !isOwner.value && !unref(communityNodeDetails)?.installed ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.contactOwnerHint)
        }, [
          createVNode(unref(N8nIcon), {
            color: "text-light",
            icon: "info",
            size: "large"
          }),
          createVNode(unref(N8nText), {
            color: "text-base",
            size: "medium"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, toDisplayString(unref(i18n).baseText("communityNodeInfo.contact.admin")), 1),
              ownerEmailList.value.length ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                bold: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(ownerEmailList.value.join(", ")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$3 = "_container_6y5mo_123";
const nodeIcon$2 = "_nodeIcon_6y5mo_132";
const description = "_description_6y5mo_137";
const separator = "_separator_6y5mo_141";
const info$1 = "_info_6y5mo_147";
const tooltipIcon = "_tooltipIcon_6y5mo_162";
const contactOwnerHint = "_contactOwnerHint_6y5mo_168";
const style0$7 = {
  container: container$3,
  nodeIcon: nodeIcon$2,
  description,
  separator,
  info: info$1,
  tooltipIcon,
  contactOwnerHint
};
const cssModules$7 = {
  "$style": style0$7
};
const CommunityNodeInfo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$7]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ActionsMode",
  emits: ["nodeTypeSelected"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const telemetry = useTelemetry();
    const i18n2 = useI18n$1();
    const { userActivated, isInstanceOwner } = useUsersStore();
    const { popViewStack, updateCurrentViewStack } = useViewStacks();
    const { registerKeyHook } = useKeyboardNavigation();
    const {
      setAddedNodeActionParameters,
      getActionData,
      actionDataToNodeTypeSelectedPayload,
      getPlaceholderTriggerActions,
      parseCategoryActions,
      actionsCategoryLocales
    } = useActions();
    const nodeCreatorStore = useNodeCreatorStore();
    const calloutHelpers = useCalloutHelpers();
    const parsedTriggerActions = computed(
      () => parseActions(actions.value, actionsCategoryLocales.value.triggers, false)
    );
    const parsedActionActions = computed(
      () => parseActions(actions.value, actionsCategoryLocales.value.actions, !search.value)
    );
    const parsedTriggerActionsBaseline = computed(
      () => parseActions(
        useViewStacks().activeViewStack.baselineItems || [],
        actionsCategoryLocales.value.triggers,
        false
      )
    );
    const parsedActionActionsBaseline = computed(
      () => parseActions(
        useViewStacks().activeViewStack.baselineItems || [],
        actionsCategoryLocales.value.actions,
        !search.value
      )
    );
    const triggerCategoryName = computed(
      () => parsedTriggerActions.value.length || search.value ? actionsCategoryLocales.value.triggers : `${actionsCategoryLocales.value.triggers} (${placeholderTriggerActions.length})`
    );
    const actions = computed(() => {
      return (useViewStacks().activeViewStack.items || []).filter(
        (p) => p.properties.actionKey !== CUSTOM_API_CALL_KEY
      );
    });
    const search = computed(() => useViewStacks().activeViewStack.search);
    const subcategory = computed(() => useViewStacks().activeViewStack.subcategory);
    const rootView = computed(() => useViewStacks().activeViewStack.rootView);
    const communityNodeDetails = computed(() => useViewStacks().activeViewStack?.communityNodeDetails);
    const placeholderTriggerActions = getPlaceholderTriggerActions(subcategory.value || "");
    const hasNoTriggerActions = computed(
      () => parseCategoryActions(
        useViewStacks().activeViewStack.baselineItems || [],
        actionsCategoryLocales.value.triggers,
        !search.value
      ).length === 0
    );
    const containsAPIAction = computed(() => {
      const actions2 = useViewStacks().activeViewStack.baselineItems || [];
      const result = actions2.some((p) => {
        return (p.properties.actionKey ?? "") === CUSTOM_API_CALL_KEY;
      });
      return result;
    });
    const isTriggerRootView = computed(() => rootView.value === TRIGGER_NODE_CREATOR_VIEW);
    const shouldShowTriggers = computed(() => {
      if (communityNodeDetails.value && !parsedTriggerActions.value.length) {
        return !isNodePreviewKey(useViewStacks().activeViewStack?.items?.[0].key) && isTriggerRootView.value;
      }
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
      const mergedActions = [...actions.value, ...placeholderTriggerActions];
      const activeAction = mergedActions.find((a) => a.uuid === activeItemId);
      if (activeAction) onSelected(activeAction);
    }
    function onSelected(actionCreateElement) {
      if (actionCreateElement.type === "openTemplate") {
        calloutHelpers.openSampleWorkflowTemplate(actionCreateElement.properties.templateId, {
          telemetry: {
            source: "nodeCreator",
            section: useViewStacks().activeViewStack.title
          }
        });
      }
      if (actionCreateElement.type !== "action") return;
      const actionData = getActionData(actionCreateElement.properties);
      const isPlaceholderTriggerAction = placeholderTriggerActions.some(
        (p) => p.key === actionCreateElement.key
      );
      if (isPlaceholderTriggerAction && isTriggerRootView.value) {
        const actionNode = actions.value[0]?.key;
        if (actionNode) emit("nodeTypeSelected", [{ type: actionData.key }, { type: actionNode }]);
      } else if (actionData?.key === OPEN_AI_NODE_TYPE && actionData?.value?.resource === "assistant" && actionData?.value?.operation === "message") {
        emit("nodeTypeSelected", [{ type: OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE }]);
      } else if (isNodePreviewKey(actionData?.key)) {
        return;
      } else {
        const payload = actionDataToNodeTypeSelectedPayload(actionData);
        emit("nodeTypeSelected", [payload]);
      }
      if (telemetry) setAddedNodeActionParameters(actionData, telemetry, rootView.value);
    }
    function trackActionsView() {
      const activeViewStack = useViewStacks().activeViewStack;
      const trigger_action_count = (activeViewStack.baselineItems || [])?.filter(
        (action2) => action2.key.toLowerCase().includes("trigger")
      ).length;
      const appIdentifier = [...actions.value, ...placeholderTriggerActions][0].key;
      const trackingPayload = {
        app_identifier: appIdentifier,
        actions: (activeViewStack.baselineItems || [])?.map(
          (action2) => action2.properties.displayName
        ),
        regular_action_count: (activeViewStack.baselineItems || [])?.length - trigger_action_count,
        trigger_action_count
      };
      void useExternalHooks().run("nodeCreateList.onViewActions", trackingPayload);
      nodeCreatorStore.onViewActions(trackingPayload);
    }
    function resetSearch2() {
      updateCurrentViewStack({ search: "" });
    }
    function addHttpNode() {
      const updateData = {
        name: "",
        key: HTTP_REQUEST_NODE_TYPE,
        value: {
          authentication: "predefinedCredentialType"
        }
      };
      emit("nodeTypeSelected", [{ type: HTTP_REQUEST_NODE_TYPE }]);
      if (telemetry) setAddedNodeActionParameters(updateData);
      const app_identifier = actions.value[0]?.key;
      if (!app_identifier) return;
      void useExternalHooks().run("nodeCreateList.onActionsCustmAPIClicked", {
        app_identifier
      });
      nodeCreatorStore.onActionsCustomAPIClicked({ app_identifier });
    }
    onMounted(() => {
      trackActionsView();
    });
    const callouts = computed(
      () => getActiveViewCallouts(
        useViewStacks().activeViewStack.title,
        calloutHelpers.isPreBuiltAgentsCalloutVisible.value,
        calloutHelpers.getPreBuiltAgentNodeCreatorItems()
      )
    );
    return (_ctx, _cache) => {
      const _component_n8n_callout = N8nCallout;
      const _component_n8n_info_tip = InfoTip;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({
          [_ctx.$style.container]: true,
          [_ctx.$style.containerPaddingBottom]: !communityNodeDetails.value
        })
      }, [
        createVNode(ItemsRenderer, {
          elements: callouts.value,
          class: normalizeClass(_ctx.$style.items),
          onSelected
        }, null, 8, ["elements", "class"]),
        communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeInfo, { key: 0 })) : createCommentVNode("", true),
        rootView.value ? (openBlock(), createBlock(_sfc_main$9, {
          key: 1,
          "root-view": rootView.value
        }, createSlots({ _: 2 }, [
          shouldShowTriggers.value ? {
            name: "triggers",
            fn: withCtx(() => [
              withMemo([search.value], () => createVNode(CategorizedItemsRenderer, {
                elements: parsedTriggerActions.value,
                category: triggerCategoryName.value,
                "mouse-over-tooltip": unref(i18n2).baseText("nodeCreator.actionsTooltip.triggersStartWorkflow"),
                "is-trigger-category": "",
                expanded: isTriggerRootView.value || parsedActionActions.value.length === 0,
                onSelected
              }, createSlots({ _: 2 }, [
                hasNoTriggerActions.value ? {
                  name: "empty",
                  fn: withCtx(() => [
                    hasNoTriggerActions.value ? (openBlock(), createBlock(_component_n8n_callout, {
                      key: 0,
                      theme: "info",
                      iconless: "",
                      slim: "",
                      "data-test-id": "actions-panel-no-triggers-callout"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createBaseVNode("span", null, null, 512), [
                          [
                            _directive_n8n_html,
                            unref(i18n2).baseText("nodeCreator.actionsCallout.noTriggerItems", {
                              interpolate: { nodeName: subcategory.value ?? "" }
                            })
                          ]
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(ItemsRenderer, {
                      elements: unref(placeholderTriggerActions),
                      onSelected
                    }, null, 8, ["elements"])
                  ]),
                  key: "0"
                } : {
                  name: "empty",
                  fn: withCtx(() => [
                    withDirectives(createBaseVNode("p", {
                      class: normalizeClass(_ctx.$style.resetSearch),
                      onClick: resetSearch2
                    }, null, 2), [
                      [_directive_n8n_html, unref(i18n2).baseText("nodeCreator.actionsCategory.noMatchingTriggers")]
                    ])
                  ]),
                  key: "1"
                }
              ]), 1032, ["elements", "category", "mouse-over-tooltip", "expanded"]), _cache, 0)
            ]),
            key: "0"
          } : void 0,
          !isTriggerRootView.value || parsedActionActionsBaseline.value.length !== 0 ? {
            name: "actions",
            fn: withCtx(() => [
              withMemo([search.value], () => createVNode(CategorizedItemsRenderer, {
                elements: parsedActionActions.value,
                category: unref(actionsCategoryLocales).actions,
                "mouse-over-tooltip": unref(i18n2).baseText("nodeCreator.actionsTooltip.actionsPerformStep"),
                expanded: !isTriggerRootView.value || parsedTriggerActions.value.length === 0,
                onSelected
              }, {
                empty: withCtx(() => [
                  !search.value ? (openBlock(), createBlock(_component_n8n_info_tip, {
                    key: 0,
                    theme: "info",
                    type: "note",
                    class: normalizeClass(_ctx.$style.actionsEmpty)
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("span", null, null, 512), [
                        [
                          _directive_n8n_html,
                          unref(i18n2).baseText("nodeCreator.actionsCallout.noActionItems", {
                            interpolate: { nodeName: subcategory.value ?? "" }
                          })
                        ]
                      ])
                    ]),
                    _: 1
                  }, 8, ["class"])) : withDirectives((openBlock(), createElementBlock("p", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.resetSearch),
                    "data-test-id": "actions-panel-no-matching-actions",
                    onClick: resetSearch2
                  }, null, 2)), [
                    [_directive_n8n_html, unref(i18n2).baseText("nodeCreator.actionsCategory.noMatchingActions")]
                  ])
                ]),
                default: withCtx(() => [
                  !unref(userActivated) && isTriggerRootView.value ? (openBlock(), createBlock(_component_n8n_callout, {
                    key: 0,
                    theme: "info",
                    iconless: "",
                    slim: "",
                    "data-test-id": "actions-panel-activation-callout"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("span", null, null, 512), [
                        [_directive_n8n_html, unref(i18n2).baseText("nodeCreator.actionsCallout.triggersStartWorkflow")]
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["elements", "category", "mouse-over-tooltip", "expanded"]), _cache, 1)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["root-view"])) : createCommentVNode("", true),
        containsAPIAction.value && !communityNodeDetails.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.apiHint)
        }, [
          withDirectives(createBaseVNode("span", {
            onClick: withModifiers(addHttpNode, ["prevent"])
          }, null, 512), [
            [
              _directive_n8n_html,
              unref(i18n2).baseText("nodeCreator.actionsList.apiCall", {
                interpolate: { node: subcategory.value ?? "" }
              })
            ]
          ])
        ], 2)) : createCommentVNode("", true),
        communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeFooter, {
          key: 3,
          class: normalizeClass(_ctx.$style.communityNodeFooter),
          "package-name": communityNodeDetails.value.packageName,
          "show-manage": communityNodeDetails.value.installed && unref(isInstanceOwner)
        }, null, 8, ["class", "package-name", "show-manage"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$2 = "_container_ikzr4_123";
const containerPaddingBottom = "_containerPaddingBottom_ikzr4_129";
const communityNodeFooter = "_communityNodeFooter_ikzr4_133";
const resetSearch = "_resetSearch_ikzr4_137";
const actionsEmpty = "_actionsEmpty_ikzr4_151";
const apiHint = "_apiHint_ikzr4_159";
const style0$6 = {
  container: container$2,
  containerPaddingBottom,
  communityNodeFooter,
  resetSearch,
  actionsEmpty,
  apiHint
};
const cssModules$6 = {
  "$style": style0$6
};
const ActionsRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$6]]);
const _sfc_main$6 = {};
const _hoisted_1$2 = {
  width: "75px",
  height: "75px",
  viewBox: "0 0 75 75",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<title>no-nodes-keyart</title><g id="Nodes-panel-prototype-V2.1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="nodes-panel-(component)" transform="translate(-2085.000000, -352.000000)"><g id="nodes_panel" transform="translate(1880.000000, 151.000000)"><g id="Panel" transform="translate(50.000000, 0.000000)"><g id="Group-3" transform="translate(105.000000, 171.000000)"><g id="no-nodes-keyart" transform="translate(50.000000, 30.000000)"><rect id="Rectangle" x="0" y="0" width="75" height="75"></rect><g id="Group" transform="translate(6.562500, 8.164062)" fill="#C4C8D1" fill-rule="nonzero"><polygon id="Rectangle" transform="translate(49.192016, 45.302553) rotate(-45.000000) translate(-49.192016, -45.302553) " points="44.5045606 32.0526802 53.8794707 32.0526802 53.8794707 58.5524261 44.5045606 58.5524261"></polygon><path id="Path" d="M48.125,23.0859375 C54.15625,23.0859375 59.0625,18.1796875 59.0625,12.1484375 C59.0625,10.3359375 58.5625,8.6484375 57.78125,7.1484375 L49.34375,15.5859375 L44.6875,10.9296875 L53.125,2.4921875 C51.625,1.7109375 49.9375,1.2109375 48.125,1.2109375 C42.09375,1.2109375 37.1875,6.1171875 37.1875,12.1484375 C37.1875,13.4296875 37.4375,14.6484375 37.84375,15.7734375 L32.0625,21.5546875 L26.5,15.9921875 L28.71875,13.7734375 L24.3125,9.3671875 L30.9375,2.7421875 C27.28125,-0.9140625 21.34375,-0.9140625 17.6875,2.7421875 L6.625,13.8046875 L11.03125,18.2109375 L2.21875,18.2109375 L1.38777878e-15,20.4296875 L11.0625,31.4921875 L13.28125,29.2734375 L13.28125,20.4296875 L17.6875,24.8359375 L19.90625,22.6171875 L25.46875,28.1796875 L2.3125,51.3359375 L8.9375,57.9609375 L44.5,22.4296875 C45.625,22.8359375 46.84375,23.0859375 48.125,23.0859375 Z"></path></g></g></g></g></g></g></g>', 2)
  ]));
}
const NoResultsIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render]]);
const _hoisted_1$1 = ["textContent"];
const _hoisted_2$1 = ["textContent"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NoResults",
  props: {
    showIcon: { type: Boolean },
    showRequest: { type: Boolean },
    rootView: {}
  },
  setup(__props) {
    const i18n2 = useI18n$1();
    return (_ctx, _cache) => {
      const _component_n8n_link = N8nLink;
      const _component_n8n_icon = N8nIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ [_ctx.$style.noResults]: true, [_ctx.$style.iconless]: !_ctx.showIcon }),
        "data-test-id": "node-creator-no-results"
      }, [
        _ctx.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.icon)
        }, [
          createVNode(NoResultsIcon)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.title)
        }, [
          renderSlot(_ctx.$slots, "title"),
          createBaseVNode("p", {
            textContent: toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.weDidntMakeThatYet"))
          }, null, 8, _hoisted_1$1),
          _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) || _ctx.rootView === unref(TRIGGER_NODE_CREATOR_VIEW) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.action)
          }, [
            createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe")) + " ", 1),
            _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) ? (openBlock(), createBlock(_component_n8n_link, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("addHttpNode"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.httpRequest")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.rootView === unref(TRIGGER_NODE_CREATOR_VIEW) ? (openBlock(), createBlock(_component_n8n_link, {
              key: 1,
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("addWebhookNode"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.webhook")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.node")), 1)
          ], 2)) : createCommentVNode("", true)
        ], 2),
        _ctx.showRequest ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.request)
        }, [
          createBaseVNode("p", {
            textContent: toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.wantUsToMakeItFaster"))
          }, null, 8, _hoisted_2$1),
          createBaseVNode("div", null, [
            createVNode(_component_n8n_link, { to: unref(REQUEST_NODE_FORM_URL) }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.requestTheNode")), 1),
                _cache[2] || (_cache[2] = createTextVNode("  ")),
                createBaseVNode("span", null, [
                  createVNode(_component_n8n_icon, {
                    class: normalizeClass(_ctx.$style.external),
                    icon: "external-link",
                    title: unref(i18n2).baseText("nodeCreator.noResults.requestTheNode")
                  }, null, 8, ["class", "title"])
                ])
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const noResults = "_noResults_17xen_123";
const title$2 = "_title_17xen_136";
const action = "_action_17xen_145";
const request = "_request_17xen_146";
const icon = "_icon_17xen_162";
const external = "_external_17xen_168";
const style0$5 = {
  noResults,
  title: title$2,
  action,
  request,
  icon,
  external
};
const cssModules$5 = {
  "$style": style0$5
};
const NoResults = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$5]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NodesMode",
  emits: ["nodeTypeSelected"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n2 = useI18n$1();
    const calloutHelpers = useCalloutHelpers();
    const { mergedNodes, actions, onSubcategorySelected } = useNodeCreatorStore();
    const { pushViewStack, popViewStack, isAiSubcategoryView } = useViewStacks();
    const { setAddedNodeActionParameters, nodeCreateElementToNodeTypeSelectedPayload } = useActions();
    const { registerKeyHook } = useKeyboardNavigation();
    const activeViewStack = computed(() => useViewStacks().activeViewStack);
    const globalSearchItemsDiff = computed(() => useViewStacks().globalSearchItemsDiff);
    const communityNodesAndActions = computed(() => useNodeTypesStore().communityNodesAndActions);
    const moreFromCommunity = computed(() => {
      return filterAndSearchNodes(
        communityNodesAndActions.value.mergedNodes,
        activeViewStack.value.search ?? "",
        isAiSubcategoryView(activeViewStack.value)
      );
    });
    const isSearchResultEmpty = computed(() => {
      return (activeViewStack.value.items || []).length === 0 && globalCallouts.value.length + globalSearchItemsDiff.value.length + moreFromCommunity.value.length === 0;
    });
    function getFilteredActions(node, actions2) {
      const nodeActions = actions2?.[node.key] || [];
      if (activeViewStack.value.subcategory === HITL_SUBCATEGORY) {
        return getHumanInTheLoopActions(nodeActions);
      }
      if (activeViewStack.value.actionsFilter) {
        return activeViewStack.value.actionsFilter(nodeActions);
      }
      return nodeActions;
    }
    function onSelected(item) {
      if (item.key === PRE_BUILT_AGENTS_COLLECTION) {
        void calloutHelpers.openPreBuiltAgentsCollection({
          telemetry: {
            source: "nodeCreator",
            section: activeViewStack.value.title
          },
          resetStacks: false
        });
        return;
      }
      if (item.type === "subcategory") {
        const subcategoryKey = camelCase(item.properties.title);
        const title2 = i18n2.baseText(`nodeCreator.subcategoryNames.${subcategoryKey}`);
        const infoKey = `nodeCreator.subcategoryInfos.${subcategoryKey}`;
        const info2 = i18n2.baseText(infoKey);
        const extendedInfo = info2 !== infoKey ? { info: info2 } : {};
        const nodeIcon2 = item.properties.icon ? { type: "icon", name: item.properties.icon } : void 0;
        pushViewStack({
          subcategory: item.key,
          mode: "nodes",
          title: title2,
          nodeIcon: nodeIcon2,
          ...extendedInfo,
          ...item.properties.panelClass ? { panelClass: item.properties.panelClass } : {},
          rootView: activeViewStack.value.rootView,
          forceIncludeNodes: item.properties.forceIncludeNodes,
          baseFilter: baseSubcategoriesFilter,
          itemsMapper: subcategoriesMapper,
          sections: item.properties.sections
        });
        onSubcategorySelected({
          subcategory: item.key
        });
      }
      if (item.type === "node") {
        let nodeActions = getFilteredActions(item, actions);
        if (shouldShowCommunityNodeDetails(isCommunityPackageName(item.key), activeViewStack.value)) {
          if (!nodeActions.length) {
            nodeActions = getFilteredActions(item, communityNodesAndActions.value.actions);
          }
          const viewStack = prepareCommunityNodeDetailsViewStack(
            item,
            getNodeIconSource(item.properties),
            activeViewStack.value.rootView,
            nodeActions
          );
          pushViewStack(viewStack);
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
        const transformedActions = nodeActions?.map(
          (a) => transformNodeType(a, item.properties.displayName, "action")
        );
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
          [AI_NODE_CREATOR_VIEW]: AIView,
          [AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView
        };
        const itemKey = item.key;
        const matchedView = views[itemKey];
        if (!matchedView) {
          console.warn(`No view found for ${itemKey}`);
          return;
        }
        const view2 = matchedView(mergedNodes);
        pushViewStack({
          title: view2.title,
          subtitle: view2?.subtitle ?? "",
          info: view2?.info ?? "",
          items: view2.items,
          hasSearch: true,
          rootView: view2.value,
          mode: "nodes",
          // Root search should include all nodes
          searchItems: mergedNodes
        });
      }
      if (item.type === "link") {
        window.open(item.properties.url, "_blank");
      }
      if (item.type === "openTemplate") {
        calloutHelpers.openSampleWorkflowTemplate(item.properties.templateId, {
          telemetry: {
            source: "nodeCreator",
            section: activeViewStack.value.title
          }
        });
      }
    }
    function subcategoriesMapper(item) {
      if (item.type !== "node") return item;
      const hasTriggerGroup = item.properties.group.includes("trigger");
      const nodeActions = getFilteredActions(item, actions);
      const hasActions = nodeActions.length > 0;
      if (hasTriggerGroup && hasActions) {
        if (item.properties?.codex) {
          item.properties.codex.alias = [
            ...item.properties.codex?.alias || [],
            item.properties.displayName
          ];
        }
        item.properties.displayName = item.properties.displayName.replace(" Trigger", "");
      }
      return item;
    }
    function baseSubcategoriesFilter(item) {
      if (item.type === "section") return true;
      if (item.type !== "node") return false;
      const hasTriggerGroup = item.properties.group.includes("trigger");
      const nodeActions = getFilteredActions(item, actions);
      const hasActions = nodeActions.length > 0;
      const isTriggerRootView = activeViewStack.value.rootView === TRIGGER_NODE_CREATOR_VIEW;
      if (isTriggerRootView) {
        return hasActions || hasTriggerGroup;
      }
      return hasActions || !hasTriggerGroup;
    }
    const globalCallouts = computed(() => [
      ...getRootSearchCallouts(activeViewStack.value.search ?? "", {
        isRagStarterCalloutVisible: calloutHelpers.isRagStarterCalloutVisible.value
      }),
      ...getActiveViewCallouts(
        activeViewStack.value.title,
        calloutHelpers.isPreBuiltAgentsCalloutVisible.value,
        calloutHelpers.getPreBuiltAgentNodeCreatorItems()
      )
    ]);
    function arrowLeft() {
      popViewStack();
    }
    function onKeySelect(activeItemId) {
      const mergedItems = flattenCreateElements([
        ...globalCallouts.value ?? [],
        ...activeViewStack.value.items ?? [],
        ...globalSearchItemsDiff.value ?? [],
        ...moreFromCommunity.value ?? []
      ]);
      const item = mergedItems.find((i) => i.uuid === activeItemId);
      if (!item) return;
      onSelected(item);
    }
    registerKeyHook("MainViewArrowRight", {
      keyboardKeys: ["ArrowRight", "Enter"],
      condition: (type) => ["subcategory", "node", "link", "view", "openTemplate"].includes(type),
      handler: onKeySelect
    });
    registerKeyHook("MainViewArrowLeft", {
      keyboardKeys: ["ArrowLeft"],
      condition: (type) => ["subcategory", "node", "link", "view", "openTemplate"].includes(type),
      handler: arrowLeft
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        createVNode(ItemsRenderer, {
          elements: globalCallouts.value,
          class: normalizeClass(_ctx.$style.items),
          onSelected
        }, null, 8, ["elements", "class"]),
        withMemo([activeViewStack.value.search], () => createVNode(ItemsRenderer, {
          elements: activeViewStack.value.items,
          class: normalizeClass(_ctx.$style.items),
          onSelected
        }, createSlots({ _: 2 }, [
          isSearchResultEmpty.value ? {
            name: "empty",
            fn: withCtx(() => [
              createVNode(NoResults, {
                "root-view": activeViewStack.value.rootView,
                "show-icon": "",
                "show-request": "",
                onAddWebhookNode: _cache[0] || (_cache[0] = ($event) => emit("nodeTypeSelected", [{ type: unref(WEBHOOK_NODE_TYPE) }])),
                onAddHttpNode: _cache[1] || (_cache[1] = ($event) => emit("nodeTypeSelected", [{ type: unref(HTTP_REQUEST_NODE_TYPE) }]))
              }, null, 8, ["root-view"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["elements", "class"]), _cache, 2),
        globalSearchItemsDiff.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer, {
          key: 0,
          elements: globalSearchItemsDiff.value,
          category: unref(i18n2).baseText("nodeCreator.categoryNames.otherCategories"),
          expanded: true,
          onSelected
        }, null, 8, ["elements", "category"])) : createCommentVNode("", true),
        moreFromCommunity.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer, {
          key: 1,
          elements: moreFromCommunity.value,
          category: unref(i18n2).baseText("nodeCreator.categoryNames.moreFromCommunity"),
          expanded: true,
          onSelected
        }, null, 8, ["elements", "category"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const items = "_items_1i9xd_123";
const style0$4 = {
  items
};
const cssModules$4 = {
  "$style": style0$4
};
const NodesRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommunityNodeDetails",
  setup(__props) {
    const {
      activeViewStack,
      pushViewStack,
      popViewStack,
      getAllNodeCreateElements,
      updateCurrentViewStack
    } = useViewStacks();
    const { communityNodeDetails } = activeViewStack;
    const loading = ref(false);
    const communityNodesStore = useCommunityNodesStore();
    const nodeCreatorStore = useNodeCreatorStore();
    const toast = useToast();
    const isOwner = computed(() => useUsersStore().isInstanceOwner);
    const updateViewStack = (key) => {
      const installedNodeKey = removePreviewToken(key);
      const installedNode = getAllNodeCreateElements().find((node) => node.key === installedNodeKey);
      if (installedNode) {
        const nodeActions = nodeCreatorStore.actions?.[installedNode.key] || [];
        popViewStack();
        updateCurrentViewStack({ searchItems: nodeCreatorStore.mergedNodes });
        const viewStack = prepareCommunityNodeDetailsViewStack(
          installedNode,
          getNodeIconSource(installedNode.properties),
          activeViewStack.rootView,
          nodeActions
        );
        pushViewStack(viewStack, {
          transitionDirection: "none"
        });
      } else {
        const viewStack = { ...activeViewStack };
        viewStack.communityNodeDetails.installed = true;
        pushViewStack(activeViewStack, { resetStacks: true });
      }
    };
    const updateStoresAndViewStack = async (key) => {
      await useNodeTypesStore().getNodeTypes();
      await useCredentialsStore().fetchCredentialTypes(true);
      updateViewStack(key);
      nodeCreatorStore.removeNodeFromMergedNodes(key);
    };
    const getNpmVersion = async (key) => {
      const communityNodeAttributes = await useNodeTypesStore().getCommunityNodeAttributes(key);
      if (communityNodeAttributes) {
        return communityNodeAttributes.npmVersion;
      }
      return void 0;
    };
    const onInstall = async () => {
      if (isOwner.value && activeViewStack.communityNodeDetails && !communityNodeDetails?.installed) {
        const { key, packageName } = activeViewStack.communityNodeDetails;
        try {
          loading.value = true;
          await communityNodesStore.installPackage(packageName, true, await getNpmVersion(key));
          await updateStoresAndViewStack(key);
          toast.showMessage({
            title: i18n.baseText("settings.communityNodes.messages.install.success"),
            type: "success"
          });
        } catch (error) {
          toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
        } finally {
          loading.value = false;
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_NodeIcon = NodeIcon;
      const _component_N8nTooltip = N8nTooltip;
      const _component_N8nIcon = N8nIcon;
      const _component_N8nButton = N8nButton;
      return unref(communityNodeDetails) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.title)
          }, [
            unref(communityNodeDetails).nodeIcon ? (openBlock(), createBlock(_component_NodeIcon, {
              key: 0,
              class: normalizeClass(_ctx.$style.nodeIcon),
              "icon-source": unref(communityNodeDetails).nodeIcon,
              circle: false,
              "show-tooltip": false
            }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
            createBaseVNode("span", null, toDisplayString(unref(communityNodeDetails).title), 1),
            unref(communityNodeDetails).official ? (openBlock(), createBlock(_component_N8nTooltip, {
              key: 1,
              placement: "bottom",
              "show-after": 500
            }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", {
                  interpolate: {
                    author: unref(communityNodeDetails).companyName ?? unref(communityNodeDetails).title
                  }
                })), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(OfficialIcon), {
                  class: normalizeClass(_ctx.$style.officialIcon)
                }, null, 8, ["class"])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 2),
          createBaseVNode("div", null, [
            unref(communityNodeDetails).installed ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.installed)
            }, [
              !unref(communityNodeDetails).official ? (openBlock(), createBlock(_component_N8nIcon, {
                key: 0,
                class: normalizeClass(_ctx.$style.installedIcon),
                icon: "box"
              }, null, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(N8nText), {
                color: "text-light",
                size: "small",
                bold: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeDetails.installed")), 1)
                ]),
                _: 1
              })
            ], 2)) : createCommentVNode("", true),
            isOwner.value && !unref(communityNodeDetails).installed ? (openBlock(), createBlock(_component_N8nButton, {
              key: 1,
              loading: loading.value,
              disabled: loading.value,
              label: unref(i18n).baseText("communityNodeDetails.install"),
              size: "small",
              "data-test-id": "install-community-node-button",
              onClick: onInstall
            }, null, 8, ["loading", "disabled", "label"])) : createCommentVNode("", true)
          ])
        ], 2)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$1 = "_container_1ut3v_123";
const header$1 = "_header_1ut3v_131";
const title$1 = "_title_1ut3v_138";
const nodeIcon$1 = "_nodeIcon_1ut3v_146";
const installedIcon = "_installedIcon_1ut3v_151";
const officialIcon = "_officialIcon_1ut3v_157";
const installed = "_installed_1ut3v_151";
const style0$3 = {
  container: container$1,
  header: header$1,
  title: title$1,
  nodeIcon: nodeIcon$1,
  installedIcon,
  officialIcon,
  installed
};
const cssModules$3 = {
  "$style": style0$3
};
const CommunityNodeDetails = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommunityNodeDocsLink",
  props: {
    packageName: {}
  },
  setup(__props) {
    const props = __props;
    const openCommunityNodeDocsPage = () => {
      const newTab = window.open(`https://www.npmjs.com/package/${props.packageName}`, "_blank");
      if (newTab) newTab.opener = null;
    };
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      return openBlock(), createBlock(unref(N8nLink), {
        theme: "text",
        class: normalizeClass(_ctx.$style.container),
        title: unref(i18n).baseText("communityNodesDocsLink.link.title"),
        onClick: openCommunityNodeDocsPage
      }, {
        default: withCtx(() => [
          createVNode(unref(N8nText), {
            size: "small",
            bold: "",
            style: { "margin-right": "5px" }
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("communityNodesDocsLink.title")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_N8nIcon, { icon: "external-link" })
        ]),
        _: 1
      }, 8, ["class", "title"]);
    };
  }
});
const container = "_container_x2no6_123";
const style0$2 = {
  container
};
const cssModules$2 = {
  "$style": style0$2
};
const CommunityNodeDocsLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1 = ["textContent"];
const _hoisted_2 = ["textContent"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NodesListPanel",
  setup(__props) {
    const i18n2 = useI18n$1();
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
      if (communityNodeDetails.value) {
        node = communityNodeDetails.value.title;
      }
      if (isActionsMode.value) {
        return i18n2.baseText("nodeCreator.actionsCategory.searchActions", {
          interpolate: { node }
        });
      }
      return i18n2.baseText("nodeCreator.searchBar.searchNodes");
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
      if (activeViewStack.value.mode === "actions") {
        return 1;
      } else if (activeViewStack.value.sections) {
        return search ? 0 : 1;
      }
      return 0;
    }
    function onSearch(value) {
      if (activeViewStack.value.uuid) {
        updateCurrentViewStack({ search: value });
        void setActiveItemIndex(getDefaultActiveIndex(value));
        if (value.length) {
          callDebounced(
            nodeCreatorStore.onNodeFilterChanged,
            { trailing: true, debounceTime: 2e3 },
            {
              newValue: value,
              filteredNodes: activeViewStack.value.items ?? [],
              filterMode: activeViewStack.value.rootView ?? "Regular",
              subcategory: activeViewStack.value.subcategory,
              title: activeViewStack.value.title
            }
          );
        }
      }
    }
    function onTransitionEnd() {
      void setActiveItemIndex(getDefaultActiveIndex());
    }
    onMounted(() => {
      attachKeydownEvent();
      void setActiveItemIndex(getDefaultActiveIndex());
    });
    onUnmounted(() => {
      detachKeydownEvent();
    });
    watch(
      () => nodeCreatorView.value,
      (selectedView) => {
        const views = {
          [TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
          [REGULAR_NODE_CREATOR_VIEW]: RegularView,
          [AI_NODE_CREATOR_VIEW]: AIView,
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
        const view2 = matchedView(mergedNodes);
        pushViewStack({
          title: view2.title,
          subtitle: view2?.subtitle ?? "",
          items: view2.items,
          info: view2.info,
          hasSearch: true,
          mode: "nodes",
          rootView: selectedView,
          // Root search should include all nodes
          searchItems: mergedNodes
        });
      },
      { immediate: true }
    );
    function onBackButton() {
      popViewStack();
    }
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_notice = N8nNotice;
      return viewStacks.value.length > 0 ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: `panel-slide-${activeViewStack.value.transitionDirection}`,
        onAfterLeave: onTransitionEnd
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("aside", {
            key: `${activeViewStack.value.uuid}`,
            class: normalizeClass([_ctx.$style.nodesListPanel, activeViewStack.value.panelClass]),
            onKeydownCapture: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createBaseVNode("header", {
              class: normalizeClass({
                [_ctx.$style.header]: true,
                [_ctx.$style.hasBg]: !activeViewStack.value.subtitle,
                "nodes-list-panel-header": true
              }),
              "data-test-id": "nodes-list-header"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.top)
              }, [
                viewStacks.value.length > 1 && !activeViewStack.value.preventBack ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.backButton),
                  onClick: onBackButton
                }, [
                  createVNode(_component_n8n_icon, {
                    class: normalizeClass(_ctx.$style.backButtonIcon),
                    icon: "arrow-left",
                    size: 22
                  }, null, 8, ["class"])
                ], 2)) : createCommentVNode("", true),
                activeViewStack.value.nodeIcon ? (openBlock(), createBlock(NodeIcon, {
                  key: 1,
                  class: normalizeClass(_ctx.$style.nodeIcon),
                  "icon-source": activeViewStack.value.nodeIcon,
                  circle: false,
                  "show-tooltip": false,
                  size: 20,
                  "use-updated-icons": true
                }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
                activeViewStack.value.title ? (openBlock(), createElementBlock("p", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.title),
                  textContent: toDisplayString(activeViewStack.value.title)
                }, null, 10, _hoisted_1)) : createCommentVNode("", true),
                communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDocsLink, {
                  key: 3,
                  "package-name": communityNodeDetails.value.packageName
                }, null, 8, ["package-name"])) : createCommentVNode("", true)
              ], 2),
              activeViewStack.value.subtitle ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass({ [_ctx.$style.subtitle]: true, [_ctx.$style.offsetSubtitle]: viewStacks.value.length > 1 }),
                textContent: toDisplayString(activeViewStack.value.subtitle)
              }, null, 10, _hoisted_2)) : createCommentVNode("", true)
            ], 2),
            showSearchBar.value ? (openBlock(), createBlock(SearchBar, {
              key: 0,
              class: normalizeClass(_ctx.$style.searchBar),
              placeholder: searchPlaceholder.value ? searchPlaceholder.value : unref(i18n2).baseText("nodeCreator.searchBar.searchNodes"),
              "model-value": activeViewStack.value.search,
              "onUpdate:modelValue": onSearch
            }, null, 8, ["class", "placeholder", "model-value"])) : createCommentVNode("", true),
            communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDetails, { key: 1 })) : createCommentVNode("", true),
            communityNodeDetails.value && !isActionsMode.value ? (openBlock(), createBlock(CommunityNodeInfo, { key: 2 })) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.renderedItems)
            }, [
              activeViewStack.value.info && !activeViewStack.value.search ? (openBlock(), createBlock(_component_n8n_notice, {
                key: 0,
                class: normalizeClass(_ctx.$style.info),
                content: activeViewStack.value.info,
                theme: "warning"
              }, null, 8, ["class", "content"])) : createCommentVNode("", true),
              isActionsMode.value && activeViewStack.value.subcategory ? (openBlock(), createBlock(ActionsRenderer, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), null, 16)) : (openBlock(), createBlock(NodesRenderer, mergeProps({
                key: 2,
                "root-view": nodeCreatorView.value
              }, _ctx.$attrs), null, 16, ["root-view"]))
            ], 2),
            communityNodeDetails.value && !isCommunityNodeActionsMode.value ? (openBlock(), createBlock(CommunityNodeFooter, {
              key: 3,
              "package-name": communityNodeDetails.value.packageName,
              "show-manage": communityNodeDetails.value.installed && unref(isInstanceOwner)
            }, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)
          ], 34))
        ]),
        _: 1
      }, 8, ["name"])) : createCommentVNode("", true);
    };
  }
});
const info = "_info_cdy1m_145";
const backButton = "_backButton_cdy1m_149";
const backButtonIcon = "_backButtonIcon_cdy1m_156";
const nodeIcon = "_nodeIcon_cdy1m_161";
const renderedItems = "_renderedItems_cdy1m_166";
const searchBar = "_searchBar_cdy1m_178";
const nodesListPanel = "_nodesListPanel_cdy1m_182";
const footer = "_footer_cdy1m_200";
const top = "_top_cdy1m_211";
const header = "_header_cdy1m_216";
const hasBg = "_hasBg_cdy1m_222";
const title = "_title_cdy1m_227";
const subtitle = "_subtitle_cdy1m_238";
const offsetSubtitle = "_offsetSubtitle_cdy1m_246";
const style0$1 = {
  info,
  backButton,
  backButtonIcon,
  nodeIcon,
  renderedItems,
  searchBar,
  nodesListPanel,
  footer,
  top,
  header,
  hasBg,
  title,
  subtitle,
  offsetSubtitle
};
const cssModules$1 = {
  "$style": style0$1
};
const NodesListPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeCreator",
  props: {
    active: { type: Boolean },
    onNodeTypeSelected: { type: Function }
  },
  emits: ["closeNodeCreator", "nodeTypeSelected"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { resetViewStacks } = useViewStacks();
    const { registerKeyHook } = useKeyboardNavigation();
    const emit = __emit;
    const uiStore = useUIStore();
    const assistantStore = useAssistantStore();
    const builderStore = useBuilderStore();
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
      return { top: `${uiStore.bannersHeight + uiStore.headerHeight}px`, right: `${rightPosition}px` };
    });
    function getRightOffset() {
      if (assistantStore.isAssistantOpen) {
        return assistantStore.chatWidth;
      }
      if (builderStore.isAssistantOpen) {
        return builderStore.chatWidth;
      }
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
      if (!event.dataTransfer) {
        return;
      }
      const dragData = event.dataTransfer.getData(DRAG_EVENT_DATA_KEY);
      const nodeCreatorBoundingRect = state.nodeCreator.getBoundingClientRect();
      if (dragData && event.pageX >= nodeCreatorBoundingRect.x && event.pageY >= nodeCreatorBoundingRect.y) {
        event.stopPropagation();
      }
    }
    watch(
      () => props.active,
      (isActive) => {
        if (!isActive) {
          setShowScrim(false);
          resetViewStacks();
        }
      }
    );
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
    watch(
      () => ({
        httpOnlyCredentials: useCredentialsStore().httpOnlyCredentialTypes,
        nodeTypes: useNodeTypesStore().visibleNodeTypes
      }),
      ({ nodeTypes, httpOnlyCredentials }) => {
        const { actions, mergedNodes } = generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials);
        setActions(actions);
        setMergeNodes(mergedNodes);
      },
      { immediate: true }
    );
    const { nodeCreator: nodeCreator2 } = toRefs(state);
    onBeforeUnmount(() => {
      unBindOnMouseUpOutside();
    });
    onClickOutside(nodeCreator2, () => emit("closeNodeCreator"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("aside", {
          class: normalizeClass({
            [_ctx.$style.nodeCreatorScrim]: true,
            [_ctx.$style.active]: showScrim.value
          })
        }, null, 2),
        _ctx.active ? (openBlock(), createBlock(_sfc_main$p, {
          key: 0,
          class: normalizeClass(_ctx.$style.close),
          type: "secondary",
          icon: "x",
          "aria-label": "Close Node Creator",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("closeNodeCreator"))
        }, null, 8, ["class"])) : createCommentVNode("", true),
        createVNode(SlideTransition, null, {
          default: withCtx(() => [
            _ctx.active ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "nodeCreator",
              ref: nodeCreator2,
              class: normalizeClass({ [_ctx.$style.nodeCreator]: true }),
              style: normalizeStyle(nodeCreatorInlineStyle.value),
              "data-test-id": "node-creator",
              onDragover: onDragOver,
              onDrop,
              onMousedown: onMouseDown,
              onMouseup: onMouseUp
            }, [
              createVNode(NodesListPanel, { onNodeTypeSelected: _ctx.onNodeTypeSelected }, null, 8, ["onNodeTypeSelected"])
            ], 38)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const nodeCreator = "_nodeCreator_xjjfv_127";
const nodeCreatorScrim = "_nodeCreatorScrim_xjjfv_139";
const active = "_active_xjjfv_151";
const close = "_close_xjjfv_155";
const style0 = {
  nodeCreator,
  nodeCreatorScrim,
  active,
  close
};
const cssModules = {
  "$style": style0
};
const NodeCreator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeCreator as default
};
