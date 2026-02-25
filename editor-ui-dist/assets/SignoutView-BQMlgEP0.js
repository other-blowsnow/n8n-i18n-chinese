import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { wi as useRouter } from "./src-6rUDOvr2.js";
import "./sanitize-html-JHjOJhXQ.js";
import { t as useUsersStore, yr as useToast } from "./users.store-B-dhu6_V.js";
import { rs as VIEWS } from "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
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
