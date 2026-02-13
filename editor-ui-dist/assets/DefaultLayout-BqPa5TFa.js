import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DKnT_8zF.js";
import "./src-D-UaKLq6.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-DLa4KoOQ.js";
import "./MainSidebarHeader-Cewaat18.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DnWvXsAO.js";
import "./merge-BwFl-s2u.js";
import "./_baseOrderBy-Ct8os4Zc.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-nPI-lV8D.js";
import "./versions.store-BQ_klP44.js";
import "./usePageRedirectionHelper-Dp4blAT7.js";
import "./useBugReporting-CyBlxNHv.js";
import "./canvas.utils-CehoSnOc.js";
import "./folders.store-Bumnlqzv.js";
import "./KeyboardShortcutTooltip-Co_G4rI3.js";
import "./sourceControl.eventBus-Q5FSLPn7.js";
import "./useKeybindings-Li4mNZE6.js";
import "./useGlobalEntityCreation-DeJ0yFpk.js";
import "./useSettingsItems-DQZNYopz.js";
import { t as AppSidebar_default } from "./AppSidebar-BXLd7oBu.js";
import "./readyToRun.store-BOGJFdaJ.js";
import "./resourceCenter.store-DMsh2vcB.js";
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
