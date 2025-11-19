import { i as __require, o as __toESM, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, En as init_dist, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Tn as global, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode, w as createBaseVNode, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ft as ElDropdown, It as ElDropdownItem, Lt as ElDropdownMenu, Tt as N8nIconButton_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { a as useNDVStore, di as convertPath, o as useWorkflowsStore, t as useTelemetry, ui as clearJsonKey, xn as useNodeHelpers, zr as executionDataToJson } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { B as nonExistingJsonPath, Ts as PopOutWindowKey } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { t as usePinnedData } from "./usePinnedData-CxyLm90h.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
var import_jsonpath = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist();
	/*! jsonpath 1.1.1 */
	(function(f) {
		if (typeof exports === "object" && typeof module !== "undefined") module.exports = f();
		else if (typeof define === "function" && define.amd) define([], f);
		else {
			var g;
			if (typeof window !== "undefined") g = window;
			else if (typeof global !== "undefined") g = global;
			else if (typeof self !== "undefined") g = self;
			else g = this;
			g.jsonpath = f();
		}
	})(function() {
		var define$1;
		return (function e(t, n, r) {
			function s(o$1, u) {
				if (!n[o$1]) {
					if (!t[o$1]) {
						var a = typeof __require == "function" && __require;
						if (!u && a) return a(o$1, !0);
						if (i) return i(o$1, !0);
						var f = /* @__PURE__ */ new Error("Cannot find module '" + o$1 + "'");
						throw f.code = "MODULE_NOT_FOUND", f;
					}
					var l = n[o$1] = { exports: {} };
					t[o$1][0].call(l.exports, function(e$1) {
						var n$1 = t[o$1][1][e$1];
						return s(n$1 ? n$1 : e$1);
					}, l, l.exports, e, t, n, r);
				}
				return n[o$1].exports;
			}
			var i = typeof __require == "function" && __require;
			for (var o = 0; o < r.length; o++) s(r[o]);
			return s;
		})({
			"./aesprim": [function(require$1, module$1, exports$1) {
				(function(root, factory) {
					/* istanbul ignore next */
					if (typeof define$1 === "function" && define$1.amd) define$1(["exports"], factory);
					else if (typeof exports$1 !== "undefined") factory(exports$1);
					else factory(root.esprima = {});
				})(this, function(exports$2) {
					var Token = {
						BooleanLiteral: 1,
						EOF: 2,
						Identifier: 3,
						Keyword: 4,
						NullLiteral: 5,
						NumericLiteral: 6,
						Punctuator: 7,
						StringLiteral: 8,
						RegularExpression: 9
					}, TokenName = {}, FnExprTokens, Syntax, PropertyKind, Messages, Regex, SyntaxTreeDelegate, source, strict, index, lineNumber, lineStart, length, delegate, lookahead, state, extra;
					TokenName[Token.BooleanLiteral] = "Boolean";
					TokenName[Token.EOF] = "<end>";
					TokenName[Token.Identifier] = "Identifier";
					TokenName[Token.Keyword] = "Keyword";
					TokenName[Token.NullLiteral] = "Null";
					TokenName[Token.NumericLiteral] = "Numeric";
					TokenName[Token.Punctuator] = "Punctuator";
					TokenName[Token.StringLiteral] = "String";
					TokenName[Token.RegularExpression] = "RegularExpression";
					FnExprTokens = [
						"(",
						"{",
						"[",
						"in",
						"typeof",
						"instanceof",
						"new",
						"return",
						"case",
						"delete",
						"throw",
						"void",
						"=",
						"+=",
						"-=",
						"*=",
						"/=",
						"%=",
						"<<=",
						">>=",
						">>>=",
						"&=",
						"|=",
						"^=",
						",",
						"+",
						"-",
						"*",
						"/",
						"%",
						"++",
						"--",
						"<<",
						">>",
						">>>",
						"&",
						"|",
						"^",
						"!",
						"~",
						"&&",
						"||",
						"?",
						":",
						"===",
						"==",
						">=",
						"<=",
						"<",
						">",
						"!=",
						"!=="
					];
					Syntax = {
						AssignmentExpression: "AssignmentExpression",
						ArrayExpression: "ArrayExpression",
						BlockStatement: "BlockStatement",
						BinaryExpression: "BinaryExpression",
						BreakStatement: "BreakStatement",
						CallExpression: "CallExpression",
						CatchClause: "CatchClause",
						ConditionalExpression: "ConditionalExpression",
						ContinueStatement: "ContinueStatement",
						DoWhileStatement: "DoWhileStatement",
						DebuggerStatement: "DebuggerStatement",
						EmptyStatement: "EmptyStatement",
						ExpressionStatement: "ExpressionStatement",
						ForStatement: "ForStatement",
						ForInStatement: "ForInStatement",
						FunctionDeclaration: "FunctionDeclaration",
						FunctionExpression: "FunctionExpression",
						Identifier: "Identifier",
						IfStatement: "IfStatement",
						Literal: "Literal",
						LabeledStatement: "LabeledStatement",
						LogicalExpression: "LogicalExpression",
						MemberExpression: "MemberExpression",
						NewExpression: "NewExpression",
						ObjectExpression: "ObjectExpression",
						Program: "Program",
						Property: "Property",
						ReturnStatement: "ReturnStatement",
						SequenceExpression: "SequenceExpression",
						SwitchStatement: "SwitchStatement",
						SwitchCase: "SwitchCase",
						ThisExpression: "ThisExpression",
						ThrowStatement: "ThrowStatement",
						TryStatement: "TryStatement",
						UnaryExpression: "UnaryExpression",
						UpdateExpression: "UpdateExpression",
						VariableDeclaration: "VariableDeclaration",
						VariableDeclarator: "VariableDeclarator",
						WhileStatement: "WhileStatement",
						WithStatement: "WithStatement"
					};
					PropertyKind = {
						Data: 1,
						Get: 2,
						Set: 4
					};
					Messages = {
						UnexpectedToken: "Unexpected token %0",
						UnexpectedNumber: "Unexpected number",
						UnexpectedString: "Unexpected string",
						UnexpectedIdentifier: "Unexpected identifier",
						UnexpectedReserved: "Unexpected reserved word",
						UnexpectedEOS: "Unexpected end of input",
						NewlineAfterThrow: "Illegal newline after throw",
						InvalidRegExp: "Invalid regular expression",
						UnterminatedRegExp: "Invalid regular expression: missing /",
						InvalidLHSInAssignment: "Invalid left-hand side in assignment",
						InvalidLHSInForIn: "Invalid left-hand side in for-in",
						MultipleDefaultsInSwitch: "More than one default clause in switch statement",
						NoCatchOrFinally: "Missing catch or finally after try",
						UnknownLabel: "Undefined label '%0'",
						Redeclaration: "%0 '%1' has already been declared",
						IllegalContinue: "Illegal continue statement",
						IllegalBreak: "Illegal break statement",
						IllegalReturn: "Illegal return statement",
						StrictModeWith: "Strict mode code may not include a with statement",
						StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
						StrictVarName: "Variable name may not be eval or arguments in strict mode",
						StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
						StrictParamDupe: "Strict mode function may not have duplicate parameter names",
						StrictFunctionName: "Function name may not be eval or arguments in strict mode",
						StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
						StrictDelete: "Delete of an unqualified identifier in strict mode.",
						StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
						AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
						AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
						StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
						StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
						StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
						StrictReservedWord: "Use of future reserved word in strict mode"
					};
					Regex = {
						NonAsciiIdentifierStart: /* @__PURE__ */ new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
						NonAsciiIdentifierPart: /* @__PURE__ */ new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")
					};
					function assert(condition, message) {
						/* istanbul ignore if */
						if (!condition) throw new Error("ASSERT: " + message);
					}
					function isDecimalDigit(ch) {
						return ch >= 48 && ch <= 57;
					}
					function isHexDigit(ch) {
						return "0123456789abcdefABCDEF".indexOf(ch) >= 0;
					}
					function isOctalDigit(ch) {
						return "01234567".indexOf(ch) >= 0;
					}
					function isWhiteSpace(ch) {
						return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch >= 5760 && [
							5760,
							6158,
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
							8239,
							8287,
							12288,
							65279
						].indexOf(ch) >= 0;
					}
					function isLineTerminator(ch) {
						return ch === 10 || ch === 13 || ch === 8232 || ch === 8233;
					}
					function isIdentifierStart(ch) {
						return ch == 64 || ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch));
					}
					function isIdentifierPart(ch) {
						return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch));
					}
					function isFutureReservedWord(id) {
						switch (id) {
							case "class":
							case "enum":
							case "export":
							case "extends":
							case "import":
							case "super": return true;
							default: return false;
						}
					}
					function isStrictModeReservedWord(id) {
						switch (id) {
							case "implements":
							case "interface":
							case "package":
							case "private":
							case "protected":
							case "public":
							case "static":
							case "yield":
							case "let": return true;
							default: return false;
						}
					}
					function isRestrictedWord(id) {
						return id === "eval" || id === "arguments";
					}
					function isKeyword(id) {
						if (strict && isStrictModeReservedWord(id)) return true;
						switch (id.length) {
							case 2: return id === "if" || id === "in" || id === "do";
							case 3: return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
							case 4: return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
							case 5: return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
							case 6: return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
							case 7: return id === "default" || id === "finally" || id === "extends";
							case 8: return id === "function" || id === "continue" || id === "debugger";
							case 10: return id === "instanceof";
							default: return false;
						}
					}
					function addComment(type, value, start, end, loc) {
						var comment;
						assert(typeof start === "number", "Comment must have valid position");
						if (state.lastCommentStart >= start) return;
						state.lastCommentStart = start;
						comment = {
							type,
							value
						};
						if (extra.range) comment.range = [start, end];
						if (extra.loc) comment.loc = loc;
						extra.comments.push(comment);
						if (extra.attachComment) {
							extra.leadingComments.push(comment);
							extra.trailingComments.push(comment);
						}
					}
					function skipSingleLineComment(offset) {
						var start = index - offset, loc = { start: {
							line: lineNumber,
							column: index - lineStart - offset
						} }, ch, comment;
						while (index < length) {
							ch = source.charCodeAt(index);
							++index;
							if (isLineTerminator(ch)) {
								if (extra.comments) {
									comment = source.slice(start + offset, index - 1);
									loc.end = {
										line: lineNumber,
										column: index - lineStart - 1
									};
									addComment("Line", comment, start, index - 1, loc);
								}
								if (ch === 13 && source.charCodeAt(index) === 10) ++index;
								++lineNumber;
								lineStart = index;
								return;
							}
						}
						if (extra.comments) {
							comment = source.slice(start + offset, index);
							loc.end = {
								line: lineNumber,
								column: index - lineStart
							};
							addComment("Line", comment, start, index, loc);
						}
					}
					function skipMultiLineComment() {
						var start, loc, ch, comment;
						if (extra.comments) {
							start = index - 2;
							loc = { start: {
								line: lineNumber,
								column: index - lineStart - 2
							} };
						}
						while (index < length) {
							ch = source.charCodeAt(index);
							if (isLineTerminator(ch)) {
								if (ch === 13 && source.charCodeAt(index + 1) === 10) ++index;
								++lineNumber;
								++index;
								lineStart = index;
								if (index >= length) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
							} else if (ch === 42) {
								if (source.charCodeAt(index + 1) === 47) {
									++index;
									++index;
									if (extra.comments) {
										comment = source.slice(start + 2, index - 2);
										loc.end = {
											line: lineNumber,
											column: index - lineStart
										};
										addComment("Block", comment, start, index, loc);
									}
									return;
								}
								++index;
							} else ++index;
						}
						throwError({}, Messages.UnexpectedToken, "ILLEGAL");
					}
					function skipComment() {
						var ch, start = index === 0;
						while (index < length) {
							ch = source.charCodeAt(index);
							if (isWhiteSpace(ch)) ++index;
							else if (isLineTerminator(ch)) {
								++index;
								if (ch === 13 && source.charCodeAt(index) === 10) ++index;
								++lineNumber;
								lineStart = index;
								start = true;
							} else if (ch === 47) {
								ch = source.charCodeAt(index + 1);
								if (ch === 47) {
									++index;
									++index;
									skipSingleLineComment(2);
									start = true;
								} else if (ch === 42) {
									++index;
									++index;
									skipMultiLineComment();
								} else break;
							} else if (start && ch === 45) if (source.charCodeAt(index + 1) === 45 && source.charCodeAt(index + 2) === 62) {
								index += 3;
								skipSingleLineComment(3);
							} else break;
							else if (ch === 60) if (source.slice(index + 1, index + 4) === "!--") {
								++index;
								++index;
								++index;
								++index;
								skipSingleLineComment(4);
							} else break;
							else break;
						}
					}
					function scanHexEscape(prefix) {
						var i, len, ch, code = 0;
						len = prefix === "u" ? 4 : 2;
						for (i = 0; i < len; ++i) if (index < length && isHexDigit(source[index])) {
							ch = source[index++];
							code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase());
						} else return "";
						return String.fromCharCode(code);
					}
					function getEscapedIdentifier() {
						var ch = source.charCodeAt(index++), id = String.fromCharCode(ch);
						if (ch === 92) {
							if (source.charCodeAt(index) !== 117) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
							++index;
							ch = scanHexEscape("u");
							if (!ch || ch === "\\" || !isIdentifierStart(ch.charCodeAt(0))) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
							id = ch;
						}
						while (index < length) {
							ch = source.charCodeAt(index);
							if (!isIdentifierPart(ch)) break;
							++index;
							id += String.fromCharCode(ch);
							if (ch === 92) {
								id = id.substr(0, id.length - 1);
								if (source.charCodeAt(index) !== 117) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
								++index;
								ch = scanHexEscape("u");
								if (!ch || ch === "\\" || !isIdentifierPart(ch.charCodeAt(0))) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
								id += ch;
							}
						}
						return id;
					}
					function getIdentifier() {
						var start = index++, ch;
						while (index < length) {
							ch = source.charCodeAt(index);
							if (ch === 92) {
								index = start;
								return getEscapedIdentifier();
							}
							if (isIdentifierPart(ch)) ++index;
							else break;
						}
						return source.slice(start, index);
					}
					function scanIdentifier() {
						var start = index, id = source.charCodeAt(index) === 92 ? getEscapedIdentifier() : getIdentifier(), type;
						if (id.length === 1) type = Token.Identifier;
						else if (isKeyword(id)) type = Token.Keyword;
						else if (id === "null") type = Token.NullLiteral;
						else if (id === "true" || id === "false") type = Token.BooleanLiteral;
						else type = Token.Identifier;
						return {
							type,
							value: id,
							lineNumber,
							lineStart,
							start,
							end: index
						};
					}
					function scanPunctuator() {
						var start = index, code = source.charCodeAt(index), code2, ch1 = source[index], ch2, ch3, ch4;
						switch (code) {
							case 46:
							case 40:
							case 41:
							case 59:
							case 44:
							case 123:
							case 125:
							case 91:
							case 93:
							case 58:
							case 63:
							case 126:
								++index;
								if (extra.tokenize) {
									if (code === 40) extra.openParenToken = extra.tokens.length;
									else if (code === 123) extra.openCurlyToken = extra.tokens.length;
								}
								return {
									type: Token.Punctuator,
									value: String.fromCharCode(code),
									lineNumber,
									lineStart,
									start,
									end: index
								};
							default:
								code2 = source.charCodeAt(index + 1);
								if (code2 === 61) switch (code) {
									case 43:
									case 45:
									case 47:
									case 60:
									case 62:
									case 94:
									case 124:
									case 37:
									case 38:
									case 42:
										index += 2;
										return {
											type: Token.Punctuator,
											value: String.fromCharCode(code) + String.fromCharCode(code2),
											lineNumber,
											lineStart,
											start,
											end: index
										};
									case 33:
									case 61:
										index += 2;
										if (source.charCodeAt(index) === 61) ++index;
										return {
											type: Token.Punctuator,
											value: source.slice(start, index),
											lineNumber,
											lineStart,
											start,
											end: index
										};
								}
						}
						ch4 = source.substr(index, 4);
						if (ch4 === ">>>=") {
							index += 4;
							return {
								type: Token.Punctuator,
								value: ch4,
								lineNumber,
								lineStart,
								start,
								end: index
							};
						}
						ch3 = ch4.substr(0, 3);
						if (ch3 === ">>>" || ch3 === "<<=" || ch3 === ">>=") {
							index += 3;
							return {
								type: Token.Punctuator,
								value: ch3,
								lineNumber,
								lineStart,
								start,
								end: index
							};
						}
						ch2 = ch3.substr(0, 2);
						if (ch1 === ch2[1] && "+-<>&|".indexOf(ch1) >= 0 || ch2 === "=>") {
							index += 2;
							return {
								type: Token.Punctuator,
								value: ch2,
								lineNumber,
								lineStart,
								start,
								end: index
							};
						}
						if ("<>=!+-*%&|^/".indexOf(ch1) >= 0) {
							++index;
							return {
								type: Token.Punctuator,
								value: ch1,
								lineNumber,
								lineStart,
								start,
								end: index
							};
						}
						throwError({}, Messages.UnexpectedToken, "ILLEGAL");
					}
					function scanHexLiteral(start) {
						var number = "";
						while (index < length) {
							if (!isHexDigit(source[index])) break;
							number += source[index++];
						}
						if (number.length === 0) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
						if (isIdentifierStart(source.charCodeAt(index))) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
						return {
							type: Token.NumericLiteral,
							value: parseInt("0x" + number, 16),
							lineNumber,
							lineStart,
							start,
							end: index
						};
					}
					function scanOctalLiteral(start) {
						var number = "0" + source[index++];
						while (index < length) {
							if (!isOctalDigit(source[index])) break;
							number += source[index++];
						}
						if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
						return {
							type: Token.NumericLiteral,
							value: parseInt(number, 8),
							octal: true,
							lineNumber,
							lineStart,
							start,
							end: index
						};
					}
					function scanNumericLiteral() {
						var number, start, ch = source[index];
						assert(isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
						start = index;
						number = "";
						if (ch !== ".") {
							number = source[index++];
							ch = source[index];
							if (number === "0") {
								if (ch === "x" || ch === "X") {
									++index;
									return scanHexLiteral(start);
								}
								if (isOctalDigit(ch)) return scanOctalLiteral(start);
								if (ch && isDecimalDigit(ch.charCodeAt(0))) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
							}
							while (isDecimalDigit(source.charCodeAt(index))) number += source[index++];
							ch = source[index];
						}
						if (ch === ".") {
							number += source[index++];
							while (isDecimalDigit(source.charCodeAt(index))) number += source[index++];
							ch = source[index];
						}
						if (ch === "e" || ch === "E") {
							number += source[index++];
							ch = source[index];
							if (ch === "+" || ch === "-") number += source[index++];
							if (isDecimalDigit(source.charCodeAt(index))) while (isDecimalDigit(source.charCodeAt(index))) number += source[index++];
							else throwError({}, Messages.UnexpectedToken, "ILLEGAL");
						}
						if (isIdentifierStart(source.charCodeAt(index))) throwError({}, Messages.UnexpectedToken, "ILLEGAL");
						return {
							type: Token.NumericLiteral,
							value: parseFloat(number),
							lineNumber,
							lineStart,
							start,
							end: index
						};
					}
					function scanStringLiteral() {
						var str = "", quote, start, ch, code, unescaped, restore, octal = false, startLineNumber = lineNumber, startLineStart = lineStart;
						quote = source[index];
						assert(quote === "'" || quote === "\"", "String literal must starts with a quote");
						start = index;
						++index;
						while (index < length) {
							ch = source[index++];
							if (ch === quote) {
								quote = "";
								break;
							} else if (ch === "\\") {
								ch = source[index++];
								if (!ch || !isLineTerminator(ch.charCodeAt(0))) switch (ch) {
									case "u":
									case "x":
										restore = index;
										unescaped = scanHexEscape(ch);
										if (unescaped) str += unescaped;
										else {
											index = restore;
											str += ch;
										}
										break;
									case "n":
										str += "\n";
										break;
									case "r":
										str += "\r";
										break;
									case "t":
										str += "	";
										break;
									case "b":
										str += "\b";
										break;
									case "f":
										str += "\f";
										break;
									case "v":
										str += "\v";
										break;
									default:
										if (isOctalDigit(ch)) {
											code = "01234567".indexOf(ch);
											if (code !== 0) octal = true;
											if (index < length && isOctalDigit(source[index])) {
												octal = true;
												code = code * 8 + "01234567".indexOf(source[index++]);
												if ("0123".indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) code = code * 8 + "01234567".indexOf(source[index++]);
											}
											str += String.fromCharCode(code);
										} else str += ch;
										break;
								}
								else {
									++lineNumber;
									if (ch === "\r" && source[index] === "\n") ++index;
									lineStart = index;
								}
							} else if (isLineTerminator(ch.charCodeAt(0))) break;
							else str += ch;
						}
						if (quote !== "") throwError({}, Messages.UnexpectedToken, "ILLEGAL");
						return {
							type: Token.StringLiteral,
							value: str,
							octal,
							startLineNumber,
							startLineStart,
							lineNumber,
							lineStart,
							start,
							end: index
						};
					}
					function testRegExp(pattern, flags) {
						var value;
						try {
							value = new RegExp(pattern, flags);
						} catch (e) {
							throwError({}, Messages.InvalidRegExp);
						}
						return value;
					}
					function scanRegExpBody() {
						var ch = source[index], str, classMarker, terminated, body;
						assert(ch === "/", "Regular expression literal must start with a slash");
						str = source[index++];
						classMarker = false;
						terminated = false;
						while (index < length) {
							ch = source[index++];
							str += ch;
							if (ch === "\\") {
								ch = source[index++];
								if (isLineTerminator(ch.charCodeAt(0))) throwError({}, Messages.UnterminatedRegExp);
								str += ch;
							} else if (isLineTerminator(ch.charCodeAt(0))) throwError({}, Messages.UnterminatedRegExp);
							else if (classMarker) {
								if (ch === "]") classMarker = false;
							} else if (ch === "/") {
								terminated = true;
								break;
							} else if (ch === "[") classMarker = true;
						}
						if (!terminated) throwError({}, Messages.UnterminatedRegExp);
						body = str.substr(1, str.length - 2);
						return {
							value: body,
							literal: str
						};
					}
					function scanRegExpFlags() {
						var ch, str = "", flags = "", restore;
						while (index < length) {
							ch = source[index];
							if (!isIdentifierPart(ch.charCodeAt(0))) break;
							++index;
							if (ch === "\\" && index < length) {
								ch = source[index];
								if (ch === "u") {
									++index;
									restore = index;
									ch = scanHexEscape("u");
									if (ch) {
										flags += ch;
										for (str += "\\u"; restore < index; ++restore) str += source[restore];
									} else {
										index = restore;
										flags += "u";
										str += "\\u";
									}
									throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
								} else {
									str += "\\";
									throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
								}
							} else {
								flags += ch;
								str += ch;
							}
						}
						return {
							value: flags,
							literal: str
						};
					}
					function scanRegExp() {
						var start, body, flags, value;
						lookahead = null;
						skipComment();
						start = index;
						body = scanRegExpBody();
						flags = scanRegExpFlags();
						value = testRegExp(body.value, flags.value);
						if (extra.tokenize) return {
							type: Token.RegularExpression,
							value,
							lineNumber,
							lineStart,
							start,
							end: index
						};
						return {
							literal: body.literal + flags.literal,
							value,
							start,
							end: index
						};
					}
					function collectRegex() {
						var pos, loc, regex, token;
						skipComment();
						pos = index;
						loc = { start: {
							line: lineNumber,
							column: index - lineStart
						} };
						regex = scanRegExp();
						loc.end = {
							line: lineNumber,
							column: index - lineStart
						};
						/* istanbul ignore next */
						if (!extra.tokenize) {
							if (extra.tokens.length > 0) {
								token = extra.tokens[extra.tokens.length - 1];
								if (token.range[0] === pos && token.type === "Punctuator") {
									if (token.value === "/" || token.value === "/=") extra.tokens.pop();
								}
							}
							extra.tokens.push({
								type: "RegularExpression",
								value: regex.literal,
								range: [pos, index],
								loc
							});
						}
						return regex;
					}
					function isIdentifierName(token) {
						return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
					}
					function advanceSlash() {
						var prevToken = extra.tokens[extra.tokens.length - 1], checkToken;
						if (!prevToken) return collectRegex();
						if (prevToken.type === "Punctuator") {
							if (prevToken.value === "]") return scanPunctuator();
							if (prevToken.value === ")") {
								checkToken = extra.tokens[extra.openParenToken - 1];
								if (checkToken && checkToken.type === "Keyword" && (checkToken.value === "if" || checkToken.value === "while" || checkToken.value === "for" || checkToken.value === "with")) return collectRegex();
								return scanPunctuator();
							}
							if (prevToken.value === "}") {
								if (extra.tokens[extra.openCurlyToken - 3] && extra.tokens[extra.openCurlyToken - 3].type === "Keyword") {
									checkToken = extra.tokens[extra.openCurlyToken - 4];
									if (!checkToken) return scanPunctuator();
								} else if (extra.tokens[extra.openCurlyToken - 4] && extra.tokens[extra.openCurlyToken - 4].type === "Keyword") {
									checkToken = extra.tokens[extra.openCurlyToken - 5];
									if (!checkToken) return collectRegex();
								} else return scanPunctuator();
								if (FnExprTokens.indexOf(checkToken.value) >= 0) return scanPunctuator();
								return collectRegex();
							}
							return collectRegex();
						}
						if (prevToken.type === "Keyword") return collectRegex();
						return scanPunctuator();
					}
					function advance() {
						var ch;
						skipComment();
						if (index >= length) return {
							type: Token.EOF,
							lineNumber,
							lineStart,
							start: index,
							end: index
						};
						ch = source.charCodeAt(index);
						if (isIdentifierStart(ch)) return scanIdentifier();
						if (ch === 40 || ch === 41 || ch === 59) return scanPunctuator();
						if (ch === 39 || ch === 34) return scanStringLiteral();
						if (ch === 46) {
							if (isDecimalDigit(source.charCodeAt(index + 1))) return scanNumericLiteral();
							return scanPunctuator();
						}
						if (isDecimalDigit(ch)) return scanNumericLiteral();
						if (extra.tokenize && ch === 47) return advanceSlash();
						return scanPunctuator();
					}
					function collectToken() {
						var loc, token, value;
						skipComment();
						loc = { start: {
							line: lineNumber,
							column: index - lineStart
						} };
						token = advance();
						loc.end = {
							line: lineNumber,
							column: index - lineStart
						};
						if (token.type !== Token.EOF) {
							value = source.slice(token.start, token.end);
							extra.tokens.push({
								type: TokenName[token.type],
								value,
								range: [token.start, token.end],
								loc
							});
						}
						return token;
					}
					function lex() {
						var token = lookahead;
						index = token.end;
						lineNumber = token.lineNumber;
						lineStart = token.lineStart;
						lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
						index = token.end;
						lineNumber = token.lineNumber;
						lineStart = token.lineStart;
						return token;
					}
					function peek() {
						var pos = index, line = lineNumber, start = lineStart;
						lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
						index = pos;
						lineNumber = line;
						lineStart = start;
					}
					function Position(line, column) {
						this.line = line;
						this.column = column;
					}
					function SourceLocation(startLine, startColumn, line, column) {
						this.start = new Position(startLine, startColumn);
						this.end = new Position(line, column);
					}
					SyntaxTreeDelegate = {
						name: "SyntaxTree",
						processComment: function(node) {
							var lastChild, trailingComments;
							if (node.type === Syntax.Program) {
								if (node.body.length > 0) return;
							}
							if (extra.trailingComments.length > 0) if (extra.trailingComments[0].range[0] >= node.range[1]) {
								trailingComments = extra.trailingComments;
								extra.trailingComments = [];
							} else extra.trailingComments.length = 0;
							else if (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
								trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
								delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
							}
							while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) lastChild = extra.bottomRightStack.pop();
							if (lastChild) {
								if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
									node.leadingComments = lastChild.leadingComments;
									delete lastChild.leadingComments;
								}
							} else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
								node.leadingComments = extra.leadingComments;
								extra.leadingComments = [];
							}
							if (trailingComments) node.trailingComments = trailingComments;
							extra.bottomRightStack.push(node);
						},
						markEnd: function(node, startToken) {
							if (extra.range) node.range = [startToken.start, index];
							if (extra.loc) {
								node.loc = new SourceLocation(startToken.startLineNumber === void 0 ? startToken.lineNumber : startToken.startLineNumber, startToken.start - (startToken.startLineStart === void 0 ? startToken.lineStart : startToken.startLineStart), lineNumber, index - lineStart);
								this.postProcess(node);
							}
							if (extra.attachComment) this.processComment(node);
							return node;
						},
						postProcess: function(node) {
							if (extra.source) node.loc.source = extra.source;
							return node;
						},
						createArrayExpression: function(elements) {
							return {
								type: Syntax.ArrayExpression,
								elements
							};
						},
						createAssignmentExpression: function(operator, left, right) {
							return {
								type: Syntax.AssignmentExpression,
								operator,
								left,
								right
							};
						},
						createBinaryExpression: function(operator, left, right) {
							return {
								type: operator === "||" || operator === "&&" ? Syntax.LogicalExpression : Syntax.BinaryExpression,
								operator,
								left,
								right
							};
						},
						createBlockStatement: function(body) {
							return {
								type: Syntax.BlockStatement,
								body
							};
						},
						createBreakStatement: function(label) {
							return {
								type: Syntax.BreakStatement,
								label
							};
						},
						createCallExpression: function(callee, args) {
							return {
								type: Syntax.CallExpression,
								callee,
								"arguments": args
							};
						},
						createCatchClause: function(param, body) {
							return {
								type: Syntax.CatchClause,
								param,
								body
							};
						},
						createConditionalExpression: function(test, consequent, alternate) {
							return {
								type: Syntax.ConditionalExpression,
								test,
								consequent,
								alternate
							};
						},
						createContinueStatement: function(label) {
							return {
								type: Syntax.ContinueStatement,
								label
							};
						},
						createDebuggerStatement: function() {
							return { type: Syntax.DebuggerStatement };
						},
						createDoWhileStatement: function(body, test) {
							return {
								type: Syntax.DoWhileStatement,
								body,
								test
							};
						},
						createEmptyStatement: function() {
							return { type: Syntax.EmptyStatement };
						},
						createExpressionStatement: function(expression) {
							return {
								type: Syntax.ExpressionStatement,
								expression
							};
						},
						createForStatement: function(init, test, update, body) {
							return {
								type: Syntax.ForStatement,
								init,
								test,
								update,
								body
							};
						},
						createForInStatement: function(left, right, body) {
							return {
								type: Syntax.ForInStatement,
								left,
								right,
								body,
								each: false
							};
						},
						createFunctionDeclaration: function(id, params, defaults, body) {
							return {
								type: Syntax.FunctionDeclaration,
								id,
								params,
								defaults,
								body,
								rest: null,
								generator: false,
								expression: false
							};
						},
						createFunctionExpression: function(id, params, defaults, body) {
							return {
								type: Syntax.FunctionExpression,
								id,
								params,
								defaults,
								body,
								rest: null,
								generator: false,
								expression: false
							};
						},
						createIdentifier: function(name) {
							return {
								type: Syntax.Identifier,
								name
							};
						},
						createIfStatement: function(test, consequent, alternate) {
							return {
								type: Syntax.IfStatement,
								test,
								consequent,
								alternate
							};
						},
						createLabeledStatement: function(label, body) {
							return {
								type: Syntax.LabeledStatement,
								label,
								body
							};
						},
						createLiteral: function(token) {
							return {
								type: Syntax.Literal,
								value: token.value,
								raw: source.slice(token.start, token.end)
							};
						},
						createMemberExpression: function(accessor, object, property) {
							return {
								type: Syntax.MemberExpression,
								computed: accessor === "[",
								object,
								property
							};
						},
						createNewExpression: function(callee, args) {
							return {
								type: Syntax.NewExpression,
								callee,
								"arguments": args
							};
						},
						createObjectExpression: function(properties) {
							return {
								type: Syntax.ObjectExpression,
								properties
							};
						},
						createPostfixExpression: function(operator, argument) {
							return {
								type: Syntax.UpdateExpression,
								operator,
								argument,
								prefix: false
							};
						},
						createProgram: function(body) {
							return {
								type: Syntax.Program,
								body
							};
						},
						createProperty: function(kind, key, value) {
							return {
								type: Syntax.Property,
								key,
								value,
								kind
							};
						},
						createReturnStatement: function(argument) {
							return {
								type: Syntax.ReturnStatement,
								argument
							};
						},
						createSequenceExpression: function(expressions) {
							return {
								type: Syntax.SequenceExpression,
								expressions
							};
						},
						createSwitchCase: function(test, consequent) {
							return {
								type: Syntax.SwitchCase,
								test,
								consequent
							};
						},
						createSwitchStatement: function(discriminant, cases) {
							return {
								type: Syntax.SwitchStatement,
								discriminant,
								cases
							};
						},
						createThisExpression: function() {
							return { type: Syntax.ThisExpression };
						},
						createThrowStatement: function(argument) {
							return {
								type: Syntax.ThrowStatement,
								argument
							};
						},
						createTryStatement: function(block, guardedHandlers, handlers, finalizer) {
							return {
								type: Syntax.TryStatement,
								block,
								guardedHandlers,
								handlers,
								finalizer
							};
						},
						createUnaryExpression: function(operator, argument) {
							if (operator === "++" || operator === "--") return {
								type: Syntax.UpdateExpression,
								operator,
								argument,
								prefix: true
							};
							return {
								type: Syntax.UnaryExpression,
								operator,
								argument,
								prefix: true
							};
						},
						createVariableDeclaration: function(declarations, kind) {
							return {
								type: Syntax.VariableDeclaration,
								declarations,
								kind
							};
						},
						createVariableDeclarator: function(id, init) {
							return {
								type: Syntax.VariableDeclarator,
								id,
								init
							};
						},
						createWhileStatement: function(test, body) {
							return {
								type: Syntax.WhileStatement,
								test,
								body
							};
						},
						createWithStatement: function(object, body) {
							return {
								type: Syntax.WithStatement,
								object,
								body
							};
						}
					};
					function peekLineTerminator() {
						var pos = index, line = lineNumber, start = lineStart, found;
						skipComment();
						found = lineNumber !== line;
						index = pos;
						lineNumber = line;
						lineStart = start;
						return found;
					}
					function throwError(token, messageFormat) {
						var error, args = Array.prototype.slice.call(arguments, 2), msg = messageFormat.replace(/%(\d)/g, function(whole, index$1) {
							assert(index$1 < args.length, "Message reference must be in range");
							return args[index$1];
						});
						if (typeof token.lineNumber === "number") {
							error = /* @__PURE__ */ new Error("Line " + token.lineNumber + ": " + msg);
							error.index = token.start;
							error.lineNumber = token.lineNumber;
							error.column = token.start - lineStart + 1;
						} else {
							error = /* @__PURE__ */ new Error("Line " + lineNumber + ": " + msg);
							error.index = index;
							error.lineNumber = lineNumber;
							error.column = index - lineStart + 1;
						}
						error.description = msg;
						throw error;
					}
					function throwErrorTolerant() {
						try {
							throwError.apply(null, arguments);
						} catch (e) {
							if (extra.errors) extra.errors.push(e);
							else throw e;
						}
					}
					function throwUnexpected(token) {
						if (token.type === Token.EOF) throwError(token, Messages.UnexpectedEOS);
						if (token.type === Token.NumericLiteral) throwError(token, Messages.UnexpectedNumber);
						if (token.type === Token.StringLiteral) throwError(token, Messages.UnexpectedString);
						if (token.type === Token.Identifier) throwError(token, Messages.UnexpectedIdentifier);
						if (token.type === Token.Keyword) {
							if (isFutureReservedWord(token.value)) throwError(token, Messages.UnexpectedReserved);
							else if (strict && isStrictModeReservedWord(token.value)) {
								throwErrorTolerant(token, Messages.StrictReservedWord);
								return;
							}
							throwError(token, Messages.UnexpectedToken, token.value);
						}
						throwError(token, Messages.UnexpectedToken, token.value);
					}
					function expect(value) {
						var token = lex();
						if (token.type !== Token.Punctuator || token.value !== value) throwUnexpected(token);
					}
					function expectKeyword(keyword) {
						var token = lex();
						if (token.type !== Token.Keyword || token.value !== keyword) throwUnexpected(token);
					}
					function match(value) {
						return lookahead.type === Token.Punctuator && lookahead.value === value;
					}
					function matchKeyword(keyword) {
						return lookahead.type === Token.Keyword && lookahead.value === keyword;
					}
					function matchAssign() {
						var op;
						if (lookahead.type !== Token.Punctuator) return false;
						op = lookahead.value;
						return op === "=" || op === "*=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
					}
					function consumeSemicolon() {
						var line;
						if (source.charCodeAt(index) === 59 || match(";")) {
							lex();
							return;
						}
						line = lineNumber;
						skipComment();
						if (lineNumber !== line) return;
						if (lookahead.type !== Token.EOF && !match("}")) throwUnexpected(lookahead);
					}
					function isLeftHandSide(expr) {
						return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
					}
					function parseArrayInitialiser() {
						var elements = [], startToken = lookahead;
						expect("[");
						while (!match("]")) if (match(",")) {
							lex();
							elements.push(null);
						} else {
							elements.push(parseAssignmentExpression());
							if (!match("]")) expect(",");
						}
						lex();
						return delegate.markEnd(delegate.createArrayExpression(elements), startToken);
					}
					function parsePropertyFunction(param, first) {
						var previousStrict = strict, body, startToken = lookahead;
						body = parseFunctionSourceElements();
						if (first && strict && isRestrictedWord(param[0].name)) throwErrorTolerant(first, Messages.StrictParamName);
						strict = previousStrict;
						return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body), startToken);
					}
					function parseObjectPropertyKey() {
						var token, startToken = lookahead;
						token = lex();
						if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
							if (strict && token.octal) throwErrorTolerant(token, Messages.StrictOctalLiteral);
							return delegate.markEnd(delegate.createLiteral(token), startToken);
						}
						return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
					}
					function parseObjectProperty() {
						var token = lookahead, key, id, value, param, startToken = lookahead;
						if (token.type === Token.Identifier) {
							id = parseObjectPropertyKey();
							if (token.value === "get" && !match(":")) {
								key = parseObjectPropertyKey();
								expect("(");
								expect(")");
								value = parsePropertyFunction([]);
								return delegate.markEnd(delegate.createProperty("get", key, value), startToken);
							}
							if (token.value === "set" && !match(":")) {
								key = parseObjectPropertyKey();
								expect("(");
								token = lookahead;
								if (token.type !== Token.Identifier) {
									expect(")");
									throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
									value = parsePropertyFunction([]);
								} else {
									param = [parseVariableIdentifier()];
									expect(")");
									value = parsePropertyFunction(param, token);
								}
								return delegate.markEnd(delegate.createProperty("set", key, value), startToken);
							}
							expect(":");
							value = parseAssignmentExpression();
							return delegate.markEnd(delegate.createProperty("init", id, value), startToken);
						}
						if (token.type === Token.EOF || token.type === Token.Punctuator) throwUnexpected(token);
						else {
							key = parseObjectPropertyKey();
							expect(":");
							value = parseAssignmentExpression();
							return delegate.markEnd(delegate.createProperty("init", key, value), startToken);
						}
					}
					function parseObjectInitialiser() {
						var properties = [], property, name, key, kind, map = {}, toString = String, startToken = lookahead;
						expect("{");
						while (!match("}")) {
							property = parseObjectProperty();
							if (property.key.type === Syntax.Identifier) name = property.key.name;
							else name = toString(property.key.value);
							kind = property.kind === "init" ? PropertyKind.Data : property.kind === "get" ? PropertyKind.Get : PropertyKind.Set;
							key = "$" + name;
							if (Object.prototype.hasOwnProperty.call(map, key)) {
								if (map[key] === PropertyKind.Data) {
									if (strict && kind === PropertyKind.Data) throwErrorTolerant({}, Messages.StrictDuplicateProperty);
									else if (kind !== PropertyKind.Data) throwErrorTolerant({}, Messages.AccessorDataProperty);
								} else if (kind === PropertyKind.Data) throwErrorTolerant({}, Messages.AccessorDataProperty);
								else if (map[key] & kind) throwErrorTolerant({}, Messages.AccessorGetSet);
								map[key] |= kind;
							} else map[key] = kind;
							properties.push(property);
							if (!match("}")) expect(",");
						}
						expect("}");
						return delegate.markEnd(delegate.createObjectExpression(properties), startToken);
					}
					function parseGroupExpression() {
						var expr;
						expect("(");
						expr = parseExpression();
						expect(")");
						return expr;
					}
					function parsePrimaryExpression() {
						var type, token, expr, startToken;
						if (match("(")) return parseGroupExpression();
						if (match("[")) return parseArrayInitialiser();
						if (match("{")) return parseObjectInitialiser();
						type = lookahead.type;
						startToken = lookahead;
						if (type === Token.Identifier) expr = delegate.createIdentifier(lex().value);
						else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
							if (strict && lookahead.octal) throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
							expr = delegate.createLiteral(lex());
						} else if (type === Token.Keyword) {
							if (matchKeyword("function")) return parseFunctionExpression();
							if (matchKeyword("this")) {
								lex();
								expr = delegate.createThisExpression();
							} else throwUnexpected(lex());
						} else if (type === Token.BooleanLiteral) {
							token = lex();
							token.value = token.value === "true";
							expr = delegate.createLiteral(token);
						} else if (type === Token.NullLiteral) {
							token = lex();
							token.value = null;
							expr = delegate.createLiteral(token);
						} else if (match("/") || match("/=")) {
							if (typeof extra.tokens !== "undefined") expr = delegate.createLiteral(collectRegex());
							else expr = delegate.createLiteral(scanRegExp());
							peek();
						} else throwUnexpected(lex());
						return delegate.markEnd(expr, startToken);
					}
					function parseArguments() {
						var args = [];
						expect("(");
						if (!match(")")) while (index < length) {
							args.push(parseAssignmentExpression());
							if (match(")")) break;
							expect(",");
						}
						expect(")");
						return args;
					}
					function parseNonComputedProperty() {
						var token, startToken = lookahead;
						token = lex();
						if (!isIdentifierName(token)) throwUnexpected(token);
						return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
					}
					function parseNonComputedMember() {
						expect(".");
						return parseNonComputedProperty();
					}
					function parseComputedMember() {
						var expr;
						expect("[");
						expr = parseExpression();
						expect("]");
						return expr;
					}
					function parseNewExpression() {
						var callee, args, startToken = lookahead;
						expectKeyword("new");
						callee = parseLeftHandSideExpression();
						args = match("(") ? parseArguments() : [];
						return delegate.markEnd(delegate.createNewExpression(callee, args), startToken);
					}
					function parseLeftHandSideExpressionAllowCall() {
						var previousAllowIn, expr, args, property, startToken = lookahead;
						previousAllowIn = state.allowIn;
						state.allowIn = true;
						expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
						state.allowIn = previousAllowIn;
						for (;;) {
							if (match(".")) {
								property = parseNonComputedMember();
								expr = delegate.createMemberExpression(".", expr, property);
							} else if (match("(")) {
								args = parseArguments();
								expr = delegate.createCallExpression(expr, args);
							} else if (match("[")) {
								property = parseComputedMember();
								expr = delegate.createMemberExpression("[", expr, property);
							} else break;
							delegate.markEnd(expr, startToken);
						}
						return expr;
					}
					function parseLeftHandSideExpression() {
						var previousAllowIn, expr, property, startToken = lookahead;
						previousAllowIn = state.allowIn;
						expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
						state.allowIn = previousAllowIn;
						while (match(".") || match("[")) {
							if (match("[")) {
								property = parseComputedMember();
								expr = delegate.createMemberExpression("[", expr, property);
							} else {
								property = parseNonComputedMember();
								expr = delegate.createMemberExpression(".", expr, property);
							}
							delegate.markEnd(expr, startToken);
						}
						return expr;
					}
					function parsePostfixExpression() {
						var expr, token, startToken = lookahead;
						expr = parseLeftHandSideExpressionAllowCall();
						if (lookahead.type === Token.Punctuator) {
							if ((match("++") || match("--")) && !peekLineTerminator()) {
								if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) throwErrorTolerant({}, Messages.StrictLHSPostfix);
								if (!isLeftHandSide(expr)) throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
								token = lex();
								expr = delegate.markEnd(delegate.createPostfixExpression(token.value, expr), startToken);
							}
						}
						return expr;
					}
					function parseUnaryExpression() {
						var token, expr, startToken;
						if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) expr = parsePostfixExpression();
						else if (match("++") || match("--")) {
							startToken = lookahead;
							token = lex();
							expr = parseUnaryExpression();
							if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) throwErrorTolerant({}, Messages.StrictLHSPrefix);
							if (!isLeftHandSide(expr)) throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
							expr = delegate.createUnaryExpression(token.value, expr);
							expr = delegate.markEnd(expr, startToken);
						} else if (match("+") || match("-") || match("~") || match("!")) {
							startToken = lookahead;
							token = lex();
							expr = parseUnaryExpression();
							expr = delegate.createUnaryExpression(token.value, expr);
							expr = delegate.markEnd(expr, startToken);
						} else if (matchKeyword("delete") || matchKeyword("void") || matchKeyword("typeof")) {
							startToken = lookahead;
							token = lex();
							expr = parseUnaryExpression();
							expr = delegate.createUnaryExpression(token.value, expr);
							expr = delegate.markEnd(expr, startToken);
							if (strict && expr.operator === "delete" && expr.argument.type === Syntax.Identifier) throwErrorTolerant({}, Messages.StrictDelete);
						} else expr = parsePostfixExpression();
						return expr;
					}
					function binaryPrecedence(token, allowIn) {
						var prec = 0;
						if (token.type !== Token.Punctuator && token.type !== Token.Keyword) return 0;
						switch (token.value) {
							case "||":
								prec = 1;
								break;
							case "&&":
								prec = 2;
								break;
							case "|":
								prec = 3;
								break;
							case "^":
								prec = 4;
								break;
							case "&":
								prec = 5;
								break;
							case "==":
							case "!=":
							case "===":
							case "!==":
								prec = 6;
								break;
							case "<":
							case ">":
							case "<=":
							case ">=":
							case "instanceof":
								prec = 7;
								break;
							case "in":
								prec = allowIn ? 7 : 0;
								break;
							case "<<":
							case ">>":
							case ">>>":
								prec = 8;
								break;
							case "+":
							case "-":
								prec = 9;
								break;
							case "*":
							case "/":
							case "%":
								prec = 11;
								break;
							default: break;
						}
						return prec;
					}
					function parseBinaryExpression() {
						var marker = lookahead, markers, expr, token, prec, stack, right, operator, left = parseUnaryExpression(), i;
						token = lookahead;
						prec = binaryPrecedence(token, state.allowIn);
						if (prec === 0) return left;
						token.prec = prec;
						lex();
						markers = [marker, lookahead];
						right = parseUnaryExpression();
						stack = [
							left,
							token,
							right
						];
						while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
							while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
								right = stack.pop();
								operator = stack.pop().value;
								left = stack.pop();
								expr = delegate.createBinaryExpression(operator, left, right);
								markers.pop();
								marker = markers[markers.length - 1];
								delegate.markEnd(expr, marker);
								stack.push(expr);
							}
							token = lex();
							token.prec = prec;
							stack.push(token);
							markers.push(lookahead);
							expr = parseUnaryExpression();
							stack.push(expr);
						}
						i = stack.length - 1;
						expr = stack[i];
						markers.pop();
						while (i > 1) {
							expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
							i -= 2;
							marker = markers.pop();
							delegate.markEnd(expr, marker);
						}
						return expr;
					}
					function parseConditionalExpression() {
						var expr, previousAllowIn, consequent, alternate, startToken = lookahead;
						expr = parseBinaryExpression();
						if (match("?")) {
							lex();
							previousAllowIn = state.allowIn;
							state.allowIn = true;
							consequent = parseAssignmentExpression();
							state.allowIn = previousAllowIn;
							expect(":");
							alternate = parseAssignmentExpression();
							expr = delegate.createConditionalExpression(expr, consequent, alternate);
							delegate.markEnd(expr, startToken);
						}
						return expr;
					}
					function parseAssignmentExpression() {
						var token = lookahead, left, right, node, startToken = lookahead;
						node = left = parseConditionalExpression();
						if (matchAssign()) {
							if (!isLeftHandSide(left)) throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
							if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) throwErrorTolerant(token, Messages.StrictLHSAssignment);
							token = lex();
							right = parseAssignmentExpression();
							node = delegate.markEnd(delegate.createAssignmentExpression(token.value, left, right), startToken);
						}
						return node;
					}
					function parseExpression() {
						var expr, startToken = lookahead;
						expr = parseAssignmentExpression();
						if (match(",")) {
							expr = delegate.createSequenceExpression([expr]);
							while (index < length) {
								if (!match(",")) break;
								lex();
								expr.expressions.push(parseAssignmentExpression());
							}
							delegate.markEnd(expr, startToken);
						}
						return expr;
					}
					function parseStatementList() {
						var list = [], statement;
						while (index < length) {
							if (match("}")) break;
							statement = parseSourceElement();
							if (typeof statement === "undefined") break;
							list.push(statement);
						}
						return list;
					}
					function parseBlock() {
						var block, startToken = lookahead;
						expect("{");
						block = parseStatementList();
						expect("}");
						return delegate.markEnd(delegate.createBlockStatement(block), startToken);
					}
					function parseVariableIdentifier() {
						var token, startToken = lookahead;
						token = lex();
						if (token.type !== Token.Identifier) throwUnexpected(token);
						return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
					}
					function parseVariableDeclaration(kind) {
						var init = null, id, startToken = lookahead;
						id = parseVariableIdentifier();
						if (strict && isRestrictedWord(id.name)) throwErrorTolerant({}, Messages.StrictVarName);
						if (kind === "const") {
							expect("=");
							init = parseAssignmentExpression();
						} else if (match("=")) {
							lex();
							init = parseAssignmentExpression();
						}
						return delegate.markEnd(delegate.createVariableDeclarator(id, init), startToken);
					}
					function parseVariableDeclarationList(kind) {
						var list = [];
						do {
							list.push(parseVariableDeclaration(kind));
							if (!match(",")) break;
							lex();
						} while (index < length);
						return list;
					}
					function parseVariableStatement() {
						var declarations;
						expectKeyword("var");
						declarations = parseVariableDeclarationList();
						consumeSemicolon();
						return delegate.createVariableDeclaration(declarations, "var");
					}
					function parseConstLetDeclaration(kind) {
						var declarations, startToken = lookahead;
						expectKeyword(kind);
						declarations = parseVariableDeclarationList(kind);
						consumeSemicolon();
						return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind), startToken);
					}
					function parseEmptyStatement() {
						expect(";");
						return delegate.createEmptyStatement();
					}
					function parseExpressionStatement() {
						var expr = parseExpression();
						consumeSemicolon();
						return delegate.createExpressionStatement(expr);
					}
					function parseIfStatement() {
						var test, consequent, alternate;
						expectKeyword("if");
						expect("(");
						test = parseExpression();
						expect(")");
						consequent = parseStatement();
						if (matchKeyword("else")) {
							lex();
							alternate = parseStatement();
						} else alternate = null;
						return delegate.createIfStatement(test, consequent, alternate);
					}
					function parseDoWhileStatement() {
						var body, test, oldInIteration;
						expectKeyword("do");
						oldInIteration = state.inIteration;
						state.inIteration = true;
						body = parseStatement();
						state.inIteration = oldInIteration;
						expectKeyword("while");
						expect("(");
						test = parseExpression();
						expect(")");
						if (match(";")) lex();
						return delegate.createDoWhileStatement(body, test);
					}
					function parseWhileStatement() {
						var test, body, oldInIteration;
						expectKeyword("while");
						expect("(");
						test = parseExpression();
						expect(")");
						oldInIteration = state.inIteration;
						state.inIteration = true;
						body = parseStatement();
						state.inIteration = oldInIteration;
						return delegate.createWhileStatement(test, body);
					}
					function parseForVariableDeclaration() {
						var token, declarations, startToken = lookahead;
						token = lex();
						declarations = parseVariableDeclarationList();
						return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value), startToken);
					}
					function parseForStatement() {
						var init = test = update = null, test, update, left, right, body, oldInIteration;
						expectKeyword("for");
						expect("(");
						if (match(";")) lex();
						else {
							if (matchKeyword("var") || matchKeyword("let")) {
								state.allowIn = false;
								init = parseForVariableDeclaration();
								state.allowIn = true;
								if (init.declarations.length === 1 && matchKeyword("in")) {
									lex();
									left = init;
									right = parseExpression();
									init = null;
								}
							} else {
								state.allowIn = false;
								init = parseExpression();
								state.allowIn = true;
								if (matchKeyword("in")) {
									if (!isLeftHandSide(init)) throwErrorTolerant({}, Messages.InvalidLHSInForIn);
									lex();
									left = init;
									right = parseExpression();
									init = null;
								}
							}
							if (typeof left === "undefined") expect(";");
						}
						if (typeof left === "undefined") {
							if (!match(";")) test = parseExpression();
							expect(";");
							if (!match(")")) update = parseExpression();
						}
						expect(")");
						oldInIteration = state.inIteration;
						state.inIteration = true;
						body = parseStatement();
						state.inIteration = oldInIteration;
						return typeof left === "undefined" ? delegate.createForStatement(init, test, update, body) : delegate.createForInStatement(left, right, body);
					}
					function parseContinueStatement() {
						var label = null, key;
						expectKeyword("continue");
						if (source.charCodeAt(index) === 59) {
							lex();
							if (!state.inIteration) throwError({}, Messages.IllegalContinue);
							return delegate.createContinueStatement(null);
						}
						if (peekLineTerminator()) {
							if (!state.inIteration) throwError({}, Messages.IllegalContinue);
							return delegate.createContinueStatement(null);
						}
						if (lookahead.type === Token.Identifier) {
							label = parseVariableIdentifier();
							key = "$" + label.name;
							if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) throwError({}, Messages.UnknownLabel, label.name);
						}
						consumeSemicolon();
						if (label === null && !state.inIteration) throwError({}, Messages.IllegalContinue);
						return delegate.createContinueStatement(label);
					}
					function parseBreakStatement() {
						var label = null, key;
						expectKeyword("break");
						if (source.charCodeAt(index) === 59) {
							lex();
							if (!(state.inIteration || state.inSwitch)) throwError({}, Messages.IllegalBreak);
							return delegate.createBreakStatement(null);
						}
						if (peekLineTerminator()) {
							if (!(state.inIteration || state.inSwitch)) throwError({}, Messages.IllegalBreak);
							return delegate.createBreakStatement(null);
						}
						if (lookahead.type === Token.Identifier) {
							label = parseVariableIdentifier();
							key = "$" + label.name;
							if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) throwError({}, Messages.UnknownLabel, label.name);
						}
						consumeSemicolon();
						if (label === null && !(state.inIteration || state.inSwitch)) throwError({}, Messages.IllegalBreak);
						return delegate.createBreakStatement(label);
					}
					function parseReturnStatement() {
						var argument = null;
						expectKeyword("return");
						if (!state.inFunctionBody) throwErrorTolerant({}, Messages.IllegalReturn);
						if (source.charCodeAt(index) === 32) {
							if (isIdentifierStart(source.charCodeAt(index + 1))) {
								argument = parseExpression();
								consumeSemicolon();
								return delegate.createReturnStatement(argument);
							}
						}
						if (peekLineTerminator()) return delegate.createReturnStatement(null);
						if (!match(";")) {
							if (!match("}") && lookahead.type !== Token.EOF) argument = parseExpression();
						}
						consumeSemicolon();
						return delegate.createReturnStatement(argument);
					}
					function parseWithStatement() {
						var object, body;
						if (strict) {
							skipComment();
							throwErrorTolerant({}, Messages.StrictModeWith);
						}
						expectKeyword("with");
						expect("(");
						object = parseExpression();
						expect(")");
						body = parseStatement();
						return delegate.createWithStatement(object, body);
					}
					function parseSwitchCase() {
						var test, consequent = [], statement, startToken = lookahead;
						if (matchKeyword("default")) {
							lex();
							test = null;
						} else {
							expectKeyword("case");
							test = parseExpression();
						}
						expect(":");
						while (index < length) {
							if (match("}") || matchKeyword("default") || matchKeyword("case")) break;
							statement = parseStatement();
							consequent.push(statement);
						}
						return delegate.markEnd(delegate.createSwitchCase(test, consequent), startToken);
					}
					function parseSwitchStatement() {
						var discriminant, cases, clause, oldInSwitch, defaultFound;
						expectKeyword("switch");
						expect("(");
						discriminant = parseExpression();
						expect(")");
						expect("{");
						cases = [];
						if (match("}")) {
							lex();
							return delegate.createSwitchStatement(discriminant, cases);
						}
						oldInSwitch = state.inSwitch;
						state.inSwitch = true;
						defaultFound = false;
						while (index < length) {
							if (match("}")) break;
							clause = parseSwitchCase();
							if (clause.test === null) {
								if (defaultFound) throwError({}, Messages.MultipleDefaultsInSwitch);
								defaultFound = true;
							}
							cases.push(clause);
						}
						state.inSwitch = oldInSwitch;
						expect("}");
						return delegate.createSwitchStatement(discriminant, cases);
					}
					function parseThrowStatement() {
						var argument;
						expectKeyword("throw");
						if (peekLineTerminator()) throwError({}, Messages.NewlineAfterThrow);
						argument = parseExpression();
						consumeSemicolon();
						return delegate.createThrowStatement(argument);
					}
					function parseCatchClause() {
						var param, body, startToken = lookahead;
						expectKeyword("catch");
						expect("(");
						if (match(")")) throwUnexpected(lookahead);
						param = parseVariableIdentifier();
						if (strict && isRestrictedWord(param.name)) throwErrorTolerant({}, Messages.StrictCatchVariable);
						expect(")");
						body = parseBlock();
						return delegate.markEnd(delegate.createCatchClause(param, body), startToken);
					}
					function parseTryStatement() {
						var block, handlers = [], finalizer = null;
						expectKeyword("try");
						block = parseBlock();
						if (matchKeyword("catch")) handlers.push(parseCatchClause());
						if (matchKeyword("finally")) {
							lex();
							finalizer = parseBlock();
						}
						if (handlers.length === 0 && !finalizer) throwError({}, Messages.NoCatchOrFinally);
						return delegate.createTryStatement(block, [], handlers, finalizer);
					}
					function parseDebuggerStatement() {
						expectKeyword("debugger");
						consumeSemicolon();
						return delegate.createDebuggerStatement();
					}
					function parseStatement() {
						var type = lookahead.type, expr, labeledBody, key, startToken;
						if (type === Token.EOF) throwUnexpected(lookahead);
						if (type === Token.Punctuator && lookahead.value === "{") return parseBlock();
						startToken = lookahead;
						if (type === Token.Punctuator) switch (lookahead.value) {
							case ";": return delegate.markEnd(parseEmptyStatement(), startToken);
							case "(": return delegate.markEnd(parseExpressionStatement(), startToken);
							default: break;
						}
						if (type === Token.Keyword) switch (lookahead.value) {
							case "break": return delegate.markEnd(parseBreakStatement(), startToken);
							case "continue": return delegate.markEnd(parseContinueStatement(), startToken);
							case "debugger": return delegate.markEnd(parseDebuggerStatement(), startToken);
							case "do": return delegate.markEnd(parseDoWhileStatement(), startToken);
							case "for": return delegate.markEnd(parseForStatement(), startToken);
							case "function": return delegate.markEnd(parseFunctionDeclaration(), startToken);
							case "if": return delegate.markEnd(parseIfStatement(), startToken);
							case "return": return delegate.markEnd(parseReturnStatement(), startToken);
							case "switch": return delegate.markEnd(parseSwitchStatement(), startToken);
							case "throw": return delegate.markEnd(parseThrowStatement(), startToken);
							case "try": return delegate.markEnd(parseTryStatement(), startToken);
							case "var": return delegate.markEnd(parseVariableStatement(), startToken);
							case "while": return delegate.markEnd(parseWhileStatement(), startToken);
							case "with": return delegate.markEnd(parseWithStatement(), startToken);
							default: break;
						}
						expr = parseExpression();
						if (expr.type === Syntax.Identifier && match(":")) {
							lex();
							key = "$" + expr.name;
							if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) throwError({}, Messages.Redeclaration, "Label", expr.name);
							state.labelSet[key] = true;
							labeledBody = parseStatement();
							delete state.labelSet[key];
							return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody), startToken);
						}
						consumeSemicolon();
						return delegate.markEnd(delegate.createExpressionStatement(expr), startToken);
					}
					function parseFunctionSourceElements() {
						var sourceElement, sourceElements = [], token, directive, firstRestricted, oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, startToken = lookahead;
						expect("{");
						while (index < length) {
							if (lookahead.type !== Token.StringLiteral) break;
							token = lookahead;
							sourceElement = parseSourceElement();
							sourceElements.push(sourceElement);
							if (sourceElement.expression.type !== Syntax.Literal) break;
							directive = source.slice(token.start + 1, token.end - 1);
							if (directive === "use strict") {
								strict = true;
								if (firstRestricted) throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
							} else if (!firstRestricted && token.octal) firstRestricted = token;
						}
						oldLabelSet = state.labelSet;
						oldInIteration = state.inIteration;
						oldInSwitch = state.inSwitch;
						oldInFunctionBody = state.inFunctionBody;
						state.labelSet = {};
						state.inIteration = false;
						state.inSwitch = false;
						state.inFunctionBody = true;
						while (index < length) {
							if (match("}")) break;
							sourceElement = parseSourceElement();
							if (typeof sourceElement === "undefined") break;
							sourceElements.push(sourceElement);
						}
						expect("}");
						state.labelSet = oldLabelSet;
						state.inIteration = oldInIteration;
						state.inSwitch = oldInSwitch;
						state.inFunctionBody = oldInFunctionBody;
						return delegate.markEnd(delegate.createBlockStatement(sourceElements), startToken);
					}
					function parseParams(firstRestricted) {
						var param, params = [], token, stricted, paramSet, key, message;
						expect("(");
						if (!match(")")) {
							paramSet = {};
							while (index < length) {
								token = lookahead;
								param = parseVariableIdentifier();
								key = "$" + token.value;
								if (strict) {
									if (isRestrictedWord(token.value)) {
										stricted = token;
										message = Messages.StrictParamName;
									}
									if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
										stricted = token;
										message = Messages.StrictParamDupe;
									}
								} else if (!firstRestricted) {
									if (isRestrictedWord(token.value)) {
										firstRestricted = token;
										message = Messages.StrictParamName;
									} else if (isStrictModeReservedWord(token.value)) {
										firstRestricted = token;
										message = Messages.StrictReservedWord;
									} else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
										firstRestricted = token;
										message = Messages.StrictParamDupe;
									}
								}
								params.push(param);
								paramSet[key] = true;
								if (match(")")) break;
								expect(",");
							}
						}
						expect(")");
						return {
							params,
							stricted,
							firstRestricted,
							message
						};
					}
					function parseFunctionDeclaration() {
						var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, startToken = lookahead;
						expectKeyword("function");
						token = lookahead;
						id = parseVariableIdentifier();
						if (strict) {
							if (isRestrictedWord(token.value)) throwErrorTolerant(token, Messages.StrictFunctionName);
						} else if (isRestrictedWord(token.value)) {
							firstRestricted = token;
							message = Messages.StrictFunctionName;
						} else if (isStrictModeReservedWord(token.value)) {
							firstRestricted = token;
							message = Messages.StrictReservedWord;
						}
						tmp = parseParams(firstRestricted);
						params = tmp.params;
						stricted = tmp.stricted;
						firstRestricted = tmp.firstRestricted;
						if (tmp.message) message = tmp.message;
						previousStrict = strict;
						body = parseFunctionSourceElements();
						if (strict && firstRestricted) throwError(firstRestricted, message);
						if (strict && stricted) throwErrorTolerant(stricted, message);
						strict = previousStrict;
						return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body), startToken);
					}
					function parseFunctionExpression() {
						var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict, startToken = lookahead;
						expectKeyword("function");
						if (!match("(")) {
							token = lookahead;
							id = parseVariableIdentifier();
							if (strict) {
								if (isRestrictedWord(token.value)) throwErrorTolerant(token, Messages.StrictFunctionName);
							} else if (isRestrictedWord(token.value)) {
								firstRestricted = token;
								message = Messages.StrictFunctionName;
							} else if (isStrictModeReservedWord(token.value)) {
								firstRestricted = token;
								message = Messages.StrictReservedWord;
							}
						}
						tmp = parseParams(firstRestricted);
						params = tmp.params;
						stricted = tmp.stricted;
						firstRestricted = tmp.firstRestricted;
						if (tmp.message) message = tmp.message;
						previousStrict = strict;
						body = parseFunctionSourceElements();
						if (strict && firstRestricted) throwError(firstRestricted, message);
						if (strict && stricted) throwErrorTolerant(stricted, message);
						strict = previousStrict;
						return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body), startToken);
					}
					function parseSourceElement() {
						if (lookahead.type === Token.Keyword) switch (lookahead.value) {
							case "const":
							case "let": return parseConstLetDeclaration(lookahead.value);
							case "function": return parseFunctionDeclaration();
							default: return parseStatement();
						}
						if (lookahead.type !== Token.EOF) return parseStatement();
					}
					function parseSourceElements() {
						var sourceElement, sourceElements = [], token, directive, firstRestricted;
						while (index < length) {
							token = lookahead;
							if (token.type !== Token.StringLiteral) break;
							sourceElement = parseSourceElement();
							sourceElements.push(sourceElement);
							if (sourceElement.expression.type !== Syntax.Literal) break;
							directive = source.slice(token.start + 1, token.end - 1);
							if (directive === "use strict") {
								strict = true;
								if (firstRestricted) throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
							} else if (!firstRestricted && token.octal) firstRestricted = token;
						}
						while (index < length) {
							sourceElement = parseSourceElement();
							/* istanbul ignore if */
							if (typeof sourceElement === "undefined") break;
							sourceElements.push(sourceElement);
						}
						return sourceElements;
					}
					function parseProgram() {
						var body, startToken;
						skipComment();
						peek();
						startToken = lookahead;
						strict = false;
						body = parseSourceElements();
						return delegate.markEnd(delegate.createProgram(body), startToken);
					}
					function filterTokenLocation() {
						var i, entry, token, tokens = [];
						for (i = 0; i < extra.tokens.length; ++i) {
							entry = extra.tokens[i];
							token = {
								type: entry.type,
								value: entry.value
							};
							if (extra.range) token.range = entry.range;
							if (extra.loc) token.loc = entry.loc;
							tokens.push(token);
						}
						extra.tokens = tokens;
					}
					function tokenize(code, options) {
						var toString = String, tokens;
						if (typeof code !== "string" && !(code instanceof String)) code = toString(code);
						delegate = SyntaxTreeDelegate;
						source = code;
						index = 0;
						lineNumber = source.length > 0 ? 1 : 0;
						lineStart = 0;
						length = source.length;
						lookahead = null;
						state = {
							allowIn: true,
							labelSet: {},
							inFunctionBody: false,
							inIteration: false,
							inSwitch: false,
							lastCommentStart: -1
						};
						extra = {};
						options = options || {};
						options.tokens = true;
						extra.tokens = [];
						extra.tokenize = true;
						extra.openParenToken = -1;
						extra.openCurlyToken = -1;
						extra.range = typeof options.range === "boolean" && options.range;
						extra.loc = typeof options.loc === "boolean" && options.loc;
						if (typeof options.comment === "boolean" && options.comment) extra.comments = [];
						if (typeof options.tolerant === "boolean" && options.tolerant) extra.errors = [];
						try {
							peek();
							if (lookahead.type === Token.EOF) return extra.tokens;
							lex();
							while (lookahead.type !== Token.EOF) try {
								lex();
							} catch (lexError) {
								if (extra.errors) {
									extra.errors.push(lexError);
									break;
								} else throw lexError;
							}
							filterTokenLocation();
							tokens = extra.tokens;
							if (typeof extra.comments !== "undefined") tokens.comments = extra.comments;
							if (typeof extra.errors !== "undefined") tokens.errors = extra.errors;
						} catch (e) {
							throw e;
						} finally {
							extra = {};
						}
						return tokens;
					}
					function parse(code, options) {
						var program, toString = String;
						if (typeof code !== "string" && !(code instanceof String)) code = toString(code);
						delegate = SyntaxTreeDelegate;
						source = code;
						index = 0;
						lineNumber = source.length > 0 ? 1 : 0;
						lineStart = 0;
						length = source.length;
						lookahead = null;
						state = {
							allowIn: true,
							labelSet: {},
							inFunctionBody: false,
							inIteration: false,
							inSwitch: false,
							lastCommentStart: -1
						};
						extra = {};
						if (typeof options !== "undefined") {
							extra.range = typeof options.range === "boolean" && options.range;
							extra.loc = typeof options.loc === "boolean" && options.loc;
							extra.attachComment = typeof options.attachComment === "boolean" && options.attachComment;
							if (extra.loc && options.source !== null && options.source !== void 0) extra.source = toString(options.source);
							if (typeof options.tokens === "boolean" && options.tokens) extra.tokens = [];
							if (typeof options.comment === "boolean" && options.comment) extra.comments = [];
							if (typeof options.tolerant === "boolean" && options.tolerant) extra.errors = [];
							if (extra.attachComment) {
								extra.range = true;
								extra.comments = [];
								extra.bottomRightStack = [];
								extra.trailingComments = [];
								extra.leadingComments = [];
							}
						}
						try {
							program = parseProgram();
							if (typeof extra.comments !== "undefined") program.comments = extra.comments;
							if (typeof extra.tokens !== "undefined") {
								filterTokenLocation();
								program.tokens = extra.tokens;
							}
							if (typeof extra.errors !== "undefined") program.errors = extra.errors;
						} catch (e) {
							throw e;
						} finally {
							extra = {};
						}
						return program;
					}
					exports$2.version = "1.2.2";
					exports$2.tokenize = tokenize;
					exports$2.parse = parse;
					/* istanbul ignore next */
					exports$2.Syntax = function() {
						var name, types = {};
						if (typeof Object.create === "function") types = Object.create(null);
						for (name in Syntax) if (Syntax.hasOwnProperty(name)) types[name] = Syntax[name];
						if (typeof Object.freeze === "function") Object.freeze(types);
						return types;
					}();
				});
			}, {}],
			1: [function(require$1, module$1, exports$1) {
				(function(process) {
					var parser = (function() {
						var parser$1 = {
							trace: function trace() {},
							yy: {},
							symbols_: {
								"error": 2,
								"JSON_PATH": 3,
								"DOLLAR": 4,
								"PATH_COMPONENTS": 5,
								"LEADING_CHILD_MEMBER_EXPRESSION": 6,
								"PATH_COMPONENT": 7,
								"MEMBER_COMPONENT": 8,
								"SUBSCRIPT_COMPONENT": 9,
								"CHILD_MEMBER_COMPONENT": 10,
								"DESCENDANT_MEMBER_COMPONENT": 11,
								"DOT": 12,
								"MEMBER_EXPRESSION": 13,
								"DOT_DOT": 14,
								"STAR": 15,
								"IDENTIFIER": 16,
								"SCRIPT_EXPRESSION": 17,
								"INTEGER": 18,
								"END": 19,
								"CHILD_SUBSCRIPT_COMPONENT": 20,
								"DESCENDANT_SUBSCRIPT_COMPONENT": 21,
								"[": 22,
								"SUBSCRIPT": 23,
								"]": 24,
								"SUBSCRIPT_EXPRESSION": 25,
								"SUBSCRIPT_EXPRESSION_LIST": 26,
								"SUBSCRIPT_EXPRESSION_LISTABLE": 27,
								",": 28,
								"STRING_LITERAL": 29,
								"ARRAY_SLICE": 30,
								"FILTER_EXPRESSION": 31,
								"QQ_STRING": 32,
								"Q_STRING": 33,
								"$accept": 0,
								"$end": 1
							},
							terminals_: {
								2: "error",
								4: "DOLLAR",
								12: "DOT",
								14: "DOT_DOT",
								15: "STAR",
								16: "IDENTIFIER",
								17: "SCRIPT_EXPRESSION",
								18: "INTEGER",
								19: "END",
								22: "[",
								24: "]",
								28: ",",
								30: "ARRAY_SLICE",
								31: "FILTER_EXPRESSION",
								32: "QQ_STRING",
								33: "Q_STRING"
							},
							productions_: [
								0,
								[3, 1],
								[3, 2],
								[3, 1],
								[3, 2],
								[5, 1],
								[5, 2],
								[7, 1],
								[7, 1],
								[8, 1],
								[8, 1],
								[10, 2],
								[6, 1],
								[11, 2],
								[13, 1],
								[13, 1],
								[13, 1],
								[13, 1],
								[13, 1],
								[9, 1],
								[9, 1],
								[20, 3],
								[21, 4],
								[23, 1],
								[23, 1],
								[26, 1],
								[26, 3],
								[27, 1],
								[27, 1],
								[27, 1],
								[25, 1],
								[25, 1],
								[25, 1],
								[29, 1],
								[29, 1]
							],
							performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
								if (!yy.ast) {
									yy.ast = _ast;
									_ast.initialize();
								}
								var $0 = $$.length - 1;
								switch (yystate) {
									case 1:
										yy.ast.set({ expression: {
											type: "root",
											value: $$[$0]
										} });
										yy.ast.unshift();
										return yy.ast.yield();
									case 2:
										yy.ast.set({ expression: {
											type: "root",
											value: $$[$0 - 1]
										} });
										yy.ast.unshift();
										return yy.ast.yield();
									case 3:
										yy.ast.unshift();
										return yy.ast.yield();
									case 4:
										yy.ast.set({
											operation: "member",
											scope: "child",
											expression: {
												type: "identifier",
												value: $$[$0 - 1]
											}
										});
										yy.ast.unshift();
										return yy.ast.yield();
									case 5: break;
									case 6: break;
									case 7:
										yy.ast.set({ operation: "member" });
										yy.ast.push();
										break;
									case 8:
										yy.ast.set({ operation: "subscript" });
										yy.ast.push();
										break;
									case 9:
										yy.ast.set({ scope: "child" });
										break;
									case 10:
										yy.ast.set({ scope: "descendant" });
										break;
									case 11: break;
									case 12:
										yy.ast.set({
											scope: "child",
											operation: "member"
										});
										break;
									case 13: break;
									case 14:
										yy.ast.set({ expression: {
											type: "wildcard",
											value: $$[$0]
										} });
										break;
									case 15:
										yy.ast.set({ expression: {
											type: "identifier",
											value: $$[$0]
										} });
										break;
									case 16:
										yy.ast.set({ expression: {
											type: "script_expression",
											value: $$[$0]
										} });
										break;
									case 17:
										yy.ast.set({ expression: {
											type: "numeric_literal",
											value: parseInt($$[$0])
										} });
										break;
									case 18: break;
									case 19:
										yy.ast.set({ scope: "child" });
										break;
									case 20:
										yy.ast.set({ scope: "descendant" });
										break;
									case 21: break;
									case 22: break;
									case 23: break;
									case 24:
										$$[$0].length > 1 ? yy.ast.set({ expression: {
											type: "union",
											value: $$[$0]
										} }) : this.$ = $$[$0];
										break;
									case 25:
										this.$ = [$$[$0]];
										break;
									case 26:
										this.$ = $$[$0 - 2].concat($$[$0]);
										break;
									case 27:
										this.$ = { expression: {
											type: "numeric_literal",
											value: parseInt($$[$0])
										} };
										yy.ast.set(this.$);
										break;
									case 28:
										this.$ = { expression: {
											type: "string_literal",
											value: $$[$0]
										} };
										yy.ast.set(this.$);
										break;
									case 29:
										this.$ = { expression: {
											type: "slice",
											value: $$[$0]
										} };
										yy.ast.set(this.$);
										break;
									case 30:
										this.$ = { expression: {
											type: "wildcard",
											value: $$[$0]
										} };
										yy.ast.set(this.$);
										break;
									case 31:
										this.$ = { expression: {
											type: "script_expression",
											value: $$[$0]
										} };
										yy.ast.set(this.$);
										break;
									case 32:
										this.$ = { expression: {
											type: "filter_expression",
											value: $$[$0]
										} };
										yy.ast.set(this.$);
										break;
									case 33:
										this.$ = $$[$0];
										break;
									case 34:
										this.$ = $$[$0];
										break;
								}
							},
							table: [
								{
									3: 1,
									4: [1, 2],
									6: 3,
									13: 4,
									15: [1, 5],
									16: [1, 6],
									17: [1, 7],
									18: [1, 8],
									19: [1, 9]
								},
								{ 1: [3] },
								{
									1: [2, 1],
									5: 10,
									7: 11,
									8: 12,
									9: 13,
									10: 14,
									11: 15,
									12: [1, 18],
									14: [1, 19],
									20: 16,
									21: 17,
									22: [1, 20]
								},
								{
									1: [2, 3],
									5: 21,
									7: 11,
									8: 12,
									9: 13,
									10: 14,
									11: 15,
									12: [1, 18],
									14: [1, 19],
									20: 16,
									21: 17,
									22: [1, 20]
								},
								{
									1: [2, 12],
									12: [2, 12],
									14: [2, 12],
									22: [2, 12]
								},
								{
									1: [2, 14],
									12: [2, 14],
									14: [2, 14],
									22: [2, 14]
								},
								{
									1: [2, 15],
									12: [2, 15],
									14: [2, 15],
									22: [2, 15]
								},
								{
									1: [2, 16],
									12: [2, 16],
									14: [2, 16],
									22: [2, 16]
								},
								{
									1: [2, 17],
									12: [2, 17],
									14: [2, 17],
									22: [2, 17]
								},
								{
									1: [2, 18],
									12: [2, 18],
									14: [2, 18],
									22: [2, 18]
								},
								{
									1: [2, 2],
									7: 22,
									8: 12,
									9: 13,
									10: 14,
									11: 15,
									12: [1, 18],
									14: [1, 19],
									20: 16,
									21: 17,
									22: [1, 20]
								},
								{
									1: [2, 5],
									12: [2, 5],
									14: [2, 5],
									22: [2, 5]
								},
								{
									1: [2, 7],
									12: [2, 7],
									14: [2, 7],
									22: [2, 7]
								},
								{
									1: [2, 8],
									12: [2, 8],
									14: [2, 8],
									22: [2, 8]
								},
								{
									1: [2, 9],
									12: [2, 9],
									14: [2, 9],
									22: [2, 9]
								},
								{
									1: [2, 10],
									12: [2, 10],
									14: [2, 10],
									22: [2, 10]
								},
								{
									1: [2, 19],
									12: [2, 19],
									14: [2, 19],
									22: [2, 19]
								},
								{
									1: [2, 20],
									12: [2, 20],
									14: [2, 20],
									22: [2, 20]
								},
								{
									13: 23,
									15: [1, 5],
									16: [1, 6],
									17: [1, 7],
									18: [1, 8],
									19: [1, 9]
								},
								{
									13: 24,
									15: [1, 5],
									16: [1, 6],
									17: [1, 7],
									18: [1, 8],
									19: [1, 9],
									22: [1, 25]
								},
								{
									15: [1, 29],
									17: [1, 30],
									18: [1, 33],
									23: 26,
									25: 27,
									26: 28,
									27: 32,
									29: 34,
									30: [1, 35],
									31: [1, 31],
									32: [1, 36],
									33: [1, 37]
								},
								{
									1: [2, 4],
									7: 22,
									8: 12,
									9: 13,
									10: 14,
									11: 15,
									12: [1, 18],
									14: [1, 19],
									20: 16,
									21: 17,
									22: [1, 20]
								},
								{
									1: [2, 6],
									12: [2, 6],
									14: [2, 6],
									22: [2, 6]
								},
								{
									1: [2, 11],
									12: [2, 11],
									14: [2, 11],
									22: [2, 11]
								},
								{
									1: [2, 13],
									12: [2, 13],
									14: [2, 13],
									22: [2, 13]
								},
								{
									15: [1, 29],
									17: [1, 30],
									18: [1, 33],
									23: 38,
									25: 27,
									26: 28,
									27: 32,
									29: 34,
									30: [1, 35],
									31: [1, 31],
									32: [1, 36],
									33: [1, 37]
								},
								{ 24: [1, 39] },
								{ 24: [2, 23] },
								{
									24: [2, 24],
									28: [1, 40]
								},
								{ 24: [2, 30] },
								{ 24: [2, 31] },
								{ 24: [2, 32] },
								{
									24: [2, 25],
									28: [2, 25]
								},
								{
									24: [2, 27],
									28: [2, 27]
								},
								{
									24: [2, 28],
									28: [2, 28]
								},
								{
									24: [2, 29],
									28: [2, 29]
								},
								{
									24: [2, 33],
									28: [2, 33]
								},
								{
									24: [2, 34],
									28: [2, 34]
								},
								{ 24: [1, 41] },
								{
									1: [2, 21],
									12: [2, 21],
									14: [2, 21],
									22: [2, 21]
								},
								{
									18: [1, 33],
									27: 42,
									29: 34,
									30: [1, 35],
									32: [1, 36],
									33: [1, 37]
								},
								{
									1: [2, 22],
									12: [2, 22],
									14: [2, 22],
									22: [2, 22]
								},
								{
									24: [2, 26],
									28: [2, 26]
								}
							],
							defaultActions: {
								27: [2, 23],
								29: [2, 30],
								30: [2, 31],
								31: [2, 32]
							},
							parseError: function parseError(str, hash) {
								if (hash.recoverable) this.trace(str);
								else throw new Error(str);
							},
							parse: function parse(input) {
								var self$1 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
								var args = lstack.slice.call(arguments, 1);
								this.lexer.setInput(input);
								this.lexer.yy = this.yy;
								this.yy.lexer = this.lexer;
								this.yy.parser = this;
								if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
								var yyloc = this.lexer.yylloc;
								lstack.push(yyloc);
								var ranges = this.lexer.options && this.lexer.options.ranges;
								if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
								else this.parseError = Object.getPrototypeOf(this).parseError;
								function lex() {
									var token = self$1.lexer.lex() || EOF;
									if (typeof token !== "number") token = self$1.symbols_[token] || token;
									return token;
								}
								var symbol, preErrorSymbol, state, action, r, yyval = {}, p, len, newState, expected;
								while (true) {
									state = stack[stack.length - 1];
									if (this.defaultActions[state]) action = this.defaultActions[state];
									else {
										if (symbol === null || typeof symbol == "undefined") symbol = lex();
										action = table[state] && table[state][symbol];
									}
									if (typeof action === "undefined" || !action.length || !action[0]) {
										var errStr = "";
										expected = [];
										for (p in table[state]) if (this.terminals_[p] && p > TERROR) expected.push("'" + this.terminals_[p] + "'");
										if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
										else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
										this.parseError(errStr, {
											text: this.lexer.match,
											token: this.terminals_[symbol] || symbol,
											line: this.lexer.yylineno,
											loc: yyloc,
											expected
										});
									}
									if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
									switch (action[0]) {
										case 1:
											stack.push(symbol);
											vstack.push(this.lexer.yytext);
											lstack.push(this.lexer.yylloc);
											stack.push(action[1]);
											symbol = null;
											if (!preErrorSymbol) {
												yyleng = this.lexer.yyleng;
												yytext = this.lexer.yytext;
												yylineno = this.lexer.yylineno;
												yyloc = this.lexer.yylloc;
												if (recovering > 0) recovering--;
											} else {
												symbol = preErrorSymbol;
												preErrorSymbol = null;
											}
											break;
										case 2:
											len = this.productions_[action[1]][1];
											yyval.$ = vstack[vstack.length - len];
											yyval._$ = {
												first_line: lstack[lstack.length - (len || 1)].first_line,
												last_line: lstack[lstack.length - 1].last_line,
												first_column: lstack[lstack.length - (len || 1)].first_column,
												last_column: lstack[lstack.length - 1].last_column
											};
											if (ranges) yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
											r = this.performAction.apply(yyval, [
												yytext,
												yyleng,
												yylineno,
												this.yy,
												action[1],
												vstack,
												lstack
											].concat(args));
											if (typeof r !== "undefined") return r;
											if (len) {
												stack = stack.slice(0, -1 * len * 2);
												vstack = vstack.slice(0, -1 * len);
												lstack = lstack.slice(0, -1 * len);
											}
											stack.push(this.productions_[action[1]][0]);
											vstack.push(yyval.$);
											lstack.push(yyval._$);
											newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
											stack.push(newState);
											break;
										case 3: return true;
									}
								}
								return true;
							}
						};
						var _ast = {
							initialize: function() {
								this._nodes = [];
								this._node = {};
								this._stash = [];
							},
							set: function(props) {
								for (var k in props) this._node[k] = props[k];
								return this._node;
							},
							node: function(obj) {
								if (arguments.length) this._node = obj;
								return this._node;
							},
							push: function() {
								this._nodes.push(this._node);
								this._node = {};
							},
							unshift: function() {
								this._nodes.unshift(this._node);
								this._node = {};
							},
							yield: function() {
								var _nodes = this._nodes;
								this.initialize();
								return _nodes;
							}
						};
						parser$1.lexer = (function() {
							return {
								EOF: 1,
								parseError: function parseError(str, hash) {
									if (this.yy.parser) this.yy.parser.parseError(str, hash);
									else throw new Error(str);
								},
								setInput: function(input) {
									this._input = input;
									this._more = this._backtrack = this.done = false;
									this.yylineno = this.yyleng = 0;
									this.yytext = this.matched = this.match = "";
									this.conditionStack = ["INITIAL"];
									this.yylloc = {
										first_line: 1,
										first_column: 0,
										last_line: 1,
										last_column: 0
									};
									if (this.options.ranges) this.yylloc.range = [0, 0];
									this.offset = 0;
									return this;
								},
								input: function() {
									var ch = this._input[0];
									this.yytext += ch;
									this.yyleng++;
									this.offset++;
									this.match += ch;
									this.matched += ch;
									if (ch.match(/(?:\r\n?|\n).*/g)) {
										this.yylineno++;
										this.yylloc.last_line++;
									} else this.yylloc.last_column++;
									if (this.options.ranges) this.yylloc.range[1]++;
									this._input = this._input.slice(1);
									return ch;
								},
								unput: function(ch) {
									var len = ch.length;
									var lines = ch.split(/(?:\r\n?|\n)/g);
									this._input = ch + this._input;
									this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
									this.offset -= len;
									var oldLines = this.match.split(/(?:\r\n?|\n)/g);
									this.match = this.match.substr(0, this.match.length - 1);
									this.matched = this.matched.substr(0, this.matched.length - 1);
									if (lines.length - 1) this.yylineno -= lines.length - 1;
									var r = this.yylloc.range;
									this.yylloc = {
										first_line: this.yylloc.first_line,
										last_line: this.yylineno + 1,
										first_column: this.yylloc.first_column,
										last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
									};
									if (this.options.ranges) this.yylloc.range = [r[0], r[0] + this.yyleng - len];
									this.yyleng = this.yytext.length;
									return this;
								},
								more: function() {
									this._more = true;
									return this;
								},
								reject: function() {
									if (this.options.backtrack_lexer) this._backtrack = true;
									else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
										text: "",
										token: null,
										line: this.yylineno
									});
									return this;
								},
								less: function(n) {
									this.unput(this.match.slice(n));
								},
								pastInput: function() {
									var past = this.matched.substr(0, this.matched.length - this.match.length);
									return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
								},
								upcomingInput: function() {
									var next = this.match;
									if (next.length < 20) next += this._input.substr(0, 20 - next.length);
									return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
								},
								showPosition: function() {
									var pre = this.pastInput();
									var c = new Array(pre.length + 1).join("-");
									return pre + this.upcomingInput() + "\n" + c + "^";
								},
								test_match: function(match, indexed_rule) {
									var token, lines, backup;
									if (this.options.backtrack_lexer) {
										backup = {
											yylineno: this.yylineno,
											yylloc: {
												first_line: this.yylloc.first_line,
												last_line: this.last_line,
												first_column: this.yylloc.first_column,
												last_column: this.yylloc.last_column
											},
											yytext: this.yytext,
											match: this.match,
											matches: this.matches,
											matched: this.matched,
											yyleng: this.yyleng,
											offset: this.offset,
											_more: this._more,
											_input: this._input,
											yy: this.yy,
											conditionStack: this.conditionStack.slice(0),
											done: this.done
										};
										if (this.options.ranges) backup.yylloc.range = this.yylloc.range.slice(0);
									}
									lines = match[0].match(/(?:\r\n?|\n).*/g);
									if (lines) this.yylineno += lines.length;
									this.yylloc = {
										first_line: this.yylloc.last_line,
										last_line: this.yylineno + 1,
										first_column: this.yylloc.last_column,
										last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
									};
									this.yytext += match[0];
									this.match += match[0];
									this.matches = match;
									this.yyleng = this.yytext.length;
									if (this.options.ranges) this.yylloc.range = [this.offset, this.offset += this.yyleng];
									this._more = false;
									this._backtrack = false;
									this._input = this._input.slice(match[0].length);
									this.matched += match[0];
									token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
									if (this.done && this._input) this.done = false;
									if (token) return token;
									else if (this._backtrack) {
										for (var k in backup) this[k] = backup[k];
										return false;
									}
									return false;
								},
								next: function() {
									if (this.done) return this.EOF;
									if (!this._input) this.done = true;
									var token, match, tempMatch, index;
									if (!this._more) {
										this.yytext = "";
										this.match = "";
									}
									var rules = this._currentRules();
									for (var i = 0; i < rules.length; i++) {
										tempMatch = this._input.match(this.rules[rules[i]]);
										if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
											match = tempMatch;
											index = i;
											if (this.options.backtrack_lexer) {
												token = this.test_match(tempMatch, rules[i]);
												if (token !== false) return token;
												else if (this._backtrack) {
													match = false;
													continue;
												} else return false;
											} else if (!this.options.flex) break;
										}
									}
									if (match) {
										token = this.test_match(match, rules[index]);
										if (token !== false) return token;
										return false;
									}
									if (this._input === "") return this.EOF;
									else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
										text: "",
										token: null,
										line: this.yylineno
									});
								},
								lex: function lex() {
									var r = this.next();
									if (r) return r;
									else return this.lex();
								},
								begin: function begin(condition) {
									this.conditionStack.push(condition);
								},
								popState: function popState() {
									if (this.conditionStack.length - 1 > 0) return this.conditionStack.pop();
									else return this.conditionStack[0];
								},
								_currentRules: function _currentRules() {
									if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
									else return this.conditions["INITIAL"].rules;
								},
								topState: function topState(n) {
									n = this.conditionStack.length - 1 - Math.abs(n || 0);
									if (n >= 0) return this.conditionStack[n];
									else return "INITIAL";
								},
								pushState: function pushState(condition) {
									this.begin(condition);
								},
								stateStackSize: function stateStackSize() {
									return this.conditionStack.length;
								},
								options: {},
								performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
									switch ($avoiding_name_collisions) {
										case 0: return 4;
										case 1: return 14;
										case 2: return 12;
										case 3: return 15;
										case 4: return 16;
										case 5: return 22;
										case 6: return 24;
										case 7: return 28;
										case 8: return 30;
										case 9: return 18;
										case 10:
											yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
											return 32;
										case 11:
											yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
											return 33;
										case 12: return 17;
										case 13: return 31;
									}
								},
								rules: [
									/^(?:\$)/,
									/^(?:\.\.)/,
									/^(?:\.)/,
									/^(?:\*)/,
									/^(?:[a-zA-Z_]+[a-zA-Z0-9_]*)/,
									/^(?:\[)/,
									/^(?:\])/,
									/^(?:,)/,
									/^(?:((-?(?:0|[1-9][0-9]*)))?\:((-?(?:0|[1-9][0-9]*)))?(\:((-?(?:0|[1-9][0-9]*)))?)?)/,
									/^(?:(-?(?:0|[1-9][0-9]*)))/,
									/^(?:"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*")/,
									/^(?:'(?:\\['bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*')/,
									/^(?:\(.+?\)(?=\]))/,
									/^(?:\?\(.+?\)(?=\]))/
								],
								conditions: { "INITIAL": {
									"rules": [
										0,
										1,
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
										13
									],
									"inclusive": true
								} }
							};
						})();
						function Parser() {
							this.yy = {};
						}
						Parser.prototype = parser$1;
						parser$1.Parser = Parser;
						return new Parser();
					})();
					if (typeof require$1 !== "undefined" && typeof exports$1 !== "undefined") {
						exports$1.parser = parser;
						exports$1.Parser = parser.Parser;
						exports$1.parse = function() {
							return parser.parse.apply(parser, arguments);
						};
						exports$1.main = function commonjsMain(args) {
							if (!args[1]) {
								console.log("Usage: " + args[0] + " FILE");
								process.exit(1);
							}
							var source = require$1("fs").readFileSync(require$1("path").normalize(args[1]), "utf8");
							return exports$1.parser.parse(source);
						};
						if (typeof module$1 !== "undefined" && require$1.main === module$1) exports$1.main(process.argv.slice(1));
					}
				}).call(this, require$1("_process"));
			}, {
				"_process": 14,
				"fs": 12,
				"path": 13
			}],
			2: [function(require$1, module$1, exports$1) {
				module$1.exports = {
					identifier: "[a-zA-Z_]+[a-zA-Z0-9_]*",
					integer: "-?(?:0|[1-9][0-9]*)",
					qq_string: "\"(?:\\\\[\"bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^\"\\\\])*\"",
					q_string: "'(?:\\\\['bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^'\\\\])*'"
				};
			}, {}],
			3: [function(require$1, module$1, exports$1) {
				var dict = require$1("./dict");
				var fs = require$1("fs");
				var grammar = {
					lex: {
						macros: {
							esc: "\\\\",
							int: dict.integer
						},
						rules: [
							["\\$", "return 'DOLLAR'"],
							["\\.\\.", "return 'DOT_DOT'"],
							["\\.", "return 'DOT'"],
							["\\*", "return 'STAR'"],
							[dict.identifier, "return 'IDENTIFIER'"],
							["\\[", "return '['"],
							["\\]", "return ']'"],
							[",", "return ','"],
							["({int})?\\:({int})?(\\:({int})?)?", "return 'ARRAY_SLICE'"],
							["{int}", "return 'INTEGER'"],
							[dict.qq_string, "yytext = yytext.substr(1,yyleng-2); return 'QQ_STRING';"],
							[dict.q_string, "yytext = yytext.substr(1,yyleng-2); return 'Q_STRING';"],
							["\\(.+?\\)(?=\\])", "return 'SCRIPT_EXPRESSION'"],
							["\\?\\(.+?\\)(?=\\])", "return 'FILTER_EXPRESSION'"]
						]
					},
					start: "JSON_PATH",
					bnf: {
						JSON_PATH: [
							["DOLLAR", "yy.ast.set({ expression: { type: \"root\", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()"],
							["DOLLAR PATH_COMPONENTS", "yy.ast.set({ expression: { type: \"root\", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()"],
							["LEADING_CHILD_MEMBER_EXPRESSION", "yy.ast.unshift(); return yy.ast.yield()"],
							["LEADING_CHILD_MEMBER_EXPRESSION PATH_COMPONENTS", "yy.ast.set({ operation: \"member\", scope: \"child\", expression: { type: \"identifier\", value: $1 }}); yy.ast.unshift(); return yy.ast.yield()"]
						],
						PATH_COMPONENTS: [["PATH_COMPONENT", ""], ["PATH_COMPONENTS PATH_COMPONENT", ""]],
						PATH_COMPONENT: [["MEMBER_COMPONENT", "yy.ast.set({ operation: \"member\" }); yy.ast.push()"], ["SUBSCRIPT_COMPONENT", "yy.ast.set({ operation: \"subscript\" }); yy.ast.push() "]],
						MEMBER_COMPONENT: [["CHILD_MEMBER_COMPONENT", "yy.ast.set({ scope: \"child\" })"], ["DESCENDANT_MEMBER_COMPONENT", "yy.ast.set({ scope: \"descendant\" })"]],
						CHILD_MEMBER_COMPONENT: [["DOT MEMBER_EXPRESSION", ""]],
						LEADING_CHILD_MEMBER_EXPRESSION: [["MEMBER_EXPRESSION", "yy.ast.set({ scope: \"child\", operation: \"member\" })"]],
						DESCENDANT_MEMBER_COMPONENT: [["DOT_DOT MEMBER_EXPRESSION", ""]],
						MEMBER_EXPRESSION: [
							["STAR", "yy.ast.set({ expression: { type: \"wildcard\", value: $1 } })"],
							["IDENTIFIER", "yy.ast.set({ expression: { type: \"identifier\", value: $1 } })"],
							["SCRIPT_EXPRESSION", "yy.ast.set({ expression: { type: \"script_expression\", value: $1 } })"],
							["INTEGER", "yy.ast.set({ expression: { type: \"numeric_literal\", value: parseInt($1) } })"],
							["END", ""]
						],
						SUBSCRIPT_COMPONENT: [["CHILD_SUBSCRIPT_COMPONENT", "yy.ast.set({ scope: \"child\" })"], ["DESCENDANT_SUBSCRIPT_COMPONENT", "yy.ast.set({ scope: \"descendant\" })"]],
						CHILD_SUBSCRIPT_COMPONENT: [["[ SUBSCRIPT ]", ""]],
						DESCENDANT_SUBSCRIPT_COMPONENT: [["DOT_DOT [ SUBSCRIPT ]", ""]],
						SUBSCRIPT: [["SUBSCRIPT_EXPRESSION", ""], ["SUBSCRIPT_EXPRESSION_LIST", "$1.length > 1? yy.ast.set({ expression: { type: \"union\", value: $1 } }) : $$ = $1"]],
						SUBSCRIPT_EXPRESSION_LIST: [["SUBSCRIPT_EXPRESSION_LISTABLE", "$$ = [$1]"], ["SUBSCRIPT_EXPRESSION_LIST , SUBSCRIPT_EXPRESSION_LISTABLE", "$$ = $1.concat($3)"]],
						SUBSCRIPT_EXPRESSION_LISTABLE: [
							["INTEGER", "$$ = { expression: { type: \"numeric_literal\", value: parseInt($1) } }; yy.ast.set($$)"],
							["STRING_LITERAL", "$$ = { expression: { type: \"string_literal\", value: $1 } }; yy.ast.set($$)"],
							["ARRAY_SLICE", "$$ = { expression: { type: \"slice\", value: $1 } }; yy.ast.set($$)"]
						],
						SUBSCRIPT_EXPRESSION: [
							["STAR", "$$ = { expression: { type: \"wildcard\", value: $1 } }; yy.ast.set($$)"],
							["SCRIPT_EXPRESSION", "$$ = { expression: { type: \"script_expression\", value: $1 } }; yy.ast.set($$)"],
							["FILTER_EXPRESSION", "$$ = { expression: { type: \"filter_expression\", value: $1 } }; yy.ast.set($$)"]
						],
						STRING_LITERAL: [["QQ_STRING", "$$ = $1"], ["Q_STRING", "$$ = $1"]]
					}
				};
				if (fs.readFileSync) {
					grammar.moduleInclude = fs.readFileSync(require$1.resolve("../include/module.js"));
					grammar.actionInclude = fs.readFileSync(require$1.resolve("../include/action.js"));
				}
				module$1.exports = grammar;
			}, {
				"./dict": 2,
				"fs": 12
			}],
			4: [function(require$1, module$1, exports$1) {
				var aesprim = require$1("./aesprim");
				var slice = require$1("./slice");
				var _evaluate = require$1("static-eval");
				var _uniq = require$1("underscore").uniq;
				var Handlers = function() {
					return this.initialize.apply(this, arguments);
				};
				Handlers.prototype.initialize = function() {
					this.traverse = traverser(true);
					this.descend = traverser();
				};
				Handlers.prototype.keys = Object.keys;
				Handlers.prototype.resolve = function(component) {
					var key = [
						component.operation,
						component.scope,
						component.expression.type
					].join("-");
					var method = this._fns[key];
					if (!method) throw new Error("couldn't resolve key: " + key);
					return method.bind(this);
				};
				Handlers.prototype.register = function(key, handler) {
					if (!handler instanceof Function) throw new Error("handler must be a function");
					this._fns[key] = handler;
				};
				Handlers.prototype._fns = {
					"member-child-identifier": function(component, partial) {
						var key = component.expression.value;
						var value = partial.value;
						if (value instanceof Object && key in value) return [{
							value: value[key],
							path: partial.path.concat(key)
						}];
					},
					"member-descendant-identifier": _traverse(function(key, value, ref$1) {
						return key == ref$1;
					}),
					"subscript-child-numeric_literal": _descend(function(key, value, ref$1) {
						return key === ref$1;
					}),
					"member-child-numeric_literal": _descend(function(key, value, ref$1) {
						return String(key) === String(ref$1);
					}),
					"subscript-descendant-numeric_literal": _traverse(function(key, value, ref$1) {
						return key === ref$1;
					}),
					"member-child-wildcard": _descend(function() {
						return true;
					}),
					"member-descendant-wildcard": _traverse(function() {
						return true;
					}),
					"subscript-descendant-wildcard": _traverse(function() {
						return true;
					}),
					"subscript-child-wildcard": _descend(function() {
						return true;
					}),
					"subscript-child-slice": function(component, partial) {
						if (is_array(partial.value)) {
							var args = component.expression.value.split(":").map(_parse_nullable_int);
							var values = partial.value.map(function(v, i) {
								return {
									value: v,
									path: partial.path.concat(i)
								};
							});
							return slice.apply(null, [values].concat(args));
						}
					},
					"subscript-child-union": function(component, partial) {
						var results = [];
						component.expression.value.forEach(function(component$1) {
							var _component = {
								operation: "subscript",
								scope: "child",
								expression: component$1.expression
							};
							var _results = this.resolve(_component)(_component, partial);
							if (_results) results = results.concat(_results);
						}, this);
						return unique(results);
					},
					"subscript-descendant-union": function(component, partial, count) {
						var jp$1 = require$1("..");
						var self$1 = this;
						var results = [];
						jp$1.nodes(partial, "$..*").slice(1).forEach(function(node) {
							if (results.length >= count) return;
							component.expression.value.forEach(function(component$1) {
								var _component = {
									operation: "subscript",
									scope: "child",
									expression: component$1.expression
								};
								var _results = self$1.resolve(_component)(_component, node);
								results = results.concat(_results);
							});
						});
						return unique(results);
					},
					"subscript-child-filter_expression": function(component, partial, count) {
						var src = component.expression.value.slice(2, -1);
						var ast = aesprim.parse(src).body[0].expression;
						var passable = function(key, value) {
							return evaluate(ast, { "@": value });
						};
						return this.descend(partial, null, passable, count);
					},
					"subscript-descendant-filter_expression": function(component, partial, count) {
						var src = component.expression.value.slice(2, -1);
						var ast = aesprim.parse(src).body[0].expression;
						var passable = function(key, value) {
							return evaluate(ast, { "@": value });
						};
						return this.traverse(partial, null, passable, count);
					},
					"subscript-child-script_expression": function(component, partial) {
						return eval_recurse(partial, component.expression.value.slice(1, -1), "$[{{value}}]");
					},
					"member-child-script_expression": function(component, partial) {
						return eval_recurse(partial, component.expression.value.slice(1, -1), "$.{{value}}");
					},
					"member-descendant-script_expression": function(component, partial) {
						return eval_recurse(partial, component.expression.value.slice(1, -1), "$..value");
					}
				};
				Handlers.prototype._fns["subscript-child-string_literal"] = Handlers.prototype._fns["member-child-identifier"];
				Handlers.prototype._fns["member-descendant-numeric_literal"] = Handlers.prototype._fns["subscript-descendant-string_literal"] = Handlers.prototype._fns["member-descendant-identifier"];
				function eval_recurse(partial, src, template) {
					var jp$1 = require$1("./index");
					var ast = aesprim.parse(src).body[0].expression;
					var value = evaluate(ast, { "@": partial.value });
					var path = template.replace(/\{\{\s*value\s*\}\}/g, value);
					var results = jp$1.nodes(partial.value, path);
					results.forEach(function(r) {
						r.path = partial.path.concat(r.path.slice(1));
					});
					return results;
				}
				function is_array(val) {
					return Array.isArray(val);
				}
				function is_object(val) {
					return val && !(val instanceof Array) && val instanceof Object;
				}
				function traverser(recurse) {
					return function(partial, ref$1, passable, count) {
						var value = partial.value;
						var path = partial.path;
						var results = [];
						var descend = function(value$1, path$1) {
							if (is_array(value$1)) {
								value$1.forEach(function(element, index) {
									if (results.length >= count) return;
									if (passable(index, element, ref$1)) results.push({
										path: path$1.concat(index),
										value: element
									});
								});
								value$1.forEach(function(element, index) {
									if (results.length >= count) return;
									if (recurse) descend(element, path$1.concat(index));
								});
							} else if (is_object(value$1)) {
								this.keys(value$1).forEach(function(k) {
									if (results.length >= count) return;
									if (passable(k, value$1[k], ref$1)) results.push({
										path: path$1.concat(k),
										value: value$1[k]
									});
								});
								this.keys(value$1).forEach(function(k) {
									if (results.length >= count) return;
									if (recurse) descend(value$1[k], path$1.concat(k));
								});
							}
						}.bind(this);
						descend(value, path);
						return results;
					};
				}
				function _descend(passable) {
					return function(component, partial, count) {
						return this.descend(partial, component.expression.value, passable, count);
					};
				}
				function _traverse(passable) {
					return function(component, partial, count) {
						return this.traverse(partial, component.expression.value, passable, count);
					};
				}
				function evaluate() {
					try {
						return _evaluate.apply(this, arguments);
					} catch (e) {}
				}
				function unique(results) {
					results = results.filter(function(d) {
						return d;
					});
					return _uniq(results, function(r) {
						return r.path.map(function(c) {
							return String(c).replace("-", "--");
						}).join("-");
					});
				}
				function _parse_nullable_int(val) {
					var sval = String(val);
					return sval.match(/^-?[0-9]+$/) ? parseInt(sval) : null;
				}
				module$1.exports = Handlers;
			}, {
				"..": "jsonpath",
				"./aesprim": "./aesprim",
				"./index": 5,
				"./slice": 7,
				"static-eval": 15,
				"underscore": 12
			}],
			5: [function(require$1, module$1, exports$1) {
				var assert = require$1("assert");
				var dict = require$1("./dict");
				var Parser = require$1("./parser");
				var Handlers = require$1("./handlers");
				var JSONPath = function() {
					this.initialize.apply(this, arguments);
				};
				JSONPath.prototype.initialize = function() {
					this.parser = new Parser();
					this.handlers = new Handlers();
				};
				JSONPath.prototype.parse = function(string) {
					assert.ok(_is_string(string), "we need a path");
					return this.parser.parse(string);
				};
				JSONPath.prototype.parent = function(obj, string) {
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(string, "we need a path");
					var node = this.nodes(obj, string)[0];
					node.path.pop();
					return this.value(obj, node.path);
				};
				JSONPath.prototype.apply = function(obj, string, fn) {
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(string, "we need a path");
					assert.equal(typeof fn, "function", "fn needs to be function");
					var nodes = this.nodes(obj, string).sort(function(a, b) {
						return b.path.length - a.path.length;
					});
					nodes.forEach(function(node) {
						var key = node.path.pop();
						var parent = this.value(obj, this.stringify(node.path));
						parent[key] = node.value = fn.call(obj, parent[key]);
					}, this);
					return nodes;
				};
				JSONPath.prototype.value = function(obj, path, value) {
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(path, "we need a path");
					if (arguments.length >= 3) {
						var node = this.nodes(obj, path).shift();
						if (!node) return this._vivify(obj, path, value);
						var key = node.path.slice(-1).shift();
						var parent = this.parent(obj, this.stringify(node.path));
						parent[key] = value;
					}
					return this.query(obj, this.stringify(path), 1).shift();
				};
				JSONPath.prototype._vivify = function(obj, string, value) {
					var self$1 = this;
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(string, "we need a path");
					var path = this.parser.parse(string).map(function(component) {
						return component.expression.value;
					});
					var setValue = function(path$1, value$1) {
						var key = path$1.pop();
						var node = self$1.value(obj, path$1);
						if (!node) {
							setValue(path$1.concat(), typeof key === "string" ? {} : []);
							node = self$1.value(obj, path$1);
						}
						node[key] = value$1;
					};
					setValue(path, value);
					return this.query(obj, string)[0];
				};
				JSONPath.prototype.query = function(obj, string, count) {
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(_is_string(string), "we need a path");
					return this.nodes(obj, string, count).map(function(r) {
						return r.value;
					});
				};
				JSONPath.prototype.paths = function(obj, string, count) {
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(string, "we need a path");
					return this.nodes(obj, string, count).map(function(r) {
						return r.path;
					});
				};
				JSONPath.prototype.nodes = function(obj, string, count) {
					assert.ok(obj instanceof Object, "obj needs to be an object");
					assert.ok(string, "we need a path");
					if (count === 0) return [];
					var path = this.parser.parse(string);
					var handlers = this.handlers;
					var partials = [{
						path: ["$"],
						value: obj
					}];
					var matches = [];
					if (path.length && path[0].expression.type == "root") path.shift();
					if (!path.length) return partials;
					path.forEach(function(component, index) {
						if (matches.length >= count) return;
						var handler = handlers.resolve(component);
						var _partials = [];
						partials.forEach(function(p) {
							if (matches.length >= count) return;
							var results = handler(component, p, count);
							if (index == path.length - 1) matches = matches.concat(results || []);
							else _partials = _partials.concat(results || []);
						});
						partials = _partials;
					});
					return count ? matches.slice(0, count) : matches;
				};
				JSONPath.prototype.stringify = function(path) {
					assert.ok(path, "we need a path");
					var string = "$";
					var templates = {
						"descendant-member": "..{{value}}",
						"child-member": ".{{value}}",
						"descendant-subscript": "..[{{value}}]",
						"child-subscript": "[{{value}}]"
					};
					path = this._normalize(path);
					path.forEach(function(component) {
						if (component.expression.type == "root") return;
						var key = [component.scope, component.operation].join("-");
						var template = templates[key];
						var value;
						if (component.expression.type == "string_literal") value = JSON.stringify(component.expression.value);
						else value = component.expression.value;
						if (!template) throw new Error("couldn't find template " + key);
						string += template.replace(/{{value}}/, value);
					});
					return string;
				};
				JSONPath.prototype._normalize = function(path) {
					assert.ok(path, "we need a path");
					if (typeof path == "string") return this.parser.parse(path);
					else if (Array.isArray(path) && typeof path[0] == "string") {
						var _path = [{ expression: {
							type: "root",
							value: "$"
						} }];
						path.forEach(function(component, index) {
							if (component == "$" && index === 0) return;
							if (typeof component == "string" && component.match("^" + dict.identifier + "$")) _path.push({
								operation: "member",
								scope: "child",
								expression: {
									value: component,
									type: "identifier"
								}
							});
							else {
								var type = typeof component == "number" ? "numeric_literal" : "string_literal";
								_path.push({
									operation: "subscript",
									scope: "child",
									expression: {
										value: component,
										type
									}
								});
							}
						});
						return _path;
					} else if (Array.isArray(path) && typeof path[0] == "object") return path;
					throw new Error("couldn't understand path " + path);
				};
				function _is_string(obj) {
					return Object.prototype.toString.call(obj) == "[object String]";
				}
				JSONPath.Handlers = Handlers;
				JSONPath.Parser = Parser;
				var instance = new JSONPath();
				instance.JSONPath = JSONPath;
				module$1.exports = instance;
			}, {
				"./dict": 2,
				"./handlers": 4,
				"./parser": 6,
				"assert": 8
			}],
			6: [function(require$1, module$1, exports$1) {
				var grammar = require$1("./grammar");
				var gparser = require$1("../generated/parser");
				var Parser = function() {
					var parser = new gparser.Parser();
					var _parseError = parser.parseError;
					parser.yy.parseError = function() {
						if (parser.yy.ast) parser.yy.ast.initialize();
						_parseError.apply(parser, arguments);
					};
					return parser;
				};
				Parser.grammar = grammar;
				module$1.exports = Parser;
			}, {
				"../generated/parser": 1,
				"./grammar": 3
			}],
			7: [function(require$1, module$1, exports$1) {
				module$1.exports = function(arr, start, end, step) {
					if (typeof start == "string") throw new Error("start cannot be a string");
					if (typeof end == "string") throw new Error("end cannot be a string");
					if (typeof step == "string") throw new Error("step cannot be a string");
					var len = arr.length;
					if (step === 0) throw new Error("step cannot be zero");
					step = step ? integer(step) : 1;
					start = start < 0 ? len + start : start;
					end = end < 0 ? len + end : end;
					start = integer(start === 0 ? 0 : !start ? step > 0 ? 0 : len - 1 : start);
					end = integer(end === 0 ? 0 : !end ? step > 0 ? len : -1 : end);
					start = step > 0 ? Math.max(0, start) : Math.min(len, start);
					end = step > 0 ? Math.min(end, len) : Math.max(-1, end);
					if (step > 0 && end <= start) return [];
					if (step < 0 && start <= end) return [];
					var result = [];
					for (var i = start; i != end; i += step) {
						if (step < 0 && i <= end || step > 0 && i >= end) break;
						result.push(arr[i]);
					}
					return result;
				};
				function integer(val) {
					return String(val).match(/^[0-9]+$/) ? parseInt(val) : Number.isFinite(val) ? parseInt(val, 10) : 0;
				}
			}, {}],
			8: [function(require$1, module$1, exports$1) {
				var util = require$1("util/");
				var pSlice = Array.prototype.slice;
				var hasOwn = Object.prototype.hasOwnProperty;
				var assert = module$1.exports = ok;
				assert.AssertionError = function AssertionError(options) {
					this.name = "AssertionError";
					this.actual = options.actual;
					this.expected = options.expected;
					this.operator = options.operator;
					if (options.message) {
						this.message = options.message;
						this.generatedMessage = false;
					} else {
						this.message = getMessage(this);
						this.generatedMessage = true;
					}
					var stackStartFunction = options.stackStartFunction || fail;
					if (Error.captureStackTrace) Error.captureStackTrace(this, stackStartFunction);
					else {
						var err = /* @__PURE__ */ new Error();
						if (err.stack) {
							var out = err.stack;
							var fn_name = stackStartFunction.name;
							var idx = out.indexOf("\n" + fn_name);
							if (idx >= 0) {
								var next_line = out.indexOf("\n", idx + 1);
								out = out.substring(next_line + 1);
							}
							this.stack = out;
						}
					}
				};
				util.inherits(assert.AssertionError, Error);
				function replacer(key, value) {
					if (util.isUndefined(value)) return "" + value;
					if (util.isNumber(value) && !isFinite(value)) return value.toString();
					if (util.isFunction(value) || util.isRegExp(value)) return value.toString();
					return value;
				}
				function truncate(s, n) {
					if (util.isString(s)) return s.length < n ? s : s.slice(0, n);
					else return s;
				}
				function getMessage(self$1) {
					return truncate(JSON.stringify(self$1.actual, replacer), 128) + " " + self$1.operator + " " + truncate(JSON.stringify(self$1.expected, replacer), 128);
				}
				function fail(actual, expected, message, operator, stackStartFunction) {
					throw new assert.AssertionError({
						message,
						actual,
						expected,
						operator,
						stackStartFunction
					});
				}
				assert.fail = fail;
				function ok(value, message) {
					if (!value) fail(value, true, message, "==", assert.ok);
				}
				assert.ok = ok;
				assert.equal = function equal(actual, expected, message) {
					if (actual != expected) fail(actual, expected, message, "==", assert.equal);
				};
				assert.notEqual = function notEqual(actual, expected, message) {
					if (actual == expected) fail(actual, expected, message, "!=", assert.notEqual);
				};
				assert.deepEqual = function deepEqual(actual, expected, message) {
					if (!_deepEqual(actual, expected)) fail(actual, expected, message, "deepEqual", assert.deepEqual);
				};
				function _deepEqual(actual, expected) {
					if (actual === expected) return true;
					else if (util.isBuffer(actual) && util.isBuffer(expected)) {
						if (actual.length != expected.length) return false;
						for (var i = 0; i < actual.length; i++) if (actual[i] !== expected[i]) return false;
						return true;
					} else if (util.isDate(actual) && util.isDate(expected)) return actual.getTime() === expected.getTime();
					else if (util.isRegExp(actual) && util.isRegExp(expected)) return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
					else if (!util.isObject(actual) && !util.isObject(expected)) return actual == expected;
					else return objEquiv(actual, expected);
				}
				function isArguments(object) {
					return Object.prototype.toString.call(object) == "[object Arguments]";
				}
				function objEquiv(a, b) {
					if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b)) return false;
					if (a.prototype !== b.prototype) return false;
					if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
					var aIsArgs = isArguments(a), bIsArgs = isArguments(b);
					if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
					if (aIsArgs) {
						a = pSlice.call(a);
						b = pSlice.call(b);
						return _deepEqual(a, b);
					}
					var ka = objectKeys(a), kb = objectKeys(b), key, i;
					if (ka.length != kb.length) return false;
					ka.sort();
					kb.sort();
					for (i = ka.length - 1; i >= 0; i--) if (ka[i] != kb[i]) return false;
					for (i = ka.length - 1; i >= 0; i--) {
						key = ka[i];
						if (!_deepEqual(a[key], b[key])) return false;
					}
					return true;
				}
				assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
					if (_deepEqual(actual, expected)) fail(actual, expected, message, "notDeepEqual", assert.notDeepEqual);
				};
				assert.strictEqual = function strictEqual(actual, expected, message) {
					if (actual !== expected) fail(actual, expected, message, "===", assert.strictEqual);
				};
				assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
					if (actual === expected) fail(actual, expected, message, "!==", assert.notStrictEqual);
				};
				function expectedException(actual, expected) {
					if (!actual || !expected) return false;
					if (Object.prototype.toString.call(expected) == "[object RegExp]") return expected.test(actual);
					else if (actual instanceof expected) return true;
					else if (expected.call({}, actual) === true) return true;
					return false;
				}
				function _throws(shouldThrow, block, expected, message) {
					var actual;
					if (util.isString(expected)) {
						message = expected;
						expected = null;
					}
					try {
						block();
					} catch (e) {
						actual = e;
					}
					message = (expected && expected.name ? " (" + expected.name + ")." : ".") + (message ? " " + message : ".");
					if (shouldThrow && !actual) fail(actual, expected, "Missing expected exception" + message);
					if (!shouldThrow && expectedException(actual, expected)) fail(actual, expected, "Got unwanted exception" + message);
					if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) throw actual;
				}
				assert.throws = function(block, error, message) {
					_throws.apply(this, [true].concat(pSlice.call(arguments)));
				};
				assert.doesNotThrow = function(block, message) {
					_throws.apply(this, [false].concat(pSlice.call(arguments)));
				};
				assert.ifError = function(err) {
					if (err) throw err;
				};
				var objectKeys = Object.keys || function(obj) {
					var keys = [];
					for (var key in obj) if (hasOwn.call(obj, key)) keys.push(key);
					return keys;
				};
			}, { "util/": 11 }],
			9: [function(require$1, module$1, exports$1) {
				if (typeof Object.create === "function") module$1.exports = function inherits(ctor, superCtor) {
					ctor.super_ = superCtor;
					ctor.prototype = Object.create(superCtor.prototype, { constructor: {
						value: ctor,
						enumerable: false,
						writable: true,
						configurable: true
					} });
				};
				else module$1.exports = function inherits(ctor, superCtor) {
					ctor.super_ = superCtor;
					var TempCtor = function() {};
					TempCtor.prototype = superCtor.prototype;
					ctor.prototype = new TempCtor();
					ctor.prototype.constructor = ctor;
				};
			}, {}],
			10: [function(require$1, module$1, exports$1) {
				module$1.exports = function isBuffer(arg) {
					return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
				};
			}, {}],
			11: [function(require$1, module$1, exports$1) {
				(function(process, global$1) {
					var formatRegExp = /%[sdj%]/g;
					exports$1.format = function(f) {
						if (!isString(f)) {
							var objects = [];
							for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
							return objects.join(" ");
						}
						var i = 1;
						var args = arguments;
						var len = args.length;
						var str = String(f).replace(formatRegExp, function(x$1) {
							if (x$1 === "%%") return "%";
							if (i >= len) return x$1;
							switch (x$1) {
								case "%s": return String(args[i++]);
								case "%d": return Number(args[i++]);
								case "%j": try {
									return JSON.stringify(args[i++]);
								} catch (_) {
									return "[Circular]";
								}
								default: return x$1;
							}
						});
						for (var x = args[i]; i < len; x = args[++i]) if (isNull(x) || !isObject(x)) str += " " + x;
						else str += " " + inspect(x);
						return str;
					};
					exports$1.deprecate = function(fn, msg) {
						if (isUndefined(global$1.process)) return function() {
							return exports$1.deprecate(fn, msg).apply(this, arguments);
						};
						if (process.noDeprecation === true) return fn;
						var warned = false;
						function deprecated() {
							if (!warned) {
								if (process.throwDeprecation) throw new Error(msg);
								else if (process.traceDeprecation) console.trace(msg);
								else console.error(msg);
								warned = true;
							}
							return fn.apply(this, arguments);
						}
						return deprecated;
					};
					var debugs = {};
					var debugEnviron;
					exports$1.debuglog = function(set) {
						if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || "";
						set = set.toUpperCase();
						if (!debugs[set]) if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
							var pid = process.pid;
							debugs[set] = function() {
								var msg = exports$1.format.apply(exports$1, arguments);
								console.error("%s %d: %s", set, pid, msg);
							};
						} else debugs[set] = function() {};
						return debugs[set];
					};
					function inspect(obj, opts) {
						var ctx = {
							seen: [],
							stylize: stylizeNoColor
						};
						if (arguments.length >= 3) ctx.depth = arguments[2];
						if (arguments.length >= 4) ctx.colors = arguments[3];
						if (isBoolean(opts)) ctx.showHidden = opts;
						else if (opts) exports$1._extend(ctx, opts);
						if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
						if (isUndefined(ctx.depth)) ctx.depth = 2;
						if (isUndefined(ctx.colors)) ctx.colors = false;
						if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
						if (ctx.colors) ctx.stylize = stylizeWithColor;
						return formatValue(ctx, obj, ctx.depth);
					}
					exports$1.inspect = inspect;
					inspect.colors = {
						"bold": [1, 22],
						"italic": [3, 23],
						"underline": [4, 24],
						"inverse": [7, 27],
						"white": [37, 39],
						"grey": [90, 39],
						"black": [30, 39],
						"blue": [34, 39],
						"cyan": [36, 39],
						"green": [32, 39],
						"magenta": [35, 39],
						"red": [31, 39],
						"yellow": [33, 39]
					};
					inspect.styles = {
						"special": "cyan",
						"number": "yellow",
						"boolean": "yellow",
						"undefined": "grey",
						"null": "bold",
						"string": "green",
						"date": "magenta",
						"regexp": "red"
					};
					function stylizeWithColor(str, styleType) {
						var style = inspect.styles[styleType];
						if (style) return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
						else return str;
					}
					function stylizeNoColor(str, styleType) {
						return str;
					}
					function arrayToHash(array) {
						var hash = {};
						array.forEach(function(val, idx) {
							hash[val] = true;
						});
						return hash;
					}
					function formatValue(ctx, value, recurseTimes) {
						if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports$1.inspect && !(value.constructor && value.constructor.prototype === value)) {
							var ret = value.inspect(recurseTimes, ctx);
							if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
							return ret;
						}
						var primitive = formatPrimitive(ctx, value);
						if (primitive) return primitive;
						var keys = Object.keys(value);
						var visibleKeys = arrayToHash(keys);
						if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
						if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
						if (keys.length === 0) {
							if (isFunction(value)) {
								var name = value.name ? ": " + value.name : "";
								return ctx.stylize("[Function" + name + "]", "special");
							}
							if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
							if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
							if (isError(value)) return formatError(value);
						}
						var base = "", array = false, braces = ["{", "}"];
						if (isArray(value)) {
							array = true;
							braces = ["[", "]"];
						}
						if (isFunction(value)) base = " [Function" + (value.name ? ": " + value.name : "") + "]";
						if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
						if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
						if (isError(value)) base = " " + formatError(value);
						if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
						if (recurseTimes < 0) if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
						else return ctx.stylize("[Object]", "special");
						ctx.seen.push(value);
						var output;
						if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
						else output = keys.map(function(key) {
							return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
						});
						ctx.seen.pop();
						return reduceToSingleString(output, base, braces);
					}
					function formatPrimitive(ctx, value) {
						if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
						if (isString(value)) {
							var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
							return ctx.stylize(simple, "string");
						}
						if (isNumber(value)) return ctx.stylize("" + value, "number");
						if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
						if (isNull(value)) return ctx.stylize("null", "null");
					}
					function formatError(value) {
						return "[" + Error.prototype.toString.call(value) + "]";
					}
					function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
						var output = [];
						for (var i = 0, l = value.length; i < l; ++i) if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
						else output.push("");
						keys.forEach(function(key) {
							if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
						});
						return output;
					}
					function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
						var name, str, desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
						if (desc.get) if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
						else str = ctx.stylize("[Getter]", "special");
						else if (desc.set) str = ctx.stylize("[Setter]", "special");
						if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
						if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
							if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
							else str = formatValue(ctx, desc.value, recurseTimes - 1);
							if (str.indexOf("\n") > -1) if (array) str = str.split("\n").map(function(line) {
								return "  " + line;
							}).join("\n").substr(2);
							else str = "\n" + str.split("\n").map(function(line) {
								return "   " + line;
							}).join("\n");
						} else str = ctx.stylize("[Circular]", "special");
						if (isUndefined(name)) {
							if (array && key.match(/^\d+$/)) return str;
							name = JSON.stringify("" + key);
							if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
								name = name.substr(1, name.length - 2);
								name = ctx.stylize(name, "name");
							} else {
								name = name.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
								name = ctx.stylize(name, "string");
							}
						}
						return name + ": " + str;
					}
					function reduceToSingleString(output, base, braces) {
						var numLinesEst = 0;
						if (output.reduce(function(prev, cur) {
							numLinesEst++;
							if (cur.indexOf("\n") >= 0) numLinesEst++;
							return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
						}, 0) > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
						return braces[0] + base + " " + output.join(", ") + " " + braces[1];
					}
					function isArray(ar) {
						return Array.isArray(ar);
					}
					exports$1.isArray = isArray;
					function isBoolean(arg) {
						return typeof arg === "boolean";
					}
					exports$1.isBoolean = isBoolean;
					function isNull(arg) {
						return arg === null;
					}
					exports$1.isNull = isNull;
					function isNullOrUndefined(arg) {
						return arg == null;
					}
					exports$1.isNullOrUndefined = isNullOrUndefined;
					function isNumber(arg) {
						return typeof arg === "number";
					}
					exports$1.isNumber = isNumber;
					function isString(arg) {
						return typeof arg === "string";
					}
					exports$1.isString = isString;
					function isSymbol(arg) {
						return typeof arg === "symbol";
					}
					exports$1.isSymbol = isSymbol;
					function isUndefined(arg) {
						return arg === void 0;
					}
					exports$1.isUndefined = isUndefined;
					function isRegExp(re) {
						return isObject(re) && objectToString(re) === "[object RegExp]";
					}
					exports$1.isRegExp = isRegExp;
					function isObject(arg) {
						return typeof arg === "object" && arg !== null;
					}
					exports$1.isObject = isObject;
					function isDate(d) {
						return isObject(d) && objectToString(d) === "[object Date]";
					}
					exports$1.isDate = isDate;
					function isError(e) {
						return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
					}
					exports$1.isError = isError;
					function isFunction(arg) {
						return typeof arg === "function";
					}
					exports$1.isFunction = isFunction;
					function isPrimitive(arg) {
						return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
					}
					exports$1.isPrimitive = isPrimitive;
					exports$1.isBuffer = require$1("./support/isBuffer");
					function objectToString(o) {
						return Object.prototype.toString.call(o);
					}
					function pad(n) {
						return n < 10 ? "0" + n.toString(10) : n.toString(10);
					}
					var months = [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					];
					function timestamp() {
						var d = /* @__PURE__ */ new Date();
						var time = [
							pad(d.getHours()),
							pad(d.getMinutes()),
							pad(d.getSeconds())
						].join(":");
						return [
							d.getDate(),
							months[d.getMonth()],
							time
						].join(" ");
					}
					exports$1.log = function() {
						console.log("%s - %s", timestamp(), exports$1.format.apply(exports$1, arguments));
					};
					exports$1.inherits = require$1("inherits");
					exports$1._extend = function(origin, add) {
						if (!add || !isObject(add)) return origin;
						var keys = Object.keys(add);
						var i = keys.length;
						while (i--) origin[keys[i]] = add[keys[i]];
						return origin;
					};
					function hasOwnProperty(obj, prop) {
						return Object.prototype.hasOwnProperty.call(obj, prop);
					}
				}).call(this, require$1("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
			}, {
				"./support/isBuffer": 10,
				"_process": 14,
				"inherits": 9
			}],
			12: [function(require$1, module$1, exports$1) {}, {}],
			13: [function(require$1, module$1, exports$1) {
				(function(process) {
					function normalizeArray(parts, allowAboveRoot) {
						var up = 0;
						for (var i = parts.length - 1; i >= 0; i--) {
							var last = parts[i];
							if (last === ".") parts.splice(i, 1);
							else if (last === "..") {
								parts.splice(i, 1);
								up++;
							} else if (up) {
								parts.splice(i, 1);
								up--;
							}
						}
						if (allowAboveRoot) for (; up--;) parts.unshift("..");
						return parts;
					}
					exports$1.resolve = function() {
						var resolvedPath = "", resolvedAbsolute = false;
						for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
							var path = i >= 0 ? arguments[i] : process.cwd();
							if (typeof path !== "string") throw new TypeError("Arguments to path.resolve must be strings");
							else if (!path) continue;
							resolvedPath = path + "/" + resolvedPath;
							resolvedAbsolute = path.charAt(0) === "/";
						}
						resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
							return !!p;
						}), !resolvedAbsolute).join("/");
						return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
					};
					exports$1.normalize = function(path) {
						var isAbsolute = exports$1.isAbsolute(path), trailingSlash = substr(path, -1) === "/";
						path = normalizeArray(filter(path.split("/"), function(p) {
							return !!p;
						}), !isAbsolute).join("/");
						if (!path && !isAbsolute) path = ".";
						if (path && trailingSlash) path += "/";
						return (isAbsolute ? "/" : "") + path;
					};
					exports$1.isAbsolute = function(path) {
						return path.charAt(0) === "/";
					};
					exports$1.join = function() {
						var paths = Array.prototype.slice.call(arguments, 0);
						return exports$1.normalize(filter(paths, function(p, index) {
							if (typeof p !== "string") throw new TypeError("Arguments to path.join must be strings");
							return p;
						}).join("/"));
					};
					exports$1.relative = function(from, to) {
						from = exports$1.resolve(from).substr(1);
						to = exports$1.resolve(to).substr(1);
						function trim(arr) {
							var start = 0;
							for (; start < arr.length; start++) if (arr[start] !== "") break;
							var end = arr.length - 1;
							for (; end >= 0; end--) if (arr[end] !== "") break;
							if (start > end) return [];
							return arr.slice(start, end - start + 1);
						}
						var fromParts = trim(from.split("/"));
						var toParts = trim(to.split("/"));
						var length = Math.min(fromParts.length, toParts.length);
						var samePartsLength = length;
						for (var i = 0; i < length; i++) if (fromParts[i] !== toParts[i]) {
							samePartsLength = i;
							break;
						}
						var outputParts = [];
						for (var i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
						outputParts = outputParts.concat(toParts.slice(samePartsLength));
						return outputParts.join("/");
					};
					exports$1.sep = "/";
					exports$1.delimiter = ":";
					exports$1.dirname = function(path) {
						if (typeof path !== "string") path = path + "";
						if (path.length === 0) return ".";
						var code = path.charCodeAt(0);
						var hasRoot = code === 47;
						var end = -1;
						var matchedSlash = true;
						for (var i = path.length - 1; i >= 1; --i) {
							code = path.charCodeAt(i);
							if (code === 47) {
								if (!matchedSlash) {
									end = i;
									break;
								}
							} else matchedSlash = false;
						}
						if (end === -1) return hasRoot ? "/" : ".";
						if (hasRoot && end === 1) return "/";
						return path.slice(0, end);
					};
					function basename(path) {
						if (typeof path !== "string") path = path + "";
						var start = 0;
						var end = -1;
						var matchedSlash = true;
						var i;
						for (i = path.length - 1; i >= 0; --i) if (path.charCodeAt(i) === 47) {
							if (!matchedSlash) {
								start = i + 1;
								break;
							}
						} else if (end === -1) {
							matchedSlash = false;
							end = i + 1;
						}
						if (end === -1) return "";
						return path.slice(start, end);
					}
					exports$1.basename = function(path, ext) {
						var f = basename(path);
						if (ext && f.substr(-1 * ext.length) === ext) f = f.substr(0, f.length - ext.length);
						return f;
					};
					exports$1.extname = function(path) {
						if (typeof path !== "string") path = path + "";
						var startDot = -1;
						var startPart = 0;
						var end = -1;
						var matchedSlash = true;
						var preDotState = 0;
						for (var i = path.length - 1; i >= 0; --i) {
							var code = path.charCodeAt(i);
							if (code === 47) {
								if (!matchedSlash) {
									startPart = i + 1;
									break;
								}
								continue;
							}
							if (end === -1) {
								matchedSlash = false;
								end = i + 1;
							}
							if (code === 46) {
								if (startDot === -1) startDot = i;
								else if (preDotState !== 1) preDotState = 1;
							} else if (startDot !== -1) preDotState = -1;
						}
						if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
						return path.slice(startDot, end);
					};
					function filter(xs, f) {
						if (xs.filter) return xs.filter(f);
						var res = [];
						for (var i = 0; i < xs.length; i++) if (f(xs[i], i, xs)) res.push(xs[i]);
						return res;
					}
					var substr = "ab".substr(-1) === "b" ? function(str, start, len) {
						return str.substr(start, len);
					} : function(str, start, len) {
						if (start < 0) start = str.length + start;
						return str.substr(start, len);
					};
				}).call(this, require$1("_process"));
			}, { "_process": 14 }],
			14: [function(require$1, module$1, exports$1) {
				var process = module$1.exports = {};
				var cachedSetTimeout;
				var cachedClearTimeout;
				function defaultSetTimout() {
					throw new Error("setTimeout has not been defined");
				}
				function defaultClearTimeout() {
					throw new Error("clearTimeout has not been defined");
				}
				(function() {
					try {
						if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
						else cachedSetTimeout = defaultSetTimout;
					} catch (e) {
						cachedSetTimeout = defaultSetTimout;
					}
					try {
						if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
						else cachedClearTimeout = defaultClearTimeout;
					} catch (e) {
						cachedClearTimeout = defaultClearTimeout;
					}
				})();
				function runTimeout(fun) {
					if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
					if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
						cachedSetTimeout = setTimeout;
						return setTimeout(fun, 0);
					}
					try {
						return cachedSetTimeout(fun, 0);
					} catch (e) {
						try {
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e$1) {
							return cachedSetTimeout.call(this, fun, 0);
						}
					}
				}
				function runClearTimeout(marker) {
					if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
					if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
						cachedClearTimeout = clearTimeout;
						return clearTimeout(marker);
					}
					try {
						return cachedClearTimeout(marker);
					} catch (e) {
						try {
							return cachedClearTimeout.call(null, marker);
						} catch (e$1) {
							return cachedClearTimeout.call(this, marker);
						}
					}
				}
				var queue = [];
				var draining = false;
				var currentQueue;
				var queueIndex = -1;
				function cleanUpNextTick() {
					if (!draining || !currentQueue) return;
					draining = false;
					if (currentQueue.length) queue = currentQueue.concat(queue);
					else queueIndex = -1;
					if (queue.length) drainQueue();
				}
				function drainQueue() {
					if (draining) return;
					var timeout = runTimeout(cleanUpNextTick);
					draining = true;
					var len = queue.length;
					while (len) {
						currentQueue = queue;
						queue = [];
						while (++queueIndex < len) if (currentQueue) currentQueue[queueIndex].run();
						queueIndex = -1;
						len = queue.length;
					}
					currentQueue = null;
					draining = false;
					runClearTimeout(timeout);
				}
				process.nextTick = function(fun) {
					var args = new Array(arguments.length - 1);
					if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
					queue.push(new Item(fun, args));
					if (queue.length === 1 && !draining) runTimeout(drainQueue);
				};
				function Item(fun, array) {
					this.fun = fun;
					this.array = array;
				}
				Item.prototype.run = function() {
					this.fun.apply(null, this.array);
				};
				process.title = "browser";
				process.browser = true;
				process.env = {};
				process.argv = [];
				process.version = "";
				process.versions = {};
				function noop() {}
				process.on = noop;
				process.addListener = noop;
				process.once = noop;
				process.off = noop;
				process.removeListener = noop;
				process.removeAllListeners = noop;
				process.emit = noop;
				process.prependListener = noop;
				process.prependOnceListener = noop;
				process.listeners = function(name) {
					return [];
				};
				process.binding = function(name) {
					throw new Error("process.binding is not supported");
				};
				process.cwd = function() {
					return "/";
				};
				process.chdir = function(dir) {
					throw new Error("process.chdir is not supported");
				};
				process.umask = function() {
					return 0;
				};
			}, {}],
			15: [function(require$1, module$1, exports$1) {
				var unparse = require$1("escodegen").generate;
				module$1.exports = function(ast, vars) {
					if (!vars) vars = {};
					var FAIL = {};
					var result = (function walk(node, scopeVars) {
						if (node.type === "Literal") return node.value;
						else if (node.type === "UnaryExpression") {
							var val = walk(node.argument);
							if (node.operator === "+") return +val;
							if (node.operator === "-") return -val;
							if (node.operator === "~") return ~val;
							if (node.operator === "!") return !val;
							return FAIL;
						} else if (node.type === "ArrayExpression") {
							var xs = [];
							for (var i = 0, l = node.elements.length; i < l; i++) {
								var x = walk(node.elements[i]);
								if (x === FAIL) return FAIL;
								xs.push(x);
							}
							return xs;
						} else if (node.type === "ObjectExpression") {
							var obj = {};
							for (var i = 0; i < node.properties.length; i++) {
								var prop = node.properties[i];
								var value = prop.value === null ? prop.value : walk(prop.value);
								if (value === FAIL) return FAIL;
								obj[prop.key.value || prop.key.name] = value;
							}
							return obj;
						} else if (node.type === "BinaryExpression" || node.type === "LogicalExpression") {
							var l = walk(node.left);
							if (l === FAIL) return FAIL;
							var r = walk(node.right);
							if (r === FAIL) return FAIL;
							var op = node.operator;
							if (op === "==") return l == r;
							if (op === "===") return l === r;
							if (op === "!=") return l != r;
							if (op === "!==") return l !== r;
							if (op === "+") return l + r;
							if (op === "-") return l - r;
							if (op === "*") return l * r;
							if (op === "/") return l / r;
							if (op === "%") return l % r;
							if (op === "<") return l < r;
							if (op === "<=") return l <= r;
							if (op === ">") return l > r;
							if (op === ">=") return l >= r;
							if (op === "|") return l | r;
							if (op === "&") return l & r;
							if (op === "^") return l ^ r;
							if (op === "&&") return l && r;
							if (op === "||") return l || r;
							return FAIL;
						} else if (node.type === "Identifier") if ({}.hasOwnProperty.call(vars, node.name)) return vars[node.name];
						else return FAIL;
						else if (node.type === "ThisExpression") if ({}.hasOwnProperty.call(vars, "this")) return vars["this"];
						else return FAIL;
						else if (node.type === "CallExpression") {
							var callee = walk(node.callee);
							if (callee === FAIL) return FAIL;
							if (typeof callee !== "function") return FAIL;
							var ctx = node.callee.object ? walk(node.callee.object) : FAIL;
							if (ctx === FAIL) ctx = null;
							var args = [];
							for (var i = 0, l = node.arguments.length; i < l; i++) {
								var x = walk(node.arguments[i]);
								if (x === FAIL) return FAIL;
								args.push(x);
							}
							return callee.apply(ctx, args);
						} else if (node.type === "MemberExpression") {
							var obj = walk(node.object);
							if (obj === FAIL || typeof obj == "function") return FAIL;
							if (node.property.type === "Identifier") return obj[node.property.name];
							var prop = walk(node.property);
							if (prop === FAIL) return FAIL;
							return obj[prop];
						} else if (node.type === "ConditionalExpression") {
							var val = walk(node.test);
							if (val === FAIL) return FAIL;
							return val ? walk(node.consequent) : walk(node.alternate);
						} else if (node.type === "ExpressionStatement") {
							var val = walk(node.expression);
							if (val === FAIL) return FAIL;
							return val;
						} else if (node.type === "ReturnStatement") return walk(node.argument);
						else if (node.type === "FunctionExpression") {
							var bodies = node.body.body;
							var oldVars = {};
							Object.keys(vars).forEach(function(element) {
								oldVars[element] = vars[element];
							});
							for (var i = 0; i < node.params.length; i++) {
								var key = node.params[i];
								if (key.type == "Identifier") vars[key.name] = null;
								else return FAIL;
							}
							for (var i in bodies) if (walk(bodies[i]) === FAIL) return FAIL;
							vars = oldVars;
							var keys = Object.keys(vars);
							var vals = keys.map(function(key$1) {
								return vars[key$1];
							});
							return Function(keys.join(", "), "return " + unparse(node)).apply(null, vals);
						} else if (node.type === "TemplateLiteral") {
							var str = "";
							for (var i = 0; i < node.expressions.length; i++) {
								str += walk(node.quasis[i]);
								str += walk(node.expressions[i]);
							}
							str += walk(node.quasis[i]);
							return str;
						} else if (node.type === "TaggedTemplateExpression") {
							var tag = walk(node.tag);
							var quasi = node.quasi;
							var strings = quasi.quasis.map(walk);
							var values = quasi.expressions.map(walk);
							return tag.apply(null, [strings].concat(values));
						} else if (node.type === "TemplateElement") return node.value.cooked;
						else return FAIL;
					})(ast);
					return result === FAIL ? void 0 : result;
				};
			}, { "escodegen": 12 }],
			"jsonpath": [function(require$1, module$1, exports$1) {
				module$1.exports = require$1("./lib/index");
			}, { "./lib/index": 5 }]
		}, {}, ["jsonpath"])("jsonpath");
	});
})))());
var _hoisted_1 = { class: "el-dropdown-link" };
var RunDataJsonActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataJsonActions",
	props: {
		node: {},
		paneType: {},
		pushRef: {},
		distanceFromActive: {},
		selectedJsonPath: { default: nonExistingJsonPath },
		jsonData: {},
		outputIndex: {},
		runIndex: {}
	},
	setup(__props) {
		const props = __props;
		const popOutWindow = inject(PopOutWindowKey, ref());
		const isInPopOutWindow = computed(() => popOutWindow?.value !== void 0);
		const ndvStore = useNDVStore();
		const workflowsStore = useWorkflowsStore();
		const clipboard = useClipboard();
		const i18n = useI18n();
		const nodeHelpers = useNodeHelpers();
		const { activeNode } = ndvStore;
		const pinnedData = usePinnedData(activeNode);
		const { showToast } = useToast();
		const telemetry = useTelemetry();
		const route = useRoute();
		const isReadOnlyRoute = computed(() => {
			return route?.meta?.readOnlyCanvas === true;
		});
		const noSelection = computed(() => {
			return props.selectedJsonPath === nonExistingJsonPath;
		});
		const normalisedJsonPath = computed(() => {
			return noSelection.value ? "[\"\"]" : props.selectedJsonPath;
		});
		function getJsonValue() {
			let selectedValue;
			if (noSelection.value) {
				const inExecutionsFrame = window !== window.parent && window.parent.location.pathname.includes("/executions");
				if (pinnedData.hasData.value && !inExecutionsFrame) selectedValue = clearJsonKey(pinnedData.data.value);
				else selectedValue = executionDataToJson(nodeHelpers.getNodeInputData(props.node, props.runIndex, props.outputIndex));
			} else {
				const jsonPath = normalisedJsonPath.value.startsWith("$") ? normalisedJsonPath.value : `$${normalisedJsonPath.value}`;
				selectedValue = import_jsonpath.default.query(props.jsonData, jsonPath)[0];
			}
			let value = "";
			if (typeof selectedValue === "object") value = JSON.stringify(selectedValue, null, 2);
			else value = selectedValue.toString();
			return value;
		}
		function getJsonItemPath() {
			const newPath = convertPath(normalisedJsonPath.value);
			let startPath = "";
			let path = "";
			const pathParts = newPath.split("]");
			const index = pathParts[0].slice(1);
			path = pathParts.slice(1).join("]");
			startPath = `$item(${index}).$node["${props.node.name}"].json`;
			return {
				path,
				startPath
			};
		}
		function getJsonParameterPath() {
			const path = convertPath(normalisedJsonPath.value).split("]").slice(1).join("]");
			let startPath = `$node["${props.node.name}"].json`;
			if (props.distanceFromActive === 1) startPath = "$json";
			return {
				path,
				startPath
			};
		}
		function handleCopyClick(commandData) {
			let value;
			if (commandData.command === "value") {
				value = getJsonValue();
				showToast({
					title: i18n.baseText("runData.copyValue.toast"),
					message: "",
					type: "success",
					duration: 2e3
				});
			} else {
				let startPath = "";
				let path = "";
				if (commandData.command === "itemPath") {
					const jsonItemPath = getJsonItemPath();
					startPath = jsonItemPath.startPath;
					path = jsonItemPath.path;
					showToast({
						title: i18n.baseText("runData.copyItemPath.toast"),
						message: "",
						type: "success",
						duration: 2e3
					});
				} else if (commandData.command === "parameterPath") {
					const jsonParameterPath = getJsonParameterPath();
					startPath = jsonParameterPath.startPath;
					path = jsonParameterPath.path;
					showToast({
						title: i18n.baseText("runData.copyParameterPath.toast"),
						message: "",
						type: "success",
						duration: 2e3
					});
				}
				if (!path.startsWith("[") && !path.startsWith(".") && path) path += ".";
				value = `{{ ${startPath + path} }}`;
			}
			const copyType = {
				value: "selection",
				itemPath: "item_path",
				parameterPath: "parameter_path"
			}[commandData.command];
			telemetry.track("User copied ndv data", {
				node_type: activeNode?.type,
				push_ref: props.pushRef,
				run_index: props.runIndex,
				view: "json",
				copy_type: copyType,
				workflow_id: workflowsStore.workflowId,
				pane: props.paneType,
				in_execution_log: isReadOnlyRoute.value
			});
			clipboard.copy(value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actionsGroup),
				"data-test-id": "ndv-json-actions"
			}, [noSelection.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
				key: 0,
				title: unref(i18n).baseText("runData.copyToClipboard"),
				icon: "files",
				type: "tertiary",
				circle: false,
				onClick: _cache[0] || (_cache[0] = ($event) => handleCopyClick({ command: "value" }))
			}, null, 8, ["title"])) : (openBlock(), createBlock(unref(ElDropdown), {
				key: 1,
				trigger: "click",
				teleported: !isInPopOutWindow.value,
				onCommand: handleCopyClick
			}, {
				dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), null, {
					default: withCtx(() => [
						createVNode(unref(ElDropdownItem), { command: { command: "value" } }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.copyValue")), 1)]),
							_: 1
						}),
						createVNode(unref(ElDropdownItem), {
							command: { command: "itemPath" },
							divided: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.copyItemPath")), 1)]),
							_: 1
						}),
						createVNode(unref(ElDropdownItem), { command: { command: "parameterPath" } }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.copyParameterPath")), 1)]),
							_: 1
						})
					]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("span", _hoisted_1, [createVNode(unref(N8nIconButton_default), {
					title: unref(i18n).baseText("runData.copyToClipboard"),
					icon: "files",
					type: "tertiary",
					circle: false
				}, null, 8, ["title"])])]),
				_: 1
			}, 8, ["teleported"]))], 2);
		};
	}
});
var RunDataJsonActions_vue_vue_type_style_index_0_lang_module_default = { actionsGroup: "_actionsGroup_q5z7w_123" };
var RunDataJsonActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataJsonActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJsonActions_vue_vue_type_style_index_0_lang_module_default }]]);
export { RunDataJsonActions_default as default };
