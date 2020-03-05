import {AbstractException} from "@/models/Exceptions/AbstractException";

export class UnAuthorizedException extends AbstractException {
    constructor(public readonly message: string) {
        super("User in unauthorized", message);
    }
}
