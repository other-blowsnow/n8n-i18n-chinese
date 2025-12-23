import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, k as createSlots, mt as useTemplateRef, ot as resolveComponent, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { A as useIntersectionObserver, D as useEventListener, M as useMediaQuery, gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Ct as useI18n$1, D as N8nPopoverReka_default, Gn as N8nIcon_default, Hn as N8nText_default, I as N8nLogo_default, P as N8nMenuItem_default, ot as N8nActionDropdown_default, rt as N8nAvatar_default, s as N8nScrollArea_default, xt as N8nIconButton_default, yt as N8nInput_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-LAVj4VkL.js";
import "./dialog-B6i5gbQO.js";
import { t as ModalDrawer_default } from "./ModalDrawer-BBrWReJP.js";
import { $o as useSettingsStore, Wi as useUIStore, dr as useUsersStore, en as useCredentialsStore, n as useToast, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Go as CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY, Vo as VIEWS, ss as MODAL_CONFIRM } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./retry-CMAFrhVi.js";
import "./CredentialIcon-CHvZKgl9.js";
import { a as CHAT_PERSONAL_AGENTS_VIEW, d as MOBILE_MEDIA_QUERY, l as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, u as CHAT_WORKFLOW_AGENTS_VIEW } from "./constants-qk3hx0l8.js";
import { c as groupConversationsByDate, p as unflattenModel, t as useChatStore } from "./chat.store-DnJwLoWK.js";
import "./fileUtils-D3GQ2UWQ.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-hwD4RBR6.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-BVw6kDBQ.js";
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
var ChatSidebarLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarLink",
	props: {
		active: {
			type: Boolean,
			default: false
		},
		to: {},
		label: {},
		menuItems: { default: () => [] },
		icon: {}
	},
	emits: ["actionSelect", "click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.menuItem, { [_ctx.$style.active]: _ctx.active }]) }, [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(_component_RouterLink, {
				to: _ctx.to,
				class: normalizeClass(_ctx.$style.menuItemLink),
				title: _ctx.label,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "icon", {}, () => [_ctx.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					size: "large",
					icon: _ctx.icon
				}, null, 8, ["icon"])) : createCommentVNode("", true)]), createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.label) }, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.label), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 3
			}, 8, [
				"to",
				"class",
				"title"
			]), _ctx.menuItems.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
				key: 0,
				items: _ctx.menuItems,
				class: normalizeClass(_ctx.$style.actionDropdown),
				placement: "bottom-start",
				onSelect: _cache[1] || (_cache[1] = ($event) => emit("actionSelect", $event)),
				onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "ellipsis-vertical",
					type: "tertiary",
					text: "",
					class: normalizeClass(_ctx.$style.actionDropdownTrigger)
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["items", "class"])) : createCommentVNode("", true)], 64))], 2);
		};
	}
});
var ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default = {
	menuItem: "_menuItem_2vbio_123",
	active: "_active_2vbio_129",
	menuItemLink: "_menuItemLink_2vbio_133",
	label: "_label_2vbio_149",
	actionDropdown: "_actionDropdown_2vbio_158",
	actionDropdownTrigger: "_actionDropdownTrigger_2vbio_169"
};
var ChatSidebarLink_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default }]]);
var BetaTag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BetaTag",
	setup(__props) {
		const { t } = useI18n$1();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.beta) }, toDisplayString(unref(t)("betaTag.beta")), 3);
		};
	}
});
var BetaTag_vue_vue_type_style_index_0_lang_module_default = { beta: "_beta_1t1w7_123" };
var BetaTag_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BetaTag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BetaTag_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatSessionMenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSessionMenuItem",
	props: {
		session: {},
		isRenaming: { type: Boolean },
		active: { type: Boolean }
	},
	emits: [
		"startRename",
		"cancelRename",
		"confirmRename",
		"delete"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const input = useTemplateRef("input");
		const editedLabel = ref("");
		const chatStore = useChatStore();
		const i18n = useI18n();
		const agent = computed(() => {
			const model = unflattenModel(__props.session);
			if (!model) return null;
			return chatStore.getAgent(model, {
				name: __props.session.agentName,
				icon: __props.session.agentIcon
			});
		});
		const dropdownItems = computed(() => [{
			id: "rename",
			label: i18n.baseText("chatHub.session.actions.rename"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("chatHub.session.actions.delete"),
			icon: "trash-2"
		}]);
		function handleActionSelect(action) {
			if (action === "rename") {
				editedLabel.value = __props.session.title;
				emit("startRename", __props.session.id);
			} else if (action === "delete") emit("delete", __props.session.id);
		}
		function handleBlur() {
			const trimmed = editedLabel.value.trim();
			if (trimmed && trimmed !== __props.session.title) emit("confirmRename", __props.session.id, trimmed);
			else emit("cancelRename");
		}
		function handleKeyDown(e) {
			if (e.key === "Escape") {
				emit("cancelRename");
				return;
			}
			if (e.key === "Enter" && !e.isComposing) handleBlur();
		}
		watch(() => __props.isRenaming, async (renaming) => {
			if (renaming) {
				editedLabel.value = __props.session.title;
				await nextTick();
				input.value?.focus();
				input.value?.select();
			} else editedLabel.value = "";
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatSidebarLink_default, {
				to: {
					name: unref(CHAT_CONVERSATION_VIEW),
					params: { id: _ctx.session.id }
				},
				active: _ctx.active,
				"menu-items": dropdownItems.value,
				label: _ctx.session.title,
				onActionSelect: handleActionSelect
			}, createSlots({
				icon: withCtx(() => [createVNode(ChatAgentAvatar_default, {
					agent: agent.value,
					size: "sm"
				}, null, 8, ["agent"])]),
				_: 2
			}, [_ctx.isRenaming ? {
				name: "default",
				fn: withCtx(() => [createVNode(unref(N8nInput_default), {
					size: "small",
					ref_key: "input",
					ref: input,
					modelValue: editedLabel.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedLabel.value = $event),
					onBlur: handleBlur,
					onKeydown: handleKeyDown
				}, null, 8, ["modelValue"])]),
				key: "0"
			} : void 0]), 1032, [
				"to",
				"active",
				"menu-items",
				"label"
			]);
		};
	}
});
var SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default = {
	skeletonItem: "_skeletonItem_zmho6_123",
	skeletonAvatar: "_skeletonAvatar_zmho6_132",
	skeletonText: "_skeletonText_zmho6_133",
	"skeleton-pulse": "_skeleton-pulse_zmho6_1"
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.skeletonItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonAvatar) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonText) }, null, 2)], 2);
}
var SkeletonMenuItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatSidebarContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarContent",
	props: { isMobileDevice: { type: Boolean } },
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const chatStore = useChatStore();
		const toast = useToast();
		const message = useMessage();
		const sidebar = useChatHubSidebarState();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const telemetry = useTelemetry();
		const readyToShowSessions = computed(() => chatStore.sessionsReady && credentialsStore.allCredentialTypes.length > 0);
		const i18n = useI18n();
		const renamingSessionId = ref();
		const loadMoreTrigger$1 = ref(null);
		const currentSessionId = computed(() => typeof route.params.id === "string" ? route.params.id : void 0);
		const groupedConversations = computed(() => groupConversationsByDate((chatStore.sessions.ids ?? []).reduce((acc, id) => {
			const session = chatStore.sessions.byId[id];
			if (session) acc.push(session);
			return acc;
		}, [])));
		function handleStartRename(sessionId) {
			renamingSessionId.value = sessionId;
		}
		function handleCancelRename() {
			renamingSessionId.value = void 0;
		}
		async function handleConfirmRename(sessionId, newLabel) {
			try {
				await chatStore.renameSession(sessionId, newLabel);
				renamingSessionId.value = void 0;
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.session.updateTitle.error"));
			}
		}
		async function handleDeleteSession(sessionId) {
			if (await message.confirm(i18n.baseText("chatHub.session.delete.confirm.message"), i18n.baseText("chatHub.session.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("chatHub.session.delete.confirm.button"),
				cancelButtonText: i18n.baseText("chatHub.session.delete.cancel.button")
			}) !== "confirm") return;
			try {
				await chatStore.deleteSession(sessionId);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("chatHub.session.delete.success")
				});
				if (sessionId === currentSessionId.value) router.push({ name: CHAT_VIEW });
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.session.delete.error"));
			}
		}
		function handleNewChatClick() {
			telemetry.track("User clicked new chat button", {});
			sidebar.toggleOpen(false);
		}
		useIntersectionObserver(loadMoreTrigger$1, ([{ isIntersecting }]) => {
			if (isIntersecting) chatStore.fetchMoreSessions({ minLoadingTime: 250 });
		}, { threshold: .1 });
		onMounted(() => {
			if (!chatStore.sessionsReady) chatStore.fetchSessions(true, { minLoadingTime: 250 });
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, { [_ctx.$style.isMobileDevice]: _ctx.isMobileDevice }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(_component_RouterLink, { to: { name: unref(VIEWS).HOMEPAGE } }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.logoContainer) }, [createVNode(unref(N8nLogo_default), {
						class: normalizeClass(_ctx.$style.logo),
						size: "small",
						collapsed: false,
						"release-channel": unref(settingsStore).settings.releaseChannel
					}, null, 8, ["class", "release-channel"]), createVNode(BetaTag_default)], 2)]),
					_: 1
				}, 8, ["to"]), unref(sidebar).canBeStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					title: unref(i18n).baseText("chatHub.sidebar.button.toggle"),
					icon: "panel-left",
					type: "tertiary",
					text: "",
					size: "small",
					"icon-size": "large",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(sidebar).toggleStatic())
				}, null, 8, ["title"])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.links) }, [
					createVNode(ChatSidebarLink_default, {
						to: {
							name: unref(CHAT_VIEW),
							force: true
						},
						label: unref(i18n).baseText("chatHub.sidebar.link.newChat"),
						icon: "square-pen",
						active: unref(route).name === unref(CHAT_VIEW),
						onClick: handleNewChatClick
					}, null, 8, [
						"to",
						"label",
						"active"
					]),
					createVNode(ChatSidebarLink_default, {
						to: { name: unref(CHAT_PERSONAL_AGENTS_VIEW) },
						label: unref(i18n).baseText("chatHub.sidebar.link.personalAgents"),
						icon: "message-square",
						active: unref(route).name === unref(CHAT_PERSONAL_AGENTS_VIEW),
						onClick: _cache[1] || (_cache[1] = ($event) => unref(sidebar).toggleOpen(false))
					}, null, 8, [
						"to",
						"label",
						"active"
					]),
					createVNode(ChatSidebarLink_default, {
						to: { name: unref(CHAT_WORKFLOW_AGENTS_VIEW) },
						label: unref(i18n).baseText("chatHub.sidebar.link.workflowAgents"),
						icon: "robot",
						active: unref(route).name === unref(CHAT_WORKFLOW_AGENTS_VIEW),
						onClick: _cache[2] || (_cache[2] = ($event) => unref(sidebar).toggleOpen(false))
					}, null, 8, [
						"to",
						"label",
						"active"
					])
				], 2),
				createVNode(unref(N8nScrollArea_default), {
					"as-child": "",
					type: "scroll"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.historySections) }, [!readyToShowSessions.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.group)
					}, [(openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
						return createVNode(SkeletonMenuItem_default, { key: `loading-${i}` });
					}), 64))], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(groupedConversations.value, (group$1, index) => {
						return openBlock(), createElementBlock("div", {
							key: group$1.group,
							class: normalizeClass(_ctx.$style.group)
						}, [
							createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.groupHeader),
								size: "small",
								bold: "",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(group$1.group), 1)]),
								_: 2
							}, 1032, ["class"]),
							(openBlock(true), createElementBlock(Fragment, null, renderList(group$1.sessions, (session) => {
								return openBlock(), createBlock(ChatSessionMenuItem_default, {
									key: session.id,
									session,
									active: currentSessionId.value === session.id,
									"is-renaming": renamingSessionId.value === session.id,
									onStartRename: handleStartRename,
									onCancelRename: handleCancelRename,
									onConfirmRename: handleConfirmRename,
									onDelete: handleDeleteSession
								}, null, 8, [
									"session",
									"active",
									"is-renaming"
								]);
							}), 128)),
							index === groupedConversations.value.length - 1 && unref(chatStore).sessionsLoading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(10, (i) => {
								return createVNode(SkeletonMenuItem_default, { key: i });
							}), 64)) : createCommentVNode("", true)
						], 2);
					}), 128)), createBaseVNode("div", {
						ref_key: "loadMoreTrigger",
						ref: loadMoreTrigger$1,
						class: normalizeClass(_ctx.$style.loadMoreTrigger)
					}, null, 2)], 2)]),
					_: 1
				}),
				createVNode(MainSidebarUserArea_default, {
					"fully-expanded": true,
					"is-collapsed": false
				})
			], 2);
		};
	}
});
var ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default = {
	logoContainer: "_logoContainer_1ggmz_123",
	component: "_component_1ggmz_129",
	isMobileDevice: "_isMobileDevice_1ggmz_135",
	header: "_header_1ggmz_139",
	logo: "_logo_1ggmz_123",
	links: "_links_1ggmz_155",
	historySections: "_historySections_1ggmz_162",
	group: "_group_1ggmz_172",
	groupHeader: "_groupHeader_1ggmz_178",
	loadMoreTrigger: "_loadMoreTrigger_1ggmz_182",
	loading: "_loading_1ggmz_187",
	empty: "_empty_1ggmz_188"
};
var ChatSidebarContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default }]]);
var EDGE_TRIGGER_DISTANCE = 10;
var ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebar",
	setup(__props) {
		const uiStore = useUIStore();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const route = useRoute();
		const sidebar = useChatHubSidebarState();
		watch(() => route.fullPath, () => uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY));
		useEventListener(window, "mousemove", (event) => {
			if (sidebar.isCollapsed.value && event.clientX <= EDGE_TRIGGER_DISTANCE) sidebar.toggleOpen(true);
		});
		onBeforeUnmount(() => {
			uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
		});
		return (_ctx, _cache) => {
			return unref(sidebar).isStatic.value ? (openBlock(), createBlock(ChatSidebarContent_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.static),
				"is-mobile-device": unref(isMobileDevice$1)
			}, null, 8, ["class", "is-mobile-device"])) : (openBlock(), createBlock(ModalDrawer_default, {
				key: 1,
				direction: "ltr",
				width: "min(240px, 80vw)",
				name: unref(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY),
				class: normalizeClass(_ctx.$style.drawer),
				"close-on-click-modal": true,
				"show-close": false
			}, {
				content: withCtx(() => [createVNode(ChatSidebarContent_default, {
					class: normalizeClass(_ctx.$style.inDrawer),
					"is-mobile-device": unref(isMobileDevice$1)
				}, null, 8, ["class", "is-mobile-device"])]),
				_: 1
			}, 8, ["name", "class"]));
		};
	}
});
var ChatSidebar_vue_vue_type_style_index_0_lang_module_default = {
	drawer: "_drawer_ox5ii_123",
	inDrawer: "_inDrawer_ox5ii_128",
	"static": "_static_ox5ii_129"
};
var ChatSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatSidebar_default as default };
