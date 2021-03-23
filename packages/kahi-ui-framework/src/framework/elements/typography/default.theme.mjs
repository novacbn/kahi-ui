export default ({VAR}) => {
    return {
        anchor: {
            color: VAR.palette.accent.bold,
            transition: VAR.animation.visual,

            opacity: {
                default: VAR.opacity.visible,
                active: VAR.opacity.muted,
                hover: VAR.opacity.dull,
            },
        },

        blockquote: {
            border: `${VAR.border.content} solid`,
            radius: VAR.radius.block,

            padding: `${VAR.spacing.inline.medium} ${VAR.spacing.inline.huge}`,
            margin: `0 0 ${VAR.spacing.block.large} 0`,

            background_opacity: VAR.opacity.translucent,

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
        },

        heading: {
            font_family: VAR.font.family.heading,
            margin: `${VAR.spacing.inline.small} 0 ${VAR.spacing.inline.medium} 0`,

            [6]: {
                font: {
                    size: VAR.font.size.heading.nano,
                    weight: VAR.font.weight.heading,
                },
            },

            [5]: {
                font: {
                    size: VAR.font.size.heading.tiny,
                    weight: VAR.font.weight.heading,
                },
            },

            [4]: {
                font: {
                    size: VAR.font.size.heading.small,
                    weight: VAR.font.weight.heading,
                },
            },

            [3]: {
                font: {
                    size: VAR.font.size.heading.medium,
                    weight: VAR.font.weight.heading,
                },
            },

            [2]: {
                font: {
                    size: VAR.font.size.heading.large,
                    weight: VAR.font.weight.heading,
                },
            },

            [1]: {
                font: {
                    size: VAR.font.size.heading.huge,
                    weight: VAR.font.weight.heading,
                },
            },
        },

        identifier: {
            padding: `${VAR.spacing.inline.tiny} ${VAR.spacing.inline.medium}`,
            radius: VAR.radius.block,

            background: `${VAR.palette.default.bold}, ${VAR.opacity.transparent}`,
            color: VAR.palette.negative.bold,

            selection: {
                background: VAR.palette.negative.bold,
                color: VAR.palette.light.bold,
            },

            font: {
                family: VAR.font.family.monospace,
                size: VAR.font.size.content.small,
                weight: VAR.font.weight.content,
            },
        },

        paragraph: {
            margin: `0 0 ${VAR.spacing.block.large} 0`,
        },

        pre: {
            padding: VAR.spacing.inline.medium,
            radius: VAR.radius.block,

            background: `${VAR.palette.default.bold}, ${VAR.opacity.transparent}`,
            font: {
                family: VAR.font.family.monospace,
                weight: VAR.font.weight.content,
            },
        },

        strong: {
            font_weight: VAR.font.weight.bold,
        },

        small: {
            font_size: VAR.font.size.content.small,
        },
    };
};
