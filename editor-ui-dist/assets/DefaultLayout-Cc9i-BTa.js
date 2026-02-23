import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Bq6g7eJk.js";
import "./src-Vlm7Mxf-.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BwYRQvCY.js";
import "./MainSidebarHeader-BuxreDGw.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-RiJkz47J.js";
import "./merge-CLls_idn.js";
import "./_baseOrderBy-BE23B-S3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BghtiK4X.js";
import "./versions.store-C9Ch1_0N.js";
import "./usePageRedirectionHelper-CR50q2Bt.js";
import "./useBugReporting-D-qlUawL.js";
import "./canvas.utils-BI57Gahu.js";
import "./folders.store-BY8Vuq5D.js";
import "./KeyboardShortcutTooltip-BU16z1Q2.js";
import "./sourceControl.eventBus-CPeWfug7.js";
import "./useKeybindings-BrHKmGZk.js";
import "./useGlobalEntityCreation-CVsL3s3m.js";
import "./useSettingsItems-BPnNaxkj.js";
import { t as AppSidebar_default } from "./AppSidebar-0yg_pWGM.js";
import "./readyToRun.store-2wJgp99Y.js";
import "./resourceCenter.store-BUDGMFRL.js";
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
