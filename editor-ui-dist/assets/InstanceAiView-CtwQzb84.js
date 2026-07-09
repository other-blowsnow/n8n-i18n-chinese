import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, f as vModelText, gt as watch, h as withModifiers, j as createVNode, m as withKeys, n as Transition, rt as renderList, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BuOkMaP4.js";
import { Bt as useDeviceSupport, F as N8nResizeWrapper_default, Rt as N8nActionDropdown_default, Wi as N8nIconButton_default, _t as useRouter, dt as RouterView, gt as useRoute, ht as onBeforeRouteLeave, qa as N8nText_default, v as N8nScrollArea_default, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { S as useSessionStorage, m as useEventListener } from "./core-CxAuVuwP.js";
import { f as useUIStore } from "./users.store-Bf6s0cNu.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DByx4tvl.js";
import { n as INSTANCE_AI_THREAD_VIEW, r as INSTANCE_AI_VIEW } from "./constants-CdPER9c3.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BXy6kYoX.js";
import { n as useInstanceAiStore } from "./instanceAi.store-igxxNZzv.js";
import { f as getRelativeDate } from "./chat.utils-2q3cRXfV.js";
import { t as SidebarStateKey } from "./instanceAiLayout-BrRQjZTw.js";
//#region src/features/ai/instanceAi/components/InstanceAiThreadList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onKeydown", "onBlur"];
var InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadList",
	emits: ["collapse"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const editingThreadId = ref(null);
		const editingTitle = ref("");
		const renameInput = ref(null);
		const activeThreadId = computed(() => typeof route.params.threadId === "string" ? route.params.threadId : void 0);
		const threadActions = [{
			id: "rename",
			label: i18n.baseText("instanceAi.sidebar.renameThread"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("instanceAi.sidebar.deleteThread"),
			icon: "trash-2"
		}];
		const dateGroupI18nMap = {
			Today: i18n.baseText("userActivity.today"),
			Yesterday: i18n.baseText("userActivity.yesterday"),
			"This week": i18n.baseText("instanceAi.sidebar.group.thisWeek"),
			Older: i18n.baseText("instanceAi.sidebar.group.older")
		};
		const groupOrder = [
			"Today",
			"Yesterday",
			"This week",
			"Older"
		];
		const groupedThreads = computed(() => {
			const now = /* @__PURE__ */ new Date();
			const groups = /* @__PURE__ */ new Map();
			for (const thread of store.threads) {
				const group = getRelativeDate(now, thread.updatedAt ?? thread.createdAt);
				let threads = groups.get(group);
				if (!threads) {
					threads = [];
					groups.set(group, threads);
				}
				threads.push(thread);
			}
			return groupOrder.flatMap((groupName) => {
				const threads = groups.get(groupName) ?? [];
				return threads.length > 0 ? [{
					label: dateGroupI18nMap[groupName] ?? groupName,
					threads
				}] : [];
			});
		});
		async function handleDeleteThread(threadId) {
			const wasActive = threadId === activeThreadId.value;
			if (!await store.deleteThread(threadId)) return;
			if (wasActive) if (store.threads.length > 0) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId: store.threads[0].id }
			});
			else router.push({ name: INSTANCE_AI_VIEW });
		}
		function startRename(threadId, currentTitle) {
			editingThreadId.value = threadId;
			editingTitle.value = currentTitle;
			nextTick(() => {
				renameInput.value?.focus();
				renameInput.value?.select();
			});
		}
		async function confirmRename(threadId) {
			const title = editingTitle.value.trim();
			try {
				if (title && title !== store.threads.find((t) => t.id === threadId)?.title) await store.renameThread(threadId, title);
			} finally {
				editingThreadId.value = null;
			}
		}
		function cancelRename() {
			editingThreadId.value = null;
		}
		function handleThreadAction(action, threadId) {
			if (action === "delete") handleDeleteThread(threadId);
			else if (action === "rename") {
				const thread = store.threads.find((t) => t.id === threadId);
				if (thread) startRename(threadId, thread.title);
			}
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-thread-list"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.title),
				tag: "div",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.chatHistory")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("instanceAi.sidebar.collapse"),
				placement: "bottom",
				"show-after": unref(500)
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "chevrons-left",
					variant: "ghost",
					size: "small",
					"icon-size": "large",
					"aria-label": unref(i18n).baseText("instanceAi.sidebar.collapse"),
					"data-test-id": "instance-ai-sidebar-collapse",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("collapse"))
				}, null, 8, ["aria-label"])]),
				_: 1
			}, 8, ["content", "show-after"]), createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("instanceAi.thread.new"),
				placement: "bottom",
				"show-after": unref(500)
			}, {
				default: withCtx(() => [createVNode(_component_RouterLink, {
					to: { name: unref(INSTANCE_AI_VIEW) },
					custom: ""
				}, {
					default: withCtx(({ href, navigate }) => [createVNode(unref(N8nIconButton_default), {
						href,
						icon: "plus",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("instanceAi.thread.new"),
						"data-test-id": "instance-ai-new-thread-button",
						onClick: navigate
					}, null, 8, [
						"href",
						"aria-label",
						"onClick"
					])]),
					_: 1
				}, 8, ["to"])]),
				_: 1
			}, 8, ["content", "show-after"])], 2)], 2), createVNode(unref(N8nScrollArea_default), { class: normalizeClass(_ctx.$style.threadList) }, {
				default: withCtx(() => [groupedThreads.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedThreads.value, (group) => {
					return openBlock(), createElementBlock("div", {
						key: group.label,
						class: normalizeClass(_ctx.$style.group)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.groupLabel),
						tag: "div",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
						_: 2
					}, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(group.threads, (thread) => {
						return openBlock(), createElementBlock("div", {
							key: thread.id,
							class: normalizeClass([_ctx.$style.threadItem, { [_ctx.$style.active]: thread.id === activeThreadId.value }]),
							"data-test-id": "instance-ai-thread-item"
						}, [editingThreadId.value === thread.id ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.renameContainer)
						}, [withDirectives(createBaseVNode("input", {
							ref_for: true,
							ref_key: "renameInput",
							ref: renameInput,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editingTitle.value = $event),
							class: normalizeClass(_ctx.$style.renameInput),
							type: "text",
							onKeydown: [withKeys(($event) => confirmRename(thread.id), ["enter"]), withKeys(cancelRename, ["escape"])],
							onBlur: ($event) => confirmRename(thread.id)
						}, null, 42, _hoisted_1), [[vModelText, editingTitle.value]])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(_component_RouterLink, {
							to: {
								name: unref(INSTANCE_AI_THREAD_VIEW),
								params: { threadId: thread.id }
							},
							class: normalizeClass(_ctx.$style.threadLink),
							title: thread.title,
							"active-class": _ctx.$style.threadLinkActive,
							onDblclick: withModifiers(($event) => startRename(thread.id, thread.title), ["prevent"])
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title), 3)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title",
							"active-class",
							"onDblclick"
						]), createVNode(unref(N8nActionDropdown_default), {
							items: threadActions,
							class: normalizeClass(_ctx.$style.actionDropdown),
							placement: "bottom-start",
							onSelect: ($event) => handleThreadAction($event, thread.id),
							onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
						}, {
							activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								icon: "ellipsis-vertical",
								class: normalizeClass(_ctx.$style.actionTrigger)
							}, null, 8, ["class"])]),
							_: 1
						}, 8, ["class", "onSelect"])], 64))], 2);
					}), 128))], 2);
				}), 128)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.noThreads")), 1)]),
					_: 1
				})], 2))]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_5luso_125",
	header: "_header_5luso_132",
	title: "_title_5luso_140",
	headerActions: "_headerActions_5luso_149",
	threadList: "_threadList_5luso_155",
	group: "_group_5luso_161",
	groupLabel: "_groupLabel_5luso_165",
	threadItem: "_threadItem_5luso_173",
	active: "_active_5luso_188",
	threadLink: "_threadLink_5luso_192",
	threadIcon: "_threadIcon_5luso_214",
	threadTitle: "_threadTitle_5luso_219",
	actionDropdown: "_actionDropdown_5luso_228",
	actionTrigger: "_actionTrigger_5luso_239",
	renameContainer: "_renameContainer_5luso_244",
	renameInput: "_renameInput_5luso_249",
	empty: "_empty_5luso_266"
};
var InstanceAiThreadList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiView.vue?vue&type=script&setup=true&lang.ts
var InstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiView",
	setup(__props) {
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const uiStore = useUIStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		documentTitle.set(i18n.baseText("instanceAi.view.title"));
		const sidebarCollapsed = useSessionStorage("instanceAi.sidebarCollapsed", true);
		const sidebarWidth = ref(260);
		function toggleSidebarCollapse() {
			sidebarCollapsed.value = !sidebarCollapsed.value;
		}
		function handleSidebarResize({ width }) {
			if (width <= 200) {
				sidebarCollapsed.value = true;
				return;
			}
			sidebarWidth.value = width;
		}
		provide(SidebarStateKey, {
			collapsed: sidebarCollapsed,
			width: sidebarWidth,
			toggle: toggleSidebarCollapse
		});
		const CHAT_ROUTE_NAMES = new Set([INSTANCE_AI_VIEW, INSTANCE_AI_THREAD_VIEW]);
		onBeforeRouteLeave((to) => {
			const name = typeof to.name === "string" ? to.name : void 0;
			if (!name || !CHAT_ROUTE_NAMES.has(name)) sidebarCollapsed.value = true;
		});
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: INSTANCE_AI_VIEW,
					force: true
				});
			}
		});
		onMounted(() => {
			store.loadThreads();
			store.fetchCredits();
			store.startCreditsPushListener();
			settingsStore.refreshModuleSettings().catch(() => {}).then(async () => await settingsStore.ensurePreferencesLoaded()).catch(() => {}).then(() => {
				const browserUseEnabled = settingsStore.isBrowserUseEnabledByAdmin;
				const computerUseEnabled = !settingsStore.isLocalGatewayDisabledByAdmin;
				if (!browserUseEnabled && !computerUseEnabled) return;
				settingsStore.startGatewayPushListener();
				if (browserUseEnabled) settingsStore.fetchBrowserStatus();
				if (computerUseEnabled && !settingsStore.isLocalGatewayDisabled) settingsStore.fetchGatewayStatus();
			});
		});
		watch(() => settingsStore.isLocalGatewayDisabled, (disabled) => {
			if (disabled) {
				if (settingsStore.isLocalGatewayDisabledByAdmin && !settingsStore.isBrowserUseEnabledByAdmin) settingsStore.stopGatewayPushListener();
			} else {
				settingsStore.startGatewayPushListener();
				settingsStore.fetchGatewayStatus();
				settingsStore.fetchBrowserStatus();
			}
		});
		onUnmounted(() => {
			store.stopCreditsPushListener();
			settingsStore.stopGatewayPushListener();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-container"
			}, [createVNode(Transition, { name: "sidebar-slide" }, {
				default: withCtx(() => [!unref(sidebarCollapsed) ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.sidebar),
					width: sidebarWidth.value,
					style: normalizeStyle({ width: `${sidebarWidth.value}px` }),
					"supported-directions": ["right"],
					"is-resizing-enabled": true,
					"min-width": 200,
					"max-width": 400,
					onResize: handleSidebarResize
				}, {
					default: withCtx(() => [createVNode(InstanceAiThreadList_default, { onCollapse: toggleSidebarCollapse })]),
					_: 1
				}, 8, [
					"class",
					"width",
					"style"
				])) : createCommentVNode("", true)]),
				_: 1
			}), createVNode(unref(RouterView), null, {
				default: withCtx(({ Component }) => [(openBlock(), createBlock(resolveDynamicComponent(Component), { key: String(unref(route).params.threadId ?? "empty") }))]),
				_: 1
			})], 2);
		};
	}
});
var InstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_m99dn_125",
	sidebar: "_sidebar_m99dn_133"
};
var InstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiView_default as default };
