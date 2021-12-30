<script lang="ts">
    import {createEventDispatcher, onDestroy, onMount, tick} from "svelte";

    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import {TOKENS_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";

    type $$Events = {
        mount: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        prepend?: boolean;
        target?: HTMLElement | string;
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    let hidden: boolean | undefined = true;

    export let element: $$Props["element"] = undefined;

    export let loading: $$Props["loading"] = undefined;
    export let prepend: $$Props["prepend"] = undefined;
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

        hidden = undefined;
        dispatch("mount");
    });
</script>

<div bind:this={element} class="portal" {hidden}>
    {#if loading !== TOKENS_BEHAVIOR_LOADING_LAZY.lazy || !hidden}
        <slot />
    {/if}
</div>
