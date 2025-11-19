import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, Dt as N8nActionBox_default, G as N8nOption_default, Ln as N8nButton_default, P as N8nInfoTip_default, Pn as N8nHeading_default, W as N8nSelect_default, kt as ElSwitch, vt as N8nTooltip_default, x as N8nRadioButtons_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Qs as useRootStore, Tn as useDocumentTitle, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { No as MODAL_CONFIRM } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./useClipboard-CDW2KXIc.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { t as CopyInput_default } from "./CopyInput-EV0b_4Vy.js";
import { n as useSSOStore, t as SupportedProtocols } from "./sso.store-lozzT1xX.js";
var _hoisted_1 = { class: "pb-2xl" };
var _hoisted_2 = {
	href: "https://docs.n8n.io/user-management/saml/",
	target: "_blank"
};
var _hoisted_3 = { key: 1 };
var _hoisted_4 = {
	key: 0,
	"data-test-id": "sso-content-licensed"
};
var _hoisted_5 = { class: "mt-2xs mb-s" };
var _hoisted_6 = { key: 0 };
var _hoisted_7 = { key: 1 };
var _hoisted_8 = { key: 2 };
var _hoisted_9 = { key: 0 };
var SettingsSso_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSso",
	setup(__props) {
		const IdentityProviderSettingsType = {
			URL: "url",
			XML: "xml"
		};
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		const ssoStore = useSSOStore();
		const message = useMessage();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const ssoActivatedLabel = computed(() => ssoStore.isSamlLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated"));
		const oidcActivatedLabel = computed(() => ssoStore.isOidcLoginEnabled ? i18n.baseText("settings.sso.activated") : i18n.baseText("settings.sso.deactivated"));
		const options = computed(() => {
			return [{
				label: SupportedProtocols.SAML.toUpperCase(),
				value: SupportedProtocols.SAML
			}, {
				label: ssoStore.isEnterpriseOidcEnabled ? SupportedProtocols.OIDC.toUpperCase() : `${SupportedProtocols.OIDC.toUpperCase()} (${i18n.baseText("generic.upgradeToEnterprise")})`,
				value: SupportedProtocols.OIDC
			}];
		});
		const ssoSettingsSaved = ref(false);
		const entityId = ref();
		const clientId = ref("");
		const clientSecret = ref("");
		const discoveryEndpoint = ref("");
		const prompt = ref("select_account");
		const handlePromptChange = (value) => {
			prompt.value = value;
		};
		const promptDescriptions = [
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.login"),
				value: "login"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.none"),
				value: "none"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.consent"),
				value: "consent"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.select_account"),
				value: "select_account"
			},
			{
				label: i18n.baseText("settings.sso.settings.oidc.prompt.create"),
				value: "create"
			}
		];
		const authProtocol = ref(SupportedProtocols.SAML);
		const ipsOptions = ref([{
			label: i18n.baseText("settings.sso.settings.ips.options.url"),
			value: IdentityProviderSettingsType.URL
		}, {
			label: i18n.baseText("settings.sso.settings.ips.options.xml"),
			value: IdentityProviderSettingsType.XML
		}]);
		const ipsType = ref(IdentityProviderSettingsType.URL);
		const metadataUrl = ref();
		const metadata = ref();
		const redirectUrl = ref();
		const isSaveEnabled = computed(() => {
			if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && metadataUrl.value !== ssoStore.samlConfig?.metadataUrl;
			else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && metadata.value !== ssoStore.samlConfig?.metadata;
			return false;
		});
		const isTestEnabled = computed(() => {
			if (ipsType.value === IdentityProviderSettingsType.URL) return !!metadataUrl.value && ssoSettingsSaved.value;
			else if (ipsType.value === IdentityProviderSettingsType.XML) return !!metadata.value && ssoSettingsSaved.value;
			return false;
		});
		async function loadSamlConfig() {
			if (!ssoStore.isEnterpriseSamlEnabled) return;
			try {
				await getSamlConfig();
			} catch (error) {
				toast.showError(error, "error");
			}
		}
		const getSamlConfig = async () => {
			const config = await ssoStore.getSamlConfig();
			entityId.value = config?.entityID;
			redirectUrl.value = config?.returnUrl;
			if (config?.metadataUrl) ipsType.value = IdentityProviderSettingsType.URL;
			else if (config?.metadata) ipsType.value = IdentityProviderSettingsType.XML;
			metadata.value = config?.metadata;
			metadataUrl.value = config?.metadataUrl;
			ssoSettingsSaved.value = !!config?.metadata;
		};
		const trackUpdateSettings = () => {
			const trackingMetadata = {
				instance_id: rootStore.instanceId,
				authentication_method: authProtocol.value
			};
			if (authProtocol.value === SupportedProtocols.SAML) {
				trackingMetadata.identity_provider = ipsType.value === "url" ? "metadata" : "xml";
				trackingMetadata.is_active = ssoStore.isSamlLoginEnabled;
			} else if (authProtocol.value === SupportedProtocols.OIDC) {
				trackingMetadata.discovery_endpoint = discoveryEndpoint.value;
				trackingMetadata.is_active = ssoStore.isOidcLoginEnabled;
			}
			telemetry.track("User updated single sign on settings", trackingMetadata);
		};
		const onSave = async () => {
			try {
				validateInput();
				const config = ipsType.value === IdentityProviderSettingsType.URL ? { metadataUrl: metadataUrl.value } : { metadata: metadata.value };
				await ssoStore.saveSamlConfig(config);
				ssoStore.selectedAuthProtocol = authProtocol.value;
				if (!ssoStore.isSamlLoginEnabled) {
					if (await message.confirm(i18n.baseText("settings.sso.settings.save.activate.message"), i18n.baseText("settings.sso.settings.save.activate.title"), {
						confirmButtonText: i18n.baseText("settings.sso.settings.save.activate.test"),
						cancelButtonText: i18n.baseText("settings.sso.settings.save.activate.cancel")
					}) === "confirm") await onTest();
				}
				trackUpdateSettings();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error"));
				return;
			} finally {
				await getSamlConfig();
			}
		};
		const onTest = async () => {
			try {
				const url = await ssoStore.testSamlConfig();
				if (typeof window !== "undefined") window.open(url, "_blank");
			} catch (error) {
				toast.showError(error, "error");
			}
		};
		const validateInput = () => {
			if (ipsType.value === IdentityProviderSettingsType.URL) try {
				const parsedUrl = new URL(metadataUrl.value);
				if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") throw new Error("The provided protocol is not supported");
			} catch (error) {
				throw new Error(i18n.baseText("settings.sso.settings.ips.url.invalid"));
			}
		};
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("sso", "upgrade-sso");
		};
		const isToggleSsoDisabled = computed(() => {
			if (ssoStore.isSamlLoginEnabled) return false;
			return !ssoSettingsSaved.value;
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.sso.title"));
			await Promise.all([loadSamlConfig(), loadOidcConfig()]);
			ssoStore.initializeSelectedProtocol();
			authProtocol.value = ssoStore.selectedAuthProtocol || SupportedProtocols.SAML;
		});
		const getOidcConfig = async () => {
			const config = await ssoStore.getOidcConfig();
			clientId.value = config.clientId;
			clientSecret.value = config.clientSecret;
			discoveryEndpoint.value = config.discoveryEndpoint;
			prompt.value = config.prompt ?? "select_account";
		};
		async function loadOidcConfig() {
			if (!ssoStore.isEnterpriseOidcEnabled) return;
			try {
				await getOidcConfig();
			} catch (error) {
				toast.showError(error, "error");
			}
		}
		function onAuthProtocolUpdated(value) {
			authProtocol.value = value;
		}
		const cannotSaveOidcSettings = computed(() => {
			return ssoStore.oidcConfig?.clientId === clientId.value && ssoStore.oidcConfig?.clientSecret === clientSecret.value && ssoStore.oidcConfig?.discoveryEndpoint === discoveryEndpoint.value && ssoStore.oidcConfig?.loginEnabled === ssoStore.isOidcLoginEnabled && ssoStore.oidcConfig?.prompt === prompt.value;
		});
		async function onOidcSettingsSave() {
			if (ssoStore.oidcConfig?.loginEnabled && !ssoStore.isOidcLoginEnabled) {
				if (await message.confirm(i18n.baseText("settings.oidc.confirmMessage.beforeSaveForm.message"), i18n.baseText("settings.oidc.confirmMessage.beforeSaveForm.headline"), {
					cancelButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.cancelButtonText"),
					confirmButtonText: i18n.baseText("settings.ldap.confirmMessage.beforeSaveForm.confirmButtonText")
				}) !== "confirm") return;
			}
			try {
				const newConfig = await ssoStore.saveOidcConfig({
					clientId: clientId.value,
					clientSecret: clientSecret.value,
					discoveryEndpoint: discoveryEndpoint.value,
					prompt: prompt.value,
					loginEnabled: ssoStore.isOidcLoginEnabled
				});
				ssoStore.selectedAuthProtocol = authProtocol.value;
				clientSecret.value = newConfig.clientSecret;
				trackUpdateSettings();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.sso.settings.save.error_oidc"));
				return;
			} finally {
				await getOidcConfig();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.title")), 1)]),
					_: 1
				})], 2),
				createVNode(unref(N8nInfoTip_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.info")) + " ", 1), createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.sso.info.link")), 1)]),
					_: 1
				}),
				unref(ssoStore).isEnterpriseSamlEnabled || unref(ssoStore).isEnterpriseOidcEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "sso-auth-protocol-select",
					class: normalizeClass(_ctx.$style.group)
				}, [_cache[9] || (_cache[9] = createBaseVNode("label", null, "Select Authentication Protocol", -1)), createBaseVNode("div", null, [createVNode(unref(N8nSelect_default), {
					filterable: "",
					"model-value": authProtocol.value,
					placeholder: unref(i18n).baseText("parameterInput.select"),
					"onUpdate:modelValue": onAuthProtocolUpdated,
					onKeydown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, ({ label, value }) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: value,
							value,
							label,
							"data-test-id": "credential-select-option"
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, ["model-value", "placeholder"])])], 2)) : createCommentVNode("", true),
				authProtocol.value === unref(SupportedProtocols).SAML ? (openBlock(), createElementBlock("div", _hoisted_3, [unref(ssoStore).isEnterpriseSamlEnabled ? (openBlock(), createElementBlock("div", _hoisted_4, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.label")), 1),
						createVNode(CopyInput_default, {
							value: redirectUrl.value,
							"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
							"toast-title": unref(i18n).baseText("settings.sso.settings.redirectUrl.copied")
						}, null, 8, [
							"value",
							"copy-button-text",
							"toast-title"
						]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.redirectUrl.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.label")), 1),
						createVNode(CopyInput_default, {
							value: entityId.value,
							"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
							"toast-title": unref(i18n).baseText("settings.sso.settings.entityId.copied")
						}, null, 8, [
							"value",
							"copy-button-text",
							"toast-title"
						]),
						createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.entityId.help")), 1)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						createBaseVNode("label", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.label")), 1),
						createBaseVNode("div", _hoisted_5, [createVNode(unref(N8nRadioButtons_default), {
							modelValue: ipsType.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ipsType.value = $event),
							options: ipsOptions.value
						}, null, 8, ["modelValue", "options"])]),
						ipsType.value === IdentityProviderSettingsType.URL ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(N8nInput_default), {
							modelValue: metadataUrl.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => metadataUrl.value = $event),
							type: "text",
							name: "metadataUrl",
							size: "large",
							placeholder: unref(i18n).baseText("settings.sso.settings.ips.url.placeholder"),
							"data-test-id": "sso-provider-url"
						}, null, 8, ["modelValue", "placeholder"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.url.help")), 1)])) : createCommentVNode("", true),
						ipsType.value === IdentityProviderSettingsType.XML ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(N8nInput_default), {
							modelValue: metadata.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => metadata.value = $event),
							type: "textarea",
							name: "metadata",
							rows: 4,
							"data-test-id": "sso-provider-xml"
						}, null, 8, ["modelValue"]), createBaseVNode("small", null, toDisplayString(unref(i18n).baseText("settings.sso.settings.ips.xml.help")), 1)])) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [unref(ssoStore).isEnterpriseSamlEnabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							disabled: unref(ssoStore).isSamlLoginEnabled || ssoSettingsSaved.value
						}, {
							content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.activation.tooltip")), 1)]),
							default: withCtx(() => [createVNode(unref(ElSwitch), {
								modelValue: unref(ssoStore).isSamlLoginEnabled,
								"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(ssoStore).isSamlLoginEnabled = $event),
								"data-test-id": "sso-toggle",
								disabled: isToggleSsoDisabled.value,
								class: normalizeClass(_ctx.$style.switch),
								"inactive-text": ssoActivatedLabel.value
							}, null, 8, [
								"modelValue",
								"disabled",
								"class",
								"inactive-text"
							])]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)], 2)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [createVNode(unref(N8nButton_default), {
						disabled: !isSaveEnabled.value,
						size: "large",
						"data-test-id": "sso-save",
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						disabled: !isTestEnabled.value,
						size: "large",
						type: "tertiary",
						"data-test-id": "sso-test",
						onClick: onTest
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.test")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2),
					createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, toDisplayString(unref(i18n).baseText("settings.sso.settings.footer.hint")), 3)
				])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 1,
					"data-test-id": "sso-content-unlicensed",
					class: normalizeClass(_ctx.$style.actionBox),
					description: unref(i18n).baseText("settings.sso.actionBox.description"),
					"button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
					"onClick:button": goToUpgrade
				}, {
					heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
					_: 1
				}, 8, [
					"class",
					"description",
					"button-text"
				]))])) : createCommentVNode("", true),
				authProtocol.value === unref(SupportedProtocols).OIDC ? (openBlock(), createElementBlock("div", _hoisted_8, [unref(ssoStore).isEnterpriseOidcEnabled ? (openBlock(), createElementBlock("div", _hoisted_9, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[10] || (_cache[10] = createBaseVNode("label", null, "Redirect URL", -1)),
						createVNode(CopyInput_default, {
							value: unref(ssoStore).oidc.callbackUrl,
							"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
							"toast-title": "Redirect URL copied to clipboard"
						}, null, 8, ["value", "copy-button-text"]),
						_cache[11] || (_cache[11] = createBaseVNode("small", null, "Copy the Redirect URL to configure your OIDC provider ", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[12] || (_cache[12] = createBaseVNode("label", null, "Discovery Endpoint", -1)),
						createVNode(unref(N8nInput_default), {
							"model-value": discoveryEndpoint.value,
							type: "text",
							"data-test-id": "oidc-discovery-endpoint",
							placeholder: "https://accounts.google.com/.well-known/openid-configuration",
							"onUpdate:modelValue": _cache[5] || (_cache[5] = (v) => discoveryEndpoint.value = v)
						}, null, 8, ["model-value"]),
						_cache[13] || (_cache[13] = createBaseVNode("small", null, "Paste here your discovery endpoint", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[14] || (_cache[14] = createBaseVNode("label", null, "Client ID", -1)),
						createVNode(unref(N8nInput_default), {
							"model-value": clientId.value,
							type: "text",
							"data-test-id": "oidc-client-id",
							"onUpdate:modelValue": _cache[6] || (_cache[6] = (v) => clientId.value = v)
						}, null, 8, ["model-value"]),
						_cache[15] || (_cache[15] = createBaseVNode("small", null, "The client ID you received when registering your application with your provider", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[16] || (_cache[16] = createBaseVNode("label", null, "Client Secret", -1)),
						createVNode(unref(N8nInput_default), {
							"model-value": clientSecret.value,
							type: "password",
							"data-test-id": "oidc-client-secret",
							"onUpdate:modelValue": _cache[7] || (_cache[7] = (v) => clientSecret.value = v)
						}, null, 8, ["model-value"]),
						_cache[17] || (_cache[17] = createBaseVNode("small", null, "The client Secret you received when registering your application with your provider", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[18] || (_cache[18] = createBaseVNode("label", null, "Prompt", -1)),
						createVNode(unref(N8nSelect_default), {
							"model-value": prompt.value,
							"data-test-id": "oidc-prompt",
							"onUpdate:modelValue": handlePromptChange
						}, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(promptDescriptions, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: option.value,
									label: option.label,
									"data-test-id": "oidc-prompt-filter-option",
									value: option.value
								}, null, 8, ["label", "value"]);
							}), 64))]),
							_: 1
						}, 8, ["model-value"]),
						_cache[19] || (_cache[19] = createBaseVNode("small", null, "The prompt parameter to use when authenticating with the OIDC provider", -1))
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(ElSwitch), {
						modelValue: unref(ssoStore).isOidcLoginEnabled,
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(ssoStore).isOidcLoginEnabled = $event),
						"data-test-id": "sso-oidc-toggle",
						class: normalizeClass(_ctx.$style.switch),
						"inactive-text": oidcActivatedLabel.value
					}, null, 8, [
						"modelValue",
						"class",
						"inactive-text"
					])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttons) }, [createVNode(unref(N8nButton_default), {
						"data-test-id": "sso-oidc-save",
						size: "large",
						disabled: cannotSaveOidcSettings.value,
						onClick: onOidcSettingsSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.sso.settings.save")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 1,
					"data-test-id": "sso-content-unlicensed",
					class: normalizeClass(_ctx.$style.actionBox),
					"button-text": unref(i18n).baseText("settings.sso.actionBox.buttonText"),
					"onClick:button": goToUpgrade
				}, {
					heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.sso.actionBox.title")), 1)]),
					_: 1
				}, 8, ["class", "button-text"]))])) : createCommentVNode("", true)
			]);
		};
	}
});
const heading = "_heading_1ky6a_123";
const buttons = "_buttons_1ky6a_133";
const group = "_group_1ky6a_142";
const actionBox = "_actionBox_1ky6a_158";
const footer = "_footer_1ky6a_162";
var SettingsSso_vue_vue_type_style_index_0_lang_module_default = {
	heading,
	"switch": "_switch_1ky6a_127",
	buttons,
	group,
	actionBox,
	footer
};
var SettingsSso_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsSso_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSso_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsSso_default as default };
