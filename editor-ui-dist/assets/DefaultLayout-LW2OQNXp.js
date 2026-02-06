import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B4mjoJ1H.js";
import "./src-nB6Mt80o.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-ybjmCzHY.js";
import "./MainSidebarHeader-BtNlipb0.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CDo2A27r.js";
import "./merge-dRKz4Wxq.js";
import "./_baseOrderBy-C9cRRXWU.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BiwutIlT.js";
import "./versions.store-CETkpywf.js";
import "./usePageRedirectionHelper-CEx9jQIe.js";
import "./useBugReporting-l1UuPCF2.js";
import "./canvas.utils-CNSKgUUL.js";
import "./folders.store-Bfmzqgey.js";
import "./KeyboardShortcutTooltip-ByafR9iG.js";
import "./sourceControl.eventBus-CbMBj9O4.js";
import "./useKeybindings-CaA0FIqQ.js";
import "./useGlobalEntityCreation-DO1YI1qJ.js";
import "./useSettingsItems-h2sUB7cP.js";
import { t as AppSidebar_default } from "./AppSidebar-CAulJZ2f.js";
import "./readyToRun.store-pa6gzEl6.js";
import "./resourceCenter.store-B76PwpsI.js";
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
