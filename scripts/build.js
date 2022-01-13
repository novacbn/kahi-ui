import {build_framework, build_theme} from "./esbuild.js";

await Promise.all([build_framework(), build_theme("default")]);
