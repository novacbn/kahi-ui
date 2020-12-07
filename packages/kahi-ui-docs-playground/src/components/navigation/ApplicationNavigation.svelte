<script context="module">
    const LINKS_CENTER = [
        {href: "/kahi-ui/#/docs", text: "Documentation", target: "_blank"},
        {href: "/kahi-ui/render", text: "Render Test", target: "_blank"},
    ];

    const LINKS_RIGHT = [
        {
            href: "https://github.com/novacbn/kahi-ui",
            text: "GitHub",
            target: "_blank",
        },

        {
            href: "https://github.com/novacbn/kahi-ui/releases/latest",
            text: "Releases",
            target: "_blank",
        },
    ];
</script>

<script>
    import {Anchor, Button, Divider, Menu, Modifiers, Omni, Popover} from "@kahi-ui/svelte";

    export let position = undefined;
</script>

<style>
    :global(.application-navigation) {
        --omni-margin: 0;
    }

    :global(.application-navigation a) {
        display: inline-flex;
    }
</style>

<Omni.Container class="application-navigation" palette="light" {position}>
    <Omni.Heading>
        <Anchor href="/kahi-ui">Kahi UI</Anchor>

        <Divider />

        <Anchor href="/kahi-ui/playground#/">
            <Modifiers.Small>Playground</Modifiers.Small>
        </Anchor>
    </Omni.Heading>

    <Omni.Body hidden="tiny small">
        {#each LINKS_CENTER as link (link.href)}
            <Button href={link.href} target={link.target} palette="dark" variation="clear">
                {link.text}
            </Button>
        {/each}
    </Omni.Body>

    <Omni.Body hidden="medium large">
        <Popover.Container data-sizing="medium" id="application-navigation-popover">
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
