import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DXQZb51R.js";
import { Ci as useRouter } from "./src-oGL8s0hT.js";
import "./sanitize-html-JHjOJhXQ.js";
import { br as useToast, t as useUsersStore } from "./users.store-DdXEJExY.js";
import { is as VIEWS } from "./constants-D6tCZPKD.js";
import "./merge-CgbZmS72.js";
import "./_baseOrderBy-CJfk527n.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BBTAgZ3l.js";
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
