export default ({VAR}) => {
    return {
        padding: VAR.spacing.block.large,

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
            muted: VAR.opacity.muted,
            translucent: VAR.opacity.translucent,
        },

        heading: {
            letter_spacing: "0.1em",
            padding: `${VAR.spacing.block.medium} ${VAR.spacing.block.medium} ${VAR.spacing.block.huge}`,

            font: {
                size: VAR.font.size.heading.massive,
                weight: VAR.font.weight.heading,
            },
        },
    };
};
