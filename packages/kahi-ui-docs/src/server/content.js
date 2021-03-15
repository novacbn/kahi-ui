import {constants, promises} from "fs";
import {join, relative} from "path";
import {cwd} from "process";
const {lstat, readFile} = promises;

import fg from "fast-glob";
import matter from "gray-matter";
import json5 from "json5";
import toml from "toml";

import {CONTENT_INDEX, CONTENT_ROUTE, EDIT_ENABLED} from "../shared/environment";
import {substitute_value} from "../shared/util/string";

import {
    CONTENT_EXTENSION,
    EDIT_URL,
    FRONTMATTER_FENCE,
    FRONTMATTER_LANGUAGE,
    PATH_CONTENT,
    PATH_ROOT,
} from "./environment";
import {compile} from "./markdown";

import {can_access} from "./util/fs";

const PROCESS_CWD = cwd();

const EXPRESSION_HEADERS = [
    /^#\s(.+)$/m,
    /^##\s(.+)$/m,
    /^###\s(.+)$/m,
    /^####\s(.+)$/m,
    /^#####\s(.+)$/m,
    /^######\s(.+)$/m,
];

const PATH_CONTENT_ABSOLUTE = join(PROCESS_CWD, PATH_CONTENT);

const GLOB_CONTENT = join(PATH_CONTENT_ABSOLUTE, `**/*${CONTENT_EXTENSION}`);

const MATTER_OPTIONS = {
    delims: FRONTMATTER_FENCE,
    language: FRONTMATTER_LANGUAGE,
    engines: {
        json5: json5.parse.bind(json5),
        toml: toml.parse.bind(toml),
    },
};

export function extract_header(text) {
    for (let expression of EXPRESSION_HEADERS) {
        const match = text.match(expression);
        if (match) return match[1];
    }

    return null;
}

export function extract_metadata(text) {
    const {content, data} = matter(text, MATTER_OPTIONS);

    return {
        content,
        meta: data,
    };
}

export async function get_content() {
    const file_paths = await fg(GLOB_CONTENT);

    const pages = file_paths.map(async (file_path) => {
        const buffer = await readFile(file_path);
        const text = buffer.toString();

        const {content, meta} = extract_metadata(text);
        return normalize_metadata(file_path, content, meta);
    });

    return await Promise.all(pages);
}

export function normalize_metadata(file_path, content, meta, stats) {
    let name = relative(PATH_CONTENT_ABSOLUTE, file_path);
    if (name.endsWith(`${CONTENT_INDEX}${CONTENT_EXTENSION}`)) {
        name = name.slice(0, -(CONTENT_INDEX.length + CONTENT_EXTENSION.length + 1));
    } else name = name.slice(0, -CONTENT_EXTENSION.length);

    const href = `${CONTENT_ROUTE}/${name}`;

    let {title = null} = meta;
    if (!title) title = extract_header(content) ?? "N/A";

    let edit_url = null;
    if (EDIT_ENABLED) {
        const root_path = join(PROCESS_CWD, PATH_ROOT);
        const edit_path = relative(root_path, file_path);

        edit_url = substitute_value(EDIT_URL, edit_path);
    }

    const {birthtimeMs, mtimeMs} = stats;

    return {
        href,
        edit_url,
        btime: birthtimeMs,
        mtime: mtimeMs,
        title,
    };
}

export async function read_content(file_path) {
    const stats = await lstat(file_path);
    const buffer = await readFile(file_path);
    const text = buffer.toString();

    const {content, meta} = extract_metadata(text);
    const render = compile(content);

    return {
        meta: normalize_metadata(file_path, content, meta, stats),
        render,
    };
}

export async function read_metadata(file_path) {
    const stats = await lstat(file_path);
    const buffer = await readFile(file_path);
    const text = buffer.toString();

    const {content, meta} = extract_metadata(text);
    return normalize_metadata(file_path, content, meta, stats);
}

export async function resolve_path(path) {
    if (Array.isArray(path)) path = join(...path);

    const file_path = join(PATH_CONTENT_ABSOLUTE, `${path}${CONTENT_EXTENSION}`);
    if (await can_access(file_path, constants.R_OK)) return file_path;

    return null;
}
