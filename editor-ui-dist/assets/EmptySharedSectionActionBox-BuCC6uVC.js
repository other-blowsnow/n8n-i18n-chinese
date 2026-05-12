import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-p4E5FBDC.js";
import { ut as useRouter, zi as N8nActionBox_default } from "./src-DJmr1lxY.js";
import { zr as VIEWS } from "./constants-DKn5DlOG.js";
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
