import LogsPanel from "./LogsPanel-CgB6oM_q.js";
import { d as defineComponent, a9 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BsWH3eYA.js";
import "./AnimatedSpinner-Be6NErX-.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-C_ibue-c.js";
import "./core-DPtr6nyP.js";
import "./canvas-CNrbb5_U.js";
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
