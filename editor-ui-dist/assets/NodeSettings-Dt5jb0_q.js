import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, Ut as toValue, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, ft as useSlots, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { F as isObject, H as toRef, I as noop, K as tryOnScopeDispose, M as directiveHooks, N as isClient, P as isIOS, W as toValue$1, b as useResizeObserver$1, n as onClickOutside$1, ot as useI18n, p as useElementSize$1, st as I18nT, t as computedAsync } from "./core-CPznNyVT.js";
import { $i as N8nIconButton_default, Ct as useRoute, Ji as N8nTooltip_default, K as N8nRadioButtons_default, L as N8nTabs_default, Qt as N8nLoading_default, Vt as N8nBlockUi_default, X as SectionHeader_default, Z as N8nNotice_default, eo as N8nCallout_default, gt as N8nLink_default, ln as ElCollapseTransition, no as N8nButton_default, ro as N8nIcon_default, to as N8nText_default, wt as useRouter, x as N8nInlineTextEdit_default } from "./src-bSQwfFcX.js";
import { t as require_get } from "./get-BXEQ0kDX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import "./_MapCache-BeWUUn5x.js";
import { _ as getNodeSettingsInitialValues, b as nameIsParameter, h as createCommonNodeSettings, l as useAgentScopeProjectId, m as collectSettings, p as collectParametersByTab, s as useNodeSettingsParameters, t as ParameterInputList_default } from "./ParameterInputList-BOI793xs.js";
import { n as ElRow, t as ElCol } from "./col-BYimX0vr.js";
import { t as useToast } from "./useToast-B3_HjF9W.js";
import { Dl as deepCopy, Dn as MCP_TRIGGER_NODE_TYPE, Gr as AGENT_BUILDER_VIEW, Kn as PRODUCTION_ONLY_TRIGGER_NODE_TYPES, L as CUSTOM_API_CALL_KEY, Ol as isCommunityPackageName, Rt as CHAT_TRIGGER_NODE_TYPE, S as NPM_PACKAGE_DOCS_BASE_URL, Uc as getNodeParameters, Un as OPEN_URL_PANEL_TRIGGER_NODE_TYPES, Vc as getNodeInputs, a as BASE_NODE_SURVEY_URL, ai as AGENT_VIEW, bl as NodeConnectionTypes, hi as VIEWS, ln as FORM_TRIGGER_NODE_TYPE, qt as DATA_TABLE_NODES, s as BUILTIN_NODES_DOCS_URL, u as CUSTOM_NODES_DOCS_URL } from "./constants-CSBjw1Ht.js";
import { En as ProjectTypes, It as useWorkflowId, Pt as useWorkflowHelpers, Wt as injectNDVStore, _ as useNodeTypesStore, a as injectWorkflowDocumentStore, dn as useWorkflowsStore, st as useCredentialsStore, y as useActionsGenerator, z as removePreviewToken } from "./workflowDocument.store-DWj92T8C.js";
import { t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { t as useSettingsStore } from "./settings.store-C5bX9q6f.js";
import { D as COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, f as useUIStore, p as useTelemetry, t as useUsersStore, w as COMMUNITY_NODES_INSTALLATION_DOCS_URL } from "./users.store-CsyV7tYv.js";
import { t as useDebounce } from "./useDebounce-DTqDXiDI.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-BBdSrTS3.js";
import { t as useExternalHooks } from "./useExternalHooks-CC7glPJO.js";
import { n as ndvEventBus } from "./useCodeDiff-D2Myd_CE.js";
import { r as useWorkflowSaving } from "./builder.store-B8MoplEq.js";
import { n as useHistoryStore, p as RenameNodeCommand, t as useNodeHelpers } from "./useNodeHelpers-Cu8j3KZn.js";
import { n as importCurlEventBus } from "./event-bus-CM181u5Z.js";
import { t as useDataTableStore } from "./dataTable.store-DxCIDo16.js";
import { t as useClipboard } from "./useClipboard-Dpff4lY7.js";
import { n as useNodeCreatorStore } from "./canvas.eventBus-BNCSLVY8.js";
import { n as useInstallNode, t as ContactAdministratorToInstall_default } from "./ContactAdministratorToInstall-BIWvRVhs.js";
import { t as useQuickConnect } from "./useQuickConnect-B9f4SXzG.js";
import { t as useEditorContext } from "./useEditorContext-DJSa5S_g.js";
import { a as TitledList_default, n as useNodeCredentialOptions, t as NodeCredentials_default } from "./NodeCredentials-q6rH0SuG.js";
import { n as useNodeIconSource, t as NodeIcon_default } from "./NodeIcon-BOn7tBoL.js";
import { n as NodeExecuteButton_default } from "./VirtualSchema-C-BwsXRi.js";
import { I as updateAgentSkill, f as getAgent, i as createAgent } from "./useAgentApi-D0z-Ls4h.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-BqmfwwcL.js";
import { i as QuickConnectBanner_default, n as CommunityNodeFooter_default, r as useInstalledCommunityPackage, t as CommunityNodeUpdateInfo_default } from "./CommunityNodeUpdateInfo-CMptbcTX.js";
import { a as AgentCapabilitiesSection_default, i as agentsEventBus, m as AgentInfoPanel_default, n as useAgentConfigAutosave, r as useAgentConfig, t as useAgentCapabilitiesActions } from "./useAgentCapabilitiesActions-CN0QcHVm.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-9BniTeQt.js";
import { t as useAgentReturnContextStore } from "./agentReturnContext.store-DYumNDTP.js";
import { t as useAgentPermissions } from "./useAgentPermissions-CYCR8do5.js";
import { t as useActions } from "./useActions-DDbmI8Y4.js";
//#region src/app/components/FreeAiCreditsCallout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = { key: 2 };
var LANGCHAIN_NODES_PREFIX = "@n8n/n8n-nodes-langchain.";
var N8N_NODES_PREFIX = "@n8n/n8n-nodes.";
//#endregion
//#region src/app/components/FreeAiCreditsCallout.vue
var FreeAiCreditsCallout_default = /* @__PURE__ */ defineComponent({
	__name: "FreeAiCreditsCallout",
	props: {
		credentialTypeName: {},
		telemetrySource: { default: "freeAiCreditsCallout" }
	},
	emits: ["claimed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const NODES_WITH_OPEN_AI_API_CREDENTIAL = [
			`${LANGCHAIN_NODES_PREFIX}openAi`,
			`${LANGCHAIN_NODES_PREFIX}embeddingsOpenAi`,
			`${LANGCHAIN_NODES_PREFIX}lmChatOpenAi`,
			`${N8N_NODES_PREFIX}openAi`
		];
		const ndvStore = injectNDVStore();
		const i18n = useI18n();
		const { aiCreditsQuota, userCanClaimOpenAiCredits, claimingCredits, showSuccessCallout, claimCredits } = useFreeAiCredits();
		const isEditingOpenAiCredential = computed(() => props.credentialTypeName && props.credentialTypeName === "openAiApi");
		const activeNodeHasOpenAiApiCredential = computed(() => ndvStore.value.activeNode?.type && NODES_WITH_OPEN_AI_API_CREDENTIAL.includes(ndvStore.value.activeNode.type));
		const isRelevantContext = computed(() => activeNodeHasOpenAiApiCredential.value || isEditingOpenAiCredential.value);
		const showCallout = computed(() => userCanClaimOpenAiCredits.value && isRelevantContext.value);
		const showSuccess = computed(() => showSuccessCallout.value && isRelevantContext.value);
		const onClaimCreditsClicked = async () => {
			if (await claimCredits(props.telemetrySource)) emit("claimed");
		};
		return (_ctx, _cache) => {
			return showCallout.value && !showSuccess.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				icon: "circle-alert",
				class: "mt-xs"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					label: unref(i18n).baseText("freeAi.credits.callout.claim.button.label"),
					loading: unref(claimingCredits),
					onClick: onClaimCreditsClicked
				}, null, 8, ["label", "loading"])]),
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.claim.title", { interpolate: { credits: unref(aiCreditsQuota) } })) + " ", 1)]),
				_: 1
			})) : showSuccess.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "success",
				icon: "circle-check",
				class: "mt-xs"
			}, {
				default: withCtx(() => [
					createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part1", { interpolate: { credits: unref(aiCreditsQuota) } })), 1)]),
						_: 1
					}),
					_cache[0] || (_cache[0] = createTextVNode(" \xA0 ", -1)),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part2")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : (openBlock(), createElementBlock("div", _hoisted_1$7));
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/@vueuse+components@10.11.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/components/index.mjs
var OnClickOutside = /* @__PURE__ */ defineComponent({
	name: "OnClickOutside",
	props: ["as", "options"],
	emits: ["trigger"],
	setup(props, { slots, emit }) {
		const target = ref();
		onClickOutside$1(target, (e) => {
			emit("trigger", e);
		}, props.options);
		return () => {
			if (slots.default) return h(props.as || "div", { ref: target }, slots.default());
		};
	}
});
function unrefElement(elRef) {
	var _a;
	const plain = toValue$1(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
var defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
	let target;
	let events;
	let listeners;
	let options;
	if (typeof args[0] === "string" || Array.isArray(args[0])) {
		[events, listeners, options] = args;
		target = defaultWindow;
	} else [target, events, listeners, options] = args;
	if (!target) return noop;
	if (!Array.isArray(events)) events = [events];
	if (!Array.isArray(listeners)) listeners = [listeners];
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options2) => {
		el.addEventListener(event, listener, options2);
		return () => el.removeEventListener(event, listener, options2);
	};
	const stopWatch = watch(() => [unrefElement(target), toValue$1(options)], ([el, options2]) => {
		cleanup();
		if (!el) return;
		const optionsClone = isObject(options2) ? { ...options2 } : options2;
		cleanups.push(...events.flatMap((event) => {
			return listeners.map((listener) => register(el, event, listener, optionsClone));
		}));
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return stop;
}
directiveHooks.mounted, directiveHooks.unmounted;
directiveHooks.mounted;
directiveHooks.mounted;
directiveHooks.mounted;
directiveHooks.mounted;
directiveHooks.mounted;
function resolveElement(el) {
	if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
	if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
	return el;
}
directiveHooks.mounted;
directiveHooks.mounted;
directiveHooks.mounted;
function checkOverflowScroll(ele) {
	const style = window.getComputedStyle(ele);
	if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
	else {
		const parent = ele.parentNode;
		if (!parent || parent.tagName === "BODY") return false;
		return checkOverflowScroll(parent);
	}
}
function preventDefault(rawEvent) {
	const e = rawEvent || window.event;
	const _target = e.target;
	if (checkOverflowScroll(_target)) return false;
	if (e.touches.length > 1) return true;
	if (e.preventDefault) e.preventDefault();
	return false;
}
var elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
	const isLocked = ref(initialState);
	let stopTouchMoveListener = null;
	let initialOverflow = "";
	watch(toRef(element), (el) => {
		const target = resolveElement(toValue$1(el));
		if (target) {
			const ele = target;
			if (!elInitialOverflow.get(ele)) elInitialOverflow.set(ele, ele.style.overflow);
			if (ele.style.overflow !== "hidden") initialOverflow = ele.style.overflow;
			if (ele.style.overflow === "hidden") return isLocked.value = true;
			if (isLocked.value) return ele.style.overflow = "hidden";
		}
	}, { immediate: true });
	const lock = () => {
		const el = resolveElement(toValue$1(element));
		if (!el || isLocked.value) return;
		if (isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", (e) => {
			preventDefault(e);
		}, { passive: false });
		el.style.overflow = "hidden";
		isLocked.value = true;
	};
	const unlock = () => {
		const el = resolveElement(toValue$1(element));
		if (!el || !isLocked.value) return;
		isIOS && stopTouchMoveListener?.();
		el.style.overflow = initialOverflow;
		elInitialOverflow.delete(el);
		isLocked.value = false;
	};
	tryOnScopeDispose(unlock);
	return computed({
		get() {
			return isLocked.value;
		},
		set(v) {
			if (v) lock();
			else unlock();
		}
	});
}
function onScrollLock() {
	let isMounted = false;
	const state = ref(false);
	return (el, binding) => {
		state.value = binding.value;
		if (isMounted) return;
		isMounted = true;
		const isLocked = useScrollLock(el, binding.value);
		watch(state, (v) => isLocked.value = v);
	};
}
onScrollLock();
//#endregion
//#region src/features/ndv/panel/components/NDVSubConnections.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["data-test-id"];
var _hoisted_2$4 = ["textContent"];
var _hoisted_3$2 = ["onClick"];
var _hoisted_4$2 = ["onClick"];
var _hoisted_5$2 = ["data-node-name"];
var _hoisted_6$1 = ["onClick"];
var NDVSubConnections_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NDVSubConnections",
	props: { rootNode: {} },
	emits: ["switchSelectedNode", "openConnectionNodeCreator"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeTypesStore = useNodeTypesStore();
		const nodeHelpers = useNodeHelpers();
		const i18n = useI18n();
		const { debounce } = useDebounce();
		const emit = __emit;
		const possibleConnections = ref([]);
		const expandedGroups = ref([]);
		const shouldShowNodeInputIssues = ref(false);
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.rootNode.type, props.rootNode.typeVersion));
		const nodeData = computed(() => workflowDocumentStore?.value?.getNodeByName(props.rootNode.name) ?? null);
		const ndvStore = injectNDVStore();
		const workflowObjectAccessors = computed(() => workflowDocumentStore?.value ? workflowDocumentStore.value.getWorkflowObjectAccessorSnapshot() : void 0);
		const nodeInputIssues = computed(() => {
			return (workflowObjectAccessors.value ? nodeHelpers.getNodeIssues(nodeType.value, props.rootNode, workflowObjectAccessors.value, [
				"typeUnknown",
				"parameters",
				"credentials",
				"execution"
			]) : void 0)?.input ?? {};
		});
		const connectedNodes = computed(() => {
			const typeIndexCounters = {};
			return possibleConnections.value.reduce((acc, connection) => {
				const typeIndex = typeIndexCounters[connection.type] ?? 0;
				typeIndexCounters[connection.type] = typeIndex + 1;
				const nodes = getINodesFromNames(((workflowDocumentStore?.value?.connectionsByDestinationNode[props.rootNode.name]?.[connection.type] ?? [])[typeIndex] ?? []).map((conn) => conn.node));
				const connectionKey = `${connection.type}-${typeIndex}`;
				return {
					...acc,
					[connectionKey]: nodes
				};
			}, {});
		});
		function getConnectionContext(connection, globalIndex) {
			let typeIndex = 0;
			for (let i = 0; i < globalIndex; i++) if (possibleConnections.value[i].type === connection.type) typeIndex++;
			return {
				connectionType: connection.type,
				typeIndex,
				key: `${connection.type}-${typeIndex}`
			};
		}
		function getConnectionKey(connection, globalIndex) {
			return getConnectionContext(connection, globalIndex).key;
		}
		function getConnectionConfig(connectionType, typeIndex) {
			return possibleConnections.value.filter((connection) => connection.type === connectionType).at(typeIndex);
		}
		function isMultiConnection(connectionContext) {
			return getConnectionConfig(connectionContext.connectionType, connectionContext.typeIndex)?.maxConnections !== 1;
		}
		function shouldShowConnectionTooltip(connectionContext) {
			return isMultiConnection(connectionContext) && !expandedGroups.value.includes(connectionContext.connectionType);
		}
		function expandConnectionGroup(connectionContext, isExpanded) {
			if (!isMultiConnection(connectionContext)) return;
			if (isExpanded) expandedGroups.value = [...expandedGroups.value, connectionContext.connectionType];
			else expandedGroups.value = expandedGroups.value.filter((g) => g !== connectionContext.connectionType);
		}
		function getINodesFromNames(names) {
			return names.map((name) => {
				const node = workflowDocumentStore?.value?.getNodeByName(name) ?? null;
				if (node) {
					const matchedNodeType = nodeTypesStore.getNodeType(node.type);
					if (matchedNodeType) {
						const issues = workflowObjectAccessors.value ? nodeHelpers.getNodeIssues(matchedNodeType, node, workflowObjectAccessors.value) : null;
						return {
							node,
							nodeType: matchedNodeType,
							issues: issues ? nodeHelpers.nodeIssuesToString(issues, node) : ""
						};
					}
				}
				return null;
			}).filter((n) => n !== null);
		}
		function hasInputIssues(connectionContext) {
			return shouldShowNodeInputIssues.value && (nodeInputIssues.value[connectionContext.connectionType] ?? []).length > 0;
		}
		function isNodeInputConfiguration(connectionConfig) {
			if (typeof connectionConfig === "string") return false;
			return "type" in connectionConfig;
		}
		function getPossibleSubInputConnections() {
			if (!nodeType.value || !props.rootNode || !workflowDocumentStore?.value) return [];
			return getNodeInputs({ expression: workflowDocumentStore.value.getExpressionHandler() }, props.rootNode, nodeType.value).filter((input) => {
				if (!isNodeInputConfiguration(input)) return false;
				return input.type !== "main";
			});
		}
		function onNodeClick(nodeName, connectionContext) {
			if (isMultiConnection(connectionContext) && !expandedGroups.value.includes(connectionContext.connectionType)) {
				expandConnectionGroup(connectionContext, true);
				return;
			}
			emit("switchSelectedNode", nodeName);
		}
		function onPlusClick(connectionContext) {
			const connectionNodes = connectedNodes.value[connectionContext.key];
			if (isMultiConnection(connectionContext) && !expandedGroups.value.includes(connectionContext.connectionType) && connectionNodes.length >= 1) {
				expandConnectionGroup(connectionContext, true);
				return;
			}
			emit("openConnectionNodeCreator", props.rootNode.name, connectionContext.connectionType, connectionContext.typeIndex);
		}
		function showNodeInputsIssues() {
			shouldShowNodeInputIssues.value = false;
			setTimeout(() => {
				shouldShowNodeInputIssues.value = true;
			}, 0);
		}
		watch([nodeData, () => ndvStore.value.activeNode], debounce(() => setTimeout(() => {
			expandedGroups.value = [];
			possibleConnections.value = getPossibleSubInputConnections();
		}, 0), { debounceTime: 1e3 }), { immediate: true });
		__expose({ showNodeInputsIssues });
		return (_ctx, _cache) => {
			return possibleConnections.value.length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.connections),
				style: normalizeStyle(`--possible-connections: ${possibleConnections.value.length}`)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(possibleConnections.value, (connection, index) => {
				return openBlock(), createElementBlock("div", {
					key: getConnectionKey(connection, index),
					"data-test-id": `subnode-connection-group-${getConnectionKey(connection, index)}`
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.connectionType) }, [createBaseVNode("span", {
					class: normalizeClass({
						[_ctx.$style.connectionLabel]: true,
						[_ctx.$style.hasIssues]: hasInputIssues(getConnectionContext(connection, index))
					}),
					textContent: toDisplayString(`${connection.displayName}${connection.required ? " *" : ""}`)
				}, null, 10, _hoisted_2$4), createVNode(unref(OnClickOutside), { onTrigger: ($event) => expandConnectionGroup(getConnectionContext(connection, index), false) }, {
					default: withCtx(() => [createBaseVNode("div", {
						ref_for: true,
						ref: "connectedNodesWrapper",
						class: normalizeClass({
							[_ctx.$style.connectedNodesWrapper]: true,
							[_ctx.$style.connectedNodesWrapperExpanded]: expandedGroups.value.includes(connection.type)
						}),
						style: normalizeStyle(`--nodes-length: ${connectedNodes.value[getConnectionKey(connection, index)].length}`),
						onClick: ($event) => expandConnectionGroup(getConnectionContext(connection, index), true)
					}, [(connectedNodes.value[getConnectionKey(connection, index)].length >= 1 ? connection.maxConnections !== 1 : true) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass({
							[_ctx.$style.plusButton]: true,
							[_ctx.$style.hasIssues]: hasInputIssues(getConnectionContext(connection, index))
						}),
						onClick: ($event) => onPlusClick(getConnectionContext(connection, index))
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "top",
						teleported: true,
						offset: 10,
						"show-after": 300,
						disabled: shouldShowConnectionTooltip(getConnectionContext(connection, index)) && connectedNodes.value[getConnectionKey(connection, index)].length >= 1
					}, {
						content: withCtx(() => [createTextVNode(" Add " + toDisplayString(connection.displayName) + " ", 1), hasInputIssues(getConnectionContext(connection, index)) ? (openBlock(), createBlock(TitledList_default, {
							key: 0,
							title: `${unref(i18n).baseText("node.issues")}:`,
							items: nodeInputIssues.value[connection.type]
						}, null, 8, ["title", "items"])) : createCommentVNode("", true)]),
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "subtle",
							size: "medium",
							icon: "plus",
							"data-test-id": `add-subnode-${getConnectionKey(connection, index)}`
						}, null, 8, ["data-test-id"])]),
						_: 2
					}, 1032, ["disabled"])], 10, _hoisted_4$2)) : createCommentVNode("", true), connectedNodes.value[getConnectionKey(connection, index)].length > 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass({
							[_ctx.$style.connectedNodes]: true,
							[_ctx.$style.connectedNodesMultiple]: connectedNodes.value[getConnectionKey(connection, index)].length > 1
						})
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[getConnectionKey(connection, index)], (node, nodeIndex) => {
						return openBlock(), createElementBlock("div", {
							key: node.node.name,
							class: normalizeClass({
								[_ctx.$style.nodeWrapper]: true,
								[_ctx.$style.hasIssues]: node.issues
							}),
							"data-test-id": "floating-subnode",
							"data-node-name": node.node.name,
							style: normalizeStyle(`--node-index: ${nodeIndex}`)
						}, [(openBlock(), createBlock(unref(N8nTooltip_default), {
							key: node.node.name,
							placement: "top",
							teleported: true,
							offset: 10,
							"show-after": 300,
							disabled: shouldShowConnectionTooltip(getConnectionContext(connection, index))
						}, {
							content: withCtx(() => [createTextVNode(toDisplayString(node.node.name) + " ", 1), node.issues ? (openBlock(), createBlock(TitledList_default, {
								key: 0,
								title: `${unref(i18n).baseText("node.issues")}:`,
								items: node.issues
							}, null, 8, ["title", "items"])) : createCommentVNode("", true)]),
							default: withCtx(() => [createBaseVNode("div", {
								class: normalizeClass(_ctx.$style.connectedNode),
								onClick: ($event) => onNodeClick(node.node.name, getConnectionContext(connection, index))
							}, [createVNode(NodeIcon_default, {
								"node-type": node.nodeType,
								"node-name": node.node.name,
								"tooltip-position": "top",
								size: 20,
								circle: ""
							}, null, 8, ["node-type", "node-name"])], 10, _hoisted_6$1)]),
							_: 2
						}, 1032, ["disabled"]))], 14, _hoisted_5$2);
					}), 128))], 2)) : createCommentVNode("", true)], 14, _hoisted_3$2)]),
					_: 2
				}, 1032, ["onTrigger"])], 2)], 8, _hoisted_1$6);
			}), 128))], 6)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ndv/panel/components/NDVSubConnections.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_1x2tc_142";
