import {IAppService} from "@/services/IAppService";
import {singleton} from "tsyringe";

/**
 * @description хранит настройки и переменные окружения
 */
@singleton()
export class AppService implements IAppService {
    get isDevMode(): boolean {
        return this._env === "development";
    }

    public readonly apiDomain: string;

    private readonly _env: string;

    constructor() {
        this._env = process.env.NODE_ENV as string;

        this.apiDomain = process.env.API_BASE_URL as string || `/`;
    }
}
