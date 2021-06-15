<script lang="ts">
    // TODO: Stories

    import {onMount} from "svelte";

    export let element: HTMLElement | null = null;

    export let prepend = false;
    export let target: HTMLElement | string = typeof window !== "object" ? "" : document.body;

    onMount(() => {
        const element = typeof target === "string" ? document.querySelector(target) : target;
        if (!element) {
            throw new ReferenceError(
                `bad attribute 'target' on 'Portal' (selector '${target}' not found)`
            );
        }

        if (prepend) element.prepend(element);
        else element.append(element);
    });

</script>

<div bind:this={element} class="portal">
    <slot />
</div>
