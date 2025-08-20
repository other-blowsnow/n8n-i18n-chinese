import { d as defineComponent, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, j as createBaseVNode, l as unref, m as N8nHeading, k as createTextVNode, t as toDisplayString, c as useI18n, p as N8nText, s as N8nCard, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _hoisted_1 = { class: "entity-un-authorized-view" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EntityUnAuthorised",
  props: {
    entityType: {}
  },
  setup(__props) {
    const locale = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(N8nCard), { class: "entity-card" }, {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-center mb-l" }, [
              createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                createBaseVNode("path", {
                  d: "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z",
                  stroke: "var(--color-text-button-secondary-font)",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createBaseVNode("path", {
                  d: "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11",
                  stroke: "var(--color-text-button-secondary-font)",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])
            ], -1)),
            createVNode(unref(N8nHeading), {
              size: "xlarge",
              align: "center",
              tag: "h2",
              color: "text-dark",
              class: "mb-2xs"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("error.entityUnAuthorized.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              color: "text-base",
              tag: "p",
              align: "center"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("error.entityUnAuthorized.content", {
                  interpolate: { entity: unref(locale).baseText(`generic.${_ctx.entityType}`).toLocaleLowerCase() }
                })), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const EntityUnAuthorised = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7878188e"]]);
export {
  EntityUnAuthorised as default
};
