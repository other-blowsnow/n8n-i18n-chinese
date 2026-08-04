import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-H3H6Z9UB.js";
import { Ai as N8nText_default, Li as N8nIcon_default, O as N8nUserStack_default, Vt as N8nCard_default, _r as N8nBadge_default, jr as N8nTooltip_default, jt as N8nHeading_default, nn as N8nLoading_default, z as N8nTabs_default } from "./src-D0J2qzpK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-CL5w_AIp.js";
import { i as defineStore, o as storeToRefs } from "./constants-CdtkjduR.js";
import { t as useRootStore } from "./useRootStore-G5KSjJVg.js";
import { t as useUsersStore } from "./users.store-BqJZ4Qgp.js";
import { t as useDocumentTitle } from "./useDocumentTitle-qrffMKD0.js";
import { t as TimeAgo_default } from "./TimeAgo-D5Xv6tsY.js";
import { i as fetchWorkflowReviewInboxSummary, r as fetchWorkflowReviewInbox } from "./workflowReviews.api-Um05KG5C.js";
import { t as PageViewLayout_default } from "./PageViewLayout-BDictc1p.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-C_pD7jV1.js";
//#region src/features/workflow-reviews/components/WorkflowReviewStatusDot.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewStatusDot",
	props: {
		state: {},
		decision: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const status = computed(() => {
			if (props.state === "open") return props.decision === "changes_requested" ? {
				variant: "changesRequested",
				label: i18n.baseText("workflowReviews.status.changesRequested")
			} : {
				variant: "pending",
				label: i18n.baseText("workflowReviews.status.pending")
			};
			return props.decision === "approved" ? {
				variant: "approved",
				label: i18n.baseText("workflowReviews.status.approved")
			} : {
				variant: "closed",
				label: i18n.baseText("workflowReviews.status.closed")
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: status.value.label,
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.dot, _ctx.$style[status.value.variant]]),
					"data-test-id": "workflow-review-request-status-dot",
					"aria-label": status.value.label
				}, null, 10, _hoisted_1$1)]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
var WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_1rsei_125",
	pending: "_pending_1rsei_132",
	changesRequested: "_changesRequested_1rsei_136",
	approved: "_approved_1rsei_140",
	closed: "_closed_1rsei_144"
};
var WorkflowReviewStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequestsSidebar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var _hoisted_2 = ["title"];
var WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsSidebar",
	props: {
		items: {},
		activeState: {},
		openCount: {},
		closedCount: {},
		selectedId: {},
		loading: { type: Boolean },
		loadingMore: { type: Boolean },
		hasMore: { type: Boolean },
		isEmpty: { type: Boolean }
	},
	emits: [
		"select",
		"clear",
		"update:activeState",
		"loadMore"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const listRef = ref(null);
		const loadMoreSentinel = ref(null);
		const currentUserEmail = computed(() => usersStore.currentUser?.email ?? null);
		function userGroups(item) {
			return {
				[i18n.baseText("workflowReviews.roles.requester")]: item.requester ? [item.requester] : [],
				[i18n.baseText("workflowReviews.roles.reviewers")]: item.reviewers
			};
		}
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.sidebar.tabs.open"),
			value: "open",
			tag: String(props.openCount)
		}, {
			label: i18n.baseText("workflowReviews.sidebar.tabs.closed"),
			value: "closed",
			tag: String(props.closedCount)
		}]);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listRef,
			threshold: .01,
			onIntersect: () => emit("loadMore")
		});
		watch([
			loadMoreSentinel,
			() => props.hasMore,
			() => props.loadingMore,
			() => props.items.length
		], ([sentinel, hasMore, loadingMore]) => {
			if (sentinel && hasMore && !loadingMore) observeForLoadMore(sentinel);
		}, {
			immediate: true,
			flush: "post"
		});
		function onTabChange(value) {
			emit("update:activeState", String(value));
		}
		function onListBackgroundClick() {
			if (props.selectedId) emit("clear");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.sidebar),
				"data-test-id": "workflow-reviews-sidebar"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-reviews-page-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.page.title")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nTabs_default), {
					"model-value": __props.activeState,
					options: tabOptions.value,
					"data-test-id": "workflow-reviews-tabs",
					"onUpdate:modelValue": onTabChange
				}, null, 8, ["model-value", "options"])], 2),
				createBaseVNode("div", {
					ref_key: "listRef",
					ref: listRef,
					role: "listbox",
					"aria-label": unref(i18n).baseText("workflowReviews.page.title"),
					class: normalizeClass(_ctx.$style.list),
					onClick: withModifiers(onListBackgroundClick, ["self"])
				}, [__props.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					loading: true,
					rows: 4
				})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					__props.isEmpty ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						size: "small",
						"data-test-id": "workflow-reviews-empty"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`workflowReviews.sidebar.empty.${__props.activeState}`)), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
						return openBlock(), createBlock(unref(N8nCard_default), {
							key: item.id,
							class: normalizeClass([_ctx.$style.card, { [_ctx.$style.cardSelected]: __props.selectedId === item.id }]),
							"data-test-id": "workflow-review-request-row",
							role: "option",
							tabindex: "0",
							"aria-selected": __props.selectedId === item.id,
							onClick: ($event) => emit("select", item.id),
							onKeydown: [withKeys(withModifiers(($event) => emit("select", item.id), ["prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", item.id), ["prevent"]), ["space"])]
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createVNode(unref(N8nText_default), {
								bold: "",
								tag: "h3",
								class: normalizeClass(_ctx.$style.cardTitle)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
								_: 2
							}, 1032, ["class"]), createVNode(WorkflowReviewStatusDot_default, {
								state: item.state,
								decision: item.decision
							}, null, 8, ["state", "decision"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMeta) }, [item.workflowName ? (openBlock(), createBlock(unref(N8nBadge_default), {
								key: 0,
								theme: "tertiary",
								"show-border": false,
								class: normalizeClass(_ctx.$style.workflowBadge),
								"data-test-id": "workflow-review-request-workflow-badge"
							}, {
								default: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.$style.workflowBadgeText),
									title: item.workflowName
								}, [createVNode(unref(N8nIcon_default), {
									icon: "workflow",
									size: "small"
								}), createBaseVNode("span", null, toDisplayString(item.workflowName), 1)], 10, _hoisted_2)]),
								_: 2
							}, 1032, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMetaActions) }, [item.requester || item.reviewers.length > 0 ? (openBlock(), createBlock(unref(N8nUserStack_default), {
								key: 0,
								users: userGroups(item),
								"max-avatars": 3,
								"current-user-email": currentUserEmail.value,
								size: "xsmall",
								"data-test-id": "workflow-review-request-users"
							}, null, 8, ["users", "current-user-email"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
								size: "xsmall",
								color: "text-light",
								class: normalizeClass(_ctx.$style.cardMetaTime),
								"data-test-id": "workflow-review-request-created-at"
							}, {
								default: withCtx(() => [createVNode(TimeAgo_default, { date: item.createdAt }, null, 8, ["date"])]),
								_: 2
							}, 1032, ["class"])], 2)], 2)], 2)]),
							_: 2
						}, 1032, [
							"class",
							"aria-selected",
							"onClick",
							"onKeydown"
						]);
					}), 128)),
					__props.loadingMore ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.loadingMore)
					}, [createVNode(unref(N8nLoading_default), {
						loading: true,
						rows: 1
					})], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref_key: "loadMoreSentinel",
						ref: loadMoreSentinel,
						class: normalizeClass(_ctx.$style.sentinel)
					}, null, 2)
				], 64))], 10, _hoisted_1)
			], 2);
		};
	}
});
var WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sidebar: "_sidebar_70u3w_125",
	columnTitle: "_columnTitle_70u3w_134",
	header: "_header_70u3w_141",
	list: "_list_70u3w_148",
	card: "_card_70u3w_157",
	cardSelected: "_cardSelected_70u3w_164",
	cardContent: "_cardContent_70u3w_177",
	cardHeader: "_cardHeader_70u3w_186",
	cardTitle: "_cardTitle_70u3w_195",
	cardMeta: "_cardMeta_70u3w_203",
	cardMetaActions: "_cardMetaActions_70u3w_213",
	cardMetaTime: "_cardMetaTime_70u3w_221",
	workflowBadge: "_workflowBadge_70u3w_225",
	workflowBadgeText: "_workflowBadgeText_70u3w_238",
	loadingMore: "_loadingMore_70u3w_253",
	sentinel: "_sentinel_70u3w_257"
};
var WorkflowReviewRequestsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/reviewInbox.store.ts
var DEFAULT_LIMIT = 15;
function toError(error) {
	return error instanceof Error ? error : new Error(String(error));
}
var useReviewInboxStore = defineStore("workflowReviewInbox", () => {
	const rootStore = useRootStore();
	const probeSettled = ref(false);
	const hasAnyReviews = ref(false);
	const openCount = ref(0);
	const closedCount = ref(0);
	const items = ref([]);
	const selectedId = ref(null);
	const activeState = ref("open");
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const error = ref(null);
	let listRequestSeq = 0;
	let probeRequestSeq = 0;
	const selectedItem = computed(() => items.value.find((item) => item.id === selectedId.value) ?? null);
	const showSidebar = computed(() => probeSettled.value && hasAnyReviews.value);
	const isEmpty = computed(() => showSidebar.value && !loading.value && error.value === null && items.value.length === 0);
	function applyListResponse(response, { append }) {
		items.value = append ? [...items.value, ...response.data] : response.data;
		nextCursor.value = response.nextCursor;
		hasMore.value = response.hasMore;
	}
	async function requestList(cursor) {
		return await fetchWorkflowReviewInbox(rootStore.restApiContext, {
			state: activeState.value,
			limit: DEFAULT_LIMIT,
			cursor
		});
	}
	async function probeInbox() {
		const requestSeq = ++probeRequestSeq;
		probeSettled.value = false;
		error.value = null;
		try {
			const summary = await fetchWorkflowReviewInboxSummary(rootStore.restApiContext);
			if (requestSeq !== probeRequestSeq) return;
			openCount.value = summary.open;
			closedCount.value = summary.closed;
			hasAnyReviews.value = summary.open + summary.closed > 0;
			probeSettled.value = true;
			if (hasAnyReviews.value) await fetchList({ reset: true });
		} catch (e) {
			if (requestSeq !== probeRequestSeq) return;
			error.value = toError(e);
			probeSettled.value = true;
			throw e;
		}
	}
	async function fetchList(options = {}) {
		const requestSeq = ++listRequestSeq;
		if (options.reset) {
			items.value = [];
			nextCursor.value = null;
			hasMore.value = false;
			selectedId.value = null;
			loadingMore.value = false;
		}
		loading.value = true;
		error.value = null;
		try {
			const response = await requestList();
			if (requestSeq !== listRequestSeq) return;
			applyListResponse(response, { append: false });
		} catch (e) {
			if (requestSeq !== listRequestSeq) return;
			error.value = toError(e);
			throw e;
		} finally {
			if (requestSeq === listRequestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		if (loading.value || loadingMore.value || !hasMore.value || !nextCursor.value) return;
		const requestSeq = ++listRequestSeq;
		const cursor = nextCursor.value;
		loadingMore.value = true;
		error.value = null;
		try {
			const response = await requestList(cursor);
			if (requestSeq !== listRequestSeq) return;
			applyListResponse(response, { append: true });
		} catch (e) {
			if (requestSeq !== listRequestSeq) return;
			error.value = toError(e);
			throw e;
		} finally {
			if (requestSeq === listRequestSeq) loadingMore.value = false;
		}
	}
	async function setActiveState(state) {
		if (activeState.value === state) return;
		activeState.value = state;
		await fetchList({ reset: true });
	}
	function selectItem(id) {
		selectedId.value = id;
	}
	function clearSelection() {
		selectedId.value = null;
	}
	function reset() {
		probeRequestSeq += 1;
		listRequestSeq += 1;
		probeSettled.value = false;
		hasAnyReviews.value = false;
		openCount.value = 0;
		closedCount.value = 0;
		items.value = [];
		selectedId.value = null;
		activeState.value = "open";
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		error.value = null;
	}
	return {
		probeSettled,
		hasAnyReviews,
		openCount,
		closedCount,
		items,
		selectedId,
		selectedItem,
		activeState,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		error,
		showSidebar,
		isEmpty,
		probeInbox,
		fetchList,
		loadMore,
		setActiveState,
		selectItem,
		clearSelection,
		reset
	};
});
//#endregion
//#region src/features/workflow-reviews/views/WorkflowReviewRequestsView.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsView",
	setup(__props) {
		const store = useReviewInboxStore();
		const { probeSettled, showSidebar, selectedItem, items, activeState, selectedId, loading, loadingMore, hasMore, isEmpty, openCount, closedCount } = storeToRefs(store);
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError } = useToast();
		documentTitle.set(i18n.baseText("workflowReviews.page.title"));
		let isMounted = false;
		function handleListError(error) {
			if (!isMounted) return;
			showError(error, i18n.baseText("workflowReviews.error.load"));
		}
		async function onActiveStateChange(state) {
			try {
				await store.setActiveState(state);
			} catch (error) {
				await handleListError(error);
			}
		}
		async function onLoadMore() {
			try {
				await store.loadMore();
			} catch (error) {
				await handleListError(error);
			}
		}
		onMounted(async () => {
			isMounted = true;
			try {
				await store.probeInbox();
			} catch (error) {
				await handleListError(error);
			}
		});
		onUnmounted(() => {
			isMounted = false;
			store.reset();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, { "data-test-id": "workflow-review-requests-view" }, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [unref(showSidebar) ? (openBlock(), createBlock(WorkflowReviewRequestsSidebar_default, {
					key: 0,
					items: unref(items),
					"active-state": unref(activeState),
					"open-count": unref(openCount),
					"closed-count": unref(closedCount),
					"selected-id": unref(selectedId),
					loading: unref(loading),
					"loading-more": unref(loadingMore),
					"has-more": unref(hasMore),
					"is-empty": unref(isEmpty),
					onSelect: unref(store).selectItem,
					onClear: unref(store).clearSelection,
					"onUpdate:activeState": onActiveStateChange,
					onLoadMore
				}, null, 8, [
					"items",
					"active-state",
					"open-count",
					"closed-count",
					"selected-id",
					"loading",
					"loading-more",
					"has-more",
					"is-empty",
					"onSelect",
					"onClear"
				])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [unref(showSidebar) && unref(selectedItem) ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-review-request-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(selectedItem).title), 1)]),
					_: 1
				})) : !unref(showSidebar) ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 1,
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-reviews-page-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.page.title")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainBody) }, [!unref(probeSettled) ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					loading: true,
					rows: 3
				})) : unref(selectedItem) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-review-request-detail-stub"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.placeholder")), 1)]),
					_: 1
				})) : !unref(showSidebar) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-reviews-disclaimer"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.disclaimer.body")), 1)]),
					_: 1
				})) : unref(isEmpty) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 3,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-reviews-empty-state"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`workflowReviews.emptyState.body.${unref(activeState)}`)), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 4,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-reviews-no-selection"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.noSelection.body")), 1)]),
					_: 1
				}))], 2)], 2)], 2)]),
				_: 1
			});
		};
	}
});
var WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_q05kn_125",
	main: "_main_q05kn_133",
	columnTitle: "_columnTitle_q05kn_143",
	mainBody: "_mainBody_q05kn_150"
};
var WorkflowReviewRequestsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowReviewRequestsView_default as default };
