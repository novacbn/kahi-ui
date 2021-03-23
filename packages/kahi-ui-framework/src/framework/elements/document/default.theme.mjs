export default ({VAR}) => {
    return {
        root: {
            background: VAR.palette.light.muted,
            color: VAR.palette.dark.bold,

            line_height: VAR.font.line_height,

            font: {
                family: VAR.font.family.content,
                size: `16px`,
                weight: VAR.font.weight.content,
            },
        },
    };
};
