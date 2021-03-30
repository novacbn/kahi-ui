export default ({VAR}) => {
    return {
        border: `${VAR.border.content} solid`,

        font: {
            family: "inherit",
            weight: VAR.font.weight.content,
        },

        radius: {
            default: VAR.radius.content,

            circle: VAR.radius.circle,
            pill: VAR.radius.pill,
        },

        transition: {
            movement: VAR.animation.movement,
            visual: VAR.animation.visual,
        },

        palette: {
            default: {
                background: VAR.palette.default.bold,
                color: VAR.palette.light.bold,
            },

            accent: {
                background: VAR.palette.accent.bold,
                color: VAR.palette.light.bold,
            },

            dark: {
                background: VAR.palette.dark.bold,
                color: VAR.palette.light.bold,
            },

            light: {
                background: VAR.palette.light.bold,
                color: VAR.palette.dark.bold,
            },

            alert: {
                background: VAR.palette.alert.bold,
                color: VAR.palette.light.bold,
            },

            affirmative: {
                background: VAR.palette.affirmative.bold,
                color: VAR.palette.light.bold,
            },

            negative: {
                background: VAR.palette.negative.bold,
                color: VAR.palette.light.bold,
            },
        },

        opacity: {
            disabled: VAR.opacity.translucent,

            background: {
                default: VAR.opacity.invisible,

                active: VAR.opacity.muted,
                hover: VAR.opacity.translucent,
            },

            border: {
                default: VAR.opacity.muted,

                active: VAR.opacity.visible,
                hover: VAR.opacity.dull,
            },

            color: {
                default: VAR.opacity.muted,

                active: VAR.opacity.visible,
                hover: VAR.opacity.dull,
            },
        },

        toggle: {
            font_size: VAR.font.size.content.tiny,
            padding: VAR.spacing.inline.tiny,
        },

        check: {
            default: {
                clip_path: {
                    before: `inset(0% 20% 0% 60% round var(--form-radius-default))`,
                    after: `inset(80% 20% 0% 20% round var(--form-radius-default))`,
                },
            },

            cross: {
                clip_path: {
                    before: `inset(0% 40% 0% 40% round var(--form-radius-default))`,
                    after: `inset(40% 0% 40% 0% round var(--form-radius-default))`,
                },
            },
        },

        radio: {
            clip_path: `circle(45%)`,
        },

        switch: {
            clip_path: {
                active: `inset(0% 0% 0% 60% round var(--form-radius-default))`,
                enabled: `inset(0% 60% 0% 0% round var(--form-radius-default))`,
            },
        },

        field: {
            font_size: VAR.font.size.content.medium,

            padding: {
                default: VAR.spacing.inline.small,
                pill: `var(--form-field-padding-default) calc(var(--form-field-padding-default) * 1.75)`,
            },

            placeholder: {
                opacity: VAR.opacity.muted,
            },

            valid: {
                color: VAR.palette.affirmative.bold,
            },

            invalid: {
                color: VAR.palette.negative.bold,
            },
        },
    };
};
