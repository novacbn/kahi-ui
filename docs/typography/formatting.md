# Formatting

> Useful for formatting text in logical visual blocks.

## Paragraph

Used to semantically wrap a body of text into paragraph, with margin.

```html render
<p>
    A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a
    self-contained unit of a discourse in writing dealing with a particular point or idea. A
    paragraph consists of one or more sentences. Though not required by the syntax of any language,
    paragraphs are usually an expected part of formal writing, used to organize longer prose.
</p>
```

## Inline Code / Identifiers

Used to wrap code snippets and input device mappings into readable monospace text.

```html render
<div class="stack" data-spacing="medium">
    <code>const x = add(1, 2);</code>

    <span>
        <kbd>CTRL</kbd>
        +
        <kbd>X</kbd>
    </span>
</div>
```

## Pre Block

Used to wrap text to display as-is in monospace text and preserved whitespace, with automatic horizontal scroll.

```html render
<pre>
P R E F O R M A T T E D T E X T
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
\` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
~ 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ \` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~
</pre>
```

## Code Block

Used to wrap code snippets into multi-line monospace text, with automatic horizontal scroll.

```html render
<pre><code>&lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;p&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non massa efficitur, viverra erat eu, tincidunt purus. Pellentesque ut lacinia turpis. Phasellus quis tempus libero. Maecenas ut tristique quam, sit amet dignissim ligula. Pellentesque bibendum leo iaculis, molestie libero vel, faucibus enim.
&lt;/p&gt;</code></pre>
```
