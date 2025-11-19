;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./date-picker-legacy-Cor1wJX7.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./useDebounce-legacy-IwiEyerO.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./WorkflowTagsDropdown-legacy-EBdnlj6g.js", "./AnnotationTagsDropdown.ee-legacy-CfAAqqBA.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, reactive, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, createSlots, onBeforeMount, createBaseVNode, I18nT, useI18n, i18n, N8nInput_default, N8nOption_default, N8nText_default, N8nCheckbox_default, N8nButton_default, N8nSelect_default, N8nBadge_default, N8nLink_default, N8nTooltip_default, N8nPopover_default, N8nIcon_default, __plugin_vue_export_helper_default, ElDatePicker, useSettingsStore, isEmpty, useTelemetry, EnterpriseEditionFeature, useDebounce, usePageRedirectionHelper, WorkflowTagsDropdown_default, AnnotationTagsDropdown_ee_default, __vite_style__, _hoisted_1$1, ConcurrentExecutionsHeader_vue_vue_type_script_setup_true_lang_default, tooltip, link, ConcurrentExecutionsHeader_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ConcurrentExecutionsHeader_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, DATE_TIME_MASK, ExecutionsFilter_vue_vue_type_script_setup_true_lang_default, group, label, savedDataLabel, subGroup, checkboxWrapper, dates, divider, resetBtn, tooltipIcon, filterButton, filterBadge, ExecutionsFilter_vue_vue_type_style_index_0_lang_module_default, cssModules, ExecutionsFilter_default, ExecutionsTime_vue_vue_type_script_setup_true_lang_default, ExecutionsTime_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nCheckbox_default = _srcLegacy007Js.J;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nPopover_default = _srcLegacy007Js.w;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_datePickerLegacy00nJs) {
        ElDatePicker = _datePickerLegacy00nJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        isEmpty = _useTelemetryLegacy00FJs.gi;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
      }, function (_useDebounceLegacy00VJs) {
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_WorkflowTagsDropdownLegacy02VJs) {
        WorkflowTagsDropdown_default = _WorkflowTagsDropdownLegacy02VJs.t;
      }, function (_AnnotationTagsDropdownEeLegacy05LJs) {
        AnnotationTagsDropdown_ee_default = _AnnotationTagsDropdownEeLegacy05LJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._tooltip_96h6y_123 {\n  display: flex;\n  flex-direction: column;\n}\n._link_96h6y_128 {\n  margin-top: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._group_159qw_123 label,\n._group_159qw_123 ._label_159qw_124 {\n  display: inline-block;\n  font-size: var(--font-size--2xs);\n  margin: var(--spacing--sm) 0 var(--spacing--3xs);\n  color: var(--color--text--shade-1);\n}\n._label_159qw_124._savedDataLabel_159qw_131 {\n  display: flex;\n  align-items: center;\n}\n._label_159qw_124._savedDataLabel_159qw_131 span {\n  margin-right: var(--spacing--3xs);\n}\n._subGroup_159qw_139 {\n  padding: 0 0 var(--spacing--xs) var(--spacing--sm);\n}\n._subGroup_159qw_139 label,\n._subGroup_159qw_139 ._label_159qw_124 {\n  font-size: var(--font-size--3xs);\n  margin: var(--spacing--4xs) 0 var(--spacing--4xs);\n}\n._subGroup_159qw_139 ._checkboxWrapper_159qw_147 {\n  margin-top: var(--spacing--sm);\n  margin-bottom: var(--spacing--2xs);\n}\n._subGroup_159qw_139 ._checkboxWrapper_159qw_147 label {\n  margin: 0;\n}\n._dates_159qw_155 {\n  display: flex;\n  border: 1px solid var(--color--foreground);\n  border-radius: var(--radius);\n  white-space: nowrap;\n  align-items: center;\n}\n._divider_159qw_163 {\n  padding: 0 var(--spacing--md);\n  line-height: 100%;\n}\n._resetBtn_159qw_168 {\n  padding: 0;\n  margin: var(--spacing--xs) 0 0;\n}\n._tooltipIcon_159qw_173 {\n  color: var(--color--text--tint-1);\n}\n._filterButton_159qw_177 {\n  position: relative;\n}\n._filterButton_159qw_177 ._filterBadge_159qw_180 {\n  position: absolute;\n  top: 0;\n  right: -4px;\n  transform: translate(50%, -50%);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n[data-v-0ed33726] .el-date-editor input {\n  height: 36px;\n  border: 0;\n  padding-right: 0;\n}\n[data-v-0ed33726] .el-date-editor .el-input__prefix {\n  color: var(--color--foreground--shade-1);\n}\n[data-v-0ed33726] .el-date-editor:last-of-type input {\n  padding-left: 0;\n}\n[data-v-0ed33726] .el-date-editor:last-of-type .el-input__prefix {\n  display: none;\n}\n[data-v-0ed33726] .el-select-dropdown.el-popper[data-popper-placement^=\"bottom\"] > .popper__arrow {\n  top: -6px;\n  left: 50%;\n  right: unset;\n  margin-bottom: 0;\n  margin-right: 3px;\n  border-left-width: 6px;\n  border-top-width: 0;\n  border-bottom-color: var(--border-color--light);\n  border-right-color: transparent;\n}\n[data-v-0ed33726] .el-select-dropdown.el-popper[data-popper-placement^=\"bottom\"] > .popper__arrow::after {\n  top: 1px;\n  left: unset;\n  bottom: unset;\n  margin-left: -6px;\n  border-left-width: 6px;\n  border-top-width: 0;\n  border-bottom-color: var(--color--foreground--tint-2);\n  border-right-color: transparent;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/executions/components/ConcurrentExecutionsHeader.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          "data-test-id": "concurrent-executions-header"
        };
        ConcurrentExecutionsHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ConcurrentExecutionsHeader",
          props: {
            runningExecutionsCount: {},
            concurrencyCap: {},
            isCloudDeployment: {
              type: Boolean
            }
          },
          emits: ["goToUpgrade"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n$1 = useI18n();
            const tooltipText = computed(() => {
              let text = i18n$1.baseText("executionsList.activeExecutions.tooltip", {
                interpolate: {
                  running: props.runningExecutionsCount,
                  cap: props.concurrencyCap
                }
              });
              text += "\n" + i18n$1.baseText("executionsList.activeExecutions.evaluationNote");
              return text;
            });
            const headerText = computed(() => {
              if (props.runningExecutionsCount === 0) return i18n$1.baseText("executionsList.activeExecutions.none");
              return i18n$1.baseText("executionsList.activeExecutions.header", {
                interpolate: {
                  running: props.runningExecutionsCount,
                  cap: props.concurrencyCap
                }
              });
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nText_default), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(headerText.value), 1)]),
                _: 1
              }), createVNode(unref(N8nTooltip_default), null, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltip)
                }, [createTextVNode(toDisplayString(tooltipText.value) + " ", 1), props.isCloudDeployment ? (openBlock(), createBlock(unref(N8nLink_default), {
                  key: 0,
                  bold: "",
                  size: "small",
                  class: normalizeClass(_ctx.$style.link),
                  onClick: _cache[0] || (_cache[0] = $event => emit("goToUpgrade"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("generic.upgradeNow")), 1)]),
                  _: 1
                }, 8, ["class"])) : (openBlock(), createBlock(unref(N8nLink_default), {
                  key: 1,
                  class: normalizeClass(_ctx.$style.link),
                  href: unref(i18n$1).baseText("executions.concurrency.docsLink"),
                  target: "_blank"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("generic.viewDocs")), 1)]),
                  _: 1
                }, 8, ["class", "href"]))], 2)]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "info",
                  class: "ml-2xs"
                })]),
                _: 1
              })]);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/ConcurrentExecutionsHeader.vue?vue&type=style&index=0&lang.module.scss
        tooltip = "_tooltip_96h6y_123";
        link = "_link_96h6y_128";
        ConcurrentExecutionsHeader_vue_vue_type_style_index_0_lang_module_default = {
          tooltip,
          link
        }; //#endregion
        //#region src/features/execution/executions/components/ConcurrentExecutionsHeader.vue
        cssModules$1 = {
          "$style": ConcurrentExecutionsHeader_vue_vue_type_style_index_0_lang_module_default
        };
        _export("r", ConcurrentExecutionsHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(ConcurrentExecutionsHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/execution/executions/components/ExecutionsFilter.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          "data-test-id": "execution-filter-form"
        };
        _hoisted_2 = {
          for: "execution-filter-workflows"
        };
        _hoisted_3 = {
          for: "execution-filter-tags"
        };
        _hoisted_4 = {
          for: "execution-filter-status"
        };
        _hoisted_5 = {
          for: "execution-filter-start-date"
        };
        _hoisted_6 = {
          for: "execution-filter-annotation-tags"
        };
        _hoisted_7 = {
          for: "execution-filter-annotation-vote"
        };
        _hoisted_8 = {
          for: "execution-filter-saved-data-key"
        };
        _hoisted_9 = {
          for: "execution-filter-saved-data-value"
        };
        DATE_TIME_MASK = "YYYY-MM-DD HH:mm";
        ExecutionsFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExecutionsFilter",
          props: {
            workflows: {
              default: () => []
            },
            popoverPlacement: {
              default: "bottom"
            },
            teleported: {
              type: Boolean,
              default: true
            }
          },
          emits: ["filterChanged"],
          setup(__props, {
            emit: __emit
          }) {
            const settingsStore = useSettingsStore();
            const {
              debounce
            } = useDebounce();
            const telemetry = useTelemetry();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const props = __props;
            const emit = __emit;
            const debouncedEmit = debounce(emit, {
              debounceTime: 500
            });
            const isCustomDataFilterTracked = ref(false);
            const isAdvancedExecutionFilterEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
            const isAnnotationFiltersEnabled = computed(() => isAdvancedExecutionFilterEnabled.value);
            const showTags = computed(() => false);
            const getDefaultFilter = () => ({
              status: "all",
              workflowId: "all",
              tags: [],
              annotationTags: [],
              startDate: "",
              endDate: "",
              metadata: [{
                key: "",
                value: "",
                exactMatch: false
              }],
              vote: "all"
            });
            const filter = reactive(getDefaultFilter());
            watch(filter, newFilter => {
              if (newFilter.startDate || newFilter.endDate) debouncedEmit("filterChanged", newFilter);else emit("filterChanged", newFilter);
            }, {
              deep: true,
              immediate: false
            });
            const statuses = computed(() => [{
              id: "all",
              name: i18n.baseText("executionsList.anyStatus")
            }, {
              id: "error",
              name: i18n.baseText("executionsList.error")
            }, {
              id: "canceled",
              name: i18n.baseText("executionsList.canceled")
            }, {
              id: "new",
              name: i18n.baseText("executionsList.new")
            }, {
              id: "running",
              name: i18n.baseText("executionsList.running")
            }, {
              id: "success",
              name: i18n.baseText("executionsList.success")
            }, {
              id: "waiting",
              name: i18n.baseText("executionsList.waiting")
            }]);
            const voteFilterOptions = computed(() => [{
              id: "all",
              name: i18n.baseText("executionsFilter.annotation.rating.all")
            }, {
              id: "up",
              name: i18n.baseText("executionsFilter.annotation.rating.good")
            }, {
              id: "down",
              name: i18n.baseText("executionsFilter.annotation.rating.bad")
            }]);
            const countSelectedFilterProps = computed(() => {
              return [filter.status !== "all", filter.workflowId !== "all" && props.workflows.length, !isEmpty(filter.tags), !isEmpty(filter.annotationTags), filter.vote !== "all", !isEmpty(filter.metadata), !!filter.startDate, !!filter.endDate].filter(Boolean).length;
            });
            const onFilterMetaChange = (index, prop, value) => {
              if (!filter.metadata[index]) filter.metadata[index] = {
                key: "",
                value: "",
                exactMatch: false
              };
              filter.metadata[index][prop] = value;
              if (!isCustomDataFilterTracked.value) {
                telemetry.track("User filtered executions with custom data");
                isCustomDataFilterTracked.value = true;
              }
              debouncedEmit("filterChanged", filter);
            };
            const onTagsChange = () => {
              emit("filterChanged", filter);
            };
            const onAnnotationTagsChange = () => {
              emit("filterChanged", filter);
            };
            const onFilterReset = () => {
              Object.assign(filter, getDefaultFilter());
            };
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("custom-data-filter", "upgrade-custom-data-filter");
            };
            const onExactMatchChange = e => {
              if (typeof e === "boolean") onFilterMetaChange(0, "exactMatch", e);
            };
            onBeforeMount(() => {
              isCustomDataFilterTracked.value = false;
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nPopover_default), {
                trigger: "click",
                placement: _ctx.popoverPlacement,
                width: "440"
              }, {
                reference: withCtx(() => [createVNode(unref(N8nButton_default), {
                  icon: "funnel",
                  type: "tertiary",
                  size: "medium",
                  square: "",
                  active: !!countSelectedFilterProps.value,
                  "data-test-id": "executions-filter-button",
                  class: normalizeClass(_ctx.$style.filterButton)
                }, createSlots({
                  _: 2
                }, [!!countSelectedFilterProps.value ? {
                  name: "default",
                  fn: withCtx(() => [createVNode(unref(N8nBadge_default), {
                    theme: "primary",
                    class: normalizeClass(["mr-4xs", _ctx.$style.filterBadge]),
                    "data-test-id": "execution-filter-badge"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(countSelectedFilterProps.value), 1)]),
                    _: 1
                  }, 8, ["class"])]),
                  key: "0"
                } : void 0]), 1032, ["active", "class"])]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_1, [_ctx.workflows && _ctx.workflows.length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.group)
                }, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("workflows.heading")), 1), createVNode(unref(N8nSelect_default), {
                  id: "execution-filter-workflows",
                  modelValue: filter.workflowId,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => filter.workflowId = $event),
                  placeholder: unref(i18n).baseText("executionsFilter.selectWorkflow"),
                  filterable: "",
                  "data-test-id": "executions-filter-workflows-select",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [createBaseVNode("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.workflows, (item, idx) => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: idx,
                      label: item.name,
                      value: item.id
                    }, null, 8, ["label", "value"]);
                  }), 128))])]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "teleported"])], 2)) : createCommentVNode("", true), showTags.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.group)
                }, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("workflows.filters.tags")), 1), createVNode(WorkflowTagsDropdown_default, {
                  id: "execution-filter-tags",
                  modelValue: filter.tags,
                  "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => filter.tags = $event), onTagsChange],
                  placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
                  "create-enabled": false,
                  "data-test-id": "executions-filter-tags-select"
                }, null, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.group)
                }, [createBaseVNode("label", _hoisted_4, toDisplayString(unref(i18n).baseText("executionsList.status")), 1), createVNode(unref(N8nSelect_default), {
                  id: "execution-filter-status",
                  modelValue: filter.status,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => filter.status = $event),
                  placeholder: unref(i18n).baseText("executionsFilter.selectStatus"),
                  filterable: "",
                  "data-test-id": "executions-filter-status-select",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statuses.value, (item, idx) => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: idx,
                      label: item.name,
                      value: item.id
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "teleported"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.group)
                }, [createBaseVNode("label", _hoisted_5, toDisplayString(unref(i18n).baseText("executionsFilter.start")), 1), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.dates)
                }, [createVNode(unref(ElDatePicker), {
                  id: "execution-filter-start-date",
                  modelValue: filter.startDate,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => filter.startDate = $event),
                  type: "datetime",
                  teleported: false,
                  format: DATE_TIME_MASK,
                  placeholder: unref(i18n).baseText("executionsFilter.startDate"),
                  "data-test-id": "executions-filter-start-date-picker"
                }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.divider)
                }, "to", 2), createVNode(unref(ElDatePicker), {
                  id: "execution-filter-end-date",
                  modelValue: filter.endDate,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => filter.endDate = $event),
                  type: "datetime",
                  teleported: false,
                  format: DATE_TIME_MASK,
                  placeholder: unref(i18n).baseText("executionsFilter.endDate"),
                  "data-test-id": "executions-filter-end-date-picker"
                }, null, 8, ["modelValue", "placeholder"])], 2)], 2), isAnnotationFiltersEnabled.value ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(_ctx.$style.group)
                }, [createBaseVNode("label", _hoisted_6, toDisplayString(unref(i18n).baseText("executionsFilter.annotation.tags")), 1), createVNode(AnnotationTagsDropdown_ee_default, {
                  id: "execution-filter-annotation-tags",
                  modelValue: filter.annotationTags,
                  "onUpdate:modelValue": [_cache[5] || (_cache[5] = $event => filter.annotationTags = $event), onAnnotationTagsChange],
                  placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
                  "create-enabled": false,
                  "data-test-id": "executions-filter-annotation-tags-select"
                }, null, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true), isAnnotationFiltersEnabled.value ? (openBlock(), createElementBlock("div", {
                  key: 3,
                  class: normalizeClass(_ctx.$style.group)
                }, [createBaseVNode("label", _hoisted_7, toDisplayString(unref(i18n).baseText("executionsFilter.annotation.rating")), 1), createVNode(unref(N8nSelect_default), {
                  id: "execution-filter-annotation-vote",
                  modelValue: filter.vote,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => filter.vote = $event),
                  placeholder: unref(i18n).baseText("executionsFilter.annotation.selectVoteFilter"),
                  filterable: "",
                  "data-test-id": "executions-filter-annotation-vote-select",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(voteFilterOptions.value, (item, idx) => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: idx,
                      label: item.name,
                      value: item.id
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue", "placeholder", "teleported"])], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.group)
                }, [createVNode(unref(N8nTooltip_default), {
                  placement: "right"
                }, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    tag: "span",
                    keypath: "executionsFilter.customData.docsTooltip",
                    scope: "global"
                  })]),
                  default: withCtx(() => [createBaseVNode("span", {
                    class: normalizeClass([_ctx.$style.label, _ctx.$style.savedDataLabel])
                  }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("executionsFilter.savedData")), 1), createVNode(unref(N8nIcon_default), {
                    class: normalizeClass(_ctx.$style.tooltipIcon),
                    icon: "circle-help",
                    size: "medium"
                  }, null, 8, ["class"])], 2)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.subGroup)
                }, [createBaseVNode("label", _hoisted_8, toDisplayString(unref(i18n).baseText("executionsFilter.savedDataKey")), 1), createVNode(unref(N8nTooltip_default), {
                  disabled: isAdvancedExecutionFilterEnabled.value,
                  placement: "top"
                }, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    tag: "span",
                    keypath: "executionsFilter.customData.inputTooltip",
                    scope: "global"
                  }, {
                    link: withCtx(() => [createBaseVNode("a", {
                      href: "#",
                      "data-test-id": "executions-filter-view-plans-link",
                      onClick: withModifiers(goToUpgrade, ["prevent"])
                    }, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)]),
                    _: 1
                  })]),
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "execution-filter-saved-data-key",
                    name: "execution-filter-saved-data-key",
                    type: "text",
                    disabled: !isAdvancedExecutionFilterEnabled.value,
                    placeholder: unref(i18n).baseText("executionsFilter.savedDataKeyPlaceholder"),
                    "model-value": filter.metadata[0]?.key,
                    "data-test-id": "execution-filter-saved-data-key-input",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => onFilterMetaChange(0, "key", $event))
                  }, null, 8, ["disabled", "placeholder", "model-value"])]),
                  _: 1
                }, 8, ["disabled"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.checkboxWrapper)
                }, [createVNode(unref(N8nTooltip_default), {
                  disabled: isAdvancedExecutionFilterEnabled.value,
                  placement: "top"
                }, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    tag: "span",
                    keypath: "executionsFilter.customData.inputTooltip",
                    scope: "global"
                  }, {
                    link: withCtx(() => [createBaseVNode("a", {
                      href: "#",
                      onClick: withModifiers(goToUpgrade, ["prevent"])
                    }, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)]),
                    _: 1
                  })]),
                  default: withCtx(() => [createVNode(unref(N8nCheckbox_default), {
                    label: unref(i18n).baseText("executionsFilter.savedDataExactMatch"),
                    "model-value": filter.metadata[0]?.exactMatch,
                    disabled: !isAdvancedExecutionFilterEnabled.value,
                    "data-test-id": "execution-filter-saved-data-exact-match-checkbox",
                    "onUpdate:modelValue": onExactMatchChange
                  }, null, 8, ["label", "model-value", "disabled"])]),
                  _: 1
                }, 8, ["disabled"])], 2), createBaseVNode("label", _hoisted_9, toDisplayString(unref(i18n).baseText("executionsFilter.savedDataValue")), 1), createVNode(unref(N8nTooltip_default), {
                  disabled: isAdvancedExecutionFilterEnabled.value,
                  placement: "top"
                }, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    tag: "span",
                    keypath: "executionsFilter.customData.inputTooltip",
                    scope: "global"
                  }, {
                    link: withCtx(() => [createBaseVNode("a", {
                      href: "#",
                      onClick: withModifiers(goToUpgrade, ["prevent"])
                    }, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)]),
                    _: 1
                  })]),
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    id: "execution-filter-saved-data-value",
                    name: "execution-filter-saved-data-value",
                    type: "text",
                    disabled: !isAdvancedExecutionFilterEnabled.value,
                    placeholder: unref(i18n).baseText("executionsFilter.savedDataValuePlaceholder"),
                    "model-value": filter.metadata[0]?.value,
                    "data-test-id": "execution-filter-saved-data-value-input",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => onFilterMetaChange(0, "value", $event))
                  }, null, 8, ["disabled", "placeholder", "model-value"])]),
                  _: 1
                }, 8, ["disabled"])], 2)], 2), !!countSelectedFilterProps.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 4,
                  class: normalizeClass(_ctx.$style.resetBtn),
                  size: "large",
                  text: "",
                  "data-test-id": "executions-filter-reset-button",
                  onClick: onFilterReset
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsFilter.reset")), 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)])]),
                _: 1
              }, 8, ["placement"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/ExecutionsFilter.vue?vue&type=style&index=0&lang.module.scss
        group = "_group_159qw_123";
        label = "_label_159qw_124";
        savedDataLabel = "_savedDataLabel_159qw_131";
        subGroup = "_subGroup_159qw_139";
        checkboxWrapper = "_checkboxWrapper_159qw_147";
        dates = "_dates_159qw_155";
        divider = "_divider_159qw_163";
        resetBtn = "_resetBtn_159qw_168";
        tooltipIcon = "_tooltipIcon_159qw_173";
        filterButton = "_filterButton_159qw_177";
        filterBadge = "_filterBadge_159qw_180";
        ExecutionsFilter_vue_vue_type_style_index_0_lang_module_default = {
          group,
          label,
          savedDataLabel,
          subGroup,
          checkboxWrapper,
          dates,
          divider,
          resetBtn,
          tooltipIcon,
          filterButton,
          filterBadge
        }; //#endregion
        //#region src/features/execution/executions/components/ExecutionsFilter.vue
        cssModules = {
          "$style": ExecutionsFilter_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", ExecutionsFilter_default = /* @__PURE__ */__plugin_vue_export_helper_default(ExecutionsFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-0ed33726"]])); //#endregion
        //#region src/features/execution/executions/components/ExecutionsTime.vue?vue&type=script&setup=true&lang.ts
        ExecutionsTime_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ExecutionsTime",
          props: {
            startTime: {}
          },
          setup(__props) {
            const props = __props;
            const i18n$1 = useI18n();
            const nowTime = ref(-1);
            const intervalTimer = ref(null);
            const time = computed(() => {
              if (!props.startTime) return "...";
              const msPassed = nowTime.value - new Date(props.startTime).getTime();
              return i18n$1.displayTimer(msPassed);
            });
            onMounted(() => {
              setNow();
              intervalTimer.value = setInterval(() => {
                setNow();
              }, 1e3);
            });
            onBeforeUnmount(() => {
              if (intervalTimer.value !== null) clearInterval(intervalTimer.value);
            });
            function setNow() {
              nowTime.value = (/* @__PURE__ */new Date()).getTime();
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", null, toDisplayString(time.value), 1);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/ExecutionsTime.vue
        _export("t", ExecutionsTime_default = ExecutionsTime_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();