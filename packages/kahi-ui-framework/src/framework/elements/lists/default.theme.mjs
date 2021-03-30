export default ({VAR}) => {
    return {
        margin: {
            block: `${VAR.spacing.block.medium} 0 ${VAR.spacing.block.medium} ${VAR.spacing.block.medium}`,
            item: `${VAR.spacing.block.tiny} 0`,
        },

        font: {
            size_heading: VAR.font.size.content.medium,
            weight_heading: VAR.font.weight.bold,
        },

        definition: {
            margin: {
                block: `${VAR.spacing.block.medium} 0`,
                item: `${VAR.spacing.block.tiny} 0 ${VAR.spacing.block.tiny} ${VAR.spacing.block.medium}`,
            },
        },
    };
};
