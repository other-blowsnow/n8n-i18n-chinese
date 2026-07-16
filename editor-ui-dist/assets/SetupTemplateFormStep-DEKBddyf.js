import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as I18nT, s as useI18n } from "./src-CEUyFjtd.js";
import { Ga as N8nHeading_default, W as N8nNotice_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Jn as getAppNameFromNodeName, Q as require_sortBy, _ as useNodeTypesStore, at as useCredentialsStore, f as getNodeTypeDisplayableCredentials } from "./workflowDocument.store-LDfI_CPs.js";
import { p as useTelemetry } from "./users.store-CHh4wCL_.js";
import { n as keyFromCredentialTypeAndName, r as normalizeTemplateNodeCredentials } from "./templateTransforms-M2SaK6lY.js";
import { t as NodeIcon_default } from "./NodeIcon-OwFEVOxP.js";
import { t as CredentialPicker_default } from "./CredentialPicker-DtEzQm33.js";
//#region src/features/workflows/templates/composables/useCredentialSetupState.ts
var import_sortBy = /* @__PURE__ */ __toESM(require_sortBy(), 1);
/**
* Returns the nodes in the template that require credentials
* and the required credentials for each node.
*/
var getNodesRequiringCredentials = (nodeTypeProvider, nodes) => {
	return nodes.map((node) => ({
		node,
		requiredCredentials: getNodeTypeDisplayableCredentials(nodeTypeProvider, node)
	})).filter(({ requiredCredentials }) => requiredCredentials.length > 0);
};
var groupNodeCredentialsByKey = (nodeWithRequiredCredentials) => {
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
var getAppCredentials = (credentialUsages, getAppNameByNodeType) => {
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
var useCredentialSetupState = (nodes) => {
	/**
	* Credentials user has selected from the UI. Map from credential
	* name in the template to the credential ID.
	*/
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
//#endregion
//#region src/app/utils/formatters/listFormatter.ts
/**
* Formats a list of items into a string. Each item is formatted using
* the given function and the are separated by a comma except for the last
* item which is separated by "and".
*
* @example
* formatList(['a', 'b', 'c'], {
*   formatFn: (x) => `"${x}"`
*   i18n
* });
* // => '"a", "b" and "c"'
*/
var formatList = (list, opts) => {
	const { i18n, formatFn } = opts;
	if (list.length === 0) return "";
	if (list.length === 1) return formatFn(list[0]);
	const allButLast = list.slice(0, -1);
	const last = list[list.length - 1];
	return `${allButLast.map(formatFn).join(", ")} ${i18n.baseText("generic.and")} ${formatFn(last)}`;
};
//#endregion
//#region src/features/workflows/templates/components/AppsRequiringCredsNotice.vue?vue&type=script&setup=true&lang.ts
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
var AppsRequiringCredsNotice_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AppsRequiringCredsNotice_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AppsRequiringCredsNotice_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/components/IconSuccess.vue
var _sfc_main = {};
var _hoisted_1 = { class: "el-icon-success" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("i", _hoisted_1);
}
var IconSuccess_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-563d175d"]]);
//#endregion
//#region src/features/workflows/templates/components/SetupTemplateFormStep.vue?vue&type=script&setup=true&lang.ts
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
var SetupTemplateFormStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupTemplateFormStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupTemplateFormStep_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useCredentialSetupState as i, IconSuccess_default as n, AppsRequiringCredsNotice_default as r, SetupTemplateFormStep_default as t };
