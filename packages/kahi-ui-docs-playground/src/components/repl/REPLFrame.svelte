<script>
    let _class = "";
    export let style = undefined;
    export {_class as class};

    export let element = null;
    export let hidden = false;
</script>

<style>
    :global(.repl-frame) {
        display: block;
        contain: strict;

        min-width: var(--repl-frame-min-width, 15%);
        min-height: var(--repl-frame-min-height, 15%);

        overflow: auto;
    }

    :global(.repl-frame[hidden]) {
        display: none;
    }
</style>

<div
    bind:this={element}
    class="repl-frame {_class}"
    hidden={hidden ? true : undefined}
    on:mousedown
    on:mousemove
    on:mouseup
    {style}>
    <slot />
</div>
