import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-rO6uEnTT.js";
import { b as useRouter } from "./truncate-CPi3sVRm.js";
import "./icon-BJzgEPXo.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-R6FQLszn.js";
import { t as useToast } from "./useToast-Cef3MX8Y.js";
import { Po as VIEWS } from "./constants-BP6a478f.js";
import "./merge-dsfrGv6q.js";
import "./_baseOrderBy-LpH21c0I.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-Zsctc3FC.js";
import "./useExternalHooks-Bt0_3RIZ.js";
import "./useStyles-DhM0cpS7.js";
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
