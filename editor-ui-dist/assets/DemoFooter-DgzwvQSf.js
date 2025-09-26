import LogsPanel from "./LogsPanel-_JNcbCRO.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-B7kv83gZ.js";
import "./AnimatedSpinner-BcnlFI_n.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-BNb5hQjI.js";
import "./core-vroU4myh.js";
import "./canvas-BrVP2mW5.js";
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
