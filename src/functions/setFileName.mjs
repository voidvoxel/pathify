import { default as pathlib } from "path";


import replaceEnd from "replace-end";


import getAbsolutePath from "./getAbsolutePath.mjs";
import isDirectory from "./isDirectorySync.mjs";
import getFileName from "./getFileName.mjs";


/**
 * Set the file name of a path.
 *
 * @public
 * @since v0.1.5
 * @version 1.0.0-alpha
 *
 * @param {string} path
 * The path to get the file name of.
 * @returns
 * The file name of the path.
 */
export default function setFileName (
    path,
    fileName
) {
    path ??= '';

    if (typeof path !== 'string') {
        path = path.toString();
    }

    path = getAbsolutePath(path);

    fileName ??= '';

    if (typeof fileName !== 'string') {
        fileName = fileName.toString();
    }

    if (isDirectory(path)) {
        if (!fileName) {
            return path;
        }

        return getAbsolutePath(
            path,
            fileName
        );
    }

    const originalFileName = getFileName(path);

    if (
        !originalFileName
            || originalFileName === ''
    ) {
        return getAbsolutePath(
            path,
            fileName
        );
    }

    return replaceEnd(
        path,
        originalFileName,
        fileName
    );
}
