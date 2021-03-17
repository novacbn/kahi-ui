import {browser} from "$app/env";

import {FileSystemOverlay, LocalStorageAdapter} from "uristorage";

import {STORAGE_NAMESPACE} from "../shared/environment";

const STORAGE_ADAPTER = browser
    ? new LocalStorageAdapter({
          namespace: STORAGE_NAMESPACE,
      })
    : null;

const STORAGE_FILESYSTEM = browser ? new FileSystemOverlay(STORAGE_ADAPTER) : null;

export function get_filesystem() {
    if (!browser) {
        throw new Error("bad dispatch to 'get_filesystem' (SSR not supported)");
    }

    if (STORAGE_FILESYSTEM.is_mounted()) return STORAGE_FILESYSTEM;

    throw new Error("bad dispatch to 'get_filesystem' (adapter not mounted)");
}

export function is_mounted() {
    if (!browser) {
        throw new Error("bad dispatch to 'get_filesystem' (SSR not supported)");
    }

    return STORAGE_FILESYSTEM.is_mounted();
}

export function mount() {
    if (!browser) {
        throw new Error("bad dispatch to 'get_filesystem' (SSR not supported)");
    }

    return STORAGE_FILESYSTEM.mount();
}

export function unmount() {
    if (!browser) {
        throw new Error("bad dispatch to 'get_filesystem' (SSR not supported)");
    }

    return STORAGE_FILESYSTEM.unmount();
}
