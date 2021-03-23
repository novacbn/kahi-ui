const EASINGS = {
    /** SOURCE: https://github.com/postcss/postcss-easings */
    inSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    outSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
    inOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    inQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    outQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    inOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    inCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    outCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    inQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    outQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    inOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
    inQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    outQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    inOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    inExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    outExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
    inOutExpo: "cubic-bezier(1, 0, 0, 1)",
    inCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
    outCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    inOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    inBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
    outBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    inOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

const CONTEXT_THEME = {
    EASINGS,
    color,
    mscale,
    sizing,
    stepping,
    transparency,
    viewport,
};

const incremental_steps = (base, increment, steps) => base + increment * steps;

const modular_scale = (base, ratio, power, scale) => base * Math.pow(Math.pow(ratio, scale), power);

function trunc(value) {
    if (typeof value === "string") return value;
    return value.toFixed(3).replace(/\.000$/, "");
}

class GenericCalc {
    func;

    unit = null;

    constructor(func, unit = null) {
        this.func = func;
        this.unit = unit;
    }

    calc(value, exp = null) {
        exp = exp ? exp : (v) => v;

        const {unit} = this;
        const result = trunc(exp(this.func(value)));

        if (unit) {
            if (typeof unit === "function") return unit(result);
            return `${result}${unit}`;
        }

        return result;
    }
}

// NOTE: The following classes are just to provide
// syntactic sugar around calculating values

class ColorCalc extends GenericCalc {
    shades(bold, dull, muted, light, exp = null) {
        return {
            bold: this.calc(bold, exp),
            dull: this.calc(dull, exp),
            muted: this.calc(muted, exp),
            light: this.calc(light, exp),
        };
    }
}

class OpacityCalc extends GenericCalc {
    opacities(transparent, translucent, muted, dull, exp = null) {
        return {
            visible: 1,
            invisible: 0,

            transparent: this.calc(transparent, exp),
            translucent: this.calc(translucent, exp),
            muted: this.calc(muted, exp),
            dull: this.calc(dull, exp),
        };
    }
}

class SizingCalc extends GenericCalc {
    sizes(nano, tiny, small, medium, large, huge, massive, exp = null) {
        return {
            nano: this.calc(nano, exp),
            tiny: this.calc(tiny, exp),
            small: this.calc(small, exp),
            medium: this.calc(medium, exp),
            large: this.calc(large, exp),
            huge: this.calc(huge, exp),
            massive: this.calc(massive, exp),
        };
    }
}

export function color({hue, saturation, lightness, increment}) {
    const format = (result) => `${hue}, ${trunc(saturation * 100)}%, ${trunc(result * 100)}%`;

    return new ColorCalc(incremental_steps.bind(null, lightness, increment), format);
}

export function mscale({base, ratio, power = 1, unit = null}) {
    return new GenericCalc(modular_scale.bind(null, base, ratio, power), unit);
}

export function sizing({base, ratio, power = 1, unit = null}) {
    return new SizingCalc(modular_scale.bind(null, base, ratio, power), unit);
}

export function stepping({base, increment, unit = null}) {
    return new GenericCalc(incremental_steps.bind(null, base, increment), unit);
}

export function transparency({base, ratio, power = 1}) {
    return new OpacityCalc(modular_scale.bind(null, base, ratio, power));
}

export function viewport(min, max) {
    return {
        max,
        min,
    };
}

export async function import_theme(import_url) {
    const make = (await import(import_url)).default;

    return () => make(CONTEXT_THEME);
}
