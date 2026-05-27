//#region src/features/agents/provider-mapping.ts
/**
* Maps ChatHub provider IDs (camelCase, e.g. 'xAiGrok') to Agent SDK catalog
* IDs (lowercase, e.g. 'xai') used by the models.dev catalog and the agent
* code's `.model('provider', 'model-name')` call.
*/
var CHATHUB_TO_CATALOG = {
	openai: "openai",
	anthropic: "anthropic",
	google: "google",
	ollama: "ollama",
	azureOpenAi: "azure-openai",
	azureEntraId: "azure-openai",
	awsBedrock: "aws-bedrock",
	vercelAiGateway: "vercel",
	xAiGrok: "xai",
	groq: "groq",
	openRouter: "openrouter",
	deepSeek: "deepseek",
	cohere: "cohere",
	mistralCloud: "mistral"
};
/**
* Reverse mapping: catalog ID → ChatHub provider ID.
* When multiple ChatHub IDs map to the same catalog ID (e.g. azureOpenAi and
* azureEntraId both map to 'azure-openai'), the first one wins.
*/
var CATALOG_TO_CHATHUB = {};
for (const [chatHub, catalog] of Object.entries(CHATHUB_TO_CATALOG)) if (!(catalog in CATALOG_TO_CHATHUB)) CATALOG_TO_CHATHUB[catalog] = chatHub;
/**
* ChatHub provider IDs that the @n8n/agents runtime does not support.
* These are filtered out in the Agents UI so users cannot select them.
*/
var AGENT_UNSUPPORTED_PROVIDERS = new Set(["ollama"]);
//#endregion
//#region src/features/agents/utils/model-string.ts
var MODEL_STRING_PATTERN = /^[a-z0-9-]+\/(?:[a-z0-9._-]+\/)*[a-z0-9._-]+$/i;
/** Split `"<provider>/<name>"` on the first `/`. Returns null when malformed. */
function parseModelString(model) {
	if (!MODEL_STRING_PATTERN.test(model)) return null;
	const slashIndex = model.indexOf("/");
	return {
		provider: model.slice(0, slashIndex),
		name: model.slice(slashIndex + 1)
	};
}
/** Build the canonical string. Pass-through for already-string inputs. */
function modelToString(raw) {
	if (!raw) return "";
	if (typeof raw === "string") return raw;
	return `${raw.provider ?? ""}/${raw.name ?? ""}`;
}
/** Read just the provider, accepting either string or object form. */
function parseProvider(raw) {
	if (!raw) return "";
	if (typeof raw === "object") return raw.provider ?? "";
	return parseModelString(raw)?.provider ?? "";
}
/**
* Normalise provider-specific id quirks. Currently only Google's `"models/"`
* prefix is stripped — other providers pass through unchanged.
*/
function sanitizeModelId(provider, modelId) {
	if (provider === "google") return modelId.replace(/^models\//, "");
	return modelId;
}
//#endregion
export { AGENT_UNSUPPORTED_PROVIDERS as a, sanitizeModelId as i, parseModelString as n, CATALOG_TO_CHATHUB as o, parseProvider as r, CHATHUB_TO_CATALOG as s, modelToString as t };
