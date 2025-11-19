;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./roles.store-legacy-8cTG8Ztk.js"], function (_export, _context) {
    "use strict";

    var __toESM, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, withCtx, useCssModule, openBlock, createTextVNode, createBaseVNode, useI18n, N8nActionToggle_default, N8nActionBox_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nDataTableServer_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useMessage, useSettingsStore, useDocumentTitle, useTelemetry, useToast, MODAL_CONFIRM, VIEWS, require_dateformat, usePageRedirectionHelper, useRolesStore, __vite_style__, import_dateformat, _hoisted_1, ProjectRolesView_vue_vue_type_script_setup_true_lang_default, headerContainer, clickableRow, tallRow, ProjectRolesView_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectRolesView_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
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
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
        N8nActionBox_default = _srcLegacy007Js.Dt;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_rolesStoreLegacy02NJs) {
        useRolesStore = _rolesStoreLegacy02NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._headerContainer_106p4_2 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n._clickableRow_106p4_8 {\n\tcursor: pointer;\n}\n._tallRow_106p4_12 {\n\theight: 64px;\n}\n/*$vite$:1*/";
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
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.projectRoles")), 1)]),
                _: 1
              }), unref(settingsStore).isCustomRolesFeatureEnabled ? (openBlock(), createBlock(unref(N8nButton_default), {
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
        headerContainer = "_headerContainer_106p4_2";
        clickableRow = "_clickableRow_106p4_8";
        tallRow = "_tallRow_106p4_12";
        ProjectRolesView_vue_vue_type_style_index_0_lang_module_default = {
          headerContainer,
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