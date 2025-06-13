import { d as defineComponent, r as ref, q as computed, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, j as createVNode, bH as _sfc_main$g, w as withCtx, be as withKeys, b3 as withModifiers, l as createTextVNode, t as toDisplayString, m as unref, c as useI18n, e as createBlock, f as createCommentVNode, z as nextTick, _ as _export_sfc, as as useNDVStore, Q as useWorkflowsStore, eP as isCommunityPackageName, dY as NPM_PACKAGE_DOCS_BASE_URL, h8 as BUILTIN_NODES_DOCS_URL, d_ as COMMUNITY_NODES_INSTALLATION_DOCS_URL, aP as useExternalHooks, ag as useTelemetry, by as NodeConnectionTypes, b as useRouter, bg as useClipboard, a5 as useWorkflowHelpers, a as useToast, h9 as OPEN_URL_PANEL_TRIGGER_NODE_TYPES, ha as PRODUCTION_ONLY_TRIGGER_NODE_TYPES, hb as MCP_TRIGGER_NODE_TYPE, hc as FORM_TRIGGER_NODE_TYPE, cH as CHAT_TRIGGER_NODE_TYPE, X as watch, F as Fragment, D as renderList, aQ as onClickOutside, aq as h, hd as toRef, he as tryOnScopeDispose, hf as toValue, hg as isIOS, hh as noop, hi as isObject, hj as isClient, bz as useNodeTypesStore, bA as useNodeHelpers, G as useDebounce, B as normalizeStyle, cv as TitledList, bv as getNodeInputs, hk as SWITCH_NODE_TYPE, cK as isEqual, hl as captureException, p as useSettingsStore, au as usePostHog, d3 as useCredentialsStore, u as useUsersStore, a1 as useProjectsStore, eU as OPEN_AI_API_CREDENTIAL_TYPE, hm as AI_CREDITS_EXPERIMENT, d6 as useHistoryStore, ab as ProjectTypes, bw as getConnectionTypes, o as onMounted, bW as ndvEventBus, y as onBeforeUnmount, hn as _sfc_main$h, ho as CUSTOM_NODES_DOCS_URL, aA as withDirectives, aB as vShow, gB as _sfc_main$i, hp as NodeCredentials, gD as get, hq as getNodeParameters, dA as deepCopy, hr as set, hs as unset, ht as getUpdatedToolDescription, hu as RenameNodeCommand, gA as isINodePropertyCollectionList, hv as isINodePropertiesList, hw as isINodePropertyOptionsList, hx as displayParameter, gf as Draggable, bU as useThrottleFn, H as useUIStore, cl as useSlots, hy as MAIN_NODE_PANEL_WIDTH, aJ as useStorage, hz as LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH, x as renderSlot, hA as convertToDisplayDateComponents, bN as resolveDirective, eB as InfoTip, e1 as storeToRefs, cP as useNodeDirtiness, fa as useNodeType, bl as usePinnedData, cw as CanvasNodeDirtiness, aV as createSlots, bf as N8nText, bO as waitingNodeTooltip, bM as N8nRadioButtons, c6 as isPresent, hB as truncate, g4 as createStaticVNode, da as START_NODE_TYPE, gR as MANUAL_TRIGGER_NODE_TYPE, hC as CRON_NODE_TYPE, hD as INTERVAL_NODE_TYPE, bx as getNodeOutputs, hE as uniqBy, b7 as resolveDynamicComponent, aR as N8nTooltip, bJ as N8nIcon, hF as isTriggerPanelObject, cS as getTriggerNodeServiceName, gX as WEBHOOK_NODE_TYPE, eE as CopyInput, C as createEventBus, cE as Transition, V as VIEWS, ak as WORKFLOW_SETTINGS_MODAL_KEY, ch as useDeviceSupport, hG as EXECUTABLE_TRIGGER_NODE_TYPES, ay as STICKY_NODE_TYPE, hH as BASE_NODE_SURVEY_URL, aa as EnterpriseEditionFeature, fh as dataPinningEventBus, bR as useStyles, hI as APP_MODALS_ELEMENT_ID, ai as useMessage, aj as MODAL_CONFIRM, dd as jsonParse } from "./index-CkuwrFdE.js";
import { i as importCurlEventBus } from "./import-curl-km98FEmX.js";
import { R as RunData } from "./RunData-BdvMIiLG.js";
import { R as RunDataAi } from "./RunDataAi-BbpX7szY.js";
import { u as useWorkflowActivate } from "./useWorkflowActivate-C2B1JnLo.js";
import "./FileSaver.min-6xz9MI-P.js";
import "./useExecutionHelpers-tsiWRpV5.js";
import "./RunDataParsedAiContent-ps3SSytp.js";
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NodeTitle",
  props: {
    modelValue: { default: "" },
    nodeType: { default: void 0 },
    readOnly: { type: Boolean, default: false }
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editName = ref(false);
    const newName = ref("");
    const input = ref();
    const i18n = useI18n();
    const editable = computed(() => !props.readOnly && window === window.parent);
    async function onEdit() {
      newName.value = props.modelValue;
      editName.value = true;
      await nextTick();
      if (input.value) {
        input.value.focus();
      }
    }
    function onRename() {
      if (newName.value.trim() !== "") {
        emit("update:model-value", newName.value.trim());
      }
      editName.value = false;
    }
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_input = resolveComponent("n8n-input");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_popover = resolveComponent("n8n-popover");
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "node-title-container",
        onClick: onEdit
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.$style.iconWrapper)
        }, [
          createVNode(_sfc_main$g, {
            "node-type": _ctx.nodeType,
            size: 18
          }, null, 8, ["node-type"])
        ], 2),
        createVNode(_component_n8n_popover, {
          placement: "right",
          width: "200",
          visible: editName.value,
          disabled: !editable.value
        }, {
          reference: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass({ [_ctx.$style.title]: true, [_ctx.$style.hoverable]: editable.value })
            }, [
              createTextVNode(toDisplayString(_ctx.modelValue) + " ", 1),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.editIconContainer)
              }, [
                editable.value ? (openBlock(), createBlock(_component_font_awesome_icon, {
                  key: 0,
                  class: normalizeClass(_ctx.$style.editIcon),
                  icon: "pencil-alt"
                }, null, 8, ["class"])) : createCommentVNode("", true)
              ], 2)
            ], 2)
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.editContainer),
              onKeydown: [
                withKeys(onRename, ["enter"]),
                _cache[3] || (_cache[3] = withModifiers(() => {
                }, ["stop"])),
                _cache[4] || (_cache[4] = withKeys(($event) => editName.value = false, ["esc"]))
              ]
            }, [
              createVNode(_component_n8n_text, {
                bold: true,
                color: "text-base",
                tag: "div"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.title.renameNode")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_n8n_input, {
                ref_key: "input",
                ref: input,
                modelValue: newName.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newName.value = $event),
                size: "small",
                "data-test-id": "node-rename-input"
              }, null, 8, ["modelValue"]),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.editButtons)
              }, [
                createVNode(_component_n8n_button, {
                  type: "secondary",
                  size: "small",
                  label: unref(i18n).baseText("ndv.title.cancel"),
                  onClick: _cache[1] || (_cache[1] = ($event) => editName.value = false),
                  onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {
                  }, ["stop"]), ["enter"]))
                }, null, 8, ["label"]),
                createVNode(_component_n8n_button, {
                  type: "primary",
                  size: "small",
                  label: unref(i18n).baseText("ndv.title.rename"),
                  onClick: onRename
                }, null, 8, ["label"])
              ], 2)
            ], 34)
          ]),
          _: 1
        }, 8, ["visible", "disabled"])
      ], 2);
    };
  }
});
const container$2 = "_container_86rol_123";
const title$3 = "_title_86rol_133";
const hoverable = "_hoverable_86rol_141";
const editIcon = "_editIcon_86rol_144";
const iconWrapper = "_iconWrapper_86rol_148";
const editIconContainer = "_editIconContainer_86rol_161";
const editButtons = "_editButtons_86rol_167";
const editContainer = "_editContainer_86rol_175";
const style0$a = {
  container: container$2,
  title: title$3,
  hoverable,
  editIcon,
  iconWrapper,
  editIconContainer,
  editButtons,
  editContainer
};
const cssModules$b = {
  "$style": style0$a
};
const NodeTitle = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__cssModules", cssModules$b]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NodeSettingsTabs",
  props: {
    modelValue: { default: "params" },
    nodeType: { default: void 0 },
    pushRef: { default: "" }
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const externalHooks = useExternalHooks();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const activeNode = computed(() => ndvStore.activeNode);
    const isCommunityNode = computed(() => {
      const nodeType = props.nodeType;
      if (nodeType) {
        return isCommunityPackageName(nodeType.name);
      }
      return false;
    });
    const packageName = computed(() => props.nodeType?.name.split(".")[0] ?? "");
    const documentationUrl = computed(() => {
      const nodeType = props.nodeType;
      if (!nodeType) {
        return "";
      }
      if (nodeType.documentationUrl && nodeType.documentationUrl.startsWith("http")) {
        return nodeType.documentationUrl;
      }
      const utmParams = new URLSearchParams({
        utm_source: "n8n_app",
        utm_medium: "node_settings_modal-credential_link",
        utm_campaign: nodeType.name
      });
      const primaryDocUrl = nodeType.codex?.resources?.primaryDocumentation?.[0]?.url;
      if (primaryDocUrl) {
        return `${primaryDocUrl}?${utmParams.toString()}`;
      }
      if (isCommunityNode.value) {
        return `${NPM_PACKAGE_DOCS_BASE_URL}${packageName.value}`;
      }
      return `${BUILTIN_NODES_DOCS_URL}?${utmParams.toString()}`;
    });
    const options = computed(() => {
      const options2 = [
        {
          label: i18n.baseText("nodeSettings.parameters"),
          value: "params"
        },
        {
          label: i18n.baseText("nodeSettings.settings"),
          value: "settings"
        }
      ];
      if (isCommunityNode.value) {
        options2.push({
          icon: "cube",
          value: "communityNode",
          align: "right",
          tooltip: i18n.baseText("generic.communityNode.tooltip", {
            interpolate: {
              docUrl: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
              packageName: packageName.value
            }
          })
        });
      }
      if (documentationUrl.value) {
        options2.push({
          label: i18n.baseText("nodeSettings.docs"),
          value: "docs",
          href: documentationUrl.value,
          align: "right"
        });
      }
      return options2;
    });
    function onTabSelect(tab) {
      if (tab === "docs" && props.nodeType) {
        void externalHooks.run("dataDisplay.onDocumentationUrlClick", {
          nodeType: props.nodeType,
          documentationUrl: documentationUrl.value
        });
        telemetry.track("User clicked ndv link", {
          node_type: activeNode.value?.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: NodeConnectionTypes.Main,
          type: "docs"
        });
      }
      if (tab === "settings" && props.nodeType) {
        telemetry.track("User viewed node settings", {
          node_type: props.nodeType.name,
          workflow_id: workflowsStore.workflowId
        });
      }
      if (tab === "settings" || tab === "params") {
        emit("update:model-value", tab);
      }
    }
    function onTooltipClick(tab, event) {
      if (tab === "communityNode" && event.target.localName === "a") {
        telemetry.track("user clicked cnr docs link", { source: "node details view" });
      }
    }
    return (_ctx, _cache) => {
      const _component_N8nTabs = resolveComponent("N8nTabs");
      return openBlock(), createBlock(_component_N8nTabs, {
        options: options.value,
        "model-value": _ctx.modelValue,
        "onUpdate:modelValue": onTabSelect,
        onTooltipClick
      }, null, 8, ["options", "model-value"]);
    };
  }
});
const _hoisted_1$8 = {
  key: 0,
  class: "webhooks"
};
const _hoisted_2$3 = ["title"];
const _hoisted_3$3 = {
  key: 0,
  class: "node-webhooks"
};
const _hoisted_4$3 = {
  key: 0,
  class: "url-selection"
};
const _hoisted_5$3 = {
  key: 0,
  class: "webhook-wrapper"
};
const _hoisted_6$3 = { class: "http-field" };
const _hoisted_7$2 = { class: "http-method" };
const _hoisted_8$2 = { class: "url-field" };
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = {
  key: 1,
  class: "webhook-wrapper"
};
const _hoisted_11$1 = { class: "url-field-full-width" };
const _hoisted_12 = ["onClick"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "NodeWebhooks",
  props: {
    node: {},
    nodeTypeDescription: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const clipboard = useClipboard();
    const workflowHelpers = useWorkflowHelpers({ router });
    const toast = useToast();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const isMinimized = ref(
      props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name)
    );
    const showUrlFor = ref("test");
    const isProductionOnly = computed(() => {
      return props.nodeTypeDescription && PRODUCTION_ONLY_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
    });
    const urlOptions = computed(() => [
      ...isProductionOnly.value ? [] : [{ label: baseText.value.testUrl, value: "test" }],
      {
        label: baseText.value.productionUrl,
        value: "production"
      }
    ]);
    const visibleWebhookUrls = computed(() => {
      return webhooksNode.value.filter((webhook) => {
        if (typeof webhook.ndvHideUrl === "string") {
          return !workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideUrl");
        }
        return !webhook.ndvHideUrl;
      });
    });
    const webhooksNode = computed(() => {
      if (props.nodeTypeDescription?.webhooks === void 0) {
        return [];
      }
      return props.nodeTypeDescription.webhooks.filter(
        (webhookData) => webhookData.restartWebhook !== true
      );
    });
    const baseText = computed(() => {
      const nodeType = props.nodeTypeDescription?.name;
      switch (nodeType) {
        case CHAT_TRIGGER_NODE_TYPE:
          return {
            toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.chatTrigger"),
            clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.formTrigger"),
            clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.chatTrigger"),
            clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.chatTrigger"),
            testUrl: i18n.baseText("nodeWebhooks.testUrl"),
            productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
            copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.chatTrigger"),
            copyMessage: i18n.baseText("nodeWebhooks.showMessage.message.chatTrigger")
          };
        case FORM_TRIGGER_NODE_TYPE:
          return {
            toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.formTrigger"),
            clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.formTrigger"),
            clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.formTrigger"),
            clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.formTrigger"),
            testUrl: i18n.baseText("nodeWebhooks.testUrl"),
            productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
            copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.formTrigger"),
            copyMessage: i18n.baseText("nodeWebhooks.showMessage.message.formTrigger")
          };
        case MCP_TRIGGER_NODE_TYPE:
          return {
            toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.mcpTrigger"),
            clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.mcpTrigger"),
            clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.mcpTrigger"),
            clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.mcpTrigger"),
            testUrl: i18n.baseText("nodeWebhooks.testUrl"),
            productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
            copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.mcpTrigger"),
            copyMessage: void 0
          };
        default:
          return {
            toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls"),
            clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls"),
            clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls"),
            clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls"),
            testUrl: i18n.baseText("nodeWebhooks.testUrl"),
            productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
            copyTitle: i18n.baseText("nodeWebhooks.showMessage.title"),
            copyMessage: void 0
          };
      }
    });
    function copyWebhookUrl(webhookData) {
      const webhookUrl = getWebhookUrlDisplay(webhookData);
      void clipboard.copy(webhookUrl);
      toast.showMessage({
        title: baseText.value.copyTitle,
        message: baseText.value.copyMessage,
        type: "success"
      });
      telemetry.track("User copied webhook URL", {
        pane: "parameters",
        type: `${showUrlFor.value} url`
      });
    }
    function getWebhookUrlDisplay(webhookData) {
      if (props.node) {
        return workflowHelpers.getWebhookUrl(
          webhookData,
          props.node,
          isProductionOnly.value ? "production" : showUrlFor.value
        );
      }
      return "";
    }
    function isWebhookMethodVisible(webhook) {
      try {
        const method = workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
        if (Array.isArray(method) && method.length !== 1) {
          return false;
        }
      } catch (error) {
      }
      if (typeof webhook.ndvHideMethod === "string") {
        return !workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideMethod");
      }
      return !webhook.ndvHideMethod;
    }
    function getWebhookHttpMethod(webhook) {
      const method = workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
      if (Array.isArray(method)) {
        return method[0];
      }
      return method;
    }
    watch(
      () => props.node,
      () => {
        isMinimized.value = props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
      }
    );
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_radio_buttons = resolveComponent("n8n-radio-buttons");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
      return webhooksNode.value.length && visibleWebhookUrls.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", {
          class: normalizeClass(["clickable headline", { expanded: !isMinimized.value }]),
          title: isMinimized.value ? baseText.value.clickToDisplay : baseText.value.clickToHide,
          onClick: _cache[0] || (_cache[0] = ($event) => isMinimized.value = !isMinimized.value)
        }, [
          createVNode(_component_font_awesome_icon, {
            icon: "angle-right",
            class: "minimize-button minimize-icon"
          }),
          createTextVNode(" " + toDisplayString(baseText.value.toggleTitle), 1)
        ], 10, _hoisted_2$3),
        createVNode(_component_el_collapse_transition, null, {
          default: withCtx(() => [
            !isMinimized.value ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
              !isProductionOnly.value ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
                createVNode(_component_el_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode(_component_n8n_radio_buttons, {
                          modelValue: showUrlFor.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showUrlFor.value = $event),
                          options: urlOptions.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(visibleWebhookUrls.value, (webhook, index) => {
                return openBlock(), createBlock(_component_n8n_tooltip, {
                  key: index,
                  class: "item",
                  content: baseText.value.clickToCopy,
                  placement: "left"
                }, {
                  default: withCtx(() => [
                    isWebhookMethodVisible(webhook) ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
                      createBaseVNode("div", _hoisted_6$3, [
                        createBaseVNode("div", _hoisted_7$2, [
                          createTextVNode(toDisplayString(getWebhookHttpMethod(webhook)), 1),
                          _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1))
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_8$2, [
                        createBaseVNode("div", {
                          class: "webhook-url left-ellipsis clickable",
                          onClick: ($event) => copyWebhookUrl(webhook)
                        }, [
                          createTextVNode(toDisplayString(getWebhookUrlDisplay(webhook)), 1),
                          _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1))
                        ], 8, _hoisted_9$1)
                      ])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_10$1, [
                      createBaseVNode("div", _hoisted_11$1, [
                        createBaseVNode("div", {
                          class: "webhook-url left-ellipsis clickable",
                          onClick: ($event) => copyWebhookUrl(webhook)
                        }, [
                          createTextVNode(toDisplayString(getWebhookUrlDisplay(webhook)), 1),
                          _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1))
                        ], 8, _hoisted_12)
                      ])
                    ]))
                  ]),
                  _: 2
                }, 1032, ["content"]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const NodeWebhooks = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-906699cc"]]);
const OnClickOutside = /* @__PURE__ */ defineComponent({
  name: "OnClickOutside",
  props: ["as", "options"],
  emits: ["trigger"],
  setup(props, { slots, emit }) {
    const target = ref();
    onClickOutside(target, (e) => {
      emit("trigger", e);
    }, props.options);
    return () => {
      if (slots.default)
        return h(props.as || "div", { ref: target }, slots.default());
    };
  }
});
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window)
    return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document)
    return el.documentElement;
  return el;
}
function checkOverflowScroll(ele) {
  const style = window.getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
    return true;
  } else {
    const parent = ele.parentNode;
    if (!parent || parent.tagName === "BODY")
      return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  const _target = e.target;
  if (checkOverflowScroll(_target))
    return false;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele))
        elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden")
        initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden")
        return isLocked.value = true;
      if (isLocked.value)
        return ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        el,
        "touchmove",
        (e) => {
          preventDefault(e);
        },
        { passive: false }
      );
    }
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else unlock();
    }
  });
}
function onScrollLock() {
  let isMounted = false;
  const state = ref(false);
  return (el, binding) => {
    state.value = binding.value;
    if (isMounted)
      return;
    isMounted = true;
    const isLocked = useScrollLock(el, binding.value);
    watch(state, (v) => isLocked.value = v);
  };
}
onScrollLock();
const _hoisted_1$7 = ["data-test-id"];
const _hoisted_2$2 = ["textContent"];
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = ["data-node-name"];
const _hoisted_6$2 = ["onClick"];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NDVSubConnections",
  props: {
    rootNode: {}
  },
  emits: ["switchSelectedNode", "openConnectionNodeCreator"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const nodeHelpers = useNodeHelpers();
    const i18n = useI18n();
    const { debounce } = useDebounce();
    const emit = __emit;
    const possibleConnections = ref([]);
    const expandedGroups = ref([]);
    const shouldShowNodeInputIssues = ref(false);
    const nodeType = computed(
      () => nodeTypesStore.getNodeType(props.rootNode.type, props.rootNode.typeVersion)
    );
    const nodeData = computed(() => workflowsStore.getNodeByName(props.rootNode.name));
    const workflow = computed(() => workflowsStore.getCurrentWorkflow());
    const nodeInputIssues = computed(() => {
      const issues = nodeHelpers.getNodeIssues(nodeType.value, props.rootNode, workflow.value, [
        "typeUnknown",
        "parameters",
        "credentials",
        "execution"
      ]);
      return issues?.input ?? {};
    });
    const connectedNodes2 = computed(() => {
      return possibleConnections.value.reduce(
        (acc, connection) => {
          const nodes = getINodesFromNames(
            workflow.value.getParentNodes(props.rootNode.name, connection.type)
          );
          return { ...acc, [connection.type]: nodes };
        },
        {}
      );
    });
    function getConnectionConfig(connectionType2) {
      return possibleConnections.value.find((c) => c.type === connectionType2);
    }
    function isMultiConnection(connectionType2) {
      const connectionConfig = getConnectionConfig(connectionType2);
      return connectionConfig?.maxConnections !== 1;
    }
    function shouldShowConnectionTooltip(connectionType2) {
      return isMultiConnection(connectionType2) && !expandedGroups.value.includes(connectionType2);
    }
    function expandConnectionGroup(connectionType2, isExpanded) {
      if (!isMultiConnection(connectionType2)) {
        return;
      }
      if (isExpanded) {
        expandedGroups.value = [...expandedGroups.value, connectionType2];
      } else {
        expandedGroups.value = expandedGroups.value.filter((g) => g !== connectionType2);
      }
    }
    function getINodesFromNames(names) {
      return names.map((name) => {
        const node2 = workflowsStore.getNodeByName(name);
        if (node2) {
          const matchedNodeType = nodeTypesStore.getNodeType(node2.type);
          if (matchedNodeType) {
            const issues = nodeHelpers.getNodeIssues(matchedNodeType, node2, workflow.value);
            const stringifiedIssues = issues ? nodeHelpers.nodeIssuesToString(issues, node2) : "";
            return { node: node2, nodeType: matchedNodeType, issues: stringifiedIssues };
          }
        }
        return null;
      }).filter((n) => n !== null);
    }
    function hasInputIssues(connectionType2) {
      return shouldShowNodeInputIssues.value && (nodeInputIssues.value[connectionType2] ?? []).length > 0;
    }
    function isNodeInputConfiguration(connectionConfig) {
      if (typeof connectionConfig === "string") return false;
      return "type" in connectionConfig;
    }
    function getPossibleSubInputConnections() {
      if (!nodeType.value || !props.rootNode) return [];
      const inputs = getNodeInputs(workflow.value, props.rootNode, nodeType.value);
      const nonMainInputs = inputs.filter((input) => {
        if (!isNodeInputConfiguration(input)) return false;
        return input.type !== "main";
      });
      return nonMainInputs;
    }
    function onNodeClick(nodeName, connectionType2) {
      if (isMultiConnection(connectionType2) && !expandedGroups.value.includes(connectionType2)) {
        expandConnectionGroup(connectionType2, true);
        return;
      }
      emit("switchSelectedNode", nodeName);
    }
    function onPlusClick(connectionType2) {
      const connectionNodes = connectedNodes2.value[connectionType2];
      if (isMultiConnection(connectionType2) && !expandedGroups.value.includes(connectionType2) && connectionNodes.length >= 1) {
        expandConnectionGroup(connectionType2, true);
        return;
      }
      emit("openConnectionNodeCreator", props.rootNode.name, connectionType2);
    }
    function showNodeInputsIssues() {
      shouldShowNodeInputIssues.value = false;
      setTimeout(() => {
        shouldShowNodeInputIssues.value = true;
      }, 0);
    }
    watch(
      nodeData,
      debounce(
        () => setTimeout(() => {
          expandedGroups.value = [];
          possibleConnections.value = getPossibleSubInputConnections();
        }, 0),
        { debounceTime: 1e3 }
      ),
      { immediate: true }
    );
    __expose({
      showNodeInputsIssues
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon_button = resolveComponent("n8n-icon-button");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      return possibleConnections.value.length ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.connections),
          style: normalizeStyle(`--possible-connections: ${possibleConnections.value.length}`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(possibleConnections.value, (connection) => {
            return openBlock(), createElementBlock("div", {
              key: connection.type,
              "data-test-id": `subnode-connection-group-${connection.type}`
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.connectionType)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass({
                    [_ctx.$style.connectionLabel]: true,
                    [_ctx.$style.hasIssues]: hasInputIssues(connection.type)
                  }),
                  textContent: toDisplayString(`${connection.displayName}${connection.required ? " *" : ""}`)
                }, null, 10, _hoisted_2$2),
                createVNode(unref(OnClickOutside), {
                  onTrigger: ($event) => expandConnectionGroup(connection.type, false)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      ref_for: true,
                      ref: "connectedNodesWrapper",
                      class: normalizeClass({
                        [_ctx.$style.connectedNodesWrapper]: true,
                        [_ctx.$style.connectedNodesWrapperExpanded]: expandedGroups.value.includes(connection.type)
                      }),
                      style: normalizeStyle(`--nodes-length: ${connectedNodes2.value[connection.type].length}`),
                      onClick: ($event) => expandConnectionGroup(connection.type, true)
                    }, [
                      (connectedNodes2.value[connection.type].length >= 1 ? connection.maxConnections !== 1 : true) ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass({
                          [_ctx.$style.plusButton]: true,
                          [_ctx.$style.hasIssues]: hasInputIssues(connection.type)
                        }),
                        onClick: ($event) => onPlusClick(connection.type)
                      }, [
                        createVNode(_component_n8n_tooltip, {
                          placement: "top",
                          teleported: true,
                          offset: 10,
                          "show-after": 300,
                          disabled: shouldShowConnectionTooltip(connection.type) && connectedNodes2.value[connection.type].length >= 1
                        }, {
                          content: withCtx(() => [
                            createTextVNode(" Add " + toDisplayString(connection.displayName) + " ", 1),
                            hasInputIssues(connection.type) ? (openBlock(), createBlock(TitledList, {
                              key: 0,
                              title: `${unref(i18n).baseText("node.issues")}:`,
                              items: nodeInputIssues.value[connection.type]
                            }, null, 8, ["title", "items"])) : createCommentVNode("", true)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_n8n_icon_button, {
                              size: "medium",
                              icon: "plus",
                              type: "tertiary",
                              "data-test-id": `add-subnode-${connection.type}`
                            }, null, 8, ["data-test-id"])
                          ]),
                          _: 2
                        }, 1032, ["disabled"])
                      ], 10, _hoisted_4$2)) : createCommentVNode("", true),
                      connectedNodes2.value[connection.type].length > 0 ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass({
                          [_ctx.$style.connectedNodes]: true,
                          [_ctx.$style.connectedNodesMultiple]: connectedNodes2.value[connection.type].length > 1
                        })
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes2.value[connection.type], (node2, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: node2.node.name,
                            class: normalizeClass({ [_ctx.$style.nodeWrapper]: true, [_ctx.$style.hasIssues]: node2.issues }),
                            "data-test-id": "floating-subnode",
                            "data-node-name": node2.node.name,
                            style: normalizeStyle(`--node-index: ${index}`)
                          }, [
                            (openBlock(), createBlock(_component_n8n_tooltip, {
                              key: node2.node.name,
                              placement: "top",
                              teleported: true,
                              offset: 10,
                              "show-after": 300,
                              disabled: shouldShowConnectionTooltip(connection.type)
                            }, {
                              content: withCtx(() => [
                                createTextVNode(toDisplayString(node2.node.name) + " ", 1),
                                node2.issues ? (openBlock(), createBlock(TitledList, {
                                  key: 0,
                                  title: `${unref(i18n).baseText("node.issues")}:`,
                                  items: node2.issues
                                }, null, 8, ["title", "items"])) : createCommentVNode("", true)
                              ]),
                              default: withCtx(() => [
                                createBaseVNode("div", {
                                  class: normalizeClass(_ctx.$style.connectedNode),
                                  onClick: ($event) => onNodeClick(node2.node.name, connection.type)
                                }, [
                                  createVNode(_sfc_main$g, {
                                    "node-type": node2.nodeType,
                                    "node-name": node2.node.name,
                                    "tooltip-position": "top",
                                    size: 20,
                                    circle: ""
                                  }, null, 8, ["node-type", "node-name"])
                                ], 10, _hoisted_6$2)
                              ]),
                              _: 2
                            }, 1032, ["disabled"]))
                          ], 14, _hoisted_5$2);
                        }), 128))
                      ], 2)) : createCommentVNode("", true)
                    ], 14, _hoisted_3$2)
                  ]),
                  _: 2
                }, 1032, ["onTrigger"])
              ], 2)
            ], 8, _hoisted_1$7);
          }), 128))
        ], 6)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$1 = "_container_ac466_140";
