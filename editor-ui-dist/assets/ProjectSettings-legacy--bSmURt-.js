;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./radio-legacy-B71_qGkT.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./folders.store-legacy-C8VGYd29.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./orderBy-legacy-CdPMW7_h.js", "./ProjectSharing-legacy-whwJ1PEb.js", "./roles.store-legacy-8cTG8Ztk.js", "./readyToRunWorkflowsV2.store-legacy-C5SMFEOl.js", "./ProjectHeader-legacy-Bnsaa6ZB.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, guardReactiveProps, ref, createVNode, defineComponent, toDisplayString, createBlock, mergeModels, onMounted, normalizeClass, watch, withCtx, openBlock, useModel, withModifiers, createTextVNode, onBeforeMount, normalizeProps, createBaseVNode, I18nT, useI18n, useDebounceFn, N8nActionToggle_default, N8nFormInput_default, N8nInput_default, N8nText_default, N8nButton_default, N8nInputLabel_default, N8nUserSelect_default, N8nIconPicker_default, N8nUserInfo_default, N8nDataTableServer_default, N8nActionDropdown_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, ElRadio, ElDialog, useProjectsStore, useDocumentTitle, useUsersStore, isProjectRole, useTelemetry, useToast, deepCopy, VIEWS, useCloudPlanStore, usePageRedirectionHelper, isIconOrEmoji, ProjectSharing_default, useRolesStore, ProjectHeader_default, __vite_style__, _hoisted_1$4, _hoisted_2$1, ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default, operation, ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default, cssModules$2, ProjectDeleteDialog_default, _hoisted_1$3, ProjectRoleUpgradeDialog_vue_vue_type_script_setup_true_lang_default, ProjectRoleUpgradeDialog_default, ProjectMembersActionsCell_vue_vue_type_script_setup_true_lang_default, ProjectMembersActionsCell_default, _hoisted_1$2, ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default, roleLabel, radioLabel, ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ProjectMembersRoleCell_default, _hoisted_1$1, ProjectMembersTable_vue_vue_type_script_setup_true_lang_default, ProjectMembersTable_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, SEARCH_THRESHOLD, ProjectSettings_vue_vue_type_script_setup_true_lang_default, projectSettings, header, headerRow, headerButtons, upgrade, membersInputRow, membersTableContainer, search, projectName, projectNameInput, projectDescriptionInput, userSelect, danger, ProjectSettings_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectSettings_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        guardReactiveProps = _vueRuntimeEsmBundlerLegacy003Js.I;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        useDebounceFn = _MapCacheLegacy005Js.rt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nFormInput_default = _srcLegacy007Js.B;
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInputLabel_default = _srcLegacy007Js.Y;
        N8nUserSelect_default = _srcLegacy007Js.d;
        N8nIconPicker_default = _srcLegacy007Js.l;
        N8nUserInfo_default = _srcLegacy007Js.p;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nActionDropdown_default = _srcLegacy007Js.tt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_radioLegacy00xJs) {
        ElRadio = _radioLegacy00xJs.t;
      }, function (_dialogLegacy00BJs) {
        ElDialog = _dialogLegacy00BJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        isProjectRole = _useTelemetryLegacy00FJs.sr;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        deepCopy = _constantsLegacy00NJs.Hi;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_foldersStoreLegacy01tJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_ProjectIconLegacy025Js) {
        isIconOrEmoji = _ProjectIconLegacy025Js.n;
      }, function (_orderByLegacy02JJs) {}, function (_ProjectSharingLegacy02LJs) {
        ProjectSharing_default = _ProjectSharingLegacy02LJs.t;
      }, function (_rolesStoreLegacy02NJs) {
        useRolesStore = _rolesStoreLegacy02NJs.t;
      }, function (_readyToRunWorkflowsV2StoreLegacy03XJs) {}, function (_ProjectHeaderLegacy04vJs) {
        ProjectHeader_default = _ProjectHeaderLegacy04vJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._operation_12mti_123 {\n  padding: 0 0 var(--spacing--lg) var(--spacing--lg);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._roleLabel_3ta9s_123 {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing--3xs);\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n}\n._radioLabel_3ta9s_133 {\n  max-width: 268px;\n  display: inline-flex;\n  flex-direction: column;\n  padding: var(--spacing--2xs) 0;\n}\n._radioLabel_3ta9s_133 span {\n  white-space: normal;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._projectSettings_142pd_123 {\n  --project-field--width: 560px;\n  display: grid;\n  width: 100%;\n  justify-items: center;\n  grid-auto-rows: max-content;\n}\n._projectSettings_142pd_123 form {\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: 0 var(--spacing--2xl);\n}\n._projectSettings_142pd_123 form fieldset {\n  padding-bottom: var(--spacing--xl);\n}\n._projectSettings_142pd_123 form fieldset h3 label {\n  font-size: var(--font-size--lg);\n}\n._projectSettings_142pd_123 form fieldset label {\n  display: block;\n  margin-bottom: var(--spacing--xs);\n  font-size: var(--font-size--sm);\n}\n._header_142pd_147 {\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--lg) var(--spacing--2xl) 0;\n}\n._headerRow_142pd_153 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing--md);\n}\n._headerButtons_142pd_160 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._upgrade_142pd_166 {\n  cursor: pointer;\n}\n._membersInputRow_142pd_170 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--spacing--md);\n  margin-bottom: var(--spacing--sm);\n}\n._membersTableContainer_142pd_178 {\n  margin-top: var(--spacing--sm);\n}\n._search_142pd_182 {\n  max-width: 300px;\n  flex-shrink: 0;\n}\n._projectName_142pd_187 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  max-width: var(--project-field--width);\n}\n._projectName_142pd_187 ._projectNameInput_142pd_192 {\n  flex: 1;\n}\n._projectDescriptionInput_142pd_196,\n._userSelect_142pd_197 {\n  max-width: var(--project-field--width);\n  width: 100%;\n}\n\n/* Ensure textarea uses regular UI font, not monospace */\n._projectDescriptionInput_142pd_196 textarea {\n  font-family: var(--font-family);\n}\n._danger_142pd_207 {\n  display: block;\n  padding-bottom: var(--spacing--lg);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/collaboration/projects/components/ProjectDeleteDialog.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$4 = {
          key: 1
        };
        _hoisted_2$1 = {
          class: "pt-l"
        };
        ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectDeleteDialog",
          props: /* @__PURE__ */mergeModels({
            currentProject: {},
            projects: {},
            resourceCounts: {}
          }, {
            "modelValue": {
              type: Boolean
            },
            "modelModifiers": {}
          }),
          emits: /* @__PURE__ */mergeModels(["confirmDelete"], ["update:modelValue"]),
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const visible = useModel(__props, "modelValue");
            const emit = __emit;
            const locale = useI18n();
            const selectedProject = ref(null);
            const operation$1 = ref(null);
            const wipeConfirmText = ref("");
            const hasMovableResources = computed(() => props.resourceCounts.credentials + props.resourceCounts.workflows + props.resourceCounts.dataTables > 0);
            const isValid = computed(() => {
              const expectedWipeConfirmation = locale.baseText("projects.settings.delete.question.wipe.placeholder");
              return !hasMovableResources.value || operation$1.value === "transfer" && !!selectedProject.value || operation$1.value === "wipe" && wipeConfirmText.value === expectedWipeConfirmation;
            });
            const onDelete = () => {
              if (!isValid.value) return;
              if (operation$1.value === "wipe") selectedProject.value = null;
              emit("confirmDelete", selectedProject.value?.id);
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                modelValue: visible.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => visible.value = $event),
                title: unref(locale).baseText("projects.settings.delete.title", {
                  interpolate: {
                    projectName: props.currentProject?.name ?? ""
                  }
                }),
                width: "650"
              }, {
                footer: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "danger",
                  "native-type": "button",
                  disabled: !isValid.value,
                  "data-test-id": "project-settings-delete-confirm-button",
                  onClick: withModifiers(onDelete, ["stop", "prevent"])
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.danger.deleteProject")), 1)]),
                  _: 1
                }, 8, ["disabled"])]),
                default: withCtx(() => [!hasMovableResources.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message.empty")), 1)]),
                  _: 1
                })) : hasMovableResources.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)]),
                  _: 1
                }), createBaseVNode("div", _hoisted_2$1, [createVNode(unref(ElRadio), {
                  "model-value": operation$1.value ?? "",
                  label: "transfer",
                  class: "mb-s",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => operation$1.value = "transfer")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    color: "text-dark"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.label")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["model-value"]), operation$1.value === "transfer" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.operation)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.title")), 1)]),
                  _: 1
                }), createVNode(ProjectSharing_default, {
                  modelValue: selectedProject.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedProject.value = $event),
                  class: "pt-2xs",
                  projects: props.projects,
                  "empty-options-text": unref(locale).baseText("projects.sharing.noMatchingProjects")
                }, null, 8, ["modelValue", "projects", "empty-options-text"])], 2)) : createCommentVNode("", true), createVNode(unref(ElRadio), {
                  "model-value": operation$1.value ?? "",
                  label: "wipe",
                  class: "mb-s",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => operation$1.value = "wipe")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    color: "text-dark"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.wipe.label")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["model-value"]), operation$1.value === "wipe" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.operation)
                }, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(locale).baseText("projects.settings.delete.question.wipe.title")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nInput_default), {
                    modelValue: wipeConfirmText.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => wipeConfirmText.value = $event),
                    "data-test-id": "project-delete-confirm-input",
                    placeholder: unref(locale).baseText("projects.settings.delete.question.wipe.placeholder")
                  }, null, 8, ["modelValue", "placeholder"])]),
                  _: 1
                }, 8, ["label"])], 2)) : createCommentVNode("", true)])])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["modelValue", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectDeleteDialog.vue?vue&type=style&index=0&lang.module.scss
        operation = "_operation_12mti_123";
        ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default = {
          operation
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectDeleteDialog.vue
        cssModules$2 = {
          "$style": ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default
        };
        ProjectDeleteDialog_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/collaboration/projects/components/ProjectRoleUpgradeDialog.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = {
          class: "pt-l"
        };
        ProjectRoleUpgradeDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectRoleUpgradeDialog",
          props: /* @__PURE__ */mergeModels({
            limit: {},
            planName: {}
          }, {
            "modelValue": {
              type: Boolean
            },
            "modelModifiers": {}
          }),
          emits: ["update:modelValue"],
          setup(__props) {
            const props = __props;
            const visible = useModel(__props, "modelValue");
            const pageRedirectionHelper = usePageRedirectionHelper();
            const locale = useI18n();
            const goToUpgrade = async () => {
              await pageRedirectionHelper.goToUpgrade("rbac", "upgrade-rbac");
              visible.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                modelValue: visible.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => visible.value = $event),
                title: unref(locale).baseText("projects.settings.role.upgrade.title"),
                width: "500"
              }, {
                footer: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  "native-type": "button",
                  onClick: _cache[0] || (_cache[0] = $event => visible.value = false)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  "native-type": "button",
                  onClick: goToUpgrade
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limitReached.link")), 1)]),
                  _: 1
                })]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(unref(I18nT), {
                  keypath: "projects.settings.role.upgrade.message",
                  scope: "global"
                }, {
                  planName: withCtx(() => [createTextVNode(toDisplayString(props.planName), 1)]),
                  limit: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limit", {
                    adjustToNumber: props.limit,
                    interpolate: {
                      count: String(props.limit)
                    }
                  })), 1)]),
                  _: 1
                })])]),
                _: 1
              }, 8, ["modelValue", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectRoleUpgradeDialog.vue
        ProjectRoleUpgradeDialog_default = ProjectRoleUpgradeDialog_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersActionsCell.vue?vue&type=script&setup=true&lang.ts
        ProjectMembersActionsCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectMembersActionsCell",
          props: {
            data: {},
            actions: {}
          },
          emits: ["action"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const onAction = action => {
              emit("action", {
                action,
                userId: props.data.id
              });
            };
            return (_ctx, _cache) => {
              return props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
                key: 0,
                placement: "bottom",
                actions: props.actions,
                theme: "dark",
                onAction
              }, null, 8, ["actions"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersActionsCell.vue
        ProjectMembersActionsCell_default = ProjectMembersActionsCell_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersRoleCell.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = {
          key: 1
        };
        ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectMembersRoleCell",
          props: {
            data: {},
            roles: {},
            actions: {}
          },
          emits: ["update:role", "badge-click"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const selectedRole = computed(() => props.roles.find(role => role.slug === props.data.role));
            const isEditable = computed(() => props.data.role !== "project:personalOwner");
            const onActionSelect = role => {
              emit("update:role", {
                role,
                userId: props.data.id
              });
            };
            return (_ctx, _cache) => {
              return isEditable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
                key: 0,
                placement: "bottom-start",
                items: props.actions,
                "max-height": 280,
                "data-test-id": "project-member-role-dropdown",
                onSelect: onActionSelect,
                onBadgeClick: _cache[0] || (_cache[0] = $event => emit("badge-click", $event))
              }, {
                activator: withCtx(() => [createBaseVNode("button", {
                  class: normalizeClass(_ctx.$style.roleLabel),
                  type: "button"
                }, [createVNode(unref(N8nText_default), {
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(selectedRole.value?.displayName), 1)]),
                  _: 1
                }), createVNode(unref(N8nIcon_default), {
                  color: "text-dark",
                  icon: "chevron-down",
                  size: "large"
                })], 2)]),
                menuItem: withCtx(item => [createVNode(unref(ElRadio), {
                  "model-value": selectedRole.value?.slug,
                  label: item.id,
                  disabled: item.disabled
                }, {
                  default: withCtx(() => [createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.radioLabel)
                  }, [createVNode(unref(N8nText_default), {
                    color: "text-dark",
                    class: "pb-3xs"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
                    _: 2
                  }, 1024), createVNode(unref(N8nText_default), {
                    color: "text-dark",
                    size: "small"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
                    _: 2
                  }, 1024)], 2)]),
                  _: 2
                }, 1032, ["model-value", "label", "disabled"])]),
                _: 1
              }, 8, ["items"])) : (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(selectedRole.value?.displayName), 1));
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersRoleCell.vue?vue&type=style&index=0&lang.module.scss
        roleLabel = "_roleLabel_3ta9s_123";
        radioLabel = "_radioLabel_3ta9s_133";
        ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default = {
          roleLabel,
          radioLabel
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersRoleCell.vue
        cssModules$1 = {
          "$style": ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default
        };
        ProjectMembersRoleCell_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersTable.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          class: "pt-xs pb-xs"
        };
        ProjectMembersTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectMembersTable",
          props: /* @__PURE__ */mergeModels({
            data: {},
            loading: {
              type: Boolean
            },
            currentUserId: {},
            projectRoles: {},
            actions: {}
          }, {
            "tableOptions": {
              default: () => ({
                page: 0,
                itemsPerPage: 10,
                sortBy: []
              })
            },
            "tableOptionsModifiers": {}
          }),
          emits: /* @__PURE__ */mergeModels(["update:options", "update:role", "action", "show-upgrade-dialog"], ["update:tableOptions"]),
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const props = __props;
            const emit = __emit;
            const tableOptions = useModel(__props, "tableOptions");
            const rows = computed(() => props.data.items);
            const headers = ref([{
              title: i18n.baseText("projects.settings.table.header.user"),
              key: "name",
              width: 400,
              disableSort: true,
              value: row => row
            }, {
              title: i18n.baseText("projects.settings.table.header.role"),
              key: "role",
              disableSort: true
            }, {
              title: "",
              key: "actions",
              align: "end",
              width: 46,
              disableSort: true,
              value() {}
            }]);
            const roleActions = computed(() => props.projectRoles.map(role => ({
              id: role.slug,
              label: role.displayName,
              disabled: !role.licensed,
              description: role.description ?? void 0,
              badge: !role.licensed ? i18n.baseText("generic.upgrade") : void 0,
              badgeProps: !role.licensed ? {
                theme: "warning",
                bold: true
              } : void 0
            })));
            const canUpdateRole = member => member.id !== props.currentUserId;
            const onRoleChange = ({
              role,
              userId
            }) => {
              emit("update:role", {
                role,
                userId
              });
            };
            const filterActions = member => {
              if (member.id === props.currentUserId || member.role === "project:personalOwner") return [];
              return (props.actions ?? []).filter(action => action.guard?.(member) ?? true);
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nDataTableServer_default), {
                "sort-by": tableOptions.value.sortBy,
                "onUpdate:sortBy": _cache[2] || (_cache[2] = $event => tableOptions.value.sortBy = $event),
                page: tableOptions.value.page,
                "onUpdate:page": _cache[3] || (_cache[3] = $event => tableOptions.value.page = $event),
                "items-per-page": _ctx.data.count,
                headers: headers.value,
                items: rows.value,
                "items-length": _ctx.data.count,
                loading: _ctx.loading,
                "page-sizes": [_ctx.data.count + 1],
                "onUpdate:options": _cache[4] || (_cache[4] = $event => emit("update:options", $event))
              }, {
                [`item.name`]: withCtx(({
                  value
                }) => [createBaseVNode("div", _hoisted_1$1, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
                [`item.role`]: withCtx(({
                  item
                }) => [canUpdateRole(item) ? (openBlock(), createBlock(ProjectMembersRoleCell_default, {
                  key: 0,
                  data: item,
                  roles: props.projectRoles,
                  actions: roleActions.value,
                  "onUpdate:role": onRoleChange,
                  onBadgeClick: _cache[0] || (_cache[0] = $event => emit("show-upgrade-dialog"))
                }, null, 8, ["data", "roles", "actions"])) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(props.projectRoles.find(role => role.slug === item.role)?.displayName ?? item.role), 1)]),
                  _: 2
                }, 1024))]),
                [`item.actions`]: withCtx(({
                  item
                }) => [createVNode(ProjectMembersActionsCell_default, {
                  data: item,
                  actions: filterActions(item),
                  onAction: _cache[1] || (_cache[1] = $event => _ctx.$emit("action", $event))
                }, null, 8, ["data", "actions"])]),
                _: 2
              }, 1032, ["sort-by", "page", "items-per-page", "headers", "items", "items-length", "loading", "page-sizes"])]);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectMembersTable.vue
        ProjectMembersTable_default = ProjectMembersTable_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/collaboration/projects/views/ProjectSettings.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          for: "projectName"
        };
        _hoisted_2 = {
          for: "projectDescription"
        };
        _hoisted_3 = {
          for: "projectMembers"
        };
        _hoisted_4 = {
          class: "mb-m"
        };
        SEARCH_THRESHOLD = 10;
        ProjectSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectSettings",
          setup(__props) {
            const usersStore = useUsersStore();
            const i18n = useI18n();
            const projectsStore = useProjectsStore();
            const rolesStore = useRolesStore();
            const cloudPlanStore = useCloudPlanStore();
            const toast = useToast();
            const router = useRouter();
            const telemetry = useTelemetry();
            const documentTitle = useDocumentTitle();
            const showSaveError = error => {
              toast.showError(error, i18n.baseText("projects.settings.save.error.title"));
            };
            const dialogVisible = ref(false);
            const upgradeDialogVisible = ref(false);
            const isDirty = ref(false);
            const isValid = ref(false);
            const resourceCounts = ref({
              credentials: -1,
              dataTables: -1,
              workflows: -1
            });
            const formData = ref({
              name: "",
              description: "",
              relations: []
            });
            const suppressNextSync = ref(false);
            const nameInput = ref(null);
            const projectIcon = ref({
              type: "icon",
              value: "layers"
            });
            const search$1 = ref("");
            const membersTableState = ref({
              page: 0,
              itemsPerPage: 10,
              sortBy: [{
                id: "firstName",
                desc: false
              }, {
                id: "lastName",
                desc: false
              }, {
                id: "email",
                desc: false
              }]
            });
            const usersList = computed(() => usersStore.allUsers.filter(user => {
              return !(formData.value.relations || []).find(r => r.id === user.id);
            }));
            const projects = computed(() => projectsStore.availableProjects.filter(project => project.id !== projectsStore.currentProjectId));
            const firstLicensedRole = computed(() => rolesStore.processedProjectRoles.find(role => role.licensed)?.slug);
            const projectMembersActions = computed(() => [{
              label: i18n.baseText("projects.settings.table.row.removeUser"),
              value: "remove",
              guard: member => member.id !== usersStore.currentUser?.id && member.role !== "project:personalOwner"
            }]);
            const onAddMember = async userId => {
              if (!projectsStore.currentProject) return;
              if (!usersStore.usersById[userId]) return;
              const role = firstLicensedRole.value;
              if (!role) return;
              if (!formData.value.relations.find(r => r.id === userId)) formData.value.relations.push({
                id: userId,
                role
              });
              try {
                suppressNextSync.value = true;
                await projectsStore.addMember(projectsStore.currentProject.id, {
                  userId,
                  role
                });
                toast.showMessage({
                  type: "success",
                  title: i18n.baseText("projects.settings.member.added.title")
                });
                telemetry.track("User added member to project", {
                  project_id: projectsStore.currentProject.id,
                  target_user_id: userId,
                  role
                });
              } catch (error) {
                formData.value.relations = formData.value.relations.filter(r => r.id !== userId);
                showSaveError(error);
              }
            };
            const onUpdateMemberRole = async ({
              userId,
              role
            }) => {
              if (!projectsStore.currentProject) return;
              const memberIndex = formData.value.relations.findIndex(r => r.id === userId);
              if (memberIndex === -1) return;
              const originalRole = formData.value.relations[memberIndex].role;
              formData.value.relations[memberIndex].role = role;
              try {
                suppressNextSync.value = true;
                await projectsStore.updateMemberRole(projectsStore.currentProject.id, userId, role);
                rolesStore.fetchRoles();
                toast.showMessage({
                  type: "success",
                  title: i18n.baseText("projects.settings.memberRole.updated.title")
                });
                telemetry.track("User changed member role on project", {
                  project_id: projectsStore.currentProject.id,
                  target_user_id: userId,
                  role
                });
              } catch (error) {
                formData.value.relations[memberIndex].role = originalRole;
                toast.showError(error, i18n.baseText("projects.settings.memberRole.update.error.title"));
              }
            };
            const onTextInput = () => {
              isDirty.value = true;
            };
            async function onRemoveMember(userId) {
              const current = projectsStore.currentProject;
              if (!current) return;
              const idx = formData.value.relations.findIndex(r => r.id === userId);
              if (idx === -1) return;
              const removed = formData.value.relations.splice(idx, 1)[0];
              if (!current.relations.some(r => r.id === userId)) return;
              try {
                suppressNextSync.value = true;
                await projectsStore.removeMember(current.id, userId);
                toast.showMessage({
                  type: "success",
                  title: i18n.baseText("projects.settings.member.removed.title")
                });
                telemetry.track("User removed member from project", {
                  project_id: current.id,
                  target_user_id: userId
                });
              } catch (error) {
                formData.value.relations.splice(idx, 0, removed);
                showSaveError(error);
              }
            }
            const onMembersListAction = async ({
              action,
              userId
            }) => {
              switch (action) {
                case "remove":
                  await onRemoveMember(userId);
                  break;
                default:
                  break;
              }
            };
            const resetFormData = () => {
              formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
              formData.value.name = projectsStore.currentProject?.name ?? "";
              formData.value.description = projectsStore.currentProject?.description ?? "";
            };
            const onCancel = () => {
              resetFormData();
              isDirty.value = false;
            };
            const makeFormDataDiff = () => {
              const diff = {};
              if (!projectsStore.currentProject) return diff;
              if (formData.value.name !== projectsStore.currentProject.name) diff.name = formData.value.name ?? "";
              if (formData.value.description !== projectsStore.currentProject.description) diff.description = formData.value.description ?? "";
              if (formData.value.relations.length !== projectsStore.currentProject.relations.length) {
                diff.memberAdded = formData.value.relations.filter(r => !projectsStore.currentProject?.relations.find(cr => cr.id === r.id));
                diff.memberRemoved = projectsStore.currentProject.relations.filter(cr => !formData.value.relations.find(r => r.id === cr.id));
              }
              diff.role = formData.value.relations.filter(r => {
                return projectsStore.currentProject?.relations.find(cr => cr.id === r.id)?.role !== r.role && !diff.memberAdded?.find(ar => ar.id === r.id);
              });
              return diff;
            };
            const sendTelemetry = diff => {
              const projectId = projectsStore.currentProject?.id;
              if (diff.name) telemetry.track("User changed project name", {
                project_id: projectId,
                name: diff.name
              });
              diff.memberAdded?.forEach(r => {
                telemetry.track("User added member to project", {
                  project_id: projectId,
                  target_user_id: r.id,
                  role: r.role
                });
              });
              diff.memberRemoved?.forEach(r => {
                telemetry.track("User removed member from project", {
                  project_id: projectId,
                  target_user_id: r.id
                });
              });
              diff.role?.forEach(r => {
                telemetry.track("User changed member role on project", {
                  project_id: projectId,
                  target_user_id: r.id,
                  role: r.role
                });
              });
            };
            const updateProject = async () => {
              if (!projectsStore.currentProject) return;
              try {
                await projectsStore.updateProject(projectsStore.currentProject.id, {
                  name: formData.value.name ?? "",
                  description: formData.value.description ?? ""
                });
                isDirty.value = false;
              } catch (error) {
                showSaveError(error);
                throw error;
              }
            };
            const onSubmit = async () => {
              if (!isDirty.value) return;
              try {
                await updateProject();
                sendTelemetry(makeFormDataDiff());
                toast.showMessage({
                  title: i18n.baseText("projects.settings.save.successful.title", {
                    interpolate: {
                      projectName: formData.value.name ?? ""
                    }
                  }),
                  type: "success"
                });
              } catch (error) {}
            };
            const onDelete = async () => {
              await projectsStore.getAvailableProjects();
              if (projectsStore.currentProjectId) resourceCounts.value = await projectsStore.getResourceCounts(projectsStore.currentProjectId);
              dialogVisible.value = true;
            };
            const onConfirmDelete = async transferId => {
              try {
                if (projectsStore.currentProject) {
                  const projectName$1 = projectsStore.currentProject?.name ?? "";
                  await projectsStore.deleteProject(projectsStore.currentProject.id, transferId);
                  await router.push({
                    name: VIEWS.HOMEPAGE
                  });
                  toast.showMessage({
                    title: i18n.baseText("projects.settings.delete.successful.title", {
                      interpolate: {
                        projectName: projectName$1
                      }
                    }),
                    type: "success"
                  });
                  dialogVisible.value = true;
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("projects.settings.delete.error.title"));
              }
            };
            const selectProjectNameIfMatchesDefault = () => {
              if (formData.value.name === i18n.baseText("projects.settings.newProjectName")) {
                nameInput.value?.inputRef?.focus();
                nameInput.value?.inputRef?.select();
              }
            };
            const onIconUpdated = async () => {
              if (!projectsStore.currentProject) return;
              try {
                await projectsStore.updateProject(projectsStore.currentProject.id, {
                  icon: projectIcon.value
                });
                toast.showMessage({
                  title: i18n.baseText("projects.settings.icon.update.successful.title"),
                  type: "success"
                });
              } catch (error) {
                showSaveError(error);
              }
            };
            watch(() => projectsStore.currentProject, async () => {
              if (suppressNextSync.value) {
                suppressNextSync.value = false;
                return;
              }
              resetFormData();
              await nextTick();
              selectProjectNameIfMatchesDefault();
              if (projectsStore.currentProject?.icon && isIconOrEmoji(projectsStore.currentProject.icon)) projectIcon.value = projectsStore.currentProject.icon;
            }, {
              immediate: true
            });
            const relationUsers = computed(() => formData.value.relations.map(relation => {
              const user = usersStore.usersById[relation.id];
              const safeRole = isProjectRole(relation.role) ? relation.role : "project:viewer";
              return {
                ...user,
                ...relation,
                role: safeRole,
                firstName: user?.firstName ?? null,
                lastName: user?.lastName ?? null,
                email: user?.email ?? null
              };
            }));
            const membersTableData = computed(() => ({
              items: relationUsers.value,
              count: relationUsers.value.length
            }));
            const filteredMembersData = computed(() => {
              if (!search$1.value.trim()) return membersTableData.value;
              const searchTerm = search$1.value.toLowerCase();
              const filtered = relationUsers.value.filter(member => {
                const fullName = `${member.firstName ?? ""} ${member.lastName ?? ""}`.toLowerCase();
                const email = (member.email ?? "").toLowerCase();
                return fullName.includes(searchTerm) || email.includes(searchTerm);
              });
              return {
                items: filtered,
                count: filtered.length
              };
            });
            const shouldShowSearch = computed(() => relationUsers.value.length >= SEARCH_THRESHOLD);
            watch(shouldShowSearch, show => {
              if (!show && search$1.value) search$1.value = "";
            });
            const debouncedSearch = useDebounceFn(() => {
              membersTableState.value.page = 0;
            }, 300);
            const onSearch = value => {
              search$1.value = value;
              debouncedSearch();
            };
            const onUpdateMembersTableOptions = options => {
              membersTableState.value = options;
            };
            onBeforeMount(async () => {
              await usersStore.fetchUsers();
            });
            onMounted(() => {
              documentTitle.set(i18n.baseText("projects.settings"));
              selectProjectNameIfMatchesDefault();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.projectSettings),
                "data-test-id": "project-settings-container"
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(ProjectHeader_default), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.headerRow)
              }, [createVNode(unref(N8nText_default), {
                tag: "h1",
                size: "xlarge",
                class: "pt-xs pb-m"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.info")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.headerButtons)
              }, [createVNode(unref(N8nButton_default), {
                type: "secondary",
                "native-type": "button",
                disabled: !isDirty.value,
                class: "mr-2xs",
                "data-test-id": "project-settings-cancel-button",
                onClick: withModifiers(onCancel, ["stop", "prevent"])
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.cancel")), 1)]),
                _: 1
              }, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
                disabled: !isValid.value || !isDirty.value,
                type: "primary",
                "data-test-id": "project-settings-save-button",
                onClick: withModifiers(onSubmit, ["stop", "prevent"])
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.save")), 1)]),
                _: 1
              }, 8, ["disabled"])], 2)], 2)], 2), createBaseVNode("form", {
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [createBaseVNode("fieldset", null, [createBaseVNode("label", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.settings.name")), 1), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.projectName)
              }, [createVNode(unref(N8nIconPicker_default), {
                modelValue: projectIcon.value,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => projectIcon.value = $event), onIconUpdated],
                "button-tooltip": unref(i18n).baseText("projects.settings.iconPicker.button.tooltip")
              }, null, 8, ["modelValue", "button-tooltip"]), createVNode(unref(N8nFormInput_default), {
                id: "projectName",
                ref_key: "nameInput",
                ref: nameInput,
                modelValue: formData.value.name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => formData.value.name = $event),
                label: "",
                type: "text",
                name: "name",
                required: "",
                "data-test-id": "project-settings-name-input",
                class: normalizeClass(_ctx.$style.projectNameInput),
                onEnter: onSubmit,
                onInput: onTextInput,
                onValidate: _cache[2] || (_cache[2] = $event => isValid.value = $event)
              }, null, 8, ["modelValue", "class"])], 2)]), createBaseVNode("fieldset", null, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.settings.description")), 1), createVNode(unref(N8nFormInput_default), {
                id: "projectDescription",
                modelValue: formData.value.description,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => formData.value.description = $event),
                label: "",
                name: "description",
                type: "textarea",
                maxlength: 512,
                autosize: true,
                "data-test-id": "project-settings-description-input",
                class: normalizeClass(_ctx.$style.projectDescriptionInput),
                onEnter: onSubmit,
                onInput: onTextInput,
                onValidate: _cache[4] || (_cache[4] = $event => isValid.value = $event)
              }, null, 8, ["modelValue", "class"])]), createBaseVNode("fieldset", null, [createBaseVNode("h3", null, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1)]), createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.membersInputRow, "mb-s"])
              }, [createVNode(unref(N8nUserSelect_default), {
                id: "projectMembers",
                class: normalizeClass(_ctx.$style.userSelect),
                size: "large",
                users: usersList.value,
                "current-user-id": unref(usersStore).currentUser?.id,
                placeholder: unref(i18n).baseText("workflows.shareModal.select.placeholder"),
                "data-test-id": "project-members-select",
                "onUpdate:modelValue": onAddMember
              }, {
                prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "search"
                })]),
                _: 1
              }, 8, ["class", "users", "current-user-id", "placeholder"]), shouldShowSearch.value ? (openBlock(), createBlock(unref(N8nInput_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.search),
                "model-value": search$1.value,
                placeholder: unref(i18n).baseText("projects.settings.members.search.placeholder"),
                clearable: "",
                "data-test-id": "project-members-search",
                "onUpdate:modelValue": onSearch
              }, {
                prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "search"
                })]),
                _: 1
              }, 8, ["class", "model-value", "placeholder"])) : createCommentVNode("", true)], 2), relationUsers.value.length > 0 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.membersTableContainer)
              }, [createVNode(ProjectMembersTable_default, {
                "table-options": membersTableState.value,
                "onUpdate:tableOptions": _cache[5] || (_cache[5] = $event => membersTableState.value = $event),
                "data-test-id": "project-members-table",
                data: filteredMembersData.value,
                "current-user-id": unref(usersStore).currentUser?.id,
                "project-roles": unref(rolesStore).processedProjectRoles,
                actions: projectMembersActions.value,
                "onUpdate:options": onUpdateMembersTableOptions,
                "onUpdate:role": onUpdateMemberRole,
                onAction: onMembersListAction,
                onShowUpgradeDialog: _cache[6] || (_cache[6] = $event => upgradeDialogVisible.value = true)
              }, null, 8, ["table-options", "data", "current-user-id", "project-roles", "actions"])], 2)) : createCommentVNode("", true)]), createBaseVNode("fieldset", null, [createBaseVNode("h3", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1), createBaseVNode("small", {
                class: normalizeClass(_ctx.$style.danger)
              }, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 3), createVNode(unref(N8nButton_default), {
                type: "tertiary",
                size: "large",
                "native-type": "button",
                "data-test-id": "project-settings-delete-button",
                onClick: withModifiers(onDelete, ["stop", "prevent"])
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.danger.deleteProject")), 1)]),
                _: 1
              })])], 32), createVNode(ProjectDeleteDialog_default, {
                modelValue: dialogVisible.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => dialogVisible.value = $event),
                "current-project": unref(projectsStore).currentProject,
                "resource-counts": resourceCounts.value,
                projects: projects.value,
                onConfirmDelete
              }, null, 8, ["modelValue", "current-project", "resource-counts", "projects"]), createVNode(ProjectRoleUpgradeDialog_default, {
                modelValue: upgradeDialogVisible.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => upgradeDialogVisible.value = $event),
                limit: unref(projectsStore).teamProjectsLimit,
                "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
              }, null, 8, ["modelValue", "limit", "plan-name"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/views/ProjectSettings.vue?vue&type=style&index=0&lang.module.scss
        projectSettings = "_projectSettings_142pd_123";
        header = "_header_142pd_147";
        headerRow = "_headerRow_142pd_153";
        headerButtons = "_headerButtons_142pd_160";
        upgrade = "_upgrade_142pd_166";
        membersInputRow = "_membersInputRow_142pd_170";
        membersTableContainer = "_membersTableContainer_142pd_178";
        search = "_search_142pd_182";
        projectName = "_projectName_142pd_187";
        projectNameInput = "_projectNameInput_142pd_192";
        projectDescriptionInput = "_projectDescriptionInput_142pd_196";
        userSelect = "_userSelect_142pd_197";
        danger = "_danger_142pd_207";
        ProjectSettings_vue_vue_type_style_index_0_lang_module_default = {
          projectSettings,
          header,
          headerRow,
          headerButtons,
          upgrade,
          membersInputRow,
          membersTableContainer,
          search,
          projectName,
          projectNameInput,
          projectDescriptionInput,
          userSelect,
          danger
        }; //#endregion
        //#region src/features/collaboration/projects/views/ProjectSettings.vue
        cssModules = {
          "$style": ProjectSettings_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ProjectSettings_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();