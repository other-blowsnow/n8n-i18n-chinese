import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CngOnFvY.js";
import { Ct as useRoute, no as N8nButton_default, to as N8nText_default, wt as useRouter } from "./src-CtyOKmD-.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useToast } from "./useToast-COvPNq4S.js";
import { Gr as AGENT_BUILDER_VIEW, ui as EXTENDED_PROMPT_MAX_LENGTH } from "./constants-CSBjw1Ht.js";
import { wn as useProjectsStore } from "./workflowDocument.store-W274j3PU.js";
import { t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-C2APvywU.js";
import { i as createAgent } from "./useAgentApi-D0z-Ls4h.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-9BniTeQt.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-DfGePKvv.js";
import { t as buildAgentConfigFingerprint } from "./agentTelemetry.utils-CRX5YFZI.js";
import { n as useAgentBuilderStatus, t as AgentBuilderUnconfiguredEmptyState_default } from "./AgentBuilderUnconfiguredEmptyState-fZcaA8TX.js";
import { t as ChatInputBase_default } from "./ChatInputBase-DJb02Rq4.js";
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
				upsertProjectAgentsListCache(projectId.value, agent);
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
				upsertProjectAgentsListCache(projectId.value, agent);
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
				router.push({
					name: AGENT_BUILDER_VIEW,
					params: {
						projectId: projectId.value,
						agentId: agent.id
					},
					query: {
						prompt: message,
						expandBuildChat: "true"
					}
				});
			} catch (e) {
				isCreating.value = false;
				throw e;
			}
		}
		function selectSuggestion(suggestion) {
			inputText.value = buildPromptWithSkills(suggestion);
			telemetry.track("User selected agent suggestion", { suggestion_name: suggestion.name });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.page) }, [statusLoaded.value && !unref(isBuilderConfigured) ? (openBlock(), createBlock(AgentBuilderUnconfiguredEmptyState_default, { key: 0 })) : statusLoaded.value ? (openBlock(), createElementBlock("div", {
				key: 1,
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
					"max-length": unref(EXTENDED_PROMPT_MAX_LENGTH),
					onSubmit: submitDescription
				}, null, 8, [
					"modelValue",
					"placeholder",
					"can-submit",
					"max-length"
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
			], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var NewAgentView_vue_vue_type_style_index_0_lang_module_default = {
	page: "_page_1fr7v_2",
	content: "_content_1fr7v_10",
	topBar: "_topBar_1fr7v_17",
	center: "_center_1fr7v_30",
	heading: "_heading_1fr7v_42",
	headingLift: "_headingLift_1fr7v_1",
	inputWrapper: "_inputWrapper_1fr7v_50",
	contentDropIn: "_contentDropIn_1fr7v_1",
	suggestions: "_suggestions_1fr7v_57",
	suggestionsLabel: "_suggestionsLabel_1fr7v_65",
	suggestionGrid: "_suggestionGrid_1fr7v_71",
	suggestionCard: "_suggestionCard_1fr7v_78",
	suggestionCardIn: "_suggestionCardIn_1fr7v_1",
	suggestionHeader: "_suggestionHeader_1fr7v_109",
	suggestionIcon: "_suggestionIcon_1fr7v_115",
	suggestionName: "_suggestionName_1fr7v_120",
	suggestionDescription: "_suggestionDescription_1fr7v_124"
};
var NewAgentView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NewAgentView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NewAgentView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NewAgentView_default as default };
