import { f8 as makeRestApiRequest, $ as defineStore, at as useRootStore, au as useProjectsStore, r as ref, gI as DATA_STORE_STORE } from "./index-CeS8eiHF.js";
const fetchDataStoresApi = async (context, projectId, options, filter) => {
  const apiEndpoint = projectId ? `/projects/${projectId}/data-tables` : "/data-tables-global";
  return await makeRestApiRequest(
    context,
    "GET",
    apiEndpoint,
    {
      ...options,
      filter: filter ?? void 0
    }
  );
};
const createDataStoreApi = async (context, name, projectId, columns) => {
  return await makeRestApiRequest(
    context,
    "POST",
    `/projects/${projectId}/data-tables`,
    {
      name,
      columns: []
    }
  );
};
const deleteDataStoreApi = async (context, dataStoreId, projectId) => {
  return await makeRestApiRequest(
    context,
    "DELETE",
    `/projects/${projectId}/data-tables/${dataStoreId}`,
    {
      dataStoreId,
      projectId
    }
  );
};
const updateDataStoreApi = async (context, dataStoreId, name, projectId) => {
  return await makeRestApiRequest(
    context,
    "PATCH",
    `/projects/${projectId}/data-tables/${dataStoreId}`,
    {
      name
    }
  );
};
const addDataStoreColumnApi = async (context, dataStoreId, projectId, column) => {
  return await makeRestApiRequest(
    context,
    "POST",
    `/projects/${projectId}/data-tables/${dataStoreId}/columns`,
    {
      ...column
    }
  );
};
const deleteDataStoreColumnApi = async (context, dataStoreId, projectId, columnId) => {
  return await makeRestApiRequest(
    context,
    "DELETE",
    `/projects/${projectId}/data-tables/${dataStoreId}/columns/${columnId}`
  );
};
const moveDataStoreColumnApi = async (context, dataStoreId, projectId, columnId, targetIndex) => {
  return await makeRestApiRequest(
    context,
    "PATCH",
    `/projects/${projectId}/data-tables/${dataStoreId}/columns/${columnId}/move`,
    {
      targetIndex
    }
  );
};
const getDataStoreRowsApi = async (context, dataStoreId, projectId, options) => {
  return await makeRestApiRequest(context, "GET", `/projects/${projectId}/data-tables/${dataStoreId}/rows`, {
    ...options ?? {}
  });
};
const insertDataStoreRowApi = async (context, dataStoreId, row, projectId) => {
  return await makeRestApiRequest(
    context,
    "POST",
    `/projects/${projectId}/data-tables/${dataStoreId}/insert`,
    {
      returnData: true,
      data: [row]
    }
  );
};
const updateDataStoreRowsApi = async (context, dataStoreId, rowId, rowData, projectId) => {
  return await makeRestApiRequest(
    context,
    "PATCH",
    `/projects/${projectId}/data-tables/${dataStoreId}/rows`,
    {
      filter: {
        type: "and",
        filters: [{ columnName: "id", condition: "eq", value: rowId }]
      },
      data: rowData
    }
  );
};
const deleteDataStoreRowsApi = async (context, dataStoreId, rowIds, projectId) => {
  return await makeRestApiRequest(
    context,
    "DELETE",
    `/projects/${projectId}/data-tables/${dataStoreId}/rows`,
    {
      ids: rowIds.join(",")
    }
  );
};
const reorderItem = (items, oldIndex, newIndex) => {
  return items.map((item) => {
    if (item.index === oldIndex) return { ...item, index: newIndex };
    if (oldIndex < newIndex && item.index > oldIndex && item.index <= newIndex) {
      return { ...item, index: item.index - 1 };
    }
    if (oldIndex > newIndex && item.index >= newIndex && item.index < oldIndex) {
      return { ...item, index: item.index + 1 };
    }
    return item;
  });
};
const useDataStoreStore = defineStore(DATA_STORE_STORE, () => {
  const rootStore = useRootStore();
  const projectStore = useProjectsStore();
  const dataStores = ref([]);
  const totalCount = ref(0);
  const fetchDataStores = async (projectId, page, pageSize) => {
    const response = await fetchDataStoresApi(rootStore.restApiContext, projectId, {
      skip: (page - 1) * pageSize,
      take: pageSize
    });
    dataStores.value = response.data;
    totalCount.value = response.count;
  };
  const createDataStore = async (name, projectId) => {
    const newStore = await createDataStoreApi(rootStore.restApiContext, name, projectId);
    if (!newStore.project && projectId) {
      const project = await projectStore.fetchProject(projectId);
      if (project) {
        newStore.project = project;
      }
    }
    dataStores.value.push(newStore);
    totalCount.value += 1;
    return newStore;
  };
  const deleteDataStore = async (datastoreId, projectId) => {
    const deleted = await deleteDataStoreApi(rootStore.restApiContext, datastoreId, projectId);
    if (deleted) {
      dataStores.value = dataStores.value.filter((store) => store.id !== datastoreId);
      totalCount.value -= 1;
    }
    return deleted;
  };
  const deleteDataStoreColumn = async (datastoreId, projectId, columnId) => {
    const deleted = await deleteDataStoreColumnApi(
      rootStore.restApiContext,
      datastoreId,
      projectId,
      columnId
    );
    if (deleted) {
      const index = dataStores.value.findIndex((store) => store.id === datastoreId);
      if (index !== -1) {
        dataStores.value[index].columns = dataStores.value[index].columns.filter(
          (col) => col.id !== columnId
        );
      }
    }
    return deleted;
  };
  const updateDataStore = async (datastoreId, name, projectId) => {
    const updated = await updateDataStoreApi(
      rootStore.restApiContext,
      datastoreId,
      name,
      projectId
    );
    if (updated) {
      const index = dataStores.value.findIndex((store) => store.id === datastoreId);
      if (index !== -1) {
        dataStores.value[index] = { ...dataStores.value[index], name };
      }
    }
    return updated;
  };
  const fetchDataStoreDetails = async (datastoreId, projectId) => {
    const response = await fetchDataStoresApi(rootStore.restApiContext, projectId, void 0, {
      projectId,
      id: datastoreId
    });
    if (response.data.length > 0) {
      dataStores.value = response.data;
      return response.data[0];
    }
    return null;
  };
  const fetchOrFindDataStore = async (datastoreId, projectId) => {
    const existingStore = dataStores.value.find((store) => store.id === datastoreId);
    if (existingStore) {
      return existingStore;
    }
    return await fetchDataStoreDetails(datastoreId, projectId);
  };
  const addDataStoreColumn = async (datastoreId, projectId, column) => {
    const newColumn = await addDataStoreColumnApi(
      rootStore.restApiContext,
      datastoreId,
      projectId,
      column
    );
    if (newColumn) {
      const index = dataStores.value.findIndex((store) => store.id === datastoreId);
      if (index !== -1) {
        dataStores.value[index].columns.push(newColumn);
      }
    }
    return newColumn;
  };
  const moveDataStoreColumn = async (datastoreId, projectId, columnId, targetIndex) => {
    const moved = await moveDataStoreColumnApi(
      rootStore.restApiContext,
      datastoreId,
      projectId,
      columnId,
      targetIndex
    );
    if (moved) {
      const dsIndex = dataStores.value.findIndex((store) => store.id === datastoreId);
      const fromIndex = dataStores.value[dsIndex].columns.findIndex((col) => col.id === columnId);
      dataStores.value[dsIndex].columns = reorderItem(
        dataStores.value[dsIndex].columns,
        fromIndex,
        targetIndex
      );
    }
    return moved;
  };
  const fetchDataStoreContent = async (datastoreId, projectId, page, pageSize, sortBy) => {
    return await getDataStoreRowsApi(rootStore.restApiContext, datastoreId, projectId, {
      skip: (page - 1) * pageSize,
      take: pageSize,
      sortBy
    });
  };
  const insertEmptyRow = async (dataStoreId, projectId) => {
    const inserted = await insertDataStoreRowApi(
      rootStore.restApiContext,
      dataStoreId,
      {},
      projectId
    );
    return inserted[0];
  };
  const updateRow = async (dataStoreId, projectId, rowId, rowData) => {
    return await updateDataStoreRowsApi(
      rootStore.restApiContext,
      dataStoreId,
      rowId,
      rowData,
      projectId
    );
  };
  const deleteRows = async (dataStoreId, projectId, rowIds) => {
    return await deleteDataStoreRowsApi(rootStore.restApiContext, dataStoreId, rowIds, projectId);
  };
  return {
    dataStores,
    totalCount,
    fetchDataStores,
    createDataStore,
    deleteDataStore,
    updateDataStore,
    fetchDataStoreDetails,
    fetchOrFindDataStore,
    addDataStoreColumn,
    deleteDataStoreColumn,
    moveDataStoreColumn,
    fetchDataStoreContent,
    insertEmptyRow,
    updateRow,
    deleteRows
  };
});
export {
  reorderItem as r,
  useDataStoreStore as u
};
