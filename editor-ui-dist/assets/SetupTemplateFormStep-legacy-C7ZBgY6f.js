;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-z15msZ3G.js", "./NodeIcon-legacy-nNR3V-3Y.js", "./nodeTransforms-legacy-kJD9EoUb.js", "./templateTransforms-legacy-kjzXGYFa.js", "./CredentialPicker-legacy-BKDejqHN.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, withCtx, openBlock, createTextVNode, resolveDirective, normalizeClass, createBaseVNode, withDirectives, I18nT, useI18n, N8nNotice_default, N8nHeading_default, __plugin_vue_export_helper_default, useCredentialsStore, require_sortBy, getAppNameFromNodeName, useNodeTypesStore, useTelemetry, NodeIcon_default, getNodeTypeDisplayableCredentials, normalizeTemplateNodeCredentials, keyFromCredentialTypeAndName, CredentialPicker_default, __vite_style__, import_sortBy, getNodesRequiringCredentials, groupNodeCredentialsByKey, getAppCredentials, useCredentialSetupState, formatList, AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default, notice, AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default, cssModules$1, AppsRequiringCredsNotice_default, _sfc_main, _hoisted_1, IconSuccess_default, SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default, container, heading, headingOrder, headingIcon, description, credentials, credentialPicker, credentialOk, invisible, SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default, cssModules, SetupTemplateFormStep_default;
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("i", _hoisted_1);
    }
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
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNotice_default = _srcLegacy007Js.D;
        N8nHeading_default = _srcLegacy007Js.Wn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useCredentialsStore = _useTelemetryLegacy00HJs.Bt;
        require_sortBy = _useTelemetryLegacy00HJs.Ft;
        getAppNameFromNodeName = _useTelemetryLegacy00HJs.Gr;
        useNodeTypesStore = _useTelemetryLegacy00HJs.rt;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_NodeIconLegacy01DJs) {
        NodeIcon_default = _NodeIconLegacy01DJs.t;
      }, function (_nodeTransformsLegacy02BJs) {
        getNodeTypeDisplayableCredentials = _nodeTransformsLegacy02BJs.r;
      }, function (_templateTransformsLegacy03zJs) {
        normalizeTemplateNodeCredentials = _templateTransformsLegacy03zJs.n;
        keyFromCredentialTypeAndName = _templateTransformsLegacy03zJs.t;
      }, function (_CredentialPickerLegacy03DJs) {
        CredentialPicker_default = _CredentialPickerLegacy03DJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._notice_3fzof_123 {\n  margin-top: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\ni[data-v-563d175d] {\n  color: var(--color--success);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_lexug_123 {\n  list-style: none;\n}\n._heading_lexug_127 {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--spacing--2xs);\n}\n._headingOrder_lexug_133 {\n  font-weight: var(--font-weight--bold);\n  margin-right: var(--spacing--xs);\n}\n._headingIcon_lexug_138 {\n  margin-right: var(--spacing--2xs);\n}\n._description_lexug_142 {\n  margin-bottom: var(--spacing--lg);\n  font-size: var(--font-size--sm);\n  color: var(--color--text);\n}\n._credentials_lexug_148 {\n  max-width: 400px;\n  display: flex;\n  align-items: center;\n}\n._credentialPicker_lexug_154 {\n  flex: 1;\n}\n._credentialOk_lexug_158 {\n  margin-left: var(--spacing--2xs);\n  font-size: 24px;\n}\n._invisible_lexug_163 {\n  visibility: hidden;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/templates/composables/useCredentialSetupState.ts
        import_sortBy = /* @__PURE__ */__toESM(require_sortBy());
        /**
        * Returns the nodes in the template that require credentials
        * and the required credentials for each node.
        */
        getNodesRequiringCredentials = (nodeTypeProvider, nodes) => {
          return nodes.map(node => ({
            node,
            requiredCredentials: getNodeTypeDisplayableCredentials(nodeTypeProvider, node)
          })).filter(({
            requiredCredentials
          }) => requiredCredentials.length > 0);
        };
        groupNodeCredentialsByKey = nodeWithRequiredCredentials => {
          const credentialsByTypeName = /* @__PURE__ */new Map();
          for (const {
            node,
            requiredCredentials
          } of nodeWithRequiredCredentials) {
            const normalizedNodeCreds = node.credentials ? normalizeTemplateNodeCredentials(node.credentials) : {};
            for (const credentialDescription of requiredCredentials) {
              const credentialType = credentialDescription.name;
              const nodeCredentialName = normalizedNodeCreds[credentialDescription.name] ?? "";
              const key = keyFromCredentialTypeAndName(credentialType, nodeCredentialName);
              let credentialUsages = credentialsByTypeName.get(key);
              if (!credentialUsages) {
                credentialUsages = {
                  key,
                  nodeTypeName: node.type,
                  credentialName: nodeCredentialName,
                  credentialType,
                  usedBy: []
                };
                credentialsByTypeName.set(key, credentialUsages);
              }
              credentialUsages.usedBy.push(node);
            }
          }
          return credentialsByTypeName;
        };
        getAppCredentials = (credentialUsages, getAppNameByNodeType) => {
          const credentialsByAppName = /* @__PURE__ */new Map();
          for (const credentialUsage of credentialUsages) {
            const nodeTypeName = credentialUsage.nodeTypeName;
            const appName = getAppNameByNodeType(nodeTypeName) ?? nodeTypeName;
            const appCredentials = credentialsByAppName.get(appName);
            if (appCredentials) appCredentials.credentials.push(credentialUsage);else credentialsByAppName.set(appName, {
              appName,
              credentials: [credentialUsage]
            });
          }
          return Array.from(credentialsByAppName.values());
        };
        _export("r", useCredentialSetupState = nodes => {
          /**
          * Credentials user has selected from the UI. Map from credential
          * name in the template to the credential ID.
          */
          const selectedCredentialIdByKey = ref({});
          const nodeTypesStore = useNodeTypesStore();
          const credentialsStore = useCredentialsStore();
          const appNameByNodeType = (nodeTypeName, version) => {
            const nodeType = nodeTypesStore.getNodeType(nodeTypeName, version);
            return nodeType ? getAppNameFromNodeName(nodeType.displayName) : nodeTypeName;
          };
          const nodesRequiringCredentialsSorted = computed(() => {
            return (0, import_sortBy.default)(nodes.value ? getNodesRequiringCredentials(nodeTypesStore, nodes.value) : [], ({
              node
            }) => node.position[0]);
          });
          const credentialsByKey = computed(() => {
            return groupNodeCredentialsByKey(nodesRequiringCredentialsSorted.value);
          });
          const credentialUsages = computed(() => {
            return Array.from(credentialsByKey.value.values());
          });
          const appCredentials = computed(() => {
            return getAppCredentials(credentialUsages.value, appNameByNodeType);
          });
          const credentialOverrides = computed(() => {
            const overrides = {};
            for (const [key, credentialId] of Object.entries(selectedCredentialIdByKey.value)) {
              const credential = credentialsStore.getCredentialById(credentialId);
              if (!credential) continue;
              overrides[key] = {
                id: credentialId,
                name: credential.name
              };
            }
            return overrides;
          });
          const numFilledCredentials = computed(() => {
            return Object.keys(selectedCredentialIdByKey.value).length;
          });
          const setSelectedCredentialId = (credentialKey, credentialId) => {
            selectedCredentialIdByKey.value[credentialKey] = credentialId;
          };
          const unsetSelectedCredential = credentialKey => {
            delete selectedCredentialIdByKey.value[credentialKey];
          };
          return {
            appCredentials,
            credentialOverrides,
            credentialUsages,
            credentialsByKey,
            nodesRequiringCredentialsSorted,
            numFilledCredentials,
            selectedCredentialIdByKey,
            setSelectedCredentialId,
            unsetSelectedCredential
          };
        }); //#endregion
        //#region src/app/utils/formatters/listFormatter.ts
        /**
        * Formats a list of items into a string. Each item is formatted using
        * the given function and the are separated by a comma except for the last
        * item which is separated by "and".
        *
        * @example
        * formatList(['a', 'b', 'c'], {
        *   formatFn: (x) => `"${x}"`
        *   i18n
        * });
        * // => '"a", "b" and "c"'
        */
        formatList = (list, opts) => {
          const {
            i18n,
            formatFn
          } = opts;
          if (list.length === 0) return "";
          if (list.length === 1) return formatFn(list[0]);
          const allButLast = list.slice(0, -1);
          const last = list[list.length - 1];
          return `${allButLast.map(formatFn).join(", ")} ${i18n.baseText("generic.and")} ${formatFn(last)}`;
        }; //#endregion
        //#region src/features/workflows/templates/components/AppsRequiringCredsNotice.vue?vue&type=script&setup=true&lang.ts
        AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AppsRequiringCredsNotice",
          props: {
            appCredentials: {}
          },
          setup(__props) {
            const i18n = useI18n();
            const props = __props;
            const formatApp = app => `<b>${app.credentials.length}x ${app.appName}</b>`;
            const appNodeCounts = computed(() => {
              return formatList(props.appCredentials, {
                formatFn: formatApp,
                i18n
              });
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createBlock(unref(N8nNotice_default), {
                class: normalizeClass(_ctx.$style.notice),
                theme: "info"
              }, {
                default: withCtx(() => [createVNode(unref(I18nT), {
                  tag: "span",
                  keypath: "templateSetup.instructions",
                  scope: "global"
                }, {
                  default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, appNodeCounts.value]])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/AppsRequiringCredsNotice.vue?vue&type=style&index=0&lang.module.scss
        notice = "_notice_3fzof_123";
        AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default = {
          notice
        }; //#endregion
        //#region src/features/workflows/templates/components/AppsRequiringCredsNotice.vue
        cssModules$1 = {
          "$style": AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", AppsRequiringCredsNotice_default = /* @__PURE__ */__plugin_vue_export_helper_default(AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/workflows/templates/components/IconSuccess.vue
        _sfc_main = {};
        _hoisted_1 = {
          class: "el-icon-success"
        };
        IconSuccess_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-563d175d"]]); //#endregion
        //#region src/features/workflows/templates/components/SetupTemplateFormStep.vue?vue&type=script&setup=true&lang.ts
        SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SetupTemplateFormStep",
          props: {
            order: {},
            credentials: {},
            selectedCredentialId: {
              default: null
            }
          },
          emits: ["credentialSelected", "credentialDeselected"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const nodeTypesStore = useNodeTypesStore();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const node = computed(() => props.credentials.usedBy[0]);
            const nodeType = computed(() => nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion));
            const appName = computed(() => nodeType.value ? getAppNameFromNodeName(nodeType.value.displayName) : node.value.type);
            const nodeNames = computed(() => {
              const formatNodeName = nodeToFormat => `<b>${nodeToFormat.name}</b>`;
              return formatList(props.credentials.usedBy, {
                formatFn: formatNodeName,
                i18n
              });
            });
            const onCredentialModalOpened = () => {
              telemetry.track("User opened Credential modal", {
                source: "cred_setup",
                credentialType: props.credentials.credentialType,
                new_credential: !props.selectedCredentialId
              });
            };
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(_ctx.$style.container),
                "data-test-id": "setup-credentials-form-step"
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "large"
              }, {
                default: withCtx(() => [nodeType.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.heading),
                  "data-test-id": "credential-step-heading"
                }, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.headingOrder)
                }, toDisplayString(_ctx.order) + ".", 3), createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.headingIcon)
                }, [createVNode(NodeIcon_default, {
                  "node-type": nodeType.value
                }, null, 8, ["node-type"])], 2), createTextVNode(" " + toDisplayString(appName.value), 1)], 2)) : createCommentVNode("", true)]),
                _: 1
              }), createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.description),
                "data-test-id": "credential-step-description"
              }, [createVNode(unref(I18nT), {
                tag: "span",
                keypath: "templateSetup.credential.description",
                plural: _ctx.credentials.usedBy.length,
                scope: "global"
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, nodeNames.value]])]),
                _: 1
              }, 8, ["plural"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.credentials)
              }, [createVNode(CredentialPicker_default, {
                class: normalizeClass(_ctx.$style.credentialPicker),
                "app-name": appName.value,
                "credential-type": props.credentials.credentialType,
                "selected-credential-id": _ctx.selectedCredentialId,
                onCredentialSelected: _cache[0] || (_cache[0] = $event => emit("credentialSelected", {
                  credentialUsageKey: _ctx.$props.credentials.key,
                  credentialId: $event
                })),
                onCredentialDeselected: _cache[1] || (_cache[1] = $event => emit("credentialDeselected", {
                  credentialUsageKey: _ctx.$props.credentials.key
                })),
                onCredentialModalOpened
              }, null, 8, ["class", "app-name", "credential-type", "selected-credential-id"]), createVNode(IconSuccess_default, {
                class: normalizeClass({
                  [_ctx.$style.credentialOk]: true,
                  [_ctx.$style.invisible]: !_ctx.selectedCredentialId
                })
              }, null, 8, ["class"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/SetupTemplateFormStep.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_lexug_123";
        heading = "_heading_lexug_127";
        headingOrder = "_headingOrder_lexug_133";
        headingIcon = "_headingIcon_lexug_138";
        description = "_description_lexug_142";
        credentials = "_credentials_lexug_148";
        credentialPicker = "_credentialPicker_lexug_154";
        credentialOk = "_credentialOk_lexug_158";
        invisible = "_invisible_lexug_163";
        SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default = {
          container,
          heading,
          headingOrder,
          headingIcon,
          description,
          credentials,
          credentialPicker,
          credentialOk,
          invisible
        }; //#endregion
        //#region src/features/workflows/templates/components/SetupTemplateFormStep.vue
        cssModules = {
          "$style": SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", SetupTemplateFormStep_default = /* @__PURE__ */__plugin_vue_export_helper_default(SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();