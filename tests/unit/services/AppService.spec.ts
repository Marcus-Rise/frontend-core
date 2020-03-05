import {container} from "@/services/serviceContainer";
import {AppService} from "@/services/implementations/AppService";

describe("AppService", () => {
    let service: AppService;

    beforeEach(() => {
        service = container.resolve(AppService);
    });

    test("constructor", () => {
        expect(service.apiDomain).toEqual("/");
        expect(service.isDevMode).toBeFalsy();
    });
});
