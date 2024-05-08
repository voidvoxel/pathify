import { existsSync, lstatSync } from "fs";
import getAbsolutePath from "./getAbsolutePath.mjs";


export default function isDirectorySync (
    path
) {
    path = getAbsolutePath(path);

    if (!existsSync(path)) {
        return false;
    }

    return lstatSync(path).isDirectory();
}
