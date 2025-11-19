;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var __commonJS, computed, ref, process$1, init_dist, uninstallPackage, STORES, getAvailableCommunityPackageCount, useRootStore, getInstalledCommunityNodes, updatePackage, isAuthenticated, defineStore, installNewPackage, LOADER_DELAY, useCommunityNodesStore, require_constants, require_debug, require_re, require_parse_options, require_identifiers, require_semver$1, require_parse, require_valid$1, require_clean, require_inc, require_diff, require_major, require_minor, require_patch, require_prerelease, require_compare, require_rcompare, require_compare_loose, require_compare_build, require_sort, require_rsort, require_gt, require_lt, require_eq, require_neq, require_gte, require_lte, require_cmp, require_coerce, require_lrucache, require_range, require_comparator, require_satisfies, require_to_comparators, require_max_satisfying, require_min_satisfying, require_min_version, require_valid, require_outside, require_gtr, require_ltr, require_intersects, require_simplify, require_subset, require_semver;
    return {
      setters: [function (_chunkLegacy001Js) {
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_emptyLegacy00tJs) {
        process$1 = _emptyLegacy00tJs.S;
        init_dist = _emptyLegacy00tJs.x;
      }, function (_useTelemetryLegacy00FJs) {
        uninstallPackage = _useTelemetryLegacy00FJs.Bs;
        STORES = _useTelemetryLegacy00FJs.Cc;
        getAvailableCommunityPackageCount = _useTelemetryLegacy00FJs.Ls;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        getInstalledCommunityNodes = _useTelemetryLegacy00FJs.Rs;
        updatePackage = _useTelemetryLegacy00FJs.Vs;
        isAuthenticated = _useTelemetryLegacy00FJs.Yn;
        defineStore = _useTelemetryLegacy00FJs.xc;
        installNewPackage = _useTelemetryLegacy00FJs.zs;
      }],
      execute: function () {
        //#region src/features/settings/communityNodes/communityNodes.store.ts
        LOADER_DELAY = 300;
        _export("n", useCommunityNodesStore = defineStore(STORES.COMMUNITY_NODES, () => {
          const availablePackageCount = ref(-1);
          const installedPackages = ref({});
          const rootStore = useRootStore();
          const getInstalledPackages = computed(() => {
            return Object.values(installedPackages.value).sort((a, b) => a.packageName.localeCompare(b.packageName));
          });
          const fetchAvailableCommunityPackageCount = async () => {
            if (availablePackageCount.value === -1) availablePackageCount.value = await getAvailableCommunityPackageCount();
          };
          const setInstalledPackages = packages => {
            installedPackages.value = packages.reduce((packageMap, pack) => {
              packageMap[pack.packageName] = pack;
              return packageMap;
            }, {});
          };
          const fetchInstalledPackages = async () => {
            if (!isAuthenticated()) return;
            const installedPackages$1 = await getInstalledCommunityNodes(rootStore.restApiContext);
            setInstalledPackages(installedPackages$1);
            const timeout = installedPackages$1.length > 0 ? 0 : LOADER_DELAY;
            setTimeout(() => {}, timeout);
          };
          const installPackage = async (packageName, verify, version) => {
            await installNewPackage(rootStore.restApiContext, packageName, verify, version);
            await fetchInstalledPackages();
          };
          const uninstallPackage$1 = async packageName => {
            await uninstallPackage(rootStore.restApiContext, packageName);
            removePackageByName(packageName);
          };
          const removePackageByName = name => {
            const {
              [name]: removedPackage,
              ...remainingPackages
            } = installedPackages.value;
            installedPackages.value = remainingPackages;
          };
          const updatePackageObject = newPackage => {
            installedPackages.value[newPackage.packageName] = newPackage;
          };
          const updatePackage$1 = async (packageName, version, checksum) => {
            const packageToUpdate = installedPackages.value[packageName];
            updatePackageObject(await updatePackage(rootStore.restApiContext, packageToUpdate.packageName, version, checksum));
          };
          const getInstalledPackage = async packageName => {
            if (!getInstalledPackages.value.length) await fetchInstalledPackages();
            return getInstalledPackages.value.find(p => p.packageName === packageName);
          };
          return {
            installedPackages,
            getInstalledPackage,
            getInstalledPackages,
            availablePackageCount,
            fetchAvailableCommunityPackageCount,
            fetchInstalledPackages,
            installPackage,
            uninstallPackage: uninstallPackage$1,
            updatePackage: updatePackage$1,
            setInstalledPackages
          };
        })); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/constants.js
        require_constants = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/constants.js": (exports, module) => {
            var SEMVER_SPEC_VERSION = "2.0.0";
            var MAX_LENGTH$2 = 256;
            var MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
            var MAX_SAFE_COMPONENT_LENGTH$1 = 16;
            var MAX_SAFE_BUILD_LENGTH$1 = MAX_LENGTH$2 - 6;
            var RELEASE_TYPES = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
            module.exports = {
              MAX_LENGTH: MAX_LENGTH$2,
              MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH$1,
              MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH$1,
              MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
              RELEASE_TYPES,
              SEMVER_SPEC_VERSION,
              FLAG_INCLUDE_PRERELEASE: 1,
              FLAG_LOOSE: 2
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/debug.js
        require_debug = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/debug.js": (exports, module) => {
            init_dist();
            var debug$4 = typeof process$1 === "object" && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {};
            module.exports = debug$4;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/re.js
        require_re = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/re.js": (exports, module) => {
            var {
              MAX_SAFE_COMPONENT_LENGTH,
              MAX_SAFE_BUILD_LENGTH,
              MAX_LENGTH: MAX_LENGTH$1
            } = require_constants();
            var debug$3 = require_debug();
            exports = module.exports = {};
            var re$4 = exports.re = [];
            var safeRe = exports.safeRe = [];
            var src = exports.src = [];
            var safeSrc = exports.safeSrc = [];
            var t$4 = exports.t = {};
            var R = 0;
            var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
            var safeRegexReplacements = [["\\s", 1], ["\\d", MAX_LENGTH$1], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]];
            var makeSafeRegex = value => {
              for (const [token, max] of safeRegexReplacements) value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
              return value;
            };
            var createToken = (name, value, isGlobal) => {
              const safe = makeSafeRegex(value);
              const index = R++;
              debug$3(name, index, value);
              t$4[name] = index;
              src[index] = value;
              safeSrc[index] = safe;
              re$4[index] = new RegExp(value, isGlobal ? "g" : void 0);
              safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
            };
            createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
            createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
            createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
            createToken("MAINVERSION", `(${src[t$4.NUMERICIDENTIFIER]})\\.(${src[t$4.NUMERICIDENTIFIER]})\\.(${src[t$4.NUMERICIDENTIFIER]})`);
            createToken("MAINVERSIONLOOSE", `(${src[t$4.NUMERICIDENTIFIERLOOSE]})\\.(${src[t$4.NUMERICIDENTIFIERLOOSE]})\\.(${src[t$4.NUMERICIDENTIFIERLOOSE]})`);
            createToken("PRERELEASEIDENTIFIER", `(?:${src[t$4.NONNUMERICIDENTIFIER]}|${src[t$4.NUMERICIDENTIFIER]})`);
            createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t$4.NONNUMERICIDENTIFIER]}|${src[t$4.NUMERICIDENTIFIERLOOSE]})`);
            createToken("PRERELEASE", `(?:-(${src[t$4.PRERELEASEIDENTIFIER]}(?:\\.${src[t$4.PRERELEASEIDENTIFIER]})*))`);
            createToken("PRERELEASELOOSE", `(?:-?(${src[t$4.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t$4.PRERELEASEIDENTIFIERLOOSE]})*))`);
            createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
            createToken("BUILD", `(?:\\+(${src[t$4.BUILDIDENTIFIER]}(?:\\.${src[t$4.BUILDIDENTIFIER]})*))`);
            createToken("FULLPLAIN", `v?${src[t$4.MAINVERSION]}${src[t$4.PRERELEASE]}?${src[t$4.BUILD]}?`);
            createToken("FULL", `^${src[t$4.FULLPLAIN]}$`);
            createToken("LOOSEPLAIN", `[v=\\s]*${src[t$4.MAINVERSIONLOOSE]}${src[t$4.PRERELEASELOOSE]}?${src[t$4.BUILD]}?`);
            createToken("LOOSE", `^${src[t$4.LOOSEPLAIN]}$`);
            createToken("GTLT", "((?:<|>)?=?)");
            createToken("XRANGEIDENTIFIERLOOSE", `${src[t$4.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
            createToken("XRANGEIDENTIFIER", `${src[t$4.NUMERICIDENTIFIER]}|x|X|\\*`);
            createToken("XRANGEPLAIN", `[v=\\s]*(${src[t$4.XRANGEIDENTIFIER]})(?:\\.(${src[t$4.XRANGEIDENTIFIER]})(?:\\.(${src[t$4.XRANGEIDENTIFIER]})(?:${src[t$4.PRERELEASE]})?${src[t$4.BUILD]}?)?)?`);
            createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t$4.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t$4.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t$4.XRANGEIDENTIFIERLOOSE]})(?:${src[t$4.PRERELEASELOOSE]})?${src[t$4.BUILD]}?)?)?`);
            createToken("XRANGE", `^${src[t$4.GTLT]}\\s*${src[t$4.XRANGEPLAIN]}$`);
            createToken("XRANGELOOSE", `^${src[t$4.GTLT]}\\s*${src[t$4.XRANGEPLAINLOOSE]}$`);
            createToken("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
            createToken("COERCE", `${src[t$4.COERCEPLAIN]}(?:$|[^\\d])`);
            createToken("COERCEFULL", src[t$4.COERCEPLAIN] + `(?:${src[t$4.PRERELEASE]})?(?:${src[t$4.BUILD]})?(?:$|[^\\d])`);
            createToken("COERCERTL", src[t$4.COERCE], true);
            createToken("COERCERTLFULL", src[t$4.COERCEFULL], true);
            createToken("LONETILDE", "(?:~>?)");
            createToken("TILDETRIM", `(\\s*)${src[t$4.LONETILDE]}\\s+`, true);
            exports.tildeTrimReplace = "$1~";
            createToken("TILDE", `^${src[t$4.LONETILDE]}${src[t$4.XRANGEPLAIN]}$`);
            createToken("TILDELOOSE", `^${src[t$4.LONETILDE]}${src[t$4.XRANGEPLAINLOOSE]}$`);
            createToken("LONECARET", "(?:\\^)");
            createToken("CARETTRIM", `(\\s*)${src[t$4.LONECARET]}\\s+`, true);
            exports.caretTrimReplace = "$1^";
            createToken("CARET", `^${src[t$4.LONECARET]}${src[t$4.XRANGEPLAIN]}$`);
            createToken("CARETLOOSE", `^${src[t$4.LONECARET]}${src[t$4.XRANGEPLAINLOOSE]}$`);
            createToken("COMPARATORLOOSE", `^${src[t$4.GTLT]}\\s*(${src[t$4.LOOSEPLAIN]})$|^$`);
            createToken("COMPARATOR", `^${src[t$4.GTLT]}\\s*(${src[t$4.FULLPLAIN]})$|^$`);
            createToken("COMPARATORTRIM", `(\\s*)${src[t$4.GTLT]}\\s*(${src[t$4.LOOSEPLAIN]}|${src[t$4.XRANGEPLAIN]})`, true);
            exports.comparatorTrimReplace = "$1$2$3";
            createToken("HYPHENRANGE", `^\\s*(${src[t$4.XRANGEPLAIN]})\\s+-\\s+(${src[t$4.XRANGEPLAIN]})\\s*$`);
            createToken("HYPHENRANGELOOSE", `^\\s*(${src[t$4.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t$4.XRANGEPLAINLOOSE]})\\s*$`);
            createToken("STAR", "(<|>)?=?\\s*\\*");
            createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
            createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/parse-options.js
        require_parse_options = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/parse-options.js": (exports, module) => {
            var looseOption = Object.freeze({
              loose: true
            });
            var emptyOpts = Object.freeze({});
            var parseOptions$3 = options => {
              if (!options) return emptyOpts;
              if (typeof options !== "object") return looseOption;
              return options;
            };
            module.exports = parseOptions$3;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/identifiers.js
        require_identifiers = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/identifiers.js": (exports, module) => {
            var numeric = /^[0-9]+$/;
            var compareIdentifiers$1 = (a, b) => {
              const anum = numeric.test(a);
              const bnum = numeric.test(b);
              if (anum && bnum) {
                a = +a;
                b = +b;
              }
              return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
            };
            var rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
            module.exports = {
              compareIdentifiers: compareIdentifiers$1,
              rcompareIdentifiers
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/semver.js
        require_semver$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/semver.js": (exports, module) => {
            var debug$2 = require_debug();
            var {
              MAX_LENGTH,
              MAX_SAFE_INTEGER
            } = require_constants();
            var {
              safeRe: re$3,
              t: t$3
            } = require_re();
            var parseOptions$2 = require_parse_options();
            var {
              compareIdentifiers
            } = require_identifiers();
            var SemVer$15 = class SemVer$15 {
              constructor(version, options) {
                options = parseOptions$2(options);
                if (version instanceof SemVer$15) {
                  if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) return version;else version = version.version;
                } else if (typeof version !== "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
                if (version.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
                debug$2("SemVer", version, options);
                this.options = options;
                this.loose = !!options.loose;
                this.includePrerelease = !!options.includePrerelease;
                const m = version.trim().match(options.loose ? re$3[t$3.LOOSE] : re$3[t$3.FULL]);
                if (!m) throw new TypeError(`Invalid Version: ${version}`);
                this.raw = version;
                this.major = +m[1];
                this.minor = +m[2];
                this.patch = +m[3];
                if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
                if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
                if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
                if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split(".").map(id => {
                  if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
                  }
                  return id;
                });
                this.build = m[5] ? m[5].split(".") : [];
                this.format();
              }
              format() {
                this.version = `${this.major}.${this.minor}.${this.patch}`;
                if (this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
                return this.version;
              }
              toString() {
                return this.version;
              }
              compare(other) {
                debug$2("SemVer.compare", this.version, this.options, other);
                if (!(other instanceof SemVer$15)) {
                  if (typeof other === "string" && other === this.version) return 0;
                  other = new SemVer$15(other, this.options);
                }
                if (other.version === this.version) return 0;
                return this.compareMain(other) || this.comparePre(other);
              }
              compareMain(other) {
                if (!(other instanceof SemVer$15)) other = new SemVer$15(other, this.options);
                return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
              }
              comparePre(other) {
                if (!(other instanceof SemVer$15)) other = new SemVer$15(other, this.options);
                if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
                let i = 0;
                do {
                  const a = this.prerelease[i];
                  const b = other.prerelease[i];
                  debug$2("prerelease compare", i, a, b);
                  if (a === void 0 && b === void 0) return 0;else if (b === void 0) return 1;else if (a === void 0) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
                } while (++i);
              }
              compareBuild(other) {
                if (!(other instanceof SemVer$15)) other = new SemVer$15(other, this.options);
                let i = 0;
                do {
                  const a = this.build[i];
                  const b = other.build[i];
                  debug$2("build compare", i, a, b);
                  if (a === void 0 && b === void 0) return 0;else if (b === void 0) return 1;else if (a === void 0) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
                } while (++i);
              }
              inc(release, identifier, identifierBase) {
                if (release.startsWith("pre")) {
                  if (!identifier && identifierBase === false) throw new Error("invalid increment argument: identifier is empty");
                  if (identifier) {
                    const match = `-${identifier}`.match(this.options.loose ? re$3[t$3.PRERELEASELOOSE] : re$3[t$3.PRERELEASE]);
                    if (!match || match[1] !== identifier) throw new Error(`invalid identifier: ${identifier}`);
                  }
                }
                switch (release) {
                  case "premajor":
                    this.prerelease.length = 0;
                    this.patch = 0;
                    this.minor = 0;
                    this.major++;
                    this.inc("pre", identifier, identifierBase);
                    break;
                  case "preminor":
                    this.prerelease.length = 0;
                    this.patch = 0;
                    this.minor++;
                    this.inc("pre", identifier, identifierBase);
                    break;
                  case "prepatch":
                    this.prerelease.length = 0;
                    this.inc("patch", identifier, identifierBase);
                    this.inc("pre", identifier, identifierBase);
                    break;
                  case "prerelease":
                    if (this.prerelease.length === 0) this.inc("patch", identifier, identifierBase);
                    this.inc("pre", identifier, identifierBase);
                    break;
                  case "release":
                    if (this.prerelease.length === 0) throw new Error(`version ${this.raw} is not a prerelease`);
                    this.prerelease.length = 0;
                    break;
                  case "major":
                    if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
                    this.minor = 0;
                    this.patch = 0;
                    this.prerelease = [];
                    break;
                  case "minor":
                    if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
                    this.patch = 0;
                    this.prerelease = [];
                    break;
                  case "patch":
                    if (this.prerelease.length === 0) this.patch++;
                    this.prerelease = [];
                    break;
                  case "pre":
                    {
                      const base = Number(identifierBase) ? 1 : 0;
                      if (this.prerelease.length === 0) this.prerelease = [base];else {
                        let i = this.prerelease.length;
                        while (--i >= 0) if (typeof this.prerelease[i] === "number") {
                          this.prerelease[i]++;
                          i = -2;
                        }
                        if (i === -1) {
                          if (identifier === this.prerelease.join(".") && identifierBase === false) throw new Error("invalid increment argument: identifier already exists");
                          this.prerelease.push(base);
                        }
                      }
                      if (identifier) {
                        let prerelease$2 = [identifier, base];
                        if (identifierBase === false) prerelease$2 = [identifier];
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                          if (isNaN(this.prerelease[1])) this.prerelease = prerelease$2;
                        } else this.prerelease = prerelease$2;
                      }
                      break;
                    }
                  default:
                    throw new Error(`invalid increment argument: ${release}`);
                }
                this.raw = this.format();
                if (this.build.length) this.raw += `+${this.build.join(".")}`;
                return this;
              }
            };
            module.exports = SemVer$15;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/parse.js
        require_parse = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/parse.js": (exports, module) => {
            var SemVer$14 = require_semver$1();
            var parse$6 = (version, options, throwErrors = false) => {
              if (version instanceof SemVer$14) return version;
              try {
                return new SemVer$14(version, options);
              } catch (er) {
                if (!throwErrors) return null;
                throw er;
              }
            };
            module.exports = parse$6;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/valid.js
        require_valid$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/valid.js": (exports, module) => {
            var parse$5 = require_parse();
            var valid$1 = (version, options) => {
              const v = parse$5(version, options);
              return v ? v.version : null;
            };
            module.exports = valid$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/clean.js
        require_clean = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/clean.js": (exports, module) => {
            var parse$4 = require_parse();
            var clean$1 = (version, options) => {
              const s = parse$4(version.trim().replace(/^[=v]+/, ""), options);
              return s ? s.version : null;
            };
            module.exports = clean$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/inc.js
        require_inc = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/inc.js": (exports, module) => {
            var SemVer$13 = require_semver$1();
            var inc$1 = (version, release, options, identifier, identifierBase) => {
              if (typeof options === "string") {
                identifierBase = identifier;
                identifier = options;
                options = void 0;
              }
              try {
                return new SemVer$13(version instanceof SemVer$13 ? version.version : version, options).inc(release, identifier, identifierBase).version;
              } catch (er) {
                return null;
              }
            };
            module.exports = inc$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/diff.js
        require_diff = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/diff.js": (exports, module) => {
            var parse$3 = require_parse();
            var diff$1 = (version1, version2) => {
              const v1 = parse$3(version1, null, true);
              const v2 = parse$3(version2, null, true);
              const comparison = v1.compare(v2);
              if (comparison === 0) return null;
              const v1Higher = comparison > 0;
              const highVersion = v1Higher ? v1 : v2;
              const lowVersion = v1Higher ? v2 : v1;
              const highHasPre = !!highVersion.prerelease.length;
              if (!!lowVersion.prerelease.length && !highHasPre) {
                if (!lowVersion.patch && !lowVersion.minor) return "major";
                if (lowVersion.compareMain(highVersion) === 0) {
                  if (lowVersion.minor && !lowVersion.patch) return "minor";
                  return "patch";
                }
              }
              const prefix = highHasPre ? "pre" : "";
              if (v1.major !== v2.major) return prefix + "major";
              if (v1.minor !== v2.minor) return prefix + "minor";
              if (v1.patch !== v2.patch) return prefix + "patch";
              return "prerelease";
            };
            module.exports = diff$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/major.js
        require_major = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/major.js": (exports, module) => {
            var SemVer$12 = require_semver$1();
            var major$1 = (a, loose) => new SemVer$12(a, loose).major;
            module.exports = major$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/minor.js
        require_minor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/minor.js": (exports, module) => {
            var SemVer$11 = require_semver$1();
            var minor$1 = (a, loose) => new SemVer$11(a, loose).minor;
            module.exports = minor$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/patch.js
        require_patch = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/patch.js": (exports, module) => {
            var SemVer$10 = require_semver$1();
            var patch$1 = (a, loose) => new SemVer$10(a, loose).patch;
            module.exports = patch$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/prerelease.js
        require_prerelease = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/prerelease.js": (exports, module) => {
            var parse$2 = require_parse();
            var prerelease$1 = (version, options) => {
              const parsed = parse$2(version, options);
              return parsed && parsed.prerelease.length ? parsed.prerelease : null;
            };
            module.exports = prerelease$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare.js
        require_compare = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare.js": (exports, module) => {
            var SemVer$9 = require_semver$1();
            var compare$11 = (a, b, loose) => new SemVer$9(a, loose).compare(new SemVer$9(b, loose));
            module.exports = compare$11;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rcompare.js
        require_rcompare = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rcompare.js": (exports, module) => {
            var compare$10 = require_compare();
            var rcompare$1 = (a, b, loose) => compare$10(b, a, loose);
            module.exports = rcompare$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-loose.js
        require_compare_loose = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-loose.js": (exports, module) => {
            var compare$9 = require_compare();
            var compareLoose$1 = (a, b) => compare$9(a, b, true);
            module.exports = compareLoose$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-build.js
        require_compare_build = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-build.js": (exports, module) => {
            var SemVer$8 = require_semver$1();
            var compareBuild$3 = (a, b, loose) => {
              const versionA = new SemVer$8(a, loose);
              const versionB = new SemVer$8(b, loose);
              return versionA.compare(versionB) || versionA.compareBuild(versionB);
            };
            module.exports = compareBuild$3;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/sort.js
        require_sort = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/sort.js": (exports, module) => {
            var compareBuild$2 = require_compare_build();
            var sort$1 = (list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose));
            module.exports = sort$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rsort.js
        require_rsort = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rsort.js": (exports, module) => {
            var compareBuild$1 = require_compare_build();
            var rsort$1 = (list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose));
            module.exports = rsort$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gt.js
        require_gt = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gt.js": (exports, module) => {
            var compare$8 = require_compare();
            var gt$4 = (a, b, loose) => compare$8(a, b, loose) > 0;
            module.exports = gt$4;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lt.js
        require_lt = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lt.js": (exports, module) => {
            var compare$7 = require_compare();
            var lt$3 = (a, b, loose) => compare$7(a, b, loose) < 0;
            module.exports = lt$3;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/eq.js
        require_eq = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/eq.js": (exports, module) => {
            var compare$6 = require_compare();
            var eq$2 = (a, b, loose) => compare$6(a, b, loose) === 0;
            module.exports = eq$2;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/neq.js
        require_neq = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/neq.js": (exports, module) => {
            var compare$5 = require_compare();
            var neq$2 = (a, b, loose) => compare$5(a, b, loose) !== 0;
            module.exports = neq$2;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gte.js
        require_gte = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gte.js": (exports, module) => {
            var compare$4 = require_compare();
            var gte$3 = (a, b, loose) => compare$4(a, b, loose) >= 0;
            module.exports = gte$3;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lte.js
        require_lte = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lte.js": (exports, module) => {
            var compare$3 = require_compare();
            var lte$3 = (a, b, loose) => compare$3(a, b, loose) <= 0;
            module.exports = lte$3;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/cmp.js
        require_cmp = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/cmp.js": (exports, module) => {
            var eq$1 = require_eq();
            var neq$1 = require_neq();
            var gt$3 = require_gt();
            var gte$2 = require_gte();
            var lt$2 = require_lt();
            var lte$2 = require_lte();
            var cmp$2 = (a, op, b, loose) => {
              switch (op) {
                case "===":
                  if (typeof a === "object") a = a.version;
                  if (typeof b === "object") b = b.version;
                  return a === b;
                case "!==":
                  if (typeof a === "object") a = a.version;
                  if (typeof b === "object") b = b.version;
                  return a !== b;
                case "":
                case "=":
                case "==":
                  return eq$1(a, b, loose);
                case "!=":
                  return neq$1(a, b, loose);
                case ">":
                  return gt$3(a, b, loose);
                case ">=":
                  return gte$2(a, b, loose);
                case "<":
                  return lt$2(a, b, loose);
                case "<=":
                  return lte$2(a, b, loose);
                default:
                  throw new TypeError(`Invalid operator: ${op}`);
              }
            };
            module.exports = cmp$2;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/coerce.js
        require_coerce = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/coerce.js": (exports, module) => {
            var SemVer$7 = require_semver$1();
            var parse$1 = require_parse();
            var {
              safeRe: re$2,
              t: t$2
            } = require_re();
            var coerce$1 = (version, options) => {
              if (version instanceof SemVer$7) return version;
              if (typeof version === "number") version = String(version);
              if (typeof version !== "string") return null;
              options = options || {};
              let match = null;
              if (!options.rtl) match = version.match(options.includePrerelease ? re$2[t$2.COERCEFULL] : re$2[t$2.COERCE]);else {
                const coerceRtlRegex = options.includePrerelease ? re$2[t$2.COERCERTLFULL] : re$2[t$2.COERCERTL];
                let next;
                while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
                  if (!match || next.index + next[0].length !== match.index + match[0].length) match = next;
                  coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
                }
                coerceRtlRegex.lastIndex = -1;
              }
              if (match === null) return null;
              const major$2 = match[2];
              return parse$1(`${major$2}.${match[3] || "0"}.${match[4] || "0"}${options.includePrerelease && match[5] ? `-${match[5]}` : ""}${options.includePrerelease && match[6] ? `+${match[6]}` : ""}`, options);
            };
            module.exports = coerce$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/lrucache.js
        require_lrucache = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/lrucache.js": (exports, module) => {
            var LRUCache = class {
              constructor() {
                this.max = 1e3;
                this.map = /* @__PURE__ */new Map();
              }
              get(key) {
                const value = this.map.get(key);
                if (value === void 0) return;else {
                  this.map.delete(key);
                  this.map.set(key, value);
                  return value;
                }
              }
              delete(key) {
                return this.map.delete(key);
              }
              set(key, value) {
                if (!this.delete(key) && value !== void 0) {
                  if (this.map.size >= this.max) {
                    const firstKey = this.map.keys().next().value;
                    this.delete(firstKey);
                  }
                  this.map.set(key, value);
                }
                return this;
              }
            };
            module.exports = LRUCache;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/range.js
        require_range = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/range.js": (exports, module) => {
            var SPACE_CHARACTERS = /\s+/g;
            var Range$11 = class Range$11 {
              constructor(range, options) {
                options = parseOptions$1(options);
                if (range instanceof Range$11) if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) return range;else return new Range$11(range.raw, options);
                if (range instanceof Comparator$4) {
                  this.raw = range.value;
                  this.set = [[range]];
                  this.formatted = void 0;
                  return this;
                }
                this.options = options;
                this.loose = !!options.loose;
                this.includePrerelease = !!options.includePrerelease;
                this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
                this.set = this.raw.split("||").map(r => this.parseRange(r.trim())).filter(c => c.length);
                if (!this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                  const first = this.set[0];
                  this.set = this.set.filter(c => !isNullSet(c[0]));
                  if (this.set.length === 0) this.set = [first];else if (this.set.length > 1) {
                    for (const c of this.set) if (c.length === 1 && isAny(c[0])) {
                      this.set = [c];
                      break;
                    }
                  }
                }
                this.formatted = void 0;
              }
              get range() {
                if (this.formatted === void 0) {
                  this.formatted = "";
                  for (let i = 0; i < this.set.length; i++) {
                    if (i > 0) this.formatted += "||";
                    const comps = this.set[i];
                    for (let k = 0; k < comps.length; k++) {
                      if (k > 0) this.formatted += " ";
                      this.formatted += comps[k].toString().trim();
                    }
                  }
                }
                return this.formatted;
              }
              format() {
                return this.range;
              }
              toString() {
                return this.range;
              }
              parseRange(range) {
                const memoKey = ((this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE)) + ":" + range;
                const cached = cache.get(memoKey);
                if (cached) return cached;
                const loose = this.options.loose;
                const hr = loose ? re$1[t$1.HYPHENRANGELOOSE] : re$1[t$1.HYPHENRANGE];
                range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
                debug$1("hyphen replace", range);
                range = range.replace(re$1[t$1.COMPARATORTRIM], comparatorTrimReplace);
                debug$1("comparator trim", range);
                range = range.replace(re$1[t$1.TILDETRIM], tildeTrimReplace);
                debug$1("tilde trim", range);
                range = range.replace(re$1[t$1.CARETTRIM], caretTrimReplace);
                debug$1("caret trim", range);
                let rangeList = range.split(" ").map(comp => parseComparator(comp, this.options)).join(" ").split(/\s+/).map(comp => replaceGTE0(comp, this.options));
                if (loose) rangeList = rangeList.filter(comp => {
                  debug$1("loose invalid filter", comp, this.options);
                  return !!comp.match(re$1[t$1.COMPARATORLOOSE]);
                });
                debug$1("range list", rangeList);
                const rangeMap = /* @__PURE__ */new Map();
                const comparators = rangeList.map(comp => new Comparator$4(comp, this.options));
                for (const comp of comparators) {
                  if (isNullSet(comp)) return [comp];
                  rangeMap.set(comp.value, comp);
                }
                if (rangeMap.size > 1 && rangeMap.has("")) rangeMap.delete("");
                const result = [...rangeMap.values()];
                cache.set(memoKey, result);
                return result;
              }
              intersects(range, options) {
                if (!(range instanceof Range$11)) throw new TypeError("a Range is required");
                return this.set.some(thisComparators => {
                  return isSatisfiable(thisComparators, options) && range.set.some(rangeComparators => {
                    return isSatisfiable(rangeComparators, options) && thisComparators.every(thisComparator => {
                      return rangeComparators.every(rangeComparator => {
                        return thisComparator.intersects(rangeComparator, options);
                      });
                    });
                  });
                });
              }
              test(version) {
                if (!version) return false;
                if (typeof version === "string") try {
                  version = new SemVer$6(version, this.options);
                } catch (er) {
                  return false;
                }
                for (let i = 0; i < this.set.length; i++) if (testSet(this.set[i], version, this.options)) return true;
                return false;
              }
            };
            module.exports = Range$11;
            var cache = new (require_lrucache())();
            var parseOptions$1 = require_parse_options();
            var Comparator$4 = require_comparator();
            var debug$1 = require_debug();
            var SemVer$6 = require_semver$1();
            var {
              safeRe: re$1,
              t: t$1,
              comparatorTrimReplace,
              tildeTrimReplace,
              caretTrimReplace
            } = require_re();
            var {
              FLAG_INCLUDE_PRERELEASE,
              FLAG_LOOSE
            } = require_constants();
            var isNullSet = c => c.value === "<0.0.0-0";
            var isAny = c => c.value === "";
            var isSatisfiable = (comparators, options) => {
              let result = true;
              const remainingComparators = comparators.slice();
              let testComparator = remainingComparators.pop();
              while (result && remainingComparators.length) {
                result = remainingComparators.every(otherComparator => {
                  return testComparator.intersects(otherComparator, options);
                });
                testComparator = remainingComparators.pop();
              }
              return result;
            };
            var parseComparator = (comp, options) => {
              debug$1("comp", comp, options);
              comp = replaceCarets(comp, options);
              debug$1("caret", comp);
              comp = replaceTildes(comp, options);
              debug$1("tildes", comp);
              comp = replaceXRanges(comp, options);
              debug$1("xrange", comp);
              comp = replaceStars(comp, options);
              debug$1("stars", comp);
              return comp;
            };
            var isX = id => !id || id.toLowerCase() === "x" || id === "*";
            var replaceTildes = (comp, options) => {
              return comp.trim().split(/\s+/).map(c => replaceTilde(c, options)).join(" ");
            };
            var replaceTilde = (comp, options) => {
              const r = options.loose ? re$1[t$1.TILDELOOSE] : re$1[t$1.TILDE];
              return comp.replace(r, (_, M, m, p, pr) => {
                debug$1("tilde", comp, _, M, m, p, pr);
                let ret;
                if (isX(M)) ret = "";else if (isX(m)) ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;else if (isX(p)) ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;else if (pr) {
                  debug$1("replaceTilde pr", pr);
                  ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                } else ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
                debug$1("tilde return", ret);
                return ret;
              });
            };
            var replaceCarets = (comp, options) => {
              return comp.trim().split(/\s+/).map(c => replaceCaret(c, options)).join(" ");
            };
            var replaceCaret = (comp, options) => {
              debug$1("caret", comp, options);
              const r = options.loose ? re$1[t$1.CARETLOOSE] : re$1[t$1.CARET];
              const z = options.includePrerelease ? "-0" : "";
              return comp.replace(r, (_, M, m, p, pr) => {
                debug$1("caret", comp, _, M, m, p, pr);
                let ret;
                if (isX(M)) ret = "";else if (isX(m)) ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;else if (isX(p)) {
                  if (M === "0") ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;else ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
                } else if (pr) {
                  debug$1("replaceCaret pr", pr);
                  if (M === "0") {
                    if (m === "0") ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;else ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                  } else ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
                } else {
                  debug$1("no pr");
                  if (M === "0") {
                    if (m === "0") ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;else ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                  } else ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
                }
                debug$1("caret return", ret);
                return ret;
              });
            };
            var replaceXRanges = (comp, options) => {
              debug$1("replaceXRanges", comp, options);
              return comp.split(/\s+/).map(c => replaceXRange(c, options)).join(" ");
            };
            var replaceXRange = (comp, options) => {
              comp = comp.trim();
              const r = options.loose ? re$1[t$1.XRANGELOOSE] : re$1[t$1.XRANGE];
              return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
                debug$1("xRange", comp, ret, gtlt, M, m, p, pr);
                const xM = isX(M);
                const xm = xM || isX(m);
                const xp = xm || isX(p);
                const anyX = xp;
                if (gtlt === "=" && anyX) gtlt = "";
                pr = options.includePrerelease ? "-0" : "";
                if (xM) {
                  if (gtlt === ">" || gtlt === "<") ret = "<0.0.0-0";else ret = "*";
                } else if (gtlt && anyX) {
                  if (xm) m = 0;
                  p = 0;
                  if (gtlt === ">") {
                    gtlt = ">=";
                    if (xm) {
                      M = +M + 1;
                      m = 0;
                      p = 0;
                    } else {
                      m = +m + 1;
                      p = 0;
                    }
                  } else if (gtlt === "<=") {
                    gtlt = "<";
                    if (xm) M = +M + 1;else m = +m + 1;
                  }
                  if (gtlt === "<") pr = "-0";
                  ret = `${gtlt + M}.${m}.${p}${pr}`;
                } else if (xm) ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;else if (xp) ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
                debug$1("xRange return", ret);
                return ret;
              });
            };
            var replaceStars = (comp, options) => {
              debug$1("replaceStars", comp, options);
              return comp.trim().replace(re$1[t$1.STAR], "");
            };
            var replaceGTE0 = (comp, options) => {
              debug$1("replaceGTE0", comp, options);
              return comp.trim().replace(re$1[options.includePrerelease ? t$1.GTE0PRE : t$1.GTE0], "");
            };
            var hyphenReplace = incPr => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
              if (isX(fM)) from = "";else if (isX(fm)) from = `>=${fM}.0.0${incPr ? "-0" : ""}`;else if (isX(fp)) from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;else if (fpr) from = `>=${from}`;else from = `>=${from}${incPr ? "-0" : ""}`;
              if (isX(tM)) to = "";else if (isX(tm)) to = `<${+tM + 1}.0.0-0`;else if (isX(tp)) to = `<${tM}.${+tm + 1}.0-0`;else if (tpr) to = `<=${tM}.${tm}.${tp}-${tpr}`;else if (incPr) to = `<${tM}.${tm}.${+tp + 1}-0`;else to = `<=${to}`;
              return `${from} ${to}`.trim();
            };
            var testSet = (set, version, options) => {
              for (let i = 0; i < set.length; i++) if (!set[i].test(version)) return false;
              if (version.prerelease.length && !options.includePrerelease) {
                for (let i = 0; i < set.length; i++) {
                  debug$1(set[i].semver);
                  if (set[i].semver === Comparator$4.ANY) continue;
                  if (set[i].semver.prerelease.length > 0) {
                    const allowed = set[i].semver;
                    if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
                  }
                }
                return false;
              }
              return true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/comparator.js
        require_comparator = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/comparator.js": (exports, module) => {
            var ANY$2 = Symbol("SemVer ANY");
            var Comparator$3 = class Comparator$3 {
              static get ANY() {
                return ANY$2;
              }
              constructor(comp, options) {
                options = parseOptions(options);
                if (comp instanceof Comparator$3) if (comp.loose === !!options.loose) return comp;else comp = comp.value;
                comp = comp.trim().split(/\s+/).join(" ");
                debug("comparator", comp, options);
                this.options = options;
                this.loose = !!options.loose;
                this.parse(comp);
                if (this.semver === ANY$2) this.value = "";else this.value = this.operator + this.semver.version;
                debug("comp", this);
              }
              parse(comp) {
                const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
                const m = comp.match(r);
                if (!m) throw new TypeError(`Invalid comparator: ${comp}`);
                this.operator = m[1] !== void 0 ? m[1] : "";
                if (this.operator === "=") this.operator = "";
                if (!m[2]) this.semver = ANY$2;else this.semver = new SemVer$5(m[2], this.options.loose);
              }
              toString() {
                return this.value;
              }
              test(version) {
                debug("Comparator.test", version, this.options.loose);
                if (this.semver === ANY$2 || version === ANY$2) return true;
                if (typeof version === "string") try {
                  version = new SemVer$5(version, this.options);
                } catch (er) {
                  return false;
                }
                return cmp$1(version, this.operator, this.semver, this.options);
              }
              intersects(comp, options) {
                if (!(comp instanceof Comparator$3)) throw new TypeError("a Comparator is required");
                if (this.operator === "") {
                  if (this.value === "") return true;
                  return new Range$10(comp.value, options).test(this.value);
                } else if (comp.operator === "") {
                  if (comp.value === "") return true;
                  return new Range$10(this.value, options).test(comp.semver);
                }
                options = parseOptions(options);
                if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) return false;
                if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) return false;
                if (this.operator.startsWith(">") && comp.operator.startsWith(">")) return true;
                if (this.operator.startsWith("<") && comp.operator.startsWith("<")) return true;
                if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) return true;
                if (cmp$1(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) return true;
                if (cmp$1(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) return true;
                return false;
              }
            };
            module.exports = Comparator$3;
            var parseOptions = require_parse_options();
            var {
              safeRe: re,
              t
            } = require_re();
            var cmp$1 = require_cmp();
            var debug = require_debug();
            var SemVer$5 = require_semver$1();
            var Range$10 = require_range();
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/satisfies.js
        require_satisfies = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/satisfies.js": (exports, module) => {
            var Range$9 = require_range();
            var satisfies$4 = (version, range, options) => {
              try {
                range = new Range$9(range, options);
              } catch (er) {
                return false;
              }
              return range.test(version);
            };
            module.exports = satisfies$4;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/to-comparators.js
        require_to_comparators = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/to-comparators.js": (exports, module) => {
            var Range$8 = require_range();
            var toComparators$1 = (range, options) => new Range$8(range, options).set.map(comp => comp.map(c => c.value).join(" ").trim().split(" "));
            module.exports = toComparators$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/max-satisfying.js
        require_max_satisfying = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/max-satisfying.js": (exports, module) => {
            var SemVer$4 = require_semver$1();
            var Range$7 = require_range();
            var maxSatisfying$1 = (versions, range, options) => {
              let max = null;
              let maxSV = null;
              let rangeObj = null;
              try {
                rangeObj = new Range$7(range, options);
              } catch (er) {
                return null;
              }
              versions.forEach(v => {
                if (rangeObj.test(v)) {
                  if (!max || maxSV.compare(v) === -1) {
                    max = v;
                    maxSV = new SemVer$4(max, options);
                  }
                }
              });
              return max;
            };
            module.exports = maxSatisfying$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-satisfying.js
        require_min_satisfying = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-satisfying.js": (exports, module) => {
            var SemVer$3 = require_semver$1();
            var Range$6 = require_range();
            var minSatisfying$1 = (versions, range, options) => {
              let min = null;
              let minSV = null;
              let rangeObj = null;
              try {
                rangeObj = new Range$6(range, options);
              } catch (er) {
                return null;
              }
              versions.forEach(v => {
                if (rangeObj.test(v)) {
                  if (!min || minSV.compare(v) === 1) {
                    min = v;
                    minSV = new SemVer$3(min, options);
                  }
                }
              });
              return min;
            };
            module.exports = minSatisfying$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-version.js
        require_min_version = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-version.js": (exports, module) => {
            var SemVer$2 = require_semver$1();
            var Range$5 = require_range();
            var gt$2 = require_gt();
            var minVersion$1 = (range, loose) => {
              range = new Range$5(range, loose);
              let minver = new SemVer$2("0.0.0");
              if (range.test(minver)) return minver;
              minver = new SemVer$2("0.0.0-0");
              if (range.test(minver)) return minver;
              minver = null;
              for (let i = 0; i < range.set.length; ++i) {
                const comparators = range.set[i];
                let setMin = null;
                comparators.forEach(comparator => {
                  const compver = new SemVer$2(comparator.semver.version);
                  switch (comparator.operator) {
                    case ">":
                      if (compver.prerelease.length === 0) compver.patch++;else compver.prerelease.push(0);
                      compver.raw = compver.format();
                    case "":
                    case ">=":
                      if (!setMin || gt$2(compver, setMin)) setMin = compver;
                      break;
                    case "<":
                    case "<=":
                      break;
                    default:
                      throw new Error(`Unexpected operation: ${comparator.operator}`);
                  }
                });
                if (setMin && (!minver || gt$2(minver, setMin))) minver = setMin;
              }
              if (minver && range.test(minver)) return minver;
              return null;
            };
            module.exports = minVersion$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/valid.js
        require_valid = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/valid.js": (exports, module) => {
            var Range$4 = require_range();
            var validRange$1 = (range, options) => {
              try {
                return new Range$4(range, options).range || "*";
              } catch (er) {
                return null;
              }
            };
            module.exports = validRange$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/outside.js
        require_outside = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/outside.js": (exports, module) => {
            var SemVer$1 = require_semver$1();
            var Comparator$2 = require_comparator();
            var {
              ANY: ANY$1
            } = Comparator$2;
            var Range$3 = require_range();
            var satisfies$3 = require_satisfies();
            var gt$1 = require_gt();
            var lt$1 = require_lt();
            var lte$1 = require_lte();
            var gte$1 = require_gte();
            var outside$3 = (version, range, hilo, options) => {
              version = new SemVer$1(version, options);
              range = new Range$3(range, options);
              let gtfn, ltefn, ltfn, comp, ecomp;
              switch (hilo) {
                case ">":
                  gtfn = gt$1;
                  ltefn = lte$1;
                  ltfn = lt$1;
                  comp = ">";
                  ecomp = ">=";
                  break;
                case "<":
                  gtfn = lt$1;
                  ltefn = gte$1;
                  ltfn = gt$1;
                  comp = "<";
                  ecomp = "<=";
                  break;
                default:
                  throw new TypeError("Must provide a hilo val of \"<\" or \">\"");
              }
              if (satisfies$3(version, range, options)) return false;
              for (let i = 0; i < range.set.length; ++i) {
                const comparators = range.set[i];
                let high = null;
                let low = null;
                comparators.forEach(comparator => {
                  if (comparator.semver === ANY$1) comparator = new Comparator$2(">=0.0.0");
                  high = high || comparator;
                  low = low || comparator;
                  if (gtfn(comparator.semver, high.semver, options)) high = comparator;else if (ltfn(comparator.semver, low.semver, options)) low = comparator;
                });
                if (high.operator === comp || high.operator === ecomp) return false;
                if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) return false;else if (low.operator === ecomp && ltfn(version, low.semver)) return false;
              }
              return true;
            };
            module.exports = outside$3;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/gtr.js
        require_gtr = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/gtr.js": (exports, module) => {
            var outside$2 = require_outside();
            var gtr$1 = (version, range, options) => outside$2(version, range, ">", options);
            module.exports = gtr$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/ltr.js
        require_ltr = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/ltr.js": (exports, module) => {
            var outside$1 = require_outside();
            var ltr$1 = (version, range, options) => outside$1(version, range, "<", options);
            module.exports = ltr$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/intersects.js
        require_intersects = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/intersects.js": (exports, module) => {
            var Range$2 = require_range();
            var intersects$1 = (r1, r2, options) => {
              r1 = new Range$2(r1, options);
              r2 = new Range$2(r2, options);
              return r1.intersects(r2, options);
            };
            module.exports = intersects$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/simplify.js
        require_simplify = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/simplify.js": (exports, module) => {
            var satisfies$2 = require_satisfies();
            var compare$2 = require_compare();
            module.exports = (versions, range, options) => {
              const set = [];
              let first = null;
              let prev = null;
              const v = versions.sort((a, b) => compare$2(a, b, options));
              for (const version of v) if (satisfies$2(version, range, options)) {
                prev = version;
                if (!first) first = version;
              } else {
                if (prev) set.push([first, prev]);
                prev = null;
                first = null;
              }
              if (first) set.push([first, null]);
              const ranges = [];
              for (const [min, max] of set) if (min === max) ranges.push(min);else if (!max && min === v[0]) ranges.push("*");else if (!max) ranges.push(`>=${min}`);else if (min === v[0]) ranges.push(`<=${max}`);else ranges.push(`${min} - ${max}`);
              const simplified = ranges.join(" || ");
              const original = typeof range.raw === "string" ? range.raw : String(range);
              return simplified.length < original.length ? simplified : range;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/subset.js
        require_subset = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/subset.js": (exports, module) => {
            var Range$1 = require_range();
            var Comparator$1 = require_comparator();
            var {
              ANY
            } = Comparator$1;
            var satisfies$1 = require_satisfies();
            var compare$1 = require_compare();
            var subset$1 = (sub, dom, options = {}) => {
              if (sub === dom) return true;
              sub = new Range$1(sub, options);
              dom = new Range$1(dom, options);
              let sawNonNull = false;
              OUTER: for (const simpleSub of sub.set) {
                for (const simpleDom of dom.set) {
                  const isSub = simpleSubset(simpleSub, simpleDom, options);
                  sawNonNull = sawNonNull || isSub !== null;
                  if (isSub) continue OUTER;
                }
                if (sawNonNull) return false;
              }
              return true;
            };
            var minimumVersionWithPreRelease = [new Comparator$1(">=0.0.0-0")];
            var minimumVersion = [new Comparator$1(">=0.0.0")];
            var simpleSubset = (sub, dom, options) => {
              if (sub === dom) return true;
              if (sub.length === 1 && sub[0].semver === ANY) if (dom.length === 1 && dom[0].semver === ANY) return true;else if (options.includePrerelease) sub = minimumVersionWithPreRelease;else sub = minimumVersion;
              if (dom.length === 1 && dom[0].semver === ANY) if (options.includePrerelease) return true;else dom = minimumVersion;
              const eqSet = /* @__PURE__ */new Set();
              let gt$5, lt$4;
              for (const c of sub) if (c.operator === ">" || c.operator === ">=") gt$5 = higherGT(gt$5, c, options);else if (c.operator === "<" || c.operator === "<=") lt$4 = lowerLT(lt$4, c, options);else eqSet.add(c.semver);
              if (eqSet.size > 1) return null;
              let gtltComp;
              if (gt$5 && lt$4) {
                gtltComp = compare$1(gt$5.semver, lt$4.semver, options);
                if (gtltComp > 0) return null;else if (gtltComp === 0 && (gt$5.operator !== ">=" || lt$4.operator !== "<=")) return null;
              }
              for (const eq$3 of eqSet) {
                if (gt$5 && !satisfies$1(eq$3, String(gt$5), options)) return null;
                if (lt$4 && !satisfies$1(eq$3, String(lt$4), options)) return null;
                for (const c of dom) if (!satisfies$1(eq$3, String(c), options)) return false;
                return true;
              }
              let higher, lower;
              let hasDomLT, hasDomGT;
              let needDomLTPre = lt$4 && !options.includePrerelease && lt$4.semver.prerelease.length ? lt$4.semver : false;
              let needDomGTPre = gt$5 && !options.includePrerelease && gt$5.semver.prerelease.length ? gt$5.semver : false;
              if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt$4.operator === "<" && needDomLTPre.prerelease[0] === 0) needDomLTPre = false;
              for (const c of dom) {
                hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
                hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
                if (gt$5) {
                  if (needDomGTPre) {
                    if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) needDomGTPre = false;
                  }
                  if (c.operator === ">" || c.operator === ">=") {
                    higher = higherGT(gt$5, c, options);
                    if (higher === c && higher !== gt$5) return false;
                  } else if (gt$5.operator === ">=" && !satisfies$1(gt$5.semver, String(c), options)) return false;
                }
                if (lt$4) {
                  if (needDomLTPre) {
                    if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) needDomLTPre = false;
                  }
                  if (c.operator === "<" || c.operator === "<=") {
                    lower = lowerLT(lt$4, c, options);
                    if (lower === c && lower !== lt$4) return false;
                  } else if (lt$4.operator === "<=" && !satisfies$1(lt$4.semver, String(c), options)) return false;
                }
                if (!c.operator && (lt$4 || gt$5) && gtltComp !== 0) return false;
              }
              if (gt$5 && hasDomLT && !lt$4 && gtltComp !== 0) return false;
              if (lt$4 && hasDomGT && !gt$5 && gtltComp !== 0) return false;
              if (needDomGTPre || needDomLTPre) return false;
              return true;
            };
            var higherGT = (a, b, options) => {
              if (!a) return b;
              const comp = compare$1(a.semver, b.semver, options);
              return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
            };
            var lowerLT = (a, b, options) => {
              if (!a) return b;
              const comp = compare$1(a.semver, b.semver, options);
              return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
            };
            module.exports = subset$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js
        _export("t", require_semver = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js": (exports, module) => {
            var internalRe = require_re();
            var constants = require_constants();
            var SemVer = require_semver$1();
            var identifiers = require_identifiers();
            var parse = require_parse();
            var valid = require_valid$1();
            var clean = require_clean();
            var inc = require_inc();
            var diff = require_diff();
            var major = require_major();
            var minor = require_minor();
            var patch = require_patch();
            var prerelease = require_prerelease();
            var compare = require_compare();
            var rcompare = require_rcompare();
            var compareLoose = require_compare_loose();
            var compareBuild = require_compare_build();
            var sort = require_sort();
            var rsort = require_rsort();
            var gt = require_gt();
            var lt = require_lt();
            var eq = require_eq();
            var neq = require_neq();
            var gte = require_gte();
            var lte = require_lte();
            var cmp = require_cmp();
            var coerce = require_coerce();
            var Comparator = require_comparator();
            var Range = require_range();
            var satisfies = require_satisfies();
            var toComparators = require_to_comparators();
            var maxSatisfying = require_max_satisfying();
            var minSatisfying = require_min_satisfying();
            var minVersion = require_min_version();
            var validRange = require_valid();
            var outside = require_outside();
            var gtr = require_gtr();
            var ltr = require_ltr();
            var intersects = require_intersects();
            var simplifyRange = require_simplify();
            var subset = require_subset();
            module.exports = {
              parse,
              valid,
              clean,
              inc,
              diff,
              major,
              minor,
              patch,
              prerelease,
              compare,
              rcompare,
              compareLoose,
              compareBuild,
              sort,
              rsort,
              gt,
              lt,
              eq,
              neq,
              gte,
              lte,
              cmp,
              coerce,
              Comparator,
              Range,
              satisfies,
              toComparators,
              maxSatisfying,
              minSatisfying,
              minVersion,
              validRange,
              outside,
              gtr,
              ltr,
              intersects,
              simplifyRange,
              subset,
              SemVer,
              re: internalRe.re,
              src: internalRe.src,
              tokens: internalRe.t,
              SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
              RELEASE_TYPES: constants.RELEASE_TYPES,
              compareIdentifiers: identifiers.compareIdentifiers,
              rcompareIdentifiers: identifiers.rcompareIdentifiers
            };
          }
        })); //#endregion
      }
    };
  });
})();