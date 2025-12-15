import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { M as useMediaQuery, gt as useI18n } from "./_MapCache-CyBAZEDf.js";
import { G as N8nSelect_default, Hn as N8nButton_default, K as N8nOption_default, Vn as N8nText_default, Wn as N8nIcon_default, at as N8nBadge_default, nt as N8nActionDropdown_default, xt as N8nIconButton_default, yt as N8nInput_default } from "./src-CKNGGC1H.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, p as RouterLink } from "./truncate-CZFeThpb.js";
import "./icon-521DvC2D.js";
import "./overlay-BNHSj7rn.js";
import "./empty-C2SrrehM.js";
import { t as useMessage } from "./useMessage-C56y91s7.js";
import { Fi as useUIStore, nr as useUsersStore } from "./useTelemetry-DfTC69TL.js";
import { t as useToast } from "./useToast-D5n7Pl1L.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import { $o as MODAL_CONFIRM, Po as VIEWS } from "./constants-DrLxPWeP.js";
import "./merge-CKju1Aqe.js";
import "./_baseOrderBy-BFxQ1EZq.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-BiLybJE6.js";
import "./useExternalHooks-CSQJVpG7.js";
import "./useStyles-DhM0cpS7.js";
import "./retry-CalJieID.js";
import "./CredentialIcon-DV5y8eJm.js";
import { t as AGENT_EDITOR_MODAL_KEY, u as MOBILE_MEDIA_QUERY } from "./constants-D2fYduVh.js";
import { d as stringifyModel, n as filterAndSortAgents, o as getAgentRoute, t as useChatStore } from "./chat.store-ow_A6EGh.js";
import "./fileUtils-BIVczUdz.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-Dj1oP6RM.js";
import { n as ChatLayout_default, r as useChatCredentials, t as ChatSidebarOpener_default } from "./ChatSidebarOpener-T0GehR4G.js";
import "./useChatHubSidebarState-BcArS2-a.js";
var ChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentCard",
	props: { agent: {} },
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const menuItems = computed(() => {
			return [{
				id: "edit",
				label: i18n.baseText("chatHub.agent.card.menu.edit")
			}, ...__props.agent.model.provider === "custom-agent" ? [{
				id: "delete",
				label: i18n.baseText("chatHub.agent.card.menu.delete")
			}] : []];
		});
		function handleSelectMenu(action) {
			switch (action) {
				case "delete":
					emit("delete");
					return;
				case "edit": emit("edit");
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RouterLink), {
				to: unref(getAgentRoute)(_ctx.agent.model),
				class: normalizeClass(_ctx.$style.card)
			}, {
				default: withCtx(() => [
					createVNode(ChatAgentAvatar_default, {
						agent: _ctx.agent,
						size: "lg"
					}, null, 8, ["agent"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
						tag: "h3",
						size: "medium",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.name), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.description || unref(i18n).baseText("chatHub.agent.card.noDescription")), 1)]),
						_: 1
					}, 8, ["class"])], 2),
					createVNode(unref(N8nBadge_default), {
						theme: "tertiary",
						"show-border": "",
						class: normalizeClass(_ctx.$style.badge)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.model.provider === "n8n" ? unref(i18n).baseText("chatHub.agent.card.badge.n8nWorkflow") : unref(i18n).baseText("chatHub.agent.card.badge.customAgent")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nIconButton_default), {
						icon: "pen",
						type: "tertiary",
						size: "medium",
						title: unref(i18n).baseText("chatHub.agent.card.button.edit"),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("edit"), ["prevent"]))
					}, null, 8, ["title"]), createVNode(unref(N8nActionDropdown_default), {
						items: menuItems.value,
						placement: "bottom-end",
						onSelect: handleSelectMenu,
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop", "prevent"]))
					}, {
						activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "ellipsis-vertical",
							type: "tertiary",
							size: "medium",
							title: unref(i18n).baseText("chatHub.agent.card.button.moreOptions"),
							text: "",
							class: normalizeClass(_ctx.$style.actionDropdownTrigger)
						}, null, 8, ["title", "class"])]),
						_: 1
					}, 8, ["items"])], 2)
				]),
				_: 1
			}, 8, ["to", "class"]);
		};
	}
});
var ChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1v5ca_123",
	avatar: "_avatar_1v5ca_139",
	content: "_content_1v5ca_143",
	badge: "_badge_1v5ca_151",
	title: "_title_1v5ca_155",
	description: "_description_1v5ca_161",
	actions: "_actions_1v5ca_167",
	actionDropdownTrigger: "_actionDropdownTrigger_1v5ca_173"
};
var ChatAgentCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentsView",
	setup(__props) {
		const chatStore = useChatStore();
		const uiStore = useUIStore();
		const toast = useToast();
		const message = useMessage();
		const usersStore = useUsersStore();
		const router = useRouter();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const i18n = useI18n();
		const agentFilter = ref({
			search: "",
			provider: "",
			sortBy: "updatedAt"
		});
		const { credentialsByProvider } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const readyToShowList = computed(() => chatStore.agentsReady);
		const allModels = computed(() => chatStore.agents.n8n.models.concat(chatStore.agents["custom-agent"].models));
		const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
		const providerOptions = computed(() => [
			{
				label: i18n.baseText("chatHub.agents.filter.all"),
				value: ""
			},
			{
				label: i18n.baseText("chatHub.agents.filter.customAgents"),
				value: "custom-agent"
			},
			{
				label: i18n.baseText("chatHub.agents.filter.n8nWorkflows"),
				value: "n8n"
			}
		]);
		const sortOptions = computed(() => [{
			label: i18n.baseText("chatHub.agents.sort.updatedAt"),
			value: "updatedAt"
		}, {
			label: i18n.baseText("chatHub.agents.sort.createdAt"),
			value: "createdAt"
		}]);
		function handleCreateAgent() {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: { credentials: credentialsByProvider }
			});
		}
		async function handleEditAgent(model) {
			if (model.provider === "n8n") {
				const routeData = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { name: model.workflowId }
				});
				window.open(routeData.href, "_blank");
				return;
			}
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
			if (credentials) chatStore.fetchAgents(credentials);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatLayout_default, null, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1) }]) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [createVNode(unref(N8nText_default), {
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agents.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agents.description")), 1)]),
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
					readyToShowList.value && allModels.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.controls)
					}, [
						createVNode(unref(N8nInput_default), {
							modelValue: agentFilter.value.search,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => agentFilter.value.search = $event),
							class: normalizeClass(_ctx.$style.search),
							placeholder: unref(i18n).baseText("chatHub.agents.search.placeholder"),
							clearable: ""
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"modelValue",
							"class",
							"placeholder"
						]),
						createVNode(unref(N8nSelect_default), {
							modelValue: agentFilter.value.provider,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => agentFilter.value.provider = $event),
							class: normalizeClass(_ctx.$style.filter)
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(providerOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: String(option.value),
									label: option.label,
									value: option.value
								}, null, 8, ["label", "value"]);
							}), 128))]),
							_: 1
						}, 8, ["modelValue", "class"]),
						createVNode(unref(N8nSelect_default), {
							modelValue: agentFilter.value.sortBy,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => agentFilter.value.sortBy = $event),
							class: normalizeClass(_ctx.$style.sort)
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.value,
									label: option.label,
									value: option.value
								}, null, 8, ["label", "value"]);
							}), 128))]),
							_: 1
						}, 8, ["modelValue", "class"])
					], 2)) : createCommentVNode("", true),
					!readyToShowList.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)) : allModels.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.empty)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agents.empty.noAgents")), 1)]),
						_: 1
					})], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.empty)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agents.empty.noMatch")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(agents.value, (agent) => {
						return openBlock(), createBlock(ChatAgentCard_default, {
							key: unref(stringifyModel)(agent.model),
							agent,
							onEdit: ($event) => handleEditAgent(agent.model),
							onDelete: ($event) => agent.model.provider === "custom-agent" ? handleDeleteAgent(agent.model.agentId) : void 0
						}, null, 8, [
							"agent",
							"onEdit",
							"onDelete"
						]);
					}), 128))], 2))
				], 2), createVNode(ChatSidebarOpener_default, { class: normalizeClass(_ctx.$style.menuButton) }, null, 8, ["class"])]),
				_: 1
			});
		};
	}
});
var ChatAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_18hjw_123",
	menuButton: "_menuButton_18hjw_136",
	isMobileDevice: "_isMobileDevice_18hjw_142",
	header: "_header_18hjw_146",
	headerContent: "_headerContent_18hjw_154",
	controls: "_controls_18hjw_160",
	search: "_search_18hjw_166",
	filter: "_filter_18hjw_171",
	sort: "_sort_18hjw_175",
	empty: "_empty_18hjw_179",
	agentsGrid: "_agentsGrid_18hjw_188"
};
var ChatAgentsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentsView_default as default };
