import { o as __toESM, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, k as createSlots, p as vShow, q as onBeforeMount, st as resolveDirective, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { c as require_isObject, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ct as N8nInput_default, In as N8nText_default, Ln as N8nButton_default, Pn as N8nHeading_default, Vt as ElCheckbox, X as N8nCard_default, et as N8nLoading_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, v as onBeforeRouteLeave, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Bo as useSettingsStore, Tn as useDocumentTitle, er as useUsersStore, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { d as CREATOR_HUB_URL, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import { n as require_debounce, t as useDebounce } from "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import { t as useTemplatesStore } from "./templates.store-CFt_GGxU.js";
import "./nodeIcon-BWTKM7V3.js";
import "./NodeIcon-B-yC7jws.js";
import "./TimeAgo-DCz5bgJ1.js";
import { t as require_orderBy } from "./orderBy-BTQ4q55E.js";
import { t as TemplatesView_default } from "./TemplatesView-C0ExQ8hI.js";
import { n as NodeList_default, t as TemplateList_default } from "./TemplateList-Dub3jUuN.js";
var _hoisted_1$3 = ["textContent"];
var CollectionWorkflowCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollectionWorkflowCard",
	props: {
		loading: { type: Boolean },
		title: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), mergeProps({ class: _ctx.$style.card }, _ctx.$attrs), createSlots({
				default: withCtx(() => [createVNode(unref(N8nLoading_default), {
					loading: _ctx.loading,
					rows: 3,
					variant: "p"
				}, null, 8, ["loading"])]),
				_: 2
			}, [!_ctx.loading && _ctx.title ? {
				name: "header",
				fn: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.title),
					textContent: toDisplayString(_ctx.title)
				}, null, 10, _hoisted_1$3)]),
				key: "0"
			} : void 0, !_ctx.loading ? {
				name: "footer",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
				key: "1"
			} : void 0]), 1040, ["class"]);
		};
	}
});
var CollectionWorkflowCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1goyo_123",
	title: "_title_1goyo_139"
};
var CollectionWorkflowCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(CollectionWorkflowCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollectionWorkflowCard_vue_vue_type_style_index_0_lang_module_default }]]);
var TemplatesInfoCard_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesInfoCard",
	props: {
		collection: {},
		loading: {
			type: Boolean,
			default: false
		},
		showItemCount: {
			type: Boolean,
			default: true
		},
		width: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CollectionWorkflowCard_default, {
				loading: _ctx.loading,
				title: _ctx.collection.name,
				style: normalizeStyle({ width: _ctx.width })
			}, {
				footer: withCtx(() => [createBaseVNode("span", null, [withDirectives(createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.collection.workflows.length) + " " + toDisplayString(unref(i18n).baseText("templates.workflows")), 1)]),
					_: 1
				}, 512), [[vShow, _ctx.showItemCount]])]), createVNode(NodeList_default, {
					nodes: _ctx.collection.nodes,
					"show-more": false
				}, null, 8, ["nodes"])]),
				_: 1
			}, 8, [
				"loading",
				"title",
				"style"
			]);
		};
	}
});
var handlers_default = { methods: {
	handleMouseDown(e) {
		this.isMouseDown = true;
		if (e.type.indexOf("touch") !== -1) {
			this.dragStartX = e.touches[0].clientX;
			this.dragStartY = e.touches[0].clientY;
		}
		if (e.type.indexOf("mouse") !== -1) {
			this.dragStartX = e.clientX;
			this.dragStartY = e.clientY;
		}
	},
	handleMouseMove(e) {
		let positionX;
		let positionY;
		if (e.type.indexOf("touch") !== -1) {
			positionX = e.touches[0].clientX;
			positionY = e.touches[0].clientY;
		}
		if (e.type.indexOf("mouse") !== -1) {
			positionX = e.clientX;
			positionY = e.clientY;
		}
		if (Math.abs(positionX - this.dragStartX) > 3 * Math.abs(positionY - this.dragStartY)) {
			this.disableScroll();
			this.dragDistance = positionX - this.dragStartX;
		}
	},
	handleMouseUp() {
		this.isMouseDown = false;
		this.enableScroll();
	},
	handleMouseOver(element) {
		if (this.settings.autoplay) {
			if (element === "dot" && this.settings.pauseOnDotsHover || element === "track" && this.settings.pauseOnHover) this.isAutoplayPaused = true;
		}
	},
	handleMouseOut(element) {
		if (this.settings.autoplay) {
			if (element === "dot" && this.settings.pauseOnDotsHover || element === "track" && this.settings.pauseOnHover) this.isAutoplayPaused = false;
		}
	}
} };
var helpers_default = { methods: {
	getWidth() {
		if (this.isSSR) return false;
		this.widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.widthContainer = this.$refs.list.clientWidth;
	},
	htmlCollectionToArray(collection) {
		return Array.prototype.slice.call(collection, 0);
	}
} };
var methods_default = { methods: {
	clearAutoPlayPause() {
		clearTimeout(this.autoplayTimeout);
		this.autoplayRemaining = null;
	},
	disableAutoPlay() {
		clearInterval(this.autoplayInterval);
		this.autoplayInterval = null;
	},
	disableScroll() {
		document.ontouchmove = (e) => e.preventDefault();
	},
	enableScroll() {
		document.ontouchmove = () => true;
	},
	restartAutoPlay() {
		this.disableAutoPlay();
		this.toggleAutoPlay();
	},
	toggleAutoPlay() {
		const enabled = !this.settings.unagile && this.settings.autoplay;
		if (!this.autoplayInterval && enabled) this.autoplayInterval = setInterval(() => {
			if (!document.hidden) if (!this.canGoToNext) this.disableAutoPlay();
			else this.goToNext();
		}, this.settings.autoplaySpeed);
		else this.disableAutoPlay();
	},
	toggleFade() {
		const enabled = !this.settings.unagile && this.settings.fade;
		for (let i = 0; i < this.countSlides; i++) {
			this.slides[i].style.transition = enabled ? "opacity " + this.settings.timing + " " + this.settings.speed + "ms" : "none";
			this.slides[i].style.transform = enabled ? `translate(-${i * this.widthSlide}px)` : "none";
		}
	}
} };
var preparations_default = { methods: {
	prepareSlides() {
		this.slides = this.htmlCollectionToArray(this.$refs.slides.children);
		if (this.slidesCloned) {
			this.slidesClonedBefore = this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children);
			this.slidesClonedAfter = this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children);
		}
		for (const slide of this.slidesAll) slide.classList.add("agile__slide");
	},
	prepareSlidesClasses() {
		if (this.currentSlide === null) return false;
		for (let i = 0; i < this.countSlides; i++) {
			this.slides[i].classList.remove("agile__slide--active");
			this.slides[i].classList.remove("agile__slide--current");
		}
		setTimeout(() => this.slides[this.currentSlide].classList.add("agile__slide--active"), this.changeDelay);
		let start = this.slidesCloned ? this.countSlides + this.currentSlide : this.currentSlide;
		if (this.centerMode) start -= Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0);
		for (let i = Math.max(start, 0); i < Math.min(start + this.settings.slidesToShow, this.countSlides); i++) this.slidesAll[i].classList.add("agile__slide--current");
	},
	prepareCarousel() {
		if (this.settings.unagile) this.translateX = 0;
		else {
			if (this.currentSlide === null && this.countSlides) this.currentSlide = this.settings.initialSlide;
			if (this.currentSlide > this.countSlides) this.currentSlide = this.countSlides - 1;
			this.goTo(this.currentSlide, false, false);
		}
	}
} };
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy());
var settings_default = {
	props: {
		asNavFor: {
			type: Array,
			default: function() {
				return [];
			}
		},
		autoplay: {
			type: Boolean,
			default: false
		},
		autoplaySpeed: {
			type: Number,
			default: 3e3
		},
		centerMode: {
			type: Boolean,
			default: false
		},
		centerPadding: {
			type: String,
			default: "15%"
		},
		changeDelay: {
			type: Number,
			default: 0
		},
		dots: {
			type: Boolean,
			default: true
		},
		fade: {
			type: Boolean,
			default: false
		},
		infinite: {
			type: Boolean,
			default: true
		},
		initialSlide: {
			type: Number,
			default: 0
		},
		mobileFirst: {
			type: Boolean,
			default: true
		},
		navButtons: {
			type: Boolean,
			default: true
		},
		options: {
			type: Object,
			default: () => null
		},
		pauseOnDotsHover: {
			type: Boolean,
			default: false
		},
		pauseOnHover: {
			type: Boolean,
			default: true
		},
		responsive: {
			type: Array,
			default: () => null
		},
		rtl: {
			type: Boolean,
			default: false
		},
		slidesToScroll: {
			type: Number,
			default: 1
		},
		slidesToShow: {
			type: Number,
			default: 1
		},
		speed: {
			type: Number,
			default: 300
		},
		swipeDistance: {
			type: Number,
			default: 50
		},
		throttleDelay: {
			type: Number,
			default: 500
		},
		timing: {
			type: String,
			default: "ease",
			validator: (value) => {
				return [
					"ease",
					"linear",
					"ease-in",
					"ease-out",
					"ease-in-out"
				].indexOf(value) !== -1;
			}
		},
		unagile: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		initialSettings: function() {
			let { options,...initialSettings } = this.$props;
			if (options) initialSettings = {
				...initialSettings,
				...options
			};
			if (initialSettings.responsive) initialSettings.responsive = (0, import_orderBy.default)(initialSettings.responsive, "breakpoint");
			return initialSettings;
		},
		settings: function() {
			const { responsive,...settings } = this.initialSettings;
			if (responsive) responsive.forEach((option) => {
				if (settings.mobileFirst ? option.breakpoint < this.widthWindow : option.breakpoint > this.widthWindow) for (const key in option.settings) settings[key] = option.settings[key];
			});
			return settings;
		}
	}
};
var import_throttle = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var debounce = require_debounce(), isObject = require_isObject();
	var FUNC_ERROR_TEXT = "Expected a function";
	function throttle$1(func, wait, options) {
		var leading = true, trailing = true;
		if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
		if (isObject(options)) {
			leading = "leading" in options ? !!options.leading : leading;
			trailing = "trailing" in options ? !!options.trailing : trailing;
		}
		return debounce(func, wait, {
			"leading": leading,
			"maxWait": wait,
			"trailing": trailing
		});
	}
	module.exports = throttle$1;
})))());
var _sfc_main = {
	name: "agile",
	mixins: [
		handlers_default,
		helpers_default,
		methods_default,
		preparations_default,
		settings_default,
		{ created() {
			this.goTo = (0, import_throttle.default)(this.goTo, this.throttleDelay);
			this.getWidth = (0, import_throttle.default)(this.getWidth, 500);
		} },
		{ watch: {
			currentBreakpoint() {
				this.$emit("breakpoint", { breakpoint: this.currentBreakpoint });
			},
			currentSlide() {
				this.prepareSlidesClasses();
				this.autoplayStartTimestamp = this.settings.autoplay ? +/* @__PURE__ */ new Date() : null;
				this.$emit("after-change", { currentSlide: this.currentSlide });
			},
			dragDistance() {
				if (this.isMouseDown) {
					const { rtl } = this.settings;
					const dragDistance = this.dragDistance * (rtl ? -1 : 1);
					if (dragDistance > this.swipeDistance && this.canGoToPrev) {
						this.goToPrev();
						this.handleMouseUp();
					}
					if (dragDistance < -1 * this.swipeDistance && this.canGoToNext) {
						this.goToNext();
						this.handleMouseUp();
					}
				}
			},
			isAutoplayPaused(nevValue) {
				if (nevValue) {
					this.remaining = this.settings.autoplaySpeed - (+/* @__PURE__ */ new Date() - this.autoplayStartTimestamp);
					this.disableAutoPlay();
					this.clearAutoPlayPause();
				} else this.autoplayTimeout = setTimeout(() => {
					this.clearAutoPlayPause();
					this.goToNext();
					this.toggleAutoPlay();
				}, this.remaining);
			},
			"settings.autoplay"() {
				this.toggleAutoPlay();
			},
			"settings.fade"() {
				this.toggleFade();
			},
			"settings.unagile"() {},
			widthSlide() {
				for (let i = 0; i < this.countSlidesAll; i++) this.slidesAll[i].style.width = `${this.widthSlide}${this.widthSlide !== "auto" ? "px" : ""}`;
			},
			widthWindow(newValue, oldValue) {
				if (oldValue) {
					this.prepareCarousel();
					this.toggleFade();
				}
			}
		} }
	],
	emits: [
		"before-change",
		"after-change",
		"breakpoint"
	],
	data() {
		return {
			autoplayInterval: null,
			autoplayRemaining: null,
			autoplayStartTimestamp: null,
			autoplayTimeout: null,
			currentSlide: null,
			dragDistance: 0,
			dragStartX: 0,
			dragStartY: 0,
			isAutoplayPaused: false,
			isMouseDown: false,
			slides: [],
			slidesClonedAfter: [],
			slidesClonedBefore: [],
			isSSR: typeof window === "undefined",
			transitionDelay: 0,
			translateX: 0,
			widthWindow: 0,
			widthContainer: 0
		};
	},
	computed: {
		breakpoints: function() {
			return !this.initialSettings.responsive ? [] : this.initialSettings.responsive.map((item$1) => item$1.breakpoint);
		},
		canGoToPrev: function() {
			return this.settings.infinite || this.currentSlide > 0;
		},
		canGoToNext: function() {
			return this.settings.infinite || this.currentSlide < this.countSlides - 1;
		},
		countSlides: function() {
			return this.isSSR ? this.htmlCollectionToArray(this.$slots.default).length : this.slides.length;
		},
		countSlidesAll: function() {
			return this.slidesAll.length;
		},
		currentBreakpoint: function() {
			const breakpoints = this.breakpoints.map((item$1) => item$1).reverse();
			return this.initialSettings.mobileFirst ? breakpoints.find((item$1) => item$1 < this.widthWindow) || 0 : breakpoints.find((item$1) => item$1 > this.widthWindow) || null;
		},
		marginX: function() {
			if (this.settings.unagile) return 0;
			let marginX = this.slidesCloned ? this.countSlides * this.widthSlide : 0;
			if (this.settings.centerMode) marginX -= (Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0)) * this.widthSlide;
			return this.settings.rtl ? marginX : -1 * marginX;
		},
		slidesCloned: function() {
			return !this.settings.unagile && !this.settings.fade && this.settings.infinite;
		},
		slidesAll: function() {
			return this.slidesCloned ? [
				...this.slidesClonedBefore,
				...this.slides,
				...this.slidesClonedAfter
			] : this.slides;
		},
		widthSlide: function() {
			return !this.settings.unagile ? this.widthContainer / this.settings.slidesToShow : "auto";
		}
	},
	mounted() {
		window.addEventListener("resize", this.getWidth);
		this.$refs.track.addEventListener("touchstart", this.handleMouseDown);
		this.$refs.track.addEventListener("touchend", this.handleMouseUp);
		this.$refs.track.addEventListener("touchmove", this.handleMouseMove);
		this.$refs.track.addEventListener("mousedown", this.handleMouseDown);
		this.$refs.track.addEventListener("mouseup", this.handleMouseUp);
		this.$refs.track.addEventListener("mousemove", this.handleMouseMove);
		this.isSSR = false;
		this.reload();
	},
	beforeUnmount() {
		this.destroy();
	},
	methods: {
		destroy() {
			window.removeEventListener("resize", this.getWidth);
			this.$refs.track.removeEventListener("touchstart", this.handleMouseDown);
			this.$refs.track.removeEventListener("touchend", this.handleMouseUp);
			this.$refs.track.removeEventListener("touchmove", this.handleMouseMove);
			this.$refs.track.removeEventListener("mousedown", this.handleMouseDown);
			this.$refs.track.removeEventListener("mouseup", this.handleMouseUp);
			this.$refs.track.removeEventListener("mousemove", this.handleMouseMove);
			this.disableAutoPlay();
		},
		getCurrentBreakpoint() {
			return this.currentBreakpoint;
		},
		getCurrentSettings() {
			return this.settings;
		},
		getCurrentSlide() {
			return this.currentSlide;
		},
		getInitialSettings() {
			return this.initialSettings;
		},
		goTo(n, transition = true, asNav = false) {
			if (this.settings.unagile) return false;
			if (!asNav) this.settings.asNavFor.forEach((carousel) => {
				if (carousel) carousel.goTo(n, transition, true);
			});
			let slideNextReal = n;
			if (transition) {
				if (this.settings.infinite && n < 0) slideNextReal = this.countSlides - 1;
				else if (n >= this.countSlides) slideNextReal = 0;
				this.$emit("before-change", {
					currentSlide: this.currentSlide,
					nextSlide: slideNextReal
				});
				this.currentSlide = slideNextReal;
				if (n !== slideNextReal) setTimeout(() => {
					this.goTo(slideNextReal, false);
				}, this.settings.speed);
			}
			const translateX = !this.settings.fade ? n * this.widthSlide * this.settings.slidesToScroll : 0;
			this.transitionDelay = transition ? this.speed : 0;
			if (this.infinite || this.currentSlide + this.slidesToShow <= this.countSlides) this.translateX = this.settings.rtl ? translateX : -1 * translateX;
		},
		goToNext() {
			if (this.canGoToNext) this.goTo(this.currentSlide + 1);
		},
		goToPrev() {
			if (this.canGoToPrev) this.goTo(this.currentSlide - 1);
		},
		reload() {
			this.getWidth();
			this.prepareSlides();
			this.prepareCarousel();
			this.toggleFade();
			this.toggleAutoPlay();
		}
	}
};
var _hoisted_1$2 = {
	ref: "list",
	class: "agile__list"
};
var _hoisted_2$1 = {
	ref: "slidesClonedBefore",
	class: "agile__slides agile__slides--cloned"
};
var _hoisted_3 = {
	ref: "slides",
	class: "agile__slides agile__slides--regular"
};
var _hoisted_4 = {
	ref: "slidesClonedAfter",
	class: "agile__slides agile__slides--cloned"
};
var _hoisted_5 = {
	key: 0,
	class: "agile__caption"
};
var _hoisted_6 = {
	key: 1,
	class: "agile__actions"
};
var _hoisted_7 = ["disabled"];
var _hoisted_8 = {
	key: 1,
	ref: "dots",
	class: "agile__dots"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", {
		class: normalizeClass([{
			"agile--ssr": $data.isSSR,
			"agile--auto-play": _ctx.settings.autoplay,
			"agile--disabled": _ctx.settings.unagile,
			"agile--fade": _ctx.settings.fade && !_ctx.settings.unagile,
			"agile--rtl": _ctx.settings.rtl,
			"agile--no-nav-buttons": !_ctx.settings.navButtons
		}, "agile"]),
		onTouchstart: () => {}
	}, [
		createBaseVNode("div", _hoisted_1$2, [createBaseVNode("div", {
			ref: "track",
			style: normalizeStyle({
				transform: `translate(${$data.translateX + $options.marginX}px)`,
				transition: `transform ${_ctx.settings.timing} ${$data.transitionDelay}ms`
			}),
			class: "agile__track",
			onMouseout: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseOut("track")),
			onMouseover: _cache[1] || (_cache[1] = ($event) => _ctx.handleMouseOver("track"))
		}, [
			withDirectives(createBaseVNode("div", _hoisted_2$1, [renderSlot(_ctx.$slots, "default")], 512), [[vShow, $options.slidesCloned]]),
			createBaseVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default")], 512),
			withDirectives(createBaseVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "default")], 512), [[vShow, $options.slidesCloned]])
		], 36)], 512),
		_ctx.$slots.caption ? (openBlock(), createElementBlock("div", _hoisted_5, [renderSlot(_ctx.$slots, "caption")])) : createCommentVNode("", true),
		!_ctx.settings.unagile && (_ctx.settings.navButtons || _ctx.settings.dots) ? (openBlock(), createElementBlock("div", _hoisted_6, [
			_ctx.settings.navButtons && !_ctx.settings.unagile ? (openBlock(), createElementBlock("button", {
				key: 0,
				ref: "prevButton",
				disabled: !$options.canGoToPrev,
				"aria-label": "Previous",
				class: "agile__nav-button agile__nav-button--prev",
				type: "button",
				onClick: _cache[2] || (_cache[2] = ($event) => ($options.goToPrev(), _ctx.restartAutoPlay()))
			}, [renderSlot(_ctx.$slots, "prevButton", {}, () => [_cache[6] || (_cache[6] = createTextVNode(" ← "))])], 8, _hoisted_7)) : createCommentVNode("", true),
			_ctx.settings.dots && !_ctx.settings.unagile ? (openBlock(), createElementBlock("ul", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.countSlides, (n) => {
				return openBlock(), createElementBlock("li", {
					key: n,
					class: normalizeClass([{ "agile__dot--current": n - 1 === $data.currentSlide }, "agile__dot"]),
					onMouseout: _cache[3] || (_cache[3] = ($event) => _ctx.handleMouseOut("dot")),
					onMouseover: _cache[4] || (_cache[4] = ($event) => _ctx.handleMouseOver("dot"))
				}, [createBaseVNode("button", {
					type: "button",
					onClick: ($event) => ($options.goTo(n - 1), _ctx.restartAutoPlay())
				}, toDisplayString(n), 9, _hoisted_9)], 34);
			}), 128))], 512)) : createCommentVNode("", true),
			_ctx.settings.navButtons && !_ctx.settings.unagile ? (openBlock(), createElementBlock("button", {
				key: 2,
				ref: "nextButton",
				disabled: !$options.canGoToNext,
				"aria-label": "Next",
				class: "agile__nav-button agile__nav-button--next",
				type: "button",
				onClick: _cache[5] || (_cache[5] = ($event) => ($options.goToNext(), _ctx.restartAutoPlay()))
			}, [renderSlot(_ctx.$slots, "nextButton", {}, () => [_cache[7] || (_cache[7] = createTextVNode(" → "))])], 8, _hoisted_10)) : createCommentVNode("", true)
		])) : createCommentVNode("", true)
	], 34);
}
var Agile_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
var TemplatesInfoCarousel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesInfoCarousel",
	props: {
		collections: {},
		loading: {
			type: Boolean,
			default: false
		},
		showItemCount: {
			type: Boolean,
			default: true
		},
		showNavigation: {
			type: Boolean,
			default: true
		},
		cardsWidth: { default: "240px" }
	},
	emits: ["openCollection"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const carouselScrollPosition = ref(0);
		const cardWidth = ref(parseInt(props.cardsWidth, 10));
		const scrollEnd = ref(false);
		const listElement = ref(null);
		const sliderRef = ref(null);
		const updateCarouselScroll = () => {
			if (listElement.value) {
				carouselScrollPosition.value = Number(listElement.value.scrollLeft.toFixed());
				const width = listElement.value.clientWidth;
				const scrollWidth = listElement.value.scrollWidth;
				const scrollLeft$1 = carouselScrollPosition.value;
				scrollEnd.value = scrollWidth - width <= scrollLeft$1 + 7;
			}
		};
		const onCardClick = (event, id) => {
			emit("openCollection", {
				event,
				id
			});
		};
		const scrollLeft = () => {
			if (listElement.value) listElement.value.scrollBy({
				left: -(cardWidth.value * 2),
				top: 0,
				behavior: "smooth"
			});
		};
		const scrollRight = () => {
			if (listElement.value) listElement.value.scrollBy({
				left: cardWidth.value * 2,
				top: 0,
				behavior: "smooth"
			});
		};
		watch(() => props.collections, () => {
			setTimeout(() => {
				updateCarouselScroll();
			}, 0);
		});
		watch(() => props.loading, () => {
			setTimeout(() => {
				updateCarouselScroll();
			}, 0);
		});
		onMounted(async () => {
			await nextTick();
			if (!sliderRef.value) return;
			listElement.value = sliderRef.value.$el.querySelector(".agile__list");
			if (listElement.value) listElement.value.addEventListener("scroll", updateCarouselScroll);
		});
		onBeforeMount(() => {
			if (sliderRef.value) sliderRef.value.destroy();
			window.addEventListener("scroll", updateCarouselScroll);
		});
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(Agile_default), {
					ref_key: "sliderRef",
					ref: sliderRef,
					dots: false,
					"nav-buttons": false,
					infinite: false,
					"slides-to-show": 4,
					onAfterChange: updateCarouselScroll
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.loading ? 4 : 0, (n) => {
						return openBlock(), createBlock(CollectionWorkflowCard_default, {
							key: `loading-${n}`,
							loading: _ctx.loading
						}, null, 8, ["loading"]);
					}), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.loading ? [] : _ctx.collections, (collection) => {
						return openBlock(), createBlock(TemplatesInfoCard_default, {
							key: collection.id,
							"data-test-id": "templates-info-card",
							collection,
							"show-item-count": _ctx.showItemCount,
							width: _ctx.cardsWidth,
							onClick: (e) => onCardClick(e, collection.id)
						}, null, 8, [
							"collection",
							"show-item-count",
							"width",
							"onClick"
						]);
					}), 128))]),
					_: 1
				}, 512),
				withDirectives(createBaseVNode("button", {
					class: normalizeClass({ [_ctx.$style.leftButton]: true }),
					onClick: scrollLeft
				}, [createVNode(unref(N8nIcon_default), { icon: "chevron-left" })], 2), [[vShow, _ctx.showNavigation && carouselScrollPosition.value > 0]]),
				withDirectives(createBaseVNode("button", {
					class: normalizeClass({ [_ctx.$style.rightButton]: true }),
					onClick: scrollRight
				}, [createVNode(unref(N8nIcon_default), { icon: "chevron-right" })], 2), [[vShow, _ctx.showNavigation && !scrollEnd.value]])
			], 2)), [[vShow, _ctx.loading || _ctx.collections.length]]);
		};
	}
});
var TemplatesInfoCarousel_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_3t1vn_123",
	button: "_button_3t1vn_127",
	leftButton: "_leftButton_3t1vn_148 _button_3t1vn_127",
	rightButton: "_rightButton_3t1vn_157 _button_3t1vn_127"
};
var TemplatesInfoCarousel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplatesInfoCarousel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesInfoCarousel_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["textContent"];
var _hoisted_2 = ["data-test-id"];
var TemplateFilters_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateFilters",
	props: {
		categories: { default: () => [] },
		sortOnPopulate: {
			type: Boolean,
			default: false
		},
		expandLimit: { default: 12 },
		loading: {
			type: Boolean,
			default: false
		},
		selected: { default: () => [] }
	},
	emits: [
		"clearAll",
		"select",
		"clear"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const collapsed = ref(true);
		const sortedCategories = ref([]);
		const allSelected = computed(() => {
			return props.selected.length === 0;
		});
		function sortCategories() {
			if (!props.sortOnPopulate) sortedCategories.value = props.categories;
			else {
				const selected = props.selected || [];
				const selectedCategories = props.categories.filter((cat) => selected.includes(cat));
				const notSelectedCategories = props.categories.filter((cat) => !selected.includes(cat));
				sortedCategories.value = selectedCategories.concat(notSelectedCategories);
			}
		}
		function collapseAction() {
			collapsed.value = false;
		}
		function handleCheckboxChanged(value, selectedCategory) {
			if (value) emit("select", selectedCategory);
			else emit("clear", selectedCategory);
		}
		function isSelected(category) {
			return props.selected.includes(category);
		}
		function resetCategories() {
			emit("clearAll");
		}
		watch(() => props.sortOnPopulate, (value) => {
			if (value) sortCategories();
		}, { immediate: true });
		watch(() => props.categories, (categories$1) => {
			if (categories$1.length > 0) sortCategories();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.filters, "template-filters"]),
				"data-test-id": "templates-filter-container"
			}, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.title),
					textContent: toDisplayString(unref(i18n).baseText("templates.categoriesHeading"))
				}, null, 10, _hoisted_1$1),
				_ctx.loading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.list)
				}, [createVNode(unref(N8nLoading_default), {
					loading: _ctx.loading,
					rows: _ctx.expandLimit
				}, null, 8, ["loading", "rows"])], 2)) : createCommentVNode("", true),
				!_ctx.loading ? (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.categories)
				}, [createBaseVNode("li", {
					class: normalizeClass(_ctx.$style.item),
					"data-test-id": "template-filter-all-categories"
				}, [createVNode(unref(ElCheckbox), {
					"model-value": allSelected.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = () => resetCategories())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.allCategories")), 1)]),
					_: 1
				}, 8, ["model-value"])], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(collapsed.value ? sortedCategories.value.slice(0, _ctx.expandLimit) : sortedCategories.value, (category, index) => {
					return openBlock(), createElementBlock("li", {
						key: index,
						class: normalizeClass(_ctx.$style.item),
						"data-test-id": `template-filter-${category.name.toLowerCase().replaceAll(" ", "-")}`
					}, [createVNode(unref(ElCheckbox), {
						"model-value": isSelected(category),
						"onUpdate:modelValue": (value) => handleCheckboxChanged(typeof value === "boolean" ? value : Boolean(value), category)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(category.name), 1)]),
						_: 2
					}, 1032, ["model-value", "onUpdate:modelValue"])], 10, _hoisted_2);
				}), 128))], 2)) : createCommentVNode("", true),
				sortedCategories.value.length > _ctx.expandLimit && collapsed.value && !_ctx.loading ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.button),
					"data-test-id": "expand-categories-button",
					onClick: collapseAction
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "primary"
				}, {
					default: withCtx(() => [createTextVNode(" + " + toDisplayString(`${sortedCategories.value.length - _ctx.expandLimit} more`), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var TemplateFilters_vue_vue_type_style_index_0_lang_module_default = {
	title: "_title_jr0i7_123",
	categories: "_categories_jr0i7_128",
	item: "_item_jr0i7_133",
	button: "_button_jr0i7_140"
};
var TemplateFilters_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateFilters_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateFilters_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["textContent"];
var TemplatesSearchView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesSearchView",
	setup(__props) {
		const areCategoriesPrepopulated = ref(false);
		const categories$1 = ref([]);
		const loadingCategories = ref(true);
		const loadingCollections = ref(true);
		const loadingWorkflows = ref(true);
		const search$1 = ref("");
		const searchEventToTrack = ref(null);
		const errorLoadingWorkflows = ref(false);
		const { callDebounced } = useDebounce();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const settingsStore = useSettingsStore();
		const templatesStore = useTemplatesStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const createQueryObject = (categoryId) => {
			return {
				categories: categories$1.value.map((category) => categoryId === "name" ? category.name : String(category.id)),
				search: search$1.value
			};
		};
		const totalWorkflows = computed(() => templatesStore.getSearchedWorkflowsTotal(createQueryObject("name")));
		const workflows = computed(() => templatesStore.getSearchedWorkflows(createQueryObject("name")) ?? []);
		const collections = computed(() => templatesStore.getSearchedCollections(createQueryObject("id")) ?? []);
		const endOfSearchMessage = computed(() => {
			if (loadingWorkflows.value) return null;
			if (!loadingCollections.value && workflows.value.length === 0 && collections.value.length === 0) {
				if (!settingsStore.isTemplatesEndpointReachable && errorLoadingWorkflows.value) return i18n.baseText("templates.connectionWarning");
				return i18n.baseText("templates.noSearchResults");
			}
			return null;
		});
		const updateQueryParam = (search$2, category) => {
			const query = Object.assign({}, route.query);
			if (category.length) query.categories = category;
			else delete query.categories;
			if (search$2.length) query.search = search$2;
			else delete query.search;
			router.replace({ query });
		};
		const updateSearch = () => {
			updateQueryParam(search$1.value, categories$1.value.map((category) => category.id).join(","));
			loadWorkflowsAndCollections(false);
		};
		const loadWorkflows = async () => {
			try {
				loadingWorkflows.value = true;
				await templatesStore.getWorkflows({
					search: search$1.value,
					categories: categories$1.value.map((category) => category.name)
				});
				errorLoadingWorkflows.value = false;
			} catch (e) {
				errorLoadingWorkflows.value = true;
			}
			loadingWorkflows.value = false;
		};
		const loadCollections = async () => {
			try {
				loadingCollections.value = true;
				await templatesStore.getCollections({
					categories: categories$1.value.map((category) => String(category.id)),
					search: search$1.value
				});
			} catch (e) {}
			loadingCollections.value = false;
		};
		const updateSearchTracking = (search$2, categories$2) => {
			if (!search$2) return;
			if (searchEventToTrack.value && searchEventToTrack.value.search_string.length > search$2.length) return;
			searchEventToTrack.value = {
				search_string: search$2,
				workflow_results_count: workflows.value.length,
				collection_results_count: collections.value.length,
				categories_applied: categories$2.map((categoryId) => templatesStore.getCategoryById(categoryId.toString())),
				wf_template_repo_session_id: templatesStore.currentSessionId
			};
		};
		const trackCategories = () => {
			if (categories$1.value.length) telemetry.track("User changed template filters", {
				search_string: search$1.value,
				categories_applied: categories$1.value,
				wf_template_repo_session_id: templatesStore.currentSessionId
			});
		};
		const loadWorkflowsAndCollections = async (initialLoad) => {
			const _categories = [...categories$1.value];
			const _search = search$1.value;
			await Promise.all([loadWorkflows(), loadCollections()]);
			if (!initialLoad) updateSearchTracking(_search, _categories.map((category) => category.id));
		};
		const navigateTo = (e, page, id) => {
			if (e.metaKey || e.ctrlKey) {
				const route$1 = router.resolve({
					name: page,
					params: { id }
				});
				window.open(route$1.href, "_blank");
				return;
			} else router.push({
				name: page,
				params: { id }
			});
		};
		const onOpenCollection = ({ event, id }) => {
			navigateTo(event, VIEWS.COLLECTION, id);
		};
		const onOpenTemplate = ({ event, id }) => {
			navigateTo(event, VIEWS.TEMPLATE, id);
		};
		const trackSearch = () => {
			if (searchEventToTrack.value) {
				telemetry.track("User searched workflow templates", searchEventToTrack.value);
				searchEventToTrack.value = null;
			}
		};
		const onSearchInput = (searchText) => {
			loadingWorkflows.value = true;
			loadingCollections.value = true;
			search$1.value = searchText;
			callDebounced(updateSearch, {
				debounceTime: 500,
				trailing: true
			});
			if (searchText.length === 0) trackSearch();
		};
		const onCategorySelected = (selected) => {
			categories$1.value = categories$1.value.concat(selected);
			updateSearch();
			trackCategories();
		};
		const onCategoryUnselected = (selected) => {
			categories$1.value = categories$1.value.filter((category) => category.id !== selected.id);
			updateSearch();
			trackCategories();
		};
		const onCategoriesCleared = () => {
			categories$1.value = [];
			updateSearch();
		};
		const onLoadMore = async () => {
			if (workflows.value.length >= totalWorkflows.value) return;
			try {
				loadingWorkflows.value = true;
				await templatesStore.getMoreWorkflows({
					categories: categories$1.value.map((category) => category.name),
					search: search$1.value
				});
			} catch (e) {
				toast.showMessage({
					title: "Error",
					message: "Could not load more workflows",
					type: "error"
				});
			} finally {
				loadingWorkflows.value = false;
			}
		};
		const loadCategories = async () => {
			try {
				await templatesStore.getCategories();
			} catch (e) {}
			loadingCategories.value = false;
		};
		const scrollTo = (position, behavior = "smooth") => {
			setTimeout(() => {
				const contentArea = document.getElementById("content");
				if (contentArea) contentArea.scrollTo({
					top: position,
					behavior
				});
			}, 0);
		};
		const restoreSearchFromRoute = () => {
			let shouldUpdateSearch = false;
			if (route.query.search && typeof route.query.search === "string") {
				search$1.value = route.query.search;
				shouldUpdateSearch = true;
			}
			if (typeof route.query.categories === "string" && route.query.categories.length) {
				const categoriesFromURL = route.query.categories.split(",");
				categories$1.value = templatesStore.allCategories.filter((category) => categoriesFromURL.includes(category.id.toString()));
				shouldUpdateSearch = true;
			}
			if (shouldUpdateSearch) {
				updateSearch();
				trackCategories();
				areCategoriesPrepopulated.value = true;
			}
		};
		onMounted(async () => {
			documentTitle.set("Templates");
			await loadCategories();
			loadWorkflowsAndCollections(true);
			usersStore.showPersonalizationSurvey();
			restoreSearchFromRoute();
			if (settingsStore.isTemplatesEnabled) settingsStore.testTemplatesEndpoint().catch(() => {});
			setTimeout(() => {
				const scrollOffset = route.meta?.scrollOffset;
				if (typeof scrollOffset === "number" && scrollOffset > 0) scrollTo(scrollOffset, "auto");
			}, 100);
		});
		onBeforeRouteLeave((_to, _from, next) => {
			const contentArea = document.getElementById("content");
			if (contentArea) route.meta?.setScrollPosition?.(contentArea.scrollTop);
			trackSearch();
			next();
		});
		watch(workflows, (newWorkflows) => {
			if (newWorkflows.length === 0) window.scrollTo(0, 0);
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(TemplatesView_default, null, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.heading")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.button) }, [createVNode(unref(N8nButton_default), {
					size: "large",
					type: "secondary",
					element: "a",
					href: unref(CREATOR_HUB_URL),
					label: unref(i18n).baseText("templates.shareWorkflow"),
					target: "_blank"
				}, null, 8, ["href", "label"])], 2)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [createVNode(TemplateFilters_default, {
					categories: unref(templatesStore).allCategories,
					"sort-on-populate": areCategoriesPrepopulated.value,
					selected: categories$1.value,
					loading: loadingCategories.value,
					onClear: onCategoryUnselected,
					onClearAll: onCategoriesCleared,
					onSelect: onCategorySelected
				}, null, 8, [
					"categories",
					"sort-on-populate",
					"selected",
					"loading"
				])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.search) }, [
					createVNode(unref(N8nInput_default), {
						"model-value": search$1.value,
						placeholder: unref(i18n).baseText("templates.searchPlaceholder"),
						clearable: "",
						"data-test-id": "template-search-input",
						"onUpdate:modelValue": onSearchInput,
						onBlur: trackSearch
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, ["model-value", "placeholder"]),
					withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.$style.carouselContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
						bold: true,
						size: "medium",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collections")) + " ", 1), !loadingCollections.value ? (openBlock(), createElementBlock("span", {
							key: 0,
							"data-test-id": "collection-count-label",
							textContent: toDisplayString(`(${collections.value.length})`)
						}, null, 8, _hoisted_1)) : createCommentVNode("", true)]),
						_: 1
					})], 2), createVNode(TemplatesInfoCarousel_default, {
						collections: collections.value,
						loading: loadingCollections.value,
						onOpenCollection
					}, null, 8, ["collections", "loading"])], 2), [[vShow, collections.value.length || loadingCollections.value]]),
					createVNode(TemplateList_default, {
						"infinite-scroll-enabled": true,
						loading: loadingWorkflows.value,
						workflows: workflows.value,
						"total-count": totalWorkflows.value,
						onLoadMore,
						onOpenTemplate
					}, null, 8, [
						"loading",
						"workflows",
						"total-count"
					]),
					endOfSearchMessage.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.endText)
					}, [createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base"
					}, {
						default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, endOfSearchMessage.value]])]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)], 2)]),
				_: 1
			});
		};
	}
});
var TemplatesSearchView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_xumc9_123",
	contentWrapper: "_contentWrapper_xumc9_128",
	filters: "_filters_xumc9_138",
	search: "_search_xumc9_144",
	header: "_header_xumc9_156"
};
var TemplatesSearchView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplatesSearchView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesSearchView_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplatesSearchView_default as default };
