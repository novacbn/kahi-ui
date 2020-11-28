import {FileSystemOverlay, LocalStorageAdapter} from "uristorage";

import {STORAGE_NAMESPACE} from "./constants";

const STORAGE_ADAPTER = new LocalStorageAdapter({
    namespace: STORAGE_NAMESPACE,
});

const STORAGE_FILESYSTEM = new FileSystemOverlay(STORAGE_ADAPTER);

export function get_filesystem() {
    if (STORAGE_FILESYSTEM.is_mounted()) return STORAGE_FILESYSTEM;

    throw new Error("bad dispatch to 'get_filesystem' (adapter not mounted)");
}

export function is_mounted() {
    return STORAGE_FILESYSTEM.is_mounted();
}

export function mount() {
    return STORAGE_FILESYSTEM.mount();
}

export function unmount() {
    return STORAGE_FILESYSTEM.unmount();
}
