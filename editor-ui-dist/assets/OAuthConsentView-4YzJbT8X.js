import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CfxRLJPc.js";
import { $ as N8nLogo_default, Ga as N8nHeading_default, Ja as N8nButton_default, Ka as N8nCallout_default, W as N8nNotice_default, Ya as N8nIcon_default, qa as N8nText_default, yt as Checkbox_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-D_P6PEhU.js";
import { T as defineStore, a as ResponseError, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-DORNi26-.js";
import { Vn as STORES } from "./settings.store-BSo6Wkgz.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DpX7vWN0.js";
import { r as MCP_DOCS_PAGE_URL } from "./mcp.constants-BT39eBzp.js";
//#region ../@n8n/rest-api-client/dist/api/consent.mjs
async function getConsentDetails(context) {
	return await makeRestApiRequest(context, "GET", "/consent/details");
}
async function approveConsent(context, approved) {
	return await makeRestApiRequest(context, "POST", "/consent/approve", { approved });
}
//#endregion
//#region src/app/stores/consent.store.ts
var useConsentStore = defineStore(STORES.CONSENT, () => {
	const consentDetails = ref(null);
	const isLoading = ref(false);
	const error = ref(null);
	const errorCode = ref(null);
	const rootStore = useRootStore();
	const fetchConsentDetails = async () => {
		isLoading.value = true;
		error.value = null;
		errorCode.value = null;
		try {
			consentDetails.value = await getConsentDetails(rootStore.restApiContext);
			return consentDetails.value;
		} catch (err) {
			if (err instanceof ResponseError && err.httpStatusCode === 422) errorCode.value = "resource_unavailable";
			else if (err instanceof ResponseError && err.httpStatusCode === 403) errorCode.value = "forbidden";
			error.value = err instanceof Error ? err.message : "Failed to load consent details";
			throw err;
		} finally {
			isLoading.value = false;
		}
	};
	const approveConsent$1 = async (approved) => {
		isLoading.value = true;
		error.value = null;
		try {
			return await approveConsent(rootStore.restApiContext, approved);
		} catch (err) {
			error.value = err instanceof Error ? err.message : "Failed to process consent";
			throw err;
		} finally {
			isLoading.value = false;
		}
	};
	const resetState = () => {
		consentDetails.value = null;
		isLoading.value = false;
		error.value = null;
		errorCode.value = null;
	};
	return {
		fetchConsentDetails,
		approveConsent: approveConsent$1,
		resetState,
		consentDetails,
		isLoading,
		error,
		errorCode
	};
});
//#endregion
//#region src/app/views/OAuthConsentView.vue?vue&type=script&setup=true&lang.ts
var OAuthConsentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthConsentView",
	setup(__props) {
		const consentStore = useConsentStore();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const waitingForRedirect = ref(false);
		const redirectUriTrusted = ref(false);
		const error = computed(() => consentStore.error);
		const loading = computed(() => consentStore.isLoading);
		const resourceName = computed(() => consentStore.consentDetails?.resourceName);
		const errorMessage = computed(() => {
			if (consentStore.errorCode === "resource_unavailable") return i18n.baseText("oauth.consentView.error.resourceUnavailable");
			else if (consentStore.errorCode === "forbidden") return i18n.baseText("oauth.consentView.error.insufficientScope");
			return consentStore.error;
		});
		const clientDetails = computed(() => consentStore.consentDetails);
		const allowDisabled = computed(() => loading.value || error.value !== null || !clientDetails.value || !redirectUriTrusted.value);
		watch(() => clientDetails.value?.redirectUri, () => {
			redirectUriTrusted.value = false;
		});
		const handleAllow = async () => {
			try {
				const response = await consentStore.approveConsent(true);
				waitingForRedirect.value = true;
				window.location.href = response.redirectUrl;
			} catch (err) {
				toast.showError(err, i18n.baseText("oauth.consentView.error.allow"));
			}
		};
		const handleDeny = async () => {
			try {
				await consentStore.approveConsent(false);
				window.location.href = window.BASE_PATH ?? "/";
			} catch (err) {
				toast.showError(err, i18n.baseText("oauth.consentView.error.deny"));
			}
		};
		const handleClose = () => {
			window.location.href = window.BASE_PATH ?? "/";
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("oauth.consentView.title"));
			try {
				await consentStore.fetchConsentDetails();
			} catch (err) {
				toast.showError(err, i18n.baseText("oauth.consentView.error.fetchDetails"));
			}
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.overlay) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["consent-dialog"]) }, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.logo, _ctx.$style.n8n]) }, [createVNode(unref(N8nLogo_default), {
						size: "small",
						collapsed: true,
						"release-channel": "stable"
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.arrow) }, [createVNode(unref(N8nIcon_default), {
						icon: "arrow-right",
						size: "large",
						color: "text-light"
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.logo) }, [createVNode(unref(N8nIcon_default), {
						icon: "mcp",
						size: "xlarge",
						color: "text-dark"
					})], 2)
				], 2),
				waitingForRedirect.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.success),
					"data-test-id": "consent-success-screen"
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.success.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.success.description")), 1)]),
					_: 1
				})], 2)) : error.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "consent-error"
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.error.heading")), 1)]),
					_: 1
				}), createVNode(unref(N8nNotice_default), {
					theme: "danger",
					"data-test-id": "consent-error-notice",
					content: errorMessage.value ?? ""
				}, null, 8, ["content"])], 2)) : (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "consent-content"
				}, [resourceName.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.headingWithWorkflow", { interpolate: {
						clientName: clientDetails.value?.clientName ?? "",
						resourceName: resourceName.value
					} })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 1,
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.heading", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
					_: 1
				})), createBaseVNode("div", { class: normalizeClass(_ctx.$style["text-content"]) }, [
					resourceName.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.descriptionWithWorkflow", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.description", { interpolate: { clientName: clientDetails.value?.clientName ?? "" } })), 1)]),
						_: 1
					})),
					!resourceName.value ? (openBlock(), createElementBlock("ul", {
						key: 2,
						class: normalizeClass(_ctx.$style["permission-list"])
					}, [
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.listWorkflows")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.workflowDetails")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.executeWorkflows")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.executionDetails")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.createUpdateWorkflows")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.createDataTables")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.searchProjectsAndFolders")), 1)
					], 2)) : createCommentVNode("", true),
					createBaseVNode("p", { class: normalizeClass(_ctx.$style["docs-link"]) }, [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("oauth.consentView.readMore", { interpolate: { docsUrl: unref(MCP_DOCS_PAGE_URL) } })]])], 2),
					clientDetails.value?.redirectUri ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 3,
						theme: "warning",
						class: normalizeClass(_ctx.$style["redirect-warning"]),
						"data-test-id": "consent-redirect-warning"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["redirect-warning-content"]) }, [
							createVNode(unref(N8nText_default), { bold: true }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.redirectWarning.title")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								bold: true,
								class: normalizeClass(_ctx.$style["redirect-warning-url"]),
								"data-test-id": "consent-redirect-uri"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(clientDetails.value.redirectUri), 1)]),
								_: 1
							}, 8, ["class"]),
							createVNode(unref(Checkbox_default), {
								modelValue: redirectUriTrusted.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => redirectUriTrusted.value = $event),
								label: unref(i18n).baseText("oauth.consentView.redirectWarning.confirm")
							}, null, 8, ["modelValue", "label"])
						], 2)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)),
				!waitingForRedirect.value ? (openBlock(), createElementBlock("footer", {
					key: 3,
					class: normalizeClass(_ctx.$style.footer)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["button-group"]) }, [error.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					"data-test-id": "consent-close-button",
					size: "large",
					onClick: handleClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "consent-deny-button",
					size: "large",
					loading: loading.value,
					disabled: loading.value,
					onClick: handleDeny
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.deny")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					"data-test-id": "consent-allow-button",
					size: "large",
					loading: loading.value,
					disabled: allowDisabled.value,
					onClick: handleAllow
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.allow")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])], 64))], 2)], 2)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
//#endregion
//#region src/app/views/OAuthConsentView.vue?vue&type=style&index=0&lang.module.scss
var overlay = "_overlay_uvefl_125";
var header = "_header_uvefl_151";
var logo = "_logo_uvefl_157";
var n8n = "_n8n_uvefl_166";
var content = "_content_uvefl_171";
var success = "_success_uvefl_178";
var footer = "_footer_uvefl_224";
var OAuthConsentView_vue_vue_type_style_index_0_lang_module_default = {
	overlay,
	"consent-dialog": "_consent-dialog_uvefl_138",
	header,
	logo,
	n8n,
	content,
	success,
	"text-content": "_text-content_uvefl_187",
	"permission-list": "_permission-list_uvefl_193",
	"docs-link": "_docs-link_uvefl_205",
	"redirect-warning": "_redirect-warning_uvefl_210",
	"redirect-warning-content": "_redirect-warning-content_uvefl_214",
	"redirect-warning-url": "_redirect-warning-url_uvefl_220",
	footer,
	"button-group": "_button-group_uvefl_234"
};
var OAuthConsentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OAuthConsentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthConsentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { OAuthConsentView_default as default };
