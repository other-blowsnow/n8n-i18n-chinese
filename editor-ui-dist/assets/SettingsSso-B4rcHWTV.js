import { d as defineComponent, Z as useRootStore, dU as useSSOStore, a as useToast, a4 as useDocumentTitle, a6 as usePageRedirectionHelper, q as computed, c as useI18n, r as ref, o as onMounted, h as resolveComponent, i as createElementBlock, g as openBlock, j as createVNode, k as createBaseVNode, e as createBlock, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, f as createCommentVNode, n as normalizeClass, eE as CopyInput, aA as withDirectives, aB as vShow, ai as useMessage, ag as useTelemetry, _ as _export_sfc } from "./index-CkuwrFdE.js";
const _hoisted_1 = { class: "pb-3xl" };
const _hoisted_2 = {
  href: "https://docs.n8n.io/user-management/saml/",
  target: "_blank"
};
const _hoisted_3 = {
  key: 0,
  "data-test-id": "sso-content-licensed"
};
const _hoisted_4 = { class: "mt-2xs mb-s" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const ssoActivatedLabel = computed(
      () => ssoStore.isSamlLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated")
    );
    const ssoSettingsSaved = ref(false);
    const redirectUrl = ref();
    const entityId = ref();
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
      if (!ssoStore.isEnterpriseSamlEnabled) {
        return;
      }
      try {
        await getSamlConfig();
      } catch (error) {
        toast.showError(error, "error");
      }
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_info_tip = resolveComponent("n8n-info-tip");
      const _component_n8n_radio_buttons = resolveComponent("n8n-radio-buttons");
      const _component_n8n_input = resolveComponent("n8n-input");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n8n_heading, { size: "2xlarge" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.top)
        }, [
          createVNode(_component_n8n_heading, { size: "xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.subtitle")), 1)
            ]),
            _: 1
          }),
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
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(ssoStore).isSamlLoginEnabled = $event),
                "data-test-id": "sso-toggle",
                disabled: isToggleSsoDisabled.value,
                class: normalizeClass(_ctx.$style.switch),
                "inactive-text": ssoActivatedLabel.value
              }, null, 8, ["modelValue", "disabled", "class", "inactive-text"])
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true)
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
            createBaseVNode("div", _hoisted_4, [
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
            ])
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
const top = "_top_1u4m7_123";
const buttons = "_buttons_1u4m7_136";
const group = "_group_1u4m7_145";
const actionBox = "_actionBox_1u4m7_161";
const footer = "_footer_1u4m7_165";
const style0 = {
  top,
  "switch": "_switch_1u4m7_130",
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
