import {readFileSync} from "fs";

export const PACKAGE = JSON.parse(readFileSync("../../package.json").toString());
