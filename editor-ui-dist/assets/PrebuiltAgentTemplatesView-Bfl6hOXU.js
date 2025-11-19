import { C as computed, D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, k as createSlots, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { O as N8nNodeCreatorNode_default, Pn as N8nHeading_default, X as N8nCard_default, mt as N8nLink_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { rt as useNodeTypesStore } from "./useTelemetry-C2EhNQhN.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./templates.store-CFt_GGxU.js";
import { _ as useCalloutHelpers } from "./nodeCreator.store-BXjpGwrk.js";
import "./nodeIcon-BWTKM7V3.js";
import { t as NodeIcon_default } from "./NodeIcon-B-yC7jws.js";
import { t as PageViewLayout_default } from "./PageViewLayout-kj_BBPfv.js";
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
