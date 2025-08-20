import { d as defineComponent, e as createBlock, g as openBlock, s as N8nCard, K as mergeProps, bu as createSlots, w as withCtx, j as createBaseVNode, t as toDisplayString, n as normalizeClass, Q as renderSlot, i as createVNode, dK as N8nLoading, _ as _export_sfc, U as normalizeStyle, b4 as withDirectives, p as N8nText, k as createTextVNode, l as unref, c as useI18n, b5 as vShow, eS as orderBy, eT as requireDebounce, eU as requireIsObject, bZ as getDefaultExportFromCjs, h as createElementBlock, f as createCommentVNode, F as Fragment, A as renderList, r as ref, af as watch, o as onMounted, R as nextTick, b3 as onBeforeMount, N as N8nIcon, x as computed, T as resolveComponent, Y as useDebounce, a as useToast, ay as useDocumentTitle, v as useSettingsStore, bp as useTemplatesStore, u as useUsersStore, aa as useRoute, b as useRouter, dq as onBeforeRouteLeave, ci as resolveDirective, c$ as N8nInput, m as N8nHeading, q as N8nButton, eV as CREATOR_HUB_URL, V as VIEWS, ap as useTelemetry } from "./index-BsWH3eYA.js";
import { N as NodeList, T as TemplateList } from "./TemplateList-D37AAKD5.js";
import { T as TemplatesView } from "./TemplatesView-BiyV7YY-.js";
const _hoisted_1$3 = ["textContent"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CollectionWorkflowCard",
  props: {
    loading: { type: Boolean },
    title: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_card = N8nCard;
      return openBlock(), createBlock(_component_n8n_card, mergeProps({
        class: _ctx.$style.card
      }, _ctx.$attrs), createSlots({
        default: withCtx(() => [
          createVNode(_component_n8n_loading, {
            loading: _ctx.loading,
            rows: 3,
            variant: "p"
          }, null, 8, ["loading"])
        ]),
        _: 2
      }, [
        !_ctx.loading && _ctx.title ? {
          name: "header",
          fn: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.title),
              textContent: toDisplayString(_ctx.title)
            }, null, 10, _hoisted_1$3)
          ]),
          key: "0"
        } : void 0,
        !_ctx.loading ? {
          name: "footer",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "footer")
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["class"]);
    };
  }
});
const card = "_card_p9uhf_123";
const title$1 = "_title_p9uhf_139";
const style0$3 = {
  card,
  title: title$1
};
const cssModules$3 = {
  "$style": style0$3
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$3]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TemplatesInfoCard",
  props: {
    collection: {},
    loading: { type: Boolean, default: false },
    showItemCount: { type: Boolean, default: true },
    width: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      const _component_n8n_text = N8nText;
      return openBlock(), createBlock(Card, {
        loading: _ctx.loading,
        title: _ctx.collection.name,
        style: normalizeStyle({ width: _ctx.width })
      }, {
        footer: withCtx(() => [
          createBaseVNode("span", null, [
            withDirectives(createVNode(_component_n8n_text, {
              size: "small",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.collection.workflows.length) + " " + toDisplayString(unref(i18n).baseText("templates.workflows")), 1)
              ]),
              _: 1
            }, 512), [
              [vShow, _ctx.showItemCount]
            ])
          ]),
          createVNode(NodeList, {
            nodes: _ctx.collection.nodes,
            "show-more": false
          }, null, 8, ["nodes"])
        ]),
        _: 1
      }, 8, ["loading", "title", "style"]);
    };
  }
});
const mixin$6 = {
  methods: {
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
      const dragDistanceX = Math.abs(positionX - this.dragStartX);
      const dragDistanceY = Math.abs(positionY - this.dragStartY);
      if (dragDistanceX > 3 * dragDistanceY) {
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
        if (element === "dot" && this.settings.pauseOnDotsHover || element === "track" && this.settings.pauseOnHover) {
          this.isAutoplayPaused = true;
        }
      }
    },
    handleMouseOut(element) {
      if (this.settings.autoplay) {
        if (element === "dot" && this.settings.pauseOnDotsHover || element === "track" && this.settings.pauseOnHover) {
          this.isAutoplayPaused = false;
        }
      }
    }
  }
};
const mixin$5 = {
  methods: {
    /**
     * Set window & container width
     */
    getWidth() {
      if (this.isSSR) {
        return false;
      }
      this.widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.widthContainer = this.$refs.list.clientWidth;
    },
    /**
     * Convert HTML Collection to JS Array
     */
    htmlCollectionToArray(collection) {
      return Array.prototype.slice.call(collection, 0);
    }
  }
};
const mixin$4 = {
  methods: {
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
      if (!this.autoplayInterval && enabled) {
        this.autoplayInterval = setInterval(() => {
          if (!document.hidden) {
            if (!this.canGoToNext) {
              this.disableAutoPlay();
            } else {
              this.goToNext();
            }
          }
        }, this.settings.autoplaySpeed);
      } else {
        this.disableAutoPlay();
      }
    },
    toggleFade() {
      const enabled = !this.settings.unagile && this.settings.fade;
      for (let i = 0; i < this.countSlides; i++) {
        this.slides[i].style.transition = enabled ? "opacity " + this.settings.timing + " " + this.settings.speed + "ms" : "none";
        this.slides[i].style.transform = enabled ? `translate(-${i * this.widthSlide}px)` : "none";
      }
    }
  }
};
const mixin$3 = {
  methods: {
    /**
     * Prepare slides classes and styles
     */
    prepareSlides() {
      this.slides = this.htmlCollectionToArray(this.$refs.slides.children);
      if (this.slidesCloned) {
        this.slidesClonedBefore = this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children);
        this.slidesClonedAfter = this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children);
      }
      for (const slide of this.slidesAll) {
        slide.classList.add("agile__slide");
      }
    },
    /**
     *  Prepare slides active/current classes
     */
    prepareSlidesClasses() {
      if (this.currentSlide === null) {
        return false;
      }
      for (let i = 0; i < this.countSlides; i++) {
        this.slides[i].classList.remove("agile__slide--active");
        this.slides[i].classList.remove("agile__slide--current");
      }
      setTimeout(() => this.slides[this.currentSlide].classList.add("agile__slide--active"), this.changeDelay);
      let start = this.slidesCloned ? this.countSlides + this.currentSlide : this.currentSlide;
      if (this.centerMode) {
        start -= Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0);
      }
      for (let i = Math.max(start, 0); i < Math.min(start + this.settings.slidesToShow, this.countSlides); i++) {
        this.slidesAll[i].classList.add("agile__slide--current");
      }
    },
    /**
     * Prepare carousel styles
     */
    prepareCarousel() {
      if (this.settings.unagile) {
        this.translateX = 0;
      } else {
        if (this.currentSlide === null && this.countSlides) {
          this.currentSlide = this.settings.initialSlide;
        }
        if (this.currentSlide > this.countSlides) {
          this.currentSlide = this.countSlides - 1;
        }
        this.goTo(this.currentSlide, false, false);
      }
    }
  }
};
const mixin$2 = {
  props: {
    /**
     * Set the carousel to be the navigation of other carousels
     */
    asNavFor: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * Enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * Autoplay interval in milliseconds
     */
    autoplaySpeed: {
      type: Number,
      default: 3e3
    },
    /**
     * Enable centered view when slidesToShow > 1
     */
    centerMode: {
      type: Boolean,
      default: false
    },
    /**
     * Slides padding in center mode
     */
    centerPadding: {
      type: String,
      default: "15%"
    },
    /**
     * Slide change delay in milliseconds
     */
    changeDelay: {
      type: Number,
      default: 0
    },
    /**
     * Enable dot indicators/pagination
     */
    dots: {
      type: Boolean,
      default: true
    },
    /**
     * Enable fade effect
     */
    fade: {
      type: Boolean,
      default: false
    },
    /**
     * Infinite loop sliding
     */
    infinite: {
      type: Boolean,
      default: true
    },
    /**
     * Index of slide to start on
     */
    initialSlide: {
      type: Number,
      default: 0
    },
    /**
     * Enable mobile first calculation for responsive settings
     */
    mobileFirst: {
      type: Boolean,
      default: true
    },
    /**
     * Enable prev/next navigation buttons
     */
    navButtons: {
      type: Boolean,
      default: true
    },
    /**
     * All settings as one object
     */
    options: {
      type: Object,
      default: () => null
    },
    /**
     * Pause autoplay when a dot is hovered
     */
    pauseOnDotsHover: {
      type: Boolean,
      default: false
    },
    /**
     * Pause autoplay when a slide is hovered
     */
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    /**
     * Object containing breakpoints and settings objects
     */
    responsive: {
      type: Array,
      default: () => null
    },
    /**
     * Enable right-to-left mode
     */
    rtl: {
      type: Boolean,
      default: false
    },
    /**
     * Number of slides to scroll
     */
    slidesToScroll: {
      type: Number,
      default: 1
    },
    /**
     * Number of slides to show
     */
    slidesToShow: {
      type: Number,
      default: 1
    },
    /**
     * Slide animation speed in milliseconds
     */
    speed: {
      type: Number,
      default: 300
    },
    /**
     * Swipe distance
     */
    swipeDistance: {
      type: Number,
      default: 50
    },
    /**
     * Throttle delay in milliseconds
     */
    throttleDelay: {
      type: Number,
      default: 500
    },
    /**
     * Transition timing function
     * Available: ease, linear, ease-in, ease-out, ease-in-out
     */
    timing: {
      type: String,
      default: "ease",
      validator: (value) => {
        return ["ease", "linear", "ease-in", "ease-out", "ease-in-out"].indexOf(value) !== -1;
      }
    },
    /**
     * Disable Agile carousel
     */
    unagile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Initial settings based on props and options object
    initialSettings: function() {
      let { options, ...initialSettings } = this.$props;
      if (options) {
        initialSettings = { ...initialSettings, ...options };
      }
      if (initialSettings.responsive) {
        initialSettings.responsive = orderBy(initialSettings.responsive, "breakpoint");
      }
      return initialSettings;
    },
    // Settings for current breakpoint
    settings: function() {
      const { responsive, ...settings } = this.initialSettings;
      if (responsive) {
        responsive.forEach((option) => {
          if (settings.mobileFirst ? option.breakpoint < this.widthWindow : option.breakpoint > this.widthWindow) {
            for (const key in option.settings) {
              settings[key] = option.settings[key];
            }
          }
        });
      }
      return settings;
    }
  }
};
var throttle_1;
var hasRequiredThrottle;
function requireThrottle() {
  if (hasRequiredThrottle) return throttle_1;
  hasRequiredThrottle = 1;
  var debounce = requireDebounce(), isObject = requireIsObject();
  var FUNC_ERROR_TEXT = "Expected a function";
  function throttle2(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
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
  throttle_1 = throttle2;
  return throttle_1;
}
var throttleExports = requireThrottle();
const throttle = /* @__PURE__ */ getDefaultExportFromCjs(throttleExports);
const mixin$1 = {
  created() {
    this.goTo = throttle(this.goTo, this.throttleDelay);
    this.getWidth = throttle(this.getWidth, 500);
  }
};
const mixin = {
  watch: {
    // Recalculate settings
    currentBreakpoint() {
      this.$emit("breakpoint", { breakpoint: this.currentBreakpoint });
    },
    // Watch current slide change
    currentSlide() {
      this.prepareSlidesClasses();
      this.autoplayStartTimestamp = this.settings.autoplay ? +/* @__PURE__ */ new Date() : null;
      this.$emit("after-change", { currentSlide: this.currentSlide });
    },
    // Watch drag distance change
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
      } else {
        this.autoplayTimeout = setTimeout(() => {
          this.clearAutoPlayPause();
          this.goToNext();
          this.toggleAutoPlay();
        }, this.remaining);
      }
    },
    "settings.autoplay"() {
      this.toggleAutoPlay();
    },
    "settings.fade"() {
      this.toggleFade();
    },
    "settings.unagile"() {
    },
    widthSlide() {
      for (let i = 0; i < this.countSlidesAll; i++) {
        this.slidesAll[i].style.width = `${this.widthSlide}${this.widthSlide !== "auto" ? "px" : ""}`;
      }
    },
    // Watch window width change
    widthWindow(newValue, oldValue) {
      if (oldValue) {
        this.prepareCarousel();
        this.toggleFade();
      }
    }
  }
};
const _sfc_main$3 = {
  name: "agile",
  mixins: [mixin$6, mixin$5, mixin$4, mixin$3, mixin$2, mixin$1, mixin],
  emits: ["before-change", "after-change", "breakpoint"],
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
      return !this.initialSettings.responsive ? [] : this.initialSettings.responsive.map((item2) => item2.breakpoint);
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
      const breakpoints = this.breakpoints.map((item2) => item2).reverse();
      return this.initialSettings.mobileFirst ? breakpoints.find((item2) => item2 < this.widthWindow) || 0 : breakpoints.find((item2) => item2 > this.widthWindow) || null;
    },
    marginX: function() {
      if (this.settings.unagile) {
        return 0;
      }
      let marginX = this.slidesCloned ? this.countSlides * this.widthSlide : 0;
      if (this.settings.centerMode) {
        marginX -= (Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0)) * this.widthSlide;
      }
      return this.settings.rtl ? marginX : -1 * marginX;
    },
    slidesCloned: function() {
      return !this.settings.unagile && !this.settings.fade && this.settings.infinite;
    },
    slidesAll: function() {
      return this.slidesCloned ? [...this.slidesClonedBefore, ...this.slides, ...this.slidesClonedAfter] : this.slides;
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
  // Vue 3
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
    // Return current breakpoint
    getCurrentBreakpoint() {
      return this.currentBreakpoint;
    },
    // Return settings for current breakpoint
    getCurrentSettings() {
      return this.settings;
    },
    // Return current slide index
    getCurrentSlide() {
      return this.currentSlide;
    },
    // Return initial settings
    getInitialSettings() {
      return this.initialSettings;
    },
    // Go to slide
    goTo(n, transition = true, asNav = false) {
      if (this.settings.unagile) {
        return false;
      }
      if (!asNav) {
        this.settings.asNavFor.forEach((carousel) => {
          if (carousel) {
            carousel.goTo(n, transition, true);
          }
        });
      }
      let slideNextReal = n;
      if (transition) {
        if (this.settings.infinite && n < 0) {
          slideNextReal = this.countSlides - 1;
        } else if (n >= this.countSlides) {
          slideNextReal = 0;
        }
        this.$emit("before-change", { currentSlide: this.currentSlide, nextSlide: slideNextReal });
        this.currentSlide = slideNextReal;
        if (n !== slideNextReal) {
          setTimeout(() => {
            this.goTo(slideNextReal, false);
          }, this.settings.speed);
        }
      }
      const translateX = !this.settings.fade ? n * this.widthSlide * this.settings.slidesToScroll : 0;
      this.transitionDelay = transition ? this.speed : 0;
      if (this.infinite || this.currentSlide + this.slidesToShow <= this.countSlides) {
        this.translateX = this.settings.rtl ? translateX : -1 * translateX;
      }
    },
    // Go to next slide
    goToNext() {
      if (this.canGoToNext) {
        this.goTo(this.currentSlide + 1);
      }
    },
    // Go to previous slide
    goToPrev() {
      if (this.canGoToPrev) {
        this.goTo(this.currentSlide - 1);
      }
    },
    // Reload carousel
    reload() {
      this.getWidth();
      this.prepareSlides();
      this.prepareCarousel();
      this.toggleFade();
      this.toggleAutoPlay();
    }
  }
};
const _hoisted_1$2 = {
  ref: "list",
  class: "agile__list"
};
const _hoisted_2$1 = {
  ref: "slidesClonedBefore",
  class: "agile__slides agile__slides--cloned"
};
const _hoisted_3 = {
  ref: "slides",
  class: "agile__slides agile__slides--regular"
};
const _hoisted_4 = {
  ref: "slidesClonedAfter",
  class: "agile__slides agile__slides--cloned"
};
const _hoisted_5 = {
  key: 0,
  class: "agile__caption"
};
const _hoisted_6 = {
  key: 1,
  class: "agile__actions"
};
const _hoisted_7 = ["disabled"];
const _hoisted_8 = {
  key: 1,
  ref: "dots",
  class: "agile__dots"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([{ "agile--ssr": $data.isSSR, "agile--auto-play": _ctx.settings.autoplay, "agile--disabled": _ctx.settings.unagile, "agile--fade": _ctx.settings.fade && !_ctx.settings.unagile, "agile--rtl": _ctx.settings.rtl, "agile--no-nav-buttons": !_ctx.settings.navButtons }, "agile"]),
    onTouchstart: () => {
    }
  }, [
    createBaseVNode("div", _hoisted_1$2, [
      createBaseVNode("div", {
        ref: "track",
        style: normalizeStyle({ transform: `translate(${$data.translateX + $options.marginX}px)`, transition: `transform ${_ctx.settings.timing} ${$data.transitionDelay}ms` }),
        class: "agile__track",
        onMouseout: _cache[0] || (_cache[0] = ($event) => _ctx.handleMouseOut("track")),
        onMouseover: _cache[1] || (_cache[1] = ($event) => _ctx.handleMouseOver("track"))
      }, [
        withDirectives(createBaseVNode("div", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ], 512), [
          [vShow, $options.slidesCloned]
        ]),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ], 512),
        withDirectives(createBaseVNode("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "default")
        ], 512), [
          [vShow, $options.slidesCloned]
        ])
      ], 36)
    ], 512),
    _ctx.$slots.caption ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "caption")
    ])) : createCommentVNode("", true),
    !_ctx.settings.unagile && (_ctx.settings.navButtons || _ctx.settings.dots) ? (openBlock(), createElementBlock("div", _hoisted_6, [
      _ctx.settings.navButtons && !_ctx.settings.unagile ? (openBlock(), createElementBlock("button", {
        key: 0,
        ref: "prevButton",
        disabled: !$options.canGoToPrev,
        "aria-label": "Previous",
        class: "agile__nav-button agile__nav-button--prev",
        type: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => ($options.goToPrev(), _ctx.restartAutoPlay()))
      }, [
        renderSlot(_ctx.$slots, "prevButton", {}, () => [
          _cache[6] || (_cache[6] = createTextVNode(" ← "))
        ])
      ], 8, _hoisted_7)) : createCommentVNode("", true),
      _ctx.settings.dots && !_ctx.settings.unagile ? (openBlock(), createElementBlock("ul", _hoisted_8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.countSlides, (n) => {
          return openBlock(), createElementBlock("li", {
            key: n,
            class: normalizeClass([{ "agile__dot--current": n - 1 === $data.currentSlide }, "agile__dot"]),
            onMouseout: _cache[3] || (_cache[3] = ($event) => _ctx.handleMouseOut("dot")),
            onMouseover: _cache[4] || (_cache[4] = ($event) => _ctx.handleMouseOver("dot"))
          }, [
            createBaseVNode("button", {
              type: "button",
              onClick: ($event) => ($options.goTo(n - 1), _ctx.restartAutoPlay())
            }, toDisplayString(n), 9, _hoisted_9)
          ], 34);
        }), 128))
      ], 512)) : createCommentVNode("", true),
      _ctx.settings.navButtons && !_ctx.settings.unagile ? (openBlock(), createElementBlock("button", {
        key: 2,
        ref: "nextButton",
        disabled: !$options.canGoToNext,
        "aria-label": "Next",
        class: "agile__nav-button agile__nav-button--next",
        type: "button",
        onClick: _cache[5] || (_cache[5] = ($event) => ($options.goToNext(), _ctx.restartAutoPlay()))
      }, [
        renderSlot(_ctx.$slots, "nextButton", {}, () => [
          _cache[7] || (_cache[7] = createTextVNode(" → "))
        ])
      ], 8, _hoisted_10)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true)
  ], 34);
}
const VueAgile = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TemplatesInfoCarousel",
  props: {
    collections: {},
    loading: { type: Boolean, default: false },
    showItemCount: { type: Boolean, default: true },
    showNavigation: { type: Boolean, default: true },
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
        const scrollLeft2 = carouselScrollPosition.value;
        scrollEnd.value = scrollWidth - width <= scrollLeft2 + 7;
      }
    };
    const onCardClick = (event, id) => {
      emit("openCollection", { event, id });
    };
    const scrollLeft = () => {
      if (listElement.value) {
        listElement.value.scrollBy({ left: -(cardWidth.value * 2), top: 0, behavior: "smooth" });
      }
    };
    const scrollRight = () => {
      if (listElement.value) {
        listElement.value.scrollBy({ left: cardWidth.value * 2, top: 0, behavior: "smooth" });
      }
    };
    watch(
      () => props.collections,
      () => {
        setTimeout(() => {
          updateCarouselScroll();
        }, 0);
      }
    );
    watch(
      () => props.loading,
      () => {
        setTimeout(() => {
          updateCarouselScroll();
        }, 0);
      }
    );
    onMounted(async () => {
      await nextTick();
      if (!sliderRef.value) {
        return;
      }
      listElement.value = sliderRef.value.$el.querySelector(".agile__list");
      if (listElement.value) {
        listElement.value.addEventListener("scroll", updateCarouselScroll);
      }
    });
    onBeforeMount(() => {
      if (sliderRef.value) {
        sliderRef.value.destroy();
      }
      window.addEventListener("scroll", updateCarouselScroll);
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon = N8nIcon;
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(VueAgile), {
          ref_key: "sliderRef",
          ref: sliderRef,
          dots: false,
          "nav-buttons": false,
          infinite: false,
          "slides-to-show": 4,
          onAfterChange: updateCarouselScroll
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.loading ? 4 : 0, (n) => {
              return openBlock(), createBlock(Card, {
                key: `loading-${n}`,
                loading: _ctx.loading
              }, null, 8, ["loading"]);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.loading ? [] : _ctx.collections, (collection) => {
              return openBlock(), createBlock(_sfc_main$4, {
                key: collection.id,
                "data-test-id": "templates-info-card",
                collection,
                "show-item-count": _ctx.showItemCount,
                width: _ctx.cardsWidth,
                onClick: (e) => onCardClick(e, collection.id)
              }, null, 8, ["collection", "show-item-count", "width", "onClick"]);
            }), 128))
          ]),
          _: 1
        }, 512),
        withDirectives(createBaseVNode("button", {
          class: normalizeClass({ [_ctx.$style.leftButton]: true }),
          onClick: scrollLeft
        }, [
          createVNode(_component_n8n_icon, { icon: "chevron-left" })
        ], 2), [
          [vShow, _ctx.showNavigation && carouselScrollPosition.value > 0]
        ]),
        withDirectives(createBaseVNode("button", {
          class: normalizeClass({ [_ctx.$style.rightButton]: true }),
          onClick: scrollRight
        }, [
          createVNode(_component_n8n_icon, { icon: "chevron-right" })
        ], 2), [
          [vShow, _ctx.showNavigation && !scrollEnd.value]
        ])
      ], 2)), [
        [vShow, _ctx.loading || _ctx.collections.length]
      ]);
    };
  }
});
const container = "_container_1rskb_123";
const button$1 = "_button_1rskb_127";
const leftButton = "_leftButton_1rskb_148 _button_1rskb_127";
const rightButton = "_rightButton_1rskb_157 _button_1rskb_127";
const style0$2 = {
  container,
  button: button$1,
  leftButton,
  rightButton
};
const cssModules$2 = {
  "$style": style0$2
};
const TemplatesInfoCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = ["textContent"];
const _hoisted_2 = ["data-test-id"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TemplateFilters",
  props: {
    categories: { default: () => [] },
    sortOnPopulate: { type: Boolean, default: false },
    expandLimit: { default: 12 },
    loading: { type: Boolean, default: false },
    selected: { default: () => [] }
  },
  emits: ["clearAll", "select", "clear"],
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
      if (!props.sortOnPopulate) {
        sortedCategories.value = props.categories;
      } else {
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
      if (value) {
        emit("select", selectedCategory);
      } else {
        emit("clear", selectedCategory);
      }
    }
    function isSelected(category) {
      return props.selected.includes(category);
    }
    function resetCategories() {
      emit("clearAll");
    }
    watch(
      () => props.sortOnPopulate,
      (value) => {
        if (value) {
          sortCategories();
        }
      },
      {
        immediate: true
      }
    );
    watch(
      () => props.categories,
      (categories2) => {
        if (categories2.length > 0) {
          sortCategories();
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_n8n_text = N8nText;
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
        }, [
          createVNode(_component_n8n_loading, {
            loading: _ctx.loading,
            rows: _ctx.expandLimit
          }, null, 8, ["loading", "rows"])
        ], 2)) : createCommentVNode("", true),
        !_ctx.loading ? (openBlock(), createElementBlock("ul", {
          key: 1,
          class: normalizeClass(_ctx.$style.categories)
        }, [
          createBaseVNode("li", {
            class: normalizeClass(_ctx.$style.item),
            "data-test-id": "template-filter-all-categories"
          }, [
            createVNode(_component_el_checkbox, {
              "model-value": allSelected.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = () => resetCategories())
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("templates.allCategories")), 1)
              ]),
              _: 1
            }, 8, ["model-value"])
          ], 2),
          (openBlock(true), createElementBlock(Fragment, null, renderList(collapsed.value ? sortedCategories.value.slice(0, _ctx.expandLimit) : sortedCategories.value, (category, index) => {
            return openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass(_ctx.$style.item),
              "data-test-id": `template-filter-${category.name.toLowerCase().replaceAll(" ", "-")}`
            }, [
              createVNode(_component_el_checkbox, {
                "model-value": isSelected(category),
                "onUpdate:modelValue": (value) => handleCheckboxChanged(value, category)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(category.name), 1)
                ]),
                _: 2
              }, 1032, ["model-value", "onUpdate:modelValue"])
            ], 10, _hoisted_2);
          }), 128))
        ], 2)) : createCommentVNode("", true),
        sortedCategories.value.length > _ctx.expandLimit && collapsed.value && !_ctx.loading ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.button),
          "data-test-id": "expand-categories-button",
          onClick: collapseAction
        }, [
          createVNode(_component_n8n_text, {
            size: "small",
            color: "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(" + " + toDisplayString(`${sortedCategories.value.length - _ctx.expandLimit} more`), 1)
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const title = "_title_gndmi_123";
const categories = "_categories_gndmi_128";
const item = "_item_gndmi_133";
const button = "_button_gndmi_140";
const style0$1 = {
  title,
  categories,
  item,
  button
};
const cssModules$1 = {
  "$style": style0$1
};
const TemplateFilters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = ["textContent"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplatesSearchView",
  setup(__props) {
    const areCategoriesPrepopulated = ref(false);
    const categories2 = ref([]);
    const loadingCategories = ref(true);
    const loadingCollections = ref(true);
    const loadingWorkflows = ref(true);
    const search2 = ref("");
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
        categories: categories2.value.map(
          (category) => categoryId === "name" ? category.name : String(category.id)
        ),
        search: search2.value
      };
    };
    const totalWorkflows = computed(
      () => templatesStore.getSearchedWorkflowsTotal(createQueryObject("name"))
    );
    const workflows = computed(
      () => templatesStore.getSearchedWorkflows(createQueryObject("name")) ?? []
    );
    const collections = computed(
      () => templatesStore.getSearchedCollections(createQueryObject("id")) ?? []
    );
    const endOfSearchMessage = computed(() => {
      if (loadingWorkflows.value) {
        return null;
      }
      if (!loadingCollections.value && workflows.value.length === 0 && collections.value.length === 0) {
        if (!settingsStore.isTemplatesEndpointReachable && errorLoadingWorkflows.value) {
          return i18n.baseText("templates.connectionWarning");
        }
        return i18n.baseText("templates.noSearchResults");
      }
      return null;
    });
    const updateQueryParam = (search22, category) => {
      const query = Object.assign({}, route.query);
      if (category.length) {
        query.categories = category;
      } else {
        delete query.categories;
      }
      if (search22.length) {
        query.search = search22;
      } else {
        delete query.search;
      }
      void router.replace({ query });
    };
    const updateSearch = () => {
      updateQueryParam(search2.value, categories2.value.map((category) => category.id).join(","));
      void loadWorkflowsAndCollections(false);
    };
    const loadWorkflows = async () => {
      try {
        loadingWorkflows.value = true;
        await templatesStore.getWorkflows({
          search: search2.value,
          categories: categories2.value.map((category) => category.name)
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
          categories: categories2.value.map((category) => String(category.id)),
          search: search2.value
        });
      } catch (e) {
      }
      loadingCollections.value = false;
    };
    const updateSearchTracking = (search22, categories22) => {
      if (!search22) {
        return;
      }
      if (searchEventToTrack.value && searchEventToTrack.value.search_string.length > search22.length) {
        return;
      }
      searchEventToTrack.value = {
        search_string: search22,
        workflow_results_count: workflows.value.length,
        collection_results_count: collections.value.length,
        categories_applied: categories22.map(
          (categoryId) => templatesStore.getCategoryById(categoryId.toString())
        ),
        wf_template_repo_session_id: templatesStore.currentSessionId
      };
    };
    const trackCategories = () => {
      if (categories2.value.length) {
        telemetry.track("User changed template filters", {
          search_string: search2.value,
          categories_applied: categories2.value,
          wf_template_repo_session_id: templatesStore.currentSessionId
        });
      }
    };
    const loadWorkflowsAndCollections = async (initialLoad) => {
      const _categories = [...categories2.value];
      const _search = search2.value;
      await Promise.all([loadWorkflows(), loadCollections()]);
      if (!initialLoad) {
        updateSearchTracking(
          _search,
          _categories.map((category) => category.id)
        );
      }
    };
    const navigateTo = (e, page, id) => {
      if (e.metaKey || e.ctrlKey) {
        const route2 = router.resolve({ name: page, params: { id } });
        window.open(route2.href, "_blank");
        return;
      } else {
        void router.push({ name: page, params: { id } });
      }
    };
    const onOpenCollection = ({ event, id }) => {
      navigateTo(event, VIEWS.COLLECTION, id);
    };
    const onOpenTemplate = ({ event, id }) => {
      navigateTo(event, VIEWS.TEMPLATE, id);
    };
    const trackSearch = () => {
      if (searchEventToTrack.value) {
        telemetry.track(
          "User searched workflow templates",
          searchEventToTrack.value
        );
        searchEventToTrack.value = null;
      }
    };
    const onSearchInput = (searchText) => {
      loadingWorkflows.value = true;
      loadingCollections.value = true;
      search2.value = searchText;
      void callDebounced(updateSearch, {
        debounceTime: 500,
        trailing: true
      });
      if (searchText.length === 0) {
        trackSearch();
      }
    };
    const onCategorySelected = (selected) => {
      categories2.value = categories2.value.concat(selected);
      updateSearch();
      trackCategories();
    };
    const onCategoryUnselected = (selected) => {
      categories2.value = categories2.value.filter((category) => category.id !== selected.id);
      updateSearch();
      trackCategories();
    };
    const onCategoriesCleared = () => {
      categories2.value = [];
      updateSearch();
    };
    const onLoadMore = async () => {
      if (workflows.value.length >= totalWorkflows.value) {
        return;
      }
      try {
        loadingWorkflows.value = true;
        await templatesStore.getMoreWorkflows({
          categories: categories2.value.map((category) => category.name),
          search: search2.value
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
      } catch (e) {
      }
      loadingCategories.value = false;
    };
    const scrollTo = (position, behavior = "smooth") => {
      setTimeout(() => {
        const contentArea = document.getElementById("content");
        if (contentArea) {
          contentArea.scrollTo({
            top: position,
            behavior
          });
        }
      }, 0);
    };
    const restoreSearchFromRoute = () => {
      let shouldUpdateSearch = false;
      if (route.query.search && typeof route.query.search === "string") {
        search2.value = route.query.search;
        shouldUpdateSearch = true;
      }
      if (typeof route.query.categories === "string" && route.query.categories.length) {
        const categoriesFromURL = route.query.categories.split(",");
        categories2.value = templatesStore.allCategories.filter(
          (category) => categoriesFromURL.includes(category.id.toString())
        );
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
      void loadWorkflowsAndCollections(true);
      void usersStore.showPersonalizationSurvey();
      restoreSearchFromRoute();
      if (settingsStore.isTemplatesEnabled) {
        settingsStore.testTemplatesEndpoint().catch(() => {
        });
      }
      setTimeout(() => {
        const scrollOffset = route.meta?.scrollOffset;
        if (typeof scrollOffset === "number" && scrollOffset > 0) {
          scrollTo(scrollOffset, "auto");
        }
      }, 100);
    });
    onBeforeRouteLeave((_to, _from, next) => {
      const contentArea = document.getElementById("content");
      if (contentArea) {
        route.meta?.setScrollPosition?.(contentArea.scrollTop);
      }
      trackSearch();
      next();
    });
    watch(workflows, (newWorkflows) => {
      if (newWorkflows.length === 0) {
        window.scrollTo(0, 0);
      }
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_button = N8nButton;
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_input = N8nInput;
      const _component_n8n_text = N8nText;
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(TemplatesView, null, {
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.wrapper)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.title)
            }, [
              createVNode(_component_n8n_heading, {
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("templates.heading")), 1)
                ]),
                _: 1
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.button)
            }, [
              createVNode(_component_n8n_button, {
                size: "large",
                type: "secondary",
                element: "a",
                href: unref(CREATOR_HUB_URL),
                label: unref(i18n).baseText("templates.shareWorkflow"),
                target: "_blank"
              }, null, 8, ["href", "label"])
            ], 2)
          ], 2)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.contentWrapper)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.filters)
            }, [
              createVNode(TemplateFilters, {
                categories: unref(templatesStore).allCategories,
                "sort-on-populate": areCategoriesPrepopulated.value,
                selected: categories2.value,
                loading: loadingCategories.value,
                onClear: onCategoryUnselected,
                onClearAll: onCategoriesCleared,
                onSelect: onCategorySelected
              }, null, 8, ["categories", "sort-on-populate", "selected", "loading"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.search)
            }, [
              createVNode(_component_n8n_input, {
                "model-value": search2.value,
                placeholder: unref(i18n).baseText("templates.searchPlaceholder"),
                clearable: "",
                "data-test-id": "template-search-input",
                "onUpdate:modelValue": onSearchInput,
                onBlur: trackSearch
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_n8n_icon, { icon: "search" })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder"]),
              withDirectives(createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.carouselContainer)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [
                  createVNode(_component_n8n_heading, {
                    bold: true,
                    size: "medium",
                    color: "text-light"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("templates.collections")) + " ", 1),
                      !loadingCollections.value ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        "data-test-id": "collection-count-label",
                        textContent: toDisplayString(`(${collections.value.length})`)
                      }, null, 8, _hoisted_1)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ], 2),
                createVNode(TemplatesInfoCarousel, {
                  collections: collections.value,
                  loading: loadingCollections.value,
                  onOpenCollection
                }, null, 8, ["collections", "loading"])
              ], 2), [
                [vShow, collections.value.length || loadingCollections.value]
              ]),
              createVNode(TemplateList, {
                "infinite-scroll-enabled": true,
                loading: loadingWorkflows.value,
                workflows: workflows.value,
                "total-count": totalWorkflows.value,
                onLoadMore,
                onOpenTemplate
              }, null, 8, ["loading", "workflows", "total-count"]),
              endOfSearchMessage.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.endText)
              }, [
                createVNode(_component_n8n_text, {
                  size: "medium",
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("span", null, null, 512), [
                      [_directive_n8n_html, endOfSearchMessage.value]
                    ])
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const wrapper = "_wrapper_15fkc_123";
const contentWrapper = "_contentWrapper_15fkc_128";
const filters = "_filters_15fkc_138";
const search = "_search_15fkc_144";
const header = "_header_15fkc_156";
const style0 = {
  wrapper,
  contentWrapper,
  filters,
  search,
  header
};
const cssModules = {
  "$style": style0
};
const TemplatesSearchView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TemplatesSearchView as default
};
