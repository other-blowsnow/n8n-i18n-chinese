import { En as init_dist, I as h, N as defineComponent, Tn as global, W as nextTick, at as resolveComponent, r as TransitionGroup } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
//#region ../../../node_modules/.pnpm/sortablejs@1.14.0/node_modules/sortablejs/modular/sortable.esm.js
/**!
* Sortable 1.14.0
* @author	RubaXa   <trash@rubaxa.org>
* @author	owenm    <owen23355@gmail.com>
* @license MIT
*/
function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys.push.apply(keys, symbols);
	}
	return keys;
}
function _objectSpread2(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};
		if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
			_defineProperty(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
function _typeof(obj) {
	"@babel/helpers - typeof";
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
		return typeof obj;
	};
	else _typeof = function(obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	return _typeof(obj);
}
function _defineProperty(obj, key, value) {
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
var version = "1.14.0";
function userAgent(pattern) {
	if (typeof window !== "undefined" && window.navigator) return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
	capture: false,
	passive: false
};
function on(el, event, fn) {
	el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
	el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
	if (!selector) return;
	selector[0] === ">" && (selector = selector.substring(1));
	if (el) try {
		if (el.matches) return el.matches(selector);
		else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
		else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
	} catch (_) {
		return false;
	}
	return false;
}
function getParentOrHost(el) {
	return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
	if (el) {
		ctx = ctx || document;
		do {
			if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
			if (el === ctx) break;
		} while (el = getParentOrHost(el));
	}
	return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
	if (el && name) if (el.classList) el.classList[state ? "add" : "remove"](name);
	else el.className = ((" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ") + (state ? " " + name : "")).replace(R_SPACE, " ");
}
function css(el, prop, val) {
	var style = el && el.style;
	if (style) if (val === void 0) {
		if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, "");
		else if (el.currentStyle) val = el.currentStyle;
		return prop === void 0 ? val : val[prop];
	} else {
		if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
		style[prop] = val + (typeof val === "string" ? "" : "px");
	}
}
function matrix(el, selfOnly) {
	var appliedTransforms = "";
	if (typeof el === "string") appliedTransforms = el;
	else do {
		var transform = css(el, "transform");
		if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
	} while (!selfOnly && (el = el.parentNode));
	var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
	if (ctx) {
		var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
		if (iterator) for (; i < n; i++) iterator(list[i], i);
		return list;
	}
	return [];
}
function getWindowScrollingElement() {
	var scrollingElement = document.scrollingElement;
	if (scrollingElement) return scrollingElement;
	else return document.documentElement;
}
/**
* Returns the "bounding client rect" of given element
* @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
* @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
* @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
* @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
* @param  {[HTMLElement]} container              The parent the element will be placed in
* @return {Object}                               The boundingClientRect of el, with specified adjustments
*/
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
	if (!el.getBoundingClientRect && el !== window) return;
	var elRect, top, left, bottom, right, height, width;
	if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
		elRect = el.getBoundingClientRect();
		top = elRect.top;
		left = elRect.left;
		bottom = elRect.bottom;
		right = elRect.right;
		height = elRect.height;
		width = elRect.width;
	} else {
		top = 0;
		left = 0;
		bottom = window.innerHeight;
		right = window.innerWidth;
		height = window.innerHeight;
		width = window.innerWidth;
	}
	if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
		container = container || el.parentNode;
		if (!IE11OrLess) do
			if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
				var containerRect = container.getBoundingClientRect();
				top -= containerRect.top + parseInt(css(container, "border-top-width"));
				left -= containerRect.left + parseInt(css(container, "border-left-width"));
				bottom = top + elRect.height;
				right = left + elRect.width;
				break;
			}
		while (container = container.parentNode);
	}
	if (undoScale && el !== window) {
		var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
		if (elMatrix) {
			top /= scaleY;
			left /= scaleX;
			width /= scaleX;
			height /= scaleY;
			bottom = top + height;
			right = left + width;
		}
	}
	return {
		top,
		left,
		bottom,
		right,
		width,
		height
	};
}
/**
* Checks if a side of an element is scrolled past a side of its parents
* @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
* @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
* @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
* @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
*/
function isScrolledPast(el, elSide, parentSide) {
	var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
	while (parent) {
		var parentSideVal = getRect(parent)[parentSide], visible = void 0;
		if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal;
		else visible = elSideVal <= parentSideVal;
		if (!visible) return parent;
		if (parent === getWindowScrollingElement()) break;
		parent = getParentAutoScrollElement(parent, false);
	}
	return false;
}
/**
* Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
* and non-draggable elements
* @param  {HTMLElement} el       The parent element
* @param  {Number} childNum      The index of the child
* @param  {Object} options       Parent Sortable's options
* @return {HTMLElement}          The child at index childNum, or null if not found
*/
function getChild(el, childNum, options, includeDragEl) {
	var currentChild = 0, i = 0, children = el.children;
	while (i < children.length) {
		if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
			if (currentChild === childNum) return children[i];
			currentChild++;
		}
		i++;
	}
	return null;
}
/**
* Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
* @param  {HTMLElement} el       Parent element
* @param  {selector} selector    Any other elements that should be ignored
* @return {HTMLElement}          The last child, ignoring ghostEl
*/
function lastChild(el, selector) {
	var last = el.lastElementChild;
	while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) last = last.previousElementSibling;
	return last || null;
}
/**
* Returns the index of an element within its parent for a selected set of
* elements
* @param  {HTMLElement} el
* @param  {selector} selector
* @return {number}
*/
function index(el, selector) {
	var index = 0;
	if (!el || !el.parentNode) return -1;
	while (el = el.previousElementSibling) if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
	return index;
}
/**
* Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
* The value is returned in real pixels.
* @param  {HTMLElement} el
* @return {Array}             Offsets in the format of [left, top]
*/
function getRelativeScrollOffset(el) {
	var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
	if (el) do {
		var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
		offsetLeft += el.scrollLeft * scaleX;
		offsetTop += el.scrollTop * scaleY;
	} while (el !== winScroller && (el = el.parentNode));
	return [offsetLeft, offsetTop];
}
/**
* Returns the index of the object within the given array
* @param  {Array} arr   Array that may or may not hold the object
* @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
* @return {Number}      The index of the object in the array, or -1
*/
function indexOfObject(arr, obj) {
	for (var i in arr) {
		if (!arr.hasOwnProperty(i)) continue;
		for (var key in obj) if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
	}
	return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
	if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
	var elem = el;
	var gotSelf = false;
	do
		if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
			var elemCSS = css(elem);
			if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
				if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
				if (gotSelf || includeSelf) return elem;
				gotSelf = true;
			}
		}
	while (elem = elem.parentNode);
	return getWindowScrollingElement();
}
function extend(dst, src) {
	if (dst && src) {
		for (var key in src) if (src.hasOwnProperty(key)) dst[key] = src[key];
	}
	return dst;
}
function isRectEqual(rect1, rect2) {
	return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
	return function() {
		if (!_throttleTimeout) {
			var args = arguments, _this = this;
			if (args.length === 1) callback.call(_this, args[0]);
			else callback.apply(_this, args);
			_throttleTimeout = setTimeout(function() {
				_throttleTimeout = void 0;
			}, ms);
		}
	};
}
function cancelThrottle() {
	clearTimeout(_throttleTimeout);
	_throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
	el.scrollLeft += x;
	el.scrollTop += y;
}
function clone(el) {
	var Polymer = window.Polymer;
	var $ = window.jQuery || window.Zepto;
	if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
	else if ($) return $(el).clone(true)[0];
	else return el.cloneNode(true);
}
var expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function AnimationStateManager() {
	var animationStates = [], animationCallbackId;
	return {
		captureAnimationState: function captureAnimationState() {
			animationStates = [];
			if (!this.options.animation) return;
			[].slice.call(this.el.children).forEach(function(child) {
				if (css(child, "display") === "none" || child === Sortable.ghost) return;
				animationStates.push({
					target: child,
					rect: getRect(child)
				});
				var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
				if (child.thisAnimationDuration) {
					var childMatrix = matrix(child, true);
					if (childMatrix) {
						fromRect.top -= childMatrix.f;
						fromRect.left -= childMatrix.e;
					}
				}
				child.fromRect = fromRect;
			});
		},
		addAnimationState: function addAnimationState(state) {
			animationStates.push(state);
		},
		removeAnimationState: function removeAnimationState(target) {
			animationStates.splice(indexOfObject(animationStates, { target }), 1);
		},
		animateAll: function animateAll(callback) {
			var _this = this;
			if (!this.options.animation) {
				clearTimeout(animationCallbackId);
				if (typeof callback === "function") callback();
				return;
			}
			var animating = false, animationTime = 0;
			animationStates.forEach(function(state) {
				var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
				if (targetMatrix) {
					toRect.top -= targetMatrix.f;
					toRect.left -= targetMatrix.e;
				}
				target.toRect = toRect;
				if (target.thisAnimationDuration) {
					if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
				}
				if (!isRectEqual(toRect, fromRect)) {
					target.prevFromRect = fromRect;
					target.prevToRect = toRect;
					if (!time) time = _this.options.animation;
					_this.animate(target, animatingRect, toRect, time);
				}
				if (time) {
					animating = true;
					animationTime = Math.max(animationTime, time);
					clearTimeout(target.animationResetTimer);
					target.animationResetTimer = setTimeout(function() {
						target.animationTime = 0;
						target.prevFromRect = null;
						target.fromRect = null;
						target.prevToRect = null;
						target.thisAnimationDuration = null;
					}, time);
					target.thisAnimationDuration = time;
				}
			});
			clearTimeout(animationCallbackId);
			if (!animating) {
				if (typeof callback === "function") callback();
			} else animationCallbackId = setTimeout(function() {
				if (typeof callback === "function") callback();
			}, animationTime);
			animationStates = [];
		},
		animate: function animate(target, currentRect, toRect, duration) {
			if (duration) {
				css(target, "transition", "");
				css(target, "transform", "");
				var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
				target.animatingX = !!translateX;
				target.animatingY = !!translateY;
				css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
				this.forRepaintDummy = repaint(target);
				css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
				css(target, "transform", "translate3d(0,0,0)");
				typeof target.animated === "number" && clearTimeout(target.animated);
				target.animated = setTimeout(function() {
					css(target, "transition", "");
					css(target, "transform", "");
					target.animated = false;
					target.animatingX = false;
					target.animatingY = false;
				}, duration);
			}
		}
	};
}
function repaint(target) {
	return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
	return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = { initializeByDefault: true };
var PluginManager = {
	mount: function mount(plugin) {
		for (var option in defaults) if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
		plugins.forEach(function(p) {
			if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
		});
		plugins.push(plugin);
	},
	pluginEvent: function pluginEvent(eventName, sortable, evt) {
		var _this = this;
		this.eventCanceled = false;
		evt.cancel = function() {
			_this.eventCanceled = true;
		};
		var eventNameGlobal = eventName + "Global";
		plugins.forEach(function(plugin) {
			if (!sortable[plugin.pluginName]) return;
			if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({ sortable }, evt));
			if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({ sortable }, evt));
		});
	},
	initializePlugins: function initializePlugins(sortable, el, defaults, options) {
		plugins.forEach(function(plugin) {
			var pluginName = plugin.pluginName;
			if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
			var initialized = new plugin(sortable, el, sortable.options);
			initialized.sortable = sortable;
			initialized.options = sortable.options;
			sortable[pluginName] = initialized;
			_extends(defaults, initialized.defaults);
		});
		for (var option in sortable.options) {
			if (!sortable.options.hasOwnProperty(option)) continue;
			var modified = this.modifyOption(sortable, option, sortable.options[option]);
			if (typeof modified !== "undefined") sortable.options[option] = modified;
		}
	},
	getEventProperties: function getEventProperties(name, sortable) {
		var eventProperties = {};
		plugins.forEach(function(plugin) {
			if (typeof plugin.eventProperties !== "function") return;
			_extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
		});
		return eventProperties;
	},
	modifyOption: function modifyOption(sortable, name, value) {
		var modifiedValue;
		plugins.forEach(function(plugin) {
			if (!sortable[plugin.pluginName]) return;
			if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
		});
		return modifiedValue;
	}
};
function dispatchEvent(_ref) {
	var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
	sortable = sortable || rootEl && rootEl[expando];
	if (!sortable) return;
	var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
	if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
		bubbles: true,
		cancelable: true
	});
	else {
		evt = document.createEvent("Event");
		evt.initEvent(name, true, true);
	}
	evt.to = toEl || rootEl;
	evt.from = fromEl || rootEl;
	evt.item = targetEl || rootEl;
	evt.clone = cloneEl;
	evt.oldIndex = oldIndex;
	evt.newIndex = newIndex;
	evt.oldDraggableIndex = oldDraggableIndex;
	evt.newDraggableIndex = newDraggableIndex;
	evt.originalEvent = originalEvent;
	evt.pullMode = putSortable ? putSortable.lastPutMode : void 0;
	var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
	for (var option in allEventProperties) evt[option] = allEventProperties[option];
	if (rootEl) rootEl.dispatchEvent(evt);
	if (options[onName]) options[onName].call(sortable, evt);
}
var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
	var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
	PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
		dragEl,
		parentEl,
		ghostEl,
		rootEl,
		nextEl,
		lastDownEl,
		cloneEl,
		cloneHidden,
		dragStarted: moved,
		putSortable,
		activeSortable: Sortable.active,
		originalEvent,
		oldIndex,
		oldDraggableIndex,
		newIndex,
		newDraggableIndex,
		hideGhostForTarget: _hideGhostForTarget,
		unhideGhostForTarget: _unhideGhostForTarget,
		cloneNowHidden: function cloneNowHidden() {
			cloneHidden = true;
		},
		cloneNowShown: function cloneNowShown() {
			cloneHidden = false;
		},
		dispatchSortableEvent: function dispatchSortableEvent(name) {
			_dispatchEvent({
				sortable,
				name,
				originalEvent
			});
		}
	}, data));
};
function _dispatchEvent(info) {
	dispatchEvent(_objectSpread2({
		putSortable,
		cloneEl,
		targetEl: dragEl,
		rootEl,
		oldIndex,
		oldDraggableIndex,
		newIndex,
		newDraggableIndex
	}, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
/** @const */
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
	if (!documentExists) return;
	if (IE11OrLess) return false;
	var el = document.createElement("x");
	el.style.cssText = "pointer-events:auto";
	return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection(el, options) {
	var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
	if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
	if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
	if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
		var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
		return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
	}
	return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
	var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
	return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
	var ret;
	sortables.some(function(sortable) {
		var threshold = sortable[expando].options.emptyInsertThreshold;
		if (!threshold || lastChild(sortable)) return;
		var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
		if (insideHorizontally && insideVertically) return ret = sortable;
	});
	return ret;
}, _prepareGroup = function _prepareGroup(options) {
	function toFn(value, pull) {
		return function(to, from, dragEl, evt) {
			var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
			if (value == null && (pull || sameGroup)) return true;
			else if (value == null || value === false) return false;
			else if (pull && value === "clone") return value;
			else if (typeof value === "function") return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
			else {
				var otherGroup = (pull ? to : from).options.group.name;
				return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
			}
		};
	}
	var group = {};
	var originalGroup = options.group;
	if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = { name: originalGroup };
	group.name = originalGroup.name;
	group.checkPull = toFn(originalGroup.pull, true);
	group.checkPut = toFn(originalGroup.put);
	group.revertClone = originalGroup.revertClone;
	options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
	if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
	if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
};
if (documentExists) document.addEventListener("click", function(evt) {
	if (ignoreNextClick) {
		evt.preventDefault();
		evt.stopPropagation && evt.stopPropagation();
		evt.stopImmediatePropagation && evt.stopImmediatePropagation();
		ignoreNextClick = false;
		return false;
	}
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
	if (dragEl) {
		evt = evt.touches ? evt.touches[0] : evt;
		var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
		if (nearest) {
			var event = {};
			for (var i in evt) if (evt.hasOwnProperty(i)) event[i] = evt[i];
			event.target = event.rootEl = nearest;
			event.preventDefault = void 0;
			event.stopPropagation = void 0;
			nearest[expando]._onDragOver(event);
		}
	}
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
	if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
* @class  Sortable
* @param  {HTMLElement}  el
* @param  {Object}       [options]
*/
function Sortable(el, options) {
	if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
	this.el = el;
	this.options = options = _extends({}, options);
	el[expando] = this;
	var defaults = {
		group: null,
		sort: true,
		disabled: false,
		store: null,
		handle: null,
		draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
		swapThreshold: 1,
		invertSwap: false,
		invertedSwapThreshold: null,
		removeCloneOnHide: true,
		direction: function direction() {
			return _detectDirection(el, this.options);
		},
		ghostClass: "sortable-ghost",
		chosenClass: "sortable-chosen",
		dragClass: "sortable-drag",
		ignore: "a, img",
		filter: null,
		preventOnFilter: true,
		animation: 0,
		easing: null,
		setData: function setData(dataTransfer, dragEl) {
			dataTransfer.setData("Text", dragEl.textContent);
		},
		dropBubble: false,
		dragoverBubble: false,
		dataIdAttr: "data-id",
		delay: 0,
		delayOnTouchOnly: false,
		touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
		forceFallback: false,
		fallbackClass: "sortable-fallback",
		fallbackOnBody: false,
		fallbackTolerance: 0,
		fallbackOffset: {
			x: 0,
			y: 0
		},
		supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
		emptyInsertThreshold: 5
	};
	PluginManager.initializePlugins(this, el, defaults);
	for (var name in defaults) !(name in options) && (options[name] = defaults[name]);
	_prepareGroup(options);
	for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
	this.nativeDraggable = options.forceFallback ? false : supportDraggable;
	if (this.nativeDraggable) this.options.touchStartThreshold = 1;
	if (options.supportPointer) on(el, "pointerdown", this._onTapStart);
	else {
		on(el, "mousedown", this._onTapStart);
		on(el, "touchstart", this._onTapStart);
	}
	if (this.nativeDraggable) {
		on(el, "dragover", this);
		on(el, "dragenter", this);
	}
	sortables.push(this.el);
	options.store && options.store.get && this.sort(options.store.get(this) || []);
	_extends(this, AnimationStateManager());
}
Sortable.prototype = (
/** @lends Sortable.prototype */
{
	constructor: Sortable,
	_isOutsideThisEl: function _isOutsideThisEl(target) {
		if (!this.el.contains(target) && target !== this.el) lastTarget = null;
	},
	_getDirection: function _getDirection(evt, target) {
		return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
	},
	_onTapStart: function _onTapStart(evt) {
		if (!evt.cancelable) return;
		var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
		_saveInputCheckedState(el);
		if (dragEl) return;
		if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return;
		if (originalTarget.isContentEditable) return;
		if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") return;
		target = closest(target, options.draggable, el, false);
		if (target && target.animated) return;
		if (lastDownEl === target) return;
		oldIndex = index(target);
		oldDraggableIndex = index(target, options.draggable);
		if (typeof filter === "function") {
			if (filter.call(this, evt, target, this)) {
				_dispatchEvent({
					sortable: _this,
					rootEl: originalTarget,
					name: "filter",
					targetEl: target,
					toEl: el,
					fromEl: el
				});
				pluginEvent("filter", _this, { evt });
				preventOnFilter && evt.cancelable && evt.preventDefault();
				return;
			}
		} else if (filter) {
			filter = filter.split(",").some(function(criteria) {
				criteria = closest(originalTarget, criteria.trim(), el, false);
				if (criteria) {
					_dispatchEvent({
						sortable: _this,
						rootEl: criteria,
						name: "filter",
						targetEl: target,
						fromEl: el,
						toEl: el
					});
					pluginEvent("filter", _this, { evt });
					return true;
				}
			});
			if (filter) {
				preventOnFilter && evt.cancelable && evt.preventDefault();
				return;
			}
		}
		if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
		this._prepareDragStart(evt, touch, target);
	},
	_prepareDragStart: function _prepareDragStart(evt, touch, target) {
		var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
		if (target && !dragEl && target.parentNode === el) {
			var dragRect = getRect(target);
			rootEl = el;
			dragEl = target;
			parentEl = dragEl.parentNode;
			nextEl = dragEl.nextSibling;
			lastDownEl = target;
			activeGroup = options.group;
			Sortable.dragged = dragEl;
			tapEvt = {
				target: dragEl,
				clientX: (touch || evt).clientX,
				clientY: (touch || evt).clientY
			};
			tapDistanceLeft = tapEvt.clientX - dragRect.left;
			tapDistanceTop = tapEvt.clientY - dragRect.top;
			this._lastX = (touch || evt).clientX;
			this._lastY = (touch || evt).clientY;
			dragEl.style["will-change"] = "all";
			dragStartFn = function dragStartFn() {
				pluginEvent("delayEnded", _this, { evt });
				if (Sortable.eventCanceled) {
					_this._onDrop();
					return;
				}
				_this._disableDelayedDragEvents();
				if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
				_this._triggerDragStart(evt, touch);
				_dispatchEvent({
					sortable: _this,
					name: "choose",
					originalEvent: evt
				});
				toggleClass(dragEl, options.chosenClass, true);
			};
			options.ignore.split(",").forEach(function(criteria) {
				find(dragEl, criteria.trim(), _disableDraggable);
			});
			on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
			on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
			on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
			on(ownerDocument, "mouseup", _this._onDrop);
			on(ownerDocument, "touchend", _this._onDrop);
			on(ownerDocument, "touchcancel", _this._onDrop);
			if (FireFox && this.nativeDraggable) {
				this.options.touchStartThreshold = 4;
				dragEl.draggable = true;
			}
			pluginEvent("delayStart", this, { evt });
			if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
				if (Sortable.eventCanceled) {
					this._onDrop();
					return;
				}
				on(ownerDocument, "mouseup", _this._disableDelayedDrag);
				on(ownerDocument, "touchend", _this._disableDelayedDrag);
				on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
				on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
				on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
				options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
				_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
			} else dragStartFn();
		}
	},
	_delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
		var touch = e.touches ? e.touches[0] : e;
		if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
	},
	_disableDelayedDrag: function _disableDelayedDrag() {
		dragEl && _disableDraggable(dragEl);
		clearTimeout(this._dragStartTimer);
		this._disableDelayedDragEvents();
	},
	_disableDelayedDragEvents: function _disableDelayedDragEvents() {
		var ownerDocument = this.el.ownerDocument;
		off(ownerDocument, "mouseup", this._disableDelayedDrag);
		off(ownerDocument, "touchend", this._disableDelayedDrag);
		off(ownerDocument, "touchcancel", this._disableDelayedDrag);
		off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
		off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
		off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
	},
	_triggerDragStart: function _triggerDragStart(evt, touch) {
		touch = touch || evt.pointerType == "touch" && evt;
		if (!this.nativeDraggable || touch) if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove);
		else if (touch) on(document, "touchmove", this._onTouchMove);
		else on(document, "mousemove", this._onTouchMove);
		else {
			on(dragEl, "dragend", this);
			on(rootEl, "dragstart", this._onDragStart);
		}
		try {
			if (document.selection) _nextTick(function() {
				document.selection.empty();
			});
			else window.getSelection().removeAllRanges();
		} catch (err) {}
	},
	_dragStarted: function _dragStarted(fallback, evt) {
		awaitingDragStarted = false;
		if (rootEl && dragEl) {
			pluginEvent("dragStarted", this, { evt });
			if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
			var options = this.options;
			!fallback && toggleClass(dragEl, options.dragClass, false);
			toggleClass(dragEl, options.ghostClass, true);
			Sortable.active = this;
			fallback && this._appendGhost();
			_dispatchEvent({
				sortable: this,
				name: "start",
				originalEvent: evt
			});
		} else this._nulling();
	},
	_emulateDragOver: function _emulateDragOver() {
		if (touchEvt) {
			this._lastX = touchEvt.clientX;
			this._lastY = touchEvt.clientY;
			_hideGhostForTarget();
			var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
			var parent = target;
			while (target && target.shadowRoot) {
				target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				if (target === parent) break;
				parent = target;
			}
			dragEl.parentNode[expando]._isOutsideThisEl(target);
			if (parent) do {
				if (parent[expando]) {
					var inserted = void 0;
					inserted = parent[expando]._onDragOver({
						clientX: touchEvt.clientX,
						clientY: touchEvt.clientY,
						target,
						rootEl: parent
					});
					if (inserted && !this.options.dragoverBubble) break;
				}
				target = parent;
			} while (parent = parent.parentNode);
			_unhideGhostForTarget();
		}
	},
	_onTouchMove: function _onTouchMove(evt) {
		if (tapEvt) {
			var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
			if (!Sortable.active && !awaitingDragStarted) {
				if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
				this._onDragStart(evt, true);
			}
			if (ghostEl) {
				if (ghostMatrix) {
					ghostMatrix.e += dx - (lastDx || 0);
					ghostMatrix.f += dy - (lastDy || 0);
				} else ghostMatrix = {
					a: 1,
					b: 0,
					c: 0,
					d: 1,
					e: dx,
					f: dy
				};
				var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
				css(ghostEl, "webkitTransform", cssMatrix);
				css(ghostEl, "mozTransform", cssMatrix);
				css(ghostEl, "msTransform", cssMatrix);
				css(ghostEl, "transform", cssMatrix);
				lastDx = dx;
				lastDy = dy;
				touchEvt = touch;
			}
			evt.cancelable && evt.preventDefault();
		}
	},
	_appendGhost: function _appendGhost() {
		if (!ghostEl) {
			var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
			if (PositionGhostAbsolutely) {
				ghostRelativeParent = container;
				while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) ghostRelativeParent = ghostRelativeParent.parentNode;
				if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
					if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
					rect.top += ghostRelativeParent.scrollTop;
					rect.left += ghostRelativeParent.scrollLeft;
				} else ghostRelativeParent = getWindowScrollingElement();
				ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
			}
			ghostEl = dragEl.cloneNode(true);
			toggleClass(ghostEl, options.ghostClass, false);
			toggleClass(ghostEl, options.fallbackClass, true);
			toggleClass(ghostEl, options.dragClass, true);
			css(ghostEl, "transition", "");
			css(ghostEl, "transform", "");
			css(ghostEl, "box-sizing", "border-box");
			css(ghostEl, "margin", 0);
			css(ghostEl, "top", rect.top);
			css(ghostEl, "left", rect.left);
			css(ghostEl, "width", rect.width);
			css(ghostEl, "height", rect.height);
			css(ghostEl, "opacity", "0.8");
			css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
			css(ghostEl, "zIndex", "100000");
			css(ghostEl, "pointerEvents", "none");
			Sortable.ghost = ghostEl;
			container.appendChild(ghostEl);
			css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
		}
	},
	_onDragStart: function _onDragStart(evt, fallback) {
		var _this = this;
		var dataTransfer = evt.dataTransfer;
		var options = _this.options;
		pluginEvent("dragStart", this, { evt });
		if (Sortable.eventCanceled) {
			this._onDrop();
			return;
		}
		pluginEvent("setupClone", this);
		if (!Sortable.eventCanceled) {
			cloneEl = clone(dragEl);
			cloneEl.draggable = false;
			cloneEl.style["will-change"] = "";
			this._hideClone();
			toggleClass(cloneEl, this.options.chosenClass, false);
			Sortable.clone = cloneEl;
		}
		_this.cloneId = _nextTick(function() {
			pluginEvent("clone", _this);
			if (Sortable.eventCanceled) return;
			if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
			_this._hideClone();
			_dispatchEvent({
				sortable: _this,
				name: "clone"
			});
		});
		!fallback && toggleClass(dragEl, options.dragClass, true);
		if (fallback) {
			ignoreNextClick = true;
			_this._loopId = setInterval(_this._emulateDragOver, 50);
		} else {
			off(document, "mouseup", _this._onDrop);
			off(document, "touchend", _this._onDrop);
			off(document, "touchcancel", _this._onDrop);
			if (dataTransfer) {
				dataTransfer.effectAllowed = "move";
				options.setData && options.setData.call(_this, dataTransfer, dragEl);
			}
			on(document, "drop", _this);
			css(dragEl, "transform", "translateZ(0)");
		}
		awaitingDragStarted = true;
		_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
		on(document, "selectstart", _this);
		moved = true;
		if (Safari) css(document.body, "user-select", "none");
	},
	_onDragOver: function _onDragOver(evt) {
		var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
		if (_silent) return;
		function dragOverEvent(name, extra) {
			pluginEvent(name, _this, _objectSpread2({
				evt,
				isOwner,
				axis: vertical ? "vertical" : "horizontal",
				revert,
				dragRect,
				targetRect,
				canSort,
				fromSortable,
				target,
				completed,
				onMove: function onMove(target, after) {
					return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
				},
				changed
			}, extra));
		}
		function capture() {
			dragOverEvent("dragOverAnimationCapture");
			_this.captureAnimationState();
			if (_this !== fromSortable) fromSortable.captureAnimationState();
		}
		function completed(insertion) {
			dragOverEvent("dragOverCompleted", { insertion });
			if (insertion) {
				if (isOwner) activeSortable._hideClone();
				else activeSortable._showClone(_this);
				if (_this !== fromSortable) {
					toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
					toggleClass(dragEl, options.ghostClass, true);
				}
				if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
				else if (_this === Sortable.active && putSortable) putSortable = null;
				if (fromSortable === _this) _this._ignoreWhileAnimating = target;
				_this.animateAll(function() {
					dragOverEvent("dragOverAnimationComplete");
					_this._ignoreWhileAnimating = null;
				});
				if (_this !== fromSortable) {
					fromSortable.animateAll();
					fromSortable._ignoreWhileAnimating = null;
				}
			}
			if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
			if (!options.dragoverBubble && !evt.rootEl && target !== document) {
				dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
				!insertion && nearestEmptyInsertDetectEvent(evt);
			}
			!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
			return completedFired = true;
		}
		function changed() {
			newIndex = index(dragEl);
			newDraggableIndex = index(dragEl, options.draggable);
			_dispatchEvent({
				sortable: _this,
				name: "change",
				toEl: el,
				newIndex,
				newDraggableIndex,
				originalEvent: evt
			});
		}
		if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
		target = closest(target, options.draggable, el, true);
		dragOverEvent("dragOver");
		if (Sortable.eventCanceled) return completedFired;
		if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
		ignoreNextClick = false;
		if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
			vertical = this._getDirection(evt, target) === "vertical";
			dragRect = getRect(dragEl);
			dragOverEvent("dragOverValid");
			if (Sortable.eventCanceled) return completedFired;
			if (revert) {
				parentEl = rootEl;
				capture();
				this._hideClone();
				dragOverEvent("revert");
				if (!Sortable.eventCanceled) if (nextEl) rootEl.insertBefore(dragEl, nextEl);
				else rootEl.appendChild(dragEl);
				return completed(true);
			}
			var elLastChild = lastChild(el, options.draggable);
			if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
				if (elLastChild === dragEl) return completed(false);
				if (elLastChild && el === evt.target) target = elLastChild;
				if (target) targetRect = getRect(target);
				if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
					capture();
					el.appendChild(dragEl);
					parentEl = el;
					changed();
					return completed(true);
				}
			} else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
				var firstChild = getChild(el, 0, options, true);
				if (firstChild === dragEl) return completed(false);
				target = firstChild;
				targetRect = getRect(target);
				if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
					capture();
					el.insertBefore(dragEl, firstChild);
					parentEl = el;
					changed();
					return completed(true);
				}
			} else if (target.parentNode === el) {
				targetRect = getRect(target);
				var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
				if (lastTarget !== target) {
					targetBeforeFirstSwap = targetRect[side1];
					pastFirstInvertThresh = false;
					isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
				}
				direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
				var sibling;
				if (direction !== 0) {
					var dragIndex = index(dragEl);
					do {
						dragIndex -= direction;
						sibling = parentEl.children[dragIndex];
					} while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
				}
				if (direction === 0 || sibling === target) return completed(false);
				lastTarget = target;
				lastDirection = direction;
				var nextSibling = target.nextElementSibling, after = false;
				after = direction === 1;
				var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
				if (moveVector !== false) {
					if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
					_silent = true;
					setTimeout(_unsilent, 30);
					capture();
					if (after && !nextSibling) el.appendChild(dragEl);
					else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
					if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
					parentEl = dragEl.parentNode;
					if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
					changed();
					return completed(true);
				}
			}
			if (el.contains(dragEl)) return completed(false);
		}
		return false;
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function _offMoveEvents() {
		off(document, "mousemove", this._onTouchMove);
		off(document, "touchmove", this._onTouchMove);
		off(document, "pointermove", this._onTouchMove);
		off(document, "dragover", nearestEmptyInsertDetectEvent);
		off(document, "mousemove", nearestEmptyInsertDetectEvent);
		off(document, "touchmove", nearestEmptyInsertDetectEvent);
	},
	_offUpEvents: function _offUpEvents() {
		var ownerDocument = this.el.ownerDocument;
		off(ownerDocument, "mouseup", this._onDrop);
		off(ownerDocument, "touchend", this._onDrop);
		off(ownerDocument, "pointerup", this._onDrop);
		off(ownerDocument, "touchcancel", this._onDrop);
		off(document, "selectstart", this);
	},
	_onDrop: function _onDrop(evt) {
		var el = this.el, options = this.options;
		newIndex = index(dragEl);
		newDraggableIndex = index(dragEl, options.draggable);
		pluginEvent("drop", this, { evt });
		parentEl = dragEl && dragEl.parentNode;
		newIndex = index(dragEl);
		newDraggableIndex = index(dragEl, options.draggable);
		if (Sortable.eventCanceled) {
			this._nulling();
			return;
		}
		awaitingDragStarted = false;
		isCircumstantialInvert = false;
		pastFirstInvertThresh = false;
		clearInterval(this._loopId);
		clearTimeout(this._dragStartTimer);
		_cancelNextTick(this.cloneId);
		_cancelNextTick(this._dragStartId);
		if (this.nativeDraggable) {
			off(document, "drop", this);
			off(el, "dragstart", this._onDragStart);
		}
		this._offMoveEvents();
		this._offUpEvents();
		if (Safari) css(document.body, "user-select", "");
		css(dragEl, "transform", "");
		if (evt) {
			if (moved) {
				evt.cancelable && evt.preventDefault();
				!options.dropBubble && evt.stopPropagation();
			}
			ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
			if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
			if (dragEl) {
				if (this.nativeDraggable) off(dragEl, "dragend", this);
				_disableDraggable(dragEl);
				dragEl.style["will-change"] = "";
				if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
				toggleClass(dragEl, this.options.chosenClass, false);
				_dispatchEvent({
					sortable: this,
					name: "unchoose",
					toEl: parentEl,
					newIndex: null,
					newDraggableIndex: null,
					originalEvent: evt
				});
				if (rootEl !== parentEl) {
					if (newIndex >= 0) {
						_dispatchEvent({
							rootEl: parentEl,
							name: "add",
							toEl: parentEl,
							fromEl: rootEl,
							originalEvent: evt
						});
						_dispatchEvent({
							sortable: this,
							name: "remove",
							toEl: parentEl,
							originalEvent: evt
						});
						_dispatchEvent({
							rootEl: parentEl,
							name: "sort",
							toEl: parentEl,
							fromEl: rootEl,
							originalEvent: evt
						});
						_dispatchEvent({
							sortable: this,
							name: "sort",
							toEl: parentEl,
							originalEvent: evt
						});
					}
					putSortable && putSortable.save();
				} else if (newIndex !== oldIndex) {
					if (newIndex >= 0) {
						_dispatchEvent({
							sortable: this,
							name: "update",
							toEl: parentEl,
							originalEvent: evt
						});
						_dispatchEvent({
							sortable: this,
							name: "sort",
							toEl: parentEl,
							originalEvent: evt
						});
					}
				}
				if (Sortable.active) {
					if (newIndex == null || newIndex === -1) {
						newIndex = oldIndex;
						newDraggableIndex = oldDraggableIndex;
					}
					_dispatchEvent({
						sortable: this,
						name: "end",
						toEl: parentEl,
						originalEvent: evt
					});
					this.save();
				}
			}
		}
		this._nulling();
	},
	_nulling: function _nulling() {
		pluginEvent("nulling", this);
		rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
		savedInputChecked.forEach(function(el) {
			el.checked = true;
		});
		savedInputChecked.length = lastDx = lastDy = 0;
	},
	handleEvent: function handleEvent(evt) {
		switch (evt.type) {
			case "drop":
			case "dragend":
				this._onDrop(evt);
				break;
			case "dragenter":
			case "dragover":
				if (dragEl) {
					this._onDragOver(evt);
					_globalDragOver(evt);
				}
				break;
			case "selectstart":
				evt.preventDefault();
				break;
		}
	},
	toArray: function toArray() {
		var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
		for (; i < n; i++) {
			el = children[i];
			if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
		}
		return order;
	},
	sort: function sort(order, useAnimation) {
		var items = {}, rootEl = this.el;
		this.toArray().forEach(function(id, i) {
			var el = rootEl.children[i];
			if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
		}, this);
		useAnimation && this.captureAnimationState();
		order.forEach(function(id) {
			if (items[id]) {
				rootEl.removeChild(items[id]);
				rootEl.appendChild(items[id]);
			}
		});
		useAnimation && this.animateAll();
	},
	save: function save() {
		var store = this.options.store;
		store && store.set && store.set(this);
	},
	closest: function closest$1(el, selector) {
		return closest(el, selector || this.options.draggable, this.el, false);
	},
	option: function option(name, value) {
		var options = this.options;
		if (value === void 0) return options[name];
		else {
			var modifiedValue = PluginManager.modifyOption(this, name, value);
			if (typeof modifiedValue !== "undefined") options[name] = modifiedValue;
			else options[name] = value;
			if (name === "group") _prepareGroup(options);
		}
	},
	destroy: function destroy() {
		pluginEvent("destroy", this);
		var el = this.el;
		el[expando] = null;
		off(el, "mousedown", this._onTapStart);
		off(el, "touchstart", this._onTapStart);
		off(el, "pointerdown", this._onTapStart);
		if (this.nativeDraggable) {
			off(el, "dragover", this);
			off(el, "dragenter", this);
		}
		Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el) {
			el.removeAttribute("draggable");
		});
		this._onDrop();
		this._disableDelayedDragEvents();
		sortables.splice(sortables.indexOf(this.el), 1);
		this.el = el = null;
	},
	_hideClone: function _hideClone() {
		if (!cloneHidden) {
			pluginEvent("hideClone", this);
			if (Sortable.eventCanceled) return;
			css(cloneEl, "display", "none");
			if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
			cloneHidden = true;
		}
	},
	_showClone: function _showClone(putSortable) {
		if (putSortable.lastPutMode !== "clone") {
			this._hideClone();
			return;
		}
		if (cloneHidden) {
			pluginEvent("showClone", this);
			if (Sortable.eventCanceled) return;
			if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
			else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
			else rootEl.appendChild(cloneEl);
			if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
			css(cloneEl, "display", "");
			cloneHidden = false;
		}
	}
});
function _globalDragOver(evt) {
	if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
	evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
	var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
	if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
		bubbles: true,
		cancelable: true
	});
	else {
		evt = document.createEvent("Event");
		evt.initEvent("move", true, true);
	}
	evt.to = toEl;
	evt.from = fromEl;
	evt.dragged = dragEl;
	evt.draggedRect = dragRect;
	evt.related = targetEl || toEl;
	evt.relatedRect = targetRect || getRect(toEl);
	evt.willInsertAfter = willInsertAfter;
	evt.originalEvent = originalEvent;
	fromEl.dispatchEvent(evt);
	if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
	return retVal;
}
function _disableDraggable(el) {
	el.draggable = false;
}
function _unsilent() {
	_silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
	var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
	var spacer = 10;
	return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
	var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
	var spacer = 10;
	return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
	var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
	if (!invertSwap) {
		if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
			if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) pastFirstInvertThresh = true;
			if (!pastFirstInvertThresh) {
				if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
			} else invert = true;
		} else if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
	}
	invert = invert || invertSwap;
	if (invert) {
		if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
	}
	return 0;
}
/**
* Gets the direction dragEl must be swapped relative to target in order to make it
* seem that dragEl has been "inserted" into that element's position
* @param  {HTMLElement} target       The target whose position dragEl is being inserted at
* @return {Number}                   Direction dragEl must be swapped
*/
function _getInsertDirection(target) {
	if (index(dragEl) < index(target)) return 1;
	else return -1;
}
/**
* Generate id
* @param   {HTMLElement} el
* @returns {String}
* @private
*/
function _generateId(el) {
	var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
	while (i--) sum += str.charCodeAt(i);
	return sum.toString(36);
}
function _saveInputCheckedState(root) {
	savedInputChecked.length = 0;
	var inputs = root.getElementsByTagName("input");
	var idx = inputs.length;
	while (idx--) {
		var el = inputs[idx];
		el.checked && savedInputChecked.push(el);
	}
}
function _nextTick(fn) {
	return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
	return clearTimeout(id);
}
if (documentExists) on(document, "touchmove", function(evt) {
	if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
Sortable.utils = {
	on,
	off,
	css,
	find,
	is: function is(el, selector) {
		return !!closest(el, selector, el, false);
	},
	extend,
	throttle,
	closest,
	toggleClass,
	clone,
	index,
	nextTick: _nextTick,
	cancelNextTick: _cancelNextTick,
	detectDirection: _detectDirection,
	getChild
};
/**
* Get the Sortable instance of an element
* @param  {HTMLElement} element The element
* @return {Sortable|undefined}         The instance of Sortable
*/
Sortable.get = function(element) {
	return element[expando];
};
/**
* Mount a plugin to Sortable
* @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
*/
Sortable.mount = function() {
	for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) plugins[_key] = arguments[_key];
	if (plugins[0].constructor === Array) plugins = plugins[0];
	plugins.forEach(function(plugin) {
		if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
		if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
		PluginManager.mount(plugin);
	});
};
/**
* Create sortable instance
* @param {HTMLElement}  el
* @param {Object}      [options]
*/
Sortable.create = function(el, options) {
	return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
	function AutoScroll() {
		this.defaults = {
			scroll: true,
			forceAutoScrollFallback: false,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true
		};
		for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
	}
	AutoScroll.prototype = {
		dragStarted: function dragStarted(_ref) {
			var originalEvent = _ref.originalEvent;
			if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll);
			else if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll);
			else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll);
			else on(document, "mousemove", this._handleFallbackAutoScroll);
		},
		dragOverCompleted: function dragOverCompleted(_ref2) {
			var originalEvent = _ref2.originalEvent;
			if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
		},
		drop: function drop() {
			if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll);
			else {
				off(document, "pointermove", this._handleFallbackAutoScroll);
				off(document, "touchmove", this._handleFallbackAutoScroll);
				off(document, "mousemove", this._handleFallbackAutoScroll);
			}
			clearPointerElemChangedInterval();
			clearAutoScrolls();
			cancelThrottle();
		},
		nulling: function nulling() {
			touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
			autoScrolls.length = 0;
		},
		_handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
			this._handleAutoScroll(evt, true);
		},
		_handleAutoScroll: function _handleAutoScroll(evt, fallback) {
			var _this = this;
			var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
			touchEvt$1 = evt;
			if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
				autoScroll(evt, this.options, elem, fallback);
				var ogElemScroller = getParentAutoScrollElement(elem, true);
				if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
					pointerElemChangedInterval && clearPointerElemChangedInterval();
					pointerElemChangedInterval = setInterval(function() {
						var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							clearAutoScrolls();
						}
						autoScroll(evt, _this.options, newElem, fallback);
					}, 10);
					lastAutoScrollX = x;
					lastAutoScrollY = y;
				}
			} else {
				if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
					clearAutoScrolls();
					return;
				}
				autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
			}
		}
	};
	return _extends(AutoScroll, {
		pluginName: "scroll",
		initializeByDefault: true
	});
}
function clearAutoScrolls() {
	autoScrolls.forEach(function(autoScroll) {
		clearInterval(autoScroll.pid);
	});
	autoScrolls = [];
}
function clearPointerElemChangedInterval() {
	clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl, isFallback) {
	if (!options.scroll) return;
	var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
	var scrollThisInstance = false, scrollCustomFn;
	if (scrollRootEl !== rootEl) {
		scrollRootEl = rootEl;
		clearAutoScrolls();
		scrollEl = options.scroll;
		scrollCustomFn = options.scrollFn;
		if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
	}
	var layersOut = 0;
	var currentParent = scrollEl;
	do {
		var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
		if (el === winScroller) {
			canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
			canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
		} else {
			canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
			canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
		}
		var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
		var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
		if (!autoScrolls[layersOut]) {
			for (var i = 0; i <= layersOut; i++) if (!autoScrolls[i]) autoScrolls[i] = {};
		}
		if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
			autoScrolls[layersOut].el = el;
			autoScrolls[layersOut].vx = vx;
			autoScrolls[layersOut].vy = vy;
			clearInterval(autoScrolls[layersOut].pid);
			if (vx != 0 || vy != 0) {
				scrollThisInstance = true;
				autoScrolls[layersOut].pid = setInterval(function() {
					if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1);
					var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
					var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
					if (typeof scrollCustomFn === "function") {
						if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
					}
					scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
				}.bind({ layer: layersOut }), 24);
			}
		}
		layersOut++;
	} while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
	scrolling = scrollThisInstance;
}, 30);
var drop = function drop(_ref) {
	var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
	if (!originalEvent) return;
	var toSortable = putSortable || activeSortable;
	hideGhostForTarget();
	var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
	var target = document.elementFromPoint(touch.clientX, touch.clientY);
	unhideGhostForTarget();
	if (toSortable && !toSortable.el.contains(target)) {
		dispatchSortableEvent("spill");
		this.onSpill({
			dragEl,
			putSortable
		});
	}
};
function Revert() {}
Revert.prototype = {
	startIndex: null,
	dragStart: function dragStart(_ref2) {
		this.startIndex = _ref2.oldDraggableIndex;
	},
	onSpill: function onSpill(_ref3) {
		var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
		this.sortable.captureAnimationState();
		if (putSortable) putSortable.captureAnimationState();
		var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
		if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
		else this.sortable.el.appendChild(dragEl);
		this.sortable.animateAll();
		if (putSortable) putSortable.animateAll();
	},
	drop
};
_extends(Revert, { pluginName: "revertOnSpill" });
function Remove() {}
Remove.prototype = {
	onSpill: function onSpill(_ref4) {
		var dragEl = _ref4.dragEl;
		var parentSortable = _ref4.putSortable || this.sortable;
		parentSortable.captureAnimationState();
		dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
		parentSortable.animateAll();
	},
	drop
};
_extends(Remove, { pluginName: "removeOnSpill" });
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/util/htmlHelper.js
function removeNode(node) {
	if (node.parentElement !== null) node.parentElement.removeChild(node);
}
function insertNodeAt(fatherNode, node, position) {
	const refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
	fatherNode.insertBefore(node, refNode);
}
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/util/console.js
init_dist();
function getConsole() {
	if (typeof window !== "undefined") return window.console;
	return global.console;
}
var console = getConsole();
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/util/string.js
function cached(fn) {
	const cache = Object.create(null);
	return function cachedFn(str) {
		return cache[str] || (cache[str] = fn(str));
	};
}
var regex = /-(\w)/g;
var camelize = cached((str) => str.replace(regex, (_, c) => c.toUpperCase()));
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/core/sortableEvents.js
var manageAndEmit$1 = [
	"Start",
	"Add",
	"Remove",
	"Update",
	"End"
];
var emit$1 = [
	"Choose",
	"Unchoose",
	"Sort",
	"Filter",
	"Clone"
];
var manage$1 = ["Move"];
var eventHandlerNames = [
	manage$1,
	manageAndEmit$1,
	emit$1
].flatMap((events) => events).map((evt) => `on${evt}`);
var events = {
	manage: manage$1,
	manageAndEmit: manageAndEmit$1,
	emit: emit$1
};
function isReadOnly(eventName) {
	return eventHandlerNames.indexOf(eventName) !== -1;
}
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/util/tags.js
var tags = [
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"math",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rb",
	"rp",
	"rt",
	"rtc",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"slot",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"u",
	"ul",
	"var",
	"video",
	"wbr"
];
function isHtmlTag(name) {
	return tags.includes(name);
}
function isTransition(name) {
	return ["transition-group", "TransitionGroup"].includes(name);
}
function isHtmlAttribute(value) {
	return [
		"id",
		"class",
		"role",
		"style"
	].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
}
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/core/componentBuilderHelper.js
function project(entries) {
	return entries.reduce((res, [key, value]) => {
		res[key] = value;
		return res;
	}, {});
}
function getComponentAttributes({ $attrs, componentData = {} }) {
	return {
		...project(Object.entries($attrs).filter(([key, _]) => isHtmlAttribute(key))),
		...componentData
	};
}
function createSortableOption({ $attrs, callBackBuilder }) {
	const options = project(getValidSortableEntries($attrs));
	Object.entries(callBackBuilder).forEach(([eventType, eventBuilder]) => {
		events[eventType].forEach((event) => {
			options[`on${event}`] = eventBuilder(event);
		});
	});
	const draggable = `[data-draggable]${options.draggable || ""}`;
	return {
		...options,
		draggable
	};
}
function getValidSortableEntries(value) {
	return Object.entries(value).filter(([key, _]) => !isHtmlAttribute(key)).map(([key, value]) => [camelize(key), value]).filter(([key, _]) => !isReadOnly(key));
}
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/core/componentStructure.js
var getHtmlElementFromNode = ({ el }) => el;
var addContext = (domElement, context) => domElement.__draggable_context = context;
var getContext = (domElement) => domElement.__draggable_context;
var ComponentStructure = class {
	constructor({ nodes: { header, default: defaultNodes, footer }, root, realList }) {
		this.defaultNodes = defaultNodes;
		this.children = [
			...header,
			...defaultNodes,
			...footer
		];
		this.externalComponent = root.externalComponent;
		this.rootTransition = root.transition;
		this.tag = root.tag;
		this.realList = realList;
	}
	get _isRootComponent() {
		return this.externalComponent || this.rootTransition;
	}
	render(h, attributes) {
		const { tag, children, _isRootComponent } = this;
		return h(tag, attributes, !_isRootComponent ? children : { default: () => children });
	}
	updated() {
		const { defaultNodes, realList } = this;
		defaultNodes.forEach((node, index) => {
			addContext(getHtmlElementFromNode(node), {
				element: realList[index],
				index
			});
		});
	}
	getUnderlyingVm(domElement) {
		return getContext(domElement);
	}
	getVmIndexFromDomIndex(domIndex, element) {
		const { defaultNodes } = this;
		const { length } = defaultNodes;
		const domChildren = element.children;
		const domElement = domChildren.item(domIndex);
		if (domElement === null) return length;
		const context = getContext(domElement);
		if (context) return context.index;
		if (length === 0) return 0;
		const firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);
		return domIndex < [...domChildren].findIndex((element) => element === firstDomListElement) ? 0 : length;
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/core/renderHelper.js
function getSlot(slots, key) {
	const slotValue = slots[key];
	return slotValue ? slotValue() : [];
}
function computeNodes({ $slots, realList, getKey }) {
	const normalizedList = realList || [];
	const [header, footer] = ["header", "footer"].map((name) => getSlot($slots, name));
	const { item } = $slots;
	if (!item) throw new Error("draggable element must have an item slot");
	const defaultNodes = normalizedList.flatMap((element, index) => item({
		element,
		index
	}).map((node) => {
		node.key = getKey(element);
		node.props = {
			...node.props || {},
			"data-draggable": true
		};
		return node;
	}));
	if (defaultNodes.length !== normalizedList.length) throw new Error("Item slot must have only one child");
	return {
		header,
		footer,
		default: defaultNodes
	};
}
function getRootInformation(tag) {
	const transition = isTransition(tag);
	const externalComponent = !isHtmlTag(tag) && !transition;
	return {
		transition,
		externalComponent,
		tag: externalComponent ? resolveComponent(tag) : transition ? TransitionGroup : tag
	};
}
function computeComponentStructure({ $slots, tag, realList, getKey }) {
	return new ComponentStructure({
		nodes: computeNodes({
			$slots,
			realList,
			getKey
		}),
		root: getRootInformation(tag),
		realList
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/vuedraggable@4.1.0_patch_hash=eaa2c80f80cdc4293b0f1c9c0410823960f839fc15f155c8cb23666d5_f6f750d7554a7c4f3e2796e99162f653/node_modules/vuedraggable/src/vuedraggable.js
function emit(evtName, evtData) {
	nextTick(() => this.$emit(evtName.toLowerCase(), evtData));
}
function manage(evtName) {
	return (evtData, originalElement) => {
		if (this.realList !== null) return this[`onDrag${evtName}`](evtData, originalElement);
	};
}
function manageAndEmit(evtName) {
	const delegateCallBack = manage.call(this, evtName);
	return (evtData, originalElement) => {
		delegateCallBack.call(this, evtData, originalElement);
		emit.call(this, evtName, evtData);
	};
}
var draggingElement = null;
var draggableComponent = defineComponent({
	name: "draggable",
	inheritAttrs: false,
	props: {
		list: {
			type: Array,
			required: false,
			default: null
		},
		modelValue: {
			type: Array,
			required: false,
			default: null
		},
		itemKey: {
			type: [String, Function],
			required: true
		},
		clone: {
			type: Function,
			default: (original) => {
				return original;
			}
		},
		tag: {
			type: String,
			default: "div"
		},
		move: {
			type: Function,
			default: null
		},
		componentData: {
			type: Object,
			required: false,
			default: null
		}
	},
	emits: [
		"update:modelValue",
		"change",
		...[...events.manageAndEmit, ...events.emit].map((evt) => evt.toLowerCase())
	],
	data() {
		return { error: false };
	},
	render() {
		try {
			this.error = false;
			const { $slots, $attrs, tag, componentData, realList, getKey } = this;
			const componentStructure = computeComponentStructure({
				$slots,
				tag,
				realList,
				getKey
			});
			this.componentStructure = componentStructure;
			const attributes = getComponentAttributes({
				$attrs,
				componentData
			});
			return componentStructure.render(h, attributes);
		} catch (err) {
			this.error = true;
			return h("pre", { style: { color: "red" } }, err.stack);
		}
	},
	created() {
		if (this.list !== null && this.modelValue !== null) console.error("modelValue and list props are mutually exclusive! Please set one or another.");
	},
	mounted() {
		if (this.error) return;
		const { $attrs, $el, componentStructure } = this;
		componentStructure.updated();
		const sortableOptions = createSortableOption({
			$attrs,
			callBackBuilder: {
				manageAndEmit: (event) => manageAndEmit.call(this, event),
				emit: (event) => emit.bind(this, event),
				manage: (event) => manage.call(this, event)
			}
		});
		const targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
		this._sortable = new Sortable(targetDomElement, sortableOptions);
		this.targetDomElement = targetDomElement;
		targetDomElement.__draggable_component__ = this;
	},
	updated() {
		this.componentStructure.updated();
	},
	beforeUnmount() {
		if (this._sortable !== void 0) this._sortable.destroy();
	},
	computed: {
		realList() {
			const { list } = this;
			return list ? list : this.modelValue;
		},
		getKey() {
			const { itemKey } = this;
			if (typeof itemKey === "function") return itemKey;
			return (element) => element[itemKey];
		}
	},
	watch: { $attrs: {
		handler(newOptionValue) {
			const { _sortable } = this;
			if (!_sortable) return;
			getValidSortableEntries(newOptionValue).forEach(([key, value]) => {
				_sortable.option(key, value);
			});
		},
		deep: true
	} },
	methods: {
		getUnderlyingVm(domElement) {
			return this.componentStructure.getUnderlyingVm(domElement) || null;
		},
		getUnderlyingPotencialDraggableComponent(htmElement) {
			return htmElement.__draggable_component__;
		},
		emitChanges(evt) {
			nextTick(() => this.$emit("change", evt));
		},
		alterList(onList) {
			if (this.list) {
				onList(this.list);
				return;
			}
			const newList = [...this.modelValue];
			onList(newList);
			this.$emit("update:modelValue", newList);
		},
		spliceList() {
			const spliceList = (list) => list.splice(...arguments);
			this.alterList(spliceList);
		},
		updatePosition(oldIndex, newIndex) {
			const updatePosition = (list) => list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
			this.alterList(updatePosition);
		},
		getRelatedContextFromMoveEvent({ to, related }) {
			const component = this.getUnderlyingPotencialDraggableComponent(to);
			if (!component) return { component };
			const list = component.realList;
			const context = {
				list,
				component
			};
			if (to !== related && list) return {
				...component.getUnderlyingVm(related) || {},
				...context
			};
			return context;
		},
		getVmIndexFromDomIndex(domIndex) {
			return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
		},
		onDragStart(evt) {
			this.context = this.getUnderlyingVm(evt.item);
			evt.item._underlying_vm_ = this.clone(this.context.element);
			draggingElement = evt.item;
		},
		onDragAdd(evt) {
			const element = evt.item._underlying_vm_;
			if (element === void 0) return;
			removeNode(evt.item);
			const newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
			this.spliceList(newIndex, 0, element);
			const added = {
				element,
				newIndex
			};
			this.emitChanges({ added });
		},
		onDragRemove(evt) {
			insertNodeAt(this.$el, evt.item, evt.oldIndex);
			if (evt.pullMode === "clone") {
				removeNode(evt.clone);
				return;
			}
			const { index: oldIndex, element } = this.context;
			this.spliceList(oldIndex, 1);
			const removed = {
				element,
				oldIndex
			};
			this.emitChanges({ removed });
		},
		onDragUpdate(evt) {
			removeNode(evt.item);
			insertNodeAt(evt.from, evt.item, evt.oldIndex);
			const oldIndex = this.context.index;
			const newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
			this.updatePosition(oldIndex, newIndex);
			const moved = {
				element: this.context.element,
				oldIndex,
				newIndex
			};
			this.emitChanges({ moved });
		},
		computeFutureIndex(relatedContext, evt) {
			if (!relatedContext.element) return 0;
			const domChildren = [...evt.to.children].filter((el) => el.style["display"] !== "none");
			const currentDomIndex = domChildren.indexOf(evt.related);
			const currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
			return domChildren.indexOf(draggingElement) !== -1 || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
		},
		onDragMove(evt, originalEvent) {
			const { move, realList } = this;
			if (!move || !realList) return true;
			const relatedContext = this.getRelatedContextFromMoveEvent(evt);
			const futureIndex = this.computeFutureIndex(relatedContext, evt);
			const draggedContext = {
				...this.context,
				futureIndex
			};
			return move({
				...evt,
				relatedContext,
				draggedContext
			}, originalEvent);
		},
		onDragEnd() {
			draggingElement = null;
		}
	}
});
//#endregion
export { draggableComponent as t };
