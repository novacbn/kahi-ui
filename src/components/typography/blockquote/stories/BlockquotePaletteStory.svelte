<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../text/Text.svelte";

    import * as Blockquote from "../index";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <Blockquote.Container {...$$props} max_width="prose">
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

        <Blockquote.Cite>— DEFAULT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container {...$$props} max_width="prose" palette="accent">
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

        <Blockquote.Cite>— ACCENT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container {...$$props} max_width="prose" palette="dark">
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

        <Blockquote.Cite>— DARK</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container {...$$props} max_width="prose" palette="light">
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

        <Blockquote.Cite>— LIGHT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container {...$$props} max_width="prose" palette="alert">
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

        <Blockquote.Cite>— ALERT</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container {...$$props} max_width="prose" palette="affirmative">
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

        <Blockquote.Cite>— AFFIRMATIVE</Blockquote.Cite>
    </Blockquote.Container>

    <Blockquote.Container {...$$props} max_width="prose" palette="negative">
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

        <Blockquote.Cite>— NEGATIVE</Blockquote.Cite>
    </Blockquote.Container>
</Stack>
