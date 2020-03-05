import {AbstractDTO, ValidationRuleResult} from "@/models/AbstractDTO";
import {Credentials} from "@/models/Credentials";

export class CredentialsDTO extends AbstractDTO {
    constructor(protected readonly model: Credentials) {
        super();

        this.rules = {
            login: (): ValidationRuleResult => {
                if (!this.model.login) {
                    model.errors.login = ["Проверьте логин"];
                }

                return !!this.model.login;
            },
            password: (): ValidationRuleResult => {
                if (!this.model.password) {
                    model.errors.password = ["Проверьте пароль"];
                }

                return !!this.model.password;
            },
        };
    }

    public serialize(): ICredentialsDTOJson {
        return {
            username: this.model.login,
            password: this.model.password,
        };
    }

}

export interface ICredentialsDTOJson {
    password: string;
    username: string;
}
