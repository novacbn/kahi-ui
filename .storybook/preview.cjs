import "../package/dist/kahi-ui.theme.default.css";
import "../package/dist/kahi-ui.framework.css";

export const parameters = {
    layout: "fullscreen",
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            // HACK: The viewports have to be slightly less than the actual breakpoints. Storybook
            // adds slightly more to the iframe dimensions (???)
            mobile: {
                name: "Mobile",
                styles: {
                    width: "620px",
                    height: "500px",
                },
            },

            tablet: {
                name: "Tablet",
                styles: {
                    width: "740px",
                    height: "500px",
                },
            },

            desktop: {
                name: "Desktop",
                styles: {
                    width: "1000px",
                    height: "500px",
                },
            },

            widescreen: {
                name: "Widescreen",
                styles: {
                    width: "1280px",
                    height: "500px",
                },
            },
        },
    },
};
