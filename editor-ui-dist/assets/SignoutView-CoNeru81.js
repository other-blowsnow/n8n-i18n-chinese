import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DLeeJfJb.js";
import { vt as useRouter } from "./src-Bqvpi8Q1.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ln as useToast, t as useUsersStore } from "./users.store-BBfDn-OZ.js";
import { hs as VIEWS } from "./constants-B5_ykVXd.js";
import "./merge-3v6XMMbx.js";
import "./_baseOrderBy-Bz8EJorA.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-BRg29NgG.js";
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
export { SignoutView_default as default };