var connections = "_connections_1x2tc_150";
var connectionType = "_connectionType_1x2tc_163";
var connectionLabel = "_connectionLabel_1x2tc_170";
var hasIssues = "_hasIssues_1x2tc_176";
var connectedNodesWrapper = "_connectedNodesWrapper_1x2tc_180";
var plusButton = "_plusButton_1x2tc_188";
var connectedNodesWrapperExpanded = "_connectedNodesWrapperExpanded_1x2tc_206";
var connectedNodesMultiple = "_connectedNodesMultiple_1x2tc_212";
var connectedNode = "_connectedNode_1x2tc_180";
var connectedNodes = "_connectedNodes_1x2tc_180";
var nodeWrapper = "_nodeWrapper_1x2tc_251";
var NDVSubConnections_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	connections,
	connectionType,
	connectionLabel,
	hasIssues,
	connectedNodesWrapper,
	plusButton,
	"horizontal-shake": "_horizontal-shake_1x2tc_1",
	connectedNodesWrapperExpanded,
	connectedNodesMultiple,
	connectedNode,
	connectedNodes,
	nodeWrapper
};
var NDVSubConnections_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NDVSubConnections_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NDVSubConnections_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useNodeDocsUrl.ts
var useNodeDocsUrl = ({ nodeType: nodeTypeRef }) => {
	const packageName = computed(() => toValue(nodeTypeRef)?.name.split(".")[0] ?? "");
	const isCommunityNode = computed(() => {
		const nodeType = toValue(nodeTypeRef);
		if (nodeType) return isCommunityPackageName(nodeType.name);
		return false;
	});
	return { docsUrl: computed(() => {
		const nodeType = toValue(nodeTypeRef);
		if (!nodeType) return "";
		if (nodeType.documentationUrl?.startsWith("http")) return nodeType.documentationUrl;
		const utmParams = new URLSearchParams({
			utm_source: "n8n_app",
			utm_medium: "node_settings_modal-credential_link",
			utm_campaign: nodeType.name
		});
		const primaryDocUrl = nodeType.codex?.resources?.primaryDocumentation?.[0]?.url;
		if (primaryDocUrl) return `${primaryDocUrl}?${utmParams.toString()}`;
		if (isCommunityNode.value) return `${NPM_PACKAGE_DOCS_BASE_URL}${packageName.value}`;
		return `${BUILTIN_NODES_DOCS_URL}?${utmParams.toString()}`;
	}) };
};
//#endregion
//#region src/features/ndv/settings/components/NodeSettingsTabs.vue
var NodeSettingsTabs_default = /* @__PURE__ */ defineComponent({
	__name: "NodeSettingsTabs",
	props: {
		modelValue: { default: "params" },
		nodeType: { default: void 0 },
		pushRef: { default: "" },
		hideDocs: { type: Boolean },
		tabsVariant: { default: void 0 },
		includeAction: { type: Boolean },
		includeCredential: { type: Boolean },
		hasCredentialIssue: {
			type: Boolean,
			default: false
		},
		compact: { type: Boolean }
	},
	emits: ["update:model-value"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const externalHooks = useExternalHooks();
		const ndvStore = injectNDVStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { docsUrl } = useNodeDocsUrl({ nodeType: () => props.nodeType });
		const activeNode = computed(() => ndvStore.value.activeNode);
		const { installedPackage, isCommunityNode, isUpdateCheckAvailable } = useInstalledCommunityPackage(computed(() => props.nodeType?.name));
		const packageName = computed(() => props.nodeType?.name.split(".")[0] ?? "");
		const documentationUrl = computed(() => {
			if (props.hideDocs) return "";
			return docsUrl.value;
		});
		const options = computed(() => {
			const ret = [];
			if (props.includeAction) ret.push({
				label: i18n.baseText("nodeSettings.action"),
				value: "action"
			});
			if (props.includeCredential) ret.push({
				label: i18n.baseText("nodeSettings.credential"),
				value: "credential",
				...props.hasCredentialIssue && {
					icon: "triangle-alert",
					iconPosition: "right",
					variant: "danger"
				}
			});
			ret.push({
				label: i18n.baseText(props.compact ? "nodeSettings.parametersShort" : "nodeSettings.parameters"),
				value: "params"
			}, {
				value: "settings",
				notification: isUpdateCheckAvailable.value && installedPackage.value?.updateAvailable ? true : void 0,
				...props.compact ? {
					icon: "settings",
					align: "right",
					tooltip: i18n.baseText("nodeSettings.settings")
				} : { label: i18n.baseText("nodeSettings.settings") }
			});
			if (isCommunityNode.value) ret.push({
				icon: "box",
				value: "communityNode",
				align: "right",
				tooltip: i18n.baseText("generic.communityNode.tooltip", { interpolate: {
					docUrl: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
					packageName: packageName.value
				} })
			});
			if (documentationUrl.value) ret.push({
				value: "docs",
				href: documentationUrl.value,
				align: "right",
				...props.compact ? {
					icon: "book-open",
					tooltip: i18n.baseText("nodeSettings.docs")
				} : { label: i18n.baseText("nodeSettings.docs") }
			});
			return ret;
		});
		function onTabSelect(tab) {
			if (tab === "docs" && props.nodeType) {
				externalHooks.run("dataDisplay.onDocumentationUrlClick", {
					nodeType: props.nodeType,
					documentationUrl: documentationUrl.value
				});
				telemetry.track("User clicked ndv link", {
					node_type: activeNode.value?.type,
					workflow_id: workflowDocumentStore.value.workflowId,
					push_ref: props.pushRef,
					pane: NodeConnectionTypes.Main,
					type: "docs"
				});
			}
			if (tab === "settings" && props.nodeType) telemetry.track("User viewed node settings", {
				node_type: props.nodeType.name,
				workflow_id: workflowDocumentStore.value.workflowId
			});
			if (tab === "settings" || tab === "params" || tab === "action" || tab === "credential") emit("update:model-value", tab);
		}
		function onTooltipClick(tab, event) {
			if (tab === "communityNode" && event.target.localName === "a") telemetry.track("user clicked cnr docs link", { source: "node details view" });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTabs_default), {
				options: options.value,
				"model-value": __props.modelValue,
				variant: __props.tabsVariant,
				size: __props.compact ? "small" : "medium",
				"onUpdate:modelValue": onTabSelect,
				onTooltipClick
			}, null, 8, [
				"options",
				"model-value",
				"variant",
				"size"
			]);
		};
	}
});
//#endregion
//#region src/features/ndv/settings/components/NodeSettingsHeader.vue?vue&type=script&setup=true&lang.ts
var NodeSettingsHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeSettingsHeader",
	props: {
		nodeName: {},
		hideExecute: { type: Boolean },
		hideDocs: { type: Boolean },
		hideTabs: { type: Boolean },
		disableExecute: { type: Boolean },
		executeButtonTooltip: {},
		selectedTab: {},
		nodeType: {},
		pushRef: {}
	},
	emits: [
		"execute",
		"stop-execution",
		"value-changed",
		"tab-changed"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [!__props.hideTabs ? (openBlock(), createBlock(NodeSettingsTabs_default, {
				key: 0,
				"hide-docs": __props.hideDocs,
				"model-value": __props.selectedTab,
				"node-type": __props.nodeType,
				"push-ref": __props.pushRef,
				class: normalizeClass(_ctx.$style.tabs),
				"tabs-variant": "modern",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("tab-changed", $event))
			}, null, 8, [
				"hide-docs",
				"model-value",
				"node-type",
				"push-ref",
				"class"
			])) : createCommentVNode("", true), !__props.hideExecute ? (openBlock(), createBlock(NodeExecuteButton_default, {
				key: 1,
				"data-test-id": "node-execute-button",
				"node-name": __props.nodeName,
				disabled: __props.disableExecute,
				tooltip: __props.executeButtonTooltip,
				class: normalizeClass(_ctx.$style.execute),
				size: "small",
				"telemetry-source": "parameters",
				onExecute: _cache[1] || (_cache[1] = ($event) => emit("execute")),
				onStopExecution: _cache[2] || (_cache[2] = ($event) => emit("stop-execution")),
				onValueChanged: _cache[3] || (_cache[3] = ($event) => emit("value-changed", $event))
			}, null, 8, [
				"node-name",
				"disabled",
				"tooltip",
				"class"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var NodeSettingsHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_11v3h_125",
	execute: "_execute_11v3h_133",
	tabs: "_tabs_11v3h_137"
};
var NodeSettingsHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeSettingsHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeSettingsHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/settings/components/NodeWebhooks.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = {
	key: 0,
	class: "webhooks"
};
var _hoisted_2$3 = ["title"];
var _hoisted_3$1 = {
	key: 0,
	class: "node-webhooks"
};
var _hoisted_4$1 = {
	key: 0,
	class: "url-selection"
};
var _hoisted_5$1 = {
	key: 0,
	class: "webhook-wrapper"
};
var _hoisted_6 = { class: "http-field" };
var _hoisted_7 = { class: "http-method" };
var _hoisted_8 = { class: "url-field" };
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
	key: 1,
	class: "webhook-wrapper"
};
var _hoisted_11 = { class: "url-field-full-width" };
var _hoisted_12 = ["onClick"];
//#endregion
//#region src/features/ndv/settings/components/NodeWebhooks.vue
var NodeWebhooks_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "NodeWebhooks",
	props: {
		node: {},
		nodeTypeDescription: {}
	},
	setup(__props) {
		const props = __props;
		const clipboard = useClipboard();
		const workflowHelpers = useWorkflowHelpers();
		const toast = useToast();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const isMinimized = ref(props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name));
		const showUrlFor = ref("test");
		const isProductionOnly = computed(() => {
			return props.nodeTypeDescription && PRODUCTION_ONLY_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
		});
		const urlOptions = computed(() => [...isProductionOnly.value ? [] : [{
			label: baseText.value.testUrl,
			value: "test"
		}], {
			label: baseText.value.productionUrl,
			value: "production"
		}]);
		const webhooksNode = computed(() => {
			if (props.nodeTypeDescription?.webhooks === void 0) return [];
			return props.nodeTypeDescription.webhooks.filter((webhookData) => webhookData.restartWebhook !== true);
		});
		const visibleWebhookUrls = computedAsync(async () => {
			const urlFor = showUrlFor.value;
			const node = props.node;
			const result = [];
			for (const webhook of webhooksNode.value) {
				let isVisible = !webhook.ndvHideUrl;
				if (typeof webhook.ndvHideUrl === "string") isVisible = !await workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideUrl");
				if (!isVisible) continue;
				let url = "";
				if (node) url = await workflowHelpers.getWebhookUrl(webhook, node, isProductionOnly.value ? "production" : urlFor);
				let isMethodVisible = !webhook.ndvHideMethod;
				try {
					const method = await workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
					if (Array.isArray(method) && method.length !== 1) isMethodVisible = false;
					else if (typeof webhook.ndvHideMethod === "string") isMethodVisible = !await workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideMethod");
				} catch {}
				let httpMethod = "";
				try {
					const method = await workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
					httpMethod = Array.isArray(method) ? method[0] : method;
				} catch {}
				result.push({
					webhook,
					url,
					httpMethod,
					isMethodVisible
				});
			}
			return result;
		}, []);
		const baseText = computed(() => {
			switch (props.nodeTypeDescription?.name) {
				case CHAT_TRIGGER_NODE_TYPE: return {
					toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.chatTrigger"),
					clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.formTrigger"),
					clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.chatTrigger"),
					clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.chatTrigger"),
					testUrl: i18n.baseText("nodeWebhooks.testUrl"),
					productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
					copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.chatTrigger"),
					copyMessage: i18n.baseText("nodeWebhooks.showMessage.message.chatTrigger")
				};
				case FORM_TRIGGER_NODE_TYPE: return {
					toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.formTrigger"),
					clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.formTrigger"),
					clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.formTrigger"),
					clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.formTrigger"),
					testUrl: i18n.baseText("nodeWebhooks.testUrl"),
					productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
					copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.formTrigger"),
					copyMessage: i18n.baseText("nodeWebhooks.showMessage.message.formTrigger")
				};
				case MCP_TRIGGER_NODE_TYPE: return {
					toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls.mcpTrigger"),
					clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls.mcpTrigger"),
					clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls.mcpTrigger"),
					clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls.mcpTrigger"),
					testUrl: i18n.baseText("nodeWebhooks.testUrl"),
					productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
					copyTitle: i18n.baseText("nodeWebhooks.showMessage.title.mcpTrigger"),
					copyMessage: void 0
				};
				default: return {
					toggleTitle: i18n.baseText("nodeWebhooks.webhookUrls"),
					clickToDisplay: i18n.baseText("nodeWebhooks.clickToDisplayWebhookUrls"),
					clickToHide: i18n.baseText("nodeWebhooks.clickToHideWebhookUrls"),
					clickToCopy: i18n.baseText("nodeWebhooks.clickToCopyWebhookUrls"),
					testUrl: i18n.baseText("nodeWebhooks.testUrl"),
					productionUrl: i18n.baseText("nodeWebhooks.productionUrl"),
					copyTitle: i18n.baseText("nodeWebhooks.showMessage.title"),
					copyMessage: void 0
				};
			}
		});
		function copyWebhookUrl(item) {
			clipboard.copy(item.url);
			toast.showMessage({
				title: baseText.value.copyTitle,
				message: baseText.value.copyMessage,
				type: "success"
			});
			telemetry.track("User copied webhook URL", {
				pane: "parameters",
				type: `${showUrlFor.value} url`
			});
		}
		watch(() => props.node, () => {
			isMinimized.value = props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
		});
		return (_ctx, _cache) => {
			return webhooksNode.value.length && unref(visibleWebhookUrls).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$5, [createBaseVNode("div", {
				class: normalizeClass(["clickable headline", { expanded: !isMinimized.value }]),
				title: isMinimized.value ? baseText.value.clickToDisplay : baseText.value.clickToHide,
				onClick: _cache[0] || (_cache[0] = ($event) => isMinimized.value = !isMinimized.value)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "chevron-right",
				class: "minimize-button minimize-icon"
			}), createTextVNode(" " + toDisplayString(baseText.value.toggleTitle), 1)], 10, _hoisted_2$3), createVNode(unref(ElCollapseTransition), null, {
				default: withCtx(() => [!isMinimized.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [!isProductionOnly.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [createVNode(unref(ElRow), null, {
					default: withCtx(() => [createVNode(unref(ElCol), { span: 24 }, {
						default: withCtx(() => [createVNode(unref(N8nRadioButtons_default), {
							modelValue: showUrlFor.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showUrlFor.value = $event),
							options: urlOptions.value
						}, null, 8, ["modelValue", "options"])]),
						_: 1
					})]),
					_: 1
				})])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(visibleWebhookUrls), (item, index) => {
					return openBlock(), createBlock(unref(N8nTooltip_default), {
						key: index,
						class: "item",
						content: baseText.value.clickToCopy,
						placement: "left"
					}, {
						default: withCtx(() => [item.isMethodVisible ? (openBlock(), createElementBlock("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createTextVNode(toDisplayString(item.httpMethod), 1), _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1))])]), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", {
							class: "webhook-url left-ellipsis clickable",
							onClick: ($event) => copyWebhookUrl(item)
						}, [createTextVNode(toDisplayString(item.url), 1), _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1))], 8, _hoisted_9)])])) : (openBlock(), createElementBlock("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", {
							class: "webhook-url left-ellipsis clickable",
							onClick: ($event) => copyWebhookUrl(item)
						}, [createTextVNode(toDisplayString(item.url), 1), _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1))], 8, _hoisted_12)])]))]),
						_: 2
					}, 1032, ["content"]);
				}), 128))])) : createCommentVNode("", true)]),
				_: 1
			})])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-75d5f44c"]]);
