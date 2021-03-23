export default ({VAR}) => {
    return {
        padding: `${VAR.spacing.block.huge} ${VAR.spacing.block.large}`,

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

        heading: {
            font: {
                size: VAR.font.size.heading.huge,
                weight: VAR.font.weight.heading,
            },
        },

        text: {
            font_size: VAR.font.size.heading.small,
        },

        help: {
            font_size: VAR.font.size.content.medium,
        },
    };
};
