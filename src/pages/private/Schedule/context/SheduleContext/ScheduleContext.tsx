import { createContext } from "react";
import { IDay } from "../../models/IDay";
import { IRow } from "../../models/IRow";

interface RowState{
    rows: IRow[],
    addRow: ()=>void,
    updateRow: (rowId: string, indexDay:number, data: IDay)=>void,
    updateTimeInRow: (rowId: string, hours: string[])=>void,
    deleteRow: ()=>void
}

export const ScheduleContext = createContext({} as RowState );