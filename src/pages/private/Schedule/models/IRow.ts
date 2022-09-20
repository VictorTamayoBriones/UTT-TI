import { IDay } from "./IDay";

export interface IRow{
    id: string,
    hours: {
        start: string,
        end: string
    },
    days: IDay[]
}