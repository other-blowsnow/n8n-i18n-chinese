import LogsPanel from "./LogsPanel-BiAjC0j9.js";
import { d as defineComponent, a3 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-C2H_FNri.js";
import "./RunData-D0us8T21.js";
import "./FileSaver.min-CDG497WT.js";
import "./useKeybindings-mZxxz_YW.js";
import "./useExecutionHelpers-5mEl30tQ.js";
import "./ActionDropdown-B9XPYVad.js";
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
