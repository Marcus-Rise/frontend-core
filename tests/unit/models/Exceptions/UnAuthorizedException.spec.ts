import {UnAuthorizedException} from "@/models/Exceptions";

describe("UnAuthorizedException", () => {
   test("constructor", () => {
     expect(new UnAuthorizedException("a").toString()).toEqual("User in unauthorized: a")
   });
});
