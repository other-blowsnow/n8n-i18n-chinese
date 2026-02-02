import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Li as N8nHeading_default, Mi as N8nActionBox_default, bt as N8nActionToggle_default, ht as N8nCard_default, n as Loading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-qBZsmf9-.js";
import "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import { t as require_dateformat } from "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import { t as TimeAgo_default } from "./TimeAgo-DjW9pnWX.js";
import { t as useCredentialResolvers } from "./useCredentialResolvers-iDWNfv6j.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = { key: 1 };
var _hoisted_2 = { key: 2 };
var docsUrl = "https://docs.n8n.io/";
var ResolversView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResolversView",
	setup(__props) {
		const i18n = useI18n();
		const { resolvers, resolverTypes, isLoading, fetchResolvers, fetchResolverTypes, deleteResolver, openCreateModal, openEditModal } = useCredentialResolvers();
		const RESOLVER_LIST_ITEM_ACTIONS = {
			EDIT: "edit",
			DELETE: "delete"
		};
		onMounted(async () => {
			await Promise.all([fetchResolvers(), fetchResolverTypes()]);
		});
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
		function getDateFormat(date) {
			return `d mmmm${String(date).startsWith(currentYear) ? "" : ", yyyy"}`;
		}
		const actions = computed(() => {
			return [{
				label: i18n.baseText("credentialResolver.action.edit"),
				value: RESOLVER_LIST_ITEM_ACTIONS.EDIT
			}, {
				label: i18n.baseText("credentialResolver.action.delete"),
				value: RESOLVER_LIST_ITEM_ACTIONS.DELETE
			}];
		});
		function createResolver() {
			openCreateModal();
		}
		function editResolver(resolver) {
			openEditModal(resolver.id);
		}
		async function handleDeleteResolver(resolver) {
			if (await deleteResolver(resolver)) fetchResolvers();
		}
		async function onAction(action, resolver) {
			switch (action) {
				case RESOLVER_LIST_ITEM_ACTIONS.EDIT:
					editResolver(resolver);
					break;
				case RESOLVER_LIST_ITEM_ACTIONS.DELETE:
					await handleDeleteResolver(resolver);
					break;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(["mb-xl", _ctx.$style.headerContainer]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nHeading_default), {
				tag: "h1",
				size: "2xlarge"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.view.title")), 1)]),
				_: 1
			}), unref(resolvers).length ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.view.description")) + " " + toDisplayString(unref(i18n).baseText("credentialResolver.view.learnMore")) + " ", 1), createVNode(unref(N8nLink_default), {
					theme: "text",
					href: docsUrl,
					size: "medium",
					"new-window": ""
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.link) }, [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })], 2)]),
					_: 1
				})]),
				_: 1
			})) : createCommentVNode("", true)], 2)], 2), unref(isLoading) && unref(resolvers).length === 0 ? (openBlock(), createBlock(unref(Loading_default), {
				key: 0,
				rows: 5,
				"shrink-last": false
			})) : unref(resolvers).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nActionBox_default), {
				class: "mt-2xl mb-l",
				description: "yes"
			}, {
				description: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCardContainer) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), { icon: "key-round" })], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), { icon: "split" })], 2),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), { icon: "user" })], 2)
					], 2),
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						align: "center",
						class: "mb-2xs"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" Resolve dynamic credentials from user identity ", -1)])]),
						_: 1
					}),
					createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("credentialResolver.view.description")), 1)
				]),
				additionalContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "highlight",
					class: "mr-2xs",
					element: "a",
					href: docsUrl,
					target: "_blank"
				}, {
					default: withCtx(() => [_cache[1] || (_cache[1] = createTextVNode(" Learn more ", -1)), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					onClick: createResolver
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.addNew")), 1)]),
					_: 1
				})]),
				_: 1
			})])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionBar) }, [createVNode(unref(N8nButton_default), {
				class: "ml-auto",
				type: "primary",
				icon: "plus",
				onClick: createResolver
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.addNew")), 1)]),
				_: 1
			})], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(resolvers), (resolver) => {
				return openBlock(), createBlock(unref(N8nCard_default), {
					key: resolver.id,
					class: "mb-2xs",
					hoverable: "",
					onClick: withModifiers(($event) => editResolver(resolver), ["stop"])
				}, {
					prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "resolver",
						color: "text-dark",
						size: 28
					})]),
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						tag: "h2",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(resolver.name), 1)]),
						_: 2
					}, 1024)]),
					append: withCtx(() => [createVNode(unref(N8nActionToggle_default), {
						actions: actions.value,
						onAction: ($event) => onAction($event, resolver)
					}, null, 8, ["actions", "onAction"])]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(resolverTypes).find(({ name }) => name === resolver.type)?.displayName || resolver.type) + " | ", 1)]),
							_: 2
						}, 1024),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [
								createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.item.updated")) + " ", 1),
								createVNode(TimeAgo_default, { date: resolver.updatedAt.toString() }, null, 8, ["date"]),
								_cache[2] || (_cache[2] = createTextVNode(" | ", -1))
							]),
							_: 2
						}, 1024),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolver.item.created")) + " " + toDisplayString(unref(import_dateformat.default)(resolver.createdAt, getDateFormat(resolver.createdAt))), 1)]),
							_: 2
						}, 1024)
					], 2)]),
					_: 2
				}, 1032, ["onClick"]);
			}), 128))]))], 2);
		};
	}
});
var ResolversView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1gz34_2",
	headerContainer: "_headerContainer_1gz34_7",
	actionBar: "_actionBar_1gz34_13",
	headerTitle: "_headerTitle_1gz34_19",
	iconCardContainer: "_iconCardContainer_1gz34_25",
	iconCard: "_iconCard_1gz34_25",
	link: "_link_1gz34_57"
};
var ResolversView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResolversView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResolversView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ResolversView_default as default };
