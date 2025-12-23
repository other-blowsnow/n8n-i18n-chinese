import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Bn as N8nHeading_default, Et as ElSwitch, Gn as N8nIcon_default, Hn as N8nText_default, J as N8nSelect_default, Un as N8nButton_default, Y as N8nOption_default, ht as N8nTooltip_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { T as createEventBus } from "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import "./dialog-B6i5gbQO.js";
import { Pn as useProjectsStore, Wi as useUIStore, Yo as v4_default, _t as useNodeTypesStore, en as useCredentialsStore, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Da as deepCopy, jo as getResourcePermissions, lo as JINA_AI_TOOL_NODE_TYPE, mo as SERP_API_TOOL_NODE_TYPE } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./nodeIcon-7dyMxFgB.js";
import { t as NodeIcon_default } from "./NodeIcon-BDiqVc0r.js";
import { t as Modal_default } from "./Modal-CaiTJoBk.js";
const AVAILABLE_TOOLS = {
	[SERP_API_TOOL_NODE_TYPE]: {
		name: "SerpApi",
		description: "Use SerpApi to search the web for relevant information.",
		credentialType: "serpApi",
		tools: [{
			title: "Google Search",
			node: {
				parameters: { options: {} },
				type: SERP_API_TOOL_NODE_TYPE,
				typeVersion: 1,
				position: [0, 0],
				id: v4_default(),
				name: "SerpApi Google Search"
			}
		}]
	},
	[JINA_AI_TOOL_NODE_TYPE]: {
		name: "Jina AI",
		description: "Use Jina AI to search the web for relevant information.",
		credentialType: "jinaAiApi",
		tools: [{
			title: "Access Web",
			node: {
				parameters: {
					resource: "reader",
					operation: "read",
					url: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', ``, 'string') }}",
					options: {},
					requestOptions: {}
				},
				type: JINA_AI_TOOL_NODE_TYPE,
				typeVersion: 1,
				position: [0, 0],
				id: v4_default(),
				name: "Read URL content in Jina AI"
			}
		}, {
			title: "Web Search",
			node: {
				parameters: {
					resource: "reader",
					operation: "search",
					searchQuery: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Search_Query', ``, 'string') }}",
					simplify: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Simplify', ``, 'boolean') }}",
					options: {},
					requestOptions: {}
				},
				type: JINA_AI_TOOL_NODE_TYPE,
				typeVersion: 1,
				position: [0, 0],
				id: v4_default(),
				name: "Search web in Jina AI"
			}
		}]
	}
};
var ToolsSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const modalBus = ref(createEventBus());
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const projectStore = useProjectsStore();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const canCreateCredentials = computed(() => {
			return getResourcePermissions(projectStore.personalProject?.scopes).credential.create;
		});
		const selectedByProvider = ref({
			[SERP_API_TOOL_NODE_TYPE]: /* @__PURE__ */ new Set(),
			[JINA_AI_TOOL_NODE_TYPE]: /* @__PURE__ */ new Set()
		});
		const credentialIdByProvider = ref({
			[SERP_API_TOOL_NODE_TYPE]: null,
			[JINA_AI_TOOL_NODE_TYPE]: null
		});
		function resetSelections() {
			selectedByProvider.value = {
				[SERP_API_TOOL_NODE_TYPE]: /* @__PURE__ */ new Set(),
				[JINA_AI_TOOL_NODE_TYPE]: /* @__PURE__ */ new Set()
			};
			credentialIdByProvider.value = {
				[SERP_API_TOOL_NODE_TYPE]: null,
				[JINA_AI_TOOL_NODE_TYPE]: null
			};
		}
		function restoreFromInitial(nodes) {
			resetSelections();
			const toolsByProvider = /* @__PURE__ */ new Map();
			Object.entries(AVAILABLE_TOOLS).forEach(([key, p]) => {
				toolsByProvider.set(key, new Set(p.tools.map((t) => t.node.name)));
			});
			for (const node of nodes) {
				const providerKey = node.type;
				const provider$1 = AVAILABLE_TOOLS[providerKey];
				if (!provider$1) continue;
				if (!toolsByProvider.get(providerKey)?.has(node.name)) continue;
				selectedByProvider.value[providerKey].add(node.name);
				if (provider$1.credentialType) {
					const credentialId = node.credentials?.[provider$1.credentialType].id;
					if (credentialId && typeof credentialId === "string" && !credentialIdByProvider.value[providerKey]) credentialIdByProvider.value[providerKey] = credentialId;
				}
			}
			selectedByProvider.value = { ...selectedByProvider.value };
			credentialIdByProvider.value = { ...credentialIdByProvider.value };
		}
		function getAvailableCredentials(toolNodeType) {
			const provider$1 = AVAILABLE_TOOLS[toolNodeType];
			if (!provider$1.credentialType) return [];
			return credentialsStore.getCredentialsByType(provider$1.credentialType);
		}
		const providers = computed(() => {
			return Object.entries(AVAILABLE_TOOLS);
		});
		const selectedCount = computed(() => {
			return providers.value.reduce((acc, [key]) => acc + (selectedByProvider.value[key]?.size ?? 0), 0);
		});
		const getNodeIcon = (nodeType) => {
			return nodeTypesStore.getNodeType(nodeType);
		};
		function toggleTool(providerKey, toolId, value) {
			const enabled = typeof value === "boolean" ? value : Boolean(value);
			if (!selectedByProvider.value[providerKey]) selectedByProvider.value[providerKey] = /* @__PURE__ */ new Set();
			const set = selectedByProvider.value[providerKey];
			if (enabled) set.add(toolId);
			else set.delete(toolId);
			selectedByProvider.value = { ...selectedByProvider.value };
		}
		function onCredentialSelect(providerKey, id) {
			credentialIdByProvider.value[providerKey] = id;
		}
		function onCreateNewCredential(providerKey) {
			const provider$1 = AVAILABLE_TOOLS[providerKey];
			if (!provider$1.credentialType) return;
			telemetry.track("User opened Credential modal", {
				credential_type: provider$1.credentialType,
				source: "chat",
				new_credential: true,
				workflow_id: null
			});
			uiStore.openNewCredential(provider$1.credentialType);
		}
		const isMissingCredentials = computed(() => {
			for (const [providerKey, provider$1] of providers.value) {
				const selectedIds = selectedByProvider.value[providerKey];
				if (!selectedIds || selectedIds.size === 0) continue;
				if (provider$1.credentialType) {
					if (!credentialIdByProvider.value[providerKey]) return true;
				}
			}
			return false;
		});
		function handleConfirm() {
			const tools = [];
			for (const [providerKey, provider$1] of providers.value) {
				const selected = selectedByProvider.value[providerKey];
				if (!selected || selected.size === 0) continue;
				const pickedId = credentialIdByProvider.value[providerKey] ?? null;
				let credential;
				if (provider$1.credentialType && pickedId) credential = getAvailableCredentials(providerKey).find((c) => c.id === pickedId);
				for (const toolName of selected) {
					const tool = provider$1.tools.find((t) => t.node.name === toolName);
					if (!tool) continue;
					const node = deepCopy(tool.node);
					if (provider$1.credentialType && credential) {
						node.credentials = node.credentials ?? {};
						node.credentials[provider$1.credentialType] = {
							id: credential.id,
							name: credential.name
						};
					}
					tools.push(node);
				}
			}
			props.data.onConfirm(tools);
			modalBus.value.emit("close");
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		watch(() => props.data.selected, (toolNodes) => {
			if (toolNodes?.length > 0) restoreFromInitial(toolNodes);
			else resetSelections();
		}, { immediate: true });
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: _ctx.modalName,
				"event-bus": modalBus.value,
				width: "50%",
				"max-width": "720px",
				"min-height": "340px",
				center: true
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					icon: "settings2",
					size: 24
				}), createVNode(unref(N8nHeading_default), {
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.title")), 1)]),
					_: 1
				})], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(providers.value, ([key, provider$1]) => {
					return openBlock(), createElementBlock("div", {
						key,
						class: normalizeClass(_ctx.$style.provider)
					}, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.providerHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.providerTitle) }, [createVNode(NodeIcon_default, {
							"node-type": getNodeIcon(key),
							size: 18
						}, null, 8, ["node-type"]), createVNode(unref(N8nHeading_default), {
							color: "text-dark",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(provider$1.name), 1)]),
							_: 2
						}, 1024)], 2), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(provider$1.description), 1)]),
							_: 2
						}, 1024)], 2),
						provider$1.credentialType ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.row)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.credential")), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentials) }, [createVNode(unref(N8nSelect_default), {
							"model-value": credentialIdByProvider.value[key] ?? null,
							size: "large",
							placeholder: unref(i18n).baseText("chatHub.tools.editor.credential.placeholder"),
							"onUpdate:modelValue": ($event) => onCredentialSelect(key, $event)
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(getAvailableCredentials(key), (c) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: c.id,
									value: c.id,
									label: c.name
								}, null, 8, ["value", "label"]);
							}), 128))]),
							_: 2
						}, 1032, [
							"model-value",
							"placeholder",
							"onUpdate:modelValue"
						]), createVNode(unref(N8nTooltip_default), {
							placement: "left",
							disabled: canCreateCredentials.value,
							content: unref(i18n).baseText("chatHub.tools.editor.credential.createNew.permissionDenied")
						}, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								size: "medium",
								type: "secondary",
								disabled: !canCreateCredentials.value,
								onClick: ($event) => onCreateNewCredential(key)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.credential.createNew")), 1)]),
								_: 2
							}, 1032, ["disabled", "onClick"])]),
							_: 2
						}, 1032, ["disabled", "content"])], 2)], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(provider$1.tools, (tool) => {
							return openBlock(), createElementBlock("div", {
								key: tool.node.id,
								class: normalizeClass(_ctx.$style.toolRow)
							}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolInfo) }, [createVNode(unref(N8nText_default), {
								size: "medium",
								bold: "",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(tool.title || tool.node.name), 1)]),
								_: 2
							}, 1024), createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(tool.node.name), 1)]),
								_: 2
							}, 1024)], 2), createVNode(unref(ElSwitch), {
								size: "large",
								"aria-label": `Toggle ${tool.title || tool.node.name}`,
								"model-value": !!selectedByProvider.value[key]?.has(tool.node.name),
								"onUpdate:modelValue": (val) => toggleTool(key, tool.node.name, val)
							}, null, 8, [
								"aria-label",
								"model-value",
								"onUpdate:modelValue"
							])], 2);
						}), 128))], 2)
					], 2);
				}), 128))], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.selectedCount", { interpolate: { count: selectedCount.value } })), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerRight) }, [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					disabled: isMissingCredentials.value,
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
var ToolsSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1rpov_123",
	content: "_content_1rpov_129",
	provider: "_provider_1rpov_136",
	providerHeader: "_providerHeader_1rpov_143",
	providerTitle: "_providerTitle_1rpov_148",
	row: "_row_1rpov_154",
	credentials: "_credentials_1rpov_159",
	toolsList: "_toolsList_1rpov_165",
	toolRow: "_toolRow_1rpov_170",
	toolInfo: "_toolInfo_1rpov_177",
	footer: "_footer_1rpov_182",
	footerRight: "_footerRight_1rpov_189"
};
var ToolsSelectorModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolsSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolsSelectorModal_default as default };
