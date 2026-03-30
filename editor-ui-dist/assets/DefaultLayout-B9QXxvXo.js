import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-14clFqm4.js";
import "./src-jV4M2fcN.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DNsxOyr9.js";
import "./MainSidebarHeader-3E9ihGdk.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import "./versions.store-Cwz3Wqlv.js";
import "./usePageRedirectionHelper-H79gLsnv.js";
import "./useBugReporting-BHKwyaP7.js";
import "./canvas.utils-DpVKjWUr.js";
import "./KeyboardShortcutTooltip-Oymux7s3.js";
import "./folders.store-qDED_OaN.js";
import "./sourceControl.eventBus-CmKct8Tn.js";
import "./useKeybindings-CN21vXYI.js";
import "./useGlobalEntityCreation-Dmlnzose.js";
import "./useSettingsItems-UnPhN16u.js";
import { t as AppSidebar_default } from "./AppSidebar-CwVTUTk_.js";
import "./readyToRun.store-9nF_UtFq.js";
import "./resourceCenter.store-CU9IeZp8.js";
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
