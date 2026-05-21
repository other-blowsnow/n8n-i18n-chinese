import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, h as withModifiers, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-CwaTdA6t.js";
import { Ca as N8nText_default, Ct as N8nCard_default, Li as N8nActionBox_default, ct as useRoute, kt as N8nActionToggle_default, lt as useRouter } from "./src-4M_3Mukr.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { tn as useProjectsStore } from "./users.store-DI4bmc3m.js";
import { Hr as AGENT_BUILDER_VIEW } from "./constants-CVUc8I0d.js";
import { t as useRootStore } from "./useRootStore-Dw8BvkQq.js";
import { t as require_dateformat } from "./dateformat-C2u-Tx1a.js";
import { t as TimeAgo_default } from "./TimeAgo-BpGJ76cK.js";
import { t as useInsightsStore } from "./insights.store-5QtvN2W1.js";
import { i as useProjectPages } from "./readyToRun.store-C33FarHt.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-CZPg0OBq.js";
import { t as ProjectHeader_default } from "./ProjectHeader-D2EoVXXa.js";
import { t as InsightsSummary_default } from "./InsightsSummary-Bh7pre4p.js";
import { S as listAgents, f as deleteAgent } from "./agentTelemetry.utils-BRBmEmLH.js";
import { n as useAgentConfirmationModal, t as useAgentPublish } from "./useAgentPublish-BjG-oUBQ.js";
//#region src/features/agents/components/AgentCard.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var AgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCard",
	props: {
		agent: {},
		projectId: {}
	},
	emits: [
		"select",
		"published",
		"unpublished",
		"deleted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const rootStore = useRootStore();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const { publish, unpublish } = useAgentPublish();
		const isPublished = computed(() => props.agent.publishedVersion !== null);
		const actions = computed(() => {
			return [isPublished.value ? {
				value: "unpublish",
				label: locale.baseText("agents.list.actions.unpublish")
			} : {
				value: "publish",
				label: locale.baseText("agents.list.actions.publish")
			}, {
				value: "delete",
				label: locale.baseText("agents.list.actions.delete"),
				divided: true
			}];
		});
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.agent.createdAt, `d mmmm${String(props.agent.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		async function onAction(action) {
			if (action === "publish") {
				const updated = await publish(props.projectId, props.agent.id);
				if (updated) emit("published", updated);
			} else if (action === "unpublish") {
				const updated = await unpublish(props.projectId, props.agent.id, props.agent.name);
				if (updated) emit("unpublished", updated);
			} else if (action === "delete") {
				if (await openAgentConfirmationModal({
					title: locale.baseText("agents.delete.modal.title", { interpolate: { name: props.agent.name } }),
					description: locale.baseText("agents.delete.modal.description", { interpolate: { name: props.agent.name } }),
					confirmButtonText: locale.baseText("agents.delete.modal.button.delete"),
					cancelButtonText: locale.baseText("generic.cancel")
				}) !== "confirm") return;
				await deleteAgent(rootStore.restApiContext, props.projectId, props.agent.id);
				emit("deleted", props.agent.id);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "agent-card",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("select", __props.agent.id))
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading),
					"data-test-id": "agent-card-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name), 1)]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [isPublished.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.publishIndicator),
					"data-test-id": "agent-card-publish-indicator"
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.publishIndicatorDot) }, null, 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.list.published")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true), createVNode(unref(N8nActionToggle_default), {
					actions: actions.value,
					theme: "dark",
					"data-test-id": "agent-card-actions",
					onAction
				}, null, 8, ["actions"])], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createBaseVNode("span", null, [
					createTextVNode(toDisplayString(unref(locale).baseText("agents.list.updated")) + " ", 1),
					createVNode(TimeAgo_default, { date: String(__props.agent.updatedAt) }, null, 8, ["date"]),
					_cache[2] || (_cache[2] = createTextVNode(" | ", -1))
				]), createBaseVNode("span", null, toDisplayString(unref(locale).baseText("agents.list.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 1)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AgentCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_1pjm8_125",
	cardHeading: "_cardHeading_1pjm8_135",
	cardDescription: "_cardDescription_1pjm8_143",
	cardActions: "_cardActions_1pjm8_153",
	publishIndicator: "_publishIndicator_1pjm8_164",
	publishIndicatorDot: "_publishIndicatorDot_1pjm8_176"
};
var AgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentsListView.vue
var AgentsListView_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsListView",
	setup(__props) {
		const locale = useI18n();
		const route = useRoute();
		const router = useRouter();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const insightsStore = useInsightsStore();
		const projectPages = useProjectPages();
		const allAgents = ref([]);
		const loading = ref(true);
		const projectId = computed(() => route.params.projectId ?? projectsStore.personalProject?.id ?? "");
		const sortFns = {
			lastUpdated: (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
			lastCreated: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			nameAsc: (a, b) => a.name.localeCompare(b.name),
			nameDesc: (a, b) => b.name.localeCompare(a.name)
		};
		async function fetchAgents() {
			loading.value = true;
			try {
				allAgents.value = await listAgents(rootStore.restApiContext, projectId.value);
			} finally {
				loading.value = false;
			}
		}
		function onSelectAgent(agentId) {
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: projectId.value,
					agentId
				}
			});
		}
		function onAgentPublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
		}
		function onAgentUnpublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
		}
		function onAgentDeleted(agentId) {
			allAgents.value = allAgents.value.filter((a) => a.id !== agentId);
		}
		onMounted(fetchAgents);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				"resource-key": "agents",
				resources: allAgents.value,
				loading: loading.value,
				disabled: false,
				"sort-fns": sortFns,
				"sort-options": [
					"lastUpdated",
					"lastCreated",
					"nameAsc",
					"nameDesc"
				],
				"type-props": { itemSize: 80 },
				shareable: false,
				"ui-config": {
					searchEnabled: true,
					showFiltersDropdown: false,
					sortEnabled: true
				},
				"display-name": (agent) => agent.name,
				"tab-key": "agents"
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "agent" }, {
					default: withCtx(() => [unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				empty: withCtx(() => [createVNode(unref(N8nActionBox_default), {
					heading: unref(locale).baseText("agents.list.empty.heading"),
					description: unref(locale).baseText("agents.list.empty.description")
				}, null, 8, ["heading", "description"])]),
				default: withCtx(({ data }) => [createVNode(AgentCard_default, {
					class: "mb-2xs",
					agent: data,
					"project-id": projectId.value,
					onSelect: onSelectAgent,
					onPublished: onAgentPublished,
					onUnpublished: onAgentUnpublished,
					onDeleted: onAgentDeleted
				}, null, 8, ["agent", "project-id"])]),
				_: 1
			}, 8, [
				"resources",
				"loading",
				"display-name"
			]);
		};
	}
});
//#endregion
export { AgentsListView_default as default };
