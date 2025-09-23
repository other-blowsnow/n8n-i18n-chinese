import LogsPanel from "./LogsPanel-Mh3_BbnF.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-PdEQe4H7.js";
import "./AnimatedSpinner-BPRRXxXt.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-RO45jIwT.js";
import "./core-d1u5dlEA.js";
import "./canvas-B7xaM_ti.js";
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
