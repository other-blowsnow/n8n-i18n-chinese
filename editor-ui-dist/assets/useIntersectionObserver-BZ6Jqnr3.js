import { It as ref, J as onBeforeUnmount } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
function useIntersectionObserver(options) {
	const observer = ref(null);
	const disconnect = () => {
		if (observer.value) {
			observer.value.disconnect();
			observer.value = null;
		}
	};
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
export { useIntersectionObserver as t };
