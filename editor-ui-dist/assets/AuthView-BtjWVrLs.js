import { D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { In as N8nText_default, L as N8nFormBox_default, Ln as N8nButton_default, M as N8nLogo_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRoute } from "./truncate-1c7Iwk7N.js";
import { Bo as useSettingsStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { n as useSSOStore } from "./sso.store-lozzT1xX.js";
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
				toast.showError(error, "Error", error.message);
			}
		};
		return (_ctx, _cache) => {
			return unref(ssoStore).showSsoLoginButton ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.ssoLogin)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.divider) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)], 2), createVNode(unref(N8nButton_default), {
				size: "large",
				type: "primary",
				outline: "",
				label: unref(i18n).baseText("sso.login.button"),
				onClick: onSSOLogin
			}, null, 8, ["label"])], 2)) : createCommentVNode("", true);
		};
	}
});
var SSOLogin_vue_vue_type_style_index_0_lang_module_default = {
	ssoLogin: "_ssoLogin_8gepk_123",
	divider: "_divider_8gepk_127"
};
var SSOLogin_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SSOLogin_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SSOLogin_vue_vue_type_style_index_0_lang_module_default }]]);
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
				_ctx.subtitle ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.textContainer)
				}, [createVNode(unref(N8nText_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.subtitle), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.formContainer) }, [createVNode(unref(N8nFormBox_default), mergeProps(_ctx.form, {
					"data-test-id": "auth-form",
					"button-loading": _ctx.formLoading,
					onSecondaryClick,
					onSubmit,
					onUpdate
				}), {
					default: withCtx(() => [_ctx.withSso ? (openBlock(), createBlock(SSOLogin_default, { key: 0 })) : createCommentVNode("", true)]),
					_: 1
				}, 16, ["button-loading"])], 2)
			], 2);
		};
	}
});
var AuthView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_nroon_127",
	textContainer: "_textContainer_nroon_137",
	formContainer: "_formContainer_nroon_141"
};
var AuthView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AuthView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AuthView_vue_vue_type_style_index_0_lang_module_default }]]);
export { AuthView_default as t };
