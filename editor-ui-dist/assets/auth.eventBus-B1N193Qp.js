import { T as createEventBus } from "./truncate-rcNKCMAS.js";
const confirmPasswordEventBus = createEventBus();
const mfaEventBus = createEventBus();
const promptMfaCodeBus = createEventBus();
export { mfaEventBus as n, promptMfaCodeBus as r, confirmPasswordEventBus as t };
