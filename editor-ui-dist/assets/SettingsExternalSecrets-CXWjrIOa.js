import { $ as openBlock, A as createTextVNode, Bt as toRef, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n, xt as I18nT } from "./_MapCache-65UNw25j.js";
import { $i as N8nIcon_default, Nt as N8nCard_default, Qi as N8nButton_default, Ri as N8nActionBox_default, Rt as N8nActionToggle_default, Ut as N8nBadge_default, Xi as N8nCallout_default, Yi as N8nHeading_default, Zi as N8nText_default } from "./src-BushEFrD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { $r as isDateObject, Tr as useToast, r as useUIStore, vn as useDocumentTitle } from "./users.store-buY8IFeq.js";
import { Es as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, mo as DateTime } from "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import "./versions.store-evX19U2A.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-COwsK9BF.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-llIAkYfQ.js";
import { n as ExternalSecretsProviderImage_ee_default, r as useExternalSecretsProvider, t as ExternalSecretsProviderConnectionSwitch_ee_default } from "./ExternalSecretsProviderConnectionSwitch.ee-B15cjyKs.js";
var ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExternalSecretsProviderCard.ee",
	props: { provider: {} },
	setup(__props) {
		const props = __props;
		const externalSecretsStore = useExternalSecretsStore();
		const i18n = useI18n();
		const uiStore = useUIStore();
		const toast = useToast();
		const provider = toRef(props, "provider");
		const providerData = computed(() => provider.value.data ?? {});
		const { connectionState, testConnection, setConnectionState } = useExternalSecretsProvider(provider, providerData);
		const actionDropdownOptions = computed(() => [{
			value: "setup",
			label: i18n.baseText("settings.externalSecrets.card.actionDropdown.setup")
		}, ...props.provider.connected ? [{
			value: "reload",
			label: i18n.baseText("settings.externalSecrets.card.actionDropdown.reload")
		}] : []]);
		const canConnect = computed(() => {
			return props.provider.connected || Object.keys(providerData.value).length > 0;
		});
		const formattedDate = computed(() => {
			return DateTime.fromISO(isDateObject(provider.value.connectedAt) ? provider.value.connectedAt.toISOString() : provider.value.connectedAt || (/* @__PURE__ */ new Date()).toISOString()).toFormat("dd LLL yyyy");
		});
		onMounted(() => {
			setConnectionState(props.provider.state);
		});
		async function onBeforeConnectionUpdate() {
			if (props.provider.connected) return true;
			await externalSecretsStore.getProvider(props.provider.name);
			await nextTick();
			return await testConnection() !== "error";
		}
		function openExternalSecretProvider() {
			uiStore.openModalWithData({
				name: EXTERNAL_SECRETS_PROVIDER_MODAL_KEY,
				data: { name: props.provider.name }
			});
		}
		async function reloadProvider() {
			try {
				await externalSecretsStore.reloadProvider(props.provider.name);
				toast.showMessage({
					title: i18n.baseText("settings.externalSecrets.card.reload.success.title"),
					message: i18n.baseText("settings.externalSecrets.card.reload.success.description", { interpolate: { provider: props.provider.displayName } }),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("error"));
			}
		}
		async function onActionDropdownClick(id) {
			switch (id) {
				case "setup":
					openExternalSecretProvider();
					break;
				case "reload":
					await reloadProvider();
					break;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(ExternalSecretsProviderImage_ee_default, {
						class: normalizeClass(_ctx.$style.cardImage),
						provider: provider.value
					}, null, 8, ["class", "provider"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createVNode(unref(N8nText_default), { bold: "" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(provider.value.displayName), 1)]),
						_: 1
					}), provider.value.connected ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [
							createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.secretsCount", {
								interpolate: { count: unref(externalSecretsStore).secrets[provider.value.name]?.length ?? 0 },
								adjustToNumber: unref(externalSecretsStore).secrets[provider.value.name]?.length ?? 0
							})), 1),
							_cache[1] || (_cache[1] = createTextVNode(" | ", -1)),
							createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.connectedAt", { interpolate: { date: formattedDate.value } })), 1)
						]),
						_: 1
					})) : createCommentVNode("", true)], 2),
					provider.value.name === "infisical" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.deprecationWarning)
					}, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style["warningTriangle"]),
						icon: "triangle-alert"
					}, null, 8, ["class"]), createVNode(unref(N8nBadge_default), {
						class: "mr-xs",
						theme: "tertiary",
						bold: "",
						"data-test-id": "card-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.deprecated")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					canConnect.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.cardActions)
					}, [createVNode(ExternalSecretsProviderConnectionSwitch_ee_default, {
						provider: provider.value,
						"before-update": onBeforeConnectionUpdate,
						disabled: unref(connectionState) === "error" && !provider.value.connected
					}, null, 8, ["provider", "disabled"]), createVNode(unref(N8nActionToggle_default), {
						class: "ml-s",
						theme: "dark",
						actions: actionDropdownOptions.value,
						onAction: onActionDropdownClick
					}, null, 8, ["actions"])], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 2,
						variant: "subtle",
						onClick: _cache[0] || (_cache[0] = ($event) => openExternalSecretProvider())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.setUp")), 1)]),
						_: 1
					}))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_184zs_125",
	cardImage: "_cardImage_184zs_130",
	cardBody: "_cardBody_184zs_135",
	cardContent: "_cardContent_184zs_141",
	cardActions: "_cardActions_184zs_148",
	deprecationWarning: "_deprecationWarning_184zs_155",
	warningTriangle: "_warningTriangle_184zs_159"
};
var ExternalSecretsProviderCard_ee_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { class: "pb-3xl" };
var _hoisted_2 = {
	key: 0,
	"data-test-id": "external-secrets-content-licensed"
};
var _hoisted_3 = {
	href: "https://docs.n8n.io/external-secrets/",
	target: "_blank"
};
var _hoisted_4 = {
	href: "https://docs.n8n.io/external-secrets/",
	target: "_blank"
};
var SettingsExternalSecrets_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsExternalSecrets",
	setup(__props) {
		const i18n = useI18n();
		const externalSecretsStore = useExternalSecretsStore();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const sortedProviders = computed(() => {
			return [...externalSecretsStore.providers].sort((a, b) => {
				return b.name.localeCompare(a.name);
			});
		});
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.externalSecrets.title"));
			if (!externalSecretsStore.isEnterpriseExternalSecretsEnabled) return;
			try {
				externalSecretsStore.fetchGlobalSecrets();
				externalSecretsStore.getProviders();
			} catch (error) {
				toast.showError(error, i18n.baseText("error"));
			}
		});
		function goToUpgrade() {
			pageRedirectionHelper.goToUpgrade("external-secrets", "upgrade-external-secrets");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.title")), 1)]),
				_: 1
			}), unref(externalSecretsStore).isEnterpriseExternalSecretsEnabled ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nCallout_default), {
				theme: "secondary",
				class: "mt-2xl mb-l"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.info")) + " ", 1), createBaseVNode("a", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.externalSecrets.info.link")), 1)]),
				_: 1
			}), (openBlock(true), createElementBlock(Fragment, null, renderList(sortedProviders.value, (provider) => {
				return openBlock(), createBlock(ExternalSecretsProviderCard_ee_default, {
					key: provider.name,
					provider
				}, null, 8, ["provider"]);
			}), 128))])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 1,
				class: "mt-2xl mb-l",
				"data-test-id": "external-secrets-content-unlicensed",
				"button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
				onClick: goToUpgrade
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.title")), 1)]),
				description: withCtx(() => [createVNode(unref(I18nT), {
					keypath: "settings.externalSecrets.actionBox.description",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.description.link")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["button-text"]))]);
		};
	}
});
export { SettingsExternalSecrets_default as default };
