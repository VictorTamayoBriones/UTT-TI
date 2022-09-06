import { useState } from "react"
import { ScheduleContext } from "./ScheduleContext"

interface Props{
    children: JSX.Element[]
}

export const ScheduleProvider = ({children}:Props) =>{

    const emptyRow = {
        id: 0,
        hours: '00:00',
        days:[
            {
                teacher: 'Paco',
                subject: 'PWA',
                classroom: 'Lab. Redes 1'
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
        tempRow.id = rows.length + 1;
        setRows([...rows, tempRow])
    }

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