import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Ht as N8nTooltip_default, Li as N8nHeading_default, Mi as N8nActionBox_default, bt as N8nActionToggle_default, d as N8nDataTableServer_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Nt as useTelemetry, cn as useDocumentTitle, fs as useSettingsStore, hr as useToast, r as useUIStore, rt as useCredentialsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { ti as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DmygWc0W.js";
import { t as TimeAgo_default } from "./TimeAgo-DjW9pnWX.js";
import { o as CHAT_PROVIDER_SETTINGS_MODAL_KEY, v as providerDisplayNames } from "./constants-mCmg0XQZ.js";
import { t as useChatStore } from "./chat.store-iit3mf2V.js";
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
					default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("-", -1)])]),
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
	container: "_container_qsz2g_125",
	tableContainer: "_tableContainer_qsz2g_130",
	actions: "_actions_qsz2g_134",
	header: "_header_qsz2g_140",
	chatProvidersTable: "_chatProvidersTable_qsz2g_147",
	menuIcon: "_menuIcon_qsz2g_151",
	providerCell: "_providerCell_qsz2g_155"
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
	container: "_container_sw5ac_125",
	title: "_title_sw5ac_131"
};
var SettingsChatHubView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsChatHubView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsChatHubView_default as default };
