import { D as process$1, E as init_dist } from "./empty-DIo9Sq4M.js";
import { A as tags, At as findClusterBreak, B as Decoration, C as matchBrackets, Ct as StateField, Dt as codePointSize, E as syntaxTree, Et as codePointAt, F as NodeType, G as WidgetType, H as EditorView, I as NodeWeakMap, L as Parser, M as IterMode, N as NodeProp, Ot as combineConfig, P as NodeSet, R as Tree, S as indentUnit, St as StateEffect, Tt as Transaction, V as Direction, W as ViewPlugin, Y as getTooltip, _ as getIndentUnit, _t as MapMode, c as delimitedIndent, dt as ChangeSet, ft as CharCategory, gt as Facet, h as foldNodeProp, i as LanguageSupport, j as DefaultBufferLength, jt as fromCodePoint, k as styleTags, kt as countColumn, lt as Annotation, m as foldInside, mt as EditorSelection, n as IndentContext, o as continuedIndent, ot as showTooltip, r as LRLanguage, rt as logException, s as defineLanguageFacet, tt as keymap, u as flatIndent, ut as ChangeDesc, v as getIndentation, vt as Prec, w as sublanguageProp, wt as Text, x as indentString, xt as RangeValue, y as indentNodeProp, yt as RangeSet } from "./dist-qNs_-cZw.js";
//#region ../../../node_modules/.pnpm/@codemirror+commands@6.10.1/node_modules/@codemirror/commands/dist/index.js
/**
Comment or uncomment the current selection. Will use line comments
if available, otherwise falling back to block comments.
*/
var toggleComment = (target) => {
	let { state } = target, line = state.doc.lineAt(state.selection.main.from), config = getConfig(target.state, line.from);
	return config.line ? toggleLineComment(target) : config.block ? toggleBlockCommentByLine(target) : false;
};
function command(f, option) {
	return ({ state, dispatch }) => {
		if (state.readOnly) return false;
		let tr = f(option, state);
		if (!tr) return false;
		dispatch(state.update(tr));
		return true;
	};
}
/**
Comment or uncomment the current selection using line comments.
The line comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
var toggleLineComment = /* @__PURE__ */ command(changeLineComment, 0);
/**
Comment the current selection using line comments.
*/
var lineComment = /* @__PURE__ */ command(changeLineComment, 1);
/**
Uncomment the current selection using line comments.
*/
var lineUncomment = /* @__PURE__ */ command(changeLineComment, 2);
/**
Comment or uncomment the current selection using block comments.
The block comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
var toggleBlockComment = /* @__PURE__ */ command(changeBlockComment, 0);
/**
Comment or uncomment the lines around the current selection using
block comments.
*/
var toggleBlockCommentByLine = /* @__PURE__ */ command((o, s) => changeBlockComment(o, s, selectedLineRanges(s)), 0);
function getConfig(state, pos) {
	let data = state.languageDataAt("commentTokens", pos, 1);
	return data.length ? data[0] : {};
}
var SearchMargin = 50;
/**
Determines if the given range is block-commented in the given
state.
*/
function findBlockComment(state, { open, close }, from, to) {
	let textBefore = state.sliceDoc(from - SearchMargin, from);
	let textAfter = state.sliceDoc(to, to + SearchMargin);
	let spaceBefore = /\s*$/.exec(textBefore)[0].length, spaceAfter = /^\s*/.exec(textAfter)[0].length;
	let beforeOff = textBefore.length - spaceBefore;
	if (textBefore.slice(beforeOff - open.length, beforeOff) == open && textAfter.slice(spaceAfter, spaceAfter + close.length) == close) return {
		open: {
			pos: from - spaceBefore,
			margin: spaceBefore && 1
		},
		close: {
			pos: to + spaceAfter,
			margin: spaceAfter && 1
		}
	};
	let startText, endText;
	if (to - from <= 2 * SearchMargin) startText = endText = state.sliceDoc(from, to);
	else {
		startText = state.sliceDoc(from, from + SearchMargin);
		endText = state.sliceDoc(to - SearchMargin, to);
	}
	let startSpace = /^\s*/.exec(startText)[0].length, endSpace = /\s*$/.exec(endText)[0].length;
	let endOff = endText.length - endSpace - close.length;
	if (startText.slice(startSpace, startSpace + open.length) == open && endText.slice(endOff, endOff + close.length) == close) return {
		open: {
			pos: from + startSpace + open.length,
			margin: /\s/.test(startText.charAt(startSpace + open.length)) ? 1 : 0
		},
		close: {
			pos: to - endSpace - close.length,
			margin: /\s/.test(endText.charAt(endOff - 1)) ? 1 : 0
		}
	};
	return null;
}
function selectedLineRanges(state) {
	let ranges = [];
	for (let r of state.selection.ranges) {
		let fromLine = state.doc.lineAt(r.from);
		let toLine = r.to <= fromLine.to ? fromLine : state.doc.lineAt(r.to);
		if (toLine.from > fromLine.from && toLine.from == r.to) toLine = r.to == fromLine.to + 1 ? fromLine : state.doc.lineAt(r.to - 1);
		let last = ranges.length - 1;
		if (last >= 0 && ranges[last].to > fromLine.from) ranges[last].to = toLine.to;
		else ranges.push({
			from: fromLine.from + /^\s*/.exec(fromLine.text)[0].length,
			to: toLine.to
		});
	}
	return ranges;
}
function changeBlockComment(option, state, ranges = state.selection.ranges) {
	let tokens = ranges.map((r) => getConfig(state, r.from).block);
	if (!tokens.every((c) => c)) return null;
	let comments = ranges.map((r, i) => findBlockComment(state, tokens[i], r.from, r.to));
	if (option != 2 && !comments.every((c) => c)) return { changes: state.changes(ranges.map((range, i) => {
		if (comments[i]) return [];
		return [{
			from: range.from,
			insert: tokens[i].open + " "
		}, {
			from: range.to,
			insert: " " + tokens[i].close
		}];
	})) };
	else if (option != 1 && comments.some((c) => c)) {
		let changes = [];
		for (let i = 0, comment; i < comments.length; i++) if (comment = comments[i]) {
			let token = tokens[i], { open, close } = comment;
			changes.push({
				from: open.pos - token.open.length,
				to: open.pos + open.margin
			}, {
				from: close.pos - close.margin,
				to: close.pos + token.close.length
			});
		}
		return { changes };
	}
	return null;
}
function changeLineComment(option, state, ranges = state.selection.ranges) {
	let lines = [];
	let prevLine = -1;
	for (let { from, to } of ranges) {
		let startI = lines.length, minIndent = 1e9;
		let token = getConfig(state, from).line;
		if (!token) continue;
		for (let pos = from; pos <= to;) {
			let line = state.doc.lineAt(pos);
			if (line.from > prevLine && (from == to || to > line.from)) {
				prevLine = line.from;
				let indent = /^\s*/.exec(line.text)[0].length;
				let empty = indent == line.length;
				let comment = line.text.slice(indent, indent + token.length) == token ? indent : -1;
				if (indent < line.text.length && indent < minIndent) minIndent = indent;
				lines.push({
					line,
					comment,
					token,
					indent,
					empty,
					single: false
				});
			}
			pos = line.to + 1;
		}
		if (minIndent < 1e9) {
			for (let i = startI; i < lines.length; i++) if (lines[i].indent < lines[i].line.text.length) lines[i].indent = minIndent;
		}
		if (lines.length == startI + 1) lines[startI].single = true;
	}
	if (option != 2 && lines.some((l) => l.comment < 0 && (!l.empty || l.single))) {
		let changes = [];
		for (let { line, token, indent, empty, single } of lines) if (single || !empty) changes.push({
			from: line.from + indent,
			insert: token + " "
		});
		let changeSet = state.changes(changes);
		return {
			changes: changeSet,
			selection: state.selection.map(changeSet, 1)
		};
	} else if (option != 1 && lines.some((l) => l.comment >= 0)) {
		let changes = [];
		for (let { line, comment, token } of lines) if (comment >= 0) {
			let from = line.from + comment, to = from + token.length;
			if (line.text[to - line.from] == " ") to++;
			changes.push({
				from,
				to
			});
		}
		return { changes };
	}
	return null;
}
var fromHistory = /* @__PURE__ */ Annotation.define();
/**
Transaction annotation that will prevent that transaction from
being combined with other transactions in the undo history. Given
`"before"`, it'll prevent merging with previous transactions. With
`"after"`, subsequent transactions won't be combined with this
one. With `"full"`, the transaction is isolated on both sides.
*/
var isolateHistory = /* @__PURE__ */ Annotation.define();
/**
This facet provides a way to register functions that, given a
transaction, provide a set of effects that the history should
store when inverting the transaction. This can be used to
integrate some kinds of effects in the history, so that they can
be undone (and redone again).
*/
var invertedEffects = /* @__PURE__ */ Facet.define();
var historyConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	return combineConfig(configs, {
		minDepth: 100,
		newGroupDelay: 500,
		joinToEvent: (_t, isAdjacent) => isAdjacent
	}, {
		minDepth: Math.max,
		newGroupDelay: Math.min,
		joinToEvent: (a, b) => (tr, adj) => a(tr, adj) || b(tr, adj)
	});
} });
var historyField_ = /* @__PURE__ */ StateField.define({
	create() {
		return HistoryState.empty;
	},
	update(state, tr) {
		let config = tr.state.facet(historyConfig);
		let fromHist = tr.annotation(fromHistory);
		if (fromHist) {
			let item = HistEvent.fromTransaction(tr, fromHist.selection), from = fromHist.side;
			let other = from == 0 ? state.undone : state.done;
			if (item) other = updateBranch(other, other.length, config.minDepth, item);
			else other = addSelection(other, tr.startState.selection);
			return new HistoryState(from == 0 ? fromHist.rest : other, from == 0 ? other : fromHist.rest);
		}
		let isolate = tr.annotation(isolateHistory);
		if (isolate == "full" || isolate == "before") state = state.isolate();
		if (tr.annotation(Transaction.addToHistory) === false) return !tr.changes.empty ? state.addMapping(tr.changes.desc) : state;
		let event = HistEvent.fromTransaction(tr);
		let time = tr.annotation(Transaction.time), userEvent = tr.annotation(Transaction.userEvent);
		if (event) state = state.addChanges(event, time, userEvent, config, tr);
		else if (tr.selection) state = state.addSelection(tr.startState.selection, time, userEvent, config.newGroupDelay);
		if (isolate == "full" || isolate == "after") state = state.isolate();
		return state;
	},
	toJSON(value) {
		return {
			done: value.done.map((e) => e.toJSON()),
			undone: value.undone.map((e) => e.toJSON())
		};
	},
	fromJSON(json) {
		return new HistoryState(json.done.map(HistEvent.fromJSON), json.undone.map(HistEvent.fromJSON));
	}
});
/**
Create a history extension with the given configuration.
*/
function history(config = {}) {
	return [
		historyField_,
		historyConfig.of(config),
		EditorView.domEventHandlers({ beforeinput(e, view) {
			let command = e.inputType == "historyUndo" ? undo : e.inputType == "historyRedo" ? redo : null;
			if (!command) return false;
			e.preventDefault();
			return command(view);
		} })
	];
}
/**
The state field used to store the history data. Should probably
only be used when you want to
[serialize](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) or
[deserialize](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) state objects in a way
that preserves history.
*/
var historyField = historyField_;
function cmd(side, selection) {
	return function({ state, dispatch }) {
		if (!selection && state.readOnly) return false;
		let historyState = state.field(historyField_, false);
		if (!historyState) return false;
		let tr = historyState.pop(side, state, selection);
		if (!tr) return false;
		dispatch(tr);
		return true;
	};
}
/**
Undo a single group of history events. Returns false if no group
was available.
*/
var undo = /* @__PURE__ */ cmd(0, false);
/**
Redo a group of history events. Returns false if no group was
available.
*/
var redo = /* @__PURE__ */ cmd(1, false);
/**
Undo a change or selection change.
*/
var undoSelection = /* @__PURE__ */ cmd(0, true);
/**
Redo a change or selection change.
*/
var redoSelection = /* @__PURE__ */ cmd(1, true);
var HistEvent = class HistEvent {
	constructor(changes, effects, mapped, startSelection, selectionsAfter) {
		this.changes = changes;
		this.effects = effects;
		this.mapped = mapped;
		this.startSelection = startSelection;
		this.selectionsAfter = selectionsAfter;
	}
	setSelAfter(after) {
		return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after);
	}
	toJSON() {
		var _a, _b, _c;
		return {
			changes: (_a = this.changes) === null || _a === void 0 ? void 0 : _a.toJSON(),
			mapped: (_b = this.mapped) === null || _b === void 0 ? void 0 : _b.toJSON(),
			startSelection: (_c = this.startSelection) === null || _c === void 0 ? void 0 : _c.toJSON(),
			selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
		};
	}
	static fromJSON(json) {
		return new HistEvent(json.changes && ChangeSet.fromJSON(json.changes), [], json.mapped && ChangeDesc.fromJSON(json.mapped), json.startSelection && EditorSelection.fromJSON(json.startSelection), json.selectionsAfter.map(EditorSelection.fromJSON));
	}
	static fromTransaction(tr, selection) {
		let effects = none$1;
		for (let invert of tr.startState.facet(invertedEffects)) {
			let result = invert(tr);
			if (result.length) effects = effects.concat(result);
		}
		if (!effects.length && tr.changes.empty) return null;
		return new HistEvent(tr.changes.invert(tr.startState.doc), effects, void 0, selection || tr.startState.selection, none$1);
	}
	static selection(selections) {
		return new HistEvent(void 0, none$1, void 0, void 0, selections);
	}
};
function updateBranch(branch, to, maxLen, newEvent) {
	let start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
	let newBranch = branch.slice(start, to);
	newBranch.push(newEvent);
	return newBranch;
}
function isAdjacent(a, b) {
	let ranges = [], isAdjacent = false;
	a.iterChangedRanges((f, t) => ranges.push(f, t));
	b.iterChangedRanges((_f, _t, f, t) => {
		for (let i = 0; i < ranges.length;) {
			let from = ranges[i++], to = ranges[i++];
			if (t >= from && f <= to) isAdjacent = true;
		}
	});
	return isAdjacent;
}
function eqSelectionShape(a, b) {
	return a.ranges.length == b.ranges.length && a.ranges.filter((r, i) => r.empty != b.ranges[i].empty).length === 0;
}
function conc(a, b) {
	return !a.length ? b : !b.length ? a : a.concat(b);
}
var none$1 = [];
var MaxSelectionsPerEvent = 200;
function addSelection(branch, selection) {
	if (!branch.length) return [HistEvent.selection([selection])];
	else {
		let lastEvent = branch[branch.length - 1];
		let sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
		if (sels.length && sels[sels.length - 1].eq(selection)) return branch;
		sels.push(selection);
		return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
	}
}
function popSelection(branch) {
	let last = branch[branch.length - 1];
	let newBranch = branch.slice();
	newBranch[branch.length - 1] = last.setSelAfter(last.selectionsAfter.slice(0, last.selectionsAfter.length - 1));
	return newBranch;
}
function addMappingToBranch(branch, mapping) {
	if (!branch.length) return branch;
	let length = branch.length, selections = none$1;
	while (length) {
		let event = mapEvent(branch[length - 1], mapping, selections);
		if (event.changes && !event.changes.empty || event.effects.length) {
			let result = branch.slice(0, length);
			result[length - 1] = event;
			return result;
		} else {
			mapping = event.mapped;
			length--;
			selections = event.selectionsAfter;
		}
	}
	return selections.length ? [HistEvent.selection(selections)] : none$1;
}
function mapEvent(event, mapping, extraSelections) {
	let selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map((s) => s.map(mapping)) : none$1, extraSelections);
	if (!event.changes) return HistEvent.selection(selections);
	let mappedChanges = event.changes.map(mapping), before = mapping.mapDesc(event.changes, true);
	let fullMapping = event.mapped ? event.mapped.composeDesc(before) : before;
	return new HistEvent(mappedChanges, StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(before), selections);
}
var joinableUserEvent = /^(input\.type|delete)($|\.)/;
var HistoryState = class HistoryState {
	constructor(done, undone, prevTime = 0, prevUserEvent = void 0) {
		this.done = done;
		this.undone = undone;
		this.prevTime = prevTime;
		this.prevUserEvent = prevUserEvent;
	}
	isolate() {
		return this.prevTime ? new HistoryState(this.done, this.undone) : this;
	}
	addChanges(event, time, userEvent, config, tr) {
		let done = this.done, lastEvent = done[done.length - 1];
		if (lastEvent && lastEvent.changes && !lastEvent.changes.empty && event.changes && (!userEvent || joinableUserEvent.test(userEvent)) && (!lastEvent.selectionsAfter.length && time - this.prevTime < config.newGroupDelay && config.joinToEvent(tr, isAdjacent(lastEvent.changes, event.changes)) || userEvent == "input.type.compose")) done = updateBranch(done, done.length - 1, config.minDepth, new HistEvent(event.changes.compose(lastEvent.changes), conc(StateEffect.mapEffects(event.effects, lastEvent.changes), lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none$1));
		else done = updateBranch(done, done.length, config.minDepth, event);
		return new HistoryState(done, none$1, time, userEvent);
	}
	addSelection(selection, time, userEvent, newGroupDelay) {
		let last = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none$1;
		if (last.length > 0 && time - this.prevTime < newGroupDelay && userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) && eqSelectionShape(last[last.length - 1], selection)) return this;
		return new HistoryState(addSelection(this.done, selection), this.undone, time, userEvent);
	}
	addMapping(mapping) {
		return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
	}
	pop(side, state, onlySelection) {
		let branch = side == 0 ? this.done : this.undone;
		if (branch.length == 0) return null;
		let event = branch[branch.length - 1], selection = event.selectionsAfter[0] || state.selection;
		if (onlySelection && event.selectionsAfter.length) return state.update({
			selection: event.selectionsAfter[event.selectionsAfter.length - 1],
			annotations: fromHistory.of({
				side,
				rest: popSelection(branch),
				selection
			}),
			userEvent: side == 0 ? "select.undo" : "select.redo",
			scrollIntoView: true
		});
		else if (!event.changes) return null;
		else {
			let rest = branch.length == 1 ? none$1 : branch.slice(0, branch.length - 1);
			if (event.mapped) rest = addMappingToBranch(rest, event.mapped);
			return state.update({
				changes: event.changes,
				selection: event.startSelection,
				effects: event.effects,
				annotations: fromHistory.of({
					side,
					rest,
					selection
				}),
				filter: false,
				userEvent: side == 0 ? "undo" : "redo",
				scrollIntoView: true
			});
		}
	}
};
HistoryState.empty = /* @__PURE__ */ new HistoryState(none$1, none$1);
/**
Default key bindings for the undo history.

- Mod-z: [`undo`](https://codemirror.net/6/docs/ref/#commands.undo).
- Mod-y (Mod-Shift-z on macOS) + Ctrl-Shift-z on Linux: [`redo`](https://codemirror.net/6/docs/ref/#commands.redo).
- Mod-u: [`undoSelection`](https://codemirror.net/6/docs/ref/#commands.undoSelection).
- Alt-u (Mod-Shift-u on macOS): [`redoSelection`](https://codemirror.net/6/docs/ref/#commands.redoSelection).
*/
var historyKeymap = [
	{
		key: "Mod-z",
		run: undo,
		preventDefault: true
	},
	{
		key: "Mod-y",
		mac: "Mod-Shift-z",
		run: redo,
		preventDefault: true
	},
	{
		linux: "Ctrl-Shift-z",
		run: redo,
		preventDefault: true
	},
	{
		key: "Mod-u",
		run: undoSelection,
		preventDefault: true
	},
	{
		key: "Alt-u",
		mac: "Mod-Shift-u",
		run: redoSelection,
		preventDefault: true
	}
];
function updateSel(sel, by) {
	return EditorSelection.create(sel.ranges.map(by), sel.mainIndex);
}
function setSel(state, selection) {
	return state.update({
		selection,
		scrollIntoView: true,
		userEvent: "select"
	});
}
function moveSel({ state, dispatch }, how) {
	let selection = updateSel(state.selection, how);
	if (selection.eq(state.selection, true)) return false;
	dispatch(setSel(state, selection));
	return true;
}
function rangeEnd(range, forward) {
	return EditorSelection.cursor(forward ? range.to : range.from);
}
function cursorByChar(view, forward) {
	return moveSel(view, (range) => range.empty ? view.moveByChar(range, forward) : rangeEnd(range, forward));
}
function ltrAtCursor(view) {
	return view.textDirectionAt(view.state.selection.main.head) == Direction.LTR;
}
/**
Move the selection one character to the left (which is backward in
left-to-right text, forward in right-to-left text).
*/
var cursorCharLeft = (view) => cursorByChar(view, !ltrAtCursor(view));
/**
Move the selection one character to the right.
*/
var cursorCharRight = (view) => cursorByChar(view, ltrAtCursor(view));
function cursorByGroup(view, forward) {
	return moveSel(view, (range) => range.empty ? view.moveByGroup(range, forward) : rangeEnd(range, forward));
}
/**
Move the selection to the left across one group of word or
non-word (but also non-space) characters.
*/
var cursorGroupLeft = (view) => cursorByGroup(view, !ltrAtCursor(view));
/**
Move the selection one group to the right.
*/
var cursorGroupRight = (view) => cursorByGroup(view, ltrAtCursor(view));
typeof Intl != "undefined" && Intl.Segmenter;
function interestingNode(state, node, bracketProp) {
	if (node.type.prop(bracketProp)) return true;
	let len = node.to - node.from;
	return len && (len > 2 || /[^\s,.;:]/.test(state.sliceDoc(node.from, node.to))) || node.firstChild;
}
function moveBySyntax(state, start, forward) {
	let pos = syntaxTree(state).resolveInner(start.head);
	let bracketProp = forward ? NodeProp.closedBy : NodeProp.openedBy;
	for (let at = start.head;;) {
		let next = forward ? pos.childAfter(at) : pos.childBefore(at);
		if (!next) break;
		if (interestingNode(state, next, bracketProp)) pos = next;
		else at = forward ? next.to : next.from;
	}
	let bracket = pos.type.prop(bracketProp), match, newPos;
	if (bracket && (match = forward ? matchBrackets(state, pos.from, 1) : matchBrackets(state, pos.to, -1)) && match.matched) newPos = forward ? match.end.to : match.end.from;
	else newPos = forward ? pos.to : pos.from;
	return EditorSelection.cursor(newPos, forward ? -1 : 1);
}
/**
Move the cursor over the next syntactic element to the left.
*/
var cursorSyntaxLeft = (view) => moveSel(view, (range) => moveBySyntax(view.state, range, !ltrAtCursor(view)));
/**
Move the cursor over the next syntactic element to the right.
*/
var cursorSyntaxRight = (view) => moveSel(view, (range) => moveBySyntax(view.state, range, ltrAtCursor(view)));
function cursorByLine(view, forward) {
	return moveSel(view, (range) => {
		if (!range.empty) return rangeEnd(range, forward);
		let moved = view.moveVertically(range, forward);
		return moved.head != range.head ? moved : view.moveToLineBoundary(range, forward);
	});
}
/**
Move the selection one line up.
*/
var cursorLineUp = (view) => cursorByLine(view, false);
/**
Move the selection one line down.
*/
var cursorLineDown = (view) => cursorByLine(view, true);
function pageInfo(view) {
	let selfScroll = view.scrollDOM.clientHeight < view.scrollDOM.scrollHeight - 2;
	let marginTop = 0, marginBottom = 0, height;
	if (selfScroll) {
		for (let source of view.state.facet(EditorView.scrollMargins)) {
			let margins = source(view);
			if (margins === null || margins === void 0 ? void 0 : margins.top) marginTop = Math.max(margins === null || margins === void 0 ? void 0 : margins.top, marginTop);
			if (margins === null || margins === void 0 ? void 0 : margins.bottom) marginBottom = Math.max(margins === null || margins === void 0 ? void 0 : margins.bottom, marginBottom);
		}
		height = view.scrollDOM.clientHeight - marginTop - marginBottom;
	} else height = (view.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop,
		marginBottom,
		selfScroll,
		height: Math.max(view.defaultLineHeight, height - 5)
	};
}
function cursorByPage(view, forward) {
	let page = pageInfo(view);
	let { state } = view, selection = updateSel(state.selection, (range) => {
		return range.empty ? view.moveVertically(range, forward, page.height) : rangeEnd(range, forward);
	});
	if (selection.eq(state.selection)) return false;
	let effect;
	if (page.selfScroll) {
		let startPos = view.coordsAtPos(state.selection.main.head);
		let scrollRect = view.scrollDOM.getBoundingClientRect();
		let scrollTop = scrollRect.top + page.marginTop, scrollBottom = scrollRect.bottom - page.marginBottom;
		if (startPos && startPos.top > scrollTop && startPos.bottom < scrollBottom) effect = EditorView.scrollIntoView(selection.main.head, {
			y: "start",
			yMargin: startPos.top - scrollTop
		});
	}
	view.dispatch(setSel(state, selection), { effects: effect });
	return true;
}
/**
Move the selection one page up.
*/
var cursorPageUp = (view) => cursorByPage(view, false);
/**
Move the selection one page down.
*/
var cursorPageDown = (view) => cursorByPage(view, true);
function moveByLineBoundary(view, start, forward) {
	let line = view.lineBlockAt(start.head), moved = view.moveToLineBoundary(start, forward);
	if (moved.head == start.head && moved.head != (forward ? line.to : line.from)) moved = view.moveToLineBoundary(start, forward, false);
	if (!forward && moved.head == line.from && line.length) {
		let space = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
		if (space && start.head != line.from + space) moved = EditorSelection.cursor(line.from + space);
	}
	return moved;
}
/**
Move the selection to the next line wrap point, or to the end of
the line if there isn't one left on this line.
*/
var cursorLineBoundaryForward = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, true));
/**
Move the selection to previous line wrap point, or failing that to
the start of the line. If the line is indented, and the cursor
isn't already at the end of the indentation, this will move to the
end of the indentation instead of the start of the line.
*/
var cursorLineBoundaryBackward = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, false));
/**
Move the selection one line wrap point to the left.
*/
var cursorLineBoundaryLeft = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, !ltrAtCursor(view)));
/**
Move the selection one line wrap point to the right.
*/
var cursorLineBoundaryRight = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, ltrAtCursor(view)));
/**
Move the selection to the start of the line.
*/
var cursorLineStart = (view) => moveSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).from, 1));
/**
Move the selection to the end of the line.
*/
var cursorLineEnd = (view) => moveSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).to, -1));
function toMatchingBracket(state, dispatch, extend) {
	let found = false, selection = updateSel(state.selection, (range) => {
		let matching = matchBrackets(state, range.head, -1) || matchBrackets(state, range.head, 1) || range.head > 0 && matchBrackets(state, range.head - 1, 1) || range.head < state.doc.length && matchBrackets(state, range.head + 1, -1);
		if (!matching || !matching.end) return range;
		found = true;
		let head = matching.start.from == range.head ? matching.end.to : matching.end.from;
		return extend ? EditorSelection.range(range.anchor, head) : EditorSelection.cursor(head);
	});
	if (!found) return false;
	dispatch(setSel(state, selection));
	return true;
}
/**
Move the selection to the bracket matching the one it is currently
on, if any.
*/
var cursorMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, false);
function extendSel(target, how) {
	let selection = updateSel(target.state.selection, (range) => {
		let head = how(range);
		return EditorSelection.range(range.anchor, head.head, head.goalColumn, head.bidiLevel || void 0);
	});
	if (selection.eq(target.state.selection)) return false;
	target.dispatch(setSel(target.state, selection));
	return true;
}
function selectByChar(view, forward) {
	return extendSel(view, (range) => view.moveByChar(range, forward));
}
/**
Move the selection head one character to the left, while leaving
the anchor in place.
*/
var selectCharLeft = (view) => selectByChar(view, !ltrAtCursor(view));
/**
Move the selection head one character to the right.
*/
var selectCharRight = (view) => selectByChar(view, ltrAtCursor(view));
function selectByGroup(view, forward) {
	return extendSel(view, (range) => view.moveByGroup(range, forward));
}
/**
Move the selection head one [group](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) to
the left.
*/
var selectGroupLeft = (view) => selectByGroup(view, !ltrAtCursor(view));
/**
Move the selection head one group to the right.
*/
var selectGroupRight = (view) => selectByGroup(view, ltrAtCursor(view));
/**
Move the selection head over the next syntactic element to the left.
*/
var selectSyntaxLeft = (view) => extendSel(view, (range) => moveBySyntax(view.state, range, !ltrAtCursor(view)));
/**
Move the selection head over the next syntactic element to the right.
*/
var selectSyntaxRight = (view) => extendSel(view, (range) => moveBySyntax(view.state, range, ltrAtCursor(view)));
function selectByLine(view, forward) {
	return extendSel(view, (range) => view.moveVertically(range, forward));
}
/**
Move the selection head one line up.
*/
var selectLineUp = (view) => selectByLine(view, false);
/**
Move the selection head one line down.
*/
var selectLineDown = (view) => selectByLine(view, true);
function selectByPage(view, forward) {
	return extendSel(view, (range) => view.moveVertically(range, forward, pageInfo(view).height));
}
/**
Move the selection head one page up.
*/
var selectPageUp = (view) => selectByPage(view, false);
/**
Move the selection head one page down.
*/
var selectPageDown = (view) => selectByPage(view, true);
/**
Move the selection head to the next line boundary.
*/
var selectLineBoundaryForward = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, true));
/**
Move the selection head to the previous line boundary.
*/
var selectLineBoundaryBackward = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, false));
/**
Move the selection head one line boundary to the left.
*/
var selectLineBoundaryLeft = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, !ltrAtCursor(view)));
/**
Move the selection head one line boundary to the right.
*/
var selectLineBoundaryRight = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, ltrAtCursor(view)));
/**
Move the selection head to the start of the line.
*/
var selectLineStart = (view) => extendSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).from));
/**
Move the selection head to the end of the line.
*/
var selectLineEnd = (view) => extendSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).to));
/**
Move the selection to the start of the document.
*/
var cursorDocStart = ({ state, dispatch }) => {
	dispatch(setSel(state, { anchor: 0 }));
	return true;
};
/**
Move the selection to the end of the document.
*/
var cursorDocEnd = ({ state, dispatch }) => {
	dispatch(setSel(state, { anchor: state.doc.length }));
	return true;
};
/**
Move the selection head to the start of the document.
*/
var selectDocStart = ({ state, dispatch }) => {
	dispatch(setSel(state, {
		anchor: state.selection.main.anchor,
		head: 0
	}));
	return true;
};
/**
Move the selection head to the end of the document.
*/
var selectDocEnd = ({ state, dispatch }) => {
	dispatch(setSel(state, {
		anchor: state.selection.main.anchor,
		head: state.doc.length
	}));
	return true;
};
/**
Select the entire document.
*/
var selectAll = ({ state, dispatch }) => {
	dispatch(state.update({
		selection: {
			anchor: 0,
			head: state.doc.length
		},
		userEvent: "select"
	}));
	return true;
};
/**
Expand the selection to cover entire lines.
*/
var selectLine = ({ state, dispatch }) => {
	let ranges = selectedLineBlocks(state).map(({ from, to }) => EditorSelection.range(from, Math.min(to + 1, state.doc.length)));
	dispatch(state.update({
		selection: EditorSelection.create(ranges),
		userEvent: "select"
	}));
	return true;
};
/**
Select the next syntactic construct that is larger than the
selection. Note that this will only work insofar as the language
[provider](https://codemirror.net/6/docs/ref/#language.language) you use builds up a full
syntax tree.
*/
var selectParentSyntax = ({ state, dispatch }) => {
	let selection = updateSel(state.selection, (range) => {
		let tree = syntaxTree(state), stack = tree.resolveStack(range.from, 1);
		if (range.empty) {
			let stackBefore = tree.resolveStack(range.from, -1);
			if (stackBefore.node.from >= stack.node.from && stackBefore.node.to <= stack.node.to) stack = stackBefore;
		}
		for (let cur = stack; cur; cur = cur.next) {
			let { node } = cur;
			if ((node.from < range.from && node.to >= range.to || node.to > range.to && node.from <= range.from) && cur.next) return EditorSelection.range(node.to, node.from);
		}
		return range;
	});
	if (selection.eq(state.selection)) return false;
	dispatch(setSel(state, selection));
	return true;
};
function addCursorVertically(view, forward) {
	let { state } = view, sel = state.selection, ranges = state.selection.ranges.slice();
	for (let range of state.selection.ranges) {
		let line = state.doc.lineAt(range.head);
		if (forward ? line.to < view.state.doc.length : line.from > 0) for (let cur = range;;) {
			let next = view.moveVertically(cur, forward);
			if (next.head < line.from || next.head > line.to) {
				if (!ranges.some((r) => r.head == next.head)) ranges.push(next);
				break;
			} else if (next.head == cur.head) break;
			else cur = next;
		}
	}
	if (ranges.length == sel.ranges.length) return false;
	view.dispatch(setSel(state, EditorSelection.create(ranges, ranges.length - 1)));
	return true;
}
/**
Expand the selection by adding a cursor above the heads of
currently selected ranges.
*/
var addCursorAbove = (view) => addCursorVertically(view, false);
/**
Expand the selection by adding a cursor below the heads of
currently selected ranges.
*/
var addCursorBelow = (view) => addCursorVertically(view, true);
/**
Simplify the current selection. When multiple ranges are selected,
reduce it to its main range. Otherwise, if the selection is
non-empty, convert it to a cursor selection.
*/
var simplifySelection = ({ state, dispatch }) => {
	let cur = state.selection, selection = null;
	if (cur.ranges.length > 1) selection = EditorSelection.create([cur.main]);
	else if (!cur.main.empty) selection = EditorSelection.create([EditorSelection.cursor(cur.main.head)]);
	if (!selection) return false;
	dispatch(setSel(state, selection));
	return true;
};
function deleteBy(target, by) {
	if (target.state.readOnly) return false;
	let event = "delete.selection", { state } = target;
	let changes = state.changeByRange((range) => {
		let { from, to } = range;
		if (from == to) {
			let towards = by(range);
			if (towards < from) {
				event = "delete.backward";
				towards = skipAtomic(target, towards, false);
			} else if (towards > from) {
				event = "delete.forward";
				towards = skipAtomic(target, towards, true);
			}
			from = Math.min(from, towards);
			to = Math.max(to, towards);
		} else {
			from = skipAtomic(target, from, false);
			to = skipAtomic(target, to, true);
		}
		return from == to ? { range } : {
			changes: {
				from,
				to
			},
			range: EditorSelection.cursor(from, from < range.head ? -1 : 1)
		};
	});
	if (changes.changes.empty) return false;
	target.dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: event,
		effects: event == "delete.selection" ? EditorView.announce.of(state.phrase("Selection deleted")) : void 0
	}));
	return true;
}
function skipAtomic(target, pos, forward) {
	if (target instanceof EditorView) for (let ranges of target.state.facet(EditorView.atomicRanges).map((f) => f(target))) ranges.between(pos, pos, (from, to) => {
		if (from < pos && to > pos) pos = forward ? to : from;
	});
	return pos;
}
var deleteByChar = (target, forward, byIndentUnit) => deleteBy(target, (range) => {
	let pos = range.from, { state } = target, line = state.doc.lineAt(pos), before, targetPos;
	if (byIndentUnit && !forward && pos > line.from && pos < line.from + 200 && !/[^ \t]/.test(before = line.text.slice(0, pos - line.from))) {
		if (before[before.length - 1] == "	") return pos - 1;
		let drop = countColumn(before, state.tabSize) % getIndentUnit(state) || getIndentUnit(state);
		for (let i = 0; i < drop && before[before.length - 1 - i] == " "; i++) pos--;
		targetPos = pos;
	} else {
		targetPos = findClusterBreak(line.text, pos - line.from, forward, forward) + line.from;
		if (targetPos == pos && line.number != (forward ? state.doc.lines : 1)) targetPos += forward ? 1 : -1;
		else if (!forward && /[\ufe00-\ufe0f]/.test(line.text.slice(targetPos - line.from, pos - line.from))) targetPos = findClusterBreak(line.text, targetPos - line.from, false, false) + line.from;
	}
	return targetPos;
});
/**
Delete the selection, or, for cursor selections, the character or
indentation unit before the cursor.
*/
var deleteCharBackward = (view) => deleteByChar(view, false, true);
/**
Delete the selection or the character after the cursor.
*/
var deleteCharForward = (view) => deleteByChar(view, true, false);
var deleteByGroup = (target, forward) => deleteBy(target, (range) => {
	let pos = range.head, { state } = target, line = state.doc.lineAt(pos);
	let categorize = state.charCategorizer(pos);
	for (let cat = null;;) {
		if (pos == (forward ? line.to : line.from)) {
			if (pos == range.head && line.number != (forward ? state.doc.lines : 1)) pos += forward ? 1 : -1;
			break;
		}
		let next = findClusterBreak(line.text, pos - line.from, forward) + line.from;
		let nextChar = line.text.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
		let nextCat = categorize(nextChar);
		if (cat != null && nextCat != cat) break;
		if (nextChar != " " || pos != range.head) cat = nextCat;
		pos = next;
	}
	return pos;
});
/**
Delete the selection or backward until the end of the next
[group](https://codemirror.net/6/docs/ref/#view.EditorView.moveByGroup), only skipping groups of
whitespace when they consist of a single space.
*/
var deleteGroupBackward = (target) => deleteByGroup(target, false);
/**
Delete the selection or forward until the end of the next group.
*/
var deleteGroupForward = (target) => deleteByGroup(target, true);
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line. If the cursor is directly at the end of the
line, delete the line break after it.
*/
var deleteToLineEnd = (view) => deleteBy(view, (range) => {
	let lineEnd = view.lineBlockAt(range.head).to;
	return range.head < lineEnd ? lineEnd : Math.min(view.state.doc.length, range.head + 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line. If the cursor is directly at the start of the
line, delete the line break before it.
*/
var deleteToLineStart = (view) => deleteBy(view, (range) => {
	let lineStart = view.lineBlockAt(range.head).from;
	return range.head > lineStart ? lineStart : Math.max(0, range.head - 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line or the next line wrap before the cursor.
*/
var deleteLineBoundaryBackward = (view) => deleteBy(view, (range) => {
	let lineStart = view.moveToLineBoundary(range, false).head;
	return range.head > lineStart ? lineStart : Math.max(0, range.head - 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line or the next line wrap after the cursor.
*/
var deleteLineBoundaryForward = (view) => deleteBy(view, (range) => {
	let lineStart = view.moveToLineBoundary(range, true).head;
	return range.head < lineStart ? lineStart : Math.min(view.state.doc.length, range.head + 1);
});
/**
Replace each selection range with a line break, leaving the cursor
on the line before the break.
*/
var splitLine = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let changes = state.changeByRange((range) => {
		return {
			changes: {
				from: range.from,
				to: range.to,
				insert: Text.of(["", ""])
			},
			range: EditorSelection.cursor(range.from)
		};
	});
	dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: "input"
	}));
	return true;
};
/**
Flip the characters before and after the cursor(s).
*/
var transposeChars = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let changes = state.changeByRange((range) => {
		if (!range.empty || range.from == 0 || range.from == state.doc.length) return { range };
		let pos = range.from, line = state.doc.lineAt(pos);
		let from = pos == line.from ? pos - 1 : findClusterBreak(line.text, pos - line.from, false) + line.from;
		let to = pos == line.to ? pos + 1 : findClusterBreak(line.text, pos - line.from, true) + line.from;
		return {
			changes: {
				from,
				to,
				insert: state.doc.slice(pos, to).append(state.doc.slice(from, pos))
			},
			range: EditorSelection.cursor(to)
		};
	});
	if (changes.changes.empty) return false;
	dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: "move.character"
	}));
	return true;
};
function selectedLineBlocks(state) {
	let blocks = [], upto = -1;
	for (let range of state.selection.ranges) {
		let startLine = state.doc.lineAt(range.from), endLine = state.doc.lineAt(range.to);
		if (!range.empty && range.to == endLine.from) endLine = state.doc.lineAt(range.to - 1);
		if (upto >= startLine.number) {
			let prev = blocks[blocks.length - 1];
			prev.to = endLine.to;
			prev.ranges.push(range);
		} else blocks.push({
			from: startLine.from,
			to: endLine.to,
			ranges: [range]
		});
		upto = endLine.number + 1;
	}
	return blocks;
}
function moveLine(state, dispatch, forward) {
	if (state.readOnly) return false;
	let changes = [], ranges = [];
	for (let block of selectedLineBlocks(state)) {
		if (forward ? block.to == state.doc.length : block.from == 0) continue;
		let nextLine = state.doc.lineAt(forward ? block.to + 1 : block.from - 1);
		let size = nextLine.length + 1;
		if (forward) {
			changes.push({
				from: block.to,
				to: nextLine.to
			}, {
				from: block.from,
				insert: nextLine.text + state.lineBreak
			});
			for (let r of block.ranges) ranges.push(EditorSelection.range(Math.min(state.doc.length, r.anchor + size), Math.min(state.doc.length, r.head + size)));
		} else {
			changes.push({
				from: nextLine.from,
				to: block.from
			}, {
				from: block.to,
				insert: state.lineBreak + nextLine.text
			});
			for (let r of block.ranges) ranges.push(EditorSelection.range(r.anchor - size, r.head - size));
		}
	}
	if (!changes.length) return false;
	dispatch(state.update({
		changes,
		scrollIntoView: true,
		selection: EditorSelection.create(ranges, state.selection.mainIndex),
		userEvent: "move.line"
	}));
	return true;
}
/**
Move the selected lines up one line.
*/
var moveLineUp = ({ state, dispatch }) => moveLine(state, dispatch, false);
/**
Move the selected lines down one line.
*/
var moveLineDown = ({ state, dispatch }) => moveLine(state, dispatch, true);
function copyLine(state, dispatch, forward) {
	if (state.readOnly) return false;
	let changes = [];
	for (let block of selectedLineBlocks(state)) if (forward) changes.push({
		from: block.from,
		insert: state.doc.slice(block.from, block.to) + state.lineBreak
	});
	else changes.push({
		from: block.to,
		insert: state.lineBreak + state.doc.slice(block.from, block.to)
	});
	let changeSet = state.changes(changes);
	dispatch(state.update({
		changes: changeSet,
		selection: state.selection.map(changeSet, forward ? 1 : -1),
		scrollIntoView: true,
		userEvent: "input.copyline"
	}));
	return true;
}
/**
Create a copy of the selected lines. Keep the selection in the top copy.
*/
var copyLineUp = ({ state, dispatch }) => copyLine(state, dispatch, false);
/**
Create a copy of the selected lines. Keep the selection in the bottom copy.
*/
var copyLineDown = ({ state, dispatch }) => copyLine(state, dispatch, true);
/**
Delete selected lines.
*/
var deleteLine = (view) => {
	if (view.state.readOnly) return false;
	let { state } = view, changes = state.changes(selectedLineBlocks(state).map(({ from, to }) => {
		if (from > 0) from--;
		else if (to < state.doc.length) to++;
		return {
			from,
			to
		};
	}));
	let selection = updateSel(state.selection, (range) => {
		let dist = void 0;
		if (view.lineWrapping) {
			let block = view.lineBlockAt(range.head), pos = view.coordsAtPos(range.head, range.assoc || 1);
			if (pos) dist = block.bottom + view.documentTop - pos.bottom + view.defaultLineHeight / 2;
		}
		return view.moveVertically(range, true, dist);
	}).map(changes);
	view.dispatch({
		changes,
		selection,
		scrollIntoView: true,
		userEvent: "delete.line"
	});
	return true;
};
function isBetweenBrackets(state, pos) {
	if (/\(\)|\[\]|\{\}/.test(state.sliceDoc(pos - 1, pos + 1))) return {
		from: pos,
		to: pos
	};
	let context = syntaxTree(state).resolveInner(pos);
	let before = context.childBefore(pos), after = context.childAfter(pos), closedBy;
	if (before && after && before.to <= pos && after.from >= pos && (closedBy = before.type.prop(NodeProp.closedBy)) && closedBy.indexOf(after.name) > -1 && state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from && !/\S/.test(state.sliceDoc(before.to, after.from))) return {
		from: before.to,
		to: after.from
	};
	return null;
}
/**
Replace the selection with a newline and indent the newly created
line(s). If the current line consists only of whitespace, this
will also delete that whitespace. When the cursor is between
matching brackets, an additional newline will be inserted after
the cursor.
*/
var insertNewlineAndIndent = /* @__PURE__ */ newlineAndIndent(false);
/**
Create a blank, indented line below the current line.
*/
var insertBlankLine = /* @__PURE__ */ newlineAndIndent(true);
function newlineAndIndent(atEof) {
	return ({ state, dispatch }) => {
		if (state.readOnly) return false;
		let changes = state.changeByRange((range) => {
			let { from, to } = range, line = state.doc.lineAt(from);
			let explode = !atEof && from == to && isBetweenBrackets(state, from);
			if (atEof) from = to = (to <= line.to ? line : state.doc.lineAt(to)).to;
			let cx = new IndentContext(state, {
				simulateBreak: from,
				simulateDoubleBreak: !!explode
			});
			let indent = getIndentation(cx, from);
			if (indent == null) indent = countColumn(/^\s*/.exec(state.doc.lineAt(from).text)[0], state.tabSize);
			while (to < line.to && /\s/.test(line.text[to - line.from])) to++;
			if (explode) ({from, to} = explode);
			else if (from > line.from && from < line.from + 100 && !/\S/.test(line.text.slice(0, from))) from = line.from;
			let insert = ["", indentString(state, indent)];
			if (explode) insert.push(indentString(state, cx.lineIndent(line.from, -1)));
			return {
				changes: {
					from,
					to,
					insert: Text.of(insert)
				},
				range: EditorSelection.cursor(from + 1 + insert[1].length)
			};
		});
		dispatch(state.update(changes, {
			scrollIntoView: true,
			userEvent: "input"
		}));
		return true;
	};
}
function changeBySelectedLine(state, f) {
	let atLine = -1;
	return state.changeByRange((range) => {
		let changes = [];
		for (let pos = range.from; pos <= range.to;) {
			let line = state.doc.lineAt(pos);
			if (line.number > atLine && (range.empty || range.to > line.from)) {
				f(line, changes, range);
				atLine = line.number;
			}
			pos = line.to + 1;
		}
		let changeSet = state.changes(changes);
		return {
			changes,
			range: EditorSelection.range(changeSet.mapPos(range.anchor, 1), changeSet.mapPos(range.head, 1))
		};
	});
}
/**
Auto-indent the selected lines. This uses the [indentation service
facet](https://codemirror.net/6/docs/ref/#language.indentService) as source for auto-indent
information.
*/
var indentSelection = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let updated = Object.create(null);
	let context = new IndentContext(state, { overrideIndentation: (start) => {
		let found = updated[start];
		return found == null ? -1 : found;
	} });
	let changes = changeBySelectedLine(state, (line, changes, range) => {
		let indent = getIndentation(context, line.from);
		if (indent == null) return;
		if (!/\S/.test(line.text)) indent = 0;
		let cur = /^\s*/.exec(line.text)[0];
		let norm = indentString(state, indent);
		if (cur != norm || range.from < line.from + cur.length) {
			updated[line.from] = indent;
			changes.push({
				from: line.from,
				to: line.from + cur.length,
				insert: norm
			});
		}
	});
	if (!changes.changes.empty) dispatch(state.update(changes, { userEvent: "indent" }));
	return true;
};
/**
Add a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation to all selected
lines.
*/
var indentMore = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
		changes.push({
			from: line.from,
			insert: state.facet(indentUnit)
		});
	}), { userEvent: "input.indent" }));
	return true;
};
/**
Remove a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation from all
selected lines.
*/
var indentLess = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
		let space = /^\s*/.exec(line.text)[0];
		if (!space) return;
		let col = countColumn(space, state.tabSize), keep = 0;
		let insert = indentString(state, Math.max(0, col - getIndentUnit(state)));
		while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep)) keep++;
		changes.push({
			from: line.from + keep,
			to: line.from + space.length,
			insert: insert.slice(keep)
		});
	}), { userEvent: "delete.dedent" }));
	return true;
};
/**
Enables or disables
[tab-focus mode](https://codemirror.net/6/docs/ref/#view.EditorView.setTabFocusMode). While on, this
prevents the editor's key bindings from capturing Tab or
Shift-Tab, making it possible for the user to move focus out of
the editor with the keyboard.
*/
var toggleTabFocusMode = (view) => {
	view.setTabFocusMode();
	return true;
};
/**
Array of key bindings containing the Emacs-style bindings that are
available on macOS by default.

- Ctrl-b: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
- Ctrl-f: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
- Ctrl-p: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
- Ctrl-n: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
- Ctrl-a: [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
- Ctrl-e: [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
- Ctrl-d: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
- Ctrl-h: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
- Ctrl-k: [`deleteToLineEnd`](https://codemirror.net/6/docs/ref/#commands.deleteToLineEnd)
- Ctrl-Alt-h: [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
- Ctrl-o: [`splitLine`](https://codemirror.net/6/docs/ref/#commands.splitLine)
- Ctrl-t: [`transposeChars`](https://codemirror.net/6/docs/ref/#commands.transposeChars)
- Ctrl-v: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown)
- Alt-v: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp)
*/
var emacsStyleKeymap = [
	{
		key: "Ctrl-b",
		run: cursorCharLeft,
		shift: selectCharLeft,
		preventDefault: true
	},
	{
		key: "Ctrl-f",
		run: cursorCharRight,
		shift: selectCharRight
	},
	{
		key: "Ctrl-p",
		run: cursorLineUp,
		shift: selectLineUp
	},
	{
		key: "Ctrl-n",
		run: cursorLineDown,
		shift: selectLineDown
	},
	{
		key: "Ctrl-a",
		run: cursorLineStart,
		shift: selectLineStart
	},
	{
		key: "Ctrl-e",
		run: cursorLineEnd,
		shift: selectLineEnd
	},
	{
		key: "Ctrl-d",
		run: deleteCharForward
	},
	{
		key: "Ctrl-h",
		run: deleteCharBackward
	},
	{
		key: "Ctrl-k",
		run: deleteToLineEnd
	},
	{
		key: "Ctrl-Alt-h",
		run: deleteGroupBackward
	},
	{
		key: "Ctrl-o",
		run: splitLine
	},
	{
		key: "Ctrl-t",
		run: transposeChars
	},
	{
		key: "Ctrl-v",
		run: cursorPageDown
	}
];
/**
An array of key bindings closely sticking to platform-standard or
widely used bindings. (This includes the bindings from
[`emacsStyleKeymap`](https://codemirror.net/6/docs/ref/#commands.emacsStyleKeymap), with their `key`
property changed to `mac`.)

- ArrowLeft: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
- ArrowRight: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
- Ctrl-ArrowLeft (Alt-ArrowLeft on macOS): [`cursorGroupLeft`](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) ([`selectGroupLeft`](https://codemirror.net/6/docs/ref/#commands.selectGroupLeft) with Shift)
- Ctrl-ArrowRight (Alt-ArrowRight on macOS): [`cursorGroupRight`](https://codemirror.net/6/docs/ref/#commands.cursorGroupRight) ([`selectGroupRight`](https://codemirror.net/6/docs/ref/#commands.selectGroupRight) with Shift)
- Cmd-ArrowLeft (on macOS): [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
- Cmd-ArrowRight (on macOS): [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
- ArrowUp: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
- ArrowDown: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
- Cmd-ArrowUp (on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
- Cmd-ArrowDown (on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
- Ctrl-ArrowUp (on macOS): [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
- Ctrl-ArrowDown (on macOS): [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
- PageUp: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
- PageDown: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
- Home: [`cursorLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryBackward) ([`selectLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryBackward) with Shift)
- End: [`cursorLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryForward) ([`selectLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryForward) with Shift)
- Ctrl-Home (Cmd-Home on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
- Ctrl-End (Cmd-Home on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
- Enter and Shift-Enter: [`insertNewlineAndIndent`](https://codemirror.net/6/docs/ref/#commands.insertNewlineAndIndent)
- Ctrl-a (Cmd-a on macOS): [`selectAll`](https://codemirror.net/6/docs/ref/#commands.selectAll)
- Backspace: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
- Delete: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
- Ctrl-Backspace (Alt-Backspace on macOS): [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
- Ctrl-Delete (Alt-Delete on macOS): [`deleteGroupForward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupForward)
- Cmd-Backspace (macOS): [`deleteLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.deleteLineBoundaryBackward).
- Cmd-Delete (macOS): [`deleteLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.deleteLineBoundaryForward).
*/
var standardKeymap = /* @__PURE__ */ [
	{
		key: "ArrowLeft",
		run: cursorCharLeft,
		shift: selectCharLeft,
		preventDefault: true
	},
	{
		key: "Mod-ArrowLeft",
		mac: "Alt-ArrowLeft",
		run: cursorGroupLeft,
		shift: selectGroupLeft,
		preventDefault: true
	},
	{
		mac: "Cmd-ArrowLeft",
		run: cursorLineBoundaryLeft,
		shift: selectLineBoundaryLeft,
		preventDefault: true
	},
	{
		key: "ArrowRight",
		run: cursorCharRight,
		shift: selectCharRight,
		preventDefault: true
	},
	{
		key: "Mod-ArrowRight",
		mac: "Alt-ArrowRight",
		run: cursorGroupRight,
		shift: selectGroupRight,
		preventDefault: true
	},
	{
		mac: "Cmd-ArrowRight",
		run: cursorLineBoundaryRight,
		shift: selectLineBoundaryRight,
		preventDefault: true
	},
	{
		key: "ArrowUp",
		run: cursorLineUp,
		shift: selectLineUp,
		preventDefault: true
	},
	{
		mac: "Cmd-ArrowUp",
		run: cursorDocStart,
		shift: selectDocStart
	},
	{
		mac: "Ctrl-ArrowUp",
		run: cursorPageUp,
		shift: selectPageUp
	},
	{
		key: "ArrowDown",
		run: cursorLineDown,
		shift: selectLineDown,
		preventDefault: true
	},
	{
		mac: "Cmd-ArrowDown",
		run: cursorDocEnd,
		shift: selectDocEnd
	},
	{
		mac: "Ctrl-ArrowDown",
		run: cursorPageDown,
		shift: selectPageDown
	},
	{
		key: "PageUp",
		run: cursorPageUp,
		shift: selectPageUp
	},
	{
		key: "PageDown",
		run: cursorPageDown,
		shift: selectPageDown
	},
	{
		key: "Home",
		run: cursorLineBoundaryBackward,
		shift: selectLineBoundaryBackward,
		preventDefault: true
	},
	{
		key: "Mod-Home",
		run: cursorDocStart,
		shift: selectDocStart
	},
	{
		key: "End",
		run: cursorLineBoundaryForward,
		shift: selectLineBoundaryForward,
		preventDefault: true
	},
	{
		key: "Mod-End",
		run: cursorDocEnd,
		shift: selectDocEnd
	},
	{
		key: "Enter",
		run: insertNewlineAndIndent,
		shift: insertNewlineAndIndent
	},
	{
		key: "Mod-a",
		run: selectAll
	},
	{
		key: "Backspace",
		run: deleteCharBackward,
		shift: deleteCharBackward,
		preventDefault: true
	},
	{
		key: "Delete",
		run: deleteCharForward,
		preventDefault: true
	},
	{
		key: "Mod-Backspace",
		mac: "Alt-Backspace",
		run: deleteGroupBackward,
		preventDefault: true
	},
	{
		key: "Mod-Delete",
		mac: "Alt-Delete",
		run: deleteGroupForward,
		preventDefault: true
	},
	{
		mac: "Mod-Backspace",
		run: deleteLineBoundaryBackward,
		preventDefault: true
	},
	{
		mac: "Mod-Delete",
		run: deleteLineBoundaryForward,
		preventDefault: true
	}
].concat(/* @__PURE__ */ emacsStyleKeymap.map((b) => ({
	mac: b.key,
	run: b.run,
	shift: b.shift
})));
/**
The default keymap. Includes all bindings from
[`standardKeymap`](https://codemirror.net/6/docs/ref/#commands.standardKeymap) plus the following:

- Alt-ArrowLeft (Ctrl-ArrowLeft on macOS): [`cursorSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxLeft) ([`selectSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxLeft) with Shift)
- Alt-ArrowRight (Ctrl-ArrowRight on macOS): [`cursorSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxRight) ([`selectSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxRight) with Shift)
- Alt-ArrowUp: [`moveLineUp`](https://codemirror.net/6/docs/ref/#commands.moveLineUp)
- Alt-ArrowDown: [`moveLineDown`](https://codemirror.net/6/docs/ref/#commands.moveLineDown)
- Shift-Alt-ArrowUp: [`copyLineUp`](https://codemirror.net/6/docs/ref/#commands.copyLineUp)
- Shift-Alt-ArrowDown: [`copyLineDown`](https://codemirror.net/6/docs/ref/#commands.copyLineDown)
- Ctrl-Alt-ArrowUp (Cmd-Alt-ArrowUp on macOS): [`addCursorAbove`](https://codemirror.net/6/docs/ref/#commands.addCursorAbove).
- Ctrl-Alt-ArrowDown (Cmd-Alt-ArrowDown on macOS): [`addCursorBelow`](https://codemirror.net/6/docs/ref/#commands.addCursorBelow).
- Escape: [`simplifySelection`](https://codemirror.net/6/docs/ref/#commands.simplifySelection)
- Ctrl-Enter (Cmd-Enter on macOS): [`insertBlankLine`](https://codemirror.net/6/docs/ref/#commands.insertBlankLine)
- Alt-l (Ctrl-l on macOS): [`selectLine`](https://codemirror.net/6/docs/ref/#commands.selectLine)
- Ctrl-i (Cmd-i on macOS): [`selectParentSyntax`](https://codemirror.net/6/docs/ref/#commands.selectParentSyntax)
- Ctrl-[ (Cmd-[ on macOS): [`indentLess`](https://codemirror.net/6/docs/ref/#commands.indentLess)
- Ctrl-] (Cmd-] on macOS): [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore)
- Ctrl-Alt-\\ (Cmd-Alt-\\ on macOS): [`indentSelection`](https://codemirror.net/6/docs/ref/#commands.indentSelection)
- Shift-Ctrl-k (Shift-Cmd-k on macOS): [`deleteLine`](https://codemirror.net/6/docs/ref/#commands.deleteLine)
- Shift-Ctrl-\\ (Shift-Cmd-\\ on macOS): [`cursorMatchingBracket`](https://codemirror.net/6/docs/ref/#commands.cursorMatchingBracket)
- Ctrl-/ (Cmd-/ on macOS): [`toggleComment`](https://codemirror.net/6/docs/ref/#commands.toggleComment).
- Shift-Alt-a: [`toggleBlockComment`](https://codemirror.net/6/docs/ref/#commands.toggleBlockComment).
- Ctrl-m (Alt-Shift-m on macOS): [`toggleTabFocusMode`](https://codemirror.net/6/docs/ref/#commands.toggleTabFocusMode).
*/
var defaultKeymap = /* @__PURE__ */ [
	{
		key: "Alt-ArrowLeft",
		mac: "Ctrl-ArrowLeft",
		run: cursorSyntaxLeft,
		shift: selectSyntaxLeft
	},
	{
		key: "Alt-ArrowRight",
		mac: "Ctrl-ArrowRight",
		run: cursorSyntaxRight,
		shift: selectSyntaxRight
	},
	{
		key: "Alt-ArrowUp",
		run: moveLineUp
	},
	{
		key: "Shift-Alt-ArrowUp",
		run: copyLineUp
	},
	{
		key: "Alt-ArrowDown",
		run: moveLineDown
	},
	{
		key: "Shift-Alt-ArrowDown",
		run: copyLineDown
	},
	{
		key: "Mod-Alt-ArrowUp",
		run: addCursorAbove
	},
	{
		key: "Mod-Alt-ArrowDown",
		run: addCursorBelow
	},
	{
		key: "Escape",
		run: simplifySelection
	},
	{
		key: "Mod-Enter",
		run: insertBlankLine
	},
	{
		key: "Alt-l",
		mac: "Ctrl-l",
		run: selectLine
	},
	{
		key: "Mod-i",
		run: selectParentSyntax,
		preventDefault: true
	},
	{
		key: "Mod-[",
		run: indentLess
	},
	{
		key: "Mod-]",
		run: indentMore
	},
	{
		key: "Mod-Alt-\\",
		run: indentSelection
	},
	{
		key: "Shift-Mod-k",
		run: deleteLine
	},
	{
		key: "Shift-Mod-\\",
		run: cursorMatchingBracket
	},
	{
		key: "Mod-/",
		run: toggleComment
	},
	{
		key: "Alt-A",
		run: toggleBlockComment
	},
	{
		key: "Ctrl-m",
		mac: "Shift-Alt-m",
		run: toggleTabFocusMode
	}
].concat(standardKeymap);
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+autocomplete@6.20.0/node_modules/@codemirror/autocomplete/dist/index.js
/**
An instance of this is passed to completion source functions.
*/
var CompletionContext = class {
	/**
	Create a new completion context. (Mostly useful for testing
	completion sources—in the editor, the extension will create
	these for you.)
	*/
	constructor(state, pos, explicit, view) {
		this.state = state;
		this.pos = pos;
		this.explicit = explicit;
		this.view = view;
		/**
		@internal
		*/
		this.abortListeners = [];
		/**
		@internal
		*/
		this.abortOnDocChange = false;
	}
	/**
	Get the extent, content, and (if there is a token) type of the
	token before `this.pos`.
	*/
	tokenBefore(types) {
		let token = syntaxTree(this.state).resolveInner(this.pos, -1);
		while (token && types.indexOf(token.name) < 0) token = token.parent;
		return token ? {
			from: token.from,
			to: this.pos,
			text: this.state.sliceDoc(token.from, this.pos),
			type: token.type
		} : null;
	}
	/**
	Get the match of the given expression directly before the
	cursor.
	*/
	matchBefore(expr) {
		let line = this.state.doc.lineAt(this.pos);
		let start = Math.max(line.from, this.pos - 250);
		let str = line.text.slice(start - line.from, this.pos - line.from);
		let found = str.search(ensureAnchor(expr, false));
		return found < 0 ? null : {
			from: start + found,
			to: this.pos,
			text: str.slice(found)
		};
	}
	/**
	Yields true when the query has been aborted. Can be useful in
	asynchronous queries to avoid doing work that will be ignored.
	*/
	get aborted() {
		return this.abortListeners == null;
	}
	/**
	Allows you to register abort handlers, which will be called when
	the query is
	[aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
	
	By default, running queries will not be aborted for regular
	typing or backspacing, on the assumption that they are likely to
	return a result with a
	[`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
	allows the result to be used after all. Passing `onDocChange:
	true` will cause this query to be aborted for any document
	change.
	*/
	addEventListener(type, listener, options) {
		if (type == "abort" && this.abortListeners) {
			this.abortListeners.push(listener);
			if (options && options.onDocChange) this.abortOnDocChange = true;
		}
	}
};
function toSet(chars) {
	let flat = Object.keys(chars).join("");
	let words = /\w/.test(flat);
	if (words) flat = flat.replace(/\w/g, "");
	return `[${words ? "\\w" : ""}${flat.replace(/[^\w\s]/g, "\\$&")}]`;
}
function prefixMatch(options) {
	let first = Object.create(null), rest = Object.create(null);
	for (let { label } of options) {
		first[label[0]] = true;
		for (let i = 1; i < label.length; i++) rest[label[i]] = true;
	}
	let source = toSet(first) + toSet(rest) + "*$";
	return [new RegExp("^" + source), new RegExp(source)];
}
/**
Given a a fixed array of options, return an autocompleter that
completes them.
*/
function completeFromList(list) {
	let options = list.map((o) => typeof o == "string" ? { label: o } : o);
	let [validFor, match] = options.every((o) => /^\w+$/.test(o.label)) ? [/\w*$/, /\w+$/] : prefixMatch(options);
	return (context) => {
		let token = context.matchBefore(match);
		return token || context.explicit ? {
			from: token ? token.from : context.pos,
			options,
			validFor
		} : null;
	};
}
/**
Wrap the given completion source so that it will only fire when the
cursor is in a syntax node with one of the given names.
*/
function ifIn(nodes, source) {
	return (context) => {
		for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
			if (nodes.indexOf(pos.name) > -1) return source(context);
			if (pos.type.isTop) break;
		}
		return null;
	};
}
/**
Wrap the given completion source so that it will not fire when the
cursor is in a syntax node with one of the given names.
*/
function ifNotIn(nodes, source) {
	return (context) => {
		for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
			if (nodes.indexOf(pos.name) > -1) return null;
			if (pos.type.isTop) break;
		}
		return source(context);
	};
}
var Option = class {
	constructor(completion, source, match, score) {
		this.completion = completion;
		this.source = source;
		this.match = match;
		this.score = score;
	}
};
function cur(state) {
	return state.selection.main.from;
}
function ensureAnchor(expr, start) {
	var _a;
	let { source } = expr;
	let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";
	if (!addStart && !addEnd) return expr;
	return new RegExp(`${addStart ? "^" : ""}(?:${source})${addEnd ? "$" : ""}`, (_a = expr.flags) !== null && _a !== void 0 ? _a : expr.ignoreCase ? "i" : "");
}
/**
This annotation is added to transactions that are produced by
picking a completion.
*/
var pickedCompletion = /* @__PURE__ */ Annotation.define();
/**
Helper function that returns a transaction spec which inserts a
completion's text in the main selection range, and any other
selection range that has the same text in front of it.
*/
function insertCompletionText(state, text, from, to) {
	let { main } = state.selection, fromOff = from - main.from, toOff = to - main.from;
	return {
		...state.changeByRange((range) => {
			if (range != main && from != to && state.sliceDoc(range.from + fromOff, range.from + toOff) != state.sliceDoc(from, to)) return { range };
			let lines = state.toText(text);
			return {
				changes: {
					from: range.from + fromOff,
					to: to == main.from ? range.to : range.from + toOff,
					insert: lines
				},
				range: EditorSelection.cursor(range.from + fromOff + lines.length)
			};
		}),
		scrollIntoView: true,
		userEvent: "input.complete"
	};
}
var SourceCache = /* @__PURE__ */ new WeakMap();
function asSource(source) {
	if (!Array.isArray(source)) return source;
	let known = SourceCache.get(source);
	if (!known) SourceCache.set(source, known = completeFromList(source));
	return known;
}
var startCompletionEffect = /* @__PURE__ */ StateEffect.define();
var closeCompletionEffect = /* @__PURE__ */ StateEffect.define();
var FuzzyMatcher = class {
	constructor(pattern) {
		this.pattern = pattern;
		this.chars = [];
		this.folded = [];
		this.any = [];
		this.precise = [];
		this.byWord = [];
		this.score = 0;
		this.matched = [];
		for (let p = 0; p < pattern.length;) {
			let char = codePointAt(pattern, p), size = codePointSize(char);
			this.chars.push(char);
			let part = pattern.slice(p, p + size), upper = part.toUpperCase();
			this.folded.push(codePointAt(upper == part ? part.toLowerCase() : upper, 0));
			p += size;
		}
		this.astral = pattern.length != this.chars.length;
	}
	ret(score, matched) {
		this.score = score;
		this.matched = matched;
		return this;
	}
	match(word) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (word.length < this.pattern.length) return null;
		let { chars, folded, any, precise, byWord } = this;
		if (chars.length == 1) {
			let first = codePointAt(word, 0), firstSize = codePointSize(first);
			let score = firstSize == word.length ? 0 : -100;
			if (first == chars[0]);
			else if (first == folded[0]) score += -200;
			else return null;
			return this.ret(score, [0, firstSize]);
		}
		let direct = word.indexOf(this.pattern);
		if (direct == 0) return this.ret(word.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let len = chars.length, anyTo = 0;
		if (direct < 0) {
			for (let i = 0, e = Math.min(word.length, 200); i < e && anyTo < len;) {
				let next = codePointAt(word, i);
				if (next == chars[anyTo] || next == folded[anyTo]) any[anyTo++] = i;
				i += codePointSize(next);
			}
			if (anyTo < len) return null;
		}
		let preciseTo = 0;
		let byWordTo = 0, byWordFolded = false;
		let adjacentTo = 0, adjacentStart = -1, adjacentEnd = -1;
		let hasLower = /[a-z]/.test(word), wordAdjacent = true;
		for (let i = 0, e = Math.min(word.length, 200), prevType = 0; i < e && byWordTo < len;) {
			let next = codePointAt(word, i);
			if (direct < 0) {
				if (preciseTo < len && next == chars[preciseTo]) precise[preciseTo++] = i;
				if (adjacentTo < len) if (next == chars[adjacentTo] || next == folded[adjacentTo]) {
					if (adjacentTo == 0) adjacentStart = i;
					adjacentEnd = i + 1;
					adjacentTo++;
				} else adjacentTo = 0;
			}
			let ch, type = next < 255 ? next >= 48 && next <= 57 || next >= 97 && next <= 122 ? 2 : next >= 65 && next <= 90 ? 1 : 0 : (ch = fromCodePoint(next)) != ch.toLowerCase() ? 1 : ch != ch.toUpperCase() ? 2 : 0;
			if (!i || type == 1 && hasLower || prevType == 0 && type != 0) {
				if (chars[byWordTo] == next || folded[byWordTo] == next && (byWordFolded = true)) byWord[byWordTo++] = i;
				else if (byWord.length) wordAdjacent = false;
			}
			prevType = type;
			i += codePointSize(next);
		}
		if (byWordTo == len && byWord[0] == 0 && wordAdjacent) return this.result(-100 + (byWordFolded ? -200 : 0), byWord, word);
		if (adjacentTo == len && adjacentStart == 0) return this.ret(-200 - word.length + (adjacentEnd == word.length ? 0 : -100), [0, adjacentEnd]);
		if (direct > -1) return this.ret(-700 - word.length, [direct, direct + this.pattern.length]);
		if (adjacentTo == len) return this.ret(-900 - word.length, [adjacentStart, adjacentEnd]);
		if (byWordTo == len) return this.result(-100 + (byWordFolded ? -200 : 0) + -700 + (wordAdjacent ? 0 : -1100), byWord, word);
		return chars.length == 2 ? null : this.result((any[0] ? -700 : 0) + -200 + -1100, any, word);
	}
	result(score, positions, word) {
		let result = [], i = 0;
		for (let pos of positions) {
			let to = pos + (this.astral ? codePointSize(codePointAt(word, pos)) : 1);
			if (i && result[i - 1] == pos) result[i - 1] = to;
			else {
				result[i++] = pos;
				result[i++] = to;
			}
		}
		return this.ret(score - word.length, result);
	}
};
var StrictMatcher = class {
	constructor(pattern) {
		this.pattern = pattern;
		this.matched = [];
		this.score = 0;
		this.folded = pattern.toLowerCase();
	}
	match(word) {
		if (word.length < this.pattern.length) return null;
		let start = word.slice(0, this.pattern.length);
		let match = start == this.pattern ? 0 : start.toLowerCase() == this.folded ? -200 : null;
		if (match == null) return null;
		this.matched = [0, start.length];
		this.score = match + (word.length == this.pattern.length ? 0 : -100);
		return this;
	}
};
var completionConfig = /* @__PURE__ */ Facet.define({ combine(configs) {
	return combineConfig(configs, {
		activateOnTyping: true,
		activateOnCompletion: () => false,
		activateOnTypingDelay: 100,
		selectOnOpen: true,
		override: null,
		closeOnBlur: true,
		maxRenderedOptions: 100,
		defaultKeymap: true,
		tooltipClass: () => "",
		optionClass: () => "",
		aboveCursor: false,
		icons: true,
		addToOptions: [],
		positionInfo: defaultPositionInfo,
		filterStrict: false,
		compareCompletions: (a, b) => (a.sortText || a.label).localeCompare(b.sortText || b.label),
		interactionDelay: 75,
		updateSyncTime: 100
	}, {
		defaultKeymap: (a, b) => a && b,
		closeOnBlur: (a, b) => a && b,
		icons: (a, b) => a && b,
		tooltipClass: (a, b) => (c) => joinClass(a(c), b(c)),
		optionClass: (a, b) => (c) => joinClass(a(c), b(c)),
		addToOptions: (a, b) => a.concat(b),
		filterStrict: (a, b) => a || b
	});
} });
function joinClass(a, b) {
	return a ? b ? a + " " + b : a : b;
}
function defaultPositionInfo(view, list, option, info, space, tooltip) {
	let rtl = view.textDirection == Direction.RTL, left = rtl, narrow = false;
	let side = "top", offset, maxWidth;
	let spaceLeft = list.left - space.left, spaceRight = space.right - list.right;
	let infoWidth = info.right - info.left, infoHeight = info.bottom - info.top;
	if (left && spaceLeft < Math.min(infoWidth, spaceRight)) left = false;
	else if (!left && spaceRight < Math.min(infoWidth, spaceLeft)) left = true;
	if (infoWidth <= (left ? spaceLeft : spaceRight)) {
		offset = Math.max(space.top, Math.min(option.top, space.bottom - infoHeight)) - list.top;
		maxWidth = Math.min(400, left ? spaceLeft : spaceRight);
	} else {
		narrow = true;
		maxWidth = Math.min(400, (rtl ? list.right : space.right - list.left) - 30);
		let spaceBelow = space.bottom - list.bottom;
		if (spaceBelow >= infoHeight || spaceBelow > list.top) offset = option.bottom - list.top;
		else {
			side = "bottom";
			offset = list.bottom - option.top;
		}
	}
	let scaleY = (list.bottom - list.top) / tooltip.offsetHeight;
	let scaleX = (list.right - list.left) / tooltip.offsetWidth;
	return {
		style: `${side}: ${offset / scaleY}px; max-width: ${maxWidth / scaleX}px`,
		class: "cm-completionInfo-" + (narrow ? rtl ? "left-narrow" : "right-narrow" : left ? "left" : "right")
	};
}
function optionContent(config) {
	let content = config.addToOptions.slice();
	if (config.icons) content.push({
		render(completion) {
			let icon = document.createElement("div");
			icon.classList.add("cm-completionIcon");
			if (completion.type) icon.classList.add(...completion.type.split(/\s+/g).map((cls) => "cm-completionIcon-" + cls));
			icon.setAttribute("aria-hidden", "true");
			return icon;
		},
		position: 20
	});
	content.push({
		render(completion, _s, _v, match) {
			let labelElt = document.createElement("span");
			labelElt.className = "cm-completionLabel";
			let label = completion.displayLabel || completion.label, off = 0;
			for (let j = 0; j < match.length;) {
				let from = match[j++], to = match[j++];
				if (from > off) labelElt.appendChild(document.createTextNode(label.slice(off, from)));
				let span = labelElt.appendChild(document.createElement("span"));
				span.appendChild(document.createTextNode(label.slice(from, to)));
				span.className = "cm-completionMatchedText";
				off = to;
			}
			if (off < label.length) labelElt.appendChild(document.createTextNode(label.slice(off)));
			return labelElt;
		},
		position: 50
	}, {
		render(completion) {
			if (!completion.detail) return null;
			let detailElt = document.createElement("span");
			detailElt.className = "cm-completionDetail";
			detailElt.textContent = completion.detail;
			return detailElt;
		},
		position: 80
	});
	return content.sort((a, b) => a.position - b.position).map((a) => a.render);
}
function rangeAroundSelected(total, selected, max) {
	if (total <= max) return {
		from: 0,
		to: total
	};
	if (selected < 0) selected = 0;
	if (selected <= total >> 1) {
		let off = Math.floor(selected / max);
		return {
			from: off * max,
			to: (off + 1) * max
		};
	}
	let off = Math.floor((total - selected) / max);
	return {
		from: total - (off + 1) * max,
		to: total - off * max
	};
}
var CompletionTooltip = class {
	constructor(view, stateField, applyCompletion) {
		this.view = view;
		this.stateField = stateField;
		this.applyCompletion = applyCompletion;
		this.info = null;
		this.infoDestroy = null;
		this.placeInfoReq = {
			read: () => this.measureInfo(),
			write: (pos) => this.placeInfo(pos),
			key: this
		};
		this.space = null;
		this.currentClass = "";
		let cState = view.state.field(stateField);
		let { options, selected } = cState.open;
		let config = view.state.facet(completionConfig);
		this.optionContent = optionContent(config);
		this.optionClass = config.optionClass;
		this.tooltipClass = config.tooltipClass;
		this.range = rangeAroundSelected(options.length, selected, config.maxRenderedOptions);
		this.dom = document.createElement("div");
		this.dom.className = "cm-tooltip-autocomplete";
		this.updateTooltipClass(view.state);
		this.dom.addEventListener("mousedown", (e) => {
			let { options } = view.state.field(stateField).open;
			for (let dom = e.target, match; dom && dom != this.dom; dom = dom.parentNode) if (dom.nodeName == "LI" && (match = /-(\d+)$/.exec(dom.id)) && +match[1] < options.length) {
				this.applyCompletion(view, options[+match[1]]);
				e.preventDefault();
				return;
			}
		});
		this.dom.addEventListener("focusout", (e) => {
			let state = view.state.field(this.stateField, false);
			if (state && state.tooltip && view.state.facet(completionConfig).closeOnBlur && e.relatedTarget != view.contentDOM) view.dispatch({ effects: closeCompletionEffect.of(null) });
		});
		this.showOptions(options, cState.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(options, id) {
		if (this.list) this.list.remove();
		this.list = this.dom.appendChild(this.createListBox(options, id, this.range));
		this.list.addEventListener("scroll", () => {
			if (this.info) this.view.requestMeasure(this.placeInfoReq);
		});
	}
	update(update) {
		var _a;
		let cState = update.state.field(this.stateField);
		let prevState = update.startState.field(this.stateField);
		this.updateTooltipClass(update.state);
		if (cState != prevState) {
			let { options, selected, disabled } = cState.open;
			if (!prevState.open || prevState.open.options != options) {
				this.range = rangeAroundSelected(options.length, selected, update.state.facet(completionConfig).maxRenderedOptions);
				this.showOptions(options, cState.id);
			}
			this.updateSel();
			if (disabled != ((_a = prevState.open) === null || _a === void 0 ? void 0 : _a.disabled)) this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!disabled);
		}
	}
	updateTooltipClass(state) {
		let cls = this.tooltipClass(state);
		if (cls != this.currentClass) {
			for (let c of this.currentClass.split(" ")) if (c) this.dom.classList.remove(c);
			for (let c of cls.split(" ")) if (c) this.dom.classList.add(c);
			this.currentClass = cls;
		}
	}
	positioned(space) {
		this.space = space;
		if (this.info) this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let cState = this.view.state.field(this.stateField), open = cState.open;
		if (open.selected > -1 && open.selected < this.range.from || open.selected >= this.range.to) {
			this.range = rangeAroundSelected(open.options.length, open.selected, this.view.state.facet(completionConfig).maxRenderedOptions);
			this.showOptions(open.options, cState.id);
		}
		let newSel = this.updateSelectedOption(open.selected);
		if (newSel) {
			this.destroyInfo();
			let { completion } = open.options[open.selected];
			let { info } = completion;
			if (!info) return;
			let infoResult = typeof info === "string" ? document.createTextNode(info) : info(completion);
			if (!infoResult) return;
			if ("then" in infoResult) infoResult.then((obj) => {
				if (obj && this.view.state.field(this.stateField, false) == cState) this.addInfoPane(obj, completion);
			}).catch((e) => logException(this.view.state, e, "completion info"));
			else {
				this.addInfoPane(infoResult, completion);
				newSel.setAttribute("aria-describedby", this.info.id);
			}
		}
	}
	addInfoPane(content, completion) {
		this.destroyInfo();
		let wrap = this.info = document.createElement("div");
		wrap.className = "cm-tooltip cm-completionInfo";
		wrap.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16);
		if (content.nodeType != null) {
			wrap.appendChild(content);
			this.infoDestroy = null;
		} else {
			let { dom, destroy } = content;
			wrap.appendChild(dom);
			this.infoDestroy = destroy || null;
		}
		this.dom.appendChild(wrap);
		this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(selected) {
		let set = null;
		for (let opt = this.list.firstChild, i = this.range.from; opt; opt = opt.nextSibling, i++) if (opt.nodeName != "LI" || !opt.id) i--;
		else if (i == selected) {
			if (!opt.hasAttribute("aria-selected")) {
				opt.setAttribute("aria-selected", "true");
				set = opt;
			}
		} else if (opt.hasAttribute("aria-selected")) {
			opt.removeAttribute("aria-selected");
			opt.removeAttribute("aria-describedby");
		}
		if (set) scrollIntoView(this.list, set);
		return set;
	}
	measureInfo() {
		let sel = this.dom.querySelector("[aria-selected]");
		if (!sel || !this.info) return null;
		let listRect = this.dom.getBoundingClientRect();
		let infoRect = this.info.getBoundingClientRect();
		let selRect = sel.getBoundingClientRect();
		let space = this.space;
		if (!space) {
			let docElt = this.dom.ownerDocument.documentElement;
			space = {
				left: 0,
				top: 0,
				right: docElt.clientWidth,
				bottom: docElt.clientHeight
			};
		}
		if (selRect.top > Math.min(space.bottom, listRect.bottom) - 10 || selRect.bottom < Math.max(space.top, listRect.top) + 10) return null;
		return this.view.state.facet(completionConfig).positionInfo(this.view, listRect, selRect, infoRect, space, this.dom);
	}
	placeInfo(pos) {
		if (this.info) if (pos) {
			if (pos.style) this.info.style.cssText = pos.style;
			this.info.className = "cm-tooltip cm-completionInfo " + (pos.class || "");
		} else this.info.style.cssText = "top: -1e6px";
	}
	createListBox(options, id, range) {
		const ul = document.createElement("ul");
		ul.id = id;
		ul.setAttribute("role", "listbox");
		ul.setAttribute("aria-expanded", "true");
		ul.setAttribute("aria-label", this.view.state.phrase("Completions"));
		ul.addEventListener("mousedown", (e) => {
			if (e.target == ul) e.preventDefault();
		});
		let curSection = null;
		for (let i = range.from; i < range.to; i++) {
			let { completion, match } = options[i], { section } = completion;
			if (section) {
				let name = typeof section == "string" ? section : section.name;
				if (name != curSection && (i > range.from || range.from == 0)) {
					curSection = name;
					if (typeof section != "string" && section.header) ul.appendChild(section.header(section));
					else {
						let header = ul.appendChild(document.createElement("completion-section"));
						header.textContent = name;
					}
				}
			}
			const li = ul.appendChild(document.createElement("li"));
			li.id = id + "-" + i;
			li.setAttribute("role", "option");
			let cls = this.optionClass(completion);
			if (cls) li.className = cls;
			for (let source of this.optionContent) {
				let node = source(completion, this.view.state, this.view, match);
				if (node) li.appendChild(node);
			}
		}
		if (range.from) ul.classList.add("cm-completionListIncompleteTop");
		if (range.to < options.length) ul.classList.add("cm-completionListIncompleteBottom");
		return ul;
	}
	destroyInfo() {
		if (this.info) {
			if (this.infoDestroy) this.infoDestroy();
			this.info.remove();
			this.info = null;
		}
	}
	destroy() {
		this.destroyInfo();
	}
};
function completionTooltip(stateField, applyCompletion) {
	return (view) => new CompletionTooltip(view, stateField, applyCompletion);
}
function scrollIntoView(container, element) {
	let parent = container.getBoundingClientRect();
	let self = element.getBoundingClientRect();
	let scaleY = parent.height / container.offsetHeight;
	if (self.top < parent.top) container.scrollTop -= (parent.top - self.top) / scaleY;
	else if (self.bottom > parent.bottom) container.scrollTop += (self.bottom - parent.bottom) / scaleY;
}
function score(option) {
	return (option.boost || 0) * 100 + (option.apply ? 10 : 0) + (option.info ? 5 : 0) + (option.type ? 1 : 0);
}
function sortOptions(active, state) {
	let options = [];
	let sections = null, dynamicSectionScore = null;
	let addOption = (option) => {
		options.push(option);
		let { section } = option.completion;
		if (section) {
			if (!sections) sections = [];
			let name = typeof section == "string" ? section : section.name;
			if (!sections.some((s) => s.name == name)) sections.push(typeof section == "string" ? { name } : section);
		}
	};
	let conf = state.facet(completionConfig);
	for (let a of active) if (a.hasResult()) {
		let getMatch = a.result.getMatch;
		if (a.result.filter === false) for (let option of a.result.options) addOption(new Option(option, a.source, getMatch ? getMatch(option) : [], 1e9 - options.length));
		else {
			let pattern = state.sliceDoc(a.from, a.to), match;
			let matcher = conf.filterStrict ? new StrictMatcher(pattern) : new FuzzyMatcher(pattern);
			for (let option of a.result.options) if (match = matcher.match(option.label)) {
				let matched = !option.displayLabel ? match.matched : getMatch ? getMatch(option, match.matched) : [];
				let score = match.score + (option.boost || 0);
				addOption(new Option(option, a.source, matched, score));
				if (typeof option.section == "object" && option.section.rank === "dynamic") {
					let { name } = option.section;
					if (!dynamicSectionScore) dynamicSectionScore = Object.create(null);
					dynamicSectionScore[name] = Math.max(score, dynamicSectionScore[name] || -1e9);
				}
			}
		}
	}
	if (sections) {
		let sectionOrder = Object.create(null), pos = 0;
		let cmp = (a, b) => {
			return (a.rank === "dynamic" && b.rank === "dynamic" ? dynamicSectionScore[b.name] - dynamicSectionScore[a.name] : 0) || (typeof a.rank == "number" ? a.rank : 1e9) - (typeof b.rank == "number" ? b.rank : 1e9) || (a.name < b.name ? -1 : 1);
		};
		for (let s of sections.sort(cmp)) {
			pos -= 1e5;
			sectionOrder[s.name] = pos;
		}
		for (let option of options) {
			let { section } = option.completion;
			if (section) option.score += sectionOrder[typeof section == "string" ? section : section.name];
		}
	}
	let result = [], prev = null;
	let compare = conf.compareCompletions;
	for (let opt of options.sort((a, b) => b.score - a.score || compare(a.completion, b.completion))) {
		let cur = opt.completion;
		if (!prev || prev.label != cur.label || prev.detail != cur.detail || prev.type != null && cur.type != null && prev.type != cur.type || prev.apply != cur.apply || prev.boost != cur.boost) result.push(opt);
		else if (score(opt.completion) > score(prev)) result[result.length - 1] = opt;
		prev = opt.completion;
	}
	return result;
}
var CompletionDialog = class CompletionDialog {
	constructor(options, attrs, tooltip, timestamp, selected, disabled) {
		this.options = options;
		this.attrs = attrs;
		this.tooltip = tooltip;
		this.timestamp = timestamp;
		this.selected = selected;
		this.disabled = disabled;
	}
	setSelected(selected, id) {
		return selected == this.selected || selected >= this.options.length ? this : new CompletionDialog(this.options, makeAttrs(id, selected), this.tooltip, this.timestamp, selected, this.disabled);
	}
	static build(active, state, id, prev, conf, didSetActive) {
		if (prev && !didSetActive && active.some((s) => s.isPending)) return prev.setDisabled();
		let options = sortOptions(active, state);
		if (!options.length) return prev && active.some((a) => a.isPending) ? prev.setDisabled() : null;
		let selected = state.facet(completionConfig).selectOnOpen ? 0 : -1;
		if (prev && prev.selected != selected && prev.selected != -1) {
			let selectedValue = prev.options[prev.selected].completion;
			for (let i = 0; i < options.length; i++) if (options[i].completion == selectedValue) {
				selected = i;
				break;
			}
		}
		return new CompletionDialog(options, makeAttrs(id, selected), {
			pos: active.reduce((a, b) => b.hasResult() ? Math.min(a, b.from) : a, 1e8),
			create: createTooltip,
			above: conf.aboveCursor
		}, prev ? prev.timestamp : Date.now(), selected, false);
	}
	map(changes) {
		return new CompletionDialog(this.options, this.attrs, {
			...this.tooltip,
			pos: changes.mapPos(this.tooltip.pos)
		}, this.timestamp, this.selected, this.disabled);
	}
	setDisabled() {
		return new CompletionDialog(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
	}
};
var CompletionState = class CompletionState {
	constructor(active, id, open) {
		this.active = active;
		this.id = id;
		this.open = open;
	}
	static start() {
		return new CompletionState(none, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(tr) {
		let { state } = tr, conf = state.facet(completionConfig);
		let active = (conf.override || state.languageDataAt("autocomplete", cur(state)).map(asSource)).map((source) => {
			return (this.active.find((s) => s.source == source) || new ActiveSource(source, this.active.some((a) => a.state != 0) ? 1 : 0)).update(tr, conf);
		});
		if (active.length == this.active.length && active.every((a, i) => a == this.active[i])) active = this.active;
		let open = this.open, didSet = tr.effects.some((e) => e.is(setActiveEffect));
		if (open && tr.docChanged) open = open.map(tr.changes);
		if (tr.selection || active.some((a) => a.hasResult() && tr.changes.touchesRange(a.from, a.to)) || !sameResults(active, this.active) || didSet) open = CompletionDialog.build(active, state, this.id, open, conf, didSet);
		else if (open && open.disabled && !active.some((a) => a.isPending)) open = null;
		if (!open && active.every((a) => !a.isPending) && active.some((a) => a.hasResult())) active = active.map((a) => a.hasResult() ? new ActiveSource(a.source, 0) : a);
		for (let effect of tr.effects) if (effect.is(setSelectedEffect)) open = open && open.setSelected(effect.value, this.id);
		return active == this.active && open == this.open ? this : new CompletionState(active, this.id, open);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : this.active.length ? baseAttrs : noAttrs;
	}
};
function sameResults(a, b) {
	if (a == b) return true;
	for (let iA = 0, iB = 0;;) {
		while (iA < a.length && !a[iA].hasResult()) iA++;
		while (iB < b.length && !b[iB].hasResult()) iB++;
		let endA = iA == a.length, endB = iB == b.length;
		if (endA || endB) return endA == endB;
		if (a[iA++].result != b[iB++].result) return false;
	}
}
var baseAttrs = { "aria-autocomplete": "list" };
var noAttrs = {};
function makeAttrs(id, selected) {
	let result = {
		"aria-autocomplete": "list",
		"aria-haspopup": "listbox",
		"aria-controls": id
	};
	if (selected > -1) result["aria-activedescendant"] = id + "-" + selected;
	return result;
}
var none = [];
function getUpdateType(tr, conf) {
	if (tr.isUserEvent("input.complete")) {
		let completion = tr.annotation(pickedCompletion);
		if (completion && conf.activateOnCompletion(completion)) return 12;
	}
	let typing = tr.isUserEvent("input.type");
	return typing && conf.activateOnTyping ? 5 : typing ? 1 : tr.isUserEvent("delete.backward") ? 2 : tr.selection ? 8 : tr.docChanged ? 16 : 0;
}
var ActiveSource = class ActiveSource {
	constructor(source, state, explicit = false) {
		this.source = source;
		this.state = state;
		this.explicit = explicit;
	}
	hasResult() {
		return false;
	}
	get isPending() {
		return this.state == 1;
	}
	update(tr, conf) {
		let type = getUpdateType(tr, conf), value = this;
		if (type & 8 || type & 16 && this.touches(tr)) value = new ActiveSource(value.source, 0);
		if (type & 4 && value.state == 0) value = new ActiveSource(this.source, 1);
		value = value.updateFor(tr, type);
		for (let effect of tr.effects) if (effect.is(startCompletionEffect)) value = new ActiveSource(value.source, 1, effect.value);
		else if (effect.is(closeCompletionEffect)) value = new ActiveSource(value.source, 0);
		else if (effect.is(setActiveEffect)) {
			for (let active of effect.value) if (active.source == value.source) value = active;
		}
		return value;
	}
	updateFor(tr, type) {
		return this.map(tr.changes);
	}
	map(changes) {
		return this;
	}
	touches(tr) {
		return tr.changes.touchesRange(cur(tr.state));
	}
};
var ActiveResult = class ActiveResult extends ActiveSource {
	constructor(source, explicit, limit, result, from, to) {
		super(source, 3, explicit);
		this.limit = limit;
		this.result = result;
		this.from = from;
		this.to = to;
	}
	hasResult() {
		return true;
	}
	updateFor(tr, type) {
		var _a;
		if (!(type & 3)) return this.map(tr.changes);
		let result = this.result;
		if (result.map && !tr.changes.empty) result = result.map(result, tr.changes);
		let from = tr.changes.mapPos(this.from), to = tr.changes.mapPos(this.to, 1);
		let pos = cur(tr.state);
		if (pos > to || !result || type & 2 && (cur(tr.startState) == this.from || pos < this.limit)) return new ActiveSource(this.source, type & 4 ? 1 : 0);
		let limit = tr.changes.mapPos(this.limit);
		if (checkValid(result.validFor, tr.state, from, to)) return new ActiveResult(this.source, this.explicit, limit, result, from, to);
		if (result.update && (result = result.update(result, from, to, new CompletionContext(tr.state, pos, false)))) return new ActiveResult(this.source, this.explicit, limit, result, result.from, (_a = result.to) !== null && _a !== void 0 ? _a : cur(tr.state));
		return new ActiveSource(this.source, 1, this.explicit);
	}
	map(mapping) {
		if (mapping.empty) return this;
		if (!(this.result.map ? this.result.map(this.result, mapping) : this.result)) return new ActiveSource(this.source, 0);
		return new ActiveResult(this.source, this.explicit, mapping.mapPos(this.limit), this.result, mapping.mapPos(this.from), mapping.mapPos(this.to, 1));
	}
	touches(tr) {
		return tr.changes.touchesRange(this.from, this.to);
	}
};
function checkValid(validFor, state, from, to) {
	if (!validFor) return false;
	let text = state.sliceDoc(from, to);
	return typeof validFor == "function" ? validFor(text, from, to, state) : ensureAnchor(validFor, true).test(text);
}
var setActiveEffect = /* @__PURE__ */ StateEffect.define({ map(sources, mapping) {
	return sources.map((s) => s.map(mapping));
} });
var setSelectedEffect = /* @__PURE__ */ StateEffect.define();
var completionState = /* @__PURE__ */ StateField.define({
	create() {
		return CompletionState.start();
	},
	update(value, tr) {
		return value.update(tr);
	},
	provide: (f) => [showTooltip.from(f, (val) => val.tooltip), EditorView.contentAttributes.from(f, (state) => state.attrs)]
});
function applyCompletion(view, option) {
	const apply = option.completion.apply || option.completion.label;
	let result = view.state.field(completionState).active.find((a) => a.source == option.source);
	if (!(result instanceof ActiveResult)) return false;
	if (typeof apply == "string") view.dispatch({
		...insertCompletionText(view.state, apply, result.from, result.to),
		annotations: pickedCompletion.of(option.completion)
	});
	else apply(view, option.completion, result.from, result.to);
	return true;
}
var createTooltip = /* @__PURE__ */ completionTooltip(completionState, applyCompletion);
/**
Returns a command that moves the completion selection forward or
backward by the given amount.
*/
function moveCompletionSelection(forward, by = "option") {
	return (view) => {
		let cState = view.state.field(completionState, false);
		if (!cState || !cState.open || cState.open.disabled || Date.now() - cState.open.timestamp < view.state.facet(completionConfig).interactionDelay) return false;
		let step = 1, tooltip;
		if (by == "page" && (tooltip = getTooltip(view, cState.open.tooltip))) step = Math.max(2, Math.floor(tooltip.dom.offsetHeight / tooltip.dom.querySelector("li").offsetHeight) - 1);
		let { length } = cState.open.options;
		let selected = cState.open.selected > -1 ? cState.open.selected + step * (forward ? 1 : -1) : forward ? 0 : length - 1;
		if (selected < 0) selected = by == "page" ? 0 : length - 1;
		else if (selected >= length) selected = by == "page" ? length - 1 : 0;
		view.dispatch({ effects: setSelectedEffect.of(selected) });
		return true;
	};
}
/**
Accept the current completion.
*/
var acceptCompletion = (view) => {
	let cState = view.state.field(completionState, false);
	if (view.state.readOnly || !cState || !cState.open || cState.open.selected < 0 || cState.open.disabled || Date.now() - cState.open.timestamp < view.state.facet(completionConfig).interactionDelay) return false;
	return applyCompletion(view, cState.open.options[cState.open.selected]);
};
/**
Explicitly start autocompletion.
*/
var startCompletion = (view) => {
	if (!view.state.field(completionState, false)) return false;
	view.dispatch({ effects: startCompletionEffect.of(true) });
	return true;
};
/**
Close the currently active completion.
*/
var closeCompletion = (view) => {
	let cState = view.state.field(completionState, false);
	if (!cState || !cState.active.some((a) => a.state != 0)) return false;
	view.dispatch({ effects: closeCompletionEffect.of(null) });
	return true;
};
var RunningQuery = class {
	constructor(active, context) {
		this.active = active;
		this.context = context;
		this.time = Date.now();
		this.updates = [];
		this.done = void 0;
	}
};
var MaxUpdateCount = 50, MinAbortTime = 1e3;
var completionPlugin = /* @__PURE__ */ ViewPlugin.fromClass(class {
	constructor(view) {
		this.view = view;
		this.debounceUpdate = -1;
		this.running = [];
		this.debounceAccept = -1;
		this.pendingStart = false;
		this.composing = 0;
		for (let active of view.state.field(completionState).active) if (active.isPending) this.startQuery(active);
	}
	update(update) {
		let cState = update.state.field(completionState);
		let conf = update.state.facet(completionConfig);
		if (!update.selectionSet && !update.docChanged && update.startState.field(completionState) == cState) return;
		let doesReset = update.transactions.some((tr) => {
			let type = getUpdateType(tr, conf);
			return type & 8 || (tr.selection || tr.docChanged) && !(type & 3);
		});
		for (let i = 0; i < this.running.length; i++) {
			let query = this.running[i];
			if (doesReset || query.context.abortOnDocChange && update.docChanged || query.updates.length + update.transactions.length > MaxUpdateCount && Date.now() - query.time > MinAbortTime) {
				for (let handler of query.context.abortListeners) try {
					handler();
				} catch (e) {
					logException(this.view.state, e);
				}
				query.context.abortListeners = null;
				this.running.splice(i--, 1);
			} else query.updates.push(...update.transactions);
		}
		if (this.debounceUpdate > -1) clearTimeout(this.debounceUpdate);
		if (update.transactions.some((tr) => tr.effects.some((e) => e.is(startCompletionEffect)))) this.pendingStart = true;
		let delay = this.pendingStart ? 50 : conf.activateOnTypingDelay;
		this.debounceUpdate = cState.active.some((a) => a.isPending && !this.running.some((q) => q.active.source == a.source)) ? setTimeout(() => this.startUpdate(), delay) : -1;
		if (this.composing != 0) {
			for (let tr of update.transactions) if (tr.isUserEvent("input.type")) this.composing = 2;
			else if (this.composing == 2 && tr.selection) this.composing = 3;
		}
	}
	startUpdate() {
		this.debounceUpdate = -1;
		this.pendingStart = false;
		let { state } = this.view, cState = state.field(completionState);
		for (let active of cState.active) if (active.isPending && !this.running.some((r) => r.active.source == active.source)) this.startQuery(active);
		if (this.running.length && cState.open && cState.open.disabled) this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(completionConfig).updateSyncTime);
	}
	startQuery(active) {
		let { state } = this.view;
		let context = new CompletionContext(state, cur(state), active.explicit, this.view);
		let pending = new RunningQuery(active, context);
		this.running.push(pending);
		Promise.resolve(active.source(context)).then((result) => {
			if (!pending.context.aborted) {
				pending.done = result || null;
				this.scheduleAccept();
			}
		}, (err) => {
			this.view.dispatch({ effects: closeCompletionEffect.of(null) });
			logException(this.view.state, err);
		});
	}
	scheduleAccept() {
		if (this.running.every((q) => q.done !== void 0)) this.accept();
		else if (this.debounceAccept < 0) this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(completionConfig).updateSyncTime);
	}
	accept() {
		var _a;
		if (this.debounceAccept > -1) clearTimeout(this.debounceAccept);
		this.debounceAccept = -1;
		let updated = [];
		let conf = this.view.state.facet(completionConfig), cState = this.view.state.field(completionState);
		for (let i = 0; i < this.running.length; i++) {
			let query = this.running[i];
			if (query.done === void 0) continue;
			this.running.splice(i--, 1);
			if (query.done) {
				let pos = cur(query.updates.length ? query.updates[0].startState : this.view.state);
				let limit = Math.min(pos, query.done.from + (query.active.explicit ? 0 : 1));
				let active = new ActiveResult(query.active.source, query.active.explicit, limit, query.done, query.done.from, (_a = query.done.to) !== null && _a !== void 0 ? _a : pos);
				for (let tr of query.updates) active = active.update(tr, conf);
				if (active.hasResult()) {
					updated.push(active);
					continue;
				}
			}
			let current = cState.active.find((a) => a.source == query.active.source);
			if (current && current.isPending) if (query.done == null) {
				let active = new ActiveSource(query.active.source, 0);
				for (let tr of query.updates) active = active.update(tr, conf);
				if (!active.isPending) updated.push(active);
			} else this.startQuery(current);
		}
		if (updated.length || cState.open && cState.open.disabled) this.view.dispatch({ effects: setActiveEffect.of(updated) });
	}
}, { eventHandlers: {
	blur(event) {
		let state = this.view.state.field(completionState, false);
		if (state && state.tooltip && this.view.state.facet(completionConfig).closeOnBlur) {
			let dialog = state.open && getTooltip(this.view, state.open.tooltip);
			if (!dialog || !dialog.dom.contains(event.relatedTarget)) setTimeout(() => this.view.dispatch({ effects: closeCompletionEffect.of(null) }), 10);
		}
	},
	compositionstart() {
		this.composing = 1;
	},
	compositionend() {
		if (this.composing == 3) setTimeout(() => this.view.dispatch({ effects: startCompletionEffect.of(false) }), 20);
		this.composing = 0;
	}
} });
var windows = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform);
var commitCharacters = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ EditorView.domEventHandlers({ keydown(event, view) {
	let field = view.state.field(completionState, false);
	if (!field || !field.open || field.open.disabled || field.open.selected < 0 || event.key.length > 1 || event.ctrlKey && !(windows && event.altKey) || event.metaKey) return false;
	let option = field.open.options[field.open.selected];
	let result = field.active.find((a) => a.source == option.source);
	let commitChars = option.completion.commitCharacters || result.result.commitCharacters;
	if (commitChars && commitChars.indexOf(event.key) > -1) applyCompletion(view, option);
	return false;
} }));
var baseTheme = /* @__PURE__ */ EditorView.baseTheme({
	".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": {
		fontFamily: "monospace",
		whiteSpace: "nowrap",
		overflow: "hidden auto",
		maxWidth_fallback: "700px",
		maxWidth: "min(700px, 95vw)",
		minWidth: "250px",
		maxHeight: "10em",
		height: "100%",
		listStyle: "none",
		margin: 0,
		padding: 0,
		"& > li, & > completion-section": {
			padding: "1px 3px",
			lineHeight: 1.2
		},
		"& > li": {
			overflowX: "hidden",
			textOverflow: "ellipsis",
			cursor: "pointer"
		},
		"& > completion-section": {
			display: "list-item",
			borderBottom: "1px solid silver",
			paddingLeft: "0.5em",
			opacity: .7
		}
	} },
	"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#17c",
		color: "white"
	},
	"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
	"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#347",
		color: "white"
	},
	"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
	".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
		content: "\"···\"",
		opacity: .5,
		display: "block",
		textAlign: "center"
	},
	".cm-tooltip.cm-completionInfo": {
		position: "absolute",
		padding: "3px 9px",
		width: "max-content",
		maxWidth: `400px`,
		boxSizing: "border-box",
		whiteSpace: "pre-line"
	},
	".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
	".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
	".cm-completionInfo.cm-completionInfo-left-narrow": { right: `30px` },
	".cm-completionInfo.cm-completionInfo-right-narrow": { left: `30px` },
	"&light .cm-snippetField": { backgroundColor: "#00000022" },
	"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
	".cm-snippetFieldPosition": {
		verticalAlign: "text-top",
		width: 0,
		height: "1.15em",
		display: "inline-block",
		margin: "0 -0.7px -.7em",
		borderLeft: "1.4px dotted #888"
	},
	".cm-completionMatchedText": { textDecoration: "underline" },
	".cm-completionDetail": {
		marginLeft: "0.5em",
		fontStyle: "italic"
	},
	".cm-completionIcon": {
		fontSize: "90%",
		width: ".8em",
		display: "inline-block",
		textAlign: "center",
		paddingRight: ".6em",
		opacity: "0.6",
		boxSizing: "content-box"
	},
	".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
	".cm-completionIcon-class": { "&:after": { content: "'○'" } },
	".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
	".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
	".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
	".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
	".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
	".cm-completionIcon-property": { "&:after": { content: "'□'" } },
	".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
	".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
	".cm-completionIcon-text": { "&:after": {
		content: "'abc'",
		fontSize: "50%",
		verticalAlign: "middle"
	} }
});
var FieldPos = class {
	constructor(field, line, from, to) {
		this.field = field;
		this.line = line;
		this.from = from;
		this.to = to;
	}
};
var FieldRange = class FieldRange {
	constructor(field, from, to) {
		this.field = field;
		this.from = from;
		this.to = to;
	}
	map(changes) {
		let from = changes.mapPos(this.from, -1, MapMode.TrackDel);
		let to = changes.mapPos(this.to, 1, MapMode.TrackDel);
		return from == null || to == null ? null : new FieldRange(this.field, from, to);
	}
};
var Snippet = class Snippet {
	constructor(lines, fieldPositions) {
		this.lines = lines;
		this.fieldPositions = fieldPositions;
	}
	instantiate(state, pos) {
		let text = [], lineStart = [pos];
		let lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.text)[0];
		for (let line of this.lines) {
			if (text.length) {
				let indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
				for (let i = 0; i < tabs; i++) indent += state.facet(indentUnit);
				lineStart.push(pos + indent.length - tabs);
				line = indent + line.slice(tabs);
			}
			text.push(line);
			pos += line.length + 1;
		}
		return {
			text,
			ranges: this.fieldPositions.map((pos) => new FieldRange(pos.field, lineStart[pos.line] + pos.from, lineStart[pos.line] + pos.to))
		};
	}
	static parse(template) {
		let fields = [];
		let lines = [], positions = [], m;
		for (let line of template.split(/\r\n?|\n/)) {
			while (m = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(line)) {
				let seq = m[1] ? +m[1] : null, rawName = m[2] || m[3] || "", found = -1;
				let name = rawName.replace(/\\[{}]/g, (m) => m[1]);
				for (let i = 0; i < fields.length; i++) if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false) found = i;
				if (found < 0) {
					let i = 0;
					while (i < fields.length && (seq == null || fields[i].seq != null && fields[i].seq < seq)) i++;
					fields.splice(i, 0, {
						seq,
						name
					});
					found = i;
					for (let pos of positions) if (pos.field >= found) pos.field++;
				}
				for (let pos of positions) if (pos.line == lines.length && pos.from > m.index) {
					let snip = m[2] ? 3 + (m[1] || "").length : 2;
					pos.from -= snip;
					pos.to -= snip;
				}
				positions.push(new FieldPos(found, lines.length, m.index, m.index + name.length));
				line = line.slice(0, m.index) + rawName + line.slice(m.index + m[0].length);
			}
			line = line.replace(/\\([{}])/g, (_, brace, index) => {
				for (let pos of positions) if (pos.line == lines.length && pos.from > index) {
					pos.from--;
					pos.to--;
				}
				return brace;
			});
			lines.push(line);
		}
		return new Snippet(lines, positions);
	}
};
var fieldMarker = /* @__PURE__ */ Decoration.widget({ widget: /* @__PURE__ */ new class extends WidgetType {
	toDOM() {
		let span = document.createElement("span");
		span.className = "cm-snippetFieldPosition";
		return span;
	}
	ignoreEvent() {
		return false;
	}
}() });
var fieldRange = /* @__PURE__ */ Decoration.mark({ class: "cm-snippetField" });
var ActiveSnippet = class ActiveSnippet {
	constructor(ranges, active) {
		this.ranges = ranges;
		this.active = active;
		this.deco = Decoration.set(ranges.map((r) => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)), true);
	}
	map(changes) {
		let ranges = [];
		for (let r of this.ranges) {
			let mapped = r.map(changes);
			if (!mapped) return null;
			ranges.push(mapped);
		}
		return new ActiveSnippet(ranges, this.active);
	}
	selectionInsideField(sel) {
		return sel.ranges.every((range) => this.ranges.some((r) => r.field == this.active && r.from <= range.from && r.to >= range.to));
	}
};
var setActive = /* @__PURE__ */ StateEffect.define({ map(value, changes) {
	return value && value.map(changes);
} });
var moveToField = /* @__PURE__ */ StateEffect.define();
var snippetState = /* @__PURE__ */ StateField.define({
	create() {
		return null;
	},
	update(value, tr) {
		for (let effect of tr.effects) {
			if (effect.is(setActive)) return effect.value;
			if (effect.is(moveToField) && value) return new ActiveSnippet(value.ranges, effect.value);
		}
		if (value && tr.docChanged) value = value.map(tr.changes);
		if (value && tr.selection && !value.selectionInsideField(tr.selection)) value = null;
		return value;
	},
	provide: (f) => EditorView.decorations.from(f, (val) => val ? val.deco : Decoration.none)
});
function fieldSelection(ranges, field) {
	return EditorSelection.create(ranges.filter((r) => r.field == field).map((r) => EditorSelection.range(r.from, r.to)));
}
/**
Convert a snippet template to a function that can
[apply](https://codemirror.net/6/docs/ref/#autocomplete.Completion.apply) it. Snippets are written
using syntax like this:

"for (let ${index} = 0; ${index} < ${end}; ${index}++) {\n\t${}\n}"

Each `${}` placeholder (you may also use `#{}`) indicates a field
that the user can fill in. Its name, if any, will be the default
content for the field.

When the snippet is activated by calling the returned function,
the code is inserted at the given position. Newlines in the
template are indented by the indentation of the start line, plus
one [indent unit](https://codemirror.net/6/docs/ref/#language.indentUnit) per tab character after
the newline.

On activation, (all instances of) the first field are selected.
The user can move between fields with Tab and Shift-Tab as long as
the fields are active. Moving to the last field or moving the
cursor out of the current field deactivates the fields.

The order of fields defaults to textual order, but you can add
numbers to placeholders (`${1}` or `${1:defaultText}`) to provide
a custom order.

To include a literal `{` or `}` in your template, put a backslash
in front of it. This will be removed and the brace will not be
interpreted as indicating a placeholder.
*/
function snippet(template) {
	let snippet = Snippet.parse(template);
	return (editor, completion, from, to) => {
		let { text, ranges } = snippet.instantiate(editor.state, from);
		let { main } = editor.state.selection;
		let spec = {
			changes: {
				from,
				to: to == main.from ? main.to : to,
				insert: Text.of(text)
			},
			scrollIntoView: true,
			annotations: completion ? [pickedCompletion.of(completion), Transaction.userEvent.of("input.complete")] : void 0
		};
		if (ranges.length) spec.selection = fieldSelection(ranges, 0);
		if (ranges.some((r) => r.field > 0)) {
			let active = new ActiveSnippet(ranges, 0);
			let effects = spec.effects = [setActive.of(active)];
			if (editor.state.field(snippetState, false) === void 0) effects.push(StateEffect.appendConfig.of([
				snippetState,
				addSnippetKeymap,
				snippetPointerHandler,
				baseTheme
			]));
		}
		editor.dispatch(editor.state.update(spec));
	};
}
function moveField(dir) {
	return ({ state, dispatch }) => {
		let active = state.field(snippetState, false);
		if (!active || dir < 0 && active.active == 0) return false;
		let next = active.active + dir, last = dir > 0 && !active.ranges.some((r) => r.field == next + dir);
		dispatch(state.update({
			selection: fieldSelection(active.ranges, next),
			effects: setActive.of(last ? null : new ActiveSnippet(active.ranges, next)),
			scrollIntoView: true
		}));
		return true;
	};
}
/**
A command that clears the active snippet, if any.
*/
var clearSnippet = ({ state, dispatch }) => {
	if (!state.field(snippetState, false)) return false;
	dispatch(state.update({ effects: setActive.of(null) }));
	return true;
};
var defaultSnippetKeymap = [{
	key: "Tab",
	run: /* @__PURE__ */ moveField(1),
	shift: /* @__PURE__ */ moveField(-1)
}, {
	key: "Escape",
	run: clearSnippet
}];
/**
A facet that can be used to configure the key bindings used by
snippets. The default binds Tab to
[`nextSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.nextSnippetField), Shift-Tab to
[`prevSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.prevSnippetField), and Escape
to [`clearSnippet`](https://codemirror.net/6/docs/ref/#autocomplete.clearSnippet).
*/
var snippetKeymap = /* @__PURE__ */ Facet.define({ combine(maps) {
	return maps.length ? maps[0] : defaultSnippetKeymap;
} });
var addSnippetKeymap = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ keymap.compute([snippetKeymap], (state) => state.facet(snippetKeymap)));
/**
Create a completion from a snippet. Returns an object with the
properties from `completion`, plus an `apply` function that
applies the snippet.
*/
function snippetCompletion(template, completion) {
	return {
		...completion,
		apply: snippet(template)
	};
}
var snippetPointerHandler = /* @__PURE__ */ EditorView.domEventHandlers({ mousedown(event, view) {
	let active = view.state.field(snippetState, false), pos;
	if (!active || (pos = view.posAtCoords({
		x: event.clientX,
		y: event.clientY
	})) == null) return false;
	let match = active.ranges.find((r) => r.from <= pos && r.to >= pos);
	if (!match || match.field == active.active) return false;
	view.dispatch({
		selection: fieldSelection(active.ranges, match.field),
		effects: setActive.of(active.ranges.some((r) => r.field > match.field) ? new ActiveSnippet(active.ranges, match.field) : null),
		scrollIntoView: true
	});
	return true;
} });
var defaults = {
	brackets: [
		"(",
		"[",
		"{",
		"'",
		"\""
	],
	before: ")]}:;>",
	stringPrefixes: []
};
var closeBracketEffect = /* @__PURE__ */ StateEffect.define({ map(value, mapping) {
	let mapped = mapping.mapPos(value, -1, MapMode.TrackAfter);
	return mapped == null ? void 0 : mapped;
} });
var closedBracket = /* @__PURE__ */ new class extends RangeValue {}();
closedBracket.startSide = 1;
closedBracket.endSide = -1;
var bracketState = /* @__PURE__ */ StateField.define({
	create() {
		return RangeSet.empty;
	},
	update(value, tr) {
		value = value.map(tr.changes);
		if (tr.selection) {
			let line = tr.state.doc.lineAt(tr.selection.main.head);
			value = value.update({ filter: (from) => from >= line.from && from <= line.to });
		}
		for (let effect of tr.effects) if (effect.is(closeBracketEffect)) value = value.update({ add: [closedBracket.range(effect.value, effect.value + 1)] });
		return value;
	}
});
/**
Extension to enable bracket-closing behavior. When a closeable
bracket is typed, its closing bracket is immediately inserted
after the cursor. When closing a bracket directly in front of a
closing bracket inserted by the extension, the cursor moves over
that bracket.
*/
function closeBrackets() {
	return [inputHandler, bracketState];
}
var definedClosing = "()[]{}<>«»»«［］｛｝";
function closing(ch) {
	for (let i = 0; i < 16; i += 2) if (definedClosing.charCodeAt(i) == ch) return definedClosing.charAt(i + 1);
	return fromCodePoint(ch < 128 ? ch : ch + 1);
}
function config(state, pos) {
	return state.languageDataAt("closeBrackets", pos)[0] || defaults;
}
var android$1 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent);
var inputHandler = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, insert) => {
	if ((android$1 ? view.composing : view.compositionStarted) || view.state.readOnly) return false;
	let sel = view.state.selection.main;
	if (insert.length > 2 || insert.length == 2 && codePointSize(codePointAt(insert, 0)) == 1 || from != sel.from || to != sel.to) return false;
	let tr = insertBracket(view.state, insert);
	if (!tr) return false;
	view.dispatch(tr);
	return true;
});
/**
Command that implements deleting a pair of matching brackets when
the cursor is between them.
*/
var deleteBracketPair = ({ state, dispatch }) => {
	if (state.readOnly) return false;
	let tokens = config(state, state.selection.main.head).brackets || defaults.brackets;
	let dont = null, changes = state.changeByRange((range) => {
		if (range.empty) {
			let before = prevChar(state.doc, range.head);
			for (let token of tokens) if (token == before && nextChar(state.doc, range.head) == closing(codePointAt(token, 0))) return {
				changes: {
					from: range.head - token.length,
					to: range.head + token.length
				},
				range: EditorSelection.cursor(range.head - token.length)
			};
		}
		return { range: dont = range };
	});
	if (!dont) dispatch(state.update(changes, {
		scrollIntoView: true,
		userEvent: "delete.backward"
	}));
	return !dont;
};
/**
Close-brackets related key bindings. Binds Backspace to
[`deleteBracketPair`](https://codemirror.net/6/docs/ref/#autocomplete.deleteBracketPair).
*/
var closeBracketsKeymap = [{
	key: "Backspace",
	run: deleteBracketPair
}];
/**
Implements the extension's behavior on text insertion. If the
given string counts as a bracket in the language around the
selection, and replacing the selection with it requires custom
behavior (inserting a closing version or skipping past a
previously-closed bracket), this function returns a transaction
representing that custom behavior. (You only need this if you want
to programmatically insert brackets—the
[`closeBrackets`](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets) extension will
take care of running this for user input.)
*/
function insertBracket(state, bracket) {
	let conf = config(state, state.selection.main.head);
	let tokens = conf.brackets || defaults.brackets;
	for (let tok of tokens) {
		let closed = closing(codePointAt(tok, 0));
		if (bracket == tok) return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1, conf) : handleOpen(state, tok, closed, conf.before || defaults.before);
		if (bracket == closed && closedBracketAt(state, state.selection.main.from)) return handleClose(state, tok, closed);
	}
	return null;
}
function closedBracketAt(state, pos) {
	let found = false;
	state.field(bracketState).between(0, state.doc.length, (from) => {
		if (from == pos) found = true;
	});
	return found;
}
function nextChar(doc, pos) {
	let next = doc.sliceString(pos, pos + 2);
	return next.slice(0, codePointSize(codePointAt(next, 0)));
}
function prevChar(doc, pos) {
	let prev = doc.sliceString(pos - 2, pos);
	return codePointSize(codePointAt(prev, 0)) == prev.length ? prev : prev.slice(1);
}
function handleOpen(state, open, close, closeBefore) {
	let dont = null, changes = state.changeByRange((range) => {
		if (!range.empty) return {
			changes: [{
				insert: open,
				from: range.from
			}, {
				insert: close,
				from: range.to
			}],
			effects: closeBracketEffect.of(range.to + open.length),
			range: EditorSelection.range(range.anchor + open.length, range.head + open.length)
		};
		let next = nextChar(state.doc, range.head);
		if (!next || /\s/.test(next) || closeBefore.indexOf(next) > -1) return {
			changes: {
				insert: open + close,
				from: range.head
			},
			effects: closeBracketEffect.of(range.head + open.length),
			range: EditorSelection.cursor(range.head + open.length)
		};
		return { range: dont = range };
	});
	return dont ? null : state.update(changes, {
		scrollIntoView: true,
		userEvent: "input.type"
	});
}
function handleClose(state, _open, close) {
	let dont = null, changes = state.changeByRange((range) => {
		if (range.empty && nextChar(state.doc, range.head) == close) return {
			changes: {
				from: range.head,
				to: range.head + close.length,
				insert: close
			},
			range: EditorSelection.cursor(range.head + close.length)
		};
		return dont = { range };
	});
	return dont ? null : state.update(changes, {
		scrollIntoView: true,
		userEvent: "input.type"
	});
}
function handleSame(state, token, allowTriple, config) {
	let stringPrefixes = config.stringPrefixes || defaults.stringPrefixes;
	let dont = null, changes = state.changeByRange((range) => {
		if (!range.empty) return {
			changes: [{
				insert: token,
				from: range.from
			}, {
				insert: token,
				from: range.to
			}],
			effects: closeBracketEffect.of(range.to + token.length),
			range: EditorSelection.range(range.anchor + token.length, range.head + token.length)
		};
		let pos = range.head, next = nextChar(state.doc, pos), start;
		if (next == token) {
			if (nodeStart(state, pos)) return {
				changes: {
					insert: token + token,
					from: pos
				},
				effects: closeBracketEffect.of(pos + token.length),
				range: EditorSelection.cursor(pos + token.length)
			};
			else if (closedBracketAt(state, pos)) {
				let content = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token ? token + token + token : token;
				return {
					changes: {
						from: pos,
						to: pos + content.length,
						insert: content
					},
					range: EditorSelection.cursor(pos + content.length)
				};
			}
		} else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token && (start = canStartStringAt(state, pos - 2 * token.length, stringPrefixes)) > -1 && nodeStart(state, start)) return {
			changes: {
				insert: token + token + token + token,
				from: pos
			},
			effects: closeBracketEffect.of(pos + token.length),
			range: EditorSelection.cursor(pos + token.length)
		};
		else if (state.charCategorizer(pos)(next) != CharCategory.Word) {
			if (canStartStringAt(state, pos, stringPrefixes) > -1 && !probablyInString(state, pos, token, stringPrefixes)) return {
				changes: {
					insert: token + token,
					from: pos
				},
				effects: closeBracketEffect.of(pos + token.length),
				range: EditorSelection.cursor(pos + token.length)
			};
		}
		return { range: dont = range };
	});
	return dont ? null : state.update(changes, {
		scrollIntoView: true,
		userEvent: "input.type"
	});
}
function nodeStart(state, pos) {
	let tree = syntaxTree(state).resolveInner(pos + 1);
	return tree.parent && tree.from == pos;
}
function probablyInString(state, pos, quoteToken, prefixes) {
	let node = syntaxTree(state).resolveInner(pos, -1);
	let maxPrefix = prefixes.reduce((m, p) => Math.max(m, p.length), 0);
	for (let i = 0; i < 5; i++) {
		let start = state.sliceDoc(node.from, Math.min(node.to, node.from + quoteToken.length + maxPrefix));
		let quotePos = start.indexOf(quoteToken);
		if (!quotePos || quotePos > -1 && prefixes.indexOf(start.slice(0, quotePos)) > -1) {
			let first = node.firstChild;
			while (first && first.from == node.from && first.to - first.from > quoteToken.length + quotePos) {
				if (state.sliceDoc(first.to - quoteToken.length, first.to) == quoteToken) return false;
				first = first.firstChild;
			}
			return true;
		}
		let parent = node.to == pos && node.parent;
		if (!parent) break;
		node = parent;
	}
	return false;
}
function canStartStringAt(state, pos, prefixes) {
	let charCat = state.charCategorizer(pos);
	if (charCat(state.sliceDoc(pos - 1, pos)) != CharCategory.Word) return pos;
	for (let prefix of prefixes) {
		let start = pos - prefix.length;
		if (state.sliceDoc(start, pos) == prefix && charCat(state.sliceDoc(start - 1, start)) != CharCategory.Word) return start;
	}
	return -1;
}
/**
Returns an extension that enables autocompletion.
*/
function autocompletion(config = {}) {
	return [
		commitCharacters,
		completionState,
		completionConfig.of(config),
		completionPlugin,
		completionKeymapExt,
		baseTheme
	];
}
/**
Basic keybindings for autocompletion.

- Ctrl-Space (and Alt-\` or Alt-i on macOS): [`startCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.startCompletion)
- Escape: [`closeCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.closeCompletion)
- ArrowDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true)`
- ArrowUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false)`
- PageDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true, "page")`
- PageUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false, "page")`
- Enter: [`acceptCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.acceptCompletion)
*/
var completionKeymap = [
	{
		key: "Ctrl-Space",
		run: startCompletion
	},
	{
		mac: "Alt-`",
		run: startCompletion
	},
	{
		mac: "Alt-i",
		run: startCompletion
	},
	{
		key: "Escape",
		run: closeCompletion
	},
	{
		key: "ArrowDown",
		run: /* @__PURE__ */ moveCompletionSelection(true)
	},
	{
		key: "ArrowUp",
		run: /* @__PURE__ */ moveCompletionSelection(false)
	},
	{
		key: "PageDown",
		run: /* @__PURE__ */ moveCompletionSelection(true, "page")
	},
	{
		key: "PageUp",
		run: /* @__PURE__ */ moveCompletionSelection(false, "page")
	},
	{
		key: "Enter",
		run: acceptCompletion
	}
];
var completionKeymapExt = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ keymap.computeN([completionConfig], (state) => state.facet(completionConfig).defaultKeymap ? [completionKeymap] : []));
/**
Get the current completion status. When completions are available,
this will return `"active"`. When completions are pending (in the
process of being queried), this returns `"pending"`. Otherwise, it
returns `null`.
*/
function completionStatus(state) {
	let cState = state.field(completionState, false);
	return cState && cState.active.some((a) => a.isPending) ? "pending" : cState && cState.active.some((a) => a.state != 0) ? "active" : null;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+lr@1.4.5/node_modules/@lezer/lr/dist/index.js
init_dist();
/**
A parse stack. These are used internally by the parser to track
parsing progress. They also provide some properties and methods
that external code such as a tokenizer can use to get information
about the parse state.
*/
var Stack = class Stack {
	/**
	@internal
	*/
	constructor(p, stack, state, reducePos, pos, score, buffer, bufferBase, curContext, lookAhead = 0, parent) {
		this.p = p;
		this.stack = stack;
		this.state = state;
		this.reducePos = reducePos;
		this.pos = pos;
		this.score = score;
		this.buffer = buffer;
		this.bufferBase = bufferBase;
		this.curContext = curContext;
		this.lookAhead = lookAhead;
		this.parent = parent;
	}
	/**
	@internal
	*/
	toString() {
		return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
	}
	/**
	@internal
	*/
	static start(p, state, pos = 0) {
		let cx = p.parser.context;
		return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
	}
	/**
	The stack's current [context](#lr.ContextTracker) value, if
	any. Its type will depend on the context tracker's type
	parameter, or it will be `null` if there is no context
	tracker.
	*/
	get context() {
		return this.curContext ? this.curContext.context : null;
	}
	/**
	@internal
	*/
	pushState(state, start) {
		this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
		this.state = state;
	}
	/**
	@internal
	*/
	reduce(action) {
		var _a;
		let depth = action >> 19, type = action & 65535;
		let { parser } = this.p;
		let lookaheadRecord = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
		let dPrec = parser.dynamicPrecedence(type);
		if (dPrec) this.score += dPrec;
		if (depth == 0) {
			this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
			if (type < parser.minRepeatTerm) this.storeNode(type, this.reducePos, this.reducePos, lookaheadRecord ? 8 : 4, true);
			this.reduceContext(type, this.reducePos);
			return;
		}
		let base = this.stack.length - (depth - 1) * 3 - (action & 262144 ? 6 : 0);
		let start = base ? this.stack[base - 2] : this.p.ranges[0].from, size = this.reducePos - start;
		if (size >= 2e3 && !((_a = this.p.parser.nodeSet.types[type]) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
			if (start == this.p.lastBigReductionStart) {
				this.p.bigReductionCount++;
				this.p.lastBigReductionSize = size;
			} else if (this.p.lastBigReductionSize < size) {
				this.p.bigReductionCount = 1;
				this.p.lastBigReductionStart = start;
				this.p.lastBigReductionSize = size;
			}
		}
		let bufferBase = base ? this.stack[base - 1] : 0, count = this.bufferBase + this.buffer.length - bufferBase;
		if (type < parser.minRepeatTerm || action & 131072) {
			let pos = parser.stateFlag(this.state, 1) ? this.pos : this.reducePos;
			this.storeNode(type, start, pos, count + 4, true);
		}
		if (action & 262144) this.state = this.stack[base];
		else {
			let baseStateID = this.stack[base - 3];
			this.state = parser.getGoto(baseStateID, type, true);
		}
		while (this.stack.length > base) this.stack.pop();
		this.reduceContext(type, start);
	}
	/**
	@internal
	*/
	storeNode(term, start, end, size = 4, mustSink = false) {
		if (term == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
			let cur = this, top = this.buffer.length;
			if (top == 0 && cur.parent) {
				top = cur.bufferBase - cur.parent.bufferBase;
				cur = cur.parent;
			}
			if (top > 0 && cur.buffer[top - 4] == 0 && cur.buffer[top - 1] > -1) {
				if (start == end) return;
				if (cur.buffer[top - 2] >= start) {
					cur.buffer[top - 2] = end;
					return;
				}
			}
		}
		if (!mustSink || this.pos == end) this.buffer.push(term, start, end, size);
		else {
			let index = this.buffer.length;
			if (index > 0 && (this.buffer[index - 4] != 0 || this.buffer[index - 1] < 0)) {
				let mustMove = false;
				for (let scan = index; scan > 0 && this.buffer[scan - 2] > end; scan -= 4) if (this.buffer[scan - 1] >= 0) {
					mustMove = true;
					break;
				}
				if (mustMove) while (index > 0 && this.buffer[index - 2] > end) {
					this.buffer[index] = this.buffer[index - 4];
					this.buffer[index + 1] = this.buffer[index - 3];
					this.buffer[index + 2] = this.buffer[index - 2];
					this.buffer[index + 3] = this.buffer[index - 1];
					index -= 4;
					if (size > 4) size -= 4;
				}
			}
			this.buffer[index] = term;
			this.buffer[index + 1] = start;
			this.buffer[index + 2] = end;
			this.buffer[index + 3] = size;
		}
	}
	/**
	@internal
	*/
	shift(action, type, start, end) {
		if (action & 131072) this.pushState(action & 65535, this.pos);
		else if ((action & 262144) == 0) {
			let nextState = action, { parser } = this.p;
			if (end > this.pos || type <= parser.maxNode) {
				this.pos = end;
				if (!parser.stateFlag(nextState, 1)) this.reducePos = end;
			}
			this.pushState(nextState, start);
			this.shiftContext(type, start);
			if (type <= parser.maxNode) this.buffer.push(type, start, end, 4);
		} else {
			this.pos = end;
			this.shiftContext(type, start);
			if (type <= this.p.parser.maxNode) this.buffer.push(type, start, end, 4);
		}
	}
	/**
	@internal
	*/
	apply(action, next, nextStart, nextEnd) {
		if (action & 65536) this.reduce(action);
		else this.shift(action, next, nextStart, nextEnd);
	}
	/**
	@internal
	*/
	useNode(value, next) {
		let index = this.p.reused.length - 1;
		if (index < 0 || this.p.reused[index] != value) {
			this.p.reused.push(value);
			index++;
		}
		let start = this.pos;
		this.reducePos = this.pos = start + value.length;
		this.pushState(next, start);
		this.buffer.push(index, start, this.reducePos, -1);
		if (this.curContext) this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
	}
	/**
	@internal
	*/
	split() {
		let parent = this;
		let off = parent.buffer.length;
		while (off > 0 && parent.buffer[off - 2] > parent.reducePos) off -= 4;
		let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
		while (parent && base == parent.bufferBase) parent = parent.parent;
		return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
	}
	/**
	@internal
	*/
	recoverByDelete(next, nextEnd) {
		let isNode = next <= this.p.parser.maxNode;
		if (isNode) this.storeNode(next, this.pos, nextEnd, 4);
		this.storeNode(0, this.pos, nextEnd, isNode ? 8 : 4);
		this.pos = this.reducePos = nextEnd;
		this.score -= 190;
	}
	/**
	Check if the given term would be able to be shifted (optionally
	after some reductions) on this stack. This can be useful for
	external tokenizers that want to make sure they only provide a
	given token when it applies.
	*/
	canShift(term) {
		for (let sim = new SimulatedStack(this);;) {
			let action = this.p.parser.stateSlot(sim.state, 4) || this.p.parser.hasAction(sim.state, term);
			if (action == 0) return false;
			if ((action & 65536) == 0) return true;
			sim.reduce(action);
		}
	}
	/**
	@internal
	*/
	recoverByInsert(next) {
		if (this.stack.length >= 300) return [];
		let nextStates = this.p.parser.nextStates(this.state);
		if (nextStates.length > 8 || this.stack.length >= 120) {
			let best = [];
			for (let i = 0, s; i < nextStates.length; i += 2) if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next)) best.push(nextStates[i], s);
			if (this.stack.length < 120) for (let i = 0; best.length < 8 && i < nextStates.length; i += 2) {
				let s = nextStates[i + 1];
				if (!best.some((v, i) => i & 1 && v == s)) best.push(nextStates[i], s);
			}
			nextStates = best;
		}
		let result = [];
		for (let i = 0; i < nextStates.length && result.length < 4; i += 2) {
			let s = nextStates[i + 1];
			if (s == this.state) continue;
			let stack = this.split();
			stack.pushState(s, this.pos);
			stack.storeNode(0, stack.pos, stack.pos, 4, true);
			stack.shiftContext(nextStates[i], this.pos);
			stack.reducePos = this.pos;
			stack.score -= 200;
			result.push(stack);
		}
		return result;
	}
	/**
	@internal
	*/
	forceReduce() {
		let { parser } = this.p;
		let reduce = parser.stateSlot(this.state, 5);
		if ((reduce & 65536) == 0) return false;
		if (!parser.validAction(this.state, reduce)) {
			let depth = reduce >> 19, term = reduce & 65535;
			let target = this.stack.length - depth * 3;
			if (target < 0 || parser.getGoto(this.stack[target], term, false) < 0) {
				let backup = this.findForcedReduction();
				if (backup == null) return false;
				reduce = backup;
			}
			this.storeNode(0, this.pos, this.pos, 4, true);
			this.score -= 100;
		}
		this.reducePos = this.pos;
		this.reduce(reduce);
		return true;
	}
	/**
	Try to scan through the automaton to find some kind of reduction
	that can be applied. Used when the regular ForcedReduce field
	isn't a valid action. @internal
	*/
	findForcedReduction() {
		let { parser } = this.p, seen = [];
		let explore = (state, depth) => {
			if (seen.includes(state)) return;
			seen.push(state);
			return parser.allActions(state, (action) => {
				if (action & 393216);
				else if (action & 65536) {
					let rDepth = (action >> 19) - depth;
					if (rDepth > 1) {
						let term = action & 65535, target = this.stack.length - rDepth * 3;
						if (target >= 0 && parser.getGoto(this.stack[target], term, false) >= 0) return rDepth << 19 | 65536 | term;
					}
				} else {
					let found = explore(action, depth + 1);
					if (found != null) return found;
				}
			});
		};
		return explore(this.state, 0);
	}
	/**
	@internal
	*/
	forceAll() {
		while (!this.p.parser.stateFlag(this.state, 2)) if (!this.forceReduce()) {
			this.storeNode(0, this.pos, this.pos, 4, true);
			break;
		}
		return this;
	}
	/**
	Check whether this state has no further actions (assumed to be a direct descendant of the
	top state, since any other states must be able to continue
	somehow). @internal
	*/
	get deadEnd() {
		if (this.stack.length != 3) return false;
		let { parser } = this.p;
		return parser.data[parser.stateSlot(this.state, 1)] == 65535 && !parser.stateSlot(this.state, 4);
	}
	/**
	Restart the stack (put it back in its start state). Only safe
	when this.stack.length == 3 (state is directly below the top
	state). @internal
	*/
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, true);
		this.state = this.stack[0];
		this.stack.length = 0;
	}
	/**
	@internal
	*/
	sameState(other) {
		if (this.state != other.state || this.stack.length != other.stack.length) return false;
		for (let i = 0; i < this.stack.length; i += 3) if (this.stack[i] != other.stack[i]) return false;
		return true;
	}
	/**
	Get the parser used by this stack.
	*/
	get parser() {
		return this.p.parser;
	}
	/**
	Test whether a given dialect (by numeric ID, as exported from
	the terms file) is enabled.
	*/
	dialectEnabled(dialectID) {
		return this.p.parser.dialect.flags[dialectID];
	}
	shiftContext(term, start) {
		if (this.curContext) this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
	}
	reduceContext(term, start) {
		if (this.curContext) this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
	}
	/**
	@internal
	*/
	emitContext() {
		let last = this.buffer.length - 1;
		if (last < 0 || this.buffer[last] != -3) this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
	}
	/**
	@internal
	*/
	emitLookAhead() {
		let last = this.buffer.length - 1;
		if (last < 0 || this.buffer[last] != -4) this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
	}
	updateContext(context) {
		if (context != this.curContext.context) {
			let newCx = new StackContext(this.curContext.tracker, context);
			if (newCx.hash != this.curContext.hash) this.emitContext();
			this.curContext = newCx;
		}
	}
	/**
	@internal
	*/
	setLookAhead(lookAhead) {
		if (lookAhead <= this.lookAhead) return false;
		this.emitLookAhead();
		this.lookAhead = lookAhead;
		return true;
	}
	/**
	@internal
	*/
	close() {
		if (this.curContext && this.curContext.tracker.strict) this.emitContext();
		if (this.lookAhead > 0) this.emitLookAhead();
	}
};
var StackContext = class {
	constructor(tracker, context) {
		this.tracker = tracker;
		this.context = context;
		this.hash = tracker.strict ? tracker.hash(context) : 0;
	}
};
var SimulatedStack = class {
	constructor(start) {
		this.start = start;
		this.state = start.state;
		this.stack = start.stack;
		this.base = this.stack.length;
	}
	reduce(action) {
		let term = action & 65535, depth = action >> 19;
		if (depth == 0) {
			if (this.stack == this.start.stack) this.stack = this.stack.slice();
			this.stack.push(this.state, 0, 0);
			this.base += 3;
		} else this.base -= (depth - 1) * 3;
		this.state = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
	}
};
var StackBufferCursor = class StackBufferCursor {
	constructor(stack, pos, index) {
		this.stack = stack;
		this.pos = pos;
		this.index = index;
		this.buffer = stack.buffer;
		if (this.index == 0) this.maybeNext();
	}
	static create(stack, pos = stack.bufferBase + stack.buffer.length) {
		return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
	}
	maybeNext() {
		let next = this.stack.parent;
		if (next != null) {
			this.index = this.stack.bufferBase - next.bufferBase;
			this.stack = next;
			this.buffer = next.buffer;
		}
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	next() {
		this.index -= 4;
		this.pos -= 4;
		if (this.index == 0) this.maybeNext();
	}
	fork() {
		return new StackBufferCursor(this.stack, this.pos, this.index);
	}
};
function decodeArray(input, Type = Uint16Array) {
	if (typeof input != "string") return input;
	let array = null;
	for (let pos = 0, out = 0; pos < input.length;) {
		let value = 0;
		for (;;) {
			let next = input.charCodeAt(pos++), stop = false;
			if (next == 126) {
				value = 65535;
				break;
			}
			if (next >= 92) next--;
			if (next >= 34) next--;
			let digit = next - 32;
			if (digit >= 46) {
				digit -= 46;
				stop = true;
			}
			value += digit;
			if (stop) break;
			value *= 46;
		}
		if (array) array[out++] = value;
		else array = new Type(value);
	}
	return array;
}
var CachedToken = class {
	constructor() {
		this.start = -1;
		this.value = -1;
		this.end = -1;
		this.extended = -1;
		this.lookAhead = 0;
		this.mask = 0;
		this.context = 0;
	}
};
var nullToken = new CachedToken();
/**
[Tokenizers](#lr.ExternalTokenizer) interact with the input
through this interface. It presents the input as a stream of
characters, tracking lookahead and hiding the complexity of
[ranges](#common.Parser.parse^ranges) from tokenizer code.
*/
var InputStream = class {
	/**
	@internal
	*/
	constructor(input, ranges) {
		this.input = input;
		this.ranges = ranges;
		/**
		@internal
		*/
		this.chunk = "";
		/**
		@internal
		*/
		this.chunkOff = 0;
		/**
		Backup chunk
		*/
		this.chunk2 = "";
		this.chunk2Pos = 0;
		/**
		The character code of the next code unit in the input, or -1
		when the stream is at the end of the input.
		*/
		this.next = -1;
		/**
		@internal
		*/
		this.token = nullToken;
		this.rangeIndex = 0;
		this.pos = this.chunkPos = ranges[0].from;
		this.range = ranges[0];
		this.end = ranges[ranges.length - 1].to;
		this.readNext();
	}
	/**
	@internal
	*/
	resolveOffset(offset, assoc) {
		let range = this.range, index = this.rangeIndex;
		let pos = this.pos + offset;
		while (pos < range.from) {
			if (!index) return null;
			let next = this.ranges[--index];
			pos -= range.from - next.to;
			range = next;
		}
		while (assoc < 0 ? pos > range.to : pos >= range.to) {
			if (index == this.ranges.length - 1) return null;
			let next = this.ranges[++index];
			pos += next.from - range.to;
			range = next;
		}
		return pos;
	}
	/**
	@internal
	*/
	clipPos(pos) {
		if (pos >= this.range.from && pos < this.range.to) return pos;
		for (let range of this.ranges) if (range.to > pos) return Math.max(pos, range.from);
		return this.end;
	}
	/**
	Look at a code unit near the stream position. `.peek(0)` equals
	`.next`, `.peek(-1)` gives you the previous character, and so
	on.
	
	Note that looking around during tokenizing creates dependencies
	on potentially far-away content, which may reduce the
	effectiveness incremental parsing—when looking forward—or even
	cause invalid reparses when looking backward more than 25 code
	units, since the library does not track lookbehind.
	*/
	peek(offset) {
		let idx = this.chunkOff + offset, pos, result;
		if (idx >= 0 && idx < this.chunk.length) {
			pos = this.pos + offset;
			result = this.chunk.charCodeAt(idx);
		} else {
			let resolved = this.resolveOffset(offset, 1);
			if (resolved == null) return -1;
			pos = resolved;
			if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
			else {
				let i = this.rangeIndex, range = this.range;
				while (range.to <= pos) range = this.ranges[++i];
				this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
				if (pos + this.chunk2.length > range.to) this.chunk2 = this.chunk2.slice(0, range.to - pos);
				result = this.chunk2.charCodeAt(0);
			}
		}
		if (pos >= this.token.lookAhead) this.token.lookAhead = pos + 1;
		return result;
	}
	/**
	Accept a token. By default, the end of the token is set to the
	current stream position, but you can pass an offset (relative to
	the stream position) to change that.
	*/
	acceptToken(token, endOffset = 0) {
		let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
		if (end == null || end < this.token.start) throw new RangeError("Token end out of bounds");
		this.token.value = token;
		this.token.end = end;
	}
	/**
	Accept a token ending at a specific given position.
	*/
	acceptTokenTo(token, endPos) {
		this.token.value = token;
		this.token.end = endPos;
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			let { chunk, chunkPos } = this;
			this.chunk = this.chunk2;
			this.chunkPos = this.chunk2Pos;
			this.chunk2 = chunk;
			this.chunk2Pos = chunkPos;
			this.chunkOff = this.pos - this.chunkPos;
		} else {
			this.chunk2 = this.chunk;
			this.chunk2Pos = this.chunkPos;
			let nextChunk = this.input.chunk(this.pos);
			this.chunk = this.pos + nextChunk.length > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
			this.chunkPos = this.pos;
			this.chunkOff = 0;
		}
	}
	readNext() {
		if (this.chunkOff >= this.chunk.length) {
			this.getChunk();
			if (this.chunkOff == this.chunk.length) return this.next = -1;
		}
		return this.next = this.chunk.charCodeAt(this.chunkOff);
	}
	/**
	Move the stream forward N (defaults to 1) code units. Returns
	the new value of [`next`](#lr.InputStream.next).
	*/
	advance(n = 1) {
		this.chunkOff += n;
		while (this.pos + n >= this.range.to) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
			n -= this.range.to - this.pos;
			this.range = this.ranges[++this.rangeIndex];
			this.pos = this.range.from;
		}
		this.pos += n;
		if (this.pos >= this.token.lookAhead) this.token.lookAhead = this.pos + 1;
		return this.readNext();
	}
	setDone() {
		this.pos = this.chunkPos = this.end;
		this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
		this.chunk = "";
		return this.next = -1;
	}
	/**
	@internal
	*/
	reset(pos, token) {
		if (token) {
			this.token = token;
			token.start = pos;
			token.lookAhead = pos + 1;
			token.value = token.extended = -1;
		} else this.token = nullToken;
		if (this.pos != pos) {
			this.pos = pos;
			if (pos == this.end) {
				this.setDone();
				return this;
			}
			while (pos < this.range.from) this.range = this.ranges[--this.rangeIndex];
			while (pos >= this.range.to) this.range = this.ranges[++this.rangeIndex];
			if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) this.chunkOff = pos - this.chunkPos;
			else {
				this.chunk = "";
				this.chunkOff = 0;
			}
			this.readNext();
		}
		return this;
	}
	/**
	@internal
	*/
	read(from, to) {
		if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length) return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
		if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
		if (from >= this.range.from && to <= this.range.to) return this.input.read(from, to);
		let result = "";
		for (let r of this.ranges) {
			if (r.from >= to) break;
			if (r.to > from) result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
		}
		return result;
	}
};
/**
@internal
*/
var TokenGroup = class {
	constructor(data, id) {
		this.data = data;
		this.id = id;
	}
	token(input, stack) {
		let { parser } = stack.p;
		readToken(this.data, input, stack, this.id, parser.data, parser.tokenPrecTable);
	}
};
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
@hide
*/
var LocalTokenGroup = class {
	constructor(data, precTable, elseToken) {
		this.precTable = precTable;
		this.elseToken = elseToken;
		this.data = typeof data == "string" ? decodeArray(data) : data;
	}
	token(input, stack) {
		let start = input.pos, skipped = 0;
		for (;;) {
			let atEof = input.next < 0, nextPos = input.resolveOffset(1, 1);
			readToken(this.data, input, stack, 0, this.data, this.precTable);
			if (input.token.value > -1) break;
			if (this.elseToken == null) return;
			if (!atEof) skipped++;
			if (nextPos == null) break;
			input.reset(nextPos, input.token);
		}
		if (skipped) {
			input.reset(start, input.token);
			input.acceptToken(this.elseToken, skipped);
		}
	}
};
LocalTokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
`@external tokens` declarations in the grammar should resolve to
an instance of this class.
*/
var ExternalTokenizer = class {
	/**
	Create a tokenizer. The first argument is the function that,
	given an input stream, scans for the types of tokens it
	recognizes at the stream's position, and calls
	[`acceptToken`](#lr.InputStream.acceptToken) when it finds
	one.
	*/
	constructor(token, options = {}) {
		this.token = token;
		this.contextual = !!options.contextual;
		this.fallback = !!options.fallback;
		this.extend = !!options.extend;
	}
};
function readToken(data, input, stack, group, precTable, precOffset) {
	let state = 0, groupMask = 1 << group, { dialect } = stack.p.parser;
	scan: for (;;) {
		if ((groupMask & data[state]) == 0) break;
		let accEnd = data[state + 1];
		for (let i = state + 3; i < accEnd; i += 2) if ((data[i + 1] & groupMask) > 0) {
			let term = data[i];
			if (dialect.allows(term) && (input.token.value == -1 || input.token.value == term || overrides(term, input.token.value, precTable, precOffset))) {
				input.acceptToken(term);
				break;
			}
		}
		let next = input.next, low = 0, high = data[state + 2];
		if (input.next < 0 && high > low && data[accEnd + high * 3 - 3] == 65535) {
			state = data[accEnd + high * 3 - 1];
			continue scan;
		}
		for (; low < high;) {
			let mid = low + high >> 1;
			let index = accEnd + mid + (mid << 1);
			let from = data[index], to = data[index + 1] || 65536;
			if (next < from) high = mid;
			else if (next >= to) low = mid + 1;
			else {
				state = data[index + 2];
				input.advance();
				continue scan;
			}
		}
		break;
	}
}
function findOffset(data, start, term) {
	for (let i = start, next; (next = data[i]) != 65535; i++) if (next == term) return i - start;
	return -1;
}
function overrides(token, prev, tableData, tableOffset) {
	let iPrev = findOffset(tableData, tableOffset, prev);
	return iPrev < 0 || findOffset(tableData, tableOffset, token) < iPrev;
}
var verbose = typeof process$1 != "undefined" && /\bparse\b/.test({}.LOG);
var stackIDs = null;
function cutAt(tree, pos, side) {
	let cursor = tree.cursor(IterMode.IncludeAnonymous);
	cursor.moveTo(pos);
	for (;;) if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos))) for (;;) {
		if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError) return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25)) : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25));
		if (side < 0 ? cursor.prevSibling() : cursor.nextSibling()) break;
		if (!cursor.parent()) return side < 0 ? 0 : tree.length;
	}
}
var FragmentCursor = class {
	constructor(fragments, nodeSet) {
		this.fragments = fragments;
		this.nodeSet = nodeSet;
		this.i = 0;
		this.fragment = null;
		this.safeFrom = -1;
		this.safeTo = -1;
		this.trees = [];
		this.start = [];
		this.index = [];
		this.nextFragment();
	}
	nextFragment() {
		let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
		if (fr) {
			this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
			this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
			while (this.trees.length) {
				this.trees.pop();
				this.start.pop();
				this.index.pop();
			}
			this.trees.push(fr.tree);
			this.start.push(-fr.offset);
			this.index.push(0);
			this.nextStart = this.safeFrom;
		} else this.nextStart = 1e9;
	}
	nodeAt(pos) {
		if (pos < this.nextStart) return null;
		while (this.fragment && this.safeTo <= pos) this.nextFragment();
		if (!this.fragment) return null;
		for (;;) {
			let last = this.trees.length - 1;
			if (last < 0) {
				this.nextFragment();
				return null;
			}
			let top = this.trees[last], index = this.index[last];
			if (index == top.children.length) {
				this.trees.pop();
				this.start.pop();
				this.index.pop();
				continue;
			}
			let next = top.children[index];
			let start = this.start[last] + top.positions[index];
			if (start > pos) {
				this.nextStart = start;
				return null;
			}
			if (next instanceof Tree) {
				if (start == pos) {
					if (start < this.safeFrom) return null;
					let end = start + next.length;
					if (end <= this.safeTo) {
						let lookAhead = next.prop(NodeProp.lookAhead);
						if (!lookAhead || end + lookAhead < this.fragment.to) return next;
					}
				}
				this.index[last]++;
				if (start + next.length >= Math.max(this.safeFrom, pos)) {
					this.trees.push(next);
					this.start.push(start);
					this.index.push(0);
				}
			} else {
				this.index[last]++;
				this.nextStart = start + next.length;
			}
		}
	}
};
var TokenCache = class {
	constructor(parser, stream) {
		this.stream = stream;
		this.tokens = [];
		this.mainToken = null;
		this.actions = [];
		this.tokens = parser.tokenizers.map((_) => new CachedToken());
	}
	getActions(stack) {
		let actionIndex = 0;
		let main = null;
		let { parser } = stack.p, { tokenizers } = parser;
		let mask = parser.stateSlot(stack.state, 3);
		let context = stack.curContext ? stack.curContext.hash : 0;
		let lookAhead = 0;
		for (let i = 0; i < tokenizers.length; i++) {
			if ((1 << i & mask) == 0) continue;
			let tokenizer = tokenizers[i], token = this.tokens[i];
			if (main && !tokenizer.fallback) continue;
			if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
				this.updateCachedToken(token, tokenizer, stack);
				token.mask = mask;
				token.context = context;
			}
			if (token.lookAhead > token.end + 25) lookAhead = Math.max(token.lookAhead, lookAhead);
			if (token.value != 0) {
				let startIndex = actionIndex;
				if (token.extended > -1) actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
				actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
				if (!tokenizer.extend) {
					main = token;
					if (actionIndex > startIndex) break;
				}
			}
		}
		while (this.actions.length > actionIndex) this.actions.pop();
		if (lookAhead) stack.setLookAhead(lookAhead);
		if (!main && stack.pos == this.stream.end) {
			main = new CachedToken();
			main.value = stack.p.parser.eofTerm;
			main.start = main.end = stack.pos;
			actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
		}
		this.mainToken = main;
		return this.actions;
	}
	getMainToken(stack) {
		if (this.mainToken) return this.mainToken;
		let main = new CachedToken(), { pos, p } = stack;
		main.start = pos;
		main.end = Math.min(pos + 1, p.stream.end);
		main.value = pos == p.stream.end ? p.parser.eofTerm : 0;
		return main;
	}
	updateCachedToken(token, tokenizer, stack) {
		let start = this.stream.clipPos(stack.pos);
		tokenizer.token(this.stream.reset(start, token), stack);
		if (token.value > -1) {
			let { parser } = stack.p;
			for (let i = 0; i < parser.specialized.length; i++) if (parser.specialized[i] == token.value) {
				let result = parser.specializers[i](this.stream.read(token.start, token.end), stack);
				if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
					if ((result & 1) == 0) token.value = result >> 1;
					else token.extended = result >> 1;
					break;
				}
			}
		} else {
			token.value = 0;
			token.end = this.stream.clipPos(start + 1);
		}
	}
	putAction(action, token, end, index) {
		for (let i = 0; i < index; i += 3) if (this.actions[i] == action) return index;
		this.actions[index++] = action;
		this.actions[index++] = token;
		this.actions[index++] = end;
		return index;
	}
	addActions(stack, token, end, index) {
		let { state } = stack, { parser } = stack.p, { data } = parser;
		for (let set = 0; set < 2; set++) for (let i = parser.stateSlot(state, set ? 2 : 1);; i += 3) {
			if (data[i] == 65535) if (data[i + 1] == 1) i = pair(data, i + 2);
			else {
				if (index == 0 && data[i + 1] == 2) index = this.putAction(pair(data, i + 2), token, end, index);
				break;
			}
			if (data[i] == token) index = this.putAction(pair(data, i + 1), token, end, index);
		}
		return index;
	}
};
var Parse = class {
	constructor(parser, input, fragments, ranges) {
		this.parser = parser;
		this.input = input;
		this.ranges = ranges;
		this.recovering = 0;
		this.nextStackID = 9812;
		this.minStackPos = 0;
		this.reused = [];
		this.stoppedAt = null;
		this.lastBigReductionStart = -1;
		this.lastBigReductionSize = 0;
		this.bigReductionCount = 0;
		this.stream = new InputStream(input, ranges);
		this.tokens = new TokenCache(parser, this.stream);
		this.topTerm = parser.top[1];
		let { from } = ranges[0];
		this.stacks = [Stack.start(this, parser.top[0], from)];
		this.fragments = fragments.length && this.stream.end - from > parser.bufferLength * 4 ? new FragmentCursor(fragments, parser.nodeSet) : null;
	}
	get parsedPos() {
		return this.minStackPos;
	}
	advance() {
		let stacks = this.stacks, pos = this.minStackPos;
		let newStacks = this.stacks = [];
		let stopped, stoppedTokens;
		if (this.bigReductionCount > 300 && stacks.length == 1) {
			let [s] = stacks;
			while (s.forceReduce() && s.stack.length && s.stack[s.stack.length - 2] >= this.lastBigReductionStart);
			this.bigReductionCount = this.lastBigReductionSize = 0;
		}
		for (let i = 0; i < stacks.length; i++) {
			let stack = stacks[i];
			for (;;) {
				this.tokens.mainToken = null;
				if (stack.pos > pos) newStacks.push(stack);
				else if (this.advanceStack(stack, newStacks, stacks)) continue;
				else {
					if (!stopped) {
						stopped = [];
						stoppedTokens = [];
					}
					stopped.push(stack);
					let tok = this.tokens.getMainToken(stack);
					stoppedTokens.push(tok.value, tok.end);
				}
				break;
			}
		}
		if (!newStacks.length) {
			let finished = stopped && findFinished(stopped);
			if (finished) {
				if (verbose) console.log("Finish with " + this.stackID(finished));
				return this.stackToTree(finished);
			}
			if (this.parser.strict) {
				if (verbose && stopped) console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
				throw new SyntaxError("No parse at " + pos);
			}
			if (!this.recovering) this.recovering = 5;
		}
		if (this.recovering && stopped) {
			let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0] : this.runRecovery(stopped, stoppedTokens, newStacks);
			if (finished) {
				if (verbose) console.log("Force-finish " + this.stackID(finished));
				return this.stackToTree(finished.forceAll());
			}
		}
		if (this.recovering) {
			let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3;
			if (newStacks.length > maxRemaining) {
				newStacks.sort((a, b) => b.score - a.score);
				while (newStacks.length > maxRemaining) newStacks.pop();
			}
			if (newStacks.some((s) => s.reducePos > pos)) this.recovering--;
		} else if (newStacks.length > 1) {
			outer: for (let i = 0; i < newStacks.length - 1; i++) {
				let stack = newStacks[i];
				for (let j = i + 1; j < newStacks.length; j++) {
					let other = newStacks[j];
					if (stack.sameState(other) || stack.buffer.length > 500 && other.buffer.length > 500) if ((stack.score - other.score || stack.buffer.length - other.buffer.length) > 0) newStacks.splice(j--, 1);
					else {
						newStacks.splice(i--, 1);
						continue outer;
					}
				}
			}
			if (newStacks.length > 12) {
				newStacks.sort((a, b) => b.score - a.score);
				newStacks.splice(12, newStacks.length - 12);
			}
		}
		this.minStackPos = newStacks[0].pos;
		for (let i = 1; i < newStacks.length; i++) if (newStacks[i].pos < this.minStackPos) this.minStackPos = newStacks[i].pos;
		return null;
	}
	stopAt(pos) {
		if (this.stoppedAt != null && this.stoppedAt < pos) throw new RangeError("Can't move stoppedAt forward");
		this.stoppedAt = pos;
	}
	advanceStack(stack, stacks, split) {
		let start = stack.pos, { parser } = this;
		let base = verbose ? this.stackID(stack) + " -> " : "";
		if (this.stoppedAt != null && start > this.stoppedAt) return stack.forceReduce() ? stack : null;
		if (this.fragments) {
			let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
			for (let cached = this.fragments.nodeAt(start); cached;) {
				let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
				if (match > -1 && cached.length && (!strictCx || (cached.prop(NodeProp.contextHash) || 0) == cxHash)) {
					stack.useNode(cached, match);
					if (verbose) console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(cached.type.id)})`);
					return true;
				}
				if (!(cached instanceof Tree) || cached.children.length == 0 || cached.positions[0] > 0) break;
				let inner = cached.children[0];
				if (inner instanceof Tree && cached.positions[0] == 0) cached = inner;
				else break;
			}
		}
		let defaultReduce = parser.stateSlot(stack.state, 4);
		if (defaultReduce > 0) {
			stack.reduce(defaultReduce);
			if (verbose) console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535)})`);
			return true;
		}
		if (stack.stack.length >= 8400) while (stack.stack.length > 6e3 && stack.forceReduce());
		let actions = this.tokens.getActions(stack);
		for (let i = 0; i < actions.length;) {
			let action = actions[i++], term = actions[i++], end = actions[i++];
			let last = i == actions.length || !split;
			let localStack = last ? stack : stack.split();
			let main = this.tokens.mainToken;
			localStack.apply(action, term, main ? main.start : localStack.pos, end);
			if (verbose) console.log(base + this.stackID(localStack) + ` (via ${(action & 65536) == 0 ? "shift" : `reduce of ${parser.getName(action & 65535)}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
			if (last) return true;
			else if (localStack.pos > start) stacks.push(localStack);
			else split.push(localStack);
		}
		return false;
	}
	advanceFully(stack, newStacks) {
		let pos = stack.pos;
		for (;;) {
			if (!this.advanceStack(stack, null, null)) return false;
			if (stack.pos > pos) {
				pushStackDedup(stack, newStacks);
				return true;
			}
		}
	}
	runRecovery(stacks, tokens, newStacks) {
		let finished = null, restarted = false;
		for (let i = 0; i < stacks.length; i++) {
			let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
			let base = verbose ? this.stackID(stack) + " -> " : "";
			if (stack.deadEnd) {
				if (restarted) continue;
				restarted = true;
				stack.restart();
				if (verbose) console.log(base + this.stackID(stack) + " (restarted)");
				if (this.advanceFully(stack, newStacks)) continue;
			}
			let force = stack.split(), forceBase = base;
			for (let j = 0; j < 10 && force.forceReduce(); j++) {
				if (verbose) console.log(forceBase + this.stackID(force) + " (via force-reduce)");
				if (this.advanceFully(force, newStacks)) break;
				if (verbose) forceBase = this.stackID(force) + " -> ";
			}
			for (let insert of stack.recoverByInsert(token)) {
				if (verbose) console.log(base + this.stackID(insert) + " (via recover-insert)");
				this.advanceFully(insert, newStacks);
			}
			if (this.stream.end > stack.pos) {
				if (tokenEnd == stack.pos) {
					tokenEnd++;
					token = 0;
				}
				stack.recoverByDelete(token, tokenEnd);
				if (verbose) console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
				pushStackDedup(stack, newStacks);
			} else if (!finished || finished.score < stack.score) finished = stack;
		}
		return finished;
	}
	stackToTree(stack) {
		stack.close();
		return Tree.build({
			buffer: StackBufferCursor.create(stack),
			nodeSet: this.parser.nodeSet,
			topID: this.topTerm,
			maxBufferLength: this.parser.bufferLength,
			reused: this.reused,
			start: this.ranges[0].from,
			length: stack.pos - this.ranges[0].from,
			minRepeatType: this.parser.minRepeatTerm
		});
	}
	stackID(stack) {
		let id = (stackIDs || (stackIDs = /* @__PURE__ */ new WeakMap())).get(stack);
		if (!id) stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
		return id + stack;
	}
};
function pushStackDedup(stack, newStacks) {
	for (let i = 0; i < newStacks.length; i++) {
		let other = newStacks[i];
		if (other.pos == stack.pos && other.sameState(stack)) {
			if (newStacks[i].score < stack.score) newStacks[i] = stack;
			return;
		}
	}
	newStacks.push(stack);
}
var Dialect = class {
	constructor(source, flags, disabled) {
		this.source = source;
		this.flags = flags;
		this.disabled = disabled;
	}
	allows(term) {
		return !this.disabled || this.disabled[term] == 0;
	}
};
var id = (x) => x;
/**
Context trackers are used to track stateful context (such as
indentation in the Python grammar, or parent elements in the XML
grammar) needed by external tokenizers. You declare them in a
grammar file as `@context exportName from "module"`.

Context values should be immutable, and can be updated (replaced)
on shift or reduce actions.

The export used in a `@context` declaration should be of this
type.
*/
var ContextTracker = class {
	/**
	Define a context tracker.
	*/
	constructor(spec) {
		this.start = spec.start;
		this.shift = spec.shift || id;
		this.reduce = spec.reduce || id;
		this.reuse = spec.reuse || id;
		this.hash = spec.hash || (() => 0);
		this.strict = spec.strict !== false;
	}
};
/**
Holds the parse tables for a given grammar, as generated by
`lezer-generator`, and provides [methods](#common.Parser) to parse
content with.
*/
var LRParser = class LRParser extends Parser {
	/**
	@internal
	*/
	constructor(spec) {
		super();
		/**
		@internal
		*/
		this.wrappers = [];
		if (spec.version != 14) throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (14)`);
		let nodeNames = spec.nodeNames.split(" ");
		this.minRepeatTerm = nodeNames.length;
		for (let i = 0; i < spec.repeatNodeCount; i++) nodeNames.push("");
		let topTerms = Object.keys(spec.topRules).map((r) => spec.topRules[r][1]);
		let nodeProps = [];
		for (let i = 0; i < nodeNames.length; i++) nodeProps.push([]);
		function setProp(nodeID, prop, value) {
			nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
		}
		if (spec.nodeProps) for (let propSpec of spec.nodeProps) {
			let prop = propSpec[0];
			if (typeof prop == "string") prop = NodeProp[prop];
			for (let i = 1; i < propSpec.length;) {
				let next = propSpec[i++];
				if (next >= 0) setProp(next, prop, propSpec[i++]);
				else {
					let value = propSpec[i + -next];
					for (let j = -next; j > 0; j--) setProp(propSpec[i++], prop, value);
					i++;
				}
			}
		}
		this.nodeSet = new NodeSet(nodeNames.map((name, i) => NodeType.define({
			name: i >= this.minRepeatTerm ? void 0 : name,
			id: i,
			props: nodeProps[i],
			top: topTerms.indexOf(i) > -1,
			error: i == 0,
			skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
		})));
		if (spec.propSources) this.nodeSet = this.nodeSet.extend(...spec.propSources);
		this.strict = false;
		this.bufferLength = DefaultBufferLength;
		let tokenArray = decodeArray(spec.tokenData);
		this.context = spec.context;
		this.specializerSpecs = spec.specialized || [];
		this.specialized = new Uint16Array(this.specializerSpecs.length);
		for (let i = 0; i < this.specializerSpecs.length; i++) this.specialized[i] = this.specializerSpecs[i].term;
		this.specializers = this.specializerSpecs.map(getSpecializer);
		this.states = decodeArray(spec.states, Uint32Array);
		this.data = decodeArray(spec.stateData);
		this.goto = decodeArray(spec.goto);
		this.maxTerm = spec.maxTerm;
		this.tokenizers = spec.tokenizers.map((value) => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
		this.topRules = spec.topRules;
		this.dialects = spec.dialects || {};
		this.dynamicPrecedences = spec.dynamicPrecedences || null;
		this.tokenPrecTable = spec.tokenPrec;
		this.termNames = spec.termNames || null;
		this.maxNode = this.nodeSet.types.length - 1;
		this.dialect = this.parseDialect();
		this.top = this.topRules[Object.keys(this.topRules)[0]];
	}
	createParse(input, fragments, ranges) {
		let parse = new Parse(this, input, fragments, ranges);
		for (let w of this.wrappers) parse = w(parse, input, fragments, ranges);
		return parse;
	}
	/**
	Get a goto table entry @internal
	*/
	getGoto(state, term, loose = false) {
		let table = this.goto;
		if (term >= table[0]) return -1;
		for (let pos = table[term + 1];;) {
			let groupTag = table[pos++], last = groupTag & 1;
			let target = table[pos++];
			if (last && loose) return target;
			for (let end = pos + (groupTag >> 1); pos < end; pos++) if (table[pos] == state) return target;
			if (last) return -1;
		}
	}
	/**
	Check if this state has an action for a given terminal @internal
	*/
	hasAction(state, terminal) {
		let data = this.data;
		for (let set = 0; set < 2; set++) for (let i = this.stateSlot(state, set ? 2 : 1), next;; i += 3) {
			if ((next = data[i]) == 65535) if (data[i + 1] == 1) next = data[i = pair(data, i + 2)];
			else if (data[i + 1] == 2) return pair(data, i + 2);
			else break;
			if (next == terminal || next == 0) return pair(data, i + 1);
		}
		return 0;
	}
	/**
	@internal
	*/
	stateSlot(state, slot) {
		return this.states[state * 6 + slot];
	}
	/**
	@internal
	*/
	stateFlag(state, flag) {
		return (this.stateSlot(state, 0) & flag) > 0;
	}
	/**
	@internal
	*/
	validAction(state, action) {
		return !!this.allActions(state, (a) => a == action ? true : null);
	}
	/**
	@internal
	*/
	allActions(state, action) {
		let deflt = this.stateSlot(state, 4);
		let result = deflt ? action(deflt) : void 0;
		for (let i = this.stateSlot(state, 1); result == null; i += 3) {
			if (this.data[i] == 65535) if (this.data[i + 1] == 1) i = pair(this.data, i + 2);
			else break;
			result = action(pair(this.data, i + 1));
		}
		return result;
	}
	/**
	Get the states that can follow this one through shift actions or
	goto jumps. @internal
	*/
	nextStates(state) {
		let result = [];
		for (let i = this.stateSlot(state, 1);; i += 3) {
			if (this.data[i] == 65535) if (this.data[i + 1] == 1) i = pair(this.data, i + 2);
			else break;
			if ((this.data[i + 2] & 1) == 0) {
				let value = this.data[i + 1];
				if (!result.some((v, i) => i & 1 && v == value)) result.push(this.data[i], value);
			}
		}
		return result;
	}
	/**
	Configure the parser. Returns a new parser instance that has the
	given settings modified. Settings not provided in `config` are
	kept from the original parser.
	*/
	configure(config) {
		let copy = Object.assign(Object.create(LRParser.prototype), this);
		if (config.props) copy.nodeSet = this.nodeSet.extend(...config.props);
		if (config.top) {
			let info = this.topRules[config.top];
			if (!info) throw new RangeError(`Invalid top rule name ${config.top}`);
			copy.top = info;
		}
		if (config.tokenizers) copy.tokenizers = this.tokenizers.map((t) => {
			let found = config.tokenizers.find((r) => r.from == t);
			return found ? found.to : t;
		});
		if (config.specializers) {
			copy.specializers = this.specializers.slice();
			copy.specializerSpecs = this.specializerSpecs.map((s, i) => {
				let found = config.specializers.find((r) => r.from == s.external);
				if (!found) return s;
				let spec = Object.assign(Object.assign({}, s), { external: found.to });
				copy.specializers[i] = getSpecializer(spec);
				return spec;
			});
		}
		if (config.contextTracker) copy.context = config.contextTracker;
		if (config.dialect) copy.dialect = this.parseDialect(config.dialect);
		if (config.strict != null) copy.strict = config.strict;
		if (config.wrap) copy.wrappers = copy.wrappers.concat(config.wrap);
		if (config.bufferLength != null) copy.bufferLength = config.bufferLength;
		return copy;
	}
	/**
	Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
	are registered for this parser.
	*/
	hasWrappers() {
		return this.wrappers.length > 0;
	}
	/**
	Returns the name associated with a given term. This will only
	work for all terms when the parser was generated with the
	`--names` option. By default, only the names of tagged terms are
	stored.
	*/
	getName(term) {
		return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
	}
	/**
	The eof term id is always allocated directly after the node
	types. @internal
	*/
	get eofTerm() {
		return this.maxNode + 1;
	}
	/**
	The type of top node produced by the parser.
	*/
	get topNode() {
		return this.nodeSet.types[this.top[1]];
	}
	/**
	@internal
	*/
	dynamicPrecedence(term) {
		let prec = this.dynamicPrecedences;
		return prec == null ? 0 : prec[term] || 0;
	}
	/**
	@internal
	*/
	parseDialect(dialect) {
		let values = Object.keys(this.dialects), flags = values.map(() => false);
		if (dialect) for (let part of dialect.split(" ")) {
			let id = values.indexOf(part);
			if (id >= 0) flags[id] = true;
		}
		let disabled = null;
		for (let i = 0; i < values.length; i++) if (!flags[i]) for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535;) (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
		return new Dialect(dialect, flags, disabled);
	}
	/**
	Used by the output of the parser generator. Not available to
	user code. @hide
	*/
	static deserialize(spec) {
		return new LRParser(spec);
	}
};
function pair(data, off) {
	return data[off] | data[off + 1] << 16;
}
function findFinished(stacks) {
	let best = null;
	for (let stack of stacks) {
		let stopped = stack.p.stoppedAt;
		if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) && stack.p.parser.stateFlag(stack.state, 2) && (!best || best.score < stack.score)) best = stack;
	}
	return best;
}
function getSpecializer(spec) {
	if (spec.external) {
		let mask = spec.extend ? 1 : 0;
		return (value, stack) => spec.external(value, stack) << 1 | mask;
	}
	return spec.get;
}
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+javascript@1.5.4/node_modules/@lezer/javascript/dist/index.js
var noSemi = 316, noSemiType = 317, incdec = 1, incdecPrefix = 2, questionDot = 3, JSXStartTag = 4, insertSemi = 318, spaces = 320, newline = 321, LineComment = 5, BlockComment = 6, Dialect_jsx = 0;
var space = [
	9,
	10,
	11,
	12,
	13,
	32,
	133,
	160,
	5760,
	8192,
	8193,
	8194,
	8195,
	8196,
	8197,
	8198,
	8199,
	8200,
	8201,
	8202,
	8232,
	8233,
	8239,
	8287,
	12288
];
var braceR = 125, semicolon = 59, slash = 47, star = 42, plus = 43, minus = 45, lt = 60, comma = 44, question = 63, dot = 46, bracketL = 91;
var trackNewline = new ContextTracker({
	start: false,
	shift(context, term) {
		return term == LineComment || term == BlockComment || term == spaces ? context : term == newline;
	},
	strict: false
});
var insertSemicolon = new ExternalTokenizer((input, stack) => {
	let { next } = input;
	if (next == braceR || next == -1 || stack.context) input.acceptToken(insertSemi);
}, {
	contextual: true,
	fallback: true
});
var noSemicolon = new ExternalTokenizer((input, stack) => {
	let { next } = input, after;
	if (space.indexOf(next) > -1) return;
	if (next == slash && ((after = input.peek(1)) == slash || after == star)) return;
	if (next != braceR && next != semicolon && next != -1 && !stack.context) input.acceptToken(noSemi);
}, { contextual: true });
var noSemicolonType = new ExternalTokenizer((input, stack) => {
	if (input.next == bracketL && !stack.context) input.acceptToken(noSemiType);
}, { contextual: true });
var operatorToken = new ExternalTokenizer((input, stack) => {
	let { next } = input;
	if (next == plus || next == minus) {
		input.advance();
		if (next == input.next) {
			input.advance();
			let mayPostfix = !stack.context && stack.canShift(incdec);
			input.acceptToken(mayPostfix ? incdec : incdecPrefix);
		}
	} else if (next == question && input.peek(1) == dot) {
		input.advance();
		input.advance();
		if (input.next < 48 || input.next > 57) input.acceptToken(questionDot);
	}
}, { contextual: true });
function identifierChar(ch, start) {
	return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch == 95 || ch >= 192 || !start && ch >= 48 && ch <= 57;
}
var jsx = new ExternalTokenizer((input, stack) => {
	if (input.next != lt || !stack.dialectEnabled(Dialect_jsx)) return;
	input.advance();
	if (input.next == slash) return;
	let back = 0;
	while (space.indexOf(input.next) > -1) {
		input.advance();
		back++;
	}
	if (identifierChar(input.next, true)) {
		input.advance();
		back++;
		while (identifierChar(input.next, false)) {
			input.advance();
			back++;
		}
		while (space.indexOf(input.next) > -1) {
			input.advance();
			back++;
		}
		if (input.next == comma) return;
		for (let i = 0;; i++) {
			if (i == 7) {
				if (!identifierChar(input.next, true)) return;
				break;
			}
			if (input.next != "extends".charCodeAt(i)) break;
			input.advance();
			back++;
		}
	}
	input.acceptToken(JSXStartTag, -back);
});
var jsHighlight = styleTags({
	"get set async static": tags.modifier,
	"for while do if else switch try catch finally return throw break continue default case defer": tags.controlKeyword,
	"in of await yield void typeof delete instanceof as satisfies": tags.operatorKeyword,
	"let var const using function class extends": tags.definitionKeyword,
	"import export from": tags.moduleKeyword,
	"with debugger new": tags.keyword,
	TemplateString: tags.special(tags.string),
	super: tags.atom,
	BooleanLiteral: tags.bool,
	this: tags.self,
	null: tags.null,
	Star: tags.modifier,
	VariableName: tags.variableName,
	"CallExpression/VariableName TaggedTemplateExpression/VariableName": tags.function(tags.variableName),
	VariableDefinition: tags.definition(tags.variableName),
	Label: tags.labelName,
	PropertyName: tags.propertyName,
	PrivatePropertyName: tags.special(tags.propertyName),
	"CallExpression/MemberExpression/PropertyName": tags.function(tags.propertyName),
	"FunctionDeclaration/VariableDefinition": tags.function(tags.definition(tags.variableName)),
	"ClassDeclaration/VariableDefinition": tags.definition(tags.className),
	"NewExpression/VariableName": tags.className,
	PropertyDefinition: tags.definition(tags.propertyName),
	PrivatePropertyDefinition: tags.definition(tags.special(tags.propertyName)),
	UpdateOp: tags.updateOperator,
	"LineComment Hashbang": tags.lineComment,
	BlockComment: tags.blockComment,
	Number: tags.number,
	String: tags.string,
	Escape: tags.escape,
	ArithOp: tags.arithmeticOperator,
	LogicOp: tags.logicOperator,
	BitOp: tags.bitwiseOperator,
	CompareOp: tags.compareOperator,
	RegExp: tags.regexp,
	Equals: tags.definitionOperator,
	Arrow: tags.function(tags.punctuation),
	": Spread": tags.punctuation,
	"( )": tags.paren,
	"[ ]": tags.squareBracket,
	"{ }": tags.brace,
	"InterpolationStart InterpolationEnd": tags.special(tags.brace),
	".": tags.derefOperator,
	", ;": tags.separator,
	"@": tags.meta,
	TypeName: tags.typeName,
	TypeDefinition: tags.definition(tags.typeName),
	"type enum interface implements namespace module declare": tags.definitionKeyword,
	"abstract global Privacy readonly override": tags.modifier,
	"is keyof unique infer asserts": tags.operatorKeyword,
	JSXAttributeValue: tags.attributeValue,
	JSXText: tags.content,
	"JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": tags.angleBracket,
	"JSXIdentifier JSXNameSpacedName": tags.tagName,
	"JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": tags.attributeName,
	"JSXBuiltin/JSXIdentifier": tags.standard(tags.tagName)
});
var spec_identifier = {
	__proto__: null,
	export: 20,
	as: 25,
	from: 33,
	default: 36,
	async: 41,
	function: 42,
	in: 52,
	out: 55,
	const: 56,
	extends: 60,
	this: 64,
	true: 72,
	false: 72,
	null: 84,
	void: 88,
	typeof: 92,
	super: 108,
	new: 142,
	delete: 154,
	yield: 163,
	await: 167,
	class: 172,
	public: 235,
	private: 235,
	protected: 235,
	readonly: 237,
	instanceof: 256,
	satisfies: 259,
	import: 292,
	keyof: 349,
	unique: 353,
	infer: 359,
	asserts: 395,
	is: 397,
	abstract: 417,
	implements: 419,
	type: 421,
	let: 424,
	var: 426,
	using: 429,
	interface: 435,
	enum: 439,
	namespace: 445,
	module: 447,
	declare: 451,
	global: 455,
	defer: 471,
	for: 476,
	of: 485,
	while: 488,
	with: 492,
	do: 496,
	if: 500,
	else: 502,
	switch: 506,
	case: 512,
	try: 518,
	catch: 522,
	finally: 526,
	return: 530,
	throw: 534,
	break: 538,
	continue: 542,
	debugger: 546
};
var spec_word = {
	__proto__: null,
	async: 129,
	get: 131,
	set: 133,
	declare: 195,
	public: 197,
	private: 197,
	protected: 197,
	static: 199,
	abstract: 201,
	override: 203,
	readonly: 209,
	accessor: 211,
	new: 401
};
var spec_LessThan = {
	__proto__: null,
	"<": 193
};
var parser = LRParser.deserialize({
	version: 14,
	states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
	stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
	goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
	nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
	maxTerm: 380,
	context: trackNewline,
	nodeProps: [
		[
			"isolate",
			-8,
			5,
			6,
			14,
			37,
			39,
			51,
			53,
			55,
			""
		],
		[
			"group",
			-26,
			9,
			17,
			19,
			68,
			207,
			211,
			215,
			216,
			218,
			221,
			224,
			234,
			237,
			243,
			245,
			247,
			249,
			252,
			258,
			264,
			266,
			268,
			270,
			272,
			274,
			275,
			"Statement",
			-34,
			13,
			14,
			32,
			35,
			36,
			42,
			51,
			54,
			55,
			57,
			62,
			70,
			72,
			76,
			80,
			82,
			84,
			85,
			110,
			111,
			120,
			121,
			136,
			139,
			141,
			142,
			143,
			144,
			145,
			147,
			148,
			167,
			169,
			171,
			"Expression",
			-23,
			31,
			33,
			37,
			41,
			43,
			45,
			173,
			175,
			177,
			178,
			180,
			181,
			182,
			184,
			185,
			186,
			188,
			189,
			190,
			201,
			203,
			205,
			206,
			"Type",
			-3,
			88,
			103,
			109,
			"ClassItem"
		],
		[
			"openedBy",
			23,
			"<",
			38,
			"InterpolationStart",
			56,
			"[",
			60,
			"{",
			73,
			"(",
			160,
			"JSXStartCloseTag"
		],
		[
			"closedBy",
			-2,
			24,
			168,
			">",
			40,
			"InterpolationEnd",
			50,
			"]",
			61,
			"}",
			74,
			")",
			165,
			"JSXEndTag"
		]
	],
	propSources: [jsHighlight],
	skippedNodes: [
		0,
		5,
		6,
		278
	],
	repeatNodeCount: 37,
	tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
	tokenizers: [
		noSemicolon,
		noSemicolonType,
		operatorToken,
		jsx,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		insertSemicolon,
		new LocalTokenGroup("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340),
		new LocalTokenGroup("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)
	],
	topRules: {
		"Script": [0, 7],
		"SingleExpression": [1, 276],
		"SingleClassItem": [2, 277]
	},
	dialects: {
		jsx: 0,
		ts: 15175
	},
	dynamicPrecedences: {
		"80": 1,
		"82": 1,
		"94": 1,
		"169": 1,
		"199": 1
	},
	specialized: [
		{
			term: 327,
			get: (value) => spec_identifier[value] || -1
		},
		{
			term: 343,
			get: (value) => spec_word[value] || -1
		},
		{
			term: 95,
			get: (value) => spec_LessThan[value] || -1
		}
	],
	tokenPrec: 15201
});
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+lang-javascript@6.2.4/node_modules/@codemirror/lang-javascript/dist/index.js
/**
A collection of JavaScript-related
[snippets](https://codemirror.net/6/docs/ref/#autocomplete.snippet).
*/
var snippets = [
	/* @__PURE__ */ snippetCompletion("function ${name}(${params}) {\n	${}\n}", {
		label: "function",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
		label: "for",
		detail: "loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("for (let ${name} of ${collection}) {\n	${}\n}", {
		label: "for",
		detail: "of loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("do {\n	${}\n} while (${})", {
		label: "do",
		detail: "loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("while (${}) {\n	${}\n}", {
		label: "while",
		detail: "loop",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("try {\n	${}\n} catch (${error}) {\n	${}\n}", {
		label: "try",
		detail: "/ catch block",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("if (${}) {\n	${}\n}", {
		label: "if",
		detail: "block",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("if (${}) {\n	${}\n} else {\n	${}\n}", {
		label: "if",
		detail: "/ else block",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("class ${name} {\n	constructor(${params}) {\n		${}\n	}\n}", {
		label: "class",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("import {${names}} from \"${module}\"\n${}", {
		label: "import",
		detail: "named",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("import ${name} from \"${module}\"\n${}", {
		label: "import",
		detail: "default",
		type: "keyword"
	})
];
/**
A collection of snippet completions for TypeScript. Includes the
JavaScript [snippets](https://codemirror.net/6/docs/ref/#lang-javascript.snippets).
*/
var typescriptSnippets = /* @__PURE__ */ snippets.concat([
	/* @__PURE__ */ snippetCompletion("interface ${name} {\n	${}\n}", {
		label: "interface",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("type ${name} = ${type}", {
		label: "type",
		detail: "definition",
		type: "keyword"
	}),
	/* @__PURE__ */ snippetCompletion("enum ${name} {\n	${}\n}", {
		label: "enum",
		detail: "definition",
		type: "keyword"
	})
]);
var cache = /* @__PURE__ */ new NodeWeakMap();
var ScopeNodes = /* @__PURE__ */ new Set([
	"Script",
	"Block",
	"FunctionExpression",
	"FunctionDeclaration",
	"ArrowFunction",
	"MethodDeclaration",
	"ForStatement"
]);
function defID(type) {
	return (node, def) => {
		let id = node.node.getChild("VariableDefinition");
		if (id) def(id, type);
		return true;
	};
}
var functionContext = ["FunctionDeclaration"];
var gatherCompletions = {
	FunctionDeclaration: /* @__PURE__ */ defID("function"),
	ClassDeclaration: /* @__PURE__ */ defID("class"),
	ClassExpression: () => true,
	EnumDeclaration: /* @__PURE__ */ defID("constant"),
	TypeAliasDeclaration: /* @__PURE__ */ defID("type"),
	NamespaceDeclaration: /* @__PURE__ */ defID("namespace"),
	VariableDefinition(node, def) {
		if (!node.matchContext(functionContext)) def(node, "variable");
	},
	TypeDefinition(node, def) {
		def(node, "type");
	},
	__proto__: null
};
function getScope(doc, node) {
	let cached = cache.get(node);
	if (cached) return cached;
	let completions = [], top = true;
	function def(node, type) {
		let name = doc.sliceString(node.from, node.to);
		completions.push({
			label: name,
			type
		});
	}
	node.cursor(IterMode.IncludeAnonymous).iterate((node) => {
		if (top) top = false;
		else if (node.name) {
			let gather = gatherCompletions[node.name];
			if (gather && gather(node, def) || ScopeNodes.has(node.name)) return false;
		} else if (node.to - node.from > 8192) {
			for (let c of getScope(doc, node.node)) completions.push(c);
			return false;
		}
	});
	cache.set(node, completions);
	return completions;
}
var Identifier = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/;
var dontComplete = [
	"TemplateString",
	"String",
	"RegExp",
	"LineComment",
	"BlockComment",
	"VariableDefinition",
	"TypeDefinition",
	"Label",
	"PropertyDefinition",
	"PropertyName",
	"PrivatePropertyDefinition",
	"PrivatePropertyName",
	"JSXText",
	"JSXAttributeValue",
	"JSXOpenTag",
	"JSXCloseTag",
	"JSXSelfClosingTag",
	".",
	"?."
];
/**
Completion source that looks up locally defined names in
JavaScript code.
*/
function localCompletionSource(context) {
	let inner = syntaxTree(context.state).resolveInner(context.pos, -1);
	if (dontComplete.indexOf(inner.name) > -1) return null;
	let isWord = inner.name == "VariableName" || inner.to - inner.from < 20 && Identifier.test(context.state.sliceDoc(inner.from, inner.to));
	if (!isWord && !context.explicit) return null;
	let options = [];
	for (let pos = inner; pos; pos = pos.parent) if (ScopeNodes.has(pos.name)) options = options.concat(getScope(context.state.doc, pos));
	return {
		options,
		from: isWord ? inner.from : context.pos,
		validFor: Identifier
	};
}
/**
A language provider based on the [Lezer JavaScript
parser](https://github.com/lezer-parser/javascript), extended with
highlighting and indentation information.
*/
var javascriptLanguage = /* @__PURE__ */ LRLanguage.define({
	name: "javascript",
	parser: /* @__PURE__ */ parser.configure({ props: [/* @__PURE__ */ indentNodeProp.add({
		IfStatement: /* @__PURE__ */ continuedIndent({ except: /^\s*({|else\b)/ }),
		TryStatement: /* @__PURE__ */ continuedIndent({ except: /^\s*({|catch\b|finally\b)/ }),
		LabeledStatement: flatIndent,
		SwitchBody: (context) => {
			let after = context.textAfter, closed = /^\s*\}/.test(after), isCase = /^\s*(case|default)\b/.test(after);
			return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
		},
		Block: /* @__PURE__ */ delimitedIndent({ closing: "}" }),
		ArrowFunction: (cx) => cx.baseIndent + cx.unit,
		"TemplateString BlockComment": () => null,
		"Statement Property": /* @__PURE__ */ continuedIndent({ except: /^\s*{/ }),
		JSXElement(context) {
			let closed = /^\s*<\//.test(context.textAfter);
			return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
		},
		JSXEscape(context) {
			let closed = /\s*\}/.test(context.textAfter);
			return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
		},
		"JSXOpenTag JSXSelfClosingTag"(context) {
			return context.column(context.node.from) + context.unit;
		}
	}), /* @__PURE__ */ foldNodeProp.add({
		"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": foldInside,
		BlockComment(tree) {
			return {
				from: tree.from + 2,
				to: tree.to - 2
			};
		}
	})] }),
	languageData: {
		closeBrackets: { brackets: [
			"(",
			"[",
			"{",
			"'",
			"\"",
			"`"
		] },
		commentTokens: {
			line: "//",
			block: {
				open: "/*",
				close: "*/"
			}
		},
		indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
		wordChars: "$"
	}
});
var jsxSublanguage = {
	test: (node) => /^JSX/.test(node.name),
	facet: /* @__PURE__ */ defineLanguageFacet({ commentTokens: { block: {
		open: "{/*",
		close: "*/}"
	} } })
};
/**
A language provider for TypeScript.
*/
var typescriptLanguage = /* @__PURE__ */ javascriptLanguage.configure({ dialect: "ts" }, "typescript");
/**
Language provider for JSX.
*/
var jsxLanguage = /* @__PURE__ */ javascriptLanguage.configure({
	dialect: "jsx",
	props: [/* @__PURE__ */ sublanguageProp.add((n) => n.isTop ? [jsxSublanguage] : void 0)]
});
/**
Language provider for JSX + TypeScript.
*/
var tsxLanguage = /* @__PURE__ */ javascriptLanguage.configure({
	dialect: "jsx ts",
	props: [/* @__PURE__ */ sublanguageProp.add((n) => n.isTop ? [jsxSublanguage] : void 0)]
}, "typescript");
var kwCompletion = (name) => ({
	label: name,
	type: "keyword"
});
var keywords = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(kwCompletion);
var typescriptKeywords = /* @__PURE__ */ keywords.concat(/* @__PURE__ */ [
	"declare",
	"implements",
	"private",
	"protected",
	"public"
].map(kwCompletion));
/**
JavaScript support. Includes [snippet](https://codemirror.net/6/docs/ref/#lang-javascript.snippets)
and local variable completion.
*/
function javascript(config = {}) {
	let lang = config.jsx ? config.typescript ? tsxLanguage : jsxLanguage : config.typescript ? typescriptLanguage : javascriptLanguage;
	let completions = config.typescript ? typescriptSnippets.concat(typescriptKeywords) : snippets.concat(keywords);
	return new LanguageSupport(lang, [
		javascriptLanguage.data.of({ autocomplete: ifNotIn(dontComplete, completeFromList(completions)) }),
		javascriptLanguage.data.of({ autocomplete: localCompletionSource }),
		config.jsx ? autoCloseTags : []
	]);
}
function findOpenTag(node) {
	for (;;) {
		if (node.name == "JSXOpenTag" || node.name == "JSXSelfClosingTag" || node.name == "JSXFragmentTag") return node;
		if (node.name == "JSXEscape" || !node.parent) return null;
		node = node.parent;
	}
}
function elementName(doc, tree, max = doc.length) {
	for (let ch = tree === null || tree === void 0 ? void 0 : tree.firstChild; ch; ch = ch.nextSibling) if (ch.name == "JSXIdentifier" || ch.name == "JSXBuiltin" || ch.name == "JSXNamespacedName" || ch.name == "JSXMemberExpression") return doc.sliceString(ch.from, Math.min(ch.to, max));
	return "";
}
var android = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent);
/**
Extension that will automatically insert JSX close tags when a `>` or
`/` is typed.
*/
var autoCloseTags = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, text, defaultInsert) => {
	if ((android ? view.composing : view.compositionStarted) || view.state.readOnly || from != to || text != ">" && text != "/" || !javascriptLanguage.isActiveAt(view.state, from, -1)) return false;
	let base = defaultInsert(), { state } = base;
	let closeTags = state.changeByRange((range) => {
		var _a;
		let { head } = range, around = syntaxTree(state).resolveInner(head - 1, -1), name;
		if (around.name == "JSXStartTag") around = around.parent;
		if (state.doc.sliceString(head - 1, head) != text || around.name == "JSXAttributeValue" && around.to > head);
		else if (text == ">" && around.name == "JSXFragmentTag") return {
			range,
			changes: {
				from: head,
				insert: `</>`
			}
		};
		else if (text == "/" && around.name == "JSXStartCloseTag") {
			let empty = around.parent, base = empty.parent;
			if (base && empty.from == head - 2 && ((name = elementName(state.doc, base.firstChild, head)) || ((_a = base.firstChild) === null || _a === void 0 ? void 0 : _a.name) == "JSXFragmentTag")) {
				let insert = `${name}>`;
				return {
					range: EditorSelection.cursor(head + insert.length, -1),
					changes: {
						from: head,
						insert
					}
				};
			}
		} else if (text == ">") {
			let openTag = findOpenTag(around);
			if (openTag && openTag.name == "JSXOpenTag" && !/^\/?>|^<\//.test(state.doc.sliceString(head, head + 2)) && (name = elementName(state.doc, openTag, head))) return {
				range,
				changes: {
					from: head,
					insert: `</${name}>`
				}
			};
		}
		return { range };
	});
	if (closeTags.changes.empty) return false;
	view.dispatch([base, state.update(closeTags, {
		userEvent: "input.complete",
		scrollIntoView: true
	})]);
	return true;
});
//#endregion
export { history as $, cursorCharLeft as A, undo as At, cursorLineStart as B, insertCompletionText as C, selectLineUp as Ct, startCompletion as D, toggleBlockComment as Dt, snippetCompletion as E, splitLine as Et, cursorGroupRight as F, defaultKeymap as G, cursorMatchingBracket as H, cursorLineBoundaryBackward as I, deleteGroupBackward as J, deleteCharBackward as K, cursorLineBoundaryForward as L, cursorDocEnd as M, cursorDocStart as N, copyLineDown as O, toggleComment as Ot, cursorGroupLeft as P, deleteToLineStart as Q, cursorLineDown as R, ifNotIn as S, selectLineStart as St, pickedCompletion as T, selectPageUp as Tt, cursorPageDown as U, cursorLineUp as V, cursorPageUp as W, deleteLine as X, deleteGroupForward as Y, deleteToLineEnd as Z, closeCompletion as _, selectLine as _t, snippets as a, lineComment as at, deleteBracketPair as b, selectLineDown as bt, ContextTracker as c, moveLineUp as ct, LocalTokenGroup as d, selectCharLeft as dt, historyField as et, CompletionContext as f, selectCharRight as ft, closeBracketsKeymap as g, selectGroupRight as gt, closeBrackets as h, selectGroupLeft as ht, localCompletionSource as i, insertNewlineAndIndent as it, cursorCharRight as j, undoSelection as jt, copyLineUp as k, transposeChars as kt, ExternalTokenizer as l, redo as lt, autocompletion as m, selectDocStart as mt, javascriptLanguage as n, indentLess as nt, tsxLanguage as o, lineUncomment as ot, acceptCompletion as p, selectDocEnd as pt, deleteCharForward as q, jsxLanguage as r, indentMore as rt, typescriptLanguage as s, moveLineDown as st, javascript as t, historyKeymap as tt, LRParser as u, selectAll as ut, completeFromList as v, selectLineBoundaryBackward as vt, moveCompletionSelection as w, selectPageDown as wt, ifIn as x, selectLineEnd as xt, completionStatus as y, selectLineBoundaryForward as yt, cursorLineEnd as z };
