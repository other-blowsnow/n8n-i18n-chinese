import { fg as makeRestApiRequest, a0 as defineStore, a2 as useWorkflowsStore, au as useRootStore, v as useSettingsStore, x as computed, hj as isWorkflowListItem, hk as MCP_STORE, d as defineComponent, ce as useClipboard, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, i as createVNode, t as toDisplayString, l as unref, c as useI18n, e as createBlock, f as createCommentVNode, q as N8nButton, k as createTextVNode, C as N8nLink, w as withCtx, eR as N8nMarkdown, p as N8nText, _ as _export_sfc, a as useToast, ay as useDocumentTitle, u as useUsersStore, r as ref, o as onMounted, a9 as resolveComponent, m as N8nHeading, aa as Tooltip, dS as N8nLoading, e4 as N8nActionBox, en as N8nActionToggle, N as N8nIcon, hl as router, V as VIEWS, fC as __unplugin_components_7, er as N8nDataTableServer, fB as isIconOrEmoji } from "./index-DgSMGi0-.js";
import { N as N8nInfoAccordion } from "./InfoAccordion-CcXn9sfW.js";
async function updateMcpSettings(context, enabled) {
  return await makeRestApiRequest(context, "PATCH", "/mcp/settings", {
    mcpAccessEnabled: enabled
  });
}
const useMCPStore = defineStore(MCP_STORE, () => {
  const workflowsStore = useWorkflowsStore();
  const rootStore = useRootStore();
  const settingsStore = useSettingsStore();
  const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
  async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
    const workflows = await workflowsStore.fetchWorkflowsPage(
      void 0,
      // projectId
      page,
      pageSize,
      "updatedAt:desc",
      { isArchived: false, availableInMCP: true },
      false,
      // includeFolders
      false
      // includeAllVersions
    );
    return workflows.filter(isWorkflowListItem);
  }
  async function setMcpAccessEnabled(enabled) {
    const { mcpAccessEnabled: updated } = await updateMcpSettings(
      rootStore.restApiContext,
      enabled
    );
    settingsStore.moduleSettings.mcp = {
      ...settingsStore.moduleSettings.mcp ?? {},
      mcpAccessEnabled: updated
    };
    return updated;
  }
  return {
    mcpAccessEnabled,
    fetchWorkflowsAvailableForMCP,
    setMcpAccessEnabled
  };
});
const MCP_ENDPOINT = "rest/mcp-control/http";
const DOCS_URL = "https://docs.n8n.io/";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MCPConnectionInstructions",
  props: {
    baseUrl: {}
  },
  setup(__props) {
    const props = __props;
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
        "authorization:Bearer <YOUR_N8N_API_KEY>"
      ]
    }
  }
}
`;
    });
    const connectionCode = computed(() => {
      return `\`\`\`json${connectionString2.value}\`\`\``;
    });
    const fullServerUrl = computed(() => {
      return props.baseUrl + MCP_ENDPOINT;
    });
    return (_ctx, _cache) => {
      const _component_N8nButton = N8nButton;
      const _component_N8nLink = N8nLink;
      const _component_N8nMarkdown = N8nMarkdown;
      const _component_N8nInfoAccordion = N8nInfoAccordion;
      const _component_N8nText = N8nText;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
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
              createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.url)
              }, [
                createBaseVNode("code", null, toDisplayString(fullServerUrl.value), 1),
                unref(isSupported) ? (openBlock(), createBlock(_component_N8nButton, {
                  key: 0,
                  type: "tertiary",
                  icon: unref(copied) ? "check" : "copy",
                  square: true,
                  class: normalizeClass(_ctx.$style["copy-url-button"]),
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(fullServerUrl.value))
                }, null, 8, ["icon", "class"])) : createCommentVNode("", true)
              ], 2)
            ], 2)
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.item)
            }, [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.label)
              }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.instructions.apiKey.part1")) + " ", 1),
                createVNode(_component_N8nLink, { to: "/settings/api" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("generic.apiKey")), 1)
                  ]),
                  _: 1
                }),
                createTextVNode(". " + toDisplayString(unref(i18n).baseText("settings.mcp.instructions.apiKey.part2")), 1)
              ], 2)
            ], 2)
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.connectionString)
        }, [
          createVNode(_component_N8nInfoAccordion, {
            title: unref(i18n).baseText("settings.mcp.instructions.json")
          }, {
            customContent: withCtx(() => [
              createVNode(_component_N8nMarkdown, { content: connectionCode.value }, null, 8, ["content"]),
              unref(isSupported) ? (openBlock(), createBlock(_component_N8nButton, {
                key: 0,
                type: "tertiary",
                icon: unref(copied) ? "check" : "copy",
                square: true,
                class: normalizeClass(_ctx.$style["copy-json-button"]),
                onClick: _cache[1] || (_cache[1] = ($event) => unref(copy)(connectionString2.value))
              }, null, 8, ["icon", "class"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["title"])
        ], 2),
        createVNode(_component_N8nText, {
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
const container$1 = "_container_1ngyt_123";
const instructions = "_instructions_1ngyt_128";
const item = "_item_1ngyt_135";
const label = "_label_1ngyt_140";
const url = "_url_1ngyt_143";
const connectionString = "_connectionString_1ngyt_167";
const style0$1 = {
  container: container$1,
  instructions,
  item,
  label,
  url,
  "copy-url-button": "_copy-url-button_1ngyt_154",
  connectionString,
  "copy-json-button": "_copy-json-button_1ngyt_178"
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
    const isOwner = computed(() => usersStore.isInstanceOwner);
    const rootStore = useRootStore();
    const workflowsLoading = ref(false);
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
        toast.showError(error, "Error fetching workflows");
      } finally {
        workflowsLoading.value = false;
      }
    };
    const onUpdateMCPEnabled = async (value) => {
      const updated = await mcpStore.setMcpAccessEnabled(value);
      if (updated) {
        await fetchAvailableWorkflows();
      } else {
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
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.mcp"));
      if (mcpStore.mcpAccessEnabled) await fetchAvailableWorkflows();
    });
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_N8nText = N8nText;
      const _component_ElSwitch = resolveComponent("ElSwitch");
      const _component_N8nTooltip = Tooltip;
      const _component_N8nLoading = N8nLoading;
      const _component_N8nActionBox = N8nActionBox;
      const _component_N8nIcon = N8nIcon;
      const _component_N8nLink = N8nLink;
      const _component_ProjectIcon = __unplugin_components_7;
      const _component_N8nActionToggle = N8nActionToggle;
      const _component_N8nDataTableServer = N8nDataTableServer;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.headingContainer)
        }, [
          createVNode(_component_N8nHeading, { size: "2xlarge" }, {
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
            createVNode(_component_N8nText, { bold: true }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.toggle.label")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_N8nText, {
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
            createVNode(_component_N8nTooltip, {
              content: unref(i18n).baseText("settings.mcp.toggle.disabled.tooltip"),
              disabled: isOwner.value,
              placement: "top"
            }, {
              default: withCtx(() => [
                createVNode(_component_ElSwitch, {
                  "model-value": unref(mcpStore).mcpAccessEnabled,
                  size: "large",
                  "data-test-id": "mcp-access-toggle",
                  disabled: !isOwner.value,
                  "onUpdate:modelValue": onUpdateMCPEnabled
                }, null, 8, ["model-value", "disabled"])
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
            createVNode(_component_N8nHeading, {
              size: "medium",
              bold: true
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connection.info.heading")), 1)
              ]),
              _: 1
            }),
            createVNode(MCPConnectionInstructions, {
              "base-url": unref(rootStore).urlBaseEditor
            }, null, 8, ["base-url"])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style["workflow-list-container"]),
            "data-test-id": "mcp-workflow-list"
          }, [
            workflowsLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              workflowsLoading.value ? (openBlock(), createBlock(_component_N8nLoading, {
                key: 0,
                loading: workflowsLoading.value,
                variant: "h1",
                class: "mb-l"
              }, null, 8, ["loading"])) : createCommentVNode("", true),
              workflowsLoading.value ? (openBlock(), createBlock(_component_N8nLoading, {
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
                createVNode(_component_N8nHeading, {
                  size: "medium",
                  bold: true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.available.workflows.heading")), 1)
                  ]),
                  _: 1
                })
              ], 2),
              availableWorkflows.value.length === 0 ? (openBlock(), createBlock(_component_N8nActionBox, {
                key: 0,
                "data-test-id": "empty-workflow-list-box",
                heading: unref(i18n).baseText("settings.mcp.empty.title"),
                description: unref(i18n).baseText("settings.mcp.empty.description")
              }, null, 8, ["heading", "description"])) : (openBlock(), createBlock(_component_N8nDataTableServer, {
                key: 1,
                class: normalizeClass(_ctx.$style["workflow-table"]),
                "data-test-id": "mcp-workflow-table",
                headers: tableHeaders.value,
                items: availableWorkflows.value,
                "items-length": availableWorkflows.value.length
              }, {
                [`item.name`]: withCtx(({ item: item2 }) => [
                  createVNode(_component_N8nLink, {
                    "new-window": true,
                    to: unref(router).resolve({
                      name: unref(VIEWS).WORKFLOW,
                      params: { name: item2.id }
                    }).fullPath,
                    theme: "text",
                    class: normalizeClass(_ctx.$style["table-link"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_N8nText, { "data-test-id": "mcp-workflow-name" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item2.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_N8nIcon, {
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
                    item2.homeProject ? (openBlock(), createBlock(_component_N8nLink, {
                      key: 0,
                      "data-test-id": "mcp-workflow-folder-link",
                      to: `/projects/${item2.homeProject.id}/folders/${item2.parentFolder.id}/workflows`,
                      theme: "text",
                      class: normalizeClass(_ctx.$style["table-link"]),
                      "new-window": true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_N8nText, { "data-test-id": "mcp-workflow-folder-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item2.parentFolder.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_N8nIcon, {
                          icon: "external-link",
                          class: normalizeClass(_ctx.$style["link-icon"]),
                          color: "text-light"
                        }, null, 8, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["to", "class"])) : (openBlock(), createElementBlock("span", _hoisted_3, [
                      item2.parentFolder ? (openBlock(), createBlock(_component_N8nIcon, {
                        key: 0,
                        icon: "folder",
                        size: 16,
                        color: "text-light"
                      })) : createCommentVNode("", true),
                      createVNode(_component_N8nText, { "data-test-id": "mcp-workflow-folder-name" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item2.parentFolder.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]))
                  ], 2)) : (openBlock(), createBlock(_component_N8nText, {
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
                    createVNode(_component_N8nLink, {
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
                        item2.homeProject ? (openBlock(), createBlock(_component_ProjectIcon, {
                          key: 0,
                          icon: getProjectIcon(item2),
                          "border-less": true
                        }, null, 8, ["icon"])) : createCommentVNode("", true),
                        createVNode(_component_N8nText, { "data-test-id": "mcp-workflow-project-name" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getProjectName(item2)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_N8nIcon, {
                          icon: "external-link",
                          class: normalizeClass(_ctx.$style["link-icon"]),
                          color: "text-light"
                        }, null, 8, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["to", "class"])
                  ], 2)) : (openBlock(), createBlock(_component_N8nText, {
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
                  createVNode(_component_N8nIcon, {
                    icon: item2.active ? "check" : "x",
                    size: 16,
                    color: item2.active ? "success" : "danger"
                  }, null, 8, ["icon", "color"])
                ]),
                [`item.actions`]: withCtx(({ item: item2 }) => [
                  createVNode(_component_N8nActionToggle, {
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
const container = "_container_he5p1_123";
const headingContainer = "_headingContainer_he5p1_132";
const mainToggleContainer = "_mainToggleContainer_he5p1_136";
const mainToggleInfo = "_mainToggleInfo_he5p1_146";
const mainTooggle = "_mainTooggle_he5p1_153";
const header = "_header_he5p1_160";
const style0 = {
  container,
  headingContainer,
  mainToggleContainer,
  mainToggleInfo,
  mainTooggle,
  header,
  "workflow-table": "_workflow-table_he5p1_166",
  "table-link": "_table-link_he5p1_170",
  "link-icon": "_link-icon_he5p1_178",
  "project-link": "_project-link_he5p1_184",
  "folder-cell": "_folder-cell_he5p1_191"
};
const cssModules = {
  "$style": style0
};
const SettingsMCPView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsMCPView as default
};
