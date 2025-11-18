;
(function () {
  System.register(["./truncate-legacy-Bk9bFklR.js"], function (_export, _context) {
    "use strict";

    var createEventBus, sourceControlEventBus;
    return {
      setters: [function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }],
      execute: function () {
        //#region src/features/integrations/sourceControl.ee/sourceControl.eventBus.ts
        _export("t", sourceControlEventBus = createEventBus()); //#endregion
      }
    };
  });
})();