import {router} from "svelte-commons";

import Index from "../routes/index.svelte";

import ReplIndex from "../routes/repl/index.svelte";
import ReplWorkspace from "../routes/repl/[identifier].svelte";

export const APPLICATION_ROUTES = {
    /** Landing Routes */

    "/": Index,

    /** Repl Routes */

    "/repl": ReplIndex,
    "/repl/:identifier": ReplWorkspace,
};

export const APPLICATION_ROUTER = router(APPLICATION_ROUTES, {hash: true});
