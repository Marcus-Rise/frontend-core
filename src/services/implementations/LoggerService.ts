import {injectable} from "tsyringe";
import {ILoggerService} from "@/services/ILoggerService";
import ConsoleConstructor = NodeJS.ConsoleConstructor;

/* eslint-disable no-console */

@injectable()
export class LoggerService implements ILoggerService {
    /* constructor(
         @inject("IAppService")
         private readonly appService: IAppService
     ) {
     }*/

    get Console(): ConsoleConstructor {
        return console.Console;
    }

    get memory(): any {
        return console.memory;
    }

    assert(condition?: boolean, message?: string, ...data: any[]): void {
        console.assert(condition, message, data);
    }

    clear(): void {
        console.clear();
    }

    count(label?: string): void {
        console.count(label);
    }

    debug(message?: any, ...optionalParams: any[]): void {
        console.debug(message, optionalParams);
    }

    dir(value?: any, ...optionalParams: any[]): void {
        console.dir(value, optionalParams);
    }

    dirxml(value: any): void {
        console.dirxml(value);
    }

    error(message?: any, ...optionalParams: any[]): void {
        console.error(message, optionalParams);
    }

    exception(message?: string, ...optionalParams: any[]): void {
        console.exception(message, optionalParams);
    }

    group(groupTitle?: string, ...optionalParams: any[]): void {
        console.group(groupTitle, optionalParams);
    }

    groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void {
        console.group(groupTitle, optionalParams);
    }

    groupEnd(): void {
        console.groupEnd();
    }

    info(message?: any, ...optionalParams: any[]): void {
        console.info(message, optionalParams);
    }

    log(message?: any, ...optionalParams: any[]): void {
        console.log(message, optionalParams);
    }

    markTimeline(label?: string): void {
        console.markTimeline(label);
    }

    profile(reportName?: string): void {
        console.profile(reportName);
    }

    profileEnd(reportName?: string): void {
        console.profileEnd(reportName);
    }

    table(...tabularData: any[]): void {
        console.table(tabularData);
    }

    time(label?: string): void {
        console.time(label);
    }

    timeEnd(label?: string): void {
        console.timeEnd(label);
    }

    timeStamp(label?: string): void {
        console.timeStamp(label);
    }

    timeline(label?: string): void {
        console.timeline(label);
    }

    timelineEnd(label?: string): void {
        console.timelineEnd(label);
    }

    trace(message?: any, ...optionalParams: any[]): void {
        console.trace(message, optionalParams);
    }

    warn(message?: any, ...optionalParams: any[]): void {
        console.warn(message, optionalParams);
    }

    countReset(label?: string): void {
    }

    timeLog(label?: string, ...data: any[]): void {
    }
}
