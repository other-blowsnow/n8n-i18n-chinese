import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Gt as ElSkeletonItem, Oa as N8nButton_default, Rt as N8nActionDropdown_default, St as TableBase_default, gt as useRouter, ht as useRoute } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-CXPRr-RB.js";
import { t as useToast } from "./useToast-fCpp7iAn.js";
import { qr as AGENT_SESSION_DETAIL_VIEW } from "./constants-DIP3enMx.js";
import { o as truncate } from "./dist-DGef5MHa.js";
import { t as convertToDisplayDate } from "./dateFormatter-CUux_a5O.js";
import { t as useAgentSessionsStore } from "./agentSessions.store-Ddnzxb1U.js";
import { t as useThreadTitle } from "./thread-title-BLWsHQKi.js";
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
var _hoisted_4 = { colspan: "6" };
var AgentSessionsListView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionsListView",
	setup(__props) {
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const message = useMessage();
		const sessionsStore = useAgentSessionsStore();
		const projectId = computed(() => route.params.projectId);
		const agentId = computed(() => route.params.agentId);
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
		function formatTokens(count) {
			return count.toLocaleString();
		}
		function formatDuration(ms) {
			if (ms < 1e3) return `${ms}ms`;
			return `${(ms / 1e3).toFixed(1)}s`;
		}
		function originLabel(taskId) {
			return taskId ? i18n.baseText("agentSessions.origin.task") : i18n.baseText("agentSessions.origin.agent");
		}
		const deleteActions = [{
			id: "delete",
			label: i18n.baseText("generic.delete"),
			icon: "trash-2"
		}];
		function onRowClick(threadId) {
			router.push({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value,
					threadId
				}
			});
		}
		async function onAction(actionId, threadId) {
			if (actionId !== "delete") return;
			if (await message.confirm(i18n.baseText("agentSessions.deleteConfirm.message"), i18n.baseText("agentSessions.deleteConfirm.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("agentSessions.deleteConfirm.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm") return;
			try {
				await sessionsStore.deleteThread(projectId.value, threadId);
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createVNode(unref(TableBase_default), null, {
				default: withCtx(() => [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("agentSessions.sessionName")), 1),
					createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("agentSessions.lastMessage")), 1),
					createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("agentSessions.duration")), 1),
					createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("agentSessions.tokenUsage")), 1),
					createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("agentSessions.origin")), 1),
					_cache[2] || (_cache[2] = createBaseVNode("th", { style: { "width": "50px" } }, null, -1))
				])]), createBaseVNode("tbody", null, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(unref(sessionsStore).threads, (thread) => {
						return openBlock(), createElementBlock("tr", {
							key: thread.id,
							class: normalizeClass(_ctx.$style.clickableRow),
							"data-test-id": "agent-session-list-item",
							onClick: ($event) => onRowClick(thread.id)
						}, [
							createBaseVNode("td", null, toDisplayString(unref(truncate)(unref(threadTitleOf)(thread), 24)), 1),
							createBaseVNode("td", null, toDisplayString(formatDate(thread.updatedAt)), 1),
							createBaseVNode("td", null, toDisplayString(formatDuration(thread.totalDuration)), 1),
							createBaseVNode("td", null, toDisplayString(formatTokens(thread.totalPromptTokens + thread.totalCompletionTokens)), 1),
							createBaseVNode("td", null, toDisplayString(originLabel(thread.taskId)), 1),
							createBaseVNode("td", { onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])) }, [createVNode(unref(N8nActionDropdown_default), {
								items: deleteActions,
								"activator-icon": "ellipsis",
								"data-test-id": "agent-session-actions",
								onSelect: ($event) => onAction($event, thread.id)
							}, null, 8, ["onSelect"])])
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
	wrapper: "_wrapper_1lij4_125",
	tableContainer: "_tableContainer_1lij4_137",
	clickableRow: "_clickableRow_1lij4_144",
	lastRow: "_lastRow_1lij4_151"
};
var AgentSessionsListView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionsListView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionsListView_default as t };
