import { h as createElementBlock, g as openBlock, j as createBaseVNode, d as defineComponent, x as computed, as as useCssModule, aH as useTemplateRef, o as onMounted, f4 as useFavicon, n as normalizeClass, i as createVNode, e as createBlock, f as createCommentVNode, Q as renderSlot, l as unref, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "30"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "#EA4B71",
      "fill-rule": "evenodd",
      d: "M27.2 16.4a3.2 3.2 0 0 1-3.1-2.4h-3.667a1.6 1.6 0 0 0-1.578 1.337l-.132.79A3.2 3.2 0 0 1 17.683 18a3.2 3.2 0 0 1 1.04 1.874l.132.789A1.6 1.6 0 0 0 20.433 22h.468a3.201 3.201 0 0 1 6.299.8 3.2 3.2 0 0 1-6.3.8h-.467a3.2 3.2 0 0 1-3.156-2.674l-.132-.789a1.6 1.6 0 0 0-1.578-1.337h-1.268a3.201 3.201 0 0 1-6.198 0H6.299A3.201 3.201 0 0 1 0 18a3.2 3.2 0 0 1 6.3-.8h1.8a3.201 3.201 0 0 1 6.2 0h1.267a1.6 1.6 0 0 0 1.578-1.337l.132-.79a3.2 3.2 0 0 1 3.156-2.673h3.668a3.201 3.201 0 0 1 6.299.8 3.2 3.2 0 0 1-3.2 3.2m0-1.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m-24 4.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m9.6-1.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0m12.8 4.8a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const LogoIcon = { render: render$1 };
const _hoisted_1 = {
  width: "26",
  height: "30"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("g", { fill: "#101330" }, [
      createBaseVNode("path", {
        "fill-rule": "evenodd",
        d: "M15.002 16.918v-.076c.558-.28 1.116-.762 1.116-1.716 0-1.372-1.13-2.198-2.69-2.198-1.598 0-2.74.877-2.74 2.224 0 .915.533 1.41 1.116 1.69v.076a2.16 2.16 0 0 0-1.42 2.059c0 1.385 1.141 2.351 3.032 2.351 1.89 0 2.994-.966 2.994-2.351a2.16 2.16 0 0 0-1.408-2.059m-1.587-2.82c.635 0 1.104.406 1.104 1.092s-.482 1.093-1.103 1.093c-.622 0-1.142-.407-1.142-1.093 0-.699.495-1.093 1.142-1.093m0 6.01c-.735 0-1.332-.47-1.332-1.27 0-.725.495-1.272 1.32-1.272.812 0 1.307.534 1.307 1.297 0 .775-.571 1.245-1.294 1.245",
        "clip-rule": "evenodd"
      }),
      createBaseVNode("path", { d: "M18.367 21.2h1.624v-3.442c0-1.131.685-1.627 1.46-1.627.76 0 1.357.509 1.357 1.55v3.52h1.624V17.35c0-1.664-.964-2.63-2.474-2.63-.952 0-1.485.381-1.865.877h-.102l-.14-.75h-1.484zm-14.376 0H2.367v-6.352h1.485l.14.75h.1c.381-.496.914-.877 1.866-.877 1.51 0 2.474.966 2.474 2.63v3.85H6.808V17.68c0-1.041-.596-1.55-1.358-1.55-.774 0-1.459.496-1.459 1.627z" })
    ], -1)
  ]));
}
const LogoText = { render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  props: {
    location: {},
    collapsed: { type: Boolean },
    releaseChannel: {}
  },
  setup(__props) {
    const props = __props;
    const { location, releaseChannel } = props;
    const showLogoText = computed(() => {
      if (location === "authView") return true;
      return !props.collapsed;
    });
    const $style = useCssModule();
    const containerClasses = computed(() => {
      if (location === "authView") {
        return [$style.logoContainer, $style.authView];
      }
      return [
        $style.logoContainer,
        $style.sidebar,
        props.collapsed ? $style.sidebarCollapsed : $style.sidebarExpanded
      ];
    });
    const svg = useTemplateRef("logo");
    onMounted(() => {
      if (releaseChannel === "stable" || !("createObjectURL" in URL)) return;
      const logoEl = svg.value.$el;
      const logoColor = releaseChannel === "dev" ? "#838383" : "#E9984B";
      logoEl.querySelector("path")?.setAttribute("fill", logoColor);
      const blob = new Blob([logoEl.outerHTML], { type: "image/svg+xml" });
      useFavicon(URL.createObjectURL(blob));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(containerClasses.value),
        "data-test-id": "n8n-logo"
      }, [
        createVNode(unref(LogoIcon), {
          ref: "logo",
          class: normalizeClass(unref($style).logo)
        }, null, 8, ["class"]),
        showLogoText.value ? (openBlock(), createBlock(unref(LogoText), {
          key: 0,
          class: normalizeClass(unref($style).logoText)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const logoContainer = "_logoContainer_9ctoe_123";
const logoText = "_logoText_9ctoe_129";
const authView = "_authView_9ctoe_136";
const logo = "_logo_9ctoe_123";
const sidebarExpanded = "_sidebarExpanded_9ctoe_149";
const sidebarCollapsed = "_sidebarCollapsed_9ctoe_153";
const style0 = {
  logoContainer,
  logoText,
  authView,
  logo,
  sidebarExpanded,
  sidebarCollapsed
};
const cssModules = {
  "$style": style0
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  Logo as L
};
