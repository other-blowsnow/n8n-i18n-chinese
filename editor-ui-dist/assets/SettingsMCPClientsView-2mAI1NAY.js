import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BT3CWEhN.js";
import { Ai as N8nText_default, C as N8nDataTableServer_default, D as N8nUserSelect_default, Et as N8nInputLabel_default, Ii as N8nButton_default, It as N8nOption_default, Li as N8nIcon_default, Pi as Input_default, Pt as N8nSelect_default, Tt as N8nLink_default, X as N8nPopover_default, _ as DialogHeader_default, _r as N8nBadge_default, g as DialogTitle_default, h as Dialog_default, k as N8nUserInfo_default, m as DialogFooter_default, nn as N8nLoading_default, nt as SettingsPageHeader_default, p as AlertDialog_default, rt as SettingsLayout_default, v as DialogDescription_default, z as N8nTabs_default } from "./src-CjwMP1QL.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter } from "./htmlUtils-AX6Lywzz.js";
import { t as useToast } from "./useToast-KzIcyQbs.js";
import { gt as MCP_CLIENT_TYPE_FILTERS, ht as MCP_CLIENT_CONNECTED_PERIODS } from "./src-CY9eW8M_.js";
import { t as useUsersStore } from "./users.store-S3MAKAuN.js";
import "./constants-Es0IMygd.js";
import { t as DEBOUNCE_TIME } from "./durations-CNO5pC2_.js";
import { n as useTelemetry } from "./posthog.store-BIq4iaqJ.js";
import { r as require_debounce, t as getDebounceTime } from "./useDebounce-CJwdvtMm.js";
import { t as useRBACStore } from "./rbac.store-CTjXyUMI.js";
import { t as useDocumentTitle } from "./useDocumentTitle-D7F1tKhv.js";
import { t as TimeAgo_default } from "./TimeAgo-iGUwWdbL.js";
import { i as MCP_DOCS_PAGE_URL, s as MCP_SETTINGS_VIEW } from "./mcp.constants-CO4YBOFa.js";
import { i as scopeLabel, n as getClientBrand, r as isFullAccessGrant, t as EMPTY_OAUTH_CLIENT_FILTERS } from "./clients.utils-FTd4OeOI.js";
import { t as useMCPStore } from "./mcp.store-DxLliWly.js";
import { t as McpEmptyStateCard_default } from "./McpEmptyStateCard-Dj4eHEKp.js";
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientDetailsModal",
	props: {
		client: {},
		open: { type: Boolean }
	},
	emits: ["update:open", "revoke"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const brand = computed(() => props.client ? getClientBrand(props.client.name) : null);
		const ownerLabel = computed(() => {
			const owner = props.client?.owner;
			if (!owner) return null;
			const name = [owner.firstName, owner.lastName].filter(Boolean).join(" ");
			return name ? `${name} (${owner.email})` : owner.email;
		});
		const subtitle = computed(() => {
			const type = brand.value?.type;
			if (!type) return i18n.baseText("settings.mcp.oAuthClients.details.subtitle");
			return i18n.baseText("settings.mcp.oAuthClients.details.subtitleWithType", { interpolate: { type: i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`) } });
		});
		/** Granted scopes as human labels, listed plainly in grant order. */
		const grantedScopes = computed(() => props.client?.scopes ?? []);
		function onRevoke() {
			if (!props.client) return;
			emit("revoke", props.client);
			emit("update:open", false);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [__props.client ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.container),
					"data-test-id": "mcp-client-details-modal"
				}, [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["icon-chip"]) }, [brand.value?.icon ? (openBlock(), createBlock(resolveDynamicComponent(brand.value.icon), {
								key: 0,
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "mcp",
								class: normalizeClass(_ctx.$style.icon)
							}, null, 8, ["class"]))], 2), createTextVNode(" " + toDisplayString(__props.client.name), 1)], 2)]),
							_: 1
						}), createVNode(unref(DialogDescription_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(subtitle.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [
						ownerLabel.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedBy")), 1)]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-by"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(ownerLabel.value), 1)]),
							_: 1
						})], 64)) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.connectedOn")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-dark",
							size: "small",
							"data-test-id": "mcp-client-details-connected-on"
						}, {
							default: withCtx(() => [createVNode(TimeAgo_default, {
								date: new Date(__props.client.grantedAt).toISOString(),
								capitalize: ""
							}, null, 8, ["date"])]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.details.access")), 1)]),
							_: 1
						}),
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.access),
							"data-test-id": "mcp-client-details-access"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(grantedScopes.value, (scope) => {
							return openBlock(), createBlock(unref(N8nText_default), {
								key: scope,
								color: "text-dark",
								size: "small",
								"data-test-id": `mcp-client-details-scope-${scope}`
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(scopeLabel)(unref(i18n), scope)), 1)]),
								_: 2
							}, 1032, ["data-test-id"]);
						}), 128))], 2)
					], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							"data-test-id": "mcp-client-details-close",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "destructive",
							"data-test-id": "mcp-client-details-revoke",
							onClick: onRevoke
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/OAuthClientDetailsModal.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_6dfaj_125";
var title = "_title_6dfaj_131";
var icon = "_icon_6dfaj_137";
var details = "_details_6dfaj_157";
var access$1 = "_access_6dfaj_167";
var OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default = {
	container,
	title,
	"icon-chip": "_icon-chip_6dfaj_137",
	icon,
	details,
	access: access$1
};
var OAuthClientDetailsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientDetailsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientDetailsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientOwnerCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { "data-test-id": "mcp-client-owner-cell" };
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientOwnerCell.vue
var OAuthClientOwnerCell_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientOwnerCell",
	props: {
		owner: {},
		isCurrentUser: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nUserInfo_default), {
				"first-name": __props.owner.firstName ?? "",
				"last-name": __props.owner.lastName ?? "",
				email: __props.owner.email,
				"is-current-user": __props.isCurrentUser
			}, null, 8, [
				"first-name",
				"last-name",
				"email",
				"is-current-user"
			])]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsFilters.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 1 };
var OAuthClientsFilters_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsFilters",
	props: {
		modelValue: {},
		owners: {},
		showOwnerFilter: { type: Boolean },
		currentUserId: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const CLIENT_TYPE_OPTIONS = MCP_CLIENT_TYPE_FILTERS;
		const CONNECTED_OPTIONS = MCP_CLIENT_CONNECTED_PERIODS;
		const connectedOptionLabels = {
			last7: i18n.baseText("settings.mcp.oAuthClients.filters.connected.lastXDays", { interpolate: { count: 7 } }),
			last30: i18n.baseText("settings.mcp.oAuthClients.filters.connected.lastXDays", { interpolate: { count: 30 } }),
			older: i18n.baseText("settings.mcp.oAuthClients.filters.connected.older")
		};
		const filtersLength = computed(() => {
			const { type, ownerId, connected } = props.modelValue;
			return [
				type,
				ownerId,
				connected
			].filter((value) => value !== null).length;
		});
		const hasFilters = computed(() => filtersLength.value > 0);
		function setKeyValue(key, value) {
			emit("update:modelValue", {
				...props.modelValue,
				[key]: value === "" ? null : value
			});
		}
		function resetFilters() {
			emit("update:modelValue", {
				...props.modelValue,
				type: null,
				ownerId: null,
				connected: null
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				width: "304px",
				"content-class": _ctx.$style["popover-content"],
				align: "end"
			}, {
				trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["trigger-wrapper"]) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					icon: "funnel",
					size: "medium",
					"icon-only": !hasFilters.value,
					active: hasFilters.value,
					"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
					"data-test-id": "mcp-clients-filters-trigger"
				}, {
					default: withCtx(() => [hasFilters.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["filter-button-count"]),
						"data-test-id": "mcp-clients-filters-count",
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), hasFilters.value ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 1)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"icon-only",
					"active",
					"aria-label"
				])], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "mcp-clients-filters-dropdown"
				}, [
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.clientType"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mb-3xs"
					}, null, 8, ["label"]),
					createVNode(unref(N8nSelect_default), {
						"model-value": __props.modelValue.type ?? "",
						size: "medium",
						"data-test-id": "mcp-clients-filter-type",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => setKeyValue("type", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.clientType.all")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CLIENT_TYPE_OPTIONS), (type) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: type,
								value: type,
								label: unref(i18n).baseText(`settings.mcp.oAuthClients.filters.clientType.${type}`)
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value"]),
					__props.showOwnerFilter ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connectedBy"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mt-s mb-3xs"
					}, null, 8, ["label"]), createVNode(unref(N8nUserSelect_default), {
						users: __props.owners ?? [],
						"model-value": __props.modelValue.ownerId ?? "",
						"current-user-id": __props.currentUserId,
						placeholder: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connectedBy.all"),
						size: "medium",
						clearable: "",
						"data-test-id": "mcp-clients-filter-owner",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => setKeyValue("ownerId", $event ?? ""))
					}, null, 8, [
						"users",
						"model-value",
						"current-user-id",
						"placeholder"
					])], 64)) : createCommentVNode("", true),
					createVNode(unref(N8nInputLabel_default), {
						label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connected"),
						bold: false,
						size: "small",
						color: "text-base",
						class: "mt-s mb-3xs"
					}, null, 8, ["label"]),
					createVNode(unref(N8nSelect_default), {
						"model-value": __props.modelValue.connected ?? "",
						size: "medium",
						"data-test-id": "mcp-clients-filter-connected",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => setKeyValue("connected", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "",
							label: unref(i18n).baseText("settings.mcp.oAuthClients.filters.connected.allTime")
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CONNECTED_OPTIONS), (period) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: period,
								value: period,
								label: connectedOptionLabels[period]
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["model-value"]),
					hasFilters.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
					}, [createVNode(unref(N8nLink_default), {
						"data-test-id": "mcp-clients-filters-reset",
						onClick: resetFilters
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["content-class"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsFilters.vue?vue&type=style&index=0&lang.module.scss
var OAuthClientsFilters_vue_vue_type_style_index_0_lang_module_default = {
	"popover-content": "_popover-content_61q8h_125",
	"trigger-wrapper": "_trigger-wrapper_61q8h_129",
	"filter-button-count": "_filter-button-count_61q8h_136",
	"filters-dropdown-footer": "_filters-dropdown-footer_61q8h_141"
};
var OAuthClientsFilters_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientsFilters_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsFilters_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "oauth-clients-table" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 2,
	class: "mt-s mb-xl"
};
var _hoisted_4 = { key: 1 };
var OAuthClientsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthClientsTable",
	props: {
		clients: {},
		loading: { type: Boolean },
		scopeTools: {}
	},
	emits: [
		"revokeClient",
		"update:ownership",
		"update:filters",
		"update:options"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const mcpStore = useMCPStore();
		const rbacStore = useRBACStore();
		const usersStore = useUsersStore();
		const props = __props;
		const emit = __emit;
		const page = computed({
			get: () => mcpStore.oauthClientsPage,
			set: (value) => emit("update:options", {
				page: value,
				itemsPerPage: itemsPerPage.value
			})
		});
		const itemsPerPage = computed({
			get: () => mcpStore.oauthClientsPageSize,
			set: (value) => emit("update:options", {
				page: page.value,
				itemsPerPage: value
			})
		});
		const detailsClient = ref(null);
		const detailsOpen = ref(false);
		const canManageAllClients = computed(() => rbacStore.hasScope("mcp:manage"));
		const ownership = computed(() => mcpStore.oauthClientsOwnership);
		const tabOptions = computed(() => [{
			label: i18n.baseText("settings.mcp.oAuthClients.tabs.mine"),
			value: "mine",
			tag: String(mcpStore.oauthClientTotals.mine)
		}, {
			label: i18n.baseText("settings.mcp.oAuthClients.tabs.all"),
			value: "all",
			tag: String(mcpStore.oauthClientTotals.all ?? 0)
		}]);
		const filters = ref({ ...EMPTY_OAUTH_CLIENT_FILTERS });
		const searchQuery = ref("");
		const hasActiveFilters = computed(() => filters.value.search.trim() !== "" || filters.value.type !== null || filters.value.ownerId !== null || filters.value.connected !== null);
		const totalClients = computed(() => mcpStore.oauthClientTotals.all ?? mcpStore.oauthClientTotals.mine);
		const showEmptyState = computed(() => props.clients.length === 0 && totalClients.value === 0 && !hasActiveFilters.value);
		function onFiltersChange(newFilters) {
			filters.value = newFilters;
			emit("update:filters", newFilters);
		}
		const applySearch = (0, import_debounce.default)((value) => {
			onFiltersChange({
				...filters.value,
				search: value
			});
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		function onSearchInput(value) {
			searchQuery.value = value;
			applySearch(value);
		}
		const ownerOptions = computed(() => mcpStore.oauthClientOwners.map((owner) => ({
			id: owner.id,
			firstName: owner.firstName,
			lastName: owner.lastName,
			email: owner.email,
			fullName: [owner.firstName, owner.lastName].filter(Boolean).join(" ") || void 0
		})));
		function onOwnershipChange(newOwnership) {
			if (newOwnership === ownership.value) return;
			applySearch.cancel();
			filters.value = { ...EMPTY_OAUTH_CLIENT_FILTERS };
			searchQuery.value = "";
			emit("update:ownership", newOwnership);
		}
		function rowId(row) {
			return `${row.id}:${row.owner?.id ?? "mine"}`;
		}
		const tableHeaders = computed(() => [
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.clientName"),
				key: "name",
				width: 190,
				disableSort: true,
				value() {}
			},
			...ownership.value === "all" ? [{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedBy"),
				key: "owner",
				width: 200,
				disableSort: true,
				value() {}
			}] : [],
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.access"),
				key: "scopes",
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.oAuthClients.table.connectedAt"),
				key: "grantedAt",
				width: 110,
				disableSort: true,
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 140,
				disableSort: true,
				value() {}
			}
		]);
		function accessSummary(client) {
			if (client.scopes.length === 0) return i18n.baseText("settings.mcp.oAuthClients.access.none");
			if (isFullAccessGrant(client.scopes)) return i18n.baseText("settings.mcp.oAuthClients.access.full");
			const visible = client.scopes.slice(0, 2).map((scope) => scopeLabel(i18n, scope)).join(", ");
			const remaining = client.scopes.length - 2;
			if (remaining <= 0) return visible;
			return `${visible} ${i18n.baseText("settings.mcp.oAuthClients.scope.more", { interpolate: { count: remaining } })}`;
		}
		function clientTypeLabel(client) {
			const type = getClientBrand(client.name).type;
			if (!type) return null;
			return i18n.baseText(`settings.mcp.oAuthClients.clientType.${type}`);
		}
		function openDetails(item) {
			detailsClient.value = item;
			detailsOpen.value = true;
		}
		function onRevoke(item) {
			emit("revokeClient", item);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : showEmptyState.value ? (openBlock(), createBlock(McpEmptyStateCard_default, {
				key: 1,
				"data-test-id": "mcp-clients-empty",
				title: unref(i18n).baseText("settings.mcp.connectedClients.empty.title"),
				description: unref(i18n).baseText("settings.mcp.connectedClients.empty.description")
			}, null, 8, ["title", "description"])) : (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [canManageAllClients.value ? (openBlock(), createBlock(unref(N8nTabs_default), {
				key: 0,
				"model-value": ownership.value,
				options: tabOptions.value,
				"data-test-id": "mcp-clients-tabs",
				"onUpdate:modelValue": onOwnershipChange
			}, null, 8, ["model-value", "options"])) : (openBlock(), createElementBlock("div", _hoisted_4)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [createVNode(unref(Input_default), {
				"model-value": searchQuery.value,
				placeholder: unref(i18n).baseText("settings.mcp.oAuthClients.search.placeholder"),
				class: normalizeClass(_ctx.$style.search),
				size: "medium",
				clearable: "",
				"data-test-id": "mcp-clients-search",
				"onUpdate:modelValue": onSearchInput
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"model-value",
				"placeholder",
				"class"
			]), createVNode(OAuthClientsFilters_default, {
				"model-value": filters.value,
				owners: ownerOptions.value,
				"show-owner-filter": ownership.value === "all",
				"current-user-id": unref(usersStore).currentUser?.id,
				"onUpdate:modelValue": onFiltersChange
			}, null, 8, [
				"model-value",
				"owners",
				"show-owner-filter",
				"current-user-id"
			])], 2)], 2), createVNode(unref(N8nDataTableServer_default), {
				page: page.value,
				"onUpdate:page": _cache[0] || (_cache[0] = ($event) => page.value = $event),
				"items-per-page": itemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[1] || (_cache[1] = ($event) => itemsPerPage.value = $event),
				class: normalizeClass(_ctx.$style.table),
				"data-test-id": "oauth-clients-data-table",
				headers: tableHeaders.value,
				items: props.clients,
				"items-length": unref(mcpStore).oauthClientsCount,
				"item-value": rowId,
				"onClick:row": _cache[2] || (_cache[2] = (_, { item }) => openDetails(item))
			}, createSlots({
				[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.client) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style["client-icon-chip"]) }, [unref(getClientBrand)(item.name).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(getClientBrand)(item.name).icon), {
					key: 0,
					class: normalizeClass(_ctx.$style["client-icon"])
				}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "mcp",
					class: normalizeClass(_ctx.$style["client-icon"])
				}, null, 8, ["class"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style["client-name"]) }, [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-name",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
					_: 2
				}, 1024), clientTypeLabel(item) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					"data-test-id": "mcp-client-type",
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(clientTypeLabel(item)), 1)]),
					_: 2
				}, 1024)) : createCommentVNode("", true)], 2)], 2)]),
				[`item.owner`]: withCtx(({ item }) => [item.owner ? (openBlock(), createBlock(OAuthClientOwnerCell_default, {
					key: 0,
					owner: item.owner,
					"is-current-user": item.owner.id === unref(usersStore).currentUser?.id
				}, null, 8, ["owner", "is-current-user"])) : createCommentVNode("", true)]),
				[`item.scopes`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-access",
					color: "text-light",
					class: normalizeClass(_ctx.$style.access)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(accessSummary(item)), 1)]),
					_: 2
				}, 1032, ["class"])]),
				[`item.grantedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-client-created-at",
					color: "text-base"
				}, {
					default: withCtx(() => [createVNode(TimeAgo_default, {
						date: new Date(item.grantedAt).toISOString(),
						capitalize: ""
					}, null, 8, ["date"])]),
					_: 2
				}, 1024)]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style["revoke-action"]),
					variant: "outline",
					size: "small",
					"data-test-id": "mcp-oauth-client-revoke-button",
					onClick: withModifiers(($event) => onRevoke(item), ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.table.action.revokeAccess")), 1)]),
					_: 1
				}, 8, ["class", "onClick"])]),
				_: 2
			}, [unref(mcpStore).oauthClientsCount === 0 ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["empty-state"]) }, [createVNode(unref(N8nText_default), {
					"data-test-id": "mcp-clients-no-results",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.oAuthClients.search.noResults")), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"page",
				"items-per-page",
				"class",
				"headers",
				"items",
				"items-length"
			])])), createVNode(OAuthClientDetailsModal_default, {
				open: detailsOpen.value,
				"onUpdate:open": _cache[3] || (_cache[3] = ($event) => detailsOpen.value = $event),
				client: detailsClient.value,
				onRevoke
			}, null, 8, ["open", "client"])]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/OAuthClientsTable.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_ulc3v_125";
