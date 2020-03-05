import {IStorageService} from "@/services/IStorageService";
import {DateCustom} from "@/models/DateCustom";

export interface ICookiesService extends IStorageService {
    set(key: string, value: string, expires?: DateCustom | number): void;

}
