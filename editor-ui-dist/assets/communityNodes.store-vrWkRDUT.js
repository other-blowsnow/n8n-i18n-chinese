import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { Rn as STORES, _n as installNewPackage, gn as getInstalledCommunityNodes, hn as getAvailableCommunityPackageCount, vn as uninstallPackage, yn as updatePackage } from "./settings.store-B-RgkKfn.js";
import { o as isAuthenticated } from "./users.store-0wV1ayWS.js";
//#region src/features/settings/communityNodes/communityNodes.store.ts
var LOADER_DELAY = 300;
var useCommunityNodesStore = defineStore(STORES.COMMUNITY_NODES, () => {
	const availablePackageCount = ref(-1);
	const installedPackages = ref({});
	const rootStore = useRootStore();
	const getInstalledPackages = computed(() => {
		return Object.values(installedPackages.value).sort((a, b) => a.packageName.localeCompare(b.packageName));
	});
	const fetchAvailableCommunityPackageCount = async () => {
		if (availablePackageCount.value === -1) availablePackageCount.value = await getAvailableCommunityPackageCount();
	};
	const setInstalledPackages = (packages) => {
		installedPackages.value = packages.reduce((packageMap, pack) => {
			packageMap[pack.packageName] = pack;
			return packageMap;
		}, {});
	};
	const fetchInstalledPackages = async () => {
		if (!isAuthenticated()) return;
		const installedPackages = await getInstalledCommunityNodes(rootStore.restApiContext);
		setInstalledPackages(installedPackages);
		const timeout = installedPackages.length > 0 ? 0 : LOADER_DELAY;
		setTimeout(() => {}, timeout);
	};
	const installPackage = async (packageName, verify, version) => {
		await installNewPackage(rootStore.restApiContext, packageName, verify, version);
		await fetchInstalledPackages();
	};
	const uninstallPackage$1 = async (packageName) => {
		await uninstallPackage(rootStore.restApiContext, packageName);
		removePackageByName(packageName);
	};
	const removePackageByName = (name) => {
		const { [name]: removedPackage, ...remainingPackages } = installedPackages.value;
		installedPackages.value = remainingPackages;
	};
	const updatePackageObject = (newPackage) => {
		installedPackages.value[newPackage.packageName] = newPackage;
	};
	const updatePackage$1 = async (packageName, version, checksum) => {
		const packageToUpdate = installedPackages.value[packageName];
		updatePackageObject(await updatePackage(rootStore.restApiContext, packageToUpdate.packageName, version, checksum));
	};
	const getInstalledPackage = async (packageName) => {
		if (!getInstalledPackages.value.length) await fetchInstalledPackages();
		return getInstalledPackages.value.find((p) => p.packageName === packageName);
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
});
//#endregion
export { useCommunityNodesStore as t };
