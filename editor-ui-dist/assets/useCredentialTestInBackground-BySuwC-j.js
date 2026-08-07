import { vt as useCredentialsStore } from "./workflows.store-CqcYpj8n.js";
//#region src/features/credentials/composables/useCredentialTestInBackground.ts
function useCredentialTestInBackground() {
	const credentialsStore = useCredentialsStore();
	/**
	* Checks whether a credential type has a test mechanism defined.
	* Returns true if either the credential type itself defines a `test` block
	* or any node with access declares `testedBy` for it.
	*/
	const isCredentialTypeTestable = (credentialTypeName) => {
		if (credentialsStore.getCredentialTypeByName(credentialTypeName)?.test) return true;
		return credentialsStore.getNodesWithAccess(credentialTypeName).some((node) => node.credentials?.some((cred) => cred.name === credentialTypeName && cred.testedBy));
	};
	/**
	* Tests a saved credential in the background.
	* Fetches the credential's redacted data first so the backend can unredact and test.
	* Skips if the credential is already tested OK or has a test in flight.
	* The result is tracked automatically in the credentials store as a side effect of testCredential.
	*/
	async function testCredentialInBackground(credentialId, credentialName, credentialType) {
		if (!isCredentialTypeTestable(credentialType)) return;
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		let credentialData;
		try {
			credentialData = (await credentialsStore.getCredentialData({ id: credentialId }))?.data;
		} catch {
			credentialData = void 0;
		}
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		if (!credentialData || typeof credentialData === "string") {
			if (!credentialsStore.credentialTestResults.has(credentialId)) credentialsStore.credentialTestResults.set(credentialId, "success");
			return;
		}
		const { ownedBy, sharedWithProjects, oauthTokenData, ...data } = credentialData;
		if (oauthTokenData) {
			credentialsStore.credentialTestResults.set(credentialId, "success");
			return;
		}
		try {
			await credentialsStore.testCredential({
				id: credentialId,
				name: credentialName,
				type: credentialType,
				data
			});
		} catch {}
	}
	function hydrateCredentialTestResults(results) {
		for (const { id, success } of results) credentialsStore.credentialTestResults.set(id, success ? "success" : "error");
	}
	return {
		isCredentialTypeTestable,
		testCredentialInBackground,
		hydrateCredentialTestResults
	};
}
//#endregion
export { useCredentialTestInBackground as t };
