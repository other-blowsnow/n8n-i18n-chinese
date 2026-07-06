import { I as h, It as ref, S as computed, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { s as useI18n } from "./src-CBtyHSh2.js";
import { d as __vitePreload } from "./get-D159b5Ls.js";
import { t as useMessage } from "./useMessage-DCdqgkbP.js";
import { t as useToast } from "./useToast-CiwmCDeB.js";
import "./constants-Xm8Zfd-h.js";
import { $i as sanitizeHtml, at as useCredentialsStore, xn as useProjectsStore } from "./workflowDocument.store-D5eYC1gP.js";
import { c as makeRestApiRequest, t as useRootStore } from "./useRootStore-Crb5JJ4G.js";
import { t as useSettingsStore } from "./settings.store-DKCHFcby.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-B52ADdpG.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-DjWp44CN.js";
//#region src/features/credentials/quickConnect/quickConnect.api.ts
async function getQuickConnectApiKey(context, { quickConnectType }) {
	return await makeRestApiRequest(context, "POST", "/quick-connect", { quickConnectType });
}
//#endregion
//#region src/features/credentials/quickConnect/composables/useQuickConnect.ts
function useQuickConnect() {
	const settingsStore = useSettingsStore();
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
		if (optionsByCredentialType.value.size === 0) return;
		const option = optionsByCredentialType.value.get(credentialType);
		if (!option) return void 0;
		const pkg = nodeType.split(".")[0];
		return option.packageName.split(".")[0] === pkg ? option : void 0;
	}
	function getQuickConnectOptionByPackageName(packageName) {
		if (optionsByPackageName.value.size === 0) return;
		return optionsByPackageName.value.get(packageName);
	}
	function getQuickConnectOptionByCredentialTypes(credentialTypes) {
		if (optionsByCredentialType.value.size === 0) return;
		for (const type of credentialTypes) {
			const option = optionsByCredentialType.value.get(type);
			if (option) return option;
		}
	}
	async function connectToPinecone(quickConnectOption) {
		const { ConnectPopup } = await __vitePreload(async () => {
			const { ConnectPopup } = await import("./dist-C4IsnWVt.js");
			return { ConnectPopup };
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
		getQuickConnectOption,
		getQuickConnectOptionByPackageName,
		getQuickConnectOptionByCredentialTypes,
		connect,
		cancelConnect: cancelAuthorize
	};
}
//#endregion
export { useQuickConnect as t };
