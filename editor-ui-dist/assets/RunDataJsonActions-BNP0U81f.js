import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, R as inject, S as computed, Sn as toDisplayString, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { Ii as N8nIconButton_default, Qt as ElDropdownMenu, Xt as ElDropdown, Zt as ElDropdownItem, gt as useRoute } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ii as executionDataToJson, Ln as useToast, _r as useNDVStore, ga as convertPath, ha as clearJsonKey, pr as useTelemetry, ur as useNodeHelpers } from "./users.store-DNsxOyr9.js";
import { B as nonExistingJsonPath, Lc as PopOutWindowKey, go as NodeConnectionTypes } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-f84ZK-I5.js";
import { t as useClipboard } from "./useClipboard-CRF4y00Y.js";
import { t as usePinnedData } from "./usePinnedData-mwDbTI9q.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-DavZjGCY.js";
var Hooks = class {
	add(name, callback, first) {
		if (typeof arguments[0] != "string") for (let name$1 in arguments[0]) this.add(name$1, arguments[0][name$1], arguments[1]);
		else (Array.isArray(name) ? name : [name]).forEach(function(name$1) {
			this[name$1] = this[name$1] || [];
			if (callback) this[name$1][first ? "unshift" : "push"](callback);
		}, this);
	}
	run(name, env) {
		this[name] = this[name] || [];
		this[name].forEach(function(callback) {
			callback.call(env && env.context ? env.context : env, env);
		});
	}
};
var Plugins = class {
	constructor(jsep$1) {
		this.jsep = jsep$1;
		this.registered = {};
	}
	register() {
		for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) plugins[_key] = arguments[_key];
		plugins.forEach((plugin$1) => {
			if (typeof plugin$1 !== "object" || !plugin$1.name || !plugin$1.init) throw new Error("Invalid JSEP plugin format");
			if (this.registered[plugin$1.name]) return;
			plugin$1.init(this.jsep);
			this.registered[plugin$1.name] = plugin$1;
		});
	}
};
var Jsep = class Jsep {
	static get version() {
		return "1.4.0";
	}
	static toString() {
		return "JavaScript Expression Parser (JSEP) v" + Jsep.version;
	}
	static addUnaryOp(op_name) {
		Jsep.max_unop_len = Math.max(op_name.length, Jsep.max_unop_len);
		Jsep.unary_ops[op_name] = 1;
		return Jsep;
	}
	static addBinaryOp(op_name, precedence, isRightAssociative) {
		Jsep.max_binop_len = Math.max(op_name.length, Jsep.max_binop_len);
		Jsep.binary_ops[op_name] = precedence;
		if (isRightAssociative) Jsep.right_associative.add(op_name);
		else Jsep.right_associative.delete(op_name);
		return Jsep;
	}
	static addIdentifierChar(char) {
		Jsep.additional_identifier_chars.add(char);
		return Jsep;
	}
	static addLiteral(literal_name, literal_value) {
		Jsep.literals[literal_name] = literal_value;
		return Jsep;
	}
	static removeUnaryOp(op_name) {
		delete Jsep.unary_ops[op_name];
		if (op_name.length === Jsep.max_unop_len) Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
		return Jsep;
	}
	static removeAllUnaryOps() {
		Jsep.unary_ops = {};
		Jsep.max_unop_len = 0;
		return Jsep;
	}
	static removeIdentifierChar(char) {
		Jsep.additional_identifier_chars.delete(char);
		return Jsep;
	}
	static removeBinaryOp(op_name) {
		delete Jsep.binary_ops[op_name];
		if (op_name.length === Jsep.max_binop_len) Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
		Jsep.right_associative.delete(op_name);
		return Jsep;
	}
	static removeAllBinaryOps() {
		Jsep.binary_ops = {};
		Jsep.max_binop_len = 0;
		return Jsep;
	}
	static removeLiteral(literal_name) {
		delete Jsep.literals[literal_name];
		return Jsep;
	}
	static removeAllLiterals() {
		Jsep.literals = {};
		return Jsep;
	}
	get char() {
		return this.expr.charAt(this.index);
	}
	get code() {
		return this.expr.charCodeAt(this.index);
	}
	constructor(expr) {
		this.expr = expr;
		this.index = 0;
	}
	static parse(expr) {
		return new Jsep(expr).parse();
	}
	static getMaxKeyLen(obj) {
		return Math.max(0, ...Object.keys(obj).map((k) => k.length));
	}
	static isDecimalDigit(ch) {
		return ch >= 48 && ch <= 57;
	}
	static binaryPrecedence(op_val) {
		return Jsep.binary_ops[op_val] || 0;
	}
	static isIdentifierStart(ch) {
		return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 128 && !Jsep.binary_ops[String.fromCharCode(ch)] || Jsep.additional_identifier_chars.has(String.fromCharCode(ch));
	}
	static isIdentifierPart(ch) {
		return Jsep.isIdentifierStart(ch) || Jsep.isDecimalDigit(ch);
	}
	throwError(message) {
		const error = /* @__PURE__ */ new Error(message + " at character " + this.index);
		error.index = this.index;
		error.description = message;
		throw error;
	}
	runHook(name, node) {
		if (Jsep.hooks[name]) {
			const env = {
				context: this,
				node
			};
			Jsep.hooks.run(name, env);
			return env.node;
		}
		return node;
	}
	searchHook(name) {
		if (Jsep.hooks[name]) {
			const env = { context: this };
			Jsep.hooks[name].find(function(callback) {
				callback.call(env.context, env);
				return env.node;
			});
			return env.node;
		}
	}
	gobbleSpaces() {
		let ch = this.code;
		while (ch === Jsep.SPACE_CODE || ch === Jsep.TAB_CODE || ch === Jsep.LF_CODE || ch === Jsep.CR_CODE) ch = this.expr.charCodeAt(++this.index);
		this.runHook("gobble-spaces");
	}
	parse() {
		this.runHook("before-all");
		const nodes = this.gobbleExpressions();
		const node = nodes.length === 1 ? nodes[0] : {
			type: Jsep.COMPOUND,
			body: nodes
		};
		return this.runHook("after-all", node);
	}
	gobbleExpressions(untilICode) {
		let nodes = [], ch_i, node;
		while (this.index < this.expr.length) {
			ch_i = this.code;
			if (ch_i === Jsep.SEMCOL_CODE || ch_i === Jsep.COMMA_CODE) this.index++;
			else if (node = this.gobbleExpression()) nodes.push(node);
			else if (this.index < this.expr.length) {
				if (ch_i === untilICode) break;
				this.throwError("Unexpected \"" + this.char + "\"");
			}
		}
		return nodes;
	}
	gobbleExpression() {
		const node = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
		this.gobbleSpaces();
		return this.runHook("after-expression", node);
	}
	gobbleBinaryOp() {
		this.gobbleSpaces();
		let to_check = this.expr.substr(this.index, Jsep.max_binop_len);
		let tc_len = to_check.length;
		while (tc_len > 0) {
			if (Jsep.binary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
				this.index += tc_len;
				return to_check;
			}
			to_check = to_check.substr(0, --tc_len);
		}
		return false;
	}
	gobbleBinaryExpression() {
		let node, biop, prec, stack, biop_info, left, right, i, cur_biop;
		left = this.gobbleToken();
		if (!left) return left;
		biop = this.gobbleBinaryOp();
		if (!biop) return left;
		biop_info = {
			value: biop,
			prec: Jsep.binaryPrecedence(biop),
			right_a: Jsep.right_associative.has(biop)
		};
		right = this.gobbleToken();
		if (!right) this.throwError("Expected expression after " + biop);
		stack = [
			left,
			biop_info,
			right
		];
		while (biop = this.gobbleBinaryOp()) {
			prec = Jsep.binaryPrecedence(biop);
			if (prec === 0) {
				this.index -= biop.length;
				break;
			}
			biop_info = {
				value: biop,
				prec,
				right_a: Jsep.right_associative.has(biop)
			};
			cur_biop = biop;
			const comparePrev = (prev) => biop_info.right_a && prev.right_a ? prec > prev.prec : prec <= prev.prec;
			while (stack.length > 2 && comparePrev(stack[stack.length - 2])) {
				right = stack.pop();
				biop = stack.pop().value;
				left = stack.pop();
				node = {
					type: Jsep.BINARY_EXP,
					operator: biop,
					left,
					right
				};
				stack.push(node);
			}
			node = this.gobbleToken();
			if (!node) this.throwError("Expected expression after " + cur_biop);
			stack.push(biop_info, node);
		}
		i = stack.length - 1;
		node = stack[i];
		while (i > 1) {
			node = {
				type: Jsep.BINARY_EXP,
				operator: stack[i - 1].value,
				left: stack[i - 2],
				right: node
			};
			i -= 2;
		}
		return node;
	}
	gobbleToken() {
		let ch, to_check, tc_len, node;
		this.gobbleSpaces();
		node = this.searchHook("gobble-token");
		if (node) return this.runHook("after-token", node);
		ch = this.code;
		if (Jsep.isDecimalDigit(ch) || ch === Jsep.PERIOD_CODE) return this.gobbleNumericLiteral();
		if (ch === Jsep.SQUOTE_CODE || ch === Jsep.DQUOTE_CODE) node = this.gobbleStringLiteral();
		else if (ch === Jsep.OBRACK_CODE) node = this.gobbleArray();
		else {
			to_check = this.expr.substr(this.index, Jsep.max_unop_len);
			tc_len = to_check.length;
			while (tc_len > 0) {
				if (Jsep.unary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
					this.index += tc_len;
					const argument = this.gobbleToken();
					if (!argument) this.throwError("missing unaryOp argument");
					return this.runHook("after-token", {
						type: Jsep.UNARY_EXP,
						operator: to_check,
						argument,
						prefix: true
					});
				}
				to_check = to_check.substr(0, --tc_len);
			}
			if (Jsep.isIdentifierStart(ch)) {
				node = this.gobbleIdentifier();
				if (Jsep.literals.hasOwnProperty(node.name)) node = {
					type: Jsep.LITERAL,
					value: Jsep.literals[node.name],
					raw: node.name
				};
				else if (node.name === Jsep.this_str) node = { type: Jsep.THIS_EXP };
			} else if (ch === Jsep.OPAREN_CODE) node = this.gobbleGroup();
		}
		if (!node) return this.runHook("after-token", false);
		node = this.gobbleTokenProperty(node);
		return this.runHook("after-token", node);
	}
	gobbleTokenProperty(node) {
		this.gobbleSpaces();
		let ch = this.code;
		while (ch === Jsep.PERIOD_CODE || ch === Jsep.OBRACK_CODE || ch === Jsep.OPAREN_CODE || ch === Jsep.QUMARK_CODE) {
			let optional;
			if (ch === Jsep.QUMARK_CODE) {
				if (this.expr.charCodeAt(this.index + 1) !== Jsep.PERIOD_CODE) break;
				optional = true;
				this.index += 2;
				this.gobbleSpaces();
				ch = this.code;
			}
			this.index++;
			if (ch === Jsep.OBRACK_CODE) {
				node = {
					type: Jsep.MEMBER_EXP,
					computed: true,
					object: node,
					property: this.gobbleExpression()
				};
				if (!node.property) this.throwError("Unexpected \"" + this.char + "\"");
				this.gobbleSpaces();
				ch = this.code;
				if (ch !== Jsep.CBRACK_CODE) this.throwError("Unclosed [");
				this.index++;
			} else if (ch === Jsep.OPAREN_CODE) node = {
				type: Jsep.CALL_EXP,
				"arguments": this.gobbleArguments(Jsep.CPAREN_CODE),
				callee: node
			};
			else if (ch === Jsep.PERIOD_CODE || optional) {
				if (optional) this.index--;
				this.gobbleSpaces();
				node = {
					type: Jsep.MEMBER_EXP,
					computed: false,
					object: node,
					property: this.gobbleIdentifier()
				};
			}
			if (optional) node.optional = true;
			this.gobbleSpaces();
			ch = this.code;
		}
		return node;
	}
	gobbleNumericLiteral() {
		let number = "", ch, chCode;
		while (Jsep.isDecimalDigit(this.code)) number += this.expr.charAt(this.index++);
		if (this.code === Jsep.PERIOD_CODE) {
			number += this.expr.charAt(this.index++);
			while (Jsep.isDecimalDigit(this.code)) number += this.expr.charAt(this.index++);
		}
		ch = this.char;
		if (ch === "e" || ch === "E") {
			number += this.expr.charAt(this.index++);
			ch = this.char;
			if (ch === "+" || ch === "-") number += this.expr.charAt(this.index++);
			while (Jsep.isDecimalDigit(this.code)) number += this.expr.charAt(this.index++);
			if (!Jsep.isDecimalDigit(this.expr.charCodeAt(this.index - 1))) this.throwError("Expected exponent (" + number + this.char + ")");
		}
		chCode = this.code;
		if (Jsep.isIdentifierStart(chCode)) this.throwError("Variable names cannot start with a number (" + number + this.char + ")");
		else if (chCode === Jsep.PERIOD_CODE || number.length === 1 && number.charCodeAt(0) === Jsep.PERIOD_CODE) this.throwError("Unexpected period");
		return {
			type: Jsep.LITERAL,
			value: parseFloat(number),
			raw: number
		};
	}
	gobbleStringLiteral() {
		let str = "";
		const startIndex = this.index;
		const quote = this.expr.charAt(this.index++);
		let closed = false;
		while (this.index < this.expr.length) {
			let ch = this.expr.charAt(this.index++);
			if (ch === quote) {
				closed = true;
				break;
			} else if (ch === "\\") {
				ch = this.expr.charAt(this.index++);
				switch (ch) {
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
					default: str += ch;
				}
			} else str += ch;
		}
		if (!closed) this.throwError("Unclosed quote after \"" + str + "\"");
		return {
			type: Jsep.LITERAL,
			value: str,
			raw: this.expr.substring(startIndex, this.index)
		};
	}
	gobbleIdentifier() {
		let ch = this.code, start = this.index;
		if (Jsep.isIdentifierStart(ch)) this.index++;
		else this.throwError("Unexpected " + this.char);
		while (this.index < this.expr.length) {
			ch = this.code;
			if (Jsep.isIdentifierPart(ch)) this.index++;
			else break;
		}
		return {
			type: Jsep.IDENTIFIER,
			name: this.expr.slice(start, this.index)
		};
	}
	gobbleArguments(termination) {
		const args = [];
		let closed = false;
		let separator_count = 0;
		while (this.index < this.expr.length) {
			this.gobbleSpaces();
			let ch_i = this.code;
			if (ch_i === termination) {
				closed = true;
				this.index++;
				if (termination === Jsep.CPAREN_CODE && separator_count && separator_count >= args.length) this.throwError("Unexpected token " + String.fromCharCode(termination));
				break;
			} else if (ch_i === Jsep.COMMA_CODE) {
				this.index++;
				separator_count++;
				if (separator_count !== args.length) {
					if (termination === Jsep.CPAREN_CODE) this.throwError("Unexpected token ,");
					else if (termination === Jsep.CBRACK_CODE) for (let arg = args.length; arg < separator_count; arg++) args.push(null);
				}
			} else if (args.length !== separator_count && separator_count !== 0) this.throwError("Expected comma");
			else {
				const node = this.gobbleExpression();
				if (!node || node.type === Jsep.COMPOUND) this.throwError("Expected comma");
				args.push(node);
			}
		}
		if (!closed) this.throwError("Expected " + String.fromCharCode(termination));
		return args;
	}
	gobbleGroup() {
		this.index++;
		let nodes = this.gobbleExpressions(Jsep.CPAREN_CODE);
		if (this.code === Jsep.CPAREN_CODE) {
			this.index++;
			if (nodes.length === 1) return nodes[0];
			else if (!nodes.length) return false;
			else return {
				type: Jsep.SEQUENCE_EXP,
				expressions: nodes
			};
		} else this.throwError("Unclosed (");
	}
	gobbleArray() {
		this.index++;
		return {
			type: Jsep.ARRAY_EXP,
			elements: this.gobbleArguments(Jsep.CBRACK_CODE)
		};
	}
};
var hooks = new Hooks();
Object.assign(Jsep, {
	hooks,
	plugins: new Plugins(Jsep),
	COMPOUND: "Compound",
	SEQUENCE_EXP: "SequenceExpression",
	IDENTIFIER: "Identifier",
	MEMBER_EXP: "MemberExpression",
	LITERAL: "Literal",
	THIS_EXP: "ThisExpression",
	CALL_EXP: "CallExpression",
	UNARY_EXP: "UnaryExpression",
	BINARY_EXP: "BinaryExpression",
	ARRAY_EXP: "ArrayExpression",
	TAB_CODE: 9,
	LF_CODE: 10,
	CR_CODE: 13,
	SPACE_CODE: 32,
	PERIOD_CODE: 46,
	COMMA_CODE: 44,
	SQUOTE_CODE: 39,
	DQUOTE_CODE: 34,
	OPAREN_CODE: 40,
	CPAREN_CODE: 41,
	OBRACK_CODE: 91,
	CBRACK_CODE: 93,
	QUMARK_CODE: 63,
	SEMCOL_CODE: 59,
	COLON_CODE: 58,
	unary_ops: {
		"-": 1,
		"!": 1,
		"~": 1,
		"+": 1
	},
	binary_ops: {
		"||": 1,
		"??": 1,
		"&&": 2,
		"|": 3,
		"^": 4,
		"&": 5,
		"==": 6,
		"!=": 6,
		"===": 6,
		"!==": 6,
		"<": 7,
		">": 7,
		"<=": 7,
		">=": 7,
		"<<": 8,
		">>": 8,
		">>>": 8,
		"+": 9,
		"-": 9,
		"*": 10,
		"/": 10,
		"%": 10,
		"**": 11
	},
	right_associative: new Set(["**"]),
	additional_identifier_chars: new Set(["$", "_"]),
	literals: {
		"true": true,
		"false": false,
		"null": null
	},
	this_str: "this"
});
Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
var jsep = (expr) => new Jsep(expr).parse();
var stdClassProps = Object.getOwnPropertyNames(class Test {});
Object.getOwnPropertyNames(Jsep).filter((prop) => !stdClassProps.includes(prop) && jsep[prop] === void 0).forEach((m) => {
	jsep[m] = Jsep[m];
});
jsep.Jsep = Jsep;
var CONDITIONAL_EXP = "ConditionalExpression";
jsep.plugins.register({
	name: "ternary",
	init(jsep$1) {
		jsep$1.hooks.add("after-expression", function gobbleTernary(env) {
			if (env.node && this.code === jsep$1.QUMARK_CODE) {
				this.index++;
				const test = env.node;
				const consequent = this.gobbleExpression();
				if (!consequent) this.throwError("Expected expression");
				this.gobbleSpaces();
				if (this.code === jsep$1.COLON_CODE) {
					this.index++;
					const alternate = this.gobbleExpression();
					if (!alternate) this.throwError("Expected expression");
					env.node = {
						type: CONDITIONAL_EXP,
						test,
						consequent,
						alternate
					};
					if (test.operator && jsep$1.binary_ops[test.operator] <= .9) {
						let newTest = test;
						while (newTest.right.operator && jsep$1.binary_ops[newTest.right.operator] <= .9) newTest = newTest.right;
						env.node.test = newTest.right;
						newTest.right = env.node;
						env.node = test;
					}
				} else this.throwError("Expected :");
			}
		});
	}
});
var FSLASH_CODE = 47;
var BSLASH_CODE = 92;
var index = {
	name: "regex",
	init(jsep$1) {
		jsep$1.hooks.add("gobble-token", function gobbleRegexLiteral(env) {
			if (this.code === FSLASH_CODE) {
				const patternIndex = ++this.index;
				let inCharSet = false;
				while (this.index < this.expr.length) {
					if (this.code === FSLASH_CODE && !inCharSet) {
						const pattern = this.expr.slice(patternIndex, this.index);
						let flags = "";
						while (++this.index < this.expr.length) {
							const code = this.code;
							if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57) flags += this.char;
							else break;
						}
						let value;
						try {
							value = new RegExp(pattern, flags);
						} catch (e) {
							this.throwError(e.message);
						}
						env.node = {
							type: jsep$1.LITERAL,
							value,
							raw: this.expr.slice(patternIndex - 1, this.index)
						};
						env.node = this.gobbleTokenProperty(env.node);
						return env.node;
					}
					if (this.code === jsep$1.OBRACK_CODE) inCharSet = true;
					else if (inCharSet && this.code === jsep$1.CBRACK_CODE) inCharSet = false;
					this.index += this.code === BSLASH_CODE ? 2 : 1;
				}
				this.throwError("Unclosed Regex");
			}
		});
	}
};
var PLUS_CODE = 43;
var plugin = {
	name: "assignment",
	assignmentOperators: new Set([
		"=",
		"*=",
		"**=",
		"/=",
		"%=",
		"+=",
		"-=",
		"<<=",
		">>=",
		">>>=",
		"&=",
		"^=",
		"|=",
		"||=",
		"&&=",
		"??="
	]),
	updateOperators: [PLUS_CODE, 45],
	assignmentPrecedence: .9,
	init(jsep$1) {
		const updateNodeTypes = [jsep$1.IDENTIFIER, jsep$1.MEMBER_EXP];
		plugin.assignmentOperators.forEach((op) => jsep$1.addBinaryOp(op, plugin.assignmentPrecedence, true));
		jsep$1.hooks.add("gobble-token", function gobbleUpdatePrefix(env) {
			const code = this.code;
			if (plugin.updateOperators.some((c) => c === code && c === this.expr.charCodeAt(this.index + 1))) {
				this.index += 2;
				env.node = {
					type: "UpdateExpression",
					operator: code === PLUS_CODE ? "++" : "--",
					argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
					prefix: true
				};
				if (!env.node.argument || !updateNodeTypes.includes(env.node.argument.type)) this.throwError(`Unexpected ${env.node.operator}`);
			}
		});
		jsep$1.hooks.add("after-token", function gobbleUpdatePostfix(env) {
			if (env.node) {
				const code = this.code;
				if (plugin.updateOperators.some((c) => c === code && c === this.expr.charCodeAt(this.index + 1))) {
					if (!updateNodeTypes.includes(env.node.type)) this.throwError(`Unexpected ${env.node.operator}`);
					this.index += 2;
					env.node = {
						type: "UpdateExpression",
						operator: code === PLUS_CODE ? "++" : "--",
						argument: env.node,
						prefix: false
					};
				}
			}
		});
		jsep$1.hooks.add("after-expression", function gobbleAssignment(env) {
			if (env.node) updateBinariesToAssignments(env.node);
		});
		function updateBinariesToAssignments(node) {
			if (plugin.assignmentOperators.has(node.operator)) {
				node.type = "AssignmentExpression";
				updateBinariesToAssignments(node.left);
				updateBinariesToAssignments(node.right);
			} else if (!node.operator) Object.values(node).forEach((val) => {
				if (val && typeof val === "object") updateBinariesToAssignments(val);
			});
		}
	}
};
jsep.plugins.register(index, plugin);
jsep.addUnaryOp("typeof");
jsep.addUnaryOp("void");
jsep.addLiteral("null", null);
jsep.addLiteral("undefined", void 0);
var BLOCKED_PROTO_PROPERTIES = new Set([
	"constructor",
	"__proto__",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
]);
var SafeEval = {
	evalAst(ast, subs) {
		switch (ast.type) {
			case "BinaryExpression":
			case "LogicalExpression": return SafeEval.evalBinaryExpression(ast, subs);
			case "Compound": return SafeEval.evalCompound(ast, subs);
			case "ConditionalExpression": return SafeEval.evalConditionalExpression(ast, subs);
			case "Identifier": return SafeEval.evalIdentifier(ast, subs);
			case "Literal": return SafeEval.evalLiteral(ast, subs);
			case "MemberExpression": return SafeEval.evalMemberExpression(ast, subs);
			case "UnaryExpression": return SafeEval.evalUnaryExpression(ast, subs);
			case "ArrayExpression": return SafeEval.evalArrayExpression(ast, subs);
			case "CallExpression": return SafeEval.evalCallExpression(ast, subs);
			case "AssignmentExpression": return SafeEval.evalAssignmentExpression(ast, subs);
			default: throw SyntaxError("Unexpected expression", ast);
		}
	},
	evalBinaryExpression(ast, subs) {
		return {
			"||": (a, b) => a || b(),
			"&&": (a, b) => a && b(),
			"|": (a, b) => a | b(),
			"^": (a, b) => a ^ b(),
			"&": (a, b) => a & b(),
			"==": (a, b) => a == b(),
			"!=": (a, b) => a != b(),
			"===": (a, b) => a === b(),
			"!==": (a, b) => a !== b(),
			"<": (a, b) => a < b(),
			">": (a, b) => a > b(),
			"<=": (a, b) => a <= b(),
			">=": (a, b) => a >= b(),
			"<<": (a, b) => a << b(),
			">>": (a, b) => a >> b(),
			">>>": (a, b) => a >>> b(),
			"+": (a, b) => a + b(),
			"-": (a, b) => a - b(),
			"*": (a, b) => a * b(),
			"/": (a, b) => a / b(),
			"%": (a, b) => a % b()
		}[ast.operator](SafeEval.evalAst(ast.left, subs), () => SafeEval.evalAst(ast.right, subs));
	},
	evalCompound(ast, subs) {
		let last;
		for (let i = 0; i < ast.body.length; i++) {
			if (ast.body[i].type === "Identifier" && [
				"var",
				"let",
				"const"
			].includes(ast.body[i].name) && ast.body[i + 1] && ast.body[i + 1].type === "AssignmentExpression") i += 1;
			const expr = ast.body[i];
			last = SafeEval.evalAst(expr, subs);
		}
		return last;
	},
	evalConditionalExpression(ast, subs) {
		if (SafeEval.evalAst(ast.test, subs)) return SafeEval.evalAst(ast.consequent, subs);
		return SafeEval.evalAst(ast.alternate, subs);
	},
	evalIdentifier(ast, subs) {
		if (Object.hasOwn(subs, ast.name)) return subs[ast.name];
		throw ReferenceError(`${ast.name} is not defined`);
	},
	evalLiteral(ast) {
		return ast.value;
	},
	evalMemberExpression(ast, subs) {
		const prop = String(ast.computed ? SafeEval.evalAst(ast.property) : ast.property.name);
		const obj = SafeEval.evalAst(ast.object, subs);
		if (obj === void 0 || obj === null) throw TypeError(`Cannot read properties of ${obj} (reading '${prop}')`);
		if (!Object.hasOwn(obj, prop) && BLOCKED_PROTO_PROPERTIES.has(prop)) throw TypeError(`Cannot read properties of ${obj} (reading '${prop}')`);
		const result = obj[prop];
		if (typeof result === "function") return result.bind(obj);
		return result;
	},
	evalUnaryExpression(ast, subs) {
		return {
			"-": (a) => -SafeEval.evalAst(a, subs),
			"!": (a) => !SafeEval.evalAst(a, subs),
			"~": (a) => ~SafeEval.evalAst(a, subs),
			"+": (a) => +SafeEval.evalAst(a, subs),
			typeof: (a) => typeof SafeEval.evalAst(a, subs),
			void: (a) => void SafeEval.evalAst(a, subs)
		}[ast.operator](ast.argument);
	},
	evalArrayExpression(ast, subs) {
		return ast.elements.map((el) => SafeEval.evalAst(el, subs));
	},
	evalCallExpression(ast, subs) {
		const args = ast.arguments.map((arg) => SafeEval.evalAst(arg, subs));
		const func = SafeEval.evalAst(ast.callee, subs);
		/* c8 ignore start  */
		if (func === Function) throw new Error("Function constructor is disabled");
		/* c8 ignore end  */
		return func(...args);
	},
	evalAssignmentExpression(ast, subs) {
		if (ast.left.type !== "Identifier") throw SyntaxError("Invalid left-hand side in assignment");
		const id = ast.left.name;
		subs[id] = SafeEval.evalAst(ast.right, subs);
		return subs[id];
	}
};
var SafeScript = class {
	constructor(expr) {
		this.code = expr;
		this.ast = jsep(this.code);
	}
	runInNewContext(context) {
		const keyMap = Object.assign(Object.create(null), context);
		return SafeEval.evalAst(this.ast, keyMap);
	}
};
function push(arr, item) {
	arr = arr.slice();
	arr.push(item);
	return arr;
}
function unshift(item, arr) {
	arr = arr.slice();
	arr.unshift(item);
	return arr;
}
var NewError = class extends Error {
	constructor(value) {
		super("JSONPath should not be called with \"new\" (it prevents return of (unwrapped) scalar values)");
		this.avoidNew = true;
		this.value = value;
		this.name = "NewError";
	}
};
function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
	if (!(this instanceof JSONPath)) try {
		return new JSONPath(opts, expr, obj, callback, otherTypeCallback);
	} catch (e) {
		if (!e.avoidNew) throw e;
		return e.value;
	}
	if (typeof opts === "string") {
		otherTypeCallback = callback;
		callback = obj;
		obj = expr;
		expr = opts;
		opts = null;
	}
	const optObj = opts && typeof opts === "object";
	opts = opts || {};
	this.json = opts.json || obj;
	this.path = opts.path || expr;
	this.resultType = opts.resultType || "value";
	this.flatten = opts.flatten || false;
	this.wrap = Object.hasOwn(opts, "wrap") ? opts.wrap : true;
	this.sandbox = opts.sandbox || {};
	this.eval = opts.eval === void 0 ? "safe" : opts.eval;
	this.ignoreEvalErrors = typeof opts.ignoreEvalErrors === "undefined" ? false : opts.ignoreEvalErrors;
	this.parent = opts.parent || null;
	this.parentProperty = opts.parentProperty || null;
	this.callback = opts.callback || callback || null;
	this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function() {
		throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
	};
	if (opts.autostart !== false) {
		const args = { path: optObj ? opts.path : expr };
		if (!optObj) args.json = obj;
		else if ("json" in opts) args.json = opts.json;
		const ret = this.evaluate(args);
		if (!ret || typeof ret !== "object") throw new NewError(ret);
		return ret;
	}
}
JSONPath.prototype.evaluate = function(expr, json, callback, otherTypeCallback) {
	let currParent = this.parent, currParentProperty = this.parentProperty;
	let { flatten, wrap } = this;
	this.currResultType = this.resultType;
	this.currEval = this.eval;
	this.currSandbox = this.sandbox;
	callback = callback || this.callback;
	this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
	json = json || this.json;
	expr = expr || this.path;
	if (expr && typeof expr === "object" && !Array.isArray(expr)) {
		if (!expr.path && expr.path !== "") throw new TypeError("You must supply a \"path\" property when providing an object argument to JSONPath.evaluate().");
		if (!Object.hasOwn(expr, "json")) throw new TypeError("You must supply a \"json\" property when providing an object argument to JSONPath.evaluate().");
		({json} = expr);
		flatten = Object.hasOwn(expr, "flatten") ? expr.flatten : flatten;
		this.currResultType = Object.hasOwn(expr, "resultType") ? expr.resultType : this.currResultType;
		this.currSandbox = Object.hasOwn(expr, "sandbox") ? expr.sandbox : this.currSandbox;
		wrap = Object.hasOwn(expr, "wrap") ? expr.wrap : wrap;
		this.currEval = Object.hasOwn(expr, "eval") ? expr.eval : this.currEval;
		callback = Object.hasOwn(expr, "callback") ? expr.callback : callback;
		this.currOtherTypeCallback = Object.hasOwn(expr, "otherTypeCallback") ? expr.otherTypeCallback : this.currOtherTypeCallback;
		currParent = Object.hasOwn(expr, "parent") ? expr.parent : currParent;
		currParentProperty = Object.hasOwn(expr, "parentProperty") ? expr.parentProperty : currParentProperty;
		expr = expr.path;
	}
	currParent = currParent || null;
	currParentProperty = currParentProperty || null;
	if (Array.isArray(expr)) expr = JSONPath.toPathString(expr);
	if (!expr && expr !== "" || !json) return;
	const exprList = JSONPath.toPathArray(expr);
	if (exprList[0] === "$" && exprList.length > 1) exprList.shift();
	this._hasParentSelector = null;
	const result = this._trace(exprList, json, ["$"], currParent, currParentProperty, callback).filter(function(ea) {
		return ea && !ea.isParentSelector;
	});
	if (!result.length) return wrap ? [] : void 0;
	if (!wrap && result.length === 1 && !result[0].hasArrExpr) return this._getPreferredOutput(result[0]);
	return result.reduce((rslt, ea) => {
		const valOrPath = this._getPreferredOutput(ea);
		if (flatten && Array.isArray(valOrPath)) rslt = rslt.concat(valOrPath);
		else rslt.push(valOrPath);
		return rslt;
	}, []);
};
JSONPath.prototype._getPreferredOutput = function(ea) {
	const resultType = this.currResultType;
	switch (resultType) {
		case "all": {
			const path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
			ea.pointer = JSONPath.toPointer(path);
			ea.path = typeof ea.path === "string" ? ea.path : JSONPath.toPathString(ea.path);
			return ea;
		}
		case "value":
		case "parent":
		case "parentProperty": return ea[resultType];
		case "path": return JSONPath.toPathString(ea[resultType]);
		case "pointer": return JSONPath.toPointer(ea.path);
		default: throw new TypeError("Unknown result type");
	}
};
JSONPath.prototype._handleCallback = function(fullRetObj, callback, type) {
	if (callback) {
		const preferredOutput = this._getPreferredOutput(fullRetObj);
		fullRetObj.path = typeof fullRetObj.path === "string" ? fullRetObj.path : JSONPath.toPathString(fullRetObj.path);
		callback(preferredOutput, type, fullRetObj);
	}
};
JSONPath.prototype._trace = function(expr, val, path, parent, parentPropName, callback, hasArrExpr, literalPriority) {
	let retObj;
	if (!expr.length) {
		retObj = {
			path,
			value: val,
			parent,
			parentProperty: parentPropName,
			hasArrExpr
		};
		this._handleCallback(retObj, callback, "value");
		return retObj;
	}
	const loc = expr[0], x = expr.slice(1);
	const ret = [];
	function addRet(elems) {
		if (Array.isArray(elems)) elems.forEach((t) => {
			ret.push(t);
		});
		else ret.push(elems);
	}
	if ((typeof loc !== "string" || literalPriority) && val && Object.hasOwn(val, loc)) addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr));
	else if (loc === "*") this._walk(val, (m) => {
		addRet(this._trace(x, val[m], push(path, m), val, m, callback, true, true));
	});
	else if (loc === "..") {
		addRet(this._trace(x, val, path, parent, parentPropName, callback, hasArrExpr));
		this._walk(val, (m) => {
			if (typeof val[m] === "object") addRet(this._trace(expr.slice(), val[m], push(path, m), val, m, callback, true));
		});
	} else if (loc === "^") {
		this._hasParentSelector = true;
		return {
			path: path.slice(0, -1),
			expr: x,
			isParentSelector: true
		};
	} else if (loc === "~") {
		retObj = {
			path: push(path, loc),
			value: parentPropName,
			parent,
			parentProperty: null
		};
		this._handleCallback(retObj, callback, "property");
		return retObj;
	} else if (loc === "$") addRet(this._trace(x, val, path, null, null, callback, hasArrExpr));
	else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(loc)) addRet(this._slice(loc, x, val, path, parent, parentPropName, callback));
	else if (loc.indexOf("?(") === 0) {
		if (this.currEval === false) throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
		const safeLoc = loc.replace(/^\?\((.*?)\)$/u, "$1");
		const nested = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(safeLoc);
		if (nested) this._walk(val, (m) => {
			const npath = [nested[2]];
			const nvalue = nested[1] ? val[m][nested[1]] : val[m];
			if (this._trace(npath, nvalue, path, parent, parentPropName, callback, true).length > 0) addRet(this._trace(x, val[m], push(path, m), val, m, callback, true));
		});
		else this._walk(val, (m) => {
			if (this._eval(safeLoc, val[m], m, path, parent, parentPropName)) addRet(this._trace(x, val[m], push(path, m), val, m, callback, true));
		});
	} else if (loc[0] === "(") {
		if (this.currEval === false) throw new Error("Eval [(expr)] prevented in JSONPath expression.");
		addRet(this._trace(unshift(this._eval(loc, val, path.at(-1), path.slice(0, -1), parent, parentPropName), x), val, path, parent, parentPropName, callback, hasArrExpr));
	} else if (loc[0] === "@") {
		let addType = false;
		const valueType = loc.slice(1, -2);
		switch (valueType) {
			case "scalar":
				if (!val || !["object", "function"].includes(typeof val)) addType = true;
				break;
			case "boolean":
			case "string":
			case "undefined":
			case "function":
				if (typeof val === valueType) addType = true;
				break;
			case "integer":
				if (Number.isFinite(val) && !(val % 1)) addType = true;
				break;
			case "number":
				if (Number.isFinite(val)) addType = true;
				break;
			case "nonFinite":
				if (typeof val === "number" && !Number.isFinite(val)) addType = true;
				break;
			case "object":
				if (val && typeof val === valueType) addType = true;
				break;
			case "array":
				if (Array.isArray(val)) addType = true;
				break;
			case "other":
				addType = this.currOtherTypeCallback(val, path, parent, parentPropName);
				break;
			case "null":
				if (val === null) addType = true;
				break;
			default: throw new TypeError("Unknown value type " + valueType);
		}
		if (addType) {
			retObj = {
				path,
				value: val,
				parent,
				parentProperty: parentPropName
			};
			this._handleCallback(retObj, callback, "value");
			return retObj;
		}
	} else if (loc[0] === "`" && val && Object.hasOwn(val, loc.slice(1))) {
		const locProp = loc.slice(1);
		addRet(this._trace(x, val[locProp], push(path, locProp), val, locProp, callback, hasArrExpr, true));
	} else if (loc.includes(",")) {
		const parts = loc.split(",");
		for (const part of parts) addRet(this._trace(unshift(part, x), val, path, parent, parentPropName, callback, true));
	} else if (!literalPriority && val && Object.hasOwn(val, loc)) addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr, true));
	if (this._hasParentSelector) for (let t = 0; t < ret.length; t++) {
		const rett = ret[t];
		if (rett && rett.isParentSelector) {
			const tmp = this._trace(rett.expr, val, rett.path, parent, parentPropName, callback, hasArrExpr);
			if (Array.isArray(tmp)) {
				ret[t] = tmp[0];
				const tl = tmp.length;
				for (let tt = 1; tt < tl; tt++) {
					t++;
					ret.splice(t, 0, tmp[tt]);
				}
			} else ret[t] = tmp;
		}
	}
	return ret;
};
JSONPath.prototype._walk = function(val, f) {
	if (Array.isArray(val)) {
		const n = val.length;
		for (let i = 0; i < n; i++) f(i);
	} else if (val && typeof val === "object") Object.keys(val).forEach((m) => {
		f(m);
	});
};
JSONPath.prototype._slice = function(loc, expr, val, path, parent, parentPropName, callback) {
	if (!Array.isArray(val)) return;
	const len = val.length, parts = loc.split(":"), step = parts[2] && Number.parseInt(parts[2]) || 1;
	let start = parts[0] && Number.parseInt(parts[0]) || 0, end = parts[1] && Number.parseInt(parts[1]) || len;
	start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
	end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
	const ret = [];
	for (let i = start; i < end; i += step) this._trace(unshift(i, expr), val, path, parent, parentPropName, callback, true).forEach((t) => {
		ret.push(t);
	});
	return ret;
};
JSONPath.prototype._eval = function(code, _v, _vname, path, parent, parentPropName) {
	this.currSandbox._$_parentProperty = parentPropName;
	this.currSandbox._$_parent = parent;
	this.currSandbox._$_property = _vname;
	this.currSandbox._$_root = this.json;
	this.currSandbox._$_v = _v;
	const containsPath = code.includes("@path");
	if (containsPath) this.currSandbox._$_path = JSONPath.toPathString(path.concat([_vname]));
	const scriptCacheKey = this.currEval + "Script:" + code;
	if (!JSONPath.cache[scriptCacheKey]) {
		let script = code.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
		if (containsPath) script = script.replaceAll("@path", "_$_path");
		if (this.currEval === "safe" || this.currEval === true || this.currEval === void 0) JSONPath.cache[scriptCacheKey] = new this.safeVm.Script(script);
		else if (this.currEval === "native") JSONPath.cache[scriptCacheKey] = new this.vm.Script(script);
		else if (typeof this.currEval === "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
			const CurrEval = this.currEval;
			JSONPath.cache[scriptCacheKey] = new CurrEval(script);
		} else if (typeof this.currEval === "function") JSONPath.cache[scriptCacheKey] = { runInNewContext: (context) => this.currEval(script, context) };
		else throw new TypeError(`Unknown "eval" property "${this.currEval}"`);
	}
	try {
		return JSONPath.cache[scriptCacheKey].runInNewContext(this.currSandbox);
	} catch (e) {
		if (this.ignoreEvalErrors) return false;
		throw new Error("jsonPath: " + e.message + ": " + code);
	}
};
JSONPath.cache = {};
JSONPath.toPathString = function(pathArr) {
	const x = pathArr, n = x.length;
	let p = "$";
	for (let i = 1; i < n; i++) if (!/^(~|\^|@.*?\(\))$/u.test(x[i])) p += /^[0-9*]+$/u.test(x[i]) ? "[" + x[i] + "]" : "['" + x[i] + "']";
	return p;
};
JSONPath.toPointer = function(pointer) {
	const x = pointer, n = x.length;
	let p = "";
	for (let i = 1; i < n; i++) if (!/^(~|\^|@.*?\(\))$/u.test(x[i])) p += "/" + x[i].toString().replaceAll("~", "~0").replaceAll("/", "~1");
	return p;
};
JSONPath.toPathArray = function(expr) {
	const { cache } = JSONPath;
	if (cache[expr]) return cache[expr].concat();
	const subx = [];
	cache[expr] = expr.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu, ";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu, function($0, $1) {
		return "[#" + (subx.push($1) - 1) + "]";
	}).replaceAll(/\[['"]([^'\]]*)['"]\]/gu, function($0, prop) {
		return "['" + prop.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']";
	}).replaceAll("~", ";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu, ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(/(?:;)?(\^+)(?:;)?/gu, function($0, ups) {
		return ";" + ups.split("").join(";") + ";";
	}).replaceAll(/;;;|;;/gu, ";..;").replaceAll(/;$|'?\]|'$/gu, "").split(";").map(function(exp) {
		const match = exp.match(/#(\d+)/u);
		return !match || !match[1] ? exp : subx[match[1]];
	});
	return cache[expr].concat();
};
JSONPath.prototype.safeVm = { Script: SafeScript };
var moveToAnotherArray = function(source, target, conditionCb) {
	const il = source.length;
	for (let i = 0; i < il; i++) {
		const item = source[i];
		if (conditionCb(item)) target.push(source.splice(i--, 1)[0]);
	}
};
var Script = class {
	constructor(expr) {
		this.code = expr;
	}
	runInNewContext(context) {
		let expr = this.code;
		const keys = Object.keys(context);
		const funcs = [];
		moveToAnotherArray(keys, funcs, (key) => {
			return typeof context[key] === "function";
		});
		const values = keys.map((vr) => {
			return context[vr];
		});
		expr = funcs.reduce((s, func) => {
			let fString = context[func].toString();
			if (!/function/u.test(fString)) fString = "function " + fString;
			return "var " + func + "=" + fString + ";" + s;
		}, "") + expr;
		if (!/(['"])use strict\1/u.test(expr) && !keys.includes("arguments")) expr = "var arguments = undefined;" + expr;
		expr = expr.replace(/;\s*$/u, "");
		const lastStatementEnd = expr.lastIndexOf(";");
		const code = lastStatementEnd !== -1 ? expr.slice(0, lastStatementEnd + 1) + " return " + expr.slice(lastStatementEnd + 1) : " return " + expr;
		return new Function(...keys, code)(...values);
	}
};
JSONPath.prototype.vm = { Script };
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
		runIndex: {},
		execution: {}
	},
	setup(__props) {
		const props = __props;
		const popOutWindow = inject(PopOutWindowKey, ref());
		const isInPopOutWindow = computed(() => popOutWindow?.value !== void 0);
		const workflowId = useInjectWorkflowId();
		const ndvStore = useNDVStore();
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
				else selectedValue = executionDataToJson(nodeHelpers.getNodeInputData(props.node, props.runIndex, props.outputIndex, "output", NodeConnectionTypes.Main, props.execution));
			} else selectedValue = JSONPath({
				path: normalisedJsonPath.value.startsWith("$") ? normalisedJsonPath.value : `$${normalisedJsonPath.value}`,
				json: props.jsonData
			})[0];
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
			const index$1 = pathParts[0].slice(1);
			path = pathParts.slice(1).join("]");
			startPath = `$item(${index$1}).$node["${props.node.name}"].json`;
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
				workflow_id: workflowId.value,
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
				variant: "subtle",
				title: unref(i18n).baseText("runData.copyToClipboard"),
				icon: "files",
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
					variant: "subtle",
					title: unref(i18n).baseText("runData.copyToClipboard"),
					icon: "files",
					circle: false
				}, null, 8, ["title"])])]),
				_: 1
			}, 8, ["teleported"]))], 2);
		};
	}
});
var RunDataJsonActions_vue_vue_type_style_index_0_lang_module_default = { actionsGroup: "_actionsGroup_1eyin_125" };
var RunDataJsonActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataJsonActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJsonActions_vue_vue_type_style_index_0_lang_module_default }]]);
export { RunDataJsonActions_default as default };
