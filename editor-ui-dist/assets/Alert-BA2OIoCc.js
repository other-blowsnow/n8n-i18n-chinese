import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, P as defineComponent, T as createBlock, at as renderSlot, c as useCssModule, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Hi as N8nIcon_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
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
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).content) }, [__props.showIcon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(unref($style).icon)
			}, [__props.showIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: icon$1.value
			}, null, 8, ["icon"])) : _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(unref($style).text) }, [_ctx.$slots.title || __props.title ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).title)
			}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])], 2)) : createCommentVNode("", true), _ctx.$slots.default || __props.description ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass({
					[unref($style).description]: true,
					[unref($style).hasTitle]: _ctx.$slots.title || __props.title
				})
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.description), 1)])], 2)) : createCommentVNode("", true)], 2)], 2), _ctx.$slots.aside ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).aside)
			}, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
const alert = "_alert_12843_125";
const center = "_center_12843_134";
const success = "_success_12843_137";
const light = "_light_12843_137";
const background = "_background_12843_140";
const dark = "_dark_12843_147";
const info = "_info_12843_157";
const warning = "_warning_12843_177";
const error = "_error_12843_197";
const content = "_content_12843_218";
const icon = "_icon_12843_223";
const text = "_text_12843_231";
const title = "_title_12843_237";
const description = "_description_12843_243";
const hasTitle = "_hasTitle_12843_246";
const aside = "_aside_12843_250";
var Alert_vue_vue_type_style_index_0_lang_module_default = {
	alert,
	center,
	success,
	light,
	background,
	"el-alert__description": "_el-alert__description_12843_144",
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
