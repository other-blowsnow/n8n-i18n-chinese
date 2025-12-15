;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-pg0njr0t.js", "./useTelemetry-legacy-BDcNi2-V.js", "./constants-legacy-BOwjEkaj.js", "./insights.constants-legacy-CQF1GF20.js", "./insights.utils-legacy-Dod909MV.js", "./smartDecimal-legacy-DBGZXJnQ.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, Fragment, withCtx, useCssModule, openBlock, renderList, createTextVNode, resolveComponent, normalizeClass, createBaseVNode, I18nT, useI18n, N8nCallout_default, N8nText_default, N8nIcon_default, N8nTooltip_default, N8nLink_default, __plugin_vue_export_helper_default, useRoute, useSettingsStore, useTelemetry, VIEWS, INSIGHTS_UNIT_IMPACT_MAPPING, INSIGHT_IMPACT_TYPES, getMatchingPreset, getTimeRangeLabels, formatDateRange, smartDecimal, __vite_style__, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, INSIGHTS_QUEUE_MODE_WARNING_DISMISSED_KEY, InsightsSummary_vue_vue_type_script_setup_true_lang_default, insightsWrapper, insights, activeTab, days, empty, icon, noData, positive, negative, neutral, loading, queueModeWarning, underlined, InsightsSummary_vue_vue_type_style_index_0_lang_module_default, cssModules, InsightsSummary_default;
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
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nCallout_default = _srcLegacy007Js.Bn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nLink_default = _srcLegacy007Js.ut;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.y;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_insightsConstantsLegacy03fJs) {
        INSIGHTS_UNIT_IMPACT_MAPPING = _insightsConstantsLegacy03fJs.i;
        INSIGHT_IMPACT_TYPES = _insightsConstantsLegacy03fJs.o;
      }, function (_insightsUtilsLegacy03hJs) {
        getMatchingPreset = _insightsUtilsLegacy03hJs.n;
        getTimeRangeLabels = _insightsUtilsLegacy03hJs.r;
        formatDateRange = _insightsUtilsLegacy03hJs.t;
      }, function (_smartDecimalLegacy04XJs) {
        smartDecimal = _smartDecimalLegacy04XJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._insightsWrapper_1vltt_123 {\n  position: relative;\n  padding: var(--spacing--xs) 0 0;\n  margin-bottom: var(--spacing--2xl);\n}\n._insights_1vltt_123 {\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n._insights_1vltt_123 ul {\n  display: flex;\n  height: 101px;\n  align-items: stretch;\n  justify-content: space-evenly;\n  border: var(--border-width) var(--border-style) var(--color--foreground);\n  border-radius: 6px;\n  list-style: none;\n  overflow-x: auto;\n}\n._insights_1vltt_123 ul li {\n  display: flex;\n  justify-content: stretch;\n  align-items: stretch;\n  flex: 1 0;\n  border-left: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._insights_1vltt_123 ul li:first-child {\n  border-left: 0;\n}\n._insights_1vltt_123 ul a {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  width: 100%;\n  height: 100%;\n  padding: var(--spacing--3xs) var(--spacing--lg) 0;\n  border-bottom: 3px solid transparent;\n}\n._insights_1vltt_123 ul a:hover {\n  background-color: var(--color--background--light-3);\n  transition: background-color 0.3s;\n}\n._insights_1vltt_123 ul a._activeTab_1vltt_166 {\n  background-color: var(--color--background--light-3);\n  border-color: var(--color--primary);\n  transition: background-color 0.3s ease-in-out;\n}\n._insights_1vltt_123 ul a strong {\n  justify-self: flex-start;\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  font-weight: 400;\n  white-space: nowrap;\n  margin-bottom: var(--spacing--3xs);\n}\n._insights_1vltt_123 ul a ._days_1vltt_179 {\n  padding: 0;\n  margin: 0 0 var(--spacing--xs);\n  color: var(--color--text--tint-1);\n  font-size: var(--font-size--2xs);\n  font-weight: var(--font-weight--regular);\n}\n._insights_1vltt_123 ul a span {\n  display: flex;\n  align-items: baseline;\n}\n._insights_1vltt_123 ul a span._empty_1vltt_190 em {\n  color: var(--color--text--tint-2);\n}\nbody[data-theme=dark] ._insights_1vltt_123 ul a span._empty_1vltt_190 em {\n  color: var(--color--text--tint-1);\n}\n._insights_1vltt_123 ul a span._empty_1vltt_190 small {\n  padding: 0;\n  height: 21px;\n  font-weight: var(--font-weight--bold);\n}\n._insights_1vltt_123 ul a span._empty_1vltt_190 small ._icon_1vltt_201 {\n  top: 5px;\n  transform: translateY(0);\n  color: var(--color--text--tint-1);\n}\n._insights_1vltt_123 ul a em {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-start;\n  color: var(--color--text--shade-1);\n  font-size: 24px;\n  line-height: 100%;\n  font-weight: 600;\n  font-style: normal;\n  gap: var(--spacing--5xs);\n}\n._insights_1vltt_123 ul a em i {\n  font-size: 22px;\n  font-style: normal;\n}\n._insights_1vltt_123 ul a small {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 0 0 14px;\n  margin: 0 0 0 var(--spacing--xs);\n  font-size: var(--font-size--2xs);\n  font-weight: var(--font-weight--bold);\n  white-space: nowrap;\n}\n._insights_1vltt_123 ._noData_1vltt_231 em {\n  color: var(--color--text--tint-1);\n  font-size: var(--font-size--md);\n}\n._positive_1vltt_236 {\n  color: var(--color--success);\n}\n._negative_1vltt_240 {\n  color: var(--color--danger);\n}\n._neutral_1vltt_244 {\n  color: var(--color--text--tint-1);\n}\n._neutral_1vltt_244 ._icon_1vltt_201 {\n  font-size: 17px;\n}\n._icon_1vltt_201 {\n  position: absolute;\n  font-size: 17px;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n._loading_1vltt_259 {\n  display: flex;\n  align-self: stretch;\n  align-items: stretch;\n}\n._loading_1vltt_259 > div {\n  margin: 0;\n  height: auto;\n  border-radius: inherit;\n}\n._queueModeWarning_1vltt_270 {\n  margin-bottom: var(--spacing--xs);\n}\n._queueModeWarning_1vltt_270 a {\n  text-decoration: none;\n}\n._queueModeWarning_1vltt_270 a ._underlined_1vltt_276 {\n  text-decoration: underline;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/insights/components/InsightsSummary.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          "data-test-id": "insights-summary-tabs"
        };
        _hoisted_2 = ["data-test-id"];
        _hoisted_3 = ["href"];
        _hoisted_4 = {
          key: 1
        };
        INSIGHTS_QUEUE_MODE_WARNING_DISMISSED_KEY = "n8n-insights-queue-mode-warning-dismissed";
        InsightsSummary_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsSummary",
          props: {
            summary: {},
            startDate: {},
            endDate: {},
            loading: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const route = useRoute();
            const $style = useCssModule();
            const telemetry = useTelemetry();
            const settingsStore = useSettingsStore();
            const timeRangeLabels = getTimeRangeLabels();
            const isQueueModeWarningDismissed = ref(false);
            onMounted(() => {
              isQueueModeWarningDismissed.value = localStorage.getItem(INSIGHTS_QUEUE_MODE_WARNING_DISMISSED_KEY) === "true";
            });
            const dismissQueueModeWarning = () => {
              localStorage.setItem(INSIGHTS_QUEUE_MODE_WARNING_DISMISSED_KEY, "true");
              isQueueModeWarningDismissed.value = true;
            };
            const shouldShowQueueModeWarning = computed(() => {
              return settingsStore.isQueueModeEnabled && !isQueueModeWarningDismissed.value;
            });
            const displayDateRangeLabel = computed(() => {
              const timeRangeKey = getMatchingPreset({
                start: props.startDate,
                end: props.endDate
              });
              if (timeRangeKey) return timeRangeLabels[timeRangeKey];
              return formatDateRange({
                start: props.startDate,
                end: props.endDate
              });
            });
            const summaryTitles = computed(() => ({
              total: i18n.baseText("insights.banner.title.total"),
              failed: i18n.baseText("insights.banner.title.failed"),
              failureRate: i18n.baseText("insights.banner.title.failureRate"),
              timeSaved: i18n.baseText("insights.banner.title.timeSaved"),
              averageRunTime: i18n.baseText("insights.banner.title.averageRunTime")
            }));
            const summaryHasNoData = computed(() => {
              const summaryValues = Object.values(props.summary);
              return summaryValues.length > 0 && summaryValues.every(summary => !summary.value);
            });
            const summaryWithRouteLocations = computed(() => props.summary.map(s => ({
              ...s,
              to: {
                name: VIEWS.INSIGHTS,
                params: {
                  insightType: s.id
                },
                query: route.query
              }
            })));
            const getImpactStyle = (id, value) => {
              const impact = INSIGHTS_UNIT_IMPACT_MAPPING[id];
              if (value === 0 || impact === INSIGHT_IMPACT_TYPES.NEUTRAL) return $style.neutral;
              if (impact === INSIGHT_IMPACT_TYPES.POSITIVE) return value > 0 ? $style.positive : $style.negative;
              if (impact === INSIGHT_IMPACT_TYPES.NEGATIVE) return value < 0 ? $style.positive : $style.negative;
              return $style.neutral;
            };
            const trackTabClick = insightType => {
              telemetry.track(`User clicked ${summaryTitles.value[insightType]}`, {
                referrer: route.name === VIEWS.INSIGHTS ? "Dashboard" : "Overview"
              });
            };
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(unref($style).insightsWrapper)
              }, [shouldShowQueueModeWarning.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 0,
                class: normalizeClass(unref($style).queueModeWarning),
                theme: "warning",
                "data-test-id": "insights-queue-mode-warning",
                "round-corners": ""
              }, {
                trailingContent: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "x",
                  title: unref(i18n).baseText("generic.dismiss"),
                  class: "clickable",
                  "data-test-id": "insights-queue-mode-warning-close",
                  onClick: dismissQueueModeWarning
                }, null, 8, ["title"])]),
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  color: "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.queueMode.warning")) + " ", 1), createVNode(unref(N8nLink_default), {
                    size: "small",
                    href: unref(i18n).baseText("insights.banner.queueMode.warning.link.url"),
                    "new-window": "",
                    theme: "text",
                    underline: false
                  }, {
                    default: withCtx(() => [createBaseVNode("span", {
                      class: normalizeClass(unref($style).underlined)
                    }, toDisplayString(unref(i18n).baseText("insights.banner.queueMode.warning.link.text")), 3), _cache[0] || (_cache[0] = createTextVNode(" ↗ "))]),
                    _: 1
                  }, 8, ["href"])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(unref($style).insights)
              }, [createBaseVNode("ul", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(summaryWithRouteLocations.value, ({
                id,
                value,
                deviation,
                deviationUnit,
                unit,
                to
              }) => {
                return openBlock(), createElementBlock("li", {
                  key: id,
                  "data-test-id": `insights-summary-tab-${id}`
                }, [createVNode(unref(N8nTooltip_default), {
                  placement: unref(route).name === unref(VIEWS).INSIGHTS ? "bottom" : "top",
                  disabled: !(summaryHasNoData.value && id === "total"),
                  "show-after": 500
                }, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    keypath: "insights.banner.noData.tooltip",
                    scope: "global"
                  }, {
                    link: withCtx(() => [createBaseVNode("a", {
                      href: unref(i18n).baseText("insights.banner.noData.tooltip.link.url"),
                      target: "_blank"
                    }, toDisplayString(unref(i18n).baseText("insights.banner.noData.tooltip.link")), 9, _hoisted_3)]),
                    _: 1
                  })]),
                  default: withCtx(() => [createVNode(_component_RouterLink, {
                    to,
                    "exact-active-class": unref($style).activeTab,
                    onClick: $event => trackTabClick(id)
                  }, {
                    default: withCtx(() => [createBaseVNode("strong", null, [createVNode(unref(N8nTooltip_default), {
                      placement: "bottom",
                      disabled: id !== "timeSaved"
                    }, {
                      content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.title.timeSaved.tooltip")), 1)]),
                      default: withCtx(() => [createTextVNode(" " + toDisplayString(summaryTitles.value[id]), 1)]),
                      _: 2
                    }, 1032, ["disabled"])]), createBaseVNode("small", {
                      class: normalizeClass(unref($style).days)
                    }, toDisplayString(displayDateRangeLabel.value), 3), value === 0 && id === "timeSaved" ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      class: normalizeClass(unref($style).empty)
                    }, [_cache[1] || (_cache[1] = createBaseVNode("em", null, "--", -1)), createBaseVNode("small", null, [createVNode(unref(N8nTooltip_default), {
                      placement: "bottom"
                    }, {
                      content: withCtx(() => [createVNode(unref(I18nT), {
                        keypath: "insights.banner.timeSaved.tooltip",
                        scope: "global"
                      }, {
                        link: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.timeSaved.tooltip.link.text")), 1)]),
                        _: 1
                      })]),
                      default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                        class: normalizeClass(unref($style).icon),
                        icon: "info",
                        size: "medium"
                      }, null, 8, ["class"])]),
                      _: 1
                    })])], 2)) : (openBlock(), createElementBlock("span", _hoisted_4, [createBaseVNode("em", null, [createTextVNode(toDisplayString(unref(smartDecimal)(value).toLocaleString("en-US")) + " ", 1), createBaseVNode("i", null, toDisplayString(unit), 1)]), deviation !== null ? (openBlock(), createElementBlock("small", {
                      key: 0,
                      class: normalizeClass(getImpactStyle(id, deviation))
                    }, [createVNode(unref(N8nIcon_default), {
                      class: normalizeClass([unref($style).icon, getImpactStyle(id, deviation)]),
                      icon: deviation === 0 ? "chevron-right" : deviation > 0 ? "chevron-up" : "chevron-down"
                    }, null, 8, ["class", "icon"]), createVNode(unref(N8nTooltip_default), {
                      placement: "bottom",
                      disabled: id !== "failureRate"
                    }, {
                      content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.failureRate.deviation.tooltip")), 1)]),
                      default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(smartDecimal)(Math.abs(deviation)).toLocaleString("en-US")) + toDisplayString(deviationUnit), 1)]),
                      _: 2
                    }, 1032, ["disabled"])], 2)) : createCommentVNode("", true)]))]),
                    _: 2
                  }, 1032, ["to", "exact-active-class", "onClick"])]),
                  _: 2
                }, 1032, ["placement", "disabled"])], 8, _hoisted_2);
              }), 128))])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/InsightsSummary.vue?vue&type=style&index=0&lang.module.scss
        insightsWrapper = "_insightsWrapper_1vltt_123";
        insights = "_insights_1vltt_123";
        activeTab = "_activeTab_1vltt_166";
        days = "_days_1vltt_179";
        empty = "_empty_1vltt_190";
        icon = "_icon_1vltt_201";
        noData = "_noData_1vltt_231";
        positive = "_positive_1vltt_236";
        negative = "_negative_1vltt_240";
        neutral = "_neutral_1vltt_244";
        loading = "_loading_1vltt_259";
        queueModeWarning = "_queueModeWarning_1vltt_270";
        underlined = "_underlined_1vltt_276";
        InsightsSummary_vue_vue_type_style_index_0_lang_module_default = {
          insightsWrapper,
          insights,
          activeTab,
          days,
          empty,
          icon,
          noData,
          positive,
          negative,
          neutral,
          loading,
          queueModeWarning,
          underlined
        }; //#endregion
        //#region src/features/execution/insights/components/InsightsSummary.vue
        cssModules = {
          "$style": InsightsSummary_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", InsightsSummary_default = /* @__PURE__ */__plugin_vue_export_helper_default(InsightsSummary_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();