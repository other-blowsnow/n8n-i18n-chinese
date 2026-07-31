import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Z as useI18n } from "./dist-D6Fs_XhZ.js";
import { Ki as N8nBadge_default, Nt as N8nInputLabel_default, Pt as Checkbox_default, a as RadioGroup_default, fo as N8nIcon_default, lo as Input_default, o as RadioGroupItem_default, oa as N8nTooltip_default, uo as N8nIconButton_default } from "./src-BggREpmn.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { nt as capitalCase } from "./workflowDocument.store-r47IF4Jj.js";
import { a as inferSelectionMode, i as groupScopes, n as classifyScope, r as getReadOnlyScopes, t as DEFAULT_READ_SCOPE_ACTIONS } from "./scopes.utils-BzBAYg8P.js";
//#region src/app/components/scopes/ScopesSelector.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = ["aria-expanded"];
var _hoisted_3 = { "data-test-id": "scopes-count" };
var _hoisted_4 = ["data-test-id"];
var _hoisted_5 = ["data-test-id"];
var ScopesSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScopesSelector",
	props: {
		modelValue: {},
		availableScopes: {},
		groups: {},
		i18nKeyPrefix: {},
		rootTestId: { default: "scopes-selector" },
		readActions: { default: () => DEFAULT_READ_SCOPE_ACTIONS },
		disabled: {
			type: Boolean,
			default: false
		},
		scopeTools: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const searchTerm = ref("");
		const expandedGroups = ref(/* @__PURE__ */ new Set());
		const userPickedCustom = ref(false);
		const mode = ref(inferSelectionMode(props.modelValue, props.availableScopes, props.readActions));
		const treeExpanded = ref(mode.value === "custom");
		watch(() => [props.modelValue, props.availableScopes], () => {
			const inferred = inferSelectionMode(props.modelValue, props.availableScopes, props.readActions);
			if (userPickedCustom.value && inferred !== "custom") return;
			mode.value = inferred;
		});
		watch(mode, (newMode) => {
			treeExpanded.value = newMode === "custom";
		});
		const isSearching = computed(() => searchTerm.value.trim() !== "");
		const selectedSet = computed(() => new Set(props.modelValue));
		const groupedScopes = computed(() => groupScopes(props.availableScopes, props.groups));
		const filteredGroups = computed(() => {
			const term = searchTerm.value.trim().toLowerCase();
			if (!term) return groupedScopes.value.map((group) => ({
				group,
				visibleScopes: group.scopes
			}));
			return groupedScopes.value.map((group) => ({
				group,
				visibleScopes: group.scopes.filter((scope) => scope.toLowerCase().includes(term))
			})).filter((entry) => entry.visibleScopes.length > 0);
		});
		function baseText(suffix, interpolate, adjustToNumber) {
			return i18n.baseText(`${props.i18nKeyPrefix}.${suffix}`, {
				interpolate,
				adjustToNumber
			});
		}
		function getGroupLabel(group) {
			if (group.isFallback) return capitalCase(group.key);
			return baseText(`group.${group.key}`);
		}
		function getBadgeLabel(scope) {
			return classifyScope(scope, props.readActions) === "read" ? baseText("badge.read") : baseText("badge.write");
		}
		function emitScopes(scopes) {
			emit("update:modelValue", scopes);
		}
		const modeOptions = computed(() => [
			{
				value: "all",
				label: baseText("all"),
				"data-test-id": "scopes-mode-all"
			},
			{
				value: "readOnly",
				label: baseText("readOnly"),
				"data-test-id": "scopes-mode-read-only"
			},
			{
				value: "custom",
				label: baseText("custom"),
				"data-test-id": "scopes-mode-custom"
			}
		]);
		function onModeChange(newMode) {
			if (newMode === void 0) return;
			userPickedCustom.value = newMode === "custom";
			if (newMode === "all") emitScopes([...props.availableScopes]);
			else if (newMode === "readOnly") emitScopes(getReadOnlyScopes(props.availableScopes, props.readActions));
			else if (newMode === "custom") emitScopes([]);
		}
		function isGroupExpanded(group) {
			return isSearching.value || expandedGroups.value.has(group.key);
		}
		function toggleGroupExpanded(group) {
			const expanded = new Set(expandedGroups.value);
			if (expanded.has(group.key)) expanded.delete(group.key);
			else expanded.add(group.key);
			expandedGroups.value = expanded;
		}
		const groupToolData = computed(() => {
			const data = /* @__PURE__ */ new Map();
			if (!props.scopeTools) return data;
			for (const group of groupedScopes.value) {
				const tools = /* @__PURE__ */ new Set();
				const enabled = /* @__PURE__ */ new Set();
				for (const scope of group.scopes) for (const tool of props.scopeTools[scope] ?? []) {
					tools.add(tool);
					if (selectedSet.value.has(scope)) enabled.add(tool);
				}
				data.set(group.key, {
					tools: [...tools],
					enabled
				});
			}
			return data;
		});
		function groupTools(group) {
			return groupToolData.value.get(group.key)?.tools ?? [];
		}
		function groupEnabledTools(group) {
			return groupToolData.value.get(group.key)?.enabled ?? /* @__PURE__ */ new Set();
		}
		function isGroupChecked(group) {
			return group.scopes.every((scope) => selectedSet.value.has(scope));
		}
		function isGroupIndeterminate(group) {
			return !isGroupChecked(group) && group.scopes.some((scope) => selectedSet.value.has(scope));
		}
		function toggleGroup(group, checked) {
			const selected = new Set(selectedSet.value);
			for (const scope of group.scopes) if (checked) selected.add(scope);
			else selected.delete(scope);
			emitScopes(props.availableScopes.filter((scope) => selected.has(scope)));
		}
		function toggleScope(scope, checked) {
			const selected = new Set(selectedSet.value);
			if (checked) selected.add(scope);
			else selected.delete(scope);
			emitScopes(props.availableScopes.filter((s) => selected.has(s)));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { "data-test-id": __props.rootTestId }, [createVNode(unref(N8nInputLabel_default), {
				label: baseText("label"),
				color: "text-dark"
			}, {
				default: withCtx(() => [createVNode(unref(RadioGroup_default), {
					modelValue: mode.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => mode.value = $event), onModeChange],
					disabled: __props.disabled,
					"aria-label": baseText("label"),
					"data-test-id": "scopes-mode-radio"
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(modeOptions.value, (option) => {
						return openBlock(), createBlock(unref(RadioGroupItem_default), mergeProps({ key: option.value }, { ref_for: true }, option), null, 16);
					}), 128))]),
					_: 1
				}, 8, [
					"modelValue",
					"disabled",
					"aria-label"
				])]),
				_: 1
			}, 8, ["label"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.customSection) }, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.treeHeader),
				"aria-expanded": treeExpanded.value,
				"data-test-id": "scopes-tree-toggle",
				onClick: _cache[1] || (_cache[1] = ($event) => treeExpanded.value = !treeExpanded.value)
			}, [createVNode(unref(N8nIcon_default), {
				icon: treeExpanded.value ? "chevron-down" : "chevron-right",
				size: "small"
			}, null, 8, ["icon"]), createBaseVNode("span", _hoisted_3, toDisplayString(baseText("count", {
				selected: __props.modelValue.length,
				total: __props.availableScopes.length
			})), 1)], 10, _hoisted_2), treeExpanded.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(Input_default), {
				modelValue: searchTerm.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchTerm.value = $event),
				clearable: "",
				placeholder: baseText("search.placeholder"),
				"aria-label": baseText("search.placeholder"),
				"data-test-id": "scopes-search"
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"modelValue",
				"placeholder",
				"aria-label"
			]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.groups) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredGroups.value, ({ group, visibleScopes }) => {
				return openBlock(), createElementBlock("div", { key: group.key }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupHeader) }, [
					!isSearching.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						icon: isGroupExpanded(group) ? "chevron-down" : "chevron-right",
						variant: "ghost",
						size: "small",
						"aria-expanded": isGroupExpanded(group),
						"aria-label": baseText("toggleGroup", { group: getGroupLabel(group) }),
						"data-test-id": `scope-group-toggle-${group.key}`,
						onClick: ($event) => toggleGroupExpanded(group)
					}, null, 8, [
						"icon",
						"aria-expanded",
						"aria-label",
						"data-test-id",
						"onClick"
					])) : createCommentVNode("", true),
					createVNode(unref(Checkbox_default), {
						"model-value": isGroupChecked(group),
						indeterminate: isGroupIndeterminate(group),
						label: getGroupLabel(group),
						disabled: __props.disabled,
						"data-test-id": `scope-group-${group.key}`,
						"onUpdate:modelValue": (checked) => toggleGroup(group, checked)
					}, null, 8, [
						"model-value",
						"indeterminate",
						"label",
						"disabled",
						"data-test-id",
						"onUpdate:modelValue"
					]),
					groupTools(group).length > 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "right",
						"show-after": 150,
						"content-class": _ctx.$style["tools-tooltip"]
					}, {
						content: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style["tools-popover"]),
							"data-test-id": `scope-group-tools-popover-${group.key}`
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style["tools-popover-header"]) }, toDisplayString(baseText("tools.enabledOf", {
							enabled: groupEnabledTools(group).size,
							total: groupTools(group).length
						})), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(groupTools(group), (tool) => {
							return openBlock(), createElementBlock("div", {
								key: tool,
								class: normalizeClass([_ctx.$style["tool-row"], { [_ctx.$style["tool-row-disabled"]]: !groupEnabledTools(group).has(tool) }])
							}, [createVNode(unref(N8nIcon_default), {
								icon: groupEnabledTools(group).has(tool) ? "check" : "circle",
								size: "xsmall",
								class: normalizeClass(_ctx.$style["tool-icon"])
							}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style["tool-name"]) }, toDisplayString(tool), 3)], 2);
						}), 128))], 10, _hoisted_4)]),
						default: withCtx(() => [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style["tools-tag"]),
							tabindex: "0",
							"data-test-id": `scope-group-tools-${group.key}`
						}, [createVNode(unref(N8nIcon_default), {
							icon: "wrench",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(baseText("tools.count", { count: groupTools(group).length }, groupTools(group).length)), 1)], 10, _hoisted_5)]),
						_: 2
					}, 1032, ["content-class"])) : createCommentVNode("", true)
				], 2), isGroupExpanded(group) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.scopeList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleScopes, (scope) => {
					return openBlock(), createElementBlock("div", {
						key: scope,
						class: normalizeClass(_ctx.$style.scopeRow)
					}, [createVNode(unref(Checkbox_default), {
						"model-value": selectedSet.value.has(scope),
						label: scope,
						disabled: __props.disabled,
						"data-test-id": `scope-checkbox-${scope}`,
						"onUpdate:modelValue": (checked) => toggleScope(scope, checked)
					}, null, 8, [
						"model-value",
						"label",
						"disabled",
						"data-test-id",
						"onUpdate:modelValue"
					]), createVNode(unref(N8nBadge_default), { theme: unref(classifyScope)(scope, __props.readActions) === "read" ? "default" : "success" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(getBadgeLabel(scope)), 1)]),
						_: 2
					}, 1032, ["theme"])], 2);
				}), 128))], 2)) : createCommentVNode("", true)]);
			}), 128))], 2)], 64)) : createCommentVNode("", true)], 2)], 8, _hoisted_1);
		};
	}
});
//#endregion
//#region src/app/components/scopes/ScopesSelector.vue?vue&type=style&index=0&lang.module.scss
var customSection = "_customSection_1adp7_125";
var treeHeader = "_treeHeader_1adp7_132";
var groups = "_groups_1adp7_150";
var groupHeader = "_groupHeader_1adp7_158";
var scopeList = "_scopeList_1adp7_229";
var scopeRow = "_scopeRow_1adp7_236";
var ScopesSelector_vue_vue_type_style_index_0_lang_module_default = {
	customSection,
	treeHeader,
	groups,
	groupHeader,
	"tools-tag": "_tools-tag_1adp7_164",
	"tools-tooltip": "_tools-tooltip_1adp7_185",
	"tools-popover": "_tools-popover_1adp7_190",
	"tools-popover-header": "_tools-popover-header_1adp7_201",
	"tool-row": "_tool-row_1adp7_210",
	"tool-icon": "_tool-icon_1adp7_215",
	"tool-row-disabled": "_tool-row-disabled_1adp7_219",
	"tool-name": "_tool-name_1adp7_220",
	scopeList,
	scopeRow
};
var ScopesSelector_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ScopesSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ScopesSelector_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ScopesSelector_default as t };
