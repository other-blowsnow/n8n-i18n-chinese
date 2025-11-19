import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, L as h, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, st as resolveDirective, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, In as N8nText_default, c as N8nBreadcrumbs_default, kt as ElSwitch, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { En as useProjectsStore, Hr as getActivatableTriggerNodes, Ht as useCredentialsStore, Ni as useUIStore, On as ProjectTypes, mn as useWorkflowHelpers, o as useWorkflowsStore } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { Ho as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, s as PLACEHOLDER_EMPTY_WORKFLOW_ID, vt as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, ya as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-C_oOJnqT.js";
import { t as useFoldersStore } from "./folders.store-Cwp_DTVT.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-C1HaO_mN.js";
import { t as ProjectBreadcrumb_default } from "./ProjectBreadcrumb-By8DfPh7.js";
var _hoisted_1$1 = { key: 2 };
var FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FolderBreadcrumbs",
	props: {
		currentFolder: { default: null },
		actions: { default: () => [] },
		hiddenItemsTrigger: { default: "click" },
		currentFolderAsLink: {
			type: Boolean,
			default: false
		},
		visibleLevels: { default: 1 }
	},
	emits: [
		"itemSelected",
		"action",
		"itemDrop",
		"projectDrop"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const foldersStore = useFoldersStore();
		const hiddenBreadcrumbsItemsAsync = ref(new Promise(() => {}));
		const visibleIds = ref(/* @__PURE__ */ new Set());
		const isSharedContext = computed(() => projectsStore.projectNavActiveId === "shared");
		const currentProject = computed(() => {
			if (isSharedContext.value) return;
			return projectsStore.currentProject ?? projectsStore.personalProject ?? void 0;
		});
		const projectName = computed(() => {
			if (!currentProject.value) return isSharedContext.value ? i18n.baseText("projects.menu.shared") : "";
			if (currentProject.value.type === ProjectTypes.Personal) return i18n.baseText("projects.menu.personal");
			return currentProject.value.name;
		});
		const isDragging = computed(() => {
			return foldersStore.draggedElement !== null;
		});
		const hasMoreItems = computed(() => {
			return visibleBreadcrumbsItems.value[0]?.parentFolder !== void 0;
		});
		const visibleBreadcrumbsItems = computed(() => {
			visibleIds.value.clear();
			if (!props.currentFolder || isSharedContext.value) return [];
			const items = [];
			const parent = props.visibleLevels === 2 ? foldersStore.getCachedFolder(props.currentFolder.parentFolder ?? "") : null;
			if (parent) {
				items.push({
					id: parent.id,
					label: parent.name,
					href: `/projects/${currentProject.value?.id}/folders/${parent.id}/workflows`,
					parentFolder: parent.parentFolder
				});
				visibleIds.value.add(parent.id);
			}
			items.push({
				id: props.currentFolder.id,
				label: props.currentFolder.name,
				parentFolder: props.currentFolder.parentFolder,
				href: props.currentFolderAsLink ? `/projects/${currentProject.value?.id}/folders/${props.currentFolder.id}/workflows` : void 0
			});
			if (currentProject.value) visibleIds.value.add(currentProject.value.id);
			visibleIds.value.add(props.currentFolder.id);
			return items;
		});
		const fetchHiddenBreadCrumbsItems = async () => {
			if (!projectName.value || !props.currentFolder?.parentFolder || isSharedContext.value || !currentProject.value) hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
			else try {
				const filtered = (await foldersStore.getHiddenBreadcrumbsItems({
					id: currentProject.value.id,
					name: projectName.value
				}, props.currentFolder.parentFolder, { addLinks: true })).filter((item) => !visibleIds.value.has(item.id));
				hiddenBreadcrumbsItemsAsync.value = Promise.resolve(filtered);
			} catch (error) {
				hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
			}
		};
		const onItemSelect = (item) => {
			emit("itemSelected", item);
		};
		const onAction = (action) => {
			emit("action", action);
		};
		const onProjectDrop = () => {
			if (!currentProject.value?.name) return;
			emit("projectDrop", currentProject.value.id, currentProject.value.name);
		};
		const onProjectHover = () => {
			if (!isDragging.value || !currentProject.value?.name) return;
			foldersStore.activeDropTarget = {
				type: "project",
				id: currentProject.value?.id,
				name: currentProject.value?.name
			};
		};
		const onItemHover = (item) => {
			if (!isDragging.value) return;
			foldersStore.activeDropTarget = {
				type: "folder",
				id: item.id,
				name: item.label
			};
		};
		watch(() => props.currentFolder?.parentFolder, () => {
			hiddenBreadcrumbsItemsAsync.value = new Promise(() => {});
		}, { immediate: true });
		onBeforeUnmount(() => {
			hiddenBreadcrumbsItemsAsync.value = Promise.resolve([]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					[_ctx.$style.container]: true,
					[_ctx.$style["dragging"]]: isDragging.value
				}),
				"data-test-id": "folder-breadcrumbs"
			}, [visibleBreadcrumbsItems.value.length ? (openBlock(), createBlock(unref(N8nBreadcrumbs_default), {
				key: 0,
				"drag-active": isDragging.value,
				"onUpdate:dragActive": _cache[0] || (_cache[0] = ($event) => isDragging.value = $event),
				items: visibleBreadcrumbsItems.value,
				"highlight-last-item": false,
				"path-truncated": hasMoreItems.value,
				"hidden-items": hasMoreItems.value ? hiddenBreadcrumbsItemsAsync.value : void 0,
				"hidden-items-trigger": props.hiddenItemsTrigger,
				onTooltipOpened: fetchHiddenBreadCrumbsItems,
				onItemSelected: onItemSelect,
				onItemHover,
				onItemDrop: _cache[1] || (_cache[1] = ($event) => emit("itemDrop", $event))
			}, createSlots({
				append: withCtx(() => [renderSlot(_ctx.$slots, "append")]),
				_: 2
			}, [currentProject.value ? {
				name: "prepend",
				fn: withCtx(() => [createVNode(ProjectBreadcrumb_default, {
					"current-project": currentProject.value,
					"is-dragging": isDragging.value,
					onProjectDrop,
					onProjectHover
				}, null, 8, ["current-project", "is-dragging"])]),
				key: "0"
			} : void 0]), 1032, [
				"drag-active",
				"items",
				"path-truncated",
				"hidden-items",
				"hidden-items-trigger"
			])) : currentProject.value || isSharedContext.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style["home-project"])
			}, [createVNode(ProjectBreadcrumb_default, {
				"current-project": currentProject.value,
				"is-shared": isSharedContext.value,
				"is-dragging": isDragging.value,
				onProjectDrop,
				onProjectHover
			}, null, 8, [
				"current-project",
				"is-shared",
				"is-dragging"
			]), renderSlot(_ctx.$slots, "append")], 2)) : (openBlock(), createElementBlock("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "append")])), visibleBreadcrumbsItems.value && _ctx.actions?.length ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 3,
				actions: _ctx.actions,
				class: normalizeClass(_ctx.$style["action-toggle"]),
				theme: "dark",
				"data-test-id": "folder-breadcrumbs-actions",
				onAction
			}, null, 8, ["actions", "class"])) : createCommentVNode("", true)], 2);
		};
	}
});
var FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1hwuc_123",
	"home-project": "_home-project_1hwuc_128",
	"action-toggle": "_action-toggle_1hwuc_133"
};
var FolderBreadcrumbs_default = /* @__PURE__ */ __plugin_vue_export_helper_default(FolderBreadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FolderBreadcrumbs_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkflowActivationErrorMessage_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowActivationErrorMessage",
	props: { message: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined")) + " ", 1),
				_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
				createBaseVNode("i", null, toDisplayString(_ctx.message), 1)
			]);
		};
	}
});
var _hoisted_1 = { class: "workflow-activator" };
var _hoisted_2 = {
	key: 0,
	class: "could-not-be-started"
};
var WorkflowActivator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowActivator",
	props: {
		isArchived: { type: Boolean },
		workflowActive: { type: Boolean },
		workflowId: {},
		workflowPermissions: {}
	},
	emits: ["update:workflowActive"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { showMessage } = useToast();
		const workflowActivate = useWorkflowActivate();
		const uiStore = useUIStore();
		const workflowHelpers = useWorkflowHelpers();
		const i18n = useI18n();
		const workflowsStore = useWorkflowsStore();
		const credentialsStore = useCredentialsStore();
		const isWorkflowActive = computed(() => {
			return workflowsStore.activeWorkflows.includes(props.workflowId);
		});
		const couldNotBeStarted = computed(() => {
			return props.workflowActive && isWorkflowActive.value !== props.workflowActive;
		});
		const getActiveColor = computed(() => {
			if (couldNotBeStarted.value) return "#ff4949";
			return "#13ce66";
		});
		const isCurrentWorkflow = computed(() => {
			return workflowsStore.workflowId === props.workflowId;
		});
		const foundTriggers = computed(() => getActivatableTriggerNodes(workflowsStore.workflowTriggerNodes));
		const containsTrigger = computed(() => {
			return foundTriggers.value.length > 0;
		});
		const containsOnlyExecuteWorkflowTrigger = computed(() => {
			const foundActiveTriggers = workflowsStore.workflowTriggerNodes.filter((trigger) => !trigger.disabled);
			const foundTriggers$1 = foundActiveTriggers.filter((trigger) => trigger.type === EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE);
			return foundTriggers$1.length > 0 && foundTriggers$1.length === foundActiveTriggers.length;
		});
		const isNewWorkflow = computed(() => !props.workflowId || props.workflowId === "__EMPTY__" || props.workflowId === "new");
		const disabled = computed(() => {
			if (props.isArchived) return true;
			if (isNewWorkflow.value || isCurrentWorkflow.value) return !props.workflowActive && !containsTrigger.value;
			return false;
		});
		function findManagedOpenAiCredentialId(usedCredentials) {
			return Object.keys(usedCredentials).find((credentialId) => {
				const credential = credentialsStore.state.credentials[credentialId];
				return credential.isManaged && credential.type === "openAiApi";
			});
		}
		function hasActiveNodeUsingCredential(nodes, credentialId) {
			return nodes.some((node) => node?.credentials?.["openAiApi"]?.id === credentialId && !node.disabled);
		}
		const shouldShowFreeAiCreditsWarning = computed(() => {
			const usedCredentials = workflowsStore?.usedCredentials;
			if (!usedCredentials) return false;
			const managedOpenAiCredentialId = findManagedOpenAiCredentialId(usedCredentials);
			if (!managedOpenAiCredentialId) return false;
			return hasActiveNodeUsingCredential(workflowsStore.allNodes, managedOpenAiCredentialId);
		});
		async function activeChanged(newActiveState) {
			const boolValue = typeof newActiveState === "boolean" ? newActiveState : Boolean(newActiveState);
			if (!isWorkflowActive.value) {
				const conflictData = await workflowHelpers.checkConflictingWebhooks(props.workflowId);
				if (conflictData) {
					const { trigger, conflict } = conflictData;
					const conflictingWorkflow = await workflowsStore.fetchWorkflow(conflict.workflowId);
					uiStore.openModalWithData({
						name: WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY,
						data: {
							triggerType: trigger.type,
							workflowName: conflictingWorkflow.name,
							...conflict
						}
					});
					return;
				}
			}
			const newState = await workflowActivate.updateWorkflowActivation(props.workflowId, boolValue);
			emit("update:workflowActive", {
				id: props.workflowId,
				active: newState
			});
		}
		async function displayActivationError() {
			let errorMessage;
			try {
				const errorData = await workflowsStore.getActivationError(props.workflowId);
				if (errorData === void 0) errorMessage = i18n.baseText("workflowActivator.showMessage.displayActivationError.message.errorDataUndefined");
				else errorMessage = h(WorkflowActivationErrorMessage_default, { message: errorData });
			} catch (error) {
				errorMessage = i18n.baseText("workflowActivator.showMessage.displayActivationError.message.catchBlock");
			}
			showMessage({
				title: i18n.baseText("workflowActivator.showMessage.displayActivationError.title"),
				message: errorMessage,
				type: "warning",
				duration: 0
			});
		}
		watch(() => props.workflowActive, (workflowActive) => {
			if (workflowActive && shouldShowFreeAiCreditsWarning.value) showMessage({
				title: i18n.baseText("freeAi.credits.showWarning.workflow.activation.title"),
				message: i18n.baseText("freeAi.credits.showWarning.workflow.activation.description"),
				type: "warning",
				duration: 0
			});
		});
		return (_ctx, _cache) => {
			const _directive_loading = resolveDirective("loading");
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.activeStatusText),
					"data-test-id": "workflow-activator-status"
				}, [_ctx.workflowActive ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: couldNotBeStarted.value ? "danger" : "success",
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)]),
					_: 1
				}, 8, ["color"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-base",
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)]),
					_: 1
				}))], 2),
				createVNode(unref(N8nTooltip_default), {
					disabled: !disabled.value,
					placement: "bottom"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText(_ctx.isArchived ? "workflowActivator.thisWorkflowIsArchived" : containsOnlyExecuteWorkflowTrigger.value ? "workflowActivator.thisWorkflowHasOnlyOneExecuteWorkflowTriggerNode" : "workflowActivator.thisWorkflowHasNoTriggerNodes")), 1)]),
					default: withCtx(() => [withDirectives(createVNode(unref(ElSwitch), {
						"model-value": _ctx.workflowActive,
						title: _ctx.workflowActive ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
						disabled: disabled.value || unref(workflowActivate).updatingWorkflowActivation.value || !isNewWorkflow.value && !_ctx.workflowPermissions.update,
						"active-color": getActiveColor.value,
						"inactive-color": "#8899AA",
						"data-test-id": "workflow-activate-switch",
						"onUpdate:modelValue": activeChanged
					}, null, 8, [
						"model-value",
						"title",
						"disabled",
						"active-color"
					]), [[_directive_loading, unref(workflowActivate).updatingWorkflowActivation.value]])]),
					_: 1
				}, 8, ["disabled"]),
				couldNotBeStarted.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
					content: withCtx(() => [withDirectives(createBaseVNode("div", { onClick: displayActivationError }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("workflowActivator.theWorkflowIsSetToBeActiveBut")]])]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						onClick: displayActivationError
					})]),
					_: 1
				})])) : createCommentVNode("", true)
			]);
		};
	}
});
var WorkflowActivator_vue_vue_type_style_index_0_lang_module_default = { activeStatusText: "_activeStatusText_1xmgg_123" };
var WorkflowActivator_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowActivator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowActivator_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-64cdd300"]]);
export { FolderBreadcrumbs_default as n, WorkflowActivator_default as t };
