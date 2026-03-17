import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Dm0zgpAe.js";
import "./src-DpXAQiaT.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-KDduniYy.js";
import "./MainSidebarHeader-uW8HG6Py.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import "./constants-BFYSGQP4.js";
import "./merge-B0uVzL8N.js";
import "./_baseOrderBy-CjnCEHwl.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DBvy4NsP.js";
import "./versions.store-BeRcylj7.js";
import "./usePageRedirectionHelper-DO-vNQ1E.js";
import "./useBugReporting-B0XkVPOl.js";
import "./canvas.utils-BpFkmltQ.js";
import "./KeyboardShortcutTooltip-BHivDLbD.js";
import "./folders.store-C7zCXkJZ.js";
import "./sourceControl.eventBus-Chw85oge.js";
import "./useKeybindings-DCGPJ1Pf.js";
import "./useGlobalEntityCreation-BdcGoiW2.js";
import "./useSettingsItems-lXYQ2mt4.js";
import { t as AppSidebar_default } from "./AppSidebar-CibN5aoM.js";
import "./readyToRun.store-BVDxATOj.js";
import "./resourceCenter.store-CnKzkJU0.js";
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
