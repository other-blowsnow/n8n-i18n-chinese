import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Bn as N8nHeading_default, Hn as N8nText_default, Un as N8nButton_default, at as N8nLoading_default, ht as N8nTooltip_default, it as N8nActionToggle_default, u as N8nDataTableServer_default, wt as N8nActionBox_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BlCeUq7F.js";
import "./empty-BuGRxzl4.js";
import { $o as useSettingsStore, Nn as useDocumentTitle, Wi as useUIStore, dr as useUsersStore, en as useCredentialsStore, n as useToast, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Qr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./retry-CMAFrhVi.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CHvZKgl9.js";
import { t as TimeAgo_default } from "./TimeAgo-i8FaEReL.js";
import { o as CHAT_PROVIDER_SETTINGS_MODAL_KEY, p as providerDisplayNames } from "./constants-qk3hx0l8.js";
import { t as useChatStore } from "./chat.store-DnJwLoWK.js";
import "./fileUtils-D3GQ2UWQ.js";
var _hoisted_1 = { key: 0 };
var TRUNCATE_MODELS_AFTER = 4;
var ChatProvidersTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatProvidersTable",
	props: {
		settings: {},
		loading: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: ["editProvider", "refresh"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.chatHub.providers.table.provider"),
				key: "provider",
				width: 120,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.chatHub.providers.table.models"),
				key: "models",
				width: 300,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.chatHub.providers.table.updatedAt"),
				key: "updatedAt",
				disableSort: true,
				width: 80,
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 50,
				disableSort: true,
				value() {}
			}
		]);
		const tableActions = computed(() => [{
			label: i18n.baseText("settings.chatHub.providers.table.action.editProvider"),
			value: "editProvider",
			disabled: props.disabled
		}]);
		const settingItems = computed(() => {
			return props.settings ? Object.values(props.settings) : [];
		});
		const modelsText = (settings) => {
			if (!settings.enabled) return i18n.baseText("settings.chatHub.providers.table.models.disabled");
			else if (settings.allowedModels.length === 0) return i18n.baseText("settings.chatHub.providers.table.models.allModels");
			else {
				if (settings.allowedModels.length > TRUNCATE_MODELS_AFTER) return settings.allowedModels.slice(0, TRUNCATE_MODELS_AFTER).map((m) => m.displayName).join(", ") + i18n.baseText("settings.chatHub.providers.table.models.more", { interpolate: { count: settings.allowedModels.length - TRUNCATE_MODELS_AFTER } });
				return settings.allowedModels.map((m) => m.displayName).join(", ");
			}
		};
		const onTableAction = (action, settings) => {
			switch (action) {
				case "editProvider":
					emit("editProvider", settings);
					break;
				default: break;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: normalizeClass(_ctx.$style.header)
			}, null, 8, ["loading", "class"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.container)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				size: "medium",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.table.title")), 1)]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.chatHub.providers.table.refresh.tooltip") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					type: "tertiary",
					icon: "refresh-cw",
					square: true,
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresh"))
				})]),
				_: 1
			}, 8, ["content"])], 2)], 2), !props.settings ? (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 0,
				heading: unref(i18n).baseText("settings.chatHub.providers.table.empty.title"),
				description: unref(i18n).baseText("settings.chatHub.providers.table.empty.description")
			}, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.chatProvidersTable),
				headers: tableHeaders.value,
				items: settingItems.value,
				"items-length": settingItems.value.length
			}, {
				[`item.provider`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.providerCell) }, [item.provider in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon_default, {
					key: 0,
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[item.provider],
					size: 16,
					class: normalizeClass(_ctx.$style.menuIcon)
				}, null, 8, ["credential-type-name", "class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(providerDisplayNames)[item.provider]), 1)]),
					_: 2
				}, 1024)], 2)]),
				[`item.models`]: withCtx(({ item }) => [item.allowedModels?.length && item.allowedModels?.length > TRUNCATE_MODELS_AFTER ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: item.allowedModels?.map((m) => m.displayName).join(", ")
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), { color: item.enabled ? "text-base" : "primary" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(modelsText(item)), 1)]),
						_: 2
					}, 1032, ["color"])]),
					_: 2
				}, 1032, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: item.enabled ? "text-base" : "primary"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(modelsText(item)), 1)]),
					_: 2
				}, 1032, ["color"]))]),
				[`item.updatedAt`]: withCtx(({ item }) => [createBaseVNode("span", null, [item.updatedAt ? (openBlock(), createBlock(TimeAgo_default, {
					key: 0,
					date: item.updatedAt
				}, null, 8, ["date"])) : (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
					default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("-")])),
					_: 1
				}))])]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nActionToggle_default), {
					placement: "bottom",
					actions: tableActions.value,
					theme: "dark",
					onAction: ($event) => onTableAction($event, item)
				}, null, 8, ["actions", "onAction"])]),
				_: 2
			}, 1032, [
				"class",
				"headers",
				"items",
				"items-length"
			]))], 2))], 2);
		};
	}
});
var ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_i795b_123",
	tableContainer: "_tableContainer_i795b_128",
	actions: "_actions_i795b_132",
	header: "_header_i795b_138",
	chatProvidersTable: "_chatProvidersTable_i795b_145",
	menuIcon: "_menuIcon_i795b_149",
	providerCell: "_providerCell_i795b_153"
};
var ChatProvidersTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatProvidersTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default }]]);
var SettingsChatHubView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsChatHubView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const chatStore = useChatStore();
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const isAdmin = computed(() => usersStore.isAdmin);
		const disabled = computed(() => !isOwner.value && !isAdmin.value);
		const fetchSettings = async () => {
			try {
				await chatStore.fetchAllChatSettings();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.chatHub.providers.fetching.error"));
			}
		};
		function onEditProvider(settings) {
			uiStore.openModalWithData({
				name: CHAT_PROVIDER_SETTINGS_MODAL_KEY,
				data: {
					provider: settings.provider,
					disabled: disabled.value,
					onNewCredential: (provider) => {
						const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
						telemetry.track("User opened Credential modal", {
							credential_type: credentialType,
							source: "chat_hub_settings",
							new_credential: true,
							workflow_id: null
						});
						uiStore.openNewCredential(credentialType);
					},
					onConfirm: async (updatedSettings) => {
						try {
							await chatStore.updateProviderSettings(updatedSettings);
							toast.showMessage({
								title: i18n.baseText("settings.chatHub.providers.updated.success"),
								type: "success"
							});
							await settingsStore.getModuleSettings();
						} catch (error) {
							toast.showError(error, i18n.baseText("settings.chatHub.providers.updated.error"));
						}
					},
					onCancel: () => {}
				}
			});
		}
		async function onRefreshWorkflows() {
			await fetchSettings();
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.chatHub"));
			if (!settingsStore.isChatFeatureEnabled) return;
			await Promise.all([
				fetchSettings(),
				credentialsStore.fetchAllCredentials(),
				credentialsStore.fetchCredentialTypes(false)
			]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nHeading_default), {
				size: "2xlarge",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(ChatProvidersTable_default, {
				"data-test-id": "chat-providers-table",
				settings: unref(chatStore).settings,
				loading: unref(chatStore).settingsLoading,
				disabled: disabled.value,
				onEditProvider,
				onRefresh: onRefreshWorkflows
			}, null, 8, [
				"settings",
				"loading",
				"disabled"
			])], 2)], 2);
		};
	}
});
var SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1g3bj_123",
	title: "_title_1g3bj_129"
};
var SettingsChatHubView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsChatHubView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsChatHubView_default as default };
