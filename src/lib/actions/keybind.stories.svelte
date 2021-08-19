<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import {keybind} from "./keybind";

    function on_bind(event) {
        event.preventDefault();

        is_active = event.detail.active;
    }

    let element;

    export let is_active = false;

    let action;
    $: {
        // HACK: With the CSF format, we can't really use `<svelte:body>`. But
        // we can imitate it!
        if (element) {
            action = keybind(document.body, {
                binds: "control+/",
                on_bind,
            });
        } else if (action) {
            action.destroy();
        }
    }
</script>

<Meta title="Actions/keybind" />

<Template>
    <slot />
</Template>

<Story name="Default">
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

<Story name="svelte:body">
    <div
        bind:this={element}
        class="box"
        data-palette={is_active ? "affirmative" : "negative"}
        data-padding="small"
    >
        Press CTRL+/ to activate bind.
    </div>
</Story>
