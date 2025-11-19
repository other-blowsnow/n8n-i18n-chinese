;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./orderBy-legacy-CdPMW7_h.js", "./ProjectSharing-legacy-whwJ1PEb.js", "./insights.store-legacy-ExCnA8Kt.js", "./insights.constants-legacy-D5Y8YhR_.js", "./insights.utils-legacy-BGFKnbE7.js", "./smartDecimal-legacy-BeOdMR2z.js", "./InsightsSummary-legacy-CH2vq0-3.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineAsyncComponent, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, resolveDynamicComponent, openBlock, useModel, renderList, createTextVNode, onBeforeMount, createBaseVNode, shallowRef, useI18n, N8nText_default, N8nButton_default, N8nHeading_default, N8nSpinner_default, $14e0f24ef4ac5c92$export$629b0a497aa65267, $14e0f24ef4ac5c92$export$aa8b41735afcabd2, $11d87f3f76e88657$export$b21e0b124e224484, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3, DateRangePicker_default, $14e0f24ef4ac5c92$export$461939dd4422153, N8nIcon_default, __vitePreload, __plugin_vue_export_helper_default, useRoute, ElDialog, useProjectsStore, useDocumentTitle, useTelemetry, require_dateformat, usePageRedirectionHelper, ProjectSharing_default, useInsightsStore, INSIGHT_TYPES, timeRangeMappings, getTimeRangeLabels, InsightsSummary_default, __vite_style__, import_dateformat, _hoisted_1$1, InsightsUpgradeModal_vue_vue_type_script_setup_true_lang_default, InsightsUpgradeModal_default, DATE_FORMAT_DAY_MONTH_YEAR, DATE_FORMAT_DAY_MONTH, InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default, PresetButton$1, LockIcon, InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default, cssModules$1, InsightsDataRangePicker_default, _hoisted_1, InsightsDashboard_vue_vue_type_script_setup_true_lang_default, insightsView, insightsContainer, insightsBanner, insightsContent, insightsContentWrapper, insightsChartWrapper, insightsTableWrapper, dataLoader, isDataLoading, projectSelect, PresetButton, InsightsDashboard_vue_vue_type_style_index_0_lang_module_default, cssModules, InsightsDashboard_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        shallowRef = _vueRuntimeEsmBundlerLegacy003Js.zt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
        $14e0f24ef4ac5c92$export$629b0a497aa65267 = _srcLegacy007Js.dt;
        $14e0f24ef4ac5c92$export$aa8b41735afcabd2 = _srcLegacy007Js.ft;
        $11d87f3f76e88657$export$b21e0b124e224484 = _srcLegacy007Js.lt;
        $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3 = _srcLegacy007Js.pt;
        DateRangePicker_default = _srcLegacy007Js.r;
        $14e0f24ef4ac5c92$export$461939dd4422153 = _srcLegacy007Js.ut;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_dialogLegacy00BJs) {
        ElDialog = _dialogLegacy00BJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_ProjectIconLegacy025Js) {}, function (_orderByLegacy02JJs) {}, function (_ProjectSharingLegacy02LJs) {
        ProjectSharing_default = _ProjectSharingLegacy02LJs.t;
      }, function (_insightsStoreLegacy031Js) {
        useInsightsStore = _insightsStoreLegacy031Js.t;
      }, function (_insightsConstantsLegacy033Js) {
        INSIGHT_TYPES = _insightsConstantsLegacy033Js.s;
      }, function (_insightsUtilsLegacy035Js) {
        timeRangeMappings = _insightsUtilsLegacy035Js.n;
        getTimeRangeLabels = _insightsUtilsLegacy035Js.t;
      }, function (_smartDecimalLegacy04zJs) {}, function (_InsightsSummaryLegacy04BJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04BJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n.perks-list {\n&[data-v-528a05c4] {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: var(--spacing--sm);\n}\n> li[data-v-528a05c4] {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: var(--spacing--2xs);\n}\n}\n\n._PresetButton_1waws_2 {\n\t--button--border-color: transparent;\n\ttext-align: left;\n\tdisplay: flex;\n}\n._LockIcon_1waws_7 {\n\tmargin-left: auto;\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._insightsView_yj06s_123 {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  overflow: auto;\n}\n._insightsContainer_yj06s_131 {\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--lg) var(--spacing--2xl);\n  margin: 0 auto;\n}\n._insightsBanner_yj06s_138 {\n  padding-bottom: 0;\n}\n._insightsBanner_yj06s_138 ul {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n._insightsContent_yj06s_146 {\n  padding: var(--spacing--lg) 0;\n  border: var(--border-width) var(--border-style) var(--color--foreground);\n  border-top: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  background: var(--color--background--light-3);\n}\n._insightsContentWrapper_yj06s_155 {\n  position: relative;\n  overflow-x: hidden;\n}\n._insightsChartWrapper_yj06s_160 {\n  position: relative;\n  height: 292px;\n  padding: 0 var(--spacing--lg);\n  z-index: 1;\n}\n._insightsTableWrapper_yj06s_167 {\n  position: relative;\n  padding: var(--spacing--lg) var(--spacing--lg) 0;\n  z-index: 1;\n}\n._dataLoader_yj06s_173 {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  z-index: 2;\n}\n._dataLoader_yj06s_173._isDataLoading_yj06s_186 {\n  transition: left 0s linear;\n  left: 0;\n  transition-delay: 0.5s;\n}\n._dataLoader_yj06s_173 > span {\n  position: relative;\n  z-index: 2;\n}\n._dataLoader_yj06s_173::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color--background--light-3);\n  opacity: 0.75;\n  z-index: 1;\n}\n._projectSelect_yj06s_208 {\n  min-width: 200px;\n}\n._projectSelect_yj06s_208 .el-input--suffix .el-input__inner {\n  padding-right: 26px;\n}\n._PresetButton_yj06s_215 {\n  background-color: transparent;\n  border: none;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 0.15s;\n  border-radius: 0.375rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  text-align: left;\n  font-size: 13px;\n  cursor: pointer;\n  color: var(--color--text);\n  font-weight: 400;\n}\n._PresetButton_yj06s_215:hover {\n  background-color: var(--color--foreground--tint-1);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/insights/components/InsightsUpgradeModal.vue?vue&type=script&setup=true&lang.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
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
        DATE_FORMAT_DAY_MONTH_YEAR = "d mmm, yyyy";
        DATE_FORMAT_DAY_MONTH = "d mmm";
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
              const startStr = start.toString();
              const endStr = end?.toString();
              if (!end || startStr === endStr) return (0, import_dateformat.default)(startStr, DATE_FORMAT_DAY_MONTH_YEAR);
              if (start.year === end.year) return `${(0, import_dateformat.default)(startStr, DATE_FORMAT_DAY_MONTH)} - ${(0, import_dateformat.default)(endStr, DATE_FORMAT_DAY_MONTH_YEAR)}`;
              return `${(0, import_dateformat.default)(startStr, DATE_FORMAT_DAY_MONTH_YEAR)} - ${(0, import_dateformat.default)(endStr, DATE_FORMAT_DAY_MONTH_YEAR)}`;
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
            const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsPaywall-legacy-C9bd4tnZ.js"), true               ? void 0 : void 0));
            const InsightsChartTotal = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartTotal-legacy-6wgb-3S4.js"), true               ? void 0 : void 0));
            const InsightsChartFailed = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartFailed-legacy-D4OYY4HA.js"), true               ? void 0 : void 0));
            const InsightsChartFailureRate = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartFailureRate-legacy-BxCb8Hi4.js"), true               ? void 0 : void 0));
            const InsightsChartTimeSaved = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartTimeSaved-legacy-25HYqFqU.js"), true               ? void 0 : void 0));
            const InsightsChartAverageRuntime = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsChartAverageRuntime-legacy-BZ20oKiP.js"), true               ? void 0 : void 0));
            const InsightsTableWorkflows = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsTableWorkflows-legacy-CnFOxT49.js"), true               ? void 0 : void 0));
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
            const selectedDateRange = ref("week");
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
            watch(() => [props.insightType, selectedDateRange.value, selectedProject.value, range.value], () => {
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
                "time-range": selectedDateRange.value,
                class: normalizeClass(_ctx.$style.insightsBanner)
              }, null, 8, ["summary", "loading", "time-range", "class"])) : createCommentVNode("", true), createBaseVNode("div", {
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
        insightsView = "_insightsView_yj06s_123";
        insightsContainer = "_insightsContainer_yj06s_131";
        insightsBanner = "_insightsBanner_yj06s_138";
        insightsContent = "_insightsContent_yj06s_146";
        insightsContentWrapper = "_insightsContentWrapper_yj06s_155";
        insightsChartWrapper = "_insightsChartWrapper_yj06s_160";
        insightsTableWrapper = "_insightsTableWrapper_yj06s_167";
        dataLoader = "_dataLoader_yj06s_173";
        isDataLoading = "_isDataLoading_yj06s_186";
        projectSelect = "_projectSelect_yj06s_208";
        PresetButton = "_PresetButton_yj06s_215";
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