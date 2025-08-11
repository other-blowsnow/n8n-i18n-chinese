import LogsPanel from "./LogsPanel-BJ7Fke2T.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-Dvr44uBp.js";
import "./AnimatedSpinner-CpuEGZdX.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-BJvdUPZp.js";
import "./VueMarkdown-C7d0-tIm.js";
import "./canvas-D1ZaFKuw.js";
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
