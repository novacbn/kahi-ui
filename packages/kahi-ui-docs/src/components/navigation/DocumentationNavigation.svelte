<script>
    import {Anchor, Aside, Divider, Menu} from "@kahi-ui/svelte";

    import APPLICATION_ROUTER from "../../router.manifest";

    import {get_pages} from "../../util/documentation";

    const {url} = APPLICATION_ROUTER;

    const categories = get_pages();
</script>

<Aside.Container palette="accent">
    <Aside.Heading>
        <Anchor href="#/documentation">Kahi UI</Anchor>

        <Divider />
    </Aside.Heading>

    <Menu.Container>
        {#each categories as category (category.category)}
            <Menu.Heading>{category.category}</Menu.Heading>

            {#each category.pages as page (page.identifier)}
                <Menu.Anchor
                    current={page.href.slice(1) === $url.pathname ? 'current' : undefined}
                    href={page.href}>
                    {page.title}
                </Menu.Anchor>
            {/each}
        {/each}
    </Menu.Container>
</Aside.Container>
