import { default as pathlib } from "path";


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
export default function getFileExtension (path) {
    path ??= '';

    if (typeof path !== 'string') {
        path = path.toString();
    }

    return pathlib.extname(path);
}
