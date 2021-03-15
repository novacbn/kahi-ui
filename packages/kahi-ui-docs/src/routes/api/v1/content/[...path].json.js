import {read_content, resolve_path} from "../../../../server/content";

export async function get(req, context) {
    let {path = []} = req.params;

    let file_path = await resolve_path(...path);
    if (!file_path) file_path = await resolve_path(...path.slice(0, -1));

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
