export default ({VAR}) => {
    return {
        attention: `animations-pulse ${VAR.animation.capture.visual}`,

        padding: {
            default: `${VAR.spacing.inline.small} ${VAR.spacing.inline.medium}`,
            pill: `${VAR.spacing.inline.small} ${VAR.spacing.inline.huge}`,
        },

        font: {
            weight: VAR.font.weight.bold,

            size: {
                default: VAR.font.size.content.small,

                tiny: VAR.font.size.content.nano,
                small: VAR.font.size.content.tiny,
                large: VAR.font.size.content.medium,
                huge: VAR.font.size.content.large,
            },
        },

        radius: {
            default: VAR.radius.content,
            pill: VAR.radius.pill,
        },

        transform: {
            floated: `translate(50%, -50%)`,
            raised: `translateY(-50%)`,
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
    };
};
