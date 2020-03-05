import {IAuthCredentials, IAuthService} from "@/services/IAuthService";
import {inject, injectable} from "tsyringe";
import {IStorageService} from "@/services/IStorageService";

const TOKEN_STORE_KEY = "token";
const REFRESH_TOKEN_STORE_KEY = "refresh_token";

@injectable()
export class AuthService implements IAuthService {
    get isAuth(): boolean {
        return !!this.token;
    }

    get token(): string | null {
        return this.storageService.get(TOKEN_STORE_KEY);
    }

    get refreshToken(): string | null {
        return this.storageService.get(REFRESH_TOKEN_STORE_KEY);
    }

    set token(val) {
        if (!!val) {
            this.storageService.set(TOKEN_STORE_KEY, val);
        } else {
            this.storageService.delete(TOKEN_STORE_KEY);
        }
    }

    set refreshToken(val) {
        if (!!val) {
            this.storageService.set(REFRESH_TOKEN_STORE_KEY, val);
        } else {
            this.storageService.delete(REFRESH_TOKEN_STORE_KEY);
        }
    }

    constructor(
        @inject("IAuthStorageService")
        private readonly storageService: IStorageService,
    ) {
    }

    public login(credentials: IAuthCredentials): void {
        this.token = credentials.token;
        this.refreshToken = credentials.refreshToken;
    }

    public logout(): void {
        this.token = null;
        this.refreshToken = null;

        document.dispatchEvent(new CustomEvent("logout"));
    }
}
