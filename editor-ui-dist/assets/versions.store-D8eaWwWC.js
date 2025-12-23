import { C as computed, It as ref } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { $o as useSettingsStore, Cc as STORES, Qo as useStorage, Wi as useUIStore, dr as useUsersStore, n as useToast, ns as getNextVersions, p as useTelemetry, rs as getWhatsNewSection } from "./builder.store-BjWbk2Wl.js";
import { Aa as jsonParse, Ms as LOCAL_STORAGE_DISMISSED_WHATS_NEW_CALLOUT, Ws as LOCAL_STORAGE_READ_WHATS_NEW_ARTICLES, hs as WHATS_NEW_MODAL_KEY, ms as VERSIONS_MODAL_KEY } from "./constants-ksa9xIxI.js";
import { k as defineStore, r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
const SEMVER_REGEX = /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const useVersionsStore = defineStore(STORES.VERSIONS, () => {
	const versionNotificationSettings = ref({
		enabled: false,
		whatsNewEnabled: false,
		endpoint: "",
		whatsNewEndpoint: "",
		infoUrl: ""
	});
	const nextVersions = ref([]);
	const currentVersion = ref();
	const whatsNew = ref({
		title: "",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: null,
		calloutText: "",
		footer: "",
		items: []
	});
	const whatsNewCallout = ref();
	const telemetry = useTelemetry();
	const { showToast, showMessage } = useToast();
	const uiStore = useUIStore();
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const readWhatsNewArticlesStorage = useStorage(LOCAL_STORAGE_READ_WHATS_NEW_ARTICLES);
	const lastDismissedWhatsNewCalloutStorage = useStorage(LOCAL_STORAGE_DISMISSED_WHATS_NEW_CALLOUT);
	const hasVersionUpdates = computed(() => {
		return settingsStore.settings.releaseChannel === "stable" && nextVersions.value.length > 0;
	});
	const hasSignificantUpdates = computed(() => {
		if (!hasVersionUpdates.value || !currentVersion.value || !latestVersion.value) return false;
		if (currentVersion.value.hasSecurityIssue) return true;
		const current = currentVersion.value.name.match(SEMVER_REGEX);
		const latest = latestVersion.value.name.match(SEMVER_REGEX);
		if (!current?.groups || !latest?.groups) return false;
		if (Number(current.groups.major) !== Number(latest.groups.major)) return true;
		const currentMinor = Number(current.groups.minor);
		return Number(latest.groups.minor) - currentMinor >= 2;
	});
	const latestVersion = computed(() => {
		return nextVersions.value[0] ?? currentVersion.value;
	});
	const areNotificationsEnabled = computed(() => {
		return versionNotificationSettings.value.enabled;
	});
	const infoUrl = computed(() => {
		return versionNotificationSettings.value.infoUrl;
	});
	const readWhatsNewArticles = computed(() => {
		return readWhatsNewArticlesStorage.value ? jsonParse(readWhatsNewArticlesStorage.value, { fallbackValue: [] }) : [];
	});
	const lastDismissedWhatsNewCallout = computed(() => {
		return lastDismissedWhatsNewCalloutStorage.value ? jsonParse(lastDismissedWhatsNewCalloutStorage.value, { fallbackValue: [] }) : [];
	});
	const whatsNewArticles = computed(() => {
		return whatsNew.value.items;
	});
	const fetchVersions = async () => {
		try {
			const { enabled, endpoint } = versionNotificationSettings.value;
			if (enabled && endpoint) {
				const rootStore = useRootStore();
				const current = rootStore.versionCli;
				const instanceId = rootStore.instanceId;
				setVersions({
					versions: await getNextVersions(endpoint, current, instanceId),
					currentVersion: current
				});
			}
		} catch (e) {
			console.error("Failed to fetch versions:", e);
		}
	};
	const setVersions = (params) => {
		nextVersions.value = params.versions.filter((v) => v.name !== params.currentVersion);
		currentVersion.value = params.versions.find((v) => v.name === params.currentVersion);
	};
	const setWhatsNew = (section) => {
		whatsNew.value = section;
	};
	const setWhatsNewArticleRead = (articleId) => {
		if (!readWhatsNewArticles.value.includes(articleId)) readWhatsNewArticlesStorage.value = JSON.stringify([...readWhatsNewArticles.value, articleId]);
	};
	const isWhatsNewArticleRead = (articleId) => {
		return readWhatsNewArticles.value.includes(articleId);
	};
	const closeWhatsNewCallout = () => {
		whatsNewCallout.value?.close();
		whatsNewCallout.value = void 0;
	};
	const dismissWhatsNewCallout = () => {
		lastDismissedWhatsNewCalloutStorage.value = JSON.stringify(whatsNewArticles.value.map((item) => item.id));
	};
	const shouldShowWhatsNewCallout = () => {
		const createdAt = usersStore.currentUser?.createdAt;
		let hasNewArticle = false;
		if (createdAt) {
			const userCreatedAt = new Date(createdAt).getTime();
			hasNewArticle = whatsNewArticles.value.some((item) => {
				return (item.updatedAt ? new Date(item.updatedAt).getTime() : 0) > userCreatedAt;
			});
		} else hasNewArticle = true;
		const allArticlesDismissed = whatsNewArticles.value.every((item) => lastDismissedWhatsNewCallout.value.includes(item.id));
		return hasNewArticle && !allArticlesDismissed;
	};
	const fetchWhatsNew = async () => {
		try {
			const { enabled, whatsNewEnabled, whatsNewEndpoint } = versionNotificationSettings.value;
			if (enabled && whatsNewEnabled && whatsNewEndpoint) {
				const rootStore = useRootStore();
				const current = rootStore.versionCli;
				const instanceId = rootStore.instanceId;
				const section = await getWhatsNewSection(whatsNewEndpoint, current, instanceId);
				if (section.items?.length > 0) {
					setWhatsNew(section);
					if (shouldShowWhatsNewCallout()) whatsNewCallout.value = showMessage({
						title: whatsNew.value.title,
						message: whatsNew.value.calloutText,
						duration: 0,
						position: "bottom-left",
						customClass: "clickable whats-new-notification",
						onClick: () => {
							const articleId = whatsNew.value.items[0]?.id ?? 0;
							telemetry.track("User clicked on what's new notification", { article_id: articleId });
							uiStore.openModalWithData({
								name: WHATS_NEW_MODAL_KEY,
								data: { articleId }
							});
						},
						onClose: () => {
							dismissWhatsNewCallout();
						}
					});
				}
			}
		} catch (e) {
			console.error("Failed to fetch Whats New section:", e);
		}
	};
	const initialize = (settings) => {
		versionNotificationSettings.value = settings;
	};
	const checkForNewVersions = async () => {
		if (!areNotificationsEnabled.value) return;
		await Promise.all([fetchVersions(), fetchWhatsNew()]);
		if (currentVersion.value && currentVersion.value.hasSecurityIssue && nextVersions.value.length) {
			const fixVersion = currentVersion.value.securityIssueFixVersion;
			let message = "Please update to latest version.";
			if (fixVersion) message = `Please update to version ${fixVersion} or higher.`;
			message = `${message} <a class="primary-color">More info</a>`;
			showToast({
				title: "Critical update available",
				message,
				onClick: () => {
					uiStore.openModal(VERSIONS_MODAL_KEY);
				},
				closeOnClick: true,
				customClass: "clickable",
				type: "warning",
				duration: 0
			});
		}
	};
	return {
		currentVersion,
		latestVersion,
		nextVersions,
		hasVersionUpdates,
		hasSignificantUpdates,
		areNotificationsEnabled,
		infoUrl,
		fetchVersions,
		setVersions,
		initialize,
		checkForNewVersions,
		fetchWhatsNew,
		whatsNew,
		whatsNewArticles,
		isWhatsNewArticleRead,
		setWhatsNewArticleRead,
		closeWhatsNewCallout,
		shouldShowWhatsNewCallout,
		dismissWhatsNewCallout
	};
});
export { useVersionsStore as t };
