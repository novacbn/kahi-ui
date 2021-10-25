<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../text/Text.svelte";

    import * as Blockquote from "./";

    const PALETTES = [
        ["default", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];
</script>

<Meta title="Typography/Blockquote" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Blockquote.Container max_width="prose" margin_x="auto" margin_y="medium">
        <Text margin_bottom="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio, id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed molestie lectus convallis. Nullam gravida placerat
            ex, sodales porttitor nibh. Suspendisse vitae nisi euismod, venenatis dui eu, hendrerit
            risus. Maecenas at hendrerit odio, at dictum nulla. Morbi tristique, augue vel blandit
            bibendum, mauris nibh finibus justo, ut mollis magna neque in lectus. Sed dignissim,
            enim sit amet lobortis tincidunt, nibh risus elementum urna, vel tincidunt nisi elit vel
            tortor. Curabitur iaculis nulla nec odio efficitur, sit amet auctor odio mattis. Aenean
            quam arcu, feugiat non turpis eget, aliquet vestibulum lacus.
        </Text>

        <Text margin_bottom="medium">
            Praesent lacinia elit et risus molestie pretium. Aenean semper mauris ut erat ornare
            lobortis. Integer sollicitudin bibendum rhoncus. Nulla nisi orci, maximus elementum
            libero ut, tristique scelerisque sapien. Aenean ultricies dui quis finibus pretium. Nunc
            tellus neque, cursus et egestas vel, elementum sit amet lacus. Aenean ac euismod nunc,
            id molestie eros.
        </Text>

        <Blockquote.Cite>— Lorem Ipsum</Blockquote.Cite>
    </Blockquote.Container>
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <Blockquote.Container
                max_width="prose"
                palette={palette === "default" ? undefined : palette}
            >
                <Text margin_bottom="medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta, urna vel
                    tristique varius, ipsum erat auctor odio, id imperdiet mauris velit eget quam.
                    Donec viverra urna eu ligula eleifend, sed molestie lectus convallis. Nullam
                    gravida placerat ex, sodales porttitor nibh. Suspendisse vitae nisi euismod,
                    venenatis dui eu, hendrerit risus. Maecenas at hendrerit odio, at dictum nulla.
                    Morbi tristique, augue vel blandit bibendum, mauris nibh finibus justo, ut
                    mollis magna neque in lectus. Sed dignissim, enim sit amet lobortis tincidunt,
                    nibh risus elementum urna, vel tincidunt nisi elit vel tortor. Curabitur iaculis
                    nulla nec odio efficitur, sit amet auctor odio mattis. Aenean quam arcu, feugiat
                    non turpis eget, aliquet vestibulum lacus.
                </Text>

                <Blockquote.Cite>
                    — {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Blockquote.Cite>
            </Blockquote.Container>
        {/each}
    </Stack>
</Story>
