import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-D5rots3X.js";
import "./src-Bnic0IZ0.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-CzbeKDa-.js";
import "./MainSidebarHeader-1DbbWw4X.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-CvheVn3c.js";
import "./merge-BnWpgTIL.js";
import "./_baseOrderBy-B6NURhS_.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BPQ7Jg24.js";
import "./versions.store-D_4t3Xlu.js";
import "./usePageRedirectionHelper-CVdBgnFq.js";
import "./useBugReporting-CXrIGwfW.js";
import "./canvas.utils-JzY87w_-.js";
import "./KeyboardShortcutTooltip-7zM93SbB.js";
import "./folders.store-CsKrzliH.js";
import "./sourceControl.eventBus-D9q-RKMh.js";
import "./useKeybindings-KTSceTOJ.js";
import "./useGlobalEntityCreation-DVznFRxG.js";
import "./useSettingsItems-DeL71jHT.js";
import { t as AppSidebar_default } from "./AppSidebar-CpJpL0wo.js";
import "./readyToRun.store-DxSiI3rK.js";
import "./resourceCenter.store-CKqJQ4Ei.js";
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
