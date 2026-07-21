import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-Cb7jeMu8.js";
import { $a as N8nHeading_default, Qi as Input_default, b as N8nScrollArea_default, no as N8nButton_default, ro as N8nIcon_default, t as MarkdownEditor_default, ta as N8nActionBox_default, to as N8nText_default } from "./src-DAbbz2gO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import "./constants-BG93cxLW.js";
import { f as useUIStore } from "./users.store-ChwfO1rT.js";
import { t as Modal_default } from "./Modal-DonAXSod.js";
//#region src/features/agents/components/AgentSubAgentsModal.vue?vue&type=script&setup=true&lang.ts
var AgentSubAgentsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSubAgentsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const availableAgents = computed(() => "agents" in props.data ? props.data.agents : []);
		const hasAgents = computed(() => availableAgents.value.length > 0);
		const searchQuery = ref("");
		const normalizedSearchQuery = computed(() => searchQuery.value.trim().toLowerCase());
		const filteredAgents = computed(() => normalizedSearchQuery.value ? availableAgents.value.filter((agent) => agent.name.toLowerCase().includes(normalizedSearchQuery.value)) : availableAgents.value);
		const hasMatchingAgents = computed(() => filteredAgents.value.length > 0);
		const isEditing = computed(() => Boolean(props.data.selectedAgent));
		const selectedAgent = ref(props.data.selectedAgent ?? null);
		const useWhen = ref(("useWhen" in props.data ? props.data.useWhen : "") ?? "");
		const useWhenTrimmed = computed(() => useWhen.value.trim());
		const useWhenError = computed(() => {
			if (useWhenTrimmed.value.length <= 512) return "";
			return i18n.baseText("agents.builder.subAgents.useWhen.validation.maxLength", { interpolate: { max: String(512) } });
		});
		const canConfirm = computed(() => !useWhenError.value);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		function onSelectAgent(agent) {
			selectedAgent.value = agent;
			useWhen.value = "";
		}
		function onBack() {
			if (isEditing.value) return;
			selectedAgent.value = null;
			useWhen.value = "";
		}
		function onRemove() {
			if (!selectedAgent.value) return;
			props.data.onRemove?.(selectedAgent.value.id);
			closeModal();
		}
		function onConfirm() {
			if (!selectedAgent.value || !canConfirm.value) return;
			props.data.onConfirm({
				agentId: selectedAgent.value.id,
				...useWhenTrimmed.value ? { useWhen: useWhenTrimmed.value } : {}
			});
			closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				width: "640px",
				"custom-class": _ctx.$style.modal,
				"data-testid": "agent-sub-agents-modal"
			}, createSlots({
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedAgent.value ? selectedAgent.value.name : unref(i18n).baseText("agents.builder.subAgents.modal.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [!selectedAgent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.description")), 1)]),
						_: 1
					}),
					hasAgents.value ? (openBlock(), createBlock(unref(Input_default), {
						key: 0,
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						placeholder: unref(i18n).baseText("agents.builder.subAgents.modal.search.placeholder"),
						clearable: "",
						"data-testid": "agent-sub-agents-modal-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "search",
							size: 16
						})]),
						_: 1
					}, 8, ["modelValue", "placeholder"])) : createCommentVNode("", true),
					hasAgents.value && hasMatchingAgents.value ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
						key: 1,
						"max-height": "420px",
						type: "auto"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAgents.value, (agent) => {
							return openBlock(), createElementBlock("div", {
								key: agent.id,
								class: normalizeClass(_ctx.$style.row),
								"data-testid": "agent-sub-agents-modal-row"
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(unref(N8nIcon_default), {
									icon: "bot",
									size: 24,
									class: normalizeClass(_ctx.$style.itemIcon)
								}, null, 8, ["class"])], 2),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowBody) }, [createVNode(unref(N8nText_default), {
									size: "small",
									color: "text-dark",
									class: normalizeClass(_ctx.$style.name)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(agent.name), 1)]),
									_: 2
								}, 1032, ["class"])], 2),
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
									variant: "subtle",
									size: "small",
									"data-testid": "agent-sub-agents-modal-add",
									onClick: ($event) => onSelectAgent(agent)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.add")), 1)]),
									_: 1
								}, 8, ["onClick"])], 2)
							], 2);
						}), 128))], 2)]),
						_: 1
					})) : hasAgents.value && !hasMatchingAgents.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
						key: 2,
						icon: {
							type: "icon",
							value: "bot"
						},
						heading: unref(i18n).baseText("agents.builder.subAgents.modal.noResults.title"),
						description: unref(i18n).baseText("agents.builder.subAgents.modal.noResults.description"),
						"data-testid": "agent-sub-agents-modal-no-results"
					}, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nActionBox_default), {
						key: 3,
						icon: {
							type: "icon",
							value: "bot"
						},
						heading: unref(i18n).baseText("agents.builder.subAgents.modal.empty.title"),
						description: unref(i18n).baseText("agents.builder.subAgents.modal.empty.description"),
						"data-testid": "agent-sub-agents-modal-empty"
					}, null, 8, ["heading", "description"]))
				], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.content, _ctx.$style.configureContent])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.useWhen.label")), 1)]),
						_: 1
					})], 2),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.useWhen.hint")), 1)]),
						_: 1
					}),
					createVNode(unref(MarkdownEditor_default), {
						class: normalizeClass(_ctx.$style.useWhenEditor),
						"model-value": useWhen.value,
						placeholder: unref(i18n).baseText("agents.builder.subAgents.useWhen.placeholder"),
						"max-height": "100%",
						"data-testid": "agent-sub-agents-modal-use-when",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => useWhen.value = $event)
					}, null, 8, [
						"class",
						"model-value",
						"placeholder"
					]),
					useWhenError.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "danger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(useWhenError.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.useWhen.characterCount", { interpolate: {
							count: String(useWhen.value.length),
							max: String(unref(512))
						} })), 1)]),
						_: 1
					})
				], 2)], 2))]),
				_: 2
			}, [selectedAgent.value ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [isEditing.value && __props.data.onRemove ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"data-testid": "agent-sub-agents-modal-remove",
					onClick: onRemove
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.remove")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					"data-testid": "agent-sub-agents-modal-back",
					onClick: onBack
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.back")), 1)]),
					_: 1
				})), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canConfirm.value,
					"data-testid": "agent-sub-agents-modal-confirm",
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(isEditing.value ? "generic.save" : "agents.builder.subAgents.modal.add")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)]),
				key: "0"
			} : void 0]), 1032, ["name", "custom-class"]);
		};
	}
});
var AgentSubAgentsModal_vue_vue_type_style_index_0_lang_module_default = {
	modal: "_modal_1jvn9_125",
	content: "_content_1jvn9_129",
	configureContent: "_configureContent_1jvn9_137",
	rows: "_rows_1jvn9_142",
	row: "_row_1jvn9_142",
	iconWrapper: "_iconWrapper_1jvn9_156",
	rowBody: "_rowBody_1jvn9_164",
	name: "_name_1jvn9_172",
	itemIcon: "_itemIcon_1jvn9_181",
	actions: "_actions_1jvn9_185",
	field: "_field_1jvn9_192",
	label: "_label_1jvn9_200",
	useWhenEditor: "_useWhenEditor_1jvn9_204",
	footer: "_footer_1jvn9_208",
	footerActions: "_footerActions_1jvn9_214"
};
var AgentSubAgentsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSubAgentsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSubAgentsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSubAgentsModal_default as default };
