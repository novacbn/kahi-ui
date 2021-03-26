<script>
    import {Anchor, Button, Dialog, Menu, Omni, Spacer} from "@kahi-ui/svelte";

    import {Menu as MenuIcon} from "svelte-feather/components/Menu";
    import {X} from "svelte-feather/components/X";

    export let branding = "N/A";
    export let center = [];
    export let right = [];
</script>

<Dialog.Container id="shell-omni-navigation" palette="light" viewport="small" hidden="medium large">
    <Dialog.Region>
        <Dialog.Heading class="shell-omni-heading">
            <span />
            <Dialog.Button palette="dark" variation="clear" size="small">
                <X size="1.25em" />
                <Spacer orientation="horizontal" spacing="tiny" />
                Close
            </Dialog.Button>
        </Dialog.Heading>

        <Dialog.Body class="shell-omni-body">
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
        </Dialog.Body>
    </Dialog.Region>
</Dialog.Container>

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

    <Omni.Footer hidden="medium large" />

    <Omni.Body hidden="medium large">
        <Dialog.Button for="shell-omni-navigation" palette="dark" variation="clear">
            <MenuIcon size="1.25em" />
            <Spacer orientation="horizontal" spacing="tiny" />
            MENU
        </Dialog.Button>
    </Omni.Body>

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

    :global(.shell-omni-body) {
        --dialog-region-spacing: 0;
    }
</style>
