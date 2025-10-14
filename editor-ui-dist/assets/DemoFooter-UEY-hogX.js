import LogsPanel from "./LogsPanel-BM07vrHm.js";
import { d as defineComponent, a2 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CXXH2E8E.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-kGOEeksu.js";
import "./AnimatedSpinner-DTaZw0Sn.js";
import "./core-Cvnpanzb.js";
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
