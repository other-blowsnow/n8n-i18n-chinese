import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { B as N8nNotice_default, Bi as N8nButton_default, Hi as N8nIcon_default, Li as N8nHeading_default, q as N8nLogo_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { cn as useDocumentTitle, hr as useToast, xc as STORES } from "./users.store-qBZsmf9-.js";
import "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { A as defineStore, d as makeRestApiRequest, r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import { a as MCP_DOCS_PAGE_URL } from "./mcp.constants-KkEUiiK2.js";
async function getConsentDetails(context) {
	return await makeRestApiRequest(context, "GET", "/consent/details");
}
async function approveConsent(context, approved) {
	return await makeRestApiRequest(context, "POST", "/consent/approve", { approved });
}
const useConsentStore = defineStore(STORES.CONSENT, () => {
	const consentDetails = ref(null);
	const isLoading = ref(false);
	const error = ref(null);
	const rootStore = useRootStore();
	const fetchConsentDetails = async () => {
		isLoading.value = true;
		error.value = null;
		try {
			consentDetails.value = await getConsentDetails(rootStore.restApiContext);
			return consentDetails.value;
		} catch (err) {
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
	};
	return {
		fetchConsentDetails,
		approveConsent: approveConsent$1,
		resetState,
		consentDetails,
		isLoading,
		error
	};
});
var OAuthConsentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthConsentView",
	setup(__props) {
		const ANTHROPIC_CLIENTS = ["claude", "mcp inspector"];
		const LOVABLE_CLIENTS = ["lovable"];
		const consentStore = useConsentStore();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const waitingForRedirect = ref(false);
		const error = computed(() => consentStore.error);
		const loading = computed(() => consentStore.isLoading);
		const clentDetails = computed(() => consentStore.consentDetails);
		const clientIcon = computed(() => {
			const clientName = clentDetails.value?.clientName?.toLowerCase() ?? "";
			if (ANTHROPIC_CLIENTS.some((name) => clientName.includes(name))) return "anthropic";
			else if (LOVABLE_CLIENTS.some((name) => clientName.includes(name))) return "lovable";
			else return "mcp";
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
				const response = await consentStore.approveConsent(false);
				window.location.href = response.redirectUrl;
			} catch (err) {
				toast.showError(err, i18n.baseText("oauth.consentView.error.deny"));
			}
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
						icon: clientIcon.value,
						size: "xlarge",
						color: "text-dark"
					}, null, 8, ["icon"])], 2)
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
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "consent-content"
				}, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.heading", { interpolate: { clientName: clentDetails.value?.clientName ?? "" } })), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style["text-content"]) }, [
					createVNode(unref(N8nText_default), {
						color: "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("oauth.consentView.description", { interpolate: { clientName: clentDetails.value?.clientName ?? "" } })), 1)]),
						_: 1
					}),
					createBaseVNode("ul", { class: normalizeClass(_ctx.$style["permission-list"]) }, [
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.listWorkflows")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.workflowDetails")), 1),
						createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.executeWorkflows")), 1)
					], 2),
					createBaseVNode("p", { class: normalizeClass(_ctx.$style["docs-link"]) }, [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("oauth.consentView.readMore", { interpolate: { docsUrl: unref(MCP_DOCS_PAGE_URL) } })]])], 2)
				], 2)], 2)),
				!waitingForRedirect.value ? (openBlock(), createElementBlock("footer", {
					key: 2,
					class: normalizeClass(_ctx.$style.footer)
				}, [error.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					theme: "danger",
					"data-test-id": "consent-error-notice",
					content: error.value
				}, null, 8, ["content"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style["button-group"]) }, [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					"data-test-id": "consent-deny-button",
					size: "large",
					loading: loading.value,
					disabled: loading.value || error.value !== null,
					onClick: handleDeny
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.deny")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"]), createVNode(unref(N8nButton_default), {
					type: "primary",
					"data-test-id": "consent-allow-button",
					size: "large",
					loading: loading.value,
					disabled: loading.value || error.value !== null,
					onClick: handleAllow
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.allow")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])], 2)], 2)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
const overlay = "_overlay_k3net_125";
const header = "_header_k3net_151";
const logo = "_logo_k3net_157";
const n8n = "_n8n_k3net_166";
const content = "_content_k3net_171";
const success = "_success_k3net_178";
const footer = "_footer_k3net_210";
var OAuthConsentView_vue_vue_type_style_index_0_lang_module_default = {
	overlay,
	"consent-dialog": "_consent-dialog_k3net_138",
	header,
	logo,
	n8n,
	content,
	success,
	"text-content": "_text-content_k3net_187",
	"permission-list": "_permission-list_k3net_193",
	"docs-link": "_docs-link_k3net_205",
	footer,
	"button-group": "_button-group_k3net_220"
};
var OAuthConsentView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OAuthConsentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthConsentView_vue_vue_type_style_index_0_lang_module_default }]]);
export { OAuthConsentView_default as default };
