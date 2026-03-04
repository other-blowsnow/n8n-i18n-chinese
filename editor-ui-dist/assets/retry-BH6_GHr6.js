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
			if (backoff === "linear") computedInterval = interval * attempt;
			else if (backoff === "exponential") {
				computedInterval = Math.pow(2, attempt - 1) * interval;
				computedInterval = Math.min(computedInterval, 3e4);
			}
			await new Promise((resolve) => setTimeout(resolve, computedInterval));
		}
	}
	return false;
}
export { retry as t };
