import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, at as renderSlot, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Li as N8nHeading_default, Rt as useRouter, Vi as N8nSpinner_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { gn as useTemplatesStore, r as useUIStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./nodeIcon-p8UmtDus.js";
import "./folders.store-B29vIVJe.js";
import "./NodeIcon-HdSkOCP-.js";
import "./readyToRun.store-jCsh7z8e.js";
import { n as quickStartWorkflows, t as useResourceCenterStore } from "./resourceCenter.store-AYMcYt9P.js";
import { a as learningVideos, c as TemplateCard_default, i as learnTemplateIds, l as WorkflowPreviewSvg_default, n as featuredTemplateIds, o as masterclassVideos, r as inspirationVideos, s as VideoThumbCard_default, u as ResourceCenterHeader_default } from "./resourceCenterData-DG0qJ_-F.js";
var HorizontalGallery_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "HorizontalGallery",
	props: {
		title: {},
		onTitleClick: { type: Function }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [(openBlock(), createBlock(resolveDynamicComponent(__props.onTitleClick ? "button" : "div"), {
				type: __props.onTitleClick ? "button" : void 0,
				class: normalizeClass([_ctx.$style.titleWrapper, __props.onTitleClick && _ctx.$style.clickable]),
				onClick: __props.onTitleClick
			}, {
				default: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "large",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["class"]), __props.onTitleClick ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.chevron)
				}, "→", 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"type",
				"class",
				"onClick"
			])), renderSlot(_ctx.$slots, "actions")], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.gallery) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
