;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./SeverityTag-legacy-BHeAn8qg.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, renderSlot, withCtx, useCssModule, openBlock, renderList, createTextVNode, createBaseVNode, useI18n, useAsyncState, N8nIcon_default, N8nText_default, N8nButton_default, N8nTabs_default, N8nLink_default, N8nLoading_default, N8nTooltip_default, __plugin_vue_export_helper_default, VIEWS, useRootStore, refreshReport, getReport, SeverityTag_default, __vite_style__, EmptyTab_vue_vue_type_script_setup_true_lang_default, NoIssuesContainer$1, EmptyTab_vue_vue_type_style_index_0_lang_module_default, cssModules$1, EmptyTab_default, _hoisted_1, MigrationRules_vue_vue_type_script_setup_true_lang_default, CardContainer, Card, CardTitleContainer, NoLineBreak, ActionBar, NoIssuesContainer, PLoading, MigrationRules_vue_vue_type_style_index_0_lang_module_default, cssModules, MigrationRules_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nButton_default = _srcLegacy007Js.Rn;
        N8nTabs_default = _srcLegacy007Js.g;
        N8nLink_default = _srcLegacy007Js.ht;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.Oo;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {
        useRootStore = _useRootStoreLegacy00TJs.t;
      }, function (_SeverityTagLegacy079Js) {
        refreshReport = _SeverityTagLegacy079Js.i;
        getReport = _SeverityTagLegacy079Js.n;
        SeverityTag_default = _SeverityTagLegacy079Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._NoIssuesContainer_1o8ra_2 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tpadding: var(--spacing--4xl) 0;\n}\n\n._CardContainer_150ni_2 {\n\tborder: var(--border);\n\tborder-radius: var(--radius);\n._Card_150ni_2 {\n&:first-child {\n\t\t\tborder-top-left-radius: inherit;\n\t\t\tborder-top-right-radius: inherit;\n}\n&:last-child {\n\t\t\tborder-bottom-left-radius: inherit;\n\t\t\tborder-bottom-right-radius: inherit;\n}\n&:not(:last-child) {\n\t\t\tborder-bottom: var(--border);\n}\n}\n}\n._Card_150ni_2 {\n\tpadding: var(--spacing--sm) var(--spacing--md);\n\tdisplay: grid;\n\tgrid-template-columns: 4fr 1fr;\n\talign-items: center;\n\tgap: var(--spacing--md);\n\tbackground-color: var(--color--background--light-3);\n}\n._CardTitleContainer_150ni_32 {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: var(--spacing--2xs);\n\tgap: var(--spacing--2xs);\n}\n._NoLineBreak_150ni_39 {\n\twhite-space: nowrap;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgap: var(--spacing--4xs);\n}\n._ActionBar_150ni_46 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-bottom: var(--spacing--sm);\n}\n._NoIssuesContainer_150ni_53 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tpadding: var(--spacing--4xl) 0;\n}\n._PLoading_150ni_62 {\n.el-skeleton__p {\n\t\tmargin-top: 0;\n}\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/migrationReport/components/EmptyTab.vue?vue&type=script&setup=true&lang.ts
        EmptyTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EmptyTab",
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.NoIssuesContainer)
              }, [createVNode(unref(N8nText_default), {
                tag: "h3",
                size: "large",
                color: "text-base",
                class: "mb-2xs"
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
                _: 3
              }), createVNode(unref(N8nText_default), {
                tag: "p",
                size: "medium",
                color: "text-light",
                class: "mb-2xl"
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "description")]),
                _: 3
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/migrationReport/components/EmptyTab.vue?vue&type=style&index=0&lang.module.css
        NoIssuesContainer$1 = "_NoIssuesContainer_1o8ra_2";
        EmptyTab_vue_vue_type_style_index_0_lang_module_default = {
          NoIssuesContainer: NoIssuesContainer$1
        }; //#endregion
        //#region src/features/settings/migrationReport/components/EmptyTab.vue
        cssModules$1 = {
          "$style": EmptyTab_vue_vue_type_style_index_0_lang_module_default
        };
        EmptyTab_default = /* @__PURE__ */__plugin_vue_export_helper_default(EmptyTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/migrationReport/MigrationRules.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          style: {
            "max-width": "700px",
            "margin": "0 auto",
            "padding-bottom": "40px"
          }
        };
        MigrationRules_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MigrationRules",
          setup(__props) {
            const $style = useCssModule();
            const rootStore = useRootStore();
            const i18n = useI18n();
            const currentTab = ref("workflow-issues");
            const {
              state,
              isLoading,
              execute
            } = useAsyncState(async (refresh = false) => {
              if (refresh) {
                const response = await refreshReport(rootStore.restApiContext);
                if (response.report.workflowResults.length === 0 && response.report.instanceResults.length > 0) currentTab.value = "instance-issues";
                return response;
              }
              return await getReport(rootStore.restApiContext);
            }, void 0);
            async function refreshReport$1() {
              await execute(0, true);
            }
            const tabs = computed(() => {
              return [{
                label: i18n.baseText("settings.migrationReport.tabs.workflowIssues"),
                value: "workflow-issues",
                tag: state.value?.report.workflowResults.length ? String(state.value.report.workflowResults.length) : void 0
              }, {
                label: i18n.baseText("settings.migrationReport.tabs.instanceIssues"),
                value: "instance-issues",
                tag: state.value?.report.instanceResults.length ? String(state.value.report.instanceResults.length) : void 0
              }];
            });
            const workflowTooltips = computed(() => {
              return {
                critical: i18n.baseText("settings.migrationReport.workflowTooltip.critical"),
                medium: i18n.baseText("settings.migrationReport.workflowTooltip.medium"),
                low: i18n.baseText("settings.migrationReport.workflowTooltip.low")
              };
            });
            const instanceTooltips = computed(() => {
              return {
                critical: i18n.baseText("settings.migrationReport.instanceTooltip.critical"),
                medium: i18n.baseText("settings.migrationReport.instanceTooltip.medium"),
                low: i18n.baseText("settings.migrationReport.instanceTooltip.low")
              };
            });
            const compatibleWorkflowsCount = computed(() => {
              if (!state.value) return 0;
              return state.value.totalWorkflows - state.value.report.workflowResults.reduce((acc, issue) => acc + issue.nbAffectedWorkflows, 0);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nText_default), {
                tag: "h2",
                size: "xlarge",
                color: "text-dark",
                class: "mb-2xs"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.title")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                tag: "p",
                color: "text-base",
                class: "mb-2xl"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.description", {
                  interpolate: {
                    compatibleCount: String(compatibleWorkflowsCount.value),
                    totalCount: String(unref(state)?.totalWorkflows ?? 0)
                  }
                })), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(unref($style).ActionBar)
              }, [createVNode(unref(N8nTabs_default), {
                modelValue: currentTab.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => currentTab.value = $event),
                options: tabs.value,
                variant: "modern"
              }, null, 8, ["modelValue", "options"]), unref(state)?.shouldCache ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                label: unref(i18n).baseText("settings.migrationReport.refreshButton"),
                icon: "refresh-cw",
                type: "secondary",
                onClick: refreshReport$1
              }, null, 8, ["label"])) : createCommentVNode("", true)], 2), unref(isLoading) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref($style).CardContainer)
              }, [(openBlock(), createElementBlock(Fragment, null, renderList(4, i => {
                return createBaseVNode("div", {
                  key: i,
                  class: normalizeClass(unref($style).Card)
                }, [createBaseVNode("div", null, [createVNode(unref(N8nLoading_default), {
                  variant: "p",
                  rows: 3,
                  class: normalizeClass(unref($style).PLoading)
                }, null, 8, ["class"])]), createVNode(unref(N8nLoading_default), {
                  variant: "button"
                })], 2);
              }), 64))], 2)) : currentTab.value === "workflow-issues" ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [unref(state)?.report.workflowResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, {
                key: 0
              }, {
                title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.title")), 1)]),
                description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.description")), 1)]),
                _: 1
              })) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref($style).CardContainer)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state)?.report.workflowResults, issue => {
                return openBlock(), createElementBlock("div", {
                  key: issue.ruleId,
                  class: normalizeClass(unref($style).Card)
                }, [createBaseVNode("div", null, [createBaseVNode("div", {
                  class: normalizeClass(unref($style).CardTitleContainer)
                }, [createVNode(unref(N8nText_default), {
                  tag: "h3",
                  size: "medium",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleTitle), 1)]),
                  _: 2
                }, 1024), createVNode(unref(N8nTooltip_default), {
                  content: workflowTooltips.value[issue.ruleSeverity],
                  placement: "top",
                  enterable: false
                }, {
                  default: withCtx(() => [createVNode(SeverityTag_default, {
                    severity: issue.ruleSeverity
                  }, null, 8, ["severity"])]),
                  _: 2
                }, 1032, ["content"])], 2), createVNode(unref(N8nText_default), {
                  tag: "p",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
                    key: 0,
                    theme: "text",
                    underline: "",
                    href: issue.ruleDocumentationUrl,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, {
                    default: withCtx(() => [createBaseVNode("u", {
                      class: normalizeClass(unref($style).NoLineBreak)
                    }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), {
                      icon: "external-link"
                    })], 2)]),
                    _: 2
                  }, 1032, ["href"])) : createCommentVNode("", true)]),
                  _: 2
                }, 1024)]), createVNode(unref(N8nLink_default), {
                  class: normalizeClass(unref($style).NoLineBreak),
                  theme: "text",
                  to: {
                    name: unref(VIEWS).MIGRATION_RULE_REPORT,
                    params: {
                      migrationRuleId: issue.ruleId
                    }
                  }
                }, {
                  default: withCtx(() => [createBaseVNode("span", {
                    class: normalizeClass(unref($style).NoLineBreak)
                  }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.workflowsCount", {
                    interpolate: {
                      count: issue.nbAffectedWorkflows
                    }
                  })) + " ", 1), createVNode(unref(N8nIcon_default), {
                    icon: "chevron-right",
                    size: 24
                  })], 2)]),
                  _: 2
                }, 1032, ["class", "to"])], 2);
              }), 128))], 2))], 64)) : currentTab.value === "instance-issues" ? (openBlock(), createElementBlock(Fragment, {
                key: 2
              }, [unref(state)?.report.instanceResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, {
                key: 0
              }, {
                title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.title")), 1)]),
                description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.description")), 1)]),
                _: 1
              })) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref($style).CardContainer)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state)?.report.instanceResults, issue => {
                return openBlock(), createElementBlock("div", {
                  key: issue.ruleId,
                  class: normalizeClass(unref($style).Card)
                }, [createBaseVNode("div", null, [createBaseVNode("div", {
                  class: normalizeClass(unref($style).CardTitleContainer)
                }, [createVNode(unref(N8nText_default), {
                  tag: "h3"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleTitle), 1)]),
                  _: 2
                }, 1024), createVNode(unref(N8nTooltip_default), {
                  content: instanceTooltips.value[issue.ruleSeverity],
                  placement: "top",
                  enterable: false
                }, {
                  default: withCtx(() => [createVNode(SeverityTag_default, {
                    severity: issue.ruleSeverity
                  }, null, 8, ["severity"])]),
                  _: 2
                }, 1032, ["content"])], 2), createVNode(unref(N8nText_default), {
                  tag: "p",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
                    key: 0,
                    theme: "text",
                    underline: "",
                    href: issue.ruleDocumentationUrl,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, {
                    default: withCtx(() => [createBaseVNode("u", {
                      class: normalizeClass(unref($style).NoLineBreak)
                    }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), {
                      icon: "external-link"
                    })], 2)]),
                    _: 2
                  }, 1032, ["href"])) : createCommentVNode("", true)]),
                  _: 2
                }, 1024)])], 2);
              }), 128))], 2))], 64)) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/migrationReport/MigrationRules.vue?vue&type=style&index=0&lang.module.css
        CardContainer = "_CardContainer_150ni_2";
        Card = "_Card_150ni_2";
        CardTitleContainer = "_CardTitleContainer_150ni_32";
        NoLineBreak = "_NoLineBreak_150ni_39";
        ActionBar = "_ActionBar_150ni_46";
        NoIssuesContainer = "_NoIssuesContainer_150ni_53";
        PLoading = "_PLoading_150ni_62";
        MigrationRules_vue_vue_type_style_index_0_lang_module_default = {
          CardContainer,
          Card,
          CardTitleContainer,
          NoLineBreak,
          ActionBar,
          NoIssuesContainer,
          PLoading
        }; //#endregion
        //#region src/features/settings/migrationReport/MigrationRules.vue
        cssModules = {
          "$style": MigrationRules_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", MigrationRules_default = /* @__PURE__ */__plugin_vue_export_helper_default(MigrationRules_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();