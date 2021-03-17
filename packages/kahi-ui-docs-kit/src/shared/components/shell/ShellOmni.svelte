<script>
    import {Anchor, Button, Menu, Omni, Popover} from "@kahi-ui/svelte";

    export let branding = "N/A";
    export let center = [];
    export let right = [];
</script>

<Omni.Container class="shell-omni" palette="light">
    <Omni.Heading>
        <Anchor href="/">{branding}</Anchor>
    </Omni.Heading>

    <Omni.Body hidden="tiny small">
        {#each center as link (link.href)}
            <Button
                href={link.href}
                target={link.is_external ? "_blank" : undefined}
                rel={link.is_external ? "noopener noreferrer" : undefined}
                palette="dark"
                variation="clear"
            >
                {link.text}
            </Button>
        {/each}
    </Omni.Body>

    <Omni.Body hidden="medium large">
        <Popover.Container data-sizing="medium" id="landing-navigation-popover">
            <Popover.Button palette="dark" variation="clear">LINKS</Popover.Button>

            <Popover.Region>
                <Menu.Container palette="light">
                    {#each center as link (link.href)}
                        <Menu.Anchor
                            href={link.href}
                            target={link.is_external ? "_blank" : undefined}
                            rel={link.is_external ? "noopener noreferrer" : undefined}
                            >{link.text}</Menu.Anchor
                        >
                    {/each}

                    <Menu.Divider />

                    {#each right as link (link.href)}
                        <Menu.Anchor
                            href={link.href}
                            target={link.is_external ? "_blank" : undefined}
                            rel={link.is_external ? "noopener noreferrer" : undefined}
                            >{link.text}</Menu.Anchor
                        >
                    {/each}
                </Menu.Container>
            </Popover.Region>
        </Popover.Container>
    </Omni.Body>

    <Omni.Footer hidden="medium large" />

    <Omni.Footer hidden="tiny small">
        {#each right as link (link.href)}
            <Button
                href={link.href}
                target={link.is_external ? "_blank" : undefined}
                rel={link.is_external ? "noopener noreferrer" : undefined}
                palette="dark"
                variation="clear"
            >
                {link.text}
            </Button>
        {/each}
    </Omni.Footer>
</Omni.Container>

<style>
    :global(.shell-omni) {
        --omni-margin: 0;
    }
</style>
