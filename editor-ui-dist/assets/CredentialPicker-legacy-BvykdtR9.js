;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BDcNi2-V.js", "./_baseOrderBy-legacy-B3XavLhF.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, ref, createVNode, defineComponent, createBlock, Fragment, withCtx, openBlock, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nSelect_default, N8nButton_default, N8nOption_default, N8nText_default, N8nIcon_default, N8nIconButton_default, __plugin_vue_export_helper_default, CREDENTIAL_EDIT_MODAL_KEY, useUIStore, useCredentialsStore, listenForModalChanges, listenForCredentialChanges, assert, __vite_style__, CredentialsDropdown_vue_vue_type_script_setup_true_lang_default, selectPopper, newCredential, credentialOption, CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default, cssModules$1, CredentialsDropdown_default, CredentialPicker_vue_vue_type_script_setup_true_lang_default, dropdown, edit, invisible, CredentialPicker_vue_vue_type_style_index_0_lang_module_default, cssModules, CredentialPicker_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nSelect_default = _srcLegacy007Js.G;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nIconButton_default = _srcLegacy007Js.xt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        CREDENTIAL_EDIT_MODAL_KEY = _useTelemetryLegacy00HJs.Do;
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useCredentialsStore = _useTelemetryLegacy00HJs.Ht;
        listenForModalChanges = _useTelemetryLegacy00HJs.Pi;
        listenForCredentialChanges = _useTelemetryLegacy00HJs.Vt;
      }, function (_baseOrderByLegacy00ZJs) {
        assert = _baseOrderByLegacy00ZJs.g;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._selectPopper_1pxbf_123 .el-select-dropdown__list {\n  padding: 0;\n}\n._selectPopper_1pxbf_123 :has(._newCredential_1pxbf_126:hover) .hover {\n  background-color: transparent;\n}\n._selectPopper_1pxbf_123:not(:has(li)) ._newCredential_1pxbf_126 {\n  border-top: none;\n  box-shadow: none;\n  border-radius: var(--radius);\n}\n._credentialOption_1pxbf_135 {\n  display: flex;\n  flex-direction: column;\n}\n._newCredential_1pxbf_126 {\n  display: flex;\n  width: 100%;\n  gap: var(--spacing--3xs);\n  align-items: center;\n  font-weight: var(--font-weight--bold);\n  padding: var(--spacing--xs) var(--spacing--md);\n  background-color: var(--color--background--light-2);\n  color: var(--color--text--shade-1);\n  border: 0;\n  border-top: var(--border);\n  box-shadow: var(--shadow--light);\n  clip-path: inset(-12px 0 0 0);\n}\n._newCredential_1pxbf_126:not([disabled]) {\n  cursor: pointer;\n}\n._newCredential_1pxbf_126:not([disabled]):hover {\n  color: var(--color--primary);\n}\n._newCredential_1pxbf_126[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dropdown_10xvu_123 {\n  display: flex;\n}\n._edit_10xvu_127 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  margin-left: var(--spacing--2xs);\n  font-size: var(--font-size--sm);\n}\n._invisible_10xvu_136 {\n  visibility: hidden;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/credentials/components/CredentialPicker/CredentialsDropdown.vue?vue&type=script&setup=true&lang.ts
        CredentialsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialsDropdown",
          props: {
            credentialOptions: {},
            selectedCredentialId: {}
          },
          emits: ["credentialSelected", "newCredential"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const selectRefs = ref(null);
            const NEW_CREDENTIALS_TEXT = i18n.baseText("nodeCredentials.createNew");
            const onCredentialSelected = credentialId => {
              emit("credentialSelected", credentialId);
            };
            const onCreateNewCredential = async () => {
              selectRefs.value?.blur();
              await nextTick();
              emit("newCredential");
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nSelect_default), {
                ref_key: "selectRefs",
                ref: selectRefs,
                size: "small",
                "model-value": props.selectedCredentialId,
                "onUpdate:modelValue": onCredentialSelected,
                "popper-class": _ctx.$style.selectPopper
              }, {
                empty: withCtx(() => _cache[1] || (_cache[1] = [])),
                footer: withCtx(() => [createBaseVNode("button", {
                  type: "button",
                  "data-test-id": "node-credentials-select-item-new",
                  class: normalizeClass([_ctx.$style.newCredential]),
                  onClick: _cache[0] || (_cache[0] = $event => onCreateNewCredential())
                }, [createVNode(unref(N8nIcon_default), {
                  size: "xsmall",
                  icon: "plus"
                }), createTextVNode(" " + toDisplayString(unref(NEW_CREDENTIALS_TEXT)), 1)], 2)]),
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.credentialOptions, item => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: item.id,
                    "data-test-id": `node-credentials-select-item-${item.id}`,
                    label: item.name,
                    value: item.id
                  }, {
                    default: withCtx(() => [createBaseVNode("div", {
                      class: normalizeClass([_ctx.$style.credentialOption, "mt-2xs mb-2xs"])
                    }, [createVNode(unref(N8nText_default), {
                      bold: ""
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
                      _: 2
                    }, 1024), createVNode(unref(N8nText_default), {
                      size: "small"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(item.typeDisplayName), 1)]),
                      _: 2
                    }, 1024)], 2)]),
                    _: 2
                  }, 1032, ["data-test-id", "label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["model-value", "popper-class"]);
            };
          }
        }); //#endregion
        //#region src/features/credentials/components/CredentialPicker/CredentialsDropdown.vue?vue&type=style&index=0&lang.module.scss
        selectPopper = "_selectPopper_1pxbf_123";
        newCredential = "_newCredential_1pxbf_126";
        credentialOption = "_credentialOption_1pxbf_135";
        CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default = {
          selectPopper,
          newCredential,
          credentialOption
        }; //#endregion
        //#region src/features/credentials/components/CredentialPicker/CredentialsDropdown.vue
        cssModules$1 = {
          "$style": CredentialsDropdown_vue_vue_type_style_index_0_lang_module_default
        };
        CredentialsDropdown_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/credentials/components/CredentialPicker/CredentialPicker.vue?vue&type=script&setup=true&lang.ts
        CredentialPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialPicker",
          props: {
            appName: {},
            credentialType: {},
            selectedCredentialId: {},
            hideCreateNew: {
              type: Boolean
            }
          },
          emits: ["credentialSelected", "credentialDeselected", "credentialModalOpened"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const uiStore = useUIStore();
            const credentialsStore = useCredentialsStore();
            const i18n = useI18n();
            const wasModalOpenedFromHere = ref(false);
            const availableCredentials = computed(() => {
              return credentialsStore.getCredentialsByType(props.credentialType).filter(credential => credential.homeProject?.type === "personal");
            });
            const credentialOptions = computed(() => {
              return availableCredentials.value.map(credential => ({
                id: credential.id,
                name: credential.name,
                typeDisplayName: credentialsStore.getCredentialTypeByName(credential.type)?.displayName
              }));
            });
            const onCredentialSelected = credentialId => {
              emit("credentialSelected", credentialId);
            };
            const createNewCredential = () => {
              uiStore.openNewCredential(props.credentialType, true);
              wasModalOpenedFromHere.value = true;
              emit("credentialModalOpened");
            };
            const editCredential = () => {
              assert(props.selectedCredentialId);
              uiStore.openExistingCredential(props.selectedCredentialId);
              wasModalOpenedFromHere.value = true;
              emit("credentialModalOpened");
            };
            listenForCredentialChanges({
              store: credentialsStore,
              onCredentialCreated: credential => {
                if (!wasModalOpenedFromHere.value) return;
                emit("credentialSelected", credential.id);
              },
              onCredentialDeleted: deletedCredentialId => {
                if (!wasModalOpenedFromHere.value) return;
                if (deletedCredentialId !== props.selectedCredentialId) return;
                const optionsWoDeleted = credentialOptions.value.map(credential => credential.id).filter(id => id !== deletedCredentialId);
                if (optionsWoDeleted.length > 0) emit("credentialSelected", optionsWoDeleted[0]);else emit("credentialDeselected");
              }
            });
            listenForModalChanges({
              store: uiStore,
              onModalClosed(modalName) {
                if (modalName === "editCredential" && wasModalOpenedFromHere.value) wasModalOpenedFromHere.value = false;
              }
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [credentialOptions.value.length > 0 || props.hideCreateNew ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.dropdown)
              }, [createVNode(CredentialsDropdown_default, {
                "credential-type": props.credentialType,
                "credential-options": credentialOptions.value,
                "selected-credential-id": props.selectedCredentialId,
                "data-test-id": "credential-dropdown",
                onCredentialSelected,
                onNewCredential: createNewCredential
              }, null, 8, ["credential-type", "credential-options", "selected-credential-id"]), createVNode(unref(N8nIconButton_default), {
                icon: "pen",
                type: "secondary",
                class: normalizeClass({
                  [_ctx.$style.edit]: true,
                  [_ctx.$style.invisible]: !props.selectedCredentialId
                }),
                title: unref(i18n).baseText("nodeCredentials.updateCredential"),
                "data-test-id": "credential-edit-button",
                onClick: _cache[0] || (_cache[0] = $event => editCredential())
              }, null, 8, ["class", "title"])], 2)) : !props.hideCreateNew ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                label: `Create new ${props.appName} credential`,
                "data-test-id": "create-credential",
                onClick: createNewCredential
              }, null, 8, ["label"])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/credentials/components/CredentialPicker/CredentialPicker.vue?vue&type=style&index=0&lang.module.scss
        dropdown = "_dropdown_10xvu_123";
        edit = "_edit_10xvu_127";
        invisible = "_invisible_10xvu_136";
        CredentialPicker_vue_vue_type_style_index_0_lang_module_default = {
          dropdown,
          edit,
          invisible
        }; //#endregion
        //#region src/features/credentials/components/CredentialPicker/CredentialPicker.vue
        cssModules = {
          "$style": CredentialPicker_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", CredentialPicker_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();