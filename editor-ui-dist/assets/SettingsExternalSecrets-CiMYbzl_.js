import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Vt as toRef, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, Dt as N8nActionBox_default, Fn as N8nCallout_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, X as N8nCard_default, it as N8nBadge_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Ni as useUIStore, Tn as useDocumentTitle, ar as isDateObject } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { $i as DateTime, To as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-fPuvdi_V.js";
import { n as ExternalSecretsProviderImage_ee_default, r as useExternalSecretsProvider, t as ExternalSecretsProviderConnectionSwitch_ee_default } from "./ExternalSecretsProviderConnectionSwitch.ee-C5gjVLhT.js";
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
							createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.secretsCount", { interpolate: { count: `${unref(externalSecretsStore).secrets[provider.value.name]?.length}` } })), 1),
							_cache[1] || (_cache[1] = createTextVNode(" | ")),
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
						type: "tertiary",
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
	card: "_card_er899_123",
	cardImage: "_cardImage_er899_128",
	cardBody: "_cardBody_er899_133",
	cardContent: "_cardContent_er899_139",
	cardActions: "_cardActions_er899_146",
	deprecationWarning: "_deprecationWarning_er899_153",
	warningTriangle: "_warningTriangle_er899_157"
};
var ExternalSecretsProviderCard_ee_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { class: "pb-3xl" };
var _hoisted_2 = {
	key: 0,
	"data-test-id": "external-secrets-content-licensed"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = ["href"];
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
				externalSecretsStore.fetchAllSecrets();
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
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.info")) + " ", 1), createBaseVNode("a", {
					href: unref(i18n).baseText("settings.externalSecrets.docs"),
					target: "_blank"
				}, toDisplayString(unref(i18n).baseText("settings.externalSecrets.info.link")), 9, _hoisted_3)]),
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
					link: withCtx(() => [createBaseVNode("a", {
						href: unref(i18n).baseText("settings.externalSecrets.docs"),
						target: "_blank"
					}, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.description.link")), 9, _hoisted_4)]),
					_: 1
				})]),
				_: 1
			}, 8, ["button-text"]))]);
		};
	}
});
export { SettingsExternalSecrets_default as default };
