<script>
    import Code from "../Code.svelte";

</script>

<!-- prettier-ignore -->
<Code {...$$props} is="pre">
import math from "a-math-library";

const result = math.add(1, 1);
console.log("Our value is:", result);
</Code>
