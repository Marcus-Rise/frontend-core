import {Credentials} from "@/models/Credentials";
import {CredentialsDTO} from "@/models/CredentialsDTO";

describe("CredentialsDTO", () => {
    let dto: CredentialsDTO;
    let model: Credentials;

    describe("validation", () => {
        beforeEach(() => {
            model = new Credentials();
            dto = new CredentialsDTO(model);
        });

        test("login", () => {
            model = new Credentials();
            dto = new CredentialsDTO(model);
            dto.validate();
            expect(model.errors.login).toHaveLength(1);

            model = new Credentials();
            model.login = "awd";

            dto = new CredentialsDTO(model);
            dto.validate();
            expect(model.errors.login).toHaveLength(0);
        });

        test("password", () => {
            model = new Credentials();
            dto = new CredentialsDTO(model);
            dto.validate();
            expect(model.errors.password).toHaveLength(1);

            model = new Credentials();
            model.password = "awd";

            dto = new CredentialsDTO(model);
            dto.validate();
            expect(model.errors.password).toHaveLength(0);
        });
    });

    describe("serialization", () => {
        test("test", () => {
            model = new Credentials();
            dto = new CredentialsDTO(model);

            expect(dto.serialize()).toEqual({
                username: model.login,
                password: model.password,
            });
        });
    });
});
