const wPost = (type, ...args) => postMessage({
	type,
	payload: args
});
const installAsyncProxy = function() {
	const toss = function(...args) {
		throw new Error(args.join(" "));
	};
	if (globalThis.window === globalThis) toss("This code cannot run from the main thread.", "Load it as a Worker from a separate Worker.");
	else if (!navigator?.storage?.getDirectory) toss("This API requires navigator.storage.getDirectory.");
	const state = Object.create(null);
	state.verbose = 1;
	const loggers = {
		0: console.error.bind(console),
		1: console.warn.bind(console),
		2: console.log.bind(console)
	};
	const logImpl = (level, ...args) => {
		if (state.verbose > level) loggers[level]("OPFS asyncer:", ...args);
	};
	const log = (...args) => logImpl(2, ...args);
	const warn = (...args) => logImpl(1, ...args);
	const error = (...args) => logImpl(0, ...args);
	const __openFiles = Object.create(null);
	const __implicitLocks = /* @__PURE__ */ new Set();
	const getResolvedPath = function(filename, splitIt) {
		const p = new URL(filename, "file://irrelevant").pathname;
		return splitIt ? p.split("/").filter((v) => !!v) : p;
	};
	const getDirForFilename = async function f(absFilename, createDirs = false) {
		const path = getResolvedPath(absFilename, true);
		const filename = path.pop();
		let dh = state.rootDir;
		for (const dirName of path) if (dirName) dh = await dh.getDirectoryHandle(dirName, { create: !!createDirs });
		return [dh, filename];
	};
	const closeSyncHandle = async (fh) => {
		if (fh.syncHandle) {
			log("Closing sync handle for", fh.filenameAbs);
			const h = fh.syncHandle;
			delete fh.syncHandle;
			delete fh.xLock;
			__implicitLocks.delete(fh.fid);
			return h.close();
		}
	};
	const closeSyncHandleNoThrow = async (fh) => {
		try {
			await closeSyncHandle(fh);
		} catch (e) {
			warn("closeSyncHandleNoThrow() ignoring:", e, fh);
		}
	};
	const releaseImplicitLocks = async () => {
		if (__implicitLocks.size) for (const fid of __implicitLocks) {
			const fh = __openFiles[fid];
			await closeSyncHandleNoThrow(fh);
			log("Auto-unlocked", fid, fh.filenameAbs);
		}
	};
	const releaseImplicitLock = async (fh) => {
		if (fh.releaseImplicitLocks && __implicitLocks.has(fh.fid)) return closeSyncHandleNoThrow(fh);
	};
	class GetSyncHandleError extends Error {
		constructor(errorObject, ...msg) {
			super([
				...msg,
				": " + errorObject.name + ":",
				errorObject.message
			].join(" "), { cause: errorObject });
			this.name = "GetSyncHandleError";
		}
	}
	GetSyncHandleError.convertRc = (e, rc) => {
		if (e instanceof GetSyncHandleError) {
			if (e.cause.name === "NoModificationAllowedError" || e.cause.name === "DOMException" && 0 === e.cause.message.indexOf("Access Handles cannot")) return state.sq3Codes.SQLITE_BUSY;
			else if ("NotFoundError" === e.cause.name) return state.sq3Codes.SQLITE_CANTOPEN;
		} else if ("NotFoundError" === e?.name) return state.sq3Codes.SQLITE_CANTOPEN;
		return rc;
	};
	const getSyncHandle = async (fh, opName) => {
		if (!fh.syncHandle) {
			const t = performance.now();
			log("Acquiring sync handle for", fh.filenameAbs);
			const maxTries = 6, msBase = state.asyncIdleWaitTime * 2;
			let i = 1, ms = msBase;
			for (;; ms = msBase * ++i) try {
				fh.syncHandle = await fh.fileHandle.createSyncAccessHandle();
				break;
			} catch (e) {
				if (i === maxTries) throw new GetSyncHandleError(e, "Error getting sync handle for", opName + "().", maxTries, "attempts failed.", fh.filenameAbs);
				warn("Error getting sync handle for", opName + "(). Waiting", ms, "ms and trying again.", fh.filenameAbs, e);
				Atomics.wait(state.sabOPView, state.opIds.retry, 0, ms);
			}
			log("Got", opName + "() sync handle for", fh.filenameAbs, "in", performance.now() - t, "ms");
			if (!fh.xLock) {
				__implicitLocks.add(fh.fid);
				log("Acquired implicit lock for", opName + "()", fh.fid, fh.filenameAbs);
			}
		}
		return fh.syncHandle;
	};
	const storeAndNotify = (opName, value) => {
		log(opName + "() => notify(", value, ")");
		Atomics.store(state.sabOPView, state.opIds.rc, value);
		Atomics.notify(state.sabOPView, state.opIds.rc);
	};
	const affirmNotRO = function(opName, fh) {
		if (fh.readOnly) toss(opName + "(): File is read-only: " + fh.filenameAbs);
	};
	let flagAsyncShutdown = false;
	const vfsAsyncImpls = {
		"opfs-async-shutdown": async () => {
			flagAsyncShutdown = true;
			storeAndNotify("opfs-async-shutdown", 0);
		},
		mkdir: async (dirname) => {
			let rc = 0;
			try {
				await getDirForFilename(dirname + "/filepart", true);
			} catch (e) {
				state.s11n.storeException(2, e);
				rc = state.sq3Codes.SQLITE_IOERR;
			}
			storeAndNotify("mkdir", rc);
		},
		xAccess: async (filename) => {
			let rc = 0;
			try {
				const [dh, fn] = await getDirForFilename(filename);
				await dh.getFileHandle(fn);
			} catch (e) {
				state.s11n.storeException(2, e);
				rc = state.sq3Codes.SQLITE_IOERR;
			}
			storeAndNotify("xAccess", rc);
		},
		xClose: async function(fid) {
			const opName = "xClose";
			__implicitLocks.delete(fid);
			const fh = __openFiles[fid];
			let rc = 0;
			if (fh) {
				delete __openFiles[fid];
				await closeSyncHandle(fh);
				if (fh.deleteOnClose) try {
					await fh.dirHandle.removeEntry(fh.filenamePart);
				} catch (e) {
					warn("Ignoring dirHandle.removeEntry() failure of", fh, e);
				}
			} else {
				state.s11n.serialize();
				rc = state.sq3Codes.SQLITE_NOTFOUND;
			}
			storeAndNotify(opName, rc);
		},
		xDelete: async function(...args) {
			storeAndNotify("xDelete", await vfsAsyncImpls.xDeleteNoWait(...args));
		},
		xDeleteNoWait: async function(filename, syncDir = 0, recursive = false) {
			let rc = 0;
			try {
				while (filename) {
					const [hDir, filenamePart] = await getDirForFilename(filename, false);
					if (!filenamePart) break;
					await hDir.removeEntry(filenamePart, { recursive });
					if (4660 !== syncDir) break;
					recursive = false;
					filename = getResolvedPath(filename, true);
					filename.pop();
					filename = filename.join("/");
				}
			} catch (e) {
				state.s11n.storeException(2, e);
				rc = state.sq3Codes.SQLITE_IOERR_DELETE;
			}
			return rc;
		},
		xFileSize: async function(fid) {
			const fh = __openFiles[fid];
			let rc = 0;
			try {
				const sz = await (await getSyncHandle(fh, "xFileSize")).getSize();
				state.s11n.serialize(Number(sz));
			} catch (e) {
				state.s11n.storeException(1, e);
				rc = GetSyncHandleError.convertRc(e, state.sq3Codes.SQLITE_IOERR);
			}
			await releaseImplicitLock(fh);
			storeAndNotify("xFileSize", rc);
		},
		xLock: async function(fid, lockType) {
			const fh = __openFiles[fid];
			let rc = 0;
			const oldLockType = fh.xLock;
			fh.xLock = lockType;
			if (!fh.syncHandle) try {
				await getSyncHandle(fh, "xLock");
				__implicitLocks.delete(fid);
			} catch (e) {
				state.s11n.storeException(1, e);
				rc = GetSyncHandleError.convertRc(e, state.sq3Codes.SQLITE_IOERR_LOCK);
				fh.xLock = oldLockType;
			}
			storeAndNotify("xLock", rc);
		},
		xOpen: async function(fid, filename, flags, opfsFlags) {
			const opName = "xOpen";
			const create = state.sq3Codes.SQLITE_OPEN_CREATE & flags;
			try {
				let hDir, filenamePart;
				try {
					[hDir, filenamePart] = await getDirForFilename(filename, !!create);
				} catch (e) {
					state.s11n.storeException(1, e);
					storeAndNotify(opName, state.sq3Codes.SQLITE_NOTFOUND);
					return;
				}
				if (state.opfsFlags.OPFS_UNLINK_BEFORE_OPEN & opfsFlags) try {
					await hDir.removeEntry(filenamePart);
				} catch (e) {}
				const hFile = await hDir.getFileHandle(filenamePart, { create });
				const fh = Object.assign(Object.create(null), {
					fid,
					filenameAbs: filename,
					filenamePart,
					dirHandle: hDir,
					fileHandle: hFile,
					sabView: state.sabFileBufView,
					readOnly: !create && !!(state.sq3Codes.SQLITE_OPEN_READONLY & flags),
					deleteOnClose: !!(state.sq3Codes.SQLITE_OPEN_DELETEONCLOSE & flags)
				});
				fh.releaseImplicitLocks = opfsFlags & state.opfsFlags.OPFS_UNLOCK_ASAP || state.opfsFlags.defaultUnlockAsap;
				__openFiles[fid] = fh;
				storeAndNotify(opName, 0);
			} catch (e) {
				error(opName, e);
				state.s11n.storeException(1, e);
				storeAndNotify(opName, state.sq3Codes.SQLITE_IOERR);
			}
		},
		xRead: async function(fid, n, offset64) {
			let rc = 0, nRead;
			const fh = __openFiles[fid];
			try {
				nRead = (await getSyncHandle(fh, "xRead")).read(fh.sabView.subarray(0, n), { at: Number(offset64) });
				if (nRead < n) {
					fh.sabView.fill(0, nRead, n);
					rc = state.sq3Codes.SQLITE_IOERR_SHORT_READ;
				}
			} catch (e) {
				error("xRead() failed", e, fh);
				state.s11n.storeException(1, e);
				rc = GetSyncHandleError.convertRc(e, state.sq3Codes.SQLITE_IOERR_READ);
			}
			await releaseImplicitLock(fh);
			storeAndNotify("xRead", rc);
		},
		xSync: async function(fid, flags) {
			const fh = __openFiles[fid];
			let rc = 0;
			if (!fh.readOnly && fh.syncHandle) try {
				await fh.syncHandle.flush();
			} catch (e) {
				state.s11n.storeException(2, e);
				rc = state.sq3Codes.SQLITE_IOERR_FSYNC;
			}
			storeAndNotify("xSync", rc);
		},
		xTruncate: async function(fid, size) {
			let rc = 0;
			const fh = __openFiles[fid];
			try {
				affirmNotRO("xTruncate", fh);
				await (await getSyncHandle(fh, "xTruncate")).truncate(size);
			} catch (e) {
				error("xTruncate():", e, fh);
				state.s11n.storeException(2, e);
				rc = GetSyncHandleError.convertRc(e, state.sq3Codes.SQLITE_IOERR_TRUNCATE);
			}
			await releaseImplicitLock(fh);
			storeAndNotify("xTruncate", rc);
		},
		xUnlock: async function(fid, lockType) {
			let rc = 0;
			const fh = __openFiles[fid];
			if (fh.syncHandle && state.sq3Codes.SQLITE_LOCK_NONE === lockType) try {
				await closeSyncHandle(fh);
			} catch (e) {
				state.s11n.storeException(1, e);
				rc = state.sq3Codes.SQLITE_IOERR_UNLOCK;
			}
			storeAndNotify("xUnlock", rc);
		},
		xWrite: async function(fid, n, offset64) {
			let rc;
			const fh = __openFiles[fid];
			try {
				affirmNotRO("xWrite", fh);
				rc = n === (await getSyncHandle(fh, "xWrite")).write(fh.sabView.subarray(0, n), { at: Number(offset64) }) ? 0 : state.sq3Codes.SQLITE_IOERR_WRITE;
			} catch (e) {
				error("xWrite():", e, fh);
				state.s11n.storeException(1, e);
				rc = GetSyncHandleError.convertRc(e, state.sq3Codes.SQLITE_IOERR_WRITE);
			}
			await releaseImplicitLock(fh);
			storeAndNotify("xWrite", rc);
		}
	};
	const initS11n = () => {
		if (state.s11n) return state.s11n;
		const textDecoder = new TextDecoder(), textEncoder = new TextEncoder("utf-8"), viewU8 = new Uint8Array(state.sabIO, state.sabS11nOffset, state.sabS11nSize), viewDV = new DataView(state.sabIO, state.sabS11nOffset, state.sabS11nSize);
		state.s11n = Object.create(null);
		const TypeIds = Object.create(null);
		TypeIds.number = {
			id: 1,
			size: 8,
			getter: "getFloat64",
			setter: "setFloat64"
		};
		TypeIds.bigint = {
			id: 2,
			size: 8,
			getter: "getBigInt64",
			setter: "setBigInt64"
		};
		TypeIds.boolean = {
			id: 3,
			size: 4,
			getter: "getInt32",
			setter: "setInt32"
		};
		TypeIds.string = { id: 4 };
		const getTypeId = (v) => TypeIds[typeof v] || toss("Maintenance required: this value type cannot be serialized.", v);
		const getTypeIdById = (tid) => {
			switch (tid) {
				case TypeIds.number.id: return TypeIds.number;
				case TypeIds.bigint.id: return TypeIds.bigint;
				case TypeIds.boolean.id: return TypeIds.boolean;
				case TypeIds.string.id: return TypeIds.string;
				default: toss("Invalid type ID:", tid);
			}
		};
		state.s11n.deserialize = function(clear = false) {
			const argc = viewU8[0];
			const rc = argc ? [] : null;
			if (argc) {
				const typeIds = [];
				let offset = 1, i, n, v;
				for (i = 0; i < argc; ++i, ++offset) typeIds.push(getTypeIdById(viewU8[offset]));
				for (i = 0; i < argc; ++i) {
					const t = typeIds[i];
					if (t.getter) {
						v = viewDV[t.getter](offset, state.littleEndian);
						offset += t.size;
					} else {
						n = viewDV.getInt32(offset, state.littleEndian);
						offset += 4;
						v = textDecoder.decode(viewU8.slice(offset, offset + n));
						offset += n;
					}
					rc.push(v);
				}
			}
			if (clear) viewU8[0] = 0;
			return rc;
		};
		state.s11n.serialize = function(...args) {
			if (args.length) {
				const typeIds = [];
				let i = 0, offset = 1;
				viewU8[0] = args.length & 255;
				for (; i < args.length; ++i, ++offset) {
					typeIds.push(getTypeId(args[i]));
					viewU8[offset] = typeIds[i].id;
				}
				for (i = 0; i < args.length; ++i) {
					const t = typeIds[i];
					if (t.setter) {
						viewDV[t.setter](offset, args[i], state.littleEndian);
						offset += t.size;
					} else {
						const s = textEncoder.encode(args[i]);
						viewDV.setInt32(offset, s.byteLength, state.littleEndian);
						offset += 4;
						viewU8.set(s, offset);
						offset += s.byteLength;
					}
				}
			} else viewU8[0] = 0;
		};
		state.s11n.storeException = state.asyncS11nExceptions ? (priority, e) => {
			if (priority <= state.asyncS11nExceptions) state.s11n.serialize([
				e.name,
				": ",
				e.message
			].join(""));
		} : () => {};
		return state.s11n;
	};
	const waitLoop = async function f() {
		const opHandlers = Object.create(null);
		for (let k of Object.keys(state.opIds)) {
			const vi = vfsAsyncImpls[k];
			if (!vi) continue;
			const o = Object.create(null);
			opHandlers[state.opIds[k]] = o;
			o.key = k;
			o.f = vi;
		}
		while (!flagAsyncShutdown) try {
			if ("not-equal" !== Atomics.wait(state.sabOPView, state.opIds.whichOp, 0, state.asyncIdleWaitTime)) {
				await releaseImplicitLocks();
				continue;
			}
			const opId = Atomics.load(state.sabOPView, state.opIds.whichOp);
			Atomics.store(state.sabOPView, state.opIds.whichOp, 0);
			const hnd = opHandlers[opId] ?? toss("No waitLoop handler for whichOp #", opId);
			const args = state.s11n.deserialize(true) || [];
			if (hnd.f) await hnd.f(...args);
			else error("Missing callback for opId", opId);
		} catch (e) {
			error("in waitLoop():", e);
		}
	};
	navigator.storage.getDirectory().then(function(d) {
		state.rootDir = d;
		globalThis.onmessage = function({ data }) {
			switch (data.type) {
				case "opfs-async-init": {
					const opt = data.args;
					for (const k in opt) state[k] = opt[k];
					state.verbose = opt.verbose ?? 1;
					state.sabOPView = new Int32Array(state.sabOP);
					state.sabFileBufView = new Uint8Array(state.sabIO, 0, state.fileBufferSize);
					state.sabS11nView = new Uint8Array(state.sabIO, state.sabS11nOffset, state.sabS11nSize);
					Object.keys(vfsAsyncImpls).forEach((k) => {
						if (!Number.isFinite(state.opIds[k])) toss("Maintenance required: missing state.opIds[", k, "]");
					});
					initS11n();
					log("init state", state);
					wPost("opfs-async-inited");
					waitLoop();
					break;
				}
				case "opfs-async-restart":
					if (flagAsyncShutdown) {
						warn("Restarting after opfs-async-shutdown. Might or might not work.");
						flagAsyncShutdown = false;
						waitLoop();
					}
					break;
			}
		};
		wPost("opfs-async-loaded");
	}).catch((e) => error("error initializing OPFS asyncer:", e));
};
if (!globalThis.SharedArrayBuffer) wPost("opfs-unavailable", "Missing SharedArrayBuffer API.", "The server must emit the COOP/COEP response headers to enable that.");
else if (!globalThis.Atomics) wPost("opfs-unavailable", "Missing Atomics API.", "The server must emit the COOP/COEP response headers to enable that.");
else if (!globalThis.FileSystemHandle || !globalThis.FileSystemDirectoryHandle || !globalThis.FileSystemFileHandle || !globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle || !navigator?.storage?.getDirectory) wPost("opfs-unavailable", "Missing required OPFS APIs.");
else installAsyncProxy();
