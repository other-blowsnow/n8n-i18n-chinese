import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-FALBSzR9.js";
import "./src-DSdtxpS-.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DjIPN_Jo.js";
import "./MainSidebarHeader-BGFnTuDp.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Du1sDgQK.js";
import "./merge-m4Q4akAk.js";
import "./_baseOrderBy-DTSNQHzv.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DnInf_Mb.js";
import "./versions.store-Clq11YDT.js";
import "./usePageRedirectionHelper-Da0Q0qMi.js";
import "./useBugReporting-DY9Xi2OS.js";
import "./canvas.utils-C7R5h5xc.js";
import "./folders.store-Cr6j-iI3.js";
import "./KeyboardShortcutTooltip-QlYiYWRT.js";
import "./sourceControl.eventBus-C7rkgmmr.js";
import "./useKeybindings-U6uc6f1q.js";
import "./useGlobalEntityCreation-BZ02LmEO.js";
import "./useSettingsItems-BINjSINE.js";
import { t as AppSidebar_default } from "./AppSidebar-jpfmqR_T.js";
import "./readyToRun.store-C2a7tKLl.js";
import "./resourceCenter.store-DR3z-N1P.js";
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