//#endregion
//#region src/features/agents/utils/agentNode.ts
/**
* Whether the node gets the rich AI Agent experience — the canvas agent card
* AND the NDV agent controls (builder banner, Agent section, unified Advanced
* section, trimmed Settings tab). Targets the v2 node; v1 keeps the legacy
* default rendering and raw NDV layout on every surface.
*/
function isAgentNodeV2(node) {
	return node?.type === "n8n-nodes-base.messageAnAgent" && (node.typeVersion ?? 0) >= 2;
}
//#endregion
//#region src/features/agents/composables/useAgentNavigation.ts
/**
* Navigates into the agent feature while remembering the workflow + node the
* user came from, so `AgentView` can render a "Back to workflow" banner.
*/
function useAgentNavigation() {
	const router = useRouter();
	const workflowId = useWorkflowId();
	const workflowsStore = useWorkflowsStore();
	const returnContext = useAgentReturnContextStore();
	/**
	* Pass `originNodeId` ONLY when the trip starts from the node's NDV: a set
	* node id makes "Back to workflow" reopen that node's NDV. Canvas-initiated
	* trips omit it so the return lands on the canvas.
	*/
	function rememberOrigin(agentId, originNodeId) {
		if (workflowsStore.isNewWorkflow) return;
		const wfId = workflowsStore.workflowId || workflowId.value;
		if (!wfId) return;
		returnContext.set({
			workflowId: wfId,
			nodeId: originNodeId ?? "",
			agentId
		});
	}
	async function navigateWithOrigin(name, projectId, agentId, originNodeId) {
		rememberOrigin(agentId, originNodeId);
		try {
			if (await router.push({
				name,
				params: {
					projectId,
					agentId
				}
			})) returnContext.clear();
		} catch (error) {
			returnContext.clear();
			throw error;
		}
	}
	async function openBuilder(projectId, agentId, originNodeId) {
		await navigateWithOrigin(AGENT_BUILDER_VIEW, projectId, agentId, originNodeId);
	}
	async function openAgent(projectId, agentId, originNodeId) {
		await navigateWithOrigin(AGENT_VIEW, projectId, agentId, originNodeId);
	}
	return {
		rememberOrigin,
		openBuilder,
		openAgent
	};
}
//#endregion
//#region src/features/ndv/agents/composables/useNdvAgentConfig.ts
var instanceSeq = 0;
/**
* Orchestrates reading + autosaving the *shared agent primitive* referenced by
* the AI Agent node, for use inside the NDV. A miniature of `AgentBuilderView`'s
* config lifecycle — it reuses the same `useAgentConfig` + `useAgentConfigAutosave`
* machinery and the extracted `useAgentCapabilitiesActions`.
*
* MUST be created in the stable NDV container (`NodeDetailsViewV2`), NOT in
* `NodeSettings`: the container survives node switches and its `close()` /
* node-switch paths are where `flush()` is awaited. Provide the return via
* {@link NdvAgentConfigKey}; `NodeSettings` injects it.
*
* No-ops for non-agent nodes (guarded by `isAgentNode`), so it is safe to
* instantiate unconditionally for every node the NDV opens.
*/
function useNdvAgentConfig(activeNode, options = {}) {
	const rootStore = useRootStore();
	const nav = useAgentNavigation();
	const toast = useToast();
	const i18n = useI18n();
	const isAgentNode = computed(() => isAgentNodeV2(toValue(activeNode)));
	const eventSource = `ndv-agent-config-${++instanceSeq}`;
	/** Notify other surfaces (canvas cards, other listeners) that the agent was written. */
	function emitAgentUpdated(forAgentId) {
		agentsEventBus.emit("agentUpdated", {
			agentId: forAgentId,
			source: eventSource
		});
	}
	const projectId = useAgentScopeProjectId();
	const agentId = computed(() => {
		if (!isAgentNode.value) return "";
		const param = toValue(activeNode)?.parameters?.agentId;
		if (param && typeof param === "object" && "value" in param) {
			const { value } = param;
			if (typeof value === "string") return value;
		}
		return "";
	});
	const canUpdate = computed(() => false);
	const { config, loading, repoint, fetchConfig, updateConfig } = useAgentConfig();
	const localConfig = ref(null);
	const agent = ref(null);
	const connectedTriggers = ref([]);
	const loadError = ref(null);
	/** Terminal state: the referenced agent was deleted or access was lost. */
	const isUnavailable = ref(false);
	const isPublished = computed(() => Boolean(agent.value?.activeVersionId));
	function isPermanentError(error) {
		const status = error?.httpStatusCode ?? error?.response?.status;
		return status === 404 || status === 403;
	}
	async function fetchAgent(pId, aId) {
		const fresh = await getAgent(rootStore.restApiContext, pId, aId);
		if (agentId.value === aId && projectId.value === pId) agent.value = fresh;
	}
	async function load(pId, aId) {
		loadError.value = null;
		isUnavailable.value = false;
		try {
			await Promise.all([fetchConfig(pId, aId), fetchAgent(pId, aId)]);
		} catch (error) {
			if (agentId.value !== aId || projectId.value !== pId) return;
			if (isPermanentError(error)) isUnavailable.value = true;
			loadError.value = error;
		}
	}
	async function saveConfig(snapshot) {
		try {
			const result = await updateConfig(snapshot.projectId, snapshot.agentId, snapshot.config);
			emitAgentUpdated(snapshot.agentId);
			if (result.stale) return;
			if (agent.value && agent.value.id === snapshot.agentId && result.versionId !== void 0) agent.value = {
				...agent.value,
				versionId: result.versionId
			};
			await fetchAgent(snapshot.projectId, snapshot.agentId);
		} catch (error) {
			if (isPermanentError(error)) isUnavailable.value = true;
			throw error;
		}
	}
	const autosave = useAgentConfigAutosave({
		save: saveConfig,
		onError: (error) => {
			toast.showError(error, i18n.baseText("agents.builder.saveError"));
		}
	});
	async function saveSkill(snapshot) {
		let result;
		try {
			result = await updateAgentSkill(rootStore.restApiContext, snapshot.projectId, snapshot.agentId, snapshot.skillId, snapshot.skill);
		} catch (error) {
			if (isPermanentError(error) && snapshot.agentId === agentId.value) isUnavailable.value = true;
			throw error;
		}
		emitAgentUpdated(snapshot.agentId);
		if (agent.value?.id !== snapshot.agentId) return;
		agent.value = {
			...agent.value,
			versionId: result.versionId,
			skills: {
				...agent.value.skills ?? {},
				[snapshot.skillId]: result.skill
			}
		};
	}
	const skillAutosave = useAgentConfigAutosave({
		save: saveSkill,
		onError: (error) => {
			toast.showError(error, i18n.baseText("agents.builder.skills.saveError"));
		}
	});
	/** The host config-update funnel handed to the capability actions + panels. */
	function scheduleConfigUpdate(updates) {
		if (!localConfig.value || !canUpdate.value || isUnavailable.value) return;
		Object.assign(localConfig.value, updates);
		autosave.scheduleAutosave({
			projectId: projectId.value,
			agentId: agentId.value,
			config: deepCopy(localConfig.value)
		});
	}
	/** Skill-save seam handed to the capability actions (edit-existing-skill path). */
	function scheduleSkillSave(payload) {
		if (!canUpdate.value || isUnavailable.value) return;
		skillAutosave.scheduleAutosave({
			projectId: projectId.value,
			agentId: agentId.value,
			skillId: payload.skillId,
			skill: payload.skill
		});
	}
	async function flush() {
		await Promise.all([autosave.flushAutosave(), skillAutosave.flushAutosave()]);
	}
	async function settle() {
		await Promise.all([autosave.settleAutosave(), skillAutosave.settleAutosave()]);
	}
	const saveStatus = computed(() => {
		if (autosave.saveStatus.value === "saving" || skillAutosave.saveStatus.value === "saving") return "saving";
		if (autosave.saveStatus.value === "saved" || skillAutosave.saveStatus.value === "saved") return "saved";
		return "idle";
	});
	const caps = useAgentCapabilitiesActions({
		localConfig,
		agent,
		projectId,
		agentId,
		connectedTriggers,
		scheduleConfigUpdate,
		scheduleSkillSave,
		telemetry: options.telemetry
	});
	watch(config, (fresh) => {
		localConfig.value = fresh ? deepCopy(fresh) : null;
	});
	watch([agentId, projectId], async ([id, pId], previous) => {
		const [previousId] = previous ?? [];
		if (previous) {
			localConfig.value = null;
			agent.value = null;
			connectedTriggers.value = [];
			repoint(pId, id);
		}
		if (previousId) await flush().catch(() => {});
		if (id && pId && isAgentNode.value) await load(pId, id);
	}, { immediate: true });
	function onAgentUpdated(event) {
		if (event?.source === eventSource) return;
		if (event?.agentId && event.agentId !== agentId.value) return;
		if (!agentId.value) return;
		(async () => {
			await flush().catch(() => {});
			await load(projectId.value, agentId.value);
		})();
	}
	agentsEventBus.on("agentUpdated", onAgentUpdated);
	onBeforeUnmount(() => agentsEventBus.off("agentUpdated", onAgentUpdated));
	/**
	* Refresh after a capability modal change (mirrors the builder's
	* `onConfigUpdated`): refetch config + agent so the capabilities section
	* re-pulls skill bodies. Modal flows (e.g. skill creation) write through
	* their own API calls, not `saveConfig`, so notify other surfaces here.
	*/
	async function onConfigUpdated() {
		if (!agentId.value) return;
		emitAgentUpdated(agentId.value);
		await load(projectId.value, agentId.value);
	}
	/**
	* Open the referenced agent in the Agent Builder, remembering this node as the
	* origin so the builder shows a "Back to workflow" banner (same round-trip the
	* canvas card's open affordance uses).
	*/
	async function openBuilder() {
		if (!agentId.value) return;
		await flush().catch(() => {});
		await nav.openBuilder(projectId.value, agentId.value, toValue(activeNode)?.id);
	}
	return {
		openBuilder,
		isAgentNode,
		projectId,
		agentId,
		canUpdate,
		localConfig,
		agent,
		connectedTriggers,
		loading,
		loadError,
		isUnavailable,
		isPublished,
		saveStatus,
		appliedSkills: caps.appliedSkills,
		actions: caps,
		scheduleConfigUpdate,
		onConfigUpdated,
		reload: async () => {
			if (agentId.value) await load(projectId.value, agentId.value);
		},
		flush,
		settle
	};
}
/** Provided by `NodeDetailsViewV2`, injected by `NodeSettings` + the NDV agent wrappers. */
var NdvAgentConfigKey = Symbol("NdvAgentConfig");
//#endregion
//#region src/features/ndv/agents/components/AgentNdvReferencedControls.vue?vue&type=script&setup=true&lang.ts
var AgentNdvReferencedControls_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentNdvReferencedControls",
	props: { isReadOnly: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		/**
		* Referenced-agent controls for the AI Agent node's NDV Parameters tab,
		* rendered as a plain "Agent" section (title + divider) between the call-site
		* parameters and the Advanced section.
		*
		* Edits the *shared agent primitive* (model, instructions, tools, skills) —
		* global, applies everywhere the agent is used. Channels, tasks and sub-agents
		* are intentionally excluded via the `sections` allowlist.
		*
		* Consumes the shared {@link NdvAgentConfigKey} orchestrator (owned by the
		* stable NDV container) so it shares one config/autosave/actions instance with
		* the other NDV agent surfaces.
		*/
		const props = __props;
		const i18n = useI18n();
		const ndv = inject(NdvAgentConfigKey);
		const isAgentNode = computed(() => ndv?.isAgentNode.value ?? false);
		const agentId = computed(() => ndv?.agentId.value ?? "");
		const projectId = computed(() => ndv?.projectId.value ?? "");
		const canUpdate = computed(() => (ndv?.canUpdate.value ?? false) && !props.isReadOnly);
		const localConfig = computed(() => ndv?.localConfig.value ?? null);
		const agent = computed(() => ndv?.agent.value ?? null);
		const appliedSkills = computed(() => ndv?.appliedSkills.value ?? []);
		const loading = computed(() => ndv?.loading.value ?? false);
		const isUnavailable = computed(() => ndv?.isUnavailable.value ?? false);
		const isPublished = computed(() => ndv?.isPublished.value ?? false);
		const saveStatus = computed(() => ndv?.saveStatus.value ?? "idle");
		const saveStatusText = computed(() => {
			if (saveStatus.value === "saving") return i18n.baseText("agents.builder.header.saving");
			if (saveStatus.value === "saved") return i18n.baseText("agents.builder.header.saved");
			return "";
		});
		const actions = computed(() => ndv?.actions);
		async function onEditInBuilder() {
			await ndv?.openBuilder();
		}
		return (_ctx, _cache) => {
			return isAgentNode.value && agentId.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.referencedControls),
				"data-test-id": "agent-ndv-referenced-controls"
			}, [createVNode(unref(SectionHeader_default), {
				title: unref(i18n).baseText("agentNode.ndv.section.agent"),
				bordered: ""
			}, {
				actions: withCtx(() => [saveStatusText.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light",
					"data-test-id": "agent-ndv-save-status"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(saveStatusText.value), 1)]),
					_: 1
				})) : createCommentVNode("", true), !isUnavailable.value ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 1,
					size: "small",
					"data-test-id": "agent-ndv-edit-in-builder",
					onClick: onEditInBuilder
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agentNode.ndv.referenced.editInBuilder")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["title"]), isUnavailable.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.unavailable),
				color: "danger",
				size: "small",
				"data-test-id": "agent-ndv-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agentNode.ndv.unavailable")), 1)]),
				_: 1
			}, 8, ["class"])) : loading.value && !localConfig.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 1,
				rows: 5,
				"data-test-id": "agent-ndv-loading"
			})) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoPanelWrapper) }, [createVNode(AgentInfoPanel_default, {
				config: localConfig.value,
				"project-id": projectId.value,
				disabled: !canUpdate.value,
				"show-instructions-toolbar": false,
				"instructions-max-height": "240px",
				embedded: "",
				"onUpdate:config": unref(ndv)?.scheduleConfigUpdate
			}, null, 8, [
				"config",
				"project-id",
				"disabled",
				"onUpdate:config"
			])], 2), createVNode(AgentCapabilitiesSection_default, {
				config: localConfig.value,
				tools: localConfig.value?.tools ?? [],
				"custom-tools": agent.value?.tools ?? {},
				skills: appliedSkills.value,
				"connected-triggers": [],
				disabled: !canUpdate.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"is-published": isPublished.value,
				sections: ["tools", "skills"],
				onAddTool: actions.value?.onOpenAddToolModal,
				onOpenTool: actions.value?.onOpenToolFromList,
				onRemoveTool: actions.value?.onRemoveTool,
				onAddSkill: actions.value?.onOpenAddSkillModal,
				onOpenSkill: actions.value?.onOpenSkillFromList,
				onRemoveSkill: actions.value?.onRemoveSkill,
				"onUpdate:config": unref(ndv)?.scheduleConfigUpdate,
				onAgentChanged: unref(ndv)?.onConfigUpdated
			}, null, 8, [
				"config",
				"tools",
				"custom-tools",
				"skills",
				"disabled",
				"project-id",
				"agent-id",
				"is-published",
				"onAddTool",
				"onOpenTool",
				"onRemoveTool",
				"onAddSkill",
				"onOpenSkill",
				"onRemoveSkill",
				"onUpdate:config",
				"onAgentChanged"
			])], 64))], 2)) : createCommentVNode("", true);
		};
	}
});
var AgentNdvReferencedControls_vue_vue_type_style_index_0_lang_module_default = {
	referencedControls: "_referencedControls_h1f09_125",
	unavailable: "_unavailable_h1f09_133",
	infoPanelWrapper: "_infoPanelWrapper_h1f09_137"
};
var AgentNdvReferencedControls_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentNdvReferencedControls_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentNdvReferencedControls_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentCreate.ts
/**
* Eagerly create a draft agent primitive and reference it on the node.
*/
function useAgentCreate(options) {
	const i18n = useI18n();
	const rootStore = useRootStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const nav = useAgentNavigation();
	const { saveCurrentWorkflow } = useWorkflowSaving({ router: useRouter() });
	const isCreating = ref(false);
	/** Shared core: create the draft and reference it. Returns null on failure. */
	async function createDraft() {
		const projectId = toValue(options.projectId);
		if (!projectId) {
			toast.showError(new Error(i18n.baseText("agentSelector.createAgentFailed")), i18n.baseText("agentSelector.createAgentFailed"));
			return null;
		}
		const agent = await createAgent(rootStore.restApiContext, projectId, i18n.baseText("agents.new.defaultName"));
		upsertProjectAgentsListCache(projectId, agent);
		options.setReference(agent);
		options.onCreated?.(agent);
		telemetry.track("User created agent", {
			agent_id: agent.id,
			source: options.telemetrySource
		});
		return agent;
	}
	async function createAndSelect() {
		if (isCreating.value) return;
		isCreating.value = true;
		try {
			await createDraft();
		} catch (error) {
			toast.showError(error, i18n.baseText("agentSelector.createAgentFailed"));
		} finally {
			isCreating.value = false;
		}
	}
	async function createAndOpenBuilder() {
		if (isCreating.value) return;
		isCreating.value = true;
		try {
			const agent = await createDraft();
			if (!agent) return;
			if (!await saveCurrentWorkflow({}, false)) return;
			await nav.openBuilder(toValue(options.projectId), agent.id, options.getOriginNodeId?.());
		} catch (error) {
			toast.showError(error, i18n.baseText("agentSelector.createAgentFailed"));
		} finally {
			isCreating.value = false;
		}
	}
	return {
		createAndSelect,
		createAndOpenBuilder,
		isCreating
	};
}
//#endregion
//#region src/features/ndv/agents/components/AgentNdvBuilderBanner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { key: 1 };
var AgentNdvBuilderBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentNdvBuilderBanner",
	props: {
		isReadOnly: { type: Boolean },
		originNodeId: {}
	},
	emits: ["setAgentReference"],
	setup(__props, { emit: __emit }) {
		/**
		* Agent Builder promo banner at the top of the AI Agent node's NDV Parameters
		* tab, shown only while no agent is referenced: its link creates a draft,
		* references it, and opens the builder for it (setting the "Back to workflow"
		* return context). Once an agent is referenced the banner disappears — the
		* Agent section header's "Edit in Agent Builder" link takes over navigation.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const ndv = inject(NdvAgentConfigKey);
		const agentId = computed(() => ndv?.agentId.value ?? "");
		const projectId = computed(() => ndv?.projectId.value ?? "");
		const { canCreate } = useAgentPermissions(projectId);
		const agentCreate = useAgentCreate({
			projectId,
			telemetrySource: "ndv_banner",
			getOriginNodeId: () => props.originNodeId,
			setReference: (agent) => emit("setAgentReference", {
				__rl: true,
				value: agent.id,
				mode: "list",
				cachedResultName: agent.name
			})
		});
		const isLinkEnabled = computed(() => {
			if (agentCreate.isCreating.value) return false;
			if (agentId.value) return true;
			return canCreate.value && !props.isReadOnly;
		});
		async function onLinkClick() {
			if (!isLinkEnabled.value) return;
			if (agentId.value) {
				await ndv?.openBuilder();
				return;
			}
			await agentCreate.createAndOpenBuilder();
		}
		return (_ctx, _cache) => {
			return !agentId.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.banner),
				"data-test-id": "agent-ndv-builder-banner"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "sparkles",
				size: "medium",
				class: normalizeClass(_ctx.$style.icon)
			}, null, 8, ["class"]), createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, [createTextVNode(toDisplayString(unref(i18n).baseText("agentNode.ndv.banner.prefix")) + " ", 1), isLinkEnabled.value ? (openBlock(), createElementBlock("button", {
				key: 0,
				type: "button",
				class: normalizeClass(_ctx.$style.link),
				"data-test-id": "agent-ndv-banner-open-builder",
				onClick: withModifiers(onLinkClick, ["prevent"])
			}, toDisplayString(unref(i18n).baseText("agentNode.ndv.banner.link")), 3)) : (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString(unref(i18n).baseText("agentNode.ndv.banner.link")), 1))], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
var AgentNdvBuilderBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner: "_banner_11ut3_2",
	icon: "_icon_11ut3_30",
	text: "_text_11ut3_35",
	link: "_link_11ut3_43"
};
var AgentNdvBuilderBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentNdvBuilderBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentNdvBuilderBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/canvas/experimental/components/ExperimentalEmbeddedNdvHeader.vue?vue&type=script&setup=true&lang.ts
var ExperimentalEmbeddedNdvHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExperimentalEmbeddedNdvHeader",
	props: {
		node: {},
		readOnly: { type: Boolean },
		nodeType: {},
		pushRef: {},
		subTitle: {},
		extraTabsClassName: {},
		selectedTab: {},
		includeAction: { type: Boolean },
		includeCredential: { type: Boolean },
		hasCredentialIssue: { type: Boolean }
	},
	emits: [
		"name-changed",
		"dblclick-title",
		"tab-changed"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, __props.node.disabled ? _ctx.$style.disabled : ""]) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.title),
				onDblclick: _cache[1] || (_cache[1] = ($event) => emit("dblclick-title", $event))
			}, [
				createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 16
				}, null, 8, ["node-type"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleText) }, [createVNode(unref(N8nInlineTextEdit_default), {
					"min-width": 0,
					"model-value": __props.node.name,
					"read-only": __props.readOnly,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("name-changed", $event))
				}, null, 8, ["model-value", "read-only"])], 2),
				createVNode(unref(N8nText_default), {
					bold: "",
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.subTitleText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subTitle), 1)]),
					_: 1
				}, 8, ["class"]),
				renderSlot(_ctx.$slots, "actions")
			], 34), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabsContainer) }, [createVNode(NodeSettingsTabs_default, {
				class: normalizeClass(__props.extraTabsClassName),
				"model-value": __props.selectedTab,
				"node-type": __props.nodeType,
				"push-ref": __props.pushRef,
				"tabs-variant": "modern",
				compact: "",
				"include-action": __props.includeAction,
				"include-credential": __props.includeCredential,
				"has-credential-issue": __props.hasCredentialIssue,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => emit("tab-changed", $event))
			}, null, 8, [
				"class",
				"model-value",
				"node-type",
				"push-ref",
				"include-action",
				"include-credential",
				"has-credential-issue"
			])], 2)], 2);
		};
	}
});
var ExperimentalEmbeddedNdvHeader_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1f41t_125",
	title: "_title_1f41t_129",
	disabled: "_disabled_1f41t_137",
	titleText: "_titleText_1f41t_141",
	subTitleText: "_subTitleText_1f41t_153",
	tabsContainer: "_tabsContainer_1f41t_162"
};
var ExperimentalEmbeddedNdvHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExperimentalEmbeddedNdvHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExperimentalEmbeddedNdvHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/NodeActionsList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["onClick"];
var NodeActionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeActionsList",
	props: { node: {} },
	emits: ["actionSelected"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const { generateMergedNodesAndActions } = useActionsGenerator();
		const { parseCategoryActions, getActionData } = useActions();
		const i18n = useI18n();
		const selectedActionRef = ref();
		const nodeType = computed(() => nodeTypesStore.getNodeType(__props.node.type, __props.node.typeVersion));
		const options = computed(() => {
			const { actions } = generateMergedNodesAndActions(nodeType.value ? [nodeType.value] : [], []);
			return parseCategoryActions(Object.values(actions).flatMap((typeDescriptions) => typeDescriptions.filter(({ actionKey }) => actionKey !== CUSTOM_API_CALL_KEY).map((typeDescription) => ({
				type: "action",
				subcategory: typeDescription.actionKey,
				key: typeDescription.actionKey,
				properties: typeDescription
			}))), i18n.baseText("nodeCreator.actionsCategory.actions"), true).map((action) => {
				if (action.type !== "action") return {
					action,
					isSelected: false
				};
				const data = getActionData(action.properties).value;
				let isSelected = true;
				for (const [key, value] of Object.entries(data)) isSelected = isSelected && __props.node.parameters[key] === value;
				return {
					action,
					isSelected
				};
			});
		});
		function handleClickOption(option) {
			if (option.type !== "action") return;
			emit("actionSelected", getActionData(option.properties).value);
		}
		function handleSelectedItemRef(el) {
			if (el instanceof HTMLDivElement) selectedActionRef.value = el;
		}
		watch(selectedActionRef, (selected) => {
			selected?.scrollIntoView();
		}, { flush: "post" });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (option) => {
				return openBlock(), createElementBlock(Fragment, { key: option.action.key }, [option.action.type === "label" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					tag: "div",
					class: normalizeClass(_ctx.$style.label),
					size: "xsmall",
					color: "text-base",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(option.action.key), 1)]),
					_: 2
				}, 1032, ["class"])) : option.action.type === "action" ? (openBlock(), createElementBlock("div", {
					key: 1,
					ref_for: true,
					ref: option.isSelected ? handleSelectedItemRef : void 0,
					class: normalizeClass({
						[_ctx.$style.option]: true,
						[_ctx.$style.selected]: option.isSelected
					}),
					role: "button",
					onClick: ($event) => handleClickOption(option.action)
				}, [
					createVNode(NodeIcon_default, {
						size: 20,
						"node-type": nodeType.value
					}, null, 8, ["node-type"]),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: "",
						class: normalizeClass(_ctx.$style.optionText)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(option.action.properties.displayName), 1)]),
						_: 2
					}, 1032, ["class"]),
					option.isSelected ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "check",
						color: "primary"
					})) : createCommentVNode("", true)
				], 10, _hoisted_1$3)) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var NodeActionsList_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_617qw_125",
	label: "_label_617qw_129",
	option: "_option_617qw_134",
	selected: "_selected_617qw_141",
	optionText: "_optionText_617qw_145"
};
var NodeActionsList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeActionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeActionsList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/settings/components/NodeSettingsInvalidNodeWarning.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "mt-s mb-xs" };
var _hoisted_2$2 = ["href", "textContent"];
var NodeSettingsInvalidNodeWarning_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeSettingsInvalidNodeWarning",
	props: {
		node: {},
		previewMode: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const ndvStore = injectNDVStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const usersStore = useUsersStore();
		const workflowId = useWorkflowId();
		const isCommunityNode = computed(() => isCommunityPackageName(__props.node.type));
		const isVerifiedCommunityNode = computed(() => isCommunityPackageName(__props.node.type) && nodeTypesStore.communityNodeType(__props.node.type)?.isOfficialNode);
		const npmPackage = computed(() => removePreviewToken(__props.node.type.split(".")[0]));
		const isAdminOrOwner = computed(() => usersStore.isAdminOrOwner);
		const { getQuickConnectOptionByPackageName } = useQuickConnect();
		const quickConnect = computed(() => getQuickConnectOptionByPackageName(npmPackage.value));
		const { installNode, loading } = useInstallNode();
		const isNodeDefined = computed(() => !!nodeTypesStore.nodeTypes[__props.node.type]);
		async function onViewDetailsClick() {
			telemetry.track("user clicked cnr docs link", {
				source: "missing node modal source",
				package_name: __props.node.type.split(".")[0],
				node_type: __props.node.type
			});
			if (isVerifiedCommunityNode.value) await nodeCreatorStore.openNodeCreatorWithNode(workflowId.value, __props.node.name);
			else if (npmPackage.value) window.open(`https://www.npmjs.com/package/${npmPackage.value}`, "_blank");
		}
		async function onInstallClick() {
			telemetry.track("user clicked cnr install button", {
				source: "missing node modal source",
				package_name: npmPackage.value,
				node_type: __props.node.type
			});
			if (isVerifiedCommunityNode.value) await installNode({
				type: "verified",
				packageName: npmPackage.value,
				nodeType: __props.node.type,
				telemetry: {
					source: "missing node modal source",
					hasQuickConnect: quickConnect.value !== void 0
				}
			});
			else uiStore.openModalWithData({
				name: COMMUNITY_PACKAGE_INSTALL_MODAL_KEY,
				data: {
					packageName: npmPackage.value,
					disableInput: true,
					hideSuggestion: true,
					nodeType: __props.node.type
				}
			});
		}
		watch(isNodeDefined, () => {
			if (isNodeDefined.value) ndvStore.value.unsetActiveNodeName();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.nodeIsNotValid) }, [
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.warningIcon) }, [createVNode(unref(N8nIcon_default), { icon: "triangle-alert" })], 2),
				createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-dark",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.previewMode ? unref(i18n).baseText("nodeSettings.communityNodeUnknown.title.preview") : unref(i18n).baseText("nodeSettings.communityNodeUnknown.title")), 1)]),
					_: 1
				})]),
				isCommunityNode.value && !__props.previewMode ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.descriptionContainer)
				}, [createVNode(unref(I18nT), {
					keypath: "nodeSettings.communityNodeUnknown.description",
					tag: "span",
					scope: "global"
				}, {
					action: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "medium",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(npmPackage.value), 1)]),
						_: 1
					})]),
					_: 1
				}), isAdminOrOwner.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.communityNodeActionsContainer)
				}, [isAdminOrOwner.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					icon: "hard-drive-download",
					"data-test-id": "install-community-node-button",
					loading: unref(loading),
					disabled: unref(loading),
					onClick: onInstallClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.installButton.label")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
					variant: "subtle",
					icon: "external-link",
					onClick: onViewDetailsClick,
					"data-test-id": "view-details-button"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.viewDetailsButton.label")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createBlock(ContactAdministratorToInstall_default, {
					key: 1,
					box: false
				}))], 2)) : !__props.previewMode ? (openBlock(), createBlock(unref(I18nT), {
					key: 1,
					keypath: "nodeSettings.nodeTypeUnknown.description",
					tag: "span",
					scope: "global"
				}, {
					action: withCtx(() => [createBaseVNode("a", {
						href: unref(CUSTOM_NODES_DOCS_URL),
						target: "_blank",
						textContent: toDisplayString(unref(i18n).baseText("nodeSettings.nodeTypeUnknown.description.customNode"))
					}, null, 8, _hoisted_2$2)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var NodeSettingsInvalidNodeWarning_vue_vue_type_style_index_0_lang_module_default = {
	communityNodeActionsContainer: "_communityNodeActionsContainer_10r04_125",
	nodeIsNotValid: "_nodeIsNotValid_10r04_130",
	warningIcon: "_warningIcon_10r04_141",
	descriptionContainer: "_descriptionContainer_10r04_146"
};
var NodeSettingsInvalidNodeWarning_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeSettingsInvalidNodeWarning_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeSettingsInvalidNodeWarning_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/dataTable/components/NodeStorageLimitCallout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
//#endregion
//#region src/features/core/dataTable/components/NodeStorageLimitCallout.vue
var NodeStorageLimitCallout_default = /* @__PURE__ */ defineComponent({
	__name: "NodeStorageLimitCallout",
	setup(__props) {
		const i18n = useI18n();
		const nvdStore = injectNDVStore();
		const dataTableStore = useDataTableStore();
		const calloutType = computed(() => {
			if (!DATA_TABLE_NODES.includes(nvdStore.value.activeNode?.type ?? "")) return null;
			switch (dataTableStore.dataTableSizeLimitState) {
				case "error": return "danger";
				case "warn": return "warning";
				default: return null;
			}
		});
		return (_ctx, _cache) => {
			return calloutType.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: calloutType.value,
				class: "mt-xs"
			}, {
				default: withCtx(() => [calloutType.value === "danger" ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(i18n).baseText("dataTable.banner.storageLimitError.message", { interpolate: { usage: `${unref(dataTableStore).dataTableSize} / ${unref(dataTableStore).maxSizeMB}MB` } })), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(i18n).baseText("dataTable.banner.storageLimitWarning.message", { interpolate: { usage: `${unref(dataTableStore).dataTableSize} / ${unref(dataTableStore).maxSizeMB}MB` } })), 1))]),
				_: 1
			}, 8, ["theme"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/NodeTitle.vue?vue&type=script&setup=true&lang.ts
var NodeTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeTitle",
	props: {
		modelValue: { default: "" },
		nodeType: { default: void 0 },
		iconSource: { default: void 0 },
		readOnly: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:model-value"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function onRename(value) {
			if (value.trim() !== "") emit("update:model-value", value.trim());
		}
		const wrapperRef = useTemplateRef("wrapperRef");
		const { width } = useElementSize$1(wrapperRef);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "node-title-container"
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconWrapper) }, [!__props.iconSource ? (openBlock(), createBlock(NodeIcon_default, {
				key: 0,
				"node-type": __props.nodeType,
				size: 18,
				"show-tooltip": true,
				"tooltip-position": "left"
			}, null, 8, ["node-type"])) : (openBlock(), createBlock(NodeIcon_default, {
				key: 1,
				"icon-source": __props.iconSource,
				"node-type": __props.nodeType,
				size: 18,
				"show-tooltip": true,
				"tooltip-position": "left"
			}, null, 8, ["icon-source", "node-type"]))], 2), createBaseVNode("div", {
				ref_key: "wrapperRef",
				ref: wrapperRef,
				class: normalizeClass(_ctx.$style.textWrapper)
			}, [createVNode(unref(N8nInlineTextEdit_default), {
				"max-width": unref(width),
				"model-value": __props.modelValue,
				"read-only": __props.readOnly,
				"onUpdate:modelValue": onRename
			}, null, 8, [
				"max-width",
				"model-value",
				"read-only"
			])], 2)], 2);
		};
	}
});
var NodeTitle_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_jnhsg_125",
	textWrapper: "_textWrapper_jnhsg_134",
	iconWrapper: "_iconWrapper_jnhsg_139"
};
var NodeTitle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeTitle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeTitle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/settings/components/NodeSettings.vue?vue&type=script&setup=true&lang.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var _hoisted_1 = ["data-has-output-connection"];
var _hoisted_2 = { class: "header-side-menu" };
var _hoisted_3 = {
	key: 3,
	class: "no-parameters"
};
var _hoisted_4 = {
	key: 4,
	class: "parameter-item parameter-notice",
	"data-test-id": "node-parameters-http-notice"
};
var _hoisted_5 = {
	class: "node-version",
	"data-test-id": "node-version"
};
var NodeSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeSettings",
	props: {
		eventBus: {},
		dragging: { type: Boolean },
		pushRef: {},
		readOnly: { type: Boolean },
		foreignCredentials: {},
		blockUI: { type: Boolean },
		executable: { type: Boolean },
		inputSize: { default: 0 },
		activeNode: { default: void 0 },
		isEmbeddedInCanvas: {
			type: Boolean,
			default: false
		},
		subTitle: { default: void 0 },
		extraTabsClassName: {},
		extraParameterWrapperClassName: {},
		isNdvV2: {
			type: Boolean,
			default: false
		},
		hideExecute: {
			type: Boolean,
			default: false
		},
		hideDocs: {
			type: Boolean,
			default: true
		},
		hideSubConnections: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"stopExecution",
		"valueChanged",
		"switchSelectedNode",
		"openConnectionNodeCreator",
		"activate",
		"execute",
		"captureWheelBody",
		"dblclickHeader"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		useSlots();
		const nodeValues = ref(getNodeSettingsInitialValues());
		const nodeTypesStore = useNodeTypesStore();
		const ndvStore = injectNDVStore();
		const workflowsListStore = useWorkflowsListStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const credentialsStore = useCredentialsStore();
		const historyStore = useHistoryStore();
		const { aiAssistant, instanceAi } = useEditorContext();
		const hideCredentialHelp = computed(() => !aiAssistant.value && !instanceAi.value);
		const telemetry = useTelemetry();
		const nodeHelpers = useNodeHelpers();
		const externalHooks = useExternalHooks();
		const i18n = useI18n();
		const route = useRoute();
		const nodeSettingsParameters = useNodeSettingsParameters();
		const nodeParameterWrapper = useTemplateRef("nodeParameterWrapper");
		const shouldShowStaticScrollbar = ref(false);
		if (props.isEmbeddedInCanvas) useResizeObserver$1(nodeParameterWrapper, () => {
			shouldShowStaticScrollbar.value = (nodeParameterWrapper.value?.scrollHeight ?? 0) > (nodeParameterWrapper.value?.offsetHeight ?? 0);
		});
		const nodeValid = ref(true);
		const openPanel = ref("params");
		const nodeValuesInitialized = ref(false);
		const hiddenIssuesInputs = ref([]);
		const subConnections = ref(null);
		const isDemoRoute = computed(() => route?.name === VIEWS.DEMO);
		const settingsStore = useSettingsStore();
		const { isPreviewMode } = settingsStore;
		const isDemoPreview = computed(() => isDemoRoute.value && isPreviewMode);
		const currentWorkflow = computed(() => workflowsListStore.getWorkflowById(workflowDocumentStore.value.workflowId));
		const hasForeignCredential = computed(() => props.foreignCredentials.length > 0);
		const isHomeProjectTeam = computed(() => currentWorkflow.value?.homeProject?.type === ProjectTypes.Team);
		const isReadOnly = computed(() => props.readOnly || hasForeignCredential.value && !isHomeProjectTeam.value);
		const node = computed(() => props.activeNode ?? ndvStore.value.activeNode);
		const nodeType = computed(() => node.value ? nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion) : null);
		const { areAllCredentialsSet } = useNodeCredentialOptions(node, nodeType, "");
		const { installedPackage, isUpdateCheckAvailable } = useInstalledCommunityPackage(computed(() => node.value?.type));
		const isTriggerNode = computed(() => !!node.value && nodeTypesStore.isTriggerNode(node.value.type));
		const isToolNode = computed(() => !!node.value && nodeTypesStore.isToolNode(node.value.type));
		const isModelNode = computed(() => !!node.value && nodeTypesStore.isModelNode(node.value.type));
		const isExecutable = computed(() => nodeHelpers.isNodeExecutable(node.value, props.executable, props.foreignCredentials));
		const nodeTypeVersions = computed(() => {
			if (!node.value) return [];
			return nodeTypesStore.getNodeVersions(node.value.type);
		});
		const latestVersion = computed(() => Math.max(...nodeTypeVersions.value));
		const isLatestNodeVersion = computed(() => !node.value?.typeVersion || latestVersion.value === node.value.typeVersion);
		const executeButtonTooltip = computed(() => {
			if (node.value && isLatestNodeVersion.value && props.inputSize > 1 && !nodeHelpers.isSingleExecution(node.value.type, node.value.parameters)) return i18n.baseText("nodeSettings.executeButtonTooltip.times", { interpolate: { inputSize: props.inputSize } });
			return "";
		});
		const nodeVersionTag = computed(() => {
			if (!nodeType.value || nodeType.value.hidden) return i18n.baseText("nodeSettings.deprecated");
			if (isLatestNodeVersion.value) return i18n.baseText("nodeSettings.latest");
			return i18n.baseText("nodeSettings.latestVersion", { interpolate: { version: latestVersion.value.toString() } });
		});
		const parameters = computed(() => {
			if (nodeType.value === null) return [];
			return nodeType.value?.properties ?? [];
		});
		const parametersByTab = computed(() => collectParametersByTab(parameters.value, props.isEmbeddedInCanvas));
		const isDisplayingCredentials = computed(() => credentialsStore.getCredentialTypesNodeDescriptions("", nodeType.value).filter((credentialTypeDescription) => displayCredentials(credentialTypeDescription)).length > 0);
		const displayedCredentialTypes = computed(() => credentialsStore.getCredentialTypesNodeDescriptions("", nodeType.value).filter((credentialTypeDescription) => displayCredentials(credentialTypeDescription)).map((desc) => desc.name));
		const { getQuickConnectOptionByCredentialTypes } = useQuickConnect();
		const quickConnect = computed(() => getQuickConnectOptionByCredentialTypes(displayedCredentialTypes.value));
		const showQuickConnectBanner = computed(() => quickConnect.value && !areAllCredentialsSet.value && !isReadOnly.value && !isDemoPreview.value && !props.isEmbeddedInCanvas);
		const showNoParametersNotice = computed(() => !isDisplayingCredentials.value && (parametersByTab.value.params ?? []).filter((item) => item.type !== "notice").length === 0);
		const outputPanelEditMode = computed(() => ndvStore.value.outputPanelEditMode);
		const isCommunityNode = computed(() => !!node.value && isCommunityPackageName(node.value.type));
		const packageName = computed(() => node.value?.type.split(".")[0] ?? "");
		const usedCredentials = computed(() => Object.values(workflowDocumentStore?.value?.usedCredentials ?? {}).filter((credential) => Object.values(node.value?.credentials || []).find((nodeCredential) => nodeCredential.id === credential.id)));
		const credentialOwnerName = computed(() => {
			const credential = usedCredentials.value ? Object.values(usedCredentials.value).find((credential) => credential.id === props.foreignCredentials[0]) : void 0;
			return credentialsStore.getCredentialOwnerName(credential);
		});
		const featureRequestUrl = computed(() => {
			if (!nodeType.value) return "";
			return `${BASE_NODE_SURVEY_URL}${nodeType.value.name}`;
		});
		const hasOutputConnection = computed(() => {
			if (!node.value) return false;
			const outgoingConnections = workflowDocumentStore?.value?.outgoingConnectionsByNodeName(node.value.name) ?? {};
			return (Object.values(outgoingConnections)?.[0]?.[0] ?? []).length > 0;
		});
		const valueChanged = (parameterData) => {
			let newValue;
			if (parameterData.hasOwnProperty("value")) newValue = parameterData.value;
			else newValue = (0, import_get.default)(nodeValues.value, parameterData.name);
			const nodeNameBefore = parameterData.node || node.value?.name;
			if (!nodeNameBefore) return;
			const _node = workflowDocumentStore?.value?.getNodeByName(nodeNameBefore) ?? null;
			if (_node === null) return;
			if (parameterData.name === "name") emit("valueChanged", {
				value: newValue,
				oldValue: nodeNameBefore,
				name: parameterData.name
			});
			else if (parameterData.name === "parameters") {
				const _nodeType = nodeTypesStore.getNodeType(_node.type, _node.typeVersion);
				if (!_nodeType) return;
				let nodeParameters = getNodeParameters(_nodeType.properties, _node.parameters, false, false, _node, _nodeType);
				const oldNodeParameters = Object.assign({}, nodeParameters);
				nodeParameters = deepCopy(nodeParameters);
				if (parameterData.value && typeof parameterData.value === "object") for (const [parameterName, parameterValue] of Object.entries(parameterData.value)) {
					newValue = parameterValue;
					const parameterPath = nodeSettingsParameters.updateParameterByPath(parameterName, newValue, nodeParameters, _nodeType, _node.typeVersion);
					externalHooks.run("nodeSettings.valueChanged", {
						parameterPath,
						newValue,
						parameters: parameters.value,
						oldNodeParameters
					});
				}
				nodeParameters = getNodeParameters(_nodeType.properties, nodeParameters, true, false, _node, _nodeType);
				for (const key of Object.keys(nodeParameters)) if (nodeParameters?.[key] !== null && nodeParameters?.[key] !== void 0) nodeSettingsParameters.setValue(nodeValues, `parameters.${key}`, nodeParameters[key]);
				if (nodeParameters) {
					const updateInformation = {
						name: _node.name,
						value: nodeParameters
					};
					workflowDocumentStore?.value?.setNodeParameters(updateInformation);
					nodeHelpers.updateNodeParameterIssuesByName(_node.name);
					nodeHelpers.updateNodeCredentialIssuesByName(_node.name);
				}
			} else if (nameIsParameter(parameterData)) nodeSettingsParameters.updateNodeParameter(nodeValues, parameterData, newValue, _node, isToolNode.value);
			else if (parameterData.name.includes(".") || parameterData.name.includes("[")) {
				const topLevelKey = parameterData.name.split(/[.[]/)[0];
				const valueForSetter = newValue === void 0 ? null : newValue;
				nodeSettingsParameters.setValue(nodeValues, parameterData.name, valueForSetter);
				workflowDocumentStore?.value?.setNodeValue({
					name: _node.name,
					key: topLevelKey,
					value: nodeValues.value[topLevelKey]
				});
			} else {
				nodeValues.value = {
					...nodeValues.value,
					[parameterData.name]: newValue
				};
				const updateInformation = {
					name: _node.name,
					key: parameterData.name,
					value: newValue
				};
				workflowDocumentStore?.value?.setNodeValue(updateInformation);
			}
		};
		const setHttpNodeParameters = (parameters) => {
			try {
				valueChanged({
					node: node.value?.name,
					name: "parameters",
					value: parameters
				});
			} catch (error) {
				console.error("Failed to apply cURL parameters to node:", error);
			}
		};
		const onSwitchSelectedNode = (node) => {
			emit("switchSelectedNode", node);
		};
		const onOpenConnectionNodeCreator = (nodeName, connectionType, connectionIndex = 0) => {
			emit("openConnectionNodeCreator", nodeName, connectionType, connectionIndex);
		};
		const populateHiddenIssuesSet = () => {
			if (!node.value || !workflowDocumentStore?.value?.isNodePristine(node.value.name)) return;
			hiddenIssuesInputs.value.push("credentials");
			parametersByTab.value.params.forEach((parameter) => {
				hiddenIssuesInputs.value.push(parameter.name);
			});
			workflowDocumentStore?.value?.setNodePristine(node.value.name, false);
		};
		const nodeSettings = computed(() => createCommonNodeSettings(isToolNode.value || isModelNode.value, i18n.baseText.bind(i18n), settingsStore.isOtelCustomSpanAttributesEnabled));
		const ndvAgentConfig = inject(NdvAgentConfigKey, null);
		const isAgentNode = computed(() => isAgentNodeV2(node.value));
		const showAgentNdvControls = computed(() => isAgentNode.value && ndvAgentConfig !== null);
		const iconSource = useNodeIconSource(nodeType, node);
		const onParameterBlur = (parameterName) => {
			hiddenIssuesInputs.value = hiddenIssuesInputs.value.filter((name) => name !== parameterName);
		};
		const onWorkflowActivate = () => {
			hiddenIssuesInputs.value = [];
			emit("activate");
		};
		const onNodeExecute = () => {
			hiddenIssuesInputs.value = [];
			subConnections.value?.showNodeInputsIssues();
			emit("execute");
		};
		const credentialSelected = (updateInformation) => {
			workflowDocumentStore?.value?.updateNodeProperties(updateInformation);
			const node = workflowDocumentStore?.value?.getNodeByName(updateInformation.name) ?? null;
			if (node) nodeHelpers.updateNodeCredentialIssues(node);
			externalHooks.run("nodeSettings.credentialSelected", { updateInformation });
		};
		const nameChanged = (name) => {
			if (node.value) historyStore.pushCommandToUndo(new RenameNodeCommand(node.value.name, name, Date.now()));
			valueChanged({
				value: name,
				name: "name"
			});
		};
		const setNodeValues = () => {
			if (!node.value) {
				nodeValuesInitialized.value = true;
				return;
			}
			if (nodeType.value !== null) {
				nodeValid.value = true;
				nodeValues.value = collectSettings(node.value, nodeSettings.value);
			} else nodeValid.value = false;
			nodeValuesInitialized.value = true;
		};
		const onStopExecution = () => {
			emit("stopExecution");
		};
		const openSettings = () => {
			openPanel.value = "settings";
		};
		const onTabSelect = (tab) => {
			openPanel.value = tab;
		};
		const onFeatureRequestClick = () => {
			window.open(featureRequestUrl.value, "_blank");
			if (node.value) telemetry.track("User clicked ndv link", {
				node_type: node.value.type,
				workflow_id: workflowDocumentStore.value.workflowId,
				push_ref: props.pushRef,
				pane: NodeConnectionTypes.Main,
				type: "i-wish-this-node-would"
			});
		};
		watch(node, () => {
			setNodeValues();
		});
		onMounted(async () => {
			populateHiddenIssuesSet();
			setNodeValues();
			props.eventBus?.on("openSettings", openSettings);
			if (node.value !== null) nodeHelpers.updateNodeParameterIssues(node.value, nodeType.value);
			importCurlEventBus.on("setHttpNodeParameters", setHttpNodeParameters);
			ndvEventBus.on("updateParameterValue", valueChanged);
		});
		onBeforeUnmount(() => {
			props.eventBus?.off("openSettings", openSettings);
			importCurlEventBus.off("setHttpNodeParameters", setHttpNodeParameters);
			ndvEventBus.off("updateParameterValue", valueChanged);
		});
		function displayCredentials(credentialTypeDescription) {
			if (credentialTypeDescription.displayOptions === void 0) return true;
			return !!node.value && nodeHelpers.displayParameter(node.value.parameters, credentialTypeDescription, "", node.value);
		}
		function handleSelectAction(params) {
			for (const [key, value] of Object.entries(params)) valueChanged({
				name: `parameters.${key}`,
				value
			});
			if (isDisplayingCredentials.value && !areAllCredentialsSet.value) {
				onTabSelect("credential");
				return;
			}
			if (parametersByTab.value.params.length > 0) onTabSelect("params");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					"node-settings": true,
					dragging: __props.dragging,
					embedded: props.isEmbeddedInCanvas
				}),
				"data-has-output-connection": hasOutputConnection.value
			}, [
				__props.isEmbeddedInCanvas && node.value ? (openBlock(), createBlock(ExperimentalEmbeddedNdvHeader_default, {
					key: 0,
					node: node.value,
					"selected-tab": openPanel.value,
					"read-only": __props.readOnly,
					"node-type": nodeType.value,
					"push-ref": __props.pushRef,
					"sub-title": __props.subTitle,
					"extra-tabs-class-name": __props.extraTabsClassName,
					"include-action": parametersByTab.value.action.length > 0,
					"include-credential": isDisplayingCredentials.value,
					"has-credential-issue": !unref(areAllCredentialsSet),
					onNameChanged: nameChanged,
					onTabChanged: onTabSelect,
					onDblclickTitle: _cache[0] || (_cache[0] = ($event) => emit("dblclickHeader", $event))
				}, {
					actions: withCtx(() => [renderSlot(_ctx.$slots, "actions", {}, void 0, true)]),
					_: 3
				}, 8, [
					"node",
					"selected-tab",
					"read-only",
					"node-type",
					"push-ref",
					"sub-title",
					"extra-tabs-class-name",
					"include-action",
					"include-credential",
					"has-credential-issue"
				])) : !__props.isNdvV2 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.header)
				}, [createBaseVNode("div", _hoisted_2, [node.value ? (openBlock(), createBlock(NodeTitle_default, {
					key: 0,
					class: "node-name",
					"model-value": node.value.name,
					"icon-source": unref(iconSource),
					"read-only": isReadOnly.value,
					"node-type": nodeType.value,
					"onUpdate:modelValue": nameChanged
				}, null, 8, [
					"model-value",
					"icon-source",
					"read-only",
					"node-type"
				])) : createCommentVNode("", true), isExecutable.value && !__props.blockUI && node.value && nodeValid.value ? (openBlock(), createBlock(NodeExecuteButton_default, {
					key: 1,
					"data-test-id": "node-execute-button",
					"node-name": node.value.name,
					disabled: outputPanelEditMode.value.enabled && !isTriggerNode.value,
					tooltip: executeButtonTooltip.value,
					size: "small",
					"telemetry-source": "parameters",
					onExecute: onNodeExecute,
					onStopExecution,
					onValueChanged: valueChanged
				}, null, 8, [
					"node-name",
					"disabled",
					"tooltip"
				])) : createCommentVNode("", true)]), node.value && nodeValid.value ? (openBlock(), createBlock(NodeSettingsTabs_default, {
					key: 0,
					"model-value": openPanel.value,
					"node-type": nodeType.value,
					"push-ref": __props.pushRef,
					"onUpdate:modelValue": onTabSelect
				}, null, 8, [
					"model-value",
					"node-type",
					"push-ref"
				])) : createCommentVNode("", true)], 2)) : node.value && nodeValid.value ? (openBlock(), createBlock(NodeSettingsHeader_default, {
					key: 2,
					"selected-tab": openPanel.value,
					"node-name": node.value.name,
					"node-type": nodeType.value,
					"execute-button-tooltip": executeButtonTooltip.value,
					"hide-execute": props.hideExecute || !isExecutable.value || __props.blockUI || !node.value || !nodeValid.value,
					"disable-execute": outputPanelEditMode.value.enabled && !isTriggerNode.value,
					"hide-tabs": !nodeValid.value,
					"hide-docs": props.hideDocs,
					"push-ref": __props.pushRef,
					onExecute: onNodeExecute,
					onStopExecution,
					onValueChanged: valueChanged,
					onTabChanged: onTabSelect
				}, null, 8, [
					"selected-tab",
					"node-name",
					"node-type",
					"execute-button-tooltip",
					"hide-execute",
					"disable-execute",
					"hide-tabs",
					"hide-docs",
					"push-ref"
				])) : createCommentVNode("", true),
				node.value && !nodeValid.value ? (openBlock(), createBlock(NodeSettingsInvalidNodeWarning_default, {
					key: 3,
					node: node.value,
					"preview-mode": isDemoPreview.value
				}, null, 8, ["node", "preview-mode"])) : createCommentVNode("", true),
				node.value && nodeValid.value ? (openBlock(), createElementBlock("div", {
					key: 4,
					ref_key: "nodeParameterWrapper",
					ref: nodeParameterWrapper,
					class: normalizeClass([
						"node-parameters-wrapper",
						shouldShowStaticScrollbar.value ? "with-static-scrollbar" : "",
						{ "ndv-v2": __props.isNdvV2 },
						__props.extraParameterWrapperClassName ?? ""
					]),
					"data-test-id": "node-parameters",
					onWheelCapture: _cache[2] || (_cache[2] = ($event) => emit("captureWheelBody", $event))
				}, [
					hasForeignCredential.value && !isHomeProjectTeam.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						content: unref(i18n).baseText("nodeSettings.hasForeignCredential", { interpolate: { owner: credentialOwnerName.value } })
					}, null, 8, ["content"])) : createCommentVNode("", true),
					createVNode(FreeAiCreditsCallout_default),
					createVNode(NodeStorageLimitCallout_default),
					openPanel.value === "action" ? (openBlock(), createBlock(NodeActionsList_default, {
						key: 1,
						class: "action-tab",
						node: node.value,
						onActionSelected: handleSelectAction
					}, null, 8, ["node"])) : createCommentVNode("", true),
					openPanel.value === "credential" ? (openBlock(), createBlock(NodeCredentials_default, {
						key: 2,
						node: node.value,
						readonly: isReadOnly.value,
						"show-all": true,
						"hide-issues": hiddenIssuesInputs.value.includes("credentials"),
						"hide-ask-assistant": hideCredentialHelp.value,
						onCredentialSelected: credentialSelected,
						onValueChanged: valueChanged,
						onBlur: onParameterBlur
					}, null, 8, [
						"node",
						"readonly",
						"hide-issues",
						"hide-ask-assistant"
					])) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", null, [
						showAgentNdvControls.value ? (openBlock(), createBlock(AgentNdvBuilderBanner_default, {
							key: 0,
							"is-read-only": isReadOnly.value,
							"origin-node-id": node.value?.id,
							onSetAgentReference: _cache[1] || (_cache[1] = (value) => valueChanged({
								name: "parameters.agentId",
								value
							}))
						}, null, 8, ["is-read-only", "origin-node-id"])) : createCommentVNode("", true),
						createVNode(NodeWebhooks_default, {
							node: node.value,
							"node-type-description": nodeType.value
						}, null, 8, ["node", "node-type-description"]),
						nodeValuesInitialized.value ? (openBlock(), createBlock(ParameterInputList_default, {
							key: 1,
							parameters: parametersByTab.value.params,
							"hide-delete": true,
							"node-values": nodeValues.value,
							"is-read-only": isReadOnly.value,
							"hidden-issues-inputs": hiddenIssuesInputs.value,
							path: "parameters",
							node: props.activeNode,
							onValueChanged: valueChanged,
							onActivate: onWorkflowActivate,
							onParameterBlur
						}, {
							default: withCtx(() => [showQuickConnectBanner.value ? (openBlock(), createBlock(QuickConnectBanner_default, {
								key: 0,
								text: quickConnect.value?.text ?? "",
								disclaimer: quickConnect.value?.disclaimer,
								class: normalizeClass(_ctx.$style.quickConnectBanner)
							}, null, 8, [
								"text",
								"disclaimer",
								"class"
							])) : createCommentVNode("", true), !__props.isEmbeddedInCanvas && !isDemoPreview.value ? (openBlock(), createBlock(NodeCredentials_default, {
								key: 1,
								node: node.value,
								readonly: isReadOnly.value,
								"show-all": true,
								"hide-issues": hiddenIssuesInputs.value.includes("credentials"),
								"hide-ask-assistant": hideCredentialHelp.value,
								onCredentialSelected: credentialSelected,
								onValueChanged: valueChanged,
								onBlur: onParameterBlur
							}, null, 8, [
								"node",
								"readonly",
								"hide-issues",
								"hide-ask-assistant"
							])) : createCommentVNode("", true)]),
							_: 1
						}, 8, [
							"parameters",
							"node-values",
							"is-read-only",
							"hidden-issues-inputs",
							"node"
						])) : createCommentVNode("", true),
						showAgentNdvControls.value ? (openBlock(), createBlock(AgentNdvReferencedControls_default, {
							key: 2,
							"is-read-only": isReadOnly.value
						}, null, 8, ["is-read-only"])) : createCommentVNode("", true),
						showNoParametersNotice.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.thisNodeDoesNotHaveAnyParameters")), 1)]),
							_: 1
						})])) : createCommentVNode("", true),
						unref(nodeHelpers).isCustomApiCallSelected(nodeValues.value) ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nNotice_default), { content: unref(i18n).baseText("nodeSettings.useTheHttpRequestNode", { interpolate: { nodeTypeDisplayName: nodeType.value?.displayName ?? "" } }) }, null, 8, ["content"])])) : createCommentVNode("", true)
					], 512), [[vShow, openPanel.value === "params"]]),
					withDirectives(createBaseVNode("div", null, [
						unref(isUpdateCheckAvailable) && unref(installedPackage)?.updateAvailable ? (openBlock(), createBlock(CommunityNodeUpdateInfo_default, {
							key: 0,
							"data-test-id": "update-available",
							"package-name": packageName.value,
							style: { "margin-top": "var(--spacing--sm)" },
							source: "node settings"
						}, null, 8, ["package-name"])) : createCommentVNode("", true),
						createVNode(ParameterInputList_default, {
							parameters: parametersByTab.value.settings,
							"node-values": nodeValues.value,
							"is-read-only": isReadOnly.value,
							"hide-delete": true,
							"hidden-issues-inputs": hiddenIssuesInputs.value,
							path: "parameters",
							onValueChanged: valueChanged,
							onParameterBlur
						}, null, 8, [
							"parameters",
							"node-values",
							"is-read-only",
							"hidden-issues-inputs"
						]),
						createVNode(ParameterInputList_default, {
							parameters: nodeSettings.value,
							"hide-delete": true,
							"node-values": nodeValues.value,
							"is-read-only": isReadOnly.value,
							"hidden-issues-inputs": hiddenIssuesInputs.value,
							path: "",
							onValueChanged: valueChanged,
							onParameterBlur
						}, null, 8, [
							"parameters",
							"node-values",
							"is-read-only",
							"hidden-issues-inputs"
						]),
						createBaseVNode("div", _hoisted_5, [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.nodeVersion", { interpolate: {
							node: nodeType.value?.displayName,
							version: (node.value.typeVersion ?? latestVersion.value).toString()
						} })) + " ", 1), createBaseVNode("span", null, "(" + toDisplayString(nodeVersionTag.value) + ")", 1)])
					], 512), [[vShow, openPanel.value === "settings"]]),
					__props.isNdvV2 && featureRequestUrl.value && !__props.isEmbeddedInCanvas ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.featureRequest)
					}, [createBaseVNode("a", {
						target: "_blank",
						onClick: onFeatureRequestClick
					}, [createVNode(unref(N8nIcon_default), { icon: "lightbulb" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)])], 2)) : createCommentVNode("", true)
				], 34)) : createCommentVNode("", true),
				node.value && !__props.hideSubConnections ? (openBlock(), createBlock(NDVSubConnections_default, {
					key: 5,
					ref_key: "subConnections",
					ref: subConnections,
					"root-node": node.value,
					onSwitchSelectedNode,
					onOpenConnectionNodeCreator
				}, null, 8, ["root-node"])) : createCommentVNode("", true),
				createVNode(unref(N8nBlockUi_default), {
					show: __props.blockUI,
					class: normalizeClass({ [_ctx.$style.uiBlockerNdvV2]: __props.isNdvV2 })
				}, null, 8, ["show", "class"]),
				openPanel.value === "settings" && isCommunityNode.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
					key: 6,
					"package-name": packageName.value,
					"show-manage": unref(useUsersStore)().isAdminOrOwner
				}, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
var NodeSettings_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_17oyk_125",
	featureRequest: "_featureRequest_17oyk_129",
	quickConnectBanner: "_quickConnectBanner_17oyk_143",
	uiBlockerNdvV2: "_uiBlockerNdvV2_17oyk_147"
};
var NodeSettings_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeSettings_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-a42861e3"]]);
//#endregion
export { isAgentNodeV2 as a, useAgentNavigation as i, NdvAgentConfigKey as n, useNodeDocsUrl as o, useNdvAgentConfig as r, FreeAiCreditsCallout_default as s, NodeSettings_default as t };
