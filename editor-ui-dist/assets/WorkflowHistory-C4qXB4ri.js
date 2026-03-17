import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, Bt as toRef, C as createBaseVNode, E as createElementBlock, F as guardReactiveProps, Ft as ref, I as h, K as onBeforeMount, N as defineComponent, Nt as reactive, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, _t as watchEffect, at as resolveComponent, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeProps, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as I18nT, yt as useI18n } from "./_MapCache-Dm0zgpAe.js";
import { C as require__arrayMap, Di as useRouter, Ei as useRoute, Fi as N8nIconButton_default, Gi as N8nButton_default, Hi as N8nHeading_default, Ki as N8nIcon_default, Lt as ElOption, Nt as N8nBadge_default, Ot as N8nActionToggle_default, Rt as ElOptionGroup, Wi as N8nText_default, bt as createEventBus, ht as N8nSelect_default, ji as N8nTooltip_default, kt as N8nLoading_default, x as require__castPath, yi as N8nLink_default } from "./src-DpXAQiaT.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DKPoZMum.js";
import { Nr as useWorkflowHistoryStore, Tr as useToast, Wr as useWorkflowsListStore, js as useSettingsStore, nn as telemetry, r as useUIStore, t as useUsersStore } from "./users.store-KDduniYy.js";
import { w as require__baseUnset } from "./ParameterInputList-BjP6qemy.js";
import { Gs as WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY, Hi as require__baseClone, Js as WORKFLOW_HISTORY_VERSION_UNPUBLISH, Ks as WORKFLOW_HISTORY_PUBLISH_MODAL_KEY, Ui as require__getAllKeysIn, Ws as WORKFLOW_HISTORY_DIFF_MODAL_KEY, cl as EnterpriseEditionFeature, es as getResourcePermissions, us as VIEWS, wi as require__flatRest } from "./constants-BFYSGQP4.js";
import { c as require__copyObject, u as require_isPlainObject } from "./merge-B0uVzL8N.js";
import { r as useRootStore } from "./_baseOrderBy-CjnCEHwl.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DBvy4NsP.js";
import "./versions.store-BeRcylj7.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DO-vNQ1E.js";
import "./dataTable.store-DoJbb3rj.js";
import { t as Modal_default } from "./Modal-DS2IP3Wk.js";
import "./useClipboard-kLXRilEV.js";
import "./executions.store-ByzTH5-P.js";
import "./assistant.store-C0mp11I1.js";
import "./chatPanel.store-BJNCJjNA.js";
import "./RunData-Cyd2mcBm.js";
import "./NDVEmptyState-CAVpRQIg.js";
import "./externalSecrets.ee.store-QSzeAebe.js";
import "./uniqBy-oibyPKTc.js";
import "./communityNodes.store-BPojQhtx.js";
import "./usePinnedData-B4TDiiKQ.js";
import "./nodeIcon-BKSh_82X.js";
import "./canvas.utils-BpFkmltQ.js";
import "./canvas.eventBus-IAuUOwZr.js";
import "./useCanvasOperations-DkB_TBZ3.js";
import "./ContactAdministratorToInstall-C9fjcxqm.js";
import "./useQuickConnect-4dZghdlT.js";
import "./semver-l-8UtjEn.js";
import "./CredentialIcon-Bw1bGZDR.js";
import "./useDynamicCredentials-BJ2deOke.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-CPLY-rD1.js";
import "./NodeIcon-DaDADg-c.js";
import "./VirtualSchema-BBsTyxyL.js";
import "./useCalloutHelpers-DCrL0mMU.js";
import "./useTelemetryContext-CH2_um8_.js";
import "./useRunWorkflow-P8Wyk4xJ.js";
import "./pushConnection.store-BDq5Y2m6.js";
import "./nodeTransforms-CFcPHPkF.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-BFVKx2xB.js";
import "./dateFormatter-B_4Ykken.js";
import "./useExecutionHelpers-xnerzRKT.js";
import "./useFreeAiCredits-BLSBvXJX.js";
import "./NodeSettings-C6QhVHUG.js";
import "./CommunityNodeUpdateInfo-BZ08zZDL.js";
import "./KeyboardShortcutTooltip-BHivDLbD.js";
import "./vue-C5mU5rBa.js";
import { a as getPublishedVersionId, i as getLastPublishedVersion, n as formatTimestamp, o as getVersionLabel, t as computeTimelineEntries } from "./utils-amN5JmEN.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CaYou8N4.js";
import "./useCanvasMapping-0J_fDZqx.js";
import "./useKeybindings-DCGPJ1Pf.js";
import "./useNodeCreatorShortcutCoachmark-BgKFKa6B.js";
import "./useActions-FFhFpLeC.js";
import "./setupPanel.store-AIqdtsnw.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-D-RF9gib.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-DkqGBKlL.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-imGmDK-3.js";
var WorkflowVersionStatusIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowVersionStatusIndicator",
	props: { status: { default: "default" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass([_ctx.$style.indicator, _ctx.$style[`indicator-${__props.status}`]]) }, null, 2);
		};
	}
});
var WorkflowVersionStatusIndicator_vue_vue_type_style_index_0_lang_module_default = {
	indicator: "_indicator_7bf00_125",
	"indicator-published": "_indicator-published_7bf00_133",
	"indicator-latest": "_indicator-latest_7bf00_137",
	"indicator-default": "_indicator-default_7bf00_141"
};
var WorkflowVersionStatusIndicator_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowVersionStatusIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowVersionStatusIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
const usePublishedByDetails = (publishInfo) => {
	const i18n = useI18n();
	return computed(() => {
		const info$1 = unref(publishInfo);
		if (!info$1) return "";
		const { date, time } = formatTimestamp(info$1.publishedAt);
		const publishedAt = i18n.baseText("workflowHistory.item.createdAt", { interpolate: {
			date,
			time
		} });
		return `${i18n.baseText("workflowHistory.item.publishedBy")} ${info$1.publishedBy ?? "Unknown"}, ${publishedAt}`;
	});
};
var WorkflowHistoryPublishedTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryPublishedTooltip",
	props: {
		label: {},
		publishInfo: {},
		status: { default: "default" },
		placement: { default: "left" },
		offset: { default: 8 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const publishedByDetails = usePublishedByDetails(toRef(props, "publishInfo"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: props.placement,
				"show-after": 300,
				offset: props.offset,
				"content-class": _ctx.$style.tooltipContent
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipContentTitle) }, [createVNode(WorkflowVersionStatusIndicator_default, { status: props.status }, null, 8, ["status"]), createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.label) + " ", 1), props.status === "published" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" (" + toDisplayString(unref(i18n).baseText("workflows.published")) + ") ", 1)], 64)) : createCommentVNode("", true)]),
					_: 1
				})], 2), createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(_ctx.$style.tooltipSecondaryText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(publishedByDetails)), 1)]),
					_: 1
				}, 8, ["class"])]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"placement",
				"offset",
				"content-class"
			]);
		};
	}
});
var WorkflowHistoryPublishedTooltip_vue_vue_type_style_index_0_lang_module_default = {
	tooltipContentTitle: "_tooltipContentTitle_1caju_125",
	tooltipSecondaryText: "_tooltipSecondaryText_1caju_131",
	tooltipContent: "_tooltipContent_1caju_125"
};
var WorkflowHistoryPublishedTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryPublishedTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryPublishedTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryListItem",
	props: {
		item: {},
		index: {},
		compareWith: { default: null },
		actions: {},
		isSelected: {
			type: Boolean,
			default: false
		},
		isPublished: {
			type: Boolean,
			default: false
		},
		isGrouped: {
			type: Boolean,
			default: false
		},
		isWorkflowDiffsEnabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"action",
		"preview",
		"mounted",
		"compare"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const actionsVisible = ref(false);
		const itemElement = ref(null);
		const formattedCreatedAt = computed(() => {
			const { date, time } = formatTimestamp(props.item.createdAt);
			return i18n.baseText("workflowHistory.item.createdAt", { interpolate: {
				date,
				time
			} });
		});
		const authorLabel = computed(() => {
			const allAuthors = props.item.authors.split(", ");
			let displayLabel = allAuthors[0];
			if (allAuthors.length > 1) displayLabel = `${displayLabel} + ${allAuthors.length - 1}`;
			return displayLabel;
		});
		const versionName = computed(() => {
			const currentVersionId = props.index === 0 ? props.item.versionId : void 0;
			return getVersionLabel({
				workflowHistory: props.item,
				currentVersionId
			});
		});
		const versionStatus = computed(() => {
			if (props.isPublished) return "published";
			return props.index === 0 ? "latest" : "default";
		});
		const getPublishedUserName = (userId) => {
			if (!userId) return null;
			const user = usersStore.usersById[userId];
			return user?.fullName ?? user?.email ?? null;
		};
		const wrapperProps = computed(() => {
			const lastPublishedVersion = getLastPublishedVersion(props.item.workflowPublishHistory);
			if (!lastPublishedVersion) return null;
			const publishedBy = getPublishedUserName(lastPublishedVersion.userId);
			return {
				label: versionName.value,
				status: versionStatus.value,
				publishInfo: {
					publishedBy,
					publishedAt: lastPublishedVersion.createdAt,
					isCurrentlyPublished: props.isPublished
				}
			};
		});
		const isCompareDisabled = computed(() => !props.compareWith?.versionId);
		const compareTooltipContent = computed(() => {
			return props.compareWith?.name ? `Compare with ${props.compareWith.name}` : "";
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
		const onCompareClick = () => {
			if (!props.compareWith?.versionId) return;
			emit("compare", { id: props.compareWith.versionId });
		};
		onMounted(() => {
			emit("mounted", {
				index: props.index,
				offsetTop: itemElement.value?.offsetTop ?? 0,
				isSelected: props.isSelected
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(wrapperProps.value ? WorkflowHistoryPublishedTooltip_default : "span"), normalizeProps(guardReactiveProps(wrapperProps.value ?? {})), {
				default: withCtx(() => [createBaseVNode("li", {
					ref_key: "itemElement",
					ref: itemElement,
					"data-test-id": "workflow-history-list-item",
					role: "button",
					class: normalizeClass({
						[_ctx.$style.item]: true,
						[_ctx.$style.selected]: props.isSelected,
						[_ctx.$style.actionsVisible]: actionsVisible.value,
						[_ctx.$style.grouped]: props.isGrouped,
						[_ctx.$style.firstItem]: props.index === 0
					}),
					onClick: onItemClick
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.timelineColumn) }, [!props.isGrouped ? (openBlock(), createBlock(WorkflowVersionStatusIndicator_default, {
					key: 0,
					status: versionStatus.value
				}, null, 8, ["status"])) : (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.timelineLine)
				}, null, 2))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true,
						color: "text-dark",
						class: normalizeClass(_ctx.$style.mainLine)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(versionName.value) + " ", 1), props.isPublished ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" (" + toDisplayString(unref(i18n).baseText("workflowHistory.item.active")) + ") ", 1)], 64)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaRow) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.metaAuthor)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(authorLabel.value) + ", ", 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						tag: "time",
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.metaTime)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(formattedCreatedAt.value), 1)]),
						_: 1
					}, 8, ["class"])], 2)], 2),
					props.isWorkflowDiffsEnabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: compareTooltipContent.value,
						disabled: isCompareDisabled.value,
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							icon: "file-diff",
							disabled: isCompareDisabled.value,
							class: normalizeClass(_ctx.$style.compareButton),
							"data-test-id": "workflow-history-compare-item-button",
							onClick: withModifiers(onCompareClick, ["stop"])
						}, null, 8, ["disabled", "class"])]),
						_: 1
					}, 8, ["content", "disabled"])) : createCommentVNode("", true),
					createVNode(unref(N8nActionToggle_default), {
						class: normalizeClass(_ctx.$style.actions),
						actions: props.actions,
						placement: "bottom-end",
						onAction,
						onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
						onVisibleChange
					}, null, 8, ["class", "actions"])
				], 2)], 2)]),
				_: 1
			}, 16);
		};
	}
});
var WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_1mw5y_125",
	grouped: "_grouped_1mw5y_136",
	selected: "_selected_1mw5y_136",
	firstItem: "_firstItem_1mw5y_139",
	wrapper: "_wrapper_1mw5y_154",
	timelineColumn: "_timelineColumn_1mw5y_168",
	timelineLine: "_timelineLine_1mw5y_179",
	content: "_content_1mw5y_187",
	mainRow: "_mainRow_1mw5y_195",
	mainLine: "_mainLine_1mw5y_201",
	metaRow: "_metaRow_1mw5y_207",
	metaAuthor: "_metaAuthor_1mw5y_215",
	metaTime: "_metaTime_1mw5y_223",
	actions: "_actions_1mw5y_228",
	compareButton: "_compareButton_1mw5y_235"
};
var WorkflowHistoryListItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = { "data-test-id": "prune-time-display" };
var WorkflowHistoryUpgradeFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryUpgradeFooter",
	props: {
		pruneTimeDisplay: {},
		withTopBorder: {
			type: Boolean,
			default: false
		}
	},
	emits: ["upgrade"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.retention, { [_ctx.$style.withTopBorder]: props.withTopBorder }]) }, [createBaseVNode("span", _hoisted_1$2, toDisplayString(props.pruneTimeDisplay), 1), createVNode(unref(I18nT), {
				keypath: "workflowHistory.upgrade",
				tag: "span",
				scope: "global"
			}, {
				link: withCtx(() => [createBaseVNode("a", {
					href: "#",
					onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("upgrade"), ["prevent"]))
				}, toDisplayString(unref(i18n).baseText("workflowHistory.upgrade.link")), 1)]),
				_: 1
			})], 2);
		};
	}
});
var WorkflowHistoryUpgradeFooter_vue_vue_type_style_index_0_lang_module_default = {
	retention: "_retention_1f7ao_125",
	withTopBorder: "_withTopBorder_1f7ao_133"
};
var WorkflowHistoryUpgradeFooter_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryUpgradeFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryUpgradeFooter_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["aria-expanded", "onClick"];
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = { key: 2 };
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
		publishedVersionId: {},
		isWorkflowDiffsEnabled: { type: Boolean }
	},
	emits: [
		"action",
		"preview",
		"loadMore",
		"upgrade",
		"compare"
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
			if (item$1.versionId === props.publishedVersionId) filteredActions = filteredActions.filter((action) => action.value !== "publish");
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
		const onCompare = ({ id }) => {
			shouldAutoScroll.value = false;
			emit("compare", { id });
		};
		const getHistoryVersionLabel = (workflowHistory) => {
			const currentVersionId = props.items[0]?.versionId;
			return getVersionLabel({
				workflowHistory,
				currentVersionId
			});
		};
		const getItemToCompareWith = (item$1, index) => {
			if (!props.isWorkflowDiffsEnabled) return null;
			if (!props.selectedItem) return null;
			if (props.items[index]?.versionId === props.selectedItem?.versionId) {
				const previousVersion = props.items[index + 1];
				if (!previousVersion) return null;
				return {
					name: getHistoryVersionLabel(previousVersion),
					versionId: previousVersion.versionId
				};
			}
			return {
				name: getHistoryVersionLabel(props.selectedItem),
				versionId: item$1.versionId
			};
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
								"compare-with": getItemToCompareWith(versionEntry.item, versionEntry.originalIndex),
								"is-selected": versionEntry.item.versionId === props.selectedItem?.versionId,
								"is-published": versionEntry.item.versionId === props.publishedVersionId,
								actions: getActions(versionEntry.item, versionEntry.originalIndex),
								"is-workflow-diffs-enabled": props.isWorkflowDiffsEnabled,
								"is-grouped": true,
								onAction,
								onPreview,
								onCompare,
								onMounted: onItemMounted
							}, null, 8, [
								"index",
								"item",
								"compare-with",
								"is-selected",
								"is-published",
								"actions",
								"is-workflow-diffs-enabled"
							]);
						}), 128)) : createCommentVNode("", true),
						entry.type === "version" ? (openBlock(), createBlock(WorkflowHistoryListItem_default, {
							key: 2,
							index: entry.originalIndex,
							item: entry.item,
							"compare-with": getItemToCompareWith(entry.item, entry.originalIndex),
							"is-selected": entry.item.versionId === props.selectedItem?.versionId,
							"is-published": entry.item.versionId === props.publishedVersionId,
							actions: getActions(entry.item, entry.originalIndex),
							"is-workflow-diffs-enabled": props.isWorkflowDiffsEnabled,
							onAction,
							onPreview,
							onCompare,
							onMounted: onItemMounted
						}, null, 8, [
							"index",
							"item",
							"compare-with",
							"is-selected",
							"is-published",
							"actions",
							"is-workflow-diffs-enabled"
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
				props.shouldUpgrade ? (openBlock(), createElementBlock("li", _hoisted_3, [createVNode(WorkflowHistoryUpgradeFooter_default, {
					"prune-time-display": pruneTimeDisplay.value,
					onUpgrade: _cache[0] || (_cache[0] = ($event) => emit("upgrade"))
				}, null, 8, ["prune-time-display"])])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_vsdqz_125",
	loader: "_loader_vsdqz_135",
	sentinel: "_sentinel_vsdqz_139",
	groupHeader: "_groupHeader_vsdqz_143",
	groupTimelineColumn: "_groupTimelineColumn_vsdqz_162",
	groupChevron: "_groupChevron_vsdqz_166"
};
var WorkflowHistoryList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default }]]);
var require__customOmitClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPlainObject = require_isPlainObject();
	function customOmitClone$1(value) {
		return isPlainObject(value) ? void 0 : value;
	}
	module.exports = customOmitClone$1;
}));
var require_omit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap(), baseClone = require__baseClone(), baseUnset = require__baseUnset(), castPath = require__castPath(), copyObject = require__copyObject(), customOmitClone = require__customOmitClone(), flatRest = require__flatRest(), getAllKeysIn = require__getAllKeysIn();
	var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
	module.exports = flatRest(function(object, paths) {
		var result = {};
		if (object == null) return result;
		var isDeep = false;
		paths = arrayMap(paths, function(path) {
			path = castPath(path, object);
			isDeep || (isDeep = path.length > 1);
			return path;
		});
		copyObject(object, getAllKeysIn(object), result);
		if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		var length = paths.length;
		while (length--) baseUnset(result, paths[length]);
		return result;
	});
}));
var import_omit$1 = /* @__PURE__ */ __toESM(require_omit(), 1);
var MAX_DESCRIPTION_LENGTH = 200;
var WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryContent",
	props: {
		workflow: {},
		workflowVersion: {},
		actions: {},
		isPublished: { type: Boolean },
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
			return {
				...(0, import_omit$1.default)(props.workflow, "pinData"),
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
			if (!props.workflowVersion) return "";
			return getVersionLabel({
				workflowHistory: props.workflowVersion,
				currentVersionId: props.workflow?.versionId
			});
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
			if (props.isPublished) filteredActions = filteredActions.filter((action) => action.value !== "publish");
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
				placement: "right",
				"show-after": 300
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(formattedCreatedAt.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.mainLine),
					bold: "",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(versionNameDisplay.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			})) : createCommentVNode("", true), description.value ? (openBlock(), createBlock(unref(N8nText_default), {
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
					variant: "subtle",
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
	content: "_content_1kvp7_125",
	info: "_info_1kvp7_135",
	card: "_card_1kvp7_143",
	descriptionBox: "_descriptionBox_1kvp7_150",
	mainLine: "_mainLine_1kvp7_162",
	actions: "_actions_1kvp7_170"
};
var WorkflowHistoryContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkflowHistoryVersionSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryVersionSelect",
	props: {
		modelValue: {},
		options: {},
		dataTestId: {}
	},
	emits: ["update:modelValue", "upgrade"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const popperContainer = ref(null);
		const filter = ref("");
		const i18n = useI18n();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const optionsByValue = computed(() => {
			return new Map(props.options.map((option) => [option.value, option]));
		});
		const selectedOption = computed(() => {
			return optionsByValue.value.get(props.modelValue);
		});
		const selectedOptionWrapperProps = computed(() => {
			const publishInfo = selectedOption.value?.publishInfo;
			if (!publishInfo) return null;
			return {
				label: selectedOption.value.label,
				status: selectedOption.value.status,
				publishInfo
			};
		});
		const groupedOptions = computed(() => {
			const groups = /* @__PURE__ */ new Map();
			for (const option of props.options) {
				const key = option.createdAt ? formatTimestamp(option.createdAt).date : "Unknown";
				const groupOptions = groups.get(key);
				if (groupOptions) groupOptions.push(option);
				else groups.set(key, [option]);
			}
			return Array.from(groups.entries()).map(([dateLabel, options]) => ({
				dateLabel,
				options
			}));
		});
		const selectedOptionHasPublishInfo = computed(() => {
			return Boolean(selectedOption.value?.publishInfo);
		});
		const filterGroupOptions = (group, normalizedFilter) => {
			const filteredOptions = group.options.filter((option) => option.label.toLowerCase().includes(normalizedFilter));
			if (filteredOptions.length === group.options.length) return group;
			return {
				...group,
				options: filteredOptions
			};
		};
		const filteredGroupedOptions = computed(() => {
			if (!filter.value) return groupedOptions.value;
			const normalizedFilter = filter.value.toLowerCase().trim();
			const filteredGroups = [];
			for (const group of groupedOptions.value) {
				const filteredGroup = filterGroupOptions(group, normalizedFilter);
				if (filteredGroup.options.length > 0) filteredGroups.push(filteredGroup);
			}
			return filteredGroups;
		});
		function onFilter(query = "") {
			filter.value = query;
		}
		function onVisibleChange(isVisible) {
			if (!isVisible) filter.value = "";
		}
		const pruneTimeDisplay = computed(() => {
			const timeInHours = unref(workflowHistoryStore.evaluatedPruneTime) ?? 0;
			if (timeInHours < 24) {
				const key$1 = timeInHours === 1 ? "workflowHistory.limitHour" : "workflowHistory.limitHours";
				return i18n.baseText(key$1, { interpolate: { hours: String(timeInHours) } });
			}
			const days = Math.round(timeInHours / 24);
			const key = days === 1 ? "workflowHistory.limitDay" : "workflowHistory.limitDays";
			return i18n.baseText(key, { interpolate: { days: String(days) } });
		});
		const shouldShowUpgradeFooter = computed(() => Boolean(unref(workflowHistoryStore.shouldUpgrade)));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", {
				ref_key: "popperContainer",
				ref: popperContainer
			}, null, 512), (openBlock(), createBlock(resolveDynamicComponent(selectedOptionHasPublishInfo.value ? WorkflowHistoryPublishedTooltip_default : "span"), normalizeProps(guardReactiveProps(selectedOptionWrapperProps.value ?? {})), {
				default: withCtx(() => [createVNode(unref(N8nSelect_default), {
					"model-value": props.modelValue,
					size: "small",
					filterable: "",
					"filter-method": onFilter,
					class: normalizeClass(_ctx.$style.select),
					"popper-class": _ctx.$style["workflow-history-version-select-dropdown"],
					"append-to": popperContainer.value,
					teleported: "",
					"data-test-id": props.dataTestId,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update:modelValue", $event)),
					onVisibleChange
				}, createSlots({
					prefix: withCtx(() => [createVNode(WorkflowVersionStatusIndicator_default, { status: selectedOption.value?.status }, null, 8, ["status"])]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredGroupedOptions.value, (group) => {
						return openBlock(), createBlock(unref(ElOptionGroup), {
							key: group.dateLabel,
							label: group.dateLabel
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.options, (option) => {
								return openBlock(), createBlock(unref(ElOption), {
									key: option.value,
									value: option.value,
									label: option.label
								}, {
									default: withCtx(() => [option.publishInfo ? (openBlock(), createBlock(WorkflowHistoryPublishedTooltip_default, {
										key: 0,
										label: option.label,
										status: option.status,
										"publish-info": option.publishInfo,
										offset: 24,
										placement: "right"
									}, {
										default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionRow) }, [createVNode(WorkflowVersionStatusIndicator_default, { status: option.status }, null, 8, ["status"]), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2)]),
										_: 2
									}, 1032, [
										"label",
										"status",
										"publish-info"
									])) : (openBlock(), createElementBlock("span", {
										key: 1,
										class: normalizeClass(_ctx.$style.optionRow)
									}, [createVNode(WorkflowVersionStatusIndicator_default, { status: option.status }, null, 8, ["status"]), createBaseVNode("span", null, toDisplayString(option.label), 1)], 2))]),
									_: 2
								}, 1032, ["value", "label"]);
							}), 128))]),
							_: 2
						}, 1032, ["label"]);
					}), 128))]),
					_: 2
				}, [shouldShowUpgradeFooter.value ? {
					name: "footer",
					fn: withCtx(() => [createVNode(WorkflowHistoryUpgradeFooter_default, {
						"prune-time-display": pruneTimeDisplay.value,
						"with-top-border": true,
						onUpgrade: _cache[0] || (_cache[0] = ($event) => emit("upgrade"))
					}, null, 8, ["prune-time-display"])]),
					key: "0"
				} : void 0]), 1032, [
					"model-value",
					"class",
					"popper-class",
					"append-to",
					"data-test-id"
				])]),
				_: 1
			}, 16))], 2);
		};
	}
});
const container$1 = "_container_132hu_125";
const select = "_select_132hu_129";
const optionRow = "_optionRow_132hu_151";
var WorkflowHistoryVersionSelect_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	select,
	"workflow-history-version-select-dropdown": "_workflow-history-version-select-dropdown_132hu_137",
	optionRow
};
var WorkflowHistoryVersionSelect_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryVersionSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryVersionSelect_vue_vue_type_style_index_0_lang_module_default }]]);
const useWorkflowHistoryVersionOptions = ({ availableVersions, currentWorkflowVersionId, publishedWorkflowVersionId, selectedVersionIds, resolveUserDisplayName }) => {
	const versionsById = computed(() => {
		return new Map(availableVersions.value.map((version) => [version.versionId, version]));
	});
	const getVersionById = (versionId) => versionsById.value.get(versionId);
	const getVersionLabelById = (versionId) => {
		return getVersionLabel({
			workflowHistory: getVersionById(versionId) ?? {
				versionId,
				name: null
			},
			currentVersionId: currentWorkflowVersionId.value
		});
	};
	const getVersionStatusById = (versionId) => {
		if (versionId === publishedWorkflowVersionId.value) return "published";
		return versionId === currentWorkflowVersionId.value ? "latest" : "default";
	};
	const getVersionPublishInfoById = (versionId) => {
		const historyVersion = getVersionById(versionId);
		if (!historyVersion) return;
		const publishInfo = getLastPublishedVersion(historyVersion.workflowPublishHistory);
		if (!publishInfo) return;
		return {
			publishedBy: resolveUserDisplayName(publishInfo.userId),
			publishedAt: publishInfo.createdAt
		};
	};
	const getVersionCreatedAtById = (versionId) => {
		return getVersionById(versionId)?.createdAt;
	};
	return {
		getVersionLabelById,
		versionOptions: computed(() => {
			const options = new Map(availableVersions.value.map((version) => [version.versionId, getVersionLabelById(version.versionId)]));
			for (const versionId of selectedVersionIds.value) if (versionId && !options.has(versionId)) options.set(versionId, getVersionLabelById(versionId));
			return Array.from(options.entries()).map(([value, label]) => ({
				value,
				label,
				status: getVersionStatusById(value),
				publishInfo: getVersionPublishInfoById(value),
				createdAt: getVersionCreatedAtById(value)
			}));
		})
	};
};
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var WorkflowHistoryDiff_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryDiff",
	props: {
		workflowId: {},
		sourceWorkflowVersionId: {},
		targetWorkflowVersionId: {},
		availableVersions: {}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const workflowsListStore = useWorkflowsListStore();
		const usersStore = useUsersStore();
		const isLoading = ref(true);
		const sourceWorkflow = ref();
		const targetWorkflow = ref();
		const sourceLabel = ref("");
		const targetLabel = ref("");
		const selectedSourceVersionId = ref(props.sourceWorkflowVersionId);
		const selectedTargetVersionId = ref(props.targetWorkflowVersionId);
		const currentWorkflowVersionId = ref();
		const publishedWorkflowVersionId = ref();
		const loadRequestId = ref(0);
		const { getVersionLabelById, versionOptions } = useWorkflowHistoryVersionOptions({
			availableVersions: computed(() => props.availableVersions),
			currentWorkflowVersionId,
			publishedWorkflowVersionId,
			selectedVersionIds: computed(() => [selectedSourceVersionId.value, selectedTargetVersionId.value]),
			resolveUserDisplayName: (userId) => {
				if (!userId) return null;
				const user = usersStore.usersById[userId];
				return user?.fullName ?? user?.email ?? null;
			}
		});
		const loadComparedVersions = async (sourceVersionId, targetVersionId) => {
			const requestId = ++loadRequestId.value;
			isLoading.value = true;
			try {
				const [workflow, sourceWorkflowVersion, targetWorkflowVersion] = await Promise.all([
					workflowsListStore.fetchWorkflow(props.workflowId),
					workflowHistoryStore.getWorkflowVersion(props.workflowId, sourceVersionId),
					workflowHistoryStore.getWorkflowVersion(props.workflowId, targetVersionId)
				]);
				if (requestId !== loadRequestId.value) return;
				if (sourceWorkflowVersion.workflowId !== props.workflowId || targetWorkflowVersion.workflowId !== props.workflowId) throw new Error(i18n.baseText("workflowDiff.versionMismatchError"));
				currentWorkflowVersionId.value = workflow.versionId;
				publishedWorkflowVersionId.value = workflow.activeVersionId ?? void 0;
				const workflowWithoutPinData = (0, import_omit.default)(workflow, "pinData");
				sourceWorkflow.value = {
					...workflowWithoutPinData,
					versionId: sourceWorkflowVersion.versionId,
					nodes: sourceWorkflowVersion.nodes,
					connections: sourceWorkflowVersion.connections
				};
				targetWorkflow.value = {
					...workflowWithoutPinData,
					versionId: targetWorkflowVersion.versionId,
					nodes: targetWorkflowVersion.nodes,
					connections: targetWorkflowVersion.connections
				};
				sourceLabel.value = getVersionLabelById(sourceWorkflowVersion.versionId);
				targetLabel.value = getVersionLabelById(targetWorkflowVersion.versionId);
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowDiff.compareVersionsLoadError"));
				emit("close");
			} finally {
				if (requestId === loadRequestId.value) isLoading.value = false;
			}
		};
		const swapSelectedVersions = () => {
			const previousSourceVersionId = selectedSourceVersionId.value;
			selectedSourceVersionId.value = selectedTargetVersionId.value;
			selectedTargetVersionId.value = previousSourceVersionId;
		};
		const onSourceVersionChange = (nextSourceVersionId) => {
			if (nextSourceVersionId === selectedTargetVersionId.value) {
				swapSelectedVersions();
				return;
			}
			selectedSourceVersionId.value = nextSourceVersionId;
		};
		const onTargetVersionChange = (nextTargetVersionId) => {
			if (nextTargetVersionId === selectedSourceVersionId.value) {
				swapSelectedVersions();
				return;
			}
			selectedTargetVersionId.value = nextTargetVersionId;
		};
		watch(() => [props.sourceWorkflowVersionId, props.targetWorkflowVersionId], ([sourceVersionId, targetVersionId]) => {
			selectedSourceVersionId.value = sourceVersionId;
			selectedTargetVersionId.value = targetVersionId;
		});
		watch([selectedSourceVersionId, selectedTargetVersionId], ([sourceVersionId, targetVersionId]) => {
			loadComparedVersions(sourceVersionId, targetVersionId);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [isLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.state)
			}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.loading")), 1)]),
				_: 1
			})], 2)) : sourceWorkflow.value && targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 1,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": sourceLabel.value,
				"target-label": targetLabel.value,
				"show-back-button": true,
				onBack: _cache[0] || (_cache[0] = ($event) => emit("close"))
			}, {
				sourceLabel: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sourceBadge) }, [createVNode(WorkflowHistoryVersionSelect_default, {
					"model-value": selectedSourceVersionId.value,
					options: unref(versionOptions),
					"data-test-id": "workflow-history-diff-source-version",
					"onUpdate:modelValue": onSourceVersionChange
				}, null, 8, ["model-value", "options"])], 2)]),
				targetLabel: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sourceBadge) }, [createVNode(WorkflowHistoryVersionSelect_default, {
					"model-value": selectedTargetVersionId.value,
					options: unref(versionOptions),
					"data-test-id": "workflow-history-diff-target-version",
					"onUpdate:modelValue": onTargetVersionChange
				}, null, 8, ["model-value", "options"])], 2)]),
				_: 1
			}, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkflowHistoryDiff_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_2rd14_125",
	state: "_state_2rd14_131",
	sourceBadge: "_sourceBadge_2rd14_138"
};
var WorkflowHistoryDiff_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryDiff_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryDiff_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: 0 };
var WorkflowHistory_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistory",
	setup(__props) {
		const workflowHistoryActionTypes = [
			"restore",
			"publish",
			"unpublish",
			"name",
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
		const workflowsListStore = useWorkflowsListStore();
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const workflowActivate = useWorkflowActivate();
		const isNamedVersionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.NamedVersions]);
		const isWorkflowDiffsEnabled = computed(() => settingsStore.settings.enterprise.workflowDiffs);
		const canRender = ref(true);
		const isListLoading = ref(true);
		const requestNumberOfItems = ref(20);
		const lastReceivedItemsLength = ref(0);
		const publishedWorkflow = ref(null);
		const workflowHistory = ref([]);
		const selectedWorkflowVersion = ref(null);
		const availableActionTypes = computed(() => {
			return workflowHistoryActionTypes.filter((action) => {
				if (action === "publish" && publishedWorkflow.value?.isArchived) return false;
				if (action === "name" && !isNamedVersionsEnabled.value) return false;
				return true;
			});
		});
		const workflowId = computed(() => normalizeSingleRouteParam("workflowId"));
		const versionId = computed(() => normalizeSingleRouteParam("versionId"));
		const diffWithVersionId = computed(() => {
			const value = route.query.diffWith;
			return typeof value === "string" ? value : void 0;
		});
		const editorRoute = computed(() => ({
			name: VIEWS.WORKFLOW,
			params: { name: workflowId.value }
		}));
		const workflowPermissions = computed(() => getResourcePermissions(workflowsListStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const publishedWorkflowVersionId = computed(() => {
			const publishedVersionId = getPublishedVersionId(publishedWorkflow.value);
			if (!publishedVersionId) return getPublishedVersionId(workflowsListStore.getWorkflowById(workflowId.value));
			return publishedVersionId;
		});
		const actions$2 = computed(() => availableActionTypes.value.map((value) => ({
			label: i18n.baseText(`workflowHistory.item.actions.${value}`),
			disabled: value === "clone" && !workflowPermissions.value.create || (value === "restore" || value === "name") && !workflowPermissions.value.update || (value === "publish" || value === "unpublish") && !workflowPermissions.value.publish,
			value
		})));
		const isFirstItemShown = computed(() => workflowHistory.value[0]?.versionId === versionId.value);
		const createCompareRoute = (compareVersionId) => {
			return {
				name: VIEWS.WORKFLOW_HISTORY,
				params: {
					workflowId: workflowId.value,
					versionId: versionId.value
				},
				query: {
					...route.query,
					diffWith: compareVersionId
				}
			};
		};
		const sendTelemetry = (event) => {
			telemetry.track(event, {
				instance_id: useRootStore().instanceId,
				workflow_id: workflowId.value
			});
		};
		const loadMore = async (queryParams) => {
			const history = await workflowHistoryStore.getWorkflowHistory(workflowId.value, queryParams);
			lastReceivedItemsLength.value = history.length;
			const userIds = history.flatMap((item$1) => item$1.workflowPublishHistory.map((pub) => pub.userId)).filter((id) => Boolean(id));
			const userIdsToFetch = new Set(userIds);
			await usersStore.fetchUsers({ filter: { ids: Array.from(userIdsToFetch) } });
			workflowHistory.value = workflowHistory.value.concat(history);
		};
		onBeforeMount(async () => {
			sendTelemetry("User opened workflow history");
			try {
				const [workflow] = await Promise.all([workflowsListStore.fetchWorkflow(workflowId.value), loadMore({ take: requestNumberOfItems.value })]);
				publishedWorkflow.value = workflow;
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
			const versionIdBeforeRestore = (await workflowsListStore.fetchWorkflow(workflowId.value)).versionId;
			publishedWorkflow.value = await workflowHistoryStore.restoreWorkflow(workflowId.value, id);
			if (publishedWorkflow.value.versionId === versionIdBeforeRestore) {
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
			const modalData = ref({
				versionId: id,
				versionName: data.versionName,
				description: data.description,
				modalTitle: i18n.baseText("workflows.publishModal.title"),
				submitButtonLabel: i18n.baseText("workflows.publish"),
				submitting: false,
				eventBus: publishEventBus
			});
			publishEventBus.once("submit", async (submitData) => {
				modalData.value.submitting = true;
				try {
					const { success } = await workflowActivate.publishWorkflow(workflowId.value, id, {
						name: submitData.name,
						description: submitData.description
					});
					if (success) {
						publishedWorkflow.value = workflowsListStore.getWorkflowById(workflowId.value);
						const historyItem = workflowHistory.value.find((item$1) => item$1.versionId === submitData.versionId);
						if (historyItem) {
							historyItem.name = submitData.name;
							historyItem.description = submitData.description;
							if (publishedWorkflow.value?.activeVersion?.workflowPublishHistory) historyItem.workflowPublishHistory = publishedWorkflow.value.activeVersion.workflowPublishHistory;
						}
						if (selectedWorkflowVersion.value?.versionId === submitData.versionId) selectedWorkflowVersion.value = {
							...selectedWorkflowVersion.value,
							name: submitData.name,
							description: submitData.description,
							workflowPublishHistory: publishedWorkflow.value?.activeVersion?.workflowPublishHistory ?? selectedWorkflowVersion.value.workflowPublishHistory
						};
						sendTelemetry("User published version from history");
						uiStore.closeModal(WORKFLOW_HISTORY_PUBLISH_MODAL_KEY);
					}
				} finally {
					modalData.value.submitting = false;
				}
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_PUBLISH_MODAL_KEY,
				data: modalData.value
			});
		};
		const unpublishWorkflowVersion = (id, data) => {
			if (publishedWorkflowVersionId.value !== id) return;
			const unpublishEventBus = createEventBus();
			unpublishEventBus.once("unpublish", async () => {
				const success = await workflowActivate.unpublishWorkflowFromHistory(workflowId.value);
				uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
				if (!success) return;
				publishedWorkflow.value = workflowsListStore.getWorkflowById(workflowId.value);
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
		const nameWorkflowVersion = async (id, data) => {
			const nameVersionEventBus = createEventBus();
			const modalData = ref({
				versionId: id,
				versionName: data.versionName,
				description: data.description,
				modalTitle: i18n.baseText("workflowHistory.nameVersionModal.title"),
				submitButtonLabel: i18n.baseText("workflowHistory.nameVersionModal.confirmButton"),
				submitting: false,
				eventBus: nameVersionEventBus
			});
			nameVersionEventBus.once("submit", async (submitData) => {
				modalData.value.submitting = true;
				try {
					await workflowHistoryStore.updateWorkflowHistoryVersion(workflowId.value, id, {
						name: submitData.name,
						description: submitData.description
					});
					const historyItem = workflowHistory.value.find((item$1) => item$1.versionId === submitData.versionId);
					if (historyItem) {
						historyItem.name = submitData.name;
						historyItem.description = submitData.description;
					}
					if (selectedWorkflowVersion.value?.versionId === submitData.versionId) selectedWorkflowVersion.value = {
						...selectedWorkflowVersion.value,
						name: submitData.name,
						description: submitData.description
					};
					toast.showMessage({
						title: i18n.baseText("workflowHistory.action.nameVersion.success.title"),
						type: "success"
					});
					sendTelemetry("User named version from history");
					uiStore.closeModal(WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY);
				} catch (error) {
					toast.showError(error, i18n.baseText("workflowHistory.action.nameVersion.error.title"));
				} finally {
					modalData.value.submitting = false;
				}
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY,
				data: modalData.value
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
					case WORKFLOW_HISTORY_ACTIONS.NAME:
						await nameWorkflowVersion(id, data);
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
		const openCompareView = async (compareVersionId) => {
			if (!isWorkflowDiffsEnabled.value) return;
			if (!versionId.value || versionId.value === compareVersionId) return;
			await router.push(createCompareRoute(compareVersionId));
		};
		const closeCompareView = async () => {
			if (uiStore.modalsById["workflowHistoryDiff"]?.open) uiStore.closeModal(WORKFLOW_HISTORY_DIFF_MODAL_KEY);
			const query = { ...route.query };
			delete query.diffWith;
			await router.replace({
				name: VIEWS.WORKFLOW_HISTORY,
				params: {
					workflowId: workflowId.value,
					versionId: versionId.value
				},
				query
			});
		};
		watchEffect(() => {
			const shouldOpenDiffModal = Boolean(isWorkflowDiffsEnabled.value && diffWithVersionId.value && versionId.value);
			const isDiffModalOpen = uiStore.modalsById[WORKFLOW_HISTORY_DIFF_MODAL_KEY]?.open;
			if (shouldOpenDiffModal && !isDiffModalOpen) uiStore.openModal(WORKFLOW_HISTORY_DIFF_MODAL_KEY);
			if (!shouldOpenDiffModal && isDiffModalOpen) uiStore.closeModal(WORKFLOW_HISTORY_DIFF_MODAL_KEY);
		});
		watchEffect(async () => {
			if (!versionId.value) return;
			try {
				const [workflowVersion, workflow] = await Promise.all([workflowHistoryStore.getWorkflowVersion(workflowId.value, versionId.value), workflowsListStore.fetchWorkflow(workflowId.value)]);
				selectedWorkflowVersion.value = workflowVersion;
				publishedWorkflow.value = workflow;
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
					default: withCtx(() => [createTextVNode(toDisplayString(publishedWorkflow.value?.name), 1)]),
					_: 1
				}), publishedWorkflow.value?.isArchived ? (openBlock(), createElementBlock("span", _hoisted_1, [createVNode(unref(N8nBadge_default), {
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
						variant: "ghost",
						icon: "x",
						size: "small",
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
					"published-version-id": publishedWorkflowVersionId.value,
					"is-workflow-diffs-enabled": isWorkflowDiffsEnabled.value,
					onAction,
					onPreview,
					onCompare: _cache[0] || (_cache[0] = ({ id }) => openCompareView(id)),
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
					"published-version-id",
					"is-workflow-diffs-enabled"
				])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentComponentWrapper) }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryContent_default, {
					key: 0,
					workflow: publishedWorkflow.value,
					"workflow-version": selectedWorkflowVersion.value,
					"is-published": selectedWorkflowVersion.value?.versionId === publishedWorkflowVersionId.value,
					actions: actions$2.value,
					"is-list-loading": isListLoading.value,
					"is-first-item-shown": isFirstItemShown.value,
					onAction
				}, null, 8, [
					"workflow",
					"workflow-version",
					"is-published",
					"actions",
					"is-list-loading",
					"is-first-item-shown"
				])) : createCommentVNode("", true)], 2),
				isWorkflowDiffsEnabled.value && diffWithVersionId.value && versionId.value ? (openBlock(), createBlock(Modal_default, {
					key: 0,
					name: unref(WORKFLOW_HISTORY_DIFF_MODAL_KEY),
					"custom-class": _ctx.$style.workflowHistoryDiffModal,
					height: "100%",
					width: "100%",
					"max-width": "100%",
					"max-height": "100%",
					"close-on-press-escape": false,
					"show-close": false,
					"before-close": closeCompareView
				}, {
					content: withCtx(() => [(openBlock(), createBlock(WorkflowHistoryDiff_default, {
						key: `${versionId.value}:${diffWithVersionId.value}`,
						"workflow-id": workflowId.value,
						"source-workflow-version-id": diffWithVersionId.value,
						"target-workflow-version-id": versionId.value,
						"available-versions": workflowHistory.value,
						onClose: closeCompareView
					}, null, 8, [
						"workflow-id",
						"source-workflow-version-id",
						"target-workflow-version-id",
						"available-versions"
					]))]),
					_: 1
				}, 8, ["name", "custom-class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var WorkflowHistory_vue_vue_type_style_index_0_lang_module_default = {
	view: "_view_fgk58_125",
	header: "_header_fgk58_135",
	corner: "_corner_fgk58_143",
	contentComponentWrapper: "_contentComponentWrapper_fgk58_154",
	listComponentWrapper: "_listComponentWrapper_fgk58_159",
	workflowHistoryDiffModal: "_workflowHistoryDiffModal_fgk58_165"
};
var WorkflowHistory_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistory_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistory_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowHistory_default as default };
