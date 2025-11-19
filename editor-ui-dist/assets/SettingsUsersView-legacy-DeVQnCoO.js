;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./radio-legacy-B71_qGkT.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./useClipboard-legacy-DdtOZJuB.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./EnterpriseEdition.ee-legacy-Dc4zPsd3.js", "./sso.store-legacy-Bk24_rEU.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, guardReactiveProps, ref, createVNode, defineComponent, toDisplayString, createBlock, mergeModels, onMounted, Fragment, normalizeClass, withCtx, openBlock, useModel, renderList, createTextVNode, normalizeProps, createBaseVNode, I18nT, useI18n, useDebounceFn, N8nActionToggle_default, N8nInput_default, N8nActionBox_default, N8nNotice_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nBadge_default, ElSwitch, N8nLink_default, N8nUserInfo_default, N8nDataTableServer_default, N8nActionDropdown_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, ElRadio, INVITE_USER_MODAL_KEY, useSettingsStore, hasPermission, useUIStore, useDocumentTitle, useUsersStore, DELETE_USER_MODAL_KEY, useToast, EnterpriseEditionFeature, ROLE, USERS_LIST_SORT_OPTIONS, useClipboard, usePageRedirectionHelper, formatTimeAgo, EnterpriseEdition_ee_default, useSSOStore, __vite_style__, _hoisted_1$1, SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default, roleLabel, radioLabel, removeUser, SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default, cssModules$2, SettingsUsersRoleCell_default, SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default, projects, project, comma, projectList, SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default, cssModules$1, SettingsUsersProjectsCell_default, SettingsUsersActionsCell_vue_vue_type_script_setup_true_lang_default, SettingsUsersActionsCell_default, SettingsUsersLastActiveCell_vue_vue_type_script_setup_true_lang_default, SettingsUsersLastActiveCell_default, _hoisted_1, SettingsUsersTable_vue_vue_type_script_setup_true_lang_default, SettingsUsersTable_default, tooltipKey, SettingsUsersView_vue_vue_type_script_setup_true_lang_default, userCount, buttonContainer, search, setupInfoContainer, settingsContainer, settingsContainerInfo, settingsContainerAction, container, SettingsUsersView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsUsersView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        guardReactiveProps = _vueRuntimeEsmBundlerLegacy003Js.I;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        useDebounceFn = _MapCacheLegacy005Js.rt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nNotice_default = _srcLegacy007Js.E;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nBadge_default = _srcLegacy007Js.it;
        ElSwitch = _srcLegacy007Js.kt;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nUserInfo_default = _srcLegacy007Js.p;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nActionDropdown_default = _srcLegacy007Js.tt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_radioLegacy00xJs) {
        ElRadio = _radioLegacy00xJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        INVITE_USER_MODAL_KEY = _useTelemetryLegacy00FJs.Aa;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        hasPermission = _useTelemetryLegacy00FJs.Gn;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        DELETE_USER_MODAL_KEY = _useTelemetryLegacy00FJs.pa;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        ROLE = _constantsLegacy00NJs.ar;
        USERS_LIST_SORT_OPTIONS = _constantsLegacy00NJs.pr;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_useClipboardLegacy01nJs) {
        useClipboard = _useClipboardLegacy01nJs.t;
      }, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_dateFormatterLegacy02zJs) {
        formatTimeAgo = _dateFormatterLegacy02zJs.r;
      }, function (_EnterpriseEditionEeLegacy02DJs) {
        EnterpriseEdition_ee_default = _EnterpriseEditionEeLegacy02DJs.t;
      }, function (_ssoStoreLegacy02ZJs) {
        useSSOStore = _ssoStoreLegacy02ZJs.n;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._roleLabel_uhits_123 {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing--3xs);\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n}\n._radioLabel_uhits_133 {\n  max-width: 268px;\n  display: inline-flex;\n  flex-direction: column;\n  padding: var(--spacing--2xs) 0;\n}\n._radioLabel_uhits_133 span {\n  white-space: normal;\n}\n._removeUser_uhits_143 {\n  display: block;\n  padding: var(--spacing--2xs) var(--spacing--lg);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._projects_1l6q5_123 {\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n._project_1l6q5_123 {\n  flex: 1 1 0;\n  min-width: 0;\n  max-width: max-content;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._comma_1l6q5_138 {\n  flex-shrink: 0;\n  padding: 0 var(--spacing--5xs);\n}\n._projectList_1l6q5_143 {\n  padding: 0 var(--spacing--sm);\n}\n._projectList_1l6q5_143 li {\n  list-style: disc outside;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._userCount_1n3d0_123 {\n  display: block;\n  padding: var(--spacing--3xs) 0 0;\n}\n._buttonContainer_1n3d0_128 {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--spacing--sm);\n  margin: 0 0 var(--spacing--sm);\n}\n._search_1n3d0_135 {\n  max-width: 300px;\n}\n._setupInfoContainer_1n3d0_139 {\n  max-width: 728px;\n}\n._settingsContainer_1n3d0_143 {\n  display: flex;\n  align-items: center;\n  padding-left: var(--spacing--sm);\n  margin-bottom: var(--spacing--lg);\n  justify-content: space-between;\n  flex-shrink: 0;\n  border-radius: 4px;\n  border: 1px solid var(--Colors-Foreground---color--foreground, #d9dee8);\n}\n._settingsContainerInfo_1n3d0_154 {\n  display: flex;\n  padding: 8px 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1px;\n}\n._settingsContainerAction_1n3d0_163 {\n  display: flex;\n  padding: 20px 16px 20px 248px;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n}\n._container_1n3d0_171 {\n  padding-bottom: 20px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/users/components/SettingsUsersRoleCell.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 1
        };
        SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsersRoleCell",
          props: {
            data: {},
            roles: {},
            actions: {}
          },
          emits: ["update:role"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const selectedRole = ref(props.data.role ?? ROLE.Default);
            const isEditable = computed(() => props.data.role !== ROLE.Owner);
            const roleLabel$1 = computed(() => props.roles[selectedRole.value].label);
            const onActionSelect = role => {
              emit("update:role", {
                role,
                userId: props.data.id
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [isEditable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
                key: 0,
                placement: "bottom-start",
                items: props.actions,
                "data-test-id": "user-role-dropdown",
                onSelect: onActionSelect
              }, {
                activator: withCtx(() => [createBaseVNode("button", {
                  class: normalizeClass(_ctx.$style.roleLabel),
                  type: "button"
                }, [createVNode(unref(N8nText_default), {
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(roleLabel$1.value), 1)]),
                  _: 1
                }), createVNode(unref(N8nIcon_default), {
                  color: "text-dark",
                  icon: "chevron-down",
                  size: "large"
                })], 2)]),
                menuItem: withCtx(item => [createVNode(unref(ElRadio), {
                  "model-value": selectedRole.value,
                  label: item.id,
                  "onUpdate:modelValue": $event => selectedRole.value = item.id
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
                    default: withCtx(() => [createTextVNode(toDisplayString(props.roles[item.id].desc), 1)]),
                    _: 2
                  }, 1024)], 2)]),
                  _: 2
                }, 1032, ["model-value", "label", "onUpdate:modelValue"])]),
                _: 1
              }, 8, ["items"])) : (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(roleLabel$1.value), 1))]);
            };
          }
        }); //#endregion
        //#region src/features/settings/users/components/SettingsUsersRoleCell.vue?vue&type=style&index=0&lang.module.scss
        roleLabel = "_roleLabel_uhits_123";
        radioLabel = "_radioLabel_uhits_133";
        removeUser = "_removeUser_uhits_143";
        SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default = {
          roleLabel,
          radioLabel,
          removeUser
        }; //#endregion
        //#region src/features/settings/users/components/SettingsUsersRoleCell.vue
        cssModules$2 = {
          "$style": SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default
        };
        SettingsUsersRoleCell_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/settings/users/components/SettingsUsersProjectsCell.vue?vue&type=script&setup=true&lang.ts
        SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsersProjectsCell",
          props: {
            data: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const rolesAccessingAllProjects = ref([ROLE.Owner, ROLE.Admin]);
            const visibleProjectsNum = ref(2);
            const allProjects = computed(() => {
              if (props.data.role && rolesAccessingAllProjects.value.includes(props.data.role)) return [i18n.baseText("settings.users.table.row.allProjects")];else if (!props.data.projectRelations?.length) return [i18n.baseText("settings.users.table.row.personalProject")];else return props.data.projectRelations.map(({
                name
              }) => name);
            });
            const projects$1 = computed(() => ({
              visible: allProjects.value.slice(0, visibleProjectsNum.value),
              additional: allProjects.value.slice(visibleProjectsNum.value)
            }));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.projects)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(projects$1.value.visible, (project$1, index) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: index
                }, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.project)
                }, toDisplayString(project$1), 3), index < projects$1.value.visible.length - 1 ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.comma)
                }, ",", 2)) : createCommentVNode("", true)], 64);
              }), 128)), projects$1.value.additional.length > 0 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.comma)
              }, ",", 2)) : createCommentVNode("", true), projects$1.value.additional.length > 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1
              }, {
                content: withCtx(() => [createBaseVNode("ul", {
                  class: normalizeClass(_ctx.$style.projectList)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(projects$1.value.additional, (project$1, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: index
                  }, toDisplayString(project$1), 1);
                }), 128))], 2)]),
                default: withCtx(() => [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.project)
                }, "+ " + toDisplayString(projects$1.value.additional.length), 3)]),
                _: 1
              })) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/users/components/SettingsUsersProjectsCell.vue?vue&type=style&index=0&lang.module.scss
        projects = "_projects_1l6q5_123";
        project = "_project_1l6q5_123";
        comma = "_comma_1l6q5_138";
        projectList = "_projectList_1l6q5_143";
        SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default = {
          projects,
          project,
          comma,
          projectList
        }; //#endregion
        //#region src/features/settings/users/components/SettingsUsersProjectsCell.vue
        cssModules$1 = {
          "$style": SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default
        };
        SettingsUsersProjectsCell_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/users/components/SettingsUsersActionsCell.vue?vue&type=script&setup=true&lang.ts
        SettingsUsersActionsCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsersActionsCell",
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
            const onUserAction = action => {
              emit("action", {
                action,
                userId: props.data.id
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [props.data.signInType !== "ldap" && props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
                key: 0,
                placement: "bottom",
                actions: props.actions,
                theme: "dark",
                onAction: onUserAction
              }, null, 8, ["actions"])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/users/components/SettingsUsersActionsCell.vue
        SettingsUsersActionsCell_default = SettingsUsersActionsCell_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/settings/users/components/SettingsUsersLastActiveCell.vue?vue&type=script&setup=true&lang.ts
        SettingsUsersLastActiveCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsersLastActiveCell",
          props: {
            data: {}
          },
          setup(__props) {
            const i18n = useI18n();
            const props = __props;
            const formattedDate = computed(() => props.data.lastActiveAt ? formatTimeAgo(props.data.lastActiveAt) : i18n.baseText("generic.never"));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", null, toDisplayString(formattedDate.value), 1);
            };
          }
        }); //#endregion
        //#region src/features/settings/users/components/SettingsUsersLastActiveCell.vue
        SettingsUsersLastActiveCell_default = SettingsUsersLastActiveCell_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/settings/users/components/SettingsUsersTable.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "pt-xs pb-xs"
        };
        SettingsUsersTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsersTable",
          props: /* @__PURE__ */mergeModels({
            data: {},
            actions: {},
            loading: {
              type: Boolean
            }
          }, {
            "tableOptions": {
              default: () => ({})
            },
            "tableOptionsModifiers": {}
          }),
          emits: /* @__PURE__ */mergeModels(["update:options", "update:role", "action"], ["update:tableOptions"]),
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const props = __props;
            const emit = __emit;
            const tableOptions = useModel(__props, "tableOptions");
            const rows = computed(() => props.data.items);
            const headers = ref([{
              title: i18n.baseText("settings.users.table.header.user"),
              key: "name",
              width: 400,
              value(row) {
                return {
                  ...row,
                  isPendingUser: row.isPending
                };
              }
            }, {
              title: i18n.baseText("settings.users.table.header.accountType"),
              key: "role"
            }, {
              title: i18n.baseText("settings.users.table.header.lastActive"),
              key: "lastActiveAt",
              value(row) {
                return {
                  ...row,
                  lastActiveAt: row.lastActiveAt ?? ""
                };
              }
            }, {
              title: i18n.baseText("settings.users.table.header.2fa"),
              key: "mfaEnabled",
              value(row) {
                return row.mfaEnabled ? i18n.baseText("settings.users.table.row.2fa.enabled") : i18n.baseText("settings.users.table.row.2fa.disabled");
              }
            }, {
              title: i18n.baseText("projects.menu.title"),
              key: "projects",
              disableSort: true,
              value() {}
            }, {
              title: "",
              key: "actions",
              align: "end",
              width: 46,
              disableSort: true,
              value() {}
            }]);
            const roles = computed(() => ({
              [ROLE.Owner]: {
                label: i18n.baseText("auth.roles.owner"),
                desc: ""
              },
              [ROLE.Admin]: {
                label: i18n.baseText("auth.roles.admin"),
                desc: i18n.baseText("settings.users.table.row.role.description.admin")
              },
              [ROLE.Member]: {
                label: i18n.baseText("auth.roles.member"),
                desc: i18n.baseText("settings.users.table.row.role.description.member")
              },
              [ROLE.Default]: {
                label: i18n.baseText("auth.roles.default"),
                desc: ""
              }
            }));
            const roleActions = computed(() => [{
              id: ROLE.Member,
              label: i18n.baseText("auth.roles.member")
            }, {
              id: ROLE.Admin,
              label: i18n.baseText("auth.roles.admin")
            }]);
            const canUpdateRole = computed(() => {
              return hasPermission(["rbac"], {
                rbac: {
                  scope: ["user:update", "user:changeRole"]
                }
              });
            });
            const filterActions = user => {
              if (user.isOwner) return [];
              return props.actions.filter(action => action.guard?.({
                ...user,
                isPendingUser: user.isPending
              }) ?? true);
            };
            const onRoleChange = ({
              role,
              userId
            }) => {
              emit("update:role", {
                role,
                userId
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nDataTableServer_default), {
                "sort-by": tableOptions.value.sortBy,
                "onUpdate:sortBy": _cache[1] || (_cache[1] = $event => tableOptions.value.sortBy = $event),
                page: tableOptions.value.page,
                "onUpdate:page": _cache[2] || (_cache[2] = $event => tableOptions.value.page = $event),
                "items-per-page": tableOptions.value.itemsPerPage,
                "onUpdate:itemsPerPage": _cache[3] || (_cache[3] = $event => tableOptions.value.itemsPerPage = $event),
                headers: headers.value,
                items: rows.value,
                "items-length": _ctx.data.count,
                "page-sizes": [10, 25, 50],
                "onUpdate:options": _cache[4] || (_cache[4] = $event => emit("update:options", $event))
              }, {
                [`item.name`]: withCtx(({
                  value
                }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
                [`item.role`]: withCtx(({
                  item
                }) => [canUpdateRole.value ? (openBlock(), createBlock(SettingsUsersRoleCell_default, {
                  key: 0,
                  data: item,
                  roles: roles.value,
                  actions: roleActions.value,
                  "onUpdate:role": onRoleChange
                }, null, 8, ["data", "roles", "actions"])) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(roles.value[item.role ?? unref(ROLE).Default].label), 1)]),
                  _: 2
                }, 1024))]),
                [`item.lastActiveAt`]: withCtx(({
                  item
                }) => [createVNode(SettingsUsersLastActiveCell_default, {
                  data: item
                }, null, 8, ["data"])]),
                [`item.projects`]: withCtx(({
                  item
                }) => [createVNode(SettingsUsersProjectsCell_default, {
                  data: item
                }, null, 8, ["data"])]),
                [`item.actions`]: withCtx(({
                  item
                }) => [createVNode(SettingsUsersActionsCell_default, {
                  data: item,
                  actions: filterActions(item),
                  onAction: _cache[0] || (_cache[0] = $event => _ctx.$emit("action", $event))
                }, null, 8, ["data", "actions"])]),
                _: 2
              }, 1032, ["sort-by", "page", "items-per-page", "headers", "items", "items-length"])]);
            };
          }
        }); //#endregion
        //#region src/features/settings/users/components/SettingsUsersTable.vue
        SettingsUsersTable_default = SettingsUsersTable_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/settings/users/views/SettingsUsersView.vue?vue&type=script&setup=true&lang.ts
        tooltipKey = "settings.personal.mfa.enforce.unlicensed_tooltip";
        SettingsUsersView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsersView",
          setup(__props) {
            const clipboard = useClipboard();
            const {
              showToast,
              showError
            } = useToast();
            const settingsStore = useSettingsStore();
            const uiStore = useUIStore();
            const usersStore = useUsersStore();
            const ssoStore = useSSOStore();
            const documentTitle = useDocumentTitle();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const i18n = useI18n();
            const search$1 = ref("");
            const usersTableState = ref({
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
            const showUMSetupWarning = computed(() => hasPermission(["defaultUser"]));
            const isEnforceMFAEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.EnforceMFA]);
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.users"));
              if (!showUMSetupWarning.value) await updateUsersTableData(usersTableState.value);
            });
            const usersListActions = computed(() => {
              return [{
                label: i18n.baseText("settings.users.actions.copyInviteLink"),
                value: "copyInviteLink",
                guard: user => usersStore.usersLimitNotReached && !user.firstName && !!user.inviteAcceptUrl
              }, {
                label: i18n.baseText("settings.users.actions.reinvite"),
                value: "reinvite",
                guard: user => usersStore.usersLimitNotReached && !user.firstName && settingsStore.isSmtpSetup
              }, {
                label: i18n.baseText("settings.users.actions.delete"),
                value: "delete",
                guard: user => hasPermission(["rbac"], {
                  rbac: {
                    scope: "user:delete"
                  }
                }) && user.id !== usersStore.currentUserId
              }, {
                label: i18n.baseText("settings.users.actions.copyPasswordResetLink"),
                value: "copyPasswordResetLink",
                guard: user => hasPermission(["rbac"], {
                  rbac: {
                    scope: "user:resetPassword"
                  }
                }) && usersStore.usersLimitNotReached && !user.isPendingUser && user.id !== usersStore.currentUserId
              }, {
                label: i18n.baseText("settings.users.actions.allowSSOManualLogin"),
                value: "allowSSOManualLogin",
                guard: user => !!ssoStore.isSamlLoginEnabled && !user.settings?.allowSSOManualLogin
              }, {
                label: i18n.baseText("settings.users.actions.disallowSSOManualLogin"),
                value: "disallowSSOManualLogin",
                guard: user => !!ssoStore.isSamlLoginEnabled && user.settings?.allowSSOManualLogin === true
              }];
            });
            const isAdvancedPermissionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedPermissions]);
            const userRoles = computed(() => {
              return [{
                value: ROLE.Member,
                label: i18n.baseText("auth.roles.member")
              }, {
                value: ROLE.Admin,
                label: i18n.baseText("auth.roles.admin"),
                disabled: !isAdvancedPermissionsEnabled.value
              }];
            });
            async function onUsersListAction({
              action,
              userId
            }) {
              switch (action) {
                case "delete":
                  await onDelete(userId);
                  break;
                case "reinvite":
                  await onReinvite(userId);
                  break;
                case "copyInviteLink":
                  await onCopyInviteLink(userId);
                  break;
                case "copyPasswordResetLink":
                  await onCopyPasswordResetLink(userId);
                  break;
                case "allowSSOManualLogin":
                  await onAllowSSOManualLogin(userId);
                  break;
                case "disallowSSOManualLogin":
                  await onDisallowSSOManualLogin(userId);
                  break;
              }
            }
            function onInvite() {
              uiStore.openModalWithData({
                name: INVITE_USER_MODAL_KEY,
                data: {
                  afterInvite: async () => {
                    await updateUsersTableData(usersTableState.value);
                  }
                }
              });
            }
            async function onDelete(userId) {
              uiStore.openModalWithData({
                name: DELETE_USER_MODAL_KEY,
                data: {
                  userId,
                  afterDelete: async () => {
                    await updateUsersTableData(usersTableState.value);
                  }
                }
              });
            }
            async function onReinvite(userId) {
              try {
                const user = usersStore.usersList.state.items.find(u => u.id === userId);
                if (user?.email && user?.role) {
                  if (!["global:admin", "global:member"].includes(user.role)) throw new Error("Invalid role name on reinvite");
                  await usersStore.reinviteUser({
                    email: user.email,
                    role: user.role
                  });
                  showToast({
                    type: "success",
                    title: i18n.baseText("settings.users.inviteResent"),
                    message: i18n.baseText("settings.users.emailSentTo", {
                      interpolate: {
                        email: user.email ?? ""
                      }
                    })
                  });
                }
              } catch (e) {
                showError(e, i18n.baseText("settings.users.userReinviteError"));
              }
            }
            async function onCopyInviteLink(userId) {
              const user = usersStore.usersList.state.items.find(u => u.id === userId);
              if (user?.inviteAcceptUrl) {
                clipboard.copy(user.inviteAcceptUrl);
                showToast({
                  type: "success",
                  title: i18n.baseText("settings.users.inviteUrlCreated"),
                  message: i18n.baseText("settings.users.inviteUrlCreated.message")
                });
              }
            }
            async function onCopyPasswordResetLink(userId) {
              try {
                const user = usersStore.usersList.state.items.find(u => u.id === userId);
                if (user) {
                  const url = await usersStore.getUserPasswordResetLink(user);
                  clipboard.copy(url.link);
                  showToast({
                    type: "success",
                    title: i18n.baseText("settings.users.passwordResetUrlCreated"),
                    message: i18n.baseText("settings.users.passwordResetUrlCreated.message")
                  });
                }
              } catch (error) {
                showError(error, i18n.baseText("settings.users.passwordResetLinkError"));
              }
            }
            async function onAllowSSOManualLogin(userId) {
              const user = usersStore.usersList.state.items.find(u => u.id === userId);
              if (user) {
                if (!user.settings) user.settings = {};
                user.settings.allowSSOManualLogin = true;
                await usersStore.updateOtherUserSettings(userId, user.settings);
                await updateUsersTableData(usersTableState.value);
                showToast({
                  type: "success",
                  title: i18n.baseText("settings.users.allowSSOManualLogin"),
                  message: i18n.baseText("settings.users.allowSSOManualLogin.message")
                });
              }
            }
            async function onDisallowSSOManualLogin(userId) {
              const user = usersStore.usersList.state.items.find(u => u.id === userId);
              if (user?.settings) {
                user.settings.allowSSOManualLogin = false;
                await usersStore.updateOtherUserSettings(userId, user.settings);
                await updateUsersTableData(usersTableState.value);
                showToast({
                  type: "success",
                  title: i18n.baseText("settings.users.disallowSSOManualLogin"),
                  message: i18n.baseText("settings.users.disallowSSOManualLogin.message")
                });
              }
            }
            function goToUpgrade() {
              pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-users");
            }
            function goToUpgradeAdvancedPermissions() {
              pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-advanced-permissions");
            }
            const onUpdateRole = async payload => {
              const user = usersStore.usersList.state.items.find(u => u.id === payload.userId);
              if (!user) {
                showError(/* @__PURE__ */new Error("User not found"), i18n.baseText("settings.users.userNotFound"));
                return;
              }
              await onRoleChange(user, payload.role);
            };
            async function onRoleChange(user, newRoleName) {
              try {
                await usersStore.updateGlobalRole({
                  id: user.id,
                  newRoleName
                });
                const role = userRoles.value.find(({
                  value
                }) => value === newRoleName)?.label || newRoleName;
                showToast({
                  type: "success",
                  title: i18n.baseText("settings.users.userRoleUpdated"),
                  message: i18n.baseText("settings.users.userRoleUpdated.message", {
                    interpolate: {
                      user: user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email ?? "",
                      role
                    }
                  })
                });
              } catch (e) {
                showError(e, i18n.baseText("settings.users.userReinviteError"));
              }
            }
            const isValidSortKey = key => USERS_LIST_SORT_OPTIONS.includes(key);
            const updateUsersTableData = async ({
              page,
              itemsPerPage,
              sortBy
            }) => {
              try {
                usersTableState.value = {
                  page,
                  itemsPerPage,
                  sortBy
                };
                const skip = page * itemsPerPage;
                const take = itemsPerPage;
                const transformedSortBy = sortBy.flatMap(({
                  id,
                  desc
                }) => {
                  const dir = desc ? "desc" : "asc";
                  if (id === "name") return [`firstName:${dir}`, `lastName:${dir}`, `email:${dir}`];
                  return `${id}:${dir}`;
                }).filter(isValidSortKey);
                await usersStore.usersList.execute(0, {
                  skip,
                  take,
                  sortBy: transformedSortBy,
                  expand: ["projectRelations"],
                  filter: {
                    fullText: search$1.value.trim()
                  }
                });
              } catch (error) {
                showError(error, i18n.baseText("settings.users.table.update.error"));
              }
            };
            const debouncedUpdateUsersTableData = useDebounceFn(() => {
              usersTableState.value.page = 0;
              updateUsersTableData(usersTableState.value);
            }, 300);
            const onSearch = value => {
              search$1.value = value;
              debouncedUpdateUsersTableData();
            };
            async function onUpdateMfaEnforced(value) {
              const boolValue = typeof value === "boolean" ? value : Boolean(value);
              try {
                await usersStore.updateEnforceMfa(boolValue);
                showToast({
                  type: "success",
                  title: boolValue ? i18n.baseText("settings.personal.mfa.enforce.enabled.title") : i18n.baseText("settings.personal.mfa.enforce.disabled.title"),
                  message: boolValue ? i18n.baseText("settings.personal.mfa.enforce.enabled.message") : i18n.baseText("settings.personal.mfa.enforce.disabled.message")
                });
              } catch (error) {
                showError(error, i18n.baseText("settings.personal.mfa.enforce.error"));
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                size: "2xlarge",
                class: "mb-xl"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users")) + " ", 1), !showUMSetupWarning.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.userCount),
                  color: "text-light"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.count", {
                    interpolate: {
                      count: unref(usersStore).usersList.state.count
                    },
                    adjustToNumber: unref(usersStore).usersList.state.count
                  })), 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)]),
                _: 1
              }), !unref(usersStore).usersLimitNotReached ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.setupInfoContainer)
              }, [createVNode(unref(N8nActionBox_default), {
                heading: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.title),
                description: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.description),
                "button-text": unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.button),
                "onClick:button": goToUpgrade
              }, null, 8, ["heading", "description", "button-text"])], 2)) : createCommentVNode("", true), !isAdvancedPermissionsEnabled.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 1
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.users.advancedPermissions.warning",
                  scope: "global"
                }, {
                  link: withCtx(() => [createVNode(unref(N8nLink_default), {
                    "data-test-id": "upgrade-permissions-link",
                    size: "small",
                    onClick: goToUpgradeAdvancedPermissions
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.settingsContainer)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.settingsContainerInfo)
              }, [createVNode(unref(N8nText_default), {
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.title")) + " ", 1), !isEnforceMFAEnabled.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
                  key: 0,
                  class: "ml-4xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
                  _: 1
                })) : createCommentVNode("", true)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.message")), 1)]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.settingsContainerAction)
              }, [createVNode(EnterpriseEdition_ee_default, {
                features: [unref(EnterpriseEditionFeature).EnforceMFA]
              }, {
                fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    keypath: tooltipKey,
                    tag: "span",
                    scope: "global"
                  }, {
                    action: withCtx(() => [createBaseVNode("a", {
                      onClick: goToUpgrade
                    }, toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.unlicensed_tooltip.link")), 1)]),
                    _: 1
                  })]),
                  default: withCtx(() => [createVNode(unref(ElSwitch), {
                    "model-value": unref(settingsStore).isMFAEnforced,
                    size: "large",
                    disabled: true
                  }, null, 8, ["model-value"])]),
                  _: 1
                })]),
                default: withCtx(() => [createVNode(unref(ElSwitch), {
                  "model-value": unref(settingsStore).isMFAEnforced,
                  size: "large",
                  "data-test-id": "enable-force-mfa",
                  "onUpdate:modelValue": onUpdateMfaEnforced
                }, null, 8, ["model-value"])]),
                _: 1
              }, 8, ["features"])], 2)], 2), !showUMSetupWarning.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.buttonContainer)
              }, [createVNode(unref(N8nInput_default), {
                class: normalizeClass(_ctx.$style.search),
                "model-value": search$1.value,
                placeholder: unref(i18n).baseText("settings.users.search.placeholder"),
                clearable: "",
                "data-test-id": "users-list-search",
                "onUpdate:modelValue": onSearch
              }, {
                prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "search"
                })]),
                _: 1
              }, 8, ["class", "model-value", "placeholder"]), createVNode(unref(N8nTooltip_default), {
                disabled: !unref(ssoStore).isSamlLoginEnabled
              }, {
                content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.users.invite.tooltip")), 1)]),
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
                  disabled: unref(ssoStore).isSamlLoginEnabled || !unref(usersStore).usersLimitNotReached,
                  label: unref(i18n).baseText("settings.users.invite"),
                  size: "large",
                  "data-test-id": "settings-users-invite-button",
                  onClick: onInvite
                }, null, 8, ["disabled", "label"])])]),
                _: 1
              }, 8, ["disabled"])], 2)) : createCommentVNode("", true), unref(usersStore).usersLimitNotReached || unref(usersStore).usersList.state.count > 1 ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(_ctx.$style.usersContainer)
              }, [createVNode(SettingsUsersTable_default, {
                "table-options": usersTableState.value,
                "onUpdate:tableOptions": _cache[0] || (_cache[0] = $event => usersTableState.value = $event),
                "data-test-id": "settings-users-table",
                data: unref(usersStore).usersList.state,
                loading: unref(usersStore).usersList.isLoading,
                actions: usersListActions.value,
                "onUpdate:options": updateUsersTableData,
                "onUpdate:role": onUpdateRole,
                onAction: onUsersListAction
              }, null, 8, ["table-options", "data", "loading", "actions"])], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/users/views/SettingsUsersView.vue?vue&type=style&index=0&lang.module.scss
        userCount = "_userCount_1n3d0_123";
        buttonContainer = "_buttonContainer_1n3d0_128";
        search = "_search_1n3d0_135";
        setupInfoContainer = "_setupInfoContainer_1n3d0_139";
        settingsContainer = "_settingsContainer_1n3d0_143";
        settingsContainerInfo = "_settingsContainerInfo_1n3d0_154";
        settingsContainerAction = "_settingsContainerAction_1n3d0_163";
        container = "_container_1n3d0_171";
        SettingsUsersView_vue_vue_type_style_index_0_lang_module_default = {
          userCount,
          buttonContainer,
          search,
          setupInfoContainer,
          settingsContainer,
          settingsContainerInfo,
          settingsContainerAction,
          container
        }; //#endregion
        //#region src/features/settings/users/views/SettingsUsersView.vue
        cssModules = {
          "$style": SettingsUsersView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsUsersView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsUsersView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();