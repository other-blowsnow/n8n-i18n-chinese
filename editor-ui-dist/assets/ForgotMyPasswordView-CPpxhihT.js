import { C as computed, It as ref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import "./src-6rUDOvr2.js";
import "./sanitize-html-JHjOJhXQ.js";
import { t as useUsersStore, ws as useSettingsStore, yr as useToast } from "./users.store-B-dhu6_V.js";
import "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
import "./sso.store-ChL7EZ_s.js";
import { t as AuthView_default } from "./AuthView-on3NsHwK.js";
var ForgotMyPasswordView_default = /* @__PURE__ */ defineComponent({
	__name: "ForgotMyPasswordView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const locale = useI18n();
		const loading = ref(false);
		const formConfig = computed(() => {
			const EMAIL_INPUTS = [{
				name: "email",
				properties: {
					label: locale.baseText("auth.email"),
					type: "email",
					required: true,
					validationRules: [{ name: "VALID_EMAIL" }],
					autocomplete: "email",
					capitalize: true,
					focusInitially: true
				}
			}];
			const NO_SMTP_INPUTS = [{
				name: "no-smtp-warning",
				properties: {
					label: locale.baseText("forgotPassword.noSMTPToSendEmailWarning"),
					type: "info"
				}
			}];
			const DEFAULT_FORM_CONFIG = {
				title: locale.baseText("forgotPassword.recoverPassword"),
				redirectText: locale.baseText("forgotPassword.returnToSignIn"),
				redirectLink: "/signin"
			};
			if (settingsStore.isSmtpSetup) return {
				...DEFAULT_FORM_CONFIG,
				buttonText: locale.baseText("forgotPassword.getRecoveryLink"),
				inputs: EMAIL_INPUTS
			};
			return {
				...DEFAULT_FORM_CONFIG,
				inputs: NO_SMTP_INPUTS
			};
		});
		const isFormWithEmail = (values) => {
			return "email" in values;
		};
		const onSubmit = async (values) => {
			if (!isFormWithEmail(values)) return;
			try {
				loading.value = true;
				await usersStore.sendForgotPasswordEmail(values);
				toast.showMessage({
					type: "success",
					title: locale.baseText("forgotPassword.recoveryEmailSent"),
					message: locale.baseText("forgotPassword.emailSentIfExists", { interpolate: { email: values.email } })
				});
			} catch (error) {
				let message = locale.baseText("forgotPassword.smtpErrorContactAdministrator");
				if (error.httpStatusCode) {
					const { httpStatusCode: status } = error;
					if (status === 429) message = locale.baseText("forgotPassword.tooManyRequests");
					else if (error.httpStatusCode === 422) message = locale.baseText(error.message);
					toast.showMessage({
						type: "error",
						title: locale.baseText("forgotPassword.sendingEmailError"),
						message
					});
				}
			}
			loading.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: formConfig.value,
				"form-loading": loading.value,
				onSubmit
			}, null, 8, ["form", "form-loading"]);
		};
	}
});
export { ForgotMyPasswordView_default as default };
