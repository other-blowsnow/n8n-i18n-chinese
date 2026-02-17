const smartDecimal = (value, decimals = 2) => {
	if (Number.isInteger(value)) return value;
	if (value.toString().split(".")[1].length <= decimals) return value;
	return Number(value.toFixed(decimals));
};
export { smartDecimal as t };
