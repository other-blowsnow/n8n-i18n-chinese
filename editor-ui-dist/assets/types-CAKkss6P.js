//#region ../@n8n/design-system/src/components/N8nIconPicker/types.ts
function isIconOrEmoji(icon) {
	return typeof icon === "object" && icon !== null && "type" in icon && (icon.type === "icon" || icon.type === "emoji") && "value" in icon && typeof icon.value === "string";
}
//#endregion
export { isIconOrEmoji as t };
