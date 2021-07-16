<script lang="ts">
    // TODO: Stories

    import {onDestroy, onMount} from "svelte";

    export let element: HTMLElement | null = null;

    export let prepend = false;
    export let target: HTMLElement | string = typeof window !== "object" ? "" : document.body;

    onDestroy(() => {
        if (element) element.remove();
    });

    onMount(() => {
        if (!element) {
            // NOTE: Technically this should never go wrong, since `onMount` is called
            // after the `HTMLElement` reference is assigned. However we should try to
            // satisfy TypeScript

            throw new TypeError(
                "bad attribute 'element' on 'Portal' (failed to access container element)"
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
