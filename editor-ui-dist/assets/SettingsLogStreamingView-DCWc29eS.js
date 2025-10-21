import { d as defineComponent, dN as deepCopy, eA as useLogStreamingStore, r as ref, o as onMounted, eB as defaultMessageEventBusDestinationOptions, b3 as onBeforeMount, x as computed, c as useI18n, eC as assert, e as createBlock, g as openBlock, k as unref, s as N8nCard, n as normalizeClass, w as withCtx, j as createBaseVNode, i as createVNode, p as N8nText, l as createTextVNode, t as toDisplayString, ek as ElSwitch, ee as N8nActionToggle, m as N8nHeading, am as useMessage, an as MODAL_CONFIRM, _ as _export_sfc, v as useSettingsStore, a2 as useWorkflowsStore, bE as injectWorkflowState, Q as useUIStore, d1 as useCredentialsStore, ay as useDocumentTitle, aB as usePageRedirectionHelper, aF as EnterpriseEditionFeature, aE as hasPermission, aq as createEventBus, eD as getCurrentInstance, c0 as resolveDirective, h as createElementBlock, f as createCommentVNode, F as Fragment, b4 as withDirectives, cK as InfoTip, A as renderList, ex as ElCol, ey as ElRow, q as N8nButton, dW as N8nActionBox, eE as LOG_STREAM_MODAL_KEY, bD as v4, Z as nextTick } from "./index-lkSN61-i.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EventDestinationCard",
  props: {
    eventBus: {},
    destination: { default: () => deepCopy(defaultMessageEventBusDestinationOptions) },
    readonly: { type: Boolean }
  },
  emits: ["edit", "remove"],
  setup(__props, { emit: __emit }) {
    const DESTINATION_LIST_ITEM_ACTIONS = {
      OPEN: "open",
      DELETE: "delete"
    };
    const { confirm } = useMessage();
    const i18n = useI18n();
    const logStreamingStore = useLogStreamingStore();
    const nodeParameters = ref({});
    const cardActions2 = ref(null);
    const props = __props;
    const emit = __emit;
    onMounted(() => {
      nodeParameters.value = Object.assign(
        deepCopy(defaultMessageEventBusDestinationOptions),
        props.destination
      );
      props.eventBus?.on("destinationWasSaved", onDestinationWasSaved);
    });
    onBeforeMount(() => {
      props.eventBus?.off("destinationWasSaved", onDestinationWasSaved);
    });
    const actions = computed(() => {
      const actionList = [
        {
          label: i18n.baseText("workflows.item.open"),
          value: DESTINATION_LIST_ITEM_ACTIONS.OPEN
        }
      ];
      if (!props.readonly) {
        actionList.push({
          label: i18n.baseText("workflows.item.delete"),
          value: DESTINATION_LIST_ITEM_ACTIONS.DELETE
        });
      }
      return actionList;
    });
    const typeLabelName = computed(() => {
      return `settings.log-streaming.${props.destination.__type}`;
    });
    function onDestinationWasSaved() {
      assert(props.destination.id);
      const updatedDestination = logStreamingStore.getDestination(props.destination.id);
      if (updatedDestination) {
        nodeParameters.value = Object.assign(
          deepCopy(defaultMessageEventBusDestinationOptions),
          props.destination
        );
      }
    }
    async function onClick(event) {
      const target = event.target;
      if (cardActions2.value === target || cardActions2.value?.contains(target) || target?.contains(cardActions2.value)) {
        return;
      }
      emit("edit", props.destination.id);
    }
    function onEnabledSwitched(state) {
      const boolValue = typeof state === "boolean" ? state : Boolean(state);
      nodeParameters.value.enabled = boolValue;
      void saveDestination();
    }
    async function saveDestination() {
      await logStreamingStore.saveDestination(nodeParameters.value);
    }
    async function onAction(action) {
      if (action === DESTINATION_LIST_ITEM_ACTIONS.OPEN) {
        emit("edit", props.destination.id);
      } else if (action === DESTINATION_LIST_ITEM_ACTIONS.DELETE) {
        const deleteConfirmed = await confirm(
          i18n.baseText("settings.log-streaming.destinationDelete.message", {
            interpolate: { destinationName: props.destination.label ?? "" }
          }),
          i18n.baseText("settings.log-streaming.destinationDelete.headline"),
          {
            type: "warning",
            confirmButtonText: i18n.baseText(
              "settings.log-streaming.destinationDelete.confirmButtonText"
            ),
            cancelButtonText: i18n.baseText(
              "settings.log-streaming.destinationDelete.cancelButtonText"
            )
          }
        );
        if (deleteConfirmed !== MODAL_CONFIRM) {
          return;
        }
        emit("remove", props.destination.id);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nCard), {
        class: normalizeClass(_ctx.$style.cardLink),
        "data-test-id": "destination-card",
        onClick
      }, {
        header: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(unref(N8nHeading), {
              tag: "h2",
              bold: "",
              class: normalizeClass(_ctx.$style.cardHeading)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.destination.label), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.cardDescription)
            }, [
              createVNode(unref(N8nText), {
                color: "text-light",
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(typeLabelName.value)), 1)
                ]),
                _: 1
              })
            ], 2)
          ])
        ]),
        append: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "cardActions",
            ref: cardActions2,
            class: normalizeClass(_ctx.$style.cardActions)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.activeStatusText),
              "data-test-id": "destination-activator-status"
            }, [
              nodeParameters.value.enabled ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                color: "success",
                size: "small",
                bold: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)
                ]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nText), {
                key: 1,
                color: "text-base",
                size: "small",
                bold: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)
                ]),
                _: 1
              }))
            ], 2),
            createVNode(unref(ElSwitch), {
              class: "mr-s",
              disabled: _ctx.readonly,
              "model-value": nodeParameters.value.enabled,
              title: nodeParameters.value.enabled ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
              "active-color": "#13ce66",
              "inactive-color": "#8899AA",
              "data-test-id": "workflow-activate-switch",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onEnabledSwitched($event))
            }, null, 8, ["disabled", "model-value", "title"]),
            createVNode(unref(N8nActionToggle), {
              actions: actions.value,
              theme: "dark",
              onAction
            }, null, 8, ["actions"])
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const cardLink = "_cardLink_12va4_123";
const activeStatusText = "_activeStatusText_12va4_133";
const cardHeading = "_cardHeading_12va4_141";
const cardDescription = "_cardDescription_12va4_147";
const cardActions = "_cardActions_12va4_154";
const style0$1 = {
  cardLink,
  activeStatusText,
  cardHeading,
  cardDescription,
  cardActions
};
const cssModules$1 = {
  "$style": style0$1
};
const EventDestinationCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { class: "mb-2xl" };
const _hoisted_2 = { class: "ml-m" };
const _hoisted_3 = { class: "mb-l" };
const _hoisted_4 = { class: "mt-m text-right" };
const _hoisted_5 = {
  key: 1,
  "data-test-id": "action-box-licensed"
};
const _hoisted_6 = {
  key: 0,
  class: "mb-l"
};
const _hoisted_7 = { "data-test-id": "action-box-unlicensed" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsLogStreamingView",
  setup(__props) {
    const environment = "production";
    const settingsStore = useSettingsStore();
    const logStreamingStore = useLogStreamingStore();
    const workflowsStore = useWorkflowsStore();
    const workflowState = injectWorkflowState();
    const uiStore = useUIStore();
    const credentialsStore = useCredentialsStore();
    const documentTitle = useDocumentTitle();
    const i18n = useI18n();
    const pageRedirectHelper = usePageRedirectionHelper();
    const eventBus = createEventBus();
    const disableLicense = ref(false);
    const allDestinations = ref([]);
    const sortedItemKeysByLabel = computed(() => {
      const sortedKeys = [];
      for (const [key, value] of Object.entries(logStreamingStore.items)) {
        sortedKeys.push({ key, label: value.destination?.label ?? "Destination" });
      }
      return sortedKeys.sort((a, b) => a.label.localeCompare(b.label));
    });
    const isLicensed = computed(() => {
      if (disableLicense.value) return false;
      return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.LogStreaming];
    });
    const canManageLogStreaming = computed(() => {
      return hasPermission(["rbac"], { rbac: { scope: "logStreaming:manage" } });
    });
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.log-streaming.heading"));
      if (!isLicensed.value) return;
      await credentialsStore.fetchCredentialTypes(false);
      await credentialsStore.fetchAllCredentials();
      uiStore.nodeViewInitialized = false;
      await getDestinationDataFromBackend();
      logStreamingStore.$onAction(({ name, after }) => {
        if (name === "removeDestination" || name === "updateDestination") {
          after(async () => {
            forceUpdateInstance();
          });
        }
      });
      eventBus.on("destinationWasSaved", onDestinationWasSaved);
      eventBus.on("remove", onRemove);
      eventBus.on("closing", onBusClosing);
    });
    onBeforeMount(() => {
      eventBus.off("destinationWasSaved", onDestinationWasSaved);
      eventBus.off("remove", onRemove);
      eventBus.off("closing", onBusClosing);
    });
    function onDestinationWasSaved() {
      forceUpdateInstance();
    }
    function forceUpdateInstance() {
      const instance = getCurrentInstance();
      instance?.proxy?.$forceUpdate();
    }
    function onBusClosing() {
      workflowState.removeAllNodes({ setStateDirty: false, removePinData: true });
      uiStore.stateIsDirty = false;
    }
    async function getDestinationDataFromBackend() {
      logStreamingStore.clearEventNames();
      logStreamingStore.clearDestinations();
      allDestinations.value = [];
      const eventNamesData = await logStreamingStore.fetchEventNames();
      if (eventNamesData) {
        for (const eventName of eventNamesData) {
          logStreamingStore.addEventName(eventName);
        }
      }
      const destinationData = await logStreamingStore.fetchDestinations();
      if (destinationData) {
        for (const destination of destinationData) {
          logStreamingStore.addDestination(destination);
          allDestinations.value.push(destination);
        }
      }
      forceUpdateInstance();
    }
    function goToUpgrade() {
      void pageRedirectHelper.goToUpgrade("log-streaming", "upgrade-log-streaming");
    }
    function storeHasItems() {
      return logStreamingStore.items && Object.keys(logStreamingStore.items).length > 0;
    }
    async function addDestination() {
      const newDestination = deepCopy(defaultMessageEventBusDestinationOptions);
      newDestination.id = v4();
      logStreamingStore.addDestination(newDestination);
      await nextTick();
      uiStore.openModalWithData({
        name: LOG_STREAM_MODAL_KEY,
        data: {
          destination: newDestination,
          isNew: true,
          eventBus
        }
      });
    }
    async function onRemove(destinationId) {
      if (!destinationId) return;
      await logStreamingStore.deleteDestination(destinationId);
      const foundNode = workflowsStore.getNodeByName(destinationId);
      if (foundNode) {
        workflowsStore.removeNode(foundNode);
      }
    }
    async function onEdit(destinationId) {
      if (!destinationId) return;
      const editDestination = logStreamingStore.getDestination(destinationId);
      if (editDestination) {
        uiStore.openModalWithData({
          name: LOG_STREAM_MODAL_KEY,
          data: {
            destination: editDestination,
            isNew: false,
            eventBus
          }
        });
      }
    }
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(N8nHeading), { size: "2xlarge" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.heading`)), 1)
              ]),
              _: 1
            }),
            unref(environment) !== "production" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("span", _hoisted_2, "Disable License (" + toDisplayString(unref(environment)) + ") ", 1),
              createVNode(unref(ElSwitch), {
                modelValue: disableLicense.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => disableLicense.value = $event),
                size: "large",
                "data-test-id": "disable-license-toggle"
              }, null, 8, ["modelValue"])
            ], 64)) : createCommentVNode("", true)
          ])
        ], 2),
        isLicensed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(InfoTip), {
              theme: "info",
              type: "note"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]
                ])
              ]),
              _: 1
            })
          ]),
          storeHasItems() ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(sortedItemKeysByLabel.value, (item) => {
              return openBlock(), createBlock(unref(ElRow), {
                key: item.key,
                gutter: 10,
                class: normalizeClass(_ctx.$style.destinationItem)
              }, {
                default: withCtx(() => [
                  unref(logStreamingStore).items[item.key]?.destination ? (openBlock(), createBlock(unref(ElCol), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(EventDestinationCard, {
                        destination: unref(logStreamingStore).items[item.key]?.destination,
                        "event-bus": unref(eventBus),
                        readonly: !canManageLogStreaming.value,
                        onRemove: ($event) => onRemove(unref(logStreamingStore).items[item.key]?.destination?.id),
                        onEdit: ($event) => onEdit(unref(logStreamingStore).items[item.key]?.destination?.id)
                      }, null, 8, ["destination", "event-bus", "readonly", "onRemove", "onEdit"])
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["class"]);
            }), 128)),
            createBaseVNode("div", _hoisted_4, [
              canManageLogStreaming.value ? (openBlock(), createBlock(unref(N8nButton), {
                key: 0,
                size: "large",
                onClick: addDestination
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.add`)), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ], 64)) : (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(unref(N8nActionBox), {
              "button-text": unref(i18n).baseText(`settings.log-streaming.add`),
              "onClick:button": addDestination
            }, {
              heading: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [_directive_n8n_html, unref(i18n).baseText(`settings.log-streaming.addFirstTitle`)]
                ])
              ]),
              _: 1
            }, 8, ["button-text"])
          ]))
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(i18n).baseText("settings.log-streaming.infoText") ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createVNode(unref(InfoTip), {
              theme: "info",
              type: "note"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_7, [
            createVNode(unref(N8nActionBox), {
              description: unref(i18n).baseText("settings.log-streaming.actionBox.description"),
              "button-text": unref(i18n).baseText("settings.log-streaming.actionBox.button"),
              "onClick:button": goToUpgrade
            }, {
              heading: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.actionBox.title")]
                ])
              ]),
              _: 1
            }, 8, ["description", "button-text"])
          ])
        ], 64))
      ]);
    };
  }
});
const header = "_header_x2fvs_123";
const destinationItem = "_destinationItem_x2fvs_133";
const style0 = {
  header,
  destinationItem
};
const cssModules = {
  "$style": style0
};
const SettingsLogStreamingView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsLogStreamingView as default
};
