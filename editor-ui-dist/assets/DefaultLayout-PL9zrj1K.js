import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Bv7c3f3H.js";
import "./src-NOcRrhMI.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-D2CJwIMh.js";
import "./MainSidebarHeader-fFIHWIM6.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-BfwnXJD0.js";
import "./merge-18y757JO.js";
import "./_baseOrderBy-DYXZYdmk.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CfqGZdKt.js";
import "./versions.store-C5MwUeoH.js";
import "./usePageRedirectionHelper-CsNvv_27.js";
import "./useBugReporting-D2DDuXxG.js";
import "./canvas.utils-BiG2HRKB.js";
import "./folders.store-B-Mq8WaA.js";
import "./KeyboardShortcutTooltip-C7HcpLvs.js";
import "./sourceControl.eventBus-DNYK4W2d.js";
import "./useKeybindings-C6FWDD0y.js";
import "./useGlobalEntityCreation-D8jAwW2c.js";
import "./useSettingsItems-Bp2wX_0A.js";
import { t as AppSidebar_default } from "./AppSidebar-C8d-jY_i.js";
import "./readyToRun.store-CWUEubX3.js";
import "./resourceCenter.store-DVFjTNaX.js";
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
