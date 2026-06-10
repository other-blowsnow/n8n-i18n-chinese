import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, j as createVNode, k as createStaticVNode, n as Transition, r as TransitionGroup, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Da as N8nText_default, Oa as N8nButton_default, gt as useRouter, ht as useRoute, ka as N8nIcon_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { yn as useProjectsStore } from "./workflows.store-DyUv-2Dd.js";
import { t as useToast } from "./useToast-DacasnmQ.js";
import { Hr as AGENT_BUILDER_VIEW } from "./constants-BMUE7W6Y.js";
import { t as useRootStore } from "./useRootStore-BOF8LYEF.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-OUM63rct.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-pW7JtnYz.js";
import { i as createAgent } from "./useAgentApi-_V3Bnq9X.js";
import { t as buildAgentConfigFingerprint } from "./agentTelemetry.utils-NFvfOYAd.js";
import { n as useAgentBuilderStatus, t as AgentBuilderUnconfiguredEmptyState_default } from "./AgentBuilderUnconfiguredEmptyState-BPmQQlca.js";
import { t as ChatInputBase_default } from "./ChatInputBase-D2nZQzqM.js";
import { t as formatToolNameForDisplay } from "./toolDisplayName-qzlsc7ZR.js";
//#region src/features/agents/components/AgentBuilderProgress.vue?vue&type=script&setup=true&lang.ts
var MAX_LINES = 7;
var AgentBuilderProgress_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderProgress",
	props: {
		projectId: {},
		agentId: {},
		initialMessage: {}
	},
	emits: [
		"done",
		"configUpdated",
		"update:streaming"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const logLines = ref([]);
		const isStreaming = ref(false);
		const hasError = ref(false);
		function pushLine(line) {
			const trimmed = line.replace(/\s+/g, " ").trim();
			if (!trimmed) return;
			logLines.value.push(trimmed);
			if (logLines.value.length > MAX_LINES) logLines.value = logLines.value.slice(-MAX_LINES);
		}
		function handleEvent(event, state) {
			switch (event.type) {
				case "text-delta":
					state.textBuffer += event.delta;
					while (state.textBuffer.includes("\n")) {
						const idx = state.textBuffer.indexOf("\n");
						pushLine(state.textBuffer.slice(0, idx));
						state.textBuffer = state.textBuffer.slice(idx + 1);
					}
					break;
				case "tool-call":
					if (state.textBuffer) {
						pushLine(state.textBuffer);
						state.textBuffer = "";
					}
					pushLine(`→ ${formatToolNameForDisplay(event.toolName)}`);
					break;
				case "tool-result":
					pushLine(`${event.isError ? "✗" : "✓"} ${formatToolNameForDisplay(event.toolName)}`);
					break;
				case "config-updated":
				case "tool-updated":
					emit("configUpdated");
					break;
				case "error":
					hasError.value = true;
					pushLine(`Error: ${event.message}`);
					break;
				case "done":
					state.doneSeen = true;
					break;
				default: break;
			}
		}
		async function streamBuild(message) {
			isStreaming.value = true;
			emit("update:streaming", true);
			const { baseUrl } = rootStore.restApiContext;
			const browserId = localStorage.getItem("n8n-browserId") ?? "";
			const url = `${baseUrl}/projects/${props.projectId}/agents/v2/${props.agentId}/build`;
			const state = {
				textBuffer: "",
				doneSeen: false
			};
			try {
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"browser-id": browserId
					},
					credentials: "include",
					body: JSON.stringify({ message })
				});
				if (!response.ok || !response.body) {
					hasError.value = true;
					pushLine(`Error: ${response.statusText || "Failed to reach builder"}`);
					return;
				}
				const reader = response.body.getReader();
				const decoder = new TextDecoder();
				let buffer = "";
				readerLoop: while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					buffer += decoder.decode(value, { stream: true });
					const lines = buffer.split("\n");
					buffer = lines.pop() ?? "";
					for (const line of lines) {
						if (!line.startsWith("data: ")) continue;
						let event;
						try {
							event = JSON.parse(line.slice(6));
						} catch {
							continue;
						}
						handleEvent(event, state);
						if (state.doneSeen) break readerLoop;
					}
				}
				if (state.textBuffer.trim()) pushLine(state.textBuffer);
			} catch (e) {
				hasError.value = true;
				pushLine(`Error: ${e instanceof Error ? e.message : "Unknown error"}`);
			} finally {
				isStreaming.value = false;
				emit("update:streaming", false);
				emit("done");
			}
		}
		onMounted(() => {
			streamBuild(props.initialMessage);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.progress) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.centerColumn) }, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.loader),
					"aria-hidden": "true"
				}, [hasError.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "triangle-alert",
					size: 40
				})) : (openBlock(), createElementBlock("svg", {
					key: 1,
					class: normalizeClass([_ctx.$style.nodeLoader, isStreaming.value ? _ctx.$style.nodeLoaderActive : ""]),
					width: "32",
					height: "26",
					viewBox: "0 0 32 26",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, [..._cache[0] || (_cache[0] = [createStaticVNode("<path pathLength=\"1\" d=\"M4.8 13H8\"></path><path pathLength=\"1\" d=\"M14.4 13H15.6C16.9 13 17.9 12.1 18.1 10.9L18.2 10.3C18.5 8.6 19.9 7.4 21.6 7.4H24\"></path><path pathLength=\"1\" d=\"M14.4 13H15.6C16.9 13 17.9 13.9 18.1 15.1L18.2 15.7C18.5 17.4 19.9 18.6 21.6 18.6H22.4\"></path><circle pathLength=\"1\" cx=\"3.2\" cy=\"13\" r=\"2.4\"></circle><circle pathLength=\"1\" cx=\"11.2\" cy=\"13\" r=\"2.4\"></circle><circle pathLength=\"1\" cx=\"27.2\" cy=\"8.2\" r=\"2.4\"></circle><circle pathLength=\"1\" cx=\"24\" cy=\"17.8\" r=\"2.4\"></circle>", 7)])], 2))], 2),
				createVNode(unref(N8nText_default), {
					tag: "h3",
					bold: "",
					step: "xl",
					class: normalizeClass(_ctx.$style.heading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(hasError.value ? unref(i18n).baseText("agents.builder.progress.error.title") : unref(i18n).baseText("agents.builder.progress.building.title")), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.subheading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(hasError.value ? unref(i18n).baseText("agents.builder.progress.error.hint") : unref(i18n).baseText("agents.builder.progress.building.hint")), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.logBox),
					"aria-live": "polite"
				}, [createVNode(TransitionGroup, {
					name: "builder-line",
					tag: "div",
					class: normalizeClass(_ctx.$style.logInner)
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(logLines.value, (line, i) => {
						return openBlock(), createElementBlock("div", {
							key: line + i,
							class: normalizeClass(_ctx.$style.line)
						}, toDisplayString(line), 3);
					}), 128))]),
					_: 1
				}, 8, ["class"])], 2)
			], 2)], 2);
		};
	}
});
var AgentBuilderProgress_vue_vue_type_style_index_0_lang_module_default = {
	progress: "_progress_1vr89_125",
	centerColumn: "_centerColumn_1vr89_134",
	loader: "_loader_1vr89_143",
	nodeLoader: "_nodeLoader_1vr89_148",
	nodeLoaderActive: "_nodeLoaderActive_1vr89_165",
	drawNode: "_drawNode_1vr89_1",
	heading: "_heading_1vr89_228",
	subheading: "_subheading_1vr89_233",
	logBox: "_logBox_1vr89_238",
	logInner: "_logInner_1vr89_249",
	line: "_line_1vr89_255"
};
var AgentBuilderProgress_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderProgress_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderProgress_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/NewAgentView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var NewAgentView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NewAgentView",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const rootStore = useRootStore();
		const usersStore = useUsersStore();
		const projectsStore = useProjectsStore();
		const telemetry = useTelemetry();
		const agentTelemetry = useAgentTelemetry();
		const i18n = useI18n();
		const { showError } = useToast();
		const { isBuilderConfigured, fetchStatus } = useAgentBuilderStatus();
		const projectId = computed(() => typeof route.query.projectId === "string" ? route.query.projectId : projectsStore.personalProject?.id ?? "");
		const firstName = computed(() => usersStore.currentUser?.firstName ?? "");
		const heading = computed(() => firstName.value ? i18n.baseText("agents.new.headingWithName", { interpolate: { name: firstName.value } }) : i18n.baseText("agents.new.heading"));
		const inputText = ref("");
		const isCreating = ref(false);
		const statusLoaded = ref(false);
		const chatInputRef = ref(null);
		onMounted(async () => {
			try {
				await fetchStatus();
			} catch (error) {
				showError(error, i18n.baseText("settings.agentBuilder.loadError"));
			} finally {
				statusLoaded.value = true;
				await nextTick();
				if (isBuilderConfigured.value) chatInputRef.value?.focus();
			}
		});
		const building = ref(null);
		const suggestions = [
			{
				icon: "🔍",
				name: "SEO Audit",
				description: "An SEO auditor. Give it a website URL and it crawls the pages, identifies issues, and suggests improvements.",
				prompt: "Create an SEO auditor agent. It should accept a website URL, crawl the pages, identify SEO issues like missing meta tags, broken links, slow load times, and suggest improvements.",
				skills: [{
					name: "Technical SEO Triage",
					description: "Use when checking crawlability, indexability, structured data, or performance issues",
					body: [
						"Review the site in a technical SEO pass before recommending content changes.",
						"Check crawlability, indexability, robots directives, canonical tags, redirects, broken links, sitemap coverage, structured data, mobile usability, and page performance.",
						"Group findings by severity: critical blockers, ranking risks, and nice-to-have improvements.",
						"For every issue, explain the user impact, the likely SEO impact, and a concrete fix."
					].join("\n")
				}, {
					name: "SERP Snippet Review",
					description: "Use when evaluating titles, meta descriptions, headings, or search-result copy",
					body: [
						"Assess whether titles, meta descriptions, and H1s clearly match search intent.",
						"Prefer specific, benefit-led copy over generic marketing language.",
						"Flag missing, duplicate, overlong, or vague metadata.",
						"When rewriting snippets, keep titles concise and make meta descriptions actionable without overpromising."
					].join("\n")
				}]
			},
			{
				icon: "👋",
				name: "Recruiting Sourcer",
				description: "A recruiting sourcer. Give it a job description and it finds matching candidates from multiple platforms.",
				prompt: "Create a recruiting sourcer agent. It should accept a job description, search for matching candidates across platforms, and compile a shortlist with contact info and relevance scores.",
				skills: [{
					name: "Candidate Scorecard",
					description: "Use when comparing candidates against a role or building a shortlist",
					body: [
						"Score candidates against the job requirements using explicit evidence from their profile.",
						"Separate must-have qualifications from nice-to-have signals.",
						"Call out uncertainty instead of inferring experience that is not visible.",
						"Return a concise scorecard with fit score, strongest evidence, possible gaps, and recommended next step."
					].join("\n")
				}, {
					name: "Personalized Outreach",
					description: "Use when drafting initial candidate outreach or follow-up messages",
					body: [
						"Write concise, respectful outreach that references one or two specific candidate signals.",
						"Lead with why the role may be relevant to the candidate, not with company boilerplate.",
						"Keep the tone warm, direct, and low-pressure.",
						"Include a clear call to action and avoid exaggerated claims about fit."
					].join("\n")
				}]
			},
			{
				icon: "📬",
				name: "Inbox Sorter",
				description: "Sort your inbox, classifying emails by sender and marking them as read when they match your rules.",
				prompt: "Create an inbox sorter agent. It should classify incoming emails by sender and topic, apply user-defined rules to mark as read, label, or archive, and provide a daily summary.",
				skills: [{
					name: "Inbox Classification Rules",
					description: "Use when categorizing, labeling, archiving, or marking emails as read",
					body: [
						"Classify emails by sender, topic, urgency, and whether a response is needed.",
						"Apply user rules conservatively: when a message is ambiguous, leave it visible and explain why.",
						"Never archive or mark an email as read if it appears urgent, personal, financial, legal, security-related, or action-required unless the user rule explicitly covers it.",
						"Prefer labels that make future review easier, such as Action Needed, FYI, Receipt, Newsletter, Scheduling, or Support."
					].join("\n")
				}, {
					name: "Daily Inbox Digest",
					description: "Use when creating a daily or periodic summary of inbox activity",
					body: [
						"Summarize the inbox by priority, not by raw arrival order.",
						"Start with urgent or response-needed messages, then important updates, then low-priority bulk mail.",
						"Include sender, subject, one-line summary, recommended action, and due date if present.",
						"Keep the digest skimmable and avoid exposing unnecessary message body details."
					].join("\n")
				}]
			}
		];
		function buildPromptWithSkills(suggestion) {
			if (suggestion.skills.length === 0) return suggestion.prompt;
			const skills = suggestion.skills.map((skill) => `- ${skill.name}
  description: ${skill.description}
  body: ${skill.body}`).join("\n\n");
			return `${suggestion.prompt}

Also create these curated skills and attach them to the agent config. For each skill, call create_skill with the name, description, and body. After creating the skills, call read_config and patch_config to append the returned skill refs to the config skills array.

${skills}`;
		}
		async function createBlank() {
			if (isCreating.value) return;
			isCreating.value = true;
			try {
				const agent = await createAgent(rootStore.restApiContext, projectId.value, i18n.baseText("agents.new.defaultName"));
				telemetry.track("User created agent", {
					agent_id: agent.id,
					source: "create_blank"
				});
				router.push({
					name: AGENT_BUILDER_VIEW,
					params: {
						projectId: projectId.value,
						agentId: agent.id
					}
				});
			} finally {
				isCreating.value = false;
			}
		}
		async function submitDescription() {
			if (isCreating.value || !inputText.value.trim()) return;
			isCreating.value = true;
			const message = inputText.value.trim();
			try {
				const agent = await createAgent(rootStore.restApiContext, projectId.value, i18n.baseText("agents.new.defaultName"));
				telemetry.track("User created agent", {
					agent_id: agent.id,
					source: "description_prompt"
				});
				try {
					const fingerprint = await buildAgentConfigFingerprint(null, []);
					agentTelemetry.trackSubmittedMessage({
						agentId: agent.id,
						mode: "build",
						status: "draft",
						agentConfig: fingerprint
					});
				} catch {}
				building.value = {
					agentId: agent.id,
					message
				};
			} catch (e) {
				isCreating.value = false;
				throw e;
			}
		}
		function onBuildDone() {
			const target = building.value;
			if (!target) return;
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: projectId.value,
					agentId: target.agentId
				}
			});
		}
		function selectSuggestion(suggestion) {
			inputText.value = buildPromptWithSkills(suggestion);
			telemetry.track("User selected agent suggestion", { suggestion_name: suggestion.name });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.page) }, [statusLoaded.value && !unref(isBuilderConfigured) ? (openBlock(), createBlock(AgentBuilderUnconfiguredEmptyState_default, { key: 0 })) : statusLoaded.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(Transition, { name: "building-overlay" }, {
				default: withCtx(() => [building.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.buildingOverlay)
				}, [createVNode(AgentBuilderProgress_default, {
					"project-id": projectId.value,
					"agent-id": building.value.agentId,
					"initial-message": building.value.message,
					onDone: onBuildDone
				}, null, 8, [
					"project-id",
					"agent-id",
					"initial-message"
				])], 2)) : createCommentVNode("", true)]),
				_: 1
			}), createVNode(Transition, { name: "new-agent-content" }, {
				default: withCtx(() => [!building.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBar) }, [createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("agents.new.startBlank"),
					variant: "ghost",
					size: "medium",
					icon: "file",
					loading: isCreating.value,
					"data-testid": "create-blank-agent",
					onClick: createBlank
				}, null, 8, ["label", "loading"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.center) }, [
					createBaseVNode("h1", { class: normalizeClass(_ctx.$style.heading) }, toDisplayString(heading.value), 3),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWrapper) }, [createVNode(ChatInputBase_default, {
						ref_key: "chatInputRef",
						ref: chatInputRef,
						modelValue: inputText.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputText.value = $event),
						placeholder: unref(i18n).baseText("agents.new.description.placeholder"),
						"is-streaming": false,
						"can-submit": inputText.value.trim().length > 0 && !isCreating.value,
						"show-voice": true,
						"show-attach": false,
						onSubmit: submitDescription
					}, null, 8, [
						"modelValue",
						"placeholder",
						"can-submit"
					])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestions) }, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.suggestionsLabel),
						tag: "h3",
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.new.templates.label")), 1)]),
						_: 1
					}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionGrid) }, [(openBlock(), createElementBlock(Fragment, null, renderList(suggestions, (suggestion, index) => {
						return createBaseVNode("button", {
							key: suggestion.name,
							type: "button",
							class: normalizeClass(_ctx.$style.suggestionCard),
							style: normalizeStyle({ "--suggestion-index": index }),
							"data-testid": "agent-suggestion-card",
							onClick: ($event) => selectSuggestion(suggestion)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.suggestionIcon) }, toDisplayString(suggestion.icon), 3), createVNode(unref(N8nText_default), {
							tag: "span",
							bold: "",
							size: "small",
							class: normalizeClass(_ctx.$style.suggestionName)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(suggestion.name), 1)]),
							_: 2
						}, 1032, ["class"])], 2), createVNode(unref(N8nText_default), {
							tag: "span",
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.suggestionDescription)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(suggestion.description), 1)]),
							_: 2
						}, 1032, ["class"])], 14, _hoisted_1);
					}), 64))], 2)], 2)
				], 2)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 64)) : createCommentVNode("", true)], 2);
		};
	}
});
var NewAgentView_vue_vue_type_style_index_0_lang_module_default = {
	page: "_page_17eez_2",
	buildingOverlay: "_buildingOverlay_17eez_10",
	content: "_content_17eez_20",
	topBar: "_topBar_17eez_49",
	center: "_center_17eez_62",
	heading: "_heading_17eez_74",
	headingLift: "_headingLift_17eez_1",
	inputWrapper: "_inputWrapper_17eez_82",
	contentDropIn: "_contentDropIn_17eez_1",
	suggestions: "_suggestions_17eez_89",
	suggestionsLabel: "_suggestionsLabel_17eez_97",
	suggestionGrid: "_suggestionGrid_17eez_103",
	suggestionCard: "_suggestionCard_17eez_110",
	suggestionCardIn: "_suggestionCardIn_17eez_1",
	suggestionHeader: "_suggestionHeader_17eez_141",
	suggestionIcon: "_suggestionIcon_17eez_147",
	suggestionName: "_suggestionName_17eez_152",
	suggestionDescription: "_suggestionDescription_17eez_156"
};
var NewAgentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NewAgentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NewAgentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NewAgentView_default as default };
