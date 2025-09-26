import { _ as __unplugin_components_5 } from "./PageViewLayout-CMnOxmLP.js";
import { d as defineComponent, ae as useNodeTypesStore, bn as useCalloutHelpers, x as computed, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, m as N8nHeading, k as createTextVNode, t as toDisplayString, l as unref, c as useI18n, C as N8nLink, V as VIEWS, h as createElementBlock, F as Fragment, A as renderList, s as N8nCard, g8 as NodeCreatorNode, bs as createSlots, bY as NodeIcon, _ as _export_sfc } from "./index-B7kv83gZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PrebuiltAgentTemplatesView",
  setup(__props) {
    const nodeTypesStore = useNodeTypesStore();
    const i18n = useI18n();
    const calloutHelpers = useCalloutHelpers();
    const preBuiltAgents = computed(
      () => calloutHelpers.getPreBuiltAgentNodeCreatorItems()
    );
    const tutorials2 = computed(
      () => calloutHelpers.getTutorialTemplatesNodeCreatorItems()
    );
    const openTemplate = (templateId) => {
      calloutHelpers.openSampleWorkflowTemplate(templateId, {
        telemetry: {
          source: "templates"
        }
      });
    };
    onMounted(async () => {
      await nodeTypesStore.loadNodeTypesIfNotLoaded();
    });
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_N8nLink = N8nLink;
      const _component_NodeIcon = NodeIcon;
      const _component_N8nNodeCreatorNode = NodeCreatorNode;
      const _component_N8nCard = N8nCard;
      const _component_PageViewLayout = __unplugin_components_5;
      return openBlock(), createBlock(_component_PageViewLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createBaseVNode("section", {
              class: normalizeClass(_ctx.$style.section)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [
                createVNode(_component_N8nHeading, {
                  tag: "h2",
                  bold: "",
                  size: "xlarge"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_N8nLink, {
                  to: { name: unref(VIEWS).TEMPLATES },
                  underline: "",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.viewAllLink")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.grid)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(preBuiltAgents.value, (template) => {
                  return openBlock(), createBlock(_component_N8nCard, {
                    key: template.key,
                    class: normalizeClass(_ctx.$style.card),
                    onClick: ($event) => openTemplate(template.properties.templateId)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_N8nNodeCreatorNode, {
                        class: normalizeClass(_ctx.$style.templateLink),
                        title: template.properties.title,
                        description: template.properties.description,
                        tag: template.properties.tag,
                        "show-action-arrow": true,
                        "is-trigger": false,
                        "hide-node-icon": true
                      }, createSlots({ _: 2 }, [
                        template.properties.nodes ? {
                          name: "extraDetails",
                          fn: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(template.properties.nodes, (node) => {
                              return openBlock(), createBlock(_component_NodeIcon, {
                                key: node.name,
                                "node-type": node,
                                size: 16,
                                "show-tooltip": true
                              }, null, 8, ["node-type"]);
                            }), 128))
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["class", "title", "description", "tag"])
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"]);
                }), 128))
              ], 2)
            ], 2),
            createBaseVNode("section", {
              class: normalizeClass(_ctx.$style.section)
            }, [
              createVNode(_component_N8nHeading, {
                tag: "h2",
                bold: "",
                size: "xlarge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.tutorials")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tutorials)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(tutorials2.value, (template) => {
                  return openBlock(), createBlock(_component_N8nCard, {
                    key: template.key,
                    class: normalizeClass(_ctx.$style.card),
                    onClick: ($event) => openTemplate(template.properties.templateId)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_N8nNodeCreatorNode, {
                        class: normalizeClass(_ctx.$style.templateLink),
                        title: template.properties.title,
                        description: template.properties.description,
                        tag: template.properties.tag,
                        "show-action-arrow": true,
                        "is-trigger": false,
                        "hide-node-icon": true
                      }, createSlots({ _: 2 }, [
                        template.properties.nodes ? {
                          name: "extraDetails",
                          fn: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(template.properties.nodes, (node) => {
                              return openBlock(), createBlock(_component_NodeIcon, {
                                key: node.name,
                                "node-type": node,
                                size: 16,
                                "show-tooltip": true
                              }, null, 8, ["node-type"]);
                            }), 128))
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["class", "title", "description", "tag"])
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"]);
                }), 128))
              ], 2)
            ], 2),
            createVNode(_component_N8nLink, {
              to: { name: unref(VIEWS).TEMPLATES },
              underline: "",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.viewAllLink")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const content = "_content_13cuf_123";
const header = "_header_13cuf_131";
const section = "_section_13cuf_137";
const grid = "_grid_13cuf_143";
const card = "_card_13cuf_155";
const tutorials = "_tutorials_13cuf_162";
const templateLink = "_templateLink_13cuf_170";
const style0 = {
  content,
  header,
  section,
  grid,
  card,
  tutorials,
  templateLink
};
const cssModules = {
  "$style": style0
};
const PrebuiltAgentTemplatesView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  PrebuiltAgentTemplatesView as default
};
