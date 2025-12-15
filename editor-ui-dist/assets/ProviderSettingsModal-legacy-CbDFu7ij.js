;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-pg0njr0t.js", "./icon-legacy-Do9qTDxB.js", "./overlay-legacy-DU1OC2yK.js", "./empty-legacy-ZG0-xpne.js", "./dialog-legacy-C-nCPd3I.js", "./useTelemetry-legacy-BDcNi2-V.js", "./useToast-legacy-YkrI3Kyu.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-BOwjEkaj.js", "./merge-legacy-C4vVqZRQ.js", "./_baseOrderBy-legacy-B3XavLhF.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-Ds5JlDtt.js", "./useExternalHooks-legacy-CQQO1RoW.js", "./useStyles-legacy-E8NPEyeD.js", "./retry-legacy-CTwsGM7o.js", "./Modal-legacy-ChmxznF9.js", "./TagsDropdown-legacy-CE6rWXr-.js", "./constants-legacy-DjFSod4r.js", "./chat.store-legacy-DkygK1a_.js", "./fileUtils-legacy-BbiGYBne.js", "./CredentialPicker-legacy-BvykdtR9.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, watch, withCtx, openBlock, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nButton_default, ElSwitch, N8nText_default, N8nTooltip_default, N8nIconButton_default, N8nHeading_default, __plugin_vue_export_helper_default, createEventBus, useCredentialsStore, useToast, PROVIDER_CREDENTIAL_TYPE_MAP, useRootStore, Modal_default, TagsDropdown_default, providerDisplayNames, fetchChatModelsApi, useChatStore, CredentialPicker_default, __vite_style__, ProviderSettingsModal_vue_vue_type_script_setup_true_lang_default, header, content, container, toggle, credentialContainer, credentialPicker, modelPicker, footer, footerRight, ProviderSettingsModal_vue_vue_type_style_index_0_lang_module_default, cssModules, ProviderSettingsModal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        ElSwitch = _srcLegacy007Js.Tt;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nIconButton_default = _srcLegacy007Js.xt;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_dialogLegacy00DJs) {}, function (_useTelemetryLegacy00HJs) {
        useCredentialsStore = _useTelemetryLegacy00HJs.Ht;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00TJs.Qr;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_retryLegacy01lJs) {}, function (_ModalLegacy01TJs) {
        Modal_default = _ModalLegacy01TJs.t;
      }, function (_TagsDropdownLegacy033Js) {
        TagsDropdown_default = _TagsDropdownLegacy033Js.t;
      }, function (_constantsLegacy03lJs) {
        providerDisplayNames = _constantsLegacy03lJs.f;
      }, function (_chatStoreLegacy03nJs) {
        fetchChatModelsApi = _chatStoreLegacy03nJs.m;
        useChatStore = _chatStoreLegacy03nJs.t;
      }, function (_fileUtilsLegacy03pJs) {}, function (_CredentialPickerLegacy03FJs) {
        CredentialPicker_default = _CredentialPickerLegacy03FJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_1bv7t_123 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._content_1bv7t_129 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--lg);\n  padding: var(--spacing--sm) 0 var(--spacing--md);\n}\n._container_1bv7t_136 {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n}\n._toggle_1bv7t_144 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n}\n._credentialContainer_1bv7t_151 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  width: 100%;\n}\n._credentialPicker_1bv7t_158 {\n  width: 100%;\n}\n._modelPicker_1bv7t_162 {\n  width: 100%;\n}\n._footer_1bv7t_166 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_1bv7t_173 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/ProviderSettingsModal.vue?vue&type=script&setup=true&lang.ts
        ProviderSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProviderSettingsModal",
          props: {
            modalName: {},
            data: {}
          },
          setup(__props) {
            const props = __props;
            const settings = ref(null);
            const modalBus = ref(createEventBus());
            const loadingSettings = ref(false);
            const loadingModels = ref(false);
            const limitModels = ref(false);
            const availableModels = ref([]);
            const customModels = ref([]);
            const allModels = computed(() => {
              const models = new Map(availableModels.value.reduce((acc, model) => {
                if (model.model.provider !== "custom-agent" && model.model.provider !== "n8n") acc.push([model.model.model, {
                  id: model.model.model,
                  name: model.name
                }]);
                return acc;
              }, []));
              for (const model of customModels.value) models.set(model, {
                id: model,
                name: model,
                isManual: true
              });
              return Array.from(models.values());
            });
            const modelsById = computed(() => {
              const map = {};
              allModels.value.forEach(model => {
                map[model.id] = model;
              });
              return map;
            });
            const selectedModels = computed({
              get: () => settings.value?.allowedModels?.map(m => m.model) || [],
              set: value => {
                if (settings.value) {
                  settings.value.allowedModels = allModels.value.filter(model => value.includes(model.id)).map(model => ({
                    model: model.id,
                    displayName: model.name,
                    isManual: model.isManual
                  }));
                  customModels.value = settings.value.allowedModels.filter(model => model.isManual).map(model => model.model);
                }
              }
            });
            async function addManualModel(name) {
              customModels.value.push(name);
              return {
                id: name,
                name
              };
            }
            const i18n = useI18n();
            const credentialsStore = useCredentialsStore();
            const chatStore = useChatStore();
            const toast = useToast();
            const credentialType = computed(() => {
              return PROVIDER_CREDENTIAL_TYPE_MAP[props.data.provider];
            });
            function onCredentialSelect(credentialId) {
              if (settings.value) settings.value.credentialId = credentialId;
            }
            function onCredentialDeselect() {
              if (settings.value) {
                settings.value.credentialId = null;
                settings.value.allowedModels = [];
                limitModels.value = false;
              }
            }
            function onConfirm() {
              if (settings.value) props.data.onConfirm(settings.value);else props.data.onCancel();
              modalBus.value.emit("close");
            }
            function onCancel() {
              props.data.onCancel();
              modalBus.value.emit("close");
            }
            async function loadSettings() {
              settings.value = await chatStore.fetchProviderSettings(props.data.provider);
              limitModels.value = settings.value?.allowedModels.length > 0;
              customModels.value = settings.value.allowedModels.filter(model => model.isManual).map(model => model.model);
            }
            async function loadAvailableModels(credentialId) {
              loadingModels.value = true;
              try {
                const credentials = {
                  [props.data.provider]: credentialId
                };
                availableModels.value = (await fetchChatModelsApi(useRootStore().restApiContext, {
                  credentials
                }))[props.data.provider].models || [];
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.chatHub.providers.modal.edit.errorFetchingModels"));
              } finally {
                loadingModels.value = false;
              }
            }
            const isConfirmDisabled = computed(() => {
              if (props.data.disabled) return true;
              if (!settings.value) return true;
              return limitModels.value && settings.value.allowedModels.length === 0;
            });
            function onToggleEnabled(value) {
              if (settings.value) {
                settings.value.enabled = typeof value === "boolean" ? value : Boolean(value);
                if (!settings.value.enabled) {
                  settings.value.credentialId = null;
                  settings.value.allowedModels = [];
                  limitModels.value = false;
                }
              }
            }
            function onToggleLimitModels(value) {
              if (settings.value) {
                limitModels.value = typeof value === "boolean" ? value : Boolean(value);
                if (!limitModels.value) settings.value.allowedModels = [];
              }
            }
            onMounted(async () => {
              loadingSettings.value = true;
              await Promise.all([loadSettings(), credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentials()]);
              loadingSettings.value = false;
            });
            watch(() => settings.value?.credentialId, async credentialId => {
              if (credentialId) await loadAvailableModels(credentialId);
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: _ctx.modalName,
                "event-bus": modalBus.value,
                width: "50%",
                "max-width": "500px",
                center: true
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(unref(N8nHeading_default), {
                  size: "large",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.title", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[props.data.provider]
                    }
                  })), 1)]),
                  _: 1
                })], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.container)
                }, [createVNode(unref(N8nText_default), {
                  tag: "label",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.enabled.label", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[props.data.provider]
                    }
                  })), 1)]),
                  _: 1
                }), createVNode(unref(N8nTooltip_default), {
                  content: unref(i18n).baseText("settings.chatHub.providers.modal.edit.enabled.tooltip"),
                  disabled: props.data.disabled,
                  placement: "top"
                }, {
                  default: withCtx(() => [createVNode(unref(ElSwitch), {
                    size: "large",
                    "model-value": settings.value?.enabled ?? false,
                    disabled: props.data.disabled,
                    loading: loadingSettings.value,
                    "onUpdate:modelValue": onToggleEnabled
                  }, null, 8, ["model-value", "disabled", "loading"])]),
                  _: 1
                }, 8, ["content", "disabled"])], 2), settings.value && settings.value.enabled ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.container)
                }, [createVNode(unref(N8nText_default), {
                  tag: "label",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.credential.label")), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.credentialContainer)
                }, [createVNode(CredentialPicker_default, {
                  class: normalizeClass(_ctx.$style.credentialPicker),
                  "app-name": unref(providerDisplayNames)[props.data.provider],
                  "credential-type": credentialType.value,
                  "selected-credential-id": settings.value.credentialId,
                  "hide-create-new": true,
                  onCredentialSelected: onCredentialSelect,
                  onCredentialDeselected: onCredentialDeselect
                }, null, 8, ["class", "app-name", "credential-type", "selected-credential-id"]), settings.value.credentialId ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                  key: 0,
                  "native-type": "button",
                  title: unref(i18n).baseText("settings.chatHub.providers.modal.edit.credential.clearButton"),
                  icon: "x",
                  "icon-size": "large",
                  type: "secondary",
                  onClick: onCredentialDeselect
                }, null, 8, ["title"])) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true), settings.value && settings.value.enabled && settings.value.credentialId ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.container)
                }, [createVNode(unref(N8nText_default), {
                  tag: "label",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.limitModels.label", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[props.data.provider]
                    }
                  })), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.toggle)
                }, [createVNode(unref(N8nTooltip_default), {
                  content: unref(i18n).baseText("settings.chatHub.providers.modal.edit.limitModels.tooltip"),
                  disabled: props.data.disabled,
                  placement: "top"
                }, {
                  default: withCtx(() => [createVNode(unref(ElSwitch), {
                    size: "large",
                    "model-value": limitModels.value,
                    disabled: props.data.disabled,
                    loading: loadingSettings.value,
                    "onUpdate:modelValue": onToggleLimitModels
                  }, null, 8, ["model-value", "disabled", "loading"])]),
                  _: 1
                }, 8, ["content", "disabled"])], 2)], 2)) : createCommentVNode("", true), settings.value && settings.value.enabled && settings.value.credentialId && limitModels.value ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.container)
                }, [createVNode(unref(N8nText_default), {
                  tag: "label",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.allowedModels.label")), 1)]),
                  _: 1
                }), createVNode(TagsDropdown_default, {
                  modelValue: selectedModels.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedModels.value = $event),
                  class: normalizeClass(_ctx.$style.modelPicker),
                  placeholder: unref(i18n).baseText("settings.chatHub.providers.modal.edit.models.placeholder"),
                  "event-bus": null,
                  "create-enabled": true,
                  "manage-enabled": false,
                  "all-tags": allModels.value,
                  "is-loading": loadingModels.value,
                  "tags-by-id": modelsById.value,
                  "create-tag": addManualModel,
                  "create-tag-i18n-key": "settings.chatHub.providers.modal.edit.models.create"
                }, null, 8, ["modelValue", "class", "placeholder", "all-tags", "is-loading", "tags-by-id"])], 2)) : createCommentVNode("", true)], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerRight)
                }, [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  onClick: onCancel
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  onClick: onConfirm,
                  disabled: isConfirmDisabled.value
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.modal.edit.confirm")), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)], 2)]),
                _: 1
              }, 8, ["name", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ProviderSettingsModal.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_1bv7t_123";
        content = "_content_1bv7t_129";
        container = "_container_1bv7t_136";
        toggle = "_toggle_1bv7t_144";
        credentialContainer = "_credentialContainer_1bv7t_151";
        credentialPicker = "_credentialPicker_1bv7t_158";
        modelPicker = "_modelPicker_1bv7t_162";
        footer = "_footer_1bv7t_166";
        footerRight = "_footerRight_1bv7t_173";
        ProviderSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
          header,
          content,
          container,
          toggle,
          credentialContainer,
          credentialPicker,
          modelPicker,
          footer,
          footerRight
        }; //#endregion
        //#region src/features/ai/chatHub/components/ProviderSettingsModal.vue
        cssModules = {
          "$style": ProviderSettingsModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ProviderSettingsModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProviderSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();