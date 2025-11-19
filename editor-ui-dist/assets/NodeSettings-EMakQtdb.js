import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, F as getCurrentInstance, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, L as h, M as createVNode, P as defineComponent, Pt as reactive, Sn as toDisplayString, T as createBlock, Ut as toValue, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, p as vShow, pt as useSlots, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { E as useElementSize, G as isClient, J as noop, K as isIOS, N as useResizeObserver, Q as toRef, W as directiveHooks, Y as notNullish, _t as I18nT, ct as isVue2, et as toValue$1, g as onClickOutside, gt as useI18n, it as useThrottleFn, nt as tryOnScopeDispose, q as isObject, rt as useDebounceFn, tt as tryOnMounted } from "./_MapCache-pT3vKw8Z.js";
import { E as N8nNotice_default, Fn as N8nCallout_default, In as N8nText_default, Ln as N8nButton_default, Q as N8nBlockUi_default, Tt as N8nIconButton_default, a as N8nInlineTextEdit_default, g as N8nTabs_default, vt as N8nTooltip_default, x as N8nRadioButtons_default, zn as N8nIcon_default, zt as ElCollapseTransition } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { r as require_get, y as useRoute } from "./truncate-1c7Iwk7N.js";
import { E as TitledList_default, T as useNodeCredentialOptions, d as collectParametersByTab, f as collectSettings, h as getNodeSettingsInitialValues, p as createCommonNodeSettings, t as ParameterInputList_default, u as useNodeSettingsParameters, v as nameIsParameter, w as NodeCredentials_default } from "./ParameterInputList-wGmUNHBl.js";
import { n as ElRow, t as ElCol } from "./col-8Hwwbr76.js";
import { Bo as useSettingsStore, Cr as useHistoryStore, Di as importCurlEventBus, En as useProjectsStore, Ht as useCredentialsStore, Mr as RenameNodeCommand, Ni as useUIStore, On as ProjectTypes, Ri as COMMUNITY_NODES_INSTALLATION_DOCS_URL, Sn as injectWorkflowState, Vi as COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, a as useNDVStore, er as useUsersStore, it as useActionsGenerator, mn as useWorkflowHelpers, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, vt as removePreviewToken, xn as useNodeHelpers } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { Hi as deepCopy, I as CUSTOM_API_CALL_KEY, Q as CHAT_TRIGGER_NODE_TYPE, St as FORM_TRIGGER_NODE_TYPE, Ui as isCommunityPackageName, _i as getNodeInputs, c as BASE_NODE_SURVEY_URL, ea as NodeConnectionTypes, en as OPEN_URL_PANEL_TRIGGER_NODE_TYPES, f as CUSTOM_NODES_DOCS_URL, mo as VIEWS, rn as PRODUCTION_ONLY_TRIGGER_NODE_TYPES, st as DATA_TABLE_NODES, u as BUILTIN_NODES_DOCS_URL, x as NPM_PACKAGE_DOCS_BASE_URL, ya as OPEN_AI_API_CREDENTIAL_TYPE, yi as getNodeParameters, zt as MCP_TRIGGER_NODE_TYPE } from "./constants-C_oOJnqT.js";
import { n as ndvEventBus } from "./assistant.store-CKoUz8Lx.js";
import { t as useDebounce } from "./useDebounce-DyoINrYS.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import { t as useNodeCreatorStore } from "./nodeCreator.store-BXjpGwrk.js";
import { t as getNodeIconSource } from "./nodeIcon-BWTKM7V3.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
import { t as NodeIcon_default } from "./NodeIcon-B-yC7jws.js";
import { t as useDataTableStore } from "./dataTable.store-BCpzMJoX.js";
import { a as useInstallNode, i as useInstalledCommunityPackage, n as CommunityNodeFooter_default, r as ContactAdministratorToInstall_default, t as CommunityNodeUpdateInfo_default } from "./CommunityNodeUpdateInfo-CLRaJk1W.js";
import { n as NodeExecuteButton_default } from "./VirtualSchema-DLhLWlaa.js";
import { t as useActions } from "./useActions-yIxD_z2G.js";
var _hoisted_1$6 = { key: 2 };
var LANGCHAIN_NODES_PREFIX = "@n8n/n8n-nodes-langchain.";
var N8N_NODES_PREFIX = "@n8n/n8n-nodes.";
var FreeAiCreditsCallout_default = /* @__PURE__ */ defineComponent({
	__name: "FreeAiCreditsCallout",
	props: { credentialTypeName: {} },
	setup(__props) {
		const props = __props;
		const NODES_WITH_OPEN_AI_API_CREDENTIAL = [
			`${LANGCHAIN_NODES_PREFIX}openAi`,
			`${LANGCHAIN_NODES_PREFIX}embeddingsOpenAi`,
			`${LANGCHAIN_NODES_PREFIX}lmChatOpenAi`,
			`${N8N_NODES_PREFIX}openAi`
		];
		const showSuccessCallout = ref(false);
		const claimingCredits = ref(false);
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const usersStore = useUsersStore();
		const ndvStore = useNDVStore();
		const projectsStore = useProjectsStore();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const toast = useToast();
		const userHasOpenAiCredentialAlready = computed(() => !!credentialsStore.allCredentials.filter((credential) => credential.type === OPEN_AI_API_CREDENTIAL_TYPE).length);
		const isEditingOpenAiCredential = computed(() => props.credentialTypeName && props.credentialTypeName === "openAiApi");
		const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
		const activeNodeHasOpenAiApiCredential = computed(() => ndvStore.activeNode?.type && NODES_WITH_OPEN_AI_API_CREDENTIAL.includes(ndvStore.activeNode.type));
		const userCanClaimOpenAiCredits = computed(() => {
			return settingsStore.isAiCreditsEnabled && (activeNodeHasOpenAiApiCredential.value || isEditingOpenAiCredential.value) && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value;
		});
		const onClaimCreditsClicked = async () => {
			claimingCredits.value = true;
			try {
				await credentialsStore.claimFreeAiCredits(projectsStore.currentProject?.id);
				if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
				telemetry.track("User claimed OpenAI credits");
				showSuccessCallout.value = true;
			} catch (e) {
				toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), i18n.baseText("freeAi.credits.showError.claim.message"));
			} finally {
				claimingCredits.value = false;
			}
		};
		return (_ctx, _cache) => {
			return userCanClaimOpenAiCredits.value && !showSuccessCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				icon: "circle-alert",
				class: "mt-xs"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "tertiary",
					size: "small",
					label: unref(i18n).baseText("freeAi.credits.callout.claim.button.label"),
					loading: claimingCredits.value,
					onClick: onClaimCreditsClicked
				}, null, 8, ["label", "loading"])]),
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.claim.title", { interpolate: { credits: unref(settingsStore).aiCreditsQuota } })) + " ", 1)]),
				_: 1
			})) : showSuccessCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "success",
				icon: "circle-check",
				class: "mt-xs"
			}, {
				default: withCtx(() => [
					createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part1", { interpolate: { credits: unref(settingsStore).aiCreditsQuota } })), 1)]),
						_: 1
					}),
					_cache[0] || (_cache[0] = createTextVNode(" \xA0 ")),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.title.part2")), 1)]),
						_: 1
					})
				]),
				_: 1
			})) : (openBlock(), createElementBlock("div", _hoisted_1$6));
		};
	}
});
var OnClickOutside = /* @__PURE__ */ defineComponent({
	name: "OnClickOutside",
	props: ["as", "options"],
	emits: ["trigger"],
	setup(props, { slots, emit }) {
		const target = ref();
		onClickOutside(target, (e) => {
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
var _hoisted_1$5 = ["data-test-id"];
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
		const workflowsStore = useWorkflowsStore();
		const nodeTypesStore = useNodeTypesStore();
		const nodeHelpers = useNodeHelpers();
		const i18n = useI18n();
		const { debounce } = useDebounce();
		const emit = __emit;
		const possibleConnections = ref([]);
		const expandedGroups = ref([]);
		const shouldShowNodeInputIssues = ref(false);
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.rootNode.type, props.rootNode.typeVersion));
		const nodeData = computed(() => workflowsStore.getNodeByName(props.rootNode.name));
		const ndvStore = useNDVStore();
		const workflowObject = computed(() => workflowsStore.workflowObject);
		const nodeInputIssues = computed(() => {
			return nodeHelpers.getNodeIssues(nodeType.value, props.rootNode, workflowObject.value, [
				"typeUnknown",
				"parameters",
				"credentials",
				"execution"
			])?.input ?? {};
		});
		const connectedNodes$1 = computed(() => {
			const typeIndexCounters = {};
			return possibleConnections.value.reduce((acc, connection) => {
				const typeIndex = typeIndexCounters[connection.type] ?? 0;
				typeIndexCounters[connection.type] = typeIndex + 1;
				const nodes = getINodesFromNames(((workflowObject.value.connectionsByDestinationNode[props.rootNode.name]?.[connection.type] ?? [])[typeIndex] ?? []).map((conn) => conn.node));
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
		function getConnectionConfig(connectionType$1, typeIndex) {
			return possibleConnections.value.filter((connection) => connection.type === connectionType$1).at(typeIndex);
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
				const node = workflowsStore.getNodeByName(name);
				if (node) {
					const matchedNodeType = nodeTypesStore.getNodeType(node.type);
					if (matchedNodeType) {
						const issues = nodeHelpers.getNodeIssues(matchedNodeType, node, workflowObject.value);
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
			if (!nodeType.value || !props.rootNode) return [];
			return getNodeInputs(workflowObject.value, props.rootNode, nodeType.value).filter((input) => {
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
			const connectionNodes = connectedNodes$1.value[connectionContext.key];
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
		watch([nodeData, ndvStore.activeNode], debounce(() => setTimeout(() => {
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
						style: normalizeStyle(`--nodes-length: ${connectedNodes$1.value[getConnectionKey(connection, index)].length}`),
						onClick: ($event) => expandConnectionGroup(getConnectionContext(connection, index), true)
					}, [(connectedNodes$1.value[getConnectionKey(connection, index)].length >= 1 ? connection.maxConnections !== 1 : true) ? (openBlock(), createElementBlock("div", {
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
						disabled: shouldShowConnectionTooltip(getConnectionContext(connection, index)) && connectedNodes$1.value[getConnectionKey(connection, index)].length >= 1
					}, {
						content: withCtx(() => [createTextVNode(" Add " + toDisplayString(connection.displayName) + " ", 1), hasInputIssues(getConnectionContext(connection, index)) ? (openBlock(), createBlock(TitledList_default, {
							key: 0,
							title: `${unref(i18n).baseText("node.issues")}:`,
							items: nodeInputIssues.value[connection.type]
						}, null, 8, ["title", "items"])) : createCommentVNode("", true)]),
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							size: "medium",
							icon: "plus",
							type: "tertiary",
							"data-test-id": `add-subnode-${getConnectionKey(connection, index)}`
						}, null, 8, ["data-test-id"])]),
						_: 2
					}, 1032, ["disabled"])], 10, _hoisted_4$2)) : createCommentVNode("", true), connectedNodes$1.value[getConnectionKey(connection, index)].length > 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass({
							[_ctx.$style.connectedNodes]: true,
							[_ctx.$style.connectedNodesMultiple]: connectedNodes$1.value[getConnectionKey(connection, index)].length > 1
						})
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes$1.value[getConnectionKey(connection, index)], (node, nodeIndex) => {
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
				}, 1032, ["onTrigger"])], 2)], 8, _hoisted_1$5);
			}), 128))], 6)], 2)) : createCommentVNode("", true);
		};
	}
});
const container$1 = "_container_1kr6k_140";
const connections = "_connections_1kr6k_148";
const connectionType = "_connectionType_1kr6k_161";
const connectionLabel = "_connectionLabel_1kr6k_168";
const hasIssues = "_hasIssues_1kr6k_174";
const connectedNodesWrapper = "_connectedNodesWrapper_1kr6k_178";
const plusButton = "_plusButton_1kr6k_186";
const connectedNodesWrapperExpanded = "_connectedNodesWrapperExpanded_1kr6k_204";
const connectedNodesMultiple = "_connectedNodesMultiple_1kr6k_210";
const connectedNode = "_connectedNode_1kr6k_178";
const connectedNodes = "_connectedNodes_1kr6k_178";
const nodeWrapper = "_nodeWrapper_1kr6k_249";
var NDVSubConnections_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	connections,
	connectionType,
	connectionLabel,
	hasIssues,
	connectedNodesWrapper,
	plusButton,
	"horizontal-shake": "_horizontal-shake_1kr6k_1",
	connectedNodesWrapperExpanded,
	connectedNodesMultiple,
	connectedNode,
	connectedNodes,
	nodeWrapper
};
var NDVSubConnections_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NDVSubConnections_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NDVSubConnections_vue_vue_type_style_index_0_lang_module_default }]]);
const useNodeDocsUrl = ({ nodeType: nodeTypeRef }) => {
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
		const ndvStore = useNDVStore();
		const workflowsStore = useWorkflowsStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { docsUrl } = useNodeDocsUrl({ nodeType: () => props.nodeType });
		const activeNode = computed(() => ndvStore.activeNode);
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
					workflow_id: workflowsStore.workflowId,
					push_ref: props.pushRef,
					pane: NodeConnectionTypes.Main,
					type: "docs"
				});
			}
			if (tab === "settings" && props.nodeType) telemetry.track("User viewed node settings", {
				node_type: props.nodeType.name,
				workflow_id: workflowsStore.workflowId
			});
			if (tab === "settings" || tab === "params" || tab === "action" || tab === "credential") emit("update:model-value", tab);
		}
		function onTooltipClick(tab, event) {
			if (tab === "communityNode" && event.target.localName === "a") telemetry.track("user clicked cnr docs link", { source: "node details view" });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTabs_default), {
				options: options.value,
				"model-value": _ctx.modelValue,
				variant: _ctx.tabsVariant,
				size: _ctx.compact ? "small" : "medium",
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [!_ctx.hideTabs ? (openBlock(), createBlock(NodeSettingsTabs_default, {
				key: 0,
				"hide-docs": _ctx.hideDocs,
				"model-value": _ctx.selectedTab,
				"node-type": _ctx.nodeType,
				"push-ref": _ctx.pushRef,
				class: normalizeClass(_ctx.$style.tabs),
				"tabs-variant": "modern",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("tab-changed", $event))
			}, null, 8, [
				"hide-docs",
				"model-value",
				"node-type",
				"push-ref",
				"class"
			])) : createCommentVNode("", true), !_ctx.hideExecute ? (openBlock(), createBlock(NodeExecuteButton_default, {
				key: 1,
				"data-test-id": "node-execute-button",
				"node-name": _ctx.nodeName,
				disabled: _ctx.disableExecute,
				tooltip: _ctx.executeButtonTooltip,
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
	header: "_header_qhhug_123",
	execute: "_execute_qhhug_131",
	tabs: "_tabs_qhhug_135"
};
var NodeSettingsHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeSettingsHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeSettingsHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$4 = {
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
var NodeWebhooks_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
		const visibleWebhookUrls = computed(() => {
			return webhooksNode.value.filter((webhook) => {
				if (typeof webhook.ndvHideUrl === "string") return !workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideUrl");
				return !webhook.ndvHideUrl;
			});
		});
		const webhooksNode = computed(() => {
			if (props.nodeTypeDescription?.webhooks === void 0) return [];
			return props.nodeTypeDescription.webhooks.filter((webhookData) => webhookData.restartWebhook !== true);
		});
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
		function copyWebhookUrl(webhookData) {
			const webhookUrl = getWebhookUrlDisplay(webhookData);
			clipboard.copy(webhookUrl);
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
		function getWebhookUrlDisplay(webhookData) {
			if (props.node) return workflowHelpers.getWebhookUrl(webhookData, props.node, isProductionOnly.value ? "production" : showUrlFor.value);
			return "";
		}
		function isWebhookMethodVisible(webhook) {
			try {
				const method = workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
				if (Array.isArray(method) && method.length !== 1) return false;
			} catch (error) {}
			if (typeof webhook.ndvHideMethod === "string") return !workflowHelpers.getWebhookExpressionValue(webhook, "ndvHideMethod");
			return !webhook.ndvHideMethod;
		}
		function getWebhookHttpMethod(webhook) {
			const method = workflowHelpers.getWebhookExpressionValue(webhook, "httpMethod", false);
			if (Array.isArray(method)) return method[0];
			return method;
		}
		watch(() => props.node, () => {
			isMinimized.value = props.nodeTypeDescription && !OPEN_URL_PANEL_TRIGGER_NODE_TYPES.includes(props.nodeTypeDescription.name);
		});
		return (_ctx, _cache) => {
			return webhooksNode.value.length && visibleWebhookUrls.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", {
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
				})])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(visibleWebhookUrls.value, (webhook, index) => {
					return openBlock(), createBlock(unref(N8nTooltip_default), {
						key: index,
						class: "item",
						content: baseText.value.clickToCopy,
						placement: "left"
					}, {
						default: withCtx(() => [isWebhookMethodVisible(webhook) ? (openBlock(), createElementBlock("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createTextVNode(toDisplayString(getWebhookHttpMethod(webhook)), 1), _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1))])]), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", {
							class: "webhook-url left-ellipsis clickable",
							onClick: ($event) => copyWebhookUrl(webhook)
						}, [createTextVNode(toDisplayString(getWebhookUrlDisplay(webhook)), 1), _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1))], 8, _hoisted_9)])])) : (openBlock(), createElementBlock("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", {
							class: "webhook-url left-ellipsis clickable",
							onClick: ($event) => copyWebhookUrl(webhook)
						}, [createTextVNode(toDisplayString(getWebhookUrlDisplay(webhook)), 1), _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1))], 8, _hoisted_12)])]))]),
						_: 2
					}, 1032, ["content"]);
				}), 128))])) : createCommentVNode("", true)]),
				_: 1
			})])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-66c974d9"]]);
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
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, _ctx.node.disabled ? _ctx.$style.disabled : ""]) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.title),
				onDblclick: _cache[1] || (_cache[1] = ($event) => emit("dblclick-title", $event))
			}, [
				createVNode(NodeIcon_default, {
					"node-type": _ctx.nodeType,
					size: 16
				}, null, 8, ["node-type"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleText) }, [createVNode(unref(N8nInlineTextEdit_default), {
					"min-width": 0,
					"model-value": _ctx.node.name,
					"read-only": _ctx.readOnly,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("name-changed", $event))
				}, null, 8, ["model-value", "read-only"])], 2),
				createVNode(unref(N8nText_default), {
					bold: "",
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.subTitleText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.subTitle), 1)]),
					_: 1
				}, 8, ["class"]),
				renderSlot(_ctx.$slots, "actions")
			], 34), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabsContainer) }, [createVNode(NodeSettingsTabs_default, {
				class: normalizeClass(_ctx.extraTabsClassName),
				"model-value": _ctx.selectedTab,
				"node-type": _ctx.nodeType,
				"push-ref": _ctx.pushRef,
				"tabs-variant": "modern",
				compact: "",
				"include-action": _ctx.includeAction,
				"include-credential": _ctx.includeCredential,
				"has-credential-issue": _ctx.hasCredentialIssue,
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
	component: "_component_13igc_123",
	title: "_title_13igc_127",
	disabled: "_disabled_13igc_135",
	titleText: "_titleText_13igc_139",
	subTitleText: "_subTitleText_13igc_151",
	tabsContainer: "_tabsContainer_13igc_160"
};
var ExperimentalEmbeddedNdvHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ExperimentalEmbeddedNdvHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExperimentalEmbeddedNdvHeader_vue_vue_type_style_index_0_lang_module_default }]]);
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
		function handleClickOption(option$1) {
			if (option$1.type !== "action") return;
			emit("actionSelected", getActionData(option$1.properties).value);
		}
		function handleSelectedItemRef(el) {
			if (el instanceof HTMLDivElement) selectedActionRef.value = el;
		}
		watch(selectedActionRef, (selected$1) => {
			selected$1?.scrollIntoView();
		}, { flush: "post" });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (option$1) => {
				return openBlock(), createElementBlock(Fragment, { key: option$1.action.key }, [option$1.action.type === "label" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					tag: "div",
					class: normalizeClass(_ctx.$style.label),
					size: "xsmall",
					color: "text-base",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(option$1.action.key), 1)]),
					_: 2
				}, 1032, ["class"])) : option$1.action.type === "action" ? (openBlock(), createElementBlock("div", {
					key: 1,
					ref_for: true,
					ref: option$1.isSelected ? handleSelectedItemRef : void 0,
					class: normalizeClass({
						[_ctx.$style.option]: true,
						[_ctx.$style.selected]: option$1.isSelected
					}),
					role: "button",
					onClick: ($event) => handleClickOption(option$1.action)
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
						default: withCtx(() => [createTextVNode(toDisplayString(option$1.action.properties.displayName), 1)]),
						_: 2
					}, 1032, ["class"]),
					option$1.isSelected ? (openBlock(), createBlock(unref(N8nIcon_default), {
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
	component: "_component_1vh3g_123",
	label: "_label_1vh3g_127",
	option: "_option_1vh3g_132",
	selected: "_selected_1vh3g_139",
	optionText: "_optionText_1vh3g_143"
};
var NodeActionsList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeActionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeActionsList_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const ndvStore = useNDVStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const usersStore = useUsersStore();
		const isCommunityNode = computed(() => isCommunityPackageName(__props.node.type));
		const isVerifiedCommunityNode = computed(() => isCommunityPackageName(__props.node.type) && nodeTypesStore.communityNodeType(__props.node.type)?.isOfficialNode);
		const npmPackage = computed(() => removePreviewToken(__props.node.type.split(".")[0]));
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const { installNode, loading } = useInstallNode();
		const isNodeDefined = computed(() => !!nodeTypesStore.nodeTypes[__props.node.type]);
		async function onViewDetailsClick() {
			telemetry.track("user clicked cnr docs link", {
				source: "missing node modal source",
				package_name: __props.node.type.split(".")[0],
				node_type: __props.node.type
			});
			if (isVerifiedCommunityNode.value) await nodeCreatorStore.openNodeCreatorWithNode(__props.node.name);
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
				nodeType: __props.node.type
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
			if (isNodeDefined.value) ndvStore.unsetActiveNodeName();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.nodeIsNotValid) }, [
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.warningIcon) }, [createVNode(unref(N8nIcon_default), { icon: "triangle-alert" })], 2),
				createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-dark",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.previewMode ? unref(i18n).baseText("nodeSettings.communityNodeUnknown.title.preview") : unref(i18n).baseText("nodeSettings.communityNodeUnknown.title")), 1)]),
					_: 1
				})]),
				isCommunityNode.value && !_ctx.previewMode ? (openBlock(), createElementBlock("div", {
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
				}), isOwner.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.communityNodeActionsContainer)
				}, [isOwner.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					icon: "hard-drive-download",
					type: "primary",
					"data-test-id": "install-community-node-button",
					loading: unref(loading),
					disabled: unref(loading),
					onClick: onInstallClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.installButton.label")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
					icon: "external-link",
					type: "secondary",
					onClick: onViewDetailsClick,
					"data-test-id": "view-details-button"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.communityNodeUnknown.viewDetailsButton.label")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createBlock(ContactAdministratorToInstall_default, {
					key: 1,
					box: false
				}))], 2)) : !_ctx.previewMode ? (openBlock(), createBlock(unref(I18nT), {
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
	communityNodeActionsContainer: "_communityNodeActionsContainer_1mqmg_123",
	nodeIsNotValid: "_nodeIsNotValid_1mqmg_128",
	warningIcon: "_warningIcon_1mqmg_139",
	descriptionContainer: "_descriptionContainer_1mqmg_144"
};
var NodeSettingsInvalidNodeWarning_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeSettingsInvalidNodeWarning_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeSettingsInvalidNodeWarning_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var NodeStorageLimitCallout_default = /* @__PURE__ */ defineComponent({
	__name: "NodeStorageLimitCallout",
	setup(__props) {
		const i18n = useI18n();
		const nvdStore = useNDVStore();
		const dataTableStore = useDataTableStore();
		const calloutType = computed(() => {
			if (!DATA_TABLE_NODES.includes(nvdStore.activeNode?.type ?? "")) return null;
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
		const { width } = useElementSize(wrapperRef);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "node-title-container"
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconWrapper) }, [!_ctx.iconSource ? (openBlock(), createBlock(NodeIcon_default, {
				key: 0,
				"node-type": _ctx.nodeType,
				size: 18,
				"show-tooltip": true,
				"tooltip-position": "left"
			}, null, 8, ["node-type"])) : (openBlock(), createBlock(NodeIcon_default, {
				key: 1,
				"icon-source": _ctx.iconSource,
				size: 18,
				"show-tooltip": true,
				"tooltip-position": "left"
			}, null, 8, ["icon-source"]))], 2), createBaseVNode("div", {
				ref_key: "wrapperRef",
				ref: wrapperRef,
				class: normalizeClass(_ctx.$style.textWrapper)
			}, [createVNode(unref(N8nInlineTextEdit_default), {
				"max-width": unref(width),
				"model-value": _ctx.modelValue,
				"read-only": _ctx.readOnly,
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
	container: "_container_oei61_123",
	textWrapper: "_textWrapper_oei61_132",
	iconWrapper: "_iconWrapper_oei61_137"
};
var NodeTitle_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeTitle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeTitle_vue_vue_type_style_index_0_lang_module_default }]]);
var import_get = /* @__PURE__ */ __toESM(require_get());
var _hoisted_1 = ["data-has-output-connection"];
var _hoisted_2 = { class: "header-side-menu" };
var _hoisted_3 = {
	key: 1,
	class: "no-parameters"
};
var _hoisted_4 = {
	key: 2,
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
		const ndvStore = useNDVStore();
		const workflowsStore = useWorkflowsStore();
		const workflowState = injectWorkflowState();
		const credentialsStore = useCredentialsStore();
		const historyStore = useHistoryStore();
		const telemetry = useTelemetry();
		const nodeHelpers = useNodeHelpers();
		const externalHooks = useExternalHooks();
		const i18n = useI18n();
		const route = useRoute();
		const nodeSettingsParameters = useNodeSettingsParameters();
		const nodeParameterWrapper = useTemplateRef("nodeParameterWrapper");
		const shouldShowStaticScrollbar = ref(false);
		if (props.isEmbeddedInCanvas) useResizeObserver(nodeParameterWrapper, () => {
			shouldShowStaticScrollbar.value = (nodeParameterWrapper.value?.scrollHeight ?? 0) > (nodeParameterWrapper.value?.offsetHeight ?? 0);
		});
		const nodeValid = ref(true);
		const openPanel = ref("params");
		const nodeValuesInitialized = ref(false);
		const hiddenIssuesInputs = ref([]);
		const subConnections = ref(null);
		const isDemoRoute = computed(() => route?.name === VIEWS.DEMO);
		const { isPreviewMode } = useSettingsStore();
		const isDemoPreview = computed(() => isDemoRoute.value && isPreviewMode);
		const currentWorkflow = computed(() => workflowsStore.getWorkflowById(workflowsStore.workflowObject.id));
		const hasForeignCredential = computed(() => props.foreignCredentials.length > 0);
		const isHomeProjectTeam = computed(() => currentWorkflow.value?.homeProject?.type === ProjectTypes.Team);
		const isReadOnly = computed(() => props.readOnly || hasForeignCredential.value && !isHomeProjectTeam.value);
		const node = computed(() => props.activeNode ?? ndvStore.activeNode);
		const nodeType = computed(() => node.value ? nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion) : null);
		const { areAllCredentialsSet } = useNodeCredentialOptions(node, nodeType, "");
		const { installedPackage, isUpdateCheckAvailable } = useInstalledCommunityPackage(computed(() => node.value?.type));
		const isTriggerNode = computed(() => !!node.value && nodeTypesStore.isTriggerNode(node.value.type));
		const isToolNode = computed(() => !!node.value && nodeTypesStore.isToolNode(node.value.type));
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
		const showNoParametersNotice = computed(() => !isDisplayingCredentials.value && (parametersByTab.value.params ?? []).filter((item) => item.type !== "notice").length === 0);
		const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
		const isCommunityNode = computed(() => !!node.value && isCommunityPackageName(node.value.type));
		const packageName = computed(() => node.value?.type.split(".")[0] ?? "");
		const usedCredentials = computed(() => Object.values(workflowsStore.usedCredentials).filter((credential) => Object.values(node.value?.credentials || []).find((nodeCredential) => nodeCredential.id === credential.id)));
		const credentialOwnerName = computed(() => {
			const credential = usedCredentials.value ? Object.values(usedCredentials.value).find((credential$1) => credential$1.id === props.foreignCredentials[0]) : void 0;
			return credentialsStore.getCredentialOwnerName(credential);
		});
		const featureRequestUrl = computed(() => {
			if (!nodeType.value) return "";
			return `${BASE_NODE_SURVEY_URL}${nodeType.value.name}`;
		});
		const hasOutputConnection = computed(() => {
			if (!node.value) return false;
			const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(node.value.name);
			return (Object.values(outgoingConnections)?.[0]?.[0] ?? []).length > 0;
		});
		const valueChanged = (parameterData) => {
			let newValue;
			if (parameterData.hasOwnProperty("value")) newValue = parameterData.value;
			else newValue = (0, import_get.default)(nodeValues.value, parameterData.name);
			const nodeNameBefore = parameterData.node || node.value?.name;
			if (!nodeNameBefore) return;
			const _node = workflowsStore.getNodeByName(nodeNameBefore);
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
					workflowState.setNodeParameters(updateInformation);
					nodeHelpers.updateNodeParameterIssuesByName(_node.name);
					nodeHelpers.updateNodeCredentialIssuesByName(_node.name);
				}
			} else if (nameIsParameter(parameterData)) nodeSettingsParameters.updateNodeParameter(nodeValues, parameterData, newValue, _node, isToolNode.value);
			else {
				nodeValues.value = {
					...nodeValues.value,
					[parameterData.name]: newValue
				};
				const updateInformation = {
					name: _node.name,
					key: parameterData.name,
					value: newValue
				};
				workflowState.setNodeValue(updateInformation);
			}
		};
		const setHttpNodeParameters = (parameters$1) => {
			try {
				valueChanged({
					node: node.value?.name,
					name: "parameters",
					value: parameters$1
				});
			} catch {}
		};
		const onSwitchSelectedNode = (node$1) => {
			emit("switchSelectedNode", node$1);
		};
		const onOpenConnectionNodeCreator = (nodeName, connectionType$1, connectionIndex = 0) => {
			emit("openConnectionNodeCreator", nodeName, connectionType$1, connectionIndex);
		};
		const populateHiddenIssuesSet = () => {
			if (!node.value || !workflowsStore.isNodePristine(node.value.name)) return;
			hiddenIssuesInputs.value.push("credentials");
			parametersByTab.value.params.forEach((parameter) => {
				hiddenIssuesInputs.value.push(parameter.name);
			});
			workflowsStore.setNodePristine(node.value.name, false);
		};
		const nodeSettings = computed(() => createCommonNodeSettings(isExecutable.value, isToolNode.value, i18n.baseText.bind(i18n)));
		const iconSource = computed(() => getNodeIconSource(nodeType.value ?? node.value?.type, node.value ?? null));
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
			workflowState.updateNodeProperties(updateInformation);
			const node$1 = workflowsStore.getNodeByName(updateInformation.name);
			if (node$1) nodeHelpers.updateNodeCredentialIssues(node$1);
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
				workflow_id: workflowsStore.workflowId,
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
					dragging: _ctx.dragging,
					embedded: props.isEmbeddedInCanvas
				}),
				"data-has-output-connection": hasOutputConnection.value,
				onKeydown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
			}, [
				_ctx.isEmbeddedInCanvas && node.value ? (openBlock(), createBlock(ExperimentalEmbeddedNdvHeader_default, {
					key: 0,
					node: node.value,
					"selected-tab": openPanel.value,
					"read-only": _ctx.readOnly,
					"node-type": nodeType.value,
					"push-ref": _ctx.pushRef,
					"sub-title": _ctx.subTitle,
					"extra-tabs-class-name": _ctx.extraTabsClassName,
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
				])) : !_ctx.isNdvV2 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.header)
				}, [createBaseVNode("div", _hoisted_2, [node.value ? (openBlock(), createBlock(NodeTitle_default, {
					key: 0,
					class: "node-name",
					"model-value": node.value.name,
					"icon-source": iconSource.value,
					"read-only": isReadOnly.value,
					"onUpdate:modelValue": nameChanged
				}, null, 8, [
					"model-value",
					"icon-source",
					"read-only"
				])) : createCommentVNode("", true), isExecutable.value && !_ctx.blockUI && node.value && nodeValid.value ? (openBlock(), createBlock(NodeExecuteButton_default, {
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
					"push-ref": _ctx.pushRef,
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
					"hide-execute": props.hideExecute || !isExecutable.value || _ctx.blockUI || !node.value || !nodeValid.value,
					"disable-execute": outputPanelEditMode.value.enabled && !isTriggerNode.value,
					"hide-tabs": !nodeValid.value,
					"hide-docs": props.hideDocs,
					"push-ref": _ctx.pushRef,
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
						{ "ndv-v2": _ctx.isNdvV2 },
						_ctx.extraParameterWrapperClassName ?? ""
					]),
					"data-test-id": "node-parameters",
					onWheelCapture: _cache[1] || (_cache[1] = ($event) => emit("captureWheelBody", $event))
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
						onCredentialSelected: credentialSelected,
						onValueChanged: valueChanged,
						onBlur: onParameterBlur
					}, null, 8, [
						"node",
						"readonly",
						"hide-issues"
					])) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", null, [
						createVNode(NodeWebhooks_default, {
							node: node.value,
							"node-type-description": nodeType.value
						}, null, 8, ["node", "node-type-description"]),
						nodeValuesInitialized.value ? (openBlock(), createBlock(ParameterInputList_default, {
							key: 0,
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
							default: withCtx(() => [!_ctx.isEmbeddedInCanvas && !isDemoPreview.value ? (openBlock(), createBlock(NodeCredentials_default, {
								key: 0,
								node: node.value,
								readonly: isReadOnly.value,
								"show-all": true,
								"hide-issues": hiddenIssuesInputs.value.includes("credentials"),
								onCredentialSelected: credentialSelected,
								onValueChanged: valueChanged,
								onBlur: onParameterBlur
							}, null, 8, [
								"node",
								"readonly",
								"hide-issues"
							])) : createCommentVNode("", true)]),
							_: 1
						}, 8, [
							"parameters",
							"node-values",
							"is-read-only",
							"hidden-issues-inputs",
							"node"
						])) : createCommentVNode("", true),
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
					_ctx.isNdvV2 && featureRequestUrl.value && !_ctx.isEmbeddedInCanvas ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.featureRequest)
					}, [createBaseVNode("a", {
						target: "_blank",
						onClick: onFeatureRequestClick
					}, [createVNode(unref(N8nIcon_default), { icon: "lightbulb" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)])], 2)) : createCommentVNode("", true)
				], 34)) : createCommentVNode("", true),
				node.value && !_ctx.hideSubConnections ? (openBlock(), createBlock(NDVSubConnections_default, {
					key: 5,
					ref_key: "subConnections",
					ref: subConnections,
					"root-node": node.value,
					onSwitchSelectedNode,
					onOpenConnectionNodeCreator
				}, null, 8, ["root-node"])) : createCommentVNode("", true),
				createVNode(unref(N8nBlockUi_default), { show: _ctx.blockUI }, null, 8, ["show"]),
				openPanel.value === "settings" && isCommunityNode.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
					key: 6,
					"package-name": packageName.value,
					"show-manage": unref(useUsersStore)().isInstanceOwner
				}, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)
			], 42, _hoisted_1);
		};
	}
});
var NodeSettings_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_oiay4_123",
	featureRequest: "_featureRequest_oiay4_127"
};
var NodeSettings_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeSettings_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-e107ee77"]]);
export { useNodeDocsUrl as n, FreeAiCreditsCallout_default as r, NodeSettings_default as t };
