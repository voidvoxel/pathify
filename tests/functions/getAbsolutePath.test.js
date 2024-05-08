import { default as pathlib } from "path";


import { getAbsolutePath } from "../../src/index.mjs";
import { homedir } from "os";


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


test(
    `getAbsolutePath('')`,
    () => {
        expect(
            getAbsolutePath('')
        ).toBe(
            pathlib.resolve(
                process.cwd()
            )
        );
    }
);


test(
    `getAbsolutePath(".")`,
    () => {
        expect(
            getAbsolutePath(".")
        ).toBe(
            pathlib.resolve(
                process.cwd()
            )
        );
    }
);


test(
    `getAbsolutePath("..")`,
    () => {
        expect(
            getAbsolutePath("..")
        ).toBe(
            pathlib.resolve(
                pathlib.join(
                    ".."
                )
            )
        );
    }
);


test(
    `getAbsolutePath("~")`,
    () => {
        expect(
            getAbsolutePath("~")
        ).toBe(
            pathlib.resolve(
                homedir()
            )
        );
    }
);
