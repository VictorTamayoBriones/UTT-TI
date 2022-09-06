import { useState } from "react"
import { ScheduleContext } from "./ScheduleContext"

interface Props{
    children: JSX.Element[]
}

export const ScheduleProvider = ({children}:Props) =>{

    const emptyRow = {
        hours: '00:00',
        days:[
            {
                teacher: '',
                subject: '',
                classroom: ''
            }
        ]
    }

    const [rows, setRows]=useState([emptyRow])
    
    const addRow = ()=> setRows([...rows, emptyRow])

    const deleteRow = ()=> {
        let finalRow = rows.at(-1);
        setRows([...rows].filter(row => row != finalRow ))
    }

    return(
        <ScheduleContext.Provider value={{rows, addRow, deleteRow}} >
            { children }
        </ScheduleContext.Provider>
    )
}