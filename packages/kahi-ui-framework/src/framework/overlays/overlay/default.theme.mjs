export default ({VAR}) => {
    return {
        padding: VAR.spacing.block.huge,
        z_index: VAR.z_index.viewport,

        spacing: {
            tiny: VAR.spacing.block.tiny,
            small: VAR.spacing.block.small,
            medium: VAR.spacing.block.medium,
            large: VAR.spacing.block.large,
            huge: VAR.spacing.block.huge,
        },
    };
};
