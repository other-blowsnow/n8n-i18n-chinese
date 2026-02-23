import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Bq6g7eJk.js";
import { wi as useRouter } from "./src-Vlm7Mxf-.js";
import "./sanitize-html-JHjOJhXQ.js";
import { t as useUsersStore, yr as useToast } from "./users.store-BwYRQvCY.js";
import { rs as VIEWS } from "./constants-RiJkz47J.js";
import "./merge-CLls_idn.js";
import "./_baseOrderBy-BE23B-S3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BghtiK4X.js";
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
