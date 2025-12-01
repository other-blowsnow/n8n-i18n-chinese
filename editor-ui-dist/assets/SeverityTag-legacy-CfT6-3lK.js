;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./src-legacy-6DYpZVh_.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./_baseOrderBy-legacy-DT_yzgQM.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, useCssModule, openBlock, normalizeClass, N8nTag_default, __plugin_vue_export_helper_default, get, makeRestApiRequest, __vite_style__, SeverityTag_vue_vue_type_script_setup_true_lang_default, TagCritical, TagMedium, TagLow, SeverityTag_vue_vue_type_style_index_0_lang_module_default, cssModules, SeverityTag_default;
    //#region ../@n8n/rest-api-client/dist/api/breaking-changes.mjs
    async function getReport(context, query) {
      return (await get(context.baseUrl, "/breaking-changes/report", query)).data;
    }
    async function refreshReport(context, query) {
      return await makeRestApiRequest(context, "POST", query?.version ? `/breaking-changes/report/refresh?version=${query.version}` : "/breaking-changes/report/refresh");
    }
    async function getReportForRule(context, ruleId) {
      return (await get(context.baseUrl, `/breaking-changes/report/${ruleId}`)).data;
    }

    //#endregion
    //#region src/features/settings/migrationReport/components/SeverityTag.vue?vue&type=script&setup=true&lang.ts
    _export({
      i: refreshReport,
      n: getReport,
      r: getReportForRule
    });
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
      }, function (_srcLegacy007Js) {
        N8nTag_default = _srcLegacy007Js.v;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_baseOrderByLegacy00XJs) {
        get = _baseOrderByLegacy00XJs.c;
        makeRestApiRequest = _baseOrderByLegacy00XJs.u;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._TagCritical_1mw62_2 {\n\tcolor: var(--color--danger);\n\tbackground-color: var(--color--primary--tint-3);\n\tborder: 0;\n}\n._TagMedium_1mw62_8 {\n\tcolor: var(--color--warning);\n\tbackground-color: var(--color--warning--tint-2);\n\tborder: 0;\n}\n._TagLow_1mw62_14 {\n\tborder: 0;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        SeverityTag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          name: "N8nTag",
          __name: "SeverityTag",
          props: {
            severity: {}
          },
          setup(__props) {
            const $style = useCssModule();
            const tagsI18n = computed(() => ({
              critical: "Critical",
              medium: "Medium",
              low: "Low"
            }));
            const tagClasses = {
              critical: $style.TagCritical,
              medium: $style.TagMedium,
              low: $style.TagLow
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTag_default), {
                text: tagsI18n.value[_ctx.severity],
                clickable: false,
                class: normalizeClass(tagClasses[_ctx.severity])
              }, null, 8, ["text", "class"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/migrationReport/components/SeverityTag.vue?vue&type=style&index=0&lang.module.css
        TagCritical = "_TagCritical_1mw62_2";
        TagMedium = "_TagMedium_1mw62_8";
        TagLow = "_TagLow_1mw62_14";
        SeverityTag_vue_vue_type_style_index_0_lang_module_default = {
          TagCritical,
          TagMedium,
          TagLow
        }; //#endregion
        //#region src/features/settings/migrationReport/components/SeverityTag.vue
        cssModules = {
          "$style": SeverityTag_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", SeverityTag_default = /* @__PURE__ */__plugin_vue_export_helper_default(SeverityTag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();