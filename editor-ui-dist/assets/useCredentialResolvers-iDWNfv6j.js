import { It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { hr as useToast, ic as deleteCredentialResolver, oc as getCredentialResolverTypes, r as useUIStore, sc as getCredentialResolvers, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { hs as MODAL_CONFIRM, rs as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY } from "./constants-Cyrg9Nbl.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
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
