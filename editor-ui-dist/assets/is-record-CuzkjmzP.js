//#region ../../@n8n/utils/src/is-record.ts
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
//#endregion
export { isRecord as t };
