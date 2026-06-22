import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, p as vShow, q as onBeforeUnmount, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-BxlYlwM1.js";
import { Ja as N8nButton_default, R as N8nRadioButtons_default, Ui as Input_default, Ya as N8nIcon_default, j as Switch_default, qa as N8nText_default, vt as Checkbox_default, y as N8nInlineTextEdit_default } from "./src-BY3LHeey.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { f as useUIStore } from "./users.store-AINJEAwY.js";
import { t as Modal_default } from "./Modal-Ylm2K_Ju.js";
import { Bt as EditorView, dn as EditorState, en as lineNumbers } from "./dist-_dH7Lc8v.js";
import { r as javascript } from "./expressions-DvYhsHzc.js";
import { r as codeEditorTheme } from "./dist-CwZhBTMI.js";
import { t as NodeIcon_default } from "./NodeIcon-wvz6Mzci.js";
import { c as updateToolRefFromNode, l as updateWorkflowToolRef, r as nodeToMcpServer, s as toolRefToNode } from "./useMcpServerAdapter-E8w8BFxn.js";
import { t as AgentJsonEditor_default } from "./AgentJsonEditor-CNoBCSem.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-K7s_zggT.js";
//#region src/features/agents/components/AgentToolConfigApprovalSetting.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigApprovalSetting_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigApprovalSetting",
	props: { modelValue: { type: Boolean } },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalText) }, [createVNode(unref(N8nText_default), {
				size: "small",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.approval.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.approval.hint")), 1)]),
				_: 1
			})], 2), createVNode(unref(Switch_default), {
				"model-value": __props.modelValue,
				"data-test-id": "agent-tool-approval-toggle",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event))
			}, null, 8, ["model-value"])], 2);
		};
	}
});
var AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow: "_approvalRow_1phiu_125",
	approvalText: "_approvalText_1phiu_134"
};
var AgentToolConfigApprovalSetting_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigApprovalSetting_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentCustomToolViewer.vue?vue&type=script&setup=true&lang.ts
var AgentCustomToolViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCustomToolViewer",
	props: { code: {} },
	setup(__props) {
		/**
		* Read-only TypeScript viewer for a custom tool's compiled source.
		* Shown in the editor column when the tree selects a `type: 'custom'` tool.
		*/
		const props = __props;
		const container = ref();
		let view = null;
		function createEditor(doc) {
			if (!container.value) return;
			view = new EditorView({
				state: EditorState.create({
					doc,
					extensions: [
						javascript({ typescript: true }),
						lineNumbers(),
						EditorView.lineWrapping,
						EditorState.readOnly.of(true),
						EditorView.editable.of(false),
						codeEditorTheme({
							isReadOnly: true,
							maxHeight: "100%"
						})
					]
				}),
				parent: container.value
			});
		}
		onMounted(() => createEditor(props.code ?? ""));
		onBeforeUnmount(() => {
			view?.destroy();
			view = null;
		});
		watch(() => props.code, (next) => {
			if (!view) return;
			const nextDoc = next ?? "";
			if (view.state.doc.toString() === nextDoc) return;
			view.dispatch({ changes: {
				from: 0,
				to: view.state.doc.length,
				insert: nextDoc
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "agent-custom-tool-viewer"
			}, [createBaseVNode("div", {
				ref_key: "container",
				ref: container,
				class: normalizeClass(_ctx.$style.editor)
			}, null, 2)], 2);
		};
	}
});
var AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_ihzea_125",
	editor: "_editor_ihzea_132"
};
var AgentCustomToolViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCustomToolViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigCustomContent.vue
var AgentToolConfigCustomContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigCustomContent",
	props: { code: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentCustomToolViewer_default, { code: __props.code }, null, 8, ["code"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigModalHeader.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigModalHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigModalHeader",
	props: {
		kind: {},
		title: {},
		nodeTypeDescription: { default: null },
		editable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["update:title"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [(__props.kind === "node" || __props.kind === "mcp") && __props.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
				key: 0,
				"node-type": __props.nodeTypeDescription,
				size: 24,
				circle: true,
				class: normalizeClass(_ctx.$style.icon)
			}, null, 8, ["node-type", "class"])) : __props.kind === "workflow" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "workflow",
				size: 20,
				class: normalizeClass(_ctx.$style.workflowHeaderIcon)
			}, null, 8, ["class"])) : __props.kind === "custom" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "code",
				size: 20,
				class: normalizeClass(_ctx.$style.customHeaderIcon)
			}, null, 8, ["class"])) : createCommentVNode("", true), __props.editable && __props.kind !== "custom" ? (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
				key: 3,
				"model-value": __props.title,
				"max-width": 400,
				class: normalizeClass(_ctx.$style.title),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:title", $event))
			}, null, 8, ["model-value", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 4,
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["class"]))], 2);
		};
	}
});
var AgentToolConfigModalHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1h3th_125",
	icon: "_icon_1h3th_132",
	workflowHeaderIcon: "_workflowHeaderIcon_1h3th_137",
	customHeaderIcon: "_customHeaderIcon_1h3th_143",
	title: "_title_1h3th_149"
};
var AgentToolConfigModalHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigModalHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigModalHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigNodeContent.vue
var AgentToolConfigNodeContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigNodeContent",
	props: {
		initialNode: {},
		existingToolNames: {},
		projectId: {},
		contentTestId: {}
	},
	emits: ["update:valid", "update:node-name"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const contentRef = ref(null);
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function getNode() {
			return contentRef.value?.node ?? null;
		}
		function getNodeTypeDescription() {
			return contentRef.value?.nodeTypeDescription ?? null;
		}
		__expose({
			getNode,
			getNodeTypeDescription,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(NodeToolSettingsContent_default, {
				ref_key: "contentRef",
				ref: contentRef,
				"initial-node": props.initialNode,
				"existing-tool-names": props.existingToolNames,
				"project-id": props.projectId,
				"hide-ask-assistant": true,
				"data-test-id": props.contentTestId,
				"onUpdate:valid": _cache[0] || (_cache[0] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[1] || (_cache[1] = ($event) => emit("update:node-name", $event))
			}, null, 8, [
				"initial-node",
				"existing-tool-names",
				"project-id",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/WorkflowToolConfigContent.vue?vue&type=script&setup=true&lang.ts
var WorkflowToolConfigContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowToolConfigContent",
	props: { initialRef: {} },
	emits: ["update:valid", "update:node-name"],
	setup(__props, { expose: __expose, emit: __emit }) {
		/**
		* Configure a workflow-type tool on an agent.
		*
		* Workflow tools have a very different shape from node tools — no node
		* parameters, no credentials — so we render a small dedicated form instead
		* of reusing `NodeToolSettingsContent`. The LLM-facing fields are:
		*   - name (edited in the modal header's inline-text widget)
		*   - description (what the LLM reads to understand when to use the tool)
		*   - allOutputs (`true` returns every node output; `false` = last node only)
		*
		* The underlying workflow's runtime input schema is inferred by
		* `WorkflowToolFactory.inferInputSchema` at invocation time based on the
		* trigger type — we don't configure it here.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const name = ref(props.initialRef.name ?? props.initialRef.workflow ?? "");
		const description = ref(props.initialRef.description ?? "");
		const allOutputs = ref(props.initialRef.allOutputs ?? false);
		watch(() => props.initialRef, (updated) => {
			name.value = updated.name ?? updated.workflow ?? "";
			description.value = updated.description ?? "";
			allOutputs.value = updated.allOutputs ?? false;
		});
		watch(name, (value) => {
			emit("update:valid", value.trim().length > 0);
			emit("update:node-name", value);
		}, { immediate: true });
		function handleChangeName(newName) {
			name.value = newName;
		}
		__expose({
			name,
			description,
			allOutputs,
			handleChangeName,
			nodeTypeDescription: null
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", {
						class: normalizeClass(_ctx.$style.label),
						for: "workflow-tool-description"
					}, toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.description")), 3),
					createVNode(unref(Input_default), {
						id: "workflow-tool-description",
						modelValue: description.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => description.value = $event),
						type: "textarea",
						rows: 4,
						placeholder: unref(i18n).baseText("agents.toolConfig.workflow.description.placeholder"),
						"data-test-id": "agent-workflow-tool-description"
					}, null, 8, ["modelValue", "placeholder"]),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.description.hint")), 1)]),
						_: 1
					})
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(Checkbox_default), {
					modelValue: allOutputs.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => allOutputs.value = $event),
					label: unref(i18n).baseText("agents.toolConfig.workflow.allOutputs"),
					"data-test-id": "agent-workflow-tool-all-outputs"
				}, null, 8, ["modelValue", "label"]), createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.allOutputs.hint")), 1)]),
					_: 1
				})], 2),
				renderSlot(_ctx.$slots, "commonSettings")
			], 2);
		};
	}
});
var WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_16rlt_125",
	field: "_field_16rlt_132",
	label: "_label_16rlt_138"
};
var WorkflowToolConfigContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowToolConfigContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigWorkflowContent.vue
var AgentToolConfigWorkflowContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigWorkflowContent",
	props: {
		initialRef: {},
		showApprovalSetting: { type: Boolean },
		approvalRequired: { type: Boolean }
	},
	emits: [
		"update:valid",
		"update:node-name",
		"update:approvalRequired"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const contentRef = ref(null);
		function handleChangeName(value) {
			contentRef.value?.handleChangeName(value);
		}
		function getName() {
			return contentRef.value?.name ?? "";
		}
		function getDescription() {
			return contentRef.value?.description ?? "";
		}
		function getAllOutputs() {
			return contentRef.value?.allOutputs ?? false;
		}
		__expose({
			getName,
			getDescription,
			getAllOutputs,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowToolConfigContent_default, {
				ref_key: "contentRef",
				ref: contentRef,
				"initial-ref": props.initialRef,
				"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[2] || (_cache[2] = ($event) => emit("update:node-name", $event))
			}, {
				commonSettings: withCtx(() => [props.showApprovalSetting ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
					key: 0,
					"model-value": props.approvalRequired ?? false,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:approvalRequired", $event))
				}, null, 8, ["model-value"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["initial-ref"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigModal.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		/**
		* Configure one agent tool entry (node/workflow/custom) or one MCP server.
		*/
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		function isMcpServerModalData(data) {
			return data.kind === "mcpServer";
		}
		const isMcpTool = computed(() => isMcpServerModalData(props.data));
		const mcpModalData = computed(() => isMcpServerModalData(props.data) ? props.data : null);
		const toolModalData = computed(() => isMcpServerModalData(props.data) ? null : props.data);
		const isWorkflowTool = computed(() => toolModalData.value?.toolRef.type === "workflow");
		const isCustomTool = computed(() => toolModalData.value?.toolRef.type === "custom");
		const nodeContentRef = ref(null);
		const mcpContentRef = ref(null);
		const workflowContentRef = ref(null);
		const isValid = ref(false);
		const activeView = ref("config");
		const approvalRequired = ref(false);
		const initialNode = computed(() => isMcpTool.value ? mcpModalData.value?.initialNode ?? null : isWorkflowTool.value || isCustomTool.value ? null : toolModalData.value ? toolRefToNode(toolModalData.value.toolRef) : null);
		const workflowInitialRef = computed(() => isWorkflowTool.value && toolModalData.value?.toolRef.type === "workflow" ? toolModalData.value.toolRef : null);
		const nodeName = ref(computed(() => {
			if (isMcpTool.value) return mcpModalData.value?.mcpServer.name ?? "";
			return (toolModalData.value?.toolRef.type === "node" ? toolModalData.value.toolRef.name : void 0) ?? initialNode.value?.name ?? "";
		}).value);
		const customToolCode = computed(() => !isMcpTool.value ? toolModalData.value?.customTool?.code ?? "" : "");
		const customToolTitle = computed(() => {
			const toolRef = toolModalData.value?.toolRef;
			const fallbackName = toolRef?.type === "custom" ? toolRef.id : toolRef?.type === "workflow" || toolRef?.type === "node" ? toolRef.name : void 0;
			return toolModalData.value?.customTool?.descriptor.name ?? fallbackName ?? i18n.baseText("agents.builder.tree.customBadge");
		});
		const viewOptions = computed(() => [{
			label: "Config",
			value: "config"
		}, {
			label: "Raw",
			value: "raw"
		}]);
		const canRender = computed(() => isCustomTool.value || isWorkflowTool.value || initialNode.value !== null);
		const canSave = computed(() => isCustomTool.value || isValid.value);
		const showApprovalSetting = computed(() => !isMcpTool.value && toolModalData.value !== null);
		watch(() => toolModalData.value?.toolRef, (toolRef) => {
			approvalRequired.value = Boolean(toolRef?.requireApproval);
		}, { immediate: true });
		const headerKind = computed(() => {
			if (isCustomTool.value) return "custom";
			if (isWorkflowTool.value) return "workflow";
			if (isMcpTool.value) return "mcp";
			return "node";
		});
		const headerNodeTypeDescription = computed(() => {
			if (isMcpTool.value) return mcpContentRef.value?.getNodeTypeDescription() ?? null;
			if (isWorkflowTool.value || isCustomTool.value) return null;
			return nodeContentRef.value?.getNodeTypeDescription() ?? null;
		});
		const rawEditorValue = computed(() => isMcpTool.value ? mcpModalData.value?.mcpServer ?? {} : toolModalData.value?.toolRef ?? {});
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function withApprovalRequirement(ref) {
			const updatedRef = { ...ref };
			if (approvalRequired.value) updatedRef.requireApproval = true;
			else delete updatedRef.requireApproval;
			return updatedRef;
		}
		function handleConfirm() {
			if (isCustomTool.value) {
				const toolData = toolModalData.value;
				if (!toolData) return;
				toolData.onConfirm(withApprovalRequirement(toolData.toolRef));
				closeDialog();
				return;
			}
			if (isMcpTool.value) {
				const currentNode = mcpContentRef.value?.getNode();
				const mcpData = mcpModalData.value;
				if (!currentNode) return;
				if (!mcpData) return;
				const updatedServer = nodeToMcpServer(currentNode, mcpData.mcpServer);
				mcpData.onConfirm(updatedServer);
				closeDialog();
				return;
			}
			if (isWorkflowTool.value) {
				const wc = workflowContentRef.value;
				const toolData = toolModalData.value;
				if (!toolData) return;
				if (!wc) return;
				const updatedRef = updateWorkflowToolRef(toolData.toolRef, {
					name: wc.getName(),
					description: wc.getDescription(),
					allOutputs: wc.getAllOutputs()
				});
				toolData.onConfirm(withApprovalRequirement(updatedRef));
				closeDialog();
				return;
			}
			const currentNode = nodeContentRef.value?.getNode();
			const toolData = toolModalData.value;
			if (!currentNode) return;
			if (!toolData) return;
			const updatedRef = updateToolRefFromNode(toolData.toolRef, currentNode);
			toolData.onConfirm(withApprovalRequirement(updatedRef));
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleRemove() {
			props.data.onRemove?.();
			closeDialog();
		}
		function handleChangeName(name) {
			if (isCustomTool.value) return;
			if (isMcpTool.value) mcpContentRef.value?.handleChangeName(name);
			else if (isWorkflowTool.value) workflowContentRef.value?.handleChangeName(name);
			else nodeContentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		return (_ctx, _cache) => {
			return canRender.value ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				name: __props.modalName,
				width: "780px",
				"max-height": "85vh",
				"data-test-id": "agent-tool-config-modal"
			}, {
				header: withCtx(() => [createVNode(AgentToolConfigModalHeader_default, {
					kind: headerKind.value,
					title: isCustomTool.value ? customToolTitle.value : nodeName.value,
					"node-type-description": headerNodeTypeDescription.value,
					"onUpdate:title": handleChangeName
				}, null, 8, [
					"kind",
					"title",
					"node-type-description"
				])]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.contentWrapper, (isCustomTool.value || activeView.value === "raw") && _ctx.$style.codeContentWrapper]) }, [isCustomTool.value ? (openBlock(), createBlock(AgentToolConfigCustomContent_default, {
					key: 0,
					code: customToolCode.value,
					class: normalizeClass(_ctx.$style.customToolViewer)
				}, null, 8, ["code", "class"])) : createCommentVNode("", true), isCustomTool.value && showApprovalSetting.value ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
					key: 1,
					modelValue: approvalRequired.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => approvalRequired.value = $event)
				}, null, 8, ["modelValue"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createVNode(unref(N8nRadioButtons_default), {
						"model-value": activeView.value,
						options: viewOptions.value,
						class: normalizeClass(_ctx.$style.viewToggle),
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeView.value = $event)
					}, null, 8, [
						"model-value",
						"options",
						"class"
					]),
					withDirectives(createVNode(AgentJsonEditor_default, {
						value: rawEditorValue.value,
						"read-only": "",
						"show-read-only-overlay": false,
						class: normalizeClass(_ctx.$style.rawEditor),
						"copy-button-test-id": "agent-tool-json-copy"
					}, null, 8, ["value", "class"]), [[vShow, activeView.value === "raw"]]),
					withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.configureTab) }, [workflowInitialRef.value ? (openBlock(), createBlock(AgentToolConfigWorkflowContent_default, {
						key: 0,
						ref_key: "workflowContentRef",
						ref: workflowContentRef,
						"initial-ref": workflowInitialRef.value,
						"show-approval-setting": showApprovalSetting.value,
						"approval-required": approvalRequired.value,
						"onUpdate:valid": handleValidUpdate,
						"onUpdate:nodeName": handleNodeNameUpdate,
						"onUpdate:approvalRequired": _cache[2] || (_cache[2] = ($event) => approvalRequired.value = $event)
					}, null, 8, [
						"initial-ref",
						"show-approval-setting",
						"approval-required"
					])) : isMcpTool.value && initialNode.value ? (openBlock(), createBlock(AgentToolConfigNodeContent_default, {
						key: 1,
						ref_key: "mcpContentRef",
						ref: mcpContentRef,
						"initial-node": initialNode.value,
						"existing-tool-names": __props.data.existingToolNames,
						"project-id": __props.data.projectId,
						"content-test-id": "agent-tool-config-mcp-content",
						"onUpdate:valid": handleValidUpdate,
						"onUpdate:nodeName": handleNodeNameUpdate
					}, null, 8, [
						"initial-node",
						"existing-tool-names",
						"project-id"
					])) : initialNode.value ? (openBlock(), createBlock(AgentToolConfigNodeContent_default, {
						key: 2,
						ref_key: "nodeContentRef",
						ref: nodeContentRef,
						"initial-node": initialNode.value,
						"existing-tool-names": __props.data.existingToolNames,
						"project-id": __props.data.projectId,
						"content-test-id": "node-tool-settings-content",
						"onUpdate:valid": handleValidUpdate,
						"onUpdate:nodeName": handleNodeNameUpdate
					}, null, 8, [
						"initial-node",
						"existing-tool-names",
						"project-id"
					])) : createCommentVNode("", true), !isMcpTool.value && initialNode.value && showApprovalSetting.value ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
						key: 3,
						modelValue: approvalRequired.value,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => approvalRequired.value = $event)
					}, null, 8, ["modelValue"])) : createCommentVNode("", true)], 2), [[vShow, activeView.value === "config"]])
				], 64))], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [__props.data.onRemove ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"data-test-id": "agent-tool-config-remove",
					onClick: handleRemove
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "trash-2",
						size: 16
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.tools.remove")), 1)]),
					_: 1
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canSave.value,
					"data-test-id": "agent-tool-config-save",
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.save")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default = {
	footer: "_footer_1ioxq_125",
	footerActions: "_footerActions_1ioxq_131",
	contentWrapper: "_contentWrapper_1ioxq_137",
	codeContentWrapper: "_codeContentWrapper_1ioxq_155",
	configureTab: "_configureTab_1ioxq_162",
	viewToggle: "_viewToggle_1ioxq_169",
	rawEditor: "_rawEditor_1ioxq_173",
	customToolViewer: "_customToolViewer_1ioxq_181"
};
var AgentToolConfigModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentToolConfigModal_default as default };
