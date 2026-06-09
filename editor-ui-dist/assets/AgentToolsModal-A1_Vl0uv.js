import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, U as mergeProps, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, c as useCssModule, gt as watch, j as createVNode, lt as useAttrs, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Da as N8nText_default, Oa as N8nButton_default, Ta as N8nHeading_default, Ui as Input_default, Wi as N8nIconButton_default, ka as N8nIcon_default, kt as N8nCollapsiblePanel_default, zi as N8nTooltip_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { k as useNodeHelpers, q as useNodeTypesStore } from "./workflows.store-BKfEj1aG.js";
import { t as useToast } from "./useToast-fCpp7iAn.js";
import { Gc as v4, Ja as INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES, Su as getDebounceTime, Ya as SUPPORTED_WORKFLOW_TOOL_TRIGGERS, Zr as AGENT_TOOL_CONFIG_MODAL_KEY, gc as NodeConnectionTypes, mu as DEBOUNCE_TIME, wc as AI_VENDOR_NODE_TYPES } from "./constants-DIP3enMx.js";
import { t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { G as useDebounceFn } from "./core-nZc0i8VB.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-0wV1ayWS.js";
import { D as getWorkflow, t as useWorkflowsListStore } from "./workflowsList.store-C7raj-u1.js";
import { t as Modal_default } from "./Modal-Bz0C3EHi.js";
import { t as _virtual_node_popularity_data_default } from "./_virtual_node-popularity-data-DUP8Fmvb.js";
import { t as NodeIcon_default } from "./NodeIcon-BKe7oxn9.js";
import { a as getExistingToolNames, i as nodeTypeToNewMcpServer, n as mcpServerToNode, o as nodeTypeToNewToolRef, s as toolRefToNode, t as isMcpRelatedNodeType, u as workflowToNewToolRef } from "./useMcpServerAdapter-CkY9zTWl.js";
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
		missingCredentials: { type: Boolean }
	},
	emits: ["configure", "add"],
	setup(__props, { emit: __emit }) {
		/**
		* Row component for the Agent Tools modal.
		*
		* Forked from Chat Hub's `ToolListItem` to match the Agents Figma spec:
		*   - Connected rows show "✓ Connected" (or "Add credentials" chip) + gear,
		*     not an enable/disable toggle.
		*   - Available rows use a "Connect" button.
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps(unref(attrs), { class: containerClass.value }), [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 32
				}, null, 8, ["node-type"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.name),
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(displayName.value), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
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
				})) : (openBlock(), createBlock(ToolConnectedBadge_default, { key: 1 })), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("agents.tools.configure") }, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "settings",
						variant: "ghost",
						text: "",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("configure"))
					})]),
					_: 1
				}, 8, ["content"])], 64)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					size: "small",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("add"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.connect")), 1)]),
					_: 1
				}))], 2)
			], 16);
		};
	}
});
var AgentToolItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_18a6m_125",
	iconWrapper: "_iconWrapper_18a6m_131",
	content: "_content_18a6m_139",
	name: "_name_18a6m_147",
	description: "_description_18a6m_154",
	actions: "_actions_18a6m_161"
};
var AgentToolItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/WorkflowToolRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var WorkflowToolRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowToolRow",
	props: {
		mode: {},
		name: {},
		description: { default: void 0 },
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
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.mode === "configured" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(ToolConnectedBadge_default), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("agents.tools.configure") }, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "settings",
					variant: "ghost",
					text: "",
					"aria-label": unref(i18n).baseText("agents.tools.configure"),
					"data-test-id": __props.configureTestId,
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("configure"))
				}, null, 8, ["aria-label", "data-test-id"])]),
				_: 1
			}, 8, ["content"])], 64)) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "subtle",
				size: "small",
				onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("add"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.connect")), 1)]),
				_: 1
			}))], 2)], 10, _hoisted_1);
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
//#region src/features/agents/composables/useAgentToolTelemetry.ts
/** Identifier payload — node_type for node tools, workflow name for workflow tools. */
function identityProps(ref) {
	if (ref.type === "node") return { node_type: ref.node?.nodeType };
	if (ref.type === "workflow") return { workflow: ref.workflow };
	return { custom_id: ref.id };
}
function useAgentToolTelemetry(agentId) {
	const telemetry = useTelemetry();
	function withAgent(props) {
		return agentId ? {
			...props,
			agent_id: agentId
		} : props;
	}
	/** Fired when the user clicks Connect on an Available row — a new-ref flow begins. */
	function trackAddStarted(toolType) {
		telemetry.track("User started adding agent tool", withAgent({
			tool_type: toolType,
			source: "manual"
		}));
	}
	/** Fired when a new tool ref is saved for the first time. */
	function trackAdded(ref) {
		telemetry.track("User added agent tool", withAgent({
			tool_type: ref.type,
			has_approval: ref.requireApproval ?? false,
			...identityProps(ref)
		}));
	}
	/** Fired when a new MCP server is saved for the first time. */
	function trackAddedMcpServer(server) {
		telemetry.track("User added agent tool", withAgent({
			tool_type: "mcpServer",
			has_approval: false,
			server_name: server.name,
			authentication: server.authentication
		}));
	}
	/** Fired when an existing tool's config is saved. */
	function trackEdited(ref) {
		telemetry.track("User edited agent tool", withAgent({
			tool_type: ref.type,
			...identityProps(ref)
		}));
	}
	/** Fired when the user confirms removing a tool (from modal or sidebar). */
	function trackRemoved(ref) {
		telemetry.track("User removed agent tool", withAgent({
			tool_type: ref.type,
			...identityProps(ref)
		}));
	}
	return {
		trackAddStarted,
		trackAdded,
		trackAddedMcpServer,
		trackEdited,
		trackRemoved
	};
}
//#endregion
//#region src/features/agents/components/AgentToolsModal.vue?vue&type=script&setup=true&lang.ts
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
		const isConnectedSectionExpanded = ref(true);
		const isAvailableMcpSectionExpanded = ref(true);
		const isAvailableToolsSectionExpanded = ref(true);
		const isAvailableWorkflowsSectionExpanded = ref(true);
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
		function isAgentProviderNodeType(nodeType) {
			return agentProviderNodeTypes.has(nodeType.name);
		}
		/**
		* Node types eligible to appear in "Available tools": anything the node types
		* store exposes as outputting an AI Tool connection, plus provider nodes the
		* agent builder/runtime can execute directly. Nodes that also take inputs are
		* excluded (subagents — not simple tools), except for provider nodes whose
		* dynamic inputs are optional runtime affordances.
		*/
		const availableToolTypes = computed(() => {
			return [...new Set([...nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? [], ...AI_VENDOR_NODE_TYPES])].map((name) => nodeTypesStore.getNodeType(name)).filter((nt) => nt !== null && !nt.hidden && (isAgentProviderNodeType(nt) || !hasInputs(nt))).sort((a, b) => {
				const popA = nodePopularityMap.get(a.name) ?? 0;
				return (nodePopularityMap.get(b.name) ?? 0) - popA;
			});
		});
		const availableMcpToolTypes = computed(() => availableToolTypes.value.filter((nodeType) => isMcpRelatedNodeType(nodeType.name)));
		const availableStandardToolTypes = computed(() => availableToolTypes.value.filter((nodeType) => !isMcpRelatedNodeType(nodeType.name)));
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
					missingCredentials: !!issues?.credentials && Object.keys(issues.credentials).length > 0
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
					missingCredentials: !!issues?.credentials && Object.keys(issues.credentials).length > 0
				});
			}
			return out;
		});
		/** Connected workflow tools — mirrors `configuredTools` for the Connected section. */
		const configuredWorkflows = computed(() => workingToolEntries.value.filter((entry) => entry.ref.type === "workflow").map(({ localId, ref }) => ({
			localId,
			ref,
			name: ref.name ?? ref.workflow,
			description: ref.description
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
		const filteredAvailableTools = computed(() => {
			if (!debouncedSearchQuery.value) return availableStandardToolTypes.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return availableStandardToolTypes.value.filter((nt) => nt.displayName.toLowerCase().includes(query) || nt.description?.toLowerCase().includes(query));
		});
		const filteredAvailableMcpTools = computed(() => {
			if (!debouncedSearchQuery.value) return availableMcpToolTypes.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return availableMcpToolTypes.value.filter((nt) => nt.displayName.toLowerCase().includes(query) || nt.description?.toLowerCase().includes(query));
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
		function handleAddTool(nodeType) {
			if (isMcpRelatedNodeType(nodeType.name)) {
				handleAddMcpServer(nodeType);
				return;
			}
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
			props.data.onConfirm(workingTools.value, workingMcpServers.value);
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
					filteredConfiguredMcpServers.value.length + filteredConfiguredTools.value.length + filteredConfiguredWorkflows.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, [createVNode(unref(N8nCollapsiblePanel_default), {
						modelValue: isConnectedSectionExpanded.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isConnectedSectionExpanded.value = $event),
						class: normalizeClass(_ctx.$style.sectionPanel),
						"disable-animation": true
					}, {
						title: withCtx(() => [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.connected")), 1)]),
							_: 1
						})]),
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.toolsList),
							"data-test-id": "agent-tools-connected-list"
						}, [
							(openBlock(true), createElementBlock(Fragment, null, renderList(filteredConfiguredMcpServers.value, (server) => {
								return openBlock(), createBlock(AgentToolItem_default, {
									key: server.localId,
									"node-type": server.nodeType,
									"configured-node": server.node,
									"missing-credentials": server.missingCredentials,
									mode: "configured",
									class: normalizeClass(_ctx.$style.toolsListItem),
									onConfigure: ($event) => handleConfigureMcpServer(server)
								}, null, 8, [
									"node-type",
									"configured-node",
									"missing-credentials",
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
									mode: "configured",
									class: normalizeClass(_ctx.$style.toolsListItem),
									onConfigure: ($event) => handleConfigureTool(tool)
								}, null, 8, [
									"node-type",
									"configured-node",
									"missing-credentials",
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
									"row-test-id": "agent-tools-connected-workflow-row",
									"configure-test-id": "agent-tools-connected-workflow-configure",
									onConfigure: ($event) => handleConfigureTool(wf)
								}, null, 8, [
									"name",
									"description",
									"onConfigure"
								]);
							}), 128))
						], 2)]),
						_: 1
					}, 8, ["modelValue", "class"])], 2)) : createCommentVNode("", true),
					filteredAvailableMcpTools.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.section)
					}, [createVNode(unref(N8nCollapsiblePanel_default), {
						modelValue: isAvailableMcpSectionExpanded.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isAvailableMcpSectionExpanded.value = $event),
						class: normalizeClass(_ctx.$style.sectionPanel),
						"disable-animation": true
					}, {
						title: withCtx(() => [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.availableMcpServers", { interpolate: { count: filteredAvailableMcpTools.value.length } })), 1)]),
							_: 1
						})]),
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.toolsList),
							"data-test-id": "agent-tools-available-mcp-list"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableMcpTools.value, (nodeType) => {
							return openBlock(), createBlock(AgentToolItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								mode: "available",
								class: normalizeClass(_ctx.$style.toolsListItem),
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"class",
								"onAdd"
							]);
						}), 128))], 2)]),
						_: 1
					}, 8, ["modelValue", "class"])], 2)) : createCommentVNode("", true),
					filteredAvailableTools.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.section)
					}, [createVNode(unref(N8nCollapsiblePanel_default), {
						modelValue: isAvailableToolsSectionExpanded.value,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isAvailableToolsSectionExpanded.value = $event),
						class: normalizeClass(_ctx.$style.sectionPanel),
						"disable-animation": true
					}, {
						title: withCtx(() => [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.availableTools", { interpolate: { count: filteredAvailableTools.value.length } })), 1)]),
							_: 1
						})]),
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.toolsList),
							"data-test-id": "agent-tools-available-list"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableTools.value, (nodeType) => {
							return openBlock(), createBlock(AgentToolItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								mode: "available",
								class: normalizeClass(_ctx.$style.toolsListItem),
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"class",
								"onAdd"
							]);
						}), 128))], 2)]),
						_: 1
					}, 8, ["modelValue", "class"])], 2)) : createCommentVNode("", true),
					filteredAvailableWorkflows.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.section)
					}, [createVNode(unref(N8nCollapsiblePanel_default), {
						modelValue: isAvailableWorkflowsSectionExpanded.value,
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isAvailableWorkflowsSectionExpanded.value = $event),
						class: normalizeClass(_ctx.$style.sectionPanel),
						"disable-animation": true
					}, {
						title: withCtx(() => [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.tools.availableWorkflows", { interpolate: { count: filteredAvailableWorkflows.value.length } })), 1)]),
							_: 1
						})]),
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.toolsList),
							"data-test-id": "agent-tools-available-workflows-list"
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableWorkflows.value, (workflow) => {
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
						}), 128))], 2)]),
						_: 1
					}, 8, ["modelValue", "class"])], 2)) : createCommentVNode("", true),
					filteredConfiguredMcpServers.value.length === 0 && filteredConfiguredTools.value.length === 0 && filteredConfiguredWorkflows.value.length === 0 && filteredAvailableMcpTools.value.length === 0 && filteredAvailableTools.value.length === 0 && filteredAvailableWorkflows.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 4,
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
	modal: "_modal_8daum_125",
	searchInput: "_searchInput_8daum_129",
	listWrapper: "_listWrapper_8daum_134",
	section: "_section_8daum_147",
	sectionPanel: "_sectionPanel_8daum_152",
	toolsList: "_toolsList_8daum_158",
	toolsListItem: "_toolsListItem_8daum_163",
	emptyState: "_emptyState_8daum_167"
};
var AgentToolsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentToolsModal_default as default };
