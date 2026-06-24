import { $ as openBlock, It as ref, N as defineComponent, S as computed, X as onMounted, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-2bgghuOQ.js";
import { gt as useRouter, ht as useRoute, yt as createPasswordRules } from "./src-BwN8TeVO.js";
import { t as useToast } from "./useToast-DGGqiWI5.js";
import { ui as VIEWS } from "./constants-BiYlbN9Z.js";
import { t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { t as useUsersStore } from "./users.store-CUZkGc51.js";
import { t as AuthView_default } from "./AuthView-BbGIVlfH.js";
//#endregion
//#region src/features/core/auth/views/SignupView.vue
var SignupView_default = /* @__PURE__ */ defineComponent({
	__name: "SignupView",
	setup(__props) {
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const toast = useToast();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const passwordMinLength = settingsStore.userManagement.passwordMinLength ?? 8;
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
						validationRules: [createPasswordRules(passwordMinLength)],
						required: true,
						infoText: i18n.baseText("auth.defaultPasswordRequirements", { interpolate: { minimum: passwordMinLength } }),
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
		const token = ref(void 0);
		const inviteMessage = computed(() => {
			if (!inviter.value) return "";
			return i18n.baseText("settings.signup.signUpInviterInfo", { interpolate: {
				firstName: inviter.value.firstName,
				lastName: inviter.value.lastName
			} });
		});
		onMounted(async () => {
			const tokenParam = getQueryParameter("token");
			try {
				if (!tokenParam) throw new Error(i18n.baseText("auth.signup.missingTokenError"));
				token.value = tokenParam;
				inviter.value = (await usersStore.validateSignupToken({ token: token.value })).inviter;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signup.tokenValidationError"));
				router.replace({ name: VIEWS.SIGNIN });
			}
		});
		async function onSubmit(values) {
			if (!token.value) {
				toast.showError(new Error(i18n.baseText("auth.signup.tokenValidationError")), i18n.baseText("auth.signup.setupYourAccountError"));
				return;
			}
			try {
				loading.value = true;
				await usersStore.acceptInvitation({
					...values,
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
//#endregion
export { SignupView_default as default };
