import { a5 as useRoute, x as computed, V as VIEWS, ew as reactive } from "./index-BSyItHSy.js";
const useProjectPages = () => {
  const route = useRoute();
  const isOverviewSubPage = computed(
    () => route.name === VIEWS.WORKFLOWS || route.name === VIEWS.HOMEPAGE || route.name === VIEWS.CREDENTIALS || route.name === VIEWS.EXECUTIONS || route.name === VIEWS.FOLDERS
  );
  const isSharedSubPage = computed(
    () => route.name === VIEWS.SHARED_WITH_ME || route.name === VIEWS.SHARED_WORKFLOWS || route.name === VIEWS.SHARED_CREDENTIALS
  );
  const isProjectsSubPage = computed(
    () => route.name === VIEWS.PROJECTS_WORKFLOWS || route.name === VIEWS.PROJECTS_CREDENTIALS || route.name === VIEWS.PROJECTS_EXECUTIONS || route.name === VIEWS.PROJECT_SETTINGS || route.name === VIEWS.PROJECTS_FOLDERS
  );
  return reactive({
    isOverviewSubPage,
    isSharedSubPage,
    isProjectsSubPage
  });
};
export {
  useProjectPages as u
};
