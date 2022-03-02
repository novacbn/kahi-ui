<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import DataSelect from "./DataSelect.svelte";

    const ITEMS = [
        {text: "Alabama", id: "alabama", palette: "accent"},
        {text: "Alaska", id: "alaska", palette: "accent"},
        {text: "Arizona", id: "arizona", palette: "accent"},
        {text: "Arkansas", id: "arkansas", palette: "accent"},
        {text: "California", id: "california", palette: "accent"},
        {text: "Colorado", id: "colorado", palette: "accent"},
        {text: "Connecticut", id: "connecticut", palette: "accent"},
        {text: "Delaware", id: "delaware", palette: "accent"},
        {text: "Florida", id: "florida", palette: "accent"},
        {text: "Georgia", id: "georgia", palette: "accent"},
        {text: "Hawaii", id: "hawaii", palette: "accent"},
        {text: "Idaho", id: "idaho", palette: "accent"},
        {text: "Illinois", id: "illinois", palette: "accent"},
        {text: "Indiana", id: "Indiana", palette: "accent"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas", palette: "accent"},
        {text: "Kentucky", id: "kentucky", palette: "accent"},
        {text: "Louisiana", id: "louisiana", palette: "accent"},
        {text: "Maine", id: "maine", palette: "accent"},
        {text: "Maryland", id: "maryland", palette: "accent"},
        {text: "Massachusetts", id: "massachusetts", palette: "accent"},
        {text: "Michigan", id: "michigan", palette: "accent"},
        {text: "Minnesota", id: "minnesota", palette: "accent"},
        {text: "Mississippi", id: "mississippi", palette: "accent"},
        {text: "Missouri", id: "missouri", palette: "accent"},
        {text: "Montana", id: "montana", palette: "accent"},
        {text: "Nebraska", id: "nebraska", palette: "accent"},
        {text: "Nevada", id: "nevada", palette: "accent"},
        {text: "New Hampshire", id: "new-hampshire", palette: "accent"},
        {text: "New Jersey", id: "new-jersey", palette: "accent"},
        {text: "New Mexico", id: "new-mexico", palette: "accent"},
        {text: "New York", id: "new-york", palette: "accent"},
        {text: "North Carolina", id: "north-carolina", palette: "accent"},
        {text: "North Dakota", id: "north-dakota", palette: "accent"},
        {text: "Ohio", id: "ohio", palette: "accent"},
        {text: "Oklahoma", id: "oklahoma", palette: "accent"},
        {text: "Oregon", id: "oregon", palette: "accent"},
        {text: "Pennsylvania", id: "pennsylvania", palette: "accent"},
        {text: "Rhode Island", id: "rhode-island", palette: "accent"},
        {text: "South Carolina", id: "south-carolina", palette: "accent"},
        {text: "South Dakota", id: "south-dakota", palette: "accent"},
        {text: "Tennessee", id: "tennessee", palette: "accent"},
        {text: "Texas", id: "texas", palette: "accent"},
        {text: "Utah", id: "utah", palette: "accent"},
        {text: "Vermont", id: "vermont", palette: "accent"},
        {text: "Virginia", id: "virginia", palette: "accent"},
        {text: "Washington", id: "washington", palette: "accent"},
        {text: "West Virginia", id: "west-virginia", palette: "accent"},
        {text: "Wisconsin", id: "wisconsin", palette: "accent"},
        {text: "Wyoming", id: "wyoming", palette: "accent"},
    ];

    const PALETTES = [
        ["neutral", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["off", false],
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
</script>

<Meta title="Widgets/DataSelect" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <DataSelect
        items={ITEMS}
        logic_name="dataselect-preview"
        placeholder="Select a US State..."
        palette="accent"
    />
</Story>

<Story name="Multiple">
    <DataSelect
        items={ITEMS}
        logic_name="dataselect-multiple"
        placeholder="Select multiple US States..."
        palette="accent"
        multiple
    />
</Story>

<Story name="Max">
    <DataSelect
        items={ITEMS}
        logic_name="dataselect-multiple-max-one"
        placeholder="Select one (1) US State..."
        max={1}
        multiple
    />

    <DataSelect
        items={ITEMS}
        logic_name="dataselect-multiple-max-five"
        placeholder="Select five (5) US States..."
        max={5}
        multiple
    />
</Story>

<Story name="Slot">
    <DataSelect
        items={ITEMS}
        logic_name="dataselect-disabled"
        placeholder="Select a US State..."
        let:index
        let:item
    >
        {#if index % 5 === 0}
            <Text is="span">
                <Text is="strong">{item.text.slice(0, 1)}</Text>{item.text.slice(1)}
            </Text>
        {:else}
            {item.text}
        {/if}
    </DataSelect>
</Story>

<Story name="Flush">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <div>
            <Text is="strong">SINGULAR</Text>

            <DataSelect
                items={ITEMS}
                logic_name="dataselect-flush-singular"
                variation="flush"
                width="small"
                height="medium"
            />
        </div>

        <div>
            <Text is="strong">MULTIPLE</Text>

            <DataSelect
                items={ITEMS}
                logic_name="dataselect-flush-multiple"
                variation="flush"
                width="small"
                height="medium"
                multiple
            />
        </div>
    </Stack.Container>
</Story>

<Story name="Item - Disabled">
    <DataSelect
        items={ITEMS.map((item, index) => {
            return {...item, disabled: index % 5 === 0};
        })}
        logic_name="dataselect-item-disabled"
        placeholder="Select a US State..."
    />
</Story>

<Story name="Item - Palette">
    <DataSelect
        items={ITEMS.map((item, index) => {
            return {...item, palette: index % 5 === 0 ? "negative" : item.palette};
        })}
        logic_name="dataselect-item-palette"
        placeholder="Select a US State..."
    />
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <DataSelect
                    items={ITEMS}
                    logic_name="dataselect-palette-{palette}"
                    placeholder="Select a US State..."
                    palette={is_default ? undefined : palette}
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <DataSelect
                    items={ITEMS}
                    logic_name="dataselect-sizing-{sizing}"
                    placeholder="Select a US State..."
                    sizing={is_default ? undefined : sizing}
                />
            </div>
        {/each}
    </Stack.Container>
</Story>
