import { a6 as useRoute, x as computed, V as VIEWS, cZ as reactive } from "./index-MSgOD_Ak.js";
const useProjectPages = () => {
  const route = useRoute();
  const isProjectsSubPage = computed(() => route.params?.projectId !== void 0);
  const isOverviewSubPage = computed(() => route.params?.projectId === void 0);
  const isSharedSubPage = computed(
    () => route.name === VIEWS.SHARED_WITH_ME || route.name === VIEWS.SHARED_WORKFLOWS || route.name === VIEWS.SHARED_CREDENTIALS
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
