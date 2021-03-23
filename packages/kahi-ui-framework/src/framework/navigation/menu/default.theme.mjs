export default ({VAR}) => {
    return {
        border: `${VAR.border.block} hsl(${VAR.palette.light.light}) solid`,
        radius: VAR.radius.content,
        padding: VAR.spacing.block.large,

        palette: {
            default: {
                background: VAR.palette.default.bold,
                color: VAR.palette.dark.bold,
            },

            accent: {
                background: VAR.palette.accent.bold,
                color: VAR.palette.light.bold,
            },

            dark: {
                background: VAR.palette.dark.bold,
                color: VAR.palette.light.bold,
            },

            light: {
                background: VAR.palette.light.bold,
                color: VAR.palette.dark.bold,
            },

            alert: {
                background: VAR.palette.alert.bold,
                color: VAR.palette.light.bold,
            },

            affirmative: {
                background: VAR.palette.affirmative.bold,
                color: VAR.palette.light.bold,
            },

            negative: {
                background: VAR.palette.negative.bold,
                color: VAR.palette.light.bold,
            },
        },

        anchor: {
            border: `${VAR.border.content} solid`,
            radius: VAR.border.content,

            padding: `${VAR.spacing.inline.tiny} ${VAR.spacing.inline.medium}`,

            transition: VAR.animation.visual,

            opacity: {
                hover: VAR.opacity.transparent,
                active: VAR.opacity.translucent,
            },
        },

        heading: {
            letter_spacing: `0.1em`,
            transition: VAR.animation.visual,

            font: {
                size: VAR.font.size.content.small,
                weight: VAR.font.weight.heading,
            },

            opacity: {
                default: VAR.opacity.dull,

                hover: VAR.opacity.muted,
                active: `calc(${VAR.opacity.muted} * 0.5)`,
            },
        },

        submenu: {
            border: `${VAR.border.divider} solid`,
            padding: `0 0 0 ${VAR.spacing.block.medium}`,

            opacity_dull: VAR.opacity.dull,
        },

        separator: {
            size: VAR.spacing.block.small,
        },
    };
};
