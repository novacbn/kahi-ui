import {base} from "$app/paths";
import type {initialize, register, search} from "@novacbn/svelte-stork";

import {memoize} from "@kahi-ui/docs-kit/shared";

import {VERSION_TAG} from "../shared/environment";

export interface IImportedSearch {
    // TODO: Need to investigate better subpackage typing
    // support for `@novacbn/svelte-stork/components`

    initialize: typeof initialize;

    register: typeof register;

    search: typeof search;

    Stork: any;
}

export const import_search = memoize<Promise<IImportedSearch>>(async () => {
    const [search_lib, search_components] = await Promise.all([
        import("@novacbn/svelte-stork"),
        // @ts-expect-error - HACK: Need to investigate better subpackage typing support
        import("@novacbn/svelte-stork/components"),
    ]);

    return {
        initialize: search_lib.initialize,
        register: search_lib.register,
        search: search_lib.search,
        Stork: search_components,
    };
});

export const initialize_search = memoize<Promise<IImportedSearch>>(async () => {
    const imports = await import_search();
    const {initialize, register} = imports;

    await initialize({
        script_url: `${base}/assets/stork/stork-v1.2.1.js`,
        wasm_url: `${base}/assets/stork/stork-v1.2.1.wasm`,
    });

    await register({
        index_name: `kahi-ui_docs_v${VERSION_TAG}`,
        index_url: `${base}/assets/stork/kahi-ui_docs_v${VERSION_TAG}.st`,
    });

    return imports;
});
