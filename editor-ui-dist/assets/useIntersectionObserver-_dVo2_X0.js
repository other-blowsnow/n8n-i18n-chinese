import { Ft as ref, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
//#region src/app/composables/useIntersectionObserver.ts
/**
* Composable for observing element intersections with automatic cleanup
*
* @example
* const { observe } = useIntersectionObserver({
*   root: containerRef,
*   onIntersect: () => loadMore(),
* });
*
* // Observe last item in list
* observe(lastItemElement);
*/
function useIntersectionObserver(options) {
	const observer = ref(null);
	/**
	* Stop observing and clean up the observer
	*/
	const disconnect = () => {
		if (observer.value) {
			observer.value.disconnect();
			observer.value = null;
		}
	};
	/**
	* Start observing an element for intersection
	* Automatically cleans up any existing observer before creating a new one
	*/
	const observe = (element) => {
		if (!element) return;
		disconnect();
		observer.value = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				options.onIntersect();
				if (options.once !== false) disconnect();
			}
		}, {
			root: options.root.value,
			threshold: options.threshold ?? .01
		});
		observer.value.observe(element);
	};
	onBeforeUnmount(() => {
		disconnect();
	});
	return {
		observer,
		observe,
		disconnect
	};
}
//#endregion
export { useIntersectionObserver as t };
