import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useI18n } from "./src-DXwO88M2.js";
import { Ri as N8nActionBox_default, lt as useRouter } from "./src-pyi3rpL8.js";
import { ii as VIEWS } from "./constants-D4XflMq_.js";
//#endregion
//#region src/features/core/folders/components/EmptySharedSectionActionBox.vue
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
//#endregion
export { EmptySharedSectionActionBox_default as t };
