<script>
    import {Temporal} from "../../../vendor/js-temporal-polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import DateStamp from "./DateStamp.svelte";

    const FORMATS_DAY = ["2-digit", "numeric"];

    const FORMATS_MONTH = ["2-digit", "long", "narrow", "numeric", "short"];

    const FORMATS_WEEKDAY = ["long", "short", "narrow"];

    const FORMATS_YEAR = ["2-digit", "numeric"];

    const now = Temporal.Now.plainDateISO().toString();
</script>

<Meta title="Display/DateStamp" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <DateStamp timestamp={now} />
</Story>

<Story name="Custom Format">
    <Text is="strong">DAY</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_DAY as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateStamp timestamp={now} day={format} />
            </div>
        {/each}
    </Stack.Container>

    <Text is="strong">MONTH</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_MONTH as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateStamp timestamp={now} month={format} />
            </div>
        {/each}
    </Stack.Container>

    <Text is="strong">WEEKDAY</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_WEEKDAY as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateStamp timestamp={now} weekday={format} />
            </div>
        {/each}
    </Stack.Container>

    <Text is="strong">YEAR</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_YEAR as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateStamp timestamp={now} year={format} />
            </div>
        {/each}
    </Stack.Container>
</Story>
