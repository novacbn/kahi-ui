import type {RequestHandler} from "@sveltejs/kit";

import {has_content, read_content} from "../../../../../server/content";
import type {IContentGet, IRouteError} from "../../../../../shared/types/api";

export const get: RequestHandler = async (request) => {
    const {category = "", documentation = ""} = request.params;
    const path = `${category}/${documentation}`;

    if (!(await has_content(path))) {
        return {
            status: 404,
            headers: {
                "content-type": "application/json",
            },

            body: {
                code: "PathNotFound",
            } as IRouteError,
        };
    }

    // HACK: Apparently `JSONValue` doesn't like my purely JSON data?

    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        body: {
            data: await read_content(path),
        } as IContentGet as any,
    };
};
