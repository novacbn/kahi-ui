export default ({VAR}) => {
    return {
        spacing: {
            block: {
                tiny: VAR.spacing.block.tiny,
                small: VAR.spacing.block.small,
                medium: VAR.spacing.block.medium,
                large: VAR.spacing.block.large,
                huge: VAR.spacing.block.huge,
            },

            inline: {
                tiny: VAR.spacing.inline.tiny,
                small: VAR.spacing.inline.small,
                medium: VAR.spacing.inline.medium,
                large: VAR.spacing.inline.large,
                huge: VAR.spacing.inline.huge,
            },
        },
    };
};
