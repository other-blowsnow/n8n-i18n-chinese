import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, ot as resolveComponent, st as resolveDirective, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Bt as ElTag, Ft as ElDropdown, In as N8nText_default, It as ElDropdownItem, Ln as N8nButton_default, Lt as ElDropdownMenu, Pn as N8nHeading_default, Rn as N8nSpinner_default, Tt as N8nIconButton_default, it as N8nBadge_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Bo as useSettingsStore, o as useWorkflowsStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Hs as EnterpriseEditionFeature, No as MODAL_CONFIRM, _r as getResourcePermissions, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import { t as useExecutionsStore } from "./executions.store-a34D3haB.js";
import "./versions.store-DbkVHo9d.js";
import "./usePageRedirectionHelper-BOaFWroN.js";
import "./dateFormatter-CXO-zUXu.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-Dhozi48o.js";
import "./TagsDropdown-rTwmy1Tm.js";
import { t as useExecutionDebugging } from "./useExecutionDebugging-DMvUiD-V.js";
import { t as AnnotationTagsDropdown_ee_default } from "./AnnotationTagsDropdown.ee-LOH7o9OO.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-DXvhQ6Rs.js";
var WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionAnnotationPanel.ee",
	props: { execution: {} },
	setup(__props) {
		const props = __props;
		const workflowsStore = useWorkflowsStore();
		const route = useRoute();
		const i18n = useI18n();
		const annotationDropdownRef = ref(null);
		const isDropdownVisible = ref(false);
		const workflowId = computed(() => route.params.name);
		const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const customDataLength = computed(() => {
			return props.execution?.customData ? Object.keys(props.execution?.customData).length : 0;
		});
		function onEllipsisButtonBlur(event) {
			if (annotationDropdownRef.value && event.relatedTarget === null) annotationDropdownRef.value.handleClose();
		}
		function onDropdownVisibleChange(visible) {
			isDropdownVisible.value = visible;
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return _ctx.execution ? (openBlock(), createBlock(unref(ElDropdown), {
				key: 0,
				ref_key: "annotationDropdownRef",
				ref: annotationDropdownRef,
				trigger: "click",
				onVisibleChange: onDropdownVisibleChange
			}, {
				dropdown: withCtx(() => [createBaseVNode("div", {
					ref: "container",
					class: normalizeClass(["execution-annotation-panel", _ctx.$style.container]),
					"data-test-id": "execution-annotation-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.annotationData")), 1)]),
					_: 1
				})], 2), _ctx.execution?.customData && Object.keys(_ctx.execution?.customData).length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.metadata)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.execution?.customData), (attr) => {
					return openBlock(), createElementBlock("div", {
						key: attr,
						class: normalizeClass(_ctx.$style.customDataEntry)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.key),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(attr), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.value),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.execution?.customData[attr]), 1)]),
						_: 2
					}, 1032, ["class"])], 2);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.noResultsContainer),
					"data-test-id": "execution-annotation-data-empty"
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small",
					align: "center"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("executionAnnotationView.data.notFound")]])]),
					_: 1
				})], 2))], 2)], 2)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					title: unref(i18n).baseText("executionDetails.additionalActions"),
					disabled: !workflowPermissions.value.update,
					icon: "list-checks",
					class: normalizeClass({
						[_ctx.$style.highlightDataButton]: true,
						[_ctx.$style.highlightDataButtonActive]: customDataLength.value > 0,
						[_ctx.$style.highlightDataButtonOpen]: isDropdownVisible.value
					}),
					size: "small",
					type: "secondary",
					"data-test-id": "execution-preview-ellipsis-button",
					onBlur: onEllipsisButtonBlur
				}, {
					default: withCtx(() => [customDataLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.badge),
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(customDataLength.value.toString()), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"title",
					"disabled",
					"class"
				])]),
				_: 1
			}, 512)) : createCommentVNode("", true);
		};
	}
});
var WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default = {
	highlightDataButton: "_highlightDataButton_6a6tl_123",
	highlightDataButtonActive: "_highlightDataButtonActive_6a6tl_128",
	highlightDataButtonOpen: "_highlightDataButtonOpen_6a6tl_132",
	badge: "_badge_6a6tl_138",
	container: "_container_6a6tl_142",
	section: "_section_6a6tl_154",
	metadata: "_metadata_6a6tl_163",
	heading: "_heading_6a6tl_167",
	controls: "_controls_6a6tl_174",
	customDataEntry: "_customDataEntry_6a6tl_186",
	key: "_key_6a6tl_193",
	noResultsContainer: "_noResultsContainer_6a6tl_197",
	"execution-annotation-panel": "_execution-annotation-panel_6a6tl_202",
	"el-skeleton__item": "_el-skeleton__item_6a6tl_202"
};
var WorkflowExecutionAnnotationPanel_ee_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { key: 1 };
var WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionAnnotationTags.ee",
	props: { execution: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const telemetry = useTelemetry();
		const { showError } = useToast();
		const executionsStore = useExecutionsStore();
		const tagIds = computed(() => props.execution.annotation?.tags.map((tag) => tag.id) ?? []);
		const tags$1 = computed(() => props.execution.annotation?.tags);
		const tagsEventBus = createEventBus();
		const isTagsEditEnabled = ref(false);
		const appliedTagIds = ref([]);
		const tagsSaving = ref(false);
		const tagsHasChanged = (prev, curr) => {
			if (prev.length !== curr.length) return true;
			const set = new Set(prev);
			return curr.reduce((acc, val) => acc || !set.has(val), false);
		};
		const onTagsEditEnable = () => {
			appliedTagIds.value = tagIds.value;
			isTagsEditEnabled.value = true;
			tagsEventBus.emit("focus");
		};
		const onTagsBlur = async () => {
			if (!props.execution) return;
			const currentTagIds = tagIds.value ?? [];
			const newTagIds = appliedTagIds.value;
			if (!tagsHasChanged(currentTagIds, newTagIds)) {
				isTagsEditEnabled.value = false;
				return;
			}
			if (tagsSaving.value) return;
			tagsSaving.value = true;
			try {
				await executionsStore.annotateExecution(props.execution.id, { tags: newTagIds });
				if (newTagIds.length > 0) telemetry.track("User added execution annotation tag", {
					tag_ids: newTagIds,
					execution_id: props.execution.id
				});
			} catch (e) {
				showError(e, "executionAnnotationView.tag.error");
			}
			tagsSaving.value = false;
			isTagsEditEnabled.value = false;
		};
		const onTagsEditEsc = () => {
			isTagsEditEnabled.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.executionDetailsTags) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.tags),
				"data-test-id": "annotation-tags-container"
			}, [isTagsEditEnabled.value ? (openBlock(), createBlock(AnnotationTagsDropdown_ee_default, {
				key: 0,
				ref: "dropdown",
				modelValue: appliedTagIds.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
				"create-enabled": true,
				"event-bus": unref(tagsEventBus),
				placeholder: unref(locale).baseText("executionAnnotationView.chooseOrCreateATag"),
				class: "tags-edit",
				"data-test-id": "workflow-tags-dropdown",
				onBlur: onTagsBlur,
				onEsc: onTagsEditEsc
			}, null, 8, [
				"modelValue",
				"event-bus",
				"placeholder"
			])) : tagIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nButton_default), {
				class: normalizeClass([_ctx.$style.addTagButton, "clickable"]),
				label: unref(locale).baseText("executionAnnotationView.addTag"),
				type: "secondary",
				size: "mini",
				outline: false,
				text: true,
				"data-test-id": "new-tag-link",
				icon: "plus",
				onClick: onTagsEditEnable
			}, null, 8, ["class", "label"])])) : (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(["tags-container", _ctx.$style.tagsContainer]),
				"data-test-id": "execution-annotation-tags",
				onClick: onTagsEditEnable
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags$1.value, (tag) => {
				return openBlock(), createElementBlock("span", {
					key: tag.id,
					class: "clickable"
				}, [createVNode(unref(ElTag), {
					title: tag.name,
					type: "info",
					size: "small",
					"disable-transitions": true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(tag.name), 1)]),
					_: 2
				}, 1032, ["title"])]);
			}), 128)), createBaseVNode("span", { class: normalizeClass(_ctx.$style.addTagWrapper) }, [createVNode(unref(N8nButton_default), {
				class: normalizeClass([
					_ctx.$style.addTagButton,
					_ctx.$style.addTagButtonIconOnly,
					"clickable"
				]),
				type: "secondary",
				size: "mini",
				outline: false,
				text: true,
				"data-test-id": "new-tag-link",
				icon: "plus",
				onClick: onTagsEditEnable
			}, null, 8, ["class"])], 2)], 2))], 2)], 2);
		};
	}
});
var WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default = {
	tags: "_tags_50en8_123",
	addTagButton: "_addTagButton_50en8_128",
	addTagButtonIconOnly: "_addTagButtonIconOnly_50en8_149",
	tagsContainer: "_tagsContainer_50en8_154"
};
var WorkflowExecutionAnnotationTags_ee_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default }]]);
var VoteButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VoteButtons",
	props: { vote: {} },
	emits: ["vote-click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const onVoteClick = (vote) => {
			emit("vote-click", vote);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.ratingIcon) }, [createVNode(unref(N8nIconButton_default), {
				class: normalizeClass([_ctx.$style.icon, _ctx.vote === "up" && _ctx.$style.up]),
				type: "tertiary",
				text: "",
				size: "small",
				icon: "thumbs-up",
				onClick: _cache[0] || (_cache[0] = ($event) => onVoteClick("up"))
			}, null, 8, ["class"]), createVNode(unref(N8nIconButton_default), {
				class: normalizeClass([_ctx.$style.icon, _ctx.vote === "down" && _ctx.$style.down]),
				type: "tertiary",
				text: "",
				size: "small",
				icon: "thumbs-down",
				onClick: _cache[1] || (_cache[1] = ($event) => onVoteClick("down"))
			}, null, 8, ["class"])], 2);
		};
	}
});
var VoteButtons_vue_vue_type_style_index_0_lang_module_default = {
	ratingIcon: "_ratingIcon_w647n_123",
	icon: "_icon_w647n_127",
	up: "_up_w647n_130",
	down: "_down_w647n_130"
};
var VoteButtons_default = /* @__PURE__ */ __plugin_vue_export_helper_default(VoteButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VoteButtons_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = { class: "retry-button" };
var WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsPreview",
	props: { execution: {} },
	emits: [
		"deleteCurrentExecution",
		"retryExecution",
		"stopExecution"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const locale = useI18n();
		const { showError } = useToast();
		const executionHelpers = useExecutionHelpers();
		const message = useMessage();
		const executionDebugging = useExecutionDebugging();
		const workflowsStore = useWorkflowsStore();
		const settingsStore = useSettingsStore();
		const retryDropdownRef = ref(null);
		const workflowId = computed(() => route.params.name);
		const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const executionId = computed(() => route.params.executionId);
		const nodeId = computed(() => route.params.nodeId);
		const executionUIDetails = computed(() => props.execution ? executionHelpers.getUIDetails(props.execution) : null);
		const debugButtonData = computed(() => props.execution?.status === "success" ? {
			text: locale.baseText("executionsList.debug.button.copyToEditor"),
			type: "secondary"
		} : {
			text: locale.baseText("executionsList.debug.button.debugInEditor"),
			type: "primary"
		});
		const isRetriable = computed(() => !!props.execution && executionHelpers.isExecutionRetriable(props.execution));
		const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const hasAnnotation = computed(() => !!props.execution?.annotation && (props.execution?.annotation.vote || props.execution?.annotation.tags.length > 0));
		const executionsStore = useExecutionsStore();
		const activeExecution = computed(() => {
			return executionsStore.activeExecution;
		});
		const vote = computed(() => activeExecution.value?.annotation?.vote || null);
		async function onDeleteExecution() {
			const confirmationText = [hasAnnotation.value && locale.baseText("executionDetails.confirmMessage.annotationsNote"), locale.baseText("executionDetails.confirmMessage.message")].filter(Boolean).join(" ");
			if (await message.confirm(confirmationText, locale.baseText("executionDetails.confirmMessage.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("executionDetails.confirmMessage.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm") return;
			emit("deleteCurrentExecution");
		}
		function handleRetryClick(command) {
			if (props.execution) emit("retryExecution", {
				execution: props.execution,
				command
			});
		}
		function handleStopClick() {
			emit("stopExecution");
		}
		function onRetryButtonBlur(event) {
			if (retryDropdownRef.value && event.relatedTarget === null) retryDropdownRef.value.handleClose();
		}
		const onVoteClick = async (voteValue) => {
			if (!activeExecution.value) return;
			const voteToSet = voteValue === vote.value ? null : voteValue;
			try {
				await executionsStore.annotateExecution(activeExecution.value.id, { vote: voteToSet });
			} catch (e) {
				showError(e, "executionAnnotationView.vote.error");
			}
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return executionUIDetails.value?.name === "new" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.newInfo)
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.newMessage),
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.newMessage")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nButton_default), {
				class: "mt-l",
				type: "tertiary",
				onClick: handleStopClick
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
				_: 1
			})], 2)) : executionUIDetails.value?.name === "running" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.runningInfo)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default), { type: "ring" })], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.runningMessage),
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningMessage")), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nButton_default), {
					"data-test-id": "stop-execution",
					class: "mt-l",
					type: "tertiary",
					disabled: !workflowPermissions.value.execute,
					onClick: handleStopClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
					_: 1
				}, 8, ["disabled"])
			], 2)) : executionUIDetails.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.previewContainer)
			}, [_ctx.execution ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.executionDetails),
				"data-test-id": `execution-preview-details-${executionId.value}`
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionDetailsLeft) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionTitle) }, [createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-dark",
					bold: true,
					"data-test-id": "execution-time"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value?.startTime), 1)]),
					_: 1
				}), isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(VoteButtons_default, {
					key: 0,
					"data-test-id": "execution-preview-vote-buttons",
					vote: vote.value,
					class: normalizeClass(_ctx.$style.voteButtons),
					onVoteClick
				}, null, 8, ["vote", "class"])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionDetailsInfo) }, [
					executionUIDetails.value?.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
						key: 0,
						size: "small",
						class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
					}, null, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "medium",
						class: normalizeClass([_ctx.$style.status, _ctx.$style[executionUIDetails.value.name]]),
						"data-test-id": "execution-preview-label"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
						_: 1
					}, 8, ["class"]),
					_cache[1] || (_cache[1] = createTextVNode(" " + toDisplayString(" ") + " ")),
					executionUIDetails.value?.showTimestamp === false ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(" | ID#" + toDisplayString(_ctx.execution.id), 1)]),
						_: 1
					})) : executionUIDetails.value.name === "running" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning", { interpolate: { time: executionUIDetails.value?.runningTime } })) + " | ID#" + toDisplayString(_ctx.execution.id), 1)]),
						_: 1
					})) : executionUIDetails.value.name !== "waiting" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						color: "text-base",
						size: "medium",
						"data-test-id": "execution-preview-id"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeFinished", { interpolate: { time: executionUIDetails.value?.runningTime ?? "unknown" } })) + " | ID#" + toDisplayString(_ctx.execution.id), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				_ctx.execution.mode === "retry" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.executionDetailsRetry)
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " ", 1), createVNode(_component_RouterLink, {
						class: normalizeClass(_ctx.$style.executionLink),
						to: {
							name: unref(VIEWS).EXECUTION_PREVIEW,
							params: {
								workflowId: _ctx.execution.workflowId,
								executionId: _ctx.execution.retryOf
							}
						}
					}, {
						default: withCtx(() => [createTextVNode(" #" + toDisplayString(_ctx.execution.retryOf), 1)]),
						_: 1
					}, 8, ["class", "to"])]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				isAnnotationEnabled.value && _ctx.execution ? (openBlock(), createBlock(WorkflowExecutionAnnotationTags_ee_default, {
					key: 1,
					execution: _ctx.execution
				}, null, 8, ["execution"])) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				createVNode(_component_RouterLink, { to: {
					name: unref(VIEWS).EXECUTION_DEBUG,
					params: {
						name: _ctx.execution.workflowId,
						executionId: _ctx.execution.id
					}
				} }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "medium",
						type: debugButtonData.value.type,
						class: normalizeClass(_ctx.$style.debugLink),
						disabled: !workflowPermissions.value.update
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							"data-test-id": "execution-debug-button",
							onClick: _cache[0] || (_cache[0] = (...args) => unref(executionDebugging).handleDebugLinkClick && unref(executionDebugging).handleDebugLinkClick(...args))
						}, toDisplayString(debugButtonData.value.text), 1)]),
						_: 1
					}, 8, [
						"type",
						"class",
						"disabled"
					])]),
					_: 1
				}, 8, ["to"]),
				isRetriable.value ? (openBlock(), createBlock(unref(ElDropdown), {
					key: 0,
					ref: "retryDropdown",
					trigger: "click",
					onCommand: handleRetryClick
				}, {
					dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), null, {
						default: withCtx(() => [createVNode(unref(ElDropdownItem), { command: "current-workflow" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
							_: 1
						}), createVNode(unref(ElDropdownItem), { command: "original-workflow" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("span", _hoisted_2, [createVNode(unref(N8nIconButton_default), {
						size: "medium",
						type: "tertiary",
						title: unref(locale).baseText("executionsList.retryExecution"),
						disabled: !workflowPermissions.value.update,
						icon: "redo-2",
						"data-test-id": "execution-preview-retry-button",
						onBlur: onRetryButtonBlur
					}, null, 8, ["title", "disabled"])])]),
					_: 1
				}, 512)) : createCommentVNode("", true),
				isAnnotationEnabled.value && activeExecution.value ? (openBlock(), createBlock(WorkflowExecutionAnnotationPanel_ee_default, {
					key: 1,
					execution: activeExecution.value
				}, null, 8, ["execution"])) : createCommentVNode("", true),
				createVNode(unref(N8nIconButton_default), {
					title: unref(locale).baseText("executionDetails.deleteExecution"),
					disabled: !workflowPermissions.value.update,
					icon: "trash-2",
					size: "medium",
					type: "tertiary",
					"data-test-id": "execution-preview-delete-button",
					onClick: onDeleteExecution
				}, null, 8, ["title", "disabled"])
			], 2)], 10, _hoisted_1)) : createCommentVNode("", true), (openBlock(), createBlock(WorkflowPreview_default, {
				key: executionId.value,
				mode: "execution",
				"loader-type": "spinner",
				"execution-id": executionId.value,
				"execution-mode": _ctx.execution?.mode || "",
				"node-id": nodeId.value
			}, null, 8, [
				"execution-id",
				"execution-mode",
				"node-id"
			]))], 2)) : createCommentVNode("", true);
		};
	}
});
var WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default = {
	previewContainer: "_previewContainer_152nc_123",
	executionDetails: "_executionDetails_152nc_129",
	executionDetailsLeft: "_executionDetailsLeft_152nc_147",
	executionTitle: "_executionTitle_152nc_153",
	voteButtons: "_voteButtons_152nc_159",
	spinner: "_spinner_152nc_163",
	running: "_running_152nc_169",
	waiting: "_waiting_152nc_174",
	success: "_success_152nc_178",
	error: "_error_152nc_182",
	newInfo: "_newInfo_152nc_186",
	runningInfo: "_runningInfo_152nc_187",
	newMessage: "_newMessage_152nc_194",
	runningMessage: "_runningMessage_152nc_195",
	debugLink: "_debugLink_152nc_201",
	actions: "_actions_152nc_206",
	highlightDataButton: "_highlightDataButton_152nc_211",
	highlightDataButtonActive: "_highlightDataButtonActive_152nc_216",
	highlightDataButtonOpen: "_highlightDataButtonOpen_152nc_220",
	badge: "_badge_152nc_226"
};
var WorkflowExecutionsPreview_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default }]]);
export { WorkflowExecutionsPreview_default as default };
