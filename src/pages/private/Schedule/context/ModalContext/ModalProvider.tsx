import { useState } from "react"
import { IDay } from "../../models/IDay"
import { ModalContext } from "./ModalContext"

interface Props{
    children: JSX.Element[]
}

export const ModalProvider = ({children}:Props) =>{

    const[modal,setModal]=useState({
        modalIsActive: false,
        modalDataForm: {
            teacher:'',
            subject: '',
            classroom: '',
        },
        indexDay: 0,
        rowId: ''
    })

    const handleModal = (status:boolean, data:IDay, rowId:string, indexDay: number)=> {
        setModal({
            modalIsActive: status,
            modalDataForm: data,
            indexDay: indexDay,
            rowId: rowId
        })
    }

    const closeModal = () =>{
        setModal({
            modalIsActive: false,
            modalDataForm: {
                teacher:'',
                subject: '',
                classroom: '',
            },
            indexDay: 0,
            rowId: ''
        })
    }

    return(
        <ModalContext.Provider value={{modal, handleModal, closeModal}} >
            {children}
        </ModalContext.Provider>
    )
}