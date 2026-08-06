//#region src/app/composables/useLatestFetch.ts
function useLatestFetch() {
	let generation = 0;
	function next() {
		const thisGeneration = ++generation;
		return () => thisGeneration === generation;
	}
	return { next };
}
//#endregion
export { useLatestFetch as t };
