import { L as Logo } from "./Logo-BLWB3gvb.js";
import { d as defineComponent, eA as useSSOStore, a as useToast, U as useRoute, h as resolveComponent, i as createElementBlock, f as createCommentVNode, m as unref, g as openBlock, n as normalizeClass, k as createBaseVNode, j as createVNode, t as toDisplayString, c as useI18n, _ as _export_sfc, v as useSettingsStore, w as withCtx, l as createTextVNode, e as createBlock, bK as mergeProps } from "./index-Y0sphpVt.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SSOLogin",
  setup(__props) {
    const i18n = useI18n();
    const ssoStore = useSSOStore();
    const toast = useToast();
    const route = useRoute();
    const onSSOLogin = async () => {
      try {
        const redirectUrl = ssoStore.isDefaultAuthenticationSaml ? await ssoStore.getSSORedirectUrl(
          typeof route.query?.redirect === "string" ? route.query.redirect : ""
        ) : ssoStore.oidc.loginUrl;
        window.location.href = redirectUrl ?? "";
      } catch (error) {
        toast.showError(error, "Error", error.message);
      }
    };
    return (_ctx, _cache) => {
      const _component_n8n_button = resolveComponent("n8n-button");
      return unref(ssoStore).showSsoLoginButton ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.ssoLogin)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.divider)
        }, [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)
        ], 2),
        createVNode(_component_n8n_button, {
          size: "large",
          type: "primary",
          outline: "",
          label: unref(i18n).baseText("sso.login.button"),
          onClick: onSSOLogin
        }, null, 8, ["label"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const ssoLogin = "_ssoLogin_krsnh_123";
const divider = "_divider_krsnh_127";
const style0$1 = {
  ssoLogin,
  divider
};
const cssModules$1 = {
  "$style": style0$1
};
const SSOLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthView",
  props: {
    form: {},
    formLoading: { type: Boolean, default: false },
    subtitle: {},
    withSso: { type: Boolean, default: false }
  },
  emits: ["update", "submit", "secondaryClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const onUpdate = (e) => {
      emit("update", e);
    };
    const onSubmit = (values) => {
      emit("submit", values);
    };
    const onSecondaryClick = () => {
      emit("secondaryClick");
    };
    const {
      settings: { releaseChannel }
    } = useSettingsStore();
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_form_box = resolveComponent("n8n-form-box");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(Logo, {
          location: "authView",
          "release-channel": unref(releaseChannel)
        }, null, 8, ["release-channel"]),
        _ctx.subtitle ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.textContainer)
        }, [
          createVNode(_component_n8n_text, { size: "large" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.subtitle), 1)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.formContainer)
        }, [
          createVNode(_component_n8n_form_box, mergeProps(_ctx.form, {
            "data-test-id": "auth-form",
            "button-loading": _ctx.formLoading,
            onSecondaryClick,
            onSubmit,
            onUpdate
          }), {
            default: withCtx(() => [
              _ctx.withSso ? (openBlock(), createBlock(SSOLogin, { key: 0 })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 16, ["button-loading"])
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_1vfzm_127";
const textContainer = "_textContainer_1vfzm_137";
const formContainer = "_formContainer_1vfzm_141";
const style0 = {
  container,
  textContainer,
  formContainer
};
const cssModules = {
  "$style": style0
};
const AuthView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  AuthView as A
};
