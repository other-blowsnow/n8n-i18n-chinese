;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./useClipboard-legacy-DdtOZJuB.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./CopyInput-legacy-1gKnXvth.js", "./sso.store-legacy-Bk24_rEU.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, withCtx, openBlock, withModifiers, renderList, createTextVNode, createBaseVNode, useI18n, N8nInput_default, N8nActionBox_default, N8nOption_default, N8nButton_default, N8nInfoTip_default, N8nHeading_default, N8nSelect_default, ElSwitch, N8nTooltip_default, N8nRadioButtons_default, __plugin_vue_export_helper_default, useMessage, useRootStore, useDocumentTitle, useTelemetry, useToast, MODAL_CONFIRM, usePageRedirectionHelper, CopyInput_default, useSSOStore, SupportedProtocols, __vite_style__, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, SettingsSso_vue_vue_type_script_setup_true_lang_default, heading, buttons, group, actionBox, footer, SettingsSso_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsSso_default;
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
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nOption_default = _srcLegacy007Js.G;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSelect_default = _srcLegacy007Js.W;
        ElSwitch = _srcLegacy007Js.kt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nRadioButtons_default = _srcLegacy007Js.x;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_useClipboardLegacy01nJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_CopyInputLegacy01NJs) {
        CopyInput_default = _CopyInputLegacy01NJs.t;
      }, function (_ssoStoreLegacy02ZJs) {
        useSSOStore = _ssoStoreLegacy02ZJs.n;
        SupportedProtocols = _ssoStoreLegacy02ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._heading_1ky6a_123 {\n  margin-bottom: var(--spacing--sm);\n}\n._switch_1ky6a_127 span {\n  font-size: var(--font-size--2xs);\n  font-weight: var(--font-weight--bold);\n  color: var(--color--text--tint-1);\n}\n._buttons_1ky6a_133 {\n  display: flex;\n  justify-content: flex-start;\n  padding: var(--spacing--2xl) 0 var(--spacing--2xs);\n}\n._buttons_1ky6a_133 button {\n  margin: 0 var(--spacing--sm) 0 0;\n}\n._group_1ky6a_142 {\n  padding: var(--spacing--xl) 0 0;\n}\n._group_1ky6a_142 > label {\n  display: inline-block;\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--medium);\n  padding: 0 0 var(--spacing--2xs);\n}\n._group_1ky6a_142 small {\n  display: block;\n  padding: var(--spacing--2xs) 0 0;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n}\n._actionBox_1ky6a_158 {\n  margin: var(--spacing--2xl) 0 0;\n}\n._footer_1ky6a_162 {\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/sso/views/SettingsSso.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "pb-2xl"
        };
        _hoisted_2 = {
          href: "https://docs.n8n.io/user-management/saml/",
          target: "_blank"
        };
        _hoisted_3 = {
          key: 1
        };
        _hoisted_4 = {
          key: 0,
          "data-test-id": "sso-content-licensed"
        };
        _hoisted_5 = {
          class: "mt-2xs mb-s"
        };
        _hoisted_6 = {
          key: 0
        };
        _hoisted_7 = {
          key: 1
        };
        _hoisted_8 = {
          key: 2
        };
        _hoisted_9 = {
          key: 0
        };
        SettingsSso_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsSso",
          setup(__props) {
            const IdentityProviderSettingsType = {
              URL: "url",
              XML: "xml"
            };
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const rootStore = useRootStore();
            const ssoStore = useSSOStore();
            const message = useMessage();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const ssoActivatedLabel = computed(() => ssoStore.isSamlLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated"));
            const oidcActivatedLabel = computed(() => ssoStore.isOidcLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated"));
            const options = computed(() => {
              return [{
                label: SupportedProtocols.SAML.toUpperCase(),
                value: SupportedProtocols.SAML
              }, {
                label: ssoStore.isEnterpriseOidcEnabled ? SupportedProtocols.OIDC.toUpperCase() : `${SupportedProtocols.OIDC.toUpperCase()} (${i18n.baseText("generic.upgradeToEnterprise")})`,
                value: SupportedProtocols.OIDC
              }];
            });
            const ssoSettingsSaved = ref(false);
            const entityId = ref();
            const clientId = ref("");
            const clientSecret = ref("");
            const discoveryEndpoint = ref("");
            const prompt = ref("select_account");
            const handlePromptChange = value => {
              prompt.value = value;
            };
            const promptDescriptions = [{
              label: i18n.baseText("settings.sso.settings.oidc.prompt.login"),
              value: "login"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.none"),
              value: "none"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.consent"),
              value: "consent"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.select_account"),
              value: "select_account"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.create"),
              value: "create"
            }];
            const authProtocol = ref(SupportedProtocols.SAML);
            const ipsOptions = ref([{
              label: i18n.baseText("settings.sso.settings.ips.options.url"),
              value: IdentityProviderSettingsType.URL
            }, {
              label: i18n.baseText("settings.sso.settings.ips.options.xml"),
              value: IdentityProviderSettingsType.XML
            }]);
            const ipsType = ref(IdentityProviderSettingsType.URL);
            const metadataUrl = ref();
            const metadata = ref();
            const redirectUrl = ref();
            const isSaveEnabled = computed(() => {
              if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && metadataUrl.value !== ssoStore.samlConfig?.metadataUrl;else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && metadata.value !== ssoStore.samlConfig?.metadata;
              return false;
            });
            const isTestEnabled = computed(() => {
              if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && ssoSettingsSaved.value;else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && ssoSettingsSaved.value;
              return false;
            });
            async function loadSamlConfig() {
              if (!ssoStore.isEnterpriseSamlEnabled) return;
              try {
                await getSamlConfig();
              } catch (error) {
                toast.showError(error, "error");
              }
            }
            const getSamlConfig = async () => {
              const config = await ssoStore.getSamlConfig();
              entityId.value = config?.entityID;
              redirectUrl.value = config?.returnUrl;
              if (config?.metadataUrl) ipsType.value = IdentityProviderSettingsType.URL;else if (config?.metadata) ipsType.value = IdentityProviderSettingsType.XML;
              metadata.value = config?.metadata;
              metadataUrl.value = config?.metadataUrl;
              ssoSettingsSaved.value = !!config?.metadata;
            };
            const trackUpdateSettings = () => {
              const trackingMetadata = {
                instance_id: rootStore.instanceId,
                authentication_method: authProtocol.value
              };
              if (authProtocol.value === SupportedProtocols.SAML) {
                trackingMetadata.identity_provider = ipsType.value === "url" ? "metadata" : "xml";
                trackingMetadata.is_active = ssoStore.isSamlLoginEnabled;
              } else if (authProtocol.value === SupportedProtocols.OIDC) {
                trackingMetadata.discovery_endpoint = discoveryEndpoint.value;
                trackingMetadata.is_active = ssoStore.isOidcLoginEnabled;
              }
              telemetry.track("User updated single sign on settings", trackingMetadata);
            };
            const onSave = async () => {
              try {
                validateInput();
                const config = ipsType.value === IdentityProviderSettingsType.URL ? {
                  metadataUrl: metadataUrl.value
                } : {
                  metadata: metadata.value
                };
                await ssoStore.saveSamlConfig(config);
                ssoStore.selectedAuthProtocol = authProtocol.value;
                if (!ssoStore.isSamlLoginEnabled) {
                  if ((await message.confirm(i18n.baseText("settings.sso.settings.save.activate.message"), i18n.baseText("settings.sso.settings.save.activate.title"), {
                    confirmButtonText: i18n.baseText("settings.sso.settings.save.activate.test"),
                    cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
                  })) === "confirm") await onTest();
                }
                trackUpdateSettings();
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.sso.settings.save.error"));
                return;
              } finally {
                await getSamlConfig();
              }
            };
            const onTest = async () => {
              try {
                const url = await ssoStore.testSamlConfig();
                if (typeof window !== "undefined") window.open(url, "_blank");
              } catch (error) {
                toast.showError(error, "error");
              }
            };
            const validateInput = () => {
              if (ipsType.value === IdentityProviderSettingsType.URL) try {
                const parsedUrl = new URL(metadataUrl.value);
                if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") throw new Error("The provided protocol is not supported");
              } catch (error) {
                throw new Error(i18n.baseText("settings.sso.settings.ips.url.invalid"));
              }
            };
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("sso", "upgrade-sso");
            };
            const isToggleSsoDisabled = computed(() => {
              /** Allow users to disable SSO even if config request fails */
              if (ssoStore.isSamlLoginEnabled) return false;
              return !ssoSettingsSaved.value;
            });
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.sso.title"));
              await Promise.all([loadSamlConfig(), loadOidcConfig()]);
              ssoStore.initializeSelectedProtocol();
              authProtocol.value = ssoStore.selectedAuthProtocol || SupportedProtocols.SAML;
            });
            const getOidcConfig = async () => {
              const config = await ssoStore.getOidcConfig();
              clientId.value = config.clientId;
              clientSecret.value = config.clientSecret;
              discoveryEndpoint.value = config.discoveryEndpoint;
              prompt.value = config.prompt ?? "select_account";
            };
            async function loadOidcConfig() {
              if (!ssoStore.isEnterpriseOidcEnabled) return;
              try {
                await getOidcConfig();
              } catch (error) {
                toast.showError(error, "error");
              }
            }
            function onAuthProtocolUpdated(value) {
              authProtocol.value = value;
            }
            const cannotSaveOidcSettings = computed(() => {
              return ssoStore.oidcConfig?.clientId === clientId.value && ssoStore.oidcConfig?.clientSecret === clientSecret.value && ssoStore.oidcConfig?.discoveryEndpoint === discoveryEndpoint.value && ssoStore.oidcConfig?.loginEnabled === ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.prompt === prompt.value;
            });
            async function onOidcSettingsSave() {
              if (ssoStore.oidcConfig?.loginEnabled && !ssoStore.isOidcLoginEnabled) {
                if ((await message.confirm(i18n.baseText("settings.oidc.confirmMessage.beforeSaveForm.message"), i18n.baseText("settings.oidc.confirmMessage.beforeSaveForm.headline"), {
                  cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
                  confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
                })) !== "confirm") return;
              }
              try {
                const newConfig = await ssoStore.saveOidcConfig({
                  clientId: clientId.value,
                  clientSecret: clientSecret.value,
                  discoveryEndpoint: discoveryEndpoint.value,
                  prompt: prompt.value,
                  loginEnabled: ssoStore.isOidcLoginEnabled
                });
                ssoStore.selectedAuthProtocol = authProtocol.value;
                clientSecret.value = newConfig.clientSecret;
                trackUpdateSettings();
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
                return;
              } finally {
                await getOidcConfig();
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.heading)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)]),
                _: 1
              })], 2), createVNode(unref(N8nInfoTip_default), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.info")) + " ", 1), createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.sso.info.link")), 1)]),
                _: 1
              }), unref(ssoStore).isEnterpriseSamlEnabled || unref(ssoStore).isEnterpriseOidcEnabled ? (openBlock(), createElementBlock("div", {
                key: 0,
                "data-test-id": "sso-auth-protocol-select",
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[9] || (_cache[9] = createBaseVNode("label", null, "Select Authentication Protocol", -1)), createBaseVNode("div", null, [createVNode(unref(N8nSelect_default), {
                filterable: "",
                "model-value": authProtocol.value,
                placeholder: unref(i18n).baseText("parameterInput.select"),
                "onUpdate:modelValue": onAuthProtocolUpdated,
                onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, ({
                  label,
                  value
                }) => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: value,
                    value,
                    label,
                    "data-test-id": "credential-select-option"
                  }, null, 8, ["value", "label"]);
                }), 128))]),
                _: 1
              }, 8, ["model-value", "placeholder"])])], 2)) : createCommentVNode("", true), authProtocol.value === unref(SupportedProtocols).SAML ? (openBlock(), createElementBlock("div", _hoisted_3, [unref(ssoStore).isEnterpriseSamlEnabled ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.label")), 1), createVNode(CopyInput_default, {
                value: redirectUrl.value,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": unref(i18n).baseText("settings.sso.settings.redirectUrl.copied")
              }, null, 8, ["value", "copy-button-text", "toast-title"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.label")), 1), createVNode(CopyInput_default, {
                value: entityId.value,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": unref(i18n).baseText("settings.sso.settings.entityId.copied")
              }, null, 8, ["value", "copy-button-text", "toast-title"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.label")), 1), createBaseVNode("div", _hoisted_5, [createVNode(unref(N8nRadioButtons_default), {
                modelValue: ipsType.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ipsType.value = $event),
                options: ipsOptions.value
              }, null, 8, ["modelValue", "options"])]), ipsType.value === IdentityProviderSettingsType.URL ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(N8nInput_default), {
                modelValue: metadataUrl.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => metadataUrl.value = $event),
                type: "text",
                name: "metadataUrl",
                size: "large",
                placeholder: unref(i18n).baseText("settings.sso.settings.ips.url.placeholder"),
                "data-test-id": "sso-provider-url"
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.url.help")), 1)])) : createCommentVNode("", true), ipsType.value === IdentityProviderSettingsType.XML ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(N8nInput_default), {
                modelValue: metadata.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => metadata.value = $event),
                type: "textarea",
                name: "metadata",
                rows: 4,
                "data-test-id": "sso-provider-xml"
              }, null, 8, ["modelValue"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.xml.help")), 1)])) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [unref(ssoStore).isEnterpriseSamlEnabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                disabled: unref(ssoStore).isSamlLoginEnabled || ssoSettingsSaved.value
              }, {
                content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.activation.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(ElSwitch), {
                  modelValue: unref(ssoStore).isSamlLoginEnabled,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => unref(ssoStore).isSamlLoginEnabled = $event),
                  "data-test-id": "sso-toggle",
                  disabled: isToggleSsoDisabled.value,
                  class: normalizeClass(_ctx.$style.switch),
                  "inactive-text": ssoActivatedLabel.value
                }, null, 8, ["modelValue", "disabled", "class", "inactive-text"])]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [createVNode(unref(N8nButton_default), {
                disabled: !isSaveEnabled.value,
                size: "large",
                "data-test-id": "sso-save",
                onClick: onSave
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
                _: 1
              }, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
                disabled: !isTestEnabled.value,
                size: "large",
                type: "tertiary",
                "data-test-id": "sso-test",
                onClick: onTest
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)]),
                _: 1
              }, 8, ["disabled"])], 2), createBaseVNode("footer", {
                class: normalizeClass(_ctx.$style.footer)
              }, toDisplayString(unref(i18n).baseText("settings.sso.settings.footer.hint")), 3)])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 1,
                "data-test-id": "sso-content-unlicensed",
                class: normalizeClass(_ctx.$style.actionBox),
                description: unref(i18n).baseText("settings.sso.actionBox.description"),
                "button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
                _: 1
              }, 8, ["class", "description", "button-text"]))])) : createCommentVNode("", true), authProtocol.value === unref(SupportedProtocols).OIDC ? (openBlock(), createElementBlock("div", _hoisted_8, [unref(ssoStore).isEnterpriseOidcEnabled ? (openBlock(), createElementBlock("div", _hoisted_9, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[10] || (_cache[10] = createBaseVNode("label", null, "Redirect URL", -1)), createVNode(CopyInput_default, {
                value: unref(ssoStore).oidc.callbackUrl,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": "Redirect URL copied to clipboard"
              }, null, 8, ["value", "copy-button-text"]), _cache[11] || (_cache[11] = createBaseVNode("small", null, "Copy the Redirect URL to configure your OIDC provider ", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[12] || (_cache[12] = createBaseVNode("label", null, "Discovery Endpoint", -1)), createVNode(unref(N8nInput_default), {
                "model-value": discoveryEndpoint.value,
                type: "text",
                "data-test-id": "oidc-discovery-endpoint",
                placeholder: "https://accounts.google.com/.well-known/openid-configuration",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = v => discoveryEndpoint.value = v)
              }, null, 8, ["model-value"]), _cache[13] || (_cache[13] = createBaseVNode("small", null, "Paste here your discovery endpoint", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[14] || (_cache[14] = createBaseVNode("label", null, "Client ID", -1)), createVNode(unref(N8nInput_default), {
                "model-value": clientId.value,
                type: "text",
                "data-test-id": "oidc-client-id",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = v => clientId.value = v)
              }, null, 8, ["model-value"]), _cache[15] || (_cache[15] = createBaseVNode("small", null, "The client ID you received when registering your application with your provider", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[16] || (_cache[16] = createBaseVNode("label", null, "Client Secret", -1)), createVNode(unref(N8nInput_default), {
                "model-value": clientSecret.value,
                type: "password",
                "data-test-id": "oidc-client-secret",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = v => clientSecret.value = v)
              }, null, 8, ["model-value"]), _cache[17] || (_cache[17] = createBaseVNode("small", null, "The client Secret you received when registering your application with your provider", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[18] || (_cache[18] = createBaseVNode("label", null, "Prompt", -1)), createVNode(unref(N8nSelect_default), {
                "model-value": prompt.value,
                "data-test-id": "oidc-prompt",
                "onUpdate:modelValue": handlePromptChange
              }, {
                default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(promptDescriptions, option => {
                  return createVNode(unref(N8nOption_default), {
                    key: option.value,
                    label: option.label,
                    "data-test-id": "oidc-prompt-filter-option",
                    value: option.value
                  }, null, 8, ["label", "value"]);
                }), 64))]),
                _: 1
              }, 8, ["model-value"]), _cache[19] || (_cache[19] = createBaseVNode("small", null, "The prompt parameter to use when authenticating with the OIDC provider", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createVNode(unref(ElSwitch), {
                modelValue: unref(ssoStore).isOidcLoginEnabled,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => unref(ssoStore).isOidcLoginEnabled = $event),
                "data-test-id": "sso-oidc-toggle",
                class: normalizeClass(_ctx.$style.switch),
                "inactive-text": oidcActivatedLabel.value
              }, null, 8, ["modelValue", "class", "inactive-text"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [createVNode(unref(N8nButton_default), {
                "data-test-id": "sso-oidc-save",
                size: "large",
                disabled: cannotSaveOidcSettings.value,
                onClick: onOidcSettingsSave
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
                _: 1
              }, 8, ["disabled"])], 2)])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 1,
                "data-test-id": "sso-content-unlicensed",
                class: normalizeClass(_ctx.$style.actionBox),
                "button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
                _: 1
              }, 8, ["class", "button-text"]))])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SettingsSso.vue?vue&type=style&index=0&lang.module.scss
        heading = "_heading_1ky6a_123";
        buttons = "_buttons_1ky6a_133";
        group = "_group_1ky6a_142";
        actionBox = "_actionBox_1ky6a_158";
        footer = "_footer_1ky6a_162";
        SettingsSso_vue_vue_type_style_index_0_lang_module_default = {
          heading,
          "switch": "_switch_1ky6a_127",
          buttons,
          group,
          actionBox,
          footer
        }; //#endregion
        //#region src/features/settings/sso/views/SettingsSso.vue
        cssModules = {
          "$style": SettingsSso_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsSso_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsSso_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();