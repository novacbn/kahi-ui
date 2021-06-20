import type {Stats} from "fs";
import {promises} from "fs";
import {basename, dirname, join, relative} from "path";
const {lstat, readFile} = promises;

import {can_access, render_article} from "@kahi-ui/docs-kit/server";
import type {IArticleMeta} from "@kahi-ui/docs-kit/shared";

import {CONTENT_URL} from "../shared/environment";
import type {IContent, IContentMeta} from "../shared/types/content";

import {PATH_CONTENT} from "./environment";

function normalize_metadata(identifier: string, meta: IArticleMeta, stats: Stats): IContentMeta {
    const {properties, sections, snippets, title} = meta;
    const btime = meta.btime ?? stats.birthtimeMs;
    const mtime = meta.mtime ?? stats.mtimeMs;
    const href = `${CONTENT_URL}/${identifier}`;

    return {
        identifier,
        href,
        title,
        btime,
        mtime,
        properties,
        sections,
        snippets,
    };
}

export function get_content_path(path: string): string {
    const file_name = basename(path);
    const directory_path = dirname(path);

    return join(PATH_CONTENT, directory_path, `${file_name}.md`);
}

export function has_content(path: string): Promise<boolean> {
    path = get_content_path(path);

    return can_access(path);
}

export async function read_content(path: string): Promise<IContent> {
    path = get_content_path(path);

    const stats = await lstat(path);
    const buffer = await readFile(path);

    const text = buffer.toString();

    const identifier = relative(PATH_CONTENT, path).split(".md")[0];
    const {meta, render} = render_article(text, {
        identifier,

        links: {
            extensions: [".md"],
        },
    });

    return {
        meta: normalize_metadata(identifier, meta, stats),
        render,
    };
}
