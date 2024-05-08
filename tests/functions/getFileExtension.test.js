import { default as pathlib } from "path";


import { getFileExtension } from "../../src/index.mjs";


/* Expected cases */


test(
    `getFileExtension("sample")`,
    () => {
        expect(
            getFileExtension("sample")
        ).toBe(
            ''
        );
    }
);


test(
    `getFileExtension(".sample")`,
    () => {
        expect(
            getFileExtension(".sample")
        ).toBe(
            ''
        );
    }
);


test(
    `getFileExtension("sample.txt")`,
    () => {
        expect(
            getFileExtension("sample.txt")
        ).toBe(
            ".txt"
        );
    }
);


test(
    `getFileExtension(".sample.txt")`,
    () => {
        expect(
            getFileExtension(".sample.txt")
        ).toBe(
            ".txt"
        );
    }
);


test(
    `getFileExtension("sample.a.txt")`,
    () => {
        expect(
            getFileExtension("sample.a.txt")
        ).toBe(
            ".txt"
        );
    }
);


/* Edge cases */


test(
    `getFileExtension()`,
    () => {
        expect(
            getFileExtension()
        ).toBe(
            ''
        );
    }
);


test(
    `getFileExtension('')`,
    () => {
        expect(
            getFileExtension('')
        ).toBe(
            ''
        );
    }
);


/* Corner cases */


test(
    `getFileExtension(".")`,
    () => {
        expect(
            getFileExtension(".")
        ).toBe(
            ''
        );
    }
);


test(
    `getFileExtension("..")`,
    () => {
        expect(
            getFileExtension("..")
        ).toBe(
            ''
        );
    }
);


test(
    `getFileExtension("~")`,
    () => {
        expect(
            getFileExtension("~")
        ).toBe(
            ''
        );
    }
);
