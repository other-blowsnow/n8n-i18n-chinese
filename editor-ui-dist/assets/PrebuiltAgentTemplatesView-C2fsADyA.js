import { d as defineComponent, ae as useNodeTypesStore, bm as useCalloutHelpers, x as computed, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, k as unref, m as N8nHeading, l as createTextVNode, t as toDisplayString, c as useI18n, C as N8nLink, V as VIEWS, h as createElementBlock, F as Fragment, A as renderList, s as N8nCard, gT as NodeCreatorNode, b_ as createSlots, c8 as NodeIcon, _ as _export_sfc } from "./index-lkSN61-i.js";
import { P as PageViewLayout } from "./PageViewLayout-CwSpNark.js";
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
      return openBlock(), createBlock(PageViewLayout, null, {
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
                createVNode(unref(N8nHeading), {
                  tag: "h2",
                  bold: "",
                  size: "xlarge"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(N8nLink), {
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
                  return openBlock(), createBlock(unref(N8nCard), {
                    key: template.key,
                    class: normalizeClass(_ctx.$style.card),
                    onClick: ($event) => openTemplate(template.properties.templateId)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NodeCreatorNode), {
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
                              return openBlock(), createBlock(NodeIcon, {
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
              createVNode(unref(N8nHeading), {
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
                  return openBlock(), createBlock(unref(N8nCard), {
                    key: template.key,
                    class: normalizeClass(_ctx.$style.card),
                    onClick: ($event) => openTemplate(template.properties.templateId)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NodeCreatorNode), {
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
                              return openBlock(), createBlock(NodeIcon, {
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
            createVNode(unref(N8nLink), {
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
const content = "_content_1jt4v_123";
const header = "_header_1jt4v_131";
const section = "_section_1jt4v_137";
const grid = "_grid_1jt4v_143";
const card = "_card_1jt4v_155";
const tutorials = "_tutorials_1jt4v_162";
const templateLink = "_templateLink_1jt4v_170";
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
