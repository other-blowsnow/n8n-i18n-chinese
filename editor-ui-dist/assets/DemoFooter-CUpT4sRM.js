import LogsPanel from "./LogsPanel-zRIW3PaW.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-QKxfdw-t.js";
import "./AnimatedSpinner-E5vwI3Sn.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-TELpKDfR.js";
import "./core-B4STuEkN.js";
import "./canvas-DKtjcKhQ.js";
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
