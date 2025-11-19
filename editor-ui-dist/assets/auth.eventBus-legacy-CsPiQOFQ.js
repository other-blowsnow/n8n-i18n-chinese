;
(function () {
  System.register(["./truncate-legacy-Bk9bFklR.js"], function (_export, _context) {
    "use strict";

    var createEventBus, confirmPasswordEventBus, mfaEventBus, promptMfaCodeBus;
    return {
      setters: [function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }],
      execute: function () {
        //#region src/features/core/auth/auth.eventBus.ts
        _export("t", confirmPasswordEventBus = createEventBus());
        _export("n", mfaEventBus = createEventBus());
        /**
        * Event bus for transmitting the MFA code from a modal back to the view
        */
        _export("r", promptMfaCodeBus = createEventBus()); //#endregion
      }
    };
  });
})();