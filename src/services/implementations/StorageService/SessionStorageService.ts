import {ISessionStorageService} from "@/services/ISessionStorageService";

export class SessionStorageService implements ISessionStorageService {
    public delete(key: string): void {
        sessionStorage.removeItem(key);
    }

    public get(key: string): string | null {
        return sessionStorage.getItem(key) || null;
    }

    public set(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    public clear(): void {
        sessionStorage.clear();
    }
}
