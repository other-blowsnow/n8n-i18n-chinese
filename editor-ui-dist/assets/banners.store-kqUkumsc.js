import { C as computed, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, Mt as markRaw, P as defineComponent, T as createBlock, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, pt as useSlots, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Fn as N8nCallout_default, j as N8nMarkdown_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Bo as useSettingsStore, Cc as STORES, Qo as dismissBannerPermanently, Qs as useRootStore, er as useUsersStore, uc as get, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
async function getDynamicBanners(endpoint, filters) {
	return await get(endpoint, "", filters);
}
var BaseBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BaseBanner",
	props: {
		name: {},
		theme: { default: "info" },
		customIcon: { default: void 0 },
		dismissible: {
			type: Boolean,
			default: true
		},
		dismissPermanently: {
			type: Boolean,
			default: false
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const bannersStore = useBannersStore();
		const slots = useSlots();
		const props = __props;
		const emit = __emit;
		const hasTrailingContent = computed(() => {
			return !!slots.trailingContent;
		});
		async function onCloseClick() {
			await bannersStore.dismissBanner(props.name, props.dismissPermanently ? "permanent" : "temporary");
			emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				class: normalizeClass(_ctx.$style.callout),
				theme: props.theme,
				icon: props.customIcon,
				"icon-size": "medium",
				"round-corners": false,
				"data-test-id": `banners-${props.name}`,
				"only-bottom-border": true
			}, {
				trailingContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trailingContent) }, [renderSlot(_ctx.$slots, "trailingContent"), _ctx.dismissible ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					size: "small",
					icon: "x",
					title: unref(i18n).baseText("generic.dismiss"),
					class: "clickable",
					"data-test-id": `banner-${props.name}-close`,
					onClick: onCloseClick
				}, null, 8, ["title", "data-test-id"])) : createCommentVNode("", true)], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.mainContent, !hasTrailingContent.value ? _ctx.$style.keepSpace : ""]) }, [renderSlot(_ctx.$slots, "mainContent")], 2)]),
				_: 3
			}, 8, [
				"class",
				"theme",
				"icon",
				"data-test-id"
			]);
		};
	}
});
var BaseBanner_vue_vue_type_style_index_0_lang_module_default = {
	callout: "_callout_xoq77_123",
	mainContent: "_mainContent_xoq77_127",
	keepSpace: "_keepSpace_xoq77_132",
	trailingContent: "_trailingContent_xoq77_136"
};
var BaseBanner_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BaseBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BaseBanner_vue_vue_type_style_index_0_lang_module_default }]]);
var DynamicBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DynamicBanner",
	props: {
		name: {},
		content: {},
		theme: {},
		isDismissible: { type: Boolean },
		dismissPermanently: { type: [Boolean, null] }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseBanner_default, {
				name: props.name,
				theme: props.theme,
				dismissible: props.isDismissible,
				"dismiss-permanently": props.dismissPermanently ?? false
			}, {
				mainContent: withCtx(() => [createVNode(unref(N8nMarkdown_default), {
					content: props.content,
					class: normalizeClass(_ctx.$style.markdown)
				}, null, 8, ["content", "class"])]),
				_: 1
			}, 8, [
				"name",
				"theme",
				"dismissible",
				"dismiss-permanently"
			]);
		};
	}
});
var DynamicBanner_vue_vue_type_style_index_0_lang_module_default = { markdown: "_markdown_ko7e6_123" };
var DynamicBanner_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DynamicBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DynamicBanner_vue_vue_type_style_index_0_lang_module_default }]]);
const useBannersStore = defineStore(STORES.BANNERS, () => {
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const rootStore = useRootStore();
	const dynamicBanners = ref([]);
	const bannerStack = ref([]);
	const bannersHeight = ref(0);
	const mapDeploymentTypeValue = (deploymentType) => {
		return deploymentType === "cloud" ? "cloud" : "self-hosted";
	};
	async function fetchDynamicBanners() {
		if (!settingsStore.settings.dynamicBanners.endpoint || !settingsStore.settings.dynamicBanners.enabled) return [];
		const version = settingsStore.settings.versionCli;
		const deploymentType = mapDeploymentTypeValue(settingsStore.settings.deployment?.type ?? "default");
		try {
			dynamicBanners.value = (await getDynamicBanners(settingsStore.settings.dynamicBanners.endpoint, {
				version,
				deploymentType,
				instanceId: settingsStore.settings.instanceId,
				planName: settingsStore.settings.license?.planName,
				userCreatedAt: usersStore.currentUser?.createdAt,
				isOwner: usersStore.currentUser?.isOwner,
				role: usersStore.currentUser?.role
			})).map((item) => ({
				...item,
				id: `dynamic-banner-${item.id}`,
				component: markRaw(DynamicBanner_default)
			}));
			return dynamicBanners.value;
		} catch (e) {
			console.error("Failed to fetch dynamic banners:", e);
			return [];
		}
	}
	const dynamicBannersMap = computed(() => {
		return dynamicBanners.value.reduce((acc, item) => {
			acc[item.id] = item;
			return acc;
		}, {});
	});
	const removeBannerFromStack = (name) => {
		bannerStack.value = bannerStack.value.filter((bannerName) => bannerName !== name);
	};
	const dismissBanner = async (name, type = "temporary") => {
		if (type === "permanent") {
			await dismissBannerPermanently(rootStore.restApiContext, {
				bannerName: name,
				dismissedBanners: settingsStore.permanentlyDismissedBanners
			});
			removeBannerFromStack(name);
			return;
		}
		removeBannerFromStack(name);
	};
	const updateBannersHeight = (newHeight) => {
		bannersHeight.value = newHeight;
	};
	const pushBannerToStack = (name) => {
		if (bannerStack.value.includes(name)) return;
		bannerStack.value.push(name);
	};
	const clearBannerStack = () => {
		bannerStack.value = [];
	};
	const loadStaticBanners = (options) => {
		options.banners.forEach(pushBannerToStack);
	};
	const loadDynamicBanners = async () => {
		(await fetchDynamicBanners())?.filter((banner) => !settingsStore.permanentlyDismissedBanners.includes(banner.id)).forEach((banner) => pushBannerToStack(banner.id));
	};
	return {
		dynamicBanners,
		bannerStack,
		bannersHeight,
		dynamicBannersMap,
		dismissBanner,
		updateBannersHeight,
		pushBannerToStack,
		clearBannerStack,
		loadStaticBanners,
		loadDynamicBanners
	};
});
export { BaseBanner_default as n, useBannersStore as t };
