import moment, {Moment} from "moment";

/**
 * Свой класс Даты
 *
 */
export class DateCustom {
    get stringFormatted(): string {
        return this._stringFormatted;
    }

    set stringFormatted(value: string) {
        this._stringFormatted = value;
        this._date = moment(this._stringFormatted, "YYYY-MM-DD");
    }

    get date(): Moment {
        return this._date;
    }

    set date(value: Moment) {
        this._date = value;
        this._stringFormatted = this._date.format("YYYY-MM-DD");
    }

    get year(): number {
        return this._date.year();
    }

    get month(): number {
        return this._date.month() + 1;
    }

    get day(): number {
        return this._date.date();
    }


    get webFormatted(): string {
        return this._date.format("DD.MM.YYYY");
    }

    get apiFormatted(): string {
        return this._date.format("YYYY-MM-DD");
    }

    /**
     * Получить текущую дату
     *
     * @return DateCustom
     */
    static get dateNow(): DateCustom {
        return new DateCustom(new Date(Date.now()));
    }

    public static getPeriodInDays(dateStart: DateCustom, dateEnd: DateCustom): number {
        return dateStart.getPeriodInDays(dateEnd);
    }

    private _date: Moment;
    private _stringFormatted: string;

    constructor(date: Date | string | Moment)
    constructor(dayOrYear: string | number, month: string | number, yearOrDay: number | string)
    constructor(
        dateOrDayOrYear?: string | Date | number | Moment,
        month?: string | number,
        yearOrDay?: string | number,
    ) {
        let parsedDay = 0;
        let parsedMonth = 0;
        let parsedYear = 0;

        if (typeof dateOrDayOrYear === "string" && !month && !yearOrDay) {
            let splitter: string[] = dateOrDayOrYear.split("-");

            if (splitter.length !== 3) {
                splitter = dateOrDayOrYear.split(".");
            }

            if (splitter.length !== 3) {
                splitter = dateOrDayOrYear.split(" ");
            }

            if (splitter.length === 3) {
                parsedDay = parseInt(splitter[0]);
                parsedMonth = parseInt(splitter[1]);
                parsedYear = parseInt(splitter[2]);
            } else {
                this._date = DateCustom.dateNow._date;
                this._stringFormatted = this._date.format("YYYY-MM-DD");
            }
        } else if (!month && !yearOrDay) {
            const dateBuf: Moment = moment(dateOrDayOrYear);
            parsedDay = dateBuf.date();
            parsedMonth = dateBuf.month() + 1;
            parsedYear = dateBuf.year();
        } else if ((typeof dateOrDayOrYear === "string" || typeof dateOrDayOrYear === "number") && month && yearOrDay) {
            parsedMonth = typeof month === "string" ? parseInt(month) : month;
            parsedDay = typeof dateOrDayOrYear === "string" ? parseInt(dateOrDayOrYear) : dateOrDayOrYear;
            parsedYear = typeof yearOrDay === "string" ? parseInt(yearOrDay) : yearOrDay;
        }

        if (parsedDay > 33) {
            const buf: number = parsedYear;
            parsedYear = parsedDay;
            parsedDay = buf;
        }

        const monthString = `${(parsedMonth < 10) ? `0${parsedMonth}` : parsedMonth}`;
        const dayString = `${(parsedDay < 10) ? `0${parsedDay}` : parsedDay}`;
        const date = `${parsedYear}-${monthString}-${dayString}`;

        this._date = moment(date);

        if (this._date.isValid()) {
            this._stringFormatted = this._date.format("YYYY-MM-DD");
        } else {
            this._date = DateCustom.dateNow.getDateBefore(180, "years")._date;
            this._stringFormatted = this._date.format("YYYY-MM-DD");
        }
    }

    public getPeriodInDays(date: DateCustom): number {
        return this.diff(date, "days");
    }

    public toString(): string {
        return this.webFormatted;
    }

    public getDateAfter(value: number, type: dateType): DateCustom {
        return new DateCustom(this._date.clone().add(value, type));
    }

    public getDateBefore(value: number, type: dateType): DateCustom {
        return new DateCustom(this._date.clone().subtract(value, type));
    }

    public diff(date: DateCustom, type: dateType = "days", abs = true): number {
        const diff: number = this._date.diff(date.date, type);

        return abs ? Math.abs(diff) : diff;
    }
}

export type dateType = "days" | "months" | "years";