const connections = "_connections_ac466_148";
const connectionType = "_connectionType_ac466_160";
const connectionLabel = "_connectionLabel_ac466_167";
const hasIssues = "_hasIssues_ac466_173";
const connectedNodesWrapper = "_connectedNodesWrapper_ac466_177";
const plusButton = "_plusButton_ac466_185";
const connectedNodesWrapperExpanded = "_connectedNodesWrapperExpanded_ac466_203";
const connectedNodesMultiple = "_connectedNodesMultiple_ac466_209";
const connectedNode$1 = "_connectedNode_ac466_177";
const connectedNodes = "_connectedNodes_ac466_177";
const nodeWrapper = "_nodeWrapper_ac466_247";
const style0$9 = {
  container: container$1,
  connections,
  connectionType,
  connectionLabel,
  hasIssues,
  connectedNodesWrapper,
  plusButton,
  "horizontal-shake": "_horizontal-shake_ac466_1",
  connectedNodesWrapperExpanded,
  connectedNodesMultiple,
  connectedNode: connectedNode$1,
  connectedNodes,
  nodeWrapper
};
const cssModules$a = {
  "$style": style0$9
};
const NDVSubConnections = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__cssModules", cssModules$a]]);
function updateDynamicConnections(node2, workflowConnections, parameterData) {
  const connections2 = { ...workflowConnections };
  try {
    if (parameterData.name.includes("conditions") || !connections2[node2.name]?.main) return null;
    if (node2.type === SWITCH_NODE_TYPE && parameterData.name === "parameters.numberOutputs") {
      const curentNumberOutputs = node2.parameters?.numberOutputs;
      const newNumberOutputs = parameterData.value;
      if (newNumberOutputs < curentNumberOutputs) {
        connections2[node2.name].main = connections2[node2.name].main.slice(0, newNumberOutputs);
        return connections2;
      }
    }
    if (node2.type === SWITCH_NODE_TYPE && parameterData.name === "parameters.options.fallbackOutput") {
      const curentFallbackOutput = node2.parameters?.options?.fallbackOutput;
      if (curentFallbackOutput === "extra") {
        if (!parameterData.value || parameterData.value !== "extra") {
          connections2[node2.name].main = connections2[node2.name].main.slice(0, -1);
          return connections2;
        }
      }
    }
    if (node2.type === SWITCH_NODE_TYPE && parameterData.name.includes("parameters.rules.values")) {
      const { fallbackOutput } = node2.parameters?.options;
      if (parameterData.value === void 0) {
        let extractIndex = function(path) {
          const match = path.match(/parameters\.rules\.values\[(\d+)\]$/);
          return match ? parseInt(match[1], 10) : null;
        };
        const index = extractIndex(parameterData.name);
        if (index !== null) {
          connections2[node2.name].main.splice(index, 1);
          return connections2;
        }
        if (parameterData.name === "parameters.rules.values") {
          if (fallbackOutput === "extra") {
            connections2[node2.name].main = [
              connections2[node2.name].main[connections2[node2.name].main.length - 1]
            ];
          } else {
            connections2[node2.name].main = [];
          }
          return connections2;
        }
      } else if (parameterData.name === "parameters.rules.values") {
        const curentRulesvalues = node2.parameters?.rules?.values;
        let lastConnection = void 0;
        if (fallbackOutput === "extra" && connections2[node2.name].main.length === curentRulesvalues.length + 1) {
          lastConnection = connections2[node2.name].main.pop();
        }
        const currentRulesLength = node2.parameters?.rules?.values?.length;
        const newRulesLength = parameterData.value?.length;
        if (newRulesLength - currentRulesLength === 1) {
          connections2[node2.name].main = [...connections2[node2.name].main, []];
          if (lastConnection) {
            connections2[node2.name].main.push(lastConnection);
          }
          return connections2;
        } else {
          const newRulesvalues = parameterData.value;
          const updatedConnectionsIndex = [];
          for (const newRule of newRulesvalues) {
            const index = curentRulesvalues.findIndex((rule) => isEqual(rule, newRule));
            if (index !== -1) {
              updatedConnectionsIndex.push(index);
            }
          }
          const reorderedConnections = [];
          for (const index of updatedConnectionsIndex) {
            reorderedConnections.push(connections2[node2.name].main[index] ?? []);
          }
          if (lastConnection) {
            reorderedConnections.push(lastConnection);
          }
          connections2[node2.name].main = reorderedConnections;
          return connections2;
        }
      }
    }
  } catch (error) {
    captureException(error);
  }
  return null;
}
const _hoisted_1$6 = { class: "mt-xs" };
const LANGCHAIN_NODES_PREFIX = "@n8n/n8n-nodes-langchain.";
const N8N_NODES_PREFIX = "@n8n/n8n-nodes.";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "FreeAiCreditsCallout",
  setup(__props) {
    const NODES_WITH_OPEN_AI_API_CREDENTIAL = [
      `${LANGCHAIN_NODES_PREFIX}openAi`,
      `${LANGCHAIN_NODES_PREFIX}embeddingsOpenAi`,
      `${LANGCHAIN_NODES_PREFIX}lmChatOpenAi`,
      `${N8N_NODES_PREFIX}openAi`
    ];
    const showSuccessCallout = ref(false);
    const claimingCredits = ref(false);
    const settingsStore = useSettingsStore();
    const posthogStore = usePostHog();
    const credentialsStore = useCredentialsStore();
    const usersStore = useUsersStore();
    const ndvStore = useNDVStore();
    const projectsStore = useProjectsStore();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const toast = useToast();
    const userHasOpenAiCredentialAlready = computed(
      () => !!credentialsStore.allCredentials.filter(
        (credential) => credential.type === OPEN_AI_API_CREDENTIAL_TYPE
      ).length
    );
    const userHasClaimedAiCreditsAlready = computed(
      () => !!usersStore.currentUser?.settings?.userClaimedAiCredits
    );
    const activeNodeHasOpenAiApiCredential = computed(
      () => ndvStore.activeNode?.type && NODES_WITH_OPEN_AI_API_CREDENTIAL.includes(ndvStore.activeNode.type)
    );
    const userCanClaimOpenAiCredits = computed(() => {
      return settingsStore.isAiCreditsEnabled && activeNodeHasOpenAiApiCredential.value && posthogStore.getVariant(AI_CREDITS_EXPERIMENT.name) === AI_CREDITS_EXPERIMENT.variant && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value;
    });
    const onClaimCreditsClicked = async () => {
      claimingCredits.value = true;
      try {
        await credentialsStore.claimFreeAiCredits(projectsStore.currentProject?.id);
        if (usersStore?.currentUser?.settings) {
          usersStore.currentUser.settings.userClaimedAiCredits = true;
        }
        telemetry.track("User claimed OpenAI credits");
        showSuccessCallout.value = true;
      } catch (e) {
        toast.showError(
          e,
          i18n.baseText("freeAi.credits.showError.claim.title"),
          i18n.baseText("freeAi.credits.showError.claim.message")
        );
      } finally {
        claimingCredits.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_callout = resolveComponent("n8n-callout");
      const _component_n8n_text = resolveComponent("n8n-text");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        userCanClaimOpenAiCredits.value && !showSuccessCallout.value ? (openBlock(), createBlock(_component_n8n_callout, {
          key: 0,
          theme: "secondary",
          icon: "exclamation-circle"
        }, {
          trailingContent: withCtx(() => [
            createVNode(_component_n8n_button, {
              type: "tertiary",
              size: "small",
              label: unref(i18n).baseText("freeAi.credits.callout.claim.button.label"),
              loading: claimingCredits.value,
              onClick: onClaimCreditsClicked
            }, null, 8, ["label", "loading"])
          ]),
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.claim.title", {
              interpolate: { credits: unref(settingsStore).aiCreditsQuota }
            })) + " ", 1)
          ]),
          _: 1
        })) : showSuccessCallout.value ? (openBlock(), createBlock(_component_n8n_callout, {
          key: 1,
          theme: "success",
          icon: "check-circle"
        }, {
          default: withCtx(() => [
            createVNode(_component_n8n_text, { size: "small" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part1", {
                  interpolate: { credits: unref(settingsStore).aiCreditsQuota }
                })), 1)
              ]),
              _: 1
            }),
            _cache[0] || (_cache[0] = createTextVNode("  ")),
            createVNode(_component_n8n_text, {
              size: "small",
              bold: "true"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part2")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "header-side-menu" };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = {
  key: 0,
  class: "node-is-not-valid"
};
const _hoisted_4$1 = { class: "missingNodeTitleContainer mt-s mb-xs" };
const _hoisted_5$1 = { class: "mb-l" };
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = ["href", "textContent"];
const _hoisted_8$1 = {
  key: 1,
  class: "node-parameters-wrapper",
  "data-test-id": "node-parameters"
};
const _hoisted_9 = {
  key: 1,
  class: "no-parameters"
};
const _hoisted_10 = {
  key: 2,
  class: "parameter-item parameter-notice",
  "data-test-id": "node-parameters-http-notice"
};
const _hoisted_11 = {
  class: "node-version",
  "data-test-id": "node-version"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NodeSettings",
  props: {
    eventBus: {},
    dragging: { type: Boolean },
    pushRef: {},
    nodeType: {},
    readOnly: { type: Boolean, default: false },
    foreignCredentials: { default: () => [] },
    blockUI: { type: Boolean, default: false },
    executable: { type: Boolean, default: true },
    inputSize: { default: 0 }
  },
  emits: ["stopExecution", "redrawRequired", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "activate", "execute"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const credentialsStore = useCredentialsStore();
    const historyStore = useHistoryStore();
    const telemetry = useTelemetry();
    const nodeHelpers = useNodeHelpers();
    const externalHooks = useExternalHooks();
    const i18n = useI18n();
    const nodeValid = ref(true);
    const openPanel = ref("params");
    const nodeValues = ref({
      color: "#ff0000",
      alwaysOutputData: false,
      executeOnce: false,
      notesInFlow: false,
      onError: "stopWorkflow",
      retryOnFail: false,
      maxTries: 3,
      waitBetweenTries: 1e3,
      notes: "",
      parameters: {}
    });
    const nodeValuesInitialized = ref(false);
    const hiddenIssuesInputs = ref([]);
    const nodeSettings = ref([]);
    const subConnections = ref(null);
    const currentWorkflowInstance = computed(() => workflowsStore.getCurrentWorkflow());
    const currentWorkflow = computed(
      () => workflowsStore.getWorkflowById(currentWorkflowInstance.value.id)
    );
    const hasForeignCredential = computed(() => props.foreignCredentials.length > 0);
    const isHomeProjectTeam = computed(
      () => currentWorkflow.value?.homeProject?.type === ProjectTypes.Team
    );
    const isReadOnly = computed(
      () => props.readOnly || hasForeignCredential.value && !isHomeProjectTeam.value
    );
    const node2 = computed(() => ndvStore.activeNode);
    const isTriggerNode = computed(() => !!node2.value && nodeTypesStore.isTriggerNode(node2.value.type));
    const isToolNode = computed(() => !!node2.value && nodeTypesStore.isToolNode(node2.value.type));
    const isExecutable = computed(() => {
      if (props.nodeType && node2.value) {
        const workflowNode = currentWorkflowInstance.value.getNode(node2.value.name);
        const inputs = getNodeInputs(
          currentWorkflowInstance.value,
          workflowNode,
          props.nodeType
        );
        const inputNames = getConnectionTypes(inputs);
        if (!inputNames.includes(NodeConnectionTypes.Main) && !isToolNode.value && !isTriggerNode.value) {
          return false;
        }
      }
      return props.executable || props.foreignCredentials.length > 0;
    });
    const nodeTypeVersions = computed(() => {
      if (!node2.value) return [];
      return nodeTypesStore.getNodeVersions(node2.value.type);
    });
    const latestVersion = computed(() => Math.max(...nodeTypeVersions.value));
    const isLatestNodeVersion = computed(
      () => !node2.value?.typeVersion || latestVersion.value === node2.value.typeVersion
    );
    const executeButtonTooltip = computed(() => {
      if (node2.value && isLatestNodeVersion.value && props.inputSize > 1 && !nodeHelpers.isSingleExecution(node2.value.type, node2.value.parameters)) {
        return i18n.baseText("nodeSettings.executeButtonTooltip.times", {
          interpolate: { inputSize: props.inputSize }
        });
      }
      return "";
    });
    const nodeVersionTag = computed(() => {
      if (!props.nodeType || props.nodeType.hidden) {
        return i18n.baseText("nodeSettings.deprecated");
      }
      if (isLatestNodeVersion.value) {
        return i18n.baseText("nodeSettings.latest");
      }
      return i18n.baseText("nodeSettings.latestVersion", {
        interpolate: { version: latestVersion.value.toString() }
      });
    });
    const parameters = computed(() => {
      if (props.nodeType === null) {
        return [];
      }
      return props.nodeType?.properties ?? [];
    });
    const parametersSetting = computed(() => parameters.value.filter((item) => item.isNodeSetting));
    const parametersNoneSetting = computed(
      () => (
        // The connection hint notice is visually hidden via CSS in NodeDetails.vue when the node has output connections
        parameters.value.filter((item) => !item.isNodeSetting)
      )
    );
    const isDisplayingCredentials = computed(
      () => credentialsStore.getCredentialTypesNodeDescriptions("", props.nodeType).filter((credentialTypeDescription) => displayCredentials(credentialTypeDescription)).length > 0
    );
    const showNoParametersNotice = computed(
      () => !isDisplayingCredentials.value && parametersNoneSetting.value.filter((item) => item.type !== "notice").length === 0
    );
    const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
    const isCommunityNode = computed(() => !!node2.value && isCommunityPackageName(node2.value.type));
    const usedCredentials = computed(
      () => Object.values(workflowsStore.usedCredentials).filter(
        (credential) => Object.values(node2.value?.credentials || []).find(
          (nodeCredential) => nodeCredential.id === credential.id
        )
      )
    );
    const credentialOwnerName = computed(() => {
      const credential = usedCredentials.value ? Object.values(usedCredentials.value).find(
        (credential2) => credential2.id === props.foreignCredentials[0]
      ) : void 0;
      return credentialsStore.getCredentialOwnerName(credential);
    });
    const setValue = (name, value) => {
      const nameParts = name.split(".");
      let lastNamePart = nameParts.pop();
      let isArray = false;
      if (lastNamePart !== void 0 && lastNamePart.includes("[")) {
        const lastNameParts = lastNamePart.match(/(.*)\[(\d+)\]$/);
        if (lastNameParts) {
          nameParts.push(lastNameParts[1]);
          lastNamePart = lastNameParts[2];
          isArray = true;
        }
      }
      if (nameParts.length === 0) {
        if (value === null) {
          if (lastNamePart) {
            const { [lastNamePart]: removedNodeValue, ...remainingNodeValues } = nodeValues.value;
            nodeValues.value = remainingNodeValues;
          }
        } else {
          nodeValues.value = {
            ...nodeValues.value,
            [lastNamePart]: value
          };
        }
      } else {
        if (value === null) {
          let tempValue = get(nodeValues.value, nameParts.join("."));
          if (lastNamePart && !Array.isArray(tempValue)) {
            const { [lastNamePart]: removedNodeValue, ...remainingNodeValues } = tempValue;
            tempValue = remainingNodeValues;
          }
          if (isArray && Array.isArray(tempValue) && tempValue.length === 0) {
            lastNamePart = nameParts.pop();
            tempValue = get(nodeValues.value, nameParts.join("."));
            if (lastNamePart) {
              const { [lastNamePart]: removedArrayNodeValue, ...remainingArrayNodeValues } = tempValue;
              tempValue = remainingArrayNodeValues;
            }
          }
        } else {
          if (typeof value === "object") {
            set(
              get(nodeValues.value, nameParts.join(".")),
              lastNamePart,
              deepCopy(value)
            );
          } else {
            set(
              get(nodeValues.value, nameParts.join(".")),
              lastNamePart,
              value
            );
          }
        }
      }
      nodeValues.value = { ...nodeValues.value };
    };
    const removeMismatchedOptionValues = (nodeType, nodeParameterValues, updatedParameter) => {
      nodeType.properties.forEach((prop) => {
        const displayOptions = prop.displayOptions;
        if (!nodeParameterValues?.hasOwnProperty(prop.name) || !displayOptions || !prop.options) {
          return;
        }
        const showCondition = displayOptions.show?.[updatedParameter.name];
        const hideCondition = displayOptions.hide?.[updatedParameter.name];
        if (showCondition === void 0 && hideCondition === void 0) {
          return;
        }
        let hasValidOptions = true;
        if (isINodePropertyCollectionList(prop.options) || isINodePropertiesList(prop.options)) {
          hasValidOptions = Object.keys(nodeParameterValues).every(
            (key) => (prop.options ?? []).find((option) => option.name === key) !== void 0
          );
        } else if (isINodePropertyOptionsList(prop.options)) {
          hasValidOptions = !!prop.options.find(
            (option) => option.value === nodeParameterValues[prop.name]
          );
        }
        if (!hasValidOptions && displayParameter(nodeParameterValues, prop, node2.value, nodeType)) {
          unset(nodeParameterValues, prop.name);
        }
      });
    };
    const valueChanged = (parameterData) => {
      let newValue;
      if (parameterData.hasOwnProperty("value")) {
        newValue = parameterData.value;
      } else {
        newValue = get(nodeValues.value, parameterData.name);
      }
      const nodeNameBefore = parameterData.node || node2.value?.name;
      if (!nodeNameBefore) {
        return;
      }
      const _node = workflowsStore.getNodeByName(nodeNameBefore);
      if (_node === null) {
        return;
      }
      if (parameterData.name === "onError") {
        emit("redrawRequired");
      }
      if (parameterData.name === "name") {
        const sendData = {
          value: newValue,
          oldValue: nodeNameBefore,
          name: parameterData.name
        };
        emit("valueChanged", sendData);
      } else if (parameterData.name === "parameters") {
        const nodeType = nodeTypesStore.getNodeType(_node.type, _node.typeVersion);
        if (!nodeType) {
          return;
        }
        let nodeParameters = getNodeParameters(
          nodeType.properties,
          _node.parameters,
          false,
          false,
          _node,
          nodeType
        );
        const oldNodeParameters = Object.assign({}, nodeParameters);
        nodeParameters = deepCopy(nodeParameters);
        if (parameterData.value && typeof parameterData.value === "object") {
          for (const parameterName of Object.keys(parameterData.value)) {
            newValue = parameterData.value[parameterName];
            const parameterPath = parameterName.split(".").slice(1).join(".");
            const parameterPathArray = parameterPath.match(/(.*)\[(\d+)\]$/);
            if (parameterData[parameterName] === void 0 && parameterPathArray !== null) {
              const path = parameterPathArray[1];
              const index = parameterPathArray[2];
              const data = get(nodeParameters, path);
              if (Array.isArray(data)) {
                data.splice(parseInt(index, 10), 1);
                set(nodeParameters, path, data);
              }
            } else {
              if (newValue === void 0) {
                unset(nodeParameters, parameterPath);
              } else {
                set(nodeParameters, parameterPath, newValue);
              }
            }
            void externalHooks.run("nodeSettings.valueChanged", {
              parameterPath,
              newValue,
              parameters: parameters.value,
              oldNodeParameters
            });
          }
        }
        nodeParameters = getNodeParameters(
          nodeType.properties,
          nodeParameters,
          true,
          false,
          _node,
          nodeType
        );
        for (const key of Object.keys(nodeParameters)) {
          if (nodeParameters && nodeParameters[key] !== null && nodeParameters[key] !== void 0) {
            setValue(`parameters.${key}`, nodeParameters[key]);
          }
        }
        if (nodeParameters) {
          const updateInformation = {
            name: _node.name,
            value: nodeParameters
          };
          workflowsStore.setNodeParameters(updateInformation);
          nodeHelpers.updateNodeParameterIssuesByName(_node.name);
          nodeHelpers.updateNodeCredentialIssuesByName(_node.name);
        }
      } else if (parameterData.name.startsWith("parameters.")) {
        const nodeType = nodeTypesStore.getNodeType(_node.type, _node.typeVersion);
        if (!nodeType) {
          return;
        }
        let nodeParameters = getNodeParameters(
          nodeType.properties,
          _node.parameters,
          false,
          false,
          _node,
          nodeType
        );
        const oldNodeParameters = Object.assign({}, nodeParameters);
        nodeParameters = deepCopy(nodeParameters);
        const parameterPath = parameterData.name.split(".").slice(1).join(".");
        const parameterPathArray = parameterPath.match(/(.*)\[(\d+)\]$/);
        if (parameterData.value === void 0 && parameterPathArray !== null) {
          const path = parameterPathArray[1];
          const index = parameterPathArray[2];
          const data = get(nodeParameters, path);
          if (Array.isArray(data)) {
            data.splice(parseInt(index, 10), 1);
            set(nodeParameters, path, data);
          }
        } else {
          if (newValue === void 0) {
            unset(nodeParameters, parameterPath);
          } else {
            set(nodeParameters, parameterPath, newValue);
          }
          removeMismatchedOptionValues(nodeType, nodeParameters, {
            name: parameterPath
          });
        }
        nodeParameters = getNodeParameters(
          nodeType.properties,
          nodeParameters,
          true,
          false,
          _node,
          nodeType
        );
        if (isToolNode.value) {
          const updatedDescription = getUpdatedToolDescription(
            props.nodeType,
            nodeParameters,
            node2.value?.parameters
          );
          if (updatedDescription && nodeParameters) {
            nodeParameters.toolDescription = updatedDescription;
          }
        }
        for (const key of Object.keys(nodeParameters)) {
          if (nodeParameters && nodeParameters[key] !== null && nodeParameters[key] !== void 0) {
            setValue(`parameters.${key}`, nodeParameters[key]);
          }
        }
        const updateInformation = {
          name: _node.name,
          value: nodeParameters
        };
        const connections2 = workflowsStore.allConnections;
        const updatedConnections = updateDynamicConnections(_node, connections2, parameterData);
        if (updatedConnections) {
          workflowsStore.setConnections(updatedConnections, true);
        }
        workflowsStore.setNodeParameters(updateInformation);
        void externalHooks.run("nodeSettings.valueChanged", {
          parameterPath,
          newValue,
          parameters: parameters.value,
          oldNodeParameters
        });
        nodeHelpers.updateNodeParameterIssuesByName(_node.name);
        nodeHelpers.updateNodeCredentialIssuesByName(_node.name);
        telemetry.trackNodeParametersValuesChange(nodeType.name, parameterData);
      } else {
        nodeValues.value = {
          ...nodeValues.value,
          [parameterData.name]: newValue
        };
        const updateInformation = {
          name: _node.name,
          key: parameterData.name,
          value: newValue
        };
        workflowsStore.setNodeValue(updateInformation);
      }
    };
    const setHttpNodeParameters = (parameters2) => {
      try {
        valueChanged({
          node: node2.value?.name,
          name: "parameters",
          value: parameters2
        });
      } catch {
      }
    };
    const onSwitchSelectedNode = (node22) => {
      emit("switchSelectedNode", node22);
    };
    const onOpenConnectionNodeCreator = (nodeName, connectionType2) => {
      emit("openConnectionNodeCreator", nodeName, connectionType2);
    };
    const populateHiddenIssuesSet = () => {
      if (!node2.value || !workflowsStore.isNodePristine(node2.value.name)) return;
      hiddenIssuesInputs.value.push("credentials");
      parametersNoneSetting.value.forEach((parameter) => {
        hiddenIssuesInputs.value.push(parameter.name);
      });
      workflowsStore.setNodePristine(node2.value.name, false);
    };
    const populateSettings = () => {
      if (isExecutable.value && !isTriggerNode.value) {
        nodeSettings.value.push(
          ...[
            {
              displayName: i18n.baseText("nodeSettings.alwaysOutputData.displayName"),
              name: "alwaysOutputData",
              type: "boolean",
              default: false,
              noDataExpression: true,
              description: i18n.baseText("nodeSettings.alwaysOutputData.description")
            },
            {
              displayName: i18n.baseText("nodeSettings.executeOnce.displayName"),
              name: "executeOnce",
              type: "boolean",
              default: false,
              noDataExpression: true,
              description: i18n.baseText("nodeSettings.executeOnce.description")
            },
            {
              displayName: i18n.baseText("nodeSettings.retryOnFail.displayName"),
              name: "retryOnFail",
              type: "boolean",
              default: false,
              noDataExpression: true,
              description: i18n.baseText("nodeSettings.retryOnFail.description")
            },
            {
              displayName: i18n.baseText("nodeSettings.maxTries.displayName"),
              name: "maxTries",
              type: "number",
              typeOptions: {
                minValue: 2,
                maxValue: 5
              },
              default: 3,
              displayOptions: {
                show: {
                  retryOnFail: [true]
                }
              },
              noDataExpression: true,
              description: i18n.baseText("nodeSettings.maxTries.description")
            },
            {
              displayName: i18n.baseText("nodeSettings.waitBetweenTries.displayName"),
              name: "waitBetweenTries",
              type: "number",
              typeOptions: {
                minValue: 0,
                maxValue: 5e3
              },
              default: 1e3,
              displayOptions: {
                show: {
                  retryOnFail: [true]
                }
              },
              noDataExpression: true,
              description: i18n.baseText("nodeSettings.waitBetweenTries.description")
            },
            {
              displayName: i18n.baseText("nodeSettings.onError.displayName"),
              name: "onError",
              type: "options",
              options: [
                {
                  name: i18n.baseText("nodeSettings.onError.options.stopWorkflow.displayName"),
                  value: "stopWorkflow",
                  description: i18n.baseText("nodeSettings.onError.options.stopWorkflow.description")
                },
                {
                  name: i18n.baseText("nodeSettings.onError.options.continueRegularOutput.displayName"),
                  value: "continueRegularOutput",
                  description: i18n.baseText(
                    "nodeSettings.onError.options.continueRegularOutput.description"
                  )
                },
                {
                  name: i18n.baseText("nodeSettings.onError.options.continueErrorOutput.displayName"),
                  value: "continueErrorOutput",
                  description: i18n.baseText(
                    "nodeSettings.onError.options.continueErrorOutput.description"
                  )
                }
              ],
              default: "stopWorkflow",
              description: i18n.baseText("nodeSettings.onError.description"),
              noDataExpression: true
            }
          ]
        );
      }
      nodeSettings.value.push(
        ...[
          {
            displayName: i18n.baseText("nodeSettings.notes.displayName"),
            name: "notes",
            type: "string",
            typeOptions: {
              rows: 5
            },
            default: "",
            noDataExpression: true,
            description: i18n.baseText("nodeSettings.notes.description")
          },
          {
            displayName: i18n.baseText("nodeSettings.notesInFlow.displayName"),
            name: "notesInFlow",
            type: "boolean",
            default: false,
            noDataExpression: true,
            description: i18n.baseText("nodeSettings.notesInFlow.description")
          }
        ]
      );
    };
    const onParameterBlur = (parameterName) => {
      hiddenIssuesInputs.value = hiddenIssuesInputs.value.filter((name) => name !== parameterName);
    };
    const onWorkflowActivate = () => {
      hiddenIssuesInputs.value = [];
      emit("activate");
    };
    const onNodeExecute = () => {
      hiddenIssuesInputs.value = [];
      subConnections.value?.showNodeInputsIssues();
      emit("execute");
    };
    const credentialSelected = (updateInformation) => {
      workflowsStore.updateNodeProperties(updateInformation);
      const node22 = workflowsStore.getNodeByName(updateInformation.name);
      if (node22) {
        nodeHelpers.updateNodeCredentialIssues(node22);
      }
      void externalHooks.run("nodeSettings.credentialSelected", { updateInformation });
    };
    const nameChanged = (name) => {
      if (node2.value) {
        historyStore.pushCommandToUndo(new RenameNodeCommand(node2.value.name, name, Date.now()));
      }
      valueChanged({
        value: name,
        name: "name"
      });
    };
    const setNodeValues = () => {
      if (!node2.value) {
        nodeValuesInitialized.value = true;
        return;
      }
      if (props.nodeType !== null) {
        nodeValid.value = true;
        const foundNodeSettings = [];
        if (node2.value.color) {
          foundNodeSettings.push("color");
          nodeValues.value = {
            ...nodeValues.value,
            color: node2.value.color
          };
        }
        if (node2.value.notes) {
          foundNodeSettings.push("notes");
          nodeValues.value = {
            ...nodeValues.value,
            notes: node2.value.notes
          };
        }
        if (node2.value.alwaysOutputData) {
          foundNodeSettings.push("alwaysOutputData");
          nodeValues.value = {
            ...nodeValues.value,
            alwaysOutputData: node2.value.alwaysOutputData
          };
        }
        if (node2.value.executeOnce) {
          foundNodeSettings.push("executeOnce");
          nodeValues.value = {
            ...nodeValues.value,
            executeOnce: node2.value.executeOnce
          };
        }
        if (node2.value.continueOnFail) {
          foundNodeSettings.push("onError");
          nodeValues.value = {
            ...nodeValues.value,
            onError: "continueRegularOutput"
          };
        }
        if (node2.value.onError) {
          foundNodeSettings.push("onError");
          nodeValues.value = {
            ...nodeValues.value,
            onError: node2.value.onError
          };
        }
        if (node2.value.notesInFlow) {
          foundNodeSettings.push("notesInFlow");
          nodeValues.value = {
            ...nodeValues.value,
            notesInFlow: node2.value.notesInFlow
          };
        }
        if (node2.value.retryOnFail) {
          foundNodeSettings.push("retryOnFail");
          nodeValues.value = {
            ...nodeValues.value,
            retryOnFail: node2.value.retryOnFail
          };
        }
        if (node2.value.maxTries) {
          foundNodeSettings.push("maxTries");
          nodeValues.value = {
            ...nodeValues.value,
            maxTries: node2.value.maxTries
          };
        }
        if (node2.value.waitBetweenTries) {
          foundNodeSettings.push("waitBetweenTries");
          nodeValues.value = {
            ...nodeValues.value,
            waitBetweenTries: node2.value.waitBetweenTries
          };
        }
        for (const nodeSetting of nodeSettings.value) {
          if (!foundNodeSettings.includes(nodeSetting.name)) {
            nodeValues.value = {
              ...nodeValues.value,
              [nodeSetting.name]: nodeSetting.default
            };
          }
        }
        nodeValues.value = {
          ...nodeValues.value,
          parameters: deepCopy(node2.value.parameters)
        };
      } else {
        nodeValid.value = false;
      }
      nodeValuesInitialized.value = true;
    };
    const onMissingNodeTextClick = (event) => {
      if (event.target.localName === "a") {
        telemetry.track("user clicked cnr browse button", {
          source: "cnr missing node modal"
        });
      }
    };
    const onMissingNodeLearnMoreLinkClick = () => {
      telemetry.track("user clicked cnr docs link", {
        source: "missing node modal source",
        package_name: node2.value?.type.split(".")[0],
        node_type: node2.value?.type
      });
    };
    const onStopExecution = () => {
      emit("stopExecution");
    };
    const openSettings = () => {
      openPanel.value = "settings";
    };
    const onTabSelect = (tab) => {
      openPanel.value = tab;
    };
    watch(node2, () => {
      setNodeValues();
    });
    onMounted(() => {
      populateHiddenIssuesSet();
      populateSettings();
      setNodeValues();
      props.eventBus?.on("openSettings", openSettings);
      nodeHelpers.updateNodeParameterIssues(node2.value, props.nodeType);
      importCurlEventBus.on("setHttpNodeParameters", setHttpNodeParameters);
      ndvEventBus.on("updateParameterValue", valueChanged);
    });
    onBeforeUnmount(() => {
      props.eventBus?.off("openSettings", openSettings);
      importCurlEventBus.off("setHttpNodeParameters", setHttpNodeParameters);
      ndvEventBus.off("updateParameterValue", valueChanged);
    });
    function displayCredentials(credentialTypeDescription) {
      if (credentialTypeDescription.displayOptions === void 0) {
        return true;
      }
      return !!node2.value && nodeHelpers.displayParameter(node2.value.parameters, credentialTypeDescription, "", node2.value);
    }
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_notice = resolveComponent("n8n-notice");
      const _component_n8n_block_ui = resolveComponent("n8n-block-ui");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({
          "node-settings": true,
          dragging: _ctx.dragging
        }),
        onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("div", _hoisted_1$5, [
            node2.value ? (openBlock(), createBlock(NodeTitle, {
              key: 0,
              class: "node-name",
              "model-value": node2.value.name,
              "node-type": _ctx.nodeType,
              "read-only": isReadOnly.value,
              "onUpdate:modelValue": nameChanged
            }, null, 8, ["model-value", "node-type", "read-only"])) : createCommentVNode("", true),
            isExecutable.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
              !_ctx.blockUI && node2.value && nodeValid.value ? (openBlock(), createBlock(_sfc_main$h, {
                key: 0,
                "data-test-id": "node-execute-button",
                "node-name": node2.value.name,
                disabled: outputPanelEditMode.value.enabled && !isTriggerNode.value,
                tooltip: executeButtonTooltip.value,
                size: "small",
                "telemetry-source": "parameters",
                onExecute: onNodeExecute,
                onStopExecution,
                onValueChanged: valueChanged
              }, null, 8, ["node-name", "disabled", "tooltip"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ]),
          node2.value && nodeValid.value ? (openBlock(), createBlock(_sfc_main$e, {
            key: 0,
            "model-value": openPanel.value,
            "node-type": _ctx.nodeType,
            "push-ref": _ctx.pushRef,
            "onUpdate:modelValue": onTabSelect
          }, null, 8, ["model-value", "node-type", "push-ref"])) : createCommentVNode("", true)
        ], 2),
        node2.value && !nodeValid.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.warningIcon)
          }, [
            createVNode(_component_font_awesome_icon, { icon: "exclamation-triangle" })
          ], 2),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_n8n_text, {
              size: "large",
              color: "text-dark",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.title")), 1)
              ]),
              _: 1
            })
          ]),
          isCommunityNode.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.descriptionContainer)
          }, [
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_i18n_t, {
                keypath: "nodeSettings.communityNodeUnknown.description",
                tag: "span",
                onClick: onMissingNodeTextClick
              }, {
                action: withCtx(() => [
                  createBaseVNode("a", {
                    href: `https://www.npmjs.com/package/${node2.value.type.split(".")[0]}`,
                    target: "_blank"
                  }, toDisplayString(node2.value.type.split(".")[0]), 9, _hoisted_6$1)
                ]),
                _: 1
              })
            ]),
            createVNode(_component_n8n_link, {
              to: unref(COMMUNITY_NODES_INSTALLATION_DOCS_URL),
              onClick: onMissingNodeLearnMoreLinkClick
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.installLink.text")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)) : (openBlock(), createBlock(_component_i18n_t, {
            key: 1,
            keypath: "nodeSettings.nodeTypeUnknown.description",
            tag: "span"
          }, {
            action: withCtx(() => [
              createBaseVNode("a", {
                href: unref(CUSTOM_NODES_DOCS_URL),
                target: "_blank",
                textContent: toDisplayString(unref(i18n).baseText("nodeSettings.nodeTypeUnknown.description.customNode"))
              }, null, 8, _hoisted_7$1)
            ]),
            _: 1
          }))
        ])) : createCommentVNode("", true),
        node2.value && nodeValid.value ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
          hasForeignCredential.value && !isHomeProjectTeam.value ? (openBlock(), createBlock(_component_n8n_notice, {
            key: 0,
            content: unref(i18n).baseText("nodeSettings.hasForeignCredential", {
              interpolate: { owner: credentialOwnerName.value }
            })
          }, null, 8, ["content"])) : createCommentVNode("", true),
          createVNode(_sfc_main$b),
          withDirectives(createBaseVNode("div", null, [
            createVNode(NodeWebhooks, {
              node: node2.value,
              "node-type-description": _ctx.nodeType
            }, null, 8, ["node", "node-type-description"]),
            nodeValuesInitialized.value ? (openBlock(), createBlock(_sfc_main$i, {
              key: 0,
              parameters: parametersNoneSetting.value,
              "hide-delete": true,
              "node-values": nodeValues.value,
              "is-read-only": isReadOnly.value,
              "hidden-issues-inputs": hiddenIssuesInputs.value,
              path: "parameters",
              onValueChanged: valueChanged,
              onActivate: onWorkflowActivate,
              onParameterBlur
            }, {
              default: withCtx(() => [
                createVNode(NodeCredentials, {
                  node: node2.value,
                  readonly: isReadOnly.value,
                  "show-all": true,
                  "hide-issues": hiddenIssuesInputs.value.includes("credentials"),
                  onCredentialSelected: credentialSelected,
                  onValueChanged: valueChanged,
                  onBlur: onParameterBlur
                }, null, 8, ["node", "readonly", "hide-issues"])
              ]),
              _: 1
            }, 8, ["parameters", "node-values", "is-read-only", "hidden-issues-inputs"])) : createCommentVNode("", true),
            showNoParametersNotice.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createVNode(_component_n8n_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.thisNodeDoesNotHaveAnyParameters")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(nodeHelpers).isCustomApiCallSelected(nodeValues.value) ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createVNode(_component_n8n_notice, {
                content: unref(i18n).baseText("nodeSettings.useTheHttpRequestNode", {
                  interpolate: { nodeTypeDisplayName: _ctx.nodeType?.displayName ?? "" }
                })
              }, null, 8, ["content"])
            ])) : createCommentVNode("", true)
          ], 512), [
            [vShow, openPanel.value === "params"]
          ]),
          withDirectives(createBaseVNode("div", null, [
            createVNode(_sfc_main$i, {
              parameters: parametersSetting.value,
              "node-values": nodeValues.value,
              "is-read-only": isReadOnly.value,
              "hide-delete": true,
              "hidden-issues-inputs": hiddenIssuesInputs.value,
              path: "parameters",
              onValueChanged: valueChanged,
              onParameterBlur
            }, null, 8, ["parameters", "node-values", "is-read-only", "hidden-issues-inputs"]),
            createVNode(_sfc_main$i, {
              parameters: nodeSettings.value,
              "hide-delete": true,
              "node-values": nodeValues.value,
              "is-read-only": isReadOnly.value,
              "hidden-issues-inputs": hiddenIssuesInputs.value,
              path: "",
              onValueChanged: valueChanged,
              onParameterBlur
            }, null, 8, ["parameters", "node-values", "is-read-only", "hidden-issues-inputs"]),
            createBaseVNode("div", _hoisted_11, [
              createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.nodeVersion", {
                interpolate: {
                  node: _ctx.nodeType?.displayName,
                  version: (node2.value.typeVersion ?? latestVersion.value).toString()
                }
              })) + " ", 1),
              createBaseVNode("span", null, "(" + toDisplayString(nodeVersionTag.value) + ")", 1)
            ])
          ], 512), [
            [vShow, openPanel.value === "settings"]
          ])
        ])) : createCommentVNode("", true),
        node2.value ? (openBlock(), createBlock(NDVSubConnections, {
          key: 2,
          ref_key: "subConnections",
          ref: subConnections,
          "root-node": node2.value,
          onSwitchSelectedNode,
          onOpenConnectionNodeCreator
        }, null, 8, ["root-node"])) : createCommentVNode("", true),
        createVNode(_component_n8n_block_ui, { show: _ctx.blockUI }, null, 8, ["show"])
      ], 34);
    };
  }
});
const header$1 = "_header_13al3_123";
const warningIcon = "_warningIcon_13al3_127";
const descriptionContainer = "_descriptionContainer_13al3_132";
const style0$8 = {
  header: header$1,
  warningIcon,
  descriptionContainer
};
const cssModules$9 = {
  "$style": style0$8
};
const NodeSettings = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$9], ["__scopeId", "data-v-f247a28e"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PanelDragButton",
  props: {
    canMoveRight: { type: Boolean },
    canMoveLeft: { type: Boolean }
  },
  emits: ["drag", "dragstart", "dragend"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const onDrag = (e) => {
      emit("drag", e);
    };
    const onDragEnd = () => {
      emit("dragend");
    };
    const onDragStart = () => {
      emit("dragstart");
    };
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createBlock(Draggable, {
        type: "panel-resize",
        class: normalizeClass(_ctx.$style.dragContainer),
        onDrag,
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, {
        default: withCtx(({ isDragging }) => [
          createBaseVNode("div", {
            class: normalizeClass({ [_ctx.$style.dragButton]: true }),
            "data-test-id": "panel-drag-button"
          }, [
            _ctx.canMoveLeft ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass({ [_ctx.$style.leftArrow]: true, [_ctx.$style.visible]: isDragging })
            }, [
              createVNode(_component_font_awesome_icon, { icon: "arrow-left" })
            ], 2)) : createCommentVNode("", true),
            _ctx.canMoveRight ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass({ [_ctx.$style.rightArrow]: true, [_ctx.$style.visible]: isDragging })
            }, [
              createVNode(_component_font_awesome_icon, { icon: "arrow-right" })
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.grid)
            }, _cache[0] || (_cache[0] = [
              createBaseVNode("div", null, [
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div")
              ], -1),
              createBaseVNode("div", null, [
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div")
              ], -1)
            ]), 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const dragContainer = "_dragContainer_16elv_123";
const dragButton = "_dragButton_16elv_127";
const leftArrow = "_leftArrow_16elv_141 _arrow_16elv_150";
const rightArrow = "_rightArrow_16elv_142 _arrow_16elv_150";
const visible$1 = "_visible_16elv_146";
const arrow = "_arrow_16elv_150";
const grid = "_grid_16elv_168";
const style0$7 = {
  dragContainer,
  dragButton,
  leftArrow,
  rightArrow,
  visible: visible$1,
  arrow,
  grid
};
const cssModules$8 = {
  "$style": style0$7
};
const PanelDragButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$8]]);
const _hoisted_1$4 = ["data-node-name", "data-node-placement", "onClick"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NDVFloatingNodes",
  props: {
    rootNode: {}
  },
  emits: ["switchSelectedNode"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflow = workflowsStore.getCurrentWorkflow();
    const emit = __emit;
    function moveNodeDirection(direction) {
      const matchedDirectionNode = connectedNodes2.value[direction][0];
      if (matchedDirectionNode) {
        emit("switchSelectedNode", matchedDirectionNode.node.name);
      }
    }
    function onKeyDown(e) {
      if (e.shiftKey && e.altKey && (e.ctrlKey || e.metaKey)) {
        const mapper = {
          ArrowUp: "outputSub",
          ArrowRight: "outputMain",
          ArrowLeft: "inputMain"
          /* left */
        };
        const matchingDirection = mapper[e.key] || null;
        if (matchingDirection) {
          moveNodeDirection(matchingDirection);
        }
      }
    }
    function getINodesFromNames(names) {
      return names.map((name) => {
        const node2 = workflowsStore.getNodeByName(name);
        if (node2) {
          const nodeType = nodeTypesStore.getNodeType(node2.type);
          if (nodeType) {
            return { node: node2, nodeType };
          }
        }
        return null;
      }).filter((n) => n !== null);
    }
    const connectedNodes2 = computed(() => {
      const rootName = props.rootNode.name;
      return {
        [
          "outputSub"
          /* top */
        ]: getINodesFromNames(
          workflow.getChildNodes(rootName, "ALL_NON_MAIN")
        ),
        [
          "outputMain"
          /* right */
        ]: getINodesFromNames(
          workflow.getChildNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse(),
        [
          "inputMain"
          /* left */
        ]: getINodesFromNames(
          workflow.getParentNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse()
      };
    });
    const connectionGroups = [
      "outputSub",
      "outputMain",
      "inputMain"
      /* left */
    ];
    const tooltipPositionMapper = {
      [
        "outputSub"
        /* top */
      ]: "bottom",
      [
        "outputMain"
        /* right */
      ]: "left",
      [
        "inputMain"
        /* left */
      ]: "right"
    };
    onMounted(() => {
      document.addEventListener("keydown", onKeyDown, true);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onKeyDown, true);
    });
    __expose({
      moveNodeDirection
    });
    return (_ctx, _cache) => {
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(_ctx.$style.floatingNodes)
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(connectionGroups, (connectionGroup) => {
          return createBaseVNode("ul", {
            key: connectionGroup,
            class: normalizeClass([_ctx.$style.nodesList, _ctx.$style[connectionGroup]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes2.value[connectionGroup], ({ node: node2, nodeType }) => {
              return openBlock(), createElementBlock(Fragment, null, [
                node2 && nodeType ? (openBlock(), createBlock(_component_n8n_tooltip, {
                  key: node2.name,
                  placement: tooltipPositionMapper[connectionGroup],
                  teleported: false,
                  offset: 60
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(node2.name), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("li", {
                      class: normalizeClass(_ctx.$style.connectedNode),
                      "data-test-id": "floating-node",
                      "data-node-name": node2.name,
                      "data-node-placement": connectionGroup,
                      onClick: ($event) => emit("switchSelectedNode", node2.name)
                    }, [
                      createVNode(_sfc_main$g, {
                        "node-type": nodeType,
                        "node-name": node2.name,
                        "tooltip-position": tooltipPositionMapper[connectionGroup],
                        size: 35,
                        circle: ""
                      }, null, 8, ["node-type", "node-name", "tooltip-position"])
                    ], 10, _hoisted_1$4)
                  ]),
                  _: 2
                }, 1032, ["placement"])) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ], 2);
        }), 64))
      ], 2);
    };
  }
});
const floatingNodes = "_floatingNodes_1tkq5_123";
const nodesList = "_nodesList_1tkq5_137";
const inputSub = "_inputSub_1tkq5_151";
const outputSub = "_outputSub_1tkq5_151";
const outputMain = "_outputMain_1tkq5_162";
const inputMain = "_inputMain_1tkq5_162";
const connectedNode = "_connectedNode_1tkq5_185";
const style0$6 = {
  floatingNodes,
  nodesList,
  inputSub,
  outputSub,
  outputMain,
  inputMain,
  connectedNode
};
const cssModules$7 = {
  "$style": style0$6
};
const NDVFloatingNodes = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$7]]);
const SIDE_MARGIN = 24;
const SIDE_PANELS_MARGIN = 80;
const MIN_PANEL_WIDTH = 310;
const PANEL_WIDTH = 350;
const PANEL_WIDTH_LARGE = 420;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NDVDraggablePanels",
  props: {
    isDraggable: { type: Boolean },
    hideInputAndOutput: { type: Boolean },
    nodeType: {}
  },
  emits: ["init", "dragstart", "dragend", "switchSelectedNode", "close"],
  setup(__props, { emit: __emit }) {
    const MIN_WINDOW_WIDTH = 2 * (SIDE_MARGIN + SIDE_PANELS_MARGIN) + MIN_PANEL_WIDTH;
    const initialMainPanelWidth = {
      regular: MAIN_NODE_PANEL_WIDTH,
      dragless: MAIN_NODE_PANEL_WIDTH,
      unknown: MAIN_NODE_PANEL_WIDTH,
      inputless: MAIN_NODE_PANEL_WIDTH,
      wide: MAIN_NODE_PANEL_WIDTH * 2
    };
    const throttledOnResize = useThrottleFn(onResize, 100);
    const ndvStore = useNDVStore();
    const uiStore = useUIStore();
    const props = __props;
    const isDragging = ref(false);
    const initialized = ref(false);
    const containerWidth = ref(uiStore.appGridDimensions.width);
    const emit = __emit;
    const slots = useSlots();
    onMounted(() => {
      if (mainPanelDimensions.value.relativeLeft === 1 && mainPanelDimensions.value.relativeRight === 1) {
        setMainPanelWidth();
        setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
        restorePositionData();
      }
      emit("init", { position: mainPanelDimensions.value.relativeLeft });
      setTimeout(() => {
        initialized.value = true;
      }, 0);
      ndvEventBus.on("setPositionByName", setPositionByName);
    });
    onBeforeUnmount(() => {
      ndvEventBus.off("setPositionByName", setPositionByName);
    });
    watch(
      () => uiStore.appGridDimensions,
      async (dimensions) => {
        const ndv = document.getElementById("ndv");
        if (ndv) {
          await nextTick();
          const { width: ndvWidth } = ndv.getBoundingClientRect();
          containerWidth.value = ndvWidth;
        } else {
          containerWidth.value = dimensions.width;
        }
        const minRelativeWidth = pxToRelativeWidth(MIN_PANEL_WIDTH);
        const isBelowMinWidthMainPanel = mainPanelDimensions.value.relativeWidth < minRelativeWidth;
        if (isBelowMinWidthMainPanel) {
          setMainPanelWidth(minRelativeWidth);
        }
        const isBelowMinLeft = minimumLeftPosition.value > mainPanelDimensions.value.relativeLeft;
        const isMaxRight = maximumRightPosition.value > mainPanelDimensions.value.relativeRight;
        if (dimensions.width > MIN_WINDOW_WIDTH && isBelowMinLeft && isMaxRight) {
          setMainPanelWidth(minRelativeWidth);
          setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
        }
        setPositions(mainPanelDimensions.value.relativeLeft);
      }
    );
    const currentNodePaneType = computed(() => {
      if (!hasInputSlot.value) return "inputless";
      if (!props.isDraggable) return "dragless";
      if (props.nodeType === null) return "unknown";
      return props.nodeType.parameterPane ?? "regular";
    });
    const mainPanelDimensions = computed(() => {
      return ndvStore.mainPanelDimensions[currentNodePaneType.value];
    });
    const calculatedPositions = computed(
      () => {
        const hasInput = slots.input !== void 0;
        const outputPanelRelativeLeft = mainPanelDimensions.value.relativeLeft + mainPanelDimensions.value.relativeWidth;
        const inputPanelRelativeRight = hasInput ? 1 - outputPanelRelativeLeft + mainPanelDimensions.value.relativeWidth : 1 - pxToRelativeWidth(SIDE_MARGIN);
        return {
          inputPanelRelativeRight,
          outputPanelRelativeLeft
        };
      }
    );
    const outputPanelRelativeTranslate = computed(() => {
      const panelMinLeft = 1 - pxToRelativeWidth(MIN_PANEL_WIDTH + SIDE_MARGIN);
      const currentRelativeLeftDelta = calculatedPositions.value.outputPanelRelativeLeft - panelMinLeft;
      return currentRelativeLeftDelta > 0 ? currentRelativeLeftDelta : 0;
    });
    const supportedResizeDirections = computed(() => {
      const supportedDirections = ["right"];
      if (props.isDraggable) supportedDirections.push("left");
      return supportedDirections;
    });
    const hasInputSlot = computed(() => {
      return slots.input !== void 0;
    });
    const inputPanelMargin = computed(() => pxToRelativeWidth(SIDE_PANELS_MARGIN));
    const minimumLeftPosition = computed(() => {
      if (containerWidth.value < MIN_WINDOW_WIDTH) return pxToRelativeWidth(1);
      if (!hasInputSlot.value) return pxToRelativeWidth(SIDE_MARGIN);
      return pxToRelativeWidth(SIDE_MARGIN + 20) + inputPanelMargin.value;
    });
    const maximumRightPosition = computed(() => {
      if (containerWidth.value < MIN_WINDOW_WIDTH) return pxToRelativeWidth(1);
      return pxToRelativeWidth(SIDE_MARGIN + 20) + inputPanelMargin.value;
    });
    const canMoveLeft = computed(() => {
      return mainPanelDimensions.value.relativeLeft > minimumLeftPosition.value;
    });
    const canMoveRight = computed(() => {
      return mainPanelDimensions.value.relativeRight > maximumRightPosition.value;
    });
    const mainPanelStyles = computed(() => {
      return {
        left: `${relativeWidthToPx(mainPanelDimensions.value.relativeLeft)}px`,
        right: `${relativeWidthToPx(mainPanelDimensions.value.relativeRight)}px`
      };
    });
    const inputPanelStyles = computed(() => {
      return {
        right: `${relativeWidthToPx(calculatedPositions.value.inputPanelRelativeRight)}px`
      };
    });
    const outputPanelStyles = computed(() => {
      return {
        left: `${relativeWidthToPx(calculatedPositions.value.outputPanelRelativeLeft)}px`,
        transform: `translateX(-${relativeWidthToPx(outputPanelRelativeTranslate.value)}px)`
      };
    });
    const hasDoubleWidth = computed(() => {
      return props.nodeType?.parameterPane === "wide";
    });
    const fixedPanelWidth = computed(() => {
      const multiplier = hasDoubleWidth.value ? 2 : 1;
      if (containerWidth.value > 1700) {
        return PANEL_WIDTH_LARGE * multiplier;
      }
      return PANEL_WIDTH * multiplier;
    });
    const onSwitchSelectedNode = (node2) => emit("switchSelectedNode", node2);
    function getInitialLeftPosition(width) {
      if (currentNodePaneType.value === "dragless")
        return pxToRelativeWidth(SIDE_MARGIN + 1 + fixedPanelWidth.value);
      return hasInputSlot.value ? 0.5 - width / 2 : minimumLeftPosition.value;
    }
    function setMainPanelWidth(relativeWidth) {
      const mainPanelRelativeWidth = relativeWidth || pxToRelativeWidth(initialMainPanelWidth[currentNodePaneType.value]);
      ndvStore.setMainPanelDimensions({
        panelType: currentNodePaneType.value,
        dimensions: {
          relativeWidth: mainPanelRelativeWidth
        }
      });
    }
    function setPositions(relativeLeft) {
      const mainPanelRelativeLeft = relativeLeft || 1 - calculatedPositions.value.inputPanelRelativeRight;
      const mainPanelRelativeRight = 1 - mainPanelRelativeLeft - mainPanelDimensions.value.relativeWidth;
      const isMaxRight = maximumRightPosition.value > mainPanelRelativeRight;
      const isMinLeft = minimumLeftPosition.value > mainPanelRelativeLeft;
      const isInputless = currentNodePaneType.value === "inputless";
      if (isMinLeft) {
        ndvStore.setMainPanelDimensions({
          panelType: currentNodePaneType.value,
          dimensions: {
            relativeLeft: minimumLeftPosition.value,
            relativeRight: 1 - mainPanelDimensions.value.relativeWidth - minimumLeftPosition.value
          }
        });
        return;
      }
      if (isMaxRight) {
        ndvStore.setMainPanelDimensions({
          panelType: currentNodePaneType.value,
          dimensions: {
            relativeLeft: 1 - mainPanelDimensions.value.relativeWidth - maximumRightPosition.value,
            relativeRight: maximumRightPosition.value
          }
        });
        return;
      }
      ndvStore.setMainPanelDimensions({
        panelType: currentNodePaneType.value,
        dimensions: {
          relativeLeft: isInputless ? minimumLeftPosition.value : mainPanelRelativeLeft,
          relativeRight: mainPanelRelativeRight
        }
      });
    }
    function setPositionByName(position) {
      const positionByName = {
        minLeft: minimumLeftPosition.value,
        maxRight: maximumRightPosition.value,
        initial: getInitialLeftPosition(mainPanelDimensions.value.relativeWidth)
      };
      setPositions(positionByName[position]);
    }
    function pxToRelativeWidth(px) {
      return px / containerWidth.value;
    }
    function relativeWidthToPx(relativeWidth) {
      return relativeWidth * containerWidth.value;
    }
    function onResizeEnd() {
      storePositionData();
    }
    function onResizeThrottle(data) {
      if (initialized.value) {
        void throttledOnResize(data);
      }
    }
    function onResize({ direction, x, width }) {
      const relativeDistance = pxToRelativeWidth(x);
      const relativeWidth = pxToRelativeWidth(width);
      if (direction === "left" && relativeDistance <= minimumLeftPosition.value) return;
      if (direction === "right" && 1 - relativeDistance <= maximumRightPosition.value) return;
      if (width <= MIN_PANEL_WIDTH) return;
      setMainPanelWidth(relativeWidth);
      setPositions(direction === "left" ? relativeDistance : mainPanelDimensions.value.relativeLeft);
    }
    function restorePositionData() {
      const storedPanelWidthData = useStorage(
        `${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`
      ).value;
      if (storedPanelWidthData) {
        const parsedWidth = parseFloat(storedPanelWidthData);
        setMainPanelWidth(parsedWidth);
        const initialPosition = getInitialLeftPosition(parsedWidth);
        setPositions(initialPosition);
        return true;
      }
      return false;
    }
    function storePositionData() {
      useStorage(`${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`).value = mainPanelDimensions.value.relativeWidth.toString();
    }
    function onDragStart() {
      isDragging.value = true;
      emit("dragstart", { position: mainPanelDimensions.value.relativeLeft });
    }
    function onDrag(position) {
      const relativeLeft = pxToRelativeWidth(position[0]) - mainPanelDimensions.value.relativeWidth / 2;
      setPositions(relativeLeft);
    }
    function onDragEnd() {
      setTimeout(() => {
        isDragging.value = false;
        emit("dragend", {
          windowWidth: containerWidth.value,
          position: mainPanelDimensions.value.relativeLeft
        });
      }, 0);
      storePositionData();
    }
    return (_ctx, _cache) => {
      const _component_N8nResizeWrapper = resolveComponent("N8nResizeWrapper");
      return openBlock(), createElementBlock("div", null, [
        unref(ndvStore).activeNode ? (openBlock(), createBlock(NDVFloatingNodes, {
          key: 0,
          "root-node": unref(ndvStore).activeNode,
          onSwitchSelectedNode
        }, null, 8, ["root-node"])) : createCommentVNode("", true),
        !_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.inputPanel),
          style: normalizeStyle(inputPanelStyles.value)
        }, [
          renderSlot(_ctx.$slots, "input")
        ], 6)) : createCommentVNode("", true),
        !_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.outputPanel),
          style: normalizeStyle(outputPanelStyles.value)
        }, [
          renderSlot(_ctx.$slots, "output")
        ], 6)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.mainPanel),
          style: normalizeStyle(mainPanelStyles.value)
        }, [
          createVNode(_component_N8nResizeWrapper, {
            "is-resizing-enabled": currentNodePaneType.value !== "unknown",
            width: relativeWidthToPx(mainPanelDimensions.value.relativeWidth),
            "min-width": MIN_PANEL_WIDTH,
            "grid-size": 20,
            "supported-directions": supportedResizeDirections.value,
            outset: "",
            onResize: onResizeThrottle,
            onResizeend: onResizeEnd
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.dragButtonContainer)
              }, [
                !_ctx.hideInputAndOutput && _ctx.isDraggable ? (openBlock(), createBlock(PanelDragButton, {
                  key: 0,
                  class: normalizeClass({ [_ctx.$style.draggable]: true, [_ctx.$style.visible]: isDragging.value }),
                  "can-move-left": canMoveLeft.value,
                  "can-move-right": canMoveRight.value,
                  onDragstart: onDragStart,
                  onDrag,
                  onDragend: onDragEnd
                }, null, 8, ["class", "can-move-left", "can-move-right"])) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass({ [_ctx.$style.mainPanelInner]: true, [_ctx.$style.dragging]: isDragging.value })
              }, [
                renderSlot(_ctx.$slots, "main")
              ], 2)
            ]),
            _: 3
          }, 8, ["is-resizing-enabled", "width", "supported-directions"])
        ], 6)
      ]);
    };
  }
});
const dataPanel = "_dataPanel_181lg_123";
const inputPanel = "_inputPanel_181lg_132 _dataPanel_181lg_123";
const outputPanel = "_outputPanel_181lg_140 _dataPanel_181lg_123";
const mainPanel = "_mainPanel_181lg_148";
const draggable = "_draggable_181lg_152";
const mainPanelInner = "_mainPanelInner_181lg_156";
const dragging = "_dragging_181lg_163";
const dragButtonContainer = "_dragButtonContainer_181lg_176";
const visible = "_visible_181lg_192";
const style0$5 = {
  dataPanel,
  inputPanel,
  outputPanel,
  mainPanel,
  draggable,
  mainPanelInner,
  dragging,
  "double-width": "_double-width_181lg_172",
  dragButtonContainer,
  visible
};
const cssModules$6 = {
  "$style": style0$5
};
const NDVDraggablePanels = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$6]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RunInfo",
  props: {
    taskData: {},
    hasStaleData: { type: Boolean },
    hasPinData: { type: Boolean }
  },
  setup(__props) {
    const i18n = useI18n();
    const props = __props;
    const runTaskData = computed(() => {
      return props.taskData;
    });
    const theme = computed(() => {
      return props.taskData?.error ? "danger" : "success";
    });
    const runMetadata = computed(() => {
      if (!runTaskData.value) {
        return null;
      }
      const { date, time } = convertToDisplayDateComponents(runTaskData.value.startTime);
      return {
        executionTime: runTaskData.value.executionTime,
        startTime: `${date} at ${time}`
      };
    });
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return _ctx.hasStaleData ? (openBlock(), createBlock(unref(InfoTip), {
        key: 0,
        theme: "warning-light",
        type: "tooltip",
        "tooltip-placement": "right",
        "data-test-id": "node-run-info-stale"
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("span", null, null, 512), [
            [
              _directive_n8n_html,
              unref(i18n).baseText(
                _ctx.hasPinData ? "ndv.output.staleDataWarning.pinData" : "ndv.output.staleDataWarning.regular"
              )
            ]
          ])
        ]),
        _: 1
      })) : runMetadata.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.tooltipRow)
      }, [
        createVNode(unref(InfoTip), {
          type: "note",
          theme: theme.value,
          "data-test-id": `node-run-status-${theme.value}`
        }, null, 8, ["theme", "data-test-id"]),
        createVNode(unref(InfoTip), {
          type: "tooltip",
          theme: "info",
          "data-test-id": `node-run-info`,
          "tooltip-placement": "right"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(runTaskData.value?.error ? unref(i18n).baseText("runData.executionStatus.failed") : unref(i18n).baseText("runData.executionStatus.success")), 1)
                ]),
                _: 1
              }),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.startTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.startTime), 1),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.executionTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.executionTime) + " " + toDisplayString(unref(i18n).baseText("runData.ms")), 1)
            ])
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const tooltipRow = "_tooltipRow_14r7d_123";
const style0$4 = {
  tooltipRow
};
const cssModules$5 = {
  "$style": style0$4
};
const RunInfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$5]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OutputPanel",
  props: {
    workflow: {},
    runIndex: {},
    isReadOnly: { type: Boolean },
    linkedRuns: { type: Boolean },
    canLinkRuns: { type: Boolean },
    pushRef: {},
    blockUI: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["linkRun", "unlinkRun", "runChange", "activatePane", "tableMounted", "itemHover", "search", "openSettings", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const OUTPUT_TYPE = {
      REGULAR: "regular",
      LOGS: "logs"
    };
    const props = __props;
    const emit = __emit;
    const ndvStore = useNDVStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const { activeNode } = storeToRefs(ndvStore);
    const settings = useSettingsStore();
    const { dirtinessByName } = useNodeDirtiness();
    const { isSubNodeType } = useNodeType({
      node: activeNode
    });
    const pinnedData = usePinnedData(activeNode, {
      runIndex: props.runIndex,
      displayMode: props.displayMode
    });
    const outputMode = ref(OUTPUT_TYPE.REGULAR);
    const outputTypes = ref([
      { label: i18n.baseText("ndv.output.outType.regular"), value: OUTPUT_TYPE.REGULAR },
      { label: i18n.baseText("ndv.output.outType.logs"), value: OUTPUT_TYPE.LOGS }
    ]);
    const runDataRef = ref();
    const node2 = computed(() => {
      return ndvStore.activeNode ?? void 0;
    });
    const isTriggerNode = computed(() => {
      return !!node2.value && nodeTypesStore.isTriggerNode(node2.value.type);
    });
    const hasAiMetadata = computed(() => {
      if (isNodeRunning.value || !workflowRunData.value) {
        return false;
      }
      if (node2.value) {
        const connectedSubNodes = props.workflow.getParentNodes(node2.value.name, "ALL_NON_MAIN");
        const resultData = connectedSubNodes.map(workflowsStore.getWorkflowResultDataByNodeName);
        return resultData && Array.isArray(resultData) && resultData.length > 0;
      }
      return false;
    });
    const hasError = computed(
      () => Boolean(
        workflowRunData.value && node2.value && workflowRunData.value[node2.value.name]?.[props.runIndex]?.error
      )
    );
    const defaultOutputMode = computed(() => {
      return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
    });
    const isNodeRunning = computed(() => {
      return workflowRunning.value && !!node2.value && workflowsStore.isNodeExecuting(node2.value.name);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const workflowExecution = computed(() => {
      return workflowsStore.getWorkflowExecution;
    });
    const workflowRunData = computed(() => {
      if (workflowExecution.value === null) {
        return null;
      }
      const executionData = workflowExecution.value.data;
      if (!executionData?.resultData?.runData) {
        return null;
      }
      return executionData.resultData.runData;
    });
    const hasNodeRun = computed(() => {
      if (workflowsStore.subWorkflowExecutionError) return true;
      return Boolean(
        node2.value && workflowRunData.value && workflowRunData.value.hasOwnProperty(node2.value.name)
      );
    });
    const runTaskData = computed(() => {
      if (!node2.value || workflowExecution.value === null) {
        return null;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || !runData2.hasOwnProperty(node2.value.name)) {
        return null;
      }
      if (runData2[node2.value.name].length <= props.runIndex) {
        return null;
      }
      return runData2[node2.value.name][props.runIndex];
    });
    const runsCount = computed(() => {
      if (node2.value === null) {
        return 0;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || node2.value && !runData2.hasOwnProperty(node2.value.name)) {
        return 0;
      }
      if (node2.value && runData2[node2.value.name].length) {
        return runData2[node2.value.name].length;
      }
      return 0;
    });
    const staleData = computed(() => {
      if (!node2.value) {
        return false;
      }
      if (settings.partialExecutionVersion === 2) {
        return dirtinessByName.value[node2.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
      }
      const updatedAt = workflowsStore.getParametersLastUpdate(node2.value.name);
      if (!updatedAt || !runTaskData.value) {
        return false;
      }
      const runAt = runTaskData.value.startTime;
      return updatedAt > runAt;
    });
    const outputPanelEditMode = computed(() => {
      return ndvStore.outputPanelEditMode;
    });
    const canPinData = computed(() => {
      return pinnedData.isValidNodeType.value && !props.isReadOnly;
    });
    const allToolsWereUnusedNotice = computed(() => {
      if (!node2.value || runsCount.value === 0 || hasError.value) return void 0;
      if (pinnedData.hasData.value) return void 0;
      const toolsAvailable = props.workflow.getParentNodes(
        node2.value.name,
        NodeConnectionTypes.AiTool,
        1
      );
      const toolsUsedInLatestRun = toolsAvailable.filter(
        (tool) => !!workflowRunData.value?.[tool]?.[props.runIndex]
      );
      if (toolsAvailable.length > 0 && toolsUsedInLatestRun.length === 0) {
        return i18n.baseText("ndv.output.noToolUsedInfo");
      } else {
        return void 0;
      }
    });
    const insertTestData = () => {
      if (!runDataRef.value) return;
      runDataRef.value.enterEditMode({
        origin: "insertTestDataLink"
      });
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        node_type: node2.value?.type,
        pane: "output",
        type: "insert-test-data"
      });
    };
    const onLinkRun = () => {
      emit("linkRun");
    };
    const onUnlinkRun = () => {
      emit("unlinkRun");
    };
    const openSettings = () => {
      emit("openSettings");
      telemetry.track("User clicked ndv link", {
        node_type: node2.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "output",
        type: "settings"
      });
    };
    const onRunIndexChange = (run) => {
      emit("runChange", run);
    };
    const onUpdateOutputMode = (newOutputMode) => {
      if (newOutputMode === OUTPUT_TYPE.LOGS) {
        ndvEventBus.emit("setPositionByName", "minLeft");
      } else {
        ndvEventBus.emit("setPositionByName", "initial");
      }
    };
    onMounted(() => {
      outputMode.value = defaultOutputMode.value;
    });
    watch(defaultOutputMode, (newValue, oldValue) => {
      if (newValue === OUTPUT_TYPE.LOGS && oldValue === OUTPUT_TYPE.REGULAR && hasNodeRun.value) {
        outputMode.value = defaultOutputMode.value;
      }
    });
    const activatePane = () => {
      emit("activatePane");
    };
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        ref_key: "runDataRef",
        ref: runDataRef,
        class: normalizeClass(_ctx.$style.runData),
        node: node2.value,
        workflow: _ctx.workflow,
        "run-index": _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.output.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.output.noOutputDataInBranch"),
        "is-executing": isNodeRunning.value,
        "executing-message": unref(i18n).baseText("ndv.output.executing"),
        "push-ref": _ctx.pushRef,
        "block-u-i": _ctx.blockUI,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "is-pane-active": _ctx.isPaneActive,
        "hide-pagination": outputMode.value === "logs",
        "pane-type": "output",
        "data-output-type": outputMode.value,
        "callout-message": allToolsWereUnusedNotice.value,
        "display-mode": _ctx.displayMode,
        "disable-ai-content": true,
        onActivatePane: activatePane,
        onRunChange: onRunIndexChange,
        onLinkRun,
        onUnlinkRun,
        onTableMounted: _cache[1] || (_cache[1] = ($event) => emit("tableMounted", $event)),
        onItemHover: _cache[2] || (_cache[2] = ($event) => emit("itemHover", $event)),
        onSearch: _cache[3] || (_cache[3] = ($event) => emit("search", $event)),
        onDisplayModeChange: _cache[4] || (_cache[4] = ($event) => emit("displayModeChange", $event))
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.titleSection)
          }, [
            hasAiMetadata.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              modelValue: outputMode.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => outputMode.value = $event),
                onUpdateOutputMode
              ],
              "data-test-id": "ai-output-mode-select",
              options: outputTypes.value
            }, null, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(unref(i18n).baseText(outputPanelEditMode.value.enabled ? "ndv.output.edit" : "ndv.output")), 3)),
            hasNodeRun.value && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo, {
              key: 2,
              "task-data": runTaskData.value,
              "has-stale-data": staleData.value,
              "has-pin-data": unref(pinnedData).hasData.value
            }, null, 8, ["task-data", "has-stale-data", "has-pin-data"])), [
              [vShow, !outputPanelEditMode.value.enabled]
            ]) : createCommentVNode("", true)
          ], 2)
        ]),
        "node-not-run": withCtx(() => [
          workflowRunning.value && !isTriggerNode.value ? (openBlock(), createBlock(unref(N8nText), {
            key: 0,
            "data-test-id": "ndv-output-waiting"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitingToRun")), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          !workflowRunning.value ? (openBlock(), createBlock(unref(N8nText), {
            key: 1,
            "data-test-id": "ndv-output-run-node-hint"
          }, {
            default: withCtx(() => [
              unref(isSubNodeType) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHintSubNode")), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHint")) + " ", 1),
                canPinData.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  onClick: insertTestData
                }, [
                  _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1),
                  createVNode(unref(N8nText), {
                    tag: "a",
                    size: "medium",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ], 64))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        "node-waiting": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitNodeWaiting.title")), 1)
            ]),
            _: 1
          }),
          withDirectives(createVNode(unref(N8nText), null, null, 512), [
            [_directive_n8n_html, unref(waitingNodeTooltip)(node2.value)]
          ])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.title")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(N8nText), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message")) + " ", 1),
              createBaseVNode("a", { onClick: openSettings }, toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settings")), 1),
              createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settingsOption")), 1)
            ]),
            _: 1
          })
        ]),
        "recovered-artificial-output-data": withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.recoveredOutputData)
          }, [
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 2
      }, [
        outputMode.value === "logs" && node2.value ? {
          name: "content",
          fn: withCtx(() => [
            createVNode(RunDataAi, {
              node: node2.value,
              "run-index": _ctx.runIndex,
              workflow: _ctx.workflow
            }, null, 8, ["node", "run-index", "workflow"])
          ]),
          key: "0"
        } : void 0,
        !unref(pinnedData).hasData.value && runsCount.value > 1 ? {
          name: "run-info",
          fn: withCtx(() => [
            createVNode(RunInfo, { "task-data": runTaskData.value }, null, 8, ["task-data"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "node", "workflow", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "block-u-i", "is-production-execution-preview", "is-pane-active", "hide-pagination", "data-output-type", "callout-message", "display-mode"]);
    };
  }
});
const runData$1 = "_runData_6c8lp_128";
const outputTypeSelect = "_outputTypeSelect_6c8lp_132";
const titleSection$1 = "_titleSection_6c8lp_137";
const title$2 = "_title_6c8lp_137";
const noOutputData$1 = "_noOutputData_6c8lp_153";
const recoveredOutputData$1 = "_recoveredOutputData_6c8lp_163";
const style0$3 = {
  runData: runData$1,
  outputTypeSelect,
  titleSection: titleSection$1,
  title: title$2,
  noOutputData: noOutputData$1,
  recoveredOutputData: recoveredOutputData$1
};
const cssModules$4 = {
  "$style": style0$3
};
const OutputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$4]]);
const _hoisted_1$3 = { key: 0 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InputNodeSelect",
  props: {
    nodes: {},
    workflow: {},
    modelValue: {}
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const selectedInputNode = computed(() => workflowsStore.getNodeByName(props.modelValue ?? ""));
    const selectedInputNodeType = computed(() => {
      const node2 = selectedInputNode.value;
      if (!node2) return null;
      return nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    });
    const inputNodes = computed(
      () => props.nodes?.map((node2) => {
        const fullNode = workflowsStore.getNodeByName(node2.name);
        if (!fullNode) return null;
        return {
          node: fullNode,
          type: nodeTypesStore.getNodeType(fullNode.type, fullNode.typeVersion),
          depth: node2.depth
        };
      }).filter(isPresent) ?? []
    );
    const activeNode = computed(() => ndvStore.activeNode);
    const activeNodeType = computed(() => {
      const node2 = activeNode.value;
      if (!node2) return null;
      return nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    });
    const isMultiInputNode = computed(() => {
      const nodeType = activeNodeType.value;
      return nodeType !== null && nodeType.inputs.length > 1;
    });
    const connectedTo = (nodeName) => {
      const connections2 = ndvStore.ndvNodeInputNumber[nodeName];
      if (!connections2) return "";
      if (connections2.length === 1) {
        return `Input ${ndvStore.ndvNodeInputNumber[nodeName]}`;
      }
      return `Inputs ${ndvStore.ndvNodeInputNumber[nodeName].join(", ")}`;
    };
    function getMultipleNodesText(nodeName) {
      if (!nodeName || !isMultiInputNode.value || !activeNode.value || !activeNodeType.value?.inputNames)
        return "";
      const activeNodeConnections = props.workflow.connectionsByDestinationNode[activeNode.value.name].main || [];
      const connectedInputIndexes = activeNodeConnections.reduce((acc, node2, index) => {
        if (node2?.[0] && node2[0].node === nodeName) return [...acc, index];
        return acc;
      }, []);
      const connectedInputs = connectedInputIndexes.map(
        (inputIndex) => activeNodeType.value?.inputNames?.[inputIndex]
      );
      if (connectedInputs.length === 0) return "";
      return `(${connectedInputs.join(" & ")})`;
    }
    function title2(nodeName, length = 30) {
      return truncate(nodeName, length);
    }
    function subtitle2(nodeName, depth) {
      const multipleNodesText = getMultipleNodesText(nodeName);
      if (multipleNodesText) return multipleNodesText;
      return i18n.baseText("ndv.input.nodeDistance", { adjustToNumber: depth });
    }
    function onInputNodeChange(value) {
      emit("update:model-value", value);
    }
    return (_ctx, _cache) => {
      const _component_n8n_option = resolveComponent("n8n-option");
      const _component_n8n_select = resolveComponent("n8n-select");
      return openBlock(), createBlock(_component_n8n_select, {
        "model-value": _ctx.modelValue,
        "no-data-text": unref(i18n).baseText("ndv.input.noNodesFound"),
        placeholder: unref(i18n).baseText("ndv.input.parentNodes"),
        class: normalizeClass(_ctx.$style.select),
        teleported: "",
        size: "small",
        filterable: "",
        "data-test-id": "ndv-input-select",
        "onUpdate:modelValue": onInputNodeChange
      }, {
        prefix: withCtx(() => [
          createVNode(_sfc_main$g, {
            disabled: selectedInputNode.value?.disabled,
            "node-type": selectedInputNodeType.value,
            size: 14,
            shrink: false
          }, null, 8, ["disabled", "node-type"])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(inputNodes.value, ({ node: node2, type, depth }) => {
            return openBlock(), createBlock(_component_n8n_option, {
              key: node2.name,
              value: node2.name,
              class: normalizeClass([_ctx.$style.node, { [_ctx.$style.disabled]: node2.disabled }]),
              label: `${title2(node2.name)} ${getMultipleNodesText(node2.name)}`,
              "data-test-id": "ndv-input-option"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$g, {
                  disabled: node2.disabled,
                  "node-type": type,
                  size: 14,
                  shrink: false,
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["disabled", "node-type", "class"]),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.title)
                }, [
                  createTextVNode(toDisplayString(title2(node2.name)) + " ", 1),
                  node2.disabled ? (openBlock(), createElementBlock("span", _hoisted_1$3, "(" + toDisplayString(unref(i18n).baseText("node.disabled")) + ")", 1)) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.subtitle)
                }, toDisplayString(connectedTo(node2.name) ? connectedTo(node2.name) : subtitle2(node2.name, depth)), 3)
              ]),
              _: 2
            }, 1032, ["value", "class", "label"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["model-value", "no-data-text", "placeholder", "class"]);
    };
  }
});
const select = "_select_wv0ev_123";
const node = "_node_wv0ev_132";
const icon = "_icon_wv0ev_140";
const title$1 = "_title_wv0ev_144";
const disabled = "_disabled_wv0ev_153";
const subtitle = "_subtitle_wv0ev_157";
const style0$2 = {
  select,
  node,
  icon,
  title: title$1,
  disabled,
  subtitle
};
const cssModules$3 = {
  "$style": style0$2
};
const InputNodeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const _sfc_main$3 = {};
const _hoisted_1$2 = {
  width: "112",
  height: "80",
  viewBox: "0 0 112 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<mask id="mask0_489_46042" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="112" height="80"><rect width="112" height="80" fill="url(#paint0_linear_489_46042)"></rect></mask><g mask="url(#mask0_489_46042)"><rect x="-0.5" width="112" height="80" fill="url(#pattern0)" fill-opacity="0.6"></rect></g><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_489_46042" transform="scale(0.00357143 0.005)"></use></pattern><linearGradient id="paint0_linear_489_46042" x1="90.5" y1="40.4494" x2="112.5" y2="40.4494" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><image id="image0_489_46042" width="280" height="200" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADICAYAAAAzx/4XAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABhdSURBVHgB7d0JcFTVngbw/72d4IYa0Ie4IK2llgpodNwtB9AaxVILF7ZxynkgWupojaRwASXQGEBqEAI8LXfBpZQS9IFabjMFkXFfijCKyqjQqIiKShCUpdP3vvPdpXP7pjtk6dPdSX+/qlPpJX07UfrL/yz3XEOIPJNiswaZkbKBtkiluC0qRB1gCJW86ntmjzYM81YvWIhyhgFTwlCxGJGyBcJKhTQxhUrSpJraKSpcVgjDhTQqEyo5U+6prbVExmV6TnWT6ixbnuxmSZ262xCLVTUIUTsxYEoMKpdM4aKCZV5ZUmIMFMoljsGUkMk1c9RArjE39HBchcuYadVVdUKUYwyYEjEhVhstj8gqdbMi8HA8kpTBqmqJC5EGHOQtEeVlMkXSw6WB4UK6cQymBKB6UYMso4OPWYZMrWG4kGasYEpAmWGHB3Xj0ydVzRUizRgwJcAwjaFpD9gyVYjygAHTxTndo9Bium2WLBWiPGDAdHFlkWT4/KK6uVzrQnnCgOniDNuIBu/blr1aiPKEAdPF2Xba1DQeYfVCecOAISJtGDBEpA0Dhoi0YcAQkTYMGCLShgFDRNowYIhIGwYMEWnDgCEibRgwRKQNA4aItGHAEJE2DBgi0oYBQ0TaMGCISBsGDBFpw4AhIm0YMESkDQOGiLRhwBCRNgwYItKGAUNE2jBgiEgbBgwRacOAISJtGDBEpA0Dhoi0YcAQkTYMGCLShgFDRNowYIhIGwYMEWnDgCEibRgwRKQNA4aItGHAEJE2DBgi0oYBQ0TaMGCISBsGDBFpw4AhIm0YMESkDQOGiLRhwBCRNgwYItKGAUNE2jBgiEgbBgwRacOAISJtGDBEpA0Dhoi0YcAQkTYMGCLShgFDRNowYIhIGwYMEWnDgCEibRgwRKQNA4aItGHAEJE2DBgi0oYBQ0TaMGCISBsGDBFpw4AhIm0YMESkDQOGiLRhwBCRNgwYItKGAUNE2hhCXc7ll19eUVZWNto0zYFGJDLIamys8J+LRMrilpWst217WSKRqFu6dGlciDRhwHQho0aNilqWVavC4/I2vGyhCpqpDBrSISLUJYwcOfJWFS6vq5vHS9tURiKRcf3795c1a9a8JUQ5xAqmk0N3qLy8/O/q5iDpIMMwlu7evXuMqmYahCgHOMjbyalwWSE5CBdA18o7HlFOsIvUiY0YMaJWfWnLeEtr9FbdpQrVXXpDiDqIXaROavjw4aPVlwWiiapmBi9ZsqROiDqAXaTOa4popMZjtIUXlQ4GTCfkVS9R0SvqvQ9RuzFgOqe/Sn7k632oi+IYTCfjTUtvkTxJJBI9OG1N7cUKppMpKyurlDzK9/tR18KA6Xzy+oG3LCsqRO3EgOl8KiSPTNOMClE7MWCISJsyIUcsVlvRGJEVhm3Nq5k8fqEUr3wPuHKAl9qNFYwnFqtqMND9MMwF1TW16yfXzLl1Qqw2KkXGtu245Fe9ELUTAybAaPprHbXFmFsekfXV02oX3BX7r6KZSUkmk3WSR42NjQwYajcGTIBl2aubPWjL6EikfJWqalZU3zN7tBSYtyalTvJAVUt1XANDHcExmDTofmRdezhIdZ8GqaCZYog9d3fSWDYzVhWXwnhScrRFQ0sMw3hSiDqAFUyAZUi8Fd9W8O5TIpFYqr7ERa/44sWLFwpRBzBggiJm28YbCtR9QrfFsqwq0WuqEHUQz0UKwFR1MiIdOc8nns/u01VXXTXXNM1bJcdUeM174YUXxglRBzFgQlQ1goDp+GpZQxYmGxPzZsTu0DYL4534iC0uc9lNq1ddo1OEKAfYRQoYpyoYI1djG6r7ZEbKF+CYogm6Smo8ZjA265YcwHFwPCHKkZKrYPCB31cSUTEjlaYtUSNi9rVtqTTcqiUqOWKLzCtLql5XrCov07zDhg2LqYBo9y53akq6asmSJXOFKIe6ZMDEYvdGG6W80jKNioiYJ6vfUs38qDBxA0T7yYJqNqpq+qSqvH9YceG1xsZGBE1bNorihddIm04ZMMEqJILAMFWI2E5wYCwiKoUTV0E2Zlp1VZ0UEIImmUwOUjeHRiKRSnU76j9nlpU1WI2NdapieUuF0UIupCOdijZgUIXslkhFhq5MVPRWIQ3tOb4KlnrVJboiVrjFdxlNmjo7ZphmqutkW9bUaVPGx4QoDwq6ktfvyhimEVV/W/uiKyNuFVKRVC110SbEoJ2zNGywMZ1sSL2dtLdahlFvGtKgwqEe4aCmqqNqqnp9Ww6Y7/EWos5Ca8Bk6cpExa1CoipEdJVQ6Ko0uCFibbAMM94tIvWSkPieQgAho6aqpbUKNd5C1Bl0OGCaDaiaUpHelSlv+mZbcimuWr1t2RvUoGbcNiSOKkQ91pCDSiIuex7LccZbVLjUhR5vT2bm9r8MUZHYY8CgCqmQnRVZujKpKiTVnclTV0b0QlBFsz2ZZbzFCH0N3w4dIo3Riu/Z0+NERScVMM5Je1nWhiRlb21dGcGHWQWHWLJahVVDa7syOjlVkZn5Nw6Nt4S/yQg0LGJECJ+n2nGqdVPtO9XeUW2lagnZw4+R4bYdeE8GDRW9VMCURcoX2PhA5HhA1WvNujLFNtsSZBjetg12+mfYErtq+uTx86QpQFIvkab/ZOgTnqlajWpniBssQY2qrVJtumornMOK9BQ3jE5XrY9q3VXbodo61d5U7TPVtgeO4QcNQ4aKWipgsNmS+qvdnnNaAl2ZtAHVhmIOkZbYKmCM9HCJJ3bvGjtz2sT/FffDv7e4/+3wTegl7lJtt3f/JHHD5VzVjH333Ve6deuGZfjYHU62b99eZts2gmS+ajHVvlZtjGqjVNsnw4+DkxkfVW2OapuF1Qx1IoExmBY3W1LPFV9XRhcracUjpulUMKq8WP3Lr1uGPzx/Gk6CPFu1gaqdrNrB4lYjP6n2iWr/p9pG1W5X7Z9UM4499li59NJL5ZRTTnFC5ssvv5Tly5fL+++/L7t370alMkO1TaqdYqr36969uxx44IG42Bm2xpStW7fK77//fqAKpPHiVkYIpR+897Wl5WBh6FDBNQWMaSJAFhZgQLXYGNbO5AZzn4gkLWv+199+O23xgr/tpR7/V9VuUK1fhtdcLW43BhXOaart07NnT5kzZ44MGTLECQxABTN06FAZM2aM1NfXI817oyFcEEbnn3++DBgwwAmZbdu2yTvvvCNvvPGGbN68WRVU9s3ijt9sFbdqOki1fcUNEoTfL9I0rhOsbogKJhUw06qrcEZuTs7K7exmzpy49a7qe8feWzPxKXErh39TrVq1ngiLCjWv1qNHD+ybggpDGhoasMtcf/X8ieJ9sC+88EI599xzU+ECuH3MMcfIyJEjETCpxw8++GCpqqqSa665RtCl8g0fPlzuuusuWbRoEaoZHOhKcSumY8Ttgh0pbjWD6ul/xJ39+i3wq7CKoYLinrzpUlPNM9xwwQAtQuM/VeuJILjgggucdvTRRzsVyTfffCPLli2T9957D1VHauD3zDPPdLpFYfvtt5+cdtppTpD8+eefzmP9+vWTgQMHpoULoAq69tpr5e2333a6S8r54obLaaHDXqTaNar9TbUnVPtVguGC8SSDBQ3lHwOmueA0MwZdMRN01D777COnnnqq1NTUON2ZIHRr7rzzTidkfAcddJBEIpHmB1cfdARV37595YsvvnAeQ0X0l7/8JeMPc8IJJ8ghhxwin3/+ObZU6KUe6uUfPxqNyo4dO2TdunXGzp07D1UP/4dq34hbiWJ2Cq8x8J4MGSoEbjjVJLhQLhgwGNB1xkVQuYTDBc444ww5++yz5YADDkg9tv/++zthkgnCChUQIITQ3cLxM8FxjjrqKCkvb1oRjdCZMWOGzJs3zxnnufrqq3ENaTyFMZ1LxR2ANv3fif0kKhRWMOnCC+XQMMDrjJ+EuzC+vfbay+n2YEB2zZo1zmP+1HQme++9t1OV+LdRwQTHasJQ7SBg1MyTc//mm2+W66+/3jk+xoHw3GuvvSabNm3CQfp4zRmLsdWkO+sWKhRWMJkFF9JhdsYZL9m4cWPWF5x++ulOpeGHSksBg0BCFwdQoWTrHvmOOOKIVAWDMBoxYkTq2KhcevXq5by3Zz9xK5iI83uoAEL3yKlibNYylF8MmHTh6sWfoXEGWT/99NPUwGwYxkMwJY1qA10m3M80BgPoEmGGqbKy0hkMRmsJxn4wOIxQwXuEAwlhhuDx74obMs7vkFRjMIwVKhR2kVzBpf7BbhICZr1qW5LJZA/MGK1du9ZZOBeGLs5ll13mTEPj9mGHHeaPizSDQBg8eLAzZoNqpn///tISjPvMmjVLNmzYIIMGDWr2PN4Hx/Eg1RAyTsBgkDdVubCzRHnGgMkcLH4Fg9vbxK1iBm7evNlZhZspYODII4902h7fUH3QES4ImdbA2M+wYcOcGSNUMpkEwsw/uT01yEtUKKXeRco0c4SG2ZgrVLtRtb+KNxGDBXXvvvsuVtZKvmEMBqGUrdsVkgpIO5k0/HMK2FWifCvlCiZT5YJp6RGqjVXtEO++3+Vwzg/CepS6ujpnlW2RMkKNqGBYwTRVLvuLe8byveIurouKGzKYkUktcME09EsvveSvrC16lhAVTqlWMMHqxe9O3CbuuT7OdMzxxx/vnAmNLsknn3wiK1eudNah7Nq1ywmZVatWZRxwLQScsrBz507/LjIFJz2ygqGCK+Uukj8Iiq/YcW6keOFyww03yN133+2sUcHgKaqV5557TqZOnepMU3/77bfO1gvFEjDougWmzxEuu4WoCJRiwGSaLbpANWdxyVlnnSUPPfRQ2gswuDp27Fhn1ezEiROdr63xww8/yPr16+Wcc85ptugOA8aYkcIpAlg3Ex68xZQ0zrg++eSTpU+fPi0O7qKCCXTZEC47hKgIlOoYTDBk8MnFMlhnqewll1yS8QVYeYvl+Y8++qjMnDnTmTZuCVb94gzp8847T6qrq9OeQxg888wzcvHFF8tNN90kL7/8ctrzv/zyi0yYMEGuvPJKufHGG+Wrr75q8b3QbcNrPOgrdY4BIurySrmCQbj660XKvcdSS/gzwXPXXXedtAbGabBXjG3bznYLQVjP8v333zu3f/vtN6fLFYSw2LJli1Mpff3119hms8X3QsD8+uuv/l30lRAwzsw0l2pTIZXav7/wJUX8CuYP8SZc8IHvTBBgCKA//vjDuStuBfO7EBWBUvwDF5xd8cdgUttNrlu3TjqTRCIh8Xg8dVfczaawCTnX1VHBlXIFHewqob/iBAy6NnYnOusYAYOBZA+ql58leOUBNQvGVXdUKFxo58In1Pmrj5W6GP/o8IEDs0aYRtYFa3NwlrcH/SR/TwlWMFRwpV7B+PChxEhrI3bzf/7556WjsGudHzLZtnjoKExPYzr7448/9h/CANL/S9OpR9gvk0FDBVPKARP84KHEeEu89SNPPPFEh09oxJYNfsDoqmAwsPvqq6/6U9T42dHVQ1Cmn9+In4NbNVABlGLAhK/57DcsRomrlvzoo4/kvvvuS21RWawwIP3444/7dzG4i8vMImgwI8YTqKngSi1ggpdd9ZvlNVwxEbvxO4tO8MFdunRpq1ft5hsGonH6gjfrhSTEJWhxWYNguLCLRAVV6l0kS9JD5lVxr87oLFybPXu2rFixQnINXSd/gygERXtCDCdfPvvss/5d9JH+W7Ufpel3SS20S80gsZtEeVaqXaRgwwCJ5X3FwMsDqq3CN+JcICzz/+CDDySXcF6Rv8UlBmrb2hVbvXq1cyVIbxNyTK9jqTACxgo1VjBUUKVawQS7R37I+A19DlwhcR0++NiWAdce+uyzzySXgicvtqWCQWU1efJk5+cS9+fHz/uCuDNIflimmmFGbFYuVCilXMH4H0L/Q9no3cbXD1Wbr9pm7LPyyiuvSG1tbcFX+SKIHnzwQXn99df9hzCw+4i4ewYHQ5KDvFQUSn0Mxg+a4IcTAYM+CwZfZqm2BetYsDYGlcN3333XqoMfeuihqbUwuMJAEK4qgEuXADb0Dp9giX1ounfv7rwWx8HF2QAXV3vssceCXaoHxb3o/W7v5/ZD0g9PB8dfqFBatYN0F5TppMdwQ/g0iLv0/sxEIlGOcEFFc+KJJ2a91KsPwYFrUGNnPGy5cPjhh6eewxoZvB7PY9OqK664wgkVHwIFe9DgciWjRo2Sk046yTkDe/z48c64kKdO3IDBVQ8QLAlJr8KcKmbg4Iv+WQXVoFTA2PZbK+verBOiPCjVHe0QHn6I+GMwqOYS3vP+SZAIl9dU66Vme67fsmVL+YIFC+Tnn3+W6dOnOxdZywZVysiRI51qI3ypEYy/IHjuuOOO8DWNUq+96KKLnMua4Htx//777xesz/HOk8Ks0Qxxt2VISnq4sItERaPUr4sUnk0KngDp38bWB4vFvUb1v2/durUcm36j4sBMznHHHZf14AiOcHgEZbvWNaDK8a9XjbGXxYsXC05j8Dyh2iZp6hZlC5emlbxEBVDKAROsYvzxiuAVHYMnIP+k2jOq7VIVxLXbt2/f++mnn3bOMbrttttkwIABohO23sSWDN5sE6qVl6SpagmHS7ARFVSpn02daU1MIktDyDyl2gMqZLbhPKCnnnpKbr/9dmeLh/ZAcNxyyy3Su3dv6devnzz88MPBKiUF2zFg1zoPRpl/C/1smWaQRNhFogLjpWObPoTBv/jB7pIEvqK7hDUn+LTfotoBb775pnOdJAziBi5Av0c//vijzJ8/Xx544AHn/k8//SRTpkxxFt5hn97gda2xQXjghMmNkh4o4XDh+AsVDW7Zmnm62p+V8S8BEqwWMLD6d9UeVu1nDLouX77cuYxJa2FbTgQTAsZ7b6e7g5BZtGiRfPjhh2lnYKN6CWyCtUOyj70EqxeigmPAuIJdinDQBMPGb9jg5RPVPseLsGQfVUZrYYOoWbNmOVPP4p5cWe8dy8a1r1ER4Zh+qIQueWJK5vEWW9g1oiLDLlKTTFPXRuh5/3vQsO2ds7k2LkPiX4wNMLUcvg4SwgLbW2ItDS7g5p16gLDCiU4LVTtBtR5qILcPVuuiizRkyBBnvQwqG7zWg+s3ZQsXdo2oqDBg0vkBgg+tXymINL9YW3DTcKfL88gjj8iLL77oBAMWygXHUABjK9iKEwHj7aGLY8dVW6baN+IO3PZW7SpVDVXgTO4lS5Y44zp4XWBXvL7e+zJYqOgxYJoLhox4t4NB4y/CA2clNFb34vrVbYBuF1IG+898JE1ncmO7CKzK+xd1zB5r167N1IXtJu51nFi9UNFjwGQWDhlfsILBtDVOisSJRPuGno9I8038cUzMPmHnf8wEYd+ZleKGjR8MOJtyobhbX1aqdqB3LASQf0lY7PD9hzBYqBNgwGQXDBm/e+QP/vrXUkIFgg98T0m/UmQ3aQqi4DQ4ggELXbBvrn/1xeDMD74f4YNFfW94x8WxEt7rMO6zSTKfDsCQoaLDgGlZeLVveJUvQgZBgS5LRJoCxsxwnEzbRPiDyb5gFwxVzEbJvAgwKaxgqBNgwLROOBwQMqb31YcP/Z4CxsrS/IDwqx5T0isgW9L3rOGCOuoUGDB7FuyCBM9bagw8jsf8cMk2/tJSwPiCYzzB2apM+9bwrGkqegyY1guGCzQGHiuTpqom05VagwETDppgQISnws0Mr/cXAPK8Iyp6DJjWC6/2Dd72181ASwETrmQyVR/h7SLCxwhu88kxGCpqDJjWCa/ytaR5WIR3xAu/Pjzj01LA7Cmk2DWiToEB03Z+mJiB28GAEckcMMHbVuhxO/S6TCHlf1+msGLQUFFiwLSeX8X4ty1pHiit2TouU7cmU8BI6Lad5StR0WLAtE0wCMKDs209RkvPtTY8GDJU1Bgw7WNnuW+04TVEXR4DJrcYIkQB3HCKiLRhwBCRNgwYItKGAUNE2jBgiEgbBgwRacOAISJtGDBdnGFI2gWbjIjZV4jyhAHTxdmGHU9/QKJClCcMmC6uLBmpDz1UOS5W2/qLaBN1AAOmi4vFquLiXuDNV7GfaY0WojxgwJQA27KeDN43DXOoEOUBA6YElNnmwtBDg6rvmT1OiDRjwJQAdJNssdOqGDHMKRNitVEh0ogBUyLKkkZMfQlOWVeUR2QFQ4Z0YsCUCGew15CpoYejCJlJNbWDhEiDtmz1SF2ACpOY+p8+pdkThixMNMrUme6sE1FOMGBK0KSaOXMNMW7N8vRSNe20LGkl62fE7qgXog5gwJSorJUMUQ4xYEoYxl7UP4AF6mZUiDRgwJBU31M7Wv1LQDUTFaIcYsBQSmx6bWVjo3W5mOZAww2bqBB1wD8AobUpv0xPqN8AAAAASUVORK5CYII="></image></defs>', 3)
  ]));
}
const WireMeUp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InputPanel",
  props: {
    runIndex: {},
    workflow: {},
    pushRef: {},
    currentNodeName: { default: "" },
    canLinkRuns: { type: Boolean, default: false },
    linkedRuns: { type: Boolean },
    readOnly: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["itemHover", "tableMounted", "linkRun", "unlinkRun", "runChange", "search", "changeInputNode", "execute", "activatePane", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const showDraggableHintWithDelay = ref(false);
    const draggableHintShown = ref(false);
    const mappedNode2 = ref(null);
    const inputModes = [
      { value: "mapping", label: i18n.baseText("ndv.input.mapping") },
      { value: "debugging", label: i18n.baseText("ndv.input.debugging") }
    ];
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const {
      activeNode,
      focusedMappableInput,
      isMappingOnboarded: isUserOnboarded
    } = storeToRefs(ndvStore);
    const rootNode = computed(() => {
      if (!activeNode.value) return null;
      return props.workflow.getChildNodes(activeNode.value.name, "ALL").at(0) ?? null;
    });
    const hasRootNodeRun = computed(() => {
      return !!(rootNode.value && workflowsStore.getWorkflowExecution?.data?.resultData.runData[rootNode.value]);
    });
    const inputMode = ref(
      // Show debugging mode by default only when the node has already run
      activeNode.value && workflowsStore.getWorkflowExecution?.data?.resultData.runData[activeNode.value.name] ? "debugging" : "mapping"
    );
    const isMappingMode = computed(() => isActiveNodeConfig.value && inputMode.value === "mapping");
    const showDraggableHint = computed(() => {
      const toIgnore = [START_NODE_TYPE, MANUAL_TRIGGER_NODE_TYPE, CRON_NODE_TYPE, INTERVAL_NODE_TYPE];
      if (!currentNode.value || toIgnore.includes(currentNode.value.type)) {
        return false;
      }
      return !!focusedMappableInput.value && !isUserOnboarded.value;
    });
    const isActiveNodeConfig = computed(() => {
      let inputs = activeNodeType.value?.inputs ?? [];
      let outputs = activeNodeType.value?.outputs ?? [];
      if (props.workflow && activeNode.value) {
        const node2 = props.workflow.getNode(activeNode.value.name);
        if (node2 && activeNodeType.value) {
          inputs = getNodeInputs(props.workflow, node2, activeNodeType.value);
          outputs = getNodeOutputs(props.workflow, node2, activeNodeType.value);
        }
      }
      if (!Array.isArray(inputs)) {
        inputs = [];
      }
      if (!Array.isArray(outputs)) {
        outputs = [];
      }
      return inputs.length === 0 || inputs.every((input) => filterOutConnectionType(input, NodeConnectionTypes.Main)) && outputs.find((output) => filterOutConnectionType(output, NodeConnectionTypes.Main));
    });
    const isMappingEnabled = computed(() => {
      if (props.readOnly) return false;
      if (isActiveNodeConfig.value) return isMappingMode.value && mappedNode2.value !== null;
      return true;
    });
    const isExecutingPrevious = computed(() => {
      if (!workflowsStore.isWorkflowRunning) {
        return false;
      }
      const triggeredNode = workflowsStore.executedNode;
      const executingNode = workflowsStore.executingNode;
      if (activeNode.value && triggeredNode === activeNode.value.name && workflowsStore.isNodeExecuting(props.currentNodeName)) {
        return true;
      }
      if (executingNode.length || triggeredNode) {
        return !!parentNodes.value.find(
          (node2) => workflowsStore.isNodeExecuting(node2.name) || node2.name === triggeredNode
        );
      }
      return false;
    });
    const rootNodesParents = computed(() => {
      if (!rootNode.value) return [];
      return props.workflow.getParentNodesByDepth(rootNode.value);
    });
    const currentNode = computed(() => {
      if (isActiveNodeConfig.value) {
        if (mappedNode2.value) {
          return workflowsStore.getNodeByName(mappedNode2.value);
        }
        return activeNode.value;
      }
      return workflowsStore.getNodeByName(props.currentNodeName ?? "");
    });
    const connectedCurrentNodeOutputs = computed(() => {
      const search = parentNodes.value.find(({ name }) => name === props.currentNodeName);
      return search?.indicies;
    });
    const parentNodes = computed(() => {
      if (!activeNode.value) {
        return [];
      }
      const parents = props.workflow.getParentNodesByDepth(activeNode.value.name).filter((parent) => parent.name !== activeNode.value?.name);
      return uniqBy(parents, (parent) => parent.name);
    });
    const currentNodeDepth = computed(() => {
      const node2 = parentNodes.value.find(
        (parent) => currentNode.value && parent.name === currentNode.value.name
      );
      return node2?.depth ?? -1;
    });
    const activeNodeType = computed(() => {
      if (!activeNode.value) return null;
      return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
    });
    const waitingMessage = computed(() => {
      const parentNode = parentNodes.value[0];
      return parentNode && waitingNodeTooltip(workflowsStore.getNodeByName(parentNode.name));
    });
    watch(
      inputMode,
      (mode) => {
        onRunIndexChange(-1);
        if (mode === "mapping") {
          onUnlinkRun();
          mappedNode2.value = rootNodesParents.value[0]?.name ?? null;
        } else {
          mappedNode2.value = null;
        }
      },
      { immediate: true }
    );
    watch(showDraggableHint, (curr, prev) => {
      if (curr && !prev) {
        setTimeout(() => {
          if (draggableHintShown.value) {
            return;
          }
          showDraggableHintWithDelay.value = showDraggableHint.value;
          if (showDraggableHintWithDelay.value) {
            draggableHintShown.value = true;
            telemetry.track("User viewed data mapping tooltip", {
              type: "unexecuted input pane"
            });
          }
        }, 1e3);
      } else if (!curr) {
        showDraggableHintWithDelay.value = false;
      }
    });
    function filterOutConnectionType(item, type) {
      if (!item) return false;
      return typeof item === "string" ? item !== type : item.type !== type;
    }
    function onInputModeChange(val) {
      inputMode.value = val;
    }
    function onMappedNodeSelected(val) {
      mappedNode2.value = val;
      onRunIndexChange(0);
      onUnlinkRun();
    }
    function onNodeExecute() {
      emit("execute");
      if (activeNode.value) {
        telemetry.track("User clicked ndv button", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: "input",
          type: "executePrevious"
        });
      }
    }
    function onRunIndexChange(run) {
      emit("runChange", run);
    }
    function onLinkRun() {
      emit("linkRun");
    }
    function onUnlinkRun() {
      emit("unlinkRun");
    }
    function onSearch(search) {
      emit("search", search);
    }
    function onItemHover(item) {
      emit("itemHover", item);
    }
    function onTableMounted(event) {
      emit("tableMounted", event);
    }
    function onInputNodeChange(value) {
      const index = parentNodes.value.findIndex((node2) => node2.name === value) + 1;
      emit("changeInputNode", value, index);
    }
    function onConnectionHelpClick() {
      if (activeNode.value) {
        telemetry.track("User clicked ndv link", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: "input",
          type: "not-connected-help"
        });
      }
    }
    function activatePane() {
      emit("activatePane");
    }
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        class: normalizeClass(_ctx.$style.runData),
        node: currentNode.value,
        nodes: isMappingMode.value ? rootNodesParents.value : parentNodes.value,
        workflow: _ctx.workflow,
        "run-index": isMappingMode.value ? 0 : _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": !mappedNode2.value && _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.input.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.input.noOutputDataInBranch"),
        "is-executing": isExecutingPrevious.value,
        "executing-message": unref(i18n).baseText("ndv.input.executingPrevious"),
        "push-ref": _ctx.pushRef,
        "override-outputs": connectedCurrentNodeOutputs.value,
        "mapping-enabled": isMappingEnabled.value,
        "distance-from-active": currentNodeDepth.value,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "is-pane-active": _ctx.isPaneActive,
        "display-mode": _ctx.displayMode,
        "pane-type": "input",
        "data-test-id": "ndv-input-panel",
        "disable-ai-content": true,
        onActivatePane: activatePane,
        onItemHover,
        onLinkRun,
        onUnlinkRun,
        onRunChange: onRunIndexChange,
        onTableMounted,
        onSearch,
        onDisplayModeChange: _cache[1] || (_cache[1] = ($event) => emit("displayModeChange", $event))
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.titleSection)
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(unref(i18n).baseText("ndv.input")), 3),
            isActiveNodeConfig.value && !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              "data-test-id": "input-panel-mode",
              options: inputModes,
              "model-value": inputMode.value,
              "onUpdate:modelValue": onInputModeChange
            }, null, 8, ["model-value"])) : createCommentVNode("", true)
          ], 2)
        ]),
        "input-select": withCtx(() => [
          parentNodes.value.length && _ctx.currentNodeName ? (openBlock(), createBlock(InputNodeSelect, {
            key: 0,
            "model-value": _ctx.currentNodeName,
            workflow: _ctx.workflow,
            nodes: parentNodes.value,
            "onUpdate:modelValue": onInputNodeChange
          }, null, 8, ["model-value", "workflow", "nodes"])) : createCommentVNode("", true)
        ]),
        "node-not-run": withCtx(() => [
          isActiveNodeConfig.value && rootNode.value || parentNodes.value.length ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.noOutputData)
          }, [
            isMappingEnabled.value || hasRootNodeRun.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData.title")), 1)
              ]),
              _: 1
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(unref(N8nText), {
                tag: "div",
                bold: true,
                color: "text-dark",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.title")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), {
                tag: "div",
                color: "text-dark",
                size: "medium"
              }, {
                default: withCtx(() => [
                  createVNode(_component_i18n_t, {
                    tag: "span",
                    keypath: "ndv.input.rootNodeHasNotRun.description"
                  }, {
                    link: withCtx(() => [
                      createBaseVNode("a", {
                        href: "#",
                        "data-test-id": "switch-to-mapping-mode-link",
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onInputModeChange("mapping"), ["prevent"]))
                      }, toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.description.link")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 64)),
            !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 2,
              visible: showDraggableHint.value && showDraggableHintWithDelay.value
            }, {
              content: withCtx(() => [
                withDirectives(createBaseVNode("div", null, null, 512), [
                  [
                    _directive_n8n_html,
                    unref(i18n).baseText("dataMapping.dragFromPreviousHint", {
                      interpolate: { name: unref(focusedMappableInput) }
                    })
                  ]
                ])
              ]),
              default: withCtx(() => [
                createVNode(_sfc_main$h, {
                  type: "secondary",
                  "hide-icon": "",
                  transparent: true,
                  "node-name": (isActiveNodeConfig.value ? rootNode.value : _ctx.currentNodeName) ?? "",
                  label: unref(i18n).baseText("ndv.input.noOutputData.executePrevious"),
                  class: "mt-m",
                  "telemetry-source": "inputs",
                  "data-test-id": "execute-previous-node",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name", "label"])
              ]),
              _: 1
            }, 8, ["visible"])) : createCommentVNode("", true),
            !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nText), {
              key: 3,
              tag: "div",
              size: "small"
            }, {
              default: withCtx(() => [
                createVNode(_component_i18n_t, { keypath: "ndv.input.noOutputData.hint" }, {
                  info: withCtx(() => [
                    createVNode(unref(N8nTooltip), { placement: "bottom" }, {
                      content: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData.hint.tooltip")), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(N8nIcon), { icon: "question-circle" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.notConnected)
          }, [
            createBaseVNode("div", null, [
              createVNode(WireMeUp)
            ]),
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.notConnected.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), { tag: "div" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.notConnected.message")) + " ", 1),
                createBaseVNode("a", {
                  href: "https://docs.n8n.io/workflows/connections/",
                  target: "_blank",
                  onClick: onConnectionHelpClick
                }, toDisplayString(unref(i18n).baseText("ndv.input.notConnected.learnMore")), 1)
              ]),
              _: 1
            })
          ], 2))
        ]),
        "node-waiting": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitNodeWaiting.title")), 1)
            ]),
            _: 1
          }),
          withDirectives(createVNode(unref(N8nText), null, null, 512), [
            [_directive_n8n_html, waitingMessage.value]
          ])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            tag: "div",
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData")), 1)
            ]),
            _: 1
          })
        ]),
        "recovered-artificial-output-data": withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.recoveredOutputData)
          }, [
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 2
      }, [
        isMappingMode.value ? {
          name: "before-data",
          fn: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent("style"), null, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("button.linkRun { display: none }")
              ])),
              _: 1
            })),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.mappedNode)
            }, [
              createVNode(InputNodeSelect, {
                "model-value": mappedNode2.value,
                workflow: _ctx.workflow,
                nodes: rootNodesParents.value,
                "onUpdate:modelValue": onMappedNodeSelected
              }, null, 8, ["model-value", "workflow", "nodes"])
            ], 2)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "node", "nodes", "workflow", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "override-outputs", "mapping-enabled", "distance-from-active", "is-production-execution-preview", "is-pane-active", "display-mode"]);
    };
  }
});
const runData = "_runData_115kf_123";
const mappedNode = "_mappedNode_115kf_127";
const titleSection = "_titleSection_115kf_131";
const inputModeTab = "_inputModeTab_115kf_140";
const noOutputData = "_noOutputData_115kf_144";
const recoveredOutputData = "_recoveredOutputData_115kf_151";
const notConnected = "_notConnected_115kf_160";
const title = "_title_115kf_131";
const style0$1 = {
  runData,
  mappedNode,
  titleSection,
  inputModeTab,
  noOutputData,
  recoveredOutputData,
  notConnected,
  title
};
const cssModules$2 = {
  "$style": style0$1
};
const InputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: "empty" };
const _hoisted_2 = { key: "listening" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: "default" };
const _hoisted_7 = {
  key: 0,
  class: "mb-xl"
};
const _hoisted_8 = ["textContent"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TriggerPanel",
  props: {
    nodeName: {},
    pushRef: { default: "" }
  },
  emits: ["activate", "execute"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodesTypeStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const ndvStore = useNDVStore();
    const router = useRouter();
    const workflowHelpers = useWorkflowHelpers({ router });
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const executionsHelpEventBus = createEventBus();
    const help = ref(null);
    const node2 = computed(() => workflowsStore.getNodeByName(props.nodeName));
    const nodeType = computed(() => {
      if (node2.value) {
        return nodesTypeStore.getNodeType(node2.value.type, node2.value.typeVersion);
      }
      return null;
    });
    const triggerPanel = computed(() => {
      const panel = nodeType.value?.triggerPanel;
      if (isTriggerPanelObject(panel)) {
        return panel;
      }
      return void 0;
    });
    const hideContent = computed(() => {
      const hideContent2 = triggerPanel.value?.hideContent;
      if (typeof hideContent2 === "boolean") {
        return hideContent2;
      }
      if (node2.value) {
        const hideContentValue = workflowHelpers.getCurrentWorkflow().expression.getSimpleParameterValue(node2.value, hideContent2, "internal", {});
        if (typeof hideContentValue === "boolean") {
          return hideContentValue;
        }
      }
      return false;
    });
    const hasIssues2 = computed(() => {
      return Boolean(
        node2.value?.issues && (node2.value.issues.parameters ?? node2.value.issues.credentials)
      );
    });
    const serviceName = computed(() => {
      if (nodeType.value) {
        return getTriggerNodeServiceName(nodeType.value);
      }
      return "";
    });
    const displayChatButton = computed(() => {
      return Boolean(
        node2.value && node2.value.type === CHAT_TRIGGER_NODE_TYPE && node2.value.parameters.mode !== "webhook"
      );
    });
    const isWebhookNode = computed(() => {
      return Boolean(node2.value && node2.value.type === WEBHOOK_NODE_TYPE);
    });
    const webhookHttpMethod = computed(() => {
      if (!node2.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      const httpMethod = workflowHelpers.getWebhookExpressionValue(
        nodeType.value.webhooks[0],
        "httpMethod",
        false
      );
      if (Array.isArray(httpMethod)) {
        return httpMethod.join(", ");
      }
      return httpMethod;
    });
    const webhookTestUrl = computed(() => {
      if (!node2.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      return workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node2.value, "test");
    });
    const isWebhookBasedNode = computed(() => {
      return Boolean(nodeType.value?.webhooks?.length);
    });
    const isPollingNode = computed(() => {
      return Boolean(nodeType.value?.polling);
    });
    const isListeningForEvents = computed(() => {
      const waitingOnWebhook = workflowsStore.executionWaitingForWebhook;
      const executedNode = workflowsStore.executedNode;
      return !!node2.value && !node2.value.disabled && isWebhookBasedNode.value && waitingOnWebhook && (!executedNode || executedNode === props.nodeName);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const isActivelyPolling = computed(() => {
      const triggeredNode = workflowsStore.executedNode;
      return workflowRunning.value && isPollingNode.value && props.nodeName === triggeredNode;
    });
    const isWorkflowActive = computed(() => {
      return workflowsStore.isWorkflowActive;
    });
    const listeningTitle = computed(() => {
      return nodeType.value?.name === FORM_TRIGGER_NODE_TYPE ? i18n.baseText("ndv.trigger.webhookNode.formTrigger.listening") : i18n.baseText("ndv.trigger.webhookNode.listening");
    });
    const listeningHint = computed(() => {
      switch (nodeType.value?.name) {
        case CHAT_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.chatTrigger.serviceHint");
        case FORM_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.formTrigger.serviceHint");
        default:
          return i18n.baseText("ndv.trigger.webhookBasedNode.serviceHint", {
            interpolate: { service: serviceName.value }
          });
      }
    });
    const header2 = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingEvent");
      }
      if (triggerPanel.value?.header) {
        return triggerPanel.value.header;
      }
      if (isWebhookBasedNode.value) {
        return i18n.baseText("ndv.trigger.webhookBasedNode.action", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const subheader = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingHint", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const executionsHelp = computed(() => {
      if (triggerPanel.value?.executionsHelp) {
        if (typeof triggerPanel.value.executionsHelp === "string") {
          return triggerPanel.value.executionsHelp;
        }
        if (!isWorkflowActive.value && triggerPanel.value.executionsHelp.inactive) {
          return triggerPanel.value.executionsHelp.inactive;
        }
        if (isWorkflowActive.value && triggerPanel.value.executionsHelp.active) {
          return triggerPanel.value.executionsHelp.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const activationHint = computed(() => {
      if (isActivelyPolling.value || !triggerPanel.value) {
        return "";
      }
      if (triggerPanel.value.activationHint) {
        if (typeof triggerPanel.value.activationHint === "string") {
          return triggerPanel.value.activationHint;
        }
        if (!isWorkflowActive.value && typeof triggerPanel.value.activationHint.inactive === "string") {
          return triggerPanel.value.activationHint.inactive;
        }
        if (isWorkflowActive.value && typeof triggerPanel.value.activationHint.active === "string") {
          return triggerPanel.value.activationHint.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const expandExecutionHelp = () => {
      if (help.value) {
        executionsHelpEventBus.emit("expand");
      }
    };
    const openWebhookUrl = () => {
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "input",
        type: "open-chat"
      });
      window.open(webhookTestUrl.value, "_blank", "noreferrer");
    };
    const onLinkClick = (e) => {
      if (!e.target) {
        return;
      }
      const target = e.target;
      if (target.localName !== "a") return;
      if (target.dataset?.key) {
        e.stopPropagation();
        e.preventDefault();
        if (target.dataset.key === "activate") {
          emit("activate");
        } else if (target.dataset.key === "executions") {
          telemetry.track("User clicked ndv link", {
            workflow_id: workflowsStore.workflowId,
            push_ref: props.pushRef,
            pane: "input",
            type: "open-executions-log"
          });
          ndvStore.activeNodeName = null;
          void router.push({
            name: VIEWS.EXECUTIONS
          });
        } else if (target.dataset.key === "settings") {
          uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
        }
      }
    };
    const onTestLinkCopied = () => {
      telemetry.track("User copied webhook URL", {
        pane: "inputs",
        type: "test url"
      });
    };
    const onNodeExecute = () => {
      emit("execute");
    };
    return (_ctx, _cache) => {
      const _component_n8n_pulse = resolveComponent("n8n-pulse");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_spinner = resolveComponent("n8n-spinner");
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_info_accordion = resolveComponent("n8n-info-accordion");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            hasIssues2.value || hideContent.value ? (openBlock(), createElementBlock("div", _hoisted_1$1)) : isListeningForEvents.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_n8n_pulse, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$g, {
                    "node-type": nodeType.value,
                    size: 40
                  }, null, 8, ["node-type"])
                ]),
                _: 1
              }),
              isWebhookNode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_n8n_text, {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.listening")), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(_component_n8n_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.requestHint", {
                        interpolate: { type: webhookHttpMethod.value ?? "" }
                      })), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                createVNode(CopyInput, {
                  value: webhookTestUrl.value,
                  "toast-title": unref(i18n).baseText("ndv.trigger.copiedTestUrl"),
                  class: "mb-2xl",
                  size: "medium",
                  collapse: true,
                  "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                  onCopy: onTestLinkCopied
                }, null, 8, ["value", "toast-title", "copy-button-text"]),
                createVNode(_sfc_main$h, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(_component_n8n_text, {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(listeningTitle.value), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(_component_n8n_text, { tag: "div" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(listeningHint.value), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                displayChatButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(_component_n8n_button, {
                    class: "mb-xl",
                    onClick: _cache[0] || (_cache[0] = ($event) => openWebhookUrl())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.chatTrigger.openChat")), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$h, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ]))
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              isActivelyPolling.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(_component_n8n_spinner, { type: "ring" })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.action)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [
                  header2.value ? (openBlock(), createBlock(_component_n8n_heading, {
                    key: 0,
                    tag: "h1",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(header2.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  subheader.value ? (openBlock(), createBlock(_component_n8n_text, { key: 1 }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        textContent: toDisplayString(subheader.value)
                      }, null, 8, _hoisted_8)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2),
                createVNode(_sfc_main$h, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ], 2),
              activationHint.value ? (openBlock(), createBlock(_component_n8n_text, {
                key: 1,
                size: "small",
                onClick: onLinkClick
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("span", null, null, 512), [
                    [_directive_n8n_html, activationHint.value]
                  ]),
                  _cache[1] || (_cache[1] = createTextVNode("  "))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              activationHint.value && executionsHelp.value ? (openBlock(), createBlock(_component_n8n_link, {
                key: 2,
                size: "small",
                onClick: expandExecutionHelp
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.moreInfo")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              executionsHelp.value ? (openBlock(), createBlock(_component_n8n_info_accordion, {
                key: 3,
                ref_key: "help",
                ref: help,
                class: normalizeClass(_ctx.$style.accordion),
                title: unref(i18n).baseText("ndv.trigger.executionsHint.question"),
                description: executionsHelp.value,
                "event-bus": unref(executionsHelpEventBus),
                "onClick:body": onLinkClick
              }, null, 8, ["class", "title", "description", "event-bus"])) : createCommentVNode("", true)
            ]))
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container = "_container_13dut_123";
const header = "_header_13dut_140";
const action = "_action_13dut_147";
const shake = "_shake_13dut_151";
const accordion = "_accordion_13dut_172";
const style0 = {
  container,
  header,
  action,
  shake,
  accordion
};
const cssModules$1 = {
  "$style": style0
};
const TriggerPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1], ["__scopeId", "data-v-bf6d9e5c"]]);
const _hoisted_1 = {
  key: 0,
  ref: "container",
  class: "data-display",
  "data-test-id": "ndv-modal",
  tabindex: "0"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeDetailsView",
  props: {
    workflowObject: {},
    readOnly: { type: Boolean, default: false },
    renaming: { type: Boolean },
    isProductionExecutionPreview: { type: Boolean, default: false }
  },
  emits: ["saveKeyboardShortcut", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "redrawNode", "stopExecution"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const ndvStore = useNDVStore();
    const externalHooks = useExternalHooks();
    const nodeHelpers = useNodeHelpers();
    const { activeNode } = storeToRefs(ndvStore);
    const pinnedData = usePinnedData(activeNode);
    const workflowActivate = useWorkflowActivate();
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const settingsStore = useSettingsStore();
    const deviceSupport = useDeviceSupport();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const message = useMessage();
    const { APP_Z_INDEXES } = useStyles();
    const settingsEventBus = createEventBus();
    const redrawRequired = ref(false);
    const runInputIndex = ref(-1);
    const runOutputIndex = computed(() => ndvStore.output.run ?? -1);
    const selectedInput = ref();
    const isLinkingEnabled = ref(true);
    const triggerWaitingWarningEnabled = ref(false);
    const isDragging = ref(false);
    const mainPanelPosition = ref(0);
    const pinDataDiscoveryTooltipVisible = ref(false);
    const avgInputRowHeight = ref(0);
    const avgOutputRowHeight = ref(0);
    const isInputPaneActive = ref(false);
    const isOutputPaneActive = ref(false);
    const isPairedItemHoveringEnabled = ref(true);
    const pushRef = computed(() => ndvStore.pushRef);
    const activeNodeType = computed(() => {
      if (activeNode.value) {
        return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
      }
      return null;
    });
    const showTriggerWaitingWarning = computed(
      () => triggerWaitingWarningEnabled.value && !!activeNodeType.value && !activeNodeType.value.group.includes("trigger") && workflowsStore.isWorkflowRunning && workflowsStore.executionWaitingForWebhook
    );
    const workflowRunData = computed(() => {
      if (workflowExecution.value === null) {
        return null;
      }
      const executionData = workflowExecution.value.data;
      if (executionData?.resultData) {
        return executionData.resultData.runData;
      }
      return null;
    });
    const parentNodes = computed(() => {
      if (activeNode.value) {
        return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1);
      }
      return [];
    });
    const parentNode = computed(() => {
      for (const parent of parentNodes.value) {
        if (workflowsStore?.pinnedWorkflowData?.[parent.name]) {
          return parent;
        }
        if (workflowRunData.value?.[parent.name]) {
          return parent;
        }
      }
      return parentNodes.value[0];
    });
    const inputNodeName = computed(() => {
      const nodeOutputs = activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : [];
      const nonMainOutputs = nodeOutputs.filter((output) => {
        if (typeof output === "string") return output !== NodeConnectionTypes.Main;
        return output.type !== NodeConnectionTypes.Main;
      });
      const isSubNode = nonMainOutputs.length > 0;
      if (isSubNode && activeNode.value) {
        const connectedOutputNode = props.workflowObject.getChildNodes(
          activeNode.value.name,
          "ALL_NON_MAIN"
        )?.[0];
        return connectedOutputNode;
      }
      return selectedInput.value ?? parentNode.value?.name;
    });
    const inputNode = computed(() => {
      if (inputNodeName.value) {
        return workflowsStore.getNodeByName(inputNodeName.value);
      }
      return null;
    });
    const inputSize = computed(() => ndvStore.ndvInputDataWithPinnedData.length);
    const isTriggerNode = computed(
      () => !!activeNodeType.value && (activeNodeType.value.group.includes("trigger") || activeNodeType.value.name === START_NODE_TYPE)
    );
    const showTriggerPanel = computed(() => {
      const override = !!activeNodeType.value?.triggerPanel;
      if (typeof activeNodeType.value?.triggerPanel === "boolean") {
        return override;
      }
      const isWebhookBasedNode = !!activeNodeType.value?.webhooks?.length;
      const isPollingNode = activeNodeType.value?.polling;
      return !props.readOnly && isTriggerNode.value && (isWebhookBasedNode || isPollingNode || override);
    });
    const hasOutputConnection = computed(() => {
      if (!activeNode.value) return false;
      const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(activeNode.value.name);
      return (Object.values(outgoingConnections)?.[0]?.[0] ?? []).length > 0;
    });
    const isExecutableTriggerNode = computed(() => {
      if (!activeNodeType.value) return false;
      return EXECUTABLE_TRIGGER_NODE_TYPES.includes(activeNodeType.value.name);
    });
    const isActiveStickyNode = computed(
      () => !!ndvStore.activeNode && ndvStore.activeNode.type === STICKY_NODE_TYPE
    );
    const workflowExecution = computed(() => workflowsStore.getWorkflowExecution);
    const maxOutputRun = computed(() => {
      if (activeNode.value === null) {
        return 0;
      }
      const runData2 = workflowRunData.value;
      if (!runData2?.[activeNode.value.name]) {
        return 0;
      }
      if (runData2[activeNode.value.name].length) {
        return runData2[activeNode.value.name].length - 1;
      }
      return 0;
    });
    const outputRun = computed(
      () => runOutputIndex.value === -1 ? maxOutputRun.value : Math.min(runOutputIndex.value, maxOutputRun.value)
    );
    const maxInputRun = computed(() => {
      if (inputNode.value === null || activeNode.value === null) {
        return 0;
      }
      const workflowNode = props.workflowObject.getNode(activeNode.value.name);
      if (!workflowNode || !activeNodeType.value) {
        return 0;
      }
      const outputs = getNodeOutputs(
        props.workflowObject,
        workflowNode,
        activeNodeType.value
      );
      let node2 = inputNode.value;
      const runData2 = workflowRunData.value;
      if (outputs.some((output) => output !== NodeConnectionTypes.Main)) {
        node2 = activeNode.value;
      }
      if (!node2 || !runData2 || !runData2.hasOwnProperty(node2.name)) {
        return 0;
      }
      if (runData2[node2.name].length) {
        return runData2[node2.name].length - 1;
      }
      return 0;
    });
    const connectedCurrentNodeOutputs = computed(() => {
      return parentNodes.value.find(({ name }) => name === inputNodeName.value)?.indicies;
    });
    const inputRun = computed(() => {
      if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) {
        return outputRun.value;
      }
      const currentInputNodeName = inputNodeName.value;
      if (runInputIndex.value === -1 && currentInputNodeName) {
        return connectedCurrentNodeOutputs.value?.map(
          (outputIndex) => nodeHelpers.getLastRunIndexWithData(currentInputNodeName, outputIndex)
        ).find((runIndex) => runIndex !== -1) ?? maxInputRun.value;
      }
      return Math.min(runInputIndex.value, maxInputRun.value);
    });
    const canLinkRuns = computed(
      () => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value
    );
    const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
    const featureRequestUrl = computed(() => {
      if (!activeNodeType.value) {
        return "";
      }
      return `${BASE_NODE_SURVEY_URL}${activeNodeType.value.name}`;
    });
    const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
    const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
    const blockUi = computed(
      () => workflowsStore.isWorkflowRunning || isExecutionWaitingForWebhook.value
    );
    const foreignCredentials = computed(() => {
      const credentials = activeNode.value?.credentials;
      const usedCredentials = workflowsStore.usedCredentials;
      const foreignCredentialsArray = [];
      if (credentials && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]) {
        Object.values(credentials).forEach((credential) => {
          if (credential.id && usedCredentials[credential.id] && !usedCredentials[credential.id].currentUserHasAccess) {
            foreignCredentialsArray.push(credential.id);
          }
        });
      }
      return foreignCredentialsArray;
    });
    const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
    const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
    const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
    const setIsTooltipVisible = ({ isTooltipVisible }) => {
      pinDataDiscoveryTooltipVisible.value = isTooltipVisible;
    };
    const onKeyDown = (e) => {
      if (e.key === "s" && deviceSupport.isCtrlKeyPressed(e)) {
        onSaveWorkflow(e);
      }
    };
    const onSaveWorkflow = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (props.readOnly) return;
      emit("saveKeyboardShortcut", e);
    };
    const onInputItemHover = (e) => {
      if (e === null || !inputNodeName.value || !isPairedItemHoveringEnabled.value) {
        ndvStore.setHoveringItem(null);
        return;
      }
      const item = {
        nodeName: inputNodeName.value,
        runIndex: inputRun.value,
        outputIndex: e.outputIndex,
        itemIndex: e.itemIndex
      };
      ndvStore.setHoveringItem(item);
    };
    const onInputTableMounted = (e) => {
      avgInputRowHeight.value = e.avgRowHeight;
    };
    const onWorkflowActivate = () => {
      ndvStore.activeNodeName = null;
      setTimeout(() => {
        void workflowActivate.activateCurrentWorkflow("ndv");
      }, 1e3);
    };
    const onOutputItemHover = (e) => {
      if (e === null || !activeNode.value || !isPairedItemHoveringEnabled.value) {
        ndvStore.setHoveringItem(null);
        return;
      }
      const item = {
        nodeName: activeNode.value?.name,
        runIndex: outputRun.value,
        outputIndex: e.outputIndex,
        itemIndex: e.itemIndex
      };
      ndvStore.setHoveringItem(item);
    };
    const onFeatureRequestClick = () => {
      window.open(featureRequestUrl.value, "_blank");
      if (activeNode.value) {
        telemetry.track("User clicked ndv link", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: pushRef.value,
          pane: NodeConnectionTypes.Main,
          type: "i-wish-this-node-would"
        });
      }
    };
    const onDragEnd = (e) => {
      isDragging.value = false;
      telemetry.track("User moved parameters pane", {
        // example method for tracking
        window_width: e.windowWidth,
        start_position: mainPanelPosition.value,
        end_position: e.position,
        node_type: activeNodeType.value ? activeNodeType.value.name : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId
      });
      mainPanelPosition.value = e.position;
    };
    const onDragStart = (e) => {
      isDragging.value = true;
      mainPanelPosition.value = e.position;
    };
    const onPanelsInit = (e) => {
      mainPanelPosition.value = e.position;
    };
    const onLinkRunToOutput = () => {
      isLinkingEnabled.value = true;
      trackLinking("output");
    };
    const onUnlinkRun = (pane) => {
      runInputIndex.value = runOutputIndex.value;
      isLinkingEnabled.value = false;
      trackLinking(pane);
    };
    const onNodeExecute = () => {
      setTimeout(() => {
        if (!activeNode.value || !workflowsStore.isWorkflowRunning) {
          return;
        }
        triggerWaitingWarningEnabled.value = true;
      }, 1e3);
    };
    const openSettings = () => {
      settingsEventBus.emit("openSettings");
    };
    const trackLinking = (pane) => {
      telemetry.track("User changed ndv run linking", {
        node_type: activeNodeType.value ? activeNodeType.value.name : "",
        push_ref: pushRef.value,
        linked: linked.value,
        pane
      });
    };
    const onLinkRunToInput = () => {
      ndvStore.setOutputRunIndex(runInputIndex.value);
      isLinkingEnabled.value = true;
      trackLinking("input");
    };
    const valueChanged = (parameterData) => {
      emit("valueChanged", parameterData);
    };
    const onSwitchSelectedNode = (nodeTypeName) => {
      emit("switchSelectedNode", nodeTypeName);
    };
    const onOpenConnectionNodeCreator = (nodeTypeName, connectionType2) => {
      emit("openConnectionNodeCreator", nodeTypeName, connectionType2);
    };
    const close = async () => {
      if (isDragging.value) {
        return;
      }
      if (activeNode.value && (typeof activeNodeType.value?.outputs === "string" || typeof activeNodeType.value?.inputs === "string" || redrawRequired.value)) {
        const nodeName = activeNode.value.name;
        setTimeout(() => {
          emit("redrawNode", nodeName);
        }, 1);
      }
      if (outputPanelEditMode.value.enabled && activeNode.value) {
        const shouldPinDataBeforeClosing = await message.confirm(
          "",
          i18n.baseText("ndv.pinData.beforeClosing.title"),
          {
            confirmButtonText: i18n.baseText("ndv.pinData.beforeClosing.confirm"),
            cancelButtonText: i18n.baseText("ndv.pinData.beforeClosing.cancel")
          }
        );
        if (shouldPinDataBeforeClosing === MODAL_CONFIRM) {
          const { value } = outputPanelEditMode.value;
          try {
            pinnedData.setData(jsonParse(value), "on-ndv-close-modal");
          } catch (error) {
            console.error(error);
          }
        }
        ndvStore.setOutputPanelEditModeEnabled(false);
      }
      await externalHooks.run("dataDisplay.nodeEditingFinished");
      telemetry.track("User closed node modal", {
        node_type: activeNodeType.value ? activeNodeType.value?.name : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId
      });
      triggerWaitingWarningEnabled.value = false;
      ndvStore.activeNodeName = null;
      ndvStore.resetNDVPushRef();
    };
    const trackRunChange = (run, pane) => {
      telemetry.track("User changed ndv run dropdown", {
        push_ref: pushRef.value,
        run_index: run,
        node_type: activeNodeType.value ? activeNodeType.value?.name : "",
        pane
      });
    };
    const onRunOutputIndexChange = (run) => {
      ndvStore.setOutputRunIndex(run);
      trackRunChange(run, "output");
    };
    const onRunInputIndexChange = (run) => {
      runInputIndex.value = run;
      if (linked.value) {
        ndvStore.setOutputRunIndex(run);
      }
      trackRunChange(run, "input");
    };
    const onOutputTableMounted = (e) => {
      avgOutputRowHeight.value = e.avgRowHeight;
    };
    const onInputNodeChange = (value, index) => {
      runInputIndex.value = -1;
      isLinkingEnabled.value = true;
      selectedInput.value = value;
      telemetry.track("User changed ndv input dropdown", {
        node_type: activeNode.value ? activeNode.value.type : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId,
        selection_value: index,
        input_node_type: inputNode.value ? inputNode.value.type : ""
      });
    };
    const onStopExecution = () => {
      emit("stopExecution");
    };
    const activateInputPane = () => {
      isInputPaneActive.value = true;
      isOutputPaneActive.value = false;
    };
    const activateOutputPane = () => {
      isInputPaneActive.value = false;
      isOutputPaneActive.value = true;
    };
    const onSearch = (search) => {
      isPairedItemHoveringEnabled.value = !search;
    };
    const registerKeyboardListener = () => {
      document.addEventListener("keydown", onKeyDown, true);
    };
    const unregisterKeyboardListener = () => {
      document.removeEventListener("keydown", onKeyDown, true);
    };
    const setSelectedInput = (value) => {
      selectedInput.value = value;
    };
    const handleChangeDisplayMode = (pane, mode) => {
      ndvStore.setPanelDisplayMode({ pane, mode });
    };
    watch(
      activeNode,
      (node2, oldNode) => {
        if (node2 && !oldNode) {
          registerKeyboardListener();
        } else if (!node2) {
          unregisterKeyboardListener();
        }
        if (node2 && node2.name !== oldNode?.name && !isActiveStickyNode.value) {
          runInputIndex.value = -1;
          ndvStore.setOutputRunIndex(-1);
          isLinkingEnabled.value = true;
          selectedInput.value = void 0;
          triggerWaitingWarningEnabled.value = false;
          avgOutputRowHeight.value = 0;
          avgInputRowHeight.value = 0;
          setTimeout(() => ndvStore.setNDVPushRef(), 0);
          if (!activeNodeType.value) {
            return;
          }
          void externalHooks.run("dataDisplay.nodeTypeChanged", {
            nodeSubtitle: nodeHelpers.getNodeSubtitle(node2, activeNodeType.value, props.workflowObject)
          });
          setTimeout(() => {
            if (activeNode.value) {
              const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(
                activeNode.value?.name
              );
              telemetry.track("User opened node modal", {
                node_id: activeNode.value?.id,
                node_type: activeNodeType.value ? activeNodeType.value?.name : "",
                workflow_id: workflowsStore.workflowId,
                push_ref: pushRef.value,
                is_editable: !hasForeignCredential.value,
                parameters_pane_position: mainPanelPosition.value,
                input_first_connector_runs: maxInputRun.value,
                output_first_connector_runs: maxOutputRun.value,
                selected_view_inputs: isTriggerNode.value ? "trigger" : inputPanelDisplayMode.value,
                selected_view_outputs: outputPanelDisplayMode.value,
                input_connectors: parentNodes.value.length,
                output_connectors: outgoingConnections?.main?.length,
                input_displayed_run_index: inputRun.value,
                output_displayed_run_index: outputRun.value,
                data_pinning_tooltip_presented: pinDataDiscoveryTooltipVisible.value,
                input_displayed_row_height_avg: avgInputRowHeight.value,
                output_displayed_row_height_avg: avgOutputRowHeight.value
              });
            }
          }, 2e3);
        }
        if (window.top && !isActiveStickyNode.value) {
          window.top.postMessage(JSON.stringify({ command: node2 ? "openNDV" : "closeNDV" }), "*");
        }
      },
      { immediate: true }
    );
    watch(maxOutputRun, () => {
      ndvStore.setOutputRunIndex(-1);
    });
    watch(maxInputRun, () => {
      runInputIndex.value = -1;
    });
    watch(inputNodeName, (nodeName) => {
      setTimeout(() => {
        ndvStore.setInputNodeName(nodeName);
      }, 0);
    });
    watch(inputRun, (inputRun2) => {
      setTimeout(() => {
        ndvStore.setInputRunIndex(inputRun2);
      }, 0);
    });
    onMounted(() => {
      dataPinningEventBus.on("data-pinning-discovery", setIsTooltipVisible);
      ndvEventBus.on("updateInputNodeName", setSelectedInput);
    });
    onBeforeUnmount(() => {
      dataPinningEventBus.off("data-pinning-discovery", setIsTooltipVisible);
      ndvEventBus.off("updateInputNodeName", setSelectedInput);
      unregisterKeyboardListener();
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        id: "ndv",
        "model-value": (!!unref(activeNode) || _ctx.renaming) && !isActiveStickyNode.value,
        "before-close": close,
        "show-close": false,
        class: "data-display-wrapper ndv-wrapper",
        "overlay-class": "data-display-overlay",
        width: "auto",
        "append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`,
        "data-test-id": "ndv",
        "z-index": unref(APP_Z_INDEXES).NDV,
        "data-has-output-connection": hasOutputConnection.value
      }, {
        default: withCtx(() => [
          createVNode(_component_n8n_tooltip, {
            placement: "bottom-start",
            visible: showTriggerWaitingWarning.value,
            disabled: !showTriggerWaitingWarning.value
          }, {
            content: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.triggerWarning)
              }, toDisplayString(unref(i18n).baseText("ndv.backToCanvas.waitingForTriggerWarning")), 3)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.backToCanvas),
                "data-test-id": "back-to-canvas",
                onClick: close
              }, [
                createVNode(_component_n8n_icon, {
                  icon: "arrow-left",
                  color: "text-xlight",
                  size: "medium"
                }),
                createVNode(_component_n8n_text, {
                  color: "text-xlight",
                  size: "medium",
                  bold: true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.backToCanvas")), 1)
                  ]),
                  _: 1
                })
              ], 2)
            ]),
            _: 1
          }, 8, ["visible", "disabled"]),
          unref(activeNode) ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.modalBackground),
              onClick: close
            }, null, 2),
            (openBlock(), createBlock(NDVDraggablePanels, {
              key: unref(activeNode).name,
              "is-trigger-node": isTriggerNode.value,
              "hide-input-and-output": activeNodeType.value === null,
              position: isTriggerNode.value && !showTriggerPanel.value ? 0 : void 0,
              "is-draggable": !isTriggerNode.value,
              "has-double-width": activeNodeType.value?.parameterPane === "wide",
              "node-type": activeNodeType.value,
              onSwitchSelectedNode,
              onOpenConnectionNodeCreator,
              onClose: close,
              onInit: onPanelsInit,
              onDragstart: onDragStart,
              onDragend: onDragEnd
            }, createSlots({
              output: withCtx(() => [
                createVNode(OutputPanel, {
                  "data-test-id": "output-panel",
                  workflow: _ctx.workflowObject,
                  "can-link-runs": canLinkRuns.value,
                  "run-index": outputRun.value,
                  "linked-runs": linked.value,
                  "push-ref": pushRef.value,
                  "is-read-only": _ctx.readOnly || hasForeignCredential.value,
                  "block-u-i": blockUi.value && isTriggerNode.value && !isExecutableTriggerNode.value,
                  "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                  "is-pane-active": isOutputPaneActive.value,
                  "display-mode": outputPanelDisplayMode.value,
                  onActivatePane: activateOutputPane,
                  onLinkRun: onLinkRunToOutput,
                  onUnlinkRun: _cache[2] || (_cache[2] = () => onUnlinkRun("output")),
                  onRunChange: onRunOutputIndexChange,
                  onOpenSettings: openSettings,
                  onTableMounted: onOutputTableMounted,
                  onItemHover: onOutputItemHover,
                  onSearch,
                  onDisplayModeChange: _cache[3] || (_cache[3] = ($event) => handleChangeDisplayMode("output", $event))
                }, null, 8, ["workflow", "can-link-runs", "run-index", "linked-runs", "push-ref", "is-read-only", "block-u-i", "is-production-execution-preview", "is-pane-active", "display-mode"])
              ]),
              main: withCtx(() => [
                createVNode(NodeSettings, {
                  "event-bus": unref(settingsEventBus),
                  dragging: isDragging.value,
                  "push-ref": pushRef.value,
                  "node-type": activeNodeType.value,
                  "foreign-credentials": foreignCredentials.value,
                  "read-only": _ctx.readOnly,
                  "block-u-i": blockUi.value && showTriggerPanel.value,
                  executable: !_ctx.readOnly,
                  "input-size": inputSize.value,
                  onValueChanged: valueChanged,
                  onExecute: onNodeExecute,
                  onStopExecution,
                  onRedrawRequired: _cache[4] || (_cache[4] = ($event) => redrawRequired.value = true),
                  onActivate: onWorkflowActivate,
                  onSwitchSelectedNode,
                  onOpenConnectionNodeCreator
                }, null, 8, ["event-bus", "dragging", "push-ref", "node-type", "foreign-credentials", "read-only", "block-u-i", "executable", "input-size"]),
                featureRequestUrl.value ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.featureRequest),
                  target: "_blank",
                  onClick: onFeatureRequestClick
                }, [
                  createVNode(_component_font_awesome_icon, { icon: "lightbulb" }),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              _: 2
            }, [
              showTriggerPanel.value || !isTriggerNode.value ? {
                name: "input",
                fn: withCtx(() => [
                  showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel, {
                    key: 0,
                    "node-name": unref(activeNode).name,
                    "push-ref": pushRef.value,
                    onExecute: onNodeExecute,
                    onActivate: onWorkflowActivate
                  }, null, 8, ["node-name", "push-ref"])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel, {
                    key: 1,
                    workflow: _ctx.workflowObject,
                    "can-link-runs": canLinkRuns.value,
                    "run-index": inputRun.value,
                    "linked-runs": linked.value,
                    "current-node-name": inputNodeName.value,
                    "push-ref": pushRef.value,
                    "read-only": _ctx.readOnly || hasForeignCredential.value,
                    "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                    "is-pane-active": isInputPaneActive.value,
                    "display-mode": inputPanelDisplayMode.value,
                    onActivatePane: activateInputPane,
                    onLinkRun: onLinkRunToInput,
                    onUnlinkRun: _cache[0] || (_cache[0] = () => onUnlinkRun("input")),
                    onRunChange: onRunInputIndexChange,
                    onOpenSettings: openSettings,
                    onChangeInputNode: onInputNodeChange,
                    onExecute: onNodeExecute,
                    onTableMounted: onInputTableMounted,
                    onItemHover: onInputItemHover,
                    onSearch,
                    onDisplayModeChange: _cache[1] || (_cache[1] = ($event) => handleChangeDisplayMode("input", $event))
                  }, null, 8, ["workflow", "can-link-runs", "run-index", "linked-runs", "current-node-name", "push-ref", "read-only", "is-production-execution-preview", "is-pane-active", "display-mode"])) : createCommentVNode("", true)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["is-trigger-node", "hide-input-and-output", "position", "is-draggable", "has-double-width", "node-type"]))
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["model-value", "append-to", "z-index", "data-has-output-connection"]);
    };
  }
});
const modalBackground = "_modalBackground_176ah_123";
const triggerWarning = "_triggerWarning_176ah_128";
const backToCanvas = "_backToCanvas_176ah_132";
const featureRequest = "_featureRequest_176ah_153";
const style1 = {
  modalBackground,
  triggerWarning,
  backToCanvas,
  featureRequest
};
const cssModules = {
  "$style": style1
};
const NodeDetailsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeDetailsView as default
};
