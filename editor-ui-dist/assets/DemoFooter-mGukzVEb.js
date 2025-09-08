import LogsPanel from "./LogsPanel-CUkin1GT.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DfVt-3V5.js";
import "./AnimatedSpinner-Ccw1hPrQ.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-ByU7s_9Z.js";
import "./core-SSiN-ruc.js";
import "./canvas-DFyzJchU.js";
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
