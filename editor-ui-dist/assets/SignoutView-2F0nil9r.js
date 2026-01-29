import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-CnjjVDdK.js";
import { y as useRouter } from "./truncate-CcdvD1u8.js";
import { br as useToast, t as useUsersStore } from "./users.store-y45WFh5C.js";
import "./empty-nq5-pHAR.js";
import { zo as VIEWS } from "./constants-C-KlVUsX.js";
import "./merge-C0NmQbVH.js";
import "./_baseOrderBy-BaV_HQRG.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-CIIdLx7d.js";
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
