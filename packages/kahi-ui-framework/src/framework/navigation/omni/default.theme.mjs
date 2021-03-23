export default ({VAR}) => {
    return {
        margin: `0 0 ${VAR.spacing.block.large} 0`,
        padding: VAR.spacing.block.large,
        z_index: VAR.z_index.viewport,

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

        divider: {
            margin: `${VAR.spacing.block.tiny} ${VAR.spacing.divider}`,
        },

        heading: {
            letter_spacing: `0.1em`,

            font: {
                size: VAR.font.size.heading.medium,
                weight: VAR.font.weight.heading,
            },
        },

        content: {
            spacing: VAR.spacing.block.small,
        },
    };
};
