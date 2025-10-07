import LogsPanel from "./LogsPanel-BcZCLSVG.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BXVCKjk6.js";
import "./AnimatedSpinner-CD5NSF0-.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-BsM2-pdi.js";
import "./core-CFN4h_jc.js";
import "./canvas-CvrPjlVJ.js";
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
