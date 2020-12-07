import {router} from "svelte-commons";

import Index from "./routes/index.svelte";

import DocumentationIndex from "./routes/documentation/index.svelte";

export default router(
    {
        /** Landing Routes */

        "/": Index,

        /** Documentation Routes */

        "/documentation": DocumentationIndex,
        "/documentation/:category": DocumentationIndex,
        "/documentation/:category/:page": DocumentationIndex,
    },
    {hash: true}
);
