import { Oa as isNodeIcon } from "./src-D7XhL4SE.js";
import { F as removePreviewToken, Ti as getThemedValue, b as useNodeTypesStore, j as isNodePreviewKey } from "./workflows.store-aCrKXfPW.js";
import { dc as isExpression } from "./constants-Brs44Mbc.js";
import { t as useRootStore } from "./useRootStore-NTSmdx9S.js";
import { f as useUIStore } from "./users.store-ByD75lsx.js";
//#region src/app/utils/nodeIcon.ts
var resolveIconExpression = (icon, nodeType, node, expression) => {
	try {
		const defaults = nodeType.defaults && "parameters" in nodeType.defaults ? nodeType.defaults.parameters : {};
		const parameters = node?.parameters ?? defaults ?? {};
		const additionalKeys = {};
		additionalKeys.$parameter = parameters;
		const result = expression.getParameterValue(icon, null, 0, 0, node?.name ?? "", [], "internal", additionalKeys, void 0, false);
		if (typeof result !== "string") return null;
		const [prefix] = result.split(":");
		if (prefix !== "file" && prefix !== "icon" && prefix !== "node") return null;
		return result;
	} catch {
		return null;
	}
};
var getNodeIcon = (nodeType, node, expression) => {
	const themedIcon = getThemedValue(nodeType.icon, useUIStore().appliedTheme);
	if (isExpression(themedIcon) && expression) return resolveIconExpression(themedIcon, nodeType, node, expression);
	return themedIcon;
};
var getNodeIconUrl = (nodeType) => {
	return getThemedValue(nodeType.iconUrl, useUIStore().appliedTheme);
};
var getBadgeIconUrl = (nodeType) => {
	return getThemedValue(nodeType.badgeIconUrl, useUIStore().appliedTheme);
};
var getNodeIconColor = (nodeType) => {
	if ("iconColor" in nodeType && nodeType.iconColor) return `var(--node--icon--color--${nodeType.iconColor})`;
	const defaultColor = nodeType?.defaults?.color;
	return typeof defaultColor === "string" ? defaultColor : void 0;
};
var prefixBaseUrl = (url) => {
	if (/^(https?:)?\/\//.test(url)) return url;
	return useRootStore().baseUrl + url;
};
var getNodeBadgeIconSource = (nodeType) => {
	if (!("badgeIconUrl" in nodeType) || !nodeType.badgeIconUrl) return void 0;
	const badgeUrl = getBadgeIconUrl(nodeType);
	return badgeUrl ? {
		type: "file",
		src: prefixBaseUrl(badgeUrl)
	} : void 0;
};
var createFileIconSource = (src, nodeType) => ({
	type: "file",
	src,
	badge: getNodeBadgeIconSource(nodeType)
});
var createNamedIconSource = (name, nodeType) => ({
	type: "icon",
	name,
	color: getNodeIconColor(nodeType),
	badge: getNodeBadgeIconSource(nodeType)
});
var getIconFromNodeTypeString = (nodeTypeName) => {
	const nodeTypeStore = useNodeTypesStore();
	const cleanedNodeType = removePreviewToken(nodeTypeName);
	const nodeDescription = nodeTypeStore.communityNodeType(cleanedNodeType)?.nodeDescription ?? nodeTypeStore.getNodeType(cleanedNodeType);
	const iconUrl = nodeDescription?.iconUrl ? getThemedValue(nodeDescription.iconUrl, useUIStore().appliedTheme) : null;
	return iconUrl ? {
		type: "file",
		src: iconUrl
	} : void 0;
};
function getNodeIconSource(nodeType, node, expression) {
	if (!nodeType) return void 0;
	if (typeof nodeType === "string") return getIconFromNodeTypeString(nodeType);
	if ("iconData" in nodeType && nodeType.iconData) {
		if (nodeType.iconData.icon) return createNamedIconSource(nodeType.iconData.icon, nodeType);
		if (nodeType.iconData.fileBuffer) return createFileIconSource(nodeType.iconData.fileBuffer, nodeType);
	}
	if (nodeType.name && isNodePreviewKey(nodeType.name)) {
		const themedUrl = getThemedValue(nodeType.iconUrl, useUIStore().appliedTheme);
		if (themedUrl) return {
			type: "file",
			src: themedUrl,
			badge: void 0
		};
	}
	const iconUrl = getNodeIconUrl(nodeType);
	if (iconUrl) return createFileIconSource(prefixBaseUrl(iconUrl), nodeType);
	if (nodeType.icon) {
		let fullNodeType = nodeType;
		if (!("iconBasePath" in nodeType) && "name" in nodeType && nodeType.name) fullNodeType = useNodeTypesStore().getNodeType(nodeType.name) ?? nodeType;
		const icon = getNodeIcon(fullNodeType, node, expression);
		if (!icon) return void 0;
		const [type, iconName] = icon.split(":");
		if (type === "file") {
			if ("iconBasePath" in fullNodeType && fullNodeType.iconBasePath) {
				const iconPath = iconName.replace(/^\//, "");
				return createFileIconSource(prefixBaseUrl(`${fullNodeType.iconBasePath}/${iconPath}`), fullNodeType);
			}
			return;
		}
		return createNamedIconSource(type === "node" ? icon : iconName, fullNodeType);
	}
}
var NODE_ICON_SIZES = {
	canvas: {
		new: 48,
		old: 40
	},
	configuration: {
		new: 36,
		old: 30
	},
	nodeList: {
		new: 24,
		old: 20
	},
	ndvHeader: {
		new: 24,
		old: 20
	}
};
function getNodeIconSize(context, iconName) {
	const sizes = NODE_ICON_SIZES[context];
	return isNodeIcon(iconName) ? sizes.new : sizes.old;
}
//#endregion
export { getNodeIconSource as n, getNodeIconSize as t };
