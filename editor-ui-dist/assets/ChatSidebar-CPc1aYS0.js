import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, k as createSlots, mt as useTemplateRef, ot as resolveComponent, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, In as N8nText_default, M as N8nLogo_default, Tt as N8nIconButton_default, i as N8nScrollArea_default, tt as N8nActionDropdown_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import "./dialog-CzxM5dHR.js";
import { t as ModalDrawer_default } from "./ModalDrawer-Bg5aO4kb.js";
import { Bo as useSettingsStore, Ni as useUIStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { No as MODAL_CONFIRM, mo as VIEWS, vo as CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./retry-sDkwzrPY.js";
import "./CredentialIcon-BTWsGB9X.js";
import { a as MOBILE_MEDIA_QUERY, i as CHAT_VIEW, n as CHAT_CONVERSATION_VIEW, t as CHAT_AGENTS_VIEW } from "./constants-9ReQTHaF.js";
import { t as MainSidebarUserArea_default } from "./MainSidebarUserArea-ns2gnf4W.js";
import { f as unflattenModel, l as groupConversationsByDate, n as ChatAgentAvatar_default, r as useChatStore, t as useChatHubSidebarState } from "./useChatHubSidebarState-CIMmDtyQ.js";
import { t as useAgent } from "./useAgent-C4F--s-E.js";
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
			}, 8, ["to", "class"]), _ctx.menuItems.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
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
	menuItem: "_menuItem_xggh1_123",
	active: "_active_xggh1_129",
	menuItemLink: "_menuItemLink_xggh1_133",
	label: "_label_xggh1_149",
	actionDropdown: "_actionDropdown_xggh1_158",
	actionDropdownTrigger: "_actionDropdownTrigger_xggh1_169"
};
var ChatSidebarLink_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const agent = useAgent(computed(() => unflattenModel(__props.session)));
		const dropdownItems = computed(() => [{
			id: "rename",
			label: "Rename",
			icon: "pencil"
		}, {
			id: "delete",
			label: "Delete",
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
			if (e.key === "Enter") handleBlur();
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
					agent: unref(agent) ?? null,
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
		const telemetry = useTelemetry();
		const renamingSessionId = ref();
		const currentSessionId = computed(() => typeof route.params.id === "string" ? route.params.id : void 0);
		const readyToShowConversations = computed(() => chatStore.agentsReady && chatStore.sessionsReady);
		const groupedConversations = computed(() => groupConversationsByDate(chatStore.sessions));
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
				toast.showError(error, "Could not update the conversation title.");
			}
		}
		async function handleDeleteSession(sessionId) {
			if (await message.confirm("Are you sure you want to delete this conversation?", "Delete conversation", {
				confirmButtonText: "Delete",
				cancelButtonText: "Cancel"
			}) !== "confirm") return;
			try {
				await chatStore.deleteSession(sessionId);
				toast.showMessage({
					type: "success",
					title: "Conversation is deleted"
				});
				if (sessionId === currentSessionId.value) router.push({ name: CHAT_VIEW });
			} catch (error) {
				toast.showError(error, "Could not delete the conversation");
			}
		}
		function handleNewChatClick() {
			telemetry.track("User clicked new chat button", {});
			sidebar.toggleOpen(false);
		}
		onMounted(() => {
			chatStore.fetchSessions();
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, { [_ctx.$style.isMobileDevice]: _ctx.isMobileDevice }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(_component_RouterLink, { to: { name: unref(VIEWS).HOMEPAGE } }, {
					default: withCtx(() => [createVNode(unref(N8nLogo_default), {
						class: normalizeClass(_ctx.$style.logo),
						size: "small",
						collapsed: false,
						"release-channel": unref(settingsStore).settings.releaseChannel
					}, null, 8, ["class", "release-channel"])]),
					_: 1
				}, 8, ["to"]), unref(sidebar).canBeStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					title: "Toggle menu",
					icon: "panel-left",
					type: "tertiary",
					text: "",
					size: "small",
					"icon-size": "large",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(sidebar).toggleStatic())
				})) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [createVNode(ChatSidebarLink_default, {
					to: {
						name: unref(CHAT_VIEW),
						force: true
					},
					label: "New Chat",
					icon: "square-pen",
					active: unref(route).name === unref(CHAT_VIEW),
					onClick: handleNewChatClick
				}, null, 8, ["to", "active"]), createVNode(ChatSidebarLink_default, {
					to: { name: unref(CHAT_AGENTS_VIEW) },
					label: "Custom Agents",
					icon: "robot",
					active: unref(route).name === unref(CHAT_AGENTS_VIEW),
					onClick: _cache[1] || (_cache[1] = ($event) => unref(sidebar).toggleOpen(false))
				}, null, 8, ["to", "active"])], 2),
				createVNode(unref(N8nScrollArea_default), {
					"as-child": "",
					type: "scroll"
				}, {
					default: withCtx(() => [readyToShowConversations.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.items)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(groupedConversations.value, (group$1) => {
						return openBlock(), createElementBlock("div", {
							key: group$1.group,
							class: normalizeClass(_ctx.$style.group)
						}, [createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.groupHeader),
							size: "small",
							bold: "",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(group$1.group), 1)]),
							_: 2
						}, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(group$1.sessions, (session) => {
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
						}), 128))], 2);
					}), 128))], 2)) : createCommentVNode("", true)]),
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
	component: "_component_6tn5s_123",
	isMobileDevice: "_isMobileDevice_6tn5s_129",
	header: "_header_6tn5s_133",
	logo: "_logo_6tn5s_144",
	items: "_items_6tn5s_149",
	group: "_group_6tn5s_159",
	groupHeader: "_groupHeader_6tn5s_165",
	loading: "_loading_6tn5s_169",
	empty: "_empty_6tn5s_170"
};
var ChatSidebarContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebar",
	setup(__props) {
		const uiStore = useUIStore();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const route = useRoute();
		const sidebar = useChatHubSidebarState();
		watch(() => route.fullPath, () => uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY));
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
	drawer: "_drawer_1yjrp_123",
	inDrawer: "_inDrawer_1yjrp_127",
	"static": "_static_1yjrp_128"
};
var ChatSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatSidebar_default as default };
