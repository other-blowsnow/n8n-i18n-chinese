import { It as ref } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CXkqqBNu.js";
import { cc as deleteCredentialResolver, dc as getCredentialResolvers, m as useMessage, oa as useUIStore, uc as getCredentialResolverTypes, v as useToast } from "./builder.store-6Ubaqfxq.js";
import { Wo as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY, rs as MODAL_CONFIRM } from "./constants-eN0e8XyV.js";
import { r as useRootStore } from "./_baseOrderBy-Ca3_tgno.js";
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
	const fetchResolvers = async () => {
		try {
			isLoading.value = true;
			resolvers.value = await getCredentialResolvers(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("workflowSettings.showError.fetchSettings.title"));
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
		if (await message.confirm(i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.message", { interpolate: { savedResolverName: resolver.name } }), i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.headline"), { confirmButtonText: i18n.baseText("credentialResolverEdit.confirmMessage.deleteResolver.confirmButtonText") }) !== "confirm") return false;
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
	const openCreateModal = (callbacks) => {
		uiStore.openModalWithData({
			name: CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			data: { onSave: callbacks?.onSave ?? fetchResolvers }
		});
	};
	const openEditModal = (resolverId, callbacks) => {
		uiStore.openModalWithData({
			name: CREDENTIAL_RESOLVER_EDIT_MODAL_KEY,
			data: {
				resolverId,
				onSave: callbacks?.onSave ?? fetchResolvers,
				onDelete: callbacks?.onDelete ?? fetchResolvers
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
export { useCredentialResolvers as t };
