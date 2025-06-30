import LogsPanel from "./LogsPanel-JgS-FObD.js";
import { d as defineComponent, T as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DTf4skV7.js";
import "./RunData-Cg5sOmmj.js";
import "./FileSaver.min-7qv2pHMT.js";
import "./useExecutionHelpers-DI8XxXsK.js";
import "./useKeybindings-P6EWD-xH.js";
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
