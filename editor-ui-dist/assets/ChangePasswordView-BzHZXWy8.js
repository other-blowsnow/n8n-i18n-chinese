import { E as createCommentVNode, It as ref, P as defineComponent, T as createBlock, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-Bj1GGFfn.js";
import "./src-RP8mjDvT.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRouter } from "./truncate-6_fzHAQJ.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-BQ4J8N5h.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import { Bo as VIEWS, Pc as MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH } from "./constants-CGISHWeU.js";
import "./merge-BKLQxE1s.js";
import "./_baseOrderBy-BMv6j_Ja.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DZkYHQbC.js";
import "./sso.store-BcyDf16Q.js";
import { t as AuthView_default } from "./AuthView-CZgYlwZ0.js";
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
