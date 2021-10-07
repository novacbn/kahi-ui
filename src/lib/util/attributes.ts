const ATTRIBUTE_REMAP: Record<string, string | undefined> = {
    max_height: "max-height",
    min_height: "min-height",
    max_width: "max-width",
    min_width: "min-width",
    margin_x: "margin-x",
    margin_y: "margin-y",
    margin_top: "margin-top",
    margin_left: "margin-left",
    margin_bottom: "margin-bottom",
    margin_right: "margin-right",
    padding_x: "padding-x",
    padding_y: "padding-y",
    padding_top: "padding-top",
    padding_left: "padding-left",
    padding_bottom: "padding-bottom",
    padding_right: "padding-right",
    span_x: "span-x",
    span_y: "span-y",
};

const DATA_ATTRIBUTES: Set<string> = new Set([
    "height",
    "hidden",
    "max-height",
    "min-height",
    "max-width",
    "min-width",
    "margin",
    "margin-x",
    "margin-y",
    "margin-top",
    "margin-left",
    "margin-bottom",
    "margin-right",
    "padding",
    "padding-x",
    "padding-y",
    "padding-top",
    "padding-left",
    "padding-bottom",
    "padding-right",
    "width",
]);

/**
 * Represents HTML attributes that can be set globally on every Svelte Component
 */
const HTML_ATTRIBUTES: Set<string> = new Set([
    "class",
    "id",
    "name",
    "style",
    "sveltekit:noscroll",
    "sveltekit:prefetch",
    "tabindex",
    "title",
]);

type IPropPrimitive = boolean | null | number | string | undefined;

/**
 * Represents props passable to HTML elements that can be stringified
 */
export type IProps = Record<string, IPropPrimitive | IPropPrimitive[]>;

/**
 * Returns if the value is not undefined or empty string
 * @param value
 * @returns
 */
function is_truthy(value: any): boolean {
    return value !== undefined && value !== "" && value !== false;
}

/**
 * Returns all the CSS variables concated
 * @param props
 * @returns
 */
export function format_css_variables(props: IProps): string {
    return Object.entries(props)
        .filter(([variable, value]) => is_truthy(value))
        .map(([variable, value]) => `--${variable}:${value}`)
        .join(";");
}

/**
 * Returns the mapped the input [[props]] to output props, filtering out props with
 * falsy values or not matched against the input [[set]] of valid props. Also prefixes
 * attributes with the given [[prefix]] string if available
 *
 * @param props
 * @param set
 * @param prefix
 * @returns
 */
export function map_attributes(props: IProps, set?: Set<string>, prefix: string = ""): IProps {
    let entries = Object.entries(props).filter((entry) => {
        let [attribute, value] = entry;
        attribute = ATTRIBUTE_REMAP[attribute] ?? attribute;

        if (set && !set.has(attribute)) return false;
        return Array.isArray(value) ? value.length > 0 : is_truthy(value);
    });

    entries = entries.map((entry) => {
        let [attribute, value] = entry;
        attribute = ATTRIBUTE_REMAP[attribute] ?? attribute;

        return [
            prefix ? prefix + attribute : attribute,
            Array.isArray(value) ? value.join(" ") : value,
        ];
    });

    return Object.fromEntries(entries);
}

/**
 * Returns the mapped the input [[props]] to output props, wrapper around [[map_attributes]]
 * but with `aria-` prefixed to the output attribute keys
 *
 * @param props
 * @param set
 * @returns
 */
export function map_aria_attributes(props: IProps, set?: Set<string>): IProps {
    return map_attributes(props, set, "aria-");
}

/**
 * Returns the mapped the input [[props]] to output props, wrapper around [[map_attributes]]
 * but with `data-` prefixed to the output attribute keys
 *
 * @param props
 * @param set
 * @returns
 */
export function map_data_attributes(props: IProps, set?: Set<string>): IProps {
    return map_attributes(props, set, "data-");
}

/**
 * Returns the mapped input [[props]] to output props, automatically filtering for globally
 * available props like `class` or `id`
 *
 * @param props
 * @returns
 */
export function map_global_attributes(props: IProps): IProps {
    const data_attributes = map_data_attributes(props, DATA_ATTRIBUTES);
    const html_attributes = map_attributes(props, HTML_ATTRIBUTES);

    return {
        ...html_attributes,
        ...data_attributes,
    };
}
