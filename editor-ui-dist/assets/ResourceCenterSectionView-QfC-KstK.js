import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Li as N8nHeading_default, Lt as useRoute, Rt as useRouter, Vi as N8nSpinner_default, dt as N8nOption_default, ut as N8nSelect_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { gn as useTemplatesStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./nodeIcon-p8UmtDus.js";
import "./folders.store-B29vIVJe.js";
import "./NodeIcon-HdSkOCP-.js";
import "./readyToRun.store-jCsh7z8e.js";
import { t as useResourceCenterStore } from "./resourceCenter.store-AYMcYt9P.js";
import { a as learningVideos, c as TemplateCard_default, n as featuredTemplateIds, o as masterclassVideos, r as inspirationVideos, s as VideoThumbCard_default, t as courses, u as ResourceCenterHeader_default } from "./resourceCenterData-DG0qJ_-F.js";
var ResourceCenterSectionView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceCenterSectionView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const resourceCenterStore = useResourceCenterStore();
		const templatesStore = useTemplatesStore();
		const sortBy = ref("alphabetical");
		const templates = ref([]);
		const isLoadingTemplates = ref(false);
		const sectionKey = computed(() => {
			const id = route.params.sectionId;
			return Array.isArray(id) ? id[0] ?? "" : id ?? "";
		});
		const sectionConfig = computed(() => {
			return {
				templates: {
					title: i18n.baseText("experiments.resourceCenter.popularTemplates.title"),
					type: "template"
				},
				courses: {
					title: i18n.baseText("experiments.resourceCenter.courses.title"),
					type: "video"
				},
				"learning-videos": {
					title: i18n.baseText("experiments.resourceCenter.youtubeLearn.title"),
					type: "video"
				},
				"masterclass-videos": {
					title: i18n.baseText("experiments.resourceCenter.masterclass.title"),
					type: "video"
				},
				"inspiration-videos": {
					title: i18n.baseText("experiments.resourceCenter.youtubeInspiration.title"),
					type: "video"
				}
			}[sectionKey.value] || {
				title: "Unknown Section",
				type: "video"
			};
		});
		const videoItems = computed(() => {
			let items = [];
			switch (sectionKey.value) {
				case "courses":
					items = courses.map((c) => ({
						videoId: c.id,
						title: c.title,
						description: c.description,
						thumbnailUrl: c.thumbnailUrl
					}));
					break;
				case "learning-videos":
					items = [...learningVideos];
					break;
				case "masterclass-videos":
					items = [...masterclassVideos];
					break;
				case "inspiration-videos":
					items = [...inspirationVideos];
					break;
			}
			if (sortBy.value === "alphabetical") items.sort((a, b) => a.title.localeCompare(b.title));
			return items;
		});
		const sortedTemplates = computed(() => {
			if (sortBy.value === "alphabetical") return [...templates.value].sort((a, b) => a.name.localeCompare(b.name));
			return templates.value;
		});
		const loadTemplates = async () => {
			if (sectionKey.value !== "templates" || featuredTemplateIds.length === 0) return;
			isLoadingTemplates.value = true;
			try {
				templates.value = await resourceCenterStore.loadTemplates(featuredTemplateIds);
			} finally {
				isLoadingTemplates.value = false;
			}
		};
		const goBack = async () => {
			await router.push({ name: VIEWS.RESOURCE_CENTER });
		};
		const handleViewAllTemplates = () => {
			resourceCenterStore.trackTemplateRepoVisit();
			window.open(templatesStore.websiteTemplateRepositoryURL, "_blank", "noopener,noreferrer");
		};
		const getSectionForTracking = (key) => {
			if (key === "templates" || key === "inspiration-videos") return "inspiration";
			return "learn";
		};
		onMounted(() => {
			setTimeout(() => {
				(document.getElementById("content")?.querySelector(":scope > div"))?.scrollTo({
					top: 0,
					behavior: "auto"
				});
			}, 50);
			resourceCenterStore.trackSectionView(sectionConfig.value.title);
			loadTemplates();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
				createVNode(ResourceCenterHeader_default, null, {
					actions: withCtx(() => [createVNode(unref(N8nSelect_default), {
						modelValue: sortBy.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sortBy.value = $event),
						size: "small",
						class: normalizeClass(_ctx.$style.sortSelect)
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "alphabetical",
							label: "Alphabetical"
						}), createVNode(unref(N8nOption_default), {
							value: "newest",
							label: "Newest first"
						})]),
						_: 1
					}, 8, ["modelValue", "class"])]),
					default: withCtx(() => [
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.breadcrumbLink),
							onClick: goBack
						}, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.title")), 3),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "small",
							class: normalizeClass(_ctx.$style.breadcrumbSeparator)
						}, null, 8, ["class"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.breadcrumbCurrent) }, toDisplayString(sectionConfig.value.title), 3)
					]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "xlarge",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sectionConfig.value.title), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.grid) }, [sectionConfig.value.type === "video" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(videoItems.value, (item) => {
					return openBlock(), createBlock(VideoThumbCard_default, {
						key: item.videoId,
						video: item,
						section: getSectionForTracking(sectionKey.value)
					}, null, 8, ["video", "section"]);
				}), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [isLoadingTemplates.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nSpinner_default), { size: "small" })], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(sortedTemplates.value, (template) => {
					return openBlock(), createBlock(TemplateCard_default, {
						key: template.id,
						template,
						section: getSectionForTracking(sectionKey.value)
					}, null, 8, ["template", "section"]);
				}), 128))], 64))], 2),
				sectionKey.value === "templates" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.viewAllLink)
				}, [createBaseVNode("a", { onClick: handleViewAllTemplates }, [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.resourceCenter.viewAllTemplates")) + " ", 1), createVNode(unref(N8nIcon_default), {
					icon: "external-link",
					size: "small"
				})])], 2)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
var ResourceCenterSectionView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1811n_125",
	content: "_content_1811n_131",
	breadcrumbLink: "_breadcrumbLink_1811n_136",
	breadcrumbSeparator: "_breadcrumbSeparator_1811n_148",
	breadcrumbCurrent: "_breadcrumbCurrent_1811n_152",
	sortSelect: "_sortSelect_1811n_159",
	sectionHeader: "_sectionHeader_1811n_163",
	sectionTitle: "_sectionTitle_1811n_167",
	grid: "_grid_1811n_175",
	loading: "_loading_1811n_196",
	viewAllLink: "_viewAllLink_1811n_204"
};
var ResourceCenterSectionView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourceCenterSectionView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceCenterSectionView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ResourceCenterSectionView_default as default };
