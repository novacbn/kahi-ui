<script context="module">
    export const FORM_MANIFEST = [
        {id: "form-checks", text: "Checks"},
        {id: "form-radios", text: "Radios"},
        {id: "form-switches", text: "Switches"},
        {id: "form-text", text: "Text"},
        {id: "form-textarea", text: "TextArea"},
    ];
</script>

<script>
    import {Divider, Heading, Text, TextArea} from "@kahi-ui/svelte";

    import * as Menus from "../menus";
</script>

<article id="form">
    <Menus.Contents links={FORM_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="form-checks">
    <Heading>Form :: Checks</Heading>
</article>

<Divider />

<article id="form-radios">
    <Heading>Form :: Radios</Heading>
</article>

<Divider />

<article id="form-switches">
    <Heading>Form :: Switches</Heading>
</article>

<Divider />

<article id="form-text">
    <Heading>Form :: Text</Heading>

    <Text value="Text DEFAULT" />
    <Text value="Text DISABLED" disabled />
    <Text value="Text READONLY" readonly />
    <Text placeholder="Text PLACEHOLDER" />

    <Heading level="2">Text Palettes</Heading>

    <Text palette="accent" value="Text ACCENT" />
    <Text palette="dark" value="Text DARK" />
    <Text palette="light" value="Text LIGHT" />
    <Text palette="alert" value="Text ALERT" />
    <Text palette="affirmative" value="Text AFFIRMATIVE" />
    <Text palette="negative" value="Text NEGATIVE" />

    <Heading level="2">Text Shapes</Heading>

    <Text value="Text PILL" shape="pill" />
</article>

<Divider />

<article id="form-textarea">
    <Heading>Form :: TextArea</Heading>

    <TextArea value="TextArea DEFAULT" />
    <TextArea value="TextArea DISABLED" disabled />
    <TextArea value="TextArea READONLY" readonly />
    <TextArea placeholder="TextArea PLACEHOLDER" />

    <Heading level="2">TextArea Palettes</Heading>

    <TextArea palette="accent" value="TextArea ACCENT" />
    <TextArea palette="dark" value="TextArea DARK" />
    <TextArea palette="light" value="TextArea LIGHT" />
    <TextArea palette="alert" value="TextArea ALERT" />
    <TextArea palette="affirmative" value="TextArea AFFIRMATIVE" />
    <TextArea palette="negative" value="TextArea NEGATIVE" />
</article>
