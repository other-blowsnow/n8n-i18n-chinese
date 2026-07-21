import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-Cb7jeMu8.js";
import { $i as N8nIconButton_default, Ct as useRoute, Qi as Input_default, U as N8nResizeWrapper_default, b as N8nScrollArea_default, qt as N8nActionDropdown_default, ro as N8nIcon_default, to as N8nText_default, tt as N8nMenuItem_default, wt as useRouter } from "./src-DAbbz2gO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-y8hdUnLa.js";
import { t as useToast } from "./useToast-BAwEZJlf.js";
import { n as BottomMenu_default, t as MainSidebarHeader_default } from "./MainSidebarHeader-gwRebALx.js";
import { t as BaseLayout_default } from "./BaseLayout-CAgUJK0y.js";
import { hi as VIEWS } from "./constants-BG93cxLW.js";
import { st as useCredentialsStore } from "./workflowDocument.store-CUnvofeB.js";
import { p as useTelemetry } from "./users.store-ChwfO1rT.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-B5qxsorw.js";
import { a as CHAT_PERSONAL_AGENTS_VIEW, c as CHAT_VIEW, l as CHAT_WORKFLOW_AGENTS_VIEW, n as CHAT_CONVERSATION_VIEW } from "./constants-DJiEAzZ_.js";
import { t as useKeybindings } from "./useKeybindings-BcRGYBaQ.js";
import { t as useChatStore } from "./chat.store-Bj0Y01T_.js";
import { T as unflattenModel, p as groupConversationsByDate } from "./chat.utils-BZvom_4O.js";
import { t as useSettingsItems } from "./useSettingsItems-APpsLq7J.js";
import { t as useSidebarLayout } from "./useSidebarLayout-1yuJoW4s.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-C6kvuVKb.js";
//#region src/features/ai/chatHub/components/ChatSidebarLink.vue?vue&type=script&setup=true&lang.ts
var ChatSidebarLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarLink",
	props: {
		active: {
			type: Boolean,
			default: false
		},
		to: {},
		label: {},
		title: {},
		menuItems: { default: () => [] },
		icon: {},
		compact: { type: Boolean }
	},
	emits: ["actionSelect", "click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.menuItem, { [_ctx.$style.active]: __props.active }]) }, [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(_component_RouterLink, {
				to: __props.to,
				class: normalizeClass([_ctx.$style.menuItemLink, { [_ctx.$style.compact]: __props.compact }]),
				title: __props.title,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "icon", {}, () => [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					size: "large",
					icon: __props.icon
				}, null, 8, ["icon"])) : createCommentVNode("", true)]), !__props.compact ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.textContainer)
				}, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.label),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["class"])], 2)) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"to",
				"class",
				"title"
			]), !__props.compact && __props.menuItems.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
				key: 0,
				items: __props.menuItems,
				class: normalizeClass(_ctx.$style.actionDropdown),
				placement: "bottom-start",
				onSelect: _cache[1] || (_cache[1] = ($event) => emit("actionSelect", $event)),
				onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					icon: "ellipsis-vertical",
					class: normalizeClass(_ctx.$style.actionDropdownTrigger)
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["items", "class"])) : createCommentVNode("", true)], 64))], 2);
		};
	}
});
var ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default = {
	menuItem: "_menuItem_1mhhm_125",
	active: "_active_1mhhm_131",
	menuItemLink: "_menuItemLink_1mhhm_135",
	compact: "_compact_1mhhm_147",
	textContainer: "_textContainer_1mhhm_154",
	label: "_label_1mhhm_160",
	title: "_title_1mhhm_169",
	actionDropdown: "_actionDropdown_1mhhm_178",
	actionDropdownTrigger: "_actionDropdownTrigger_1mhhm_189"
};
var ChatSidebarLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatSessionMenuItem.vue?vue&type=script&setup=true&lang.ts
var ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSessionMenuItem",
	props: {
		session: {},
		isRenaming: { type: Boolean },
		active: { type: Boolean },
		compact: { type: Boolean }
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
					params: { id: __props.session.id }
				},
				active: __props.active,
				compact: __props.compact,
				"menu-items": dropdownItems.value,
				label: __props.session.agentName,
				title: __props.session.title,
				onActionSelect: handleActionSelect
			}, createSlots({
				icon: withCtx(() => [createVNode(ChatAgentAvatar_default, {
					agent: agent.value,
					size: "sm",
					class: normalizeClass(_ctx.$style.avatar)
				}, null, 8, ["agent", "class"])]),
				_: 2
			}, [__props.isRenaming ? {
				name: "default",
				fn: withCtx(() => [createVNode(unref(Input_default), {
					ref_key: "input",
					ref: input,
					modelValue: editedLabel.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedLabel.value = $event),
					size: "large",
					onBlur: handleBlur,
					onKeydown: handleKeyDown
				}, null, 8, ["modelValue"])]),
				key: "0"
			} : void 0]), 1032, [
				"to",
				"active",
				"compact",
				"menu-items",
				"label",
				"title"
			]);
		};
	}
});
var ChatSessionMenuItem_vue_vue_type_style_index_0_lang_module_default = { avatar: "_avatar_1006s_125" };
var ChatSessionMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSessionMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/SkeletonMenuItem.vue?vue&type=style&index=0&lang.module.scss
var skeletonItem = "_skeletonItem_um304_343";
var skeletonAvatar = "_skeletonAvatar_um304_352";
var skeletonText = "_skeletonText_um304_353";
var shimmer = "_shimmer_um304_1";
var spin = "_spin_um304_1";
var opacityPulse = "_opacityPulse_um304_1";
var popoverIn = "_popoverIn_um304_1";
var fadeIn = "_fadeIn_um304_1";
var collapsibleSlideDown = "_collapsibleSlideDown_um304_1";
var collapsibleSlideUp = "_collapsibleSlideUp_um304_1";
var pulseGlow = "_pulseGlow_um304_1";
var pulseGlowDelayed = "_pulseGlowDelayed_um304_1";
var fade = "_fade_um304_1";
var fadeInUp = "_fadeInUp_um304_1";
var fadeInDown = "_fadeInDown_um304_1";
var fadeInLeft = "_fadeInLeft_um304_1";
var fadeInRight = "_fadeInRight_um304_1";
var fadeOut = "_fadeOut_um304_1";
var fadeOutDown = "_fadeOutDown_um304_1";
var fadeOutUp = "_fadeOutUp_um304_1";
var fadeOutLeft = "_fadeOutLeft_um304_1";
var fadeOutRight = "_fadeOutRight_um304_1";
var ping = "_ping_um304_1";
var blinkBackground = "_blinkBackground_um304_1";
var typingBlink = "_typingBlink_um304_1";
var SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default = {
	skeletonItem,
	skeletonAvatar,
	skeletonText,
	"skeleton-pulse": "_skeleton-pulse_um304_1",
	shimmer,
	spin,
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
//#endregion
//#region src/features/ai/chatHub/components/SkeletonMenuItem.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.skeletonItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonAvatar) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonText) }, null, 2)], 2);
}
var SkeletonMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebarContent.vue?vue&type=script&setup=true&lang.ts
var ChatSidebarContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarContent",
	props: { isCollapsed: { type: Boolean } },
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const chatStore = useChatStore();
		const toast = useToast();
		const message = useMessage();
		const credentialsStore = useCredentialsStore();
		const telemetry = useTelemetry();
		const readyToShowSessions = computed(() => chatStore.sessionsReady && credentialsStore.allCredentialTypes.length > 0);
		const i18n = useI18n();
		const renamingSessionId = ref();
		const currentSessionId = computed(() => typeof route.params.id === "string" ? route.params.id : void 0);
		const groupedConversations = computed(() => groupConversationsByDate((chatStore.sessions.ids ?? []).reduce((acc, id) => {
			const session = chatStore.sessions.byId[id];
			if (session && session.type !== "manual") acc.push(session);
			return acc;
		}, [])));
		const newChat = computed(() => ({
			id: "new-chat",
			label: i18n.baseText("chatHub.sidebar.link.newChat"),
			icon: "plus",
			route: { to: {
				name: CHAT_VIEW,
				force: true
			} }
		}));
		const personalAgents = computed(() => ({
			id: "personal-agents",
			label: i18n.baseText("chatHub.sidebar.link.personalAgents"),
			icon: "message-square",
			route: { to: { name: CHAT_PERSONAL_AGENTS_VIEW } }
		}));
		const workflowAgents = computed(() => ({
			id: "workflow-agents",
			label: i18n.baseText("chatHub.sidebar.link.workflowAgents"),
			icon: "robot",
			route: { to: { name: CHAT_WORKFLOW_AGENTS_VIEW } }
		}));
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
			telemetry.track("User clicked new chat button", { source: "chat_hub" });
		}
		onMounted(() => {
			chatStore.fetchSessions(true, {
				minLoadingTime: 250,
				type: "production"
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [createBaseVNode("div", { class: normalizeClass({
				[_ctx.$style.links]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "right",
					label: unref(i18n).baseText("chatHub.sidebar.link.newChat"),
					"show-after": 500,
					shortcut: {
						keys: ["o"],
						metaKey: true,
						shiftKey: true
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						item: newChat.value,
						compact: __props.isCollapsed,
						active: unref(route).name === unref(CHAT_VIEW),
						onClick: handleNewChatClick
					}, null, 8, [
						"item",
						"compact",
						"active"
					])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nMenuItem_default), {
					item: personalAgents.value,
					compact: __props.isCollapsed,
					active: unref(route).name === unref(CHAT_PERSONAL_AGENTS_VIEW)
				}, null, 8, [
					"item",
					"compact",
					"active"
				]),
				createVNode(unref(N8nMenuItem_default), {
					item: workflowAgents.value,
					compact: __props.isCollapsed,
					active: unref(route).name === unref(CHAT_WORKFLOW_AGENTS_VIEW)
				}, null, 8, [
					"item",
					"compact",
					"active"
				])
			], 2), createVNode(unref(N8nScrollArea_default), {
				"as-child": "",
				type: "scroll"
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.historySections, { [_ctx.$style.collapsed]: __props.isCollapsed }]),
					"data-test-id": "chat-conversation-list"
				}, [!readyToShowSessions.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.group)
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
					return createVNode(SkeletonMenuItem_default, { key: `loading-${i}` });
				}), 64))], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(groupedConversations.value, (group, index) => {
					return openBlock(), createElementBlock("div", {
						key: group.group,
						class: normalizeClass(_ctx.$style.group)
					}, [
						!__props.isCollapsed ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.groupHeader),
							size: "small",
							bold: "",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(group.group), 1)]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(group.sessions, (session) => {
							return openBlock(), createBlock(ChatSessionMenuItem_default, {
								key: session.id,
								session,
								compact: __props.isCollapsed,
								active: currentSessionId.value === session.id,
								"is-renaming": renamingSessionId.value === session.id,
								onStartRename: handleStartRename,
								onCancelRename: handleCancelRename,
								onConfirmRename: handleConfirmRename,
								onDelete: handleDeleteSession
							}, null, 8, [
								"session",
								"compact",
								"active",
								"is-renaming"
							]);
						}), 128)),
						index === groupedConversations.value.length - 1 && unref(chatStore).sessions.hasMore && !unref(chatStore).sessionsLoading ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: {
								id: "load-more-sessions",
								label: unref(i18n).baseText("chatHub.sidebar.loadMoreSessions"),
								icon: "circle-ellipsis"
							},
							compact: __props.isCollapsed,
							onClick: _cache[0] || (_cache[0] = () => unref(chatStore).fetchMoreSessions({ minLoadingTime: 250 }))
						}, null, 8, ["item", "compact"])) : createCommentVNode("", true),
						index === groupedConversations.value.length - 1 && unref(chatStore).sessionsLoading ? (openBlock(), createElementBlock(Fragment, { key: 2 }, renderList(10, (i) => {
							return createVNode(SkeletonMenuItem_default, { key: i });
						}), 64)) : createCommentVNode("", true)
					], 2);
				}), 128))], 2)]),
				_: 1
			})], 2);
		};
	}
});
var ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default = {
	logoContainer: "_logoContainer_1vnf8_125",
	component: "_component_1vnf8_131",
	header: "_header_1vnf8_137",
	logo: "_logo_1vnf8_125",
	links: "_links_1vnf8_153",
	collapsed: "_collapsed_1vnf8_158",
	historySections: "_historySections_1vnf8_162",
	group: "_group_1vnf8_172",
	groupHeader: "_groupHeader_1vnf8_178",
	loading: "_loading_1vnf8_182",
	empty: "_empty_1vnf8_183"
};
var ChatSidebarContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebar.vue?vue&type=script&setup=true&lang.ts
var ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebar",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const { isCollapsed, isResizing, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		const { settingsItems } = useSettingsItems();
		const mainMenuItems = computed(() => [{
			id: "settings",
			label: i18n.baseText("mainSidebar.settings"),
			icon: "settings",
			available: true,
			children: settingsItems.value
		}]);
		const visibleMenuItems = computed(() => mainMenuItems.value.filter((item) => item.available !== false));
		useKeybindings({ ["bracketleft"]: () => toggleCollapse() });
		const onLogout = () => {
			router.push({ name: VIEWS.SIGNOUT });
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nResizeWrapper_default), {
				id: "side-menu",
				class: normalizeClass({
					[_ctx.$style.sideMenu]: true,
					[_ctx.$style.sideMenuCollapsed]: unref(isCollapsed),
					[_ctx.$style.sideMenuResizing]: unref(isResizing)
				}),
				width: unref(sidebarWidth),
				style: normalizeStyle(unref(isCollapsed) ? {} : { width: `${unref(sidebarWidth)}px` }),
				"supported-directions": ["right"],
				"min-width": 200,
				"max-width": 500,
				"grid-size": 8,
				onResizestart: unref(onResizeStart),
				onResize: unref(onResize),
				onResizeend: unref(onResizeEnd)
			}, {
				default: withCtx(() => [createVNode(MainSidebarHeader_default, {
					"hide-create": "",
					"is-collapsed": unref(isCollapsed),
					onCollapse: unref(toggleCollapse),
					onOpenCommandBar: openCommandBar
				}, null, 8, ["is-collapsed", "onCollapse"]), createVNode(unref(N8nScrollArea_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scrollArea) }, [createVNode(ChatSidebarContent_default, { "is-collapsed": unref(isCollapsed) }, null, 8, ["is-collapsed"]), createVNode(BottomMenu_default, {
						items: visibleMenuItems.value,
						"is-collapsed": unref(isCollapsed),
						onLogout
					}, null, 8, ["items", "is-collapsed"])], 2)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"class",
				"width",
				"style",
				"onResizestart",
				"onResize",
				"onResizeend"
			]);
		};
	}
});
var ChatSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sideMenu: "_sideMenu_1xh5g_125",
	sideMenuCollapsed: "_sideMenuCollapsed_1xh5g_135",
	sideMenuResizing: "_sideMenuResizing_1xh5g_139",
	scrollArea: "_scrollArea_1xh5g_143"
};
var ChatSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/layouts/ChatLayout.vue
var ChatLayout_default = /* @__PURE__ */ defineComponent({
	__name: "ChatLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(ChatSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { ChatLayout_default as default };
