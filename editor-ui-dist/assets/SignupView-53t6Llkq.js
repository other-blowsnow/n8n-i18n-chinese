import { A as AuthView } from "./AuthView-QjAlBaw0.js";
import { d as defineComponent, u as useUsersStore, a as useToast, b as useRouter, aa as useRoute, c as useI18n, r as ref, x as computed, o as onMounted, V as VIEWS, e as createBlock, g as openBlock } from "./index-BsWH3eYA.js";
import "./Logo-3Q4x55pp.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignupView",
  setup(__props) {
    const usersStore = useUsersStore();
    const toast = useToast();
    const i18n = useI18n();
    const router = useRouter();
    const route = useRoute();
    const FORM_CONFIG = {
      title: i18n.baseText("auth.signup.setupYourAccount"),
      buttonText: i18n.baseText("auth.signup.finishAccountSetup"),
      inputs: [
        {
          name: "firstName",
          properties: {
            label: i18n.baseText("auth.firstName"),
            maxlength: 32,
            required: true,
            autocomplete: "given-name",
            capitalize: true,
            focusInitially: true
          }
        },
        {
          name: "lastName",
          properties: {
            label: i18n.baseText("auth.lastName"),
            maxlength: 32,
            required: true,
            autocomplete: "family-name",
            capitalize: true
          }
        },
        {
          name: "password",
          properties: {
            label: i18n.baseText("auth.password"),
            type: "password",
            validationRules: [{ name: "DEFAULT_PASSWORD_RULES" }],
            required: true,
            infoText: i18n.baseText("auth.defaultPasswordRequirements"),
            autocomplete: "new-password",
            capitalize: true
          }
        },
        {
          name: "agree",
          properties: {
            label: i18n.baseText("auth.agreement.label"),
            type: "checkbox"
          }
        }
      ]
    };
    const loading = ref(false);
    const inviter = ref(null);
    const inviterId = ref(null);
    const inviteeId = ref(null);
    const inviteMessage = computed(() => {
      if (!inviter.value) {
        return "";
      }
      return i18n.baseText("settings.signup.signUpInviterInfo", {
        interpolate: { firstName: inviter.value.firstName, lastName: inviter.value.lastName }
      });
    });
    onMounted(async () => {
      const inviterIdParam = getQueryParameter("inviterId");
      const inviteeIdParam = getQueryParameter("inviteeId");
      try {
        if (!inviterIdParam || !inviteeIdParam) {
          throw new Error(i18n.baseText("auth.signup.missingTokenError"));
        }
        inviterId.value = inviterIdParam;
        inviteeId.value = inviteeIdParam;
        const invite = await usersStore.validateSignupToken({
          inviteeId: inviteeId.value,
          inviterId: inviterId.value
        });
        inviter.value = invite.inviter;
      } catch (e) {
        toast.showError(e, i18n.baseText("auth.signup.tokenValidationError"));
        void router.replace({ name: VIEWS.SIGNIN });
      }
    });
    async function onSubmit(values) {
      if (!inviterId.value || !inviteeId.value) {
        toast.showError(
          new Error(i18n.baseText("auth.signup.tokenValidationError")),
          i18n.baseText("auth.signup.setupYourAccountError")
        );
        return;
      }
      try {
        loading.value = true;
        await usersStore.acceptInvitation({
          ...values,
          inviterId: inviterId.value,
          inviteeId: inviteeId.value
        });
        if (values.agree === true) {
          try {
            await usersStore.submitContactEmail(values.email.toString(), values.agree);
          } catch {
          }
        }
        await router.push({ name: VIEWS.HOMEPAGE });
      } catch (error) {
        toast.showError(error, i18n.baseText("auth.signup.setupYourAccountError"));
      }
      loading.value = false;
    }
    function getQueryParameter(key) {
      return !route.query[key] || typeof route.query[key] !== "string" ? null : route.query[key];
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AuthView, {
        form: FORM_CONFIG,
        "form-loading": loading.value,
        subtitle: inviteMessage.value,
        onSubmit
      }, null, 8, ["form-loading", "subtitle"]);
    };
  }
});
export {
  _sfc_main as default
};
