import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, L as h, M as createVNode, P as defineComponent, Pt as reactive, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, ot as resolveComponent, q as onBeforeMount, vn as normalizeClass, vt as watchEffect, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, Li as N8nHeading_default, Lt as useRoute, Rt as useRouter, Tt as N8nBadge_default, Yt as createEventBus, bt as N8nActionToggle_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Cr as useWorkflowHistoryStore, Ft as telemetry, hr as useToast, r as useUIStore, s as useWorkflowsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { Bo as getResourcePermissions, Xo as VIEWS, js as WORKFLOW_HISTORY_VERSION_UNPUBLISH, ks as WORKFLOW_HISTORY_PUBLISH_MODAL_KEY } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import "./executions.store-nTCUYDJR.js";
import "./pushConnection.store-Di8YtKvV.js";
import "./collaboration.store-bO4QCkn5.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-B3Y0kpCU.js";
import { i as getLastPublishedVersion, n as formatTimestamp, r as generateVersionName, t as computeTimelineEntries } from "./utils-Dtr1MO8i.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-he-LtMdE.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BbZnVaq3.js";
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryListItem",
	props: {
		item: {},
		index: {},
		actions: {},
		isSelected: {
			type: Boolean,
			default: false
		},
		isVersionActive: {
			type: Boolean,
			default: false
		},
		isGrouped: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"action",
		"preview",
		"mounted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const actionsVisible = ref(false);
		const itemElement = ref(null);
		const authorElement = ref(null);
		const isAuthorElementTruncated = ref(false);
		const checkAuthorTruncation = () => {
			const el = authorElement.value?.$el;
			if (el instanceof HTMLElement) isAuthorElementTruncated.value = el.scrollWidth > el.clientWidth;
		};
		const formattedCreatedAt = computed(() => {
			const { date, time } = formatTimestamp(props.item.createdAt);
			return i18n.baseText("workflowHistory.item.createdAt", { interpolate: {
				date,
				time
			} });
		});
		const authors = computed(() => {
			const allAuthors = props.item.authors.split(", ");
			let label = allAuthors[0];
			if (allAuthors.length > 1) label = `${label} + ${allAuthors.length - 1}`;
			return {
				size: allAuthors.length,
				label
			};
		});
		const versionName = computed(() => {
			if (props.item.name) return props.item.name;
			return props.isVersionActive ? generateVersionName(props.item.versionId) : "";
		});
		const lastPublishInfo = computed(() => {
			if (!props.isVersionActive) return null;
			const lastPublishedByUser = getLastPublishedVersion(props.item.workflowPublishHistory);
			if (!lastPublishedByUser) return null;
			return lastPublishedByUser;
		});
		const versionPublishInfo = computed(() => {
			return getLastPublishedVersion(props.item.workflowPublishHistory);
		});
		const getPublishedUserName = (userId) => {
			if (!userId) return null;
			const user = usersStore.usersById[userId];
			return user?.fullName ?? user?.email ?? null;
		};
		const mainTooltipContent = computed(() => {
			if (props.isGrouped) return null;
			if (props.isVersionActive) return !!getPublishedUserName(lastPublishInfo.value?.userId) ? i18n.baseText("workflowHistory.item.publishedBy") : i18n.baseText("workflowHistory.item.active");
			if (props.index === 0 && !props.isVersionActive) return i18n.baseText("workflowHistory.item.currentChanges");
			if (versionPublishInfo.value) return !!getPublishedUserName(versionPublishInfo.value?.userId) ? i18n.baseText("workflowHistory.item.publishedBy") : i18n.baseText("workflowHistory.item.active");
			return formattedCreatedAt.value;
		});
		const mainTooltipDate = computed(() => {
			if (props.isGrouped) return null;
			if (props.isVersionActive && lastPublishInfo.value) return lastPublishInfo.value.createdAt;
			if (versionPublishInfo.value) return versionPublishInfo.value.createdAt;
			return null;
		});
		const mainTooltipUser = computed(() => {
			if (props.isGrouped) return null;
			if (props.isVersionActive && lastPublishInfo.value) return getPublishedUserName(lastPublishInfo.value.userId);
			if (versionPublishInfo.value) return getPublishedUserName(versionPublishInfo.value.userId);
			return null;
		});
		const mainTooltipFormattedDate = computed(() => {
			if (!mainTooltipDate.value) return null;
			const { date, time } = formatTimestamp(mainTooltipDate.value);
			return i18n.baseText("workflowHistory.item.createdAt", { interpolate: {
				date,
				time
			} });
		});
		const onAction = (value) => {
			emit("action", {
				action: value,
				id: props.item.versionId,
				data: {
					formattedCreatedAt: formattedCreatedAt.value,
					versionName: versionName.value,
					description: props.item.description
				}
			});
		};
		const onVisibleChange = (visible) => {
			actionsVisible.value = visible;
		};
		const onItemClick = (event) => {
			emit("preview", {
				event,
				id: props.item.versionId
			});
		};
		onMounted(() => {
			emit("mounted", {
				index: props.index,
				offsetTop: itemElement.value?.offsetTop ?? 0,
				isSelected: props.isSelected
			});
			checkAuthorTruncation();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "left",
				disabled: !mainTooltipContent.value,
				"show-after": 300
			}, {
				content: withCtx(() => [props.index === 0 && !props.isVersionActive ? (openBlock(), createElementBlock("div", _hoisted_1$2, toDisplayString(mainTooltipContent.value), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
					createTextVNode(toDisplayString(mainTooltipContent.value) + " ", 1),
					mainTooltipUser.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(mainTooltipUser.value), 1)], 64)) : createCommentVNode("", true),
					mainTooltipFormattedDate.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [mainTooltipUser.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(", ")], 64)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(mainTooltipFormattedDate.value), 1)], 64)) : createCommentVNode("", true)
				]))]),
				default: withCtx(() => [createBaseVNode("li", {
					ref_key: "itemElement",
					ref: itemElement,
					"data-test-id": "workflow-history-list-item",
					role: "button",
					class: normalizeClass({
						[_ctx.$style.item]: true,
						[_ctx.$style.selected]: props.isSelected,
						[_ctx.$style.actionsVisible]: actionsVisible.value,
						[_ctx.$style.grouped]: props.isGrouped
					}),
					onClick: onItemClick
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.timelineColumn) }, [!props.isGrouped ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [props.isVersionActive ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.timelineDot, _ctx.$style.timelineDotPublished])
				}, null, 2)) : props.index === 0 && !props.isVersionActive ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass([_ctx.$style.timelineDot, _ctx.$style.timelineDotLatest])
				}, null, 2)) : (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass([_ctx.$style.timelineDot, _ctx.$style.timelineDotDefault])
				}, null, 2))], 64)) : (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.timelineLine)
				}, null, 2))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [versionName.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainRow) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true,
					color: "text-dark",
					class: normalizeClass(_ctx.$style.mainLine)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(versionName.value), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaRow) }, [createVNode(unref(N8nTooltip_default), {
					placement: "right-end",
					disabled: !isAuthorElementTruncated.value,
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(props.item.authors), 1)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						ref_key: "authorElement",
						ref: authorElement,
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.metaItem)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(authors.value.label) + ", ", 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nText_default), {
					tag: "time",
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.metaItem)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedCreatedAt.value), 1)]),
					_: 1
				}, 8, ["class"])], 2)], 64)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.unnamedRow)
				}, [createVNode(unref(N8nTooltip_default), {
					placement: "right-end",
					disabled: !isAuthorElementTruncated.value
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(props.item.authors), 1)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						ref_key: "authorElement",
						ref: authorElement,
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.unnamedAuthor)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(authors.value.label) + ", ", 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nText_default), {
					tag: "time",
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.unnamedTime)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedCreatedAt.value), 1)]),
					_: 1
				}, 8, ["class"])], 2))], 2), createVNode(unref(N8nActionToggle_default), {
					class: normalizeClass(_ctx.$style.actions),
					actions: props.actions,
					placement: "bottom-end",
					onAction,
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
					onVisibleChange
				}, null, 8, ["class", "actions"])], 2)], 2)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_epoue_125",
	grouped: "_grouped_epoue_136",
	selected: "_selected_epoue_136",
	wrapper: "_wrapper_epoue_154",
	timelineColumn: "_timelineColumn_epoue_168",
	timelineDot: "_timelineDot_epoue_179",
	timelineDotPublished: "_timelineDotPublished_epoue_186",
	timelineDotLatest: "_timelineDotLatest_epoue_190",
	timelineDotDefault: "_timelineDotDefault_epoue_194",
	timelineLine: "_timelineLine_epoue_199",
	content: "_content_epoue_207",
	mainRow: "_mainRow_epoue_215",
	mainLine: "_mainLine_epoue_221",
	metaRow: "_metaRow_epoue_227",
	metaItem: "_metaItem_epoue_234",
	unnamedRow: "_unnamedRow_epoue_241",
	unnamedAuthor: "_unnamedAuthor_epoue_246",
	unnamedTime: "_unnamedTime_epoue_253",
	actions: "_actions_epoue_258",
	publishedBadge: "_publishedBadge_epoue_263"
};
var WorkflowHistoryListItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["aria-expanded", "onClick"];
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = { "data-test-id": "prune-time-display" };
var WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryList",
	props: {
		items: {},
		selectedItem: {},
		actions: {},
		requestNumberOfItems: {},
		lastReceivedItemsLength: {},
		evaluatedPruneTimeInHours: {},
		shouldUpgrade: { type: Boolean },
		isListLoading: { type: Boolean },
		activeVersionId: {}
	},
	emits: [
		"action",
		"preview",
		"loadMore",
		"upgrade"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const listElement = ref(null);
		const loadMoreSentinel = ref(null);
		const shouldAutoScroll = ref(true);
		const expandedGroups = reactive(/* @__PURE__ */ new Set());
		const timelineEntries = computed(() => {
			return computeTimelineEntries(props.items);
		});
		const toggleGroup = (groupId) => {
			if (expandedGroups.has(groupId)) expandedGroups.delete(groupId);
			else expandedGroups.add(groupId);
		};
		const hasMoreItems = computed(() => props.lastReceivedItemsLength === props.requestNumberOfItems);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listElement,
			threshold: .01,
			onIntersect: () => {
				shouldAutoScroll.value = false;
				emit("loadMore", {
					take: props.requestNumberOfItems,
					skip: props.items.length
				});
			}
		});
		watch([
			loadMoreSentinel,
			hasMoreItems,
			() => props.items.length
		], ([sentinel$1, canLoadMore]) => {
			if (sentinel$1 && canLoadMore) observeForLoadMore(sentinel$1);
		}, { immediate: true });
		const getActions = (item$1, index) => {
			let filteredActions = props.actions;
			if (index === 0) filteredActions = filteredActions.filter((action) => action.value !== "restore");
			if (item$1.versionId === props.activeVersionId) filteredActions = filteredActions.filter((action) => action.value !== "publish");
			else filteredActions = filteredActions.filter((action) => action.value !== "unpublish");
			return filteredActions;
		};
		const onAction = ({ action, id, data }) => {
			shouldAutoScroll.value = false;
			emit("action", {
				action,
				id,
				data
			});
		};
		const onPreview = ({ event, id }) => {
			shouldAutoScroll.value = false;
			emit("preview", {
				event,
				id
			});
		};
		const onItemMounted = ({ offsetTop, isSelected }) => {
			if (isSelected && shouldAutoScroll.value) {
				shouldAutoScroll.value = false;
				listElement.value?.scrollTo({
					top: offsetTop,
					behavior: "smooth"
				});
			}
		};
		const pruneTimeDisplay = computed(() => {
			const timeInHours = props.evaluatedPruneTimeInHours;
			if (timeInHours < 24) {
				const key = timeInHours === 1 ? "workflowHistory.limitHour" : "workflowHistory.limitHours";
				return i18n.baseText(key, { interpolate: { hours: String(timeInHours) } });
			} else {
				const days = Math.round(timeInHours / 24);
				const key = days === 1 ? "workflowHistory.limitDay" : "workflowHistory.limitDays";
				return i18n.baseText(key, { interpolate: { days: String(days) } });
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("ul", {
				ref_key: "listElement",
				ref: listElement,
				class: normalizeClass(_ctx.$style.list),
				"data-test-id": "workflow-history-list"
			}, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(timelineEntries.value, (entry) => {
					return openBlock(), createElementBlock(Fragment, { key: entry.type === "version" ? entry.item.versionId : entry.groupId }, [
						entry.type === "group-header" ? (openBlock(), createElementBlock("li", {
							key: 0,
							class: normalizeClass(_ctx.$style.groupHeader),
							"aria-expanded": expandedGroups.has(entry.groupId),
							role: "button",
							"data-test-id": "workflow-history-group-header",
							onClick: ($event) => toggleGroup(entry.groupId)
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass([_ctx.$style.groupTimelineColumn, _ctx.$style.groupChevron]),
							icon: expandedGroups.has(entry.groupId) ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["class", "icon"]), createVNode(unref(N8nText_default), {
							color: "text-base",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.group.unnamedVersions", {
								adjustToNumber: entry.count,
								interpolate: { count: String(entry.count) }
							})), 1)]),
							_: 2
						}, 1024)], 10, _hoisted_1$1)) : createCommentVNode("", true),
						entry.type === "group-header" && expandedGroups.has(entry.groupId) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(entry.versions, (versionEntry) => {
							return openBlock(), createBlock(WorkflowHistoryListItem_default, {
								key: versionEntry.item.versionId,
								index: versionEntry.originalIndex,
								item: versionEntry.item,
								"is-selected": versionEntry.item.versionId === props.selectedItem?.versionId,
								"is-version-active": versionEntry.item.versionId === props.activeVersionId,
								actions: getActions(versionEntry.item, versionEntry.originalIndex),
								"is-grouped": true,
								onAction,
								onPreview,
								onMounted: onItemMounted
							}, null, 8, [
								"index",
								"item",
								"is-selected",
								"is-version-active",
								"actions"
							]);
						}), 128)) : createCommentVNode("", true),
						entry.type === "version" ? (openBlock(), createBlock(WorkflowHistoryListItem_default, {
							key: 2,
							index: entry.originalIndex,
							item: entry.item,
							"is-selected": entry.item.versionId === props.selectedItem?.versionId,
							"is-version-active": entry.item.versionId === props.activeVersionId,
							actions: getActions(entry.item, entry.originalIndex),
							onAction,
							onPreview,
							onMounted: onItemMounted
						}, null, 8, [
							"index",
							"item",
							"is-selected",
							"is-version-active",
							"actions"
						])) : createCommentVNode("", true)
					], 64);
				}), 128)),
				props.items.length && hasMoreItems.value ? (openBlock(), createElementBlock("li", {
					key: 0,
					ref_key: "loadMoreSentinel",
					ref: loadMoreSentinel,
					class: normalizeClass(_ctx.$style.sentinel),
					"aria-hidden": "true"
				}, null, 2)) : createCommentVNode("", true),
				props.isListLoading ? (openBlock(), createElementBlock("li", {
					key: 1,
					class: normalizeClass(_ctx.$style.loader),
					role: "status",
					"aria-live": "polite",
					"aria-busy": "true",
					"aria-label": unref(i18n).baseText("generic.loading")
				}, [
					createVNode(unref(N8nLoading_default), {
						rows: 3,
						class: "mb-xs"
					}),
					createVNode(unref(N8nLoading_default), {
						rows: 3,
						class: "mb-xs"
					}),
					createVNode(unref(N8nLoading_default), {
						rows: 3,
						class: "mb-xs"
					})
				], 10, _hoisted_2)) : createCommentVNode("", true),
				props.shouldUpgrade ? (openBlock(), createElementBlock("li", {
					key: 2,
					class: normalizeClass(_ctx.$style.retention)
				}, [createBaseVNode("span", _hoisted_3, toDisplayString(pruneTimeDisplay.value), 1), createVNode(unref(I18nT), {
					keypath: "workflowHistory.upgrade",
					tag: "span",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", {
						href: "#",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade"))
					}, toDisplayString(unref(i18n).baseText("workflowHistory.upgrade.link")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_n49uh_125",
	loader: "_loader_n49uh_135",
	sentinel: "_sentinel_n49uh_139",
	retention: "_retention_n49uh_143",
	groupHeader: "_groupHeader_n49uh_151",
	groupTimelineColumn: "_groupTimelineColumn_n49uh_170",
	groupChevron: "_groupChevron_n49uh_174"
};
var WorkflowHistoryList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default }]]);
var MAX_DESCRIPTION_LENGTH = 200;
var WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryContent",
	props: {
		workflow: {},
		workflowVersion: {},
		actions: {},
		isVersionActive: { type: Boolean },
		isListLoading: { type: Boolean },
		isFirstItemShown: { type: Boolean }
	},
	emits: ["action"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const workflowVersionPreview = computed(() => {
			if (!props.workflowVersion || !props.workflow) return;
			const { pinData, ...workflow } = props.workflow;
			return {
				...workflow,
				nodes: props.workflowVersion.nodes,
				connections: props.workflowVersion.connections
			};
		});
		const formattedCreatedAt = computed(() => {
			if (!props.workflowVersion) return "";
			const { date, time } = formatTimestamp(props.workflowVersion.createdAt);
			return i18n.baseText("workflowHistory.item.createdAt", { interpolate: {
				date,
				time
			} });
		});
		const versionNameDisplay = computed(() => {
			if (props.workflowVersion?.name) return props.workflowVersion.name;
			return props.isVersionActive && props.workflowVersion ? generateVersionName(props.workflowVersion.versionId) : formattedCreatedAt.value;
		});
		const isDescriptionExpanded = ref(false);
		const description = computed(() => props.workflowVersion?.description ?? "");
		const isDescriptionLong = computed(() => description.value.length > MAX_DESCRIPTION_LENGTH);
		const displayDescription = computed(() => {
			if (!isDescriptionLong.value || isDescriptionExpanded.value) return description.value;
			return description.value.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
		});
		const toggleDescription = () => {
			isDescriptionExpanded.value = !isDescriptionExpanded.value;
		};
		const actions$2 = computed(() => {
			let filteredActions = props.actions;
			if (props.isFirstItemShown) filteredActions = filteredActions.filter((action) => action.value !== "restore");
			if (props.isVersionActive) filteredActions = filteredActions.filter((action) => action.value !== "publish");
			else filteredActions = filteredActions.filter((action) => action.value !== "unpublish");
			return filteredActions;
		});
		const onAction = (value) => {
			if (!props.workflowVersion) return;
			emit("action", {
				action: value,
				id: props.workflowVersion.versionId,
				data: {
					formattedCreatedAt: formattedCreatedAt.value,
					versionName: versionNameDisplay.value,
					description: description.value
				}
			});
		};
		watch(() => props.workflowVersion, () => {
			isDescriptionExpanded.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowPreview_default, {
				key: 0,
				workflow: workflowVersionPreview.value,
				loading: props.isListLoading,
				"loader-type": "spinner"
			}, null, 8, ["workflow", "loading"])) : createCommentVNode("", true), props.workflowVersion ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.info)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.card) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.descriptionBox) }, [versionNameDisplay.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: versionNameDisplay.value
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.mainLine),
					bold: "",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(versionNameDisplay.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true), description.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(displayDescription.value) + " ", 1), isDescriptionLong.value ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					size: "small",
					onClick: toggleDescription
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(isDescriptionExpanded.value ? unref(i18n).baseText("generic.showLess") : unref(i18n).baseText("generic.showMore")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			})) : createCommentVNode("", true)], 2), createVNode(unref(N8nActionToggle_default), {
				class: normalizeClass(_ctx.$style.actions),
				actions: actions$2.value,
				placement: "bottom-end",
				"data-test-id": "workflow-history-content-actions",
				onAction
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					size: "large",
					"data-test-id": "action-toggle-button"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.content.actions")) + " ", 1), createVNode(unref(N8nIcon_default), {
						class: "ml-3xs",
						icon: "chevron-down",
						size: "small"
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["class", "actions"])], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_14lpt_125",
	info: "_info_14lpt_135",
	card: "_card_14lpt_143",
	descriptionBox: "_descriptionBox_14lpt_150",
	mainLine: "_mainLine_14lpt_162",
	actions: "_actions_14lpt_169"
};
var WorkflowHistoryContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 0 };
var WorkflowHistory_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistory",
	setup(__props) {
		const workflowHistoryActionTypes = [
			"restore",
			"publish",
			"unpublish",
			"clone",
			"open",
			"download"
		];
		const WORKFLOW_HISTORY_ACTIONS = workflowHistoryActionTypes.reduce((record, key) => ({
			...record,
			[key.toUpperCase()]: key
		}), {});
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const toast = useToast();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const workflowActivate = useWorkflowActivate();
		const canRender = ref(true);
		const isListLoading = ref(true);
		const requestNumberOfItems = ref(20);
		const lastReceivedItemsLength = ref(0);
		const activeWorkflow = ref(null);
		const workflowHistory = ref([]);
		const selectedWorkflowVersion = ref(null);
		const workflowId = computed(() => normalizeSingleRouteParam("workflowId"));
		const versionId = computed(() => normalizeSingleRouteParam("versionId"));
		const editorRoute = computed(() => ({
			name: VIEWS.WORKFLOW,
			params: { name: workflowId.value }
		}));
		const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const workflowActiveVersionId = computed(() => {
			return workflowsStore.getWorkflowById(workflowId.value)?.activeVersion?.versionId;
		});
		const actions$2 = computed(() => workflowHistoryActionTypes.filter((value) => !(value === "publish" && activeWorkflow.value?.isArchived)).map((value) => ({
			label: i18n.baseText(`workflowHistory.item.actions.${value}`),
			disabled: value === "clone" && !workflowPermissions.value.create || value === "restore" && !workflowPermissions.value.update || (value === "publish" || value === "unpublish") && !workflowPermissions.value.update,
			value
		})));
		const isFirstItemShown = computed(() => workflowHistory.value[0]?.versionId === versionId.value);
		const sendTelemetry = (event) => {
			telemetry.track(event, {
				instance_id: useRootStore().instanceId,
				workflow_id: workflowId.value
			});
		};
		const loadMore = async (queryParams) => {
			const history = await workflowHistoryStore.getWorkflowHistory(workflowId.value, queryParams);
			lastReceivedItemsLength.value = history.length;
			workflowHistory.value = workflowHistory.value.concat(history);
		};
		onBeforeMount(async () => {
			sendTelemetry("User opened workflow history");
			try {
				const [workflow] = await Promise.all([workflowsStore.fetchWorkflow(workflowId.value), loadMore({ take: requestNumberOfItems.value })]);
				activeWorkflow.value = workflow;
				isListLoading.value = false;
				if (!versionId.value && workflowHistory.value.length) await router.replace({
					name: VIEWS.WORKFLOW_HISTORY,
					params: {
						workflowId: workflowId.value,
						versionId: workflowHistory.value[0].versionId
					}
				});
			} catch (error) {
				canRender.value = false;
				toast.showError(error, i18n.baseText("workflowHistory.title"));
			}
		});
		const normalizeSingleRouteParam = (name) => {
			const param = route.params[name];
			if (typeof param === "string") return param;
			return param?.[0] ?? "";
		};
		const openInNewTab = (id) => {
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW_HISTORY,
				params: {
					workflowId: workflowId.value,
					versionId: id
				}
			});
			window.open(href, "_blank");
		};
		const cloneWorkflowVersion = async (id, data) => {
			const clonedWorkflow = await workflowHistoryStore.cloneIntoNewWorkflow(workflowId.value, id, data);
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { name: clonedWorkflow.id }
			});
			toast.showMessage({
				title: i18n.baseText("workflowHistory.action.clone.success.title"),
				message: h("a", {
					href,
					target: "_blank"
				}, i18n.baseText("workflowHistory.action.clone.success.message")),
				type: "success",
				duration: 1e4
			});
		};
		const restoreWorkflowVersion = async (id) => {
			const versionIdBeforeRestore = (await workflowsStore.fetchWorkflow(workflowId.value)).versionId;
			activeWorkflow.value = await workflowHistoryStore.restoreWorkflow(workflowId.value, id);
			if (activeWorkflow.value.versionId === versionIdBeforeRestore) {
				toast.showMessage({
					title: i18n.baseText("workflowHistory.action.restore.alreadyRestored"),
					type: "info"
				});
				return;
			}
			workflowHistory.value = (await workflowHistoryStore.getWorkflowHistory(workflowId.value, { take: 1 })).concat(workflowHistory.value);
			toast.showMessage({
				title: i18n.baseText("workflowHistory.action.restore.success.title"),
				type: "success"
			});
		};
		const publishWorkflowVersion = (id, data) => {
			const publishEventBus = createEventBus();
			publishEventBus.once("publish", (publishData) => {
				activeWorkflow.value = workflowsStore.getWorkflowById(workflowId.value);
				const historyItem = workflowHistory.value.find((item$1) => item$1.versionId === publishData.versionId);
				if (historyItem) {
					historyItem.name = publishData.name;
					historyItem.description = publishData.description;
					if (activeWorkflow.value?.activeVersion?.workflowPublishHistory) historyItem.workflowPublishHistory = activeWorkflow.value.activeVersion.workflowPublishHistory;
				}
				if (selectedWorkflowVersion.value?.versionId === publishData.versionId) selectedWorkflowVersion.value = {
					...selectedWorkflowVersion.value,
					name: publishData.name,
					description: publishData.description,
					workflowPublishHistory: activeWorkflow.value?.activeVersion?.workflowPublishHistory ?? selectedWorkflowVersion.value.workflowPublishHistory
				};
				sendTelemetry("User published version from history");
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_PUBLISH_MODAL_KEY,
				data: {
					versionId: id,
					workflowId: workflowId.value,
					formattedCreatedAt: data.formattedCreatedAt,
					versionName: data.versionName,
					description: data.description,
					eventBus: publishEventBus
				}
			});
		};
		const unpublishWorkflowVersion = (id, data) => {
			if (workflowActiveVersionId.value !== id) return;
			const unpublishEventBus = createEventBus();
			unpublishEventBus.once("unpublish", async () => {
				const success = await workflowActivate.unpublishWorkflowFromHistory(workflowId.value);
				uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
				if (!success) return;
				activeWorkflow.value = workflowsStore.getWorkflowById(workflowId.value);
				toast.showMessage({
					title: i18n.baseText("workflowHistory.action.unpublish.success.title"),
					type: "success"
				});
				sendTelemetry("User unpublished workflow from history");
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_VERSION_UNPUBLISH,
				data: {
					versionName: data.versionName,
					eventBus: unpublishEventBus
				}
			});
		};
		const onAction = async ({ action, id, data }) => {
			try {
				switch (action) {
					case WORKFLOW_HISTORY_ACTIONS.OPEN:
						openInNewTab(id);
						sendTelemetry("User opened version in new tab");
						break;
					case WORKFLOW_HISTORY_ACTIONS.DOWNLOAD:
						await workflowHistoryStore.downloadVersion(workflowId.value, id, data);
						sendTelemetry("User downloaded version");
						break;
					case WORKFLOW_HISTORY_ACTIONS.CLONE:
						await cloneWorkflowVersion(id, data);
						sendTelemetry("User cloned version");
						break;
					case WORKFLOW_HISTORY_ACTIONS.RESTORE:
						await restoreWorkflowVersion(id);
						sendTelemetry("User restored version");
						break;
					case WORKFLOW_HISTORY_ACTIONS.PUBLISH:
						publishWorkflowVersion(id, data);
						break;
					case WORKFLOW_HISTORY_ACTIONS.UNPUBLISH:
						unpublishWorkflowVersion(id, data);
						break;
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowHistory.action.error.title", { interpolate: { action: i18n.baseText(`workflowHistory.item.actions.${action}`).toLowerCase() } }));
			}
		};
		const onPreview = async ({ event, id }) => {
			if (event.metaKey || event.ctrlKey) {
				openInNewTab(id);
				sendTelemetry("User opened version in new tab");
			} else await router.push({
				name: VIEWS.WORKFLOW_HISTORY,
				params: {
					workflowId: workflowId.value,
					versionId: id
				}
			});
		};
		const onUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
		};
		watchEffect(async () => {
			if (!versionId.value) return;
			try {
				const [workflowVersion, workflow] = await Promise.all([workflowHistoryStore.getWorkflowVersion(workflowId.value, versionId.value), workflowsStore.fetchWorkflow(workflowId.value)]);
				selectedWorkflowVersion.value = workflowVersion;
				activeWorkflow.value = workflow;
				sendTelemetry("User selected version");
			} catch (error) {
				if (error.message?.includes("version")) toast.showError(/* @__PURE__ */ new Error(`${error.message} "${versionId.value}"&nbsp;`), i18n.baseText("workflowHistory.title"));
				else {
					canRender.value = false;
					toast.showError(error, i18n.baseText("workflowHistory.title"));
				}
			}
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.view) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(activeWorkflow.value?.name), 1)]),
					_: 1
				}), activeWorkflow.value?.isArchived ? (openBlock(), createElementBlock("span", _hoisted_1, [createVNode(unref(N8nBadge_default), {
					class: "ml-s",
					theme: "tertiary",
					bold: "",
					"data-test-id": "workflow-archived-tag"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.archived")), 1)]),
					_: 1
				})])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.corner) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.title")), 1)]),
					_: 1
				}), createVNode(_component_RouterLink, {
					to: editorRoute.value,
					"data-test-id": "workflow-history-close-button"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "tertiary",
						icon: "x",
						size: "small",
						text: "",
						square: ""
					})]),
					_: 1
				}, 8, ["to"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.listComponentWrapper) }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryList_default, {
					key: 0,
					items: workflowHistory.value,
					"last-received-items-length": lastReceivedItemsLength.value,
					"selected-item": selectedWorkflowVersion.value,
					actions: actions$2.value,
					"request-number-of-items": requestNumberOfItems.value,
					"should-upgrade": unref(workflowHistoryStore).shouldUpgrade,
					"evaluated-prune-time-in-hours": unref(workflowHistoryStore).evaluatedPruneTime,
					"is-list-loading": isListLoading.value,
					"active-version-id": workflowActiveVersionId.value,
					onAction,
					onPreview,
					onLoadMore: loadMore,
					onUpgrade
				}, null, 8, [
					"items",
					"last-received-items-length",
					"selected-item",
					"actions",
					"request-number-of-items",
					"should-upgrade",
					"evaluated-prune-time-in-hours",
					"is-list-loading",
					"active-version-id"
				])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentComponentWrapper) }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryContent_default, {
					key: 0,
					workflow: activeWorkflow.value,
					"workflow-version": selectedWorkflowVersion.value,
					"is-version-active": selectedWorkflowVersion.value?.versionId === workflowActiveVersionId.value,
					actions: actions$2.value,
					"is-list-loading": isListLoading.value,
					"is-first-item-shown": isFirstItemShown.value,
					onAction
				}, null, 8, [
					"workflow",
					"workflow-version",
					"is-version-active",
					"actions",
					"is-list-loading",
					"is-first-item-shown"
				])) : createCommentVNode("", true)], 2)
			], 2);
		};
	}
});
var WorkflowHistory_vue_vue_type_style_index_0_lang_module_default = {
	view: "_view_q2hup_125",
	header: "_header_q2hup_135",
	corner: "_corner_q2hup_143",
	contentComponentWrapper: "_contentComponentWrapper_q2hup_154",
	listComponentWrapper: "_listComponentWrapper_q2hup_159"
};
var WorkflowHistory_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistory_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistory_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowHistory_default as default };
