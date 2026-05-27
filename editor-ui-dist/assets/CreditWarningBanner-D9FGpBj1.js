import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, n as Transition, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-DXwO88M2.js";
import { Ea as N8nIcon_default, Ta as N8nButton_default, ji as N8nTooltip_default } from "./src-pyi3rpL8.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { n as onClickOutside } from "./core-vNZq-xzE.js";
//#region src/features/ai/assistant/components/Agent/CreditsSettingsDropdown.vue?vue&type=script&setup=true&lang.ts
var CreditsSettingsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CreditsSettingsDropdown",
	props: {
		creditsRemaining: {},
		creditsQuota: {},
		isLowCredits: { type: Boolean }
	},
	emits: ["upgrade-click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isOpen = ref(false);
		const dropdownRef = ref();
		onClickOutside(dropdownRef, () => {
			isOpen.value = false;
		}, { ignore: [".n8n-tooltip"] });
		const hasCredits = computed(() => {
			return props.creditsQuota !== void 0 && props.creditsRemaining !== void 0;
		});
		const creditsLeftText = computed(() => {
			if (props.creditsRemaining === void 0) return "";
			return i18n.baseText("aiAssistant.builder.settings.creditsLeft", { interpolate: { count: String(props.creditsRemaining) } });
		});
		const progressPercentage = computed(() => {
			if (props.creditsQuota === void 0 || props.creditsRemaining === void 0 || props.creditsQuota === 0) return 0;
			return props.creditsRemaining / props.creditsQuota * 100;
		});
		const getNextMonth = () => {
			const now = /* @__PURE__ */ new Date();
			return new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		};
		const tooltipContent = computed(() => {
			const date = getNextMonth();
			return i18n.baseText("aiAssistant.builder.settings.creditsTooltip", { interpolate: {
				renewalDate: date,
				expiryDate: date
			} });
		});
		function toggleDropdown() {
			isOpen.value = !isOpen.value;
		}
		function onGetMoreCredits() {
			emit("upgrade-click");
			isOpen.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				class: normalizeClass(_ctx.$style.wrapper)
			}, [createVNode(unref(N8nButton_default), {
				icon: "circle-dollar-sign",
				variant: "ghost",
				size: "large",
				"icon-only": "",
				class: normalizeClass({ [_ctx.$style.active]: isOpen.value }),
				"data-test-id": "credits-dropdown-button",
				onClick: toggleDropdown
			}, null, 8, ["class"]), createVNode(Transition, { name: "dropdown" }, {
				default: withCtx(() => [isOpen.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropdown),
					"data-test-id": "credits-dropdown"
				}, [hasCredits.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.creditsSection)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.creditsHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.creditsLabel) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("aiAssistant.builder.settings.credits")), 1), createVNode(unref(N8nTooltip_default), {
						content: tooltipContent.value,
						placement: "bottom",
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "info",
							size: "small",
							class: normalizeClass(_ctx.$style.infoIcon)
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.creditsCount) }, toDisplayString(creditsLeftText.value), 3)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.progressBar) }, [createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.progressFill, { [_ctx.$style.low]: __props.isLowCredits }]),
						style: normalizeStyle({ width: `${progressPercentage.value}%` })
					}, null, 6)], 2),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						class: normalizeClass(_ctx.$style.getMoreButton),
						"data-test-id": "credits-get-more",
						onClick: onGetMoreCredits
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.settings.getMoreCredits")), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_s46z5_125",
	dropdown: "_dropdown_s46z5_131",
	creditsSection: "_creditsSection_s46z5_143",
	creditsHeader: "_creditsHeader_s46z5_152",
	creditsLabel: "_creditsLabel_s46z5_159",
	infoIcon: "_infoIcon_s46z5_168",
	creditsCount: "_creditsCount_s46z5_174",
	progressBar: "_progressBar_s46z5_181",
	progressFill: "_progressFill_s46z5_189",
	low: "_low_s46z5_195",
	active: "_active_s46z5_199",
	getMoreButton: "_getMoreButton_s46z5_203"
};
var CreditsSettingsDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditsSettingsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-0b2730cc"]]);
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditWarningBanner.vue?vue&type=script&setup=true&lang.ts
var CreditWarningBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CreditWarningBanner",
	props: {
		creditsRemaining: {},
		creditsQuota: {}
	},
	emits: ["upgrade-click", "dismiss"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const bannerText = computed(() => {
			return i18n.baseText("aiAssistant.builder.creditBanner.text", { interpolate: {
				remaining: String(props.creditsRemaining ?? 0),
				total: String(props.creditsQuota ?? 0)
			} });
		});
		const getNextMonth = () => {
			const now = /* @__PURE__ */ new Date();
			return new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		};
		const tooltipContent = computed(() => {
			const date = getNextMonth();
			return i18n.baseText("aiAssistant.builder.settings.creditsTooltip", { interpolate: {
				renewalDate: date,
				expiryDate: date
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.banner),
				"data-test-id": "credit-warning-banner"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(bannerText.value), 3), createVNode(unref(N8nTooltip_default), {
					content: tooltipContent.value,
					placement: "top",
					"show-after": 300
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "small",
						class: normalizeClass(_ctx.$style.infoIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])], 2),
				createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "xsmall",
					"data-test-id": "credit-banner-get-more",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade-click"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.creditBanner.getMore")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small",
					class: normalizeClass(_ctx.$style.closeIcon),
					"data-test-id": "credit-banner-dismiss",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("dismiss"))
				}, null, 8, ["class"])
			], 2);
		};
	}
});
var CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner: "_banner_1krbe_125",
	content: "_content_1krbe_138",
	text: "_text_1krbe_146",
	infoIcon: "_infoIcon_1krbe_154",
	closeIcon: "_closeIcon_1krbe_160"
};
var CreditWarningBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditWarningBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CreditsSettingsDropdown_default as n, CreditWarningBanner_default as t };
