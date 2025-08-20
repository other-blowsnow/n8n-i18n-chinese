import { f5 as makeRestApiRequest, a7 as defineStore, at as useRootStore, r as ref, gB as DATA_STORE_STORE } from "./index-BsWH3eYA.js";
const fetchDataStoresApi = async (context, projectId, options) => {
  const apiEndpoint = projectId ? `/projects/${projectId}/data-stores` : "/data-stores-global";
  return await makeRestApiRequest(
    context,
    "GET",
    apiEndpoint,
    {
      ...options
    }
  );
};
const createDataStoreApi = async (context, name, projectId) => {
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
const useDataStoreStore = defineStore(DATA_STORE_STORE, () => {
  const rootStore = useRootStore();
  const dataStores = ref([]);
  const totalCount = ref(0);
  const fetchDataStores = async (projectId, page, pageSize) => {
    const response = await fetchDataStoresApi(rootStore.restApiContext, projectId, {
      skip: (page - 1) * pageSize,
      take: pageSize
    });
    console.log("Data stores fetched:", response);
    dataStores.value = response.data;
    totalCount.value = response.count;
  };
  const createDataStore = async (name, projectId) => {
    const newStore = await createDataStoreApi(rootStore.restApiContext, name, projectId);
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
  return {
    dataStores,
    totalCount,
    fetchDataStores,
    createDataStore,
    deleteDataStore,
    updateDataStore
  };
});
export {
  useDataStoreStore as u
};
