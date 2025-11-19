;
(function () {
  System.register(["./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var useUIStore, useRootStore, getThemedValue, isNodePreviewKey, useWorkflowsStore, useNodeTypesStore, removePreviewToken, isExpression, resolveIconExpression, getNodeIcon, getNodeIconUrl, getBadgeIconUrl, getNodeIconColor, prefixBaseUrl, getNodeBadgeIconSource, createFileIconSource, createNamedIconSource, getIconFromNodeTypeString;
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

    //#endregion
    _export("t", getNodeIconSource);
    return {
      setters: [function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        getThemedValue = _useTelemetryLegacy00FJs.Zr;
        isNodePreviewKey = _useTelemetryLegacy00FJs.gt;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        removePreviewToken = _useTelemetryLegacy00FJs.vt;
      }, function (_constantsLegacy00NJs) {
        isExpression = _constantsLegacy00NJs.ni;
      }],
      execute: function () {
        //#region src/app/utils/nodeIcon.ts
        resolveIconExpression = (icon, nodeType, node) => {
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
        getNodeIcon = (nodeType, node) => {
          const themedIcon = getThemedValue(nodeType.icon, useUIStore().appliedTheme);
          if (isExpression(themedIcon)) return resolveIconExpression(themedIcon, nodeType, node);
          return themedIcon;
        };
        getNodeIconUrl = nodeType => {
          return getThemedValue(nodeType.iconUrl, useUIStore().appliedTheme);
        };
        getBadgeIconUrl = nodeType => {
          return getThemedValue(nodeType.badgeIconUrl, useUIStore().appliedTheme);
        };
        getNodeIconColor = nodeType => {
          if ("iconColor" in nodeType && nodeType.iconColor) return `var(--node--icon--color--${nodeType.iconColor})`;
          const defaultColor = nodeType?.defaults?.color;
          return typeof defaultColor === "string" ? defaultColor : void 0;
        };
        prefixBaseUrl = url => useRootStore().baseUrl + url;
        getNodeBadgeIconSource = nodeType => {
          if (!("badgeIconUrl" in nodeType) || !nodeType.badgeIconUrl) return void 0;
          const badgeUrl = getBadgeIconUrl(nodeType);
          return badgeUrl ? {
            type: "file",
            src: prefixBaseUrl(badgeUrl)
          } : void 0;
        };
        createFileIconSource = (src, nodeType) => ({
          type: "file",
          src,
          badge: getNodeBadgeIconSource(nodeType)
        });
        createNamedIconSource = (name, nodeType) => ({
          type: "icon",
          name,
          color: getNodeIconColor(nodeType),
          badge: getNodeBadgeIconSource(nodeType)
        });
        getIconFromNodeTypeString = nodeTypeName => {
          const nodeTypeStore = useNodeTypesStore();
          const cleanedNodeType = removePreviewToken(nodeTypeName);
          const nodeDescription = nodeTypeStore.communityNodeType(cleanedNodeType)?.nodeDescription ?? nodeTypeStore.getNodeType(cleanedNodeType);
          const iconUrl = nodeDescription?.iconUrl ? getThemedValue(nodeDescription.iconUrl, useUIStore().appliedTheme) : null;
          return iconUrl ? {
            type: "file",
            src: iconUrl
          } : void 0;
        };
      }
    };
  });
})();