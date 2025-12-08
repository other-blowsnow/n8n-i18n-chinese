;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-B7Y_hCM_.js", "./icon-legacy-BY20yo2X.js", "./overlay-legacy-CXMgVVsR.js", "./empty-legacy-ZG0-xpne.js", "./dialog-legacy-rX7N7U_z.js", "./useTelemetry-legacy-CBjbIfKX.js", "./useToast-legacy-Bs0yTjbT.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-DVoQkFTS.js", "./merge-legacy-DGYepJ5X.js", "./_baseOrderBy-legacy-CowL7g45.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-aeZbWFlx.js", "./useExternalHooks-legacy-m8Ri2ypi.js", "./useStyles-legacy-E8NPEyeD.js", "./cloudPlan.store-legacy-C4eAilUn.js", "./versions.store-legacy-BVN2UFoo.js", "./usePageRedirectionHelper-legacy-CiePbo1_.js", "./ProjectIcon-legacy-D09JqkUx.js", "./orderBy-legacy-DJAeMB1W.js", "./ProjectSharing-legacy-BF7CQSJT.js", "./insights.store-legacy-MuZ9cddG.js", "./insights.constants-legacy-CQF1GF20.js", "./insights.utils-legacy-Cbns7OJY.js", "./smartDecimal-legacy-DBGZXJnQ.js", "./InsightsSummary-legacy-DJ_y3vdn.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineAsyncComponent, defineComponent, createBlock, onMounted, Fragment, watch, withCtx, resolveDynamicComponent, openBlock, useModel, renderList, createTextVNode, onBeforeMount, normalizeClass, createBaseVNode, shallowRef, useI18n, N8nButton_default, N8nSpinner_default, N8nText_default, N8nIcon_default, DateRangePicker_default, N8nHeading_default, __vitePreload, __plugin_vue_export_helper_default, useRoute, ElDialog, useProjectsStore, useDocumentTitle, useTelemetry, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3, $11d87f3f76e88657$export$b21e0b124e224484, $14e0f24ef4ac5c92$export$629b0a497aa65267, $14e0f24ef4ac5c92$export$aa8b41735afcabd2, $14e0f24ef4ac5c92$export$461939dd4422153, usePageRedirectionHelper, ProjectSharing_default, useInsightsStore, INSIGHT_TYPES, timeRangeMappings, getTimeRangeLabels, formatDateRange, InsightsSummary_default, __vite_style__, _hoisted_1$1, InsightsUpgradeModal_vue_vue_type_script_setup_true_lang_default, InsightsUpgradeModal_default, InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default, PresetButton$1, LockIcon, InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default, cssModules$1, InsightsDataRangePicker_default, _hoisted_1, InsightsDashboard_vue_vue_type_script_setup_true_lang_default, insightsView, insightsContainer, insightsBanner, insightsContent, insightsContentWrapper, insightsChartWrapper, insightsTableWrapper, dataLoader, isDataLoading, projectSelect, PresetButton, InsightsDashboard_vue_vue_type_style_index_0_lang_module_default, cssModules, InsightsDashboard_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        shallowRef = _vueRuntimeEsmBundlerLegacy003Js.zt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nSpinner_default = _srcLegacy007Js.Un;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        DateRangePicker_default = _srcLegacy007Js.r;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_dialogLegacy00DJs) {
        ElDialog = _dialogLegacy00DJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useProjectsStore = _useTelemetryLegacy00HJs.En;
        useDocumentTitle = _useTelemetryLegacy00HJs.Tn;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {
        $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3 = _CalendarDateLegacy00NJs.h;
        $11d87f3f76e88657$export$b21e0b124e224484 = _CalendarDateLegacy00NJs.i;
        $14e0f24ef4ac5c92$export$629b0a497aa65267 = _CalendarDateLegacy00NJs.l;
        $14e0f24ef4ac5c92$export$aa8b41735afcabd2 = _CalendarDateLegacy00NJs.m;
        $14e0f24ef4ac5c92$export$461939dd4422153 = _CalendarDateLegacy00NJs.s;
      }, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {}, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_versionsStoreLegacy01LJs) {}, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_ProjectIconLegacy02fJs) {}, function (_orderByLegacy02VJs) {}, function (_ProjectSharingLegacy02XJs) {
        ProjectSharing_default = _ProjectSharingLegacy02XJs.t;
      }, function (_insightsStoreLegacy03dJs) {
        useInsightsStore = _insightsStoreLegacy03dJs.t;
      }, function (_insightsConstantsLegacy03fJs) {
        INSIGHT_TYPES = _insightsConstantsLegacy03fJs.s;
      }, function (_insightsUtilsLegacy03hJs) {
        timeRangeMappings = _insightsUtilsLegacy03hJs.i;
        getTimeRangeLabels = _insightsUtilsLegacy03hJs.r;
        formatDateRange = _insightsUtilsLegacy03hJs.t;
      }, function (_smartDecimalLegacy04XJs) {}, function (_InsightsSummaryLegacy04ZJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n.perks-list {\n&[data-v-528a05c4] {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--spacing--sm);\n}\n> li[data-v-528a05c4] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: var(--spacing--2xs);\n}\n}\n\n._PresetButton_1waws_2 {\n\t--button--border-color: transparent;\n\ttext-align: left;\n\tdisplay: flex;\n}\n._LockIcon_1waws_7 {\n\tmargin-left: auto;\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._insightsView_ttte2_123 {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  overflow: auto;\n}\n._insightsContainer_ttte2_131 {\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--lg) var(--spacing--2xl);\n  margin: 0 auto;\n}\n._insightsBanner_ttte2_138 {\n  margin-bottom: 0;\n}\n._insightsBanner_ttte2_138 ul {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n._insightsContent_ttte2_146 {\n  padding: var(--spacing--lg) 0;\n  border: var(--border-width) var(--border-style) var(--color--foreground);\n  border-top: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  background: var(--color--background--light-3);\n}\n._insightsContentWrapper_ttte2_155 {\n  position: relative;\n  overflow-x: hidden;\n}\n._insightsChartWrapper_ttte2_160 {\n  position: relative;\n  height: 292px;\n  padding: 0 var(--spacing--lg);\n  z-index: 1;\n}\n._insightsTableWrapper_ttte2_167 {\n  position: relative;\n  padding: var(--spacing--lg) var(--spacing--lg) 0;\n  z-index: 1;\n}\n._dataLoader_ttte2_173 {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  z-index: 2;\n}\n._dataLoader_ttte2_173._isDataLoading_ttte2_186 {\n  transition: left 0s linear;\n  left: 0;\n  transition-delay: 0.5s;\n}\n._dataLoader_ttte2_173 > span {\n  position: relative;\n  z-index: 2;\n}\n._dataLoader_ttte2_173::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color--background--light-3);\n  opacity: 0.75;\n  z-index: 1;\n}\n._projectSelect_ttte2_208 {\n  min-width: 200px;\n}\n._projectSelect_ttte2_208 .el-input--suffix .el-input__inner {\n  padding-right: 26px;\n}\n._PresetButton_ttte2_215 {\n  background-color: transparent;\n  border: none;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 0.15s;\n  border-radius: 0.375rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  text-align: left;\n  font-size: 13px;\n  cursor: pointer;\n  color: var(--color--text);\n  font-weight: 400;\n}\n._PresetButton_ttte2_215:hover {\n  background-color: var(--color--foreground--tint-1);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/insights/components/InsightsUpgradeModal.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          class: "perks-list"
        };
        InsightsUpgradeModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsUpgradeModal",
          props: {
            "modelValue": {
              type: Boolean
            },
            "modelModifiers": {}
          },
          emits: ["update:modelValue"],
          setup(__props) {
            const model = useModel(__props, "modelValue");
            const i18n = useI18n();
            function goToUpgrade() {
              model.value = false;
              usePageRedirectionHelper().goToUpgrade("insights", "upgrade-insights");
            }
            const perks = computed(() => [...Array(3).keys()].map(index => i18n.baseText(`insights.upgradeModal.perks.${index}`)));
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                modelValue: model.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => model.value = $event),
                title: unref(i18n).baseText("insights.upgradeModal.title"),
                width: "500"
              }, {
                footer: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  onClick: _cache[0] || (_cache[0] = $event => model.value = false)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.button.dismiss")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  onClick: goToUpgrade
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
                  _: 1
                })])]),
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
                  tag: "p",
                  class: "mb-s"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.content")), 1)]),
                  _: 1
                }), createBaseVNode("ul", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(perks.value, perk => {
                  return openBlock(), createBlock(unref(N8nText_default), {
                    key: perk,
                    color: "text-dark",
                    tag: "li"
                  }, {
                    default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 16 16",
                      width: "16px",
                      height: "16px"
                    }, [createBaseVNode("path", {
                      d: "M 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z M 3.97 9.03 L 5.97 11.03 L 6.5 11.561 L 7.03 11.03 L 12.53 5.53 L 11.47 4.47 L 6.5 9.439 L 5.03 7.97 L 3.97 9.03 Z",
                      fill: "currentColor"
                    })], -1)), createTextVNode(" " + toDisplayString(perk), 1)]),
                    _: 2
                  }, 1024);
                }), 128))])])]),
                _: 1
              }, 8, ["modelValue", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/InsightsUpgradeModal.vue
        InsightsUpgradeModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(InsightsUpgradeModal_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-528a05c4"]]); //#endregion
        //#region src/features/execution/insights/components/InsightsDataRangePicker.vue?vue&type=script&setup=true&lang.ts
        InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsDataRangePicker",
          props: {
            maxValue: {},
            minValue: {},
            modelValue: {},
            presets: {}
          },
          emits: ["update:modelValue", "update:placeholder", "update:startValue", "update:open"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const telemetry = useTelemetry();
            const upgradeModal = ref(false);
            function showUpgradeModal() {
              upgradeModal.value = true;
            }
            const actionType = ref("custom");
            function getDaysDiff({
              start,
              end
            }) {
              if (!start) return 0;
              if (!end) return 0;
              return end.compare(start);
            }
            function isBeforeOrSame(dateToCompare, referenceDate) {
              return dateToCompare.compare(referenceDate) <= 0;
            }
            function isAfterOrSame(dateToCompare, referenceDate) {
              return dateToCompare.compare(referenceDate) >= 0;
            }
            function isEqual(dateToCompare, referenceDate) {
              if (!dateToCompare || !referenceDate) return false;
              return dateToCompare.compare(referenceDate) === 0;
            }
            function isValidDateRange({
              start,
              end
            }) {
              if (!start) return false;
              if (!end) return false;
              return isBeforeOrSame(end, props.maxValue) && isAfterOrSame(start, props.minValue);
            }
            const range = shallowRef({
              start: props.modelValue.start?.copy(),
              end: props.modelValue.end?.copy()
            });
            function syncWithParentValue() {
              if (!isEqual(range.value?.start, props.modelValue.start) || !isEqual(range.value?.end, props.modelValue.end)) range.value = {
                start: props.modelValue.start?.copy(),
                end: props.modelValue.end?.copy()
              };
            }
            function syncData(isOpen) {
              if (isOpen) {
                syncWithParentValue();
                return;
              }
              const normalizedRange = {
                start: range.value?.start?.copy(),
                end: range.value?.end?.copy() ?? range.value?.start?.copy()
              };
              if (!isValidDateRange(normalizedRange)) {
                console.error("Invalid date range selected", normalizedRange);
                syncWithParentValue();
                return;
              }
              if (isEqual(normalizedRange.start, props.modelValue.start) && isEqual(normalizedRange.end, props.modelValue.end)) return;
              emit("update:modelValue", normalizedRange);
              const trackData = {
                start_date: normalizedRange.start?.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2()).toISOString(),
                end_date: normalizedRange.end?.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2()).toISOString(),
                range_length_days: getDaysDiff(normalizedRange),
                type: actionType.value
              };
              telemetry.track("User updated insights time range", trackData);
            }
            const open = ref(false);
            watch(open, opened => {
              syncData(opened);
              actionType.value = "custom";
            });
            function setPresetRange(days) {
              range.value = {
                start: props.maxValue.copy().subtract({
                  days
                }),
                end: props.maxValue.copy()
              };
              actionType.value = "preset";
              open.value = false;
            }
            const formattedRange = computed(() => {
              const {
                start,
                end
              } = props.modelValue;
              if (!start) return "Select range";
              return formatDateRange({
                start,
                end
              });
            });
            function isActiveRange(presetValue) {
              if (!$14e0f24ef4ac5c92$export$629b0a497aa65267(props.modelValue.end, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())) return false;
              return props.modelValue.end.compare(props.modelValue.start) === presetValue;
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(DateRangePicker_default), {
                modelValue: range.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => range.value = $event),
                open: open.value,
                "onUpdate:open": _cache[1] || (_cache[1] = $event => open.value = $event),
                "max-value": _ctx.maxValue,
                "min-value": _ctx.minValue
              }, {
                trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
                  icon: "calendar",
                  type: "secondary"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(formattedRange.value), 1)]),
                  _: 1
                })]),
                presets: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presets, preset => {
                  return openBlock(), createBlock(unref(N8nButton_default), {
                    key: preset.value,
                    class: normalizeClass(_ctx.$style.PresetButton),
                    type: isActiveRange(preset.value) ? "primary" : "secondary",
                    size: "small",
                    onClick: $event => preset.disabled ? showUpgradeModal() : setPresetRange(preset.value)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(preset.label) + " ", 1), preset.disabled ? (openBlock(), createBlock(unref(N8nIcon_default), {
                      key: 0,
                      icon: "lock",
                      class: normalizeClass(_ctx.$style.LockIcon)
                    }, null, 8, ["class"])) : createCommentVNode("", true)]),
                    _: 2
                  }, 1032, ["class", "type", "onClick"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue", "open", "max-value", "min-value"]), createVNode(InsightsUpgradeModal_default, {
                modelValue: upgradeModal.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => upgradeModal.value = $event)
              }, null, 8, ["modelValue"])], 64);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/InsightsDataRangePicker.vue?vue&type=style&index=0&lang.module.css
        PresetButton$1 = "_PresetButton_1waws_2";
        LockIcon = "_LockIcon_1waws_7";
        InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default = {
          PresetButton: PresetButton$1,
          LockIcon
        }; //#endregion
        //#region src/features/execution/insights/components/InsightsDataRangePicker.vue
        cssModules$1 = {
          "$style": InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default
        };
        InsightsDataRangePicker_default = /* @__PURE__ */__plugin_vue_export_helper_default(InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/execution/insights/components/InsightsDashboard.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "mt-s",
          style: {
            "display": "flex",
            "gap": "12px",
            "align-items": "center"
          }
        };
        InsightsDashboard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsDashboard",
          props: {
            insightType: {}
          },
          setup(__props) {
            const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsPaywall-legacy-UHtWBy-8.js"), true               ? void 0 : void 0));
            const InsightsChartTotal = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartTotal-legacy-CAqjS3qj.js"), true               ? void 0 : void 0));
            const InsightsChartFailed = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartFailed-legacy-B_g8c448.js"), true               ? void 0 : void 0));
            const InsightsChartFailureRate = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartFailureRate-legacy-Cu_u2BWu.js"), true               ? void 0 : void 0));
            const InsightsChartTimeSaved = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartTimeSaved-legacy-CgczOd8S.js"), true               ? void 0 : void 0));
            const InsightsChartAverageRuntime = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartAverageRuntime-legacy-BxWc6-Uu.js"), true               ? void 0 : void 0));
            const InsightsTableWorkflows = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsTableWorkflows-legacy-BU01DPJ1.js"), true               ? void 0 : void 0));
            const props = __props;
            const route = useRoute();
            const i18n = useI18n();
            const insightsStore = useInsightsStore();
            const projectsStore = useProjectsStore();
            const isTimeSavedRoute = computed(() => route.params.insightType === INSIGHT_TYPES.TIME_SAVED);
            const chartComponents = computed(() => ({
              total: InsightsChartTotal,
              failed: InsightsChartFailed,
              failureRate: InsightsChartFailureRate,
              timeSaved: InsightsChartTimeSaved,
              averageRunTime: InsightsChartAverageRuntime
            }));
            const transformFilter = ({
              id,
              desc
            }) => {
              return `${id}:${desc ? "desc" : "asc"}`;
            };
            const sortTableBy = ref([{
              id: props.insightType,
              desc: true
            }]);
            const granularity = computed(() => {
              const {
                start,
                end
              } = range.value;
              if (!start || !end) return "day";
              const comparison = end.compare(start);
              if (comparison <= 0) return "hour";
              if (comparison <= 30) return "day";
              return "week";
            });
            const selectedProject = ref(null);
            const maxDate = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
            const maxLicensedDate = insightsStore.dateRanges.toReversed().find(dateRange => dateRange.licensed)?.key ?? "week";
            const timeRangeLabels = getTimeRangeLabels();
            const presets = computed(() => insightsStore.dateRanges.map(item => {
              return {
                value: timeRangeMappings[item.key],
                label: timeRangeLabels[item.key],
                disabled: !item.licensed
              };
            }));
            const maximumValue = shallowRef(maxDate.copy());
            const minimumValue = shallowRef(maxDate.copy().subtract({
              days: timeRangeMappings[maxLicensedDate]
            }));
            const range = shallowRef({
              start: maxDate.copy().subtract({
                days: 7
              }),
              end: maxDate.copy()
            });
            /**
            * Converts the range to a UTC date range with the current time
            */
            const getFilteredRange = () => {
              const timezone = $14e0f24ef4ac5c92$export$aa8b41735afcabd2();
              return {
                startDate: $11d87f3f76e88657$export$b21e0b124e224484(range.value.start, $14e0f24ef4ac5c92$export$461939dd4422153(timezone)).toDate(timezone),
                endDate: $11d87f3f76e88657$export$b21e0b124e224484(range.value.end, $14e0f24ef4ac5c92$export$461939dd4422153(timezone)).toDate(timezone)
              };
            };
            const fetchPaginatedTableData = ({
              page = 0,
              itemsPerPage = 25,
              sortBy,
              projectId = selectedProject.value?.id
            }) => {
              const skip = page * itemsPerPage;
              const take = itemsPerPage;
              const sortKey = sortBy.length ? transformFilter(sortBy[0]) : void 0;
              const {
                startDate,
                endDate
              } = getFilteredRange();
              insightsStore.table.execute(0, {
                skip,
                take,
                sortBy: sortKey,
                startDate,
                endDate,
                projectId
              });
            };
            watch(() => [props.insightType, selectedProject.value, range.value], () => {
              sortTableBy.value = [{
                id: props.insightType,
                desc: true
              }];
              const {
                startDate,
                endDate
              } = getFilteredRange();
              if (insightsStore.isSummaryEnabled) insightsStore.summary.execute(0, {
                startDate,
                endDate,
                projectId: selectedProject.value?.id
              });
              insightsStore.charts.execute(0, {
                startDate,
                endDate,
                projectId: selectedProject.value?.id
              });
              if (insightsStore.isDashboardEnabled) fetchPaginatedTableData({
                sortBy: sortTableBy.value,
                projectId: selectedProject.value?.id
              });
            }, {
              immediate: true
            });
            onMounted(() => {
              useDocumentTitle().set(i18n.baseText("insights.heading"));
            });
            onBeforeMount(async () => {
              await projectsStore.getAvailableProjects();
            });
            const emailPattern = /^<([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})>$/;
            const projects = computed(() => projectsStore.availableProjects.filter(project => project.name && !emailPattern.test(project.name.trim())));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.insightsView)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.insightsContainer)
              }, [createVNode(unref(N8nHeading_default), {
                bold: "",
                tag: "h2",
                size: "xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.title")), 1)]),
                _: 1
              }), createBaseVNode("div", _hoisted_1, [createVNode(ProjectSharing_default, {
                modelValue: selectedProject.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedProject.value = $event),
                projects: projects.value,
                placeholder: unref(i18n).baseText("insights.dashboard.search.placeholder"),
                "empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects"),
                size: "mini",
                class: normalizeClass(_ctx.$style.projectSelect),
                clearable: "",
                onClear: _cache[1] || (_cache[1] = $event => selectedProject.value = null)
              }, null, 8, ["modelValue", "projects", "placeholder", "empty-options-text", "class"]), createVNode(InsightsDataRangePicker_default, {
                modelValue: range.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => range.value = $event),
                "max-value": maximumValue.value,
                "min-value": minimumValue.value,
                presets: presets.value
              }, null, 8, ["modelValue", "max-value", "min-value", "presets"])]), unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
                key: 0,
                summary: unref(insightsStore).summary.state,
                loading: unref(insightsStore).summary.isLoading,
                "start-date": range.value.start,
                "end-date": range.value.end,
                class: normalizeClass(_ctx.$style.insightsBanner)
              }, null, 8, ["summary", "loading", "start-date", "end-date", "class"])) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.insightsContent)
              }, [unref(insightsStore).isDashboardEnabled || isTimeSavedRoute.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.insightsContentWrapper)
              }, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.dataLoader, {
                  [_ctx.$style.isDataLoading]: unref(insightsStore).charts.isLoading || unref(insightsStore).table.isLoading
                }])
              }, [createVNode(unref(N8nSpinner_default)), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("insights.chart.loading")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.insightsChartWrapper)
              }, [createTextVNode(toDisplayString(granularity.value) + " ", 1), (openBlock(), createBlock(resolveDynamicComponent(chartComponents.value[props.insightType]), {
                type: props.insightType,
                data: unref(insightsStore).charts.state,
                granularity: granularity.value,
                "start-date": range.value.start.toString(),
                "end-date": range.value.end.toString()
              }, null, 8, ["type", "data", "granularity", "start-date", "end-date"]))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.insightsTableWrapper)
              }, [createVNode(unref(InsightsTableWorkflows), {
                "sort-by": sortTableBy.value,
                "onUpdate:sortBy": _cache[3] || (_cache[3] = $event => sortTableBy.value = $event),
                data: unref(insightsStore).table.state,
                loading: unref(insightsStore).table.isLoading,
                "is-dashboard-enabled": unref(insightsStore).isDashboardEnabled,
                "onUpdate:options": fetchPaginatedTableData
              }, null, 8, ["sort-by", "data", "loading", "is-dashboard-enabled"])], 2)], 2)) : (openBlock(), createBlock(unref(InsightsPaywall), {
                key: 1
              }))], 2)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/InsightsDashboard.vue?vue&type=style&index=0&lang.module.scss
        insightsView = "_insightsView_ttte2_123";
        insightsContainer = "_insightsContainer_ttte2_131";
        insightsBanner = "_insightsBanner_ttte2_138";
        insightsContent = "_insightsContent_ttte2_146";
        insightsContentWrapper = "_insightsContentWrapper_ttte2_155";
        insightsChartWrapper = "_insightsChartWrapper_ttte2_160";
        insightsTableWrapper = "_insightsTableWrapper_ttte2_167";
        dataLoader = "_dataLoader_ttte2_173";
        isDataLoading = "_isDataLoading_ttte2_186";
        projectSelect = "_projectSelect_ttte2_208";
        PresetButton = "_PresetButton_ttte2_215";
        InsightsDashboard_vue_vue_type_style_index_0_lang_module_default = {
          insightsView,
          insightsContainer,
          insightsBanner,
          insightsContent,
          insightsContentWrapper,
          insightsChartWrapper,
          insightsTableWrapper,
          dataLoader,
          isDataLoading,
          projectSelect,
          PresetButton
        }; //#endregion
        //#region src/features/execution/insights/components/InsightsDashboard.vue
        cssModules = {
          "$style": InsightsDashboard_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", InsightsDashboard_default = /* @__PURE__ */__plugin_vue_export_helper_default(InsightsDashboard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();