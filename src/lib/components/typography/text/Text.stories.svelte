<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";

    import Text from "./Text.svelte";

    const ALIGNMENTS = [
        ["default", true],
        ["center", false],
        ["justify", false],
        ["left", false],
        ["right", false],
    ];

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

    const SIZES = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    const TRANSFORMS = [
        ["default", true],
        ["capitalize", false],
        ["lowercase", false],
        ["uppercase", false],
    ];

    const VARIATIONS = [
        ["default", true],
        ["truncate", false],
    ];
</script>

<Meta title="Typography/Text" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
    </Text>
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text palette={palette === "default" ? undefined : palette}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Size">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text size={size === "default" ? undefined : size}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Align">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ALIGNMENTS as [align, is_default]}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${align.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text align={align === "default" ? undefined : align}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Transform">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each TRANSFORMS as [transform, is_default]}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${transform.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text transform={transform === "default" ? undefined : transform}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Variation">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each VARIATIONS as [variation, is_default]}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {`${variation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Text variation={variation === "default" ? undefined : variation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
        {/each}
    </Stack>
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

<Story name="Other Tags">
    <Stack alignment_x="left" spacing="medium">
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
    </Stack>
</Story>
