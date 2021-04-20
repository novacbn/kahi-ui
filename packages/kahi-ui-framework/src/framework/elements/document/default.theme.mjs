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

        scrollbar: {
            width: {
                keyword: "thin",
                size: "0.6rem",
            },

            thumb: {
                color: `${VAR.palette.dark.muted}, 1.0`,
            },

            track: {
                color: `${VAR.palette.dark.light}, 1.0`,
            },
        },
    };
};
