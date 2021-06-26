+++
[[properties."Table.Container"]]
name="variation"
description="Alters how the <code>Table.Container</code> renders with various additions."
types=["borders", "stripes"]
+++

# Table

`Table` is typically used to render tabular data in a structured row -> columns format, for end-users to easily read the contents.

```svelte repl Table Preview
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container>
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Table Imports

```html default Table Imports
<script>
    import {Table} from "@kahi-ui/framework";

    const {
        Container,
        Column,
        Footer,
        Header,
        Heading,
        Row,
        Section,
    } = Table;
</script>
```

## Borders

You can make a `Table` have borders via the `variation` property.

```svelte repl Table Preview
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container variation="borders">
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Stripes

You can make a `Table` have stripes via the `variation` property.

```svelte repl Table Preview
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container variation="stripes">
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Borders + Stripes

You can make a `Table` have both borders **AND** stripes via the `variation` property.

```svelte repl Table Preview
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container variation={["borders", "stripes"]}>
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Scrollable Tables

You can make a `Table` scrollable by wrapping it with a [`Scrollable`](../layouts/scrollable.md).

```svelte repl Table Scrollable
<script>
    import {
        Code,
        Scrollable,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Scrollable>
    <Table.Container>
        <Table.Header>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Header>

        <Table.Section>
            <Table.Row>
                <Table.Column>
                    <Text is="strong">mobile</Text>
                </Table.Column>

                <Table.Column>
                    <Code>0px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>640px</Code>
                </Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column>
                    <Text is="strong">tablet</Text>
                </Table.Column>

                <Table.Column>
                    <Code>641px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>768px</Code>
                </Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column>
                    <Text is="strong">desktop</Text>
                </Table.Column>

                <Table.Column>
                    <Code>769px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>1024px</Code>
                </Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column>
                    <Text is="strong">widescreen</Text>
                </Table.Column>

                <Table.Column>
                    <Code>1025px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>∞</Code>
                </Table.Column>
            </Table.Row>
        </Table.Section>

        <Table.Footer>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Footer>
    </Table.Container>
</Scrollable>
```
