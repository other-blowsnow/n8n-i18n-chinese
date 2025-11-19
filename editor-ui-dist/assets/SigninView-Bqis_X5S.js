import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { $ as toRefs, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { In as N8nText_default, Ln as N8nButton_default, M as N8nLogo_default, Pn as N8nHeading_default, R as N8nFormInputs_default, X as N8nCard_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Bo as useSettingsStore, er as useUsersStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { ec as MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH, ic as MFA_FORM, mo as VIEWS, nc as MFA_AUTHENTICATION_RECOVERY_CODE_INPUT_MAX_LENGTH, rc as MFA_AUTHENTICATION_REQUIRED_ERROR_CODE } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { n as mfaEventBus } from "./auth.eventBus-CzdCLlJU.js";
import { n as useSSOStore } from "./sso.store-lozzT1xX.js";
import { t as AuthView_default } from "./AuthView-BtjWVrLs.js";
var MfaView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MfaView",
	props: { reportError: { type: Boolean } },
	emits: [
		"onFormChanged",
		"onBackClick",
		"submit"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const hasAnyChanges = ref(false);
		const formBus = ref(mfaEventBus);
		const formInputs = ref(null);
		const showRecoveryCodeForm = ref(false);
		const verifyingMfaCode = ref(false);
		const formError$1 = ref("");
		const { reportError } = toRefs(props);
		const mfaFormRef = ref(null);
		const i18 = useI18n();
		const emit = __emit;
		const formField = (name, label, placeholder, maxlength, focus = true, autocomplete = "off") => {
			return {
				name,
				initialValue: "",
				properties: {
					label,
					placeholder,
					maxlength,
					capitalize: true,
					validateOnBlur: false,
					focusInitially: focus,
					autocomplete
				}
			};
		};
		const onRecoveryCodeClick = () => {
			formError$1.value = "";
			showRecoveryCodeForm.value = true;
			hasAnyChanges.value = false;
			formInputs.value = [mfaRecoveryCodeFieldWithDefaults()];
			emit("onFormChanged", MFA_FORM.MFA_RECOVERY_CODE);
		};
		const onBackClick = () => {
			if (!showRecoveryCodeForm.value) {
				emit("onBackClick", MFA_FORM.MFA_TOKEN);
				return;
			}
			showRecoveryCodeForm.value = false;
			hasAnyChanges.value = true;
			formInputs.value = [mfaCodeFieldWithDefaults()];
			emit("onBackClick", MFA_FORM.MFA_RECOVERY_CODE);
			focusMfaCodeAfterPasswordManager();
		};
		const onSubmit = (formData) => {
			const data = formData;
			formError$1.value = !showRecoveryCodeForm.value ? i18.baseText("mfa.code.invalid") : i18.baseText("mfa.recovery.invalid");
			emit("submit", data);
		};
		const focusMfaCodeAfterPasswordManager = () => {
			setTimeout(() => {
				if (mfaFormRef.value) {
					const container$1 = mfaFormRef.value.$el;
					if (!container$1) return;
					const inputElement = container$1.querySelector("input[name=\"mfaCode\"]");
					if (inputElement) inputElement.focus();
				}
			}, 200);
		};
		const onInput = ({ target: { value, name } }) => {
			const isSubmittingMfaCode = name === "mfaCode";
			const inputValidLength = isSubmittingMfaCode ? 6 : 36;
			if (value.length !== inputValidLength) {
				hasAnyChanges.value = false;
				return;
			}
			verifyingMfaCode.value = true;
			hasAnyChanges.value = true;
			const dataToSubmit = isSubmittingMfaCode ? {
				mfaCode: value,
				mfaRecoveryCode: ""
			} : {
				mfaCode: "",
				mfaRecoveryCode: value
			};
			try {
				onSubmit(dataToSubmit);
			} catch (e) {} finally {
				verifyingMfaCode.value = false;
			}
		};
		const mfaRecoveryCodeFieldWithDefaults = () => {
			return formField("mfaRecoveryCode", i18.baseText("mfa.recovery.input.label"), i18.baseText("mfa.recovery.input.placeholder"), 36);
		};
		const mfaCodeFieldWithDefaults = () => {
			return formField("mfaCode", i18.baseText("mfa.code.input.label"), i18.baseText("mfa.code.input.placeholder"), 6, false, "one-time-code");
		};
		const onSaveClick = () => {
			formBus.value.emit("submit");
		};
		const { settings: { releaseChannel } } = useSettingsStore();
		onMounted(() => {
			formInputs.value = [mfaCodeFieldWithDefaults()];
			focusMfaCodeAfterPasswordManager();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nLogo_default), {
				size: "large",
				"release-channel": unref(releaseChannel)
			}, null, 8, ["release-channel"]), createVNode(unref(N8nCard_default), null, {
				default: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContainer) }, [createVNode(unref(N8nHeading_default), {
						size: "xlarge",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.modal.title") : unref(i18).baseText("mfa.code.modal.title")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.formContainer, unref(reportError) ? _ctx.$style.formError : ""]) }, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
						key: 0,
						ref_key: "mfaFormRef",
						ref: mfaFormRef,
						"data-test-id": "mfa-login-form",
						inputs: formInputs.value,
						"event-bus": formBus.value,
						onInput,
						onSubmit
					}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoBox) }, [!showRecoveryCodeForm.value && !unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base",
						bold: false
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18).baseText("mfa.code.input.info")) + " ", 1), createBaseVNode("a", {
							"data-test-id": "mfa-enter-recovery-code-button",
							onClick: onRecoveryCodeClick
						}, toDisplayString(unref(i18).baseText("mfa.code.input.info.action")), 1)]),
						_: 1
					})) : createCommentVNode("", true), unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(formError$1.value) + " ", 1), !showRecoveryCodeForm.value ? (openBlock(), createElementBlock("a", {
							key: 0,
							class: normalizeClass(_ctx.$style.recoveryCodeLink),
							onClick: onRecoveryCodeClick
						}, toDisplayString(unref(i18).baseText("mfa.recovery.input.info.action")), 3)) : createCommentVNode("", true)]),
						_: 1
					})) : createCommentVNode("", true)], 2)], 2),
					createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
						float: "right",
						loading: verifyingMfaCode.value,
						label: showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.button.verify") : unref(i18).baseText("mfa.code.button.continue"),
						size: "large",
						disabled: !hasAnyChanges.value,
						onClick: onSaveClick
					}, null, 8, [
						"loading",
						"label",
						"disabled"
					]), createVNode(unref(N8nButton_default), {
						float: "left",
						label: unref(i18).baseText("mfa.button.back"),
						size: "large",
						type: "tertiary",
						onClick: onBackClick
					}, null, 8, ["label"])])
				]),
				_: 1
			})], 2);
		};
	}
});
var MfaView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_f63sf_127",
	formContainer: "_formContainer_f63sf_137",
	headerContainer: "_headerContainer_f63sf_141",
	formError: "_formError_f63sf_146",
	recoveryCodeLink: "_recoveryCodeLink_f63sf_150",
	infoBox: "_infoBox_f63sf_154"
};
var MfaView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MfaView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MfaView_vue_vue_type_style_index_0_lang_module_default }]]);
var SigninView_default = /* @__PURE__ */ defineComponent({
	__name: "SigninView",
	setup(__props) {
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const ssoStore = useSSOStore();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const locale = useI18n();
		const telemetry = useTelemetry();
		const loading = ref(false);
		const showMfaView = ref(false);
		const emailOrLdapLoginId = ref("");
		const password = ref("");
		const reportError = ref(false);
		const ldapLoginLabel = computed(() => ssoStore.ldapLoginLabel);
		const isLdapLoginEnabled = computed(() => ssoStore.isLdapLoginEnabled);
		const emailLabel = computed(() => {
			let label = locale.baseText("auth.email");
			if (isLdapLoginEnabled.value && ldapLoginLabel.value) label = ldapLoginLabel.value;
			return label;
		});
		const formConfig = reactive({
			title: locale.baseText("auth.signin"),
			buttonText: locale.baseText("auth.signin"),
			redirectText: locale.baseText("forgotPassword"),
			redirectLink: "/forgot-password",
			inputs: [{
				name: "emailOrLdapLoginId",
				properties: {
					label: emailLabel.value,
					type: "email",
					required: true,
					...!isLdapLoginEnabled.value && { validationRules: [{ name: "VALID_EMAIL" }] },
					showRequiredAsterisk: false,
					validateOnBlur: false,
					autocomplete: "email",
					capitalize: true,
					focusInitially: true
				}
			}, {
				name: "password",
				properties: {
					label: locale.baseText("auth.password"),
					type: "password",
					required: true,
					showRequiredAsterisk: false,
					validateOnBlur: false,
					autocomplete: "current-password",
					capitalize: true
				}
			}]
		});
		const onMFASubmitted = async (form) => {
			await login({
				emailOrLdapLoginId: emailOrLdapLoginId.value,
				password: password.value,
				mfaCode: form.mfaCode,
				mfaRecoveryCode: form.mfaRecoveryCode
			});
		};
		const onEmailPasswordSubmitted = async (form) => {
			await login(form);
		};
		const isRedirectSafe = () => {
			const redirect = getRedirectQueryParameter();
			if (redirect.startsWith("/")) return true;
			try {
				return new URL(redirect).origin === window.location.origin;
			} catch {
				return false;
			}
		};
		const getRedirectQueryParameter = () => {
			let redirect = "";
			if (typeof route.query?.redirect === "string") redirect = decodeURIComponent(route.query?.redirect);
			return redirect;
		};
		const login = async (form) => {
			try {
				loading.value = true;
				await usersStore.loginWithCreds({
					emailOrLdapLoginId: form.emailOrLdapLoginId,
					password: form.password,
					mfaCode: form.mfaCode,
					mfaRecoveryCode: form.mfaRecoveryCode
				});
				loading.value = false;
				await settingsStore.getSettings();
				toast.clearAllStickyNotifications();
				if (settingsStore.isMFAEnforced && !usersStore.currentUser?.mfaAuthenticated) {
					await router.push({ name: VIEWS.PERSONAL_SETTINGS });
					return;
				}
				telemetry.track("User attempted to login", { result: showMfaView.value ? "mfa_success" : "success" });
				if (isRedirectSafe()) {
					const redirect = getRedirectQueryParameter();
					if (redirect.startsWith("http")) {
						window.location.href = redirect;
						return;
					}
					router.push(redirect);
					return;
				}
				await router.push({ name: VIEWS.HOMEPAGE });
			} catch (error) {
				if (error.errorCode === 998) {
					showMfaView.value = true;
					cacheCredentials(form);
					return;
				}
				telemetry.track("User attempted to login", { result: showMfaView.value ? "mfa_token_rejected" : "credentials_error" });
				if (!showMfaView.value) {
					toast.showError(error, locale.baseText("auth.signin.error"));
					loading.value = false;
					return;
				}
				reportError.value = true;
			}
		};
		const onBackClick = (fromForm) => {
			reportError.value = false;
			if (fromForm === MFA_FORM.MFA_TOKEN) {
				showMfaView.value = false;
				loading.value = false;
			}
		};
		const onFormChanged = (toForm) => {
			if (toForm === MFA_FORM.MFA_RECOVERY_CODE) reportError.value = false;
		};
		const cacheCredentials = (form) => {
			emailOrLdapLoginId.value = form.emailOrLdapLoginId;
			password.value = form.password;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!showMfaView.value ? (openBlock(), createBlock(AuthView_default, {
				key: 0,
				form: formConfig,
				"form-loading": loading.value,
				"with-sso": true,
				"data-test-id": "signin-form",
				onSubmit: onEmailPasswordSubmitted
			}, null, 8, ["form", "form-loading"])) : createCommentVNode("", true), showMfaView.value ? (openBlock(), createBlock(MfaView_default, {
				key: 1,
				"report-error": reportError.value,
				onSubmit: onMFASubmitted,
				onOnBackClick: onBackClick,
				onOnFormChanged: onFormChanged
			}, null, 8, ["report-error"])) : createCommentVNode("", true)]);
		};
	}
});
export { SigninView_default as default };
