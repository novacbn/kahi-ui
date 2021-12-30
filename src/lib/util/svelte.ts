import {get_current_component} from "svelte/internal";

export function create_event_forwarder<EventMap extends {} = any>(): <
    EventKey extends Extract<keyof EventMap, string>
>(
    type: EventKey,
    event: Event
) => void {
    // SOURCE: https://github.com/sveltejs/svelte/blob/7521bd55b5e0f5f8203745f6a6d9a16fe775f596/src/runtime/internal/lifecycle.ts#L30-L47
    const component = get_current_component();

    return (type, event) => {
        const callbacks: Function[] | undefined = component.$$.callbacks[type];
        if (callbacks) {
            callbacks.slice().forEach((fn) => {
                fn.call(component, event);
            });
        }
    };
}
