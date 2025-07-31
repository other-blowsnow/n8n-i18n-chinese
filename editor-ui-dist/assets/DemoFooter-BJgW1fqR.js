import LogsPanel from "./LogsPanel-CWMqsjZv.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DS4Zr0kd.js";
import "./useKeybindings-BZeJfwfO.js";
import "./FileSaver.min-DfFwvVY2.js";
import "./useExecutionHelpers-DcooxAat.js";
import "./AnimatedSpinner-Bv_sDFmC.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-IHcRRxrB.js";
import "./VueMarkdown-CWQt9mAU.js";
import "./ActionDropdown-B0KAGMZ8.js";
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
