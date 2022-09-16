import { createContext } from "react";
import { IRow } from "../../models/IRow";

interface RowState{
    rows: IRow[],
    addRow: ()=>void,
    deleteRow: ()=>void
}

export const ScheduleContext = createContext({} as RowState );