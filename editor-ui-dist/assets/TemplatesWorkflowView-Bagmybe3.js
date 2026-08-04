import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-H3H6Z9UB.js";
import { Ai as N8nText_default, Ii as N8nButton_default, Li as N8nIcon_default, Vt as N8nCard_default, ft as N8nTag_default, mt as N8nMarkdown_default } from "./src-D0J2qzpK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-FADs2so2.js";
import { L as useNodeTypesStore, S as createWorkflowDocumentId, j as getNodeTypeDisplayableCredentials } from "./workflows.store-WmGfSEo0.js";
import { i as defineStore } from "./constants-CdtkjduR.js";
import "./constants-B41t77fU.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { n as useTelemetry } from "./posthog.store-D9oFJCkF.js";
import { t as useDocumentTitle } from "./useDocumentTitle-qrffMKD0.js";
import { t as useExternalHooks } from "./useExternalHooks-Diz0_8N3.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-DhdgULHU.js";
import { t as useTemplatesStore } from "./templates.store-CuCVIiQN.js";
import { t as require_uniqBy } from "./uniqBy-BNbRUbsx.js";
import { n as keyFromCredentialTypeAndName, r as normalizeTemplateNodeCredentials } from "./templateTransforms-SwooPIVS.js";
import { t as NodeIcon_default } from "./NodeIcon-CbDdsWWW.js";
import { c as ensurePersonalProjectId, f as useInstanceAiHandoff } from "./useInstanceAiHandoff-CIuW700z.js";
import { n as useTemplateWorkflow } from "./templateActions-Cfe6mUMk.js";
import { t as TemplatesView_default } from "./TemplatesView-Cw8_oXwD.js";
import { t as WorkflowPreviewHost_default } from "./WorkflowPreviewHost-bLb_U1kT.js";
//#region src/features/workflows/templates/recommendations/recommendedTemplates.store.ts
var import_uniqBy = /* @__PURE__ */ __toESM(require_uniqBy(), 1);
var useRecommendedTemplatesStore = defineStore("recommendedTemplates", () => {
	const telemetry = useTelemetry();
	function getTemplateRoute(id) {
		return {
			name: VIEWS.TEMPLATE,
			params: { id }
		};
	}
	function trackTemplateTileClick(templateId) {
		telemetry.track("User viewed template detail", { templateId });
	}
	function trackTemplateShown(templateId, tileNumber) {
		telemetry.track("User viewed template cell", {
			tileNumber,
			templateId
		});
	}
	return {
		getTemplateRoute,
		trackTemplateTileClick,
		trackTemplateShown
	};
});
//#endregion
//#region src/features/workflows/templates/recommendations/components/RecommendedTemplateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = { key: 2 };
var RecommendedTemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RecommendedTemplateCard",
	props: {
		template: {},
		tileNumber: {},
		showDetails: { type: Boolean },
		clickable: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const { getTemplateRoute, trackTemplateTileClick, trackTemplateShown } = useRecommendedTemplatesStore();
		const router = useRouter();
		const templateNodes = computed(() => {
			if (!props.template?.nodes) return [];
			const uniqueNodeTypes = (0, import_uniqBy.default)(props.template.nodes, (node) => node.icon).map((node) => node.name);
			return Array.from(uniqueNodeTypes).slice(0, 2).map((nodeType) => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
		});
		const credentialsCount = computed(() => {
			const workflowNodes = props.template?.workflow?.nodes ?? [];
			if (workflowNodes.length === 0) return 0;
			const uniqueCredentialKeys = /* @__PURE__ */ new Set();
			for (const node of workflowNodes) {
				const requiredCredentials = getNodeTypeDisplayableCredentials(nodeTypesStore, node);
				if (requiredCredentials.length === 0) continue;
				const normalizedNodeCredentials = node.credentials ? normalizeTemplateNodeCredentials(node.credentials) : {};
				for (const credentialDescription of requiredCredentials) {
					const credentialType = credentialDescription.name;
					const key = keyFromCredentialTypeAndName(credentialType, normalizedNodeCredentials[credentialType] ?? "");
					uniqueCredentialKeys.add(key);
				}
			}
			return uniqueCredentialKeys.size;
		});
		const setupTimeMinutes = computed(() => {
			return 2 + credentialsCount.value * 3;
		});
		const hasTrackedShown = ref(false);
		const cardRef = ref(null);
		let observer = null;
		const trackWhenVisible = () => {
			if (hasTrackedShown.value || props.tileNumber === void 0) return;
			hasTrackedShown.value = true;
			trackTemplateShown(props.template.id, props.tileNumber);
			if (observer && cardRef.value) observer.unobserve(cardRef.value.$el);
			observer = null;
		};
		const handleUseTemplate = async () => {
			if (!props.clickable) return;
			trackTemplateTileClick(props.template.id);
			await router.push(getTemplateRoute(props.template.id));
		};
		onMounted(() => {
			if (!cardRef.value) return;
			if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
				trackWhenVisible();
				return;
			}
			observer = new IntersectionObserver((entries) => {
				for (const entry of entries) if (entry.isIntersecting) {
					trackWhenVisible();
					break;
				}
			});
			observer.observe(cardRef.value.$el);
		});
		onBeforeUnmount(() => {
			if (observer) {
				observer.disconnect();
				observer = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				ref_key: "cardRef",
				ref: cardRef,
				class: normalizeClass([_ctx.$style.suggestion, { [_ctx.$style.clickable]: __props.clickable }]),
				onClick: handleUseTemplate
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [
					createVNode(unref(N8nText_default), {
						size: "large",
						bold: true,
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.template.name), 1)]),
						_: 1
					}, 8, ["class"]),
					__props.template.user ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.userInfo)
					}, [
						__props.template.user.avatar ? (openBlock(), createElementBlock("img", {
							key: 0,
							src: __props.template.user.avatar,
							alt: __props.template.user.name,
							class: normalizeClass(_ctx.$style.userAvatar)
						}, null, 10, _hoisted_1)) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "user",
							size: 16
						})),
						createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.template.user.name), 1)]),
							_: 1
						}),
						__props.template.user.verified ? (openBlock(), createElementBlock("span", {
							key: 2,
							class: normalizeClass(_ctx.$style.verifiedBadge)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "shield-half",
							size: 16
						}), createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.verified")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true),
					__props.showDetails && __props.template.categories?.length ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.categories)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.template.categories, (category) => {
						return openBlock(), createBlock(unref(N8nTag_default), {
							key: category.id,
							text: category.name,
							clickable: false,
							class: normalizeClass(_ctx.$style.categoryTag)
						}, null, 8, ["text", "class"]);
					}), 128))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItemLeft) }, [__props.template.readyToDemo === true ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass([_ctx.$style.statItem, _ctx.$style.mintGreen])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "zap",
						size: 16
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.readyToRun")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.statItem)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "clock",
						size: 16
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.setupTime", { interpolate: { count: setupTimeMinutes.value } })), 1)]),
						_: 1
					})], 2))], 2), templateNodes.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.nodes)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, (nodeType) => {
						return openBlock(), createBlock(NodeIcon_default, {
							key: nodeType.name,
							size: 20,
							"node-type": nodeType
						}, null, 8, ["node-type"]);
					}), 128))], 2)) : createCommentVNode("", true)], 2),
					_ctx.$slots.belowContent ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "belowContent")])) : createCommentVNode("", true)
				], 2)]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
var RecommendedTemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	suggestion: "_suggestion_16wa4_125",
	clickable: "_clickable_16wa4_134",
	title: "_title_16wa4_140",
	cardContent: "_cardContent_16wa4_145",
	nodes: "_nodes_16wa4_152",
	statItemLeft: "_statItemLeft_16wa4_157",
	userInfo: "_userInfo_16wa4_164",
	userAvatar: "_userAvatar_16wa4_171",
	verifiedBadge: "_verifiedBadge_16wa4_178",
	categories: "_categories_16wa4_185",
	categoryTag: "_categoryTag_16wa4_191",
	statItem: "_statItem_16wa4_157",
	mintGreen: "_mintGreen_16wa4_204"
};
var RecommendedTemplateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RecommendedTemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RecommendedTemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesWorkflowView.vue?vue&type=script&setup=true&lang.ts
var TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesWorkflowView",
	setup(__props) {
		const externalHooks = useExternalHooks();
		const templatesStore = useTemplatesStore();
		const nodeTypesStore = useNodeTypesStore();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const instanceAiHandoff = useInstanceAiHandoff();
		const instanceAiAvailable = useInstanceAiAvailable();
		const loading = ref(true);
		const showPreview = ref(true);
		const notFoundError = ref(false);
		const isPreviewVisible = ref(true);
		const previewWrapperRef = ref(null);
		let previewObserver = null;
		const templateId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
		const template = computed(() => templatesStore.getFullTemplateById(templateId.value));
		const openTemplateSetup = async (id, e) => {
			await useTemplateWorkflow({
				router,
				templateId: id,
				inNewBrowserTab: e.metaKey || e.ctrlKey,
				externalHooks,
				nodeTypesStore,
				telemetry,
				templatesStore,
				source: "template_preview"
			});
		};
		const startWithAi = async () => {
			if (!template.value || !instanceAiAvailable.value) return;
			const projectId = await ensurePersonalProjectId();
			if (!projectId) return;
			await instanceAiHandoff.startThread(projectId, i18n.baseText("instanceAi.launch.template.message", { interpolate: {
				name: template.value.name,
				id: templateId.value
			} }), {
				source: "template-view",
				origin: "internal",
				sourceContext: {
					templateId: templateId.value,
					templateName: template.value.name
				}
			});
		};
		const scrollToTop = () => {
			const contentArea = document.getElementById("content");
			if (contentArea) contentArea.scrollTo({ top: 0 });
		};
		watch(() => template.value, (newTemplate) => {
			if (newTemplate) documentTitle.set(`Template template: ${newTemplate.name}`);
			else documentTitle.set("Templates");
		});
		watch(previewWrapperRef, (newRef) => {
			if (previewObserver) {
				previewObserver.disconnect();
				previewObserver = null;
			}
			if (newRef) {
				previewObserver = new IntersectionObserver((entries) => {
					for (const entry of entries) isPreviewVisible.value = entry.isIntersecting;
				}, { threshold: 0 });
				previewObserver.observe(newRef);
			}
		}, { immediate: true });
		onMounted(async () => {
			scrollToTop();
			if (nodeTypesStore.allNodeTypes.length === 0) nodeTypesStore.getNodeTypes();
			nodeTypesStore.fetchCommunityNodePreviews();
			if (template.value?.full) {
				loading.value = false;
				return;
			}
			try {
				await templatesStore.fetchTemplateById(templateId.value);
			} catch (e) {
				notFoundError.value = true;
			}
			loading.value = false;
		});
		onBeforeUnmount(() => {
			if (previewObserver) {
				previewObserver.disconnect();
				previewObserver = null;
			}
		});
		const strippedWorkflow = computed(() => {
			if (!template.value?.workflow) return void 0;
			if (template.value.readyToDemo) return template.value.workflow;
			return {
				...template.value.workflow,
				pinData: {}
			};
		});
		const previewDocumentId = computed(() => createWorkflowDocumentId(`template-${templateId.value}`, "preview"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "full-width": true }, createSlots({ _: 2 }, [notFoundError.value ? {
				name: "header",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.notFound) }, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflowsNotFound")), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0, !notFoundError.value ? {
				name: "content",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewWrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.image) }, [showPreview.value && !loading.value && strippedWorkflow.value ? (openBlock(), createBlock(WorkflowPreviewHost_default, {
					key: 0,
					"document-id": previewDocumentId.value,
					workflow: strippedWorkflow.value
				}, null, 8, ["document-id", "workflow"])) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.templateCard) }, [template.value ? (openBlock(), createBlock(RecommendedTemplateCard_default, {
					key: 0,
					template: template.value,
					"show-details": true
				}, {
					belowContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.templateActions) }, [createVNode(unref(N8nButton_default), {
						"data-test-id": "use-template-button",
						label: unref(i18n).baseText("template.buttons.tryTemplate"),
						size: "large",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => openTemplateSetup(templateId.value, $event), ["stop"]))
					}, null, 8, ["label"]), unref(instanceAiAvailable) ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						"data-test-id": "start-with-ai-button",
						class: normalizeClass(_ctx.$style.startWithAi),
						label: unref(i18n).baseText("template.buttons.startWithAi"),
						variant: "ghost",
						icon: "sparkles",
						size: "large",
						onClick: withModifiers(startWithAi, ["stop"])
					}, null, 8, ["class", "label"])) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["template"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.markdown),
					"data-test-id": "template-description"
				}, [createVNode(unref(N8nMarkdown_default), {
					content: template.value?.description,
					images: template.value?.image,
					loading: loading.value
				}, null, 8, [
					"content",
					"images",
					"loading"
				])], 2)], 2)], 2)]),
				key: "1"
			} : void 0]), 1024);
		};
	}
});
var TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default = {
	notFound: "_notFound_x9bex_125",
	previewWrapper: "_previewWrapper_x9bex_129",
	image: "_image_x9bex_133",
	button: "_button_x9bex_143",
	contentContainer: "_contentContainer_x9bex_151",
	content: "_content_x9bex_151",
	templateActions: "_templateActions_x9bex_167",
	startWithAi: "_startWithAi_x9bex_174",
	templateCard: "_templateCard_x9bex_192",
	markdown: "_markdown_x9bex_207"
};
var TemplatesWorkflowView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesWorkflowView_default as default };
