import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { c as I18nT, s as useI18n } from "./src-DQKWamAF.js";
import { Da as N8nText_default, Ki as N8nActionBox_default, Lt as N8nActionToggle_default, Oa as N8nButton_default, Ta as N8nHeading_default, ct as N8nLink_default, jt as N8nCard_default, wt as N8nPagination_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-CXPRr-RB.js";
import { n as ElRow, t as ElCol } from "./col-BbzwFsPK.js";
import { t as useToast } from "./useToast-fCpp7iAn.js";
import { f as DOCS_DOMAIN, hc as DateTime } from "./constants-DIP3enMx.js";
import { D as storeToRefs, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { t as useSettingsStore } from "./settings.store-B-RgkKfn.js";
import { f as useUIStore, p as useTelemetry, x as API_KEY_CREATE_OR_EDIT_MODAL_KEY } from "./users.store-0wV1ayWS.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-D136cKhi.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DHNMIZmg.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DcTMehDT.js";
import { t as useApiKeysStore } from "./apiKeys.store-D48r_wa2.js";
//#region src/features/settings/apiKeys/components/ApiKeyCard.vue?vue&type=script&setup=true&lang.ts
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
		const cardActions = ref(null);
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
					ref: cardActions,
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
var ApiKeyCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApiKeyCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApiKeyCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=script&setup=true&lang.ts
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
		const { fetchApiKeys, setPage, deleteApiKey, getApiKeyAvailableScopes } = apiKeysStore;
		const { apiKeys, apiKeysCount, page, pageSize } = storeToRefs(apiKeysStore);
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
				await Promise.all([fetchApiKeys(), getApiKeyAvailableScopes()]);
			} catch (error) {
				showError(error, i18n.baseText("settings.api.view.error"));
			} finally {
				loading.value = false;
			}
		}
		async function onPageChange(newPage) {
			try {
				loading.value = true;
				await setPage(newPage);
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
				unref(isPublicApiEnabled) && unref(apiKeys).length ? (openBlock(), createElementBlock("p", {
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.apiKeysContainer) }, [unref(apiKeys).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(apiKeys), (apiKey, index) => {
					return openBlock(), createBlock(unref(ElRow), {
						key: apiKey.id,
						gutter: 10,
						class: normalizeClass([{ [_ctx.$style.destinationItem]: index !== unref(apiKeys).length - 1 }])
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
				unref(apiKeysCount) > unref(pageSize) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.pagination)
				}, [createVNode(unref(N8nPagination_default), {
					"current-page": unref(page),
					"page-size": unref(pageSize),
					total: unref(apiKeysCount),
					layout: "total, prev, pager, next",
					"data-test-id": "api-keys-pagination",
					onCurrentChange: onPageChange
				}, null, 8, [
					"current-page",
					"page-size",
					"total"
				])], 2)) : createCommentVNode("", true),
				unref(isPublicApiEnabled) && unref(apiKeys).length ? (openBlock(), createElementBlock("div", {
					key: 2,
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
				createBaseVNode("div", _hoisted_3, [unref(isPublicApiEnabled) && unref(apiKeys).length ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					size: "large",
					onClick: onCreateApiKey
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.button")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				!unref(isPublicApiEnabled) && unref(cloudPlanStore).userIsTrialing ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 3,
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
				unref(isPublicApiEnabled) && !unref(apiKeys).length ? (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 4,
					"button-text": unref(i18n).baseText(loading.value ? "settings.api.create.button.loading" : "settings.api.create.button"),
					description: unref(i18n).baseText("settings.api.create.description"),
					"onClick:button": onCreateApiKey
				}, null, 8, ["button-text", "description"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/apiKeys/views/SettingsApiView.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_14dku_125";
var card = "_card_14dku_135";
var destinationItem = "_destinationItem_14dku_139";
var topHint = "_topHint_14dku_150";
var BottomHint = "_BottomHint_14dku_161";
var apiKeysContainer = "_apiKeysContainer_14dku_166";
var pagination = "_pagination_14dku_173";
var SettingsApiView_vue_vue_type_style_index_0_lang_module_default = {
	header,
	card,
	destinationItem,
	"delete": "_delete_14dku_143",
	topHint,
	BottomHint,
	apiKeysContainer,
	pagination
};
var SettingsApiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsApiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsApiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsApiView_default as default };
