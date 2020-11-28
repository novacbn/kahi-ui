import {Button} from "@kahi-ui/svelte";
import {pipeline_svelte} from "svelte-pipeline";

const PIPELINE_KAHI_CONTEXT = {
    Button,
};

export function pipeline() {
    return pipeline_svelte({
        context: PIPELINE_KAHI_CONTEXT,
    });
}
