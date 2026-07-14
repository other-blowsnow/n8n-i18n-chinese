import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { n as hasPermission } from "./users.store-C8AeNcFl.js";
//#region src/features/shared/tags/useTagPermissions.ts
function useTagPermissions() {
	const canList = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:list" } }));
	const canCreate = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:create" } }));
	const canUpdate = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:update" } }));
	const canDelete = computed(() => hasPermission(["rbac"], { rbac: { scope: "tag:delete" } }));
	return {
		canList,
		canCreate,
		canUpdate,
		canDelete,
		canManage: computed(() => canCreate.value || canUpdate.value || canDelete.value)
	};
}
function useAnnotationTagPermissions() {
	const canCreate = computed(() => hasPermission(["rbac"], { rbac: { scope: "annotationTag:create" } }));
	const canUpdate = computed(() => hasPermission(["rbac"], { rbac: { scope: "annotationTag:update" } }));
	const canDelete = computed(() => hasPermission(["rbac"], { rbac: { scope: "annotationTag:delete" } }));
	return {
		canCreate,
		canUpdate,
		canDelete,
		canManage: computed(() => canCreate.value || canUpdate.value || canDelete.value)
	};
}
//#endregion
export { useTagPermissions as n, useAnnotationTagPermissions as t };
