import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, n as Transition, q as onBeforeUnmount, rt as renderList, tt as provide, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { B as N8nPopover_default, Da as N8nText_default, Ea as N8nCallout_default, L as N8nRecycleScroller_default, Oa as N8nButton_default, Ui as Input_default, Vt as DropdownMenu_default, Wi as N8nIconButton_default, gt as useRouter, ht as useRoute, jt as N8nCard_default, ka as N8nIcon_default, rt as N8nHoverCard_default, x as N8nBreadcrumbs_default, zi as N8nTooltip_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { ai as shouldIgnoreCanvasShortcut, nn as useWorkflowHelpers, q as useNodeTypesStore, t as useWorkflowsStore, yn as useProjectsStore } from "./workflows.store-DyUv-2Dd.js";
import { t as useToast } from "./useToast-DacasnmQ.js";
import { Al as WorkflowIdKey, Hr as AGENT_BUILDER_VIEW, jo as Workflow, qr as AGENT_SESSION_DETAIL_VIEW, si as VIEWS, ti as EXECUTIONS_SECTION_KEY } from "./constants-BMUE7W6Y.js";
import { m as useEventListener, o as useActiveElement } from "./core-nZc0i8VB.js";
import { o as truncate } from "./dist-DHcbImTe.js";
import { t as useExecutionsStore } from "./executions.store-BNyXyztn.js";
import { i as NodeErrorView_default, t as RunData_default } from "./RunData-DgR8D2oq.js";
import { y as ChatSymbol } from "./useCanvasOperations-BYVWREcI.js";
import { n as useWorkflowState } from "./useWorkflowState-CIGpCkRl.js";
import { t as VueMarkdown } from "./VueMarkdown-BYGWCztI.js";
import { t as convertToDisplayDate } from "./dateFormatter-CUux_a5O.js";
import { d as flattenLogEntries, h as getSubtreeTotalConsumedTokens, o as createLogTree, t as LogsOverviewRow_default } from "./LogsOverviewRow-CHxhFH6-.js";
import { t as useAgentSessionsStore } from "./agentSessions.store-DGFtMWWy.js";
import { t as useThreadTitle } from "./thread-title-BLWsHQKi.js";
import { t as formatToolNameForDisplay } from "./toolDisplayName-qzlsc7ZR.js";
function endTimestampOf(item) {
	return item.endTimestamp ?? item.timestamp;
}
function computeIdleRanges(items) {
	const ranges = [];
	for (let i = 0; i < items.length - 1; i++) {
		const a = items[i];
		const b = items[i + 1];
		if (a.kind === "suspension" || b.kind === "suspension") continue;
		const aEnd = endTimestampOf(a);
		if (b.timestamp - aEnd > 6e5) ranges.push({
			start: aEnd,
			end: b.timestamp
		});
	}
	return ranges;
}
function itemFilterKey(item) {
	return item.kind;
}
function timelineItemSearchText(item, labelForKey) {
	const parts = [];
	parts.push(labelForKey(itemFilterKey(item)));
	if (item.kind === "suspension") parts.push(labelForKey("suspension-waiting"));
	parts.push(item.content, item.toolName, item.workflowName, item.nodeDisplayName);
	if (item.toolName) parts.push(formatToolNameForDisplay(item.toolName));
	const toolKey = builtinToolLabelKey(item.toolName, item.toolOutput);
	if (toolKey) parts.push(labelForKey(toolKey));
	return parts.filter((part) => typeof part === "string").join(" ").toLowerCase();
}
function matchesSearch(item, query, labelForKey) {
	if (!query) return true;
	return timelineItemSearchText(item, labelForKey).includes(query.toLowerCase());
}
function filteredTimelineItemIndexes(items, visibleKinds, searchQuery, labelForKey) {
	return items.map((item, index) => ({
		item,
		index
	})).filter(({ item }) => (visibleKinds.size === 0 || visibleKinds.has(itemFilterKey(item))) && matchesSearch(item, searchQuery.trim(), labelForKey)).map(({ index }) => index);
}
function sessionBounds(items) {
	if (items.length === 0) return {
		start: 0,
		end: 1
	};
	let start = Infinity;
	let end = -Infinity;
	for (const item of items) {
		if (item.timestamp < start) start = item.timestamp;
		const e = endTimestampOf(item);
		if (e > end) end = e;
	}
	if (end <= start) end = start + 1;
	return {
		start,
		end
	};
}
var CHART_BLOCK_COLOR_MAP = {
	user: "var(--color--blue-600)",
	agent: "var(--color--purple-600)",
	tool: "var(--color--green-600)",
	node: "var(--color--neutral-600)",
	workflow: "var(--color--orange-600)",
	suspension: "var(--color--yellow-600)"
};
function chartBlockColor(kind) {
	return CHART_BLOCK_COLOR_MAP[kind];
}
/**
* Resolve the i18n label for a tool entry. Some built-in tools (currently
* `rich_interaction`) have two semantically distinct modes — interactive
* (suspends, awaits user input) vs display-only (renders a card and the
* agent continues). We pick the label based on the recorded output: the
* `rich_interaction` handler returns `{ displayOnly: true }` to mark a
* display-only call, and a button/select payload (after the user clicks)
* for the interactive case.
*/
function builtinToolLabelKey(toolName, output) {
	switch (toolName) {
		case "rich_interaction": return isDisplayOnlyOutput(output) ? "agentSessions.timeline.tool.richInteractionDisplay" : "agentSessions.timeline.tool.richInteraction";
		default: return null;
	}
}
function isDisplayOnlyOutput(output) {
	return typeof output === "object" && output !== null && "displayOnly" in output && output.displayOnly === true;
}
function formatDuration(ms) {
	if (!ms || ms <= 0) return "";
	if (ms < 1e3) return `${ms}ms`;
	if (ms < 6e4) return `${(ms / 1e3).toFixed(1)}s`;
	const minutes = Math.floor(ms / 6e4);
	const seconds = Math.floor(ms % 6e4 / 1e3);
	if (minutes < 60) return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
	const hours = Math.floor(minutes / 60);
	const remMinutes = minutes % 60;
	return remMinutes > 0 ? `${hours}h ${remMinutes}m` : `${hours}h`;
}
/**
* Cast the loose API timeline shape (`Record<string, unknown> & { type }`)
* into the discriminated union used by the renderer. The backend writes
* the same producer schema both layers expect; the API type is loose so
* `useAgentThreadsApi.ts` doesn't have to import the renderer's types.
*/
function timelineEvents(exec) {
	return exec.timeline ?? [];
}
function flattenExecutionsToTimelineItems(executions) {
	const items = [];
	for (const exec of executions) {
		const isResumed = exec.hitlStatus === "resumed";
		let resumedTagUsed = false;
		if (exec.userMessage) items.push({
			kind: "user",
			executionId: exec.id,
			content: exec.userMessage,
			timestamp: exec.startedAt ? new Date(exec.startedAt).getTime() : 0
		});
		for (const event of timelineEvents(exec)) if (event.type === "text") {
			const showResumed = isResumed && !resumedTagUsed;
			if (showResumed) resumedTagUsed = true;
			const startTs = event.timestamp ?? 0;
			items.push({
				kind: "agent",
				executionId: exec.id,
				content: event.content,
				timestamp: startTs,
				endTimestamp: event.endTime && event.endTime > startTs ? event.endTime : void 0,
				resumed: showResumed
			});
		} else if (event.type === "tool-call") {
			const isWorkflow = event.kind === "workflow";
			const isNode = event.kind === "node";
			items.push({
				kind: isWorkflow ? "workflow" : isNode ? "node" : "tool",
				executionId: exec.id,
				toolName: event.name,
				toolCallId: event.toolCallId,
				toolInput: event.input,
				toolOutput: event.output,
				toolSuccess: event.success,
				timestamp: event.startTime,
				endTimestamp: event.endTime || event.startTime,
				workflowId: isWorkflow ? event.workflowId : void 0,
				workflowName: isWorkflow ? event.workflowName : void 0,
				workflowExecutionId: isWorkflow ? event.workflowExecutionId : void 0,
				workflowTriggerType: isWorkflow ? event.triggerType : void 0,
				nodeType: isNode ? event.nodeType : void 0,
				nodeTypeVersion: isNode ? event.nodeTypeVersion : void 0,
				nodeDisplayName: isNode ? event.nodeDisplayName : void 0,
				nodeParameters: isNode ? event.nodeParameters : void 0
			});
		} else if (event.type === "suspension") items.push({
			kind: "suspension",
			executionId: exec.id,
			toolName: event.toolName,
			toolCallId: event.toolCallId,
			timestamp: event.timestamp ?? 0
		});
	}
	return items;
}
//#endregion
//#region src/features/agents/session-timeline.styles.ts
function pillColors(kind) {
	switch (kind) {
		case "user": return {
			backgroundColor: "var(--color--blue-200)",
			color: "var(--color--blue-950)"
		};
		case "agent": return {
			backgroundColor: "var(--color--purple-200)",
			color: "var(--color--purple-950)"
		};
		case "tool": return {
			backgroundColor: "var(--color--green-200)",
			color: "var(--color--green-950)"
		};
		case "workflow": return {
			backgroundColor: "var(--color--orange-200)",
			color: "var(--color--orange-950)"
		};
		case "node": return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
		};
		case "suspension":
		case "idle": return {
			backgroundColor: "var(--color--yellow-200)",
			color: "var(--color--yellow-950)"
		};
		default: return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
		};
	}
}
function chartBlockStyle(kind) {
	return { "--session-timeline-chart-block-color": chartBlockColor(kind) };
}
/**
* Background colour for the small filter-dropdown swatch (uses the chart-block
* alpha so the swatch matches the chart's bar treatment).
*/
function swatchBackground(color) {
	return `color-mix(in srgb, ${color} var(--color--session-timeline-block-bg-alpha), transparent)`;
}
//#endregion
//#region src/features/agents/components/SessionTimelinePill.vue?vue&type=script&setup=true&lang.ts
var SessionTimelinePill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelinePill",
	props: {
		kind: {},
		label: { default: "" },
		showLabel: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const icon = computed(() => {
			switch (props.kind) {
				case "user": return "user";
				case "agent": return "bot";
				case "tool": return "wrench";
				case "workflow": return "workflow";
				case "node": return "box";
				case "suspension":
				case "idle": return "clock";
				default: return "info";
			}
		});
		const iconStyle = computed(() => pillColors(props.kind));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style.pill, __props.showLabel && _ctx.$style.withLabel]),
				style: normalizeStyle(iconStyle.value)
			}, [createVNode(unref(N8nIcon_default), {
				icon: icon.value,
				size: "small"
			}, null, 8, ["icon"]), __props.showLabel && __props.label ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.label)
			}, toDisplayString(__props.label), 3)) : createCommentVNode("", true)], 6);
		};
	}
});
var SessionTimelinePill_vue_vue_type_style_index_0_lang_module_default = {
	pill: "_pill_lnlqj_125",
	withLabel: "_withLabel_lnlqj_135",
	label: "_label_lnlqj_141"
};
var SessionTimelinePill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelinePill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelinePill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineChart.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["onMouseenter", "onMouseleave"];
var _hoisted_2$4 = [
	"data-timeline-index",
	"data-selected",
	"onMouseenter",
	"onMouseleave",
	"onFocus",
	"onBlur",
	"onClick"
];
var SCROLL_PADDING$1 = 48;
var INSTANT_MS = 100;
var POPOVER_SHOW_DELAY_MS = 300;
var SessionTimelineChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineChart",
	props: {
		items: {},
		idleRanges: {},
		sessionStart: {},
		sessionEnd: {},
		visibleKinds: {},
		selectedIndex: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const chartRef = ref(null);
		const activePopover = ref(null);
		const popoverOpen = ref(false);
		let showPopoverTimer = null;
		const segments = computed(() => {
			const out = [];
			const idles = [...props.idleRanges].sort((a, b) => a.start - b.start);
			let idleIdx = 0;
			for (let i = 0; i < props.items.length; i++) {
				const item = props.items[i];
				while (idleIdx < idles.length && idles[idleIdx].start <= item.timestamp) {
					out.push({
						kind: "idle",
						range: idles[idleIdx]
					});
					idleIdx++;
				}
				const duration = item.endTimestamp ? item.endTimestamp - item.timestamp : INSTANT_MS;
				out.push({
					kind: "event",
					item,
					index: i,
					duration
				});
			}
			while (idleIdx < idles.length) {
				out.push({
					kind: "idle",
					range: idles[idleIdx]
				});
				idleIdx++;
			}
			return out;
		});
		function isDimmed(item) {
			if (props.visibleKinds.size === 0) return false;
			return !props.visibleKinds.has(itemFilterKey(item));
		}
		function cellStyle(seg) {
			if (seg.kind === "idle") return { flex: "0 0 56px" };
			return { flex: `${Math.max(seg.duration, 1)} 1 0` };
		}
		function eventStyle(item) {
			const style = chartBlockStyle(item.kind);
			if (isDimmed(item)) {
				style.opacity = "0.15";
				style.pointerEvents = "none";
			}
			return style;
		}
		function popoverLabel(item) {
			switch (item.kind) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText("agentSessions.timeline.suspension");
				default: return "";
			}
		}
		function popoverName(item) {
			switch (item.kind) {
				case "user":
				case "agent": return truncate(item.content ?? "", 80);
				case "tool": {
					const key = builtinToolLabelKey(item.toolName, item.toolOutput);
					return key ? i18n.baseText(key) : formatToolNameForDisplay(item.toolName);
				}
				case "workflow": return item.workflowName ?? formatToolNameForDisplay(item.toolName);
				case "node": return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
				case "suspension": return i18n.baseText("agentSessions.timeline.waitingForUser");
				default: return "";
			}
		}
		/**
		* Real-event duration for the popover. Returns empty when the item has no
		* `endTimestamp` greater than `timestamp` — point events (user/agent text,
		* memory, suspension) and incomplete tool calls. The chart's `seg.duration`
		* applies a synthetic `INSTANT_MS` floor so point events get a visible block;
		* we deliberately don't use that here, otherwise every popover would read
		* "100ms".
		*/
		function popoverDuration(item) {
			if (!item.endTimestamp || item.endTimestamp <= item.timestamp) return "";
			return formatDuration(item.endTimestamp - item.timestamp);
		}
		function idleDuration(range) {
			return formatDuration(range.end - range.start);
		}
		function popoverTime(item) {
			if (!item.timestamp) return "";
			return convertToDisplayDate(new Date(item.timestamp).toISOString()).time;
		}
		function onClick(index, item) {
			if (isDimmed(item)) return;
			emit("select", index);
		}
		function showPopover(segment, event) {
			if (!(event.currentTarget instanceof HTMLElement)) return;
			const reference = event.currentTarget;
			clearShowPopoverTimer();
			showPopoverTimer = setTimeout(() => {
				activePopover.value = {
					segment,
					reference
				};
				popoverOpen.value = true;
			}, POPOVER_SHOW_DELAY_MS);
		}
		function clearShowPopoverTimer() {
			if (!showPopoverTimer) return;
			clearTimeout(showPopoverTimer);
			showPopoverTimer = null;
		}
		function showSelectedPopover() {
			const selectedIndex = props.selectedIndex;
			if (selectedIndex === null) {
				popoverOpen.value = false;
				activePopover.value = null;
				return;
			}
			const segment = segments.value.find((seg) => seg.kind === "event" && seg.index === selectedIndex);
			const reference = chartRef.value?.querySelector(`[data-timeline-index="${selectedIndex}"]`);
			if (segment && reference) {
				activePopover.value = {
					segment,
					reference
				};
				popoverOpen.value = true;
			}
		}
		function scrollSelectedIntoView() {
			const selectedIndex = props.selectedIndex;
			const chart = chartRef.value;
			if (selectedIndex === null || !chart) return;
			const selectedBlock = chart.querySelector(`[data-timeline-index="${selectedIndex}"]`);
			if (!selectedBlock) return;
			const blockLeft = selectedBlock.offsetLeft;
			const blockRight = blockLeft + selectedBlock.offsetWidth;
			const viewportLeft = chart.scrollLeft;
			const viewportRight = viewportLeft + chart.clientWidth;
			if (blockLeft - SCROLL_PADDING$1 < viewportLeft) chart.scrollLeft = Math.max(0, blockLeft - SCROLL_PADDING$1);
			else if (blockRight + SCROLL_PADDING$1 > viewportRight) chart.scrollLeft = blockRight + SCROLL_PADDING$1 - chart.clientWidth;
		}
		function hidePopover(segment) {
			clearShowPopoverTimer();
			if (segment.kind === "event" && segment.index === props.selectedIndex) {
				showSelectedPopover();
				return;
			}
			popoverOpen.value = false;
			activePopover.value = null;
		}
		watch(() => props.selectedIndex, () => {
			clearShowPopoverTimer();
			nextTick(() => {
				scrollSelectedIntoView();
				showSelectedPopover();
			});
		});
		onBeforeUnmount(clearShowPopoverTimer);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "chartRef",
				ref: chartRef,
				class: normalizeClass(_ctx.$style.chart)
			}, [createVNode(unref(N8nHoverCard_default), {
				open: popoverOpen.value,
				"hide-trigger": "",
				reference: activePopover.value?.reference,
				side: "top",
				align: "center",
				"side-offset": 8,
				"close-delay": 0,
				"max-width": "none",
				"content-class": _ctx.$style.hoverCardContent
			}, {
				content: withCtx(() => [activePopover.value?.segment.kind === "idle" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.popoverInner)
				}, [createVNode(SessionTimelinePill_default, {
					kind: "idle",
					label: unref(i18n).baseText("agentSessions.timeline.idle"),
					"show-label": ""
				}, null, 8, ["label"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverMeta) }, toDisplayString(idleDuration(activePopover.value.segment.range)), 3)], 2)) : activePopover.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.popoverInner)
				}, [
					createVNode(SessionTimelinePill_default, {
						kind: activePopover.value.segment.item.kind,
						label: popoverLabel(activePopover.value.segment.item),
						"show-label": ""
					}, null, 8, ["kind", "label"]),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverName) }, toDisplayString(popoverName(activePopover.value.segment.item)), 3),
					popoverDuration(activePopover.value.segment.item) ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.popoverMeta)
					}, toDisplayString(popoverDuration(activePopover.value.segment.item)), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverMeta) }, toDisplayString(popoverTime(activePopover.value.segment.item)), 3)
				], 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"open",
				"reference",
				"content-class"
			]), (openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, (seg, segIdx) => {
				return openBlock(), createElementBlock("div", {
					key: segIdx,
					"data-test-id": "timeline-cell",
					class: normalizeClass(_ctx.$style.cell),
					style: normalizeStyle(cellStyle(seg))
				}, [seg.kind === "idle" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-idle",
					class: normalizeClass(_ctx.$style.idle),
					onMouseenter: ($event) => showPopover(seg, $event),
					onMouseleave: ($event) => hidePopover(seg)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.idleFill) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")), 3)], 42, _hoisted_1$5)) : (openBlock(), createElementBlock("button", {
					key: 1,
					type: "button",
					"data-test-id": "timeline-block",
					"data-timeline-index": seg.index,
					class: normalizeClass([_ctx.$style.block, props.selectedIndex === seg.index && _ctx.$style.selected]),
					"data-selected": props.selectedIndex === seg.index ? "true" : void 0,
					style: normalizeStyle(eventStyle(seg.item)),
					onMouseenter: ($event) => showPopover(seg, $event),
					onMouseleave: ($event) => hidePopover(seg),
					onFocus: ($event) => showPopover(seg, $event),
					onBlur: ($event) => hidePopover(seg),
					onClick: ($event) => onClick(seg.index, seg.item)
				}, null, 46, _hoisted_2$4))], 6);
			}), 128))], 2);
		};
	}
});
var SessionTimelineChart_vue_vue_type_style_index_0_lang_module_default = {
	chart: "_chart_1pm7f_126",
	cell: "_cell_1pm7f_142",
	block: "_block_1pm7f_154",
	selected: "_selected_1pm7f_154",
	idle: "_idle_1pm7f_158",
	idleFill: "_idleFill_1pm7f_169",
	hoverCardContent: "_hoverCardContent_1pm7f_206",
	popoverInner: "_popoverInner_1pm7f_219",
	popoverName: "_popoverName_1pm7f_227",
	popoverMeta: "_popoverMeta_1pm7f_233"
};
var SessionTimelineChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionEventFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { key: 0 };
var _hoisted_2$3 = ["data-test-id"];
var _hoisted_3$2 = ["checked", "onChange"];
var SessionEventFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionEventFilter",
	props: {
		available: {},
		selected: {}
	},
	emits: ["update"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const open = ref(false);
		function toggle(key, checked) {
			const next = new Set(props.selected);
			if (checked) next.add(key);
			else next.delete(key);
			emit("update", next);
		}
		function clearAll() {
			emit("update", /* @__PURE__ */ new Set());
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event),
				side: "bottom",
				align: "end",
				"content-class": _ctx.$style.panel
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					icon: "funnel",
					"data-test-id": "filter-trigger"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("agentSessions.timeline.events")), 1), props.selected.size > 0 ? (openBlock(), createElementBlock("span", _hoisted_1$4, "\xA0(" + toDisplayString(props.selected.size) + ")", 1)) : createCommentVNode("", true)]),
					_: 1
				})]),
				content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.available, (opt) => {
					return openBlock(), createElementBlock("label", {
						key: opt.key,
						"data-test-id": `filter-option-${opt.key}`,
						class: normalizeClass(_ctx.$style.option)
					}, [
						createBaseVNode("input", {
							type: "checkbox",
							checked: props.selected.has(opt.key),
							onChange: ($event) => toggle(opt.key, $event.target.checked)
						}, null, 40, _hoisted_3$2),
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.swatch),
							style: normalizeStyle({ backgroundColor: unref(swatchBackground)(opt.color) })
						}, null, 6),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(opt.label), 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.count) }, toDisplayString(opt.count), 3)
					], 10, _hoisted_2$3);
				}), 128)), props.selected.size > 0 ? (openBlock(), createElementBlock("button", {
					key: 0,
					type: "button",
					"data-test-id": "filter-clear",
					class: normalizeClass(_ctx.$style.clear),
					onClick: clearAll
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.clearFilter")), 3)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
var SessionEventFilter_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_adhj3_125",
	option: "_option_adhj3_129",
	swatch: "_swatch_adhj3_138",
	label: "_label_adhj3_144",
	count: "_count_adhj3_148",
	clear: "_clear_adhj3_152"
};
var SessionEventFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionEventFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionEventFilter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["href"];
var _hoisted_2$2 = { key: 1 };
var SessionTimelineRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineRow",
	props: {
		item: {},
		selected: { type: Boolean }
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const router = useRouter();
		const i18n = useI18n();
		const time = computed(() => {
			if (!props.item.timestamp) return "";
			return convertToDisplayDate(new Date(props.item.timestamp).toISOString()).time;
		});
		const workflowHref = computed(() => {
			if (props.item.kind !== "workflow" || !props.item.workflowId) return "";
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.item.workflowId }
			}).href;
		});
		const infoText = computed(() => {
			const it = props.item;
			switch (it.kind) {
				case "user":
				case "agent": return truncate(it.content ?? "", 500);
				case "tool": {
					const key = builtinToolLabelKey(it.toolName, it.toolOutput);
					return key ? i18n.baseText(key) : formatToolNameForDisplay(it.toolName);
				}
				case "workflow": return it.workflowName ?? formatToolNameForDisplay(it.toolName);
				case "node": return it.nodeDisplayName ?? formatToolNameForDisplay(it.toolName);
				case "suspension": return i18n.baseText("agentSessions.timeline.waitingForUser");
				default: return "";
			}
		});
		const label = computed(() => {
			switch (props.item.kind) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText("agentSessions.timeline.suspended");
				default: return "";
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.row, __props.selected && _ctx.$style.selected]),
				onClick: _cache[1] || (_cache[1] = ($event) => emit("select"))
			}, [
				createVNode(unref(N8nTooltip_default), {
					content: label.value,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(SessionTimelinePill_default, { kind: __props.item.kind }, null, 8, ["kind"])]),
					_: 1
				}, 8, ["content"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [__props.item.kind === "workflow" && workflowHref.value ? (openBlock(), createElementBlock("a", {
					key: 0,
					href: workflowHref.value,
					target: "_blank",
					rel: "noopener",
					class: normalizeClass(_ctx.$style.workflowLink),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, toDisplayString(infoText.value), 11, _hoisted_1$3)) : (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(infoText.value), 1))], 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.time) }, toDisplayString(time.value), 3)
			], 2);
		};
	}
});
var SessionTimelineRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_1kvj1_126",
	selected: "_selected_1kvj1_141",
	info: "_info_1kvj1_145",
	workflowLink: "_workflowLink_1kvj1_162",
	time: "_time_1kvj1_167"
};
var SessionTimelineRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-timeline-row-id", "onClick"];
var _hoisted_2$1 = ["data-timeline-row-id"];
var _hoisted_3$1 = ["data-timeline-row-id", "onClick"];
var _hoisted_4$1 = ["data-timeline-row-id"];
var ROW_HEIGHT = 40;
var SCROLL_PADDING = 24;
var VIRTUALIZE_AFTER_ROWS = 100;
var SessionTimelineTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineTable",
	props: {
		items: {},
		selectedIndex: {},
		visibleKinds: {},
		searchQuery: {},
		idleRanges: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tableRef = ref(null);
		const canScrollUp = ref(false);
		const canScrollDown = ref(false);
		let scrollContainer = null;
		function labelForKey(key) {
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText("agentSessions.timeline.suspended");
				case "suspension-waiting": return i18n.baseText("agentSessions.timeline.waitingForUser");
				case "agentSessions.timeline.tool.richInteraction":
				case "agentSessions.timeline.tool.richInteractionDisplay": return i18n.baseText(key);
				default: return key;
			}
		}
		const rows = computed(() => {
			const events = filteredTimelineItemIndexes(props.items, props.visibleKinds, props.searchQuery ?? "", labelForKey).map((index) => ({
				id: `event-${index}`,
				kind: "event",
				item: props.items[index],
				index,
				sortKey: props.items[index].timestamp
			}));
			const idles = (props.idleRanges ?? []).map((range, index) => ({
				id: `idle-${range.start}-${range.end}-${index}`,
				kind: "idle",
				range,
				sortKey: range.start
			}));
			return [...events, ...idles].sort((a, b) => a.sortKey - b.sortKey);
		});
		const shouldVirtualizeRows = computed(() => rows.value.length > VIRTUALIZE_AFTER_ROWS);
		function updateScrollMask() {
			if (!scrollContainer) {
				canScrollUp.value = false;
				canScrollDown.value = false;
				return;
			}
			canScrollUp.value = scrollContainer.scrollTop > 0;
			canScrollDown.value = scrollContainer.scrollTop + scrollContainer.clientHeight < scrollContainer.scrollHeight - 1;
		}
		function bindScrollContainer() {
			const nextScrollContainer = tableRef.value?.querySelector("[data-timeline-scroll-container]") ?? tableRef.value?.querySelector(".recycle-scroller-wrapper");
			if (nextScrollContainer === scrollContainer) return;
			scrollContainer?.removeEventListener("scroll", updateScrollMask);
			scrollContainer = nextScrollContainer ?? null;
			scrollContainer?.addEventListener("scroll", updateScrollMask, { passive: true });
			updateScrollMask();
		}
		function visibleRowElement(rowId) {
			const visibleRows = tableRef.value?.querySelectorAll("[data-timeline-row-id]");
			return Array.from(visibleRows ?? []).find((element) => element.dataset.timelineRowId === rowId);
		}
		function scrollVisibleRowIntoView(rowId) {
			if (!scrollContainer) return false;
			const rowElement = visibleRowElement(rowId);
			if (!rowElement) return false;
			const containerRect = scrollContainer.getBoundingClientRect();
			const rowRect = rowElement.getBoundingClientRect();
			if (rowRect.top - SCROLL_PADDING < containerRect.top) scrollContainer.scrollTop -= containerRect.top - rowRect.top + SCROLL_PADDING;
			else if (rowRect.bottom + SCROLL_PADDING > containerRect.bottom) scrollContainer.scrollTop += rowRect.bottom - containerRect.bottom + SCROLL_PADDING;
			return true;
		}
		function scrollRowIntoView(rowId) {
			if (!scrollContainer) return;
			if (scrollVisibleRowIntoView(rowId)) return;
			const rowIndex = rows.value.findIndex((row) => row.id === rowId);
			if (rowIndex === -1) return;
			const rowTop = rowIndex * ROW_HEIGHT;
			const rowBottom = rowTop + ROW_HEIGHT;
			const viewportTop = scrollContainer.scrollTop;
			const viewportBottom = viewportTop + scrollContainer.clientHeight;
			if (rowTop - SCROLL_PADDING < viewportTop) scrollContainer.scrollTop = Math.max(0, rowTop - SCROLL_PADDING);
			else if (rowBottom + SCROLL_PADDING > viewportBottom) scrollContainer.scrollTop = rowBottom + SCROLL_PADDING - scrollContainer.clientHeight;
			nextTick(() => {
				scrollVisibleRowIntoView(rowId);
				updateScrollMask();
			});
		}
		watch(() => rows.value.length, () => {
			nextTick(() => {
				bindScrollContainer();
				updateScrollMask();
			});
		});
		onMounted(() => {
			nextTick(bindScrollContainer);
		});
		onBeforeUnmount(() => {
			scrollContainer?.removeEventListener("scroll", updateScrollMask);
		});
		watch(() => props.selectedIndex, (selectedIndex) => {
			if (selectedIndex === null) return;
			nextTick(() => {
				scrollRowIntoView(`event-${selectedIndex}`);
				updateScrollMask();
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "tableRef",
				ref: tableRef,
				class: normalizeClass([
					_ctx.$style.table,
					canScrollUp.value && _ctx.$style.canScrollUp,
					canScrollDown.value && _ctx.$style.canScrollDown
				])
			}, [rows.value.length > 0 && !shouldVirtualizeRows.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.directRows),
				"data-timeline-scroll-container": ""
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row) => {
				return openBlock(), createElementBlock(Fragment, { key: row.id }, [row.kind === "event" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.rowWrapper),
					onClick: ($event) => emit("select", row.index)
				}, [createVNode(SessionTimelineRow_default, {
					item: row.item,
					selected: props.selectedIndex === row.index
				}, null, 8, ["item", "selected"])], 10, _hoisted_1$2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.idlePill) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_2$1))], 64);
			}), 128))], 2)) : rows.value.length > 0 ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
				key: 1,
				items: rows.value,
				"item-size": ROW_HEIGHT,
				"item-key": "id"
			}, {
				default: withCtx(({ item: row }) => [row.kind === "event" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.rowWrapper),
					onClick: ($event) => emit("select", row.index)
				}, [createVNode(SessionTimelineRow_default, {
					item: row.item,
					selected: props.selectedIndex === row.index
				}, null, 8, ["item", "selected"])], 10, _hoisted_3$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.idlePill) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_4$1))]),
				_: 1
			}, 8, ["items"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "timeline-empty",
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 3))], 2);
		};
	}
});
var SessionTimelineTable_vue_vue_type_style_index_0_lang_module_default = {
	table: "_table_15wmh_126",
	rowWrapper: "_rowWrapper_15wmh_132",
	empty: "_empty_15wmh_136",
	directRows: "_directRows_15wmh_153",
	canScrollDown: "_canScrollDown_15wmh_163",
	canScrollUp: "_canScrollUp_15wmh_167",
	idleRow: "_idleRow_15wmh_187",
	idlePill: "_idlePill_15wmh_201"
};
var SessionTimelineTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/RichInteractionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["src", "alt"];
var RichInteractionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RichInteractionCard",
	props: {
		input: {},
		output: {}
	},
	setup(__props) {
		const props = __props;
		const parsed = computed(() => {
			return {
				input: props.input ?? {},
				output: props.output ?? {}
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
				parsed.value.input.title ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.title)
				}, toDisplayString(parsed.value.input.title), 3)) : createCommentVNode("", true),
				parsed.value.input.message ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.message)
				}, toDisplayString(parsed.value.input.message), 3)) : createCommentVNode("", true),
				parsed.value.input.components ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(parsed.value.input.components, (comp, idx) => {
					return openBlock(), createElementBlock(Fragment, { key: idx }, [comp.type === "section" && comp.text ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, toDisplayString(comp.text), 3)) : comp.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : comp.type === "button" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.button)
					}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.buttonPill, parsed.value.output.type === "button" && parsed.value.output.value === comp.value && _ctx.$style.buttonSelected]) }, toDisplayString(comp.label ?? comp.value), 3)], 2)) : comp.type === "select" || comp.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.selectLabel) }, toDisplayString(comp.label), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(comp.options, (opt) => {
						return openBlock(), createElementBlock("div", {
							key: opt.value,
							class: normalizeClass(_ctx.$style.selectOption)
						}, [
							createBaseVNode("span", { class: normalizeClass([_ctx.$style.optionDot, parsed.value.output.type === "select" && parsed.value.output.value === opt.value && _ctx.$style.optionSelected]) }, null, 2),
							createBaseVNode("span", null, toDisplayString(opt.label), 1),
							opt.description ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.optionDesc)
							}, toDisplayString(opt.description), 3)) : createCommentVNode("", true)
						], 2);
					}), 128))], 2)) : comp.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(comp.fields, (f) => {
						return openBlock(), createElementBlock("div", {
							key: f.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.fieldLabel) }, toDisplayString(f.label), 3), createBaseVNode("span", null, toDisplayString(f.value), 1)], 2);
					}), 128))], 2)) : comp.type === "image" && comp.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: comp.url,
						alt: comp.alt ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$1)) : createCommentVNode("", true)], 64);
				}), 128)) : createCommentVNode("", true),
				parsed.value.output.value && !parsed.value.output.displayOnly ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.response)
				}, [_cache[0] || (_cache[0] = createTextVNode(" User selected: ", -1)), createBaseVNode("strong", null, toDisplayString(parsed.value.output.value), 1)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var RichInteractionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_7baby_125",
	title: "_title_7baby_130",
	message: "_message_7baby_135",
	section: "_section_7baby_140",
	divider: "_divider_7baby_144",
	button: "_button_7baby_150",
	buttonPill: "_buttonPill_7baby_156",
	buttonSelected: "_buttonSelected_7baby_165",
	selectGroup: "_selectGroup_7baby_171",
	selectLabel: "_selectLabel_7baby_175",
	selectOption: "_selectOption_7baby_180",
	optionDot: "_optionDot_7baby_187",
	optionSelected: "_optionSelected_7baby_195",
	optionDesc: "_optionDesc_7baby_200",
	fieldsGroup: "_fieldsGroup_7baby_205",
	fieldRow: "_fieldRow_7baby_209",
	fieldLabel: "_fieldLabel_7baby_215",
	image: "_image_7baby_220",
	response: "_response_7baby_226"
};
var RichInteractionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RichInteractionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RichInteractionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/WorkflowExecutionLogViewer.vue?vue&type=script&setup=true&lang.ts
var WorkflowExecutionLogViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionLogViewer",
	props: {
		workflowId: {},
		workflowExecutionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const executionsStore = useExecutionsStore();
		const workflowsStore = useWorkflowsStore();
		const workflowState = useWorkflowState();
		const workflowHelpers = useWorkflowHelpers();
		const nodeTypesStore = useNodeTypesStore();
		provide(WorkflowIdKey, computed(() => props.workflowId));
		provide(ChatSymbol, null);
		const loading = ref(true);
		const errorMessage = ref(null);
		const execution = ref(null);
		const expanded = ref({});
		const selected = ref(null);
		const workflow = computed(() => {
			if (!execution.value?.workflowData) return null;
			try {
				return new Workflow({
					...execution.value.workflowData,
					nodeTypes: workflowHelpers.getNodeTypes()
				});
			} catch {
				return null;
			}
		});
		const entries = computed(() => {
			if (!workflow.value || !execution.value) return [];
			return createLogTree(workflow.value, execution.value);
		});
		const flatEntries = computed(() => flattenLogEntries(entries.value, expanded.value));
		const latestNodeInfo = computed(() => {
			const map = {};
			if (!workflow.value) return map;
			for (const node of Object.values(workflow.value.nodes ?? {})) map[node.id] = {
				deleted: false,
				disabled: !!node.disabled,
				name: node.name
			};
			return map;
		});
		const shouldShowTokenCountColumn = computed(() => entries.value.some((entry) => getSubtreeTotalConsumedTokens(entry, true).totalTokens > 0));
		const statusBanner = computed(() => {
			const s = execution.value?.status;
			if (s === "running" || s === "new") return i18n.baseText("agentSessions.workflowLog.stillRunning");
			if (s === "waiting") return i18n.baseText("agentSessions.workflowLog.waiting");
			return "";
		});
		function toggleExpanded(entry) {
			expanded.value = {
				...expanded.value,
				[entry.id]: !expanded.value[entry.id]
			};
		}
		function toggleSelected(entry) {
			selected.value = selected.value?.id === entry.id ? null : entry;
		}
		const isTriggerSelected = computed(() => {
			const node = selected.value?.node;
			if (!node) return false;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion)?.group?.includes("trigger") ?? false;
		});
		const selectedWorkflow = computed(() => selected.value?.workflow);
		const inputBinding = computed(() => {
			const entry = selected.value;
			if (!entry) return null;
			const source = entry.runData?.source?.[0];
			if (!source) return null;
			const prevNode = entry.workflow.getNode(source.previousNode);
			if (!prevNode) return null;
			return {
				node: {
					...prevNode,
					disabled: false
				},
				runIndex: source.previousNodeRun ?? 0,
				overrideOutputs: [source.previousNodeOutput ?? 0]
			};
		});
		const selectedError = computed(() => {
			const err = selected.value?.runData?.error;
			if (!err || typeof err !== "object") return null;
			return err;
		});
		let previousWorkflowExecutionData = null;
		let unmounted = false;
		onMounted(async () => {
			previousWorkflowExecutionData = workflowsStore.workflowExecutionData;
			try {
				await nodeTypesStore.loadNodeTypesIfNotLoaded();
				if (unmounted) return;
				const result = await executionsStore.fetchExecution(props.workflowExecutionId);
				if (unmounted) return;
				if (!result) errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
				else {
					execution.value = result;
					workflowState.setWorkflowExecutionData(result);
					const first = flatEntries.value[0];
					if (first) selected.value = first;
				}
			} catch {
				if (unmounted) return;
				errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
			} finally {
				if (!unmounted) loading.value = false;
			}
		});
		onBeforeUnmount(() => {
			unmounted = true;
			workflowState.setWorkflowExecutionData(previousWorkflowExecutionData);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [loading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loading)
			}, toDisplayString(unref(i18n).baseText("agentSessions.workflowLog.loading")), 3)) : errorMessage.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.errorBanner)
			}, toDisplayString(errorMessage.value), 3)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
				statusBanner.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.banner)
				}, toDisplayString(statusBanner.value), 3)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.rows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(flatEntries.value, (entry) => {
					return openBlock(), createBlock(LogsOverviewRow_default, {
						key: entry.id,
						"data-test-id": "log-node-row",
						data: entry,
						"is-selected": selected.value?.id === entry.id,
						"is-read-only": true,
						"should-show-token-count-column": shouldShowTokenCountColumn.value,
						"is-compact": true,
						"latest-info": latestNodeInfo.value[entry.node.id],
						expanded: !!expanded.value[entry.id],
						"can-open-ndv": false,
						onToggleExpanded: ($event) => toggleExpanded(entry),
						onToggleSelected: ($event) => toggleSelected(entry)
					}, null, 8, [
						"data",
						"is-selected",
						"should-show-token-count-column",
						"latest-info",
						"expanded",
						"onToggleExpanded",
						"onToggleSelected"
					]);
				}), 128))], 2),
				selected.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.detail)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.detailHeader) }, toDisplayString(selected.value.node.name), 3),
					!isTriggerSelected.value && inputBinding.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.pane)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), (openBlock(), createBlock(RunData_default, {
						key: `input-${selected.value.id}`,
						node: inputBinding.value.node,
						"run-index": inputBinding.value.runIndex,
						"override-outputs": inputBinding.value.overrideOutputs,
						"workflow-object": selectedWorkflow.value,
						"workflow-execution": selected.value.execution,
						"pane-type": "input",
						"display-mode": "schema",
						"disable-display-mode-selection": true,
						"disable-run-index-selection": true,
						compact: true,
						"show-actions-on-hover": true,
						"disable-pin": true,
						"disable-edit": true,
						"disable-hover-highlight": true,
						"disable-settings-hint": true,
						"collapsing-table-column-name": null,
						"table-header-bg-color": "light",
						"executing-message": "",
						"no-data-in-branch-message": ""
					}, null, 8, [
						"node",
						"run-index",
						"override-outputs",
						"workflow-object",
						"workflow-execution"
					]))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.pane) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), selectedError.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.errorPaneBody),
						"data-test-id": "node-error-card"
					}, [createVNode(NodeErrorView_default, {
						error: selectedError.value,
						compact: true,
						"show-details": ""
					}, null, 8, ["error"])], 2)) : (openBlock(), createBlock(RunData_default, {
						key: `output-${selected.value.id}`,
						node: selected.value.node,
						"run-index": selected.value.runIndex,
						"workflow-object": selectedWorkflow.value,
						"workflow-execution": selected.value.execution,
						"pane-type": "output",
						"display-mode": "schema",
						"disable-display-mode-selection": true,
						"disable-run-index-selection": true,
						compact: true,
						"show-actions-on-hover": true,
						"disable-pin": true,
						"disable-edit": true,
						"disable-hover-highlight": true,
						"disable-settings-hint": true,
						"collapsing-table-column-name": null,
						"table-header-bg-color": "light",
						"executing-message": "",
						"no-data-in-branch-message": ""
					}, null, 8, [
						"node",
						"run-index",
						"workflow-object",
						"workflow-execution"
					]))], 2)
				], 2)) : createCommentVNode("", true)
			], 64))], 2);
		};
	}
});
var WorkflowExecutionLogViewer_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1g97q_126",
	loading: "_loading_1g97q_132",
	banner: "_banner_1g97q_137",
	errorBanner: "_errorBanner_1g97q_145",
	rows: "_rows_1g97q_153",
	detail: "_detail_1g97q_158",
	detailHeader: "_detailHeader_1g97q_166",
	pane: "_pane_1g97q_171",
	paneTitle: "_paneTitle_1g97q_181",
	errorPaneBody: "_errorPaneBody_1g97q_198",
	openButton: "_openButton_1g97q_216"
};
var WorkflowExecutionLogViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionLogViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionLogViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/ToolIoView.vue?vue&type=script&setup=true&lang.ts
/**
* Renders input/output for a single tool/node call using the same RunData
* schema view that the workflow log viewer uses for node I/O — but without
* the surrounding node list, since a tool call is always one logical node.
*
* Synthesizes a fake two-node workflow (an input source + the tool node) so
* RunData's input pane has a previous node to walk back to, populates the
* workflows store with the synthesized execution, and tears it all down on
* unmount.
*/
var SYNTHETIC_ID = "__tool_io__";
var INPUT_NODE_NAME = "__tool_io_input__";
var ToolIoView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolIoView",
	props: {
		name: {},
		input: {},
		output: {},
		nodeParameters: {},
		success: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const workflowsStore = useWorkflowsStore();
		const workflowState = useWorkflowState();
		const workflowHelpers = useWorkflowHelpers();
		const nodeTypesStore = useNodeTypesStore();
		provide(WorkflowIdKey, computed(() => SYNTHETIC_ID));
		provide(ChatSymbol, null);
		function wrap(value) {
			if (value === void 0 || value === null) return [{ json: {} }];
			if (Array.isArray(value)) return value.map((v) => typeof v === "object" && v !== null ? { json: v } : { json: { value: v } });
			if (typeof value === "object") return [{ json: value }];
			return [{ json: { value } }];
		}
		const synthExecution = computed(() => {
			const inputItems = wrap(props.nodeParameters && Object.keys(props.nodeParameters).length > 0 ? props.nodeParameters : props.input);
			const outputItems = wrap(props.output);
			const workflowData = {
				id: SYNTHETIC_ID,
				name: SYNTHETIC_ID,
				active: false,
				isArchived: false,
				nodes: [{
					id: INPUT_NODE_NAME,
					name: INPUT_NODE_NAME,
					type: "n8n-nodes-base.set",
					typeVersion: 1,
					position: [0, 0],
					parameters: {}
				}, {
					id: props.name,
					name: props.name,
					type: "n8n-nodes-base.set",
					typeVersion: 1,
					position: [220, 0],
					parameters: props.nodeParameters ?? {}
				}],
				connections: { [INPUT_NODE_NAME]: { main: [[{
					node: props.name,
					type: "main",
					index: 0
				}]] } },
				settings: {},
				pinData: {},
				versionId: "",
				usedCredentials: [],
				sharedWithProjects: [],
				homeProject: void 0,
				scopes: [],
				tags: [],
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			const runData = {
				[INPUT_NODE_NAME]: [{
					startTime: 0,
					executionIndex: 0,
					executionTime: 0,
					executionStatus: "success",
					source: [],
					data: { main: [inputItems] }
				}],
				[props.name]: [{
					startTime: 0,
					executionIndex: 0,
					executionTime: 0,
					executionStatus: props.success ? "success" : "error",
					source: [{
						previousNode: INPUT_NODE_NAME,
						previousNodeOutput: 0,
						previousNodeRun: 0
					}],
					data: { main: [outputItems] },
					inputOverride: { main: [inputItems] }
				}]
			};
			const now = /* @__PURE__ */ new Date();
			return {
				id: SYNTHETIC_ID,
				finished: true,
				mode: "manual",
				status: "success",
				startedAt: now,
				createdAt: now,
				stoppedAt: now,
				workflowId: SYNTHETIC_ID,
				workflowData,
				data: {
					startData: {},
					resultData: { runData },
					executionData: {
						contextData: {},
						nodeExecutionStack: [],
						metadata: {},
						waitingExecution: {},
						waitingExecutionSource: {}
					}
				}
			};
		});
		const synthWorkflow = computed(() => new Workflow({
			...synthExecution.value.workflowData,
			nodeTypes: workflowHelpers.getNodeTypes()
		}));
		const toolNodeUi = computed(() => {
			return synthExecution.value.workflowData.nodes.find((n) => n.name === props.name);
		});
		let previousWorkflowExecutionData = null;
		let unmounted = false;
		onMounted(async () => {
			previousWorkflowExecutionData = workflowsStore.workflowExecutionData;
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
			if (unmounted) return;
			workflowState.setWorkflowExecutionData(synthExecution.value);
		});
		onBeforeUnmount(() => {
			unmounted = true;
			workflowState.setWorkflowExecutionData(previousWorkflowExecutionData);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pane) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), (openBlock(), createBlock(RunData_default, {
				key: `tool-input-${__props.name}`,
				node: toolNodeUi.value,
				"run-index": 0,
				"workflow-object": synthWorkflow.value,
				"workflow-execution": synthExecution.value.data,
				"pane-type": "input",
				"display-mode": "schema",
				"disable-display-mode-selection": true,
				"disable-run-index-selection": true,
				compact: true,
				"show-actions-on-hover": true,
				"disable-pin": true,
				"disable-edit": true,
				"disable-hover-highlight": true,
				"disable-settings-hint": true,
				"collapsing-table-column-name": null,
				"table-header-bg-color": "light",
				"executing-message": "",
				"no-data-in-branch-message": ""
			}, null, 8, [
				"node",
				"workflow-object",
				"workflow-execution"
			]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.pane) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), (openBlock(), createBlock(RunData_default, {
				key: `tool-output-${__props.name}`,
				node: toolNodeUi.value,
				"run-index": 0,
				"workflow-object": synthWorkflow.value,
				"workflow-execution": synthExecution.value.data,
				"pane-type": "output",
				"display-mode": "schema",
				"disable-display-mode-selection": true,
				"disable-run-index-selection": true,
				compact: true,
				"show-actions-on-hover": true,
				"disable-pin": true,
				"disable-edit": true,
				"disable-hover-highlight": true,
				"disable-settings-hint": true,
				"collapsing-table-column-name": null,
				"table-header-bg-color": "light",
				"executing-message": "",
				"no-data-in-branch-message": ""
			}, null, 8, [
				"node",
				"workflow-object",
				"workflow-execution"
			]))], 2)], 2);
		};
	}
});
var ToolIoView_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1qea9_125",
	pane: "_pane_1qea9_131",
	paneTitle: "_paneTitle_1qea9_141"
};
var ToolIoView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolIoView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolIoView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionDetailPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href"];
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = ["innerHTML"];
var _hoisted_4 = ["innerHTML"];
var SessionDetailPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionDetailPanel",
	props: { item: {} },
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const props = __props;
		const copiedBlock = ref(null);
		let copiedResetTimer = null;
		const fullExecutionHref = computed(() => {
			if (props.item?.kind !== "workflow" || !props.item.workflowId || !props.item.workflowExecutionId) return "";
			return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: props.item.workflowId,
					executionId: props.item.workflowExecutionId
				}
			}).href;
		});
		function openFullExecution() {
			if (fullExecutionHref.value) window.open(fullExecutionHref.value, "_blank", "noopener");
		}
		const emit = __emit;
		function formatTimestamp(ts) {
			if (!ts) return "";
			const { date, time } = convertToDisplayDate(new Date(ts).toISOString());
			return `${date} ${time}`;
		}
		function ensureParsed(value) {
			if (typeof value === "string") try {
				return JSON.parse(value);
			} catch {
				return value;
			}
			return value;
		}
		function stringifyJson(value) {
			const parsed = ensureParsed(value);
			if (typeof parsed === "string") return parsed;
			return JSON.stringify(parsed, null, 2) ?? String(parsed);
		}
		async function copyJsonBlock(id, value) {
			try {
				await navigator.clipboard.writeText(stringifyJson(value));
				copiedBlock.value = id;
				if (copiedResetTimer) clearTimeout(copiedResetTimer);
				copiedResetTimer = setTimeout(() => {
					copiedBlock.value = null;
					copiedResetTimer = null;
				}, 1500);
			} catch {}
		}
		function escapeHtml(text) {
			return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
		}
		function highlightJson(value, indent = 0) {
			const pad = "  ".repeat(indent);
			const padInner = "  ".repeat(indent + 1);
			if (value === null) return "<span class=\"json-bool\">null</span>";
			if (typeof value === "boolean") return `<span class="json-bool">${value}</span>`;
			if (typeof value === "number") return `<span class="json-number">${value}</span>`;
			if (typeof value === "string") return `<span class="json-string">&quot;${escapeHtml(value)}&quot;</span>`;
			if (Array.isArray(value)) {
				if (value.length === 0) return "[]";
				return `[\n${value.map((v) => `${padInner}${highlightJson(v, indent + 1)}`).join(",\n")}\n${pad}]`;
			}
			if (typeof value === "object") {
				const entries = Object.entries(value);
				if (entries.length === 0) return "{}";
				return `{\n${entries.map(([k, v]) => `${padInner}<span class="json-key">&quot;${escapeHtml(k)}&quot;</span>: ${highlightJson(v, indent + 1)}`).join(",\n")}\n${pad}}`;
			}
			return escapeHtml(String(value));
		}
		const toolDisplayName = computed(() => {
			if (!props.item || props.item.kind !== "tool" && props.item.kind !== "suspension") return "";
			const key = builtinToolLabelKey(props.item.toolName, props.item.toolOutput);
			return key ? i18n.baseText(key) : formatToolNameForDisplay(props.item.toolName);
		});
		const headerTitle = computed(() => {
			const item = props.item;
			if (!item) return "";
			if (item.kind === "workflow") return item.workflowName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "tool") return toolDisplayName.value;
			if (item.kind === "node") return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "user") return i18n.baseText("agentSessions.timeline.user");
			if (item.kind === "agent") return i18n.baseText("agentSessions.timeline.agent");
			return i18n.baseText("agentSessions.timeline.suspended");
		});
		const headerIcon = computed(() => {
			const item = props.item;
			if (!item) return "info";
			if (item.kind === "workflow") return "workflow";
			if (item.kind === "tool") return "wrench";
			if (item.kind === "node") return "box";
			if (item.kind === "user") return "user";
			if (item.kind === "agent") return "bot";
			return "clock";
		});
		const nodeErrorMessage = computed(() => {
			const item = props.item;
			if (!item || item.kind !== "node" || item.toolSuccess !== false) return "";
			const prefix = i18n.baseText("agentSessions.timeline.nodeError");
			const output = item.toolOutput;
			if (output && typeof output === "object" && "error" in output) {
				const err = output.error;
				if (typeof err === "string" && err.length > 0) return `${prefix}: ${err}`;
			}
			return prefix;
		});
		const workflowFormOutput = computed(() => {
			const o = props.item?.toolOutput;
			if (typeof o !== "object" || o === null) return null;
			const rec = o;
			if (typeof rec.formUrl !== "string") return null;
			return {
				formUrl: rec.formUrl,
				message: typeof rec.message === "string" ? rec.message : ""
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [__props.item ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nIcon_default), {
				icon: headerIcon.value,
				size: 16
			}, null, 8, ["icon"]), createVNode(unref(N8nText_default), { bold: "" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(headerTitle.value), 1)]),
				_: 1
			})], 2), createVNode(unref(N8nIconButton_default), {
				icon: "x",
				variant: "ghost",
				"data-test-id": "detail-close",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nCard_default), null, {
				default: withCtx(() => [__props.item.timestamp ? (openBlock(), createElementBlock("dl", {
					key: 0,
					class: normalizeClass(_ctx.$style.infoRow)
				}, [createBaseVNode("dt", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.created")), 3), createBaseVNode("dd", { class: normalizeClass(_ctx.$style.value) }, toDisplayString(formatTimestamp(__props.item.timestamp)), 3)], 2)) : createCommentVNode("", true), fullExecutionHref.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.executionButton)
				}, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					label: unref(i18n).baseText("agentSessions.workflowLog.openFull"),
					"data-test-id": "open-full-execution",
					onClick: openFullExecution
				}, null, 8, ["label"])], 2)) : createCommentVNode("", true)]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.output) }, [__props.item.kind === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.item.workflowExecutionId && __props.item.workflowId ? (openBlock(), createBlock(WorkflowExecutionLogViewer_default, {
				key: `${__props.item.workflowId}:${__props.item.workflowExecutionId}`,
				"workflow-id": __props.item.workflowId,
				"workflow-execution-id": __props.item.workflowExecutionId
			}, null, 8, ["workflow-id", "workflow-execution-id"])) : __props.item.workflowTriggerType === "form" && workflowFormOutput.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				"data-test-id": "wf-form-card",
				class: normalizeClass(_ctx.$style.formCard)
			}, [createBaseVNode("p", null, toDisplayString(workflowFormOutput.value.message), 1), createBaseVNode("a", {
				href: workflowFormOutput.value.formUrl,
				target: "_blank",
				rel: "noopener",
				class: normalizeClass(_ctx.$style.formLink)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.openForm")), 11, _hoisted_1)], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "wf-error-fallback",
				class: normalizeClass(_ctx.$style.errorFallback)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBanner) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.workflowError")), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlockCopy) }, [createVNode(unref(N8nTooltip_default), { content: copiedBlock.value === "workflow-output" ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"icon-only": "",
					icon: copiedBlock.value === "workflow-output" ? "check" : "copy",
					"aria-label": copiedBlock.value === "workflow-output" ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy"),
					onClick: _cache[1] || (_cache[1] = ($event) => copyJsonBlock("workflow-output", __props.item.toolOutput))
				}, null, 8, ["icon", "aria-label"])]),
				_: 1
			}, 8, ["content"])], 2), createBaseVNode("pre", {
				class: normalizeClass(_ctx.$style.json),
				innerHTML: highlightJson(ensureParsed(__props.item.toolOutput))
			}, null, 10, _hoisted_2)], 2)], 2))], 64)) : __props.item.kind === "tool" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.item.toolName === "rich_interaction" ? (openBlock(), createBlock(RichInteractionCard_default, {
				key: 0,
				input: __props.item.toolInput,
				output: __props.item.toolOutput
			}, null, 8, ["input", "output"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlockCopy) }, [createVNode(unref(N8nTooltip_default), { content: copiedBlock.value === "tool-input" ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"icon-only": "",
					icon: copiedBlock.value === "tool-input" ? "check" : "copy",
					"aria-label": copiedBlock.value === "tool-input" ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy"),
					onClick: _cache[2] || (_cache[2] = ($event) => copyJsonBlock("tool-input", __props.item.toolInput))
				}, null, 8, ["icon", "aria-label"])]),
				_: 1
			}, 8, ["content"])], 2), createBaseVNode("pre", {
				class: normalizeClass(_ctx.$style.json),
				innerHTML: highlightJson(ensureParsed(__props.item.toolInput))
			}, null, 10, _hoisted_3)], 2)]), createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.codeBlockCopy) }, [createVNode(unref(N8nTooltip_default), { content: copiedBlock.value === "tool-output" ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy") }, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"icon-only": "",
					icon: copiedBlock.value === "tool-output" ? "check" : "copy",
					"aria-label": copiedBlock.value === "tool-output" ? unref(i18n).baseText("agents.builder.addTrigger.copied") : unref(i18n).baseText("agents.builder.addTrigger.copy"),
					onClick: _cache[3] || (_cache[3] = ($event) => copyJsonBlock("tool-output", __props.item.toolOutput))
				}, null, 8, ["icon", "aria-label"])]),
				_: 1
			}, 8, ["content"])], 2), createBaseVNode("pre", {
				class: normalizeClass(_ctx.$style.json),
				innerHTML: highlightJson(ensureParsed(__props.item.toolOutput))
			}, null, 10, _hoisted_4)], 2)])], 64))], 64)) : __props.item.kind === "node" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [nodeErrorMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "node-error-callout"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(nodeErrorMessage.value), 1)]),
				_: 1
			})) : createCommentVNode("", true), createVNode(ToolIoView_default, {
				name: (__props.item.nodeDisplayName ?? unref(formatToolNameForDisplay)(__props.item.toolName)) || "node",
				input: __props.item.toolInput,
				output: __props.item.toolOutput,
				"node-parameters": __props.item.nodeParameters,
				success: __props.item.toolSuccess
			}, null, 8, [
				"name",
				"input",
				"output",
				"node-parameters",
				"success"
			])], 64)) : __props.item.kind === "user" || __props.item.kind === "agent" ? (openBlock(), createBlock(unref(VueMarkdown), {
				key: 3,
				source: __props.item.content ?? "",
				class: normalizeClass(_ctx.$style.markdown)
			}, null, 8, ["source", "class"])) : createCommentVNode("", true)], 2)], 2)], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.selectItem")), 3))], 2);
		};
	}
});
var SessionDetailPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1d8cu_125",
	header: "_header_1d8cu_132",
	headerTitle: "_headerTitle_1d8cu_144",
	container: "_container_1d8cu_159",
	output: "_output_1d8cu_171",
	info: "_info_1d8cu_177",
	infoRow: "_infoRow_1d8cu_185",
	label: "_label_1d8cu_192",
	value: "_value_1d8cu_197",
	executionButton: "_executionButton_1d8cu_203",
	codeBlock: "_codeBlock_1d8cu_209",
	codeBlockCopy: "_codeBlockCopy_1d8cu_213",
	json: "_json_1d8cu_225",
	formCard: "_formCard_1d8cu_243",
	formLink: "_formLink_1d8cu_249",
	errorFallback: "_errorFallback_1d8cu_254",
	errorBanner: "_errorBanner_1d8cu_260",
	empty: "_empty_1d8cu_268",
	markdown: "_markdown_1d8cu_274"
};
var SessionDetailPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionDetailPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionDetailPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentSessionTimelineView.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineView",
	setup(__props) {
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const sessionsStore = useAgentSessionsStore();
		const projectsStore = useProjectsStore();
		const activeElement = useActiveElement();
		const projectId = computed(() => route.params.projectId);
		const agentId = computed(() => route.params.agentId);
		const threadId = computed(() => route.params.threadId);
		const thread = ref(null);
		const executions = ref([]);
		const loading = ref(true);
		const selectedIndex = ref(null);
		const highlightedIndex = ref(null);
		const selectedFilters = ref(/* @__PURE__ */ new Set());
		const searchQuery = ref("");
		let loadThreadDetailRequestId = 0;
		const items = computed(() => flattenExecutionsToTimelineItems(executions.value));
		const idleRanges = computed(() => computeIdleRanges(items.value));
		const bounds = computed(() => sessionBounds(items.value));
		function labelForKey(key) {
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText("agentSessions.timeline.suspension");
				case "suspension-waiting": return i18n.baseText("agentSessions.timeline.waitingForUser");
				case "agentSessions.timeline.tool.richInteraction":
				case "agentSessions.timeline.tool.richInteractionDisplay": return i18n.baseText(key);
				default: return key;
			}
		}
		const filterOptions = computed(() => {
			const counts = /* @__PURE__ */ new Map();
			const colorByKey = /* @__PURE__ */ new Map();
			for (const item of items.value) {
				const key = itemFilterKey(item);
				counts.set(key, (counts.get(key) ?? 0) + 1);
				if (!colorByKey.has(key)) colorByKey.set(key, chartBlockColor(item.kind));
			}
			return Array.from(counts.entries()).map(([key, count]) => ({
				key,
				label: labelForKey(key),
				color: colorByKey.get(key) ?? "var(--border-color)",
				count
			}));
		});
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
		const selectedItem = computed(() => selectedIndex.value !== null ? items.value[selectedIndex.value] ?? null : null);
		const visibleItemIndexes = computed(() => filteredTimelineItemIndexes(items.value, selectedFilters.value, searchQuery.value, labelForKey));
		function moveSelectedIndex(direction) {
			const indexes = visibleItemIndexes.value;
			if (indexes.length === 0) return;
			if (highlightedIndex.value === null || !indexes.includes(highlightedIndex.value)) {
				highlightedIndex.value = direction === 1 ? indexes[0] : indexes[indexes.length - 1];
				return;
			}
			const nextVisibleIndex = indexes.indexOf(highlightedIndex.value) + direction;
			if (nextVisibleIndex < 0 || nextVisibleIndex >= indexes.length) return;
			highlightedIndex.value = indexes[nextVisibleIndex];
		}
		function moveSelectedIndexToBoundary(direction) {
			const indexes = visibleItemIndexes.value;
			if (indexes.length === 0) return;
			highlightedIndex.value = direction === 1 ? indexes[indexes.length - 1] : indexes[0];
		}
		function selectTimelineItem(index) {
			selectedIndex.value = index;
			highlightedIndex.value = index;
		}
		function onKeyDown(event) {
			if (activeElement.value && shouldIgnoreCanvasShortcut(activeElement.value)) return;
			if (event.key === "Escape") {
				if (selectedIndex.value !== null || highlightedIndex.value !== null) {
					event.preventDefault();
					selectTimelineItem(null);
				}
				return;
			}
			if (event.key === "ArrowDown") {
				event.preventDefault();
				if (event.metaKey) moveSelectedIndexToBoundary(1);
				else moveSelectedIndex(1);
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				if (event.metaKey) moveSelectedIndexToBoundary(-1);
				else moveSelectedIndex(-1);
			}
		}
		useEventListener(document, "keydown", onKeyDown);
		function onKeyUp(event) {
			if (activeElement.value && shouldIgnoreCanvasShortcut(activeElement.value)) return;
			if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
			if (highlightedIndex.value === selectedIndex.value) return;
			event.preventDefault();
			selectTimelineItem(highlightedIndex.value);
		}
		useEventListener(document, "keyup", onKeyUp);
		async function loadThreadDetail() {
			const currentProjectId = projectId.value;
			const currentAgentId = agentId.value;
			const currentThreadId = threadId.value;
			const requestId = ++loadThreadDetailRequestId;
			thread.value = null;
			executions.value = [];
			selectedFilters.value = /* @__PURE__ */ new Set();
			searchQuery.value = "";
			selectTimelineItem(null);
			loading.value = true;
			sessionsStore.fetchThreads(currentProjectId, currentAgentId);
			try {
				const result = await sessionsStore.getThreadDetail(currentProjectId, currentThreadId, currentAgentId);
				if (requestId !== loadThreadDetailRequestId) return;
				thread.value = result.thread;
				executions.value = result.executions;
			} catch (error) {
				if (requestId !== loadThreadDetailRequestId) return;
				toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			} finally {
				if (requestId === loadThreadDetailRequestId) loading.value = false;
			}
		}
		watch([
			projectId,
			agentId,
			threadId
		], loadThreadDetail, { immediate: true });
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.view) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBar) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBarLeft) }, [createVNode(unref(N8nBreadcrumbs_default), {
					items: breadcrumbItems.value,
					theme: "medium",
					onItemSelected: onBreadcrumbSelect
				}, {
					append: withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.crumbSeparator),
						"aria-hidden": "true"
					}, "/", 2), createVNode(unref(DropdownMenu_default), {
						items: sessionOptions.value,
						placement: "bottom-start",
						"extra-popper-class": _ctx.$style.sessionDropdownMenu,
						"data-testid": "session-header-switcher",
						onSelect: onSessionSelect
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "small",
							class: normalizeClass(_ctx.$style.switcherButton),
							"aria-label": unref(i18n).baseText("agentSessions.sessionName")
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switcherLabel) }, toDisplayString(sessionTitle.value), 3), createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: 14
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
				}, 8, ["items"])], 2), thread.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.topBarRight)
				}, [
					triggerSource.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metricItem)
					}, [createVNode(unref(N8nIcon_default), {
						icon: triggerIcon.value,
						size: 12
					}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(triggerLabel.value), 1)], 2)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-dollar-sign",
						size: 12
					}), createBaseVNode("span", null, toDisplayString((thread.value.totalPromptTokens + thread.value.totalCompletionTokens).toLocaleString()) + "t ($" + toDisplayString(thread.value.totalCost.toFixed(4)) + ") ", 1)], 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
						icon: "clock",
						size: 12
					}), createBaseVNode("span", null, toDisplayString(formatDuration(thread.value.totalDuration)), 1)], 2),
					createVNode(unref(N8nIconButton_default), {
						icon: "x",
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.closeButton),
						"aria-label": unref(i18n).baseText("generic.close"),
						"data-test-id": "agent-session-timeline-close",
						onClick: closeTimeline
					}, null, 8, ["class", "aria-label"])
				], 2)) : createCommentVNode("", true)], 2),
				!loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.search) }, [createVNode(unref(Input_default), {
					size: "medium",
					modelValue: searchQuery.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					placeholder: unref(i18n).baseText("agentSessions.timeline.searchPlaceholder"),
					clearable: ""
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "search",
						size: 12
					})]),
					_: 1
				}, 8, ["modelValue", "placeholder"])], 2), createVNode(SessionEventFilter_default, {
					available: filterOptions.value,
					selected: selectedFilters.value,
					onUpdate: _cache[1] || (_cache[1] = (next) => selectedFilters.value = next)
				}, null, 8, ["available", "selected"])], 2)) : createCommentVNode("", true),
				!loading.value && items.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.chartRow)
				}, [createVNode(SessionTimelineChart_default, {
					items: items.value,
					"idle-ranges": idleRanges.value,
					"session-start": bounds.value.start,
					"session-end": bounds.value.end,
					"visible-kinds": selectedFilters.value,
					"selected-index": highlightedIndex.value,
					onSelect: selectTimelineItem
				}, null, 8, [
					"items",
					"idle-ranges",
					"session-start",
					"session-end",
					"visible-kinds",
					"selected-index"
				])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.panels) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tablePanel) }, [loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, "Loading...", 2)) : (openBlock(), createBlock(SessionTimelineTable_default, {
					key: 1,
					items: items.value,
					"idle-ranges": idleRanges.value,
					"selected-index": highlightedIndex.value,
					"visible-kinds": selectedFilters.value,
					"search-query": searchQuery.value,
					onSelect: selectTimelineItem
				}, null, 8, [
					"items",
					"idle-ranges",
					"selected-index",
					"visible-kinds",
					"search-query"
				]))], 2), createVNode(Transition, { name: "session-detail-panel" }, {
					default: withCtx(() => [selectedItem.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.detailPanel)
					}, [createVNode(SessionDetailPanel_default, {
						item: selectedItem.value,
						onClose: _cache[2] || (_cache[2] = ($event) => selectTimelineItem(null))
					}, null, 8, ["item"])], 2)) : createCommentVNode("", true)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
var AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default = {
	view: "_view_p2hgj_138",
	topBar: "_topBar_p2hgj_145",
	topBarLeft: "_topBarLeft_p2hgj_156",
	topBarRight: "_topBarRight_p2hgj_163",
	sep: "_sep_p2hgj_174",
	metricItem: "_metricItem_p2hgj_178",
	closeButton: "_closeButton_p2hgj_185",
	crumbSeparator: "_crumbSeparator_p2hgj_190",
	switcherButton: "_switcherButton_p2hgj_196",
	switcherLabel: "_switcherLabel_p2hgj_202",
	sessionDropdownMenu: "_sessionDropdownMenu_p2hgj_209",
	sessionDropdownName: "_sessionDropdownName_p2hgj_220",
	sessionDropdownDate: "_sessionDropdownDate_p2hgj_228",
	sessionTitle: "_sessionTitle_p2hgj_236",
	subHeader: "_subHeader_p2hgj_242",
	search: "_search_p2hgj_252",
	chartRow: "_chartRow_p2hgj_257",
	panels: "_panels_p2hgj_264",
	tablePanel: "_tablePanel_p2hgj_270",
	detailPanel: "_detailPanel_p2hgj_278",
	loading: "_loading_p2hgj_315"
};
var AgentSessionTimelineView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionTimelineView_default as default };
