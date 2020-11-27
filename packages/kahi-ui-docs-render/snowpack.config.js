module.exports = {
    plugins: ["@snowpack/plugin-svelte"],

    mount: {
        public: "/kahi-ui/render",
        src: "/_dist_",
    },
};
