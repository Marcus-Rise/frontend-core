import {container} from "@/services/serviceContainer";
import {AuthService} from "@/services/implementations/AuthService";

describe("AuthService", () => {
    let service: AuthService;

    beforeEach(() => {
        service = container.resolve(AuthService);
    });

    describe("isAuth", () => {
        test("all exists", () => {
            service.login({
                token: "a",
                refreshToken: "w",
            });

            expect(service.isAuth).toBeTruthy();
        });

        test("token is null", () => {
            service.login({
                token: "",
                refreshToken: "w",
            });

            expect(service.isAuth).toBeFalsy();
        });

        test("refreshToken is null", () => {
            service.login({
                token: "awd",
                refreshToken: "",
            });

            expect(service.isAuth).toBeTruthy();
        });

        test("all is null", () => {
            service.login({
                token: "",
                refreshToken: "",
            });

            expect(service.isAuth).toBeFalsy();
        });
    });

    test("logout", () => {
        service.login( {
            token: "aw",
            refreshToken: "aaw",
        });

        service.logout();

        expect(service.token).toBeNull();
        expect(service.refreshToken).toBeNull();
    });

    describe("credentials", () => {
        test("storage", () => {
            service.login( {
                token: "a",
                refreshToken: "b",
            });

            expect(service.token).toEqual("a");
            expect(service.refreshToken).toEqual("b");

            service.logout();

            expect(service.token).toBeNull();
            expect(service.refreshToken).toBeNull();
        });
    });
});
