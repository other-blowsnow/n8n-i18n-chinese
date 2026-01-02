import { a as __toCommonJS, n as __esmMin, o as __toESM, r as __export, t as __commonJSMin } from "./chunk-6z4oVpB-.js";
import { Dn as init_dist, En as global } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { T as require___vite_browser_external, a as require_callBound, i as init_dist$1, n as init_empty, r as Buffer, t as empty_exports, u as require_get_intrinsic } from "./empty-BuGRxzl4.js";
import { t as require_path_browserify } from "./path-browserify-BgjP7RyT.js";
var require_punycode = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist();
	(function(root) {
		var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
		var freeModule = typeof module == "object" && module && !module.nodeType && module;
		var freeGlobal = typeof global == "object" && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
		var punycode$1, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
			"overflow": "Overflow: input needs wider integers to process",
			"not-basic": "Illegal input >= 0x80 (not a basic code point)",
			"invalid-input": "Invalid input"
		}, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
		function error(type) {
			throw new RangeError(errors[type]);
		}
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) result[length] = fn(array[length]);
			return result;
		}
		function mapDomain(string, fn) {
			var parts = string.split("@");
			var result = "";
			if (parts.length > 1) {
				result = parts[0] + "@";
				string = parts[1];
			}
			string = string.replace(regexSeparators, ".");
			var encoded = map(string.split("."), fn).join(".");
			return result + encoded;
		}
		function ucs2decode(string) {
			var output = [], counter = 0, length = string.length, value, extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 55296 && value <= 56319 && counter < length) {
					extra = string.charCodeAt(counter++);
					if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
					else {
						output.push(value);
						counter--;
					}
				} else output.push(value);
			}
			return output;
		}
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = "";
				if (value > 65535) {
					value -= 65536;
					output += stringFromCharCode(value >>> 10 & 1023 | 55296);
					value = 56320 | value & 1023;
				}
				output += stringFromCharCode(value);
				return output;
			}).join("");
		}
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) return codePoint - 22;
			if (codePoint - 65 < 26) return codePoint - 65;
			if (codePoint - 97 < 26) return codePoint - 97;
			return base;
		}
		function digitToBasic(digit, flag) {
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (; delta > baseMinusTMin * tMax >> 1; k += base) delta = floor(delta / baseMinusTMin);
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
		function decode$2(input) {
			var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic = input.lastIndexOf(delimiter), j, index, oldi, w, k, digit, t, baseMinusT;
			if (basic < 0) basic = 0;
			for (j = 0; j < basic; ++j) {
				if (input.charCodeAt(j) >= 128) error("not-basic");
				output.push(input.charCodeAt(j));
			}
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
				for (oldi = i, w = 1, k = base;; k += base) {
					if (index >= inputLength) error("invalid-input");
					digit = basicToDigit(input.charCodeAt(index++));
					if (digit >= base || digit > floor((maxInt - i) / w)) error("overflow");
					i += digit * w;
					t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
					if (digit < t) break;
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) error("overflow");
					w *= baseMinusT;
				}
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
				if (floor(i / out) > maxInt - n) error("overflow");
				n += floor(i / out);
				i %= out;
				output.splice(i++, 0, n);
			}
			return ucs2encode(output);
		}
		function encode$2(input) {
			var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
			input = ucs2decode(input);
			inputLength = input.length;
			n = initialN;
			delta = 0;
			bias = initialBias;
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 128) output.push(stringFromCharCode(currentValue));
			}
			handledCPCount = basicLength = output.length;
			if (basicLength) output.push(delimiter);
			while (handledCPCount < inputLength) {
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) m = currentValue;
				}
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < n && ++delta > maxInt) error("overflow");
					if (currentValue == n) {
						for (q = delta, k = base;; k += base) {
							t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) break;
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
				++delta;
				++n;
			}
			return output.join("");
		}
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string) ? decode$2(string.slice(4).toLowerCase()) : string;
			});
		}
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string) ? "xn--" + encode$2(string) : string;
			});
		}
		punycode$1 = {
			"version": "1.4.1",
			"ucs2": {
				"decode": ucs2decode,
				"encode": ucs2encode
			},
			"decode": decode$2,
			"encode": encode$2,
			"toASCII": toASCII,
			"toUnicode": toUnicode
		};
		if (typeof define == "function" && typeof define.amd == "object" && define.amd) define("punycode", function() {
			return punycode$1;
		});
		else if (freeExports && freeModule) if (module.exports == freeExports) freeModule.exports = punycode$1;
		else for (key in punycode$1) punycode$1.hasOwnProperty(key) && (freeExports[key] = punycode$1[key]);
		else root.punycode = punycode$1;
	})(exports);
}));
var require_decode_data_html = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new Uint16Array("ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map(function(c) {
		return c.charCodeAt(0);
	}));
}));
var require_decode_data_xml = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(c) {
		return c.charCodeAt(0);
	}));
}));
var require_decode_codepoint = /* @__PURE__ */ __commonJSMin(((exports) => {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.replaceCodePoint = exports.fromCodePoint = void 0;
	var decodeMap = new Map([
		[0, 65533],
		[128, 8364],
		[130, 8218],
		[131, 402],
		[132, 8222],
		[133, 8230],
		[134, 8224],
		[135, 8225],
		[136, 710],
		[137, 8240],
		[138, 352],
		[139, 8249],
		[140, 338],
		[142, 381],
		[145, 8216],
		[146, 8217],
		[147, 8220],
		[148, 8221],
		[149, 8226],
		[150, 8211],
		[151, 8212],
		[152, 732],
		[153, 8482],
		[154, 353],
		[155, 8250],
		[156, 339],
		[158, 382],
		[159, 376]
	]);
	exports.fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
		var output = "";
		if (codePoint > 65535) {
			codePoint -= 65536;
			output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
			codePoint = 56320 | codePoint & 1023;
		}
		output += String.fromCharCode(codePoint);
		return output;
	};
	function replaceCodePoint(codePoint) {
		var _a$1;
		if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return 65533;
		return (_a$1 = decodeMap.get(codePoint)) !== null && _a$1 !== void 0 ? _a$1 : codePoint;
	}
	exports.replaceCodePoint = replaceCodePoint;
	function decodeCodePoint(codePoint) {
		return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
	}
	exports.default = decodeCodePoint;
}));
var require_decode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding$5 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault$3 = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar$3 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$5(result, mod, k);
		}
		__setModuleDefault$3(result, mod);
		return result;
	};
	var __importDefault$3 = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML = exports.determineBranch = exports.EntityDecoder = exports.DecodingMode = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
	var decode_data_html_js_1 = __importDefault$3(require_decode_data_html());
	exports.htmlDecodeTree = decode_data_html_js_1.default;
	var decode_data_xml_js_1 = __importDefault$3(require_decode_data_xml());
	exports.xmlDecodeTree = decode_data_xml_js_1.default;
	var decode_codepoint_js_1 = __importStar$3(require_decode_codepoint());
	exports.decodeCodePoint = decode_codepoint_js_1.default;
	var decode_codepoint_js_2 = require_decode_codepoint();
	Object.defineProperty(exports, "replaceCodePoint", {
		enumerable: true,
		get: function() {
			return decode_codepoint_js_2.replaceCodePoint;
		}
	});
	Object.defineProperty(exports, "fromCodePoint", {
		enumerable: true,
		get: function() {
			return decode_codepoint_js_2.fromCodePoint;
		}
	});
	var CharCodes$1;
	(function(CharCodes$2) {
		CharCodes$2[CharCodes$2["NUM"] = 35] = "NUM";
		CharCodes$2[CharCodes$2["SEMI"] = 59] = "SEMI";
		CharCodes$2[CharCodes$2["EQUALS"] = 61] = "EQUALS";
		CharCodes$2[CharCodes$2["ZERO"] = 48] = "ZERO";
		CharCodes$2[CharCodes$2["NINE"] = 57] = "NINE";
		CharCodes$2[CharCodes$2["LOWER_A"] = 97] = "LOWER_A";
		CharCodes$2[CharCodes$2["LOWER_F"] = 102] = "LOWER_F";
		CharCodes$2[CharCodes$2["LOWER_X"] = 120] = "LOWER_X";
		CharCodes$2[CharCodes$2["LOWER_Z"] = 122] = "LOWER_Z";
		CharCodes$2[CharCodes$2["UPPER_A"] = 65] = "UPPER_A";
		CharCodes$2[CharCodes$2["UPPER_F"] = 70] = "UPPER_F";
		CharCodes$2[CharCodes$2["UPPER_Z"] = 90] = "UPPER_Z";
	})(CharCodes$1 || (CharCodes$1 = {}));
	var TO_LOWER_BIT = 32;
	var BinTrieFlags;
	(function(BinTrieFlags$1) {
		BinTrieFlags$1[BinTrieFlags$1["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
		BinTrieFlags$1[BinTrieFlags$1["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
		BinTrieFlags$1[BinTrieFlags$1["JUMP_TABLE"] = 127] = "JUMP_TABLE";
	})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
	function isNumber$2(code) {
		return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
	}
	function isHexadecimalCharacter(code) {
		return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F;
	}
	function isAsciiAlphaNumeric(code) {
		return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z || isNumber$2(code);
	}
	function isEntityInAttributeInvalidEnd(code) {
		return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
	}
	var EntityDecoderState;
	(function(EntityDecoderState$1) {
		EntityDecoderState$1[EntityDecoderState$1["EntityStart"] = 0] = "EntityStart";
		EntityDecoderState$1[EntityDecoderState$1["NumericStart"] = 1] = "NumericStart";
		EntityDecoderState$1[EntityDecoderState$1["NumericDecimal"] = 2] = "NumericDecimal";
		EntityDecoderState$1[EntityDecoderState$1["NumericHex"] = 3] = "NumericHex";
		EntityDecoderState$1[EntityDecoderState$1["NamedEntity"] = 4] = "NamedEntity";
	})(EntityDecoderState || (EntityDecoderState = {}));
	var DecodingMode;
	(function(DecodingMode$1) {
		DecodingMode$1[DecodingMode$1["Legacy"] = 0] = "Legacy";
		DecodingMode$1[DecodingMode$1["Strict"] = 1] = "Strict";
		DecodingMode$1[DecodingMode$1["Attribute"] = 2] = "Attribute";
	})(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
	var EntityDecoder = function() {
		function EntityDecoder$1(decodeTree, emitCodePoint, errors) {
			this.decodeTree = decodeTree;
			this.emitCodePoint = emitCodePoint;
			this.errors = errors;
			this.state = EntityDecoderState.EntityStart;
			this.consumed = 1;
			this.result = 0;
			this.treeIndex = 0;
			this.excess = 1;
			this.decodeMode = DecodingMode.Strict;
		}
		EntityDecoder$1.prototype.startEntity = function(decodeMode) {
			this.decodeMode = decodeMode;
			this.state = EntityDecoderState.EntityStart;
			this.result = 0;
			this.treeIndex = 0;
			this.excess = 1;
			this.consumed = 1;
		};
		EntityDecoder$1.prototype.write = function(str, offset) {
			switch (this.state) {
				case EntityDecoderState.EntityStart:
					if (str.charCodeAt(offset) === CharCodes$1.NUM) {
						this.state = EntityDecoderState.NumericStart;
						this.consumed += 1;
						return this.stateNumericStart(str, offset + 1);
					}
					this.state = EntityDecoderState.NamedEntity;
					return this.stateNamedEntity(str, offset);
				case EntityDecoderState.NumericStart: return this.stateNumericStart(str, offset);
				case EntityDecoderState.NumericDecimal: return this.stateNumericDecimal(str, offset);
				case EntityDecoderState.NumericHex: return this.stateNumericHex(str, offset);
				case EntityDecoderState.NamedEntity: return this.stateNamedEntity(str, offset);
			}
		};
		EntityDecoder$1.prototype.stateNumericStart = function(str, offset) {
			if (offset >= str.length) return -1;
			if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
				this.state = EntityDecoderState.NumericHex;
				this.consumed += 1;
				return this.stateNumericHex(str, offset + 1);
			}
			this.state = EntityDecoderState.NumericDecimal;
			return this.stateNumericDecimal(str, offset);
		};
		EntityDecoder$1.prototype.addToNumericResult = function(str, start, end, base) {
			if (start !== end) {
				var digitCount = end - start;
				this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
				this.consumed += digitCount;
			}
		};
		EntityDecoder$1.prototype.stateNumericHex = function(str, offset) {
			var startIdx = offset;
			while (offset < str.length) {
				var char = str.charCodeAt(offset);
				if (isNumber$2(char) || isHexadecimalCharacter(char)) offset += 1;
				else {
					this.addToNumericResult(str, startIdx, offset, 16);
					return this.emitNumericEntity(char, 3);
				}
			}
			this.addToNumericResult(str, startIdx, offset, 16);
			return -1;
		};
		EntityDecoder$1.prototype.stateNumericDecimal = function(str, offset) {
			var startIdx = offset;
			while (offset < str.length) {
				var char = str.charCodeAt(offset);
				if (isNumber$2(char)) offset += 1;
				else {
					this.addToNumericResult(str, startIdx, offset, 10);
					return this.emitNumericEntity(char, 2);
				}
			}
			this.addToNumericResult(str, startIdx, offset, 10);
			return -1;
		};
		EntityDecoder$1.prototype.emitNumericEntity = function(lastCp, expectedLength) {
			var _a$1;
			if (this.consumed <= expectedLength) {
				(_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.absenceOfDigitsInNumericCharacterReference(this.consumed);
				return 0;
			}
			if (lastCp === CharCodes$1.SEMI) this.consumed += 1;
			else if (this.decodeMode === DecodingMode.Strict) return 0;
			this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
			if (this.errors) {
				if (lastCp !== CharCodes$1.SEMI) this.errors.missingSemicolonAfterCharacterReference();
				this.errors.validateNumericCharacterReference(this.result);
			}
			return this.consumed;
		};
		EntityDecoder$1.prototype.stateNamedEntity = function(str, offset) {
			var decodeTree = this.decodeTree;
			var current = decodeTree[this.treeIndex];
			var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
			for (; offset < str.length; offset++, this.excess++) {
				var char = str.charCodeAt(offset);
				this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
				if (this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
				current = decodeTree[this.treeIndex];
				valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
				if (valueLength !== 0) {
					if (char === CharCodes$1.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
					if (this.decodeMode !== DecodingMode.Strict) {
						this.result = this.treeIndex;
						this.consumed += this.excess;
						this.excess = 0;
					}
				}
			}
			return -1;
		};
		EntityDecoder$1.prototype.emitNotTerminatedNamedEntity = function() {
			var _a$1;
			var _b = this, result = _b.result;
			var valueLength = (_b.decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
			this.emitNamedEntityData(result, valueLength, this.consumed);
			(_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.missingSemicolonAfterCharacterReference();
			return this.consumed;
		};
		EntityDecoder$1.prototype.emitNamedEntityData = function(result, valueLength, consumed) {
			var decodeTree = this.decodeTree;
			this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
			if (valueLength === 3) this.emitCodePoint(decodeTree[result + 2], consumed);
			return consumed;
		};
		EntityDecoder$1.prototype.end = function() {
			var _a$1;
			switch (this.state) {
				case EntityDecoderState.NamedEntity: return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
				case EntityDecoderState.NumericDecimal: return this.emitNumericEntity(0, 2);
				case EntityDecoderState.NumericHex: return this.emitNumericEntity(0, 3);
				case EntityDecoderState.NumericStart:
					(_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.absenceOfDigitsInNumericCharacterReference(this.consumed);
					return 0;
				case EntityDecoderState.EntityStart: return 0;
			}
		};
		return EntityDecoder$1;
	}();
	exports.EntityDecoder = EntityDecoder;
	function getDecoder(decodeTree) {
		var ret = "";
		var decoder = new EntityDecoder(decodeTree, function(str) {
			return ret += (0, decode_codepoint_js_1.fromCodePoint)(str);
		});
		return function decodeWithTrie(str, decodeMode) {
			var lastIndex = 0;
			var offset = 0;
			while ((offset = str.indexOf("&", offset)) >= 0) {
				ret += str.slice(lastIndex, offset);
				decoder.startEntity(decodeMode);
				var len = decoder.write(str, offset + 1);
				if (len < 0) {
					lastIndex = offset + decoder.end();
					break;
				}
				lastIndex = offset + len;
				offset = len === 0 ? lastIndex + 1 : lastIndex;
			}
			var result = ret + str.slice(lastIndex);
			ret = "";
			return result;
		};
	}
	function determineBranch(decodeTree, current, nodeIdx, char) {
		var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
		var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
		if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
		if (jumpOffset) {
			var value = char - jumpOffset;
			return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
		}
		var lo = nodeIdx;
		var hi = lo + branchCount - 1;
		while (lo <= hi) {
			var mid = lo + hi >>> 1;
			var midVal = decodeTree[mid];
			if (midVal < char) lo = mid + 1;
			else if (midVal > char) hi = mid - 1;
			else return decodeTree[mid + branchCount];
		}
		return -1;
	}
	exports.determineBranch = determineBranch;
	var htmlDecoder = getDecoder(decode_data_html_js_1.default);
	var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
	function decodeHTML(str, mode) {
		if (mode === void 0) mode = DecodingMode.Legacy;
		return htmlDecoder(str, mode);
	}
	exports.decodeHTML = decodeHTML;
	function decodeHTMLAttribute(str) {
		return htmlDecoder(str, DecodingMode.Attribute);
	}
	exports.decodeHTMLAttribute = decodeHTMLAttribute;
	function decodeHTMLStrict(str) {
		return htmlDecoder(str, DecodingMode.Strict);
	}
	exports.decodeHTMLStrict = decodeHTMLStrict;
	function decodeXML(str) {
		return xmlDecoder(str, DecodingMode.Strict);
	}
	exports.decodeXML = decodeXML;
}));
var require_Tokenizer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QuoteType = void 0;
	var decode_js_1$2 = require_decode();
	var CharCodes;
	(function(CharCodes$2) {
		CharCodes$2[CharCodes$2["Tab"] = 9] = "Tab";
		CharCodes$2[CharCodes$2["NewLine"] = 10] = "NewLine";
		CharCodes$2[CharCodes$2["FormFeed"] = 12] = "FormFeed";
		CharCodes$2[CharCodes$2["CarriageReturn"] = 13] = "CarriageReturn";
		CharCodes$2[CharCodes$2["Space"] = 32] = "Space";
		CharCodes$2[CharCodes$2["ExclamationMark"] = 33] = "ExclamationMark";
		CharCodes$2[CharCodes$2["Number"] = 35] = "Number";
		CharCodes$2[CharCodes$2["Amp"] = 38] = "Amp";
		CharCodes$2[CharCodes$2["SingleQuote"] = 39] = "SingleQuote";
		CharCodes$2[CharCodes$2["DoubleQuote"] = 34] = "DoubleQuote";
		CharCodes$2[CharCodes$2["Dash"] = 45] = "Dash";
		CharCodes$2[CharCodes$2["Slash"] = 47] = "Slash";
		CharCodes$2[CharCodes$2["Zero"] = 48] = "Zero";
		CharCodes$2[CharCodes$2["Nine"] = 57] = "Nine";
		CharCodes$2[CharCodes$2["Semi"] = 59] = "Semi";
		CharCodes$2[CharCodes$2["Lt"] = 60] = "Lt";
		CharCodes$2[CharCodes$2["Eq"] = 61] = "Eq";
		CharCodes$2[CharCodes$2["Gt"] = 62] = "Gt";
		CharCodes$2[CharCodes$2["Questionmark"] = 63] = "Questionmark";
		CharCodes$2[CharCodes$2["UpperA"] = 65] = "UpperA";
		CharCodes$2[CharCodes$2["LowerA"] = 97] = "LowerA";
		CharCodes$2[CharCodes$2["UpperF"] = 70] = "UpperF";
		CharCodes$2[CharCodes$2["LowerF"] = 102] = "LowerF";
		CharCodes$2[CharCodes$2["UpperZ"] = 90] = "UpperZ";
		CharCodes$2[CharCodes$2["LowerZ"] = 122] = "LowerZ";
		CharCodes$2[CharCodes$2["LowerX"] = 120] = "LowerX";
		CharCodes$2[CharCodes$2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
	})(CharCodes || (CharCodes = {}));
	var State;
	(function(State$1) {
		State$1[State$1["Text"] = 1] = "Text";
		State$1[State$1["BeforeTagName"] = 2] = "BeforeTagName";
		State$1[State$1["InTagName"] = 3] = "InTagName";
		State$1[State$1["InSelfClosingTag"] = 4] = "InSelfClosingTag";
		State$1[State$1["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
		State$1[State$1["InClosingTagName"] = 6] = "InClosingTagName";
		State$1[State$1["AfterClosingTagName"] = 7] = "AfterClosingTagName";
		State$1[State$1["BeforeAttributeName"] = 8] = "BeforeAttributeName";
		State$1[State$1["InAttributeName"] = 9] = "InAttributeName";
		State$1[State$1["AfterAttributeName"] = 10] = "AfterAttributeName";
		State$1[State$1["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
		State$1[State$1["InAttributeValueDq"] = 12] = "InAttributeValueDq";
		State$1[State$1["InAttributeValueSq"] = 13] = "InAttributeValueSq";
		State$1[State$1["InAttributeValueNq"] = 14] = "InAttributeValueNq";
		State$1[State$1["BeforeDeclaration"] = 15] = "BeforeDeclaration";
		State$1[State$1["InDeclaration"] = 16] = "InDeclaration";
		State$1[State$1["InProcessingInstruction"] = 17] = "InProcessingInstruction";
		State$1[State$1["BeforeComment"] = 18] = "BeforeComment";
		State$1[State$1["CDATASequence"] = 19] = "CDATASequence";
		State$1[State$1["InSpecialComment"] = 20] = "InSpecialComment";
		State$1[State$1["InCommentLike"] = 21] = "InCommentLike";
		State$1[State$1["BeforeSpecialS"] = 22] = "BeforeSpecialS";
		State$1[State$1["SpecialStartSequence"] = 23] = "SpecialStartSequence";
		State$1[State$1["InSpecialTag"] = 24] = "InSpecialTag";
		State$1[State$1["BeforeEntity"] = 25] = "BeforeEntity";
		State$1[State$1["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
		State$1[State$1["InNamedEntity"] = 27] = "InNamedEntity";
		State$1[State$1["InNumericEntity"] = 28] = "InNumericEntity";
		State$1[State$1["InHexEntity"] = 29] = "InHexEntity";
	})(State || (State = {}));
	function isWhitespace(c) {
		return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
	}
	function isEndOfTagSection(c) {
		return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
	}
	function isNumber$1(c) {
		return c >= CharCodes.Zero && c <= CharCodes.Nine;
	}
	function isASCIIAlpha(c) {
		return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
	}
	function isHexDigit(c) {
		return c >= CharCodes.UpperA && c <= CharCodes.UpperF || c >= CharCodes.LowerA && c <= CharCodes.LowerF;
	}
	var QuoteType;
	(function(QuoteType$1) {
		QuoteType$1[QuoteType$1["NoValue"] = 0] = "NoValue";
		QuoteType$1[QuoteType$1["Unquoted"] = 1] = "Unquoted";
		QuoteType$1[QuoteType$1["Single"] = 2] = "Single";
		QuoteType$1[QuoteType$1["Double"] = 3] = "Double";
	})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
	var Sequences = {
		Cdata: new Uint8Array([
			67,
			68,
			65,
			84,
			65,
			91
		]),
		CdataEnd: new Uint8Array([
			93,
			93,
			62
		]),
		CommentEnd: new Uint8Array([
			45,
			45,
			62
		]),
		ScriptEnd: new Uint8Array([
			60,
			47,
			115,
			99,
			114,
			105,
			112,
			116
		]),
		StyleEnd: new Uint8Array([
			60,
			47,
			115,
			116,
			121,
			108,
			101
		]),
		TitleEnd: new Uint8Array([
			60,
			47,
			116,
			105,
			116,
			108,
			101
		])
	};
	exports.default = function() {
		function Tokenizer$1(_a$1, cbs) {
			var _b = _a$1.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a$1.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
			this.cbs = cbs;
			this.state = State.Text;
			this.buffer = "";
			this.sectionStart = 0;
			this.index = 0;
			this.baseState = State.Text;
			this.isSpecial = false;
			this.running = true;
			this.offset = 0;
			this.currentSequence = void 0;
			this.sequenceIndex = 0;
			this.trieIndex = 0;
			this.trieCurrent = 0;
			this.entityResult = 0;
			this.entityExcess = 0;
			this.xmlMode = xmlMode;
			this.decodeEntities = decodeEntities;
			this.entityTrie = xmlMode ? decode_js_1$2.xmlDecodeTree : decode_js_1$2.htmlDecodeTree;
		}
		Tokenizer$1.prototype.reset = function() {
			this.state = State.Text;
			this.buffer = "";
			this.sectionStart = 0;
			this.index = 0;
			this.baseState = State.Text;
			this.currentSequence = void 0;
			this.running = true;
			this.offset = 0;
		};
		Tokenizer$1.prototype.write = function(chunk) {
			this.offset += this.buffer.length;
			this.buffer = chunk;
			this.parse();
		};
		Tokenizer$1.prototype.end = function() {
			if (this.running) this.finish();
		};
		Tokenizer$1.prototype.pause = function() {
			this.running = false;
		};
		Tokenizer$1.prototype.resume = function() {
			this.running = true;
			if (this.index < this.buffer.length + this.offset) this.parse();
		};
		Tokenizer$1.prototype.getIndex = function() {
			return this.index;
		};
		Tokenizer$1.prototype.getSectionStart = function() {
			return this.sectionStart;
		};
		Tokenizer$1.prototype.stateText = function(c) {
			if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
				if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
				this.state = State.BeforeTagName;
				this.sectionStart = this.index;
			} else if (this.decodeEntities && c === CharCodes.Amp) this.state = State.BeforeEntity;
		};
		Tokenizer$1.prototype.stateSpecialStartSequence = function(c) {
			var isEnd = this.sequenceIndex === this.currentSequence.length;
			if (!(isEnd ? isEndOfTagSection(c) : (c | 32) === this.currentSequence[this.sequenceIndex])) this.isSpecial = false;
			else if (!isEnd) {
				this.sequenceIndex++;
				return;
			}
			this.sequenceIndex = 0;
			this.state = State.InTagName;
			this.stateInTagName(c);
		};
		Tokenizer$1.prototype.stateInSpecialTag = function(c) {
			if (this.sequenceIndex === this.currentSequence.length) {
				if (c === CharCodes.Gt || isWhitespace(c)) {
					var endOfText = this.index - this.currentSequence.length;
					if (this.sectionStart < endOfText) {
						var actualIndex = this.index;
						this.index = endOfText;
						this.cbs.ontext(this.sectionStart, endOfText);
						this.index = actualIndex;
					}
					this.isSpecial = false;
					this.sectionStart = endOfText + 2;
					this.stateInClosingTagName(c);
					return;
				}
				this.sequenceIndex = 0;
			}
			if ((c | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
			else if (this.sequenceIndex === 0) {
				if (this.currentSequence === Sequences.TitleEnd) {
					if (this.decodeEntities && c === CharCodes.Amp) this.state = State.BeforeEntity;
				} else if (this.fastForwardTo(CharCodes.Lt)) this.sequenceIndex = 1;
			} else this.sequenceIndex = Number(c === CharCodes.Lt);
		};
		Tokenizer$1.prototype.stateCDATASequence = function(c) {
			if (c === Sequences.Cdata[this.sequenceIndex]) {
				if (++this.sequenceIndex === Sequences.Cdata.length) {
					this.state = State.InCommentLike;
					this.currentSequence = Sequences.CdataEnd;
					this.sequenceIndex = 0;
					this.sectionStart = this.index + 1;
				}
			} else {
				this.sequenceIndex = 0;
				this.state = State.InDeclaration;
				this.stateInDeclaration(c);
			}
		};
		Tokenizer$1.prototype.fastForwardTo = function(c) {
			while (++this.index < this.buffer.length + this.offset) if (this.buffer.charCodeAt(this.index - this.offset) === c) return true;
			this.index = this.buffer.length + this.offset - 1;
			return false;
		};
		Tokenizer$1.prototype.stateInCommentLike = function(c) {
			if (c === this.currentSequence[this.sequenceIndex]) {
				if (++this.sequenceIndex === this.currentSequence.length) {
					if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index, 2);
					else this.cbs.oncomment(this.sectionStart, this.index, 2);
					this.sequenceIndex = 0;
					this.sectionStart = this.index + 1;
					this.state = State.Text;
				}
			} else if (this.sequenceIndex === 0) {
				if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
			} else if (c !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
		};
		Tokenizer$1.prototype.isTagStartChar = function(c) {
			return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
		};
		Tokenizer$1.prototype.startSpecial = function(sequence, offset) {
			this.isSpecial = true;
			this.currentSequence = sequence;
			this.sequenceIndex = offset;
			this.state = State.SpecialStartSequence;
		};
		Tokenizer$1.prototype.stateBeforeTagName = function(c) {
			if (c === CharCodes.ExclamationMark) {
				this.state = State.BeforeDeclaration;
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.Questionmark) {
				this.state = State.InProcessingInstruction;
				this.sectionStart = this.index + 1;
			} else if (this.isTagStartChar(c)) {
				var lower = c | 32;
				this.sectionStart = this.index;
				if (!this.xmlMode && lower === Sequences.TitleEnd[2]) this.startSpecial(Sequences.TitleEnd, 3);
				else this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
			} else if (c === CharCodes.Slash) this.state = State.BeforeClosingTagName;
			else {
				this.state = State.Text;
				this.stateText(c);
			}
		};
		Tokenizer$1.prototype.stateInTagName = function(c) {
			if (isEndOfTagSection(c)) {
				this.cbs.onopentagname(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			}
		};
		Tokenizer$1.prototype.stateBeforeClosingTagName = function(c) {
			if (isWhitespace(c)) {} else if (c === CharCodes.Gt) this.state = State.Text;
			else {
				this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
				this.sectionStart = this.index;
			}
		};
		Tokenizer$1.prototype.stateInClosingTagName = function(c) {
			if (c === CharCodes.Gt || isWhitespace(c)) {
				this.cbs.onclosetag(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.state = State.AfterClosingTagName;
				this.stateAfterClosingTagName(c);
			}
		};
		Tokenizer$1.prototype.stateAfterClosingTagName = function(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.state = State.Text;
				this.baseState = State.Text;
				this.sectionStart = this.index + 1;
			}
		};
		Tokenizer$1.prototype.stateBeforeAttributeName = function(c) {
			if (c === CharCodes.Gt) {
				this.cbs.onopentagend(this.index);
				if (this.isSpecial) {
					this.state = State.InSpecialTag;
					this.sequenceIndex = 0;
				} else this.state = State.Text;
				this.baseState = this.state;
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.Slash) this.state = State.InSelfClosingTag;
			else if (!isWhitespace(c)) {
				this.state = State.InAttributeName;
				this.sectionStart = this.index;
			}
		};
		Tokenizer$1.prototype.stateInSelfClosingTag = function(c) {
			if (c === CharCodes.Gt) {
				this.cbs.onselfclosingtag(this.index);
				this.state = State.Text;
				this.baseState = State.Text;
				this.sectionStart = this.index + 1;
				this.isSpecial = false;
			} else if (!isWhitespace(c)) {
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			}
		};
		Tokenizer$1.prototype.stateInAttributeName = function(c) {
			if (c === CharCodes.Eq || isEndOfTagSection(c)) {
				this.cbs.onattribname(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.state = State.AfterAttributeName;
				this.stateAfterAttributeName(c);
			}
		};
		Tokenizer$1.prototype.stateAfterAttributeName = function(c) {
			if (c === CharCodes.Eq) this.state = State.BeforeAttributeValue;
			else if (c === CharCodes.Slash || c === CharCodes.Gt) {
				this.cbs.onattribend(QuoteType.NoValue, this.index);
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			} else if (!isWhitespace(c)) {
				this.cbs.onattribend(QuoteType.NoValue, this.index);
				this.state = State.InAttributeName;
				this.sectionStart = this.index;
			}
		};
		Tokenizer$1.prototype.stateBeforeAttributeValue = function(c) {
			if (c === CharCodes.DoubleQuote) {
				this.state = State.InAttributeValueDq;
				this.sectionStart = this.index + 1;
			} else if (c === CharCodes.SingleQuote) {
				this.state = State.InAttributeValueSq;
				this.sectionStart = this.index + 1;
			} else if (!isWhitespace(c)) {
				this.sectionStart = this.index;
				this.state = State.InAttributeValueNq;
				this.stateInAttributeValueNoQuotes(c);
			}
		};
		Tokenizer$1.prototype.handleInAttributeValue = function(c, quote$1) {
			if (c === quote$1 || !this.decodeEntities && this.fastForwardTo(quote$1)) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.cbs.onattribend(quote$1 === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
				this.state = State.BeforeAttributeName;
			} else if (this.decodeEntities && c === CharCodes.Amp) {
				this.baseState = this.state;
				this.state = State.BeforeEntity;
			}
		};
		Tokenizer$1.prototype.stateInAttributeValueDoubleQuotes = function(c) {
			this.handleInAttributeValue(c, CharCodes.DoubleQuote);
		};
		Tokenizer$1.prototype.stateInAttributeValueSingleQuotes = function(c) {
			this.handleInAttributeValue(c, CharCodes.SingleQuote);
		};
		Tokenizer$1.prototype.stateInAttributeValueNoQuotes = function(c) {
			if (isWhitespace(c) || c === CharCodes.Gt) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = -1;
				this.cbs.onattribend(QuoteType.Unquoted, this.index);
				this.state = State.BeforeAttributeName;
				this.stateBeforeAttributeName(c);
			} else if (this.decodeEntities && c === CharCodes.Amp) {
				this.baseState = this.state;
				this.state = State.BeforeEntity;
			}
		};
		Tokenizer$1.prototype.stateBeforeDeclaration = function(c) {
			if (c === CharCodes.OpeningSquareBracket) {
				this.state = State.CDATASequence;
				this.sequenceIndex = 0;
			} else this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
		};
		Tokenizer$1.prototype.stateInDeclaration = function(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.cbs.ondeclaration(this.sectionStart, this.index);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			}
		};
		Tokenizer$1.prototype.stateInProcessingInstruction = function(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.cbs.onprocessinginstruction(this.sectionStart, this.index);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			}
		};
		Tokenizer$1.prototype.stateBeforeComment = function(c) {
			if (c === CharCodes.Dash) {
				this.state = State.InCommentLike;
				this.currentSequence = Sequences.CommentEnd;
				this.sequenceIndex = 2;
				this.sectionStart = this.index + 1;
			} else this.state = State.InDeclaration;
		};
		Tokenizer$1.prototype.stateInSpecialComment = function(c) {
			if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
				this.cbs.oncomment(this.sectionStart, this.index, 0);
				this.state = State.Text;
				this.sectionStart = this.index + 1;
			}
		};
		Tokenizer$1.prototype.stateBeforeSpecialS = function(c) {
			var lower = c | 32;
			if (lower === Sequences.ScriptEnd[3]) this.startSpecial(Sequences.ScriptEnd, 4);
			else if (lower === Sequences.StyleEnd[3]) this.startSpecial(Sequences.StyleEnd, 4);
			else {
				this.state = State.InTagName;
				this.stateInTagName(c);
			}
		};
		Tokenizer$1.prototype.stateBeforeEntity = function(c) {
			this.entityExcess = 1;
			this.entityResult = 0;
			if (c === CharCodes.Number) this.state = State.BeforeNumericEntity;
			else if (c === CharCodes.Amp) {} else {
				this.trieIndex = 0;
				this.trieCurrent = this.entityTrie[0];
				this.state = State.InNamedEntity;
				this.stateInNamedEntity(c);
			}
		};
		Tokenizer$1.prototype.stateInNamedEntity = function(c) {
			this.entityExcess += 1;
			this.trieIndex = (0, decode_js_1$2.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
			if (this.trieIndex < 0) {
				this.emitNamedEntity();
				this.index--;
				return;
			}
			this.trieCurrent = this.entityTrie[this.trieIndex];
			var masked = this.trieCurrent & decode_js_1$2.BinTrieFlags.VALUE_LENGTH;
			if (masked) {
				var valueLength = (masked >> 14) - 1;
				if (!this.allowLegacyEntity() && c !== CharCodes.Semi) this.trieIndex += valueLength;
				else {
					var entityStart = this.index - this.entityExcess + 1;
					if (entityStart > this.sectionStart) this.emitPartial(this.sectionStart, entityStart);
					this.entityResult = this.trieIndex;
					this.trieIndex += valueLength;
					this.entityExcess = 0;
					this.sectionStart = this.index + 1;
					if (valueLength === 0) this.emitNamedEntity();
				}
			}
		};
		Tokenizer$1.prototype.emitNamedEntity = function() {
			this.state = this.baseState;
			if (this.entityResult === 0) return;
			switch ((this.entityTrie[this.entityResult] & decode_js_1$2.BinTrieFlags.VALUE_LENGTH) >> 14) {
				case 1:
					this.emitCodePoint(this.entityTrie[this.entityResult] & ~decode_js_1$2.BinTrieFlags.VALUE_LENGTH);
					break;
				case 2:
					this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
					break;
				case 3:
					this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
					this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
			}
		};
		Tokenizer$1.prototype.stateBeforeNumericEntity = function(c) {
			if ((c | 32) === CharCodes.LowerX) {
				this.entityExcess++;
				this.state = State.InHexEntity;
			} else {
				this.state = State.InNumericEntity;
				this.stateInNumericEntity(c);
			}
		};
		Tokenizer$1.prototype.emitNumericEntity = function(strict) {
			var entityStart = this.index - this.entityExcess - 1;
			if (entityStart + 2 + Number(this.state === State.InHexEntity) !== this.index) {
				if (entityStart > this.sectionStart) this.emitPartial(this.sectionStart, entityStart);
				this.sectionStart = this.index + Number(strict);
				this.emitCodePoint((0, decode_js_1$2.replaceCodePoint)(this.entityResult));
			}
			this.state = this.baseState;
		};
		Tokenizer$1.prototype.stateInNumericEntity = function(c) {
			if (c === CharCodes.Semi) this.emitNumericEntity(true);
			else if (isNumber$1(c)) {
				this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
				this.entityExcess++;
			} else {
				if (this.allowLegacyEntity()) this.emitNumericEntity(false);
				else this.state = this.baseState;
				this.index--;
			}
		};
		Tokenizer$1.prototype.stateInHexEntity = function(c) {
			if (c === CharCodes.Semi) this.emitNumericEntity(true);
			else if (isNumber$1(c)) {
				this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
				this.entityExcess++;
			} else if (isHexDigit(c)) {
				this.entityResult = this.entityResult * 16 + ((c | 32) - CharCodes.LowerA + 10);
				this.entityExcess++;
			} else {
				if (this.allowLegacyEntity()) this.emitNumericEntity(false);
				else this.state = this.baseState;
				this.index--;
			}
		};
		Tokenizer$1.prototype.allowLegacyEntity = function() {
			return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
		};
		Tokenizer$1.prototype.cleanup = function() {
			if (this.running && this.sectionStart !== this.index) {
				if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
					this.cbs.ontext(this.sectionStart, this.index);
					this.sectionStart = this.index;
				} else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
					this.cbs.onattribdata(this.sectionStart, this.index);
					this.sectionStart = this.index;
				}
			}
		};
		Tokenizer$1.prototype.shouldContinue = function() {
			return this.index < this.buffer.length + this.offset && this.running;
		};
		Tokenizer$1.prototype.parse = function() {
			while (this.shouldContinue()) {
				var c = this.buffer.charCodeAt(this.index - this.offset);
				switch (this.state) {
					case State.Text:
						this.stateText(c);
						break;
					case State.SpecialStartSequence:
						this.stateSpecialStartSequence(c);
						break;
					case State.InSpecialTag:
						this.stateInSpecialTag(c);
						break;
					case State.CDATASequence:
						this.stateCDATASequence(c);
						break;
					case State.InAttributeValueDq:
						this.stateInAttributeValueDoubleQuotes(c);
						break;
					case State.InAttributeName:
						this.stateInAttributeName(c);
						break;
					case State.InCommentLike:
						this.stateInCommentLike(c);
						break;
					case State.InSpecialComment:
						this.stateInSpecialComment(c);
						break;
					case State.BeforeAttributeName:
						this.stateBeforeAttributeName(c);
						break;
					case State.InTagName:
						this.stateInTagName(c);
						break;
					case State.InClosingTagName:
						this.stateInClosingTagName(c);
						break;
					case State.BeforeTagName:
						this.stateBeforeTagName(c);
						break;
					case State.AfterAttributeName:
						this.stateAfterAttributeName(c);
						break;
					case State.InAttributeValueSq:
						this.stateInAttributeValueSingleQuotes(c);
						break;
					case State.BeforeAttributeValue:
						this.stateBeforeAttributeValue(c);
						break;
					case State.BeforeClosingTagName:
						this.stateBeforeClosingTagName(c);
						break;
					case State.AfterClosingTagName:
						this.stateAfterClosingTagName(c);
						break;
					case State.BeforeSpecialS:
						this.stateBeforeSpecialS(c);
						break;
					case State.InAttributeValueNq:
						this.stateInAttributeValueNoQuotes(c);
						break;
					case State.InSelfClosingTag:
						this.stateInSelfClosingTag(c);
						break;
					case State.InDeclaration:
						this.stateInDeclaration(c);
						break;
					case State.BeforeDeclaration:
						this.stateBeforeDeclaration(c);
						break;
					case State.BeforeComment:
						this.stateBeforeComment(c);
						break;
					case State.InProcessingInstruction:
						this.stateInProcessingInstruction(c);
						break;
					case State.InNamedEntity:
						this.stateInNamedEntity(c);
						break;
					case State.BeforeEntity:
						this.stateBeforeEntity(c);
						break;
					case State.InHexEntity:
						this.stateInHexEntity(c);
						break;
					case State.InNumericEntity:
						this.stateInNumericEntity(c);
						break;
					default: this.stateBeforeNumericEntity(c);
				}
				this.index++;
			}
			this.cleanup();
		};
		Tokenizer$1.prototype.finish = function() {
			if (this.state === State.InNamedEntity) this.emitNamedEntity();
			if (this.sectionStart < this.index) this.handleTrailingData();
			this.cbs.onend();
		};
		Tokenizer$1.prototype.handleTrailingData = function() {
			var endIndex = this.buffer.length + this.offset;
			if (this.state === State.InCommentLike) if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, endIndex, 0);
			else this.cbs.oncomment(this.sectionStart, endIndex, 0);
			else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) this.emitNumericEntity(false);
			else if (this.state === State.InHexEntity && this.allowLegacyEntity()) this.emitNumericEntity(false);
			else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {} else this.cbs.ontext(this.sectionStart, endIndex);
		};
		Tokenizer$1.prototype.emitPartial = function(start, endIndex) {
			if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) this.cbs.onattribdata(start, endIndex);
			else this.cbs.ontext(start, endIndex);
		};
		Tokenizer$1.prototype.emitCodePoint = function(cp) {
			if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) this.cbs.onattribentity(cp);
			else this.cbs.ontextentity(cp);
		};
		return Tokenizer$1;
	}();
}));
var require_Parser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding$4 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault$2 = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar$2 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$4(result, mod, k);
		}
		__setModuleDefault$2(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var Tokenizer_js_1$1 = __importStar$2(require_Tokenizer());
	var decode_js_1$1 = require_decode();
	var formTags = new Set([
		"input",
		"option",
		"optgroup",
		"select",
		"button",
		"datalist",
		"textarea"
	]);
	var pTag = new Set(["p"]);
	var tableSectionTags = new Set(["thead", "tbody"]);
	var ddtTags = new Set(["dd", "dt"]);
	var rtpTags = new Set(["rt", "rp"]);
	var openImpliesClose = new Map([
		["tr", new Set([
			"tr",
			"th",
			"td"
		])],
		["th", new Set(["th"])],
		["td", new Set([
			"thead",
			"th",
			"td"
		])],
		["body", new Set([
			"head",
			"link",
			"script"
		])],
		["li", new Set(["li"])],
		["p", pTag],
		["h1", pTag],
		["h2", pTag],
		["h3", pTag],
		["h4", pTag],
		["h5", pTag],
		["h6", pTag],
		["select", formTags],
		["input", formTags],
		["output", formTags],
		["button", formTags],
		["datalist", formTags],
		["textarea", formTags],
		["option", new Set(["option"])],
		["optgroup", new Set(["optgroup", "option"])],
		["dd", ddtTags],
		["dt", ddtTags],
		["address", pTag],
		["article", pTag],
		["aside", pTag],
		["blockquote", pTag],
		["details", pTag],
		["div", pTag],
		["dl", pTag],
		["fieldset", pTag],
		["figcaption", pTag],
		["figure", pTag],
		["footer", pTag],
		["form", pTag],
		["header", pTag],
		["hr", pTag],
		["main", pTag],
		["nav", pTag],
		["ol", pTag],
		["pre", pTag],
		["section", pTag],
		["table", pTag],
		["ul", pTag],
		["rt", rtpTags],
		["rp", rtpTags],
		["tbody", tableSectionTags],
		["tfoot", tableSectionTags]
	]);
	var voidElements = new Set([
		"area",
		"base",
		"basefont",
		"br",
		"col",
		"command",
		"embed",
		"frame",
		"hr",
		"img",
		"input",
		"isindex",
		"keygen",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]);
	var foreignContextElements = new Set(["math", "svg"]);
	var htmlIntegrationElements = new Set([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext",
		"annotation-xml",
		"foreignobject",
		"desc",
		"title"
	]);
	var reNameEnd = /\s|\//;
	exports.Parser = function() {
		function Parser$3(cbs, options) {
			if (options === void 0) options = {};
			var _a$1, _b, _c, _d, _e;
			this.options = options;
			this.startIndex = 0;
			this.endIndex = 0;
			this.openTagStart = 0;
			this.tagname = "";
			this.attribname = "";
			this.attribvalue = "";
			this.attribs = null;
			this.stack = [];
			this.foreignContext = [];
			this.buffers = [];
			this.bufferOffset = 0;
			this.writeIndex = 0;
			this.ended = false;
			this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
			this.lowerCaseTagNames = (_a$1 = options.lowerCaseTags) !== null && _a$1 !== void 0 ? _a$1 : !options.xmlMode;
			this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
			this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1$1.default)(this.options, this);
			(_e = (_d = this.cbs).onparserinit) === null || _e === void 0 || _e.call(_d, this);
		}
		Parser$3.prototype.ontext = function(start, endIndex) {
			var _a$1, _b;
			var data = this.getSlice(start, endIndex);
			this.endIndex = endIndex - 1;
			(_b = (_a$1 = this.cbs).ontext) === null || _b === void 0 || _b.call(_a$1, data);
			this.startIndex = endIndex;
		};
		Parser$3.prototype.ontextentity = function(cp) {
			var _a$1, _b;
			var index = this.tokenizer.getSectionStart();
			this.endIndex = index - 1;
			(_b = (_a$1 = this.cbs).ontext) === null || _b === void 0 || _b.call(_a$1, (0, decode_js_1$1.fromCodePoint)(cp));
			this.startIndex = index;
		};
		Parser$3.prototype.isVoidElement = function(name) {
			return !this.options.xmlMode && voidElements.has(name);
		};
		Parser$3.prototype.onopentagname = function(start, endIndex) {
			this.endIndex = endIndex;
			var name = this.getSlice(start, endIndex);
			if (this.lowerCaseTagNames) name = name.toLowerCase();
			this.emitOpenTag(name);
		};
		Parser$3.prototype.emitOpenTag = function(name) {
			var _a$1, _b, _c, _d;
			this.openTagStart = this.startIndex;
			this.tagname = name;
			var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
			if (impliesClose) while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
				var element = this.stack.pop();
				(_b = (_a$1 = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a$1, element, true);
			}
			if (!this.isVoidElement(name)) {
				this.stack.push(name);
				if (foreignContextElements.has(name)) this.foreignContext.push(true);
				else if (htmlIntegrationElements.has(name)) this.foreignContext.push(false);
			}
			(_d = (_c = this.cbs).onopentagname) === null || _d === void 0 || _d.call(_c, name);
			if (this.cbs.onopentag) this.attribs = {};
		};
		Parser$3.prototype.endOpenTag = function(isImplied) {
			var _a$1, _b;
			this.startIndex = this.openTagStart;
			if (this.attribs) {
				(_b = (_a$1 = this.cbs).onopentag) === null || _b === void 0 || _b.call(_a$1, this.tagname, this.attribs, isImplied);
				this.attribs = null;
			}
			if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) this.cbs.onclosetag(this.tagname, true);
			this.tagname = "";
		};
		Parser$3.prototype.onopentagend = function(endIndex) {
			this.endIndex = endIndex;
			this.endOpenTag(false);
			this.startIndex = endIndex + 1;
		};
		Parser$3.prototype.onclosetag = function(start, endIndex) {
			var _a$1, _b, _c, _d, _e, _f;
			this.endIndex = endIndex;
			var name = this.getSlice(start, endIndex);
			if (this.lowerCaseTagNames) name = name.toLowerCase();
			if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) this.foreignContext.pop();
			if (!this.isVoidElement(name)) {
				var pos = this.stack.lastIndexOf(name);
				if (pos !== -1) if (this.cbs.onclosetag) {
					var count = this.stack.length - pos;
					while (count--) this.cbs.onclosetag(this.stack.pop(), count !== 0);
				} else this.stack.length = pos;
				else if (!this.options.xmlMode && name === "p") {
					this.emitOpenTag("p");
					this.closeCurrentTag(true);
				}
			} else if (!this.options.xmlMode && name === "br") {
				(_b = (_a$1 = this.cbs).onopentagname) === null || _b === void 0 || _b.call(_a$1, "br");
				(_d = (_c = this.cbs).onopentag) === null || _d === void 0 || _d.call(_c, "br", {}, true);
				(_f = (_e = this.cbs).onclosetag) === null || _f === void 0 || _f.call(_e, "br", false);
			}
			this.startIndex = endIndex + 1;
		};
		Parser$3.prototype.onselfclosingtag = function(endIndex) {
			this.endIndex = endIndex;
			if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
				this.closeCurrentTag(false);
				this.startIndex = endIndex + 1;
			} else this.onopentagend(endIndex);
		};
		Parser$3.prototype.closeCurrentTag = function(isOpenImplied) {
			var _a$1, _b;
			var name = this.tagname;
			this.endOpenTag(isOpenImplied);
			if (this.stack[this.stack.length - 1] === name) {
				(_b = (_a$1 = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a$1, name, !isOpenImplied);
				this.stack.pop();
			}
		};
		Parser$3.prototype.onattribname = function(start, endIndex) {
			this.startIndex = start;
			var name = this.getSlice(start, endIndex);
			this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
		};
		Parser$3.prototype.onattribdata = function(start, endIndex) {
			this.attribvalue += this.getSlice(start, endIndex);
		};
		Parser$3.prototype.onattribentity = function(cp) {
			this.attribvalue += (0, decode_js_1$1.fromCodePoint)(cp);
		};
		Parser$3.prototype.onattribend = function(quote$1, endIndex) {
			var _a$1, _b;
			this.endIndex = endIndex;
			(_b = (_a$1 = this.cbs).onattribute) === null || _b === void 0 || _b.call(_a$1, this.attribname, this.attribvalue, quote$1 === Tokenizer_js_1$1.QuoteType.Double ? "\"" : quote$1 === Tokenizer_js_1$1.QuoteType.Single ? "'" : quote$1 === Tokenizer_js_1$1.QuoteType.NoValue ? void 0 : null);
			if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
			this.attribvalue = "";
		};
		Parser$3.prototype.getInstructionName = function(value) {
			var index = value.search(reNameEnd);
			var name = index < 0 ? value : value.substr(0, index);
			if (this.lowerCaseTagNames) name = name.toLowerCase();
			return name;
		};
		Parser$3.prototype.ondeclaration = function(start, endIndex) {
			this.endIndex = endIndex;
			var value = this.getSlice(start, endIndex);
			if (this.cbs.onprocessinginstruction) {
				var name = this.getInstructionName(value);
				this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
			}
			this.startIndex = endIndex + 1;
		};
		Parser$3.prototype.onprocessinginstruction = function(start, endIndex) {
			this.endIndex = endIndex;
			var value = this.getSlice(start, endIndex);
			if (this.cbs.onprocessinginstruction) {
				var name = this.getInstructionName(value);
				this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
			}
			this.startIndex = endIndex + 1;
		};
		Parser$3.prototype.oncomment = function(start, endIndex, offset) {
			var _a$1, _b, _c, _d;
			this.endIndex = endIndex;
			(_b = (_a$1 = this.cbs).oncomment) === null || _b === void 0 || _b.call(_a$1, this.getSlice(start, endIndex - offset));
			(_d = (_c = this.cbs).oncommentend) === null || _d === void 0 || _d.call(_c);
			this.startIndex = endIndex + 1;
		};
		Parser$3.prototype.oncdata = function(start, endIndex, offset) {
			var _a$1, _b, _c, _d, _e, _f, _g, _h, _j, _k;
			this.endIndex = endIndex;
			var value = this.getSlice(start, endIndex - offset);
			if (this.options.xmlMode || this.options.recognizeCDATA) {
				(_b = (_a$1 = this.cbs).oncdatastart) === null || _b === void 0 || _b.call(_a$1);
				(_d = (_c = this.cbs).ontext) === null || _d === void 0 || _d.call(_c, value);
				(_f = (_e = this.cbs).oncdataend) === null || _f === void 0 || _f.call(_e);
			} else {
				(_h = (_g = this.cbs).oncomment) === null || _h === void 0 || _h.call(_g, "[CDATA[".concat(value, "]]"));
				(_k = (_j = this.cbs).oncommentend) === null || _k === void 0 || _k.call(_j);
			}
			this.startIndex = endIndex + 1;
		};
		Parser$3.prototype.onend = function() {
			var _a$1, _b;
			if (this.cbs.onclosetag) {
				this.endIndex = this.startIndex;
				for (var index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true));
			}
			(_b = (_a$1 = this.cbs).onend) === null || _b === void 0 || _b.call(_a$1);
		};
		Parser$3.prototype.reset = function() {
			var _a$1, _b, _c, _d;
			(_b = (_a$1 = this.cbs).onreset) === null || _b === void 0 || _b.call(_a$1);
			this.tokenizer.reset();
			this.tagname = "";
			this.attribname = "";
			this.attribs = null;
			this.stack.length = 0;
			this.startIndex = 0;
			this.endIndex = 0;
			(_d = (_c = this.cbs).onparserinit) === null || _d === void 0 || _d.call(_c, this);
			this.buffers.length = 0;
			this.bufferOffset = 0;
			this.writeIndex = 0;
			this.ended = false;
		};
		Parser$3.prototype.parseComplete = function(data) {
			this.reset();
			this.end(data);
		};
		Parser$3.prototype.getSlice = function(start, end) {
			while (start - this.bufferOffset >= this.buffers[0].length) this.shiftBuffer();
			var slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
			while (end - this.bufferOffset > this.buffers[0].length) {
				this.shiftBuffer();
				slice += this.buffers[0].slice(0, end - this.bufferOffset);
			}
			return slice;
		};
		Parser$3.prototype.shiftBuffer = function() {
			this.bufferOffset += this.buffers[0].length;
			this.writeIndex--;
			this.buffers.shift();
		};
		Parser$3.prototype.write = function(chunk) {
			var _a$1, _b;
			if (this.ended) {
				(_b = (_a$1 = this.cbs).onerror) === null || _b === void 0 || _b.call(_a$1, /* @__PURE__ */ new Error(".write() after done!"));
				return;
			}
			this.buffers.push(chunk);
			if (this.tokenizer.running) {
				this.tokenizer.write(chunk);
				this.writeIndex++;
			}
		};
		Parser$3.prototype.end = function(chunk) {
			var _a$1, _b;
			if (this.ended) {
				(_b = (_a$1 = this.cbs).onerror) === null || _b === void 0 || _b.call(_a$1, /* @__PURE__ */ new Error(".end() after done!"));
				return;
			}
			if (chunk) this.write(chunk);
			this.ended = true;
			this.tokenizer.end();
		};
		Parser$3.prototype.pause = function() {
			this.tokenizer.pause();
		};
		Parser$3.prototype.resume = function() {
			this.tokenizer.resume();
			while (this.tokenizer.running && this.writeIndex < this.buffers.length) this.tokenizer.write(this.buffers[this.writeIndex++]);
			if (this.ended) this.tokenizer.end();
		};
		Parser$3.prototype.parseChunk = function(chunk) {
			this.write(chunk);
		};
		Parser$3.prototype.done = function(chunk) {
			this.end(chunk);
		};
		return Parser$3;
	}();
}));
var require_lib$6 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
	var ElementType$1;
	(function(ElementType$2) {
		ElementType$2["Root"] = "root";
		ElementType$2["Text"] = "text";
		ElementType$2["Directive"] = "directive";
		ElementType$2["Comment"] = "comment";
		ElementType$2["Script"] = "script";
		ElementType$2["Style"] = "style";
		ElementType$2["Tag"] = "tag";
		ElementType$2["CDATA"] = "cdata";
		ElementType$2["Doctype"] = "doctype";
	})(ElementType$1 = exports.ElementType || (exports.ElementType = {}));
	function isTag$1(elem) {
		return elem.type === ElementType$1.Tag || elem.type === ElementType$1.Script || elem.type === ElementType$1.Style;
	}
	exports.isTag = isTag$1;
	exports.Root = ElementType$1.Root;
	exports.Text = ElementType$1.Text;
	exports.Directive = ElementType$1.Directive;
	exports.Comment = ElementType$1.Comment;
	exports.Script = ElementType$1.Script;
	exports.Style = ElementType$1.Style;
	exports.Tag = ElementType$1.Tag;
	exports.CDATA = ElementType$1.CDATA;
	exports.Doctype = ElementType$1.Doctype;
}));
var require_node$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d$1, b$1) {
				d$1.__proto__ = b$1;
			} || function(d$1, b$1) {
				for (var p in b$1) if (Object.prototype.hasOwnProperty.call(b$1, p)) d$1[p] = b$1[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	var __assign$1 = exports && exports.__assign || function() {
		__assign$1 = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign$1.apply(this, arguments);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var domelementtype_1$2 = require_lib$6();
	var Node$5 = function() {
		function Node$6() {
			this.parent = null;
			this.prev = null;
			this.next = null;
			this.startIndex = null;
			this.endIndex = null;
		}
		Object.defineProperty(Node$6.prototype, "parentNode", {
			get: function() {
				return this.parent;
			},
			set: function(parent) {
				this.parent = parent;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(Node$6.prototype, "previousSibling", {
			get: function() {
				return this.prev;
			},
			set: function(prev) {
				this.prev = prev;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(Node$6.prototype, "nextSibling", {
			get: function() {
				return this.next;
			},
			set: function(next) {
				this.next = next;
			},
			enumerable: false,
			configurable: true
		});
		Node$6.prototype.cloneNode = function(recursive) {
			if (recursive === void 0) recursive = false;
			return cloneNode$1(this, recursive);
		};
		return Node$6;
	}();
	exports.Node = Node$5;
	var DataNode = function(_super) {
		__extends(DataNode$1, _super);
		function DataNode$1(data) {
			var _this = _super.call(this) || this;
			_this.data = data;
			return _this;
		}
		Object.defineProperty(DataNode$1.prototype, "nodeValue", {
			get: function() {
				return this.data;
			},
			set: function(data) {
				this.data = data;
			},
			enumerable: false,
			configurable: true
		});
		return DataNode$1;
	}(Node$5);
	exports.DataNode = DataNode;
	var Text = function(_super) {
		__extends(Text$1, _super);
		function Text$1() {
			var _this = _super !== null && _super.apply(this, arguments) || this;
			_this.type = domelementtype_1$2.ElementType.Text;
			return _this;
		}
		Object.defineProperty(Text$1.prototype, "nodeType", {
			get: function() {
				return 3;
			},
			enumerable: false,
			configurable: true
		});
		return Text$1;
	}(DataNode);
	exports.Text = Text;
	var Comment$5 = function(_super) {
		__extends(Comment$6, _super);
		function Comment$6() {
			var _this = _super !== null && _super.apply(this, arguments) || this;
			_this.type = domelementtype_1$2.ElementType.Comment;
			return _this;
		}
		Object.defineProperty(Comment$6.prototype, "nodeType", {
			get: function() {
				return 8;
			},
			enumerable: false,
			configurable: true
		});
		return Comment$6;
	}(DataNode);
	exports.Comment = Comment$5;
	var ProcessingInstruction = function(_super) {
		__extends(ProcessingInstruction$1, _super);
		function ProcessingInstruction$1(name, data) {
			var _this = _super.call(this, data) || this;
			_this.name = name;
			_this.type = domelementtype_1$2.ElementType.Directive;
			return _this;
		}
		Object.defineProperty(ProcessingInstruction$1.prototype, "nodeType", {
			get: function() {
				return 1;
			},
			enumerable: false,
			configurable: true
		});
		return ProcessingInstruction$1;
	}(DataNode);
	exports.ProcessingInstruction = ProcessingInstruction;
	var NodeWithChildren = function(_super) {
		__extends(NodeWithChildren$1, _super);
		function NodeWithChildren$1(children) {
			var _this = _super.call(this) || this;
			_this.children = children;
			return _this;
		}
		Object.defineProperty(NodeWithChildren$1.prototype, "firstChild", {
			get: function() {
				var _a$1;
				return (_a$1 = this.children[0]) !== null && _a$1 !== void 0 ? _a$1 : null;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(NodeWithChildren$1.prototype, "lastChild", {
			get: function() {
				return this.children.length > 0 ? this.children[this.children.length - 1] : null;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(NodeWithChildren$1.prototype, "childNodes", {
			get: function() {
				return this.children;
			},
			set: function(children) {
				this.children = children;
			},
			enumerable: false,
			configurable: true
		});
		return NodeWithChildren$1;
	}(Node$5);
	exports.NodeWithChildren = NodeWithChildren;
	var CDATA = function(_super) {
		__extends(CDATA$1, _super);
		function CDATA$1() {
			var _this = _super !== null && _super.apply(this, arguments) || this;
			_this.type = domelementtype_1$2.ElementType.CDATA;
			return _this;
		}
		Object.defineProperty(CDATA$1.prototype, "nodeType", {
			get: function() {
				return 4;
			},
			enumerable: false,
			configurable: true
		});
		return CDATA$1;
	}(NodeWithChildren);
	exports.CDATA = CDATA;
	var Document$4 = function(_super) {
		__extends(Document$5, _super);
		function Document$5() {
			var _this = _super !== null && _super.apply(this, arguments) || this;
			_this.type = domelementtype_1$2.ElementType.Root;
			return _this;
		}
		Object.defineProperty(Document$5.prototype, "nodeType", {
			get: function() {
				return 9;
			},
			enumerable: false,
			configurable: true
		});
		return Document$5;
	}(NodeWithChildren);
	exports.Document = Document$4;
	var Element = function(_super) {
		__extends(Element$1, _super);
		function Element$1(name, attribs, children, type) {
			if (children === void 0) children = [];
			if (type === void 0) type = name === "script" ? domelementtype_1$2.ElementType.Script : name === "style" ? domelementtype_1$2.ElementType.Style : domelementtype_1$2.ElementType.Tag;
			var _this = _super.call(this, children) || this;
			_this.name = name;
			_this.attribs = attribs;
			_this.type = type;
			return _this;
		}
		Object.defineProperty(Element$1.prototype, "nodeType", {
			get: function() {
				return 1;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(Element$1.prototype, "tagName", {
			get: function() {
				return this.name;
			},
			set: function(name) {
				this.name = name;
			},
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(Element$1.prototype, "attributes", {
			get: function() {
				var _this = this;
				return Object.keys(this.attribs).map(function(name) {
					var _a$1, _b;
					return {
						name,
						value: _this.attribs[name],
						namespace: (_a$1 = _this["x-attribsNamespace"]) === null || _a$1 === void 0 ? void 0 : _a$1[name],
						prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
					};
				});
			},
			enumerable: false,
			configurable: true
		});
		return Element$1;
	}(NodeWithChildren);
	exports.Element = Element;
	function isTag(node) {
		return (0, domelementtype_1$2.isTag)(node);
	}
	exports.isTag = isTag;
	function isCDATA(node) {
		return node.type === domelementtype_1$2.ElementType.CDATA;
	}
	exports.isCDATA = isCDATA;
	function isText(node) {
		return node.type === domelementtype_1$2.ElementType.Text;
	}
	exports.isText = isText;
	function isComment(node) {
		return node.type === domelementtype_1$2.ElementType.Comment;
	}
	exports.isComment = isComment;
	function isDirective(node) {
		return node.type === domelementtype_1$2.ElementType.Directive;
	}
	exports.isDirective = isDirective;
	function isDocument(node) {
		return node.type === domelementtype_1$2.ElementType.Root;
	}
	exports.isDocument = isDocument;
	function hasChildren(node) {
		return Object.prototype.hasOwnProperty.call(node, "children");
	}
	exports.hasChildren = hasChildren;
	function cloneNode$1(node, recursive) {
		if (recursive === void 0) recursive = false;
		var result;
		if (isText(node)) result = new Text(node.data);
		else if (isComment(node)) result = new Comment$5(node.data);
		else if (isTag(node)) {
			var children = recursive ? cloneChildren(node.children) : [];
			var clone_1 = new Element(node.name, __assign$1({}, node.attribs), children);
			children.forEach(function(child) {
				return child.parent = clone_1;
			});
			if (node.namespace != null) clone_1.namespace = node.namespace;
			if (node["x-attribsNamespace"]) clone_1["x-attribsNamespace"] = __assign$1({}, node["x-attribsNamespace"]);
			if (node["x-attribsPrefix"]) clone_1["x-attribsPrefix"] = __assign$1({}, node["x-attribsPrefix"]);
			result = clone_1;
		} else if (isCDATA(node)) {
			var children = recursive ? cloneChildren(node.children) : [];
			var clone_2 = new CDATA(children);
			children.forEach(function(child) {
				return child.parent = clone_2;
			});
			result = clone_2;
		} else if (isDocument(node)) {
			var children = recursive ? cloneChildren(node.children) : [];
			var clone_3 = new Document$4(children);
			children.forEach(function(child) {
				return child.parent = clone_3;
			});
			if (node["x-mode"]) clone_3["x-mode"] = node["x-mode"];
			result = clone_3;
		} else if (isDirective(node)) {
			var instruction = new ProcessingInstruction(node.name, node.data);
			if (node["x-name"] != null) {
				instruction["x-name"] = node["x-name"];
				instruction["x-publicId"] = node["x-publicId"];
				instruction["x-systemId"] = node["x-systemId"];
			}
			result = instruction;
		} else throw new Error("Not implemented yet: ".concat(node.type));
		result.startIndex = node.startIndex;
		result.endIndex = node.endIndex;
		if (node.sourceCodeLocation != null) result.sourceCodeLocation = node.sourceCodeLocation;
		return result;
	}
	exports.cloneNode = cloneNode$1;
	function cloneChildren(childs) {
		var children = childs.map(function(child) {
			return cloneNode$1(child, true);
		});
		for (var i = 1; i < children.length; i++) {
			children[i].prev = children[i - 1];
			children[i - 1].next = children[i];
		}
		return children;
	}
}));
var require_lib$5 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding$3 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar$1 = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding$3(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DomHandler = void 0;
	var domelementtype_1$1 = require_lib$6();
	var node_js_1 = require_node$1();
	__exportStar$1(require_node$1(), exports);
	var defaultOpts = {
		withStartIndices: false,
		withEndIndices: false,
		xmlMode: false
	};
	var DomHandler = function() {
		function DomHandler$1(callback, options, elementCB) {
			this.dom = [];
			this.root = new node_js_1.Document(this.dom);
			this.done = false;
			this.tagStack = [this.root];
			this.lastNode = null;
			this.parser = null;
			if (typeof options === "function") {
				elementCB = options;
				options = defaultOpts;
			}
			if (typeof callback === "object") {
				options = callback;
				callback = void 0;
			}
			this.callback = callback !== null && callback !== void 0 ? callback : null;
			this.options = options !== null && options !== void 0 ? options : defaultOpts;
			this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
		}
		DomHandler$1.prototype.onparserinit = function(parser) {
			this.parser = parser;
		};
		DomHandler$1.prototype.onreset = function() {
			this.dom = [];
			this.root = new node_js_1.Document(this.dom);
			this.done = false;
			this.tagStack = [this.root];
			this.lastNode = null;
			this.parser = null;
		};
		DomHandler$1.prototype.onend = function() {
			if (this.done) return;
			this.done = true;
			this.parser = null;
			this.handleCallback(null);
		};
		DomHandler$1.prototype.onerror = function(error) {
			this.handleCallback(error);
		};
		DomHandler$1.prototype.onclosetag = function() {
			this.lastNode = null;
			var elem = this.tagStack.pop();
			if (this.options.withEndIndices) elem.endIndex = this.parser.endIndex;
			if (this.elementCB) this.elementCB(elem);
		};
		DomHandler$1.prototype.onopentag = function(name, attribs) {
			var type = this.options.xmlMode ? domelementtype_1$1.ElementType.Tag : void 0;
			var element = new node_js_1.Element(name, attribs, void 0, type);
			this.addNode(element);
			this.tagStack.push(element);
		};
		DomHandler$1.prototype.ontext = function(data) {
			var lastNode = this.lastNode;
			if (lastNode && lastNode.type === domelementtype_1$1.ElementType.Text) {
				lastNode.data += data;
				if (this.options.withEndIndices) lastNode.endIndex = this.parser.endIndex;
			} else {
				var node = new node_js_1.Text(data);
				this.addNode(node);
				this.lastNode = node;
			}
		};
		DomHandler$1.prototype.oncomment = function(data) {
			if (this.lastNode && this.lastNode.type === domelementtype_1$1.ElementType.Comment) {
				this.lastNode.data += data;
				return;
			}
			var node = new node_js_1.Comment(data);
			this.addNode(node);
			this.lastNode = node;
		};
		DomHandler$1.prototype.oncommentend = function() {
			this.lastNode = null;
		};
		DomHandler$1.prototype.oncdatastart = function() {
			var text = new node_js_1.Text("");
			var node = new node_js_1.CDATA([text]);
			this.addNode(node);
			text.parent = node;
			this.lastNode = text;
		};
		DomHandler$1.prototype.oncdataend = function() {
			this.lastNode = null;
		};
		DomHandler$1.prototype.onprocessinginstruction = function(name, data) {
			var node = new node_js_1.ProcessingInstruction(name, data);
			this.addNode(node);
		};
		DomHandler$1.prototype.handleCallback = function(error) {
			if (typeof this.callback === "function") this.callback(error, this.dom);
			else if (error) throw error;
		};
		DomHandler$1.prototype.addNode = function(node) {
			var parent = this.tagStack[this.tagStack.length - 1];
			var previousSibling = parent.children[parent.children.length - 1];
			if (this.options.withStartIndices) node.startIndex = this.parser.startIndex;
			if (this.options.withEndIndices) node.endIndex = this.parser.endIndex;
			parent.children.push(node);
			if (previousSibling) {
				node.prev = previousSibling;
				previousSibling.next = node;
			}
			node.parent = parent;
			this.lastNode = null;
		};
		return DomHandler$1;
	}();
	exports.DomHandler = DomHandler;
	exports.default = DomHandler;
}));
var require_encode_html = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	function restoreDiff(arr) {
		for (var i = 1; i < arr.length; i++) arr[i][0] += arr[i - 1][0] + 1;
		return arr;
	}
	exports.default = new Map(/* @__PURE__ */ restoreDiff([
		[9, "&Tab;"],
		[0, "&NewLine;"],
		[22, "&excl;"],
		[0, "&quot;"],
		[0, "&num;"],
		[0, "&dollar;"],
		[0, "&percnt;"],
		[0, "&amp;"],
		[0, "&apos;"],
		[0, "&lpar;"],
		[0, "&rpar;"],
		[0, "&ast;"],
		[0, "&plus;"],
		[0, "&comma;"],
		[1, "&period;"],
		[0, "&sol;"],
		[10, "&colon;"],
		[0, "&semi;"],
		[0, {
			v: "&lt;",
			n: 8402,
			o: "&nvlt;"
		}],
		[0, {
			v: "&equals;",
			n: 8421,
			o: "&bne;"
		}],
		[0, {
			v: "&gt;",
			n: 8402,
			o: "&nvgt;"
		}],
		[0, "&quest;"],
		[0, "&commat;"],
		[26, "&lbrack;"],
		[0, "&bsol;"],
		[0, "&rbrack;"],
		[0, "&Hat;"],
		[0, "&lowbar;"],
		[0, "&DiacriticalGrave;"],
		[5, {
			n: 106,
			o: "&fjlig;"
		}],
		[20, "&lbrace;"],
		[0, "&verbar;"],
		[0, "&rbrace;"],
		[34, "&nbsp;"],
		[0, "&iexcl;"],
		[0, "&cent;"],
		[0, "&pound;"],
		[0, "&curren;"],
		[0, "&yen;"],
		[0, "&brvbar;"],
		[0, "&sect;"],
		[0, "&die;"],
		[0, "&copy;"],
		[0, "&ordf;"],
		[0, "&laquo;"],
		[0, "&not;"],
		[0, "&shy;"],
		[0, "&circledR;"],
		[0, "&macr;"],
		[0, "&deg;"],
		[0, "&PlusMinus;"],
		[0, "&sup2;"],
		[0, "&sup3;"],
		[0, "&acute;"],
		[0, "&micro;"],
		[0, "&para;"],
		[0, "&centerdot;"],
		[0, "&cedil;"],
		[0, "&sup1;"],
		[0, "&ordm;"],
		[0, "&raquo;"],
		[0, "&frac14;"],
		[0, "&frac12;"],
		[0, "&frac34;"],
		[0, "&iquest;"],
		[0, "&Agrave;"],
		[0, "&Aacute;"],
		[0, "&Acirc;"],
		[0, "&Atilde;"],
		[0, "&Auml;"],
		[0, "&angst;"],
		[0, "&AElig;"],
		[0, "&Ccedil;"],
		[0, "&Egrave;"],
		[0, "&Eacute;"],
		[0, "&Ecirc;"],
		[0, "&Euml;"],
		[0, "&Igrave;"],
		[0, "&Iacute;"],
		[0, "&Icirc;"],
		[0, "&Iuml;"],
		[0, "&ETH;"],
		[0, "&Ntilde;"],
		[0, "&Ograve;"],
		[0, "&Oacute;"],
		[0, "&Ocirc;"],
		[0, "&Otilde;"],
		[0, "&Ouml;"],
		[0, "&times;"],
		[0, "&Oslash;"],
		[0, "&Ugrave;"],
		[0, "&Uacute;"],
		[0, "&Ucirc;"],
		[0, "&Uuml;"],
		[0, "&Yacute;"],
		[0, "&THORN;"],
		[0, "&szlig;"],
		[0, "&agrave;"],
		[0, "&aacute;"],
		[0, "&acirc;"],
		[0, "&atilde;"],
		[0, "&auml;"],
		[0, "&aring;"],
		[0, "&aelig;"],
		[0, "&ccedil;"],
		[0, "&egrave;"],
		[0, "&eacute;"],
		[0, "&ecirc;"],
		[0, "&euml;"],
		[0, "&igrave;"],
		[0, "&iacute;"],
		[0, "&icirc;"],
		[0, "&iuml;"],
		[0, "&eth;"],
		[0, "&ntilde;"],
		[0, "&ograve;"],
		[0, "&oacute;"],
		[0, "&ocirc;"],
		[0, "&otilde;"],
		[0, "&ouml;"],
		[0, "&div;"],
		[0, "&oslash;"],
		[0, "&ugrave;"],
		[0, "&uacute;"],
		[0, "&ucirc;"],
		[0, "&uuml;"],
		[0, "&yacute;"],
		[0, "&thorn;"],
		[0, "&yuml;"],
		[0, "&Amacr;"],
		[0, "&amacr;"],
		[0, "&Abreve;"],
		[0, "&abreve;"],
		[0, "&Aogon;"],
		[0, "&aogon;"],
		[0, "&Cacute;"],
		[0, "&cacute;"],
		[0, "&Ccirc;"],
		[0, "&ccirc;"],
		[0, "&Cdot;"],
		[0, "&cdot;"],
		[0, "&Ccaron;"],
		[0, "&ccaron;"],
		[0, "&Dcaron;"],
		[0, "&dcaron;"],
		[0, "&Dstrok;"],
		[0, "&dstrok;"],
		[0, "&Emacr;"],
		[0, "&emacr;"],
		[2, "&Edot;"],
		[0, "&edot;"],
		[0, "&Eogon;"],
		[0, "&eogon;"],
		[0, "&Ecaron;"],
		[0, "&ecaron;"],
		[0, "&Gcirc;"],
		[0, "&gcirc;"],
		[0, "&Gbreve;"],
		[0, "&gbreve;"],
		[0, "&Gdot;"],
		[0, "&gdot;"],
		[0, "&Gcedil;"],
		[1, "&Hcirc;"],
		[0, "&hcirc;"],
		[0, "&Hstrok;"],
		[0, "&hstrok;"],
		[0, "&Itilde;"],
		[0, "&itilde;"],
		[0, "&Imacr;"],
		[0, "&imacr;"],
		[2, "&Iogon;"],
		[0, "&iogon;"],
		[0, "&Idot;"],
		[0, "&imath;"],
		[0, "&IJlig;"],
		[0, "&ijlig;"],
		[0, "&Jcirc;"],
		[0, "&jcirc;"],
		[0, "&Kcedil;"],
		[0, "&kcedil;"],
		[0, "&kgreen;"],
		[0, "&Lacute;"],
		[0, "&lacute;"],
		[0, "&Lcedil;"],
		[0, "&lcedil;"],
		[0, "&Lcaron;"],
		[0, "&lcaron;"],
		[0, "&Lmidot;"],
		[0, "&lmidot;"],
		[0, "&Lstrok;"],
		[0, "&lstrok;"],
		[0, "&Nacute;"],
		[0, "&nacute;"],
		[0, "&Ncedil;"],
		[0, "&ncedil;"],
		[0, "&Ncaron;"],
		[0, "&ncaron;"],
		[0, "&napos;"],
		[0, "&ENG;"],
		[0, "&eng;"],
		[0, "&Omacr;"],
		[0, "&omacr;"],
		[2, "&Odblac;"],
		[0, "&odblac;"],
		[0, "&OElig;"],
		[0, "&oelig;"],
		[0, "&Racute;"],
		[0, "&racute;"],
		[0, "&Rcedil;"],
		[0, "&rcedil;"],
		[0, "&Rcaron;"],
		[0, "&rcaron;"],
		[0, "&Sacute;"],
		[0, "&sacute;"],
		[0, "&Scirc;"],
		[0, "&scirc;"],
		[0, "&Scedil;"],
		[0, "&scedil;"],
		[0, "&Scaron;"],
		[0, "&scaron;"],
		[0, "&Tcedil;"],
		[0, "&tcedil;"],
		[0, "&Tcaron;"],
		[0, "&tcaron;"],
		[0, "&Tstrok;"],
		[0, "&tstrok;"],
		[0, "&Utilde;"],
		[0, "&utilde;"],
		[0, "&Umacr;"],
		[0, "&umacr;"],
		[0, "&Ubreve;"],
		[0, "&ubreve;"],
		[0, "&Uring;"],
		[0, "&uring;"],
		[0, "&Udblac;"],
		[0, "&udblac;"],
		[0, "&Uogon;"],
		[0, "&uogon;"],
		[0, "&Wcirc;"],
		[0, "&wcirc;"],
		[0, "&Ycirc;"],
		[0, "&ycirc;"],
		[0, "&Yuml;"],
		[0, "&Zacute;"],
		[0, "&zacute;"],
		[0, "&Zdot;"],
		[0, "&zdot;"],
		[0, "&Zcaron;"],
		[0, "&zcaron;"],
		[19, "&fnof;"],
		[34, "&imped;"],
		[63, "&gacute;"],
		[65, "&jmath;"],
		[142, "&circ;"],
		[0, "&caron;"],
		[16, "&breve;"],
		[0, "&DiacriticalDot;"],
		[0, "&ring;"],
		[0, "&ogon;"],
		[0, "&DiacriticalTilde;"],
		[0, "&dblac;"],
		[51, "&DownBreve;"],
		[127, "&Alpha;"],
		[0, "&Beta;"],
		[0, "&Gamma;"],
		[0, "&Delta;"],
		[0, "&Epsilon;"],
		[0, "&Zeta;"],
		[0, "&Eta;"],
		[0, "&Theta;"],
		[0, "&Iota;"],
		[0, "&Kappa;"],
		[0, "&Lambda;"],
		[0, "&Mu;"],
		[0, "&Nu;"],
		[0, "&Xi;"],
		[0, "&Omicron;"],
		[0, "&Pi;"],
		[0, "&Rho;"],
		[1, "&Sigma;"],
		[0, "&Tau;"],
		[0, "&Upsilon;"],
		[0, "&Phi;"],
		[0, "&Chi;"],
		[0, "&Psi;"],
		[0, "&ohm;"],
		[7, "&alpha;"],
		[0, "&beta;"],
		[0, "&gamma;"],
		[0, "&delta;"],
		[0, "&epsi;"],
		[0, "&zeta;"],
		[0, "&eta;"],
		[0, "&theta;"],
		[0, "&iota;"],
		[0, "&kappa;"],
		[0, "&lambda;"],
		[0, "&mu;"],
		[0, "&nu;"],
		[0, "&xi;"],
		[0, "&omicron;"],
		[0, "&pi;"],
		[0, "&rho;"],
		[0, "&sigmaf;"],
		[0, "&sigma;"],
		[0, "&tau;"],
		[0, "&upsi;"],
		[0, "&phi;"],
		[0, "&chi;"],
		[0, "&psi;"],
		[0, "&omega;"],
		[7, "&thetasym;"],
		[0, "&Upsi;"],
		[2, "&phiv;"],
		[0, "&piv;"],
		[5, "&Gammad;"],
		[0, "&digamma;"],
		[18, "&kappav;"],
		[0, "&rhov;"],
		[3, "&epsiv;"],
		[0, "&backepsilon;"],
		[10, "&IOcy;"],
		[0, "&DJcy;"],
		[0, "&GJcy;"],
		[0, "&Jukcy;"],
		[0, "&DScy;"],
		[0, "&Iukcy;"],
		[0, "&YIcy;"],
		[0, "&Jsercy;"],
		[0, "&LJcy;"],
		[0, "&NJcy;"],
		[0, "&TSHcy;"],
		[0, "&KJcy;"],
		[1, "&Ubrcy;"],
		[0, "&DZcy;"],
		[0, "&Acy;"],
		[0, "&Bcy;"],
		[0, "&Vcy;"],
		[0, "&Gcy;"],
		[0, "&Dcy;"],
		[0, "&IEcy;"],
		[0, "&ZHcy;"],
		[0, "&Zcy;"],
		[0, "&Icy;"],
		[0, "&Jcy;"],
		[0, "&Kcy;"],
		[0, "&Lcy;"],
		[0, "&Mcy;"],
		[0, "&Ncy;"],
		[0, "&Ocy;"],
		[0, "&Pcy;"],
		[0, "&Rcy;"],
		[0, "&Scy;"],
		[0, "&Tcy;"],
		[0, "&Ucy;"],
		[0, "&Fcy;"],
		[0, "&KHcy;"],
		[0, "&TScy;"],
		[0, "&CHcy;"],
		[0, "&SHcy;"],
		[0, "&SHCHcy;"],
		[0, "&HARDcy;"],
		[0, "&Ycy;"],
		[0, "&SOFTcy;"],
		[0, "&Ecy;"],
		[0, "&YUcy;"],
		[0, "&YAcy;"],
		[0, "&acy;"],
		[0, "&bcy;"],
		[0, "&vcy;"],
		[0, "&gcy;"],
		[0, "&dcy;"],
		[0, "&iecy;"],
		[0, "&zhcy;"],
		[0, "&zcy;"],
		[0, "&icy;"],
		[0, "&jcy;"],
		[0, "&kcy;"],
		[0, "&lcy;"],
		[0, "&mcy;"],
		[0, "&ncy;"],
		[0, "&ocy;"],
		[0, "&pcy;"],
		[0, "&rcy;"],
		[0, "&scy;"],
		[0, "&tcy;"],
		[0, "&ucy;"],
		[0, "&fcy;"],
		[0, "&khcy;"],
		[0, "&tscy;"],
		[0, "&chcy;"],
		[0, "&shcy;"],
		[0, "&shchcy;"],
		[0, "&hardcy;"],
		[0, "&ycy;"],
		[0, "&softcy;"],
		[0, "&ecy;"],
		[0, "&yucy;"],
		[0, "&yacy;"],
		[1, "&iocy;"],
		[0, "&djcy;"],
		[0, "&gjcy;"],
		[0, "&jukcy;"],
		[0, "&dscy;"],
		[0, "&iukcy;"],
		[0, "&yicy;"],
		[0, "&jsercy;"],
		[0, "&ljcy;"],
		[0, "&njcy;"],
		[0, "&tshcy;"],
		[0, "&kjcy;"],
		[1, "&ubrcy;"],
		[0, "&dzcy;"],
		[7074, "&ensp;"],
		[0, "&emsp;"],
		[0, "&emsp13;"],
		[0, "&emsp14;"],
		[1, "&numsp;"],
		[0, "&puncsp;"],
		[0, "&ThinSpace;"],
		[0, "&hairsp;"],
		[0, "&NegativeMediumSpace;"],
		[0, "&zwnj;"],
		[0, "&zwj;"],
		[0, "&lrm;"],
		[0, "&rlm;"],
		[0, "&dash;"],
		[2, "&ndash;"],
		[0, "&mdash;"],
		[0, "&horbar;"],
		[0, "&Verbar;"],
		[1, "&lsquo;"],
		[0, "&CloseCurlyQuote;"],
		[0, "&lsquor;"],
		[1, "&ldquo;"],
		[0, "&CloseCurlyDoubleQuote;"],
		[0, "&bdquo;"],
		[1, "&dagger;"],
		[0, "&Dagger;"],
		[0, "&bull;"],
		[2, "&nldr;"],
		[0, "&hellip;"],
		[9, "&permil;"],
		[0, "&pertenk;"],
		[0, "&prime;"],
		[0, "&Prime;"],
		[0, "&tprime;"],
		[0, "&backprime;"],
		[3, "&lsaquo;"],
		[0, "&rsaquo;"],
		[3, "&oline;"],
		[2, "&caret;"],
		[1, "&hybull;"],
		[0, "&frasl;"],
		[10, "&bsemi;"],
		[7, "&qprime;"],
		[7, {
			v: "&MediumSpace;",
			n: 8202,
			o: "&ThickSpace;"
		}],
		[0, "&NoBreak;"],
		[0, "&af;"],
		[0, "&InvisibleTimes;"],
		[0, "&ic;"],
		[72, "&euro;"],
		[46, "&tdot;"],
		[0, "&DotDot;"],
		[37, "&complexes;"],
		[2, "&incare;"],
		[4, "&gscr;"],
		[0, "&hamilt;"],
		[0, "&Hfr;"],
		[0, "&Hopf;"],
		[0, "&planckh;"],
		[0, "&hbar;"],
		[0, "&imagline;"],
		[0, "&Ifr;"],
		[0, "&lagran;"],
		[0, "&ell;"],
		[1, "&naturals;"],
		[0, "&numero;"],
		[0, "&copysr;"],
		[0, "&weierp;"],
		[0, "&Popf;"],
		[0, "&Qopf;"],
		[0, "&realine;"],
		[0, "&real;"],
		[0, "&reals;"],
		[0, "&rx;"],
		[3, "&trade;"],
		[1, "&integers;"],
		[2, "&mho;"],
		[0, "&zeetrf;"],
		[0, "&iiota;"],
		[2, "&bernou;"],
		[0, "&Cayleys;"],
		[1, "&escr;"],
		[0, "&Escr;"],
		[0, "&Fouriertrf;"],
		[1, "&Mellintrf;"],
		[0, "&order;"],
		[0, "&alefsym;"],
		[0, "&beth;"],
		[0, "&gimel;"],
		[0, "&daleth;"],
		[12, "&CapitalDifferentialD;"],
		[0, "&dd;"],
		[0, "&ee;"],
		[0, "&ii;"],
		[10, "&frac13;"],
		[0, "&frac23;"],
		[0, "&frac15;"],
		[0, "&frac25;"],
		[0, "&frac35;"],
		[0, "&frac45;"],
		[0, "&frac16;"],
		[0, "&frac56;"],
		[0, "&frac18;"],
		[0, "&frac38;"],
		[0, "&frac58;"],
		[0, "&frac78;"],
		[49, "&larr;"],
		[0, "&ShortUpArrow;"],
		[0, "&rarr;"],
		[0, "&darr;"],
		[0, "&harr;"],
		[0, "&updownarrow;"],
		[0, "&nwarr;"],
		[0, "&nearr;"],
		[0, "&LowerRightArrow;"],
		[0, "&LowerLeftArrow;"],
		[0, "&nlarr;"],
		[0, "&nrarr;"],
		[1, {
			v: "&rarrw;",
			n: 824,
			o: "&nrarrw;"
		}],
		[0, "&Larr;"],
		[0, "&Uarr;"],
		[0, "&Rarr;"],
		[0, "&Darr;"],
		[0, "&larrtl;"],
		[0, "&rarrtl;"],
		[0, "&LeftTeeArrow;"],
		[0, "&mapstoup;"],
		[0, "&map;"],
		[0, "&DownTeeArrow;"],
		[1, "&hookleftarrow;"],
		[0, "&hookrightarrow;"],
		[0, "&larrlp;"],
		[0, "&looparrowright;"],
		[0, "&harrw;"],
		[0, "&nharr;"],
		[1, "&lsh;"],
		[0, "&rsh;"],
		[0, "&ldsh;"],
		[0, "&rdsh;"],
		[1, "&crarr;"],
		[0, "&cularr;"],
		[0, "&curarr;"],
		[2, "&circlearrowleft;"],
		[0, "&circlearrowright;"],
		[0, "&leftharpoonup;"],
		[0, "&DownLeftVector;"],
		[0, "&RightUpVector;"],
		[0, "&LeftUpVector;"],
		[0, "&rharu;"],
		[0, "&DownRightVector;"],
		[0, "&dharr;"],
		[0, "&dharl;"],
		[0, "&RightArrowLeftArrow;"],
		[0, "&udarr;"],
		[0, "&LeftArrowRightArrow;"],
		[0, "&leftleftarrows;"],
		[0, "&upuparrows;"],
		[0, "&rightrightarrows;"],
		[0, "&ddarr;"],
		[0, "&leftrightharpoons;"],
		[0, "&Equilibrium;"],
		[0, "&nlArr;"],
		[0, "&nhArr;"],
		[0, "&nrArr;"],
		[0, "&DoubleLeftArrow;"],
		[0, "&DoubleUpArrow;"],
		[0, "&DoubleRightArrow;"],
		[0, "&dArr;"],
		[0, "&DoubleLeftRightArrow;"],
		[0, "&DoubleUpDownArrow;"],
		[0, "&nwArr;"],
		[0, "&neArr;"],
		[0, "&seArr;"],
		[0, "&swArr;"],
		[0, "&lAarr;"],
		[0, "&rAarr;"],
		[1, "&zigrarr;"],
		[6, "&larrb;"],
		[0, "&rarrb;"],
		[15, "&DownArrowUpArrow;"],
		[7, "&loarr;"],
		[0, "&roarr;"],
		[0, "&hoarr;"],
		[0, "&forall;"],
		[0, "&comp;"],
		[0, {
			v: "&part;",
			n: 824,
			o: "&npart;"
		}],
		[0, "&exist;"],
		[0, "&nexist;"],
		[0, "&empty;"],
		[1, "&Del;"],
		[0, "&Element;"],
		[0, "&NotElement;"],
		[1, "&ni;"],
		[0, "&notni;"],
		[2, "&prod;"],
		[0, "&coprod;"],
		[0, "&sum;"],
		[0, "&minus;"],
		[0, "&MinusPlus;"],
		[0, "&dotplus;"],
		[1, "&Backslash;"],
		[0, "&lowast;"],
		[0, "&compfn;"],
		[1, "&radic;"],
		[2, "&prop;"],
		[0, "&infin;"],
		[0, "&angrt;"],
		[0, {
			v: "&ang;",
			n: 8402,
			o: "&nang;"
		}],
		[0, "&angmsd;"],
		[0, "&angsph;"],
		[0, "&mid;"],
		[0, "&nmid;"],
		[0, "&DoubleVerticalBar;"],
		[0, "&NotDoubleVerticalBar;"],
		[0, "&and;"],
		[0, "&or;"],
		[0, {
			v: "&cap;",
			n: 65024,
			o: "&caps;"
		}],
		[0, {
			v: "&cup;",
			n: 65024,
			o: "&cups;"
		}],
		[0, "&int;"],
		[0, "&Int;"],
		[0, "&iiint;"],
		[0, "&conint;"],
		[0, "&Conint;"],
		[0, "&Cconint;"],
		[0, "&cwint;"],
		[0, "&ClockwiseContourIntegral;"],
		[0, "&awconint;"],
		[0, "&there4;"],
		[0, "&becaus;"],
		[0, "&ratio;"],
		[0, "&Colon;"],
		[0, "&dotminus;"],
		[1, "&mDDot;"],
		[0, "&homtht;"],
		[0, {
			v: "&sim;",
			n: 8402,
			o: "&nvsim;"
		}],
		[0, {
			v: "&backsim;",
			n: 817,
			o: "&race;"
		}],
		[0, {
			v: "&ac;",
			n: 819,
			o: "&acE;"
		}],
		[0, "&acd;"],
		[0, "&VerticalTilde;"],
		[0, "&NotTilde;"],
		[0, {
			v: "&eqsim;",
			n: 824,
			o: "&nesim;"
		}],
		[0, "&sime;"],
		[0, "&NotTildeEqual;"],
		[0, "&cong;"],
		[0, "&simne;"],
		[0, "&ncong;"],
		[0, "&ap;"],
		[0, "&nap;"],
		[0, "&ape;"],
		[0, {
			v: "&apid;",
			n: 824,
			o: "&napid;"
		}],
		[0, "&backcong;"],
		[0, {
			v: "&asympeq;",
			n: 8402,
			o: "&nvap;"
		}],
		[0, {
			v: "&bump;",
			n: 824,
			o: "&nbump;"
		}],
		[0, {
			v: "&bumpe;",
			n: 824,
			o: "&nbumpe;"
		}],
		[0, {
			v: "&doteq;",
			n: 824,
			o: "&nedot;"
		}],
		[0, "&doteqdot;"],
		[0, "&efDot;"],
		[0, "&erDot;"],
		[0, "&Assign;"],
		[0, "&ecolon;"],
		[0, "&ecir;"],
		[0, "&circeq;"],
		[1, "&wedgeq;"],
		[0, "&veeeq;"],
		[1, "&triangleq;"],
		[2, "&equest;"],
		[0, "&ne;"],
		[0, {
			v: "&Congruent;",
			n: 8421,
			o: "&bnequiv;"
		}],
		[0, "&nequiv;"],
		[1, {
			v: "&le;",
			n: 8402,
			o: "&nvle;"
		}],
		[0, {
			v: "&ge;",
			n: 8402,
			o: "&nvge;"
		}],
		[0, {
			v: "&lE;",
			n: 824,
			o: "&nlE;"
		}],
		[0, {
			v: "&gE;",
			n: 824,
			o: "&ngE;"
		}],
		[0, {
			v: "&lnE;",
			n: 65024,
			o: "&lvertneqq;"
		}],
		[0, {
			v: "&gnE;",
			n: 65024,
			o: "&gvertneqq;"
		}],
		[0, {
			v: "&ll;",
			n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]]))
		}],
		[0, {
			v: "&gg;",
			n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]]))
		}],
		[0, "&between;"],
		[0, "&NotCupCap;"],
		[0, "&nless;"],
		[0, "&ngt;"],
		[0, "&nle;"],
		[0, "&nge;"],
		[0, "&lesssim;"],
		[0, "&GreaterTilde;"],
		[0, "&nlsim;"],
		[0, "&ngsim;"],
		[0, "&LessGreater;"],
		[0, "&gl;"],
		[0, "&NotLessGreater;"],
		[0, "&NotGreaterLess;"],
		[0, "&pr;"],
		[0, "&sc;"],
		[0, "&prcue;"],
		[0, "&sccue;"],
		[0, "&PrecedesTilde;"],
		[0, {
			v: "&scsim;",
			n: 824,
			o: "&NotSucceedsTilde;"
		}],
		[0, "&NotPrecedes;"],
		[0, "&NotSucceeds;"],
		[0, {
			v: "&sub;",
			n: 8402,
			o: "&NotSubset;"
		}],
		[0, {
			v: "&sup;",
			n: 8402,
			o: "&NotSuperset;"
		}],
		[0, "&nsub;"],
		[0, "&nsup;"],
		[0, "&sube;"],
		[0, "&supe;"],
		[0, "&NotSubsetEqual;"],
		[0, "&NotSupersetEqual;"],
		[0, {
			v: "&subne;",
			n: 65024,
			o: "&varsubsetneq;"
		}],
		[0, {
			v: "&supne;",
			n: 65024,
			o: "&varsupsetneq;"
		}],
		[1, "&cupdot;"],
		[0, "&UnionPlus;"],
		[0, {
			v: "&sqsub;",
			n: 824,
			o: "&NotSquareSubset;"
		}],
		[0, {
			v: "&sqsup;",
			n: 824,
			o: "&NotSquareSuperset;"
		}],
		[0, "&sqsube;"],
		[0, "&sqsupe;"],
		[0, {
			v: "&sqcap;",
			n: 65024,
			o: "&sqcaps;"
		}],
		[0, {
			v: "&sqcup;",
			n: 65024,
			o: "&sqcups;"
		}],
		[0, "&CirclePlus;"],
		[0, "&CircleMinus;"],
		[0, "&CircleTimes;"],
		[0, "&osol;"],
		[0, "&CircleDot;"],
		[0, "&circledcirc;"],
		[0, "&circledast;"],
		[1, "&circleddash;"],
		[0, "&boxplus;"],
		[0, "&boxminus;"],
		[0, "&boxtimes;"],
		[0, "&dotsquare;"],
		[0, "&RightTee;"],
		[0, "&dashv;"],
		[0, "&DownTee;"],
		[0, "&bot;"],
		[1, "&models;"],
		[0, "&DoubleRightTee;"],
		[0, "&Vdash;"],
		[0, "&Vvdash;"],
		[0, "&VDash;"],
		[0, "&nvdash;"],
		[0, "&nvDash;"],
		[0, "&nVdash;"],
		[0, "&nVDash;"],
		[0, "&prurel;"],
		[1, "&LeftTriangle;"],
		[0, "&RightTriangle;"],
		[0, {
			v: "&LeftTriangleEqual;",
			n: 8402,
			o: "&nvltrie;"
		}],
		[0, {
			v: "&RightTriangleEqual;",
			n: 8402,
			o: "&nvrtrie;"
		}],
		[0, "&origof;"],
		[0, "&imof;"],
		[0, "&multimap;"],
		[0, "&hercon;"],
		[0, "&intcal;"],
		[0, "&veebar;"],
		[1, "&barvee;"],
		[0, "&angrtvb;"],
		[0, "&lrtri;"],
		[0, "&bigwedge;"],
		[0, "&bigvee;"],
		[0, "&bigcap;"],
		[0, "&bigcup;"],
		[0, "&diam;"],
		[0, "&sdot;"],
		[0, "&sstarf;"],
		[0, "&divideontimes;"],
		[0, "&bowtie;"],
		[0, "&ltimes;"],
		[0, "&rtimes;"],
		[0, "&leftthreetimes;"],
		[0, "&rightthreetimes;"],
		[0, "&backsimeq;"],
		[0, "&curlyvee;"],
		[0, "&curlywedge;"],
		[0, "&Sub;"],
		[0, "&Sup;"],
		[0, "&Cap;"],
		[0, "&Cup;"],
		[0, "&fork;"],
		[0, "&epar;"],
		[0, "&lessdot;"],
		[0, "&gtdot;"],
		[0, {
			v: "&Ll;",
			n: 824,
			o: "&nLl;"
		}],
		[0, {
			v: "&Gg;",
			n: 824,
			o: "&nGg;"
		}],
		[0, {
			v: "&leg;",
			n: 65024,
			o: "&lesg;"
		}],
		[0, {
			v: "&gel;",
			n: 65024,
			o: "&gesl;"
		}],
		[2, "&cuepr;"],
		[0, "&cuesc;"],
		[0, "&NotPrecedesSlantEqual;"],
		[0, "&NotSucceedsSlantEqual;"],
		[0, "&NotSquareSubsetEqual;"],
		[0, "&NotSquareSupersetEqual;"],
		[2, "&lnsim;"],
		[0, "&gnsim;"],
		[0, "&precnsim;"],
		[0, "&scnsim;"],
		[0, "&nltri;"],
		[0, "&NotRightTriangle;"],
		[0, "&nltrie;"],
		[0, "&NotRightTriangleEqual;"],
		[0, "&vellip;"],
		[0, "&ctdot;"],
		[0, "&utdot;"],
		[0, "&dtdot;"],
		[0, "&disin;"],
		[0, "&isinsv;"],
		[0, "&isins;"],
		[0, {
			v: "&isindot;",
			n: 824,
			o: "&notindot;"
		}],
		[0, "&notinvc;"],
		[0, "&notinvb;"],
		[1, {
			v: "&isinE;",
			n: 824,
			o: "&notinE;"
		}],
		[0, "&nisd;"],
		[0, "&xnis;"],
		[0, "&nis;"],
		[0, "&notnivc;"],
		[0, "&notnivb;"],
		[6, "&barwed;"],
		[0, "&Barwed;"],
		[1, "&lceil;"],
		[0, "&rceil;"],
		[0, "&LeftFloor;"],
		[0, "&rfloor;"],
		[0, "&drcrop;"],
		[0, "&dlcrop;"],
		[0, "&urcrop;"],
		[0, "&ulcrop;"],
		[0, "&bnot;"],
		[1, "&profline;"],
		[0, "&profsurf;"],
		[1, "&telrec;"],
		[0, "&target;"],
		[5, "&ulcorn;"],
		[0, "&urcorn;"],
		[0, "&dlcorn;"],
		[0, "&drcorn;"],
		[2, "&frown;"],
		[0, "&smile;"],
		[9, "&cylcty;"],
		[0, "&profalar;"],
		[7, "&topbot;"],
		[6, "&ovbar;"],
		[1, "&solbar;"],
		[60, "&angzarr;"],
		[51, "&lmoustache;"],
		[0, "&rmoustache;"],
		[2, "&OverBracket;"],
		[0, "&bbrk;"],
		[0, "&bbrktbrk;"],
		[37, "&OverParenthesis;"],
		[0, "&UnderParenthesis;"],
		[0, "&OverBrace;"],
		[0, "&UnderBrace;"],
		[2, "&trpezium;"],
		[4, "&elinters;"],
		[59, "&blank;"],
		[164, "&circledS;"],
		[55, "&boxh;"],
		[1, "&boxv;"],
		[9, "&boxdr;"],
		[3, "&boxdl;"],
		[3, "&boxur;"],
		[3, "&boxul;"],
		[3, "&boxvr;"],
		[7, "&boxvl;"],
		[7, "&boxhd;"],
		[7, "&boxhu;"],
		[7, "&boxvh;"],
		[19, "&boxH;"],
		[0, "&boxV;"],
		[0, "&boxdR;"],
		[0, "&boxDr;"],
		[0, "&boxDR;"],
		[0, "&boxdL;"],
		[0, "&boxDl;"],
		[0, "&boxDL;"],
		[0, "&boxuR;"],
		[0, "&boxUr;"],
		[0, "&boxUR;"],
		[0, "&boxuL;"],
		[0, "&boxUl;"],
		[0, "&boxUL;"],
		[0, "&boxvR;"],
		[0, "&boxVr;"],
		[0, "&boxVR;"],
		[0, "&boxvL;"],
		[0, "&boxVl;"],
		[0, "&boxVL;"],
		[0, "&boxHd;"],
		[0, "&boxhD;"],
		[0, "&boxHD;"],
		[0, "&boxHu;"],
		[0, "&boxhU;"],
		[0, "&boxHU;"],
		[0, "&boxvH;"],
		[0, "&boxVh;"],
		[0, "&boxVH;"],
		[19, "&uhblk;"],
		[3, "&lhblk;"],
		[3, "&block;"],
		[8, "&blk14;"],
		[0, "&blk12;"],
		[0, "&blk34;"],
		[13, "&square;"],
		[8, "&blacksquare;"],
		[0, "&EmptyVerySmallSquare;"],
		[1, "&rect;"],
		[0, "&marker;"],
		[2, "&fltns;"],
		[1, "&bigtriangleup;"],
		[0, "&blacktriangle;"],
		[0, "&triangle;"],
		[2, "&blacktriangleright;"],
		[0, "&rtri;"],
		[3, "&bigtriangledown;"],
		[0, "&blacktriangledown;"],
		[0, "&dtri;"],
		[2, "&blacktriangleleft;"],
		[0, "&ltri;"],
		[6, "&loz;"],
		[0, "&cir;"],
		[32, "&tridot;"],
		[2, "&bigcirc;"],
		[8, "&ultri;"],
		[0, "&urtri;"],
		[0, "&lltri;"],
		[0, "&EmptySmallSquare;"],
		[0, "&FilledSmallSquare;"],
		[8, "&bigstar;"],
		[0, "&star;"],
		[7, "&phone;"],
		[49, "&female;"],
		[1, "&male;"],
		[29, "&spades;"],
		[2, "&clubs;"],
		[1, "&hearts;"],
		[0, "&diamondsuit;"],
		[3, "&sung;"],
		[2, "&flat;"],
		[0, "&natural;"],
		[0, "&sharp;"],
		[163, "&check;"],
		[3, "&cross;"],
		[8, "&malt;"],
		[21, "&sext;"],
		[33, "&VerticalSeparator;"],
		[25, "&lbbrk;"],
		[0, "&rbbrk;"],
		[84, "&bsolhsub;"],
		[0, "&suphsol;"],
		[28, "&LeftDoubleBracket;"],
		[0, "&RightDoubleBracket;"],
		[0, "&lang;"],
		[0, "&rang;"],
		[0, "&Lang;"],
		[0, "&Rang;"],
		[0, "&loang;"],
		[0, "&roang;"],
		[7, "&longleftarrow;"],
		[0, "&longrightarrow;"],
		[0, "&longleftrightarrow;"],
		[0, "&DoubleLongLeftArrow;"],
		[0, "&DoubleLongRightArrow;"],
		[0, "&DoubleLongLeftRightArrow;"],
		[1, "&longmapsto;"],
		[2, "&dzigrarr;"],
		[258, "&nvlArr;"],
		[0, "&nvrArr;"],
		[0, "&nvHarr;"],
		[0, "&Map;"],
		[6, "&lbarr;"],
		[0, "&bkarow;"],
		[0, "&lBarr;"],
		[0, "&dbkarow;"],
		[0, "&drbkarow;"],
		[0, "&DDotrahd;"],
		[0, "&UpArrowBar;"],
		[0, "&DownArrowBar;"],
		[2, "&Rarrtl;"],
		[2, "&latail;"],
		[0, "&ratail;"],
		[0, "&lAtail;"],
		[0, "&rAtail;"],
		[0, "&larrfs;"],
		[0, "&rarrfs;"],
		[0, "&larrbfs;"],
		[0, "&rarrbfs;"],
		[2, "&nwarhk;"],
		[0, "&nearhk;"],
		[0, "&hksearow;"],
		[0, "&hkswarow;"],
		[0, "&nwnear;"],
		[0, "&nesear;"],
		[0, "&seswar;"],
		[0, "&swnwar;"],
		[8, {
			v: "&rarrc;",
			n: 824,
			o: "&nrarrc;"
		}],
		[1, "&cudarrr;"],
		[0, "&ldca;"],
		[0, "&rdca;"],
		[0, "&cudarrl;"],
		[0, "&larrpl;"],
		[2, "&curarrm;"],
		[0, "&cularrp;"],
		[7, "&rarrpl;"],
		[2, "&harrcir;"],
		[0, "&Uarrocir;"],
		[0, "&lurdshar;"],
		[0, "&ldrushar;"],
		[2, "&LeftRightVector;"],
		[0, "&RightUpDownVector;"],
		[0, "&DownLeftRightVector;"],
		[0, "&LeftUpDownVector;"],
		[0, "&LeftVectorBar;"],
		[0, "&RightVectorBar;"],
		[0, "&RightUpVectorBar;"],
		[0, "&RightDownVectorBar;"],
		[0, "&DownLeftVectorBar;"],
		[0, "&DownRightVectorBar;"],
		[0, "&LeftUpVectorBar;"],
		[0, "&LeftDownVectorBar;"],
		[0, "&LeftTeeVector;"],
		[0, "&RightTeeVector;"],
		[0, "&RightUpTeeVector;"],
		[0, "&RightDownTeeVector;"],
		[0, "&DownLeftTeeVector;"],
		[0, "&DownRightTeeVector;"],
		[0, "&LeftUpTeeVector;"],
		[0, "&LeftDownTeeVector;"],
		[0, "&lHar;"],
		[0, "&uHar;"],
		[0, "&rHar;"],
		[0, "&dHar;"],
		[0, "&luruhar;"],
		[0, "&ldrdhar;"],
		[0, "&ruluhar;"],
		[0, "&rdldhar;"],
		[0, "&lharul;"],
		[0, "&llhard;"],
		[0, "&rharul;"],
		[0, "&lrhard;"],
		[0, "&udhar;"],
		[0, "&duhar;"],
		[0, "&RoundImplies;"],
		[0, "&erarr;"],
		[0, "&simrarr;"],
		[0, "&larrsim;"],
		[0, "&rarrsim;"],
		[0, "&rarrap;"],
		[0, "&ltlarr;"],
		[1, "&gtrarr;"],
		[0, "&subrarr;"],
		[1, "&suplarr;"],
		[0, "&lfisht;"],
		[0, "&rfisht;"],
		[0, "&ufisht;"],
		[0, "&dfisht;"],
		[5, "&lopar;"],
		[0, "&ropar;"],
		[4, "&lbrke;"],
		[0, "&rbrke;"],
		[0, "&lbrkslu;"],
		[0, "&rbrksld;"],
		[0, "&lbrksld;"],
		[0, "&rbrkslu;"],
		[0, "&langd;"],
		[0, "&rangd;"],
		[0, "&lparlt;"],
		[0, "&rpargt;"],
		[0, "&gtlPar;"],
		[0, "&ltrPar;"],
		[3, "&vzigzag;"],
		[1, "&vangrt;"],
		[0, "&angrtvbd;"],
		[6, "&ange;"],
		[0, "&range;"],
		[0, "&dwangle;"],
		[0, "&uwangle;"],
		[0, "&angmsdaa;"],
		[0, "&angmsdab;"],
		[0, "&angmsdac;"],
		[0, "&angmsdad;"],
		[0, "&angmsdae;"],
		[0, "&angmsdaf;"],
		[0, "&angmsdag;"],
		[0, "&angmsdah;"],
		[0, "&bemptyv;"],
		[0, "&demptyv;"],
		[0, "&cemptyv;"],
		[0, "&raemptyv;"],
		[0, "&laemptyv;"],
		[0, "&ohbar;"],
		[0, "&omid;"],
		[0, "&opar;"],
		[1, "&operp;"],
		[1, "&olcross;"],
		[0, "&odsold;"],
		[1, "&olcir;"],
		[0, "&ofcir;"],
		[0, "&olt;"],
		[0, "&ogt;"],
		[0, "&cirscir;"],
		[0, "&cirE;"],
		[0, "&solb;"],
		[0, "&bsolb;"],
		[3, "&boxbox;"],
		[3, "&trisb;"],
		[0, "&rtriltri;"],
		[0, {
			v: "&LeftTriangleBar;",
			n: 824,
			o: "&NotLeftTriangleBar;"
		}],
		[0, {
			v: "&RightTriangleBar;",
			n: 824,
			o: "&NotRightTriangleBar;"
		}],
		[11, "&iinfin;"],
		[0, "&infintie;"],
		[0, "&nvinfin;"],
		[4, "&eparsl;"],
		[0, "&smeparsl;"],
		[0, "&eqvparsl;"],
		[5, "&blacklozenge;"],
		[8, "&RuleDelayed;"],
		[1, "&dsol;"],
		[9, "&bigodot;"],
		[0, "&bigoplus;"],
		[0, "&bigotimes;"],
		[1, "&biguplus;"],
		[1, "&bigsqcup;"],
		[5, "&iiiint;"],
		[0, "&fpartint;"],
		[2, "&cirfnint;"],
		[0, "&awint;"],
		[0, "&rppolint;"],
		[0, "&scpolint;"],
		[0, "&npolint;"],
		[0, "&pointint;"],
		[0, "&quatint;"],
		[0, "&intlarhk;"],
		[10, "&pluscir;"],
		[0, "&plusacir;"],
		[0, "&simplus;"],
		[0, "&plusdu;"],
		[0, "&plussim;"],
		[0, "&plustwo;"],
		[1, "&mcomma;"],
		[0, "&minusdu;"],
		[2, "&loplus;"],
		[0, "&roplus;"],
		[0, "&Cross;"],
		[0, "&timesd;"],
		[0, "&timesbar;"],
		[1, "&smashp;"],
		[0, "&lotimes;"],
		[0, "&rotimes;"],
		[0, "&otimesas;"],
		[0, "&Otimes;"],
		[0, "&odiv;"],
		[0, "&triplus;"],
		[0, "&triminus;"],
		[0, "&tritime;"],
		[0, "&intprod;"],
		[2, "&amalg;"],
		[0, "&capdot;"],
		[1, "&ncup;"],
		[0, "&ncap;"],
		[0, "&capand;"],
		[0, "&cupor;"],
		[0, "&cupcap;"],
		[0, "&capcup;"],
		[0, "&cupbrcap;"],
		[0, "&capbrcup;"],
		[0, "&cupcup;"],
		[0, "&capcap;"],
		[0, "&ccups;"],
		[0, "&ccaps;"],
		[2, "&ccupssm;"],
		[2, "&And;"],
		[0, "&Or;"],
		[0, "&andand;"],
		[0, "&oror;"],
		[0, "&orslope;"],
		[0, "&andslope;"],
		[1, "&andv;"],
		[0, "&orv;"],
		[0, "&andd;"],
		[0, "&ord;"],
		[1, "&wedbar;"],
		[6, "&sdote;"],
		[3, "&simdot;"],
		[2, {
			v: "&congdot;",
			n: 824,
			o: "&ncongdot;"
		}],
		[0, "&easter;"],
		[0, "&apacir;"],
		[0, {
			v: "&apE;",
			n: 824,
			o: "&napE;"
		}],
		[0, "&eplus;"],
		[0, "&pluse;"],
		[0, "&Esim;"],
		[0, "&Colone;"],
		[0, "&Equal;"],
		[1, "&ddotseq;"],
		[0, "&equivDD;"],
		[0, "&ltcir;"],
		[0, "&gtcir;"],
		[0, "&ltquest;"],
		[0, "&gtquest;"],
		[0, {
			v: "&leqslant;",
			n: 824,
			o: "&nleqslant;"
		}],
		[0, {
			v: "&geqslant;",
			n: 824,
			o: "&ngeqslant;"
		}],
		[0, "&lesdot;"],
		[0, "&gesdot;"],
		[0, "&lesdoto;"],
		[0, "&gesdoto;"],
		[0, "&lesdotor;"],
		[0, "&gesdotol;"],
		[0, "&lap;"],
		[0, "&gap;"],
		[0, "&lne;"],
		[0, "&gne;"],
		[0, "&lnap;"],
		[0, "&gnap;"],
		[0, "&lEg;"],
		[0, "&gEl;"],
		[0, "&lsime;"],
		[0, "&gsime;"],
		[0, "&lsimg;"],
		[0, "&gsiml;"],
		[0, "&lgE;"],
		[0, "&glE;"],
		[0, "&lesges;"],
		[0, "&gesles;"],
		[0, "&els;"],
		[0, "&egs;"],
		[0, "&elsdot;"],
		[0, "&egsdot;"],
		[0, "&el;"],
		[0, "&eg;"],
		[2, "&siml;"],
		[0, "&simg;"],
		[0, "&simlE;"],
		[0, "&simgE;"],
		[0, {
			v: "&LessLess;",
			n: 824,
			o: "&NotNestedLessLess;"
		}],
		[0, {
			v: "&GreaterGreater;",
			n: 824,
			o: "&NotNestedGreaterGreater;"
		}],
		[1, "&glj;"],
		[0, "&gla;"],
		[0, "&ltcc;"],
		[0, "&gtcc;"],
		[0, "&lescc;"],
		[0, "&gescc;"],
		[0, "&smt;"],
		[0, "&lat;"],
		[0, {
			v: "&smte;",
			n: 65024,
			o: "&smtes;"
		}],
		[0, {
			v: "&late;",
			n: 65024,
			o: "&lates;"
		}],
		[0, "&bumpE;"],
		[0, {
			v: "&PrecedesEqual;",
			n: 824,
			o: "&NotPrecedesEqual;"
		}],
		[0, {
			v: "&sce;",
			n: 824,
			o: "&NotSucceedsEqual;"
		}],
		[2, "&prE;"],
		[0, "&scE;"],
		[0, "&precneqq;"],
		[0, "&scnE;"],
		[0, "&prap;"],
		[0, "&scap;"],
		[0, "&precnapprox;"],
		[0, "&scnap;"],
		[0, "&Pr;"],
		[0, "&Sc;"],
		[0, "&subdot;"],
		[0, "&supdot;"],
		[0, "&subplus;"],
		[0, "&supplus;"],
		[0, "&submult;"],
		[0, "&supmult;"],
		[0, "&subedot;"],
		[0, "&supedot;"],
		[0, {
			v: "&subE;",
			n: 824,
			o: "&nsubE;"
		}],
		[0, {
			v: "&supE;",
			n: 824,
			o: "&nsupE;"
		}],
		[0, "&subsim;"],
		[0, "&supsim;"],
		[2, {
			v: "&subnE;",
			n: 65024,
			o: "&varsubsetneqq;"
		}],
		[0, {
			v: "&supnE;",
			n: 65024,
			o: "&varsupsetneqq;"
		}],
		[2, "&csub;"],
		[0, "&csup;"],
		[0, "&csube;"],
		[0, "&csupe;"],
		[0, "&subsup;"],
		[0, "&supsub;"],
		[0, "&subsub;"],
		[0, "&supsup;"],
		[0, "&suphsub;"],
		[0, "&supdsub;"],
		[0, "&forkv;"],
		[0, "&topfork;"],
		[0, "&mlcp;"],
		[8, "&Dashv;"],
		[1, "&Vdashl;"],
		[0, "&Barv;"],
		[0, "&vBar;"],
		[0, "&vBarv;"],
		[1, "&Vbar;"],
		[0, "&Not;"],
		[0, "&bNot;"],
		[0, "&rnmid;"],
		[0, "&cirmid;"],
		[0, "&midcir;"],
		[0, "&topcir;"],
		[0, "&nhpar;"],
		[0, "&parsim;"],
		[9, {
			v: "&parsl;",
			n: 8421,
			o: "&nparsl;"
		}],
		[44343, { n: new Map(/* @__PURE__ */ restoreDiff([
			[56476, "&Ascr;"],
			[1, "&Cscr;"],
			[0, "&Dscr;"],
			[2, "&Gscr;"],
			[2, "&Jscr;"],
			[0, "&Kscr;"],
			[2, "&Nscr;"],
			[0, "&Oscr;"],
			[0, "&Pscr;"],
			[0, "&Qscr;"],
			[1, "&Sscr;"],
			[0, "&Tscr;"],
			[0, "&Uscr;"],
			[0, "&Vscr;"],
			[0, "&Wscr;"],
			[0, "&Xscr;"],
			[0, "&Yscr;"],
			[0, "&Zscr;"],
			[0, "&ascr;"],
			[0, "&bscr;"],
			[0, "&cscr;"],
			[0, "&dscr;"],
			[1, "&fscr;"],
			[1, "&hscr;"],
			[0, "&iscr;"],
			[0, "&jscr;"],
			[0, "&kscr;"],
			[0, "&lscr;"],
			[0, "&mscr;"],
			[0, "&nscr;"],
			[1, "&pscr;"],
			[0, "&qscr;"],
			[0, "&rscr;"],
			[0, "&sscr;"],
			[0, "&tscr;"],
			[0, "&uscr;"],
			[0, "&vscr;"],
			[0, "&wscr;"],
			[0, "&xscr;"],
			[0, "&yscr;"],
			[0, "&zscr;"],
			[52, "&Afr;"],
			[0, "&Bfr;"],
			[1, "&Dfr;"],
			[0, "&Efr;"],
			[0, "&Ffr;"],
			[0, "&Gfr;"],
			[2, "&Jfr;"],
			[0, "&Kfr;"],
			[0, "&Lfr;"],
			[0, "&Mfr;"],
			[0, "&Nfr;"],
			[0, "&Ofr;"],
			[0, "&Pfr;"],
			[0, "&Qfr;"],
			[1, "&Sfr;"],
			[0, "&Tfr;"],
			[0, "&Ufr;"],
			[0, "&Vfr;"],
			[0, "&Wfr;"],
			[0, "&Xfr;"],
			[0, "&Yfr;"],
			[1, "&afr;"],
			[0, "&bfr;"],
			[0, "&cfr;"],
			[0, "&dfr;"],
			[0, "&efr;"],
			[0, "&ffr;"],
			[0, "&gfr;"],
			[0, "&hfr;"],
			[0, "&ifr;"],
			[0, "&jfr;"],
			[0, "&kfr;"],
			[0, "&lfr;"],
			[0, "&mfr;"],
			[0, "&nfr;"],
			[0, "&ofr;"],
			[0, "&pfr;"],
			[0, "&qfr;"],
			[0, "&rfr;"],
			[0, "&sfr;"],
			[0, "&tfr;"],
			[0, "&ufr;"],
			[0, "&vfr;"],
			[0, "&wfr;"],
			[0, "&xfr;"],
			[0, "&yfr;"],
			[0, "&zfr;"],
			[0, "&Aopf;"],
			[0, "&Bopf;"],
			[1, "&Dopf;"],
			[0, "&Eopf;"],
			[0, "&Fopf;"],
			[0, "&Gopf;"],
			[1, "&Iopf;"],
			[0, "&Jopf;"],
			[0, "&Kopf;"],
			[0, "&Lopf;"],
			[0, "&Mopf;"],
			[1, "&Oopf;"],
			[3, "&Sopf;"],
			[0, "&Topf;"],
			[0, "&Uopf;"],
			[0, "&Vopf;"],
			[0, "&Wopf;"],
			[0, "&Xopf;"],
			[0, "&Yopf;"],
			[1, "&aopf;"],
			[0, "&bopf;"],
			[0, "&copf;"],
			[0, "&dopf;"],
			[0, "&eopf;"],
			[0, "&fopf;"],
			[0, "&gopf;"],
			[0, "&hopf;"],
			[0, "&iopf;"],
			[0, "&jopf;"],
			[0, "&kopf;"],
			[0, "&lopf;"],
			[0, "&mopf;"],
			[0, "&nopf;"],
			[0, "&oopf;"],
			[0, "&popf;"],
			[0, "&qopf;"],
			[0, "&ropf;"],
			[0, "&sopf;"],
			[0, "&topf;"],
			[0, "&uopf;"],
			[0, "&vopf;"],
			[0, "&wopf;"],
			[0, "&xopf;"],
			[0, "&yopf;"],
			[0, "&zopf;"]
		])) }],
		[8906, "&fflig;"],
		[0, "&filig;"],
		[0, "&fllig;"],
		[0, "&ffilig;"],
		[0, "&ffllig;"]
	]));
}));
var require_escape = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
	exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
	var xmlCodeMap = new Map([
		[34, "&quot;"],
		[38, "&amp;"],
		[39, "&apos;"],
		[60, "&lt;"],
		[62, "&gt;"]
	]);
	exports.getCodePoint = String.prototype.codePointAt != null ? function(str, index) {
		return str.codePointAt(index);
	} : function(c, index) {
		return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
	};
	function encodeXML(str) {
		var ret = "";
		var lastIdx = 0;
		var match;
		while ((match = exports.xmlReplacer.exec(str)) !== null) {
			var i = match.index;
			var char = str.charCodeAt(i);
			var next = xmlCodeMap.get(char);
			if (next !== void 0) {
				ret += str.substring(lastIdx, i) + next;
				lastIdx = i + 1;
			} else {
				ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
				lastIdx = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
			}
		}
		return ret + str.substr(lastIdx);
	}
	exports.encodeXML = encodeXML;
	exports.escape = encodeXML;
	function getEscaper(regex, map) {
		return function escape$1(data) {
			var match;
			var lastIdx = 0;
			var result = "";
			while (match = regex.exec(data)) {
				if (lastIdx !== match.index) result += data.substring(lastIdx, match.index);
				result += map.get(match[0].charCodeAt(0));
				lastIdx = match.index + 1;
			}
			return result + data.substring(lastIdx);
		};
	}
	exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
	exports.escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
		[34, "&quot;"],
		[38, "&amp;"],
		[160, "&nbsp;"]
	]));
	exports.escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
		[38, "&amp;"],
		[60, "&lt;"],
		[62, "&gt;"],
		[160, "&nbsp;"]
	]));
}));
var require_encode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault$2 = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var encode_html_js_1 = __importDefault$2(require_encode_html());
	var escape_js_1$1 = require_escape();
	var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
	function encodeHTML(data) {
		return encodeHTMLTrieRe(htmlReplacer, data);
	}
	exports.encodeHTML = encodeHTML;
	function encodeNonAsciiHTML(data) {
		return encodeHTMLTrieRe(escape_js_1$1.xmlReplacer, data);
	}
	exports.encodeNonAsciiHTML = encodeNonAsciiHTML;
	function encodeHTMLTrieRe(regExp, str) {
		var ret = "";
		var lastIdx = 0;
		var match;
		while ((match = regExp.exec(str)) !== null) {
			var i = match.index;
			ret += str.substring(lastIdx, i);
			var char = str.charCodeAt(i);
			var next = encode_html_js_1.default.get(char);
			if (typeof next === "object") {
				if (i + 1 < str.length) {
					var nextChar = str.charCodeAt(i + 1);
					var value = typeof next.n === "number" ? next.n === nextChar ? next.o : void 0 : next.n.get(nextChar);
					if (value !== void 0) {
						ret += value;
						lastIdx = regExp.lastIndex += 1;
						continue;
					}
				}
				next = next.v;
			}
			if (next !== void 0) {
				ret += next;
				lastIdx = i + 1;
			} else {
				var cp = (0, escape_js_1$1.getCodePoint)(str, i);
				ret += "&#x".concat(cp.toString(16), ";");
				lastIdx = regExp.lastIndex += Number(cp !== char);
			}
		}
		return ret + str.substr(lastIdx);
	}
}));
var require_lib$4 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLAttribute = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.DecodingMode = exports.EntityDecoder = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.EntityLevel = void 0;
	var decode_js_1 = require_decode();
	var encode_js_1 = require_encode();
	var escape_js_1 = require_escape();
	var EntityLevel;
	(function(EntityLevel$1) {
		EntityLevel$1[EntityLevel$1["XML"] = 0] = "XML";
		EntityLevel$1[EntityLevel$1["HTML"] = 1] = "HTML";
	})(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
	var EncodingMode;
	(function(EncodingMode$1) {
		EncodingMode$1[EncodingMode$1["UTF8"] = 0] = "UTF8";
		EncodingMode$1[EncodingMode$1["ASCII"] = 1] = "ASCII";
		EncodingMode$1[EncodingMode$1["Extensive"] = 2] = "Extensive";
		EncodingMode$1[EncodingMode$1["Attribute"] = 3] = "Attribute";
		EncodingMode$1[EncodingMode$1["Text"] = 4] = "Text";
	})(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
	function decode$1(data, options) {
		if (options === void 0) options = EntityLevel.XML;
		if ((typeof options === "number" ? options : options.level) === EntityLevel.HTML) {
			var mode = typeof options === "object" ? options.mode : void 0;
			return (0, decode_js_1.decodeHTML)(data, mode);
		}
		return (0, decode_js_1.decodeXML)(data);
	}
	exports.decode = decode$1;
	function decodeStrict(data, options) {
		var _a$1;
		if (options === void 0) options = EntityLevel.XML;
		var opts = typeof options === "number" ? { level: options } : options;
		(_a$1 = opts.mode) !== null && _a$1 !== void 0 || (opts.mode = decode_js_1.DecodingMode.Strict);
		return decode$1(data, opts);
	}
	exports.decodeStrict = decodeStrict;
	function encode$1(data, options) {
		if (options === void 0) options = EntityLevel.XML;
		var opts = typeof options === "number" ? { level: options } : options;
		if (opts.mode === EncodingMode.UTF8) return (0, escape_js_1.escapeUTF8)(data);
		if (opts.mode === EncodingMode.Attribute) return (0, escape_js_1.escapeAttribute)(data);
		if (opts.mode === EncodingMode.Text) return (0, escape_js_1.escapeText)(data);
		if (opts.level === EntityLevel.HTML) {
			if (opts.mode === EncodingMode.ASCII) return (0, encode_js_1.encodeNonAsciiHTML)(data);
			return (0, encode_js_1.encodeHTML)(data);
		}
		return (0, escape_js_1.encodeXML)(data);
	}
	exports.encode = encode$1;
	var escape_js_2 = require_escape();
	Object.defineProperty(exports, "encodeXML", {
		enumerable: true,
		get: function() {
			return escape_js_2.encodeXML;
		}
	});
	Object.defineProperty(exports, "escape", {
		enumerable: true,
		get: function() {
			return escape_js_2.escape;
		}
	});
	Object.defineProperty(exports, "escapeUTF8", {
		enumerable: true,
		get: function() {
			return escape_js_2.escapeUTF8;
		}
	});
	Object.defineProperty(exports, "escapeAttribute", {
		enumerable: true,
		get: function() {
			return escape_js_2.escapeAttribute;
		}
	});
	Object.defineProperty(exports, "escapeText", {
		enumerable: true,
		get: function() {
			return escape_js_2.escapeText;
		}
	});
	var encode_js_2 = require_encode();
	Object.defineProperty(exports, "encodeHTML", {
		enumerable: true,
		get: function() {
			return encode_js_2.encodeHTML;
		}
	});
	Object.defineProperty(exports, "encodeNonAsciiHTML", {
		enumerable: true,
		get: function() {
			return encode_js_2.encodeNonAsciiHTML;
		}
	});
	Object.defineProperty(exports, "encodeHTML4", {
		enumerable: true,
		get: function() {
			return encode_js_2.encodeHTML;
		}
	});
	Object.defineProperty(exports, "encodeHTML5", {
		enumerable: true,
		get: function() {
			return encode_js_2.encodeHTML;
		}
	});
	var decode_js_2 = require_decode();
	Object.defineProperty(exports, "EntityDecoder", {
		enumerable: true,
		get: function() {
			return decode_js_2.EntityDecoder;
		}
	});
	Object.defineProperty(exports, "DecodingMode", {
		enumerable: true,
		get: function() {
			return decode_js_2.DecodingMode;
		}
	});
	Object.defineProperty(exports, "decodeXML", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeXML;
		}
	});
	Object.defineProperty(exports, "decodeHTML", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTML;
		}
	});
	Object.defineProperty(exports, "decodeHTMLStrict", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTMLStrict;
		}
	});
	Object.defineProperty(exports, "decodeHTMLAttribute", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTMLAttribute;
		}
	});
	Object.defineProperty(exports, "decodeHTML4", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTML;
		}
	});
	Object.defineProperty(exports, "decodeHTML5", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTML;
		}
	});
	Object.defineProperty(exports, "decodeHTML4Strict", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTMLStrict;
		}
	});
	Object.defineProperty(exports, "decodeHTML5Strict", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeHTMLStrict;
		}
	});
	Object.defineProperty(exports, "decodeXMLStrict", {
		enumerable: true,
		get: function() {
			return decode_js_2.decodeXML;
		}
	});
}));
var require_foreignNames = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.elementNames = new Map([
		"altGlyph",
		"altGlyphDef",
		"altGlyphItem",
		"animateColor",
		"animateMotion",
		"animateTransform",
		"clipPath",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feDistantLight",
		"feDropShadow",
		"feFlood",
		"feFuncA",
		"feFuncB",
		"feFuncG",
		"feFuncR",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMergeNode",
		"feMorphology",
		"feOffset",
		"fePointLight",
		"feSpecularLighting",
		"feSpotLight",
		"feTile",
		"feTurbulence",
		"foreignObject",
		"glyphRef",
		"linearGradient",
		"radialGradient",
		"textPath"
	].map(function(val) {
		return [val.toLowerCase(), val];
	}));
	exports.attributeNames = new Map([
		"definitionURL",
		"attributeName",
		"attributeType",
		"baseFrequency",
		"baseProfile",
		"calcMode",
		"clipPathUnits",
		"diffuseConstant",
		"edgeMode",
		"filterUnits",
		"glyphRef",
		"gradientTransform",
		"gradientUnits",
		"kernelMatrix",
		"kernelUnitLength",
		"keyPoints",
		"keySplines",
		"keyTimes",
		"lengthAdjust",
		"limitingConeAngle",
		"markerHeight",
		"markerUnits",
		"markerWidth",
		"maskContentUnits",
		"maskUnits",
		"numOctaves",
		"pathLength",
		"patternContentUnits",
		"patternTransform",
		"patternUnits",
		"pointsAtX",
		"pointsAtY",
		"pointsAtZ",
		"preserveAlpha",
		"preserveAspectRatio",
		"primitiveUnits",
		"refX",
		"refY",
		"repeatCount",
		"repeatDur",
		"requiredExtensions",
		"requiredFeatures",
		"specularConstant",
		"specularExponent",
		"spreadMethod",
		"startOffset",
		"stdDeviation",
		"stitchTiles",
		"surfaceScale",
		"systemLanguage",
		"tableValues",
		"targetX",
		"targetY",
		"textLength",
		"viewBox",
		"viewTarget",
		"xChannelSelector",
		"yChannelSelector",
		"zoomAndPan"
	].map(function(val) {
		return [val.toLowerCase(), val];
	}));
}));
var require_lib$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __assign = exports && exports.__assign || function() {
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	var __createBinding$2 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault$1 = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar$1 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
		}
		__setModuleDefault$1(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var ElementType = __importStar$1(require_lib$6());
	var entities_1 = require_lib$4();
	var foreignNames_js_1 = require_foreignNames();
	var unencodedElements = new Set([
		"style",
		"script",
		"xmp",
		"iframe",
		"noembed",
		"noframes",
		"plaintext",
		"noscript"
	]);
	function replaceQuotes(value) {
		return value.replace(/"/g, "&quot;");
	}
	function formatAttributes(attributes, opts) {
		var _a$1;
		if (!attributes) return;
		var encode$2 = ((_a$1 = opts.encodeEntities) !== null && _a$1 !== void 0 ? _a$1 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? entities_1.encodeXML : entities_1.escapeAttribute;
		return Object.keys(attributes).map(function(key) {
			var _a$2, _b;
			var value = (_a$2 = attributes[key]) !== null && _a$2 !== void 0 ? _a$2 : "";
			if (opts.xmlMode === "foreign") key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
			if (!opts.emptyAttrs && !opts.xmlMode && value === "") return key;
			return "".concat(key, "=\"").concat(encode$2(value), "\"");
		}).join(" ");
	}
	var singleTag = new Set([
		"area",
		"base",
		"basefont",
		"br",
		"col",
		"command",
		"embed",
		"frame",
		"hr",
		"img",
		"input",
		"isindex",
		"keygen",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]);
	function render(node, options) {
		if (options === void 0) options = {};
		var nodes = "length" in node ? node : [node];
		var output = "";
		for (var i = 0; i < nodes.length; i++) output += renderNode(nodes[i], options);
		return output;
	}
	exports.render = render;
	exports.default = render;
	function renderNode(node, options) {
		switch (node.type) {
			case ElementType.Root: return render(node.children, options);
			case ElementType.Doctype:
			case ElementType.Directive: return renderDirective(node);
			case ElementType.Comment: return renderComment(node);
			case ElementType.CDATA: return renderCdata(node);
			case ElementType.Script:
			case ElementType.Style:
			case ElementType.Tag: return renderTag(node, options);
			case ElementType.Text: return renderText(node, options);
		}
	}
	var foreignModeIntegrationPoints = new Set([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext",
		"annotation-xml",
		"foreignObject",
		"desc",
		"title"
	]);
	var foreignElements = new Set(["svg", "math"]);
	function renderTag(elem, opts) {
		var _a$1;
		if (opts.xmlMode === "foreign") {
			elem.name = (_a$1 = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a$1 !== void 0 ? _a$1 : elem.name;
			if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) opts = __assign(__assign({}, opts), { xmlMode: false });
		}
		if (!opts.xmlMode && foreignElements.has(elem.name)) opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
		var tag = "<".concat(elem.name);
		var attribs = formatAttributes(elem.attribs, opts);
		if (attribs) tag += " ".concat(attribs);
		if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
			if (!opts.xmlMode) tag += " ";
			tag += "/>";
		} else {
			tag += ">";
			if (elem.children.length > 0) tag += render(elem.children, opts);
			if (opts.xmlMode || !singleTag.has(elem.name)) tag += "</".concat(elem.name, ">");
		}
		return tag;
	}
	function renderDirective(elem) {
		return "<".concat(elem.data, ">");
	}
	function renderText(elem, opts) {
		var _a$1;
		var data = elem.data || "";
		if (((_a$1 = opts.encodeEntities) !== null && _a$1 !== void 0 ? _a$1 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, entities_1.encodeXML)(data) : (0, entities_1.escapeText)(data);
		return data;
	}
	function renderCdata(elem) {
		return "<![CDATA[".concat(elem.children[0].data, "]]>");
	}
	function renderComment(elem) {
		return "<!--".concat(elem.data, "-->");
	}
}));
var require_stringify$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault$1 = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var domhandler_1$6 = require_lib$5();
	var dom_serializer_1 = __importDefault$1(require_lib$3());
	var domelementtype_1 = require_lib$6();
	function getOuterHTML(node, options) {
		return (0, dom_serializer_1.default)(node, options);
	}
	exports.getOuterHTML = getOuterHTML;
	function getInnerHTML(node, options) {
		return (0, domhandler_1$6.hasChildren)(node) ? node.children.map(function(node$1) {
			return getOuterHTML(node$1, options);
		}).join("") : "";
	}
	exports.getInnerHTML = getInnerHTML;
	function getText(node) {
		if (Array.isArray(node)) return node.map(getText).join("");
		if ((0, domhandler_1$6.isTag)(node)) return node.name === "br" ? "\n" : getText(node.children);
		if ((0, domhandler_1$6.isCDATA)(node)) return getText(node.children);
		if ((0, domhandler_1$6.isText)(node)) return node.data;
		return "";
	}
	exports.getText = getText;
	function textContent(node) {
		if (Array.isArray(node)) return node.map(textContent).join("");
		if ((0, domhandler_1$6.hasChildren)(node) && !(0, domhandler_1$6.isComment)(node)) return textContent(node.children);
		if ((0, domhandler_1$6.isText)(node)) return node.data;
		return "";
	}
	exports.textContent = textContent;
	function innerText(node) {
		if (Array.isArray(node)) return node.map(innerText).join("");
		if ((0, domhandler_1$6.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$6.isCDATA)(node))) return innerText(node.children);
		if ((0, domhandler_1$6.isText)(node)) return node.data;
		return "";
	}
	exports.innerText = innerText;
}));
var require_traversal = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var domhandler_1$5 = require_lib$5();
	function getChildren(elem) {
		return (0, domhandler_1$5.hasChildren)(elem) ? elem.children : [];
	}
	exports.getChildren = getChildren;
	function getParent(elem) {
		return elem.parent || null;
	}
	exports.getParent = getParent;
	function getSiblings(elem) {
		var _a$1, _b;
		var parent = getParent(elem);
		if (parent != null) return getChildren(parent);
		var siblings = [elem];
		var prev = elem.prev, next = elem.next;
		while (prev != null) {
			siblings.unshift(prev);
			_a$1 = prev, prev = _a$1.prev;
		}
		while (next != null) {
			siblings.push(next);
			_b = next, next = _b.next;
		}
		return siblings;
	}
	exports.getSiblings = getSiblings;
	function getAttributeValue(elem, name) {
		var _a$1;
		return (_a$1 = elem.attribs) === null || _a$1 === void 0 ? void 0 : _a$1[name];
	}
	exports.getAttributeValue = getAttributeValue;
	function hasAttrib(elem, name) {
		return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
	}
	exports.hasAttrib = hasAttrib;
	function getName(elem) {
		return elem.name;
	}
	exports.getName = getName;
	function nextElementSibling(elem) {
		var _a$1;
		var next = elem.next;
		while (next !== null && !(0, domhandler_1$5.isTag)(next)) _a$1 = next, next = _a$1.next;
		return next;
	}
	exports.nextElementSibling = nextElementSibling;
	function prevElementSibling(elem) {
		var _a$1;
		var prev = elem.prev;
		while (prev !== null && !(0, domhandler_1$5.isTag)(prev)) _a$1 = prev, prev = _a$1.prev;
		return prev;
	}
	exports.prevElementSibling = prevElementSibling;
}));
var require_manipulation = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	function removeElement(elem) {
		if (elem.prev) elem.prev.next = elem.next;
		if (elem.next) elem.next.prev = elem.prev;
		if (elem.parent) {
			var childs = elem.parent.children;
			var childsIndex = childs.lastIndexOf(elem);
			if (childsIndex >= 0) childs.splice(childsIndex, 1);
		}
		elem.next = null;
		elem.prev = null;
		elem.parent = null;
	}
	exports.removeElement = removeElement;
	function replaceElement(elem, replacement) {
		var prev = replacement.prev = elem.prev;
		if (prev) prev.next = replacement;
		var next = replacement.next = elem.next;
		if (next) next.prev = replacement;
		var parent = replacement.parent = elem.parent;
		if (parent) {
			var childs = parent.children;
			childs[childs.lastIndexOf(elem)] = replacement;
			elem.parent = null;
		}
	}
	exports.replaceElement = replaceElement;
	function appendChild(parent, child) {
		removeElement(child);
		child.next = null;
		child.parent = parent;
		if (parent.children.push(child) > 1) {
			var sibling = parent.children[parent.children.length - 2];
			sibling.next = child;
			child.prev = sibling;
		} else child.prev = null;
	}
	exports.appendChild = appendChild;
	function append(elem, next) {
		removeElement(next);
		var parent = elem.parent;
		var currNext = elem.next;
		next.next = currNext;
		next.prev = elem;
		elem.next = next;
		next.parent = parent;
		if (currNext) {
			currNext.prev = next;
			if (parent) {
				var childs = parent.children;
				childs.splice(childs.lastIndexOf(currNext), 0, next);
			}
		} else if (parent) parent.children.push(next);
	}
	exports.append = append;
	function prependChild(parent, child) {
		removeElement(child);
		child.parent = parent;
		child.prev = null;
		if (parent.children.unshift(child) !== 1) {
			var sibling = parent.children[1];
			sibling.prev = child;
			child.next = sibling;
		} else child.next = null;
	}
	exports.prependChild = prependChild;
	function prepend(elem, prev) {
		removeElement(prev);
		var parent = elem.parent;
		if (parent) {
			var childs = parent.children;
			childs.splice(childs.indexOf(elem), 0, prev);
		}
		if (elem.prev) elem.prev.next = prev;
		prev.parent = parent;
		prev.prev = elem.prev;
		prev.next = elem;
		elem.prev = prev;
	}
	exports.prepend = prepend;
}));
var require_querying = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var domhandler_1$4 = require_lib$5();
	function filter$2(test, node, recurse, limit) {
		if (recurse === void 0) recurse = true;
		if (limit === void 0) limit = Infinity;
		return find(test, Array.isArray(node) ? node : [node], recurse, limit);
	}
	exports.filter = filter$2;
	function find(test, nodes, recurse, limit) {
		var result = [];
		var nodeStack = [nodes];
		var indexStack = [0];
		for (;;) {
			if (indexStack[0] >= nodeStack[0].length) {
				if (indexStack.length === 1) return result;
				nodeStack.shift();
				indexStack.shift();
				continue;
			}
			var elem = nodeStack[0][indexStack[0]++];
			if (test(elem)) {
				result.push(elem);
				if (--limit <= 0) return result;
			}
			if (recurse && (0, domhandler_1$4.hasChildren)(elem) && elem.children.length > 0) {
				indexStack.unshift(0);
				nodeStack.unshift(elem.children);
			}
		}
	}
	exports.find = find;
	function findOneChild(test, nodes) {
		return nodes.find(test);
	}
	exports.findOneChild = findOneChild;
	function findOne(test, nodes, recurse) {
		if (recurse === void 0) recurse = true;
		var elem = null;
		for (var i = 0; i < nodes.length && !elem; i++) {
			var node = nodes[i];
			if (!(0, domhandler_1$4.isTag)(node)) continue;
			else if (test(node)) elem = node;
			else if (recurse && node.children.length > 0) elem = findOne(test, node.children, true);
		}
		return elem;
	}
	exports.findOne = findOne;
	function existsOne(test, nodes) {
		return nodes.some(function(checked) {
			return (0, domhandler_1$4.isTag)(checked) && (test(checked) || existsOne(test, checked.children));
		});
	}
	exports.existsOne = existsOne;
	function findAll(test, nodes) {
		var result = [];
		var nodeStack = [nodes];
		var indexStack = [0];
		for (;;) {
			if (indexStack[0] >= nodeStack[0].length) {
				if (nodeStack.length === 1) return result;
				nodeStack.shift();
				indexStack.shift();
				continue;
			}
			var elem = nodeStack[0][indexStack[0]++];
			if (!(0, domhandler_1$4.isTag)(elem)) continue;
			if (test(elem)) result.push(elem);
			if (elem.children.length > 0) {
				indexStack.unshift(0);
				nodeStack.unshift(elem.children);
			}
		}
	}
	exports.findAll = findAll;
}));
var require_legacy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var domhandler_1$3 = require_lib$5();
	var querying_js_1 = require_querying();
	var Checks = {
		tag_name: function(name) {
			if (typeof name === "function") return function(elem) {
				return (0, domhandler_1$3.isTag)(elem) && name(elem.name);
			};
			else if (name === "*") return domhandler_1$3.isTag;
			return function(elem) {
				return (0, domhandler_1$3.isTag)(elem) && elem.name === name;
			};
		},
		tag_type: function(type) {
			if (typeof type === "function") return function(elem) {
				return type(elem.type);
			};
			return function(elem) {
				return elem.type === type;
			};
		},
		tag_contains: function(data) {
			if (typeof data === "function") return function(elem) {
				return (0, domhandler_1$3.isText)(elem) && data(elem.data);
			};
			return function(elem) {
				return (0, domhandler_1$3.isText)(elem) && elem.data === data;
			};
		}
	};
	function getAttribCheck(attrib, value) {
		if (typeof value === "function") return function(elem) {
			return (0, domhandler_1$3.isTag)(elem) && value(elem.attribs[attrib]);
		};
		return function(elem) {
			return (0, domhandler_1$3.isTag)(elem) && elem.attribs[attrib] === value;
		};
	}
	function combineFuncs(a, b) {
		return function(elem) {
			return a(elem) || b(elem);
		};
	}
	function compileTest(options) {
		var funcs = Object.keys(options).map(function(key) {
			var value = options[key];
			return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
		});
		return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
	}
	function testElement(options, node) {
		var test = compileTest(options);
		return test ? test(node) : true;
	}
	exports.testElement = testElement;
	function getElements(options, nodes, recurse, limit) {
		if (limit === void 0) limit = Infinity;
		var test = compileTest(options);
		return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
	}
	exports.getElements = getElements;
	function getElementById(id, nodes, recurse) {
		if (recurse === void 0) recurse = true;
		if (!Array.isArray(nodes)) nodes = [nodes];
		return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
	}
	exports.getElementById = getElementById;
	function getElementsByTagName(tagName, nodes, recurse, limit) {
		if (recurse === void 0) recurse = true;
		if (limit === void 0) limit = Infinity;
		return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
	}
	exports.getElementsByTagName = getElementsByTagName;
	function getElementsByTagType(type, nodes, recurse, limit) {
		if (recurse === void 0) recurse = true;
		if (limit === void 0) limit = Infinity;
		return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
	}
	exports.getElementsByTagType = getElementsByTagType;
}));
var require_helpers = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.uniqueSort = exports.compareDocumentPosition = exports.DocumentPosition = exports.removeSubsets = void 0;
	var domhandler_1$2 = require_lib$5();
	function removeSubsets(nodes) {
		var idx = nodes.length;
		while (--idx >= 0) {
			var node = nodes[idx];
			if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
				nodes.splice(idx, 1);
				continue;
			}
			for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) if (nodes.includes(ancestor)) {
				nodes.splice(idx, 1);
				break;
			}
		}
		return nodes;
	}
	exports.removeSubsets = removeSubsets;
	var DocumentPosition;
	(function(DocumentPosition$1) {
		DocumentPosition$1[DocumentPosition$1["DISCONNECTED"] = 1] = "DISCONNECTED";
		DocumentPosition$1[DocumentPosition$1["PRECEDING"] = 2] = "PRECEDING";
		DocumentPosition$1[DocumentPosition$1["FOLLOWING"] = 4] = "FOLLOWING";
		DocumentPosition$1[DocumentPosition$1["CONTAINS"] = 8] = "CONTAINS";
		DocumentPosition$1[DocumentPosition$1["CONTAINED_BY"] = 16] = "CONTAINED_BY";
	})(DocumentPosition = exports.DocumentPosition || (exports.DocumentPosition = {}));
	function compareDocumentPosition(nodeA, nodeB) {
		var aParents = [];
		var bParents = [];
		if (nodeA === nodeB) return 0;
		var current = (0, domhandler_1$2.hasChildren)(nodeA) ? nodeA : nodeA.parent;
		while (current) {
			aParents.unshift(current);
			current = current.parent;
		}
		current = (0, domhandler_1$2.hasChildren)(nodeB) ? nodeB : nodeB.parent;
		while (current) {
			bParents.unshift(current);
			current = current.parent;
		}
		var maxIdx = Math.min(aParents.length, bParents.length);
		var idx = 0;
		while (idx < maxIdx && aParents[idx] === bParents[idx]) idx++;
		if (idx === 0) return DocumentPosition.DISCONNECTED;
		var sharedParent = aParents[idx - 1];
		var siblings = sharedParent.children;
		var aSibling = aParents[idx];
		var bSibling = bParents[idx];
		if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
			if (sharedParent === nodeB) return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
			return DocumentPosition.FOLLOWING;
		}
		if (sharedParent === nodeA) return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
		return DocumentPosition.PRECEDING;
	}
	exports.compareDocumentPosition = compareDocumentPosition;
	function uniqueSort(nodes) {
		nodes = nodes.filter(function(node, i, arr) {
			return !arr.includes(node, i + 1);
		});
		nodes.sort(function(a, b) {
			var relative$1 = compareDocumentPosition(a, b);
			if (relative$1 & DocumentPosition.PRECEDING) return -1;
			else if (relative$1 & DocumentPosition.FOLLOWING) return 1;
			return 0;
		});
		return nodes;
	}
	exports.uniqueSort = uniqueSort;
}));
var require_feeds = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var stringify_js_1 = require_stringify$2();
	var legacy_js_1 = require_legacy();
	function getFeed(doc) {
		var feedRoot = getOneElement(isValidFeed, doc);
		return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
	}
	exports.getFeed = getFeed;
	function getAtomFeed(feedRoot) {
		var _a$1;
		var childs = feedRoot.children;
		var feed = {
			type: "atom",
			items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function(item) {
				var _a$2;
				var children = item.children;
				var entry = { media: getMediaElements(children) };
				addConditionally(entry, "id", "id", children);
				addConditionally(entry, "title", "title", children);
				var href$1 = (_a$2 = getOneElement("link", children)) === null || _a$2 === void 0 ? void 0 : _a$2.attribs["href"];
				if (href$1) entry.link = href$1;
				var description = fetch("summary", children) || fetch("content", children);
				if (description) entry.description = description;
				var pubDate = fetch("updated", children);
				if (pubDate) entry.pubDate = new Date(pubDate);
				return entry;
			})
		};
		addConditionally(feed, "id", "id", childs);
		addConditionally(feed, "title", "title", childs);
		var href = (_a$1 = getOneElement("link", childs)) === null || _a$1 === void 0 ? void 0 : _a$1.attribs["href"];
		if (href) feed.link = href;
		addConditionally(feed, "description", "subtitle", childs);
		var updated = fetch("updated", childs);
		if (updated) feed.updated = new Date(updated);
		addConditionally(feed, "author", "email", childs, true);
		return feed;
	}
	function getRssFeed(feedRoot) {
		var _a$1, _b;
		var childs = (_b = (_a$1 = getOneElement("channel", feedRoot.children)) === null || _a$1 === void 0 ? void 0 : _a$1.children) !== null && _b !== void 0 ? _b : [];
		var feed = {
			type: feedRoot.name.substr(0, 3),
			id: "",
			items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
				var children = item.children;
				var entry = { media: getMediaElements(children) };
				addConditionally(entry, "id", "guid", children);
				addConditionally(entry, "title", "title", children);
				addConditionally(entry, "link", "link", children);
				addConditionally(entry, "description", "description", children);
				var pubDate = fetch("pubDate", children) || fetch("dc:date", children);
				if (pubDate) entry.pubDate = new Date(pubDate);
				return entry;
			})
		};
		addConditionally(feed, "title", "title", childs);
		addConditionally(feed, "link", "link", childs);
		addConditionally(feed, "description", "description", childs);
		var updated = fetch("lastBuildDate", childs);
		if (updated) feed.updated = new Date(updated);
		addConditionally(feed, "author", "managingEditor", childs, true);
		return feed;
	}
	var MEDIA_KEYS_STRING = [
		"url",
		"type",
		"lang"
	];
	var MEDIA_KEYS_INT = [
		"fileSize",
		"bitrate",
		"framerate",
		"samplingrate",
		"channels",
		"duration",
		"height",
		"width"
	];
	function getMediaElements(where) {
		return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function(elem) {
			var attribs = elem.attribs;
			var media = {
				medium: attribs["medium"],
				isDefault: !!attribs["isDefault"]
			};
			for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
				var attrib = MEDIA_KEYS_STRING_1[_i];
				if (attribs[attrib]) media[attrib] = attribs[attrib];
			}
			for (var _a$1 = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a$1 < MEDIA_KEYS_INT_1.length; _a$1++) {
				var attrib = MEDIA_KEYS_INT_1[_a$1];
				if (attribs[attrib]) media[attrib] = parseInt(attribs[attrib], 10);
			}
			if (attribs["expression"]) media.expression = attribs["expression"];
			return media;
		});
	}
	function getOneElement(tagName, node) {
		return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
	}
	function fetch(tagName, where, recurse) {
		if (recurse === void 0) recurse = false;
		return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
	}
	function addConditionally(obj, prop, tagName, where, recurse) {
		if (recurse === void 0) recurse = false;
		var val = fetch(tagName, where, recurse);
		if (val) obj[prop] = val;
	}
	function isValidFeed(value) {
		return value === "rss" || value === "feed" || value === "rdf:RDF";
	}
}));
var require_lib$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding$1 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding$1(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
	__exportStar(require_stringify$2(), exports);
	__exportStar(require_traversal(), exports);
	__exportStar(require_manipulation(), exports);
	__exportStar(require_querying(), exports);
	__exportStar(require_legacy(), exports);
	__exportStar(require_helpers(), exports);
	__exportStar(require_feeds(), exports);
	var domhandler_1$1 = require_lib$5();
	Object.defineProperty(exports, "isTag", {
		enumerable: true,
		get: function() {
			return domhandler_1$1.isTag;
		}
	});
	Object.defineProperty(exports, "isCDATA", {
		enumerable: true,
		get: function() {
			return domhandler_1$1.isCDATA;
		}
	});
	Object.defineProperty(exports, "isText", {
		enumerable: true,
		get: function() {
			return domhandler_1$1.isText;
		}
	});
	Object.defineProperty(exports, "isComment", {
		enumerable: true,
		get: function() {
			return domhandler_1$1.isComment;
		}
	});
	Object.defineProperty(exports, "isDocument", {
		enumerable: true,
		get: function() {
			return domhandler_1$1.isDocument;
		}
	});
	Object.defineProperty(exports, "hasChildren", {
		enumerable: true,
		get: function() {
			return domhandler_1$1.hasChildren;
		}
	});
}));
var require_lib$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		}
		__setModuleDefault(result, mod);
		return result;
	};
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DomUtils = exports.parseFeed = exports.getFeed = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DefaultHandler = exports.DomHandler = exports.Parser = void 0;
	var Parser_js_1 = require_Parser();
	var Parser_js_2 = require_Parser();
	Object.defineProperty(exports, "Parser", {
		enumerable: true,
		get: function() {
			return Parser_js_2.Parser;
		}
	});
	var domhandler_1 = require_lib$5();
	var domhandler_2 = require_lib$5();
	Object.defineProperty(exports, "DomHandler", {
		enumerable: true,
		get: function() {
			return domhandler_2.DomHandler;
		}
	});
	Object.defineProperty(exports, "DefaultHandler", {
		enumerable: true,
		get: function() {
			return domhandler_2.DomHandler;
		}
	});
	function parseDocument(data, options) {
		var handler = new domhandler_1.DomHandler(void 0, options);
		new Parser_js_1.Parser(handler, options).end(data);
		return handler.root;
	}
	exports.parseDocument = parseDocument;
	function parseDOM(data, options) {
		return parseDocument(data, options).children;
	}
	exports.parseDOM = parseDOM;
	function createDomStream(callback, options, elementCallback) {
		var handler = new domhandler_1.DomHandler(callback, options, elementCallback);
		return new Parser_js_1.Parser(handler, options);
	}
	exports.createDomStream = createDomStream;
	var Tokenizer_js_1 = require_Tokenizer();
	Object.defineProperty(exports, "Tokenizer", {
		enumerable: true,
		get: function() {
			return __importDefault(Tokenizer_js_1).default;
		}
	});
	exports.ElementType = __importStar(require_lib$6());
	var domutils_1 = require_lib$2();
	var domutils_2 = require_lib$2();
	Object.defineProperty(exports, "getFeed", {
		enumerable: true,
		get: function() {
			return domutils_2.getFeed;
		}
	});
	var parseFeedDefaultOptions = { xmlMode: true };
	function parseFeed(feed, options) {
		if (options === void 0) options = parseFeedDefaultOptions;
		return (0, domutils_1.getFeed)(parseDOM(feed, options));
	}
	exports.parseFeed = parseFeed;
	exports.DomUtils = __importStar(require_lib$2());
}));
var require_escape_string_regexp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = (string) => {
		if (typeof string !== "string") throw new TypeError("Expected a string");
		return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
	};
}));
var require_is_plain_object = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	/*!
	* is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	*
	* Copyright (c) 2014-2017, Jon Schlinkert.
	* Released under the MIT License.
	*/
	function isObject(o) {
		return Object.prototype.toString.call(o) === "[object Object]";
	}
	function isPlainObject$1(o) {
		var ctor, prot;
		if (isObject(o) === false) return false;
		ctor = o.constructor;
		if (ctor === void 0) return true;
		prot = ctor.prototype;
		if (isObject(prot) === false) return false;
		if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
		return true;
	}
	exports.isPlainObject = isPlainObject$1;
}));
var require_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isMergeableObject = function isMergeableObject$1(value) {
		return isNonNullObject(value) && !isSpecial(value);
	};
	function isNonNullObject(value) {
		return !!value && typeof value === "object";
	}
	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);
		return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
	}
	var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE;
	}
	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {};
	}
	function cloneUnlessOtherwiseSpecified(value, options) {
		return options.clone !== false && options.isMergeableObject(value) ? deepmerge$1(emptyTarget(value), value, options) : value;
	}
	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options);
		});
	}
	function getMergeFunction(key, options) {
		if (!options.customMerge) return deepmerge$1;
		var customMerge = options.customMerge(key);
		return typeof customMerge === "function" ? customMerge : deepmerge$1;
	}
	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol);
		}) : [];
	}
	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
	}
	function propertyIsOnObject(object, property) {
		try {
			return property in object;
		} catch (_) {
			return false;
		}
	}
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
	}
	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) return;
			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		});
		return destination;
	}
	function deepmerge$1(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
		var sourceIsArray = Array.isArray(source);
		if (!(sourceIsArray === Array.isArray(target))) return cloneUnlessOtherwiseSpecified(source, options);
		else if (sourceIsArray) return options.arrayMerge(target, source, options);
		else return mergeObject(target, source, options);
	}
	deepmerge$1.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) throw new Error("first argument should be an array");
		return array.reduce(function(prev, next) {
			return deepmerge$1(prev, next, options);
		}, {});
	};
	module.exports = deepmerge$1;
}));
var require_parse_srcset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root, factory) {
		if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof module === "object" && module.exports) module.exports = factory();
		else root.parseSrcset = factory();
	})(exports, function() {
		return function(input) {
			function isSpace(c$1) {
				return c$1 === " " || c$1 === "	" || c$1 === "\n" || c$1 === "\f" || c$1 === "\r";
			}
			function collectCharacters(regEx) {
				var chars, match = regEx.exec(input.substring(pos));
				if (match) {
					chars = match[0];
					pos += chars.length;
					return chars;
				}
			}
			var inputLength = input.length, regexLeadingSpaces = /^[ \t\n\r\u000c]+/, regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/, regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/, regexTrailingCommas = /[,]+$/, regexNonNegativeInteger = /^\d+$/, regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, url, descriptors, currentDescriptor, state, c, pos = 0, candidates = [];
			while (true) {
				collectCharacters(regexLeadingCommasOrSpaces);
				if (pos >= inputLength) return candidates;
				url = collectCharacters(regexLeadingNotSpaces);
				descriptors = [];
				if (url.slice(-1) === ",") {
					url = url.replace(regexTrailingCommas, "");
					parseDescriptors();
				} else tokenize();
			}
			function tokenize() {
				collectCharacters(regexLeadingSpaces);
				currentDescriptor = "";
				state = "in descriptor";
				while (true) {
					c = input.charAt(pos);
					if (state === "in descriptor") if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) descriptors.push(currentDescriptor);
						parseDescriptors();
						return;
					} else if (c === "(") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";
					} else if (c === "") {
						if (currentDescriptor) descriptors.push(currentDescriptor);
						parseDescriptors();
						return;
					} else currentDescriptor = currentDescriptor + c;
					else if (state === "in parens") if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;
					} else currentDescriptor = currentDescriptor + c;
					else if (state === "after descriptor") if (isSpace(c)) {} else if (c === "") {
						parseDescriptors();
						return;
					} else {
						state = "in descriptor";
						pos -= 1;
					}
					pos += 1;
				}
			}
			function parseDescriptors() {
				var pError = false, w, d, h, i, candidate = {}, desc, lastChar, value, intVal, floatVal;
				for (i = 0; i < descriptors.length; i++) {
					desc = descriptors[i];
					lastChar = desc[desc.length - 1];
					value = desc.substring(0, desc.length - 1);
					intVal = parseInt(value, 10);
					floatVal = parseFloat(value);
					if (regexNonNegativeInteger.test(value) && lastChar === "w") {
						if (w || d) pError = true;
						if (intVal === 0) pError = true;
						else w = intVal;
					} else if (regexFloatingPoint.test(value) && lastChar === "x") {
						if (w || d || h) pError = true;
						if (floatVal < 0) pError = true;
						else d = floatVal;
					} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
						if (h || d) pError = true;
						if (intVal === 0) pError = true;
						else h = intVal;
					} else pError = true;
				}
				if (!pError) {
					candidate.url = url;
					if (w) candidate.w = w;
					if (d) candidate.d = d;
					if (h) candidate.h = h;
					candidates.push(candidate);
				} else if (console && console.log) console.log("Invalid srcset descriptor found in '" + input + "' at '" + desc + "'.");
			}
		};
	});
}));
var require_picocolors_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var x = String;
	var create = function() {
		return {
			isColorSupported: false,
			reset: x,
			bold: x,
			dim: x,
			italic: x,
			underline: x,
			inverse: x,
			hidden: x,
			strikethrough: x,
			black: x,
			red: x,
			green: x,
			yellow: x,
			blue: x,
			magenta: x,
			cyan: x,
			white: x,
			gray: x,
			bgBlack: x,
			bgRed: x,
			bgGreen: x,
			bgYellow: x,
			bgBlue: x,
			bgMagenta: x,
			bgCyan: x,
			bgWhite: x,
			blackBright: x,
			redBright: x,
			greenBright: x,
			yellowBright: x,
			blueBright: x,
			magentaBright: x,
			cyanBright: x,
			whiteBright: x,
			bgBlackBright: x,
			bgRedBright: x,
			bgGreenBright: x,
			bgYellowBright: x,
			bgBlueBright: x,
			bgMagentaBright: x,
			bgCyanBright: x,
			bgWhiteBright: x
		};
	};
	module.exports = create();
	module.exports.createColors = create;
}));
var require_css_syntax_error = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var pico = require_picocolors_browser();
	var terminalHighlight$1 = require___vite_browser_external();
	var CssSyntaxError$3 = class CssSyntaxError$3 extends Error {
		constructor(message, line, column, source, file, plugin) {
			super(message);
			this.name = "CssSyntaxError";
			this.reason = message;
			if (file) this.file = file;
			if (source) this.source = source;
			if (plugin) this.plugin = plugin;
			if (typeof line !== "undefined" && typeof column !== "undefined") if (typeof line === "number") {
				this.line = line;
				this.column = column;
			} else {
				this.line = line.line;
				this.column = line.column;
				this.endLine = column.line;
				this.endColumn = column.column;
			}
			this.setMessage();
			if (Error.captureStackTrace) Error.captureStackTrace(this, CssSyntaxError$3);
		}
		setMessage() {
			this.message = this.plugin ? this.plugin + ": " : "";
			this.message += this.file ? this.file : "<css input>";
			if (typeof this.line !== "undefined") this.message += ":" + this.line + ":" + this.column;
			this.message += ": " + this.reason;
		}
		showSourceCode(color) {
			if (!this.source) return "";
			let css = this.source;
			if (color == null) color = pico.isColorSupported;
			let aside = (text) => text;
			let mark = (text) => text;
			let highlight = (text) => text;
			if (color) {
				let { bold, gray, red } = pico.createColors(true);
				mark = (text) => bold(red(text));
				aside = (text) => gray(text);
				if (terminalHighlight$1) highlight = (text) => terminalHighlight$1(text);
			}
			let lines = css.split(/\r?\n/);
			let start = Math.max(this.line - 3, 0);
			let end = Math.min(this.line + 2, lines.length);
			let maxWidth = String(end).length;
			return lines.slice(start, end).map((line, index) => {
				let number = start + 1 + index;
				let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
				if (number === this.line) {
					if (line.length > 160) {
						let padding = 20;
						let subLineStart = Math.max(0, this.column - padding);
						let subLineEnd = Math.max(this.column + padding, this.endColumn + padding);
						let subLine = line.slice(subLineStart, subLineEnd);
						let spacing$1 = aside(gutter.replace(/\d/g, " ")) + line.slice(0, Math.min(this.column - 1, padding - 1)).replace(/[^\t]/g, " ");
						return mark(">") + aside(gutter) + highlight(subLine) + "\n " + spacing$1 + mark("^");
					}
					let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
					return mark(">") + aside(gutter) + highlight(line) + "\n " + spacing + mark("^");
				}
				return " " + aside(gutter) + highlight(line);
			}).join("\n");
		}
		toString() {
			let code = this.showSourceCode();
			if (code) code = "\n\n" + code + "\n";
			return this.name + ": " + this.message + code;
		}
	};
	module.exports = CssSyntaxError$3;
	CssSyntaxError$3.default = CssSyntaxError$3;
}));
var require_stringifier = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DEFAULT_RAW = {
		after: "\n",
		beforeClose: "\n",
		beforeComment: "\n",
		beforeDecl: "\n",
		beforeOpen: " ",
		beforeRule: "\n",
		colon: ": ",
		commentLeft: " ",
		commentRight: " ",
		emptyBody: "",
		indent: "    ",
		semicolon: false
	};
	function capitalize(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
	var Stringifier$2 = class {
		constructor(builder) {
			this.builder = builder;
		}
		atrule(node, semicolon) {
			let name = "@" + node.name;
			let params = node.params ? this.rawValue(node, "params") : "";
			if (typeof node.raws.afterName !== "undefined") name += node.raws.afterName;
			else if (params) name += " ";
			if (node.nodes) this.block(node, name + params);
			else {
				let end = (node.raws.between || "") + (semicolon ? ";" : "");
				this.builder(name + params + end, node);
			}
		}
		beforeAfter(node, detect) {
			let value;
			if (node.type === "decl") value = this.raw(node, null, "beforeDecl");
			else if (node.type === "comment") value = this.raw(node, null, "beforeComment");
			else if (detect === "before") value = this.raw(node, null, "beforeRule");
			else value = this.raw(node, null, "beforeClose");
			let buf = node.parent;
			let depth = 0;
			while (buf && buf.type !== "root") {
				depth += 1;
				buf = buf.parent;
			}
			if (value.includes("\n")) {
				let indent = this.raw(node, null, "indent");
				if (indent.length) for (let step = 0; step < depth; step++) value += indent;
			}
			return value;
		}
		block(node, start) {
			let between = this.raw(node, "between", "beforeOpen");
			this.builder(start + between + "{", node, "start");
			let after;
			if (node.nodes && node.nodes.length) {
				this.body(node);
				after = this.raw(node, "after");
			} else after = this.raw(node, "after", "emptyBody");
			if (after) this.builder(after);
			this.builder("}", node, "end");
		}
		body(node) {
			let last = node.nodes.length - 1;
			while (last > 0) {
				if (node.nodes[last].type !== "comment") break;
				last -= 1;
			}
			let semicolon = this.raw(node, "semicolon");
			for (let i = 0; i < node.nodes.length; i++) {
				let child = node.nodes[i];
				let before = this.raw(child, "before");
				if (before) this.builder(before);
				this.stringify(child, last !== i || semicolon);
			}
		}
		comment(node) {
			let left = this.raw(node, "left", "commentLeft");
			let right = this.raw(node, "right", "commentRight");
			this.builder("/*" + left + node.text + right + "*/", node);
		}
		decl(node, semicolon) {
			let between = this.raw(node, "between", "colon");
			let string = node.prop + between + this.rawValue(node, "value");
			if (node.important) string += node.raws.important || " !important";
			if (semicolon) string += ";";
			this.builder(string, node);
		}
		document(node) {
			this.body(node);
		}
		raw(node, own, detect) {
			let value;
			if (!detect) detect = own;
			if (own) {
				value = node.raws[own];
				if (typeof value !== "undefined") return value;
			}
			let parent = node.parent;
			if (detect === "before") {
				if (!parent || parent.type === "root" && parent.first === node) return "";
				if (parent && parent.type === "document") return "";
			}
			if (!parent) return DEFAULT_RAW[detect];
			let root = node.root();
			if (!root.rawCache) root.rawCache = {};
			if (typeof root.rawCache[detect] !== "undefined") return root.rawCache[detect];
			if (detect === "before" || detect === "after") return this.beforeAfter(node, detect);
			else {
				let method = "raw" + capitalize(detect);
				if (this[method]) value = this[method](root, node);
				else root.walk((i) => {
					value = i.raws[own];
					if (typeof value !== "undefined") return false;
				});
			}
			if (typeof value === "undefined") value = DEFAULT_RAW[detect];
			root.rawCache[detect] = value;
			return value;
		}
		rawBeforeClose(root) {
			let value;
			root.walk((i) => {
				if (i.nodes && i.nodes.length > 0) {
					if (typeof i.raws.after !== "undefined") {
						value = i.raws.after;
						if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
						return false;
					}
				}
			});
			if (value) value = value.replace(/\S/g, "");
			return value;
		}
		rawBeforeComment(root, node) {
			let value;
			root.walkComments((i) => {
				if (typeof i.raws.before !== "undefined") {
					value = i.raws.before;
					if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
					return false;
				}
			});
			if (typeof value === "undefined") value = this.raw(node, null, "beforeDecl");
			else if (value) value = value.replace(/\S/g, "");
			return value;
		}
		rawBeforeDecl(root, node) {
			let value;
			root.walkDecls((i) => {
				if (typeof i.raws.before !== "undefined") {
					value = i.raws.before;
					if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
					return false;
				}
			});
			if (typeof value === "undefined") value = this.raw(node, null, "beforeRule");
			else if (value) value = value.replace(/\S/g, "");
			return value;
		}
		rawBeforeOpen(root) {
			let value;
			root.walk((i) => {
				if (i.type !== "decl") {
					value = i.raws.between;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		}
		rawBeforeRule(root) {
			let value;
			root.walk((i) => {
				if (i.nodes && (i.parent !== root || root.first !== i)) {
					if (typeof i.raws.before !== "undefined") {
						value = i.raws.before;
						if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
						return false;
					}
				}
			});
			if (value) value = value.replace(/\S/g, "");
			return value;
		}
		rawColon(root) {
			let value;
			root.walkDecls((i) => {
				if (typeof i.raws.between !== "undefined") {
					value = i.raws.between.replace(/[^\s:]/g, "");
					return false;
				}
			});
			return value;
		}
		rawEmptyBody(root) {
			let value;
			root.walk((i) => {
				if (i.nodes && i.nodes.length === 0) {
					value = i.raws.after;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		}
		rawIndent(root) {
			if (root.raws.indent) return root.raws.indent;
			let value;
			root.walk((i) => {
				let p = i.parent;
				if (p && p !== root && p.parent && p.parent === root) {
					if (typeof i.raws.before !== "undefined") {
						let parts = i.raws.before.split("\n");
						value = parts[parts.length - 1];
						value = value.replace(/\S/g, "");
						return false;
					}
				}
			});
			return value;
		}
		rawSemicolon(root) {
			let value;
			root.walk((i) => {
				if (i.nodes && i.nodes.length && i.last.type === "decl") {
					value = i.raws.semicolon;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		}
		rawValue(node, prop) {
			let value = node[prop];
			let raw = node.raws[prop];
			if (raw && raw.value === value) return raw.raw;
			return value;
		}
		root(node) {
			this.body(node);
			if (node.raws.after) this.builder(node.raws.after);
		}
		rule(node) {
			this.block(node, this.rawValue(node, "selector"));
			if (node.raws.ownSemicolon) this.builder(node.raws.ownSemicolon, node, "end");
		}
		stringify(node, semicolon) {
			/* c8 ignore start */
			if (!this[node.type]) throw new Error("Unknown AST node type " + node.type + ". Maybe you need to change PostCSS stringifier.");
			/* c8 ignore stop */
			this[node.type](node, semicolon);
		}
	};
	module.exports = Stringifier$2;
	Stringifier$2.default = Stringifier$2;
}));
var require_stringify$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stringifier$1 = require_stringifier();
	function stringify$6(node, builder) {
		new Stringifier$1(builder).stringify(node);
	}
	module.exports = stringify$6;
	stringify$6.default = stringify$6;
}));
var require_symbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports.isClean = Symbol("isClean");
	module.exports.my = Symbol("my");
}));
var require_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var CssSyntaxError$2 = require_css_syntax_error();
	var Stringifier = require_stringifier();
	var stringify$5 = require_stringify$1();
	var { isClean: isClean$2, my: my$2 } = require_symbols();
	function cloneNode(obj, parent) {
		let cloned = new obj.constructor();
		for (let i in obj) {
			if (!Object.prototype.hasOwnProperty.call(obj, i))
 /* c8 ignore next 2 */
			continue;
			if (i === "proxyCache") continue;
			let value = obj[i];
			let type = typeof value;
			if (i === "parent" && type === "object") {
				if (parent) cloned[i] = parent;
			} else if (i === "source") cloned[i] = value;
			else if (Array.isArray(value)) cloned[i] = value.map((j) => cloneNode(j, cloned));
			else {
				if (type === "object" && value !== null) value = cloneNode(value);
				cloned[i] = value;
			}
		}
		return cloned;
	}
	function sourceOffset(inputCSS, position) {
		if (position && typeof position.offset !== "undefined") return position.offset;
		let column = 1;
		let line = 1;
		let offset = 0;
		for (let i = 0; i < inputCSS.length; i++) {
			if (line === position.line && column === position.column) {
				offset = i;
				break;
			}
			if (inputCSS[i] === "\n") {
				column = 1;
				line += 1;
			} else column += 1;
		}
		return offset;
	}
	var Node$4 = class {
		constructor(defaults$2 = {}) {
			this.raws = {};
			this[isClean$2] = false;
			this[my$2] = true;
			for (let name in defaults$2) if (name === "nodes") {
				this.nodes = [];
				for (let node of defaults$2[name]) if (typeof node.clone === "function") this.append(node.clone());
				else this.append(node);
			} else this[name] = defaults$2[name];
		}
		addToError(error) {
			error.postcssNode = this;
			if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
				let s = this.source;
				error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
			}
			return error;
		}
		after(add) {
			this.parent.insertAfter(this, add);
			return this;
		}
		assign(overrides = {}) {
			for (let name in overrides) this[name] = overrides[name];
			return this;
		}
		before(add) {
			this.parent.insertBefore(this, add);
			return this;
		}
		cleanRaws(keepBetween) {
			delete this.raws.before;
			delete this.raws.after;
			if (!keepBetween) delete this.raws.between;
		}
		clone(overrides = {}) {
			let cloned = cloneNode(this);
			for (let name in overrides) cloned[name] = overrides[name];
			return cloned;
		}
		cloneAfter(overrides = {}) {
			let cloned = this.clone(overrides);
			this.parent.insertAfter(this, cloned);
			return cloned;
		}
		cloneBefore(overrides = {}) {
			let cloned = this.clone(overrides);
			this.parent.insertBefore(this, cloned);
			return cloned;
		}
		error(message, opts = {}) {
			if (this.source) {
				let { end, start } = this.rangeBy(opts);
				return this.source.input.error(message, {
					column: start.column,
					line: start.line
				}, {
					column: end.column,
					line: end.line
				}, opts);
			}
			return new CssSyntaxError$2(message);
		}
		getProxyProcessor() {
			return {
				get(node, prop) {
					if (prop === "proxyOf") return node;
					else if (prop === "root") return () => node.root().toProxy();
					else return node[prop];
				},
				set(node, prop, value) {
					if (node[prop] === value) return true;
					node[prop] = value;
					if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") node.markDirty();
					return true;
				}
			};
		}
		/* c8 ignore next 3 */
		markClean() {
			this[isClean$2] = true;
		}
		markDirty() {
			if (this[isClean$2]) {
				this[isClean$2] = false;
				let next = this;
				while (next = next.parent) next[isClean$2] = false;
			}
		}
		next() {
			if (!this.parent) return void 0;
			let index = this.parent.index(this);
			return this.parent.nodes[index + 1];
		}
		positionBy(opts) {
			let pos = this.source.start;
			if (opts.index) pos = this.positionInside(opts.index);
			else if (opts.word) {
				let index = this.source.input.css.slice(sourceOffset(this.source.input.css, this.source.start), sourceOffset(this.source.input.css, this.source.end)).indexOf(opts.word);
				if (index !== -1) pos = this.positionInside(index);
			}
			return pos;
		}
		positionInside(index) {
			let column = this.source.start.column;
			let line = this.source.start.line;
			let offset = sourceOffset(this.source.input.css, this.source.start);
			let end = offset + index;
			for (let i = offset; i < end; i++) if (this.source.input.css[i] === "\n") {
				column = 1;
				line += 1;
			} else column += 1;
			return {
				column,
				line
			};
		}
		prev() {
			if (!this.parent) return void 0;
			let index = this.parent.index(this);
			return this.parent.nodes[index - 1];
		}
		rangeBy(opts) {
			let start = {
				column: this.source.start.column,
				line: this.source.start.line
			};
			let end = this.source.end ? {
				column: this.source.end.column + 1,
				line: this.source.end.line
			} : {
				column: start.column + 1,
				line: start.line
			};
			if (opts.word) {
				let index = this.source.input.css.slice(sourceOffset(this.source.input.css, this.source.start), sourceOffset(this.source.input.css, this.source.end)).indexOf(opts.word);
				if (index !== -1) {
					start = this.positionInside(index);
					end = this.positionInside(index + opts.word.length);
				}
			} else {
				if (opts.start) start = {
					column: opts.start.column,
					line: opts.start.line
				};
				else if (opts.index) start = this.positionInside(opts.index);
				if (opts.end) end = {
					column: opts.end.column,
					line: opts.end.line
				};
				else if (typeof opts.endIndex === "number") end = this.positionInside(opts.endIndex);
				else if (opts.index) end = this.positionInside(opts.index + 1);
			}
			if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
				column: start.column + 1,
				line: start.line
			};
			return {
				end,
				start
			};
		}
		raw(prop, defaultType) {
			return new Stringifier().raw(this, prop, defaultType);
		}
		remove() {
			if (this.parent) this.parent.removeChild(this);
			this.parent = void 0;
			return this;
		}
		replaceWith(...nodes) {
			if (this.parent) {
				let bookmark = this;
				let foundSelf = false;
				for (let node of nodes) if (node === this) foundSelf = true;
				else if (foundSelf) {
					this.parent.insertAfter(bookmark, node);
					bookmark = node;
				} else this.parent.insertBefore(bookmark, node);
				if (!foundSelf) this.remove();
			}
			return this;
		}
		root() {
			let result = this;
			while (result.parent && result.parent.type !== "document") result = result.parent;
			return result;
		}
		toJSON(_, inputs) {
			let fixed = {};
			let emitInputs = inputs == null;
			inputs = inputs || /* @__PURE__ */ new Map();
			let inputsNextIndex = 0;
			for (let name in this) {
				if (!Object.prototype.hasOwnProperty.call(this, name))
 /* c8 ignore next 2 */
				continue;
				if (name === "parent" || name === "proxyCache") continue;
				let value = this[name];
				if (Array.isArray(value)) fixed[name] = value.map((i) => {
					if (typeof i === "object" && i.toJSON) return i.toJSON(null, inputs);
					else return i;
				});
				else if (typeof value === "object" && value.toJSON) fixed[name] = value.toJSON(null, inputs);
				else if (name === "source") {
					let inputId = inputs.get(value.input);
					if (inputId == null) {
						inputId = inputsNextIndex;
						inputs.set(value.input, inputsNextIndex);
						inputsNextIndex++;
					}
					fixed[name] = {
						end: value.end,
						inputId,
						start: value.start
					};
				} else fixed[name] = value;
			}
			if (emitInputs) fixed.inputs = [...inputs.keys()].map((input) => input.toJSON());
			return fixed;
		}
		toProxy() {
			if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
			return this.proxyCache;
		}
		toString(stringifier = stringify$5) {
			if (stringifier.stringify) stringifier = stringifier.stringify;
			let result = "";
			stringifier(this, (i) => {
				result += i;
			});
			return result;
		}
		warn(result, text, opts) {
			let data = { node: this };
			for (let i in opts) data[i] = opts[i];
			return result.warn(text, data);
		}
		get proxyOf() {
			return this;
		}
	};
	module.exports = Node$4;
	Node$4.default = Node$4;
}));
var require_comment = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Node$3 = require_node();
	var Comment$4 = class extends Node$3 {
		constructor(defaults$2) {
			super(defaults$2);
			this.type = "comment";
		}
	};
	module.exports = Comment$4;
	Comment$4.default = Comment$4;
}));
var require_declaration = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Node$2 = require_node();
	var Declaration$4 = class extends Node$2 {
		constructor(defaults$2) {
			if (defaults$2 && typeof defaults$2.value !== "undefined" && typeof defaults$2.value !== "string") defaults$2 = {
				...defaults$2,
				value: String(defaults$2.value)
			};
			super(defaults$2);
			this.type = "decl";
		}
		get variable() {
			return this.prop.startsWith("--") || this.prop[0] === "$";
		}
	};
	module.exports = Declaration$4;
	Declaration$4.default = Declaration$4;
}));
var require_container = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Comment$3 = require_comment();
	var Declaration$3 = require_declaration();
	var Node$1 = require_node();
	var { isClean: isClean$1, my: my$1 } = require_symbols();
	var AtRule$4, parse$6, Root$6, Rule$4;
	function cleanSource(nodes) {
		return nodes.map((i) => {
			if (i.nodes) i.nodes = cleanSource(i.nodes);
			delete i.source;
			return i;
		});
	}
	function markTreeDirty(node) {
		node[isClean$1] = false;
		if (node.proxyOf.nodes) for (let i of node.proxyOf.nodes) markTreeDirty(i);
	}
	var Container$7 = class Container$7 extends Node$1 {
		append(...children) {
			for (let child of children) {
				let nodes = this.normalize(child, this.last);
				for (let node of nodes) this.proxyOf.nodes.push(node);
			}
			this.markDirty();
			return this;
		}
		cleanRaws(keepBetween) {
			super.cleanRaws(keepBetween);
			if (this.nodes) for (let node of this.nodes) node.cleanRaws(keepBetween);
		}
		each(callback) {
			if (!this.proxyOf.nodes) return void 0;
			let iterator = this.getIterator();
			let index, result;
			while (this.indexes[iterator] < this.proxyOf.nodes.length) {
				index = this.indexes[iterator];
				result = callback(this.proxyOf.nodes[index], index);
				if (result === false) break;
				this.indexes[iterator] += 1;
			}
			delete this.indexes[iterator];
			return result;
		}
		every(condition) {
			return this.nodes.every(condition);
		}
		getIterator() {
			if (!this.lastEach) this.lastEach = 0;
			if (!this.indexes) this.indexes = {};
			this.lastEach += 1;
			let iterator = this.lastEach;
			this.indexes[iterator] = 0;
			return iterator;
		}
		getProxyProcessor() {
			return {
				get(node, prop) {
					if (prop === "proxyOf") return node;
					else if (!node[prop]) return node[prop];
					else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) return (...args) => {
						return node[prop](...args.map((i) => {
							if (typeof i === "function") return (child, index) => i(child.toProxy(), index);
							else return i;
						}));
					};
					else if (prop === "every" || prop === "some") return (cb) => {
						return node[prop]((child, ...other) => cb(child.toProxy(), ...other));
					};
					else if (prop === "root") return () => node.root().toProxy();
					else if (prop === "nodes") return node.nodes.map((i) => i.toProxy());
					else if (prop === "first" || prop === "last") return node[prop].toProxy();
					else return node[prop];
				},
				set(node, prop, value) {
					if (node[prop] === value) return true;
					node[prop] = value;
					if (prop === "name" || prop === "params" || prop === "selector") node.markDirty();
					return true;
				}
			};
		}
		index(child) {
			if (typeof child === "number") return child;
			if (child.proxyOf) child = child.proxyOf;
			return this.proxyOf.nodes.indexOf(child);
		}
		insertAfter(exist, add) {
			let existIndex = this.index(exist);
			let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
			existIndex = this.index(exist);
			for (let node of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node);
			let index;
			for (let id in this.indexes) {
				index = this.indexes[id];
				if (existIndex < index) this.indexes[id] = index + nodes.length;
			}
			this.markDirty();
			return this;
		}
		insertBefore(exist, add) {
			let existIndex = this.index(exist);
			let type = existIndex === 0 ? "prepend" : false;
			let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
			existIndex = this.index(exist);
			for (let node of nodes) this.proxyOf.nodes.splice(existIndex, 0, node);
			let index;
			for (let id in this.indexes) {
				index = this.indexes[id];
				if (existIndex <= index) this.indexes[id] = index + nodes.length;
			}
			this.markDirty();
			return this;
		}
		normalize(nodes, sample) {
			if (typeof nodes === "string") nodes = cleanSource(parse$6(nodes).nodes);
			else if (typeof nodes === "undefined") nodes = [];
			else if (Array.isArray(nodes)) {
				nodes = nodes.slice(0);
				for (let i of nodes) if (i.parent) i.parent.removeChild(i, "ignore");
			} else if (nodes.type === "root" && this.type !== "document") {
				nodes = nodes.nodes.slice(0);
				for (let i of nodes) if (i.parent) i.parent.removeChild(i, "ignore");
			} else if (nodes.type) nodes = [nodes];
			else if (nodes.prop) {
				if (typeof nodes.value === "undefined") throw new Error("Value field is missed in node creation");
				else if (typeof nodes.value !== "string") nodes.value = String(nodes.value);
				nodes = [new Declaration$3(nodes)];
			} else if (nodes.selector || nodes.selectors) nodes = [new Rule$4(nodes)];
			else if (nodes.name) nodes = [new AtRule$4(nodes)];
			else if (nodes.text) nodes = [new Comment$3(nodes)];
			else throw new Error("Unknown node type in node creation");
			return nodes.map((i) => {
				/* c8 ignore next */
				if (!i[my$1]) Container$7.rebuild(i);
				i = i.proxyOf;
				if (i.parent) i.parent.removeChild(i);
				if (i[isClean$1]) markTreeDirty(i);
				if (!i.raws) i.raws = {};
				if (typeof i.raws.before === "undefined") {
					if (sample && typeof sample.raws.before !== "undefined") i.raws.before = sample.raws.before.replace(/\S/g, "");
				}
				i.parent = this.proxyOf;
				return i;
			});
		}
		prepend(...children) {
			children = children.reverse();
			for (let child of children) {
				let nodes = this.normalize(child, this.first, "prepend").reverse();
				for (let node of nodes) this.proxyOf.nodes.unshift(node);
				for (let id in this.indexes) this.indexes[id] = this.indexes[id] + nodes.length;
			}
			this.markDirty();
			return this;
		}
		push(child) {
			child.parent = this;
			this.proxyOf.nodes.push(child);
			return this;
		}
		removeAll() {
			for (let node of this.proxyOf.nodes) node.parent = void 0;
			this.proxyOf.nodes = [];
			this.markDirty();
			return this;
		}
		removeChild(child) {
			child = this.index(child);
			this.proxyOf.nodes[child].parent = void 0;
			this.proxyOf.nodes.splice(child, 1);
			let index;
			for (let id in this.indexes) {
				index = this.indexes[id];
				if (index >= child) this.indexes[id] = index - 1;
			}
			this.markDirty();
			return this;
		}
		replaceValues(pattern, opts, callback) {
			if (!callback) {
				callback = opts;
				opts = {};
			}
			this.walkDecls((decl) => {
				if (opts.props && !opts.props.includes(decl.prop)) return;
				if (opts.fast && !decl.value.includes(opts.fast)) return;
				decl.value = decl.value.replace(pattern, callback);
			});
			this.markDirty();
			return this;
		}
		some(condition) {
			return this.nodes.some(condition);
		}
		walk(callback) {
			return this.each((child, i) => {
				let result;
				try {
					result = callback(child, i);
				} catch (e) {
					throw child.addToError(e);
				}
				if (result !== false && child.walk) result = child.walk(callback);
				return result;
			});
		}
		walkAtRules(name, callback) {
			if (!callback) {
				callback = name;
				return this.walk((child, i) => {
					if (child.type === "atrule") return callback(child, i);
				});
			}
			if (name instanceof RegExp) return this.walk((child, i) => {
				if (child.type === "atrule" && name.test(child.name)) return callback(child, i);
			});
			return this.walk((child, i) => {
				if (child.type === "atrule" && child.name === name) return callback(child, i);
			});
		}
		walkComments(callback) {
			return this.walk((child, i) => {
				if (child.type === "comment") return callback(child, i);
			});
		}
		walkDecls(prop, callback) {
			if (!callback) {
				callback = prop;
				return this.walk((child, i) => {
					if (child.type === "decl") return callback(child, i);
				});
			}
			if (prop instanceof RegExp) return this.walk((child, i) => {
				if (child.type === "decl" && prop.test(child.prop)) return callback(child, i);
			});
			return this.walk((child, i) => {
				if (child.type === "decl" && child.prop === prop) return callback(child, i);
			});
		}
		walkRules(selector, callback) {
			if (!callback) {
				callback = selector;
				return this.walk((child, i) => {
					if (child.type === "rule") return callback(child, i);
				});
			}
			if (selector instanceof RegExp) return this.walk((child, i) => {
				if (child.type === "rule" && selector.test(child.selector)) return callback(child, i);
			});
			return this.walk((child, i) => {
				if (child.type === "rule" && child.selector === selector) return callback(child, i);
			});
		}
		get first() {
			if (!this.proxyOf.nodes) return void 0;
			return this.proxyOf.nodes[0];
		}
		get last() {
			if (!this.proxyOf.nodes) return void 0;
			return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
		}
	};
	Container$7.registerParse = (dependant) => {
		parse$6 = dependant;
	};
	Container$7.registerRule = (dependant) => {
		Rule$4 = dependant;
	};
	Container$7.registerAtRule = (dependant) => {
		AtRule$4 = dependant;
	};
	Container$7.registerRoot = (dependant) => {
		Root$6 = dependant;
	};
	module.exports = Container$7;
	Container$7.default = Container$7;
	/* c8 ignore start */
	Container$7.rebuild = (node) => {
		if (node.type === "atrule") Object.setPrototypeOf(node, AtRule$4.prototype);
		else if (node.type === "rule") Object.setPrototypeOf(node, Rule$4.prototype);
		else if (node.type === "decl") Object.setPrototypeOf(node, Declaration$3.prototype);
		else if (node.type === "comment") Object.setPrototypeOf(node, Comment$3.prototype);
		else if (node.type === "root") Object.setPrototypeOf(node, Root$6.prototype);
		node[my$1] = true;
		if (node.nodes) node.nodes.forEach((child) => {
			Container$7.rebuild(child);
		});
	};
}));
/* c8 ignore stop */
var require_at_rule = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Container$6 = require_container();
	var AtRule$3 = class extends Container$6 {
		constructor(defaults$2) {
			super(defaults$2);
			this.type = "atrule";
		}
		append(...children) {
			if (!this.proxyOf.nodes) this.nodes = [];
			return super.append(...children);
		}
		prepend(...children) {
			if (!this.proxyOf.nodes) this.nodes = [];
			return super.prepend(...children);
		}
	};
	module.exports = AtRule$3;
	AtRule$3.default = AtRule$3;
	Container$6.registerAtRule(AtRule$3);
}));
var require_document = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Container$5 = require_container();
	var LazyResult$4, Processor$3;
	var Document$3 = class extends Container$5 {
		constructor(defaults$2) {
			super({
				type: "document",
				...defaults$2
			});
			if (!this.nodes) this.nodes = [];
		}
		toResult(opts = {}) {
			return new LazyResult$4(new Processor$3(), this, opts).stringify();
		}
	};
	Document$3.registerLazyResult = (dependant) => {
		LazyResult$4 = dependant;
	};
	Document$3.registerProcessor = (dependant) => {
		Processor$3 = dependant;
	};
	module.exports = Document$3;
	Document$3.default = Document$3;
}));
var require_non_secure = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
	var customAlphabet = (alphabet, defaultSize = 21) => {
		return (size = defaultSize) => {
			let id = "";
			let i = size | 0;
			while (i--) id += alphabet[Math.random() * alphabet.length | 0];
			return id;
		};
	};
	var nanoid$1 = (size = 21) => {
		let id = "";
		let i = size | 0;
		while (i--) id += urlAlphabet[Math.random() * 64 | 0];
		return id;
	};
	module.exports = {
		nanoid: nanoid$1,
		customAlphabet
	};
}));
var source_map_js_shim_exports = /* @__PURE__ */ __export({ default: () => source_map_js_shim_default });
var source_map_js_shim_default;
var init_source_map_js_shim = __esmMin((() => {
	source_map_js_shim_default = {};
}));
var require_object_inspect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist();
	var hasMap = typeof Map === "function" && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === "function" && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
	var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
	var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
	var booleanValueOf = Boolean.prototype.valueOf;
	var objectToString = Object.prototype.toString;
	var functionToString = Function.prototype.toString;
	var $match = String.prototype.match;
	var $slice = String.prototype.slice;
	var $replace = String.prototype.replace;
	var $toUpperCase = String.prototype.toUpperCase;
	var $toLowerCase = String.prototype.toLowerCase;
	var $test = RegExp.prototype.test;
	var $concat = Array.prototype.concat;
	var $join = Array.prototype.join;
	var $arrSlice = Array.prototype.slice;
	var $floor = Math.floor;
	var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
	var gOPS = Object.getOwnPropertySymbols;
	var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
	var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
	var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
		return O.__proto__;
	} : null);
	function addNumericSeparator(num, str) {
		if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
		var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
		if (typeof num === "number") {
			var int = num < 0 ? -$floor(-num) : $floor(num);
			if (int !== num) {
				var intStr = String(int);
				var dec = $slice.call(str, intStr.length + 1);
				return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
			}
		}
		return $replace.call(str, sepRegex, "$&_");
	}
	var utilInspect = require___vite_browser_external();
	var inspectCustom = utilInspect.custom;
	var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
	var quotes = {
		__proto__: null,
		"double": "\"",
		single: "'"
	};
	var quoteREs = {
		__proto__: null,
		"double": /(["\\])/g,
		single: /(['\\])/g
	};
	module.exports = function inspect_(obj, options, depth, seen) {
		var opts = options || {};
		if (has$4(opts, "quoteStyle") && !has$4(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
		if (has$4(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
		var customInspect = has$4(opts, "customInspect") ? opts.customInspect : true;
		if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
		if (has$4(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
		if (has$4(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
		var numericSeparator = opts.numericSeparator;
		if (typeof obj === "undefined") return "undefined";
		if (obj === null) return "null";
		if (typeof obj === "boolean") return obj ? "true" : "false";
		if (typeof obj === "string") return inspectString(obj, opts);
		if (typeof obj === "number") {
			if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
			var str = String(obj);
			return numericSeparator ? addNumericSeparator(obj, str) : str;
		}
		if (typeof obj === "bigint") {
			var bigIntStr = String(obj) + "n";
			return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
		}
		var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
		if (typeof depth === "undefined") depth = 0;
		if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray$3(obj) ? "[Array]" : "[Object]";
		var indent = getIndent(opts, depth);
		if (typeof seen === "undefined") seen = [];
		else if (indexOf(seen, obj) >= 0) return "[Circular]";
		function inspect$1(value, from, noIndent) {
			if (from) {
				seen = $arrSlice.call(seen);
				seen.push(from);
			}
			if (noIndent) {
				var newOpts = { depth: opts.depth };
				if (has$4(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
				return inspect_(value, newOpts, depth + 1, seen);
			}
			return inspect_(value, opts, depth + 1, seen);
		}
		if (typeof obj === "function" && !isRegExp$1(obj)) {
			var name = nameOf(obj);
			var keys = arrObjKeys(obj, inspect$1);
			return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
		}
		if (isSymbol(obj)) {
			var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
			return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
		}
		if (isElement(obj)) {
			var s = "<" + $toLowerCase.call(String(obj.nodeName));
			var attrs = obj.attributes || [];
			for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
			s += ">";
			if (obj.childNodes && obj.childNodes.length) s += "...";
			s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
			return s;
		}
		if (isArray$3(obj)) {
			if (obj.length === 0) return "[]";
			var xs = arrObjKeys(obj, inspect$1);
			if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
			return "[ " + $join.call(xs, ", ") + " ]";
		}
		if (isError(obj)) {
			var parts = arrObjKeys(obj, inspect$1);
			if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect$1(obj.cause), parts), ", ") + " }";
			if (parts.length === 0) return "[" + String(obj) + "]";
			return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
		}
		if (typeof obj === "object" && customInspect) {
			if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
			else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
		}
		if (isMap(obj)) {
			var mapParts = [];
			if (mapForEach) mapForEach.call(obj, function(value, key) {
				mapParts.push(inspect$1(key, obj, true) + " => " + inspect$1(value, obj));
			});
			return collectionOf("Map", mapSize.call(obj), mapParts, indent);
		}
		if (isSet(obj)) {
			var setParts = [];
			if (setForEach) setForEach.call(obj, function(value) {
				setParts.push(inspect$1(value, obj));
			});
			return collectionOf("Set", setSize.call(obj), setParts, indent);
		}
		if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
		if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
		if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
		if (isNumber(obj)) return markBoxed(inspect$1(Number(obj)));
		if (isBigInt(obj)) return markBoxed(inspect$1(bigIntValueOf.call(obj)));
		if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
		if (isString(obj)) return markBoxed(inspect$1(String(obj)));
		if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
		if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
		if (!isDate(obj) && !isRegExp$1(obj)) {
			var ys = arrObjKeys(obj, inspect$1);
			var isPlainObject$2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
			var protoTag = obj instanceof Object ? "" : "null prototype";
			var stringTag = !isPlainObject$2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
			var tag = (isPlainObject$2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
			if (ys.length === 0) return tag + "{}";
			if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
			return tag + "{ " + $join.call(ys, ", ") + " }";
		}
		return String(obj);
	};
	function wrapQuotes(s, defaultStyle, opts) {
		var quoteChar = quotes[opts.quoteStyle || defaultStyle];
		return quoteChar + s + quoteChar;
	}
	function quote(s) {
		return $replace.call(String(s), /"/g, "&quot;");
	}
	function canTrustToString(obj) {
		return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
	}
	function isArray$3(obj) {
		return toStr(obj) === "[object Array]" && canTrustToString(obj);
	}
	function isDate(obj) {
		return toStr(obj) === "[object Date]" && canTrustToString(obj);
	}
	function isRegExp$1(obj) {
		return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
	}
	function isError(obj) {
		return toStr(obj) === "[object Error]" && canTrustToString(obj);
	}
	function isString(obj) {
		return toStr(obj) === "[object String]" && canTrustToString(obj);
	}
	function isNumber(obj) {
		return toStr(obj) === "[object Number]" && canTrustToString(obj);
	}
	function isBoolean(obj) {
		return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
	}
	function isSymbol(obj) {
		if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
		if (typeof obj === "symbol") return true;
		if (!obj || typeof obj !== "object" || !symToString) return false;
		try {
			symToString.call(obj);
			return true;
		} catch (e) {}
		return false;
	}
	function isBigInt(obj) {
		if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
		try {
			bigIntValueOf.call(obj);
			return true;
		} catch (e) {}
		return false;
	}
	var hasOwn = Object.prototype.hasOwnProperty || function(key) {
		return key in this;
	};
	function has$4(obj, key) {
		return hasOwn.call(obj, key);
	}
	function toStr(obj) {
		return objectToString.call(obj);
	}
	function nameOf(f) {
		if (f.name) return f.name;
		var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
		if (m) return m[1];
		return null;
	}
	function indexOf(xs, x$1) {
		if (xs.indexOf) return xs.indexOf(x$1);
		for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x$1) return i;
		return -1;
	}
	function isMap(x$1) {
		if (!mapSize || !x$1 || typeof x$1 !== "object") return false;
		try {
			mapSize.call(x$1);
			try {
				setSize.call(x$1);
			} catch (s) {
				return true;
			}
			return x$1 instanceof Map;
		} catch (e) {}
		return false;
	}
	function isWeakMap(x$1) {
		if (!weakMapHas || !x$1 || typeof x$1 !== "object") return false;
		try {
			weakMapHas.call(x$1, weakMapHas);
			try {
				weakSetHas.call(x$1, weakSetHas);
			} catch (s) {
				return true;
			}
			return x$1 instanceof WeakMap;
		} catch (e) {}
		return false;
	}
	function isWeakRef(x$1) {
		if (!weakRefDeref || !x$1 || typeof x$1 !== "object") return false;
		try {
			weakRefDeref.call(x$1);
			return true;
		} catch (e) {}
		return false;
	}
	function isSet(x$1) {
		if (!setSize || !x$1 || typeof x$1 !== "object") return false;
		try {
			setSize.call(x$1);
			try {
				mapSize.call(x$1);
			} catch (m) {
				return true;
			}
			return x$1 instanceof Set;
		} catch (e) {}
		return false;
	}
	function isWeakSet(x$1) {
		if (!weakSetHas || !x$1 || typeof x$1 !== "object") return false;
		try {
			weakSetHas.call(x$1, weakSetHas);
			try {
				weakMapHas.call(x$1, weakMapHas);
			} catch (s) {
				return true;
			}
			return x$1 instanceof WeakSet;
		} catch (e) {}
		return false;
	}
	function isElement(x$1) {
		if (!x$1 || typeof x$1 !== "object") return false;
		if (typeof HTMLElement !== "undefined" && x$1 instanceof HTMLElement) return true;
		return typeof x$1.nodeName === "string" && typeof x$1.getAttribute === "function";
	}
	function inspectString(str, opts) {
		if (str.length > opts.maxStringLength) {
			var remaining = str.length - opts.maxStringLength;
			var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
			return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
		}
		var quoteRE = quoteREs[opts.quoteStyle || "single"];
		quoteRE.lastIndex = 0;
		return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
	}
	function lowbyte(c) {
		var n = c.charCodeAt(0);
		var x$1 = {
			8: "b",
			9: "t",
			10: "n",
			12: "f",
			13: "r"
		}[n];
		if (x$1) return "\\" + x$1;
		return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
	}
	function markBoxed(str) {
		return "Object(" + str + ")";
	}
	function weakCollectionOf(type) {
		return type + " { ? }";
	}
	function collectionOf(type, size, entries, indent) {
		var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
		return type + " (" + size + ") {" + joinedEntries + "}";
	}
	function singleLineValues(xs) {
		for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
		return true;
	}
	function getIndent(opts, depth) {
		var baseIndent;
		if (opts.indent === "	") baseIndent = "	";
		else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
		else return null;
		return {
			base: baseIndent,
			prev: $join.call(Array(depth + 1), baseIndent)
		};
	}
	function indentedJoin(xs, indent) {
		if (xs.length === 0) return "";
		var lineJoiner = "\n" + indent.prev + indent.base;
		return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
	}
	function arrObjKeys(obj, inspect$1) {
		var isArr = isArray$3(obj);
		var xs = [];
		if (isArr) {
			xs.length = obj.length;
			for (var i = 0; i < obj.length; i++) xs[i] = has$4(obj, i) ? inspect$1(obj[i], obj) : "";
		}
		var syms = typeof gOPS === "function" ? gOPS(obj) : [];
		var symMap;
		if (hasShammedSymbols) {
			symMap = {};
			for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
		}
		for (var key in obj) {
			if (!has$4(obj, key)) continue;
			if (isArr && String(Number(key)) === key && key < obj.length) continue;
			if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
			else if ($test.call(/[^\w$]/, key)) xs.push(inspect$1(key, obj) + ": " + inspect$1(obj[key], obj));
			else xs.push(key + ": " + inspect$1(obj[key], obj));
		}
		if (typeof gOPS === "function") {
			for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect$1(syms[j]) + "]: " + inspect$1(obj[syms[j]], obj));
		}
		return xs;
	}
}));
var require_side_channel = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var GetIntrinsic = require_get_intrinsic();
	var callBound = require_callBound();
	var inspect = require_object_inspect();
	var $TypeError = GetIntrinsic("%TypeError%");
	var $WeakMap = GetIntrinsic("%WeakMap%", true);
	var $Map = GetIntrinsic("%Map%", true);
	var $weakMapGet = callBound("WeakMap.prototype.get", true);
	var $weakMapSet = callBound("WeakMap.prototype.set", true);
	var $weakMapHas = callBound("WeakMap.prototype.has", true);
	var $mapGet = callBound("Map.prototype.get", true);
	var $mapSet = callBound("Map.prototype.set", true);
	var $mapHas = callBound("Map.prototype.has", true);
	var listGetNode = function(list$3, key) {
		for (var prev = list$3, curr; (curr = prev.next) !== null; prev = curr) if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list$3.next;
			list$3.next = curr;
			return curr;
		}
	};
	var listGet = function(objects, key) {
		var node = listGetNode(objects, key);
		return node && node.value;
	};
	var listSet = function(objects, key, value) {
		var node = listGetNode(objects, key);
		if (node) node.value = value;
		else objects.next = {
			key,
			next: objects.next,
			value
		};
	};
	var listHas = function(objects, key) {
		return !!listGetNode(objects, key);
	};
	module.exports = function getSideChannel$1() {
		var $wm;
		var $m;
		var $o;
		var channel = {
			assert: function(key) {
				if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
			},
			get: function(key) {
				if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
					if ($wm) return $weakMapGet($wm, key);
				} else if ($Map) {
					if ($m) return $mapGet($m, key);
				} else if ($o) return listGet($o, key);
			},
			has: function(key) {
				if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
					if ($wm) return $weakMapHas($wm, key);
				} else if ($Map) {
					if ($m) return $mapHas($m, key);
				} else if ($o) return listHas($o, key);
				return false;
			},
			set: function(key, value) {
				if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
					if (!$wm) $wm = new $WeakMap();
					$weakMapSet($wm, key, value);
				} else if ($Map) {
					if (!$m) $m = new $Map();
					$mapSet($m, key, value);
				} else {
					if (!$o) $o = {
						key: {},
						next: null
					};
					listSet($o, key, value);
				}
			}
		};
		return channel;
	};
}));
var require_formats = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;
	var Format = {
		RFC1738: "RFC1738",
		RFC3986: "RFC3986"
	};
	module.exports = {
		"default": Format.RFC3986,
		formatters: {
			RFC1738: function(value) {
				return replace.call(value, percentTwenties, "+");
			},
			RFC3986: function(value) {
				return String(value);
			}
		},
		RFC1738: Format.RFC1738,
		RFC3986: Format.RFC3986
	};
}));
var require_utils = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var formats$2 = require_formats();
	var has$3 = Object.prototype.hasOwnProperty;
	var isArray$2 = Array.isArray;
	var hexTable = function() {
		var array = [];
		for (var i = 0; i < 256; ++i) array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
		return array;
	}();
	var compactQueue = function compactQueue$1(queue) {
		while (queue.length > 1) {
			var item = queue.pop();
			var obj = item.obj[item.prop];
			if (isArray$2(obj)) {
				var compacted = [];
				for (var j = 0; j < obj.length; ++j) if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
				item.obj[item.prop] = compacted;
			}
		}
	};
	var arrayToObject = function arrayToObject$1(source, options) {
		var obj = options && options.plainObjects ? Object.create(null) : {};
		for (var i = 0; i < source.length; ++i) if (typeof source[i] !== "undefined") obj[i] = source[i];
		return obj;
	};
	var merge = function merge$1(target, source, options) {
		if (!source) return target;
		if (typeof source !== "object") {
			if (isArray$2(target)) target.push(source);
			else if (target && typeof target === "object") {
				if (options && (options.plainObjects || options.allowPrototypes) || !has$3.call(Object.prototype, source)) target[source] = true;
			} else return [target, source];
			return target;
		}
		if (!target || typeof target !== "object") return [target].concat(source);
		var mergeTarget = target;
		if (isArray$2(target) && !isArray$2(source)) mergeTarget = arrayToObject(target, options);
		if (isArray$2(target) && isArray$2(source)) {
			source.forEach(function(item, i) {
				if (has$3.call(target, i)) {
					var targetItem = target[i];
					if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge$1(targetItem, item, options);
					else target.push(item);
				} else target[i] = item;
			});
			return target;
		}
		return Object.keys(source).reduce(function(acc, key) {
			var value = source[key];
			if (has$3.call(acc, key)) acc[key] = merge$1(acc[key], value, options);
			else acc[key] = value;
			return acc;
		}, mergeTarget);
	};
	var assign = function assignSingleSource(target, source) {
		return Object.keys(source).reduce(function(acc, key) {
			acc[key] = source[key];
			return acc;
		}, target);
	};
	var decode = function(str, decoder, charset) {
		var strWithoutPlus = str.replace(/\+/g, " ");
		if (charset === "iso-8859-1") return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
		try {
			return decodeURIComponent(strWithoutPlus);
		} catch (e) {
			return strWithoutPlus;
		}
	};
	module.exports = {
		arrayToObject,
		assign,
		combine: function combine$1(a, b) {
			return [].concat(a, b);
		},
		compact: function compact$1(value) {
			var queue = [{
				obj: { o: value },
				prop: "o"
			}];
			var refs = [];
			for (var i = 0; i < queue.length; ++i) {
				var item = queue[i];
				var obj = item.obj[item.prop];
				var keys = Object.keys(obj);
				for (var j = 0; j < keys.length; ++j) {
					var key = keys[j];
					var val = obj[key];
					if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
						queue.push({
							obj,
							prop: key
						});
						refs.push(val);
					}
				}
			}
			compactQueue(queue);
			return value;
		},
		decode,
		encode: function encode$2(str, defaultEncoder, charset, kind, format$1) {
			if (str.length === 0) return str;
			var string = str;
			if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
			else if (typeof str !== "string") string = String(str);
			if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
				return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
			});
			var out = "";
			for (var i = 0; i < string.length; ++i) {
				var c = string.charCodeAt(i);
				if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format$1 === formats$2.RFC1738 && (c === 40 || c === 41)) {
					out += string.charAt(i);
					continue;
				}
				if (c < 128) {
					out = out + hexTable[c];
					continue;
				}
				if (c < 2048) {
					out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
					continue;
				}
				if (c < 55296 || c >= 57344) {
					out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
					continue;
				}
				i += 1;
				c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
				out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
			}
			return out;
		},
		isBuffer: function isBuffer$1(obj) {
			if (!obj || typeof obj !== "object") return false;
			return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
		},
		isRegExp: function isRegExp$2(obj) {
			return Object.prototype.toString.call(obj) === "[object RegExp]";
		},
		maybeMap: function maybeMap$1(val, fn) {
			if (isArray$2(val)) {
				var mapped = [];
				for (var i = 0; i < val.length; i += 1) mapped.push(fn(val[i]));
				return mapped;
			}
			return fn(val);
		},
		merge
	};
}));
var require_stringify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getSideChannel = require_side_channel();
	var utils$1 = require_utils();
	var formats$1 = require_formats();
	var has$2 = Object.prototype.hasOwnProperty;
	var arrayPrefixGenerators = {
		brackets: function brackets(prefix) {
			return prefix + "[]";
		},
		comma: "comma",
		indices: function indices(prefix, key) {
			return prefix + "[" + key + "]";
		},
		repeat: function repeat(prefix) {
			return prefix;
		}
	};
	var isArray$1 = Array.isArray;
	var split = String.prototype.split;
	var push = Array.prototype.push;
	var pushToArray = function(arr, valueOrArray) {
		push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
	};
	var toISO = Date.prototype.toISOString;
	var defaultFormat = formats$1["default"];
	var defaults$1 = {
		addQueryPrefix: false,
		allowDots: false,
		charset: "utf-8",
		charsetSentinel: false,
		delimiter: "&",
		encode: true,
		encoder: utils$1.encode,
		encodeValuesOnly: false,
		format: defaultFormat,
		formatter: formats$1.formatters[defaultFormat],
		indices: false,
		serializeDate: function serializeDate(date) {
			return toISO.call(date);
		},
		skipNulls: false,
		strictNullHandling: false
	};
	var isNonNullishPrimitive = function isNonNullishPrimitive$1(v) {
		return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
	};
	var sentinel = {};
	var stringify$4 = function stringify$7(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter$3, sort, allowDots, serializeDate, format$1, formatter, encodeValuesOnly, charset, sideChannel) {
		var obj = object;
		var tmpSc = sideChannel;
		var step = 0;
		var findFlag = false;
		while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
			var pos = tmpSc.get(object);
			step += 1;
			if (typeof pos !== "undefined") if (pos === step) throw new RangeError("Cyclic object value");
			else findFlag = true;
			if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
		}
		if (typeof filter$3 === "function") obj = filter$3(prefix, obj);
		else if (obj instanceof Date) obj = serializeDate(obj);
		else if (generateArrayPrefix === "comma" && isArray$1(obj)) obj = utils$1.maybeMap(obj, function(value$1) {
			if (value$1 instanceof Date) return serializeDate(value$1);
			return value$1;
		});
		if (obj === null) {
			if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, "key", format$1) : prefix;
			obj = "";
		}
		if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
			if (encoder) {
				var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, "key", format$1);
				if (generateArrayPrefix === "comma" && encodeValuesOnly) {
					var valuesArray = split.call(String(obj), ",");
					var valuesJoined = "";
					for (var i = 0; i < valuesArray.length; ++i) valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, "value", format$1));
					return [formatter(keyValue) + (commaRoundTrip && isArray$1(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
				}
				return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset, "value", format$1))];
			}
			return [formatter(prefix) + "=" + formatter(String(obj))];
		}
		var values = [];
		if (typeof obj === "undefined") return values;
		var objKeys;
		if (generateArrayPrefix === "comma" && isArray$1(obj)) objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
		else if (isArray$1(filter$3)) objKeys = filter$3;
		else {
			var keys = Object.keys(obj);
			objKeys = sort ? keys.sort(sort) : keys;
		}
		var adjustedPrefix = commaRoundTrip && isArray$1(obj) && obj.length === 1 ? prefix + "[]" : prefix;
		for (var j = 0; j < objKeys.length; ++j) {
			var key = objKeys[j];
			var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
			if (skipNulls && value === null) continue;
			var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
			sideChannel.set(object, step);
			var valueSideChannel = getSideChannel();
			valueSideChannel.set(sentinel, sideChannel);
			pushToArray(values, stringify$7(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter$3, sort, allowDots, serializeDate, format$1, formatter, encodeValuesOnly, charset, valueSideChannel));
		}
		return values;
	};
	var normalizeStringifyOptions = function normalizeStringifyOptions$1(opts) {
		if (!opts) return defaults$1;
		if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
		var charset = opts.charset || defaults$1.charset;
		if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
		var format$1 = formats$1["default"];
		if (typeof opts.format !== "undefined") {
			if (!has$2.call(formats$1.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
			format$1 = opts.format;
		}
		var formatter = formats$1.formatters[format$1];
		var filter$3 = defaults$1.filter;
		if (typeof opts.filter === "function" || isArray$1(opts.filter)) filter$3 = opts.filter;
		return {
			addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
			allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
			charset,
			charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
			delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
			encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
			encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
			encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
			filter: filter$3,
			format: format$1,
			formatter,
			serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
			skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
			sort: typeof opts.sort === "function" ? opts.sort : null,
			strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
		};
	};
	module.exports = function(object, opts) {
		var obj = object;
		var options = normalizeStringifyOptions(opts);
		var objKeys;
		var filter$3;
		if (typeof options.filter === "function") {
			filter$3 = options.filter;
			obj = filter$3("", obj);
		} else if (isArray$1(options.filter)) {
			filter$3 = options.filter;
			objKeys = filter$3;
		}
		var keys = [];
		if (typeof obj !== "object" || obj === null) return "";
		var arrayFormat;
		if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
		else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
		else arrayFormat = "indices";
		var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
		if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
		var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
		if (!objKeys) objKeys = Object.keys(obj);
		if (options.sort) objKeys.sort(options.sort);
		var sideChannel = getSideChannel();
		for (var i = 0; i < objKeys.length; ++i) {
			var key = objKeys[i];
			if (options.skipNulls && obj[key] === null) continue;
			pushToArray(keys, stringify$4(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
		}
		var joined = keys.join(options.delimiter);
		var prefix = options.addQueryPrefix === true ? "?" : "";
		if (options.charsetSentinel) if (options.charset === "iso-8859-1") prefix += "utf8=%26%2310003%3B&";
		else prefix += "utf8=%E2%9C%93&";
		return joined.length > 0 ? prefix + joined : "";
	};
}));
var require_parse$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var utils = require_utils();
	var has$1 = Object.prototype.hasOwnProperty;
	var isArray = Array.isArray;
	var defaults = {
		allowDots: false,
		allowPrototypes: false,
		allowSparse: false,
		arrayLimit: 20,
		charset: "utf-8",
		charsetSentinel: false,
		comma: false,
		decoder: utils.decode,
		delimiter: "&",
		depth: 5,
		ignoreQueryPrefix: false,
		interpretNumericEntities: false,
		parameterLimit: 1e3,
		parseArrays: true,
		plainObjects: false,
		strictNullHandling: false
	};
	var interpretNumericEntities = function(str) {
		return str.replace(/&#(\d+);/g, function($0, numberStr) {
			return String.fromCharCode(parseInt(numberStr, 10));
		});
	};
	var parseArrayValue = function(val, options) {
		if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
		return val;
	};
	var isoSentinel = "utf8=%26%2310003%3B";
	var charsetSentinel = "utf8=%E2%9C%93";
	var parseValues = function parseQueryStringValues(str, options) {
		var obj = {};
		var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
		var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
		var parts = cleanStr.split(options.delimiter, limit);
		var skipIndex = -1;
		var i;
		var charset = options.charset;
		if (options.charsetSentinel) {
			for (i = 0; i < parts.length; ++i) if (parts[i].indexOf("utf8=") === 0) {
				if (parts[i] === charsetSentinel) charset = "utf-8";
				else if (parts[i] === isoSentinel) charset = "iso-8859-1";
				skipIndex = i;
				i = parts.length;
			}
		}
		for (i = 0; i < parts.length; ++i) {
			if (i === skipIndex) continue;
			var part = parts[i];
			var bracketEqualsPos = part.indexOf("]=");
			var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
			var key, val;
			if (pos === -1) {
				key = options.decoder(part, defaults.decoder, charset, "key");
				val = options.strictNullHandling ? null : "";
			} else {
				key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
				val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
					return options.decoder(encodedVal, defaults.decoder, charset, "value");
				});
			}
			if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
			if (part.indexOf("[]=") > -1) val = isArray(val) ? [val] : val;
			if (has$1.call(obj, key)) obj[key] = utils.combine(obj[key], val);
			else obj[key] = val;
		}
		return obj;
	};
	var parseObject = function(chain, val, options, valuesParsed) {
		var leaf = valuesParsed ? val : parseArrayValue(val, options);
		for (var i = chain.length - 1; i >= 0; --i) {
			var obj;
			var root = chain[i];
			if (root === "[]" && options.parseArrays) obj = [].concat(leaf);
			else {
				obj = options.plainObjects ? Object.create(null) : {};
				var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
				var index = parseInt(cleanRoot, 10);
				if (!options.parseArrays && cleanRoot === "") obj = { 0: leaf };
				else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
					obj = [];
					obj[index] = leaf;
				} else if (cleanRoot !== "__proto__") obj[cleanRoot] = leaf;
			}
			leaf = obj;
		}
		return leaf;
	};
	var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
		if (!givenKey) return;
		var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
		var brackets = /(\[[^[\]]*])/;
		var child = /(\[[^[\]]*])/g;
		var segment = options.depth > 0 && brackets.exec(key);
		var parent = segment ? key.slice(0, segment.index) : key;
		var keys = [];
		if (parent) {
			if (!options.plainObjects && has$1.call(Object.prototype, parent)) {
				if (!options.allowPrototypes) return;
			}
			keys.push(parent);
		}
		var i = 0;
		while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
			i += 1;
			if (!options.plainObjects && has$1.call(Object.prototype, segment[1].slice(1, -1))) {
				if (!options.allowPrototypes) return;
			}
			keys.push(segment[1]);
		}
		if (segment) keys.push("[" + key.slice(segment.index) + "]");
		return parseObject(keys, val, options, valuesParsed);
	};
	var normalizeParseOptions = function normalizeParseOptions$1(opts) {
		if (!opts) return defaults;
		if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
		if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
		var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
		return {
			allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
			allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
			allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
			arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
			charset,
			charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
			comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
			decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
			delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
			depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
			ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
			interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
			parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
			parseArrays: opts.parseArrays !== false,
			plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
			strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
		};
	};
	module.exports = function(str, opts) {
		var options = normalizeParseOptions(opts);
		if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
		var tempObj = typeof str === "string" ? parseValues(str, options) : str;
		var obj = options.plainObjects ? Object.create(null) : {};
		var keys = Object.keys(tempObj);
		for (var i = 0; i < keys.length; ++i) {
			var key = keys[i];
			var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
			obj = utils.merge(obj, newObj, options);
		}
		if (options.allowSparse === true) return obj;
		return utils.compact(obj);
	};
}));
var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var stringify$3 = require_stringify();
	var parse$5 = require_parse$1();
	module.exports = {
		formats: require_formats(),
		parse: parse$5,
		stringify: stringify$3
	};
}));
var url_exports = /* @__PURE__ */ __export({
	URL: () => URL$1,
	URLSearchParams: () => URLSearchParams,
	Url: () => UrlImport,
	default: () => api,
	domainToASCII: () => domainToASCII,
	domainToUnicode: () => domainToUnicode,
	fileURLToPath: () => fileURLToPath$1,
	format: () => formatImportWithOverloads,
	parse: () => parseImport,
	pathToFileURL: () => pathToFileURL$2,
	resolve: () => resolveImport,
	resolveObject: () => resolveObject
});
function Url() {
	this.protocol = null;
	this.slashes = null;
	this.auth = null;
	this.host = null;
	this.port = null;
	this.hostname = null;
	this.hash = null;
	this.search = null;
	this.query = null;
	this.pathname = null;
	this.path = null;
	this.href = null;
}
function urlParse(url, parseQueryString, slashesDenoteHost) {
	if (url && typeof url === "object" && url instanceof Url) return url;
	var u = new Url();
	u.parse(url, parseQueryString, slashesDenoteHost);
	return u;
}
function urlFormat(obj) {
	if (typeof obj === "string") obj = urlParse(obj);
	if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	return obj.format();
}
function urlResolve(source, relative$1) {
	return urlParse(source, false, true).resolve(relative$1);
}
function urlResolveObject(source, relative$1) {
	if (!source) return relative$1;
	return urlParse(source, false, true).resolveObject(relative$1);
}
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
function resolve$2() {
	var resolvedPath = "", resolvedAbsolute = false;
	for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
		var path = i >= 0 ? arguments[i] : "/";
		if (typeof path !== "string") throw new TypeError("Arguments to path.resolve must be strings");
		else if (!path) continue;
		resolvedPath = path + "/" + resolvedPath;
		resolvedAbsolute = path.charAt(0) === "/";
	}
	resolvedPath = normalizeArray(filter$1(resolvedPath.split("/"), function(p) {
		return !!p;
	}), !resolvedAbsolute).join("/");
	return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
}
function filter$1(xs, f) {
	if (xs.filter) return xs.filter(f);
	var res = [];
	for (var i = 0; i < xs.length; i++) if (f(xs[i], i, xs)) res.push(xs[i]);
	return res;
}
function isURLInstance(instance) {
	var resolved = instance != null ? instance : null;
	return Boolean(resolved !== null && (resolved == null ? void 0 : resolved.href) && (resolved == null ? void 0 : resolved.origin));
}
function getPathFromURLPosix(url) {
	if (url.hostname !== "") throw new TypeError("File URL host must be \"localhost\" or empty on browser");
	var pathname = url.pathname;
	for (var n = 0; n < pathname.length; n++) if (pathname[n] === "%") {
		var third = pathname.codePointAt(n + 2) | 32;
		if (pathname[n + 1] === "2" && third === 102) throw new TypeError("File URL path must not include encoded / characters");
	}
	return decodeURIComponent(pathname);
}
function encodePathChars(filepath) {
	if (filepath.includes("%")) filepath = filepath.replace(percentRegEx, "%25");
	if (filepath.includes("\\")) filepath = filepath.replace(backslashRegEx, "%5C");
	if (filepath.includes("\n")) filepath = filepath.replace(newlineRegEx, "%0A");
	if (filepath.includes("\r")) filepath = filepath.replace(carriageReturnRegEx, "%0D");
	if (filepath.includes("	")) filepath = filepath.replace(tabRegEx, "%09");
	return filepath;
}
var import_punycode, import_lib, punycode, protocolPattern, portPattern, simplePathPattern, unwise, autoEscape, nonHostChars, hostEndingChars, hostnameMaxLen, hostnamePartPattern, hostnamePartStart, unsafeProtocol, hostlessProtocol, slashedProtocol, querystring, parse$4, resolve$1$1, resolveObject, format, Url_1, _globalThis, formatImport, parseImport, resolveImport, UrlImport, URL$1, URLSearchParams, percentRegEx, backslashRegEx, newlineRegEx, carriageReturnRegEx, tabRegEx, CHAR_FORWARD_SLASH, domainToASCII, domainToUnicode, pathToFileURL$2, fileURLToPath$1, formatImportWithOverloads, api;
var init_url = __esmMin((() => {
	import_punycode = /* @__PURE__ */ __toESM(require_punycode());
	import_lib = /* @__PURE__ */ __toESM(require_lib());
	punycode = import_punycode.default;
	protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, unwise = [
		"{",
		"}",
		"|",
		"\\",
		"^",
		"`"
	].concat([
		"<",
		">",
		"\"",
		"`",
		" ",
		"\r",
		"\n",
		"	"
	]), autoEscape = ["'"].concat(unwise), nonHostChars = [
		"%",
		"/",
		"?",
		";",
		"#"
	].concat(autoEscape), hostEndingChars = [
		"/",
		"?",
		"#"
	], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
		javascript: true,
		"javascript:": true
	}, hostlessProtocol = {
		javascript: true,
		"javascript:": true
	}, slashedProtocol = {
		http: true,
		https: true,
		ftp: true,
		gopher: true,
		file: true,
		"http:": true,
		"https:": true,
		"ftp:": true,
		"gopher:": true,
		"file:": true
	}, querystring = import_lib.default;
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
		if (typeof url !== "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
		var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter);
		uSplit[0] = uSplit[0].replace(/\\/g, "/");
		url = uSplit.join(splitter);
		var rest = url;
		rest = rest.trim();
		if (!slashesDenoteHost && url.split("#").length === 1) {
			var simplePath = simplePathPattern.exec(rest);
			if (simplePath) {
				this.path = rest;
				this.href = rest;
				this.pathname = simplePath[1];
				if (simplePath[2]) {
					this.search = simplePath[2];
					if (parseQueryString) this.query = querystring.parse(this.search.substr(1));
					else this.query = this.search.substr(1);
				} else if (parseQueryString) {
					this.search = "";
					this.query = {};
				}
				return this;
			}
		}
		var proto = protocolPattern.exec(rest);
		if (proto) {
			proto = proto[0];
			var lowerProto = proto.toLowerCase();
			this.protocol = lowerProto;
			rest = rest.substr(proto.length);
		}
		if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
			var slashes = rest.substr(0, 2) === "//";
			if (slashes && !(proto && hostlessProtocol[proto])) {
				rest = rest.substr(2);
				this.slashes = true;
			}
		}
		if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
			var hostEnd = -1;
			for (var i = 0; i < hostEndingChars.length; i++) {
				var hec = rest.indexOf(hostEndingChars[i]);
				if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
			}
			var auth, atSign;
			if (hostEnd === -1) atSign = rest.lastIndexOf("@");
			else atSign = rest.lastIndexOf("@", hostEnd);
			if (atSign !== -1) {
				auth = rest.slice(0, atSign);
				rest = rest.slice(atSign + 1);
				this.auth = decodeURIComponent(auth);
			}
			hostEnd = -1;
			for (var i = 0; i < nonHostChars.length; i++) {
				var hec = rest.indexOf(nonHostChars[i]);
				if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
			}
			if (hostEnd === -1) hostEnd = rest.length;
			this.host = rest.slice(0, hostEnd);
			rest = rest.slice(hostEnd);
			this.parseHost();
			this.hostname = this.hostname || "";
			var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
			if (!ipv6Hostname) {
				var hostparts = this.hostname.split(/\./);
				for (var i = 0, l = hostparts.length; i < l; i++) {
					var part = hostparts[i];
					if (!part) continue;
					if (!part.match(hostnamePartPattern)) {
						var newpart = "";
						for (var j = 0, k = part.length; j < k; j++) if (part.charCodeAt(j) > 127) newpart += "x";
						else newpart += part[j];
						if (!newpart.match(hostnamePartPattern)) {
							var validParts = hostparts.slice(0, i);
							var notHost = hostparts.slice(i + 1);
							var bit = part.match(hostnamePartStart);
							if (bit) {
								validParts.push(bit[1]);
								notHost.unshift(bit[2]);
							}
							if (notHost.length) rest = "/" + notHost.join(".") + rest;
							this.hostname = validParts.join(".");
							break;
						}
					}
				}
			}
			if (this.hostname.length > hostnameMaxLen) this.hostname = "";
			else this.hostname = this.hostname.toLowerCase();
			if (!ipv6Hostname) this.hostname = punycode.toASCII(this.hostname);
			var p = this.port ? ":" + this.port : "";
			this.host = (this.hostname || "") + p;
			this.href += this.host;
			if (ipv6Hostname) {
				this.hostname = this.hostname.substr(1, this.hostname.length - 2);
				if (rest[0] !== "/") rest = "/" + rest;
			}
		}
		if (!unsafeProtocol[lowerProto]) for (var i = 0, l = autoEscape.length; i < l; i++) {
			var ae = autoEscape[i];
			if (rest.indexOf(ae) === -1) continue;
			var esc = encodeURIComponent(ae);
			if (esc === ae) esc = escape(ae);
			rest = rest.split(ae).join(esc);
		}
		var hash = rest.indexOf("#");
		if (hash !== -1) {
			this.hash = rest.substr(hash);
			rest = rest.slice(0, hash);
		}
		var qm = rest.indexOf("?");
		if (qm !== -1) {
			this.search = rest.substr(qm);
			this.query = rest.substr(qm + 1);
			if (parseQueryString) this.query = querystring.parse(this.query);
			rest = rest.slice(0, qm);
		} else if (parseQueryString) {
			this.search = "";
			this.query = {};
		}
		if (rest) this.pathname = rest;
		if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "/";
		if (this.pathname || this.search) {
			var p = this.pathname || "";
			this.path = p + (this.search || "");
		}
		this.href = this.format();
		return this;
	};
	Url.prototype.format = function() {
		var auth = this.auth || "";
		if (auth) {
			auth = encodeURIComponent(auth);
			auth = auth.replace(/%3A/i, ":");
			auth += "@";
		}
		var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
		if (this.host) host = auth + this.host;
		else if (this.hostname) {
			host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
			if (this.port) host += ":" + this.port;
		}
		if (this.query && typeof this.query === "object" && Object.keys(this.query).length) query = querystring.stringify(this.query, {
			arrayFormat: "repeat",
			addQueryPrefix: false
		});
		var search = this.search || query && "?" + query || "";
		if (protocol && protocol.substr(-1) !== ":") protocol += ":";
		if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
			host = "//" + (host || "");
			if (pathname && pathname.charAt(0) !== "/") pathname = "/" + pathname;
		} else if (!host) host = "";
		if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
		if (search && search.charAt(0) !== "?") search = "?" + search;
		pathname = pathname.replace(/[?#]/g, function(match) {
			return encodeURIComponent(match);
		});
		search = search.replace("#", "%23");
		return protocol + host + pathname + search + hash;
	};
	Url.prototype.resolve = function(relative$1) {
		return this.resolveObject(urlParse(relative$1, false, true)).format();
	};
	Url.prototype.resolveObject = function(relative$1) {
		if (typeof relative$1 === "string") {
			var rel = new Url();
			rel.parse(relative$1, false, true);
			relative$1 = rel;
		}
		var result = new Url();
		var tkeys = Object.keys(this);
		for (var tk = 0; tk < tkeys.length; tk++) {
			var tkey = tkeys[tk];
			result[tkey] = this[tkey];
		}
		result.hash = relative$1.hash;
		if (relative$1.href === "") {
			result.href = result.format();
			return result;
		}
		if (relative$1.slashes && !relative$1.protocol) {
			var rkeys = Object.keys(relative$1);
			for (var rk = 0; rk < rkeys.length; rk++) {
				var rkey = rkeys[rk];
				if (rkey !== "protocol") result[rkey] = relative$1[rkey];
			}
			if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
				result.pathname = "/";
				result.path = result.pathname;
			}
			result.href = result.format();
			return result;
		}
		if (relative$1.protocol && relative$1.protocol !== result.protocol) {
			if (!slashedProtocol[relative$1.protocol]) {
				var keys = Object.keys(relative$1);
				for (var v = 0; v < keys.length; v++) {
					var k = keys[v];
					result[k] = relative$1[k];
				}
				result.href = result.format();
				return result;
			}
			result.protocol = relative$1.protocol;
			if (!relative$1.host && !hostlessProtocol[relative$1.protocol]) {
				var relPath = (relative$1.pathname || "").split("/");
				while (relPath.length && !(relative$1.host = relPath.shift()));
				if (!relative$1.host) relative$1.host = "";
				if (!relative$1.hostname) relative$1.hostname = "";
				if (relPath[0] !== "") relPath.unshift("");
				if (relPath.length < 2) relPath.unshift("");
				result.pathname = relPath.join("/");
			} else result.pathname = relative$1.pathname;
			result.search = relative$1.search;
			result.query = relative$1.query;
			result.host = relative$1.host || "";
			result.auth = relative$1.auth;
			result.hostname = relative$1.hostname || relative$1.host;
			result.port = relative$1.port;
			if (result.pathname || result.search) result.path = (result.pathname || "") + (result.search || "");
			result.slashes = result.slashes || relative$1.slashes;
			result.href = result.format();
			return result;
		}
		var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative$1.host || relative$1.pathname && relative$1.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative$1.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative$1.pathname && relative$1.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
		if (psychotic) {
			result.hostname = "";
			result.port = null;
			if (result.host) if (srcPath[0] === "") srcPath[0] = result.host;
			else srcPath.unshift(result.host);
			result.host = "";
			if (relative$1.protocol) {
				relative$1.hostname = null;
				relative$1.port = null;
				if (relative$1.host) if (relPath[0] === "") relPath[0] = relative$1.host;
				else relPath.unshift(relative$1.host);
				relative$1.host = null;
			}
			mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
		}
		if (isRelAbs) {
			result.host = relative$1.host || relative$1.host === "" ? relative$1.host : result.host;
			result.hostname = relative$1.hostname || relative$1.hostname === "" ? relative$1.hostname : result.hostname;
			result.search = relative$1.search;
			result.query = relative$1.query;
			srcPath = relPath;
		} else if (relPath.length) {
			if (!srcPath) srcPath = [];
			srcPath.pop();
			srcPath = srcPath.concat(relPath);
			result.search = relative$1.search;
			result.query = relative$1.query;
		} else if (relative$1.search != null) {
			if (psychotic) {
				result.host = srcPath.shift();
				result.hostname = result.host;
				var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
				if (authInHost) {
					result.auth = authInHost.shift();
					result.hostname = authInHost.shift();
					result.host = result.hostname;
				}
			}
			result.search = relative$1.search;
			result.query = relative$1.query;
			if (result.pathname !== null || result.search !== null) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
			result.href = result.format();
			return result;
		}
		if (!srcPath.length) {
			result.pathname = null;
			if (result.search) result.path = "/" + result.search;
			else result.path = null;
			result.href = result.format();
			return result;
		}
		var last = srcPath.slice(-1)[0];
		var hasTrailingSlash = (result.host || relative$1.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
		var up = 0;
		for (var i = srcPath.length; i >= 0; i--) {
			last = srcPath[i];
			if (last === ".") srcPath.splice(i, 1);
			else if (last === "..") {
				srcPath.splice(i, 1);
				up++;
			} else if (up) {
				srcPath.splice(i, 1);
				up--;
			}
		}
		if (!mustEndAbs && !removeAllDots) for (; up--;) srcPath.unshift("..");
		if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) srcPath.unshift("");
		if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") srcPath.push("");
		var isAbsolute$1 = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
		if (psychotic) {
			result.hostname = isAbsolute$1 ? "" : srcPath.length ? srcPath.shift() : "";
			result.host = result.hostname;
			var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
			if (authInHost) {
				result.auth = authInHost.shift();
				result.hostname = authInHost.shift();
				result.host = result.hostname;
			}
		}
		mustEndAbs = mustEndAbs || result.host && srcPath.length;
		if (mustEndAbs && !isAbsolute$1) srcPath.unshift("");
		if (srcPath.length > 0) result.pathname = srcPath.join("/");
		else {
			result.pathname = null;
			result.path = null;
		}
		if (result.pathname !== null || result.search !== null) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
		result.auth = relative$1.auth || result.auth;
		result.slashes = result.slashes || relative$1.slashes;
		result.href = result.format();
		return result;
	};
	Url.prototype.parseHost = function() {
		var host = this.host;
		var port = portPattern.exec(host);
		if (port) {
			port = port[0];
			if (port !== ":") this.port = port.substr(1);
			host = host.substr(0, host.length - port.length);
		}
		if (host) this.hostname = host;
	};
	parse$4 = urlParse;
	resolve$1$1 = urlResolve;
	resolveObject = urlResolveObject;
	format = urlFormat;
	Url_1 = Url;
	_globalThis = function(Object$1) {
		function get() {
			var _global = this || self;
			delete Object$1.prototype.__magic__;
			return _global;
		}
		if (typeof globalThis === "object") return globalThis;
		if (this) return get();
		else {
			Object$1.defineProperty(Object$1.prototype, "__magic__", {
				configurable: true,
				get
			});
			return __magic__;
		}
	}(Object);
	formatImport = format;
	parseImport = parse$4;
	resolveImport = resolve$1$1;
	UrlImport = Url_1;
	URL$1 = _globalThis.URL;
	URLSearchParams = _globalThis.URLSearchParams;
	percentRegEx = /%/g;
	backslashRegEx = /\\/g;
	newlineRegEx = /\n/g;
	carriageReturnRegEx = /\r/g;
	tabRegEx = /\t/g;
	CHAR_FORWARD_SLASH = 47;
	domainToASCII = function domainToASCII$1(domain) {
		if (typeof domain === "undefined") throw new TypeError("The \"domain\" argument must be specified");
		return new URL$1("http://" + domain).hostname;
	};
	domainToUnicode = function domainToUnicode$1(domain) {
		if (typeof domain === "undefined") throw new TypeError("The \"domain\" argument must be specified");
		return new URL$1("http://" + domain).hostname;
	};
	pathToFileURL$2 = function pathToFileURL$3(filepath) {
		var outURL = new URL$1("file://");
		var resolved = resolve$2(filepath);
		if (filepath.charCodeAt(filepath.length - 1) === CHAR_FORWARD_SLASH && resolved[resolved.length - 1] !== "/") resolved += "/";
		outURL.pathname = encodePathChars(resolved);
		return outURL;
	};
	fileURLToPath$1 = function fileURLToPath$2(path) {
		if (!isURLInstance(path) && typeof path !== "string") throw new TypeError("The \"path\" argument must be of type string or an instance of URL. Received type " + typeof path + " (" + path + ")");
		var resolved = new URL$1(path);
		if (resolved.protocol !== "file:") throw new TypeError("The URL must be of scheme file");
		return getPathFromURLPosix(resolved);
	};
	formatImportWithOverloads = function formatImportWithOverloads$1(urlObject, options) {
		var _options$auth, _options$fragment, _options$search;
		if (options === void 0) options = {};
		if (!(urlObject instanceof URL$1)) return formatImport(urlObject);
		if (typeof options !== "object" || options === null) throw new TypeError("The \"options\" argument must be of type object.");
		var auth = (_options$auth = options.auth) != null ? _options$auth : true;
		var fragment = (_options$fragment = options.fragment) != null ? _options$fragment : true;
		var search = (_options$search = options.search) != null ? _options$search : true;
		options.unicode;
		var parsed = new URL$1(urlObject.toString());
		if (!auth) {
			parsed.username = "";
			parsed.password = "";
		}
		if (!fragment) parsed.hash = "";
		if (!search) parsed.search = "";
		return parsed.toString();
	};
	api = {
		format: formatImportWithOverloads,
		parse: parseImport,
		resolve: resolveImport,
		resolveObject,
		Url: UrlImport,
		URL: URL$1,
		URLSearchParams,
		domainToASCII,
		domainToUnicode,
		pathToFileURL: pathToFileURL$2,
		fileURLToPath: fileURLToPath$1
	};
}));
var require_previous_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist$1();
	var { existsSync, readFileSync } = (init_empty(), __toCommonJS(empty_exports));
	var { dirname: dirname$1, join } = require_path_browserify();
	var { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = (init_source_map_js_shim(), __toCommonJS(source_map_js_shim_exports));
	function fromBase64(str) {
		if (Buffer) return Buffer.from(str, "base64").toString();
		else
 /* c8 ignore next 2 */
		return window.atob(str);
	}
	var PreviousMap$2 = class {
		constructor(css, opts) {
			if (opts.map === false) return;
			this.loadAnnotation(css);
			this.inline = this.startWith(this.annotation, "data:");
			let prev = opts.map ? opts.map.prev : void 0;
			let text = this.loadMap(opts.from, prev);
			if (!this.mapFile && opts.from) this.mapFile = opts.from;
			if (this.mapFile) this.root = dirname$1(this.mapFile);
			if (text) this.text = text;
		}
		consumer() {
			if (!this.consumerCache) this.consumerCache = new SourceMapConsumer$2(this.text);
			return this.consumerCache;
		}
		decodeInline(text) {
			let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
			let baseUri = /^data:application\/json;base64,/;
			let uriMatch = text.match(/^data:application\/json;charset=utf-?8,/) || text.match(/^data:application\/json,/);
			if (uriMatch) return decodeURIComponent(text.substr(uriMatch[0].length));
			let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri);
			if (baseUriMatch) return fromBase64(text.substr(baseUriMatch[0].length));
			let encoding = text.match(/data:application\/json;([^,]+),/)[1];
			throw new Error("Unsupported source map encoding " + encoding);
		}
		getAnnotationURL(sourceMapString) {
			return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
		}
		isMap(map) {
			if (typeof map !== "object") return false;
			return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
		}
		loadAnnotation(css) {
			let comments = css.match(/\/\*\s*# sourceMappingURL=/g);
			if (!comments) return;
			let start = css.lastIndexOf(comments.pop());
			let end = css.indexOf("*/", start);
			if (start > -1 && end > -1) this.annotation = this.getAnnotationURL(css.substring(start, end));
		}
		loadFile(path) {
			this.root = dirname$1(path);
			if (existsSync(path)) {
				this.mapFile = path;
				return readFileSync(path, "utf-8").toString().trim();
			}
		}
		loadMap(file, prev) {
			if (prev === false) return false;
			if (prev) if (typeof prev === "string") return prev;
			else if (typeof prev === "function") {
				let prevPath = prev(file);
				if (prevPath) {
					let map = this.loadFile(prevPath);
					if (!map) throw new Error("Unable to load previous source map: " + prevPath.toString());
					return map;
				}
			} else if (prev instanceof SourceMapConsumer$2) return SourceMapGenerator$2.fromSourceMap(prev).toString();
			else if (prev instanceof SourceMapGenerator$2) return prev.toString();
			else if (this.isMap(prev)) return JSON.stringify(prev);
			else throw new Error("Unsupported previous source map format: " + prev.toString());
			else if (this.inline) return this.decodeInline(this.annotation);
			else if (this.annotation) {
				let map = this.annotation;
				if (file) map = join(dirname$1(file), map);
				return this.loadFile(map);
			}
		}
		startWith(string, start) {
			if (!string) return false;
			return string.substr(0, start.length) === start;
		}
		withContent() {
			return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
		}
	};
	module.exports = PreviousMap$2;
	PreviousMap$2.default = PreviousMap$2;
}));
var require_input = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { nanoid } = require_non_secure();
	var { isAbsolute, resolve: resolve$1 } = require_path_browserify();
	var { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = (init_source_map_js_shim(), __toCommonJS(source_map_js_shim_exports));
	var { fileURLToPath, pathToFileURL: pathToFileURL$1 } = (init_url(), __toCommonJS(url_exports));
	var CssSyntaxError$1 = require_css_syntax_error();
	var PreviousMap$1 = require_previous_map();
	var terminalHighlight = require___vite_browser_external();
	var fromOffsetCache = Symbol("fromOffsetCache");
	var sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
	var pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
	var Input$4 = class {
		constructor(css, opts = {}) {
			if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) throw new Error(`PostCSS received ${css} instead of CSS string`);
			this.css = css.toString();
			if (this.css[0] === "﻿" || this.css[0] === "￾") {
				this.hasBOM = true;
				this.css = this.css.slice(1);
			} else this.hasBOM = false;
			if (opts.from) if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) this.file = opts.from;
			else this.file = resolve$1(opts.from);
			if (pathAvailable$1 && sourceMapAvailable$1) {
				let map = new PreviousMap$1(this.css, opts);
				if (map.text) {
					this.map = map;
					let file = map.consumer().file;
					if (!this.file && file) this.file = this.mapResolve(file);
				}
			}
			if (!this.file) this.id = "<input css " + nanoid(6) + ">";
			if (this.map) this.map.file = this.from;
		}
		error(message, line, column, opts = {}) {
			let endColumn, endLine, result;
			if (line && typeof line === "object") {
				let start = line;
				let end = column;
				if (typeof start.offset === "number") {
					let pos = this.fromOffset(start.offset);
					line = pos.line;
					column = pos.col;
				} else {
					line = start.line;
					column = start.column;
				}
				if (typeof end.offset === "number") {
					let pos = this.fromOffset(end.offset);
					endLine = pos.line;
					endColumn = pos.col;
				} else {
					endLine = end.line;
					endColumn = end.column;
				}
			} else if (!column) {
				let pos = this.fromOffset(line);
				line = pos.line;
				column = pos.col;
			}
			let origin = this.origin(line, column, endLine, endColumn);
			if (origin) result = new CssSyntaxError$1(message, origin.endLine === void 0 ? origin.line : {
				column: origin.column,
				line: origin.line
			}, origin.endLine === void 0 ? origin.column : {
				column: origin.endColumn,
				line: origin.endLine
			}, origin.source, origin.file, opts.plugin);
			else result = new CssSyntaxError$1(message, endLine === void 0 ? line : {
				column,
				line
			}, endLine === void 0 ? column : {
				column: endColumn,
				line: endLine
			}, this.css, this.file, opts.plugin);
			result.input = {
				column,
				endColumn,
				endLine,
				line,
				source: this.css
			};
			if (this.file) {
				if (pathToFileURL$1) result.input.url = pathToFileURL$1(this.file).toString();
				result.input.file = this.file;
			}
			return result;
		}
		fromOffset(offset) {
			let lastLine, lineToIndex;
			if (!this[fromOffsetCache]) {
				let lines = this.css.split("\n");
				lineToIndex = new Array(lines.length);
				let prevIndex = 0;
				for (let i = 0, l = lines.length; i < l; i++) {
					lineToIndex[i] = prevIndex;
					prevIndex += lines[i].length + 1;
				}
				this[fromOffsetCache] = lineToIndex;
			} else lineToIndex = this[fromOffsetCache];
			lastLine = lineToIndex[lineToIndex.length - 1];
			let min = 0;
			if (offset >= lastLine) min = lineToIndex.length - 1;
			else {
				let max = lineToIndex.length - 2;
				let mid;
				while (min < max) {
					mid = min + (max - min >> 1);
					if (offset < lineToIndex[mid]) max = mid - 1;
					else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
					else {
						min = mid;
						break;
					}
				}
			}
			return {
				col: offset - lineToIndex[min] + 1,
				line: min + 1
			};
		}
		mapResolve(file) {
			if (/^\w+:\/\//.test(file)) return file;
			return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
		}
		origin(line, column, endLine, endColumn) {
			if (!this.map) return false;
			let consumer = this.map.consumer();
			let from = consumer.originalPositionFor({
				column,
				line
			});
			if (!from.source) return false;
			let to;
			if (typeof endLine === "number") to = consumer.originalPositionFor({
				column: endColumn,
				line: endLine
			});
			let fromUrl;
			if (isAbsolute(from.source)) fromUrl = pathToFileURL$1(from.source);
			else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile));
			let result = {
				column: from.column,
				endColumn: to && to.column,
				endLine: to && to.line,
				line: from.line,
				url: fromUrl.toString()
			};
			if (fromUrl.protocol === "file:") if (fileURLToPath) result.file = fileURLToPath(fromUrl);
			else
 /* c8 ignore next 2 */
			throw new Error(`file: protocol is not available in this PostCSS build`);
			let source = consumer.sourceContentFor(from.source);
			if (source) result.source = source;
			return result;
		}
		toJSON() {
			let json = {};
			for (let name of [
				"hasBOM",
				"css",
				"file",
				"id"
			]) if (this[name] != null) json[name] = this[name];
			if (this.map) {
				json.map = { ...this.map };
				if (json.map.consumerCache) json.map.consumerCache = void 0;
			}
			return json;
		}
		get from() {
			return this.file || this.id;
		}
	};
	module.exports = Input$4;
	Input$4.default = Input$4;
	if (terminalHighlight && terminalHighlight.registerInput) terminalHighlight.registerInput(Input$4);
}));
var require_root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Container$4 = require_container();
	var LazyResult$3, Processor$2;
	var Root$5 = class extends Container$4 {
		constructor(defaults$2) {
			super(defaults$2);
			this.type = "root";
			if (!this.nodes) this.nodes = [];
		}
		normalize(child, sample, type) {
			let nodes = super.normalize(child);
			if (sample) {
				if (type === "prepend") if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
				else delete sample.raws.before;
				else if (this.first !== sample) for (let node of nodes) node.raws.before = sample.raws.before;
			}
			return nodes;
		}
		removeChild(child, ignore) {
			let index = this.index(child);
			if (!ignore && index === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index].raws.before;
			return super.removeChild(child);
		}
		toResult(opts = {}) {
			return new LazyResult$3(new Processor$2(), this, opts).stringify();
		}
	};
	Root$5.registerLazyResult = (dependant) => {
		LazyResult$3 = dependant;
	};
	Root$5.registerProcessor = (dependant) => {
		Processor$2 = dependant;
	};
	module.exports = Root$5;
	Root$5.default = Root$5;
	Container$4.registerRoot(Root$5);
}));
var require_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var list$2 = {
		comma(string) {
			return list$2.split(string, [","], true);
		},
		space(string) {
			return list$2.split(string, [
				" ",
				"\n",
				"	"
			]);
		},
		split(string, separators, last) {
			let array = [];
			let current = "";
			let split$1 = false;
			let func = 0;
			let inQuote = false;
			let prevQuote = "";
			let escape$1 = false;
			for (let letter of string) {
				if (escape$1) escape$1 = false;
				else if (letter === "\\") escape$1 = true;
				else if (inQuote) {
					if (letter === prevQuote) inQuote = false;
				} else if (letter === "\"" || letter === "'") {
					inQuote = true;
					prevQuote = letter;
				} else if (letter === "(") func += 1;
				else if (letter === ")") {
					if (func > 0) func -= 1;
				} else if (func === 0) {
					if (separators.includes(letter)) split$1 = true;
				}
				if (split$1) {
					if (current !== "") array.push(current.trim());
					current = "";
					split$1 = false;
				} else current += letter;
			}
			if (last || current !== "") array.push(current.trim());
			return array;
		}
	};
	module.exports = list$2;
	list$2.default = list$2;
}));
var require_rule = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Container$3 = require_container();
	var list$1 = require_list();
	var Rule$3 = class extends Container$3 {
		constructor(defaults$2) {
			super(defaults$2);
			this.type = "rule";
			if (!this.nodes) this.nodes = [];
		}
		get selectors() {
			return list$1.comma(this.selector);
		}
		set selectors(values) {
			let match = this.selector ? this.selector.match(/,\s*/) : null;
			let sep$1 = match ? match[0] : "," + this.raw("between", "beforeOpen");
			this.selector = values.join(sep$1);
		}
	};
	module.exports = Rule$3;
	Rule$3.default = Rule$3;
	Container$3.registerRule(Rule$3);
}));
var require_fromJSON = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var AtRule$2 = require_at_rule();
	var Comment$2 = require_comment();
	var Declaration$2 = require_declaration();
	var Input$3 = require_input();
	var PreviousMap = require_previous_map();
	var Root$4 = require_root();
	var Rule$2 = require_rule();
	function fromJSON$1(json, inputs) {
		if (Array.isArray(json)) return json.map((n) => fromJSON$1(n));
		let { inputs: ownInputs,...defaults$2 } = json;
		if (ownInputs) {
			inputs = [];
			for (let input of ownInputs) {
				let inputHydrated = {
					...input,
					__proto__: Input$3.prototype
				};
				if (inputHydrated.map) inputHydrated.map = {
					...inputHydrated.map,
					__proto__: PreviousMap.prototype
				};
				inputs.push(inputHydrated);
			}
		}
		if (defaults$2.nodes) defaults$2.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
		if (defaults$2.source) {
			let { inputId,...source } = defaults$2.source;
			defaults$2.source = source;
			if (inputId != null) defaults$2.source.input = inputs[inputId];
		}
		if (defaults$2.type === "root") return new Root$4(defaults$2);
		else if (defaults$2.type === "decl") return new Declaration$2(defaults$2);
		else if (defaults$2.type === "rule") return new Rule$2(defaults$2);
		else if (defaults$2.type === "comment") return new Comment$2(defaults$2);
		else if (defaults$2.type === "atrule") return new AtRule$2(defaults$2);
		else throw new Error("Unknown node type: " + json.type);
	}
	module.exports = fromJSON$1;
	fromJSON$1.default = fromJSON$1;
}));
var require_map_generator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_dist$1();
	var { dirname, relative, resolve, sep } = require_path_browserify();
	var { SourceMapConsumer, SourceMapGenerator } = (init_source_map_js_shim(), __toCommonJS(source_map_js_shim_exports));
	var { pathToFileURL } = (init_url(), __toCommonJS(url_exports));
	var Input$2 = require_input();
	var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
	var pathAvailable = Boolean(dirname && resolve && relative && sep);
	var MapGenerator$2 = class {
		constructor(stringify$7, root, opts, cssString) {
			this.stringify = stringify$7;
			this.mapOpts = opts.map || {};
			this.root = root;
			this.opts = opts;
			this.css = cssString;
			this.originalCSS = cssString;
			this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
			this.memoizedFileURLs = /* @__PURE__ */ new Map();
			this.memoizedPaths = /* @__PURE__ */ new Map();
			this.memoizedURLs = /* @__PURE__ */ new Map();
		}
		addAnnotation() {
			let content;
			if (this.isInline()) content = "data:application/json;base64," + this.toBase64(this.map.toString());
			else if (typeof this.mapOpts.annotation === "string") content = this.mapOpts.annotation;
			else if (typeof this.mapOpts.annotation === "function") content = this.mapOpts.annotation(this.opts.to, this.root);
			else content = this.outputFile() + ".map";
			let eol = "\n";
			if (this.css.includes("\r\n")) eol = "\r\n";
			this.css += eol + "/*# sourceMappingURL=" + content + " */";
		}
		applyPrevMaps() {
			for (let prev of this.previous()) {
				let from = this.toUrl(this.path(prev.file));
				let root = prev.root || dirname(prev.file);
				let map;
				if (this.mapOpts.sourcesContent === false) {
					map = new SourceMapConsumer(prev.text);
					if (map.sourcesContent) map.sourcesContent = null;
				} else map = prev.consumer();
				this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
			}
		}
		clearAnnotation() {
			if (this.mapOpts.annotation === false) return;
			if (this.root) {
				let node;
				for (let i = this.root.nodes.length - 1; i >= 0; i--) {
					node = this.root.nodes[i];
					if (node.type !== "comment") continue;
					if (node.text.startsWith("# sourceMappingURL=")) this.root.removeChild(i);
				}
			} else if (this.css) this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, "");
		}
		generate() {
			this.clearAnnotation();
			if (pathAvailable && sourceMapAvailable && this.isMap()) return this.generateMap();
			else {
				let result = "";
				this.stringify(this.root, (i) => {
					result += i;
				});
				return [result];
			}
		}
		generateMap() {
			if (this.root) this.generateString();
			else if (this.previous().length === 1) {
				let prev = this.previous()[0].consumer();
				prev.file = this.outputFile();
				this.map = SourceMapGenerator.fromSourceMap(prev, { ignoreInvalidMapping: true });
			} else {
				this.map = new SourceMapGenerator({
					file: this.outputFile(),
					ignoreInvalidMapping: true
				});
				this.map.addMapping({
					generated: {
						column: 0,
						line: 1
					},
					original: {
						column: 0,
						line: 1
					},
					source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
				});
			}
			if (this.isSourcesContent()) this.setSourcesContent();
			if (this.root && this.previous().length > 0) this.applyPrevMaps();
			if (this.isAnnotation()) this.addAnnotation();
			if (this.isInline()) return [this.css];
			else return [this.css, this.map];
		}
		generateString() {
			this.css = "";
			this.map = new SourceMapGenerator({
				file: this.outputFile(),
				ignoreInvalidMapping: true
			});
			let line = 1;
			let column = 1;
			let noSource = "<no source>";
			let mapping = {
				generated: {
					column: 0,
					line: 0
				},
				original: {
					column: 0,
					line: 0
				},
				source: ""
			};
			let last, lines;
			this.stringify(this.root, (str, node, type) => {
				this.css += str;
				if (node && type !== "end") {
					mapping.generated.line = line;
					mapping.generated.column = column - 1;
					if (node.source && node.source.start) {
						mapping.source = this.sourcePath(node);
						mapping.original.line = node.source.start.line;
						mapping.original.column = node.source.start.column - 1;
						this.map.addMapping(mapping);
					} else {
						mapping.source = noSource;
						mapping.original.line = 1;
						mapping.original.column = 0;
						this.map.addMapping(mapping);
					}
				}
				lines = str.match(/\n/g);
				if (lines) {
					line += lines.length;
					last = str.lastIndexOf("\n");
					column = str.length - last;
				} else column += str.length;
				if (node && type !== "start") {
					let p = node.parent || { raws: {} };
					if (!(node.type === "decl" || node.type === "atrule" && !node.nodes) || node !== p.last || p.raws.semicolon) if (node.source && node.source.end) {
						mapping.source = this.sourcePath(node);
						mapping.original.line = node.source.end.line;
						mapping.original.column = node.source.end.column - 1;
						mapping.generated.line = line;
						mapping.generated.column = column - 2;
						this.map.addMapping(mapping);
					} else {
						mapping.source = noSource;
						mapping.original.line = 1;
						mapping.original.column = 0;
						mapping.generated.line = line;
						mapping.generated.column = column - 1;
						this.map.addMapping(mapping);
					}
				}
			});
		}
		isAnnotation() {
			if (this.isInline()) return true;
			if (typeof this.mapOpts.annotation !== "undefined") return this.mapOpts.annotation;
			if (this.previous().length) return this.previous().some((i) => i.annotation);
			return true;
		}
		isInline() {
			if (typeof this.mapOpts.inline !== "undefined") return this.mapOpts.inline;
			let annotation = this.mapOpts.annotation;
			if (typeof annotation !== "undefined" && annotation !== true) return false;
			if (this.previous().length) return this.previous().some((i) => i.inline);
			return true;
		}
		isMap() {
			if (typeof this.opts.map !== "undefined") return !!this.opts.map;
			return this.previous().length > 0;
		}
		isSourcesContent() {
			if (typeof this.mapOpts.sourcesContent !== "undefined") return this.mapOpts.sourcesContent;
			if (this.previous().length) return this.previous().some((i) => i.withContent());
			return true;
		}
		outputFile() {
			if (this.opts.to) return this.path(this.opts.to);
			else if (this.opts.from) return this.path(this.opts.from);
			else return "to.css";
		}
		path(file) {
			if (this.mapOpts.absolute) return file;
			if (file.charCodeAt(0) === 60) return file;
			if (/^\w+:\/\//.test(file)) return file;
			let cached = this.memoizedPaths.get(file);
			if (cached) return cached;
			let from = this.opts.to ? dirname(this.opts.to) : ".";
			if (typeof this.mapOpts.annotation === "string") from = dirname(resolve(from, this.mapOpts.annotation));
			let path = relative(from, file);
			this.memoizedPaths.set(file, path);
			return path;
		}
		previous() {
			if (!this.previousMaps) {
				this.previousMaps = [];
				if (this.root) this.root.walk((node) => {
					if (node.source && node.source.input.map) {
						let map = node.source.input.map;
						if (!this.previousMaps.includes(map)) this.previousMaps.push(map);
					}
				});
				else {
					let input = new Input$2(this.originalCSS, this.opts);
					if (input.map) this.previousMaps.push(input.map);
				}
			}
			return this.previousMaps;
		}
		setSourcesContent() {
			let already = {};
			if (this.root) this.root.walk((node) => {
				if (node.source) {
					let from = node.source.input.from;
					if (from && !already[from]) {
						already[from] = true;
						let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
						this.map.setSourceContent(fromUrl, node.source.input.css);
					}
				}
			});
			else if (this.css) {
				let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
				this.map.setSourceContent(from, this.css);
			}
		}
		sourcePath(node) {
			if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
			else if (this.usesFileUrls) return this.toFileUrl(node.source.input.from);
			else return this.toUrl(this.path(node.source.input.from));
		}
		toBase64(str) {
			if (Buffer) return Buffer.from(str).toString("base64");
			else return window.btoa(unescape(encodeURIComponent(str)));
		}
		toFileUrl(path) {
			let cached = this.memoizedFileURLs.get(path);
			if (cached) return cached;
			if (pathToFileURL) {
				let fileURL = pathToFileURL(path).toString();
				this.memoizedFileURLs.set(path, fileURL);
				return fileURL;
			} else throw new Error("`map.absolute` option is not available in this PostCSS build");
		}
		toUrl(path) {
			let cached = this.memoizedURLs.get(path);
			if (cached) return cached;
			if (sep === "\\") path = path.replace(/\\/g, "/");
			let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
			this.memoizedURLs.set(path, url);
			return url;
		}
	};
	module.exports = MapGenerator$2;
}));
var require_tokenize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SINGLE_QUOTE = "'".charCodeAt(0);
	var DOUBLE_QUOTE = "\"".charCodeAt(0);
	var BACKSLASH = "\\".charCodeAt(0);
	var SLASH = "/".charCodeAt(0);
	var NEWLINE = "\n".charCodeAt(0);
	var SPACE = " ".charCodeAt(0);
	var FEED = "\f".charCodeAt(0);
	var TAB = "	".charCodeAt(0);
	var CR = "\r".charCodeAt(0);
	var OPEN_SQUARE = "[".charCodeAt(0);
	var CLOSE_SQUARE = "]".charCodeAt(0);
	var OPEN_PARENTHESES = "(".charCodeAt(0);
	var CLOSE_PARENTHESES = ")".charCodeAt(0);
	var OPEN_CURLY = "{".charCodeAt(0);
	var CLOSE_CURLY = "}".charCodeAt(0);
	var SEMICOLON = ";".charCodeAt(0);
	var ASTERISK = "*".charCodeAt(0);
	var COLON = ":".charCodeAt(0);
	var AT = "@".charCodeAt(0);
	var RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
	var RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
	var RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
	var RE_HEX_ESCAPE = /[\da-f]/i;
	module.exports = function tokenizer$1(input, options = {}) {
		let css = input.css.valueOf();
		let ignore = options.ignoreErrors;
		let code, content, escape$1, next, quote$1;
		let currentToken, escaped, escapePos, n, prev;
		let length = css.length;
		let pos = 0;
		let buffer = [];
		let returned = [];
		function position() {
			return pos;
		}
		function unclosed(what) {
			throw input.error("Unclosed " + what, pos);
		}
		function endOfFile() {
			return returned.length === 0 && pos >= length;
		}
		function nextToken(opts) {
			if (returned.length) return returned.pop();
			if (pos >= length) return;
			let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
			code = css.charCodeAt(pos);
			switch (code) {
				case NEWLINE:
				case SPACE:
				case TAB:
				case CR:
				case FEED:
					next = pos;
					do {
						next += 1;
						code = css.charCodeAt(next);
					} while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
					currentToken = ["space", css.slice(pos, next)];
					pos = next - 1;
					break;
				case OPEN_SQUARE:
				case CLOSE_SQUARE:
				case OPEN_CURLY:
				case CLOSE_CURLY:
				case COLON:
				case SEMICOLON:
				case CLOSE_PARENTHESES: {
					let controlChar = String.fromCharCode(code);
					currentToken = [
						controlChar,
						controlChar,
						pos
					];
					break;
				}
				case OPEN_PARENTHESES:
					prev = buffer.length ? buffer.pop()[1] : "";
					n = css.charCodeAt(pos + 1);
					if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
						next = pos;
						do {
							escaped = false;
							next = css.indexOf(")", next + 1);
							if (next === -1) if (ignore || ignoreUnclosed) {
								next = pos;
								break;
							} else unclosed("bracket");
							escapePos = next;
							while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
								escapePos -= 1;
								escaped = !escaped;
							}
						} while (escaped);
						currentToken = [
							"brackets",
							css.slice(pos, next + 1),
							pos,
							next
						];
						pos = next;
					} else {
						next = css.indexOf(")", pos + 1);
						content = css.slice(pos, next + 1);
						if (next === -1 || RE_BAD_BRACKET.test(content)) currentToken = [
							"(",
							"(",
							pos
						];
						else {
							currentToken = [
								"brackets",
								content,
								pos,
								next
							];
							pos = next;
						}
					}
					break;
				case SINGLE_QUOTE:
				case DOUBLE_QUOTE:
					quote$1 = code === SINGLE_QUOTE ? "'" : "\"";
					next = pos;
					do {
						escaped = false;
						next = css.indexOf(quote$1, next + 1);
						if (next === -1) if (ignore || ignoreUnclosed) {
							next = pos + 1;
							break;
						} else unclosed("string");
						escapePos = next;
						while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
							escapePos -= 1;
							escaped = !escaped;
						}
					} while (escaped);
					currentToken = [
						"string",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				case AT:
					RE_AT_END.lastIndex = pos + 1;
					RE_AT_END.test(css);
					if (RE_AT_END.lastIndex === 0) next = css.length - 1;
					else next = RE_AT_END.lastIndex - 2;
					currentToken = [
						"at-word",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				case BACKSLASH:
					next = pos;
					escape$1 = true;
					while (css.charCodeAt(next + 1) === BACKSLASH) {
						next += 1;
						escape$1 = !escape$1;
					}
					code = css.charCodeAt(next + 1);
					if (escape$1 && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
						next += 1;
						if (RE_HEX_ESCAPE.test(css.charAt(next))) {
							while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) next += 1;
							if (css.charCodeAt(next + 1) === SPACE) next += 1;
						}
					}
					currentToken = [
						"word",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				default:
					if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
						next = css.indexOf("*/", pos + 2) + 1;
						if (next === 0) if (ignore || ignoreUnclosed) next = css.length;
						else unclosed("comment");
						currentToken = [
							"comment",
							css.slice(pos, next + 1),
							pos,
							next
						];
						pos = next;
					} else {
						RE_WORD_END.lastIndex = pos + 1;
						RE_WORD_END.test(css);
						if (RE_WORD_END.lastIndex === 0) next = css.length - 1;
						else next = RE_WORD_END.lastIndex - 2;
						currentToken = [
							"word",
							css.slice(pos, next + 1),
							pos,
							next
						];
						buffer.push(currentToken);
						pos = next;
					}
					break;
			}
			pos++;
			return currentToken;
		}
		function back(token) {
			returned.push(token);
		}
		return {
			back,
			endOfFile,
			nextToken,
			position
		};
	};
}));
var require_parser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var AtRule$1 = require_at_rule();
	var Comment$1 = require_comment();
	var Declaration$1 = require_declaration();
	var Root$3 = require_root();
	var Rule$1 = require_rule();
	var tokenizer = require_tokenize();
	var SAFE_COMMENT_NEIGHBOR = {
		empty: true,
		space: true
	};
	function findLastWithPosition(tokens) {
		for (let i = tokens.length - 1; i >= 0; i--) {
			let token = tokens[i];
			let pos = token[3] || token[2];
			if (pos) return pos;
		}
	}
	var Parser$1 = class {
		constructor(input) {
			this.input = input;
			this.root = new Root$3();
			this.current = this.root;
			this.spaces = "";
			this.semicolon = false;
			this.createTokenizer();
			this.root.source = {
				input,
				start: {
					column: 1,
					line: 1,
					offset: 0
				}
			};
		}
		atrule(token) {
			let node = new AtRule$1();
			node.name = token[1].slice(1);
			if (node.name === "") this.unnamedAtrule(node, token);
			this.init(node, token[2]);
			let type;
			let prev;
			let shift;
			let last = false;
			let open = false;
			let params = [];
			let brackets = [];
			while (!this.tokenizer.endOfFile()) {
				token = this.tokenizer.nextToken();
				type = token[0];
				if (type === "(" || type === "[") brackets.push(type === "(" ? ")" : "]");
				else if (type === "{" && brackets.length > 0) brackets.push("}");
				else if (type === brackets[brackets.length - 1]) brackets.pop();
				if (brackets.length === 0) if (type === ";") {
					node.source.end = this.getPosition(token[2]);
					node.source.end.offset++;
					this.semicolon = true;
					break;
				} else if (type === "{") {
					open = true;
					break;
				} else if (type === "}") {
					if (params.length > 0) {
						shift = params.length - 1;
						prev = params[shift];
						while (prev && prev[0] === "space") prev = params[--shift];
						if (prev) {
							node.source.end = this.getPosition(prev[3] || prev[2]);
							node.source.end.offset++;
						}
					}
					this.end(token);
					break;
				} else params.push(token);
				else params.push(token);
				if (this.tokenizer.endOfFile()) {
					last = true;
					break;
				}
			}
			node.raws.between = this.spacesAndCommentsFromEnd(params);
			if (params.length) {
				node.raws.afterName = this.spacesAndCommentsFromStart(params);
				this.raw(node, "params", params);
				if (last) {
					token = params[params.length - 1];
					node.source.end = this.getPosition(token[3] || token[2]);
					node.source.end.offset++;
					this.spaces = node.raws.between;
					node.raws.between = "";
				}
			} else {
				node.raws.afterName = "";
				node.params = "";
			}
			if (open) {
				node.nodes = [];
				this.current = node;
			}
		}
		checkMissedSemicolon(tokens) {
			let colon = this.colon(tokens);
			if (colon === false) return;
			let founded = 0;
			let token;
			for (let j = colon - 1; j >= 0; j--) {
				token = tokens[j];
				if (token[0] !== "space") {
					founded += 1;
					if (founded === 2) break;
				}
			}
			throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
		}
		colon(tokens) {
			let brackets = 0;
			let prev, token, type;
			for (let [i, element] of tokens.entries()) {
				token = element;
				type = token[0];
				if (type === "(") brackets += 1;
				if (type === ")") brackets -= 1;
				if (brackets === 0 && type === ":") if (!prev) this.doubleColon(token);
				else if (prev[0] === "word" && prev[1] === "progid") continue;
				else return i;
				prev = token;
			}
			return false;
		}
		comment(token) {
			let node = new Comment$1();
			this.init(node, token[2]);
			node.source.end = this.getPosition(token[3] || token[2]);
			node.source.end.offset++;
			let text = token[1].slice(2, -2);
			if (/^\s*$/.test(text)) {
				node.text = "";
				node.raws.left = text;
				node.raws.right = "";
			} else {
				let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
				node.text = match[2];
				node.raws.left = match[1];
				node.raws.right = match[3];
			}
		}
		createTokenizer() {
			this.tokenizer = tokenizer(this.input);
		}
		decl(tokens, customProperty) {
			let node = new Declaration$1();
			this.init(node, tokens[0][2]);
			let last = tokens[tokens.length - 1];
			if (last[0] === ";") {
				this.semicolon = true;
				tokens.pop();
			}
			node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
			node.source.end.offset++;
			while (tokens[0][0] !== "word") {
				if (tokens.length === 1) this.unknownWord(tokens);
				node.raws.before += tokens.shift()[1];
			}
			node.source.start = this.getPosition(tokens[0][2]);
			node.prop = "";
			while (tokens.length) {
				let type = tokens[0][0];
				if (type === ":" || type === "space" || type === "comment") break;
				node.prop += tokens.shift()[1];
			}
			node.raws.between = "";
			let token;
			while (tokens.length) {
				token = tokens.shift();
				if (token[0] === ":") {
					node.raws.between += token[1];
					break;
				} else {
					if (token[0] === "word" && /\w/.test(token[1])) this.unknownWord([token]);
					node.raws.between += token[1];
				}
			}
			if (node.prop[0] === "_" || node.prop[0] === "*") {
				node.raws.before += node.prop[0];
				node.prop = node.prop.slice(1);
			}
			let firstSpaces = [];
			let next;
			while (tokens.length) {
				next = tokens[0][0];
				if (next !== "space" && next !== "comment") break;
				firstSpaces.push(tokens.shift());
			}
			this.precheckMissedSemicolon(tokens);
			for (let i = tokens.length - 1; i >= 0; i--) {
				token = tokens[i];
				if (token[1].toLowerCase() === "!important") {
					node.important = true;
					let string = this.stringFrom(tokens, i);
					string = this.spacesFromEnd(tokens) + string;
					if (string !== " !important") node.raws.important = string;
					break;
				} else if (token[1].toLowerCase() === "important") {
					let cache = tokens.slice(0);
					let str = "";
					for (let j = i; j > 0; j--) {
						let type = cache[j][0];
						if (str.trim().startsWith("!") && type !== "space") break;
						str = cache.pop()[1] + str;
					}
					if (str.trim().startsWith("!")) {
						node.important = true;
						node.raws.important = str;
						tokens = cache;
					}
				}
				if (token[0] !== "space" && token[0] !== "comment") break;
			}
			if (tokens.some((i) => i[0] !== "space" && i[0] !== "comment")) {
				node.raws.between += firstSpaces.map((i) => i[1]).join("");
				firstSpaces = [];
			}
			this.raw(node, "value", firstSpaces.concat(tokens), customProperty);
			if (node.value.includes(":") && !customProperty) this.checkMissedSemicolon(tokens);
		}
		doubleColon(token) {
			throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
		}
		emptyRule(token) {
			let node = new Rule$1();
			this.init(node, token[2]);
			node.selector = "";
			node.raws.between = "";
			this.current = node;
		}
		end(token) {
			if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
			this.semicolon = false;
			this.current.raws.after = (this.current.raws.after || "") + this.spaces;
			this.spaces = "";
			if (this.current.parent) {
				this.current.source.end = this.getPosition(token[2]);
				this.current.source.end.offset++;
				this.current = this.current.parent;
			} else this.unexpectedClose(token);
		}
		endFile() {
			if (this.current.parent) this.unclosedBlock();
			if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
			this.current.raws.after = (this.current.raws.after || "") + this.spaces;
			this.root.source.end = this.getPosition(this.tokenizer.position());
		}
		freeSemicolon(token) {
			this.spaces += token[1];
			if (this.current.nodes) {
				let prev = this.current.nodes[this.current.nodes.length - 1];
				if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
					prev.raws.ownSemicolon = this.spaces;
					this.spaces = "";
				}
			}
		}
		getPosition(offset) {
			let pos = this.input.fromOffset(offset);
			return {
				column: pos.col,
				line: pos.line,
				offset
			};
		}
		init(node, offset) {
			this.current.push(node);
			node.source = {
				input: this.input,
				start: this.getPosition(offset)
			};
			node.raws.before = this.spaces;
			this.spaces = "";
			if (node.type !== "comment") this.semicolon = false;
		}
		other(start) {
			let end = false;
			let type = null;
			let colon = false;
			let bracket = null;
			let brackets = [];
			let customProperty = start[1].startsWith("--");
			let tokens = [];
			let token = start;
			while (token) {
				type = token[0];
				tokens.push(token);
				if (type === "(" || type === "[") {
					if (!bracket) bracket = token;
					brackets.push(type === "(" ? ")" : "]");
				} else if (customProperty && colon && type === "{") {
					if (!bracket) bracket = token;
					brackets.push("}");
				} else if (brackets.length === 0) {
					if (type === ";") if (colon) {
						this.decl(tokens, customProperty);
						return;
					} else break;
					else if (type === "{") {
						this.rule(tokens);
						return;
					} else if (type === "}") {
						this.tokenizer.back(tokens.pop());
						end = true;
						break;
					} else if (type === ":") colon = true;
				} else if (type === brackets[brackets.length - 1]) {
					brackets.pop();
					if (brackets.length === 0) bracket = null;
				}
				token = this.tokenizer.nextToken();
			}
			if (this.tokenizer.endOfFile()) end = true;
			if (brackets.length > 0) this.unclosedBracket(bracket);
			if (end && colon) {
				if (!customProperty) while (tokens.length) {
					token = tokens[tokens.length - 1][0];
					if (token !== "space" && token !== "comment") break;
					this.tokenizer.back(tokens.pop());
				}
				this.decl(tokens, customProperty);
			} else this.unknownWord(tokens);
		}
		parse() {
			let token;
			while (!this.tokenizer.endOfFile()) {
				token = this.tokenizer.nextToken();
				switch (token[0]) {
					case "space":
						this.spaces += token[1];
						break;
					case ";":
						this.freeSemicolon(token);
						break;
					case "}":
						this.end(token);
						break;
					case "comment":
						this.comment(token);
						break;
					case "at-word":
						this.atrule(token);
						break;
					case "{":
						this.emptyRule(token);
						break;
					default:
						this.other(token);
						break;
				}
			}
			this.endFile();
		}
		precheckMissedSemicolon() {}
		raw(node, prop, tokens, customProperty) {
			let token, type;
			let length = tokens.length;
			let value = "";
			let clean = true;
			let next, prev;
			for (let i = 0; i < length; i += 1) {
				token = tokens[i];
				type = token[0];
				if (type === "space" && i === length - 1 && !customProperty) clean = false;
				else if (type === "comment") {
					prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
					next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
					if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) if (value.slice(-1) === ",") clean = false;
					else value += token[1];
					else clean = false;
				} else value += token[1];
			}
			if (!clean) {
				let raw = tokens.reduce((all, i) => all + i[1], "");
				node.raws[prop] = {
					raw,
					value
				};
			}
			node[prop] = value;
		}
		rule(tokens) {
			tokens.pop();
			let node = new Rule$1();
			this.init(node, tokens[0][2]);
			node.raws.between = this.spacesAndCommentsFromEnd(tokens);
			this.raw(node, "selector", tokens);
			this.current = node;
		}
		spacesAndCommentsFromEnd(tokens) {
			let lastTokenType;
			let spaces = "";
			while (tokens.length) {
				lastTokenType = tokens[tokens.length - 1][0];
				if (lastTokenType !== "space" && lastTokenType !== "comment") break;
				spaces = tokens.pop()[1] + spaces;
			}
			return spaces;
		}
		spacesAndCommentsFromStart(tokens) {
			let next;
			let spaces = "";
			while (tokens.length) {
				next = tokens[0][0];
				if (next !== "space" && next !== "comment") break;
				spaces += tokens.shift()[1];
			}
			return spaces;
		}
		spacesFromEnd(tokens) {
			let lastTokenType;
			let spaces = "";
			while (tokens.length) {
				lastTokenType = tokens[tokens.length - 1][0];
				if (lastTokenType !== "space") break;
				spaces = tokens.pop()[1] + spaces;
			}
			return spaces;
		}
		stringFrom(tokens, from) {
			let result = "";
			for (let i = from; i < tokens.length; i++) result += tokens[i][1];
			tokens.splice(from, tokens.length - from);
			return result;
		}
		unclosedBlock() {
			let pos = this.current.source.start;
			throw this.input.error("Unclosed block", pos.line, pos.column);
		}
		unclosedBracket(bracket) {
			throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
		}
		unexpectedClose(token) {
			throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
		}
		unknownWord(tokens) {
			throw this.input.error("Unknown word", { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
		}
		unnamedAtrule(node, token) {
			throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
		}
	};
	module.exports = Parser$1;
}));
var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Container$2 = require_container();
	var Input$1 = require_input();
	var Parser = require_parser();
	function parse$3(css, opts) {
		let parser = new Parser(new Input$1(css, opts));
		try {
			parser.parse();
		} catch (e) {
			throw e;
		}
		return parser.root;
	}
	module.exports = parse$3;
	parse$3.default = parse$3;
	Container$2.registerParse(parse$3);
}));
var require_warning = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Warning$2 = class {
		constructor(text, opts = {}) {
			this.type = "warning";
			this.text = text;
			if (opts.node && opts.node.source) {
				let range = opts.node.rangeBy(opts);
				this.line = range.start.line;
				this.column = range.start.column;
				this.endLine = range.end.line;
				this.endColumn = range.end.column;
			}
			for (let opt in opts) this[opt] = opts[opt];
		}
		toString() {
			if (this.node) return this.node.error(this.text, {
				index: this.index,
				plugin: this.plugin,
				word: this.word
			}).message;
			if (this.plugin) return this.plugin + ": " + this.text;
			return this.text;
		}
	};
	module.exports = Warning$2;
	Warning$2.default = Warning$2;
}));
var require_result = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Warning$1 = require_warning();
	var Result$3 = class {
		constructor(processor, root, opts) {
			this.processor = processor;
			this.messages = [];
			this.root = root;
			this.opts = opts;
			this.css = void 0;
			this.map = void 0;
		}
		toString() {
			return this.css;
		}
		warn(text, opts = {}) {
			if (!opts.plugin) {
				if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
			}
			let warning = new Warning$1(text, opts);
			this.messages.push(warning);
			return warning;
		}
		warnings() {
			return this.messages.filter((i) => i.type === "warning");
		}
		get content() {
			return this.css;
		}
	};
	module.exports = Result$3;
	Result$3.default = Result$3;
}));
var require_warn_once = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var printed = {};
	module.exports = function warnOnce(message) {
		if (printed[message]) return;
		printed[message] = true;
		if (typeof console !== "undefined" && console.warn) console.warn(message);
	};
}));
var require_lazy_result = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Container$1 = require_container();
	var Document$2 = require_document();
	var MapGenerator$1 = require_map_generator();
	var parse$2 = require_parse();
	var Result$2 = require_result();
	var Root$2 = require_root();
	var stringify$2 = require_stringify$1();
	var { isClean, my } = require_symbols();
	require_warn_once();
	var TYPE_TO_CLASS_NAME = {
		atrule: "AtRule",
		comment: "Comment",
		decl: "Declaration",
		document: "Document",
		root: "Root",
		rule: "Rule"
	};
	var PLUGIN_PROPS = {
		AtRule: true,
		AtRuleExit: true,
		Comment: true,
		CommentExit: true,
		Declaration: true,
		DeclarationExit: true,
		Document: true,
		DocumentExit: true,
		Once: true,
		OnceExit: true,
		postcssPlugin: true,
		prepare: true,
		Root: true,
		RootExit: true,
		Rule: true,
		RuleExit: true
	};
	var NOT_VISITORS = {
		Once: true,
		postcssPlugin: true,
		prepare: true
	};
	var CHILDREN = 0;
	function isPromise(obj) {
		return typeof obj === "object" && typeof obj.then === "function";
	}
	function getEvents(node) {
		let key = false;
		let type = TYPE_TO_CLASS_NAME[node.type];
		if (node.type === "decl") key = node.prop.toLowerCase();
		else if (node.type === "atrule") key = node.name.toLowerCase();
		if (key && node.append) return [
			type,
			type + "-" + key,
			CHILDREN,
			type + "Exit",
			type + "Exit-" + key
		];
		else if (key) return [
			type,
			type + "-" + key,
			type + "Exit",
			type + "Exit-" + key
		];
		else if (node.append) return [
			type,
			CHILDREN,
			type + "Exit"
		];
		else return [type, type + "Exit"];
	}
	function toStack(node) {
		let events;
		if (node.type === "document") events = [
			"Document",
			CHILDREN,
			"DocumentExit"
		];
		else if (node.type === "root") events = [
			"Root",
			CHILDREN,
			"RootExit"
		];
		else events = getEvents(node);
		return {
			eventIndex: 0,
			events,
			iterator: 0,
			node,
			visitorIndex: 0,
			visitors: []
		};
	}
	function cleanMarks(node) {
		node[isClean] = false;
		if (node.nodes) node.nodes.forEach((i) => cleanMarks(i));
		return node;
	}
	var postcss$1 = {};
	var LazyResult$2 = class LazyResult$2 {
		constructor(processor, css, opts) {
			this.stringified = false;
			this.processed = false;
			let root;
			if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) root = cleanMarks(css);
			else if (css instanceof LazyResult$2 || css instanceof Result$2) {
				root = cleanMarks(css.root);
				if (css.map) {
					if (typeof opts.map === "undefined") opts.map = {};
					if (!opts.map.inline) opts.map.inline = false;
					opts.map.prev = css.map;
				}
			} else {
				let parser = parse$2;
				if (opts.syntax) parser = opts.syntax.parse;
				if (opts.parser) parser = opts.parser;
				if (parser.parse) parser = parser.parse;
				try {
					root = parser(css, opts);
				} catch (error) {
					this.processed = true;
					this.error = error;
				}
				if (root && !root[my])
 /* c8 ignore next 2 */
				Container$1.rebuild(root);
			}
			this.result = new Result$2(processor, root, opts);
			this.helpers = {
				...postcss$1,
				postcss: postcss$1,
				result: this.result
			};
			this.plugins = this.processor.plugins.map((plugin) => {
				if (typeof plugin === "object" && plugin.prepare) return {
					...plugin,
					...plugin.prepare(this.result)
				};
				else return plugin;
			});
		}
		async() {
			if (this.error) return Promise.reject(this.error);
			if (this.processed) return Promise.resolve(this.result);
			if (!this.processing) this.processing = this.runAsync();
			return this.processing;
		}
		catch(onRejected) {
			return this.async().catch(onRejected);
		}
		finally(onFinally) {
			return this.async().then(onFinally, onFinally);
		}
		getAsyncError() {
			throw new Error("Use process(css).then(cb) to work with async plugins");
		}
		handleError(error, node) {
			let plugin = this.result.lastPlugin;
			try {
				if (node) node.addToError(error);
				this.error = error;
				if (error.name === "CssSyntaxError" && !error.plugin) {
					error.plugin = plugin.postcssPlugin;
					error.setMessage();
				} else if (plugin.postcssVersion) {}
			} catch (err) {
				/* c8 ignore next 3 */
				if (console && console.error) console.error(err);
			}
			return error;
		}
		prepareVisitors() {
			this.listeners = {};
			let add = (plugin, type, cb) => {
				if (!this.listeners[type]) this.listeners[type] = [];
				this.listeners[type].push([plugin, cb]);
			};
			for (let plugin of this.plugins) if (typeof plugin === "object") for (let event in plugin) {
				if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
				if (!NOT_VISITORS[event]) {
					if (typeof plugin[event] === "object") for (let filter$3 in plugin[event]) if (filter$3 === "*") add(plugin, event, plugin[event][filter$3]);
					else add(plugin, event + "-" + filter$3.toLowerCase(), plugin[event][filter$3]);
					else if (typeof plugin[event] === "function") add(plugin, event, plugin[event]);
				}
			}
			this.hasListener = Object.keys(this.listeners).length > 0;
		}
		async runAsync() {
			this.plugin = 0;
			for (let i = 0; i < this.plugins.length; i++) {
				let plugin = this.plugins[i];
				let promise = this.runOnRoot(plugin);
				if (isPromise(promise)) try {
					await promise;
				} catch (error) {
					throw this.handleError(error);
				}
			}
			this.prepareVisitors();
			if (this.hasListener) {
				let root = this.result.root;
				while (!root[isClean]) {
					root[isClean] = true;
					let stack = [toStack(root)];
					while (stack.length > 0) {
						let promise = this.visitTick(stack);
						if (isPromise(promise)) try {
							await promise;
						} catch (e) {
							let node = stack[stack.length - 1].node;
							throw this.handleError(e, node);
						}
					}
				}
				if (this.listeners.OnceExit) for (let [plugin, visitor] of this.listeners.OnceExit) {
					this.result.lastPlugin = plugin;
					try {
						if (root.type === "document") {
							let roots = root.nodes.map((subRoot) => visitor(subRoot, this.helpers));
							await Promise.all(roots);
						} else await visitor(root, this.helpers);
					} catch (e) {
						throw this.handleError(e);
					}
				}
			}
			this.processed = true;
			return this.stringify();
		}
		runOnRoot(plugin) {
			this.result.lastPlugin = plugin;
			try {
				if (typeof plugin === "object" && plugin.Once) {
					if (this.result.root.type === "document") {
						let roots = this.result.root.nodes.map((root) => plugin.Once(root, this.helpers));
						if (isPromise(roots[0])) return Promise.all(roots);
						return roots;
					}
					return plugin.Once(this.result.root, this.helpers);
				} else if (typeof plugin === "function") return plugin(this.result.root, this.result);
			} catch (error) {
				throw this.handleError(error);
			}
		}
		stringify() {
			if (this.error) throw this.error;
			if (this.stringified) return this.result;
			this.stringified = true;
			this.sync();
			let opts = this.result.opts;
			let str = stringify$2;
			if (opts.syntax) str = opts.syntax.stringify;
			if (opts.stringifier) str = opts.stringifier;
			if (str.stringify) str = str.stringify;
			let data = new MapGenerator$1(str, this.result.root, this.result.opts).generate();
			this.result.css = data[0];
			this.result.map = data[1];
			return this.result;
		}
		sync() {
			if (this.error) throw this.error;
			if (this.processed) return this.result;
			this.processed = true;
			if (this.processing) throw this.getAsyncError();
			for (let plugin of this.plugins) if (isPromise(this.runOnRoot(plugin))) throw this.getAsyncError();
			this.prepareVisitors();
			if (this.hasListener) {
				let root = this.result.root;
				while (!root[isClean]) {
					root[isClean] = true;
					this.walkSync(root);
				}
				if (this.listeners.OnceExit) if (root.type === "document") for (let subRoot of root.nodes) this.visitSync(this.listeners.OnceExit, subRoot);
				else this.visitSync(this.listeners.OnceExit, root);
			}
			return this.result;
		}
		then(onFulfilled, onRejected) {
			return this.async().then(onFulfilled, onRejected);
		}
		toString() {
			return this.css;
		}
		visitSync(visitors, node) {
			for (let [plugin, visitor] of visitors) {
				this.result.lastPlugin = plugin;
				let promise;
				try {
					promise = visitor(node, this.helpers);
				} catch (e) {
					throw this.handleError(e, node.proxyOf);
				}
				if (node.type !== "root" && node.type !== "document" && !node.parent) return true;
				if (isPromise(promise)) throw this.getAsyncError();
			}
		}
		visitTick(stack) {
			let visit = stack[stack.length - 1];
			let { node, visitors } = visit;
			if (node.type !== "root" && node.type !== "document" && !node.parent) {
				stack.pop();
				return;
			}
			if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
				let [plugin, visitor] = visitors[visit.visitorIndex];
				visit.visitorIndex += 1;
				if (visit.visitorIndex === visitors.length) {
					visit.visitors = [];
					visit.visitorIndex = 0;
				}
				this.result.lastPlugin = plugin;
				try {
					return visitor(node.toProxy(), this.helpers);
				} catch (e) {
					throw this.handleError(e, node);
				}
			}
			if (visit.iterator !== 0) {
				let iterator = visit.iterator;
				let child;
				while (child = node.nodes[node.indexes[iterator]]) {
					node.indexes[iterator] += 1;
					if (!child[isClean]) {
						child[isClean] = true;
						stack.push(toStack(child));
						return;
					}
				}
				visit.iterator = 0;
				delete node.indexes[iterator];
			}
			let events = visit.events;
			while (visit.eventIndex < events.length) {
				let event = events[visit.eventIndex];
				visit.eventIndex += 1;
				if (event === CHILDREN) {
					if (node.nodes && node.nodes.length) {
						node[isClean] = true;
						visit.iterator = node.getIterator();
					}
					return;
				} else if (this.listeners[event]) {
					visit.visitors = this.listeners[event];
					return;
				}
			}
			stack.pop();
		}
		walkSync(node) {
			node[isClean] = true;
			let events = getEvents(node);
			for (let event of events) if (event === CHILDREN) {
				if (node.nodes) node.each((child) => {
					if (!child[isClean]) this.walkSync(child);
				});
			} else {
				let visitors = this.listeners[event];
				if (visitors) {
					if (this.visitSync(visitors, node.toProxy())) return;
				}
			}
		}
		warnings() {
			return this.sync().warnings();
		}
		get content() {
			return this.stringify().content;
		}
		get css() {
			return this.stringify().css;
		}
		get map() {
			return this.stringify().map;
		}
		get messages() {
			return this.sync().messages;
		}
		get opts() {
			return this.result.opts;
		}
		get processor() {
			return this.result.processor;
		}
		get root() {
			return this.sync().root;
		}
		get [Symbol.toStringTag]() {
			return "LazyResult";
		}
	};
	LazyResult$2.registerPostcss = (dependant) => {
		postcss$1 = dependant;
	};
	module.exports = LazyResult$2;
	LazyResult$2.default = LazyResult$2;
	Root$2.registerLazyResult(LazyResult$2);
	Document$2.registerLazyResult(LazyResult$2);
}));
var require_no_work_result = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapGenerator = require_map_generator();
	var parse$1 = require_parse();
	var Result$1 = require_result();
	var stringify$1 = require_stringify$1();
	require_warn_once();
	var NoWorkResult$1 = class {
		constructor(processor, css, opts) {
			css = css.toString();
			this.stringified = false;
			this._processor = processor;
			this._css = css;
			this._opts = opts;
			this._map = void 0;
			let root;
			let str = stringify$1;
			this.result = new Result$1(this._processor, root, this._opts);
			this.result.css = css;
			let self$1 = this;
			Object.defineProperty(this.result, "root", { get() {
				return self$1.root;
			} });
			let map = new MapGenerator(str, root, this._opts, css);
			if (map.isMap()) {
				let [generatedCSS, generatedMap] = map.generate();
				if (generatedCSS) this.result.css = generatedCSS;
				if (generatedMap) this.result.map = generatedMap;
			} else {
				map.clearAnnotation();
				this.result.css = map.css;
			}
		}
		async() {
			if (this.error) return Promise.reject(this.error);
			return Promise.resolve(this.result);
		}
		catch(onRejected) {
			return this.async().catch(onRejected);
		}
		finally(onFinally) {
			return this.async().then(onFinally, onFinally);
		}
		sync() {
			if (this.error) throw this.error;
			return this.result;
		}
		then(onFulfilled, onRejected) {
			return this.async().then(onFulfilled, onRejected);
		}
		toString() {
			return this._css;
		}
		warnings() {
			return [];
		}
		get content() {
			return this.result.css;
		}
		get css() {
			return this.result.css;
		}
		get map() {
			return this.result.map;
		}
		get messages() {
			return [];
		}
		get opts() {
			return this.result.opts;
		}
		get processor() {
			return this.result.processor;
		}
		get root() {
			if (this._root) return this._root;
			let root;
			let parser = parse$1;
			try {
				root = parser(this._css, this._opts);
			} catch (error) {
				this.error = error;
			}
			if (this.error) throw this.error;
			else {
				this._root = root;
				return root;
			}
		}
		get [Symbol.toStringTag]() {
			return "NoWorkResult";
		}
	};
	module.exports = NoWorkResult$1;
	NoWorkResult$1.default = NoWorkResult$1;
}));
var require_processor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Document$1 = require_document();
	var LazyResult$1 = require_lazy_result();
	var NoWorkResult = require_no_work_result();
	var Root$1 = require_root();
	var Processor$1 = class {
		constructor(plugins = []) {
			this.version = "8.4.49";
			this.plugins = this.normalize(plugins);
		}
		normalize(plugins) {
			let normalized = [];
			for (let i of plugins) {
				if (i.postcss === true) i = i();
				else if (i.postcss) i = i.postcss;
				if (typeof i === "object" && Array.isArray(i.plugins)) normalized = normalized.concat(i.plugins);
				else if (typeof i === "object" && i.postcssPlugin) normalized.push(i);
				else if (typeof i === "function") normalized.push(i);
				else if (typeof i === "object" && (i.parse || i.stringify)) {} else throw new Error(i + " is not a PostCSS plugin");
			}
			return normalized;
		}
		process(css, opts = {}) {
			if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) return new NoWorkResult(this, css, opts);
			else return new LazyResult$1(this, css, opts);
		}
		use(plugin) {
			this.plugins = this.plugins.concat(this.normalize([plugin]));
			return this;
		}
	};
	module.exports = Processor$1;
	Processor$1.default = Processor$1;
	Root$1.registerProcessor(Processor$1);
	Document$1.registerProcessor(Processor$1);
}));
var require_postcss = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var AtRule = require_at_rule();
	var Comment = require_comment();
	var Container = require_container();
	var CssSyntaxError = require_css_syntax_error();
	var Declaration = require_declaration();
	var Document = require_document();
	var fromJSON = require_fromJSON();
	var Input = require_input();
	var LazyResult = require_lazy_result();
	var list = require_list();
	var Node = require_node();
	var parse = require_parse();
	var Processor = require_processor();
	var Result = require_result();
	var Root = require_root();
	var Rule = require_rule();
	var stringify = require_stringify$1();
	var Warning = require_warning();
	function postcss(...plugins) {
		if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
		return new Processor(plugins);
	}
	postcss.plugin = function plugin(name, initializer) {
		let warningPrinted = false;
		function creator(...args) {
			if (console && console.warn && !warningPrinted) {
				warningPrinted = true;
				console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
				if ({}.LANG && {}.LANG.startsWith("cn"))
 /* c8 ignore next 7 */
				console.warn(name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226");
			}
			let transformer = initializer(...args);
			transformer.postcssPlugin = name;
			transformer.postcssVersion = new Processor().version;
			return transformer;
		}
		let cache;
		Object.defineProperty(creator, "postcss", { get() {
			if (!cache) cache = creator();
			return cache;
		} });
		creator.process = function(css, processOpts, pluginOpts) {
			return postcss([creator(pluginOpts)]).process(css, processOpts);
		};
		return creator;
	};
	postcss.stringify = stringify;
	postcss.parse = parse;
	postcss.fromJSON = fromJSON;
	postcss.list = list;
	postcss.comment = (defaults$2) => new Comment(defaults$2);
	postcss.atRule = (defaults$2) => new AtRule(defaults$2);
	postcss.decl = (defaults$2) => new Declaration(defaults$2);
	postcss.rule = (defaults$2) => new Rule(defaults$2);
	postcss.root = (defaults$2) => new Root(defaults$2);
	postcss.document = (defaults$2) => new Document(defaults$2);
	postcss.CssSyntaxError = CssSyntaxError;
	postcss.Declaration = Declaration;
	postcss.Container = Container;
	postcss.Processor = Processor;
	postcss.Document = Document;
	postcss.Comment = Comment;
	postcss.Warning = Warning;
	postcss.AtRule = AtRule;
	postcss.Result = Result;
	postcss.Input = Input;
	postcss.Rule = Rule;
	postcss.Root = Root;
	postcss.Node = Node;
	LazyResult.registerPostcss(postcss);
	module.exports = postcss;
	postcss.default = postcss;
}));
var require_sanitize_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var htmlparser = require_lib$1();
	var escapeStringRegexp = require_escape_string_regexp();
	var { isPlainObject } = require_is_plain_object();
	var deepmerge = require_cjs();
	var parseSrcset = require_parse_srcset();
	var { parse: postcssParse } = require_postcss();
	var mediaTags = [
		"img",
		"audio",
		"video",
		"picture",
		"svg",
		"object",
		"map",
		"iframe",
		"embed"
	];
	var vulnerableTags = ["script", "style"];
	function each(obj, cb) {
		if (obj) Object.keys(obj).forEach(function(key) {
			cb(obj[key], key);
		});
	}
	function has(obj, key) {
		return {}.hasOwnProperty.call(obj, key);
	}
	function filter(a, cb) {
		const n = [];
		each(a, function(v) {
			if (cb(v)) n.push(v);
		});
		return n;
	}
	function isEmptyObject(obj) {
		for (const key in obj) if (has(obj, key)) return false;
		return true;
	}
	function stringifySrcset(parsedSrcset) {
		return parsedSrcset.map(function(part) {
			if (!part.url) throw new Error("URL missing");
			return part.url + (part.w ? ` ${part.w}w` : "") + (part.h ? ` ${part.h}h` : "") + (part.d ? ` ${part.d}x` : "");
		}).join(", ");
	}
	module.exports = sanitizeHtml;
	var VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;
	function sanitizeHtml(html, options, _recursing) {
		if (html == null) return "";
		if (typeof html === "number") html = html.toString();
		let result = "";
		let tempResult = "";
		function Frame(tag, attribs) {
			const that = this;
			this.tag = tag;
			this.attribs = attribs || {};
			this.tagPosition = result.length;
			this.text = "";
			this.mediaChildren = [];
			this.updateParentNodeText = function() {
				if (stack.length) {
					const parentFrame = stack[stack.length - 1];
					parentFrame.text += that.text;
				}
			};
			this.updateParentNodeMediaChildren = function() {
				if (stack.length && mediaTags.includes(this.tag)) stack[stack.length - 1].mediaChildren.push(this.tag);
			};
		}
		options = Object.assign({}, sanitizeHtml.defaults, options);
		options.parser = Object.assign({}, htmlParserDefaults, options.parser);
		const tagAllowed = function(name) {
			return options.allowedTags === false || (options.allowedTags || []).indexOf(name) > -1;
		};
		vulnerableTags.forEach(function(tag) {
			if (tagAllowed(tag) && !options.allowVulnerableTags) console.warn(`\n\n⚠️ Your \`allowedTags\` option includes, \`${tag}\`, which is inherently\nvulnerable to XSS attacks. Please remove it from \`allowedTags\`.\nOr, to disable this warning, add the \`allowVulnerableTags\` option\nand ensure you are accounting for this risk.\n\n`);
		});
		const nonTextTagsArray = options.nonTextTags || [
			"script",
			"style",
			"textarea",
			"option"
		];
		let allowedAttributesMap;
		let allowedAttributesGlobMap;
		if (options.allowedAttributes) {
			allowedAttributesMap = {};
			allowedAttributesGlobMap = {};
			each(options.allowedAttributes, function(attributes, tag) {
				allowedAttributesMap[tag] = [];
				const globRegex = [];
				attributes.forEach(function(obj) {
					if (typeof obj === "string" && obj.indexOf("*") >= 0) globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
					else allowedAttributesMap[tag].push(obj);
				});
				if (globRegex.length) allowedAttributesGlobMap[tag] = /* @__PURE__ */ new RegExp("^(" + globRegex.join("|") + ")$");
			});
		}
		const allowedClassesMap = {};
		const allowedClassesGlobMap = {};
		const allowedClassesRegexMap = {};
		each(options.allowedClasses, function(classes, tag) {
			if (allowedAttributesMap) {
				if (!has(allowedAttributesMap, tag)) allowedAttributesMap[tag] = [];
				allowedAttributesMap[tag].push("class");
			}
			allowedClassesMap[tag] = classes;
			if (Array.isArray(classes)) {
				const globRegex = [];
				allowedClassesMap[tag] = [];
				allowedClassesRegexMap[tag] = [];
				classes.forEach(function(obj) {
					if (typeof obj === "string" && obj.indexOf("*") >= 0) globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
					else if (obj instanceof RegExp) allowedClassesRegexMap[tag].push(obj);
					else allowedClassesMap[tag].push(obj);
				});
				if (globRegex.length) allowedClassesGlobMap[tag] = /* @__PURE__ */ new RegExp("^(" + globRegex.join("|") + ")$");
			}
		});
		const transformTagsMap = {};
		let transformTagsAll;
		each(options.transformTags, function(transform, tag) {
			let transFun;
			if (typeof transform === "function") transFun = transform;
			else if (typeof transform === "string") transFun = sanitizeHtml.simpleTransform(transform);
			if (tag === "*") transformTagsAll = transFun;
			else transformTagsMap[tag] = transFun;
		});
		let depth;
		let stack;
		let skipMap;
		let transformMap;
		let skipText;
		let skipTextDepth;
		let addedText = false;
		initializeState();
		const parser = new htmlparser.Parser({
			onopentag: function(name, attribs) {
				if (options.enforceHtmlBoundary && name === "html") initializeState();
				if (skipText) {
					skipTextDepth++;
					return;
				}
				const frame = new Frame(name, attribs);
				stack.push(frame);
				let skip = false;
				const hasText = !!frame.text;
				let transformedTag;
				if (has(transformTagsMap, name)) {
					transformedTag = transformTagsMap[name](name, attribs);
					frame.attribs = attribs = transformedTag.attribs;
					if (transformedTag.text !== void 0) frame.innerText = transformedTag.text;
					if (name !== transformedTag.tagName) {
						frame.name = name = transformedTag.tagName;
						transformMap[depth] = transformedTag.tagName;
					}
				}
				if (transformTagsAll) {
					transformedTag = transformTagsAll(name, attribs);
					frame.attribs = attribs = transformedTag.attribs;
					if (name !== transformedTag.tagName) {
						frame.name = name = transformedTag.tagName;
						transformMap[depth] = transformedTag.tagName;
					}
				}
				if (!tagAllowed(name) || options.disallowedTagsMode === "recursiveEscape" && !isEmptyObject(skipMap) || options.nestingLimit != null && depth >= options.nestingLimit) {
					skip = true;
					skipMap[depth] = true;
					if (options.disallowedTagsMode === "discard") {
						if (nonTextTagsArray.indexOf(name) !== -1) {
							skipText = true;
							skipTextDepth = 1;
						}
					}
					skipMap[depth] = true;
				}
				depth++;
				if (skip) {
					if (options.disallowedTagsMode === "discard") return;
					tempResult = result;
					result = "";
				}
				result += "<" + name;
				if (name === "script") {
					if (options.allowedScriptHostnames || options.allowedScriptDomains) frame.innerText = "";
				}
				if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap["*"]) each(attribs, function(value, a) {
					if (!VALID_HTML_ATTRIBUTE_NAME.test(a)) {
						delete frame.attribs[a];
						return;
					}
					if (value === "" && !options.allowedEmptyAttributes.includes(a) && (options.nonBooleanAttributes.includes(a) || options.nonBooleanAttributes.includes("*"))) {
						delete frame.attribs[a];
						return;
					}
					let passedAllowedAttributesMapCheck = false;
					if (!allowedAttributesMap || has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1 || allowedAttributesMap["*"] && allowedAttributesMap["*"].indexOf(a) !== -1 || has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a) || allowedAttributesGlobMap["*"] && allowedAttributesGlobMap["*"].test(a)) passedAllowedAttributesMapCheck = true;
					else if (allowedAttributesMap && allowedAttributesMap[name]) {
						for (const o of allowedAttributesMap[name]) if (isPlainObject(o) && o.name && o.name === a) {
							passedAllowedAttributesMapCheck = true;
							let newValue = "";
							if (o.multiple === true) {
								const splitStrArray = value.split(" ");
								for (const s of splitStrArray) if (o.values.indexOf(s) !== -1) if (newValue === "") newValue = s;
								else newValue += " " + s;
							} else if (o.values.indexOf(value) >= 0) newValue = value;
							value = newValue;
						}
					}
					if (passedAllowedAttributesMapCheck) {
						if (options.allowedSchemesAppliedToAttributes.indexOf(a) !== -1) {
							if (naughtyHref(name, value)) {
								delete frame.attribs[a];
								return;
							}
						}
						if (name === "script" && a === "src") {
							let allowed = true;
							try {
								const parsed = parseUrl(value);
								if (options.allowedScriptHostnames || options.allowedScriptDomains) {
									const allowedHostname = (options.allowedScriptHostnames || []).find(function(hostname) {
										return hostname === parsed.url.hostname;
									});
									const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
										return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
									});
									allowed = allowedHostname || allowedDomain;
								}
							} catch (e) {
								allowed = false;
							}
							if (!allowed) {
								delete frame.attribs[a];
								return;
							}
						}
						if (name === "iframe" && a === "src") {
							let allowed = true;
							try {
								const parsed = parseUrl(value);
								if (parsed.isRelativeUrl) allowed = has(options, "allowIframeRelativeUrls") ? options.allowIframeRelativeUrls : !options.allowedIframeHostnames && !options.allowedIframeDomains;
								else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
									const allowedHostname = (options.allowedIframeHostnames || []).find(function(hostname) {
										return hostname === parsed.url.hostname;
									});
									const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
										return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
									});
									allowed = allowedHostname || allowedDomain;
								}
							} catch (e) {
								allowed = false;
							}
							if (!allowed) {
								delete frame.attribs[a];
								return;
							}
						}
						if (a === "srcset") try {
							let parsed = parseSrcset(value);
							parsed.forEach(function(value$1) {
								if (naughtyHref("srcset", value$1.url)) value$1.evil = true;
							});
							parsed = filter(parsed, function(v) {
								return !v.evil;
							});
							if (!parsed.length) {
								delete frame.attribs[a];
								return;
							} else {
								value = stringifySrcset(filter(parsed, function(v) {
									return !v.evil;
								}));
								frame.attribs[a] = value;
							}
						} catch (e) {
							delete frame.attribs[a];
							return;
						}
						if (a === "class") {
							const allowedSpecificClasses = allowedClassesMap[name];
							const allowedWildcardClasses = allowedClassesMap["*"];
							const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
							const allowedSpecificClassesRegex = allowedClassesRegexMap[name];
							const allowedClassesGlobs = [allowedSpecificClassesGlob, allowedClassesGlobMap["*"]].concat(allowedSpecificClassesRegex).filter(function(t) {
								return t;
							});
							if (allowedSpecificClasses && allowedWildcardClasses) value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
							else value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
							if (!value.length) {
								delete frame.attribs[a];
								return;
							}
						}
						if (a === "style") {
							if (options.parseStyleAttributes) try {
								value = stringifyStyleAttributes(filterCss(postcssParse(name + " {" + value + "}", { map: false }), options.allowedStyles));
								if (value.length === 0) {
									delete frame.attribs[a];
									return;
								}
							} catch (e) {
								if (typeof window !== "undefined") console.warn("Failed to parse \"" + name + " {" + value + "}\", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547");
								delete frame.attribs[a];
								return;
							}
							else if (options.allowedStyles) throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
						}
						result += " " + a;
						if (value && value.length) result += "=\"" + escapeHtml(value, true) + "\"";
						else if (options.allowedEmptyAttributes.includes(a)) result += "=\"\"";
					} else delete frame.attribs[a];
				});
				if (options.selfClosing.indexOf(name) !== -1) result += " />";
				else {
					result += ">";
					if (frame.innerText && !hasText && !options.textFilter) {
						result += escapeHtml(frame.innerText);
						addedText = true;
					}
				}
				if (skip) {
					result = tempResult + escapeHtml(result);
					tempResult = "";
				}
			},
			ontext: function(text) {
				if (skipText) return;
				const lastFrame = stack[stack.length - 1];
				let tag;
				if (lastFrame) {
					tag = lastFrame.tag;
					text = lastFrame.innerText !== void 0 ? lastFrame.innerText : text;
				}
				if (options.disallowedTagsMode === "discard" && (tag === "script" || tag === "style")) result += text;
				else {
					const escaped = escapeHtml(text, false);
					if (options.textFilter && !addedText) result += options.textFilter(escaped, tag);
					else if (!addedText) result += escaped;
				}
				if (stack.length) {
					const frame = stack[stack.length - 1];
					frame.text += text;
				}
			},
			onclosetag: function(name, isImplied) {
				if (skipText) {
					skipTextDepth--;
					if (!skipTextDepth) skipText = false;
					else return;
				}
				const frame = stack.pop();
				if (!frame) return;
				if (frame.tag !== name) {
					stack.push(frame);
					return;
				}
				skipText = options.enforceHtmlBoundary ? name === "html" : false;
				depth--;
				const skip = skipMap[depth];
				if (skip) {
					delete skipMap[depth];
					if (options.disallowedTagsMode === "discard") {
						frame.updateParentNodeText();
						return;
					}
					tempResult = result;
					result = "";
				}
				if (transformMap[depth]) {
					name = transformMap[depth];
					delete transformMap[depth];
				}
				if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
					result = result.substr(0, frame.tagPosition);
					return;
				}
				frame.updateParentNodeMediaChildren();
				frame.updateParentNodeText();
				if (options.selfClosing.indexOf(name) !== -1 || isImplied && !tagAllowed(name) && ["escape", "recursiveEscape"].indexOf(options.disallowedTagsMode) >= 0) {
					if (skip) {
						result = tempResult;
						tempResult = "";
					}
					return;
				}
				result += "</" + name + ">";
				if (skip) {
					result = tempResult + escapeHtml(result);
					tempResult = "";
				}
				addedText = false;
			}
		}, options.parser);
		parser.write(html);
		parser.end();
		return result;
		function initializeState() {
			result = "";
			depth = 0;
			stack = [];
			skipMap = {};
			transformMap = {};
			skipText = false;
			skipTextDepth = 0;
		}
		function escapeHtml(s, quote$1) {
			if (typeof s !== "string") s = s + "";
			if (options.parser.decodeEntities) {
				s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				if (quote$1) s = s.replace(/"/g, "&quot;");
			}
			s = s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			if (quote$1) s = s.replace(/"/g, "&quot;");
			return s;
		}
		function naughtyHref(name, href) {
			href = href.replace(/[\x00-\x20]+/g, "");
			while (true) {
				const firstIndex = href.indexOf("<!--");
				if (firstIndex === -1) break;
				const lastIndex = href.indexOf("-->", firstIndex + 4);
				if (lastIndex === -1) break;
				href = href.substring(0, firstIndex) + href.substring(lastIndex + 3);
			}
			const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
			if (!matches) {
				if (href.match(/^[/\\]{2}/)) return !options.allowProtocolRelative;
				return false;
			}
			const scheme = matches[1].toLowerCase();
			if (has(options.allowedSchemesByTag, name)) return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
			return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
		}
		function parseUrl(value) {
			value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//");
			if (value.startsWith("relative:")) throw new Error("relative: exploit attempt");
			let base = "relative://relative-site";
			for (let i = 0; i < 100; i++) base += `/${i}`;
			const parsed = new URL(value, base);
			return {
				isRelativeUrl: parsed && parsed.hostname === "relative-site" && parsed.protocol === "relative:",
				url: parsed
			};
		}
		function filterCss(abstractSyntaxTree, allowedStyles) {
			if (!allowedStyles) return abstractSyntaxTree;
			const astRules = abstractSyntaxTree.nodes[0];
			let selectedRule;
			if (allowedStyles[astRules.selector] && allowedStyles["*"]) selectedRule = deepmerge(allowedStyles[astRules.selector], allowedStyles["*"]);
			else selectedRule = allowedStyles[astRules.selector] || allowedStyles["*"];
			if (selectedRule) abstractSyntaxTree.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
			return abstractSyntaxTree;
		}
		function stringifyStyleAttributes(filteredAST) {
			return filteredAST.nodes[0].nodes.reduce(function(extractedAttributes, attrObject) {
				extractedAttributes.push(`${attrObject.prop}:${attrObject.value}${attrObject.important ? " !important" : ""}`);
				return extractedAttributes;
			}, []).join(";");
		}
		function filterDeclarations(selectedRule) {
			return function(allowedDeclarationsList, attributeObject) {
				if (has(selectedRule, attributeObject.prop)) {
					if (selectedRule[attributeObject.prop].some(function(regularExpression) {
						return regularExpression.test(attributeObject.value);
					})) allowedDeclarationsList.push(attributeObject);
				}
				return allowedDeclarationsList;
			};
		}
		function filterClasses(classes, allowed, allowedGlobs) {
			if (!allowed) return classes;
			classes = classes.split(/\s+/);
			return classes.filter(function(clss) {
				return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
					return glob.test(clss);
				});
			}).join(" ");
		}
	}
	var htmlParserDefaults = { decodeEntities: true };
	sanitizeHtml.defaults = {
		allowedTags: [
			"address",
			"article",
			"aside",
			"footer",
			"header",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"hgroup",
			"main",
			"nav",
			"section",
			"blockquote",
			"dd",
			"div",
			"dl",
			"dt",
			"figcaption",
			"figure",
			"hr",
			"li",
			"main",
			"ol",
			"p",
			"pre",
			"ul",
			"a",
			"abbr",
			"b",
			"bdi",
			"bdo",
			"br",
			"cite",
			"code",
			"data",
			"dfn",
			"em",
			"i",
			"kbd",
			"mark",
			"q",
			"rb",
			"rp",
			"rt",
			"rtc",
			"ruby",
			"s",
			"samp",
			"small",
			"span",
			"strong",
			"sub",
			"sup",
			"time",
			"u",
			"var",
			"wbr",
			"caption",
			"col",
			"colgroup",
			"table",
			"tbody",
			"td",
			"tfoot",
			"th",
			"thead",
			"tr"
		],
		nonBooleanAttributes: [
			"abbr",
			"accept",
			"accept-charset",
			"accesskey",
			"action",
			"allow",
			"alt",
			"as",
			"autocapitalize",
			"autocomplete",
			"blocking",
			"charset",
			"cite",
			"class",
			"color",
			"cols",
			"colspan",
			"content",
			"contenteditable",
			"coords",
			"crossorigin",
			"data",
			"datetime",
			"decoding",
			"dir",
			"dirname",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"fetchpriority",
			"for",
			"form",
			"formaction",
			"formenctype",
			"formmethod",
			"formtarget",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"http-equiv",
			"id",
			"imagesizes",
			"imagesrcset",
			"inputmode",
			"integrity",
			"is",
			"itemid",
			"itemprop",
			"itemref",
			"itemtype",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"name",
			"nonce",
			"optimum",
			"pattern",
			"ping",
			"placeholder",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"referrerpolicy",
			"rel",
			"rows",
			"rowspan",
			"sandbox",
			"scope",
			"shape",
			"size",
			"sizes",
			"slot",
			"span",
			"spellcheck",
			"src",
			"srcdoc",
			"srclang",
			"srcset",
			"start",
			"step",
			"style",
			"tabindex",
			"target",
			"title",
			"translate",
			"type",
			"usemap",
			"value",
			"width",
			"wrap",
			"onauxclick",
			"onafterprint",
			"onbeforematch",
			"onbeforeprint",
			"onbeforeunload",
			"onbeforetoggle",
			"onblur",
			"oncancel",
			"oncanplay",
			"oncanplaythrough",
			"onchange",
			"onclick",
			"onclose",
			"oncontextlost",
			"oncontextmenu",
			"oncontextrestored",
			"oncopy",
			"oncuechange",
			"oncut",
			"ondblclick",
			"ondrag",
			"ondragend",
			"ondragenter",
			"ondragleave",
			"ondragover",
			"ondragstart",
			"ondrop",
			"ondurationchange",
			"onemptied",
			"onended",
			"onerror",
			"onfocus",
			"onformdata",
			"onhashchange",
			"oninput",
			"oninvalid",
			"onkeydown",
			"onkeypress",
			"onkeyup",
			"onlanguagechange",
			"onload",
			"onloadeddata",
			"onloadedmetadata",
			"onloadstart",
			"onmessage",
			"onmessageerror",
			"onmousedown",
			"onmouseenter",
			"onmouseleave",
			"onmousemove",
			"onmouseout",
			"onmouseover",
			"onmouseup",
			"onoffline",
			"ononline",
			"onpagehide",
			"onpageshow",
			"onpaste",
			"onpause",
			"onplay",
			"onplaying",
			"onpopstate",
			"onprogress",
			"onratechange",
			"onreset",
			"onresize",
			"onrejectionhandled",
			"onscroll",
			"onscrollend",
			"onsecuritypolicyviolation",
			"onseeked",
			"onseeking",
			"onselect",
			"onslotchange",
			"onstalled",
			"onstorage",
			"onsubmit",
			"onsuspend",
			"ontimeupdate",
			"ontoggle",
			"onunhandledrejection",
			"onunload",
			"onvolumechange",
			"onwaiting",
			"onwheel"
		],
		disallowedTagsMode: "discard",
		allowedAttributes: {
			a: [
				"href",
				"name",
				"target"
			],
			img: [
				"src",
				"srcset",
				"alt",
				"title",
				"width",
				"height",
				"loading"
			]
		},
		allowedEmptyAttributes: ["alt"],
		selfClosing: [
			"img",
			"br",
			"hr",
			"area",
			"base",
			"basefont",
			"input",
			"link",
			"meta"
		],
		allowedSchemes: [
			"http",
			"https",
			"ftp",
			"mailto",
			"tel"
		],
		allowedSchemesByTag: {},
		allowedSchemesAppliedToAttributes: [
			"href",
			"src",
			"cite"
		],
		allowProtocolRelative: true,
		enforceHtmlBoundary: false,
		parseStyleAttributes: true
	};
	sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge$1) {
		merge$1 = merge$1 === void 0 ? true : merge$1;
		newAttribs = newAttribs || {};
		return function(tagName, attribs) {
			let attrib;
			if (merge$1) for (attrib in newAttribs) attribs[attrib] = newAttribs[attrib];
			else attribs = newAttribs;
			return {
				tagName: newTagName,
				attribs
			};
		};
	};
}));
export { require_object_inspect as n, require_punycode as r, require_sanitize_html as t };
