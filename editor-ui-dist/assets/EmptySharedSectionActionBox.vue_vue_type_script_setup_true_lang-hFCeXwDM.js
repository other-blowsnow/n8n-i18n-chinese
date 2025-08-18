import { d as defineComponent, b as useRouter, x as computed, c as useI18n, e as createBlock, g as openBlock, dY as N8nActionBox, l as unref, V as VIEWS } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmptySharedSectionActionBox",
  props: {
    personalProject: {},
    resourceType: { default: "workflows" }
  },
  setup(__props) {
    const i18n = useI18n();
    const router = useRouter();
    const props = __props;
    const heading = computed(() => {
      return i18n.baseText("workflows.empty.shared-with-me", {
        interpolate: {
          resource: i18n.baseText(`generic.${props.resourceType === "workflows" ? "workflow" : "credential"}`).toLowerCase()
        }
      });
    });
    const onPersonalLinkClick = (event) => {
      event.preventDefault();
      void router.push({
        name: VIEWS.PROJECTS_WORKFLOWS,
        params: { projectId: props.personalProject.id }
      });
    };
    return (_ctx, _cache) => {
      const _component_n8n_action_box = N8nActionBox;
      return openBlock(), createBlock(_component_n8n_action_box, {
        "data-test-id": "empty-shared-action-box",
        heading: heading.value,
        description: unref(i18n).baseText("workflows.empty.shared-with-me.link"),
        onDescriptionClick: onPersonalLinkClick
      }, null, 8, ["heading", "description"]);
    };
  }
});
export {
  _sfc_main as _
};
