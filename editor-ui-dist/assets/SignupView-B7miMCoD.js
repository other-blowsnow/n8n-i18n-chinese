import { C as computed, It as ref, P as defineComponent, T as createBlock, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import "./src-Ca6p-F4w.js";
import { v as useRoute, y as useRouter } from "./truncate-D24O8Gpt.js";
import { br as useToast, t as useUsersStore } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { zo as VIEWS } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import "./sso.store-B7jbVltx.js";
import { t as AuthView_default } from "./AuthView-Be--P4ch.js";
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
