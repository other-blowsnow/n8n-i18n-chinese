import LogsPanel from "./LogsPanel-BNJ8eXbq.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-JPX5MN40.js";
import "./RunData-CTMKOIK4.js";
import "./FileSaver.min-Dpop3C77.js";
import "./useKeybindings-B22tPGvd.js";
import "./useExecutionHelpers-CDrMKddm.js";
import "./AnimatedSpinner-Bqm7gtqD.js";
import "./ActionDropdown-CjyznWMv.js";
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
