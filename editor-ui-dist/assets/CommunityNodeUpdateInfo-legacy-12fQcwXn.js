;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./exports-legacy-RTRnyI4R.js", "./semver-legacy-BzFo3drs.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, nextTick, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, toValue, onMounted, Fragment, normalizeClass, watch, withCtx, useCssModule, openBlock, createTextVNode, createSlots, createBaseVNode, useI18n, i18n, N8nCallout_default, N8nText_default, N8nButton_default, N8nLink_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useCredentialsStore, useUIStore, useUsersStore, useWorkflowsStore, useNodeTypesStore, removePreviewToken, useToast, isCommunityPackageName, VIEWS, useCanvasOperations, captureException, useCommunityNodesStore, require_semver, __vite_style__, import_semver, _hoisted_1, ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default, contactOwnerHint, border, ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ContactAdministratorToInstall_default, CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default, container, separator, CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default, cssModules, CommunityNodeFooter_default, CommunityNodeUpdateInfo_vue_vue_type_script_setup_true_lang_default, CommunityNodeUpdateInfo_default;
    //#region src/features/settings/communityNodes/composables/useInstallNode.ts
    function useInstallNode() {
      const communityNodesStore = useCommunityNodesStore();
      const nodeTypesStore = useNodeTypesStore();
      const credentialsStore = useCredentialsStore();
      const workflowsStore = useWorkflowsStore();
      const isOwner = computed(() => useUsersStore().isInstanceOwner);
      const loading = ref(false);
      const toast = useToast();
      const canvasOperations = useCanvasOperations();
      const getNpmVersion = async key => {
        const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(key);
        if (communityNodeAttributes) return communityNodeAttributes.npmVersion;
      };
      const installNode = async props => {
        if (!isOwner.value) {
          const error = /* @__PURE__ */new Error("User is not an owner");
          toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
          return {
            success: false,
            error
          };
        }
        try {
          loading.value = true;
          if (props.type === "verified") await communityNodesStore.installPackage(props.packageName, true, await getNpmVersion(props.nodeType));else await communityNodesStore.installPackage(props.packageName);
          await nodeTypesStore.getNodeTypes();
          await credentialsStore.fetchCredentialTypes(true);
          await nextTick();
          const nodeType = props.nodeType;
          if (nodeType && workflowsStore.workflow.nodes?.length) {
            const nodesToUpdate = workflowsStore.workflow.nodes.filter(node => node.type === removePreviewToken(nodeType));
            canvasOperations.initializeUnknownNodes(nodesToUpdate);
          }
          toast.showMessage({
            title: i18n.baseText("settings.communityNodes.messages.install.success"),
            type: "success"
          });
          return {
            success: true
          };
        } catch (error) {
          toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
          return {
            success: false,
            error
          };
        } finally {
          loading.value = false;
        }
      };
      return {
        installNode,
        loading
      };
    }

    //#endregion
    //#region src/features/settings/communityNodes/communityNodes.utils.ts

    async function fetchInstalledPackageInfo(packageName) {
      const installedPackage = await useCommunityNodesStore().getInstalledPackage(packageName);
      const communityNodeType = useNodeTypesStore().communityNodeType(packageName);
      if (!installedPackage) return;
      const checkIsUnverifiedUpdate = () => {
        if (!installedPackage?.updateAvailable || !communityNodeType) return false;
        return import_semver.default.gt(installedPackage.updateAvailable, communityNodeType.npmVersion);
      };
      return {
        ...installedPackage,
        unverifiedUpdate: checkIsUnverifiedUpdate()
      };
    }

    //#endregion
    //#region src/features/settings/communityNodes/composables/useInstalledCommunityPackage.ts
    function useInstalledCommunityPackage(nodeTypeName) {
      const communityNodesStore = useCommunityNodesStore();
      const usersStore = useUsersStore();
      const installedPackage = ref(void 0);
      const packageName = computed(() => toValue(nodeTypeName)?.split(".")[0] ?? "");
      const isCommunityNode = computed(() => {
        const nodeType = toValue(nodeTypeName);
        if (nodeType) return isCommunityPackageName(nodeType);
        return false;
      });
      const initInstalledPackage = async () => {
        if (!packageName.value || !isCommunityNode.value) return void 0;
        installedPackage.value = await fetchInstalledPackageInfo(packageName.value);
        return installedPackage.value;
      };
      watch(() => communityNodesStore.installedPackages[packageName.value], async changedPackage => {
        if (!packageName.value || !changedPackage) return;
        await initInstalledPackage();
      }, {
        deep: true
      });
      onMounted(async () => {
        if (!packageName.value || !isCommunityNode.value) return;
        await initInstalledPackage();
      });
      return {
        installedPackage,
        isUpdateCheckAvailable: computed(() => {
          return isCommunityNode.value && usersStore.isInstanceOwner && !installedPackage.value?.unverifiedUpdate;
        }),
        isCommunityNode,
        initInstalledPackage
      };
    }

    //#endregion
    //#region src/features/settings/communityNodes/components/ContactAdministratorToInstall.vue?vue&type=script&setup=true&lang.ts
    _export({
      a: useInstallNode,
      i: useInstalledCommunityPackage
    });
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_srcLegacy007Js) {
        N8nCallout_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00FJs) {
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        removePreviewToken = _useTelemetryLegacy00FJs.vt;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_useCanvasOperationsLegacy01pJs) {
        useCanvasOperations = _useCanvasOperationsLegacy01pJs.t;
      }, function (_exportsLegacy01XJs) {
        captureException = _exportsLegacy01XJs.n;
      }, function (_semverLegacy021Js) {
        useCommunityNodesStore = _semverLegacy021Js.n;
        require_semver = _semverLegacy021Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._contactOwnerHint_c1x0x_123 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--sm);\n  padding: var(--spacing--xs);\n  border-radius: 0.25em;\n}\n._border_c1x0x_131 {\n  border: var(--border-width) solid var(--color--foreground);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_hcptd_123 {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  padding: var(--spacing--sm);\n}\n._separator_hcptd_131 {\n  height: var(--border-width);\n  background: var(--color--foreground);\n  margin-right: var(--spacing--sm);\n  margin-left: var(--spacing--sm);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        import_semver = /* @__PURE__ */__toESM(require_semver());
        _hoisted_1 = {
          style: {
            "padding-bottom": "8px"
          }
        };
        ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ContactAdministratorToInstall",
          props: {
            box: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const $style = useCssModule();
            const i18n$1 = useI18n();
            const ownerEmailList = computed(() => useUsersStore().allUsers.filter(user => user.role?.includes("owner")).map(user => user.email));
            const classes = computed(() => ({
              [$style.contactOwnerHint]: true,
              [$style.border]: props.box
            }));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(classes.value)
              }, [props.box ? (openBlock(), createBlock(unref(N8nIcon_default), {
                key: 0,
                color: "text-light",
                icon: "info",
                size: "large"
              })) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                color: "text-base",
                size: "medium"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_1, toDisplayString(unref(i18n$1).baseText("communityNodeInfo.contact.admin")), 1), ownerEmailList.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(ownerEmailList.value.join(", ")), 1)]),
                  _: 1
                })) : createCommentVNode("", true)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/ContactAdministratorToInstall.vue?vue&type=style&index=0&lang.module.scss
        contactOwnerHint = "_contactOwnerHint_c1x0x_123";
        border = "_border_c1x0x_131";
        ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default = {
          contactOwnerHint,
          border
        }; //#endregion
        //#region src/features/settings/communityNodes/components/ContactAdministratorToInstall.vue
        cssModules$1 = {
          "$style": ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default
        };
        _export("r", ContactAdministratorToInstall_default = /* @__PURE__ */__plugin_vue_export_helper_default(ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue?vue&type=script&setup=true&lang.ts
        CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeFooter",
          props: {
            packageName: {},
            showManage: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const router = useRouter();
            const bugsUrl = ref(`https://registry.npmjs.org/${props.packageName}`);
            const {
              installedPackage
            } = useInstalledCommunityPackage(props.packageName);
            async function openSettingsPage() {
              await router.push({
                name: VIEWS.COMMUNITY_NODES
              });
            }
            async function openIssuesPage() {
              if (bugsUrl.value) window.open(bugsUrl.value, "_blank");
            }
            async function getBugsUrl(packageName) {
              const url = `https://registry.npmjs.org/${packageName}`;
              try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Could not get metadata for package");
                const data = await response.json();
                if (data.bugs?.url) bugsUrl.value = data.bugs.url;
              } catch (error) {
                captureException(error);
              }
            }
            onMounted(async () => {
              if (props.packageName) await getBugsUrl(props.packageName);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.separator)
              }, null, 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [unref(installedPackage) ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 0,
                size: "small",
                color: "text-light",
                style: {
                  "margin-right": "auto"
                }
              }, {
                default: withCtx(() => [createTextVNode(" Package version " + toDisplayString(unref(installedPackage).installedVersion) + " (" + toDisplayString(unref(installedPackage).updateAvailable && !unref(installedPackage).unverifiedUpdate ? unref(i18n).baseText("communityNodeFooter.legacy") : unref(i18n).baseText("nodeSettings.latest")) + ") ", 1)]),
                _: 1
              })) : createCommentVNode("", true), props.showManage ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createVNode(unref(N8nLink_default), {
                theme: "text",
                onClick: openSettingsPage
              }, {
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "primary",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.manage")), 1)]),
                  _: 1
                })]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                size: "small",
                style: {
                  "color": "var(--color--foreground)"
                },
                bold: ""
              }, {
                default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("|")])),
                _: 1
              })], 64)) : createCommentVNode("", true), createVNode(unref(N8nLink_default), {
                theme: "text",
                onClick: openIssuesPage
              }, {
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "small",
                  color: "primary",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.reportIssue")), 1)]),
                  _: 1
                })]),
                _: 1
              })], 2)]);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_hcptd_123";
        separator = "_separator_hcptd_131";
        CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default = {
          container,
          separator
        }; //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue
        cssModules = {
          "$style": CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", CommunityNodeFooter_default = /* @__PURE__ */__plugin_vue_export_helper_default(CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeUpdateInfo.vue?vue&type=script&setup=true&lang.ts
        CommunityNodeUpdateInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CommunityNodeUpdateInfo",
          props: {
            packageName: {},
            source: {}
          },
          setup(__props) {
            const props = __props;
            const {
              openCommunityPackageUpdateConfirmModal
            } = useUIStore();
            const onUpdate = () => {
              if (!props.packageName) return;
              openCommunityPackageUpdateConfirmModal(props.packageName, props.source);
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nCallout_default), {
                theme: "secondary",
                iconless: true,
                style: {
                  "margin-bottom": "var(--spacing--sm)"
                }
              }, createSlots({
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeUpdateInfo.available")) + " ", 1)]),
                _: 2
              }, [props.packageName ? {
                name: "trailingContent",
                fn: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  onClick: onUpdate
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.update")), 1)]),
                  _: 1
                })]),
                key: "0"
              } : void 0]), 1024);
            };
          }
        }); //#endregion
        //#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeUpdateInfo.vue
        _export("t", CommunityNodeUpdateInfo_default = CommunityNodeUpdateInfo_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();