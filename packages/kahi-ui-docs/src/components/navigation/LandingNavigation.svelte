<script>
    import {Button, Menu, Omni, Popover} from "@kahi-ui/svelte";

    export let links_center = [
        {href: "#/documentation", text: "Documentation"},
        {href: "#/test", text: "Render Test"},
    ];

    export let links_right = [
        {href: "https://github.com/novacbn/kahi-ui", text: "GitHub"},
        {href: "https://github.com/novacbn/kahi-ui/releases/latest", text: "Releases"},
    ];
</script>

<style>
    :global(.landing-navigation) {
        --omni-margin: 0;
    }
</style>

<Omni.Container class="landing-navigation" palette="light" position="top">
    <Omni.Heading><a href="#/">Kahi UI</a></Omni.Heading>

    <Omni.Body hidden="tiny small">
        {#each links_center as link (link.href)}
            <a
                href={link.href}
                role="button"
                data-palette="dark"
                data-variation="clear">{link.text}</a>
        {/each}
    </Omni.Body>

    <Omni.Body hidden="medium large">
        <Popover.Container data-sizing="medium" id="landing-navigation-popover">
            <Popover.Button palette="dark" variation="clear">LINKS</Popover.Button>

            <Popover.Region>
                <Menu.Container palette="light">
                    {#each links_center as link (link.href)}
                        <Menu.Anchor href={link.href}>{link.text}</Menu.Anchor>
                    {/each}

                    <Menu.Divider />

                    {#each links_right as link (link.href)}
                        <Menu.Anchor href={link.href}>{link.text}</Menu.Anchor>
                    {/each}
                </Menu.Container>
            </Popover.Region>
        </Popover.Container>
    </Omni.Body>

    <Omni.Footer hidden="medium large" />

    <Omni.Footer hidden="tiny small">
        {#each links_right as link (link.href)}
            <Button href={link.href} palette="dark" variation="clear">{link.text}</Button>
        {/each}
    </Omni.Footer>
</Omni.Container>
