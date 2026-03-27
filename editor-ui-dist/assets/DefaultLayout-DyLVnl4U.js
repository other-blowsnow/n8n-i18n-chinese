import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-65UNw25j.js";
import "./src-BushEFrD.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-buY8IFeq.js";
import "./MainSidebarHeader-BOk8AeOE.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-DgFYHRsp.js";
import "./merge-BTwzEvFa.js";
import "./_baseOrderBy-C-vNG9pj.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DMBVth9W.js";
import "./versions.store-evX19U2A.js";
import "./usePageRedirectionHelper-COwsK9BF.js";
import "./useBugReporting-wgSLml2m.js";
import "./canvas.utils-DMO0Z6xe.js";
import "./KeyboardShortcutTooltip-_xCpLz9K.js";
import "./folders.store-DJ4CCWGb.js";
import "./sourceControl.eventBus-DjX7c6A0.js";
import "./useKeybindings-C9INeoZo.js";
import "./useGlobalEntityCreation-CCdzvRrg.js";
import "./useSettingsItems-D6uX2WFZ.js";
import { t as AppSidebar_default } from "./AppSidebar-DNQhCAhl.js";
import "./readyToRun.store-CnTWEkLy.js";
import "./resourceCenter.store-DsiN38r4.js";
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
