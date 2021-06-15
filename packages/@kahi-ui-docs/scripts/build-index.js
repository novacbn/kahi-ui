import fs from "fs";
const {mkdir, writeFile} = fs.promises;

import fetch from "node-fetch";
import {stringify} from "@iarna/toml";

async function fetch_index() {
    const response = await fetch("http://localhost:3000/api/v1/meta/stork.json");
    const index = (await response.json()).data;

    return stringify(index);
}

await mkdir("./build/stork", {recursive: true});

const index = await fetch_index();
writeFile("./build/stork/index.toml", index);
