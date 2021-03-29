<script context="module">
    import {readable} from "svelte/store";

    import {browser} from "$app/env";

    const hash = browser
        ? readable(window.location.hash, (set) => {
              const on_hash_change = (event) => set(window.location.hash);

              window.addEventListener("hashchange", on_hash_change);
              return () => window.removeEventListener("hashchange", on_hash_change);
          })
        : readable("");

    function is_current(href, path, hash) {
        if (href === path || href === hash) return "current";
        return undefined;
    }
</script>

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
            <Menu.Divider>{category.text}</Menu.Divider>

            {#each category.links as link (link.href)}
                <Menu.Anchor
                    current={is_current(link.href, $page.path, $hash)}
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
        flex-shrink: 0;
    }
</style>
