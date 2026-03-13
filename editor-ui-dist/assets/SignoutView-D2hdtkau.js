import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Bv7c3f3H.js";
import { Di as useRouter } from "./src-NOcRrhMI.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Er as useToast, t as useUsersStore } from "./users.store-D2CJwIMh.js";
import { cs as VIEWS } from "./constants-BfwnXJD0.js";
import "./merge-18y757JO.js";
import "./_baseOrderBy-DYXZYdmk.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CfqGZdKt.js";
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
