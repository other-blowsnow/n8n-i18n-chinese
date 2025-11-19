;
(function () {
  System.register(["./nodeTransforms-legacy-B6vSYCn_.js"], function (_export, _context) {
    "use strict";

    var getNodeTypeDisplayableCredentials, keyFromCredentialTypeAndName, normalizeTemplateNodeCredentials, getReplacedTemplateNodeCredentials, getMissingTemplateNodeCredentials, replaceAllTemplateNodeCredentials;
    return {
      setters: [function (_nodeTransformsLegacy02nJs) {
        getNodeTypeDisplayableCredentials = _nodeTransformsLegacy02nJs.r;
      }],
      execute: function () {
        //#region src/features/workflows/templates/utils/templateTransforms.ts
        /**
        * Forms a key from credential type name and credential name
        */
        _export("t", keyFromCredentialTypeAndName = (credentialTypeName, credentialName) => `${credentialTypeName}-${credentialName}`);
        /**
        * Normalizes the credentials of a template node. Templates created with
        * different versions of n8n may have different credential formats.
        */
        _export("n", normalizeTemplateNodeCredentials = credentials => {
          if (!credentials) return {};
          return Object.fromEntries(Object.entries(credentials).map(([key, value]) => {
            return typeof value === "string" ? [key, value] : [key, value.name];
          }));
        });
        /**
        * Replaces the credentials of a node with the given replacements
        *
        * @example
        * const nodeCredentials = { twitterOAuth1Api: "twitter" };
        * const toReplaceByKey = { 'twitterOAuth1Api-twitter': {
        *   id: "BrEOZ5Cje6VYh9Pc",
        *   name: "X OAuth account"
        * }};
        * replaceTemplateNodeCredentials(nodeCredentials, toReplaceByKey);
        * // => { twitterOAuth1Api: { id: "BrEOZ5Cje6VYh9Pc", name: "X OAuth account" } }
        */
        getReplacedTemplateNodeCredentials = (nodeCredentials, toReplaceByKey) => {
          if (!nodeCredentials) return;
          const replacedNodeCredentials = {};
          const normalizedCredentials = normalizeTemplateNodeCredentials(nodeCredentials);
          for (const credentialType in normalizedCredentials) {
            const credentialNameInTemplate = normalizedCredentials[credentialType];
            const toReplaceWith = toReplaceByKey[keyFromCredentialTypeAndName(credentialType, credentialNameInTemplate)];
            if (toReplaceWith) replacedNodeCredentials[credentialType] = toReplaceWith;
          }
          return replacedNodeCredentials;
        };
        /**
        * Returns credentials for the given node that are missing from it
        * but are present in the given replacements
        */
        getMissingTemplateNodeCredentials = (nodeTypeProvider, node, replacementsByKey) => {
          const nodeCredentialsToAdd = {};
          const usableCredentials = getNodeTypeDisplayableCredentials(nodeTypeProvider, node);
          for (const usableCred of usableCredentials) {
            const credentialKey = keyFromCredentialTypeAndName(usableCred.name, "");
            if (replacementsByKey[credentialKey]) nodeCredentialsToAdd[usableCred.name] = replacementsByKey[credentialKey];
          }
          return nodeCredentialsToAdd;
        };
        /**
        * Replaces the credentials of all template workflow nodes with the given
        * replacements
        */
        _export("r", replaceAllTemplateNodeCredentials = (nodeTypeProvider, nodes, toReplaceWith) => {
          return nodes.map(node => {
            const replacedCredentials = getReplacedTemplateNodeCredentials(node.credentials, toReplaceWith);
            const newCredentials = getMissingTemplateNodeCredentials(nodeTypeProvider, node, toReplaceWith);
            const credentials = {
              ...replacedCredentials,
              ...newCredentials
            };
            return {
              ...node,
              credentials: Object.keys(credentials).length > 0 ? credentials : void 0
            };
          });
        }); //#endregion
      }
    };
  });
})();