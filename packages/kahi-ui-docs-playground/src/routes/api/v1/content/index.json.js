import {get_content} from "../../../../server/content";

export async function get(req, context) {
    const data = await get_content();

    return {
        body: {
            data,
        },
    };
}
