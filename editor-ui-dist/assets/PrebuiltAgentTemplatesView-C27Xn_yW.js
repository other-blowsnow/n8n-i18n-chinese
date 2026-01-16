import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, k as createSlots, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CTqgQu78.js";
import { et as N8nCard_default, j as N8nNodeCreatorNode_default, mt as N8nLink_default, yn as N8nHeading_default } from "./src-DCVyDAxv.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DX9fN0Iy.js";
import { Nt as useNodeTypesStore } from "./builder.store-BzXpa4sI.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import { Bo as VIEWS } from "./constants-DPoRm7NA.js";
import "./merge-D-8yFLuB.js";
import "./_baseOrderBy-BKb7g0di.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-BZos7FRz.js";
import { _ as useCalloutHelpers } from "./nodeCreator.store-Dd2igVXf.js";
import "./nodeIcon-CH2olWHM.js";
import { t as NodeIcon_default } from "./NodeIcon-BqPxtaM9.js";
import { t as PageViewLayout_default } from "./PageViewLayout-XiCAnPXE.js";
var PrebuiltAgentTemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PrebuiltAgentTemplatesView",
	setup(__props) {
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const calloutHelpers = useCalloutHelpers();
		const preBuiltAgents = computed(() => calloutHelpers.getPreBuiltAgentNodeCreatorItems());
		const tutorials$1 = computed(() => calloutHelpers.getTutorialTemplatesNodeCreatorItems());
		const openTemplate = (templateId) => {
			calloutHelpers.openSampleWorkflowTemplate(templateId, { telemetry: { source: "templates" } });
		};
		onMounted(async () => {
			await nodeTypesStore.loadNodeTypesIfNotLoaded();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, null, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createBaseVNode("section", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
						tag: "h2",
						bold: "",
						size: "xlarge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nLink_default), {
						to: { name: unref(VIEWS).TEMPLATES },
						underline: "",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.viewAllLink")), 1)]),
						_: 1
					}, 8, ["to"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.grid) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(preBuiltAgents.value, (template) => {
						return openBlock(), createBlock(unref(N8nCard_default), {
							key: template.key,
							class: normalizeClass(_ctx.$style.card),
							onClick: ($event) => openTemplate(template.properties.templateId)
						}, {
							default: withCtx(() => [createVNode(unref(N8nNodeCreatorNode_default), {
								class: normalizeClass(_ctx.$style.templateLink),
								title: template.properties.title,
								description: template.properties.description,
								tag: template.properties.tag,
								"show-action-arrow": true,
								"is-trigger": false,
								"hide-node-icon": true
							}, createSlots({ _: 2 }, [template.properties.nodes ? {
								name: "extraDetails",
								fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(template.properties.nodes, (node) => {
									return openBlock(), createBlock(NodeIcon_default, {
										key: node.name,
										"node-type": node,
										size: 16,
										"show-tooltip": true
									}, null, 8, ["node-type"]);
								}), 128))]),
								key: "0"
							} : void 0]), 1032, [
								"class",
								"title",
								"description",
								"tag"
							])]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)], 2),
					createBaseVNode("section", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nHeading_default), {
						tag: "h2",
						bold: "",
						size: "xlarge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.tutorials")), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tutorials) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(tutorials$1.value, (template) => {
						return openBlock(), createBlock(unref(N8nCard_default), {
							key: template.key,
							class: normalizeClass(_ctx.$style.card),
							onClick: ($event) => openTemplate(template.properties.templateId)
						}, {
							default: withCtx(() => [createVNode(unref(N8nNodeCreatorNode_default), {
								class: normalizeClass(_ctx.$style.templateLink),
								title: template.properties.title,
								description: template.properties.description,
								tag: template.properties.tag,
								"show-action-arrow": true,
								"is-trigger": false,
								"hide-node-icon": true
							}, createSlots({ _: 2 }, [template.properties.nodes ? {
								name: "extraDetails",
								fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(template.properties.nodes, (node) => {
									return openBlock(), createBlock(NodeIcon_default, {
										key: node.name,
										"node-type": node,
										size: 16,
										"show-tooltip": true
									}, null, 8, ["node-type"]);
								}), 128))]),
								key: "0"
							} : void 0]), 1032, [
								"class",
								"title",
								"description",
								"tag"
							])]),
							_: 2
						}, 1032, ["class", "onClick"]);
					}), 128))], 2)], 2),
					createVNode(unref(N8nLink_default), {
						to: { name: unref(VIEWS).TEMPLATES },
						underline: "",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.viewAllLink")), 1)]),
						_: 1
					}, 8, ["to"])
				], 2)]),
				_: 1
			});
		};
	}
});
var PrebuiltAgentTemplatesView_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1jt4v_123",
	header: "_header_1jt4v_131",
	section: "_section_1jt4v_137",
	grid: "_grid_1jt4v_143",
	card: "_card_1jt4v_155",
	tutorials: "_tutorials_1jt4v_162",
	templateLink: "_templateLink_1jt4v_170"
};
var PrebuiltAgentTemplatesView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(PrebuiltAgentTemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PrebuiltAgentTemplatesView_vue_vue_type_style_index_0_lang_module_default }]]);
export { PrebuiltAgentTemplatesView_default as default };
