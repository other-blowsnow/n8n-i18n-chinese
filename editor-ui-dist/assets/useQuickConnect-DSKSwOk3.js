import { Ft as ref, I as h, S as computed, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DL4VDRVM.js";
import { na as __vitePreload } from "./src-CO68IM2H.js";
import { As as useSettingsStore, Ft as useProjectsStore, Hr as usePostHog, Tr as useToast, at as useCredentialsStore, en as useTelemetry, jr as useMessage, pl as sanitizeHtml, s as useWorkflowsStore, t as useUsersStore } from "./users.store-Bj_XyNBb.js";
import { Fi as createResultError, Ii as createResultOk, Ps as MODAL_CONFIRM, al as QUICK_CONNECT_EXPERIMENT } from "./constants-CasV1Nn-.js";
import { d as makeRestApiRequest, r as useRootStore } from "./_baseOrderBy-CfcpbHUH.js";
function useCredentialOAuth() {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const workflowsStore = useWorkflowsStore();
	const toast = useToast();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const oauthAbortController = ref(null);
	const pendingCredentialId = ref(null);
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
	function isOAuthCredentialType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "oAuth2Api" || credentialTypeName === "oAuth1Api" || parentTypes.includes("oAuth2Api") || parentTypes.includes("oAuth1Api");
	}
	function isGoogleOAuthType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "googleOAuth2Api" || parentTypes.includes("googleOAuth2Api");
	}
	function hasManagedOAuthCredentials(credentialTypeName) {
		if (!isOAuthCredentialType(credentialTypeName)) return false;
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return false;
		if (credentialType.__skipManagedCreation) return false;
		const overwrittenProperties = credentialType.__overwrittenProperties ?? [];
		if (overwrittenProperties.length === 0) return false;
		return credentialType.properties.filter((prop) => prop.type !== "hidden" && prop.type !== "notice" && !overwrittenProperties.includes(prop.name)).every((prop) => prop.required !== true || prop.type !== "string" && prop.type !== "number");
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
			let settled = false;
			const settle = (result) => {
				if (settled) return;
				settled = true;
				oauthChannel.close();
				resolve(result);
			};
			signal?.addEventListener("abort", () => {
				settle(false);
			});
			oauthChannel.addEventListener("message", (event) => {
				popup.close();
				if (event.data === "success") {
					toast.showMessage({
						title: i18n.baseText("nodeCredentials.oauth.accountConnected"),
						type: "success"
					});
					settle(true);
				} else {
					toast.showMessage({
						title: i18n.baseText("nodeCredentials.oauth.accountConnectionFailed"),
						type: "error"
					});
					settle(false);
				}
			});
		});
	}
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
	async function createAndAuthorize(credentialTypeName, nodeType) {
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return null;
		let credential;
		try {
			credential = await credentialsStore.createNewCredential({
				id: "",
				name: credentialType.displayName,
				type: credentialTypeName,
				data: { allowedHttpRequestDomains: "none" }
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
	function cancelAuthorize() {
		if (oauthAbortController.value) oauthAbortController.value.abort();
		if (pendingCredentialId.value) credentialsStore.deleteCredential({ id: pendingCredentialId.value });
	}
	return {
		getParentTypes,
		isOAuthCredentialType,
		isGoogleOAuthType,
		hasManagedOAuthCredentials,
		authorize,
		createAndAuthorize,
		cancelAuthorize
	};
}
async function getQuickConnectApiKey(context, { quickConnectType }) {
	return await makeRestApiRequest(context, "POST", "/quick-connect", { quickConnectType });
}
function useQuickConnect() {
	const settingsStore = useSettingsStore();
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const message = useMessage();
	const toast = useToast();
	const i18n = useI18n();
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const loading = ref(false);
	const { isOAuthCredentialType, createAndAuthorize, cancelAuthorize } = useCredentialOAuth();
	const cleanUpHandlers = [];
	const isQuickConnectEnabled = computed(() => posthogStore.isVariantEnabled(QUICK_CONNECT_EXPERIMENT.name, QUICK_CONNECT_EXPERIMENT.variant));
	const optionsByCredentialType = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const option of settingsStore.moduleSettings["quick-connect"]?.options ?? []) map.set(option.credentialType, option);
		return map;
	});
	const optionsByPackageName = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const option of settingsStore.moduleSettings["quick-connect"]?.options ?? []) if (!map.has(option.packageName)) map.set(option.packageName, option);
		return map;
	});
	function getQuickConnectOption(credentialType, nodeType) {
		if (!isQuickConnectEnabled.value || optionsByCredentialType.value.size === 0) return;
		const option = optionsByCredentialType.value.get(credentialType);
		if (!option) return void 0;
		const pkg = nodeType.split(".")[0];
		return option.packageName.split(".")[0] === pkg ? option : void 0;
	}
	function getQuickConnectOptionByPackageName(packageName) {
		if (!isQuickConnectEnabled.value || optionsByPackageName.value.size === 0) return;
		return optionsByPackageName.value.get(packageName);
	}
	function getQuickConnectOptionByCredentialTypes(credentialTypes) {
		if (!isQuickConnectEnabled.value || optionsByCredentialType.value.size === 0) return;
		for (const type of credentialTypes) {
			const option = optionsByCredentialType.value.get(type);
			if (option) return option;
		}
	}
	async function connectToPinecone(quickConnectOption) {
		const { ConnectPopup } = await __vitePreload(async () => {
			const { ConnectPopup: ConnectPopup$1 } = await import("./dist-adduFcWm.js");
			return { ConnectPopup: ConnectPopup$1 };
		}, []);
		return await new Promise((resolve) => {
			const popup = ConnectPopup({
				onConnect: ({ key }) => resolve({ apiKey: key }),
				onCancel: () => resolve(null),
				integrationId: String(quickConnectOption.config.integrationId)
			});
			popup.open();
			cleanUpHandlers.push(() => popup.cleanup());
		});
	}
	async function connectViaBackendFlow(quickConnectOption) {
		loading.value = true;
		return await getQuickConnectApiKey(rootStore.restApiContext, quickConnectOption);
	}
	async function getCredentialData(quickConnectOption) {
		switch (quickConnectOption.quickConnectType) {
			case "pinecone": return await connectToPinecone(quickConnectOption);
			case "firecrawl": return await connectViaBackendFlow(quickConnectOption);
			default: throw new Error(`Quick connect for type ${quickConnectOption.quickConnectType} is not implemented`);
		}
	}
	function cleanUpDanglingHandlers() {
		cleanUpHandlers.splice(0, cleanUpHandlers.length).forEach((handler) => {
			try {
				handler();
			} catch {}
		});
	}
	onBeforeUnmount(cleanUpDanglingHandlers);
	function replaceUserData(text) {
		const currentUser = usersStore.currentUser;
		if (currentUser) return [
			"email",
			"firstName",
			"fullName",
			"lastName"
		].reduce((result, key) => {
			return result.replaceAll(`{user.${key}}`, currentUser[key] ?? "");
		}, text);
		return text;
	}
	async function connect(connectParams) {
		cleanUpDanglingHandlers();
		const { credentialTypeName, nodeType, source } = connectParams;
		telemetry.track("User clicked quick connect button", {
			source,
			credential_type: credentialTypeName,
			node_type: nodeType
		});
		if (isOAuthCredentialType(credentialTypeName)) return await createAndAuthorize(credentialTypeName, nodeType);
		const quickConnectOption = getQuickConnectOption(credentialTypeName, nodeType);
		if (quickConnectOption) {
			const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
			if (!credentialType) return null;
			try {
				if (quickConnectOption.consentText) {
					if (await message.confirm(h("span", { innerHTML: sanitizeHtml(replaceUserData(quickConnectOption.consentText)) }), i18n.baseText("nodeCredentials.quickConnect.connectTo", { interpolate: { provider: connectParams.serviceName } }), {
						customClass: "wide",
						confirmButtonText: i18n.baseText("nodeCredentials.quickConnect.consent.confirm"),
						cancelButtonText: i18n.baseText("nodeCredentials.quickConnect.consent.cancel"),
						confirmationCheckboxMessage: quickConnectOption.consentCheckbox ? h("span", { innerHTML: sanitizeHtml(quickConnectOption.consentCheckbox) }) : void 0
					}) !== "confirm") return null;
				}
				const credentialData = await getCredentialData(quickConnectOption);
				if (!credentialData) return null;
				return await credentialsStore.createNewCredential({
					id: "",
					name: credentialType.displayName,
					type: credentialTypeName,
					data: {
						...credentialData,
						allowedHttpRequestDomains: "none"
					}
				}, projectsStore.currentProject?.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.createCredential.title"));
				return null;
			} finally {
				loading.value = false;
				cleanUpDanglingHandlers();
			}
		}
		return null;
	}
	return {
		loading,
		isQuickConnectEnabled,
		getQuickConnectOption,
		getQuickConnectOptionByPackageName,
		getQuickConnectOptionByCredentialTypes,
		connect,
		cancelConnect: cancelAuthorize
	};
}
export { useCredentialOAuth as n, useQuickConnect as t };
