import { A as tags, h as foldNodeProp, k as styleTags, m as foldInside, r as LRLanguage } from "./dist-qNs_-cZw.js";
import { u as LRParser } from "./dist-Ch2qeyMr.js";
//#region ../../@n8n/codemirror-lang/src/expressions/grammar.ts
var parser = LRParser.deserialize({
	version: 14,
	states: "nQQOPOOOOOO'#Cb'#CbOOOO'#C`'#C`QQOPOOOOOO-E6^-E6^",
	stateData: "Y~OQPORPO~O",
	goto: "bVPPPPWP^QRORSRTQOR",
	nodeNames: "⚠ Program Plaintext Resolvable",
	maxTerm: 6,
	skippedNodes: [0],
	repeatNodeCount: 1,
	tokenData: "%o~RTO#ob#o#p!h#p;'Sb;'S;=`!]<%lOb~gTQ~O#ob#o#pv#p;'Sb;'S;=`!]<%lOb~yUO#ob#p;'Sb;'S;=`!]<%l~b~Ob~~!c~!`P;=`<%lb~!hOQ~~!kVO#ob#o#p#Q#p;'Sb;'S;=`!]<%l~b~Ob~~!c~#TVO#O#Q#O#P#j#P#q#Q#q#r%Q#r;'S#Q;'S;=`%i<%lO#Q~#mVO#O#Q#O#P#j#P#q#Q#q#r$S#r;'S#Q;'S;=`%i<%lO#Q~$VTO#q#Q#q#r$f#r;'S#Q;'S;=`%i<%lO#Q~$kVR~O#O#Q#O#P#j#P#q#Q#q#r%Q#r;'S#Q;'S;=`%i<%lO#Q~%TTO#q#Q#q#r%d#r;'S#Q;'S;=`%i<%lO#Q~%iOR~~%lP;=`<%l#Q",
	tokenizers: [0],
	topRules: { Program: [0, 1] },
	tokenPrec: 0
});
//#endregion
//#region ../../@n8n/codemirror-lang/src/expressions/index.ts
var expressionParser = parser;
var parserWithMetaData = parser.configure({ props: [foldNodeProp.add({ Application: foldInside }), styleTags({
	OpenMarker: tags.brace,
	CloseMarker: tags.brace,
	Plaintext: tags.content,
	Resolvable: tags.string
})] });
LRLanguage.define({
	parser: parserWithMetaData,
	languageData: { commentTokens: { line: ";" } }
});
//#endregion
export { parserWithMetaData as n, expressionParser as t };
