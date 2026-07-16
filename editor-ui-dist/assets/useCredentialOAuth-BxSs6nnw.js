import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-CEUyFjtd.js";
import { t as useToast } from "./useToast-CYomjipa.js";
import { Ac as displayParameter, Xc as mergeNodeProperties, _s as createResultError, vs as createResultOk } from "./constants-BaNoJas_.js";
import { at as useCredentialsStore, cn as useWorkflowsStore, xn as useProjectsStore } from "./workflowDocument.store-LDfI_CPs.js";
import { t as useRootStore } from "./useRootStore-DORNi26-.js";
import { p as useTelemetry } from "./users.store-CHh4wCL_.js";
//#region src/features/credentials/composables/oauthCallback.ts
var OAUTH_CALLBACK_SUCCESS = "success";
var OAUTH_CALLBACK_ERROR = "error";
/**
* The OAuth callback page is served by the n8n backend and notifies the editor
* UI that the flow finished. It signals completion over two channels:
*
* - `BroadcastChannel('oauth-callback')` — works when the callback page and the
*   editor share the same origin.
* - `window.opener.postMessage` — needed for embed setups where the editor and
*   the n8n backend are served from different origins, which `BroadcastChannel`
*   cannot bridge.
*
* Because any page can post a message to `window`, the `window` path must be
* validated against the origins we trust (the current page and the configured
* n8n editor base URL) and against the known payloads.
*/
function getTrustedOAuthOrigins(editorBaseUrl) {
	const origins = new Set([window.location.origin]);
	try {
		origins.add(new URL(editorBaseUrl, window.location.origin).origin);
	} catch {}
	return [...origins];
}
/**
* Validate an incoming `window` `message` event and return the OAuth result it
* carries, or `null` when the event should be ignored (untrusted origin or an
* unrelated payload).
*/
function parseOAuthCallbackMessage(event, trustedOrigins) {
	if (!trustedOrigins.includes(event.origin)) return null;
	if (event.data === "success") return OAUTH_CALLBACK_SUCCESS;
	if (event.data === "error") return OAUTH_CALLBACK_ERROR;
	return null;
}
//#endregion
//#region src/features/credentials/composables/useCredentialOAuth.ts
/**
* Composable for OAuth credential type detection and authorization.
* Used by NodeCredentials for the quick connect OAuth flow.
*/
function useCredentialOAuth() {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const workflowsStore = useWorkflowsStore();
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const oauthAbortController = ref(null);
	const pendingCredentialId = ref(null);
	/**
	* Get parent types for a credential type (e.g., googleSheetsOAuth2Api extends googleOAuth2Api extends oAuth2Api).
	*/
	function getParentTypes(credentialTypeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(credentialTypeName)) return [];
		visited.add(credentialTypeName);
		const type = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (type?.extends === void 0) return [];
		const types = [];
		for (const typeName of type.extends) {
			types.push(typeName);
			types.push(...getParentTypes(typeName, visited));
		}
		return types;
	}
	/**
	* Check if a credential type is an OAuth type (extends oAuth2Api or oAuth1Api).
	*/
	function isOAuthCredentialType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "oAuth2Api" || credentialTypeName === "oAuth1Api" || parentTypes.includes("oAuth2Api") || parentTypes.includes("oAuth1Api");
	}
	/**
	* Check if a credential type is Google OAuth (extends googleOAuth2Api).
	*/
	function isGoogleOAuthType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "googleOAuth2Api" || parentTypes.includes("googleOAuth2Api");
	}
	/**
	* Check if an OAuth credential type has all required fields managed/overwritten.
	* This indicates the credential can be used with quick connect (just OAuth flow, no manual config).
	* Reuses logic patterns from CredentialEdit.vue (credentialProperties + requiredPropertiesFilled).
	*/
	function canOAuthCredentialQuickConnect(credentialTypeName) {
		if (!isOAuthCredentialType(credentialTypeName)) return false;
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return false;
		if (credentialType.__skipManagedCreation) return false;
		const overwrittenProperties = credentialType.__overwrittenProperties ?? [];
		const nonOverwrittenConfigurableProperties = getManuallyConfigurableProperties(credentialType).filter((prop) => !overwrittenProperties.includes(prop.name));
		if (nonOverwrittenConfigurableProperties.length === 0) return true;
		if (overwrittenProperties.length === 0) return false;
		return nonOverwrittenConfigurableProperties.every((prop) => prop.required !== true || prop.type !== "string" && prop.type !== "number");
	}
	/**
	* Returns properties the user must fill in. Walks the extends chain so
	* inherited fields (e.g. `clientId`/`clientSecret` from `oAuth2Api`) are
	* considered, and applies `displayOptions` against the effective defaults
	* — matching the credential edit modal's `credentialProperties` /
	* `displayCredentialParameter` logic.
	*/
	function getManuallyConfigurableProperties(credentialType) {
		const mergedProperties = getMergedCredentialProperties(credentialType.name);
		const defaults = {};
		for (const prop of mergedProperties) defaults[prop.name] = prop.default;
		return mergedProperties.filter((prop) => {
			if (prop.type === "hidden" || prop.type === "notice") return false;
			return displayParameter(defaults, prop, null, null);
		});
	}
	function getMergedCredentialProperties(credentialTypeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(credentialTypeName)) return [];
		visited.add(credentialTypeName);
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return [];
		if (credentialType.extends === void 0) return credentialType.properties;
		const merged = [];
		for (const parentName of credentialType.extends) mergeNodeProperties(merged, getMergedCredentialProperties(parentName, visited));
		mergeNodeProperties(merged, credentialType.properties);
		return merged;
	}
	function hasManualCredentialInputFields(credentialType) {
		return getManuallyConfigurableProperties(credentialType).length > 0;
	}
	async function getOAuthAuthorizationUrl(credential) {
		const parentTypes = getParentTypes(credential.type);
		try {
			if (credential.type === "oAuth2Api" || parentTypes.includes("oAuth2Api")) return createResultOk(await credentialsStore.oAuth2Authorize(credential));
			if (credential.type === "oAuth1Api" || parentTypes.includes("oAuth1Api")) return createResultOk(await credentialsStore.oAuth1Authorize(credential));
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.generateAuthorizationUrl.title"));
			return createResultError("api-error");
		}
		return createResultError("no-url");
	}
	function isValidHttpUrl(url) {
		try {
			const parsed = new URL(url);
			return ["http:", "https:"].includes(parsed.protocol);
		} catch {
			return false;
		}
	}
	function showOAuthUrlError() {
		toast.showError(new Error(i18n.baseText("credentialEdit.credentialEdit.showError.invalidOAuthUrl.message")), i18n.baseText("credentialEdit.credentialEdit.showError.invalidOAuthUrl.title"));
	}
	function openOAuthPopup(url, signal) {
		const popup = window.open(url, "OAuth Authorization", "scrollbars=no,resizable=yes,status=no,titlebar=no,location=no,toolbar=no,menubar=no,width=500,height=700");
		signal?.addEventListener("abort", () => {
			popup?.close();
		});
		return popup;
	}
	async function waitForOAuthCallback(popup, signal) {
		return await new Promise((resolve) => {
			const oauthChannel = new BroadcastChannel("oauth-callback");
			const trustedOrigins = getTrustedOAuthOrigins(rootStore.urlBaseEditor);
			let settled = false;
			function settle(result) {
				if (settled) return;
				settled = true;
				oauthChannel.close();
				clearInterval(popupClosedPoll);
				window.removeEventListener("message", onWindowMessage);
				resolve(result);
			}
			function handleResult(result) {
				if (settled) return;
				popup.close();
				if (result) toast.showMessage({
					title: i18n.baseText("nodeCredentials.oauth.accountConnected"),
					type: "success"
				});
				else toast.showMessage({
					title: i18n.baseText("nodeCredentials.oauth.accountConnectionFailed"),
					type: "error"
				});
				settle(result);
			}
			function onWindowMessage(event) {
				const result = parseOAuthCallbackMessage(event, trustedOrigins);
				if (result === null) return;
				handleResult(result === "success");
			}
			signal?.addEventListener("abort", () => {
				settle(false);
			});
			oauthChannel.addEventListener("message", (event) => {
				handleResult(event.data === "success");
			});
			window.addEventListener("message", onWindowMessage);
			const popupClosedPoll = setInterval(() => {
				if (popup.closed) settle(false);
			}, 500);
		});
	}
	/**
	* Authorize OAuth credentials by opening a popup and listening for callback.
	* Returns true if OAuth was successful, false if cancelled or failed.
	*/
	async function authorize(credential, signal) {
		const urlResult = await getOAuthAuthorizationUrl(credential);
		if (!urlResult.ok) {
			if (urlResult.error === "no-url") showOAuthUrlError();
			return false;
		}
		if (!isValidHttpUrl(urlResult.result)) {
			showOAuthUrlError();
			return false;
		}
		const popup = openOAuthPopup(urlResult.result, signal);
		if (!popup) {
			showOAuthUrlError();
			return false;
		}
		return await waitForOAuthCallback(popup, signal);
	}
	/**
	* Create a new OAuth credential and run the full authorization flow.
	* Returns the credential on success, null on failure (cleans up automatically).
	*/
	async function createAndAuthorize(credentialTypeName, nodeType) {
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return null;
		const data = {};
		const allowedHttpRequestDomainsProperty = credentialType.properties.find((prop) => prop.name === "allowedHttpRequestDomains");
		if (!allowedHttpRequestDomainsProperty || allowedHttpRequestDomainsProperty.type !== "hidden") data.allowedHttpRequestDomains = "none";
		let credential;
		try {
			const name = await credentialsStore.getNewCredentialName({
				credentialTypeName,
				fallbackName: credentialType.displayName
			});
			credential = await credentialsStore.createNewCredential({
				id: "",
				name,
				type: credentialTypeName,
				data
			}, projectsStore.currentProject?.id, void 0, { skipStoreUpdate: true });
			telemetry.track("User created credentials", {
				credential_type: credential.type,
				credential_id: credential.id,
				workflow_id: workflowsStore.workflowId
			});
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeCredentials.showMessage.title"));
			return null;
		}
		const controller = new AbortController();
		oauthAbortController.value = controller;
		pendingCredentialId.value = credential.id;
		const success = await authorize(credential, controller.signal);
		oauthAbortController.value = null;
		pendingCredentialId.value = null;
		const trackProperties = {
			credential_type: credentialTypeName,
			workflow_id: workflowsStore.workflowId ?? null,
			credential_id: credential.id,
			is_complete: true,
			is_new: true,
			is_valid: success,
			uses_external_secrets: false
		};
		if (nodeType) trackProperties.node_type = nodeType;
		telemetry.track("User saved credentials", trackProperties);
		if (success) {
			credentialsStore.upsertCredential(credential);
			return credential;
		}
		credentialsStore.deleteCredential({ id: credential.id });
		return null;
	}
	/**
	* Cancel any in-progress OAuth authorization and clean up the pending credential.
	*/
	function cancelAuthorize() {
		if (oauthAbortController.value) oauthAbortController.value.abort();
		if (pendingCredentialId.value) credentialsStore.deleteCredential({ id: pendingCredentialId.value });
	}
	return {
		getParentTypes,
		isOAuthCredentialType,
		isGoogleOAuthType,
		canOAuthCredentialQuickConnect,
		hasManualCredentialInputFields,
		authorize,
		createAndAuthorize,
		cancelAuthorize
	};
}
//#endregion
export { getTrustedOAuthOrigins as n, parseOAuthCallbackMessage as r, useCredentialOAuth as t };
