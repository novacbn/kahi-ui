export default ({VAR}) => {
    return {
        pulse: {
            size: VAR.spacing.block.small,

            opacity: {
                start: VAR.opacity.dull,
                mid: VAR.opacity.invisible,
                finish: VAR.opacity.invisible,
            },
        },
    };
};
