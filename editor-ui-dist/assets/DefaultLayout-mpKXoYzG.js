import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DmEDgiBe.js";
import "./src-CTpXJon-.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-Cq1Mo6lE.js";
import "./MainSidebarHeader-6Ax0A7KO.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-DinfAOkS.js";
import "./merge-DYtQhreu.js";
import "./_baseOrderBy-vlX6A-VD.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BDNPykkK.js";
import "./versions.store-CbNtGVqt.js";
import "./usePageRedirectionHelper-CaaJM1Qd.js";
import "./useBugReporting-BJqeJFU_.js";
import "./canvas.utils-DPULF5QP.js";
import "./folders.store-ChxjOYG1.js";
import "./KeyboardShortcutTooltip-Yje-Gyud.js";
import "./sourceControl.eventBus-CDZKMrU6.js";
import "./useKeybindings-BllbO5n3.js";
import "./useGlobalEntityCreation-CvMSBjVI.js";
import "./useSettingsItems-Dl2CYL2s.js";
import { t as AppSidebar_default } from "./AppSidebar-DObr4bgN.js";
import "./readyToRun.store-Cekj_TiB.js";
import "./resourceCenter.store-qp8WRrt8.js";
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
