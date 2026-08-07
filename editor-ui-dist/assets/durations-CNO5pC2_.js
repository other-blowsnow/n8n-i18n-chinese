//#region src/app/constants/durations.ts
/**
* Performance Optimizations
*/
var LOGS_EXECUTION_DATA_THROTTLE_DURATION = 1e3;
var EXPRESSION_EDITOR_PARSER_TIMEOUT = 15e3;
/**
* Units of time in milliseconds
*/
var TIME = {
	SECOND: 1e3,
	MINUTE: 60 * 1e3,
	HOUR: 3600 * 1e3,
	DAY: 1440 * 60 * 1e3
};
var THREE_DAYS_IN_MILLIS = 3 * TIME.DAY;
var SEVEN_DAYS_IN_MILLIS = 7 * TIME.DAY;
var SIX_MONTHS_IN_MILLIS = 180 * TIME.DAY;
var LOADING_ANIMATION_MIN_DURATION = 1e3;
/** Hover-intent delays for reveal-on-hover affordances (e.g. a collapsed group's description). */
var HOVER_DELAY = {
	SHOW: 300,
	LEAVE: 150
};
/** Centralized debounce timing constants. Use with getDebounceTime(). */
var DEBOUNCE_TIME = {
	UI: {
		RESIZE: 50,
		QUICK: 10
	},
	INPUT: {
		VALIDATION: 100,
		TEXT_CHANGE: 200,
		SEARCH: 300
	},
	API: {
		RESOURCE_SEARCH: 500,
		HEAVY_OPERATION: 1e3,
		AUTOSAVE: 1500,
		AUTOSAVE_MAX_WAIT: 5e3
	},
	TELEMETRY: {
		BATCH: 2e3,
		TRACK: 1e3
	},
	COLLABORATION: { ACTIVITY: 100 },
	CONNECTION: { WEBSOCKET_DISCONNECT: 500 }
};
//#endregion
export { LOGS_EXECUTION_DATA_THROTTLE_DURATION as a, THREE_DAYS_IN_MILLIS as c, LOADING_ANIMATION_MIN_DURATION as i, TIME as l, EXPRESSION_EDITOR_PARSER_TIMEOUT as n, SEVEN_DAYS_IN_MILLIS as o, HOVER_DELAY as r, SIX_MONTHS_IN_MILLIS as s, DEBOUNCE_TIME as t };
