import { d as defineComponent, d2 as useExternalSecretsStore, Q as useUIStore, a as useToast, cl as toRef, x as computed, gD as useExternalSecretsProvider, c as useI18n, bd as DateTime, gE as isDateObject, o as onMounted, e as createBlock, g as openBlock, k as unref, s as N8nCard, n as normalizeClass, w as withCtx, j as createBaseVNode, i as createVNode, h as createElementBlock, f as createCommentVNode, gF as _sfc_main$2, p as N8nText, l as createTextVNode, t as toDisplayString, N as N8nIcon, aL as N8nBadge, gG as ExternalSecretsProviderConnectionSwitch, ee as N8nActionToggle, q as N8nButton, Z as nextTick, gH as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, _ as _export_sfc, ay as useDocumentTitle, aB as usePageRedirectionHelper, m as N8nHeading, z as N8nCallout, F as Fragment, A as renderList, ac as I18nT, dW as N8nActionBox } from "./index-lkSN61-i.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    const { connectionState, testConnection, setConnectionState } = useExternalSecretsProvider(
      provider,
      providerData
    );
    const actionDropdownOptions = computed(() => [
      {
        value: "setup",
        label: i18n.baseText("settings.externalSecrets.card.actionDropdown.setup")
      },
      ...props.provider.connected ? [
        {
          value: "reload",
          label: i18n.baseText("settings.externalSecrets.card.actionDropdown.reload")
        }
      ] : []
    ]);
    const canConnect = computed(() => {
      return props.provider.connected || Object.keys(providerData.value).length > 0;
    });
    const formattedDate = computed(() => {
      return DateTime.fromISO(
        isDateObject(provider.value.connectedAt) ? provider.value.connectedAt.toISOString() : provider.value.connectedAt || (/* @__PURE__ */ new Date()).toISOString()
      ).toFormat("dd LLL yyyy");
    });
    onMounted(() => {
      setConnectionState(props.provider.state);
    });
    async function onBeforeConnectionUpdate() {
      if (props.provider.connected) {
        return true;
      }
      await externalSecretsStore.getProvider(props.provider.name);
      await nextTick();
      const status = await testConnection();
      return status !== "error";
    }
    function openExternalSecretProvider() {
      uiStore.openModalWithData({
        name: EXTERNAL_SECRETS_PROVIDER_MODAL_KEY,
        data: { name: props.provider.name }
      });
    }
    async function reloadProvider() {
      try {
        await externalSecretsStore.reloadProvider(props.provider.name);
        toast.showMessage({
          title: i18n.baseText("settings.externalSecrets.card.reload.success.title"),
          message: i18n.baseText("settings.externalSecrets.card.reload.success.description", {
            interpolate: { provider: props.provider.displayName }
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
      return openBlock(), createBlock(unref(N8nCard), {
        class: normalizeClass(_ctx.$style.card)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardBody)
          }, [
            createVNode(_sfc_main$2, {
              class: normalizeClass(_ctx.$style.cardImage),
              provider: provider.value
            }, null, 8, ["class", "provider"]),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.cardContent)
            }, [
              createVNode(unref(N8nText), { bold: "" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(provider.value.displayName), 1)
                ]),
                _: 1
              }),
              provider.value.connected ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                color: "text-light",
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.secretsCount", {
                    interpolate: {
                      count: `${unref(externalSecretsStore).secrets[provider.value.name]?.length}`
                    }
                  })), 1),
                  _cache[1] || (_cache[1] = createTextVNode(" | ")),
                  createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.connectedAt", {
                    interpolate: {
                      date: formattedDate.value
                    }
                  })), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2),
            provider.value.name === "infisical" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.deprecationWarning)
            }, [
              createVNode(unref(N8nIcon), {
                class: normalizeClass(_ctx.$style["warningTriangle"]),
                icon: "triangle-alert"
              }, null, 8, ["class"]),
              createVNode(unref(N8nBadge), {
                class: "mr-xs",
                theme: "tertiary",
                bold: "",
                "data-test-id": "card-badge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.deprecated")), 1)
                ]),
                _: 1
              })
            ], 2)) : createCommentVNode("", true),
            canConnect.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.$style.cardActions)
            }, [
              createVNode(ExternalSecretsProviderConnectionSwitch, {
                provider: provider.value,
                "before-update": onBeforeConnectionUpdate,
                disabled: unref(connectionState) === "error" && !provider.value.connected
              }, null, 8, ["provider", "disabled"]),
              createVNode(unref(N8nActionToggle), {
                class: "ml-s",
                theme: "dark",
                actions: actionDropdownOptions.value,
                onAction: onActionDropdownClick
              }, null, 8, ["actions"])
            ], 2)) : (openBlock(), createBlock(unref(N8nButton), {
              key: 2,
              type: "tertiary",
              onClick: _cache[0] || (_cache[0] = ($event) => openExternalSecretProvider())
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.setUp")), 1)
              ]),
              _: 1
            }))
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const card = "_card_er899_123";
const cardImage = "_cardImage_er899_128";
const cardBody = "_cardBody_er899_133";
const cardContent = "_cardContent_er899_139";
const cardActions = "_cardActions_er899_146";
const deprecationWarning = "_deprecationWarning_er899_153";
const warningTriangle = "_warningTriangle_er899_157";
const style0 = {
  card,
  cardImage,
  cardBody,
  cardContent,
  cardActions,
  deprecationWarning,
  warningTriangle
};
const cssModules = {
  "$style": style0
};
const ExternalSecretsProviderCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const _hoisted_1 = { class: "pb-3xl" };
const _hoisted_2 = {
  key: 0,
  "data-test-id": "external-secrets-content-licensed"
};
const _hoisted_3 = ["href"];
const _hoisted_4 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        void externalSecretsStore.fetchAllSecrets();
        void externalSecretsStore.getProviders();
      } catch (error) {
        toast.showError(error, i18n.baseText("error"));
      }
    });
    function goToUpgrade() {
      void pageRedirectionHelper.goToUpgrade("external-secrets", "upgrade-external-secrets");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(N8nHeading), { size: "2xlarge" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.title")), 1)
          ]),
          _: 1
        }),
        unref(externalSecretsStore).isEnterpriseExternalSecretsEnabled ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(unref(N8nCallout), {
            theme: "secondary",
            class: "mt-2xl mb-l"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.info")) + " ", 1),
              createBaseVNode("a", {
                href: unref(i18n).baseText("settings.externalSecrets.docs"),
                target: "_blank"
              }, toDisplayString(unref(i18n).baseText("settings.externalSecrets.info.link")), 9, _hoisted_3)
            ]),
            _: 1
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(sortedProviders.value, (provider) => {
            return openBlock(), createBlock(ExternalSecretsProviderCard, {
              key: provider.name,
              provider
            }, null, 8, ["provider"]);
          }), 128))
        ])) : (openBlock(), createBlock(unref(N8nActionBox), {
          key: 1,
          class: "mt-2xl mb-l",
          "data-test-id": "external-secrets-content-unlicensed",
          "button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
          onClick: goToUpgrade
        }, {
          heading: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.title")), 1)
          ]),
          description: withCtx(() => [
            createVNode(unref(I18nT), {
              keypath: "settings.externalSecrets.actionBox.description",
              scope: "global"
            }, {
              link: withCtx(() => [
                createBaseVNode("a", {
                  href: unref(i18n).baseText("settings.externalSecrets.docs"),
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.description.link")), 9, _hoisted_4)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["button-text"]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
