export function anchor_scroll_to(element) {
    function on_click(event) {
        const {target} = event;

        if (target.tagName === "A") {
            const {href} = target;

            if (href) {
                const url = new URL(href);
                const element = document.querySelector(url.hash);

                event.preventDefault();
                if (element) element.scrollIntoView(false);
            }
        }
    }

    element.addEventListener("click", on_click);

    return {
        update() {},

        destroy() {
            element.removeEventListener("click", on_click);
        },
    };
}
