import {AbstractException} from "@/models/Exceptions/AbstractException";

export class NotImplementedException extends AbstractException {
    constructor(public readonly message: string = "") {
        super("Not implemented", message);
    }
}
