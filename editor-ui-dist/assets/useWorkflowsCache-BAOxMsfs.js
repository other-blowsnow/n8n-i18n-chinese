import { r as ref, d_ as jsonParse } from "./index-Bwe5xApO.js";
async function indexedDbCache(dbName, storeName) {
  let cache = {};
  void await loadCache();
  async function loadCache() {
    await transaction("readonly", async (store, db) => {
      return await new Promise((resolve, reject) => {
        const request = store.openCursor();
        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            cache[cursor.key] = cursor.value.value;
            cursor.continue();
          } else {
            db.close();
            resolve();
          }
        };
        request.onerror = (event) => {
          db.close();
          reject(event);
        };
      });
    });
  }
  async function openDb() {
    return await new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore(storeName, { keyPath: "key" });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  function setItem(key, value) {
    cache[key] = value;
    void persistToIndexedDB(key, value);
  }
  function getItem(key) {
    return cache[key] ?? null;
  }
  function removeItem(key) {
    delete cache[key];
    void deleteFromIndexedDB(key);
  }
  function clear() {
    cache = {};
    void clearIndexedDB();
  }
  async function getAllWithPrefix(prefix) {
    const keyRange = IDBKeyRange.bound(prefix, prefix + "￿", false, false);
    const results = {};
    return await transaction("readonly", async (store) => {
      return await new Promise((resolve, reject) => {
        const request = store.openCursor(keyRange);
        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            results[cursor.key] = cursor.value.value;
            cursor.continue();
          } else {
            resolve(results);
          }
        };
        request.onerror = () => {
          reject(request.error);
        };
      });
    });
  }
  async function transaction(mode, action) {
    const db = await openDb();
    const tx = db.transaction(storeName, mode);
    const store = tx.objectStore(storeName);
    const result = await action(store, db);
    return await new Promise((resolve, reject) => {
      tx.oncomplete = () => {
        db.close();
        resolve(result);
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error);
      };
    });
  }
  async function persistToIndexedDB(key, value) {
    await transaction("readwrite", (store) => {
      store.put({ key, value });
    });
  }
  async function deleteFromIndexedDB(key) {
    await transaction("readwrite", (store) => {
      store.delete(key);
    });
  }
  async function clearIndexedDB() {
    await transaction("readwrite", (store) => {
      store.clear();
    });
  }
  return { getItem, removeItem, setItem, clear, getAllWithPrefix };
}
function useWorkflowSettingsCache() {
  const isCacheLoading = ref(true);
  const cachePromise = ref(
    indexedDbCache("n8n-local", "workflows").finally(() => {
      isCacheLoading.value = false;
    })
  );
  async function getWorkflowsCache() {
    return await cachePromise.value;
  }
  async function getWorkflowSettings(workflowId) {
    const cache = await getWorkflowsCache();
    return jsonParse(cache.getItem(workflowId) ?? "", {
      fallbackValue: {}
    });
  }
  async function getMergedWorkflowSettings(workflowId) {
    const workflowSettings = await getWorkflowSettings(workflowId);
    const cache = await getWorkflowsCache();
    const globalPreferences = jsonParse(cache.getItem("*") ?? "", {
      fallbackValue: {}
    });
    workflowSettings.suggestedActions = {
      ...workflowSettings.suggestedActions ?? {},
      ...globalPreferences.suggestedActions ?? {}
    };
    return workflowSettings;
  }
  async function upsertWorkflowSettings(workflowId, updates) {
    const cache = await getWorkflowsCache();
    const existingSettings = await getWorkflowSettings(workflowId);
    const updatedSettings = {
      ...existingSettings,
      ...updates
    };
    if (updates.suggestedActions) {
      updatedSettings.suggestedActions = {
        ...existingSettings.suggestedActions ?? {},
        ...updates.suggestedActions
      };
    }
    cache.setItem(workflowId, JSON.stringify(updatedSettings));
  }
  async function updateFirstActivatedAt(workflowId) {
    const existingSettings = await getWorkflowSettings(workflowId);
    if (!existingSettings?.firstActivatedAt) {
      await upsertWorkflowSettings(workflowId, {
        firstActivatedAt: Date.now()
      });
    }
  }
  async function ignoreSuggestedAction(workflowId, action) {
    await upsertWorkflowSettings(workflowId, {
      suggestedActions: {
        [action]: { ignored: true }
      }
    });
  }
  async function getEvaluationPreferences(workflowId) {
    return (await getWorkflowSettings(workflowId))?.evaluationRuns ?? {
      order: [],
      visibility: {}
    };
  }
  async function saveEvaluationPreferences(workflowId, evaluationRuns) {
    await upsertWorkflowSettings(workflowId, { evaluationRuns });
  }
  async function ignoreAllSuggestedActionsForAllWorkflows(actionsToIgnore) {
    await upsertWorkflowSettings(
      "*",
      actionsToIgnore.reduce((accu, key) => {
        accu.suggestedActions = accu.suggestedActions ?? {};
        accu.suggestedActions[key] = {
          ignored: true
        };
        return accu;
      }, {})
    );
  }
  return {
    getWorkflowSettings,
    getMergedWorkflowSettings,
    upsertWorkflowSettings,
    updateFirstActivatedAt,
    ignoreSuggestedAction,
    ignoreAllSuggestedActionsForAllWorkflows,
    getEvaluationPreferences,
    saveEvaluationPreferences,
    isCacheLoading
  };
}
export {
  useWorkflowSettingsCache as u
};
