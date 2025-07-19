import LogsPanel from "./LogsPanel-D1u0isGe.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-lYG7K1rT.js";
import "./RunData-BcA75T44.js";
import "./FileSaver.min-C8MjQQT2.js";
import "./useKeybindings-BGqybTI7.js";
import "./useExecutionHelpers-CofSIer0.js";
import "./AnimatedSpinner-Bxvuwia_.js";
import "./ActionDropdown-Bp9eVY3g.js";
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
