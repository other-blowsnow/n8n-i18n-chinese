const sortByProperty = (property, arr, order = "asc") => arr.sort((a, b) => {
	const result = String(a[property]).localeCompare(String(b[property]), void 0, {
		numeric: true,
		sensitivity: "base"
	});
	return order === "asc" ? result : -result;
});
export { sortByProperty as t };
