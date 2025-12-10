;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./src-legacy-CT0lqlSJ.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy--yD2a8cz.js", "./icon-legacy-r8SehkIr.js", "./overlay-legacy-D_orOv5T.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-D7C50D7l.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./useToast-legacy-PRNOn8i6.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./useExternalHooks-legacy-CJTR8c_S.js", "./useStyles-legacy-E8NPEyeD.js", "./roles.store-legacy-tjv4QNEE.js"], function (_export, _context) {
    "use strict";

    var __toESM, toRaw, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, Fragment, withCtx, openBlock, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, useAsyncState, N8nButton_default, N8nFormInput_default, N8nText_default, N8nTooltip_default, N8nLoading_default, N8nHeading_default, __plugin_vue_export_helper_default, useRouter, useMessage, require_sortBy, useTelemetry, useToast, MODAL_CONFIRM, VIEWS, require_isEqual, useRolesStore, __vite_style__, import_isEqual, import_sortBy, _hoisted_1, _hoisted_2, _hoisted_3, ProjectRoleView_vue_vue_type_script_setup_true_lang_default, container, cardContainer, card, cardTitle, backButton, headerContainer, formContainer, presetsContainer, checkbox, ProjectRoleView_vue_vue_type_style_index_0_lang_module_default, cssModules, ProjectRoleView_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        toRaw = _vueRuntimeEsmBundlerLegacy003Js.Bt;
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nFormInput_default = _srcLegacy007Js.V;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        require_sortBy = _useTelemetryLegacy00HJs.Lt;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MODAL_CONFIRM = _constantsLegacy00TJs.$o;
        VIEWS = _constantsLegacy00TJs.Po;
        require_isEqual = _constantsLegacy00TJs.ho;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_rolesStoreLegacy02ZJs) {
        useRolesStore = _rolesStoreLegacy02ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._container_14r2u_2 {\n\tmax-width: 700px;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n._cardContainer_14r2u_9 {\n\tpadding: 8px 16px;\n\tborder-radius: 4px;\n\tborder: var(--border);\n\tbackground-color: var(--color--background--light-3);\n.el-skeleton__p {\n\t\tmargin-bottom: 8px;\n\t\tmargin-top: 0;\n}\n}\n._card_14r2u_9 {\n\tdisplay: flex;\n}\n._card_14r2u_9:not(:last-child) {\n\tborder-bottom: var(--border);\n}\n._cardTitle_14r2u_28 {\n\twidth: 133px;\n}\n._backButton_14r2u_32 {\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 10px;\n}\n._headerContainer_14r2u_38 {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n._formContainer_14r2u_44 {\n\tmax-width: 415px;\n}\n._presetsContainer_14r2u_48 {\n\tdisplay: flex;\n\tgap: 8px;\n}\n._checkbox_14r2u_53 {\n\tdisplay: inline-flex !important;\n\tmargin-bottom: 0 !important;\nlabel {\n\t\tpadding-bottom: 0 !important;\n}\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/project-roles/ProjectRoleView.vue?vue&type=script&setup=true&lang.ts
        import_isEqual = /* @__PURE__ */__toESM(require_isEqual());
        import_sortBy = /* @__PURE__ */__toESM(require_sortBy());
        _hoisted_1 = {
          key: 0
        };
        _hoisted_2 = {
          style: {
            "flex": "1"
          }
        };
        _hoisted_3 = {
          key: 0,
          class: "mt-xl"
        };
        ProjectRoleView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectRoleView",
          props: {
            roleSlug: {}
          },
          setup(__props) {
            const rolesStore = useRolesStore();
            const router = useRouter();
            const {
              showError,
              showMessage
            } = useToast();
            const i18n = useI18n();
            const message = useMessage();
            const telemetry = useTelemetry();
            const props = __props;
            const defaultForm = () => ({
              displayName: "",
              description: "",
              scopes: structuredClone(toRaw(rolesStore.processedProjectRoles.find(role => role.slug === "project:viewer")?.scopes || []))
            });
            const initialState = ref();
            const {
              state: form,
              isLoading
            } = useAsyncState(async () => {
              if (!props.roleSlug) return defaultForm();
              try {
                const role = await rolesStore.fetchRoleBySlug({
                  slug: props.roleSlug
                });
                initialState.value = structuredClone(role);
                return {
                  displayName: role.displayName,
                  description: role.description,
                  scopes: role.scopes
                };
              } catch (error) {
                showError(error, "Error fetching role");
                return defaultForm();
              }
            }, defaultForm(), {
              shallow: false
            });
            const hasUnsavedChanges = computed(() => {
              if (!initialState.value) return false;
              if (!(0, import_isEqual.default)(initialState.value.displayName, form.value.displayName)) return true;
              if (!(0, import_isEqual.default)(initialState.value.description ?? null, form.value.description || null)) return true;
              if (!(0, import_isEqual.default)((0, import_sortBy.default)(initialState.value.scopes), (0, import_sortBy.default)(form.value.scopes))) return true;
              return false;
            });
            function resetForm(payload) {
              form.value = payload ? {
                displayName: payload.displayName,
                description: payload.description,
                scopes: payload.scopes
              } : defaultForm();
            }
            const project = ["read", "update", "delete"].map(action => `project:${action}`);
            const folder = ["read", "update", "create", "move", "delete"].map(action => `folder:${action}`);
            const workflow = ["read", "update", "create", "move", "delete"].map(action => `workflow:${action}`);
            const credential = ["read", "update", "create", "share", "move", "delete"].map(action => `credential:${action}`);
            const sourceControl = ["push"].map(action => `sourceControl:${action}`);
            const dataTable = ["read", "readRow", "update", "writeRow", "create", "delete"].map(action => `dataTable:${action}`);
            const projectVariable = ["read", "update", "create", "delete"].map(action => `projectVariable:${action}`);
            const scopeTypes = ["project", "folder", "workflow", "credential", "dataTable", "projectVariable", "sourceControl"];
            const scopes = {
              project,
              folder,
              workflow,
              credential,
              sourceControl,
              dataTable,
              projectVariable
            };
            function toggleScope(scope) {
              const index = form.value.scopes.indexOf(scope);
              if (index !== -1) form.value.scopes.splice(index, 1);else form.value.scopes.push(scope);
              if (scope.startsWith("dataTable:") && scope.endsWith(":read")) {
                toggleScope(scope.replace(":read", ":listProject"));
                return;
              }
              if (scope.endsWith(":read")) toggleScope(scope.replace(":read", ":list"));
              if (scope === "workflow:update") toggleScope("workflow:execute");
            }
            async function createProjectRole() {
              try {
                const role = await rolesStore.createProjectRole({
                  ...form.value,
                  description: form.value.description ?? void 0,
                  roleType: "project"
                });
                rolesStore.fetchRoles();
                telemetry.track("User successfully created new role", {
                  role_id: role.slug,
                  role_name: role.displayName,
                  permissions: role.scopes
                });
                router.replace({
                  name: VIEWS.PROJECT_ROLE_SETTINGS,
                  params: {
                    roleSlug: role.slug
                  }
                });
                showMessage({
                  type: "success",
                  message: i18n.baseText("projectRoles.action.create.success")
                });
                initialState.value = structuredClone(role);
                return role;
              } catch (error) {
                showError(error, i18n.baseText("projectRoles.action.create.error"));
                return;
              }
            }
            async function confirmRoleUpdate(usedByUsers) {
              if (!usedByUsers) return true;
              return (await message.confirm(i18n.baseText("projectRoles.action.update.text", {
                interpolate: {
                  count: usedByUsers
                }
              }), i18n.baseText("projectRoles.action.update.title", {
                interpolate: {
                  count: usedByUsers
                }
              }), {
                type: "warning",
                confirmButtonText: i18n.baseText("projectRoles.action.update"),
                cancelButtonText: i18n.baseText("projectRoles.action.cancel")
              })) === MODAL_CONFIRM;
            }
            async function updateProjectRole(slug) {
              if (!(await confirmRoleUpdate(initialState?.value?.usedByUsers))) return;
              try {
                const role = await rolesStore.updateProjectRole(slug, {
                  ...form.value,
                  description: form.value.description ?? void 0
                });
                rolesStore.fetchRoles();
                telemetry.track("User updated role", {
                  role_id: role.slug,
                  role_name: role.displayName,
                  permissions_from: initialState.value?.scopes,
                  permissions_to: role.scopes
                });
                initialState.value = structuredClone(role);
                showMessage({
                  type: "success",
                  message: i18n.baseText("projectRoles.action.update.success")
                });
                return role;
              } catch (error) {
                showError(error, i18n.baseText("projectRoles.action.update.error"));
                return;
              }
            }
            async function handleSubmit() {
              if (props.roleSlug) await updateProjectRole(props.roleSlug);else await createProjectRole();
            }
            function setPreset(slug) {
              const preset = rolesStore.processedProjectRoles.find(role => role.slug === slug);
              if (!preset) return;
              form.value.scopes = structuredClone(toRaw(preset.scopes));
            }
            async function deleteRole() {
              if (!initialState?.value) return;
              if ((await message.confirm(i18n.baseText("projectRoles.action.delete.text", {
                interpolate: {
                  roleName: initialState.value.displayName
                }
              }), i18n.baseText("projectRoles.action.delete.title", {
                interpolate: {
                  roleName: initialState.value.displayName
                }
              }), {
                type: "warning",
                confirmButtonText: i18n.baseText("projectRoles.action.delete"),
                cancelButtonText: i18n.baseText("projectRoles.action.cancel")
              })) !== "confirm") return;
              telemetry.track("User clicked delete role", {
                role_id: initialState.value.slug,
                role_name: initialState.value.displayName,
                permissions: initialState.value?.scopes
              });
              try {
                await rolesStore.deleteProjectRole(initialState.value.slug);
                const index = rolesStore.roles.project.findIndex(role => role.slug === initialState.value?.slug);
                if (index !== -1) rolesStore.roles.project.splice(index, 1);
                showMessage({
                  title: i18n.baseText("projectRoles.action.delete.success"),
                  type: "success"
                });
                telemetry.track("User successfully deleted role", {
                  role_id: initialState.value.slug,
                  role_name: initialState.value.displayName,
                  permissions: initialState.value?.scopes
                });
                router.back();
              } catch (error) {
                showError(error, i18n.baseText("projectRoles.action.delete.error"));
                return;
              }
            }
            const displayNameValidationRules = [{
              name: "REQUIRED"
            }, {
              name: "MIN_LENGTH",
              config: {
                minimum: 2
              }
            }];
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["pb-xl", _ctx.$style.container])
              }, [createVNode(unref(N8nButton_default), {
                icon: "arrow-left",
                type: "secondary",
                class: normalizeClass(_ctx.$style.backButton),
                text: "",
                onClick: _cache[0] || (_cache[0] = () => unref(router).back())
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.backToRoleList")), 1)]),
                _: 1
              }, 8, ["class"]), createBaseVNode("div", {
                class: normalizeClass(["mb-xl", _ctx.$style.headerContainer])
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.roleSlug ? `Role "${unref(form).displayName}"` : unref(i18n).baseText("projectRoles.newRole")), 1)]),
                _: 1
              }), initialState.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nButton_default), {
                type: "secondary",
                disabled: !hasUnsavedChanges.value,
                class: "mr-xs",
                onClick: _cache[1] || (_cache[1] = $event => resetForm(initialState.value))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.discardChanges")), 1)]),
                _: 1
              }, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
                disabled: !hasUnsavedChanges.value,
                onClick: handleSubmit
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.save")), 1)]),
                _: 1
              }, 8, ["disabled"])])) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                onClick: handleSubmit
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.create")), 1)]),
                _: 1
              }))], 2), createBaseVNode("div", {
                class: normalizeClass(["mb-l", _ctx.$style.formContainer])
              }, [createVNode(unref(N8nFormInput_default), {
                modelValue: unref(form).displayName,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => unref(form).displayName = $event),
                label: unref(i18n).baseText("projectRoles.roleName"),
                "validate-on-blur": "",
                "validation-rules": displayNameValidationRules,
                class: "mb-s",
                "show-required-asterisk": "",
                required: "",
                maxlength: 100
              }, null, 8, ["modelValue", "label"]), createVNode(unref(N8nFormInput_default), {
                modelValue: unref(form).description,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => unref(form).description = $event),
                label: unref(i18n).baseText("projectRoles.description"),
                placeholder: unref(i18n).baseText("projectRoles.optional"),
                type: "textarea",
                maxlength: 500,
                autosize: {
                  minRows: 2,
                  maxRows: 4
                }
              }, null, 8, ["modelValue", "label", "placeholder"])], 2), createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "xlarge",
                class: "mb-s"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.permissions")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                color: "text-light",
                class: "mb-2xs",
                tag: "p"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.preset")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(["mb-s", _ctx.$style.presetsContainer])
              }, [createVNode(unref(N8nButton_default), {
                type: "secondary",
                onClick: _cache[4] || (_cache[4] = $event => setPreset("project:admin"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.admin")), 1)]),
                _: 1
              }), createVNode(unref(N8nButton_default), {
                type: "secondary",
                onClick: _cache[5] || (_cache[5] = $event => setPreset("project:editor"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.editor")), 1)]),
                _: 1
              }), createVNode(unref(N8nButton_default), {
                type: "secondary",
                onClick: _cache[6] || (_cache[6] = $event => setPreset("project:viewer"))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.viewer")), 1)]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.cardContainer)
              }, [(openBlock(), createElementBlock(Fragment, null, renderList(scopeTypes, type => {
                return createBaseVNode("div", {
                  key: type,
                  class: normalizeClass(["mb-s mt-s", _ctx.$style.card])
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardTitle)
                }, toDisplayString(unref(i18n).baseText(`projectRoles.type.${type}`)), 3), createBaseVNode("div", _hoisted_2, [unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
                  key: 0,
                  rows: scopes[type].length,
                  "shrink-last": false
                }, null, 8, ["rows"])) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(scopes[type], scope => {
                  return openBlock(), createElementBlock("div", {
                    key: scope,
                    class: "mb-2xs"
                  }, [createVNode(unref(N8nTooltip_default), {
                    content: unref(i18n).baseText(`projectRoles.${scope}.tooltip`),
                    placement: "right",
                    enterable: false,
                    "show-after": 250
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nFormInput_default), {
                      "data-test-id": `scope-checkbox-${scope}`,
                      "model-value": unref(form).scopes.includes(scope),
                      label: unref(i18n).baseText(`projectRoles.${scope}`),
                      "validate-on-blur": "",
                      type: "checkbox",
                      class: normalizeClass(_ctx.$style.checkbox),
                      "onUpdate:modelValue": () => toggleScope(scope)
                    }, null, 8, ["data-test-id", "model-value", "label", "class", "onUpdate:modelValue"])]),
                    _: 2
                  }, 1032, ["content"])]);
                }), 128))])], 2);
              }), 64))], 2), _ctx.roleSlug && !initialState.value?.systemRole ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                class: "mb-2xs",
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.dangerZone")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                tag: "p",
                class: "mb-s"
              }, {
                default: withCtx(() => [initialState.value?.usedByUsers ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.useWarning", {
                  interpolate: {
                    count: initialState.value.usedByUsers
                  }
                })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.warning")), 1)], 64))]),
                _: 1
              }), createVNode(unref(N8nButton_default), {
                type: "danger",
                disabled: Boolean(initialState.value?.usedByUsers),
                onClick: deleteRole
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.button")), 1)]),
                _: 1
              }, 8, ["disabled"])])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/project-roles/ProjectRoleView.vue?vue&type=style&index=0&lang.module.css
        container = "_container_14r2u_2";
        cardContainer = "_cardContainer_14r2u_9";
        card = "_card_14r2u_9";
        cardTitle = "_cardTitle_14r2u_28";
        backButton = "_backButton_14r2u_32";
        headerContainer = "_headerContainer_14r2u_38";
        formContainer = "_formContainer_14r2u_44";
        presetsContainer = "_presetsContainer_14r2u_48";
        checkbox = "_checkbox_14r2u_53";
        ProjectRoleView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          cardContainer,
          card,
          cardTitle,
          backButton,
          headerContainer,
          formContainer,
          presetsContainer,
          checkbox
        }; //#endregion
        //#region src/features/project-roles/ProjectRoleView.vue
        cssModules = {
          "$style": ProjectRoleView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ProjectRoleView_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectRoleView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();