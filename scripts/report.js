import {readdirSync, lstatSync, readFileSync} from "fs";
import {join, relative} from "path";
import {brotliCompressSync, gzipSync} from "zlib";

import xbytes from "xbytes";

import {PATH_CWD, PATH_DIST_DIRECTORY} from "./constants.js";

async function generate_report(file_path) {
    const relative_path = relative(PATH_CWD, file_path);

    const content = readFileSync(file_path);
    const content_brotli = brotliCompressSync(content);
    const content_gzip = gzipSync(content, {level: 9});

    return {
        path: relative_path,

        brotli: xbytes(content_brotli.byteLength, {iec: true}),
        gzip: xbytes(content_gzip.byteLength, {iec: true}),
        raw: xbytes(content.byteLength, {iec: true}),
    };
}

async function report_directory(directory_path) {
    const relative_path = relative(PATH_CWD, directory_path);

    const file_paths = readdirSync(directory_path)
        .map((name, index) => join(directory_path, name))
        .filter((path, index) => lstatSync(path).isFile());

    const reports = await Promise.all(
        file_paths.map((file_path, index) => generate_report(file_path))
    );

    console.log(`BUILD SIZES (${relative_path}):\n`);
    for (const report of reports) {
        console.log(
            `- ${report.path}: ${report.raw} (BROTLI: ${report.brotli}) (GZIP: ${report.gzip})`
        );
    }
}

report_directory(PATH_DIST_DIRECTORY);
