import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, dt as useModel, gt as watch, it as renderSlot, j as createVNode, lt as useAttrs, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-AzCpuecL.js";
import { Ai as N8nText_default, Fi as N8nIconButton_default, Ii as N8nButton_default, Li as N8nIcon_default, Pi as Input_default, jr as N8nTooltip_default, jt as N8nHeading_default, zt as N8nCollapsiblePanel_default } from "./src-DidBXlm8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { B as useDebounceFn } from "./dist-CmlFwYoT.js";
import { t as useToast } from "./useToast-pZtUw1sf.js";
import { L as useNodeTypesStore, V as filterAndSearchNodes, X as isNodePreviewKey, et as removePreviewToken, mt as stripToolSuffix } from "./workflows.store-DDm0zgUM.js";
import { $i as v4, Ai as AI_VENDOR_NODE_TYPES, B as SUPPORTED_WORKFLOW_TOOL_TRIGGERS, F as AGENT_BUILDER_AVAILABLE_AI_UTILITY_TOOL_NODE_TYPES, I as AGENT_BUILDER_HIDDEN_AVAILABLE_TOOL_NODE_TYPES, R as INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES, ai as NodeConnectionTypes } from "./src-D4ZcEdLA.js";
import { t as useRootStore } from "./useRootStore-CffNiZQF.js";
import { t as useUsersStore } from "./users.store-BnmshxQB.js";
import { kr as AGENT_TOOL_CONFIG_MODAL_KEY, ot as AI_SECTION_RECOMMENDED_TOOLS } from "./constants-CJQKNI-b.js";
import { t as DEBOUNCE_TIME } from "./durations-CNO5pC2_.js";
import { o as useUIStore } from "./posthog.store-Di9fXa7o.js";
import { t as getDebounceTime } from "./useDebounce-B7RJD4JN.js";
import { s as getWorkflow, t as useWorkflowsListStore } from "./workflowsList.store-COsTVthz.js";
import { t as useNodeHelpers } from "./useNodeHelpers-CYneRdYV.js";
import { t as Modal_default } from "./Modal-BV_PHJeH.js";
import { i as _virtual_node_popularity_data_default } from "./canvas.eventBus-rWJGCQaw.js";
import { t as useInstallNode } from "./useInstallNode-CFLYIjOd.js";
import { t as NodeIcon_default } from "./NodeIcon-DGmpoodn.js";
import { a as getExistingToolNames, i as nodeTypeToNewMcpServer, n as mcpServerToNode, o as nodeTypeToNewToolRef, s as toolRefToNode, t as isMcpRelatedNodeType, u as workflowToNewToolRef } from "./useMcpServerAdapter-D-oEDxXy.js";
import { t as shield_alt_default } from "./shield-alt-CLyxPZyb.js";
import { t as useAgentToolTelemetry } from "./useAgentToolTelemetry-d7l3AwBo.js";
//#region src/features/agents/components/ToolConnectedBadge.vue?vue&type=script&setup=true&lang.ts
var ToolConnectedBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolConnectedBadge",
	setup(__props) {
		/**
		* "✓ Connected" badge rendered next to the gear in configured tool rows.
		* Shared between AgentToolItem (node tools) and the workflow-row markup in
		* AgentToolsModal so the two stay visually in lockstep.
		*/
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.badge) }, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: 14
			}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("agents.tools.connected")), 1)], 2);
		};
	}
});
var ToolConnectedBadge_vue_vue_type_style_index_0_lang_module_default = { badge: "_badge_1sb69_125" };
var ToolConnectedBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolConnectedBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolConnectedBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/ToolApprovalBadge.vue?vue&type=script&setup=true&lang.ts
var ToolApprovalBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolApprovalBadge",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.badge),
				"data-test-id": "agent-tool-approval-badge"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "shield",
				size: 14
			}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("agents.tools.needsApproval")), 1)], 2);
		};
	}
});
var ToolApprovalBadge_vue_vue_type_style_index_0_lang_module_default = { badge: "_badge_1sb69_125" };
var ToolApprovalBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolApprovalBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolApprovalBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/ToolCredsMissingChip.vue?vue&type=script&setup=true&lang.ts
var ToolCredsMissingChip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolCredsMissingChip",
	props: { variant: { default: "rectangular" } },
	emits: ["click"],
	setup(__props) {
		/**
		* Warning chip that surfaces a tool row's missing-credentials state.
		*
		* Shared between the Agent Tools modal (rectangular chip next to the gear
		* button) and the sidebar (pill-shaped button — the only affordance to fix
		* the tool when the gear is hidden). Both variants emit `click` so the
		* caller can route to the config modal.
		*
		* Kept handrolled because N8nButton doesn't expose a "warning" theme — the
		* available variants (solid/subtle/ghost/outline/destructive/success) don't
		* cover the amber-tint affordance product wants for missing-credentials.
		* Reassess if/when a warning variant lands in the design system.
		*/
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass([_ctx.$style.chip, _ctx.$style[__props.variant]]),
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
			}, [createVNode(unref(N8nIcon_default), {
				icon: "triangle-alert",
				size: 14
			}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("agents.tools.addCredentials")), 1)], 2);
		};
	}
});
var ToolCredsMissingChip_vue_vue_type_style_index_0_lang_module_default = {
	chip: "_chip_qz784_125",
	rectangular: "_rectangular_qz784_141",
	pill: "_pill_qz784_146"
};
var ToolCredsMissingChip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolCredsMissingChip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolCredsMissingChip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolItem.vue?vue&type=script&setup=true&lang.ts
var AgentToolItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AgentToolItem",
	props: {
		nodeType: {},
		configuredNode: {},
		mode: {},
		missingCredentials: { type: Boolean },
		requireApproval: { type: Boolean },
		communityPreview: { type: Boolean },
		installing: { type: Boolean },
		installDisabled: { type: Boolean }
	},
	emits: ["configure", "add"],
	setup(__props, { emit: __emit }) {
		/**
		* Row component for the Agent Tools modal.
		*
		* Forked from Chat Hub's `ToolListItem` to match the Agents Figma spec:
		*   - Connected rows show "✓ Connected" (or "Add credentials" chip) + gear,
		*     not an enable/disable toggle.
		*   - Available rows use a "Connect" button (or "Install" for community previews).
		*
		* Kept as a sibling component so Chat Hub's list item remains untouched.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const attrs = useAttrs();
		const style = useCssModule();
		const containerClass = computed(() => [
			style.item,
			{ [style.configured]: props.mode === "configured" },
			attrs.class
		]);
		const description = computed(() => {
			if (props.mode === "configured" && props.configuredNode) {
				const creds = props.configuredNode.credentials ?? {};
				const firstCred = Object.values(creds)[0];
				if (firstCred?.name) return firstCred.name;
				return i18n.baseText("agents.tools.noCredentials");
			}
			return props.nodeType.description;
		});
		const displayName = computed(() => {
			if (props.configuredNode) return props.configuredNode.name;
			return props.nodeType.displayName;
		});
		const actionLabel = computed(() => props.communityPreview ? i18n.baseText("communityNodeDetails.install") : i18n.baseText("agents.tools.connect"));
		const actionDisabled = computed(() => props.communityPreview && (props.installing || props.installDisabled));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps(unref(attrs), { class: containerClass.value }), [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 32
				}, null, 8, ["node-type"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.nameRow) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.name),
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(displayName.value), 1)]),
					_: 1
				}, 8, ["class"]), __props.communityPreview ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.approved"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(shield_alt_default), {
						class: normalizeClass(_ctx.$style.verifiedIcon),
						"data-test-id": "agent-tool-verified-badge"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.mode === "configured" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.missingCredentials ? (openBlock(), createBlock(ToolCredsMissingChip_default, {
					key: 0,
					"data-test-id": "agent-tool-add-credentials-chip",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("configure"))
				})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.requireApproval ? (openBlock(), createBlock(ToolApprovalBadge_default, { key: 0 })) : createCommentVNode("", true), createVNode(ToolConnectedBadge_default)], 64)), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("agents.tools.configure") }, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						text: "",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("configure"))
					})]),
					_: 1
				}, 8, ["content"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.communityPreview && __props.installDisabled && !__props.installing ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.contact.admin"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						loading: __props.installing,
						disabled: true,
						"data-test-id": "agent-tool-install-button"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(actionLabel.value), 1)]),
						_: 1
					}, 8, ["loading"])])]),
					_: 1
				}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					size: "small",
					loading: __props.installing,
					disabled: actionDisabled.value,
					"data-test-id": __props.communityPreview ? "agent-tool-install-button" : "agent-tool-connect-button",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("add"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(actionLabel.value), 1)]),
					_: 1
				}, 8, [
					"loading",
					"disabled",
					"data-test-id"
				]))], 64))], 2)
			], 16);
		};
	}
});
var AgentToolItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_1gl5c_125",
	iconWrapper: "_iconWrapper_1gl5c_131",
	content: "_content_1gl5c_139",
	nameRow: "_nameRow_1gl5c_147",
	verifiedIcon: "_verifiedIcon_1gl5c_154",
	name: "_name_1gl5c_147",
	description: "_description_1gl5c_168",
	actions: "_actions_1gl5c_175"
};
var AgentToolItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolsSection.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-test-id"];
var AgentToolsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolsSection",
	props: /* @__PURE__ */ mergeModels({
		title: {},
		listTestId: {}
	}, {
		"modelValue": {
			type: Boolean,
			required: true
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const expanded = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nCollapsiblePanel_default), {
				modelValue: expanded.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => expanded.value = $event),
				class: normalizeClass(_ctx.$style.sectionPanel),
				"disable-animation": true
			}, {
				title: withCtx(() => [createVNode(unref(N8nHeading_default), {
					size: "small",
					color: "text-light",
					tag: "h3"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.toolsList),
					"data-test-id": __props.listTestId
				}, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$2)]),
				_: 3
			}, 8, ["modelValue", "class"])], 2);
		};
	}
});
var AgentToolsSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_1ltnn_125",
	sectionPanel: "_sectionPanel_1ltnn_130",
	toolsList: "_toolsList_1ltnn_136"
};
var AgentToolsSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolsSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/WorkflowToolRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["data-test-id"];
var WorkflowToolRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowToolRow",
	props: {
		mode: {},
		name: {},
		description: { default: void 0 },
		requireApproval: {
			type: Boolean,
			default: false
		},
		rowTestId: { default: void 0 },
		configureTestId: { default: void 0 }
	},
	emits: ["configure", "add"],
	setup(__props) {
		/**
		* Row component for workflow tools in the Agent Tools modal.
		*
		* Mirrors the layout of AgentToolItem but rendered for workflow refs — a
		* "workflow" lucide icon instead of a NodeIcon, no credential-aware subtitle,
		* no missing-creds affordance. `mode` controls the action area: Connect
		* button for the Available section, gear + Connected badge for the
		* Connected section.
		*/
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.row),
				"data-test-id": __props.rowTestId
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(unref(N8nIcon_default), {
				icon: "workflow",
				size: 20,
				class: normalizeClass(_ctx.$style.workflowIcon)
			}, null, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.textWrapper) }, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.name)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.name), 1)]),
				_: 1
			}, 8, ["class"]), __props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-light",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.mode === "configured" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				__props.requireApproval ? (openBlock(), createBlock(ToolApprovalBadge_default, { key: 0 })) : createCommentVNode("", true),
				createVNode(ToolConnectedBadge_default),
				createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("agents.tools.configure") }, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						text: "",
						"aria-label": unref(i18n).baseText("agents.tools.configure"),
						"data-test-id": __props.configureTestId,
						onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("configure"))
					}, null, 8, ["aria-label", "data-test-id"])]),
					_: 1
				}, 8, ["content"])
			], 64)) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "subtle",
				size: "small",
				onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("add"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.connect")), 1)]),
				_: 1
			}))], 2)], 10, _hoisted_1$1);
		};
	}
});
var WorkflowToolRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_19mi2_125",
	label: "_label_19mi2_133",
	iconWrapper: "_iconWrapper_19mi2_141",
	workflowIcon: "_workflowIcon_19mi2_149",
	textWrapper: "_textWrapper_19mi2_153",
	name: "_name_19mi2_160",
	description: "_description_19mi2_166",
	actions: "_actions_19mi2_172"
};
var WorkflowToolRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowToolRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowToolRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolsModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var AgentToolsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const nodeHelpers = useNodeHelpers();
		const uiStore = useUIStore();
		const workflowsListStore = useWorkflowsListStore();
		const rootStore = useRootStore();
		const toast = useToast();
		const toolTelemetry = useAgentToolTelemetry(props.data.agentId);
		const usersStore = useUsersStore();
		const { installNode: installCommunityNode } = useInstallNode();
		const isAdminOrOwner = computed(() => usersStore.isAdminOrOwner);
		const nodePopularityMap = new Map(_virtual_node_popularity_data_default.map((node) => [node.id, node.popularity]));
		const supportedWorkflowToolTriggerTypes = new Set(SUPPORTED_WORKFLOW_TOOL_TRIGGERS);
		const incompatibleWorkflowToolBodyNodeTypes = new Set(INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES);
		function toWorkingToolEntries(tools, existingEntries = []) {
			return tools.map((ref, index) => ({
				localId: existingEntries[index]?.localId ?? v4(),
				ref
			}));
		}
		function toWorkingMcpServerEntries(servers, existingEntries = []) {
			return servers.map((server, index) => ({
				localId: existingEntries[index]?.localId ?? v4(),
				server
			}));
		}
		const workingToolEntries = ref(toWorkingToolEntries(props.data.tools));
		watch(() => props.data.tools, (tools) => {
			workingToolEntries.value = toWorkingToolEntries(tools, workingToolEntries.value);
		});
		const workingMcpServerEntries = ref(toWorkingMcpServerEntries(props.data.mcpServers ?? []));
		watch(() => props.data.mcpServers ?? [], (servers) => {
			workingMcpServerEntries.value = toWorkingMcpServerEntries(servers, workingMcpServerEntries.value);
		});
		const workingTools = computed(() => workingToolEntries.value.map(({ ref }) => ref));
		const workingMcpServers = computed(() => workingMcpServerEntries.value.map(({ server }) => server));
		const searchQuery = ref("");
		const debouncedSearchQuery = ref("");
		const installingToolName = ref(null);
		const isConnectedSectionExpanded = ref(true);
		const isAvailableMcpToolsSectionExpanded = ref(true);
		const isAvailableWorkflowsSectionExpanded = ref(true);
		const isAvailableAiToolsSectionExpanded = ref(true);
		const isAvailableN8nToolsSectionExpanded = ref(true);
		const isAvailableExternalToolsSectionExpanded = ref(true);
		const setDebouncedSearch = useDebounceFn((value) => {
			debouncedSearchQuery.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		watch(searchQuery, (value) => {
			setDebouncedSearch(value);
		});
		function hasInputs(nodeType) {
			const { inputs } = nodeType;
			if (Array.isArray(inputs)) return inputs.length > 0;
			return true;
		}
		function hasRequiredCredentials(nodeType) {
			return (nodeType.credentials ?? []).some((credential) => credential.required !== false);
		}
		function isConfigurableParameter(parameter) {
			return parameter.type !== "notice" && parameter.type !== "hidden";
		}
		function needsSetup(nodeType) {
			return hasRequiredCredentials(nodeType) || (nodeType.properties ?? []).some(isConfigurableParameter);
		}
		function makeUniqueName(baseName, existingNames, format) {
			const defaultFormat = (name, counter) => `${name} (${counter})`;
			const formatFn = format ?? defaultFormat;
			if (!existingNames.includes(baseName)) return baseName;
			let counter = 1;
			while (existingNames.includes(formatFn(baseName, counter))) counter++;
			return formatFn(baseName, counter);
		}
		const agentProviderNodeTypes = new Set(AI_VENDOR_NODE_TYPES);
		const hiddenAvailableToolNodeTypes = new Set(AGENT_BUILDER_HIDDEN_AVAILABLE_TOOL_NODE_TYPES);
		const availableAiUtilityToolNodeTypes = new Set(AGENT_BUILDER_AVAILABLE_AI_UTILITY_TOOL_NODE_TYPES);
		function isAgentProviderNodeType(nodeType) {
			return agentProviderNodeTypes.has(nodeType.name);
		}
		function isHiddenAvailableToolType(nodeType) {
			return hiddenAvailableToolNodeTypes.has(nodeType.name);
		}
		function hasToolsSubcategory(nodeType, subcategory) {
			return nodeType.codex?.subcategories?.Tools?.includes(subcategory) ?? false;
		}
		function isAvailableAiToolType(nodeType) {
			return isAgentProviderNodeType(nodeType) || availableAiUtilityToolNodeTypes.has(nodeType.name);
		}
		function isAvailableN8nToolType(nodeType) {
			return hasToolsSubcategory(nodeType, AI_SECTION_RECOMMENDED_TOOLS);
		}
		function resolveToolNodeType(name) {
			return nodeTypesStore.getNodeType(name) ?? nodeTypesStore.communityNodeType(name)?.nodeDescription ?? null;
		}
		function isCommunityPreviewTool(nodeType) {
			if (!isNodePreviewKey(nodeType.name)) return false;
			const baseName = stripToolSuffix(nodeType.name);
			return !!nodeTypesStore.communityNodeType(baseName);
		}
		function communityPackageNameFor(nodeType) {
			const baseName = stripToolSuffix(nodeType.name);
			return nodeTypesStore.communityNodeType(baseName)?.packageName ?? removePreviewToken(nodeType.name.split(".")[0] ?? nodeType.name);
		}
		/**
		* Node types eligible to appear in "Available tools": anything the node types
		* store exposes as outputting an AI Tool connection, plus provider nodes the
		* agent builder/runtime can execute directly. Nodes that also take inputs are
		* excluded (subagents — not simple tools), except for provider nodes whose
		* dynamic inputs are optional runtime affordances.
		*
		* Resolves via getNodeType with a community-preview fallback so official
		* uninstalled verified tools (already in the AiTool name index via
		* visibleNodeTypes) are not dropped — same catalog the canvas Tools picker uses.
		*/
		const availableToolTypes = computed(() => {
			return [...new Set([...nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? [], ...AI_VENDOR_NODE_TYPES])].map((name) => resolveToolNodeType(name)).filter((nt) => nt !== null && !nt.hidden && !isHiddenAvailableToolType(nt) && (isAgentProviderNodeType(nt) || !hasInputs(nt))).sort((a, b) => {
				const popA = nodePopularityMap.get(a.name) ?? 0;
				return (nodePopularityMap.get(b.name) ?? 0) - popA;
			});
		});
		const availableMcpTypes = computed(() => availableToolTypes.value.filter((nodeType) => isMcpRelatedNodeType(nodeType.name)));
		const availableAiToolTypes = computed(() => availableToolTypes.value.filter((nodeType) => !isMcpRelatedNodeType(nodeType.name) && isAvailableAiToolType(nodeType)));
		const availableN8nToolTypes = computed(() => availableToolTypes.value.filter((nodeType) => !isMcpRelatedNodeType(nodeType.name) && !isAvailableAiToolType(nodeType) && isAvailableN8nToolType(nodeType)));
		const availableExternalToolTypes = computed(() => availableToolTypes.value.filter((nodeType) => !isMcpRelatedNodeType(nodeType.name) && !isAvailableAiToolType(nodeType) && !isAvailableN8nToolType(nodeType)));
		/**
		* Fetched workflows kept **local** to this modal instance — we deliberately
		* do NOT write into `useWorkflowsListStore`'s `workflowsById` cache. That
		* store is shared with the Workflows list page, project pages, etc., and
		* calling `setWorkflows` here would clobber whatever they've cached until
		* they re-fetch. `searchWorkflows` is used for its network-only side
		* (network request + return) — it doesn't mutate the store, which is exactly
		* why it's safe here.
		*/
		const projectWorkflows = ref([]);
		onMounted(async () => {
			nodeTypesStore.fetchCommunityNodePreviews();
			try {
				projectWorkflows.value = await workflowsListStore.searchWorkflows({
					projectId: props.data.projectId,
					triggerNodeTypes: [...SUPPORTED_WORKFLOW_TOOL_TRIGGERS],
					select: [
						"id",
						"name",
						"description",
						"isArchived",
						"nodes"
					]
				});
			} catch (error) {
				console.warn("[AgentToolsModal] failed to load workflows for project", error);
			}
		});
		/**
		* Workflows eligible to appear in "Workflows (N)": non-archived workflows with
		* a supported trigger and no incompatible body nodes.
		* Already-connected workflows remain listed — users can add the same workflow
		* twice with different descriptions / input schemas. Compatibility is checked
		* again on Connect and on save so stale list data can't bypass validation.
		*/
		function isWorkflowCompatibleWithAgentTools(workflow) {
			const nodes = workflow.nodes ?? [];
			const hasSupportedTrigger = nodes.some((node) => supportedWorkflowToolTriggerTypes.has(node.type));
			const hasIncompatibleBodyNode = nodes.some((node) => incompatibleWorkflowToolBodyNodeTypes.has(node.type));
			return hasSupportedTrigger && !hasIncompatibleBodyNode;
		}
		const availableWorkflows = computed(() => projectWorkflows.value.filter((workflow) => !workflow.isArchived && isWorkflowCompatibleWithAgentTools(workflow)));
		/** Configured tools annotated with their node-type description (for the icon + fallback name). */
		const configuredTools = computed(() => {
			const out = [];
			for (const { localId, ref } of workingToolEntries.value) {
				if (ref.type !== "node") continue;
				const node = toolRefToNode(ref);
				if (!node) continue;
				const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
				if (!nodeType) continue;
				const issues = nodeHelpers.getNodeCredentialIssues(node, nodeType);
				out.push({
					localId,
					ref,
					node,
					nodeType,
					missingCredentials: !!issues?.credentials && Object.keys(issues.credentials).length > 0,
					requireApproval: ref.requireApproval === true
				});
			}
			return out;
		});
		function resolveMcpNodeType(server) {
			const preferredTypeName = server.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
			return nodeTypesStore.getNodeType(preferredTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool");
		}
		const configuredMcpServers = computed(() => {
			const out = [];
			for (const { localId, server } of workingMcpServerEntries.value) {
				const nodeType = resolveMcpNodeType(server);
				if (!nodeType) continue;
				const node = mcpServerToNode(server, nodeType);
				const issues = nodeHelpers.getNodeCredentialIssues(node, nodeType);
				out.push({
					localId,
					server,
					node,
					nodeType,
					missingCredentials: !!issues?.credentials && Object.keys(issues.credentials).length > 0,
					requireApproval: server.approval?.mode === "global" || server.approval?.mode === "selected" && server.approval.tools.length > 0
				});
			}
			return out;
		});
		/** Connected workflow tools — mirrors `configuredTools` for the Connected section. */
		const configuredWorkflows = computed(() => workingToolEntries.value.filter((entry) => entry.ref.type === "workflow").map(({ localId, ref }) => ({
			localId,
			ref,
			name: ref.name ?? ref.workflow,
			description: ref.description,
			requireApproval: ref.requireApproval === true
		})));
		const filteredConfiguredTools = computed(() => {
			if (!debouncedSearchQuery.value) return configuredTools.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return configuredTools.value.filter((t) => t.node.name.toLowerCase().includes(query) || t.nodeType.displayName.toLowerCase().includes(query));
		});
		const filteredConfiguredMcpServers = computed(() => {
			if (!debouncedSearchQuery.value) return configuredMcpServers.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return configuredMcpServers.value.filter((server) => server.server.name.toLowerCase().includes(query) || server.nodeType.displayName.toLowerCase().includes(query));
		});
		const filteredConfiguredWorkflows = computed(() => {
			if (!debouncedSearchQuery.value) return configuredWorkflows.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return configuredWorkflows.value.filter((w) => w.name.toLowerCase().includes(query) || (w.description ?? "").toLowerCase().includes(query));
		});
		function filterAvailableToolTypes(nodeTypes) {
			if (!debouncedSearchQuery.value) return nodeTypes;
			const query = debouncedSearchQuery.value.toLowerCase();
			return nodeTypes.filter((nt) => nt.displayName.toLowerCase().includes(query) || nt.description?.toLowerCase().includes(query));
		}
		const filteredAvailableAiTools = computed(() => filterAvailableToolTypes(availableAiToolTypes.value));
		const filteredAvailableMcpTools = computed(() => filterAvailableToolTypes(availableMcpTypes.value));
		const filteredAvailableN8nTools = computed(() => filterAvailableToolTypes(availableN8nToolTypes.value));
		const filteredAvailableExternalTools = computed(() => {
			const base = filterAvailableToolTypes(availableExternalToolTypes.value);
			if (!debouncedSearchQuery.value) return base;
			const communitySearchHits = filterAndSearchNodes(nodeTypesStore.communityNodesAndActions.mergedNodes, debouncedSearchQuery.value, {
				isAiSubcategory: true,
				aiConnectionType: NodeConnectionTypes.AiTool
			});
			const seen = new Set(base.map((nt) => nt.name));
			const previews = [];
			for (const hit of communitySearchHits) {
				if (hit.type !== "node") continue;
				const resolved = resolveToolNodeType(hit.key) ?? resolveToolNodeType(hit.properties.name);
				if (!resolved || seen.has(resolved.name) || resolved.hidden || hasInputs(resolved)) continue;
				seen.add(resolved.name);
				previews.push(resolved);
			}
			return [...base, ...previews];
		});
		const filteredAvailableWorkflows = computed(() => {
			if (!debouncedSearchQuery.value) return availableWorkflows.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return availableWorkflows.value.filter((wf) => wf.name.toLowerCase().includes(query) || (wf.description ?? "").toLowerCase().includes(query));
		});
		function addToolRef(savedRef) {
			workingToolEntries.value = [...workingToolEntries.value, {
				localId: v4(),
				ref: savedRef
			}];
			toolTelemetry.trackAdded(savedRef);
			commit();
			uiStore.closeModal(props.modalName);
			toast.showMessage({
				title: i18n.baseText("agents.tools.added"),
				type: "success"
			});
		}
		function addMcpServer(savedServer) {
			workingMcpServerEntries.value = [...workingMcpServerEntries.value, {
				localId: v4(),
				server: savedServer
			}];
			toolTelemetry.trackAddedMcpServer(savedServer);
			commit();
			uiStore.closeModal(props.modalName);
			toast.showMessage({
				title: i18n.baseText("agents.tools.mcp.added"),
				type: "success"
			});
		}
		function openConfigForNewRef(newRef) {
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					toolRef: newRef,
					projectId: props.data.projectId,
					agentId: props.data.agentId,
					supportsToolApproval: props.data.supportsToolApproval,
					existingToolNames: getExistingToolNames(workingTools.value),
					onConfirm: (savedRef) => {
						addToolRef(savedRef);
					}
				}
			});
		}
		function getExistingMcpServerNames(servers, exclude) {
			return servers.filter((server) => server !== exclude).map((server) => server.name);
		}
		function openConfigForNewMcpServer(server, nodeType) {
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					kind: "mcpServer",
					mcpServer: server,
					initialNode: mcpServerToNode(server, nodeType),
					projectId: props.data.projectId,
					agentId: props.data.agentId,
					supportsToolApproval: props.data.supportsToolApproval,
					existingToolNames: getExistingMcpServerNames(workingMcpServers.value),
					onConfirm: (savedServer) => {
						addMcpServer(savedServer);
					}
				}
			});
		}
		function handleAddMcpServer(nodeType) {
			const newServer = nodeTypeToNewMcpServer(nodeType);
			newServer.name = makeUniqueName(newServer.name, getExistingMcpServerNames(workingMcpServers.value), (name, counter) => `${name}-${counter}`);
			openConfigForNewMcpServer(newServer, nodeType);
		}
		function addNodeTool(nodeType) {
			toolTelemetry.trackAddStarted("node");
			const newRef = nodeTypeToNewToolRef(nodeType);
			if (needsSetup(nodeType)) {
				openConfigForNewRef(newRef);
				return;
			}
			if (newRef.type === "node") addToolRef({
				...newRef,
				name: makeUniqueName(newRef.name ?? nodeType.displayName, getExistingToolNames(workingTools.value))
			});
			else addToolRef({ ...newRef });
		}
		async function installAndAddCommunityPreview(nodeType) {
			const packageName = communityPackageNameFor(nodeType);
			const baseName = stripToolSuffix(nodeType.name);
			installingToolName.value = nodeType.name;
			try {
				if (!(await installCommunityNode({
					type: "verified",
					packageName,
					nodeType: baseName,
					telemetry: {
						source: "agent builder tools",
						hasQuickConnect: false
					}
				})).success) return;
				const installedName = removePreviewToken(nodeType.name);
				addNodeTool(nodeTypesStore.getNodeType(installedName) ?? nodeType);
			} finally {
				installingToolName.value = null;
			}
		}
		async function handleAddTool(nodeType) {
			if (isMcpRelatedNodeType(nodeType.name)) {
				handleAddMcpServer(nodeType);
				return;
			}
			if (isCommunityPreviewTool(nodeType)) {
				await installAndAddCommunityPreview(nodeType);
				return;
			}
			addNodeTool(nodeType);
		}
		async function handleAddWorkflow(workflow) {
			toolTelemetry.trackAddStarted("workflow");
			let full;
			try {
				full = await getWorkflow(rootStore.restApiContext, workflow.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.tools.workflow.fetchFailed.title"), { message: i18n.baseText("agents.tools.workflow.fetchFailed.message") });
				return;
			}
			const incompatible = (full.nodes ?? []).filter((node) => incompatibleWorkflowToolBodyNodeTypes.has(node.type));
			if (incompatible.length > 0) {
				const nodeNames = incompatible.map((n) => n.name).join(", ");
				toast.showError(new Error(i18n.baseText("agents.tools.workflow.incompatible.message", { interpolate: {
					name: workflow.name,
					nodes: nodeNames
				} })), i18n.baseText("agents.tools.workflow.incompatible.title"));
				return;
			}
			openConfigForNewRef(workflowToNewToolRef(workflow));
		}
		function handleConfigureTool(tool) {
			const toolRef = tool.ref;
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					toolRef,
					projectId: props.data.projectId,
					agentId: props.data.agentId,
					supportsToolApproval: props.data.supportsToolApproval,
					existingToolNames: getExistingToolNames(workingTools.value, toolRef),
					onConfirm: (updatedRef) => {
						workingToolEntries.value = workingToolEntries.value.map((entry) => entry.localId === tool.localId ? {
							...entry,
							ref: updatedRef
						} : entry);
						toolTelemetry.trackEdited(updatedRef);
						commit();
					}
				}
			});
		}
		function handleConfigureMcpServer(serverView) {
			const nodeType = resolveMcpNodeType(serverView.server);
			if (!nodeType) return;
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					kind: "mcpServer",
					mcpServer: serverView.server,
					initialNode: mcpServerToNode(serverView.server, nodeType),
					projectId: props.data.projectId,
					agentId: props.data.agentId,
					supportsToolApproval: props.data.supportsToolApproval,
					existingToolNames: getExistingMcpServerNames(workingMcpServers.value, serverView.server),
					onConfirm: (updatedServer) => {
						workingMcpServerEntries.value = workingMcpServerEntries.value.map((entry) => entry.localId === serverView.localId ? {
							...entry,
							server: updatedServer
						} : entry);
						commit();
					}
				}
			});
		}
		function commit() {
			props.data.onConfirm({
				tools: workingTools.value,
				mcpServers: workingMcpServers.value
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "880px",
				"custom-class": _ctx.$style.modal,
				"data-test-id": "agent-tools-modal"
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createVNode(unref(Input_default), {
					modelValue: searchQuery.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					placeholder: unref(i18n).baseText("agents.tools.search.placeholder"),
					clearable: "",
					"data-test-id": "agent-tools-search",
					class: normalizeClass(_ctx.$style.searchInput)
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					_: 1
				}, 8, [
					"modelValue",
					"placeholder",
					"class"
				]), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.listWrapper),
					"data-test-id": "agent-tools-list"
				}, [
					filteredConfiguredMcpServers.value.length + filteredConfiguredTools.value.length + filteredConfiguredWorkflows.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(AgentToolsSection_default, {
						modelValue: isConnectedSectionExpanded.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isConnectedSectionExpanded.value = $event),
						title: unref(i18n).baseText("agents.tools.connected"),
						"list-test-id": "agent-tools-connected-list"
					}, {
						default: withCtx(() => [
							(openBlock(true), createElementBlock(Fragment, null, renderList(filteredConfiguredMcpServers.value, (server) => {
								return openBlock(), createBlock(AgentToolItem_default, {
									key: server.localId,
									"node-type": server.nodeType,
									"configured-node": server.node,
									"missing-credentials": server.missingCredentials,
									"require-approval": server.requireApproval,
									mode: "configured",
									class: normalizeClass(_ctx.$style.toolsListItem),
									onConfigure: ($event) => handleConfigureMcpServer(server)
								}, null, 8, [
									"node-type",
									"configured-node",
									"missing-credentials",
									"require-approval",
									"class",
									"onConfigure"
								]);
							}), 128)),
							(openBlock(true), createElementBlock(Fragment, null, renderList(filteredConfiguredTools.value, (tool) => {
								return openBlock(), createBlock(AgentToolItem_default, {
									key: tool.localId,
									"node-type": tool.nodeType,
									"configured-node": tool.node,
									"missing-credentials": tool.missingCredentials,
									"require-approval": tool.requireApproval,
									mode: "configured",
									class: normalizeClass(_ctx.$style.toolsListItem),
									onConfigure: ($event) => handleConfigureTool(tool)
								}, null, 8, [
									"node-type",
									"configured-node",
									"missing-credentials",
									"require-approval",
									"class",
									"onConfigure"
								]);
							}), 128)),
							(openBlock(true), createElementBlock(Fragment, null, renderList(filteredConfiguredWorkflows.value, (wf) => {
								return openBlock(), createBlock(WorkflowToolRow_default, {
									key: wf.localId,
									mode: "configured",
									name: wf.name,
									description: wf.description,
									"require-approval": wf.requireApproval,
									"row-test-id": "agent-tools-connected-workflow-row",
									"configure-test-id": "agent-tools-connected-workflow-configure",
									onConfigure: ($event) => handleConfigureTool(wf)
								}, null, 8, [
									"name",
									"description",
									"require-approval",
									"onConfigure"
								]);
							}), 128))
						]),
						_: 1
					}, 8, ["modelValue", "title"])])) : createCommentVNode("", true),
					filteredAvailableMcpTools.value.length > 0 ? (openBlock(), createBlock(AgentToolsSection_default, {
						key: 1,
						modelValue: isAvailableMcpToolsSectionExpanded.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isAvailableMcpToolsSectionExpanded.value = $event),
						title: unref(i18n).baseText("agents.tools.availableMcpServers", { interpolate: { count: filteredAvailableMcpTools.value.length } }),
						"list-test-id": "agent-tools-available-mcp-list"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableMcpTools.value, (nodeType) => {
							return openBlock(), createBlock(AgentToolItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								"community-preview": isCommunityPreviewTool(nodeType),
								installing: installingToolName.value === nodeType.name,
								"install-disabled": !isAdminOrOwner.value,
								mode: "available",
								class: normalizeClass(_ctx.$style.toolsListItem),
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"community-preview",
								"installing",
								"install-disabled",
								"class",
								"onAdd"
							]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "title"])) : createCommentVNode("", true),
					filteredAvailableAiTools.value.length > 0 ? (openBlock(), createBlock(AgentToolsSection_default, {
						key: 2,
						modelValue: isAvailableAiToolsSectionExpanded.value,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isAvailableAiToolsSectionExpanded.value = $event),
						title: unref(i18n).baseText("agents.tools.availableAiTools", { interpolate: { count: filteredAvailableAiTools.value.length } }),
						"list-test-id": "agent-tools-available-ai-list"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableAiTools.value, (nodeType) => {
							return openBlock(), createBlock(AgentToolItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								"community-preview": isCommunityPreviewTool(nodeType),
								installing: installingToolName.value === nodeType.name,
								"install-disabled": !isAdminOrOwner.value,
								mode: "available",
								class: normalizeClass(_ctx.$style.toolsListItem),
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"community-preview",
								"installing",
								"install-disabled",
								"class",
								"onAdd"
							]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "title"])) : createCommentVNode("", true),
					filteredAvailableN8nTools.value.length > 0 ? (openBlock(), createBlock(AgentToolsSection_default, {
						key: 3,
						modelValue: isAvailableN8nToolsSectionExpanded.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isAvailableN8nToolsSectionExpanded.value = $event),
						title: unref(i18n).baseText("agents.tools.availableN8nTools", { interpolate: { count: filteredAvailableN8nTools.value.length } }),
						"list-test-id": "agent-tools-available-n8n-list"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableN8nTools.value, (nodeType) => {
							return openBlock(), createBlock(AgentToolItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								"community-preview": isCommunityPreviewTool(nodeType),
								installing: installingToolName.value === nodeType.name,
								"install-disabled": !isAdminOrOwner.value,
								mode: "available",
								class: normalizeClass(_ctx.$style.toolsListItem),
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"community-preview",
								"installing",
								"install-disabled",
								"class",
								"onAdd"
							]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "title"])) : createCommentVNode("", true),
					filteredAvailableExternalTools.value.length > 0 ? (openBlock(), createBlock(AgentToolsSection_default, {
						key: 4,
						modelValue: isAvailableExternalToolsSectionExpanded.value,
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isAvailableExternalToolsSectionExpanded.value = $event),
						title: unref(i18n).baseText("agents.tools.availableExternalTools", { interpolate: { count: filteredAvailableExternalTools.value.length } }),
						"list-test-id": "agent-tools-available-external-list"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableExternalTools.value, (nodeType) => {
							return openBlock(), createBlock(AgentToolItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								"community-preview": isCommunityPreviewTool(nodeType),
								installing: installingToolName.value === nodeType.name,
								"install-disabled": !isAdminOrOwner.value,
								mode: "available",
								class: normalizeClass(_ctx.$style.toolsListItem),
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"community-preview",
								"installing",
								"install-disabled",
								"class",
								"onAdd"
							]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "title"])) : createCommentVNode("", true),
					filteredAvailableWorkflows.value.length > 0 ? (openBlock(), createBlock(AgentToolsSection_default, {
						key: 5,
						modelValue: isAvailableWorkflowsSectionExpanded.value,
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isAvailableWorkflowsSectionExpanded.value = $event),
						title: unref(i18n).baseText("agents.tools.availableWorkflows", { interpolate: { count: filteredAvailableWorkflows.value.length } }),
						"list-test-id": "agent-tools-available-workflows-list"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableWorkflows.value, (workflow) => {
							return openBlock(), createBlock(WorkflowToolRow_default, {
								key: workflow.id,
								mode: "available",
								name: workflow.name,
								description: workflow.description,
								"row-test-id": "agent-tools-available-workflow-row",
								onAdd: ($event) => handleAddWorkflow(workflow)
							}, null, 8, [
								"name",
								"description",
								"onAdd"
							]);
						}), 128))]),
						_: 1
					}, 8, ["modelValue", "title"])) : createCommentVNode("", true),
					filteredConfiguredMcpServers.value.length === 0 && filteredConfiguredTools.value.length === 0 && filteredConfiguredWorkflows.value.length === 0 && filteredAvailableMcpTools.value.length === 0 && filteredAvailableWorkflows.value.length === 0 && filteredAvailableAiTools.value.length === 0 && filteredAvailableN8nTools.value.length === 0 && filteredAvailableExternalTools.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 6,
						class: normalizeClass(_ctx.$style.emptyState),
						"data-test-id": "agent-tools-empty-state"
					}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(debouncedSearchQuery.value ? unref(i18n).baseText("agents.tools.noResults.withQuery", { interpolate: { query: debouncedSearchQuery.value } }) : unref(i18n).baseText("agents.tools.noResults")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["name", "custom-class"]);
		};
	}
});
var AgentToolsModal_vue_vue_type_style_index_0_lang_module_default = {
	modal: "_modal_1yyjs_125",
	searchInput: "_searchInput_1yyjs_129",
	listWrapper: "_listWrapper_1yyjs_134",
	toolsListItem: "_toolsListItem_1yyjs_147",
	emptyState: "_emptyState_1yyjs_151"
};
var AgentToolsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentToolsModal_default as default };
