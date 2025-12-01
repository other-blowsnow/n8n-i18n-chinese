import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-mhYEJTeq.js";
import { b as useRouter } from "./truncate-CgT6TTic.js";
import "./icon-DD6uvFxo.js";
import "./empty-C2SrrehM.js";
import { er as useUsersStore } from "./useTelemetry-CX4Z1YmY.js";
import { t as useToast } from "./useToast-knoBLWpF.js";
import { No as VIEWS } from "./constants-CuU0cMc8.js";
import "./merge-CUyfvEnu.js";
import "./_baseOrderBy-CJFus1_r.js";
import "./dateformat-CaoB5ai3.js";
import "./useDebounce-CfE59s7M.js";
import "./useExternalHooks-C4-Yr9pT.js";
import "./useStyles-CEyEF3kW.js";
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
