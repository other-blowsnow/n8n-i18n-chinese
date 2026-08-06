import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BT3CWEhN.js";
import { Fi as N8nIconButton_default, Ii as N8nButton_default, Li as N8nIcon_default, Nt as TableBase_default, Zt as N8nActionDropdown_default, an as ElSkeletonItem, d as useMessage, jr as N8nTooltip_default } from "./src-CjwMP1QL.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-AX6Lywzz.js";
import { t as useToast } from "./useToast-KzIcyQbs.js";
import { Mr as CONTINUE_SESSION_ID_PARAM, Nr as EXECUTIONS_SECTION_KEY, Sr as AGENT_PREVIEW_VIEW, wr as AGENT_SESSION_DETAIL_VIEW } from "./constants-Es0IMygd.js";
import "./useMessage-K5sRXm9k.js";
import { t as convertToDisplayDate } from "./dateFormatter-DS2FPx3B.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-p_BfqN3F.js";
//#region src/features/agents/views/AgentSessionsListView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var _hoisted_2 = {
	colspan: 6,
	style: {
		"text-align": "center",
		"padding": "var(--spacing--lg)"
	}
};
var _hoisted_3 = {
	key: 0,
	"data-test-id": "agent-sessions-empty"
};
var _hoisted_4 = { colspan: 6 };
var AgentSessionsListView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionsListView",
	props: {
		embedded: {
			type: Boolean,
			default: false
		},
		projectId: { default: void 0 },
		agentId: { default: void 0 },
		openSessionInNewTab: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const message = useMessage();
		const sessionsStore = useAgentSessionsStore();
		const projectId = computed(() => props.projectId ?? route.params.projectId);
		const agentId = computed(() => props.agentId ?? route.params.agentId);
		function onVisibilityChange() {
			if (document.visibilityState !== "visible") return;
			if (!projectId.value || !agentId.value) return;
			sessionsStore.refreshThreads(projectId.value, agentId.value);
		}
		onMounted(async () => {
			if (projectId.value && agentId.value) try {
				await sessionsStore.fetchThreads(projectId.value, agentId.value);
				sessionsStore.startAutoRefresh();
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			}
			document.addEventListener("visibilitychange", onVisibilityChange);
		});
		onBeforeUnmount(() => {
			document.removeEventListener("visibilitychange", onVisibilityChange);
			sessionsStore.stopAutoRefresh();
		});
		function formatDate(fullDate) {
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		function formatDuration(ms) {
			if (ms < 1e3) return `${ms}ms`;
			const seconds = ms / 1e3;
			return Number.isInteger(seconds) ? `${seconds}s` : `${seconds.toFixed(1)}s`;
		}
		function originLabel(thread) {
			if (thread.parentThreadId) return i18n.baseText("agentSessions.origin.subAgent");
			if (thread.taskId) return i18n.baseText("agentSessions.origin.task");
			const source = thread.source?.trim();
			if (source && source !== "chat" && source !== "task" && source !== "subagent" && source !== "workflow") return source.charAt(0).toUpperCase() + source.slice(1);
			return i18n.baseText("agentSessions.origin.agent");
		}
		function originIcon(thread) {
			switch (thread.source?.trim()) {
				case "chat": return "zap";
				case "task": return "clock";
				case "workflow": return "workflow";
				case "slack": return "slack";
				case "telegram": return "telegram";
				case "linear": return "linear";
				default: return "zap";
			}
		}
		function rowActions(thread) {
			const actions = [];
			if (thread.parentThreadId && thread.parentAgentId) actions.push({
				id: "goToParentRun",
				label: i18n.baseText("agentSessions.goToParentRun"),
				icon: "arrow-up-right"
			});
			actions.push({
				id: "delete",
				label: i18n.baseText("generic.delete"),
				icon: "trash-2",
				divided: actions.length > 0
			});
			return actions;
		}
		function openConversation(threadId) {
			const target = {
				name: AGENT_PREVIEW_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value
				},
				query: {
					[CONTINUE_SESSION_ID_PARAM]: threadId,
					section: EXECUTIONS_SECTION_KEY
				}
			};
			if (props.openSessionInNewTab) {
				window.open(router.resolve(target).href, "_blank");
				return;
			}
			router.push(target);
		}
		function onViewTrace(threadId) {
			const target = {
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value,
					threadId
				}
			};
			if (props.openSessionInNewTab) {
				window.open(router.resolve(target).href, "_blank");
				return;
			}
			router.push(target);
		}
		async function onAction(actionId, thread) {
			if (actionId === "goToParentRun") {
				if (!thread.parentAgentId || !thread.parentThreadId) return;
				router.push({
					name: AGENT_SESSION_DETAIL_VIEW,
					params: {
						projectId: projectId.value,
						agentId: thread.parentAgentId,
						threadId: thread.parentThreadId
					}
				});
				return;
			}
			if (actionId !== "delete") return;
			if (await message.confirm(i18n.baseText("agentSessions.deleteConfirm.message"), i18n.baseText("agentSessions.deleteConfirm.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("agentSessions.deleteConfirm.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm") return;
			try {
				await sessionsStore.deleteThread(projectId.value, agentId.value, thread.id);
				toast.showMessage({
					title: i18n.baseText("agentSessions.showMessage.deleted"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.delete"));
			}
		}
		async function loadMore() {
			try {
				await sessionsStore.loadMore(projectId.value, agentId.value);
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.wrapper, { [_ctx.$style.embedded]: props.embedded }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createVNode(unref(TableBase_default), null, {
				default: withCtx(() => [createBaseVNode("tbody", null, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(unref(sessionsStore).threads, (thread) => {
						return openBlock(), createElementBlock("tr", {
							key: thread.id,
							class: normalizeClass(_ctx.$style.clickableRow),
							"data-test-id": "agent-session-list-item",
							onClick: ($event) => openConversation(thread.id)
						}, [
							createBaseVNode("td", { class: normalizeClass(_ctx.$style.titleCell) }, [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.sessionTitle),
								"data-test-id": "agent-session-title"
							}, toDisplayString(unref(threadTitleOf)(thread)), 3)], 2),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.originCell),
								"data-test-id": "agent-session-origin"
							}, [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.originPill),
								"data-test-id": "agent-session-origin-pill"
							}, [createVNode(unref(N8nIcon_default), {
								icon: originIcon(thread),
								size: "large"
							}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(originLabel(thread)), 1)], 2)], 2),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.dateCell),
								"data-test-id": "agent-session-updated-at"
							}, toDisplayString(formatDate(thread.updatedAt)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.tokenCell),
								"data-test-id": "agent-session-token-usage"
							}, toDisplayString((thread.totalPromptTokens + thread.totalCompletionTokens).toLocaleString()) + "t ", 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.durationCell),
								"data-test-id": "agent-session-duration"
							}, toDisplayString(formatDuration(thread.totalDuration)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.actionCell),
								onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
							}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionGroup) }, [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("agentSessions.viewTrace") }, {
								default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
									icon: "list-tree",
									"icon-size": "medium",
									size: "xsmall",
									variant: "ghost",
									"aria-label": unref(i18n).baseText("agentSessions.viewTrace"),
									title: unref(i18n).baseText("agentSessions.viewTrace"),
									"data-test-id": "agent-session-view-trace",
									onClick: ($event) => onViewTrace(thread.id)
								}, null, 8, [
									"aria-label",
									"title",
									"onClick"
								])]),
								_: 2
							}, 1032, ["content"]), createVNode(unref(N8nActionDropdown_default), {
								items: rowActions(thread),
								"activator-icon": "ellipsis",
								"data-test-id": "agent-session-actions",
								onSelect: ($event) => onAction($event, thread)
							}, null, 8, ["items", "onSelect"])], 2)], 2)
						], 10, _hoisted_1);
					}), 128)),
					unref(sessionsStore).loading && !unref(sessionsStore).threads.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(5, (item) => {
						return createBaseVNode("tr", { key: item }, [(openBlock(), createElementBlock(Fragment, null, renderList(6, (col) => {
							return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
						}), 64))]);
					}), 64)) : createCommentVNode("", true),
					!unref(sessionsStore).loading && !unref(sessionsStore).threads.length ? (openBlock(), createElementBlock("tr", {
						key: 1,
						class: normalizeClass(_ctx.$style.lastRow)
					}, [createBaseVNode("td", _hoisted_2, [!unref(sessionsStore).threads.length && !unref(sessionsStore).loading ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("agentSessions.empty")), 1)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
					unref(sessionsStore).nextCursor ? (openBlock(), createElementBlock("tr", {
						key: 2,
						class: normalizeClass(_ctx.$style.lastRow)
					}, [createBaseVNode("td", _hoisted_4, [createVNode(unref(N8nButton_default), {
						icon: "refresh-cw",
						variant: "ghost",
						title: unref(i18n).baseText("agentSessions.loadMore"),
						label: unref(i18n).baseText("agentSessions.loadMore"),
						loading: unref(sessionsStore).loading,
						"data-test-id": "agent-sessions-load-more",
						onClick: _cache[1] || (_cache[1] = ($event) => loadMore())
					}, null, 8, [
						"title",
						"label",
						"loading"
					])])], 2)) : createCommentVNode("", true)
				])]),
				_: 1
			})], 2)], 2);
		};
	}
});
var AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_suhzx_125",
	embedded: "_embedded_suhzx_137",
	tableContainer: "_tableContainer_suhzx_143",
	titleCell: "_titleCell_suhzx_150",
	sessionTitle: "_sessionTitle_suhzx_154",
	originCell: "_originCell_suhzx_165",
	dateCell: "_dateCell_suhzx_166",
	tokenCell: "_tokenCell_suhzx_167",
	durationCell: "_durationCell_suhzx_168",
	originPill: "_originPill_suhzx_173",
	actionCell: "_actionCell_suhzx_195",
	actionGroup: "_actionGroup_suhzx_202",
	clickableRow: "_clickableRow_suhzx_209",
	lastRow: "_lastRow_suhzx_222"
};
var AgentSessionsListView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionsListView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionsListView_default as t };
