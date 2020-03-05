import "reflect-metadata";
import {container} from "tsyringe";
import {IAppService} from "@/services/IAppService";
import {AppService} from "@/services/implementations/AppService";
import {ILoggerService} from "@/services/ILoggerService";
import {LoggerService} from "@/services/implementations/LoggerService";
import {CookiesService, LocalStorageService, SessionStorageService} from "@/services/implementations/StorageService";
import {AuthService} from "@/services/implementations/AuthService";
import {HttpService} from "@/services/implementations/HttpService";
import {UserService} from "@/services/implementations/UserService";
import {ICookiesService} from "@/services/ICookiesService";
import {ISessionStorageService} from "@/services/ISessionStorageService";
import {ILocalStorageService} from "@/services/ILocalStorageService";
import {IAuthService} from "@/services/IAuthService";
import {IUserService} from "@/services/IUserService";
import {IHttpService} from "@/services/IHttpService";
import {IStorageService} from "@/services/IStorageService";

container
    .registerSingleton<IAppService>("IAppService", AppService)
    .register<ILoggerService>("ILoggerService", LoggerService)
    .register<ICookiesService>("ICookiesService", CookiesService)
    .register<ISessionStorageService>("ISessionStorageService", SessionStorageService)
    .register<ILocalStorageService>("ILocalStorageService", LocalStorageService)
    .register<ISessionStorageService>("ISessionStorageService", SessionStorageService)
    .register<IStorageService>("IAuthStorageService", SessionStorageService)
    .register<IAuthService>("IAuthService", AuthService)
    .register<IUserService>("IUserService", UserService)
    .register<IHttpService>("IHttpService", HttpService);

export {container};

