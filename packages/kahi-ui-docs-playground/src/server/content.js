import {constants, promises} from "fs";
import {basename, join, relative} from "path";
import {cwd} from "process";
const {readFile} = promises;

import fg from "fast-glob";

import {can_access, parse_sample} from "@kahi-ui/docs-kit/server";

import {CONTENT_EXTENSION, PATH_CONTENT} from "./environment";

const PROCESS_CWD = cwd();

const PATH_CONTENT_ABSOLUTE = join(PROCESS_CWD, PATH_CONTENT);

const GLOB_CONTENT = join(PATH_CONTENT_ABSOLUTE, `*${CONTENT_EXTENSION}`);

function normalize_metadata(file_path, meta) {
    const identifier = basename(file_path, CONTENT_EXTENSION);
    const {description, samples, title} = meta;

    return {
        identifier,
        title,
        description,
        samples,
    };
}

export async function get_content() {
    const file_paths = await fg(GLOB_CONTENT);

    const samples = file_paths.map(async (file_path) => {
        const {identifier, description, samples, title} = await read_content(file_path);

        const syntaxes = Object.entries(samples)
            .filter((entry) => {
                const [_, value] = entry;

                return !!value;
            })
            .map((entry) => {
                const [syntax] = entry;

                return syntax;
            });

        // NOTE: Code samples can be quite large, so we only want to return
        // the syntaxes available to any specific sample instead
        return {
            identifier,
            title,
            description,
            syntaxes,
        };
    });

    return await Promise.all(samples);
}

export async function read_content(file_path) {
    const buffer = await readFile(file_path);
    const text = buffer.toString();

    const meta = parse_sample(text);
    return normalize_metadata(file_path, meta);
}

export async function resolve_path(...paths) {
    const path = join(...paths);

    const file_path = join(PATH_CONTENT_ABSOLUTE, `${path}${CONTENT_EXTENSION}`);
    if (await can_access(file_path, constants.R_OK)) return file_path;

    return null;
}
