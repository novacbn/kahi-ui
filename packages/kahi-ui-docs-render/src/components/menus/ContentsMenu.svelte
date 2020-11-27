<script>
    import {Menu} from "@kahi-ui/svelte";

    export let links = [];
    export let heading = "";
    export let palette = undefined;
</script>

<Menu.Container {palette}>
    {#if heading}
        <Menu.Heading>{heading}</Menu.Heading>
    {/if}

    {#each links as link (link.id)}
        <Menu.Anchor href="#{link.id}">{link.text}</Menu.Anchor>
    {/each}
</Menu.Container>
