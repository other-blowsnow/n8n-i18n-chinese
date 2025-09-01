import LogsPanel from "./LogsPanel-CNnh0WaQ.js";
import { d as defineComponent, a1 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-C2Ni_W8W.js";
import "./AnimatedSpinner-pLE3Sox1.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-C97E3_IC.js";
import "./core-CVEGyz4d.js";
import "./canvas-Be2E-k2o.js";
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
