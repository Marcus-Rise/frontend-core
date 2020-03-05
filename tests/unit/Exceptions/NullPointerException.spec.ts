import { NullPointerException } from "@/models/Exceptions";

describe("constructor", () => {
    let exception: NullPointerException;

    test("default", () => {
        exception = new NullPointerException();

        expect(exception.name).toEqual("Null pointer exception");
        expect(exception.message).toEqual("");
    });

    test("params", () => {
        exception = new NullPointerException("test error");

        expect(exception.name).toEqual("Null pointer exception");
        expect(exception.message).toEqual("test error");
    });
});
