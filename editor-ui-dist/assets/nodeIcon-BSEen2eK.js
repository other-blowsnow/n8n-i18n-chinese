import { Js as useRootStore, Li as useUIStore, gt as isNodePreviewKey, rt as useNodeTypesStore, ti as getThemedValue, vt as removePreviewToken } from "./useTelemetry-D6pZULgL.js";
const getNodeIcon = (nodeType) => {
	return getThemedValue(nodeType.icon, useUIStore().appliedTheme);
};
const getNodeIconUrl = (nodeType) => {
	return getThemedValue(nodeType.iconUrl, useUIStore().appliedTheme);
};
const getBadgeIconUrl = (nodeType) => {
	return getThemedValue(nodeType.badgeIconUrl, useUIStore().appliedTheme);
};
function getNodeIconColor(nodeType) {
	if ("iconColor" in nodeType && nodeType.iconColor) return `var(--node--icon--color--${nodeType.iconColor})`;
	return nodeType?.defaults?.color?.toString();
}
function prefixBaseUrl(url) {
	return useRootStore().baseUrl + url;
}
function getNodeIconSource(nodeType) {
	const nodeTypeStore = useNodeTypesStore();
	if (!nodeType) return void 0;
	if (typeof nodeType === "string") {
		const cleanedNodeType = removePreviewToken(nodeType);
		const nodeDescription = nodeTypeStore.communityNodeType(cleanedNodeType)?.nodeDescription ?? nodeTypeStore.getNodeType(cleanedNodeType);
		let url = null;
		if (nodeDescription?.iconUrl) url = getThemedValue(nodeDescription.iconUrl, useUIStore().appliedTheme);
		return url ? {
			type: "file",
			src: url
		} : void 0;
	}
	const createFileIconSource = (src) => ({
		type: "file",
		src,
		badge: getNodeBadgeIconSource(nodeType)
	});
	const createNamedIconSource = (name) => ({
		type: "icon",
		name,
		color: getNodeIconColor(nodeType),
		badge: getNodeBadgeIconSource(nodeType)
	});
	if ("iconData" in nodeType && nodeType.iconData) {
		if (nodeType.iconData.icon) return createNamedIconSource(nodeType.iconData.icon);
		if (nodeType.iconData.fileBuffer) return createFileIconSource(nodeType.iconData.fileBuffer);
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
	if (iconUrl) return createFileIconSource(prefixBaseUrl(iconUrl));
	if (nodeType.icon) {
		const icon = getNodeIcon(nodeType);
		if (icon) {
			const [type, iconName] = icon.split(":");
			if (type === "file") return;
			return createNamedIconSource(iconName);
		}
	}
}
function getNodeBadgeIconSource(nodeType) {
	if (nodeType && "badgeIconUrl" in nodeType && nodeType.badgeIconUrl) {
		const badgeUrl = getBadgeIconUrl(nodeType);
		if (!badgeUrl) return void 0;
		return {
			type: "file",
			src: prefixBaseUrl(badgeUrl)
		};
	}
}
export { getNodeIconSource as t };
