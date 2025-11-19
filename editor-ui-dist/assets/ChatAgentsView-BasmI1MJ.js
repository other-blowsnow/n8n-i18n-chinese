import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, G as N8nOption_default, In as N8nText_default, Ln as N8nButton_default, Tt as N8nIconButton_default, W as N8nSelect_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, p as RouterLink } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import "./dialog-CzxM5dHR.js";
import { Ni as useUIStore, er as useUsersStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { No as MODAL_CONFIRM, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./retry-sDkwzrPY.js";
import "./Modal-BLXzXACj.js";
import "./CredentialIcon-BTWsGB9X.js";
import { t as TimeAgo_default } from "./TimeAgo-DCz5bgJ1.js";
import { a as MOBILE_MEDIA_QUERY } from "./constants-9ReQTHaF.js";
import { c as getAgentRoute, d as stringifyModel, i as filterAndSortAgents, n as ChatAgentAvatar_default, r as useChatStore, t as useChatHubSidebarState } from "./useChatHubSidebarState-CIMmDtyQ.js";
import { n as AgentEditorModal_default, t as useChatCredentials } from "./useChatCredentials-C3vZOhu8.js";
var ChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentCard",
	props: { agent: {} },
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
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
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
						createVNode(unref(N8nText_default), {
							tag: "h3",
							size: "medium",
							bold: "",
							class: normalizeClass(_ctx.$style.title)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.name), 1)]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.description)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.description || "No description"), 1)]),
							_: 1
						}, 8, ["class"]),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.metadata) }, [
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.model.provider === "n8n" ? "n8n workflow" : "Custom agent"), 1)]),
								_: 1
							}),
							_ctx.agent.updatedAt ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [_cache[2] || (_cache[2] = createTextVNode(" Last updated ")), createVNode(TimeAgo_default, { date: _ctx.agent.updatedAt }, null, 8, ["date"])]),
								_: 1
							})) : createCommentVNode("", true),
							_ctx.agent.createdAt ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [_cache[3] || (_cache[3] = createTextVNode(" Created ")), createVNode(TimeAgo_default, { date: _ctx.agent.createdAt }, null, 8, ["date"])]),
								_: 1
							})) : createCommentVNode("", true)
						], 2)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nIconButton_default), {
						icon: "pen",
						type: "tertiary",
						size: "medium",
						title: "Edit",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("edit"), ["prevent"]))
					}), _ctx.agent.model.provider === "custom-agent" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						icon: "trash-2",
						type: "tertiary",
						size: "medium",
						title: "More options",
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("delete"), ["prevent"]))
					})) : createCommentVNode("", true)], 2)
				]),
				_: 1
			}, 8, ["to", "class"]);
		};
	}
});
var ChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1q9hn_123",
	avatar: "_avatar_1q9hn_139",
	content: "_content_1q9hn_143",
	title: "_title_1q9hn_151",
	description: "_description_1q9hn_157",
	metadata: "_metadata_1q9hn_163",
	actions: "_actions_1q9hn_180"
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
		const sidebar = useChatHubSidebarState();
		const router = useRouter();
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const editingAgentId = ref(void 0);
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
			editingAgentId.value = void 0;
			uiStore.openModal("agentEditor");
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
				editingAgentId.value = model.agentId;
				uiStore.openModal("agentEditor");
			} catch (error) {
				toast.showError(error, "Failed to load agent");
			}
		}
		function handleCloseAgentEditor() {
			editingAgentId.value = void 0;
		}
		async function handleAgentCreatedOrUpdated() {
			editingAgentId.value = void 0;
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
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1) }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [createVNode(unref(N8nText_default), {
					tag: "h1",
					size: "xlarge",
					bold: ""
				}, {
					default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("Custom Agents")])),
					_: 1
				}), createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode(" Use n8n workflow agents or create custom AI agents with specific instructions and behaviors ")])),
					_: 1
				})], 2), createVNode(unref(N8nButton_default), {
					icon: "plus",
					type: "primary",
					size: "large",
					onClick: handleCreateAgent
				}, {
					default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode(" New Agent ")])),
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
					default: withCtx(() => _cache[7] || (_cache[7] = [createTextVNode(" No agents available. Create your first custom agent to get started. ")])),
					_: 1
				})], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "medium"
				}, {
					default: withCtx(() => _cache[8] || (_cache[8] = [createTextVNode(" No agents match your search criteria. ")])),
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
				}), 128))], 2)),
				unref(credentialsByProvider) ? (openBlock(), createBlock(AgentEditorModal_default, {
					key: 5,
					"agent-id": editingAgentId.value,
					credentials: unref(credentialsByProvider),
					onCreateCustomAgent: handleAgentCreatedOrUpdated,
					onClose: handleCloseAgentEditor
				}, null, 8, ["agent-id", "credentials"])) : createCommentVNode("", true),
				!unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 6,
					class: normalizeClass(_ctx.$style.menuButton),
					type: "secondary",
					icon: "panel-left",
					text: "",
					"icon-size": "large",
					onClick: _cache[3] || (_cache[3] = ($event) => unref(sidebar).toggleOpen(true))
				}, null, 8, ["class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_15w0c_123",
	menuButton: "_menuButton_15w0c_135",
	isMobileDevice: "_isMobileDevice_15w0c_141",
	header: "_header_15w0c_145",
	headerContent: "_headerContent_15w0c_153",
	controls: "_controls_15w0c_159",
	search: "_search_15w0c_165",
	filter: "_filter_15w0c_170",
	sort: "_sort_15w0c_174",
	empty: "_empty_15w0c_178",
	agentsGrid: "_agentsGrid_15w0c_187"
};
var ChatAgentsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentsView_default as default };
