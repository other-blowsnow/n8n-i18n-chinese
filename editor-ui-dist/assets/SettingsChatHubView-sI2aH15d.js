import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-D5rots3X.js";
import { $i as N8nIcon_default, Et as N8nOption_default, Mi as N8nTooltip_default, Qi as N8nButton_default, Ri as N8nActionBox_default, Rt as N8nActionToggle_default, Tt as N8nSelect_default, Yi as N8nHeading_default, Zi as N8nText_default, _ as N8nDataTableServer_default, zt as N8nLoading_default } from "./src-Bnic0IZ0.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { As as useSettingsStore, Hr as usePostHog, Tr as useToast, at as useCredentialsStore, en as useTelemetry, jr as useMessage, r as useUIStore, t as useUsersStore, vn as useDocumentTitle } from "./users.store-CzbeKDa-.js";
import { Kc as CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT, Xa as deepCopy, gi as chatHubVectorStoreProviderSchema, li as PROVIDER_CREDENTIAL_TYPE_MAP, pi as chatHubLLMProviderSchema, ui as VECTOR_STORE_PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-CvheVn3c.js";
import "./merge-BnWpgTIL.js";
import { N as storeToRefs, r as useRootStore } from "./_baseOrderBy-B6NURhS_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BPQ7Jg24.js";
import { t as CredentialIcon_default } from "./CredentialIcon-mzRTHyHp.js";
import { t as TimeAgo_default } from "./TimeAgo-BYbFokDV.js";
import { b as vectorStoreProviderDisplayNames, o as CHAT_PROVIDER_SETTINGS_MODAL_KEY, y as providerDisplayNames } from "./constants-CsI9wULx.js";
import { t as CredentialPicker_default } from "./CredentialPicker-BLH52hFz.js";
import { A as updateSemanticSearchSettingsApi, n as DEFAULT_SEMANTIC_SEARCH_SETTINGS, r as EMBEDDINGS_NODE_TYPE_MAP, t as useChatStore } from "./chat.store-B4SFIhDs.js";
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
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
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				size: "medium",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.providers.table.title")), 1)]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.chatHub.providers.table.refresh.tooltip") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					iconOnly: "",
					size: "small",
					icon: "refresh-cw",
					"aria-label": unref(i18n).baseText("generic.refresh"),
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresh"))
				}, null, 8, ["aria-label"])]),
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
			]))]))], 2);
		};
	}
});
var ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default = {
	tableContainer: "_tableContainer_1v1de_125",
	actions: "_actions_1v1de_129",
	header: "_header_1v1de_135",
	chatProvidersTable: "_chatProvidersTable_1v1de_142",
	menuIcon: "_menuIcon_1v1de_146",
	providerCell: "_providerCell_1v1de_150"
};
var ChatProvidersTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatProvidersTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatSemanticSearchSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSemanticSearchSettings",
	setup(__props) {
		const i18n = useI18n();
		const message = useMessage();
		const rootStore = useRootStore();
		const chatStore = useChatStore();
		const toast = useToast();
		const telemetry = useTelemetry();
		const settingsStore = useSettingsStore();
		const { semanticSearchReadiness } = storeToRefs(chatStore);
		const settings = ref(deepCopy(DEFAULT_SEMANTIC_SEARCH_SETTINGS));
		function trackSettingsUpdate(newSettings) {
			const vsCredEntered = !!newSettings.vectorStore.credentialId;
			const emCredEntered = !!newSettings.embeddingModel.credentialId;
			telemetry.track("User updated semantic search settings", {
				vector_store_provider: newSettings.vectorStore.provider,
				embedding_provider: newSettings.embeddingModel.provider,
				vector_store_credential_entered: vsCredEntered,
				embedding_credential_entered: emCredEntered,
				vector_store_credential_shared: vsCredEntered && semanticSearchReadiness.value.vectorStoreIssue !== "notShared",
				embedding_credential_shared: emCredEntered && semanticSearchReadiness.value.embeddingIssue !== "notShared"
			});
		}
		const vectorStoreCredentialType = computed(() => {
			const provider = settings.value.vectorStore.provider;
			return provider ? VECTOR_STORE_PROVIDER_CREDENTIAL_TYPE_MAP[provider] : void 0;
		});
		const embeddingProviderOptions = computed(() => chatHubLLMProviderSchema.options.filter((provider) => provider in EMBEDDINGS_NODE_TYPE_MAP));
		const vectorStoreTooltip = computed(() => {
			const issue = semanticSearchReadiness.value.vectorStoreIssue;
			if (!issue) return "";
			if (issue === "unspecified" || issue === "notFound") return i18n.baseText("settings.chatHub.vectorStore.missing");
			return i18n.baseText("settings.chatHub.vectorStore.notShared");
		});
		const embeddingTooltip = computed(() => {
			const issue = semanticSearchReadiness.value.embeddingIssue;
			if (!issue) return "";
			if (issue === "unspecified" || issue === "notFound") return i18n.baseText("settings.chatHub.embeddingModel.missing");
			return i18n.baseText("settings.chatHub.embeddingModel.notShared");
		});
		async function onVectorStoreProviderChange(provider) {
			if (provider === settings.value.vectorStore.provider) return;
			if (settings.value.vectorStore.credentialId) {
				if (await message.confirm(i18n.baseText("settings.chatHub.vectorStore.changeProvider.confirm.message"), i18n.baseText("settings.chatHub.vectorStore.changeProvider.confirm.title"), {
					confirmButtonText: i18n.baseText("settings.chatHub.vectorStore.changeProvider.confirm.button"),
					cancelButtonText: i18n.baseText("generic.cancel"),
					type: "warning"
				}) !== "confirm") return;
			}
			const newSettings = {
				...settings.value,
				vectorStore: {
					provider,
					credentialId: null
				}
			};
			try {
				await updateSemanticSearchSettingsApi(rootStore.restApiContext, newSettings);
				await settingsStore.getModuleSettings();
				trackSettingsUpdate(newSettings);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.chatHub.semanticSearch.save.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.chatHub.vectorStore.save.error"));
			}
		}
		async function onVectorStoreCredentialSelected(credentialId) {
			if (credentialId === settings.value.vectorStore.credentialId) return;
			const newSettings = {
				...settings.value,
				vectorStore: {
					...settings.value.vectorStore,
					credentialId
				}
			};
			try {
				await updateSemanticSearchSettingsApi(rootStore.restApiContext, newSettings);
				await settingsStore.getModuleSettings();
				trackSettingsUpdate(newSettings);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.chatHub.semanticSearch.save.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.chatHub.vectorStore.save.error"));
			}
		}
		async function onEmbeddingModelProviderChange(provider) {
			if (provider === settings.value.embeddingModel.provider) return;
			if (settings.value.embeddingModel.credentialId) {
				if (await message.confirm(i18n.baseText("settings.chatHub.embeddingModel.changeProvider.confirm.message"), i18n.baseText("settings.chatHub.embeddingModel.changeProvider.confirm.title"), {
					confirmButtonText: i18n.baseText("settings.chatHub.embeddingModel.changeProvider.confirm.button"),
					cancelButtonText: i18n.baseText("generic.cancel"),
					type: "warning"
				}) !== "confirm") return;
			}
			const newSettings = {
				...settings.value,
				embeddingModel: {
					provider,
					credentialId: null
				}
			};
			try {
				await updateSemanticSearchSettingsApi(rootStore.restApiContext, newSettings);
				await settingsStore.getModuleSettings();
				trackSettingsUpdate(newSettings);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.chatHub.semanticSearch.save.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.chatHub.embeddingModel.save.error"));
			}
		}
		async function onEmbeddingCredentialSelected(credentialId) {
			if (credentialId === settings.value.embeddingModel.credentialId) return;
			const newSettings = {
				...settings.value,
				embeddingModel: {
					...settings.value.embeddingModel,
					credentialId
				}
			};
			try {
				await updateSemanticSearchSettingsApi(rootStore.restApiContext, newSettings);
				await settingsStore.getModuleSettings();
				trackSettingsUpdate(newSettings);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("settings.chatHub.semanticSearch.save.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.chatHub.embeddingModel.save.error"));
			}
		}
		watch(() => settingsStore.moduleSettings["chat-hub"]?.semanticSearch, (newType) => {
			settings.value = newType ?? deepCopy(DEFAULT_SEMANTIC_SEARCH_SETTINGS);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nHeading_default), {
				size: "medium",
				bold: true,
				class: normalizeClass(_ctx.$style.sectionTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.semanticSearch.title")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.semanticSearchCard) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.semanticSearchRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowInfo) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabelRow) }, [createVNode(unref(N8nText_default), {
				bold: true,
				tag: "span",
				class: normalizeClass(_ctx.$style.rowLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.vectorStore.title")), 1)]),
				_: 1
			}, 8, ["class"]), unref(semanticSearchReadiness).vectorStoreIssue ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: vectorStoreTooltip.value
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.iconWarning),
					size: "large"
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "check",
				class: normalizeClass(_ctx.$style.iconReady),
				size: "large"
			}, null, 8, ["class"]))], 2), createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small",
				tag: "span",
				class: normalizeClass(_ctx.$style.rowDescription)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.vectorStore.description")), 1)]),
				_: 1
			}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowControls) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labeledControl) }, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				tag: "span",
				class: normalizeClass(_ctx.$style.controlLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.label.provider")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
				"model-value": settings.value.vectorStore.provider ?? unref(chatHubVectorStoreProviderSchema).options[0],
				size: "small",
				"onUpdate:modelValue": onVectorStoreProviderChange
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(chatHubVectorStoreProviderSchema).options, (option) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: option,
						value: option,
						label: unref(vectorStoreProviderDisplayNames)[option]
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.labeledControl) }, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				tag: "span",
				class: normalizeClass(_ctx.$style.controlLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.label.credential")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(CredentialPicker_default, {
				class: normalizeClass(_ctx.$style.credentialPicker),
				"app-name": "",
				"credential-type": vectorStoreCredentialType.value ?? "",
				"selected-credential-id": settings.value.vectorStore.credentialId,
				"create-button-variant": "subtle",
				onCredentialSelected: onVectorStoreCredentialSelected,
				onCredentialDeleted: _cache[0] || (_cache[0] = ($event) => onVectorStoreCredentialSelected(null))
			}, null, 8, [
				"class",
				"credential-type",
				"selected-credential-id"
			])], 2)], 2)], 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.semanticSearchRow, _ctx.$style.semanticSearchRowBordered]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowInfo) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowLabelRow) }, [createVNode(unref(N8nText_default), {
				bold: true,
				tag: "span",
				class: normalizeClass(_ctx.$style.rowLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.embeddingModel.title")), 1)]),
				_: 1
			}, 8, ["class"]), unref(semanticSearchReadiness).embeddingIssue ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: embeddingTooltip.value
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.iconWarning),
					size: "large"
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "check",
				class: normalizeClass(_ctx.$style.iconReady),
				size: "large"
			}, null, 8, ["class"]))], 2), createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small",
				tag: "span",
				class: normalizeClass(_ctx.$style.rowDescription)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.embeddingModel.description")), 1)]),
				_: 1
			}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowControls) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.labeledControl) }, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				tag: "span",
				class: normalizeClass(_ctx.$style.controlLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.label.provider")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nSelect_default), {
				"model-value": settings.value.embeddingModel.provider ?? embeddingProviderOptions.value[0],
				size: "small",
				class: normalizeClass(_ctx.$style.typeSelect),
				"onUpdate:modelValue": onEmbeddingModelProviderChange
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(embeddingProviderOptions.value, (option) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: option,
						value: option,
						label: unref(providerDisplayNames)[option]
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value", "class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.labeledControl) }, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				tag: "span",
				class: normalizeClass(_ctx.$style.controlLabel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub.label.credential")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(CredentialPicker_default, {
				class: normalizeClass(_ctx.$style.credentialPicker),
				"app-name": "",
				"credential-type": settings.value.embeddingModel.provider ? unref(PROVIDER_CREDENTIAL_TYPE_MAP)[settings.value.embeddingModel.provider] : "",
				"selected-credential-id": settings.value.embeddingModel.credentialId,
				"create-button-variant": "subtle",
				onCredentialSelected: onEmbeddingCredentialSelected,
				onCredentialDeleted: _cache[1] || (_cache[1] = ($event) => onEmbeddingCredentialSelected(null))
			}, null, 8, [
				"class",
				"credential-type",
				"selected-credential-id"
			])], 2)], 2)], 2)], 2)], 2);
		};
	}
});
var ChatSemanticSearchSettings_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_7hu11_125",
	sectionTitle: "_sectionTitle_7hu11_131",
	semanticSearchCard: "_semanticSearchCard_7hu11_135",
	semanticSearchRow: "_semanticSearchRow_7hu11_141",
	semanticSearchRowBordered: "_semanticSearchRowBordered_7hu11_148",
	rowInfo: "_rowInfo_7hu11_152",
	rowLabelRow: "_rowLabelRow_7hu11_159",
	rowLabel: "_rowLabel_7hu11_159",
	rowDescription: "_rowDescription_7hu11_169",
	rowControls: "_rowControls_7hu11_173",
	labeledControl: "_labeledControl_7hu11_180",
	controlLabel: "_controlLabel_7hu11_186",
	credentialPicker: "_credentialPicker_7hu11_190",
	iconReady: "_iconReady_7hu11_194",
	iconWarning: "_iconWarning_7hu11_198"
};
var ChatSemanticSearchSettings_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatSemanticSearchSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSemanticSearchSettings_vue_vue_type_style_index_0_lang_module_default }]]);
var SettingsChatHubView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsChatHubView",
	setup(__props) {
		const i18n = useI18n();
		const posthogStore = usePostHog();
		const isSemanticSearchEnabled = computed(() => posthogStore.isVariantEnabled(CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.name, CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.variant));
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.chatHub")), 1)]),
					_: 1
				}),
				createVNode(ChatProvidersTable_default, {
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
				]),
				isSemanticSearchEnabled.value ? (openBlock(), createBlock(ChatSemanticSearchSettings_default, { key: 0 })) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default = { container: "_container_4yxsr_125" };
var SettingsChatHubView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsChatHubView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsChatHubView_default as default };
