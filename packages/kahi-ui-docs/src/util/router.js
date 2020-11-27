import {router} from "svelte-commons";

import Index from "../routes/index.svelte";

import DocumentationIndex from "../routes/documentation/index.svelte";

export const APPLICATION_ROUTES = {
    /** Landing Routes */

    "/": Index,

    /** Documentation Routes */

    "/documentation": DocumentationIndex,
};

export const APPLICATION_ROUTER = router(APPLICATION_ROUTES, {hash: true});
