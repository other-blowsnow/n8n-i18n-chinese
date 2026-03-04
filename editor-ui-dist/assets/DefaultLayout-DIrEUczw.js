import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DXQZb51R.js";
import "./src-oGL8s0hT.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DdXEJExY.js";
import "./MainSidebarHeader-DIw9wjRW.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-D6tCZPKD.js";
import "./merge-CgbZmS72.js";
import "./_baseOrderBy-CJfk527n.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BBTAgZ3l.js";
import "./versions.store-BSvvFnEg.js";
import "./usePageRedirectionHelper-87shxc1K.js";
import "./useBugReporting-DpHd6b6q.js";
import "./canvas.utils-qLqfzoX-.js";
import "./folders.store-hUU8r3mD.js";
import "./KeyboardShortcutTooltip-DQue64WU.js";
import "./sourceControl.eventBus-CDnJ1oeE.js";
import "./useKeybindings-BpJ3wPd8.js";
import "./useGlobalEntityCreation-BLQHACNM.js";
import "./useSettingsItems-DHrTjwaH.js";
import { t as AppSidebar_default } from "./AppSidebar-B-ZfjQHc.js";
import "./readyToRun.store-JskdG76C.js";
import "./resourceCenter.store-CyiqVjpn.js";
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
