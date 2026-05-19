import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-DOOmg_tG.js";
import { At as N8nActionDropdown_default, It as ElSkeletonItem, ct as useRoute, ht as TableBase_default, lt as useRouter, wa as N8nButton_default } from "./src-yoaEB2ny.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-Bc-sqtxk.js";
import { t as useToast } from "./useToast-uyEWXkNO.js";
import { Wr as AGENT_SESSION_DETAIL_VIEW } from "./constants-B2-iseoM.js";
import { o as truncate } from "./dist-CaxuMXjN.js";
import { t as convertToDisplayDate } from "./dateFormatter-BOQHXJf_.js";
import { t as useAgentSessionsStore } from "./agentSessions.store-BppcA9Fn.js";
import { t as useThreadTitle } from "./thread-title-qPqlsZ7Y.js";
//#region src/features/agents/views/AgentSessionsListView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var _hoisted_2 = {
	colspan: "6",
	style: { "text-align": "center" }
};
var _hoisted_3 = {
	key: 0,
	"data-test-id": "agent-sessions-empty"
};
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
					createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("agentSessions.sessionId")), 1),
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
							createBaseVNode("td", null, toDisplayString(thread.sessionNumber), 1),
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
					createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_2, [!unref(sessionsStore).threads.length && !unref(sessionsStore).loading ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("agentSessions.empty")), 1)) : unref(sessionsStore).nextCursor ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						icon: "refresh-cw",
						title: unref(i18n).baseText("agentSessions.loadMore"),
						label: unref(i18n).baseText("agentSessions.loadMore"),
						loading: unref(sessionsStore).loading,
						"data-test-id": "agent-sessions-load-more",
						onClick: _cache[1] || (_cache[1] = ($event) => loadMore())
					}, null, 8, [
						"title",
						"label",
						"loading"
					])) : unref(sessionsStore).threads.length ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(i18n).baseText("agentSessions.loadedAll")), 1)], 64)) : createCommentVNode("", true)])])
				])]),
				_: 1
			})], 2)], 2);
		};
	}
});
var AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_gk0vi_125",
	tableContainer: "_tableContainer_gk0vi_137",
	clickableRow: "_clickableRow_gk0vi_144"
};
var AgentSessionsListView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionsListView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionsListView_default as t };
