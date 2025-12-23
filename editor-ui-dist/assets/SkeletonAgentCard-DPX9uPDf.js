import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { X as refDebounced, gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Gn as N8nIcon_default, Hn as N8nText_default, n as Input_default, ot as N8nActionDropdown_default, r as Select_default, xt as N8nIconButton_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { f as RouterLink } from "./truncate-BlCeUq7F.js";
import { nr as hasPermission } from "./builder.store-BjWbk2Wl.js";
import { s as getAgentRoute } from "./chat.store-DnJwLoWK.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-hwD4RBR6.js";
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
		const canEdit = computed(() => __props.agent.model.provider === "custom-agent" || hasPermission(["rbac"], { rbac: { scope: ["workflow:read"] } }));
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
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.description || unref(i18n).baseText("chatHub.agent.card.noDescription")), 1)]),
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
				"model-value": _ctx.modelValue.sortBy,
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
	controls: "_controls_o7wvu_123",
	search: "_search_o7wvu_129",
	sort: "_sort_o7wvu_134"
};
var ChatAgentSearchSort_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentSearchSort_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentSearchSort_vue_vue_type_style_index_0_lang_module_default }]]);
const card = "_card_lcq8a_123";
const skeleton = "_skeleton_lcq8a_133";
const avatar = "_avatar_lcq8a_139";
const content = "_content_lcq8a_148";
const title = "_title_lcq8a_156";
const description = "_description_lcq8a_161";
const actionButton = "_actionButton_lcq8a_166";
var SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	skeleton,
	"skeleton-pulse": "_skeleton-pulse_lcq8a_1",
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
