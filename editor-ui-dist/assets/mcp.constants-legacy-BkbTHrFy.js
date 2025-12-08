;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var MCP_SETTINGS_VIEW, MCP_STORE, LOADING_INDICATOR_TIMEOUT, MCP_DOCS_PAGE_URL;
    return {
      setters: [],
      execute: function () {
        //#region src/features/ai/mcpAccess/mcp.constants.ts
        _export("r", MCP_SETTINGS_VIEW = "McpSettings");
        _export("i", MCP_STORE = "mcp");
        _export("t", LOADING_INDICATOR_TIMEOUT = 200);
        _export("n", MCP_DOCS_PAGE_URL = "https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server"); //#endregion
      }
    };
  });
})();