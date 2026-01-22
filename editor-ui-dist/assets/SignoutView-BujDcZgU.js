import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-Cs_Gdags.js";
import { y as useRouter } from "./truncate-ChR23AMy.js";
import { br as useToast, t as useUsersStore } from "./users.store-BpO9xL6v.js";
import "./empty-nq5-pHAR.js";
import { zo as VIEWS } from "./constants-CD_zYicS.js";
import "./merge-DitvRgnI.js";
import "./_baseOrderBy-7QDPJbgm.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DMnUQHzZ.js";
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
