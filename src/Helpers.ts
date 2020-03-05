export class Helpers {
    public static pause(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

