export function click_outside(element, callback) {
    function on_click(event) {
        const {target} = event;

        if (!element.contains(target)) callback(event);
    }

    document.addEventListener("click", on_click);

    return {
        update(_callback) {
            callback = _callback;
        },

        destroy() {
            document.removeEventListener("click", on_click);
        },
    };
}
