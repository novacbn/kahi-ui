import {router} from "svelte-commons";

import Index from "./routes/index.svelte";

import ReplIndex from "./routes/repl/index.svelte";
import ReplCreate from "./routes/repl/create.svelte";
import ReplWorkspace from "./routes/repl/[identifier].svelte";

export default router(
    {
        /** Landing Routes */

        "/": Index,

        /** Repl Routes */

        "/repl": ReplIndex,
        "/repl/create": ReplCreate,
        "/repl/workspace/:identifier": ReplWorkspace,
    },
    {hash: true}
);
