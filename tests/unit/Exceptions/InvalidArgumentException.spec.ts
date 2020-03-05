import { InvalidArgumentException } from "@/models/Exceptions";

describe("InvalidArgumentException", () => {
    let exception: InvalidArgumentException;

    describe("constructor", () => {
        test("default", () => {
            exception = new InvalidArgumentException();

            expect(exception.name).toEqual("Invalid argument exception");
            expect(exception.message).toEqual("");
        });

        test("params", () => {
            exception = new InvalidArgumentException("test error");

            expect(exception.name).toEqual("Invalid argument exception");
            expect(exception.message).toEqual("test error");
        });
    });

    describe("to string", () => {
        test("default", () => {
            exception = new InvalidArgumentException();

            expect(exception.toString()).toEqual("Invalid argument exception: ");
        });

        test("params", () => {
            exception = new InvalidArgumentException("test error");

            expect(exception.toString()).toEqual("Invalid argument exception: test error");
        });
    });
});
