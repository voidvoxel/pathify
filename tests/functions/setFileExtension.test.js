import { setFileExtension } from "../../src/index.mjs";


/* Expected cases */


test(
    `setFileExtension("sample")`,
    () => {
        expect(
            setFileExtension("sample")
        ).toBe(
            "sample"
        );
    }
);


test(
    `setFileExtension(".sample")`,
    () => {
        expect(
            setFileExtension(".sample")
        ).toBe(
            ".sample"
        );
    }
);


test(
    `setFileExtension("sample.txt")`,
    () => {
        expect(
            setFileExtension("sample.txt")
        ).toBe(
            "sample"
        );
    }
);


test(
    `setFileExtension(".sample.txt")`,
    () => {
        expect(
            setFileExtension(".sample.txt")
        ).toBe(
            ".sample"
        );
    }
);


test(
    `setFileExtension("sample.a.txt")`,
    () => {
        expect(
            setFileExtension("sample.a.txt")
        ).toBe(
            "sample.a"
        );
    }
);


test(
    `setFileExtension("sample", ".txt")`,
    () => {
        expect(
            setFileExtension("sample", ".txt")
        ).toBe(
            "sample.txt"
        );
    }
);


test(
    `setFileExtension(".sample", ".js")`,
    () => {
        expect(
            setFileExtension(".sample", ".js")
        ).toBe(
            ".sample.js"
        );
    }
);


test(
    `setFileExtension("sample.txt", ".js")`,
    () => {
        expect(
            setFileExtension("sample.txt", ".js")
        ).toBe(
            "sample.js"
        );
    }
);


test(
    `setFileExtension(".sample.txt", ".cmd")`,
    () => {
        expect(
            setFileExtension(".sample.txt", ".cmd")
        ).toBe(
            ".sample.cmd"
        );
    }
);


test(
    `setFileExtension("sample.a.txt", ".java")`,
    () => {
        expect(
            setFileExtension("sample.a.txt", ".java")
        ).toBe(
            "sample.a.java"
        );
    }
);


/* Edge cases */


test(
    `setFileExtension()`,
    () => {
        expect(
            setFileExtension()
        ).toBe(
            ''
        );
    }
);


test(
    `setFileExtension('')`,
    () => {
        expect(
            setFileExtension('')
        ).toBe(
            ''
        );
    }
);


/* Corner cases */


test(
    `setFileExtension(".")`,
    () => {
        expect(
            setFileExtension(".")
        ).toBe(
            '.'
        );
    }
);


test(
    `setFileExtension("..")`,
    () => {
        expect(
            setFileExtension("..")
        ).toBe(
            '..'
        );
    }
);


test(
    `setFileExtension("~")`,
    () => {
        expect(
            setFileExtension("~")
        ).toBe(
            '~'
        );
    }
);
