import LogsPanel from "./LogsPanel-BznA49XD.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-Dq4vLtnx.js";
import "./RunData-wWz7eSAo.js";
import "./FileSaver.min-4ZIZ5nCN.js";
import "./useKeybindings-CESDyd99.js";
import "./useExecutionHelpers-Cckh6FHi.js";
import "./AnimatedSpinner-MmbqYo9P.js";
import "./ActionDropdown-CojQsnsY.js";
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
