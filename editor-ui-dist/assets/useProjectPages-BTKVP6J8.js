import { a2 as useRoute, x as computed, V as VIEWS, d0 as reactive } from "./index-C2Ni_W8W.js";
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
