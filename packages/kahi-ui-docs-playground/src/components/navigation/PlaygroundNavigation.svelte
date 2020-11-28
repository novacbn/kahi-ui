<script context="module">
    const LINKS_CENTER = [];

    const LINKS_RIGHT = [];
</script>

<script>
    import {Anchor, Button, Menu, Omni, Popover} from "@kahi-ui/svelte";
</script>

<style>
    :global(.landing-navigation) {
        --omni-margin: 0;
    }
</style>

<Omni.Container class="landing-navigation" palette="light" position="top">
    <Omni.Heading>
        <Anchor href="/kahi-ui">Kahi UI</Anchor>
    </Omni.Heading>

    <Omni.Body hidden="tiny small">
        {#each LINKS_CENTER as link (link.href)}
            <Button href={link.href} target={link.target} palette="dark" variation="clear">
                {link.text}
            </Button>
        {/each}
    </Omni.Body>

    <Omni.Body hidden="medium large">
        <Popover.Container data-sizing="medium" id="landing-navigation-popover">
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

    <Omni.Footer hidden="medium large" />

    <Omni.Footer hidden="tiny small">
        {#each LINKS_RIGHT as link (link.href)}
            <Button href={link.href} target={link.target} palette="dark" variation="clear">
                {link.text}
            </Button>
        {/each}
    </Omni.Footer>
</Omni.Container>
