import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-BZxl6qSA.js";
import { lt as useRouter } from "./src-pyi3rpL8.js";
import { t as useUsersStore } from "./users.store-CyAaJx7n.js";
import { t as useToast } from "./useToast-D2mWSxil.js";
import { ii as VIEWS } from "./constants-Dxn6bmLi.js";
//#endregion
//#region src/features/core/auth/views/SignoutView.vue
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				await usersStore.logout();
				window.location.href = router.resolve({ name: VIEWS.SIGNIN }).href;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signout.error"));
			}
		};
		onMounted(() => {
			logout();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
//#endregion
export { SignoutView_default as default };
