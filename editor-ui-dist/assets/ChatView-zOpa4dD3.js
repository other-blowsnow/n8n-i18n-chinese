import { d as defineComponent, x as computed, i0 as chatHubProviderSchema, i1 as providerDisplayNames, e as createBlock, g as openBlock, k as unref, w as withCtx, i as createVNode, f as createCommentVNode, j as createBaseVNode, he as CredentialIcon, n as normalizeClass, i2 as PROVIDER_CREDENTIAL_TYPE_MAP, l as createTextVNode, t as toDisplayString, p as N8nText, N as N8nIcon, q as N8nButton, _ as _export_sfc, d1 as useCredentialsStore, r as ref, hT as Modal, h as createElementBlock, A as renderList, e7 as _sfc_main$3, F as Fragment, e6 as N8nSelect, aq as createEventBus, i3 as recordType, i4 as stringType, i5 as nullType, b as useRouter, a3 as useRoute, u as useUsersStore, Q as useUIStore, a as useToast, aH as useTemplateRef, bD as v4, b0 as useLocalStorage, i6 as LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL, i7 as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, a8 as watch, o as onMounted, m as N8nHeading, i8 as SUGGESTIONS, bv as N8nScrollArea, B as withModifiers, b4 as withDirectives, bW as vModelText, hZ as CHAT_CONVERSATION_VIEW, bU as markdownLink, i9 as chatHubConversationModelSchema, Z as nextTick, bq as CHAT_VIEW } from "./index-lkSN61-i.js";
import { V as VueMarkdown, H as HighlightJS } from "./core-aAY3Jgyx.js";
import { P as PageViewLayout } from "./PageViewLayout-CwSpNark.js";
import { N as N8nNavigationDropdown } from "./NavigationDropdown-C8gyWHQe.js";
import { u as useChatStore, f as findOneFromModelsResponse } from "./chat.utils-uWkPwvnb.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModelSelector",
  props: {
    disabled: { type: Boolean },
    models: {},
    selectedModel: {},
    credentialsName: {}
  },
  emits: ["change", "configure"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const menu = computed(
      () => chatHubProviderSchema.options.map((provider) => {
        const models = props.models?.[provider].models ?? [];
        const error = props.models?.[provider].error;
        const modelOptions = models.length > 0 ? models.map((model) => ({
          id: `${provider}::${model.name}`,
          title: model.name,
          disabled: false
        })) : error ? [{ id: `${provider}::error`, disabled: true, title: error }] : [];
        return {
          id: provider,
          title: providerDisplayNames[provider],
          submenu: modelOptions.concat([
            ...modelOptions.length > 0 ? [{ isDivider: true, id: "divider" }] : [],
            {
              id: `${provider}::configure`,
              icon: "settings",
              title: "Configure credentials...",
              disabled: false
            }
          ])
        };
      })
    );
    const selectedLabel = computed(() => {
      if (!props.selectedModel) return "Select model";
      return props.selectedModel.model;
    });
    function onSelect(id) {
      const [provider, model] = id.split("::");
      const parsedProvider = chatHubProviderSchema.safeParse(provider).data;
      if (!parsedProvider) {
        return;
      }
      if (model === "configure") {
        emit("configure", parsedProvider);
        return;
      }
      emit("change", { provider: parsedProvider, model });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nNavigationDropdown), {
        menu: menu.value,
        disabled: _ctx.disabled,
        onSelect
      }, {
        "item-icon": withCtx(({ item }) => [
          item.id in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon, {
            key: 0,
            "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[item.id],
            size: 16,
            class: normalizeClass(_ctx.$style.menuIcon)
          }, null, 8, ["credential-type-name", "class"])) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createVNode(unref(N8nButton), {
            class: normalizeClass(_ctx.$style.dropdownButton),
            type: "secondary"
          }, {
            default: withCtx(() => [
              _ctx.selectedModel ? (openBlock(), createBlock(CredentialIcon, {
                key: 0,
                "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.selectedModel.provider],
                size: _ctx.credentialsName ? 20 : 16,
                class: normalizeClass(_ctx.$style.icon)
              }, null, 8, ["credential-type-name", "size", "class"])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.selected)
              }, [
                createTextVNode(toDisplayString(selectedLabel.value) + " ", 1),
                _ctx.credentialsName ? (openBlock(), createBlock(unref(N8nText), {
                  key: 0,
                  size: "xsmall",
                  color: "text-light"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.credentialsName), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ], 2),
              createVNode(unref(N8nIcon), {
                icon: "chevron-down",
                size: "medium"
              })
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["menu", "disabled"]);
    };
  }
});
const dropdownButton = "_dropdownButton_1p4jf_123";
const selected = "_selected_1p4jf_129";
const icon$1 = "_icon_1p4jf_136";
const menuIcon = "_menuIcon_1p4jf_141";
const style0$2 = {
  dropdownButton,
  selected,
  icon: icon$1,
  menuIcon
};
const cssModules$2 = {
  "$style": style0$2
};
const ModelSelector = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CredentialSelectorModal",
  props: {
    provider: {},
    initialValue: {}
  },
  emits: ["select", "createNew"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const credentialsStore = useCredentialsStore();
    const modalBus = ref(createEventBus());
    const selectedCredentialId = ref(props.initialValue);
    const availableCredentials = computed(() => {
      return credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[props.provider]);
    });
    function onCredentialSelect(credentialId) {
      selectedCredentialId.value = credentialId;
    }
    function onConfirm() {
      if (selectedCredentialId.value) {
        emit("select", props.provider, selectedCredentialId.value);
        modalBus.value.emit("close");
      }
    }
    function onCreateNew() {
      emit("createNew", props.provider);
      modalBus.value.emit("close");
    }
    function onCancel() {
      modalBus.value.emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Modal, {
        name: "chatCredentialSelector",
        "event-bus": modalBus.value,
        width: "50%",
        center: true,
        "max-width": "460px",
        "min-height": "250px"
      }, {
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.header)
          }, [
            createVNode(CredentialIcon, {
              "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.provider],
              size: 24,
              class: normalizeClass(_ctx.$style.icon)
            }, null, 8, ["credential-type-name", "class"]),
            createBaseVNode("h2", {
              class: normalizeClass(_ctx.$style.title)
            }, "Select " + toDisplayString(unref(providerDisplayNames)[_ctx.provider]) + " Credential", 3)
          ], 2)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(unref(N8nText), {
              size: "small",
              color: "text-base"
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode(" Choose an existing credential or create a new one ")
              ])),
              _: 1
            }),
            createVNode(unref(N8nSelect), {
              "model-value": selectedCredentialId.value,
              size: "large",
              placeholder: "Select credential...",
              "data-test-id": "credential-select",
              "onUpdate:modelValue": onCredentialSelect
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(availableCredentials.value, (credential) => {
                  return openBlock(), createBlock(unref(_sfc_main$3), {
                    key: credential.id,
                    value: credential.id,
                    label: credential.name
                  }, null, 8, ["value", "label"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["model-value"])
          ], 2)
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.footer)
          }, [
            createVNode(unref(N8nButton), {
              type: "secondary",
              onClick: onCreateNew
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode(" Create New ")
              ])),
              _: 1
            }),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.footerRight)
            }, [
              createVNode(unref(N8nButton), {
                type: "tertiary",
                onClick: onCancel
              }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode(" Cancel ")
                ])),
                _: 1
              }),
              createVNode(unref(N8nButton), {
                type: "primary",
                disabled: !selectedCredentialId.value,
                onClick: onConfirm
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" Select ")
                ])),
                _: 1
              }, 8, ["disabled"])
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["event-bus"]);
    };
  }
});
const title = "_title_6x6p1_123";
const content$1 = "_content_6x6p1_129";
const footer = "_footer_6x6p1_136";
const footerRight = "_footerRight_6x6p1_143";
const header$1 = "_header_6x6p1_148";
const icon = "_icon_6x6p1_154";
const style0$1 = {
  title,
  content: content$1,
  footer,
  footerRight,
  header: header$1,
  icon
};
const cssModules$1 = {
  "$style": style0$1
};
const CredentialSelectorModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["placeholder", "disabled"];
const _hoisted_3 = ["disabled"];
const _hoisted_4 = ["disabled"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatView",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const chatStore = useChatStore();
    const userStore = useUsersStore();
    const credentialsStore = useCredentialsStore();
    const uiStore = useUIStore();
    const toast = useToast();
    const inputRef = useTemplateRef("inputRef");
    const message2 = ref("");
    const sessionId = computed(
      () => typeof route.params.id === "string" ? route.params.id : v4()
    );
    const isNewSession = computed(() => sessionId.value !== route.params.id);
    const messagesRef = ref(null);
    const scrollAreaRef = ref();
    const credentialSelectorProvider = ref(null);
    const selectedModel = useLocalStorage(
      LOCAL_STORAGE_CHAT_HUB_SELECTED_MODEL,
      null,
      {
        writeDefaults: false,
        shallow: true,
        serializer: {
          read: (value) => {
            try {
              return chatHubConversationModelSchema.parse(JSON.parse(value));
            } catch (error) {
              return null;
            }
          },
          write: (value) => JSON.stringify(value)
        }
      }
    );
    const selectedCredentials = useLocalStorage(
      LOCAL_STORAGE_CHAT_HUB_CREDENTIALS,
      {},
      {
        writeDefaults: false,
        shallow: true,
        serializer: {
          read: (value) => {
            try {
              return credentialsMapSchema.parse(JSON.parse(value));
            } catch (error) {
              return {};
            }
          },
          write: (value) => JSON.stringify(value)
        }
      }
    );
    const autoSelectCredentials = computed(
      () => Object.fromEntries(
        chatHubProviderSchema.options.map((provider) => {
          const lastCreatedCredential = credentialsStore.getCredentialsByType(PROVIDER_CREDENTIAL_TYPE_MAP[provider]).toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null;
          return [provider, lastCreatedCredential];
        })
      )
    );
    const mergedCredentials = computed(() => ({
      ...autoSelectCredentials.value,
      ...selectedCredentials.value
    }));
    const chatMessages = computed(() => chatStore.messagesBySession[sessionId.value] ?? []);
    const hasMessages = computed(() => chatMessages.value.length > 0);
    const inputPlaceholder = computed(() => {
      if (!selectedModel.value) {
        return "Select a model";
      }
      const modelName = selectedModel.value.model;
      return `Message ${modelName}`;
    });
    const scrollOnNewMessage = ref(true);
    const credentialsName = computed(
      () => selectedModel.value ? credentialsStore.getCredentialById(
        mergedCredentials.value[selectedModel.value.provider] ?? ""
      )?.name : void 0
    );
    function getScrollViewport() {
      const root = scrollAreaRef.value?.$el;
      return root?.querySelector("[data-reka-scroll-area-viewport]");
    }
    function scrollToBottom() {
      const viewport = getScrollViewport();
      if (viewport && messagesRef.value) {
        viewport.scrollTo({
          top: messagesRef.value.scrollHeight,
          behavior: "smooth"
        });
      }
    }
    watch(
      chatMessages,
      async (messages) => {
        if (scrollOnNewMessage.value && messages.length > 0) {
          await nextTick();
          if (getScrollViewport()) {
            scrollToBottom();
          }
        }
      },
      { immediate: true, deep: true }
    );
    watch(
      mergedCredentials,
      async (credentials) => {
        const models = await chatStore.fetchChatModels(credentials);
        const selected2 = selectedModel.value;
        if (selected2 === null) {
          selectedModel.value = findOneFromModelsResponse(models) ?? null;
        }
      },
      { immediate: true }
    );
    watch(
      [sessionId, isNewSession],
      async ([id, isNew]) => {
        if (!isNew && !chatStore.messagesBySession[id]) {
          try {
            await chatStore.fetchMessages(id);
          } catch (error) {
            toast.showError(error, "Error fetching a conversation");
            await router.push({ name: CHAT_VIEW });
          }
        }
        inputRef.value?.focus();
      },
      { immediate: true }
    );
    onMounted(async () => {
      await Promise.all([
        credentialsStore.fetchCredentialTypes(false),
        credentialsStore.fetchAllCredentials()
      ]);
    });
    function onModelChange(selection) {
      selectedModel.value = selection;
    }
    function onConfigure(provider) {
      const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
      const existingCredentials = credentialsStore.getCredentialsByType(credentialType);
      if (existingCredentials.length === 0) {
        uiStore.openNewCredential(credentialType);
        return;
      }
      credentialSelectorProvider.value = provider;
      uiStore.openModal("chatCredentialSelector");
    }
    function onCredentialSelected(provider, credentialId) {
      selectedCredentials.value = { ...selectedCredentials.value, [provider]: credentialId };
    }
    function onCreateNewCredential(provider) {
      uiStore.openNewCredential(PROVIDER_CREDENTIAL_TYPE_MAP[provider]);
    }
    function onSubmit() {
      if (!message2.value.trim() || chatStore.isResponding || !selectedModel.value) {
        return;
      }
      const credentialsId = mergedCredentials.value[selectedModel.value.provider];
      if (!credentialsId) {
        return;
      }
      chatStore.askAI(sessionId.value, message2.value, selectedModel.value, {
        [PROVIDER_CREDENTIAL_TYPE_MAP[selectedModel.value.provider]]: {
          id: credentialsId,
          name: ""
        }
      });
      message2.value = "";
      if (isNewSession.value) {
        void router.push({ name: CHAT_CONVERSATION_VIEW, params: { id: sessionId.value } });
      }
    }
    function onSuggestionClick(s) {
      message2.value = `${s.title} ${s.subtitle}`;
    }
    function onAttach() {
    }
    function onMic() {
    }
    function messageText(msg) {
      return msg.type === "message" ? msg.text : `**Error:** ${msg.content}`;
    }
    const markdownOptions = {
      highlight(str, lang) {
        if (lang && HighlightJS.getLanguage(lang)) {
          try {
            return HighlightJS.highlight(str, { language: lang }).value;
          } catch {
          }
        }
        return "";
      }
    };
    const linksNewTabPlugin = (vueMarkdownItInstance) => {
      vueMarkdownItInstance.use(markdownLink, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PageViewLayout, null, {
        default: withCtx(() => [
          createVNode(ModelSelector, {
            class: normalizeClass(_ctx.$style.modelSelector),
            models: unref(chatStore).models ?? null,
            "selected-model": unref(selectedModel),
            disabled: unref(chatStore).isResponding,
            "credentials-name": credentialsName.value,
            onChange: onModelChange,
            onConfigure
          }, null, 8, ["class", "models", "selected-model", "disabled", "credentials-name"]),
          credentialSelectorProvider.value ? (openBlock(), createBlock(CredentialSelectorModal, {
            key: credentialSelectorProvider.value,
            provider: credentialSelectorProvider.value,
            "initial-value": mergedCredentials.value[credentialSelectorProvider.value] ?? null,
            onSelect: onCredentialSelected,
            onCreateNew: onCreateNewCredential
          }, null, 8, ["provider", "initial-value"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass({
              [_ctx.$style.content]: true,
              [_ctx.$style.centered]: !hasMessages.value
            })
          }, [
            createBaseVNode("section", {
              class: normalizeClass({
                [_ctx.$style.section]: true,
                [_ctx.$style.fullHeight]: hasMessages.value
              })
            }, [
              !hasMessages.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.header)
              }, [
                createVNode(unref(N8nHeading), {
                  tag: "h2",
                  bold: "",
                  size: "xlarge"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(`Good morning, ${unref(userStore).currentUser?.firstName ?? unref(userStore).currentUser?.fullName ?? "User"}!`), 1)
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true),
              !hasMessages.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.suggestions)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(SUGGESTIONS), (s) => {
                  return openBlock(), createElementBlock("button", {
                    key: s.title,
                    type: "button",
                    class: normalizeClass(_ctx.$style.card),
                    onClick: ($event) => onSuggestionClick(s)
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.cardIcon),
                      "aria-hidden": "true"
                    }, [
                      createVNode(unref(N8nText), { size: "xlarge" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(s.icon), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ], 2),
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.cardText)
                    }, [
                      createVNode(unref(N8nText), {
                        bold: "",
                        color: "text-dark"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(s.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(N8nText), { color: "text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(s.subtitle), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ], 2)
                  ], 10, _hoisted_1);
                }), 128))
              ], 2)) : (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.threadContainer)
              }, [
                createVNode(unref(N8nScrollArea), {
                  ref_key: "scrollAreaRef",
                  ref: scrollAreaRef,
                  type: "hover",
                  "enable-vertical-scroll": true,
                  "enable-horizontal-scroll": false,
                  class: normalizeClass(_ctx.$style.threadWrap)
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      ref_key: "messagesRef",
                      ref: messagesRef,
                      class: normalizeClass(_ctx.$style.thread),
                      role: "log",
                      "aria-live": "polite"
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(chatMessages.value, (m) => {
                        return openBlock(), createElementBlock("div", {
                          key: m.id,
                          class: normalizeClass([
                            _ctx.$style.message,
                            m.role === "user" ? _ctx.$style.user : _ctx.$style.assistant,
                            m.type === "error" && _ctx.$style.error
                          ])
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.avatar)
                          }, [
                            createVNode(unref(N8nIcon), {
                              icon: m.role === "user" ? "user" : "sparkles",
                              width: "20",
                              height: "20"
                            }, null, 8, ["icon"])
                          ], 2),
                          createBaseVNode("div", {
                            class: normalizeClass({
                              [_ctx.$style.chatMessage]: true,
                              [_ctx.$style.chatMessageFromUser]: m.role === "user",
                              [_ctx.$style.chatMessageFromAssistant]: m.role === "assistant"
                            })
                          }, [
                            createVNode(unref(VueMarkdown), {
                              class: normalizeClass(_ctx.$style.chatMessageMarkdown),
                              source: messageText(m),
                              options: markdownOptions,
                              plugins: [linksNewTabPlugin]
                            }, null, 8, ["class", "source", "plugins"])
                          ], 2)
                        ], 2);
                      }), 128)),
                      unref(chatStore).isResponding ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.avatar)
                        }, [
                          createVNode(unref(N8nIcon), {
                            icon: "sparkles",
                            width: "20",
                            height: "20"
                          })
                        ], 2),
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.bubble)
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(_ctx.$style.typing)
                          }, _cache[1] || (_cache[1] = [
                            createBaseVNode("i", null, null, -1),
                            createBaseVNode("i", null, null, -1),
                            createBaseVNode("i", null, null, -1)
                          ]), 2)
                        ], 2)
                      ], 2)) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 2)),
              createBaseVNode("form", {
                class: normalizeClass(_ctx.$style.prompt),
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.inputWrap)
                }, [
                  withDirectives(createBaseVNode("input", {
                    ref_key: "inputRef",
                    ref: inputRef,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => message2.value = $event),
                    class: normalizeClass(_ctx.$style.input),
                    type: "text",
                    placeholder: inputPlaceholder.value,
                    autocomplete: "off",
                    autofocus: "",
                    disabled: unref(chatStore).isResponding
                  }, null, 10, _hoisted_2), [
                    [vModelText, message2.value]
                  ]),
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.actions)
                  }, [
                    createBaseVNode("button", {
                      class: normalizeClass(_ctx.$style.iconBtn),
                      type: "button",
                      title: "Attach",
                      disabled: unref(chatStore).isResponding,
                      onClick: onAttach
                    }, [
                      createVNode(unref(N8nIcon), {
                        icon: "paperclip",
                        width: "20",
                        height: "20"
                      })
                    ], 10, _hoisted_3),
                    createBaseVNode("button", {
                      class: normalizeClass(_ctx.$style.iconBtn),
                      type: "button",
                      title: "Voice",
                      disabled: unref(chatStore).isResponding,
                      onClick: onMic
                    }, [
                      createVNode(unref(N8nIcon), {
                        icon: "mic",
                        width: "20",
                        height: "20"
                      })
                    ], 10, _hoisted_4),
                    createBaseVNode("button", {
                      class: normalizeClass(_ctx.$style.sendBtn),
                      type: "submit",
                      disabled: unref(chatStore).isResponding || !message2.value.trim()
                    }, [
                      !unref(chatStore).isResponding ? (openBlock(), createElementBlock("span", _hoisted_6, "Send")) : (openBlock(), createElementBlock("span", _hoisted_7, "…"))
                    ], 10, _hoisted_5)
                  ], 2)
                ], 2),
                createVNode(unref(N8nText), {
                  class: normalizeClass(_ctx.$style.disclaimer),
                  color: "text-light",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    _cache[2] || (_cache[2] = createTextVNode(" AI may make mistakes. Check important info. ")),
                    _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
                    createTextVNode(" " + toDisplayString(sessionId.value), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 34)
            ], 2)
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const content = "_content_193ao_123";
const centered = "_centered_193ao_132";
const section = "_section_193ao_136";
const fullHeight = "_fullHeight_193ao_143";
const header = "_header_193ao_148";
const suggestions = "_suggestions_193ao_155";
const card = "_card_193ao_168";
const cardIcon = "_cardIcon_193ao_186";
const cardText = "_cardText_193ao_192";
const threadWrap = "_threadWrap_193ao_197";
const threadContainer = "_threadContainer_193ao_203";
const thread = "_thread_193ao_197";
const message = "_message_193ao_215";
const avatar = "_avatar_193ao_222";
const chatMessage = "_chatMessage_193ao_232";
const chatMessageFromAssistant = "_chatMessageFromAssistant_193ao_239";
const chatMessageFromUser = "_chatMessageFromUser_193ao_242";
const chatMessageMarkdown = "_chatMessageMarkdown_193ao_245";
const typing = "_typing_193ao_271";
const blink = "_blink_193ao_1";
const prompt = "_prompt_193ao_304";
const inputWrap = "_inputWrap_193ao_311";
const input = "_input_193ao_311";
const actions = "_actions_193ao_339";
const iconBtn = "_iconBtn_193ao_349";
const sendBtn = "_sendBtn_193ao_366";
const disclaimer = "_disclaimer_193ao_382";
const modelSelector = "_modelSelector_193ao_388";
const style0 = {
  content,
  centered,
  section,
  fullHeight,
  header,
  suggestions,
  card,
  cardIcon,
  cardText,
  threadWrap,
  threadContainer,
  thread,
  message,
  avatar,
  chatMessage,
  chatMessageFromAssistant,
  chatMessageFromUser,
  chatMessageMarkdown,
  typing,
  blink,
  prompt,
  inputWrap,
  input,
  actions,
  iconBtn,
  sendBtn,
  disclaimer,
  modelSelector
};
const cssModules = {
  "$style": style0
};
const ChatView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ChatView as default
};
