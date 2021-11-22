<script lang="ts">
    import {Temporal} from "@js-temporal/polyfill";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";
    import {defaultopt} from "../../../util/functional";
    import {DEFAULT_FORMAT_TIME, DEFAULT_LOCALE} from "../../../util/locale";

    type $$Props = {
        element?: HTMLTimeElement;

        locale?: string;

        hour?: Intl.DateTimeFormatOptions["hour"];
        hour_12?: Intl.DateTimeFormatOptions["hour12"];
        minute?: Intl.DateTimeFormatOptions["minute"];
        second?: Intl.DateTimeFormatOptions["second"];

        timestamp: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let locale: $$Props["locale"] = undefined;

    export let hour: $$Props["hour"] = undefined;
    export let hour_12: $$Props["hour_12"] = undefined;
    export let minute: $$Props["minute"] = undefined;
    export let second: $$Props["second"] = undefined;

    export let timestamp: $$Props["timestamp"];

    $: _options = defaultopt({hour, hour_12, minute, second}, DEFAULT_FORMAT_TIME);
    $: _time = Temporal.PlainTime.from(timestamp);
</script>

<time
    bind:this={element}
    {...map_global_attributes($$props)}
    class="time-stamp {_class}"
    datetime={_time.toString()}
>
    {_time.toLocaleString(locale ?? DEFAULT_LOCALE, {
        hour: _options.hour,
        hour12: _options.hour_12,
        minute: _options.minute,
        second: _options.second,
    })}
</time>
