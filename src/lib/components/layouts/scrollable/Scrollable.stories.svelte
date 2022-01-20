<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Text from "../../typography/text/Text.svelte";

    import Spacer from "../spacer/Spacer.svelte";

    import Scrollable from "./Scrollable.svelte";
</script>

<Meta title="Layouts/Scrollable" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Scrollable style="width:25rem;height:15rem;">
        <Spacer spacing="huge" />
        <Spacer spacing="huge" />

        <Text>
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

        <Spacer spacing="huge" />
        <Spacer spacing="huge" />
    </Scrollable>
</Story>
