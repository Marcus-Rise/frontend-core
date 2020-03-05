import {DateCustom} from "@/models/DateCustom";

describe("DateCustom", () => {
    test("constructor", () => {
        expect(new DateCustom("10.11.2011").year).toEqual(2011);
    })
});
