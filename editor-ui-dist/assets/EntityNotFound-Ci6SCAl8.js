import { D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-It4eafc2.js";
import { Fn as N8nText_default, In as N8nButton_default, Nn as N8nHeading_default, X as N8nCard_default } from "./src-CrJGxD3z.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DHb0OvjC.js";
import "./icon-Bx8huFc-.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
var _hoisted_1 = { class: "entity-not-found-view" };
var EntityNotFound_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "EntityNotFound",
	props: { entityType: {} },
	setup(__props) {
		const locale = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nCard_default), { class: "entity-card" }, {
				default: withCtx(() => [
					_cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-center mb-l" }, [createBaseVNode("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none"
					}, [
						createBaseVNode("circle", {
							cx: "12",
							cy: "12",
							r: "10",
							stroke: "var(--text-button--color--text--secondary)",
							"stroke-width": "2"
						}),
						createBaseVNode("rect", {
							x: "11",
							y: "6",
							width: "2",
							height: "8",
							fill: "var(--text-button--color--text--secondary)"
						}),
						createBaseVNode("rect", {
							x: "11",
							y: "16",
							width: "2",
							height: "2",
							fill: "var(--text-button--color--text--secondary)"
						})
					])], -1)),
					createVNode(unref(N8nHeading_default), {
						size: "xlarge",
						align: "center",
						tag: "h2",
						color: "text-dark",
						class: "mb-2xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.title", { interpolate: { entity: unref(locale).baseText(`generic.${_ctx.entityType}`) } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						color: "text-base",
						tag: "p",
						align: "center",
						class: "mb-m"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.text", { interpolate: { entity: unref(locale).baseText(`generic.${_ctx.entityType}`).toLocaleLowerCase() } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						href: "/",
						element: "a",
						type: "secondary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.action")), 1)]),
						_: 1
					})
				]),
				_: 1
			})]);
		};
	}
}), [["__scopeId", "data-v-3728e992"]]);
export { EntityNotFound_default as default };
