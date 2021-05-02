export default ({VAR}) => {
    return {
        palette: {
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

        viewports: {
            tiny: VAR.viewports.tiny.max,
            small: VAR.viewports.small.max,
            medium: VAR.viewports.medium.max,
            large: VAR.viewports.large.max,
        },

        region: {
            padding: VAR.spacing.block.large,
            radius: VAR.radius.block,
            spacing: VAR.spacing.block.medium,

            max: {
                height: `85vh`,
                width: `80vw`,
            },
        },

        heading: {
            font: {
                size: VAR.font.size.heading.small,
                weight: VAR.font.weight.heading,
            },
        },

        footer: {
            spacing: VAR.spacing.block.tiny,
        },
    };
};
