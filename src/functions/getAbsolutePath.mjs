import pathabs from "pathabs";


/**
 * Join a list of paths and then resolve the resulting path.
 *
 * @public
 * @since v0.1.0
 * @version 1.0.0-alpha
 *
 * @param  {...string} paths
 * A list of paths to join into an absolute path.
 * @returns {string}
 * The resolved path.
 */
export default function getAbsolutePath (
    ...paths
) {
    return pathabs(...paths);
}
