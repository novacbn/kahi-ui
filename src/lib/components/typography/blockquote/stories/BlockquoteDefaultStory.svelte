<script>
    import Text from "../../text/Text.svelte";

    import * as Blockquote from "../index";

</script>

<Blockquote.Container {...$$props} max_width="prose" margin_x="auto" margin_y="medium">
    <Text margin_bottom="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta, urna vel tristique
        varius, ipsum erat auctor odio, id imperdiet mauris velit eget quam. Donec viverra urna eu
        ligula eleifend, sed molestie lectus convallis. Nullam gravida placerat ex, sodales
        porttitor nibh. Suspendisse vitae nisi euismod, venenatis dui eu, hendrerit risus. Maecenas
        at hendrerit odio, at dictum nulla. Morbi tristique, augue vel blandit bibendum, mauris nibh
        finibus justo, ut mollis magna neque in lectus. Sed dignissim, enim sit amet lobortis
        tincidunt, nibh risus elementum urna, vel tincidunt nisi elit vel tortor. Curabitur iaculis
        nulla nec odio efficitur, sit amet auctor odio mattis. Aenean quam arcu, feugiat non turpis
        eget, aliquet vestibulum lacus.
    </Text>

    <Text margin_bottom="medium">
        Praesent lacinia elit et risus molestie pretium. Aenean semper mauris ut erat ornare
        lobortis. Integer sollicitudin bibendum rhoncus. Nulla nisi orci, maximus elementum libero
        ut, tristique scelerisque sapien. Aenean ultricies dui quis finibus pretium. Nunc tellus
        neque, cursus et egestas vel, elementum sit amet lacus. Aenean ac euismod nunc, id molestie
        eros.
    </Text>

    <Blockquote.Cite>— Lorem Ipsum</Blockquote.Cite>
</Blockquote.Container>
