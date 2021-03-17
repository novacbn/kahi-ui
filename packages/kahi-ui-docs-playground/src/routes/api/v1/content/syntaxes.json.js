import {get_content} from "../../../../server/content";

export async function get(req, context) {
    const data = await get_content();
    const available_syntaxes = new Set();

    for (const sample of data) {
        const {syntaxes} = sample;

        for (const syntax of syntaxes) available_syntaxes.add(syntax);
    }

    return {
        body: {
            data: Array.from(available_syntaxes),
        },
    };
}
