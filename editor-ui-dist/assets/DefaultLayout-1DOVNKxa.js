import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CpHp4FW8.js";
import "./src-zFYS4ILv.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-_kipJHtz.js";
import "./MainSidebarHeader-BD4MvnON.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CZQU-a3W.js";
import "./merge-DSIHXZgh.js";
import "./_baseOrderBy-DqfNsAfh.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CWQqb9G0.js";
import "./versions.store-D4eyfbmW.js";
import "./usePageRedirectionHelper-BFUIxYoZ.js";
import "./useBugReporting-gMvuHlho.js";
import "./canvas.utils-DydQZk_m.js";
import "./folders.store-xsoNECNZ.js";
import "./KeyboardShortcutTooltip-CTzi064H.js";
import "./sourceControl.eventBus-fkqEBr_R.js";
import "./useKeybindings-LAI81F8t.js";
import "./useGlobalEntityCreation-QDjoZZnb.js";
import "./useSettingsItems-D4EvPg6h.js";
import { t as AppSidebar_default } from "./AppSidebar-C7oCrPKs.js";
import "./readyToRun.store-DNvcTNYF.js";
import "./resourceCenter.store-qHYGJP8J.js";
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
