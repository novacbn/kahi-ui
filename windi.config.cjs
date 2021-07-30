import {defineConfig} from "windicss/helpers";

export default defineConfig({
    /**
     * NOTE: Really glad this apparently only worked for
     * a quater of stuff that is autoprefixed
     */
    prefixer: false,

    blocklist: [
        "block",
        "capitalize",
        "inline",
        "grid",
        "hidden",
        "lowercase",
        "rounded",
        "sticky",
        "transform",
        "truncate",
        "uppercase",
    ],

    corePlugins: {
        container: false,
    },

    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",

            default: {
                // TODO: Remove after theming migration

                50: "240, 241, 243",
                100: "217, 220, 224",
                200: "192, 197, 204",
                300: "166, 173, 184",
                400: "147, 156, 168",
                500: "128, 138, 153",
                600: "120, 130, 145",
                700: "109, 119, 134",
                800: "99, 109, 124",
                900: "80, 90, 107",
            },

            accent: {
                50: "235, 241, 244",
                100: "205, 221, 229",
                200: "172, 198, 211",
                300: "138, 175, 193",
                400: "113, 158, 180",
                500: "88, 141, 167",
                600: "80, 133, 159",
                700: "71, 122, 150",
                800: "61, 112, 140",
                900: "45, 93, 124",
            },

            neutral: {
                50: "240, 241, 243",
                100: "217, 220, 224",
                200: "192, 197, 204",
                300: "166, 173, 184",
                400: "147, 156, 168",
                500: "128, 138, 153",
                600: "120, 130, 145",
                700: "109, 119, 134",
                800: "99, 109, 124",
                900: "80, 90, 107",
            },

            dark: {
                50: "228, 229, 229",
                100: "189, 190, 191",
                200: "145, 146, 149",
                300: "100, 102, 106",
                400: "67, 70, 74",
                500: "34, 37, 42",
                600: "30, 33, 37",
                700: "25, 27, 31",
                800: "20, 22, 25",
                900: "12, 13, 15",
            },

            "off-dark": {
                50: "232, 233, 233",
                100: "198, 200, 201",
                200: "161, 163, 165",
                300: "123, 126, 129",
                400: "94, 98, 102",
                500: "66, 70, 75",
                600: "60, 63, 68",
                700: "51, 55, 59",
                800: "43, 47, 51",
                900: "29, 32, 35",
            },

            light: {
                50: "254, 254, 254",
                100: "252, 252, 252",
                200: "250, 250, 250",
                300: "248, 248, 248",
                400: "247, 247, 247",
                500: "245, 245, 245",
                600: "244, 244, 244",
                700: "242, 242, 242",
                800: "240, 240, 240",
                900: "238, 238, 238",
            },

            "off-light": {
                50: "253, 253, 253",
                100: "250, 251, 251",
                200: "247, 248, 248",
                300: "244, 245, 245",
                400: "241, 242, 243",
                500: "239, 240, 241",
                600: "237, 238, 239",
                700: "235, 236, 237",
                800: "232, 233, 235",
                900: "228, 229, 231",
            },

            alert: {
                50: "251, 244, 228",
                100: "245, 228, 188",
                200: "239, 211, 144",
                300: "233, 193, 99",
                400: "228, 179, 65",
                500: "223, 166, 32",
                600: "219, 158, 28",
                700: "215, 149, 24",
                800: "210, 139, 19",
                900: "202, 123, 11",
            },

            affirmative: {
                50: "234, 246, 239",
                100: "202, 232, 215",
                200: "166, 217, 188",
                300: "130, 202, 161",
                400: "104, 190, 141",
                500: "77, 179, 121",
                600: "70, 172, 113",
                700: "61, 163, 102",
                800: "52, 154, 92",
                900: "37, 139, 73",
            },

            negative: {
                50: "248, 236, 235",
                100: "237, 208, 204",
                200: "225, 177, 170",
                300: "213, 145, 136",
                400: "204, 122, 111",
                500: "195, 98, 85",
                600: "189, 90, 78",
                700: "181, 80, 68",
                800: "174, 70, 59",
                900: "161, 52, 42",
            },
        },

        lspacing: {
            // SOURCE: https://github.com/windicss/windicss/blob/0cac09dfbd630f391156e8426c5241fa5581a29b/src/config/base.ts#L51-L87

            0: "0px",
            0.5: "0.125em",
            1: "0.25em",
            1.5: "0.375em",
            2: "0.5em",
            2.5: "0.625em",
            3: "0.75em",
            3.5: "0.875em",
            4: "1em",
            5: "1.25em",
            6: "1.5em",
            7: "1.75em",
            8: "2em",
            9: "2.25em",
            10: "2.5em",
            11: "2.75em",
            12: "3em",
            14: "3.5em",
            16: "4em",
            20: "5em",
            24: "6em",
            28: "7em",
            32: "8em",
            36: "9em",
            40: "10em",
            44: "11em",
            48: "12em",
            52: "13em",
            56: "14em",
            60: "15em",
            64: "16em",
            72: "18em",
            80: "20em",
            96: "24em",
        },

        transitionTimingFunction: {
            // SOURCE: https://github.com/postcss/postcss-easings

            "in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
            "out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
            "in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",

            "in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
            "out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            "in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",

            "in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",

            "in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
            "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
            "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",

            "in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
            "in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",

            "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
            "in-out-expo": "cubic-bezier(1, 0, 0, 1)",

            "in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
            "out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
            "in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",

            "in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
            "out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        },
    },
});
