import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DxtWl4Bj.js";
import "./src-r-l70KdD.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BVdi4rdu.js";
import "./MainSidebarHeader-BJ6naaGl.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import "./constants-O8ayp6Ax.js";
import "./merge-D1NMaQVD.js";
import "./_baseOrderBy-kQRaOW6n.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B05cbbQh.js";
import "./versions.store-C1Zk5ElX.js";
import "./usePageRedirectionHelper-DJqfOGCC.js";
import "./useBugReporting-DDgYRO6S.js";
import "./canvas.utils-CEtvFiQV.js";
import "./KeyboardShortcutTooltip-xZG9cYH5.js";
import "./folders.store-D8OrtvcI.js";
import "./sourceControl.eventBus-7XOAnvU_.js";
import "./useKeybindings-C4RM686u.js";
import "./useGlobalEntityCreation-D1lfz5jO.js";
import "./useSettingsItems-CegU3oPm.js";
import { t as AppSidebar_default } from "./AppSidebar-DNh9Q24k.js";
import "./readyToRun.store-BnxwBlCn.js";
import "./resourceCenter.store-viG-4VL6.js";
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
