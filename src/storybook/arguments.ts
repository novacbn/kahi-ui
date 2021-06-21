import {
    DESIGN_ALIGNMENT_LITERALS,
    DESIGN_ALIGNMENT_X_LITERALS,
    DESIGN_ALIGNMENT_Y_LITERALS,
} from "../lib/types/alignments";
import {DESIGN_ANIMATION_LITERALS} from "../lib/types/animations";
import {ARIA_CURRENT_LITERALS} from "../lib/types/aria";
import {DESIGN_ELEVATION_LITERALS} from "../lib/types/elevations";
import {DESIGN_FIT_LITERALS} from "../lib/types/fit";
import {DESIGN_FLEX_VARIATIONS_LITERALS} from "../lib/types/flex";
import {DESIGN_HIDDEN_LITERALS} from "../lib/types/hidden";
import {
    DESIGN_ORIENTATION_HORIZONTAL_LITERALS,
    DESIGN_ORIENTATION_LITERALS,
    DESIGN_ORIENTATION_VERTICAL_LITERALS,
} from "../lib/types/orientations";
import {DESIGN_PALETTE_LITERALS} from "../lib/types/palettes";
import {DESIGN_POINTS_LITERALS} from "../lib/types/points";
import {DESIGN_POSITION_LITERALS} from "../lib/types/positions";
import {DESIGN_SHAPE_LITERALS} from "../lib/types/shapes";
import {DESIGN_SIZE_LITERALS} from "../lib/types/sizes";
import {DESIGN_INTRINSIC_SIZING_LITERALS, DESIGN_SIZING_LITERALS} from "../lib/types/sizings";
import {DESIGN_SPACING_LITERALS} from "../lib/types/spacings";
import {DESIGN_TABLE_VARIATION_LITERALS} from "../lib/types/table";
import {DESIGN_VARIATION_LITERALS} from "../lib/types/variations";

export const STORYBOOK_ANIMATION_ARGUMENTS = {
    animation: {
        options: Object.values(DESIGN_ANIMATION_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_BACKGROUND_ARGUMENTS = {
    margin: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_x: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_y: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_top: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_left: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_bottom: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_right: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding_x: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding_y: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding_top: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding_left: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding_bottom: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    padding_right: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    width: {
        options: Object.values(DESIGN_INTRINSIC_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    max_width: {
        options: Object.values(DESIGN_INTRINSIC_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    min_width: {
        options: Object.values(DESIGN_INTRINSIC_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    height: {
        options: Object.values(DESIGN_INTRINSIC_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    max_height: {
        options: Object.values(DESIGN_INTRINSIC_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    min_height: {
        options: Object.values(DESIGN_INTRINSIC_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_FOREGROUND_ARGUMENTS = {
    margin: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_x: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_y: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_top: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_left: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_bottom: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    margin_right: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_ALIGNMENT_ARGUMENTS = {
    alignment: {
        options: Object.values(DESIGN_ALIGNMENT_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    alignment_x: {
        options: Object.values(DESIGN_ALIGNMENT_X_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    alignment_y: {
        options: Object.values(DESIGN_ALIGNMENT_Y_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_ANCHOR_ARGUMENTS = {
    current: {
        options: Object.values(ARIA_CURRENT_LITERALS),
        control: {
            type: "select",
        },
    },

    download: {
        control: {
            type: "text",
        },
    },

    href: {
        control: {
            type: "text",
        },
    },

    rel: {
        control: {
            type: "text",
        },
    },

    target: {
        control: {
            type: "text",
        },
    },
};

export const STORYBOOK_ELEVATION_ARGUMENTS = {
    elevation: {
        options: Object.values(DESIGN_ELEVATION_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_FIT_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_FIT_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_FLEX_VARIATION_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_FLEX_VARIATIONS_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_HIDDEN_ARGUMENTS = {
    hidden: {
        options: Object.values(DESIGN_HIDDEN_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_ORIENTATION_ARGUMENTS = {
    orientation: {
        options: Object.values(DESIGN_ORIENTATION_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_ORIENTATION_HORIZONTAL_ARGUMENTS = {
    orientation: {
        options: Object.values(DESIGN_ORIENTATION_HORIZONTAL_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_ORIENTATION_VERTICAL_ARGUMENTS = {
    orientation: {
        options: Object.values(DESIGN_ORIENTATION_VERTICAL_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_PALETTE_ARGUMENTS = {
    palette: {
        options: Object.values(DESIGN_PALETTE_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_POINTS_ARGUMENTS = {
    points: {
        options: Object.values(DESIGN_POINTS_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_POSITION_ARGUMENTS = {
    position: {
        options: Object.values(DESIGN_POSITION_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_SHAPE_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_SHAPE_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_SHAPE_ROUNDED_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_SHAPE_LITERALS).filter((v) => v !== "rounded"),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_SIZE_ARGUMENTS = {
    size: {
        options: Object.values(DESIGN_SIZE_LITERALS),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_SIZING_ARGUMENTS = {
    sizing: {
        options: Object.values(DESIGN_SIZING_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_SPACING_ARGUMENTS = {
    spacing: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    spacing_x: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },

    spacing_y: {
        options: Object.values(DESIGN_SPACING_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_TABLE_VARIATION_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_TABLE_VARIATION_LITERALS),
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_TEXT_ALIGNMENT_ARGUMENTS = {
    align: {
        options: ["center", "justify", "left", "right"],
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_TEXT_TRANSFORM_ARGUMENTS = {
    transform: {
        options: ["capitalize", "lowercase", "uppercase"],
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_TEXT_VARIATION_ARGUMENTS = {
    variation: {
        options: ["truncate"],
        control: {
            type: "multi-select",
        },
    },
};

export const STORYBOOK_VARIATION_BACKGROUND_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_VARIATION_LITERALS).filter(
            (v) => v !== "block" && v !== "clear"
        ),
        control: {
            type: "select",
        },
    },
};

export const STORYBOOK_VARIATION_FOREGROUND_ARGUMENTS = {
    variation: {
        options: Object.values(DESIGN_VARIATION_LITERALS).filter((v) => v !== "block"),
        control: {
            type: "select",
        },
    },
};
