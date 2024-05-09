import { getAbsolutePath, getFileName, setFileName } from "../../src/index.mjs";


/* Expected cases */


test(
    `setFileName(".", "sample")`,
    () => {
        expect(
            setFileName(".", "sample")
        ).toBe(
            getAbsolutePath(
                ".",
                "sample"
            )
        );
    }
);


test(
    `setFileName(".", ".sample")`,
    () => {
        expect(
            setFileName(".", ".sample")
        ).toBe(
            getAbsolutePath(
                ".",
                ".sample"
            )
        );
    }
);


test(
    `setFileName(".", "sample.txt")`,
    () => {
        expect(
            setFileName(".", "sample.txt")
        ).toBe(
            getAbsolutePath(
                ".",
                "sample.txt"
            )
        );
    }
);


test(
    `setFileName(".", ".sample.png")`,
    () => {
        expect(
            setFileName(".", ".sample.png")
        ).toBe(
            getAbsolutePath(
                ".",
                ".sample.png"
            )
        );
    }
);


test(
    `setFileName(".", "sample.a.txt")`,
    () => {
        expect(
            setFileName(".", "sample.a.txt")
        ).toBe(
            getAbsolutePath(
                ".",
                "sample.a.txt"
            )
        );
    }
);


test(
    `setFileName("sample", "example.png")`,
    () => {
        expect(
            setFileName("sample", "example.png")
        ).toBe(
            getAbsolutePath(
                ".",
                "example.png"
            )
        );
    }
);


test(
    `setFileName(".sample", Example file.csv)`,
    () => {
        expect(
            setFileName(".sample", "Example file.csv")
        ).toBe(
            getAbsolutePath(
                ".",
                "Example file.csv"
            )
        );
    }
);


test(
    `setFileName("sample.txt", "sample.js")`,
    () => {
        expect(
            setFileName("sample.txt", "sample.js")
        ).toBe(
            getAbsolutePath(
                ".",
                "sample.js"
            )
        );
    }
);


test(
    `setFileName(".sample.txt", "Useful Script.cmd")`,
    () => {
        expect(
            setFileName(".sample.txt", "Useful Script.cmd")
        ).toBe(
            getAbsolutePath(
                ".",
                "Useful Script.cmd"
            )
        );
    }
);


test(
    `setFileName("sample file.a.txt", ".java")`,
    () => {
        expect(
            setFileName("sample file.a.txt", "Foo.java")
        ).toBe(
            getAbsolutePath(
                ".",
                "Foo.java"
            )
        );
    }
);


/* Edge cases */


test(
    `setFileName()`,
    () => {
        expect(
            setFileName()
        ).toBe(
            getAbsolutePath()
        );
    }
);


test(
    `setFileName('')`,
    () => {
        expect(
            setFileName('')
        ).toBe(
            getAbsolutePath()
        );
    }
);


/* Corner cases */


test(
    `setFileName(".")`,
    () => {
        expect(
            setFileName(".")
        ).toBe(
            getAbsolutePath(".")
        );
    }
);


test(
    `setFileName("..")`,
    () => {
        expect(
            setFileName("..")
        ).toBe(
            getAbsolutePath("..")
        );
    }
);


test(
    `setFileName("~")`,
    () => {
        expect(
            setFileName("~")
        ).toBe(
            getAbsolutePath("~")
        );
    }
);
