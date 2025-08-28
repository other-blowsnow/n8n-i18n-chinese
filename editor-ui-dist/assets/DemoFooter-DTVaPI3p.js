import LogsPanel from "./LogsPanel-oQWGgNsE.js";
import { d as defineComponent, a9 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-Hf-41Ny8.js";
import "./AnimatedSpinner-cKMUuxvr.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-CRbE_Mbt.js";
import "./core-BotYlM2T.js";
import "./canvas-BuM6URCF.js";
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
