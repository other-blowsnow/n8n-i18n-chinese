import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { it as useI18n } from "./core-x10Anb9r.js";
import { Ca as N8nText_default, Ta as N8nIcon_default, lt as useRouter, wa as N8nButton_default, xa as N8nHeading_default } from "./src-CSSRFm72.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useUsersStore } from "./users.store-V46mYCxM.js";
import { Vr as AGENT_BUILDER_SETTINGS_VIEW } from "./constants-B2-iseoM.js";
import { t as useRootStore } from "./useRootStore-CX_m119O.js";
import { n as getAgentBuilderStatus } from "./useAgentBuilderSettingsApi-oLdons6l.js";
//#region src/features/agents/composables/useAgentBuilderStatus.ts
function useAgentBuilderStatus() {
	const rootStore = useRootStore();
	const isBuilderConfigured = ref(false);
	async function fetchStatus() {
		isBuilderConfigured.value = (await getAgentBuilderStatus(rootStore.restApiContext)).isConfigured;
	}
	return {
		isBuilderConfigured,
		fetchStatus
	};
}
//#endregion
//#region src/features/agents/components/AgentBuilderUnconfiguredEmptyState.vue?vue&type=script&setup=true&lang.ts
var AgentBuilderUnconfiguredEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentBuilderUnconfiguredEmptyState",
	setup(__props) {
		const router = useRouter();
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const isAdmin = computed(() => usersStore.isInstanceOwner);
		function onConfigure() {
			router.push({ name: AGENT_BUILDER_SETTINGS_VIEW });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "agent-builder-unconfigured"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrap) }, [createVNode(unref(N8nIcon_default), {
					icon: "settings",
					size: 32
				})], 2),
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.unconfigured.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-light",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(isAdmin.value ? unref(i18n).baseText("agents.builder.unconfigured.description.admin") : unref(i18n).baseText("agents.builder.unconfigured.description.nonAdmin")), 1)]),
					_: 1
				}, 8, ["class"]),
				isAdmin.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					type: "primary",
					size: "medium",
					onClick: onConfigure
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.unconfigured.cta")), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentBuilderUnconfiguredEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1kj6e_125",
	iconWrap: "_iconWrap_1kj6e_136",
	description: "_description_1kj6e_148"
};
var AgentBuilderUnconfiguredEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentBuilderUnconfiguredEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentBuilderUnconfiguredEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useAgentBuilderStatus as n, AgentBuilderUnconfiguredEmptyState_default as t };
