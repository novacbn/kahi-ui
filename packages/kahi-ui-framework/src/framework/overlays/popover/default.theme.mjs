export default ({VAR}) => {
    return {
        margin: VAR.spacing.block.medium,
        z_index: VAR.z_index.inline,

        sizing: {
            tiny: VAR.sizing.block.tiny,
            small: VAR.sizing.block.small,
            medium: VAR.sizing.block.medium,
            large: VAR.sizing.block.large,
            huge: VAR.sizing.block.huge,
        },
    };
};
