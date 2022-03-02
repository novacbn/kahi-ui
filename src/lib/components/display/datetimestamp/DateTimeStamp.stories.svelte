<script>
    import {Temporal} from "../../../vendor/js-temporal-polyfill";
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Code from "../../typography/code/Code.svelte";
    import Text from "../../typography/text/Text.svelte";

    import DateTimeStamp from "./DateTimeStamp.svelte";

    const FORMATS_DAY = ["2-digit", "numeric"];

    const FORMATS_MONTH = ["2-digit", "long", "narrow", "numeric", "short"];

    const FORMATS_WEEKDAY = ["long", "short", "narrow"];

    const FORMATS_YEAR = ["2-digit", "numeric"];

    const FORMATS_HOUR = ["2-digit", "numeric"];

    const FORMATS_MINUTE = ["2-digit", "numeric"];

    const FORMATS_SECOND = ["2-digit", "numeric"];

    const now_instant = Temporal.Now.instant().toString();
    const now_plain = Temporal.Now.plainDateTimeISO().toString();
    const now_unix = Date.now();
    const now_zoned = Temporal.Now.zonedDateTimeISO().toString();
</script>

<Meta title="Display/DateTimeStamp" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <DateTimeStamp timestamp={now_zoned} />
</Story>

<Story name="Twelve (12) / Twenty-Four (24) Hour">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        <div>
            <Text>
                <Text is="strong">12 HOUR</Text>
            </Text>

            <DateTimeStamp
                timestamp={now_zoned}
                hour="2-digit"
                hour_12={true}
                minute="2-digit"
                second="2-digit"
            />
        </div>

        <div>
            <Text>
                <Text is="strong">24 HOUR</Text>
            </Text>

            <DateTimeStamp
                timestamp={now_zoned}
                hour="2-digit"
                hour_12={false}
                minute="2-digit"
                second="2-digit"
            />
        </div>
    </Stack.Container>
</Story>

<Story name="Types">
    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        <div>
            <Text>
                <Text is="strong">Instant</Text>
                <br />
                <Code>{now_instant}</Code>
            </Text>

            <DateTimeStamp timestamp={now_instant} />
        </div>

        <div>
            <Text>
                <Text is="strong">Plain</Text>
                <br />
                <Code>{now_plain}</Code>
            </Text>

            <DateTimeStamp timestamp={now_plain} />
        </div>

        <div>
            <Text>
                <Text is="strong">UNIX Epoch</Text>
                <br />
                <Code>{now_unix}</Code>
            </Text>

            <DateTimeStamp timestamp={now_unix} />
        </div>

        <div>
            <Text>
                <Text is="strong">Zoned</Text>
                <br />
                <Code>{now_zoned}</Code>
            </Text>

            <DateTimeStamp
                timestamp={now_zoned}
                hour="2-digit"
                hour_12={true}
                minute="2-digit"
                second="2-digit"
            />
        </div>
    </Stack.Container>
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

                <DateTimeStamp timestamp={now_zoned} day={format} />
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

                <DateTimeStamp timestamp={now_zoned} month={format} />
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

                <DateTimeStamp timestamp={now_zoned} weekday={format} />
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

                <DateTimeStamp timestamp={now_zoned} year={format} />
            </div>
        {/each}
    </Stack.Container>

    <Text is="strong">HOUR</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_HOUR as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp
                    timestamp={now_zoned}
                    hour={format}
                    minute="2-digit"
                    second="2-digit"
                    hour_12
                />
            </div>
        {/each}
    </Stack.Container>

    <Text is="strong">MINUTE</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_MINUTE as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp
                    timestamp={now_zoned}
                    hour="2-digit"
                    minute={format}
                    second="2-digit"
                    hour_12
                />
            </div>
        {/each}
    </Stack.Container>

    <Text is="strong">SECOND</Text>

    <Stack.Container orientation="horizontal" spacing="medium" alignment_y="top" variation="wrap">
        {#each FORMATS_SECOND as format (format)}
            <div>
                <Text>
                    <Text is="strong">
                        {format.toUpperCase()}
                    </Text>
                </Text>

                <DateTimeStamp
                    timestamp={now_zoned}
                    hour="2-digit"
                    minute="2-digit"
                    second={format}
                />
            </div>
        {/each}
    </Stack.Container>
</Story>
