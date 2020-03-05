import {IDictionary} from "@/models/IDictionary";
import {TypedDictionaryType} from "@/models/TypedDictionaryType";

export abstract class AbstractValidatable {
    get allErrors(): string[] {
        const errors: string[] = [];

        for (const key in this.errors) {
            if (this.errors.hasOwnProperty(key)) {
                errors.push(...this.errors[key]);
            }
        }

        return errors;
    }

    get isValid(): boolean {
        return Object.values(this.errors).flat().length === 0;
    }

    public abstract errors: ValidationErrorsObject<{}>;

    public clear(): void {
        for (const error in this.errors) {
            if (this.errors.hasOwnProperty(error)) {
                this.errors[error] = [];
            }
        }
    }
}

export type ValidationErrorsObject<T extends ValidationError> = TypedDictionaryType<string[], T>;

type ValidationError = IDictionary<string[]>;

