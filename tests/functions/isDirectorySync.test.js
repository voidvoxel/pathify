import { isDirectorySync } from "../../src/index.mjs";


/* Expected cases */


test(
    `isDirectorySync("sample")`,
    () => {
        expect(
            isDirectorySync("sample")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync(".sample")`,
    () => {
        expect(
            isDirectorySync(".sample")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync("sample.txt")`,
    () => {
        expect(
            isDirectorySync("sample.txt")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync(".sample.txt")`,
    () => {
        expect(
            isDirectorySync(".sample.txt")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync("sample.a.txt")`,
    () => {
        expect(
            isDirectorySync("sample.a.txt")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync("./sample.json")`,
    () => {
        expect(
            isDirectorySync("./sample.json")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync("../Foo.cs")`,
    () => {
        expect(
            isDirectorySync("../Foo.cs")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync("~/Bar.java")`,
    () => {
        expect(
            isDirectorySync("~/Bar.java")
        ).toBe(
            false
        );
    }
);


/* Edge cases */


test(
    `isDirectorySync()`,
    () => {
        expect(
            isDirectorySync()
        ).toBe(
            true
        );
    }
);


test(
    `isDirectorySync('')`,
    () => {
        expect(
            isDirectorySync('')
        ).toBe(
            true
        );
    }
);


test(
    `isDirectorySync("~/Bar.java")`,
    () => {
        expect(
            isDirectorySync("~/Bar.java")
        ).toBe(
            false
        );
    }
);


test(
    `isDirectorySync("~/Documents/Some file.csv")`,
    () => {
        expect(
            isDirectorySync("~/Documents/Some file.csv")
        ).toBe(
            false
        );
    }
);


/* Corner cases */


test(
    `isDirectorySync(".")`,
    () => {
        expect(
            isDirectorySync(".")
        ).toBe(
            true
        );
    }
);


test(
    `isDirectorySync("..")`,
    () => {
        expect(
            isDirectorySync("..")
        ).toBe(
            true
        );
    }
);


test(
    `isDirectorySync("~")`,
    () => {
        expect(
            isDirectorySync("~")
        ).toBe(
            true
        );
    }
);
