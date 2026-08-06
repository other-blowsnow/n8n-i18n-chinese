//#region ../@n8n/frontend-constants/dist/z-indexes.mjs
/**
* Application-wide z-index scale.
*
* Every z-index that matters at the application level belongs here so the
* stacking order is documented in one place and shared across packages.
* Values are injected as CSS custom properties at bootstrap by
* `setAppZIndexes` in `@n8n/composables/useStyles`.
*/
var APP_Z_INDEXES = {
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
	DIALOGS: 1950,
	MODALS: 2e3,
	TOASTS: 2100,
	ASK_ASSISTANT_FLOATING_BUTTON: 3e3,
	ASK_ASSISTANT_FLOATING_BUTTON_TOOLTIP: 3e3,
	CODEMIRROR_TOOLTIP: 3e3,
	FLOATING_UI: 3e3,
	DRAGGABLE: 9999999,
	ACTIVE_STICKY: 9999999,
	WORKFLOW_PREVIEW_NDV: 9999999,
	NPS_SURVEY_MODAL: 3001
};
//#endregion
export { APP_Z_INDEXES as t };
