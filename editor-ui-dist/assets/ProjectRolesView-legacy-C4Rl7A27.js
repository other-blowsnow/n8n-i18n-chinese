;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-B7Y_hCM_.js", "./icon-legacy-BY20yo2X.js", "./overlay-legacy-CXMgVVsR.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-Bq4gN3bH.js", "./useTelemetry-legacy-CBjbIfKX.js", "./useToast-legacy-Bs0yTjbT.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-DVoQkFTS.js", "./merge-legacy-DGYepJ5X.js", "./_baseOrderBy-legacy-CowL7g45.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-aeZbWFlx.js", "./useExternalHooks-legacy-m8Ri2ypi.js", "./useStyles-legacy-E8NPEyeD.js", "./cloudPlan.store-legacy-C4eAilUn.js", "./versions.store-legacy-BVN2UFoo.js", "./usePageRedirectionHelper-legacy-CiePbo1_.js", "./roles.store-legacy-DLFOfnaP.js"], function (_export, _context) {
    "use strict";

    var __toESM, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, Fragment, withCtx, useCssModule, openBlock, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nActionBox_default, N8nButton_default, N8nText_default, N8nIcon_default, N8nActionToggle_default, N8nDataTableServer_default, N8nTag_default, N8nHeading_default, __plugin_vue_export_helper_default, useRouter, useMessage, useSettingsStore, useDocumentTitle, useTelemetry, useToast, MODAL_CONFIRM, VIEWS, require_dateformat, usePageRedirectionHelper, useRolesStore, __vite_style__, import_dateformat, _hoisted_1, ProjectRolesView_vue_vue_type_script_setup_true_lang_default, headerContainer, headerTitle, clickableRow, tallRow, ProjectRolesView_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectRolesView_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionBox_default = _srcLegacy007Js.Ct;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nActionToggle_default = _srcLegacy007Js.et;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nTag_default = _srcLegacy007Js.v;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useDocumentTitle = _useTelemetryLegacy00HJs.Tn;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MODAL_CONFIRM = _constantsLegacy00TJs.$o;
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {
        require_dateformat = _dateformatLegacy00$Js.t;
      }, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_versionsStoreLegacy01LJs) {}, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_rolesStoreLegacy02ZJs) {
        useRolesStore = _rolesStoreLegacy02ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._headerContainer_1yma8_2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n._headerTitle_1yma8_8 {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n}\n._clickableRow_1yma8_14 {\n\tcursor: pointer;\n}\n._tallRow_1yma8_18 {\n\theight: 64px;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/project-roles/ProjectRolesView.vue?vue&type=script&setup=true&lang.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        _hoisted_1 = {
          class: "pb-xl"
        };
        ProjectRolesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectRolesView",
          setup(__props) {
            const {
              showError,
              showMessage
            } = useToast();
            const rolesStore = useRolesStore();
            const router = useRouter();
            const message = useMessage();
            const i18n = useI18n();
            const $style = useCssModule();
            const settingsStore = useSettingsStore();
            const {
              goToUpgrade
            } = usePageRedirectionHelper();
            const telemetry = useTelemetry();
            onMounted(() => {
              useDocumentTitle().set(i18n.baseText("settings.projectRoles"));
            });
            const headers = ref([{
              title: i18n.baseText("projectRoles.sourceControl.table.name"),
              key: "displayName",
              width: 400,
              disableSort: true,
              resize: false
            }, {
              title: i18n.baseText("projectRoles.sourceControl.table.type"),
              key: "systemRole",
              disableSort: true,
              resize: false
            }, {
              title: i18n.baseText("projectRoles.sourceControl.table.assignedTo"),
              key: "usedByUsers",
              disableSort: true,
              align: "end",
              value: item => item.usedByUsers ?? 0,
              width: 75,
              resize: false
            }, {
              title: i18n.baseText("projectRoles.sourceControl.table.lastEdited"),
              key: "updatedAt",
              value: item => item.updatedAt && !item.systemRole ? (0, import_dateformat.default)(item.updatedAt, "d mmm, yyyy") : "—",
              disableSort: true,
              resize: false
            }, {
              title: "",
              key: "actions",
              value: () => "",
              width: 50,
              minWidth: 50,
              disableSort: true,
              align: "center",
              resize: false
            }]);
            async function deleteRole(item) {
              i18n.baseText("projectRoles.action.delete.text", {
                interpolate: {
                  roleName: item.displayName
                }
              });
              if ((await message.confirm(i18n.baseText("projectRoles.action.delete.text", {
                interpolate: {
                  roleName: item.displayName
                }
              }), i18n.baseText("projectRoles.action.delete.title", {
                interpolate: {
                  roleName: item.displayName
                }
              }), {
                type: "warning",
                confirmButtonText: i18n.baseText("projectRoles.action.delete"),
                cancelButtonText: i18n.baseText("projectRoles.action.cancel")
              })) !== "confirm") return;
              try {
                await rolesStore.deleteProjectRole(item.slug);
                const index = rolesStore.roles.project.findIndex(role => role.slug === item.slug);
                if (index !== -1) rolesStore.roles.project.splice(index, 1);
                showMessage({
                  title: i18n.baseText("projectRoles.action.delete.success"),
                  type: "success"
                });
              } catch (error) {
                showError(error, i18n.baseText("projectRoles.action.delete.error"));
                return;
              }
            }
            async function duplicateRole(item) {
              try {
                const displayName = i18n.baseText("projectRoles.action.duplicate.name", {
                  interpolate: {
                    roleName: item.displayName
                  }
                });
                const role = await rolesStore.createProjectRole({
                  displayName,
                  description: item.description ?? void 0,
                  roleType: "project",
                  scopes: item.scopes
                });
                rolesStore.roles.project.push(role);
                rolesStore.fetchRoles();
                telemetry.track("User duplicated role", {
                  role_id: item.slug,
                  role_name: item.displayName,
                  permissions: item.scopes
                });
                showMessage({
                  type: "success",
                  message: i18n.baseText("projectRoles.action.duplicate.success", {
                    interpolate: {
                      roleName: item.displayName,
                      roleDuplicateName: displayName
                    }
                  })
                });
                return role;
              } catch (error) {
                showError(error, i18n.baseText("projectRoles.action.duplicate.error"));
                return;
              }
            }
            const actions = {
              duplicate: duplicateRole,
              delete: deleteRole
            };
            function rowProps(row) {
              const className = [$style.tallRow];
              if (!row.systemRole) className.push($style.clickableRow);
              return {
                class: className
              };
            }
            function rowActions(item) {
              return [{
                label: i18n.baseText("projectRoles.action.duplicate"),
                value: "duplicate"
              }, {
                label: i18n.baseText("projectRoles.action.delete"),
                value: "delete",
                disabled: item.usedByUsers !== 0
              }];
            }
            function handleAction(action, item) {
              actions[action](item);
            }
            function handleRowClick(item) {
              if (item.systemRole) return;
              router.push({
                name: VIEWS.PROJECT_ROLE_SETTINGS,
                params: {
                  roleSlug: item.slug
                }
              });
            }
            function addRole() {
              telemetry.track("User clicked add role");
              router.push({
                name: VIEWS.PROJECT_NEW_ROLE
              });
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(["mb-xl", unref($style).headerContainer])
              }, [createBaseVNode("div", {
                class: normalizeClass(unref($style).headerTitle)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.projectRoles")), 1)]),
                _: 1
              }), createVNode(unref(N8nTag_default), {
                clickable: false,
                text: "Beta"
              })], 2), unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                type: "secondary",
                onClick: addRole
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.addRole")), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2), !unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 0,
                class: "mt-2xl mb-l",
                "button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
                description: "yes",
                onClick: _cache[0] || (_cache[0] = $event => unref(goToUpgrade)("custom-roles", "upgrade-custom-roles"))
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("projectRoles.manageRoles.paywall.title")), 1)]),
                description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.manageRoles.paywall.text")), 1)]),
                _: 1
              }, 8, ["button-text"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
                key: 1,
                items: unref(rolesStore).processedProjectRoles,
                headers: headers.value,
                "items-length": unref(rolesStore).processedProjectRoles.length,
                "items-per-page": unref(rolesStore).processedProjectRoles.length,
                "page-sizes": [unref(rolesStore).processedProjectRoles.length],
                "row-props": rowProps,
                "onClick:row": _cache[1] || (_cache[1] = (_event, {
                  item
                }) => handleRowClick(item))
              }, {
                [`item.displayName`]: withCtx(({
                  item
                }) => [createVNode(unref(N8nText_default), {
                  tag: "div",
                  class: "mb-4xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(item.displayName), 1)]),
                  _: 2
                }, 1024), createVNode(unref(N8nText_default), {
                  tag: "div",
                  size: "small",
                  color: "text-light"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
                  _: 2
                }, 1024)]),
                [`item.systemRole`]: withCtx(({
                  item
                }) => [item.systemRole ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "lock"
                }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("projectRoles.literal.system")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.literal.custom")), 1)], 64))]),
                [`item.actions`]: withCtx(({
                  item
                }) => [!item.systemRole ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
                  key: 0,
                  actions: rowActions(item),
                  onAction: $event => handleAction($event, item)
                }, null, 8, ["actions", "onAction"])) : createCommentVNode("", true)]),
                _: 2
              }, 1032, ["items", "headers", "items-length", "items-per-page", "page-sizes"]))]);
            };
          }
        }); //#endregion
        //#region src/features/project-roles/ProjectRolesView.vue?vue&type=style&index=0&lang.module.css
        headerContainer = "_headerContainer_1yma8_2";
        headerTitle = "_headerTitle_1yma8_8";
        clickableRow = "_clickableRow_1yma8_14";
        tallRow = "_tallRow_1yma8_18";
        ProjectRolesView_vue_vue_type_style_index_0_lang_module_default = {
          headerContainer,
          headerTitle,
          clickableRow,
          tallRow
        }; //#endregion
        //#region src/features/project-roles/ProjectRolesView.vue
        cssModules = {
          "$style": ProjectRolesView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ProjectRolesView_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectRolesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();