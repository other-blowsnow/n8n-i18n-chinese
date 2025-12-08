import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-MkgS7cNj.js";
import { b as useRouter } from "./truncate-YYJo2Jl2.js";
import "./icon-4iaHNdRV.js";
import "./empty-C2SrrehM.js";
import { nr as useUsersStore } from "./useTelemetry-C3BpPRvq.js";
import { t as useToast } from "./useToast-Ck3xggCR.js";
import { Po as VIEWS } from "./constants-CLp3mUiA.js";
import "./merge-xJWNAnWT.js";
import "./_baseOrderBy-B8VDCWzK.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-DLVvDUVS.js";
import "./useExternalHooks-CRZsdBXv.js";
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
