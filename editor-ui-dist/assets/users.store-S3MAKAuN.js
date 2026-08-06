import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as useAsyncState } from "./dist-CmlFwYoT.js";
import { i as defineStore, t as STORES } from "./constants-B-Dofn0a.js";
import { b as ROLE } from "./src-CY9eW8M_.js";
import { At as disableMfa, C as updateCurrentUserPassword, D as validatePasswordToken, E as updateOtherUserSettings, Ln as sendConfirmationEmail, Mt as getMfaQR, Nt as updateEnforceMfa, O as validateSignupToken, Pt as verifyMfaCode, S as updateCurrentUser, T as updateGlobalRole, Xn as makeRestApiRequest, Zn as post, _ as loginCurrentUser, ar as BROWSER_ID_STORAGE_KEY, b as setupOwner, d as changePassword, f as deleteUser, g as login, h as getUsers, jt as enableMfa, kt as canEnableMFA, m as getPasswordResetLink, p as generateInviteLink, t as useRootStore, v as logout, w as updateCurrentUserSettings, x as submitPersonalizationSurvey, y as sendForgotPasswordEmail } from "./useRootStore-B4GkZ-3x.js";
import { t as useSettingsStore } from "./settings.store-CIaGjG2x.js";
//#region ../@n8n/stores/src/invitation.api.ts
async function inviteUsers(context, params) {
	return await makeRestApiRequest(context, "POST", "/invitations", params);
}
async function acceptInvitation(context, params) {
	if (!params.token) throw new Error("Token is required");
	return await makeRestApiRequest(context, "POST", "/invitations/accept", params);
}
//#endregion
//#region ../@n8n/stores/src/onboarding.api.ts
var N8N_API_BASE_URL = "https://api.n8n.io/api";
var CONTACT_EMAIL_SUBMISSION_ENDPOINT = "/accounts/onboarding";
async function submitEmailOnSignup(instanceId, currentUser, email, agree) {
	return await post(N8N_API_BASE_URL, CONTACT_EMAIL_SUBMISSION_ENDPOINT, {
		instance_id: instanceId,
		user_id: `${instanceId}#${currentUser.id}`,
		email,
		agree,
		agree_updates: true
	});
}
//#endregion
//#region ../@n8n/stores/src/users.store.ts
/**
* Registration key of the app's personalization modal, passed to the injected
* modal opener. Mirrors `PERSONALIZATION_MODAL_KEY` in editor-ui's
* `users.constants`; kept as a literal so the store carries no `@/app` import.
*/
var PERSONALIZATION_MODAL_KEY = "personalization";
var _isPendingUser = (user) => !!user?.isPending;
var _isInstanceOwner = (user) => user?.role === ROLE.Owner;
var _isDefaultUser = (user) => _isInstanceOwner(user) && _isPendingUser(user);
var _isAdmin = (user) => user?.role === ROLE.Admin;
var useUsersStore = defineStore(STORES.USERS, () => {
	const initialized = ref(false);
	const currentUserId = ref(null);
	const usersById = ref({});
	const userQuota = ref(-1);
	const loginHooks = ref([]);
	const logoutHooks = ref([]);
	const warnModalOpenerMissing = (action) => {};
	const modalOpeners = ref({
		openModal: (name) => warnModalOpenerMissing(`openModal(${String(name)})`),
		openModalWithData: (payload) => warnModalOpenerMissing(`openModalWithData(${String(payload.name)})`)
	});
	const registerModalOpeners = (openers) => {
		modalOpeners.value = openers;
	};
	const canListUsers = ref(() => false);
	const setPermissionsResolvers = (resolvers) => {
		canListUsers.value = resolvers.listUsers;
	};
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const allUsers = computed(() => Object.values(usersById.value));
	const currentUser = computed(() => currentUserId.value ? usersById.value[currentUserId.value] : null);
	const userActivated = computed(() => Boolean(currentUser.value?.settings?.userActivated));
	const isDefaultUser = computed(() => _isDefaultUser(currentUser.value));
	const isInstanceOwner = computed(() => _isInstanceOwner(currentUser.value));
	const isAdmin = computed(() => _isAdmin(currentUser.value));
	const isAdminOrOwner = computed(() => isInstanceOwner.value || isAdmin.value);
	const mfaEnabled = computed(() => currentUser.value?.mfaEnabled ?? false);
	const globalRoleName = computed(() => currentUser.value?.role ?? "default");
	const userClaimedAiCredits = computed(() => currentUser.value?.settings?.userClaimedAiCredits);
	const isEasyAIWorkflowOnboardingDone = computed(() => Boolean(currentUser.value?.settings?.easyAIWorkflowOnboarded));
	const canUserUpdateVersion = computed(() => {
		return isInstanceOwner.value;
	});
	const setEasyAIWorkflowOnboardingDone = () => {
		if (currentUser.value?.settings) currentUser.value.settings.easyAIWorkflowOnboarded = true;
	};
	const isCalloutDismissed = (callout) => Boolean(currentUser.value?.settings?.dismissedCallouts?.[callout]);
	const setCalloutDismissed = (callout) => {
		if (currentUser.value?.settings) {
			currentUser.value.settings.dismissedCallouts ??= {};
			currentUser.value.settings.dismissedCallouts[callout] = true;
		}
	};
	const usersLimitNotReached = computed(() => userQuota.value === -1 || userQuota.value > allUsers.value.length);
	const addUsers = (newUsers) => {
		newUsers.forEach((userResponse) => {
			const updatedUser = {
				...usersById.value[userResponse.id] || {},
				...userResponse
			};
			const user = {
				...updatedUser,
				fullName: userResponse.firstName ? `${updatedUser.firstName} ${updatedUser.lastName ?? ""}` : void 0,
				isDefaultUser: _isDefaultUser(updatedUser),
				isPendingUser: _isPendingUser(updatedUser)
			};
			usersById.value = {
				...usersById.value,
				[user.id]: user
			};
		});
	};
	const setCurrentUser = async (user) => {
		addUsers([user]);
		currentUserId.value = user.id;
		for (const hook of loginHooks.value) try {
			await hook(user);
		} catch (error) {
			console.error("Error executing login hook:", error);
		}
	};
	const loginWithCookie = async () => {
		const user = await loginCurrentUser(rootStore.restApiContext);
		if (!user) return;
		await setCurrentUser(user);
	};
	const initialize = async () => {
		if (initialized.value) return;
		try {
			await loginWithCookie();
			initialized.value = true;
		} catch {}
	};
	const unsetCurrentUser = () => {
		currentUserId.value = null;
	};
	const deleteUserById = (userId) => {
		const { [userId]: _, ...rest } = usersById.value;
		usersById.value = rest;
	};
	const setPersonalizationAnswers = (answers) => {
		if (!currentUser.value) return;
		usersById.value = {
			...usersById.value,
			[currentUser.value.id]: {
				...currentUser.value,
				personalizationAnswers: answers
			}
		};
	};
	const loginWithCreds = async (params) => {
		const user = await login(rootStore.restApiContext, params);
		if (!user) return;
		await setCurrentUser(user);
	};
	const registerLoginHook = (hook) => {
		loginHooks.value.push(hook);
	};
	const registerLogoutHook = (hook) => {
		logoutHooks.value.push(hook);
	};
	const logout$1 = async () => {
		await logout(rootStore.restApiContext);
		unsetCurrentUser();
		for (const hook of logoutHooks.value) try {
			await hook();
		} catch (error) {
			console.error("Error executing logout hook:", error);
		}
		localStorage.removeItem(BROWSER_ID_STORAGE_KEY);
	};
	const createOwner = async (params) => {
		const user = await setupOwner(rootStore.restApiContext, params);
		if (user) {
			await setCurrentUser(user);
			settingsStore.stopShowingSetupPage();
		}
	};
	const validateSignupToken$1 = async (params) => {
		return await validateSignupToken(rootStore.restApiContext, params);
	};
	const acceptInvitation$1 = async (params) => {
		const user = await acceptInvitation(rootStore.restApiContext, params);
		if (user) await setCurrentUser(user);
	};
	const sendForgotPasswordEmail$1 = async (params) => {
		await sendForgotPasswordEmail(rootStore.restApiContext, params);
	};
	const validatePasswordToken$1 = async (params) => {
		await validatePasswordToken(rootStore.restApiContext, params);
	};
	const changePassword$1 = async (params) => {
		await changePassword(rootStore.restApiContext, params);
	};
	const updateUser = async (params) => {
		const user = await updateCurrentUser(rootStore.restApiContext, params);
		addUsers([user]);
		return user;
	};
	const updateUserName = async (params) => {
		if (!currentUser.value) return;
		return await updateUser({
			email: currentUser.value.email,
			...params
		});
	};
	const updateUserSettings = async (settings) => {
		const updatedSettings = await updateCurrentUserSettings(rootStore.restApiContext, settings);
		if (currentUser.value) {
			currentUser.value.settings = updatedSettings;
			addUsers([currentUser.value]);
		}
	};
	const updateOtherUserSettings$1 = async (userId, settings) => {
		await updateOtherUserSettings(rootStore.restApiContext, userId, settings);
	};
	const updateCurrentUserPassword$1 = async (params) => {
		await updateCurrentUserPassword(rootStore.restApiContext, params);
	};
	const deleteUser$1 = async (params) => {
		await deleteUser(rootStore.restApiContext, params);
		deleteUserById(params.id);
	};
	const fetchUsers = async ({ take, skip, filter } = {}) => {
		if (!canListUsers.value()) return;
		const { items } = await getUsers(rootStore.restApiContext, {
			take: take ?? 50,
			skip: skip ?? 0,
			filter
		});
		addUsers(items);
	};
	const inviteUsers$1 = async (params) => {
		const invitedUsers = await inviteUsers(rootStore.restApiContext, params);
		addUsers(invitedUsers.map(({ user }) => ({
			isPending: true,
			...user
		})));
		return invitedUsers;
	};
	const reinviteUser = async ({ email, role }) => {
		const invitationResponse = await inviteUsers(rootStore.restApiContext, [{
			email,
			role
		}]);
		if (!invitationResponse[0].user.emailSent) throw Error(invitationResponse[0].error);
	};
	const getUserPasswordResetLink = async (params) => {
		return await getPasswordResetLink(rootStore.restApiContext, params);
	};
	const generateInviteLink$1 = async (params) => {
		return await generateInviteLink(rootStore.restApiContext, params);
	};
	const submitPersonalizationSurvey$1 = async (results) => {
		await submitPersonalizationSurvey(rootStore.restApiContext, results);
		setPersonalizationAnswers(results);
	};
	const showPersonalizationSurvey = () => {
		if (settingsStore.isPersonalizationSurveyEnabled && currentUser.value && !currentUser.value.personalizationAnswers) modalOpeners.value.openModal(PERSONALIZATION_MODAL_KEY);
	};
	const fetchMfaQR = async () => {
		return await getMfaQR(rootStore.restApiContext);
	};
	const verifyMfaCode$1 = async (data) => {
		return await verifyMfaCode(rootStore.restApiContext, data);
	};
	const canEnableMFA$1 = async () => {
		return await canEnableMFA(rootStore.restApiContext);
	};
	const enableMfa$1 = async (data) => {
		await enableMfa(rootStore.restApiContext, data);
		if (currentUser.value) currentUser.value.mfaEnabled = true;
	};
	const disableMfa$1 = async (data) => {
		await disableMfa(rootStore.restApiContext, data);
		if (currentUser.value) currentUser.value.mfaEnabled = false;
	};
	const updateEnforceMfa$1 = async (enforce) => {
		await updateEnforceMfa(rootStore.restApiContext, enforce);
		settingsStore.isMFAEnforced = enforce;
	};
	const sendConfirmationEmail$1 = async () => {
		await sendConfirmationEmail(rootStore.restApiContext);
	};
	const updateGlobalRole$1 = async ({ id, newRoleName }) => {
		await updateGlobalRole(rootStore.restApiContext, {
			id,
			newRoleName
		});
		await fetchUsers({ filter: { ids: [id] } });
	};
	const submitContactEmail = async (email, agree) => {
		if (currentUser.value) return await submitEmailOnSignup(rootStore.instanceId, currentUser.value, email ?? currentUser.value.email, agree);
		return null;
	};
	const usersList = useAsyncState(async (filter) => await getUsers(rootStore.restApiContext, filter), {
		count: 0,
		items: []
	}, {
		immediate: false,
		resetOnExecute: false
	});
	const setUserQuota = (quota) => {
		if (typeof quota !== "undefined") userQuota.value = quota;
	};
	return {
		initialized,
		currentUserId,
		usersById,
		allUsers,
		currentUser,
		userActivated,
		isDefaultUser,
		isInstanceOwner,
		isAdmin,
		isAdminOrOwner,
		mfaEnabled,
		globalRoleName,
		userClaimedAiCredits,
		isEasyAIWorkflowOnboardingDone,
		canUserUpdateVersion,
		usersLimitNotReached,
		addUsers,
		loginWithCookie,
		initialize,
		setPersonalizationAnswers,
		loginWithCreds,
		logout: logout$1,
		registerLoginHook,
		registerLogoutHook,
		registerModalOpeners,
		setPermissionsResolvers,
		createOwner,
		validateSignupToken: validateSignupToken$1,
		acceptInvitation: acceptInvitation$1,
		sendForgotPasswordEmail: sendForgotPasswordEmail$1,
		validatePasswordToken: validatePasswordToken$1,
		changePassword: changePassword$1,
		updateUser,
		updateUserName,
		updateUserSettings,
		updateOtherUserSettings: updateOtherUserSettings$1,
		updateCurrentUserPassword: updateCurrentUserPassword$1,
		deleteUser: deleteUser$1,
		fetchUsers,
		inviteUsers: inviteUsers$1,
		reinviteUser,
		getUserPasswordResetLink,
		generateInviteLink: generateInviteLink$1,
		submitPersonalizationSurvey: submitPersonalizationSurvey$1,
		showPersonalizationSurvey,
		fetchMfaQR,
		verifyMfaCode: verifyMfaCode$1,
		enableMfa: enableMfa$1,
		disableMfa: disableMfa$1,
		updateEnforceMfa: updateEnforceMfa$1,
		canEnableMFA: canEnableMFA$1,
		sendConfirmationEmail: sendConfirmationEmail$1,
		updateGlobalRole: updateGlobalRole$1,
		setEasyAIWorkflowOnboardingDone,
		isCalloutDismissed,
		setCalloutDismissed,
		submitContactEmail,
		setUserQuota,
		usersList
	};
});
//#endregion
export { useUsersStore as t };
