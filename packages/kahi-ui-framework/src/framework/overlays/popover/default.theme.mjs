export default ({VAR}) => {
    return {
        margin: VAR.spacing.block.medium,
        z_index: VAR.z_index.inline,

        spacing: {
            tiny: VAR.spacing.block.tiny,
            small: VAR.spacing.block.small,
            medium: VAR.spacing.block.medium,
            large: VAR.spacing.block.large,
            huge: VAR.spacing.block.huge,
        },
    };
};
