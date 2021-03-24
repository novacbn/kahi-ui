<script>
    import {Container, Divider, Heading, Text, TextArea} from "@kahi-ui/svelte";
</script>

<Container>
    <article id="forms-checks">
        <Heading>Form :: Checks</Heading>
    </article>

    <Divider />

    <article id="forms-radios">
        <Heading>Form :: Radios</Heading>
    </article>

    <Divider />

    <article id="forms-switches">
        <Heading>Form :: Switches</Heading>
    </article>

    <Divider />

    <article id="forms-text">
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

    <article id="forms-textarea">
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
</Container>
