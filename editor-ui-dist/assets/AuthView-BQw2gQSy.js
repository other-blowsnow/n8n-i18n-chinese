import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, U as mergeProps, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-Cx-W4qgg.js";
import { $ as N8nLogo_default, Ja as N8nButton_default, gt as useRoute, ot as N8nFormBox_default, qa as N8nText_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-BSzM4LgJ.js";
import { t as useSettingsStore } from "./settings.store-fzkHYqQC.js";
import { n as useSSOStore } from "./sso.store-BbyVKMhn.js";
//#region src/features/settings/sso/components/SSOLogin.vue?vue&type=script&setup=true&lang.ts
var SSOLogin_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SSOLogin",
	setup(__props) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const toast = useToast();
		const route = useRoute();
		const onSSOLogin = async () => {
			try {
				const redirectUrl = ssoStore.isDefaultAuthenticationSaml ? await ssoStore.getSSORedirectUrl(typeof route.query?.redirect === "string" ? route.query.redirect : "") : ssoStore.oidc.loginUrl;
				window.location.href = redirectUrl ?? "";
			} catch (error) {
				toast.showError(error, "Error", { message: error.message });
			}
		};
		return (_ctx, _cache) => {
			return unref(ssoStore).showSsoLoginButton ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.ssoLogin)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.divider) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)], 2), createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "large",
				label: unref(i18n).baseText("sso.login.button"),
				onClick: onSSOLogin
			}, null, 8, ["label"])], 2)) : createCommentVNode("", true);
		};
	}
});
var SSOLogin_vue_vue_type_style_index_0_lang_module_default = {
	ssoLogin: "_ssoLogin_16f3z_125",
	divider: "_divider_16f3z_133"
};
var SSOLogin_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SSOLogin_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SSOLogin_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/auth/views/AuthView.vue?vue&type=script&setup=true&lang.ts
var AuthView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AuthView",
	props: {
		form: {},
		formLoading: {
			type: Boolean,
			default: false
		},
		subtitle: {},
		withSso: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update",
		"submit",
		"secondaryClick"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const onUpdate = (e) => {
			emit("update", e);
		};
		const onSubmit = (data) => {
			emit("submit", data);
		};
		const onSecondaryClick = () => {
			emit("secondaryClick");
		};
		const { settings: { releaseChannel } } = useSettingsStore();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nLogo_default), {
					size: "large",
					"release-channel": unref(releaseChannel)
				}, null, 8, ["release-channel"]),
				__props.subtitle ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.textContainer)
				}, [createVNode(unref(N8nText_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subtitle), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.formContainer) }, [createVNode(unref(N8nFormBox_default), mergeProps(__props.form, {
					"data-test-id": "auth-form",
					"button-loading": __props.formLoading,
					onSecondaryClick,
					onSubmit,
					onUpdate
				}), {
					default: withCtx(() => [__props.withSso ? (openBlock(), createBlock(SSOLogin_default, { key: 0 })) : createCommentVNode("", true)]),
					_: 1
				}, 16, ["button-loading"])], 2)
			], 2);
		};
	}
});
var AuthView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_fdp0w_129",
	textContainer: "_textContainer_fdp0w_139",
	formContainer: "_formContainer_fdp0w_143"
};
var AuthView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AuthView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AuthView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AuthView_default as t };
