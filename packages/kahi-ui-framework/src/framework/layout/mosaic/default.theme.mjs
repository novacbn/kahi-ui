export default ({VAR}) => {
    return {
        sizing: {
            tiny: VAR.sizing.block.tiny,
            small: VAR.sizing.block.small,
            medium: VAR.sizing.block.medium,
            large: VAR.sizing.block.large,
            huge: VAR.sizing.block.huge,
        },

        spacing: {
            tiny: VAR.spacing.block.tiny,
            small: VAR.spacing.block.small,
            medium: VAR.spacing.block.medium,
            large: VAR.spacing.block.large,
            huge: VAR.spacing.block.huge,
        },
    };
};
