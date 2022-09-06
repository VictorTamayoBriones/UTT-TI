import { IDay } from "./IDay";

export interface IRow{
    id: number,
    hours: string,
    days: IDay[]
}