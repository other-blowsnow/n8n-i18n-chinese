;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, reactive, toDisplayString, createBlock, mergeModels, onMounted, normalizeClass, watch, withCtx, openBlock, useModel, createTextVNode, vModelCheckbox, createBaseVNode, withDirectives, useI18n, N8nInput_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nSpinner_default, N8nIcon_default, __plugin_vue_export_helper_default, ElDialog, getUsers, useRootStore, useDocumentTitle, saveProvisioningConfig, getProvisioningConfig, defineStore, useToast, __vite_style__, useProvisioningStore, _hoisted_1$1, _hoisted_2$1, EnableJitProvisioningDialog_vue_vue_type_script_setup_true_lang_default, buttonRow, button, icon, list, EnableJitProvisioningDialog_vue_vue_type_style_index_0_lang_module_default, cssModules$1, EnableJitProvisioningDialog_default, _hoisted_1, _hoisted_2, SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, container, heading, loading, buttons, group, frequencySelect, checkbox, SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsProvisioningView_default;
    //#endregion
    //#region src/features/settings/provisioning/composables/useAccessSettingsCsvExport.ts
    function isAccessSettingsUserData(response) {
      if (!(typeof response === "object" && response !== null && "count" in response && "items" in response)) return false;
      if (!Array.isArray(response.items)) return false;
      const item = response.items.length ? response.items[0] : null;
      if (!item) return true;
      return Object.hasOwn(item, "id") && Object.hasOwn(item, "email") && Object.hasOwn(item, "role") && Object.hasOwn(item, "projectRelations");
    }
    function useAccessSettingsCsvExport() {
      const cachedUserData = ref();
      const rootStore = useRootStore();
      const formatDateForFilename = () => {
        const now = /* @__PURE__ */new Date();
        return `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}_${now.getHours()}_${now.getMinutes()}`;
      };
      const escapeCsvValue = value => {
        if (value.includes(",") || value.includes("\"")) return `"${value.replace(/"/g, "\"\"")}"`;
        return value;
      };
      const downloadCsv = (csvContent, filename) => {
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const tempElement = document.createElement("a");
        tempElement.setAttribute("href", url);
        tempElement.setAttribute("download", filename);
        tempElement.style.display = "none";
        document.body.appendChild(tempElement);
        tempElement.click();
        document.body.removeChild(tempElement);
        URL.revokeObjectURL(url);
      };
      const getUserData = async () => {
        if (cachedUserData.value) return cachedUserData.value;
        const getUsersResponse = await getUsers(rootStore.restApiContext, {
          take: -1,
          select: ["email", "role"],
          sortBy: ["email:desc"],
          expand: ["projectRelations"],
          skip: 0
        });
        if (isAccessSettingsUserData(getUsersResponse)) {
          cachedUserData.value = getUsersResponse;
          return cachedUserData.value;
        }
        return getUsersResponse;
      };
      const hasDownloadedProjectRoleCsv = ref(false);
      const downloadProjectRolesCsv = async () => {
        const userData = await getUserData();
        const csvRows = ["email,project_displayname,project_id,project_role"];
        for (const user of userData.items) {
          const email = escapeCsvValue(user.email ?? "");
          if (user.projectRelations && user.projectRelations.length > 0) for (const project of user.projectRelations) {
            const projectName = escapeCsvValue(project.name ?? "");
            const projectId = escapeCsvValue(project.id ?? "");
            const projectRole = escapeCsvValue(project.role ?? "");
            csvRows.push(`${email},${projectName},${projectId},${projectRole}`);
          }
        }
        downloadCsv(csvRows.join("\n"), `n8n_project_role_export_${formatDateForFilename()}.csv`);
        hasDownloadedProjectRoleCsv.value = true;
      };
      const hasDownloadedInstanceRoleCsv = ref(false);
      const downloadInstanceRolesCsv = async () => {
        const userData = await getUserData();
        const csvRows = ["email,instance_role"];
        for (const user of userData.items) {
          const email = escapeCsvValue(user.email ?? "");
          const instanceRole = escapeCsvValue(user.role ?? "");
          csvRows.push(`${email},${instanceRole}`);
        }
        downloadCsv(csvRows.join("\n"), `n8n_instance_role_export_${formatDateForFilename()}.csv`);
        hasDownloadedInstanceRoleCsv.value = true;
      };
      const accessSettingsCsvExportOnModalClose = () => {
        hasDownloadedInstanceRoleCsv.value = false;
        hasDownloadedProjectRoleCsv.value = false;
        cachedUserData.value = void 0;
      };
      return {
        downloadProjectRolesCsv,
        downloadInstanceRolesCsv,
        hasDownloadedInstanceRoleCsv,
        hasDownloadedProjectRoleCsv,
        accessSettingsCsvExportOnModalClose
      };
    }

    //#endregion
    //#region src/features/settings/provisioning/components/EnableJitProvisioningDialog.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        vModelCheckbox = _vueRuntimeEsmBundlerLegacy003Js.u;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_dialogLegacy00BJs) {
        ElDialog = _dialogLegacy00BJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        getUsers = _useTelemetryLegacy00FJs.Go;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        saveProvisioningConfig = _useTelemetryLegacy00FJs.hs;
        getProvisioningConfig = _useTelemetryLegacy00FJs.ms;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._buttonRow_av0py_123 {\n  display: flex;\n  align-items: center;\n}\n._button_av0py_123 {\n  min-width: 340px;\n}\n._icon_av0py_132 {\n  margin-left: var(--spacing--xs);\n}\n._list_av0py_136 {\n  padding: 0 var(--spacing--sm);\n}\n._list_av0py_136 li {\n  list-style: disc outside;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_b5ixa_123 {\n  padding-bottom: var(--spacing--2xl);\n  max-width: 600px;\n}\n._heading_b5ixa_128 {\n  margin-bottom: var(--spacing--sm);\n}\n._loading_b5ixa_132 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: var(--spacing--2xl);\n}\n._buttons_b5ixa_139 {\n  display: flex;\n  justify-content: flex-start;\n  padding: var(--spacing--2xl) 0 var(--spacing--2xs);\n}\n._buttons_b5ixa_139 button {\n  margin: 0 var(--spacing--sm) 0 0;\n}\n._group_b5ixa_148 {\n  padding: var(--spacing--xl) 0 0;\n}\n._group_b5ixa_148 > label {\n  display: inline-block;\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--medium);\n  padding: 0 0 var(--spacing--2xs);\n}\n._group_b5ixa_148 small {\n  display: block;\n  padding: var(--spacing--2xs) 0;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n}\n._frequencySelect_b5ixa_164 {\n  display: block;\n  width: 240px;\n}\n._checkbox_b5ixa_169 {\n  margin-right: var(--spacing--xs);\n  transform: scale(1.2);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/provisioning/provisioning.store.ts
        useProvisioningStore = defineStore("provisioning", () => {
          const rootStore = useRootStore();
          const provisioningConfig = ref();
          const isProvisioningEnabled = computed(() => provisioningConfig.value?.scopesProvisionInstanceRole || provisioningConfig.value?.scopesProvisionProjectRoles || false);
          const getProvisioningConfig$1 = async () => {
            try {
              const config = await getProvisioningConfig(rootStore.restApiContext);
              provisioningConfig.value = config;
              return config;
            } catch (error) {
              console.error("Failed to fetch provisioning config:", error);
              throw error;
            }
          };
          const saveProvisioningConfig$1 = async config => {
            try {
              const updatedConfig = await saveProvisioningConfig(rootStore.restApiContext, config);
              provisioningConfig.value = updatedConfig;
              return updatedConfig;
            } catch (error) {
              console.error("Failed to save provisioning config:", error);
              throw error;
            }
          };
          return {
            provisioningConfig,
            isProvisioningEnabled,
            getProvisioningConfig: getProvisioningConfig$1,
            saveProvisioningConfig: saveProvisioningConfig$1
          };
        });
        _hoisted_1$1 = {
          class: "mb-s"
        };
        _hoisted_2$1 = {
          class: "mb-s"
        };
        EnableJitProvisioningDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EnableJitProvisioningDialog",
          props: {
            "modelValue": {
              type: Boolean
            },
            "modelModifiers": {}
          },
          emits: /* @__PURE__ */mergeModels(["confirmProvisioning", "cancel"], ["update:modelValue"]),
          setup(__props, {
            emit: __emit
          }) {
            const visible = useModel(__props, "modelValue");
            const emit = __emit;
            const locale = useI18n();
            const downloadingInstanceRolesCsv = ref(false);
            const downloadingProjectRolesCsv = ref(false);
            const loadingActivatingJit = ref(false);
            const {
              hasDownloadedInstanceRoleCsv,
              hasDownloadedProjectRoleCsv,
              downloadProjectRolesCsv,
              downloadInstanceRolesCsv,
              accessSettingsCsvExportOnModalClose
            } = useAccessSettingsCsvExport();
            watch(visible, () => {
              loadingActivatingJit.value = false;
              accessSettingsCsvExportOnModalClose();
            });
            const onDownloadInstanceRolesCsv = async () => {
              downloadingInstanceRolesCsv.value = true;
              try {
                await downloadInstanceRolesCsv();
              } finally {
                downloadingInstanceRolesCsv.value = false;
              }
            };
            const onDownloadProjectRolesCsv = async () => {
              downloadingProjectRolesCsv.value = true;
              try {
                await downloadProjectRolesCsv();
              } finally {
                downloadingProjectRolesCsv.value = false;
              }
            };
            const onConfirmActivatingProvisioning = () => {
              loadingActivatingJit.value = true;
              emit("confirmProvisioning");
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                modelValue: visible.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => visible.value = $event),
                title: unref(locale).baseText("settings.provisioningConfirmDialog.title"),
                width: "650"
              }, {
                footer: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  "native-type": "button",
                  "data-test-id": "provisioning-cancel-button",
                  onClick: _cache[0] || (_cache[0] = $event => emit("cancel"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  "native-type": "button",
                  disabled: loadingActivatingJit.value || !(unref(hasDownloadedInstanceRoleCsv) && unref(hasDownloadedProjectRoleCsv)),
                  "data-test-id": "provisioning-confirm-button",
                  onClick: onConfirmActivatingProvisioning
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.confirm")), 1)]),
                  _: 1
                }, 8, ["disabled"])]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.firstLine")), 1)]),
                  _: 1
                })]), createBaseVNode("ul", {
                  class: normalizeClass([_ctx.$style.list, "mb-s"])
                }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.list.one")), 1)]),
                  _: 1
                })]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.list.two")), 1)]),
                  _: 1
                })])], 2), createBaseVNode("div", _hoisted_2$1, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeRequiredSteps")), 1)]),
                  _: 1
                })]), createBaseVNode("div", {
                  class: normalizeClass(["mb-s", _ctx.$style.buttonRow])
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  "native-type": "button",
                  "data-test-id": "provisioning-download-instance-roles-csv-button",
                  disabled: downloadingInstanceRolesCsv.value,
                  loading: downloadingInstanceRolesCsv.value,
                  class: normalizeClass(_ctx.$style.button),
                  onClick: onDownloadInstanceRolesCsv
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv")), 1)]),
                  _: 1
                }, 8, ["disabled", "loading", "class"]), unref(hasDownloadedInstanceRoleCsv) ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  icon: "check",
                  color: "success",
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["class"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                  class: normalizeClass(["mb-s", _ctx.$style.buttonRow])
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  "native-type": "button",
                  "data-test-id": "provisioning-download-project-roles-csv-button",
                  disabled: downloadingProjectRolesCsv.value,
                  loading: downloadingProjectRolesCsv.value,
                  class: normalizeClass(_ctx.$style.button),
                  onClick: onDownloadProjectRolesCsv
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadProjectRolesCsv")), 1)]),
                  _: 1
                }, 8, ["disabled", "loading", "class"]), unref(hasDownloadedProjectRoleCsv) ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  icon: "check",
                  color: "success",
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["class"])) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["modelValue", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/provisioning/components/EnableJitProvisioningDialog.vue?vue&type=style&index=0&lang.module.scss
        buttonRow = "_buttonRow_av0py_123";
        button = "_button_av0py_123";
        icon = "_icon_av0py_132";
        list = "_list_av0py_136";
        EnableJitProvisioningDialog_vue_vue_type_style_index_0_lang_module_default = {
          buttonRow,
          button,
          icon,
          list
        }; //#endregion
        //#region src/features/settings/provisioning/components/EnableJitProvisioningDialog.vue
        cssModules$1 = {
          "$style": EnableJitProvisioningDialog_vue_vue_type_style_index_0_lang_module_default
        };
        EnableJitProvisioningDialog_default = /* @__PURE__ */__plugin_vue_export_helper_default(EnableJitProvisioningDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/provisioning/views/SettingsProvisioningView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 1
        };
        _hoisted_2 = {
          for: "provisioning-enabled"
        };
        SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsProvisioningView",
          setup(__props) {
            const i18n = useI18n();
            const documentTitle = useDocumentTitle();
            const {
              showError,
              showMessage
            } = useToast();
            const provisioningStore = useProvisioningStore();
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.provisioning.title"));
              loading$1.value = true;
              try {
                await provisioningStore.getProvisioningConfig();
                loadFormData();
              } catch (error) {
                showError(error, i18n.baseText("settings.provisioning.loadError"));
              } finally {
                loading$1.value = false;
              }
            });
            const loading$1 = ref(false);
            const saving = ref(false);
            const confirmationDialogVisible = ref(false);
            const form = reactive({
              scopesName: "",
              scopesInstanceRoleClaimName: "",
              scopesProjectsRolesClaimName: "",
              provisioningEnabled: false
            });
            const isFormDirty = computed(() => {
              const config = provisioningStore.provisioningConfig;
              if (!config) return false;
              const configChanged = ["scopesName", "scopesInstanceRoleClaimName", "scopesProjectsRolesClaimName"].some(key => form[key] !== config[key]);
              const provisioningEnabledChanged = form.provisioningEnabled !== (config.scopesProvisionInstanceRole && config.scopesProvisionProjectRoles);
              return configChanged || provisioningEnabledChanged;
            });
            const loadFormData = () => {
              const cfg = provisioningStore.provisioningConfig;
              if (!cfg) return;
              Object.assign(form, {
                scopesName: cfg.scopesName || "",
                scopesInstanceRoleClaimName: cfg.scopesInstanceRoleClaimName || "",
                scopesProjectsRolesClaimName: cfg.scopesProjectsRolesClaimName || ""
              });
              form.provisioningEnabled = cfg.scopesProvisionInstanceRole;
            };
            const saveFormValues = async () => {
              saving.value = true;
              try {
                const {
                  provisioningEnabled,
                  ...dataToSave
                } = form;
                await provisioningStore.saveProvisioningConfig({
                  ...dataToSave,
                  scopesProvisionInstanceRole: provisioningEnabled,
                  scopesProvisionProjectRoles: provisioningEnabled
                });
                await provisioningStore.getProvisioningConfig();
                loadFormData();
                showMessage({
                  title: i18n.baseText("settings.provisioning.saveSuccess"),
                  message: i18n.baseText("settings.provisioning.saveSuccessMessage"),
                  type: "success",
                  duration: 3e3
                });
              } catch (error) {
                showError(error, i18n.baseText("settings.provisioning.saveError"));
              } finally {
                saving.value = false;
              }
            };
            const onSave = async () => {
              if (form.provisioningEnabled) {
                confirmationDialogVisible.value = true;
                return;
              }
              await saveFormValues();
            };
            const onConfirmProvisioning = async () => {
              saving.value = true;
              await saveFormValues();
              confirmationDialogVisible.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.heading)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.title")), 1)]),
                _: 1
              })], 2), createVNode(unref(N8nText_default), {
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.description")), 1)]),
                _: 1
              }), loading$1.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.loading)
              }, [createVNode(unref(N8nSpinner_default), {
                size: "large"
              })], 2)) : (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle")), 1), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.toggle.help")), 1), withDirectives(createBaseVNode("input", {
                id: "provisioning-enabled",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => form.provisioningEnabled = $event),
                type: "checkbox",
                class: normalizeClass(_ctx.$style.checkbox)
              }, null, 2), [[vModelCheckbox, form.provisioningEnabled]])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName")), 1), createVNode(unref(N8nInput_default), {
                modelValue: form.scopesName,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => form.scopesName = $event),
                type: "text",
                size: "large",
                placeholder: unref(i18n).baseText("settings.provisioning.scopesName.placeholder")
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesName.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName")), 1), createVNode(unref(N8nInput_default), {
                modelValue: form.scopesInstanceRoleClaimName,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => form.scopesInstanceRoleClaimName = $event),
                type: "text",
                size: "large",
                placeholder: unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.placeholder")
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesInstanceRoleClaimName.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName")), 1), createVNode(unref(N8nInput_default), {
                modelValue: form.scopesProjectsRolesClaimName,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => form.scopesProjectsRolesClaimName = $event),
                type: "text",
                size: "large",
                placeholder: unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.placeholder")
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.provisioning.scopesProjectsRolesClaimName.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [createVNode(unref(N8nButton_default), {
                disabled: !isFormDirty.value || saving.value,
                size: "large",
                loading: saving.value,
                onClick: onSave
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.provisioning.save")), 1)]),
                _: 1
              }, 8, ["disabled", "loading"])], 2), createVNode(EnableJitProvisioningDialog_default, {
                modelValue: confirmationDialogVisible.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => confirmationDialogVisible.value = $event),
                onConfirmProvisioning,
                onCancel: _cache[5] || (_cache[5] = $event => confirmationDialogVisible.value = false)
              }, null, 8, ["modelValue"])]))], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/provisioning/views/SettingsProvisioningView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_b5ixa_123";
        heading = "_heading_b5ixa_128";
        loading = "_loading_b5ixa_132";
        buttons = "_buttons_b5ixa_139";
        group = "_group_b5ixa_148";
        frequencySelect = "_frequencySelect_b5ixa_164";
        checkbox = "_checkbox_b5ixa_169";
        SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          heading,
          loading,
          buttons,
          group,
          frequencySelect,
          checkbox
        }; //#endregion
        //#region src/features/settings/provisioning/views/SettingsProvisioningView.vue
        cssModules = {
          "$style": SettingsProvisioningView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsProvisioningView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsProvisioningView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();