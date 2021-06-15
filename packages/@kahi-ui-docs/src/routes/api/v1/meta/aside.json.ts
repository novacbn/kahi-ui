import type {RequestHandler} from "@sveltejs/kit";

import {parse_navigation} from "../../../../server/navigation";

import {NAVIGATION_ASIDE} from "../../../../shared/environment";
import type {IAsideGet} from "../../../../shared/types/api";

export const get: RequestHandler = async (request) => {
    // HACK: Apparently `JSONValue` doesn't like my purely JSON data?

    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        body: {
            data: await parse_navigation(NAVIGATION_ASIDE),
        } as IAsideGet as any,
    };
};
