import LogsPanel from "./LogsPanel-3v4tc_xx.js";
import { d as defineComponent, T as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-Y0sphpVt.js";
import "./RunData-DxuRERNF.js";
import "./FileSaver.min-DH2NFi71.js";
import "./useExecutionHelpers-B_Y5s7gr.js";
import "./canvas-Bbk-m1HT.js";
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
