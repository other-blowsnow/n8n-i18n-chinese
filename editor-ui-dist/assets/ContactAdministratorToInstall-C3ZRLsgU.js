import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, c as useCssModule, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { gt as i18n, yt as useI18n } from "./_MapCache-DXQZb51R.js";
import { Bi as N8nText_default, Hi as N8nIcon_default } from "./src-oGL8s0hT.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { It as useTelemetry, at as useCredentialsStore, br as useToast, s as useWorkflowsStore, t as useUsersStore, w as useNodeTypesStore, z as removePreviewToken } from "./users.store-DdXEJExY.js";
import { t as useCommunityNodesStore } from "./communityNodes.store-IlKpFwkg.js";
import { t as useCanvasOperations } from "./useCanvasOperations-Bx0_H793.js";
function useInstallNode() {
	const communityNodesStore = useCommunityNodesStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const workflowsStore = useWorkflowsStore();
	const isOwner = computed(() => useUsersStore().isInstanceOwner);
	const loading = ref(false);
	const toast = useToast();
	const canvasOperations = useCanvasOperations();
	const telemetry = useTelemetry();
	const getNpmVersion = async (key) => {
		const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(key);
		if (communityNodeAttributes) return communityNodeAttributes.npmVersion;
	};
	const installNode = async (props) => {
		if (!isOwner.value) {
			const error = /* @__PURE__ */ new Error("User is not an owner");
			toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
			return {
				success: false,
				error
			};
		}
		if (props.telemetry) telemetry.track("user started cnr package install", {
			input_string: props.packageName,
			has_quick_connect: props.telemetry.hasQuickConnect,
			source: props.telemetry.source
		});
		try {
			loading.value = true;
			if (props.type === "verified") await communityNodesStore.installPackage(props.packageName, true, await getNpmVersion(props.nodeType));
			else await communityNodesStore.installPackage(props.packageName);
			await Promise.all([
				nodeTypesStore.getNodeTypes(),
				nodeTypesStore.fetchCommunityNodePreviews(),
				credentialsStore.fetchCredentialTypes(true)
			]);
			await nextTick();
			const nodeType = props.nodeType;
			if (nodeType && workflowsStore.workflow.nodes?.length) {
				const nodesToUpdate = workflowsStore.workflow.nodes.filter((node) => node.type === removePreviewToken(nodeType));
				canvasOperations.initializeUnknownNodes(nodesToUpdate);
			}
			toast.showMessage({
				title: i18n.baseText("settings.communityNodes.messages.install.success"),
				type: "success"
			});
			return { success: true };
		} catch (error) {
			toast.showError(error, i18n.baseText("settings.communityNodes.messages.install.error"));
			return {
				success: false,
				error
			};
		} finally {
			loading.value = false;
		}
	};
	return {
		installNode,
		loading
	};
}
var _hoisted_1 = { style: { "padding-bottom": "8px" } };
var ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ContactAdministratorToInstall",
	props: { box: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const usersStore = useUsersStore();
		const i18n$1 = useI18n();
		const ownerEmailList = computed(() => usersStore.allUsers.filter((user) => user.role?.includes("owner")).map((user) => user.email));
		const classes = computed(() => ({
			[$style.contactOwnerHint]: true,
			[$style.border]: props.box
		}));
		onMounted(async () => {
			await usersStore.fetchUsers({ filter: { isOwner: true } });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(classes.value) }, [props.box ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				color: "text-light",
				icon: "info",
				size: "large"
			})) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, toDisplayString(unref(i18n$1).baseText("communityNodeInfo.contact.admin")), 1), ownerEmailList.value.length ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(ownerEmailList.value.join(", ")), 1)]),
					_: 1
				})) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default = {
	contactOwnerHint: "_contactOwnerHint_qnrnx_125",
	border: "_border_qnrnx_133"
};
var ContactAdministratorToInstall_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ContactAdministratorToInstall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ContactAdministratorToInstall_vue_vue_type_style_index_0_lang_module_default }]]);
export { useInstallNode as n, ContactAdministratorToInstall_default as t };
