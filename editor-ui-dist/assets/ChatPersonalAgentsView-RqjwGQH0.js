import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { N as useMediaQuery, _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import { On as N8nText_default, kn as N8nButton_default } from "./src-Ca6p-F4w.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import "./truncate-D24O8Gpt.js";
import { br as useToast, gr as useMessage, r as useUIStore, t as useUsersStore } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { is as MODAL_CONFIRM } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import "./CredentialIcon-DSNX9u5m.js";
import { g as MOBILE_MEDIA_QUERY, t as AGENT_EDITOR_MODAL_KEY } from "./constants-Bgby4me8.js";
import { i as filterAndSortAgents, m as stringifyModel, t as useChatStore } from "./chat.store-DhSXT9Vg.js";
import "./ChatAgentAvatar-xg27yDs9.js";
import { n as ChatAgentSearchSort_default, r as ChatAgentCard_default, t as SkeletonAgentCard_default } from "./SkeletonAgentCard-C4AEVI48.js";
import { n as useChatCredentials, t as ChatLayout_default } from "./ChatLayout-DV8LgvJc.js";
var ChatPersonalAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPersonalAgentsView",
	setup(__props) {
		const chatStore = useChatStore();
		const uiStore = useUIStore();
		const toast = useToast();
		const message = useMessage();
		const usersStore = useUsersStore();
		const isMobileDevice = useMediaQuery(MOBILE_MEDIA_QUERY);
		const i18n = useI18n();
		const agentFilter = ref({
			search: "",
			sortBy: "updatedAt"
		});
		const { credentialsByProvider } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const readyToShowList = computed(() => chatStore.agentsReady);
		const allModels = computed(() => chatStore.agents["custom-agent"].models);
		const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
		function handleCreateAgent() {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: { credentials: credentialsByProvider }
			});
		}
		async function handleEditAgent(model) {
			if (model.provider === "custom-agent") uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: {
					agentId: model.agentId,
					credentials: credentialsByProvider
				}
			});
		}
		async function handleDeleteAgent(agentId) {
			if (await message.confirm(i18n.baseText("chatHub.agents.delete.confirm.message"), i18n.baseText("chatHub.agents.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("chatHub.agents.delete.confirm.button"),
				cancelButtonText: i18n.baseText("chatHub.agents.delete.cancel.button")
			}) !== "confirm" || !credentialsByProvider.value) return;
			try {
				await chatStore.deleteCustomAgent(agentId, credentialsByProvider.value);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("chatHub.agents.delete.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.agents.delete.error"));
			}
		}
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials, { minLoadingTime: 250 });
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatLayout_default, null, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice) }]) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [createVNode(unref(N8nText_default), {
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.personalAgents.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.personalAgents.description")), 1)]),
						_: 1
					})], 2), createVNode(unref(N8nButton_default), {
						icon: "plus",
						type: "primary",
						size: "medium",
						onClick: handleCreateAgent
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agents.button.newAgent")), 1)]),
						_: 1
					})], 2),
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
						default: withCtx(() => [createTextVNode(toDisplayString(allModels.value.length === 0 ? unref(i18n).baseText("chatHub.personalAgents.empty.noAgents") : unref(i18n).baseText("chatHub.personalAgents.empty.noMatch")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(agents.value, (agent) => {
						return openBlock(), createElementBlock(Fragment, { key: unref(stringifyModel)(agent.model) }, [agent.model.provider === "custom-agent" ? (openBlock(), createBlock(ChatAgentCard_default, {
							key: 0,
							agent,
							onEdit: ($event) => handleEditAgent(agent.model),
							onDelete: ($event) => handleDeleteAgent(agent.model.agentId)
						}, null, 8, [
							"agent",
							"onEdit",
							"onDelete"
						])) : createCommentVNode("", true)], 64);
					}), 128))], 2))
				], 2)]),
				_: 1
			});
		};
	}
});
var ChatPersonalAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1m2yx_123",
	header: "_header_1m2yx_136",
	headerContent: "_headerContent_1m2yx_144",
	empty: "_empty_1m2yx_150",
	agentsGrid: "_agentsGrid_1m2yx_159"
};
var ChatPersonalAgentsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatPersonalAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPersonalAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatPersonalAgentsView_default as default };
