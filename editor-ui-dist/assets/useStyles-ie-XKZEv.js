import { t as APP_Z_INDEXES } from "./z-indexes-BpR3Iam_.js";
//#region ../@n8n/composables/src/useStyles.ts
var setAppZIndexes = () => {
	Object.keys(APP_Z_INDEXES).forEach((key) => {
		const variableName = `--${key.toLowerCase().replaceAll("_", "-")}--z`;
		const value = APP_Z_INDEXES[key];
		document.documentElement.style.setProperty(variableName, `${value}`);
	});
};
var useStyles = () => ({
	APP_Z_INDEXES,
	setAppZIndexes
});
//#endregion
export { useStyles as t };
