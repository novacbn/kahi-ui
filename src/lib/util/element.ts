const FOCUSABLE_SELECTORS = [
    "[tabindex]:not([aria-disabled])",
    "a[href]",
    "iframe",
    "button:not(:disabled)",
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
];

const FOCUSABLE_SELECTOR = `:is(${FOCUSABLE_SELECTORS.join(", ")})`;

function get_scroll_top(
    container_element: HTMLElement,
    target_element: HTMLElement,
    position: "center" | "end" | "start"
): number {
    // TODO: implement `nearest` position

    let y = target_element.offsetTop;
    switch (position) {
        case "center":
            y -= target_element.offsetHeight / 2 - container_element.offsetHeight / 2;

        case "end":
            y += target_element.offsetHeight - container_element.offsetHeight;
    }

    return y - container_element.offsetTop;
}

export function can_focus(element: Element): boolean {
    return !is_hidden(element) && element.matches(FOCUSABLE_SELECTOR);
}

export function is_hidden(element: Element): boolean {
    const style = window.getComputedStyle(element);

    return style.display === "none";
}

export function query_focusable_element<T extends Element>(
    element: Document | Element,
    options: {last?: boolean} = {}
): T | null {
    // NOTE: Would be a lot faster to run `querySelector` instead of `querySelectorAll` and manual
    // filtering, but we need to run `is_hidden` and similar
    const children = query_focusable_elements<T>(element);

    return children[options.last ? children.length - 1 : 0] ?? null;
}

export function query_focusable_elements<T extends Element>(element: Document | Element): T[] {
    const children = element.querySelectorAll<T>(FOCUSABLE_SELECTOR);

    return Array.from<T>(children).filter((child) => !is_hidden(child));
}

export function scroll_into_container(
    target: HTMLElement | string,
    position: "center" | "end" | "start" = "start",
    behavior: ScrollBehavior = "auto"
): void {
    const target_element =
        typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
    if (!target_element) {
        throw ReferenceError(
            `bad argument #0 to 'scroll_into_container' (target '${target}' is invalid)`
        );
    }

    const container_element = target_element.parentElement;
    if (!container_element) {
        throw ReferenceError(
            "bad argument #0 to 'scroll_into_container' (target doesn't have parent element)"
        );
    }

    container_element.scrollTo({
        behavior,
        top: get_scroll_top(container_element, target_element, position),
    });
}
