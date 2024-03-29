# CHANGELOG

## v0.6.4 - 2022/03/19

-   `Card`

    -   Fixed missing `<Card.Figure fit radius shape>` support, to match `<Figure>` Property API.

-   `keybind`

    -   Fixed `make_keybind_shortcut` missing as a package export.
    -   Updated `make_keybind_shortcut` action to allow override of preset options aside from `IKeybindOptions.on_bind`.

-   `Tile`

    -   Fixed missing `<Tile.Figure fit radius shape>` support, to match `<Figure>` Property API.

## v0.6.3 - 2022/03/11

-   `Aside`

    -   `<Aside.Container actions>` — Fixed property not applying actions to element.

-   `Divider`

    -   `<Divider actions>` — Fixed property not applying actions to element when using text divider.
    -   `<Divider class>` — Fixed property not applying class to element.

-   `keybind`

    -   Added `make_keybind_shortcut({binds: string, repeat?: boolean, repeat_throttle?: number, throttle_cancel?: boolean}): (element: Document | Element, {on_bind}) => IKeybindHandle` — Useful for developers defining their own shortcut functions.
    -   Fixed ignoring keybinds that use `+` (plus) key, e.g. `keybind({binds: "control++"})`

-   `Omni`

    -   `<Omni.Container actions>` — Fixed property not applying actions to element.

## v0.6.2 - 2022/03/02

-   `DataSelect`

    -   Added new Component! Similar to `DataTable`, allows you to provide a list of data structures to create a dropdown of selectable options.

    -   `<svelte:fragment slot="default" let:index={number} let:item={IDataSelectItem}>` — Allows for overriding of the default display option text.

    -   `<DataSelect items={IDataSelectItem[]}>` — Sets the options displayed to the user.

        -   `IDataSelectItem.disabled: boolean` — Controls if the specific option is disabled.
        -   `IDataSelectItem.id: string` — Controls the element ID assigned to the option's `<input />` element.
        -   `IDataSelectItem.palette: "auto" | "inverse" | "accent" | "dark" | "light" | "alert" | "affirmative" | "informative" | "negative"` — Alters the color palette of the inner `<Check>` or `<Radio>` Component.
        -   `IDataSelectItem.text: string` — Controls the text displayed to the user for the option.
        -   `IDataSelectItem.value: string` — Controls the form value associated with the option. If unset, `IDataSelectItem.id` will be used.

    -   `<DataSelect multiple={boolean}>` — Controls whether multiple options can be selected by the user.

        -   `<DataSelect max={number}>` — Controls how many multiple choices a user can select when enabled.

    -   `<DataSelect logic_name={string}>` — Controls the form name that prefixes all options.
    -   `<DataSelect logic_state={string | string[]}>` — Controls which options are selected.

    -   `<DataSelect searching={string}>` — Controls the current searching filter in the inner `TextInput` value.

        -   `<DataSelect searching_algorithm={(item: IDataSelectItem, searching?: string) => boolean}>` — Allows implementing of custom search filtering.

    -   `<DataSelect placeholder={string}>` — Alters displayed text while closed or if no options are selected.

    -   `<DataSelect palette={"auto" | "inverse" | "accent" | "dark" | "light" | "alert" | "affirmative" | "informative" | "negative"}>` — Alters the color palette of the inner `TextInput` Component.
    -   `<DataSelect sizing={"nano", "tiny", "small", "medium", "large", "huge", "massive", "${VIEWPORT}:${SIZE}"}>`— Alters the sizing of the inner`TextInput` Component.
    -   `<DataSelect variation={"flush"}>` — Alters to render the choices inline instead of a `Popover`.

-   `DataTable`

    -   `<DataTable searching_algorithm>` — Updated to provide `<DataTable searching>` instead of needing to bind to retrieve value.

        -   `<DataTable searching_algorithm={(item: IDataSelectItem) => boolean}>` -> `<DataTable searching_algorithm={(item: IDataSelectItem, searching?: string) => boolean}>`

-   `DateTimeStamp`

    -   `<DateTimeStamp timestamp={number}>` — Added support to handle UNIX Epoch number timestamps, e.g. `1646210184506`
    -   `<DateTimeStamp timestamp={string}>` — Added support to handle UTC Instant string timestamps, e.g. `2022-03-02T08:28:58.891Z` / `2020-01-23T17:04:36.491865121-08:00`

-   `Popover`

    -   `<Popover.Container variation="control">` — Activates the `<Popover.Section>` content when sibling content is focused.

## v0.6.1 - 2022/02/25

-   Fixed packaging file inclusion.

## v0.6.0 - 2022/02/25

-   Reworked the internal stylesheet, which includes the final visual refresh before `v1`.
-   Refined / Consolidated the public APIs of all the Actions / Components / Stores _(see below)_, which should all be considered semi-stable now for `v1`.
-   **(BREAKING)** Themeing is now a separate stylesheet, which should be imported after your Framework import.

```js
import "@kahi-ui/framework/dist/kahi-ui.framework.css";
import "@kahi-ui/framework/dist/kahi-ui.theme.default.css";
```

-   Added the following Components / Component Features

    -   `*`

        -   `<* elevation>` — Added `lower` / `higher` elevation tiers.
        -   `<* palette>` — Added `neutral` / `informative` semantic palettes.

            -   `neutral` — Typically used to represent a non-destructive action or a secondary action whenever another palette is used.
            -   `informative` — Typically signals that the Component is related to the current content, but is otherwise out of context.

        -   `<* sizing>` — Added `nano` / `massive` size tiers to any Component that can scale.
        -   `<* size>` — Is now a shorthand property for expressing `width` + `height`.

            -   e.g. `<* size="viewport-66">` is equivalent to `<* width="viewport-66" height="viewport-66">`

        -   `<* width/height/size="nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}">` — Sets dimensions based on the current theme's block sizing variables.

            -   You can also prefix any of the size tiers with `icon-` to access the theme's icon sizing variables instead.
            -   e.g. `<* size="icon-small">`

        -   `<* width/height/size="viewport-{mobile/tablet/desktop/widescreen}">` — Sets dimensions based on the current theme's Viewport breakpoints.

    -   Disclosure

        -   `Tab`

            -   `<Tab.Anchor disabled={boolean}>` — Disables clicks.

    -   Display

        -   `Badge`

            -   `<Badge is="a/button" href={string}>` — Alters the `Badge` to render an underline on hover.
            -   `<Badge radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}" shape="circle/pill/{VIEWPORT}:{SHAPE}">` — Alters the border radius rendered.

        -   `Kbd` — Renders text in a manner that resembles a keycap from a keyboard, to represent a key binding. e.g. `CTRL+C` which typically means "Copy"

    -   Embedded

        -   `Figure`

            -   `<Figure radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}">` — Alters the border radius rendered.

    -   Feedback

        -   `Ellipsis`

            -   `<Ellipsis animation="bounce/pulse/ping">` — Alters the internal `<Animation animation>` used.
            -   `<Ellipsis iterations={number}>` — Sets how many copies of the passed `default` slot is rendered to DOM. Defaults to `3`.

        -   `Progress`

            -   `<Progress radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}">` — Alters the border radius of the progress bar.

    -   Interactables

        -   `Button`

            -   `<Button radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}" shape="circle/pill/{VIEWPORT}:{SHAPE}">` — Alters the border radius rendered.
            -   `<Button is="a/label" disabled={boolean}>` — Disables clicks.

        -   `Form`

            -   `<Form.Legend is="legend/span">` — Renders a form heading.
            -   `<Form.FieldSet>` — Renders the child content within a spaced border box.

        -   `NumberInput`

            -   `<NumberInput radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}" shape="circle/pill/{VIEWPORT}:{SHAPE}">` — Alters the border radius rendered.
            -   `<NumberInput max={number | string} min={number | string}>` — Masks the user input from entering numbers not within the specified range.

        -   `TextInput`

            -   `<TextInput radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}" shape="circle/pill/{VIEWPORT}:{SHAPE}">` — Alters the border radius rendered.

    -   Layouts

        -   `Article` — Adds styling to classes HTML tags used to render typical Markdown output.

            -   `<a>` — Renders similarly to `<Anchor>` along with a palette color configured by theme.
            -   `<blockquote>` / `<cite>` — Renders similarly to `<Blockquote.Container>` / `<Blockquote.Cite>`, with inner children spacing and bottom margin.
            -   `<code>` / `<pre><code>` — Renders similarly to `<Code>`.
            -   `<hr>` — Renders similarly to `<Divider>`.
            -   `<h1>~<h6>` — Renders similarly to `<Heading is="{TAG}">` along with bottom margin.
            -   `<ol>` / `<ul>` — Renders similarly to `<List is="{TAG}">` along with bottom margin + paragraph spacing.
            -   `<p>` — Renders similarly to `<Text>` along with bottom margin.
            -   `<small>` — Renders similarly to `<Text is="small">`.

        -   `Container`

            -   `<Container is="article">` — Renders as an `<article>` semantic element.

        -   `Grid`

            -   `<Grid.Container variation="relative">` — Adjusts spacing to be relative to inherited font size.

        -   `Group`

            -   `<Group variation="stacked" spacing="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}" spacing_x spacing_y>` — Alters how close together the child elements are stacked on top of each other.

        -   `Mosaic`

            -   `<Mosaic.Container variation="relative">` — Adjusts spacing and sizing to be relative to inherited font size.

            -   `<Mosaic.Item>` — Adjusts the layout of a singular `Mosaic` item.

                -   `<Mosaic.Item span={number} span_x={number} span_y={number}>` — Adjusts the column / row span of the item.

        -   `Stack`

            -   `<Stack.Container variation="relative">` — Adjusts spacing to be relative to inherited font size.

            -   `<Stack.Item>` — Adjusts the layout of a singular `Stack` item.

                -   `<Stack.Item variation="stretch">` — Grows the item to fill any unused space within the `<Stack.Container>`.

    -   Navigation

        -   `Anchor`

            -   `<Anchor disabled={boolean}>` — Disables clicks and alters the appearance.

        -   `Breadcrumb`

            -   `<Breadcrumb.Button>` — Renders as the same appearance of `<Breadcrumb.Anchor>`, that does not navigate the Browser.
            -   `<Breadcrumb.(Anchor/Button/Container) palette="auto/inverse/accent/dark/light/alert/affirmative/informative/negative">` — Alters the rendered color palette.

        -   `Menu`

            -   `<Menu.Container palette="auto/inverse/accent/dark/light/alert/affirmative/informative/negative">` — Alters the rendered color palette of all children.
            -   `<Menu.Anchor disabled={boolean}>` — Disables clicks and alters the appearance.

    -   Overlays

        -   `Backdrop`

            -   `<Backdrop palette="auto/inverse/accent/dark/light/alert/affirmative/informative/negative">` — Alters the rendered color palette.

        -   `Clickable`

            -   `<Clickable.Anchor disabled={boolean}>` — Disables clicks and alters the appearance.

        -   `Popover`

            -   `<Popover.Container variation="tooltip">` — Activates the `<Popover.Section>` content when sibling content is focused / hovered.

    -   Surfaces

        -   `Box`

            -   `<Box radius="none/nano/tiny/small/medium/large/huge/massive/{VIEWPORT}:{SIZE}" shape="circle/pill/{VIEWPORT}:{SHAPE}">` — Alters the border radius rendered.

    -   Utilities

        -   `Animation` — Applies a repeating animation to the child elements.

            -   `<Animation on:animationend={AnimationEvent} on:animationstart={AnimationEvent}>` — Passthrough of the Browser [`animationend`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event) / [`animationstart`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event) events.
            -   `<Animation is="div/span">` — Alters the rendered element.
            -   `<Animation animation="bounce/ping/pulse">` — Alters which animation is rendered.
            -   `<Animation delay={number | string}>` — Adjusts how long until the animation starts playing by a percentage multiplier of the base duration.
            -   `<Animation duration={number | string}>` — Adjusts the duration of the animation by a percentage multiplier.
            -   `<Animation iterations={number | string}>` — Alters how many times the animation loops before stopping.
            -   `<Animation variation="pause/play">` — Controls whether the animation is playing or not.

        -   `Transition`

            -   `<Transition is="span">` — Renders as an inline `<span>` element.

-   Added the following Stores / Store Features

    -   `htmlmode`

        `htmldark(): Readable<boolean>` / `htmllight(): Readable<boolean>` — Returns `true` if `<html data-mode="dark">` or `<html data-mode="light">` are valid respectively.

    -   `thememode`

        -   `lightmode(): Readable<boolean>` — Returns `true` if `(prefers-color-scheme: light)` is valid and `<html data-mode>` is not set, or, if `<html data-mode="light">` is valid.

-   Fixed the following Components / Component Features

    -   Widgets

        -   `*Picker` / `*Stepper`

            -   Fixed datetime Components not working on FireFox 96+.

