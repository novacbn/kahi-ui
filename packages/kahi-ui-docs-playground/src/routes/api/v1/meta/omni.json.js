import {parse_omni} from "../../../../server/navigation";

export async function get(req, context) {
    const data = await parse_omni();

    return {
        body: {
            data,
        },
    };
}
