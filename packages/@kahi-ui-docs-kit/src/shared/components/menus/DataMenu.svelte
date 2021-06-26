<script lang="ts">
    import {Menu} from "@kahi-ui/framework";
    import type {DESIGN_ORIENTATION_VERTICAL_ARGUMENT} from "@kahi-ui/framework";

    import type {INavigationMenu} from "../../types/navigation";
    import {noop} from "../../util/functional";

    export let items: INavigationMenu[] = [];
    export let orientation: DESIGN_ORIENTATION_VERTICAL_ARGUMENT | undefined = undefined;
</script>

<Menu.Container {orientation}>
    {#each items as item, index (index)}
        {#if "separator" in item}
            {#if item.separator}
                <!--
                    HACK: Svelte compiler complains when the `<svelte:fragment>` is not a direct
                    decendent of Component
                -->

                {#if "items" in item && item.items}
                    <Menu.Divider>
                        {item.separator}

                        <svelte:fragment slot="sub-menu">
                            <Menu.SubMenu>
                                <!--
                                    TODO: This could be a different recursive Component for
                                    de-duplication, but being a bit lazy at the moment
                                -->

                                {#each item.items as sub_item, index (index)}
                                    {#if "href" in sub_item}
                                        <Menu.Item>
                                            <a
                                                aria-current={sub_item.current ? "page" : undefined}
                                                href={sub_item.href}
                                                target={sub_item.is_external ? "_blank" : undefined}
                                                rel={sub_item.is_external
                                                    ? "noopener noreferrer"
                                                    : undefined}
                                                sveltekit:noscroll={sub_item.no_scroll}
                                                sveltekit:prefetch={sub_item.prefetch}
                                                on:click={sub_item.on_click || noop}
                                            >
                                                {#if sub_item.icon}
                                                    <svelte:component this={sub_item.icon} />
                                                {/if}

                                                {sub_item.text}
                                            </a>
                                        </Menu.Item>
                                    {:else}
                                        <Menu.Button on:click={sub_item.on_click || noop}>
                                            {#if sub_item.icon}
                                                <svelte:component this={sub_item.icon} />
                                            {/if}

                                            {sub_item.text}
                                        </Menu.Button>
                                    {/if}
                                {/each}
                            </Menu.SubMenu>
                        </svelte:fragment>
                    </Menu.Divider>
                {:else}
                    <Menu.Divider>
                        {item.separator}
                    </Menu.Divider>
                {/if}
            {:else}
                <Menu.Divider />
            {/if}
        {:else if "href" in item}
            <Menu.Item>
                <a
                    current={item.current ? "page" : undefined}
                    href={item.href}
                    target={item.is_external ? "_blank" : undefined}
                    rel={item.is_external ? "noopener noreferrer" : undefined}
                    sveltekit:noscroll={item.no_scroll}
                    sveltekit:prefetch={item.prefetch}
                    on:click={item.on_click || noop}
                >
                    {#if item.icon}
                        <svelte:component this={item.icon} />
                    {/if}

                    {item.text}
                </a>
            </Menu.Item>
        {:else}
            <Menu.Button on:click={item.on_click || noop}>
                {#if item.icon}
                    <svelte:component this={item.icon} />
                {/if}

                {item.text}
            </Menu.Button>
        {/if}
    {/each}
</Menu.Container>
