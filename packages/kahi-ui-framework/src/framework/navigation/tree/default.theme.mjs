export default ({VAR}) => {
    return {
        font_weight: VAR.font.weight.bold,
        margin_icon: VAR.spacing.inline.medium,

        transition: VAR.animation.visual,

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
            visible: VAR.opacity.visible,
            translucent: VAR.opacity.translucent,
        },

        item: {
            padding: `${VAR.spacing.inline.tiny} ${VAR.spacing.inline.medium}`,
            radius: VAR.radius.content,
        },
    };
};
