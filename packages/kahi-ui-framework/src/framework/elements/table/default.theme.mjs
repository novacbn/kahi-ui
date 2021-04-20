export default ({VAR}) => {
    return {
        border: {
            size: VAR.border.content,
            opacity: VAR.opacity.dull,
        },

        palette: {
            default: VAR.palette.default.bold,
            accent: VAR.palette.accent.bold,

            dark: VAR.palette.dark.bold,
            light: VAR.palette.light.bold,

            alert: VAR.palette.alert.bold,
            affirmative: VAR.palette.affirmative.bold,
            negative: VAR.palette.negative.bold,
        },

        bordered: {
            size: VAR.border.divider,
            opacity: VAR.opacity.muted,
        },

        striped: {
            opacity: VAR.opacity.translucent,
        },
    };
};
