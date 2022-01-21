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
    "--disable-components-display-list",
    "--disable-components-embedded-figure",
    "--disable-components-interactables-button",
    "--disable-components-layouts-center",
    "--disable-components-layouts-grid",
    "--disable-components-layouts-group",
    "--disable-components-layouts-mosaic",
    "--disable-components-layouts-scrollable",
    "--disable-components-layouts-spacer",
    "--disable-components-layouts-stack",
    "--disable-components-overlays-clickable",
    "--disable-components-surfaces-box",
    "--disable-components-surfaces-card",
    "--disable-components-surfaces-tile",
    "--disable-globals-alignments",
    "--disable-globals-alignments-responsitivity",
    "--disable-globals-elevations",
    "--disable-globals-elevations-responsitivity",
    "--disable-globals-fit",
    "--disable-globals-fit-responsitivity",
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
