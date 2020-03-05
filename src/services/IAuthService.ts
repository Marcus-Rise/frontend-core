/**
 * @description от сервера пара токен/рефреш-токен
 */
export interface IAuthCredentials {
    readonly token: string;
    readonly refreshToken: string;
}

/**
 * @description сервис для получении инф о токенах и пользователе
 */
export interface IAuthService {
    /**
     * Токен для фоновой авторизации
     */
    refreshToken: string | null;

    /**
     * Токен авторизации
     */
    token: string | null;

    /**
     * авторизован ли пользователь
     */
    isAuth: boolean;

    /**
     * авторизоваться
     */
    login(credentials: IAuthCredentials): void;

    /**
     * деавторизоваться
     */
    logout(): void;
}
