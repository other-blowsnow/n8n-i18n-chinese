import { E as createCommentVNode, It as ref, P as defineComponent, T as createBlock, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CMopfp37.js";
import "./src-B9lyFNPE.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-D09te2fm.js";
import "./icon-B8U-CfQv.js";
import "./empty-BuGRxzl4.js";
import { ir as useUsersStore } from "./useTelemetry-BnWkdL5v.js";
import { t as useToast } from "./useToast-CYEyObML.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { oa as VIEWS, vr as MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH } from "./constants-7lEZpYki.js";
import "./merge-9-BpYlRV.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BSVJx8HC.js";
import "./useExternalHooks-BhwArgDu.js";
import "./sso.store-Bm9b3tfN.js";
import { t as AuthView_default } from "./AuthView-mVUgbMul.js";
var ChangePasswordView_default = /* @__PURE__ */ defineComponent({
	__name: "ChangePasswordView",
	setup(__props) {
		const usersStore = useUsersStore();
		const locale = useI18n();
		const toast = useToast();
		const router = useRouter();
		const password = ref("");
		const loading = ref(false);
		const config = ref(null);
		const passwordsMatch = (value) => {
			if (typeof value !== "string") return false;
			if (value !== password.value) return { messageKey: "auth.changePassword.passwordsMustMatchError" };
			return false;
		};
		const getResetToken = () => {
			return !router.currentRoute.value.query.token || typeof router.currentRoute.value.query.token !== "string" ? null : router.currentRoute.value.query.token;
		};
		const getMfaEnabled = () => {
			if (!router.currentRoute.value.query.mfaEnabled) return null;
			return router.currentRoute.value.query.mfaEnabled === "true" ? true : false;
		};
		const onSubmit = async (values) => {
			try {
				loading.value = true;
				const token = getResetToken();
				if (token) {
					const changePasswordParameters = {
						token,
						password: password.value,
						...values.mfaCode && { mfaCode: values.mfaCode }
					};
					await usersStore.changePassword(changePasswordParameters);
					toast.showMessage({
						type: "success",
						title: locale.baseText("auth.changePassword.passwordUpdated"),
						message: locale.baseText("auth.changePassword.passwordUpdatedMessage")
					});
					await router.push({ name: VIEWS.SIGNIN });
				} else toast.showError(new Error(locale.baseText("auth.validation.missingParameters")), locale.baseText("auth.changePassword.error"));
			} catch (error) {
				toast.showError(error, locale.baseText("auth.changePassword.error"));
			}
			loading.value = false;
		};
		const onInput = (e) => {
			if (e.name === "password" && typeof e.value === "string") password.value = e.value;
		};
		onMounted(async () => {
			const form = {
				title: locale.baseText("auth.changePassword"),
				buttonText: locale.baseText("auth.changePassword"),
				redirectText: locale.baseText("auth.signin"),
				redirectLink: "/signin",
				inputs: [{
					name: "password",
					properties: {
						label: locale.baseText("auth.newPassword"),
						type: "password",
						required: true,
						validationRules: [{ name: "DEFAULT_PASSWORD_RULES" }],
						infoText: locale.baseText("auth.defaultPasswordRequirements"),
						autocomplete: "new-password",
						capitalize: true
					}
				}, {
					name: "password2",
					properties: {
						label: locale.baseText("auth.changePassword.reenterNewPassword"),
						type: "password",
						required: true,
						validators: { TWO_PASSWORDS_MATCH: { validate: passwordsMatch } },
						validationRules: [{ name: "TWO_PASSWORDS_MATCH" }],
						autocomplete: "new-password",
						capitalize: true
					}
				}]
			};
			const token = getResetToken();
			if (getMfaEnabled()) form.inputs.push({
				name: "mfaCode",
				initialValue: "",
				properties: {
					required: true,
					label: locale.baseText("mfa.code.input.label"),
					placeholder: locale.baseText("mfa.code.input.placeholder"),
					maxlength: 6,
					capitalize: true,
					validateOnBlur: true
				}
			});
			config.value = form;
			try {
				if (!token) throw new Error(locale.baseText("auth.changePassword.missingTokenError"));
				await usersStore.validatePasswordToken({ token });
			} catch (e) {
				toast.showError(e, locale.baseText("auth.changePassword.tokenValidationError"));
				router.replace({ name: VIEWS.SIGNIN });
			}
		});
		return (_ctx, _cache) => {
			return config.value ? (openBlock(), createBlock(AuthView_default, {
				key: 0,
				form: config.value,
				"form-loading": loading.value,
				onSubmit,
				onUpdate: onInput
			}, null, 8, ["form", "form-loading"])) : createCommentVNode("", true);
		};
	}
});
export { ChangePasswordView_default as default };
