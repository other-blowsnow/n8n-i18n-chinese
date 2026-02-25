import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-D28pXLlm.js";
import "./src-BPnX41kb.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Dzwfthm5.js";
import "./MainSidebarHeader-DXz5LmH-.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DJi2tANw.js";
import "./merge-PRabpGkI.js";
import "./_baseOrderBy-DIP3iRVc.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-C7bvlNGQ.js";
import "./versions.store-DdIMKNUB.js";
import "./usePageRedirectionHelper-tqSFbPdj.js";
import "./useBugReporting-ClL6wQNI.js";
import "./canvas.utils-C0nDCBMd.js";
import "./folders.store-BtYwe6Tn.js";
import "./KeyboardShortcutTooltip-CO2z5CTh.js";
import "./sourceControl.eventBus-Dn6c9-mJ.js";
import "./useKeybindings-zRfAe5jr.js";
import "./useGlobalEntityCreation-CUFi-jUA.js";
import "./useSettingsItems-BIZpVl-P.js";
import { t as AppSidebar_default } from "./AppSidebar-BjlIKMVD.js";
import "./readyToRun.store-B0tsjGrt.js";
import "./resourceCenter.store-BfKH9xCx.js";
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
