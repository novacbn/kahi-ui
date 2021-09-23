# Contributing to Kahi UI

> **IMPORTANT**: Before creating Pull Requests, search both the existing [issues](https://github.com/novacbn/kahi-ui/issues) and [Pull Requests](https://github.com/novacbn/kahi-ui/pulls). Otherwise your contributions might be declined.

> **IMPORTANT**: Before creating Pull Requests, it's recommended to [file a new issue](https://github.com/novacbn/kahi-ui/issues/new/choose) to discuss your changes. Especially if it's something bigger than a quick fix change.

## Prerequisites

-   Node.js — `>= 16.0.0`

## Kahi UI

### Cloning

[Fork the repository](https://github.com/novacbn/kahi-ui/fork) and then clone the fork in a terminal:

```bash
git clone <https://github.com/yourname/yourfork>
cd ./kahi-ui
```

Then create a feature branch:

```bash
git checkout -b your-feature-branch
```

### Installation

Install the dependencies via `npm`:

```bash
npm ci
```

### Workflow

> **NOTE**: Due to Vite integration, you might have to reload the Browser page / restart the development server on first load.

While editing the codebase, you can live view your changes using the Storybook. Open a terminal and start the development server:

```bash
npm run dev:storybook
```

Once running, open your Browser to [`localhost:6006`](http://localhost:6006).

### Building

If wanting to test your changes against the building process or use the local package elsewhere, run `npm run build`. Which will run through these sub commands in order:

-   `npm run build`

    -   `npm run build:lib` — Runs [`svelte-kit package`](https://kit.svelte.dev/docs#command-line-interface-svelte-kit-package). Which transpiles the codebase `TypeScript` -> `Javascript`, and make it NPM publishable under `/package`.
    -   `npm run build:framework` — Runs [PostCSS](https://github.com/postcss/postcss) configured w/ [WindiCSS](https://github.com/windicss/windicss) and other plugins. Which transpiles the CSS portion of the codebase into a single distributable `/package/kahi-ui.framework.css`.
    -   `npm run build:minify` — Runs [esbuild](https://github.com/evanw/esbuild) to minify `/package/kahi-ui.framework.css` -> `/package/kahi-ui.framework.min.css`.

### Watching

If you're editing the CSS portion of the codebase, it's recommended to run `npm run watch:framework`. It's the same as `npm run build:framework` but listens for changes.

### Component Layout

Components should have the following directory structure:

```bash
src/lib/components/:category/:component
│
└───:component.css // CSS Styling for Component
└───:component.theme.css // Default Theme Variables for Component
└───:Component.svelte // Component Implementation
└───:Component.stories.svelte // Storybook Tests
└───index.ts // Exports Entry Point
```

If you're working with a singular Component, it might look like this:

```bash
src/lib/components/surfaces/box
│
└───box.css
└───box.theme.css
└───Box.stories.svelte
└───Box.svelte
└───index.ts
```

Or, if the Component is a multi-part pattern, it also might look like this:

```bash
src/lib/components/surfaces/card
│
└───card.css
└───Card.stories.svelte
└───CardContainer.svelte
└───CardFigure.svelte
└───CardFooter.svelte
└───CardHeader.svelte
└───CardSection.svelte
└───index.ts
```

### Component CSS Theming Variables

When creating / modifying [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for theming Components, make sure to follow the following format for naming:

```css
--[component]-[pattern?]-[variation?]-[state?]-[declaration]: ...;
```

Which can be broken down into:

-   `component` — Name of the Component.
-   `pattern?` — Nested pattern Component, if applicable. e.g. `--card-section`
-   `variation?` — Variation of the Component, if applicable. e.g. `--button-clear`, `--button-outline`, `--card-flush`
-   `state?` — State of the Component, if applicable. e.g. `--anchor-hover`, `--anchor-active`, or if composite state, `--button-pressed`
-   `declaration` — Generally this is the CSS declaration being applied. e.g. `--badge-font-size`

### Actions Layout

Actions should have the following directory structure:

```bash
src/lib/actions/:action
│
└───:action.stories.svelte // Storybook Tests
└───:action.ts // Action Implementation
```

Your Action should look like this:

```bash
src/lib/actions/keybind
│
└───keybind.stories.svelte
└───keybind.ts
```

### Store Layout

Stores should have the following directory structure:

```bash
src/lib/stores/:store
│
└───:store.stories.svelte // Storybook Tests
└───:store.ts // Store Implementation
```

Your Store should look like this:

```bash
src/lib/stores/darkmode
│
└───darkmode.stories.svelte
└───darkmode.ts
```

### Submitting Changes

After you finish making / testing out your changes, [file a new Pull Request](https://github.com/novacbn/kahi-ui/compare). Check the following checklist of stuff you need:

-   Include a properly formatted changelog in the body of your PR.
-   Update [`CHANGELOG.md`](./CHANGELOG.md) with your changelog under the "UNRELEASED" header at the top.

## Documentation

...

## Code Formatting

Both projects are using [Prettier](https://prettier.io/) for formatting code, which you can [`see the .prettierrc here`](./.prettierrc). It is recommended to configure your IDE to run formatting on file save.

## Code Style

When editing the codebase keep these guidelines in mind:

-   Identation: 4 Spaces
-   Constants: `UPPER_SNAKE_CASE`
-   Classes: `PascalCase`
-   Class Members: `snake_case`
-   Functions: `snake_case`
-   HTML Attributes / Elements: `kebab-case`
-   Functions: `snake_case`
-   Svelte Actions: `snake_case`
-   Svelte Components: `PascalCase`
-   Svelte Component Properties: `snake_case`
-   Svelte Stores: `flatcase`
