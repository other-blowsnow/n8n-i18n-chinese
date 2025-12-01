;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./dialog-legacy-ZOm2ObnR.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./useClipboard-legacy-CkqS6mrY.js", "./versions.store-legacy-GXtvQmrr.js", "./usePageRedirectionHelper-legacy-BYf33Ms4.js", "./CopyInput-legacy-BCtk6yDL.js", "./exports-legacy-DPuVuwu3.js", "./sso.store-legacy-DKeySsJP.js", "./userRoleProvisioning.store-legacy-BQFSGrGO.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, mergeModels, onMounted, Fragment, watch, withCtx, openBlock, useModel, withModifiers, renderList, createTextVNode, isRef, resolveDirective, normalizeClass, createBaseVNode, withDirectives, useI18n, N8nInfoTip_default, N8nSelect_default, ElCheckbox, N8nOption_default, N8nText_default, N8nActionBox_default, N8nRadioButtons_default, N8nHeading_default, N8nCheckbox_default, N8nIcon_default, N8nCard_default, N8nButton_default, N8nInput_default, __plugin_vue_export_helper_default, useMessage, ElDialog, useDocumentTitle, getUsers, useRBACStore, useTelemetry, useToast, MODAL_CONFIRM, useRootStore, usePageRedirectionHelper, CopyInput_default, captureMessage, useSSOStore, SupportedProtocols, useUserRoleProvisioningStore, __vite_style__, _hoisted_1$3, UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default, group$1, userRoleProvisioningSelect, UserRoleProvisioningDropdown_vue_vue_type_style_index_0_lang_module_default, cssModules$4, UserRoleProvisioningDropdown_default, _hoisted_1$2, _hoisted_2$2, _hoisted_3$2, _hoisted_4$1, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default, button, card, descriptionTextPartTwo, icon, list, ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default, cssModules$3, ConfirmProvisioningDialog_default, _hoisted_1$1, _hoisted_2$1, _hoisted_3$1, SamlSettingsForm_vue_vue_type_script_setup_true_lang_default, buttons, group, checkboxGroup, actionBox$1, footer, sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default, cssModules$2, SamlSettingsForm_default, OidcSettingsForm_vue_vue_type_script_setup_true_lang_default, cssModules$1, OidcSettingsForm_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, SettingsSso_vue_vue_type_script_setup_true_lang_default, heading, actionBox, SettingsSso_vue_vue_type_style_index_1_lang_module_default, cssModules, SettingsSso_default;
    //#endregion
    //#region src/features/settings/sso/provisioning/composables/useUserRoleProvisioningForm.ts
    /**
    * Composable for managing user role provisioning form logic in SSO settings.
    */
    function useUserRoleProvisioningForm(protocol) {
      const provisioningStore = useUserRoleProvisioningStore();
      const telemetry = useTelemetry();
      const formValue = ref("disabled");
      const getUserRoleProvisioningValueFromConfig = config => {
        if (!config) return "disabled";
        if (config.scopesProvisionInstanceRole && config.scopesProvisionProjectRoles) return "instance_and_project_roles";else if (config.scopesProvisionInstanceRole) return "instance_role";else return "disabled";
      };
      const getProvisioningConfigFromFormValue = formValue$1 => {
        if (formValue$1 === "instance_role") return {
          scopesProvisionInstanceRole: true,
          scopesProvisionProjectRoles: false
        };else if (formValue$1 === "instance_and_project_roles") return {
          scopesProvisionInstanceRole: true,
          scopesProvisionProjectRoles: true
        };else return {
          scopesProvisionInstanceRole: false,
          scopesProvisionProjectRoles: false
        };
      };
      const isUserRoleProvisioningChanged = computed(() => {
        return getUserRoleProvisioningValueFromConfig(provisioningStore.provisioningConfig) !== formValue.value;
      });
      const sendTrackingEventForUserProvisioning = updatedSetting => {
        telemetry.track("User updated provisioning settings", {
          instance_id: useRootStore().instanceId,
          authentication_method: protocol,
          updated_setting: updatedSetting
        });
      };
      /**
      * Saves the current user role provisioning setting to the store.
      */
      const saveProvisioningConfig = async isDisablingSso => {
        const newSetting = isDisablingSso ? "disabled" : formValue.value;
        if (newSetting === getUserRoleProvisioningValueFromConfig(provisioningStore.provisioningConfig)) return;
        await provisioningStore.saveProvisioningConfig(getProvisioningConfigFromFormValue(newSetting));
        formValue.value = newSetting;
        sendTrackingEventForUserProvisioning(newSetting);
      };
      const shouldPromptUserToConfirmUserRoleProvisioningChange = ({
        currentLoginEnabled,
        loginEnabledFormValue
      }) => {
        const isLoginEnabledChanged = currentLoginEnabled !== loginEnabledFormValue;
        const isEnablingSsoLogin = isLoginEnabledChanged && !currentLoginEnabled;
        const isDisablingSsoLogin = isLoginEnabledChanged && currentLoginEnabled;
        const isEnablingSsoAlongSideProvisioning = isEnablingSsoLogin && formValue.value !== "disabled";
        const isChangingProvisioningSettingWhileLoginWasAlreadyEnabled = isUserRoleProvisioningChanged.value && currentLoginEnabled && !isDisablingSsoLogin;
        return isEnablingSsoAlongSideProvisioning || isChangingProvisioningSettingWhileLoginWasAlreadyEnabled;
      };
      const initFormValue = () => {
        provisioningStore.getProvisioningConfig().then(() => {
          formValue.value = getUserRoleProvisioningValueFromConfig(provisioningStore.provisioningConfig);
        });
      };
      initFormValue();
      return {
        formValue,
        isUserRoleProvisioningChanged,
        saveProvisioningConfig,
        shouldPromptUserToConfirmUserRoleProvisioningChange
      };
    }

    //#endregion
    //#region src/features/settings/sso/provisioning/composables/useAccessSettingsCsvExport.ts
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
            const projectRole = escapeCsvValue(project.role.split(":")[1] ?? project.role);
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
    //#region src/features/settings/sso/provisioning/components/ConfirmProvisioningDialog.vue?vue&type=script&setup=true&lang.ts
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
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        isRef = _vueRuntimeEsmBundlerLegacy003Js.jt;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInfoTip_default = _srcLegacy007Js.F;
        N8nSelect_default = _srcLegacy007Js.G;
        ElCheckbox = _srcLegacy007Js.Ht;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Kn;
        N8nActionBox_default = _srcLegacy007Js.Ot;
        N8nRadioButtons_default = _srcLegacy007Js.S;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nCheckbox_default = _srcLegacy007Js.Y;
        N8nIcon_default = _srcLegacy007Js.Yn;
        N8nCard_default = _srcLegacy007Js.Z;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nInput_default = _srcLegacy007Js.wt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_dialogLegacy00DJs) {
        ElDialog = _dialogLegacy00DJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        getUsers = _useTelemetryLegacy00HJs.Go;
        useRBACStore = _useTelemetryLegacy00HJs.Qn;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        MODAL_CONFIRM = _constantsLegacy00RJs.Qo;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {
        useRootStore = _baseOrderByLegacy00XJs.r;
      }, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_useClipboardLegacy01vJs) {}, function (_versionsStoreLegacy01JJs) {}, function (_usePageRedirectionHelperLegacy01LJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01LJs.t;
      }, function (_CopyInputLegacy01VJs) {
        CopyInput_default = _CopyInputLegacy01VJs.t;
      }, function (_exportsLegacy023Js) {
        captureMessage = _exportsLegacy023Js.r;
      }, function (_ssoStoreLegacy037Js) {
        useSSOStore = _ssoStoreLegacy037Js.n;
        SupportedProtocols = _ssoStoreLegacy037Js.t;
      }, function (_userRoleProvisioningStoreLegacy05HJs) {
        useUserRoleProvisioningStore = _userRoleProvisioningStoreLegacy05HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "@charset \"UTF-8\";/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._group_885kr_123 {\n  padding: var(--spacing--xl) 0 0;\n}\n._group_885kr_123 > label {\n  display: inline-block;\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--medium);\n  padding: 0 0 var(--spacing--2xs);\n}\n._group_885kr_123 small {\n  display: block;\n  padding: var(--spacing--2xs) 0 0;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n}\n._userRoleProvisioningSelect_885kr_139 {\n  display: block;\n  max-width: 400px;\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._button_1l25a_124 {\n  margin-left: var(--spacing--xs);\n}\n._card_1l25a_128 {\n  background-color: var(--color--background--light-1);\n}\n._descriptionTextPartTwo_1l25a_132 {\n  margin-left: 4px;\n}\n._icon_1l25a_136 {\n  height: 32px;\n  margin: 0 var(--spacing--lg);\n}\n._list_1l25a_141 {\n  padding: 0 var(--spacing--2xs);\n}\n._list_1l25a_141 li {\n  display: flex;\n  align-items: center;\n}\n._list_1l25a_141 li::before {\n  content: \"•\";\n  margin-right: var(--spacing--3xs);\n  margin-bottom: 2px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/**\n* Shared styles for SSO forms\n*/\n._switch_1g1no_126 span {\n  font-size: var(--font-size--2xs);\n  font-weight: var(--font-weight--bold);\n  color: var(--color--text--tint-1);\n}\n._buttons_1g1no_132 {\n  display: flex;\n  justify-content: flex-start;\n  padding: var(--spacing--2xl) 0 var(--spacing--2xs);\n}\n._buttons_1g1no_132 button {\n  margin: 0 var(--spacing--sm) 0 0;\n}\n._group_1g1no_141 {\n  padding: var(--spacing--xl) 0 0;\n}\n._group_1g1no_141 > label {\n  display: inline-block;\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--medium);\n  padding: 0 0 var(--spacing--2xs);\n}\n._group_1g1no_141 small {\n  display: block;\n  padding: var(--spacing--2xs) 0 0;\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n}\n._checkboxGroup_1g1no_157 label > *:first-child {\n  vertical-align: text-top;\n}\n._actionBox_1g1no_161 {\n  margin: var(--spacing--2xl) 0 0;\n}\n._footer_1g1no_165 {\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._heading_86duv_123 {\n  margin-bottom: var(--spacing--sm);\n}\n._actionBox_86duv_127 {\n  margin-top: var(--spacing--lg);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/sso/provisioning/components/UserRoleProvisioningDropdown.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = ["href"];
        UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "UserRoleProvisioningDropdown",
          props: /* @__PURE__ */mergeModels({
            authProtocol: {}
          }, {
            "modelValue": {
              default: "disabled"
            },
            "modelModifiers": {}
          }),
          emits: ["update:modelValue"],
          setup(__props) {
            const value = useModel(__props, "modelValue");
            const i18n = useI18n();
            const canManageUserProvisioning = useRBACStore().hasScope("provisioning:manage");
            const handleUserRoleProvisioningChange = newValue => {
              value.value = newValue;
            };
            const userRoleProvisioningDescriptions = [{
              label: i18n.baseText("settings.sso.settings.userRoleProvisioning.option.disabled.label"),
              value: "disabled"
            }, {
              label: i18n.baseText("settings.sso.settings.userRoleProvisioning.option.instanceRole.label"),
              value: "instance_role"
            }, {
              label: i18n.baseText("settings.sso.settings.userRoleProvisioning.option.instanceAndProjectRoles.label"),
              value: "instance_and_project_roles"
            }];
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.userRoleProvisioning.label")), 1), createVNode(unref(N8nSelect_default), {
                "model-value": value.value,
                disabled: !unref(canManageUserProvisioning),
                "data-test-id": "oidc-user-role-provisioning",
                class: normalizeClass(_ctx.$style.userRoleProvisioningSelect),
                "onUpdate:modelValue": handleUserRoleProvisioningChange
              }, {
                default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(userRoleProvisioningDescriptions, option => {
                  return createVNode(unref(N8nOption_default), {
                    key: option.value,
                    label: option.label,
                    "data-test-id": "oidc-user-role-provisioning-option",
                    value: option.value
                  }, null, 8, ["label", "value"]);
                }), 64))]),
                _: 1
              }, 8, ["model-value", "disabled", "class"]), createBaseVNode("small", null, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.userRoleProvisioning.help")) + " ", 1), createBaseVNode("a", {
                href: `https://docs.n8n.io/user-management/${_ctx.authProtocol}/setup/`,
                target: "_blank"
              }, toDisplayString(unref(i18n).baseText("settings.sso.settings.userRoleProvisioning.help.linkText")), 9, _hoisted_1$3)])], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/provisioning/components/UserRoleProvisioningDropdown.vue?vue&type=style&index=0&lang.module.scss
        group$1 = "_group_885kr_123";
        userRoleProvisioningSelect = "_userRoleProvisioningSelect_885kr_139";
        UserRoleProvisioningDropdown_vue_vue_type_style_index_0_lang_module_default = {
          group: group$1,
          userRoleProvisioningSelect
        }; //#endregion
        //#region src/features/settings/sso/provisioning/components/UserRoleProvisioningDropdown.vue
        cssModules$4 = {
          "$style": UserRoleProvisioningDropdown_vue_vue_type_style_index_0_lang_module_default
        };
        UserRoleProvisioningDropdown_default = /* @__PURE__ */__plugin_vue_export_helper_default(UserRoleProvisioningDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]);
        _hoisted_1$2 = {
          class: "mb-s"
        };
        _hoisted_2$2 = {
          class: "mb-s"
        };
        _hoisted_3$2 = ["href"];
        _hoisted_4$1 = {
          class: "mb-s"
        };
        _hoisted_5 = {
          key: 0
        };
        _hoisted_6 = {
          class: "mb-s"
        };
        _hoisted_7 = {
          class: "mb-s"
        };
        _hoisted_8 = ["href"];
        _hoisted_9 = {
          class: "mb-s"
        };
        ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ConfirmProvisioningDialog",
          props: /* @__PURE__ */mergeModels({
            newProvisioningSetting: {},
            authProtocol: {}
          }, {
            "modelValue": {
              type: Boolean
            },
            "modelModifiers": {}
          }),
          emits: /* @__PURE__ */mergeModels(["confirmProvisioning", "cancel"], ["update:modelValue"]),
          setup(__props, {
            emit: __emit
          }) {
            const visible = useModel(__props, "modelValue");
            const props = __props;
            const emit = __emit;
            const locale = useI18n();
            const downloadingInstanceRolesCsv = ref(false);
            const downloadingProjectRolesCsv = ref(false);
            const loading = ref(false);
            const confirmationChecked = ref(false);
            const {
              hasDownloadedInstanceRoleCsv,
              hasDownloadedProjectRoleCsv,
              downloadProjectRolesCsv,
              downloadInstanceRolesCsv,
              accessSettingsCsvExportOnModalClose
            } = useAccessSettingsCsvExport();
            const isDisablingProvisioning = computed(() => props.newProvisioningSetting === "disabled");
            const messagingKey = computed(() => isDisablingProvisioning.value ? "disable" : "enable");
            const shouldShowProjectRolesCsv = computed(() => props.newProvisioningSetting === "instance_and_project_roles");
            watch(visible, () => {
              loading.value = false;
              confirmationChecked.value = false;
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
            const onConfirmProvisioningSetting = () => {
              loading.value = true;
              emit("confirmProvisioning");
            };
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createBlock(unref(ElDialog), {
                modelValue: visible.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => visible.value = $event),
                title: unref(locale).baseText(`settings.provisioningConfirmDialog.${messagingKey.value}.title`),
                width: "650"
              }, {
                footer: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  "native-type": "button",
                  "data-test-id": "provisioning-cancel-button",
                  onClick: _cache[1] || (_cache[1] = $event => emit("cancel"))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  "native-type": "button",
                  disabled: loading.value || !confirmationChecked.value || !isDisablingProvisioning.value && !unref(hasDownloadedInstanceRoleCsv) || shouldShowProjectRolesCsv.value && !unref(hasDownloadedProjectRoleCsv),
                  "data-test-id": "provisioning-confirm-button",
                  onClick: onConfirmProvisioningSetting
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`settings.provisioningConfirmDialog.button.${messagingKey.value}.confirm`)), 1)]),
                  _: 1
                }, 8, ["disabled"])]),
                default: withCtx(() => [!isDisablingProvisioning.value ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(_ctx.newProvisioningSetting === "instance_and_project_roles" ? "settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne.withProjectRoles" : "settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partOne")), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  class: normalizeClass(_ctx.$style.descriptionTextPartTwo),
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.firstSentence.partTwo")), 1)]),
                  _: 1
                }, 8, ["class"])]), createBaseVNode("div", _hoisted_2$2, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createBaseVNode("a", {
                    href: `https://docs.n8n.io/user-management/${_ctx.authProtocol}/setup/`,
                    target: "_blank"
                  }, toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.link.docs")), 9, _hoisted_3$2)]),
                  _: 1
                })]), createBaseVNode("div", _hoisted_4$1, [withDirectives(createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, null, 512), [[_directive_n8n_html, unref(locale).baseText("settings.provisioningConfirmDialog.breakingChangeDescription.secondLine")]])]), createBaseVNode("ul", {
                  class: normalizeClass([_ctx.$style.list, "mb-s"])
                }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadInstanceRolesCsv")), 1)]),
                  _: 1
                }), !unref(hasDownloadedInstanceRoleCsv) ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  type: "highlight",
                  "native-type": "button",
                  icon: "file-download",
                  "data-test-id": "provisioning-download-instance-roles-csv-button",
                  disabled: downloadingInstanceRolesCsv.value,
                  loading: downloadingInstanceRolesCsv.value,
                  class: normalizeClass(_ctx.$style.button),
                  onClick: onDownloadInstanceRolesCsv
                }, null, 8, ["disabled", "loading", "class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 1,
                  icon: "check",
                  color: "success",
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["class"]))]), shouldShowProjectRolesCsv.value ? (openBlock(), createElementBlock("li", _hoisted_5, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.button.downloadProjectRolesCsv")), 1)]),
                  _: 1
                }), !unref(hasDownloadedProjectRoleCsv) ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  type: "highlight",
                  "native-type": "button",
                  icon: "file-download",
                  "data-test-id": "provisioning-download-project-roles-csv-button",
                  disabled: downloadingProjectRolesCsv.value,
                  loading: downloadingProjectRolesCsv.value,
                  class: normalizeClass(_ctx.$style.button),
                  onClick: onDownloadProjectRolesCsv
                }, null, 8, ["disabled", "loading", "class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 1,
                  icon: "check",
                  color: "success",
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["class"]))])) : createCommentVNode("", true)], 2)], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createBaseVNode("div", _hoisted_6, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.disable.description")), 1)]),
                  _: 1
                })]), createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createBaseVNode("a", {
                    href: `https://docs.n8n.io/user-management/${_ctx.authProtocol}/setup/`,
                    target: "_blank"
                  }, toDisplayString(unref(locale).baseText("settings.provisioningConfirmDialog.link.docs")), 9, _hoisted_8)]),
                  _: 1
                })])], 64)), createBaseVNode("div", _hoisted_9, [createVNode(unref(N8nCard_default), {
                  class: normalizeClass(_ctx.$style.card)
                }, {
                  default: withCtx(() => [createVNode(unref(N8nCheckbox_default), {
                    modelValue: confirmationChecked.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => confirmationChecked.value = $event),
                    disabled: !isDisablingProvisioning.value && (!unref(hasDownloadedInstanceRoleCsv) || shouldShowProjectRolesCsv.value && !unref(hasDownloadedProjectRoleCsv)),
                    "data-test-id": "provisioning-confirmation-checkbox"
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nText_default), {
                      color: "text-base"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`settings.provisioningConfirmDialog.${messagingKey.value}.checkbox`)), 1)]),
                      _: 1
                    })]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])]),
                  _: 1
                }, 8, ["class"])])]),
                _: 1
              }, 8, ["modelValue", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/provisioning/components/ConfirmProvisioningDialog.vue?vue&type=style&index=0&lang.module.scss
        button = "_button_1l25a_124";
        card = "_card_1l25a_128";
        descriptionTextPartTwo = "_descriptionTextPartTwo_1l25a_132";
        icon = "_icon_1l25a_136";
        list = "_list_1l25a_141";
        ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default = {
          button,
          card,
          descriptionTextPartTwo,
          icon,
          list
        }; //#endregion
        //#region src/features/settings/sso/provisioning/components/ConfirmProvisioningDialog.vue
        cssModules$3 = {
          "$style": ConfirmProvisioningDialog_vue_vue_type_style_index_0_lang_module_default
        };
        ConfirmProvisioningDialog_default = /* @__PURE__ */__plugin_vue_export_helper_default(ConfirmProvisioningDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/settings/sso/components/SamlSettingsForm.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          class: "mt-2xs mb-s"
        };
        _hoisted_2$1 = {
          key: 0
        };
        _hoisted_3$1 = {
          key: 1
        };
        SamlSettingsForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SamlSettingsForm",
          setup(__props) {
            const i18n = useI18n();
            const ssoStore = useSSOStore();
            const telemetry = useTelemetry();
            const toast = useToast();
            const message = useMessage();
            const savingForm = ref(false);
            const redirectUrl = ref();
            const samlLoginEnabled = ref(false);
            const IdentityProviderSettingsType = {
              URL: "url",
              XML: "xml"
            };
            const ipsOptions = ref([{
              label: i18n.baseText("settings.sso.settings.ips.options.url"),
              value: IdentityProviderSettingsType.URL
            }, {
              label: i18n.baseText("settings.sso.settings.ips.options.xml"),
              value: IdentityProviderSettingsType.XML
            }]);
            const ipsType = ref(IdentityProviderSettingsType.URL);
            const metadataUrl = ref();
            const metadata = ref();
            const entityId = ref();
            const showUserRoleProvisioningDialog = ref(false);
            const {
              formValue: userRoleProvisioning,
              isUserRoleProvisioningChanged,
              saveProvisioningConfig,
              shouldPromptUserToConfirmUserRoleProvisioningChange
            } = useUserRoleProvisioningForm(SupportedProtocols.SAML);
            async function loadSamlConfig() {
              if (!ssoStore.isEnterpriseSamlEnabled) return;
              try {
                await getSamlConfig();
              } catch (error) {
                toast.showError(error, "error");
              }
            }
            const getSamlConfig = async () => {
              const config = await ssoStore.getSamlConfig();
              entityId.value = config?.entityID;
              redirectUrl.value = config?.returnUrl;
              if (config?.metadataUrl) ipsType.value = IdentityProviderSettingsType.URL;else if (config?.metadata) ipsType.value = IdentityProviderSettingsType.XML;
              metadata.value = config?.metadata;
              metadataUrl.value = config?.metadataUrl;
              samlLoginEnabled.value = config.loginEnabled ?? false;
            };
            const isSaveEnabled = computed(() => {
              if (savingForm.value) return false;
              const isIdentityProviderChanged = () => {
                if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && metadataUrl.value !== ssoStore.samlConfig?.metadataUrl;else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && metadata.value !== ssoStore.samlConfig?.metadata;
                return false;
              };
              const isSamlLoginEnabledChanged = ssoStore.isSamlLoginEnabled !== samlLoginEnabled.value;
              return isUserRoleProvisioningChanged.value || isIdentityProviderChanged() || isSamlLoginEnabledChanged;
            });
            const isTestEnabled = computed(() => {
              if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value;else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value;
              return false;
            });
            const sendTrackingEvent = config => {
              if (!config) {
                captureMessage("Single Sign-On SAML: telemtetry data undefined on submit", {
                  level: "error"
                });
                return;
              }
              const trackingMetadata = {
                instance_id: useRootStore().instanceId,
                authentication_method: SupportedProtocols.SAML,
                identity_provider: config.metadataUrl ? "metadata" : "xml",
                is_active: config.loginEnabled ?? false
              };
              telemetry.track("User updated single sign on settings", trackingMetadata);
            };
            const promptConfirmDisablingSamlLogin = async () => {
              return await message.confirm(i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.message", {
                interpolate: {
                  protocol: "SAML"
                }
              }), i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.headline", {
                interpolate: {
                  protocol: "SAML"
                }
              }), {
                cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
                confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
              });
            };
            const prompTestSamlConnectionBeforeActivating = async () => {
              const promptOpeningTestConnectionPage = await message.confirm(i18n.baseText("settings.sso.settings.save.testConnection.message"), i18n.baseText("settings.sso.settings.save.testConnection.title"), {
                confirmButtonText: i18n.baseText("settings.sso.settings.save.testConnection.test"),
                cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
              });
              if (promptOpeningTestConnectionPage === "confirm") {
                await onTest();
                return await message.confirm(i18n.baseText("settings.sso.settings.save.confirmTestConnection.message"), i18n.baseText("settings.sso.settings.save.confirmTestConnection.title"), {
                  confirmButtonText: i18n.baseText("settings.sso.settings.save.confirmTestConnection.confirm"),
                  cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
                });
              }
              return promptOpeningTestConnectionPage;
            };
            const onSave = async (provisioningChangesConfirmed = false) => {
              try {
                savingForm.value = true;
                validateSamlInput();
                const isDisablingSamlLogin = samlLoginEnabled.value !== ssoStore.isSamlLoginEnabled && ssoStore.isSamlLoginEnabled === true;
                if (isDisablingSamlLogin) {
                  if ((await promptConfirmDisablingSamlLogin()) !== "confirm") return;
                }
                if (!provisioningChangesConfirmed && shouldPromptUserToConfirmUserRoleProvisioningChange({
                  currentLoginEnabled: !!ssoStore.isSamlLoginEnabled,
                  loginEnabledFormValue: samlLoginEnabled.value
                })) {
                  showUserRoleProvisioningDialog.value = true;
                  return;
                }
                showUserRoleProvisioningDialog.value = false;
                const metaDataConfig = ipsType.value === IdentityProviderSettingsType.URL ? {
                  metadataUrl: metadataUrl.value
                } : {
                  metadata: metadata.value
                };
                if (!ssoStore.isSamlLoginEnabled && samlLoginEnabled.value) {
                  await ssoStore.saveSamlConfig(metaDataConfig);
                  if ((await prompTestSamlConnectionBeforeActivating()) !== "confirm") return;
                }
                const configResponse = await ssoStore.saveSamlConfig({
                  ...metaDataConfig,
                  loginEnabled: samlLoginEnabled.value
                });
                await saveProvisioningConfig(isDisablingSamlLogin);
                ssoStore.selectedAuthProtocol = SupportedProtocols.SAML;
                await getSamlConfig();
                sendTrackingEvent(configResponse);
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.sso.settings.save.error"));
                return;
              } finally {
                savingForm.value = false;
              }
            };
            const onTest = async () => {
              try {
                const url = await ssoStore.testSamlConfig();
                if (typeof window !== "undefined") window.open(url, "_blank");
              } catch (error) {
                toast.showError(error, "error");
              }
            };
            const validateSamlInput = () => {
              if (ipsType.value === IdentityProviderSettingsType.URL) try {
                const parsedUrl = new URL(metadataUrl.value);
                if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") throw new Error("The provided protocol is not supported");
              } catch (error) {
                throw new Error(i18n.baseText("settings.sso.settings.ips.url.invalid"));
              }
            };
            onMounted(async () => {
              await loadSamlConfig();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.label")), 1), createVNode(CopyInput_default, {
                value: redirectUrl.value,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": unref(i18n).baseText("settings.sso.settings.redirectUrl.copied")
              }, null, 8, ["value", "copy-button-text", "toast-title"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.label")), 1), createVNode(CopyInput_default, {
                value: entityId.value,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": unref(i18n).baseText("settings.sso.settings.entityId.copied")
              }, null, 8, ["value", "copy-button-text", "toast-title"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.help")), 1)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.label")), 1), createBaseVNode("div", _hoisted_1$1, [createVNode(unref(N8nRadioButtons_default), {
                modelValue: ipsType.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ipsType.value = $event),
                options: ipsOptions.value
              }, null, 8, ["modelValue", "options"])]), ipsType.value === IdentityProviderSettingsType.URL ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(N8nInput_default), {
                modelValue: metadataUrl.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => metadataUrl.value = $event),
                type: "text",
                name: "metadataUrl",
                size: "large",
                placeholder: unref(i18n).baseText("settings.sso.settings.ips.url.placeholder"),
                "data-test-id": "sso-provider-url"
              }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.url.help")), 1)])) : createCommentVNode("", true), ipsType.value === IdentityProviderSettingsType.XML ? (openBlock(), createElementBlock("div", _hoisted_3$1, [createVNode(unref(N8nInput_default), {
                modelValue: metadata.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => metadata.value = $event),
                type: "textarea",
                name: "metadata",
                rows: 4,
                "data-test-id": "sso-provider-xml"
              }, null, 8, ["modelValue"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.xml.help")), 1)])) : createCommentVNode("", true), createVNode(UserRoleProvisioningDropdown_default, {
                modelValue: unref(userRoleProvisioning),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(userRoleProvisioning) ? userRoleProvisioning.value = $event : null),
                "auth-protocol": "saml"
              }, null, 8, ["modelValue"]), createVNode(ConfirmProvisioningDialog_default, {
                modelValue: showUserRoleProvisioningDialog.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => showUserRoleProvisioningDialog.value = $event),
                "new-provisioning-setting": unref(userRoleProvisioning),
                "auth-protocol": "saml",
                onConfirmProvisioning: _cache[5] || (_cache[5] = $event => onSave(true)),
                onCancel: _cache[6] || (_cache[6] = $event => showUserRoleProvisioningDialog.value = false)
              }, null, 8, ["modelValue", "new-provisioning-setting"]), createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.group, _ctx.$style.checkboxGroup])
              }, [createVNode(unref(ElCheckbox), {
                modelValue: samlLoginEnabled.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => samlLoginEnabled.value = $event),
                "data-test-id": "sso-toggle"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.activated")), 1)]),
                _: 1
              }, 8, ["modelValue"])], 2)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [createVNode(unref(N8nButton_default), {
                disabled: !isSaveEnabled.value,
                loading: savingForm.value,
                size: "large",
                "data-test-id": "sso-save",
                onClick: _cache[8] || (_cache[8] = $event => onSave(false))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
                _: 1
              }, 8, ["disabled", "loading"]), createVNode(unref(N8nButton_default), {
                disabled: !isTestEnabled.value,
                size: "large",
                type: "tertiary",
                "data-test-id": "sso-test",
                onClick: onTest
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)]),
                _: 1
              }, 8, ["disabled"])], 2)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/styles/sso-form.module.scss?vue&type=style&index=0&src=true&lang.module.scss
        buttons = "_buttons_1g1no_132";
        group = "_group_1g1no_141";
        checkboxGroup = "_checkboxGroup_1g1no_157";
        actionBox$1 = "_actionBox_1g1no_161";
        footer = "_footer_1g1no_165";
        sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default = {
          "switch": "_switch_1g1no_126",
          buttons,
          group,
          checkboxGroup,
          actionBox: actionBox$1,
          footer
        }; //#endregion
        //#region src/features/settings/sso/components/SamlSettingsForm.vue
        cssModules$2 = {
          "$style": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default
        };
        SamlSettingsForm_default = /* @__PURE__ */__plugin_vue_export_helper_default(SamlSettingsForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/settings/sso/components/OidcSettingsForm.vue?vue&type=script&setup=true&lang.ts
        OidcSettingsForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "OidcSettingsForm",
          setup(__props) {
            const i18n = useI18n();
            const ssoStore = useSSOStore();
            const telemetry = useTelemetry();
            const toast = useToast();
            const message = useMessage();
            const savingForm = ref(false);
            const discoveryEndpoint = ref("");
            const clientId = ref("");
            const clientSecret = ref("");
            const showUserRoleProvisioningDialog = ref(false);
            const {
              formValue: userRoleProvisioning,
              isUserRoleProvisioningChanged,
              saveProvisioningConfig,
              shouldPromptUserToConfirmUserRoleProvisioningChange
            } = useUserRoleProvisioningForm(SupportedProtocols.OIDC);
            const prompt = ref("select_account");
            const handlePromptChange = value => {
              prompt.value = value;
            };
            const promptDescriptions = [{
              label: i18n.baseText("settings.sso.settings.oidc.prompt.login"),
              value: "login"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.none"),
              value: "none"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.consent"),
              value: "consent"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.select_account"),
              value: "select_account"
            }, {
              label: i18n.baseText("settings.sso.settings.oidc.prompt.create"),
              value: "create"
            }];
            const authenticationContextClassReference = ref("");
            const getOidcConfig = async () => {
              const config = await ssoStore.getOidcConfig();
              clientId.value = config.clientId;
              clientSecret.value = config.clientSecret;
              discoveryEndpoint.value = config.discoveryEndpoint;
              prompt.value = config.prompt ?? "select_account";
              authenticationContextClassReference.value = config.authenticationContextClassReference?.join(",") || "";
            };
            const loadOidcConfig = async () => {
              if (!ssoStore.isEnterpriseOidcEnabled) return;
              try {
                await getOidcConfig();
              } catch (error) {
                toast.showError(error, "error");
              }
            };
            const cannotSaveOidcSettings = computed(() => {
              const currentAcrString = authenticationContextClassReference.value.split(",").map(s => s.trim()).filter(Boolean).join(",");
              const storedAcrString = ssoStore.oidcConfig?.authenticationContextClassReference?.join(",") || "";
              return ssoStore.oidcConfig?.clientId === clientId.value && ssoStore.oidcConfig?.clientSecret === clientSecret.value && ssoStore.oidcConfig?.discoveryEndpoint === discoveryEndpoint.value && ssoStore.oidcConfig?.loginEnabled === ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.prompt === prompt.value && !isUserRoleProvisioningChanged.value && storedAcrString === authenticationContextClassReference.value && currentAcrString === storedAcrString;
            });
            async function onOidcSettingsSave(provisioningChangesConfirmed = false) {
              if (!provisioningChangesConfirmed && shouldPromptUserToConfirmUserRoleProvisioningChange({
                currentLoginEnabled: !!ssoStore.oidcConfig?.loginEnabled,
                loginEnabledFormValue: ssoStore.isOidcLoginEnabled
              })) {
                showUserRoleProvisioningDialog.value = true;
                return;
              }
              const isDisablingOidcLogin = ssoStore.oidcConfig?.loginEnabled !== ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.loginEnabled === true;
              if (isDisablingOidcLogin) {
                if ((await message.confirm(i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.message", {
                  interpolate: {
                    protocol: "OIDC"
                  }
                }), i18n.baseText("settings.sso.confirmMessage.beforeSaveForm.headline", {
                  interpolate: {
                    protocol: "OIDC"
                  }
                }), {
                  cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
                  confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
                })) !== "confirm") return;
              }
              const acrArray = authenticationContextClassReference.value.split(",").map(s => s.trim()).filter(Boolean);
              try {
                savingForm.value = true;
                const newConfig = await ssoStore.saveOidcConfig({
                  clientId: clientId.value,
                  clientSecret: clientSecret.value,
                  discoveryEndpoint: discoveryEndpoint.value,
                  prompt: prompt.value,
                  loginEnabled: ssoStore.isOidcLoginEnabled,
                  authenticationContextClassReference: acrArray
                });
                await saveProvisioningConfig(isDisablingOidcLogin);
                showUserRoleProvisioningDialog.value = false;
                ssoStore.selectedAuthProtocol = SupportedProtocols.OIDC;
                clientSecret.value = newConfig.clientSecret;
                sendTrackingEvent(newConfig);
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
                return;
              } finally {
                savingForm.value = false;
                await getOidcConfig();
              }
            }
            function sendTrackingEvent(config) {
              const trackingMetadata = {
                instance_id: useRootStore().instanceId,
                authentication_method: SupportedProtocols.OIDC,
                discovery_endpoint: config.discoveryEndpoint,
                is_active: config.loginEnabled
              };
              telemetry.track("User updated single sign on settings", trackingMetadata);
            }
            onMounted(async () => {
              await loadOidcConfig();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[10] || (_cache[10] = createBaseVNode("label", null, "Redirect URL", -1)), createVNode(CopyInput_default, {
                value: unref(ssoStore).oidc.callbackUrl,
                "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                "toast-title": "Redirect URL copied to clipboard"
              }, null, 8, ["value", "copy-button-text"]), _cache[11] || (_cache[11] = createBaseVNode("small", null, "Copy the Redirect URL to configure your OIDC provider ", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[12] || (_cache[12] = createBaseVNode("label", null, "Discovery Endpoint", -1)), createVNode(unref(N8nInput_default), {
                "model-value": discoveryEndpoint.value,
                type: "text",
                "data-test-id": "oidc-discovery-endpoint",
                placeholder: "https://accounts.google.com/.well-known/openid-configuration",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = v => discoveryEndpoint.value = v)
              }, null, 8, ["model-value"]), _cache[13] || (_cache[13] = createBaseVNode("small", null, "Paste here your discovery endpoint", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[14] || (_cache[14] = createBaseVNode("label", null, "Client ID", -1)), createVNode(unref(N8nInput_default), {
                "model-value": clientId.value,
                type: "text",
                "data-test-id": "oidc-client-id",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = v => clientId.value = v)
              }, null, 8, ["model-value"]), _cache[15] || (_cache[15] = createBaseVNode("small", null, "The client ID you received when registering your application with your provider", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[16] || (_cache[16] = createBaseVNode("label", null, "Client Secret", -1)), createVNode(unref(N8nInput_default), {
                "model-value": clientSecret.value,
                type: "password",
                "data-test-id": "oidc-client-secret",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = v => clientSecret.value = v)
              }, null, 8, ["model-value"]), _cache[17] || (_cache[17] = createBaseVNode("small", null, "The client Secret you received when registering your application with your provider", -1))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[18] || (_cache[18] = createBaseVNode("label", null, "Prompt", -1)), createVNode(unref(N8nSelect_default), {
                "model-value": prompt.value,
                "data-test-id": "oidc-prompt",
                "onUpdate:modelValue": handlePromptChange
              }, {
                default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(promptDescriptions, option => {
                  return createVNode(unref(N8nOption_default), {
                    key: option.value,
                    label: option.label,
                    "data-test-id": "oidc-prompt-filter-option",
                    value: option.value
                  }, null, 8, ["label", "value"]);
                }), 64))]),
                _: 1
              }, 8, ["model-value"]), _cache[19] || (_cache[19] = createBaseVNode("small", null, "The prompt parameter to use when authenticating with the OIDC provider", -1))], 2), createVNode(UserRoleProvisioningDropdown_default, {
                modelValue: unref(userRoleProvisioning),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(userRoleProvisioning) ? userRoleProvisioning.value = $event : null),
                "auth-protocol": "oidc"
              }, null, 8, ["modelValue"]), createVNode(ConfirmProvisioningDialog_default, {
                modelValue: showUserRoleProvisioningDialog.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => showUserRoleProvisioningDialog.value = $event),
                "new-provisioning-setting": unref(userRoleProvisioning),
                "auth-protocol": "oidc",
                onConfirmProvisioning: _cache[5] || (_cache[5] = $event => onOidcSettingsSave(true)),
                onCancel: _cache[6] || (_cache[6] = $event => showUserRoleProvisioningDialog.value = false)
              }, null, 8, ["modelValue", "new-provisioning-setting"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.group)
              }, [_cache[20] || (_cache[20] = createBaseVNode("label", null, "Authentication Context Class Reference", -1)), createVNode(unref(N8nInput_default), {
                "model-value": authenticationContextClassReference.value,
                type: "textarea",
                "data-test-id": "oidc-authentication-context-class-reference",
                placeholder: "mfa, phrh, pwd",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = v => authenticationContextClassReference.value = v)
              }, null, 8, ["model-value"]), _cache[21] || (_cache[21] = createBaseVNode("small", null, "ACR values to include in the authorization request (acr_values parameter), separated by commas in order of preference.", -1))], 2), createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.group, _ctx.$style.checkboxGroup])
              }, [createVNode(unref(ElCheckbox), {
                modelValue: unref(ssoStore).isOidcLoginEnabled,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => unref(ssoStore).isOidcLoginEnabled = $event),
                "data-test-id": "sso-oidc-toggle"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.activated")), 1)]),
                _: 1
              }, 8, ["modelValue"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [createVNode(unref(N8nButton_default), {
                "data-test-id": "sso-oidc-save",
                size: "large",
                loading: savingForm.value,
                disabled: savingForm.value || cannotSaveOidcSettings.value,
                onClick: _cache[9] || (_cache[9] = $event => onOidcSettingsSave(false))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])], 2)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/components/OidcSettingsForm.vue
        cssModules$1 = {
          "$style": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default
        };
        OidcSettingsForm_default = /* @__PURE__ */__plugin_vue_export_helper_default(OidcSettingsForm_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/sso/views/SettingsSso.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "pb-2xl"
        };
        _hoisted_2 = {
          href: "https://docs.n8n.io/user-management/saml/",
          target: "_blank"
        };
        _hoisted_3 = {
          key: 1,
          "data-test-id": "sso-content-licensed"
        };
        _hoisted_4 = {
          key: 2,
          "data-test-id": "sso-content-licensed"
        };
        SettingsSso_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsSso",
          setup(__props) {
            const i18n = useI18n();
            const ssoStore = useSSOStore();
            const documentTitle = useDocumentTitle();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const options = computed(() => {
              return [{
                label: SupportedProtocols.SAML.toUpperCase(),
                value: SupportedProtocols.SAML
              }, {
                label: ssoStore.isEnterpriseOidcEnabled ? SupportedProtocols.OIDC.toUpperCase() : `${SupportedProtocols.OIDC.toUpperCase()} (${i18n.baseText("generic.upgradeToEnterprise")})`,
                value: SupportedProtocols.OIDC
              }];
            });
            const hasAnySsoEnabled = computed(() => ssoStore.isEnterpriseSamlEnabled || ssoStore.isEnterpriseOidcEnabled);
            const authProtocol = ref(SupportedProtocols.SAML);
            function onAuthProtocolUpdated(value) {
              authProtocol.value = value;
            }
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("sso", "upgrade-sso");
            };
            onMounted(() => {
              documentTitle.set(i18n.baseText("settings.sso.title"));
              ssoStore.initializeSelectedProtocol();
              authProtocol.value = ssoStore.selectedAuthProtocol || SupportedProtocols.SAML;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.heading)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)]),
                _: 1
              })], 2), createVNode(unref(N8nInfoTip_default), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.info")) + " ", 1), createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.sso.info.link")), 1)]),
                _: 1
              }), hasAnySsoEnabled.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                "data-test-id": "sso-auth-protocol-select",
                class: normalizeClass(_ctx.shared.group)
              }, [_cache[1] || (_cache[1] = createBaseVNode("label", null, "Select Authentication Protocol", -1)), createBaseVNode("div", null, [createVNode(unref(N8nSelect_default), {
                filterable: "",
                "model-value": authProtocol.value,
                placeholder: unref(i18n).baseText("parameterInput.select"),
                "onUpdate:modelValue": onAuthProtocolUpdated,
                onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, ({
                  label,
                  value
                }) => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: value,
                    value,
                    label,
                    "data-test-id": "credential-select-option"
                  }, null, 8, ["value", "label"]);
                }), 128))]),
                _: 1
              }, 8, ["model-value", "placeholder"])])], 2)) : createCommentVNode("", true), unref(ssoStore).isEnterpriseSamlEnabled && authProtocol.value === unref(SupportedProtocols).SAML ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(SamlSettingsForm_default)])) : createCommentVNode("", true), unref(ssoStore).isEnterpriseOidcEnabled && authProtocol.value === unref(SupportedProtocols).OIDC ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(OidcSettingsForm_default)])) : createCommentVNode("", true), !hasAnySsoEnabled.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 3,
                "data-test-id": "sso-content-unlicensed",
                class: normalizeClass(_ctx.$style.actionBox),
                description: unref(i18n).baseText("settings.sso.actionBox.description"),
                "button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
                _: 1
              }, 8, ["class", "description", "button-text"])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SettingsSso.vue?vue&type=style&index=1&lang.module.scss
        heading = "_heading_86duv_123";
        actionBox = "_actionBox_86duv_127";
        SettingsSso_vue_vue_type_style_index_1_lang_module_default = {
          heading,
          actionBox
        }; //#endregion
        //#region src/features/settings/sso/views/SettingsSso.vue
        cssModules = {
          "shared": sso_form_module_scss_vue_type_style_index_0_src_true_lang_module_default,
          "$style": SettingsSso_vue_vue_type_style_index_1_lang_module_default
        };
        _export("default", SettingsSso_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsSso_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();