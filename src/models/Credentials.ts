import {AbstractValidatable, ValidationErrorsObject} from "@/models/AbstractValidatable";

export class Credentials extends AbstractValidatable {
    public readonly errors: ValidationErrorsObject<{
        login: string[];
        password: string[];
    }>;

    public login: string;
    public password: string;

    constructor(login?: string, password?: string) {
        super();

        this.login = login || "";
        this.password = password || "";

        this.errors = {
            login: [],
            password: [],
        };
    }
}
