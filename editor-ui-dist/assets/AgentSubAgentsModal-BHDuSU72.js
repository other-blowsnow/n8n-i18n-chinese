import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-D8xRy2J0.js";
import { At as N8nCard_default, Ga as N8nHeading_default, Ja as N8nButton_default, Ki as N8nActionBox_default, qa as N8nText_default, v as N8nScrollArea_default, vt as Checkbox_default } from "./src-BwN8TeVO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { f as useUIStore } from "./users.store-CUZkGc51.js";
import { t as Modal_default } from "./Modal-BPkKtKFQ.js";
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
		const selectedAgentIds = ref([]);
		const selectedAgentIdSet = computed(() => new Set(selectedAgentIds.value));
		const canAdd = computed(() => selectedAgentIds.value.length > 0);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		function setAgentSelected(agentId, selected) {
			if (selected) {
				if (!selectedAgentIdSet.value.has(agentId)) selectedAgentIds.value = [...selectedAgentIds.value, agentId];
				return;
			}
			selectedAgentIds.value = selectedAgentIds.value.filter((id) => id !== agentId);
		}
		function toggleAgent(agentId) {
			setAgentSelected(agentId, !selectedAgentIdSet.value.has(agentId));
		}
		function onCheckboxUpdate(agentId, value) {
			setAgentSelected(agentId, Boolean(value));
		}
		function onAdd() {
			if (!canAdd.value) return;
			props.data.onConfirm(selectedAgentIds.value);
			closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				width: "640px",
				"custom-class": _ctx.$style.modal,
				"data-testid": "agent-sub-agents-modal"
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.title")), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.description")), 1)]),
					_: 1
				}), __props.data.agents.length > 0 ? (openBlock(), createBlock(unref(N8nScrollArea_default), {
					key: 0,
					"max-height": "420px",
					type: "auto"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.data.agents, (agent) => {
						return openBlock(), createBlock(unref(N8nCard_default), {
							key: agent.id,
							class: normalizeClass([_ctx.$style.row, selectedAgentIdSet.value.has(agent.id) ? _ctx.$style.selectedRow : ""]),
							"data-testid": "agent-sub-agents-modal-row",
							onClick: ($event) => toggleAgent(agent.id)
						}, {
							prepend: withCtx(() => [createVNode(unref(Checkbox_default), {
								"model-value": selectedAgentIdSet.value.has(agent.id),
								"aria-label": unref(i18n).baseText("agents.builder.subAgents.modal.selectAgent", { interpolate: { name: agent.name } }),
								"data-testid": "agent-sub-agents-modal-checkbox",
								onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
								"onUpdate:modelValue": (value) => onCheckboxUpdate(agent.id, value)
							}, null, 8, [
								"model-value",
								"aria-label",
								"onUpdate:modelValue"
							])]),
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.rowBody) }, [createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-dark",
								bold: true,
								class: normalizeClass(_ctx.$style.name)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(agent.name), 1)]),
								_: 2
							}, 1032, ["class"]), agent.description ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "xsmall",
								color: "text-light",
								class: normalizeClass(_ctx.$style.description)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(agent.description), 1)]),
								_: 2
							}, 1032, ["class"])) : createCommentVNode("", true)], 2)]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nActionBox_default), {
					key: 1,
					icon: {
						type: "icon",
						value: "bot"
					},
					heading: unref(i18n).baseText("agents.builder.subAgents.modal.empty.title"),
					description: unref(i18n).baseText("agents.builder.subAgents.modal.empty.description"),
					"data-testid": "agent-sub-agents-modal-empty"
				}, null, 8, ["heading", "description"]))], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !canAdd.value,
					"data-testid": "agent-sub-agents-modal-add",
					onClick: onAdd
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.modal.add")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "custom-class"]);
		};
	}
});
var AgentSubAgentsModal_vue_vue_type_style_index_0_lang_module_default = {
	modal: "_modal_y00yw_125",
	content: "_content_y00yw_129",
	rows: "_rows_y00yw_137",
	row: "_row_y00yw_137",
	selectedRow: "_selectedRow_y00yw_150",
	rowBody: "_rowBody_y00yw_154",
	name: "_name_y00yw_162",
	description: "_description_y00yw_170",
	footer: "_footer_y00yw_178"
};
var AgentSubAgentsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSubAgentsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSubAgentsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSubAgentsModal_default as default };
