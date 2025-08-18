import { d as defineComponent, u as useUsersStore, a as useToast, b as useRouter, o as onMounted, h as createElementBlock, g as openBlock, V as VIEWS, c as useI18n } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      void logout();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
export {
  _sfc_main as default
};
