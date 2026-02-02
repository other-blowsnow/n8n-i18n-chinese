import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Q as refDebounced, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, Hi as N8nIcon_default, St as N8nActionDropdown_default, i as Select_default, jt as RouterLink, r as Input_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { c as getAgentRoute } from "./chat.store-iit3mf2V.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-D0NEe1bL.js";
var ChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentCard",
	props: { agent: {} },
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const menuItems = computed(() => {
			return __props.agent.model.provider === "custom-agent" ? [{
				id: "delete",
				label: i18n.baseText("chatHub.agent.card.menu.delete")
			}] : [];
		});
		const canEdit = computed(() => __props.agent.model.provider === "custom-agent" || __props.agent.model.provider === "n8n" && __props.agent.metadata.scopes?.includes("workflow:read"));
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
				to: unref(getAgentRoute)(__props.agent.model),
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "chat-agent-card"
			}, {
				default: withCtx(() => [
					createVNode(ChatAgentAvatar_default, {
						agent: __props.agent,
						size: "lg"
					}, null, 8, ["agent"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
						tag: "h3",
						size: "medium",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.description || unref(i18n).baseText("chatHub.agent.card.noDescription")), 1)]),
						_: 1
					}, 8, ["class"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [canEdit.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						icon: "pen",
						type: "tertiary",
						size: "medium",
						title: unref(i18n).baseText("chatHub.agent.card.button.edit"),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("edit"), ["prevent"]))
					}, null, 8, ["title"])) : createCommentVNode("", true), menuItems.value.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
						key: 1,
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
					}, 8, ["items"])) : createCommentVNode("", true)], 2)
				]),
				_: 1
			}, 8, ["to", "class"]);
		};
	}
});
var ChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1ipvo_125",
	avatar: "_avatar_1ipvo_141",
	content: "_content_1ipvo_145",
	badge: "_badge_1ipvo_153",
	title: "_title_1ipvo_157",
	description: "_description_1ipvo_163",
	actions: "_actions_1ipvo_169",
	actionDropdownTrigger: "_actionDropdownTrigger_1ipvo_175"
};
var ChatAgentCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatAgentSearchSort_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentSearchSort",
	props: { modelValue: {} },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const sortOptions = computed(() => [{
			label: i18n.baseText("chatHub.agents.sort.updatedAt"),
			value: "updatedAt"
		}, {
			label: i18n.baseText("chatHub.agents.sort.createdAt"),
			value: "createdAt"
		}]);
		const localSearch = ref(props.modelValue.search);
		const debouncedSearch = refDebounced(localSearch, 300);
		watch(() => props.modelValue.search, (newSearch) => {
			if (newSearch !== localSearch.value) localSearch.value = newSearch;
		});
		watch(debouncedSearch, (newSearch) => {
			if (newSearch !== props.modelValue.search) emit("update:modelValue", {
				...props.modelValue,
				search: newSearch
			});
		});
		function updateSortBy(value) {
			emit("update:modelValue", {
				...props.modelValue,
				sortBy: value
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(Input_default), {
				modelValue: localSearch.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localSearch.value = $event),
				class: normalizeClass(_ctx.$style.search),
				size: "medium",
				placeholder: unref(i18n).baseText("chatHub.agents.search.placeholder"),
				clearable: ""
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"modelValue",
				"class",
				"placeholder"
			]), createVNode(unref(Select_default), {
				size: "medium",
				"model-value": __props.modelValue.sortBy,
				class: normalizeClass(_ctx.$style.sort),
				items: sortOptions.value,
				"onUpdate:modelValue": updateSortBy
			}, null, 8, [
				"model-value",
				"class",
				"items"
			])], 2);
		};
	}
});
var ChatAgentSearchSort_vue_vue_type_style_index_0_lang_module_default = {
	controls: "_controls_yu4uw_125",
	search: "_search_yu4uw_131",
	sort: "_sort_yu4uw_136"
};
var ChatAgentSearchSort_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentSearchSort_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentSearchSort_vue_vue_type_style_index_0_lang_module_default }]]);
const card = "_card_1139r_125";
const skeleton = "_skeleton_1139r_135";
const avatar = "_avatar_1139r_141";
const content = "_content_1139r_150";
const title = "_title_1139r_158";
const description = "_description_1139r_163";
const actionButton = "_actionButton_1139r_168";
var SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	skeleton,
	"skeleton-pulse": "_skeleton-pulse_1139r_1",
	avatar,
	content,
	title,
	description,
	actionButton
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
		createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, null, 2),
		createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.title]) }, null, 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.description]) }, null, 2)], 2),
		createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.actionButton]) }, null, 2)
	], 2);
}
var SkeletonAgentCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentSearchSort_default as n, ChatAgentCard_default as r, SkeletonAgentCard_default as t };
