import {readdirSync, lstatSync, readFileSync} from "fs";
import {join, relative} from "path";
import {argv, cwd} from "process";
import {brotliCompressSync, gzipSync} from "zlib";

import kleur from "kleur";
import xbytes from "xbytes";

const PATH_CWD = cwd();

const PATH_TARGET = argv[argv.length - 1];

async function generate_report(file_path) {
    const relative_path = relative(PATH_TARGET, file_path);

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

    console.log(`ARTIFACT SIZES (${kleur.dim().underline(relative_path)}):\n`);
    for (const report of reports) {
        console.log(
            `- ${report.path}: ${kleur.cyan(report.raw)} (${kleur.dim("BROTLI")}: ${kleur.yellow(
                report.brotli
            )}) (${kleur.dim("GZIP")}: ${kleur.red(report.gzip)})`
        );
    }
}

report_directory(PATH_TARGET);
