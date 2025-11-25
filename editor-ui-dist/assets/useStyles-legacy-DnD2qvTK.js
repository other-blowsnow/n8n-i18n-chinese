;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    var APP_Z_INDEXES, setAppZIndexes, useStyles;
    return {
      setters: [],
      execute: function () {
        //#region src/app/composables/useStyles.ts
        APP_Z_INDEXES = {
          CONTEXT_MENU: 10,
          APP_HEADER: 99,
          SELECT_BOX: 100,
          CANVAS_ADD_BUTTON: 101,
          APP_SIDEBAR: 999,
          CANVAS_SELECT_BOX: 100,
          TOP_BANNERS: 999,
          NODE_CREATOR: 1700,
          ASK_ASSISTANT_CHAT: 1750,
          NDV: 1800,
          COMMAND_BAR: 1900,
          MODALS: 2e3,
          TOASTS: 2100,
          ASK_ASSISTANT_FLOATING_BUTTON: 3e3,
          ASK_ASSISTANT_FLOATING_BUTTON_TOOLTIP: 3e3,
          CODEMIRROR_TOOLTIP: 3e3,
          DRAGGABLE: 9999999,
          ACTIVE_STICKY: 9999999,
          WORKFLOW_PREVIEW_NDV: 9999999,
          NPS_SURVEY_MODAL: 3001
        };
        setAppZIndexes = () => {
          Object.keys(APP_Z_INDEXES).forEach(key => {
            const variableName = `--${key.toLowerCase().replaceAll("_", "-")}--z`;
            const value = APP_Z_INDEXES[key];
            document.documentElement.style.setProperty(variableName, `${value}`);
          });
        };
        _export("t", useStyles = () => ({
          APP_Z_INDEXES,
          setAppZIndexes
        })); //#endregion
      }
    };
  });
})();