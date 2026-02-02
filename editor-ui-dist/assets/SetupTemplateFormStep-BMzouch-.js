import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { B as N8nNotice_default, Li as N8nHeading_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, Nt as useTelemetry, Z as require_sortBy, rt as useCredentialsStore, wi as getAppNameFromNodeName } from "./users.store-qBZsmf9-.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import { i as getNodeTypeDisplayableCredentials } from "./nodeTransforms-lXLCgQTS.js";
import { n as normalizeTemplateNodeCredentials, t as keyFromCredentialTypeAndName } from "./templateTransforms-CDZPEect.js";
import { t as CredentialPicker_default } from "./CredentialPicker-RiYX8de4.js";
var import_sortBy = /* @__PURE__ */ __toESM(require_sortBy(), 1);
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
	props: {
		appCredentials: {},
		source: {}
	},
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		const instructionsKey = computed(() => {
			if (props.source === "builder") return "templateSetup.instructions.builder";
			return "templateSetup.instructions";
		});
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
					keypath: instructionsKey.value,
					scope: "global"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, appNodeCounts.value]])]),
					_: 1
				}, 8, ["keypath"])]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default = { notice: "_notice_e6am5_125" };
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
		selectedCredentialId: { default: null },
		source: {}
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
		const credentialDescriptionKey = computed(() => {
			if (props.source === "builder") return "templateSetup.credential.description.builder";
			return "templateSetup.credential.description";
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
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.headingOrder) }, toDisplayString(__props.order) + ".", 3),
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
					keypath: credentialDescriptionKey.value,
					plural: __props.credentials.usedBy.length,
					scope: "global"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, nodeNames.value]])]),
					_: 1
				}, 8, ["keypath", "plural"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentials) }, [createVNode(CredentialPicker_default, {
					class: normalizeClass(_ctx.$style.credentialPicker),
					"app-name": appName.value,
					"personal-only": "",
					"credential-type": props.credentials.credentialType,
					"selected-credential-id": __props.selectedCredentialId,
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
					[_ctx.$style.invisible]: !__props.selectedCredentialId
				}) }, null, 8, ["class"])], 2)
			], 2);
		};
	}
});
var SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_atvc6_125",
	heading: "_heading_atvc6_129",
	headingOrder: "_headingOrder_atvc6_135",
	headingIcon: "_headingIcon_atvc6_140",
	description: "_description_atvc6_144",
	credentials: "_credentials_atvc6_150",
	credentialPicker: "_credentialPicker_atvc6_156",
	credentialOk: "_credentialOk_atvc6_160",
	invisible: "_invisible_atvc6_165"
};
var SetupTemplateFormStep_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default }]]);
export { AppsRequiringCredsNotice_default as n, useCredentialSetupState as r, SetupTemplateFormStep_default as t };
