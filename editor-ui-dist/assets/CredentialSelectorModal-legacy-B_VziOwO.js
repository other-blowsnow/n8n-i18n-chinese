;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./src-legacy-CT0lqlSJ.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy--yD2a8cz.js", "./icon-legacy-r8SehkIr.js", "./overlay-legacy-D_orOv5T.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-D7C50D7l.js", "./dialog-legacy-Ct33ey6l.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./useToast-legacy-PRNOn8i6.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./useExternalHooks-legacy-CJTR8c_S.js", "./useStyles-legacy-E8NPEyeD.js", "./Modal-legacy-BSLC2q-3.js", "./CredentialIcon-legacy-Bm9ESCj_.js", "./constants-legacy-DjFSod4r.js", "./CredentialPicker-legacy-C61B7Kda.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, withCtx, openBlock, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nButton_default, N8nText_default, N8nIconButton_default, N8nHeading_default, __plugin_vue_export_helper_default, createEventBus, useMessage, useCredentialsStore, useToast, MODAL_CONFIRM, PROVIDER_CREDENTIAL_TYPE_MAP, Modal_default, CredentialIcon_default, providerDisplayNames, CredentialPicker_default, __vite_style__, CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, content, footer, header, icon, credentialContainer, credentialPicker, CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default, cssModules, CredentialSelectorModal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIconButton_default = _srcLegacy007Js.xt;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_dialogLegacy00DJs) {}, function (_useTelemetryLegacy00HJs) {
        useCredentialsStore = _useTelemetryLegacy00HJs.Ht;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MODAL_CONFIRM = _constantsLegacy00TJs.$o;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00TJs.Qr;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_ModalLegacy01TJs) {
        Modal_default = _ModalLegacy01TJs.t;
      }, function (_CredentialIconLegacy02lJs) {
        CredentialIcon_default = _CredentialIconLegacy02lJs.t;
      }, function (_constantsLegacy03lJs) {
        providerDisplayNames = _constantsLegacy03lJs.f;
      }, function (_CredentialPickerLegacy03FJs) {
        CredentialPicker_default = _CredentialPickerLegacy03FJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_1edrp_123 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--sm) 0;\n}\n._footer_1edrp_130 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  width: 100%;\n}\n._header_1edrp_138 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._icon_1edrp_144 {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n._credentialContainer_1edrp_149 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  width: 100%;\n}\n._credentialPicker_1edrp_156 {\n  width: 100%;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue?vue&type=script&setup=true&lang.ts
        CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialSelectorModal",
          props: {
            modalName: {},
            data: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const message = useMessage();
            const toast = useToast();
            const credentialsStore = useCredentialsStore();
            const modalBus = ref(createEventBus());
            const selectedCredentialId = ref(props.data.initialValue);
            const credentialType = computed(() => PROVIDER_CREDENTIAL_TYPE_MAP[props.data.provider]);
            const selectedCredential = computed(() => {
              if (!selectedCredentialId.value) return null;
              return credentialsStore.getCredentialById(selectedCredentialId.value);
            });
            function onCredentialSelect(credentialId) {
              selectedCredentialId.value = credentialId;
            }
            function onCredentialDeselect() {
              selectedCredentialId.value = null;
            }
            async function onDeleteCredential() {
              if (!selectedCredential.value) return;
              const credentialIdToDelete = selectedCredential.value.id;
              if ((await message.confirm(i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", {
                interpolate: {
                  savedCredentialName: selectedCredential.value.name
                }
              }), i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), {
                confirmButtonText: i18n.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText")
              })) !== "confirm") return;
              try {
                await credentialsStore.deleteCredential({
                  id: credentialIdToDelete
                });
                selectedCredentialId.value = null;
                if (credentialIdToDelete === props.data.initialValue) props.data.onSelect(props.data.provider, null);
                modalBus.value.emit("close");
              } catch (error) {
                toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.deleteCredential.title"));
              }
            }
            function onConfirm() {
              if (selectedCredentialId.value) {
                props.data.onSelect(props.data.provider, selectedCredentialId.value);
                modalBus.value.emit("close");
              }
            }
            function onCancel() {
              modalBus.value.emit("close");
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: _ctx.modalName,
                "event-bus": modalBus.value,
                width: "50%",
                center: true,
                "max-width": "460px",
                "min-height": "250px"
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(CredentialIcon_default, {
                  "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.data.provider],
                  size: 24,
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
                  size: "medium",
                  tag: "h2",
                  class: normalizeClass(_ctx.$style.title)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.title", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[_ctx.data.provider]
                    }
                  })), 1)]),
                  _: 1
                }, 8, ["class"])], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.chooseOrCreate", {
                    interpolate: {
                      provider: unref(providerDisplayNames)[_ctx.data.provider]
                    }
                  })), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.credentialContainer)
                }, [createVNode(CredentialPicker_default, {
                  class: normalizeClass(_ctx.$style.credentialPicker),
                  "app-name": unref(providerDisplayNames)[_ctx.data.provider],
                  "credential-type": credentialType.value,
                  "selected-credential-id": selectedCredentialId.value,
                  "hide-create-new": true,
                  onCredentialSelected: onCredentialSelect,
                  onCredentialDeselected: onCredentialDeselect
                }, null, 8, ["class", "app-name", "credential-type", "selected-credential-id"]), selectedCredentialId.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
                  key: 0,
                  "native-type": "button",
                  title: unref(i18n).baseText("chatHub.credentials.selector.deleteButton"),
                  icon: "trash-2",
                  "icon-size": "large",
                  type: "secondary",
                  onClick: onDeleteCredential
                }, null, 8, ["title"])) : createCommentVNode("", true)], 2)], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  onClick: onCancel
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: !selectedCredentialId.value,
                  onClick: onConfirm
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.credentials.selector.confirm")), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)]),
                _: 1
              }, 8, ["name", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_1edrp_123";
        footer = "_footer_1edrp_130";
        header = "_header_1edrp_138";
        icon = "_icon_1edrp_144";
        credentialContainer = "_credentialContainer_1edrp_149";
        credentialPicker = "_credentialPicker_1edrp_156";
        CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
          content,
          footer,
          header,
          icon,
          credentialContainer,
          credentialPicker
        }; //#endregion
        //#region src/features/ai/chatHub/components/CredentialSelectorModal.vue
        cssModules = {
          "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", CredentialSelectorModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();