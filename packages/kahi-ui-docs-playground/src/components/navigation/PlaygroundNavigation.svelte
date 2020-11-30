<script context="module">
    const LINKS_CENTER = [];

    const LINKS_RIGHT = [];
</script>

<script>
    import { createEventDispatcher } from "svelte";
    
    import {IconCode, IconColumns, IconMaximize, IconRotateCw} from "svelte-feather";
    import {Button, Group, Menu, Omni, Popover} from "@kahi-ui/svelte";

    import {click_outside} from "../../util/actions";
    import {PLAYGROUND_ROTATION, PLAYGROUND_VIEWS} from "../../util/constants";

    const dispatch = createEventDispatcher()
    
    export let rotation = PLAYGROUND_ROTATION.horizontal;
    export let title = "N/A";
    export let view = PLAYGROUND_VIEWS.split;



    let input = null;
    let value = title;
    let title_edit = false;

    function on_outside_click(event) {
        title_edit = false;
        if (value) {
            title = value;

            dispatch("title_change", {title});
        }
    }

    function on_rotation_click(event) {
        rotation =
            rotation === PLAYGROUND_ROTATION.horizontal
                ? PLAYGROUND_ROTATION.vertical
                : PLAYGROUND_ROTATION.horizontal;
    }

    function on_title_click(event) {
        requestAnimationFrame(() => {
            title_edit = true;
        });
    }

    function on_view_click(_view, event) {
        view = _view;
    }

    $: if (input) input.focus();
    $: value = title;
</script>

<style>
    :global(.playground-navigation) {
        --omni-margin: 0;
    }

    :global(.playground-navigation button > :first-child) {
        margin-right: var(--spacing-text-small);
    }

    span {
        cursor: pointer;
    }

    input {
        border: none;
        border-radius: 0;
        padding: 0;

        font-weight: inherit;
        letter-spacing: inherit;
    }
</style>

<Omni.Container class="playground-navigation" palette="dark">
    <Omni.Heading>
        {#if title_edit}
            <input
                type="text"
                data-palette="light"
                bind:value
                use:click_outside={on_outside_click}
                bind:this={input} />
        {:else}<span on:click={on_title_click}>{title}</span>{/if}
    </Omni.Heading>

    <Omni.Body hidden="tiny small">
        {#each LINKS_CENTER as link (link.href)}
            <Button href={link.href} target={link.target} palette="dark" variation="clear">
                {link.text}
            </Button>
        {/each}
    </Omni.Body>

    <Omni.Body hidden="medium large">
        <Popover.Container data-sizing="medium" id="playground-navigation-popover">
            <Popover.Button palette="dark" variation="clear">LINKS</Popover.Button>

            <Popover.Region>
                <Menu.Container palette="light">
                    {#each LINKS_CENTER as link (link.href)}
                        <Menu.Anchor href={link.href} target={link.target}>{link.text}</Menu.Anchor>
                    {/each}

                    <Menu.Divider />

                    {#each LINKS_RIGHT as link (link.href)}
                        <Menu.Anchor href={link.href} target={link.target}>{link.text}</Menu.Anchor>
                    {/each}
                </Menu.Container>
            </Popover.Region>
        </Popover.Container>
    </Omni.Body>

    <Omni.Footer hidden="medium large">x</Omni.Footer>

    <Omni.Footer hidden="tiny small">
        {#each LINKS_RIGHT as link (link.href)}
            <Button href={link.href} target={link.target} palette="dark" variation="clear">
                {link.text}
            </Button>
        {/each}

        <Group>
            <Button
                palette="light"
                variation="clear"
                active={view === PLAYGROUND_VIEWS.split}
                on:click={on_view_click.bind(null, PLAYGROUND_VIEWS.split)}>
                <IconColumns size="1em" />
                Split
            </Button>

            <Button
                palette="light"
                variation="clear"
                active={view === PLAYGROUND_VIEWS.code}
                on:click={on_view_click.bind(null, PLAYGROUND_VIEWS.code)}>
                <IconCode size="1em" />
                Code
            </Button>

            <Button
                palette="light"
                variation="clear"
                active={view === PLAYGROUND_VIEWS.preview}
                on:click={on_view_click.bind(null, PLAYGROUND_VIEWS.preview)}>
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
