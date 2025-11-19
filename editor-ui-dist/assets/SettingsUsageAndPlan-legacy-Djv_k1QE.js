;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./dialog-legacy-DgHQtAIU.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./usage.store-legacy-DM-Ej7_u.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, withCtx, openBlock, withModifiers, createTextVNode, createBaseVNode, normalizeStyle, I18nT, i18n, N8nInput_default, N8nNotice_default, N8nText_default, N8nCheckbox_default, N8nButton_default, N8nInfoTip_default, N8nHeading_default, N8nBadge_default, N8nTooltip_default, __plugin_vue_export_helper_default, useRouter, useRoute, ElDialog, hasPermission, useUIStore, useDocumentTitle, useUsersStore, COMMUNITY_PLUS_ENROLLMENT_MODAL, telemetry, useToast, getResourcePermissions, usePageRedirectionHelper, useUsageStore, __vite_style__, _hoisted_1$1, EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default, checkboxWrapper, footerActions, EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default, cssModules$1, EulaAcceptanceModal_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default, center, actionBox, spacedFlex, title, quota, count, buttons, chart, chartLine, chartBar, titleTooltip, SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsUsageAndPlan_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_srcLegacy007Js) {
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nNotice_default = _srcLegacy007Js.E;
        N8nText_default = _srcLegacy007Js.In;
        N8nCheckbox_default = _srcLegacy007Js.J;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_dialogLegacy00BJs) {
        ElDialog = _dialogLegacy00BJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        hasPermission = _useTelemetryLegacy00FJs.Gn;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        COMMUNITY_PLUS_ENROLLMENT_MODAL = _useTelemetryLegacy00FJs.ko;
        telemetry = _useTelemetryLegacy00FJs.r;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        getResourcePermissions = _constantsLegacy00NJs._r;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_usageStoreLegacy029Js) {
        useUsageStore = _usageStoreLegacy029Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._checkboxWrapper_zk1u2_123 {\n  margin-top: var(--spacing--md);\n}\n._footerActions_zk1u2_127 {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._center_g33cs_123 > div {\n  justify-content: center;\n}\n._actionBox_g33cs_127 {\n  margin: var(--spacing--2xl) 0 0;\n}\n._spacedFlex_g33cs_131 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n._title_g33cs_137 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--2xl) 0 var(--spacing--md);\n}\n._quota_g33cs_143 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 54px;\n  padding: 0 var(--spacing--sm);\n  margin: 0 0 var(--spacing--xs);\n  background: var(--color--background--light-3);\n  border-radius: var(--radius--lg);\n  border: 1px solid var(--color--foreground);\n  white-space: nowrap;\n}\n._quota_g33cs_143 ._count_g33cs_155 {\n  text-transform: lowercase;\n  font-size: var(--font-size--sm);\n}\n._buttons_g33cs_160 {\n  display: flex;\n  justify-content: flex-end;\n  padding: var(--spacing--xl) 0 0;\n}\n._buttons_g33cs_160 button {\n  margin-left: var(--spacing--xs);\n}\n._buttons_g33cs_160 button a {\n  display: inline-block;\n  color: inherit;\n  text-decoration: none;\n  padding: var(--spacing--xs) var(--spacing--md);\n  margin: calc(var(--spacing--xs) * -1) calc(var(--spacing--md) * -1);\n}\n._chart_g33cs_176 {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n._chartLine_g33cs_183 {\n  display: block;\n  height: 10px;\n  width: 100%;\n  max-width: 260px;\n  margin: 0 var(--spacing--md);\n  border-radius: 10px;\n  background: var(--color--background);\n}\n._chartBar_g33cs_193 {\n  float: left;\n  height: 100%;\n  max-width: 100%;\n  background: var(--color--secondary);\n  border-radius: 10px;\n  transition: width 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n}\ndiv[class*=info] > span > span:last-child {\n  line-height: 1.4;\n  padding: 0 0 0 var(--spacing--4xs);\n}\n._titleTooltip_g33cs_207 {\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.settings-usage-and-plan[data-v-7dbdb19b] .el-dialog__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.settings-usage-and-plan[data-v-7dbdb19b] .el-dialog__wrapper .el-dialog {\n  margin: 0;\n}\n.settings-usage-and-plan[data-v-7dbdb19b] .el-dialog__wrapper .el-dialog .el-dialog__footer button {\n  margin-left: var(--spacing--xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/usage/components/EulaAcceptanceModal.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = ["href"];
        EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EulaAcceptanceModal",
          props: {
            modelValue: {
              type: Boolean
            },
            eulaUrl: {}
          },
          emits: ["update:modelValue", "accept", "cancel"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const accepted = ref(false);
            const isAcceptDisabled = computed(() => !accepted.value);
            const onCancel = () => {
              accepted.value = false;
              emit("cancel");
            };
            const onAccept = () => {
              emit("accept");
            };
            const onClose = () => {
              emit("update:modelValue", false);
              onCancel();
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                "model-value": _ctx.modelValue,
                title: unref(i18n).baseText("settings.usageAndPlan.dialog.eula.title"),
                "before-close": onClose,
                width: "540px",
                "data-test-id": "eula-acceptance-modal"
              }, {
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
                  color: "text-base",
                  size: "medium"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.description")), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.checkboxWrapper)
                }, [createVNode(unref(N8nCheckbox_default), {
                  modelValue: accepted.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => accepted.value = $event),
                  "data-test-id": "eula-checkbox"
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.checkbox.label")) + " " + toDisplayString(" ") + " ", 1), createBaseVNode("a", {
                    href: _ctx.eulaUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-test-id": "eula-link"
                  }, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.link.text")), 9, _hoisted_1$1)])]),
                  _: 1
                }, 8, ["modelValue"])], 2)])]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerActions)
                }, [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  "data-test-id": "eula-cancel-button",
                  onClick: onCancel
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.button.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: isAcceptDisabled.value,
                  "data-test-id": "eula-accept-button",
                  onClick: onAccept
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.eula.button.accept")), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)]),
                _: 1
              }, 8, ["model-value", "title"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/usage/components/EulaAcceptanceModal.vue?vue&type=style&index=0&lang.module.scss
        checkboxWrapper = "_checkboxWrapper_zk1u2_123";
        footerActions = "_footerActions_zk1u2_127";
        EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default = {
          checkboxWrapper,
          footerActions
        }; //#endregion
        //#region src/features/settings/usage/components/EulaAcceptanceModal.vue
        cssModules$1 = {
          "$style": EulaAcceptanceModal_vue_vue_type_style_index_0_lang_module_default
        };
        EulaAcceptanceModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(EulaAcceptanceModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/usage/views/SettingsUsageAndPlan.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "settings-usage-and-plan"
        };
        _hoisted_2 = {
          key: 0
        };
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = {
          key: 1
        };
        _hoisted_5 = {
          key: 0
        };
        _hoisted_6 = {
          key: 1
        };
        _hoisted_7 = ["href"];
        _hoisted_8 = ["href"];
        SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsUsageAndPlan",
          setup(__props) {
            const usageStore = useUsageStore();
            const route = useRoute();
            const router = useRouter();
            const uiStore = useUIStore();
            const usersStore = useUsersStore();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const queryParamCallback = ref(`callback=${encodeURIComponent(`${window.location.origin}${window.location.pathname}`)}`);
            const viewPlansUrl = computed(() => `${usageStore.viewPlansUrl}&${queryParamCallback.value}&source=usage_page`);
            const managePlanUrl = computed(() => `${usageStore.managePlanUrl}&${queryParamCallback.value}`);
            const activationKeyModal = ref(false);
            const activationKey = ref("");
            const activationKeyInput = ref(null);
            const eulaModal = ref(false);
            const eulaUrl = ref("");
            const canUserActivateLicense = computed(() => hasPermission(["rbac"], {
              rbac: {
                scope: "license:manage"
              }
            }));
            const badgedPlanName = computed(() => {
              const [badge, name] = usageStore.planName.split(" ");
              return {
                name,
                badge
              };
            });
            const isCommunity = computed(() => usageStore.planName.toLowerCase() === "community");
            const isCommunityEditionRegistered = computed(() => usageStore.planName.toLowerCase() === "registered community");
            const canUserRegisterCommunityPlus = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).community.register);
            const showActivationSuccess = () => {
              toast.showMessage({
                type: "success",
                title: i18n.baseText("settings.usageAndPlan.license.activation.success.title"),
                message: i18n.baseText("settings.usageAndPlan.license.activation.success.message", {
                  interpolate: {
                    name: usageStore.planName,
                    type: usageStore.planId ? i18n.baseText("settings.usageAndPlan.plan") : i18n.baseText("settings.usageAndPlan.edition")
                  }
                })
              });
            };
            const showActivationError = error => {
              toast.showError(error, i18n.baseText("settings.usageAndPlan.license.activation.error.title"));
            };
            const isEulaError = error => {
              const e = error;
              return e.httpStatusCode === 400 && !!e.meta?.eulaUrl;
            };
            const onLicenseActivation = async eulaUri => {
              try {
                await usageStore.activateLicense(activationKey.value.trim(), eulaUri?.trim());
                activationKeyModal.value = false;
                eulaModal.value = false;
                activationKey.value = "";
                showActivationSuccess();
              } catch (error) {
                if (isEulaError(error)) {
                  activationKeyModal.value = false;
                  eulaUrl.value = error.meta.eulaUrl;
                  eulaModal.value = true;
                  return;
                }
                showActivationError(error);
              }
            };
            const onEulaAccept = async () => {
              try {
                await onLicenseActivation(eulaUrl.value);
              } catch (error) {
                eulaModal.value = false;
                showActivationError(error);
              }
            };
            const onEulaCancel = () => {
              eulaModal.value = false;
              eulaUrl.value = "";
              activationKey.value = "";
            };
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.usageAndPlan.title"));
              usageStore.setLoading(true);
              if (route.query.key) try {
                await usageStore.activateLicense(route.query.key);
                await router.replace({
                  query: {}
                });
                showActivationSuccess();
                usageStore.setLoading(false);
                return;
              } catch (error) {
                showActivationError(error);
              }
              try {
                if (!route.query.key && canUserActivateLicense.value) await usageStore.refreshLicenseManagementToken();else await usageStore.getLicenseInfo();
                usageStore.setLoading(false);
              } catch (error) {
                if (!error.name) error.name = i18n.baseText("settings.usageAndPlan.error");
                toast.showError(error, error.name, error.message);
              }
            });
            const sendUsageTelemetry = action => {
              const telemetryPayload = usageStore.telemetryPayload;
              telemetryPayload.action = action;
              telemetry.track("User clicked button on usage page", telemetryPayload);
            };
            const onAddActivationKey = () => {
              activationKeyModal.value = true;
              sendUsageTelemetry("add_activation_key");
            };
            const onViewPlans = () => {
              pageRedirectionHelper.goToUpgrade("usage_page", "open");
              sendUsageTelemetry("view_plans");
            };
            const onManagePlan = () => {
              sendUsageTelemetry("manage_plan");
            };
            const onDialogClosed = () => {
              activationKey.value = "";
            };
            const onDialogOpened = () => {
              activationKeyInput.value?.focus();
            };
            const openCommunityRegisterModal = () => {
              uiStore.openModalWithData({
                name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
                data: {
                  customHeading: void 0
                }
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.title")), 1)]),
                _: 1
              }), !unref(usageStore).isLoading ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nHeading_default), {
                tag: "h3",
                class: normalizeClass(_ctx.$style.title),
                size: "large"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.usageAndPlan.description",
                  tag: "span",
                  scope: "global"
                }, {
                  name: withCtx(() => [createTextVNode(toDisplayString(badgedPlanName.value.name ?? unref(usageStore).planName), 1)]),
                  type: withCtx(() => [unref(usageStore).planId ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.plan")), 1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.edition")), 1))]),
                  _: 1
                }), badgedPlanName.value.badge && badgedPlanName.value.name ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.titleTooltip)
                }, [createVNode(unref(N8nTooltip_default), {
                  placement: "top"
                }, {
                  content: withCtx(() => [isCommunityEditionRegistered.value ? (openBlock(), createBlock(unref(I18nT), {
                    key: 0,
                    keypath: "settings.usageAndPlan.license.communityRegistered.tooltip",
                    scope: "global"
                  })) : createCommentVNode("", true)]),
                  default: withCtx(() => [createVNode(unref(N8nBadge_default), null, {
                    default: withCtx(() => [createTextVNode(toDisplayString(badgedPlanName.value.badge), 1)]),
                    _: 1
                  })]),
                  _: 1
                })], 2)) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["class"]), isCommunity.value && canUserRegisterCommunityPlus.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 0,
                class: "mt-0",
                theme: "warning"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  keypath: "settings.usageAndPlan.callOut",
                  scope: "global"
                }, {
                  link: withCtx(() => [createVNode(unref(N8nButton_default), {
                    class: "pl-0 pr-0",
                    text: "",
                    label: unref(i18n).baseText("settings.usageAndPlan.callOut.link"),
                    onClick: openCommunityRegisterModal
                  }, null, 8, ["label"])]),
                  _: 1
                })]),
                _: 1
              })) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.quota)
              }, [createVNode(unref(N8nText_default), {
                size: "medium",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.chart)
              }, [unref(usageStore).activeWorkflowTriggersLimit > 0 ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.chartLine)
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.chartBar),
                style: normalizeStyle({
                  width: `${unref(usageStore).executionPercentage}%`
                })
              }, null, 6)], 2)) : createCommentVNode("", true), createVNode(unref(I18nT), {
                tag: "span",
                class: normalizeClass(_ctx.$style.count),
                keypath: "settings.usageAndPlan.activeWorkflows.count",
                scope: "global"
              }, {
                count: withCtx(() => [createTextVNode(toDisplayString(unref(usageStore).activeWorkflowTriggersCount), 1)]),
                limit: withCtx(() => [unref(usageStore).activeWorkflowTriggersLimit < 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.unlimited")), 1)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(usageStore).activeWorkflowTriggersLimit), 1))]),
                _: 1
              }, 8, ["class"])], 2)], 2), createVNode(unref(N8nInfoTip_default), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.activeWorkflows.hint")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.buttons)
              }, [canUserActivateLicense.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.buttonTertiary),
                type: "tertiary",
                size: "large",
                onClick: onAddActivationKey
              }, {
                default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.activation")), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true), unref(usageStore).managementToken ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                size: "large",
                onClick: onManagePlan
              }, {
                default: withCtx(() => [createBaseVNode("a", {
                  href: managePlanUrl.value,
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.manage")), 9, _hoisted_7)]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 2,
                size: "large",
                onClick: withModifiers(onViewPlans, ["prevent"])
              }, {
                default: withCtx(() => [createBaseVNode("a", {
                  href: viewPlansUrl.value,
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.usageAndPlan.button.plans")), 9, _hoisted_8)]),
                _: 1
              }))], 2), createVNode(unref(ElDialog), {
                modelValue: activationKeyModal.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => activationKeyModal.value = $event),
                width: "480px",
                top: "0",
                title: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.title"),
                "modal-class": _ctx.$style.center,
                onClosed: onDialogClosed,
                onOpened: onDialogOpened
              }, {
                default: withCtx(() => [createVNode(unref(N8nInput_default), {
                  ref_key: "activationKeyInput",
                  ref: activationKeyInput,
                  modelValue: activationKey.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => activationKey.value = $event),
                  placeholder: unref(i18n).baseText("settings.usageAndPlan.dialog.activation.label")
                }, null, 8, ["modelValue", "placeholder"])]),
                footer: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  onClick: _cache[1] || (_cache[1] = $event => activationKeyModal.value = false)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  disabled: !activationKey.value,
                  onClick: _cache[2] || (_cache[2] = () => onLicenseActivation())
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.usageAndPlan.dialog.activation.activate")), 1)]),
                  _: 1
                }, 8, ["disabled"])]),
                _: 1
              }, 8, ["modelValue", "title", "modal-class"]), createVNode(EulaAcceptanceModal_default, {
                modelValue: eulaModal.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => eulaModal.value = $event),
                "eula-url": eulaUrl.value,
                onAccept: onEulaAccept,
                onCancel: onEulaCancel
              }, null, 8, ["modelValue", "eula-url"])])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/usage/views/SettingsUsageAndPlan.vue?vue&type=style&index=0&lang.module.scss
        center = "_center_g33cs_123";
        actionBox = "_actionBox_g33cs_127";
        spacedFlex = "_spacedFlex_g33cs_131";
        title = "_title_g33cs_137";
        quota = "_quota_g33cs_143";
        count = "_count_g33cs_155";
        buttons = "_buttons_g33cs_160";
        chart = "_chart_g33cs_176";
        chartLine = "_chartLine_g33cs_183";
        chartBar = "_chartBar_g33cs_193";
        titleTooltip = "_titleTooltip_g33cs_207";
        SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default = {
          center,
          actionBox,
          spacedFlex,
          title,
          quota,
          count,
          buttons,
          chart,
          chartLine,
          chartBar,
          titleTooltip
        }; //#endregion
        //#region src/features/settings/usage/views/SettingsUsageAndPlan.vue
        cssModules = {
          "$style": SettingsUsageAndPlan_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsUsageAndPlan_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsUsageAndPlan_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-7dbdb19b"]])); //#endregion
      }
    };
  });
})();