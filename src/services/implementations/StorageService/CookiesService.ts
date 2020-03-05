import {DateCustom} from "@/models/DateCustom";
import {ICookiesService} from "@/services/ICookiesService";

export class CookiesService implements ICookiesService {
    public set(
        name: string,
        value: string,
        expires: DateCustom | number = DateCustom.dateNow.getDateBefore(2, "days"),
    ): void {
        const expiresString = "expires=" + (expires instanceof DateCustom ? expires.date.utc() : expires);
        document.cookie = name + "=" + value + ";" + expiresString + ";path=/";
    }

    public get(name: string): string | null {
        const nameString = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");

        let val = "";

        for (let c of ca) {
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(nameString) === 0) {
                val = c.substring(nameString.length, c.length);
            }
        }

        return val || null;
    }

    public delete(name: string): void {
        document.cookie = name + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }

    public clear(): void {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
}
