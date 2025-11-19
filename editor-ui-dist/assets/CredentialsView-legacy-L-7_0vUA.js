;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./folders.store-legacy-C8VGYd29.js", "./externalSecrets.ee.store-legacy-DTgMWJUD.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./ProjectCardBadge-legacy-04gTRiWs.js", "./CredentialIcon-legacy-73ltKnan.js", "./EnterpriseEdition.ee-legacy-Dc4zPsd3.js", "./TimeAgo-legacy-DZ56LCYg.js", "./orderBy-legacy-CdPMW7_h.js", "./ProjectSharing-legacy-whwJ1PEb.js", "./insights.store-legacy-ExCnA8Kt.js", "./insights.constants-legacy-D5Y8YhR_.js", "./insights.utils-legacy-BGFKnbE7.js", "./readyToRunWorkflowsV2.store-legacy-C5SMFEOl.js", "./PageViewLayout-legacy-B1As2gDz.js", "./EmptySharedSectionActionBox-legacy-C2fFzate.js", "./ResourcesListLayout-legacy-B1Q_UccN.js", "./ProjectHeader-legacy-Bnsaa6ZB.js", "./smartDecimal-legacy-BeOdMR2z.js", "./InsightsSummary-legacy-CH2vq0-3.js", "./pickBy-legacy-BO2mWRTi.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, vShow, createBaseVNode, withDirectives, useI18n, N8nActionToggle_default, N8nActionBox_default, N8nOption_default, N8nText_default, N8nCheckbox_default, N8nSelect_default, N8nCard_default, N8nInputLabel_default, N8nBadge_default, __plugin_vue_export_helper_default, useRouter, useRoute, useMessage, useSettingsStore, useSourceControlStore, useProjectsStore, CREDENTIAL_SELECT_MODAL_KEY, useCredentialsStore, ResourceType, listenForModalChanges, useUIStore, useDocumentTitle, CREDENTIAL_EDIT_MODAL_KEY, PROJECT_MOVE_RESOURCE_MODAL, useEnvironmentsStore, useUsersStore, isCredentialsResource, useNodeTypesStore, useTelemetry, EnterpriseEditionFeature, MODAL_CONFIRM, getResourcePermissions, VIEWS, CREDENTIAL_EMPTY_VALUE, require_dateformat, useExternalSecretsStore, ProjectCardBadge_default, CredentialIcon_default, TimeAgo_default, useInsightsStore, useProjectPages, EmptySharedSectionActionBox_default, ResourcesListLayout_default, ProjectHeader_default, InsightsSummary_default, require_pickBy, __vite_style__, import_dateformat, _hoisted_1$1, CredentialCard_vue_vue_type_script_setup_true_lang_default, cardLink, cardHeading, cardDescription, cardActions, cardBadge, CredentialCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, CredentialCard_default, import_pickBy, _hoisted_1, _hoisted_2, CredentialsView_vue_vue_type_script_setup_true_lang_default, sidebarContainer, CredentialsView_vue_vue_type_style_index_0_lang_module_default, cssModules, CredentialsView_default;
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
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
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
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nCheckbox_default = _srcLegacy007Js.J;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nCard_default = _srcLegacy007Js.X;
        N8nInputLabel_default = _srcLegacy007Js.Y;
        N8nBadge_default = _srcLegacy007Js.it;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        CREDENTIAL_SELECT_MODAL_KEY = _useTelemetryLegacy00FJs.Eo;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        ResourceType = _useTelemetryLegacy00FJs.Ir;
        listenForModalChanges = _useTelemetryLegacy00FJs.Mi;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        CREDENTIAL_EDIT_MODAL_KEY = _useTelemetryLegacy00FJs.To;
        PROJECT_MOVE_RESOURCE_MODAL = _useTelemetryLegacy00FJs.Wi;
        useEnvironmentsStore = _useTelemetryLegacy00FJs.bn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        isCredentialsResource = _useTelemetryLegacy00FJs.ir;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        getResourcePermissions = _constantsLegacy00NJs._r;
        VIEWS = _constantsLegacy00NJs.mo;
        CREDENTIAL_EMPTY_VALUE = _constantsLegacy00NJs.ua;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_foldersStoreLegacy01tJs) {}, function (_externalSecretsEeStoreLegacy01ZJs) {
        useExternalSecretsStore = _externalSecretsEeStoreLegacy01ZJs.t;
      }, function (_ProjectIconLegacy025Js) {}, function (_ProjectCardBadgeLegacy027Js) {
        ProjectCardBadge_default = _ProjectCardBadgeLegacy027Js.t;
      }, function (_CredentialIconLegacy02bJs) {
        CredentialIcon_default = _CredentialIconLegacy02bJs.t;
      }, function (_EnterpriseEditionEeLegacy02DJs) {}, function (_TimeAgoLegacy02HJs) {
        TimeAgo_default = _TimeAgoLegacy02HJs.t;
      }, function (_orderByLegacy02JJs) {}, function (_ProjectSharingLegacy02LJs) {}, function (_insightsStoreLegacy031Js) {
        useInsightsStore = _insightsStoreLegacy031Js.t;
      }, function (_insightsConstantsLegacy033Js) {}, function (_insightsUtilsLegacy035Js) {}, function (_readyToRunWorkflowsV2StoreLegacy03XJs) {
        useProjectPages = _readyToRunWorkflowsV2StoreLegacy03XJs.n;
      }, function (_PageViewLayoutLegacy04jJs) {}, function (_EmptySharedSectionActionBoxLegacy04rJs) {
        EmptySharedSectionActionBox_default = _EmptySharedSectionActionBoxLegacy04rJs.t;
      }, function (_ResourcesListLayoutLegacy04tJs) {
        ResourcesListLayout_default = _ResourcesListLayoutLegacy04tJs.t;
      }, function (_ProjectHeaderLegacy04vJs) {
        ProjectHeader_default = _ProjectHeaderLegacy04vJs.t;
      }, function (_smartDecimalLegacy04zJs) {}, function (_InsightsSummaryLegacy04BJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04BJs.t;
      }, function (_pickByLegacy05bJs) {
        require_pickBy = _pickByLegacy05bJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._cardLink_1g76h_123 {\n  --card--padding: 0 0 0 var(--spacing--sm);\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n  align-items: stretch;\n}\n._cardLink_1g76h_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._cardHeading_1g76h_133 {\n  font-size: var(--font-size--sm);\n  padding: var(--spacing--sm) 0 0;\n}\n._cardDescription_1g76h_138 {\n  min-height: 19px;\n  display: flex;\n  align-items: center;\n  padding: 0 0 var(--spacing--sm);\n}\n._cardActions_1g76h_145 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  padding: 0 var(--spacing--sm) 0 0;\n  cursor: default;\n}\n@media screen and (max-width: 991px) {\n._cardLink_1g76h_123 {\n    --card--padding: 0 var(--spacing--sm) var(--spacing--sm);\n    --card--append--width: 100%;\n    flex-wrap: wrap;\n}\n._cardActions_1g76h_145 {\n    width: 100%;\n    padding: 0;\n}\n._cardBadge_1g76h_165 {\n    margin-right: auto;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._type-input_105ey_123 {\n  --select--dropdown--max-width: 265px;\n}\n._sidebarContainer_105ey_127 ul {\n  padding: 0 !important;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/credentials/components/CredentialCard.vue?vue&type=script&setup=true&lang.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _hoisted_1$1 = {
          key: 0
        };
        CredentialCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialCard",
          props: {
            data: {},
            readOnly: {
              type: Boolean,
              default: false
            },
            needsSetup: {
              type: Boolean,
              default: false
            }
          },
          emits: ["click"],
          setup(__props, {
            emit: __emit
          }) {
            const CREDENTIAL_LIST_ITEM_ACTIONS = {
              OPEN: "open",
              DELETE: "delete",
              MOVE: "move"
            };
            const emit = __emit;
            const props = __props;
            const locale = useI18n();
            const message = useMessage();
            const uiStore = useUIStore();
            const credentialsStore = useCredentialsStore();
            const projectsStore = useProjectsStore();
            const resourceTypeLabel = computed(() => locale.baseText("generic.credential").toLowerCase());
            const credentialType = computed(() => credentialsStore.getCredentialTypeByName(props.data.type ?? ""));
            const credentialPermissions = computed(() => getResourcePermissions(props.data.scopes).credential);
            const actions = computed(() => {
              const items = [{
                label: locale.baseText("credentials.item.open"),
                value: CREDENTIAL_LIST_ITEM_ACTIONS.OPEN
              }];
              if (credentialPermissions.value.delete) items.push({
                label: locale.baseText("credentials.item.delete"),
                value: CREDENTIAL_LIST_ITEM_ACTIONS.DELETE
              });
              if (credentialPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) items.push({
                label: locale.baseText("credentials.item.move"),
                value: CREDENTIAL_LIST_ITEM_ACTIONS.MOVE
              });
              return items;
            });
            const formattedCreatedAtDate = computed(() => {
              const currentYear = (/* @__PURE__ */new Date()).getFullYear().toString();
              return (0, import_dateformat.default)(props.data.createdAt, `d mmmm${String(props.data.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
            });
            function onClick() {
              emit("click", props.data.id);
            }
            async function onAction(action) {
              switch (action) {
                case CREDENTIAL_LIST_ITEM_ACTIONS.OPEN:
                  onClick();
                  break;
                case CREDENTIAL_LIST_ITEM_ACTIONS.DELETE:
                  await deleteResource();
                  break;
                case CREDENTIAL_LIST_ITEM_ACTIONS.MOVE:
                  moveResource();
                  break;
              }
            }
            async function deleteResource() {
              if ((await message.confirm(locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.message", {
                interpolate: {
                  savedCredentialName: props.data.name
                }
              }), locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.headline"), {
                confirmButtonText: locale.baseText("credentialEdit.credentialEdit.confirmMessage.deleteCredential.confirmButtonText")
              })) === "confirm") await credentialsStore.deleteCredential({
                id: props.data.id
              });
            }
            function moveResource() {
              uiStore.openModalWithData({
                name: PROJECT_MOVE_RESOURCE_MODAL,
                data: {
                  resource: props.data,
                  resourceType: ResourceType.Credential,
                  resourceTypeLabel: resourceTypeLabel.value
                }
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCard_default), {
                class: normalizeClass(_ctx.$style.cardLink),
                onClick: withModifiers(onClick, ["stop"])
              }, {
                prepend: withCtx(() => [createVNode(CredentialIcon_default, {
                  "credential-type-name": credentialType.value?.name ?? ""
                }, null, 8, ["credential-type-name"])]),
                header: withCtx(() => [createVNode(unref(N8nText_default), {
                  tag: "h2",
                  bold: "",
                  class: normalizeClass(_ctx.$style.cardHeading)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.data.name) + " ", 1), _ctx.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 0,
                    class: "ml-3xs",
                    theme: "tertiary",
                    bold: ""
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.readonly")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true), _ctx.needsSetup ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 1,
                    class: "ml-3xs",
                    theme: "warning"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.needsSetup")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["class"])]),
                append: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardActions),
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, [createVNode(ProjectCardBadge_default, {
                  class: normalizeClass(_ctx.$style.cardBadge),
                  resource: _ctx.data,
                  "resource-type": unref(ResourceType).Credential,
                  "resource-type-label": resourceTypeLabel.value,
                  "personal-project": unref(projectsStore).personalProject,
                  "show-badge-border": false
                }, null, 8, ["class", "resource", "resource-type", "resource-type-label", "personal-project"]), createVNode(unref(N8nActionToggle_default), {
                  "data-test-id": "credential-card-actions",
                  actions: actions.value,
                  theme: "dark",
                  onAction
                }, null, 8, ["actions"])], 2)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardDescription)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "small"
                }, {
                  default: withCtx(() => [credentialType.value ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(credentialType.value.displayName) + " | ", 1)) : createCommentVNode("", true), withDirectives(createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(locale).baseText("credentials.item.updated")) + " ", 1), createVNode(TimeAgo_default, {
                    date: _ctx.data.updatedAt
                  }, null, 8, ["date"]), _cache[1] || (_cache[1] = createTextVNode(" | "))], 512), [[vShow, _ctx.data]]), withDirectives(createBaseVNode("span", null, toDisplayString(unref(locale).baseText("credentials.item.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 513), [[vShow, _ctx.data]])]),
                  _: 1
                })], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/credentials/components/CredentialCard.vue?vue&type=style&index=0&lang.module.scss
        cardLink = "_cardLink_1g76h_123";
        cardHeading = "_cardHeading_1g76h_133";
        cardDescription = "_cardDescription_1g76h_138";
        cardActions = "_cardActions_1g76h_145";
        cardBadge = "_cardBadge_1g76h_165";
        CredentialCard_vue_vue_type_style_index_0_lang_module_default = {
          cardLink,
          cardHeading,
          cardDescription,
          cardActions,
          cardBadge
        }; //#endregion
        //#region src/features/credentials/components/CredentialCard.vue
        cssModules$1 = {
          "$style": CredentialCard_vue_vue_type_style_index_0_lang_module_default
        };
        CredentialCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/credentials/views/CredentialsView.vue?vue&type=script&setup=true&lang.ts
        import_pickBy = /* @__PURE__ */__toESM(require_pickBy());
        _hoisted_1 = {
          class: "mb-s"
        };
        _hoisted_2 = {
          class: "mb-s"
        };
        CredentialsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CredentialsView",
          props: {
            credentialId: {}
          },
          setup(__props) {
            const props = __props;
            const credentialsStore = useCredentialsStore();
            const nodeTypesStore = useNodeTypesStore();
            const uiStore = useUIStore();
            const sourceControlStore = useSourceControlStore();
            const externalSecretsStore = useExternalSecretsStore();
            const projectsStore = useProjectsStore();
            const usersStore = useUsersStore();
            const insightsStore = useInsightsStore();
            const documentTitle = useDocumentTitle();
            const route = useRoute();
            const router = useRouter();
            const telemetry = useTelemetry();
            const i18n = useI18n();
            const overview = useProjectPages();
            const updateFilter = state => {
              router.replace({
                query: (0, import_pickBy.default)(state)
              });
            };
            const onSearchUpdated = search => {
              updateFilter({
                ...filters.value,
                search
              });
            };
            const filters = ref({
              ...route.query,
              setupNeeded: route.query.setupNeeded?.toString() === "true"
            });
            const loading = ref(false);
            const needsSetup = data => {
              const dataObject = data;
              if (!dataObject) return false;
              if (Object.keys(dataObject).length === 0) return true;
              return Object.values(dataObject).every(value => !value || value === "__n8n_EMPTY_VALUE_7b1af746-3729-4c60-9b9b-e08eb29e58da");
            };
            const allCredentials = computed(() => credentialsStore.allCredentials.map(credential => ({
              resourceType: "credential",
              id: credential.id,
              name: credential.name,
              value: "",
              updatedAt: credential.updatedAt,
              createdAt: credential.createdAt,
              homeProject: credential.homeProject,
              scopes: credential.scopes,
              sharedWithProjects: credential.sharedWithProjects,
              readOnly: !getResourcePermissions(credential.scopes).credential.update,
              needsSetup: needsSetup(credential.data),
              type: credential.type
            })));
            const allCredentialTypes = computed(() => credentialsStore.allCredentialTypes);
            const credentialTypesById = computed(() => credentialsStore.credentialTypesById);
            const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
            const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes ?? projectsStore.personalProject?.scopes));
            const personalProject = computed(() => {
              return projectsStore.personalProject;
            });
            const setRouteCredentialId = credentialId => {
              router.replace({
                params: {
                  credentialId
                },
                query: route.query
              });
            };
            const addCredential = () => {
              setRouteCredentialId("create");
              telemetry.track("User clicked add cred button", {
                source: "Creds list"
              });
            };
            listenForModalChanges({
              store: uiStore,
              onModalClosed(modalName) {
                if (["selectCredential", "editCredential"].includes(modalName)) router.replace({
                  params: {
                    credentialId: ""
                  },
                  query: route.query
                });
              }
            });
            const onFilter = (resource, newFilters, matches) => {
              if (!isCredentialsResource(resource)) return false;
              const filtersToApply = newFilters;
              if (filtersToApply.type && filtersToApply.type.length > 0) matches = matches && filtersToApply.type.includes(resource.type);
              if (filtersToApply.search) {
                const searchString = filtersToApply.search.toLowerCase();
                matches = matches || credentialTypesById.value[resource.type] && credentialTypesById.value[resource.type].displayName.toLowerCase().includes(searchString);
              }
              if (filtersToApply.setupNeeded) matches = matches && resource.needsSetup;
              return matches;
            };
            const maybeCreateCredential = () => {
              if (props.credentialId === "create") if (projectPermissions.value.credential.create) uiStore.openModal(CREDENTIAL_SELECT_MODAL_KEY);else router.replace({
                name: VIEWS.HOMEPAGE
              });
            };
            const maybeEditCredential = async () => {
              if (!!props.credentialId && props.credentialId !== "create") {
                const credential = credentialsStore.getCredentialById(props.credentialId);
                const credentialPermissions = getResourcePermissions(credential?.scopes).credential;
                if (!credential) return await router.replace({
                  name: VIEWS.ENTITY_NOT_FOUND,
                  params: {
                    entityType: "credential"
                  }
                });
                if (credentialPermissions.update || credentialPermissions.read) {
                  uiStore.openExistingCredential(props.credentialId);
                  return;
                }
                return await router.replace({
                  name: VIEWS.ENTITY_UNAUTHORIZED,
                  params: {
                    entityType: "credential"
                  }
                });
              }
            };
            const initialize = async () => {
              loading.value = true;
              const isVarsEnabled = useSettingsStore().isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables];
              const loadPromises = [credentialsStore.fetchAllCredentials(route?.params?.projectId, true, overview.isSharedSubPage), credentialsStore.fetchCredentialTypes(false), externalSecretsStore.fetchAllSecrets(), nodeTypesStore.loadNodeTypesIfNotLoaded(), isVarsEnabled ? useEnvironmentsStore().fetchAllVariables() : Promise.resolve()];
              await Promise.all(loadPromises);
              maybeCreateCredential();
              await maybeEditCredential();
              loading.value = false;
            };
            credentialsStore.$onAction(({
              name,
              after
            }) => {
              if (name === "createNewCredential") after(() => {
                credentialsStore.fetchAllCredentials(route?.params?.projectId);
              });
            });
            sourceControlStore.$onAction(({
              name,
              after
            }) => {
              if (name !== "pullWorkfolder") return;
              after(() => {
                initialize();
              });
            });
            watch(() => route?.params?.projectId, initialize);
            watch(() => props.credentialId, () => {
              maybeCreateCredential();
              maybeEditCredential();
            });
            onMounted(() => {
              documentTitle.set(i18n.baseText("credentials.heading"));
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(ResourcesListLayout_default, {
                ref: "layout",
                filters: filters.value,
                "onUpdate:filters": [_cache[0] || (_cache[0] = $event => filters.value = $event), updateFilter],
                "resource-key": "credentials",
                resources: allCredentials.value,
                initialize,
                "additional-filters-handler": onFilter,
                "type-props": {
                  itemSize: 77
                },
                loading: loading.value,
                disabled: readOnlyEnv.value || !projectPermissions.value.credential.create,
                "onUpdate:search": onSearchUpdated
              }, {
                header: withCtx(() => [createVNode(ProjectHeader_default, {
                  "main-button": "credential"
                }, {
                  default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
                    key: 0,
                    loading: unref(insightsStore).weeklySummary.isLoading,
                    summary: unref(insightsStore).weeklySummary.state,
                    "time-range": "week"
                  }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
                  _: 1
                })]),
                default: withCtx(({
                  data
                }) => [createVNode(CredentialCard_default, {
                  "data-test-id": "resources-list-item",
                  class: "mb-2xs",
                  data,
                  "read-only": data.readOnly,
                  "needs-setup": data.needsSetup,
                  onClick: setRouteCredentialId
                }, null, 8, ["data", "read-only", "needs-setup"])]),
                filters: withCtx(({
                  setKeyValue
                }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("credentials.filters.type"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
                  ref: "typeInput",
                  "model-value": filters.value.type,
                  size: "medium",
                  multiple: "",
                  filterable: "",
                  class: normalizeClass(_ctx.$style["type-input"]),
                  "onUpdate:modelValue": $event => setKeyValue("type", $event)
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(allCredentialTypes.value, credentialType => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: credentialType.name,
                      value: credentialType.name,
                      label: credentialType.displayName
                    }, null, 8, ["value", "label"]);
                  }), 128))]),
                  _: 2
                }, 1032, ["model-value", "class", "onUpdate:modelValue"])]), createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("credentials.filters.status"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(unref(N8nCheckbox_default), {
                  label: unref(i18n).baseText("credentials.filters.setup"),
                  "data-test-id": "credential-filter-setup-needed",
                  "model-value": filters.value.setupNeeded,
                  "onUpdate:modelValue": $event => setKeyValue("setupNeeded", $event)
                }, null, 8, ["label", "model-value", "onUpdate:modelValue"])])]),
                empty: withCtx(() => [unref(overview).isSharedSubPage && personalProject.value ? (openBlock(), createBlock(EmptySharedSectionActionBox_default, {
                  key: 0,
                  "personal-project": personalProject.value,
                  "resource-type": "credentials"
                }, null, 8, ["personal-project"])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
                  key: 1,
                  "data-test-id": "empty-resources-list",
                  emoji: "👋",
                  heading: unref(i18n).baseText(unref(usersStore).currentUser?.firstName ? "credentials.empty.heading" : "credentials.empty.heading.userNotSetup", {
                    interpolate: {
                      name: unref(usersStore).currentUser?.firstName ?? ""
                    }
                  }),
                  description: unref(i18n).baseText("credentials.empty.description"),
                  "button-text": unref(i18n).baseText("credentials.empty.button"),
                  "button-type": "secondary",
                  "button-disabled": readOnlyEnv.value || !projectPermissions.value.credential.create,
                  "button-icon": readOnlyEnv.value || !projectPermissions.value.credential.create ? "lock" : void 0,
                  "onClick:button": addCredential
                }, {
                  disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(readOnlyEnv.value ? unref(i18n).baseText("readOnlyEnv.cantAdd.credential") : unref(i18n).baseText("credentials.empty.button.disabled.tooltip")), 1)]),
                  _: 1
                }, 8, ["heading", "description", "button-text", "button-disabled", "button-icon"]))]),
                _: 1
              }, 8, ["filters", "resources", "loading", "disabled"]);
            };
          }
        }); //#endregion
        //#region src/features/credentials/views/CredentialsView.vue?vue&type=style&index=0&lang.module.scss
        sidebarContainer = "_sidebarContainer_105ey_127";
        CredentialsView_vue_vue_type_style_index_0_lang_module_default = {
          "type-input": "_type-input_105ey_123",
          sidebarContainer
        }; //#endregion
        //#region src/features/credentials/views/CredentialsView.vue
        cssModules = {
          "$style": CredentialsView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", CredentialsView_default = /* @__PURE__ */__plugin_vue_export_helper_default(CredentialsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();