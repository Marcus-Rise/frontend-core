import {AbstractException} from "@/models/Exceptions/AbstractException";

export class InvalideTypeException extends AbstractException {
    constructor(public readonly message: string = "") {
        super("Invalid type exception", message);
    }
}
