import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CngOnFvY.js";
import { gt as N8nLink_default, to as N8nText_default, wt as useRouter } from "./src-CtyOKmD-.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-ZuCTOGWe.js";
import { t as useToast } from "./useToast-COvPNq4S.js";
import { Ei as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY, hi as VIEWS } from "./constants-CSBjw1Ht.js";
import { t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { fn as getCredentialResolverTypes, mn as getCredentialResolvers, pn as getCredentialResolverWorkflows, un as deleteCredentialResolver } from "./settings.store-C5bX9q6f.js";
import { f as useUIStore } from "./users.store-C2APvywU.js";
//#region src/features/resolvers/components/ResolverDeleteConfirmMessage.vue?vue&type=script&setup=true&lang.ts
var MAX_DISPLAYED_WORKFLOWS = 5;
var ResolverDeleteConfirmMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResolverDeleteConfirmMessage",
	props: {
		resolverName: {},
		affectedWorkflows: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const displayed = computed(() => props.affectedWorkflows.slice(0, MAX_DISPLAYED_WORKFLOWS));
		const remaining = computed(() => props.affectedWorkflows.length - displayed.value.length);
		const messageKey = computed(() => props.affectedWorkflows.length > 0 ? "credentialResolverEdit.confirmMessage.deleteResolver.messageWithWorkflows" : "credentialResolverEdit.confirmMessage.deleteResolver.message");
		const messageParts = computed(() => {
			const [before, after] = i18n.baseText(messageKey.value, { interpolate: { savedResolverName: "{{RESOLVER_NAME}}" } }).split("{{RESOLVER_NAME}}");
			return {
				before,
				after
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(messageParts.value.before), 1),
						createVNode(unref(N8nText_default), {
							bold: "",
							tag: "span"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.resolverName), 1)]),
							_: 1
						}),
						createTextVNode(toDisplayString(messageParts.value.after), 1)
					]),
					_: 1
				}),
				__props.affectedWorkflows.length > 0 ? (openBlock(), createElementBlock("ul", {
					key: 0,
					class: normalizeClass(_ctx.$style.workflowList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayed.value, (workflow) => {
					return openBlock(), createElementBlock("li", {
						key: workflow.id,
						class: normalizeClass(_ctx.$style.workflowItem)
					}, [createVNode(unref(N8nLink_default), {
						href: unref(router).resolve({
							name: unref(VIEWS).WORKFLOW,
							params: { workflowId: workflow.id }
						}).href,
						"new-window": ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(workflow.name), 1)]),
						_: 2
					}, 1032, ["href"])], 2);
				}), 128))], 2)) : createCommentVNode("", true),
				remaining.value > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("credentialResolverEdit.confirmMessage.deleteResolver.andMore", { interpolate: { count: String(remaining.value) } })), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ResolverDeleteConfirmMessage_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_celqs_125",
	workflowList: "_workflowList_celqs_131",
	workflowItem: "_workflowItem_celqs_137"
};
var ResolverDeleteConfirmMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResolverDeleteConfirmMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResolverDeleteConfirmMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/resolvers/composables/useCredentialResolvers.ts
function useCredentialResolvers() {
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const message = useMessage();
	const toast = useToast();
	const i18n = useI18n();
	const resolvers = ref([]);
	const resolverTypes = ref([]);
	const isLoading = ref(false);
	const isDeleting = ref(false);
	const fetchResolvers = async (options = {}) => {
		try {
			isLoading.value = true;
			resolvers.value = await getCredentialResolvers(rootStore.restApiContext, options);
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("workflowSettings.showError.fetchSettings.title"));
			return false;
		} finally {
			isLoading.value = false;
		}
	};
	const fetchResolverTypes = async () => {
		try {
			resolverTypes.value = await getCredentialResolverTypes(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialResolverEdit.error.loadTypes"));
		}
	};
	const confirmAndDeleteResolver = async (resolver) => {
		let affectedWorkflows = [];
		try {
			affectedWorkflows = await getCredentialResolverWorkflows(rootStore.restApiContext, resolver.id);
		} catch {}
		const confirmMessage = h(ResolverDeleteConfirmMessage_default, {
			resolverName: resolver.name,
			affectedWorkflows
		});
		if (await message.confirm(confirmMessage, i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.headline"), {
			confirmButtonText: i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.confirmButtonText"),
			customClass: "el-message-box--destructive",
			showClose: true
		}) !== "confirm") return false;
		try {
			isDeleting.value = true;
			await deleteCredentialResolver(rootStore.restApiContext, resolver.id);
			toast.showMessage({
				title: i18n.baseText("credentialResolverEdit.deleteSuccess.title"),
				type: "success"
			});
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialResolverEdit.error.delete"));
			return false;
		} finally {
			isDeleting.value = false;
		}
	};
	const refreshResolvers = async () => await fetchResolvers();
	const openCreateModal = (callbacks) => {
		uiStore.openModalWithData({
			name: CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			data: { onSave: callbacks?.onSave ?? refreshResolvers }
		});
	};
	const openEditModal = (resolverId, callbacks) => {
		uiStore.openModalWithData({
			name: CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			data: {
				resolverId,
				onSave: callbacks?.onSave ?? refreshResolvers,
				onDelete: callbacks?.onDelete ?? refreshResolvers
			}
		});
	};
	return {
		resolvers,
		resolverTypes,
		isLoading,
		isDeleting,
		fetchResolvers,
		fetchResolverTypes,
		deleteResolver: confirmAndDeleteResolver,
		openCreateModal,
		openEditModal
	};
}
//#endregion
export { useCredentialResolvers as t };
