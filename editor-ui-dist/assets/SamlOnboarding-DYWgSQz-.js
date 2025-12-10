import { It as ref, P as defineComponent, Pt as reactive, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-rO6uEnTT.js";
import "./src-DM4yYASg.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-CPi3sVRm.js";
import "./icon-BJzgEPXo.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-R6FQLszn.js";
import { t as useToast } from "./useToast-Cef3MX8Y.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import { Po as VIEWS } from "./constants-BP6a478f.js";
import "./merge-dsfrGv6q.js";
import "./_baseOrderBy-LpH21c0I.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-Zsctc3FC.js";
import "./useExternalHooks-Bt0_3RIZ.js";
import "./useStyles-DhM0cpS7.js";
import "./sso.store-a5levAGV.js";
import { t as AuthView_default } from "./AuthView--H1F5FwZ.js";
var SamlOnboarding_default = /* @__PURE__ */ defineComponent({
	__name: "SamlOnboarding",
	setup(__props) {
		const router = useRouter();
		const locale = useI18n();
		const toast = useToast();
		const usersStore = useUsersStore();
		const loading = ref(false);
		const FORM_CONFIG = reactive({
			title: locale.baseText("auth.signup.setupYourAccount"),
			buttonText: locale.baseText("auth.signup.finishAccountSetup"),
			inputs: [{
				name: "firstName",
				initialValue: usersStore.currentUser?.firstName,
				properties: {
					label: locale.baseText("auth.firstName"),
					maxlength: 32,
					required: true,
					autocomplete: "given-name",
					capitalize: true
				}
			}, {
				name: "lastName",
				initialValue: usersStore.currentUser?.lastName,
				properties: {
					label: locale.baseText("auth.lastName"),
					maxlength: 32,
					required: true,
					autocomplete: "family-name",
					capitalize: true
				}
			}]
		});
		const isFormWithFirstAndLastName = (values) => {
			return "firstName" in values && "lastName" in values;
		};
		const onSubmit = async (values) => {
			if (!isFormWithFirstAndLastName(values)) return;
			try {
				loading.value = true;
				await usersStore.updateUserName(values);
				await router.push({ name: VIEWS.HOMEPAGE });
			} catch (error) {
				loading.value = false;
				toast.showError(error, "Error", error.message);
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: FORM_CONFIG,
				"form-loading": loading.value,
				onSubmit
			}, null, 8, ["form", "form-loading"]);
		};
	}
});
export { SamlOnboarding_default as default };
