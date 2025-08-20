import { d as defineComponent, h as createElementBlock, g as openBlock, n as normalizeClass, f as createCommentVNode, j as createBaseVNode, Q as renderSlot, i as createVNode, l as unref, m as N8nHeading, w as withCtx, k as createTextVNode, t as toDisplayString, d_ as N8nFormInputs, dZ as createFormEventBus, e as createBlock, C as N8nLink, q as N8nButton, _ as _export_sfc, dX as useSSOStore, a as useToast, aa as useRoute, c as useI18n, v as useSettingsStore, p as N8nText, K as mergeProps } from "./index-BsWH3eYA.js";
import { L as Logo } from "./Logo-3Q4x55pp.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nFormBox" },
  __name: "FormBox",
  props: {
    title: { default: "" },
    inputs: { default: () => [] },
    buttonText: {},
    buttonLoading: { type: Boolean, default: false },
    secondaryButtonText: {},
    redirectText: { default: "" },
    redirectLink: { default: "" }
  },
  emits: ["submit", "update", "secondaryClick"],
  setup(__props, { emit: __emit }) {
    const formBus = createFormEventBus();
    const emit = __emit;
    const onUpdateModelValue = (e) => emit("update", e);
    const onSubmit = (e) => emit("submit", e);
    const onButtonClick = () => formBus.emit("submit");
    const onSecondaryButtonClick = (event) => emit("secondaryClick", event);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["n8n-form-box", _ctx.$style.container])
      }, [
        _ctx.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.heading)
        }, [
          createVNode(unref(N8nHeading), { size: "xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.inputsContainer)
        }, [
          createVNode(unref(N8nFormInputs), {
            inputs: _ctx.inputs,
            "event-bus": unref(formBus),
            "column-view": true,
            onUpdate: onUpdateModelValue,
            onSubmit
          }, null, 8, ["inputs", "event-bus"])
        ], 2),
        _ctx.secondaryButtonText || _ctx.buttonText ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.buttonsContainer)
        }, [
          _ctx.secondaryButtonText ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(_ctx.$style.secondaryButtonContainer)
          }, [
            createVNode(unref(N8nLink), {
              size: "medium",
              theme: "text",
              onClick: onSecondaryButtonClick
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.secondaryButtonText), 1)
              ]),
              _: 1
            })
          ], 2)) : createCommentVNode("", true),
          _ctx.buttonText ? (openBlock(), createBlock(unref(N8nButton), {
            key: 1,
            label: _ctx.buttonText,
            loading: _ctx.buttonLoading,
            "data-test-id": "form-submit-button",
            size: "large",
            onClick: onButtonClick
          }, null, 8, ["label", "loading"])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.actionContainer)
        }, [
          _ctx.redirectText && _ctx.redirectLink ? (openBlock(), createBlock(unref(N8nLink), {
            key: 0,
            to: _ctx.redirectLink
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.redirectText), 1)
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true)
        ], 2),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const heading = "_heading_lts7p_123";
const container$1 = "_container_lts7p_129";
const inputsContainer = "_inputsContainer_lts7p_137";
const actionContainer = "_actionContainer_lts7p_141";
const buttonsContainer = "_buttonsContainer_lts7p_146 _actionContainer_lts7p_141";
const secondaryButtonContainer = "_secondaryButtonContainer_lts7p_151";
const withLabel = "_withLabel_lts7p_157";
const style0$2 = {
  heading,
  container: container$1,
  inputsContainer,
  actionContainer,
  buttonsContainer,
  secondaryButtonContainer,
  withLabel
};
const cssModules$2 = {
  "$style": style0$2
};
const N8nFormBox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
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
      const _component_N8nButton = N8nButton;
      return unref(ssoStore).showSsoLoginButton ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.$style.ssoLogin)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.divider)
        }, [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)
        ], 2),
        createVNode(_component_N8nButton, {
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
    const onSubmit = (data) => {
      emit("submit", data);
    };
    const onSecondaryClick = () => {
      emit("secondaryClick");
    };
    const {
      settings: { releaseChannel }
    } = useSettingsStore();
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      const _component_N8nFormBox = N8nFormBox;
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
          createVNode(_component_N8nText, { size: "large" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.subtitle), 1)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.formContainer)
        }, [
          createVNode(_component_N8nFormBox, mergeProps(_ctx.form, {
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
