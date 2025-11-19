import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { E as N8nNotice_default, In as N8nText_default, Ln as N8nButton_default, M as N8nLogo_default, Pn as N8nHeading_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Cc as STORES, Qs as useRootStore, Tn as useDocumentTitle, fc as makeRestApiRequest, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { n as MCP_DOCS_PAGE_URL } from "./mcp.constants-BCNosk1p.js";
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
					createBaseVNode("ul", { class: normalizeClass(_ctx.$style["permission-list"]) }, [createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.listWorkflows")), 1), createBaseVNode("li", null, toDisplayString(unref(i18n).baseText("oauth.consentView.action.workflowDetails")), 1)], 2),
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
const overlay = "_overlay_1l93y_123";
const header = "_header_1l93y_149";
const logo = "_logo_1l93y_155";
const n8n = "_n8n_1l93y_164";
const content = "_content_1l93y_169";
const success = "_success_1l93y_176";
const footer = "_footer_1l93y_208";
var OAuthConsentView_vue_vue_type_style_index_0_lang_module_default = {
	overlay,
	"consent-dialog": "_consent-dialog_1l93y_136",
	header,
	logo,
	n8n,
	content,
	success,
	"text-content": "_text-content_1l93y_185",
	"permission-list": "_permission-list_1l93y_191",
	"docs-link": "_docs-link_1l93y_203",
	footer,
	"button-group": "_button-group_1l93y_218"
};
var OAuthConsentView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OAuthConsentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OAuthConsentView_vue_vue_type_style_index_0_lang_module_default }]]);
export { OAuthConsentView_default as default };
