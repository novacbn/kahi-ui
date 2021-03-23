export default ({VAR}) => {
    return {
        attention: `animations-pulse ${VAR.animation.capture.visual}`,
        radius: VAR.radius.circle,
        font_size: VAR.font.size.content.small,

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
