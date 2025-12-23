import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, P as defineComponent, T as createBlock, at as renderSlot, c as useCssModule, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { Gn as N8nIcon_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
var Alert_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Alert",
	props: {
		title: {},
		type: { default: "info" },
		description: {},
		center: { type: Boolean },
		showIcon: {
			type: Boolean,
			default: true
		},
		effect: { default: "light" },
		background: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const icon$1 = computed(() => {
			switch (props.type) {
				case "success": return "circle-check";
				case "warning": return "triangle-alert";
				case "error": return "circle-x";
				default: return "info";
			}
		});
		const $style = useCssModule();
		const alertBoxClassNames = computed(() => {
			const classNames = ["n8n-alert", $style.alert];
			if (props.type) classNames.push($style[props.type]);
			if (props.effect) classNames.push($style[props.effect]);
			if (props.center) classNames.push($style.center);
			if (props.background) classNames.push($style.background);
			return classNames;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(alertBoxClassNames.value),
				role: "alert"
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).content) }, [_ctx.showIcon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(unref($style).icon)
			}, [_ctx.showIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: icon$1.value
			}, null, 8, ["icon"])) : _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(unref($style).text) }, [_ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).title)
			}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])], 2)) : createCommentVNode("", true), _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass({
					[unref($style).description]: true,
					[unref($style).hasTitle]: _ctx.$slots.title || _ctx.title
				})
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.description), 1)])], 2)) : createCommentVNode("", true)], 2)], 2), _ctx.$slots.aside ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).aside)
			}, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
const alert = "_alert_1o6w1_123";
const center = "_center_1o6w1_132";
const success = "_success_1o6w1_135";
const light = "_light_1o6w1_135";
const background = "_background_1o6w1_138";
const dark = "_dark_1o6w1_145";
const info = "_info_1o6w1_155";
const warning = "_warning_1o6w1_175";
const error = "_error_1o6w1_195";
const content = "_content_1o6w1_216";
const icon = "_icon_1o6w1_221";
const text = "_text_1o6w1_229";
const title = "_title_1o6w1_235";
const description = "_description_1o6w1_241";
const hasTitle = "_hasTitle_1o6w1_244";
const aside = "_aside_1o6w1_248";
var Alert_vue_vue_type_style_index_0_lang_module_default = {
	alert,
	center,
	success,
	light,
	background,
	"el-alert__description": "_el-alert__description_1o6w1_142",
	dark,
	info,
	warning,
	error,
	content,
	icon,
	text,
	title,
	description,
	hasTitle,
	aside
};
var Alert_default = /* @__PURE__ */ __plugin_vue_export_helper_default(Alert_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Alert_vue_vue_type_style_index_0_lang_module_default }]]);
export { Alert_default as t };
