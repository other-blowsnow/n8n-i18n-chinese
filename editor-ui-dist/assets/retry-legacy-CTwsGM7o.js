;
(function () {
  System.register([], function (_export, _context) {
    "use strict";

    //#region ../../@n8n/utils/src/retry.ts
    /**
    * A utility that retries a function every `interval` milliseconds
    * until the function returns true or the maximum number of retries is reached.
    *
    * @param fn - A function that returns a boolean or a Promise resolving to a boolean.
    * @param interval - The time interval (in milliseconds) between each retry. Defaults to 1000.
    * @param maxRetries - The maximum number of retry attempts. Defaults to 3.
    * @param backoff - The backoff strategy to use: 'linear', 'exponential', or null.
    * @returns {Promise<boolean>} - A promise that resolves to:
    *   - true: If the function returns true before reaching maxRetries.
    *   - false: If the function never returns true or if an error occurs.
    */
    async function retry(fn, interval = 1e3, maxRetries = 3, backoff = "linear") {
      let attempt = 0;
      while (attempt < maxRetries) {
        attempt++;
        try {
          if (await fn()) return true;
        } catch (error) {
          console.error("Error during retry:", error);
          throw error;
        }
        if (attempt < maxRetries) {
          let computedInterval = interval;
          if (backoff === "linear") computedInterval = interval * attempt;else if (backoff === "exponential") {
            computedInterval = Math.pow(2, attempt - 1) * interval;
            computedInterval = Math.min(computedInterval, 3e4);
          }
          await new Promise(resolve => setTimeout(resolve, computedInterval));
        }
      }
      return false;
    }

    //#endregion
    _export("t", retry);
    return {
      setters: [],
      execute: function () {}
    };
  });
})();