var toolbar = "_toolbar_ulc3v_131";
var filters = "_filters_ulc3v_139";
var search = "_search_ulc3v_145";
var client = "_client_ulc3v_149";
var access = "_access_ulc3v_177";
var table = "_table_ulc3v_206";
var OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default = {
	header,
	toolbar,
	filters,
	search,
	client,
	"client-icon-chip": "_client-icon-chip_ulc3v_155",
	"client-icon": "_client-icon_ulc3v_155",
	access,
	"client-name": "_client-name_ulc3v_190",
	"empty-state": "_empty-state_ulc3v_195",
	table,
	"revoke-action": "_revoke-action_ulc3v_211"
};
var OAuthClientsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthClientsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthClientsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/RevokeOAuthClientConfirmModal.vue
var RevokeOAuthClientConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RevokeOAuthClientConfirmModal",
	props: {
		client: {},
		open: { type: Boolean },
		loading: { type: Boolean },
		revokingForOther: { type: Boolean }
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.client ? i18n.baseText("settings.mcp.oAuthClients.revoke.title", { interpolate: { name: props.client.name } }) : "");
		const description = computed(() => {
			if (!props.client) return "";
			if (props.revokingForOther) {
				const owner = props.client.owner;
				const ownerName = [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || "";
				return i18n.baseText("settings.mcp.oAuthClients.revoke.description.other", { interpolate: { ownerName } });
			}
			return i18n.baseText("settings.mcp.oAuthClients.revoke.description.own");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: description.value,
				"action-label": unref(i18n).baseText("settings.mcp.oAuthClients.revoke.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "destructive",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "mcp-client-revoke-confirm",
				onAction: _cache[0] || (_cache[0] = ($event) => emit("confirm")),
				onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel")),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, null, 8, [
				"open",
				"title",
				"description",
				"action-label",
				"cancel-label",
				"loading"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPClientsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "mcp-clients-view" };
var SettingsMCPClientsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPClientsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const telemetry = useTelemetry();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const mcpStore = useMCPStore();
		const usersStore = useUsersStore();
		const oAuthClientsLoading = ref(false);
		const revokeClient = ref(null);
		const revoking = ref(false);
		const fetchoAuthCLients = async () => {
			try {
				oAuthClientsLoading.value = true;
				await mcpStore.getAllOAuthClients();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const onOwnershipChange = async (ownership) => {
			try {
				oAuthClientsLoading.value = true;
				await mcpStore.setOAuthClientsOwnership(ownership);
				if (ownership === "all") telemetry.track("User viewed all MCP clients");
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			} finally {
				setTimeout(() => {
					oAuthClientsLoading.value = false;
				}, 200);
			}
		};
		const onClientsFiltersChange = async (filters) => {
			try {
				await mcpStore.setOAuthClientsFilters(filters);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		const onClientsOptionsChange = async (options) => {
			try {
				await mcpStore.setOAuthClientsPagination(options.page, options.itemsPerPage);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.error.fetching.oAuthClients"));
			}
		};
		const onRevokeRequest = (client) => {
			revokeClient.value = client;
		};
		const onRevokeConfirm = async () => {
			const client = revokeClient.value;
			if (!client) return;
			try {
				revoking.value = true;
				await mcpStore.removeOAuthClient(client.id, client.owner?.id);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.mcp.oAuthClients.revoke.success.title"),
					message: i18n.baseText("settings.mcp.oAuthClients.revoke.success.message", { interpolate: { name: client.name } })
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.oAuthClients.revoke.error"));
			} finally {
				revoking.value = false;
				revokeClient.value = null;
			}
		};
		const onBack = () => {
			router.push({ name: MCP_SETTINGS_VIEW });
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp.connectedClients.title"));
			if (!mcpStore.mcpAccessEnabled) {
				await router.replace({ name: MCP_SETTINGS_VIEW });
				return;
			}
			await fetchoAuthCLients();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("settings.mcp.back"),
				class: normalizeClass(_ctx.$style.layout),
				onBack
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.mcp.connectedClients.title"),
						description: unref(i18n).baseText("settings.mcp.connectedClients.description"),
						"docs-url": unref(MCP_DOCS_PAGE_URL)
					}, null, 8, [
						"title",
						"description",
						"docs-url"
					]),
					createBaseVNode("div", _hoisted_1, [createVNode(OAuthClientsTable_default, {
						"data-test-id": "mcp-oauth-clients-table",
						clients: unref(mcpStore).oauthClients,
						"scope-tools": unref(mcpStore).oauthClientScopeTools,
						loading: oAuthClientsLoading.value,
						onRevokeClient: onRevokeRequest,
						"onUpdate:ownership": onOwnershipChange,
						"onUpdate:filters": onClientsFiltersChange,
						"onUpdate:options": onClientsOptionsChange,
						onRefresh: fetchoAuthCLients
					}, null, 8, [
						"clients",
						"scope-tools",
						"loading"
					])]),
					createVNode(RevokeOAuthClientConfirmModal_default, {
						client: revokeClient.value,
						open: !!revokeClient.value,
						loading: revoking.value,
						"revoking-for-other": !!revokeClient.value?.owner && revokeClient.value.owner.id !== unref(usersStore).currentUser?.id,
						onConfirm: onRevokeConfirm,
						onCancel: _cache[0] || (_cache[0] = ($event) => revokeClient.value = null),
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => revokeClient.value = null)
					}, null, 8, [
						"client",
						"open",
						"loading",
						"revoking-for-other"
					])
				]),
				_: 1
			}, 8, ["back-label", "class"]);
		};
	}
});
var SettingsMCPClientsView_vue_vue_type_style_index_0_lang_module_default = { layout: "_layout_1i7in_126" };
var SettingsMCPClientsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPClientsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPClientsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPClientsView_default as default };
