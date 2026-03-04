import { It as ref, P as defineComponent, Pt as reactive, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DXQZb51R.js";
import { Ci as useRouter } from "./src-oGL8s0hT.js";
import "./sanitize-html-JHjOJhXQ.js";
import { br as useToast, t as useUsersStore } from "./users.store-DdXEJExY.js";
import { is as VIEWS } from "./constants-D6tCZPKD.js";
import "./merge-CgbZmS72.js";
import "./_baseOrderBy-CJfk527n.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BBTAgZ3l.js";
import "./sso.store-t9lv8mXi.js";
import { t as AuthView_default } from "./AuthView-Ch1aWUbZ.js";
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
