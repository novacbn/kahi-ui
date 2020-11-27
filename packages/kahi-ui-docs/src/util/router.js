import {router} from "svelte-commons";

import Index from "../routes/index.svelte";

import DocumentationIndex from "../routes/documentation/index.svelte";

import TestIndex from "../routes/test/index.svelte";

export const APPLICATION_ROUTES = {
    /** Landing Routes */

    "/": Index,

    /** Documentation Routes */

    "/documentation": DocumentationIndex,

    /** Playground Routes */

    /** Test Routes */

    "/test": TestIndex,
};

export const APPLICATION_ROUTER = router(APPLICATION_ROUTES, {hash: true});
