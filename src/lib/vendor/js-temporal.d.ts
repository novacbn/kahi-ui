import {Temporal as _NamespaceTemporal, toTemporalInstant} from "@js-temporal/polyfill";

// HACK: At least with SvelteKit, `@js-temporal/polyfill/index.umd.js` was being served up in
// development server mode. So instead, we are vendoring the `@js-temporal/polyfill/index.js`
// build and monkeypatching it to export via ESM syntax

export namespace Temporal {
    export = _NamespaceTemporal;
}

export {toTemporalInstant};
