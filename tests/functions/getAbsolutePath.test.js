import { default as pathlib } from "path";


import { getAbsolutePath } from "../../src/index.mjs";


test(
    `getAbsolutePath()`,
    () => {
        expect(
            getAbsolutePath()
        ).toBe(
            pathlib.resolve(
                process.cwd()
            )
        );
    }
);
