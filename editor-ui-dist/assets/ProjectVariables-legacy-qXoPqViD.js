;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-pg0njr0t.js", "./icon-legacy-Do9qTDxB.js", "./overlay-legacy-DU1OC2yK.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BleWEZt-.js", "./useTelemetry-legacy-BDcNi2-V.js", "./useToast-legacy-YkrI3Kyu.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-BOwjEkaj.js", "./merge-legacy-C4vVqZRQ.js", "./_baseOrderBy-legacy-B3XavLhF.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-Ds5JlDtt.js", "./useExternalHooks-legacy-CQQO1RoW.js", "./useStyles-legacy-E8NPEyeD.js", "./cloudPlan.store-legacy-Cic_gceP.js", "./useClipboard-legacy-CZn3Oiyx.js", "./folders.store-legacy-CmVv52H8.js", "./versions.store-legacy-DLDVjQ9s.js", "./usePageRedirectionHelper-legacy-btgVopTJ.js", "./ProjectIcon-legacy-D9sOKD3Q.js", "./EnterpriseEdition.ee-legacy-Dd-vcx3x.js", "./orderBy-legacy-te2NMMsp.js", "./ProjectSharing-legacy-CVpWCB9Q.js", "./insights.store-legacy-CBzew4u6.js", "./insights.constants-legacy-CQF1GF20.js", "./insights.utils-legacy-Dod909MV.js", "./readyToRun.store-legacy-CLm7Fpca.js", "./PageViewLayout-legacy-DaVsi9BM.js", "./ResourcesListLayout-legacy-BwitDUvh.js", "./ResourceFiltersDropdown-legacy-B9kk3-9P.js", "./ProjectHeader-legacy-Cfh7eE4_.js", "./smartDecimal-legacy-DBGZXJnQ.js", "./InsightsSummary-legacy-CRD0LRDq.js", "./pickBy-legacy-BTYCWit_.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, mergeProps, onMounted, Fragment, withCtx, openBlock, renderList, createTextVNode, createSlots, useTemplateRef, resolveDirective, normalizeClass, createBaseVNode, withDirectives, normalizeProps, useI18n, useAsyncState, N8nActionBox_default, N8nSelect_default, N8nButton_default, N8nOption_default, N8nText_default, N8nIcon_default, N8nInputLabel_default, N8nCheckbox_default, N8nBadge_default, N8nTooltip_default, N8nLink_default, __plugin_vue_export_helper_default, useRouter, useRoute, useMessage, useSourceControlStore, useProjectsStore, useUIStore, useSettingsStore, useDocumentTitle, useEnvironmentsStore, VARIABLE_MODAL_KEY, useUsersStore, useTelemetry, isVariableResource, useToast, MODAL_CONFIRM, getResourcePermissions, EnterpriseEditionFeature, useClipboard, usePageRedirectionHelper, useInsightsStore, useProjectPages, ResourcesListLayout_default, ProjectHeader_default, InsightsSummary_default, require_pickBy, __vite_style__, import_pickBy, VariablesUsageBadge_vue_vue_type_script_setup_true_lang_default, VariablesUsageBadge_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, ProjectVariables_vue_vue_type_script_setup_true_lang_default, optionContent, menuItemEmoji, globalOption, ProjectVariables_vue_vue_type_style_index_1_lang_module_default, cssModules, ProjectVariables_default;
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
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_srcLegacy007Js) {
        N8nActionBox_default = _srcLegacy007Js.Ct;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nCheckbox_default = _srcLegacy007Js.Y;
        N8nBadge_default = _srcLegacy007Js.at;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nLink_default = _srcLegacy007Js.ut;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useSourceControlStore = _useTelemetryLegacy00HJs.Dn;
        useProjectsStore = _useTelemetryLegacy00HJs.En;
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useDocumentTitle = _useTelemetryLegacy00HJs.Tn;
        useEnvironmentsStore = _useTelemetryLegacy00HJs.bn;
        VARIABLE_MODAL_KEY = _useTelemetryLegacy00HJs.ko;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        isVariableResource = _useTelemetryLegacy00HJs.yr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MODAL_CONFIRM = _constantsLegacy00TJs.$o;
        getResourcePermissions = _constantsLegacy00TJs.To;
        EnterpriseEditionFeature = _constantsLegacy00TJs.dc;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_useClipboardLegacy01xJs) {
        useClipboard = _useClipboardLegacy01xJs.t;
      }, function (_foldersStoreLegacy01DJs) {}, function (_versionsStoreLegacy01LJs) {}, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_ProjectIconLegacy02fJs) {}, function (_EnterpriseEditionEeLegacy02PJs) {}, function (_orderByLegacy02VJs) {}, function (_ProjectSharingLegacy02XJs) {}, function (_insightsStoreLegacy03dJs) {
        useInsightsStore = _insightsStoreLegacy03dJs.t;
      }, function (_insightsConstantsLegacy03fJs) {}, function (_insightsUtilsLegacy03hJs) {}, function (_readyToRunStoreLegacy04fJs) {
        useProjectPages = _readyToRunStoreLegacy04fJs.n;
      }, function (_PageViewLayoutLegacy04FJs) {}, function (_ResourcesListLayoutLegacy04PJs) {
        ResourcesListLayout_default = _ResourcesListLayoutLegacy04PJs.t;
      }, function (_ResourceFiltersDropdownLegacy04RJs) {}, function (_ProjectHeaderLegacy04TJs) {
        ProjectHeader_default = _ProjectHeaderLegacy04TJs.t;
      }, function (_smartDecimalLegacy04XJs) {}, function (_InsightsSummaryLegacy04ZJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04ZJs.t;
      }, function (_pickByLegacy05NJs) {
        require_pickBy = _pickByLegacy05NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.usageSyntax[data-v-b4930937] {\n  cursor: pointer;\n  background: var(--variables-usage--syntax--color--background);\n  color: var(--variables-usage--color--text);\n  font-family: var(--font-family--monospace);\n  font-size: var(--font-size--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.scope-badge[data-v-9bd8835c] {\n  text-transform: none;\n  display: flex;\n  align-items: center;\n  padding: 2px;\n}\n.action-buttons[data-v-9bd8835c] {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n[data-v-9bd8835c] .datatable {\n  white-space: nowrap;\n}\n[data-v-9bd8835c] .datatable table tr:hover .action-buttons {\n  opacity: 1;\n}\n[data-v-9bd8835c] .datatable table tr td:nth-child(2) {\n  white-space: normal;\n}\n@media screen and (max-width: 992px) {\n[data-v-9bd8835c] .datatable table tr th:nth-child(3),[data-v-9bd8835c] .datatable table tr td:nth-child(3) {\n    display: none;\n}\n}\n[data-v-9bd8835c] .datatable .variables-actions-column {\n  width: 170px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._optionContent_3qxvq_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._menuItemEmoji_3qxvq_129 {\n  font-size: var(--font-size--sm);\n  line-height: 1;\n}\n._globalOption_3qxvq_134 {\n  position: relative;\n  margin-bottom: var(--spacing--sm);\n  overflow: visible;\n}\n._globalOption_3qxvq_134::after {\n  content: \"\";\n  position: absolute;\n  bottom: calc(var(--spacing--sm) / -2);\n  left: var(--spacing--xs);\n  right: var(--spacing--xs);\n  height: 1px;\n  background-color: var(--color--foreground);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/environments.ee/components/VariablesUsageBadge.vue?vue&type=script&setup=true&lang.ts
        import_pickBy = /* @__PURE__ */__toESM(require_pickBy());
        VariablesUsageBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "VariablesUsageBadge",
          props: {
            name: {}
          },
          setup(__props) {
            const i18n = useI18n();
            const clipboard = useClipboard();
            const {
              showMessage
            } = useToast();
            const props = __props;
            const usage = computed(() => `$vars.${props.name}`);
            const handleClick = () => {
              clipboard.copy(usage.value);
              showMessage({
                title: i18n.baseText("variables.row.usage.copiedToClipboard"),
                type: "success"
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                placement: "top"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.usage.copyToClipboard")), 1)]),
                default: withCtx(() => [createBaseVNode("span", {
                  class: "usageSyntax",
                  onClick: handleClick
                }, toDisplayString(usage.value), 1)]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/settings/environments.ee/components/VariablesUsageBadge.vue
        VariablesUsageBadge_default = /* @__PURE__ */__plugin_vue_export_helper_default(VariablesUsageBadge_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-b4930937"]]); //#endregion
        //#region src/features/collaboration/projects/views/ProjectVariables.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "mb-s"
        };
        _hoisted_2 = {
          key: 0,
          class: "mb-s"
        };
        _hoisted_3 = {
          "data-test-id": "variables-row"
        };
        _hoisted_4 = {
          key: 0
        };
        _hoisted_5 = {
          key: 0
        };
        _hoisted_6 = {
          class: "scope-badge",
          style: {
            "display": "flex",
            "align-items": "center",
            "gap": "4px"
          }
        };
        _hoisted_7 = {
          key: 1,
          align: "right"
        };
        _hoisted_8 = {
          class: "action-buttons"
        };
        _hoisted_9 = {
          key: 0,
          class: "mt-xs"
        };
        ProjectVariables_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectVariables",
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
            const insightsStore = useInsightsStore();
            const overview = useProjectPages();
            const projectsStore = useProjectsStore();
            const layoutRef = useTemplateRef("layoutRef");
            const {
              showError,
              showMessage
            } = useToast();
            const projectId = route.params.projectId;
            const globalPermissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).variable);
            const projectPermissions = computed(() => getResourcePermissions(projectsStore.currentProject?.scopes).projectVariable);
            const {
              isLoading,
              execute
            } = useAsyncState(environmentsStore.fetchAllVariables, [], {
              immediate: true
            });
            const isFeatureEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]);
            const openCreateVariableModal = () => {
              uiStore.openModalWithData({
                name: VARIABLE_MODAL_KEY,
                data: {
                  mode: "new"
                }
              });
              telemetry.track("User clicked add variable button");
            };
            const openEditVariableModal = variable => {
              uiStore.openModalWithData({
                name: VARIABLE_MODAL_KEY,
                data: {
                  mode: "edit",
                  variable
                }
              });
            };
            const variables = computed(() => environmentsStore.variables.filter(v => !projectId || v.project?.id === projectId).map(variable => ({
              resourceType: "variable",
              id: variable.id,
              name: variable.key,
              key: variable.key,
              value: variable.value,
              project: variable.project
            })));
            const globalVariables = computed(() => environmentsStore.variables.filter(v => !v.project));
            const canCreateVariables = computed(() => isFeatureEnabled.value && (globalPermissions.value.create ?? projectPermissions.value.create));
            const columns = computed(() => {
              const cols = [{
                id: 0,
                path: "name",
                label: i18n.baseText("variables.table.key"),
                classes: ["variables-key-column"]
              }, {
                id: 1,
                path: "value",
                label: i18n.baseText("variables.table.value"),
                classes: ["variables-value-column"]
              }, {
                id: 2,
                path: "usage",
                label: i18n.baseText("variables.table.usage"),
                classes: ["variables-usage-column"]
              }];
              if (!projectId) cols.push({
                id: 3,
                path: "project",
                label: i18n.baseText("variables.table.scope"),
                classes: ["variables-scope-column"]
              });
              if (!isFeatureEnabled.value) return cols;
              return cols.concat({
                id: 4,
                path: "actions",
                label: "",
                classes: ["variables-actions-column"]
              });
            });
            const handleDeleteVariable = async variable => {
              try {
                if ((await message.confirm(i18n.baseText("variables.modals.deleteConfirm.message", {
                  interpolate: {
                    name: variable.key
                  }
                }), i18n.baseText("variables.modals.deleteConfirm.title"), {
                  confirmButtonText: i18n.baseText("variables.modals.deleteConfirm.confirmButton"),
                  cancelButtonText: i18n.baseText("variables.modals.deleteConfirm.cancelButton")
                })) !== "confirm") return;
                await environmentsStore.deleteVariable({
                  id: variable.id,
                  value: variable.value,
                  key: variable.key
                });
                showMessage({
                  title: i18n.baseText("variables.delete.successful.message", {
                    interpolate: {
                      variableName: variable.key
                    }
                  }),
                  type: "success"
                });
              } catch (error) {
                showError(error, i18n.baseText("variables.errors.delete"));
              }
            };
            const updateFilter = state => {
              router.replace({
                query: (0, import_pickBy.default)(state)
              });
            };
            const filters = ref({
              ...route.query,
              incomplete: route.query.incomplete?.toString() === "true",
              projectId: route.query.projectId?.toString() || ""
            });
            const onSearchUpdated = search => {
              updateFilter({
                ...filters.value,
                search
              });
            };
            const handleFilter = (resource, newFilters, matches) => {
              if (!isVariableResource(resource)) return false;
              const filtersToApply = newFilters;
              if (filtersToApply.incomplete) matches = matches && !resource.value;
              if (filtersToApply.projectId) if (filtersToApply.projectId === "global") matches = matches && !resource.project;else matches = matches && resource.project?.id === filtersToApply.projectId;
              return matches;
            };
            const nameSortFn = (a, b, direction) => {
              return direction === "asc" ? displayName(a).trim().localeCompare(displayName(b).trim()) : displayName(b).trim().localeCompare(displayName(a).trim());
            };
            const sortFns = {
              nameAsc: (a, b) => nameSortFn(a, b, "asc"),
              nameDesc: (a, b) => nameSortFn(a, b, "desc")
            };
            const projectOptions = computed(() => {
              const options = [{
                value: "global",
                label: i18n.baseText("variables.modal.scope.global"),
                icon: {
                  type: "icon",
                  value: "database"
                }
              }];
              options.push(...projectsStore.availableProjects.filter(project => project.type !== "personal").map(project => {
                const icon = project.icon ?? {
                  type: "icon",
                  value: "layer-group"
                };
                return {
                  value: project.id,
                  label: project.name ?? project.id,
                  icon
                };
              }));
              return options;
            });
            const selectedProjectIcon = computed(() => {
              return projectOptions.value.find(option => option.value === filters.value.projectId)?.icon ?? {
                type: "icon",
                value: "database"
              };
            });
            function goToUpgrade() {
              usePageRedirectionHelper().goToUpgrade("variables", "upgrade-variables");
            }
            function displayName(resource) {
              return resource.key;
            }
            sourceControlStore.$onAction(({
              name,
              after
            }) => {
              if (name === "pullWorkfolder" && after) after(() => {
                execute();
              });
            });
            const unavailableNoticeProps = computed(() => ({
              heading: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.title),
              description: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.description),
              buttonText: i18n.baseText(uiStore.contextBasedTranslationKeys.variables.unavailable.button),
              buttonType: "secondary",
              "onClick:button": goToUpgrade,
              "data-test-id": "unavailable-resources-list"
            }));
            onMounted(() => {
              useDocumentTitle().set(i18n.baseText("variables.heading"));
            });
            return (_ctx, _cache) => {
              const _directive_n8n_truncate = resolveDirective("n8n-truncate");
              return openBlock(), createBlock(ResourcesListLayout_default, {
                ref_key: "layoutRef",
                ref: layoutRef,
                filters: filters.value,
                "onUpdate:filters": [_cache[1] || (_cache[1] = $event => filters.value = $event), updateFilter],
                "resource-key": "variables",
                disabled: !isFeatureEnabled.value,
                resources: variables.value,
                "additional-filters-handler": handleFilter,
                shareable: false,
                "display-name": displayName,
                "sort-fns": sortFns,
                "sort-options": ["nameAsc", "nameDesc"],
                type: "datatable",
                "type-props": {
                  columns: columns.value
                },
                loading: unref(isLoading),
                "onUpdate:search": onSearchUpdated,
                "onClick:add": openCreateVariableModal
              }, createSlots({
                header: withCtx(() => [createVNode(ProjectHeader_default, {
                  "main-button": "variable"
                }, {
                  default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
                    key: 0,
                    loading: unref(insightsStore).weeklySummary.isLoading,
                    summary: unref(insightsStore).weeklySummary.state,
                    "time-range": "week"
                  }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
                  _: 1
                })]),
                filters: withCtx(({
                  setKeyValue
                }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("credentials.filters.status"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(unref(N8nCheckbox_default), {
                  label: "Value missing",
                  "data-test-id": "variable-filter-incomplete",
                  "model-value": filters.value.incomplete,
                  "onUpdate:modelValue": $event => setKeyValue("incomplete", $event)
                }, null, 8, ["model-value", "onUpdate:modelValue"])]), !unref(projectId) ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
                  modelValue: filters.value.projectId,
                  "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => filters.value.projectId = $event), $event => setKeyValue("projectId", $event)],
                  size: "large",
                  filterable: "",
                  "data-test-id": "variable-modal-scope-select"
                }, {
                  prefix: withCtx(() => [selectedProjectIcon.value?.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
                    key: 0,
                    class: normalizeClass(_ctx.$style.menuItemEmoji)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(selectedProjectIcon.value?.value), 1)]),
                    _: 1
                  }, 8, ["class"])) : selectedProjectIcon.value?.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
                    key: 1,
                    icon: selectedProjectIcon.value.value
                  }, null, 8, ["icon"])) : createCommentVNode("", true)]),
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(projectOptions.value, option => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: option.value || "global",
                      value: option.value,
                      label: option.label,
                      class: normalizeClass({
                        [_ctx.$style.globalOption]: option.value === "global"
                      })
                    }, {
                      default: withCtx(() => [createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.optionContent)
                      }, [option.icon && option.icon?.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
                        key: 0,
                        class: normalizeClass(_ctx.$style.menuItemEmoji)
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(option.icon.value), 1)]),
                        _: 2
                      }, 1032, ["class"])) : option.icon?.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
                        key: 1,
                        icon: option.icon.value
                      }, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2)]),
                      _: 2
                    }, 1032, ["value", "label", "class"]);
                  }), 128))]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])])) : createCommentVNode("", true)]),
                default: withCtx(({
                  data
                }) => [createBaseVNode("tr", _hoisted_3, [createBaseVNode("td", null, toDisplayString(data.key), 1), createBaseVNode("td", null, [data.value ? withDirectives((openBlock(), createElementBlock("span", _hoisted_4, null, 512)), [[_directive_n8n_truncate, data.value, "20"]]) : (openBlock(), createBlock(unref(N8nBadge_default), {
                  key: 1,
                  theme: "warning"
                }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode(" Value missing ")])),
                  _: 1
                }))]), createBaseVNode("td", null, [data.key ? (openBlock(), createBlock(VariablesUsageBadge_default, {
                  key: 0,
                  name: data.key
                }, null, 8, ["name"])) : createCommentVNode("", true)]), !unref(projectId) ? (openBlock(), createElementBlock("td", _hoisted_5, [createVNode(unref(N8nBadge_default), null, {
                  default: withCtx(() => [createBaseVNode("div", _hoisted_6, [data.project ? (openBlock(), createBlock(unref(N8nIcon_default), {
                    key: 0,
                    icon: "layers"
                  })) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(data.project?.name ?? unref(i18n).baseText("variables.table.scope.global")), 1)])]),
                  _: 2
                }, 1024)])) : createCommentVNode("", true), isFeatureEnabled.value ? (openBlock(), createElementBlock("td", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createVNode(unref(N8nTooltip_default), {
                  disabled: globalPermissions.value.update,
                  placement: "top"
                }, {
                  content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit.onlyRoleCanEdit")), 1)]),
                  default: withCtx(() => [createVNode(unref(N8nButton_default), {
                    "data-test-id": "variable-row-edit-button",
                    type: "tertiary",
                    class: "mr-xs",
                    disabled: !globalPermissions.value.update,
                    onClick: $event => openEditVariableModal(data)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.edit")), 1)]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])]),
                  _: 2
                }, 1032, ["disabled"]), createVNode(unref(N8nTooltip_default), {
                  disabled: globalPermissions.value.delete,
                  placement: "top"
                }, {
                  content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete.onlyRoleCanDelete")), 1)]),
                  default: withCtx(() => [createVNode(unref(N8nButton_default), {
                    "data-test-id": "variable-row-delete-button",
                    type: "tertiary",
                    disabled: !globalPermissions.value.delete,
                    onClick: $event => handleDeleteVariable(data)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("variables.row.button.delete")), 1)]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])]),
                  _: 2
                }, 1032, ["disabled"])])])) : createCommentVNode("", true)])]),
                postdata: withCtx(() => [unref(projectId) && globalVariables.value.length ? (openBlock(), createElementBlock("div", _hoisted_9, [unref(projectId) ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  size: "small"
                }, {
                  default: withCtx(() => [createVNode(unref(N8nLink_default), {
                    href: "/home/variables",
                    theme: "text",
                    size: "small"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(globalVariables.value.length) + " global variables ", 1)]),
                    _: 1
                  }), _cache[3] || (_cache[3] = createTextVNode(" available in this project "))]),
                  _: 1
                })) : createCommentVNode("", true)])) : createCommentVNode("", true)]),
                _: 2
              }, [!isFeatureEnabled.value ? {
                name: "preamble",
                fn: withCtx(() => [createVNode(unref(N8nActionBox_default), mergeProps({
                  class: "mb-m"
                }, unavailableNoticeProps.value), null, 16)]),
                key: "0"
              } : void 0, !isFeatureEnabled.value || isFeatureEnabled.value && !canCreateVariables.value ? {
                name: "empty",
                fn: withCtx(() => [!isFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nActionBox_default), normalizeProps(mergeProps({
                  key: 0
                }, unavailableNoticeProps.value)), null, 16)) : !canCreateVariables.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                  key: 1,
                  "data-test-id": "cannot-create-variables",
                  heading: unref(i18n).baseText("variables.empty.notAllowedToCreate.heading", {
                    interpolate: {
                      name: unref(usersStore).currentUser?.firstName ?? ""
                    }
                  }),
                  description: unref(i18n).baseText("variables.empty.notAllowedToCreate.description")
                }, null, 8, ["heading", "description"])) : createCommentVNode("", true)]),
                key: "1"
              } : void 0]), 1032, ["filters", "disabled", "resources", "type-props", "loading"]);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/views/ProjectVariables.vue?vue&type=style&index=1&lang.module.scss
        optionContent = "_optionContent_3qxvq_123";
        menuItemEmoji = "_menuItemEmoji_3qxvq_129";
        globalOption = "_globalOption_3qxvq_134";
        ProjectVariables_vue_vue_type_style_index_1_lang_module_default = {
          optionContent,
          menuItemEmoji,
          globalOption
        }; //#endregion
        //#region src/features/collaboration/projects/views/ProjectVariables.vue
        cssModules = {
          "$style": ProjectVariables_vue_vue_type_style_index_1_lang_module_default
        };
        _export("default", ProjectVariables_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectVariables_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-9bd8835c"]])); //#endregion
      }
    };
  });
})();