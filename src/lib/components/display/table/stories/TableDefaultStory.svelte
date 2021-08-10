<script>
    import {Code} from "../../../typography/code";
    import {Text} from "../../../typography/text";

    import * as Table from "../index";

</script>

<Table.Container {...$$props}>
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column><Text is="strong">mobile</Text></Table.Column>
            <Table.Column><Code>0px</Code></Table.Column>
            <Table.Column><Code>640px</Code></Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column><Text is="strong">tablet</Text></Table.Column>
            <Table.Column><Code>641px</Code></Table.Column>
            <Table.Column><Code>768px</Code></Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column><Text is="strong">desktop</Text></Table.Column>
            <Table.Column><Code>769px</Code></Table.Column>
            <Table.Column><Code>1024px</Code></Table.Column>
        </Table.Row>
        <Table.Row>
            <Table.Column><Text is="strong">widescreen</Text></Table.Column>
            <Table.Column><Code>1025px</Code></Table.Column>
            <Table.Column><Code>∞</Code></Table.Column>
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
