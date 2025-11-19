;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, ref, useRootStore, updateLdapConfig, saveSamlConfig, runLdapSync, UserManagementAuthenticationMethod, getOidcConfig, saveOidcConfig, getSamlMetadata, testSamlConfig, initSSO, toggleSamlConfig, getSamlConfig, getLdapConfig, defineStore, testLdapConnection, getLdapSynchronizations, SupportedProtocols, useSSOStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00FJs) {
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        updateLdapConfig = _useTelemetryLegacy00FJs.Ss;
        saveSamlConfig = _useTelemetryLegacy00FJs.as;
        runLdapSync = _useTelemetryLegacy00FJs.bs;
        UserManagementAuthenticationMethod = _useTelemetryLegacy00FJs.ec;
        getOidcConfig = _useTelemetryLegacy00FJs.es;
        saveOidcConfig = _useTelemetryLegacy00FJs.is;
        getSamlMetadata = _useTelemetryLegacy00FJs.ns;
        testSamlConfig = _useTelemetryLegacy00FJs.os;
        initSSO = _useTelemetryLegacy00FJs.rs;
        toggleSamlConfig = _useTelemetryLegacy00FJs.ss;
        getSamlConfig = _useTelemetryLegacy00FJs.ts;
        getLdapConfig = _useTelemetryLegacy00FJs.vs;
        defineStore = _useTelemetryLegacy00FJs.xc;
        testLdapConnection = _useTelemetryLegacy00FJs.xs;
        getLdapSynchronizations = _useTelemetryLegacy00FJs.ys;
      }],
      execute: function () {
        //#region src/features/settings/sso/sso.store.ts
        _export("t", SupportedProtocols = {
          SAML: "saml",
          OIDC: "oidc"
        });
        _export("n", useSSOStore = defineStore("sso", () => {
          const rootStore = useRootStore();
          const authenticationMethod = ref(void 0);
          const selectedAuthProtocol = ref(void 0);
          const showSsoLoginButton = computed(() => isSamlLoginEnabled.value && isEnterpriseSamlEnabled.value && isDefaultAuthenticationSaml.value || isOidcLoginEnabled.value && isEnterpriseOidcEnabled.value && isDefaultAuthenticationOidc.value);
          const getSSORedirectUrl = async existingRedirect => await initSSO(rootStore.restApiContext, existingRedirect);
          const initialize = options => {
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
          /**
          * SAML
          */
          const saml = ref({
            loginLabel: "",
            loginEnabled: false
          });
          const samlConfig = ref();
          const isSamlLoginEnabled = computed({
            get: () => saml.value.loginEnabled,
            set: value => {
              saml.value.loginEnabled = value;
              toggleLoginEnabled(value);
            }
          });
          const isEnterpriseSamlEnabled = ref(false);
          const isDefaultAuthenticationSaml = computed(() => authenticationMethod.value === UserManagementAuthenticationMethod.Saml);
          const toggleLoginEnabled = async enabled => await toggleSamlConfig(rootStore.restApiContext, {
            loginEnabled: enabled
          });
          const getSamlMetadata$1 = async () => await getSamlMetadata(rootStore.restApiContext);
          const getSamlConfig$1 = async () => {
            const config = await getSamlConfig(rootStore.restApiContext);
            samlConfig.value = config;
            return config;
          };
          const saveSamlConfig$1 = async config => await saveSamlConfig(rootStore.restApiContext, config);
          const testSamlConfig$1 = async () => await testSamlConfig(rootStore.restApiContext);
          /**
          * OIDC
          */
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
          const saveOidcConfig$1 = async config => {
            const savedConfig = await saveOidcConfig(rootStore.restApiContext, config);
            oidcConfig.value = savedConfig;
            return savedConfig;
          };
          const isOidcLoginEnabled = computed({
            get: () => oidc.value.loginEnabled,
            set: value => {
              oidc.value.loginEnabled = value;
            }
          });
          const isDefaultAuthenticationOidc = computed(() => authenticationMethod.value === UserManagementAuthenticationMethod.Oidc);
          /**
          * LDAP Configuration
          */
          const ldap = ref({
            loginLabel: "",
            loginEnabled: false
          });
          const isEnterpriseLdapEnabled = ref(false);
          const isLdapLoginEnabled = computed(() => ldap.value.loginEnabled);
          const ldapLoginLabel = computed(() => ldap.value.loginLabel);
          const getLdapConfig$1 = async () => {
            const rootStore$1 = useRootStore();
            return await getLdapConfig(rootStore$1.restApiContext);
          };
          const getLdapSynchronizations$1 = async pagination => {
            const rootStore$1 = useRootStore();
            return await getLdapSynchronizations(rootStore$1.restApiContext, pagination);
          };
          const testLdapConnection$1 = async () => {
            const rootStore$1 = useRootStore();
            return await testLdapConnection(rootStore$1.restApiContext);
          };
          const updateLdapConfig$1 = async ldapConfig => {
            const rootStore$1 = useRootStore();
            return await updateLdapConfig(rootStore$1.restApiContext, ldapConfig);
          };
          const runLdapSync$1 = async data => {
            const rootStore$1 = useRootStore();
            return await runLdapSync(rootStore$1.restApiContext, data);
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
        })); //#endregion
      }
    };
  });
})();