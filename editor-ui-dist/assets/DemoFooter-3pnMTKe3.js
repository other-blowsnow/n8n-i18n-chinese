import LogsPanel from "./LogsPanel-DOflEMKu.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-kB4zsc66.js";
import "./useKeybindings-BciFzdKT.js";
import "./FileSaver.min-DjFS31xC.js";
import "./useExecutionHelpers-CxZY2evP.js";
import "./AnimatedSpinner-DzTsnivN.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-DZtDgLHc.js";
import "./VueMarkdown-DjNv69wW.js";
import "./ActionDropdown-DiOtF2c9.js";
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
