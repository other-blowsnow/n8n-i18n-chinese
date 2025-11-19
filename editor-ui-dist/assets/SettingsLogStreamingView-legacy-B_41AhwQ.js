;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./col-legacy-CQMoYMQI.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./logStreaming.store-legacy-BtCUnBl0.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, getCurrentInstance, nextTick, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, withCtx, openBlock, renderList, createTextVNode, onBeforeMount, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nActionToggle_default, N8nActionBox_default, N8nText_default, N8nButton_default, N8nInfoTip_default, N8nHeading_default, N8nCard_default, ElSwitch, __plugin_vue_export_helper_default, createEventBus, useMessage, ElRow, ElCol, useSettingsStore, hasPermission, useCredentialsStore, v4_default, useUIStore, injectWorkflowState, useDocumentTitle, assert, useWorkflowsStore, deepCopy, EnterpriseEditionFeature, MODAL_CONFIRM, defaultMessageEventBusDestinationOptions, LOG_STREAM_MODAL_KEY, usePageRedirectionHelper, useLogStreamingStore, __vite_style__, EventDestinationCard_vue_vue_type_script_setup_true_lang_default, cardLink, activeStatusText, cardHeading, cardDescription, cardActions, EventDestinationCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, EventDestinationCard_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default, header, destinationItem, SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsLogStreamingView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        getCurrentInstance = _vueRuntimeEsmBundlerLegacy003Js.F;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nCard_default = _srcLegacy007Js.X;
        ElSwitch = _srcLegacy007Js.kt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_colLegacy00zJs) {
        ElRow = _colLegacy00zJs.n;
        ElCol = _colLegacy00zJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        hasPermission = _useTelemetryLegacy00FJs.Gn;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        v4_default = _useTelemetryLegacy00FJs.Io;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        assert = _useTelemetryLegacy00FJs._c;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        deepCopy = _constantsLegacy00NJs.Hi;
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        defaultMessageEventBusDestinationOptions = _constantsLegacy00NJs.ii;
        LOG_STREAM_MODAL_KEY = _constantsLegacy00NJs.ko;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_logStreamingStoreLegacy03fJs) {
        useLogStreamingStore = _logStreamingStoreLegacy03fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._cardLink_12va4_123 {\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n  padding: 0 0 0 var(--spacing--sm);\n  align-items: stretch;\n}\n._cardLink_12va4_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._activeStatusText_12va4_133 {\n  width: 64px;\n  padding-right: var(--spacing--2xs);\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: right;\n}\n._cardHeading_12va4_141 {\n  font-size: var(--font-size--sm);\n  word-break: break-word;\n  padding: var(--spacing--sm) 0 0 var(--spacing--sm);\n}\n._cardDescription_12va4_147 {\n  min-height: 19px;\n  display: flex;\n  align-items: center;\n  padding: 0 0 var(--spacing--sm) var(--spacing--sm);\n}\n._cardActions_12va4_154 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 0 var(--spacing--sm) 0 0;\n  cursor: default;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_x2fvs_123 {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  white-space: nowrap;\n}\n._header_x2fvs_123 *:first-child {\n  flex-grow: 1;\n}\n._destinationItem_x2fvs_133 {\n  margin-bottom: 0.5em;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/integrations/logStreaming.ee/components/EventDestinationCard.vue?vue&type=script&setup=true&lang.ts
        EventDestinationCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EventDestinationCard",
          props: {
            eventBus: {},
            destination: {
              default: () => deepCopy(defaultMessageEventBusDestinationOptions)
            },
            readonly: {
              type: Boolean
            }
          },
          emits: ["edit", "remove"],
          setup(__props, {
            emit: __emit
          }) {
            const DESTINATION_LIST_ITEM_ACTIONS = {
              OPEN: "open",
              DELETE: "delete"
            };
            const {
              confirm
            } = useMessage();
            const i18n = useI18n();
            const logStreamingStore = useLogStreamingStore();
            const nodeParameters = ref({});
            const cardActions$1 = ref(null);
            const props = __props;
            const emit = __emit;
            onMounted(() => {
              nodeParameters.value = Object.assign(deepCopy(defaultMessageEventBusDestinationOptions), props.destination);
              props.eventBus?.on("destinationWasSaved", onDestinationWasSaved);
            });
            onBeforeMount(() => {
              props.eventBus?.off("destinationWasSaved", onDestinationWasSaved);
            });
            const actions = computed(() => {
              const actionList = [{
                label: i18n.baseText("workflows.item.open"),
                value: DESTINATION_LIST_ITEM_ACTIONS.OPEN
              }];
              if (!props.readonly) actionList.push({
                label: i18n.baseText("workflows.item.delete"),
                value: DESTINATION_LIST_ITEM_ACTIONS.DELETE
              });
              return actionList;
            });
            const typeLabelName = computed(() => {
              return `settings.log-streaming.${props.destination.__type}`;
            });
            function onDestinationWasSaved() {
              assert(props.destination.id);
              if (logStreamingStore.getDestination(props.destination.id)) nodeParameters.value = Object.assign(deepCopy(defaultMessageEventBusDestinationOptions), props.destination);
            }
            async function onClick(event) {
              const target = event.target;
              if (cardActions$1.value === target || cardActions$1.value?.contains(target) || target?.contains(cardActions$1.value)) return;
              emit("edit", props.destination.id);
            }
            function onEnabledSwitched(state) {
              const boolValue = typeof state === "boolean" ? state : Boolean(state);
              nodeParameters.value.enabled = boolValue;
              saveDestination();
            }
            async function saveDestination() {
              await logStreamingStore.saveDestination(nodeParameters.value);
            }
            async function onAction(action) {
              if (action === DESTINATION_LIST_ITEM_ACTIONS.OPEN) emit("edit", props.destination.id);else if (action === DESTINATION_LIST_ITEM_ACTIONS.DELETE) {
                if ((await confirm(i18n.baseText("settings.log-streaming.destinationDelete.message", {
                  interpolate: {
                    destinationName: props.destination.label ?? ""
                  }
                }), i18n.baseText("settings.log-streaming.destinationDelete.headline"), {
                  type: "warning",
                  confirmButtonText: i18n.baseText("settings.log-streaming.destinationDelete.confirmButtonText"),
                  cancelButtonText: i18n.baseText("settings.log-streaming.destinationDelete.cancelButtonText")
                })) !== "confirm") return;
                emit("remove", props.destination.id);
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.cardLink),
                "data-test-id": "destination-card",
                onClick
              }, {
                header: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  bold: "",
                  class: normalizeClass(_ctx.$style.cardHeading)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.destination.label), 1)]),
                  _: 1
                }, 8, ["class"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardDescription)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "small"
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(typeLabelName.value)), 1)]),
                  _: 1
                })], 2)])]),
                append: withCtx(() => [createBaseVNode("div", {
                  ref_key: "cardActions",
                  ref: cardActions$1,
                  class: normalizeClass(_ctx.$style.cardActions)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.activeStatusText),
                  "data-test-id": "destination-activator-status"
                }, [nodeParameters.value.enabled ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  color: "success",
                  size: "small",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-base",
                  size: "small",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)]),
                  _: 1
                }))], 2), createVNode(unref(ElSwitch), {
                  class: "mr-s",
                  disabled: _ctx.readonly,
                  "model-value": nodeParameters.value.enabled,
                  title: nodeParameters.value.enabled ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
                  "active-color": "#13ce66",
                  "inactive-color": "#8899AA",
                  "data-test-id": "workflow-activate-switch",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => onEnabledSwitched($event))
                }, null, 8, ["disabled", "model-value", "title"]), createVNode(unref(N8nActionToggle_default), {
                  actions: actions.value,
                  theme: "dark",
                  onAction
                }, null, 8, ["actions"])], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/integrations/logStreaming.ee/components/EventDestinationCard.vue?vue&type=style&index=0&lang.module.scss
        cardLink = "_cardLink_12va4_123";
        activeStatusText = "_activeStatusText_12va4_133";
        cardHeading = "_cardHeading_12va4_141";
        cardDescription = "_cardDescription_12va4_147";
        cardActions = "_cardActions_12va4_154";
        EventDestinationCard_vue_vue_type_style_index_0_lang_module_default = {
          cardLink,
          activeStatusText,
          cardHeading,
          cardDescription,
          cardActions
        }; //#endregion
        //#region src/features/integrations/logStreaming.ee/components/EventDestinationCard.vue
        cssModules$1 = {
          "$style": EventDestinationCard_vue_vue_type_style_index_0_lang_module_default
        };
        EventDestinationCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(EventDestinationCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/integrations/logStreaming.ee/views/SettingsLogStreamingView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "mb-2xl"
        };
        _hoisted_2 = {
          class: "ml-m"
        };
        _hoisted_3 = {
          class: "mb-l"
        };
        _hoisted_4 = {
          class: "mt-m text-right"
        };
        _hoisted_5 = {
          key: 1,
          "data-test-id": "action-box-licensed"
        };
        _hoisted_6 = {
          key: 0,
          class: "mb-l"
        };
        _hoisted_7 = {
          "data-test-id": "action-box-unlicensed"
        };
        SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
              for (const [key, value] of Object.entries(logStreamingStore.items)) sortedKeys.push({
                key,
                label: value.destination?.label ?? "Destination"
              });
              return sortedKeys.sort((a, b) => a.label.localeCompare(b.label));
            });
            const isLicensed = computed(() => {
              if (disableLicense.value) return false;
              return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.LogStreaming];
            });
            const canManageLogStreaming = computed(() => {
              return hasPermission(["rbac"], {
                rbac: {
                  scope: "logStreaming:manage"
                }
              });
            });
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.log-streaming.heading"));
              if (!isLicensed.value) return;
              await credentialsStore.fetchCredentialTypes(false);
              await credentialsStore.fetchAllCredentials();
              uiStore.nodeViewInitialized = false;
              await getDestinationDataFromBackend();
              logStreamingStore.$onAction(({
                name,
                after
              }) => {
                if (name === "removeDestination" || name === "updateDestination") after(async () => {
                  forceUpdateInstance();
                });
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
              getCurrentInstance()?.proxy?.$forceUpdate();
            }
            function onBusClosing() {
              workflowState.removeAllNodes({
                setStateDirty: false,
                removePinData: true
              });
              uiStore.stateIsDirty = false;
            }
            async function getDestinationDataFromBackend() {
              logStreamingStore.clearEventNames();
              logStreamingStore.clearDestinations();
              allDestinations.value = [];
              const eventNamesData = await logStreamingStore.fetchEventNames();
              if (eventNamesData) for (const eventName of eventNamesData) logStreamingStore.addEventName(eventName);
              const destinationData = await logStreamingStore.fetchDestinations();
              if (destinationData) for (const destination of destinationData) {
                logStreamingStore.addDestination(destination);
                allDestinations.value.push(destination);
              }
              forceUpdateInstance();
            }
            function goToUpgrade() {
              pageRedirectHelper.goToUpgrade("log-streaming", "upgrade-log-streaming");
            }
            function storeHasItems() {
              return logStreamingStore.items && Object.keys(logStreamingStore.items).length > 0;
            }
            async function addDestination() {
              const newDestination = deepCopy(defaultMessageEventBusDestinationOptions);
              newDestination.id = v4_default();
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
              if (foundNode) workflowsStore.removeNode(foundNode);
            }
            async function onEdit(destinationId) {
              if (!destinationId) return;
              const editDestination = logStreamingStore.getDestination(destinationId);
              if (editDestination) uiStore.openModalWithData({
                name: LOG_STREAM_MODAL_KEY,
                data: {
                  destination: editDestination,
                  isNew: false,
                  eventBus
                }
              });
            }
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.heading`)), 1)]),
                _: 1
              }), unref(environment) !== "production" ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createBaseVNode("span", _hoisted_2, "Disable License (" + toDisplayString(unref(environment)) + ")\xA0", 1), createVNode(unref(ElSwitch), {
                modelValue: disableLicense.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => disableLicense.value = $event),
                size: "large",
                "data-test-id": "disable-license-toggle"
              }, null, 8, ["modelValue"])], 64)) : createCommentVNode("", true)])], 2), isLicensed.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nInfoTip_default), {
                theme: "info",
                type: "note"
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]])]),
                _: 1
              })]), storeHasItems() ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedItemKeysByLabel.value, item => {
                return openBlock(), createBlock(unref(ElRow), {
                  key: item.key,
                  gutter: 10,
                  class: normalizeClass(_ctx.$style.destinationItem)
                }, {
                  default: withCtx(() => [unref(logStreamingStore).items[item.key]?.destination ? (openBlock(), createBlock(unref(ElCol), {
                    key: 0
                  }, {
                    default: withCtx(() => [createVNode(EventDestinationCard_default, {
                      destination: unref(logStreamingStore).items[item.key]?.destination,
                      "event-bus": unref(eventBus),
                      readonly: !canManageLogStreaming.value,
                      onRemove: $event => onRemove(unref(logStreamingStore).items[item.key]?.destination?.id),
                      onEdit: $event => onEdit(unref(logStreamingStore).items[item.key]?.destination?.id)
                    }, null, 8, ["destination", "event-bus", "readonly", "onRemove", "onEdit"])]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)]),
                  _: 2
                }, 1032, ["class"]);
              }), 128)), createBaseVNode("div", _hoisted_4, [canManageLogStreaming.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                size: "large",
                onClick: addDestination
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.add`)), 1)]),
                _: 1
              })) : createCommentVNode("", true)])], 64)) : (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nActionBox_default), {
                "button-text": unref(i18n).baseText(`settings.log-streaming.add`),
                "onClick:button": addDestination
              }, {
                heading: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(`settings.log-streaming.addFirstTitle`)]])]),
                _: 1
              }, 8, ["button-text"])]))], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [unref(i18n).baseText("settings.log-streaming.infoText") ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(N8nInfoTip_default), {
                theme: "info",
                type: "note"
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]])]),
                _: 1
              })])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nActionBox_default), {
                description: unref(i18n).baseText("settings.log-streaming.actionBox.description"),
                "button-text": unref(i18n).baseText("settings.log-streaming.actionBox.button"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.actionBox.title")]])]),
                _: 1
              }, 8, ["description", "button-text"])])], 64))]);
            };
          }
        }); //#endregion
        //#region src/features/integrations/logStreaming.ee/views/SettingsLogStreamingView.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_x2fvs_123";
        destinationItem = "_destinationItem_x2fvs_133";
        SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default = {
          header,
          destinationItem
        }; //#endregion
        //#region src/features/integrations/logStreaming.ee/views/SettingsLogStreamingView.vue
        cssModules = {
          "$style": SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsLogStreamingView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();