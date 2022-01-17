const DATA_ATTRIBUTES: Set<string> = new Set([
    "contents",
    "height",
    "hidden",
    "max-height",
    "min-height",
    "max-width",
    "min-width",
    "max-size",
    "min-size",
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
    "size",
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
 * Returns the property name formatted into a dash-case attribute name
 * @param attribute
 * @returns
 */
function format_property_name(name: string): string {
    return name.replaceAll("_", "-");
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
    const entries = Object.entries(props)
        .filter((entry) => {
            const [property, value] = entry;
            const attribute = format_property_name(property);

            if (set && !set.has(attribute)) return false;
            return Array.isArray(value) ? value.length > 0 : is_truthy(value);
        })
        .map((entry) => {
            const [property, value] = entry;
            const attribute = format_property_name(property);

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
