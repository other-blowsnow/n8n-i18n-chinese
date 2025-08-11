import LogsPanel from "./LogsPanel-C9a86pt5.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-MSgOD_Ak.js";
import "./AnimatedSpinner-9dKcP4Cx.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-CWMobUt_.js";
import "./VueMarkdown-gE4DtYZn.js";
import "./canvas-Tns-q40h.js";
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
