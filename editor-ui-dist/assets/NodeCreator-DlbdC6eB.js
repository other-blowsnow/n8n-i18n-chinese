import { d as defineComponent, de as reactive, o as onMounted, bt as useExternalHooks, X as onBeforeUnmount, c6 as toRefs, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, f as createCommentVNode, i as createVNode, N as N8nIcon, _ as _export_sfc, l as unref, ip as REGULAR_NODE_CREATOR_VIEW, F as Fragment, Y as renderSlot, iq as useViewStacks, r as ref, x as computed, ir as useInstalledCommunityPackage, ae as useNodeTypesStore, u as useUsersStore, e as createBlock, p as N8nText, w as withCtx, k as createTextVNode, t as toDisplayString, is as _sfc_main$b, aa as Tooltip, fa as i18n, it as captureException, iu as useKeyboardNavigation, hI as useActions, dg as useNodeCreatorStore, bq as useCalloutHelpers, iv as CUSTOM_API_CALL_KEY, iw as TRIGGER_NODE_CREATOR_VIEW, ix as isNodePreviewKey, iy as OPEN_AI_NODE_TYPE, iz as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, am as useTelemetry, iA as getActiveViewCallouts, cg as resolveDirective, iB as ItemsRenderer, bv as createSlots, iC as withMemo, iD as CategorizedItemsRenderer, c as useI18n, z as N8nCallout, b3 as withDirectives, cZ as InfoTip, B as withModifiers, iE as CommunityNodeFooter, iF as HTTP_REQUEST_NODE_TYPE, fE as createStaticVNode, C as N8nLink, iG as REQUEST_NODE_FORM_URL, iH as filterAndSearchNodes, iI as getRootSearchCallouts, i3 as WEBHOOK_NODE_TYPE, iJ as PRE_BUILT_AGENTS_COLLECTION, iK as camelCase, iL as shouldShowCommunityNodeDetails, ft as isCommunityPackageName, iM as prepareCommunityNodeDetailsViewStack, ia as getNodeIconSource, iN as transformNodeType, iO as AINodesView, iP as AIView, iQ as RegularView, iR as TriggerView, iS as flattenCreateElements, iT as HITL_SUBCATEGORY, iU as getHumanInTheLoopActions, iV as AI_OTHERS_NODE_CREATOR_VIEW, iW as AI_NODE_CREATOR_VIEW, ez as useCommunityNodesStore, a as useToast, c0 as NodeIcon, iX as OfficialIcon, q as N8nButton, dh as useCredentialsStore, iY as removePreviewToken, P as useDebounce, bm as onUnmounted, a8 as watch, ef as N8nNotice, c7 as normalizeProps, K as mergeProps, i5 as Transition, iZ as AI_EVALUATION, i_ as AI_UNCATEGORIZED_CATEGORY, Q as useUIStore, fq as useAssistantStore, dk as useBuilderStore, bu as onClickOutside, ab as _sfc_main$c, aq as normalizeStyle, i$ as SlideTransition, dP as DRAG_EVENT_DATA_KEY, j0 as useActionsGenerator } from "./index-DgSMGi0-.js";
const _hoisted_1$5 = ["placeholder", "value"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
      const _component_N8nIcon = N8nIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.searchContainer),
        "data-test-id": "search-bar"
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style.prefix]: true, [_ctx.$style.active]: _ctx.modelValue.length > 0 })
        }, [
          createVNode(_component_N8nIcon, {
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
          }, null, 42, _hoisted_1$5)
        ], 2),
        _ctx.modelValue.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([_ctx.$style.suffix, _ctx.$style.clickable]),
          onClick: clear2
        }, [
          createVNode(_component_N8nIcon, {
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
const active$1 = "_active_w19t7_144";
const text = "_text_w19t7_148";
const suffix = "_suffix_w19t7_164";
const clear = "_clear_w19t7_170";
const clickable = "_clickable_w19t7_183";
const style0$8 = {
  searchContainer,
  prefix,
  active: active$1,
  text,
  suffix,
  clear,
  clickable
};
const cssModules$8 = {
  "$style": style0$8
};
const SearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$8]]);
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
    const official = ref(false);
    const packageName = computed(() => communityNodeDetails?.packageName);
    const { installedPackage, initInstalledPackage, isUpdateCheckAvailable } = useInstalledCommunityPackage(packageName);
    const nodeTypesStore = useNodeTypesStore();
    const isOwner = computed(() => useUsersStore().isInstanceOwner);
    const ownerEmailList = computed(
      () => useUsersStore().allUsers.filter((user) => user.role?.includes("owner")).map((user) => user.email)
    );
    const formatNumber = (number) => {
      if (!number) return null;
      return new Intl.NumberFormat("en-US").format(number);
    };
    async function fetchPackageInfo(packageName2) {
      const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(
        activeViewStack.communityNodeDetails?.key || ""
      );
      let packageInfo = installedPackage.value;
      if (communityNodeDetails?.installed && !packageInfo) {
        packageInfo = await initInstalledPackage();
      }
      if (communityNodeAttributes) {
        publisherName.value = communityNodeAttributes.companyName ?? communityNodeAttributes.authorName;
        downloads.value = formatNumber(communityNodeAttributes.numberOfDownloads);
        official.value = communityNodeAttributes.isOfficialNode;
        if (!packageInfo) {
          verified.value = true;
        } else {
          const verifiedVersions = communityNodeAttributes.nodeVersions?.map((v) => v.npmVersion) ?? [];
          verified.value = verifiedVersions.includes(packageInfo.installedVersion);
        }
        return;
      }
      const url = `https://registry.npmjs.org/${packageName2}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          captureException(new Error("Could not get metadata for package"), { extra: { packageName: packageName2 } });
          return;
        }
        const data = await response.json();
        const publisher = data.maintainers?.[0]?.name;
        publisherName.value = publisher;
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const downloadsUrl = `https://api.npmjs.org/downloads/range/2022-01-01:${today}/${packageName2}`;
        const downloadsResponse = await fetch(downloadsUrl);
        if (!downloadsResponse.ok) {
          captureException(new Error("Could not get downloads for package"), {
            extra: { packageName: packageName2 }
          });
          return;
        }
        const downloadsData = await downloadsResponse.json();
        if (!downloadsData.downloads?.length) return;
        const total = downloadsData.downloads.reduce((sum, day) => sum + day.downloads, 0);
        downloads.value = formatNumber(total);
      } catch (error) {
        captureException(error, { extra: { packageName: packageName2 } });
      }
    }
    onMounted(async () => {
      if (communityNodeDetails?.packageName) {
        await fetchPackageInfo(communityNodeDetails.packageName);
      }
    });
    return (_ctx, _cache) => {
      const _component_CommunityNodeUpdateInfo = _sfc_main$b;
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
        unref(isUpdateCheckAvailable) && unref(installedPackage)?.updateAvailable ? (openBlock(), createBlock(_component_CommunityNodeUpdateInfo, {
          key: 0,
          "data-test-id": "update-available",
          "package-name": unref(communityNodeDetails)?.packageName
        }, null, 8, ["package-name"])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.separator)
        }, null, 2)),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.info)
        }, [
          verified.value ? (openBlock(), createBlock(unref(Tooltip), {
            key: 0,
            placement: "top"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(official.value ? unref(i18n).baseText("communityNodeInfo.officialApproved") : unref(i18n).baseText("communityNodeInfo.approved")), 1)
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
          })) : (openBlock(), createBlock(unref(Tooltip), {
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
    const i18n2 = useI18n();
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
      const _component_N8nCallout = N8nCallout;
      const _component_N8nInfoTip = InfoTip;
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
                    hasNoTriggerActions.value ? (openBlock(), createBlock(_component_N8nCallout, {
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
                  !search.value ? (openBlock(), createBlock(_component_N8nInfoTip, {
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
                  !unref(userActivated) && isTriggerRootView.value ? (openBlock(), createBlock(_component_N8nCallout, {
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
    const i18n2 = useI18n();
    return (_ctx, _cache) => {
      const _component_N8nLink = N8nLink;
      const _component_N8nIcon = N8nIcon;
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
            _ctx.rootView === unref(REGULAR_NODE_CREATOR_VIEW) ? (openBlock(), createBlock(_component_N8nLink, {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("addHttpNode"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.httpRequest")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.rootView === unref(TRIGGER_NODE_CREATOR_VIEW) ? (openBlock(), createBlock(_component_N8nLink, {
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
            createVNode(_component_N8nLink, { to: unref(REQUEST_NODE_FORM_URL) }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(i18n2).baseText("nodeCreator.noResults.requestTheNode")), 1),
                _cache[2] || (_cache[2] = createTextVNode("  ")),
                createBaseVNode("span", null, [
                  createVNode(_component_N8nIcon, {
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
    const i18n2 = useI18n();
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
        const view = matchedView(mergedNodes);
        pushViewStack({
          title: view.title,
          subtitle: view?.subtitle ?? "",
          info: view?.info ?? "",
          items: view.items,
          hasSearch: true,
          rootView: view.value,
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
      const _component_N8nTooltip = Tooltip;
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
    const i18n2 = useI18n();
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
        const view = matchedView(mergedNodes);
        pushViewStack({
          title: view.title,
          subtitle: view?.subtitle ?? "",
          items: view.items,
          info: view.info,
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
      const _component_N8nIcon = N8nIcon;
      const _component_N8nNotice = N8nNotice;
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
                  createVNode(_component_N8nIcon, {
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
              activeViewStack.value.info && !activeViewStack.value.search ? (openBlock(), createBlock(_component_N8nNotice, {
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
    const OUTSIDE_CLICK_WHITELIST = [
      // different modals
      ".el-overlay-dialog"
    ];
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
    onClickOutside(
      nodeCreator2,
      () => {
        emit("closeNodeCreator");
      },
      { ignore: OUTSIDE_CLICK_WHITELIST }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("aside", {
          class: normalizeClass({
            [_ctx.$style.nodeCreatorScrim]: true,
            [_ctx.$style.active]: showScrim.value
          })
        }, null, 2),
        _ctx.active ? (openBlock(), createBlock(_sfc_main$c, {
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
