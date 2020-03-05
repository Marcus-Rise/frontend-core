import {IHttpService} from "@/services/IHttpService";
import axios, {AxiosInstance} from "axios";
import {inject, injectable} from "tsyringe";
import {IAuthService} from "@/services/IAuthService";
import {IAppService} from "@/services/IAppService";

@injectable()
export class HttpService implements IHttpService {
    public api: AxiosInstance;

    constructor(
        @inject("IAuthService")
        protected readonly appService: IAppService,
    ) {
        this.api = axios.create({
            baseURL: this.appService.apiDomain,
        });
    }
}
