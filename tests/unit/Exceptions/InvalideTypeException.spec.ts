import { InvalideTypeException } from "@/models/Exceptions";

describe("constructor", () => {
    let exception: InvalideTypeException;

    test("default", () => {
        exception = new InvalideTypeException();

        expect(exception.name).toEqual("Invalid type exception");
        expect(exception.message).toEqual("");
    });

    test("params", () => {
        exception = new InvalideTypeException("test error");

        expect(exception.name).toEqual("Invalid type exception");
        expect(exception.message).toEqual("test error");
    });
});
