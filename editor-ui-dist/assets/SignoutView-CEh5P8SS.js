import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-rh9OLi2r.js";
import { y as useRouter } from "./truncate-mlAhUFvR.js";
import { Dr as useUsersStore, v as useToast } from "./builder.store-xIrycSiv.js";
import "./empty-DUjwPfU3.js";
import { Bo as VIEWS } from "./constants-DgUuFMuz.js";
import "./merge-zXC_LGl3.js";
import "./_baseOrderBy-8L31BN_M.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-B_sKX4gh.js";
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
