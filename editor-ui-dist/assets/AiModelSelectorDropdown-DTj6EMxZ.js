import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ja as N8nButton_default, Ji as truncateBeforeLast, Ti as N8nBadge_default, Vt as DropdownMenu_default, Ya as N8nIcon_default, qa as N8nText_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/features/ai/modelSelector/AiModelSelectorDropdown.vue?vue&type=script&setup=true&lang.ts
var AiModelSelectorDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiModelSelectorDropdown",
	props: {
		items: {},
		selectedLabel: {},
		selectedCredentialName: {},
		credentialsMissing: {
			type: Boolean,
			default: false
		},
		credentialsMissingLabel: {},
		noMatchLabel: {},
		horizontal: {
			type: Boolean,
			default: false
		},
		text: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		dataTestId: {},
		credentialDataTestId: {},
		maxSelectedNameChars: {}
	},
	emits: ["select", "search"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const dropdownRef = useTemplateRef("dropdownRef");
		const searchQuery = ref("");
		const $style = useCssModule();
		const extraPopperClass = computed(() => [$style.component, searchQuery.value ? $style.searching : ""].join(" "));
		function handleSearch(query) {
			if (__props.disabled) return;
			searchQuery.value = query;
			emit("search", query);
		}
		function handleSelect(id) {
			if (__props.disabled) return;
			emit("select", id);
		}
		__expose({ open: () => {
			if (!__props.disabled) dropdownRef.value?.open();
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: __props.items,
				teleported: "",
				placement: "bottom-start",
				"extra-popper-class": extraPopperClass.value,
				searchable: "",
				"empty-text": searchQuery.value ? __props.noMatchLabel : void 0,
				onSearch: handleSearch,
				onSelect: handleSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: __props.text ? "ghost" : "outline",
					class: normalizeClass([unref($style).dropdownButton, __props.horizontal && unref($style).dropdownButtonHorizontal]),
					text: __props.text,
					disabled: __props.disabled,
					size: "large",
					"data-test-id": __props.dataTestId
				}, {
					default: withCtx(() => [
						renderSlot(_ctx.$slots, "trigger-leading", { ui: { class: unref($style).icon } }),
						createBaseVNode("div", { class: normalizeClass([unref($style).selected, __props.horizontal && unref($style).selectedHorizontal]) }, [createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(__props.selectedLabel, __props.maxSelectedNameChars)), 1)]),
							_: 1
						}), __props.selectedCredentialName ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: __props.horizontal ? "small" : "xsmall",
							color: "text-light",
							"data-test-id": __props.credentialDataTestId
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(__props.selectedCredentialName, __props.maxSelectedNameChars)), 1)]),
							_: 1
						}, 8, ["size", "data-test-id"])) : __props.credentialsMissing ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							size: "xsmall",
							color: "danger"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "node-validation-error",
								size: "xsmall",
								class: normalizeClass(unref($style).credentialsMissingIcon)
							}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(__props.credentialsMissingLabel), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 2),
						createVNode(unref(N8nIcon_default), {
							class: normalizeClass(__props.horizontal && unref($style).chevronHorizontal),
							icon: "chevron-down",
							size: "medium"
						}, null, 8, ["class"])
					]),
					_: 3
				}, 8, [
					"variant",
					"class",
					"text",
					"disabled",
					"data-test-id"
				])]),
				"item-leading": withCtx(({ item, ui }) => [renderSlot(_ctx.$slots, "item-leading", {
					item,
					ui
				}), !item.data && item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: item.icon.value,
					class: normalizeClass(ui.class),
					color: "text-light",
					size: "large"
				}, null, 8, ["icon", "class"])) : !item.data && item.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass([unref($style).emoji, ui.class])
				}, toDisplayString(item.icon.value), 3)) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [item.data?.parts ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([unref($style).flattenedLabel, ui.class])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.data.parts, (part, index) => {
					return openBlock(), createElementBlock(Fragment, { key: index }, [index > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						class: normalizeClass(unref($style).separator)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "small"
						})]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
						size: "medium",
						color: index === item.data.parts.length - 1 ? "text-dark" : "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(part), 1)]),
						_: 2
					}, 1032, ["color"])], 64);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([unref($style).labelWithBadge, ui.class])
				}, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1024), item.data?.badgeLabel ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					class: normalizeClass(unref($style).badge),
					theme: "secondary",
					size: "xsmall",
					"show-border": false
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.data.badgeLabel), 1)]),
					_: 2
				}, 1032, ["class"])) : createCommentVNode("", true)], 2))]),
				"item-trailing": withCtx(({ item, ui }) => [item.data?.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(truncateBeforeLast)(item.data.description, 320, 0),
					class: normalizeClass(ui.class),
					placement: "left",
					teleported: item.data.descriptionTooltipTeleported ?? true
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "medium",
						color: "text-light",
						class: normalizeClass(unref($style).infoIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, [
					"content",
					"class",
					"teleported"
				])) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"items",
				"extra-popper-class",
				"empty-text"
			]);
		};
	}
});
var AiModelSelectorDropdown_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1d120_125",
	dropdownButton: "_dropdownButton_1d120_130",
	credentialsMissingIcon: "_credentialsMissingIcon_1d120_139",
	selected: "_selected_1d120_144",
	dropdownButtonHorizontal: "_dropdownButtonHorizontal_1d120_151",
	selectedHorizontal: "_selectedHorizontal_1d120_168",
	chevronHorizontal: "_chevronHorizontal_1d120_183",
	icon: "_icon_1d120_188",
	infoIcon: "_infoIcon_1d120_193",
	menuIcon: "_menuIcon_1d120_194",
	emoji: "_emoji_1d120_198",
	flattenedLabel: "_flattenedLabel_1d120_207",
	separator: "_separator_1d120_216",
	labelWithBadge: "_labelWithBadge_1d120_222",
	badge: "_badge_1d120_235"
};
var AiModelSelectorDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiModelSelectorDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiModelSelectorDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AiModelSelectorDropdown_default as t };
