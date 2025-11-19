;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./dataTable.store-legacy-BFWf9Jk0.js", "./Modal-legacy-QjB-Eju3.js"], function (_export, _context) {
    "use strict";

    var unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, withCtx, openBlock, withKeys, createBaseVNode, useI18n, N8nInput_default, N8nButton_default, N8nInputLabel_default, __plugin_vue_export_helper_default, useRouter, useRoute, useUIStore, useTelemetry, useToast, DATA_TABLE_DETAILS, PROJECT_DATA_TABLES, useDataTableStore, Modal_default, __vite_style__, AddDataTableModal_vue_vue_type_script_setup_true_lang_default, header, content, footer, AddDataTableModal_vue_vue_type_style_index_0_lang_module_default, cssModules, AddDataTableModal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withKeys = _vueRuntimeEsmBundlerLegacy003Js.m;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInputLabel_default = _srcLegacy007Js.Y;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        DATA_TABLE_DETAILS = _constantsLegacy00NJs.Vn;
        PROJECT_DATA_TABLES = _constantsLegacy00NJs.ir;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_dataTableStoreLegacy01HJs) {
        useDataTableStore = _dataTableStoreLegacy01HJs.t;
      }, function (_ModalLegacy01JJs) {
        Modal_default = _ModalLegacy01JJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_f03xn_123 {\n  margin-bottom: var(--spacing--xs);\n}\n._content_f03xn_127 {\n  display: flex;\n  flex-direction: column;\n}\n._footer_f03xn_132 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  justify-content: flex-end;\n  margin-top: var(--spacing--lg);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/dataTable/components/AddDataTableModal.vue?vue&type=script&setup=true&lang.ts
        AddDataTableModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AddDataTableModal",
          props: {
            modalName: {}
          },
          setup(__props) {
            const props = __props;
            const dataTableStore = useDataTableStore();
            const uiStore = useUIStore();
            const route = useRoute();
            const router = useRouter();
            const i18n = useI18n();
            const toast = useToast();
            const telemetry = useTelemetry();
            const dataTableName = ref("");
            const inputRef = ref(null);
            onMounted(() => {
              setTimeout(() => {
                inputRef.value?.focus();
                inputRef.value?.select();
              }, 0);
            });
            const onSubmit = async () => {
              try {
                const newDataTable = await dataTableStore.createDataTable(dataTableName.value, route.params.projectId);
                telemetry.track("User created data table", {
                  data_table_id: newDataTable.id,
                  data_table_project_id: newDataTable.project?.id
                });
                dataTableName.value = "";
                uiStore.closeModal(props.modalName);
                router.push({
                  name: DATA_TABLE_DETAILS,
                  params: {
                    id: newDataTable.id
                  }
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("dataTable.add.error"));
              }
            };
            const onCancel = () => {
              uiStore.closeModal(props.modalName);
              redirectToDataTables();
            };
            const redirectToDataTables = () => {
              router.replace({
                name: PROJECT_DATA_TABLES
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: props.modalName,
                center: true,
                width: "540px",
                "before-close": redirectToDataTables
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createBaseVNode("h2", null, toDisplayString(unref(i18n).baseText("dataTable.add.title")), 1)], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("dataTable.add.input.name.label"),
                  required: true,
                  "input-name": "dataTableName"
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    ref_key: "inputRef",
                    ref: inputRef,
                    modelValue: dataTableName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => dataTableName.value = $event),
                    type: "text",
                    placeholder: unref(i18n).baseText("dataTable.add.input.name.placeholder"),
                    "data-test-id": "data-table-name-input",
                    name: "dataTableName",
                    onKeydown: withKeys(onSubmit, ["enter"])
                  }, null, 8, ["modelValue", "placeholder"])]),
                  _: 1
                }, 8, ["label"])], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  label: unref(i18n).baseText("generic.cancel"),
                  "data-test-id": "cancel-add-data-table-button",
                  onClick: onCancel
                }, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
                  disabled: !dataTableName.value,
                  label: unref(i18n).baseText("generic.create"),
                  "data-test-id": "confirm-add-data-table-button",
                  onClick: onSubmit
                }, null, 8, ["disabled", "label"])], 2)]),
                _: 1
              }, 8, ["name"]);
            };
          }
        }); //#endregion
        //#region src/features/core/dataTable/components/AddDataTableModal.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_f03xn_123";
        content = "_content_f03xn_127";
        footer = "_footer_f03xn_132";
        AddDataTableModal_vue_vue_type_style_index_0_lang_module_default = {
          header,
          content,
          footer
        }; //#endregion
        //#region src/features/core/dataTable/components/AddDataTableModal.vue
        cssModules = {
          "$style": AddDataTableModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", AddDataTableModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(AddDataTableModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();