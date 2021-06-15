import {join, relative} from "path";

import {load} from "cheerio";
import fg from "fast-glob";
import type {RequestHandler} from "@sveltejs/kit";

import {read_content} from "../../../../server/content";
import {PATH_CONTENT} from "../../../../server/environment";

// TODO: This should probably be all within a script made for Node, but it
// was easier to do an API route to easily access / reuse the codebase for
// parsing the documentation

export interface IStorkIndex {
    input: {
        url_prefix: string;

        files: {
            contents: string;

            filetype: "PlainText";

            url: string;

            title: string;
        }[];
    };
}

async function read_all_content() {
    const files = await fg(join(PATH_CONTENT, "**/*.md"));

    return Promise.all(
        files.map((file_path) => {
            file_path = file_path.slice(0, -3);
            file_path = relative(PATH_CONTENT, file_path);

            return read_content(file_path);
        })
    );
}

export const get: RequestHandler = async (request) => {
    const articles = await read_all_content();
    const files: IStorkIndex["input"]["files"] = articles.map((article) => {
        const {render} = article;
        const {identifier, title} = article.meta;

        const $ = load(render);
        $(".card").remove();

        return {
            contents: $.text(),
            filetype: "PlainText",
            url: identifier,
            title,
        };
    });

    const stork: IStorkIndex = {
        input: {
            url_prefix: "https://kahi-ui.nbn.dev/docs/",
            files,
        },
    };

    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        body: {
            data: stork as any,
        },
    };
};
