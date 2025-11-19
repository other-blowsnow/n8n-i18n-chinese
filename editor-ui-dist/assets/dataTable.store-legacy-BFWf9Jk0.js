;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var computed, ref, addDataTableColumnApi, updateDataTableApi, useSettingsStore, useProjectsStore, fetchDataTableGlobalLimitInBytes, fetchDataTablesApi, getDataTableRowsApi, deleteDataTableApi, deleteDataTableColumnApi, deleteDataTableRowsApi, useRootStore, insertDataTableRowApi, updateDataTableRowsApi, createDataTableApi, defineStore, moveDataTableColumnApi, DATA_TABLE_STORE, getResourcePermissions, reorderItem, useDataTableStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00FJs) {
        addDataTableColumnApi = _useTelemetryLegacy00FJs.An;
        updateDataTableApi = _useTelemetryLegacy00FJs.Bn;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        fetchDataTableGlobalLimitInBytes = _useTelemetryLegacy00FJs.Fn;
        fetchDataTablesApi = _useTelemetryLegacy00FJs.In;
        getDataTableRowsApi = _useTelemetryLegacy00FJs.Ln;
        deleteDataTableApi = _useTelemetryLegacy00FJs.Mn;
        deleteDataTableColumnApi = _useTelemetryLegacy00FJs.Nn;
        deleteDataTableRowsApi = _useTelemetryLegacy00FJs.Pn;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        insertDataTableRowApi = _useTelemetryLegacy00FJs.Rn;
        updateDataTableRowsApi = _useTelemetryLegacy00FJs.Vn;
        createDataTableApi = _useTelemetryLegacy00FJs.jn;
        defineStore = _useTelemetryLegacy00FJs.xc;
        moveDataTableColumnApi = _useTelemetryLegacy00FJs.zn;
      }, function (_constantsLegacy00NJs) {
        DATA_TABLE_STORE = _constantsLegacy00NJs.Gn;
        getResourcePermissions = _constantsLegacy00NJs._r;
      }],
      execute: function () {
        //#region src/features/core/dataTable/utils.ts
        _export("n", reorderItem = (items, oldIndex, newIndex) => {
          return items.map(item => {
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
        }); //#endregion
        //#region src/features/core/dataTable/dataTable.store.ts
        _export("t", useDataTableStore = defineStore(DATA_TABLE_STORE, () => {
          const rootStore = useRootStore();
          const projectStore = useProjectsStore();
          const settingsStore = useSettingsStore();
          const dataTables = ref([]);
          const totalCount = ref(0);
          const dataTableSize = ref(0);
          const dataTableSizeLimitState = ref("ok");
          const dataTableTableSizes = ref({});
          const projectPermissions = computed(() => getResourcePermissions(projectStore.currentProject?.scopes ?? projectStore.personalProject?.scopes));
          const formatSize = sizeBytes => {
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
              dataTables.value = dataTables.value.filter(dataTable => dataTable.id !== dataTableId);
              totalCount.value -= 1;
            }
            return deleted;
          };
          const deleteDataTableColumn = async (dataTableId, projectId, columnId) => {
            const deleted = await deleteDataTableColumnApi(rootStore.restApiContext, dataTableId, projectId, columnId);
            if (deleted) {
              const index = dataTables.value.findIndex(dataTable => dataTable.id === dataTableId);
              if (index !== -1) dataTables.value[index].columns = dataTables.value[index].columns.filter(column => column.id !== columnId);
            }
            return deleted;
          };
          const updateDataTable = async (dataTableId, name, projectId) => {
            const updated = await updateDataTableApi(rootStore.restApiContext, dataTableId, name, projectId);
            if (updated) {
              const index = dataTables.value.findIndex(table => table.id === dataTableId);
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
            const existingTable = dataTables.value.find(table => table.id === dataTableId);
            if (existingTable) return existingTable;
            return await fetchDataTableDetails(dataTableId, projectId);
          };
          const addDataTableColumn = async (dataTableId, projectId, column) => {
            const newColumn = await addDataTableColumnApi(rootStore.restApiContext, dataTableId, projectId, column);
            if (newColumn) {
              const index = dataTables.value.findIndex(table => table.id === dataTableId);
              if (index !== -1) dataTables.value[index].columns.push(newColumn);
            }
            return newColumn;
          };
          const moveDataTableColumn = async (dataTableId, projectId, columnId, targetIndex) => {
            const moved = await moveDataTableColumnApi(rootStore.restApiContext, dataTableId, projectId, columnId, targetIndex);
            if (moved) {
              const dsIndex = dataTables.value.findIndex(table => table.id === dataTableId);
              const fromIndex = dataTables.value[dsIndex].columns.findIndex(col => col.id === columnId);
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
        })); //#endregion
      }
    };
  });
})();