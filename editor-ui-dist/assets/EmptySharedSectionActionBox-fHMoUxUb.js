import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Mi as N8nActionBox_default, Rt as useRouter } from "./src-Cq27d_Gp.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
var EmptySharedSectionActionBox_default = /* @__PURE__ */ defineComponent({
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
			return i18n.baseText("workflows.empty.shared-with-me", { interpolate: { resource: i18n.baseText(`generic.${props.resourceType === "workflows" ? "workflow" : "credential"}`).toLowerCase() } });
		});
		const onPersonalLinkClick = (event) => {
			event.preventDefault();
			router.push({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: props.personalProject.id }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nActionBox_default), {
				"data-test-id": "empty-shared-action-box",
				heading: heading.value,
				description: unref(i18n).baseText("workflows.empty.shared-with-me.link"),
				onDescriptionClick: onPersonalLinkClick
			}, null, 8, ["heading", "description"]);
		};
	}
});
export { EmptySharedSectionActionBox_default as t };
