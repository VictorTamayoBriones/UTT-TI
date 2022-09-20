import { useState } from "react"
import { ScheduleContext } from "./ScheduleContext"
import { v4 as ID } from 'uuid';
import { IDay } from "../../models/IDay";
interface Props{
    children: JSX.Element
}

export const ScheduleProvider = ({children}:Props) =>{
    
    const emptyRow = {
        id: ID(),
        hours:{
            start: '7:00',
            end: '8:00'
        },
        days:[
            {
                teacher: '',
                subject: '',
                classroom: ''
            },
            {
                teacher: '',
                subject: '',
                classroom: ''
            },
            {
                teacher: '',
                subject: '',
                classroom: ''
            },
            {
                teacher: '',
                subject: '',
                classroom: ''
            },
            {
                teacher: '',
                subject: '',
                classroom: ''
            },
        ]
    }

    const [rows, setRows]=useState([emptyRow])
    
    const addRow = ()=> {
        let tempRow = emptyRow;
        tempRow.id = ID();
        setRows([...rows, tempRow])
    }

    const updateRow = (rowId: string, indexday:number, data: IDay) =>{
        const rowsTemp = rows;

        const rowsUpdate = rowsTemp.map( row => {
            if( row.id === rowId ){
                let dayToUpdate = row.days[indexday];
                dayToUpdate.subject = data.subject;
                dayToUpdate.teacher = data.teacher;
                dayToUpdate.classroom = data.classroom;
            }
            return row
        })

        setRows(rowsUpdate);
    }

    const updateTimeInRow = (rowId: string, hours: string[]) =>{
        const rowsTemp = rows;
        const rowsUpdate = rowsTemp.map( row =>{

            if( row.id === rowId ){
                row.hours.start = hours[0];
                row.hours.end = hours[1];
            }
            return row
        })
        setRows(rowsUpdate);
    }

    const deleteRow = ()=> {
        let finalRow = rows.at(-1);
        setRows([...rows].filter(row => row != finalRow ))
    }

    return(
        <ScheduleContext.Provider value={{rows, addRow, updateRow, deleteRow, updateTimeInRow}} >
            { children }
        </ScheduleContext.Provider>
    )
}