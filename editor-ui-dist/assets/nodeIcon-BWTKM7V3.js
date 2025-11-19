import { Ni as useUIStore, Qs as useRootStore, Zr as getThemedValue, gt as isNodePreviewKey, o as useWorkflowsStore, rt as useNodeTypesStore, vt as removePreviewToken } from "./useTelemetry-C2EhNQhN.js";
import { ni as isExpression } from "./constants-C_oOJnqT.js";
var resolveIconExpression = (icon, nodeType, node) => {
	try {
		const workflowsStore = useWorkflowsStore();
		const defaults = nodeType.defaults && "parameters" in nodeType.defaults ? nodeType.defaults.parameters : {};
		const parameters = node?.parameters ?? defaults ?? {};
		const additionalKeys = {};
		additionalKeys.$parameter = parameters;
		const result = workflowsStore.workflowObject.expression.getParameterValue(icon, null, 0, 0, node?.name ?? "", [], "internal", additionalKeys, void 0, false);
		if (typeof result !== "string") return null;
		const [prefix] = result.split(":");
		if (prefix !== "file" && prefix !== "icon") return null;
		return result;
	} catch {
		return null;
	}
};
const getNodeIcon = (nodeType, node) => {
	const themedIcon = getThemedValue(nodeType.icon, useUIStore().appliedTheme);
	if (isExpression(themedIcon)) return resolveIconExpression(themedIcon, nodeType, node);
	return themedIcon;
};
const getNodeIconUrl = (nodeType) => {
	return getThemedValue(nodeType.iconUrl, useUIStore().appliedTheme);
};
const getBadgeIconUrl = (nodeType) => {
	return getThemedValue(nodeType.badgeIconUrl, useUIStore().appliedTheme);
};
var getNodeIconColor = (nodeType) => {
	if ("iconColor" in nodeType && nodeType.iconColor) return `var(--node--icon--color--${nodeType.iconColor})`;
	const defaultColor = nodeType?.defaults?.color;
	return typeof defaultColor === "string" ? defaultColor : void 0;
};
var prefixBaseUrl = (url) => useRootStore().baseUrl + url;
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
function getNodeIconSource(nodeType, node) {
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
		const icon = getNodeIcon(fullNodeType, node);
		if (!icon) return void 0;
		const [type, iconName] = icon.split(":");
		if (type === "file") {
			if ("iconBasePath" in fullNodeType && fullNodeType.iconBasePath) {
				const iconPath = iconName.replace(/^\//, "");
				return createFileIconSource(prefixBaseUrl(`${fullNodeType.iconBasePath}/${iconPath}`), fullNodeType);
			}
			return;
		}
		return createNamedIconSource(iconName, fullNodeType);
	}
}
export { getNodeIconSource as t };
