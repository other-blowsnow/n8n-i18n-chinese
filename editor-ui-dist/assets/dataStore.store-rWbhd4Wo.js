import { e$ as makeRestApiRequest, a7 as defineStore, at as useRootStore, au as useProjectsStore, r as ref, gw as DATA_STORE_STORE } from "./index-Hf-41Ny8.js";
const fetchDataStoresApi = async (context, projectId, options, filter) => {
  const apiEndpoint = projectId ? `/projects/${projectId}/data-stores` : "/data-stores-global";
  return await makeRestApiRequest(
    context,
    "GET",
    apiEndpoint,
    {
      ...options,
      ...filter ?? {}
    }
  );
};
const createDataStoreApi = async (context, name, projectId, columns) => {
  return await makeRestApiRequest(
    context,
    "POST",
    `/projects/${projectId}/data-stores`,
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
    `/projects/${projectId}/data-stores/${dataStoreId}`,
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
    `/projects/${projectId}/data-stores/${dataStoreId}`,
    {
      name
    }
  );
};
const addDataStoreColumnApi = async (context, dataStoreId, projectId, column) => {
  return await makeRestApiRequest(
    context,
    "POST",
    `/projects/${projectId}/data-stores/${dataStoreId}/columns`,
    {
      ...column
    }
  );
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
      id: datastoreId
    });
    if (response.data.length > 0) {
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
  return {
    dataStores,
    totalCount,
    fetchDataStores,
    createDataStore,
    deleteDataStore,
    updateDataStore,
    fetchDataStoreDetails,
    fetchOrFindDataStore,
    addDataStoreColumn
  };
});
export {
  useDataStoreStore as u
};
