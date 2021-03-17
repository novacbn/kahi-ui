<script>
    let _class = "";
    export let style = undefined;
    export {_class as class};

    export let element = null;
    export let horizontal = undefined;
</script>

<span
    bind:this={element}
    class="repl-divider {_class}"
    data-horizontal={horizontal}
    on:mousedown
    on:mousemove
    on:mouseup
    {style}
>
    {#if horizontal}&udarr;{:else}&rlarr;{/if}
</span>

<style>
    :global(.repl-divider) {
        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--repl-divider-color, currentColor);

        font-size: var(--repl-divider-font-size, 24px);
        font-weight: var(--repl-divider-font-weight, 500);
        line-height: 1;

        user-select: none;
    }

    :global(.repl-divider::before),
    :global(.repl-divider::after) {
        display: block;
        content: "";

        flex-grow: 1;

        background-color: currentColor;
    }

    :global(.repl-divider:not([data-horizontal])::before) {
        margin-bottom: var(--repl-divider-margin, 0.75em);
    }

    :global(.repl-divider:not([data-horizontal])::after) {
        margin-top: var(--repl-divider-margin, 0.75em);
    }

    :global(.repl-divider[data-horizontal]::before) {
        margin-right: var(--repl-divider-margin, 0.75em);
    }

    :global(.repl-divider[data-horizontal]::after) {
        margin-left: var(--repl-divider-margin, 0.75em);
    }

    :global(.repl-divider:not([data-horizontal])) {
        flex-direction: column;

        cursor: var(--repl-divider-cursor-horizontal, col-resize);
    }

    :global(.repl-divider[data-horizontal]) {
        flex-direction: row;

        cursor: var(--repl-divider-cursor-horizontal, row-resize);
    }

    :global(.repl-divider:active) {
        cursor: var(--repl-split-cursor-grabbing, grabbing);
    }

    :global(.repl-divider:not([data-horizontal])::before),
    :global(.repl-divider:not([data-horizontal])::after) {
        width: var(--repl-divider-size, 1px);
    }

    :global(.repl-divider[data-horizontal]::before),
    :global(.repl-divider[data-horizontal]::after) {
        height: var(--repl-divider-size, 1px);
    }
</style>
