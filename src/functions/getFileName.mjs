import { default as pathlib } from "path";
import getAbsolutePath from "./getAbsolutePath.mjs";
import isDirectory from "./isDirectorySync.mjs";


/**
 * Get the file name of a path.
 *
 * @public
 * @since v0.1.1
 * @version 1.0.0-alpha
 *
 * @param {string} path
 * The path to get the file name of.
 * @returns
 * The file name of the path.
 */
export default function getFileName (path) {
    path ??= '';

    if (typeof path !== 'string') {
        path = path.toString();
    }

    path = getAbsolutePath(path);

    if (isDirectory(path)) {
        return '';
    }

    return pathlib.basename(path);
}
