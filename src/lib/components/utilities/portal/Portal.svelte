<script lang="ts">
    // TODO: Stories

    // TODO: Dispatch event for when the containing `<div>` has
    // been moved

    import {onDestroy, onMount, tick} from "svelte";

    type $$Props = {
        element?: HTMLDivElement;

        prepend?: boolean;
        target?: HTMLElement | string;
    };

    export let element: $$Props["element"] = undefined;

    export let prepend: $$Props["prepend"] = false;
    export let target: $$Props["target"] = typeof window !== "object" ? "" : document.body;

    onDestroy(() => {
        if (element) element.remove();
    });

    onMount(async () => {
        await tick();

        if (!element) {
            // NOTE: Technically this should never go wrong, since `onMount` is called
            // after the `HTMLElement` reference is assigned. However we should try to
            // satisfy TypeScript

            throw new TypeError(
                "bad attribute 'element' on 'Portal' (failed to reference container element)"
            );
        }

        const queried_target = typeof target === "string" ? document.querySelector(target) : target;
        if (!queried_target) {
            throw new ReferenceError(
                `bad attribute 'target' on 'Portal' (selector '${target}' not found)`
            );
        }

        if (prepend) queried_target.prepend(element);
        else queried_target.append(element);
    });
</script>

<div bind:this={element} class="portal">
    <slot />
</div>
