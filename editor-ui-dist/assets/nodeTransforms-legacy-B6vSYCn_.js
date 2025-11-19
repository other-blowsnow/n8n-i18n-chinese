;
(function () {
  System.register(["./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var useNodeTypesStore, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, traverseNodeParameters, WIKIPEDIA_TOOL_NODE_TYPE, displayParameter, AI_MCP_TOOL_NODE_TYPE, getNodeParameters;
    //#region src/app/utils/nodes/nodeTransforms.ts
    /**
    * Returns the credentials that are displayable for the given node.
    */
    function getNodeTypeDisplayableCredentials(nodeTypeProvider, node) {
      const nodeType = nodeTypeProvider.getNodeType(node.type, node.typeVersion);
      if (!nodeType?.credentials) return [];
      const nodeTypeCreds = nodeType.credentials;
      const nodeParameters = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
      return nodeTypeCreds.filter(credentialTypeDescription => {
        return displayParameter(nodeParameters, credentialTypeDescription, node, nodeType);
      });
    }
    /**
    * Checks if the given node has credentials that can be filled.
    */
    function doesNodeHaveCredentialsToFill(nodeTypeProvider, node) {
      return getNodeTypeDisplayableCredentials(nodeTypeProvider, node).length > 0;
    }
    /**
    * Does node has the given credential filled
    *
    * @param credentialName E.g. "telegramApi"
    */
    function hasNodeCredentialFilled(node, credentialName) {
      if (!node.credentials) return false;
      return !!node.credentials[credentialName];
    }
    /**
    * Checks if the given node has all credentials filled.
    */
    function doesNodeHaveAllCredentialsFilled(nodeTypeProvider, node) {
      return getNodeTypeDisplayableCredentials(nodeTypeProvider, node).every(cred => hasNodeCredentialFilled(node, cred.name));
    }
    /**
    * Checks if the given node needs agentInput
    */
    function needsAgentInput(node) {
      const nodeTypesNeedModal = [WIKIPEDIA_TOOL_NODE_TYPE, AI_MCP_TOOL_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE];
      const collectedArgs = [];
      traverseNodeParameters(node.parameters, collectedArgs);
      return collectedArgs.length > 0 || nodeTypesNeedModal.includes(node.type) || node.type.includes("vectorStore") && node.parameters?.mode === "retrieve-as-tool";
    }
    /**
    * Filters out options that should not be displayed
    */
    function getParameterDisplayableOptions(options, node) {
      if (!node) return options;
      const nodeType = node?.type ? useNodeTypesStore().getNodeType(node.type, node.typeVersion) : null;
      if (!nodeType || !Array.isArray(nodeType.properties)) return options;
      const nodeParameters = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? node.parameters;
      return options.filter(option => {
        if (!option.displayOptions && !option.disabledOptions) return true;
        return displayParameter(nodeParameters, option, node, nodeType, void 0, "displayOptions");
      });
    }

    //#endregion
    _export({
      a: needsAgentInput,
      i: getParameterDisplayableOptions,
      n: doesNodeHaveCredentialsToFill,
      r: getNodeTypeDisplayableCredentials,
      t: doesNodeHaveAllCredentialsFilled
    });
    return {
      setters: [function (_useTelemetryLegacy00FJs) {
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
      }, function (_constantsLegacy00NJs) {
        AI_CODE_TOOL_LANGCHAIN_NODE_TYPE = _constantsLegacy00NJs.Ga;
        traverseNodeParameters = _constantsLegacy00NJs.Ur;
        WIKIPEDIA_TOOL_NODE_TYPE = _constantsLegacy00NJs.kn;
        displayParameter = _constantsLegacy00NJs.mi;
        AI_MCP_TOOL_NODE_TYPE = _constantsLegacy00NJs.q;
        getNodeParameters = _constantsLegacy00NJs.yi;
      }],
      execute: function () {}
    };
  });
})();