import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DZMn6F95.js";
import { An as N8nHeading_default, Fn as N8nIcon_default, Mn as N8nText_default, Nn as N8nButton_default, et as N8nLoading_default } from "./src-DuV1yrAd.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Gr as filterTemplateNodes, pi as abbreviateNumber } from "./useTelemetry-C3cN19b2.js";
import { t as NodeIcon_default } from "./NodeIcon-gge00gA3.js";
import { t as TimeAgo_default } from "./TimeAgo-CbvVag-o.js";
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
					class: normalizeClass([_ctx.$style.container, _ctx.$style[_ctx.size]])
				}, [createVNode(NodeIcon_default, {
					"node-type": node,
					size: _ctx.size === "md" ? 24 : 18,
					"show-tooltip": true
				}, null, 8, ["node-type", "size"])], 2);
			}), 128)), filteredCoreNodes.value.length > _ctx.limit + 1 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.button, _ctx.size === "md" ? _ctx.$style.buttonMd : _ctx.$style.buttonSm])
			}, " +" + toDisplayString(hiddenNodes.value), 3)) : createCommentVNode("", true)], 2);
		};
	}
});
var NodeList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_4d2c7_123",
	container: "_container_4d2c7_131",
	sm: "_sm_4d2c7_136",
	md: "_md_4d2c7_140",
	button: "_button_4d2c7_144",
	buttonSm: "_buttonSm_4d2c7_158",
	buttonMd: "_buttonMd_4d2c7_165"
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
					_ctx.lastItem && _ctx.$style.last,
					_ctx.firstItem && _ctx.$style.first,
					!_ctx.loading && _ctx.$style.loaded
				]),
				"data-test-id": "template-card",
				onClick: onCardClick
			}, [
				_ctx.loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nLoading_default), {
					rows: 2,
					"shrink-last": false,
					loading: _ctx.loading
				}, null, 8, ["loading"])], 2)) : _ctx.workflow ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nHeading_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.workflow.name), 1)]),
					_: 1
				}), !_ctx.simpleView ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					_ctx.workflow.totalViews ? (openBlock(), createElementBlock("span", _hoisted_2$1, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "eye",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(unref(abbreviateNumber)(_ctx.workflow.totalViews)), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					_ctx.workflow.totalViews ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.line),
						textContent: "|"
					}, null, 2)) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(TimeAgo_default, { date: _ctx.workflow.createdAt }, null, 8, ["date"])]),
						_: 1
					}),
					_ctx.workflow.user ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.line),
						textContent: "|"
					}, null, 2)) : createCommentVNode("", true),
					_ctx.workflow.user ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.byAuthor", { interpolate: { name: _ctx.workflow.user.username } })), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true),
				!_ctx.loading && _ctx.workflow ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.nodesContainer, _ctx.useWorkflowButton && _ctx.$style.hideOnHover])
				}, [_ctx.workflow.nodes ? (openBlock(), createBlock(NodeList_default, {
					key: 0,
					nodes: _ctx.workflow.nodes,
					limit: nodesToBeShown,
					size: "md"
				}, null, 8, ["nodes"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				_ctx.useWorkflowButton ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.buttonContainer)
				}, [_ctx.useWorkflowButton ? (openBlock(), createBlock(unref(N8nButton_default), {
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
	nodes: "_nodes_9we9y_123",
	icon: "_icon_9we9y_130",
	card: "_card_9we9y_134",
	hideOnHover: "_hideOnHover_9we9y_146",
	buttonContainer: "_buttonContainer_9we9y_149",
	loaded: "_loaded_9we9y_160",
	first: "_first_9we9y_164",
	last: "_last_9we9y_170",
	content: "_content_9we9y_175",
	line: "_line_9we9y_180",
	loading: "_loading_9we9y_186",
	nodesContainer: "_nodesContainer_9we9y_191"
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
			return _ctx.loading || _ctx.workflows.length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.list)
			}, [!_ctx.simpleView ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createVNode(unref(N8nHeading_default), {
				bold: true,
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [
					createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflows")) + " ", 1),
					_ctx.totalCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "(" + toDisplayString(_ctx.totalCount) + ")", 1)) : createCommentVNode("", true),
					!_ctx.loading && _ctx.totalWorkflows ? (openBlock(), createElementBlock("span", {
						key: 1,
						textContent: toDisplayString(`(${_ctx.totalWorkflows})`)
					}, null, 8, _hoisted_2)) : createCommentVNode("", true)
				]),
				_: 1
			})], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.workflows, (workflow, index) => {
					return openBlock(), createBlock(TemplateCard_default, {
						key: workflow.id,
						workflow,
						"first-item": index === 0,
						"simple-view": _ctx.simpleView,
						"last-item": index === _ctx.workflows.length - 1 && !_ctx.loading,
						"use-workflow-button": _ctx.useWorkflowButton,
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
				_ctx.infiniteScrollEnabled ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "loader",
					ref: loader
				}, null, 512)) : createCommentVNode("", true),
				_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_3, [(openBlock(), createElementBlock(Fragment, null, renderList(4, (n) => {
					return createVNode(TemplateCard_default, {
						key: "index-" + n,
						loading: true,
						"first-item": _ctx.workflows.length === 0 && n === 1,
						"last-item": n === 4
					}, null, 8, ["first-item", "last-item"]);
				}), 64))])) : createCommentVNode("", true)
			], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
var TemplateList_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_ff02l_123",
	workflowButton: "_workflowButton_ff02l_127",
	button: "_button_ff02l_127",
	nodes: "_nodes_ff02l_130"
};
var TemplateList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateList_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeList_default as n, TemplateList_default as t };
