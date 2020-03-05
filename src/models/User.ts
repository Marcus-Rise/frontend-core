export class User {
    public readonly name: string;
    public readonly email: string;
    public readonly roles: string[];

    constructor(dto?: IUserDTO)
    constructor(
        username?: string,
        email?: string,
        roles?: string[]
    )
    constructor(
        usernameOrDto: string | IUserDTO = "",
        email = "",
        roles: string[] = [],
    ) {
        if (typeof usernameOrDto !== "string") {
            this.name = usernameOrDto.username;
            this.email = usernameOrDto.email;
            this.roles = usernameOrDto.roles;
        } else {
            this.name = usernameOrDto;
            this.email = email;
            this.roles = roles;
        }
    }
}

export interface IUserDTO {
    username: string;
    roles: string[];
    email: string;
}
