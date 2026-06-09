import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Rt as shallowRef, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Ct as N8nSelect_default, Da as N8nText_default, Oa as N8nButton_default, Ta as N8nHeading_default, Tt as N8nOption_default, Wi as N8nIconButton_default, _ as DateRangePicker_default, b as N8nDataTableServer_default, ct as N8nLink_default, ka as N8nIcon_default, u as AlertDialog_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { i as $fae977aafc393c5c$export$6b862160d295c8e } from "./CalendarDate-DaCb8yxn.js";
import { t as useToast } from "./useToast-fCpp7iAn.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import "./settings.store-B-RgkKfn.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DHNMIZmg.js";
//#region src/features/settings/encryption-keys/encryption-keys.api.ts
var ENDPOINT = "/encryption/keys";
var getEncryptionKeys = async (context, params = {}) => await makeRestApiRequest(context, "GET", ENDPOINT, { ...params });
var rotateEncryptionKey = async (context) => {
	return await makeRestApiRequest(context, "POST", ENDPOINT, { type: "data_encryption" });
};
//#endregion
//#region src/features/settings/encryption-keys/encryption-keys.types.ts
var toApiSort = (sort) => `${sort.field}:${sort.direction}`;
//#endregion
//#region src/features/settings/encryption-keys/encryption-keys.store.ts
var DEFAULT_SORT = {
	field: "createdAt",
	direction: "desc"
};
var DEFAULT_FILTERS = {
	activatedFrom: null,
	activatedTo: null
};
var DEFAULT_PAGE = 0;
var DEFAULT_ITEMS_PER_PAGE = 25;
var useEncryptionKeysStore = defineStore("encryptionKeys", () => {
	const rootStore = useRootStore();
	const items = ref([]);
	const totalCount = ref(0);
	const isLoading = ref(false);
	const isRotating = ref(false);
	const page = ref(DEFAULT_PAGE);
	const itemsPerPage = ref(DEFAULT_ITEMS_PER_PAGE);
	const sort = ref({ ...DEFAULT_SORT });
	const filters = ref({ ...DEFAULT_FILTERS });
	const hasActiveFilters = computed(() => filters.value.activatedFrom !== null || filters.value.activatedTo !== null);
	const activeKey = computed(() => items.value.find((key) => key.status === "active") ?? null);
	const isEmpty = computed(() => !isLoading.value && totalCount.value === 0 && !hasActiveFilters.value);
	const fetchKeys = async () => {
		isLoading.value = true;
		try {
			const response = await getEncryptionKeys(rootStore.restApiContext, {
				type: "data_encryption",
				skip: page.value * itemsPerPage.value,
				take: itemsPerPage.value,
				sortBy: toApiSort(sort.value),
				activatedFrom: filters.value.activatedFrom ?? void 0,
				activatedTo: filters.value.activatedTo ?? void 0
			});
			items.value = response.items;
			totalCount.value = response.count;
		} finally {
			isLoading.value = false;
		}
	};
	const rotateKey = async () => {
		isRotating.value = true;
		try {
			await rotateEncryptionKey(rootStore.restApiContext);
			page.value = DEFAULT_PAGE;
			sort.value = { ...DEFAULT_SORT };
			await fetchKeys();
		} finally {
			isRotating.value = false;
		}
	};
	const setPage = (next) => {
		page.value = next;
	};
	const setItemsPerPage = (next) => {
		itemsPerPage.value = next;
		page.value = DEFAULT_PAGE;
	};
	const setSort = (next) => {
		sort.value = { ...next };
		page.value = DEFAULT_PAGE;
	};
	const setFilters = (next) => {
		filters.value = {
			...filters.value,
			...next
		};
		page.value = DEFAULT_PAGE;
	};
	const resetFilters = () => {
		filters.value = { ...DEFAULT_FILTERS };
		page.value = DEFAULT_PAGE;
	};
	return {
		items,
		totalCount,
		activeKey,
		isLoading,
		isRotating,
		isEmpty,
		page,
		itemsPerPage,
		sort,
		filters,
		fetchKeys,
		rotateKey,
		setPage,
		setItemsPerPage,
		setSort,
		setFilters,
		resetFilters
	};
});
//#endregion
//#region src/features/settings/encryption-keys/views/SettingsEncryptionKeys.vue?vue&type=script&setup=true&lang.ts
var DOCS_URL = "https://docs.n8n.io/hosting/configuration/encryption-keys/";
var SettingsEncryptionKeys_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsEncryptionKeys",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showMessage, showError } = useToast();
		const store = useEncryptionKeysStore();
		const SORT_FIELDS = [
			"createdAt",
			"updatedAt",
			"status"
		];
		const browserLocale = typeof navigator !== "undefined" && navigator.language ? navigator.language : "en-GB";
		const isConfirmRotateOpen = ref(false);
		const sortOptions = computed(() => [
			{
				value: "createdAt",
				label: i18n.baseText("settings.encryptionKeys.sortBy.activated")
			},
			{
				value: "updatedAt",
				label: i18n.baseText("settings.encryptionKeys.sortBy.archived")
			},
			{
				value: "status",
				label: i18n.baseText("settings.encryptionKeys.sortBy.status")
			}
		]);
		const dateFormatter = new Intl.DateTimeFormat("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric"
		});
		const formatDate = (value) => {
			if (!value) return "—";
			const parsed = new Date(value);
			if (Number.isNaN(parsed.getTime())) return "—";
			return dateFormatter.format(parsed);
		};
		const maskId = (id) => {
			if (id.length <= 8) return id;
			return `${id.slice(0, 4)}••••••••${id.slice(-4)}`;
		};
		const headers = computed(() => [
			{
				title: i18n.baseText("settings.encryptionKeys.column.key"),
				key: "id",
				value: (row) => row.id,
				minWidth: 220
			},
			{
				title: i18n.baseText("settings.encryptionKeys.column.status"),
				key: "status",
				value: (row) => row.status,
				minWidth: 120
			},
			{
				title: i18n.baseText("settings.encryptionKeys.column.activated"),
				key: "createdAt",
				value: (row) => row.createdAt,
				minWidth: 140
			},
			{
				title: i18n.baseText("settings.encryptionKeys.column.archived"),
				key: "updatedAt",
				value: (row) => row.status === "inactive" ? row.updatedAt : "",
				minWidth: 140
			}
		]);
		const archiveDate = (key) => key.status === "inactive" ? key.updatedAt : null;
		const tableOptions = ref({
			page: 0,
			itemsPerPage: 25,
			sortBy: [{
				id: "createdAt",
				desc: true
			}]
		});
		const isSortField = (id) => SORT_FIELDS.includes(id);
		const sortByModel = computed({
			get: () => store.sort.field,
			set: (field) => {
				store.setSort({
					field,
					direction: store.sort.direction
				});
				tableOptions.value = {
					...tableOptions.value,
					page: 0,
					sortBy: [{
						id: field,
						desc: store.sort.direction === "desc"
					}]
				};
				refetch();
			}
		});
		const isFilterOpen = ref(false);
		const stringToDateValue = (value) => {
			if (!value) return void 0;
			try {
				return $fae977aafc393c5c$export$6b862160d295c8e(value.slice(0, 10));
			} catch {
				return;
			}
		};
		const dateValueToString = (value) => value ? value.toString() : null;
		/**
		* Convert a local-calendar day (`YYYY-MM-DD`) into the start-of-day instant
		* in the user's local timezone, expressed as ISO. Without `Z`, `new Date(...)`
		* parses a local-time wall clock — which is what we want here.
		*/
		const localDayToIsoStart = (day) => (/* @__PURE__ */ new Date(`${day}T00:00:00`)).toISOString();
		/**
		* Convert a local-calendar day to the end-of-day instant (23:59:59.999) in the
		* user's local timezone, expressed as ISO. Used as the inclusive upper bound
		* so a single-day filter `from=to=2026-04-21` includes all keys created during
		* the user's local 2026-04-21.
		*/
		const localDayToIsoEnd = (day) => {
			const d = /* @__PURE__ */ new Date(`${day}T00:00:00`);
			d.setDate(d.getDate() + 1);
			d.setMilliseconds(d.getMilliseconds() - 1);
			return d.toISOString();
		};
		const draftRange = shallowRef({
			start: stringToDateValue(store.filters.activatedFrom),
			end: stringToDateValue(store.filters.activatedTo)
		});
		const seedDraftFromStore = () => {
			draftRange.value = {
				start: stringToDateValue(store.filters.activatedFrom),
				end: stringToDateValue(store.filters.activatedTo)
			};
		};
		watch(isFilterOpen, (open) => {
			if (open) seedDraftFromStore();
		});
		const hasActiveFilter = computed(() => store.filters.activatedFrom !== null || store.filters.activatedTo !== null);
		const refetch = async () => {
			try {
				await store.fetchKeys();
			} catch (error) {
				showError(error, i18n.baseText("settings.encryptionKeys.loadError"));
			}
		};
		const onUpdateOptions = async (next) => {
			tableOptions.value = next;
			if (store.itemsPerPage !== next.itemsPerPage) store.setItemsPerPage(next.itemsPerPage);
			if (next.sortBy.length > 0) {
				const first = next.sortBy[0];
				const field = isSortField(first.id) ? first.id : "createdAt";
				const direction = first.desc ? "desc" : "asc";
				if (store.sort.field !== field || store.sort.direction !== direction) store.setSort({
					field,
					direction
				});
			}
			store.setPage(next.page);
			await refetch();
		};
		const onApplyFilter = async () => {
			const startDay = dateValueToString(draftRange.value.start);
			const endDay = dateValueToString(draftRange.value.end);
			store.setFilters({
				activatedFrom: startDay ? localDayToIsoStart(startDay) : null,
				activatedTo: endDay ? localDayToIsoEnd(endDay) : null
			});
			tableOptions.value = {
				...tableOptions.value,
				page: 0
			};
			isFilterOpen.value = false;
			await refetch();
		};
		const onClearFilter = async () => {
			store.resetFilters();
			tableOptions.value = {
				...tableOptions.value,
				page: 0
			};
			seedDraftFromStore();
			isFilterOpen.value = false;
			await refetch();
		};
		const openRotateConfirm = () => {
			isConfirmRotateOpen.value = true;
		};
		const closeRotateConfirm = () => {
			if (!store.isRotating) isConfirmRotateOpen.value = false;
		};
		const onConfirmRotate = async () => {
			try {
				await store.rotateKey();
				tableOptions.value = {
					...tableOptions.value,
					page: 0,
					sortBy: [{
						id: "createdAt",
						desc: true
					}]
				};
				isConfirmRotateOpen.value = false;
				showMessage({
					type: "success",
					title: i18n.baseText("settings.encryptionKeys.rotate.success")
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.encryptionKeys.rotate.error"));
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.encryptionKeys.title"));
			await refetch();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.page),
				"data-testid": "settings-encryption-keys"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.encryptionKeys.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.encryptionKeys.description")) + " ", 1), createVNode(unref(N8nLink_default), {
						theme: "text",
						href: DOCS_URL,
						"new-window": "",
						underline: ""
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.docsLinkLabel) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.encryptionKeys.description.docsLink")) + " ", 1), createVNode(unref(N8nIcon_default), {
							icon: "arrow-up-right",
							size: "small"
						})], 2)]),
						_: 1
					})]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.sortControl) }, [createVNode(unref(N8nText_default), {
						tag: "label",
						color: "text-light",
						class: normalizeClass(_ctx.$style.sortLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.encryptionKeys.sortBy.label")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
						modelValue: sortByModel.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sortByModel.value = $event),
						"data-testid": "encryption-keys-sort-select",
						size: "medium",
						class: normalizeClass(_ctx.$style.sortSelect)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortOptions.value, (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.value,
								value: option.value,
								label: option.label
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "class"])], 2),
					createVNode(unref(DateRangePicker_default), {
						modelValue: draftRange.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => draftRange.value = $event),
						open: isFilterOpen.value,
						"onUpdate:open": _cache[2] || (_cache[2] = ($event) => isFilterOpen.value = $event),
						locale: unref(browserLocale)
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "funnel",
							variant: "outline",
							size: "xlarge",
							"data-testid": "encryption-keys-filter-button",
							title: unref(i18n).baseText("settings.encryptionKeys.filter.title")
						}, null, 8, ["title"])]),
						footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.filterFooter) }, [hasActiveFilter.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							size: "small",
							label: unref(i18n).baseText("settings.encryptionKeys.filter.clear"),
							"data-testid": "encryption-keys-filter-clear",
							onClick: onClearFilter
						}, null, 8, ["label"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
							variant: "solid",
							size: "small",
							label: unref(i18n).baseText("settings.encryptionKeys.filter.apply"),
							"data-testid": "encryption-keys-filter-apply",
							onClick: onApplyFilter
						}, null, 8, ["label"])], 2)]),
						_: 1
					}, 8, [
						"modelValue",
						"open",
						"locale"
					]),
					createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "xlarge",
						loading: unref(store).isRotating,
						"data-testid": "encryption-keys-rotate-button",
						onClick: openRotateConfirm
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "refresh-cw",
							class: normalizeClass([_ctx.$style.rotateIcon, { [_ctx.$style.isRotating]: unref(store).isRotating }])
						}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.encryptionKeys.rotate.button")), 1)]),
						_: 1
					}, 8, ["loading"])
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableWrapper) }, [createVNode(unref(N8nDataTableServer_default), {
					"sort-by": tableOptions.value.sortBy,
					"onUpdate:sortBy": _cache[3] || (_cache[3] = ($event) => tableOptions.value.sortBy = $event),
					page: tableOptions.value.page,
					"onUpdate:page": _cache[4] || (_cache[4] = ($event) => tableOptions.value.page = $event),
					"items-per-page": tableOptions.value.itemsPerPage,
					"onUpdate:itemsPerPage": _cache[5] || (_cache[5] = ($event) => tableOptions.value.itemsPerPage = $event),
					headers: headers.value,
					items: unref(store).items,
					"items-length": unref(store).totalCount,
					loading: unref(store).isLoading,
					"page-sizes": [
						10,
						25,
						50
					],
					"data-testid": "encryption-keys-table",
					"onUpdate:options": onUpdateOptions
				}, {
					[`item.id`]: withCtx(({ item }) => [createBaseVNode("code", { class: normalizeClass(_ctx.$style.keyValue) }, toDisplayString(maskId(item.id)), 3)]),
					[`item.status`]: withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.statusCell) }, [item.status === "active" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "status-completed",
						color: "success",
						size: "large"
					})) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.statusDot),
						"aria-hidden": "true"
					}, null, 2)), createTextVNode(" " + toDisplayString(unref(i18n).baseText(item.status === "active" ? "settings.encryptionKeys.status.active" : "settings.encryptionKeys.status.inactive")), 1)], 2)]),
					[`item.createdAt`]: withCtx(({ item }) => [createTextVNode(toDisplayString(formatDate(item.createdAt)), 1)]),
					[`item.updatedAt`]: withCtx(({ item }) => [createTextVNode(toDisplayString(formatDate(archiveDate(item))), 1)]),
					_: 2
				}, 1032, [
					"sort-by",
					"page",
					"items-per-page",
					"headers",
					"items",
					"items-length",
					"loading"
				]), unref(store).isEmpty ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.emptyState),
					"data-testid": "encryption-keys-empty"
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.encryptionKeys.empty.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.encryptionKeys.empty.description")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2),
				createVNode(unref(AlertDialog_default), {
					open: isConfirmRotateOpen.value,
					title: unref(i18n).baseText("settings.encryptionKeys.rotate.confirm.title"),
					description: unref(i18n).baseText("settings.encryptionKeys.rotate.confirm.body"),
					"action-label": unref(i18n).baseText("settings.encryptionKeys.rotate.confirm.action"),
					"cancel-label": unref(i18n).baseText("settings.encryptionKeys.rotate.confirm.cancel"),
					"action-variant": "destructive",
					loading: unref(store).isRotating,
					"data-testid": "encryption-keys-rotate-confirm",
					onAction: onConfirmRotate,
					onCancel: closeRotateConfirm,
					"onUpdate:open": _cache[6] || (_cache[6] = ($event) => isConfirmRotateOpen.value = $event)
				}, null, 8, [
					"open",
					"title",
					"description",
					"action-label",
					"cancel-label",
					"loading"
				])
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/encryption-keys/views/SettingsEncryptionKeys.vue?vue&type=style&index=0&lang.module.scss
var page = "_page_eizw0_125";
var header = "_header_eizw0_132";
var controls = "_controls_eizw0_138";
var sortControl = "_sortControl_eizw0_146";
var sortLabel = "_sortLabel_eizw0_152";
var sortSelect = "_sortSelect_eizw0_156";
var tableWrapper = "_tableWrapper_eizw0_160";
var keyValue = "_keyValue_eizw0_164";
var statusCell = "_statusCell_eizw0_170";
var statusDot = "_statusDot_eizw0_176";
var docsLinkLabel = "_docsLinkLabel_eizw0_185";
var rotateIcon = "_rotateIcon_eizw0_191";
var isRotating = "_isRotating_eizw0_196";
var filterFooter = "_filterFooter_eizw0_208";
var emptyState = "_emptyState_eizw0_216";
var SettingsEncryptionKeys_vue_vue_type_style_index_0_lang_module_default = {
	page,
	header,
	controls,
	sortControl,
	sortLabel,
	sortSelect,
	tableWrapper,
	keyValue,
	statusCell,
	statusDot,
	docsLinkLabel,
	rotateIcon,
	isRotating,
	"settings-encryption-keys-spin": "_settings-encryption-keys-spin_eizw0_1",
	filterFooter,
	emptyState
};
var SettingsEncryptionKeys_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsEncryptionKeys_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsEncryptionKeys_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsEncryptionKeys_default as default };
