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
    "--disable-components-disclosure-accordion",
    "--disable-components-disclosure-carousel",
    "--disable-components-disclosure-tab",
    "--disable-components-display-badge",
    "--disable-components-display-kbd",
    "--disable-components-display-list",
    "--disable-components-display-table",
    "--disable-components-embedded-figure",
    "--disable-components-feedback-dot",
    "--disable-components-feedback-ellipsis",
    "--disable-components-feedback-progress",
    "--disable-components-interactables-button",
    "--disable-components-interactables-check",
    "--disable-components-interactables-file-drop-input",
    "--disable-components-interactables-form",
    "--disable-components-interactables-number-input",
    "--disable-components-interactables-radio",
    "--disable-components-interactables-switch",
    "--disable-components-interactables-text-input",
    "--disable-components-layouts-center",
    "--disable-components-layouts-container",
    "--disable-components-layouts-divider",
    "--disable-components-layouts-grid",
    "--disable-components-layouts-group",
    "--disable-components-layouts-mosaic",
    "--disable-components-layouts-position",
    "--disable-components-layouts-scrollable",
    "--disable-components-layouts-spacer",
    "--disable-components-layouts-stack",
    "--disable-components-navigation-anchor",
    "--disable-components-navigation-aside",
    "--disable-components-navigation-breadcrumb",
    "--disable-components-navigation-menu",
    "--disable-components-navigation-omni",
    "--disable-components-overlays-backdrop",
    "--disable-components-overlays-clickable",
    "--disable-components-overlays-overlay",
    "--disable-components-overlays-popover",
    "--disable-components-surfaces-box",
    "--disable-components-surfaces-card",
    "--disable-components-surfaces-hero",
    "--disable-components-surfaces-tile",
    "--disable-components-typography-blockquote",
    "--disable-components-typography-code",
    "--disable-components-typography-heading",
    "--disable-components-typography-text",
    "--disable-components-utilities-animation",
    "--disable-components-utilities-portal",
    "--disable-components-utilities-transition",
    "--disable-components-widgets-dataselect",
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
