import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-AzCpuecL.js";
import { Ii as N8nButton_default, Li as N8nIcon_default, Mr as truncate, en as DropdownMenu_default, w as N8nBreadcrumbs_default } from "./src-DidBXlm8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-y-zflQYZ.js";
import { dn as useProjectsStore } from "./workflows.store-DDm0zgUM.js";
import { Nr as EXECUTIONS_SECTION_KEY, vr as AGENT_BUILDER_VIEW, wr as AGENT_SESSION_DETAIL_VIEW } from "./constants-CJQKNI-b.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { t as convertToDisplayDate } from "./dateFormatter-B0Og1nYr.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-BkmE5BbF.js";
import { t as AgentSessionTimelinePanel_default } from "./AgentSessionTimelinePanel-BPx9X-Eu.js";
//#region src/features/agents/components/AgentSessionTimelineHeader.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineHeader",
	props: {
		breadcrumbItems: {},
		sessionTitle: {},
		sessionOptions: {},
		showMetrics: { type: Boolean },
		triggerSource: {},
		triggerIcon: {},
		triggerLabel: {},
		totalTokens: {},
		totalCost: {},
		durationLabel: {}
	},
	emits: [
		"breadcrumb-select",
		"session-select",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.topBar) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBarLeft) }, [createVNode(unref(N8nBreadcrumbs_default), {
				items: props.breadcrumbItems,
				theme: "medium",
				onItemSelected: _cache[1] || (_cache[1] = ($event) => emit("breadcrumb-select", $event))
			}, {
				append: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.crumbSeparator),
					"aria-hidden": "true"
				}, "/", 2), createVNode(unref(DropdownMenu_default), {
					items: props.sessionOptions,
					placement: "bottom-start",
					"extra-popper-class": _ctx.$style.sessionDropdownMenu,
					"data-testid": "session-header-switcher",
					onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.switcherButton),
						"aria-label": unref(i18n).baseText("agentSessions.sessionName")
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switcherLabel) }, toDisplayString(props.sessionTitle), 3), createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})]),
						_: 1
					}, 8, ["class", "aria-label"])]),
					"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionDropdownName) }, toDisplayString(item.label), 3)]),
					"item-trailing": withCtx(({ item }) => [item.data?.date ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sessionDropdownDate)
					}, toDisplayString(item.data.date), 3)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items", "extra-popper-class"])]),
				_: 1
			}, 8, ["items"])], 2), props.showMetrics ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.topBarRight)
			}, [
				props.triggerSource ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.metricItem)
				}, [createVNode(unref(N8nIcon_default), {
					icon: props.triggerIcon,
					size: 12
				}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(props.triggerLabel), 1)], 2)) : createCommentVNode("", true),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
					icon: "circle-dollar-sign",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.totalTokens.toLocaleString()) + "t ($" + toDisplayString(props.totalCost.toFixed(4)) + ")", 1)], 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
					icon: "clock",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.durationLabel), 1)], 2),
				createVNode(unref(N8nButton_default), {
					variant: "ghost",
					"icon-only": "",
					size: "medium",
					"aria-label": unref(i18n).baseText("generic.close"),
					"data-testid": "agent-session-timeline-close",
					"data-test-id": "agent-session-timeline-close",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("close"))
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "x",
						size: 16
					})]),
					_: 1
				}, 8, ["aria-label"])
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentSessionTimelineHeader_vue_vue_type_style_index_0_lang_module_default = {
	topBar: "_topBar_1gdns_125",
	topBarLeft: "_topBarLeft_1gdns_136",
	topBarRight: "_topBarRight_1gdns_154",
	sep: "_sep_1gdns_165",
	metricItem: "_metricItem_1gdns_169",
	crumbSeparator: "_crumbSeparator_1gdns_176",
	switcherButton: "_switcherButton_1gdns_183",
	switcherLabel: "_switcherLabel_1gdns_188",
	sessionDropdownMenu: "_sessionDropdownMenu_1gdns_196",
	sessionDropdownName: "_sessionDropdownName_1gdns_207",
	sessionDropdownDate: "_sessionDropdownDate_1gdns_215"
};
var AgentSessionTimelineHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentSessionTimelineView.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineView",
	setup(__props) {
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const sessionsStore = useAgentSessionsStore();
		const projectsStore = useProjectsStore();
		const projectId = computed(() => route.params.projectId);
		const agentId = computed(() => route.params.agentId);
		const threadId = computed(() => route.params.threadId);
		const thread = ref(null);
		const executions = ref([]);
		const triggerSource = computed(() => {
			if (executions.value.length === 0) return null;
			return executions.value[0].source ?? "chat";
		});
		const triggerIcon = computed(() => {
			return triggerSource.value === "slack" ? "slack" : "bolt-filled";
		});
		const triggerLabel = computed(() => {
			const source = triggerSource.value;
			if (!source) return "";
			return source.charAt(0).toUpperCase() + source.slice(1);
		});
		const sessionTitle = computed(() => {
			if (!thread.value) return "";
			return truncate(threadTitleOf(thread.value), 64);
		});
		const projectName = computed(() => {
			if (projectsStore.personalProject?.id === projectId.value) return i18n.baseText("projects.menu.personal");
			const current = projectsStore.currentProject;
			if (current && current.id === projectId.value) return current.name ?? null;
			return projectsStore.myProjects.find((p) => p.id === projectId.value)?.name ?? null;
		});
		const projectRoute = computed(() => ({
			name: VIEWS.PROJECTS_WORKFLOWS,
			params: { projectId: projectId.value }
		}));
		const agentRoute = computed(() => ({
			name: AGENT_BUILDER_VIEW,
			params: {
				projectId: projectId.value,
				agentId: agentId.value
			}
		}));
		const agentExecutionsRoute = computed(() => ({
			...typeof agentRoute.value === "object" ? agentRoute.value : {},
			query: { section: EXECUTIONS_SECTION_KEY }
		}));
		const breadcrumbItems = computed(() => [{
			id: projectId.value,
			label: projectName.value ?? i18n.baseText("agents.builder.header.projectFallback"),
			href: router.resolve(projectRoute.value).href
		}, {
			id: agentId.value,
			label: thread.value?.agentName ?? "…",
			href: router.resolve(agentRoute.value).href
		}]);
		const sessionOptions = computed(() => {
			const sessions = sessionsStore.threads;
			if (sessions.length === 0) return [{
				id: "__empty__",
				label: i18n.baseText("agentSessions.empty"),
				disabled: true
			}];
			return sessions.map((session) => ({
				id: session.id,
				label: truncate(threadTitleOf(session), 64),
				class: session.id === threadId.value ? "session-dropdown-item-active" : void 0,
				data: {
					date: formatDate(session.updatedAt),
					active: session.id === threadId.value
				}
			}));
		});
		const totalTokens = computed(() => {
			if (!thread.value) return 0;
			return thread.value.totalPromptTokens + thread.value.totalCompletionTokens;
		});
		const totalCost = computed(() => thread.value?.totalCost ?? 0);
		const durationLabel = computed(() => formatDuration(thread.value?.totalDuration ?? 0));
		function onPanelLoaded(detail) {
			thread.value = detail?.thread ?? null;
			executions.value = detail?.executions ?? [];
		}
		watch([projectId, agentId], () => void sessionsStore.fetchThreads(projectId.value, agentId.value), { immediate: true });
		function formatDuration(ms) {
			if (!ms || ms <= 0) return "0ms";
			if (ms < 1e3) return `${ms}ms`;
			return `${(ms / 1e3).toFixed(1)}s`;
		}
		function formatDate(fullDate) {
			if (!fullDate) return "";
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		function closeTimeline() {
			/**
			* Get the last visited route from Vue router so we return to the correct starting point (e.g Preview)
			* If no state is available, it's most likey because the link was visited directly.
			* Here we fallback to default Agents view.
			*/
			const previousRoute = router.options.history.state.back;
			if ((typeof previousRoute === "string" ? router.resolve(previousRoute) : null)?.matched.length) {
				router.back();
				return;
			}
			router.push(agentExecutionsRoute.value);
		}
		function onBreadcrumbSelect(item) {
			if (item.id === projectId.value) router.push(projectRoute.value);
			else if (item.id === agentId.value) router.push(agentRoute.value);
		}
		function onSessionSelect(nextThreadId) {
			if (nextThreadId === "__empty__" || nextThreadId === threadId.value) return;
			router.push({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: nextThreadId
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.view) }, [createVNode(AgentSessionTimelineHeader_default, {
				"breadcrumb-items": breadcrumbItems.value,
				"session-title": sessionTitle.value,
				"session-options": sessionOptions.value,
				"show-metrics": Boolean(thread.value),
				"trigger-source": triggerSource.value,
				"trigger-icon": triggerIcon.value,
				"trigger-label": triggerLabel.value,
				"total-tokens": totalTokens.value,
				"total-cost": totalCost.value,
				"duration-label": durationLabel.value,
				onBreadcrumbSelect,
				onSessionSelect,
				onClose: closeTimeline
			}, null, 8, [
				"breadcrumb-items",
				"session-title",
				"session-options",
				"show-metrics",
				"trigger-source",
				"trigger-icon",
				"trigger-label",
				"total-tokens",
				"total-cost",
				"duration-label"
			]), createVNode(AgentSessionTimelinePanel_default, {
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"thread-id": threadId.value,
				onLoaded: onPanelLoaded
			}, null, 8, [
				"project-id",
				"agent-id",
				"thread-id"
			])], 2);
		};
	}
});
var AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default = { view: "_view_zhvr5_125" };
var AgentSessionTimelineView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionTimelineView_default as default };
