;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./overlay-legacy-m4tN0qRV.js", "./empty-legacy-CsIOGMHW.js", "./dialog-legacy-NLNFRJF3.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useStyles-legacy-DnD2qvTK.js", "./nodeIcon-legacy-Y3uKJRlj.js", "./NodeIcon-legacy-CDp2SR0v.js", "./Modal-legacy-BUoIu2MX.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, renderList, createTextVNode, createBaseVNode, useI18n, ElSwitch, N8nIcon_default, N8nHeading_default, N8nSelect_default, N8nOption_default, N8nText_default, N8nButton_default, __plugin_vue_export_helper_default, createEventBus, useCredentialsStore, v4_default, useUIStore, useNodeTypesStore, JINA_AI_TOOL_NODE_TYPE, SEAR_XNG_TOOL_NODE_TYPE, deepCopy, NodeIcon_default, Modal_default, __vite_style__, AVAILABLE_TOOLS, ToolsSelectorModal_vue_vue_type_script_setup_true_lang_default, header, content, provider, providerHeader, providerTitle, row, credentials, toolsList, toolRow, toolInfo, footer, footerRight, ToolsSelectorModal_vue_vue_type_style_index_0_lang_module_default, cssModules, ToolsSelectorModal_default;
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
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        ElSwitch = _srcLegacy007Js.At;
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nHeading_default = _srcLegacy007Js.Fn;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nButton_default = _srcLegacy007Js.Rn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_dialogLegacy00BJs) {}, function (_useTelemetryLegacy00FJs) {
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        v4_default = _useTelemetryLegacy00FJs.Io;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        JINA_AI_TOOL_NODE_TYPE = _constantsLegacy00NJs.Aa;
        SEAR_XNG_TOOL_NODE_TYPE = _constantsLegacy00NJs.Pa;
        deepCopy = _constantsLegacy00NJs.qi;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useStylesLegacy00$Js) {}, function (_nodeIconLegacy01pJs) {}, function (_NodeIconLegacy01zJs) {
        NodeIcon_default = _NodeIconLegacy01zJs.t;
      }, function (_ModalLegacy01NJs) {
        Modal_default = _ModalLegacy01NJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_1rpov_123 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._content_1rpov_129 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--lg);\n  padding: var(--spacing--sm) 0 var(--spacing--md);\n}\n._provider_1rpov_136 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  margin-bottom: var(--spacing--md);\n}\n._providerHeader_1rpov_143 {\n  display: grid;\n  gap: var(--spacing--2xs);\n}\n._providerTitle_1rpov_148 {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n}\n._row_1rpov_154 {\n  display: grid;\n  gap: var(--spacing--2xs);\n}\n._credentials_1rpov_159 {\n  display: flex;\n  gap: var(--spacing--2xs);\n  align-items: center;\n}\n._toolsList_1rpov_165 {\n  display: grid;\n  gap: var(--spacing--sm);\n}\n._toolRow_1rpov_170 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--spacing--2xs) 0;\n}\n._toolInfo_1rpov_177 {\n  display: grid;\n  gap: 2px;\n}\n._footer_1rpov_182 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n._footerRight_1rpov_189 {\n  display: flex;\n  gap: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/chatHub/composables/availableTools.ts
        AVAILABLE_TOOLS = {
          [JINA_AI_TOOL_NODE_TYPE]: {
            name: "Jina AI",
            description: "Use Jina AI to search the web for relevant information.",
            credentialType: "jinaAiApi",
            tools: [{
              title: "Access Web",
              node: {
                parameters: {
                  resource: "reader",
                  operation: "read",
                  url: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', ``, 'string') }}",
                  options: {},
                  requestOptions: {}
                },
                type: JINA_AI_TOOL_NODE_TYPE,
                typeVersion: 1,
                position: [0, 0],
                id: v4_default(),
                name: "Read URL content in Jina AI"
              }
            }, {
              title: "Web Search",
              node: {
                parameters: {
                  resource: "reader",
                  operation: "search",
                  searchQuery: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Search_Query', ``, 'string') }}",
                  simplify: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Simplify', ``, 'boolean') }}",
                  options: {},
                  requestOptions: {}
                },
                type: JINA_AI_TOOL_NODE_TYPE,
                typeVersion: 1,
                position: [0, 0],
                id: v4_default(),
                name: "Search web in Jina AI"
              }
            }, {
              title: "Deep Research",
              node: {
                parameters: {
                  resource: "research",
                  operation: "deepResearch",
                  researchQuery: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Research_Query', ``, 'string') }}",
                  options: {},
                  requestOptions: {}
                },
                type: JINA_AI_TOOL_NODE_TYPE,
                typeVersion: 1,
                position: [0, 0],
                id: v4_default(),
                name: "Perform deep research in Jina AI"
              }
            }]
          },
          [SEAR_XNG_TOOL_NODE_TYPE]: {
            name: "SearXNG",
            description: "Use SearXNG to search the web for relevant information.",
            credentialType: "searXngApi",
            tools: [{
              title: "Web Search",
              node: {
                parameters: {
                  options: {
                    numResults: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Number_of_Results', ``, 'number') }}",
                    pageNumber: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Search_Page_Number', ``, 'number') }}",
                    language: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Language', ``, 'string') }}"
                  }
                },
                type: SEAR_XNG_TOOL_NODE_TYPE,
                typeVersion: 1,
                position: [0, 0],
                id: v4_default(),
                name: "Search web in SearXNG"
              }
            }]
          }
        }; //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelectorModal.vue?vue&type=script&setup=true&lang.ts
        ToolsSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ToolsSelectorModal",
          props: {
            modalName: {},
            data: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const modalBus = ref(createEventBus());
            const credentialsStore = useCredentialsStore();
            const nodeTypesStore = useNodeTypesStore();
            const uiStore = useUIStore();
            const selectedByProvider = ref({
              [JINA_AI_TOOL_NODE_TYPE]: /* @__PURE__ */new Set(),
              [SEAR_XNG_TOOL_NODE_TYPE]: /* @__PURE__ */new Set()
            });
            const credentialIdByProvider = ref({
              [JINA_AI_TOOL_NODE_TYPE]: null,
              [SEAR_XNG_TOOL_NODE_TYPE]: null
            });
            function resetSelections() {
              selectedByProvider.value = {
                [JINA_AI_TOOL_NODE_TYPE]: /* @__PURE__ */new Set(),
                [SEAR_XNG_TOOL_NODE_TYPE]: /* @__PURE__ */new Set()
              };
              credentialIdByProvider.value = {
                [JINA_AI_TOOL_NODE_TYPE]: null,
                [SEAR_XNG_TOOL_NODE_TYPE]: null
              };
            }
            function restoreFromInitial(nodes) {
              resetSelections();
              const toolsByProvider = /* @__PURE__ */new Map();
              Object.entries(AVAILABLE_TOOLS).forEach(([key, p]) => {
                toolsByProvider.set(key, new Set(p.tools.map(t => t.node.name)));
              });
              for (const node of nodes) {
                const providerKey = node.type;
                const provider$1 = AVAILABLE_TOOLS[providerKey];
                if (!provider$1) continue;
                if (!toolsByProvider.get(providerKey)?.has(node.name)) continue;
                selectedByProvider.value[providerKey].add(node.name);
                if (provider$1.credentialType) {
                  const credentialId = node.credentials?.[provider$1.credentialType].id;
                  if (credentialId && typeof credentialId === "string" && !credentialIdByProvider.value[providerKey]) credentialIdByProvider.value[providerKey] = credentialId;
                }
              }
              selectedByProvider.value = {
                ...selectedByProvider.value
              };
              credentialIdByProvider.value = {
                ...credentialIdByProvider.value
              };
            }
            function getAvailableCredentials(toolNodeType) {
              const provider$1 = AVAILABLE_TOOLS[toolNodeType];
              if (!provider$1.credentialType) return [];
              return credentialsStore.getCredentialsByType(provider$1.credentialType);
            }
            const providers = computed(() => {
              return Object.entries(AVAILABLE_TOOLS);
            });
            const selectedCount = computed(() => {
              return providers.value.reduce((acc, [key]) => acc + (selectedByProvider.value[key]?.size ?? 0), 0);
            });
            const getNodeIcon = nodeType => {
              return nodeTypesStore.getNodeType(nodeType);
            };
            function toggleTool(providerKey, toolId, value) {
              const enabled = typeof value === "boolean" ? value : Boolean(value);
              if (!selectedByProvider.value[providerKey]) selectedByProvider.value[providerKey] = /* @__PURE__ */new Set();
              const set = selectedByProvider.value[providerKey];
              if (enabled) set.add(toolId);else set.delete(toolId);
              selectedByProvider.value = {
                ...selectedByProvider.value
              };
            }
            function onCredentialSelect(providerKey, id) {
              credentialIdByProvider.value[providerKey] = id;
            }
            function onCreateNewCredential(providerKey) {
              const provider$1 = AVAILABLE_TOOLS[providerKey];
              if (!provider$1.credentialType) return;
              uiStore.openNewCredential(provider$1.credentialType);
            }
            const isMissingCredentials = computed(() => {
              for (const [providerKey, provider$1] of providers.value) {
                const selectedIds = selectedByProvider.value[providerKey];
                if (!selectedIds || selectedIds.size === 0) continue;
                if (provider$1.credentialType) {
                  if (!credentialIdByProvider.value[providerKey]) return true;
                }
              }
              return false;
            });
            function handleConfirm() {
              const tools = [];
              for (const [providerKey, provider$1] of providers.value) {
                const selected = selectedByProvider.value[providerKey];
                if (!selected || selected.size === 0) continue;
                const pickedId = credentialIdByProvider.value[providerKey] ?? null;
                let credential;
                if (provider$1.credentialType && pickedId) credential = getAvailableCredentials(providerKey).find(c => c.id === pickedId);
                for (const toolName of selected) {
                  const tool = provider$1.tools.find(t => t.node.name === toolName);
                  if (!tool) continue;
                  const node = deepCopy(tool.node);
                  if (provider$1.credentialType && credential) {
                    node.credentials = node.credentials ?? {};
                    node.credentials[provider$1.credentialType] = {
                      id: credential.id,
                      name: credential.name
                    };
                  }
                  tools.push(node);
                }
              }
              props.data.onConfirm(tools);
              modalBus.value.emit("close");
            }
            function onCancel() {
              modalBus.value.emit("close");
            }
            watch(() => props.data.selected, toolNodes => {
              if (toolNodes?.length > 0) restoreFromInitial(toolNodes);else resetSelections();
            }, {
              immediate: true
            });
            onMounted(async () => {
              await nodeTypesStore.loadNodeTypesIfNotLoaded();
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Modal_default, {
                name: _ctx.modalName,
                "event-bus": modalBus.value,
                width: "50%",
                "max-width": "720px",
                "min-height": "340px",
                center: true
              }, {
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "settings2",
                  size: 24
                }), createVNode(unref(N8nHeading_default), {
                  size: "large",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.title")), 1)]),
                  _: 1
                })], 2)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(providers.value, ([key, provider$1]) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: normalizeClass(_ctx.$style.provider)
                  }, [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.providerHeader)
                  }, [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.providerTitle)
                  }, [createVNode(NodeIcon_default, {
                    "node-type": getNodeIcon(key),
                    size: 18
                  }, null, 8, ["node-type"]), createVNode(unref(N8nHeading_default), {
                    color: "text-dark",
                    size: "medium"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(provider$1.name), 1)]),
                    _: 2
                  }, 1024)], 2), createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(provider$1.description), 1)]),
                    _: 2
                  }, 1024)], 2), provider$1.credentialType ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.row)
                  }, [createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-base"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.credential")), 1)]),
                    _: 1
                  }), createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.credentials)
                  }, [createVNode(unref(N8nSelect_default), {
                    "model-value": credentialIdByProvider.value[key] ?? null,
                    size: "large",
                    placeholder: unref(i18n).baseText("chatHub.tools.editor.credential.placeholder"),
                    "onUpdate:modelValue": $event => onCredentialSelect(key, $event)
                  }, {
                    default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(getAvailableCredentials(key), c => {
                      return openBlock(), createBlock(unref(N8nOption_default), {
                        key: c.id,
                        value: c.id,
                        label: c.name
                      }, null, 8, ["value", "label"]);
                    }), 128))]),
                    _: 2
                  }, 1032, ["model-value", "placeholder", "onUpdate:modelValue"]), createVNode(unref(N8nButton_default), {
                    size: "medium",
                    type: "secondary",
                    onClick: $event => onCreateNewCredential(key)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.credential.new")), 1)]),
                    _: 2
                  }, 1032, ["onClick"])], 2)], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.toolsList)
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(provider$1.tools, tool => {
                    return openBlock(), createElementBlock("div", {
                      key: tool.node.id,
                      class: normalizeClass(_ctx.$style.toolRow)
                    }, [createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.toolInfo)
                    }, [createVNode(unref(N8nText_default), {
                      size: "medium",
                      bold: "",
                      color: "text-base"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(tool.title || tool.node.name), 1)]),
                      _: 2
                    }, 1024), createVNode(unref(N8nText_default), {
                      size: "small",
                      color: "text-base"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(tool.node.name), 1)]),
                      _: 2
                    }, 1024)], 2), createVNode(unref(ElSwitch), {
                      size: "large",
                      "aria-label": `Toggle ${tool.title || tool.node.name}`,
                      "model-value": !!selectedByProvider.value[key]?.has(tool.node.name),
                      "onUpdate:modelValue": val => toggleTool(key, tool.node.name, val)
                    }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])], 2);
                  }), 128))], 2)], 2);
                }), 128))], 2)]),
                footer: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footer)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.selectedCount", {
                    interpolate: {
                      count: selectedCount.value
                    }
                  })), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.footerRight)
                }, [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  onClick: onCancel
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.cancel")), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  type: "primary",
                  disabled: isMissingCredentials.value,
                  onClick: handleConfirm
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.confirm")), 1)]),
                  _: 1
                }, 8, ["disabled"])], 2)], 2)]),
                _: 1
              }, 8, ["name", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelectorModal.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_1rpov_123";
        content = "_content_1rpov_129";
        provider = "_provider_1rpov_136";
        providerHeader = "_providerHeader_1rpov_143";
        providerTitle = "_providerTitle_1rpov_148";
        row = "_row_1rpov_154";
        credentials = "_credentials_1rpov_159";
        toolsList = "_toolsList_1rpov_165";
        toolRow = "_toolRow_1rpov_170";
        toolInfo = "_toolInfo_1rpov_177";
        footer = "_footer_1rpov_182";
        footerRight = "_footerRight_1rpov_189";
        ToolsSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
          header,
          content,
          provider,
          providerHeader,
          providerTitle,
          row,
          credentials,
          toolsList,
          toolRow,
          toolInfo,
          footer,
          footerRight
        }; //#endregion
        //#region src/features/ai/chatHub/components/ToolsSelectorModal.vue
        cssModules = {
          "$style": ToolsSelectorModal_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", ToolsSelectorModal_default = /* @__PURE__ */__plugin_vue_export_helper_default(ToolsSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();