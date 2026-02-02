import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Hi as N8nIcon_default, Li as N8nHeading_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Hi as abbreviateNumber, bi as filterTemplateNodes } from "./users.store-qBZsmf9-.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import { t as TimeAgo_default } from "./TimeAgo-DjW9pnWX.js";
var NodeList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeList",
	props: {
		nodes: {},
		limit: { default: 4 },
		size: { default: "sm" }
	},
	setup(__props) {
		const props = __props;
		const filteredCoreNodes = computed(() => {
			return filterTemplateNodes(props.nodes);
		});
		const hiddenNodes = computed(() => {
			return filteredCoreNodes.value.length - countNodesToBeSliced(filteredCoreNodes.value);
		});
		const slicedNodes = computed(() => {
			return filteredCoreNodes.value.slice(0, countNodesToBeSliced(filteredCoreNodes.value));
		});
		const countNodesToBeSliced = (nodes$2) => {
			if (nodes$2.length > props.limit) return props.limit - 1;
			else return props.limit;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.list) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(slicedNodes.value, (node) => {
				return openBlock(), createElementBlock("div", {
					key: node.name,
					class: normalizeClass([_ctx.$style.container, _ctx.$style[__props.size]])
				}, [createVNode(NodeIcon_default, {
					"node-type": node,
					size: __props.size === "md" ? 24 : 18,
					"show-tooltip": true
				}, null, 8, ["node-type", "size"])], 2);
			}), 128)), filteredCoreNodes.value.length > __props.limit + 1 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.button, __props.size === "md" ? _ctx.$style.buttonMd : _ctx.$style.buttonSm])
			}, " +" + toDisplayString(hiddenNodes.value), 3)) : createCommentVNode("", true)], 2);
		};
	}
});
var NodeList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_1uohu_125",
	container: "_container_1uohu_133",
	sm: "_sm_1uohu_138",
	md: "_md_1uohu_142",
	button: "_button_1uohu_146",
	buttonSm: "_buttonSm_1uohu_160",
	buttonMd: "_buttonMd_1uohu_167"
};
var NodeList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeList_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { key: 1 };
var _hoisted_2$1 = { key: 0 };
var nodesToBeShown = 5;
var TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateCard",
	props: {
		workflow: {},
		lastItem: {
			type: Boolean,
			default: false
		},
		firstItem: {
			type: Boolean,
			default: false
		},
		useWorkflowButton: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		simpleView: {
			type: Boolean,
			default: false
		}
	},
	emits: ["useWorkflow", "click"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const emit = __emit;
		function onUseWorkflowClick(e) {
			emit("useWorkflow", e);
		}
		function onCardClick(e) {
			emit("click", e);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					_ctx.$style.card,
					__props.lastItem && _ctx.$style.last,
					__props.firstItem && _ctx.$style.first,
					!__props.loading && _ctx.$style.loaded
				]),
				"data-test-id": "template-card",
				onClick: onCardClick
			}, [
				__props.loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nLoading_default), {
					rows: 2,
					"shrink-last": false,
					loading: __props.loading
				}, null, 8, ["loading"])], 2)) : __props.workflow ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nHeading_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.workflow.name), 1)]),
					_: 1
				}), !__props.simpleView ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					__props.workflow.totalViews ? (openBlock(), createElementBlock("span", _hoisted_2$1, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "eye",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(unref(abbreviateNumber)(__props.workflow.totalViews)), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					__props.workflow.totalViews ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.line),
						textContent: "|"
					}, null, 2)) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(TimeAgo_default, { date: __props.workflow.createdAt }, null, 8, ["date"])]),
						_: 1
					}),
					__props.workflow.user ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.line),
						textContent: "|"
					}, null, 2)) : createCommentVNode("", true),
					__props.workflow.user ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.byAuthor", { interpolate: { name: __props.workflow.user.username } })), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true),
				!__props.loading && __props.workflow ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.nodesContainer, __props.useWorkflowButton && _ctx.$style.hideOnHover])
				}, [__props.workflow.nodes ? (openBlock(), createBlock(NodeList_default, {
					key: 0,
					nodes: __props.workflow.nodes,
					limit: nodesToBeShown,
					size: "md"
				}, null, 8, ["nodes"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				__props.useWorkflowButton ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.buttonContainer)
				}, [__props.useWorkflowButton ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					outline: "",
					label: "Use workflow",
					"data-test-id": "use-workflow-button",
					onClick: withModifiers(onUseWorkflowClick, ["stop"])
				})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	nodes: "_nodes_1s7e9_125",
	icon: "_icon_1s7e9_132",
	card: "_card_1s7e9_136",
	hideOnHover: "_hideOnHover_1s7e9_148",
	buttonContainer: "_buttonContainer_1s7e9_151",
	loaded: "_loaded_1s7e9_162",
	first: "_first_1s7e9_166",
	last: "_last_1s7e9_172",
	content: "_content_1s7e9_177",
	line: "_line_1s7e9_182",
	loading: "_loading_1s7e9_188",
	nodesContainer: "_nodesContainer_1s7e9_193"
};
var TemplateCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = {
	key: 0,
	"data-test-id": "template-count-label"
};
var _hoisted_2 = ["textContent"];
var _hoisted_3 = {
	key: 1,
	"data-test-id": "templates-loading-container"
};
var TemplateList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateList",
	props: {
		workflows: { default: () => [] },
		infiniteScrollEnabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		useWorkflowButton: {
			type: Boolean,
			default: false
		},
		totalWorkflows: { default: 0 },
		simpleView: {
			type: Boolean,
			default: false
		},
		totalCount: { default: 0 }
	},
	emits: [
		"loadMore",
		"openTemplate",
		"useWorkflow"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const i18n = useI18n();
		const loader = ref(null);
		onMounted(() => {
			if (props.infiniteScrollEnabled) {
				const content$1 = document.getElementById("content");
				if (content$1) content$1.addEventListener("scroll", onScroll);
			}
		});
		onBeforeUnmount(() => {
			const content$1 = document.getElementById("content");
			if (content$1) content$1.removeEventListener("scroll", onScroll);
		});
		function onScroll() {
			const loaderRef = loader.value;
			if (!loaderRef || props.loading) return;
			const rect = loaderRef.getBoundingClientRect();
			if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) emit("loadMore");
		}
		function onCardClick(event, id) {
			emit("openTemplate", {
				event,
				id
			});
		}
		function onUseWorkflow(event, id) {
			emit("useWorkflow", {
				event,
				id
			});
		}
		return (_ctx, _cache) => {
			return __props.loading || __props.workflows.length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.list)
			}, [!__props.simpleView ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createVNode(unref(N8nHeading_default), {
				bold: true,
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [
					createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflows")) + " ", 1),
					__props.totalCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "(" + toDisplayString(__props.totalCount) + ")", 1)) : createCommentVNode("", true),
					!__props.loading && __props.totalWorkflows ? (openBlock(), createElementBlock("span", {
						key: 1,
						textContent: toDisplayString(`(${__props.totalWorkflows})`)
					}, null, 8, _hoisted_2)) : createCommentVNode("", true)
				]),
				_: 1
			})], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(__props.workflows, (workflow, index) => {
					return openBlock(), createBlock(TemplateCard_default, {
						key: workflow.id,
						workflow,
						"first-item": index === 0,
						"simple-view": __props.simpleView,
						"last-item": index === __props.workflows.length - 1 && !__props.loading,
						"use-workflow-button": __props.useWorkflowButton,
						onClick: (e) => onCardClick(e, workflow.id),
						onUseWorkflow: (e) => onUseWorkflow(e, workflow.id)
					}, null, 8, [
						"workflow",
						"first-item",
						"simple-view",
						"last-item",
						"use-workflow-button",
						"onClick",
						"onUseWorkflow"
					]);
				}), 128)),
				__props.infiniteScrollEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "loader",
					ref: loader
				}, null, 512)) : createCommentVNode("", true),
				__props.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [(openBlock(), createElementBlock(Fragment, null, renderList(4, (n) => {
					return createVNode(TemplateCard_default, {
						key: "index-" + n,
						loading: true,
						"first-item": __props.workflows.length === 0 && n === 1,
						"last-item": n === 4
					}, null, 8, ["first-item", "last-item"]);
				}), 64))])) : createCommentVNode("", true)
			], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
var TemplateList_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1tbk0_125",
	workflowButton: "_workflowButton_1tbk0_129",
	button: "_button_1tbk0_129",
	nodes: "_nodes_1tbk0_132"
};
var TemplateList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateList_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeList_default as n, TemplateList_default as t };
