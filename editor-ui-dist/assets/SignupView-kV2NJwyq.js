import { C as computed, It as ref, P as defineComponent, T as createBlock, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Lt as useRoute, Rt as useRouter } from "./src-Cq27d_Gp.js";
import "./sanitize-html-DjneYy0u.js";
import { hr as useToast, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./sso.store-BdPWgyOO.js";
import { t as AuthView_default } from "./AuthView-BbrJ6qUK.js";
var SignupView_default = /* @__PURE__ */ defineComponent({
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
		const inviterId = ref(void 0);
		const inviteeId = ref(void 0);
		const token = ref(void 0);
		const inviteMessage = computed(() => {
			if (!inviter.value) return "";
			return i18n.baseText("settings.signup.signUpInviterInfo", { interpolate: {
				firstName: inviter.value.firstName,
				lastName: inviter.value.lastName
			} });
		});
		onMounted(async () => {
			const inviterIdParam = getQueryParameter("inviterId");
			const inviteeIdParam = getQueryParameter("inviteeId");
			const tokenParam = getQueryParameter("token");
			try {
				if (!tokenParam && !inviterIdParam && !inviteeIdParam) throw new Error(i18n.baseText("auth.signup.missingTokenError"));
				inviterId.value = inviterIdParam ?? void 0;
				inviteeId.value = inviteeIdParam ?? void 0;
				token.value = tokenParam ?? void 0;
				inviter.value = (await usersStore.validateSignupToken({
					inviteeId: inviteeId.value,
					inviterId: inviterId.value,
					token: token.value
				})).inviter;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signup.tokenValidationError"));
				router.replace({ name: VIEWS.SIGNIN });
			}
		});
		async function onSubmit(values) {
			if (!token.value && (!inviterId.value || !inviteeId.value)) {
				toast.showError(new Error(i18n.baseText("auth.signup.tokenValidationError")), i18n.baseText("auth.signup.setupYourAccountError"));
				return;
			}
			try {
				loading.value = true;
				await usersStore.acceptInvitation({
					...values,
					inviterId: inviterId.value,
					inviteeId: inviteeId.value,
					token: token.value
				});
				if (values.agree === true) try {
					await usersStore.submitContactEmail(values.email.toString(), values.agree);
				} catch {}
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
			return openBlock(), createBlock(AuthView_default, {
				form: FORM_CONFIG,
				"form-loading": loading.value,
				subtitle: inviteMessage.value,
				onSubmit
			}, null, 8, ["form-loading", "subtitle"]);
		};
	}
});
export { SignupView_default as default };
