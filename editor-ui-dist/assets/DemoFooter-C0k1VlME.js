import LogsPanel from "./LogsPanel-BlkEz8UN.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DA7NT8ZQ.js";
import "./AnimatedSpinner-CvJv8sdD.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-C9TY8otn.js";
import "./core-DlZKkiSI.js";
import "./canvas-QDC8195r.js";
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
