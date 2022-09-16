import { IDay } from "./IDay";

export interface IRow{
    id: string,
    hours: string,
    days: IDay[]
}