-   Removed the following Components / Component Features

    -   Display

        -   `Badge`

            -   **(BREAKING)** `<Badge animation>` — Removed in favor of the new generalized `Animation` Component.

    -   Embedded

        -   `Figure`

            -   **(BREAKING)** `<Figure size>` — Removed in favor of new global `width` / `height` / `size` properties.
            -   **(BREAKING)** `<Figure size variation="icon">` - Removed in favor of the new global `width` / `height` / `size` properties with `icon-` prefix.

    -   Feedback

        -   `Dot`

            -   **(BREAKING)** `<Dot animation>` — Removed in favor of the new generalized `Animation` Component.

        -   `Spinner`

            -   **(BREAKING)** `<Spinner>` — Removed in favor of `<Progress shape="circle">`'s new indeterminate appearance.

        -   `Wave`

            -   **(BREAKING)** `<Wave>` — Removed in favor of the updated `<Ellipsis>`, which can replicate the affect.

                -   e.g. `<Ellipsis animation="bounce" iterations="5"><Dot></Ellipsis>`

    -   Layouts

        -   `Container`

            -   **(BREAKING)** `<Container viewport>` — Removed in favor of new `<* width="viewport-{mobile/tablet/desktop/widescreen}">` global property.

    -   Navigation

        -   `Menu`

            -   **(BREAKING)** `<svelte:fragment slot="sub-menu">` — With the new DOM structure, the `<Menu.Section>` Components can just be composed as sibling elements.

    -   Typography

        -   `Text`

            -   **(BREAKING)** `<Text is="kbd">` — Due to not acting strictly as a text modifier, it migrated to becoming its own `Kbd` Component.

                -   e.g. `<Text is="kbd">CTRL+C</Text>` -> `<Kbd>CTRL+C</Kbd>`

    -   Widgets

        -   `*Picker` / `*Stepper`

            -   **(BREAKING)** `<* calendar>` — Due to breaking bug in the Temporal API polyfill, this property has been removed and will be revisited at a later time.
            -   **(BREAKING)** `<* highlight timestamp value>` — Due to a breaking bug in the Temporal API polyfill and to align with Web Browsers, this property now _only_ accepts [ISO 8601](https://www.w3.org/TR/NOTE-datetime) timestamps which don't specify calendars. Working only with the ISO 8601 calendar.

-   Updated the following Components / Component Features

    -   `*`

        -   **(BREAKING)** All Components now use CSS classes to apply stylings instead of selecting semantic elements, e.g `<Card.Footer>` is now selected via `.card--footer` instead of `.card > footer`.

            -   **(IMPORTANT)** You should never be relying on element selectors or the built-in classes **regardless** for custom styling anyway, it's considered internal unstable API. Always use classes!
            -   e.g. `<Card.Footer class="my-custom-footer">`

    -   Feedback

        -   `Progress`

            -   `<Progress shape="circle" value={undefined}>` — Updated the indeterminate appearance to look unique from the progress bar's indeterminate's appearance and to also better serve as a generic spinner.
            -   **(BREAKING)** `<Progress size>` — Consolidated into `<Progress sizing>`.

    -   Interactables

        -   `Button`

            -   **(BREAKING)** `<Button href for value>` — Updated to require explicit `<Button is="a/label/input">` property to be more consistent with other Component API.

                -   e.g. `<Button href="...">` -> `<Button is="a" href="...">`

            -   **(BREAKING)** `<Button size>` — Consolidated into `<Button sizing>`.

        -   `Check`

            -   **(BREAKING)** `<Check size>` — Consolidated into `<Check sizing>`.

        -   `Radio`

            -   **(BREAKING)** `<Radio size>` — Consolidated into `<Radio sizing>`.

        -   `NumberInput`

            -   **(BREAKING)** `<NumberInput align>` — Consolidated into `<NumberInput alignment_x>`.
            -   **(BREAKING)** `<NumberInput characters>` — Consolidated into `<NumberInput span_x>`.
            -   **(BREAKING)** `<NumberInput size>` — Consolidated into `<NumberInput sizing>`.

        -   `Switch`

            -   **(BREAKING)** `<Switch size>` — Consolidated into `<Switch sizing>`.

        -   `TextInput`

            -   **(BREAKING)** `<TextInput align>` — Consolidated into `<TextInput alignment_x>`.
            -   **(BREAKING)** `<TextInput characters lines>` — Consolidated into `<TextInput span_x span_y>`.
            -   **(BREAKING)** `<TextInput max_length>` — Consolidated into `<TextInput max>`.
            -   **(BREAKING)** `<TextInput min_length>` — Consolidated into `<TextInput min>`.
            -   **(BREAKING)** `<TextInput size>` — Consolidated into `<TextInput sizing>`.

    -   Layouts

        -   `Mosaic`

            -   **(BREAKING)** `<Mosaic>` — Renamed `<Mosaic>` Component to `<Mosaic.Container>` to facilitate `<Mosaic.Item>`.

        -   `Stack`

            -   **(BREAKING)** `<Stack>` — Renamed `<Stack>` Component to `<Stack.Container>` to facilitate `<Stack.Item>`.

    -   Navigation

        -   `Menu`

            -   **(BREAKING)** Updated DOM structure to be made up of composable `<div>` elements internally, no longer using `<ul>` / `<li>` elements.
            -   **(BREAKING)** `<Menu.Divider>` — Was merged into `<Menu.Heading>` due to being duplicate code.

                -   `<Menu.Divider />` -> `<Menu.Heading />`
                -   `<Menu.Divider>...</Menu.Divider>` -> `<Menu.Heading variation="divider">...</Menu.Heading>`

            -   **(BREAKING)** `<Menu.SubMenu>` — Renamed `<Menu.SubMenu>` to `<Menu.Section>` to be more consistent with other Component API and new DOM structure for `Menu`.

    -   Overlays

        -   `Overlay`

            -   **(BREAKING)** `<Overlay.Button size>` — Consolidated into `<Overlay.Button sizing>`.

        -   `Popover`

            -   **(BREAKING)** `<Popover.Button size>` — Consolidated into `<Popover.Button sizing>`.

    -   Typography

        -   `Heading`

            -   **(BREAKING)** `<Heading align>` — Consolidated into `<Heading alignment_x>`.

        -   `Text`

            -   **(BREAKING)** `<Text align>` — Consolidated into `<Text alignment_x>`.
            -   **(BREAKING)** `<Text size>` — Consolidated into `<Text sizing>`.

    -   Widgets

        -   `DayStepper`

            -   **(BREAKING)** `<DayStepper step>` — Consolidated into `<DayStepper steps>`.

        -   `MonthStepper`

            -   **(BREAKING)** `<MonthStepper step>` — Consolidated into `<MonthStepper steps>`.

        -   `Pagination`

            -   **(BREAKING)** `<Pagination href>` — Updated to require explicit `<Pagination is="a">` property to be more consistent with other Component API.

                -   e.g. `<Pagination href="...">` -> `<Pagination is="a" href="...">`

        -   `TimePicker`

            -   **(BREAKING)** `<TimePicker disabled={string[]}>` — Was updated to accept `string[]` instead of `string`.
            -   **(BREAKING)** `<TimePicker highlight={string[]}>` — Was updated to accept `string[]` instead of `string`.

        -   `YearStepper`

            -   **(BREAKING)** `<YearStepper step>` — Consolidated into `<YearStepper steps>`.

-   Updated the following Stores / Store Features

    -   `htmlmode`

        -   **(BREAKING)** `htmlpalette` — Renamed to `htmlmode` to reflect `<html data-palette>` attribute was renamed to `<html data-mode>`.

## v0.5.7 - 2022/02/16

-   Deprecated the following Components / Component Features

    -   Display

        -   `Table`

            -   `<Table.Column colspan>` / `<Table.Heading colspan>` — Being consolidated into `span_x` property, e.g. `span_x="3"`.

                -   **NOTE**: `<Table.Column span_x>` / `<Table.Heading span_x>` was made available as an alias in this release, to help with progressively migrating codebases.

            -   `<Table.Column rowspan>` / `<Table.Heading rowspan>` — Being consolidated into `span_y` property, e.g. `span_y="3"`.

                -   **NOTE**: `<Table.Column span_y>` / `<Table.Heading span_y>` was made available as an alias in this release, to help with progressively migrating codebases.

    -   Feedback

        -   `Dot`

            -   **(BREAKING)** `<Dot animation>` — Being replaced with generalized `<Animation>` Component.

        -   `Spinner`

            -   **(BREAKING)** `<Spinner>` — Being replaced by `<Progress shape="circle" value={undefined}>` indeterminate animation.

        -   `Wave`

            -   **(BREAKING)** `<Wave>` — Being replaced by expanded `<Ellipsis>` functionality, e.g. `<Ellipsis animation="bounce" iterations="5">`.

    -   Interactables

        -   `Button`

            -   **(BREAKING)** `<Button href for value>` — Will require explicit `is` property being set to switch between HTML tags.

                -   **NOTE**: `<Button is="a/label/input">` was made available as an optional property in this release, to help with progressively migrating codebases.

        -   `NumberInput`

            -   **(BREAKING)** `<NumberInput characters>` — Being consolidated into `span_x` property, e.g. `span_x="3"`.

                -   **NOTE**: `<NumberInput span_x>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `TextInput`

            -   **(BREAKING)** `<TextInput characters>` — Being consolidated into `span_x` property, e.g. `span_x="3"`.

                -   **NOTE**: `<TextInput span_x>` was made available as an alias in this release, to help with progressively migrating codebases.

            -   **(BREAKING)** `<TextInput lines>` — Being consolidated into `span_y` property, e.g. `span_y="3"`.

                -   **NOTE**: `<TextInput span_y>` was made available as an alias in this release, to help with progressively migrating codebases.

            -   **(BREAKING)** `<TextInput max_length>` — Being consolidated into `max` property, e.g. `max="8"`.

                -   **NOTE**: `<TextInput max>` was made available as an alias in this release, to help with progressively migrating codebases.

            -   **(BREAKING)** `<TextInput min_length>` — Being consolidated into `min` property, e.g. `min="2"`.

                -   **NOTE**: `<TextInput min>` was made available as an alias in this release, to help with progressively migrating codebases.

    -   Typography

        -   `Text`

            -   **(BREAKING)** `<Text is="kbd">` — Will be elevated to a standalone `<Kbd>` Component.

    -   Widgets

        -   `DayPicker` / `DayStepper` / `MonthPicker` / `MonthStepper` / `YearPicker` / `YearStepper`

            -   **(BREAKING)** `<* calendar>` — Being removed due to not accepting non ISO 8601 calendar datestamps in the future and to better align with Browsers.

        -   `DayStepper` / `MonthStepper` / `YearStepper`

            -   **(BREAKING)** `<* step>` — Being consolidated into `steps` property, e.g. `steps="3"`.

                -   **NOTE**: `<* steps>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `TimePicker`

            -   **(BREAKING)** `<TimePicker highlight>` — Will be updated to accept string arrays (_`string[]`_) instead of singular strings (_`string`_).

## v0.5.6 - 2022/02/01

-   Fixed the following Stores / Store Features

    -   `darkmode`

        -   Fixed missing import to `readable` from `svelte/store` which would cause `darkmode` to throw an exception on SSR.

## v0.5.5 - 2022/01/26

-   Vendored new [`@js-temporal/polyfill`](https://github.com/js-temporal/temporal-polyfill) `v0.3.0` version.

## v0.5.4 - 2022/01/24

-   Upgraded [`@js-temporal/polyfill`](https://github.com/js-temporal/temporal-polyfill) `v0.2.0` -> `v0.3.0`.

    -   **NOTE**: Fixes Chrome 96+ not working on the datetime Widgets.
    -   **IMPORTANT**: Firefox 96+ is still broken, although with a different issue regarding non-ISO 8601 calendar handling.

-   Deprecated the following Components / Component Features

    -   Embedded

        -   `Figure`

            -   **(BREAKING)** `<Figure variation="icon">` — Being replaced with global `icon-` prefixed `size` property values, e.g. `size="icon-small"`.

    -   Feedback

        -   `Progress`

            -   **(BREAKING)** `<Progress size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Progress sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `Spinner`

            -   **(BREAKING)** `<Spinner size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Spinner sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

    -   Interactables

        -   `Button`

            -   **(BREAKING)** `<Button size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Button sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `Check`

            -   **(BREAKING)** `<Check size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Check sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `NumberInput`

            -   **(BREAKING)** `<NumberInput align>` — Being consolidated into `alignment_x` property, e.g. `alignment_x="justify"`.

                -   **NOTE**: `<NumberInput alignment_x>` was made available as an alias in this release, to help with progressively migrating codebases.

            -   **(BREAKING)** `<NumberInput size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<NumberInput sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `Radio`

            -   **(BREAKING)** `<Radio size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Radio sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `Switch`

            -   **(BREAKING)** `<Switch size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Switch sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `TextInput`

            -   **(BREAKING)** `<TextInput align>` — Being consolidated into `alignment_x` property, e.g. `alignment_x="justify"`.

                -   **NOTE**: `<TextInput alignment_x>` was made available as an alias in this release, to help with progressively migrating codebases.

            -   **(BREAKING)** `<TextInput size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<TextInput sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

    -   Layouts

        -   `Container`

            -   **(BREAKING)** `<Container viewport>` — Being replaced with global `viewport-` prefixed `max_width` property values, e.g. `max_width="viewport-mobile"`.

        -   `Mosaic`

            -   **(BREAKING)** `<Mosaic>` — Being converted into a multi-part Component, `<Mosaic.Container>`.

        -   `Stack`

            -   **(BREAKING)** `<Stack>` — Being converted into a multi-part Component, `<Stack.Container>`.

    -   Navigation

        -   `Menu`

            -   **(BREAKING)** `<Menu.Divider>` / `<Menu.Heading>` `slot="sub-menu"` — DOM tree structure for `Menu` will be restructured, removing the need for the slot.
            -   **(BREAKING)** `<Menu.SubMenu>` — Being renamed to Framework-consistent `<Menu.Section>`.

                -   **NOTE**: `<Menu.Section>` was made available as an alias in this release, to help with progressively migrating codebases.

    -   Overlays

        -   `Overlay`

            -   **(BREAKING)** `<Overlay.Button size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Overlay.Button sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `Popover`

            -   **(BREAKING)** `<Popover.Button size>` — Being consolidated into `sizing` property, e.g. `sizing="small"`.

                -   **NOTE**: `<Popover.Button sizing>` was made available as an alias in this release, to help with progressively migrating codebases.

    -   Typography

        -   `Heading`

            -   **(BREAKING)** `<Heading align>` — Being consolidated into `alignment_x` property, e.g. `alignment_x="justify"`.

                -   **NOTE**: `<Heading alignment_x>` was made available as an alias in this release, to help with progressively migrating codebases.

        -   `Text`

            -   **(BREAKING)** `<Text align>` — Being consolidated into `alignment_x` property, e.g. `alignment_x="justify"`.

                -   **NOTE**: `<Text alignment_x>` was made available as an alias in this release, to help with progressively migrating codebases.

-   Deprecated the following Stores / Store Features

    -   `htmlpalette`

        -   **(BREAKING)** Being renamed to `htmlmode` due to theme mode attribute being changed `<html data-palette="dark/light">` -> `<html data-mode="dark/light">`.

            -   **NOTE**: `htmlmode` was made available as an alias in this release, to help with progressively migrating codebases.

-   Updated the following Components / Component Features

    -   `*`

        -   `<* sveltekit:noscroll={boolean} sveltekit:prefetch={boolean}>` — Added missing typings.

## 0.5.3 - 2022/01/08

-   Added the following Actions / Action Features

    -   `action_activate(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for activating the current context, e.g. a focused label.

        -   `Enter`, ` ` _(space)_

    -   `action_exit(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for exiting the current context, e.g. a prompt.

        -   `Esc`

    -   `action_submit(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for submitting the current context, e.g. a focused input.

        -   `Enter`

    -   `navigate_down(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for navigating to the next item down.

        -   `ArrowDown`
        -   Repeatable, `250ms` throttle

    -   `navigate_left(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for navigating to the next item left.

        -   `ArrowLeft`
        -   Repeatable, `250ms` throttle

    -   `navigate_right(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for navigating to the next item right.

        -   `ArrowRight`
        -   Repeatable, `250ms` throttle

    -   `navigate_up(element: HTMLElement, options: {on_bind: IKeybindCallback}): IKeybindHandle` — Used for navigating to the next item up.

        -   `ArrowUp`
        -   Repeatable, `250ms` throttle

-   Added the following Components / Component Features

    -   Widgets

        -   `DataTable` — Automatically handles rendering tabular data of rows and columns into HTML.

            -   `<DataTable columns={{key: keyof T, text: string}[]}>` — Configures metadata on how `DataTable` should renders the tabular data.
            -   `<DataTable rows={T[]}>` — Sets the tabular data that `DataTable` is to render.

            -   `<DataTable page={number | string}>` — Sets the current page of the pagination.
            -   `<DataTable paginate={boolean}>` — Enables `DataTable` to split the tabular data into paged views.
            -   `<DataTable paging={number | string}>` — Sets how many rows should appear per page.

            -   `<DataTable sorting={keyof T}>` — Sets which row member that `DataTable` is currently sorting by.

                -   `<DataTable columns={{sorting: boolean}[]}>` — Enables sorting for the particular column.
                -   `<DataTable columns={{sorting_algorithm: (a: T[keyof T], b: T[keyof T]) => number}[]}>` — Optional custom sorter. By default, all row members are lowercased and alphabetized.

            -   `<DataTable sorting_mode="ascending/descending">` — Sets which direction `DataTable` is sorting the row member by.

            -   `<DataTable searching={string}>` — Sets the current search query that `DataTable` is using to filter the tabular data.
            -   `<DataTable searching_algorithm={(row: T) => boolean}>` — Optional custom searching filter. By default, all row members are lowercased and fuzzy searched.

            -   `<DataTable palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<DataTable sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.
            -   `<DataTable variation={"borders" | "stripes" | ["borders", "stripes"]}>` — Alters the appearance of the Component.

            -   `<svelte:fragment let:key={keyof T} let:row={T}>` — Customizes how each column in a row is rendered in a table cell.
            -   `<svelte:fragment slot="next/previous">` — Customizes the next / previous paging button content.
            -   `<svelte:fragment slot="unsorted/ascending/descending">` — Customizes the not-sorted, ascending sort, descending sort button content.

-   Fixed the following Components / Component Features

    -   Widget

        -   `Pagination`

            -   Fixed paging button generation not properly showing full step range on tailend of page count.

## 0.5.2 - 2022/01/05

-   Fixed the following Components / Component Features

    -   Disclosure

        -   `Accordion` / `Tab`

            -   `<*.Container bind:logic_state>` — Fixed two-way binding not working post-mount.

        -   `Accordion`

            -   `<svelte:fragment slot="close/open">` — Updated to default to `<span>&blacktriangledown;/&blacktriangleright;</span>` respectively.

## 0.5.1 - 2022/01/05

-   Added the following Components / Component Features

    -   Interactables

        -   `Button`

            -   `<Button variation={"subtle" | ["subtle", "clear | "outline"]}>` — Removes "attention grabbing" animations like scaling on click, leaving only simple color transitions.

    -   Utilities

        -   `MediaQueryRender` — Renders inner content to DOM, only when the specified [Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) is active.

            -   `<MediaQueryRender fallthrough={boolean}>` — When `true`, always renders content in SSR environments, e.g. SvelteKit
            -   `<MediaQueryRender queries={string | string[]}>` — Sets the Media Query / Queries to validate against.
            -   `<MediaQueryRender behavior="and/or">` — When you have use Media Queries, you can set `MediaQueryRender` to only render if both are `true`, or at least one is `true`.

        -   `ViewportRender` — Renders inner content to DOM, only when the specified Viewports are active.

            -   `<ViewportRender fallthrough={boolean}>` — When `true`, always renders content in SSR environments, e.g. SvelteKit
            -   `<ViewportRender mobile={boolean} tablet={boolean} desktop={boolean} widescreen={boolean}>` — When `true` and the specified Viewport is active, the inner content will be rendered.

    -   Widgets

        -   `Pagination` — Built-in Widget for allowing the user to selected the current page in a `1...N` range.

            -   `<Pagination on:select={CustomEvent<{page: number}>}>` — Dispatches whenever a button is clicked.

            -   `<Pagination href={string}>` — Renders the navigational buttons as anchors, using a tokening solution to add in paging.

                -   Add `${page}` anywhere in your link to add paging, e.g. `href={"/path/to/view?page=${page}"}`.
                -   **NOTE**: The tokening solution is non-standard, you have to encapsulate the `href` property as a string variable `href={""}`.

            -   `<Pagination pages={number}>` — Controls how many pages there is for the current content, this is used to calculate which buttons to render.
            -   `<Pagination steps={number}>` — Controls how many steps +/- should be taken rendered from the current page.
            -   `<Pagination value={number}>` — Controls which in the `1...pages` range is the current.

            -   `<Pagination palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<Pagination sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

-   Updated the following Components / Component Features

    -   Interactables

        -   `Button`

            -   `<Button variation="outline">` — Updated background fill on click to be not as bold, matching `variation="clear"`.

## 0.5.0 - 2022/01/02

-   Migrated the following Components: `Aside`, `Omni`.

-   Added the following Components / Component Features

    -   Layouts

        -   `Position`

            -   `<Position variation="action">` — Affixes the child content in a corner of the viewport.

                -   `<Position alignment_x="left/right">` — Alters which horizontal corner the child content is affixed to. Defaults to `right`.
                -   `<Position alignment_y="top/bottom">` — Alters which vertical corner the child content is affixed to. Defaults to `bottom`.
                -   `<Position spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">` — Controls the spacing between the corner and the child content.

            -   `<Position variation={["container/viewport", "action/indicator/raised"]}>` — Alters the `Position` variation to be relative to the parent container or viewport.

    -   Overlays

        -   `Backdrop` — Renders a dim theme-aware backdrop over the parent container.

    -   Utilities

        -   `Transition`

            -   `<Transition behavior="explicit">` — Changes to using [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) implementation instead of [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) implementation. Useful for skipping the animation played on first-paint.

-   Deprecated the following Components / Component Features

    -   `Position`

        -   `<Position variation="floated">` — Deprecated in favor of `<Position variation="indicator">` for clearer intent of use-case.

-   Removed the following Components / Component Features

    -   Display / Feedback

        -   `Badge` / `Dot`

            -   **(BREAKING)** `<Badge/Dot position>` — Removed previously deprecated feature in favor of `Position` Component.

    -   Interactables

        -   `Check` / `Radio` / `Switch` / `TextInput`

            -   **(BREAKING)** `<Check/Radio/Switch/TextInput on:blur on:focus>` — Removed previously deprecated feature in favor of `<* on:focusin on:focusout>` events.

    -   Layouts

        -   `Position`

            -   **(BREAKING)** `<Position variation="indicator" placement="top/bottom">` — Removed in favor of `<Position variation="indicator" alignment_y="top/bottom">` for consistency with rest of the Framework.

        -   `Spacer`

            -   **(BREAKING)** `<Spacer orientation>` — Removed previously deprecated feature in favor of `<Spacer spacing_x spacing_y>` properties.
            -   **(BREAKING)** `<Spacer variation>` — Removed previously deprecated feature in favor of `<Spacer is="div/span">` property.

    -   Navigation

        -   `Aside` / `Omni`

            -   **(BREAKING)** `<* logic_id>` — Removed built-in viewport-based collapsing, compose with Components like `Overlay` / `Popover` to mimic old featureset.

    -   Overlays

        -   `Offscreen`

            -   **(BREAKING)** Removed in favor of customizing `Overlay` with the `<Overlay.Section animation="slide">` / `<Overlay alignment_x alignment_y>` properties.

        -   `Overlay`

            -   **(BREAKING)** `<Overlay.Container captive>` — Removed to promote composability and customization via `<Overlay.Backdrop>` instead.

    -   Utilities

        -   `ContextBackdrop`

            -   **(BREAKING)** Removed in favor of generalized `Backdrop` and `Overlay`-specific `<Overlay.Backdrop>` Components.

        -   `ContextButton`

            -   **(BREAKING)** Removed in favor of Overlays specific `<Overlay/Popover.Button>` Components.

        -   `Transition`

            -   **(BREAKING)** Removed CSS Theming variables due to limited use-case and current set not supporting new `<Transition variation="explicit">`.

-   Updated the following Components / Component Features

    -   Feedback

        -   `Ellipsis`

            -   **(BREAKING)** `<Ellipsis character />` — Changed from `<Ellipsis character="XXX">` -> `<Ellipsis>XXX</Ellipsis>`, to support icons and other non-text characters.

    -   Overlays

        -   `Overlay` / `Popover`

            -   **(BREAKING)** Revamped into a multi-pattern Component.

        -   `Overlay`

            -   `<Overlay.Container>`

                -   `<Overlay.Container logic_id={string}>` — Used to synchronize the target CSS state between the backdrop, buttons, and Svelte Contexts.
                -   `<Overlay.Container logic_state={boolean}>` — Used to enable the `Overlay`, playing an animation to enter/exit depending on state.

                -   `<Overlay.Container focus_first={HTMLElement | string | null}>` — Sets initial focus target element when first opened. Defaults to first focusable element.
                -   `<Overlay.Container focus_last={HTMLElement | string | null}>` — Sets the element treated as first in the focus tabbing order, that focus is trapped with. Defaults to first found focusable element.
                -   `<Overlay.Container focus_target={HTMLElement | string | null}>` — Sets the element that is granted focus when `logic_state` is `true`. Focus is restored to previous element when `logic_state` is `false.`

                -   `<Overlay.Container dismissible={boolean}>` — Enables dismissal of the `Overlay` via the `ESC` key, or by clicking the `<Overlay.Backdrop>` if applicable.
                -   `<Overlay.Container loading="lazy">` — Disables rendering `<Overlay.Section>` inner content to DOM whenever `logic_state` is `false`.
                -   `<Overlay.Container once={boolean}>` — Enables dismissal of the `Overlay` whenever `<Overlay.Section>` inner content is clicked.

            -   `<Overlay.Backdrop>` — Wrapper for `Backdrop` that when used within a `<Overlay.Container logic_id>`, it inherits the value via Svelte Context.

            -   `<Overlay.Button>` — Wrapper for `Button` that when used within a `<Overlay.Container logic_id>`, it inherits the value via Svelte Context.

            -   `<Overlay.Section>` — Stretches inner content over the parent container.

                -   `<Overlay.Section animation="clip/fade/scale/slide">` — Changes which animation set is used for when `logic_state` is updated. Defaults to `scale`.
                -   `<Overlay.Section direction="top/bottom/left/right">` — Changes which direction the animation set is entering from, if applicable.

                -   `<Overlay.Section orientation="horizontal">` — Alters the inner child elements to layout horizontally.
                -   `<Overlay.Section alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Controls the alignment of the inner content.
                -   `<Overlay.Section spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">` — Controls the spacing between each inner child element.

        -   `Popover`

            -   `<Popover.Container>`

                -   `<Popover.Container logic_id={string}>` — Used to synchronize the target CSS state between the backdrop, buttons, and Svelte Contexts.
                -   `<Popover.Container logic_state={boolean}>` — Used to enable the `Popover`, playing an animation to enter/exit depending on state.

                -   `<Popover.Container focus_target={HTMLElement | string | null}>` — Sets the element that is granted focus when `logic_state` is `true`. Focus is restored to previous element when `logic_state` is `false.`

                -   `<Popover.Container dismissible={boolean}>` — Enables dismissal of the `Popover` via the `ESC` key, `<Popover.Section>` inner content loses focus, or clicked outside of `<Popover.Section>`.
                -   `<Popover.Container loading="lazy">` — Disables rendering `<Popover.Section>` inner content to DOM whenever `logic_state` is `false`.
                -   `<Popover.Container once={boolean}>` — Enables dismissal of the `Popover` whenever `<Popover.Section>` inner content is clicked.

            -   `<Popover.Button>` — Wrapper for `Button` that when used within a `<Popover.Container logic_id>`, it inherits the value via Svelte Context.

            -   `<Popover.Section>` — Hovers inner content over the parent container.

                -   `<Popover.Section animation="clip/fade/scale/slide">` — Changes which animation set is used for when `logic_state` is updated. Defaults to `clip`.

                -   `<Popover.Section placement="top/bottom/left/right">` — Which side of the `<Popover.Button>` the inner content is hovered on.

                -   `<Popover.Section alignment_x="left/right/center" alignment_y="top/bottom/center">` — Controls the alignment of the inner content.
                -   `<Popover.Section spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">` — Between `<Popover.Section>` and `<Popover.Button>`.

## v0.4.14 - 2021/12/19

-   Added the following Components / Component Features

    -   Interactables

        -   `NumberInput` — Subset of `TextInput` that only accepts numbers into its text field.

            -   `<NumberInput value={number}>` — Accepts / Returns `number` types instead of strings.

        -   `TextInput`

            -   `<TextInput variation="flush">` — Added an underline UX affordance whenever the user hovers / focuses the `TextInput`.
            -   `<TextInput mask={boolean}>` — When enabled, user input into the text field will drop alterations that are invalid.

                -   `<TextInput on:mask={(event: CustomEvent<{value: string}>) => void}>` — Fires whenever `<TextInput mask={boolean}>` is `true`. Whenever `event.preventDefault` is called, the new `value` alteration will be dropped.
                -   `<TextInput pattern={string | RegExp}>` — Is used whenever `<TextInput mask={boolean}>` is `true`, this property is used to mask user input. Dropping any new values that don't match the expression.

## v0.4.13 - 2021/12/13

-   Updated button-like `<label>`-based Components to emulate button-like behavior, e.g. Enter key activates element.
-   Updated `svelte2tsx` -> `0.4.11`.

    -   Fixes Component properties not retaining comments / JSDoc flags.

-   Added the following Actions / Action Features

    -   `auto_focus(element: HTMLElement, options: IAutoFocusOptions): IAutoFocusHandle` — Focuses the first available focusable element within the attached `element` when enabled, restoring focus whenever disabled.

        -   `auto_focus(..., {enabled: boolean})` — Enables the auto focusing.
        -   `auto_focus(..., {target: HTMLElement | string | null})` — Sets a custom element to focus to instead of the first focusable.

    -   `click_inside` — Listens to the `click` on the attached element, with optional CSS Selector for filtering.

    -   `click_inside` / `click_outside`

        -   `*(..., {ignore: string})` — Ignores a given [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) from triggering the `on_click_inside` / `on_click_outside` callbacks.

    -   `keybind(element: HTMLElement, options: IKeybindOptions): IKeybindHandle`

        -   `keybind(..., {throttle_cancel: boolean})` — Enables cancellation (`preventDefault` / `stopPropagation`) on throttled processing of keybinds if `IKeybindOptions.repeat_throttle` is greater than zero (`> 0`).

    -   `overflow_clipping(element: HTMLElement, options: IOverflowClippingOptions): IOverflowClippingHandle` — Detects when the inner content is clipping the attached element's bounding box.

        -   `overflow_clipping(..., {enabled: boolean})` — Enables content clipping detection.
        -   `overflow_clipping(..., {on_clip: (entry: {horizontal: boolean, vertical: boolean}) => void})` — Dispatches whenever the content clipping changes.

    -   `trap_focus(element: HTMLElement, options: ITrapFocusOptions): ITrapFocusHandle` — Traps focusing to content to focusable nested elements within the attached `element`.

        -   `trap_focus(..., {enabled: boolean})` — Enables the focus trapping.
        -   `trap_focus(..., {first: HTMLElement | string | null})` — Sets a custom element to wrap focus to when the attached `element`'s focus is "escaped".
        -   `trap_focus(..., {last: HTMLElement | string | null})` — Sets a custom element used to detect whenever the attached `element`'s focus is on the last available nested element.

-   Added the following Components / Component Features

    -   Layouts

        -   `Scrollable`

            -   `<Scrollable on:scroll>` — Dispatches the [scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event).

    -   Overlays

        -   `Offscreen` / `Overlay`

            -   `<* loading="lazy">` — Disables rendering of inner content while the Component's state is inactive.

-   Fixed the following Actions / Action Features

    -   `keybind(element: HTMLElement, options: IKeybindOptions): IKeybindHandle`

        -   `keybind(..., {on_bind: IKeybindCallback})` — Fixed inline defining of `on_bind` thrashing internal key state of the bind manager.
        -   Fixed calling `IKeybindEvent.preventDefault` / `IKeybindEvent.stopPropagation` not working.

-   Updated the following Components / Component Features

    -   Overlays

        -   `Offscreen` / `Overlay`

            -   Changed from viewport units to relative percentage units to work with inner non-viewport situations.
            -   `<* focus_target={HTMLElement | string | null}>` — Sets initial focus target element when first opened. Defaults to first focusable element.
            -   `<* focus_first={HTMLElement | string | null}>` — Sets the element treated as first in the focus tabbing order, which traps focus (`Offscreen` / `Overlay`) or dismisses (`Popover`). Defaults to first focusable element.
            -   `<* focus_last={HTMLElement | string | null}>` — Sets the element treated as last in the focus tabbing order, which traps focus `Offscreen` / `Overlay`. Defaults to last focusable element.

        -   `Offscreen` / `Overlay` / `Popover`

            -   `<* dismissible={boolean}>` — Now enables dismissing of Overlays via escape key.

    -   Utilities

        -   `ContextBackdrop`

            -   Changed from viewport units to relative percentage units to work with inner non-viewport situations.

## v0.4.12 - 2021/11/28

-   Vendored [`@js-temporal/polyfill`](https://github.com/js-temporal/temporal-polyfill) temporarily to fix edge case with PNPM + SvelteKit development server.

## v0.4.11 - 2021/11/22

-   Deprecated all existing instances of `<* on:blur on:focus>` for `<* on:focusout on:focusin>` respectively.
-   Updated all Components to support globally forwarding the following events: `click` , `contextmenu` , `dblclick` , `focusin` , `focusout` , `keydown` , `keyup` , `pointercancel` , `pointerdown` , `pointerenter` , `pointerleave` , `pointermove` , `pointerout` , `pointerup`.
-   Updated all Components to support Svelte Action forwarding via `<* actions={[[action, options]]}>`, e.g.

<!-- prettier-ignore -->
```svelte
<script>
    import {click_outside} from "@kahi-ui/framework";
</script>

<Box actions={[
    [click_outside, {on_click_outside: () => console.log("clicked!")}]
]}>
    ...
</Box>
```

-   Added the following Components / Component Features

    -   Overlays

        -   `Offscreen` / `Overlay` / `Popover`

            -   `<* once={boolean}>` — Dismisses the Component whenever an element inside of the it is clicked.

    -   Widgets

        -   `TimePicker`

            -   Respects system default for `<TimePicker hour_12={boolean}>` property.

-   Fixed the following Components / Component Features

    -   Widgets

        -   `TimePicker`

            -   Displayed range of clock times will now be flat `hh:mm:ss` values, stripping microsecond, minisecond, and nanosecond units.

-   Updated the following Components / Component Features

    -   Display

        -   `DateStamp` / `DateTimeStamp` / `TimeStamp`

            -   Updated typings to make `calendar` and `locale` properties optional as originally intended.

    -   Widgets

        -   `DayPicker` / `DayStepper` / `MonthPicker` / `MonthStepper` / `TimePicker` / `YearPicker` / `YearStepper`

            -   Updated typings to make `calendar`, `day`, `disabled`, `highlight`, `locale`, `month`, `step`, `timestamp`, `value`, and `weekday` properties optional.

## v0.4.10 - 2021/11/14

-   Added CSS Theming Variables to the following Components: `Blockquote`, `Code`, `Heading`, `Text`.
-   Added suggestions to existing deprecation notices.
-   Added the following Components / Component Features
-   Fixed typings for `<* hidden={boolean}>` global modifier.
-   Migrated the following Components: `Grid`, `Mosaic`, `Spacer`, `Stack`.
-   Updated `<* spacing spacing_x spacing_y>` global modifiers to use `!important` when applied.

-   Added the following Components / Component Features

    -   Display

        -   `DateStamp` — Formats a [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) date timestamp into a readable human string rendered via [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time).

            -   `<DateStamp calendar={string}>` — Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<DateStamp locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<DateStamp day="2-digit/numeric">` — Alters how a displayed day is formatted.
            -   `<DateStamp month="2-digit/long/narrow/numeric/short">` — Alters how a displayed month is formatted.
            -   `<DateStamp weekday="long/narrow/short">` — Alters how a displayed weekday is formatted.
            -   `<DateStamp year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<DateStamp timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp being formatted for display.

        -   `DateTimeStamp` — Formats a [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) datetime timestamp into a readable human string rendered via [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time), supporting timezones.

            -   `<DateTimeStamp calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<DateTimeStamp locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<DateTimeStamp day="2-digit/numeric">` — Alters how a displayed day is formatted.
            -   `<DateTimeStamp month="2-digit/long/narrow/numeric/short">` — Alters how a displayed month is formatted.
            -   `<DateTimeStamp weekday="long/narrow/short">` — Alters how a displayed weekday is formatted.
            -   `<DateTimeStamp year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<DateTimeStamp hour="2-digit/numeric">` — Alters how a displayed hour is formatted.
            -   `<DateTimeStamp hour_12={boolean}>` — Alters to showing hours in 12-hour format.
            -   `<DateTimeStamp minute="2-digit/numeric">` — Alters how a displayed minute is formatted.
            -   `<DateTimeStamp second="2-digit/numeric">` — Alters how a displayed second is formatted.
            -   `<DateTimeStamp timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp being formatted for display.

        -   `TimeStamp` — Formats a [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) time timestamp into a readable human string rendered via [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time).

            -   `<TimeStamp locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<TimeStamp hour="2-digit/numeric">` — Alters how a displayed hour is formatted.
            -   `<TimeStamp hour_12={boolean}>` — Alters to showing hours in 12-hour format.
            -   `<TimeStamp minute="2-digit/numeric">` — Alters how a displayed minute is formatted.
            -   `<TimeStamp second="2-digit/numeric">` — Alters how a displayed second is formatted.
            -   `<TimeStamp timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp being formatted for display.

    -   Layouts

        -   `Spacer`

            -   `<Spacer is="div/span">` — Alters HTML element used to render the `Spacer`, `div` (block / size) / `span` (inline / margin).

    -   Widgets

        -   `Widget` — Provides a holistic set of UI primitives for built-in Widgets.

            -   `<Widget.Container>` — Renders a spaced grid that provides styling to other `<Widget.*>` Components.
            -   `<Widget.Button>` — Renders a button similar to `<Menu.Button>`.
            -   `<Widget.Header>` — Renders text with title formatting.
            -   `<Widget.Section>` — Renders children in a spaced grid.

        -   `DayPicker` — Built-in Widget for allowing the user to select a calendar date from a given month.

            -   `<DayPicker on:change={CustomEvent<void>}>` — Dispatches whenever `<DayPicker value>` changes.
            -   `<DayPicker multiple={boolean}>` — Enables selection of multiple days.
            -   `<DayPicker once={boolean}>` — Disables toggling off of already selected days.
            -   `<DayPicker readonly={boolean}>` — Disables toggling on of unselected days.
            -   `<DayPicker calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<DayPicker locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<DayPicker day="2-digit/numeric">` — Alters how a displayed day is formatted.
            -   `<DayPicker weekday="long/narrow/short">` — Alters how a displayed weekday is formatted.
            -   `<DayPicker disabled={boolean}>` — Disables all days from being selected.
            -   `<DayPicker disabled={string[]}>` — Disables the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected.
            -   `<DayPicker max={string}>` — Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<DayPicker min={string}>` — Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<DayPicker highlight={string[]}>` — Highlights the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<DayPicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the calendar being listed.
            -   `<DayPicker value={string[]}>` — Sets the selected day [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<DayPicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<DayPicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `DayStepper` — Built-in Widget for allowing the user to step through days.

            -   `<DayStepper on:change={CustomEvent<void>}>` — Dispatches whenever `<DayStepper value>` changes.
            -   `<DayStepper disabled={boolean}>` — Disables days from being stepped through.
            -   `<DayStepper readonly={boolean}>` — Disables days from being stepped through without visual changes.
            -   `<DayStepper calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<DayStepper locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<DayStepper day="2-digit/numeric">` — Alters how a displayed day is formatted.
            -   `<DayStepper month="2-digit/long/narrow/numeric/short>` — Alters how a displayed month is formatted.
            -   `<DayStepper weekday="long/narrow/short">` — Alters how a displayed weekday is formatted.
            -   `<DayStepper max={string}>` — Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<DayStepper min={string}>` — Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<DayStepper step={number}>` — Sets how many days are stepped through at each button click.
            -   `<DayStepper value={string}>` — Sets the selected day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<DayStepper palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<DayStepper sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `MonthPicker` — Built-in Widget for allowing the user to pick a quaterly month from a given year.

            -   `<MonthPicker on:change={CustomEvent<void>}>` — Dispatches whenever `<MonthPicker value>` changes.
            -   `<MonthPicker multiple={boolean}>` — Enables selection of multiple months.
            -   `<MonthPicker once={boolean}>` — Disables toggling off of already selected months.
            -   `<MonthPicker readonly={boolean}>` — Disables toggling on of unselected months.
            -   `<MonthPicker calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<MonthPicker locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<MonthPicker month="2-digit/long/narrow/numeric/short">` — Alters how a displayed month is formatted.
            -   `<MonthPicker disabled={boolean}>` — Disables all months from being selected.
            -   `<MonthPicker disabled={string[]}>` — Disables the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected.
            -   `<MonthPicker max={string}>` — Sets the maximum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<MonthPicker min={string}>` — Sets the minimum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<MonthPicker highlight={string}>` — Highlights the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<MonthPicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the calendar being listed.
            -   `<MonthPicker value={string[]}>` — Sets the selected month [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<MonthPicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<MonthPicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `MonthStepper` — Built-in Widget for allowing the user to step through months.

            -   `<MonthStepper on:change={CustomEvent<void>}>` — Dispatches whenever `<MonthStepper value>` changes.
            -   `<MonthStepper disabled={boolean}>` — Disables months from being stepped through.
            -   `<MonthStepper readonly={boolean}>` — Disables months from being stepped through without visual changes.
            -   `<MonthStepper calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<MonthStepper locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<MonthStepper month="2-digit/long/narrow/numeric/short">` — Alters how a displayed month is formatted.
            -   `<MonthStepper year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<MonthStepper max={string}>` — Sets the maximum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<MonthStepper min={string}>` — Sets the minimum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<MonthStepper step={number}>` — Sets how many months are stepped through at each button click.
            -   `<MonthStepper value={string}>` — Sets the selected month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<MonthStepper palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<MonthStepper sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `TimePicker` — Built-in Widget for allowing the user to pick a time consisting of hour, minutes, and seconds.

            -   `<TimePicker on:change={CustomEvent<void>}>` — Dispatches whenever `<TimePicker value>` changes.
            -   `<TimePicker on:now={CustomEvent<void>}>` — Dispatches whenever the "NOW" button is clicked when enabled.
            -   `<TimePicker disabled={boolean}>` — Disables any component of time from being selected.
            -   `<TimePicker now={boolean}>` — Enables displaying of the "NOW" button, allowing users to set the Widget to current clock time.
            -   `<TimePicker scroll={boolean}>` — Enables auto scrolling to current time on mounting.
            -   `<TimePicker readonly={boolean}>` — Disables any component of time from being selected without UI alteration.
            -   `<TimePicker locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<TimePicker hour="2-digit/numeric">` — Alters how a displayed hour is formatted.
            -   `<TimePicker hour_12={boolean}>` — Alters to showing hours in 12-hour format, and enables displaying of the AM / PM buttons.
            -   `<TimePicker minute="2-digit/numeric">` — Alters how a displayed minute is formatted.
            -   `<TimePicker second="2-digit/numeric">` — Alters how a displayed second is formatted.
            -   `<TimePicker max={string}>` — Sets the maximum timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<TimePicker min={string}>` — Sets the minimum timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<TimePicker highlight={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the current time.
            -   `<TimePicker value={string}>` — Sets the selected timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<TimePicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<TimePicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `YearPicker` — Built-in Widget for allowing the user to pick a year from a given decade.

            -   `<YearPicker on:change={CustomEvent<void>}>` — Dispatches whenever `<YearPicker value>` changes.
            -   `<YearPicker multiple={boolean}>` — Enables selection of multiple years.
            -   `<YearPicker once={boolean}>` — Disables toggling off of already selected years.
            -   `<YearPicker readonly={boolean}>` — Disables toggling on of unselected years.
            -   `<YearPicker calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<YearPicker locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<YearPicker year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<YearPicker disabled={boolean}>` — Disables all years from being selected.
            -   `<YearPicker disabled={string[]}>` — Disables the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected.
            -   `<YearPicker max={string}>` — Sets the maximum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<YearPicker min={string}>` — Sets the minimum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<YearPicker highlight={string}>` — Highlights the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<YearPicker timestamp={string}>` — Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the calendar being listed.
            -   `<YearPicker value={string[]}>` — Sets the selected year [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps.
            -   `<YearPicker palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<YearPicker sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

        -   `YearStepper` — Built-in Widget for allowing the user to step through years.

            -   `<YearStepper on:change={CustomEvent<void>}>` — Dispatches whenever `<YearStepper value>` changes.
            -   `<YearStepper disabled={boolean}>` — Disables years from being stepped through.
            -   `<YearStepper readonly={boolean}>` — Disables years from being stepped through without visual changes.
            -   `<YearStepper calendar={string}>` — Allows for changing the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html).
            -   `<YearStepper locale={string}>` — Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags.
            -   `<YearStepper year="2-digit/numeric">` — Alters how a displayed year is formatted.
            -   `<YearStepper max={string}>` — Sets the maximum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected.
            -   `<YearStepper min={string}>` — Sets the minimum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected.
            -   `<YearStepper step={number}>` — Sets how many years are stepped through at each button click.
            -   `<YearStepper value={string}>` — Sets the selected year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime).
            -   `<YearStepper palette="accent/dark/light/alert/affirmative/negative">` — Alters the rendered color palette.
            -   `<YearStepper sizing="tiny/small/medium/large/huge">` — Alters the sizing of the Widget and children Components.

-   Deprecated the following Components / Component Features

    -   Layouts

        -   `Spacer`

            -   `<Spacer variation>` — Deprecated in favor of Framework consistent `<Spacer is="div/span">`.

-   Removed the following Components / Component Features

    -   Layouts

        -   `Spacer`

            -   **(BREAKING)** `<Spacer orientation>` — Removed in favor using `<Spacer spacing spacing_x spacing_y>`, reducing internal styling redundancy.

-   Updated the following Components / Component Features

    -   Typography

        -   `Blockquote` / `Code` / `Heading` / `Text`

            -   Added corresponding class names `blockquote` / `code` / `heading` / `text` respectively.

        -   `Text`

            -   Scoped attributes to `text` class to reduce CSS specificity conflict.

## v0.4.9 - 2021/10/27

-   Hotfix for missing CSS distributables.

## v0.4.8 - 2021/10/27

-   Reduced package size via fine-grained `files` field in `package.json`.

## v0.4.7 - 2021/10/27

-   Revamped internal library typings.

## v0.4.6 - 2021/10/22

-   Revamped internal context handling for: `Breadcrumb`.

-   Added the following Components / Component Features

    -   Disclosure

        -   `Carousel` — Renders children as a carousel of slide elements, with snap scrolling.

            -   `<Carousel.Container>` — Wrapper Component providing the scrolling context.

                -   `<Carousel.Container orientation="vertical">` — Used to set the slide items to scroll vertically, instead of horizontally.
                -   `<Carousel.Container spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">` — Used to configure gap spacing between each slide item.

            -   `<Carousel.Section>` — Used for wrapping `Carousel` slides.

    -   Interactables

        -   `FileDropInput` — Renders a stylized box that accepts file drops and clicks to open file open prompt.

            -   `<FileDropInput accept={string}>` — Used to set an accepted allow list of file types in file open prompt. Binding to [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).
            -   `<FileDropInput multiple={boolean}>` — Used to enable the underlying `<input type="file" />` to accept multiple files at once. Binding to [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple).
            -   `<FileDropInput palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

## v0.4.5 - 2021/10/20

-   Added CSS Theming Variables to the following Components: `Tab`.

-   Added the following Components / Component Features

    -   Disclosure

        -   `Accordion` — Presents child content in a stack, where each item can be selectively clicked to be revealed.

            -   `<Accordion.Container>` — Wrapper Component which provides stylings and Svelte Contexts for radio / checkbox button functionality.

                -   `<Accordion.Container behavior="inclusive/exclusive">` — Used to switch the `Accordion` between checkbox (`inclusive`) and radio (`exclusive`) button modes.
                -   `<Accordion.Container logic_name="XXX">` — Used to synchronize the form name between each radio / checkbox button.
                -   `<Accordion.Container logic_state="XXX">` — Used to set which form ID(s) is the currently active accordion item(s).

            -   `<Accordion.Group>` — Used for grouping together `<Accordion.Label>` / `<Accordion.Section>` Components.

                -   `<Tab.Group logic_id="XXX">` — Used to synchronize the form IDs between the radio buttons, tab content, and Svelte Contexts.

            -   `<Accordion.Label>` — Used for creating radio / checkbox buttons for selecting the active accordion item(s).

                -   `<Accordion.Label state>` — Wrapper around `<input type="checkbox/radio" checked={false/true}>`, used to make the item active.
                -   `<Accordion.Label palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

            -   `<Accordion.Section>` — Used for wrapping accordion item content that will render when active.

                -   `<Accordion.Section loading="lazy">` — Disables rendering of item content to DOM when not active.

-   Updated the following Components / Component Features

    -   Utilities

        -   `Transition`

            -   `<Transition animation="clip">` — Reversed `direction` property handling so `enter` variations come from their `direction`, rather than expand to their `direction`. Matching the `<Transition animation="slide">` variations.

## v0.4.4 - 2021/10/17

-   Fixed Svelte Compiler ARIA warnings about missing `for` / `href` attribute, even if provided by developer.
-   Moved base element styles earlier in stylesheet imports, to reduce specificity conflicts.

-   Added the following Components / Component Features

    -   Display

        -   `Table`

            -   `<Table.Column colspan={number | string} rowspan={number | string}>` / `<Table.Heading colspan={number | string} rowspan={number | string}>` — Bindings to [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) / [`rowspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-rowspan) attributes.

-   Fixed the following Components / Component Features

    -   Disclosure

        -   `Tab`

            -   `<Tab.Anchor>` — Fixed text coloring being inherited from base `<Anchor>` styles.

    -   Interactables

        -   `Form`

            -   `<Form.Label for="XXX">` — Fixed authoritive context not being set when no parent context is found.

-   Removed the following Components / Component Features

    -   Interactables

        -   `Button`

            -   `<Button for="XXX">` — Removed the ability to set empty `<label for>` via `true` value.

-   Updated the following Components / Component Features

    -   Display

        -   `Table`

            -   `<Table.Column bind:element>` / `<Table.Heading bind:element>` — Changed from deprecated `HTMLTableDataCellElement` / `HTMLTableHeaderCellElement` -> `HTMLTableCellElement`.

    -   Interactables

        -   `Button`

            -   `<Button for>` / `<Button href>` — Changed from using `role=button` to `.button` class as the selector.

## v0.4.3 - 2021/10/11

-   Added CSS Theming Variables to the following Components: `Button`, `Check`, `Form`, `Radio`, `Switch`, `TextInput`.
-   Revamped internal context handling for `Check`, `Form`, `HiddenInput`, `Radio`, `Switch`, `Tab`, `TextInput`.

-   Added the following Components / Component Features

    -   Interactables

        -   `Switch`

            -   Providing child content in the default unnamed slot will wrap the Component and content in a `<Form.Label>` with spacing as siblings.

    -   Overlays

        -   `Clickable` — Increases clickable area of child `<Clickable.Anchor>` / `<Clickable.Label>` to the entirety of parent. Surfacing any other interactable Components above that.

            -   `<Clickable.Container>` — Wrapper `display: contents` Component which sets `position: relative` on immedidate children.
            -   `<Clickable.Anchor>` — Works like a regular `<Anchor>` but with `clickable-item` class preset.
            -   `<Clickable.Label>` — Works like a regular `<Form.Label>` but with `clickable-item` class preset. And sets the Form ID context to match `<Clickable.Label for>`.

-   Updated the following Components / Component Features

    -   Navigation

        -   `Anchor`

            -   **(BREAKING)** Changed link coloring to inherit current color. Works better in most composable situations, e.g. w/ `Clickable`

                -   Use `<Anchor palette="XXX">` to color links according to palette.

## v0.4.2 - 2021/10/07

-   Added the following Components / Component Features

    -   Display

        -   `Badge`

            -   `<Badge shape="none/pill/rounded">` — Changes the border radius shape of the Component.

    -   Layout

        -   `Center` — Centers the child content within its self using Flexbox.
        -   `Position` — Applies special positioning rules to child content depending `<Position variation>`.

            -   `<Position variation="floated">` — Positions the child content in a corner of the containing parent without affecting layout.

                -   `<Position variation="floated" placement="bottom/top" alignment_x="left/right">` — Positions the child content in a top / bottom corner.
                -   `<Position variation="raised" placement="bottom/left/right/top">` — Positions the child content while affecting the layout.

    -   Utilities

        -   `Transition`

            -   `<Transition duration="number|string">` — Provide a percentage decimal (e.g. `1.2` which means `120%`) to control how long of the theme's animation duration is played.

-   Deprecated the following Components / Component Features

    -   Display

        -   `Badge`

            -   **(BREAKING)** `<Badge position="floated/raised">` — Current behavior is deprecated in favor of using `Position`.

    -   Feedback

        -   `Dot`

            -   **(BREAKING)** `<Dot position="floated/raised">` — Current behavior is deprecated in favor of using `Position`.

## v0.4.1 - 2021/10/01

-   Added `IS_SERVER: boolean` constant.

-   Added the following Actions / Action Features

    -   `intersection_observer(HTMLElement, {on_intersect: (intersections: IntersectionObserverEntry[]) => void}): IIntersectionObserverAction` — Light Svelte Action wrapper around the [`IntersectionObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

        -   `intersection_observer({...: IntersectionObserverInit})` — Pass [`IntersectionObserverInit`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#properties) options.
        -   **NOTE**: Properties map to snake_case, e.g. `rootMargin` -> `root_margin`

    -   `mutation_observer(HTMLElement, {on_mutate: (mutations: MutationRecord[]) => void}): IMutationObserverAction` — Light Svelte Action wrapper around the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

        -   `mutation_observer({...: MutationObserverInit})` — Pass [`MutationObserverInit`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit) options.
        -   **NOTE**: Properties map to snake_case, e.g. `attributeFilter` -> `attribute_filter`

-   Added the following Components / Component Features

    -   Utilities

        -   `BrowserRender` — Disables rendering of child content whenever Component is initialized on a Server.
        -   `ServerRender` — Disables rendering of child content whenever Component is initialized on the Browser.

        -   `IntersectionRender` — Starts rendering the child content whenever the content intersects the viewport, via a [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

            -   `<IntersectionRender fallthrough={boolean}>` — When `true`, always renders content in SSR environments, e.g. SvelteKit
            -   `<IntersectionRender loading="eager">` — Changes behavior to stop rendering the child content whenever it leaves the viewport, instead of persisting.
            -   `<IntersectionRender has_intersected={boolean}>` — Is `true` after the child content has intersected once.
            -   `<IntersectionRender is_intersecting={boolean}>` — Is `true` whenever the child content is intersecting.
            -   `<IntersectionRender root>` — Maps to [`IntersectionObserverInit.root`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root).
            -   `<IntersectionRender root_margin>` — Maps to [`IntersectionObserverInit.rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).
            -   `<IntersectionRender threshold>` — Maps to [`IntersectionObserverInit.threshold`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds).

## 0.4.0 - 2021/09/28

-   Added CSS Theming Variables to the following Components: `Anchor`, `Badge`, `Box`, `Breadcrumb`, `Card`, `Container`, `Divider`, `Dot`, `Ellipsis`, `Group`, `Hero`, `List`, `Progress`, `Spinner`, `Table`, `Tile`, `Wave`.
-   Fixed `<XXX sizing="{VIEWPORT}:{SIZING}>` modifiers not having correct values.

-   Added the following Components / Component Features

    -   Navigation

        -   `Anchor`

            -   `<Anchor palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

    -   Utilities

        -   `<Transition>` — Encapsulates the child content within an controllable animation.

            -   `<Transition delay="number|string">` — Provide a percentage decimal (e.g. `1.2` which means `120%`) to control how long of the transition duration to wait before playing.
            -   `<Transition direction="bottom/left/right/top">` — On supported animations, controls the direction in which the animation moves towards. With most animations defaulting to `bottom`.
            -   `<Transition variation="enter/exit/undefined">` — If `enter`, the enter animation plays. If `exit`, exit animation plays. No animation plays when provided `undefined`.
            -   `<Transition on:animationend on:animationstart>` — Passthrough of the Browser [`animationend`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event) / [`animationstart`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event) events.

            -   `<Transition animation="XXX">` — Controls which animation is played.

                -   `<Transition animation="clip">` — Sets to a `clip-path` / `opacity` "blinders" animation.
                -   `<Transition animation="fade">` — Sets to a simple `opacity` "fade in" / "fade out" animation.
                -   `<Transition animation="scale">` — Sets to a `transform: scale` / `opacity` "zoom in" / "zoom out" animation.
                -   `<Transition animation="slide">` — Sets to a `transform: translate` / `opacity` sliding movement animation.

-   Updated the following Components / Component Features

    -   Navigation

        -   `Breadcrumb`

            -   `<Breadcrumb.Item active>` — Changed from a `active={true}` being bolded, to `active={false}` being lower opacity. Works better in situations where a parent container has bolded text.

-   Removed the following Components / Component Features

    -   Feedback

        -   `Spinner`

            -   **(BREAKING)** `<Spinner variation="dual">` — Removed previously deprecated feature.

## 0.3.5 - 2021/09/19

-   Added the following Components / Component Features

    -   \*

        -   `<XXX elevation="none">` — Removes elevation from the Component.

    -   Display

        -   `Table`

            -   `<Table.Container sizing="tiny/small/medium/large/huge">` — Added support for modifying the text sizing / spacings of all children.

    -   Overlays

        -   `Overlay`

            -   `<Overlay orientation="horizontal/mobile:horizontal/tablet:horizontal/desktop:horizontal/widescreen:horizontal">` — Lays content out horizontally.

    -   Surfaces

        -   `Box`

            -   `<Box elevation="none/lowest/low/medium/high/highest">` — Changes the background box shadow for facsimile of elevated height off the page.
            -   `<Box shape="none/pill/rounded">` — Changes the border radius shape of the Component.

        -   `Card` / `Tile`

            -   `<XXX.Footer orientation="vertical/mobile:vertical/tablet:vertical/desktop:vertical/widescreen:vertical">` — Lays content out vertically.
            -   `<XXX.Footer alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Used to align the content.

    -   Utilities

        -   `Portal`

            -   `<Portal loading="lazy">` — Disables rendering to HTML of the default slot content when not active / mounted.

## v0.3.4 - 2021/09/10

-   Fixed `keybind({repeat: true})` Svelte Action dispatching `on_bind` before all keys of combinations are pressed.

-   Added the following Components / Component Features

    -   Interactables

        -   `Form`

            -   `<Form.Group on:change>` — Dispatches whenever the `<Form.Group logic_state>` value changes via Svelte Context.

    -   Utilities

        -   `Portal`

            -   `<Portal on:mount>` — Dispatches whenever the `Portal` Component successfully mounts.

-   Updated the following Components / Component Features

    -   \*

        -   Added [slot typing](https://github.com/dummdidumm/rfcs/blob/683fe6d12051b1c9107cfe76cfb90af5efe2fc43/text/ts-typing-props-slots-events.md#typing-slots) to all Components.

    -   Utilities

        -   `Portal`

            -   Updated to hide content whenever not yet mounted.

## v0.3.3 - 2021/09/01

-   Added `--font-content-size-local-*` / `--font-headline-size-local-*` properties, which use `em` values instead of `rem`.
-   Fixed `viewport("widescreen")` / `viewports({widescreen: true})` using incorrect values.
-   Updated `--font-content-size-*` / `--font-headline-size-*` CSS variables to `--font-content-size-root-*` / `--font-headline-size-root-*`.

-   Added the following Components / Component Features

    -   Surfaces

        -   `Card` / `Tile`

            -   `<Card.Container sizing="tiny/small/medium/large/huge">` / `<Tile.Container sizing="tiny/small/medium/large/huge">` — Added support for modifying the text sizing / spacings of all children.

-   Fixed the following Components / Component Features

    -   Navigation

        -   `Breadcrumb`

            -   `<Breadcrumb.Container separator="XXX">` — Fixed typings to not error on no value being present.

-   Updated the following Components / Component Features

    -   Navigation

        -   `Breadcrumb`

            -   Updated spacing for separators `small` -> `tiny` tier.

    -   Surfaces

        -   `Card`

            -   `<Card.Figure>` — non-fullbleed media is now centered on both axis.
            -   Updated border / spacing handling to work better with `<Card.Figure>` with non-fullbleed media.

        -   `Card` / `Tile`

            -   `<Card.Header>` / `<Tile.Header>` — Updated font size `large` -> `medium`
            -   Updated spacing to be slightly more compact.

## v0.3.2 - 2021/08/24

-   Fixed attribute mapping not rejecting `false` values.

## v0.3.1 - 2021/08/24

-   Fixed some internal Component typings.

-   Added the following Components / Component Features

    -   Disclosure

        -   `Tab`

            -   `<Tab.Container>` — Wrapper Component which provides stylings and Svelte Contexts for radio button functionality.

                -   `<Tab.Container logic_name="XXX">` — Used to synchronize the form name between each radio button.
                -   `<Tab.Container logic_state="XXX">` — Used to set which form ID is the current active tab.
                -   `<Tab.Container sizing="tiny/small/medium/large/huge">` — Used to change how large the children buttons renders as.

            -   `<Tab.Group>` — Used for grouping together `<Tab.Label>` / `<Tab.Section>` Components.

                -   `<Tab.Group logic_id="XXX">` — Used to synchronize the form IDs between the radio buttons, tab content, and Svelte Contexts.

            -   `<Tab.Label>` — Used for providing radio buttons for navigating tabs without Javascript.

                -   `<Tab.Label state>` — Wrapper around `<input type="radio" checked={false/true}>`, used to make the tab active.

            -   `<Tab.Anchor>` — Used for providing page-based navigation buttons.

                -   `<Tab.Anchor current="XXX">` — Wrapper around `aria-current`, used to make the tab active.

            -   `<Tab.Anchor>` / `<Tab.Label>`

                -   `<Tab.XXX palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.

            -   `<Tab.Section>` — Used for wrapping tab content that will render when active.

                -   `<Tab.Section loading="lazy">` — When paired with `<Tab.Group>` / `<Tab.Label>`, disables rendering of tab content to DOM when not active.

    -   Feedback

        -   `Progress`

            -   `<Progress>` — Used for displaying the process of an ongoing action to the end-user.

                -   `<Progress palette="accent/dark/light/alert/affirmative/negative">` — Used to change the rendered color palette.
                -   `<Progress shape="circle">` — Used to change the rendering of the Component to be a circle.
                -   `<Progress size="tiny/small/medium/large/huge">` — Used to change how large the Component renders as.
                -   `<Progress value="0.0...1.0">` — Used to control the current percent displayed.

-   Added the following Actions / Action Features

    -   `keybind(HTMLElement, {binds: string | string[], on_bind: (event: IKeybindEvent) => void}): IKeybindAction` — Used to bind multiple key combinations to activate a keybind callback.

        -   `keybind(HTMLElement, {repeat?: boolean, repeat_throttle?: number})` — Used to control if the `on_bind` callback is repeated for held down active keybinds, and how long between each repeat call.

## v0.3.0 - 2021/08/10

-   First NPM release, install via `npm install @kahi-ui/framework`.

## v0.2.16 - 2021/08/04

-   Fixed dark mode transition being laggy on WebKit / Blink Browsers.
-   Fixed scrollbar not having height applied to it on WebKit / Blink Browsers.
-   Updated scrollbar with theming for dark mode.
-   Updated colors, spacings, and other visual modifiers.

-   Added initial support for Theming CSS Variables

    -   `--font-family-(monospace/normal)` — References the available font familes.

        -   e.g. `font-family: var(--font-family-monospace);`

    -   `--font-(content/headline)-(line-height/size)-(nano/tiny/small/medium/large/huge/massive)` — References the available font sizes and their associated line heights.

        -   e.g. `font-size: var(--font-content-size-medium);`

    -   `--palette-(auto/auto-off/inverse/inverse-off/accent/neutral/dark/off-dark/light/off-light/alert/affirmative/negative)-(lightest/light/normal/bold/boldest)` — References the available shades for the semantic color palette.

        -   e.g. `color: rgb(var(--palette-accent-bold));`
        -   **IMPORTANT**: The semantic shades naming depends on the theme used. e.g. the default theme flips light <-> dark shades around and shifts the shading scale, for dark mode.
        -   **NOTE**: The `auto` / `auto-off` palettes are their respective `dark` / `light`, depending on if the Framework is in dark mode.
        -   **NOTE**: The `inverse` / `inverse-off` palettes are always the opposite of the `auto` / `auto-off` palettes.
        -   **NOTE**: The `off` palettes are "off color" variations of the `dark` / `light` palettes.

    -   `--radius-(circle/pill/small/medium)` — References the available border radius and shape associated radii.

        -   e.g. `border-radius: var(--radius-medium);`

    -   `--sizes-(content/embedded/icon)-(tiny/small/medium/large/huge)` — References the available sizing levels for Content sizes, Embedded Media widths, and Icon sizes.

        -   e.g. `width: var(--sizes-icon-small);height: var(--sizes-icon-small);`

    -   `--spacing-(local/root)-(tiny/small/medium/large/huge)` — References the available spacing levels, with `root` spacing using `rem` and `local` using `em`.

        -   e.g. `padding-left: var(--spacing-root-small);`

-   Added the following Components / Component Features

    -   Interactables

        -   `Button`

            -   `<Button type="reset" value="XXX">` — Added support for rendering `<input type="reset" />`.

        -   `TextInput`

            -   `<TextInput palette="XXX" variation="flush" />` — Added support for text colors in `flush` variations.

    -   Navigation

        -   `Menu`

            -   `<Menu.Container sizing="XXX">` — Added support for setting sizing for menu content.
            -   `<Menu.Anchor palette="XXX">` / `<Menu.Button palette="XXX">` / `<Menu.Label palette="XXX">` — Added support for palettes.

    -   Typography

        -   `Heading`

            -   `<Heading palette="XXX">` — Is now supported for all the built-in semantic palettes.

        -   `Text`

            -   `<Text variation="headline">` - Is now supported for all headline sizes.

-   Deprecated the following Components / Component Features

    -   Feedback

        -   `Spinner`

            -   **(BREAKING)** `<Spinner variation="dual">` — Will no longer be available in the future.

        -   `Wave`

            -   **(BREAKING)** `<Wave size="XXX">` — Not a useful modifier, also to add consistency with `Dot`.

-   Updated the following Components / Component Features

    -   \*

        -   `<XXX palette="auto-inverse">` — Changed from `auto-inverse` -> `inverse` to be consistent with new CSS Variables.

    -   Interactables

        -   `Button`

            -   `<Button value="XXX">` — Fixed `<input />`-based `Button`s not rendering properly.

        -   `Form`

            -   `<Form.Control on:click>` — Added missing event typing definitions.

    -   Navigation

        -   `Menu`

            -   `<Menu.Label>` — Added missing event typing definitions.

    -   Utilities

        -   `ContextBackdrop`

            -   `<ContextBackdrop on:click>` — Added missing event typing definitions.

## v0.2.15 - 2021/07/27

-   Deprecated the following Components / Component Features

    -   Navigation

        -   `Omni`

            -   **(BREAKING)** `<Omni.Container logic_id="XXX">` — Current behavior is deprecated in favor of using `Popover` in combination with global modifiers like `hidden`.

-   Updated the following Components

    -   \*

        -   Migrated all Components to internally use new experiemental [`$$Props`](https://github.com/dummdidumm/rfcs/blob/683fe6d12051b1c9107cfe76cfb90af5efe2fc43/text/ts-typing-props-slots-events.md) TypeScript type aliasing.
        -   Fixed Svelte Compiler warnings for unused exports.

    -   Navigation

        -   `Menu`

            -   `<Menu.Container class="XXX">` — Fixed not accepting property input.

## v0.2.14 - 2021/07/20

-   Updated the following Components

    -   Display

        -   `Table`

            -   Fixed table bottom borders to use deeper nested `::before` to fix Chrome rendering bug.

    -   Navigation

        -   `Aside`

            -   Removed rendering of `Offscreen` wrapper when `logic_id` is not set.

    -   Overlays

        -   `Offscreen` / `Popover`

            -   Removed unintended behavior of inheriting the current logic / state contexts.

        -   `Overlay`

            -   Removed unintended property typings.

    -   Utilities

        -   `Portal`

            -   Fixed exception thrown when trying to mount `Portal` container element.
            -   Fixed `Portal` not removing children upon being destroyed.

-   Updated the following Actions

    -   `click_outside`

        -   **(POTENTIALLY BREAKING)** Added validation check if the click target is actually inside the the DOM or off-screen.
            -   If you had a Component which changes its DOM layout before the `click` event handler was fired, previously the action would emit a false positive.
            -   e.g. the documentation web application's dark mode toggle icon. It changes the icon whenever clicked.

-   Added the following Stores

    -   `mediaquery(query: string): Readable<boolean>` / `mediaqueries(queries: string[], options: IMediaQueriesOptions): Readable<boolean>` — Returns `true` whenever any of the given Media Queries are valid.

        -   `mediaqueries(queries, {behavior: "and"})` — Requires all given Media Queries to be valid instead of any.

    -   `viewport(viewport: string): Readable<boolean>` — Single viewport version of `viewports`.

-   Updated the following Stores

    -   `attribute`

        -   **(POTENTIALLY BREAKING)** Updated to remove attributes set target element if provided value is falsy.

    -   `prefersscheme`

        -   Updated to utilize the new `mediaquery` Store internally.

    -   `viewports(viewports: Record<string, boolean>): Readable<string>`

        -   Refactored implementation for quicker updates.
        -   Only passing in a single Viewport will return an instance of `viewport`.

## v0.2.13 - 2021/07/13

-   Added the following Components

    -   Interactables

        -   `HiddenInput` — Useful for providing hidden constants for form submissions that the end-user doesn't need to modify.

-   Updated the following Components

    -   Feedback

        -   `Ellipsis`

            -   Updated to disable line wrapping on the inner characters.

    -   Interactables

        -   `Check` / `Radio`

            -   Added `<XXX variation="flush">` — Changes the appearance to only show the inner box / circle shape.

    -   Navigation

        -   `Menu`

            -   Added `<Menu.Label>` — Useful for wrapping a form Component as a Menu option.
            -   Added property passthrough for `Menu.Anchor` / `Menu.Button` / `Menu.Divider` / `Menu.Heading` to `Menu.Item`.
            -   Updated typings for `Menu.Anchor` / `Menu.Button` / `Menu.Divider` / `Menu.Heading`.

    -   Surfaces

        -   `Card` / `Tile`

            -   Added `<XXX variation="flush">` — Changes the appearance to remove exterior padding, background, and box shadow.

## v0.2.12 - 2021/07/04

-   Upgraded Storybook `6.3.0-rc.11` -> `6.3.2`.
-   Updated the following Components

    -   Interactables

        -   `Form`

            -   Updated `Form.Control` / `Form.HelpText` / `Form.Label` not properly handling global modifiers / properties.

        -   `TextInput`

            -   Added `<TextInput align="center/justify/left/right">` — Aligns the text displayed within the `TextInput`.
            -   Added `<TextInput transform="capitalize/lowercase/uppercase">` — Transform the character casing of text displayed within the `TextInput`.

                -   **IMPORTANT**: This will only _affect_ the **VISUAL DISPLAY**, not the value retrieved via value binding.

        -   `Check` / `Radio` / `Switch` / `TextInput`

            -   Added `<XXX on:blur on:focus>` — Events fired whenever the Component loses focus or gains focus from the end-user, respectively.

    -   Navigation

        -   `Aside`

            -   Updated `<Aside.Section>` with disabled `flex-shrink` when not last of type.

    -   Typography

        -   `Heading` / `Text`

            -   Updated handling for `<Heading align="XXX" transform="XXX">` / `<Text align="XXX" transform="XXX">` to internally use variables.

        -   `Text`

            -   Updated all `<Text is="XXX">` elements to accept `<Text align="XXX">`.

## v0.2.11 - 2021/06/29

-   Bump Browser minimum version requirements.

    -   Utilizing [`inset`](https://developer.mozilla.org/en-US/docs/Web/CSS/inset) in `Popover`.

        -   Chrome 87+ _(November 2020)_
        -   Edge 87+ _(November 2020)_
        -   Firefox 66+ _(March 2019)_

            -   Minimum was already Firefox 67+.

        -   Safari 14.1+ _(April 2021)_

            -   Minimum was already Safari 14.1+.

-   Added `<XXX spacing="{VIEWPORT}:none">` / `<XXX spacing-{AXIS}="{VIEWPORT}:none">` support for Components that needed the zero pixel variable.
-   Added the following Components

    -   Overlays

        -   `Offscreen` — Useful for wrapping excess content offscreen that the end-user can show via buttons on the Viewport edges.

            -   `<Offscreen alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Defaults to `stretch`, used to align the content.
            -   `<Offscreen hidden="true/mobile/tablet/desktop/widescreen">` — Used to control which Viewports the excess content is hidden on.
            -   `<Offscreen logic_id="XXX">` — Used to set the HTML `id` for the state checkbox which controls when content is being shown.
            -   `<Offscreen placement="top/left/bottom/right">` — Defaults to `left`, used to control which edge to show the content along.
            -   `<Offscreen captive>` — Enables the backdrop.
            -   `<Offscreen dismissable>` — Enables the backdrop to be clickable, and dismisses the `Offscreen`.
            -   `<Offscreen on:active>` — Fires whenever the `Offscreen` is made active, either via scripting or the end-user.
            -   `<Offscreen on:dismiss>` — Fires whenever the `Offscreen` is dismissed, either via scripting or the end-user.

        -   `Popover` — Useful for creating overflow menus that the end-user can show via buttons.

            -   `<Popover alignment_x="left/right/center" alignment_y="top/bottom/center">` — Defaults to `center`, used to align the content.
            -   `<Popover hidden="true/mobile/tablet/desktop/widescreen">` — Used to control which Viewports the excess content is hidden on.
            -   `<Popover logic_id="XXX">` — Used to set the HTML `id` for the state checkbox which controls when content is being shown.
            -   `<Popover placement="top/left/bottom/right">` — Defaults to `bottom`, used to control which edge to show the content along.
            -   `<Popover spacing="none/tiny/small/medium/large/huge">` — Defaults to `none`, used to control how far away the `Popover`'s floating content will appear away from the base content.
            -   `<Popover dismissable>` — Enables the `Popover` to close whenever its content are clicked outside of.
            -   `<Popover on:active>` — Fires whenever the `Popover` is made active, either via scripting or the end-user.
            -   `<Popover on:dismiss>` — Fires whenever the `Popover` is dismissed, either via scripting or the end-user.

-   Updated the following Components

    -   Navigation

        -   `Aside`

            -   Added `<Aside.Container placement="left/right">` — Used to control which Viewport edge the `Aside` will be on when collapsed on Mobile / Tablet.
            -   Added `<Aside.Container on:active>` — Fires whenever the `Aside` is made active, either via scripting or the end-user.
            -   Added `<Aside.Container on:dismiss>` — Fires whenever the `Aside` is dismissed, either via scripting or the end-user.
            -   Migrated `<Aside.Container>` to internally use `Offscreen` for collapsing functionality.
            -   Updated last `<Aside.Section>` to flew grow to parent height.

    -   Overlays

        -   `Overlay`

            -   Fixed `Overlay` potentially resetting between viewport changes.

    -   Surfaces

        -   `Card`

            -   Updated `<Card.Section>` to have increased y-axis padding when the first / last child of a `<Card.Container>`.
            -   Updated only last `<Card.Section>` to only flex grow parent height.

        -   `Card` / `Tile`

            -   Updated border size slightly for better Dark Mode readability.
            -   Updated default elevation to be `lowest` instead of `low`.

-   Updated the following Stores / Contexts

    -   `get_state_context(): Writable<boolean>`

        -   `get_state_context(): Writable<boolean>` -> `get_state_context(): Writable<boolean> | undefined` — No longer throws an error when the Svelte Context cannot be found.

## v0.2.10 - 2021/06/26

-   Updated the following Components

    -   Display

        -   `List`

            -   **(BREAKING)** Updated to be in line with the rest of element configurable Components.

                -   `<List.Ordered>` -> `<List.Container is="ol">`
                -   `<List.Unordered>` -> `<List.Container is="ul">`

    -   Layouts

        -   `Grid`

            -   **(BREAKING)** Changed `Grid` to be a namespace.

                -   Access the original Component via `<Grid>` -> `<Grid.Container>`, same API otherwise.

            -   Fixed `<Grid class="XXX">` not working.
            -   Updated `Grid.Container` to densely pack rows.

            -   Added `Grid.Item` — Optionally used to wrap a child item.

                -   `<Grid.Item span="1...12" span_x="1...12" span_y="1...12">` — Used to control how many Grid Points the child item spans in columns, rows, or both. With Viewport support, e.g. `<Grid.Item span={["3", "mobile:1"]}>`

        -   `Mosaic`

            -   Fixed `<Mosaic class="XXX">` not working.

        -   `Scrollable`

            -   Fixed `<Scrollable class="XXX">` not working.

    -   Overlays

        -   `Overlay`

            -   Added `<Overlay on:active>` — Fires whenever the `Overlay` is made active, either via scripting or the end-user.
            -   Added `<Overlay on:dismiss>` — Fires whenever the `Overlay` is dismissed, either via scripting or the end-user.

## v0.2.9 - 2021/06/24

-   Fixed NPM install.

## v0.2.8 - 2021/06/24

-   Updated the following Components

    -   Interactables

        -   `TextInput`

            -   Fixed `<TextInput resizeable>` -> `<TextInput resizable>`

## v0.2.7 - 2021/06/24

-   Upgraded Storybook to `6.3.0-rc.11`.

    -   Changed Storybook to use Vite as toolchain.

-   Adjusted background shades for light mode.
-   Fixed up some naming / organization of Component types and Storybook options.

-   Added new Components

    -   Form

        -   `Form`

            -   `Form.Control` — Works as a container Component for providing vertical stacking for `Form.Label` / `Form.HelpText` / form Component with font-size based spacing

                -   `<Form.Control logic_id="XXX">` — Used as an authoritative source for IDs for form-based Components via Svelte Context

            -   `Form.Group` — Works as a purely virtual Component for providing shortcuts for groupings of form Components

                -   `<Form.Group logic_name="XXX">` — Used as an authoritative source for form names for form-based Components via Svelte Context

            -   `Form.Label` — Used to communicate to the end-user what a sibling / child form Component is used for

                -   `<Form.Label logic_id="XXX">` — Used as an authoritative source for IDs for form-based Components via Svelte Context

            -   `Form.HelpText` — Used to communicate to the end-user helpful information about a sibling form Component, e.g. input is for E-Mail address format

-   Returning Components with their associated updates

    -   Display

        -   `Table`

            -   Changed `Table.Body` -> `Table.Section`
            -   Changed `Table.Heading` -> `Table.Header`
            -   Added `<Table.Container palette="accent/dark/light/alert/affirmative/negative">`
            -   Changed `<Table.Column heading>...</Table.Column>` -> `<Table.Heading>...</Table.Heading>`
            -   Changed `<Table.Container variation="bordered">` -> `<Table.Container variation="borders">`
            -   Changed `<Table.Container variation="striped">` -> `<Table.Container variation="stripes">`

    -   Interactables

        -   `Button`

            -   Updated to use transparent borders for consistent height.

        -   `Check` / `Radio`

            -   Providing child content as a slot will wrap the Component and content in a `<Form.Label>` with spacing as siblings

        -   `Switch`

        -   `TextInput`

-   Updated the following Components

    -   Interactables

        -   `Button`

            -   Added padding to adjust depending on text size.

    -   Layouts

        -   `Container`

            -   Updated x-axis padding to be slightly larger.

    -   Navigation

        -   `Menu`

            -   Updated `Menu.Anchor` / `Menu.Button` to match new `Button` padding.

    -   Typography

        -   `Text`

            -   Updated keycap design for `<Text is="kbd">`.

    -   Utilities

        -   `ContextBackdrop`

            -   Adjusted background shading to be slightly darker / opaque.

## v0.2.6 - 2021/06/21

-   Added `name` HTML5 attribute to all Components as a global property.
-   Adjusted dark / light shades coloring slightly.
-   Fixed the sizing modifiers.
-   Fixed the spacing modifiers.
-   Fixed typo of `dismissable` -> `dismissible`.
-   Fixed typing of `DESIGN_HIDDEN_ARGUMENT` not accepting array arguments for Viewports.
-   Updated the following Components

    -   Feedback

        -   `Wave`

            -   Removed line wrapping from the children dots.

    -   Navigation

        -   `Aside` / `Omni`

            -   Added low transparency border for legibility.

        -   `Breadcrumb`

            -   Fixed not resetting the `List` margins.

        -   `Menu`

            -   Fixed `Menu.Divider` not rendering non-text dividers properly.

    -   Overlays

        -   `Overlay`

            -   Fixed children not being interactable when state was not configured.

    -   Surfaces

        -   `Box`

            -   Adjusted default color shade to match `Hero`.

        -   `Card` / `Tile`

            -   Added low transparency border for legibility.

        -   `Tile`

            -   Updated `Tile.Section` to use bigger padding when first and / or last child for their respective sides.

    -   Typography

        -   `Heading` / `Text`

            -   Added `palette="accent/dark/light/alert/affirmative/negative"` text color modifier.

        -   `Text`

            -   Added initial keycap design for `<Text is="kbd">`.

## v0.2.5 - UNRELEASED

-   Added new Components

    -   Feedback

        -   `Ellipsis`

            -   Renders three text periods that fade in and out with synchronized delays. Useful for collaboration feedback, e.g. `NovacBN is typing...` -> `NovacBN is typing<Ellipsis />`
            -   `<Ellipsis character="X">` — Changes the character being rendered

-   Returning Components with their associated updates

    -   Feedback

        -   `Wave`

            -   `<Wave palette="accent/dark/light/alert/affirmative/negative">` — Changes the color palette
            -   `<Wave size="tiny/small/medium/large/huge">` — Changes the size

    -   Typography

        -   `Blockquote`

            -   `Quote.Container`, `Quote.Cite` -> `Blockquote.Container`, -> `Blockquote.Cite`
            -   `<Blockquote.Container palette="accent/dark/light/alert/affirmative/negative">` — Changes the color used for the border and background

## v0.2.4 - UNRELEASED

-   Added `IS_BROWSER: boolean` to exports
-   Added `<XXX palette="auto/inherit/inverse">` to all palette adjustable Components

    -   `auto` — Component adjusts between `dark` / `light` palettes depending on if Dark Mode is active or not. Useful for Components like `<Card.Container>` acting like an Modal via `<Overlay>`
    -   `auto-inverse` — Inverse of `auto`, if Dark Mode is enabled then `light` is selected. And if Dark Mode is off, then `dark` is selected
    -   `inherit` — Forces the Component to inherit its palette from parent or higher ancestor. Useful for Components like `<Button>` which have a default palette

-   Updated `viewports(): Readable<boolean>` debounce to use 0 duration `requestIdleCallback`, which waits for the Browser to idle. So in some situations it might run faster
-   Returning Components with their associated updates

    -   Display

        -   `List`

            -   `<List.Ordered>` / `<List.Unordered>` for respective `<ol>` / `<ul>` bindings
            -   `<List.Item>` for `<li>` binding

    -   Overlays

        -   `Overlay`

            -   Displays children as an Overlay, with an optional backdrop
            -   `<Overlay alignment="center/stretch" alignment_x="left/right/center/stretch" alignment_y="top/bottom/center/stretch">` — Defaults to `center`, aligns the children
            -   `<Overlay spacing="tiny/small/medium/large/huge" spacing_x="tiny/small/medium/large/huge" spacing_y="tiny/small/medium/large/huge">`
            -   `<Overlay captive>` — Enables the backdrop
            -   `<Overlay dismissable>` — Enables the backdrop to be clickable, and dismisses the Overlay

-   Updated the following Components

    -   Navigation

        -   `Aside`

            -   Now collapses on tablet Viewport breakpoint when enabled via `logic_id`, collapse state resets on Viewport size change
            -   Added `<Aside.Container captive>` — Enables placing a `<ContextBackdrop>` automatically

                -   Use `<Aside.Container dismissable>` to make the backdrop clickable to dismiss

        -   `Menu`

            -   Added `<Menu.Container orientation="horizontal/mobile:horizontal/tablet:horizontal/desktop:horizontal/widescreen:horizontal">`, lays out content horizontaly

                -   Use only for single-dimension menus, e.g. no dividers, submenus, etc

        -   `Omni`

            -   Now collapses on mobile / tablet Viewport breakpoint when enabled via `logic_id`, collapse state resets on Viewport size change
            -   Added `<Omni.Container captive>` — Enables placing a `<ContextBackdrop>` automatically

                -   Use `<Omni.Container dismissable>` to make the backdrop clickable to dismiss

    -   Typography

        -   `Heading`

            -   Added `<Heading variation="headline">` for accessing a second tier of bigger font sizes / line heights

                -   `<Heading is="h1">` is the same size as `<Hero.Header>`

## v0.2.3 - UNRELEASED

-   Added `prefersscheme(scheme: "dark" | "light"): Readable<boolean>`, with `prefersdark(): Readable<boolean>` / `preferslight(): Readable<boolean>` shortcut Svelte Stores

    -   Replaces previous `darkmode(): Readable<boolean>` Stores

-   Added `htmlpalette(): Writable<"accent" | "dark" | "light" | "alert" | "affirmative" | "negative" | "">` shortcut Svelte Store

    -   Wraps the `data-palette` attribute from `<html data-palette="XXX">`

-   Changed `darkmode(): Readable<boolean>` logic

    -   Replicates the logic built into the CSS files, is `true` when either condition is met:

        -   `<html data-palette="dark">` is set
        -   `@media (prefers-color-scheme: dark)` is true and `data-palette` is not set

-   Updated `viewports(): Readable<boolean>` to debounce Store updates, to prevent too many updates in a single frame

    -   Minimum duration is 100ms, maybe more depending on Browser minimums for security / performance

-   Returning Components with their associated updates

    -   Layout

        -   `Scrollable`

## v0.2.2 - UNRELEASED

-   Added `<Group variation="stacked">`, overlaps children similar to an avatar stack when set
-   Added `<XXX palette="YYY">` color shades adjustments for dark mode
-   Returning global modifier `<XXX hidden>` / `<XXX hidden="mobile/tablet/desktop/widescreen">` / `<XXX hidden={["mobile", "tablet", "desktop", "widescreen"]}>`
-   Returning Components with their associated updates

    -   Navigation

        -   `Menu`

            -   Removed palette options from all Menu-related Components
            -   Changed method of adding submenus to `<svelte:fragment slot="sub-menu">XXX</svelte:fragment>` slot in `<Menu.Divider>` / `<Menu.Heading>`

-   Added Stores / Contexts used by some Components for progressive enhancements

    -   `state(default_value: boolean): Writable<boolean>` / `get_state_context(): Writable<boolean>`

        -   Used for providing contextual boolean state access, e.g. `<ContextBackdrop>` will read this from an `<Aside.Container>` to enable Scroll Lock

## v0.2.1 - UNRELEASED

-   Added `darkmode(): Readable<boolean>` Svelte Store

    -   Is `true` whenever `@media (prefers-color-scheme: dark)` is true

-   Added `viewports({desktop: boolean, mobile: boolean, tablet: boolean, widescreen: boolean}): Readable<boolean>` Svelte Store

    -   Is `true` whenever a given combination of Viewport screen dimensions is active

-   Added automatic dark mode media query

    -   Other themeing adjustments might be needed later

-   Added new Components

    -   Embedded

        -   `Figure`

            -   Used for wrapping multimedia content with object-related modifiers
            -   `<Figure size="tiny/small/medium/large/huge">` — Used for setting block sizes on the child media

                -   `<Figure variation="icon">` — Enables sizes that are typically used for icon UI contexts

            -   `<Figure fit="contain/cover/fill/none/scale-down">` — Used for setting how the child media is scaled to its parent container's size
            -   `<Figure shape="pill/rounded">` — Used for setting the border radius of the child media

-   Returning Components with their associated updates

    -   Surfaces

        -   `Tile`

            -   Removed `<Tile.Container href="XXX">` / `<Tile.Container for="XXX">`
            -   Changed `<Tile.Heading>` -> `<Tile.Header>`
            -   Changed `<Tile.Body>` -> `<Tile.Section>`

## v0.2.0 - UNRELEASED

-   Refactor of codebase, transitioned to using WindiCSS underlying tokening framework

    -   Proper CSS Variable support for themeing coming at a later date
    -   Vanilla HTML / JS consumption no longer primary target
        -   Svelte support is now the primary target
        -   Kahi UI will continue to target CSS / HTML logic-first, using Svelte mainly for templating and progressive enhancement

-   Added typing support via TypeScript
-   UI and UX polish / refresh
-   Returning Components with their associated updates

    -   Display

        -   `Badge`

            -   Added `<Badge variation="outline">`
            -   Removed `<Badge size="XXX">`

    -   Feedback

        -   `Dot`
        -   `Spinner`

            -   A variation of `<Loader variation="wave">` will return in the future

    -   Interactables

        -   `Button`

    -   Layouts

        -   `Container`

            -   Changed to, by default, max width being the theme's prose limit (65ch default)
            -   Removed Viewport delimited `<Container viewport="XXX">` values

        -   `Divider`

            -   Added `<Divider orientation="vertical">`, for proper vertical Divider / Text Separator support

        -   `Grid`

            -   Added `<Grid spacing_x="XXX">` / `<Grid spacing_y="XXX">` for axis dependent spacing

        -   `Group`

            -   Changed `class="group"` -> `role="group"`

        -   `Mosaic`

            -   Added `<Mosaic spacing_x="XXX">` / `<Mosaic spacing_y="XXX">` for axis dependent spacing

        -   `Spacer`

            -   Added `<Spacer spacing_x="XXX">` / `<Spacing spacing_y="XXX">` for orientation dependent spacing
            -   Changed to aligning / justifying its self for stretching and flex grow, but no longer `100%` orientation
            -   Changed `<Spacer inline>` -> `<Spacer variation="inline">`

        -   `Stack`

    -   Navigation

        -   `Anchor`
        -   `Aside`

            -   Added `<Aside.Section>`, main content must be wrapped with this Component
            -   Added `<Aside.Footer>`, auxillery content in this Component gets pushed to the bottom of the `<Aside.Container>`
            -   Changed `<Aside.Heading>` -> `<Aside.Header>`

        -   `Breadcrumb`

            -   Added `<Breadcrumb.Container separator="string/SvelteComponent">` for customizing the automatic item separator contents
            -   Added `<Breadcrumb.Anchor download="XXX">`
            -   Changed `<Breadcrumb.Anchor current="XXX">` -> `<Breadcrumb.Anchor active="boolean">`

                -   None of the other ARIA `aria-current` values applied, so sets `aria-current` to `page`
                -   Also disables rendering of separator if `true`

            -   Removed `<Breadcrumb.Container level="XXX">`

        -   `Omni`

            -   Now responsive, turns `<Omni.Footer>` / `<Omni.Section>` into a toggleable vertical list overlay on mobile / tablet
            -   Added `<Omni.Container logic_id="XXX">`

                -   Creates a sibling `<input id="XXX" type="checkbox">` element for storing mobile / tablet overlay state
                -   Use `<Button for="XXX">` to call to it, or `<ContextButton>` if (nested) child of `Omni.Container`

            -   Changed `<Omni.Heading>` -> `<Omni.Header>`
            -   Changed `<Omni.Body>` -> `<Omni.Section>`
            -   Changed `<Omni.Footer>` to now be used for wrapping `<Omni.Section>` children

    -   Surfaces

        -   `Box`

            -   Removed `<Box href="XXX">` / `<Box for="XXX">`

        -   `Card`

            -   Removed `<Card.Container href="XXX">` / `<Card.Container for="XXX">`
            -   Changed `<Card.Heading>` -> `<Card.Header>`
            -   Changed `<Card.Body>` -> `<Card.Section>`

        -   `Hero`

            -   Removed `<Hero.Container size="XXX">`, now fulfilled by sizing utilities
            -   Changed `<Hero.Heading>` -> `<Hero.Header>`
            -   Changed `<Hero.Body>` -> `<Hero.Section>`

    -   Typography

        -   `Code`

            -   Added preformatted text block via `<Code is="pre">`
            -   Added `<Code palette="accent/dark/light/alert/affirmative/negative">` for subtle darker accenting on lighter background visuals
            -   Added `<Code size="tiny/small/medium/large/huge">` for changing font sizes

        -   `Heading`

            -   Added `<Heading align="center/justify/left/right">` for text alignment
            -   Added `<Heading transform="capitalize/lowercase/uppercase">` for text transformation
            -   Added `<Heading variation="truncate">` / `<Heading variation={["truncate"]}>` for truncating text via ellipis when clipping overflow bounds
            -   Changed heading level handling to `<Heading is="h1/h2/h3/h4/h5/h6">`

        -   `Text`

            -   Added `<Text align="center/justify/left/right">` for text alignment
            -   Added `<Text transform="capitalize/lowercase/uppercase">` for text transformation
            -   Added `<Text variation="truncate">` / `<Text variation={["truncate"]}>` for truncating text via ellipis when clipping overflow bounds
            -   Added `<Text size="tiny/small/medium/large/huge">` for changing font sizes
            -   Changed modifier handling to be accessed via `<Text is="XXX">`
                -   Available parameters: `"abbr", "b", "cite", "del", "em", "i", "ins", "kbd", "mark", "pre", "s", "samp", "small", "span", "strong", "sub", "sup", "u"`

    -   Utilities

        -   `ContextButton`

            -   Used in places where there would've been a multi-part Component contextual button, e.g. `<Dialog.Button>` -> `<ContextButton>`
            -   Same API as regular `Button`

        -   `Portal`

-   Added Stores / Contexts used by some Components for progressive enhancements

    -   `component(default_value: string | SvelteComponent): Writable<string | SvelteComponent>` / `get_component_context(): Writable<string | SvelteComponent>`

        -   Used for providing contextual access to setting a string or Component where there needs to be a global setting instead of individual option

            -   e.g. `<Breadcrumb.Item>` will read this from an `<Breadcrumb.Container>` to get the currently set separator

    -   `id(default_value: string): Writable<string>` / `get_id_context(): Writable<string>`

        -   Used for providing contextual ID caching, e.g. `<ContextButton>` will read this from an `<Omni.Container>` that sets this to a Svelte Context

-   Updated all Components with Viewport breakpoint delimited have the following changes

    -   Viewports are now semantically named, `tiny` -> `mobile`, `small` -> `tablet`, `medium` -> `desktop`, `large` -> `widescreen`
    -   Delimited values are now segmented by colon, `<Stack orientation="mobile+horizontal">` -> `<Stack orientation="mobile:horizontal">`
    -   Multi select is done by array now, instead of passing `<Stack orientation="mobile:horizontal desktop:horizontal">` -> `<Stack orientation={["mobile:horizontal", "desktop:horizontal"]}>`

-   Updated all Components now export a `element: HTMLElement` reference for DX accessibility

    -   Bind like you would do `<h1 bind:this={element}>` -> `<Heading bind:element>`

-   Added to all block / container Components now have access to the following utilities

    -   `(margin / padding)`, `(margin / padding)-x`, `(margin / padding)-y`, `(margin / padding)-top`, `(margin / padding)-left`, `(margin / padding)-bottom`, `(margin / padding)-right`

        -   Values are: `tiny`, `small`, `medium`, `large`, `huge`
        -   Can delimit by Viewport breakpoint: `<Box margin="tablet:huge">`
        -   Can multi select by passing in array: `<Box margin={["huge", "tablet:small"]}>`

    -   `height`, `max-height`, `min-height`, `width`, `max-width`, `min-width`

        -   Values are

            -   Parent % relative: `25`, `33`, `50`, `66` `75`, `100`
            -   Viewport % relative: `viewport-25`, `viewport-33`, `viewport-50`, `viewport-66` `viewport-75`, `viewport-100`
            -   Content relative: `auto`, `content-max`, `content-min`

        -   Can delimit by Viewport breakpoint: `<Box width="tablet:33">`
        -   Can multi select by passing in array: `<Box width={["33", "tablet:25"]}>`

-   Added to all inline / foreground Components have access to the following utilities

    -   `margin`, `margin-x`, `margin-y`, `margin-top`, `margin-left`, `margin-bottom`, `margin-right`

        -   Values are: `tiny`, `small`, `medium`, `large`, `huge`
        -   Can delimit by Viewport breakpoint: `<Heading margin="tablet:huge">`
        -   Can multi select by passing in array: `<Heading margin={["huge", "tablet:small"]}>`
