export default ({VAR}) => {
    return {
        border: `${VAR.border.block} solid`,

        background: VAR.palette.light.bold,
        color: VAR.palette.dark.bold,

        margin: `0 0 ${VAR.spacing.block.large} 0`,
        padding: VAR.spacing.block.large,
        radius: VAR.radius.block,

        transition: VAR.animation.visual,

        palette: {
            default: {
                background: VAR.palette.light.light,
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

        block: {
            border_color: VAR.palette.light.light,
        },
    };
};
