import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-aYnXQJFG.js";
import "./src-Dk7k3IeM.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-vVKd46Ls.js";
import "./MainSidebarHeader-Daed8HXH.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CKBJKVau.js";
import "./merge-DszHxbC0.js";
import "./_baseOrderBy-DAciTS0t.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CjFlk2i6.js";
import "./versions.store-CnCu6UaL.js";
import "./usePageRedirectionHelper-DNtcgJ68.js";
import "./useBugReporting-BJ7ycwhz.js";
import "./canvas.utils-JuzCJB3j.js";
import "./folders.store-XQQufkq7.js";
import "./KeyboardShortcutTooltip-C9r-UqRj.js";
import "./sourceControl.eventBus-CfmafzdD.js";
import "./useKeybindings-CCBwXi3k.js";
import "./useGlobalEntityCreation-CsSGz8Eq.js";
import "./useSettingsItems-CJkHAPA_.js";
import { t as AppSidebar_default } from "./AppSidebar-DuQ9VT5n.js";
import "./readyToRun.store-B4rFYr0B.js";
import "./resourceCenter.store-fB_1VPI3.js";
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
