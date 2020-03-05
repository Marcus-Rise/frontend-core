import {ILocalStorageService} from "@/services/ILocalStorageService";

export class LocalStorageService implements ILocalStorageService {
    public set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public get(key: string): string | null {
        return localStorage.getItem(key) || null;
    }

    public delete(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
