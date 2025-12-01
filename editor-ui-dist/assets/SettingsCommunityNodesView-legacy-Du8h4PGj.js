;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./assistant.store-legacy-DA-XPgP-.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./npsSurvey.store-legacy-B5srzxcX.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./templates.store-legacy-dWApE3rc.js", "./focusPanel.store-legacy-BYC5h8FJ.js", "./useWorkflowSaving-legacy-Bw9fkKuY.js", "./retry-legacy-CSXRWnZ-.js", "./executions.store-legacy-DarjeF75.js", "./useRunWorkflow-legacy-B_MOKTHf.js", "./usePinnedData-legacy-DF_tF6WF.js", "./nodeCreator.store-legacy-06_T1NV-.js", "./nodeIcon-legacy-vDRr0hL7.js", "./useClipboard-legacy-CkqS6mrY.js", "./useCanvasOperations-legacy-nXNbEUno.js", "./folders.store-legacy-B-8jqnKg.js", "./semver-legacy-WZVQ0Mz2.js", "./schemaPreview.store-legacy-COoIf-Wv.js", "./usePushConnection-legacy-CdWrLn25.js", "./aiTemplatesStarterCollection.store-legacy-tsHwTvqE.js", "./readyToRun.store-legacy-D3EKAUpp.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, createBlock, onMounted, Fragment, watch, withCtx, openBlock, renderList, createTextVNode, onBeforeMount, normalizeClass, createBaseVNode, useI18n, N8nText_default, N8nActionBox_default, N8nHeading_default, N8nIcon_default, N8nActionToggle_default, N8nButton_default, N8nLoading_default, N8nTooltip_default, __plugin_vue_export_helper_default, useRouter, useSettingsStore, useDocumentTitle, COMMUNITY_PACKAGE_MANAGE_ACTIONS, useUIStore, COMMUNITY_NODES_INSTALLATION_DOCS_URL, COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, useNodeTypesStore, useTelemetry, useToast, NPM_PACKAGE_DOCS_BASE_URL, useExternalHooks, usePushConnectionStore, useCommunityNodesStore, require_semver, usePushConnection, __vite_style__, import_semver, _hoisted_1, CommunityPackageCard_vue_vue_type_script_setup_true_lang_default, cardContainer, packageCard, cardSkeleton, loader, cardInfoContainer, cardTitle, cardSubtitle, cardControlsContainer, cardActions, CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, CommunityPackageCard_default, PACKAGE_COUNT_THRESHOLD, SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default, container, headingContainer, loadingContainer, actionBoxContainer, cardsContainer, SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsCommunityNodesView_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Kn;
        N8nActionBox_default = _srcLegacy007Js.Ot;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nIcon_default = _srcLegacy007Js.Yn;
        N8nActionToggle_default = _srcLegacy007Js.et;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        COMMUNITY_PACKAGE_MANAGE_ACTIONS = _useTelemetryLegacy00HJs.Hi;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        COMMUNITY_NODES_INSTALLATION_DOCS_URL = _useTelemetryLegacy00HJs.Ri;
        COMMUNITY_PACKAGE_INSTALL_MODAL_KEY = _useTelemetryLegacy00HJs.Vi;
        useNodeTypesStore = _useTelemetryLegacy00HJs.rt;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        NPM_PACKAGE_DOCS_BASE_URL = _constantsLegacy00RJs.x;
      }, function (_mergeLegacy00TJs) {}, function (_assistantStoreLegacy00VJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {
        useExternalHooks = _useExternalHooksLegacy011Js.t;
      }, function (_useStylesLegacy013Js) {}, function (_npsSurveyStoreLegacy019Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_templatesStoreLegacy01dJs) {}, function (_focusPanelStoreLegacy01fJs) {}, function (_useWorkflowSavingLegacy01hJs) {}, function (_retryLegacy01jJs) {}, function (_executionsStoreLegacy01lJs) {}, function (_useRunWorkflowLegacy01nJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01nJs.i;
      }, function (_usePinnedDataLegacy01pJs) {}, function (_nodeCreatorStoreLegacy01rJs) {}, function (_nodeIconLegacy01tJs) {}, function (_useClipboardLegacy01vJs) {}, function (_useCanvasOperationsLegacy01xJs) {}, function (_foldersStoreLegacy01BJs) {}, function (_semverLegacy029Js) {
        useCommunityNodesStore = _semverLegacy029Js.n;
        require_semver = _semverLegacy029Js.t;
      }, function (_schemaPreviewStoreLegacy02zJs) {}, function (_usePushConnectionLegacy049Js) {
        usePushConnection = _usePushConnectionLegacy049Js.t;
      }, function (_aiTemplatesStarterCollectionStoreLegacy04bJs) {}, function (_readyToRunStoreLegacy04dJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._cardContainer_1jgjz_123 {\n  display: flex;\n  padding: var(--spacing--sm);\n  border: var(--border-width) var(--border-style) var(--color--info--tint-1);\n  border-radius: var(--radius--lg);\n  background-color: var(--color--background--light-3);\n}\n._packageCard_1jgjz_131,\n._cardSkeleton_1jgjz_132 {\n  display: flex;\n  flex-basis: 100%;\n  justify-content: space-between;\n}\n._packageCard_1jgjz_131 {\n  align-items: center;\n}\n._cardSkeleton_1jgjz_132 {\n  flex-direction: column;\n}\n._loader_1jgjz_146 {\n  width: 50%;\n  transform: scaleY(-1);\n}\n._loader_1jgjz_146:last-child {\n  width: 70%;\n}\n._loader_1jgjz_146:last-child div {\n  margin: 0;\n}\n._cardInfoContainer_1jgjz_157 {\n  display: flex;\n  flex-wrap: wrap;\n}\n._cardTitle_1jgjz_162 {\n  flex-basis: 100%;\n}\n._cardTitle_1jgjz_162 span {\n  line-height: 1;\n}\n._cardSubtitle_1jgjz_169 {\n  margin-top: 2px;\n  padding-right: var(--spacing--md);\n}\n._cardControlsContainer_1jgjz_174 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--3xs);\n}\n._cardActions_1jgjz_180 {\n  padding-left: var(--spacing--3xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_it0uc_123 {\n  height: 100%;\n  padding-right: var(--spacing--2xs);\n}\n._container_it0uc_123 > * {\n  margin-bottom: var(--spacing--2xl);\n}\n._headingContainer_it0uc_131 {\n  display: flex;\n  justify-content: space-between;\n}\n._loadingContainer_it0uc_136 {\n  display: flex;\n  gap: var(--spacing--xs);\n}\n._actionBoxContainer_it0uc_141 {\n  text-align: center;\n}\n._cardsContainer_it0uc_145 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/communityNodes/components/CommunityPackageCard.vue?vue&type=script&setup=true&lang.ts
        import_semver = /* @__PURE__ */__toESM(require_semver());
        _hoisted_1 = {
          key: 0
        };
        CommunityPackageCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityPackageCard",
          props: {
            communityPackage: {
              default: null
            },
            loading: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const props = __props;
            const {
              openCommunityPackageUpdateConfirmModal,
              openCommunityPackageUninstallConfirmModal
            } = useUIStore();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const settingsStore = useSettingsStore();
            const nodeTypesStore = useNodeTypesStore();
            const latestVerifiedVersion = ref();
            const currVersion = computed(() => props.communityPackage?.installedVersion || "");
            const hasUnverifiedPackagesUpdate = computed(() => {
              return settingsStore.isUnverifiedPackagesEnabled && props.communityPackage?.updateAvailable;
            });
            const hasVerifiedPackageUpdate = computed(() => {
              const canUpdate = latestVerifiedVersion.value && import_semver.default.gt(latestVerifiedVersion.value || "", currVersion.value);
              return settingsStore.isCommunityNodesFeatureEnabled && canUpdate;
            });
            const packageActions = [{
              label: i18n.baseText("settings.communityNodes.viewDocsAction.label"),
              value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS,
              type: "external-link"
            }, {
              label: i18n.baseText("settings.communityNodes.uninstallAction.label"),
              value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL
            }];
            async function onAction(value) {
              if (!props.communityPackage) return;
              switch (value) {
                case COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS:
                  telemetry.track("user clicked to browse the cnr package documentation", {
                    package_name: props.communityPackage.packageName,
                    package_version: props.communityPackage.installedVersion
                  });
                  window.open(`${NPM_PACKAGE_DOCS_BASE_URL}${props.communityPackage.packageName}`, "_blank");
                  break;
                case COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL:
                  openCommunityPackageUninstallConfirmModal(props.communityPackage.packageName);
                  break;
                default:
                  break;
              }
            }
            function onUpdateClick() {
              if (!props.communityPackage) return;
              openCommunityPackageUpdateConfirmModal(props.communityPackage.packageName, "instance settings");
            }
            watch(() => props.communityPackage?.packageName, async packageName => {
              if (packageName) {
                await nodeTypesStore.loadNodeTypesIfNotLoaded();
                const nodeType = nodeTypesStore.visibleNodeTypes.find(node => node.name.includes(packageName));
                const attributes = await nodeTypesStore.getCommunityNodeAttributes(nodeType?.name || "");
                if (attributes?.npmVersion) latestVerifiedVersion.value = attributes.npmVersion;
              }
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.cardContainer),
                "data-test-id": "community-package-card"
              }, [_ctx.loading ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.cardSkeleton)
              }, [createVNode(unref(N8nLoading_default), {
                class: normalizeClass(_ctx.$style.loader),
                variant: "p",
                rows: 1
              }, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
                class: normalizeClass(_ctx.$style.loader),
                variant: "p",
                rows: 1
              }, null, 8, ["class"])], 2)) : _ctx.communityPackage ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.packageCard)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.cardInfoContainer)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.cardTitle)
              }, [createVNode(unref(N8nText_default), {
                bold: true,
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.communityPackage.packageName), 1)]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.cardSubtitle)
              }, [createVNode(unref(N8nText_default), {
                bold: true,
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes.packageNodes.label", {
                  adjustToNumber: _ctx.communityPackage.installedNodes.length
                })) + ":\xA0 ", 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.communityPackage.installedNodes, (node, index) => {
                  return openBlock(), createElementBlock("span", {
                    key: node.name
                  }, [createTextVNode(toDisplayString(node.name), 1), index != _ctx.communityPackage.installedNodes.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1, ",")) : createCommentVNode("", true)]);
                }), 128))]),
                _: 1
              })], 2)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.cardControlsContainer)
              }, [createVNode(unref(N8nText_default), {
                bold: true,
                size: "large",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(" v" + toDisplayString(_ctx.communityPackage.installedVersion), 1)]),
                _: 1
              }), _ctx.communityPackage.failedLoading === true ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                placement: "top"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.failedToLoad.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "triangle-alert",
                  color: "danger",
                  size: "large"
                })]),
                _: 1
              })) : hasUnverifiedPackagesUpdate.value || hasVerifiedPackageUpdate.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 1,
                placement: "top"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.updateAvailable.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  outline: "",
                  label: "Update",
                  onClick: onUpdateClick
                })]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 2,
                placement: "top"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.upToDate.tooltip")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "circle-check",
                  color: "text-light",
                  size: "large"
                })]),
                _: 1
              })), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.cardActions)
              }, [createVNode(unref(N8nActionToggle_default), {
                actions: packageActions,
                onAction
              })], 2)], 2)], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/CommunityPackageCard.vue?vue&type=style&index=0&lang.module.scss
        cardContainer = "_cardContainer_1jgjz_123";
        packageCard = "_packageCard_1jgjz_131";
        cardSkeleton = "_cardSkeleton_1jgjz_132";
        loader = "_loader_1jgjz_146";
        cardInfoContainer = "_cardInfoContainer_1jgjz_157";
        cardTitle = "_cardTitle_1jgjz_162";
        cardSubtitle = "_cardSubtitle_1jgjz_169";
        cardControlsContainer = "_cardControlsContainer_1jgjz_174";
        cardActions = "_cardActions_1jgjz_180";
        CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default = {
          cardContainer,
          packageCard,
          cardSkeleton,
          loader,
          cardInfoContainer,
          cardTitle,
          cardSubtitle,
          cardControlsContainer,
          cardActions
        }; //#endregion
        //#region src/features/settings/communityNodes/components/CommunityPackageCard.vue
        cssModules$1 = {
          "$style": CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default
        };
        CommunityPackageCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityPackageCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/communityNodes/views/SettingsCommunityNodesView.vue?vue&type=script&setup=true&lang.ts
        PACKAGE_COUNT_THRESHOLD = 31;
        SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsCommunityNodesView",
          setup(__props) {
            const loading = ref(false);
            const pushConnection = usePushConnection({
              router: useRouter()
            });
            const pushStore = usePushConnectionStore();
            const externalHooks = useExternalHooks();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const communityNodesStore = useCommunityNodesStore();
            const uiStore = useUIStore();
            const settingsStore = useSettingsStore();
            const getEmptyStateTitle = computed(() => {
              if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.title");
              return i18n.baseText("settings.communityNodes.empty.title");
            });
            const getEmptyStateDescription = computed(() => {
              if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.description");
              const packageCount = communityNodesStore.availablePackageCount;
              return packageCount < PACKAGE_COUNT_THRESHOLD ? i18n.baseText("settings.communityNodes.empty.description.no-packages", {
                interpolate: {
                  docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL
                }
              }) : i18n.baseText("settings.communityNodes.empty.description", {
                interpolate: {
                  docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
                  count: (Math.floor(packageCount / 10) * 10).toString()
                }
              });
            });
            const getEmptyStateButtonText = computed(() => {
              if (!settingsStore.isUnverifiedPackagesEnabled) return "";
              return i18n.baseText("settings.communityNodes.empty.installPackageLabel");
            });
            const actionBoxConfig = computed(() => {
              return {
                calloutText: "",
                calloutTheme: void 0,
                hideButton: false
              };
            });
            const onClickEmptyStateButton = () => {
              openInstallModal();
            };
            const openInstallModal = () => {
              const telemetryPayload = {
                is_empty_state: communityNodesStore.getInstalledPackages.length === 0
              };
              telemetry.track("user clicked cnr install button", telemetryPayload);
              externalHooks.run("settingsCommunityNodesView.openInstallModal", telemetryPayload);
              uiStore.openModal(COMMUNITY_PACKAGE_INSTALL_MODAL_KEY);
            };
            onBeforeMount(() => {
              pushConnection.initialize();
              pushStore.pushConnect();
            });
            onMounted(async () => {
              documentTitle.set(i18n.baseText("settings.communityNodes"));
              try {
                loading.value = true;
                await communityNodesStore.fetchInstalledPackages();
                const installedPackages = communityNodesStore.getInstalledPackages;
                const packagesToUpdate = installedPackages.filter(p => p.updateAvailable);
                telemetry.track("user viewed cnr settings page", {
                  num_of_packages_installed: installedPackages.length,
                  installed_packages: installedPackages.map(p => {
                    return {
                      package_name: p.packageName,
                      package_version: p.installedVersion,
                      package_nodes: p.installedNodes.map(node => `${node.name}-v${node.latestVersion}`),
                      is_update_available: p.updateAvailable !== void 0
                    };
                  }),
                  packages_to_update: packagesToUpdate.map(p => {
                    return {
                      package_name: p.packageName,
                      package_version_current: p.installedVersion,
                      package_version_available: p.updateAvailable
                    };
                  }),
                  number_of_updates_available: packagesToUpdate.length
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("settings.communityNodes.fetchError.title"), i18n.baseText("settings.communityNodes.fetchError.message"));
              } finally {
                loading.value = false;
              }
              try {
                await communityNodesStore.fetchAvailableCommunityPackageCount();
              } finally {
                loading.value = false;
              }
            });
            onBeforeUnmount(() => {
              pushStore.pushDisconnect();
              pushConnection.terminate();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.headingContainer)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes")), 1)]),
                _: 1
              }), unref(settingsStore).isUnverifiedPackagesEnabled && unref(communityNodesStore).getInstalledPackages.length > 0 && !loading.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                label: unref(i18n).baseText("settings.communityNodes.installModal.installButton.label"),
                size: "large",
                onClick: openInstallModal
              }, null, 8, ["label"])) : createCommentVNode("", true)], 2), loading.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.cardsContainer)
              }, [(openBlock(), createElementBlock(Fragment, null, renderList(2, n => {
                return createVNode(CommunityPackageCard_default, {
                  key: "index-" + n,
                  loading: true
                });
              }), 64))], 2)) : unref(communityNodesStore).getInstalledPackages.length === 0 ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.actionBoxContainer)
              }, [createVNode(unref(N8nActionBox_default), {
                heading: getEmptyStateTitle.value,
                description: getEmptyStateDescription.value,
                "button-text": getEmptyStateButtonText.value,
                "button-disabled": !unref(settingsStore).isUnverifiedPackagesEnabled,
                "callout-text": actionBoxConfig.value.calloutText,
                "callout-theme": actionBoxConfig.value.calloutTheme,
                "onClick:button": onClickEmptyStateButton
              }, null, 8, ["heading", "description", "button-text", "button-disabled", "callout-text", "callout-theme"])], 2)) : (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.cardsContainer)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(communityNodesStore).getInstalledPackages, communityPackage => {
                return openBlock(), createBlock(CommunityPackageCard_default, {
                  key: communityPackage.packageName,
                  "community-package": communityPackage
                }, null, 8, ["community-package"]);
              }), 128))], 2))], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/views/SettingsCommunityNodesView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_it0uc_123";
        headingContainer = "_headingContainer_it0uc_131";
        loadingContainer = "_loadingContainer_it0uc_136";
        actionBoxContainer = "_actionBoxContainer_it0uc_141";
        cardsContainer = "_cardsContainer_it0uc_145";
        SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          headingContainer,
          loadingContainer,
          actionBoxContainer,
          cardsContainer
        }; //#endregion
        //#region src/features/settings/communityNodes/views/SettingsCommunityNodesView.vue
        cssModules = {
          "$style": SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsCommunityNodesView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();