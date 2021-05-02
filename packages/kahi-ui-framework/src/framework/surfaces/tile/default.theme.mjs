export default ({VAR}) => {
    return {
        border: `${VAR.border.block} hsl(${VAR.palette.light.light}) solid`,

        margin: `0 0 ${VAR.spacing.block.large} 0`,
        padding: VAR.spacing.block.large,
        spacing: VAR.spacing.block.massive,

        radius: VAR.radius.block,
        transition: VAR.animation.visual,

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

        body: {
            spacing: VAR.spacing.block.large,

            heading: {
                font: {
                    size: `inherit`,
                    weight: VAR.font.weight.heading,
                },
            },
        },

        figure: {
            size: VAR.sizing.content.nano,
        },
    };
};
