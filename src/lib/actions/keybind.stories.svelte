<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {keybind} from "./keybind";

    function on_bind(event) {
        event.preventDefault();

        is_active = event.detail.active;
    }

    let element;

    export let is_active = false;
</script>

<svelte:window
    use:keybind={{
        binds: "control+/",
        on_bind,
    }}
/>

<Meta title="Actions/keybind" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <input
        type="text"
        placeholder="Click inside of me for focus, and press CTRL+ENTER to activate bind."
        data-palette={is_active ? "affirmative" : "negative"}
        use:keybind={{
            binds: "control+enter",
            on_bind,
        }}
    />
</Story>

<Story name="svelte:window">
    <div
        bind:this={element}
        class="box"
        data-palette={is_active ? "affirmative" : "negative"}
        data-padding="small"
    >
        Press CTRL+/ to activate bind.
    </div>
</Story>
