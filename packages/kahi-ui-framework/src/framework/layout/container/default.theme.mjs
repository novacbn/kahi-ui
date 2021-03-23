export default ({VAR}) => {
    return {
        padding: `${VAR.spacing.block.large} ${VAR.spacing.block.medium}`,

        viewports: {
            tiny: VAR.viewports.tiny.max,
            small: VAR.viewports.small.max,
            medium: VAR.viewports.medium.max,
            large: VAR.viewports.large.max,
        },
    };
};
