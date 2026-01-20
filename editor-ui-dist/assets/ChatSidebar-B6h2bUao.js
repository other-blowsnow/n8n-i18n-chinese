import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, at as renderSlot, bn as normalizeStyle, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, k as createSlots, mt as useTemplateRef, ot as resolveComponent, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import { Et as N8nInput_default, On as N8nText_default, Ot as N8nIconButton_default, P as N8nMenuItem_default, c as N8nScrollArea_default, ft as N8nActionDropdown_default, jn as N8nIcon_default, w as N8nResizeWrapper_default } from "./src-Ca6p-F4w.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import { v as useRoute, y as useRouter } from "./truncate-D24O8Gpt.js";
import { Mt as useTelemetry, br as useToast, gr as useMessage, nt as useCredentialsStore } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { n as MainSidebarHeader_default, r as useSidebarLayout, t as BottomMenu_default } from "./BottomMenu-Bc8Bhq6S.js";
import { is as MODAL_CONFIRM, zo as VIEWS } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import "./versions.store-dKvX2_bH.js";
import "./usePageRedirectionHelper-Djhqqrz8.js";
import "./canvas.utils-B0dhpigY.js";
import "./CredentialIcon-DSNX9u5m.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-B0jiPSJu.js";
import { a as CHAT_PERSONAL_AGENTS_VIEW, d as CHAT_WORKFLOW_AGENTS_VIEW, n as CHAT_CONVERSATION_VIEW, u as CHAT_VIEW } from "./constants-Bgby4me8.js";
import { t as useKeybindings } from "./useKeybindings-Bm5AnrA0.js";
import "./useGlobalEntityCreation-B4LQuzHv.js";
import { h as unflattenModel, l as groupConversationsByDate, t as useChatStore } from "./chat.store-DhSXT9Vg.js";
import { t as useSettingsItems } from "./useSettingsItems-CJvPFb7y.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-xg27yDs9.js";
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
	menuItem: "_menuItem_aeqar_123",
	active: "_active_aeqar_129",
	menuItemLink: "_menuItemLink_aeqar_133",
	compact: "_compact_aeqar_145",
	textContainer: "_textContainer_aeqar_152",
	label: "_label_aeqar_158",
	title: "_title_aeqar_167",
	actionDropdown: "_actionDropdown_aeqar_176",
	actionDropdownTrigger: "_actionDropdownTrigger_aeqar_187"
};
var ChatSidebarLink_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default }]]);
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
				fn: withCtx(() => [createVNode(unref(N8nInput_default), {
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
var ChatSessionMenuItem_vue_vue_type_style_index_0_lang_module_default = { avatar: "_avatar_12l0r_123" };
var ChatSessionMenuItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSessionMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
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
			if (session) acc.push(session);
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
			telemetry.track("User clicked new chat button", {});
		}
		onMounted(() => {
			if (!chatStore.sessionsReady) chatStore.fetchSessions(true, { minLoadingTime: 250 });
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
				}), 64))], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(groupedConversations.value, (group$1, index) => {
					return openBlock(), createElementBlock("div", {
						key: group$1.group,
						class: normalizeClass(_ctx.$style.group)
					}, [
						!__props.isCollapsed ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.groupHeader),
							size: "small",
							bold: "",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(group$1.group), 1)]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(group$1.sessions, (session) => {
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
	logoContainer: "_logoContainer_1wljt_123",
	component: "_component_1wljt_129",
	header: "_header_1wljt_135",
	logo: "_logo_1wljt_123",
	links: "_links_1wljt_151",
	collapsed: "_collapsed_1wljt_157",
	historySections: "_historySections_1wljt_161",
	group: "_group_1wljt_171",
	groupHeader: "_groupHeader_1wljt_177",
	loading: "_loading_1wljt_181",
	empty: "_empty_1wljt_182"
};
var ChatSidebarContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebar",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const { isCollapsed, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
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
					[_ctx.$style.sideMenuCollapsed]: unref(isCollapsed)
				}),
				width: unref(sidebarWidth),
				style: normalizeStyle({ width: `${unref(sidebarWidth)}px` }),
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
					"is-beta": "",
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
	sideMenu: "_sideMenu_18grn_123",
	sideMenuCollapsed: "_sideMenuCollapsed_18grn_131",
	scrollArea: "_scrollArea_18grn_136"
};
var ChatSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatSidebar_default as default };
