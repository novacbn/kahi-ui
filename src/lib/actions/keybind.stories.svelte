<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Text from "../components/typography/text/Text.svelte";

    import {
        action_activate,
        action_exit,
        action_submit,
        keybind,
        navigate_down,
        navigate_left,
        navigate_right,
        navigate_up,
    } from "./keybind";

    const BUILTIN_SHORTCUTS = [
        [action_activate, "activate", ["ENTER", "SPACE"]],
        [action_exit, "exit", ["ESCAPE"]],
        [action_submit, "submit", ["ENTER"]],
        [navigate_down, "down", ["DOWNARROW"]],
        [navigate_left, "left", ["LEFTARROW"]],
        [navigate_right, "right", ["RIGHTARROW"]],
        [navigate_up, "up", ["UPARROW"]],
    ];

    let is_active = false;
    let shortcuts = {};

    function on_bind(event) {
        event.preventDefault();

        is_active = event.detail.active;
    }

    function on_shortcut(event, name) {
        event.preventDefault();

        shortcuts = {...shortcuts, [name]: event.detail.active};
    }
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
        class="text-input"
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
    <div class="box" data-palette={is_active ? "affirmative" : "negative"} data-padding="small">
        Press CTRL+/ to activate bind.
    </div>
</Story>

<Story name="Built-in Shortcuts">
    {#each BUILTIN_SHORTCUTS as [shortcut, name, binds] (name)}
        <div>
            <Text is="strong">{name}</Text>
            <br />
            <input
                class="text-input"
                type="text"
                placeholder="Click inside of me for focus, and press {binds.join(
                    ', '
                )} to activate bind."
                data-palette={shortcuts[name] ? "affirmative" : "negative"}
                use:shortcut={{
                    on_bind: (event) => on_shortcut(event, name),
                }}
            />
        </div>
    {/each}
</Story>
