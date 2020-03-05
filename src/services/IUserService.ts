import {User} from "@/models/User";

export interface IUserService {
    readonly parseUserFromToken: User | null;
}
