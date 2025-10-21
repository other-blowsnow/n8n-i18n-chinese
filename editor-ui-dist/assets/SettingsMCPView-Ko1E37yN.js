import { d as defineComponent, bZ as useClipboard, h as createElementBlock, g as openBlock, ap as normalizeStyle, n as normalizeClass, j as createBaseVNode, t as toDisplayString, Y as renderSlot, i as createVNode, k as unref, aa as N8nTooltip, c as useI18n, w as withCtx, e as createBlock, f as createCommentVNode, q as N8nButton, _ as _export_sfc, x as computed, dI as N8nLoading, cK as InfoTip, l as createTextVNode, e5 as N8nNotice, eL as N8nMarkdown, p as N8nText, a as useToast, ay as useDocumentTitle, a2 as useWorkflowsStore, u as useUsersStore, au as useRootStore, r as ref, o as onMounted, m as N8nHeading, ek as ElSwitch, dW as N8nActionBox, ee as N8nActionToggle, N as N8nIcon, C as N8nLink, hX as router, V as VIEWS, fB as ProjectIcon, ei as N8nDataTableServer, fA as isIconOrEmoji, hY as LOADING_INDICATOR_TIMEOUT } from "./index-lkSN61-i.js";
import { u as useMCPStore } from "./mcp.store-BYYPxGVp.js";
import { N as N8nInfoAccordion } from "./InfoAccordion-D7rXFx08.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConnectionParameter",
  props: {
    value: {},
    allowCopy: { type: Boolean, default: true },
    maxWidth: { default: void 0 }
  },
  setup(__props) {
    const { copy, copied, isSupported } = useClipboard();
    const i18n = useI18n();
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container),
        style: normalizeStyle({ maxWidth: props.maxWidth ? props.maxWidth + "px" : "none" })
      }, [
        createBaseVNode("code", null, toDisplayString(props.value), 1),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style["copy-button-wrapper"])
        }, [
          renderSlot(_ctx.$slots, "customActions"),
          createVNode(unref(N8nTooltip), {
            disables: !unref(isSupported),
            content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy"),
            placement: "right"
          }, {
            default: withCtx(() => [
              props.allowCopy && unref(isSupported) ? (openBlock(), createBlock(unref(N8nButton), {
                key: 0,
                type: "tertiary",
                icon: unref(copied) ? "clipboard-check" : "clipboard",
                square: true,
                class: normalizeClass(_ctx.$style["copy-button"]),
                onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(props.value))
              }, null, 8, ["icon", "class"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["disables", "content"])
        ], 2)
      ], 6);
    };
  }
});
const container$2 = "_container_9i963_123";
const style0$2 = {
  container: container$2,
  "copy-button-wrapper": "_copy-button-wrapper_9i963_157",
  "copy-button": "_copy-button_9i963_157"
};
const cssModules$2 = {
  "$style": style0$2
};
const ConnectionParameter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const MCP_ENDPOINT = "mcp-server/http";
const DOCS_URL = "https://docs.n8n.io/";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MCPConnectionInstructions",
  props: {
    baseUrl: {},
    apiKey: {},
    loadingApiKey: { type: Boolean }
  },
  emits: ["rotateKey"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { copy, copied, isSupported } = useClipboard();
    const i18n = useI18n();
    const connectionString2 = computed(() => {
      return `
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway",
        "--streamableHttp",
        "${props.baseUrl}${MCP_ENDPOINT}",
        "--header",
        "authorization:Bearer ${apiKeyText.value}"
      ]
    }
  }
}
`;
    });
    const isKeyRedacted = computed(() => {
      return props.apiKey.apiKey.includes("******");
    });
    const connectionCode = computed(() => {
      return `\`\`\`json${connectionString2.value}\`\`\``;
    });
    const fullServerUrl = computed(() => {
      return props.baseUrl + MCP_ENDPOINT;
    });
    const apiKeyText = computed(() => {
      if (props.loadingApiKey) {
        return `<${i18n.baseText("generic.loading")}...>`;
      }
      return isKeyRedacted.value ? "<YOUR_ACCESS_TOKEN_HERE>" : props.apiKey.apiKey;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style["instructions-container"])
        }, [
          createBaseVNode("ol", {
            class: normalizeClass(_ctx.$style.instructions)
          }, [
            createBaseVNode("li", null, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.item)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.enableAccess")), 3)
              ], 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.item)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.serverUrl")) + ": ", 3),
                createVNode(ConnectionParameter, { value: fullServerUrl.value }, null, 8, ["value"])
              ], 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.item)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.apiKey.label")) + ": ", 3),
                props.loadingApiKey ? (openBlock(), createBlock(unref(N8nLoading), {
                  key: 0,
                  loading: props.loadingApiKey,
                  class: normalizeClass(_ctx.$style["api-key-loader"])
                }, null, 8, ["loading", "class"])) : (openBlock(), createBlock(ConnectionParameter, {
                  key: 1,
                  value: props.apiKey.apiKey,
                  "max-width": 400,
                  "allow-copy": !isKeyRedacted.value
                }, {
                  customActions: withCtx(() => [
                    createVNode(unref(N8nTooltip), {
                      content: unref(i18n).baseText("settings.mcp.instructions.rotateKey.tooltip")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(N8nButton), {
                          type: "tertiary",
                          icon: "refresh-cw",
                          square: true,
                          onClick: _cache[0] || (_cache[0] = ($event) => emit("rotateKey"))
                        })
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ]),
                  _: 1
                }, 8, ["value", "allow-copy"])),
                !props.loadingApiKey ? (openBlock(), createBlock(unref(InfoTip), {
                  key: 2,
                  type: "tooltip",
                  "tooltip-placement": "right"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.instructions.apiKey.tip")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ], 2)
            ])
          ], 2),
          !isKeyRedacted.value && !props.loadingApiKey ? (openBlock(), createBlock(unref(N8nNotice), {
            key: 0,
            theme: "warning",
            class: normalizeClass(_ctx.$style["copy-key-notice"]),
            content: unref(i18n).baseText("settings.mcp.newKey.notice")
          }, null, 8, ["class", "content"])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.connectionString)
        }, [
          createVNode(unref(N8nInfoAccordion), {
            title: unref(i18n).baseText("settings.mcp.instructions.json")
          }, {
            customContent: withCtx(() => [
              createVNode(unref(N8nMarkdown), { content: connectionCode.value }, null, 8, ["content"]),
              createVNode(unref(N8nTooltip), {
                disables: !unref(isSupported),
                content: unref(copied) ? unref(i18n).baseText("generic.copied") : unref(i18n).baseText("generic.copy")
              }, {
                default: withCtx(() => [
                  unref(isSupported) && !props.loadingApiKey ? (openBlock(), createBlock(unref(N8nButton), {
                    key: 0,
                    type: "tertiary",
                    icon: unref(copied) ? "clipboard-check" : "clipboard",
                    square: true,
                    class: normalizeClass(_ctx.$style["copy-json-button"]),
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(copy)(connectionString2.value))
                  }, null, 8, ["icon", "class"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["disables", "content"])
            ]),
            _: 1
          }, 8, ["title"])
        ], 2),
        createVNode(unref(N8nText), {
          size: "small",
          class: "mt-m"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.instructions.docs.part1")) + " ", 1),
            createBaseVNode("a", {
              href: DOCS_URL,
              target: "_blank"
            }, toDisplayString(unref(i18n).baseText("settings.mcp.instructions.docs.part2")), 1)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container$1 = "_container_fzkkx_123";
const instructions = "_instructions_fzkkx_128";
const item = "_item_fzkkx_142";
const label = "_label_fzkkx_152";
const url = "_url_fzkkx_156";
const connectionString = "_connectionString_fzkkx_188";
const style0$1 = {
  container: container$1,
  "instructions-container": "_instructions-container_fzkkx_128",
  instructions,
  item,
  label,
  url,
  "copy-url-wrapper": "_copy-url-wrapper_fzkkx_172",
  "copy-url-button": "_copy-url-button_fzkkx_177",
  connectionString,
  "copy-json-button": "_copy-json-button_fzkkx_199"
};
const cssModules$1 = {
  "$style": style0$1
};
const MCPConnectionInstructions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "mt-s mb-xl"
};
const _hoisted_3 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsMCPView",
  setup(__props) {
    const i18n = useI18n();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const workflowsStore = useWorkflowsStore();
    const mcpStore = useMCPStore();
    const usersStore = useUsersStore();
    const rootStore = useRootStore();
    const workflowsLoading = ref(false);
    const mcpStatusLoading = ref(false);
    const mcpKeyLoading = ref(false);
    const availableWorkflows = ref([]);
    const tableHeaders = ref([
      {
        title: i18n.baseText("generic.name"),
        key: "name",
        width: 200,
        disableSort: true,
        value() {
          return;
        }
      },
      {
        title: i18n.baseText("generic.folder"),
        key: "parentFolder",
        width: 200,
        disableSort: true,
        value() {
          return;
        }
      },
      {
        title: i18n.baseText("generic.project"),
        key: "homeProject",
        width: 200,
        disableSort: true,
        value() {
          return;
        }
      },
      {
        title: i18n.baseText("workflowDetails.active"),
        key: "active",
        disableSort: true,
        value() {
          return;
        }
      },
      {
        title: "",
        key: "actions",
        align: "end",
        width: 50,
        disableSort: true,
        value() {
          return;
        }
      }
    ]);
    const tableActions = ref([
      {
        label: i18n.baseText("settings.mcp.workflows.table.action.removeMCPAccess"),
        value: "removeFromMCP"
      }
    ]);
    const apiKey = computed(() => mcpStore.currentUserMCPKey);
    const isOwner = computed(() => usersStore.isInstanceOwner);
    const isAdmin = computed(() => usersStore.isAdmin);
    const canToggleMCP = computed(() => isOwner.value || isAdmin.value);
    const getProjectIcon = (workflow) => {
      if (workflow.homeProject?.type === "personal") {
        return { type: "icon", value: "user" };
      } else if (workflow.homeProject?.name) {
        return isIconOrEmoji(workflow.homeProject.icon) ? workflow.homeProject.icon : { type: "icon", value: "layers" };
      } else {
        return { type: "icon", value: "house" };
      }
    };
    const getProjectName = (workflow) => {
      if (workflow.homeProject?.type === "personal") {
        return i18n.baseText("projects.menu.personal");
      }
      return workflow.homeProject?.name ?? "";
    };
    const fetchAvailableWorkflows = async () => {
      workflowsLoading.value = true;
      try {
        const workflows = await mcpStore.fetchWorkflowsAvailableForMCP(1, 200);
        availableWorkflows.value = workflows;
      } catch (error) {
        toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
      } finally {
        workflowsLoading.value = false;
      }
    };
    const onUpdateMCPEnabled = async (value) => {
      try {
        mcpStatusLoading.value = true;
        const boolValue = typeof value === "boolean" ? value : Boolean(value);
        const updated = await mcpStore.setMcpAccessEnabled(boolValue);
        if (updated) {
          await fetchAvailableWorkflows();
          await fetchApiKey();
        } else {
          workflowsLoading.value = false;
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("settings.mcp.toggle.error"));
      } finally {
        mcpStatusLoading.value = false;
        workflowsLoading.value = false;
      }
    };
    const onWorkflowAction = async (action, workflow) => {
      switch (action) {
        case "removeFromMCP":
          try {
            await workflowsStore.updateWorkflowSetting(workflow.id, "availableInMCP", false);
            await fetchAvailableWorkflows();
          } catch (error) {
            toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
          }
          break;
      }
    };
    const fetchApiKey = async () => {
      try {
        mcpKeyLoading.value = true;
        await mcpStore.getOrCreateApiKey();
      } catch (error) {
        toast.showError(error, i18n.baseText("settings.mcp.error.fetching.apiKey"));
      } finally {
        setTimeout(() => {
          mcpKeyLoading.value = false;
        }, LOADING_INDICATOR_TIMEOUT);
      }
    };
    const rotateKey = async () => {
      try {
        mcpKeyLoading.value = true;
        await mcpStore.generateNewApiKey();
      } catch (error) {
        toast.showError(error, i18n.baseText("settings.mcp.error.rotating.apiKey"));
      } finally {
        setTimeout(() => {
          mcpKeyLoading.value = false;
        }, LOADING_INDICATOR_TIMEOUT);
      }
    };
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.mcp"));
      if (!mcpStore.mcpAccessEnabled) {
        return;
      }
      await fetchAvailableWorkflows();
      await fetchApiKey();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.headingContainer)
        }, [
          createVNode(unref(N8nHeading), { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp")), 1)
            ]),
            _: 1
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.mainToggleContainer)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.mainToggleInfo)
          }, [
            createVNode(unref(N8nText), { bold: true }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.label")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              size: "small",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.description")), 1)
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.mainTooggle),
            "data-test-id": "mcp-toggle-container"
          }, [
            createVNode(unref(N8nTooltip), {
              content: unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip"),
              disabled: canToggleMCP.value,
              placement: "top"
            }, {
              default: withCtx(() => [
                createVNode(unref(ElSwitch), {
                  size: "large",
                  "data-test-id": "mcp-access-toggle",
                  "model-value": unref(mcpStore).mcpAccessEnabled,
                  disabled: !canToggleMCP.value,
                  loading: mcpStatusLoading.value,
                  "onUpdate:modelValue": onUpdateMCPEnabled
                }, null, 8, ["model-value", "disabled", "loading"])
              ]),
              _: 1
            }, 8, ["content", "disabled"])
          ], 2)
        ], 2),
        unref(mcpStore).mcpAccessEnabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.container),
          "data-test-id": "mcp-enabled-section"
        }, [
          createBaseVNode("div", null, [
            createVNode(unref(N8nHeading), {
              size: "medium",
              bold: true
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connection.info.heading")), 1)
              ]),
              _: 1
            }),
            apiKey.value ? (openBlock(), createBlock(MCPConnectionInstructions, {
              key: 0,
              "loading-api-key": mcpKeyLoading.value,
              "base-url": unref(rootStore).urlBaseEditor,
              "api-key": apiKey.value,
              onRotateKey: rotateKey
            }, null, 8, ["loading-api-key", "base-url", "api-key"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style["workflow-list-container"]),
            "data-test-id": "mcp-workflow-list"
          }, [
            workflowsLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              workflowsLoading.value ? (openBlock(), createBlock(unref(N8nLoading), {
                key: 0,
                loading: workflowsLoading.value,
                variant: "h1",
                class: "mb-l"
              }, null, 8, ["loading"])) : createCommentVNode("", true),
              workflowsLoading.value ? (openBlock(), createBlock(unref(N8nLoading), {
                key: 1,
                loading: workflowsLoading.value,
                variant: "p",
                rows: 5,
                "shrink-last": false
              }, null, 8, ["loading"])) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.header, "mb-s"])
              }, [
                createVNode(unref(N8nHeading), {
                  size: "medium",
                  bold: true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.available.workflows.heading")), 1)
                  ]),
                  _: 1
                })
              ], 2),
              availableWorkflows.value.length === 0 ? (openBlock(), createBlock(unref(N8nActionBox), {
                key: 0,
                "data-test-id": "empty-workflow-list-box",
                heading: unref(i18n).baseText("settings.mcp.empty.title"),
                description: unref(i18n).baseText("settings.mcp.empty.description")
              }, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nDataTableServer), {
                key: 1,
                class: normalizeClass(_ctx.$style["workflow-table"]),
                "data-test-id": "mcp-workflow-table",
                headers: tableHeaders.value,
                items: availableWorkflows.value,
                "items-length": availableWorkflows.value.length
              }, {
                [`item.name`]: withCtx(({ item: item2 }) => [
                  createVNode(unref(N8nLink), {
                    "new-window": true,
                    to: unref(router).resolve({
                      name: unref(VIEWS).WORKFLOW,
                      params: { name: item2.id }
                    }).fullPath,
                    theme: "text",
                    class: normalizeClass(_ctx.$style["table-link"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(N8nText), { "data-test-id": "mcp-workflow-name" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item2.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(N8nIcon), {
                        icon: "external-link",
                        class: normalizeClass(_ctx.$style["link-icon"]),
                        color: "text-light"
                      }, null, 8, ["class"])
                    ]),
                    _: 2
                  }, 1032, ["to", "class"])
                ]),
                [`item.parentFolder`]: withCtx(({ item: item2 }) => [
                  item2.parentFolder ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(_ctx.$style["folder-cell"])
                  }, [
                    item2.homeProject ? (openBlock(), createBlock(unref(N8nLink), {
                      key: 0,
                      "data-test-id": "mcp-workflow-folder-link",
                      to: `/projects/${item2.homeProject.id}/folders/${item2.parentFolder.id}/workflows`,
                      theme: "text",
                      class: normalizeClass(_ctx.$style["table-link"]),
                      "new-window": true
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(N8nText), { "data-test-id": "mcp-workflow-folder-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item2.parentFolder.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(N8nIcon), {
                          icon: "external-link",
                          class: normalizeClass(_ctx.$style["link-icon"]),
                          color: "text-light"
                        }, null, 8, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["to", "class"])) : (openBlock(), createElementBlock("span", _hoisted_3, [
                      item2.parentFolder ? (openBlock(), createBlock(unref(N8nIcon), {
                        key: 0,
                        icon: "folder",
                        size: 16,
                        color: "text-light"
                      })) : createCommentVNode("", true),
                      createVNode(unref(N8nText), { "data-test-id": "mcp-workflow-folder-name" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item2.parentFolder.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]))
                  ], 2)) : (openBlock(), createBlock(unref(N8nText), {
                    key: 1,
                    "data-test-id": "mcp-workflow-no-folder"
                  }, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("-")
                    ])),
                    _: 1
                  }))
                ]),
                [`item.homeProject`]: withCtx(({ item: item2 }) => [
                  item2.homeProject ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(_ctx.$style["folder-cell"])
                  }, [
                    createVNode(unref(N8nLink), {
                      "data-test-id": "mcp-workflow-project-link",
                      to: unref(router).resolve({
                        name: unref(VIEWS).PROJECTS_WORKFLOWS,
                        params: { projectId: item2.homeProject.id }
                      }).fullPath,
                      theme: "text",
                      class: normalizeClass([_ctx.$style["table-link"], _ctx.$style["project-link"]]),
                      "new-window": true
                    }, {
                      default: withCtx(() => [
                        item2.homeProject ? (openBlock(), createBlock(ProjectIcon, {
                          key: 0,
                          icon: getProjectIcon(item2),
                          "border-less": true
                        }, null, 8, ["icon"])) : createCommentVNode("", true),
                        createVNode(unref(N8nText), { "data-test-id": "mcp-workflow-project-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getProjectName(item2)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(N8nIcon), {
                          icon: "external-link",
                          class: normalizeClass(_ctx.$style["link-icon"]),
                          color: "text-light"
                        }, null, 8, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["to", "class"])
                  ], 2)) : (openBlock(), createBlock(unref(N8nText), {
                    key: 1,
                    "data-test-id": "mcp-workflow-no-project"
                  }, {
                    default: withCtx(() => _cache[1] || (_cache[1] = [
                      createTextVNode("-")
                    ])),
                    _: 1
                  }))
                ]),
                [`item.active`]: withCtx(({ item: item2 }) => [
                  createVNode(unref(N8nIcon), {
                    icon: item2.active ? "check" : "x",
                    size: 16,
                    color: item2.active ? "success" : "danger"
                  }, null, 8, ["icon", "color"])
                ]),
                [`item.actions`]: withCtx(({ item: item2 }) => [
                  createVNode(unref(N8nActionToggle), {
                    placement: "bottom",
                    actions: tableActions.value,
                    theme: "dark",
                    onAction: ($event) => onWorkflowAction($event, item2)
                  }, null, 8, ["actions", "onAction"])
                ]),
                _: 2
              }, 1032, ["class", "headers", "items", "items-length"]))
            ]))
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container = "_container_1ofc3_123";
const headingContainer = "_headingContainer_1ofc3_132";
const mainToggleContainer = "_mainToggleContainer_1ofc3_136";
const mainToggleInfo = "_mainToggleInfo_1ofc3_146";
const mainTooggle = "_mainTooggle_1ofc3_153";
const header = "_header_1ofc3_160";
const style0 = {
  container,
  headingContainer,
  mainToggleContainer,
  mainToggleInfo,
  mainTooggle,
  header,
  "workflow-table": "_workflow-table_1ofc3_166",
  "table-link": "_table-link_1ofc3_170",
  "link-icon": "_link-icon_1ofc3_178",
  "project-link": "_project-link_1ofc3_184",
  "folder-cell": "_folder-cell_1ofc3_191"
};
const cssModules = {
  "$style": style0
};
const SettingsMCPView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsMCPView as default
};
