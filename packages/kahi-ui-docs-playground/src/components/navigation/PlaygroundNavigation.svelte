<script>
    import {Button, Group, Omni} from "@kahi-ui/svelte";
    import {IconCode, IconColumns, IconMaximize, IconRotateCw} from "svelte-feather";

    import {REPL_ROTATION, REPL_VIEWS} from "../../util/constants";

    import * as Form from "../form";

    export let error = null;
    export let rotation = REPL_ROTATION.horizontal;
    export let title = "N/A";
    export let view = REPL_VIEWS.split;

    function on_rotation_click(event) {
        rotation =
            rotation === REPL_ROTATION.horizontal
                ? REPL_ROTATION.vertical
                : REPL_ROTATION.horizontal;
    }

    function on_view_click(_view, event) {
        view = _view;
    }
</script>

<style>
    :global(.playground-navigation) {
        --omni-margin: 0;

        height: var(--sizing-element-medium);
    }

    :global(.playground-navigation[data-palette="negative"] > :first-child) {
        font-family: var(--font-family-monospace);
    }

    :global(.playground-navigation button > :first-child) {
        margin-right: var(--spacing-text-small);
    }
</style>

{#if error}
    <Omni.Container class="playground-navigation" palette="negative">
        <Omni.Body>{error}</Omni.Body>
    </Omni.Container>
{:else}
    <Omni.Container class="playground-navigation" palette="dark">
        <Omni.Heading>
            <Form.EditableText palette="light" value={title} on:change />
        </Omni.Heading>

        <Omni.Footer>
            <Group>
                <Button
                    palette="light"
                    variation="clear"
                    active={view === REPL_VIEWS.split}
                    on:click={on_view_click.bind(null, REPL_VIEWS.split)}>
                    <IconColumns size="1em" />
                    Split
                </Button>

                <Button
                    palette="light"
                    variation="clear"
                    active={view === REPL_VIEWS.editor}
                    on:click={on_view_click.bind(null, REPL_VIEWS.editor)}>
                    <IconCode size="1em" />
                    Code
                </Button>

                <Button
                    palette="light"
                    variation="clear"
                    active={view === REPL_VIEWS.render}
                    on:click={on_view_click.bind(null, REPL_VIEWS.render)}>
                    <IconMaximize size="1em" />
                    Preview
                </Button>
            </Group>

            <Button palette="light" variation="clear" on:click={on_rotation_click}>
                <IconRotateCw size="1em" />
                Rotate
            </Button>
        </Omni.Footer>
    </Omni.Container>
{/if}
