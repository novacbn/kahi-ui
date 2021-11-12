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
