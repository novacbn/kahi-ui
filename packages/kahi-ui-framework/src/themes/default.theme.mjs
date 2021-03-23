export default ({EASINGS, color, mscale, sizing, stepping, transparency, viewport}) => {
    const BASE = {
        color: {
            default: color({
                hue: 216,
                saturation: 0.11,
                lightness: 0.55,
                increment: 0.125,
            }),

            accent: color({
                hue: 200,
                saturation: 0.31,
                lightness: 0.5,
                increment: 0.15,
            }),

            dark: color({
                hue: 216,
                saturation: 0.11,
                lightness: 0.15,
                increment: 0.225,
            }),

            light: color({
                hue: 0,
                saturation: 0,
                lightness: 1,
                increment: -0.02,
            }),

            alert: color({
                hue: 42,
                saturation: 0.75,
                lightness: 0.5,
                increment: 0.15,
            }),

            affirmative: color({
                hue: 146,
                saturation: 0.4,
                lightness: 0.5,
                increment: 0.15,
            }),

            negative: color({
                hue: 7,
                saturation: 0.48,
                lightness: 0.55,
                increment: 0.125,
            }),
        },

        font: {
            family: {
                monospace: `monaco, "Consolas", "Lucida Console", monospace`,
                serif: `-apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
            },

            size: sizing({base: 1, ratio: 1.25, unit: "em"}),
            weight: stepping({base: 500, increment: 200}),
        },

        opacity: transparency({base: 1, ratio: 0.85, power: 2}),

        radius: {
            small: mscale({base: 2, ratio: 2, unit: "px"}),
            medium: mscale({base: 4, ratio: 2, unit: "px"}),
        },

        sizing: {
            block: sizing({base: 10, ratio: 1.4, unit: "rem"}),
            content: sizing({base: 4, ratio: 1.15, unit: "rem"}),
            inline: sizing({base: 0.125, ratio: 1.05, unit: "em"}),
        },

        spacing: {
            block: sizing({base: 0.8, ratio: 1.25, unit: "rem"}),
            inline: sizing({base: 0.6, ratio: 1.05, unit: "em"}),
        },
    };

    /**
     * NOTE: The Framework generally should not rely directly on this layer of CSS Custom Variables
     * for styling customization. Rather each Framework Stylesheet should rely their own layer of
     * variables that map to various variables here
     *
     * That being said, it's recommended to keep to this specific structure / naming of variables to keep things
     * consistent between themes. And also easier global customization via specific Web Applications
     */
    return {
        viewports: {
            /**
             * NOTE: These values should never be changed between themes, the framework styles are
             * hard-coded to these values. Since Media Queries do not support CSS Custom Variables
             *
             * The only reason they're here is for posterity and for user-land Javascript to be able to
             * query for these values without hard-coding
             */

            tiny: viewport("0px", "599px"),
            small: viewport("600px", "899px"),
            medium: viewport("900px", "1199px"),
            large: viewport("1200px", "999999px"),
        },

        palette: {
            default: BASE.color.default.shades(0, 1, 2, 3),
            accent: BASE.color.accent.shades(0, 1, 2, 3),
            dark: BASE.color.dark.shades(0, 1, 2, 3),
            light: BASE.color.light.shades(0, 1, 2, 3),
            alert: BASE.color.alert.shades(0, 1, 2, 3),
            affirmative: BASE.color.affirmative.shades(0, 1, 2, 3),
            negative: BASE.color.negative.shades(0, 1, 2, 3),
        },

        font: {
            family: {
                content: BASE.font.family.serif,
                heading: BASE.font.family.serif,
                monospace: BASE.font.family.monospace,
            },

            line_height: 1.6,

            size: {
                content: BASE.font.size.sizes(-3, -2, -1, 0, 1, 2, 3),
                heading: BASE.font.size.sizes(-3, -2, -1, 0, 1, 2, 3, (v) => v * 1.5),
            },

            weight: {
                bold: BASE.font.weight.calc(1),
                content: BASE.font.weight.calc(0),
                heading: BASE.font.weight.calc(1),
            },
        },

        opacity: BASE.opacity.opacities(9, 7, 2, 1),

        border: {
            block: "1px",
            content: "2px",
            divider: "1px",
        },

        radius: {
            block: BASE.radius.small.calc(0),
            content: BASE.radius.medium.calc(0),

            circle: `50%`,
            pill: `99999px`,
        },

        sizing: {
            block: BASE.sizing.block.sizes(-4, -2, -1, 0, 1, 2, 4),
            content: BASE.sizing.content.sizes(-4, -2, -1, 0, 1, 2, 4),
            inline: BASE.sizing.inline.sizes(-4, -2, -1, 0, 1, 2, 4),
        },

        spacing: {
            block: BASE.spacing.block.sizes(-3, -2, -1, 0, 1, 2, 3),
            inline: BASE.spacing.inline.sizes(-3, -2, -1, 0, 1, 2, 3),

            divider: BASE.spacing.block.calc(0),
        },

        z_index: {
            backdrop: -1,
            content: 1,
            inline: 2,
            viewport: 3,
        },

        animation: {
            // Represents multiplier on duration for all animations
            scale: 1,

            // Represents transition for movement-based animations, e.g. a switch toggle
            movement: `calc(0.3s * var(--animation-scale)) ${EASINGS.inOutQuint}`,

            // Represents transition for visual-based animations, e.g. opacity fade
            visual: `calc(0.2s * var(--animation-scale)) ${EASINGS.outQuad}`,

            // Represents transition for threshold to show previously hidden animations, e.g. popovers
            threshold: `calc(0.25s * var(--animation-scale))`,

            capture: {
                // Represents transition for movement animations that need to capture the user's focus
                movement: `calc(1.25s * var(--animation-scale)) infinite ${EASINGS.outQuad}`,

                // Represents transition for visual animations that need to capture the user's focus
                visual: `calc(1.5s * var(--animation-scale)) infinite ${EASINGS.outQuad}`,
            },
        },
    };
};
