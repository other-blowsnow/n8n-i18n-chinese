import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _ as Fragment, _n as normalizeClass, gt as watch, j as createVNode, rt as renderList, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { N as useMediaQuery, bt as useI18n } from "./_MapCache-14clFqm4.js";
import { Zi as N8nText_default, _t as useRouter } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { t as useUsersStore } from "./users.store-DNsxOyr9.js";
import { hs as VIEWS } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import "./CredentialIcon-C_ro4oh2.js";
import { h as MOBILE_MEDIA_QUERY } from "./constants-CsI9wULx.js";
import { S as stringifyModel, c as filterAndSortAgents, t as useChatStore } from "./chat.store-BrIM6zrT.js";
import "./ChatAgentAvatar-D7Wu8cPY.js";
import { n as ChatAgentSearchSort_default, r as ChatAgentCard_default, t as SkeletonAgentCard_default } from "./SkeletonAgentCard-B17I-FLy.js";
import { n as useChatCredentials, t as ChatLayout_default } from "./ChatLayout-DRaMMCW9.js";
var ChatWorkflowAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatWorkflowAgentsView",
	setup(__props) {
		const chatStore = useChatStore();
		const usersStore = useUsersStore();
		const router = useRouter();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const i18n = useI18n();
		const agentFilter = ref({
			search: "",
			sortBy: "updatedAt"
		});
		const { credentialsByProvider } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const readyToShowList = computed(() => chatStore.agentsReady);
		const allModels = computed(() => chatStore.agents.n8n.models);
		const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
		async function handleEditAgent(model) {
			if (model.provider === "n8n") {
				const routeData = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { name: model.workflowId }
				});
				window.open(routeData.href, "_blank");
				return;
			}
		}
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials, { minLoadingTime: 250 });
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatLayout_default, null, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1) }]) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [createVNode(unref(N8nText_default), {
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.workflowAgents.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.workflowAgents.description")), 1)]),
						_: 1
					})], 2)], 2),
					readyToShowList.value && allModels.value.length > 0 ? (openBlock(), createBlock(ChatAgentSearchSort_default, {
						key: 0,
						modelValue: agentFilter.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => agentFilter.value = $event)
					}, null, 8, ["modelValue"])) : createCommentVNode("", true),
					!readyToShowList.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
						return createVNode(SkeletonAgentCard_default, { key: i });
					}), 64))], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.empty)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(allModels.value.length === 0 ? unref(i18n).baseText("chatHub.workflowAgents.empty.noAgents") : unref(i18n).baseText("chatHub.workflowAgents.empty.noMatch")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(agents.value, (agent) => {
						return openBlock(), createBlock(ChatAgentCard_default, {
							key: unref(stringifyModel)(agent.model),
							agent,
							onEdit: ($event) => handleEditAgent(agent.model)
						}, null, 8, ["agent", "onEdit"]);
					}), 128))], 2))
				], 2)]),
				_: 1
			});
		};
	}
});
var ChatWorkflowAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_16sez_125",
	menuButton: "_menuButton_16sez_138",
	isMobileDevice: "_isMobileDevice_16sez_144",
	header: "_header_16sez_148",
	headerContent: "_headerContent_16sez_156",
	empty: "_empty_16sez_162",
	agentsGrid: "_agentsGrid_16sez_171"
};
var ChatWorkflowAgentsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatWorkflowAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatWorkflowAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatWorkflowAgentsView_default as default };
