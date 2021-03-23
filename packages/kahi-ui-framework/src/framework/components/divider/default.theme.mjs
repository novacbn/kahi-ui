export default ({VAR}) => {
    return {
        border: `${VAR.border.divider} solid`,
        radius: VAR.radius.block,

        margin: {
            horizontal: `0 ${VAR.spacing.divider}`,
            vertical: `${VAR.spacing.divider} 0`,
        },

        palette: {
            accent: VAR.palette.accent.bold,

            dark: VAR.palette.dark.bold,
            light: VAR.palette.light.bold,

            alert: VAR.palette.alert.bold,
            affirmative: VAR.palette.affirmative.bold,
            negative: VAR.palette.negative.bold,
        },

        opacity: {
            default: VAR.opacity.dull,
        },

        separator: {
            letter_spacing: "0.1em",
            margin: VAR.spacing.block.small,

            font: {
                size: VAR.font.size.content.small,
                weight: VAR.font.weight.heading,
            },
        },
    };
};
