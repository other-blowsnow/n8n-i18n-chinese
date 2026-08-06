import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, c as useCssModule, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BT3CWEhN.js";
import { Ai as N8nText_default, Li as N8nIcon_default } from "./src-CjwMP1QL.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useUsersStore } from "./users.store-S3MAKAuN.js";
//#region src/features/settings/communityNodes/components/ContactAdministratorToInstall.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { style: { "padding-bottom": "8px" } };
var ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ContactAdministratorToInstall",
	props: { box: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const ownerEmailList = computed(() => usersStore.allUsers.filter((user) => user.role?.includes("owner")).map((user) => user.email));
		const classes = computed(() => ({
			[$style.contactOwnerHint]: true,
			[$style.border]: props.box
		}));
		onMounted(async () => {
			await usersStore.fetchUsers({ filter: { isOwner: true } });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(classes.value) }, [props.box ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				color: "text-light",
				icon: "info",
				size: "large"
			})) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, toDisplayString(unref(i18n).baseText("communityNodeInfo.contact.admin")), 1), ownerEmailList.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(ownerEmailList.value.join(", ")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default = {
	contactOwnerHint: "_contactOwnerHint_qnrnx_125",
	border: "_border_qnrnx_133"
};
var ContactAdministratorToInstall_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ContactAdministratorToInstall_default as t };
