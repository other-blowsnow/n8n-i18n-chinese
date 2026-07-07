import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BqnE5xyQ.js";
import { Ga as N8nHeading_default, Ja as N8nButton_default, Ki as N8nActionBox_default, Ut as N8nLoading_default, Z as ActionPill_default, _t as useRouter, b as N8nDataTableServer_default, qa as N8nText_default, zi as N8nTooltip_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { ui as VIEWS } from "./constants-BpExsFUJ.js";
import { Z as useAiGatewayStore } from "./workflowDocument.store-MeCEzXgr.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-D_2YlqZ_.js";
import { t as useDocumentTitle } from "./useDocumentTitle-Cd6twt1Y.js";
//#region src/features/ai/gateway/views/SettingsAiGatewayView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 1 };
var PAGE_SIZE = 50;
var SettingsAiGatewayView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsAiGatewayView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const telemetry = useTelemetry();
		const aiGatewayStore = useAiGatewayStore();
		const uiStore = useUIStore();
		const isLoading = ref(false);
		const isAppending = ref(false);
		const offset = ref(0);
		const walletBalance = computed(() => aiGatewayStore.balance);
		const walletBadgeText = computed(() => walletBalance.value !== void 0 ? i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(walletBalance.value).toFixed(2)}` } }) : void 0);
		const entries = computed(() => aiGatewayStore.usageEntries);
		const total = computed(() => aiGatewayStore.usageTotal);
		const hasMore = computed(() => offset.value + PAGE_SIZE < total.value);
		const showUsageSectionSkeleton = computed(() => isLoading.value && !isAppending.value);
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.n8nConnect.usage.col.date"),
				key: "timestamp",
				width: 200,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.n8nConnect.usage.col.provider"),
				key: "provider",
				width: 120,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.n8nConnect.usage.col.resource"),
				key: "model",
				width: 220,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.n8nConnect.usage.col.inputTokens"),
				key: "inputTokens",
				width: 120,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.n8nConnect.usage.col.outputTokens"),
				key: "outputTokens",
				width: 120,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.n8nConnect.usage.col.cost"),
				key: "cost",
				width: 100,
				disableSort: true,
				resize: false
			}
		]);
		function formatDate(timestamp) {
			return new Intl.DateTimeFormat(void 0, {
				day: "2-digit",
				month: "short",
				year: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			}).format(new Date(timestamp));
		}
		function formatTokens(value) {
			return value !== void 0 ? String(value) : "—";
		}
		function rowId(row, index) {
			return `${row.timestamp}-${row.model}-${row.provider}-${index}`;
		}
		function rowExecutionId(row) {
			return row.metadata?.executionId;
		}
		function rowWorkflowId(row) {
			return row.metadata?.workflowId;
		}
		function isRowClickable(row) {
			return Boolean(rowExecutionId(row) && rowWorkflowId(row));
		}
		function onRowClick(row) {
			const executionId = rowExecutionId(row);
			const workflowId = rowWorkflowId(row);
			if (executionId && workflowId) router.push({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId,
					executionId
				}
			});
		}
		async function load() {
			isAppending.value = false;
			offset.value = 0;
			isLoading.value = true;
			try {
				await aiGatewayStore.fetchUsage(0, PAGE_SIZE);
			} finally {
				isLoading.value = false;
			}
		}
		async function refresh() {
			await Promise.all([aiGatewayStore.fetchWallet(), load()]);
		}
		async function loadMore() {
			if (isLoading.value) return;
			isAppending.value = true;
			offset.value += PAGE_SIZE;
			isLoading.value = true;
			try {
				await aiGatewayStore.fetchMoreUsage(offset.value, PAGE_SIZE);
			} finally {
				isLoading.value = false;
				isAppending.value = false;
			}
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.n8nConnect.title"));
			await refresh();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "settings-ai-gateway"
			}, [createBaseVNode("header", {
				class: normalizeClass(_ctx.$style.mainHeader),
				"data-test-id": "ai-gateway-settings-header"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headings) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingRow) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nConnect.title")), 1)]),
				_: 1
			}), walletBadgeText.value ? (openBlock(), createBlock(unref(ActionPill_default), {
				key: 0,
				size: "medium",
				text: walletBadgeText.value,
				"data-test-id": "ai-gateway-header-credits-badge"
			}, null, 8, ["text"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nConnect.description")), 1)]),
				_: 1
			})], 2), createVNode(unref(N8nButton_default), {
				label: unref(i18n).baseText("settings.n8nConnect.wallet.topUp"),
				icon: "hand-coins",
				variant: "solid",
				"data-test-id": "ai-gateway-topup-button",
				onClick: _cache[0] || (_cache[0] = ($event) => {
					unref(telemetry).track("User clicked ai gateway top up", { source: "settings_page" });
					unref(uiStore).openModalWithData({
						name: unref("aiGatewayTopUp"),
						data: {}
					});
				})
			}, null, 8, ["label"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.usageTableContainer) }, [showUsageSectionSkeleton.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
				loading: true,
				variant: "h1",
				class: normalizeClass(_ctx.$style.usageTableHeader)
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				loading: true,
				variant: "p",
				rows: 5,
				"shrink-last": false
			})])) : (openBlock(), createElementBlock("div", _hoisted_2, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.usageTableHeader) }, [createVNode(unref(N8nHeading_default), {
					size: "medium",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nConnect.usage.title")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.usageTableActions) }, [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.n8nConnect.usage.refresh.tooltip") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"icon-only": "",
						size: "small",
						icon: "refresh-cw",
						"aria-label": unref(i18n).baseText("generic.refresh"),
						loading: isLoading.value && !isAppending.value,
						onClick: refresh
					}, null, 8, ["aria-label", "loading"])]),
					_: 1
				}, 8, ["content"])], 2)], 2),
				entries.value.length === 0 ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 0,
					heading: unref(i18n).baseText("settings.n8nConnect.usage.empty")
				}, null, 8, ["heading"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.gatewayUsageTable),
					headers: tableHeaders.value,
					items: entries.value,
					"items-length": entries.value.length,
					loading: isLoading.value && isAppending.value,
					"item-value": rowId,
					"row-props": (row) => isRowClickable(row) ? { class: _ctx.$style.clickableRow } : {},
					"onClick:row": _cache[1] || (_cache[1] = (_, { item }) => onRowClick(item))
				}, {
					[`item.timestamp`]: withCtx(({ item }) => [isRowClickable(item) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("settings.n8nConnect.usage.openExecution")
					}, {
						default: withCtx(() => [createBaseVNode("span", null, toDisplayString(formatDate(item.timestamp)), 1)]),
						_: 2
					}, 1032, ["content"])) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(formatDate(item.timestamp)), 1))]),
					[`item.provider`]: withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.providerBadge) }, toDisplayString(item.provider), 3)]),
					[`item.model`]: withCtx(({ item }) => [createTextVNode(toDisplayString(item.model), 1)]),
					[`item.inputTokens`]: withCtx(({ item }) => [createTextVNode(toDisplayString(formatTokens(item.inputTokens)), 1)]),
					[`item.outputTokens`]: withCtx(({ item }) => [createTextVNode(toDisplayString(formatTokens(item.outputTokens)), 1)]),
					[`item.cost`]: withCtx(({ item }) => [createTextVNode(toDisplayString(`$${Number(item.cost).toFixed(4)}`), 1)]),
					_: 2
				}, 1032, [
					"class",
					"headers",
					"items",
					"items-length",
					"loading",
					"row-props"
				])),
				hasMore.value && entries.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.loadMore)
				}, [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("settings.n8nConnect.usage.loadMore"),
					type: "secondary",
					loading: isLoading.value && isAppending.value,
					onClick: loadMore
				}, null, 8, ["label", "loading"])], 2)) : createCommentVNode("", true)
			]))], 2)], 2);
		};
	}
});
var SettingsAiGatewayView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1mdyp_125",
	mainHeader: "_mainHeader_1mdyp_132",
	headings: "_headings_1mdyp_145",
	headingRow: "_headingRow_1mdyp_152",
	usageTableContainer: "_usageTableContainer_1mdyp_160",
	usageTableHeader: "_usageTableHeader_1mdyp_164",
	usageTableActions: "_usageTableActions_1mdyp_171",
	gatewayUsageTable: "_gatewayUsageTable_1mdyp_177",
	clickableRow: "_clickableRow_1mdyp_181",
	providerBadge: "_providerBadge_1mdyp_188",
	loadMore: "_loadMore_1mdyp_198"
};
var SettingsAiGatewayView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsAiGatewayView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsAiGatewayView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsAiGatewayView_default as default };
