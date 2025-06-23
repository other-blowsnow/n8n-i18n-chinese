import { d as defineComponent, a1 as useRootStore, eA as useSSOStore, a as useToast, a7 as useDocumentTitle, aa as usePageRedirectionHelper, x as computed, c as useI18n, r as ref, o as onMounted, h as resolveComponent, i as createElementBlock, g as openBlock, k as createBaseVNode, j as createVNode, e as createBlock, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, n as normalizeClass, f as createCommentVNode, F as Fragment, G as renderList, bE as withModifiers, fr as CopyInput, aI as withDirectives, aJ as vShow, ao as useMessage, am as useTelemetry, ap as MODAL_CONFIRM, _ as _export_sfc } from "./index-Y0sphpVt.js";
const _hoisted_1 = { class: "pb-2xl" };
const _hoisted_2 = {
  href: "https://docs.n8n.io/user-management/saml/",
  target: "_blank"
};
const _hoisted_3 = {
  key: 0,
  "data-test-id": "sso-content-licensed"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "mt-2xs mb-s" };
const _hoisted_6 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsSso",
  setup(__props) {
    const IdentityProviderSettingsType = {
      URL: "url",
      XML: "xml"
    };
    const SupportedProtocols = {
      SAML: "saml",
      OIDC: "oidc"
    };
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const rootStore = useRootStore();
    const ssoStore = useSSOStore();
    const message = useMessage();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const ssoActivatedLabel = computed(
      () => ssoStore.isSamlLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated")
    );
    const oidcActivatedLabel = computed(
      () => ssoStore.isOidcLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated")
    );
    const ssoSettingsSaved = ref(false);
    const entityId = ref();
    const clientId = ref("");
    const clientSecret = ref("");
    const discoveryEndpoint = ref("");
    const authProtocol = ref(SupportedProtocols.SAML);
    const ipsOptions = ref([
      {
        label: i18n.baseText("settings.sso.settings.ips.options.url"),
        value: IdentityProviderSettingsType.URL
      },
      {
        label: i18n.baseText("settings.sso.settings.ips.options.xml"),
        value: IdentityProviderSettingsType.XML
      }
    ]);
    const ipsType = ref(IdentityProviderSettingsType.URL);
    const metadataUrl = ref();
    const metadata = ref();
    const redirectUrl = ref();
    const isSaveEnabled = computed(() => {
      if (ipsType.value === IdentityProviderSettingsType.URL) {
        return !!metadataUrl.value && metadataUrl.value !== ssoStore.samlConfig?.metadataUrl;
      } else if (ipsType.value === IdentityProviderSettingsType.XML) {
        return !!metadata.value && metadata.value !== ssoStore.samlConfig?.metadata;
      }
      return false;
    });
    const isTestEnabled = computed(() => {
      if (ipsType.value === IdentityProviderSettingsType.URL) {
        return !!metadataUrl.value && ssoSettingsSaved.value;
      } else if (ipsType.value === IdentityProviderSettingsType.XML) {
        return !!metadata.value && ssoSettingsSaved.value;
      }
      return false;
    });
    async function loadSamlConfig() {
      if (!ssoStore.isEnterpriseSamlEnabled) {
        return;
      }
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
      if (config?.metadataUrl) {
        ipsType.value = IdentityProviderSettingsType.URL;
      } else if (config?.metadata) {
        ipsType.value = IdentityProviderSettingsType.XML;
      }
      metadata.value = config?.metadata;
      metadataUrl.value = config?.metadataUrl;
      ssoSettingsSaved.value = !!config?.metadata;
    };
    const onSave = async () => {
      try {
        validateInput();
        const config = ipsType.value === IdentityProviderSettingsType.URL ? { metadataUrl: metadataUrl.value } : { metadata: metadata.value };
        await ssoStore.saveSamlConfig(config);
        if (!ssoStore.isSamlLoginEnabled) {
          const answer = await message.confirm(
            i18n.baseText("settings.sso.settings.save.activate.message"),
            i18n.baseText("settings.sso.settings.save.activate.title"),
            {
              confirmButtonText: i18n.baseText("settings.sso.settings.save.activate.test"),
              cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
            }
          );
          if (answer === "confirm") {
            await onTest();
          }
        }
        telemetry.track("User updated single sign on settings", {
          instance_id: rootStore.instanceId,
          identity_provider: ipsType.value === "url" ? "metadata" : "xml",
          is_active: ssoStore.isSamlLoginEnabled
        });
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
        if (typeof window !== "undefined") {
          window.open(url, "_blank");
        }
      } catch (error) {
        toast.showError(error, "error");
      }
    };
    const validateInput = () => {
      if (ipsType.value === IdentityProviderSettingsType.URL) {
        try {
          const parsedUrl = new URL(metadataUrl.value);
          if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
            throw new Error("The provided protocol is not supported");
          }
        } catch (error) {
          throw new Error(i18n.baseText("settings.sso.settings.ips.url.invalid"));
        }
      }
    };
    const goToUpgrade = () => {
      void pageRedirectionHelper.goToUpgrade("sso", "upgrade-sso");
    };
    const isToggleSsoDisabled = computed(() => {
      if (ssoStore.isSamlLoginEnabled) {
        return false;
      }
      return !ssoSettingsSaved.value;
    });
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.sso.title"));
      await Promise.all([loadSamlConfig(), loadOidcConfig()]);
      if (ssoStore.isDefaultAuthenticationSaml) {
        authProtocol.value = SupportedProtocols.SAML;
      } else if (ssoStore.isDefaultAuthenticationOidc) {
        authProtocol.value = SupportedProtocols.OIDC;
      }
    });
    const getOidcConfig = async () => {
      const config = await ssoStore.getOidcConfig();
      clientId.value = config.clientId;
      clientSecret.value = config.clientSecret;
      discoveryEndpoint.value = config.discoveryEndpoint;
    };
    async function loadOidcConfig() {
      if (!ssoStore.isEnterpriseOidcEnabled) {
        return;
      }
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
      return ssoStore.oidcConfig?.clientId === clientId.value && ssoStore.oidcConfig?.clientSecret === clientSecret.value && ssoStore.oidcConfig?.discoveryEndpoint === discoveryEndpoint.value && ssoStore.oidcConfig?.loginEnabled === ssoStore.isOidcLoginEnabled;
    });
    async function onOidcSettingsSave() {
      if (ssoStore.oidcConfig?.loginEnabled && !ssoStore.isOidcLoginEnabled) {
        const confirmAction = await message.confirm(
          i18n.baseText("settings.oidc.confirmMessage.beforeSaveForm.message"),
          i18n.baseText("settings.oidc.confirmMessage.beforeSaveForm.headline"),
          {
            cancelButtonText: i18n.baseText(
              "settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"
            ),
            confirmButtonText: i18n.baseText(
              "settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText"
            )
          }
        );
        if (confirmAction !== MODAL_CONFIRM) return;
      }
      const newConfig = await ssoStore.saveOidcConfig({
        clientId: clientId.value,
        clientSecret: clientSecret.value,
        discoveryEndpoint: discoveryEndpoint.value,
        loginEnabled: ssoStore.isOidcLoginEnabled
      });
      clientSecret.value = newConfig.clientSecret;
    }
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_info_tip = resolveComponent("n8n-info-tip");
      const _component_N8nOption = resolveComponent("N8nOption");
      const _component_N8nSelect = resolveComponent("N8nSelect");
      const _component_n8n_radio_buttons = resolveComponent("n8n-radio-buttons");
      const _component_n8n_input = resolveComponent("n8n-input");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_N8nInput = resolveComponent("N8nInput");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.heading)
        }, [
          createVNode(_component_n8n_heading, { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)
            ]),
            _: 1
          })
        ], 2),
        createVNode(_component_n8n_info_tip, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.info")) + " ", 1),
            createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.sso.info.link")), 1)
          ]),
          _: 1
        }),
        unref(ssoStore).isEnterpriseSamlEnabled ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.group)
          }, [
            _cache[9] || (_cache[9] = createBaseVNode("label", null, "Select Authentication Protocol", -1)),
            createBaseVNode("div", null, [
              createVNode(_component_N8nSelect, {
                filterable: "",
                "model-value": authProtocol.value,
                placeholder: unref(i18n).baseText("parameterInput.select"),
                "onUpdate:modelValue": onAuthProtocolUpdated,
                onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(SupportedProtocols), (protocol) => {
                    return openBlock(), createBlock(_component_N8nOption, {
                      key: protocol,
                      value: protocol,
                      label: protocol.toUpperCase(),
                      "data-test-id": "credential-select-option"
                    }, null, 8, ["value", "label"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["model-value", "placeholder"])
            ])
          ], 2),
          authProtocol.value === SupportedProtocols.SAML ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.label")), 1),
              createVNode(CopyInput, {
                value: redirectUrl.value,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": unref(i18n).baseText("settings.sso.settings.redirectUrl.copied")
              }, null, 8, ["value", "copy-button-text", "toast-title"]),
              createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.help")), 1)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.label")), 1),
              createVNode(CopyInput, {
                value: entityId.value,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": unref(i18n).baseText("settings.sso.settings.entityId.copied")
              }, null, 8, ["value", "copy-button-text", "toast-title"]),
              createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.help")), 1)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.label")), 1),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_n8n_radio_buttons, {
                  modelValue: ipsType.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ipsType.value = $event),
                  options: ipsOptions.value
                }, null, 8, ["modelValue", "options"])
              ]),
              withDirectives(createBaseVNode("div", null, [
                createVNode(_component_n8n_input, {
                  modelValue: metadataUrl.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => metadataUrl.value = $event),
                  type: "text",
                  name: "metadataUrl",
                  size: "large",
                  placeholder: unref(i18n).baseText("settings.sso.settings.ips.url.placeholder"),
                  "data-test-id": "sso-provider-url"
                }, null, 8, ["modelValue", "placeholder"]),
                createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.url.help")), 1)
              ], 512), [
                [vShow, ipsType.value === IdentityProviderSettingsType.URL]
              ]),
              withDirectives(createBaseVNode("div", null, [
                createVNode(_component_n8n_input, {
                  modelValue: metadata.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => metadata.value = $event),
                  type: "textarea",
                  name: "metadata",
                  rows: 4,
                  "data-test-id": "sso-provider-xml"
                }, null, 8, ["modelValue"]),
                createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.xml.help")), 1)
              ], 512), [
                [vShow, ipsType.value === IdentityProviderSettingsType.XML]
              ]),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [
                unref(ssoStore).isEnterpriseSamlEnabled ? (openBlock(), createBlock(_component_n8n_tooltip, {
                  key: 0,
                  disabled: unref(ssoStore).isSamlLoginEnabled || ssoSettingsSaved.value
                }, {
                  content: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.activation.tooltip")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_switch, {
                      modelValue: unref(ssoStore).isSamlLoginEnabled,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(ssoStore).isSamlLoginEnabled = $event),
                      "data-test-id": "sso-toggle",
                      disabled: isToggleSsoDisabled.value,
                      class: normalizeClass(_ctx.$style.switch),
                      "inactive-text": ssoActivatedLabel.value
                    }, null, 8, ["modelValue", "disabled", "class", "inactive-text"])
                  ]),
                  _: 1
                }, 8, ["disabled"])) : createCommentVNode("", true)
              ], 2)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.buttons)
            }, [
              createVNode(_component_n8n_button, {
                disabled: !isSaveEnabled.value,
                size: "large",
                "data-test-id": "sso-save",
                onClick: onSave
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              createVNode(_component_n8n_button, {
                disabled: !isTestEnabled.value,
                size: "large",
                type: "tertiary",
                "data-test-id": "sso-test",
                onClick: onTest
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ], 2),
            createBaseVNode("footer", {
              class: normalizeClass(_ctx.$style.footer)
            }, toDisplayString(unref(i18n).baseText("settings.sso.settings.footer.hint")), 3)
          ])) : createCommentVNode("", true),
          authProtocol.value === SupportedProtocols.OIDC ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              _cache[10] || (_cache[10] = createBaseVNode("label", null, "Redirect URL", -1)),
              createVNode(CopyInput, {
                value: unref(ssoStore).oidc.callbackUrl,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": "Redirect URL copied to clipboard"
              }, null, 8, ["value", "copy-button-text"]),
              _cache[11] || (_cache[11] = createBaseVNode("small", null, "Copy the Redirect URL to configure your OIDC provider ", -1))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              _cache[12] || (_cache[12] = createBaseVNode("label", null, "Discovery Endpoint", -1)),
              createVNode(_component_N8nInput, {
                "model-value": discoveryEndpoint.value,
                type: "text",
                placeholder: "https://accounts.google.com/.well-known/openid-configuration",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = (v) => discoveryEndpoint.value = v)
              }, null, 8, ["model-value"]),
              _cache[13] || (_cache[13] = createBaseVNode("small", null, "Paste here your discovery endpoint", -1))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              _cache[14] || (_cache[14] = createBaseVNode("label", null, "Client ID", -1)),
              createVNode(_component_N8nInput, {
                "model-value": clientId.value,
                type: "text",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = (v) => clientId.value = v)
              }, null, 8, ["model-value"]),
              _cache[15] || (_cache[15] = createBaseVNode("small", null, "The client ID you received when registering your application with your provider", -1))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              _cache[16] || (_cache[16] = createBaseVNode("label", null, "Client Secret", -1)),
              createVNode(_component_N8nInput, {
                "model-value": clientSecret.value,
                type: "password",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = (v) => clientSecret.value = v)
              }, null, 8, ["model-value"]),
              _cache[17] || (_cache[17] = createBaseVNode("small", null, "The client Secret you received when registering your application with your provider", -1))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createVNode(_component_el_switch, {
                modelValue: unref(ssoStore).isOidcLoginEnabled,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(ssoStore).isOidcLoginEnabled = $event),
                "data-test-id": "sso-oidc-toggle",
                class: normalizeClass(_ctx.$style.switch),
                "inactive-text": oidcActivatedLabel.value
              }, null, 8, ["modelValue", "class", "inactive-text"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.buttons)
            }, [
              createVNode(_component_n8n_button, {
                size: "large",
                disabled: cannotSaveOidcSettings.value,
                onClick: onOidcSettingsSave
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ], 2)
          ])) : createCommentVNode("", true)
        ])) : (openBlock(), createBlock(_component_n8n_action_box, {
          key: 1,
          "data-test-id": "sso-content-unlicensed",
          class: normalizeClass(_ctx.$style.actionBox),
          description: unref(i18n).baseText("settings.sso.actionBox.description"),
          "button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
          "onClick:button": goToUpgrade
        }, {
          heading: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)
          ]),
          _: 1
        }, 8, ["class", "description", "button-text"]))
      ]);
    };
  }
});
const heading = "_heading_1ftgg_123";
const buttons = "_buttons_1ftgg_133";
const group = "_group_1ftgg_142";
const actionBox = "_actionBox_1ftgg_158";
const footer = "_footer_1ftgg_162";
const style0 = {
  heading,
  "switch": "_switch_1ftgg_127",
  buttons,
  group,
  actionBox,
  footer
};
const cssModules = {
  "$style": style0
};
const SettingsSso = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsSso as default
};
