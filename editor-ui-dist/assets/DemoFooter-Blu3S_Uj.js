import LogsPanel from "./LogsPanel-BpxRyP73.js";
import { d as defineComponent, P as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DnG4wsEo.js";
import "./RunData-Br_oWX1N.js";
import "./FileSaver.min-DpU3wwO5.js";
import "./useExecutionHelpers-nmyd_MhP.js";
import "./canvas-B9i9jQUz.js";
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
