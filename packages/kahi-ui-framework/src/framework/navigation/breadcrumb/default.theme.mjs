export default ({VAR}) => {
    return {
        margin: `${VAR.spacing.inline.small} 0 ${VAR.spacing.inline.medium} 0`,

        font: {
            family: VAR.font.family.heading,

            size: {
                default: VAR.font.size.heading.huge,
                [6]: VAR.font.size.heading.nano,
                [5]: VAR.font.size.heading.tiny,
                [4]: VAR.font.size.heading.small,
                [3]: VAR.font.size.heading.medium,
                [2]: VAR.font.size.heading.large,
            },

            weight: {
                default: VAR.font.weight.content,
                active: VAR.font.weight.heading,
            },
        },

        separator: {
            margin: `0 ${VAR.spacing.inline.small} 0 calc(${VAR.spacing.inline.small} / 2)`,
            opacity: VAR.opacity.dull,

            font: {
                size: "75%",
                weight: VAR.font.weight.bold,
            },

            content: {
                default: `"/"`,
            },
        },
    };
};
