import { $ as openBlock, It as ref, N as defineComponent, Pt as reactive, w as createBlock } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-DaQgCvnv.js";
import { _t as useRouter } from "./src-BVC_ZvSs.js";
import { t as useToast } from "./useToast-BBvwVtp9.js";
import { ui as VIEWS } from "./constants-Xm8Zfd-h.js";
import { t as useUsersStore } from "./users.store-B52ADdpG.js";
import { t as AuthView_default } from "./AuthView-6iVR9y8t.js";
//#endregion
//#region src/features/settings/sso/views/SamlOnboarding.vue
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
				toast.showError(error, "Error", { message: error.message });
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
//#endregion
export { SamlOnboarding_default as default };
