;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./mcp.constants-legacy-CZfk8DW2.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, withCtx, openBlock, createTextVNode, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nNotice_default, N8nText_default, N8nButton_default, N8nLogo_default, N8nHeading_default, N8nIcon_default, __plugin_vue_export_helper_default, STORES, useRootStore, useDocumentTitle, makeRestApiRequest, defineStore, useToast, MCP_DOCS_PAGE_URL, __vite_style__, useConsentStore, OAuthConsentView_vue_vue_type_script_setup_true_lang_default, overlay, header, logo, n8n, content, success, footer, OAuthConsentView_vue_vue_type_style_index_0_lang_module_default, cssModules, OAuthConsentView_default;
    //#region ../@n8n/rest-api-client/dist/api/consent.js
    async function getConsentDetails(context) {
      return await makeRestApiRequest(context, "GET", "/consent/details");
    }
    async function approveConsent(context, approved) {
      return await makeRestApiRequest(context, "POST", "/consent/approve", {
        approved
      });
    }

    //#endregion
    //#region src/app/stores/consent.store.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNotice_default = _srcLegacy007Js.E;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nLogo_default = _srcLegacy007Js.M;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        STORES = _useTelemetryLegacy00FJs.Cc;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        makeRestApiRequest = _useTelemetryLegacy00FJs.fc;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_mcpConstantsLegacy037Js) {
        MCP_DOCS_PAGE_URL = _mcpConstantsLegacy037Js.n;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._overlay_1l93y_123 {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(71, 69, 84, 0.75);\n  z-index: 1000;\n}\n._consent-dialog_1l93y_136 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 500px;\n  max-width: 70%;\n  padding: var(--spacing--lg);\n  background-color: var(--color--background--light-3);\n  border: var(--border);\n  border-radius: var(--radius--lg);\n}\n._header_1l93y_149 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n}\n._logo_1l93y_155 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--spacing--2xl);\n  height: var(--spacing--2xl);\n  border: var(--border);\n  border-radius: var(--radius);\n}\n._logo_1l93y_155._n8n_1l93y_164 > div {\n  position: relative;\n  bottom: var(--spacing--5xs);\n}\n._content_1l93y_169 {\n  padding: var(--spacing--lg);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n}\n._success_1l93y_176 {\n  padding: var(--spacing--xl);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  text-align: center;\n}\n._text-content_1l93y_185 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n}\n._permission-list_1l93y_191 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n  padding-left: var(--spacing--lg);\n  list-style-type: disc;\n}\n._permission-list_1l93y_191 li {\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}\n._docs-link_1l93y_203 {\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}\n._footer_1l93y_208 {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--spacing--sm);\n}\n._footer_1l93y_208 .notice {\n  margin: 0;\n}\n._footer_1l93y_208 ._button-group_1l93y_218 {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        useConsentStore = defineStore(STORES.CONSENT, () => {
          const consentDetails = ref(null);
          const isLoading = ref(false);
          const error = ref(null);
          const rootStore = useRootStore();
          const fetchConsentDetails = async () => {
            isLoading.value = true;
            error.value = null;
            try {
              consentDetails.value = await getConsentDetails(rootStore.restApiContext);
              return consentDetails.value;
            } catch (err) {
              error.value = err instanceof Error ? err.message : "Failed to load consent details";
              throw err;
            } finally {
              isLoading.value = false;
            }
          };
          const approveConsent$1 = async approved => {
            isLoading.value = true;
            error.value = null;
            try {
              return await approveConsent(rootStore.restApiContext, approved);
            } catch (err) {
              error.value = err instanceof Error ? err.message : "Failed to process consent";
              throw err;
            } finally {
              isLoading.value = false;
            }
          };
          const resetState = () => {
            consentDetails.value = null;
            isLoading.value = false;
            error.value = null;
          };
          return {
            fetchConsentDetails,
            approveConsent: approveConsent$1,
            resetState,
            consentDetails,
            isLoading,
            error
          };
        }); //#endregion
        //#region src/app/views/OAuthConsentView.vue?vue&type=script&setup=true&lang.ts
        OAuthConsentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "OAuthConsentView",
          setup(__props) {
            const ANTHROPIC_CLIENTS = ["claude", "mcp inspector"];
            const LOVABLE_CLIENTS = ["lovable"];
            const consentStore = useConsentStore();
            const i18n = useI18n();
            const documentTitle = useDocumentTitle();
            const toast = useToast();
            const waitingForRedirect = ref(false);
            const error = computed(() => consentStore.error);
            const loading = computed(() => consentStore.isLoading);
            const clentDetails = computed(() => consentStore.consentDetails);
            const clientIcon = computed(() => {
              const clientName = clentDetails.value?.clientName?.toLowerCase() ?? "";
              if (ANTHROPIC_CLIENTS.some(name => clientName.includes(name))) return "anthropic";else if (LOVABLE_CLIENTS.some(name => clientName.includes(name))) return "lovable";else return "mcp";
            });
            const handleAllow = async () => {
              try {
                const response = await consentStore.approveConsent(true);
                waitingForRedirect.value = true;
                window.location.href = response.redirectUrl;
              } catch (err) {
                toast.showError(err, i18n.baseText("oauth.consentView.error.allow"));
              }
            };
            const handleDeny = async () => {
              try {
                const response = await consentStore.approveConsent(false);
                window.location.href = response.redirectUrl;
              } catch (err) {
                toast.showError(err, i18n.baseText("oauth.consentView.error.deny"));
              }
            };
            onMounted(async () => {
              documentTitle.set(i18n.baseText("oauth.consentView.title"));
              try {
                await consentStore.fetchConsentDetails();
              } catch (err) {
                toast.showError(err, i18n.baseText("oauth.consentView.error.fetchDetails"));
              }
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.overlay)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["consent-dialog"])
              }, [createBaseVNode("header", {
                class: normalizeClass(_ctx.$style.header)
              }, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.logo, _ctx.$style.n8n])
              }, [createVNode(unref(N8nLogo_default), {
                size: "small",
                collapsed: true,
                "release-channel": "stable"
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.arrow)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "arrow-right",
                size: "large",
                color: "text-light"
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.logo)
              }, [createVNode(unref(N8nIcon_default), {
                icon: clientIcon.value,
                size: "xlarge",
                color: "text-dark"
              }, null, 8, ["icon"])], 2)], 2), waitingForRedirect.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.success),
                "data-test-id": "consent-success-screen"
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "large",
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.success.title")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.success.description")), 1)]),
                _: 1
              })], 2)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.content),
                "data-test-id": "consent-content"
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "large",
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.heading", {
                  interpolate: {
                    clientName: clentDetails.value?.clientName ?? ""
                  }
                })), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["text-content"])
              }, [createVNode(unref(N8nText_default), {
                color: "text-base",
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.description", {
                  interpolate: {
                    clientName: clentDetails.value?.clientName ?? ""
                  }
                })), 1)]),
                _: 1
              }), createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style["permission-list"])
              }, [createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.listWorkflows")), 1), createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.workflowDetails")), 1)], 2), createBaseVNode("p", {
                class: normalizeClass(_ctx.$style["docs-link"])
              }, [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("oauth.consentView.readMore", {
                interpolate: {
                  docsUrl: unref(MCP_DOCS_PAGE_URL)
                }
              })]])], 2)], 2)], 2)), !waitingForRedirect.value ? (openBlock(), createElementBlock("footer", {
                key: 2,
                class: normalizeClass(_ctx.$style.footer)
              }, [error.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 0,
                theme: "danger",
                "data-test-id": "consent-error-notice",
                content: error.value
              }, null, 8, ["content"])) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["button-group"])
              }, [createVNode(unref(N8nButton_default), {
                type: "tertiary",
                "data-test-id": "consent-deny-button",
                size: "large",
                loading: loading.value,
                disabled: loading.value || error.value !== null,
                onClick: handleDeny
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.deny")), 1)]),
                _: 1
              }, 8, ["loading", "disabled"]), createVNode(unref(N8nButton_default), {
                type: "primary",
                "data-test-id": "consent-allow-button",
                size: "large",
                loading: loading.value,
                disabled: loading.value || error.value !== null,
                onClick: handleAllow
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.allow")), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])], 2)], 2)) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/views/OAuthConsentView.vue?vue&type=style&index=0&lang.module.scss
        overlay = "_overlay_1l93y_123";
        header = "_header_1l93y_149";
        logo = "_logo_1l93y_155";
        n8n = "_n8n_1l93y_164";
        content = "_content_1l93y_169";
        success = "_success_1l93y_176";
        footer = "_footer_1l93y_208";
        OAuthConsentView_vue_vue_type_style_index_0_lang_module_default = {
          overlay,
          "consent-dialog": "_consent-dialog_1l93y_136",
          header,
          logo,
          n8n,
          content,
          success,
          "text-content": "_text-content_1l93y_185",
          "permission-list": "_permission-list_1l93y_191",
          "docs-link": "_docs-link_1l93y_203",
          footer,
          "button-group": "_button-group_1l93y_218"
        }; //#endregion
        //#region src/app/views/OAuthConsentView.vue
        cssModules = {
          "$style": OAuthConsentView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", OAuthConsentView_default = /* @__PURE__ */__plugin_vue_export_helper_default(OAuthConsentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();