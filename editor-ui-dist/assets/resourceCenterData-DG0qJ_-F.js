import { A as createStaticVNode, C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, at as renderSlot, bn as normalizeStyle, et as openBlock, it as renderList, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Rt as useRouter } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, r as useUIStore } from "./users.store-qBZsmf9-.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import { t as useResourceCenterStore } from "./resourceCenter.store-AYMcYt9P.js";
var ResourceCenterHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1o5z6_125",
	content: "_content_1o5z6_136",
	actions: "_actions_1o5z6_142"
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
		key: 0,
		class: normalizeClass(_ctx.$style.actions)
	}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)], 2);
}
var ResourceCenterHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ResourceCenterHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var WorkflowPreviewSvg_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewSvg",
	props: {
		variant: { default: "default" },
		opacity: { default: 1 }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", {
				viewBox: "0 0 320 180",
				preserveAspectRatio: "xMidYMid meet",
				class: normalizeClass(_ctx.$style.svg),
				role: "img",
				"aria-label": "Workflow preview",
				style: normalizeStyle({ opacity: __props.opacity })
			}, [
				createBaseVNode("g", { class: normalizeClass(_ctx.$style.connections) }, [..._cache[0] || (_cache[0] = [createStaticVNode("<path d=\"M 60,90 C 80,90 80,54 100,54\"></path><path d=\"M 60,90 C 80,90 80,126 100,126\"></path><path d=\"M 136,54 C 152,54 160,54 176,54\"></path><path d=\"M 212,54 C 232,54 232,90 252,90\"></path><path d=\"M 136,126 C 180,126 212,90 252,90\"></path>", 5)])], 2),
				createBaseVNode("g", { class: normalizeClass(_ctx.$style.connectionDots) }, [..._cache[1] || (_cache[1] = [createBaseVNode("circle", {
					cx: "60",
					cy: "90",
					r: "3"
				}, null, -1), createBaseVNode("circle", {
					cx: "252",
					cy: "90",
					r: "3"
				}, null, -1)])], 2),
				createBaseVNode("g", { class: normalizeClass(_ctx.$style.nodes) }, [
					createBaseVNode("rect", {
						x: "24",
						y: "72",
						width: "36",
						height: "36",
						rx: "18",
						ry: "18",
						class: normalizeClass(_ctx.$style.triggerNode)
					}, null, 2),
					_cache[2] || (_cache[2] = createBaseVNode("rect", {
						x: "100",
						y: "36",
						width: "36",
						height: "36",
						rx: "8",
						ry: "8"
					}, null, -1)),
					_cache[3] || (_cache[3] = createBaseVNode("rect", {
						x: "176",
						y: "36",
						width: "36",
						height: "36",
						rx: "8",
						ry: "8"
					}, null, -1)),
					_cache[4] || (_cache[4] = createBaseVNode("rect", {
						x: "100",
						y: "108",
						width: "36",
						height: "36",
						rx: "8",
						ry: "8"
					}, null, -1)),
					_cache[5] || (_cache[5] = createBaseVNode("rect", {
						x: "252",
						y: "72",
						width: "36",
						height: "36",
						rx: "8",
						ry: "8"
					}, null, -1))
				], 2),
				createBaseVNode("g", { class: normalizeClass(_ctx.$style.nodeIcons) }, [
					createBaseVNode("path", {
						d: "M 40,85 L 44,90 L 40,90 L 44,95",
						class: normalizeClass(_ctx.$style.triggerIcon)
					}, null, 2),
					_cache[6] || (_cache[6] = createBaseVNode("rect", {
						x: "113",
						y: "49",
						width: "10",
						height: "10",
						rx: "2"
					}, null, -1)),
					_cache[7] || (_cache[7] = createBaseVNode("rect", {
						x: "189",
						y: "49",
						width: "10",
						height: "10",
						rx: "2"
					}, null, -1)),
					_cache[8] || (_cache[8] = createBaseVNode("rect", {
						x: "113",
						y: "121",
						width: "10",
						height: "10",
						rx: "2"
					}, null, -1)),
					_cache[9] || (_cache[9] = createBaseVNode("rect", {
						x: "265",
						y: "85",
						width: "10",
						height: "10",
						rx: "2"
					}, null, -1))
				], 2)
			], 6);
		};
	}
});
var WorkflowPreviewSvg_vue_vue_type_style_index_0_lang_module_default = {
	svg: "_svg_1bx37_125",
	nodes: "_nodes_1bx37_130",
	triggerNode: "_triggerNode_1bx37_137",
	connections: "_connections_1bx37_141",
	connectionDots: "_connectionDots_1bx37_148",
	nodeIcons: "_nodeIcons_1bx37_153",
	triggerIcon: "_triggerIcon_1bx37_167"
};
var WorkflowPreviewSvg_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowPreviewSvg_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewSvg_vue_vue_type_style_index_0_lang_module_default }]]);
var _7639_default = "/%7B%7BBASE_PATH%7D%7D/assets/7639-C6BLtA0I.png";
var _3050_default = "/%7B%7BBASE_PATH%7D%7D/assets/3050-Bx-yF05l.png";
var _4966_default = "/%7B%7BBASE_PATH%7D%7D/assets/4966-BOXaqeot.png";
var _7177_default = "/%7B%7BBASE_PATH%7D%7D/assets/7177-05y4mECu.png";
var _8779_default = "/%7B%7BBASE_PATH%7D%7D/assets/8779-BT5sW0Ij.png";
var _3100_default = "/%7B%7BBASE_PATH%7D%7D/assets/3100-BzJrOac0.png";
var _8527_default = "/%7B%7BBASE_PATH%7D%7D/assets/8527-BdpxT70G.png";
var _6270_default = "/%7B%7BBASE_PATH%7D%7D/assets/6270-DVyr8D55.png";
var _7639_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/7639-dark-DPc3Soiw.png";
var _3050_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/3050-dark-CJrYOxNq.png";
var _4966_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/4966-dark--ydUeKBy.png";
var _7177_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/7177-dark-B3HKrjiH.png";
var _8779_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/8779-dark-DoOM30Cm.png";
var _3100_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/3100-dark-CfB8bh5X.png";
var _8527_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/8527-dark-LQJzVLh4.png";
var _6270_dark_default = "/%7B%7BBASE_PATH%7D%7D/assets/6270-dark-CuSnY6db.png";
var _hoisted_1$1 = ["src", "alt"];
var TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateCard",
	props: {
		template: {},
		noSetup: {
			type: Boolean,
			default: false
		},
		onClickOverride: {
			type: Function,
			default: void 0
		},
		section: { default: "inspiration" }
	},
	setup(__props) {
		const previewImagesLight = {
			7639: _7639_default,
			3050: _3050_default,
			4966: _4966_default,
			7177: _7177_default,
			8779: _8779_default,
			3100: _3100_default,
			8527: _8527_default,
			6270: _6270_default
		};
		const previewImagesDark = {
			7639: _7639_dark_default,
			3050: _3050_dark_default,
			4966: _4966_dark_default,
			7177: _7177_dark_default,
			8779: _8779_dark_default,
			3100: _3100_dark_default,
			8527: _8527_dark_default,
			6270: _6270_dark_default
		};
		const props = __props;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const { getTemplateRoute, trackTileClick } = useResourceCenterStore();
		const router = useRouter();
		const isDarkMode = computed(() => uiStore.appliedTheme === "dark");
		const templateNodes = computed(() => {
			if (!props.template?.nodes) return [];
			const uniqueNodeTypes = new Set(props.template.nodes.map((node) => node.name));
			return Array.from(uniqueNodeTypes).slice(0, 4).map((nodeType) => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
		});
		const remainingNodeCount = computed(() => {
			if (!props.template?.nodes) return 0;
			const uniqueNodeTypes = new Set(props.template.nodes.map((node) => node.name));
			return Math.max(0, uniqueNodeTypes.size - 4);
		});
		const setupMinutes = computed(() => {
			const nodeCount = props.template?.nodes?.length ?? 0;
			if (nodeCount <= 3) return 5;
			if (nodeCount <= 6) return 10;
			return 15;
		});
		const previewImage = computed(() => {
			return (isDarkMode.value ? previewImagesDark : previewImagesLight)[props.template.id] ?? null;
		});
		const handleClick = async () => {
			if (props.onClickOverride) props.onClickOverride();
			else {
				trackTileClick(props.section, "template", props.template.id);
				await router.push(getTemplateRoute(props.template.id));
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				onClick: handleClick
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.imageContainer) }, [previewImage.value ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: previewImage.value,
				alt: __props.template.name,
				class: normalizeClass(_ctx.$style.workflowPreview)
			}, null, 10, _hoisted_1$1)) : (openBlock(), createBlock(WorkflowPreviewSvg_default, {
				key: 1,
				class: normalizeClass(_ctx.$style.workflowPreview)
			}, null, 8, ["class"])), templateNodes.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.nodesBadge)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, (nodeType) => {
				return openBlock(), createElementBlock("div", {
					key: nodeType.name,
					class: normalizeClass(_ctx.$style.nodeIcon)
				}, [createVNode(NodeIcon_default, {
					size: 20,
					"stroke-width": 1.5,
					"node-type": nodeType
				}, null, 8, ["node-type"])], 2);
			}), 128)), remainingNodeCount.value > 0 ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.moreCount)
			}, "+" + toDisplayString(remainingNodeCount.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nIcon_default), {
				icon: "workflow",
				class: normalizeClass(_ctx.$style.icon),
				size: "medium"
			}, null, 8, ["class"]), createBaseVNode("h3", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.template.name), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.meta) }, [createVNode(unref(N8nIcon_default), {
				icon: "clock",
				class: normalizeClass(_ctx.$style.clockIcon),
				size: "xsmall"
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.template.setupTime", { interpolate: { minutes: setupMinutes.value } })), 1)], 2)], 2)], 2);
		};
	}
});
var TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1hkp8_125",
	imageContainer: "_imageContainer_1hkp8_133",
	workflowPreview: "_workflowPreview_1hkp8_149",
	nodesBadge: "_nodesBadge_1hkp8_156",
	nodeIcon: "_nodeIcon_1hkp8_171",
	moreCount: "_moreCount_1hkp8_179",
	content: "_content_1hkp8_193",
	titleRow: "_titleRow_1hkp8_200",
	icon: "_icon_1hkp8_206",
	title: "_title_1hkp8_200",
	meta: "_meta_1hkp8_225",
	clockIcon: "_clockIcon_1hkp8_234"
};
var TemplateCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 2 };
var VideoThumbCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VideoThumbCard",
	props: {
		video: {},
		iconType: { default: "youtube" },
		section: { default: "inspiration" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { trackTileClick } = useResourceCenterStore();
		const openVideo = () => {
			const videoUrl = `https://www.youtube.com/watch?v=${props.video.videoId}`;
			trackTileClick(props.section, "video", videoUrl);
			window.open(videoUrl, "_blank", "noopener,noreferrer");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				onClick: openVideo
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.thumbnailContainer) }, [createBaseVNode("img", {
				src: __props.video.thumbnailUrl,
				alt: __props.video.title,
				class: normalizeClass(_ctx.$style.thumbnail),
				loading: "lazy"
			}, null, 10, _hoisted_1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nIcon_default), {
				icon: __props.iconType === "youtube" ? "youtube" : "lightbulb",
				class: normalizeClass(_ctx.$style.icon),
				size: "medium"
			}, null, 8, ["icon", "class"]), createBaseVNode("h3", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.video.title), 3)], 2), __props.video.duration || __props.video.level ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.meta)
			}, [
				__props.video.duration ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(__props.video.duration), 1)) : createCommentVNode("", true),
				__props.video.duration && __props.video.level ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.separator)
				}, "·", 2)) : createCommentVNode("", true),
				__props.video.level ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("experiments.resourceCenter.video.level", { interpolate: { level: __props.video.level } })), 1)) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var VideoThumbCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1rxzq_125",
	thumbnailContainer: "_thumbnailContainer_1rxzq_132",
	thumbnail: "_thumbnail_1rxzq_132",
	playButton: "_playButton_1rxzq_155",
	content: "_content_1rxzq_171",
	titleRow: "_titleRow_1rxzq_178",
	icon: "_icon_1rxzq_184",
	title: "_title_1rxzq_178",
	meta: "_meta_1rxzq_203",
	separator: "_separator_1rxzq_212"
};
var VideoThumbCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(VideoThumbCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VideoThumbCard_vue_vue_type_style_index_0_lang_module_default }]]);
const courses = [{
	id: "beginner-course",
	title: "n8n Beginner Course",
	description: "Official video course covering workflows, APIs, webhooks, nodes, error handling, and debugging. Perfect starting point.",
	url: "https://docs.n8n.io/video-courses/",
	thumbnailUrl: "https://img.youtube.com/vi/RpjQTGKm-ok/hq720.jpg",
	duration: "3 hours",
	lessonCount: 12,
	type: "Video"
}, {
	id: "advanced-course",
	title: "n8n Advanced Course",
	description: "Master complex data flows, advanced nodes, sub-workflows, error workflows, and enterprise features.",
	url: "https://docs.n8n.io/video-courses/",
	thumbnailUrl: "https://img.youtube.com/vi/3w7xIMKLVAg/hq720.jpg",
	duration: "4 hours",
	lessonCount: 15,
	type: "Video"
}];
const learningVideos = [
	{
		videoId: "4cQWJViybAQ",
		title: "Build your first workflow",
		description: "Get started with n8n by building your first workflow from scratch",
		thumbnailUrl: "https://img.youtube.com/vi/4cQWJViybAQ/hq720.jpg",
		duration: "15 min",
		level: "Beginner"
	},
	{
		videoId: "kkrA7tGHYNo",
		title: "Basic workflow concepts",
		description: "Learn the fundamental concepts of n8n workflows",
		thumbnailUrl: "https://img.youtube.com/vi/kkrA7tGHYNo/hq720.jpg",
		duration: "14 min",
		level: "Beginner"
	},
	{
		videoId: "rCPXBkeBWCQ",
		title: "Nodes",
		description: "Understanding how nodes work in n8n workflows",
		thumbnailUrl: "https://img.youtube.com/vi/rCPXBkeBWCQ/hq720.jpg",
		duration: "13 min",
		level: "Beginner"
	},
	{
		videoId: "a5sJNwfZ528",
		title: "Using the AI workflow builder",
		description: "Learn how to use AI to build workflows faster",
		thumbnailUrl: "https://img.youtube.com/vi/a5sJNwfZ528/hq720.jpg",
		duration: "18 min",
		level: "Beginner"
	},
	{
		videoId: "zcNB8L4_9mA",
		title: "Use test data (Pinning)",
		description: "Learn how to use pinning to test your workflows with sample data",
		thumbnailUrl: "https://img.youtube.com/vi/zcNB8L4_9mA/hq720.jpg",
		duration: "7 min",
		level: "Beginner"
	},
	{
		videoId: "kvEGWVMo-2c",
		title: "Connect any API with HTTP node",
		description: "Master API integrations using the HTTP Request node",
		thumbnailUrl: "https://img.youtube.com/vi/kvEGWVMo-2c/hq720.jpg",
		duration: "5 min",
		level: "Intermediate"
	},
	{
		videoId: "Gxe_RfCRH-o",
		title: "Fixing issues (Debugging)",
		description: "Learn how to debug and fix issues in your workflows",
		thumbnailUrl: "https://img.youtube.com/vi/Gxe_RfCRH-o/hq720.jpg",
		duration: "16 min",
		level: "Intermediate"
	},
	{
		videoId: "bTF3tACqPRU",
		title: "Handling errors",
		description: "Set up error handling to make your workflows more robust",
		thumbnailUrl: "https://img.youtube.com/vi/bTF3tACqPRU/hq720.jpg",
		duration: "10 min",
		level: "Intermediate"
	}
];
const masterclassVideos = [
	{
		videoId: "ZHH3sr234zY",
		title: "Build AI Agents & Automate Workflows",
		description: "Comprehensive masterclass on building AI agents with n8n",
		thumbnailUrl: "https://img.youtube.com/vi/ZHH3sr234zY/hq720.jpg",
		duration: "1h 32 min",
		level: "Intermediate"
	},
	{
		videoId: "UIf-SlmMays",
		title: "Zero to Hero",
		description: "Complete journey from beginner to advanced n8n user",
		thumbnailUrl: "https://img.youtube.com/vi/UIf-SlmMays/hq720.jpg",
		duration: "3h 35 min",
		level: "Beginner"
	},
	{
		videoId: "D9MIGseFB3g",
		title: "Essential nodes with use cases",
		description: "Learn the most important nodes and when to use them",
		thumbnailUrl: "https://img.youtube.com/vi/D9MIGseFB3g/hq720.jpg",
		duration: "24 min",
		level: "Beginner"
	},
	{
		videoId: "zMy5yoA-ub8",
		title: "25 Tips & Tricks",
		description: "Power user tips and tricks to boost your productivity",
		thumbnailUrl: "https://img.youtube.com/vi/zMy5yoA-ub8/hq720.jpg",
		duration: "15 min",
		level: "Intermediate"
	}
];
const learnTemplateIds = [8527, 6270];
const inspirationVideos = [
	{
		videoId: "A0OwvNOLNlw",
		title: "Whatsapp based AI agent",
		description: "Build an AI agent that works through WhatsApp",
		thumbnailUrl: "https://img.youtube.com/vi/A0OwvNOLNlw/hq720.jpg",
		duration: "7 min"
	},
	{
		videoId: "k3mcttDLJB4",
		title: "Voice Agent",
		description: "Create a voice-powered AI agent",
		thumbnailUrl: "https://img.youtube.com/vi/k3mcttDLJB4/hq720.jpg",
		duration: "28 min"
	},
	{
		videoId: "h7BLVKh7yzc",
		title: "Build an Outlook inbox manager",
		description: "Automate your email management with Outlook integration",
		thumbnailUrl: "https://img.youtube.com/vi/h7BLVKh7yzc/hq720.jpg",
		duration: "32 min"
	}
];
const featuredTemplateIds = [
	7639,
	3050,
	4966,
	7177,
	8779,
	3100
];
export { learningVideos as a, TemplateCard_default as c, learnTemplateIds as i, WorkflowPreviewSvg_default as l, featuredTemplateIds as n, masterclassVideos as o, inspirationVideos as r, VideoThumbCard_default as s, courses as t, ResourceCenterHeader_default as u };
