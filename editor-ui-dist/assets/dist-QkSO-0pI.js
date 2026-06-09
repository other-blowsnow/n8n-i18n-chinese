import "./constants-DIP3enMx.js";
import { Bt as EditorView, Nt as styleTags, Pt as tags, St as foldNodeProp, Tt as indentNodeProp, an as tooltips, dt as LanguageSupport, kt as syntaxHighlighting, lt as HighlightStyle, pt as continuedIndent, r as LRParser, ut as LRLanguage, xt as foldInside } from "./dist-CfJ8QMfE.js";
//#region src/features/shared/editors/components/CodeNodeEditor/theme.ts
/**
* Light theme based on Tomorrow theme by Chris Kempson
* https://github.com/vadimdemedes/thememirror/blob/main/source/themes/tomorrow.ts
*
* Dark theme based on Dracula theme by Zeno Rocha
* https://github.com/vadimdemedes/thememirror/blob/main/source/themes/dracula.ts
*/
var BASE_STYLING = {
	fontSize: "0.8em",
	fontFamily: "var(--font-family--monospace)",
	maxHeight: "400px",
	tooltip: {
		maxWidth: "250px",
		lineHeight: "1.3em"
	},
	diagnosticButton: {
		backgroundColor: "inherit",
		lineHeight: "1em",
		textDecoration: "underline",
		marginLeft: "0.2em",
		cursor: "pointer"
	}
};
var codeEditorSyntaxHighlighting = syntaxHighlighting(HighlightStyle.define([
	{
		tag: tags.keyword,
		color: "var(--code-tags--keyword--color)"
	},
	{
		tag: [
			tags.deleted,
			tags.character,
			tags.macroName,
			tags.definition(tags.name),
			tags.definition(tags.variableName),
			tags.atom,
			tags.bool
		],
		color: "var(--code-tags--variable--color)"
	},
	{
		tag: [tags.name, tags.propertyName],
		color: "var(--code-tags--property--color)"
	},
	{
		tag: [
			tags.processingInstruction,
			tags.string,
			tags.inserted,
			tags.special(tags.string)
		],
		color: "var(--code-tags--string--color)"
	},
	{
		tag: [tags.function(tags.variableName), tags.labelName],
		color: "var(--code-tags--function--color)"
	},
	{
		tag: [
			tags.color,
			tags.constant(tags.name),
			tags.standard(tags.name)
		],
		color: "var(--code-tags--constant--color)"
	},
	{
		tag: [tags.className],
		color: "var(--code-tags--class--color)"
	},
	{
		tag: [
			tags.number,
			tags.changed,
			tags.annotation,
			tags.modifier,
			tags.self,
			tags.namespace
		],
		color: "var(--code-tags--primitive--color)"
	},
	{
		tag: [tags.typeName],
		color: "var(--code-tags--type--color)"
	},
	{
		tag: [tags.operator, tags.operatorKeyword],
		color: "var(--code-tags--keyword--color)"
	},
	{
		tag: [
			tags.url,
			tags.escape,
			tags.regexp,
			tags.link
		],
		color: "var(--code-tags--keyword--color)"
	},
	{
		tag: [
			tags.meta,
			tags.comment,
			tags.lineComment
		],
		color: "var(--code-tags--comment--color)"
	},
	{
		tag: tags.strong,
		fontWeight: "bold"
	},
	{
		tag: tags.emphasis,
		fontStyle: "italic"
	},
	{
		tag: tags.link,
		textDecoration: "underline"
	},
	{
		tag: tags.heading,
		fontWeight: "bold",
		color: "var(--code-tags--heading--color)"
	},
	{
		tag: tags.invalid,
		color: "var(--code-tags--invalid--color)"
	},
	{
		tag: tags.strikethrough,
		textDecoration: "line-through"
	},
	{
		tag: [
			tags.derefOperator,
			tags.special(tags.variableName),
			tags.variableName,
			tags.separator
		],
		color: "var(--code--color--foreground)"
	}
]));
var codeEditorTheme = ({ isReadOnly, minHeight, maxHeight, rows }) => [
	EditorView.theme({
		"&": {
			"font-size": BASE_STYLING.fontSize,
			border: "var(--border)",
			borderRadius: "var(--radius)",
			backgroundColor: "var(--code--color--background)",
			color: "var(--code--color--foreground)",
			height: "100%"
		},
		".cm-content": {
			fontFamily: BASE_STYLING.fontFamily,
			caretColor: isReadOnly ? "transparent" : "var(--code--caret--color)",
			lineHeight: "var(--line-height--xl)",
			paddingTop: "var(--spacing--2xs)",
			paddingBottom: "var(--spacing--sm)"
		},
		".cm-cursor, .cm-dropCursor": { borderLeftColor: "var(--code--caret--color)" },
		"&.cm-focused > .cm-scroller .cm-selectionLayer > .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { background: "var(--code--selection--color)" },
		"&.cm-editor": {
			...isReadOnly ? { backgroundColor: "var(--code--color--background--readonly)" } : {},
			borderColor: "var(--border-color)",
			overflow: "hidden"
		},
		"&.cm-editor.cm-focused": {
			outline: "none",
			borderColor: "var(--color--secondary)"
		},
		".cm-activeLine": { backgroundColor: "var(--code--line-highlight--color)" },
		".cm-activeLineGutter": { backgroundColor: "var(--code--line-highlight--color)" },
		".cm-lineNumbers .cm-activeLineGutter": { color: "var(--code--gutter--color--foreground--active)" },
		".cm-gutters": {
			backgroundColor: isReadOnly ? "var(--code--color--background--readonly)" : "var(--code--gutter--color--background)",
			color: "var(--code--gutter--color--foreground)",
			border: "0",
			borderRadius: "var(--radius)"
		},
		".cm-gutterElement": { padding: 0 },
		".cm-tooltip": {
			maxWidth: BASE_STYLING.tooltip.maxWidth,
			lineHeight: BASE_STYLING.tooltip.lineHeight
		},
		".cm-scroller": {
			overflow: "auto",
			maxHeight: maxHeight ?? "100%",
			...isReadOnly ? {} : { minHeight: rows && rows !== -1 ? `${Number(rows + 1) * 1.3}em` : "auto" }
		},
		".cm-lineNumbers .cm-gutterElement": { padding: "0 var(--spacing--5xs) 0 var(--spacing--2xs)" },
		".cm-gutter,.cm-content": { minHeight: rows && rows !== -1 ? "auto" : minHeight ?? "calc(35vh - var(--spacing--2xl))" },
		".cm-foldGutter": { width: "16px" },
		".cm-fold-marker": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			opacity: 0,
			transition: "opacity 0.3s ease"
		},
		".cm-activeLineGutter .cm-fold-marker, .cm-gutters:hover .cm-fold-marker": { opacity: 1 },
		".cm-diagnosticAction": {
			backgroundColor: BASE_STYLING.diagnosticButton.backgroundColor,
			color: "var(--color--primary)",
			lineHeight: BASE_STYLING.diagnosticButton.lineHeight,
			textDecoration: BASE_STYLING.diagnosticButton.textDecoration,
			marginLeft: BASE_STYLING.diagnosticButton.marginLeft,
			cursor: BASE_STYLING.diagnosticButton.cursor
		},
		".cm-diagnostic-error": { backgroundColor: "var(--autocomplete--infobox--color--background)" },
		".cm-diagnosticText": {
			fontSize: "var(--font-size--xs)",
			color: "var(--color--text)"
		},
		".cm-diagnosticDocs": { fontSize: "var(--font-size--2xs)" },
		".cm-foldPlaceholder": {
			color: "var(--color--text)",
			backgroundColor: "var(--color--background)",
			border: "var(--border)"
		},
		".cm-lintRange-error": { backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='6' height='3'%3e%3cpath d='m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0' stroke='%23F56565' fill='none' stroke-width='.7'/%3e%3c/svg%3e\") !important" },
		".cm-selectionMatch": { background: "var(--code--selection--color--highlight)" },
		".cm-selectionMatch-main": { background: "var(--code--selection--color--highlight)" },
		".cm-matchingBracket": { background: "var(--code--selection--color)" },
		".cm-completionMatchedText": {
			textDecoration: "none",
			fontWeight: "600",
			color: "var(--autocomplete--item--color--selected)"
		},
		".cm-faded > span": { opacity: .6 },
		".cm-panel.cm-search": { padding: "var(--spacing--4xs) var(--spacing--2xs)" },
		".cm-panels": {
			background: "var(--color--background--light-2)",
			color: "var(--color--text)"
		},
		".cm-panels-bottom": { borderTop: "var(--border)" },
		".cm-textfield": {
			color: "var(--color--text--shade-1)",
			background: "var(--color--foreground--tint-2)",
			borderRadius: "var(--radius)",
			border: "var(--border)",
			fontSize: "90%"
		},
		".cm-textfield:focus": {
			outline: "none",
			borderColor: "var(--color--secondary)"
		},
		".cm-panel button": { color: "var(--color--text)" },
		".cm-panel input[type=\"checkbox\"]": {
			border: "var(--border)",
			outline: "none"
		},
		".cm-panel input[type=\"checkbox\"]:hover": {
			border: "var(--border)",
			outline: "none"
		},
		".cm-panel.cm-search label": {
			fontSize: "90%",
			display: "inline"
		},
		".cm-button": {
			outline: "none",
			border: "var(--border)",
			color: "var(--color--text--shade-1)",
			backgroundColor: "var(--color--foreground--tint-2)",
			backgroundImage: "none",
			borderRadius: "var(--radius)",
			fontSize: "90%"
		}
	}),
	codeEditorSyntaxHighlighting,
	tooltips({ parent: document.getElementById("cm-tooltip-container") ?? void 0 })
];
//#endregion
//#region ../../../node_modules/.pnpm/@lezer+json@1.0.0/node_modules/@lezer/json/dist/index.es.js
var jsonHighlighting = styleTags({
	String: tags.string,
	Number: tags.number,
	"True False": tags.bool,
	PropertyName: tags.propertyName,
	Null: tags.null,
	",": tags.separator,
	"[ ]": tags.squareBracket,
	"{ }": tags.brace
});
var parser = LRParser.deserialize({
	version: 14,
	states: "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",
	stateData: "#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",
	goto: "!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
	nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",
	maxTerm: 25,
	nodeProps: [[
		"openedBy",
		7,
		"{",
		12,
		"["
	], [
		"closedBy",
		8,
		"}",
		13,
		"]"
	]],
	propSources: [jsonHighlighting],
	skippedNodes: [0],
	repeatNodeCount: 2,
	tokenData: "(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",
	tokenizers: [0],
	topRules: { "JsonText": [0, 1] },
	tokenPrec: 0
});
//#endregion
//#region ../../../node_modules/.pnpm/@codemirror+lang-json@6.0.2/node_modules/@codemirror/lang-json/dist/index.js
/**
Calls
[`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
on the document and, if that throws an error, reports it as a
single diagnostic.
*/
var jsonParseLinter = () => (view) => {
	try {
		JSON.parse(view.state.doc.toString());
	} catch (e) {
		if (!(e instanceof SyntaxError)) throw e;
		const pos = getErrorPosition(e, view.state.doc);
		return [{
			from: pos,
			message: e.message,
			severity: "error",
			to: pos
		}];
	}
	return [];
};
function getErrorPosition(error, doc) {
	let m;
	if (m = error.message.match(/at position (\d+)/)) return Math.min(+m[1], doc.length);
	if (m = error.message.match(/at line (\d+) column (\d+)/)) return Math.min(doc.line(+m[1]).from + +m[2] - 1, doc.length);
	return 0;
}
/**
A language provider that provides JSON parsing.
*/
var jsonLanguage = /* @__PURE__ */ LRLanguage.define({
	name: "json",
	parser: /* @__PURE__ */ parser.configure({ props: [/* @__PURE__ */ indentNodeProp.add({
		Object: /* @__PURE__ */ continuedIndent({ except: /^\s*\}/ }),
		Array: /* @__PURE__ */ continuedIndent({ except: /^\s*\]/ })
	}), /* @__PURE__ */ foldNodeProp.add({ "Object Array": foldInside })] }),
	languageData: {
		closeBrackets: { brackets: [
			"[",
			"{",
			"\""
		] },
		indentOnInput: /^\s*[\}\]]$/
	}
});
/**
JSON language support.
*/
function json() {
	return new LanguageSupport(jsonLanguage);
}
//#endregion
export { jsonParseLinter as n, codeEditorTheme as r, json as t };
