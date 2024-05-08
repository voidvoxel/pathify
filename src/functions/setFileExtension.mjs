import { default as pathlib } from "path";


import replaceEnd from "replace-end";
import getFileExtension from "./getFileExtension.mjs";


/**
 * Get the file extension of a path.
 *
 * @public
 * @since v0.1.1
 * @version 1.0.0-alpha
 *
 * @param {string} path
 * The path to get the file extension of.
 * @returns
 * The file extension of the path.
 */
export default function setFileExtension (
    path,
    extension
) {
    path ??= '';

    if (typeof path !== 'string') {
        path = path.toString();
    }

    extension ??= '';

    if (typeof extension !== 'string') {
        extension = extension.toString();
    }

    const oldExtension = getFileExtension(path);

    if (!oldExtension || oldExtension === '') {
        return path + extension;
    }

    return replaceEnd(
        path,
        pathlib.extname(path),
        extension
    );
}
