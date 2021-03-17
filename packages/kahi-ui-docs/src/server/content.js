import {constants, promises} from "fs";
import {join, relative} from "path";
import {cwd} from "process";
const {lstat, readFile} = promises;

import fg from "fast-glob";

import {substitute_value} from "@kahi-ui/docs-kit/shared";
import {can_access, render_article} from "@kahi-ui/docs-kit/server";

import {CONTENT_INDEX, CONTENT_ROUTE, EDIT_ENABLED} from "../shared/environment";

import {
    CONTENT_EXTENSION,
    EDIT_URL,
    FRONTMATTER_FENCE,
    FRONTMATTER_SYNTAX,
    PATH_CONTENT,
    PATH_ROOT,
} from "./environment";

const PROCESS_CWD = cwd();

const PATH_CONTENT_ABSOLUTE = join(PROCESS_CWD, PATH_CONTENT);

const GLOB_CONTENT = join(PATH_CONTENT_ABSOLUTE, `**/*${CONTENT_EXTENSION}`);

function normalize_file_metadata(file_path, meta, stats) {
    let name = relative(PATH_CONTENT_ABSOLUTE, file_path);
    if (name.endsWith(`${CONTENT_INDEX}${CONTENT_EXTENSION}`)) {
        name = name.slice(0, -(CONTENT_INDEX.length + CONTENT_EXTENSION.length + 1));
    } else name = name.slice(0, -CONTENT_EXTENSION.length);

    let edit_url = null;
    if (EDIT_ENABLED) {
        const root_path = join(PROCESS_CWD, PATH_ROOT);
        const edit_path = relative(root_path, file_path);

        edit_url = substitute_value(EDIT_URL, edit_path);
    }

    const {sections, snippets, title} = meta;
    const btime = meta.btime ?? stats.birthtimeMs;
    const mtime = meta.mtime ?? stats.mtimeMs;
    const href = `${CONTENT_ROUTE}/${name}`;

    return {
        href,
        title,
        btime,
        mtime,
        edit_url,
        sections,
        snippets,
    };
}

export async function get_content() {
    const file_paths = await fg(GLOB_CONTENT);

    const pages = file_paths.map(async (file_path) => read_content(file_path));

    return await Promise.all(pages);
}

export async function read_content(file_path) {
    const stats = await lstat(file_path);
    const buffer = await readFile(file_path);

    const text = buffer.toString();

    const {meta, render} = render_article(text, {
        frontmatter: {
            fence: FRONTMATTER_FENCE,
            syntax: FRONTMATTER_SYNTAX,
        },

        links: {
            extensions: [CONTENT_EXTENSION],
            indexes: [CONTENT_INDEX],
        },
    });

    return {
        meta: normalize_file_metadata(file_path, meta, stats),
        render,
    };
}

export async function resolve_path(...paths) {
    const path = join(...paths);

    const file_path = join(PATH_CONTENT_ABSOLUTE, `${path}${CONTENT_EXTENSION}`);
    if (await can_access(file_path, constants.R_OK)) return file_path;

    return null;
}