var HorizontalGallery_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_11xsp_125",
	header: "_header_11xsp_135",
	titleWrapper: "_titleWrapper_11xsp_143",
	clickable: "_clickable_11xsp_154",
	title: "_title_11xsp_143",
	chevron: "_chevron_11xsp_160",
	gallery: "_gallery_11xsp_179"
};
var HorizontalGallery_default = /* @__PURE__ */ __plugin_vue_export_helper_default(HorizontalGallery_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": HorizontalGallery_vue_vue_type_style_index_0_lang_module_default }]]);
var chat_default = "/%7B%7BBASE_PATH%7D%7D/assets/chat-CCwdCCBg.png";
var summarize_default = "/%7B%7BBASE_PATH%7D%7D/assets/summarize-BdsvHc1I.png";
var chat_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/chat-dark-DeKtmtPl.png";
var summarize_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/summarize-dark-j-shjb0b.png";
var _hoisted_1 = ["src", "alt"];
var SandboxCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SandboxCard",
	props: { workflow: {} },
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const previewImagesLight = {
			"chat-with-the-news": chat_default,
			"summarize-the-news": summarize_default
		};
		const previewImagesDark = {
			"chat-with-the-news": chat_dark_default,
			"summarize-the-news": summarize_dark_default
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const isDarkMode = computed(() => uiStore.appliedTheme === "dark");
		const nodeCount$1 = computed(() => {
			return props.workflow.nodeCount ?? props.workflow.workflow.nodes?.length ?? 0;
		});
		const previewImage = computed(() => {
			return (isDarkMode.value ? previewImagesDark : previewImagesLight)[props.workflow.id] ?? props.workflow.previewImageUrl ?? null;
		});
		const handleClick = () => {
			emit("click");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				onClick: handleClick
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.imageContainer) }, [previewImage.value ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: previewImage.value,
				alt: __props.workflow.name,
				class: normalizeClass(_ctx.$style.image)
			}, null, 10, _hoisted_1)) : (openBlock(), createBlock(WorkflowPreviewSvg_default, {
				key: 1,
				class: normalizeClass(_ctx.$style.workflowPreview)
			}, null, 8, ["class"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nIcon_default), {
				icon: "workflow",
				class: normalizeClass(_ctx.$style.icon),
				size: "medium"
			}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.workflow.name), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tag) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.sandbox.easySetup")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nodeCount) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.sandbox.nodes", { interpolate: { count: nodeCount$1.value } })), 3)], 2)], 2)], 2);
		};
	}
});
var SandboxCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1lrxi_125",
	imageContainer: "_imageContainer_1lrxi_133",
	image: "_image_1lrxi_133",
	workflowPreview: "_workflowPreview_1lrxi_154",
	content: "_content_1lrxi_160",
	titleRow: "_titleRow_1lrxi_167",
	icon: "_icon_1lrxi_173",
	title: "_title_1lrxi_167",
	metaRow: "_metaRow_1lrxi_190",
	tag: "_tag_1lrxi_197",
	nodeCount: "_nodeCount_1lrxi_208"
};
var SandboxCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SandboxCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SandboxCard_vue_vue_type_style_index_0_lang_module_default }]]);
var ResourceCenterView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceCenterView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const templatesStore = useTemplatesStore();
		const resourceCenterStore = useResourceCenterStore();
		const templates = ref([]);
		const learnTemplates = ref([]);
		const isLoadingTemplates = ref(false);
		const isLoadingLearnTemplates = ref(false);
		const handleQuickStartImport = async (quickStartId) => {
			resourceCenterStore.trackTileClick("quick-start", "ready-to-run", quickStartId);
			await resourceCenterStore.createAndOpenQuickStartWorkflow(quickStartId);
		};
		const handleSeeMore = async (sectionKey) => {
			await router.push({
				name: VIEWS.RESOURCE_CENTER_SECTION,
				params: { sectionId: sectionKey }
			});
		};
		const handleViewAllTemplates = () => {
			resourceCenterStore.trackTemplateRepoVisit();
			window.open(templatesStore.websiteTemplateRepositoryURL, "_blank", "noopener,noreferrer");
		};
		const loadTemplates = async () => {
			if (featuredTemplateIds.length === 0) return;
			isLoadingTemplates.value = true;
			try {
				templates.value = await resourceCenterStore.loadTemplates(featuredTemplateIds);
			} finally {
				isLoadingTemplates.value = false;
			}
		};
		const loadLearnTemplates = async () => {
			if (learnTemplateIds.length === 0) return;
			isLoadingLearnTemplates.value = true;
			try {
				learnTemplates.value = await resourceCenterStore.loadTemplates(learnTemplateIds);
			} finally {
				isLoadingLearnTemplates.value = false;
			}
		};
		onMounted(() => {
			setTimeout(() => {
				(document.getElementById("content")?.querySelector(":scope > div"))?.scrollTo({
					top: 0,
					behavior: "auto"
				});
			}, 50);
			resourceCenterStore.trackResourceCenterView();
			loadTemplates();
			loadLearnTemplates();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
				createVNode(ResourceCenterHeader_default, null, {
					default: withCtx(() => [createVNode(unref(N8nHeading_default), {
						tag: "h1",
						bold: true,
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.resourceCenter.title")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}),
				createBaseVNode("section", { class: normalizeClass(_ctx.$style.mainSection) }, [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.getStarted.title")), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardsRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(quickStartWorkflows), (workflow) => {
					return openBlock(), createBlock(SandboxCard_default, {
						key: workflow.id,
						workflow,
						onClick: ($event) => handleQuickStartImport(workflow.id)
					}, null, 8, ["workflow", "onClick"]);
				}), 128))], 2)], 2)], 2),
				createBaseVNode("section", { class: normalizeClass(_ctx.$style.mainSection) }, [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.getInspired.title")), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionContent) }, [templates.value.length > 0 || isLoadingTemplates.value ? (openBlock(), createBlock(HorizontalGallery_default, {
					key: 0,
					title: unref(i18n).baseText("experiments.resourceCenter.popularTemplates.title"),
					"on-title-click": () => handleSeeMore("templates")
				}, {
					default: withCtx(() => [isLoadingTemplates.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loading)
					}, [createVNode(unref(N8nSpinner_default), { size: "small" })], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(templates.value.slice(0, 3), (template) => {
						return openBlock(), createBlock(TemplateCard_default, {
							key: template.id,
							template,
							section: "inspiration"
						}, null, 8, ["template"]);
					}), 128))]),
					_: 1
				}, 8, ["title", "on-title-click"])) : createCommentVNode("", true), createVNode(HorizontalGallery_default, {
					title: unref(i18n).baseText("experiments.resourceCenter.automationIdeas.title"),
					"on-title-click": unref(inspirationVideos).length > 3 ? () => handleSeeMore("inspiration-videos") : void 0
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(inspirationVideos).slice(0, 3), (video) => {
						return openBlock(), createBlock(VideoThumbCard_default, {
							key: video.videoId,
							video,
							"icon-type": "youtube",
							section: "inspiration"
						}, null, 8, ["video"]);
					}), 128))]),
					_: 1
				}, 8, ["title", "on-title-click"])], 2)], 2),
				createBaseVNode("section", { class: normalizeClass(_ctx.$style.mainSection) }, [createBaseVNode("h2", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.learnN8n.title")), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionContent) }, [
					createVNode(HorizontalGallery_default, {
						title: unref(i18n).baseText("experiments.resourceCenter.featuredVideos.title"),
						"on-title-click": unref(learningVideos).length > 3 ? () => handleSeeMore("learning-videos") : void 0
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(learningVideos).slice(0, 3), (video) => {
							return openBlock(), createBlock(VideoThumbCard_default, {
								key: video.videoId,
								video,
								"icon-type": "youtube",
								section: "learn"
							}, null, 8, ["video"]);
						}), 128))]),
						_: 1
					}, 8, ["title", "on-title-click"]),
					createVNode(HorizontalGallery_default, {
						title: unref(i18n).baseText("experiments.resourceCenter.masterclass.title"),
						"on-title-click": unref(masterclassVideos).length > 3 ? () => handleSeeMore("masterclass-videos") : void 0
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(masterclassVideos).slice(0, 3), (video) => {
							return openBlock(), createBlock(VideoThumbCard_default, {
								key: video.videoId,
								video,
								"icon-type": "youtube",
								section: "learn"
							}, null, 8, ["video"]);
						}), 128))]),
						_: 1
					}, 8, ["title", "on-title-click"]),
					learnTemplates.value.length > 0 || isLoadingLearnTemplates.value ? (openBlock(), createBlock(HorizontalGallery_default, {
						key: 0,
						title: unref(i18n).baseText("experiments.resourceCenter.learnTemplates.title"),
						"on-title-click": () => handleViewAllTemplates()
					}, {
						default: withCtx(() => [isLoadingLearnTemplates.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.loading)
						}, [createVNode(unref(N8nSpinner_default), { size: "small" })], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(learnTemplates.value.slice(0, 3), (template) => {
							return openBlock(), createBlock(TemplateCard_default, {
								key: template.id,
								template,
								section: "learn"
							}, null, 8, ["template"]);
						}), 128))]),
						_: 1
					}, 8, ["title", "on-title-click"])) : createCommentVNode("", true)
				], 2)], 2)
			], 2)], 2);
		};
	}
});
var ResourceCenterView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_165qi_125",
	content: "_content_165qi_131",
	title: "_title_165qi_136",
	mainSection: "_mainSection_165qi_144",
	sectionTitle: "_sectionTitle_165qi_153",
	sectionContent: "_sectionContent_165qi_161",
	cardsRow: "_cardsRow_165qi_169",
	loading: "_loading_165qi_175"
};
var ResourceCenterView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourceCenterView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceCenterView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ResourceCenterView_default as default };
