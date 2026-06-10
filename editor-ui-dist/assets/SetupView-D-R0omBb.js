import { $ as openBlock, Ft as ref, N as defineComponent, Nt as reactive, w as createBlock } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { gt as useRouter, yt as createPasswordRules } from "./src-DFOx8N22.js";
import { t as useToast } from "./useToast-DacasnmQ.js";
import { si as VIEWS } from "./constants-BMUE7W6Y.js";
import { t as useSettingsStore } from "./settings.store-D_uIyAbF.js";
import { t as useUsersStore } from "./users.store-OUM63rct.js";
import { t as AuthView_default } from "./AuthView-Dz9tx5Sa.js";
//#endregion
//#region src/features/core/auth/views/SetupView.vue
var SetupView_default = /* @__PURE__ */ defineComponent({
	__name: "SetupView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const locale = useI18n();
		const router = useRouter();
		const passwordMinLength = settingsStore.userManagement.passwordMinLength ?? 8;
		const loading = ref(false);
		const formConfig = reactive({
			title: locale.baseText("auth.setup.setupOwner"),
			buttonText: locale.baseText("auth.setup.next"),
			inputs: [
				{
					name: "email",
					properties: {
						label: locale.baseText("auth.email"),
						type: "email",
						required: true,
						validationRules: [{ name: "VALID_EMAIL" }],
						autocomplete: "email",
						capitalize: true
					}
				},
				{
					name: "firstName",
					properties: {
						label: locale.baseText("auth.firstName"),
						maxlength: 32,
						required: true,
						autocomplete: "given-name",
						capitalize: true
					}
				},
				{
					name: "lastName",
					properties: {
						label: locale.baseText("auth.lastName"),
						maxlength: 32,
						required: true,
						autocomplete: "family-name",
						capitalize: true
					}
				},
				{
					name: "password",
					properties: {
						label: locale.baseText("auth.password"),
						type: "password",
						required: true,
						validationRules: [createPasswordRules(passwordMinLength)],
						infoText: locale.baseText("auth.defaultPasswordRequirements", { interpolate: { minimum: passwordMinLength } }),
						autocomplete: "new-password",
						capitalize: true
					}
				},
				{
					name: "agree",
					properties: {
						label: locale.baseText("auth.agreement.label"),
						type: "checkbox"
					}
				}
			]
		});
		const onSubmit = async (values) => {
			try {
				const forceRedirectedHere = settingsStore.showSetupPage;
				loading.value = true;
				await usersStore.createOwner(values);
				if (values.agree === true) try {
					await usersStore.submitContactEmail(values.email.toString(), values.agree);
				} catch {}
				if (forceRedirectedHere) await router.push({ name: VIEWS.HOMEPAGE });
				else await router.push({ name: VIEWS.USERS_SETTINGS });
			} catch (error) {
				toast.showError(error, locale.baseText("auth.setup.settingUpOwnerError"));
			}
			loading.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: formConfig,
				"form-loading": loading.value,
				"data-test-id": "setup-form",
				onSubmit
			}, null, 8, ["form", "form-loading"]);
		};
	}
});
//#endregion
export { SetupView_default as default };
