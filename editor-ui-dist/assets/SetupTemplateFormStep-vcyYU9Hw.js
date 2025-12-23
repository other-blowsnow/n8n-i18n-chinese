import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as I18nT, gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { A as N8nNotice_default, Bn as N8nHeading_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Yt as require_sortBy, _t as useNodeTypesStore, en as useCredentialsStore, ni as getAppNameFromNodeName, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import { t as NodeIcon_default } from "./NodeIcon-BDiqVc0r.js";
import { r as getNodeTypeDisplayableCredentials } from "./nodeTransforms-BqV90EB_.js";
import { n as normalizeTemplateNodeCredentials, t as keyFromCredentialTypeAndName } from "./templateTransforms-DxlsHqIx.js";
import { t as CredentialPicker_default } from "./CredentialPicker-Chlv8wZl.js";
var import_sortBy = /* @__PURE__ */ __toESM(require_sortBy());
const getNodesRequiringCredentials = (nodeTypeProvider, nodes) => {
	return nodes.map((node) => ({
		node,
		requiredCredentials: getNodeTypeDisplayableCredentials(nodeTypeProvider, node)
	})).filter(({ requiredCredentials }) => requiredCredentials.length > 0);
};
const groupNodeCredentialsByKey = (nodeWithRequiredCredentials) => {
	const credentialsByTypeName = /* @__PURE__ */ new Map();
	for (const { node, requiredCredentials } of nodeWithRequiredCredentials) {
		const normalizedNodeCreds = node.credentials ? normalizeTemplateNodeCredentials(node.credentials) : {};
		for (const credentialDescription of requiredCredentials) {
			const credentialType = credentialDescription.name;
			const nodeCredentialName = normalizedNodeCreds[credentialDescription.name] ?? "";
			const key = keyFromCredentialTypeAndName(credentialType, nodeCredentialName);
			let credentialUsages = credentialsByTypeName.get(key);
			if (!credentialUsages) {
				credentialUsages = {
					key,
					nodeTypeName: node.type,
					credentialName: nodeCredentialName,
					credentialType,
					usedBy: []
				};
				credentialsByTypeName.set(key, credentialUsages);
			}
			credentialUsages.usedBy.push(node);
		}
	}
	return credentialsByTypeName;
};
const getAppCredentials = (credentialUsages, getAppNameByNodeType) => {
	const credentialsByAppName = /* @__PURE__ */ new Map();
	for (const credentialUsage of credentialUsages) {
		const nodeTypeName = credentialUsage.nodeTypeName;
		const appName = getAppNameByNodeType(nodeTypeName) ?? nodeTypeName;
		const appCredentials = credentialsByAppName.get(appName);
		if (appCredentials) appCredentials.credentials.push(credentialUsage);
		else credentialsByAppName.set(appName, {
			appName,
			credentials: [credentialUsage]
		});
	}
	return Array.from(credentialsByAppName.values());
};
const useCredentialSetupState = (nodes) => {
	const selectedCredentialIdByKey = ref({});
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const appNameByNodeType = (nodeTypeName, version) => {
		const nodeType = nodeTypesStore.getNodeType(nodeTypeName, version);
		return nodeType ? getAppNameFromNodeName(nodeType.displayName) : nodeTypeName;
	};
	const nodesRequiringCredentialsSorted = computed(() => {
		return (0, import_sortBy.default)(nodes.value ? getNodesRequiringCredentials(nodeTypesStore, nodes.value) : [], ({ node }) => node.position[0]);
	});
	const credentialsByKey = computed(() => {
		return groupNodeCredentialsByKey(nodesRequiringCredentialsSorted.value);
	});
	const credentialUsages = computed(() => {
		return Array.from(credentialsByKey.value.values());
	});
	const appCredentials = computed(() => {
		return getAppCredentials(credentialUsages.value, appNameByNodeType);
	});
	const credentialOverrides = computed(() => {
		const overrides = {};
		for (const [key, credentialId] of Object.entries(selectedCredentialIdByKey.value)) {
			const credential = credentialsStore.getCredentialById(credentialId);
			if (!credential) continue;
			overrides[key] = {
				id: credentialId,
				name: credential.name
			};
		}
		return overrides;
	});
	const numFilledCredentials = computed(() => {
		return Object.keys(selectedCredentialIdByKey.value).length;
	});
	const setSelectedCredentialId = (credentialKey, credentialId) => {
		selectedCredentialIdByKey.value[credentialKey] = credentialId;
	};
	const unsetSelectedCredential = (credentialKey) => {
		delete selectedCredentialIdByKey.value[credentialKey];
	};
	return {
		appCredentials,
		credentialOverrides,
		credentialUsages,
		credentialsByKey,
		nodesRequiringCredentialsSorted,
		numFilledCredentials,
		selectedCredentialIdByKey,
		setSelectedCredentialId,
		unsetSelectedCredential
	};
};
const formatList = (list, opts) => {
	const { i18n, formatFn } = opts;
	if (list.length === 0) return "";
	if (list.length === 1) return formatFn(list[0]);
	const allButLast = list.slice(0, -1);
	const last = list[list.length - 1];
	return `${allButLast.map(formatFn).join(", ")} ${i18n.baseText("generic.and")} ${formatFn(last)}`;
};
var AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppsRequiringCredsNotice",
	props: { appCredentials: {} },
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		const formatApp = (app) => `<b>${app.credentials.length}x ${app.appName}</b>`;
		const appNodeCounts = computed(() => {
			return formatList(props.appCredentials, {
				formatFn: formatApp,
				i18n
			});
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(unref(N8nNotice_default), {
				class: normalizeClass(_ctx.$style.notice),
				theme: "info"
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					tag: "span",
					keypath: "templateSetup.instructions",
					scope: "global"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, appNodeCounts.value]])]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default = { notice: "_notice_3fzof_123" };
var AppsRequiringCredsNotice_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default }]]);
var _sfc_main = {};
var _hoisted_1 = { class: "el-icon-success" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("i", _hoisted_1);
}
var IconSuccess_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-563d175d"]]);
var SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupTemplateFormStep",
	props: {
		order: {},
		credentials: {},
		selectedCredentialId: { default: null }
	},
	emits: ["credentialSelected", "credentialDeselected"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const node = computed(() => props.credentials.usedBy[0]);
		const nodeType = computed(() => nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion));
		const appName = computed(() => nodeType.value ? getAppNameFromNodeName(nodeType.value.displayName) : node.value.type);
		const nodeNames = computed(() => {
			const formatNodeName = (nodeToFormat) => `<b>${nodeToFormat.name}</b>`;
			return formatList(props.credentials.usedBy, {
				formatFn: formatNodeName,
				i18n
			});
		});
		const onCredentialModalOpened = () => {
			telemetry.track("User opened Credential modal", {
				source: "cred_setup",
				credentialType: props.credentials.credentialType,
				new_credential: !props.selectedCredentialId
			});
		};
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("li", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "setup-credentials-form-step"
			}, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [nodeType.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.heading),
						"data-test-id": "credential-step-heading"
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.headingOrder) }, toDisplayString(_ctx.order) + ".", 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.headingIcon) }, [createVNode(NodeIcon_default, { "node-type": nodeType.value }, null, 8, ["node-type"])], 2),
						createTextVNode(" " + toDisplayString(appName.value), 1)
					], 2)) : createCommentVNode("", true)]),
					_: 1
				}),
				createBaseVNode("p", {
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "credential-step-description"
				}, [createVNode(unref(I18nT), {
					tag: "span",
					keypath: "templateSetup.credential.description",
					plural: _ctx.credentials.usedBy.length,
					scope: "global"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, nodeNames.value]])]),
					_: 1
				}, 8, ["plural"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentials) }, [createVNode(CredentialPicker_default, {
					class: normalizeClass(_ctx.$style.credentialPicker),
					"app-name": appName.value,
					"personal-only": "",
					"credential-type": props.credentials.credentialType,
					"selected-credential-id": _ctx.selectedCredentialId,
					onCredentialSelected: _cache[0] || (_cache[0] = ($event) => emit("credentialSelected", {
						credentialUsageKey: _ctx.$props.credentials.key,
						credentialId: $event
					})),
					onCredentialDeselected: _cache[1] || (_cache[1] = ($event) => emit("credentialDeselected", { credentialUsageKey: _ctx.$props.credentials.key })),
					onCredentialModalOpened
				}, null, 8, [
					"class",
					"app-name",
					"credential-type",
					"selected-credential-id"
				]), createVNode(IconSuccess_default, { class: normalizeClass({
					[_ctx.$style.credentialOk]: true,
					[_ctx.$style.invisible]: !_ctx.selectedCredentialId
				}) }, null, 8, ["class"])], 2)
			], 2);
		};
	}
});
var SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_lexug_123",
	heading: "_heading_lexug_127",
	headingOrder: "_headingOrder_lexug_133",
	headingIcon: "_headingIcon_lexug_138",
	description: "_description_lexug_142",
	credentials: "_credentials_lexug_148",
	credentialPicker: "_credentialPicker_lexug_154",
	credentialOk: "_credentialOk_lexug_158",
	invisible: "_invisible_lexug_163"
};
var SetupTemplateFormStep_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default }]]);
export { AppsRequiringCredsNotice_default as n, useCredentialSetupState as r, SetupTemplateFormStep_default as t };
