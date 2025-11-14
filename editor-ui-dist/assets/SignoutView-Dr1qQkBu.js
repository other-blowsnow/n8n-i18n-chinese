import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CGDCbL4z.js";
import { b as useRouter } from "./truncate-CU7tM1AH.js";
import "./icon-B-yygaWQ.js";
import "./empty-BuGRxzl4.js";
import { er as useUsersStore } from "./useTelemetry-DDk4UBtV.js";
import { t as useToast } from "./useToast-CEGrnEuj.js";
import { mo as VIEWS } from "./constants-Icf9Jupj.js";
import "./merge-qpXyOahO.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-BXD6uaW9.js";
import "./useExternalHooks-DIeHOYfe.js";
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
