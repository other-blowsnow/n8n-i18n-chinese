import { It as ref, P as defineComponent, Pt as reactive, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DxwXn8uM.js";
import "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./empty-BuGRxzl4.js";
import { Bo as useSettingsStore, er as useUsersStore } from "./useTelemetry-Ct6_U3iA.js";
import { t as useToast } from "./useToast-Da575Qgf.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Oo as VIEWS } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import "./useExternalHooks-B9_prI2u.js";
import "./useStyles-CBQs-v7u.js";
import "./sso.store-CfmiaW44.js";
import { t as AuthView_default } from "./AuthView-Dp2hRyHb.js";
var SetupView_default = /* @__PURE__ */ defineComponent({
	__name: "SetupView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const locale = useI18n();
		const router = useRouter();
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
						validationRules: [{ name: "DEFAULT_PASSWORD_RULES" }],
						infoText: locale.baseText("auth.defaultPasswordRequirements"),
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
export { SetupView_default as default };
