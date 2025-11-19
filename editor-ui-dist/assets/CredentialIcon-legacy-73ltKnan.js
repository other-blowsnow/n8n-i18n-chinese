;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, normalizeClass, openBlock, N8nNodeIcon_default, __plugin_vue_export_helper_default, useCredentialsStore, useUIStore, useRootStore, getThemedValue, useNodeTypesStore, __vite_style__, CredentialIcon_vue_vue_type_script_setup_true_lang_default, icon, CredentialIcon_vue_vue_type_style_index_0_lang_module_default, cssModules, CredentialIcon_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_srcLegacy007Js) {
        N8nNodeIcon_default = _srcLegacy007Js.D;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        getThemedValue = _useTelemetryLegacy00FJs.Zr;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._icon_1t6sl_123 {\n  --node--icon--color: var(--color--foreground--shade-1);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/credentials/components/CredentialIcon.vue?vue&type=script&setup=true&lang.ts
        CredentialIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialIcon",
          props: {
            credentialTypeName: {},
            size: {}
          },
          setup(__props) {
            const props = __props;
            const credentialsStore = useCredentialsStore();
            const rootStore = useRootStore();
            const uiStore = useUIStore();
            const nodeTypesStore = useNodeTypesStore();
            const credentialWithIcon = computed(() => getCredentialWithIcon(props.credentialTypeName));
            const nodeBasedIconUrl = computed(() => {
              const icon$1 = getThemedValue(credentialWithIcon.value?.icon);
              if (!icon$1?.startsWith("node:")) return null;
              return nodeTypesStore.getNodeType(icon$1.replace("node:", ""))?.iconUrl;
            });
            const iconSource = computed(() => {
              const themeIconUrl = getThemedValue(nodeBasedIconUrl.value ?? credentialWithIcon.value?.iconUrl, uiStore.appliedTheme);
              if (!themeIconUrl) return;
              return rootStore.baseUrl + themeIconUrl;
            });
            const iconType = computed(() => {
              if (iconSource.value) return "file";else if (iconName.value) return "icon";
              return "unknown";
            });
            const iconName = computed(() => {
              const icon$1 = getThemedValue(credentialWithIcon.value?.icon, uiStore.appliedTheme);
              if (!icon$1?.startsWith("fa:")) return void 0;
              return icon$1.replace("fa:", "");
            });
            const iconColor = computed(() => {
              const {
                iconColor: color
              } = credentialWithIcon.value ?? {};
              if (!color) return void 0;
              return `var(--node--icon--color--${color})`;
            });
            function getCredentialWithIcon(name) {
              if (!name) return null;
              const type = credentialsStore.getCredentialTypeByName(name);
              if (!type) return null;
              if (type.icon ?? type.iconUrl) return type;
              if (type.extends) {
                let parentCred = null;
                type.extends.forEach(credType => {
                  parentCred = getCredentialWithIcon(credType);
                  if (parentCred !== null) return;
                });
                return parentCred;
              }
              return null;
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nNodeIcon_default), {
                class: normalizeClass(_ctx.$style.icon),
                type: iconType.value,
                size: _ctx.size ?? 26,
                src: iconSource.value,
                name: iconName.value,
                color: iconColor.value
              }, null, 8, ["class", "type", "size", "src", "name", "color"]);
            };
          }
        }); //#endregion
        //#region src/features/credentials/components/CredentialIcon.vue?vue&type=style&index=0&lang.module.scss
        icon = "_icon_1t6sl_123";
        CredentialIcon_vue_vue_type_style_index_0_lang_module_default = {
          icon
        }; //#endregion
        //#region src/features/credentials/components/CredentialIcon.vue
        cssModules = {
          "$style": CredentialIcon_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", CredentialIcon_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();