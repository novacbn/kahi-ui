import {read_content, resolve_path} from "../../../../server/content";

export async function get(req, context) {
    let {identifier = ""} = req.params;

    const file_path = await resolve_path(identifier);
    if (!file_path) {
        return {
            status: 404,
            body: {
                message: "FileNotFound",
            },
        };
    }

    const data = await read_content(file_path);

    return {
        body: {
            data,
        },
    };
}
