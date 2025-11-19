import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { An as addDataTableColumnApi, Bn as updateDataTableApi, Bo as useSettingsStore, En as useProjectsStore, Fn as fetchDataTableGlobalLimitInBytes, In as fetchDataTablesApi, Ln as getDataTableRowsApi, Mn as deleteDataTableApi, Nn as deleteDataTableColumnApi, Pn as deleteDataTableRowsApi, Qs as useRootStore, Rn as insertDataTableRowApi, Vn as updateDataTableRowsApi, jn as createDataTableApi, xc as defineStore, zn as moveDataTableColumnApi } from "./useTelemetry-C2EhNQhN.js";
import { Gn as DATA_TABLE_STORE, _r as getResourcePermissions } from "./constants-C_oOJnqT.js";
const reorderItem = (items, oldIndex, newIndex) => {
	return items.map((item) => {
		if (item.index === oldIndex) return {
			...item,
			index: newIndex
		};
		if (oldIndex < newIndex && item.index > oldIndex && item.index <= newIndex) return {
			...item,
			index: item.index - 1
		};
		if (oldIndex > newIndex && item.index >= newIndex && item.index < oldIndex) return {
			...item,
			index: item.index + 1
		};
		return item;
	});
};
const useDataTableStore = defineStore(DATA_TABLE_STORE, () => {
	const rootStore = useRootStore();
	const projectStore = useProjectsStore();
	const settingsStore = useSettingsStore();
	const dataTables = ref([]);
	const totalCount = ref(0);
	const dataTableSize = ref(0);
	const dataTableSizeLimitState = ref("ok");
	const dataTableTableSizes = ref({});
	const projectPermissions = computed(() => getResourcePermissions(projectStore.currentProject?.scopes ?? projectStore.personalProject?.scopes));
	const formatSize = (sizeBytes) => {
		return Number((sizeBytes / 1024 / 1024).toFixed(2));
	};
	const maxSizeMB = computed(() => Math.floor(settingsStore.settings?.dataTables?.maxSize / 1024 / 1024));
	const dataTableSizes = computed(() => {
		const formattedSizes = {};
		for (const [dataTableId, sizeBytes] of Object.entries(dataTableTableSizes.value)) formattedSizes[dataTableId] = formatSize(sizeBytes);
		return formattedSizes;
	});
	const fetchDataTables = async (projectId, page, pageSize) => {
		const response = await fetchDataTablesApi(rootStore.restApiContext, projectId, {
			skip: (page - 1) * pageSize,
			take: pageSize
		});
		dataTables.value = response.data;
		totalCount.value = response.count;
	};
	const createDataTable = async (name, projectId) => {
		const newTable = await createDataTableApi(rootStore.restApiContext, name, projectId);
		if (!newTable.project && projectId) {
			const project = await projectStore.fetchProject(projectId);
			if (project) newTable.project = project;
		}
		dataTables.value.push(newTable);
		totalCount.value += 1;
		return newTable;
	};
	const deleteDataTable = async (dataTableId, projectId) => {
		const deleted = await deleteDataTableApi(rootStore.restApiContext, dataTableId, projectId);
		if (deleted) {
			dataTables.value = dataTables.value.filter((dataTable) => dataTable.id !== dataTableId);
			totalCount.value -= 1;
		}
		return deleted;
	};
	const deleteDataTableColumn = async (dataTableId, projectId, columnId) => {
		const deleted = await deleteDataTableColumnApi(rootStore.restApiContext, dataTableId, projectId, columnId);
		if (deleted) {
			const index = dataTables.value.findIndex((dataTable) => dataTable.id === dataTableId);
			if (index !== -1) dataTables.value[index].columns = dataTables.value[index].columns.filter((column) => column.id !== columnId);
		}
		return deleted;
	};
	const updateDataTable = async (dataTableId, name, projectId) => {
		const updated = await updateDataTableApi(rootStore.restApiContext, dataTableId, name, projectId);
		if (updated) {
			const index = dataTables.value.findIndex((table) => table.id === dataTableId);
			if (index !== -1) dataTables.value[index] = {
				...dataTables.value[index],
				name
			};
		}
		return updated;
	};
	const fetchDataTableDetails = async (dataTableId, projectId) => {
		const response = await fetchDataTablesApi(rootStore.restApiContext, projectId, void 0, {
			projectId,
			id: dataTableId
		});
		if (response.data.length > 0) {
			dataTables.value = response.data;
			return response.data[0];
		}
		return null;
	};
	const fetchOrFindDataTable = async (dataTableId, projectId) => {
		const existingTable = dataTables.value.find((table) => table.id === dataTableId);
		if (existingTable) return existingTable;
		return await fetchDataTableDetails(dataTableId, projectId);
	};
	const addDataTableColumn = async (dataTableId, projectId, column) => {
		const newColumn = await addDataTableColumnApi(rootStore.restApiContext, dataTableId, projectId, column);
		if (newColumn) {
			const index = dataTables.value.findIndex((table) => table.id === dataTableId);
			if (index !== -1) dataTables.value[index].columns.push(newColumn);
		}
		return newColumn;
	};
	const moveDataTableColumn = async (dataTableId, projectId, columnId, targetIndex) => {
		const moved = await moveDataTableColumnApi(rootStore.restApiContext, dataTableId, projectId, columnId, targetIndex);
		if (moved) {
			const dsIndex = dataTables.value.findIndex((table) => table.id === dataTableId);
			const fromIndex = dataTables.value[dsIndex].columns.findIndex((col) => col.id === columnId);
			dataTables.value[dsIndex].columns = reorderItem(dataTables.value[dsIndex].columns, fromIndex, targetIndex);
		}
		return moved;
	};
	const fetchDataTableContent = async (dataTableId, projectId, page, pageSize, sortBy, filter) => {
		return await getDataTableRowsApi(rootStore.restApiContext, dataTableId, projectId, {
			skip: (page - 1) * pageSize,
			take: pageSize,
			sortBy,
			filter
		});
	};
	const insertEmptyRow = async (dataTableId, projectId) => {
		return (await insertDataTableRowApi(rootStore.restApiContext, dataTableId, {}, projectId))[0];
	};
	const updateRow = async (dataTableId, projectId, rowId, rowData) => {
		return await updateDataTableRowsApi(rootStore.restApiContext, dataTableId, rowId, rowData, projectId);
	};
	const deleteRows = async (dataTableId, projectId, rowIds) => {
		return await deleteDataTableRowsApi(rootStore.restApiContext, dataTableId, rowIds, projectId);
	};
	const fetchDataTableSize = async () => {
		const result = await fetchDataTableGlobalLimitInBytes(rootStore.restApiContext);
		dataTableSize.value = formatSize(result.totalBytes);
		dataTableSizeLimitState.value = result.quotaStatus;
		const tableSizes = {};
		for (const [dataTableId, info] of Object.entries(result.dataTables)) tableSizes[dataTableId] = info.sizeBytes;
		dataTableTableSizes.value = tableSizes;
		return result;
	};
	return {
		dataTables,
		totalCount,
		fetchDataTables,
		fetchDataTableSize,
		dataTableSize: computed(() => dataTableSize.value),
		dataTableSizeLimitState: computed(() => dataTableSizeLimitState.value),
		dataTableSizes,
		maxSizeMB,
		createDataTable,
		deleteDataTable,
		updateDataTable,
		fetchDataTableDetails,
		fetchOrFindDataTable,
		addDataTableColumn,
		deleteDataTableColumn,
		moveDataTableColumn,
		fetchDataTableContent,
		insertEmptyRow,
		updateRow,
		deleteRows,
		projectPermissions
	};
});
export { reorderItem as n, useDataTableStore as t };
