import LogsPanel from "./LogsPanel-DMHN3KCS.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BSyItHSy.js";
import "./RunData-DYp1JF8T.js";
import "./FileSaver.min-CRxlyvFD.js";
import "./useKeybindings-BzP1UTPH.js";
import "./useExecutionHelpers-BHt7NyKe.js";
import "./AnimatedSpinner-7Jbch0--.js";
import "./ActionDropdown-CrODAGHq.js";
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
