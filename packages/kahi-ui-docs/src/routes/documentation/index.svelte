<script>
    import {get_page} from "../../util/documentation";

    import Layout from "./$layout.svelte";

    export let category = "";
    export let page = null;

    $: _page = page ? get_page(`${category}/${page}`) : get_page(category);
</script>

<svelte:head>
    <title>{_page.title} — Documentation :: Kahi UI</title>
</svelte:head>

<Layout>
    {@html _page.html}
</Layout>
