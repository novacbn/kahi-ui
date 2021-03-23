export default ({VAR}) => {
    return {
        border: `${VAR.border.content} solid`,
        transition: VAR.animation.visual,

        padding: {
            default: VAR.spacing.inline.medium,
            pill: `var(--button-padding-default) calc(var(--button-padding-default) * 1.25)`,
        },

        font: {
            family: `inherit`,
            weight: VAR.font.weight.bold,

            size: {
                default: VAR.font.size.content.medium,

                tiny: VAR.font.size.content.tiny,
                small: VAR.font.size.content.small,
                large: VAR.font.size.content.large,
                huge: VAR.font.size.content.huge,
            },
        },

        radius: {
            default: VAR.radius.content,
            pill: VAR.radius.pill,
        },

        palette: {
            default: {
                background: VAR.palette.default.bold,
                color: VAR.palette.light.bold,
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

        opacity: {
            enabled: VAR.opacity.visible,
            disabled: VAR.opacity.translucent,

            dull: VAR.opacity.dull,
            muted: VAR.opacity.muted,
            translucent: VAR.opacity.translucent,
        },
    };
};
