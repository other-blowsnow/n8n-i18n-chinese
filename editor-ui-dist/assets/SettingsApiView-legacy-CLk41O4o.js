;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./overlay-legacy-B0b_K0kO.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BdVFquy4.js", "./col-legacy-DwJqyIL4.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./cloudPlan.store-legacy-DZDCwxzb.js", "./versions.store-legacy-Bif3-3_C.js", "./usePageRedirectionHelper-legacy-Jjfhks9b.js", "./apiKeys.store-legacy-CJyY-OY_.js"], function (_export, _context) {
    "use strict";

    var toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, Fragment, withCtx, openBlock, renderList, createTextVNode, normalizeClass, createBaseVNode, I18nT, useI18n, N8nActionBox_default, N8nButton_default, N8nText_default, N8nCard_default, N8nActionToggle_default, N8nLink_default, N8nHeading_default, __plugin_vue_export_helper_default, useMessage, ElRow, ElCol, useUIStore, useDocumentTitle, useSettingsStore, useTelemetry, API_KEY_CREATE_OR_EDIT_MODAL_KEY, useToast, DateTime, DOCS_DOMAIN, MODAL_CONFIRM, storeToRefs, useRootStore, useCloudPlanStore, usePageRedirectionHelper, useApiKeysStore, __vite_style__, ApiKeyCard_vue_vue_type_script_setup_true_lang_default, cardLink, cardHeading, cardDescription, cardActions, cardApiKey, ApiKeyCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ApiKeyCard_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, SettingsApiView_vue_vue_type_script_setup_true_lang_default, header, card, destinationItem, topHint, BottomHint, apiKeysContainer, SettingsApiView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsApiView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionBox_default = _srcLegacy007Js.Ct;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nCard_default = _srcLegacy007Js.Z;
        N8nActionToggle_default = _srcLegacy007Js.et;
        N8nLink_default = _srcLegacy007Js.ut;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_colLegacy00BJs) {
        ElRow = _colLegacy00BJs.n;
        ElCol = _colLegacy00BJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useDocumentTitle = _useTelemetryLegacy00HJs.Tn;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        API_KEY_CREATE_OR_EDIT_MODAL_KEY = _useTelemetryLegacy00HJs.zi;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        DateTime = _constantsLegacy00TJs.Wa;
        DOCS_DOMAIN = _constantsLegacy00TJs.g;
        MODAL_CONFIRM = _constantsLegacy00TJs.ns;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        storeToRefs = _baseOrderByLegacy00ZJs.A;
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_cloudPlanStoreLegacy01dJs) {
        useCloudPlanStore = _cloudPlanStoreLegacy01dJs.t;
      }, function (_versionsStoreLegacy01LJs) {}, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_apiKeysStoreLegacy01ZJs) {
        useApiKeysStore = _apiKeysStoreLegacy01ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._cardLink_16gkp_123 {\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n  padding: 0 0 0 var(--spacing--sm);\n  align-items: stretch;\n}\n._cardLink_16gkp_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._cardHeading_16gkp_133 {\n  font-size: var(--font-size--sm);\n  word-break: word-break;\n  padding: var(--spacing--sm) 0 0 var(--spacing--sm);\n  width: 200px;\n}\n._cardDescription_16gkp_140 {\n  min-height: 19px;\n  display: flex;\n  align-items: center;\n  padding: 0 0 var(--spacing--sm) var(--spacing--sm);\n}\n._cardActions_16gkp_147 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 0 var(--spacing--sm) 0 0;\n  cursor: default;\n}\n._cardApiKey_16gkp_156 {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_idchl_123 {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  margin-bottom: var(--spacing--xl);\n}\n._header_idchl_123 *:first-child {\n  flex-grow: 1;\n}\n._card_idchl_133 {\n  position: relative;\n}\n._destinationItem_idchl_137 {\n  margin-bottom: var(--spacing--2xs);\n}\n._delete_idchl_141 {\n  position: absolute;\n  display: inline-block;\n  top: var(--spacing--sm);\n  right: var(--spacing--sm);\n}\n._topHint_idchl_148 {\n  margin-top: none;\n  margin-bottom: var(--spacing--sm);\n  color: var(--color--text--tint-1);\n}\n._topHint_idchl_148 span {\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--lg);\n  font-weight: var(--font-weight--regular);\n}\n._BottomHint_idchl_159 {\n  margin-bottom: var(--spacing--sm);\n  margin-top: var(--spacing--sm);\n}\n._apiKeysContainer_idchl_164 {\n  max-height: 45vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/apiKeys/components/ApiKeyCard.vue?vue&type=script&setup=true&lang.ts
        ApiKeyCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ApiKeyCard",
          props: {
            apiKey: {}
          },
          emits: ["edit", "delete"],
          setup(__props, {
            emit: __emit
          }) {
            const API_KEY_ITEM_ACTIONS = {
              EDIT: "edit",
              DELETE: "delete"
            };
            const ACTION_LIST = [{
              label: "Edit",
              value: API_KEY_ITEM_ACTIONS.EDIT
            }, {
              label: "Delete",
              value: API_KEY_ITEM_ACTIONS.DELETE
            }];
            const i18n = useI18n();
            const cardActions$1 = ref(null);
            const props = __props;
            const emit = __emit;
            async function onAction(action) {
              if (action === API_KEY_ITEM_ACTIONS.EDIT) emit("edit", props.apiKey.id);else if (action === API_KEY_ITEM_ACTIONS.DELETE) emit("delete", props.apiKey.id);
            }
            const hasApiKeyExpired = apiKey => {
              if (!apiKey.expiresAt) return false;
              return apiKey.expiresAt <= Date.now() / 1e3;
            };
            const getExpirationTime = apiKey => {
              if (!apiKey.expiresAt) return i18n.baseText("settings.api.neverExpires");
              if (hasApiKeyExpired(apiKey)) return i18n.baseText("settings.api.expired");
              const time = DateTime.fromSeconds(apiKey.expiresAt).toFormat("ccc, MMM d yyyy");
              return i18n.baseText("settings.api.expirationTime", {
                interpolate: {
                  time
                }
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.cardLink),
                "data-test-id": "api-key-card",
                onClick: _cache[0] || (_cache[0] = $event => onAction("edit"))
              }, {
                header: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
                  tag: "h2",
                  bold: "",
                  class: normalizeClass(_ctx.$style.cardHeading)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.apiKey.label), 1)]),
                  _: 1
                }, 8, ["class"]), createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.cardDescription])
                }, [createVNode(unref(N8nText_default), {
                  color: !hasApiKeyExpired(_ctx.apiKey) ? "text-light" : "warning",
                  size: "small"
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, toDisplayString(getExpirationTime(_ctx.apiKey)), 1)]),
                  _: 1
                }, 8, ["color"])], 2)]), _ctx.apiKey.apiKey.includes("*") ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.cardApiKey)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.apiKey.apiKey), 1)]),
                  _: 1
                })], 2)) : createCommentVNode("", true)]),
                append: withCtx(() => [createBaseVNode("div", {
                  ref_key: "cardActions",
                  ref: cardActions$1,
                  class: normalizeClass(_ctx.$style.cardActions)
                }, [createVNode(unref(N8nActionToggle_default), {
                  actions: ACTION_LIST,
                  theme: "dark",
                  onAction
                })], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/apiKeys/components/ApiKeyCard.vue?vue&type=style&index=0&lang.module.scss
        cardLink = "_cardLink_16gkp_123";
        cardHeading = "_cardHeading_16gkp_133";
        cardDescription = "_cardDescription_16gkp_140";
        cardActions = "_cardActions_16gkp_147";
        cardApiKey = "_cardApiKey_16gkp_156";
        ApiKeyCard_vue_vue_type_style_index_0_lang_module_default = {
          cardLink,
          cardHeading,
          cardDescription,
          cardActions,
          cardApiKey
        }; //#endregion
        //#region src/features/settings/apiKeys/components/ApiKeyCard.vue
        cssModules$1 = {
          "$style": ApiKeyCard_vue_vue_type_style_index_0_lang_module_default
        };
        ApiKeyCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(ApiKeyCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          style: {
            fontSize: "var(--font-size--sm)",
            color: "var(--color--text--tint-1)"
          }
        };
        _hoisted_2 = ["textContent"];
        _hoisted_3 = ["textContent"];
        _hoisted_4 = {
          class: "mt-m text-right"
        };
        SettingsApiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsApiView",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const uiStore = useUIStore();
            const cloudPlanStore = useCloudPlanStore();
            const {
              showError,
              showMessage
            } = useToast();
            const {
              confirm
            } = useMessage();
            const documentTitle = useDocumentTitle();
            const i18n = useI18n();
            const {
              goToUpgrade
            } = usePageRedirectionHelper();
            const telemetry = useTelemetry();
            const loading = ref(false);
            const apiKeysStore = useApiKeysStore();
            const {
              getAndCacheApiKeys,
              deleteApiKey,
              getApiKeyAvailableScopes
            } = apiKeysStore;
            const {
              apiKeysSortByCreationDate
            } = storeToRefs(apiKeysStore);
            const {
              isSwaggerUIEnabled,
              publicApiPath,
              publicApiLatestVersion
            } = settingsStore;
            const {
              baseUrl
            } = useRootStore();
            const {
              isPublicApiEnabled
            } = settingsStore;
            const apiDocsURL = ref("");
            const onCreateApiKey = async () => {
              telemetry.track("User clicked create API key button");
              uiStore.openModalWithData({
                name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
                data: {
                  mode: "new"
                }
              });
            };
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.api"));
              apiDocsURL.value = isSwaggerUIEnabled ? `${baseUrl}${publicApiPath}/v${publicApiLatestVersion}/docs` : `https://${DOCS_DOMAIN}/api/api-reference/`;
              if (!isPublicApiEnabled) return;
              await getApiKeysAndScopes();
            });
            function onUpgrade() {
              goToUpgrade("settings-n8n-api", "upgrade-api", "redirect");
            }
            async function getApiKeysAndScopes() {
              try {
                loading.value = true;
                await Promise.all([getAndCacheApiKeys(), getApiKeyAvailableScopes()]);
              } catch (error) {
                showError(error, i18n.baseText("settings.api.view.error"));
              } finally {
                loading.value = false;
              }
            }
            async function onDelete(id) {
              if ((await confirm(i18n.baseText("settings.api.delete.description"), i18n.baseText("settings.api.delete.title"), {
                confirmButtonText: i18n.baseText("settings.api.delete.button"),
                cancelButtonText: i18n.baseText("generic.cancel")
              })) === "confirm") try {
                await deleteApiKey(id);
                showMessage({
                  title: i18n.baseText("settings.api.delete.toast"),
                  type: "success"
                });
              } catch (e) {
                showError(e, i18n.baseText("settings.api.delete.error"));
              } finally {
                telemetry.track("User clicked delete API key button");
              }
            }
            function onEdit(id) {
              uiStore.openModalWithData({
                name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
                data: {
                  mode: "edit",
                  activeId: id
                }
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api")) + " ", 1), createBaseVNode("span", _hoisted_1, " (" + toDisplayString(unref(i18n).baseText("generic.beta")) + ") ", 1)]),
                _: 1
              })], 2), unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(_ctx.$style.topHint)
              }, [createVNode(unref(N8nText_default), null, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.api.view.info",
                  tag: "span",
                  scope: "global"
                }, {
                  apiAction: withCtx(() => [createBaseVNode("a", {
                    "data-test-id": "api-docs-link",
                    href: "https://docs.n8n.io/api",
                    target: "_blank",
                    textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.api"))
                  }, null, 8, _hoisted_2)]),
                  webhookAction: withCtx(() => [createBaseVNode("a", {
                    "data-test-id": "webhook-docs-link",
                    href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
                    target: "_blank",
                    textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.webhook"))
                  }, null, 8, _hoisted_3)]),
                  _: 1
                })]),
                _: 1
              })], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.apiKeysContainer)
              }, [unref(apiKeysSortByCreationDate).length ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(unref(apiKeysSortByCreationDate), (apiKey, index) => {
                return openBlock(), createBlock(unref(ElRow), {
                  key: apiKey.id,
                  gutter: 10,
                  class: normalizeClass([{
                    [_ctx.$style.destinationItem]: index !== unref(apiKeysSortByCreationDate).length - 1
                  }])
                }, {
                  default: withCtx(() => [createVNode(unref(ElCol), null, {
                    default: withCtx(() => [createVNode(ApiKeyCard_default, {
                      "api-key": apiKey,
                      onDelete,
                      onEdit
                    }, null, 8, ["api-key"])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1032, ["class"]);
              }), 128)) : createCommentVNode("", true)], 2), unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.BottomHint)
              }, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.api.view.${unref(settingsStore).isSwaggerUIEnabled ? "tryapi" : "more-details"}`)), 1)]),
                _: 1
              }), _cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ")), unref(isSwaggerUIEnabled) ? (openBlock(), createBlock(unref(N8nLink_default), {
                key: 0,
                "data-test-id": "api-playground-link",
                to: apiDocsURL.value,
                "new-window": true,
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.view.apiPlayground")), 1)]),
                _: 1
              }, 8, ["to"])) : (openBlock(), createBlock(unref(N8nLink_default), {
                key: 1,
                "data-test-id": "api-endpoint-docs-link",
                to: apiDocsURL.value,
                "new-window": true,
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.api.view.external-docs`)), 1)]),
                _: 1
              }, 8, ["to"]))], 2)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_4, [unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                size: "large",
                onClick: onCreateApiKey
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.button")), 1)]),
                _: 1
              })) : createCommentVNode("", true)]), !unref(isPublicApiEnabled) && unref(cloudPlanStore).userIsTrialing ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 2,
                "data-test-id": "public-api-upgrade-cta",
                heading: unref(i18n).baseText("settings.api.trial.upgradePlan.title"),
                description: unref(i18n).baseText("settings.api.trial.upgradePlan.description"),
                "button-text": unref(i18n).baseText("settings.api.trial.upgradePlan.cta"),
                "onClick:button": onUpgrade
              }, null, 8, ["heading", "description", "button-text"])) : createCommentVNode("", true), unref(isPublicApiEnabled) && !unref(apiKeysSortByCreationDate).length ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 3,
                "button-text": unref(i18n).baseText(loading.value ? "settings.api.create.button.loading" : "settings.api.create.button"),
                description: unref(i18n).baseText("settings.api.create.description"),
                "onClick:button": onCreateApiKey
              }, null, 8, ["button-text", "description"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_idchl_123";
        card = "_card_idchl_133";
        destinationItem = "_destinationItem_idchl_137";
        topHint = "_topHint_idchl_148";
        BottomHint = "_BottomHint_idchl_159";
        apiKeysContainer = "_apiKeysContainer_idchl_164";
        SettingsApiView_vue_vue_type_style_index_0_lang_module_default = {
          header,
          card,
          destinationItem,
          "delete": "_delete_idchl_141",
          topHint,
          BottomHint,
          apiKeysContainer
        }; //#endregion
        //#region src/features/settings/apiKeys/views/SettingsApiView.vue
        cssModules = {
          "$style": SettingsApiView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsApiView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsApiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();