<script context="module">
    export const TYPOGRAPHY_MANIFEST = [
        {id: "typography-anchors", text: "Anchors"},
        {id: "typography-formatting", text: "Formatting"},
        {id: "typography-headings", text: "Headings"},
        {id: "typography-paragraphs", text: "Paragraphs"},
        {id: "typography-modifiers", text: "Modifiers"},
        {id: "typography-quote", text: "Quote"},
    ];

    const TEXT_PRE_BLOCK = `P R E F O R M A T T E D T E X T
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
\` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
~ 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ \` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~`;
</script>

<script>
    import {
        Anchor,
        Divider,
        Formatting,
        Heading,
        Modifiers,
        Paragraph,
        Quote,
    } from "@kahi-ui/svelte";

    import * as Menus from "../menus";
</script>

<article id="typography">
    <Menus.Contents links={TYPOGRAPHY_MANIFEST} heading="Table of Contents" palette="light" />
</article>

<article id="typography-anchors">
    <Heading>Typography :: Anchors</Heading>

    <Anchor href="https://google.com" target="_blank">Click here</Anchor>
    to goto Google!
</article>

<Divider />

<article id="typography-formatting">
    <Heading>Typography :: Formatting</Heading>

    <Heading level={2}>Code</Heading>

    <Formatting.Code>&lt;div&gt;code&lt;/div&gt;</Formatting.Code>

    <Heading level={2}>Pre Block</Heading>

    <Formatting.PreBlock>{TEXT_PRE_BLOCK}</Formatting.PreBlock>

    <Heading level={2}>Code Block</Heading>

    <Formatting.CodeBlock>&lt;Heading&gt;Pre-formatted Code&lt;/Heading&gt;</Formatting.CodeBlock>
</article>

<Divider />

<article id="typography-headings">
    <Heading>Typography :: Headings</Heading>

    <Heading>Heading 1</Heading>
    <Heading level="2">Heading 2</Heading>
    <Heading level="3">Heading 3</Heading>
    <Heading level="4">Heading 4</Heading>
    <Heading level="5">Heading 5</Heading>
    <Heading level="6">Heading 6</Heading>
</article>

<Divider />

<article id="typography-paragraphs">
    <Heading>Typography :: Paragraphs</Heading>

    <Paragraph>
        A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a
        self-contained unit of a discourse in writing dealing with a particular point or idea. A
        paragraph consists of one or more sentences. Though not required by the syntax of any
        language, paragraphs are usually an expected part of formal writing, used to organize longer
        prose.
    </Paragraph>
</article>

<Divider />

<article id="typography-modifiers">
    <Heading>Typography :: Modifiers</Heading>

    <Modifiers.Bold>This is bold text!</Modifiers.Bold><br />
    <Modifiers.Italic>This is italicized text!</Modifiers.Italic><br />
    <Modifiers.Small>This is small text!</Modifiers.Small>
</article>

<article id="typography-quote">
    <Heading>Typography :: Quote</Heading>

    <Quote.Container>
        <Paragraph>
            A block quotation (also known as a long quotation or extract) is a quotation in a
            written document, that is set off from the main text as a paragraph, or block of text.
        </Paragraph>

        <Paragraph>
            It is typically distinguished visually using indentation and a different typeface or
            smaller size quotation. It may or may not include a citation, usually placed at the
            bottom.
        </Paragraph>

        <Quote.Cite>
            <Anchor href="#typography-quote">Said no one, ever.</Anchor>
        </Quote.Cite>
    </Quote.Container>

    <Heading level="2">Quote Palettes</Heading>

    <Quote.Container palette="accent">
        <Paragraph>Blockquote ACCENT</Paragraph>
    </Quote.Container>

    <Quote.Container palette="dark">
        <Paragraph>Blockquote DARK</Paragraph>
    </Quote.Container>

    <Quote.Container palette="light">
        <Paragraph>Blockquote LIGHT</Paragraph>
    </Quote.Container>

    <Quote.Container palette="alert">
        <Paragraph>Blockquote ALERT</Paragraph>
    </Quote.Container>

    <Quote.Container palette="affirmative">
        <Paragraph>Blockquote AFFIRMATIVE</Paragraph>
    </Quote.Container>

    <Quote.Container palette="negative">
        <Paragraph>Blockquote NEGATIVE</Paragraph>
    </Quote.Container>
</article>
