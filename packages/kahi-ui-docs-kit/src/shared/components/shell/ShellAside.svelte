<script>
    import {onMount} from "svelte";
    import {page} from "$app/stores";

    import {Aside, Menu} from "@kahi-ui/svelte";

    export let categories = [];

    onMount(() => {
        const navigation = document.querySelector(".shell-aside");
        const current_link = navigation.querySelector("a[aria-current]");

        if (current_link) {
            current_link.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    });
</script>

<Aside.Container class="shell-aside" palette="dark">
    <Menu.Container>
        {#each categories as category (category.text)}
            <Menu.Heading>{category.text}</Menu.Heading>

            {#each category.links as link (link.href)}
                <Menu.Anchor
                    current={link.href === $page.path ? "current" : undefined}
                    href={link.href}
                    target={link.is_external ? "_blank" : undefined}
                    rel={link.is_external ? "noopener noreferrer" : undefined}
                >
                    {link.text}
                </Menu.Anchor>
            {/each}
        {/each}
    </Menu.Container>
</Aside.Container>

<style>
    :global(.shell-aside) {
        min-width: 14rem;
        max-height: 100%;
    }
</style>
