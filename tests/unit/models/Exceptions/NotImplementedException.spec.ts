import {NotImplementedException} from "@/models/Exceptions";

describe("NotImplementedException", () => {
   test("constructor", () => {
     expect(new NotImplementedException("a").toString()).toEqual("Not implemented: a")
   });
});
