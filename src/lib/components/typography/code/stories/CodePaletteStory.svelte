<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../text/Text.svelte";

    import Code from "../Code.svelte";

</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    <div style="display:flex;flex-direction:column;">
        <Text is="strong">DEFAULT</Text>

        <!-- prettier-ignore -->
        <Code {...$$props}>import * as Kahi from "@kahi-ui/framework";</Code>
    </div>

    <div style="display:flex;flex-direction:column;">
        <Text is="strong">ACCENT</Text>

        <!-- prettier-ignore -->
        <Code {...$$props} palette="accent">import * as Kahi from "@kahi-ui/framework";</Code>
    </div>

    <div style="display:flex;flex-direction:column;">
        <Text is="strong">DARK</Text>

        <!-- prettier-ignore -->
        <Code {...$$props} palette="dark">import * as Kahi from "@kahi-ui/framework";</Code>
    </div>

    <div style="display:flex;flex-direction:column;">
        <Text is="strong">LIGHT</Text>

        <!-- prettier-ignore -->
        <Code {...$$props} palette="light">import * as Kahi from "@kahi-ui/framework";</Code>
    </div>

    <div style="display:flex;flex-direction:column;">
        <Text is="strong">ALERT</Text>

        <!-- prettier-ignore -->
        <Code {...$$props} palette="alert">import * as Kahi from "@kahi-ui/framework";</Code>
    </div>

    <div style="display:flex;flex-direction:column;">
        <Text is="strong">AFFIRMATIVE</Text>

        <!-- prettier-ignore -->
        <Code {...$$props} palette="affirmative">import * as Kahi from "@kahi-ui/framework";</Code>
    </div>

    <div style="display:flex;flex-direction:column;">
        <Text is="strong">NEGATIVE</Text>

        <!-- prettier-ignore -->
        <Code {...$$props} palette="negative">import * as Kahi from "@kahi-ui/framework";</Code>
    </div>
</Stack>
