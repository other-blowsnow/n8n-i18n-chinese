import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { $c as getAvailableCommunityPackageCount, dl as STORES, el as getInstalledCommunityNodes, nl as uninstallPackage, pi as isAuthenticated, rl as updatePackage, tl as installNewPackage } from "./users.store-DNsxOyr9.js";
import { j as defineStore, r as useRootStore } from "./_baseOrderBy-CeJ-xzyO.js";
var LOADER_DELAY = 300;
const useCommunityNodesStore = defineStore(STORES.COMMUNITY_NODES, () => {
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
		const installedPackages$1 = await getInstalledCommunityNodes(rootStore.restApiContext);
		setInstalledPackages(installedPackages$1);
		const timeout = installedPackages$1.length > 0 ? 0 : LOADER_DELAY;
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
export { useCommunityNodesStore as t };
