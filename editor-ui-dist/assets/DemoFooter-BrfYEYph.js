import LogsPanel from "./LogsPanel-CDNjTN8f.js";
import { d as defineComponent, a9 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CfkULtaE.js";
import "./AnimatedSpinner-Bg5pGiYZ.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-DSwriCCX.js";
import "./core-CMVhp5SQ.js";
import "./canvas-BbgiH0mS.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
