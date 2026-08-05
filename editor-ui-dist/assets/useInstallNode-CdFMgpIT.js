import { It as ref, W as nextTick } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { v as i18n } from "./_MapCache-BtQ700Y1.js";
import { t as useToast } from "./useToast-Cy_7sZsy.js";
import { L as useNodeTypesStore, et as removePreviewToken, vt as useCredentialsStore, w as injectWorkflowDocumentStore } from "./workflows.store-Z3P-CUZH.js";
import { t as useSettingsStore } from "./settings.store-CWNcTN8c.js";
import "./settings.store-Dgx0IX_2.js";
import { t as useUsersStore } from "./users.store-dgzxOXHg.js";
import { n as useTelemetry } from "./posthog.store-Dhul6ZJs.js";
import { t as useCommunityNodesStore } from "./communityNodes.store-XdYNtfkc.js";
import { t as useCanvasOperations } from "./useCanvasOperations-j_9PbYOD.js";
//#region src/features/settings/communityNodes/composables/useInstallNode.ts
function useInstallNode() {
	const communityNodesStore = useCommunityNodesStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const userStore = useUsersStore();
	const loading = ref(false);
	const toast = useToast();
	const canvasOperations = useCanvasOperations();
	const telemetry = useTelemetry();
	const settingsStore = useSettingsStore();
	const getNpmVersion = async (key) => {
		const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(key);
		if (communityNodeAttributes) return communityNodeAttributes.npmVersion;
	};
	const installNode = async (props) => {
		if (!userStore.isAdminOrOwner) {
			const error = /* @__PURE__ */ new Error("User is not an owner or admin");
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
			if (props.type === "verified" && !settingsStore.isUnverifiedPackagesEnabled) await communityNodesStore.installPackage(props.packageName, true, await getNpmVersion(props.nodeType));
			else await communityNodesStore.installPackage(props.packageName);
			await Promise.all([
				nodeTypesStore.getNodeTypes(),
				nodeTypesStore.fetchCommunityNodePreviews(),
				credentialsStore.fetchCredentialTypes(true)
			]);
			await nextTick();
			const nodeType = props.nodeType;
			const allNodes = workflowDocumentStore.value.allNodes;
			if (nodeType && allNodes.length) {
				const nodesToUpdate = allNodes.filter((node) => node.type === removePreviewToken(nodeType));
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
//#endregion
export { useInstallNode as t };
