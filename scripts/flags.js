import {argv} from "process";

function get_variable_name(flag) {
    return flag.replace("--", "").replace(/\-/g, "_").toUpperCase();
}

function make_flag_map(argv, ...flags) {
    return Object.fromEntries(
        flags.map((flag, index) => {
            return [get_variable_name(flag), argv.includes(flag)];
        })
    );
}

export const BUILD_FLAGS = make_flag_map(
    argv,
    "--disable-components-layouts-stack",
    "--disable-components-surfaces-box",
    "--disable-globals-alignments",
    "--disable-globals-alignments-responsitivity",
    "--disable-globals-elevations",
    "--disable-globals-elevations-responsitivity",
    "--disable-globals-grid",
    "--disable-globals-grid-responsitivity",
    "--disable-globals-intrinsics",
    "--disable-globals-intrinsics-responsitivity",
    "--disable-globals-orientations",
    "--disable-globals-orientations-responsitivity",
    "--disable-globals-palettes",
    "--disable-globals-radius",
    "--disable-globals-radius-responsitivity",
    "--disable-globals-sizings",
    "--disable-globals-sizings-responsitivity",
    "--disable-globals-spacings",
    "--disable-globals-spacings-responsitivity"
);
