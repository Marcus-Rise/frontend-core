import {inject, injectable} from "tsyringe";
import {User} from "@/models/User";
import JwtDecode from "jwt-decode";
import {IAuthService} from "@/services/IAuthService";
import {IUserService} from "@/services/IUserService";

interface IJwtObj {
    id: string;
    exp: number;
    iat: number;
    roles: string[];
    username: string;
}

@injectable()
export class UserService implements IUserService {
    get parseUserFromToken(): User | null {
        let val: User | null = null;

        const token = this.authService.token;

        if (token) {
            const t: IJwtObj = JwtDecode(token);

            val = new User(t.username, "", t.roles);
        }

        return val;
    }

    constructor(
        @inject("IAuthService")
        private readonly authService: IAuthService,
    ) {
    }
}
