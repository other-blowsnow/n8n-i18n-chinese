;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var ref, useI18n, STORES, getWorkflowsAndFolders, useRootStore, getFullApiResponse, makeRestApiRequest, moveFolderToProject, defineStore, BREADCRUMBS_MIN_LOADING_TIME, useFoldersStore;
    //#region src/features/core/folders/folders.api.ts
    async function createFolder(context, projectId, name, parentFolderId) {
      return await makeRestApiRequest(context, "POST", `/projects/${projectId}/folders`, {
        name,
        parentFolderId
      });
    }
    async function getFolderPath(context, projectId, folderId) {
      return await makeRestApiRequest(context, "GET", `/projects/${projectId}/folders/${folderId}/tree`);
    }
    async function deleteFolder(context, projectId, folderId, transferToFolderId) {
      return await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/folders/${folderId}`, {
        transferToFolderId
      });
    }
    async function renameFolder(context, projectId, folderId, name) {
      return await makeRestApiRequest(context, "PATCH", `/projects/${projectId}/folders/${folderId}`, {
        name
      });
    }
    async function getProjectFolders(context, projectId, options, filter, select) {
      const res = await getFullApiResponse(context, "GET", `/projects/${projectId}/folders`, {
        ...(filter ? {
          filter
        } : {}),
        ...(options ? options : {}),
        ...(select ? {
          select: JSON.stringify(select)
        } : {})
      });
      return {
        data: res.data,
        count: res.count
      };
    }
    async function getFolderUsedCredentials(context, projectId, folderId) {
      return (await getFullApiResponse(context, "GET", `/projects/${projectId}/folders/${folderId}/credentials`)).data;
    }
    async function moveFolder(context, projectId, folderId, parentFolderId) {
      return await makeRestApiRequest(context, "PATCH", `/projects/${projectId}/folders/${folderId}`, {
        parentFolderId
      });
    }
    async function getFolderContent(context, projectId, folderId) {
      return (await getFullApiResponse(context, "GET", `/projects/${projectId}/folders/${folderId}/content`)).data;
    }

    //#endregion
    //#region src/features/core/folders/folders.store.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_useTelemetryLegacy00FJs) {
        STORES = _useTelemetryLegacy00FJs.Cc;
        getWorkflowsAndFolders = _useTelemetryLegacy00FJs.Fo;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        getFullApiResponse = _useTelemetryLegacy00FJs.dc;
        makeRestApiRequest = _useTelemetryLegacy00FJs.fc;
        moveFolderToProject = _useTelemetryLegacy00FJs.kn;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }],
      execute: function () {
        BREADCRUMBS_MIN_LOADING_TIME = 300;
        _export("t", useFoldersStore = defineStore(STORES.FOLDERS, () => {
          const rootStore = useRootStore();
          const i18n = useI18n();
          const totalWorkflowCount = ref(0);
          const draggedElement = ref(null);
          const activeDropTarget = ref(null);
          /**
          * Cache visited folders so we can build breadcrumbs paths without fetching them from the server
          */
          const breadcrumbsCache = ref({});
          const cacheFolders = folders => {
            folders.forEach(folder => {
              if (!breadcrumbsCache.value[folder.id]) breadcrumbsCache.value[folder.id] = {
                id: folder.id,
                name: folder.name,
                parentFolder: folder.parentFolder
              };
            });
          };
          const getCachedFolder = folderId => {
            return breadcrumbsCache.value[folderId];
          };
          async function createFolder$1(name, projectId, parentFolderId) {
            return await createFolder(rootStore.restApiContext, projectId, name, parentFolderId);
          }
          async function getFolderPath$1(projectId, folderId) {
            const tree = await getFolderPath(rootStore.restApiContext, projectId, folderId);
            cacheFolders(extractFoldersForCache(tree));
            return tree;
          }
          function extractFoldersForCache(items, parentFolderId) {
            let result = [];
            items.forEach(item => {
              result.push({
                id: item.id,
                name: item.name,
                parentFolder: parentFolderId
              });
              if (item.children && item.children.length > 0) {
                const childFolders = extractFoldersForCache(item.children, item.id);
                result = [...result, ...childFolders];
              }
            });
            return result;
          }
          async function fetchTotalWorkflowsAndFoldersCount(projectId, parentFolderId) {
            const {
              count
            } = await getWorkflowsAndFolders(rootStore.restApiContext, {
              projectId,
              parentFolderId
            }, {
              skip: 0,
              take: 1
            }, true);
            totalWorkflowCount.value = count;
            return count;
          }
          const deleteFoldersFromCache = folderIds => {
            folderIds.forEach(folderId => {
              delete breadcrumbsCache.value[folderId];
            });
          };
          async function deleteFolder$1(projectId, folderId, newParentId) {
            await deleteFolder(rootStore.restApiContext, projectId, folderId, newParentId);
          }
          async function renameFolder$1(projectId, folderId, name) {
            await renameFolder(rootStore.restApiContext, projectId, folderId, name);
          }
          async function fetchProjectFolders(projectId) {
            return await getProjectFolders(rootStore.restApiContext, projectId);
          }
          async function fetchFoldersAvailableForMove(projectId, folderId, filter) {
            const PAGE_SIZE = 100;
            let skip = 0;
            let totalAvailable = 0;
            let allFolders = [];
            do {
              const {
                data: folders,
                count
              } = await getProjectFolders(rootStore.restApiContext, projectId, {
                skip,
                take: PAGE_SIZE,
                sortBy: "updatedAt:desc"
              }, {
                excludeFolderIdAndDescendants: folderId,
                name: filter?.name
              }, ["id", "name", "createdAt", "updatedAt", "project", "tags", "parentFolder", "workflowCount", "subFolderCount", "path"]);
              allFolders = allFolders.concat(folders.map(folder => ({
                ...folder,
                resource: "folder"
              })));
              totalAvailable = count;
              skip += folders.length;
            } while (allFolders.length < totalAvailable && skip < totalAvailable);
            cacheFolders(allFolders.map(folder => ({
              id: folder.id,
              name: folder.name,
              parentFolder: folder.parentFolder?.id
            })));
            allFolders.sort((a, b) => {
              if (a.path.length !== b.path.length) return a.path.length - b.path.length;
              for (let i = 0; i < a.path.length; i++) {
                const cmp = a.path[i].localeCompare(b.path[i]);
                if (cmp !== 0) return cmp;
              }
              return 0;
            });
            return allFolders;
          }
          async function fetchFolderUsedCredentials(projectId, folderId) {
            return await getFolderUsedCredentials(rootStore.restApiContext, projectId, folderId);
          }
          async function moveFolder$1(projectId, folderId, parentFolderId) {
            await moveFolder(rootStore.restApiContext, projectId, folderId, parentFolderId);
            delete breadcrumbsCache.value[folderId];
          }
          async function moveFolderToProject$1(projectId, folderId, destinationProjectId, destinationParentFolderId, shareCredentials) {
            await moveFolderToProject(rootStore.restApiContext, projectId, folderId, destinationProjectId, destinationParentFolderId, shareCredentials);
            delete breadcrumbsCache.value[folderId];
          }
          async function fetchFolderContent(projectId, folderId) {
            return await getFolderContent(rootStore.restApiContext, projectId, folderId);
          }
          /**
          * Fetches the breadcrumbs items for a given folder, excluding the specified folderId.
          * @param projectId project in which the folder is located
          * @param folderId folder to get the breadcrumbs for
          * @returns
          */
          async function getHiddenBreadcrumbsItems(project, folderId, options) {
            const startTime = Date.now();
            const path = await getFolderPath$1(project.id, folderId);
            const processFolderWithChildren = folder => {
              const result$1 = [{
                id: folder.id,
                label: folder.name,
                href: options?.addLinks ? `/projects/${project.id}/folders/${folder.id}/workflows` : void 0
              }];
              if (folder.children?.length) {
                const childItems = folder.children.flatMap(child => {
                  const childResult = [{
                    id: child.id,
                    label: child.name,
                    href: options?.addLinks ? `/projects/${project.id}/folders/${child.id}/workflows` : void 0
                  }];
                  if (child.children?.length) childResult.push.apply(childResult, processFolderWithChildren(child).slice(1));
                  return childResult;
                });
                result$1.push.apply(result$1, childItems);
              }
              return result$1;
            };
            let result;
            if (path.length === 0) result = [{
              id: project.id,
              label: project.name
            }, {
              id: "-1",
              label: i18n.baseText("folders.breadcrumbs.noTruncated.message")
            }];else result = [{
              id: project.id,
              label: project.name
            }, ...path.flatMap(processFolderWithChildren)];
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, BREADCRUMBS_MIN_LOADING_TIME - elapsedTime);
            if (remainingTime > 0) await new Promise(resolve => setTimeout(resolve, remainingTime));
            return result;
          }
          return {
            fetchTotalWorkflowsAndFoldersCount,
            breadcrumbsCache,
            cacheFolders,
            getCachedFolder,
            createFolder: createFolder$1,
            getFolderPath: getFolderPath$1,
            totalWorkflowCount,
            deleteFolder: deleteFolder$1,
            deleteFoldersFromCache,
            renameFolder: renameFolder$1,
            fetchProjectFolders,
            fetchFoldersAvailableForMove,
            moveFolder: moveFolder$1,
            moveFolderToProject: moveFolderToProject$1,
            fetchFolderContent,
            getHiddenBreadcrumbsItems,
            draggedElement,
            activeDropTarget,
            fetchFolderUsedCredentials
          };
        })); //#endregion
      }
    };
  });
})();