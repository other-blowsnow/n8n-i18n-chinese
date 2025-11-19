import { D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { A as N8nMenuItem_default, C as N8nPopoverReka_default, In as N8nText_default, St as N8nAvatar_default, Tt as N8nIconButton_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import { er as useUsersStore } from "./useTelemetry-C2EhNQhN.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
var _hoisted_1 = {
	class: "ml-3xs",
	"data-test-id": "main-sidebar-user-menu"
};
var MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarUserArea",
	props: {
		fullyExpanded: { type: Boolean },
		isCollapsed: { type: Boolean }
	},
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const usersStore = useUsersStore();
		const userMenuItems = ref([{
			id: "settings",
			icon: "settings",
			label: i18n.baseText("settings")
		}, {
			id: "logout",
			icon: "door-open",
			label: i18n.baseText("auth.signout")
		}]);
		const onLogout = () => {
			router.push({ name: VIEWS.SIGNOUT });
		};
		const onUserActionToggle = (action) => {
			switch (action) {
				case "logout":
					onLogout();
					break;
				case "settings":
					router.push({ name: VIEWS.SETTINGS });
					break;
				default: break;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "user",
				class: normalizeClass(_ctx.$style.userArea)
			}, [createVNode(unref(N8nPopoverReka_default), {
				side: "right",
				align: "end",
				"side-offset": 16
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(userMenuItems.value, (action) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: action.id,
						item: action,
						"data-test-id": `user-menu-item-${action.id}`,
						onClick: () => onUserActionToggle(action.id)
					}, null, 8, [
						"item",
						"data-test-id",
						"onClick"
					]);
				}), 128))], 2)]),
				trigger: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.userAreaInner) }, [
					createBaseVNode("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass({ ["clickable"]: _ctx.isCollapsed }) }, [createVNode(unref(N8nAvatar_default), {
						"first-name": unref(usersStore).currentUser?.firstName,
						"last-name": unref(usersStore).currentUser?.lastName,
						size: "small"
					}, null, 8, ["first-name", "last-name"])], 2)]),
					createBaseVNode("div", { class: normalizeClass({
						["ml-2xs"]: true,
						[_ctx.$style.userName]: true,
						[_ctx.$style.expanded]: _ctx.fullyExpanded
					}) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(usersStore).currentUser?.fullName), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", {
						"data-test-id": "user-menu",
						class: normalizeClass({
							[_ctx.$style.userActions]: true,
							[_ctx.$style.expanded]: _ctx.fullyExpanded
						})
					}, [createVNode(unref(N8nIconButton_default), {
						icon: "ellipsis",
						text: "",
						square: "",
						type: "tertiary"
					})], 2)
				], 2)]),
				_: 1
			})], 2);
		};
	}
});
var MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default = {
	userArea: "_userArea_r2ew4_123",
	userName: "_userName_r2ew4_129",
	expanded: "_expanded_r2ew4_138",
	userActions: "_userActions_r2ew4_145",
	userAreaInner: "_userAreaInner_r2ew4_152",
	popover: "_popover_r2ew4_158"
};
var MainSidebarUserArea_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarUserArea_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarUserArea_vue_vue_type_style_index_0_lang_module_default }]]);
export { MainSidebarUserArea_default as t };
