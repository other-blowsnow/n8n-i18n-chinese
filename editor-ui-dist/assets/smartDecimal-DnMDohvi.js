//#region ../../@n8n/utils/src/number/smartDecimal.ts
var smartDecimal = (value, decimals = 2) => {
	if (Number.isInteger(value)) return value;
	if (value.toString().split(".")[1].length <= decimals) return value;
	return Number(value.toFixed(decimals));
};
//#endregion
export { smartDecimal as t };
