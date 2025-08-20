import { d as defineComponent, x as computed, c as useI18n, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, k as createTextVNode, t as toDisplayString, p as N8nText, N as N8nIcon, j as createBaseVNode, n as normalizeClass, e as createBlock, C as N8nLink, l as unref, a4 as N8nTooltip, _ as _export_sfc, v as useSettingsStore, Y as useDebounce, aB as usePageRedirectionHelper, r as ref, aF as EnterpriseEditionFeature, d8 as reactive, af as watch, e$ as i18n, fu as isEmpty, b3 as onBeforeMount, T as resolveComponent, fv as _sfc_main$3, f as createCommentVNode, e8 as N8nSelect, F as Fragment, A as renderList, e9 as _sfc_main$4, aK as _sfc_main$5, a6 as I18nT, c$ as N8nInput, B as withModifiers, eY as N8nCheckbox, q as N8nButton, bu as createSlots, aL as N8nBadge, ap as useTelemetry, o as onMounted, P as onBeforeUnmount } from "./index-BsWH3eYA.js";
import { _ as _sfc_main$6 } from "./AnnotationTagsDropdown.ee.vue_vue_type_script_setup_true_lang-pNFoAlGS.js";
const _hoisted_1$1 = { "data-test-id": "concurrent-executions-header" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConcurrentExecutionsHeader",
  props: {
    runningExecutionsCount: {},
    concurrencyCap: {},
    isCloudDeployment: { type: Boolean }
  },
  emits: ["goToUpgrade"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n2 = useI18n();
    const tooltipText = computed(() => {
      let text = i18n2.baseText("executionsList.activeExecutions.tooltip", {
        interpolate: {
          running: props.runningExecutionsCount,
          cap: props.concurrencyCap
        }
      });
      text += "\n" + i18n2.baseText("executionsList.activeExecutions.evaluationNote");
      return text;
    });
    const headerText = computed(() => {
      if (props.runningExecutionsCount === 0) {
        return i18n2.baseText("executionsList.activeExecutions.none");
      }
      return i18n2.baseText("executionsList.activeExecutions.header", {
        interpolate: {
          running: props.runningExecutionsCount,
          cap: props.concurrencyCap
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_n8n_text = N8nText;
      const _component_N8nLink = N8nLink;
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_tooltip = N8nTooltip;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_n8n_text, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(headerText.value), 1)
          ]),
          _: 1
        }),
        createVNode(_component_n8n_tooltip, null, {
          content: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.tooltip)
            }, [
              createTextVNode(toDisplayString(tooltipText.value) + " ", 1),
              props.isCloudDeployment ? (openBlock(), createBlock(_component_N8nLink, {
                key: 0,
                bold: "",
                size: "small",
                class: normalizeClass(_ctx.$style.link),
                onClick: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n2).baseText("generic.upgradeNow")), 1)
                ]),
                _: 1
              }, 8, ["class"])) : (openBlock(), createBlock(_component_N8nLink, {
                key: 1,
                class: normalizeClass(_ctx.$style.link),
                href: unref(i18n2).baseText("executions.concurrency.docsLink"),
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n2).baseText("generic.viewDocs")), 1)
                ]),
                _: 1
              }, 8, ["class", "href"]))
            ], 2)
          ]),
          default: withCtx(() => [
            createVNode(_component_n8n_icon, {
              icon: "info",
              class: "ml-2xs"
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const tooltip = "_tooltip_1a9mw_123";
const link = "_link_1a9mw_128";
const style0$1 = {
  tooltip,
  link
};
const cssModules$1 = {
  "$style": style0$1
};
const ConcurrentExecutionsHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { "data-test-id": "execution-filter-form" };
const _hoisted_2 = { for: "execution-filter-workflows" };
const _hoisted_3 = { for: "execution-filter-tags" };
const _hoisted_4 = { for: "execution-filter-status" };
const _hoisted_5 = { for: "execution-filter-start-date" };
const _hoisted_6 = { for: "execution-filter-annotation-tags" };
const _hoisted_7 = { for: "execution-filter-annotation-vote" };
const _hoisted_8 = { for: "execution-filter-saved-data-key" };
const _hoisted_9 = { for: "execution-filter-saved-data-value" };
const DATE_TIME_MASK = "YYYY-MM-DD HH:mm";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExecutionsFilter",
  props: {
    workflows: { default: () => [] },
    popoverPlacement: { default: "bottom" },
    teleported: { type: Boolean, default: true }
  },
  emits: ["filterChanged"],
  setup(__props, { emit: __emit }) {
    const settingsStore = useSettingsStore();
    const { debounce } = useDebounce();
    const telemetry = useTelemetry();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const props = __props;
    const emit = __emit;
    const debouncedEmit = debounce(emit, {
      debounceTime: 500
    });
    const isCustomDataFilterTracked = ref(false);
    const isAdvancedExecutionFilterEnabled = computed(
      () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]
    );
    const isAnnotationFiltersEnabled = computed(() => isAdvancedExecutionFilterEnabled.value);
    const showTags = computed(() => false);
    const getDefaultFilter = () => ({
      status: "all",
      workflowId: "all",
      tags: [],
      annotationTags: [],
      startDate: "",
      endDate: "",
      metadata: [{ key: "", value: "", exactMatch: false }],
      vote: "all"
    });
    const filter = reactive(getDefaultFilter());
    watch(
      filter,
      (newFilter) => {
        if (newFilter.startDate || newFilter.endDate) {
          debouncedEmit("filterChanged", newFilter);
        } else {
          emit("filterChanged", newFilter);
        }
      },
      { deep: true, immediate: false }
    );
    const statuses = computed(() => [
      { id: "all", name: i18n.baseText("executionsList.anyStatus") },
      { id: "error", name: i18n.baseText("executionsList.error") },
      { id: "canceled", name: i18n.baseText("executionsList.canceled") },
      { id: "new", name: i18n.baseText("executionsList.new") },
      { id: "running", name: i18n.baseText("executionsList.running") },
      { id: "success", name: i18n.baseText("executionsList.success") },
      { id: "waiting", name: i18n.baseText("executionsList.waiting") }
    ]);
    const voteFilterOptions = computed(() => [
      { id: "all", name: i18n.baseText("executionsFilter.annotation.rating.all") },
      { id: "up", name: i18n.baseText("executionsFilter.annotation.rating.good") },
      { id: "down", name: i18n.baseText("executionsFilter.annotation.rating.bad") }
    ]);
    const countSelectedFilterProps = computed(() => {
      const nonDefaultFilters = [
        filter.status !== "all",
        filter.workflowId !== "all" && props.workflows.length,
        !isEmpty(filter.tags),
        !isEmpty(filter.annotationTags),
        filter.vote !== "all",
        !isEmpty(filter.metadata),
        !!filter.startDate,
        !!filter.endDate
      ].filter(Boolean);
      return nonDefaultFilters.length;
    });
    const onFilterMetaChange = (index, prop, value) => {
      if (!filter.metadata[index]) {
        filter.metadata[index] = {
          key: "",
          value: "",
          exactMatch: false
        };
      }
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
      void pageRedirectionHelper.goToUpgrade("custom-data-filter", "upgrade-custom-data-filter");
    };
    const onExactMatchChange = (e) => {
      if (typeof e === "boolean") {
        onFilterMetaChange(0, "exactMatch", e);
      }
    };
    onBeforeMount(() => {
      isCustomDataFilterTracked.value = false;
    });
    return (_ctx, _cache) => {
      const _component_n8n_badge = N8nBadge;
      const _component_n8n_button = N8nButton;
      const _component_n8n_option = _sfc_main$4;
      const _component_n8n_select = N8nSelect;
      const _component_WorkflowTagsDropdown = _sfc_main$5;
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_tooltip = N8nTooltip;
      const _component_n8n_input = N8nInput;
      const _component_n8n_checkbox = N8nCheckbox;
      const _component_n8n_popover = _sfc_main$3;
      return openBlock(), createBlock(_component_n8n_popover, {
        trigger: "click",
        placement: _ctx.popoverPlacement,
        width: "440"
      }, {
        reference: withCtx(() => [
          createVNode(_component_n8n_button, {
            icon: "funnel",
            type: "tertiary",
            size: "medium",
            square: "",
            active: !!countSelectedFilterProps.value,
            "data-test-id": "executions-filter-button",
            class: normalizeClass(_ctx.$style.filterButton)
          }, createSlots({ _: 2 }, [
            !!countSelectedFilterProps.value ? {
              name: "default",
              fn: withCtx(() => [
                createVNode(_component_n8n_badge, {
                  theme: "primary",
                  class: normalizeClass(["mr-4xs", _ctx.$style.filterBadge]),
                  "data-test-id": "execution-filter-badge"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(countSelectedFilterProps.value), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["active", "class"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _ctx.workflows && _ctx.workflows.length > 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("workflows.heading")), 1),
              createVNode(_component_n8n_select, {
                id: "execution-filter-workflows",
                modelValue: filter.workflowId,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.workflowId = $event),
                placeholder: unref(i18n).baseText("executionsFilter.selectWorkflow"),
                filterable: "",
                "data-test-id": "executions-filter-workflows-select",
                teleported: _ctx.teleported
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props.workflows, (item, idx) => {
                      return openBlock(), createBlock(_component_n8n_option, {
                        key: idx,
                        label: item.name,
                        value: item.id
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "teleported"])
            ], 2)) : createCommentVNode("", true),
            showTags.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("workflows.filters.tags")), 1),
              createVNode(_component_WorkflowTagsDropdown, {
                id: "execution-filter-tags",
                modelValue: filter.tags,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => filter.tags = $event),
                  onTagsChange
                ],
                placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
                "create-enabled": false,
                "data-test-id": "executions-filter-tags-select"
              }, null, 8, ["modelValue", "placeholder"])
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", _hoisted_4, toDisplayString(unref(i18n).baseText("executionsList.status")), 1),
              createVNode(_component_n8n_select, {
                id: "execution-filter-status",
                modelValue: filter.status,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filter.status = $event),
                placeholder: unref(i18n).baseText("executionsFilter.selectStatus"),
                filterable: "",
                "data-test-id": "executions-filter-status-select",
                teleported: _ctx.teleported
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(statuses.value, (item, idx) => {
                    return openBlock(), createBlock(_component_n8n_option, {
                      key: idx,
                      label: item.name,
                      value: item.id
                    }, null, 8, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "teleported"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", _hoisted_5, toDisplayString(unref(i18n).baseText("executionsFilter.start")), 1),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.dates)
              }, [
                createVNode(_component_el_date_picker, {
                  id: "execution-filter-start-date",
                  modelValue: filter.startDate,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filter.startDate = $event),
                  type: "datetime",
                  teleported: false,
                  format: DATE_TIME_MASK,
                  placeholder: unref(i18n).baseText("executionsFilter.startDate"),
                  "data-test-id": "executions-filter-start-date-picker"
                }, null, 8, ["modelValue", "placeholder"]),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.divider)
                }, "to", 2),
                createVNode(_component_el_date_picker, {
                  id: "execution-filter-end-date",
                  modelValue: filter.endDate,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filter.endDate = $event),
                  type: "datetime",
                  teleported: false,
                  format: DATE_TIME_MASK,
                  placeholder: unref(i18n).baseText("executionsFilter.endDate"),
                  "data-test-id": "executions-filter-end-date-picker"
                }, null, 8, ["modelValue", "placeholder"])
              ], 2)
            ], 2),
            isAnnotationFiltersEnabled.value ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", _hoisted_6, toDisplayString(unref(i18n).baseText("executionsFilter.annotation.tags")), 1),
              createVNode(_sfc_main$6, {
                id: "execution-filter-annotation-tags",
                modelValue: filter.annotationTags,
                "onUpdate:modelValue": [
                  _cache[5] || (_cache[5] = ($event) => filter.annotationTags = $event),
                  onAnnotationTagsChange
                ],
                placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
                "create-enabled": false,
                "data-test-id": "executions-filter-annotation-tags-select"
              }, null, 8, ["modelValue", "placeholder"])
            ], 2)) : createCommentVNode("", true),
            isAnnotationFiltersEnabled.value ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.$style.group)
            }, [
              createBaseVNode("label", _hoisted_7, toDisplayString(unref(i18n).baseText("executionsFilter.annotation.rating")), 1),
              createVNode(_component_n8n_select, {
                id: "execution-filter-annotation-vote",
                modelValue: filter.vote,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filter.vote = $event),
                placeholder: unref(i18n).baseText("executionsFilter.annotation.selectVoteFilter"),
                filterable: "",
                "data-test-id": "executions-filter-annotation-vote-select",
                teleported: _ctx.teleported
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(voteFilterOptions.value, (item, idx) => {
                    return openBlock(), createBlock(_component_n8n_option, {
                      key: idx,
                      label: item.name,
                      value: item.id
                    }, null, 8, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "teleported"])
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.group)
            }, [
              createVNode(_component_n8n_tooltip, { placement: "right" }, {
                content: withCtx(() => [
                  createVNode(unref(I18nT), {
                    tag: "span",
                    keypath: "executionsFilter.customData.docsTooltip",
                    scope: "global"
                  })
                ]),
                default: withCtx(() => [
                  createBaseVNode("span", {
                    class: normalizeClass([_ctx.$style.label, _ctx.$style.savedDataLabel])
                  }, [
                    createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("executionsFilter.savedData")), 1),
                    createVNode(_component_n8n_icon, {
                      class: normalizeClass(_ctx.$style.tooltipIcon),
                      icon: "circle-help",
                      size: "medium"
                    }, null, 8, ["class"])
                  ], 2)
                ]),
                _: 1
              }),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.subGroup)
              }, [
                createBaseVNode("label", _hoisted_8, toDisplayString(unref(i18n).baseText("executionsFilter.savedDataKey")), 1),
                createVNode(_component_n8n_tooltip, {
                  disabled: isAdvancedExecutionFilterEnabled.value,
                  placement: "top"
                }, {
                  content: withCtx(() => [
                    createVNode(unref(I18nT), {
                      tag: "span",
                      keypath: "executionsFilter.customData.inputTooltip",
                      scope: "global"
                    }, {
                      link: withCtx(() => [
                        createBaseVNode("a", {
                          href: "#",
                          "data-test-id": "executions-filter-view-plans-link",
                          onClick: withModifiers(goToUpgrade, ["prevent"])
                        }, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_n8n_input, {
                      id: "execution-filter-saved-data-key",
                      name: "execution-filter-saved-data-key",
                      type: "text",
                      disabled: !isAdvancedExecutionFilterEnabled.value,
                      placeholder: unref(i18n).baseText("executionsFilter.savedDataKeyPlaceholder"),
                      "model-value": filter.metadata[0]?.key,
                      "data-test-id": "execution-filter-saved-data-key-input",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => onFilterMetaChange(0, "key", $event))
                    }, null, 8, ["disabled", "placeholder", "model-value"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.checkboxWrapper)
                }, [
                  createVNode(_component_n8n_tooltip, {
                    disabled: isAdvancedExecutionFilterEnabled.value,
                    placement: "top"
                  }, {
                    content: withCtx(() => [
                      createVNode(unref(I18nT), {
                        tag: "span",
                        keypath: "executionsFilter.customData.inputTooltip",
                        scope: "global"
                      }, {
                        link: withCtx(() => [
                          createBaseVNode("a", {
                            href: "#",
                            onClick: withModifiers(goToUpgrade, ["prevent"])
                          }, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n8n_checkbox, {
                        label: unref(i18n).baseText("executionsFilter.savedDataExactMatch"),
                        "model-value": filter.metadata[0]?.exactMatch,
                        disabled: !isAdvancedExecutionFilterEnabled.value,
                        "data-test-id": "execution-filter-saved-data-exact-match-checkbox",
                        "onUpdate:modelValue": onExactMatchChange
                      }, null, 8, ["label", "model-value", "disabled"])
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ], 2),
                createBaseVNode("label", _hoisted_9, toDisplayString(unref(i18n).baseText("executionsFilter.savedDataValue")), 1),
                createVNode(_component_n8n_tooltip, {
                  disabled: isAdvancedExecutionFilterEnabled.value,
                  placement: "top"
                }, {
                  content: withCtx(() => [
                    createVNode(unref(I18nT), {
                      tag: "span",
                      keypath: "executionsFilter.customData.inputTooltip",
                      scope: "global"
                    }, {
                      link: withCtx(() => [
                        createBaseVNode("a", {
                          href: "#",
                          onClick: withModifiers(goToUpgrade, ["prevent"])
                        }, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_n8n_input, {
                      id: "execution-filter-saved-data-value",
                      name: "execution-filter-saved-data-value",
                      type: "text",
                      disabled: !isAdvancedExecutionFilterEnabled.value,
                      placeholder: unref(i18n).baseText("executionsFilter.savedDataValuePlaceholder"),
                      "model-value": filter.metadata[0]?.value,
                      "data-test-id": "execution-filter-saved-data-value-input",
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => onFilterMetaChange(0, "value", $event))
                    }, null, 8, ["disabled", "placeholder", "model-value"])
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ], 2)
            ], 2),
            !!countSelectedFilterProps.value ? (openBlock(), createBlock(_component_n8n_button, {
              key: 4,
              class: normalizeClass(_ctx.$style.resetBtn),
              size: "large",
              text: "",
              "data-test-id": "executions-filter-reset-button",
              onClick: onFilterReset
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionsFilter.reset")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["placement"]);
    };
  }
});
const group = "_group_1gmps_123";
const label = "_label_1gmps_124";
const savedDataLabel = "_savedDataLabel_1gmps_131";
const subGroup = "_subGroup_1gmps_139";
const checkboxWrapper = "_checkboxWrapper_1gmps_147";
const dates = "_dates_1gmps_155";
const divider = "_divider_1gmps_163";
const resetBtn = "_resetBtn_1gmps_168";
const tooltipIcon = "_tooltipIcon_1gmps_173";
const filterButton = "_filterButton_1gmps_177";
const filterBadge = "_filterBadge_1gmps_180";
const style0 = {
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
};
const cssModules = {
  "$style": style0
};
const ExecutionsFilter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules], ["__scopeId", "data-v-eba94171"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExecutionsTime",
  props: {
    startTime: {}
  },
  setup(__props) {
    const props = __props;
    const i18n2 = useI18n();
    const nowTime = ref(-1);
    const intervalTimer = ref(null);
    const time = computed(() => {
      if (!props.startTime) {
        return "...";
      }
      const msPassed = nowTime.value - new Date(props.startTime).getTime();
      return i18n2.displayTimer(msPassed);
    });
    onMounted(() => {
      setNow();
      intervalTimer.value = setInterval(() => {
        setNow();
      }, 1e3);
    });
    onBeforeUnmount(() => {
      if (intervalTimer.value !== null) {
        clearInterval(intervalTimer.value);
      }
    });
    function setNow() {
      nowTime.value = (/* @__PURE__ */ new Date()).getTime();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(time.value), 1);
    };
  }
});
export {
  ConcurrentExecutionsHeader as C,
  ExecutionsFilter as E,
  _sfc_main as _
};
