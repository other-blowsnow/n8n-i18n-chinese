import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Rt as shallowRef, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, bt as withDirectives, gt as watch, j as createVNode, p as vShow, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Da as N8nText_default, k as N8nTabs_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { f as collectParametersByTab, m as createCommonNodeSettings, t as ParameterInputList_default, x as setParameterValue } from "./ParameterInputList-CrlNQpV5.js";
import { k as useNodeHelpers, kt as useCredentialsStore, pn as useEnvironmentsStore, q as useNodeTypesStore, v as createWorkflowDocumentId, x as useWorkflowDocumentStore, yn as useProjectsStore } from "./workflows.store-BKfEj1aG.js";
import { El as ExpressionLocalResolveContextSymbol, Os as isDefaultNodeName, Ps as makeNodeName, Qs as deepCopy, Ss as getNodeParametersIssues, kl as WorkflowDocumentStoreKey, wl as ChatHubToolContextKey, xs as getNodeParameters } from "./constants-DIP3enMx.js";
import { t as useSettingsStore } from "./settings.store-B-RgkKfn.js";
import { t as NodeCredentials_default } from "./NodeCredentials-BJPEYlPn.js";
//#region src/features/shared/toolConfig/NodeToolSettingsContent.vue?vue&type=script&setup=true&lang.ts
var NodeToolSettingsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeToolSettingsContent",
	props: {
		initialNode: {},
		existingToolNames: {},
		hideAskAssistant: { type: Boolean },
		projectId: {}
	},
	emits: ["update:valid", "update:node-name"],
	setup(__props, { expose: __expose, emit: __emit }) {
		/**
		* Shared "configure a node-as-tool" form.
		*
		* Renders a two-sub-tab view (Parameters + node Settings) over an `INode`,
		* wired to `ParameterInputList` + `NodeCredentials`. Emits validity and name
		* changes so any container (Chat Hub modal, Agents modal, etc.) can drive a
		* Save/Cancel footer.
		*
		* Context marker: we provide `ChatHubToolContextKey` here so the parameter
		* form suppresses features that don't apply when a node is being configured
		* as an LLM tool outside a workflow canvas (see `ParameterOptions`,
		* `ParameterInputFull`). The key name is historical — treat it as the
		* "node-as-tool config" marker; it applies equally to Chat Hub and Agents.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const nodeHelpers = useNodeHelpers();
		const environmentsStore = useEnvironmentsStore();
		const settingsStore = useSettingsStore();
		const node = shallowRef(props.initialNode);
		const userEditedName = ref(false);
		const existingToolNames = computed(() => props.existingToolNames ?? []);
		const credentialProjectId = computed(() => props.projectId ?? projectsStore.personalProject?.id);
		const nodeTypeDescription = computed(() => {
			if (!props.initialNode) return null;
			return nodeTypesStore.getNodeType(props.initialNode.type);
		});
		const activeTab = ref("params");
		const parametersByTab = computed(() => collectParametersByTab(nodeTypeDescription.value?.properties ?? [], false));
		const hasSettings = computed(() => nodeSettings.value.length > 0 || parametersByTab.value.settings.length > 0);
		const tabOptions = computed(() => {
			const tabs = [{
				label: i18n.baseText("nodeSettings.parameters"),
				value: "params"
			}];
			if (hasSettings.value) tabs.push({
				label: i18n.baseText("nodeSettings.settings"),
				value: "settings"
			});
			return tabs;
		});
		const nodeSettings = computed(() => createCommonNodeSettings(true, i18n.baseText.bind(i18n), settingsStore.isOtelEnabled).filter((s) => s.name !== "notes" && s.name !== "notesInFlow"));
		const settingsNodeValues = computed(() => {
			if (!node.value) return { parameters: {} };
			return {
				parameters: deepCopy(node.value.parameters),
				customTelemetryTags: deepCopy(node.value.customTelemetryTags ?? {})
			};
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
		const workflowDocumentStore = computed(() => {
			const store = useWorkflowDocumentStore(createWorkflowDocumentId("node-tool-workflow"));
			if (node.value) store.setNodes([node.value]);
			return store;
		});
		const expressionResolveCtx = computed(() => {
			if (!node.value) return void 0;
			return {
				localResolve: true,
				envVars: environmentsStore.variablesAsObject,
				nodeName: node.value.name,
				additionalKeys: {},
				inputNode: void 0
			};
		});
		const isValid = computed(() => {
			return node.value?.name && !hasParameterIssues.value && !hasCredentialIssues.value;
		});
		provide(ExpressionLocalResolveContextSymbol, expressionResolveCtx);
		provide(WorkflowDocumentStoreKey, workflowDocumentStore);
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
			} else if (updateData.name.includes(".") || updateData.name.includes("[")) {
				const newNode = deepCopy(node.value);
				setParameterValue(newNode, updateData.name, updateData.value);
				if (newNode.customTelemetryTags?.tag?.length === 0) newNode.customTelemetryTags = {};
				node.value = newNode;
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
			if (props.projectId) await projectsStore.fetchAndSetProject(props.projectId);
			else if (projectsStore.personalProject) projectsStore.setCurrentProject(projectsStore.personalProject);
			const projectId = credentialProjectId.value;
			if (projectId) {
				credentialsStore.setCredentials([]);
				await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentialsForWorkflow({ projectId })]);
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
					"project-id": credentialProjectId.value,
					"hide-issues": false,
					"hide-ask-assistant": props.hideAskAssistant,
					onCredentialSelected: handleChangeCredential,
					onValueChanged: handleChangeParameter
				}, null, 8, [
					"node",
					"project-id",
					"hide-ask-assistant"
				])]),
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
var NodeToolSettingsContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_rha2t_125",
	tabs: "_tabs_rha2t_133",
	tabContent: "_tabContent_rha2t_139",
	noParameters: "_noParameters_rha2t_146"
};
var NodeToolSettingsContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeToolSettingsContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeToolSettingsContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeToolSettingsContent_default as t };
