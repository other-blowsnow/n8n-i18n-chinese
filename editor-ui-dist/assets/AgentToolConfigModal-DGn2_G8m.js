import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, bt as withDirectives, gt as watch, j as createVNode, p as vShow, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-DXwO88M2.js";
import { Ea as N8nIcon_default, Fi as Input_default, M as N8nRadioButtons_default, Ta as N8nButton_default, dt as Checkbox_default, p as N8nInlineTextEdit_default, wa as N8nText_default } from "./src-pyi3rpL8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { r as useUIStore } from "./users.store-g_JotOI6.js";
import { t as Modal_default } from "./Modal-41n8zwej.js";
import { H as EditorView, ht as EditorState, nt as lineNumbers } from "./dist-Bt6-x6Gj.js";
import { t as javascript } from "./dist-C3PROd3r.js";
import { t as codeEditorTheme } from "./theme-BNPS2A13.js";
import { t as NodeIcon_default } from "./NodeIcon-D90Esdzu.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-hXYjfn_z.js";
import { a as updateWorkflowToolRef, i as updateToolRefFromNode, r as toolRefToNode } from "./useAgentToolRefAdapter-ZOg0Bq0W.js";
import { t as AgentJsonEditor_default } from "./AgentJsonEditor-DR8CP0Es.js";
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
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
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [createVNode(unref(Checkbox_default), {
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
			})], 2)], 2);
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
//#region src/features/agents/components/AgentToolConfigModal.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		/**
		* Configure a single tool (node or workflow) on an agent.
		*
		* Takes an `AgentJsonToolRef` (the persisted shape from `@n8n/api-types`) and
		* renders the appropriate form:
		*   - `type: 'node'`   → shared `NodeToolSettingsContent` (NDV-style param form)
		*   - `type: 'workflow'` → small `WorkflowToolConfigContent` (description +
		*                          allOutputs toggle)
		*   - `type: 'custom'` → read-only TypeScript source viewer
		*
		* On Save, edits are merged back into the ref:
		*   - Node tools round-trip via `updateToolRefFromNode`.
		*   - Workflow tools round-trip via `updateWorkflowToolRef`.
		*/
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const isWorkflowTool = computed(() => props.data.toolRef.type === "workflow");
		const isCustomTool = computed(() => props.data.toolRef.type === "custom");
		const nodeContentRef = ref(null);
		const workflowContentRef = ref(null);
		const isValid = ref(false);
		const activeView = ref("config");
		/** Derive an INode view of a node-type ref once. Null for workflow/custom refs. */
		const initialNode = computed(() => isWorkflowTool.value || isCustomTool.value ? null : toolRefToNode(props.data.toolRef));
		const nodeName = ref(computed(() => {
			return (props.data.toolRef.type === "node" ? props.data.toolRef.name : void 0) ?? initialNode.value?.name ?? "";
		}).value);
		const customToolCode = computed(() => props.data.customTool?.code ?? "");
		const customToolTitle = computed(() => props.data.customTool?.descriptor.name ?? ("name" in props.data.toolRef ? props.data.toolRef.name : void 0) ?? ("id" in props.data.toolRef ? props.data.toolRef.id : void 0) ?? i18n.baseText("agents.builder.tree.customBadge"));
		const viewOptions = computed(() => [{
			label: "Config",
			value: "config"
		}, {
			label: "Raw",
			value: "raw"
		}]);
		/** Gate the modal render — for node tools we need a resolvable node; workflow
		*  and custom tools render from data that is already on the ref/agent. */
		const canRender = computed(() => isCustomTool.value || isWorkflowTool.value || initialNode.value !== null);
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleConfirm() {
			if (isCustomTool.value) {
				closeDialog();
				return;
			}
			if (isWorkflowTool.value) {
				const wc = workflowContentRef.value;
				if (!wc) return;
				const updatedRef = updateWorkflowToolRef(props.data.toolRef, {
					name: wc.name,
					description: wc.description,
					allOutputs: wc.allOutputs
				});
				props.data.onConfirm(updatedRef);
				closeDialog();
				return;
			}
			const currentNode = nodeContentRef.value?.node;
			if (!currentNode) return;
			const updatedRef = updateToolRefFromNode(props.data.toolRef, currentNode);
			props.data.onConfirm(updatedRef);
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
			if (isWorkflowTool.value) workflowContentRef.value?.handleChangeName(name);
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
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [!isWorkflowTool.value && nodeContentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": nodeContentRef.value.nodeTypeDescription,
					size: 24,
					circle: true,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : isWorkflowTool.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "workflow",
					size: 20,
					class: normalizeClass(_ctx.$style.workflowHeaderIcon)
				}, null, 8, ["class"])) : isCustomTool.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 2,
					icon: "code",
					size: 20,
					class: normalizeClass(_ctx.$style.customHeaderIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true), !isCustomTool.value ? (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
					key: 3,
					"model-value": nodeName.value,
					"max-width": 400,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleChangeName
				}, null, 8, ["model-value", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 4,
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(customToolTitle.value), 1)]),
					_: 1
				}, 8, ["class"]))], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.contentWrapper, (isCustomTool.value || activeView.value === "raw") && _ctx.$style.codeContentWrapper]) }, [isCustomTool.value ? (openBlock(), createBlock(AgentCustomToolViewer_default, {
					key: 0,
					code: customToolCode.value,
					class: normalizeClass(_ctx.$style.customToolViewer)
				}, null, 8, ["code", "class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createVNode(unref(N8nRadioButtons_default), {
						"model-value": activeView.value,
						options: viewOptions.value,
						class: normalizeClass(_ctx.$style.viewToggle),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeView.value = $event)
					}, null, 8, [
						"model-value",
						"options",
						"class"
					]),
					withDirectives(createVNode(AgentJsonEditor_default, {
						value: __props.data.toolRef,
						"read-only": "",
						"show-read-only-overlay": false,
						class: normalizeClass(_ctx.$style.rawEditor),
						"copy-button-test-id": "agent-tool-json-copy"
					}, null, 8, ["value", "class"]), [[vShow, activeView.value === "raw"]]),
					withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.configureTab) }, [__props.data.toolRef.type === "workflow" ? (openBlock(), createBlock(WorkflowToolConfigContent_default, {
						key: 0,
						ref_key: "workflowContentRef",
						ref: workflowContentRef,
						"initial-ref": __props.data.toolRef,
						"onUpdate:valid": handleValidUpdate,
						"onUpdate:nodeName": handleNodeNameUpdate
					}, null, 8, ["initial-ref"])) : initialNode.value ? (openBlock(), createBlock(NodeToolSettingsContent_default, {
						key: 1,
						ref_key: "nodeContentRef",
						ref: nodeContentRef,
						"initial-node": initialNode.value,
						"existing-tool-names": __props.data.existingToolNames,
						"project-id": __props.data.projectId,
						"hide-ask-assistant": true,
						"onUpdate:valid": handleValidUpdate,
						"onUpdate:nodeName": handleNodeNameUpdate
					}, null, 8, [
						"initial-node",
						"existing-tool-names",
						"project-id"
					])) : createCommentVNode("", true)], 2), [[vShow, activeView.value === "config"]])
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
					default: withCtx(() => [createTextVNode(toDisplayString(isCustomTool.value ? unref(i18n).baseText("generic.close") : unref(i18n).baseText("agents.toolConfig.cancel")), 1)]),
					_: 1
				}), !isCustomTool.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					disabled: !isValid.value,
					"data-test-id": "agent-tool-config-save",
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.save")), 1)]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true)], 2)], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1veo3_125",
	icon: "_icon_1veo3_132",
	workflowHeaderIcon: "_workflowHeaderIcon_1veo3_137",
	customHeaderIcon: "_customHeaderIcon_1veo3_143",
	title: "_title_1veo3_149",
	footer: "_footer_1veo3_158",
	footerActions: "_footerActions_1veo3_164",
	contentWrapper: "_contentWrapper_1veo3_170",
	codeContentWrapper: "_codeContentWrapper_1veo3_187",
	configureTab: "_configureTab_1veo3_193",
	viewToggle: "_viewToggle_1veo3_200",
	rawEditor: "_rawEditor_1veo3_204",
	customToolViewer: "_customToolViewer_1veo3_212"
};
var AgentToolConfigModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentToolConfigModal_default as default };
