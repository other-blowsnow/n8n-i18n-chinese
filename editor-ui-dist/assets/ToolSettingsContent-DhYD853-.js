import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, nt as provide, p as vShow, vn as normalizeClass, w as createBaseVNode, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-D28pXLlm.js";
import { Vi as N8nText_default, j as N8nTabs_default } from "./src-6rUDOvr2.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, Gt as useProjectsStore, It as useNodeHelpers, Pt as environments_store_default, rt as useCredentialsStore } from "./users.store-B-dhu6_V.js";
import { O as NodeCredentials_default, f as collectParametersByTab, m as createCommonNodeSettings, t as ParameterInputList_default, x as setParameterValue } from "./ParameterInputList-mzudlnKi.js";
import { Ha as deepCopy, Oi as Workflow, Ta as makeNodeName, bc as ChatHubToolContextKey, fa as getNodeParameters, pa as getNodeParametersIssues, xc as ExpressionLocalResolveContextSymbol, ya as isDefaultNodeName } from "./constants-DM6W84kp.js";
var ToolSettingsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsContent",
	props: {
		initialNode: {},
		existingToolNames: {}
	},
	emits: ["update:valid", "update:node-name"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const nodeHelpers = useNodeHelpers();
		const environmentsStore = environments_store_default();
		const node = shallowRef(props.initialNode);
		const userEditedName = ref(false);
		const existingToolNames = computed(() => props.existingToolNames ?? []);
		const nodeTypeDescription = computed(() => {
			if (!props.initialNode) return null;
			return nodeTypesStore.getNodeType(props.initialNode.type);
		});
		const activeTab = ref("params");
		const parametersByTab = computed(() => collectParametersByTab(nodeTypeDescription.value?.properties ?? [], false));
		const hasSettings = computed(() => nodeSettings.value.length > 0 || parametersByTab.value.settings.length > 0);
		const tabOptions = computed(() => {
			const tabs$1 = [{
				label: i18n.baseText("nodeSettings.parameters"),
				value: "params"
			}];
			if (hasSettings.value) tabs$1.push({
				label: i18n.baseText("nodeSettings.settings"),
				value: "settings"
			});
			return tabs$1;
		});
		const nodeSettings = computed(() => createCommonNodeSettings(true, i18n.baseText.bind(i18n)).filter((s) => s.name !== "notes" && s.name !== "notesInFlow"));
		const settingsNodeValues = computed(() => {
			if (!node.value) return { parameters: {} };
			return { parameters: deepCopy(node.value.parameters) };
		});
		const showNoParametersNotice = computed(() => parametersByTab.value.params.filter((item) => item.type !== "notice").length === 0);
		const hasParameterIssues = computed(() => {
			if (!nodeTypeDescription.value || !node.value) return false;
			const parameterIssues = getNodeParametersIssues(nodeTypeDescription.value.properties, node.value, nodeTypeDescription.value);
			return parameterIssues !== null && Object.keys(parameterIssues.parameters ?? {}).length > 0;
		});
		const hasCredentialIssues = computed(() => {
			if (!nodeTypeDescription.value || !node.value) return false;
			const credentialIssues = nodeHelpers.getNodeIssues(nodeTypeDescription.value, node.value, { getNode: () => node.value }, [
				"parameters",
				"execution",
				"typeUnknown",
				"input"
			]);
			return Object.keys(credentialIssues?.credentials ?? {}).length > 0;
		});
		const expressionResolveCtx = computed(() => {
			if (!node.value) return void 0;
			const workflow = new Workflow({
				id: "chat-tool-workflow",
				name: "Tool Configuration",
				nodes: [node.value],
				connections: {},
				active: false,
				nodeTypes: {
					getByName(nodeType) {
						const description = nodeTypesStore.getNodeType(nodeType);
						if (description === null) throw new Error(`Node type "${nodeType}" not found`);
						return { description };
					},
					getByNameAndVersion(nodeType, version) {
						const description = nodeTypesStore.getNodeType(nodeType, version);
						if (description === null) throw new Error(`Node type "${nodeType}" (v${version}) not found`);
						return { description };
					},
					getKnownTypes() {
						return {};
					}
				},
				settings: {}
			});
			return {
				localResolve: true,
				envVars: environmentsStore.variablesAsObject,
				workflow,
				execution: null,
				nodeName: node.value.name,
				additionalKeys: {},
				connections: {},
				inputNode: void 0
			};
		});
		const isValid = computed(() => {
			return node.value?.name && !hasParameterIssues.value && !hasCredentialIssues.value;
		});
		provide(ExpressionLocalResolveContextSymbol, expressionResolveCtx);
		provide(ChatHubToolContextKey, true);
		function makeUniqueName(baseName, existingNames) {
			if (!existingNames.includes(baseName)) return baseName;
			let counter = 1;
			while (existingNames.includes(`${baseName} (${counter})`)) counter++;
			return `${baseName} (${counter})`;
		}
		function handleChangeParameter(updateData) {
			if (!node.value) return;
			const newParameters = deepCopy(node.value.parameters);
			setParameterValue(newParameters, updateData.name, updateData.value);
			node.value = {
				...node.value,
				parameters: newParameters
			};
		}
		function handleChangeSettingsValue(updateData) {
			if (!node.value) return;
			if (updateData.name.startsWith("parameters.")) {
				const paramName = updateData.name.slice(11);
				const newParameters = deepCopy(node.value.parameters);
				setParameterValue(newParameters, paramName, updateData.value);
				node.value = {
					...node.value,
					parameters: newParameters
				};
			} else node.value = {
				...node.value,
				[updateData.name]: updateData.value
			};
		}
		function handleChangeCredential(updateData) {
			if (node.value) node.value = {
				...node.value,
				...updateData.properties
			};
		}
		function handleChangeName(name) {
			if (node.value) {
				userEditedName.value = true;
				node.value = {
					...node.value,
					name
				};
			}
		}
		watch(() => props.initialNode, (initialNode) => {
			if (initialNode) {
				const uniqueName = makeUniqueName(initialNode.name, existingToolNames.value);
				let nodeData = uniqueName !== initialNode.name ? {
					...initialNode,
					name: uniqueName
				} : initialNode;
				if (nodeTypeDescription.value) {
					const defaultParameters = getNodeParameters(nodeTypeDescription.value.properties ?? [], nodeData.parameters ?? {}, true, false, nodeData, nodeTypeDescription.value);
					nodeData = {
						...nodeData,
						parameters: defaultParameters ?? {}
					};
					const nameForCheck = nodeData.name.replace(/ \(\d+\)$/, "");
					userEditedName.value = !(isDefaultNodeName(nameForCheck, nodeTypeDescription.value, nodeData.parameters) || nameForCheck === nodeTypeDescription.value.displayName);
					if (!userEditedName.value) {
						const newName = makeNodeName(nodeData.parameters ?? {}, nodeTypeDescription.value);
						if (newName && newName !== nameForCheck) nodeData = {
							...nodeData,
							name: makeUniqueName(newName, existingToolNames.value)
						};
					}
				}
				node.value = nodeData;
			} else {
				node.value = initialNode;
				userEditedName.value = false;
			}
		}, { immediate: true });
		watch(() => [node.value?.parameters?.resource, node.value?.parameters?.operation], () => {
			if (userEditedName.value || !node.value || !nodeTypeDescription.value) return;
			const newName = makeNodeName(node.value.parameters, nodeTypeDescription.value);
			if (newName) {
				const uniqueName = makeUniqueName(newName, existingToolNames.value);
				if (uniqueName !== node.value.name) node.value = {
					...node.value,
					name: uniqueName
				};
			}
		});
		watch(isValid, (val) => {
			emit("update:valid", !!val);
		});
		watch(() => node.value?.name, (name) => {
			if (name) emit("update:node-name", name);
		});
		onMounted(async () => {
			emit("update:valid", !!isValid.value);
			if (node.value?.name) emit("update:node-name", node.value.name);
			const personalProject = projectsStore.personalProject;
			if (personalProject) {
				projectsStore.setCurrentProject(personalProject);
				if (credentialsStore.allCredentials.length === 0) await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentialsForWorkflow({ projectId: personalProject.id })]);
			}
		});
		onBeforeUnmount(() => {
			projectsStore.setCurrentProject(null);
		});
		__expose({
			node,
			isValid,
			nodeTypeDescription,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [tabOptions.value.length > 1 ? (openBlock(), createBlock(unref(N8nTabs_default), {
				key: 0,
				"model-value": activeTab.value,
				options: tabOptions.value,
				class: normalizeClass(_ctx.$style.tabs),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event)
			}, null, 8, [
				"model-value",
				"options",
				"class"
			])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabContent) }, [withDirectives(createBaseVNode("div", null, [node.value ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 0,
				parameters: parametersByTab.value.params,
				"hide-delete": true,
				"node-values": node.value.parameters,
				"is-read-only": false,
				node: node.value,
				onValueChanged: handleChangeParameter
			}, {
				default: withCtx(() => [createVNode(NodeCredentials_default, {
					node: node.value,
					readonly: false,
					"show-all": true,
					"hide-issues": false,
					onCredentialSelected: handleChangeCredential,
					onValueChanged: handleChangeParameter
				}, null, 8, ["node"])]),
				_: 1
			}, 8, [
				"parameters",
				"node-values",
				"node"
			])) : createCommentVNode("", true), showNoParametersNotice.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.noParameters)
			}, [createVNode(unref(N8nText_default), null, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.thisNodeDoesNotHaveAnyParameters")), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 512), [[vShow, activeTab.value === "params"]]), withDirectives(createBaseVNode("div", null, [node.value && parametersByTab.value.settings.length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 0,
				parameters: parametersByTab.value.settings,
				"node-values": settingsNodeValues.value,
				"is-read-only": false,
				"hide-delete": true,
				path: "parameters",
				node: node.value,
				onValueChanged: handleChangeSettingsValue
			}, null, 8, [
				"parameters",
				"node-values",
				"node"
			])) : createCommentVNode("", true), node.value ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 1,
				parameters: nodeSettings.value,
				"hide-delete": true,
				"node-values": settingsNodeValues.value,
				"is-read-only": false,
				path: "",
				node: node.value,
				onValueChanged: handleChangeSettingsValue
			}, null, 8, [
				"parameters",
				"node-values",
				"node"
			])) : createCommentVNode("", true)], 512), [[vShow, activeTab.value === "settings"]])], 2)], 2);
		};
	}
});
var ToolSettingsContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_rha2t_125",
	tabs: "_tabs_rha2t_133",
	tabContent: "_tabContent_rha2t_139",
	noParameters: "_noParameters_rha2t_146"
};
var ToolSettingsContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolSettingsContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsContent_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolSettingsContent_default as t };
