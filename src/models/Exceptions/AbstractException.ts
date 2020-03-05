export abstract class AbstractException extends Error {
    protected constructor(
        public readonly name: string,
        public readonly message: string,
    ) {
        super(message);
    }

    public toString(): string {
        return `${this.name}: ${this.message}`;
    }
}
