import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Hi as N8nButton_default, Pi as N8nActionBox_default, Tt as N8nActionToggle_default, Vi as N8nText_default, bt as N8nCard_default, gi as N8nLink_default, zi as N8nHeading_default } from "./src-6rUDOvr2.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Lt as useTelemetry, Ta as API_KEY_CREATE_OR_EDIT_MODAL_KEY, Tr as useMessage, fn as useDocumentTitle, lr as useCloudPlanStore, r as useUIStore, ws as useSettingsStore, yr as useToast } from "./users.store-B-dhu6_V.js";
import { n as ElRow, t as ElCol } from "./col-DdxpScQC.js";
import { Ss as MODAL_CONFIRM, h as DOCS_DOMAIN, oo as DateTime } from "./constants-DM6W84kp.js";
import "./merge-PRabpGkI.js";
import { N as storeToRefs, r as useRootStore } from "./_baseOrderBy-B5_tDn8L.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dey-FBeQ.js";
import "./versions.store-Ab008Wjp.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-CPm-PPft.js";
import { t as useApiKeysStore } from "./apiKeys.store-BbDB49YA.js";
var ApiKeyCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApiKeyCard",
	props: { apiKey: {} },
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const API_KEY_ITEM_ACTIONS = {
			EDIT: "edit",
			DELETE: "delete"
		};
		const ACTION_LIST = [{
			label: "Edit",
			value: API_KEY_ITEM_ACTIONS.EDIT
		}, {
			label: "Delete",
			value: API_KEY_ITEM_ACTIONS.DELETE
		}];
		const i18n = useI18n();
		const cardActions$1 = ref(null);
		const props = __props;
		const emit = __emit;
		async function onAction(action) {
			if (action === API_KEY_ITEM_ACTIONS.EDIT) emit("edit", props.apiKey.id);
			else if (action === API_KEY_ITEM_ACTIONS.DELETE) emit("delete", props.apiKey.id);
		}
		const hasApiKeyExpired = (apiKey) => {
			if (!apiKey.expiresAt) return false;
			return apiKey.expiresAt <= Date.now() / 1e3;
		};
		const getExpirationTime = (apiKey) => {
			if (!apiKey.expiresAt) return i18n.baseText("settings.api.neverExpires");
			if (hasApiKeyExpired(apiKey)) return i18n.baseText("settings.api.expired");
			const time = DateTime.fromSeconds(apiKey.expiresAt).toFormat("ccc, MMM d yyyy");
			return i18n.baseText("settings.api.expirationTime", { interpolate: { time } });
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "api-key-card",
				onClick: _cache[0] || (_cache[0] = ($event) => onAction("edit"))
			}, {
				header: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.apiKey.label), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.cardDescription]) }, [createVNode(unref(N8nText_default), {
					color: !hasApiKeyExpired(__props.apiKey) ? "text-light" : "warning",
					size: "small"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(getExpirationTime(__props.apiKey)), 1)]),
					_: 1
				}, 8, ["color"])], 2)]), __props.apiKey.apiKey.includes("*") ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.cardApiKey)
				}, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.apiKey.apiKey), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)]),
				append: withCtx(() => [createBaseVNode("div", {
					ref_key: "cardActions",
					ref: cardActions$1,
					class: normalizeClass(_ctx.$style.cardActions)
				}, [createVNode(unref(N8nActionToggle_default), {
					actions: ACTION_LIST,
					theme: "dark",
					onAction
				})], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ApiKeyCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_ec33a_125",
	cardHeading: "_cardHeading_ec33a_135",
	cardDescription: "_cardDescription_ec33a_142",
	cardActions: "_cardActions_ec33a_149",
	cardApiKey: "_cardApiKey_ec33a_158"
};
var ApiKeyCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ApiKeyCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyCard_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["textContent"];
var _hoisted_2 = ["textContent"];
var _hoisted_3 = { class: "mt-m text-right" };
var SettingsApiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsApiView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const cloudPlanStore = useCloudPlanStore();
		const { showError, showMessage } = useToast();
		const { confirm } = useMessage();
		const documentTitle = useDocumentTitle();
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const loading = ref(false);
		const apiKeysStore = useApiKeysStore();
		const { getAndCacheApiKeys, deleteApiKey, getApiKeyAvailableScopes } = apiKeysStore;
		const { apiKeysSortByCreationDate } = storeToRefs(apiKeysStore);
		const { isSwaggerUIEnabled, publicApiPath, publicApiLatestVersion } = settingsStore;
		const { baseUrl } = useRootStore();
		const { isPublicApiEnabled } = settingsStore;
		const apiDocsURL = ref("");
		const onCreateApiKey = async () => {
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
			await getApiKeysAndScopes();
		});
		function onUpgrade() {
			goToUpgrade("settings-n8n-api", "upgrade-api", "redirect");
		}
		async function getApiKeysAndScopes() {
			try {
				loading.value = true;
				await Promise.all([getAndCacheApiKeys(), getApiKeyAvailableScopes()]);
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		async function onDelete(id) {
			if (await confirm(i18n.baseText("settings.api.delete.description"), i18n.baseText("settings.api.delete.title"), {
				confirmButtonText: i18n.baseText("settings.api.delete.button"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) === "confirm") try {
				await deleteApiKey(id);
				showMessage({
					title: i18n.baseText("settings.api.delete.toast"),
					type: "success"
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.api.delete.error"));
			} finally {
				telemetry.track("User clicked delete API key button");
			}
		}
		function onEdit(id) {
			uiStore.openModalWithData({
				name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
				data: {
					mode: "edit",
					activeId: id
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api")), 1)]),
					_: 1
				})], 2),
				unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.topHint)
				}, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.api.view.info",
						tag: "span",
						scope: "global"
					}, {
						apiAction: withCtx(() => [createBaseVNode("a", {
							"data-test-id": "api-docs-link",
							href: "https://docs.n8n.io/api",
							target: "_blank",
							textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.api"))
						}, null, 8, _hoisted_1)]),
						webhookAction: withCtx(() => [createBaseVNode("a", {
							"data-test-id": "webhook-docs-link",
							href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
							target: "_blank",
							textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.webhook"))
						}, null, 8, _hoisted_2)]),
						_: 1
					})]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.apiKeysContainer) }, [unref(apiKeysSortByCreationDate).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(apiKeysSortByCreationDate), (apiKey, index) => {
					return openBlock(), createBlock(unref(ElRow), {
						key: apiKey.id,
						gutter: 10,
						class: normalizeClass([{ [_ctx.$style.destinationItem]: index !== unref(apiKeysSortByCreationDate).length - 1 }])
					}, {
						default: withCtx(() => [createVNode(unref(ElCol), null, {
							default: withCtx(() => [createVNode(ApiKeyCard_default, {
								"api-key": apiKey,
								onDelete,
								onEdit
							}, null, 8, ["api-key"])]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["class"]);
				}), 128)) : createCommentVNode("", true)], 2),
				unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.BottomHint)
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.api.view.${unref(settingsStore).isSwaggerUIEnabled ? "tryapi" : "more-details"}`)), 1)]),
						_: 1
					}),
					_cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ", -1)),
					unref(isSwaggerUIEnabled) ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 0,
						"data-test-id": "api-playground-link",
						to: apiDocsURL.value,
						"new-window": true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.view.apiPlayground")), 1)]),
						_: 1
					}, 8, ["to"])) : (openBlock(), createBlock(unref(N8nLink_default), {
						key: 1,
						"data-test-id": "api-endpoint-docs-link",
						to: apiDocsURL.value,
						"new-window": true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.api.view.external-docs`)), 1)]),
						_: 1
					}, 8, ["to"]))
				], 2)) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_3, [unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					size: "large",
					onClick: onCreateApiKey
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.button")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				!unref(isPublicApiEnabled) && unref(cloudPlanStore).userIsTrialing ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 2,
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
				unref(isPublicApiEnabled) && !unref(apiKeysSortByCreationDate).length ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 3,
					"button-text": unref(i18n).baseText(loading.value ? "settings.api.create.button.loading" : "settings.api.create.button"),
					description: unref(i18n).baseText("settings.api.create.description"),
					"onClick:button": onCreateApiKey
				}, null, 8, ["button-text", "description"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
const header = "_header_g9f1h_125";
const card = "_card_g9f1h_135";
const destinationItem = "_destinationItem_g9f1h_139";
const topHint = "_topHint_g9f1h_150";
const BottomHint = "_BottomHint_g9f1h_161";
const apiKeysContainer = "_apiKeysContainer_g9f1h_166";
var SettingsApiView_vue_vue_type_style_index_0_lang_module_default = {
	header,
	card,
	destinationItem,
	"delete": "_delete_g9f1h_143",
	topHint,
	BottomHint,
	apiKeysContainer
};
var SettingsApiView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsApiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsApiView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsApiView_default as default };
