import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-8-eqnC2S.js";
import "./src-Cq27d_Gp.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-qBZsmf9-.js";
import "./MainSidebarHeader-BSZWPhPI.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import "./usePageRedirectionHelper-DjPq0E7w.js";
import "./useBugReporting-DUcJ8bi0.js";
import "./canvas.utils-BvLPDYAs.js";
import "./folders.store-B29vIVJe.js";
import "./KeyboardShortcutTooltip-Dvjl2Kjb.js";
import "./sourceControl.eventBus--cdNSnZo.js";
import "./useKeybindings-CsWMJtRb.js";
import "./useGlobalEntityCreation-qhjVTCDb.js";
import "./useSettingsItems-Do1BDoxp.js";
import { t as AppSidebar_default } from "./AppSidebar-D2jnWUvB.js";
import "./readyToRun.store-jCsh7z8e.js";
import "./resourceCenter.store-AYMcYt9P.js";
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
