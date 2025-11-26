import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery } from "./_MapCache-DxwXn8uM.js";
import { Bn as N8nIcon_default, Et as N8nIconButton_default, G as N8nSelect_default, K as N8nOption_default, Ln as N8nText_default, Rn as N8nButton_default, at as N8nBadge_default, nt as N8nActionDropdown_default, wt as N8nInput_default } from "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, p as RouterLink } from "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./overlay-DUEudB48.js";
import "./empty-BuGRxzl4.js";
import { t as useMessage } from "./useMessage-CcUQxayn.js";
import { Ni as useUIStore, er as useUsersStore } from "./useTelemetry-Ct6_U3iA.js";
import { t as useToast } from "./useToast-Da575Qgf.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Oo as VIEWS, qo as MODAL_CONFIRM } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import "./useRootStore-B7yZgeot.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-B-oRGfxZ.js";
import "./useExternalHooks-B9_prI2u.js";
import "./useStyles-CBQs-v7u.js";
import "./retry-BJSZoz93.js";
import "./CredentialIcon-Dcqn4FLw.js";
import { o as MOBILE_MEDIA_QUERY, t as AGENT_EDITOR_MODAL_KEY } from "./constants-yvMG61zm.js";
import { n as useChatStore, r as filterAndSortAgents, s as getAgentRoute, t as ChatAgentAvatar_default, u as stringifyModel } from "./ChatAgentAvatar-CO02V0mM.js";
import { n as ChatLayout_default, r as useChatCredentials, t as ChatSidebarOpener_default } from "./ChatSidebarOpener-BJ7W0Y10.js";
import "./useChatHubSidebarState-C_zx3q36.js";
var ChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentCard",
	props: { agent: {} },
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const menuItems = computed(() => {
			return [{
				id: "edit",
				label: "Edit"
			}, ...__props.agent.model.provider === "custom-agent" ? [{
				id: "delete",
				label: "Delete"
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
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.description || "No description"), 1)]),
						_: 1
					}, 8, ["class"])], 2),
					createVNode(unref(N8nBadge_default), {
						theme: "tertiary",
						"show-border": "",
						class: normalizeClass(_ctx.$style.badge)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.model.provider === "n8n" ? "n8n workflow" : "Custom agent"), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nIconButton_default), {
						icon: "pen",
						type: "tertiary",
						size: "medium",
						title: "Edit",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("edit"), ["prevent"]))
					}), createVNode(unref(N8nActionDropdown_default), {
						items: menuItems.value,
						placement: "bottom-end",
						onSelect: handleSelectMenu,
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop", "prevent"]))
					}, {
						activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "ellipsis-vertical",
							type: "tertiary",
							size: "medium",
							title: "More options",
							text: "",
							class: normalizeClass(_ctx.$style.actionDropdownTrigger)
						}, null, 8, ["class"])]),
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
		const agentFilter = ref({
			search: "",
			provider: "",
			sortBy: "updatedAt"
		});
		const { credentialsByProvider } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const readyToShowList = computed(() => chatStore.agentsReady);
		const allModels = computed(() => chatStore.agents.n8n.models.concat(chatStore.agents["custom-agent"].models));
		const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
		const providerOptions = [
			{
				label: "All",
				value: ""
			},
			{
				label: "Custom agents",
				value: "custom-agent"
			},
			{
				label: "n8n workflows",
				value: "n8n"
			}
		];
		const sortOptions = [{
			label: "Sort by last updated",
			value: "updatedAt"
		}, {
			label: "Sort by created",
			value: "createdAt"
		}];
		function handleCreateAgent() {
			chatStore.currentEditingAgent = null;
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
			if (model.provider === "custom-agent") try {
				await chatStore.fetchCustomAgent(model.agentId);
				uiStore.openModalWithData({
					name: AGENT_EDITOR_MODAL_KEY,
					data: {
						agentId: model.agentId,
						credentials: credentialsByProvider
					}
				});
			} catch (error) {
				toast.showError(error, "Failed to load agent");
			}
		}
		async function handleDeleteAgent(agentId) {
			if (await message.confirm("Are you sure you want to delete this agent?", "Delete agent", {
				confirmButtonText: "Delete",
				cancelButtonText: "Cancel"
			}) !== "confirm" || !credentialsByProvider.value) return;
			try {
				await chatStore.deleteCustomAgent(agentId, credentialsByProvider.value);
				toast.showMessage({
					type: "success",
					title: "Agent deleted successfully"
				});
			} catch (error) {
				toast.showError(error, "Could not delete the agent");
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
						default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("Custom Agents")])),
						_: 1
					}), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode(" Use n8n workflow agents or create custom AI agents with specific instructions and behaviors ")])),
						_: 1
					})], 2), createVNode(unref(N8nButton_default), {
						icon: "plus",
						type: "primary",
						size: "large",
						onClick: handleCreateAgent
					}, {
						default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode(" New Agent ")])),
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
							placeholder: "Search",
							clearable: ""
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, ["modelValue", "class"]),
						createVNode(unref(N8nSelect_default), {
							modelValue: agentFilter.value.provider,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => agentFilter.value.provider = $event),
							class: normalizeClass(_ctx.$style.filter)
						}, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(providerOptions, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: String(option.value),
									label: option.label,
									value: option.value
								}, null, 8, ["label", "value"]);
							}), 64))]),
							_: 1
						}, 8, ["modelValue", "class"]),
						createVNode(unref(N8nSelect_default), {
							modelValue: agentFilter.value.sortBy,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => agentFilter.value.sortBy = $event),
							class: normalizeClass(_ctx.$style.sort),
							placeholder: "Sort by"
						}, {
							default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(sortOptions, (option) => {
								return createVNode(unref(N8nOption_default), {
									key: option.value,
									label: option.label,
									value: option.value
								}, null, 8, ["label", "value"]);
							}), 64))]),
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
						default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode(" No agents available. Create your first custom agent to get started. ")])),
						_: 1
					})], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.empty)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode(" No agents match your search criteria. ")])),
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
