//#region ../../@n8n/utils/src/assert.ts
/**
* Asserts given condition
*/
function assert(condition, message) {
	if (!condition) throw new Error(message ?? "Assertion failed");
}
//#endregion
export { assert as t };
