import {AbstractException} from "@/models/Exceptions/AbstractException";

export class InvalidArgumentException extends AbstractException {
    constructor(public readonly message: string = "") {
        super("Invalid argument exception", message);
    }
}
