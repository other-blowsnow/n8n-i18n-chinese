;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./useTelemetry-legacy-BdQlQKwu.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./TimeAgo-legacy-DZ56LCYg.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, withCtx, openBlock, withModifiers, renderList, createTextVNode, createBaseVNode, useI18n, N8nText_default, N8nButton_default, N8nHeading_default, N8nLoading_default, N8nIcon_default, __plugin_vue_export_helper_default, filterTemplateNodes, abbreviateNumber, NodeIcon_default, TimeAgo_default, __vite_style__, NodeList_vue_vue_type_script_setup_true_lang_default, list, container, sm, md, button$1, buttonSm, buttonMd, NodeList_vue_vue_type_style_index_0_lang_module_default, cssModules$2, NodeList_default, _hoisted_1$1, _hoisted_2$1, nodesToBeShown, TemplateCard_vue_vue_type_script_setup_true_lang_default, nodes$1, icon, card, hideOnHover, buttonContainer, loaded, first, last, content, line, loading, nodesContainer, TemplateCard_vue_vue_type_style_index_0_lang_module_default, cssModules$1, TemplateCard_default, _hoisted_1, _hoisted_2, _hoisted_3, TemplateList_vue_vue_type_script_setup_true_lang_default, header, workflowButton, button, nodes, TemplateList_vue_vue_type_style_index_0_lang_module_default, cssModules, TemplateList_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        filterTemplateNodes = _useTelemetryLegacy00FJs.Vr;
        abbreviateNumber = _useTelemetryLegacy00FJs.li;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_TimeAgoLegacy02HJs) {
        TimeAgo_default = _TimeAgoLegacy02HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._list_4d2c7_123 {\n  max-width: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n._container_4d2c7_131 {\n  position: relative;\n  display: block;\n}\n._sm_4d2c7_136 {\n  margin-left: var(--spacing--2xs);\n}\n._md_4d2c7_140 {\n  margin-left: var(--spacing--xs);\n}\n._button_4d2c7_144 {\n  top: 0;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--color--background--light-2);\n  border: 1px var(--color--foreground) solid;\n  border-radius: var(--radius);\n  font-size: 10px;\n  font-weight: var(--font-weight--bold);\n  color: var(--color--text);\n}\n._buttonSm_4d2c7_158 {\n  margin-left: var(--spacing--2xs);\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n}\n._buttonMd_4d2c7_165 {\n  margin-left: var(--spacing--xs);\n  width: 24px;\n  min-width: 24px;\n  height: 24px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodes_9we9y_123 {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: row;\n}\n._icon_9we9y_130 {\n  margin-left: var(--spacing--xs);\n}\n._card_9we9y_134 {\n  position: relative;\n  border-left: var(--border);\n  border-right: var(--border);\n  border-bottom: var(--border);\n  background-color: var(--color--background--light-3);\n  display: flex;\n  align-items: center;\n  padding: 0 var(--spacing--sm) var(--spacing--sm) var(--spacing--sm);\n  background-color: var(--color--background--light-3);\n  cursor: pointer;\n}\n._card_9we9y_134:hover ._hideOnHover_9we9y_146 {\n  visibility: hidden;\n}\n._card_9we9y_134:hover ._buttonContainer_9we9y_149 {\n  display: block;\n}\n._buttonContainer_9we9y_149 {\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 30%;\n}\n._loaded_9we9y_160 {\n  padding-top: var(--spacing--sm);\n}\n._first_9we9y_164 {\n  border-top: var(--border);\n  border-top-right-radius: var(--radius--lg);\n  border-top-left-radius: var(--radius--lg);\n}\n._last_9we9y_170 {\n  border-bottom-right-radius: var(--radius--lg);\n  border-bottom-left-radius: var(--radius--lg);\n}\n._content_9we9y_175 {\n  display: flex;\n  align-items: center;\n}\n._line_9we9y_180 {\n  padding: 0 6px;\n  color: var(--color--foreground);\n  font-size: var(--font-size--2xs);\n}\n._loading_9we9y_186 {\n  width: 100%;\n  background-color: var(--color--background--light-3);\n}\n._nodesContainer_9we9y_191 {\n  min-width: 175px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-grow: 1;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._header_ff02l_123 {\n  padding-bottom: var(--spacing--2xs);\n}\n._workflowButton_ff02l_127:hover ._button_ff02l_127 {\n  display: block;\n}\n._workflowButton_ff02l_127:hover ._nodes_ff02l_130 {\n  display: none;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/NodeList.vue?vue&type=script&setup=true&lang.ts
        NodeList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeList",
          props: {
            nodes: {},
            limit: {
              default: 4
            },
            size: {
              default: "sm"
            }
          },
          setup(__props) {
            const props = __props;
            const filteredCoreNodes = computed(() => {
              return filterTemplateNodes(props.nodes);
            });
            const hiddenNodes = computed(() => {
              return filteredCoreNodes.value.length - countNodesToBeSliced(filteredCoreNodes.value);
            });
            const slicedNodes = computed(() => {
              return filteredCoreNodes.value.slice(0, countNodesToBeSliced(filteredCoreNodes.value));
            });
            const countNodesToBeSliced = nodes$2 => {
              if (nodes$2.length > props.limit) return props.limit - 1;else return props.limit;
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.list)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(slicedNodes.value, node => {
                return openBlock(), createElementBlock("div", {
                  key: node.name,
                  class: normalizeClass([_ctx.$style.container, _ctx.$style[_ctx.size]])
                }, [createVNode(NodeIcon_default, {
                  "node-type": node,
                  size: _ctx.size === "md" ? 24 : 18,
                  "show-tooltip": true
                }, null, 8, ["node-type", "size"])], 2);
              }), 128)), filteredCoreNodes.value.length > _ctx.limit + 1 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.$style.button, _ctx.size === "md" ? _ctx.$style.buttonMd : _ctx.$style.buttonSm])
              }, " +" + toDisplayString(hiddenNodes.value), 3)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/NodeList.vue?vue&type=style&index=0&lang.module.scss
        list = "_list_4d2c7_123";
        container = "_container_4d2c7_131";
        sm = "_sm_4d2c7_136";
        md = "_md_4d2c7_140";
        button$1 = "_button_4d2c7_144";
        buttonSm = "_buttonSm_4d2c7_158";
        buttonMd = "_buttonMd_4d2c7_165";
        NodeList_vue_vue_type_style_index_0_lang_module_default = {
          list,
          container,
          sm,
          md,
          button: button$1,
          buttonSm,
          buttonMd
        }; //#endregion
        //#region src/app/components/NodeList.vue
        cssModules$2 = {
          "$style": NodeList_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", NodeList_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]])); //#endregion
        //#region src/features/workflows/templates/components/TemplateCard.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 1
        };
        _hoisted_2$1 = {
          key: 0
        };
        nodesToBeShown = 5;
        TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateCard",
          props: {
            workflow: {},
            lastItem: {
              type: Boolean,
              default: false
            },
            firstItem: {
              type: Boolean,
              default: false
            },
            useWorkflowButton: {
              type: Boolean,
              default: false
            },
            loading: {
              type: Boolean,
              default: false
            },
            simpleView: {
              type: Boolean,
              default: false
            }
          },
          emits: ["useWorkflow", "click"],
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const emit = __emit;
            function onUseWorkflowClick(e) {
              emit("useWorkflow", e);
            }
            function onCardClick(e) {
              emit("click", e);
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.card, _ctx.lastItem && _ctx.$style.last, _ctx.firstItem && _ctx.$style.first, !_ctx.loading && _ctx.$style.loaded]),
                "data-test-id": "template-card",
                onClick: onCardClick
              }, [_ctx.loading ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.loading)
              }, [createVNode(unref(N8nLoading_default), {
                rows: 2,
                "shrink-last": false,
                loading: _ctx.loading
              }, null, 8, ["loading"])], 2)) : _ctx.workflow ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nHeading_default), {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.workflow.name), 1)]),
                _: 1
              }), !_ctx.simpleView ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.content)
              }, [_ctx.workflow.totalViews ? (openBlock(), createElementBlock("span", _hoisted_2$1, [createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "eye",
                  size: "xsmall"
                }), createTextVNode(" " + toDisplayString(unref(abbreviateNumber)(_ctx.workflow.totalViews)), 1)]),
                _: 1
              })])) : createCommentVNode("", true), _ctx.workflow.totalViews ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.line),
                textContent: "|"
              }, null, 2)) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createVNode(TimeAgo_default, {
                  date: _ctx.workflow.createdAt
                }, null, 8, ["date"])]),
                _: 1
              }), _ctx.workflow.user ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.line),
                textContent: "|"
              }, null, 2)) : createCommentVNode("", true), _ctx.workflow.user ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 3,
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.byAuthor", {
                  interpolate: {
                    name: _ctx.workflow.user.username
                  }
                })), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true), !_ctx.loading && _ctx.workflow ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass([_ctx.$style.nodesContainer, _ctx.useWorkflowButton && _ctx.$style.hideOnHover])
              }, [_ctx.workflow.nodes ? (openBlock(), createBlock(NodeList_default, {
                key: 0,
                nodes: _ctx.workflow.nodes,
                limit: nodesToBeShown,
                size: "md"
              }, null, 8, ["nodes"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), _ctx.useWorkflowButton ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(_ctx.$style.buttonContainer)
              }, [_ctx.useWorkflowButton ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                outline: "",
                label: "Use workflow",
                "data-test-id": "use-workflow-button",
                onClick: withModifiers(onUseWorkflowClick, ["stop"])
              })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/TemplateCard.vue?vue&type=style&index=0&lang.module.scss
        nodes$1 = "_nodes_9we9y_123";
        icon = "_icon_9we9y_130";
        card = "_card_9we9y_134";
        hideOnHover = "_hideOnHover_9we9y_146";
        buttonContainer = "_buttonContainer_9we9y_149";
        loaded = "_loaded_9we9y_160";
        first = "_first_9we9y_164";
        last = "_last_9we9y_170";
        content = "_content_9we9y_175";
        line = "_line_9we9y_180";
        loading = "_loading_9we9y_186";
        nodesContainer = "_nodesContainer_9we9y_191";
        TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
          nodes: nodes$1,
          icon,
          card,
          hideOnHover,
          buttonContainer,
          loaded,
          first,
          last,
          content,
          line,
          loading,
          nodesContainer
        }; //#endregion
        //#region src/features/workflows/templates/components/TemplateCard.vue
        cssModules$1 = {
          "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default
        };
        TemplateCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/workflows/templates/components/TemplateList.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0,
          "data-test-id": "template-count-label"
        };
        _hoisted_2 = ["textContent"];
        _hoisted_3 = {
          key: 1,
          "data-test-id": "templates-loading-container"
        };
        TemplateList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateList",
          props: {
            workflows: {
              default: () => []
            },
            infiniteScrollEnabled: {
              type: Boolean,
              default: false
            },
            loading: {
              type: Boolean,
              default: false
            },
            useWorkflowButton: {
              type: Boolean,
              default: false
            },
            totalWorkflows: {
              default: 0
            },
            simpleView: {
              type: Boolean,
              default: false
            },
            totalCount: {
              default: 0
            }
          },
          emits: ["loadMore", "openTemplate", "useWorkflow"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const i18n = useI18n();
            const loader = ref(null);
            onMounted(() => {
              if (props.infiniteScrollEnabled) {
                const content$1 = document.getElementById("content");
                if (content$1) content$1.addEventListener("scroll", onScroll);
              }
            });
            onBeforeUnmount(() => {
              const content$1 = document.getElementById("content");
              if (content$1) content$1.removeEventListener("scroll", onScroll);
            });
            function onScroll() {
              const loaderRef = loader.value;
              if (!loaderRef || props.loading) return;
              const rect = loaderRef.getBoundingClientRect();
              if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) emit("loadMore");
            }
            function onCardClick(event, id) {
              emit("openTemplate", {
                event,
                id
              });
            }
            function onUseWorkflow(event, id) {
              emit("useWorkflow", {
                event,
                id
              });
            }
            return (_ctx, _cache) => {
              return _ctx.loading || _ctx.workflows.length ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.list)
              }, [!_ctx.simpleView ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                bold: true,
                size: "medium",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflows")) + " ", 1), _ctx.totalCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "(" + toDisplayString(_ctx.totalCount) + ")", 1)) : createCommentVNode("", true), !_ctx.loading && _ctx.totalWorkflows ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  textContent: toDisplayString(`(${_ctx.totalWorkflows})`)
                }, null, 8, _hoisted_2)) : createCommentVNode("", true)]),
                _: 1
              })], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.workflows, (workflow, index) => {
                return openBlock(), createBlock(TemplateCard_default, {
                  key: workflow.id,
                  workflow,
                  "first-item": index === 0,
                  "simple-view": _ctx.simpleView,
                  "last-item": index === _ctx.workflows.length - 1 && !_ctx.loading,
                  "use-workflow-button": _ctx.useWorkflowButton,
                  onClick: e => onCardClick(e, workflow.id),
                  onUseWorkflow: e => onUseWorkflow(e, workflow.id)
                }, null, 8, ["workflow", "first-item", "simple-view", "last-item", "use-workflow-button", "onClick", "onUseWorkflow"]);
              }), 128)), _ctx.infiniteScrollEnabled ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "loader",
                ref: loader
              }, null, 512)) : createCommentVNode("", true), _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [(openBlock(), createElementBlock(Fragment, null, renderList(4, n => {
                return createVNode(TemplateCard_default, {
                  key: "index-" + n,
                  loading: true,
                  "first-item": _ctx.workflows.length === 0 && n === 1,
                  "last-item": n === 4
                }, null, 8, ["first-item", "last-item"]);
              }), 64))])) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/TemplateList.vue?vue&type=style&index=0&lang.module.scss
        header = "_header_ff02l_123";
        workflowButton = "_workflowButton_ff02l_127";
        button = "_button_ff02l_127";
        nodes = "_nodes_ff02l_130";
        TemplateList_vue_vue_type_style_index_0_lang_module_default = {
          header,
          workflowButton,
          button,
          nodes
        }; //#endregion
        //#region src/features/workflows/templates/components/TemplateList.vue
        cssModules = {
          "$style": TemplateList_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", TemplateList_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();