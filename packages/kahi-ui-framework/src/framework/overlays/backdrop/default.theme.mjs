export default ({VAR}) => {
    return {
        background: {
            background: `${VAR.palette.dark.bold}, ${VAR.opacity.muted}`,
            z_index: VAR.z_index.backdrop,
        },

        container_z_index: VAR.z_index.viewport,
    };
};
