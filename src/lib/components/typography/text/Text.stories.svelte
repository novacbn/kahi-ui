<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import Text from "./Text.svelte";

    const ALIGNMENTS_X = [
        ["inherit", true],
        ["left", false],
        ["center", false],
        ["right", false],
        ["justify", false],
    ];

    const PALETTES = [
        ["inverse", true],
        ["auto", false],
        ["accent", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    const SIZINGS = [
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const TRANSFORMS = [
        ["inherit", true],
        ["capitalize", false],
        ["lowercase", false],
        ["uppercase", false],
    ];

    const VARIATIONS = [
        ["none", true],
        ["truncate", false],
    ];
</script>

<Meta title="Typography/Text" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
    </Text>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text palette={is_default ? undefined : palette}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing - Inline">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text sizing={is_default ? undefined : sizing}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing - Block">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text variation="block" sizing={is_default ? undefined : sizing}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Alignments">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${alignment_x.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text alignment_x={is_default ? undefined : alignment_x}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Transforms">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each TRANSFORMS as [transform, is_default] (transform)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${transform.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text transform={is_default ? undefined : transform}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Variation">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each VARIATIONS as [variation, is_default] (variation)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${variation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text variation={is_default ? undefined : variation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Pre">
    <!-- prettier-ignore -->
    <Text is="pre">
P R E F O R M A T T E D T E X T
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z &lbrace; | &rbrace; ~
~ 0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z &lbrace; | &rbrace; ~
</Text>
</Story>

<Story name="Elements">
    <Stack.Container alignment_x="left" spacing="medium">
        <Text is="abbr">Abbreviation</Text>

        <Text is="b">Bold</Text>
        <Text is="strong">Strong</Text>

        <Text is="del">Deleted</Text>
        <Text is="s">Strikethrough</Text>

        <Text is="em">Emphasis</Text>
        <Text is="i">Italic</Text>

        <Text is="ins">Inserted</Text>
        <Text is="u">Underline</Text>

        <Text is="kbd">CTRL + C</Text>
        <Text is="mark">Highlighted</Text>
        <Text is="samp">Sample</Text>
        <Text is="small">Small</Text>

        <Text is="sub">sub</Text>
        <Text is="sup">sup</Text>
    </Stack.Container>
</Story>
