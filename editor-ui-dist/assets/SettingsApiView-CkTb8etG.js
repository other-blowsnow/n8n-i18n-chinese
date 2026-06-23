import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, j as createVNode, jt as isRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { c as I18nT, s as useI18n } from "./src-D8xRy2J0.js";
import { E as N8nUserInfo_default, Ga as N8nHeading_default, Ja as N8nButton_default, Ki as N8nActionBox_default, Lt as N8nActionDropdown_default, Ui as Input_default, Ya as N8nIcon_default, b as N8nDataTableServer_default, f as Dialog_default, k as N8nTabs_default, qa as N8nText_default, zi as N8nTooltip_default } from "./src-BwN8TeVO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-DAdCVdhz.js";
import { Nu as DEBOUNCE_TIME, Vu as getDebounceTime, fc as DateTime, p as DOCS_DOMAIN } from "./constants-BiYlbN9Z.js";
import { D as storeToRefs, t as useRootStore } from "./useRootStore-DbgDMM5M.js";
import { t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { G as useDebounceFn } from "./core-BemUAWor.js";
import { f as useUIStore, l as useRBACStore, p as useTelemetry, t as useUsersStore, x as API_KEY_CREATE_OR_EDIT_MODAL_KEY } from "./users.store-CUZkGc51.js";
import { t as useCloudPlanStore } from "./cloudPlan.store--EUkFAAu.js";
import { t as useDocumentTitle } from "./useDocumentTitle-B687jMRp.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DLSOnrdM.js";
import { n as RevokeApiKeyConfirmModal_default, t as useApiKeysStore } from "./apiKeys.store-BshYnoZp.js";
//#region src/features/settings/apiKeys/components/ApiKeyLabelCell.vue?vue&type=script&setup=true&lang.ts
var ApiKeyLabelCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyLabelCell",
	props: {
		label: {},
		apiKey: {}
	},
	setup(__props) {
		const props = __props;
		const labelEl = ref(null);
		const isOverflowing = ref(false);
		let observer = null;
		const update = () => {
			const el = labelEl.value;
			if (!el) return;
			isOverflowing.value = el.scrollWidth > el.clientWidth;
		};
		onMounted(() => {
			update();
			if (labelEl.value) {
				observer = new ResizeObserver(update);
				observer.observe(labelEl.value);
			}
		});
		watch(() => props.label, update, { flush: "post" });
		onBeforeUnmount(() => {
			observer?.disconnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.cell) }, [createVNode(unref(N8nTooltip_default), {
				content: __props.label,
				"show-after": 500,
				disabled: !isOverflowing.value,
				"content-class": _ctx.$style.tooltip
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					ref_key: "labelEl",
					ref: labelEl,
					class: normalizeClass(_ctx.$style.label)
				}, [createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, [
				"content",
				"disabled",
				"content-class"
			]), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				class: normalizeClass(_ctx.$style.redacted)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.apiKey), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var ApiKeyLabelCell_vue_vue_type_style_index_0_lang_module_default = {
	cell: "_cell_14164_125",
	label: "_label_14164_132",
	redacted: "_redacted_14164_140",
	tooltip: "_tooltip_14164_144"
};
var ApiKeyLabelCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyLabelCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyLabelCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyOwnerCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { "data-test-id": "api-key-owner-cell" };
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyOwnerCell.vue
var ApiKeyOwnerCell_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyOwnerCell",
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
//#region src/features/settings/apiKeys/components/ApiKeyScopesCell.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["disabled"];
var ApiKeyScopesCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyScopesCell",
	props: { apiKey: {} },
	emits: ["open"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.button),
				disabled: !__props.apiKey.scopes.length,
				"data-test-id": "api-key-scopes-cell",
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("open", __props.apiKey), ["stop"]))
			}, toDisplayString(__props.apiKey.scopes.length), 11, _hoisted_1$2);
		};
	}
});
var ApiKeyScopesCell_vue_vue_type_style_index_0_lang_module_default = { button: "_button_1vcvm_125" };
var ApiKeyScopesCell_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyScopesCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyScopesCell_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "api-key-table" };
var ApiKeyTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyTable",
	props: /* @__PURE__ */ mergeModels({
		apiKeys: {},
		itemsLength: {},
		loading: { type: Boolean },
		currentUserId: {}
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"edit",
		"revoke",
		"open-scopes",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const i18n = useI18n();
		function formatExpiration(expiresAt) {
			if (!expiresAt) return i18n.baseText("settings.api.expiration.never");
			return DateTime.fromSeconds(expiresAt).toFormat("d LLL yyyy");
		}
		function formatLastUsed(iso) {
			if (!iso) return i18n.baseText("settings.api.lastUsed.never");
			return DateTime.fromISO(iso).toRelative() ?? i18n.baseText("settings.api.lastUsed.never");
		}
		function isOwn(apiKey) {
			if (!props.currentUserId) return true;
			return apiKey.owner?.id === props.currentUserId;
		}
		function onRowClick(_event, payload) {
			emit("edit", payload.item);
		}
		function getRowActions(apiKey) {
			const actions = [];
			if (isOwn(apiKey)) actions.push({
				id: "edit",
				label: i18n.baseText("settings.api.actions.edit"),
				icon: "square-pen",
				testId: "api-key-edit-action"
			});
			else actions.push({
				id: "view",
				label: i18n.baseText("settings.api.actions.view"),
				icon: "eye",
				testId: "api-key-view-action"
			});
			actions.push({
				id: "revoke",
				label: i18n.baseText("settings.api.actions.revoke"),
				icon: "trash-2",
				testId: "api-key-revoke-action",
				divided: true
			});
			return actions;
		}
		function onAction(action, apiKey) {
			if (action === "revoke") emit("revoke", apiKey);
			else emit("edit", apiKey);
		}
		const rows = computed(() => props.apiKeys);
		const headers = ref([
			{
				title: i18n.baseText("settings.api.columns.name"),
				key: "label",
				width: 280,
				resize: false
			},
			{
				title: i18n.baseText("settings.api.columns.owner"),
				key: "owner",
				width: 280,
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.api.columns.scopes"),
				key: "scopes",
				resize: false
			},
			{
				title: i18n.baseText("settings.api.columns.expiration"),
				key: "expiresAt",
				disableSort: true,
				resize: false
			},
			{
				title: i18n.baseText("settings.api.columns.lastUsed"),
				key: "lastUsedAt",
				resize: false
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 80,
				disableSort: true,
				resize: false,
				value: () => void 0
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableOptions.value.sortBy,
				"onUpdate:sortBy": _cache[2] || (_cache[2] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[3] || (_cache[3] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[4] || (_cache[4] = ($event) => tableOptions.value.itemsPerPage = $event),
				headers: headers.value,
				items: rows.value,
				"items-length": __props.itemsLength,
				loading: __props.loading,
				"page-sizes": [
					10,
					25,
					50
				],
				"onUpdate:options": _cache[5] || (_cache[5] = ($event) => emit("update:options", $event)),
				"onClick:row": onRowClick
			}, {
				[`item.label`]: withCtx(({ item }) => [createVNode(ApiKeyLabelCell_default, {
					label: item.label,
					"api-key": item.apiKey
				}, null, 8, ["label", "api-key"])]),
				[`item.owner`]: withCtx(({ item }) => [item.owner ? (openBlock(), createBlock(ApiKeyOwnerCell_default, {
					key: 0,
					owner: item.owner,
					"is-current-user": isOwn(item)
				}, null, 8, ["owner", "is-current-user"])) : createCommentVNode("", true)]),
				[`item.scopes`]: withCtx(({ item }) => [createVNode(ApiKeyScopesCell_default, {
					"api-key": item,
					onOpen: _cache[0] || (_cache[0] = ($event) => emit("open-scopes", $event))
				}, null, 8, ["api-key"])]),
				[`item.expiresAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), { color: item.expiresAt ? void 0 : "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(formatExpiration(item.expiresAt)), 1)]),
					_: 2
				}, 1032, ["color"])]),
				[`item.lastUsedAt`]: withCtx(({ item }) => [createVNode(unref(N8nText_default), { color: item.lastUsedAt ? void 0 : "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(formatLastUsed(item.lastUsedAt)), 1)]),
					_: 2
				}, 1032, ["color"])]),
				[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.rowActions),
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, [createVNode(unref(N8nActionDropdown_default), {
					items: getRowActions(item),
					placement: "bottom-end",
					"activator-size": "small",
					"data-test-id": "api-key-actions-toggle",
					onSelect: (action) => onAction(action, item)
				}, null, 8, ["items", "onSelect"])], 2)]),
				_: 2
			}, 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length",
				"loading"
			])]);
		};
	}
});
var ApiKeyTable_vue_vue_type_style_index_0_lang_module_default = { rowActions: "_rowActions_1ljfu_125" };
var ApiKeyTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/components/ApiKeyScopesModal.vue?vue&type=script&setup=true&lang.ts
var ApiKeyScopesModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyScopesModal",
	props: {
		apiKey: {},
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.apiKey ? i18n.baseText("settings.api.scopes.modal.title", { interpolate: { label: props.apiKey.label } }) : "");
		const scopes = computed(() => props.apiKey?.scopes ?? []);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				"model-value": __props.open,
				title: title.value,
				width: "480px",
				"data-test-id": "api-key-scopes-modal",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [!scopes.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.scopes.modal.empty")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.pills)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(scopes.value, (scope) => {
					return openBlock(), createElementBlock("li", {
						key: scope,
						class: normalizeClass(_ctx.$style.pill)
					}, toDisplayString(scope), 3);
				}), 128))], 2))], 2)]),
				_: 1
			}, 8, ["model-value", "title"]);
		};
	}
});
var ApiKeyScopesModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_knidl_125",
	pills: "_pills_knidl_133",
	pill: "_pill_knidl_133"
};
var ApiKeyScopesModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyScopesModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyScopesModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href", "textContent"];
var _hoisted_2 = ["textContent"];
var _hoisted_3 = ["textContent"];
var SettingsApiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsApiView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const cloudPlanStore = useCloudPlanStore();
		const usersStore = useUsersStore();
		const rbacStore = useRBACStore();
		const { showError, showMessage } = useToast();
		const documentTitle = useDocumentTitle();
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const loading = ref(false);
		const apiKeysStore = useApiKeysStore();
		const { fetchApiKeys, setOwnership, setLabelFilter, applyTableOptions, deleteApiKey, getApiKeyAvailableScopes } = apiKeysStore;
		const { apiKeys, apiKeysCount, totalCountForOwnership, ownership, labelFilter, totalMineCount, totalAllCount, hasAnyKeys, tableOptions } = storeToRefs(apiKeysStore);
		const searchQuery = ref(labelFilter.value);
		const onSearch = useDebounceFn(async (value) => {
			try {
				loading.value = true;
				await setLabelFilter(value.trim());
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		function onSearchInput(value) {
			searchQuery.value = value;
			onSearch(value);
		}
		const { isSwaggerUIEnabled, publicApiPath, publicApiLatestVersion } = settingsStore;
		const { baseUrl } = useRootStore();
		const { isPublicApiEnabled } = settingsStore;
		const apiDocsURL = ref("");
		const scopesModalApiKey = ref(null);
		const revokeApiKey = ref(null);
		const revoking = ref(false);
		const canManageAllKeys = computed(() => rbacStore.hasScope("apiKey:manage"));
		const tabOptions = computed(() => [{
			label: i18n.baseText("settings.api.tabs.mine"),
			value: "mine",
			tag: String(totalMineCount.value)
		}, {
			label: i18n.baseText("settings.api.tabs.all"),
			value: "all",
			tag: String(totalAllCount.value)
		}]);
		async function onTabChange(newOwnership) {
			try {
				loading.value = true;
				await setOwnership(newOwnership);
				if (newOwnership === "all") telemetry.track("User viewed all API keys");
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		async function onTableUpdate() {
			try {
				loading.value = true;
				await applyTableOptions();
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		const onCreateApiKey = () => {
			telemetry.track("User clicked create API key button");
			uiStore.openModalWithData({
				name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
				data: { mode: "new" }
			});
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.api"));
			apiDocsURL.value = isSwaggerUIEnabled ? `${baseUrl}${publicApiPath}/v${publicApiLatestVersion}/docs` : `https://${DOCS_DOMAIN}/api/api-reference/`;
			if (!isPublicApiEnabled) return;
			apiKeysStore.$reset();
			searchQuery.value = "";
			await getApiKeysAndScopes();
		});
		onBeforeUnmount(() => {
			apiKeysStore.$reset();
		});
		function onUpgrade() {
			goToUpgrade("settings-n8n-api", "upgrade-api", "redirect");
		}
		async function getApiKeysAndScopes() {
			try {
				loading.value = true;
				await Promise.all([fetchApiKeys(), getApiKeyAvailableScopes()]);
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		function onEdit(apiKey) {
			uiStore.openModalWithData({
				name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
				data: {
					mode: "edit",
					activeId: apiKey.id
				}
			});
		}
		function onRevokeRequest(apiKey) {
			revokeApiKey.value = apiKey;
		}
		async function onRevokeConfirm() {
			if (!revokeApiKey.value) return;
			const apiKey = revokeApiKey.value;
			revoking.value = true;
			try {
				await deleteApiKey(apiKey.id);
				showMessage({
					title: i18n.baseText("settings.api.revoke.toast"),
					type: "success"
				});
				revokeApiKey.value = null;
			} catch (e) {
				showError(e, i18n.baseText("settings.api.delete.error"));
			} finally {
				revoking.value = false;
				telemetry.track("User clicked delete API key button", { is_own: apiKey.owner?.id === usersStore.currentUser?.id });
			}
		}
		function onOpenScopes(apiKey) {
			scopesModalApiKey.value = apiKey;
			telemetry.track("User clicked view API key scopes", { is_own: apiKey.owner?.id === usersStore.currentUser?.id });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api")), 1)]),
					_: 1
				})], 2),
				unref(isPublicApiEnabled) && unref(hasAnyKeys) ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.description)
				}, [createVNode(unref(I18nT), {
					keypath: "settings.api.view.info",
					tag: "span",
					scope: "global"
				}, {
					apiPlayground: withCtx(() => [createBaseVNode("a", {
						class: normalizeClass(_ctx.$style.docLink),
						"data-test-id": "api-playground-link",
						href: apiDocsURL.value,
						target: "_blank",
						textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.apiPlayground"))
					}, null, 10, _hoisted_1)]),
					webhook: withCtx(() => [createBaseVNode("a", {
						class: normalizeClass(_ctx.$style.docLink),
						"data-test-id": "webhook-docs-link",
						href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
						target: "_blank",
						textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.webhook"))
					}, null, 10, _hoisted_2)]),
					documentation: withCtx(() => [createBaseVNode("a", {
						class: normalizeClass(_ctx.$style.docLink),
						"data-test-id": "api-docs-link",
						href: "https://docs.n8n.io/api",
						target: "_blank",
						textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.documentation"))
					}, null, 10, _hoisted_3)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				unref(isPublicApiEnabled) && unref(hasAnyKeys) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.toolbar)
				}, [createVNode(unref(Input_default), {
					"model-value": searchQuery.value,
					placeholder: unref(i18n).baseText("settings.api.search.placeholder"),
					class: normalizeClass(_ctx.$style.search),
					size: "medium",
					clearable: "",
					"data-test-id": "api-keys-search",
					"onUpdate:modelValue": onSearchInput
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					_: 1
				}, 8, [
					"model-value",
					"placeholder",
					"class"
				]), createVNode(unref(N8nButton_default), {
					size: "medium",
					onClick: onCreateApiKey
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.button")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				unref(isPublicApiEnabled) && canManageAllKeys.value && unref(hasAnyKeys) ? (openBlock(), createBlock(unref(N8nTabs_default), {
					key: 2,
					"model-value": unref(ownership),
					options: tabOptions.value,
					"data-test-id": "api-keys-tabs",
					class: normalizeClass(_ctx.$style.tabs),
					"onUpdate:modelValue": onTabChange
				}, null, 8, [
					"model-value",
					"options",
					"class"
				])) : createCommentVNode("", true),
				unref(isPublicApiEnabled) && unref(hasAnyKeys) && unref(totalCountForOwnership) > 0 && unref(apiKeysCount) > 0 ? (openBlock(), createBlock(ApiKeyTable_default, {
					key: 3,
					"table-options": unref(tableOptions),
					"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => isRef(tableOptions) ? tableOptions.value = $event : null),
					"api-keys": unref(apiKeys),
					"items-length": unref(apiKeysCount),
					loading: loading.value,
					"current-user-id": unref(usersStore).currentUser?.id,
					class: normalizeClass(_ctx.$style.table),
					onEdit,
					onRevoke: onRevokeRequest,
					onOpenScopes,
					"onUpdate:options": onTableUpdate
				}, null, 8, [
					"table-options",
					"api-keys",
					"items-length",
					"loading",
					"current-user-id",
					"class"
				])) : unref(isPublicApiEnabled) && unref(hasAnyKeys) && unref(labelFilter).trim() ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 4,
					color: "text-light",
					class: normalizeClass(_ctx.$style.noResults),
					"data-test-id": "api-keys-no-results"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.search.noResults")), 1)]),
					_: 1
				}, 8, ["class"])) : unref(isPublicApiEnabled) && unref(hasAnyKeys) && unref(ownership) === "mine" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 5,
					color: "text-light",
					class: normalizeClass(_ctx.$style.noResults),
					"data-test-id": "api-keys-empty-mine"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.empty.mine")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!unref(isPublicApiEnabled) && unref(cloudPlanStore).userIsTrialing ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 6,
					"data-test-id": "public-api-upgrade-cta",
					heading: unref(i18n).baseText("settings.api.trial.upgradePlan.title"),
					description: unref(i18n).baseText("settings.api.trial.upgradePlan.description"),
					"button-text": unref(i18n).baseText("settings.api.trial.upgradePlan.cta"),
					"onClick:button": onUpgrade
				}, null, 8, [
					"heading",
					"description",
					"button-text"
				])) : createCommentVNode("", true),
				unref(isPublicApiEnabled) && !unref(hasAnyKeys) ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 7,
					"button-text": unref(i18n).baseText(loading.value ? "settings.api.create.button.loading" : "settings.api.create.button"),
					description: unref(i18n).baseText("settings.api.create.description"),
					"onClick:button": onCreateApiKey
				}, null, 8, ["button-text", "description"])) : createCommentVNode("", true),
				createVNode(ApiKeyScopesModal_default, {
					"api-key": scopesModalApiKey.value,
					open: !!scopesModalApiKey.value,
					"onUpdate:open": _cache[1] || (_cache[1] = ($event) => scopesModalApiKey.value = null)
				}, null, 8, ["api-key", "open"]),
				createVNode(RevokeApiKeyConfirmModal_default, {
					"api-key": revokeApiKey.value,
					open: !!revokeApiKey.value,
					loading: revoking.value,
					"revoking-for-other": !!revokeApiKey.value?.owner && revokeApiKey.value.owner.id !== unref(usersStore).currentUser?.id,
					onConfirm: onRevokeConfirm,
					onCancel: _cache[2] || (_cache[2] = ($event) => revokeApiKey.value = null),
					"onUpdate:open": _cache[3] || (_cache[3] = ($event) => revokeApiKey.value = null)
				}, null, 8, [
					"api-key",
					"open",
					"loading",
					"revoking-for-other"
				])
			], 2);
		};
	}
});
var SettingsApiView_vue_vue_type_style_index_0_lang_module_default = {
	heading: "_heading_ru3l2_126",
	description: "_description_ru3l2_130",
	docLink: "_docLink_ru3l2_137",
	toolbar: "_toolbar_ru3l2_146",
	search: "_search_ru3l2_154",
	container: "_container_ru3l2_159",
	table: "_table_ru3l2_164",
	noResults: "_noResults_ru3l2_168",
	tabs: "_tabs_ru3l2_174"
};
var SettingsApiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsApiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsApiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsApiView_default as default };
