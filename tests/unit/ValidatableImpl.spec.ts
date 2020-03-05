import { AbstractValidatable, ValidationErrorsObject } from "@/models/AbstractValidatable";

class ValidatableImpl extends AbstractValidatable {
    public errors: ValidationErrorsObject<{
        test: string[];
        test2: string[];
    }>;

    constructor() {
        super();

        this.errors = {
            test: [],
            test2: [],
        };
    }
}

describe("AbstractValidatable", () => {
    let model: ValidatableImpl;

    beforeEach(() => {
        model = new ValidatableImpl();
    });

    describe("allErrors", () => {
        test("errors", () => {

            model.errors.test = ["awd"];
            model.errors.test2 = ["awd"];

            expect(model.allErrors).toEqual(["awd", "awd"]);
        });
    });

    describe("clear", () => {
        test("test", () => {
            model.errors.test = ["awd"];
            model.errors.test2 = ["awd"];

            model.clear();

            expect(model.isValid).toBeTruthy();
        });
    });
});
