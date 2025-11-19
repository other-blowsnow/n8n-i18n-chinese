;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js", "./ExternalSecretsProviderConnectionSwitch.ee-legacy-Cdo4mm7Z.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, createVNode, defineComponent, toDisplayString, createBlock, toRef, onMounted, Fragment, normalizeClass, withCtx, openBlock, renderList, createTextVNode, createBaseVNode, I18nT, useI18n, N8nActionToggle_default, N8nActionBox_default, N8nCallout_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nCard_default, N8nBadge_default, N8nIcon_default, __plugin_vue_export_helper_default, useUIStore, useDocumentTitle, isDateObject, useToast, DateTime, EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, usePageRedirectionHelper, useExternalSecretsStore, ExternalSecretsProviderImage_ee_default, useExternalSecretsProvider, ExternalSecretsProviderConnectionSwitch_ee_default, __vite_style__, ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default, card, cardImage, cardBody, cardContent, cardActions, deprecationWarning, warningTriangle, ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default, cssModules, ExternalSecretsProviderCard_ee_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, SettingsExternalSecrets_vue_vue_type_script_setup_true_lang_default, SettingsExternalSecrets_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toRef = _vueRuntimeEsmBundlerLegacy003Js.Vt;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nCard_default = _srcLegacy007Js.X;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        isDateObject = _useTelemetryLegacy00FJs.ar;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        DateTime = _constantsLegacy00NJs.$i;
        EXTERNAL_SECRETS_PROVIDER_MODAL_KEY = _constantsLegacy00NJs.To;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_externalSecretsEeStoreLegacy01ZJs) {
        useExternalSecretsStore = _externalSecretsEeStoreLegacy01ZJs.t;
      }, function (_ExternalSecretsProviderConnectionSwitchEeLegacy02XJs) {
        ExternalSecretsProviderImage_ee_default = _ExternalSecretsProviderConnectionSwitchEeLegacy02XJs.n;
        useExternalSecretsProvider = _ExternalSecretsProviderConnectionSwitchEeLegacy02XJs.r;
        ExternalSecretsProviderConnectionSwitch_ee_default = _ExternalSecretsProviderConnectionSwitchEeLegacy02XJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._card_er899_123 {\n  position: relative;\n  margin-bottom: var(--spacing--2xs);\n}\n._cardImage_er899_128 {\n  width: 28px;\n  height: 28px;\n}\n._cardBody_er899_133 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n._cardContent_er899_139 {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin-left: var(--spacing--sm);\n}\n._cardActions_er899_146 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: var(--spacing--sm);\n}\n._deprecationWarning_er899_153 {\n  display: flex;\n}\n._warningTriangle_er899_157 {\n  color: var(--color--warning);\n  margin-right: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderCard.ee.vue?vue&type=script&setup=true&lang.ts
        ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExternalSecretsProviderCard.ee",
          props: {
            provider: {}
          },
          setup(__props) {
            const props = __props;
            const externalSecretsStore = useExternalSecretsStore();
            const i18n = useI18n();
            const uiStore = useUIStore();
            const toast = useToast();
            const provider = toRef(props, "provider");
            const providerData = computed(() => provider.value.data ?? {});
            const {
              connectionState,
              testConnection,
              setConnectionState
            } = useExternalSecretsProvider(provider, providerData);
            const actionDropdownOptions = computed(() => [{
              value: "setup",
              label: i18n.baseText("settings.externalSecrets.card.actionDropdown.setup")
            }, ...(props.provider.connected ? [{
              value: "reload",
              label: i18n.baseText("settings.externalSecrets.card.actionDropdown.reload")
            }] : [])]);
            const canConnect = computed(() => {
              return props.provider.connected || Object.keys(providerData.value).length > 0;
            });
            const formattedDate = computed(() => {
              return DateTime.fromISO(isDateObject(provider.value.connectedAt) ? provider.value.connectedAt.toISOString() : provider.value.connectedAt || (/* @__PURE__ */new Date()).toISOString()).toFormat("dd LLL yyyy");
            });
            onMounted(() => {
              setConnectionState(props.provider.state);
            });
            async function onBeforeConnectionUpdate() {
              if (props.provider.connected) return true;
              await externalSecretsStore.getProvider(props.provider.name);
              await nextTick();
              return (await testConnection()) !== "error";
            }
            function openExternalSecretProvider() {
              uiStore.openModalWithData({
                name: EXTERNAL_SECRETS_PROVIDER_MODAL_KEY,
                data: {
                  name: props.provider.name
                }
              });
            }
            async function reloadProvider() {
              try {
                await externalSecretsStore.reloadProvider(props.provider.name);
                toast.showMessage({
                  title: i18n.baseText("settings.externalSecrets.card.reload.success.title"),
                  message: i18n.baseText("settings.externalSecrets.card.reload.success.description", {
                    interpolate: {
                      provider: props.provider.displayName
                    }
                  }),
                  type: "success"
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("error"));
              }
            }
            async function onActionDropdownClick(id) {
              switch (id) {
                case "setup":
                  openExternalSecretProvider();
                  break;
                case "reload":
                  await reloadProvider();
                  break;
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.card)
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardBody)
                }, [createVNode(ExternalSecretsProviderImage_ee_default, {
                  class: normalizeClass(_ctx.$style.cardImage),
                  provider: provider.value
                }, null, 8, ["class", "provider"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardContent)
                }, [createVNode(unref(N8nText_default), {
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(provider.value.displayName), 1)]),
                  _: 1
                }), provider.value.connected ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  color: "text-light",
                  size: "small"
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.secretsCount", {
                    interpolate: {
                      count: `${unref(externalSecretsStore).secrets[provider.value.name]?.length}`
                    }
                  })), 1), _cache[1] || (_cache[1] = createTextVNode(" | ")), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.connectedAt", {
                    interpolate: {
                      date: formattedDate.value
                    }
                  })), 1)]),
                  _: 1
                })) : createCommentVNode("", true)], 2), provider.value.name === "infisical" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.deprecationWarning)
                }, [createVNode(unref(N8nIcon_default), {
                  class: normalizeClass(_ctx.$style["warningTriangle"]),
                  icon: "triangle-alert"
                }, null, 8, ["class"]), createVNode(unref(N8nBadge_default), {
                  class: "mr-xs",
                  theme: "tertiary",
                  bold: "",
                  "data-test-id": "card-badge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.deprecated")), 1)]),
                  _: 1
                })], 2)) : createCommentVNode("", true), canConnect.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.cardActions)
                }, [createVNode(ExternalSecretsProviderConnectionSwitch_ee_default, {
                  provider: provider.value,
                  "before-update": onBeforeConnectionUpdate,
                  disabled: unref(connectionState) === "error" && !provider.value.connected
                }, null, 8, ["provider", "disabled"]), createVNode(unref(N8nActionToggle_default), {
                  class: "ml-s",
                  theme: "dark",
                  actions: actionDropdownOptions.value,
                  onAction: onActionDropdownClick
                }, null, 8, ["actions"])], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 2,
                  type: "tertiary",
                  onClick: _cache[0] || (_cache[0] = $event => openExternalSecretProvider())
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.setUp")), 1)]),
                  _: 1
                }))], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderCard.ee.vue?vue&type=style&index=0&lang.module.scss
        card = "_card_er899_123";
        cardImage = "_cardImage_er899_128";
        cardBody = "_cardBody_er899_133";
        cardContent = "_cardContent_er899_139";
        cardActions = "_cardActions_er899_146";
        deprecationWarning = "_deprecationWarning_er899_153";
        warningTriangle = "_warningTriangle_er899_157";
        ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default = {
          card,
          cardImage,
          cardBody,
          cardContent,
          cardActions,
          deprecationWarning,
          warningTriangle
        }; //#endregion
        //#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderCard.ee.vue
        cssModules = {
          "$style": ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default
        };
        ExternalSecretsProviderCard_ee_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]); //#endregion
        //#region src/features/integrations/externalSecrets.ee/views/SettingsExternalSecrets.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "pb-3xl"
        };
        _hoisted_2 = {
          key: 0,
          "data-test-id": "external-secrets-content-licensed"
        };
        _hoisted_3 = ["href"];
        _hoisted_4 = ["href"];
        SettingsExternalSecrets_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsExternalSecrets",
          setup(__props) {
            const i18n = useI18n();
            const externalSecretsStore = useExternalSecretsStore();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const sortedProviders = computed(() => {
              return [...externalSecretsStore.providers].sort((a, b) => {
                return b.name.localeCompare(a.name);
              });
            });
            onMounted(() => {
              documentTitle.set(i18n.baseText("settings.externalSecrets.title"));
              if (!externalSecretsStore.isEnterpriseExternalSecretsEnabled) return;
              try {
                externalSecretsStore.fetchAllSecrets();
                externalSecretsStore.getProviders();
              } catch (error) {
                toast.showError(error, i18n.baseText("error"));
              }
            });
            function goToUpgrade() {
              pageRedirectionHelper.goToUpgrade("external-secrets", "upgrade-external-secrets");
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.title")), 1)]),
                _: 1
              }), unref(externalSecretsStore).isEnterpriseExternalSecretsEnabled ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nCallout_default), {
                theme: "secondary",
                class: "mt-2xl mb-l"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.info")) + " ", 1), createBaseVNode("a", {
                  href: unref(i18n).baseText("settings.externalSecrets.docs"),
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.externalSecrets.info.link")), 9, _hoisted_3)]),
                _: 1
              }), (openBlock(true), createElementBlock(Fragment, null, renderList(sortedProviders.value, provider => {
                return openBlock(), createBlock(ExternalSecretsProviderCard_ee_default, {
                  key: provider.name,
                  provider
                }, null, 8, ["provider"]);
              }), 128))])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 1,
                class: "mt-2xl mb-l",
                "data-test-id": "external-secrets-content-unlicensed",
                "button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
                onClick: goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.title")), 1)]),
                description: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.externalSecrets.actionBox.description",
                  scope: "global"
                }, {
                  link: withCtx(() => [createBaseVNode("a", {
                    href: unref(i18n).baseText("settings.externalSecrets.docs"),
                    target: "_blank"
                  }, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.description.link")), 9, _hoisted_4)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["button-text"]))]);
            };
          }
        }); //#endregion
        //#region src/features/integrations/externalSecrets.ee/views/SettingsExternalSecrets.vue
        _export("default", SettingsExternalSecrets_default = SettingsExternalSecrets_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();