;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js"], function (_export, _context) {
    "use strict";

    var __commonJS, require_core;
    return {
      setters: [function (_chunkLegacy001Js) {
        __commonJS = _chunkLegacy001Js.t;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/core.js
        _export("t", require_core = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/core.js": (exports, module) => {
            function deepFreeze(obj) {
              if (obj instanceof Map) obj.clear = obj.delete = obj.set = function () {
                throw new Error("map is read-only");
              };else if (obj instanceof Set) obj.add = obj.clear = obj.delete = function () {
                throw new Error("set is read-only");
              };
              Object.freeze(obj);
              Object.getOwnPropertyNames(obj).forEach(name => {
                const prop = obj[name];
                const type = typeof prop;
                if ((type === "object" || type === "function") && !Object.isFrozen(prop)) deepFreeze(prop);
              });
              return obj;
            }
            /** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
            /** @typedef {import('highlight.js').CompiledMode} CompiledMode */
            /** @implements CallbackResponse */
            var Response = class {
              /**
              * @param {CompiledMode} mode
              */
              constructor(mode) {
                if (mode.data === void 0) mode.data = {};
                this.data = mode.data;
                this.isMatchIgnored = false;
              }
              ignoreMatch() {
                this.isMatchIgnored = true;
              }
            };
            /**
            * @param {string} value
            * @returns {string}
            */
            function escapeHTML(value) {
              return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
            }
            /**
            * performs a shallow merge of multiple objects into one
            *
            * @template T
            * @param {T} original
            * @param {Record<string,any>[]} objects
            * @returns {T} a single new object
            */
            function inherit$1(original, ...objects) {
              /** @type Record<string,any> */
              const result = Object.create(null);
              for (const key in original) result[key] = original[key];
              objects.forEach(function (obj) {
                for (const key in obj) result[key] = obj[key];
              });
              return result;
            }
            /**
            * @typedef {object} Renderer
            * @property {(text: string) => void} addText
            * @property {(node: Node) => void} openNode
            * @property {(node: Node) => void} closeNode
            * @property {() => string} value
            */
            /** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
            /** @typedef {{walk: (r: Renderer) => void}} Tree */
            /** */
            var SPAN_CLOSE = "</span>";
            /**
            * Determines if a node needs to be wrapped in <span>
            *
            * @param {Node} node */
            var emitsWrappingTags = node => {
              return !!node.scope;
            };
            /**
            *
            * @param {string} name
            * @param {{prefix:string}} options
            */
            var scopeToCSSClass = (name, {
              prefix
            }) => {
              if (name.startsWith("language:")) return name.replace("language:", "language-");
              if (name.includes(".")) {
                const pieces = name.split(".");
                return [`${prefix}${pieces.shift()}`, ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)].join(" ");
              }
              return `${prefix}${name}`;
            };
            /** @type {Renderer} */
            var HTMLRenderer = class {
              /**
              * Creates a new HTMLRenderer
              *
              * @param {Tree} parseTree - the parse tree (must support `walk` API)
              * @param {{classPrefix: string}} options
              */
              constructor(parseTree, options) {
                this.buffer = "";
                this.classPrefix = options.classPrefix;
                parseTree.walk(this);
              }
              /**
              * Adds texts to the output stream
              *
              * @param {string} text */
              addText(text) {
                this.buffer += escapeHTML(text);
              }
              /**
              * Adds a node open to the output stream (if needed)
              *
              * @param {Node} node */
              openNode(node) {
                if (!emitsWrappingTags(node)) return;
                const className = scopeToCSSClass(node.scope, {
                  prefix: this.classPrefix
                });
                this.span(className);
              }
              /**
              * Adds a node close to the output stream (if needed)
              *
              * @param {Node} node */
              closeNode(node) {
                if (!emitsWrappingTags(node)) return;
                this.buffer += SPAN_CLOSE;
              }
              /**
              * returns the accumulated buffer
              */
              value() {
                return this.buffer;
              }
              /**
              * Builds a span element
              *
              * @param {string} className */
              span(className) {
                this.buffer += `<span class="${className}">`;
              }
            };
            /** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
            /** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
            /** @typedef {import('highlight.js').Emitter} Emitter */
            /**  */
            /** @returns {DataNode} */
            var newNode = (opts = {}) => {
              /** @type DataNode */
              const result = {
                children: []
              };
              Object.assign(result, opts);
              return result;
            };
            var TokenTree = class TokenTree {
              constructor() {
                /** @type DataNode */
                this.rootNode = newNode();
                this.stack = [this.rootNode];
              }
              get top() {
                return this.stack[this.stack.length - 1];
              }
              get root() {
                return this.rootNode;
              }
              /** @param {Node} node */
              add(node) {
                this.top.children.push(node);
              }
              /** @param {string} scope */
              openNode(scope) {
                /** @type Node */
                const node = newNode({
                  scope
                });
                this.add(node);
                this.stack.push(node);
              }
              closeNode() {
                if (this.stack.length > 1) return this.stack.pop();
              }
              closeAllNodes() {
                while (this.closeNode());
              }
              toJSON() {
                return JSON.stringify(this.rootNode, null, 4);
              }
              /**
              * @typedef { import("./html_renderer").Renderer } Renderer
              * @param {Renderer} builder
              */
              walk(builder) {
                return this.constructor._walk(builder, this.rootNode);
              }
              /**
              * @param {Renderer} builder
              * @param {Node} node
              */
              static _walk(builder, node) {
                if (typeof node === "string") builder.addText(node);else if (node.children) {
                  builder.openNode(node);
                  node.children.forEach(child => this._walk(builder, child));
                  builder.closeNode(node);
                }
                return builder;
              }
              /**
              * @param {Node} node
              */
              static _collapse(node) {
                if (typeof node === "string") return;
                if (!node.children) return;
                if (node.children.every(el => typeof el === "string")) node.children = [node.children.join("")];else node.children.forEach(child => {
                  TokenTree._collapse(child);
                });
              }
            };
            /**
            Currently this is all private API, but this is the minimal API necessary
            that an Emitter must implement to fully support the parser.
            
            Minimal interface:
            
            - addText(text)
            - __addSublanguage(emitter, subLanguageName)
            - startScope(scope)
            - endScope()
            - finalize()
            - toHTML()
            
            */
            /**
            * @implements {Emitter}
            */
            var TokenTreeEmitter = class extends TokenTree {
              /**
              * @param {*} options
              */
              constructor(options) {
                super();
                this.options = options;
              }
              /**
              * @param {string} text
              */
              addText(text) {
                if (text === "") return;
                this.add(text);
              }
              /** @param {string} scope */
              startScope(scope) {
                this.openNode(scope);
              }
              endScope() {
                this.closeNode();
              }
              /**
              * @param {Emitter & {root: DataNode}} emitter
              * @param {string} name
              */
              __addSublanguage(emitter, name) {
                /** @type DataNode */
                const node = emitter.root;
                if (name) node.scope = `language:${name}`;
                this.add(node);
              }
              toHTML() {
                return new HTMLRenderer(this, this.options).value();
              }
              finalize() {
                this.closeAllNodes();
                return true;
              }
            };
            /**
            * @param {string} value
            * @returns {RegExp}
            * */
            /**
            * @param {RegExp | string } re
            * @returns {string}
            */
            function source(re) {
              if (!re) return null;
              if (typeof re === "string") return re;
              return re.source;
            }
            /**
            * @param {RegExp | string } re
            * @returns {string}
            */
            function lookahead(re) {
              return concat("(?=", re, ")");
            }
            /**
            * @param {RegExp | string } re
            * @returns {string}
            */
            function anyNumberOfTimes(re) {
              return concat("(?:", re, ")*");
            }
            /**
            * @param {RegExp | string } re
            * @returns {string}
            */
            function optional(re) {
              return concat("(?:", re, ")?");
            }
            /**
            * @param {...(RegExp | string) } args
            * @returns {string}
            */
            function concat(...args) {
              return args.map(x => source(x)).join("");
            }
            /**
            * @param { Array<string | RegExp | Object> } args
            * @returns {object}
            */
            function stripOptionsFromArgs(args) {
              const opts = args[args.length - 1];
              if (typeof opts === "object" && opts.constructor === Object) {
                args.splice(args.length - 1, 1);
                return opts;
              } else return {};
            }
            /** @typedef { {capture?: boolean} } RegexEitherOptions */
            /**
            * Any of the passed expresssions may match
            *
            * Creates a huge this | this | that | that match
            * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
            * @returns {string}
            */
            function either(...args) {
              return "(" + (stripOptionsFromArgs(args).capture ? "" : "?:") + args.map(x => source(x)).join("|") + ")";
            }
            /**
            * @param {RegExp | string} re
            * @returns {number}
            */
            function countMatchGroups(re) {
              return (/* @__PURE__ */new RegExp(re.toString() + "|")).exec("").length - 1;
            }
            /**
            * Does lexeme start with a regular expression match at the beginning
            * @param {RegExp} re
            * @param {string} lexeme
            */
            function startsWith(re, lexeme) {
              const match = re && re.exec(lexeme);
              return match && match.index === 0;
            }
            var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
            /**
            * @param {(string | RegExp)[]} regexps
            * @param {{joinWith: string}} opts
            * @returns {string}
            */
            function _rewriteBackreferences(regexps, {
              joinWith
            }) {
              let numCaptures = 0;
              return regexps.map(regex => {
                numCaptures += 1;
                const offset = numCaptures;
                let re = source(regex);
                let out = "";
                while (re.length > 0) {
                  const match = BACKREF_RE.exec(re);
                  if (!match) {
                    out += re;
                    break;
                  }
                  out += re.substring(0, match.index);
                  re = re.substring(match.index + match[0].length);
                  if (match[0][0] === "\\" && match[1]) out += "\\" + String(Number(match[1]) + offset);else {
                    out += match[0];
                    if (match[0] === "(") numCaptures++;
                  }
                }
                return out;
              }).map(re => `(${re})`).join(joinWith);
            }
            /** @typedef {import('highlight.js').Mode} Mode */
            /** @typedef {import('highlight.js').ModeCallback} ModeCallback */
            var MATCH_NOTHING_RE = /\b\B/;
            var IDENT_RE = "[a-zA-Z]\\w*";
            var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
            var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
            var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
            var BINARY_NUMBER_RE = "\\b(0b[01]+)";
            var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
            /**
            * @param { Partial<Mode> & {binary?: string | RegExp} } opts
            */
            var SHEBANG = (opts = {}) => {
              const beginShebang = /^#![ ]*\//;
              if (opts.binary) opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
              return inherit$1({
                scope: "meta",
                begin: beginShebang,
                end: /$/,
                relevance: 0,
                "on:begin": (m, resp) => {
                  if (m.index !== 0) resp.ignoreMatch();
                }
              }, opts);
            };
            var BACKSLASH_ESCAPE = {
              begin: "\\\\[\\s\\S]",
              relevance: 0
            };
            var APOS_STRING_MODE = {
              scope: "string",
              begin: "'",
              end: "'",
              illegal: "\\n",
              contains: [BACKSLASH_ESCAPE]
            };
            var QUOTE_STRING_MODE = {
              scope: "string",
              begin: "\"",
              end: "\"",
              illegal: "\\n",
              contains: [BACKSLASH_ESCAPE]
            };
            var PHRASAL_WORDS_MODE = {
              begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            };
            /**
            * Creates a comment mode
            *
            * @param {string | RegExp} begin
            * @param {string | RegExp} end
            * @param {Mode | {}} [modeOptions]
            * @returns {Partial<Mode>}
            */
            var COMMENT = function (begin, end, modeOptions = {}) {
              const mode = inherit$1({
                scope: "comment",
                begin,
                end,
                contains: []
              }, modeOptions);
              mode.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: true,
                relevance: 0
              });
              const ENGLISH_WORD = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
              mode.contains.push({
                begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}")
              });
              return mode;
            };
            var C_LINE_COMMENT_MODE = COMMENT("//", "$");
            var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
            var HASH_COMMENT_MODE = COMMENT("#", "$");
            var NUMBER_MODE = {
              scope: "number",
              begin: NUMBER_RE,
              relevance: 0
            };
            var C_NUMBER_MODE = {
              scope: "number",
              begin: C_NUMBER_RE,
              relevance: 0
            };
            var BINARY_NUMBER_MODE = {
              scope: "number",
              begin: BINARY_NUMBER_RE,
              relevance: 0
            };
            var REGEXP_MODE = {
              scope: "regexp",
              begin: /\/(?=[^/\n]*\/)/,
              end: /\/[gimuy]*/,
              contains: [BACKSLASH_ESCAPE, {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [BACKSLASH_ESCAPE]
              }]
            };
            var TITLE_MODE = {
              scope: "title",
              begin: IDENT_RE,
              relevance: 0
            };
            var UNDERSCORE_TITLE_MODE = {
              scope: "title",
              begin: UNDERSCORE_IDENT_RE,
              relevance: 0
            };
            var METHOD_GUARD = {
              begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
              relevance: 0
            };
            /**
            * Adds end same as begin mechanics to a mode
            *
            * Your mode must include at least a single () match group as that first match
            * group is what is used for comparison
            * @param {Partial<Mode>} mode
            */
            var END_SAME_AS_BEGIN = function (mode) {
              return Object.assign(mode, {
                "on:begin": (m, resp) => {
                  resp.data._beginMatch = m[1];
                },
                "on:end": (m, resp) => {
                  if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
                }
              });
            };
            var MODES = /* @__PURE__ */Object.freeze({
              __proto__: null,
              APOS_STRING_MODE,
              BACKSLASH_ESCAPE,
              BINARY_NUMBER_MODE,
              BINARY_NUMBER_RE,
              COMMENT,
              C_BLOCK_COMMENT_MODE,
              C_LINE_COMMENT_MODE,
              C_NUMBER_MODE,
              C_NUMBER_RE,
              END_SAME_AS_BEGIN,
              HASH_COMMENT_MODE,
              IDENT_RE,
              MATCH_NOTHING_RE,
              METHOD_GUARD,
              NUMBER_MODE,
              NUMBER_RE,
              PHRASAL_WORDS_MODE,
              QUOTE_STRING_MODE,
              REGEXP_MODE,
              RE_STARTERS_RE,
              SHEBANG,
              TITLE_MODE,
              UNDERSCORE_IDENT_RE,
              UNDERSCORE_TITLE_MODE
            });
            /**
            @typedef {import('highlight.js').CallbackResponse} CallbackResponse
            @typedef {import('highlight.js').CompilerExt} CompilerExt
            */
            /**
            * Skip a match if it has a preceding dot
            *
            * This is used for `beginKeywords` to prevent matching expressions such as
            * `bob.keyword.do()`. The mode compiler automatically wires this up as a
            * special _internal_ 'on:begin' callback for modes with `beginKeywords`
            * @param {RegExpMatchArray} match
            * @param {CallbackResponse} response
            */
            function skipIfHasPrecedingDot(match, response) {
              if (match.input[match.index - 1] === ".") response.ignoreMatch();
            }
            /**
            *
            * @type {CompilerExt}
            */
            function scopeClassName(mode, _parent) {
              if (mode.className !== void 0) {
                mode.scope = mode.className;
                delete mode.className;
              }
            }
            /**
            * `beginKeywords` syntactic sugar
            * @type {CompilerExt}
            */
            function beginKeywords(mode, parent) {
              if (!parent) return;
              if (!mode.beginKeywords) return;
              mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
              mode.__beforeBegin = skipIfHasPrecedingDot;
              mode.keywords = mode.keywords || mode.beginKeywords;
              delete mode.beginKeywords;
              if (mode.relevance === void 0) mode.relevance = 0;
            }
            /**
            * Allow `illegal` to contain an array of illegal values
            * @type {CompilerExt}
            */
            function compileIllegal(mode, _parent) {
              if (!Array.isArray(mode.illegal)) return;
              mode.illegal = either(...mode.illegal);
            }
            /**
            * `match` to match a single expression for readability
            * @type {CompilerExt}
            */
            function compileMatch(mode, _parent) {
              if (!mode.match) return;
              if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
              mode.begin = mode.match;
              delete mode.match;
            }
            /**
            * provides the default 1 relevance to all modes
            * @type {CompilerExt}
            */
            function compileRelevance(mode, _parent) {
              if (mode.relevance === void 0) mode.relevance = 1;
            }
            var beforeMatchExt = (mode, parent) => {
              if (!mode.beforeMatch) return;
              if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
              const originalMode = Object.assign({}, mode);
              Object.keys(mode).forEach(key => {
                delete mode[key];
              });
              mode.keywords = originalMode.keywords;
              mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
              mode.starts = {
                relevance: 0,
                contains: [Object.assign(originalMode, {
                  endsParent: true
                })]
              };
              mode.relevance = 0;
              delete originalMode.beforeMatch;
            };
            var COMMON_KEYWORDS = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
            var DEFAULT_KEYWORD_SCOPE = "keyword";
            /**
            * Given raw keywords from a language definition, compile them.
            *
            * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
            * @param {boolean} caseInsensitive
            */
            function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
              /** @type {import("highlight.js/private").KeywordDict} */
              const compiledKeywords = Object.create(null);
              if (typeof rawKeywords === "string") compileList(scopeName, rawKeywords.split(" "));else if (Array.isArray(rawKeywords)) compileList(scopeName, rawKeywords);else Object.keys(rawKeywords).forEach(function (scopeName$1) {
                Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName$1], caseInsensitive, scopeName$1));
              });
              return compiledKeywords;
              /**
              * Compiles an individual list of keywords
              *
              * Ex: "for if when while|5"
              *
              * @param {string} scopeName
              * @param {Array<string>} keywordList
              */
              function compileList(scopeName$1, keywordList) {
                if (caseInsensitive) keywordList = keywordList.map(x => x.toLowerCase());
                keywordList.forEach(function (keyword) {
                  const pair = keyword.split("|");
                  compiledKeywords[pair[0]] = [scopeName$1, scoreForKeyword(pair[0], pair[1])];
                });
              }
            }
            /**
            * Returns the proper score for a given keyword
            *
            * Also takes into account comment keywords, which will be scored 0 UNLESS
            * another score has been manually assigned.
            * @param {string} keyword
            * @param {string} [providedScore]
            */
            function scoreForKeyword(keyword, providedScore) {
              if (providedScore) return Number(providedScore);
              return commonKeyword(keyword) ? 0 : 1;
            }
            /**
            * Determines if a given keyword is common or not
            *
            * @param {string} keyword */
            function commonKeyword(keyword) {
              return COMMON_KEYWORDS.includes(keyword.toLowerCase());
            }
            /**
            * @type {Record<string, boolean>}
            */
            var seenDeprecations = {};
            /**
            * @param {string} message
            */
            var error = message => {
              console.error(message);
            };
            /**
            * @param {string} message
            * @param {any} args
            */
            var warn = (message, ...args) => {
              console.log(`WARN: ${message}`, ...args);
            };
            /**
            * @param {string} version
            * @param {string} message
            */
            var deprecated = (version$1, message) => {
              if (seenDeprecations[`${version$1}/${message}`]) return;
              console.log(`Deprecated as of ${version$1}. ${message}`);
              seenDeprecations[`${version$1}/${message}`] = true;
            };
            /**
            @typedef {import('highlight.js').CompiledMode} CompiledMode
            */
            var MultiClassError = /* @__PURE__ */new Error();
            /**
            * Renumbers labeled scope names to account for additional inner match
            * groups that otherwise would break everything.
            *
            * Lets say we 3 match scopes:
            *
            *   { 1 => ..., 2 => ..., 3 => ... }
            *
            * So what we need is a clean match like this:
            *
            *   (a)(b)(c) => [ "a", "b", "c" ]
            *
            * But this falls apart with inner match groups:
            *
            * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
            *
            * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
            * What needs to happen is the numbers are remapped:
            *
            *   { 1 => ..., 2 => ..., 5 => ... }
            *
            * We also need to know that the ONLY groups that should be output
            * are 1, 2, and 5.  This function handles this behavior.
            *
            * @param {CompiledMode} mode
            * @param {Array<RegExp | string>} regexes
            * @param {{key: "beginScope"|"endScope"}} opts
            */
            function remapScopeNames(mode, regexes, {
              key
            }) {
              let offset = 0;
              const scopeNames = mode[key];
              /** @type Record<number,boolean> */
              const emit = {};
              /** @type Record<number,string> */
              const positions = {};
              for (let i = 1; i <= regexes.length; i++) {
                positions[i + offset] = scopeNames[i];
                emit[i + offset] = true;
                offset += countMatchGroups(regexes[i - 1]);
              }
              mode[key] = positions;
              mode[key]._emit = emit;
              mode[key]._multi = true;
            }
            /**
            * @param {CompiledMode} mode
            */
            function beginMultiClass(mode) {
              if (!Array.isArray(mode.begin)) return;
              if (mode.skip || mode.excludeBegin || mode.returnBegin) {
                error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
                throw MultiClassError;
              }
              if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
                error("beginScope must be object");
                throw MultiClassError;
              }
              remapScopeNames(mode, mode.begin, {
                key: "beginScope"
              });
              mode.begin = _rewriteBackreferences(mode.begin, {
                joinWith: ""
              });
            }
            /**
            * @param {CompiledMode} mode
            */
            function endMultiClass(mode) {
              if (!Array.isArray(mode.end)) return;
              if (mode.skip || mode.excludeEnd || mode.returnEnd) {
                error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
                throw MultiClassError;
              }
              if (typeof mode.endScope !== "object" || mode.endScope === null) {
                error("endScope must be object");
                throw MultiClassError;
              }
              remapScopeNames(mode, mode.end, {
                key: "endScope"
              });
              mode.end = _rewriteBackreferences(mode.end, {
                joinWith: ""
              });
            }
            /**
            * this exists only to allow `scope: {}` to be used beside `match:`
            * Otherwise `beginScope` would necessary and that would look weird
            
            {
            match: [ /def/, /\w+/ ]
            scope: { 1: "keyword" , 2: "title" }
            }
            
            * @param {CompiledMode} mode
            */
            function scopeSugar(mode) {
              if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
                mode.beginScope = mode.scope;
                delete mode.scope;
              }
            }
            /**
            * @param {CompiledMode} mode
            */
            function MultiClass(mode) {
              scopeSugar(mode);
              if (typeof mode.beginScope === "string") mode.beginScope = {
                _wrap: mode.beginScope
              };
              if (typeof mode.endScope === "string") mode.endScope = {
                _wrap: mode.endScope
              };
              beginMultiClass(mode);
              endMultiClass(mode);
            }
            /**
            @typedef {import('highlight.js').Mode} Mode
            @typedef {import('highlight.js').CompiledMode} CompiledMode
            @typedef {import('highlight.js').Language} Language
            @typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
            @typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
            */
            /**
            * Compiles a language definition result
            *
            * Given the raw result of a language definition (Language), compiles this so
            * that it is ready for highlighting code.
            * @param {Language} language
            * @returns {CompiledLanguage}
            */
            function compileLanguage(language) {
              /**
              * Builds a regex with the case sensitivity of the current language
              *
              * @param {RegExp | string} value
              * @param {boolean} [global]
              */
              function langRe(value, global) {
                return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : ""));
              }
              /**
              Stores multiple regular expressions and allows you to quickly search for
              them all in a string simultaneously - returning the first match.  It does
              this by creating a huge (a|b|c) regex - each individual item wrapped with ()
              and joined by `|` - using match groups to track position.  When a match is
              found checking which position in the array has content allows us to figure
              out which of the original regexes / match groups triggered the match.
              
              The match object itself (the result of `Regex.exec`) is returned but also
              enhanced by merging in any meta-data that was registered with the regex.
              This is how we keep track of which mode matched, and what type of rule
              (`illegal`, `begin`, end, etc).
              */
              class MultiRegex {
                constructor() {
                  this.matchIndexes = {};
                  this.regexes = [];
                  this.matchAt = 1;
                  this.position = 0;
                }
                addRule(re, opts) {
                  opts.position = this.position++;
                  this.matchIndexes[this.matchAt] = opts;
                  this.regexes.push([opts, re]);
                  this.matchAt += countMatchGroups(re) + 1;
                }
                compile() {
                  if (this.regexes.length === 0) this.exec = () => null;
                  this.matcherRe = langRe(_rewriteBackreferences(this.regexes.map(el => el[1]), {
                    joinWith: "|"
                  }), true);
                  this.lastIndex = 0;
                }
                /** @param {string} s */
                exec(s) {
                  this.matcherRe.lastIndex = this.lastIndex;
                  const match = this.matcherRe.exec(s);
                  if (!match) return null;
                  const i = match.findIndex((el, i$1) => i$1 > 0 && el !== void 0);
                  const matchData = this.matchIndexes[i];
                  match.splice(0, i);
                  return Object.assign(match, matchData);
                }
              }
              class ResumableMultiRegex {
                constructor() {
                  this.rules = [];
                  this.multiRegexes = [];
                  this.count = 0;
                  this.lastIndex = 0;
                  this.regexIndex = 0;
                }
                getMatcher(index) {
                  if (this.multiRegexes[index]) return this.multiRegexes[index];
                  const matcher = new MultiRegex();
                  this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
                  matcher.compile();
                  this.multiRegexes[index] = matcher;
                  return matcher;
                }
                resumingScanAtSamePosition() {
                  return this.regexIndex !== 0;
                }
                considerAll() {
                  this.regexIndex = 0;
                }
                addRule(re, opts) {
                  this.rules.push([re, opts]);
                  if (opts.type === "begin") this.count++;
                }
                /** @param {string} s */
                exec(s) {
                  const m = this.getMatcher(this.regexIndex);
                  m.lastIndex = this.lastIndex;
                  let result = m.exec(s);
                  if (this.resumingScanAtSamePosition()) if (result && result.index === this.lastIndex) ;else {
                    const m2 = this.getMatcher(0);
                    m2.lastIndex = this.lastIndex + 1;
                    result = m2.exec(s);
                  }
                  if (result) {
                    this.regexIndex += result.position + 1;
                    if (this.regexIndex === this.count) this.considerAll();
                  }
                  return result;
                }
              }
              /**
              * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
              * the content and find matches.
              *
              * @param {CompiledMode} mode
              * @returns {ResumableMultiRegex}
              */
              function buildModeRegex(mode) {
                const mm = new ResumableMultiRegex();
                mode.contains.forEach(term => mm.addRule(term.begin, {
                  rule: term,
                  type: "begin"
                }));
                if (mode.terminatorEnd) mm.addRule(mode.terminatorEnd, {
                  type: "end"
                });
                if (mode.illegal) mm.addRule(mode.illegal, {
                  type: "illegal"
                });
                return mm;
              }
              /** skip vs abort vs ignore
              *
              * @skip   - The mode is still entered and exited normally (and contains rules apply),
              *           but all content is held and added to the parent buffer rather than being
              *           output when the mode ends.  Mostly used with `sublanguage` to build up
              *           a single large buffer than can be parsed by sublanguage.
              *
              *             - The mode begin ands ends normally.
              *             - Content matched is added to the parent mode buffer.
              *             - The parser cursor is moved forward normally.
              *
              * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
              *           never matched) but DOES NOT continue to match subsequent `contains`
              *           modes.  Abort is bad/suboptimal because it can result in modes
              *           farther down not getting applied because an earlier rule eats the
              *           content but then aborts.
              *
              *             - The mode does not begin.
              *             - Content matched by `begin` is added to the mode buffer.
              *             - The parser cursor is moved forward accordingly.
              *
              * @ignore - Ignores the mode (as if it never matched) and continues to match any
              *           subsequent `contains` modes.  Ignore isn't technically possible with
              *           the current parser implementation.
              *
              *             - The mode does not begin.
              *             - Content matched by `begin` is ignored.
              *             - The parser cursor is not moved forward.
              */
              /**
              * Compiles an individual mode
              *
              * This can raise an error if the mode contains certain detectable known logic
              * issues.
              * @param {Mode} mode
              * @param {CompiledMode | null} [parent]
              * @returns {CompiledMode | never}
              */
              function compileMode(mode, parent) {
                const cmode = mode;
                if (mode.isCompiled) return cmode;
                [scopeClassName, compileMatch, MultiClass, beforeMatchExt].forEach(ext => ext(mode, parent));
                language.compilerExtensions.forEach(ext => ext(mode, parent));
                mode.__beforeBegin = null;
                [beginKeywords, compileIllegal, compileRelevance].forEach(ext => ext(mode, parent));
                mode.isCompiled = true;
                let keywordPattern = null;
                if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
                  mode.keywords = Object.assign({}, mode.keywords);
                  keywordPattern = mode.keywords.$pattern;
                  delete mode.keywords.$pattern;
                }
                keywordPattern = keywordPattern || /\w+/;
                if (mode.keywords) mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
                cmode.keywordPatternRe = langRe(keywordPattern, true);
                if (parent) {
                  if (!mode.begin) mode.begin = /\B|\b/;
                  cmode.beginRe = langRe(cmode.begin);
                  if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
                  if (mode.end) cmode.endRe = langRe(cmode.end);
                  cmode.terminatorEnd = source(cmode.end) || "";
                  if (mode.endsWithParent && parent.terminatorEnd) cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
                }
                if (mode.illegal) cmode.illegalRe = langRe(mode.illegal);
                if (!mode.contains) mode.contains = [];
                mode.contains = [].concat(...mode.contains.map(function (c) {
                  return expandOrCloneMode(c === "self" ? mode : c);
                }));
                mode.contains.forEach(function (c) {
                  compileMode(c, cmode);
                });
                if (mode.starts) compileMode(mode.starts, parent);
                cmode.matcher = buildModeRegex(cmode);
                return cmode;
              }
              if (!language.compilerExtensions) language.compilerExtensions = [];
              if (language.contains && language.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
              language.classNameAliases = inherit$1(language.classNameAliases || {});
              return compileMode(language);
            }
            /**
            * Determines if a mode has a dependency on it's parent or not
            *
            * If a mode does have a parent dependency then often we need to clone it if
            * it's used in multiple places so that each copy points to the correct parent,
            * where-as modes without a parent can often safely be re-used at the bottom of
            * a mode chain.
            *
            * @param {Mode | null} mode
            * @returns {boolean} - is there a dependency on the parent?
            * */
            function dependencyOnParent(mode) {
              if (!mode) return false;
              return mode.endsWithParent || dependencyOnParent(mode.starts);
            }
            /**
            * Expands a mode or clones it if necessary
            *
            * This is necessary for modes with parental dependenceis (see notes on
            * `dependencyOnParent`) and for nodes that have `variants` - which must then be
            * exploded into their own individual modes at compile time.
            *
            * @param {Mode} mode
            * @returns {Mode | Mode[]}
            * */
            function expandOrCloneMode(mode) {
              if (mode.variants && !mode.cachedVariants) mode.cachedVariants = mode.variants.map(function (variant) {
                return inherit$1(mode, {
                  variants: null
                }, variant);
              });
              if (mode.cachedVariants) return mode.cachedVariants;
              if (dependencyOnParent(mode)) return inherit$1(mode, {
                starts: mode.starts ? inherit$1(mode.starts) : null
              });
              if (Object.isFrozen(mode)) return inherit$1(mode);
              return mode;
            }
            var version = "11.11.1";
            var HTMLInjectionError = class extends Error {
              constructor(reason, html) {
                super(reason);
                this.name = "HTMLInjectionError";
                this.html = html;
              }
            };
            /**
            @typedef {import('highlight.js').Mode} Mode
            @typedef {import('highlight.js').CompiledMode} CompiledMode
            @typedef {import('highlight.js').CompiledScope} CompiledScope
            @typedef {import('highlight.js').Language} Language
            @typedef {import('highlight.js').HLJSApi} HLJSApi
            @typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
            @typedef {import('highlight.js').PluginEvent} PluginEvent
            @typedef {import('highlight.js').HLJSOptions} HLJSOptions
            @typedef {import('highlight.js').LanguageFn} LanguageFn
            @typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
            @typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
            @typedef {import('highlight.js/private').MatchType} MatchType
            @typedef {import('highlight.js/private').KeywordData} KeywordData
            @typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
            @typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
            @typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
            @typedef {import('highlight.js').HighlightOptions} HighlightOptions
            @typedef {import('highlight.js').HighlightResult} HighlightResult
            */
            var escape = escapeHTML;
            var inherit = inherit$1;
            var NO_MATCH = Symbol("nomatch");
            var MAX_KEYWORD_HITS = 7;
            /**
            * @param {any} hljs - object that is extended (legacy)
            * @returns {HLJSApi}
            */
            var HLJS = function (hljs) {
              /** @type {Record<string, Language>} */
              const languages = Object.create(null);
              /** @type {Record<string, string>} */
              const aliases = Object.create(null);
              /** @type {HLJSPlugin[]} */
              const plugins = [];
              let SAFE_MODE = true;
              const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
              /** @type {Language} */
              const PLAINTEXT_LANGUAGE = {
                disableAutodetect: true,
                name: "Plain text",
                contains: []
              };
              /** @type HLJSOptions */
              let options = {
                ignoreUnescapedHTML: false,
                throwUnescapedHTML: false,
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                cssSelector: "pre code",
                languages: null,
                __emitter: TokenTreeEmitter
              };
              /**
              * Tests a language name to see if highlighting should be skipped
              * @param {string} languageName
              */
              function shouldNotHighlight(languageName) {
                return options.noHighlightRe.test(languageName);
              }
              /**
              * @param {HighlightedHTMLElement} block - the HTML element to determine language for
              */
              function blockLanguage(block) {
                let classes = block.className + " ";
                classes += block.parentNode ? block.parentNode.className : "";
                const match = options.languageDetectRe.exec(classes);
                if (match) {
                  const language = getLanguage(match[1]);
                  if (!language) {
                    warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
                    warn("Falling back to no-highlight mode for this block.", block);
                  }
                  return language ? match[1] : "no-highlight";
                }
                return classes.split(/\s+/).find(_class => shouldNotHighlight(_class) || getLanguage(_class));
              }
              /**
              * Core highlighting function.
              *
              * OLD API
              * highlight(lang, code, ignoreIllegals, continuation)
              *
              * NEW API
              * highlight(code, {lang, ignoreIllegals})
              *
              * @param {string} codeOrLanguageName - the language to use for highlighting
              * @param {string | HighlightOptions} optionsOrCode - the code to highlight
              * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
              *
              * @returns {HighlightResult} Result - an object that represents the result
              * @property {string} language - the language name
              * @property {number} relevance - the relevance score
              * @property {string} value - the highlighted HTML code
              * @property {string} code - the original raw code
              * @property {CompiledMode} top - top of the current mode stack
              * @property {boolean} illegal - indicates whether any illegal matches were found
              */
              function highlight$1(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
                let code = "";
                let languageName = "";
                if (typeof optionsOrCode === "object") {
                  code = codeOrLanguageName;
                  ignoreIllegals = optionsOrCode.ignoreIllegals;
                  languageName = optionsOrCode.language;
                } else {
                  deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
                  deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
                  languageName = codeOrLanguageName;
                  code = optionsOrCode;
                }
                if (ignoreIllegals === void 0) ignoreIllegals = true;
                /** @type {BeforeHighlightContext} */
                const context = {
                  code,
                  language: languageName
                };
                fire("before:highlight", context);
                const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
                result.code = context.code;
                fire("after:highlight", result);
                return result;
              }
              /**
              * private highlight that's used internally and does not fire callbacks
              *
              * @param {string} languageName - the language to use for highlighting
              * @param {string} codeToHighlight - the code to highlight
              * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
              * @param {CompiledMode?} [continuation] - current continuation mode, if any
              * @returns {HighlightResult} - result of the highlight operation
              */
              function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
                const keywordHits = Object.create(null);
                /**
                * Return keyword data if a match is a keyword
                * @param {CompiledMode} mode - current mode
                * @param {string} matchText - the textual match
                * @returns {KeywordData | false}
                */
                function keywordData(mode, matchText) {
                  return mode.keywords[matchText];
                }
                function processKeywords() {
                  if (!top.keywords) {
                    emitter.addText(modeBuffer);
                    return;
                  }
                  let lastIndex = 0;
                  top.keywordPatternRe.lastIndex = 0;
                  let match = top.keywordPatternRe.exec(modeBuffer);
                  let buf = "";
                  while (match) {
                    buf += modeBuffer.substring(lastIndex, match.index);
                    const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
                    const data = keywordData(top, word);
                    if (data) {
                      const [kind, keywordRelevance] = data;
                      emitter.addText(buf);
                      buf = "";
                      keywordHits[word] = (keywordHits[word] || 0) + 1;
                      if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
                      if (kind.startsWith("_")) buf += match[0];else {
                        const cssClass = language.classNameAliases[kind] || kind;
                        emitKeyword(match[0], cssClass);
                      }
                    } else buf += match[0];
                    lastIndex = top.keywordPatternRe.lastIndex;
                    match = top.keywordPatternRe.exec(modeBuffer);
                  }
                  buf += modeBuffer.substring(lastIndex);
                  emitter.addText(buf);
                }
                function processSubLanguage() {
                  if (modeBuffer === "") return;
                  /** @type HighlightResult */
                  let result$1 = null;
                  if (typeof top.subLanguage === "string") {
                    if (!languages[top.subLanguage]) {
                      emitter.addText(modeBuffer);
                      return;
                    }
                    result$1 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
                    continuations[top.subLanguage] = result$1._top;
                  } else result$1 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
                  if (top.relevance > 0) relevance += result$1.relevance;
                  emitter.__addSublanguage(result$1._emitter, result$1.language);
                }
                function processBuffer() {
                  if (top.subLanguage != null) processSubLanguage();else processKeywords();
                  modeBuffer = "";
                }
                /**
                * @param {string} text
                * @param {string} scope
                */
                function emitKeyword(keyword, scope) {
                  if (keyword === "") return;
                  emitter.startScope(scope);
                  emitter.addText(keyword);
                  emitter.endScope();
                }
                /**
                * @param {CompiledScope} scope
                * @param {RegExpMatchArray} match
                */
                function emitMultiClass(scope, match) {
                  let i = 1;
                  const max = match.length - 1;
                  while (i <= max) {
                    if (!scope._emit[i]) {
                      i++;
                      continue;
                    }
                    const klass = language.classNameAliases[scope[i]] || scope[i];
                    const text = match[i];
                    if (klass) emitKeyword(text, klass);else {
                      modeBuffer = text;
                      processKeywords();
                      modeBuffer = "";
                    }
                    i++;
                  }
                }
                /**
                * @param {CompiledMode} mode - new mode to start
                * @param {RegExpMatchArray} match
                */
                function startNewMode(mode, match) {
                  if (mode.scope && typeof mode.scope === "string") emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
                  if (mode.beginScope) {
                    if (mode.beginScope._wrap) {
                      emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                      modeBuffer = "";
                    } else if (mode.beginScope._multi) {
                      emitMultiClass(mode.beginScope, match);
                      modeBuffer = "";
                    }
                  }
                  top = Object.create(mode, {
                    parent: {
                      value: top
                    }
                  });
                  return top;
                }
                /**
                * @param {CompiledMode } mode - the mode to potentially end
                * @param {RegExpMatchArray} match - the latest match
                * @param {string} matchPlusRemainder - match plus remainder of content
                * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
                */
                function endOfMode(mode, match, matchPlusRemainder) {
                  let matched = startsWith(mode.endRe, matchPlusRemainder);
                  if (matched) {
                    if (mode["on:end"]) {
                      const resp = new Response(mode);
                      mode["on:end"](match, resp);
                      if (resp.isMatchIgnored) matched = false;
                    }
                    if (matched) {
                      while (mode.endsParent && mode.parent) mode = mode.parent;
                      return mode;
                    }
                  }
                  if (mode.endsWithParent) return endOfMode(mode.parent, match, matchPlusRemainder);
                }
                /**
                * Handle matching but then ignoring a sequence of text
                *
                * @param {string} lexeme - string containing full match text
                */
                function doIgnore(lexeme) {
                  if (top.matcher.regexIndex === 0) {
                    modeBuffer += lexeme[0];
                    return 1;
                  } else {
                    resumeScanAtSamePosition = true;
                    return 0;
                  }
                }
                /**
                * Handle the start of a new potential mode match
                *
                * @param {EnhancedMatch} match - the current match
                * @returns {number} how far to advance the parse cursor
                */
                function doBeginMatch(match) {
                  const lexeme = match[0];
                  const newMode = match.rule;
                  const resp = new Response(newMode);
                  const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
                  for (const cb of beforeCallbacks) {
                    if (!cb) continue;
                    cb(match, resp);
                    if (resp.isMatchIgnored) return doIgnore(lexeme);
                  }
                  if (newMode.skip) modeBuffer += lexeme;else {
                    if (newMode.excludeBegin) modeBuffer += lexeme;
                    processBuffer();
                    if (!newMode.returnBegin && !newMode.excludeBegin) modeBuffer = lexeme;
                  }
                  startNewMode(newMode, match);
                  return newMode.returnBegin ? 0 : lexeme.length;
                }
                /**
                * Handle the potential end of mode
                *
                * @param {RegExpMatchArray} match - the current match
                */
                function doEndMatch(match) {
                  const lexeme = match[0];
                  const matchPlusRemainder = codeToHighlight.substring(match.index);
                  const endMode = endOfMode(top, match, matchPlusRemainder);
                  if (!endMode) return NO_MATCH;
                  const origin = top;
                  if (top.endScope && top.endScope._wrap) {
                    processBuffer();
                    emitKeyword(lexeme, top.endScope._wrap);
                  } else if (top.endScope && top.endScope._multi) {
                    processBuffer();
                    emitMultiClass(top.endScope, match);
                  } else if (origin.skip) modeBuffer += lexeme;else {
                    if (!(origin.returnEnd || origin.excludeEnd)) modeBuffer += lexeme;
                    processBuffer();
                    if (origin.excludeEnd) modeBuffer = lexeme;
                  }
                  do {
                    if (top.scope) emitter.closeNode();
                    if (!top.skip && !top.subLanguage) relevance += top.relevance;
                    top = top.parent;
                  } while (top !== endMode.parent);
                  if (endMode.starts) startNewMode(endMode.starts, match);
                  return origin.returnEnd ? 0 : lexeme.length;
                }
                function processContinuations() {
                  const list = [];
                  for (let current = top; current !== language; current = current.parent) if (current.scope) list.unshift(current.scope);
                  list.forEach(item => emitter.openNode(item));
                }
                /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
                let lastMatch = {};
                /**
                *  Process an individual match
                *
                * @param {string} textBeforeMatch - text preceding the match (since the last match)
                * @param {EnhancedMatch} [match] - the match itself
                */
                function processLexeme(textBeforeMatch, match) {
                  const lexeme = match && match[0];
                  modeBuffer += textBeforeMatch;
                  if (lexeme == null) {
                    processBuffer();
                    return 0;
                  }
                  if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
                    modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
                    if (!SAFE_MODE) {
                      /** @type {AnnotatedError} */
                      const err = /* @__PURE__ */new Error(`0 width match regex (${languageName})`);
                      err.languageName = languageName;
                      err.badRule = lastMatch.rule;
                      throw err;
                    }
                    return 1;
                  }
                  lastMatch = match;
                  if (match.type === "begin") return doBeginMatch(match);else if (match.type === "illegal" && !ignoreIllegals) {
                    /** @type {AnnotatedError} */
                    const err = /* @__PURE__ */new Error("Illegal lexeme \"" + lexeme + "\" for mode \"" + (top.scope || "<unnamed>") + "\"");
                    err.mode = top;
                    throw err;
                  } else if (match.type === "end") {
                    const processed = doEndMatch(match);
                    if (processed !== NO_MATCH) return processed;
                  }
                  if (match.type === "illegal" && lexeme === "") {
                    modeBuffer += "\n";
                    return 1;
                  }
                  if (iterations > 1e5 && iterations > match.index * 3) throw /* @__PURE__ */new Error("potential infinite loop, way more iterations than matches");
                  modeBuffer += lexeme;
                  return lexeme.length;
                }
                const language = getLanguage(languageName);
                if (!language) {
                  error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
                  throw new Error("Unknown language: \"" + languageName + "\"");
                }
                const md = compileLanguage(language);
                let result = "";
                /** @type {CompiledMode} */
                let top = continuation || md;
                /** @type Record<string,CompiledMode> */
                const continuations = {};
                const emitter = new options.__emitter(options);
                processContinuations();
                let modeBuffer = "";
                let relevance = 0;
                let index = 0;
                let iterations = 0;
                let resumeScanAtSamePosition = false;
                try {
                  if (!language.__emitTokens) {
                    top.matcher.considerAll();
                    for (;;) {
                      iterations++;
                      if (resumeScanAtSamePosition) resumeScanAtSamePosition = false;else top.matcher.considerAll();
                      top.matcher.lastIndex = index;
                      const match = top.matcher.exec(codeToHighlight);
                      if (!match) break;
                      const processedCount = processLexeme(codeToHighlight.substring(index, match.index), match);
                      index = match.index + processedCount;
                    }
                    processLexeme(codeToHighlight.substring(index));
                  } else language.__emitTokens(codeToHighlight, emitter);
                  emitter.finalize();
                  result = emitter.toHTML();
                  return {
                    language: languageName,
                    value: result,
                    relevance,
                    illegal: false,
                    _emitter: emitter,
                    _top: top
                  };
                } catch (err) {
                  if (err.message && err.message.includes("Illegal")) return {
                    language: languageName,
                    value: escape(codeToHighlight),
                    illegal: true,
                    relevance: 0,
                    _illegalBy: {
                      message: err.message,
                      index,
                      context: codeToHighlight.slice(index - 100, index + 100),
                      mode: err.mode,
                      resultSoFar: result
                    },
                    _emitter: emitter
                  };else if (SAFE_MODE) return {
                    language: languageName,
                    value: escape(codeToHighlight),
                    illegal: false,
                    relevance: 0,
                    errorRaised: err,
                    _emitter: emitter,
                    _top: top
                  };else throw err;
                }
              }
              /**
              * returns a valid highlight result, without actually doing any actual work,
              * auto highlight starts with this and it's possible for small snippets that
              * auto-detection may not find a better match
              * @param {string} code
              * @returns {HighlightResult}
              */
              function justTextHighlightResult(code) {
                const result = {
                  value: escape(code),
                  illegal: false,
                  relevance: 0,
                  _top: PLAINTEXT_LANGUAGE,
                  _emitter: new options.__emitter(options)
                };
                result._emitter.addText(code);
                return result;
              }
              /**
              Highlighting with language detection. Accepts a string with the code to
              highlight. Returns an object with the following properties:
              
              - language (detected language)
              - relevance (int)
              - value (an HTML string with highlighting markup)
              - secondBest (object with the same structure for second-best heuristically
              detected language, may be absent)
              
              @param {string} code
              @param {Array<string>} [languageSubset]
              @returns {AutoHighlightResult}
              */
              function highlightAuto(code, languageSubset) {
                languageSubset = languageSubset || options.languages || Object.keys(languages);
                const plaintext = justTextHighlightResult(code);
                const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name => _highlight(name, code, false));
                results.unshift(plaintext);
                const [best, secondBest] = results.sort((a, b) => {
                  if (a.relevance !== b.relevance) return b.relevance - a.relevance;
                  if (a.language && b.language) {
                    if (getLanguage(a.language).supersetOf === b.language) return 1;else if (getLanguage(b.language).supersetOf === a.language) return -1;
                  }
                  return 0;
                });
                /** @type {AutoHighlightResult} */
                const result = best;
                result.secondBest = secondBest;
                return result;
              }
              /**
              * Builds new class name for block given the language name
              *
              * @param {HTMLElement} element
              * @param {string} [currentLang]
              * @param {string} [resultLang]
              */
              function updateClassName(element, currentLang, resultLang) {
                const language = currentLang && aliases[currentLang] || resultLang;
                element.classList.add("hljs");
                element.classList.add(`language-${language}`);
              }
              /**
              * Applies highlighting to a DOM node containing code.
              *
              * @param {HighlightedHTMLElement} element - the HTML element to highlight
              */
              function highlightElement(element) {
                /** @type HTMLElement */
                let node = null;
                const language = blockLanguage(element);
                if (shouldNotHighlight(language)) return;
                fire("before:highlightElement", {
                  el: element,
                  language
                });
                if (element.dataset.highlighted) {
                  console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
                  return;
                }
                if (element.children.length > 0) {
                  if (!options.ignoreUnescapedHTML) {
                    console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
                    console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
                    console.warn("The element with unescaped HTML:");
                    console.warn(element);
                  }
                  if (options.throwUnescapedHTML) throw new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
                }
                node = element;
                const text = node.textContent;
                const result = language ? highlight$1(text, {
                  language,
                  ignoreIllegals: true
                }) : highlightAuto(text);
                element.innerHTML = result.value;
                element.dataset.highlighted = "yes";
                updateClassName(element, language, result.language);
                element.result = {
                  language: result.language,
                  re: result.relevance,
                  relevance: result.relevance
                };
                if (result.secondBest) element.secondBest = {
                  language: result.secondBest.language,
                  relevance: result.secondBest.relevance
                };
                fire("after:highlightElement", {
                  el: element,
                  result,
                  text
                });
              }
              /**
              * Updates highlight.js global options with the passed options
              *
              * @param {Partial<HLJSOptions>} userOptions
              */
              function configure(userOptions) {
                options = inherit(options, userOptions);
              }
              const initHighlighting = () => {
                highlightAll();
                deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
              };
              function initHighlightingOnLoad() {
                highlightAll();
                deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
              }
              let wantsHighlight = false;
              /**
              * auto-highlights all pre>code elements on the page
              */
              function highlightAll() {
                function boot() {
                  highlightAll();
                }
                if (document.readyState === "loading") {
                  if (!wantsHighlight) window.addEventListener("DOMContentLoaded", boot, false);
                  wantsHighlight = true;
                  return;
                }
                document.querySelectorAll(options.cssSelector).forEach(highlightElement);
              }
              /**
              * Register a language grammar module
              *
              * @param {string} languageName
              * @param {LanguageFn} languageDefinition
              */
              function registerLanguage(languageName, languageDefinition) {
                let lang = null;
                try {
                  lang = languageDefinition(hljs);
                } catch (error$1) {
                  error("Language definition for '{}' could not be registered.".replace("{}", languageName));
                  if (!SAFE_MODE) throw error$1;else error(error$1);
                  lang = PLAINTEXT_LANGUAGE;
                }
                if (!lang.name) lang.name = languageName;
                languages[languageName] = lang;
                lang.rawDefinition = languageDefinition.bind(null, hljs);
                if (lang.aliases) registerAliases(lang.aliases, {
                  languageName
                });
              }
              /**
              * Remove a language grammar module
              *
              * @param {string} languageName
              */
              function unregisterLanguage(languageName) {
                delete languages[languageName];
                for (const alias of Object.keys(aliases)) if (aliases[alias] === languageName) delete aliases[alias];
              }
              /**
              * @returns {string[]} List of language internal names
              */
              function listLanguages() {
                return Object.keys(languages);
              }
              /**
              * @param {string} name - name of the language to retrieve
              * @returns {Language | undefined}
              */
              function getLanguage(name) {
                name = (name || "").toLowerCase();
                return languages[name] || languages[aliases[name]];
              }
              /**
              *
              * @param {string|string[]} aliasList - single alias or list of aliases
              * @param {{languageName: string}} opts
              */
              function registerAliases(aliasList, {
                languageName
              }) {
                if (typeof aliasList === "string") aliasList = [aliasList];
                aliasList.forEach(alias => {
                  aliases[alias.toLowerCase()] = languageName;
                });
              }
              /**
              * Determines if a given language has auto-detection enabled
              * @param {string} name - name of the language
              */
              function autoDetection(name) {
                const lang = getLanguage(name);
                return lang && !lang.disableAutodetect;
              }
              /**
              * Upgrades the old highlightBlock plugins to the new
              * highlightElement API
              * @param {HLJSPlugin} plugin
              */
              function upgradePluginAPI(plugin) {
                if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) plugin["before:highlightElement"] = data => {
                  plugin["before:highlightBlock"](Object.assign({
                    block: data.el
                  }, data));
                };
                if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) plugin["after:highlightElement"] = data => {
                  plugin["after:highlightBlock"](Object.assign({
                    block: data.el
                  }, data));
                };
              }
              /**
              * @param {HLJSPlugin} plugin
              */
              function addPlugin(plugin) {
                upgradePluginAPI(plugin);
                plugins.push(plugin);
              }
              /**
              * @param {HLJSPlugin} plugin
              */
              function removePlugin(plugin) {
                const index = plugins.indexOf(plugin);
                if (index !== -1) plugins.splice(index, 1);
              }
              /**
              *
              * @param {PluginEvent} event
              * @param {any} args
              */
              function fire(event, args) {
                const cb = event;
                plugins.forEach(function (plugin) {
                  if (plugin[cb]) plugin[cb](args);
                });
              }
              /**
              * DEPRECATED
              * @param {HighlightedHTMLElement} el
              */
              function deprecateHighlightBlock(el) {
                deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
                deprecated("10.7.0", "Please use highlightElement now.");
                return highlightElement(el);
              }
              Object.assign(hljs, {
                highlight: highlight$1,
                highlightAuto,
                highlightAll,
                highlightElement,
                highlightBlock: deprecateHighlightBlock,
                configure,
                initHighlighting,
                initHighlightingOnLoad,
                registerLanguage,
                unregisterLanguage,
                listLanguages,
                getLanguage,
                registerAliases,
                autoDetection,
                inherit,
                addPlugin,
                removePlugin
              });
              hljs.debugMode = function () {
                SAFE_MODE = false;
              };
              hljs.safeMode = function () {
                SAFE_MODE = true;
              };
              hljs.versionString = version;
              hljs.regex = {
                concat,
                lookahead,
                either,
                optional,
                anyNumberOfTimes
              };
              for (const key in MODES) if (typeof MODES[key] === "object") deepFreeze(MODES[key]);
              Object.assign(hljs, MODES);
              return hljs;
            };
            var highlight = HLJS({});
            highlight.newInstance = () => HLJS({});
            module.exports = highlight;
            highlight.HighlightJS = highlight;
            highlight.default = highlight;
          }
        })); //#endregion
      }
    };
  });
})();