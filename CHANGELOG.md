# CHANGELOG

## v0.2.13 -

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
