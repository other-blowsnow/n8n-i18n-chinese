import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Qs as useRootStore, Ss as updateLdapConfig, as as saveSamlConfig, bs as runLdapSync, ec as UserManagementAuthenticationMethod, es as getOidcConfig, is as saveOidcConfig, ns as getSamlMetadata, os as testSamlConfig, rs as initSSO, ss as toggleSamlConfig, ts as getSamlConfig, vs as getLdapConfig, xc as defineStore, xs as testLdapConnection, ys as getLdapSynchronizations } from "./useTelemetry-C2EhNQhN.js";
const SupportedProtocols = {
	SAML: "saml",
	OIDC: "oidc"
};
const useSSOStore = defineStore("sso", () => {
	const rootStore = useRootStore();
	const authenticationMethod = ref(void 0);
	const selectedAuthProtocol = ref(void 0);
	const showSsoLoginButton = computed(() => isSamlLoginEnabled.value && isEnterpriseSamlEnabled.value && isDefaultAuthenticationSaml.value || isOidcLoginEnabled.value && isEnterpriseOidcEnabled.value && isDefaultAuthenticationOidc.value);
	const getSSORedirectUrl = async (existingRedirect) => await initSSO(rootStore.restApiContext, existingRedirect);
	const initialize = (options) => {
		authenticationMethod.value = options.authenticationMethod;
		isEnterpriseLdapEnabled.value = options.features.ldap;
		if (options.config.ldap) {
			ldap.value.loginEnabled = options.config.ldap.loginEnabled;
			ldap.value.loginLabel = options.config.ldap.loginLabel;
		}
		isEnterpriseSamlEnabled.value = options.features.saml;
		if (options.config.saml) {
			saml.value.loginEnabled = options.config.saml.loginEnabled;
			saml.value.loginLabel = options.config.saml.loginLabel;
		}
		isEnterpriseOidcEnabled.value = options.features.oidc;
		if (options.config.oidc) {
			oidc.value.loginEnabled = options.config.oidc.loginEnabled;
			oidc.value.loginUrl = options.config.oidc.loginUrl || "";
			oidc.value.callbackUrl = options.config.oidc.callbackUrl || "";
		}
	};
	const saml = ref({
		loginLabel: "",
		loginEnabled: false
	});
	const samlConfig = ref();
	const isSamlLoginEnabled = computed({
		get: () => saml.value.loginEnabled,
		set: (value) => {
			saml.value.loginEnabled = value;
			toggleLoginEnabled(value);
		}
	});
	const isEnterpriseSamlEnabled = ref(false);
	const isDefaultAuthenticationSaml = computed(() => authenticationMethod.value === UserManagementAuthenticationMethod.Saml);
	const toggleLoginEnabled = async (enabled) => await toggleSamlConfig(rootStore.restApiContext, { loginEnabled: enabled });
	const getSamlMetadata$1 = async () => await getSamlMetadata(rootStore.restApiContext);
	const getSamlConfig$1 = async () => {
		const config = await getSamlConfig(rootStore.restApiContext);
		samlConfig.value = config;
		return config;
	};
	const saveSamlConfig$1 = async (config) => await saveSamlConfig(rootStore.restApiContext, config);
	const testSamlConfig$1 = async () => await testSamlConfig(rootStore.restApiContext);
	const oidc = ref({
		loginUrl: "",
		loginEnabled: false,
		callbackUrl: ""
	});
	const oidcConfig = ref();
	const isEnterpriseOidcEnabled = ref(false);
	const getOidcConfig$1 = async () => {
		const config = await getOidcConfig(rootStore.restApiContext);
		oidcConfig.value = config;
		return config;
	};
	const saveOidcConfig$1 = async (config) => {
		const savedConfig = await saveOidcConfig(rootStore.restApiContext, config);
		oidcConfig.value = savedConfig;
		return savedConfig;
	};
	const isOidcLoginEnabled = computed({
		get: () => oidc.value.loginEnabled,
		set: (value) => {
			oidc.value.loginEnabled = value;
		}
	});
	const isDefaultAuthenticationOidc = computed(() => authenticationMethod.value === UserManagementAuthenticationMethod.Oidc);
	const ldap = ref({
		loginLabel: "",
		loginEnabled: false
	});
	const isEnterpriseLdapEnabled = ref(false);
	const isLdapLoginEnabled = computed(() => ldap.value.loginEnabled);
	const ldapLoginLabel = computed(() => ldap.value.loginLabel);
	const getLdapConfig$1 = async () => {
		return await getLdapConfig(useRootStore().restApiContext);
	};
	const getLdapSynchronizations$1 = async (pagination) => {
		return await getLdapSynchronizations(useRootStore().restApiContext, pagination);
	};
	const testLdapConnection$1 = async () => {
		return await testLdapConnection(useRootStore().restApiContext);
	};
	const updateLdapConfig$1 = async (ldapConfig) => {
		return await updateLdapConfig(useRootStore().restApiContext, ldapConfig);
	};
	const runLdapSync$1 = async (data) => {
		return await runLdapSync(useRootStore().restApiContext, data);
	};
	const initializeSelectedProtocol = () => {
		if (selectedAuthProtocol.value) return;
		selectedAuthProtocol.value = isDefaultAuthenticationOidc.value ? SupportedProtocols.OIDC : SupportedProtocols.SAML;
	};
	return {
		showSsoLoginButton,
		getSSORedirectUrl,
		initialize,
		selectedAuthProtocol,
		initializeSelectedProtocol,
		saml,
		samlConfig,
		isSamlLoginEnabled,
		isEnterpriseSamlEnabled,
		isDefaultAuthenticationSaml,
		getSamlMetadata: getSamlMetadata$1,
		getSamlConfig: getSamlConfig$1,
		saveSamlConfig: saveSamlConfig$1,
		testSamlConfig: testSamlConfig$1,
		oidc,
		oidcConfig,
		isOidcLoginEnabled,
		isEnterpriseOidcEnabled,
		isDefaultAuthenticationOidc,
		getOidcConfig: getOidcConfig$1,
		saveOidcConfig: saveOidcConfig$1,
		ldap,
		isLdapLoginEnabled,
		isEnterpriseLdapEnabled,
		ldapLoginLabel,
		getLdapConfig: getLdapConfig$1,
		getLdapSynchronizations: getLdapSynchronizations$1,
		testLdapConnection: testLdapConnection$1,
		updateLdapConfig: updateLdapConfig$1,
		runLdapSync: runLdapSync$1
	};
});
export { useSSOStore as n, SupportedProtocols as t };
