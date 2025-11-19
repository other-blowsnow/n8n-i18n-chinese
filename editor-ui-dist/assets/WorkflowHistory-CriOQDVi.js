import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, L as h, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, ot as resolveComponent, q as onBeforeMount, vt as watchEffect, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, Ln as N8nButton_default, Pn as N8nHeading_default, et as N8nLoading_default, it as N8nBadge_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Bo as useSettingsStore, Ho as getWorkflowVersion, Ni as useUIStore, Po as getNewWorkflow, Qs as useRootStore, Vo as getWorkflowHistory, o as useWorkflowsStore, r as telemetry, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Ko as WORKFLOW_HISTORY_VERSION_RESTORE, _r as getResourcePermissions, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import { t as require_dateformat } from "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./executions.store-a34D3haB.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { t as require_FileSaver_min } from "./FileSaver.min-DaytN8ae.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-DXvhQ6Rs.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-C8Bz3yon.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
var _hoisted_1$3 = ["datetime"];
var _hoisted_2$1 = ["value"];
var WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryListItem",
	props: {
		item: {},
		index: {},
		actions: {},
		isActive: { type: Boolean }
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
		const actionsVisible$1 = ref(false);
		const itemElement = ref(null);
		const authorElement = ref(null);
		const isAuthorElementTruncated = ref(false);
		const formattedCreatedAt = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			const [date, time] = (0, import_dateformat.default)(props.item.createdAt, `${props.item.createdAt.startsWith(currentYear) ? "" : "yyyy "}mmm d"#"HH:MM:ss`).split("#");
			return i18n.baseText("workflowHistory.item.createdAt", { interpolate: {
				date,
				time
			} });
		});
		const authors = computed(() => {
			const allAuthors = props.item.authors.split(", ");
			let label$1 = allAuthors[0];
			if (allAuthors.length > 1) label$1 = `${label$1} + ${allAuthors.length - 1}`;
			return {
				size: allAuthors.length,
				label: label$1
			};
		});
		const idLabel = computed(() => i18n.baseText("workflowHistory.item.id", { interpolate: { id: props.item.versionId } }));
		const onAction = (value) => {
			emit("action", {
				action: value,
				id: props.item.versionId,
				data: { formattedCreatedAt: formattedCreatedAt.value }
			});
		};
		const onVisibleChange = (visible) => {
			actionsVisible$1.value = visible;
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
				isActive: props.isActive
			});
			isAuthorElementTruncated.value = (authorElement.value?.scrollWidth ?? 0) > (authorElement.value?.clientWidth ?? 0);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", {
				ref_key: "itemElement",
				ref: itemElement,
				"data-test-id": "workflow-history-list-item",
				class: normalizeClass({
					[_ctx.$style.item]: true,
					[_ctx.$style.active]: props.isActive,
					[_ctx.$style.actionsVisible]: actionsVisible$1.value
				})
			}, [renderSlot(_ctx.$slots, "default", { formattedCreatedAt: formattedCreatedAt.value }, () => [createBaseVNode("p", { onClick: onItemClick }, [
				createBaseVNode("time", { datetime: _ctx.item.createdAt }, toDisplayString(formattedCreatedAt.value), 9, _hoisted_1$3),
				createVNode(unref(N8nTooltip_default), {
					placement: "right-end",
					disabled: authors.value.size < 2 && !isAuthorElementTruncated.value
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(props.item.authors), 1)]),
					default: withCtx(() => [createBaseVNode("span", {
						ref_key: "authorElement",
						ref: authorElement
					}, toDisplayString(authors.value.label), 513)]),
					_: 1
				}, 8, ["disabled"]),
				createBaseVNode("data", { value: _ctx.item.versionId }, toDisplayString(idLabel.value), 9, _hoisted_2$1)
			])]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tail) }, [props.index === 0 ? (openBlock(), createBlock(unref(N8nBadge_default), { key: 0 }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.latest")), 1)]),
				_: 1
			})) : createCommentVNode("", true), createVNode(unref(N8nActionToggle_default), {
				theme: "dark",
				class: normalizeClass(_ctx.$style.actions),
				actions: props.actions,
				placement: "bottom-end",
				onAction,
				onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
				onVisibleChange
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "action-toggle-button")]),
				_: 3
			}, 8, ["class", "actions"])], 2)], 2);
		};
	}
});
var WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_myt2r_123",
	tail: "_tail_myt2r_155",
	active: "_active_myt2r_160",
	actionsVisible: "_actionsVisible_myt2r_167",
	actions: "_actions_myt2r_167"
};
var WorkflowHistoryListItem_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = ["aria-label"];
var WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryList",
	props: {
		items: {},
		activeItem: {},
		actions: {},
		requestNumberOfItems: {},
		lastReceivedItemsLength: {},
		evaluatedPruneTime: {},
		shouldUpgrade: { type: Boolean },
		isListLoading: { type: Boolean }
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
		const shouldAutoScroll = ref(true);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listElement,
			threshold: .01,
			onIntersect: () => emit("loadMore", {
				take: props.requestNumberOfItems,
				skip: props.items.length
			})
		});
		const getActions = (index) => index === 0 ? props.actions.filter((action) => action.value !== "restore") : props.actions;
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
		const onItemMounted = ({ index, offsetTop, isActive }) => {
			if (isActive && shouldAutoScroll.value) {
				shouldAutoScroll.value = false;
				listElement.value?.scrollTo({
					top: offsetTop,
					behavior: "smooth"
				});
			}
			if (index === props.items.length - 1 && props.lastReceivedItemsLength === props.requestNumberOfItems) observeForLoadMore(listElement.value?.children[index]);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("ul", {
				ref_key: "listElement",
				ref: listElement,
				class: normalizeClass(_ctx.$style.list),
				"data-test-id": "workflow-history-list"
			}, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item$1, index) => {
					return openBlock(), createBlock(WorkflowHistoryListItem_default, {
						key: item$1.versionId,
						index,
						item: item$1,
						"is-active": item$1.versionId === props.activeItem?.versionId,
						actions: getActions(index),
						onAction,
						onPreview,
						onMounted: onItemMounted
					}, null, 8, [
						"index",
						"item",
						"is-active",
						"actions"
					]);
				}), 128)),
				!props.items.length && !props.isListLoading ? (openBlock(), createElementBlock("li", {
					key: 0,
					class: normalizeClass(_ctx.$style.empty)
				}, [
					createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.empty")) + " ", 1),
					_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
					createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowHistory.hint")), 1)
				], 2)) : createCommentVNode("", true),
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
				], 10, _hoisted_1$2)) : createCommentVNode("", true),
				props.shouldUpgrade ? (openBlock(), createElementBlock("li", {
					key: 2,
					class: normalizeClass(_ctx.$style.retention)
				}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workflowHistory.limit", { interpolate: { evaluatedPruneTime: String(props.evaluatedPruneTime) } })), 1), createVNode(unref(I18nT), {
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
	list: "_list_1i94b_123",
	empty: "_empty_1i94b_132",
	loader: "_loader_1i94b_145",
	retention: "_retention_1i94b_149"
};
var WorkflowHistoryList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["datetime"];
var _hoisted_2 = ["value"];
var WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistoryContent",
	props: {
		workflow: {},
		workflowVersion: {},
		actions: {},
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
			const { pinData,...workflow } = props.workflow;
			return {
				...workflow,
				nodes: props.workflowVersion.nodes,
				connections: props.workflowVersion.connections
			};
		});
		const actions$1 = computed(() => props.isFirstItemShown ? props.actions.filter((action) => action.value !== "restore") : props.actions);
		const onAction = ({ action, id, data }) => {
			emit("action", {
				action,
				id,
				data
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowPreview_default, {
				key: 0,
				workflow: workflowVersionPreview.value,
				loading: props.isListLoading,
				"loader-type": "spinner"
			}, null, 8, ["workflow", "loading"])) : createCommentVNode("", true), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.info) }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowHistoryListItem_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.card),
				index: -1,
				item: props.workflowVersion,
				"is-active": false,
				actions: actions$1.value,
				onAction
			}, {
				default: withCtx(({ formattedCreatedAt }) => [createBaseVNode("section", { class: normalizeClass(_ctx.$style.text) }, [
					createBaseVNode("p", null, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("workflowHistory.content.title")) + ": ", 3), createBaseVNode("time", { datetime: props.workflowVersion.createdAt }, toDisplayString(formattedCreatedAt), 9, _hoisted_1$1)]),
					createBaseVNode("p", null, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("workflowHistory.content.editedBy")) + ": ", 3), createBaseVNode("span", null, toDisplayString(props.workflowVersion.authors), 1)]),
					createBaseVNode("p", null, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("workflowHistory.content.versionId")) + ": ", 3), createBaseVNode("data", { value: props.workflowVersion.versionId }, toDisplayString(props.workflowVersion.versionId), 9, _hoisted_2)])
				], 2)]),
				"action-toggle-button": withCtx(() => [createVNode(unref(N8nButton_default), {
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
			}, 8, [
				"class",
				"item",
				"actions"
			])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1hiff_123",
	info: "_info_1hiff_133",
	card: "_card_1hiff_141",
	text: "_text_1hiff_146",
	label: "_label_1hiff_171"
};
var WorkflowHistoryContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default }]]);
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min());
const useWorkflowHistoryStore = defineStore("workflowHistory", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const workflowsStore = useWorkflowsStore();
	const licensePruneTime = computed(() => settingsStore.settings.workflowHistory.licensePruneTime);
	const pruneTime = computed(() => settingsStore.settings.workflowHistory.pruneTime);
	const evaluatedPruneTime = computed(() => Math.min(pruneTime.value, licensePruneTime.value));
	const shouldUpgrade = computed(() => licensePruneTime.value !== -1 && licensePruneTime.value === pruneTime.value);
	const getWorkflowHistory$1 = async (workflowId, queryParams) => await getWorkflowHistory(rootStore.restApiContext, workflowId, queryParams);
	const getWorkflowVersion$1 = async (workflowId, versionId) => await getWorkflowVersion(rootStore.restApiContext, workflowId, versionId);
	const downloadVersion = async (workflowId, workflowVersionId, data) => {
		const [workflow, workflowVersion] = await Promise.all([workflowsStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
		const { connections, nodes } = workflowVersion;
		(0, import_FileSaver_min.saveAs)(new Blob([JSON.stringify({
			...workflow,
			nodes,
			connections
		}, null, 2)], { type: "application/json;charset=utf-8" }), `${workflow.name}(${data.formattedCreatedAt}).json`);
	};
	const cloneIntoNewWorkflow = async (workflowId, workflowVersionId, data) => {
		const [workflow, workflowVersion] = await Promise.all([workflowsStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
		const { connections, nodes } = workflowVersion;
		const { name } = workflow;
		const newWorkflowData = {
			nodes,
			connections,
			name: (await getNewWorkflow(rootStore.restApiContext, { name: `${name} (${data.formattedCreatedAt})` })).name
		};
		return await workflowsStore.createNewWorkflow(newWorkflowData);
	};
	const restoreWorkflow = async (workflowId, workflowVersionId, shouldDeactivate) => {
		const { connections, nodes } = await getWorkflowVersion$1(workflowId, workflowVersionId);
		const updateData = {
			connections,
			nodes
		};
		if (shouldDeactivate) updateData.active = false;
		return await workflowsStore.updateWorkflow(workflowId, updateData, true).catch(async (error) => {
			if (error.httpStatusCode === 400 && typeof error.message === "string" && error.message.includes("can not be activated")) return await workflowsStore.fetchWorkflow(workflowId);
			else throw new Error(error);
		});
	};
	return {
		getWorkflowHistory: getWorkflowHistory$1,
		getWorkflowVersion: getWorkflowVersion$1,
		downloadVersion,
		cloneIntoNewWorkflow,
		restoreWorkflow,
		evaluatedPruneTime,
		shouldUpgrade
	};
});
var _hoisted_1 = { key: 0 };
var WorkflowHistoryVersionRestoreModalActions = /* @__PURE__ */ function(WorkflowHistoryVersionRestoreModalActions$1) {
	WorkflowHistoryVersionRestoreModalActions$1["restore"] = "restore";
	WorkflowHistoryVersionRestoreModalActions$1["deactivateAndRestore"] = "deactivateAndRestore";
	WorkflowHistoryVersionRestoreModalActions$1["cancel"] = "cancel";
	return WorkflowHistoryVersionRestoreModalActions$1;
}(WorkflowHistoryVersionRestoreModalActions || {});
var WorkflowHistory_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHistory",
	setup(__props) {
		const workflowHistoryActionTypes = [
			"restore",
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
		const canRender = ref(true);
		const isListLoading = ref(true);
		const requestNumberOfItems = ref(20);
		const lastReceivedItemsLength = ref(0);
		const activeWorkflow = ref(null);
		const workflowHistory = ref([]);
		const activeWorkflowVersion = ref(null);
		const workflowId = computed(() => normalizeSingleRouteParam("workflowId"));
		const versionId = computed(() => normalizeSingleRouteParam("versionId"));
		const editorRoute = computed(() => ({
			name: VIEWS.WORKFLOW,
			params: { name: workflowId.value }
		}));
		const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const actions$1 = computed(() => workflowHistoryActionTypes.map((value) => ({
			label: i18n.baseText(`workflowHistory.item.actions.${value}`),
			disabled: value === "clone" && !workflowPermissions.value.create || value === "restore" && !workflowPermissions.value.update,
			value
		})));
		const isFirstItemShown = computed(() => workflowHistory.value[0]?.versionId === versionId.value);
		const evaluatedPruneTime = computed(() => Math.floor(workflowHistoryStore.evaluatedPruneTime / 24));
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
		const openRestorationModal = async (isWorkflowActivated, formattedCreatedAt) => {
			return await new Promise((resolve, reject) => {
				const buttons = [{
					text: i18n.baseText("workflowHistory.action.restore.modal.button.cancel"),
					type: "tertiary",
					action: () => {
						resolve(WorkflowHistoryVersionRestoreModalActions.cancel);
					}
				}];
				if (isWorkflowActivated) buttons.push({
					text: i18n.baseText("workflowHistory.action.restore.modal.button.deactivateAndRestore"),
					type: "tertiary",
					action: () => {
						resolve(WorkflowHistoryVersionRestoreModalActions.deactivateAndRestore);
					}
				});
				buttons.push({
					text: i18n.baseText("workflowHistory.action.restore.modal.button.restore"),
					type: "primary",
					action: () => {
						resolve(WorkflowHistoryVersionRestoreModalActions.restore);
					}
				});
				try {
					uiStore.openModalWithData({
						name: WORKFLOW_HISTORY_VERSION_RESTORE,
						data: {
							beforeClose: () => {
								resolve(WorkflowHistoryVersionRestoreModalActions.cancel);
							},
							isWorkflowActivated,
							formattedCreatedAt,
							buttons
						}
					});
				} catch (error) {
					reject(error);
				}
			});
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
		const restoreWorkflowVersion = async (id, data) => {
			const modalAction = await openRestorationModal((await workflowsStore.fetchWorkflow(workflowId.value)).active, data.formattedCreatedAt);
			if (modalAction === WorkflowHistoryVersionRestoreModalActions.cancel) return;
			activeWorkflow.value = await workflowHistoryStore.restoreWorkflow(workflowId.value, id, modalAction === WorkflowHistoryVersionRestoreModalActions.deactivateAndRestore);
			workflowHistory.value = (await workflowHistoryStore.getWorkflowHistory(workflowId.value, { take: 1 })).concat(workflowHistory.value);
			toast.showMessage({
				title: i18n.baseText("workflowHistory.action.restore.success.title"),
				type: "success"
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
						await restoreWorkflowVersion(id, data);
						sendTelemetry("User restored version");
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
				activeWorkflowVersion.value = workflowVersion;
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
					"active-item": activeWorkflowVersion.value,
					actions: actions$1.value,
					"request-number-of-items": requestNumberOfItems.value,
					"should-upgrade": unref(workflowHistoryStore).shouldUpgrade,
					"evaluated-prune-time": evaluatedPruneTime.value,
					"is-list-loading": isListLoading.value,
					onAction,
					onPreview,
					onLoadMore: loadMore,
					onUpgrade
				}, null, 8, [
					"items",
					"last-received-items-length",
					"active-item",
					"actions",
					"request-number-of-items",
					"should-upgrade",
					"evaluated-prune-time",
					"is-list-loading"
				])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentComponentWrapper) }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryContent_default, {
					key: 0,
					workflow: activeWorkflow.value,
					"workflow-version": activeWorkflowVersion.value,
					actions: actions$1.value,
					"is-list-loading": isListLoading.value,
					"is-first-item-shown": isFirstItemShown.value,
					onAction
				}, null, 8, [
					"workflow",
					"workflow-version",
					"actions",
					"is-list-loading",
					"is-first-item-shown"
				])) : createCommentVNode("", true)], 2)
			], 2);
		};
	}
});
var WorkflowHistory_vue_vue_type_style_index_0_lang_module_default = {
	view: "_view_ley84_123",
	header: "_header_ley84_133",
	corner: "_corner_ley84_141",
	contentComponentWrapper: "_contentComponentWrapper_ley84_152",
	listComponentWrapper: "_listComponentWrapper_ley84_157"
};
var WorkflowHistory_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowHistory_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHistory_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowHistory_default as default };
