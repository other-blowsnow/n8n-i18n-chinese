import { d as defineComponent, cg as useClipboard, a as useToast, x as computed, e as createBlock, g as openBlock, l as unref, a4 as N8nTooltip, w as withCtx, j as createBaseVNode, t as toDisplayString, k as createTextVNode, c as useI18n, _ as _export_sfc, d8 as reactive, bL as toRaw, r as ref, h as createElementBlock, i as createVNode, eW as N8nFormInput, f as createCommentVNode, q as N8nButton, v as useSettingsStore, cK as useEnvironmentsStore, u as useUsersStore, Z as useUIStore, aj as useSourceControlStore, aa as useRoute, b as useRouter, aH as useTemplateRef, aC as getResourcePermissions, eX as useAsyncState, aF as EnterpriseEditionFeature, aB as usePageRedirectionHelper, o as onMounted, ay as useDocumentTitle, bu as createSlots, dY as N8nActionBox, K as mergeProps, c8 as normalizeProps, F as Fragment, aL as N8nBadge, e5 as N8nInputLabel, eY as N8nCheckbox, m as N8nHeading, eZ as uid, ap as useTelemetry, aq as useMessage, ar as MODAL_CONFIRM } from "./index-BsWH3eYA.js";
import { R as ResourcesListLayout } from "./ResourcesListLayout-gylwL6iY.js";
import { p as pickBy } from "./pickBy-DQDQiqkF.js";
import "./TableBase-CDVPsIRe.js";
import "./useProjectPages-C3Mn4pYX.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VariablesUsageBadge",
  props: {
    name: {}
  },
  setup(__props) {
    const i18n = useI18n();
    const clipboard = useClipboard();
    const { showMessage } = useToast();
    const props = __props;
    const usage = computed(() => `$vars.${props.name}`);
    const handleClick = () => {
      void clipboard.copy(usage.value);
      showMessage({
        title: i18n.baseText("variables.row.usage.copiedToClipboard"),
        type: "success"
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nTooltip), { placement: "top" }, {
        content: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.usage.copyToClipboard")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("span", {
            class: "usageSyntax",
            onClick: handleClick
          }, toDisplayString(usage.value), 1)
        ]),
        _: 1
      });
    };
  }
});
const VariablesUsageBadge = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1846b5c0"]]);
const _hoisted_1$1 = { class: "key-cell" };
const _hoisted_2$1 = {
  class: "value-cell",
  width: "100%"
};
const _hoisted_3$1 = { align: "right" };
const VALUE_MAX_LENGTH = 220;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VariablesForm",
  props: {
    variable: {}
  },
  emits: ["submit", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const keyValidationRules = [
      { name: "REQUIRED" },
      { name: "MAX_LENGTH", config: { maximum: 50 } },
      {
        name: "MATCH_REGEX",
        config: {
          regex: /^[a-zA-Z]/,
          message: i18n.baseText("variables.editing.key.error.startsWithLetter")
        }
      },
      {
        name: "MATCH_REGEX",
        config: {
          regex: /^[a-zA-Z][a-zA-Z0-9_]*$/,
          message: i18n.baseText("variables.editing.key.error.jsonKey")
        }
      }
    ];
    const valueValidationRules = [
      { name: "MAX_LENGTH", config: { maximum: VALUE_MAX_LENGTH } }
    ];
    const form = reactive(structuredClone(toRaw(props.variable)));
    const formValidation = reactive({
      key: false,
      value: false
    });
    const isValid = computed(() => Object.values(formValidation).every((value) => value));
    const handleCancel = () => emit("cancel");
    const validateOnBlur = ref(false);
    const handleSubmit = () => {
      validateOnBlur.value = true;
      if (isValid.value) {
        emit("submit", form);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tr", null, [
        createBaseVNode("td", _hoisted_1$1, [
          createVNode(unref(N8nFormInput), {
            modelValue: form.key,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.key = $event),
            label: "",
            name: "key",
            "data-test-id": "variable-row-key-input",
            placeholder: unref(i18n).baseText("variables.editing.key.placeholder"),
            required: "",
            "validate-on-blur": validateOnBlur.value,
            "validation-rules": keyValidationRules,
            "focus-initially": "",
            onValidate: _cache[1] || (_cache[1] = (value) => formValidation.key = value)
          }, null, 8, ["modelValue", "placeholder", "validate-on-blur"])
        ]),
        createBaseVNode("td", _hoisted_2$1, [
          createVNode(unref(N8nFormInput), {
            modelValue: form.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value = $event),
            class: "key-input",
            label: "",
            name: "value",
            "data-test-id": "variable-row-value-input",
            placeholder: unref(i18n).baseText("variables.editing.value.placeholder"),
            type: "textarea",
            autosize: { minRows: 1, maxRows: 6 },
            size: "medium",
            maxlength: VALUE_MAX_LENGTH,
            "validate-on-blur": validateOnBlur.value,
            "validation-rules": valueValidationRules,
            onValidate: _cache[3] || (_cache[3] = (value) => formValidation.value = value)
          }, null, 8, ["modelValue", "placeholder", "validate-on-blur"])
        ]),
        createBaseVNode("td", null, [
          formValidation.key ? (openBlock(), createBlock(VariablesUsageBadge, {
            key: 0,
            name: form.key
          }, null, 8, ["name"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("td", _hoisted_3$1, [
          createVNode(unref(N8nButton), {
            "data-test-id": "variable-row-cancel-button",
            type: "tertiary",
            class: "mr-xs",
            onClick: handleCancel
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.cancel")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(N8nButton), {
            "data-test-id": "variable-row-save-button",
            type: "primary",
            onClick: handleSubmit
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.save")), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const VariablesForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4921ff8f"]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "mb-s" };
const _hoisted_4 = {
  key: 1,
  "data-test-id": "variables-row"
};
const _hoisted_5 = {
  key: 0,
  align: "right"
};
const _hoisted_6 = { class: "action-buttons" };
const TEMPORARY_VARIABLE_UID_BASE = "@tmpvar";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VariablesView",
  setup(__props) {
    const settingsStore = useSettingsStore();
    const environmentsStore = useEnvironmentsStore();
    const usersStore = useUsersStore();
    const uiStore = useUIStore();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const message = useMessage();
    const sourceControlStore = useSourceControlStore();
    const route = useRoute();
    const router = useRouter();
    const layoutRef = useTemplateRef("layoutRef");
    const { showError } = useToast();
    const permissions = computed(
      () => getResourcePermissions(usersStore.currentUser?.globalScopes).variable
    );
    const { isLoading, execute } = useAsyncState(environmentsStore.fetchAllVariables, [], {
      immediate: true
    });
    const isFeatureEnabled = computed(
      () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]
    );
    const variableForms = ref(/* @__PURE__ */ new Map());
    const editableVariables = ref([]);
    const addToEditableVariables = (variableId) => editableVariables.value.push(variableId);
    const removeEditableVariable = (variableId) => {
      editableVariables.value = editableVariables.value.filter((id) => id !== variableId);
      variableForms.value.delete(variableId);
    };
    const addEmptyVariableForm = () => {
      const variable = { id: uid(TEMPORARY_VARIABLE_UID_BASE), key: "", value: "" };
      variableForms.value.set(variable.id, variable);
      if (layoutRef.value?.currentPage !== 1) {
        layoutRef.value?.setCurrentPage(1);
      }
      addToEditableVariables(variable.id);
      telemetry.track("User clicked add variable button");
    };
    const variables = computed(
      () => [...variableForms.value.values(), ...environmentsStore.variables].map(
        (variable) => ({
          resourceType: "variable",
          id: variable.id,
          name: variable.key,
          key: variable.key,
          value: variable.value
        })
      )
    );
    const canCreateVariables = computed(() => isFeatureEnabled.value && permissions.value.create);
    const columns = computed(() => {
      const cols = [
        {
          id: 0,
          path: "name",
          label: i18n.baseText("variables.table.key"),
          classes: ["variables-key-column"]
        },
        {
          id: 1,
          path: "value",
          label: i18n.baseText("variables.table.value"),
          classes: ["variables-value-column"]
        },
        {
          id: 2,
          path: "usage",
          label: i18n.baseText("variables.table.usage"),
          classes: ["variables-usage-column"]
        }
      ];
      if (!isFeatureEnabled.value) return cols;
      return cols.concat({ id: 3, path: "actions", label: "", classes: ["variables-actions-column"] });
    });
    const handleSubmit = async (variable) => {
      try {
        const { id } = variable;
        if (id.startsWith(TEMPORARY_VARIABLE_UID_BASE)) {
          await environmentsStore.createVariable({
            value: variable.value,
            key: variable.key
          });
        } else {
          await environmentsStore.updateVariable({
            id: variable.id,
            value: variable.value,
            key: variable.key
          });
        }
        removeEditableVariable(id);
      } catch (error) {
        showError(error, i18n.baseText("variables.errors.save"));
      }
    };
    const handleDeleteVariable = async (variable) => {
      try {
        const confirmed = await message.confirm(
          i18n.baseText("variables.modals.deleteConfirm.message", {
            interpolate: { name: variable.key }
          }),
          i18n.baseText("variables.modals.deleteConfirm.title"),
          {
            confirmButtonText: i18n.baseText("variables.modals.deleteConfirm.confirmButton"),
            cancelButtonText: i18n.baseText("variables.modals.deleteConfirm.cancelButton")
          }
        );
        if (confirmed !== MODAL_CONFIRM) {
          return;
        }
        await environmentsStore.deleteVariable({
          id: variable.id,
          value: variable.value,
          key: variable.key
        });
        removeEditableVariable(variable.id);
      } catch (error) {
        showError(error, i18n.baseText("variables.errors.delete"));
      }
    };
    const updateFilter = (state) => {
      void router.replace({ query: pickBy(state) });
    };
    const onSearchUpdated = (search) => {
      updateFilter({ ...filters.value, search });
    };
    const filters = ref({
      ...route.query,
      incomplete: route.query.incomplete?.toString() === "true"
    });
    const handleFilter = (resource, newFilters, matches) => {
      const Resource = resource;
      const filtersToApply = newFilters;
      if (filtersToApply.incomplete) {
        matches = matches && !Resource.value;
      }
      return matches;
    };
    const nameSortFn = (a, b, direction) => {
      if (`${a.id}`.startsWith(TEMPORARY_VARIABLE_UID_BASE)) {
        return -1;
      } else if (`${b.id}`.startsWith(TEMPORARY_VARIABLE_UID_BASE)) {
        return 1;
      }
      return direction === "asc" ? displayName(a).trim().localeCompare(displayName(b).trim()) : displayName(b).trim().localeCompare(displayName(a).trim());
    };
    const sortFns = {
      nameAsc: (a, b) => nameSortFn(a, b, "asc"),
      nameDesc: (a, b) => nameSortFn(a, b, "desc")
    };
    const unavailableNoticeProps = computed(() => ({
      emoji: "👋",
      heading: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.title),
      description: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.description),
      buttonText: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.button),
      buttonType: "secondary",
      "onClick:button": goToUpgrade,
      "data-test-id": "unavailable-resources-list"
    }));
    function goToUpgrade() {
      void usePageRedirectionHelper().goToUpgrade("variables", "upgrade-variables");
    }
    function displayName(resource) {
      return resource.key;
    }
    sourceControlStore.$onAction(({ name, after }) => {
      if (name === "pullWorkfolder" && after) {
        after(() => {
          void execute();
        });
      }
    });
    onMounted(() => {
      useDocumentTitle().set(i18n.baseText("variables.heading"));
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      return openBlock(), createBlock(ResourcesListLayout, {
        ref_key: "layoutRef",
        ref: layoutRef,
        filters: filters.value,
        "onUpdate:filters": [
          _cache[0] || (_cache[0] = ($event) => filters.value = $event),
          updateFilter
        ],
        "resource-key": "variables",
        disabled: !isFeatureEnabled.value,
        resources: variables.value,
        "additional-filters-handler": handleFilter,
        shareable: false,
        "display-name": displayName,
        "sort-fns": sortFns,
        "sort-options": ["nameAsc", "nameDesc"],
        type: "datatable",
        "type-props": { columns: columns.value },
        loading: unref(isLoading),
        "onUpdate:search": onSearchUpdated,
        "onClick:add": addEmptyVariableForm
      }, createSlots({
        header: withCtx(() => [
          createVNode(_component_n8n_heading, {
            size: "2xlarge",
            class: "mb-m"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("variables.heading")), 1)
            ]),
            _: 1
          })
        ]),
        "add-button": withCtx(() => [
          createVNode(unref(N8nTooltip), {
            placement: "top",
            disabled: canCreateVariables.value
          }, {
            content: withCtx(() => [
              !isFeatureEnabled.value ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText(`variables.add.unavailable${variables.value.length === 0 ? ".empty" : ""}`)), 1)) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("variables.add.onlyOwnerCanCreate")), 1))
            ]),
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(N8nButton), {
                  size: "medium",
                  block: "",
                  disabled: !canCreateVariables.value,
                  "data-test-id": "resources-list-add",
                  onClick: addEmptyVariableForm
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText(`variables.add`)), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        filters: withCtx(({ setKeyValue }) => [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(N8nInputLabel), {
              label: unref(i18n).baseText("credentials.filters.status"),
              bold: false,
              size: "small",
              color: "text-base",
              class: "mb-3xs"
            }, null, 8, ["label"]),
            createVNode(unref(N8nCheckbox), {
              label: "Value missing",
              "data-test-id": "variable-filter-incomplete",
              "model-value": filters.value.incomplete,
              "onUpdate:modelValue": ($event) => setKeyValue("incomplete", $event)
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])
        ]),
        default: withCtx(({ data }) => [
          editableVariables.value.includes(data.id) ? (openBlock(), createBlock(VariablesForm, {
            key: data.id,
            "data-test-id": "variables-row",
            variable: data,
            onSubmit: handleSubmit,
            onCancel: ($event) => removeEditableVariable(data.id)
          }, null, 8, ["variable", "onCancel"])) : (openBlock(), createElementBlock("tr", _hoisted_4, [
            createBaseVNode("td", null, toDisplayString(data.key), 1),
            createBaseVNode("td", null, [
              data.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(data.value), 1)
              ], 64)) : (openBlock(), createBlock(unref(N8nBadge), {
                key: 1,
                theme: "warning"
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode(" Value missing ")
                ])),
                _: 1
              }))
            ]),
            createBaseVNode("td", null, [
              data.key ? (openBlock(), createBlock(VariablesUsageBadge, {
                key: 0,
                name: data.key
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ]),
            isFeatureEnabled.value ? (openBlock(), createElementBlock("td", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(N8nTooltip), {
                  disabled: permissions.value.update,
                  placement: "top"
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit.onlyRoleCanEdit")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(N8nButton), {
                      "data-test-id": "variable-row-edit-button",
                      type: "tertiary",
                      class: "mr-xs",
                      disabled: !permissions.value.update,
                      onClick: ($event) => addToEditableVariables(data.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit")), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["disabled"]),
                createVNode(unref(N8nTooltip), {
                  disabled: permissions.value.delete,
                  placement: "top"
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete.onlyRoleCanDelete")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(N8nButton), {
                      "data-test-id": "variable-row-delete-button",
                      type: "tertiary",
                      disabled: !permissions.value.delete,
                      onClick: ($event) => handleDeleteVariable(data)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete")), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["disabled"])
              ])
            ])) : createCommentVNode("", true)
          ]))
        ]),
        _: 2
      }, [
        !isFeatureEnabled.value ? {
          name: "preamble",
          fn: withCtx(() => [
            createVNode(unref(N8nActionBox), mergeProps({ class: "mb-m" }, unavailableNoticeProps.value), null, 16)
          ]),
          key: "0"
        } : void 0,
        !isFeatureEnabled.value || isFeatureEnabled.value && !canCreateVariables.value ? {
          name: "empty",
          fn: withCtx(() => [
            !isFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nActionBox), normalizeProps(mergeProps({ key: 0 }, unavailableNoticeProps.value)), null, 16)) : !canCreateVariables.value ? (openBlock(), createBlock(unref(N8nActionBox), {
              key: 1,
              "data-test-id": "cannot-create-variables",
              emoji: "👋",
              heading: unref(i18n).baseText("variables.empty.notAllowedToCreate.heading", {
                interpolate: { name: unref(usersStore).currentUser?.firstName ?? "" }
              }),
              description: unref(i18n).baseText("variables.empty.notAllowedToCreate.description"),
              onClick: goToUpgrade
            }, null, 8, ["heading", "description"])) : createCommentVNode("", true)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["filters", "disabled", "resources", "type-props", "loading"]);
    };
  }
});
const VariablesView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c016e27e"]]);
export {
  VariablesView as default
};
