import { C as computed, Pt as reactive } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { y as useRoute } from "./truncate-DHb0OvjC.js";
import { co as VIEWS } from "./constants-UStNMe6H.js";
const useProjectPages = () => {
	const route = useRoute();
	const isProjectsSubPage = computed(() => route.params?.projectId !== void 0);
	return reactive({
		isOverviewSubPage: computed(() => route.params?.projectId === void 0),
		isSharedSubPage: computed(() => route.name === VIEWS.SHARED_WITH_ME || route.name === VIEWS.SHARED_WORKFLOWS || route.name === VIEWS.SHARED_CREDENTIALS),
		isProjectsSubPage
	});
};
export { useProjectPages as t };
