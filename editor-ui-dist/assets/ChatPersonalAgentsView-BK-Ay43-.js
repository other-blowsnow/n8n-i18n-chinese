import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { M as useMediaQuery, gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Hn as N8nText_default, Un as N8nButton_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-LAVj4VkL.js";
import { Wi as useUIStore, dr as useUsersStore, n as useToast } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { ss as MODAL_CONFIRM } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./retry-CMAFrhVi.js";
import "./CredentialIcon-CHvZKgl9.js";
import { d as MOBILE_MEDIA_QUERY, t as AGENT_EDITOR_MODAL_KEY } from "./constants-qk3hx0l8.js";
import { f as stringifyModel, r as filterAndSortAgents, t as useChatStore } from "./chat.store-DnJwLoWK.js";
import "./fileUtils-D3GQ2UWQ.js";
import "./ChatAgentAvatar-hwD4RBR6.js";
import { n as ChatAgentSearchSort_default, r as ChatAgentCard_default, t as SkeletonAgentCard_default } from "./SkeletonAgentCard-DPX9uPDf.js";
import { n as ChatLayout_default, r as useChatCredentials, t as ChatSidebarOpener_default } from "./ChatSidebarOpener-KoERJgoC.js";
import "./useChatHubSidebarState-BVw6kDBQ.js";
var ChatPersonalAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPersonalAgentsView",
	setup(__props) {
		const chatStore = useChatStore();
		const uiStore = useUIStore();
		const toast = useToast();
		const message = useMessage();
		const usersStore = useUsersStore();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
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
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1) }]) }, [
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
				], 2), createVNode(ChatSidebarOpener_default, { class: normalizeClass(_ctx.$style.menuButton) }, null, 8, ["class"])]),
				_: 1
			});
		};
	}
});
var ChatPersonalAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ph4w_123",
	menuButton: "_menuButton_1ph4w_136",
	isMobileDevice: "_isMobileDevice_1ph4w_142",
	header: "_header_1ph4w_146",
	headerContent: "_headerContent_1ph4w_154",
	empty: "_empty_1ph4w_160",
	agentsGrid: "_agentsGrid_1ph4w_169"
};
var ChatPersonalAgentsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatPersonalAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPersonalAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatPersonalAgentsView_default as default };
