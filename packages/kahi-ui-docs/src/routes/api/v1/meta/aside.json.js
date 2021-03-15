import {parse_aside} from "../../../../server/navigation";

export async function get(req, context) {
    const data = await parse_aside();

    return {
        body: {
            data,
        },
    };
}
