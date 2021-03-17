<script>
    let _class = "";
    export let style = undefined;
    export {_class as class};

    export let element = null;
    export let horizontal = undefined;
</script>

<div
    bind:this={element}
    class="repl-stack {_class}"
    data-horizontal={horizontal}
    on:mousedown
    on:mousemove
    on:mouseup
    {style}
>
    <slot />
</div>

<style>
    :global(.repl-stack) {
        display: flex;

        align-items: stretch;
        justify-content: stretch;

        align-self: stretch;
        justify-self: stretch;

        width: var(--repl-stack-width, 100%);
        height: var(--repl-stack-height, 100%);
    }

    :global(.repl-stack:not([data-horizontal])) {
        flex-direction: column;
    }

    :global(.repl-stack[data-horizontal]) {
        flex-direction: row;
    }
</style>
