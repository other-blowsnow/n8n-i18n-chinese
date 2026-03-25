import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DL4VDRVM.js";
import "./src-CO68IM2H.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Bj_XyNBb.js";
import "./MainSidebarHeader-CUIX87zm.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-CasV1Nn-.js";
import "./merge-aQ2KMKTv.js";
import "./_baseOrderBy-CfcpbHUH.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVsIZ8uv.js";
import "./versions.store-D5dvcg6l.js";
import "./usePageRedirectionHelper-CrJx6fiY.js";
import "./useBugReporting-DJzsd0e1.js";
import "./canvas.utils-DXtYJQO-.js";
import "./KeyboardShortcutTooltip-D8pjiE_j.js";
import "./folders.store-C13tey84.js";
import "./sourceControl.eventBus-DbsWGhgW.js";
import "./useKeybindings-m00chGP-.js";
import "./useGlobalEntityCreation-DfgvFmji.js";
import "./useSettingsItems-CNk7buW2.js";
import { t as AppSidebar_default } from "./AppSidebar-ByvYfMoq.js";
import "./readyToRun.store-MikhlF1o.js";
import "./resourceCenter.store-CXOL9sbN.js";
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DefaultLayout_default as default };
