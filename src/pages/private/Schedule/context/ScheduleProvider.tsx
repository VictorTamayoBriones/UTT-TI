import { useState } from "react"
import { ScheduleContext } from "./ScheduleContext"

interface Props{
    children: JSX.Element
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

    const [rows, setRows]=useState([
        {
            hours: '00:00',
            days:[
                {
                    teacher: '',
                    subject: '',
                    classroom: ''
                }
            ]
        }
    ])
    
    const addRow = ()=> setRows([...rows, emptyRow])

    return(
        <ScheduleContext.Provider value={{rows, addRow}} >
            { children }
        </ScheduleContext.Provider>
    )
}