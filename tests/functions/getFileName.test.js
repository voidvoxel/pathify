import { getFileName } from "../../src/index.mjs";


/* Expected cases */


test(
    `getFileName("sample")`,
    () => {
        expect(
            getFileName("sample")
        ).toBe(
            "sample"
        );
    }
);


test(
    `getFileName(".sample")`,
    () => {
        expect(
            getFileName(".sample")
        ).toBe(
            ".sample"
        );
    }
);


test(
    `getFileName("sample.txt")`,
    () => {
        expect(
            getFileName("sample.txt")
        ).toBe(
            "sample.txt"
        );
    }
);


test(
    `getFileName(".sample.txt")`,
    () => {
        expect(
            getFileName(".sample.txt")
        ).toBe(
            ".sample.txt"
        );
    }
);


test(
    `getFileName("sample.a.txt")`,
    () => {
        expect(
            getFileName("sample.a.txt")
        ).toBe(
            "sample.a.txt"
        );
    }
);


test(
    `getFileName("./sample.json")`,
    () => {
        expect(
            getFileName("./sample.json")
        ).toBe(
            'sample.json'
        );
    }
);


test(
    `getFileName("../Foo.cs")`,
    () => {
        expect(
            getFileName("../Foo.cs")
        ).toBe(
            'Foo.cs'
        );
    }
);


test(
    `getFileName("~/Bar.java")`,
    () => {
        expect(
            getFileName("~/Bar.java")
        ).toBe(
            'Bar.java'
        );
    }
);


/* Edge cases */


test(
    `getFileName()`,
    () => {
        expect(
            getFileName()
        ).toBe(
            ''
        );
    }
);


test(
    `getFileName('')`,
    () => {
        expect(
            getFileName('')
        ).toBe(
            ''
        );
    }
);


test(
    `getFileName("~/Bar.java")`,
    () => {
        expect(
            getFileName("~/Bar.java")
        ).toBe(
            'Bar.java'
        );
    }
);


test(
    `getFileName("~/Documents/Some file.csv")`,
    () => {
        expect(
            getFileName("~/Documents/Some file.csv")
        ).toBe(
            'Some file.csv'
        );
    }
);


/* Corner cases */


test(
    `getFileName(".")`,
    () => {
        expect(
            getFileName(".")
        ).toBe(
            ''
        );
    }
);


test(
    `getFileName("..")`,
    () => {
        expect(
            getFileName("..")
        ).toBe(
            ''
        );
    }
);


test(
    `getFileName("~")`,
    () => {
        expect(
            getFileName("~")
        ).toBe(
            ''
        );
    }
);
