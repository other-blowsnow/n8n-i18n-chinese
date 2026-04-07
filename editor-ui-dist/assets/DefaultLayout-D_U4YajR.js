import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DLeeJfJb.js";
import "./src-Bqvpi8Q1.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BBfDn-OZ.js";
import "./MainSidebarHeader-OA1jxwrn.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import "./constants-B5_ykVXd.js";
import "./merge-3v6XMMbx.js";
import "./_baseOrderBy-Bz8EJorA.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-BRg29NgG.js";
import "./versions.store-BVx2XP1t.js";
import "./usePageRedirectionHelper-DuYK5OCJ.js";
import "./useBugReporting-fHM77Ezr.js";
import "./canvas.utils-CGiL2NZU.js";
import "./KeyboardShortcutTooltip-DXD1rySw.js";
import "./folders.store-T9S-XSM0.js";
import "./sourceControl.eventBus-_YYuvupL.js";
import "./useKeybindings-C6N2BVbn.js";
import "./useGlobalEntityCreation-s0JQk04d.js";
import "./useSettingsItems-B05oU50J.js";
import { t as AppSidebar_default } from "./AppSidebar-CKKSVoXD.js";
import "./readyToRun.store-DPU0PgiL.js";
import "./resourceCenter.store-BY1_S2fG.js";
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
