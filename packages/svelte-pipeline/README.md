# svelte-pipeline

## Description

Provides custom Javascript contexts and the Svelte Compiler as Svelte Stores, for REPLs, Editors, etc.

> **NOTE**: As this package includes the Svelte Compiler as a dependency, it seriously balloons the size of the distributables and bundles.

## Sample

### Javascript

```javascript
import {pipeline_javascript} from "svelte-pipeline";

function add(a, b) {
    return a + b;
}

// `svelte-pipeline` allows us to define custom globals for scripts to access
const CONTEXT = {
    add: add,
};

// `svelte-pipeline` also allows us to define an import map so scripts can import via `require`
const IMPORTS = {
    mymath: {
        add: add,
    },
};

// Here we can define the script source code we want to pass through the pipeline
const SCRIPT = `// First, we need to import our custom import
const mymath = require("mymath");

// Next, use the exposed context and export the sum
exports.sum = add(1, 2);

// Then, use the imported module to also export a sum
exports.sum_import = mymath.add(2, 2);`;

// Finally, we can use all the options we defined to create our pipeline as a Svelte Store
const store_javascript = pipeline_javascript({
    // Pass in our custom globals
    context: CONTEXT,

    // And pass in our custom import map
    imports: IMPORTS,
});

// Next we can listen for everytime our script is passed through the pipeline
store_javascript.subscribe((result) => {
    if (result.type === PIPELINE_RESULT_TYPES.error) {
        // If we get the result and it turns out to be an error, we always get
        // back a descriptive error from the Javascript environment / Svelte Compiler
        console.log(result.message);
        return;
    }

    // Whenever the pipeline had a successful result, we can get the resulting module context
    const {module} = result;

    // And then of course, we can also access the exported members of the script
    const {sum, sum_import} = module.exports;
    console.log({sum, sum_import}); // prints `{sum: 3, sum_import: 4}`
});

// And finally, to pass our script into the pipeline. We just set the value like any other Svelte Store
store_javascript.set(SCRIPT);
```

### Svelte

```javascript
import {pipeline_svelte} from "svelte-pipeline";

// First we need to define the Svelte Component source code we want to pass through the pipeline
const COMPONENT = `<script>
    export let count = 0;

    function on_click(event) {
        count += 1;
    }
</script>

<h1>Count: {count}</h1>
<button on:click={on_click}>Add +1</button>`;

// Just like the Javascript sample, we can pass in all the sample configuration options
const store_svelte = pipeline_svelte({
    compiler: {
        // We can also use the `.compiler` member to pass options into the Svelte Compiler
        // See `svelte.compile` options at: https://svelte.dev/docs#svelte_compile
    },
});

store_svelte.subscribe((result) => {
    if (result.type === PIPELINE_RESULT_TYPES.error) {
        console.log(result.message);
        return;
    }

    // Unlike the Javascript pipeline however, successful Svelte pipeline results have the
    // compiled Svelte Components export to `module.exports.default`
    const {module} = result;
    const Component = module.exports.default;

    // Which we can use programatically like any other Svelte Component
    const component = new Component({
        target: document.body,
        props: {
            count: "42",
        },
    });

    // If available, successful Svelte results also supply their compiled CSS Stylesheets
    if (result.stylesheet) {
        const stylesheet = document.createElement("style");
        stylesheet.innerText = result.stylesheet;

        document.head.appendChild(stylesheet);
    }
});

// And same as Javascript sample, we just set the Svelte Store
store_svelte.set(COMPONENT);
```

## Developer

### Installation

Open your terminal and install via `npm`:

```sh
~~NOT AVAILABLE YET~~
```

Install current in-development code:

```sh
~~NOT AVAILABLE YET~~
```

### Documentation

See TypeDoc documentation at ~~NOT AVAILABLE YET~~

### API

-   Stores

    -   `pipeline_javascript`
    -   `pipeline_svelte`

-   Enumerations

    -   `PIPELINE_RESULT_TYPES`

-   Functions

    -   `evaluate_code`
    -   `make_require`
    -   `validate_code`
